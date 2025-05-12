<script setup lang="ts">

</script>

<template>
  <div class="login-body">
    <a-row>
      <a-col class="login-body-left" :span="16">

      </a-col>
      <a-col class="login-body-right" :span="8">
        <div class="login-body-right-div">
           <a-card>

           </a-card>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<style scoped>
.login-body {
  height: 100vh;
  width: 100vw;
}

.login-body-left {
  height: 100vh;
}

.login-body-right {
  height: 100vh;
}
.login-body-right-div {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
}
</style>
