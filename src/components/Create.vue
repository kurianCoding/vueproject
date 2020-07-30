<template>
<div>
<form class="md-layout" novalidate @submit.prevent="validateCreate">
<div class="md-layout">
<div class="md-layout-item">
<md-content>
<md-field>
<label></label>
<md-input v-model="$v.username.$model"></md-input>
</md-field>
</md-content>
</div>
</div>
</form>
</div>
</template>
<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator'
import VueMaterial  from 'vue-material'

Vue.use(VueMaterial)

@Component
export default class Create extends Vue{}
</script>
