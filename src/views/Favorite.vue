<template>
  <div class="favorite">
    <b-container>
      <b-row>
        <b-col>
          <SearchInput />
          <SearchResults />
        </b-col>
      </b-row>
    </b-container>

    <b-container>
      <b-row>
        <b-col>
          <FavoriteMovie />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import SearchInput from "@/components/SearchInput.vue";
import SearchResults from "@/components/SearchResults.vue";
import FavoriteMovie from "@/components/FavoriteMovie.vue";

export default {
  name: "Home",
  components: {
    SearchInput,
    FavoriteMovie,
    SearchResults
  }
};
</script>
