<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div v-if="notif_success" class="alert alert-success" role="alert">
                    Edit data berhasil
                </div>
                <div class="card">
                    <div class="alert alert-primary">
                        Edit Barang
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
                            <button class="btn btn-primary btn-md float-right" @click.prevent="ubah(form.id)">
                                <i class="fa fa-save"></i> Update
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
        name: 'EditBarang',
        data(){
            return {
                notif_success : false,
                form : []
            }
        },
        mounted() {
            this.show(this.$route.params.id)
        },
        methods:{
            show(id){
                axios
                .request({
                    url: "/api/barang/"+id+"/edit",
                    method: "GET",
                })
                .then(response => {
                    this.form = response.data.data;
                })
                .catch();
            },
            ubah(id){
                axios
                .request({
                    url:"/api/barang/"+id,
                    data:this.form,
                    method:"PUT",
                })
                .then(response => {
                    if(response.data.status == 'success'){
                        this.notif_success = true
                        setTimeout(() => {
                            this.notif_success = false
                        }, 2000)
                    }
                })
            },
        }
        
    }
</script>
