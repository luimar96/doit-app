<template>
  <div class="vue-modal" v-show="isOpen">
    <div class="backdrop" @click="toggleOpen()"></div>
    <div class="modal-content">
      <h1>Add Task</h1>
      <div class="close-button" @click="toggleOpen()">
        <close-button></close-button>
      </div>
      <form class="form" @submit.prevent="postData" method="post">
        <div class="inputs">

          <div class="input-field">
            <input type="text" name="tasktName" v-model="posts.taskName" placeholder="Task Name..."/>
          </div>

          <div class="input-field">
            <Multiselect
              v-model="value"
              mode="tags"
              placeholder="Assign Employees"
              :options="employees"
              :search="true"
              class="multiselect"
            />
          </div>

          <div class="input-field">
            <label class="label">Due Date</label>
            <input type="date" name="dueDate" v-model="posts.dueDate"/>
          </div>

            <div class="input-field">
              <textarea
                name="description"
                placeholder="Task Description..."
                id=""
                cols="30"
                rows="10"
                v-model="posts.description">
              </textarea>
          </div>
        </div>
        <div class="add" type="submit">
          <add-button></add-button>
        </div>
      </form>
      <!--<div>
                    <button class="status-btn">
                        Status
                    </button>
                </div>    -->
    </div>
  </div>
</template>

<script>
import AddButton from "../components/Buttons/AddButton.vue";
import CloseButton from "../components/Buttons/CloseButton.vue";
import Multiselect from "@vueform/multiselect";

export default {
  props: {
    projectData: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    Multiselect,
    AddButton,
    CloseButton,
  },
  data: () => ({
    url: `http://localhost:37164/api/employee/get`,
    isOpen: false,
    value: [],
    posts: {
      taskName: null,
      dueDate: null,
      description: null,
    },
    ticketheadid: null,
    employeeId: null,
    createdDate: new Date().toLocaleDateString(),
    status: "in-progress",

    employees: {},
  }),
  methods: {
    
    toggleOpen() {
      this.isOpen = !this.isOpen;
    },
    async postData() {
        fetch("http://localhost:37164/api/tickethead/post", {
        method: "POST",
        body: JSON.stringify({
          TicketHeadName: this.posts.taskName,
          Description: this.posts.description,
          DueDate: this.posts.dueDate,
          ProjectId: this.projectData.ProjectId,
          Created: this.createdDate,
          Status: this.status,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      console.log("value", this.value);
      setTimeout(() => { this.getInfo() }, 1000);
    },

    async getInfo() {
      const responseTicketHeadId = await fetch(
        "http://localhost:37164/api/ticketHead/getlatestticketheadid"
      );
      const dataTickeHeadId = await responseTicketHeadId.json();
      this.ticketheadid = dataTickeHeadId;

      for (let i = 0; i < this.value.length; i++) {
        const response = await fetch(
          "http://localhost:37164/api/employee/GetEmployeeId/?emp=" +
            this.value[i]
        );
        const data = await response.json();
        this.employeeId = data;
        this.postTicket();
      }
      //this.$router.go();
    },
    postTicket() {
      fetch("http://localhost:37164/api/ticket/post", {
        method: "POST",
        body: JSON.stringify({
          EmployeeId: this.employeeId[0].EmployeeId,
          TicketHeadId: this.ticketheadid[0].TicketHeadId,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    },
  },
  async mounted() {
    let employeestemp = [];
    const response = await fetch(this.url);
    const data = await response.json();
    this.employees = data;

    for (let i = 0; i < data.length; i++) {
      const employeename = data[i].EmployeeName;
      employeestemp.push(employeename);
    }
    this.employees = employeestemp;

  },
};
</script>
<style src="@vueform/multiselect/themes/default.css"></style>
<style scoped>
.vue-modal{
    position: -webkit-sticky;
    top: 0px;
    bottom: 0px;
    width: 100vw;
    height: 100vh;
    background-color: rgb(0, 0, 0, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 11;
}
.backdrop{
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color:rgba(0, 0, 0, 0.4);
    z-index: 10;
}
.modal-content{  
    margin-top: auto;
    margin-bottom: auto;
    width: 70vw;
    min-width: 400px;
    max-width: 850px;
    height: 90%;
    min-height: 100px;
    max-height: 750px;
    overflow: hidden;
    background-color: white;
    border-radius: 20px;
    position: relative;
    z-index: 11;

}

.form{
    display: flex;
    flex-direction: column;
    height: 88%;
    margin: 0px;
    width: 100%;
    margin-left: 0px;
}

.inputs{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-top: solid #beb3ee 1px;
    border-bottom: solid #beb3ee 1px;
    margin: 0px auto;
    width: 85%;
    height: 90%;
    overflow: auto;
    overflow-x: hidden;
    flex-shrink: 1;
}

.label{
    padding-left: 35px;
    font-size: 25px;
    opacity: 0.80;
    margin: 0px;
}

.input-field{
    display:flex;
    flex-direction: column;
    margin: 20px 0px;
}

.input-field > input{
    box-shadow: none;
    width: 85%;
    margin: 0px auto;
    height: 7vh;
    min-height: 50px;
    max-height: 70px;
}

.input-field > textarea{
    width: 85%;
    margin: 0px auto;
    border-radius: 15px;
    min-height: 100px;
    max-height: 250px;
    border: #7E69DF solid 1px;
    resize: none;
    padding: 20px;
    font-size: 20px;
}
textarea:focus{
    outline: #7E69DF solid 2px;
}

.add{
    height: 60px;
    margin: 2vh 150px 40px 150px;
    flex-shrink: 0;
}

.multiselect {
  width: 90%;
  margin: auto;
  height: 60px;
  padding: 20px;
  border: #7e69df solid 1px;
  border-radius: 15px 15px 0px 0px;
  font-size: 25px;
}

.status-btn {
  font-size: 20px;
  width: 242px;
  height: 90px;
  border-radius: 1em;
  border: none;
  background-color: #beb3ee;
  box-shadow: 0px 3px 8px 1px #888888;
  cursor: pointer;
}

h1{
    text-align: center;
    font-size:48px;
    opacity: 70%;
    margin: 2vh 0px;
}
.close-button{
    position: absolute;
    right: 0px;
    top: 0px;
    margin: 10px;
}
.fa-plus {
  font-size: 4em;
  opacity: 50%;
}
.status-btn:hover {
  background-color: #9c8beb;
}
.status-btn:active {
  transform: translateY(4px);
}
</style>

<style>
.multiselect-tag {
  font-size: 15px;
  padding: 5px;
  padding-left: 15px;
  background-color: #beb3ee;
  background: #beb3ee;
}
.multiselect.is-active{
  box-shadow: none;
}
</style>
