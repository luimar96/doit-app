<template>
	<div class="project-grid"  >
		<ProjectItem  v-for="project in dataFromAPI" v-bind:key="project.ProjectName"  v-bind:projectName="project.ProjectName" />
    </div>
</template>
<script>
import ProjectItem from "../components/ProjectItem.vue"
export default ({
    components: {
ProjectItem
    },
     data:() => ({
        url: `http://localhost:37164/api/project/`,
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

.grid-item{
    margin: 2vw;
    width: 28vw;
    min-width: 380px;
    height: 200px;
    background-color: #DEDCFF;
}
</style>