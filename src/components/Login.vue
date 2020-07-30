<template>
<div>
<form class="md-layout" @submit.prevent="validateUser">
<div class="md-layout">
<div class="md-layout-item"></div>
<div class="md-layout-item">
<div class="elevation-demo">
    <md-content class="md-elevation-12">
     <md-field :class="getValidationClass('username')">
      <label for="username">username</label> 
      <md-input v-model="$v.username.$model"></md-input>
      <span class="md-error" v-if="!$v.username.required">username is required</span>
    </md-field>
    <md-field>
      <label>Password </label>
      <md-input  type="password"></md-input>
    </md-field>
    <md-card-actions>
     <md-button type="submit" class="md-primary" >login</md-button>
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
import { Validate} from 'vuelidate-property-decorators'
import {required} from 'vuelidate/lib/validators'
import {validationMixin} from 'vuelidate'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
Vue.use(Validate)
Vue.use(VueMaterial)
@Component({ 
    mixins:[validationMixin],
   
})
export default class LoginBox extends Vue {
    @Validate({required})
    username='';
    form ={
    username: null
    }
    validateUser (){
	this.$v.$touch()
    }
    getValidationClass (fieldName) {
	const field = this.$v[fieldName]

	if (field) {
	return {
	'md-invalid': field.$invalid && field.$dirty
	}
	}
      }
}
 </script>
