const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
console.log(__dirname);
function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 960,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
    icon: 'assets/icon.ico',
  });

  win.loadFile(path.join(__dirname, 'index.html'));
  //win.webContents.openDevTools()

  win.setMenuBarVisibility(false);

  ipcMain.on('minimize', () => win.minimize());
  ipcMain.on('maximize', () =>
    win.isMaximized() ? win.unmaximize() : win.maximize()
  );
  ipcMain.on('close', () => win.close());
}

app.whenReady().then(() => {
  createWindow();
});
