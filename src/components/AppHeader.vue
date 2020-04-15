<template>
  <div class="header-wrapper">
    <button v-show="isLogin">Logout</button>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      isLogin: false
    };
  }
};
</script>
