<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/user">Pastelero</router-link> |
    <router-link to="/contact">Contacto</router-link>
  </nav>
  <router-view />
</template>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #edf5fc;
  background-color: #031926;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #edf5fc;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
