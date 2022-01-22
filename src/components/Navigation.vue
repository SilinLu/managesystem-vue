<template>
  <div>
    <el-menu
        :default-active="this.$route.path"
        router
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        mode="horizontal"
        @select="handleSelect"
    >
      <el-menu-item v-for="(item, i) in navList" :key="i" :index="item.name">
        {{ item.navItem }}
      </el-menu-item>
      <el-menu-item index="4" disabled>订单管理</el-menu-item>

      <el-button type="text" class="exit-button" align="right" @click=logout>退出</el-button>
    </el-menu>


    <router-view class="menu-right" />
  </div>
</template>
<script>
export default {
  name:'Navigation',
  data() {
    return {
      navList: [
        { name: "/main", navItem: "主页" },
        { name: "/listgoods", navItem: "修改、查询、删除货物" },
        { name: "/addgoods", navItem: "增加货物" },

      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    logout(){
      window.sessionStorage.removeItem("token")
      // 跳转到home页面
      this.$router.push("/login");
    }
  },
};
</script>

<style>
.exit-button{
  float: right;
  margin: auto;
}
</style>
