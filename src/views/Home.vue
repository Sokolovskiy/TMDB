<template>
  <div class="home">
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
          <PopularMovie />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import SearchInput from "@/components/SearchInput.vue";
import SearchResults from "@/components/SearchResults.vue";
import PopularMovie from "@/components/PopularMovie.vue";

export default {
  name: "Home",
  components: {
    SearchInput,
    PopularMovie,
    SearchResults
  }
};
</script>
