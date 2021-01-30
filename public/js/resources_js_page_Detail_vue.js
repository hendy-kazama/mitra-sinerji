(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_page_Detail_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/Detail.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/Detail.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  data: function data() {
    return {
      data: ''
    };
  },
  mounted: function mounted() {
    this.show(this.$route.params.id);
  },
  methods: {
    show: function show(id) {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().request({
        url: "/api/pembayaran/" + id,
        method: "GET"
      }).then(function (response) {
        _this.data = response.data.data;
      })["catch"]();
    },
    formatUang: function formatUang(value) {
      var val = (value / 1).toFixed(0).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  }
});

/***/ }),

/***/ "./resources/js/page/Detail.vue":
/*!**************************************!*\
  !*** ./resources/js/page/Detail.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Detail_vue_vue_type_template_id_0576673a_bindings_data_data_show_options_formatUang_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Detail.vue?vue&type=template&id=0576673a&bindings={"data":"data","show":"options","formatUang":"options"} */ "./resources/js/page/Detail.vue?vue&type=template&id=0576673a&bindings={\"data\":\"data\",\"show\":\"options\",\"formatUang\":\"options\"}");
/* harmony import */ var _Detail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Detail.vue?vue&type=script&lang=js */ "./resources/js/page/Detail.vue?vue&type=script&lang=js");



_Detail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Detail_vue_vue_type_template_id_0576673a_bindings_data_data_show_options_formatUang_options___WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Detail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/page/Detail.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Detail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/page/Detail.vue?vue&type=script&lang=js":
/*!**************************************************************!*\
  !*** ./resources/js/page/Detail.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Detail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Detail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Detail.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/Detail.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/page/Detail.vue?vue&type=template&id=0576673a&bindings={\"data\":\"data\",\"show\":\"options\",\"formatUang\":\"options\"}":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/page/Detail.vue?vue&type=template&id=0576673a&bindings={"data":"data","show":"options","formatUang":"options"} ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Detail_vue_vue_type_template_id_0576673a_bindings_data_data_show_options_formatUang_options___WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Detail_vue_vue_type_template_id_0576673a_bindings_data_data_show_options_formatUang_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Detail.vue?vue&type=template&id=0576673a&bindings={"data":"data","show":"options","formatUang":"options"} */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/Detail.vue?vue&type=template&id=0576673a&bindings={\"data\":\"data\",\"show\":\"options\",\"formatUang\":\"options\"}");


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/Detail.vue?vue&type=template&id=0576673a&bindings={\"data\":\"data\",\"show\":\"options\",\"formatUang\":\"options\"}":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/Detail.vue?vue&type=template&id=0576673a&bindings={"data":"data","show":"options","formatUang":"options"} ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


const _hoisted_1 = { class: "card border-success" }
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", { class: "card-header" }, "Detail Pembayaran", -1 /* HOISTED */)
const _hoisted_3 = { class: "card-body" }
const _hoisted_4 = { class: "form-group row" }
const _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", { class: "col-sm-2 col-form-label" }, "Nama", -1 /* HOISTED */)
const _hoisted_6 = { class: "col-sm-10" }
const _hoisted_7 = { class: "form-group row" }
const _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", { class: "col-sm-2 col-form-label" }, "Pembayaran", -1 /* HOISTED */)
const _hoisted_9 = { class: "col-sm-10" }
const _hoisted_10 = { class: "form-group row" }
const _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", { class: "col-sm-2 col-form-label" }, "Persentase", -1 /* HOISTED */)
const _hoisted_12 = { class: "col-sm-2" }
const _hoisted_13 = { class: "input-group" }
const _hoisted_14 = { class: "form-group row" }
const _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", { class: "col-sm-2 col-form-label" }, "Bonus", -1 /* HOISTED */)
const _hoisted_16 = { class: "col-sm-10" }
const _hoisted_17 = { class: "form-group row" }
const _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", { class: "col-sm-2 col-form-label" }, "Total", -1 /* HOISTED */)
const _hoisted_19 = { class: "col-sm-10" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [
      _hoisted_2,
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [
          _hoisted_5,
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.data.name), 1 /* TEXT */)
          ])
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [
          _hoisted_8,
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_9, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.data.pembayaran), 1 /* TEXT */)
          ])
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_10, [
          _hoisted_11,
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_12, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_13, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.data.persentase) + "%", 1 /* TEXT */)
            ])
          ])
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_14, [
          _hoisted_15,
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_16, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.data.bonus), 1 /* TEXT */)
          ])
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_17, [
          _hoisted_18,
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_19, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.data.total), 1 /* TEXT */)
          ])
        ])
      ])
    ])
  ]))
}

/***/ })

}]);