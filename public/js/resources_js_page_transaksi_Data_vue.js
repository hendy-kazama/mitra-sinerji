(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_page_transaksi_Data_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/transaksi/Data.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/transaksi/Data.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'DataTransaksi',
  data: function data() {
    return {
      data: '',
      grand_total: '',
      inv: '',
      detail_transaksi: ''
    };
  },
  mounted: function mounted() {
    this.getData();
  },
  methods: {
    getData: function getData() {
      var _this = this;

      axios.request({
        url: "/api/sales",
        method: "GET"
      }).then(function (response) {
        _this.data = response.data.data;
        var sum = 0;

        _this.data.forEach(function (element) {
          sum += element.total_bayar;
        });

        _this.grand_total = sum;
      });
    },
    formatPrice: function formatPrice(value) {
      var val = (value / 1).toFixed(0).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    detail: function detail(id, kode) {
      var _this2 = this;

      axios.request({
        url: "/api/salesdetail/" + id,
        method: "GET"
      }).then(function (response) {
        _this2.detail_transaksi = response.data.data;
        _this2.inv = kode;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/page/transaksi/Data.vue":
/*!**********************************************!*\
  !*** ./resources/js/page/transaksi/Data.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Data_vue_vue_type_template_id_7cb5a4c3_bindings_data_data_grand_total_data_inv_data_detail_transaksi_data_getData_options_formatPrice_options_detail_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Data.vue?vue&type=template&id=7cb5a4c3&bindings={"data":"data","grand_total":"data","inv":"data","detail_transaksi":"data","getData":"options","formatPrice":"options","detail":"options"} */ "./resources/js/page/transaksi/Data.vue?vue&type=template&id=7cb5a4c3&bindings={\"data\":\"data\",\"grand_total\":\"data\",\"inv\":\"data\",\"detail_transaksi\":\"data\",\"getData\":\"options\",\"formatPrice\":\"options\",\"detail\":\"options\"}");
/* harmony import */ var _Data_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Data.vue?vue&type=script&lang=js */ "./resources/js/page/transaksi/Data.vue?vue&type=script&lang=js");



_Data_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Data_vue_vue_type_template_id_7cb5a4c3_bindings_data_data_grand_total_data_inv_data_detail_transaksi_data_getData_options_formatPrice_options_detail_options___WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Data_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/page/transaksi/Data.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Data_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/page/transaksi/Data.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/page/transaksi/Data.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Data_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Data_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Data.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/transaksi/Data.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/page/transaksi/Data.vue?vue&type=template&id=7cb5a4c3&bindings={\"data\":\"data\",\"grand_total\":\"data\",\"inv\":\"data\",\"detail_transaksi\":\"data\",\"getData\":\"options\",\"formatPrice\":\"options\",\"detail\":\"options\"}":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/page/transaksi/Data.vue?vue&type=template&id=7cb5a4c3&bindings={"data":"data","grand_total":"data","inv":"data","detail_transaksi":"data","getData":"options","formatPrice":"options","detail":"options"} ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Data_vue_vue_type_template_id_7cb5a4c3_bindings_data_data_grand_total_data_inv_data_detail_transaksi_data_getData_options_formatPrice_options_detail_options___WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Data_vue_vue_type_template_id_7cb5a4c3_bindings_data_data_grand_total_data_inv_data_detail_transaksi_data_getData_options_formatPrice_options_detail_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Data.vue?vue&type=template&id=7cb5a4c3&bindings={"data":"data","grand_total":"data","inv":"data","detail_transaksi":"data","getData":"options","formatPrice":"options","detail":"options"} */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/transaksi/Data.vue?vue&type=template&id=7cb5a4c3&bindings={\"data\":\"data\",\"grand_total\":\"data\",\"inv\":\"data\",\"detail_transaksi\":\"data\",\"getData\":\"options\",\"formatPrice\":\"options\",\"detail\":\"options\"}");


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/transaksi/Data.vue?vue&type=template&id=7cb5a4c3&bindings={\"data\":\"data\",\"grand_total\":\"data\",\"inv\":\"data\",\"detail_transaksi\":\"data\",\"getData\":\"options\",\"formatPrice\":\"options\",\"detail\":\"options\"}":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/transaksi/Data.vue?vue&type=template&id=7cb5a4c3&bindings={"data":"data","grand_total":"data","inv":"data","detail_transaksi":"data","getData":"options","formatPrice":"options","detail":"options"} ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


const _hoisted_1 = { class: "container-fluid" }
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("section", { class: "content-header" }, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", { class: "container-fluid" }, [
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", { class: "row mb-2" }, [
      /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", { class: "m-0 text-dark" }, "Daftar Transaksi")
    ])
  ])
], -1 /* HOISTED */)
const _hoisted_3 = { class: "row" }
const _hoisted_4 = { class: "col-md-12" }
const _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Tambah")
const _hoisted_6 = { class: "table-responsive" }
const _hoisted_7 = { class: "table table-bordered" }
const _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("thead", null, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tr", null, [
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", { scope: "col" }, "No"),
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", { scope: "col" }, "No Transaksi"),
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", { scope: "col" }, "Tanggal"),
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", { scope: "col" }, "Nama Customer"),
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", { scope: "col" }, "Jumlah Barang"),
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", { scope: "col" }, "Sub Total"),
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", { scope: "col" }, "Diskon"),
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", { scope: "col" }, "Ongkir"),
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", { scope: "col" }, "Total")
  ])
], -1 /* HOISTED */)
const _hoisted_9 = { scope: "row" }
const _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", {
  colspan: "8",
  class: "text-right"
}, "Grand Total", -1 /* HOISTED */)
const _hoisted_11 = { colspan: "1" }
const _hoisted_12 = {
  key: 0,
  class: "alert alert-danger text-center"
}
const _hoisted_13 = {
  class: "modal fade",
  id: "Modal",
  tabindex: "-1",
  "aria-labelledby": "ModalLabel",
  "aria-hidden": "true"
}
const _hoisted_14 = { class: "modal-dialog modal-lg" }
const _hoisted_15 = { class: "modal-content" }
const _hoisted_16 = { class: "modal-header" }
const _hoisted_17 = {
  class: "modal-title",
  id: "ModalLabel"
}
const _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Detail Transaksi ")
const _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
  type: "button",
  class: "close",
  "data-dismiss": "modal",
  "aria-label": "Close"
}, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", { "aria-hidden": "true" }, "×")
], -1 /* HOISTED */)
const _hoisted_20 = { class: "modal-body" }
const _hoisted_21 = { class: "col-md-12" }
const _hoisted_22 = { class: "table-responsive" }
const _hoisted_23 = { class: "table table-bordered" }
const _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("thead", null, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tr", null, [
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", { scope: "col" }, "No"),
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", { scope: "col" }, "Barang"),
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", { scope: "col" }, "Harga"),
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", { scope: "col" }, "Qty"),
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", { scope: "col" }, "Diskon %"),
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", { scope: "col" }, "Diskon Rp"),
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", { scope: "col" }, "Harga Diskon"),
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", { scope: "col" }, "Total")
  ])
], -1 /* HOISTED */)
const _hoisted_25 = { scope: "row" }
const _hoisted_26 = {
  key: 0,
  class: "alert alert-danger text-center"
}
const _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", { class: "modal-footer" }, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    type: "button",
    class: "btn btn-danger",
    "data-dismiss": "modal"
  }, "Close")
], -1 /* HOISTED */)

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [
    _hoisted_2,
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
          to: { name: 'transaksi' },
          class: "btn btn-primary mb-2 btn-md"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
            _hoisted_5
          ]),
          _: 1 /* STABLE */
        }),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("table", _hoisted_7, [
            _hoisted_8,
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tbody", null, [
              ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.data, (row, i) => {
                return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("tr", { key: i }, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(i+1), 1 /* TEXT */),
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
                      type: "button",
                      class: "btn btn-info btn-sm",
                      onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => ($options.detail(row.id,row.kode)), ["prevent"]),
                      "data-toggle": "modal",
                      "data-target": "#Modal"
                    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.kode), 9 /* TEXT, PROPS */, ["onClick"])
                  ]),
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.tgl), 1 /* TEXT */),
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.customer.name), 1 /* TEXT */),
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.detail_transaksi.length), 1 /* TEXT */),
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatPrice(row.subtotal)), 1 /* TEXT */),
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatPrice(row.diskon)), 1 /* TEXT */),
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatPrice(row.ongkir)), 1 /* TEXT */),
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatPrice(row.total_bayar)), 1 /* TEXT */)
                ]))
              }), 128 /* KEYED_FRAGMENT */)),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tr", null, [
                _hoisted_10,
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatPrice($data.grand_total)), 1 /* TEXT */)
              ])
            ])
          ])
        ]),
        (!$data.data)
          ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_12, " Tidak Ada Data "))
          : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
      ])
    ]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Modal "),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_13, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_14, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_15, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_16, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h5", _hoisted_17, [
              _hoisted_18,
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.inv), 1 /* TEXT */)
            ]),
            _hoisted_19
          ]),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_20, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_21, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_22, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("table", _hoisted_23, [
                  _hoisted_24,
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tbody", null, [
                    ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.detail_transaksi, (row, i) => {
                      return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("tr", { key: i }, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(i+1), 1 /* TEXT */),
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.barang.name), 1 /* TEXT */),
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatPrice(row.harga_bandrol)), 1 /* TEXT */),
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.qty), 1 /* TEXT */),
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.diskon_pct) + "% ", 1 /* TEXT */),
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatPrice(row.diskon_nilai)), 1 /* TEXT */),
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatPrice(row.harga_diskon)), 1 /* TEXT */),
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatPrice(row.total)), 1 /* TEXT */)
                      ]))
                    }), 128 /* KEYED_FRAGMENT */))
                  ])
                ])
              ]),
              (!$data.data)
                ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_26, " Tidak Ada Data "))
                : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
            ])
          ]),
          _hoisted_27
        ])
      ])
    ])
  ]))
}

/***/ })

}]);