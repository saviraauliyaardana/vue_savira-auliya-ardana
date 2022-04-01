<template>
<div class ="card">
 <img
    :src="listBerita[id].urlToImage"
    class = "card-img-top"
    alt = "Gambar Berita"
  />
  <div class= "card-body">
   <h5 class = "card-tittle">{{ listNews[id].tittle }}</h5>
   <p class = "card text">
        {{ listNews[id].description }}
   </p>
   </div>
   <ul class="list-group list-group-flush" style="list-style-type: none">
     <li class="list-group-item">author : {{ listNews[id].author }}</li>
     <li class="list-group-item>
        Dipublikasikan pada:
        {{ moment(listNews[id].publishedAt).format("YYYY-MM-DD [at] hh:mm) }}
     </li>
    </ul>
   <div class ="card-body">
    <a : href "listNews[id].url" class = "card-link">View All</a>
   </div>

</div>
</template>

<script>
export default{
    name: "detail",
    setup () {},
    computed {
        id(){
            return this.$route.params.id;
        },
        listNews(){
            return this.$store.state.listNews;
        },
    },
};
</script>