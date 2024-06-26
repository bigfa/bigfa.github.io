---
title: "Hugo 使用 Cloudflare Worker 实现文章评论"
description: "Hugo 使用 Cloudflare Worker 实现文章评论"
categories: ["hugo"]
tags: []
date: 2024-06-20T19:11:24+08:00
cover:
hidden: false
comments: true
---

[项目地址](https://github.com/bigfa/hugo-cf-worker)，已经和点赞评论聚合为一个项目。

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

### 优点

-   不依赖啥框架，原生 js，方便自行维护
-   部署在 cloudflare 上，免费切数据可控

### 缺点

-   暂无管理后台，不方便管理评论
-   非傻瓜式部署

后续准备弄一个后台管理页面直接部署在 cloudflare pages 上。

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

### 前端调用

本人的两款主题天然支持，只需要在在配置文件中开启即可。

```
actionDomain = 'https://v.wpista.com/'
```

`actionDomain` 就是你 Worker 中绑定的域名。

如果其他主题想使用，可复制我主题里的`assets/ts/utils.ts`、`assets/ts/comment.ts`和`layouts/partials/commentlist.html`两三文件到你的主题中。

样式文件为 `assets/scsss/comment.scsss`，在你想使用的文章详情页使用下面的代码调用。

```
{{ partial "commentlist.html" . }}
```

调用方法。

```
new farallonComment({
    actionDomain: "你的域名", // worker 域名
    postSelector: ".post--ingle__comments" // 判断是否为文章详情页
});

```

根据你主题的情况具体适配，`actionDomain` 为必须设置的参数。

最后就是不管是 hugo 还是 wordpress 都强烈建议使用本人全家桶。
