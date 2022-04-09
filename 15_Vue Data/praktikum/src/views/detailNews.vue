<template>
  <v-app>
    <v-main>
      <v-app-bar app color="primary" dark :clipped-left="true">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>News App</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-app-bar>

    <v-navigation-drawer v-model="drawer" app color="primary" dark :clipped="true">
      <v-list dense>
        <v-list-item v-for="item in newsList" :key="item.title" link>
          <v-list-item-icon>
            <v-avatar size="32px">
                <img class="img-circle elevation-7 mb-1"
                  :src="item.urlToImage" />
            </v-avatar>
          </v-list-item-icon>

            <v-list-item-content style="color: white;">
              <v-list-item-title>{{ item.source.name }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
       
    <v-container>
          <v-card class="my-8" elevation="2">
            <v-img
              height="400px"
              :src="dataNews.urlToImage"
            >
              <v-card-title></v-card-title>
            </v-img>

            <v-card-subtitle class="my-4">  
            <v-card-text class="text--primary">
              <div><h2 style="text-align: center">{{ dataNews.title }}</h2></div>
              <br>
              <div>{{ dataNews.author }}</div>
              <br>
              <div>{{ dataNews.description }}</div>
              <br>
              <div>{{ dataNews.publishedAt }}</div>
              <br>
              <p>Lanjutkan baca ke  <a :href="dataNews.url">sini</a></p>
            </v-card-text>
            </v-card-subtitle>
        
            
        <v-card-actions>
            <v-flex class="d-flex flex-row justify-space-between my-4">
              <v-chip color="black" dark>
                <strong>TechCrunch</strong>
              </v-chip>

              <div>
                <v-icon
                  class="mx-2"
                  v-for="(icon, idx) in icons"
                  :key="idx"
                  :color="icon.color"
                >
                  {{ icon.name }}
                </v-icon>
              </div>

        <v-btn @click=" ()=> redirectBack('/')" color="primary">Back</v-btn>
      </v-flex>
      </v-card-actions>
    </v-card>
     </v-container>      
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "detailNewsPage",
  data() {
    return {
      drawer: true,
      mini: true,
      icons: [
        { name: "mdi-reddit", color: "orange" },
        { name: "mdi-twitter", color: "blue" },
        { name: "mdi-facebook", color: "blue" },
        { name: "mdi-google-plus", color: "red" },
        { name: "mdi-linkedin", color: "blue" },
      ],
    };
  },
    computed : {
        index(){
            return this.$route.params.index;
        },
        dataNews(){
            return this.$store.state.listNews.list[this.index];
        },
        newsList(){
            return this.$store.state.listNews.list;
    },
    },
    mounted(){
        console.log(this.dataNews);
    },
    methods:{
       redirectBack(){
      this.$router.push('/')
    },  
    }
};
</script>