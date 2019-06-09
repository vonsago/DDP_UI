<template>

<el-container>
  <el-header style="text-align: right; font-size: 12px">
    <el-dropdown split-button type="primary" @click="goBack" @command="handleCommand">
      <i class="el-icon-back  el-icon--left"></i>Home
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item icon=el-icon-loading command="login">登录Docker</el-dropdown-item>
      <el-dropdown-item icon=el-icon-info command="version">平台版本</el-dropdown-item>
      <el-dropdown-item icon=el-icon-star-on command="star">给我点赞</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
  </el-header>
  <el-main>
  <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="repository"
      prop="repository">
    </el-table-column>
    <el-table-column
      label="tag"
      prop="tag">
    </el-table-column>
    <el-table-column
      label="image id"
      prop="short_id">
    </el-table-column>
    <el-table-column
      label="created"
      prop="created">
    </el-table-column>
    <el-table-column
      label="size/M"
      prop="size">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          disabled
          round
          @click="handleEdit(scope.$index, scope.row)">Tag</el-button>
        <el-button
          type="danger"
          round
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
  </el-main>
</el-container>
</template>

<script src="./images.js"></script>

<style lang="scss">
@import "./images.scss";
</style>