<template>
  <div id="app">
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <!-- Logo -->
          <a class="logo" href="https://www.themoviedb.org/">
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg"
              alt
            />
          </a>
        </b-col>
        <b-col>
          <!-- Navigation -->
          <div id="nav">
            <router-link class="router-link" to="/">Home</router-link>
            <router-link class="router-link" to="/favorite">Favorites</router-link>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <router-view />
  </div>
</template>

<style scoped>
#app {
  margin: 20px auto;
}
.logo {
  display: block;
  width: 60px;
}
.logo img {
  display: block;
  width: 100%;
}
#nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.router-link {
  padding: 14px 10px;
  margin-left: 10px;
  color: #000;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out 0.3s;
  font-weight: 600;
}
.router-link:hover {
  text-decoration: none;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.57);
}
</style>
