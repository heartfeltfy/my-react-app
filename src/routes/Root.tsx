import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LoginPage from "@/pages/login/LoginPage.tsx"
import Layout from "@/layout/Layout.tsx"
import ErrorPage from "@/pages/ErrorPage.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  }
])
export default function Root() {
  return <RouterProvider router={router} />
}
