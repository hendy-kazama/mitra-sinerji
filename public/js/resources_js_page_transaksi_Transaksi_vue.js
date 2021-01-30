(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_page_transaksi_Transaksi_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/transaksi/Transaksi.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/transaksi/Transaksi.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Transaksi',
  data: function data() {
    var _ref;

    return _ref = {
      customer: [],
      barang: [],
      barang_id: ''
    }, _defineProperty(_ref, "customer", {
      name: '',
      telp: ''
    }), _defineProperty(_ref, "qty", 1), _defineProperty(_ref, "disc_pct", 0), _defineProperty(_ref, "sales", {
      kode: null,
      tgl: null,
      cust_id: null,
      subtotal: 0,
      diskon: 0,
      ongkir: 0,
      total_bayar: 0,
      list_transaksi: []
    }), _defineProperty(_ref, "simpan_berhasil", false), _defineProperty(_ref, "error_qty", false), _defineProperty(_ref, "error_barang", false), _ref;
  },
  mounted: function mounted() {
    this.generateCode();
    this.getCustomer();
    this.getBarang();
  },
  methods: {
    generateCode: function generateCode() {
      var _this = this;

      axios.request({
        url: "/api/sales/latest",
        method: "GET"
      }).then(function (response) {
        var result = response.data.last;
        var last_row = 1;
        last_row = result ? result.id + 1 : last_row;
        var tanggal = new Date().getDate();
        var bulan = new Date().getMonth();
        var tahun = new Date().getFullYear();
        _this.sales.kode = 'INV-' + tanggal + bulan + tahun + last_row;
      });
    },
    getCustomer: function getCustomer() {
      var _this2 = this;

      axios.request({
        url: "/api/customer",
        method: "GET"
      }).then(function (response) {
        _this2.customer = response.data.data;
      });
    },
    getCustomerDetail: function getCustomerDetail(event) {
      var _this3 = this;

      var id = event.target.value;
      axios.request({
        url: "/api/customer/" + id + "/edit",
        method: "GET"
      }).then(function (response) {
        var data = response.data.data;
        _this3.customer.name = data.name;
        _this3.customer.telp = data.telp;
      });
    },
    getBarang: function getBarang() {
      var _this4 = this;

      axios.request({
        url: "/api/barang",
        method: "GET"
      }).then(function (response) {
        _this4.barang = response.data.data;
      });
    },
    tambah: function tambah() {
      var _this5 = this;

      if (this.qty < 1) {
        this.error_qty = true;
        setTimeout(function () {
          _this5.error_qty = false;
        }, 2000);
        return false;
      }

      if (!this.barang_id) {
        this.error_barang = true;
        setTimeout(function () {
          _this5.error_barang = false;
        }, 2000);
        return false;
      }

      axios.request({
        url: "/api/barang/" + this.barang_id + "/edit",
        method: "GET"
      }).then(function (response) {
        var data = response.data.data;

        _this5.sales.list_transaksi.push({
          id: data.id,
          kode: data.kode,
          nama: data.name,
          qty: _this5.qty,
          harga_bandrol: data.harga,
          diskon_pct: _this5.disc_pct,
          diskon_nilai: data.harga / 100 * _this5.disc_pct,
          diskon: '',
          harga_diskon: data.harga - data.harga / 100 * _this5.disc_pct,
          total: (data.harga - data.harga / 100 * _this5.disc_pct) * _this5.qty
        });

        _this5.sales.subtotal = _this5.sales.subtotal + (data.harga - data.harga / 100 * _this5.disc_pct) * _this5.qty;
        _this5.qty = 1, _this5.disc_pct = 0, _this5.barang_id = '';
      });
    },
    removeRow: function removeRow(index) {
      this.sales.list_transaksi.splice(index, 1);
    },
    formatPrice: function formatPrice(value) {
      var val = (value / 1).toFixed(0).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    total_bayar: function total_bayar(subtotal, diskon, ongkir) {
      var hasil = 0;
      hasil = parseInt(subtotal) - parseInt(diskon) + parseInt(ongkir);
      this.sales.total_bayar = hasil;
      return this.formatPrice(hasil);
    },
    simpan: function simpan() {
      var _this6 = this;

      axios.request({
        url: "/api/sales",
        method: "POST",
        data: this.sales
      }).then(function (response) {
        if (response.data.status == 'success') {
          _this6.generateCode();

          _this6.clearForm();

          _this6.simpan_berhasil = true;
          setTimeout(function () {
            _this6.simpan_berhasil = false;
          }, 2000);
        }
      });
    },
    clearForm: function clearForm() {
      this.barang_id = '', this.sales.tgl = null, this.sales.cust_id = null, this.sales.subtotal = 0, this.sales.diskon = 0, this.sales.ongkir = 0, this.sales.total_bayar = 0, this.sales.list_transaksi = [], this.customer.name = null, this.customer.telp = null;
      this.qty = 1, this.disc_pct = 0;
    }
  }
});

