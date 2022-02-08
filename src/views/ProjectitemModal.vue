<template>
<div class="vue-modal" v-show="open">
         
        <div class="model-content">
            <div class="close"  @click="$emit('close')">
                <close-button></close-button>
            </div>
                <h1>New Project</h1>
               <form @submit.prevent="postData" method="post">
                <div class="input-field">
                    <label for=""> Project Name</label>
                    <input type="text" name="projectName" v-model="posts.projectName">
                </div>
                <div class="input-field">
                    <label for="">Customer</label>
                    <input type="text"  name="customer" v-model="posts.customer">
                </div>
                <div class="description-field">
                    <label for="">Description</label>
                    <textarea name="description" id="" cols="30" rows="10" v-model="posts.description"></textarea>
                </div>    
                <div class="addbutton" type="submit" @click="$emit('close')">
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
    props: {
        open: {
            type: Boolean,
            required: true
        }
    },
  components:{
    AddButton,
    CloseButton
    
  },
  data:() => ({
        url: `http://localhost:37164/api/project/`,
        //dataFromAPI: [],
       posts: {
           projectName:null,
           customer:null,
           description:null


       }
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

            }).catch(error =>console.log(error));            
            return this.$router.go("/overview");
          

        }

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

</style>