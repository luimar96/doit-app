<template>
  <div class="app">
    <div class="grid-choices">
      <Searchbar class="searchbar"/>
      <AddButton class="addbutton"/>
    </div>
    <ProjectGridUsersVue/>


  </div>

</template>

<script>
import ProjectGridUsersVue from "../components/ProjectGridUsers.vue";

import AddButton from "../components/Buttons/AddButton.vue"
import Searchbar from "../components/Searchbar.vue"



export default {
  components:{
    AddButton,
    Searchbar,
    ProjectGridUsersVue,

  },

  data:() => ({
    }),
}
</script>

<style scoped>

.grid-choices{
  padding: 50px 50px 20px 50px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
}

.searchbar{
  width: 60vw;
  min-width: 200px;
  margin-right: 25px;
}

.addbutton{
  width: 30vw;
  margin-left: 25px;
}

</style>

