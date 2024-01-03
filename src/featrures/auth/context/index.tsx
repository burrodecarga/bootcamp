
import React, { createContext, Dispatch, useContext, useReducer } from "react"
import { authReducer } from "../reducer"
import { AuthActions, AuthState, AuthUserProvider } from "../types"


export const initialState: AuthState = {
  isAutenticated: false,
  isLoading: false,
  signUp: () => { },
  signIn: () => { },
  signOut: () => { },
  restoreToken: () => { },
  user: null,
}

export const AuthContext = createContext<[AuthState, Dispatch<AuthActions>]>([
  initialState,
  () => { }
]
)

export const useAuth = () => useContext(AuthContext)[0]
export const useDispacht = () => useContext(AuthContext)[1]

export const AuthProvider = ({ children }: AuthUserProvider) => {
  return (
    <AuthContext.Provider value={useReducer(authReducer, initialState)}>
      {children}
    </AuthContext.Provider>
  )
}
