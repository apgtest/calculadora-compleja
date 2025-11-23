# Calculadora de Números Complejos PWA

Una calculadora Progressive Web App avanzada y completa para realizar operaciones con números complejos. Incluye funciones trigonométricas, exponenciales, logaritmos, historial, modo oscuro, gráficas interactivas y más.

## ✨ Características Principales

### Operaciones Matemáticas
✅ **Operaciones básicas**: Suma, resta, multiplicación, división  
✅ **Funciones avanzadas**: Potencias, raíces n-ésimas, exponencial, logaritmo  
✅ **Funciones trigonométricas**: sin, cos, tan, cot, sec  
✅ **Funciones hiperbólicas**: sinh, cosh, tanh  
✅ **Operaciones especiales**: Conjugado, módulo, argumento, forma polar  

### Características de la Aplicación
✅ **Funciona sin internet** después de la primera carga  
✅ **Historial completo** de todas las operaciones  
✅ **Modo oscuro** para proteger la vista  
✅ **Gráficas del plano complejo** interactivas y con zoom  
✅ **Exportar historial** a archivo de texto  
✅ **Instalable** en Android, iOS, Windows, Mac y Linux  
✅ **Responsive** - Se adapta a cualquier pantalla  
✅ **Ligera** - Menos de 100KB total  
✅ **Sin dependencias externas** - Todo el código es propio  

---

## 📁 Archivos del Proyecto

Tu proyecto solo necesita **3 archivos**:

```
calculadora-compleja/
│
├── index.html          # Archivo principal (HTML + CSS + JavaScript)
├── manifest.json       # Configuración de la PWA
├── service-worker.js   # Funcionalidad offline
└── README.md          # Esta documentación
```


## 🎯 Cómo Usar la Calculadora

### Interfaz Principal

La calculadora tiene 4 pestañas principales:

1. **Básicas** - Operaciones fundamentales
2. **Avanzadas** - Exponenciales, logaritmos, raíces
3. **Trigonométricas** - Funciones trigonométricas e hiperbólicas
4. **Gráfica** - Visualización en el plano complejo

### Formato de Números Complejos

Los números complejos tienen la forma: **z = a + bi**

- **a** = Parte real (Re)
- **b** = Parte imaginaria (Im)
- **i** = Unidad imaginaria (i² = -1)

### Ejemplos de Entrada

| Número | Parte Real | Parte Imaginaria |
|--------|------------|------------------|
| 3 + 4i | 3 | 4 |
| -2 - 5i | -2 | -5 |
| 7 (real puro) | 7 | 0 |
| 3i (imaginario puro) | 0 | 3 |
| -i | 0 | -1 |

### Pasos para Calcular

1. **Ingresa z₁**: Parte real e imaginaria del primer número
2. **Ingresa z₂**: Parte real e imaginaria del segundo número
3. **Selecciona operación**: Click en el botón correspondiente
4. **Ve el resultado**: Aparece en la pantalla superior
5. **Consulta historial**: Todas las operaciones se guardan automáticamente

---

## 🧮 Funciones Disponibles

### Pestaña: Básicas

| Botón | Función | Ejemplo |
|-------|---------|---------|
| **+** | Suma | (3+4i) + (1+2i) = 4+6i |
| **−** | Resta | (5+3i) - (2+1i) = 3+2i |
| **×** | Multiplicación | (2+i)(3+i) = 5+5i |
| **÷** | División | (4+2i)/(1+i) = 3-i |
| **Conj z₁** | Conjugado de z₁ | conj(3+4i) = 3-4i |
| **Conj z₂** | Conjugado de z₂ | conj(1-2i) = 1+2i |
| **\|z₁\|** | Módulo de z₁ | \|3+4i\| = 5 |
| **\|z₂\|** | Módulo de z₂ | \|5+12i\| = 13 |
| **Polar z₁** | Forma polar z₁ | 3+4i = 5∠53.13° |
| **Polar z₂** | Forma polar z₂ | 1+i = 1.414∠45° |
| **Limpiar** | Borra todo | - |

### Pestaña: Avanzadas

| Botón | Función | Descripción |
|-------|---------|-------------|
| **z₁ⁿ** | Potencia | Eleva z₁ a cualquier exponente n |
| **ⁿ√z₁** | Raíz n-ésima | Calcula la raíz n-ésima de z₁ |
| **e^z₁** | Exponencial | e elevado a z₁ |
| **e^z₂** | Exponencial | e elevado a z₂ |
| **ln(z₁)** | Logaritmo natural | Logaritmo natural de z₁ |
| **ln(z₂)** | Logaritmo natural | Logaritmo natural de z₂ |
| **√z₁** | Raíz cuadrada | Raíz cuadrada de z₁ |
| **√z₂** | Raíz cuadrada | Raíz cuadrada de z₂ |
| **1/z₁** | Inverso | Inverso multiplicativo de z₁ |
| **1/z₂** | Inverso | Inverso multiplicativo de z₂ |
| **Arg z₁** | Argumento | Ángulo de z₁ en el plano complejo |
| **Arg z₂** | Argumento | Ángulo de z₂ en el plano complejo |

