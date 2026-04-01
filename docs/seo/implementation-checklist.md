# SEO 实施清单

## 一、上线前技术 SEO 检查清单

### 1.1 必检项（上线前必须完成）

```
[ ] robots.txt
    [ ] 存在于 /robots.txt
    [ ] 允许所有合法爬虫访问
    [ ] 正确屏蔽 /admin/*, /api/*, /auth/*
    [ ] 包含 sitemap.xml 引用
    [ ] 不屏蔽 AI 爬虫（GPTBot, Google-Extended, CCBot）

[ ] sitemap.xml
    [ ] 存在于 /sitemap.xml
    [ ] 包含所有公开页面 URL
    [ ] 每个 URL 有正确的 lastmod 日期
    [ ] 图片 sitemap 包含 featured images
    [ ] 提交到 Google Search Console

[ ] Canonical URLs
    [ ] 每个页面有自引用 canonical
    [ ] 无重复内容问题（带参数页面 → 主 URL）
    [ ] HTTP → HTTPS 重定向正常

[ ] Metadata
    [ ] 每个页面有唯一 title tag（50-60 字符）
    [ ] 每个页面有 meta description（150-160 字符）
    [ ] OG tags 完整（og:title, og:description, og:image）
    [ ] Twitter Card tags 正确
    [ ] 无 Index/NoFollow 误设置

[ ] 结构化数据（Schema）
    [ ] Article Schema（博客文章）
    [ ] BreadcrumbList Schema
    [ ] Organization Schema（首页）
    [ ] FAQ Schema（如有 FAQ 部分）
    [ ] 所有 Schema 通过 Google Rich Results Test

[ ] 技术基础
    [ ] HTTPS 正常（Vercel 自动）
    [ ] 所有内部链接有效（无 404）
    [ ] 图片有 alt text
    [ ] 使用 Next.js Image 组件
    [ ] 字体使用 next/font（无 FOIT/FOUT）
```

### 1.2 Core Web Vitals 检查

```
[ ] LCP (Largest Contentful Paint) < 2.5s
    [ ] 首屏图片使用 priority={true}
    [ ] 图片格式为 WebP/AVIF
    [ ] 无大型 JavaScript 阻塞渲染
    [ ] 服务器响应时间 TTFB < 200ms

[ ] INP (Interaction to Next Paint) < 200ms
    [ ] 最小化客户端 JavaScript
    [ ] 无长任务阻塞主线程
    [ ] 'use client' 仅用于必要组件

[ ] CLS (Cumulative Layout Shift) < 0.1
    [ ] 所有图片声明 width/height
    [ ] 字体预加载配置正确
    [ ] 无动态内容插入导致的布局偏移

[ ] 验证工具
    [ ] PageSpeed Insights: Performance ≥ 90
    [ ] Lighthouse: SEO ≥ 95
    [ ] GSC Experience Report: 所有页面 "Good"
```

### 1.3 移动端适配检查

```
[ ] 响应式布局正常（375px, 768px, 1024px）
[ ] 触摸目标 ≥ 44px
[ ] 文字可读性足够（无缩放问题）
[ ] 导航菜单在移动端正常工作
[ ] 无横向滚动
[ ] Mobile-Friendly Test 通过
```

### 1.4 页面 SEO 检查

```
[ ] 首页
    [ ] Title: "[Brand] — Expert Care Guides for Exotic Small Pets"
    [ ] Meta description 包含核心关键词
    [ ] H1 唯一且包含品牌
    [ ] 内部链接结构清晰
    [ ] 四大宠物品类都有链接入口

[ ] 博客列表页 /blog
    [ ] Title: "Blog | [Brand]"
    [ ] 分类筛选功能正常
    [ ] 分页正常
    [ ] 无重复内容（带参数的 URL canonical 到 /blog）

[ ] 博客文章页 /blog/[slug]
    [ ] Title 包含主关键词
    [ ] Meta description 包含关键词 + CTA
    [ ] H1 唯一且包含主关键词
    [ ] Featured image 有 alt text
    [ ] Author byline 显示
    [ ] 发布日期可见
    [ ] Breadcrumb 正确
    [ ] 内链 ≥ 3 条
    [ ] Related posts 显示
    [ ] Social share 按钮工作

[ ] 品类页 /category/[slug]
    [ ] 每个品类有唯一 Title/Meta
    [ ] 描述性 H1
    [ ] 显示该品类所有文章
    [ ] 内部链接到支柱页
```

