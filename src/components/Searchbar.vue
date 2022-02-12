<template>
        <input type="text" v-model="search"  placeholder="Search...">
</template>

<script>
export default {
   /*
    data: () => ({
        search: '',
        resources: [],

    }),
    computed: {
            filtertickets(){
                if(this.search){
                    return this.resources.filter((item) => {
                        return item.ÄNDRATILLNÅGOT.startsWith(this.search);
                    })
                }
            }
    },
    metods: {
        checkname() {
            console.log(`check name: ${this.search}`);
        }
    },*/
}
/*
function myfunc(){
    var input;
    input = document.getElementById(search);
    filter = input.value.toUpperCase();

}*/

</script>

<style>
input{
    width: 100%;
    height: 80px;
    border: #7E69DF solid 1px;
    border-radius: 15px;
    margin: auto 0px auto 0px;
    padding: 0px 20px 0px 20px;
    box-shadow: 0px 3px 8px 1px #888888;
    font-size: 25px;
}

input:focus{
    outline: #7E69DF solid 2px;
}
</style>