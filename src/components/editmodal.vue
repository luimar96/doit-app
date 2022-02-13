<template>
<div class="vue-modal" v-show="isOpen" >
    <div class="backdrop" @click="toggleOpen()"></div>
        <div class="modal-content">
            <h1>Edit</h1>
            <div class="close-button"  @click="toggleOpen()">
                <close-button></close-button>
            </div>
                
                <form @submit.prevent="postData" method="post">
                    <div class="inputs">
                        <div class="input-field">
                            <label class="label" for="">Project Name</label>
                            <input type="text" name="projectName" v-model="projectName" placeholder="Project Name...">
                        </div>
                        <div class="dropdown">
                            <label class="label" for="">Customer</label>
                            <select v-model="customer">
                            <option v-for="cust in customers" v-bind:key="cust.CustomerName" :value="cust.CustomerId">{{ cust.CustomerName }}</option> //Ändra detta till att visa CustomerName men skicka med CustomerId till SQL
                        </select>
                        </div>
                        <div class="description-field">
                            <label class="label" for="">Description</label>
                            <textarea name="description" id="" cols="30" rows="10" v-model="description" placeholder="Project Description..."></textarea>
                        </div>       
                    </div>       
                    <div class="button-container">
                        <div class="delete" @click="deleteproject()">
                            <delete-button ></delete-button> 
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


export default {
    props: {      
        projectData:{
            type: Object,
            default: () =>({}),

        }
    },
    components:{
    CloseButton,
    DeleteButton,
    SaveButton
    
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

</style>