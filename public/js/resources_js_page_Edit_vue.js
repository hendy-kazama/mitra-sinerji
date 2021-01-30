(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_page_Edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/Edit.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/Edit.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************/
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
      data: '',
      notif_edit: false
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
    ubah: function ubah(id) {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().request({
        url: "/api/pembayaran/" + id,
        data: this.data,
        method: "PUT"
      }).then(function (response) {
        if (response.data.status == 'success') {
          _this2.notif_edit = true;
          setTimeout(function () {
            _this2.notif_edit = false;
          }, 1500);
        }
      });
    },
    hitungBonus: function hitungBonus(persen, total) {
      var hasil = persen / 100 * total;
      return this.formatUang(hasil);
    },
    total: function total(persen, _total) {
      var hasil = parseInt(persen / 100 * _total) + parseInt(_total);
      return this.formatUang(hasil);
    },
    formatUang: function formatUang(value) {
      var val = (value / 1).toFixed(0).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  }
});

/***/ }),

/***/ "./resources/js/page/Edit.vue":
/*!************************************!*\
  !*** ./resources/js/page/Edit.vue ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_cbd257c8_bindings_data_data_notif_edit_data_show_options_ubah_options_hitungBonus_options_total_options_formatUang_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=cbd257c8&bindings={"data":"data","notif_edit":"data","show":"options","ubah":"options","hitungBonus":"options","total":"options","formatUang":"options"} */ "./resources/js/page/Edit.vue?vue&type=template&id=cbd257c8&bindings={\"data\":\"data\",\"notif_edit\":\"data\",\"show\":\"options\",\"ubah\":\"options\",\"hitungBonus\":\"options\",\"total\":\"options\",\"formatUang\":\"options\"}");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js */ "./resources/js/page/Edit.vue?vue&type=script&lang=js");



_Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Edit_vue_vue_type_template_id_cbd257c8_bindings_data_data_notif_edit_data_show_options_ubah_options_hitungBonus_options_total_options_formatUang_options___WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/page/Edit.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/page/Edit.vue?vue&type=script&lang=js":
/*!************************************************************!*\
  !*** ./resources/js/page/Edit.vue?vue&type=script&lang=js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Edit.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/Edit.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/page/Edit.vue?vue&type=template&id=cbd257c8&bindings={\"data\":\"data\",\"notif_edit\":\"data\",\"show\":\"options\",\"ubah\":\"options\",\"hitungBonus\":\"options\",\"total\":\"options\",\"formatUang\":\"options\"}":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/page/Edit.vue?vue&type=template&id=cbd257c8&bindings={"data":"data","notif_edit":"data","show":"options","ubah":"options","hitungBonus":"options","total":"options","formatUang":"options"} ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_template_id_cbd257c8_bindings_data_data_notif_edit_data_show_options_ubah_options_hitungBonus_options_total_options_formatUang_options___WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_template_id_cbd257c8_bindings_data_data_notif_edit_data_show_options_ubah_options_hitungBonus_options_total_options_formatUang_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Edit.vue?vue&type=template&id=cbd257c8&bindings={"data":"data","notif_edit":"data","show":"options","ubah":"options","hitungBonus":"options","total":"options","formatUang":"options"} */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/Edit.vue?vue&type=template&id=cbd257c8&bindings={\"data\":\"data\",\"notif_edit\":\"data\",\"show\":\"options\",\"ubah\":\"options\",\"hitungBonus\":\"options\",\"total\":\"options\",\"formatUang\":\"options\"}");


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/Edit.vue?vue&type=template&id=cbd257c8&bindings={\"data\":\"data\",\"notif_edit\":\"data\",\"show\":\"options\",\"ubah\":\"options\",\"hitungBonus\":\"options\",\"total\":\"options\",\"formatUang\":\"options\"}":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/Edit.vue?vue&type=template&id=cbd257c8&bindings={"data":"data","notif_edit":"data","show":"options","ubah":"options","hitungBonus":"options","total":"options","formatUang":"options"} ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


const _hoisted_1 = {
  key: 0,
  class: "alert alert-success",
  role: "alert"
}
const _hoisted_2 = { class: "card border-success" }
const _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", { class: "card-header" }, "Edit Data", -1 /* HOISTED */)
const _hoisted_4 = { class: "card-body" }
const _hoisted_5 = { class: "form-group row" }
const _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", { class: "col-sm-2 col-form-label" }, "Nama", -1 /* HOISTED */)
const _hoisted_7 = { class: "col-sm-10" }
const _hoisted_8 = { class: "form-group row" }
const _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", { class: "col-sm-2 col-form-label" }, "Pembayaran", -1 /* HOISTED */)
const _hoisted_10 = { class: "col-sm-10" }
const _hoisted_11 = { class: "form-group row" }
const _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", { class: "col-sm-2 col-form-label" }, "Persentase", -1 /* HOISTED */)
const _hoisted_13 = { class: "col-sm-2" }
const _hoisted_14 = { class: "input-group" }
const _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", { class: "input-group-append" }, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", { class: "input-group-text" }, "%")
], -1 /* HOISTED */)
const _hoisted_16 = { class: "form-group row" }
const _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", { class: "col-sm-2 col-form-label" }, "Bonus", -1 /* HOISTED */)
const _hoisted_18 = { class: "col-sm-10" }
const _hoisted_19 = { class: "form-group row" }
const _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", { class: "col-sm-2 col-form-label" }, "Total", -1 /* HOISTED */)
const _hoisted_21 = { class: "col-sm-10" }
const _hoisted_22 = { class: "form-group row" }
const _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", { class: "col-sm-2 col-form-label" }, null, -1 /* HOISTED */)
const _hoisted_24 = { class: "col-sm-10" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [
    ($data.notif_edit)
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, " Edit data berhasil "))
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [
      _hoisted_3,
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [
          _hoisted_6,
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
              type: "text",
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ($data.data.name = $event)),
              class: "form-control"
            }, null, 512 /* NEED_PATCH */), [
              [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.data.name]
            ])
          ])
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [
          _hoisted_9,
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_10, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
              type: "text",
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ($data.data.pembayaran = $event)),
              class: "form-control"
            }, null, 512 /* NEED_PATCH */), [
              [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.data.pembayaran]
            ])
          ])
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_11, [
          _hoisted_12,
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_13, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_14, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
                type: "text",
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => ($data.data.persentase = $event)),
                class: "form-control"
              }, null, 512 /* NEED_PATCH */), [
                [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.data.persentase]
              ]),
              _hoisted_15
            ])
          ])
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_16, [
          _hoisted_17,
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_18, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
              type: "text",
              value: $options.hitungBonus($data.data.persentase,$data.data.pembayaran),
              disabled: "",
              class: "form-control"
            }, null, 8 /* PROPS */, ["value"])
          ])
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_19, [
          _hoisted_20,
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_21, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
              type: "text",
              value: $options.total($data.data.persentase,$data.data.pembayaran),
              disabled: "",
              class: "form-control"
            }, null, 8 /* PROPS */, ["value"])
          ])
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_22, [
          _hoisted_23,
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_24, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
              class: "btn btn-primary float-right",
              onClick: _cache[4] || (_cache[4] = $event => ($options.ubah($data.data.id)))
            }, "Update")
          ])
        ])
      ])
    ])
  ]))
}

/***/ })

}]);