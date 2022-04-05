<template>
 <div>
   <div class="container">
    <div class="card mb-3">
    <img class="card-img-top" :src="dataNews.urlToImage" alt="Card image cap">
    <div class="card-body">
        <h4 class="card-title">{{dataNews.title}}</h4>
        <br>
        <div class="d-flex justify-content-between">
            <p class="card-text"><small class="text-muted">{{dataNews.author}}</small></p>
            <p class="card-text"><small class="text-muted">{{dataNews.publishedAt}}</small></p>
        </div>
        <p class="card-text">{{dataNews.description}}</p>
        <p>Lanjutkan baca ke  <a :href="dataNews.url">sini</a></p>
        <router-link to="/">
            <button  type="button" class="btn btn-outline-secondary">Kembali</button>
        </router-link>
    </div>
    </div>
   </div>
 </div>
</template>
<script>
export default {
    name: "detailNewsPage",
    setup() {},
    computed : {
        index(){
            return this.$route.params.index;
        },
        dataNews(){
            return this.$store.state.listNews.list[this.index];
        },
    },
    mounted(){
        console.log(this.dataNews);
    },
};
</script>
<style>
h4{
    text-align: center;
}
</style>