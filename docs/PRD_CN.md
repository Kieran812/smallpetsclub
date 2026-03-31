# PRD：异宠护理网站

> 产品需求文档 v1.0
> 最后更新：2026-03-31

---

## 1. 产品概述

### 1.1 项目简介

构建一个英文异宠护理内容网站，目标用户为 18-35 岁的年轻女性。网站提供仓鼠、龙猫、刺猬、花枝鼠等异宠的护理指南、日常饲养技巧和博客内容。

### 1.2 项目目标

- **第一阶段（MVP）**：上线以内容为核心的网站，包含博客、护理资源和分类页面，通过后台管理系统管理
- **第二阶段**：添加电商功能（在线商店 + Stripe 支付）
- **第三阶段**：添加社区功能（论坛、用户生成内容、邮件订阅）

### 1.3 目标用户

| 属性 | 详情 |
|------|------|
| 年龄 | 18-35 岁 |
| 性别 | 以女性为主 |
| 语言 | 英语 |
| 兴趣 | 异宠护理、小动物福利、宠物生活方式 |
| 行为特征 | 移动端优先浏览、社交媒体活跃、偏好可爱/温馨的审美风格 |

### 1.4 参考网站分析

参考站点：[shop.smallpetselect.com](https://shop.smallpetselect.com/)（基于 Shopify 的小型宠物用品商店）

**可借鉴的关键特性：**

| 功能 | 参考网站 | 我们的适配方案 |
|------|---------|---------------|
| 导航 | 按宠物类型组织的超级菜单（兔子、豚鼠、龙猫等），含产品子分类 | 按宠物类型组织的超级菜单，含护理主题子分类 |
| 公告栏 | 轮播消息（物流信息、评论数量、免运费门槛） | 轮播消息（新文章、护理小贴士、社区亮点） |
| 首页 | 英雄横幅 + 产品网格 + 精选合集 + 社会证明 | 英雄横幅 + 宠物分类网格 + 精选文章 + 信任标识 |
| 内容 | 护理资源页 + 博客板块 | 核心重点 — 丰富的博客/护理指南系统，支持分类筛选 |
| 社会证明 | 12 万+ 评论、Yotpo UGC 画廊、推荐页 | 读者评价、文章浏览量、社区统计 |
| 搜索 | 带轮播占位文本的预测搜索 | 全文博客搜索，带分类建议 |
| 移动端 | 汉堡菜单、堆叠布局、可折叠区块 | 移动端优先的响应式设计，滑出式导航 |
| 页脚 | 三栏布局：商店链接、资源、法律 + 社交媒体图标 | 三栏布局：宠物分类、资源、法律 + 社交媒体 |

**延后实现的功能：**
- 商品列表、购物车、结账（第二阶段）
- 积分/会员制度（第三阶段）
- 自动订购/订阅（第三阶段）
- 批发入口（第三阶段）

---

## 2. 技术栈

| 层级 | 技术 | 用途 |
|------|------|------|
| 框架 | Next.js 15（App Router, TypeScript） | SSR/SSG、路由、API 路由 |
| 数据库 | Supabase（PostgreSQL） | 数据存储、RLS、实时功能 |
| 样式 | TailwindCSS v4 + Shadcn/UI | UI 组件、响应式设计 |
| 认证 | Clerk | 用户认证、角色管理 |
| 支付 | Stripe | 在线支付（第二阶段） |
| 邮件 | Resend | 事务性邮件和营销邮件 |
| 存储 | Cloudflare R2 | 图片/媒体文件存储 |
| 托管 | Vercel | 部署、CDN、Serverless |
| 富文本编辑器 | Tiptap v2 | 后台 CMS 无头编辑器 |
| 数据校验 | Zod | Schema 校验 |
| 图标 | Lucide React | 图标库 |

---

## 3. 信息架构

### 3.1 站点地图

```
首页 (/)
├── 博客 (/blog)
│   ├── 博客文章 (/blog/[slug])
│   └── 按分类筛选博客 (/blog?category=[slug])
├── 按宠物类型的护理指南
│   └── 分类页面 (/category/[slug])
├── 关于我们 (/about)
├── 静态页面 (/[slug])
│   ├── 隐私政策
│   ├── 服务条款
│   └── 联系我们
├── 认证（Clerk 托管）
│   ├── 登录 (/sign-in)
│   └── 注册 (/sign-up)
└── 管理后台 (/admin) [受保护]
    ├── 仪表盘概览 (/admin)
    ├── 文章管理 (/admin/posts)
    │   ├── 创建文章 (/admin/posts/new)
    │   └── 编辑文章 (/admin/posts/[id]/edit)
    ├── 分类管理 (/admin/categories)
    ├── 菜单编辑器 (/admin/menus)
    ├── 媒体库 (/admin/media)
    ├── 页面管理 (/admin/pages)
    │   └── 编辑页面 (/admin/pages/[id]/edit)
    └── 站点设置 (/admin/settings)
```

### 3.2 宠物分类（初始）

| 宠物 | Slug | 护理主题 |
|------|------|---------|
| 仓鼠 | `hamster` | 住所、饮食、健康、行为、美容、丰容 |
| 龙猫 | `chinchilla` | 住所、饮食、沙浴、温度控制、社交化 |
| 刺猬 | `hedgehog` | 住所、饮食、上手训练、健康、防冬眠 |
| 花枝鼠 | `fancy-rat` | 住所、饮食、社交化、健康、训练 |

> 分类可扩展 — 更多宠物类型（蜜袋鼯、雪貂、兔子、豚鼠等）可随时通过管理后台添加。

---

## 4. 页面规格

### 4.1 公共布局（页头 + 页脚）

**页头：**

```
┌─────────────────────────────────────────────────────────────────┐
│ [公告栏 - 轮播消息]                                              │
├─────────────────────────────────────────────────────────────────┤
│ [Logo]    [导航: 首页 | 护理指南 ▾ | 博客 | 关于]        [搜索] │
│           ┌─────────────────────────────────┐                   │
│           │ 护理指南 ▾                      │                   │
│           │  ├─ 仓鼠                        │                   │
│           │  │   ├─ 住所与设置              │                   │
│           │  │   ├─ 饮食与营养              │                   │
│           │  │   └─ 健康与保健              │                   │
│           │  ├─ 龙猫                        │                   │
│           │  ├─ 刺猬                        │                   │
│           │  └─ 花枝鼠                      │                   │
│           └─────────────────────────────────┘                   │
└─────────────────────────────────────────────────────────────────┘
```

- 导航支持最多 **3 级** 嵌套
- 所有菜单项均可通过管理后台管理
- 移动端：折叠为汉堡菜单，带滑出式抽屉
- 滚动时吸顶页头（可选，可配置）
- 搜索图标打开搜索覆盖层，支持预测结果

**页脚：**

```
┌─────────────────────────────────────────────────────────────────┐
│  [第一栏: 宠物护理]   [第二栏: 资源]       [第三栏: 法律]        │
│  - 仓鼠护理           - 关于我们            - 隐私政策           │
│  - 龙猫护理           - 博客                - 使用条款           │
│  - 刺猬护理           - 联系我们            - Cookie 政策        │
│  - 花枝鼠护理         - 常见问题                                 │
├─────────────────────────────────────────────────────────────────┤
│  [Logo]  [社交媒体: Instagram | Pinterest | YouTube | TikTok]   │
│  © 2026 Exotic Pet Care. 保留所有权利。                          │
└─────────────────────────────────────────────────────────────────┘
```

- 页脚菜单项通过后台管理（与页头共用同一系统）
- 社交媒体链接可在站点设置中配置
- 移动端：各栏垂直堆叠，带可折叠手风琴效果

### 4.2 首页

| 区块 | 描述 | 优先级 |
|------|------|--------|
| 公告栏 | 轮播文字消息（新文章提醒、小贴士等） | P0 |
| 英雄横幅 | 全宽图片/插图，含标题 + CTA（"探索护理指南"） | P0 |
| 宠物分类网格 | 4 张卡片（仓鼠、龙猫、刺猬、花枝鼠），带可爱插图，链接到分类页面 | P0 |
| 精选文章 | 3-6 篇精选博客文章，卡片网格形式（图片、标题、摘要、分类标签） | P0 |
| 信任标识栏 | 图标行："专家指南" / "每周更新" / "兽医审核" / "社区喜爱" | P1 |
| 关于简介 | 简短介绍段落 + "了解更多"链接到关于页面 | P1 |

### 4.3 博客列表页 (`/blog`)

| 元素 | 描述 |
|------|------|
| 页面标题 | "博客"，含 SEO 元描述 |
| 分类筛选 | 水平胶囊/标签栏，显示所有分类，点击筛选 |
| 搜索栏 | 对文章标题和摘要进行全文搜索 |
| 文章网格 | 响应式文章卡片网格（移动端 2 栏、平板 3 栏、桌面端 4 栏） |
| 文章卡片 | 特色图片、分类徽章、标题、摘要（120 字符）、阅读时长、发布日期 |
| 分页 | 基于页码的分页，"上一页 / 下一页" + 页码 |
| 空状态 | 当筛选/搜索无结果时显示友好提示 |

**文章卡片组件：**

```
┌──────────────────────┐
│ [特色图片]            │
│ ┌──────────────────┐ │
│ │ 🏷 仓鼠护理      │ │
│ │                  │ │
│ │ 如何打造完美的   │ │
│ │ 仓鼠栖息地       │ │
│ │                  │ │
│ │ 了解关于创建...  │ │
│ │                  │ │
│ │ 📖 5 分钟阅读   │ │
│ │ 2026年3月28日    │ │
│ └──────────────────┘ │
└──────────────────────┘
```

### 4.4 博客详情页 (`/blog/[slug]`)

| 元素 | 描述 |
|------|------|
| 面包屑 | 首页 > 博客 > [分类] > [标题] |
| 文章头部 | 标题（H1）、作者名、发布日期、阅读时长、分类标签 |
| 特色图片 | 全宽主图，含 alt 文本 |
| 文章正文 | 渲染的 Tiptap HTML 内容（支持标题、列表、图片、链接、引用、代码块） |
| 目录 | 从 H2/H3 标题自动生成，桌面端侧边栏吸附 |
| 相关文章 | 底部显示同分类的 3 篇相关文章 |
| 社交分享 | 分享按钮：Twitter、Facebook、Pinterest、复制链接 |
| JSON-LD | 文章结构化数据，用于 Google 富文本摘要 |

### 4.5 分类页面 (`/category/[slug]`)

| 元素 | 描述 |
|------|------|
| 分类头部 | 分类名称（H1）、描述、可选主图 |
| 子分类 | 如有子分类，显示为筛选标签 |
| 文章网格 | 该分类下所有已发布文章，卡片布局与博客列表页相同 |
| 分页 | 与博客列表页相同 |
| SEO | 每个分类独立的元标题/描述 |

### 4.6 关于我们页面 (`/about`)

| 元素 | 描述 |
|------|------|
| 英雄区块 | 团队/品牌图片，附使命宣言 |
| 我们的故事 | 关于品牌的富文本内容（通过后台页面管理） |
| 我们的价值观 | 图标网格：热爱动物、专业知识、社区至上 等 |
| 团队展示 | 可选的团队成员卡片（照片、姓名、职位、简介） |
| CTA | "开始阅读我们的指南"按钮，链接到博客 |

### 4.7 搜索结果

| 元素 | 描述 |
|------|------|
| 搜索输入框 | 预填搜索词，可清除 |
| 结果数量 | "为 [关键词] 找到 X 个结果" |
| 结果列表 | 与博客列表页相同的文章卡片网格 |
| 无结果 | 友好的空状态提示，含推荐分类 |

---

## 5. 管理后台

### 5.1 权限控制

| 角色 | 权限 |
|------|------|
| **管理员** | 完整权限：文章、分类、菜单、媒体、页面、设置、用户管理 |
| **编辑** | 文章（自己的 + 所有人的）、分类、媒体上传。无法访问：菜单、设置、用户管理 |

- 通过 Clerk 进行身份认证
- 角色存储在 Supabase `user_roles` 表中
- 管理路由通过 Clerk 中间件保护（`/admin/*`）

### 5.2 后台布局

```
┌──────────────────────────────────────────────────────┐
│ [Logo] 管理后台                            [用户 ▾]  │
├────────────┬─────────────────────────────────────────┤
│            │                                         │
│ 仪表盘     │  [主要内容区域]                          │
│ 文章       │                                         │
│ 分类       │                                         │
│ 菜单       │                                         │
│ 媒体       │                                         │
│ 页面       │                                         │
│ 设置       │                                         │
│            │                                         │
│ ─────────  │                                         │
│ 查看网站→  │                                         │
│            │                                         │
└────────────┴─────────────────────────────────────────┘
```

### 5.3 文章管理

**文章列表 (`/admin/posts`)：**

| 功能 | 描述 |
|------|------|
| 表格视图 | 标题、状态（徽章）、分类、作者、发布日期、更新日期 |
| 筛选 | 状态（全部 / 草稿 / 已发布 / 已归档）、分类下拉菜单 |
| 搜索 | 按标题搜索 |
| 排序 | 按日期（默认最新）、标题、状态 |
| 批量操作 | 删除选中项、更改状态 |
| 快捷操作 | 每行可编辑、在网站查看、复制、删除 |

**文章编辑器 (`/admin/posts/new` & `/admin/posts/[id]/edit`)：**

| 字段 | 类型 | 校验 | 说明 |
|------|------|------|------|
| 标题 | 文本输入 | 必填，最多 200 字符 | 文章的 H1 标题 |
| Slug | 文本输入 | 必填，唯一，从标题自动生成 | URL 路径，可编辑 |
| 摘要 | 文本域 | 最多 300 字符 | 用于文章卡片和元描述备选 |
| 内容 | Tiptap 富文本编辑器 | 必填 | 支持：标题（H2-H4）、粗体、斜体、列表、链接、图片（R2 上传）、引用、代码块、表格 |
| 特色图片 | 图片上传 | 推荐 | 上传到 R2，显示在文章卡片和主图中 |
| 分类 | 多选 | 至少选 1 个 | 从已有分类中选择 |
| 状态 | 下拉菜单 | 必填 | 草稿 / 已发布 / 已归档 |
| 是否精选 | 开关 | 默认关闭 | 在首页精选区块中显示 |
| 发布时间 | 日期选择器 | 首次发布时自动设置 | 可编辑，用于定时发布 |

**SEO 字段（文章编辑器中的可折叠区块）：**

| 字段 | 类型 | 校验 | 说明 |
|------|------|------|------|
| 元标题 | 文本输入 | 最多 60 字符 | 为空时默认使用文章标题 |
| 元描述 | 文本域 | 最多 160 字符 | 为空时默认使用摘要 |
| OG 图片 | 图片上传 | 可选 | 为空时默认使用特色图片 |
| 规范 URL | URL 输入 | 可选 | 用于交叉发布的内容 |

### 5.4 分类管理 (`/admin/categories`)

| 功能 | 描述 |
|------|------|
| 树形视图 | 拖拽排序的分类树，显示层级关系 |
| 创建 | 名称、slug（自动生成）、描述、上级分类（可选）、排序位置 |
| 编辑 | 内联编辑或弹窗 |
| 删除 | 需确认，如有文章已分配则阻止删除 |
| 限制 | 最多支持 2 级嵌套（父级 → 子级） |

### 5.5 菜单编辑器 (`/admin/menus`)

| 功能 | 描述 |
|------|------|
| 位置标签页 | 在页头菜单和页脚菜单之间切换 |
| 树形视图 | 可视化树形结构，支持拖拽重新排序 |
| 添加项目 | 标签（显示文字）、URL（站内路径或外部链接）、新标签页打开开关 |
| 嵌套 | 拖拽项目进行嵌套，**最多 3 级** |
| 可见性 | 开关控制单个菜单项的显示/隐藏，无需删除 |
| 预览 | 实时预览菜单在网站上的渲染效果 |

**菜单项字段：**

| 字段 | 类型 | 说明 |
|------|------|------|
| 标签 | 文本 | 必填，在导航中显示 |
| URL | 文本 | 必填，站内路径（`/blog`）或完整 URL |
| 新标签页打开 | 开关 | 默认：关闭 |
| 是否可见 | 开关 | 默认：开启 |
| 位置 | 自动 | 由拖拽顺序决定 |
| 父级 | 自动 | 由嵌套层级决定 |

### 5.6 媒体库 (`/admin/media`)

| 功能 | 描述 |
|------|------|
| 网格视图 | 所有已上传图片的缩略图网格 |
| 上传 | 拖拽或点击上传，支持 JPG/PNG/WebP/GIF，最大 10MB |
| 详情 | 点击查看：文件名、尺寸、文件大小、alt 文本（可编辑）、上传日期、上传者 |
| 删除 | 需确认 |
| 复制 URL | 快速复制 R2 公共 URL |
| 搜索 | 按文件名或 alt 文本搜索 |

### 5.7 页面管理 (`/admin/pages`)

与文章编辑器相同，但用于静态页面（关于、隐私政策、服务条款、联系我们）。字段：

| 字段 | 类型 | 说明 |
|------|------|------|
| 标题 | 文本 | 必填 |
| Slug | 文本 | 必填，唯一 |
| 内容 | Tiptap 编辑器 | 富文本 |
| 元标题 | 文本 | SEO |
| 元描述 | 文本域 | SEO |
| 是否发布 | 开关 | 默认：草稿 |

### 5.8 站点设置 (`/admin/settings`)

| 设置项 | 类型 | 描述 |
|--------|------|------|
| 站点名称 | 文本 | 显示在页头、页脚、元标签中 |
| 站点描述 | 文本域 | 默认元描述 |
| Logo | 图片上传 | 页头和页脚的 Logo |
| Favicon | 图片上传 | 浏览器标签页图标 |
| 社交链接 | URL 字段 | Instagram、Pinterest、YouTube、TikTok、Twitter |
| 公告栏 | 文本 + 开关 | 公告内容及启用/禁用 |
| Google Analytics ID | 文本 | GA4 衡量 ID |

---

## 6. 数据库 Schema

### 6.1 实体关系

```
┌──────────────┐     ┌─────────────────┐     ┌──────────────┐
│   categories │     │ post_categories │     │    posts     │
│──────────────│     │─────────────────│     │──────────────│
│ id (PK)      │◄────│ category_id(FK) │────►│ id (PK)      │
│ name         │     │ post_id (FK)    │     │ title        │
│ slug (UQ)    │     └─────────────────┘     │ slug (UQ)    │
│ description  │                              │ excerpt      │
│ parent_id(FK)│──┐                           │ content      │
│ position     │  │                           │ content_html │
│ created_at   │◄─┘ (自引用)                  │ featured_img │
└──────────────┘                              │ status       │
                                              │ is_featured  │
┌──────────────┐                              │ meta_title   │
│ user_roles   │                              │ meta_desc    │
│──────────────│                              │ og_image_url │
│ id (PK)      │                              │ canonical_url│
│ clerk_user_id│                              │ reading_time │
│ role         │                              │ author_id    │
│ display_name │                              │ published_at │
│ created_at   │                              │ created_at   │
└──────────────┘                              │ updated_at   │
                                              └──────────────┘
┌──────────────────┐
│ navigation_menus │     ┌──────────────┐     ┌──────────────┐
│──────────────────│     │    media     │     │    pages     │
│ id (PK)          │     │──────────────│     │──────────────│
│ label            │     │ id (PK)      │     │ id (PK)      │
│ url              │     │ filename     │     │ title        │
│ location         │     │ url          │     │ slug (UQ)    │
│ parent_id (FK)   │──┐  │ file_size    │     │ content      │
│ position         │  │  │ mime_type    │     │ content_html │
│ open_in_new_tab  │◄─┘  │ width        │     │ meta_title   │
│ is_visible       │     │ height       │     │ meta_desc    │
│ created_at       │     │ alt_text     │     │ is_published │
└──────────────────┘     │ uploaded_by  │     │ created_at   │
                         │ created_at   │     │ updated_at   │
┌──────────────┐         └──────────────┘     └──────────────┘
│site_settings │
│──────────────│
│ key (PK)     │
│ value (JSONB)│
│ updated_at   │
└──────────────┘
```

### 6.2 表详情

**`posts`（文章表）**

| 列名 | 类型 | 约束 | 描述 |
|------|------|------|------|
| id | UUID | PK，默认 gen_random_uuid() | 主键 |
| title | TEXT | NOT NULL | 文章标题 |
| slug | TEXT | NOT NULL, UNIQUE | URL 友好标识符 |
| excerpt | TEXT | | 卡片用短描述 |
| content | JSONB | | Tiptap JSON 内容 |
| content_html | TEXT | | 预渲染的 HTML，用于前台显示 |
| featured_image_url | TEXT | | R2 图片 URL |
| status | TEXT | NOT NULL, CHECK (draft/published/archived) | 发布状态 |
| is_featured | BOOLEAN | DEFAULT false | 在首页显示 |
| meta_title | TEXT | | SEO 标题（最多 60 字符） |
| meta_description | TEXT | | SEO 描述（最多 160 字符） |
| og_image_url | TEXT | | Open Graph 图片 |
| canonical_url | TEXT | | 交叉发布的规范 URL |
| reading_time | INT | | 预估阅读分钟数，自动计算 |
| author_id | TEXT | NOT NULL | Clerk 用户 ID |
| published_at | TIMESTAMPTZ | | 发布时间戳 |
| created_at | TIMESTAMPTZ | DEFAULT now() | 创建时间戳 |
| updated_at | TIMESTAMPTZ | DEFAULT now() | 通过触发器自动更新 |

**`categories`（分类表）**

| 列名 | 类型 | 约束 | 描述 |
|------|------|------|------|
| id | UUID | PK | 主键 |
| name | TEXT | NOT NULL | 显示名称 |
| slug | TEXT | NOT NULL, UNIQUE | URL 友好标识符 |
| description | TEXT | | 分类描述 |
| parent_id | UUID | FK → categories(id) ON DELETE SET NULL | 子分类的父级 |
| position | INT | DEFAULT 0 | 排序 |
| created_at | TIMESTAMPTZ | DEFAULT now() | 创建时间戳 |

**`post_categories`（文章-分类关联表）**

| 列名 | 类型 | 约束 |
|------|------|------|
| post_id | UUID | FK → posts(id) ON DELETE CASCADE |
| category_id | UUID | FK → categories(id) ON DELETE CASCADE |
| | | PRIMARY KEY (post_id, category_id) |

**`navigation_menus`（导航菜单表）**

| 列名 | 类型 | 约束 | 描述 |
|------|------|------|------|
| id | UUID | PK | 主键 |
| label | TEXT | NOT NULL | 显示文字 |
| url | TEXT | NOT NULL | 链接 URL |
| location | TEXT | NOT NULL, CHECK (header/footer) | 菜单位置 |
| parent_id | UUID | FK → self ON DELETE CASCADE | 父级项（最多 3 级） |
| position | INT | DEFAULT 0 | 同级内的排序 |
| open_in_new_tab | BOOLEAN | DEFAULT false | 链接目标 |
| is_visible | BOOLEAN | DEFAULT true | 可见性开关 |
| created_at | TIMESTAMPTZ | DEFAULT now() | 创建时间戳 |

**`media`（媒体表）**

| 列名 | 类型 | 约束 | 描述 |
|------|------|------|------|
| id | UUID | PK | 主键 |
| filename | TEXT | NOT NULL | 原始文件名 |
| url | TEXT | NOT NULL | R2 公共 URL |
| file_size | INT | | 文件大小（字节） |
| mime_type | TEXT | | MIME 类型 |
| width | INT | | 图片宽度（像素） |
| height | INT | | 图片高度（像素） |
| alt_text | TEXT | | 无障碍 alt 文本 |
| uploaded_by | TEXT | NOT NULL | Clerk 用户 ID |
| created_at | TIMESTAMPTZ | DEFAULT now() | 上传时间戳 |

**`pages`（页面表）**

| 列名 | 类型 | 约束 | 描述 |
|------|------|------|------|
| id | UUID | PK | 主键 |
| title | TEXT | NOT NULL | 页面标题 |
| slug | TEXT | NOT NULL, UNIQUE | URL 路径 |
| content | JSONB | | Tiptap JSON 内容 |
| content_html | TEXT | | 预渲染 HTML |
| meta_title | TEXT | | SEO 标题 |
| meta_description | TEXT | | SEO 描述 |
| is_published | BOOLEAN | DEFAULT false | 发布状态 |
| created_at | TIMESTAMPTZ | DEFAULT now() | |
| updated_at | TIMESTAMPTZ | DEFAULT now() | |

**`user_roles`（用户角色表）**

| 列名 | 类型 | 约束 | 描述 |
|------|------|------|------|
| id | UUID | PK | 主键 |
| clerk_user_id | TEXT | NOT NULL, UNIQUE | Clerk 用户标识符 |
| role | TEXT | NOT NULL, CHECK (admin/editor) | 用户角色 |
| display_name | TEXT | | 用于署名的显示名称 |
| created_at | TIMESTAMPTZ | DEFAULT now() | |

**`site_settings`（站点设置表）**

| 列名 | 类型 | 约束 | 描述 |
|------|------|------|------|
| key | TEXT | PK | 设置标识符 |
| value | JSONB | | 设置值（灵活格式） |
| updated_at | TIMESTAMPTZ | DEFAULT now() | |

### 6.3 索引

| 索引 | 列 | 用途 |
|------|------|------|
| posts_slug_idx | posts(slug) UNIQUE | 快速 slug 查询 |
| posts_status_published_idx | posts(status, published_at DESC) | 博客列表查询 |
| posts_featured_idx | posts(is_featured) WHERE is_featured = true | 首页精选文章 |
| categories_slug_idx | categories(slug) UNIQUE | 分类页面查询 |
| nav_menus_location_idx | navigation_menus(location, parent_id, position) | 菜单树查询 |
| media_uploaded_by_idx | media(uploaded_by, created_at DESC) | 用户媒体列表 |

### 6.4 RLS 策略

| 表 | 策略 | 条件 |
|------|------|------|
| posts | 公开读取 | WHERE status = 'published' |
| categories | 公开读取 | 所有行 |
| navigation_menus | 公开读取 | WHERE is_visible = true |
| pages | 公开读取 | WHERE is_published = true |
| media | 公开读取 | 所有行（公共 URL） |
| site_settings | 公开读取 | 所有行 |
| user_roles | 禁止公开访问 | 仅通过 service-role 管理 |

> 管理操作使用 Supabase service-role 密钥，完全绕过 RLS。

---

## 7. 技术架构

### 7.1 项目结构

```
2.独立站/
├── src/
│   ├── app/
│   │   ├── layout.tsx                    # 根布局（Clerk、字体、分析）
│   │   ├── page.tsx                      # 首页
│   │   ├── (public)/                     # 公开路由组
│   │   │   ├── layout.tsx                # 页头 + 页脚（从数据库读取）
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx              # 博客列表 + 筛选
│   │   │   │   └── [slug]/page.tsx       # 博客详情（SSG + ISR）
│   │   │   ├── category/
│   │   │   │   └── [slug]/page.tsx       # 分类页面
│   │   │   ├── about/page.tsx            # 关于我们
│   │   │   ├── search/page.tsx           # 搜索结果
│   │   │   └── [slug]/page.tsx           # 动态静态页面
│   │   ├── (admin)/                      # 管理路由组（Clerk 保护）
│   │   │   ├── layout.tsx                # 管理布局（侧边栏）
│   │   │   └── admin/
│   │   │       ├── page.tsx              # 仪表盘概览
│   │   │       ├── posts/
│   │   │       │   ├── page.tsx          # 文章列表
│   │   │       │   ├── new/page.tsx      # 创建文章
│   │   │       │   └── [id]/edit/page.tsx
│   │   │       ├── categories/page.tsx
│   │   │       ├── menus/page.tsx
│   │   │       ├── media/page.tsx
│   │   │       ├── pages/
│   │   │       │   ├── page.tsx
│   │   │       │   └── [id]/edit/page.tsx
│   │   │       └── settings/page.tsx
│   │   └── api/
│   │       ├── upload/route.ts           # R2 文件上传
│   │       ├── revalidate/route.ts       # 按需 ISR
│   │       └── webhooks/clerk/route.ts   # Clerk 用户同步
│   ├── components/
│   │   ├── ui/                           # Shadcn/UI 组件
│   │   ├── layout/                       # 页头、页脚、移动导航、管理侧边栏
│   │   ├── blog/                         # 文章卡片、文章内容、分类筛选
│   │   ├── admin/                        # 文章编辑器、SEO 字段、菜单树
│   │   └── shared/                       # 分页、搜索、面包屑
│   ├── lib/
│   │   ├── supabase/                     # client.ts, server.ts, admin.ts
│   │   ├── r2.ts                         # R2 上传/删除
│   │   ├── resend.ts                     # 邮件客户端
│   │   └── utils.ts                      # cn()、slug 生成、阅读时长计算
│   ├── hooks/                            # 自定义 React Hooks
│   └── types/                            # TypeScript 类型
├── supabase/migrations/                  # SQL 迁移文件
├── public/                               # 静态资源
├── middleware.ts                          # Clerk 认证中间件
└── .env.local.example                    # 环境变量模板
```

### 7.2 渲染策略

| 页面 | 策略 | 重新验证 |
|------|------|---------|
| 首页 | ISR | 3600 秒 + 按需 |
| 博客列表 | ISR | 3600 秒 + 按需 |
| 博客详情 | SSG + ISR | 3600 秒 + 通过 `revalidatePath()` 按需 |
| 分类页面 | ISR | 3600 秒 + 按需 |
| 关于页面 | ISR | 3600 秒 + 按需 |
| 管理页面 | SSR（动态） | 不缓存 |
| 搜索结果 | SSR（动态） | 不缓存 |

### 7.3 缓存与重新验证

- 博客内容使用 `revalidateTag('posts')` 和 `revalidateTag('post-[slug]')`
- 导航菜单使用 `revalidateTag('navigation')`
- 管理端操作通过 Server Actions 触发定向重新验证
- API 路由 `/api/revalidate` 用于外部 Webhook 触发（未来使用）

### 7.4 认证流程

```
用户访问 /admin/*
  → Clerk 中间件拦截
  → 未登录？重定向到 /sign-in
  → 已登录？检查 user_roles 表
    → 有 admin/editor 角色？允许访问
    → 没有角色？显示"无权访问"页面
```

---

## 8. SEO 规范

### 8.1 元标签（每个页面）

每个公开页面必须输出：

```html
<title>{meta_title || title} | {site_name}</title>
<meta name="description" content="{meta_description || excerpt}" />
<link rel="canonical" href="{canonical_url || current_url}" />

<!-- Open Graph -->
<meta property="og:title" content="{meta_title || title}" />
<meta property="og:description" content="{meta_description || excerpt}" />
<meta property="og:image" content="{og_image_url || featured_image_url}" />
<meta property="og:url" content="{canonical_url || current_url}" />
<meta property="og:type" content="article" /> <!-- 非文章页面使用 "website" -->
<meta property="og:site_name" content="{site_name}" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="{meta_title || title}" />
<meta name="twitter:description" content="{meta_description || excerpt}" />
<meta name="twitter:image" content="{og_image_url || featured_image_url}" />
```

### 8.2 结构化数据（JSON-LD）

**博客文章（Article）：**

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "文章标题",
  "description": "文章摘要",
  "image": "featured_image_url",
  "author": { "@type": "Person", "name": "作者名" },
  "publisher": {
    "@type": "Organization",
    "name": "站点名称",
    "logo": { "@type": "ImageObject", "url": "logo_url" }
  },
  "datePublished": "2026-03-28",
  "dateModified": "2026-03-30"
}
```

**面包屑：**

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "首页", "item": "/" },
    { "@type": "ListItem", "position": 2, "name": "博客", "item": "/blog" },
    { "@type": "ListItem", "position": 3, "name": "文章标题" }
  ]
}
```

