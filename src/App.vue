<template>

  <div class="nav" v-if="this.$route.path !== '/'">
      <Navbar/>
  </div>

  <div class="page">
    <router-view />
  </div>

</template>
<script>
import Navbar from "./components/navBar.vue"
 export default { 
    data:() => ({
    isLoggedIn: false
  }),
  components: {
    Navbar

    
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.nav {
  position: sticky;
  top: 0px;
  height: 100px;
  width: 100vw;
  z-index: 10;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

body{
  overflow-x: hidden;
  overflow-y: auto;
  width: 100vw;
  height: 100vh;
  margin: 0px;
}

.page{
  z-index: 0;
  width: 100vw;
  height: calc(100vh - 100px);
}

::-webkit-scrollbar {
    width: 10px;
}
/* Track */
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    box-shadow: rgba(0,0,0,0.3);
    -webkit-border-radius: 6px;
    background: #dddbff;
    border-radius: 6px;
}
/* Handle */
::-webkit-scrollbar-thumb {
    -webkit-border-radius: 6px;
    border-radius: 6px;
    background: #a798ec; 
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
    box-shadow: rgba(0,0,0,0.3);
}

</style>
