import { ChangeEvent, useState } from "react"
import { useDebounce } from "@/hooks/useDebounce.ts"

export default function PublicPage() {
  const [value, setValue] = useState<string>("")
  const debouncedValue = useDebounce<string>(value, 1000)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  return (
    <>
      <p>Value real-time: {value}</p>
      <p>Debounced value: {debouncedValue}</p>

      <input type="text" value={value} onChange={handleChange} />
    </>
  )
}
