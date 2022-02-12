<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <button class="close-btn">
        <i class="fa fa-close"></i>
    </button>
    
</template>
<script>
export default {
    components: {

    }
}
</script>

<style scoped>
.close-btn{
    width: 100%;
    height: 100%;
    border-radius: 1em;
    border: none;
    background-color: #EEB3B3;
    box-shadow: 0px 3px 8px 1px #888888;
    cursor: pointer;
}
.fa-close{
    font-size: 300%;
     opacity: 50%;
}
.close-btn:hover {background-color: #ee9999}
.close-btn:active {
  transform: translateY(4px);
}
</style>