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

Direction
·
|-- build
    uild.js	# build config
    check-versions.js       # 版本控制
    utils.js                # 默认工具
    vue-loader.conf.js      # vue配置
    webpack.base.conf.js    # 基础配置默认包含react配置
    webpack.dev.conf.js	    # 开发环境下使用
    webpack.prod.conf.js    # 正式环境下使用
|-- config
    dev.env.js	 # 开发环境配置
    index.js	 # 默认基础配置
    prod.env.js	 # 生产环境配置
    test.env.js  # 测试环境配置
|-- static
    ...    # Static resources used by the project 
|-- server
    |-- config
        config.js # config file
    |-- router
        router.js  # router file
    |-- static         # All the resource files that are generated after the site is released
    |-- Util
        until.js   # until file
    |-- index.html     # script build the file
    |-- server.js      # start a nodejs server 
|-- src
    |-- components  # Store the directory of the project components
    |-- data        # website resource files eg. mp3 file or and so on
    |-- flux        # use flux to get or set data flow
    |-- page        # website page components
    |-- static      # src resource files that need to package
    |-- template    # html template
    index.js        # app entryn file
package.json     # package manage
.babelrc         # .babelrc file
.editorconfig    # 开发工具统一管理器
.gitignore       # git 忽略的文件配置
.postcssrc.js    # 通过JS插件来转换CSS

See [vue-and-react-template](https://github.com/xulayen/vue-and-react-template)