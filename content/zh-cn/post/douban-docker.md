---
title: "Docker 自动同步豆瓣书影音记录"
description:
categories: ["hugo"]
tags: []
date: 2024-06-07T20:27:46+08:00
cover:
hidden: false
comments: true
story_id: 103483
---

前阵子写了一个 Cloudflare Worker 版的同步书影音记录，个人觉得对于个人博客来说已经足够了，但可能一些同学介意 Cloudflare 的网络问题，于是我构建了一个 Docker 镜像，适合有国内服务器的同学使用。

首先需要安装 Docker 和 Docker compose，根据你的服务器自行寻找安装方法。

### 构建

创建一个`docker-compose.yml`文件，示例

```
version: '3'
services:
  douban-docker:
    image: fatesinger/douban:latest
    container_name: douban-docker
    volumes:
      - assets:/app/static
    environment:
      MONGO_URI: mongodb://mongo:27017/fatesinger
      DBID: 54529369
      DOMAIN: https://node.wpista.com
    depends_on:
      - mongo
    ports:
      - 8000:3000
    networks:
      - shared-network

  mongo:
    image: mongo:4.4.29
    container_name: mongo
    restart: "always"
    volumes:
      # Persist mongodb data
      - database:/data/db

    ports:
      - "27017:27017"

    networks:
      - shared-network

volumes:
  assets:
    driver: local
    name: assets

  database:
    driver: local
    name: mongodb_data

networks:
  shared-network:
```

#### Nignx 配置

```
server {
  listen 80;
  server_name example.com;

  location / {
    proxy_pass http://127.0.0.1:8000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header REMOTE-HOST $remote_addr;
  }
}
```

#### 运行

```
docker-compose up -d
```

### 不使用 docker 启动服务

根据`.env.example`创建`.env`文件

使用`pm2`

```
git clone git@github.com:bigfa/douban.git
cd douban
npm install
npm run build
npm install pm2 -g
pm2 start dist/index.js --name douban --watch
```

### 自动同步

添加定时任务，每半小时同步一次。

```
*/30 * * * * curl -—silent "http://localhost:8000/api/sync" >/dev/null 2>&1
```

### 配置参数

MONGO_URI

DBID 你的豆瓣 ID

DOMAIN 绑定的域名

API_BASE 接口 base url,建议单独绑定二级域名，如绑定二级目录静态文件需单独处理。

### 本地开发

根据`.env.example`创建`.env`文件

```
npm install
npm run dev
```

**需要本地有 mongodb 服务**

### 接口

对外提供了 3 个接口，标记条目列表、单个条目信息、本地化条目封面。

1. 条目列表`/api/list`，支持两个参数 type 和 paged,type 为条目类型，status 为状态类型，paged 为页码，get 请求。
2. 单个条目为`/api/:type/:id`,`type` 为类型，`id` 为条目 `id`。
3. 本地化封面接口无序主动调用，在调用上面两个接口时会根据具体情况自动调用。
4. 同步接口`/api/sync`，初始化和定时任务使用。

### 前端展示

和以前一样，强烈建议使用本人全家桶，如果想自行调用则可以参考主题目录下 `assets/ts/db.ts` 和样式`assets/scss/modules/_db.scss` 的文件。或者直接用 worker 接口自行开发。

`db.ts` 已经被我封装成一个类，调用方法。

```
new Douban({
    baseAPI: '', // api
    container: ".db--container", // 容器名
});

```

现在`html`只需要如下结构

```
<div class="db--container"></div>
```

我自己测试了一阵子，使用上没啥大问题，比较稳定，偶尔有一直图片下载失败手动调用下接口重新下载即可。
