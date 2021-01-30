<template>
    <div class="container-fluid">
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <h3 class="m-0 text-dark">Daftar Transaksi</h3>
                </div>
              </div>
        </section>
        <div class="row">
            <div class="col-md-12">
                <router-link :to="{ name: 'transaksi' }" class="btn btn-primary mb-2 btn-md">Tambah</router-link>
                <div class="table-responsive">
                    <table class="table table-bordered">
                        
                        <thead>
                            <tr>
                            <th scope="col">No</th>
                            <th scope="col">No Transaksi</th>
                            <th scope="col">Tanggal</th>
                            <th scope="col">Nama Customer</th>
                            <th scope="col">Jumlah Barang</th>
                            <th scope="col">Sub Total</th>
                            <th scope="col">Diskon</th>
                            <th scope="col">Ongkir</th>
                            <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(row,i) in data" :key="i">
                                <th scope="row">{{i+1}}</th>
                                <td>
                                    <button type="button" class="btn btn-info btn-sm" @click.prevent="detail(row.id,row.kode)" data-toggle="modal" data-target="#Modal">
                                        {{row.kode}}
                                    </button>
                                </td>
                                <td>{{row.tgl}} </td>
                                <td>{{row.customer.name}} </td>
                                <td>{{row.detail_transaksi.length}} </td>
                                <td>{{formatPrice(row.subtotal)}} </td>
                                <td>{{formatPrice(row.diskon)}} </td>
                                <td>{{formatPrice(row.ongkir)}} </td>
                                <td>{{formatPrice(row.total_bayar)}}</td>
                            </tr>
                            <tr>
                                <th colspan="8" class="text-right">Grand Total</th>
                                <th colspan="1">{{formatPrice(grand_total)}}</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div v-if="!data" class="alert alert-danger text-center">
                    Tidak Ada Data
                </div>
            </div>
        </div>
        
        <!-- Modal -->
        <div class="modal fade" id="Modal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="ModalLabel">Detail Transaksi <b>{{inv}}</b></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body">
                    <div class="col-md-12">
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
                                    <tr v-for="(row,i) in detail_transaksi" :key="i">
                                        <th scope="row">{{i+1}}</th>
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
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'DataTransaksi',
    data() {
        return {
            data : '',
            grand_total : '',

            inv : '',
            detail_transaksi : ''
        }
    },
    mounted() {
        this.getData()
    },
    methods:{
        getData(){
            axios
            .request({
                url: "/api/sales",
                method: "GET",
            })
            .then(response => {
                this.data = response.data.data;
                let sum = 0;
                this.data.forEach(element => {
                    sum += element.total_bayar
                });
                this.grand_total = sum
            })
        },
        formatPrice(value) {
            let val = (value/1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        detail(id,kode){
            axios
            .request({
                url: "/api/salesdetail/"+id,
                method: "GET",
            })
            .then(response => {
                this.detail_transaksi = response.data.data;
                this.inv = kode;
            })
        }
    }
}

</script>

