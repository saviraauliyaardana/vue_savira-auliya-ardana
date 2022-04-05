<template>
 <div>
   <h1>Berita Terkini</h1>
   <div class="container">
     <div class="row justify-content-around">
       <div v-for="(article, index) in newsList" :key="index" class="col-sm-6 d-flex mt-4">
          <div  class="card shadow">
            <div @click="() => redirect(index)" class="card-body bg-secondary flex-fill">
            <dl class="row">
              <dt class="col-sm-5">
                <img 
                  class="rounded float-left mt-5"
                  width="210px" 
                  :src="article.urlToImage"
                  />
              </dt>
              <dd class="col-sm-6">
                <h6 class="mt-1">
                  {{article.author}}
                </h6>
                <br>
                <h5 class="font-weight-bold" >
                  {{article.title}}
                </h5>
                <br>
                <br>
                <p class="text-weight-light">{{article.publishedAt}}</p>
              </dd>
            </dl>
          </div>
          </div>
       </div>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  name: 'newsPage',
  computed: {
    newsList(){
      return this.$store.state.listNews.list;
    },
  },
  methods : {
    fetchNewsList(){
      this.$store.dispatch("listNews/fetchList");
    },
    redirect(index){
      this.$router.push('/news/'+index)
    }
  },
  mounted(){
    this.fetchNewsList();
  },
};
</script>
<style>
h1{
  text-align: center;
  padding: 25px;
}
</style>