/***/ }),

/***/ "./resources/js/page/transaksi/Transaksi.vue":
/*!***************************************************!*\
  !*** ./resources/js/page/transaksi/Transaksi.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Transaksi_vue_vue_type_template_id_d1265342_bindings_customer_data_barang_data_barang_id_data_qty_data_disc_pct_data_sales_data_simpan_berhasil_data_error_qty_data_error_barang_data_generateCode_options_getCustomer_options_getCustomerDetail_options_getBarang_options_tambah_options_removeRow_options_formatPrice_options_total_bayar_options_simpan_options_clearForm_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Transaksi.vue?vue&type=template&id=d1265342&bindings={"customer":"data","barang":"data","barang_id":"data","qty":"data","disc_pct":"data","sales":"data","simpan_berhasil":"data","error_qty":"data","error_barang":"data","generateCode":"options","getCustomer":"options","getCustomerDetail":"options","getBarang":"options","tambah":"options","removeRow":"options","formatPrice":"options","total_bayar":"options","simpan":"options","clearForm":"options"} */ "./resources/js/page/transaksi/Transaksi.vue?vue&type=template&id=d1265342&bindings={\"customer\":\"data\",\"barang\":\"data\",\"barang_id\":\"data\",\"qty\":\"data\",\"disc_pct\":\"data\",\"sales\":\"data\",\"simpan_berhasil\":\"data\",\"error_qty\":\"data\",\"error_barang\":\"data\",\"generateCode\":\"options\",\"getCustomer\":\"options\",\"getCustomerDetail\":\"options\",\"getBarang\":\"options\",\"tambah\":\"options\",\"removeRow\":\"options\",\"formatPrice\":\"options\",\"total_bayar\":\"options\",\"simpan\":\"options\",\"clearForm\":\"options\"}");
/* harmony import */ var _Transaksi_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Transaksi.vue?vue&type=script&lang=js */ "./resources/js/page/transaksi/Transaksi.vue?vue&type=script&lang=js");



