<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div v-if="notif_delete" class="alert alert-success" role="alert">
                    Hapus data berhasil
                </div>
                <router-link :to="{ name: 'customer.add' }" class="btn btn-primary mb-2 btn-md">Tambah</router-link>
                <div class="table-responsive">
                    <table class="table table-bordered">
                        
                        <thead>
                            <tr>
                            <th scope="col">No</th>
                            <th scope="col">Kode</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Telp</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(row,i) in data" :key="i">
                                <th scope="row">{{i+1}}</th>
                                <td>{{row.kode}} </td>
                                <td>{{row.name}} </td>
                                <td>{{row.telp}} </td>
                                <td>
                                    <router-link :to="{ name: 'customer.edit', params: {id: row.id} }" class="btn btn-info btn-sm">Edit</router-link> &nbsp;
                                    <button class="btn btn-danger btn-sm" @click="hapus(row.id)">Delete</button>
                                </td>
                            </tr>
                            <tr>
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
    name: 'DataCustomer',
    data() {
        return {
            data: '',
            notif_delete : false,
        }
    },
    mounted() {
        this.getData()
    },
    methods:{
        getData(){
            axios
            .request({
                url: "/api/customer",
                method: "GET",
            })
            .then(response => {
                this.data = response.data.data;
            })
        },
        hapus(id){
            axios
            .request({
                url: "/api/customer/"+id,
                method: "DELETE",
            })
            .then(response => {
                var result = response.data;
                if(result.status == 'success'){
                    this.notif_delete = true
                    setTimeout(() => {
                        this.notif_delete = false
                    }, 2000)
                this.getData()
                }
            })
            .catch(error => {console.log(error)});
        },
    }
}
</script>
