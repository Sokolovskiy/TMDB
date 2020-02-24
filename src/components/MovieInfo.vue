<template>
  <div>
    <b-container>
      <!-- Movie Info Wrap -->
      <div
        class="movieInfo"
        :style="{
        backgroundImage: 'url(' + imgUrl + movieDetailInfo.backdrop_path + ')'
      }"
      >
        <div class="inner-wrap">
          <b-row>
            <b-col md="4">
              <!-- Poster -->
              <img :src="imgUrl + movieDetailInfo.poster_path" alt class="moviePoster" />
            </b-col>
            <b-col md="8">
              <div class="details">
                <!-- Title -->
                <h1>
                  <span class="title">{{movieDetailInfo.original_title}}</span>&nbsp;
                  <span class="release-date">({{movieDetailInfo.release_date.slice(0, 4)}})</span>
                </h1>
                <!-- Overview -->
                <h3>Overview:</h3>
                <p class="overview">{{movieDetailInfo.overview}}</p>
                <!-- Genres -->
                <h4>Genres:</h4>
                <ul class="genre-list">
                  <li v-for="genre in movieDetailInfo.genres">{{genre.name}}</li>
                </ul>
                <!-- Budget -->
                <div class="budget">
                  Budget:
                  <span class="amount">{{movieDetailInfo.budget}}&nbsp;$</span>
                </div>
                <!-- Runtime -->
                <div class="runtime">
                  Runtime:
                  <span class="time">{{movieDetailInfo.runtime}}&nbsp;minutes</span>
                </div>
                <!-- Favorite  -->
                <div class="favorite" v-if="movieDetailInfo.isFavorite">
                  <p>* This film is on your favorite</p>
                </div>
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
    </b-container>
    <!-- Recommendations -->
    <b-container>
      <b-row>
        <b-col cols="6" md="3" sm="3" v-for="post in allRecommendatios.slice(0, 4)">
          <!-- Poster -->
          <img
            class="moviePoster"
            @click="openMovieDetails(post.id)"
            :src="imgUrl + post.poster_path"
            alt
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "MovieInfo",
  data() {
    return {
      imgUrl: "https://image.tmdb.org/t/p/original"
    };
  },
  computed: mapGetters(["movieDetailInfo", "allRecommendatios"]),
  methods: mapActions(["openMovieDetails"])
};
</script>


<style scoped>
.movieInfo {
  position: relative;
  margin: 40px auto;
  background-size: cover;
  background-position: center center;
  background-color: #ccc;
  background-repeat: no-repeat;
}
.inner-wrap {
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.75);
  color: #fff;
  z-index: 50;
}
.moviePoster {
  display: block;
  width: 100%;
}
.release-date {
  font-size: 22px;
  font-weight: normal;
}
.genre-list {
  padding-left: 0;
  list-style-type: none;
}
.genre-list li {
  padding-left: 4px;
  padding-right: 4px;
  display: inline-block;
  border-right: 1px solid #ccc;
}
.genre-list li:last-child {
  border: none;
}
.budget {
  font-size: 22px;
  font-weight: 600;
}
.budget .amount {
  font-size: 18px;
  font-weight: normal;
}
.runtime {
  font-size: 22px;
  font-weight: 600;
}
.runtime .time {
  font-size: 18px;
  font-weight: normal;
}
.favorite {
  margin-top: 20px;
  height: 50px;
  font-size: 16px;
  z-index: 100;
  color: #4caf50;
}

/* Recommendations */
.moviePoster {
  display: block;
  width: 100%;
  padding: 10px 0;
  cursor: pointer;
}
</style>