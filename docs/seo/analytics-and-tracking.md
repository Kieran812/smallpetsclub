# SEO 数据分析与追踪

## 一、KPI 定义与目标

### 核心 KPI

| KPI | 定义 | 数据源 | Phase 1 目标 (6个月) | Phase 2 目标 (12个月) |
|-----|------|--------|---------------------|---------------------|
| 有机流量 | 来自搜索引擎的非品牌会话数 | GA4 | 5,000/月 | 25,000/月 |
| 关键词可见度 | 目标关键词在 Top 10 的占比 | GSC + Ahrefs | 15% | 35% |
| 平均排名 | 目标关键词的平均位置 | GSC | Top 30 | Top 15 |
| 点击率 (CTR) | 有机展现到点击的转化率 | GSC | 3%+ | 5%+ |
| 索引页面数 | Google 成功索引的页面数 | GSC | 80+ | 200+ |
| Domain Rating | Ahrefs DR 评分 | Ahrefs | 15+ | 30+ |
| Referring Domains | 外链来源域名数 | Ahrefs | 50+ | 150+ |
| Core Web Vitals | LCP/INP/CLS 通过率 | GSC/CrUX | 100% Good | 100% Good |
| Featured Snippets | 获得的精选摘要数量 | GSC + Ahrefs | 5+ | 20+ |
| 跳出率 | 仅访问一页后离开的比例 | GA4 | < 65% | < 55% |
| 平均停留时间 | 每次会话的平均时长 | GA4 | > 2分钟 | > 3分钟 |

### Phase 2 电商 KPI（预留）

| KPI | 定义 | 数据源 | 目标 |
|-----|------|--------|------|
| 有机转化率 | 有机流量转化为购买的比例 | GA4 | 2%+ |
| 有机收入 | 来自有机搜索的收入 | GA4 | $X/月 |
| 产品页有机流量 | 产品页的有机搜索流量 | GA4 + GSC | XX/月 |

---

## 二、Google Search Console 设置指南

### 2.1 初始设置

#### 步骤 1: 验证所有权
```
1. 登录 search.google.com/search-console
2. 添加资产 → 选择 "Domain" 类型
3. 输入域名: yoursite.com
4. 通过 DNS TXT 记录验证（推荐，覆盖所有子域名）
5. 在 Vercel DNS 或域名注册商添加 TXT 记录
6. 等待验证完成（通常几分钟到几小时）
```

#### 步骤 2: 提交 Sitemap
```
1. GSC → Sitemaps
2. 输入: sitemap.xml
3. 提交
4. 确认状态为 "Success"
5. 验证已发现的 URL 数量正确
```

#### 步骤 3: 关联 GA4
```
1. GA4 → Admin → Property Settings → Product Links
2. 选择 "Search Console Links"
3. 关联对应的 GSC 属性
4. 完成后可在 GA4 中查看 GSC 数据
```

### 2.2 GSC 日常监控要点

| 报告 | 检查内容 | 频率 |
|------|---------|------|
| Performance | 总点击、展现、CTR、平均位置趋势 | 每日 |
| Performance → Queries | 关键词排名变化，新发现的查询 | 每周 |
| Performance → Pages | 各页面流量变化，发现问题页面 | 每周 |
| Pages (Indexing) | 索引状态，"Not indexed" 原因 | 每周 |
| Experience → CWV | Core Web Vitals 字段数据 | 每月 |
| Enhancements | Schema 错误和警告 | 每周 |
| Links | 外链增长，内链分布 | 每月 |
| Manual Actions | 人工惩罚（希望永远是空的） | 每周 |
| Security Issues | 安全问题 | 每周 |

### 2.3 GSC 高级用法

#### 正则过滤器（关键词分组）
```
非品牌关键词: 排除包含 "[brand name]" 的查询
仓鼠关键词: 正则 hamster|cage|bedding|wet tail
刺猬关键词: 正则 hedgehog|quilling|hibernate
龙猫关键词: 正则 chinchilla|dust bath|chin
花式鼠关键词: 正则 fancy rat|pet rat|rat cage
```

#### 比较功能
- 对比前后 28 天数据，发现排名变化
- 对比移动端 vs 桌面端性能
- 对比不同国家/地区的表现

---

## 三、Google Analytics 4 设置

### 3.1 基础配置