---

## 二、上线后检查清单（发布后 48 小时内）

### 2.1 Google 索引检查

```
[ ] 提交 sitemap 后 48 小时内 Google 发现新页面
[ ] GSC 中检查 "Coverage" 报告
    [ ] 无新增 errors
    [ ] 所有页面状态为 "Valid"
[ ] 使用 URL Inspection 工具测试首页和 2-3 篇新文章
    [ ] 确认 Google 可以抓取
    [ ] 确认结构化数据有效

[ ] 索引问题排查
    [ ] 如有页面未索引，检查 robots.txt 或 noindex
    [ ] 如有 canonical 问题，检查 canonical 指向
    [ ] 如有 crawl errors，检查 GSC "Crawl > Crawl Errors"
```

### 2.2 基础流量验证

```
[ ] GSC 中确认有机搜索流量出现
[ ] GA4 中确认新用户访问
[ ] 确认页面标题在 SERP 中正确显示
[ ] 确认 meta description 在 SERP 中正确显示
[ ] 确认 Google 正确提取 featured snippet（如果有）
```

---

## 三、第一周内容检查

### 3.1 内容质量审核

```
[ ] 发布的前 4 篇支柱页面
    [ ] 字数达到目标（5,000-7,000 词）
    [ ] H2/H3 层级正确
    [ ] 内链结构正确（支柱 ↔ 集群双向链接）
    [ ] 图片数量 ≥ 5 张
    [ ] 每张图片 alt text 描述性
    [ ] FAQ 部分完整（≥ 3 个问题）
    [ ] Schema Markup 有效

[ ] 发布的前 8 篇集群文章
    [ ] 字数达到目标（1,500-3,000 词）
    [ ] 内链到支柱页
    [ ] Title/Meta 唯一且优化
    [ ] 开头直接回答搜索意图
```

### 3.2 内链检查

```
[ ] 支柱页链接到所有集群文章
[ ] 集群文章链接回支柱页
[ ] 同品类文章有交叉链接
[ ] Anchor text 多样化（不堆砌精确匹配词）
[ ] 无死链（用 Screaming Frog 或 Ahrefs 爬取检查）
```

---

## 四、第一月 SEO 检查

### 4.1 索引覆盖率

```
[ ] GSC > "Pages" 报告
    [ ] 索引页面数 ≥ 预期（≥ 12 篇新文章 + 4 品类页 + 首页）
    [ ] 无 "Crawled - currently not indexed" 页面堆积
    [ ] 无意外被排除的页面

[ ] 抓取统计
    [ ] Googlebot 每日抓取频率正常
    [ ] 无抓取预算浪费（在 robots.txt 中屏蔽无价值页面）
```

### 4.2 排名初步表现

```
[ ] GSC > "Performance" 报告
    [ ] 确认有非品牌关键词展现
    [ ] Top 20 关键词 ≥ 5 个
    [ ] 无关键词排名异常下跌

[ ] 关键词追踪（使用 Ahrefs 或 GSC）
    [ ] 记录 Phase 1 优先关键词排名
    [ ] 确认 "can hamsters eat bananas" 等低 KD 词开始有排名
```

### 4.3 技术健康检查

