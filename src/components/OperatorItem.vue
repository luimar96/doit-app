
<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
     <div class="container" @click="openProjectView()" >     
        <div class="dot"><i class="fa fa-folder"></i>
          <i class="fa fa-ellipsis-h" @click.stop="openEditView()" ></i>
        </div>
        <div class="project-name">           
               <p>{{projectData.ProjectName}} </p>   
        </div> 
    </div>  
         <transition name="fade" apper>
          <Editmodal v-bind:projectData="projectData" ref="modal"/>   
        </transition>  
   
         
    <transition name="fade" apper>
    <modal :open="isOpen" @close="isOpen = !isOpen">
      <p>Lorem ipsumaihgirgpwgjrowjrophgwrhhrwhrwhrwwrhwrhrhw</p>
    </modal>
    </transition>   
     
      
  
</template>
<script>
import {ref} from "vue"
import Modal from "../views/Modal.vue"
import Editmodal from "../components/editmodal.vue"
export default {
    props: {
        projectData :{
            type: Object,
            default: () => ({}),
        }

    },
     setup () {
      const isOpen = ref(false)

      return { isOpen }
    },
    components: {
        Modal,
        Editmodal
        
    },
    data: () =>({
       url: `http://localhost:37164/api/project/delete/`,
    }),
    methods:{
     
      openEditView(){
        console.log("openedtiview")
        this.$refs.modal.toggleOpen();
      },
      openProjectView(){
        this.isOpen = true;
      console.log("openprojectview")

      }
    },
    
   
}
</script>
<style scoped>
.projects{
   
}
.container{
    margin: 50px; 
    width: 35em; 
    height: 15em;
    border-radius:1em;
    background-color: #dedcff8e;
    box-shadow: 0px 3px 8px 1px #888888;
    display: flex;
    flex-direction: column;
    cursor: pointer;
}
.project-name{
    padding:30px;
    width: 10em;
    font-size:25px;
}
.dot{
   margin-top:10px;
   margin-right: 20px;
   font-size:2em;
   display: flex;
   justify-content: flex-end;
}
.fa-ellipsis-h{
   opacity: 70%;   
}
.fa-folder{
  margin-right: auto;
  margin-left: 1rem;
  margin-top:5px;
  color:#908989a8;
}
.fa-ellipsis-h:hover{
 color: rgb(184, 12, 12);
}
.container:hover {background-color: #a99be5}
.container:active {
  transform: translateY(4px);
}

.delete{
 
  display:flex;
  width: 10em;
  height: 10em;
  margin-right:1em;
  background-color: rgb(10, 122, 219);
  

}
button{
  
  background-color: #EEB3B3;
  cursor: pointer;
  top:1px;
  
}

</style>