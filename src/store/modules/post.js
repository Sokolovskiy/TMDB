export default {
  state: {
    APIKey: "b2bced5a662d88f94a438be43173e308",
    popularRequest: "https://api.themoviedb.org/3/movie/popular",
    genreListRequest: "https://api.themoviedb.org/3/genre/movie/list",
    movieDetailsRequest: "https://api.themoviedb.org/3/movie/",
    searchRequest: "https://api.themoviedb.org/3/search/movie",
    language: "en-US",
    page: 1,
    movies: [],
    movieDetails: [],
    recommendationsPosts: [],
    searchResult: [],
    favoriteFilms: [1]
  },
  actions: {
    //Fetch Posts Action
    async fetchPosts({ commit, state }) {
      const res = await fetch(
        `${state.popularRequest}?api_key=${state.APIKey}&language=${state.language}&page=${state.page}`
      );
      const posts = await res.json();

      // Fetch Genres
      const resGenres = await fetch(
        `${state.genreListRequest}?api_key=${state.APIKey}&language=${state.language}`
      );
      const genresJson = await resGenres.json();

      // Changing genre_ids to genre names
      let genres = genresJson.genres;
      let movies = posts.results;

      for (let i = 0; i < movies.length; i++) {
        for (let k = 0; k < movies[i].genre_ids.length; k++) {
          for (let j = 0; j < genres.length; j++) {
            if (movies[i].genre_ids[k] === genres[j].id) {
              movies[i].genre_ids[k] = genres[j].name;
            }
          }
        }
      }
      // Commit
      commit("updatePosts", movies);
    },
    //Open Movie Details
    async openMovieDetails({ commit, state, getters }, id = 546554) {
      //Fetch Movie Details
      const res = await fetch(
        `${state.movieDetailsRequest}${id}?api_key=${state.APIKey}&language=${state.language}`
      );
      const movieDetails = await res.json();
      // Clearing search Results
      state.searchResult = [];

      // Fetch Recommendatios
      const recommendatiosRes = await fetch(
        `${state.movieDetailsRequest}${id}/recommendations?api_key=${state.APIKey}&language=${state.language}&page=1`
      );
      const recommendations = await recommendatiosRes.json();

      // Adding favorite
      if (getters.favoritePosts.some(movie => movie.id === movieDetails.id)) {
        movieDetails.isFavorite = true;
      }
      // Commit
      commit("updateMovieDetails", { movieDetails, recommendations });
    },
    // Search Films
    async getSearchResult({ commit, state }, query) {
      const res = await fetch(
        `${state.searchRequest}?api_key=${state.APIKey}&language=${state.language}&query=${query}&page=1&include_adult=false`
      );
      const searchResult = await res.json();
      // Commit
      commit("updateSearchResult", searchResult);
    }
  },
  mutations: {
    updatePosts(state, movies) {
      state.movies.push(...movies);
      state.page++;
    },
    updateMovieDetails(state, { movieDetails, recommendations }) {
      state.movieDetails = movieDetails;
      state.recommendationsPosts = recommendations.results;
    },
    updateSearchResult(state, searchResult) {
      state.searchResult = searchResult.results;
    }
  },

  getters: {
    allPosts(state) {
      return state.movies;
    },
    movieDetailInfo(state) {
      return state.movieDetails;
    },
    allRecommendatios(state) {
      return state.recommendationsPosts;
    },
    searchResults(state) {
      return state.searchResult;
    },
    favoritePosts(state) {
      return state.movies.filter(post => post.isFavorite);
    }
  }
};
