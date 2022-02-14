<template>
  <div class="vue-modal" v-show="isOpen">
    <div class="content">
      <div class="close" @click="toggleOpen()">
        <close-button></close-button>
      </div>
      <h1>Add Task</h1>
      <form @submit.prevent="postData" method="post">
        <div class="input-field">
          <label for="">Task Name</label>
          <input type="text" name="tasktName" v-model="posts.taskName" />
        </div>

        <div class="input-field">
          <label class="typo__label">Select Employees</label>
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
          <label for="">Due Date</label>
          <input type="text" name="dueDate" v-model="posts.dueDate" />
        </div>
        <div class="description-field">
          <label for="">Description</label>
          <textarea
            name="description"
            id=""
            cols="30"
            rows="10"
            v-model="posts.description"
          ></textarea>
        </div>
        <div class="addbutton" type="submit">
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
      this.$router.go();
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
    console.log("employees array: ", this.employees);
  },
};
</script>
<style src="@vueform/multiselect/themes/default.css"></style>
<style>
.multiselect {
  width: 53%;
  margin: 0;
  height: 80px;
  border: #7e69df solid 1px;
  border-radius: 15px;
  box-shadow: 0px 3px 8px 1px #888888;
  font-size: 25px;
}
.multiselect-tag {
  font-size: 25px;
  padding: 1rem;
  background: #9c8beb;
}

.vue-modal {
  z-index: 1;
}
.content {
  width: 100em;
  height: 60rem;
  background-color: white;
  border-radius: 5px;
  position: relative;
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
