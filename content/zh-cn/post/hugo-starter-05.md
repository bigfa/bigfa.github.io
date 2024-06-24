---
title: "Hugo 简明教程 05"
description:
categories: []
tags: []
date: 2024-06-21T10:11:35+08:00
cover:
hidden: false
comments: true
draft: true
---

本文主要讲解 hugo 目录结构和主题目录结构的基本逻辑。

```
my-theme/
├── archetypes/
├── assets/
├── content/
├── data/
├── i18n/
├── layouts/
├── static/
├── LICENSE
├── README.md
├── hugo.toml
└── theme.toml
```

使用上述的联合文件系统，Hugo 将这些目录中的每一个挂载到项目中对应的位置。当两个文件有相同的路径时，项目目录中的文件将具有优先权。这允许你，例如，通过在项目目录的相同位置放置一个副本来覆盖一个主题的模板。

如果你同时使用来自两个或多个主题或模块的组件，并且出现了路径冲突，那么第一个挂载将具有优先权。

> 当两个或多个文件具有相同的路径时，优先级的顺序遵循挂载的顺序。例如，如果共享的内容目录包含 books/book-1.md，它将被忽略，因为项目的内容目录是首先被挂载的。

hugo.yaml

```
module:
  mounts:
  - source: content
    target: content
  - source: /home/user/shared-content
    target: content
```

Hugo 创建了一个联合文件系统，允许你将两个或者更多的目录挂载到同一个位置。例如，假设你的家目录中包含一个目录里的 Hugo 项目，以及另一个目录里的共享内容：

`layouts/_default` 文件夹

`layouts/patials` 文件夹

`layouts/shortcodes` 文件夹

其他 layouts 下的文件夹均可以理解为和 section 对应，这里又分设置为 taxonomy 和普通 section

taxonomy

1. `list.html` 分类列表
2. `term.html` 文章列表
3. `xxx.html` 文章列表模版 xxx 可定义为 layout

使用

`content/taxonomy/\_index.md`

```
layout: xxx
```

参考我主题里的 tavel 样式

`partilas` 可以理解为可复用的文件

使用`{{ partial "post.html" . }}`来调用

`shortcode` 短代码

static 静态文件

assets 目录包含了通常通过资源管道传输的全局资源。这包括像图片、CSS、Sass、JavaScript 和 TypeScript 这样的资源。查看详情。

static 目录包含了在你构建网站时会被复制到 public 目录的文件。例如：favicon.ico、robots.txt，以及用于验证网站所有权的文件。在页面捆绑和资源管道引入之前，static 目录也被用来存放图片、CSS 和 JavaScript。

i18n

国际化，适合多语言站点

多语言可玩性更高

data

用来存储一些特别的数据，实现效果，不过不是特别复杂我还是推荐使用 markdown 的 front meta 来存储

archetypes 原型
