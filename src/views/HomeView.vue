<template>
  <div id="home">
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
    
    <toast />
    
  </div>
</template>

<script>
import axios from 'axios'
import toast from '@/components/ToastNotif.vue'

export default {
  name: 'HomeView',
  components: {
    toast
  },
  data(){
    return{
      noResi:'',
      datas:[]
    }
  },
  methods:{
    setData(data){
      this.datas = data
    },
    handleSubmit(){
            const resi = {
                no_resi : this.noResi
            }
            axios.post('http://speed-express.herokuapp.com/api/tracking/resi', resi)
                .then(
                    res => {
                        this.setData(res.data),
                        console.log(this.datas)
                    }
                    
                ).catch(
                    err => {
                        console.log(err),
                        this.$toasted.show('Maaf, Data Tidak Ditemukan')
                    }
                ) 

    }
  }
}
</script>
