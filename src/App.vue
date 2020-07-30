<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <login-box> </login-box>
  </div>
</template>

<script lang="ts">
import {Component} from 'vue-property-decorator';
import LoginBox from './components/Login.vue';
import Vue from 'vue';

@Component({
  components: {
    LoginBox
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
