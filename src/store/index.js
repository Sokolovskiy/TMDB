import Vue from "vue";
import Vuex from "vuex";
import post from "./modules/post";
import VuexPersist from "vuex-persist";

Vue.use(Vuex);
const vuexPersist = new VuexPersist({
  key: "my-app",
  storage: window.localStorage
});

export default new Vuex.Store({
  modules: {
    post
  },
  plugins: [vuexPersist.plugin]
});
