import { useEffect } from "react"

/**
 * 复制文本加版权标识
 */
export const useCopy = () => {
  useEffect(() => {
    const onCopy = () => {
      navigator.clipboard.readText().then((text) => {
        navigator.clipboard.writeText(text + "：@copyright 无敌高大威猛陈先生").then()
      })
    }
    window.addEventListener("copy", onCopy)
    return () => {
      window.removeEventListener("copy", onCopy)
    }
  }, [])
}
