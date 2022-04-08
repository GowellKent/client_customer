<template>
  <div id="app">

    <nav>
      <a class="navbar-brand disabled ayam">Speed Express</a>&nbsp;&nbsp;
      <router-link to="/">Cek Resi</router-link> &nbsp;
      <router-link to="/tarif">Cek Tarif</router-link>
    </nav>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 20px;
  padding-bottom: 30px;
  background-color: #ff7b7b;
  margin-bottom: 40px;
  text-align: start;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

nav a {
  font-weight: bold;
  color: #a70000;
}

nav a.ayam {
  font-weight: bold;
  color: #ffffff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 2em;
}

nav a.router-link-exact-active {
  color: #ffffff;
}
</style>
