hi,this is rich, aka bigfa.

## 如何拥有和我一样的博客

执行下面的命令

```
git clone https://github.com/bigfa/bigfa.github.io.git
cd bigfa.github.io
git submodule update --init --recursive
hugo serve -D
```

删除或编辑`content`文件夹替换为你自己的内容即可，也可直接 fork 本项目，可直接部署在自己的 GitHub Pages 上。

## 自定部署相关

配置文件路径`.github/workflows/main.yml`

项目里的自动部署会同时更新主题的仓库，作为个人博客只需要更新本仓库的 gh-pages 即可，`Build notability demo` 和 `Deploy notability Demo` 需要移除，移除后差不多就是下面的代码。

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
              run: hugo --gc --minify --cleanDestinationDir

            - name: Deploy
              uses: peaceiris/actions-gh-pages@v3
              with:
                  personal_token: ${{ secrets.Bigfa }} # personal_token 这里新建一个 https://github.com/settings/tokens
                  PUBLISH_BRANCH: gh-pages # 推送到当前 gh-pages 分支
                  PUBLISH_DIR: ./public # hugo 生成到 public 作为跟目录
                  commit_message: ${{ github.event.head_commit.message }}
```

菜单 setting > security > Actions secrets and variables

创建仓库密钥，也就是上面的`personal_token`，命名无所谓，只要和配置文件里一致就行了，`token` 创建地址,然后就可以了。
