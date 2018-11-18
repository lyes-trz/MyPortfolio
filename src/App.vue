<template>
  <div>
       <app-header></app-header>
       <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  export default {
         components: {
             appHeader: Header  
         },

       
     }

</script>

