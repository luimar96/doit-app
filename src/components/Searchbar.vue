<template>
    <div>
        <input type="text" v-model="search"  placeholder="..Search input">
    </div>

</template>

<script>
export default {
    data: () => ({
        search = ''
    }),
    metods: {
        checkname() {
            console.log(`check name: ${this.search}`);
        }
    }

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