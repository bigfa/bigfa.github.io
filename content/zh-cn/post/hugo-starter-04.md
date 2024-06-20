---
title: "Hugo 简明教程 04"
description: "本文主要讲解 hugo 的部署方法。"
categories: ["hugo"]
tags: []
date: 2024-05-29T17:05:06+08:00
cover:
hidden: false
comments: true
---

本文主要讲解 hugo 的部署方法。

### build 命令

除了基础的 `hugo build` 其实 `build`命令支持不少参数，下面介绍一下比较有用的参数。

```
  -b, --baseURL string             绑定域名, 比如 https://fatesinger.com/
  -D, --buildDrafts                包含草稿
  -E, --buildExpired               包含过期内容
  -F, --buildFuture                包含日期在将来的内容
  -c, --contentDir string          content 目录，一班不需要改
      --disableKinds strings       禁用页面类型，同时生成多个站点时有用
      --gc                         构建完成后移除部分缓存
      --ignoreCache                忽略缓存
      --minify                     压缩html
  -t, --theme strings              要使用的主题，同时生成多个站点时有用
```

一般来说，默认 `hugo build` 就可以了，像我这种多平台多域名多主题部署这些参数才有意义。

### 手动部署

绝大部分人都推荐的方法是通过 github actions 自动部署，我个人觉的手动部署也很方便。自动部署也只不过在云端进行手动部署的步骤而已。简单来说 hugo 部署就两步

1. 使用 `hugo build` 命令生成 `html` 文件
2. 将生成的文件上传到托管平台或者服务器

执行完构建命令后你可以把生成的 html 文件上传到任何你喜欢的平台。如果你没有特别的需求甚至也不需要用 git 来原理仓库，毕竟对于普通用户来说，各种命令难以理解。

本地手动部署还有一个优点就是构建速度很快，一般 PC 的配置还是要比服务器的配置强一点，尤其 Mac 的 ssd，构建速度很快。手动上传也可以克服各种网络困难。如果你上传到自己的服务器，那么你还需要部署一个简单的 `nginx` 服务，因为是纯静态，所以只需要傻瓜配置。

### 自动部署

通过 github actions，联动各个平台进行自动部署，想自动部署都需要使用 git 仓库，需要学习一些基础的 git 命令，或者使用可视化工具，如果你不想学习命令，我推荐使用 github 官方的客户端。

自动部署的原理都是在云端执行 build 命令，然后通过密钥上传到平台。也可以在平台直接绑定 github 仓库，这样更懒人，但需要自己配置一下构建命令，还是那句话，普通用户直接默认配置足够。

#### Github pages

如果域名都懒得买，我最推荐这个托管平台，直接给你一个`*.github.io`的域名，虽然百度不收录，但也无所谓了。当然，github pages 是支持绑定域名的，但既然是有域名，我更推荐使用下面的 Cloudflare pages，网络上会更顺畅一些。

下面是自动部署 github pages 的 action 配置 `.github/workflows/main.yml`，在`.github/workflows/`下的 yml 就是 github actions 的配置文件

```
name: Bigfa

on:
    push:
        branches:
            - main # master 更新触发

jobs:
    build-deploy:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v3
              with:
                  submodules: recursive
                  fetch-depth: 0

            - name: Setup Hugo
              uses: peaceiris/actions-hugo@v2
              with:
                  hugo-version: latest
                  extended: true

            - name: Build
              run: hugo --gc --minify --cleanDestinationDir --ignoreCache

            - name: Deploy
              uses: peaceiris/actions-gh-pages@v3
              with:
                  personal_token: ${{ secrets.Bigfa }} # personal_token 这里新建一个 https://github.com/settings/tokens
                  PUBLISH_BRANCH: gh-pages # 推送到当前 gh-pages 分支
                  PUBLISH_DIR: ./public # hugo 生成到 public 作为跟目录
                  commit_message: ${{ github.event.head_commit.message }}
```

#### Cloudflare pages

有域名最推荐，推荐使用全家桶，下面是自动上传到 cloudflare pages 的配置文件`.github/workflows/main.yml`

```
name: Bigfa

on:
    push:
        branches:
            - main # master 更新触发

jobs:
    build-deploy:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v3
              with:
                  submodules: recursive
                  fetch-depth: 0

            - name: Setup Hugo
              uses: peaceiris/actions-hugo@v2
              with:
                  hugo-version: latest
                  extended: true

            - name: Build notability demo
              run: hugo --gc --minify --ignoreCache --cleanDestinationDir -b https://cl.wpista.com/

            - name: Publish to Cloudflare Pages
              uses: cloudflare/pages-action@v1
              with:
                  apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
                  accountId: d0a457cef81f6ea340f9ff6ca6b6ff7a
                  projectName: notability
                  directory: ./public
                  wranglerVersion: "3"
```

#### Vercel

Vercel 很棒，但还是和 `next.js` 是绝配。[我的 vercel 版本](https://vercel.wpista.com/)，默认情况下国内访问速度一般，但能对付用。

Vercel 和前两个平台不同，vercel 默认是需要绑定 git 仓库，但是也仍然可以通过 github actions 进行更新。

默认情况下，vercel 绑定你的 github 仓库，选择 hugo 平台，然后默认输出即可。默认情况下 vercel 的 hugo 版本很低，推荐手动指定版本。项目根目录下创建文件 `vercel.json`

```
{
  "build": {
    "env": {
      "HUGO_VERSION": "0.125.4"
    }
  }
}
```

设置环境变量

```
Vercel -> Project-> Settings -> Environment Variables
————
HUGO_VERSION 0.125.4
```

![](//static.fatesinger.com/2024/06/4e1sq5sowwvykc0y.png)

这里建议重新设置下 build command,如果你的配置文件中已经配置绑定域名，则可忽略`-b` 参数。

```
hugo --gc --minify -b https://vercel.wpista.com/
```

#### 阿里云 oss

有备案域名的话非常推荐，国内速度可以说是相当快了，不过也有缺点，就是需要计费。如使用阿里云 oss 则可以把图片一起放在项目目录下。

```
name: Bigfa

on:
    push:
        branches:
            - main # master 更新触发

jobs:
    build-deploy:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v3
              with:
                  submodules: recursive
                  fetch-depth: 0

            - name: Setup Hugo
              uses: peaceiris/actions-hugo@v2
              with:
                  hugo-version: latest
                  extended: true

            - name: Build notability demo
              run: hugo --gc --minify --ignoreCache --cleanDestinationDir -b https://cl.wpista.com/

            - name: upload files to OSS
              uses: fangbinwei/aliyun-oss-website-action@v1
              with:
                  accessKeyId: ${{ secrets.ACCESS_KEY_ID }}
                  accessKeySecret: ${{ secrets.ACCESS_KEY_SECRET }}
                  bucket: your-bucket-name
                  # use your own endpoint
                  endpoint: oss-cn-shanghai.aliyuncs.com
                  folder: ./public
```

### 总结

整套流程看上去比较复杂，其实只需要修改下变量即可，即使不理解也能正常使用，当项目有更新的时候即使 `commit` 和 `push` 即可。想深度自定义的话还是需要了解一下 git 的基本原理，github actions 本身还是非常强大的，而 cloudflare 全家桶更是良心的不行。把动态网站那一套移植过来完全不成问题，具体玩法可以参考我站内的其他文章。
