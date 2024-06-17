---
title: "Hugo 简明教程 03"
description:
categories: ["hugo"]
tags: []
date: 2024-05-29T17:04:24+08:00
cover:
hidden: false
comments: true
---

本文主要介绍原型（archetypes）和 markdown 文件的使用方法。

本系列文章均可参考我的 hugo [博客项目](https://github.com/bigfa/bigfa.github.io)，具体内容在里面均有体现。

### archetype 原型

`archetype` 可以理解为模版，当使用 `hugo new content` 命令创建新文件的时候会根据一定的规则选择对应的模版，相当于文章的默认设置。默认是主题目录下下的`archetypes/default.md`，当然你的站点目录可能也有一个`archetypes`目录，这里面的模版的优先级是大于主题目录下的`archetypes`。

你可以为一个或多个内容类型创建一个原型（archetype）。如下，当创建 `posts`类型的时候会使用 `posts.md`，其他类型则会使用默认设置。

```
hugo new content posts/my-first-post.md
```

文件结构

```
archetypes/
├── default.md
└── posts.md
```

当你站点内容较为复杂的时候合理使用原型会更方便，如果只有一个文章类型，那么直接复制已有的 `markdown` 文件也足够了。

#### 原型文件查找顺序

根目录下的原型优先级是最高的，爱折腾的同学可能有非常多的自定义设置，合理使用原型初始化更加方便。

1. archetypes/posts.md
2. archetypes/default.md
3. themes/my-theme/archetypes/posts.md
4. themes/my-theme/archetypes/default.md

原型中也有一些简单的表达式可以使用，如`.Date`，但是这个值是文件发创建时间，不等于文章发布时间，目前还没办法自动修改这个时间为发布时间。

### Markdown 文件

Hugo 以及绝大多数静态网页生成器都是 `markdown` 转 `html`，在文件数量不多的情况下各种程序没有任何区别，因为最后都是转为`html`文件。在文件多的时候不同程序可能构建速度不太一样，这里推荐大家单独管理图片文件，这样能大大提升构建速度。大量图片同时也意味着上传时间大大增加，所以不推荐直接把图片放在项目目录下。

Hugo 中 `markdwon` 文件简单来说可以分为两个部分，一部分是元数据，另一部分则为正文内容。位于每个内容文件顶部的前言部分是元数据，简单来讲可以理解为 wordpress 中的`wp_postmeta`，你可以在 `params` 参数中自定义各种类型的数据，然后在循环中通过`.Params`来调用。

除了`params`，hugo 内置了一些功能性的字段，下面是一个简单的例子。

```
---
date: 2024-02-02T04:14:54-08:00
draft: false
params:
  author: John Smith
title: Example
weight: 10
layout: page
categories: ["gears"]
tags: ["fujifilm"]
---
```

标题、分类、标签、发布时间等比较好理解，下面单独介绍一下功能性参数。

#### layout

提供一个模板名称来指定一个特定的模板，覆盖默认的模板查找顺序。将值设置为模板的基础文件名，不包括其扩展名。

#### menus

如果设置了该值，Hugo 将页面添加到指定的菜单或多个菜单中，不需要在配置文件中的菜单设置中额外添加。

#### params

自定义参数，支持多个，值可以为数组，我站内的`goods`，`friends` 页面都是通过这里存储数据，强烈推荐使用本法而不是 `json` 文件存储数据。

#### slug

如果站点 url 配置中设置了读取 slug 规则，则会调用该值，注意如果你没有设置 slug 参数，那么 hugo url 规则配置中不要使用`:slug`，否则会造成 url 错误。

#### url

直接忽略站点配置规则，页面 url 将会直接使用这个值，适合重新自定义归档页的 url。

#### draft

草稿，直接开发模式才会渲染。

#### weight

权重，可以用来设置置顶文章。

#### kind

可以指定`section`，一般没必要使用。除非你所有文件都在同一目录下。

#### Cascade

这个字段还是比较难理解的，我研究了一下，用白话讲就是可以给子文章设置 params 默认值，当子文章没有设置的时候就会调用改值，**实际测试发现用这个字段设置的默认值只能在详情页使用，循环中是无法调用的**。

举例：`content/posts/_index.md`

```
---
cascade:
  params:
    cover: images/richisgood.jpg
date: 2024-02-01T21:25:36-08:00
title: Posts
---
```

当在详情页中调用`.Params.banner`，则会返回 `images/richisgood.jpg`，以下情况则不会返回。

-   markdown 文件本身设置了 banner 参数
-   更近的节点设置了 cascade.banner

还有注意的是当 cover 是空的时候仍然不会返回默认值，只有将 cover 字段删掉才会返回默认值。

### \_index.md 文件

`_index.md` 是非常有用的一个文件，此文件可以理解为动态 CMS 里数据库的一行内容，可以保存很多信息来自定义条目。比如分类`categories/zine/_index.md` 可以理解为数据库中`zine`分类的一行。在主题`layout/categories/term.html` 这个文件中读取`_index.md` 储存的自定义信息。比如可通过 `layout` 字段为不同分类设置不同样式的模版。

`categories/_index.md` 则可自定义分类归档页的信息如标题副标题等，结合上一篇教程，我们可以为每个`section` 创建一个`_index.md`，官方也是这样推荐的。

对于普通成品主题使用者，不太需要考虑和主题文件对应的问题，只需要作为保存自定义信息即可，比如为中文分类名自定义英文 url slug。高端用法如`layout`和`params` 需要你熟悉 Hugo 主题文件的调用逻辑。
