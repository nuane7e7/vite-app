import { userState } from "./store";

export default  {
  isLogin:(state:userState):string=>{
      return `${state.loading}`
  }
}