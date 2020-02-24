<template>
  <div class="input-wrap">
    <input type="text" placeholder="Search" v-model="query" @keyup="getSearchResult(query)" />
    <b-icon-search class="search-icon"></b-icon-search>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      query: ""
    };
  },
  name: "SearchInput",
  computed: mapGetters(["searchResults"]),
  methods: mapActions(["getSearchResult"])
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input-wrap {
  padding: relative;
  display: block;
  width: 100%;
  margin: 30px auto;
}
input {
  display: block;
  width: 100%;
  padding: 20px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  outline: none;
}
.search-icon {
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 25px;
}
</style>
