import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import listNews from "./listNews";


Vue.use(Vuex);
const persistedstate = createPersistedState({
    paths: ["listNews"],
})

export default new Vuex.Store({
    plugins: [persistedstate],
    modules: {
        listNews :{
           namespaced: true,
           ...listNews,
       },
    },
});