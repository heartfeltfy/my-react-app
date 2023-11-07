import { useAuth } from "./AuthProvider.tsx"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button.tsx"

export default function AuthStatus() {
  let auth = useAuth()
  let navigate = useNavigate()
  return (
    <p>
      header
      <Button onClick={() => auth.signout(() => navigate("/"))} size="default">
        注销
      </Button>
    </p>
  )
}
