### 模拟接口

我们将模拟接口的代码都写在`./mock`目录下，接口文件是`./mock/server.js`（目前只有这一个文件，真正开发项目时，应该会分不同模块）。

然后在`./package.json`中增加如下代码，然后执行`npm run mock`即可启动模拟的接口服务。

```
  "scripts": {
    "mock": "node --harmony ./mock/server.js",
  },
```

启动之后，随便找一个 get 的接口，访问以下，例如`http://localhost:3000/api/1`

### 使用 webpack-dev-server 的代理

到这里你可能会有一个疑问————express 接口的端口是`3000`，而我们项目的接口是`8080`，这样不就跨域了吗？————如果默认情况下，肯定是跨域了。此时就需要 webpack-dev-server 做一个代理的转发。配置代码在`./webpack.config.js`中

```js
    devServer: {
        proxy: {
          // 凡是 `/api` 开头的 http 请求，都会被代理到 localhost:3000 上，由 koa 提供 mock 数据。
          // koa 代码在 ./mock 目录中，启动命令为 npm run mock
          '/api': {
            target: 'http://localhost:3000',
            secure: false
          }
        },
        // ...省略若干代码...
    }
```
