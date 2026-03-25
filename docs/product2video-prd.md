# Product2Video MVP 需求文档

## 1. 产品基本信息

**产品名称**  
Product2Video

**一句话定位**  
Turn product images into short ad videos in minutes.

**中文解释**  
把商品图片快速变成可投放的短视频广告。

**产品阶段**  
MVP（最小可行版本）

**当前目标**  
先做出一个能跑通完整流程的版本，用来验证是否有人愿意使用和付费。

---

## 2. 目标用户

### 核心用户
- Shopify 卖家
- 独立站卖家
- Amazon 卖家
- 电商营销人员
- 小型跨境电商团队

### 用户特点
- 没有专业视频制作能力
- 没时间频繁做广告素材
- 想快速生成可用于投放或社媒发布的视频
- 希望降低找剪辑师或外包的成本
- 更关心结果，而不是复杂操作

---

## 3. 用户痛点

目标用户当前常见问题：

1. 商品图片很多，但不会快速做成视频广告
2. 找设计师或剪辑师成本高、速度慢
3. 广告素材需要不断更新，人工制作太耗时
4. 想测试不同视频风格，但现有流程太重
5. 很多 AI 视频工具太泛，不适合电商广告场景

---

## 4. 产品要解决的问题

本产品要解决的问题是：

**让电商卖家只用商品图和一句卖点，就能快速生成一条短视频广告。**

用户不需要懂视频剪辑，也不需要复杂设置，只要：
- 上传商品图
- 输入一句卖点
- 选择一个模板
- 点击生成

系统就输出一条可下载的视频。

---

## 5. MVP 目标

第一版不追求功能多，只追求：

1. 用户可以顺利完成一次视频生成
2. 用户可以清楚理解产品价值
3. 用户可以拿到一条可下载的视频结果
4. 整个流程控制在 3 分钟内完成
5. 后续可接入真实 API 替换假流程

---

## 6. MVP 功能范围

### 本期必须做的功能

#### 6.1 上传商品图片
- 用户可上传 3 到 8 张商品图片
- 支持常见图片格式（jpg、jpeg、png）
- 页面展示已上传图片预览
- 用户可删除已上传图片

#### 6.2 输入卖点文案
- 用户输入一句商品卖点
- 示例：
  - Waterproof for everyday use
  - Lightweight and perfect for travel
  - Designed for modern home office

#### 6.3 选择视频风格模板
第一版提供 3 个模板即可：
- Clean Product Ad
- Bold Promo
- Lifestyle Showcase

#### 6.4 点击生成视频
- 用户点击 Generate Video
- 系统进入生成中状态
- 第一版可先使用假数据模拟生成过程

#### 6.5 展示结果页
结果页展示：
- 视频预览
- 使用的模板
- 用户输入的卖点
- Download 按钮
- Try Another One 按钮

---

## 7. 本期明确不做

为了保证开发速度，以下功能本期不做：

- 用户登录
- 支付系统
- 历史记录
- 团队协作
- 多账号管理
- 批量生成
- 自定义高级参数
- 多语言界面
- 模板市场
- 数据分析后台
- 视频编辑器
- 自动配音
- 自动字幕编辑
- 自动发布到 TikTok / Meta / YouTube

---

## 8. 核心用户流程

### 用户主流程

1. 用户进入首页
2. 看到产品价值说明和示例
3. 点击 Start Free
4. 进入生成页
5. 上传 3 到 8 张商品图片
6. 输入一句卖点文案
7. 选择一个视频模板
8. 点击 Generate Video
9. 等待生成完成
10. 进入结果页
11. 预览视频
12. 点击下载视频

---

## 9. 页面设计

### 9.1 首页（Landing Page）

**目标**  
让用户一眼明白产品价值，并点击开始使用。

**页面内容**
- Hero 标题
- 副标题
- CTA 按钮
- 产品示例图或示例视频
- 三个核心卖点
- 使用步骤说明
- FAQ

**建议文案**

**标题**  
Turn product images into short ad videos in minutes

**副标题**  
Upload your product photos, add one selling point, and generate a ready-to-use video ad for ecommerce campaigns.

**按钮**
- Start Free
- See Demo

**三个卖点**
- No editing skills needed
- Built for ecommerce ads
- Create videos faster and cheaper

