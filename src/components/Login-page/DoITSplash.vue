<template>
    <div class="DoIT-Splash-Container">
        <img src="@/assets/people.png" alt="people" />
        <div class="text">
            <h1 class="app-name" >DoIT</h1>           
            <p class="flavour-text">Helps you to better manage your task</p>     
        </div>    
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
.text{
    width: 100%;
    margin-bottom: auto;
}
.app-name{
    width: 100%;
    font-size: 700%;
    margin:0;
    padding-left: 7vw;
}
.flavour-text{
    margin: 0px;
    font-size: 200%;
    width: 100vw;
    opacity: 50%;
    margin-left: 3vw;
    font-weight: bold;
}
.DoIT-Splash-Container{
    display: flex;
    flex-direction: column;
    max-width: 500px;
    min-width: 250px;
    min-height: 80%;
}

</style>