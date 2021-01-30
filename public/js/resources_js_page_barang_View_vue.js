(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_page_barang_View_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/barang/View.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/barang/View.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'DataBarang',
  data: function data() {
    return {
      data: '',
      notif_delete: false
    };
  },
  mounted: function mounted() {
    this.getData();
  },
  methods: {
    getData: function getData() {
      var _this = this;

      axios.request({
        url: "/api/barang",
        method: "GET"
      }).then(function (response) {
        _this.data = response.data.data;
      });
    },
    hapus: function hapus(id) {
      var _this2 = this;

      axios.request({
        url: "/api/barang/" + id,
        method: "DELETE"
      }).then(function (response) {
        var result = response.data;

        if (result.status == 'success') {
          _this2.notif_delete = true;
          setTimeout(function () {
            _this2.notif_delete = false;
          }, 2000);

          _this2.getData();
        }
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/page/barang/View.vue":
/*!*******************************************!*\
  !*** ./resources/js/page/barang/View.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _View_vue_vue_type_template_id_45f8a52a_bindings_data_data_notif_delete_data_getData_options_hapus_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.vue?vue&type=template&id=45f8a52a&bindings={"data":"data","notif_delete":"data","getData":"options","hapus":"options"} */ "./resources/js/page/barang/View.vue?vue&type=template&id=45f8a52a&bindings={\"data\":\"data\",\"notif_delete\":\"data\",\"getData\":\"options\",\"hapus\":\"options\"}");
/* harmony import */ var _View_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View.vue?vue&type=script&lang=js */ "./resources/js/page/barang/View.vue?vue&type=script&lang=js");



_View_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _View_vue_vue_type_template_id_45f8a52a_bindings_data_data_notif_delete_data_getData_options_hapus_options___WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_View_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/page/barang/View.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_View_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/page/barang/View.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./resources/js/page/barang/View.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_View_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_View_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./View.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/barang/View.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/page/barang/View.vue?vue&type=template&id=45f8a52a&bindings={\"data\":\"data\",\"notif_delete\":\"data\",\"getData\":\"options\",\"hapus\":\"options\"}":
/*!**************************************************************************************************************************************************************!*\
  !*** ./resources/js/page/barang/View.vue?vue&type=template&id=45f8a52a&bindings={"data":"data","notif_delete":"data","getData":"options","hapus":"options"} ***!
  \**************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_View_vue_vue_type_template_id_45f8a52a_bindings_data_data_notif_delete_data_getData_options_hapus_options___WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_View_vue_vue_type_template_id_45f8a52a_bindings_data_data_notif_delete_data_getData_options_hapus_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./View.vue?vue&type=template&id=45f8a52a&bindings={"data":"data","notif_delete":"data","getData":"options","hapus":"options"} */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/barang/View.vue?vue&type=template&id=45f8a52a&bindings={\"data\":\"data\",\"notif_delete\":\"data\",\"getData\":\"options\",\"hapus\":\"options\"}");


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/barang/View.vue?vue&type=template&id=45f8a52a&bindings={\"data\":\"data\",\"notif_delete\":\"data\",\"getData\":\"options\",\"hapus\":\"options\"}":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/barang/View.vue?vue&type=template&id=45f8a52a&bindings={"data":"data","notif_delete":"data","getData":"options","hapus":"options"} ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
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
const _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Tambah")
const _hoisted_6 = { class: "table-responsive" }
const _hoisted_7 = { class: "table table-bordered" }
const _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("thead", null, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tr", null, [
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", { scope: "col" }, "No"),
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", { scope: "col" }, "Kode"),
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", { scope: "col" }, "Nama"),
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", { scope: "col" }, "Harga"),
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("th", { scope: "col" }, "Action")
  ])
], -1 /* HOISTED */)
const _hoisted_9 = { scope: "row" }
const _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Edit")
const _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("   ")
const _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("tr", null, null, -1 /* HOISTED */)
const _hoisted_13 = {
  key: 1,
  class: "alert alert-danger text-center"
}

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [
        ($data.notif_delete)
          ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_4, " Hapus data berhasil "))
          : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
          to: { name: 'barang.add' },
          class: "btn btn-primary mb-2 btn-md"
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
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.kode), 1 /* TEXT */),
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.name), 1 /* TEXT */),
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.harga), 1 /* TEXT */),
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("td", null, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
                      to: { name: 'barang.edit', params: {id: row.id} },
                      class: "btn btn-info btn-sm"
                    }, {
                      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                        _hoisted_10
                      ]),
                      _: 2 /* DYNAMIC */
                    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["to"]),
                    _hoisted_11,
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
                      class: "btn btn-danger btn-sm",
                      onClick: $event => ($options.hapus(row.id))
                    }, "Delete", 8 /* PROPS */, ["onClick"])
                  ])
                ]))
              }), 128 /* KEYED_FRAGMENT */)),
              _hoisted_12
            ])
          ])
        ]),
        (!$data.data)
          ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_13, " Tidak Ada Data "))
          : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
      ])
    ])
  ]))
}

/***/ })

}]);