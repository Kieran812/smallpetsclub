# Exotic Pet Care Website Project

## 项目概述

英文异宠护理内容网站，目标用户为 18-35 岁的年轻女性。提供仓鼠、龙猫、刺猬、花枝鼠等异宠的护理指南和博客内容。

## 技术栈

- Next.js 15 (App Router, TypeScript)
- Supabase (PostgreSQL)
- TailwindCSS v4 + Shadcn/UI
- Clerk (认证)
- Stripe (第二阶段支付)
- Vercel (托管)

## 设计规范

**重要：** 所有 UI/UX 实现必须遵循 `design-system/` 目录下的设计规范。

### 设计系统文件

```
design-system/
├── MASTER.md          # 全局设计规则（颜色、字体、组件规范）
└── pages/
    ├── homepage.md    # 首页设计规范
    └── blog.md       # 博客列表页设计规范
```

### 设计原则

- **风格：** Warm & Cozy（温馨可爱）
- **配色：** 暖珊瑚 `#E8A598` + 鼠尾草薄荷 `#A8D5BA`
- **字体：** Varela Round (标题) + Nunito Sans (正文)
- **移动端优先：** 响应式设计，适配 375px / 768px / 1024px / 1280px

### 实现前检查

1. 查阅 `design-system/MASTER.md` 了解全局设计规则
2. 查阅对应页面的 `design-system/pages/[page].md` 获取页面特定规范
3. 实现时使用 `design-system.ts` 中的设计令牌
4. 完成后对照 Pre-Delivery Checklist 验证

## 目录结构

```
2.独立站/
├── design-system/        # 设计规范文档
├── docs/                 # PRD 文档
├── src/
│   ├── app/             # Next.js App Router
│   └── components/      # React 组件
├── supabase/            # 数据库迁移
└── public/              # 静态资源
```

## 参考站点

- shop.smallpetselect.com（设计参考）
