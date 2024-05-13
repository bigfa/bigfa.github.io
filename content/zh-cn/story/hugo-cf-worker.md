---
title: "Hugo 使用 Cloudflare Worker 实现文章浏览计数与点赞"
description: "Hugo 使用 Cloudflare Worker 实现文章浏览计数与点赞"
categories: ["zine"]
tags: ["mini"]
date: 2024-05-13T15:31:20+08:00
cover:
hidden: false
comments: true
---

一直以来我对静态博客都没什么兴趣，主要原因是静态博客都是 MD 文件转网页，各种平台都是大同小异，只展示博文还好，如果实现一些其他计数功能，如点赞评论啥的都要额外部署服务，这样还不如直接用动态博客了。如果有研究过我的 hugo 主题会发现我的数据存储都是使用 Markdown 文章文件的，也算原汁原味的静态博客。

引入外部服务理论上啥功能都能实现，但那其实和静态博客已经没啥关系了。前阵子 Google domains 停止服务，我就把域名转到了 Cloudflare，顺便研究了一下自带的功能，发现用 Cloudflare 的免费方案搭建一个简单的数据统计服务是没啥成本的，于是就有了本文。

-   Cloudflare 免费方案的额度对普通用户来说完全够用，如果不够用付费就好了，毕竟大流量也很容易变现。
-   Cloudflare Worker 的域名无法直接访问，需要自己绑定域名。
-   前端调用需要解决跨域问题。
-   静态博客没有文章 id 的概念，需要设置一个 key，hugo 有个文件路径的 md5 可以作为 UniqueId。

[项目地址](https://github.com/bigfa/hugo-cf-worker)

直接 `git clone` 或者 `use template`.

需要手动修改 `wrangler.toml` 设置跨域域名和绑定`d1`数据库。

```
[vars]
DOMAIN = "https://bigfa.github.io"
```

这个域名是你要跨域的域名，可以设置为\*，这样就没有任何限制了。

```
[[d1_databases]]
binding = "DB"
database_name = "hugo-cf-d1"
database_id = "81e23e8a-3b26-4025-acf8-1123bfd5af74"
```

`database_name` 和 `database_id` 是你需要修改的，可在 Cloudflare 后台看到。

### 本地开发

Cloudflare 的命令行工具是 `wrangler`，需要 nodejs 环境。`wrangler` 使用过程中如果没登陆授权会弹出网页授权，授权即可。

进入项目目录，安装依赖。

```
npm install
```

创建数据库，如果已经在后台创建则无需执行这一步。

```
npx wrangler d1 execute create hugo-cf-d1
```

本地创建数据表，Cloudflare 本地和远程是分开的，如果后续手动部署，则需要在远程生产环境数据库创建表。

```
npx wrangler d1 execute hugo-cf-d1 --local --file=./schema.sql
```

之后即可启动项目

```
npm run dev
```

### 部署

#### 手动部署

如果生产环境数据库没有创建表则需要执行命令初始化。

```
npx wrangler d1 execute hugo-cf-d1 --file=./schema.sql
```

然后部署即可。

```
npm run deploy
```

#### Github Action 自动部署

进入 Github 项目的设置，`Settings->Secrets and variables->Actions->Repository secret`，新增一个`secret`，命名为 `CLOUDFLARE_API_TOKEN`。如果需要修改数据库名需要编辑`.github/workflows/deploy.yml`,`hugo-cf-d1` 就是数据库名。

```
wrangler d1 execute hugo-cf-d1 --file=./schema.sql
```

[密钥设置地址](https://dash.cloudflare.com/profile/api-tokens)，注意要给 D1 的编辑权限。

#### 域名绑定

![](//static.fatesinger.com/2024/05/xm2jaov6erphd72a.png)

我的域名本身就在 cloudflare，估计使用 cloudflare 的 DNS 解析也可以。

### 前端调用

本人的两款主题天然支持，只需要在在配置文件中开启即可。

```
post_like = true
post_view = true
actionDomain = 'https://v.wpista.com/'
```

`actionDomain` 就是你 Worker 中绑定的域名。

如果其他主题想使用，可复制我主题里的`assets/ts/utils.ts` 和`assets/ts/action.ts`两个文件到你的主题中。

调用方法。

```
new farallonActions({
    singleSelector: ".post--single", // 判断是否是文章详情页的class
    articleSelector: ".post--item", // 列表文章条目 class
    likeButtonSelctor: ".like-btn", // 点赞按钮 class
    viewSelector: ".views", // 浏览量 class
    actionDomain: "你的域名", // worker 域名
    text: "", // 浏览量后面的文案
});

```

根据你主题的情况具体适配，`actionDomain` 为必须设置的参数。

最后就是不管是 hugo 还是 wordpress 都强烈建议使用本人全家桶。
