<template>
  <div class="home">
    <img src="../assets/people.png" alt="people" />
    <HelloWorld msg="DoIT" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
