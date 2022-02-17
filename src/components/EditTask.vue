<template>
<div class="vue-modal" v-show="isOpen">
    <div class="backdrop" @click="toggleOpen()"></div>
    <div class="modal-content">
        <h1>Edit Task</h1>
        <div class="close-button"  @click="toggleOpen()">
            <CloseButton/>           
        </div>
        <form @submit.prevent="postData" method="post">
            <div class="inputs">
                <div class="input-field">
                    <label class="label">Task Name</label>
                    <input type="text" name="tasktName" v-model="taskName" placeholder="Task Name...">
                </div>
                        
                <div class="input-field">
                    <label class="label">Select Employees</label>  
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
                    <label class="label">Due Date</label>
                    <input type="date"  name="dueDate" v-model="dueDate">
                </div>
                <div class="description-field"> 
                    <label class="label">Description</label>
                    <textarea class="description" name="description" id="" cols="30" rows="10" v-model="description" placeholder="Task Description..."></textarea>
                </div> 
            </div> 
            <h1>{{responseOk}}</h1>   
            <div class="button-container">
                <div class="delete" @click=" deleteTask()">
                    <DeleteButton/>
                </div>  
                <div class="add" type="submit">
                    <SaveButton/>
                </div> 
            </div>
        </form>
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
    margin-top: auto;
    margin-bottom: auto;
    width: 70vw;
    min-width: 400px;
    max-width: 850px;
    height: 90%;
    min-height: 100px;
    max-height: 750px;
    overflow: hidden;
    background-color: white;
    border-radius: 20px;
    position: relative;
    z-index: 11;

}
h1{
    text-align: center;
    font-size:48px;
    opacity: 70%;
    margin: 2vh 0px;
}
.inputs{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-top: solid #beb3ee 1px;
    border-bottom: solid #beb3ee 1px;
    margin: 0px auto;
    width: 85%;
    height: 100%;
    overflow: auto;
    overflow-x: hidden;
    flex-shrink: 1;
}
.input-field{
    display:flex;
    flex-direction: column;
    margin: 20px 0px;
}

.input-field > input{
    box-shadow: none;
    width: 85%;
    margin: 0px auto;
    height: 7vh;
    min-height: 50px;
    max-height: 70px;
}

.description-field{
    display:flex;
    flex-direction: column;
    
}
textarea{
    width: 50%;
    resize:none;
    border: solid 1px #7E69DF;
    margin-left:6px ;
}
.description{
    width: 85%;
    min-height: 100px;
    height: 30vh;

    border-radius: 15px;
    resize: none;
    margin: 0px auto;
    border: solid 1px #7E69DF;
    padding: 20px;
    font-size: 20px;
}
.description:focus{
    outline: #7E69DF solid 2px;
}

input{
    width: 50%;
}
.add{
    height: 60px;
    width: 25vw;
    max-width: 280px;
    min-width: 150px;
    margin: 2vh auto 40px 1vw;
}
.delete{
    height: 60px;
    width: 25vw;
    max-width: 280px;
    min-width: 150px;
    margin: 2vh 1vw 40px auto;
}
.close-button{
    position: absolute;
    right: 0px;
    top: 0px;
    margin: 10px;
}
.label{
    padding-left: 35px;
    font-size: 25px;
    opacity: 0.80;
    margin: 0px;
}

form{
    display: flex;
    flex-direction: column;
    height: 88%;
    margin: 0px;
    width: 100%;
}
.button-container{
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-shrink: 0;
}

.multiselect {
  width: 90%;
  margin: auto;
  height: 60px;
  padding: 20px;
  border: #7e69df solid 1px;
  border-radius: 15px 15px 0px 0px;
  font-size: 25px;
}
</style>