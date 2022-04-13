<template>
   <v-row>
    <v-col v-for="(movie, index) in movieList" :key="index"  cols="3">
    <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
    >

    <v-img
      height="250"
      :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`"
    ></v-img>

    <v-card-title class="text-cruncate">              {{ movie.title.slice(0, 15)
              }}<span v-if="movie.title.length > 15">...</span></v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="movie.vote_average / 2"
          color="amber"
          dense
          half-increments
          readonly  
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
         {{movie.vote_average}} ({{movie.vote_count}})
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        Released:
              {{
                new Date(movie.release_date).toLocaleString('en-us', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })
              }}
      </div>

    </v-card-text>

    <v-divider class="mx-4"></v-divider>


    <v-card-actions>
       
            <NuxtLink
              :to="{ name: 'movies-movieid', params: { id: movie.id } }"
            >
            <v-btn class="depressed">
    Get More Info
            </v-btn>
          
            </NuxtLink>
    </v-card-actions>
  </v-card>
  </v-col>
</v-row>
</template>

<script>
export default {
  name: 'MoviesPage',
  computed:{
        movieList(){
            return this.$store.state.movie.list
        },
    },   
     mounted(){
        this.$store.dispatch('movie/fetchMovie')
    }
}
</script>

