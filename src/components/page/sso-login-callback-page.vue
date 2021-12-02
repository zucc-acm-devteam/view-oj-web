<template>
  <div>请稍等，正在为您登录</div>
</template>

<script>
export default {
  name: "sso-login-callback-page",
  mounted() {
    this.$store.commit('loginBySSO')
  }
}
</script>

<style scoped>

</style>
