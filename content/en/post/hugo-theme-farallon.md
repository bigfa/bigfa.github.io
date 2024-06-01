---
title: "Hugo Theme Farallon"
description:
categories: ["hugo"]
tags: ["hugo"]
date: 2023-10-30T21:07:22+08:00
image:
hidden: false
comments: true
weight: 1
---

![Hugo Theme Farallon](https://static.fatesinger.com/2023/06/u1ak8xgmyn9ec24r.png)

> This theme is created using ancient methods and does not rely on third-party frameworks.

Current version `0.2.6`，last update `2023/10/30`

[Demo](https://bigfa.github.io/hugo-theme-farallon/)

[Github](https://github.com/bigfa/hugo-theme-farallon)

## User Guide

### Site-wide settings

Fields under `[Params]`

#### description

-   Type: string

Site description.

#### mainSections

-   Type:`[string]`
-   Default:`['story']`

Pages places under this/those sections will be shown on homepage and archive page.

### i18n

In order to use a language, set `DefaultContentLanguage` to the language code in the configuration file.

-   `en` English
-   `zh-cn`Chinese (Simplified)

For example, if you want to use English, set `DefaultContentLanguage` to en.

### Post Structure Format

Create a `memo` folder inside the `content` directory, where the normal Markdown (.md) article files will be placed:

```
hugo new content/memo/1.md
```

Site Parameters Configuration

```
[Params]
  mainSections = ['story','memo']
```

If you want to use a different alias, you can do so by replacing `memo` with the alias of your choice.

### Card list category archive template

To use a template for your desired page, such as for the `travel` category, follow these steps:

1. Navigate to the `content` directory in your file system.
2. Create a new file called `_index.md `within the `categories/travel` directory. This file will represent the main page for the `travel` category.
3. Open the `_index.md` file and add the following content:

```
---
title: Travel
layout: travel
---
```

Save the file, and you’re done. The template named `travel` will be used to render the `travel` category page.

Make sure you have the necessary templates and configurations in place to support the `travel` layout.

Please note that `travel` is the category slug. To display a separate category name, you can customize the title in the front matter of the `_index.md` file.

## Setting for China mainland

### Goods list template

To set the `faves` field in the `_index.md` file under the `gears` directory in the `content` directory, follow the format below:

1. Create a new file called \_index.md within the `gears` directory.
2. Open the `_index.md` file and add the following content:

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

Indeed, storing the data in the post’s front matter (metadata) is a convenient and efficient way to manage content using Markdown.

### Douban faves

Scan qrcode loginhttps://node.wpista.com/

input you douban id, click save.

Click `Get integration token` will generate a token.

New content `movies/_index.md`, replace the token with yours

```
---
title: "Movies"
description: "hi"
token: "2bfb9a8d037a7352c9d369b85d33ac83e39a"
---

```

### Douban Subject

Insert subject url with a single line.

`https://movie.douban.com/subject/35451890/`

https://movie.douban.com/subject/35451890/
