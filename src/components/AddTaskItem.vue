<template>
  <div class="vue-modal" v-show="isOpen">        
        <div class="model-content">
            <div class="close"  @click="toggleOpen()">
                <close-button></close-button>
            </div>
                <h1>Add Task</h1>
               <form @submit.prevent="postData" method="post">
                <div class="input-field">
                    <label for="">Task Name</label>
                    <input type="text" name="tasktName" v-model="taskName">
                </div>
                <div class="input-field">
                    <label for="">Operator??</label>
                    <Multiselect
                    v-model="value"
                    mode="tags"
                    placeholder="Assign Employees"
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
        </div>        
</div>
</template>

<script>
import AddButton from "../components/Buttons/AddButton.vue"
import CloseButton from "../components/Buttons/CloseButton.vue"
import Multiselect from '@vueform/multiselect'
<style src="@vueform/multiselect/themes/default.css"></style>

export default {
    components: {
    Multiselect,
    AddButton,
    CloseButton
  },
     data:() => ({
        url: `http://localhost:37164/api/employee/get`,
        isOpen:false,
        value: [],
        options: ['Luisa', 'Lucas', 'Max'],
        employee:[]
    }),
    methods:{
        toggleOpen(){
               this.isOpen = !this.isOpen;
           }
    },
    async mounted(){
        /*
        console.log(this.url)
        let response;
            
        response = await fetch(
        this.url
        );

        [
            {
                "EmployeeName": "Luisa"
            },
            {
                "EmployeeName": "Lucas"
            }
        ]

        const data = await response.json();
        this.options = JSON.stringify(data[0].EmployeeName)
        //this.options = data;
        console.log("employeeeees:", data);
        console.log("forloop employee:", this.options.EmployeeName);
        */
  },

}
</script>

<style>
.model-content{    
    width:100rem;
    height:60rem;
    background-color: white;
    border-radius: 5px;
    position: relative;

}

</style>