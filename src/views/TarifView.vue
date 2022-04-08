<template>
<div>

    <h1 id="data" class="mb-5">Data Tarif</h1>

    <div class="row">
      <div class="col"></div>
      <div class="col-8">

        <div class="input-group mb-3">
            <input type="text" class="form-control searchbar border-danger" placeholder="Search Jenis Tarif" v-model="searchTar">    
        </div>

        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Jenis Pengiriman</th>
                    <th>Biaya Pengiriman</th>
                    <th>Biaya Packing</th>
                    <th>Biaya Asuransi</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="tarif in filtered" :key="tarif.id">
                    <td>{{tarif.id}}</td>
                    <td>{{tarif.jenis_pengiriman}}</td>
                    <td>{{tarif.biaya_pengiriman}}</td> 
                    <td>{{tarif.biaya_packing}}</td>
                    <td>{{tarif.biaya_asuransi}}</td>
                </tr>
            </tbody>
        </table>

      </div>
      <div class="col"></div>
    </div>

   

</div>
 
</template>

<script>

import axios from 'axios'

export default {
    name : 'TarifPage',
    components: {
    },
    data() {
       return{
          tarifs: [],
          searchTar:''
       }
   },
   methods:{
       setTarifs(data){
           this.tarifs = data;
       }},

    mounted(){

        const config = {
            headers: {
                "Referer" : "http://speed-express.herokuapp.com/",
                "Referrer-Policy": "origin"
            }
        }

       axios.get('http://speed-express.herokuapp.com/api/tarif', config)
        .then(res => {
          this.setTarifs(res.data),
          console.log(res)
        })
        .catch(error => {
          console.log(error)
        })
   },
   computed:{
       filtered: function(){
           return this.tarifs.filter((tarif) => {
               return tarif.jenis_pengiriman.match(this.searchTar);
           })
       }
   }
  }
</script>
<style>
.searchbar{
    width: 10pt;
}
</style>