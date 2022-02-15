<template>
<div class="vue-modal" v-show="isOpen">  

    <div class="backdrop" @click="toggleOpen()"></div>
    <div class="modal-content">
        <div class="close-button" @click="toggleOpen()">
            <CloseButtton/>
        </div>
        
        <div class="columns">
            <div class="column-left">
                <div class="add-button" @click="openAddNewTask()">
                    <AddButton/>
                </div>
                <div class="task-list">
                    <TaskButton v-for="task in tasks" v-bind:key="task.TicketHeadName"  v-bind:taskdata="task" />
                </div>
            </div>

            <div class="column-right">             
                <div class="project-info-box">
                    <label for="">Customer</label>
                    <label for="" class="info-input" v-for="cust in customer"  v-bind:key="cust.CustomerName" >{{cust.CustomerName}}</label>                                                            
                    <label for="">Description</label>
                    <textarea class="description" cols="30" rows="10" v-model="description"></textarea>
                </div>                           
            </div>
        </div>
    </div>   
</div>
<transition name="fade" apper>
    <AddTaskItem v-bind:projectData="projectData" ref="modal"/>
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
        customerUrl: `http://localhost:37164/api/Customer/getbyid/`,
        tasks: [],
        isOpen:false,
        description:"",
        customer:{}
    }),
     async mounted(){
        console.log(this.url)
        let response;
            
        response = await fetch(
        this.url + this.projectData.ProjectId
        );

        const data = await response.json();
        this.tasks = data;
        this.description = this.projectData.Description
         this.GetCustomer();

       
  },
  activated(){
   

  },
   methods:{
       toggleOpen(){
            this.isOpen = !this.isOpen;
            
            
            
        },
        openAddNewTask(){
             this.isOpen = true;
             this.$refs.modal.toggleOpen();
        },
        async GetCustomer(){
        let response;
        response = await fetch(
        this.customerUrl + this.projectData.CustomerId
        );

        const data = await response.json();
        this.customer = data;

    },
       
  },
   
}
</script>
<style scoped>

.vue-modal{
    position: -webkit-sticky;
    top: 0px;
    bottom: 0px;
    width: 100vw;
    height: 100vh;
    background-color: rgb(0, 0, 0, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 11;
}

.backdrop{
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color:rgba(0, 0, 0, 0.4);
    z-index: 10;
}

.modal-content{  
    display: flex;
    flex-direction: column;
    margin-top: auto;
    margin-bottom: auto;
    width: 90vw;
    min-width: 450px;
    max-width: 1200px;
    height: 100%;
    min-height: 100px;
    max-height: 800px;
    overflow: hidden;
    background-color: white;
    border-radius: 20px;
    position: relative;
    z-index: 11;
}

.columns{
    height: 100%;
    width: 100%;
    margin: auto;
    display: flex;
}

.column-right{   
    width:40%;   
    margin: auto;
    height: 85%;
    padding: 20px;
}
.column-left{
    width:60%;
    padding: 20px;
    
}

.task-list{
    width: 90%;
    margin: auto;
    height: 80%;
    padding: 20px;
    border-top: solid #beb3ee 1px;
    border-bottom: solid #beb3ee 1px;
    overflow-y: auto;
    overflow-x: hidden;
}

.add-button{
    margin: auto;
    width: 85%;
    padding: 0px 20px 20px 20px;
}

.close-button{
    position: absolute;
    right: 0px;
    top: 0px;
    margin: 10px;
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