### Pestaña: Trigonométricas

| Botón | Función | Tipo |
|-------|---------|------|
| **sin(z₁)** | Seno | Trigonométrica |
| **cos(z₁)** | Coseno | Trigonométrica |
| **tan(z₁)** | Tangente | Trigonométrica |
| **cot(z₁)** | Cotangente | Trigonométrica |
| **sec(z₁)** | Secante | Trigonométrica |
| **sinh(z₁)** | Seno hiperbólico | Hiperbólica |
| **cosh(z₁)** | Coseno hiperbólico | Hiperbólica |
| **tanh(z₁)** | Tangente hiperbólica | Hiperbólica |
| **sin(z₂)** | Seno de z₂ | Trigonométrica |
| **cos(z₂)** | Coseno de z₂ | Trigonométrica |
| **tan(z₂)** | Tangente de z₂ | Trigonométrica |
| **sinh(z₂)** | Seno hiperbólico z₂ | Hiperbólica |

### Pestaña: Gráfica

| Botón | Función |
|-------|---------|
| **Graficar** | Dibuja z₁ y z₂ en el plano complejo |
| **Limpiar** | Limpia la gráfica |
| **Graficar Op.** | Dibuja z₁, z₂ y su suma |
| **Zoom +** | Aumenta el zoom |

---

## 🌟 Características Avanzadas

### 1. Historial de Operaciones

**Acceso**: Click en el botón "📜 Historial"

**Funcionalidades**:
- Guarda automáticamente todas las operaciones
- Muestra fecha y hora de cada cálculo
- Click en cualquier entrada para cargarla
- Exporta todo el historial a archivo .txt
- Limpia el historial cuando quieras
- Guarda hasta 50 operaciones recientes
- Persiste incluso si cierras el navegador

**Exportar Historial**:
1. Abre el historial
2. Click en "📄 Exportar Historial"
3. Se descarga un archivo .txt con todas las operaciones

### 2. Modo Oscuro

**Activar**: Click en "🌙 Modo Oscuro"

**Características**:
- Reduce fatiga visual
- Ideal para uso nocturno
- Guarda tu preferencia automáticamente
- Cambia todos los colores de la interfaz
- Incluye la gráfica del plano complejo

### 3. Gráficas del Plano Complejo

**Visualiza números complejos** como puntos o vectores en el plano de Argand:

- **Eje X (horizontal)**: Parte real
- **Eje Y (vertical)**: Parte imaginaria
- **Vector**: Línea desde el origen hasta el punto

**Funciones**:
- Graficar z₁ y z₂ simultáneamente
- Ver la suma geométrica (z₁ + z₂)
- Zoom para ver detalles
- Etiquetas automáticas
- Colores diferentes para cada número

### 4. Funciona Sin Internet

**Después de la primera visita**:
- Todo el código se guarda en tu dispositivo
- Cálculos se hacen localmente
- No necesitas conexión para usarla
- Historial se guarda en el dispositivo
- Preferencias se mantienen offline

**Indicador de Estado**:
- 🟢 Online: Conectado a internet
- 🔴 Offline: Sin conexión (sigue funcionando)

### 5. Atajos de Teclado

| Tecla | Acción |
|-------|--------|
| **Enter** | Calcular (suma por defecto) |
| **Escape** | Limpiar todo |
| **Tab** | Navegar entre campos |

---


## 🔧 Solución de Problemas

### Problema: No aparece el banner de instalación

**Soluciones**:
1. Verifica que estés usando HTTPS (GitHub Pages usa HTTPS automáticamente)
2. Recarga la página con Ctrl+F5 (Windows) o Cmd+Shift+R (Mac)
3. Verifica que existan los 3 archivos en el repositorio
4. Intenta instalación manual desde el menú del navegador
5. En Chrome: F12 → Application → Manifest (verifica errores)

### Problema: No funciona sin internet

**Soluciones**:
1. **Importante**: Debes visitar la app AL MENOS UNA VEZ con internet
2. F12 → Application → Service Workers → Verifica que esté "activated"
3. Limpia caché: F12 → Application → Clear storage → Clear site data
4. Recarga con Ctrl+F5
5. Verifica en `chrome://serviceworker-internals/` (Chrome)

### Problema: La gráfica no se muestra

