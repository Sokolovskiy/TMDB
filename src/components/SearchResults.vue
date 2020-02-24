<template>
  <div class="search-result">
    <div class="search-item" v-for="result in searchResults" @click="openMovieDetails(result.id)">
      <router-link class="film-details" to="/moviedetails">
        <b-container>
          <b-row>
            <!-- Poster -->
            <b-col md="2" sm="3">
              <div class="poster-wrap">
                <img :src="imgUrl+result.poster_path" alt class="poster" />
              </div>
            </b-col>
            <!-- Details -->
            <b-col md="10" sm="9">
              <div class="details">
                <div class="title">{{result.original_title}}</div>
                <div class="description">{{result.overview}}</div>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "searchResult",
  data() {
    return {
      imgUrl: "https://image.tmdb.org/t/p/original"
    };
  },
  computed: mapGetters(["searchResults"]),
  methods: mapActions(["openMovieDetails"])
};
</script>


<style scoped>
.search-result {
  position: absolute;
  left: 15px;
  right: 15px;
  z-index: 200;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.57);
  background-color: rgba(0, 0, 0, 0.57);
}
.search-item {
  padding: 20px 0;
  margin: 0 0 5px 0;
  background-color: #fff;
  border: 1px solid #f3f3f3;
  cursor: pointer;
}
.film-details {
  display: block;
  text-decoration: none;
  color: #000;
}
.poster-wrap {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.poster {
  display: block;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.57);
}
.details {
  padding: 10px 30px;
  border-left: 1px solid #ccc;
}
.title {
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
