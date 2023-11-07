import { createContext, ReactNode, useContext, useState } from "react"
import { fakeAuthProvider } from "./auth.ts"

interface AuthContextType {
  user: any
  signin: (user: string, callback: VoidFunction) => void
  signout: (callback: VoidFunction) => void
}

let AuthContext = createContext<AuthContextType>(null!)

export default function AuthProvider({ children }: { children: ReactNode }) {
  let [user, setUser] = useState<any>(fakeAuthProvider.isAuth.name || "")
  const signin = (newUser: string, callback: VoidFunction) => {
    return fakeAuthProvider.signin(() => {
      fakeAuthProvider.isAuth.name = newUser
      setUser(newUser)
      callback()
    })
  }
  const signout = (callback: VoidFunction) => {
    return fakeAuthProvider.signout(() => {
      fakeAuthProvider.isAuth.removeName("name")
      setUser(null)
      callback()
    })
  }
  let value = { user, signin, signout }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}
