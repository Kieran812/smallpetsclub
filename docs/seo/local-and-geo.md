# GEO / AEO 策略

## 一、Generative Engine Optimization (GEO)

### 1.1 什么是 GEO

GEO（生成式引擎优化）是针对 AI 搜索引擎（Google AI Overviews、ChatGPT Search、Perplexity、Bing Copilot）进行内容优化的策略。目标不仅是在传统搜索中排名，更是被 AI 生成的答案**引用和推荐**。

2026 年，约 30-40% 的 Google 搜索已触发 AI Overviews。对于信息类查询（我们的核心内容类型），这个比例更高。

### 1.2 GEO 核心原则

| 原则 | 说明 | 实施方法 |
|------|------|---------|
| 可爬取性 | AI 系统需要能读取你的页面 | 不屏蔽 GPTBot、Google-Extended、CCBot |
| 模块化结构 | 每个 H2 是一个独立的、可引用的知识单元 | 清晰的标题层级 + 段落式回答 |
| 引用密度 | 包含数据、统计和权威引用 | 每篇文章 3-5 个外部权威引用 |
| 实体明确性 | 让 AI 明确理解你在说什么 | Schema 标记 + 术语精确使用 |
| 独特价值 | 提供 AI 无法自行生成的信息 | 原创研究、实际经验、用户调查 |
| 时效性 | 保持内容新鲜 | 至少每季度更新一次核心内容 |

### 1.3 GEO 内容优化策略

#### 段落结构优化

AI 系统偏爱以下结构来提取引用：

```markdown
H2: What Temperature Do Chinchillas Need?

Chinchillas require an ambient temperature between **60-70°F (15-21°C)**.
Temperatures above 75°F (24°C) can cause heat stroke, which is
potentially fatal for chinchillas. This is because chinchillas have
extremely dense fur (approximately 20,000 hairs per square centimeter)
that prevents effective heat dissipation.

According to the Journal of Exotic Pet Medicine (2023), chinchilla
heat stroke cases increase by 340% during summer months in households
without air conditioning.
```

**关键要素**:
1. H2 是一个完整的问题
2. 第一句话直接回答，包含具体数据（加粗）
3. 第二句解释"为什么"
4. 引用权威来源增加可信度

#### 引用和统计增强

研究表明，包含引用和统计数据的内容被 AI 引用的概率提高 40%。

**实施规则**:
- 每篇 2000+ 词文章至少包含 5 个数据点
- 引用来源：PubMed 兽医研究、大学研究、行业调查
- 使用具体数字而非模糊表述

```
Bad:  "Hamsters need a large cage."
Good: "Hamsters need a minimum cage size of 620 square inches
      (4,000 sq cm), according to the German Veterinary Association's
      2024 guidelines."
```

#### 实体和术语优化

确保内容中的实体（宠物品种、疾病名称、产品类型）使用标准术语：

```
Good: "Syrian hamster (Mesocricetus auratus)"
Good: "wet tail (proliferative ileitis)"
Good: "African pygmy hedgehog (Atelerix albiventris)"

Bad: "that type of hamster" (含糊)
Bad: "the stomach thing" (非标准术语)
```

### 1.4 AI 爬虫管理

```typescript
// app/robots.ts — 确保 AI 爬虫可以访问
{
  userAgent: 'GPTBot',        // OpenAI (ChatGPT)
  allow: '/',
},
{
  userAgent: 'Google-Extended', // Google AI features
  allow: '/',
},
{
  userAgent: 'CCBot',          // Common Crawl (many AI use)
  allow: '/',
},
{
  userAgent: 'anthropic-ai',   // Anthropic (Claude)
  allow: '/',
},
{
  userAgent: 'PerplexityBot',  // Perplexity
  allow: '/',
},
```

### 1.5 GEO 监控

#### 手动监控（每月一次）
在以下 AI 搜索平台搜索核心关键词，记录是否被引用：

| 平台 | 搜索查询 | 是否引用我们 | 引用页面 |
|------|---------|-------------|---------|
| Google AI Overviews | "how to care for a hamster" | Yes/No | URL |
| ChatGPT | "what do hedgehogs eat" | Yes/No | 提及品牌? |
| Perplexity | "chinchilla cage setup guide" | Yes/No | URL |
| Bing Copilot | "best food for fancy rats" | Yes/No | URL |

#### 自动监控工具
- **Otterly.ai**: 追踪 AI 搜索中的品牌可见性
- **GrackAI**: AI Overview 出现频率监控
- **Perplexity Analytics**: 查看 Perplexity 引用次数

---

## 二、Answer Engine Optimization (AEO)

### 2.1 FAQ Schema 实施

