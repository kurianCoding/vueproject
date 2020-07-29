<template>
<div>
<form @submit.prevent="submit">
<div class="md-layout">
<div class="md-layout-item"></div>
<div class="md-layout-item">
<div class="elevation-demo">
    <md-content class="md-elevation-12">
     <md-field>
      <label >username</label> 
      <md-input ></md-input>

    </md-field>
    <md-field>
      <label>Password </label>
      <md-input  type="password"></md-input>
    </md-field>
    <md-button>login</md-button>
    </md-content>
</div>
</div>
<div class="md-layout-item"></div>
</div>
</form>
</div>
</template>
<script>
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)

export default{
    name:'loginBox',
    data: function(){
	return{
     }
    }
}
</script>
