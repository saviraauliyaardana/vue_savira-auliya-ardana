import axios from "axios"
const state = () =>({
    list: [],
})

const mutations = {
    setTv(state,param){
        state.list = param
    },
}

const actions = {
    fetchTv(store){
        console.log('action called')
        
        this.$axios.$get('https://api.themoviedb.org/3/tv/popular?api_key=37ed43a4f8eaa2abd75f9283692947bc&language=en-US&page=1'
        ).then((res)=>{
            store.commit('setTv',res.results)
            console.log('res',res)
        }).catch((err)=>console.log('error', err))
    }
}

export{state,mutations,actions}