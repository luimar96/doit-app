<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <button class="save-btn">
        <i class="save">Save</i>
    </button>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.save-btn{
    width: 100%;
    height: 100%;
    border-radius: 15px;
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
.save{
    font-size: 25px;
    opacity: 0.8;
}

.save-btn:hover {
    background-color: #9c8beb;
}
.save-btn:active {
  transform: translateY(4px);
}
</style>
