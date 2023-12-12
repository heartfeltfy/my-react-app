import url from "@/assets/bg-01.jpg"
import { useEffectOnce } from "@/hooks/useEffectOnce.ts"

export default function LoginPage() {
  useEffectOnce(() => {
    console.log("只执行一次，无需添加deps []")
  })
  return <div className={`min-h-full bg-[url('${url}')] bg-no-repeat bg-center bg-cover`}></div>
}
