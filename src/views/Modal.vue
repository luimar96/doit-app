<template>
<div class="vue-modal" v-show="isOpen">
    <div class="vue-modal-inner">
        <div class="vue-modal-content">
            <TaskButton v-for="task in tasks" v-bind:key="task.TicketHeadName"  v-bind:taskdata="task" />
            
            <div @click="openAddNewTask()">
            <AddButton/>
            </div>
            
            <slot/>
            <button type="button" @click="toggleOpen()">Close</button>
        </div>
    </div>
</div>
<transition name="fade" apper>
    <AddTaskItem ref="modal"/>
</transition>

</template>
<script>
import AddTaskItem from "../components/AddTaskItem.vue"
import AddButton from "../components/Buttons/AddButton.vue"
import TaskButton from "../components/Buttons/TaskButton.vue"

export default {
     props: {      
        projectData:{
            type: Object,
            default: () =>({}),

        }
    },
    
  components:{
    AddButton,
    TaskButton,
    AddTaskItem
   
  },
  data:() => ({
        url: `http://localhost:37164/api/tickethead/getbyproject/`,
        tasks: [],
        isOpen:false,
    }),
     async mounted(){
        console.log(this.url)
        let response;
            
        response = await fetch(
        this.url + this.projectData.ProjectId
        );

        const data = await response.json();
        console.log("data from task:",data);
        this.tasks = data;
  },
   methods:{
       toggleOpen(){
            this.isOpen = !this.isOpen;
            
        },
        openAddNewTask(){
             this.isOpen = true;
             this.$refs.modal.toggleOpen();
              console.log("opening add new task");
        }
       
  }
}
</script>
<style scoped>
.vue-modal-content{
    background-color: #fff;
    border: 1px solid;
    box-shadow: rgba(0, 0, 0, 0.4);
}
</style>