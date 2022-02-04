<template>
    <div>
         <ul class="nav-list">
             <h1 class="nav-item "><a href="" class="logo">DoIT</a></h1>
            <li class="nav-item"><a href="" class="link">Projects</a></li>
            <li class="nav-item"><a href="" class="link">Operators</a></li>           
         </ul>              
    </div>
</template>

<script>
export default {
    components: {
        
    }
}
</script>
<style scoped>
.nav-list{
    background-color: #FFFFFF;
    box-shadow: 0px 3px 8px 1px #888888;
    margin: 0;
    padding: 1rem 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.nav-item{
  list-style: none;
  margin-right: 2rem;
}
.nav-item a{
    text-decoration: none;   
}
.nav-item:first-child{
    margin-right:auto ;
    margin-left: 2rem;
    font-size:90px;  
}
.logo{
    color: black;
    opacity: 75%;
}
.link{
    color:#7E69DF;
    font-size: 2em;
    
}


</style>
