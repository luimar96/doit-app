<template>
  <div class="row">
    <div class="column" >
     <img src="../assets/people.png" alt="people" />
     <h1 >DoIT</h1>
     <p>Helps you to better manage your task</p>
   </div>
   <Login/>
   <searchbar/>

  </div>
</template>

<script>
// @ is an alias to /src
import Login from "../components/Login.vue";
import Searchbar from '../components/Searchbar.vue';
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    Login,
    Searchbar
  },
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}
</style>