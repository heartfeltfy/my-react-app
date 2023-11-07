import { useAuth } from "./AuthProvider.tsx"
import { Navigate, useLocation } from "react-router-dom"
import { ReactNode } from "react"

export default function RequireAuth({ children }: { children: ReactNode }) {
  let auth = useAuth()
  const location = useLocation()
  if (!auth.user) {
    return <Navigate to="/login" state={{ form: location }} replace />
  }
  return children
}
