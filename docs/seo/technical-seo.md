# 技术 SEO 实施指南

## 一、Next.js 15 App Router SEO 清单

### 1.1 Metadata API 配置

#### 静态 Metadata（layout.tsx / page.tsx）
```typescript
// app/layout.tsx — 全站默认 metadata
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.yoursite.com'),
  title: {
    default: 'Exotic Pet Care Guides | [Brand Name]',
    template: '%s | [Brand Name]',
  },
  description: 'Expert care guides for hamsters, chinchillas, hedgehogs, and fancy rats. Science-backed tips from experienced exotic pet owners.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: '[Brand Name]',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@brandhandle',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.yoursite.com',
  },
}
```

#### 动态 Metadata（博客文章页）
```typescript
// app/blog/[slug]/page.tsx
import type { Metadata } from 'next'

export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await getPost(params.slug)

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      images: [{ url: post.featuredImage, width: 1200, height: 630 }],
    },
    alternates: {
      canonical: post.canonicalUrl || `/blog/${post.slug}`,
    },
  }
}
```

### 1.2 robots.ts 配置

```typescript
// app/robots.ts
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/auth/', '/_next/'],
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      {
        userAgent: 'CCBot',
        allow: '/',
      },
    ],
    sitemap: 'https://www.yoursite.com/sitemap.xml',
  }
}
```

> **重要**: 不要屏蔽 AI 爬虫（GPTBot、Google-Extended、CCBot），这些是 GEO 的流量入口。

### 1.3 sitemap.ts 配置

```typescript
// app/sitemap.ts
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.yoursite.com'

  // 获取所有博客文章
  const posts = await getAllPosts()
  const blogEntries = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    images: post.featuredImage ? [`${baseUrl}${post.featuredImage}`] : [],
  }))

  // 获取所有品类页
  const categories = ['hamster', 'chinchilla', 'hedgehog', 'fancy-rat']
  const categoryEntries = categories.map((cat) => ({
    url: `${baseUrl}/category/${cat}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // 静态页面
  const staticPages = [
    { url: baseUrl, changeFrequency: 'daily' as const, priority: 1.0 },
    { url: `${baseUrl}/blog`, changeFrequency: 'daily' as const, priority: 0.8 },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly' as const, priority: 0.5 },
  ].map((page) => ({ ...page, lastModified: new Date() }))

  return [...staticPages, ...categoryEntries, ...blogEntries]
}
```

### 1.4 图片站点地图

Next.js 15 的 sitemap.ts 支持 `images` 属性。确保每篇文章的 featured image 都包含在 sitemap 中（见上方代码）。对于更复杂的图片站点地图需求，可创建独立的 `app/image-sitemap.xml/route.ts`。

---

## 二、Core Web Vitals 优化

### 2.1 LCP (Largest Contentful Paint) < 2.5s

| 优化项 | 实施方法 | 优先级 |
|--------|---------|--------|
| 图片优化 | 使用 `next/image`，自动 WebP/AVIF，responsive sizes | P0 |
| 首屏图片 preload | `priority={true}` on above-fold images | P0 |
| 字体优化 | 使用 `next/font`，自动 font-display: swap | P0 |
| 服务端渲染 | App Router 默认 SSR/RSC，零客户端 JS 开销 | P0 |
| CDN 缓存 | Vercel Edge Network 自动 CDN | 自带 |
| ISR 配置 | `revalidate: 3600`（1小时）for 博客文章 | P0 |
| 减少 TTFB | Vercel Edge Functions + Supabase connection pooling | P1 |

#### Next.js Image 最佳实践
```typescript
import Image from 'next/image'

// 首屏 Hero 图片 — 使用 priority 预加载
<Image
  src="/images/hamster-care-hero.webp"
  alt="Syrian hamster sitting in a properly set up cage with bedding and wheel"
  width={1200}
  height={630}
  priority
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
/>

