<template>
  <div class="container">
    <h1 class="text-center">Berita Terkini</h1>
     <div class="row justify-content-between">
    <div class="col-4">
      
    </div>
    <div class="col-4">
      
    </div>
  </div>
      </div>

</div>
</template>
<script>
export default {
  name: "home",
  computed: {
      listNews(){
          return this.$store.state.listNews;
      },
    },
    methods;{
        fetchNews(){
            this.$store dispatch("fetchlist");
        },
        redirect(id, index){
            return this.$router.push({
                name: "detail",
                params: {
                    id: index,
                },
            });
        },
    },
    monted(){
        this.fetchNews();
    },
};
</script>