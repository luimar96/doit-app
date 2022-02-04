<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<div>
    <div>
      <ul>
        <li v-for="task in dataFromAPI" v-bind:key="task.TicketHeadName">
          <button class="add-btn">
            <p>{{task.TicketHeadName}}</p>
        </button>

        </li>
      </ul>
    </div>
</div>
</template>
<script>
//import OverView from '../views/OverviewPage.vue'

export default {
  components:{
    //OverView
  },
  data:() => ({
        url: `http://localhost:37164/api/tickethead/`,
        dataFromAPI: [],
    }),
  async mounted(){
    console.log(this.url)
    let response;
        
    response = await fetch(
      this.url + `get`
      );

    const data = await response.json();
    console.log(data)
    this.dataFromAPI = data;
  }
}
</script>
<style scoped>
.add-btn{
    width: 800px;
    height: 60px;
    border-radius: 1em;
    border: none;
    background-color: #eeedfe;
    box-shadow: 0px 3px 8px 1px #888888;
    cursor: pointer;
    margin: 0.5em;
}
.fa-plus{
    font-size: 4em;
    opacity: 50%;
}
.add-btn:hover {background-color: #a99be5}
.add-btn:active {
  transform: translateY(4px);
}
p {
  color: rgb(0, 0, 0);
  font-size: 1.9em;
  margin-top: 1em;
  margin-left: 0.1em;
  margin-right: 0.1em;
  text-align: left;
  margin-left: 1em;
  margin-bottom: 1em;
}
ul{
    list-style: none;
}
</style>
