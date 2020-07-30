<template>
<div>
<form class="md-layout" >
<div class="md-layout">
<div class="md-layout-item"></div>
<div class="md-layout-item">
<div class="elevation-demo">
    <md-content class="md-elevation-12">
     <md-field :class="getValidationClass('username')">
      <label for="username">username</label> 
      <md-input v-model="$v.username.$model"></md-input>
      <span class="md-error" v-if="!$v.username.required">username is required</span>
    </md-field >
    <md-field :class="getValidationClass('password')">
      <label>Password </label>
      <md-input type="password" v-model="$v.password.$model"></md-input>
      <span class="md-error" v-if="!$v.password.required">password is required</span>
    </md-field>
    <md-card-actions>
     <md-button class="md-primary" v-on:click="validateUser" >login</md-button>
    </md-card-actions>
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
import { Component } from 'vue-property-decorator';
import VueMaterial from 'vue-material'
import VueRouter from 'vue-router'
import {Validations} from 'vuelidate-property-decorators'
import {required} from 'vuelidate/lib/validators'
import {validationMixin} from 'vuelidate'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import server from '../config.ts'
Vue.use(axios,VueAxios)
Vue.use(VueMaterial)
Vue.use(VueRouter)
@Component({ 
    mixins:[validationMixin],
   
})
export default class LoginBox extends Vue {
    username='';
    password='';
    
    @Validations()
    validations = {
        username: {required},
        password: {required}
    }
    validateUser (){
	this.$v.$touch()
	if (!this.$v.$invalid){
	this.submit()
	}
    }
    goto(url){
    this.$router.push(url)
    }
    submit(){
	console.log(server.API)
	const app = this;
	axios.post(server.API+':'+server.PORT+'/login',{name: app.username, password: app.pasword}).then(function(response){ if (response.data.status==="ok"){
	app.$router.push("/create")
	}});
    }
    getValidationClass (fieldName) {
    /*this function checks if validation has failed in this field and
	then applies the class md-invalid and enables the error div*/

	const field = this.$v[fieldName]
	
	if (field) {

	return {	    
	'md-invalid': field.$invalid && field.$dirty
	}
	}     
	}
}
 </script>
