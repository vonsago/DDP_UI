<template>

<el-container style="min-height: 100%; border: 1px solid #eee">
  <el-header style="text-align: right; font-size: 12px">
    <el-dropdown @command="handleCommand">
    <el-button icon=el-icon-setting type="primary">
      更多操作<i class="el-icon-arrow-down el-icon--right"></i>
    </el-button>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item icon=el-icon-loading command="login">登录Docker</el-dropdown-item>
      <el-dropdown-item icon=el-icon-circle-plus-outline command="create">注册Docker</el-dropdown-item>
      <el-dropdown-item icon=el-icon-info command="version">平台版本</el-dropdown-item>
      <el-dropdown-item icon=el-icon-star-on command="star">给我点赞</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
  </el-header>
  <div
      class="el-header home__header"
      :style="{ 'background-image': `url('${bannerImage}')` }">
      <div class="home__header--text">
          <span class="home__header--title  text-center">Docker Dashboard Platform</span>
          <p class="home__header--main  text-center">Docker操作平台</p>
      </div>
    </div>
  
  
  <el-container>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '2']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-menu"></i>导航</template>
        <el-menu-item-group>
          <el-menu-item index="2-1">启动容器</el-menu-item>
          <el-menu-item index="2-1">构建镜像</el-menu-item>
          <el-menu-item index="2-2">镜像仓库</el-menu-item>
        </el-menu-item-group>

      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-setting"></i>设置</template>
        <el-menu-item-group>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
  <el-container>
    <el-table 
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    :data="Containers" border style="width: 100%"
    >
      <el-table-column
        fixed
        prop="short_id"
        label="容器ID"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="容器名"
        width="150">
      </el-table-column>
      <el-table-column
        prop="image"
        label="镜像名"
        width="200">
      </el-table-column>
      <el-table-column
        prop="prots"
        label="端口映射"
        width="350">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        width="100">
      </el-table-column>
      <el-table-column
        prop="created"
        label="创建时间"
        width="200">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="200">
        <template slot-scope="scope">
          <el-button icon="el-icon-refresh"  @click="handleClick(scope.row)" type="text" size="small">重启 |</el-button>
          <el-popover
          placement="top"
          width="160"
          v-model="visible">
          <p>您确认删除此容器吗</p>
          <div style="text-align: right; margin: 0">
            <el-button size="mini" type="text">取消</el-button>
            <el-button type="primary" size="mini" @click="deleteContainer(scope.$index, scope.row)">确定</el-button>
          </div>
          <el-button icon="el-icon-remove"  slot="reference" type="text" size="small">删除 </el-button>
          </el-popover>
          <el-button type="text" size="small">| 查看<i class="el-icon-view el-icon--right"></i></el-button>
        </template>
      </el-table-column>
    </el-table>
    </el-container>
  </el-container>
</el-container>

</template>

<script src="./home.js"></script>

<style lang="scss">
@import "./home.scss";
</style>