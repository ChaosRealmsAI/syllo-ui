#!/bin/bash
# Syllo UI — 一键生成主题网站
# 用法: ./scripts/generate.sh [选项]
#
# 示例:
#   ./scripts/generate.sh                              # 交互式
#   ./scripts/generate.sh --brand "暖时光咖啡" --lang zh --pages 5
#   ./scripts/generate.sh --brand "Brew House" --lang en --theme cafe/warm-coffee

set -e

# 默认值
BRAND=""
LANG="zh"
PAGES=3
THEME="cafe/warm-coffee"
OUTPUT="/tmp/syllo-gen-$(date +%s)"
BASE_URL="https://raw.githubusercontent.com/ChaosRealmsAI/syllo-ui/main"

# 解析参数
while [[ $# -gt 0 ]]; do
  case $1 in
    --brand) BRAND="$2"; shift 2 ;;
    --lang) LANG="$2"; shift 2 ;;
    --pages) PAGES="$2"; shift 2 ;;
    --theme) THEME="$2"; shift 2 ;;
    --output) OUTPUT="$2"; shift 2 ;;
    *) echo "未知参数: $1"; exit 1 ;;
  esac
done

# 验证
if [ -z "$BRAND" ]; then
  echo "错误: 必须指定 --brand"
  echo "用法: ./scripts/generate.sh --brand \"品牌名\" [--lang zh|en] [--pages 3] [--theme cafe/warm-coffee]"
  exit 1
fi

PROMPT_FILE="$OUTPUT/prompt.md"
mkdir -p "$OUTPUT"

# 生成提示词文件
cat > "$PROMPT_FILE" << PROMPT
# 生成 ${BRAND} 网站

## 设计规范

先读主题目录了解可用主题：
${BASE_URL}/themes/README.md

然后读选定主题的组件说明：
${BASE_URL}/themes/${THEME}/README.md

下载 CSS 框架到输出目录：
\`\`\`bash
curl -sL -o ${OUTPUT}/style.css ${BASE_URL}/themes/${THEME}/style.css
\`\`\`

## 要求

- 品牌名：${BRAND}
- 语言：$([ "$LANG" = "zh" ] && echo "中文（所有内容用中文）" || echo "English")
- 页面数量：${PAGES} 个
- 输出目录：${OUTPUT}/
- 技术栈：纯 HTML + CSS class（来自 style.css）+ vanilla JS

## 页面规划

根据品牌和行业，自行规划 ${PAGES} 个页面的内容。常见组合：
- 首页（Hero + 特色 + CTA）
- 菜单/产品页
- 关于页（品牌故事 + 时间线）
- 联系页
- 博客/活动页

每个页面：
- 引用同目录 style.css
- 引入 Phosphor Icons：\`<script src="https://unpkg.com/@phosphor-icons/web"></script>\`
- 至少 6 种不同组件
- 页面间导航互通
- Unsplash 图片
- fadeUp 入场动画（IntersectionObserver）

## 不要做
- 不写自定义 CSS（style.css 已有所有样式）
- 不用冷色
- 不用框架
- 不读本地文件（所有信息从 GitHub URL 获取）
PROMPT

echo "✓ 提示词已生成: $PROMPT_FILE"
echo "✓ 输出目录: $OUTPUT"
echo ""
echo "执行方式："
echo "  ally spark \"Read ${PROMPT_FILE} and execute\" -C $(pwd) -n \"syllo-gen-${BRAND}\""
echo ""
echo "或直接复制提示词给任意 AI 使用。"
