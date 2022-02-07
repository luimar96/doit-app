<template>
    <div class="login-container">
        <div class="username">
        <h2 class="login-message">{{message}}</h2>
        <input type="text" v-model="username" name="username" class="login-input" id="username" placeholder="Username..." v:model="username" @keydown="ClearMessage">
        </div>

        <div class="">
        <input type="password" v-model="password" name="password" class="login-input" id="password" placeholder="Password..." v:model="password" @keydown="ClearMessage">
        </div>

        <div class="button">
            <button v-on:click="IsLogInOK" class="login-btn login-text" aria-placeholder="login">
              LOGIN
            </button>
        </div>
        
        
  </div>
</template>

<script>
export default {
  data:() => ({
    username:null,
    password:null,
    url: `http://localhost:37164/api/employee/login/`,
    logInBool: false,
    message: null
  }),
  methods: {
    async IsLogInOK(){
      this.message = null
      console.log(this.url, this.username, this.password)
      let response;

      response = await fetch(
        this.url + `?username=` + this.username + `&password=` + this.password
      );

      const data = await response.json();
      console.log(data)
      this.logInBool = data;

      console.log(this.logInBool)
      if (this.logInBool)
        return this.$router.push("/overview");
      else
        return this.message = "Username or Password was incorrect!"
    },

    ClearMessage(){
      this.message = "";
    }
  }
};
</script>
<style scoped>
.login-container{
  display: flex;
  flex-direction: column;
  max-width: 500px;
  min-width: 300px;
}

.username{
  position: relative;
  margin-top: 23vh;
  widows: 100%;
}

.button{
    margin-bottom: auto;
}

.login-btn{
  width: 100%;
  height: 60px;
  border-radius: 15px;
  margin-top: 20px;
  padding: 0px;
  background-color: #BEB3EE;
  box-shadow: 0px 3px 8px 1px #888888;
  
}
.login-text{
  font-size: 22px;
  text-decoration: none;
  font-weight: bold;
  color: rgb(53, 52, 53);
}
.login-message{
    position: absolute;
    top: -40px;
  margin-left: 20px;
  font-size: 16px;
  text-decoration: none;
  font-weight: bold;
  color: rgb(218, 16, 93);
}
.login-input{
  width: 97%;
  height: 60px;
  font-size: 20px;
  padding: 0 0 0 3%;
  border-radius: 15px;
  margin-top: 10px;
  background-color:#FAF9F8 ;
  box-shadow: 0 3px 4px 0px gray;
}

::placeholder {
  font-size: 20px;
}
</style>
