<template>
    <div class="home">
        <!--<Navbar></Navbar>-->
        <header id="header">
            <div class="logo">
                <img src="../assets/img/head.jpg" alt="">
                <a href="#">
                    <h1>雷&箫</h1>
                    <span>我心无窍，天道酬勤。</span>
                </a>
            </div>
        </header>
        <div class="content">
            <nav>
                <ul>
                    <li>Home</li>
                    <li>H/C</li>
                    <li>JS</li>
                    <li>Wx</li>
                    <li>Vue</li>
                    <li>other</li>
                    <li>own</li>
                </ul>
                <span>search</span>
            </nav>
            <div class="view">
                <el-carousel :interval="4000" type="card">
                    <el-carousel-item v-for="item in imgUrl" :key="item">
                        <img :src="item" alt="">
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
// import Navbar from '@/components/Navbar.vue';


export default {
    name: 'home',
    components: {
        // HelloWorld,
        // Navbar,
    },
    data() {
        return {
            imgUrl: [
                require('../assets/img/img1.jpg'),
                require('../assets/img/img2.jpg'),
                require('../assets/img/img3.jpg'),
                require('../assets/img/img4.jpg'),
                require('../assets/img/img5.jpg'),
                require('../assets/img/img6.jpg'),
            ],
        };
    },
};
</script>
<style lang="less" scoped>
    .home{
      height: 100%;
      background-image: url('../assets/img/bg.jpg');
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      #header{
        cursor: default;
        position: relative;
        text-align: center;
        z-index: 10001;
        /*margin-top: 3rem;*/
        .logo{
          img{
            width: 100px;
            height: 100px;
            border: 1px solid red;
            border-radius: 50%;
            margin-top: 50px;
          }
          a{
            color: white;
            text-decoration: none;
            h1{
              font-size: 20px;
              margin: 10px 0;
            }
            span{
              font-size: 12px;
            }
          }
        }
      }
      .content{
        width: 80%;
        margin: 20px auto 0;
        font-size: 12px;
        color: white;
        nav{
          display: flex;
          justify-content: space-between;
          ul{
            width: 50%;
            list-style: none;
            display: flex;
            justify-content: space-between;
            li{
              width: 80px;
              text-align: center;
              line-height: 30px;
              padding: 5px;
              cursor: pointer;
            }
            li:hover{
              background: deepskyblue;
            }
          }
          span{
            padding:5px 10px;
            line-height: 30px;
            cursor: pointer;
          }
        }
        .view{
          margin-top: 46px;
          .el-carousel__item img {
            width: 100%;
            height: 100%;
            /*color: #475669;*/
            /*font-size: 14px;*/
            object-fit: cover;
            opacity: 0.75;
            /*line-height: 200px;*/
            margin: 0;
          }
          .el-carousel__item:nth-child(2n) {
            background-color: #99a9bf;
          }
          .el-carousel__item:nth-child(2n+1) {
            background-color: #d3dce6;
          }
        }
      }
    }
</style>
