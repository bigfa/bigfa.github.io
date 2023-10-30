---
title: "Hugo 主题 Farallon"
description:
categories: ["zine"]
tags: ["hugo"]
date: 2023-10-30T21:07:22+08:00
image:
hidden: false
comments: true
---

![Hugo 主题 Farallon](https://static.fatesinger.com/2023/06/u1ak8xgmyn9ec24r.png)

本主题使用古法制作，不依赖三方框架。

Hugo 当前版本 `0.2.6`，最后更新日期 `2023/10/30`

## 使用指南

### 卡片分类页面使用方法

在`content`目录下新建你想要使用模版的页面，比如你的分类是`travel`，则新建`categories/travel/_index.md`,然后编辑文件，设置`layout`为`travel` 即可

```
---
title: "旅行"
description: "旅行体验"
layout: travel
---
```

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

## 更新日志

### 0.2.7

-   整理分类页面

### 0.2.6

-   文章目录样式更新

### 0.2.5

-   有序列表样式修正

### 0.2.4

-   增加了一个卡片页面

### 0.2.3

-   增加了返回顶部按钮

### 0.2.2

-   增加 TOC 支持

### 0.2.1

-   修复 scss 低版本兼容性问题

### 0.2.0

-   增加暗黑模式支持
-   修复移动端 footer 样式问题

### 0.1.0

-   添加主题信息

### 0.0.8

-   修复 safari 浏览器下时间格式化错误的问题

### 0.0.7

-   修改为本地获取条目，无需设置 token

### 0.0.6

-   新增豆瓣条目支持

### 0.0.5

-   修复分类页/标签页样式错误

### 0.0.4

-   增加相对时间
-   加入示例数据

### 0.0.3

-   使用`normalize.css`

### 0.0.2

-   增加菜单设置
-   增加一个是否显示站长信息的参数

### 0.0.1

初始化
