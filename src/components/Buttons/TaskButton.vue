<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  <button class="task" @click="openEditTask()">
    <p>{{taskdata.TicketHeadName}}</p>
  </button>
  <transition name="fade" apper>
    <EditTask v-bind:task="taskdata" ref="modal"/>   
  </transition> 
</template>

<script>
//import OverView from '../views/OverviewPage.vue'
import EditTask from "../EditTask.vue"
export default {
   props: {      
        taskdata:{
            type: Object,
            default: () =>({}),

        }
    },
  components:{
    EditTask
  },
  methods:{
     openEditTask(){
              this.isOpen = true;
             this.$refs.modal.toggleOpen();
        }

  }
}

</script>
<style scoped>
.task{
    width: 100%;
    height: auto;
    border-radius: 15px;
    border: none;
    background-color: #eeedfe;
    box-shadow: 0px 3px 8px 1px #888888;
    cursor: pointer;
    margin: 0.5em;
    margin: 5px 0px;
}
.fa-plus{
    font-size: 4em;
    opacity: 50%;
}
.task:hover {background-color: #a99be5}
.task:active {
  transform: translateY(4px);
}
p {
  color: rgb(0, 0, 0);
  font-size: 1.9em;
  margin: 10px auto;
  padding-left: 20px;
  text-align: left;
}
</style>
