<template>
  <v-app id="inspire">

    <!-- Navbar -->
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-container class="py-0 fill-height">
     
         <h2>Savira Auliya Ardana-Understand Everything about Vue JS Front-End Engineer</h2>
        <v-spacer></v-spacer>

        <v-responsive max-width="260">
        </v-responsive>
      </v-container>
    </v-app-bar>

    <!-- Sidebar -->

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
           <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item

                >
                  <v-list-item-content>
                    <v-list-item-title>
                      
                      <router-link class="route m-5" to="/section2">Section 2</router-link><br><br>
                      <router-link class="route" to="/section3">Section 3</router-link><br><br>
                      <router-link class="route" to="/section4">Section 4</router-link><br><br>
                      <router-link class="route" to="/section5">Section 5</router-link><br><br>
                      <router-link class="route" to="/section6">Section 6</router-link><br><br>
                      <router-link class="route" to="/section7">Section 7</router-link><br><br>
                      <router-link class="route" to="/section8">Section 8</router-link><br><br>
                      <router-link class="route" to="/section9">Section 9</router-link><br><br>
                      <router-link class="route" to="/section10">Section 10</router-link><br><br>

                      
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item
                  link
                  color="grey lighten-4"
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      Refresh
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <!-- Konten -->
          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <!-- <h1 class="pt-5 pl-5">Judul</h1>
              <br>
              <p class="pt-5 pl-5 pr-5">Deskripsi </p>

              <h2 class="pt-5 pl-5 pr-5">Foto</h2>
               -->
               <router-view/>
               
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
  components: { 
    
  },
    data: () => ({

    }),
  }
</script>

<style scoped>
.route{
  text-decoration: none;
  color: black;
}
.route:hover{
  color: gray;
}
</style>