_Transaksi_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Transaksi_vue_vue_type_template_id_d1265342_bindings_customer_data_barang_data_barang_id_data_qty_data_disc_pct_data_sales_data_simpan_berhasil_data_error_qty_data_error_barang_data_generateCode_options_getCustomer_options_getCustomerDetail_options_getBarang_options_tambah_options_removeRow_options_formatPrice_options_total_bayar_options_simpan_options_clearForm_options___WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Transaksi_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/page/transaksi/Transaksi.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Transaksi_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/page/transaksi/Transaksi.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/page/transaksi/Transaksi.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Transaksi_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Transaksi_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Transaksi.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/transaksi/Transaksi.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/page/transaksi/Transaksi.vue?vue&type=template&id=d1265342&bindings={\"customer\":\"data\",\"barang\":\"data\",\"barang_id\":\"data\",\"qty\":\"data\",\"disc_pct\":\"data\",\"sales\":\"data\",\"simpan_berhasil\":\"data\",\"error_qty\":\"data\",\"error_barang\":\"data\",\"generateCode\":\"options\",\"getCustomer\":\"options\",\"getCustomerDetail\":\"options\",\"getBarang\":\"options\",\"tambah\":\"options\",\"removeRow\":\"options\",\"formatPrice\":\"options\",\"total_bayar\":\"options\",\"simpan\":\"options\",\"clearForm\":\"options\"}":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/page/transaksi/Transaksi.vue?vue&type=template&id=d1265342&bindings={"customer":"data","barang":"data","barang_id":"data","qty":"data","disc_pct":"data","sales":"data","simpan_berhasil":"data","error_qty":"data","error_barang":"data","generateCode":"options","getCustomer":"options","getCustomerDetail":"options","getBarang":"options","tambah":"options","removeRow":"options","formatPrice":"options","total_bayar":"options","simpan":"options","clearForm":"options"} ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Transaksi_vue_vue_type_template_id_d1265342_bindings_customer_data_barang_data_barang_id_data_qty_data_disc_pct_data_sales_data_simpan_berhasil_data_error_qty_data_error_barang_data_generateCode_options_getCustomer_options_getCustomerDetail_options_getBarang_options_tambah_options_removeRow_options_formatPrice_options_total_bayar_options_simpan_options_clearForm_options___WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Transaksi_vue_vue_type_template_id_d1265342_bindings_customer_data_barang_data_barang_id_data_qty_data_disc_pct_data_sales_data_simpan_berhasil_data_error_qty_data_error_barang_data_generateCode_options_getCustomer_options_getCustomerDetail_options_getBarang_options_tambah_options_removeRow_options_formatPrice_options_total_bayar_options_simpan_options_clearForm_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Transaksi.vue?vue&type=template&id=d1265342&bindings={"customer":"data","barang":"data","barang_id":"data","qty":"data","disc_pct":"data","sales":"data","simpan_berhasil":"data","error_qty":"data","error_barang":"data","generateCode":"options","getCustomer":"options","getCustomerDetail":"options","getBarang":"options","tambah":"options","removeRow":"options","formatPrice":"options","total_bayar":"options","simpan":"options","clearForm":"options"} */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/transaksi/Transaksi.vue?vue&type=template&id=d1265342&bindings={\"customer\":\"data\",\"barang\":\"data\",\"barang_id\":\"data\",\"qty\":\"data\",\"disc_pct\":\"data\",\"sales\":\"data\",\"simpan_berhasil\":\"data\",\"error_qty\":\"data\",\"error_barang\":\"data\",\"generateCode\":\"options\",\"getCustomer\":\"options\",\"getCustomerDetail\":\"options\",\"getBarang\":\"options\",\"tambah\":\"options\",\"removeRow\":\"options\",\"formatPrice\":\"options\",\"total_bayar\":\"options\",\"simpan\":\"options\",\"clearForm\":\"options\"}");


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/transaksi/Transaksi.vue?vue&type=template&id=d1265342&bindings={\"customer\":\"data\",\"barang\":\"data\",\"barang_id\":\"data\",\"qty\":\"data\",\"disc_pct\":\"data\",\"sales\":\"data\",\"simpan_berhasil\":\"data\",\"error_qty\":\"data\",\"error_barang\":\"data\",\"generateCode\":\"options\",\"getCustomer\":\"options\",\"getCustomerDetail\":\"options\",\"getBarang\":\"options\",\"tambah\":\"options\",\"removeRow\":\"options\",\"formatPrice\":\"options\",\"total_bayar\":\"options\",\"simpan\":\"options\",\"clearForm\":\"options\"}":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/transaksi/Transaksi.vue?vue&type=template&id=d1265342&bindings={"customer":"data","barang":"data","barang_id":"data","qty":"data","disc_pct":"data","sales":"data","simpan_berhasil":"data","error_qty":"data","error_barang":"data","generateCode":"options","getCustomer":"options","getCustomerDetail":"options","getBarang":"options","tambah":"options","removeRow":"options","formatPrice":"options","total_bayar":"options","simpan":"options","clearForm":"options"} ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


const _hoisted_1 = { class: "card" }
const _hoisted_2 = { class: "card-body" }
const _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h5", null, "Transaksi", -1 /* HOISTED */)
const _hoisted_4 = { class: "form-group row" }
const _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", { class: "col-xl-1 col-form-label col-form-label-sm" }, "No", -1 /* HOISTED */)
const _hoisted_6 = { class: "col-xl-3" }
const _hoisted_7 = { class: "form-group row" }
const _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", { class: "col-xl-1 col-form-label col-form-label-sm" }, "Tanggal", -1 /* HOISTED */)
const _hoisted_9 = { class: "col-xl-3" }
const _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("br", null, null, -1 /* HOISTED */)
const _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h5", null, "Customer", -1 /* HOISTED */)
const _hoisted_12 = { class: "form-group row" }
const _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", { class: "col-xl-1 col-form-label col-form-label-sm" }, "Kode", -1 /* HOISTED */)
const _hoisted_14 = { class: "col-xl-3" }
const _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("option", { value: "" }, "Pilih", -1 /* HOISTED */)
const _hoisted_16 = { class: "form-group row" }
const _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", { class: "col-xl-1 col-form-label col-form-label-sm" }, "Nama", -1 /* HOISTED */)
const _hoisted_18 = { class: "col-xl-3" }
const _hoisted_19 = { class: "form-group row" }
const _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", { class: "col-xl-1 col-form-label col-form-label-sm" }, "Telp", -1 /* HOISTED */)
const _hoisted_21 = { class: "col-xl-3" }
const _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("br", null, null, -1 /* HOISTED */)
const _hoisted_23 = {
  key: 0,
  class: "alert alert-warning",
  role: "alert"
}
const _hoisted_24 = {
  key: 1,
  class: "alert alert-warning",
  role: "alert"
}
const _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h5", null, "Barang", -1 /* HOISTED */)
const _hoisted_26 = { class: "form-group row" }
const _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", { class: "col-xl-1 col-form-label col-form-label-sm" }, "Barang", -1 /* HOISTED */)
const _hoisted_28 = { class: "col-xl-5" }
const _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("option", { value: "" }, "Pilih", -1 /* HOISTED */)
const _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", { class: "col-xl-1 col-form-label col-form-label-sm" }, "Quantity", -1 /* HOISTED */)
const _hoisted_31 = { class: "col-xl-1" }
const _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", { class: "col-xl-1 col-form-label col-form-label-sm" }, "Disc %", -1 /* HOISTED */)
const _hoisted_33 = { class: "col-xl-1" }
const _hoisted_34 = { class: "col-xl-1 tombol-tambah" }
const _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("br", null, null, -1 /* HOISTED */)
const _hoisted_36 = { class: "table-responsive-xl" }
const _hoisted_37 = { class: "table table-bordered table-sm" }
const _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("thead", null, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tr", null, [
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
      rowspan: "2",
      scope: "col",
      class: "align-middle text-center"
    }, "Action"),
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
      rowspan: "2",
      scope: "col",
      class: "align-middle text-center"
    }, "No"),
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
      rowspan: "2",
      scope: "col",
      class: "align-middle text-center"
    }, "Kode Barang"),
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
      rowspan: "2",
      scope: "col",
      class: "align-middle text-center"
    }, "Nama Barang"),
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
      rowspan: "2",
      scope: "col",
      class: "align-middle text-center"
    }, "QTY"),
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
      rowspan: "2",
      scope: "col",
      class: "align-middle text-center"
    }, "Harga Bandrol"),
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
      colspan: "2",
      scope: "col",
      class: "align-middle text-center"
    }, "Diskon"),
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
      rowspan: "2",
      scope: "col",
      class: "align-middle text-center"
    }, "Harga Diskon"),
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
      rowspan: "2",
      scope: "col",
      class: "align-middle text-center"
    }, "Total")
  ]),
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tr", null, [
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
      scope: "col",
      class: "text-center"
    }, "%"),
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
      scope: "col",
      class: "text-center"
    }, "(Rp)")
  ])
], -1 /* HOISTED */)
const _hoisted_39 = {
  scope: "row",
  class: "text-center"
}
const _hoisted_40 = { scope: "row" }
const _hoisted_41 = { scope: "row" }
const _hoisted_42 = { scope: "row" }
const _hoisted_43 = { scope: "row" }
const _hoisted_44 = { scope: "row" }
const _hoisted_45 = { scope: "row" }
const _hoisted_46 = { scope: "row" }
const _hoisted_47 = { scope: "row" }
const _hoisted_48 = { scope: "row" }
const _hoisted_49 = { key: 1 }
const _hoisted_50 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", {
  colspan: "11",
  class: "table-danger text-center"
}, "Data tidak ditemukan !", -1 /* HOISTED */)
const _hoisted_51 = { class: "form-group row mt-4" }
const _hoisted_52 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", { class: "col-9 text-right form-control-sm" }, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("b", null, "Sub Total")
], -1 /* HOISTED */)
const _hoisted_53 = { class: "col-3 text-center " }
const _hoisted_54 = { class: "form-group row" }
const _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", { class: "col-9 text-right" }, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("b", null, "Diskon")
], -1 /* HOISTED */)
const _hoisted_56 = { class: "col-3 text-center" }
const _hoisted_57 = { class: "form-group row" }
const _hoisted_58 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", { class: "col-9 text-right" }, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("b", null, "Ongkir")
], -1 /* HOISTED */)
const _hoisted_59 = { class: "col-3 text-center" }
const _hoisted_60 = { class: "form-group row" }
const _hoisted_61 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", { class: "col-9 text-right" }, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("b", null, "Total Bayar")
], -1 /* HOISTED */)
const _hoisted_62 = { class: "col-3 text-center" }
const _hoisted_63 = {
  key: 2,
  class: "alert alert-success text-center",
  role: "alert"
}
const _hoisted_64 = { class: "row mt-4" }
const _hoisted_65 = { class: "col text-center" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [
      _hoisted_3,
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [
        _hoisted_5,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
            type: "text",
            class: "form-control form-control-sm",
            "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ($data.sales.kode = $event)),
            readonly: ""
          }, null, 512 /* NEED_PATCH */), [
            [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.sales.kode]
          ])
        ])
      ]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [
        _hoisted_8,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_9, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
            type: "date",
            class: "form-control form-control-sm",
            "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ($data.sales.tgl = $event))
          }, null, 512 /* NEED_PATCH */), [
            [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.sales.tgl]
          ])
        ])
      ]),
      _hoisted_10,
      _hoisted_11,
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_12, [
        _hoisted_13,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_14, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("select", {
            class: "form-control form-control-sm",
            "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => ($data.sales.cust_id = $event)),
            onChange: _cache[4] || (_cache[4] = $event => ($options.getCustomerDetail($event)))
          }, [
            _hoisted_15,
            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.customer, (row, i) => {
              return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("option", {
                value: row.id
              }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.kode) + " | " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.name), 9 /* TEXT, PROPS */, ["value"]))
            }), 256 /* UNKEYED_FRAGMENT */))
          ], 544 /* HYDRATE_EVENTS, NEED_PATCH */), [
            [vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.sales.cust_id]
          ])
        ])
      ]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_16, [
        _hoisted_17,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_18, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
            type: "text",
            class: "form-control form-control-sm",
            "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => ($data.customer.name = $event))
          }, null, 512 /* NEED_PATCH */), [
            [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.customer.name]
          ])
        ])
      ]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_19, [
        _hoisted_20,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_21, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
            type: "text",
            class: "form-control form-control-sm",
            "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => ($data.customer.telp = $event))
          }, null, 512 /* NEED_PATCH */), [
            [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.customer.telp]
          ])
        ])
      ]),
      _hoisted_22,
      ($data.error_qty)
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_23, " Quantity tidak boleh kosong ! "))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
      ($data.error_barang)
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_24, " Anda belum memilih barang ! "))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
      _hoisted_25,
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_26, [
        _hoisted_27,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_28, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("select", {
            class: "form-control form-control-sm",
            "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => ($data.barang_id = $event))
          }, [
            _hoisted_29,
            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.barang, (row, i) => {
              return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("option", {
                value: row.id
              }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.name), 9 /* TEXT, PROPS */, ["value"]))
            }), 256 /* UNKEYED_FRAGMENT */))
          ], 512 /* NEED_PATCH */), [
            [vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.barang_id]
          ])
        ]),
        _hoisted_30,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_31, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
            type: "number",
            class: "form-control form-control-sm",
            "onUpdate:modelValue": _cache[8] || (_cache[8] = $event => ($data.qty = $event))
          }, null, 512 /* NEED_PATCH */), [
            [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.qty]
          ])
        ]),
        _hoisted_32,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_33, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
            type: "number",
            class: "form-control form-control-sm",
            "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => ($data.disc_pct = $event))
          }, null, 512 /* NEED_PATCH */), [
            [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.disc_pct]
          ])
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_34, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
            onClick: _cache[10] || (_cache[10] = (...args) => ($options.tambah && $options.tambah(...args))),
            class: "btn btn-primary btn-sm "
          }, " Tambah ")
        ])
      ]),
      _hoisted_35,
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_36, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("table", _hoisted_37, [
          _hoisted_38,
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tbody", null, [
            ($data.sales.list_transaksi.length)
              ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 0 }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.sales.list_transaksi, (row, i) => {
                  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("tr", { key: i }, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_39, [
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
                        type: "submit",
                        class: "btn btn-sm btn-danger",
                        onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => ($options.removeRow(i)), ["prevent"])
                      }, "Hapus", 8 /* PROPS */, ["onClick"])
                    ]),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(i+1), 1 /* TEXT */),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.kode), 1 /* TEXT */),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_42, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.nama), 1 /* TEXT */),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.qty), 1 /* TEXT */),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_44, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.formatPrice(row.harga_bandrol)), 1 /* TEXT */),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_45, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.diskon_pct) + "%", 1 /* TEXT */),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.formatPrice(row.diskon_nilai)), 1 /* TEXT */),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.formatPrice(row.harga_diskon)), 1 /* TEXT */),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", _hoisted_48, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(this.formatPrice(row.total)), 1 /* TEXT */)
                  ]))
                }), 128 /* KEYED_FRAGMENT */))
              : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("tr", _hoisted_49, [
                  _hoisted_50
                ]))
          ])
        ])
      ]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_51, [
        _hoisted_52,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_53, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
            type: "text",
            class: "form-control form-control-sm",
            value: $options.formatPrice($data.sales.subtotal),
            readonly: ""
          }, null, 8 /* PROPS */, ["value"])
        ])
      ]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_54, [
        _hoisted_55,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_56, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
            type: "text",
            class: "form-control form-control-sm",
            "onUpdate:modelValue": _cache[11] || (_cache[11] = $event => ($data.sales.diskon = $event))
          }, null, 512 /* NEED_PATCH */), [
            [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.sales.diskon]
          ])
        ])
      ]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_57, [
        _hoisted_58,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_59, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
            type: "text",
            class: "form-control form-control-sm",
            "onUpdate:modelValue": _cache[12] || (_cache[12] = $event => ($data.sales.ongkir = $event))
          }, null, 512 /* NEED_PATCH */), [
            [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.sales.ongkir]
          ])
        ])
      ]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_60, [
        _hoisted_61,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_62, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
            type: "text",
            class: "form-control form-control-sm",
            value: $options.total_bayar($data.sales.subtotal,$data.sales.diskon,$data.sales.ongkir),
            readonly: ""
          }, null, 8 /* PROPS */, ["value"])
        ])
      ]),
      ($data.simpan_berhasil)
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_63, " Simpan Berhasil ! "))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_64, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_65, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
            onClick: _cache[13] || (_cache[13] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => ($options.simpan && $options.simpan(...args)), ["prevent"])),
            class: "btn btn-success mr-3"
          }, " Simpan "),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
            onClick: _cache[14] || (_cache[14] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => ($options.clearForm && $options.clearForm(...args)), ["prevent"])),
            class: "btn btn-warning"
          }, " Batal ")
        ])
      ])
    ])
  ]))
}

/***/ })

}]);