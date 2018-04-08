<template>
    <div>
        <zhead/>
        <menus/>

        <contentd/>
        <div class="breadcrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item v-for="item in $route.matched" :key="item.index"> {{ item.name }}</el-breadcrumb-item>

            </el-breadcrumb>
        </div>

        <!-- <router-view></router-view> -->
    </div>
</template>
<script>
import zhead from "./head";
import menus from "./menu";
import contentd from "./content";
export default {
  data() {
    return {};
  },
  components: {
    zhead,
    menus,
    contentd
  }
};
</script>
