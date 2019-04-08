<template>

<el-container style="min-height: 100%; border: 1px solid #eee">
  <el-header style="text-align: right; font-size: 12px">
    <el-dropdown>
      <i class="el-icon-setting" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>查看</el-dropdown-item>
        <el-dropdown-item>新增</el-dropdown-item>
        <el-dropdown-item>删除</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <a class="home_login" href="#/login">登录</a>
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
      <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
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