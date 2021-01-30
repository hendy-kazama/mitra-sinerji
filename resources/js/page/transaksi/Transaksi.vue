<template>
    <div class="card">
        <div class="card-body">
            <h5>Transaksi</h5>
            <div class="form-group row">
                <label class="col-xl-1 col-form-label col-form-label-sm">No</label>
                <div class="col-xl-3">
                  <input type="text" class="form-control form-control-sm" v-model="sales.kode" readonly>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-xl-1 col-form-label col-form-label-sm">Tanggal</label>
                <div class="col-xl-3">
                  <input type="date" class="form-control form-control-sm" v-model="sales.tgl">
                </div>
            </div><br>
            <h5>Customer</h5>
            <div class="form-group row">
                <label class="col-xl-1 col-form-label col-form-label-sm">Kode</label>
                <div class="col-xl-3">
                    <select class="form-control form-control-sm" v-model="sales.cust_id" @change="getCustomerDetail($event)">
                        <option value="">Pilih</option>
                        <option v-for="(row,i) in customer" :value="row.id"> {{row.kode}} | {{row.name}}</option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-xl-1 col-form-label col-form-label-sm">Nama</label>
                <div class="col-xl-3">
                  <input type="text" class="form-control form-control-sm" v-model="customer.name">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-xl-1 col-form-label col-form-label-sm">Telp</label>
                <div class="col-xl-3">
                  <input type="text" class="form-control form-control-sm" v-model="customer.telp">
                </div>
            </div><br>

            <div v-if="error_qty" class="alert alert-warning" role="alert">
                Quantity tidak boleh kosong !
            </div>
            <div v-if="error_barang" class="alert alert-warning" role="alert">
                Anda belum memilih barang !
            </div>

            <h5>Barang</h5>
            <div class="form-group row">
                <label class="col-xl-1 col-form-label col-form-label-sm">Barang</label>
                <div class="col-xl-5">
                    <select class="form-control form-control-sm" v-model="barang_id">
                        <option value="">Pilih</option>
                        <option v-for="(row,i) in barang" :value="row.id">{{row.name}}</option>
                    </select>
                </div>
                <label class="col-xl-1 col-form-label col-form-label-sm">Quantity</label>
                <div class="col-xl-1">
                  <input type="number" class="form-control form-control-sm" v-model="qty">
                </div>
                <label class="col-xl-1 col-form-label col-form-label-sm">Disc %</label>
                <div class="col-xl-1">
                  <input type="number" class="form-control form-control-sm" v-model="disc_pct">
                </div>
                <div class="col-xl-1 tombol-tambah">
                    <button @click="tambah" class="btn btn-primary btn-sm ">
                        Tambah
                    </button>                
                </div>
            </div><br>
            
            <div class="table-responsive-xl">
                <table class="table table-bordered table-sm">
                    <thead>
                      <tr>
                        <th rowspan="2" scope="col" class="align-middle text-center">Action</th>
                        <th rowspan="2" scope="col" class="align-middle text-center" >No</th>
                        <th rowspan="2" scope="col" class="align-middle text-center" >Kode Barang</th>
                        <th rowspan="2" scope="col" class="align-middle text-center" >Nama Barang</th>
                        <th rowspan="2" scope="col" class="align-middle text-center" >QTY</th>
                        <th rowspan="2" scope="col" class="align-middle text-center" >Harga Bandrol</th>
                        <th colspan="2" scope="col" class="align-middle text-center">Diskon</th>
                        <th rowspan="2" scope="col" class="align-middle text-center" >Harga Diskon</th>
                        <th rowspan="2" scope="col" class="align-middle text-center" >Total</th>
                      </tr>
                      <tr>
                        <th scope="col" class="text-center">%</th>
                        <th scope="col" class="text-center">(Rp)</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr v-if="sales.list_transaksi.length" v-for="(row,i) in sales.list_transaksi" :key="i">
                                <td scope="row" class="text-center"><button type="submit" class="btn btn-sm btn-danger" @click.prevent="removeRow(i)">Hapus</button></td>
                                <td scope="row">{{i+1}}</td>
                                <td scope="row">{{row.kode}}</td>
                                <td scope="row">{{row.nama}}</td>
                                <td scope="row">{{row.qty}}</td>
                                <td scope="row">{{this.formatPrice(row.harga_bandrol)}}</td>
                                <td scope="row">{{row.diskon_pct}}%</td>
                                <td scope="row">{{this.formatPrice(row.diskon_nilai)}}</td>
                                <td scope="row">{{this.formatPrice(row.harga_diskon)}}</td>
                                <td scope="row">{{this.formatPrice(row.total)}}</td>
                        </tr>
                        <tr v-else>
                            <td colspan="11" class="table-danger text-center">Data tidak ditemukan !</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="form-group row mt-4">
                <div class="col-9 text-right form-control-sm"><b>Sub Total</b></div>
                <div class="col-3 text-center ">
                  <input type="text" class="form-control form-control-sm" :value="formatPrice(sales.subtotal)" readonly>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-9 text-right"><b>Diskon</b></div>
                <div class="col-3 text-center">
                  <input type="text" class="form-control form-control-sm" v-model="sales.diskon">
                </div>
            </div>
            <div class="form-group row">
                <div class="col-9 text-right"><b>Ongkir</b></div>
                <div class="col-3 text-center">
                  <input type="text" class="form-control form-control-sm" v-model="sales.ongkir">
                </div>
            </div>
            <div class="form-group row">
                <div class="col-9 text-right"><b>Total Bayar</b></div>
                <div class="col-3 text-center">
                  <input type="text" class="form-control form-control-sm" :value="total_bayar(sales.subtotal,sales.diskon,sales.ongkir)" readonly>
                </div>
            </div>
            <div v-if="simpan_berhasil"  class="alert alert-success text-center" role="alert">
                Simpan Berhasil !
            </div>
            <div class="row mt-4">
                <div class="col text-center">
                    <button @click.prevent="simpan" class="btn btn-success mr-3">
                        Simpan
                    </button>                
                    <button @click.prevent="clearForm" class="btn btn-warning">
                        Batal
                    </button>                
                </div>
            </div>

        </div>
    </div>
