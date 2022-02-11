<template>
<div class="vue-modal" v-show="isOpen">
         <div class="backdrop" @click="toggleOpen()"></div>
        <div class="modal-content">
            <h1>New Project</h1>
            <div class="close"  @click="toggleOpen()">
                <close-button></close-button>
            </div>
            <form @submit.prevent="postData" method="post">
                
                <div class="inputs">
                    <div class="input-field">
                        <input type="text" name="projectName" v-model="posts.projectName" placeholder="Project Name...">
                    </div>
                    <div class="dropdown">
                        <label for="">Customer</label>
                        <select v-model="posts.customer">
                            <option v-for="cust in customers" v-bind:key="cust.CustomerName" :value="cust.CustomerId">{{ cust.CustomerName }}</option> //Ändra detta till att visa CustomerName men skicka med CustomerId till SQL
                        </select>
                    </div>
                    <div class="description-field">
                        <textarea name="description" id="" cols="30" rows="10" v-model="posts.description" placeholder="Description..."></textarea>
                    </div>  
                </div>  
                <div class="add" type="submit" @click="toggleOpen()">
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
          console.log(this.posts)
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
    width: 80vw;
    min-width: 450px;
    height: Calc(50vh + 270px);
    overflow: auto;
    background-color: white;
    border-radius: 20px;
    position: relative;
    z-index: 11;

}

h1{
    text-align: center;
    font-size:48px;
    opacity: 70%;
    margin: 0px, 20px;
}

hr{

}

.inputs{
    border-top: solid #beb3ee 1px;
    border-bottom: solid #beb3ee 1px;
    margin-left: 2.5%; 
    width: 95%;
    height: 50vh;
    overflow: auto;
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
    
    width: 95%;
    height: 200px;
    border-radius: 15px;
    resize:none;
    border: solid 1px #7E69DF;
    margin-left:6px ;
    padding: 10px;
    font-size: 20px;
}
textarea:focus{
    outline: #7E69DF solid 2px;
}

input{
    width: 50%;
}
.close{
    position: absolute;
    top: 15px;
    right: 15px;
}
.add{
    position: absolute;
    right: 25px;
    bottom: 30px;
}
label{
    font-size: 34px;
    margin:15px;
}
form{
    margin: 0px;
}
</style>