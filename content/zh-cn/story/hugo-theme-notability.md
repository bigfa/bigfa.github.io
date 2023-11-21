---
title: "Hugo 主题 Notability"
description: "Hugo 主题 Notability"
categories: ["zine"]
tags: ["hugo"]
date: 2023-10-30T22:27:17+08:00
cover: "https://static.fatesinger.com/2023/09/czukqwphyybsxjhx.jpg"
hidden: false
comments: true
story_id: 74850
---

抽时间复活了一下这个远古主题，十分简洁。

最新版本`0.3.0`，最后更新时间`2023/11/20`.

![首页截图](//static.fatesinger.com/2023/09/czukqwphyybsxjhx.jpg)

![文章页截图](//static.fatesinger.com/2023/09/qxp926wvd8nve195.jpg)

> 本主题使用古法制作，不依赖三方框架。

[演示地址](https://bigfa.github.io/hugo-theme-notability/)

[项目地址](https://github.com/bigfa/hugo-theme-notability)

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

### 状态文章格式

`content` 目录下创建一个`memo`文件夹，里面就是正常的文章 md 文件

```
hugo new content memo/1.md
```

站点参数配置

```
[Params]
  mainSections = ['story','memo']
```

如果你想用其他别名也可以，`memo`换为你想用的就可以了。

### 作者信息

站点配置参数

```
[Params]
  showAuthor = true
  authorName = 'bigfa'
  authorDescription = 'computer loser'
  authorAvatar = 'https://secure.gravatar.com/avatar/2fd7e2e17a671f8e3fade0706e0a667e?s=128&d=mm&r=g'
```

### 内链卡片

短代码

```
~{~{<link "garden-pavilion">~}~}
```

自行取掉多余字符

{{<link "garden-pavilion">}}

## 国内用户特别设置

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
