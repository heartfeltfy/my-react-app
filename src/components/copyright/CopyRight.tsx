export default function CopyRight() {
  const date = new Date().getFullYear()
  return (
    <div className="text-sm text-neutral-500 py-5">
      copyright © {date} 无敌高大威猛陈先生 All Rights Reserved
    </div>
  )
}
