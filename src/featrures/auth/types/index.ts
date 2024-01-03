import React from "react"

export type AuthState={
isAutenticated:boolean
isLoading:boolean
signUp:()=>void
signIn:()=>void
signOut:()=>void
restoreToken:()=>void
user:  {token:string}|null
}

export enum AuthFuntionName{
  SIGN_IN='SIGN_IN',
  SIGN_UP='SIGN_UP',
  SIGN_OUT='SIGN_OUT',
  RESTORE_TOKEN='RESTORE_TOKEN'
}

export type AuthUserProvider={
  children:React.ReactNode
}

export type AuthUser={
  token:string
}


export type AuthActions =
|{type:AuthFuntionName.SIGN_IN, payload:AuthUser}
|{type:AuthFuntionName.SIGN_UP, payload:AuthUser}
|{type:AuthFuntionName.SIGN_OUT}
|{type:AuthFuntionName.RESTORE_TOKEN, payload:AuthUser}


export type AuthFormValues={
  email:string
  password:string
}
