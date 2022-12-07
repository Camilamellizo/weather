<template>
  <div class="container grid grid-cols-12  text-white mx-auto bg-[#100E1D]">
    <div class="col-span-4 "> <sideBar/></div>
    <div class="col-span-8 ">02 <conTent/></div>

  </div>
 
  
</template>

<script>

import sideBar from "@/components/sideBar.vue";
import conTent from "@/components/conTent.vue";

export default {
  name: 'App',
  components: {
   sideBar,
   conTent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
