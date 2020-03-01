import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import jQuery from "jquery";

//import VueAwesomeSwiper from "vue-awesome-swiper";

Vue.config.productionTip = false;
Vue.prototype.$siteAdresi = "https://www.ajanstr.com.tr/";
Vue.prototype.$siteAdresiTema = "https://www.ajanstr.com.tr/code/";
Vue.prototype.$siteAdi = "AjansTR Görsel Medya ve İnternet Hizmetleri";

Vue.use(VueRouter);
Vue.use(jQuery);

//Vue.use(VueAwesomeSwiper);
window.jQuery = jQuery;
global.jQuery = jQuery;

import anasayfa from "./pages/home.vue";
import about from "./pages/about.vue";
import contact from "./pages/contact.vue";

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: anasayfa,
      meta: {
        title: "Home Page - Example App",
        metaTags: [
          {
            name: "keyword",
            content: "anahtar kelimelerim"
          },
          {
            property: "og:description",
            content: "og descim"
          }
        ]
      }
    },
    { path: "/about", component: about },
    { path: "/contact", component: contact }
  ],
  mode: "history",
  hash: false
});

new Vue({
  render: h => h(App),
  // components: { jQuery },
  router,
  data: function() {
    return {
      siteAdresi: "https://www.ajanstr.com.tr/",
      siteAdresiTema: "https://www.ajanstr.com.tr/code/",
      siteAdi: "AjansTR Görsel Medya ve İnternet Hizmetleri"
    };
  }
}).$mount("#app");
