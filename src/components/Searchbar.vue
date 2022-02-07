<template>
    <div class="row">
        <div class="col">
            <div class="card card-body">
        <input type="text" v-model="search" class="form-control"  placeholder="..Search input">

            </div>
        </div>
    </div>
    <table class="table table-striped">
        <tr class="bg-info">
            <th class="bg-info" data-colname="name" data-order="desc">name</th>
        </tr>
    </table>
    <tbody id="myTable">

    </tbody>

</template>

<script>
var testArray = [{'name': 'test1'},{'name': 'äpple'},{'name': 'päron'}],

buildtable(testArray)
function buildtable(data){
    var table = document.getElementById('myTable')
    table.innerHTML = ''
    for(var i = 0; i < data.lenght i++)
    {
        var row = 

    }
}
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