# ESLint 和 Prettier 配置手册（简洁版）

## 1️⃣ 依赖安装

**ESLint 相关：**
```bash
npm install -D eslint@8.57.0 eslint-plugin-vue@9.30.0 eslint-plugin-prettier@5.2.1 eslint-config-prettier@9.1.0 @typescript-eslint/eslint-plugin@8.46.2 @typescript-eslint/parser@8.46.2 @vue/eslint-config-typescript@13.0.0
```

**Prettier 相关：**
```bash
npm install -D prettier@3.4.2
```

**核心依赖说明：**

| 依赖                        | 版本      | 作用                                     |
| --------------------------- | --------- | ---------------------------------------- |
| **eslint**                  | 8.57.0    | 代码质量检查核心                          |
| **eslint-plugin-vue**       | 9.30.0    | Vue 3 文件检查和规则                     |
| **eslint-plugin-prettier**  | 5.2.1     | 将 Prettier 作为 ESLint 规则运行         |
| **eslint-config-prettier**  | 9.1.0     | 禁用与 Prettier 冲突的 ESLint 规则       |
| **@typescript-eslint/\***   | 8.46.2    | TypeScript 语法和类型检查                |
| **@vue/eslint-config-typescript** | 13.0.0 | Vue + TypeScript 联合配置              |
| **prettier**                | 3.4.2     | 代码格式化工具                            |

---

## 2️⃣ 配置文件

### ESLint 配置 (`.eslintrc.cjs`)

```javascript
module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    '@vue/eslint-config-typescript',
    'plugin:prettier/recommended', // ⭐ 必须放在最后
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-console': 'error', // 禁止 console.log
  },
};
```

**Extends 顺序说明：**

| 配置项                              | 作用                           | 顺序要求            |
| ----------------------------------- | ------------------------------ | ------------------- |
| `eslint:recommended`                | ESLint 官方推荐规则            | 任意                |
| `plugin:vue/vue3-recommended`       | Vue 3 最佳实践检查             | 任意                |
| `plugin:@typescript-eslint/recommended` | TypeScript 类型检查      | 任意                |
| `@vue/eslint-config-typescript`    | Vue + TS 兼容配置              | 任意                |
| `plugin:prettier/recommended`       | Prettier 集成（禁用冲突规则）   | ⚠️ **必须最后**     |

### Prettier 配置 (`.prettierrc.cjs`)

```javascript
module.exports = {
  printWidth: 100,                    // 每行最大字符数
  tabWidth: 2,                        // 缩进空格数
  useTabs: false,                     // 使用空格
  semi: true,                         // 使用分号
  singleQuote: true,                  // 单引号
  trailingComma: 'all',               // 尾随逗号
  bracketSpacing: true,               // 对象括号空格 { foo: bar }
  arrowParens: 'always',              // 箭头函数括号 (x) => x
  endOfLine: 'lf',                    // LF 换行符
  vueIndentScriptAndStyle: false,     // Vue 文件不缩进 script/style
};
```

**关键配置：**

| 配置项                      | 值       | 效果示例                          |
| --------------------------- | -------- | --------------------------------- |
| `singleQuote`               | `true`   | `'text'` 而非 `"text"`            |
| `trailingComma`             | `'all'`  | `{ a: 1, b: 2, }`（多行时）      |
| `arrowParens`               | `'always'` | `(x) => x` 而非 `x => x`        |
| `printWidth`                | `100`    | 超过 100 字符自动换行             |

---

## 3️⃣ 忽略文件

### `.eslintignore`
```
node_modules
dist
*.local
.vscode
.idea
*.log
pnpm-lock.yaml
public
*.d.ts
```

### `.prettierignore`
```
node_modules
dist
build
coverage
*.log
.DS_Store
.vscode
.idea
*.d.ts
public
```

---

## 4️⃣ 常用命令

| 命令            | 作用                         | 使用场景       |
| --------------- | ---------------------------- | -------------- |
| `pnpm lint`     | 检查并自动修复代码问题        | 开发时         |
| `pnpm lint:check` | 仅检查不修复（CI 使用）     | CI/CD          |
| `pnpm format`   | 格式化所有文件                | 提交前         |
| `pnpm format:check` | 仅检查格式（CI 使用）    | CI/CD          |

**提交前流程：**
```bash
pnpm format    # 1. 格式化代码
pnpm lint      # 2. 检查并修复问题
```

---

## 5️⃣ VS Code 集成（推荐）

### 安装扩展
- **ESLint** (dbaeumer.vscode-eslint)
- **Prettier** (esbenp.prettier-vscode)

### 设置 (`.vscode/settings.json`)
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```

**效果：** 保存时自动格式化 + ESLint 自动修复 ✨

---

## ✅ 完整配置清单

- [x] 安装 7 个 ESLint 相关依赖
- [x] 安装 1 个 Prettier 依赖
- [x] 创建 `.eslintrc.cjs` 配置文件
- [x] 创建 `.prettierrc.cjs` 配置文件
- [x] 创建 `.eslintignore` 忽略文件
- [x] 创建 `.prettierignore` 忽略文件
- [x] 配置 `package.json` 中的 lint 和 format 脚本
- [x] `plugin:prettier/recommended` 放在 extends 最后

---

**版本**: ESLint 8.57.0 | Prettier 3.4.2 | Vue 3.5.22 | TypeScript 5.9.3
