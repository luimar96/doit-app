<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <button class="delete-btn">
        <i class="delete">Delete</i>
    </button>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.delete-btn{
    width: 100%;
    height: 100%;
    border-radius: 1em;
    border: none;
    background-color: #EEB3B3;
    box-shadow: 0px 3px 8px 1px #888888;
    cursor: pointer;
}
.delete{
    font-size: 25px;
    opacity: 0.8;
}
.delete-btn:hover {background-color:#d33d3d}
.delete-btn:active {
  transform: translateY(4px);
}
</style>
