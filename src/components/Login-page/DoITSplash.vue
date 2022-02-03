<template>
    <div class="DoIT-Splash-Container">
        <img src="@/assets/people.png" alt="people" />
        <h1 >DoIT</h1>           
        <p>Helps you to better manage your task</p>         
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
*{
    font-family: 'Roboto', sans-serif;
}
img{
    width: 100%;
    margin-top: auto;
}
h1{
    width: 100%;
   font-size:10vw;
   margin:0;
   margin-left: 7vw;
}
p{
    margin: 0px;
    font-size: 2.5vw;
    width: 100vw;
    opacity: 50%;
    margin-left: 3vw;
    font-weight: bold;
    margin-bottom: auto;
}
.DoIT-Splash-Container{
    display: flex;
    flex-direction: column;
    max-width: 500px;
    min-width: 250px;
    min-height: 80%;
}

</style>