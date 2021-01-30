<template>
    <div class="container-fluid">
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <h3 class="m-0 text-dark">Detail Transaksi</h3>
                </div>
              </div>
        </section>
        <div class="row">
            <div class="col-md-12">
                <router-link :to="{ name: 'transaksi.data' }" class="btn btn-warning mb-2 btn-md">Back</router-link>
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                            <th scope="col">No</th>
                            <th scope="col">Barang</th>
                            <th scope="col">Harga</th>
                            <th scope="col">Qty</th>
                            <th scope="col">Diskon %</th>
                            <th scope="col">Diskon Rp</th>
                            <th scope="col">Harga Diskon</th>
                            <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(row,i) in data" :key="i">
                                <th scope="row">{{i+1}}</th>
                                <!-- <td>{{row}} </td> -->
                                <td>{{row.barang.name}} </td>
                                <td>{{formatPrice(row.harga_bandrol)}} </td>
                                <td>{{row.qty}} </td>
                                <td>{{row.diskon_pct}}% </td>
                                <td>{{formatPrice(row.diskon_nilai)}} </td>
                                <td>{{formatPrice(row.harga_diskon)}} </td>
                                <td>{{formatPrice(row.total)}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div v-if="!data" class="alert alert-danger text-center">
                    Tidak Ada Data
                </div>
            </div>

        </div>
        
    </div>
</template>

<script>

export default {
    name: 'DetailTransaksi',
    data() {
        return {
            data : '',
        }
    },
    mounted() {
        this.getData()
    },
    methods:{
        getData(){
            axios
            .request({
                url: "/api/salesdetail/"+this.$route.params.id,
                method: "GET",
            })
            .then(response => {
                this.data = response.data.data;
            })
        },
        formatPrice(value) {
            let val = (value/1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
    }
}

</script>