每篇文章的 FAQ 部分都应添加 FAQPage Schema：

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
        "text": "Pet hamsters typically live 2-3 years. Syrian hamsters average 2-3 years, Campbell's dwarf hamsters 1.5-2 years, and Roborovski hamsters 3-3.5 years. With optimal care including proper diet, exercise, and regular vet checkups, some hamsters can live up to 4 years."
      }
    },
    {
      "@type": "Question",
      "name": "Are hamsters good pets for beginners?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, hamsters are excellent beginner pets, especially Syrian hamsters. They're relatively low-maintenance, don't require much space, and are generally friendly when properly socialized. However, they're nocturnal, so they're most active at night."
      }
    }
  ]
}
```

### 2.2 PAA (People Also Ask) 目标

每个核心关键词都有一组 PAA 问题。我们的文章必须回答这些问题。

#### Hamster PAA 高频问题
| 问题 | 目标文章 | 回答策略 |
|------|---------|---------|
| How long do hamsters live? | /blog/hamster-lifespan | 按品种表格 + 段落回答 |
| Are hamsters good pets? | /category/hamster | 优缺点列表 |
| What do hamsters eat? | /blog/what-do-hamsters-eat | 食物分类表格 |
| Do hamsters bite? | /blog/why-hamster-bites | 原因列表 + 解决方案 |
| How much does a hamster cost? | /blog/hamster-cost-guide | 费用明细表格 |
| Can hamsters live together? | /blog/can-hamsters-live-together | 按品种回答 |

#### Hedgehog PAA 高频问题
| 问题 | 目标文章 | 回答策略 |
|------|---------|---------|
| Are hedgehogs good pets? | /category/hedgehog | 优缺点 |
| Do hedgehogs smell? | /blog/do-hedgehogs-smell | 直接回答 + 解决方案 |
| Are hedgehogs legal? | /blog/hedgehog-legality-by-state | 各州表格 |
| Do hedgehogs bite? | /blog/do-hedgehogs-bite | 原因 + 预防 |
| How long do hedgehogs live? | /blog/hedgehog-lifespan | 因素分析 |

#### Chinchilla PAA 高频问题
| 问题 | 目标文章 |
|------|---------|
| Are chinchillas good pets? | /category/chinchilla |
| How long do chinchillas live? | /blog/chinchilla-lifespan |
| Do chinchillas like to be held? | /blog/how-to-hold-chinchilla |
| Can chinchillas get wet? | /blog/chinchilla-dust-bath-guide |
| How much do chinchillas cost? | /blog/chinchilla-cost-guide |

#### Fancy Rat PAA 高频问题
| 问题 | 目标文章 |
|------|---------|
| Are fancy rats good pets? | /category/fancy-rat |
| Do pet rats bite? | /blog/do-pet-rats-bite |
| How long do pet rats live? | /blog/pet-rat-lifespan |
| Do rats need to be in pairs? | /blog/do-rats-need-friends |
| Are pet rats clean? | /blog/are-pet-rats-clean |

### 2.3 PAA 回答格式

**最佳回答长度**: 40-60 词（Google Snippet 最佳长度）

**格式模板**:
```
[直接回答 — 1 句话]。[补充关键信息 — 1-2 句话]。
[具体数据或例外情况]。[行动建议（可选）]。
```

**示例**:
```
Q: How long do hamsters live?

A: Pet hamsters typically live 2-3 years, depending on the species.
Syrian hamsters average 2-3 years, while Roborovski hamsters can
live up to 3.5 years. Providing proper diet, adequate cage space
(min 620 sq inches), and regular vet checkups can help maximize
your hamster's lifespan.
```

---

## 三、语音搜索优化

### 3.1 语音搜索特征

语音搜索查询的特点：
- 更长（平均 6-10 个词 vs 文字搜索 2-4 个词）
- 更口语化（"What should I feed my hamster" vs "hamster food"）
- 通常是问句形式
- 期望一个直接、简洁的回答

### 3.2 优化策略

#### 针对 Question-Based 长尾关键词

| 传统关键词 | 语音搜索变体 |
|-----------|-------------|
| hamster food | what should I feed my hamster |
| hedgehog temperature | what temperature should I keep my hedgehog at |
| chinchilla lifespan | how long do chinchillas live as pets |
| rat cage size | how big should a cage be for two rats |

#### 内容优化

1. **使用自然语言 H2/H3**: 把标题写成问句形式
   ```
   Bad:  H2: Hamster Diet Requirements
   Good: H2: What Should You Feed Your Hamster?
   ```

2. **提供 Speakable 内容**: 文章开头和 FAQ 回答使用适合朗读的自然语句

3. **Speakable Schema**（实验性）:
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".article-summary", ".faq-answer"]
  }
}
```

### 3.3 语音设备内容适配