</template>


<script>

export default {
    name: 'Transaksi',
    data() {
        return {
            customer : [],
            barang : [],
            barang_id : '',

            customer : {
                name : '',
                telp : ''
            },
            
            qty : 1,
            disc_pct : 0,

            sales : {
                kode : null,
                tgl : null,
                cust_id : null,
                subtotal : 0,
                diskon : 0,
                ongkir : 0,
                total_bayar : 0,
                list_transaksi : [],
            },

            simpan_berhasil : false,
            error_qty : false,
            error_barang : false,
        }
    },
    mounted() {
        this.generateCode()
        this.getCustomer()
        this.getBarang()
    },
    methods:{
        generateCode(){
            axios
            .request({
                url: "/api/sales/latest",
                method: "GET",
            })
            .then(response => {
                let result = response.data.last;
                let last_row = 1; 
                last_row = (result)?result.id+1 : last_row ;

                let tanggal = new Date().getDate();
                let bulan = new Date().getMonth();
                let tahun = new Date().getFullYear();

                this.sales.kode = 'INV-'+tanggal+bulan+tahun+last_row;
            })
        },

        getCustomer(){
            axios
            .request({
                url: "/api/customer",
                method: "GET",
            })
            .then(response => {
                this.customer = response.data.data;
            })
        },

        getCustomerDetail(event){
            let id = event.target.value;

            axios
            .request({
                url: "/api/customer/"+id+"/edit",
                method: "GET",
            })
            .then(response => {
                let data = response.data.data;
                this.customer.name = data.name;
                this.customer.telp = data.telp;
            })
        },

        getBarang(){
            axios
            .request({
                url: "/api/barang",
                method: "GET",
            })
            .then(response => {
                this.barang = response.data.data;
            })
        },

        tambah(){
            if(this.qty < 1){
                this.error_qty = true
                setTimeout(() => {
                    this.error_qty = false
                }, 2000)
                return false;
            }

            if(!this.barang_id){
                this.error_barang = true
                setTimeout(() => {
                    this.error_barang = false
                }, 2000)
                return false;
            }
            
            axios
            .request({
                url: "/api/barang/"+this.barang_id+"/edit",
                method: "GET",
            })
            .then(response => {
                let data = response.data.data;
                this.sales.list_transaksi.push({
                    id : data.id,
                    kode : data.kode,
                    nama : data.name,
                    qty : this.qty,
                    harga_bandrol : data.harga,
                    diskon_pct : this.disc_pct,
                    diskon_nilai : data.harga/100*this.disc_pct,
                    diskon : '',
                    harga_diskon : data.harga - data.harga/100*this.disc_pct,
                    total : (data.harga - data.harga/100*this.disc_pct) * this.qty,
                });

                this.sales.subtotal = this.sales.subtotal + ((data.harga - data.harga/100*this.disc_pct) * this.qty);

                this.qty = 1,
                this.disc_pct = 0,
                this.barang_id = ''
            })

            
        },

        removeRow(index){
            this.sales.list_transaksi.splice(index, 1)
        },

        formatPrice(value) {
            let val = (value/1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },

        total_bayar(subtotal,diskon,ongkir){
            let hasil = 0;
            hasil = (parseInt(subtotal)-parseInt(diskon))+parseInt(ongkir);
            this.sales.total_bayar = hasil;
            return this.formatPrice(hasil);
        },
        simpan(){
            axios
            .request({
                url : "/api/sales",
                method : "POST",
                data: this.sales
            })
            .then(response => {
                if(response.data.status == 'success'){
                    this.generateCode()
                    this.clearForm()
                    this.simpan_berhasil = true
                    setTimeout(() => {
                        this.simpan_berhasil = false
                    }, 2000);
                }
            })
        },
        clearForm(){
            this.barang_id = '',
            this.sales.tgl = null,
            this.sales.cust_id = null,
            this.sales.subtotal = 0,
            this.sales.diskon = 0,
            this.sales.ongkir = 0,
            this.sales.total_bayar = 0,
            this.sales.list_transaksi = [],
            this.customer.name = null,
            this.customer.telp = null
            this.qty = 1,
            this.disc_pct = 0
        }
    },
}
</script>
    