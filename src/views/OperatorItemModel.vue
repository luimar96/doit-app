<template>
<div class="vue-modal" v-show="isOpen">
 <div class="backdrop" @click="toggleOpen()"></div>
        <div class="modal-content">
            <h1>New Employee</h1>
            <div class="close-button"  @click="toggleOpen()">
                <close-button></close-button>
            </div>               
             <form @submit.prevent="postData" method="post">
                <div class="inputs">
                    <div class="dropdown">
                        <label class="customerLabel">Department</label>
                        <select v-model="posts.DepartmentId">
                            <option v-for="department in departments" v-bind:key="department.DepartmentId" :value="department.DepartmentId">{{ department.DepartmentName }}</option> 
                        </select>
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
        url: `http://localhost:37164/api/Employee/`,
        getDepartment:`http://localhost:37164/api/department`,
        departments:[],
       posts: {
           EmployeeName:null,       
           PhotoFileName: "anonymous.png",
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
    async mounted(){
        let response;
        response = await fetch(
        this.getDepartment
        );

        const data = await response.json();
        this.departments = data;

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
    margin-top: auto;
    margin-bottom: auto;
    width: 70vw;

    min-width: 450px;
    max-width: 850px;
    height: 100%;
    min-height: 200px;
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

.customerLabel{
    padding-left: 35px;
    font-size: 25px;
    opacity: 0.80;
}

.dropdown{
    width: 100%;
}

.dropdown > select{
    width: 90%;
    border: 1px solid #7E69DF;
    border-radius: 15px 15px 0px 0px;
    height: 5vh;
    display: block;
    margin: 0 auto;
    min-height: 30px;
    max-height: 50px;
    padding: 0px 20px 0px 20px;
    font-size: 15px;
}

select:focus{
    outline: none;
}

.description-field{
    width: 100%;
    margin: 20px auto 20px auto;
    height: 280px;
}
textarea{
    
    width: 85%;
    min-height: 100px;
    height: 50vh;

    border-radius: 15px;
    resize: none;
    margin: 0px auto;
    border: solid 1px #7E69DF;
    padding: 20px;
    font-size: 20px;
}
textarea:focus{
    outline: #7E69DF solid 2px;
}
.close-button{
    position: absolute;
    right: 0px;
    top: 0px;
    margin: 10px;
}
.add{
    height: 60px;
    margin: 2vh 150px 40px 150px;
    flex-shrink: 0;
}
label{
    font-size: 34px;
    margin:15px;
}
form{
    display: flex;
    flex-direction: column;
    height: 88%;
    margin: 0px;
    width: 100%;
}

</style>