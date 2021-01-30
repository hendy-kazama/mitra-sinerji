<template>
    <div class="container">
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <h3 class="m-0 text-dark">Manage Barang</h3>
                </div>
              </div>
        </section>

        <section class="content">
            <div class="row">
                <router-view></router-view>
            </div>
        </section>
    </div>
</template>
<script>
    export default {
        name: 'IndexBarang',
    }
</script>
