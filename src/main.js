import Vue from 'vue';
import App from './App.vue';
// You can change this import to `import router from './starterRouter'` to quickly start development from a blank layout.
import router from './router';
import NowUiKit from './plugins/now-ui-kit';
import VueMeta from 'vue-meta'

Vue.config.productionTip = false;

Vue.use(NowUiKit);
Vue.use(VueMeta)

new Vue({
  router,
  render: h => h(App),
  mounted() {
    document.dispatchEvent(new Event('render-event'));
  },
  metaInfo() {
    return {
      title: '澤影映像電影特效',
      meta: [ 
        {
          name: 'description',
          content: '將為台灣電影現場爆破特效打造更安全更專業的環境。台灣現場特效團隊，特別致力專精於「爆破」、「火效」、「煙效」之現場特別效果。爆破拍攝以「安全」為保障，貨真價實的火炸藥爆破為「品質」。澤影皆依照爆破特效安全守則，極力降低事故風險；也輔導各劇組合法申請特效爆破，為全台灣目前唯一在文化部與經濟部等主管機關，有成功認證案例的特效公司。'
        }
      ]
    }
  }
}).$mount('#app');
