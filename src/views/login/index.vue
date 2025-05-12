<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="login-wrapper">
      <div class="header">Login</div>
      <div class="form-wrapper">
        <a-form
          layout="vertical"
        >
          <a-form-item>
            <input type="text" name="username" placeholder="username" class="input-item">
          </a-form-item>
          <a-form-item>
            <input type="password" name="password" placeholder="password" class="input-item">
          </a-form-item>
        </a-form>
        <div id="login" class="btn">Login</div>
      </div>
      <div class="msg">
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 0;
  margin: 0;
  font-family: 'Open Sans Light';
  letter-spacing: .05em;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
}

.login-wrapper {
  background-color: #fff;
  width: 250px;
  height: 500px;
  padding: 0 50px;
  position: relative;
  left: 50%;
  border-radius: 15px;
  top:50%;
  transform: translate(-50%,-50%);
}
.login-wrapper .header {
  font-size:  30px;
  font-weight: bold;
  text-align: center;
  line-height: 200px;
}

.login-wrapper .form-wrapper .input-item {
  display: block;
  width: 100%;
  margin-bottom: 20px;
  border: none;
  padding: 10px;
  border-bottom: 2px solid rgb(128,125,125);
  font-size: 15px;
  outline: none;
}

.login-wrapper .form-wrapper .input-item::placeholder {
  text-transform: uppercase;
}

.login-wrapper .form-wrapper .btn {
  text-align: center;
  padding: 5px;
  margin-top: 40px;
  background-image: linear-gradient(to right,#fbc2eb,#a6c1ee);;
  color: #fff;
}

.btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  height:  30px;
}

.login-wrapper  .msg {
  text-align: center;
  line-height: 80px;
}

.login-wrapper  .msg a  {
  text-decoration-line:  none;
  color: #a6c1ee;
}
</style>
