<template>
<div>
<form class="md-layout" novalidate @submit.prevent="validateCreate">
<div class="md-layout">
<div class="md-layout-item">
<md-content>

<div class="md-layout-item">
<md-field :class="getValidationClass('projectname')">
<label for="projectname">project name</label>
<md-input v-model="$v.projectname.$model"></md-input>
<span class="md-error" v-if="!$v.projectname.required">project name is required</span> 
</md-field>
</div>

<div class="md-layout-item">
<md-field :class="getValidationClass('country')">
<label for="country">country</label>
<md-select v-model="$v.country.$model">
<md-option v-for="item in countrylist" :key=item :value=item>{{item}}</md-option>
</md-select>
<span class="md-error" v-if="!$v.country.required">country is required</span> 
</md-field>
</div>

<div class="md-layout-item">
<md-field :class="getValidationClass('team')">
<label for="team">team members</label>
<md-select v-model="$v.team.$model" multiple>
<md-option v-for="item in teamlist" :key=item :value=item>{{item}}</md-option>
</md-select>
<span class="md-error" v-if="!$v.team.required">team members is required</span> 
</md-field>
</div>

<div class="md-layout-item">
<md-field :class="getValidationClass('file')">
<label for="team">Select share point project folder</label>
<md-file v-model="$v.file.$model" placeholder="upload file here" />
<span class="md-error" v-if="!$v.file.required">please upload file</span> 
</md-field>
</div>

 <md-card-actions>
 <md-button class="md-primary" v-on:click="validateProject" >create</md-button>
 </md-card-actions>

</md-content>
</div>
</div>

</form>
</div>
</template>
<script lang="ts">
import Vue from 'vue'
import {Validate} from 'vuelidate-property-decorators'
import {required} from 'vuelidate/lib/validators'
import {validationMixin} from 'vuelidate'
import {Component} from 'vue-property-decorator'
import VueMaterial  from 'vue-material'
Vue.use(VueMaterial)

@Component({
    mixins:[validationMixin],
})
export default class Create extends Vue{
    @Validate({required})
    projectname='';
    @Validate({required})
    country='';
    @Validate({required})
    team=[];
    @Validate({required})
    file=null;


    getCountry(){
	return['','INDIA','UK','SINGAPORE']
    }
    getTeam(){
	return['syam','girish','akshay','ujjwal']
    }

    countrylist= this.getCountry()
    teamlist=this.getTeam()
    validateProject (){
	this.$v.$touch()
	if (!this.$v.$invalid){
	this.submit()
	}
    }
    submit(){
	this.$router.push("/login")
    }

    getValidationClass(fieldName){
    const field=this.$v[fieldName]
    if (field){
    return{
    'md-invalid': field.$invalid && field.$dirty
    }	
    }
    }
}
</script>
