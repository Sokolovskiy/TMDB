<template>
  <div class="movieDetails">
    <MovieInfo />
  </div>
</template>


<script>
import MovieInfo from "@/components/MovieInfo.vue";

export default {
  name: "MovieDetails",
  components: {
    MovieInfo
  }
};
</script>
