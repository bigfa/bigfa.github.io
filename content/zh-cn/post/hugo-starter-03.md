---
title: "Hugo 简明教程 03"
description:
categories: ["hugo"]
tags: []
date: 2024-05-29T17:04:24+08:00
cover:
hidden: false
comments: true
draft: true
---

本文主要介绍原型（archetypes）和 markdown meta 的使用方法。

`archetype` 可以理解为模版，当使用 `hugo new content` 命令创建新文件的时候会根据一定的规则选择对应的模版，相当于文章的默认设置。默认是主题目录下下的`archetypes/default.md`，当然你的站点目录可能也有一个`archetypes`目录，这里面的模版的优先级是大于主题目录下的`archetypes`。

您可以为一个或多个内容类型创建一个原型（archetype）。例如，使用一个原型（archetype）来创建帖子，并对其他所有内容使用默认原型。

```
archetypes/
├── default.md
└── posts.md
```

Hugo 会在您项目根目录下的 archetypes 目录中查找原型文件，如果没有找到，则回退到主题或已安装模块中的 archetypes 目录。特定内容类型的原型将优先于默认原型。

```
hugo new content posts/my-first-post.md
```

The archetype lookup order is:

1. archetypes/posts.md
2. archetypes/default.md
3. themes/my-theme/archetypes/posts.md
4. themes/my-theme/archetypes/default.md

If none of these exists, Hugo uses a built-in default archetype.

Date

虽然通常用作前 matter 模板，但您也可以使用原型来填充内容。

例如，在文档站点中，您可能有一个用于函数的部分（内容类型）。这个部分中的每个页面都应该遵循相同的格式：简短说明、函数签名、示例和注释。我们可以预先填充页面，以提醒内容作者遵循标准格式。

```
hugo new content --kind tutorials articles/something.md
```

位于每个内容文件顶部的前言部分是元数据，它：

-   描述内容
-   增强内容
-   与其他内容建立关系
-   控制网站的发布结构
-   决定模板的选择

```
---
date: 2024-02-02T04:14:54-08:00
draft: false
params:
  author: John Smith
title: Example
weight: 10
---
```

layout

(字符串) 提供一个模板名称来指定一个特定的模板，这将覆盖默认的模板查找顺序。将值设置为模板的基础文件名，不包括其扩展名。在模板中使用页面对象上的 Layout 方法来获取这个值。

menus

(字符串、字符串数组或映射) 如果设置了该值，Hugo 将页面添加到指定的菜单或多个菜单中。详情请见菜单页面说明。

params

slug

type

url

Cascade

cascade 块可以是一个数组，可选地包含一个\_target 关键字，这样你就可以在级联值时针对不同的页面集进行定位。

```
---
cascade:
- _target:
    kind: page
    lang: en
    path: /articles/**
  params:
    background: yosemite.jpg
- _target:
    kind: section
  params:
    background: goldenbridge.jpg
title: Home
---
```
