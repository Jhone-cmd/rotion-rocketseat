import Store from 'electron-store'

interface StoreType {
  documents: Record<string, unknown>
}

const StoreConstructor = (Store as any).default || Store;

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
export const store = new StoreConstructor<StoreType>({
  defaults: {
    documents: {},
  },
})

console.log(store.path);

