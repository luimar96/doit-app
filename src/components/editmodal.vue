<template>
<div class="vue-modal" v-show="isOpen">
         
        <div class="model-content">
            <div class="close"  @click="toggleOpen()">
                <close-button></close-button>
            </div>
                <h1>New Project</h1>
               <form @submit.prevent="postData" method="post">
                <div class="input-field">
                    <label for="">Project Name</label>
                    <input type="text" name="projectName" v-model="projectName">
                </div>
                <div class="dropdown">
                    <label for="">Customer</label>
                    <select v-model="customer">
                        <option v-for="cust in customers" v-bind:key="cust.CustomerName">{{ cust.CustomerId }}</option> //Ändra detta till att visa CustomerName men skicka med CustomerId till SQL
                    </select>
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


export default {
    props: {      
        projectData:{
            type: Object,
            default: () =>({}),

        }
    },
  components:{
    AddButton,
    CloseButton,
    DeleteButton
    
  },
  data:() => ({
        url: `http://localhost:37164/api/project/put/`,
        //dataFromAPI: [],
        projectName: "",
        description: "",
        customer:"",
        isOpen: false,
        customerUrl: `http://localhost:37164/api/customer/get`,
        customers: [],

       
    }),
    methods: {
        postData(){
         fetch(this.url, {
                method: 'PUT',
                body: JSON.stringify({
                    ProjectId : this.projectData.ProjectId,
                    ProjectName: this.projectName,
                    CustomerId: this.customer,
                    Description: this.description
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                }).then(this.$router.go());
        },
        setValues(){
            this.description = this.projectData.Description;
            this.projectName = this.projectData.ProjectName;
            this.customer = this.projectData.CustomerId;
        },
        toggleOpen(){
            this.isOpen = !this.isOpen;
            this.setValues();
        },
         deleteproject(){
            fetch(`http://localhost:37164/api/project/delete/` + this.projectData.ProjectId, {
                method: 'DELETE',
          }).then( this.$router.go());
        }
    },
    async mounted(){
        console.log(this.url)
        let response;
            
        response = await fetch(
        this.customerUrl
        );

        const data = await response.json();
        this.customers = data;
        console.log("customers",this.customers);

    },
    
    
    
  
}
</script>
<style scoped>
/*
*,
::before,
::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: relative;
    justify-content: center;
}*/
.vue-modal{
   display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    top:0; 
    background-color:rgba(0, 0, 0, 0.4);  
    display: flex;
    justify-content: center;
    align-items: center;
     
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
    width:100rem;
    height:50rem;
    background-color: white;
    border-radius: 5px;
    position: relative;

}
form{
    margin-left: 80px;
    
}

</style>