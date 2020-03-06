const {app, BrowserWindow, nativeImage} = require('electron');
const iconImage = nativeImage.createFromPath('dist/favicon-512.61aaf624.png');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    },
    icon: iconImage,
    width: 1000, height: 600,
  });

  mainWindow.loadFile('dist/index.html');

  //mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
    app.quit();
  });
}

app.on('ready', createWindow);
app.dock.setIcon(iconImage);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
