// Node.js application wrapper for FWD Qualification Test Demo
// This file can be used with Electron or similar tools to build an actual executable

const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

// Keep a global reference of the window object
let mainWindow;

function createWindow() {
  // Create the browser window
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    title: 'FWD Yeterlilik Test Demosu',
    icon: path.join(__dirname, 'assets/icon.png'),
    webPreferences: {
      nodeIntegration: true
    }
  });

  // Load the index.html of the app
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'demo_baslat.html'),
    protocol: 'file:',
    slashes: true
  }));

  // Emitted when the window is closed
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
}

// This method will be called when Electron has finished initialization
app.on('ready', createWindow);

// Quit when all windows are closed
app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function() {
  if (mainWindow === null) {
    createWindow();
  }
});

// Show a splash screen with information about the test
function showSplashScreen() {
  console.log('========================================');
  console.log('FWD YETERLİLİK TESTİ DEMO UYGULAMASI');
  console.log('========================================');
  console.log('Bu uygulama, FWD Yeterlilik Testi için hazırlık amaçlıdır.');
  console.log('Üç temel görevi içermektedir:');
  console.log('1. Karakter Tasarımı');
  console.log('2. 360° Animasyon');
  console.log('3. 3D Modelleme');
  console.log('----------------------------------------');
  console.log('Uygulama başlatılıyor...');
}

showSplashScreen();
