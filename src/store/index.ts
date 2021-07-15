import { useStore as baseUseStore, createStore,Store} from 'vuex';
import { InjectionKey,App } from 'vue'
import modules,{IStore} from './module'
export const key: InjectionKey<Store<IStore>> = Symbol()
const store = createStore<IStore>({
  modules,
})
export function setupStore(app: App) {
  app.use(store, key)
}

export function useStore() {
  return baseUseStore(key)
}
export default  store