import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // 自定义间距系统
      // ⚠️ 注意：Tailwind 默认使用 rem 单位（1rem = 16px），p-4 默认就是 16px
      // 📝 在这里添加自定义间距值（会保留所有默认值）
      spacing: {
        // 示例：取消注释并修改即可使用
        // '18': '18px',    // p-18 = padding: 18px
        // 'md': '20px',    // p-md = padding: 20px
        // 📝 如果需要覆盖默认值（比如让 p-4 使用 px 而不是 rem）：
        // '4': '16px',     // p-4 = padding: 16px（覆盖默认的 1rem）
      },
    },
  },
  corePlugins: {
    preflight: false, // ✅ 禁用 Tailwind 的全局 reset，防止与 AntD 冲突
  },
  plugins: [],
};

export default config;