**Soluciones**:
1. Cambia a la pestaña "Gráfica"
2. Espera 1-2 segundos para que se inicialice el canvas
3. Ingresa números diferentes de cero
4. Click en "Graficar"
5. Si sigue sin aparecer, recarga la página

### Problema: El historial no se guarda

**Soluciones**:
1. Verifica que el navegador permita localStorage
2. Revisa si tienes espacio en el dispositivo
3. No uses modo incógnito/privado
4. Verifica permisos del navegador
5. Prueba en otro navegador

### Problema: Modo oscuro no funciona

**Soluciones**:
1. Click en "🌙 Modo Oscuro"
2. Recarga la página
3. Limpia caché del navegador
4. Verifica que localStorage esté habilitado

### Problema: Los cálculos dan error

**Causas comunes**:
- **División por cero**: No puedes dividir por 0+0i
- **ln(0)**: No está definido
- **Raíz de orden 0**: No es válida

**Solución**: Verifica que los números ingresados sean válidos para la operación.

### Problema: GitHub Pages no publica

**Soluciones**:
1. Verifica que el repositorio sea **Public**
2. Espera 5-10 minutos después de activar Pages
3. Verifica que `index.html` esté en la raíz (no en carpeta)
4. Settings → Pages → Debe decir "Your site is live at..."
5. Verifica la URL correcta: `https://USUARIO.github.io/REPO/`
6. Revisa que no haya errores en los archivos (HTML válido)

### Problema: Los iconos no aparecen

**Solución**: Los iconos SVG están incrustados en el código, no necesitas archivos adicionales. Si no aparecen:
1. Verifica que `manifest.json` esté en la raíz
2. Desinstala y reinstala la PWA
3. Limpia caché del navegador

---




## 🎓 Formulas Matemáticas Implementadas

### Operaciones Básicas

**Suma**: (a+bi) + (c+di) = (a+c) + (b+d)i

**Resta**: (a+bi) - (c+di) = (a-c) + (b-d)i

**Multiplicación**: (a+bi)(c+di) = (ac-bd) + (ad+bc)i

**División**: (a+bi)/(c+di) = [(a+bi)(c-di)] / (c²+d²)

### Funciones Especiales

**Módulo**: |z| = √(a² + b²)

**Argumento**: arg(z) = arctan(b/a)

**Conjugado**: z̄ = a - bi

**Forma Polar**: z = r∠θ = r·e^(iθ)

### Funciones Avanzadas

**Exponencial**: e^(a+bi) = e^a · (cos(b) + i·sin(b))

**Logaritmo**: ln(a+bi) = ln|z| + i·arg(z)

**Potencia**: z^n = r^n · (cos(nθ) + i·sin(nθ)) (Fórmula de De Moivre)

**Raíz n-ésima**: ⁿ√z = r^(1/n) · (cos(θ/n) + i·sin(θ/n))

### Funciones Trigonométricas

**Seno**: sin(z) = (e^(iz) - e^(-iz)) / (2i)

**Coseno**: cos(z) = (e^(iz) + e^(-iz)) / 2

**Tangente**: tan(z) = sin(z) / cos(z)

### Funciones Hiperbólicas

**Seno hiperbólico**: sinh(z) = (e^z - e^(-z)) / 2

**Coseno hiperbólico**: cosh(z) = (e^z + e^(-z)) / 2

**Tangente hiperbólica**: tanh(z) = sinh(z) / cosh(z)

---


## Contribuir

Si quieres mejorar la calculadora:

1. **Fork** del repositorio
2. Crea una rama: `git checkout -b mejora-nueva`
3. Haz cambios y commit: `git commit -m "Descripción"`
4. Push: `git push origin mejora-nueva`
5. Crea un **Pull Request** en GitHub

### Ideas para contribuciones

- 🌍 Traducir a otros idiomas
- 🎨 Nuevos temas de color
- 📊 Más tipos de gráficas
- 🧮 Nuevas funciones matemáticas
- 📱 Mejoras de UX/UI
- 🐛 Reportar bugs
- 📖 Mejorar documentación

---


### Pruebas Offline
- [ ] Visita la página con internet
- [ ] Cierra el navegador
- [ ] Desconecta internet
- [ ] Abre la página nuevamente
- [ ] Verifica que funcione sin conexión

### Instalación
- [ ] Banner de instalación aparece (o instalación manual funciona)
- [ ] Se instala correctamente en el dispositivo
- [ ] Icono aparece en pantalla de inicio
- [ ] App abre en modo standalone (sin barra del navegador)
- [ ] Funciona offline después de instalar

---

## 🎯 Casos de Uso

