<template>
    <div class="home">
        <Bg class="bg"></Bg>
        <Navbar></Navbar>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import Navbar from '@/components/Navbar.vue';
import Bg from '@/components/Bg.vue';


export default {
    name: 'home',
    components: {
        // HelloWorld,
        Navbar,
        Bg,
    },
};
</script>
<style lang="less" scoped>
    .home{
      position: relative;
      .bg{
        position: absolute;
        width: 100%;
        top: 0;
        z-index: -1;
      }

    }
</style>
