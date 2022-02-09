<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<div>
    <div>
      <ul>
        <li >
          <button class="add-btn" @click="openEditTask()">
            <p>{{taskdata.TicketHeadName}}</p>
        </button>

        </li>
      </ul>
    </div>
</div>
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
.add-btn{
    width: 800px;
    height: 60px;
    border-radius: 1em;
    border: none;
    background-color: #eeedfe;
    box-shadow: 0px 3px 8px 1px #888888;
    cursor: pointer;
    margin: 0.5em;
}
.fa-plus{
    font-size: 4em;
    opacity: 50%;
}
.add-btn:hover {background-color: #a99be5}
.add-btn:active {
  transform: translateY(4px);
}
p {
  color: rgb(0, 0, 0);
  font-size: 1.9em;
  margin-top: 1em;
  margin-left: 0.1em;
  margin-right: 0.1em;
  text-align: left;
  margin-left: 1em;
  margin-bottom: 1em;
}
ul{
    list-style: none;
}
</style>
