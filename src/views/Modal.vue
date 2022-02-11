<template>
<div class="modal" v-show="isOpen">  
        <div class="modal-content">
            <div class="column-left">
            <TaskButton v-for="task in tasks" v-bind:key="task.TicketHeadName"  v-bind:taskdata="task" />
            </div>
            <div class="column-right">             
                    <div @click="toggleOpen()">
                        <CloseButtton/>
                    </div>
                     <div @click="openAddNewTask()">
                        <AddButton/>
                    </div>
                        <div class="project-info-box">
                                <label for="">Customer</label>
                                <label for="" class="info-input">Ercia</label>
                                <label for="">Company??</label>
                                <label for="" class="info-input">Ica</label>
                                <label for="">Contact??</label>
                                <label for="" class="info-input">ica support</label>
                                <label for="">Description</label>
                                <textarea class="description" cols="30" rows="10" v-model="description"></textarea>
                        </div>                           
            </div>
        </div>   
</div>
<transition name="fade" apper>
    <AddTaskItem ref="modal"/>
</transition>

</template>
<script>
import CloseButtton from "../components/Buttons/CloseButton.vue"
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
    AddTaskItem,
    CloseButtton,
   
  },
  data:() => ({
        url: `http://localhost:37164/api/tickethead/getbyproject/`,
        tasks: [],
        isOpen:false,
        description:""
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
        this.description = this.projectData.Description
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
.modal{
    --gap:2px;
   position: fixed;
   top:0;
   left: 0;
   width: 100vw;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
   box-sizing: border-box;
   padding: var(--gap);
   background: rgb(0, 0, 0, 0.5);
   z-index: 1;
     
}
.modal-content{
    display:flex;
    width: 100em;
    height: 50em;
    overflow: hidden;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.4);
   
}
.column-right{   
    width:40%;   
}
.column-left{
    width:60% ;
}
.project-info-box{
    display: flex;
    flex-direction: column;
    height: 38em;
    margin: 10px;
    margin-bottom: 20px;
    border:5px;
    border: 1px solid #7E69DF;
}
.customer-input{
    border-bottom: 1px solid black;
}
.info-input {
   border-bottom: 1px solid black;
}

</style>