import { signal, effect } from "@preact/signals-react"

const counter = signal(25)
const username = signal("默认用户名")

effect(() => {
  console.log("改变了", counter.value)
  username.value = username.peek() + "："
  setStorageAuth(counter.value)
})

function setStorageAuth(value: number) {
  localStorage.setItem("counter", value.toString())
}

export function getCounter() {
  return counter.value
}

export function setCounter(value: number) {
  counter.value += value
}

export function setUsername(value: string) {
  username.value = value
}

export function getUsername() {
  return username.value
}
