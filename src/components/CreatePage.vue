<template>
<div>
    <profile-tag :profile=profile></profile-tag>
</div>
</template>
<script lang="ts">
import Vue from 'vue';
import  ProfileTag from '@kurian2020/profiletag';
import { Component} from 'vue-property-decorator';
Vue.use(ProfileTag)

@Component
export default  class CreatePage extends Vue {
   private profile: object={
     name:"kurian",
     email:"kurian@mail.com",
     letter:"k",
   }
   component: [
    ProfileTag,
   ] 
}

</script>
