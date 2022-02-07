
<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
     <div class="container" >     
        <div class="dot"><i class="fa fa-folder"></i>
        <i class="fa fa-ellipsis-h"></i></div>
        <div class="project-name">           
               <p>{{projectName}} </p>   
        </div>     
    </div>     
</template>
<script>
export default {
    props: {
        projectName :{
            type: String,
            default: () => "",
        }

    },
    components: {
        
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
.container:hover {background-color: #a99be5}
.container:active {
  transform: translateY(4px);
}

</style>