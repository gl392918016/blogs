<template>
  <div class="home">
    <Navbar></Navbar>
    <item></item>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import Navbar from '@/components/Navbar.vue';
import item from '@/components/item.vue';

export default {
  name: 'home',
  components: {
    // HelloWorld,
    Navbar,
    item,

  },
};
</script>
