<template>
  <div id="app">

    <nav>
      <a class="navbar-brand disabled ayam">Speed Express</a>&nbsp;&nbsp;
      <router-link to="/">Cek Resi</router-link> &nbsp;
      <router-link to="/tarif">Cek Tarif</router-link>
    </nav>

    <h1 class="mb-5">Tracking Resi</h1>
    
    <div class="row mb-5">
      <div class="col"></div>
      <div class="col">
         <form @submit.prevent="handleSubmit">
            <input type="text" class="form-control mb-3" placeholder="Nomor resi" aria-label="Nomor resi" v-model="noResi">
            <button class="btn btn-danger">Search</button>
        </form>
      </div>
      <div class="col"></div>
    </div>

     <div class="row mb-5">
      <div class="col"></div>
      <div class="col-9">
         <table class="table">
          <thead>
            <tr>
              <th>No resi</th>
              <th>Nama Pengirim</th>
              <th>Nama Penerima</th>
              <th>Tujuan</th>
              <th>Posisi</th>
              <th>Cabang</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="data in datas" :key="data.id">
              <td>{{data.no_resi}}</td>
              <td>{{data.pengiriman.nama_pengirim}}</td>
              <td>{{data.pengiriman.nama_penerima}}</td>
              <td>{{data.lokasi_tujuan}}</td>
              <td>{{data.posisi_barang}}</td>
              <td>{{data.cabang.alamat_cabang}}, {{data.cabang.nama_cabang}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col"></div>
    </div>
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