#### 步骤 1: 创建 GA4 属性
```
1. analytics.google.com → Admin → Create Property
2. 属性名: [Brand Name] - Production
3. 时区: US/Eastern (或目标市场主要时区)
4. 货币: USD
5. 创建 Web 数据流
6. 获取 Measurement ID: G-XXXXXXXXXX
```

#### 步骤 2: 安装到 Next.js

```typescript
// app/layout.tsx 使用 next/third-parties
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

> 使用 `@next/third-parties` 可自动优化加载性能，不影响 CWV。

#### 步骤 3: 配置数据流设置
```
GA4 → Admin → Data Streams → Web → Enhanced Measurement:
[x] Page views
[x] Scrolls (90% 阅读深度)
[x] Outbound clicks
[x] Site search
[x] File downloads
[x] Form interactions
```

### 3.2 SEO 专用事件追踪

#### 自定义事件

```typescript
// 文章阅读完成（滚动到底部）
function trackArticleComplete(articleSlug: string) {
  window.gtag?.('event', 'article_complete', {
    article_slug: articleSlug,
    content_type: 'blog_post',
  })
}

// 内链点击追踪
function trackInternalLinkClick(targetUrl: string, anchorText: string) {
  window.gtag?.('event', 'internal_link_click', {
    target_url: targetUrl,
    anchor_text: anchorText,
  })
}

// CTA 点击（newsletter 订阅等）
function trackCTAClick(ctaType: string, ctaLocation: string) {
  window.gtag?.('event', 'cta_click', {
    cta_type: ctaType,       // 'newsletter', 'download', 'share'
    cta_location: ctaLocation, // 'sidebar', 'inline', 'footer'
  })
}
```

### 3.3 GA4 SEO 报告视图

#### 有机流量仪表板
```
GA4 → Explore → 自由格式报告:

维度: Session source/medium, Landing page, Date
指标: Sessions, Engaged sessions, Engagement rate, Average engagement time

过滤器: Session source/medium = google / organic
```

#### 内容表现报告
```
GA4 → Explore:

维度: Page path, Page title, Content group (自定义)
指标: Views, Average engagement time, Scroll depth (自定义事件)

排序: Views (降序)
```

### 3.4 内容分组设置

在 GA4 中按宠物品类和内容类型分组：

```typescript
// 通过 gtag 设置 content_group
window.gtag?.('event', 'page_view', {
  content_group: getContentGroup(pathname),
})

function getContentGroup(path: string): string {
  if (path.includes('/category/hamster') || path.includes('hamster'))
    return 'Hamster'
  if (path.includes('/category/chinchilla') || path.includes('chinchilla'))
    return 'Chinchilla'
  if (path.includes('/category/hedgehog') || path.includes('hedgehog'))
    return 'Hedgehog'
  if (path.includes('/category/fancy-rat') || path.includes('rat'))
    return 'Fancy Rat'
  return 'General'
}
```

---

## 四、推荐 SEO 工具

### 4.1 必备工具（Phase 1）

| 工具 | 用途 | 费用 | 优先级 |
|------|------|------|--------|
| Google Search Console | 索引、排名、CWV 监控 | 免费 | P0 |
| Google Analytics 4 | 流量、用户行为分析 | 免费 | P0 |
| Google PageSpeed Insights | Core Web Vitals 测试 | 免费 | P0 |
| Google Rich Results Test | Schema 验证 | 免费 | P0 |
| Ahrefs Webmaster Tools | 外链监控、站点审计 | 免费（基础） | P0 |

### 4.2 推荐付费工具（Phase 1-2）

| 工具 | 用途 | 月费 | 优先级 |
|------|------|------|--------|
| Ahrefs Lite | 关键词研究、竞品分析、外链分析 | $129/月 | P1 |
| Screaming Frog | 技术 SEO 爬取 | 免费版(<500 URL) | P1 |
| Surfer SEO | 内容优化评分 | $89/月 | P2 |
| Clearscope / Frase | AI 内容优化 | $170+/月 | P2 |

### 4.3 免费替代工具

| 用途 | 工具 | 限制 |
|------|------|------|
| 关键词研究 | Ubersuggest, KeySearch | 每日查询限制 |
| 排名追踪 | Google Search Console | 仅自有站点 |
| 站点审计 | Ahrefs Webmaster Tools | 仅基础审计 |
| 页面速度 | PageSpeed Insights + Lighthouse | 无 |
| 外链检查 | Ahrefs Free Backlink Checker | 前 100 条 |

---

## 五、报告模板与频率

### 5.1 周报模板（5 分钟快速检查）

```markdown
## SEO 周报 — Week of [Date]

