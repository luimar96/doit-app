<template >
<div class="row">
  <div class="column">
    <Picture/>
  </div>
  <div class="column login-container">
   <Login/>
   <searchbar/>

  </div>
</div>
</template>

<script>
// @ is an alias to /src
import Login from "../components/Login-page/Login.vue";
import Picture from "../components/Login-page/Picture.vue"
import Searchbar from '../components/Searchbar.vue';
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    Login,
    Picture,
    Searchbar
  },
};
</script>
<style scoped>

* {
  box-sizing: border-box;
}

.row {
  display: flex;
}

.column {
  flex: 50%;
  padding: 10px;
  height: 300px; 
}

.login-container{
  margin-top:25em;
}

</style>