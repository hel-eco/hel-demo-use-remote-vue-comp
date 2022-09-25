import { preFetchLib } from 'hel-micro';

(async function () {
  await preFetchLib('hel-tpl-remote-vue-comps');

  // 自定义前缀
  // await preFetchLib('hel-tpl-remote-vue-comps', { apiPrefix: 'https://xxx.yyy' });


  // 调试本地开发中的远程组件
  // const enableCustom = !!window.location.port;
  // await preFetchLib('hel-tpl-remote-vue-comps', {
  //   custom: {
  //     host: 'http://localhost:7001', // 基于 web-dev-server 开发中生成产物联调
  //     // host: 'http://localhost:9001', // 基于 http-server 已构建好的产物联调
  //     enable: enableCustom,
  //   },
  // });

  import('./loadApp');
}()).catch(err => {
  console.error('loadApp err: ', err);
});
