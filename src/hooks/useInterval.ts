import { useEffect, useRef } from "react"

/**
 * 以hook的形式使用setInterval
 * @param callback 回调
 * @param delay 时间间隔
 */
export const useInterval = (callback: () => void, delay: number) => {
  const savedCallback = useRef(callback)
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    if (!delay && delay !== 0) {
      return
    }
    const id = setInterval(() => savedCallback.current(), delay)
    return () => clearInterval(id)
  }, [delay])
}
