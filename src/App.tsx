import AuthProvider from "@/layout/AuthProvider.tsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import PublicPage from "@/pages/PublicPage.tsx"
import ProtectedPage from "@/pages/ProtectedPage.tsx"
import RequireAuth from "@/layout/RequireAuth.tsx"
import Root from "@/routes/Root.tsx"
import LoginPage from "@/pages/login/LoginPage.tsx"
import ErrorPage from "@/pages/ErrorPage.tsx"
import { useCopy } from "@/hooks/useCopy.ts"

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: (
      <AuthProvider>
        <Root />
      </AuthProvider>
    ),
    children: [
      {
        index: true,
        element: <PublicPage />
      },
      {
        path: "/protected",
        element: (
          <RequireAuth>
            <ProtectedPage />
          </RequireAuth>
        )
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  }
])
export default function App() {
  useCopy()
  return <RouterProvider router={router} />
}
