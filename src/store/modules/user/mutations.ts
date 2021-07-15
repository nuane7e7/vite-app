import { GET_DATA } from "./constant";
import { userState } from "./store";

export default  {
  [GET_DATA](state:userState,payload:boolean):void {
    console.log('action执行成功')
    state.loading =payload
  },
}