<template>
    <div>
        <input type="text" v-model="search"  placeholder="..Search input">
    </div>

</template>

<script>
export default {

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
    },
}
function myfunc(){
    var input;
    input = document.getElementById(search);
    filter = input.value.toUpperCase();

}

</script>

<style>
input{
      width: 497px;
  height: 81px;
  border-radius: 1em;
  margin-top: 1em;
  background-color:#FAF9F8 ;
  box-shadow: 0px 3px 8px 1px #888888;
}
</style>