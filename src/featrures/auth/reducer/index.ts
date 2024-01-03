import { AuthActions, AuthFuntionName, AuthState } from "../types"

export const authReducer = (state:AuthState,action:AuthActions)=>{
  switch (action.type){
    case AuthFuntionName.SIGN_IN:
      return{
        ...state,
        user:action.payload,
        isAutenticated:true
      }
      case AuthFuntionName.SIGN_UP:
      return{
        ...state,
        user:action.payload,
        isAutenticated:true
      }
      case AuthFuntionName.SIGN_OUT:
      return{
        ...state,
        user:null,
        isAutenticated:false
      }
      case AuthFuntionName.RESTORE_TOKEN:
      return{
        ...state,
        user:action.payload,
      }

      default: return state

  }
}
