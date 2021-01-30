<template>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #f8b72a;">
      <div class="container">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">Hendi K</a>
        <a class="navbar-brand" href="#"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link :to="{name: 'transaksi'}" class="nav-link">Transaksi</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{name: 'transaksi.data'}" class="nav-link">Daftar Transaksi</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{name: 'customer.data'}" class="nav-link">Customer</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{name: 'barang.data'}" class="nav-link">Barang</router-link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
        </div>
      </div>
    </nav>
</template>

<script>
    export default {

    }
</script>
