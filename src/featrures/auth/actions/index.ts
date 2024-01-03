import { AuthActions, AuthFuntionName } from "../types"

export const sigIn =({token}:{token:string}):AuthActions=>
 ({ type:AuthFuntionName.SIGN_IN,
  payload:{token}
 })

 export const sigUp =({token}:{token:string}):AuthActions=>
 ({ type:AuthFuntionName.SIGN_UP,
  payload:{token}
 })

 export const sigOut =():AuthActions=>
 ({ type:AuthFuntionName.SIGN_OUT,
 })

 export const restoreToken =({token}:{token:string}):AuthActions=>
 ({ type:AuthFuntionName.RESTORE_TOKEN,
  payload:{token}
 })




