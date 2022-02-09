<template>
  <div class="app">
    <div class="grid-choices">
      <Searchbar class="searchbar"/>
       <div @click="openAddView()">
         <AddButton class="addbutton"/>
      </div>
    </div>
    <OperatorGrid/>
      <transition name="fade" apper>
    <OperatorItemModel  ref="OperatorItemModel"/>
    </transition>
  </div>

</template>

<script>
import AddButton from "../components/Buttons/AddButton.vue"
import Searchbar from "../components/Searchbar.vue"
import OperatorGrid from "../components/OperatorGrid.vue"
import {ref} from "vue"
import OperatorItemModel from "./OperatorItemModel.vue"


export default {
  components:{
    AddButton,
    Searchbar,
    OperatorGrid,
    OperatorItemModel

  },
  setup () {
      const isOpen = ref(false)

      return { isOpen }
    },

  data:() => ({
    }),
    methods:{
      openAddView(){
        this.$refs.OperatorItemModel.toggleOpen();
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

.addbutton{
  width: 30vw;
  margin-left: 25px;
}

</style>

