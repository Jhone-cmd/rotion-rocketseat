import { contextBridge, ipcRenderer } from 'electron'
import { ElectronAPI, electronAPI } from '@electron-toolkit/preload'
import { IPC } from '@shared/constants/ipc'
import { CreateDocumentResponse, DeleteDocumentRequest, FetchAllDocumentsResponse, FetchDocumentRequest, FetchDocumentResponse, SaveDocumentRequest } from '../shared/types/ipc'

declare global {
  interface Window {
    api: typeof api
  }
}
const api = {
  fetchDocuments(): Promise<FetchAllDocumentsResponse> {
    return ipcRenderer.invoke(IPC.DOCUMENTS.FETCH_ALL)
  },

  fetchDocument(param: FetchDocumentRequest): Promise<FetchDocumentResponse> {
    return ipcRenderer.invoke(IPC.DOCUMENTS.FETCH, param)
  },

  createDocument(): Promise<CreateDocumentResponse> {
    return ipcRenderer.invoke(IPC.DOCUMENTS.CREATE)
  },

  saveDocument(document: SaveDocumentRequest): Promise<void> {
    return ipcRenderer.invoke(IPC.DOCUMENTS.SAVE, document)
  },

  deleteDocument(param: DeleteDocumentRequest): Promise<void> {
    return ipcRenderer.invoke(IPC.DOCUMENTS.DELETE, param)
  },

  onNewDocumentRequest(callback: () => void) {
    ipcRenderer.on('new-document', callback)

    return () => {
      ipcRenderer.off('new-document', callback)
    }
  },

}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.api = api
}
