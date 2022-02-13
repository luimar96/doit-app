<template>
	<div class="project-grid"  >
		<OperatorItem v-for="Employee in dataFromAPI" v-bind:key="Employee.EmployeeName"  v-bind:projectData="Employee" />
    </div>
</template>
<script>
import OperatorItem from "../components/OperatorItem.vue"

export default ({
    components: {
OperatorItem
    },
     data:() => ({
        url: `http://localhost:37164/api/Employee/`,
        dataFromAPI: [],
    }),
     async mounted(){
    console.log("url: ",this.url)
    let response;

    response = await fetch(
      this.url + `get`
      );

    const data = await response.json();
    console.log("data from response",data)
    this.dataFromAPI = data;
  }

})
</script>

<style scoped>
.project-grid{
    padding-bottom: 70px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

</style>