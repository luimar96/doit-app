<template>
  <div class="app">
    <h1>Overview Page!</h1>
<<<<<<< HEAD
    <add-button></add-button>
    <button @click="isOpen = true">Show Modal</button>
    <transition name="fade" apper>
    <modal :open="isOpen" @close="isOpen = !isOpen">
      <p>Lorem ipsumaihgirgpwgjrowjrophgwrhhrwhrwhrwwrhwrhrhw</p>
    </modal>
    </transition>
  </div>
  
</template>
<script>
import AddButton from "../components/Buttons/AddButton.vue"
import Modal from "../views/Modal.vue"
import {ref} from "vue"

export default {
  components:{
    AddButton,
    Modal,
  },
  setup () {
      const isOpen = ref(false)

      return { isOpen }
    },
  data:() => ({
    }),
=======
    <Searchbar />
  </div>
</template>
<script>
import Searchbar from "../components/Searchbar.vue";


export default {
  components: {
    Searchbar
  }
>>>>>>> fc29197b915a81ea72c0b690e2f139edb827fce3
}
</script>
<style scoped>
</style>
