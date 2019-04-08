# ddp_ui

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
```
Direction
·
|-- build
    server.js               # start a nodejs server 
    vue-loader.conf.js      # vue配置
    webpack.base.conf.js    # 基础配置默认包含react配置
    webpack.dev.conf.js	    # 开发环境下使用
    webpack.prod.conf.js    # 正式环境下使用
|-- src
    |-- components  # Store the directory of the project components
    |-- data        # website resource files eg. mp3 file or and so on
    |-- core        # use flux to get or set data flow
    |-- view
        |-- page    # website page components
        |-- router      # routers
    |-- static      # src resource files that need to package
    App.vue         # app entryn file

package.json     # package manage
.editorconfig    # 开发工具统一管理器
.gitignore       # git 忽略的文件配置
.postcssrc.js    # 通过JS插件来转换CSS
```
See [vue-and-react-template](https://github.com/xulayen/vue-and-react-template)