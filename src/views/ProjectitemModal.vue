<template>
<div class="vue-modal" v-show="isOpen">
         
        <div class="model-content">
            <div class="close"  @click="toggleOpen()">
                <close-button></close-button>
            </div>
                <h1>New Project</h1>
               <form @submit.prevent="postData" method="post">
                <div class="input-field">
                    <label for=""> Project Name</label>
                    <input type="text" name="projectName" v-model="posts.projectName">
                </div>
                <div class="dropdown">
                    <label for="">Customer</label>
                    <select v-model="customer">
                        <option v-for="cust in customers" v-bind:key="cust.CustomerName">{{ cust.CustomerId }}</option> //Ändra detta till att visa CustomerName men skicka med CustomerId till SQL
                    </select>
                </div>
                <div class="description-field">
                    <label for="">Description</label>
                    <textarea name="description" id="" cols="30" rows="10" v-model="posts.description"></textarea>
                </div>    
                <div class="addbutton" type="submit" @click="toggleOpen()">
                    <add-button ></add-button>
                    </div>                 
                </form>
        </div>        
</div>
    
  
</template>
<script>
import AddButton from "../components/Buttons/AddButton.vue"
import CloseButton from "../components/Buttons/CloseButton.vue"


export default {
  components:{
    AddButton,
    CloseButton
    
  },
  data:() => ({
        url: `http://localhost:37164/api/project/`,
        customerUrl: `http://localhost:37164/api/customer/get`,
        //dataFromAPI: [],
        customers: [],
       posts: {
           projectName:null,
           customer: {},
           description:null


       },
       isOpen:false
    }),
    methods: {
        postData(){
          
         fetch(       
            this.url + `post`
            ,{
                method: 'POST',
                body: JSON.stringify({
                    ProjectName: this.posts.projectName,
                    Description: this.posts.description,
                    CustomerId: this.posts.customer
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },

            }).then(this.$router.go());          
          
        },

        toggleOpen(){
            this.isOpen = !this.isOpen;
           

        },
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
.dropdown{

}
</style>