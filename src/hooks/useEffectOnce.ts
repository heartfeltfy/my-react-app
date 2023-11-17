import { EffectCallback, useEffect } from "react"

/**
 * 只运行一次的钩子
 * @param effect
 */
export const useEffectOnce = (effect: EffectCallback) => {
  useEffect(effect, [])
}
