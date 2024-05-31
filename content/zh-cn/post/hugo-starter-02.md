---
title: "Hugo 简明教程 02"
description:
categories: ["hugo"]
tags: []
date: 2024-05-29T17:02:35+08:00
cover:
hidden: false
comments: true
draft: true
---

经过上篇文章的学习，相信你已经成功生产你的博客了。

本文主要详细讲解 hugo 配置文件的使用，我经过了很长时间的研究，阅读了整个文档，呕心沥血也不为过了。

-   home The landing page for the home page
-   page The landing page for a given page
-   section The landing page of a given section
-   taxonomy The landing page for a taxonomy tags taxonomy (/tags/index.html)
-   term The landing page for one taxonomy’s term term awesome in tags taxonomy (/tags/awesome/index.html)

> Note that there are also RSS, sitemap, robotsTXT, and 404 page kinds, but these are only available during the rendering of each of these respective page’s kind and therefore not available in any of the Pages collections.

```
disableKinds = ['robotsTXT', '404']

```

```
{{ .Site.GetPage "section" "posts" }}
{{ .Site.GetPage "page" "search" }}
```

### branch bundle

A directory that contains an \_index.md file and zero or more resources. Analogous to a physical branch, a branch bundle may have descendants including leaf bundles and other branch bundles. Top level directories with or without \_index.md files are also branch bundles. This includes the home page. See details.

### page bundle

A directory that encapsulates both content and associated resources. There are two types of page bundles: leaf bundles and branch bundles. See details.

```
{{ range first 10 .Site.RegularPages }}
        {{ .Render "summary" }}
      {{ end }}
```
