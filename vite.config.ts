import { defineConfig } from "vite"
import path from "path"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/my-react-app/",
  base: "./",
  plugins: [react()],
  build: {
    outDir: "docs",
    // 设置最终构建的浏览器兼容目标
    target: "es2015",
    // 构建后是否生成 source map 文件
    sourcemap: false
    //  chunk 大小警告的限制（以 kbs 为单位）
    // chunkSizeWarningLimit: 2000,
    // 启用/禁用 gzip 压缩大小报告
    // reportCompressedSize: false
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
})
