<template>
  <div id="nav" v-if="this.$router.name === '/'">
    <router-link to="/">Home</router-link> |
  </div>
  <div class="page">
  <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
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
 margin: 0px;
}

.page{
  width: 100vw;
  height: 100vh;
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
