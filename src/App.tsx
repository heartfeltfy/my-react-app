import { useCopy } from "@/hooks/useCopy.ts"
import Root from "@/routes/Root.tsx"

export default function App() {
  useCopy()
  return <Root />
}