// 非首屏图片 — 自动 lazy load（默认行为）
<Image
  src="/images/hamster-food-chart.webp"
  alt="Chart showing safe and unsafe foods for hamsters"
  width={800}
  height={450}
  sizes="(max-width: 768px) 100vw, 800px"
/>
```

### 2.2 INP (Interaction to Next Paint) < 200ms

| 优化项 | 实施方法 |
|--------|---------|
| React Server Components | 默认使用 RSC，减少客户端 JS bundle |
| 最小化 'use client' | 仅交互组件标记 'use client' |
| 动态导入 | `dynamic(() => import(...), { ssr: false })` for 非关键组件 |
| 避免主线程阻塞 | 使用 `requestIdleCallback` 或 `setTimeout` 延迟非关键任务 |
| 减少 hydration 开销 | 使用 Partial Prerendering (Next.js 15 实验特性) |

### 2.3 CLS (Cumulative Layout Shift) < 0.1

| 优化项 | 实施方法 |
|--------|---------|
| 图片尺寸声明 | next/image 自动处理 width/height |
| 字体加载 | next/font 消除 FOIT/FOUT |
| 广告/嵌入预留空间 | 使用 `min-height` 占位 |
| 动态内容 | 避免在可视区域上方插入内容 |
| Skeleton 加载 | 使用 Suspense + loading.tsx 骨架屏 |

### 2.4 性能监控

```typescript
// 使用 next/third-parties 或自定义方案上报 Web Vitals 到 GA4
// 可通过 Vercel Analytics 自动采集 CWV 数据
```

---

## 三、结构化数据（Schema Markup）

### 3.1 已在 PRD 中的 Schema

- Article
- BreadcrumbList
- Organization

### 3.2 需要额外实施的 Schema

#### FAQ Schema（针对 FAQ 部分）
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long do hamsters live?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pet hamsters typically live 2-3 years, though some species like Roborovski hamsters can live up to 3.5 years with proper care."
      }
    }
  ]
}
```

#### HowTo Schema（教程类文章）
```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Set Up a Hamster Cage",
  "description": "Step-by-step guide to setting up the perfect hamster habitat.",
  "totalTime": "PT30M",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "value": "50-150"
  },
  "supply": [
    { "@type": "HowToSupply", "name": "Hamster cage (min 620 sq in)" },
    { "@type": "HowToSupply", "name": "Paper-based bedding" },
    { "@type": "HowToSupply", "name": "Running wheel (8+ inches)" }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "Choose the right cage",
      "text": "Select a cage with at least 620 square inches of unbroken floor space.",
      "image": "https://www.yoursite.com/images/hamster-cage-selection.webp"
    }
  ]
}
```

#### Person Schema（作者实体，E-E-A-T）
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Author Name",
  "url": "https://www.yoursite.com/about/author-slug",
  "jobTitle": "Exotic Pet Care Specialist",
  "description": "5+ years of experience keeping hamsters and hedgehogs.",
  "sameAs": [
    "https://twitter.com/authorhandle",
    "https://www.linkedin.com/in/authorhandle"
  ]
}
```

#### Product Schema（Phase 2 准备）
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Premium Timothy Hay for Chinchillas",
  "image": "https://www.yoursite.com/products/timothy-hay.webp",
  "description": "...",
  "offers": {
    "@type": "Offer",
    "price": "24.99",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "156"
  }
}
```

#### ItemList Schema（列表/排行文章）
```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Best Hamster Cages 2026",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Niteangel Bigger World Hamster Cage",
      "url": "https://www.yoursite.com/blog/best-hamster-cages#niteangel"
    }
  ]
}
```

### 3.3 Schema 实施方式

推荐使用 `next-seo` 或自定义的 JsonLd 组件来注入 JSON-LD 结构化数据。JSON-LD 内容应来自可信的内部数据源（CMS/数据库），而非用户输入，以确保安全性。

