import { useEffect, useState } from "react"

/**
 * 判断当前网络状态
 */
export const useNetwork = () => {
  const [status, setStatus] = useState(navigator.onLine)
  const onLine = () => setStatus(true)
  const offLine = () => setStatus(false)
  useEffect(() => {
    window.addEventListener("offline", offLine)
    window.addEventListener("online", onLine)
    return () => {
      window.removeEventListener("offline", offLine)
      window.removeEventListener("online", onLine)
    }
  }, [])
  return status
}
