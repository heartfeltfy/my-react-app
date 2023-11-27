import { CSSProperties } from "react"
import bg from "@/assets/bg-01.jpg"

export default function LoginPage() {
  const minLogin: CSSProperties = {
    background: `url(${bg})  no-repeat center/cover`
  }
  return <div className="min-h-full" style={minLogin}></div>
}
