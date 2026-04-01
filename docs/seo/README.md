# SEO 策略总览

## 项目概述

本文档集是异宠护理内容网站的完整 SEO 策略规划。网站为英文内容站，目标受众为 18-35 岁年轻女性，覆盖仓鼠（Hamster）、龙猫（Chinchilla）、刺猬（Hedgehog）、花式鼠（Fancy Rat）四大宠物品类。

**技术栈**: Next.js 15 (App Router) + Supabase + Vercel
**参考竞品**: shop.smallpetselect.com, thesprucepets.com, petmd.com

## 核心 SEO 目标

| 指标 | Phase 1 (0-6个月) | Phase 2 (6-12个月) | Phase 3 (12-18个月) |
|------|-------------------|--------------------|--------------------|
| 月有机流量 | 5,000 sessions | 25,000 sessions | 80,000+ sessions |
| 关键词 Top 10 占比 | 15% | 35% | 50%+ |
| Domain Rating | 15+ | 30+ | 45+ |
| Core Web Vitals | 全部通过 | 全部通过 | 全部通过 |
| 索引页面数 | 80+ | 200+ | 500+ |
| Featured Snippets | 5+ | 20+ | 50+ |

## 文档索引

| # | 文档 | 说明 | 优先级 | 状态 |
|---|------|------|--------|------|
| 1 | [关键词策略](keyword-strategy.md) | 关键词研究、搜索意图分析、难度评估 | P0 | ✅ |
| 2 | [内容 SEO 策略](content-strategy.md) | 内容支柱、话题集群、发布日历、E-E-A-T | P0 | ✅ |
| 3 | [技术 SEO 实施](technical-seo.md) | Next.js 15 技术清单、CWV、Schema、站点地图 | P0 | ✅ |
| 4 | [页面 SEO 指南](on-page-seo.md) | 标题模板、Meta 描述、图片 SEO、内链规则 | P0 | ✅ |
| 5 | [站外 SEO 与链接建设](off-page-seo.md) | 外链策略、社交媒体、数字 PR | P1 | ✅ |
| 6 | [GEO/AEO 策略](local-and-geo.md) | AI 搜索优化、语音搜索、Featured Snippets | P1 | ✅ |
| 7 | [数据分析与追踪](analytics-and-tracking.md) | KPI、GSC/GA4 设置、MCP 工具集成 | P0 | ✅ |
| 8 | [竞品分析](competitor-analysis.md) | 竞品 SEO 优劣势、内容差距、外链对比 | P1 | ✅ |
| 9 | [实施清单](implementation-checklist.md) | 上线前后清单、月度维护、季度审查 | P0 | ✅ |

## 优先级路线图

### 第一阶段：基础建设（第 1-2 周）
1. **技术 SEO 基础** — 确保 robots.ts、sitemap.ts、Schema 标记、canonical URL 全部正确实施
2. **Core Web Vitals 优化** — LCP < 2.5s, INP < 200ms, CLS < 0.1
3. **GSC + GA4 注册与配置** — 开始收集基线数据
4. **关键词研究完成** — 建立完整的关键词库

### 第二阶段：内容冲刺（第 3-8 周）
1. **4 篇支柱页面上线** — 每个宠物品类一篇终极指南
2. **20 篇集群文章上线** — 每个品类 5 篇长尾文章
3. **内链架构搭建** — 支柱页 ↔ 集群文章双向链接
4. **Schema 验证** — 所有页面通过 Google Rich Results Test

### 第三阶段：权威建设（第 9-16 周）
1. **外链获取启动** — Digital PR + 客座文章
2. **内容扩展到 50 篇** — 覆盖更多长尾关键词
3. **Featured Snippet 优化** — 针对 PAA 问题优化内容格式
4. **GEO 优化** — 适配 AI Overviews 和 Perplexity

### 第四阶段：规模化增长（第 17-24 周）
1. **内容更新机制** — 季度刷新旧文章
2. **程序化 SEO** — 品种页、地区页等模板化内容
3. **Phase 2 电商 SEO 准备** — Product Schema、商品页优化
4. **链接建设持续** — 月均获取 15-20 条高质量外链

## 核心原则

1. **用户意图至上** — 每篇内容必须精准匹配搜索意图，排名跟随价值
2. **白帽唯一** — 绝不使用链接交易、关键词堆砌、隐藏文本等违规手段
3. **E-E-A-T 贯穿始终** — 展示经验、专业性、权威性、可信度
4. **数据驱动决策** — 所有优化基于实际搜索数据，不做猜测
5. **Phase 意识** — 所有策略考虑三阶段演进（内容 → 电商 → 社区）
