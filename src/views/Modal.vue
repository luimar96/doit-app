<template>
<div class="vue-modal" v-show="open">
    <div class="vue-modal-inner">
        <div class="vue-modal-content">
            <task-button></task-button>
            <add-button></add-button>
            <slot/>
            <button type="button" @click="$emit('close')">Close</button>
        </div>
    </div>
</div>
    
  
</template>
<script>
import AddButton from "../components/Buttons/AddButton.vue"
import TaskButton from "../components/Buttons/TaskButton.vue"

export default {
    props: {
        open: {
            type: Boolean,
            required: true
        }
    },
  components:{
    AddButton,
    TaskButton
  },
  data:() => ({
        url: `http://localhost:37164/api/tickethead/`,
        dataFromAPI: [],
    }),
  async mounted(){
    console.log(this.url)
    let response;
        
    response = await fetch(
      this.url + `get`
      );

    const data = await response.json();
    console.log(data)
    this.dataFromAPI = data;
  }
}
</script>
<style scoped>
*,
::before,
::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: relative;
    justify-content: center;
}
.vue-modal{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background-color:rgba(0, 0, 0, 0.4);
    z-index: 1;
    inset: -0;
}
.vue-modal-inner{
    max-width: 500px;
    max-height: 500px;
}
.vue-modal-content{
    justify-content: center;
    position: fixed;
    background-color: #fff;
    border: 1px solid;
    box-shadow: rgba(0, 0, 0, 0.4);
    padding: 1rem;
    margin: 20em;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
}
</style>