```
[ ] GSC > "Enhancements" > Schema
    [ ] 无新的 Schema 错误
    [ ] Article, BreadcrumbList 等类型被识别

[ ] GSC > "Experience" > Core Web Vitals
    [ ] 75% 页面 LCP ≤ 2.5s
    [ ] 75% 页面 CLS ≤ 0.1
    [ ] 记录 INP（如 Google 提供）

[ ] 性能检查
    [ ] PageSpeed Insights 跑分 ≥ 90
    [ ] 无新的性能回退
```

### 4.4 外链初步建设

```
[ ] 使用 Ahrefs Webmaster Tools
    [ ] 确认已有初始外链被识别
    [ ] 确认无垃圾外链
    [ ] 记录当前 DR（应该仍为 0 或接近 0）

[ ] 手动提交到关键资源
    [ ] Reddit 相关子版块维基（如有）
    [ ] 宠物博主资源页外联邮件（2-3 封）
```

---

## 五、第三月检查点

### 5.1 流量里程碑

```
[ ] GSC 有机会话数
    [ ] Phase 1 目标：5,000/月会话
    [ ] 如未达标，分析原因（索引？排名？内容质量？）

[ ] GA4 参与度指标
    [ ] 平均停留时间 ≥ 2 分钟
    [ ] 跳出率 < 65%
    [ ] 页面/会话 ≥ 2.0
```

### 5.2 排名进展

```
[ ] 关键词 Top 10 占比
    [ ] Phase 1 目标：15% 目标关键词进入 Top 10
    [ ] 记录新进 Top 10 的关键词

[ ] Featured Snippets
    [ ] 目标：获得 1-2 个 Featured Snippet
    [ ] 优先目标："can hamsters eat bananas" 等低竞争问题词
```

### 5.3 内容健康

```
[ ] 确认文章更新机制启动
    [ ] 首批文章是否需要更新（发布时间超过 3 个月）
    [ ] 检查是否有内容过时（产品推荐、季节性信息）

[ ] 内链效果
    [ ] 检查栏目页到文章的内链分布
    [ ] 确认无孤立页面（未被任何页面链接）
```

### 5.4 外链进展

```
[ ] Ahrefs 指标
    [ ] DR 提升至 5-10
    [ ] Referring Domains ≥ 20

[ ] 外链来源健康
    [ ] 无低质量外链（链接农场、垃圾站）
    [ ] 高相关性外链占比 > 50%
```

---

## 六、月度维护清单

### 每月执行

```
[ ] GSC 快速检查（15 分钟）
    [ ] 性能概览：点击/展现/ CTR /排名趋势
    [ ] 索引覆盖率：无新增错误
    [ ] CWV 状态：无新问题
    [ ] 手动操作：无新的 penalty 警告

[ ] 内容检查
    [ ] 发布节奏：是否按计划发布（每周 2-3 篇）
    [ ] 旧文更新：是否刷新超过 6 个月的内容
    [ ] 内链健康：新增内容是否正确内链

[ ] 技术检查
    [ ] 监控 GSC Crawl Stats：Googlebot 活动正常
    [ ] 检查 GSC "Removals"：无意外移除的 URL
    [ ] 验证 sitemap.xml：包含所有新页面

[ ] 外链检查
    [ ] Ahrefs 新增外链：确认质量
    [ ] Ahrefs 丢失外链：识别重要丢失并尝试恢复
    [ ] 品牌提及：是否有新的未链接提及
```

---

## 七、季度深度审查

### 每季度执行

```
[ ] KPI 达成评估
    [ ] 对照 PRD 中的 Phase 目标
    [ ] 流量、有机会话、DR、关键词排名进度

[ ] 内容审计
    [ ] 识别表现最好和最差的 10 篇内容
    [ ] 分析差距原因
    [ ] 制定优化或更新计划

[ ] 技术 SEO 审计
    [ ] 运行 Screaming Frog 全站爬取
    [ ] 检查 404 页面（修复或 301）
    [ ] 检查重定向链（不超过 2 跳）
    [ ] 验证所有 Schema 类型有效

[ ] 竞品复盘
    [ ] 检查竞品 DR 和外链变化
    [ ] 分析竞品新发布的高质量内容
    [ ] 调整我们的内容策略

[ ] 链接建设审查
    [ ] 审查 link velocity（增长速度是否健康）
    [ ] 评估外链质量（拒绝低质量链接如有必要）
    [ ] 制定下季度外链目标

[ ] 算法更新影响
    [ ] 检查 Google Core Update 是否影响我们的排名
    [ ] 分析受影响的页面类型
    [ ] 针对性调整（如有必要）
```

