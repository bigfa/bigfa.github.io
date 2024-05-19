---
title: "Douban Cloudflare Worker"
description:
categories: ["zine"]
tags: ["mini"]
date: 2024-05-15T17:41:48+08:00
cover:
hidden: false
comments: true
---

之前我自己用 nodejs + mysql 写了一个同步豆瓣书影音的服务，但只在一个很隐蔽的地方公开了，主要是流量和数据库压力太大，提供公共服务成本实在是太高，最近在研究 Cloudflare Worker，试着把服务迁移过去，过程中发现几个问题。

-   D1 单次请求操作次数是有限制的，最多一千次，读写都算。
-   Worker 子请求数最多就是 50 次，下载图片是占用这个次数的，初始化的时候如果下载图片基本都会超限失败。
-   Worker 直接读取 R2 输出图片的话速度很慢。

不过多次测试之后还是找到了使用方法，虽然免费版有各种限制，但限制的都是单次请求，初始化的时候数据比较多，只需要在本地分页之后调用初始化接口就行了，后续使用定时任务同步不会因为请求过多而超限，除非在短时间内标记了大量内容。

电影

https://movie.douban.com/subject/26434828/

音乐

https://music.douban.com/subject/36766055/

图书

https://book.douban.com/subject/36593622/
