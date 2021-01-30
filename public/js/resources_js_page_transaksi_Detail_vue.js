(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_page_transaksi_Detail_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/transaksi/Detail.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/transaksi/Detail.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'DetailTransaksi',
  data: function data() {
    return {
      data: ''
    };
  },
  mounted: function mounted() {
    this.getData();
  },
  methods: {
    getData: function getData() {
      var _this = this;

      axios.request({
        url: "/api/salesdetail/" + this.$route.params.id,
        method: "GET"
      }).then(function (response) {
        _this.data = response.data.data;
      });
    },
    formatPrice: function formatPrice(value) {
      var val = (value / 1).toFixed(0).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  }
});

/***/ }),

/***/ "./resources/js/page/transaksi/Detail.vue":
/*!************************************************!*\
  !*** ./resources/js/page/transaksi/Detail.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Detail_vue_vue_type_template_id_4a1b74ac_bindings_data_data_getData_options_formatPrice_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Detail.vue?vue&type=template&id=4a1b74ac&bindings={"data":"data","getData":"options","formatPrice":"options"} */ "./resources/js/page/transaksi/Detail.vue?vue&type=template&id=4a1b74ac&bindings={\"data\":\"data\",\"getData\":\"options\",\"formatPrice\":\"options\"}");
/* harmony import */ var _Detail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Detail.vue?vue&type=script&lang=js */ "./resources/js/page/transaksi/Detail.vue?vue&type=script&lang=js");



_Detail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Detail_vue_vue_type_template_id_4a1b74ac_bindings_data_data_getData_options_formatPrice_options___WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Detail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/page/transaksi/Detail.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Detail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/page/transaksi/Detail.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/page/transaksi/Detail.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Detail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Detail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Detail.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/transaksi/Detail.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/page/transaksi/Detail.vue?vue&type=template&id=4a1b74ac&bindings={\"data\":\"data\",\"getData\":\"options\",\"formatPrice\":\"options\"}":
/*!***************************************************************************************************************************************************!*\
  !*** ./resources/js/page/transaksi/Detail.vue?vue&type=template&id=4a1b74ac&bindings={"data":"data","getData":"options","formatPrice":"options"} ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Detail_vue_vue_type_template_id_4a1b74ac_bindings_data_data_getData_options_formatPrice_options___WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Detail_vue_vue_type_template_id_4a1b74ac_bindings_data_data_getData_options_formatPrice_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Detail.vue?vue&type=template&id=4a1b74ac&bindings={"data":"data","getData":"options","formatPrice":"options"} */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/transaksi/Detail.vue?vue&type=template&id=4a1b74ac&bindings={\"data\":\"data\",\"getData\":\"options\",\"formatPrice\":\"options\"}");


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/transaksi/Detail.vue?vue&type=template&id=4a1b74ac&bindings={\"data\":\"data\",\"getData\":\"options\",\"formatPrice\":\"options\"}":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/transaksi/Detail.vue?vue&type=template&id=4a1b74ac&bindings={"data":"data","getData":"options","formatPrice":"options"} ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
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
      /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", { class: "m-0 text-dark" }, "Detail Transaksi")
    ])
  ])
], -1 /* HOISTED */)
const _hoisted_3 = { class: "row" }
const _hoisted_4 = { class: "col-md-12" }
const _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Back")
const _hoisted_6 = { class: "table-responsive" }
const _hoisted_7 = { class: "table table-bordered" }
const _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("thead", null, [
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
const _hoisted_9 = { scope: "row" }
const _hoisted_10 = {
  key: 0,
  class: "alert alert-danger text-center"
}

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [
    _hoisted_2,
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
          to: { name: 'transaksi.data' },
          class: "btn btn-warning mb-2 btn-md"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
            _hoisted_5
          ]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["to"]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("table", _hoisted_7, [
            _hoisted_8,
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tbody", null, [
              ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.data, (row, i) => {
                return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("tr", { key: i }, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(i+1), 1 /* TEXT */),
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <td>{{row}} </td> "),
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
          ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_10, " Tidak Ada Data "))
          : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
      ])
    ])
  ]))
}

/***/ })

}]);