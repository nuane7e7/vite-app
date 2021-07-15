import { ref,Ref } from "vue";
export type ApiRequest =() =>Promise<void>


export interface UseAblePAI<T> {
  response:Ref<T | undefined> ,
  request:ApiRequest
}
const useApi = <T>(url:RequestInfo,option?:RequestInit) =>{
  const response:Ref<T | undefined> = ref()
  const request=async ()=> {
    const res = await fetch(url,option)
    const data =await res.json() 
    response.value =data 
  }
  return {
    response,
    request
  }
}
export {useApi}
export default  useApi