<template>
  <div class="posts-section">
    <!-- Post -->
    <div
      class="post"
      v-for="post in favoritePosts.slice(0, postsCounter)"
      :style="{
        backgroundImage: 'url(' + backgroundImgUrl + post.backdrop_path + ')'
      }"
      @click="openMovieDetails(post.id)"
    >
      <!-- Film details -->
      <div class="inner-wrap">
        <!-- Title -->
        <h3 class="title">
          <span>{{ post.title }}</span>&nbsp;
          <span class="relase-date">({{post.release_date.slice(0, 4)}})</span>
        </h3>
        <!-- Overview -->
        <p class="overview">{{ post.overview }}</p>
        <!-- Genre -->
        <h4>Genre:</h4>
        <ul class="genre-list">
          <li v-for="genre in post.genre_ids">{{ genre }}</li>
        </ul>
        <!-- More details button -->
        <router-link class="film-details-link" to="/moviedetails">More Details</router-link>
        <!-- Favorite Flag -->
        <div class="favorite" @click="post.isFavorite = !post.isFavorite; fetchPosts()">
          <b-icon-star-fill v-if="post.isFavorite"></b-icon-star-fill>
          <b-icon-star></b-icon-star>
        </div>
      </div>
    </div>
    <!-- Navigation Button -->
    <button
      class="more-films-btn"
      v-if="favoritePosts.length > 10"
      @click="postsCounter += 10"
    >More films</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "postsSection",
  data() {
    return {
      backgroundImgUrl: "https://image.tmdb.org/t/p/original",
      postsCounter: 10
    };
  },
  computed: mapGetters(["favoritePosts"]),
  methods: mapActions(["fetchPosts", "openMovieDetails"]),
  async mounted() {
    this.fetchPosts();
  }
};
</script>

<style scoped>
.post-section {
  position: relative;
  z-index: 100;
}
/* Navigation buttons */
.more-films-btn {
  display: block;
  width: 200px;
  height: 40px;
  margin: 40px auto 20px;
  border: 1px solid #f4f4f4;
  outline: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.87);
  text-transform: uppercase;
  font-size: 18px;
  transition: all 0.4s ease-in-out 0.1s;
}
.more-films-btn:hover {
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.57);
  transform: translateY(2px);
}
/* Post Styles */
.post {
  position: relative;
  display: block;
  min-height: 200px;
  width: 100%;
  border: 1px solid #ccc;
  margin: 20px auto;
  background-size: cover;
  background-position: center center;
  background-color: #ccc;
  background-repeat: no-repeat;
  border-radius: 10px;
  color: #fff;
}
.inner-wrap {
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
}
.relase-date {
  font-weight: normal;
  font-size: 20px;
}
.film-details-link {
  display: block;
  position: relative;
  width: 200px;
  padding: 1rem;
  color: #fff;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  border: 1px solid #ccc;
  transition: all 0.4s ease-in-out 0.1s;
}
.film-details-link:hover {
  box-shadow: 0px 5px 5px rgba(255, 253, 253, 0.8);
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
.favorite {
  position: absolute;
  text-align: center;
  bottom: 2%;
  right: 0;
  width: 60px;
  height: 50px;
  font-size: 40px;
  cursor: pointer;
}
</style>
