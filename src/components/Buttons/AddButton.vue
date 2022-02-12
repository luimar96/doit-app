<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <button class="add-btn">
        <i class="fa fa-plus"></i>
    </button>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.add-btn{
    width: 100%;
    height: 100%;
    border-radius: 1em;
    border: none;
    background-color: #BEB3EE;
    box-shadow: 0px 3px 8px 1px #888888;
    cursor: pointer;
}
.fa-plus{
    margin: auto auto;
    font-size: 300%;
    opacity: 50%;
}
.add-btn:hover {background-color: #9c8beb}
.add-btn:active {
  transform: translateY(4px);
}
</style>