### Para Estudiantes
✅ Resolver tareas de álgebra y cálculo  
✅ Verificar resultados manualmente calculados  
✅ Aprender visualizando en el plano complejo  
✅ Practicar con funciones trigonométricas  

### Para Profesores
✅ Demostrar operaciones complejas en clase  
✅ Crear ejemplos visuales con gráficas  
✅ Enseñar forma rectangular vs polar  
✅ Mostrar propiedades geométricas  

### Para Ingenieros
✅ Análisis de circuitos eléctricos (impedancias)  
✅ Procesamiento de señales  
✅ Cálculos de control automático  
✅ Análisis de sistemas dinámicos  

### Para Matemáticos
✅ Explorar propiedades de funciones complejas  
✅ Verificar identidades trigonométricas  
✅ Calcular transformaciones conformes  
✅ Estudiar comportamiento de funciones  

---

## 🔐 Privacidad y Seguridad

### Datos Locales
✅ **Todo se guarda en tu dispositivo**  
✅ No se envía información a servidores  
✅ No hay tracking ni analytics  
✅ No se recopilan datos personales  
✅ Historial privado y local  

### localStorage
La app usa `localStorage` para:
- Guardar historial de operaciones
- Recordar preferencia de tema (oscuro/claro)
- Todo permanece en tu navegador
- Puedes limpiarlo cuando quieras

### Service Worker
- Solo cachea archivos de la propia app
- No intercepta peticiones a otros sitios
- Código completamente visible y auditable
- No se comunica con servidores externos

---

## 📈 Rendimiento

### Optimizaciones Implementadas

✅ **CSS inline** - Carga instantánea de estilos  
✅ **JavaScript inline** - Sin peticiones adicionales  
✅ **SVG icons** - Sin archivos de imagen  
✅ **Cache-first strategy** - Carga instantánea offline  
✅ **Lazy canvas** - Canvas se crea solo cuando es necesario  
✅ **localStorage eficiente** - Historial comprimido  

---

## 🎨 Personalización Avanzada

### Cambiar Tema de Colores

Crea tu propio esquema de colores editando en `index.html`:

```css
/* Tu tema personalizado */
:root {
  --bg-gradient-start: #FF6B6B;  /* Rojo coral */
  --bg-gradient-end: #4ECDC4;    /* Turquesa */
  --btn-primary: #FF6B6B;
  --btn-secondary: #4ECDC4;
  --text-primary: #2C3E50;
}
```

### Agregar Tu Nombre o Logo

En el header de `index.html`:

```html
<h1>🔢 Calculadora de </h1>
```

### Modificar Precisión de Decimales

Busca `.toFixed(4)` en el código y cambia el número:

```javascript
// De 4 decimales:
result.toFixed(4)

// A 6 decimales:
result.toFixed(6)
```

---

## 🚀 Funciones Futuras (Roadmap)

Posibles mejoras para futuras versiones:

### Versión 3.0
- [ ] Matrices de números complejos
- [ ] Resolución de sistemas de ecuaciones
- [ ] Más tipos de gráficas (3D, polar)
- [ ] Exportar gráficas como imagen
- [ ] Calculadora científica integrada

### Versión 3.5
- [ ] Modo de ecuaciones (resolver automáticamente)
- [ ] Integración y derivación simbólica
- [ ] Transformada de Fourier
- [ ] Series y secuencias complejas

### Versión 4.0
- [ ] Sincronización entre dispositivos
- [ ] Compartir cálculos vía URL
- [ ] Temas personalizables por usuario
- [ ] Plugins y extensiones
- [ ] API para desarrolladores

---



## 🏆 Logros Técnicos

Esta calculadora implementa:

✅ **PWA completa** con Service Worker funcional  
✅ **100% offline** después de primera carga  
✅ **Zero dependencies** - Sin librerías externas  
✅ **Responsive design** - Funciona en todo dispositivo  
✅ **Canvas API** para gráficas interactivas  
✅ **localStorage API** para persistencia  
✅ **CSS Variables** para temas dinámicos  
✅ **SVG inline** para iconos vectoriales  
✅ **Manifest.json** completo con shortcuts  
✅ **Cache strategies** inteligentes  

---

## 📜 Licencia

**MIT License**

Este proyecto es de código abierto y uso libre.

Puedes:
- ✅ Usar comercialmente
- ✅ Modificar el código
- ✅ Distribuir
- ✅ Uso privado


**Sin garantía**: El software se proporciona "tal cual".

---


## 🎉 ¡Listo para Usar!

Tu calculadora está completa y lista para:

✅ Instalar en cualquier dispositivo  
✅ Usar sin internet  
✅ Usar en clases o trabajo  

### URL Final

```
https://apgtest.github.io/calculadora-compleja/
```
