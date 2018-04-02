<template>
  <div>
    <zhead/>
    <menus/>
    <contentd/>
      <!-- <router-view></router-view> -->
  </div>
</template>
<script>
import zhead from "./head"
import menus from "./menu"
import contentd from "./content"
    export default {
        data(){
            return {

            }
        },
        components: {
            zhead,
            menus,
            contentd,

        }
    }
</script>
