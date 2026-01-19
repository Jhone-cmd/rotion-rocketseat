import { ipcMain } from 'electron'

ipcMain.handle('fetch-documents', async (_, args) => {
  return `Received: ${args}`
})
