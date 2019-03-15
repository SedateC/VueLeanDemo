<template>
  <div id="app">

    <mt-button type="default" @click="show">default</mt-button>
    <mt-button type="primary" @click="show">primary</mt-button>
    <mt-button type="danger">danger</mt-button>
    <mt-button size="small">small</mt-button>
    <mt-button size="large">large</mt-button>
    <mt-button size="normal">normal</mt-button>
    <mt-button disabled>disabled</mt-button>
    <mt-button plain>plain</mt-button>
    <mt-button icon="back" plain>back</mt-button>
    <mt-button icon="more">更多</mt-button>
    自定义图标
    <h1>这是App组件</h1>
    <router-link to="/account">account</router-link>
    <router-link to="/goodList">goodlist</router-link>
    <router-view/>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
export default { //这是一个template
  name: 'App',
  data:function () {
    return {}
  },
  methods:{
    show(){
      Toast({
        message: '提示lalala ',
        position: 'bottom',
        duration: 5000,
        iconClass:'glyphicon glyphicon-asterisk'
      });
    }
  }
}
</script>

<style>

</style>
