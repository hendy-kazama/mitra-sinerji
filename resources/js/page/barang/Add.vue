<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div v-if="notif_success" class="alert alert-success" role="alert">
                    Tambah data berhasil
                </div>
                <div class="card">
                    <div class="alert alert-primary">
                        Add New Barang
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                            <label for="">Kode</label>
                            <input type="text" v-model="form.kode" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="">Nama Barang</label>
                            <input type="text" v-model="form.name" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="">Harga</label>
                            <input type="number" v-model="form.harga" class="form-control">
                        </div>
                        <div class="form-group">
                            <router-link :to="{name: 'barang.data'}" class="btn btn-warning btn-md">Back</router-link>
                            <button class="btn btn-primary btn-md float-right" @click.prevent="submit">
                                <i class="fa fa-save"></i> Add New
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'AddBarang',
        data() {
            return {
                notif_success : false,
                form : {
                    kode : '',
                    name : '',
                    harga : ''
                }
            }
        },
        methods: {
            submit() {
                axios
                .request({
                    url: "/api/barang",
                    method: "POST",
                    data: this.form
                })
                .then(response => {
                    var result = response.data;
                    console.log(result);
                    if(result.status='success'){
                        this.notif_success = true
                        setTimeout(() => {
                            this.notif_success = false
                        }, 2000)
                        this.form.kode = '',
                        this.form.name = '',
                        this.form.harga = ''
                    }
                })
                .catch(error => {console.log(error)});
            }
        },
        
    }
</script>
