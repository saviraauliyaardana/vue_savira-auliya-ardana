<template>
<div>
   <!-- <v-toolbar-title>TV</v-toolbar-title> -->
  <v-row>
 
    <v-col v-for="(tv, index) in tvList" :key="index"  cols="3">
    <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"

  >

    <v-img
      height="400"
      :src="`https://image.tmdb.org/t/p/original/${tv.poster_path}`"
    ></v-img>

    <v-card-title class="text-cruncate">              {{ tv.name.slice(0, 15)
              }}<span v-if="tv.name.length > 15">...</span></v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="tv.vote_average / 2"
          color="amber"
          dense
          half-increments
          readonly  
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
         {{tv.vote_average}} ({{tv.vote_count}})
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        Released:
              {{
                new Date(tv.first_air_date).toLocaleString('en-us', {
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
              :to="{ name: 'movies-tvid', params: { id: tv.id } }"
            >
            <v-btn class="depressed">
    Get More Info
            </v-btn>
          
            </NuxtLink>
    </v-card-actions>
  </v-card>
  </v-col>
</v-row>
</div>

</template>

<script>
export default {
  name: 'tvShowPage',
  computed:{
        tvList(){
            return this.$store.state.tv.list
        },
    },   
     mounted(){
        this.$store.dispatch('tv/fetchTv')
    }
}
</script>
