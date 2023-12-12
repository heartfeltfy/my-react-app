import { Outlet } from "react-router-dom"
import Header from "@/layout/components/Header.tsx"
import Aside from "@/layout/components/Aside.tsx"
import { CopyRight } from "@/components"
import { getCounter, getUsername, setCounter } from "@/store/auth.ts"

export default function Layout() {
  return (
    <div>
      <Header />
      <Aside />
      <p onClick={() => setCounter(2)}>
        {getCounter()}---{getUsername()}
      </p>
      <Outlet />
      <CopyRight />
    </div>
  )
}
