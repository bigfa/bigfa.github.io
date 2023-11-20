hi,this is rich, aka bigfa.

## How to Have a Blog Like Mine

Execute the following commands:

```
git clone https://github.com/bigfa/bigfa.github.io.git
cd bigfa.github.io
git submodule update --init --recursive
hugo serve -D
```

Delete or edit the `content` folder to replace it with your own content. You can also directly fork this project and deploy it on your own GitHub Pages.

## Custom Deployment Related

Configuration file path: `.github/workflows/main.yml`

The project’s automated deployment will update the theme's repository as well. For a personal blog, you only need to update the gh-pages branch of this repository. The `Build notability demo` and `Deploy notability Demo` steps should be removed. After removing them, the code will roughly look like this:

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

Setting > security > Actions secrets and variables

Create a repository secret, which is the `personal_token` mentioned above. The name doesn't matter, as long as it's consistent with the one in the configuration file. The `token` creation address, and then you're all set.
