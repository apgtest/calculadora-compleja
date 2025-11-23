/* ========================================
   SERVICE WORKER - VERSIÓN MEJORADA
   
   Gestiona el cacheo inteligente y funcionalidad offline
   de la calculadora de números complejos.
   
   Estrategia: Cache First con actualización en background
   ======================================== */

// VERSIÓN DEL CACHÉ - Incrementar para forzar actualización
const CACHE_VERSION = 'v2.0.0';
const CACHE_NAME = `calculadora-compleja-${CACHE_VERSION}`;

// Caché para recursos estáticos (HTML, CSS, JS)
const STATIC_CACHE = `static-${CACHE_VERSION}`;

// Caché para datos dinámicos (historial, preferencias)
const DYNAMIC_CACHE = `dynamic-${CACHE_VERSION}`;

// Archivos esenciales que SIEMPRE deben estar en caché
const ESSENTIAL_FILES = [
  './',
  './index.html',
  './manifest.json'
];

// Archivos opcionales (no bloquean la instalación)
const OPTIONAL_FILES = [
  './favicon.ico'
];

/* ========================================
   EVENTO: INSTALL
   
   Se ejecuta cuando el Service Worker se instala.
   Aquí pre-cacheamos todos los recursos esenciales.
   ======================================== */

self.addEventListener('install', (event) => {
  console.log(`🔧 [SW] Instalando Service Worker ${CACHE_VERSION}...`);
  
  event.waitUntil(
    Promise.all([
      // Cachear archivos esenciales (debe completarse)
      caches.open(STATIC_CACHE).then((cache) => {
        console.log('📦 [SW] Cacheando archivos esenciales...');
        return cache.addAll(ESSENTIAL_FILES);
      }),
      
      // Intentar cachear archivos opcionales (no crítico)
      caches.open(STATIC_CACHE).then((cache) => {
        return Promise.allSettled(
          OPTIONAL_FILES.map(url => 
            cache.add(url).catch(err => 
              console.log(`⚠️ [SW] Archivo opcional no disponible: ${url}`)
            )
          )
        );
      })
    ])
    .then(() => {
      console.log('✅ [SW] Instalación completada');
      // Forzar activación inmediata
      return self.skipWaiting();
    })
    .catch((error) => {
      console.error('❌ [SW] Error durante instalación:', error);
      throw error;
    })
  );
});

/* ========================================
   EVENTO: ACTIVATE
   
   Se ejecuta cuando el Service Worker se activa.
   Limpia cachés antiguos y toma control de las páginas.
   ======================================== */

self.addEventListener('activate', (event) => {
  console.log(`✅ [SW] Activando Service Worker ${CACHE_VERSION}...`);
  
  event.waitUntil(
    Promise.all([
      // Limpiar cachés viejos
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            // Si el caché no pertenece a la versión actual, eliminarlo
            if (cacheName !== STATIC_CACHE && 
                cacheName !== DYNAMIC_CACHE &&
                cacheName !== CACHE_NAME) {
              console.log(`🗑️ [SW] Eliminando caché antigua: ${cacheName}`);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      
      // Tomar control inmediato de todas las páginas
      self.clients.claim()
    ])
    .then(() => {
      console.log('🎉 [SW] Service Worker activado y listo');
    })
  );
});

/* ========================================
   EVENTO: FETCH
   
   Intercepta todas las peticiones de red.
   Estrategia: Cache First, luego Network
   
   1. Busca en caché primero
   2. Si no está, va a la red
   3. Guarda respuesta nueva en caché
   4. Si la red falla, intenta caché como respaldo
   ======================================== */

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Solo manejar peticiones HTTP/HTTPS
  if (!request.url.startsWith('http')) {
    return;
  }
  
  // Ignorar peticiones a dominios externos (APIs, CDN, etc)
  if (url.origin !== location.origin) {
    return;
  }
  
  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        // Si está en caché, devolverlo inmediatamente
        if (cachedResponse) {
          console.log(`📂 [SW] Servido desde caché: ${url.pathname}`);
          
          // Actualizar caché en background (stale-while-revalidate)
          updateCacheInBackground(request);
          
          return cachedResponse;
        }
        
        // No está en caché, ir a la red
        console.log(`🌐 [SW] Descargando de red: ${url.pathname}`);
        return fetchAndCache(request);
      })
      .catch((error) => {
        console.error(`❌ [SW] Error al obtener recurso:`, error);
        
        // Si todo falla, intentar devolver la página principal desde caché
        if (request.mode === 'navigate') {
          return caches.match('./index.html');
        }
        
        // Para otros recursos, devolver una respuesta de error genérica
        return new Response('Recurso no disponible offline', {
          status: 503,
          statusText: 'Service Unavailable',
          headers: new Headers({
            'Content-Type': 'text/plain'
          })
        });
      })
  );
});

