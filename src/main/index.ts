import { app, shell, BrowserWindow, ipcMain } from 'electron'
import path from 'node:path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import { registerRoute } from '../lib/electron-router-dom.ts'
import { createTray } from './tray.ts'
import { createShortcuts } from './shortcuts.ts'

import './ipc.ts'
import './store.ts'


function createWindow(): void {

  if (process.platform === 'darwin') {
    app.dock?.setIcon(path.resolve(__dirname, '../../resources/icon.png'))
  }

  const mainWindow = new BrowserWindow({
    width: 1120,
    height: 768,
    show: false,
    autoHideMenuBar: true,
    backgroundColor: '#17141f',
    titleBarStyle: 'hiddenInset',
    trafficLightPosition: {
      x: 20,
      y: 20,
    },
    ...(process.platform === 'linux' ? { icon: path.join(__dirname, '../../build/icon.png') } : {}),
    webPreferences: {
      preload: path.resolve(__dirname, '../preload/index.js'),
      sandbox: false,
    },
  })

  createTray(mainWindow);
  createShortcuts(mainWindow);

  registerRoute({
    id: 'main',
    browserWindow: mainWindow,
    htmlFile: path.join(__dirname, '../renderer/index.html'),
  })


  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  if (is.dev && process.env.ELECTRON_RENDERER_URL) {
    mainWindow.loadURL(`${process.env.ELECTRON_RENDERER_URL}#main`)
  } else {
    mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'), {
      hash: 'main'
    })
  }
}

console.log(process.platform);

app.whenReady().then(() => {

  electronApp.setAppUserModelId('com.electron')
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })


  ipcMain.on('ping', () => console.log('pong'))

  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