```typescript
// components/seo/JsonLd.tsx
// 使用 Next.js Metadata API 的 script 注入
// 或者使用 next-seo 库提供的 <JsonLd /> 组件
// 确保数据来自可信数据源（Supabase CMS），不接受用户直接输入
```

### 3.4 Schema 验证

- 每次部署后用 [Google Rich Results Test](https://search.google.com/test/rich-results) 测试
- 在 GSC 的 "Enhancements" 中监控 Schema 错误
- 使用 [Schema.org Validator](https://validator.schema.org/) 确认语法正确

---

## 四、URL 结构与 Canonical 规则

### 4.1 URL 规范

| 页面类型 | URL 格式 | 示例 |
|---------|---------|------|
| 首页 | / | / |
| 博客列表 | /blog | /blog |
| 博客文章 | /blog/[slug] | /blog/what-do-hamsters-eat |
| 品类页 | /category/[slug] | /category/hamster |
| 博客按品类筛选 | /blog?category=[slug] | /blog?category=hamster |
| About | /about | /about |
| 静态页 | /[slug] | /privacy-policy |

### 4.2 URL Slug 规则

- 全小写
- 单词间用连字符 `-` 分隔
- 不含停用词（the, a, an, in, on, for 等）除非影响语义
- 不超过 5 个单词（简短但描述性）
- 包含主关键词
- 不含日期（避免内容看起来过时）
- 不含特殊字符或中文

```
Good: /blog/what-do-hamsters-eat
Bad:  /blog/What-Do-Hamsters-Eat-A-Complete-Diet-Guide-for-2026
Bad:  /blog/2026/03/15/hamster-food
Bad:  /blog/post-123
```

### 4.3 Canonical URL 策略

```typescript
// 自动 canonical（默认行为）
// app/blog/[slug]/page.tsx
export async function generateMetadata({ params }) {
  return {
    alternates: {
      canonical: `/blog/${params.slug}`, // 自引用 canonical
    },
  }
}

// 手动覆盖 canonical（CMS 中设置）
// 当同一内容有多个 URL 时，指定主 URL
```

#### Canonical 规则
1. 每个页面必须有自引用 canonical
2. 带查询参数的 URL（如 `/blog?category=hamster`）canonical 指向 `/blog`
3. 分页页面（如 `/blog?page=2`）canonical 指向自身（不指向第一页）
4. HTTP 自动重定向到 HTTPS（Vercel 默认处理）
5. 带 www 和不带 www 统一（选择一个，301 另一个）
6. 尾部斜杠统一（Next.js `trailingSlash: false` 配置）

```typescript
// next.config.ts
const nextConfig = {
  trailingSlash: false, // /blog/ 会 redirect 到 /blog
}
```

---

## 五、爬虫预算优化

### 5.1 阻止无价值页面被爬取

| 页面/路径 | 处理方式 | 原因 |
|----------|---------|------|
| /admin/* | robots.txt disallow | 后台管理页面 |
| /api/* | robots.txt disallow | API 端点 |
| /auth/* | robots.txt disallow | 认证页面 |
| /_next/* | robots.txt disallow | Next.js 内部资源 |
| /blog?category=X | canonical 指向 /blog | 避免重复索引 |
| /blog?page=X | 允许爬取 | 分页有独立内容 |
| 标签页（如有） | noindex, follow | 薄内容页面 |
| 搜索结果页 | noindex, follow | 动态生成，无 SEO 价值 |

### 5.2 优化爬取效率

1. **Sitemap 准确性**: sitemap 中只包含需要索引的 URL，不含 noindex 页面
2. **内链清洁**: 不链接到 404、301 目标页面
3. **扁平化架构**: 任何页面距首页不超过 3 次点击
4. **响应速度**: 保持 TTFB < 500ms，爬虫会爬取更多页面
5. **HTTP 状态码正确**: 404 返回真实 404（不是 soft 404），301 用于永久重定向

### 5.3 索引监控

```
每周检查 GSC → Pages → Indexing:
- Indexed pages 数量趋势
- "Not indexed" 原因分析
  - Crawled - currently not indexed（内容质量问题）
  - Discovered - currently not indexed（爬虫预算问题）
  - Excluded by 'noindex' tag（检查是否误设）
  - Duplicate without user-selected canonical
```

---

## 六、安全头配置（SEO 相关）

### Vercel 上的安全头配置

```typescript
// next.config.ts
const securityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
]

const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}
```

> HTTPS 由 Vercel 自动处理，无需手动配置 SSL。

---

## 七、国际化 SEO 准备（未来扩展）

虽然 Phase 1 只做英文站，但架构上为未来多语言预留空间：

### 7.1 推荐方案：子目录
```
英文: yoursite.com/         （默认）
中文: yoursite.com/zh/
西文: yoursite.com/es/
```

### 7.2 Next.js 15 i18n 预留

```typescript
// middleware.ts（未来启用）
import { NextRequest, NextResponse } from 'next/server'

const locales = ['en', 'zh', 'es']
const defaultLocale = 'en'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return
  // 未来在此添加语言检测和重定向逻辑
}
```

### 7.3 Hreflang 标签模板（未来使用）

```typescript
// 多语言启用后
alternates: {
  canonical: '/blog/hamster-care-guide',
  languages: {
    'en': '/blog/hamster-care-guide',
    'zh': '/zh/blog/hamster-care-guide',
    'es': '/es/blog/hamster-care-guide',
    'x-default': '/blog/hamster-care-guide',
  },
}
```

---

## 八、Vercel 部署优化

### 8.1 构建输出优化

```typescript
// next.config.ts
const nextConfig = {
  compress: true,

  // 图片优化
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 天缓存
  },

  // 实验特性
  experimental: {
    optimizeCss: true, // CSS 优化
  },
}
```

### 8.2 ISR (Incremental Static Regeneration) 策略

| 页面类型 | revalidate 时间 | 原因 |
|---------|----------------|------|
| 首页 | 3600 (1小时) | 展示最新文章 |
| 博客列表 | 3600 (1小时) | 新文章发布 |
| 博客文章 | 86400 (24小时) | 内容变化不频繁 |
| 品类页 | 86400 (24小时) | 内容稳定 |
| About 等静态页 | false (纯静态) | 极少更新 |

```typescript
// app/blog/[slug]/page.tsx
export const revalidate = 86400 // 24 hours

// 或使用 on-demand revalidation
// 在 CMS 更新时通过 API route 触发
// POST /api/revalidate?path=/blog/hamster-care-guide&secret=xxx
```

### 8.3 Edge 配置

```typescript
// 对于需要极快响应的页面
export const runtime = 'edge'

// 对于需要 Node.js 功能的页面（如 Supabase 连接）
export const runtime = 'nodejs'
```

---

## 九、技术 SEO 审计清单

### 每月执行

```
[ ] 爬取检查
    [ ] 运行 Screaming Frog / Sitebulb 爬取
    [ ] 检查 404 页面并修复或 301
    [ ] 检查重定向链（不超过 2 跳）
    [ ] 确认 sitemap 中无 404 或 noindex URL

[ ] 索引检查
    [ ] GSC 索引覆盖率报告
    [ ] 新发布页面是否被索引
    [ ] "Crawled - currently not indexed" 页面分析

[ ] 性能检查
    [ ] Core Web Vitals (GSC Experience Report)
    [ ] Lighthouse 跑分（移动端 + 桌面端）
    [ ] 页面大小检查（HTML < 100KB, 总页面 < 2MB）

[ ] Schema 检查
    [ ] GSC Enhancements 无新错误
    [ ] Rich Results Test 抽查 5 个页面

[ ] 安全检查
    [ ] GSC Security Issues 无警告
    [ ] SSL 证书有效性
    [ ] 混合内容检查（无 HTTP 资源）
```
