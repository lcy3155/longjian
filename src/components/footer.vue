<template>
  <div class="footer">
    <div class="bottom-tabbar-wrapper">
      <div class="bottom-tabbar">
        <a class="bottom-tabbar__item" @click="tab1" v-bind:class="{active:cur==1}">
          <span class="icon">
              <img src="../assets/images/bottom_icon01.png"/>
              <img class="lhimg" src="../assets/images/bottom_icon01_lh.png"/>
          </span>
          <p class="label">水晶屋</p>
        </a>
        <a  class="bottom-tabbar__item "  @click="tab2" v-bind:class="{active:cur==2}">
          <span class="icon">
              <img src="../assets/images/bottom_icon02.png"/>
              <img class="lhimg" src="../assets/images/bottom_icon02_lh.png"/>
          </span>
          <p class="label">服务中心</p>
        </a>
        <a  class="bottom-tabbar__item "  @click="tab4" v-bind:class="{active:cur==4}">
          <span class="icon">
              <img src="../assets/images/bottom_icon02_1.png"/>
              <img class="lhimg" src="../assets/images/bottom_icon02_lh_1.png"/>
          </span>
          <p class="label">市场</p>
        </a>
        <a  class="bottom-tabbar__item " @click="tab3" v-bind:class="{active:cur==3}">
          <span class="icon">
              <img src="../assets/images/bottom_icon03.png"/>
              <img class="lhimg" src="../assets/images/bottom_icon03_lh.png"/>
          </span>
          <p class="label">我的水晶</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'footers',
    props:["title","cur"],
    data () {
    return {
     
    
    }
  },
  methods: {
    tab1(){
      this.$router.push({path:'/index'});
    
    },
    tab2(){
      this.$router.push({path:'/server'});
      // window.location.href="http://kf.rpsjs.top/php/app.php?widget-mobile";
      // window.location.href="http://mag.meinuovip.com/Web/im.aspx?_=t&accountid=111404";
    },
    tab3(){
      this.$router.push({path:'/center'});
    },
    tab4(){
      this.$router.push({path:'/market'});
    }
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>

