import { ipcMain } from 'electron'
import { IPC } from '@shared/constants/ipc'
import { FetchAllDocumentsResponse } from '../shared/types/ipc'

ipcMain.handle(IPC.DOCUMENTS.FETCH_ALL, async (): Promise<FetchAllDocumentsResponse> => {
  return {
    data: [
    { id: '1', title: 'Ignite', content: 'Content of Ignite' },
    { id: '2', title: 'RocketSeat', content: 'Content of RocketSeat' },
    { id: '3', title: 'Discover', content: 'Content of Discover' },
    { id: '4', title: 'Docs', content: 'Content of Docs' },
    ]
  }
})
