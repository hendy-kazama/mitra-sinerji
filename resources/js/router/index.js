import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/daftar-transaksi',
    name: 'transaksi.data',
    component: () => import('../page/transaksi/Data.vue')
  },
  {
    path: '/detail-transaksi/:id',
    name: 'transaksi.detail',
    component: () => import('../page/transaksi/Detail.vue')
  },
  {
    path: '/',
    name: 'transaksi',
    component: () => import('../page/transaksi/Transaksi.vue')
  },
  {
    path: '/customer',
    component: () => import('../page/customer/Index.vue'),
    children: [
      {
        path: '',
        name: 'customer.data',
        component: () => import('../page/customer/View.vue'),
      },
      {
        path: 'add',
        name: 'customer.add',
        component: () => import('../page/customer/Add.vue'),
      },
      {
        path: 'edit/:id',
        name: 'customer.edit',
        component: () => import('../page/customer/Edit.vue'),
      },
    ]
  },
  {
    path: '/barang',
    component: () => import('../page/barang/Index.vue'),
    children: [
      {
        path: '',
        name: 'barang.data',
        component: () => import('../page/barang/View.vue'),
      },
      {
        path: 'add',
        name: 'barang.add',
        component: () => import('../page/barang/Add.vue'),
      },
      {
        path: 'edit/:id',
        name: 'barang.edit',
        component: () => import('../page/barang/Edit.vue'),
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
