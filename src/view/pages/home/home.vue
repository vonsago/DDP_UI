<template>
  <div class="home--modules">
    <common-status-bar>
    </common-status-bar>
    <div
      class="container-fluid home__header"
    >
      <div class="container">
        <div class='text-center home__header--text'>
          <span class="home__header--title">DaoCloud Service Platform</span>
          <p class="home__header--main">云服务平台</p>
        </div>
      </div>
    </div>
    <div class="container-fluid home__content catalog-panel">
      <div class="container">
        <div class="row">
          <div class="catalog-sidebar col-md-3">
            <p class="catalog-sidebar-title">服务分类</p>
            <ul class="catalog-sidebar-menus">
              <li
                v-for="(clg, index) in catalogList"
                :key="index"
                :class="{ 'active': clg.name === catalog.name }"
                @click="switchCatalog(clg)">
                <a href="javascript:void(0)">{{ clg.name }}</a>
              </li>
            </ul>
          </div>
          <div class='catalog-content col-md-9'>
            <span class="all">{{ catalog.name }}</span>
            <div class="service-cell-container clearfix">
              <a
                class="service-cell"
                v-for="service in availableServices"
                :key="service.id"
                @click="gotoService(service.id)">
                <div class="box-wrap">
                  <div
                    class="logo-box"
                    v-if="service.logo_url"
                    v-bg-image="service.logo_url">
                  </div>
                  <logo-placeholder class="logo-box" v-if="!service.logo_url">
                  </logo-placeholder>
                </div>
                <div class="service-name">{{ service.name }}</div>
                <div
                  v-if="service.short_description"
                  class="service-content">
                  {{ service.short_description }}
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-footer class="footer">
    </app-footer>
  </div>
</template>

<script src="./home.js"></script>

<style lang="scss">
@import './home.scss';
</style>