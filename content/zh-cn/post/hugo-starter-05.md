---
title: "Hugo 简明教程 05"
description:
categories: ["hugo"]
tags: []
date: 2024-06-27T10:11:35+08:00
cover:
hidden: false
comments: true
---

本文主要讲解 hugo 目录结构和主题目录结构的基本逻辑。Hugo 中有一些概念如 UnionFS,Hugo pipes 对普通用户来说很难理解，我这里尽量用白话来解释，可能不是很准确，但能让你大致理解 hugo 的文件逻辑。

### 联合文件系统

首先要理解一个概念就是 Union file system（联合文件系统），简单来说就是可以多个目录挂载到同一个位置。当两个或多个文件具有相同路径的时候，优先级的顺序遵循挂载的顺序。比如可以将任意目录挂载到`content`文件夹下。
配置文件如下`hugo.yaml`，**用白话来讲就是合并多个文件夹，路径相同的时候前面的优先**。

```
module:
  mounts:
  - source: content
    target: content
  - source: /home/rich/shared-content
    target: content
```

这样`/home/rich/shared-content` 下的 markdown 文件也会被视为`content`下的内容，一般情况下普通用户不会这么操作。**但是我们修改主题的时候，可以通过在项目目录的相同位置放置一个副本来覆盖主题的模板**。这也是我推荐的修改主题的方法，可以做到不污染原主题文件，以免更新主题的时候修改的部分被覆盖。

### 主题目录

下面介绍一下 hugo 主题的目录结构，使用 `hugo new theme` 命令创建的初始目录如下。

```
farallon/
├── archetypes/
├── assets/
├── data/
├── i18n/
├── layouts/
├── static/
├── LICENSE
├── README.md
├── hugo.toml
└── theme.toml
```

#### archetypes

原型文件，前面的文章已经讲过。

#### assets 和 static

`static` 目录下的文件在构建后会被原样复制到`public` 文件夹下，`assets`则可以用来存放一些编译前的文件如 `scss`、`typescript` 等，`assets` 文件夹下的文件可以使用`resources.Get` 来调用。

#### data

用来存储一些特别的数据，实现效果，不过不是特别复杂我还是推荐使用 `markdown` 的 `front meta` 来存储。

#### i18n

国际化也就是翻译文件，适合多语言站点。

#### layouts

这个就是主题的模版文件了，除了`layouts/_default`、`layouts/patials`、`layouts/shortcodes` 这三个文件夹，其他 `layouts` 下的文件夹均可以理解为和 `section` 对应，这里又分设置为 `taxonomy` 和普通 `section`。

**taxonomy**

1. `list.html` 分类列表
2. `term.html` 文章列表
3. `xxx.html` 文章列表模版 xxx 可定义为 layout

模版样式使用方法，`content/taxonomy/\_index.md`。

```
layout: xxx
```

具体可以参考我主题里的 `travel` 分类样式。

**普通 section**

1. `list.html` 列表
2. `single.html` 详情页
3. `xxx.html` 自定义详情页 xxx 可定义为 layout

模版样式使用方法，`content/page/movie.md`。

```
layout: xxx
```

具体可以参考我主题里的自定义页面样式。

`partilas` 下的文件可以理解为可复用的文件，可以使用`{{ partial "post.html" . }}`来调用。

`shortcode` 则为一些自定义短代码。

一些自定义短代码文件。

#### \_default

此文件夹是优先级最低的，只有没有任何匹配才会使用此文件夹下的文件。

1. `baseof.html` 基础框架
2. `list.html` 文章列表
3. `single.html` 文章详情页
4. `_markup` 文件夹则可以对 hugo 默认渲染逻辑进行修改，`render-link.html` 可对超链接进行修改，我的主题也是通过此文件实现了豆瓣条目的`embed`功能。

还有一些其他文件如首页`index.html` 404 页面`404.html`就非常好理解了，不单独介绍了。
