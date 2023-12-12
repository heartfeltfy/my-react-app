import { EffectCallback, useEffect } from "react"

/**
 * 避免useEffect 每次使用的时候都需要添加 []
 * 例如：
 *     useEffectOnce(()=>{},[])
 *     useEffect(()=>{})
 * @param effect
 */
export const useEffectOnce = (effect: EffectCallback) => {
  useEffect(effect, [])
}
