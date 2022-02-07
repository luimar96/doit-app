<template>
  <div class="container">
    <div class="grid-choices">
      <Searchbar class="searchbar"/>
      <AddButton class="addbutton"/>
    </div>
    <ProjectGrid/>

    <!--<button @click="isOpen = true">Show Modal</button>
    <transition name="fade" apper>
    <modal :open="isOpen" @close="isOpen = !isOpen">
      <p>Lorem ipsumaihgirgpwgjrowjrophgwrhhrwhrwhrwwrhwrhrhw</p>
    </modal>
    </transition> -->
  </div>

</template>

<script>
import AddButton from "../components/Buttons/AddButton.vue"
import Searchbar from "../components/Searchbar.vue"
import ProjectGrid from "../components/ProjectGrid.vue"
//import {ref} from "vue"

export default {
  components:{
    AddButton,
    Searchbar,
    ProjectGrid
  },
  setup () {
      const isOpen = (false) //Ref(false)

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