**组织（首页）：**

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "站点名称",
  "url": "https://example.com",
  "logo": "logo_url",
  "sameAs": ["instagram_url", "pinterest_url", "youtube_url"]
}
```

### 8.3 技术 SEO

| 项目 | 实现方式 |
|------|---------|
| 站点地图 | 动态 `src/app/sitemap.ts` — 所有已发布的文章、分类、页面 |
| Robots | `src/app/robots.ts` — 允许全部，禁止 `/admin/*` |
| 规范 URL | 自动生成，可按文章覆盖 |
| 图片 Alt 文本 | 媒体库中的必填字段，编辑器中强制执行 |
| 语义化 HTML | `<article>`、`<nav>`、`<main>`、`<aside>`、`<header>`、`<footer>` |
| 标题层级 | 每页一个 H1，逻辑性的 H2-H4 嵌套 |
| URL 结构 | 简洁 slug：`/blog/hamster-housing-guide` |
| 页面速度 | Next.js 图片优化、ISR、代码分割、最小客户端 JS |
| 移动端 | 移动端优先的响应式设计，通过 Core Web Vitals |

---

## 9. 响应式设计

### 9.1 断点

| 断点 | 宽度 | 布局 |
|------|------|------|
| 手机 | < 640px | 单栏、汉堡导航、堆叠卡片 |
| 平板 | 640px - 1023px | 2 栏网格、精简导航 |
| 桌面 | 1024px - 1279px | 3 栏网格、完整超级菜单导航 |
| 宽屏 | ≥ 1280px | 4 栏网格、最大宽度容器 |

### 9.2 移动端专属行为

- 页头：汉堡图标 → 滑出式抽屉，带手风琴菜单（支持 3 级）
- 文章网格：手机端单栏，平板端 2 栏
- 页脚：手风琴式可折叠栏
- 搜索：手机端全屏覆盖层
- 管理后台：响应式侧边栏，手机端折叠为底部标签栏或汉堡菜单
- 图片：通过 Next.js Image 组件实现响应式 `srcset`
- 触控：所有可交互元素最小 44px 点击区域

---

## 10. 非功能性需求

### 10.1 性能

| 指标 | 目标 |
|------|------|
| Lighthouse 性能 | ≥ 90 |
| Lighthouse 无障碍 | ≥ 90 |
| Lighthouse SEO | ≥ 95 |
| 最大内容绘制（LCP） | < 2.5 秒 |
| 首次输入延迟（FID） | < 100 毫秒 |
| 累积布局偏移（CLS） | < 0.1 |
| 首字节时间（TTFB） | < 200 毫秒（Vercel Edge） |

### 10.2 无障碍

- WCAG 2.1 AA 合规
- 全站键盘可导航
- 屏幕阅读器兼容（正确的 ARIA 标签）
- 颜色对比度 ≥ 4.5:1
- 所有交互元素有焦点指示器
- 所有图片有 alt 文本

### 10.3 安全

- 所有管理路由通过 Clerk 认证 + 角色检查保护
- 所有表均有 Supabase RLS 策略
- 所有表单使用 Zod 进行输入校验
- CSRF 保护（Next.js 内置）
- 文件上传：服务端验证 MIME 类型和文件大小
- 环境变量：永不向客户端暴露服务端密钥

### 10.4 可扩展性

- 无状态架构（Vercel Serverless）
- 通过 Supabase 实现数据库连接池
- 通过 Cloudflare R2 公共访问实现图片 CDN
- ISR 确保公开页面的数据库查询最小化
- 架构支持添加新路由组而无需重构

---

## 11. 未来扩展性

### 第二阶段：电商

| 组件 | 实现方案 |
|------|---------|
| 新路由组 | `(shop)/*` — 商品列表、详情、购物车、结账 |
| 新数据库表 | `products`、`product_categories`、`orders`、`order_items`、`cart` |
| 支付 | Stripe Checkout 或 Stripe Elements |
| 库存 | 商品规格、库存跟踪 |
| 物流 | 运费计算 |

### 第三阶段：社区与增长

| 组件 | 实现方案 |
|------|---------|
| 论坛 | `topics`、`replies`、`forum_categories` 表，Clerk 用户资料 |
| 邮件订阅 | Resend 受众管理、邮件模板、活动排期 |
| 用户档案 | 公开资料、收藏文章、宠物档案 |
| 评论 | 带评分的商品评论（用于电商） |
| 积分 | 积分系统、推荐计划 |
| 国际化 | `[locale]` 路由段、内容翻译系统 |

---

## 12. 环境变量

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=            # Supabase 项目 URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=       # Supabase 匿名/公开密钥
SUPABASE_SERVICE_ROLE_KEY=           # Supabase service role 密钥（仅服务端）

# Clerk 认证
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=   # Clerk 可发布密钥
CLERK_SECRET_KEY=                    # Clerk 密钥（仅服务端）
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Cloudflare R2
R2_ACCOUNT_ID=                       # Cloudflare 账户 ID
R2_ACCESS_KEY_ID=                    # R2 访问密钥
R2_SECRET_ACCESS_KEY=                # R2 密钥
R2_BUCKET_NAME=                      # R2 存储桶名称
R2_PUBLIC_URL=                       # R2 公共访问 URL

# Resend
RESEND_API_KEY=                      # Resend API 密钥

# 分析（可选）
NEXT_PUBLIC_GA_ID=                   # Google Analytics 4 衡量 ID
```

---

## 13. 服务搭建指南

### Supabase
1. 在 [supabase.com](https://supabase.com) 注册账户
2. 创建新项目 → 在设置 > API 中记录项目 URL 和密钥
3. 在 SQL 编辑器中运行迁移 SQL，或通过 Supabase CLI（`supabase db push`）

### Clerk
1. 在 [clerk.com](https://clerk.com) 注册账户
2. 创建新应用 → 启用邮箱 + Google 登录
3. 复制 publishable key 和 secret key
4. 配置登录/注册 URL

### Cloudflare R2
1. 登录 Cloudflare 控制面板 → R2 对象存储
2. 创建存储桶（如 `exotic-pet-media`）
3. 启用存储桶的公共访问
4. 创建具有 R2 读写权限的 API 令牌
5. 记录账户 ID、访问密钥 ID、密钥

### Resend
1. 在 [resend.com](https://resend.com) 注册账户
2. 添加并验证你的域名
3. 复制 API 密钥

### Vercel
1. 安装 CLI：`npm i -g vercel`
2. 链接项目：`vercel link`
3. 在 Vercel 控制面板 → 设置 → 环境变量中添加所有环境变量
4. 部署：`vercel --prod`

---

## 14. 验收标准

### 第一阶段 MVP 上线清单

- [ ] 首页渲染英雄横幅、宠物分类网格和精选文章
- [ ] 博客列表页显示已发布文章，支持分类筛选和分页
- [ ] 博客详情页渲染文章内容，包含正确的 SEO 元标签和 JSON-LD
- [ ] 分类页面正确筛选文章
- [ ] 关于页面渲染来自管理后台的内容
- [ ] 页头显示来自数据库的 3 级导航菜单
- [ ] 页脚显示来自数据库的菜单链接
- [ ] 移动端导航正常工作（汉堡菜单 → 滑出式抽屉）
- [ ] 所有页面移动端响应式（在 375px、768px、1024px、1440px 下测试）
- [ ] 管理员通过 Clerk 登录，基于角色的权限控制正常
- [ ] 管理员可以创建、编辑、发布和归档文章
- [ ] 管理员可以管理分类（创建、编辑、删除、排序）
- [ ] 管理员可以管理页头和页脚菜单（最多 3 级）
- [ ] 管理员可以通过媒体库上传图片到 R2
- [ ] 管理员可以管理静态页面
- [ ] 管理员可以配置站点设置（名称、Logo、社交链接）
- [ ] sitemap.xml 包含所有已发布内容
- [ ] robots.txt 屏蔽 /admin/*
- [ ] Lighthouse 分数：性能 ≥ 90、SEO ≥ 95、无障碍 ≥ 90
- [ ] 所有页面有唯一的元标题和描述
- [ ] 搜索功能返回相关结果
- [ ] 网站部署到 Vercel 并可通过自定义域名访问
