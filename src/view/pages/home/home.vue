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
  <!-- 侧边导航 -->
  <el-container>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router>
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-menu"></i>导航</template>
        <el-menu-item-group>
          <el-menu-item>
            <!-- 启动容器表单 -->
            <el-button type="text" @click="dialogFormVisible = true">启动容器</el-button>

            <el-dialog title="启动容器" :visible.sync="dialogFormVisible">
              <el-form :model="form">
                <el-form-item label="镜像名称" :label-width="formLabelWidth" >
                  <el-input v-model="form.image" autocomplete="off" placeholder="host/project/image:tag"></el-input>
                </el-form-item>
                <el-form-item label="镜像种类" :label-width="formLabelWidth">
                  <el-select v-model="form.type" placeholder="请选择镜像种类">
                    <el-option label="mysql" value="mysql"></el-option>
                    <el-option label="redis" value="redis"></el-option>
                    <el-option label="mongo" value="mongo"></el-option>
                    <el-option label="tomcat" value="tomcat"></el-option>
                    <el-option label="nginx" value="nginx"></el-option>
                    <el-option label="jenkins" value="jenkins"></el-option>
                    <el-option label="其他" value="other"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="端口映射" :label-width="formLabelWidth" >
                  <el-input v-model="form.ports" autocomplete="off" placeholder="3306:3306,本地:容器 (不填为默认)"></el-input>
                </el-form-item>
                <el-form-item label="磁盘映射" :label-width="formLabelWidth" >
                  <el-input v-model="form.volumes" autocomplete="off" placeholder="mysqldata:/var/lib/mysql, (可不填)"></el-input>
                </el-form-item>
                <el-form-item label="环境变量" :label-width="formLabelWidth" >
                  <el-input v-model="form.environment" autocomplete="off" placeholder="SOMEVARIABLE=xxx, (可不填)"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="createContainer">确 定</el-button>
              </div>
            </el-dialog>
          </el-menu-item>
          <el-menu-item>
            <el-button type="text" @click="imageFormVisible = true">构建镜像</el-button>

            <el-dialog title="构建镜像" :visible.sync="imageFormVisible">
              <el-form :model="form">
                <el-form-item label="镜像名称" :label-width="formLabelWidth">
                  <el-input v-model="imageFile.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="dockerfile" :label-width="formLabelWidth">
                  <el-input v-model="imageFile.dockerfile" autocomplete="off"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="imageFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="buildImage">确 定</el-button>
              </div>
            </el-dialog>
          </el-menu-item>
          <el-menu-item index="2-2" route="/repository">
            镜像仓库
          </el-menu-item>
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

  <!-- 容器列表 -->
  <el-container>
    <el-table 
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
          <el-button icon="el-icon-refresh"  @click="restartContainer(scope.$index, scope.row)" type="text" size="small">重启 |</el-button>
          <el-popover
          placement="top"
          width="160"
          v-model="visible">
          <p>您确认删除此容器吗</p>
          <div style="text-align: right; margin: 0">
            <el-button size="mini" type="text" @click="visible = false">取消</el-button>
            <el-button type="primary" size="mini" @click="deleteContainer(scope.$index, scope.row)">确定</el-button>
          </div>
          <el-button icon="el-icon-remove"  slot="reference" type="text" size="small" @click="visible = true">删除 </el-button>
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