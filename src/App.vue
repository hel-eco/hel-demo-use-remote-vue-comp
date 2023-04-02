<template>
  <div id="app">
    <Hamburger />
    <div>
      <img alt="Vue logo" src="./assets/logo.png" />
      <div style="border: 2px solid red">
        <h3 style="color: blue">
          红色区域内是一个远程组件，该组件内部依赖了另一个远程组件
        </h3>
        <RemoteComp msg="Welcome to use hel remote vue comp" />
      </div>
    </div>
    <!-- <HelloWorld2 /> -->
    <hr />
    <a
      href="https://github.com/hel-eco/hel-demo-use-remote-vue-comp"
      target="blank"
      >当前项目仓库</a
    >
    <br />
    <a href="https://github.com/hel-eco/hel-tpl-remote-vue-comp" target="blank"
      >远程组件仓库</a
    >
  </div>
</template>

<script>
/* eslint-disable */
// https://github.com/hel-eco/hel-tpl-remote-vue-comp
import comps from "hel-tpl-remote-vue-comps";
import comps2 from "lib-zhangbb-test";
import { defineAsyncComponent } from "vue";
import { preFetchLib } from "hel-micro";

// preFetchLib("lib-zhangbb");
console.log('static import', comps2);

export default {
  name: "App",
  components: {
    RemoteComp: comps.App, // hi, remote component
    Hamburger: defineAsyncComponent(async () => {
      const comps = await preFetchLib("lib-zhangbb");
      const comps2 = await preFetchLib("lib-zhangbb-test");
      console.log('dynamic import', comps2);
      return comps.Hamburger;
    }),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>