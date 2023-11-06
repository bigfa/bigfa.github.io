---
title: "Hugo 主题 Farallon"
description:
categories: ["zine"]
tags: ["hugo"]
date: 2023-10-30T21:07:22+08:00
image:
hidden: false
comments: true
weight: 1
---

![Hugo 主题 Farallon](https://static.fatesinger.com/2023/06/u1ak8xgmyn9ec24r.png)

> 本主题使用古法制作，不依赖三方框架。

Hugo 当前版本 `0.2.6`，最后更新日期 `2023/10/30`

[演示地址](https://bigfa.github.io/hugo-theme-farallon/)

## 使用指南

### 站点参数设置

以下参数都在`[Params]`下

#### description

-   类型: 字符串

站点描述

#### mainSections

-   类型：数组
-   默认值：`['story']`

### 多语言设置

设置配置文件中`DefaultContentLanguage`参数来选择语音，默认是`en`，翻译文件在`i18n` 目录下，支持以下类型，

-   `en` 英文
-   `zh-cn` 简体中文

例如想试用简体中文，则设置`DefaultContentLanguage`为`zh-cn`

### 卡片分类页面使用方法

在`content`目录下新建你想要使用模版的页面，比如你的分类是`travel`，则新建`categories/travel/_index.md`,然后编辑文件，设置`layout`为`travel` 即可

```
---
title: "旅行"
description: "旅行体验"
layout: travel
---
```

## 国内用户特别设置

注意`travel` 是分类 slug，在重新设置 title 就可以外显单独的分类名了。

### 物品列表使用方法

在`content`目录下新建`gears/_index.md`，按照下面的格式设置`faves`字段即可

```
---
title: "Gears"
subtitle: "my fuji gears"
date: 2021-03-06T15:39:00-06:00
draft: false
faves:
    [
        {
            "title": "instax mini 40™",
            "cover": "https://static.fatesinger.com/2023/05/3fmdvfzy5kwu320q.png",
            "cat": "Gear",
            "brand": "FujiFilm",
        },
        {
            "title": "Sofort",
            "cover": "https://static.fatesinger.com/2023/10/tlp9i57mnbamhapp.png",
            "cat": "Gear",
            "brand": "Leica",
        },
        {
            "title": "X100V",
            "cover": "https://static.fatesinger.com/2022/04/4pc5qctiddj2uy6g.png",
            "cat": "Gear",
            "brand": "FujiFilm",
        },
    ]
---

my gear

```

相当于把数据存在了 post meta 中，这样使用 markdown 来维护很方便。

### 豆瓣收藏使用方法

微信扫码登录https://node.wpista.com/

输入你的豆瓣数字 id，点击保存即可自动同步豆瓣记录。

点击 Get integration token 会生成一个 token。

新建文件`movies/_index.md`，下面的 token 设置为你的 token，本 token 只作为拉取列表使用，并无其他用途。

```
---
title: "书影音游"
description: "hi"
token: "2bfb9a8d037a7352c9d369b85d33ac83e39a"
---

```

### 豆瓣条目

直接插入链接单独一行即可

`https://movie.douban.com/subject/35451890/`

https://movie.douban.com/subject/35451890/