| 设备 | 数据来源 | 优化方式 |
|------|---------|---------|
| Google Assistant | Google Search + Featured Snippets | Snippet 优化 |
| Siri | Google Search (via Safari) + Bing | 同上 + Bing Webmaster |
| Alexa | Bing + 自有知识 | Bing SEO + Alexa Skills（远期） |

---

## 四、Featured Snippet 攻坚策略

### 4.1 Snippet 机会评估

| 关键词 | 当前 Snippet | 我们能赢吗 | 策略 |
|--------|-------------|-----------|------|
| what do hamsters eat | thesprucepets (列表) | 中 | 更全面的食物表格 |
| hamster lifespan | Knowledge Panel | 低 | 按品种对比表格 |
| hedgehog care | petmd (段落) | 高 | 更简洁的"at a glance"摘要 |
| chinchilla dust bath | youtube video | 中 | 步骤列表 + 嵌入视频 |
| can hamsters eat bananas | 段落型 | 高 | 直接 Yes + 用量数据 |
| hedgehog quilling | 无 snippet | 极高 | 抢占空白 |
| chinchilla sounds meaning | 无 snippet | 极高 | 声音 + 含义表格 |
| rat respiratory infection | petmd | 中 | 更详细的症状清单 |

### 4.2 Snippet 攻坚流程

1. **识别目标**: 用 Ahrefs/SEMrush 找到有 Snippet 的关键词
2. **分析当前 Snippet**: 什么格式（段落/列表/表格）？内容质量如何？
3. **创建优质替代**: 用更好的格式和更准确的信息回答
4. **排进 Top 10**: Snippet 通常从 Top 10 结果中选取
5. **监控**: 追踪 Snippet 获取和丢失

### 4.3 "Position Zero" 内容模板

```markdown
## {目标问题关键词}?

{直接回答，第一句话包含核心答案}。{补充一个关键数据点}。
{第三句提供上下文或例外情况}。

### {子问题 1}
{详细解答}

### {子问题 2}
{详细解答}

| {对比维度} | {选项 A} | {选项 B} | {选项 C} |
|------------|----------|----------|----------|
| {指标 1}   | {值}     | {值}     | {值}     |
| {指标 2}   | {值}     | {值}     | {值}     |
```

---

## 五、AI Overviews 特定优化

### 5.1 AI Overviews 内容选择特征

Google AI Overviews 倾向于引用：
- **高 E-E-A-T 页面**: 有作者、有引用、有更新日期
- **结构化数据丰富的页面**: Schema 标记完整
- **回答具体问题的页面**: 而非泛泛而谈
- **有独特数据/观点的页面**: 不是简单重复已有信息
- **最新内容**: 更新日期越近越好

### 5.2 针对 AI Overviews 的内容优化

#### 创建"引用诱饵"段落
```markdown
According to our analysis of 500 hamster owners surveyed in 2026,
the average annual cost of hamster care is $325, with the largest
expense being veterinary care ($120/year), followed by bedding
($85/year) and food ($65/year).
```
> 原创数据 + 具体数字 = 高引用概率

#### 建立权威作者实体
- 每位作者必须有完整的 Person Schema
- 作者简介页面包含发表文章列表
- 作者在其他平台的相关活动链接
- Google Scholar / ORCID（如有学术背景）

### 5.3 AI Overviews 监控工作流

**每月执行**:
1. 在 Google 搜索 20 个核心关键词
2. 记录哪些触发了 AI Overviews
3. 记录 AI Overview 引用了哪些来源
4. 分析被引用来源的共同特征
5. 调整内容策略以匹配这些特征

**追踪表格**:
| 关键词 | 有AI Overview | 引用来源1 | 引用来源2 | 我们被引用 | 改进行动 |
|--------|-------------|-----------|-----------|-----------|---------|
| hamster care | Yes | thesprucepets | petmd | No | 更新支柱页，添加数据 |
| hedgehog diet | Yes | petmd | herebyjohanna | No | 创建更全面的饮食指南 |

---

## 六、长期 GEO/AEO 战略

### Phase 1（0-6 月）: 基础建设
- 所有页面添加 FAQ Schema
- 每篇文章至少回答 3 个 PAA 问题
- 不屏蔽任何 AI 爬虫
- 开始月度 AI 搜索监控

### Phase 2（6-12 月）: 引用获取
- 发布 3-5 篇原创数据研究
- 建立 2-3 个互动工具（计算器、测验）
- 为 AI 回答优化 20 篇高优先级文章
- 目标：5+ 篇文章被 AI Overviews 引用

### Phase 3（12-18 月）: 规模化
- 开发 API 供 AI 系统结构化查询（如食物安全数据库）
- 建立行业引用标准（成为异宠数据的权威来源）
- 目标：20% 核心关键词的 AI Overview 引用我们