/* ========================================
   FUNCIÓN: fetchAndCache
   
   Descarga un recurso de la red y lo guarda en caché.
   ======================================== */

function fetchAndCache(request) {
  return fetch(request)
    .then((response) => {
      // Verificar que la respuesta sea válida
      if (!response || response.status !== 200 || response.type !== 'basic') {
        return response;
      }
      
      // Clonar la respuesta (solo se puede usar una vez)
      const responseToCache = response.clone();
      
      // Guardar en caché apropiado según el tipo de recurso
      const cacheName = shouldCacheDynamically(request) ? DYNAMIC_CACHE : STATIC_CACHE;
      
      caches.open(cacheName)
        .then((cache) => {
          cache.put(request, responseToCache);
          console.log(`💾 [SW] Guardado en caché: ${request.url}`);
        })
        .catch((error) => {
          console.error('❌ [SW] Error al guardar en caché:', error);
        });
      
      return response;
    })
    .catch((error) => {
      console.error('❌ [SW] Error de red:', error);
      throw error;
    });
}

/* ========================================
   FUNCIÓN: updateCacheInBackground
   
   Actualiza el caché en segundo plano mientras
   se sirve la versión cacheada (stale-while-revalidate).
   ======================================== */

function updateCacheInBackground(request) {
  fetch(request)
    .then((response) => {
      if (response && response.status === 200) {
        const responseToCache = response.clone();
        const cacheName = shouldCacheDynamically(request) ? DYNAMIC_CACHE : STATIC_CACHE;
        
        caches.open(cacheName).then((cache) => {
          cache.put(request, responseToCache);
          console.log(`🔄 [SW] Caché actualizado en background: ${request.url}`);
        });
      }
    })
    .catch(() => {
      // Silenciosamente fallar - ya servimos desde caché
    });
}

/* ========================================
   FUNCIÓN: shouldCacheDynamically
   
   Determina si un recurso debe ir al caché dinámico.
   ======================================== */

function shouldCacheDynamically(request) {
  const url = new URL(request.url);
  const path = url.pathname;
  
  // Recursos dinámicos que cambian frecuentemente
  const dynamicPatterns = [
    /\/api\//,
    /\/data\//,
    /\?/  // URLs con query strings
  ];
  
  return dynamicPatterns.some(pattern => pattern.test(path));
}

/* ========================================
   EVENTO: MESSAGE
   
   Permite comunicación bidireccional entre
   la app y el Service Worker.
   ======================================== */

self.addEventListener('message', (event) => {
  console.log('📨 [SW] Mensaje recibido:', event.data);
  
  if (!event.data || !event.data.type) {
    return;
  }
  
  switch(event.data.type) {
    case 'SKIP_WAITING':
      // Activar nuevo Service Worker inmediatamente
      self.skipWaiting();
      break;
      
    case 'CLEAR_CACHE':
      // Limpiar todo el caché
      event.waitUntil(
        caches.keys().then((cacheNames) => {
          return Promise.all(
            cacheNames.map((cacheName) => {
              console.log(`🗑️ [SW] Eliminando caché: ${cacheName}`);
              return caches.delete(cacheName);
            })
          );
        }).then(() => {
          console.log('🧹 [SW] Todo el caché ha sido eliminado');
          // Notificar a los clientes
          self.clients.matchAll().then(clients => {
            clients.forEach(client => {
              client.postMessage({
                type: 'CACHE_CLEARED',
                message: 'Caché eliminado exitosamente'
              });
            });
          });
        })
      );
      break;
      
    case 'GET_CACHE_SIZE':
      // Calcular tamaño total del caché
      event.waitUntil(
        calculateCacheSize().then(size => {
          event.ports[0].postMessage({
            type: 'CACHE_SIZE',
            size: size
          });
        })
      );
      break;
      
    case 'UPDATE_CACHE':
      // Forzar actualización de caché
      event.waitUntil(
        updateAllCaches().then(() => {
          event.ports[0].postMessage({
            type: 'CACHE_UPDATED',
            message: 'Caché actualizado'
          });
        })
      );
      break;
      
    default:
      console.log('⚠️ [SW] Tipo de mensaje no reconocido:', event.data.type);
  }
});

