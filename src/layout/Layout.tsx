import { Outlet } from "react-router-dom"
import Header from "@/layout/components/Header.tsx"
import Aside from "@/layout/components/Aside.tsx"

export default function Layout() {
  return (
    <div>
      <Header />
      <Aside />
      <Outlet />
    </div>
  )
}
