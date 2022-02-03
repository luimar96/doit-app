<template>
    <div class="login-container">
        <div class="username">
        <input type="text" name="username" class="login-input" id="username" placeholder="Username...">
        </div>

        <div class="">
        <input type="password" name="password" class="login-input" id="password" placeholder="Password...">
        </div>

        <div class="button">
        <button class="login-btn" aria-placeholder="login">
            <router-link to="/overview" class="login-text">LOGIN</router-link>
        </button>
        </div>
        <router-view />
  </div>
</template>
<script>


export default ({

})
</script>
<style scoped>
.login-container{
  display: flex;
  flex-direction: column;
}

.username{
  margin-top: auto;
}

.button{
    margin-bottom: auto;
}

.login-btn{
  width: 84.5%;
  height: 60px;
  border-radius: 15px;
  margin-top: 2em;
  background-color: #BEB3EE;
  box-shadow: 0px 3px 8px 1px #888888;

}
.login-text{
  font-size: 22px;
  text-decoration: none;
  font-weight: bold;
  color: purple;
}
.login-input{
  width: 80%;
  height: 60px;
  font-size: 20px;
  padding-left: 3%;
  border-radius: 15px;
  margin-top: 15px;
  background-color:#FAF9F8 ;
  box-shadow: 0 3px 4px 0px gray;
}

::placeholder {
  font-size: 20px;
}
</style>
