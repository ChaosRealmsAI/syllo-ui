# Syllo UI

AI-native design language library. Users browse visual themes, AI reads specs to generate consistent pages.

## Architecture

- `themes/` — design language specs + CSS framework + example pages
- `site/` — showcase website (Vercel deployment)
- `poc/` — prototypes and experiments

## Theme 目录结构

每个主题 4 个文件，class 名跨主题一致：

```
themes/{industry}/{theme-id}/
├── README.md      ← AI 入口，组件 class 表 + HTML 写法
├── style.css      ← CSS 框架，所有组件样式
├── rules.md       ← 设计约束（配色、间距、动画等）
└── tokens.json    ← 设计 token（颜色、字体、间距原始值）
```

## AI 消费规则（两层）

| 层级 | AI 读什么 | 适用场景 |
|------|----------|---------|
| **Layer 2（默认）** | 仅 README.md | 日常页面生成，快速产出 |
| **Layer 1（深度）** | style.css + rules.md | 需要理解组件内部实现时 |

**默认用 Layer 2。** README 是 AI 的唯一入口，包含组件 class 表、HTML 模式、配色、字体、JS 片段。质量与 Layer 1 相当，维护成本更低。

## 提示词要点

- AI 只写 HTML + 引用 class，不写自定义 CSS
- 每个 HTML 引用同目录 style.css
- 引入 Phosphor Icons CDN
- 每页至少 6 种组件
- Unsplash 图片
- 字体栈包含 CJK fallback（中日韩自动匹配）
