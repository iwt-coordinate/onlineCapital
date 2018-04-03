<template>
    <div>
        <section class="login">
            <header class="logo"><img src="@/images/logo.jpg" alt="互联网销售福利彩票交易系统"></header>
            <article class="login_bg">
            </article>
        </section>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    form() {
      this.$router.push("/home");
    }
  }
};
</script>
