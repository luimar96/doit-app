<template>
    <div class="">
        <div class="">
        <input type="text" name="username" class="login-input" id="name" placeholder="Username..">
        </div>

        <div class="">
        <input type="text" name="password" class="login-input" id="name" placeholder="Password..">
        </div>

        <div>
        <button class="login-btn" aria-placeholder="login">
            <router-link to="/about" class="login-text">LOGIN</router-link></button>
        </div>
        <router-view />
        <HelloWorld  />
  </div>
</template>
<script>


export default ({
   
})
</script>
<style scoped>
.login-btn{
  width: 497px;
  height: 81px;
  border-radius: 1em;
  margin-top: 2em;
  background-color: #BEB3EE;
  box-shadow: 0px 3px 8px 1px #888888;
  
}
.login-text{
  font-size: 22px;
  text-decoration: none;
  font-weight: bold;
}
.login-input{
  width: 497px;
  height: 81px;
  border-radius: 1em;
  margin-top: 1em;
  background-color:#FAF9F8 ;
  box-shadow: 0px 3px 8px 1px #888888;
}


img{
  width: 25em;
  margin-top:0;
}
.login-container{
  margin-top: 10em;
}
h1{
  font-size: 5em;
  margin-bottom: 0;
}
::placeholder {
  font-size: 20px;
  padding-left: 4em;
  margin-top:2em
}
</style>
