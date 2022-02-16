<template>
<div class="vue-modal" v-show="isOpen">
         
        <div class="model-content">
            <div class="close"  @click="toggleOpen()">
                <CloseButton/>           
            </div>
                <h1>Edit Task</h1>
               <form @submit.prevent="postData" method="post">
                <div class="input-field">
                    <label for="">Task Name</label>
                    <input type="text" name="tasktName" v-model="taskName">
                </div>
                                
                <div class="input-field">
                    <label class="typo__label">Select Employees</label>  
                             
                <Multiselect   
                   v-model="initialValues"
                    mode="tags"
                    label="EmployeeName"
                    placeholder="Assign Employees"
                    :options="initialValues"
                    :search="true"
                    :multiple="true"                  
                    class="multiselect"                        
                   />
                </div>
                <div class="input-field">
                    <label for="">Due Date</label>
                    <input type="date"  name="dueDate" v-model="dueDate">
                </div>
                <div class="description-field"> 
                    <label for="">Description</label>
                    <textarea name="description" id="" cols="30" rows="10" v-model="description"></textarea>
                </div>              
                <div class="addbutton" type="submit">
                    <SaveButton/>
                    </div>                 
                </form>
                <h1>{{responseOk}}</h1>
                <div class="deltebutton" @click=" deleteTask()">
                   <DeleteButton/>
                    </div> 
        </div>        
</div>
  
</template>

<script>

import SaveButton from "../components/Buttons/SaveButton.vue"
import CloseButton from "../components/Buttons/CloseButton.vue"
import DeleteButton from "../components/Buttons/DeleteButton.vue"
import Multiselect from '@vueform/multiselect'


export default {
    components:{
       SaveButton,
        CloseButton,
        DeleteButton,
        Multiselect
    },
     props: {      
        task:{
            type: Object,
            default: () =>({}),

        }
    },
   data:() => ({
        url: `http://localhost:37164/api/employee/GetEmployee/`,
       getAllEmployeesUrl: `http://localhost:37164/api/employee/GetAllEmployee`,
       getEmployeeByName: `http://localhost:37164/api/employee/get`,
        isOpen:false,
        taskName:"",
        dueDate: null,
        description:"",
        trackBy:"EmployeeId",
        initialValues:[],
        employees:[],
        value: [],
        responseOk:"",
        status:"In-progress",
        updatetDate: new Date().toLocaleDateString(),
        //
     
    }),
    
     
    methods:{     
        
       postData(){
        fetch(`http://localhost:37164/api/tickethead/put`, {
                method: 'PUT',
                body: JSON.stringify({
                    TicketHeadId: this.task.TicketHeadId,
                    ProjectId : this.task.ProjectId,
                    TicketHeadName: this.taskName,
                    DueDate: this.dueDate,
                    Status: this.status,
                    Description: this.description,
                    Created:this.updatetDate
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                }).then((response) => {
                if(response.ok)                
                    this.responseOk ="Updated Successfully";
                                                 
            });
           setTimeout(()=>{this.isOpen = false;},2000);
            location.reload();
            this.responseOk = "";
        },
        setValues(){
            this.description = this.task.Description;
            this.taskName = this.task.TicketHeadName;
            const dateConvert = new Date(this.task.DueDate);
            const year = dateConvert.getFullYear();
            const month = (dateConvert.getMonth()+1).toString().padStart(2, '0');
            const date = dateConvert.getDate().toString().padStart(2, '0');
            this.dueDate = `${year}-${month}-${date}`;

        },
         toggleOpen(){
            this.isOpen = !this.isOpen;
            this.setValues();
            
            
        },
        deleteTask(){
            fetch(`http://localhost:37164/api/tickethead/delete/` + this.task.TicketHeadId, {
                method: 'DELETE',
            }).then((response) => {
                if(response.ok)
                this.responseOk="Deleted Successfully";
        
            });
           setTimeout(()=>{this.isOpen = false;},2000);
            location.reload();
            this.responseOk = "";
        },
    },
    async mounted() {
        const response = await fetch(this.url + this.task.TicketHeadId);
        const data = await response.json();
       data.forEach(employee => { this.initialValues.push(employee.EmployeeName)}); 
        
        const employeeResponse = await fetch(this.getEmployeeByName)
        const empData = await employeeResponse.json();    
       empData.forEach(employee => { this.employees.push(employee.EmployeeName)});
  
  },

}
</script>
<style src="@vueform/multiselect/themes/default.css"></style>
<style>
.vue-modal{
    --gap:15px;
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
     
}
h1{
    text-align: center;
    font-size:48px;
    opacity: 70%;

}
.input-field{
 display:flex;
 flex-direction: column;
 margin:10px;
    
}

.description-field{
    display:flex;
    flex-direction: column;
     margin:10px;
    
}
textarea{
    width: 50%;
    resize:none;
    border: solid 1px #7E69DF;
    margin-left:6px ;
}

input{
    width: 50%;
}
.addbutton{
   position: absolute;
    right: 20px;
    bottom: 10px;
    margin:20px;
  
}
.close{
    position: absolute;
    right: 14px;
     margin:10px;
    
}
label{
    font-size: 34px;
    margin:15px;
}

.model-content{    
    width:100%;
    
    background-color: white;
    border-radius: 5px;
    overflow: hidden;

}
form{
    margin-left: 80px;
    
}

.multiselect {
  width: 53%;
  margin: 0;
  height: 80px;
  border: #7e69df solid 1px;
  border-radius: 15px;
  box-shadow: 0px 3px 8px 1px #888888;
  font-size: 25px;
}
.multiselect-tag {
  font-size: 25px;
  padding: 1rem;
  background: #9c8beb;
}
</style>