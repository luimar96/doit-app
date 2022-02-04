<template>
  <div class="Overview">
    <h1>Overview Page!</h1>
    <searchbar />
    <description />


  </div>
</template>
<script>
import Searchbar from "../components/Searchbar.vue";
import description from "../components/DescriptionBox.vue";

export default {
  components: {
    Searchbar,
    description,
  }
}
</script>
<style scoped>

</style>
