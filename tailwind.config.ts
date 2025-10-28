import type { Config } from 'tailwindcss'

const config: Config = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false, // ✅ 禁用 Tailwind 的全局 reset，防止与 AntD 冲突
  },
  plugins: [],
}

export default config
