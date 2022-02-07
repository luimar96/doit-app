<template>
  <div class="container">
    <DoITSplash class="content"/>
    <Login class="content"/>
    </div>
</template>

<script>
// @ is an alias to /src
import Login from "../components/Login-page/Login.vue";
import DoITSplash from "../components/Login-page/DoITSplash.vue"

export default {
  name: "LoginPage",
  components: {
    Login,
    DoITSplash,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction:row;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.content {
  width: 50%;
  padding: 5% 5% 10% 5%;
}

</style>