### 本周快照
- 有机会话: X,XXX (+/-X% vs 上周)
- 新索引页面: X
- GSC 展现: XX,XXX
- GSC 点击: X,XXX
- 平均 CTR: X.X%
- 平均位置: XX.X

### 排名变化
- 上升: [keyword] #XX → #XX
- 下降: [keyword] #XX → #XX
- 新进 Top 10: [keyword]

### 本周发布
- [文章标题] — /blog/slug — 已提交索引

### 下周计划
- 发布: [X 篇文章]
- 优化: [旧文更新]
- 技术: [修复项]
```

### 5.2 月报模板（深度分析）

```markdown
## SEO 月报 — [Month Year]

### 1. 流量概览
| 指标 | 本月 | 上月 | 环比 | 去年同月 | 同比 |
|------|------|------|------|---------|------|
| 有机会话 | | | | | |
| 有机用户 | | | | | |
| 新用户占比 | | | | | |
| 平均互动时间 | | | | | |
| 跳出率 | | | | | |

### 2. 关键词表现
- Top 10 关键词数: X (+/- vs 上月)
- Top 3 关键词数: X
- 新发现关键词: [列表]
- Featured Snippets: X

### 3. 内容表现
| 文章 | 有机流量 | 排名变化 | 互动时间 |
|------|---------|---------|---------|
| [Top 5 文章] | | | |

### 4. 技术健康
- 索引覆盖率: X%
- CWV 通过率: X%
- 爬取错误数: X
- Schema 错误数: X

### 5. 外链增长
- 新增 Referring Domains: X
- 丢失 Referring Domains: X
- 当前 DR: XX

### 6. 下月计划
- 内容计划: [X 篇新文, X 篇更新]
- 技术任务: [列表]
- 外链目标: [X 条]
```

### 5.3 季度审查（战略调整）

```markdown
## SEO 季度审查 — Q[X] [Year]

### 1. KPI 达成情况
| KPI | 目标 | 实际 | 达成率 | 趋势 |
|-----|------|------|--------|------|

### 2. 竞品变化
- 竞品 A: [排名/内容/外链变化]
- 竞品 B: [变化]

### 3. 算法更新影响
- [更新名称]: [影响分析]

### 4. 内容策略复盘
- 表现最好的内容类型: [类型]
- 表现最差的内容类型: [类型]
- 内容 ROI 分析

### 5. 下季度战略调整
- 关键词策略调整: [说明]
- 内容方向调整: [说明]
- 技术优先级调整: [说明]
- 预算分配调整: [说明]
```

### 5.4 报告频率总结

| 报告 | 频率 | 受众 | 耗时 |
|------|------|------|------|
| GSC 快速检查 | 每日 | SEO 负责人 | 5 分钟 |
| 周报 | 每周一 | 团队 | 15 分钟 |
| 月报 | 每月初 | 团队 + 管理层 | 1 小时 |
| 季度审查 | 每季度末 | 全团队 + 决策层 | 半天 |

---

## 六、MCP Server 集成指南

### 6.1 Google Search Console MCP

#### 用途
在 AI 助手（Claude、Cursor）中直接查询 GSC 数据，实现自动化 SEO 分析。

#### 安装

推荐使用 `mcp-gsc`（开源社区版本）:

```bash
# 1. 安装
npm install -g @anthropic/mcp-gsc
# 或使用 npx
npx mcp-gsc setup

