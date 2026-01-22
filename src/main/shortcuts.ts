import { app, BrowserWindow, globalShortcut } from 'electron'

export function createShortcuts(window: BrowserWindow) {
  app.on('browser-window-focus', () => {
    globalShortcut.register('CmdOrCtrl+N', () => {
      window.webContents.send('new-document')
    })
  })

  app.on('browser-window-blur', () => {
    globalShortcut.unregisterAll()
  })
}
