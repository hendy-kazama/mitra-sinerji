(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_page_barang_Edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/barang/Edit.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/barang/Edit.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'EditBarang',
  data: function data() {
    return {
      notif_success: false,
      form: []
    };
  },
  mounted: function mounted() {
    this.show(this.$route.params.id);
  },
  methods: {
    show: function show(id) {
      var _this = this;

      axios.request({
        url: "/api/barang/" + id + "/edit",
        method: "GET"
      }).then(function (response) {
        _this.form = response.data.data;
      })["catch"]();
    },
    ubah: function ubah(id) {
      var _this2 = this;

      axios.request({
        url: "/api/barang/" + id,
        data: this.form,
        method: "PUT"
      }).then(function (response) {
        if (response.data.status == 'success') {
          _this2.notif_success = true;
          setTimeout(function () {
            _this2.notif_success = false;
          }, 2000);
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/page/barang/Edit.vue":
/*!*******************************************!*\
  !*** ./resources/js/page/barang/Edit.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_158cb360_bindings_notif_success_data_form_data_show_options_ubah_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=158cb360&bindings={"notif_success":"data","form":"data","show":"options","ubah":"options"} */ "./resources/js/page/barang/Edit.vue?vue&type=template&id=158cb360&bindings={\"notif_success\":\"data\",\"form\":\"data\",\"show\":\"options\",\"ubah\":\"options\"}");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js */ "./resources/js/page/barang/Edit.vue?vue&type=script&lang=js");



_Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Edit_vue_vue_type_template_id_158cb360_bindings_notif_success_data_form_data_show_options_ubah_options___WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/page/barang/Edit.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/page/barang/Edit.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./resources/js/page/barang/Edit.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Edit.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/barang/Edit.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/page/barang/Edit.vue?vue&type=template&id=158cb360&bindings={\"notif_success\":\"data\",\"form\":\"data\",\"show\":\"options\",\"ubah\":\"options\"}":
/*!***********************************************************************************************************************************************************!*\
  !*** ./resources/js/page/barang/Edit.vue?vue&type=template&id=158cb360&bindings={"notif_success":"data","form":"data","show":"options","ubah":"options"} ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_template_id_158cb360_bindings_notif_success_data_form_data_show_options_ubah_options___WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_template_id_158cb360_bindings_notif_success_data_form_data_show_options_ubah_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Edit.vue?vue&type=template&id=158cb360&bindings={"notif_success":"data","form":"data","show":"options","ubah":"options"} */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/barang/Edit.vue?vue&type=template&id=158cb360&bindings={\"notif_success\":\"data\",\"form\":\"data\",\"show\":\"options\",\"ubah\":\"options\"}");


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/barang/Edit.vue?vue&type=template&id=158cb360&bindings={\"notif_success\":\"data\",\"form\":\"data\",\"show\":\"options\",\"ubah\":\"options\"}":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/barang/Edit.vue?vue&type=template&id=158cb360&bindings={"notif_success":"data","form":"data","show":"options","ubah":"options"} ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


const _hoisted_1 = { class: "container-fluid" }
const _hoisted_2 = { class: "row" }
const _hoisted_3 = { class: "col-md-12" }
const _hoisted_4 = {
  key: 0,
  class: "alert alert-success",
  role: "alert"
}
const _hoisted_5 = { class: "card" }
const _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", { class: "alert alert-primary" }, " Edit Barang ", -1 /* HOISTED */)
const _hoisted_7 = { class: "card-body" }
const _hoisted_8 = { class: "form-group" }
const _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", { for: "" }, "Kode", -1 /* HOISTED */)
const _hoisted_10 = { class: "form-group" }
const _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", { for: "" }, "Nama Barang", -1 /* HOISTED */)
const _hoisted_12 = { class: "form-group" }
const _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", { for: "" }, "Harga", -1 /* HOISTED */)
const _hoisted_14 = { class: "form-group" }
const _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Back")
const _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", { class: "fa fa-save" }, null, -1 /* HOISTED */)
const _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Update ")

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [
        ($data.notif_success)
          ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_4, " Edit data berhasil "))
          : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [
          _hoisted_6,
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [
              _hoisted_9,
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
                type: "text",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ($data.form.kode = $event)),
                class: "form-control"
              }, null, 512 /* NEED_PATCH */), [
                [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.kode]
              ])
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_10, [
              _hoisted_11,
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
                type: "text",
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ($data.form.name = $event)),
                class: "form-control"
              }, null, 512 /* NEED_PATCH */), [
                [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.name]
              ])
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_12, [
              _hoisted_13,
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
                type: "number",
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => ($data.form.harga = $event)),
                class: "form-control"
              }, null, 512 /* NEED_PATCH */), [
                [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.harga]
              ])
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_14, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
                to: {name: 'barang.data'},
                class: "btn btn-warning btn-md"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                  _hoisted_15
                ]),
                _: 1 /* STABLE */
              }, 8 /* PROPS */, ["to"]),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
                class: "btn btn-primary btn-md float-right",
                onClick: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => ($options.ubah($data.form.id)), ["prevent"]))
              }, [
                _hoisted_16,
                _hoisted_17
              ])
            ])
          ])
        ])
      ])
    ])
  ]))
}

/***/ })

}]);