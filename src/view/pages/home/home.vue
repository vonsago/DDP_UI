<template>

<el-container style="min-height: 100%; border: 1px solid #eee">
  <el-header style="text-align: right; font-size: 12px">
    <el-dropdown @command="handleCommand">
    <el-button icon=el-icon-setting type="primary">
      更多操作<i class="el-icon-arrow-down el-icon--right"></i>
    </el-button>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item icon=el-icon-user command="login">登录Docker</el-dropdown-item>
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
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
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
    <el-main>
       <el-table
    :data="Containers"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="short_id"
      label="short id"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="容器名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="status"
      label="状态"
      width="120">
    </el-table-column>
    <el-table-column
      prop="created"
      label="创建时间"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
    </el-main>
  </el-container>
</el-container>

</template>

<script src="./home.js"></script>

<style lang="scss">
@import "./home.scss";
</style>