---
title: "Hugo 简明教程 02"
description: "本文主要介绍 Hugo 内容文件管理和页面 URL 设置"
categories: ["hugo"]
tags: []
date: 2024-05-29T17:02:35+08:00
cover:
hidden: false
comments: true
---

本文主要介绍 Hugo 内容文件管理和页面 URL 设置，建议搭配我的[GitHub Pages](https://github.com/bigfa/bigfa.github.io)项目使用。

### 页面类型

Hugo 的页面类型主要有以下几个，还有一些特殊的功能性页面如 rss 这里就不做讨论了。

-   home 首页
-   page 可以理解为文章详情页和一些指定页面如关于和固定连接
-   section 可以理解为一类文章的归档的页面
-   taxonomy 可以理解为分类、标签的归档页，就是列出所有分类、标签的聚合页面。
-   term 分类、标签等文章列表页，列出属于某个分类、标签下文章列表的页面

> RSS、网站地图、robotsTXT 和 404 页面类型，但这些只在渲染各自页面类型时可用，因此在任何页面集合中都不可用。

### 内容管理

众所周知，hugo 的 markdown 文件都在 content 目录下，也就是存放文章的地方，hugo 的作用就是把这些 `markdown` 文件转换为 `html`。默认情况下`content`文件夹下的所有 `markdown` 文件都会被认为是常规内容页面（RegularPages）。

当然，我们在实际使用过程中，可能会新建一个 posts 文件夹，或者按日期创建文件夹来管理文件，这个时候就要理解 `section` 这个概念，简单来说就是一个文章类型，如果常规文章 `post` 和状态内容 `status`。在 Hugo 中，顶级目录（content 文件夹下的一级目录）或者是带有 `_index.md` 文件的任何内容目录都会被认为是`section`。这里推荐为所有 section 都创建`_index.md` 文件。

不过也不是所有的顶级目录都会被视为 section，当在配置中被指定为`taxonomies` 时，就不会被认为是 `section` 了，如下配置中，此时顶级目录`categories`和`tags`不会被认为是 `section`。

```
[taxonomies]
  category = 'categories'
  tag = 'tags'
```

我推荐为每个分类都创建一个 markdown 文件，因为 markdown 文件可以存储一些元信息，所以我们可以通过这些文件来个分类设置封面、描述等信息，**甚至可以设置单独的模版**。

一般来说，传统的个人博客至少都会有文章和页面两个类型，我推荐大家遵循 hugo 的设计原理来管理文件，这样方便迭代。当然，你不遵循这个也可以实现各种各样的页面，这也没什么问题，我刚使用的时候会把一个文章类型的归档页作为普通页面来使用，编译过后也不会有任何区别。

但是合理的目录结构有助于灵活的获取内容，特别是当你想展示或不展示内容的时候，合理的结构会非常方便。如只在首页展示某一类型的文章。

```
{{ .Site.GetPage "section" "posts" }}
```

根据我的经验，一些主题会在首页获取指定`section`，如果没有良好的目录结构，部分主题你可能没法使用。

### URL 设置

默认情况下，页面的 URL 就是你的目录结构，但是 hugo 提供了一些配置选项，可以让 URL 不遵循目录结构，所以你可以大胆按照你的喜好来设置内容目录，然后通过配置文件来管理 URL。这里解释一下我提供的默认配置。

```
[permalinks]
  [permalinks.section]
    post = '/archive'
  [permalinks.page]
    post = '/story/:slugorfilename/'
    page = '/:slugorfilename/'
  [permalinks.term]
    tags = '/tag/:slug/'
    categories = '/category/:slug/'
  [permalinks.taxonomy]
    tags = '/topics/'
    categories = '/cats/'
```

这个配置结合文章开头的页面类型来看，就很容易理解了。

带`:`的为 hugo 的常量，全部常量大家可以在官方文档中找到，但常用的应该就是`:section`，`:title`，`:slug`，`:filename`，`:slugorfilename`，这里我推荐大家使用`:slugorfilename`，意思是如果文章单独设置了 `slug` 属性则使用 `slug`，否则使用文件名。如果你在文章中直接设置`url`属性，那么将直接使用`url`属性，这个优先级是最高的。

要注意 term 的设置中谨慎使用 `filename`，如果使用了 `filename` 一定要创建对应的 `markdown` 文件。

Hugo 设置可以为多语言设置不同的 URL 结构，我相信绝大多数人都用不到，这里就不展开说了。
