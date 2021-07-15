import {createState} from './store'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
export type {userState}  from './store'
const state= createState();
export default  {
    namespace:true,
    state,
    getters,
    mutations,
    actions,
}