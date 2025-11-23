# Complex Number Calculator PWA

This is a Progressive Web App calculator for complex numbers. It has many functions like trigonometry, exponential, logarithm, history, dark mode, graphs and more.

## ✨ Main Features

### Math Operations
- Basic operations: add, subtract, multiply, divide
- Advanced functions: power, n-root, exponential, logarithm
- Trigonometric functions: sin, cos, tan, cot, sec
- Hyperbolic functions: sinh, cosh, tanh
- Special operations: conjugate, modulus, argument, polar form

### App Features
- Works offline after first load
- Full history of operations
- Dark mode
- Complex plane graph with zoom
- Export history to text file
- Installable on Android, iOS, Windows, Mac, and Linux
- Responsive design for all screens
- Very light (less than 100 KB)
- No external libraries

## 📁 Project Files

The project needs only 3 files:

calculadora-compleja/
├── index.html
├── manifest.json
└── service-worker.js

## 🎯 How to Use the Calculator

The calculator has 4 tabs:
1. Basic
2. Advanced
3. Trigonometric
4. Graph

### Complex Number Format
A complex number looks like: z = a + bi
- a = real part
- b = imaginary part
- i = imaginary unit (i² = -1)

### Example Numbers
3 + 4i → real 3, imag 4  
-2 - 5i → real -2, imag -5  
7 → real 7, imag 0  
3i → real 0, imag 3  
-i → real 0, imag -1  

### Steps
1. Enter z₁  
2. Enter z₂  
3. Choose an operation  
4. See the result  
5. Check the history  

## 🧮 Available Functions

### Basic Tab
- Add
- Subtract
- Multiply
- Divide
- Conjugate
- Modulus
- Polar form
- Clear

### Advanced Tab
- Power
- N-root
- Exponential (e^z)
- Natural log (ln)
- Square root
- Inverse (1/z)
- Argument (angle)

### Trigonometric Tab
- sin(z), cos(z), tan(z)
- cot(z), sec(z)
- sinh(z), cosh(z), tanh(z)

### Graph Tab
- Graph z₁ and z₂
- Clear graph
- Graph operation
- Zoom

## 🌟 Advanced Features

### 1. History
- Saves all operations
- Shows date and time
- Click to load a past operation
- Export to .txt file
- Saves up to 50 operations
- Works offline

### 2. Dark Mode
- Good for eyes
- Nice for night use
- Saves your preference

### 3. Complex Plane Graph
- X axis = real part
- Y axis = imaginary part
- Draws points and vectors
- Colors for each number
- Zoom function

### 4. Offline Mode
After first visit:
- App works without internet
- History saved locally
- Preferences saved locally

Online status:
- 🟢 Online
- 🔴 Offline

### 5. Keyboard Shortcuts
Enter = calculate  
Escape = clear  
Tab = move between fields  

## 🔧 Problem Solving

### Install banner does not show
- Use HTTPS  
- Reload page  
- Check files  
- Try manual installation  

### Offline does not work
- Visit the app once with internet  
- Check Service Worker  
- Clear cache  

### Graph does not show
- Open Graph tab  
- Wait 1–2 seconds  
- Click “Graph”  

### History not saved
- Check browser settings  
- Do not use private mode  

### Dark mode not working
- Click dark mode  
- Reload page  

### Calculation errors
- No division by zero  
- No ln(0)  
- Use valid numbers

### GitHub Pages not working
- Repository must be public  
- index.html must be in root  

## 🎓 Math Formulas

Add: (a+bi) + (c+di) = (a+c) + (b+d)i  
Subtract: (a+bi) − (c+di)  
Multiply: (a+bi)(c+di)  
Divide: [(a+bi)(c−di)] / (c²+d²)

Modulus: |z| = sqrt(a² + b²)  
Argument: arctan(b/a)  
Polar: z = r·e^(iθ)

Exponential: e^(a+bi)  
Log: ln|z| + i·arg(z)  
Power: De Moivre formula  
Root: r^(1/n)

Trig: sin(z), cos(z), tan(z)  
Hyperbolic: sinh(z), cosh(z), tanh(z)

## Contribute

1. Fork the repository  
2. Create a branch  
3. Commit changes  
4. Push  
5. Create a Pull Request  

Possible improvements: translations, themes, graphs, new functions, UI, bug reports, documentation.

## Offline Tests
- Visit with internet  
- Close browser  
- Go offline  
- Open app again  

## Install Tests
- Install banner  
- Icon appears  
- App opens standalone  
- Works offline after install


## Privacy
- All data is local  
- No tracking  
- No servers  
- No personal data stored  

## Performance
- Inline CSS and JS  
- SVG icons  
- Cache-first loading  
- Very fast  

## Customization
- Change colors in index.html  
- Add your name  
- Change decimal precision  

## Future Features
Version 3.0: matrices, equations, more graphs  
Version 3.5: symbolic math, Fourier  
Version 4.0: sync, themes, plugins  

## Technical Achievements
- Full PWA  
- 100% offline  
- No libraries  
- Responsive design  
- Canvas graphs  
- localStorage saving  
- SVG icons  
- Smart cache system  

## License
MIT License — free to use and modify.

### URL
https://apgtest.github.io/calculadora-compleja/
