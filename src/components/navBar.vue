<template>
    <div class="navbar">
        <h1 ><a href="" class="logo">DoIT</a></h1>
        <ul class="nav-list">
            <li class="nav-item"><a href="/Overview/" class="link">Projects</a></li>
        <li class="nav-item"><a href="/operators" class="link">Operators</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    components: {

    },

}
</script>
<style scoped>
.navbar{
    background-color: #FFFFFF;
    box-shadow: 0px 3px 8px 1px #888888;
    margin: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
}

.nav-list{
    padding-left: 50px;
    width: 100%;
    margin: 0;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

}
.nav-item a{
    text-decoration: none;
}
.nav-item{
    padding: 30px 70px 30px 0px;
    font-size: auto;
}
.nav-item::marker{
    font-size: 25px;
    color: #7E69DF;
}
.logo{
    color: rgba(0, 0, 0, 0.75);
    text-decoration: none;
    line-height: 100px;
    text-align:center;
    height: 0px;
    padding-left: 80px;
    font-size: 90px;

}
.link{
    color:#7E69DF;
    font-size: 2em;

}


</style>
