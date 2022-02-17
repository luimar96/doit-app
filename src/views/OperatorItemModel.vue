<template>
<div class="vue-modal" v-show="isOpen">

        <div class="model-content">
            <div class="close"  @click="toggleOpen()">
                <close-button></close-button>
            </div>
                <h1>New Employee</h1>
               <form @submit.prevent="postData" method="post">
                <div class="input-field">
                    <label for=""> DepartmentId</label>
                    <input type="text" name="DepartmentId" v-model="posts.DepartmentId">
                </div>
                <div class="input-field">
                    <label for="">Name</label>
                    <input type="text"  name="customer" v-model="posts.EmployeeName">
                </div>
                <div class="input-field">
                    <label for="">UserName</label>
                    <input type="text"  name="UserName" v-model="posts.UserName">
                </div>
                 <div class="input-field">
                    <label for="">Password</label>
                    <input type="password"  name="Password" v-model="posts.Password">
                </div>
                 <div class="PhotoFileName-field">
                    <label for="">PhotoFileName</label>
                    <input type="text"  name="PhotoFileName" v-model="posts.PhotoFileName">
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
        url: `http://localhost:37164/api/Employee/`,
        //dataFromAPI: [],
       posts: {
           EmployeeName:null,       
           PhotoFileName: null,
           DepartmentId: null,
           UserName: null,
           Password: null,
       }, 
       DateOfJoining: new Date().toLocaleDateString(),
       isOpen:false
    }),
    methods: {
        postData(){


         fetch(
            this.url + `post`
            ,{
                method: 'POST',
                body: JSON.stringify({

                    EmployeeName: this.posts.EmployeeName,
                    DateOfJoining:this.DateOfJoining,
                    UserName: this.posts.UserName,
                    Password: this.posts.Password,
                    Department: this.posts.DepartmentId,
                    PhotoFileName: this.posts.PhotoFileName,
                }),

                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },


            }).then(location.reload());
        },


        toggleOpen(){
            this.isOpen = !this.isOpen;


        },


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