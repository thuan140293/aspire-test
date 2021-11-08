<template>
  <div class="main-layout">
    <Sidebar></Sidebar>
    <router-view></router-view>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
export default {
  name: "App",
  components: { Sidebar },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}

body{
  margin:0
}

.main-layout {
  display: flex;
}

@media screen and (max-width: 414px){
  .main-layout{
    display: block;
  }
}
</style>
