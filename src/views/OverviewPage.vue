<template>
  <div class="app">
    <div class="grid-choices">
      <Searchbar class="searchbar"/>
       <div class="add-button" @click="openAddView()">
         <AddButton class="addbutton"/>
      </div>  
    </div>
    <ProjectGrid/>  
      <transition name="fade" apper>
    <ProjectitemModal  ref="projectItemModel"/>   
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
    methods:{
      openAddView(){
        this.$refs.projectItemModel.toggleOpen();
      }
    }
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

.add-button{
  width: 250px;
}

</style>

