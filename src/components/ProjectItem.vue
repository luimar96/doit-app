
<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="container">
        <div class="dot">...</div>
        <div class="project-name">           
                Ämnesövergripande projekt inom systemutveckling            
        </div>     
    </div>   
</template>
<script>
export default {
    components: {
        
    },
    data: () => ({
        test: true

    }),
    computed: {
     
    }
}
</script>
<style scoped>
.container{
    margin: 50px; 
    width: 25em; 
    height: 11em;
    border-radius:1em;
    background-color: #dedcff8e;
    box-shadow: 0px 3px 8px 1px #888888;
    display: flex;
    flex-direction: column;
}
.project-name{
    padding:30px;
    width: 10em;
    font-size:20px;
}
.dot{
   margin-right: 20px;
   font-size:2em;
   align-self: flex-end;
}

</style>