import { useEffect } from "react"

/**
 * 复制文本加版权标识
 */
export const useCopy = () => {
  useEffect(() => {
    const onCopy = async () => {
      const text = navigator.clipboard.readText()
      await navigator.clipboard.writeText(text + "：@copyright 无敌高大威猛陈先生")
    }
    window.addEventListener("copy", onCopy)
    return () => {
      window.removeEventListener("copy", onCopy)
    }
  }, [])
}
