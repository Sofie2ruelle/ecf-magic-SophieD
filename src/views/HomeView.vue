<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Home msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'
import Home from './Home.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Home
}
}
</script>
