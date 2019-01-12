<template>
    <div id="i">
      <div class="red">1</div>
      <div class="blue">2</div>
      <div @click="sb()" class="sb">你是不是傻逼：<a>{{s}}</a> <span class="span">/{{b}}</span></div>
    </div>
</template>

<script>
export default {
    name: 'item',
    data() {
        return {
            s: '是',
            b: '否',
        };
    },
    methods: {
        sb() {
            console.log('点击了', this.s);
            const a = this.s;
            this.s = this.b;
            this.b = a;
        },
    },
};
</script>

<style lang="less" scoped>
  #i{
    /*display: flex;*/
    /*flex-direction: row;*/
    height: 100px;
    /*justify-content: space-between;*/
    /*flex-direction: row-reverse;*/
    /*flex-direction: column;*/
    /*flex-direction: column-reverse;*/
    /*flex-wrap:wrap;*/
    /*flex-wrap:wrap-reverse;*/
    /*align-content: space-between;*/
    .sb{
      width: 100%;
      line-height: 50px;
      .span{
        float: right;
      }

    }
    .sb:active{
      background: #999;
      color:white;
      a{
        -webkit-transition: transform 1s linear;
        -o-transition: transform 1s linear;
        transition: transform 1s linear;
        -webkit-transform: translateX(200px);
        -o-transform: translateX(200px);
        transform: translateX(200px);
      }
    }
    .red{
      width: 50px;
      height: 50px;
      background: red;
      color: white;
      line-height: 50px;
      text-align: center;
      /*order:0;*/
      /*flex-grow: 1;*/
    }
    .blue{
      width: 50px;
      height: 50px;
      background: blue;
      color: white;
      line-height: 50px;
      text-align: center;
      /*order:2;*/
      /*flex-grow: 1;*/
      align-self:flex-end;
    }
    .yellow{
      width: 50px;
      height: 50px;
      background: yellow;
      color: white;
      line-height: 50px;
      text-align: center;
      /*order: -1;*/
      /*flex-grow: 2;*/
    }
  }


</style>
