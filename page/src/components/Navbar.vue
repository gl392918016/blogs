<template>
  <div class="navbar">
    <h2>雷&箫</h2>
    <ul>
      <li><router-link to="/">首页</router-link></li>
      <li><router-link to="/hc">html/css</router-link></li>
      <li><router-link to="/js">js</router-link></li>
      <li><router-link to="/wx">微信小程序</router-link></li>
      <li><router-link to="/random">杂七杂八</router-link></li>
      <li><router-link to="/own">个人中心</router-link></li>
    </ul>
    <p><router-link to="/bg">简历</router-link></p>
  </div>
</template>

<script>
export default {
    name: 'Navbar',
};

</script>
<style lang="less" scoped>
  *{
    color: white;
  }
  .navbar{
    width: 90%;
    height:50px;
    line-height: 50px;
    padding:0 5%;
    display: inline-block;
    background: rgba(61,188,245,0.8);
    /*opacity: 0.8;  61 188 245*/
    h2{
      display: inline-block;
      color: white;
      padding:0 20px;
    }
    ul{
      display: inline-block;
      list-style: none;
      li{
        display: inline-block;
        line-height: 50px;
        padding: 0 20px;
        list-style: none;
        a{
          text-decoration: none;
        }
      }
    }
    p{
      display: inline-block;
      line-height: 50px;
      float: right;
      font-size: 12px;
      a{
        text-decoration: none;
      }
    }

  }
</style>