/* ========================================
   FUNCIÓN: calculateCacheSize
   
   Calcula el tamaño aproximado de todos los cachés.
   ======================================== */

async function calculateCacheSize() {
  let totalSize = 0;
  
  const cacheNames = await caches.keys();
  
  for (const cacheName of cacheNames) {
    const cache = await caches.open(cacheName);
    const keys = await cache.keys();
    
    for (const request of keys) {
      const response = await cache.match(request);
      if (response) {
        const blob = await response.blob();
        totalSize += blob.size;
      }
    }
  }
  
  return totalSize;
}

/* ========================================
   FUNCIÓN: updateAllCaches
   
   Re-cachea todos los recursos esenciales.
   ======================================== */

async function updateAllCaches() {
  console.log('🔄 [SW] Actualizando todos los cachés...');
  
  const cache = await caches.open(STATIC_CACHE);
  
  const updatePromises = ESSENTIAL_FILES.map(async (url) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        await cache.put(url, response);
        console.log(`✅ [SW] Actualizado: ${url}`);
      }
    } catch (error) {
      console.error(`❌ [SW] Error al actualizar ${url}:`, error);
    }
  });
  
  await Promise.all(updatePromises);
  console.log('✅ [SW] Todos los cachés actualizados');
}

/* ========================================
   EVENTO: SYNC (Background Sync)
   
   Para sincronización en background cuando hay conexión.
   (Requiere registro desde la app)
   ======================================== */

self.addEventListener('sync', (event) => {
  console.log('🔄 [SW] Evento de sincronización:', event.tag);
  
  if (event.tag === 'sync-calculations') {
    event.waitUntil(
      // Aquí podrías sincronizar datos con un servidor
      syncCalculations()
    );
  }
});

async function syncCalculations() {
  console.log('🔄 [SW] Sincronizando cálculos...');
  // Implementar lógica de sincronización si es necesario
  return Promise.resolve();
}

/* ========================================
   EVENTO: PUSH (Notificaciones Push)
   
   Para recibir notificaciones push.
   (Requiere suscripción desde la app)
   ======================================== */

self.addEventListener('push', (event) => {
  console.log('📬 [SW] Notificación push recibida');
  
  let notificationData = {
    title: 'Calculadora Compleja',
    body: 'Tienes una notificación',
    icon: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%23667eea"/%3E%3Ctext x="50" y="70" font-size="60" text-anchor="middle" fill="white"%3EC%3C/text%3E%3C/svg%3E',
    badge: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="50" r="50" fill="%23667eea"/%3E%3C/svg%3E'
  };
  
  if (event.data) {
    notificationData = event.data.json();
  }
  
  event.waitUntil(
    self.registration.showNotification(notificationData.title, {
      body: notificationData.body,
      icon: notificationData.icon,
      badge: notificationData.badge
    })
  );
});

/* ========================================
   EVENTO: NOTIFICATIONCLICK
   
   Maneja clicks en notificaciones.
   ======================================== */

self.addEventListener('notificationclick', (event) => {
  console.log('🔔 [SW] Click en notificación');
  
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow('./')
  );
});

/* ========================================
   LOG INICIAL
   ======================================== */

console.log(`🚀 [SW] Service Worker ${CACHE_VERSION} cargado`);
console.log(`📦 [SW] Caché estático: ${STATIC_CACHE}`);
console.log(`💾 [SW] Caché dinámico: ${DYNAMIC_CACHE}`);