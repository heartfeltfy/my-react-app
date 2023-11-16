import { useEffect, useRef } from "react"

/**
 * 以hook的形式使用setTimeout
 * @param callback 回调
 * @param delay 时间间隔
 */
export const useTimeout = (callback: () => void, delay: number) => {
  const savedCallback = useRef(callback)
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    if (!delay && delay !== 0) {
      return
    }
    const id = setTimeout(() => savedCallback.current(), delay)
    return () => clearTimeout(id)
  }, [delay])
}
