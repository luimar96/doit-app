<template>
<div class="vue-modal" v-show="isOpen">
         
        <div class="model-content">
            <div class="close"  @click="toggleOpen()">
                <close-button></close-button>
            </div>
                <h1>Edit Task</h1>
               <form @submit.prevent="postData" method="post">
                <div class="input-field">
                    <label for="">Task Name</label>
                    <input type="text" name="tasktName" v-model="taskName">
                </div>
                <div>
                    <label for="">Operator??</label>
                    <Multiselect
                    v-model="value"
                    mode="tags"
                    placeholder="Select your characters"
                    :options="options"
                    :search="true"
                    />
                </div>
                <div class="input-field">
                    <label for="">Due Date</label>
                    <input type="text"  name="dueDate" v-model="dueDate">
                </div>
                <div class="description-field"> 
                    <label for="">Description</label>
                    <textarea name="description" id="" cols="30" rows="10" v-model="description"></textarea>
                </div>              
                <div class="addbutton" type="submit">
                    <add-button ></add-button>
                    </div>                 
                </form>
                <div class="deltebutton" @click="deleteproject()">
                    <delete-button ></delete-button> 
                    </div> 
        </div>        
</div>
  
</template>

<script>
import AddButton from "../components/Buttons/AddButton.vue"
import CloseButton from "../components/Buttons/CloseButton.vue"
import DeleteButton from "../components/Buttons/DeleteButton.vue"
import Multiselect from '@vueform/multiselect'
<style src="@vueform/multiselect/themes/default.css"></style>

export default {
    computed:{
        AddButton,
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
        isOpen:false,
        taskName:"",
        dueDate: null,
        description:"",
        value: [],
        options: [
        'Vue',
        'Script',
        'Com',
        ],


    }),
    methods:{
        setValues(){
            this.description = this.task.Description;
            this.taskName = this.task.TicketHeadName;
            this.dueDate = this.task.DueDate;

        },
         toggleOpen(){
            this.isOpen = !this.isOpen;
            this.setValues();
            
            
        },
    }

}
</script>

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
    top:0;
    right: 14px;
     margin:10px;
}
label{
    font-size: 34px;
    margin:15px;
}

.model-content{    
    width:100%;
    max-width: 800px;
    background-color: white;
    border-radius: 5px;
    overflow: hidden;

}
form{
    margin-left: 80px;
    
}
</style>