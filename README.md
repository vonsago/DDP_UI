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

Direction<br>
·<br>
|-- build<br>
    server.js               # start a nodejs server <br>
    vue-loader.conf.js      # vue配置<br>
    webpack.base.conf.js    # 基础配置默认包含react配置<br>
    webpack.dev.conf.js	    # 开发环境下使用<br>
    webpack.prod.conf.js    # 正式环境下使用<br>
|-- src<br>
    |-- components  # Store the directory of the project components<br>
    |-- data        # website resource files eg. mp3 file or and so on<br>
    |-- flux        # use flux to get or set data flow<br>
    |-- page        # website page components<br>
    |-- static      # src resource files that need to package<br>
    |-- template    # html template<br>
    index.html      # app entryn file
index.js         # 项目发布后的启动文件<br>
package.json     # package manage<br>
.babelrc         # .babelrc file<br>
.editorconfig    # 开发工具统一管理器<br>
.gitignore       # git 忽略的文件配置<br>
.postcssrc.js    # 通过JS插件来转换CSS<br>

See [vue-and-react-template](https://github.com/xulayen/vue-and-react-template)