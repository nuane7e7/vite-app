import user , {userState}from './modules/user'
export interface IStore{
  user:userState
}
export default  {
  user
}