# 2. 配置 Google Cloud 服务账号
# a. 在 Google Cloud Console 创建项目
# b. 启用 Search Console API
# c. 创建 Service Account
# d. 下载 JSON 密钥文件
# e. 在 GSC 中将服务账号邮箱添加为用户（完全权限）
```

#### Claude Desktop 配置

```json
// ~/Library/Application Support/Claude/claude_desktop_config.json
{
  "mcpServers": {
    "google-search-console": {
      "command": "npx",
      "args": ["-y", "mcp-gsc"],
      "env": {
        "GOOGLE_SERVICE_ACCOUNT_KEY": "/path/to/service-account-key.json",
        "GSC_PROPERTY": "https://www.yoursite.com"
      }
    }
  }
}
```

#### 可用功能
- 查询关键词排名和流量数据
- 分析索引覆盖状态
- 获取 Core Web Vitals 数据
- 比较时间段性能
- 发现新关键词机会

### 6.2 Google Analytics 4 MCP

#### 用途
在 AI 助手中直接查询 GA4 数据，分析用户行为和内容表现。

#### 安装

Google 官方 MCP Server:

```bash
# 使用 Google 官方 GA4 MCP
npx @anthropic/ga4-mcp setup
```

参考 Google 官方文档: https://developers.google.com/analytics/devguides/MCP

#### Claude Desktop 配置

```json
{
  "mcpServers": {
    "google-analytics": {
      "command": "npx",
      "args": ["-y", "@anthropic/ga4-mcp"],
      "env": {
        "GOOGLE_SERVICE_ACCOUNT_KEY": "/path/to/service-account-key.json",
        "GA4_PROPERTY_ID": "properties/XXXXXXXXX"
      }
    }
  }
}
```

#### 可用功能
- 查询有机流量趋势
- 分析页面用户行为（停留时间、跳出率）
- 内容分组表现分析
- 自定义事件数据查询
- 用户来源归因分析

### 6.3 DataForSEO MCP

#### 用途
获取关键词搜索量、难度、SERP 特征、竞品排名等 SEO 数据。

#### 安装

```bash
# DataForSEO 官方 MCP Server
npx @dataforseo/mcp-server setup
```

#### 配置

```json
{
  "mcpServers": {
    "dataforseo": {
      "command": "npx",
      "args": ["-y", "@dataforseo/mcp-server"],
      "env": {
        "DATAFORSEO_LOGIN": "your-login",
        "DATAFORSEO_PASSWORD": "your-password"
      }
    }
  }
}
```

#### 注意事项
- DataForSEO 采用按调用计费（pay-per-call）
- 最低充值 $50，注册赠送 $1 试用额度
- 关键词搜索量查询约 $0.05/次
- SERP 分析约 $0.10/次
- 建议设置每月预算上限

#### 可用功能
- 关键词搜索量和难度查询
- SERP 特征分析（snippet、PAA 等）
- 竞品关键词发现
- 外链分析
- 排名追踪

### 6.4 MCP 集成工作流示例

```
日常 SEO 分析流程（通过 Claude + MCP）:

1. "查看过去 7 天有机流量最高的 10 个页面" (GA4 MCP)
2. "这些页面的主要搜索关键词是什么" (GSC MCP)
3. "这些关键词的竞争难度和当前 SERP 特征" (DataForSEO MCP)
4. "生成优化建议" (Claude 分析)
5. "输出到周报模板" (Claude 格式化)
```

### 6.5 数据安全注意

```
重要安全事项:
- Service Account 密钥文件不要提交到 Git
- 在 .gitignore 中添加: *.json (或具体密钥文件名)
- 使用环境变量而非硬编码 API 密钥
- 定期轮换 Service Account 密钥
- 给 Service Account 最小必要权限
```

---

## 七、SEO 数据整合架构

```
┌─────────────────────────────────────────┐
│            Looker Studio Dashboard       │
│   (可视化报告，自动刷新，分享给团队)       │
└─────────────────┬───────────────────────┘
                  │
    ┌─────────────┼─────────────┐
    │             │             │
┌───┴────┐  ┌────┴────┐  ┌────┴────┐
│  GSC   │  │  GA4    │  │ Ahrefs  │
│  Data  │  │  Data   │  │  Data   │
└────────┘  └─────────┘  └─────────┘
    │             │             │
    └─────────────┼─────────────┘
                  │
    ┌─────────────┴─────────────┐
    │     MCP Server Layer      │
    │  (Claude/AI 自动化分析)    │
    └───────────────────────────┘
```

### Looker Studio 免费仪表板

创建一个 Looker Studio (原 Google Data Studio) 仪表板整合 GSC + GA4 数据：

1. **GSC 连接器**: 直接在 Looker Studio 中连接 GSC
2. **GA4 连接器**: 直接连接 GA4
3. **仪表板页面**:
   - 流量概览（有机流量趋势、来源分布）
   - 关键词表现（排名分布、CTR、展现量）
   - 内容表现（各页面流量、互动指标）
   - 技术健康（CWV、索引状态）
   - 外链增长（需手动更新或 API 导入）

4. **自动刷新**: 设置每日自动刷新数据
5. **分享**: 生成可分享链接给团队成员
