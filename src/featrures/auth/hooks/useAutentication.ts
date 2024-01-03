import { useAuth, useDispacht } from "../context"
import { AuthFormValues, AuthFuntionName } from "../types"


export const useAutentication = ()=>{

  const state = useAuth()
  const dispatch = useDispacht()

  const sigIn = async ({email ,password}:AuthFormValues)=>{
    console.log(email,password)
    dispatch({
      type:AuthFuntionName.SIGN_IN,
      payload:{token:'123456'}
    })
  }

  const sigUp = async ({email ,password}:AuthFormValues)=>{
    console.log(email,password)
    dispatch({
      type:AuthFuntionName.SIGN_UP,
      payload:{token:'123456'}
    })
  }

  const sigOut = async ()=>{
    console.log('SIGN AOUT')
    dispatch({
      type:AuthFuntionName.SIGN_OUT,
    })
  }

  const restoreToken = async ({token}:{token:string})=>{
    console.log({token})
    dispatch({
      type:AuthFuntionName.RESTORE_TOKEN,
      payload:{token:'123456'}
    })
  }

  return {
    ...state,
    sigIn,
    sigOut,
    sigUp,
    restoreToken
  }
}


