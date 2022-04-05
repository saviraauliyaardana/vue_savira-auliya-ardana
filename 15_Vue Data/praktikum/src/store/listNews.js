import axios from "axios";

const state = () => ({
    list : [],
});

const mutations = {
    setList(state, param){
        state.list = [...param];
    },
};

const actions = {
    fetchList(store){
        axios
        .get("https://newsapi.org/v2/everything",{
            params : {
                q : "games",
                from : "2022-04-04",
                shortBy : "publishedAt",
                apiKey : "2d3bf314c41548bc92837907bd8bb522",
            },
        })
        .then((response)=>{
            store.commit("setList", response.data.articles);
        })
        .catch((err)=> console.log(err));
    },
};
export default {
    state,
    mutations,
    actions,
}