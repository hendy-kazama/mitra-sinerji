(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_page_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/Index.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/Index.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
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
      notif_delete: false
    };
  },
  mounted: function mounted() {
    this.getPembayaran();
  },
  methods: {
    getPembayaran: function getPembayaran() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().request({
        url: "/api/pembayaran/",
        method: "GET"
      }).then(function (response) {
        _this.data = response.data.data;
      })["catch"]();
    },
    hapus: function hapus(id) {
      this.remove(id);
    },
    remove: function remove(id) {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().request({
        url: "/api/pembayaran/" + id,
        method: "DELETE"
      }).then(function (response) {
        var result = response.data;

        if (result.status == 'success') {
          _this2.notif_delete = true;
          setTimeout(function () {
            _this2.notif_delete = false;
          }, 1500);

          _this2.getPembayaran();
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    formatUang: function formatUang(value) {
      var val = (value / 1).toFixed(0).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  }
});

/***/ }),

/***/ "./resources/js/page/Index.vue":
/*!*************************************!*\
  !*** ./resources/js/page/Index.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_2b092da0_bindings_data_data_notif_delete_data_getPembayaran_options_hapus_options_remove_options_formatUang_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=2b092da0&bindings={"data":"data","notif_delete":"data","getPembayaran":"options","hapus":"options","remove":"options","formatUang":"options"} */ "./resources/js/page/Index.vue?vue&type=template&id=2b092da0&bindings={\"data\":\"data\",\"notif_delete\":\"data\",\"getPembayaran\":\"options\",\"hapus\":\"options\",\"remove\":\"options\",\"formatUang\":\"options\"}");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js */ "./resources/js/page/Index.vue?vue&type=script&lang=js");



_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Index_vue_vue_type_template_id_2b092da0_bindings_data_data_notif_delete_data_getPembayaran_options_hapus_options_remove_options_formatUang_options___WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/page/Index.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/page/Index.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./resources/js/page/Index.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/Index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/page/Index.vue?vue&type=template&id=2b092da0&bindings={\"data\":\"data\",\"notif_delete\":\"data\",\"getPembayaran\":\"options\",\"hapus\":\"options\",\"remove\":\"options\",\"formatUang\":\"options\"}":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/page/Index.vue?vue&type=template&id=2b092da0&bindings={"data":"data","notif_delete":"data","getPembayaran":"options","hapus":"options","remove":"options","formatUang":"options"} ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_2b092da0_bindings_data_data_notif_delete_data_getPembayaran_options_hapus_options_remove_options_formatUang_options___WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_2b092da0_bindings_data_data_notif_delete_data_getPembayaran_options_hapus_options_remove_options_formatUang_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=2b092da0&bindings={"data":"data","notif_delete":"data","getPembayaran":"options","hapus":"options","remove":"options","formatUang":"options"} */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/Index.vue?vue&type=template&id=2b092da0&bindings={\"data\":\"data\",\"notif_delete\":\"data\",\"getPembayaran\":\"options\",\"hapus\":\"options\",\"remove\":\"options\",\"formatUang\":\"options\"}");


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/Index.vue?vue&type=template&id=2b092da0&bindings={\"data\":\"data\",\"notif_delete\":\"data\",\"getPembayaran\":\"options\",\"hapus\":\"options\",\"remove\":\"options\",\"formatUang\":\"options\"}":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/Index.vue?vue&type=template&id=2b092da0&bindings={"data":"data","notif_delete":"data","getPembayaran":"options","hapus":"options","remove":"options","formatUang":"options"} ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
const _hoisted_2 = { class: "table table-bordered" }
const _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("thead", null, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tr", null, [
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", { scope: "col" }, "#"),
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", { scope: "col" }, "Nama"),
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", { scope: "col" }, "Pembayaran"),
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", { scope: "col" }, "Persentase"),
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", { scope: "col" }, "Bonus"),
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", { scope: "col" }, "Total"),
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", { scope: "col" }, "Action")
  ])
], -1 /* HOISTED */)
const _hoisted_4 = { scope: "row" }
const _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Show")
const _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("   ")
const _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Edit")
const _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("   ")

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [
    ($data.notif_delete)
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, " Hapus data berhasil "))
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("table", _hoisted_2, [
      _hoisted_3,
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tbody", null, [
        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.data, (row, i) => {
          return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("tr", { key: i }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(i+1), 1 /* TEXT */),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.name), 1 /* TEXT */),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, "Rp. " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatUang(row.pembayaran)), 1 /* TEXT */),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.persentase) + "%", 1 /* TEXT */),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, "Rp. " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatUang(row.bonus)), 1 /* TEXT */),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, "Rp. " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatUang(row.total)), 1 /* TEXT */),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
                to: { name: 'show', params: {id: row.id} },
                class: "btn btn-primary btn-sm"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                  _hoisted_5
                ]),
                _: 2 /* DYNAMIC */
              }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"]),
              _hoisted_6,
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
                to: { name: 'edit', params: {id: row.id} },
                class: "btn btn-info btn-sm"
              }, {
                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                  _hoisted_7
                ]),
                _: 2 /* DYNAMIC */
              }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"]),
              _hoisted_8,
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
                class: "btn btn-danger btn-sm",
                onClick: $event => ($options.hapus(row.id))
              }, "Delete", 8 /* PROPS */, ["onClick"])
            ])
          ]))
        }), 128 /* KEYED_FRAGMENT */))
      ])
    ])
  ]))
}

/***/ })

}]);