---

## 八、年度 SEO 审计

### 每年执行

```
[ ] 全站健康检查
    [ ] 爬取 500+ 页面，识别所有技术问题
    [ ] 检查所有页面的 E-E-A-T 信号
    [ ] 验证所有内部链接仍然有效

[ ] 内容战略复盘
    [ ] 评估全年内容 ROI
    [ ] 识别内容类型优先级调整
    [ ] 制定下年度内容计划

[ ] 竞争格局评估
    [ ] 新竞品出现？
    [ ] 竞品策略变化？
    [ ] 市场趋势（语音搜索、AI Overviews）影响？

[ ] 技术架构评估
    [ ] 是否需要技术架构升级
    [ ] i18n 是否需要启动（多语言）
    [ ] Phase 2 电商 SEO 准备就绪？

[ ] 预算和资源规划
    [ ] SEO 工具订阅是否值得续费
    [ ] 是否需要外包内容创作
    [ ] 外链建设预算分配
```

---

## 九、关键风险与应对

### 9.1 常见风险

| 风险 | 预防措施 | 应对方案 |
|------|---------|---------|
| Google Penalty | 白帽 SEO、不购买链接、定期检查 GSC | 如有 penalty，提交重新审核请求 |
| 排名大幅下跌 | 定期监控、避免大幅内容更改 | 分析原因、更新/增强受影响内容 |
| 技术问题导致索引丢失 | 上线前充分测试、GSC 监控 | 立即修复、提交重新索引请求 |
| 竞争对手超越 | 持续高质量内容产出、外链建设 | 分析竞品策略、加速优化 |
| 内容质量下降 | 坚持发布标准、不为了数量牺牲质量 | 暂停发布、优先质量 |

### 9.2 紧急响应流程

```
如发现重大 SEO 问题（如流量下跌 > 30%）:

1. 立即检查（0-2 小时）
   [ ] GSC Performance 报告：确认下跌幅度和范围
   [ ] GSC Coverage 报告：有无索引问题
   [ ] GSC Security Issues：有无安全问题

2. 初步诊断（2-24 小时）
   [ ] 是否是 Google 算法更新？
   [ ] 是否有技术问题（页面删除、重定向等）？
   [ ] 竞品是否大幅超越我们？

3. 制定应对（24-48 小时）
   [ ] 技术问题 → 立即修复
   [ ] 内容问题 → 更新/增强受影响页面
   [ ] 外链问题 → 审查 disavow（必要时）
   [ ] 算法更新 → 等待稳定后针对性调整

4. 监控恢复（1-4 周）
   [ ] 每日监控排名变化
   [ ] 记录所有采取的纠正措施
   [ ] 评估恢复进度
```

---

## 十、SEO 负责人职责

### 日常职责（每日 15 分钟）

- [ ] GSC 快速检查（性能概览）
- [ ] 新索引问题通知处理
- [ ] 回答紧急技术 SEO 问题

### 周常职责（每周 1-2 小时）

- [ ] GSC 周报告（流量、排名、索引变化）
- [ ] 内容发布监督和质量抽检
- [ ] 内链健康抽查
- [ ] 外联邮件处理

### 月常职责（每月半天）

- [ ] 月度 SEO 报告（按报告模板）
- [ ] 旧文更新计划
- [ ] 竞品监控分析
- [ ] 技术 SEO 问题排查

### 季度职责（每季度 1 天）

- [ ] 季度深度审查
- [ ] SEO 策略调整
- [ ] 内容计划制定
