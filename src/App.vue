<template>
    <div class="text-white grid grid-cols-12">  
      <div class="col-span-12 bg-blue-sky md:col-span-4 h-screen">
        <Sidebar />
      </div>
      <div class="col-span-12 bg-blue-dark md:col-span-8">
          <Content />
      </div>  
    </div>    
</template>

<script>

import Sidebar from "@/components/Sidebar.vue";
import Content from "@/components/Content.vue";

export default {
  name: 'App',
  components: {
   Sidebar,
   Content
  },
 
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
