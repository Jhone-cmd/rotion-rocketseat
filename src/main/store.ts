import Store from 'electron-store'
import { Document } from '@shared/types/document'

interface StoreType {
  documents: Record<string, Document>
}

const StoreConstructor = (Store as any).default || Store;

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
export const store = new StoreConstructor<StoreType>({
  defaults: {
    documents: {},
  },
})

console.log(store.path);

