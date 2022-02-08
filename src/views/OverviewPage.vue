<template>
  <div class="app">
    <div class="grid-choices">
      <Searchbar class="searchbar"/>
       <div @click="isOpen=true ">
         <AddButton class="addbutton"/>
      </div>  
    </div>
    <ProjectGrid/>  
      <transition name="fade" apper>
    <ProjectitemModal :open="isOpen" @close="isOpen = !isOpen"/>   
    </transition>    
  </div>
  
</template>

<script>
import AddButton from "../components/Buttons/AddButton.vue"
import Searchbar from "../components/Searchbar.vue"
import ProjectGrid from "../components/ProjectGrid.vue"
import {ref} from "vue"
import ProjectitemModal from "../views/ProjectitemModal.vue"


export default {
  components:{
    AddButton,
    Searchbar,
    ProjectGrid,
    ProjectitemModal
    
  },
  setup () {
      const isOpen = ref(false)

      return { isOpen }
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