---

### 9.2 生成页（Generator Page）

**目标**  
让用户完成输入并发起视频生成。

**页面模块**
- 图片上传区
- 卖点输入框
- 模板选择区
- Generate Video 按钮
- 生成中的 loading 状态

**交互要求**
- 未上传图片时按钮不可点击
- 未输入卖点时可提醒，但不强制拦截
- 生成中按钮禁用
- 显示当前步骤和简洁提示

---

### 9.3 结果页（Result Page）

**目标**  
让用户看到结果并完成下载。

**页面模块**
- 视频预览区
- 使用信息摘要
- Download 按钮
- Try Another One 按钮

**结果页文案建议**
- Your video is ready
- Download your ad and use it in your next campaign

---

## 10. 功能详细说明

### 10.1 图片上传
**输入**
- 3 到 8 张商品图

**限制**
- 格式：jpg / jpeg / png
- 单张图片大小限制可后续补充
- 先不做复杂压缩逻辑

**输出**
- 前端展示图片预览列表

---

### 10.2 卖点输入
**输入**
- 一句话卖点

**形式**
- 单行或多行文本框均可
- 提供 placeholder

**placeholder 示例**
Describe your product’s key selling point

---

### 10.3 模板选择
**第一版模板**
- Clean Product Ad
- Bold Promo
- Lifestyle Showcase

**交互**
- 用户单选一个模板
- 默认选中第一个模板

---

### 10.4 生成逻辑
**第一阶段**
- 使用假数据
- 点击生成后等待 2 到 4 秒
- 跳转结果页
- 展示预设 demo 视频

**第二阶段**
- 接入真实视频模型 API
- 提交生成任务
- 查询任务状态
- 获取视频地址
- 展示真实视频结果

---

### 10.5 下载功能
**第一阶段**
- 下载 demo 视频文件

**第二阶段**
- 下载真实生成的视频文件

---

## 11. 技术实现建议

### 前端
- Next.js App Router

### 后端
- Next.js Route Handlers / Server Actions

### 部署
- Cloudflare Workers

### Next.js 适配
- `@opennextjs/cloudflare`

### 本地开发
- `next dev`

### Cloudflare 预览 / 部署
- `opennextjs-cloudflare preview`
- `opennextjs-cloudflare deploy`

### 数据存储
- 第一阶段不接数据库
- 第二阶段可接 Cloudflare R2 / D1 / 其他存储

### 视频生成
- 第一阶段使用本地假数据和 demo 视频
- 第二阶段接入真实视频生成 API

---

## 12. 数据结构（第二阶段再实现）

### users
- id
- email
- plan
- created_at

### generations
- id
- user_id
- selling_point
- template
- image_urls
- result_video_url
- status
- created_at

说明：  
MVP 第一阶段不一定需要这部分真正落地，但后续接数据库时可以按这个思路设计。

---

## 13. 成功标准

这个 MVP 是否成功，不看功能多少，只看以下几点：

### 产品层面
- 用户能顺利完成一次生成
- 用户能在 3 分钟内拿到视频结果
- 用户看得懂产品在做什么

### 验证层面
- 有人愿意点 Start Free
- 有人愿意真的上传图片尝试
- 有人愿意下载结果
- 有人愿意反馈“这个东西有用”
- 有人问价格或愿意留下邮箱

---

## 14. 开发优先级

### 第一优先级
- 首页
- 生成页
- 结果页
- 假流程跑通

### 第二优先级
- 接入真实视频生成 API
- 展示真实视频结果

### 第三优先级
- 登录
- 次数限制
- 支付
- 历史记录

---

## 15. 当前开发原则

1. 先做最小可运行版本
2. 先跑通前端假流程
3. 不做复杂后台
4. 不做大而全功能
5. 先验证价值，再补工程完整性
6. 用户先能用，比系统先完美更重要

---

## 16. 当前版本结论

这个 MVP 的本质不是做一个完整 AI 视频平台，  
而是先验证这个命题：

**电商卖家是否愿意用“商品图 + 卖点”快速生成短视频广告。**

如果这个命题成立，再继续加：
- 登录
- 付费
- 历史记录
- 多模板
- 批量生成
- 团队版

如果命题不成立，就尽快调整，而不是继续堆功能。
