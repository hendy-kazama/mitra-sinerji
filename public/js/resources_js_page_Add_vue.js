(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_page_Add_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/Add.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/Add.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      pembayaran: '',
      notif_danger: false,
      notif_success: false,
      data: [],
      records: [{
        idx: 0,
        name: String.fromCharCode(65 + 0),
        persen: 0,
        pembayaran: 0,
        bonus: 0,
        total: 0
      }]
    };
  },
  mounted: function mounted() {},
  computed: {},
  methods: {
    addRow: function addRow() {
      this.records.push({
        idx: this.records.length,
        name: String.fromCharCode(65 + this.records.length),
        persen: 0,
        pembayaran: 0,
        bonus: 0,
        total: 0
      });
    },
    removeRow: function removeRow(index) {
      this.records.splice(index, 1);
    },
    formatUang: function formatUang(value) {
      var val = (value / 1).toFixed(0).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    hitungBonus: function hitungBonus(persen, total) {
      var hasil = persen / 100 * total;
      return this.formatUang(hasil);
    },
    total: function total(persen, _total) {
      var hasil = parseInt(persen / 100 * _total) + parseInt(_total);
      return this.formatUang(hasil);
    },
    save: function save() {
      var _this = this;

      var persen = 0;
      this.records.forEach(function (el) {
        persen += parseInt(el.persen);
      });

      if (persen != 100) {
        this.notif_danger = true;
        setTimeout(function () {
          _this.notif_danger = false;
        }, 1500);
      } else {
        this.notif_danger = false;
        this.records.forEach(function (el) {
          el.pembayaran = _this.$refs.bayar.value;
        });
        axios.request({
          url: "/api/pembayaran",
          method: "POST",
          data: this.records
        }).then(function (response) {
          var result = response.data;

          if (result.status = 'success') {
            _this.notif_success = true;
            setTimeout(function () {
              _this.notif_success = false;
            }, 1500);
            _this.records = [], _this.pembayaran = '', _this.records = [{
              idx: _this.records.length,
              name: String.fromCharCode(65 + _this.records.length),
              persen: 0,
              pembayaran: 0,
              bonus: 0,
              total: 0
            }];
          }
        })["catch"](function (error) {
          console.log(error);
        });
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/page/Add.vue":
/*!***********************************!*\
  !*** ./resources/js/page/Add.vue ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Add_vue_vue_type_template_id_207632ff_bindings_pembayaran_data_notif_danger_data_notif_success_data_data_data_records_data_addRow_options_removeRow_options_formatUang_options_hitungBonus_options_total_options_save_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=207632ff&bindings={"pembayaran":"data","notif_danger":"data","notif_success":"data","data":"data","records":"data","addRow":"options","removeRow":"options","formatUang":"options","hitungBonus":"options","total":"options","save":"options"} */ "./resources/js/page/Add.vue?vue&type=template&id=207632ff&bindings={\"pembayaran\":\"data\",\"notif_danger\":\"data\",\"notif_success\":\"data\",\"data\":\"data\",\"records\":\"data\",\"addRow\":\"options\",\"removeRow\":\"options\",\"formatUang\":\"options\",\"hitungBonus\":\"options\",\"total\":\"options\",\"save\":\"options\"}");
/* harmony import */ var _Add_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js */ "./resources/js/page/Add.vue?vue&type=script&lang=js");



_Add_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Add_vue_vue_type_template_id_207632ff_bindings_pembayaran_data_notif_danger_data_notif_success_data_data_data_records_data_addRow_options_removeRow_options_formatUang_options_hitungBonus_options_total_options_save_options___WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Add_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/page/Add.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Add_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/page/Add.vue?vue&type=script&lang=js":
/*!***********************************************************!*\
  !*** ./resources/js/page/Add.vue?vue&type=script&lang=js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Add_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Add_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Add.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/Add.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/page/Add.vue?vue&type=template&id=207632ff&bindings={\"pembayaran\":\"data\",\"notif_danger\":\"data\",\"notif_success\":\"data\",\"data\":\"data\",\"records\":\"data\",\"addRow\":\"options\",\"removeRow\":\"options\",\"formatUang\":\"options\",\"hitungBonus\":\"options\",\"total\":\"options\",\"save\":\"options\"}":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/page/Add.vue?vue&type=template&id=207632ff&bindings={"pembayaran":"data","notif_danger":"data","notif_success":"data","data":"data","records":"data","addRow":"options","removeRow":"options","formatUang":"options","hitungBonus":"options","total":"options","save":"options"} ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Add_vue_vue_type_template_id_207632ff_bindings_pembayaran_data_notif_danger_data_notif_success_data_data_data_records_data_addRow_options_removeRow_options_formatUang_options_hitungBonus_options_total_options_save_options___WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Add_vue_vue_type_template_id_207632ff_bindings_pembayaran_data_notif_danger_data_notif_success_data_data_data_records_data_addRow_options_removeRow_options_formatUang_options_hitungBonus_options_total_options_save_options___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Add.vue?vue&type=template&id=207632ff&bindings={"pembayaran":"data","notif_danger":"data","notif_success":"data","data":"data","records":"data","addRow":"options","removeRow":"options","formatUang":"options","hitungBonus":"options","total":"options","save":"options"} */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/Add.vue?vue&type=template&id=207632ff&bindings={\"pembayaran\":\"data\",\"notif_danger\":\"data\",\"notif_success\":\"data\",\"data\":\"data\",\"records\":\"data\",\"addRow\":\"options\",\"removeRow\":\"options\",\"formatUang\":\"options\",\"hitungBonus\":\"options\",\"total\":\"options\",\"save\":\"options\"}");


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/Add.vue?vue&type=template&id=207632ff&bindings={\"pembayaran\":\"data\",\"notif_danger\":\"data\",\"notif_success\":\"data\",\"data\":\"data\",\"records\":\"data\",\"addRow\":\"options\",\"removeRow\":\"options\",\"formatUang\":\"options\",\"hitungBonus\":\"options\",\"total\":\"options\",\"save\":\"options\"}":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/page/Add.vue?vue&type=template&id=207632ff&bindings={"pembayaran":"data","notif_danger":"data","notif_success":"data","data":"data","records":"data","addRow":"options","removeRow":"options","formatUang":"options","hitungBonus":"options","total":"options","save":"options"} ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


const _hoisted_1 = { class: "card" }
const _hoisted_2 = { class: "card-body" }
const _hoisted_3 = {
  key: 0,
  class: "alert alert-danger",
  role: "alert"
}
const _hoisted_4 = {
  key: 1,
  class: "alert alert-success",
  role: "alert"
}
const _hoisted_5 = { class: "form-group row" }
const _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", { class: "col-sm-2 col-form-label" }, "Pembayaran", -1 /* HOISTED */)
const _hoisted_7 = { class: "col-sm-10" }
const _hoisted_8 = { class: "form-group row" }
const _hoisted_9 = { class: "col-sm-12" }
const _hoisted_10 = { class: "form-group row" }
const _hoisted_11 = { class: "col-sm-2 col-form-label" }
const _hoisted_12 = { class: "col-sm-2" }
const _hoisted_13 = { class: "input-group" }
const _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", { class: "input-group-append" }, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", { class: "input-group-text" }, "%")
], -1 /* HOISTED */)
const _hoisted_15 = { class: "form-group row" }
const _hoisted_16 = { class: "col-sm-12" }
const _hoisted_17 = { class: "form-group row" }
const _hoisted_18 = { class: "col-sm-2 col-form-label" }
const _hoisted_19 = { class: "col-sm-3" }
const _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Pokok : Rp. ")
const _hoisted_21 = { class: "col-sm-3" }
const _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Bonus : Rp. ")
const _hoisted_23 = { class: "col-sm-3" }
const _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Total : Rp. ")

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("form", null, [
        ($data.notif_danger)
          ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_3, " Pembagian bonus masih salah! "))
          : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        ($data.notif_success)
          ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_4, " Data Berhasil disimpan "))
          : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [
          _hoisted_6,
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
              type: "text",
              ref: "bayar",
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ($data.pembayaran = $event)),
              class: "form-control",
              placeholder: "Dalam Rupiah"
            }, null, 512 /* NEED_PATCH */), [
              [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.pembayaran]
            ])
          ])
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_9, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
              type: "submit",
              class: "btn btn-sm btn-success float-left",
              onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => ($options.addRow && $options.addRow(...args)), ["prevent"]))
            }, "Tambah Buruh")
          ])
        ]),
        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.records, (row, i) => {
          return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_10, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", _hoisted_11, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Buruh " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.name) + " ", 1 /* TEXT */),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
                  type: "submit",
                  class: "btn btn-sm btn-danger",
                  onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($event => ($options.removeRow(i)), ["prevent"])
                }, "x", 8 /* PROPS */, ["onClick"])
              ]),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_12, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_13, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
                    type: "text",
                    "onUpdate:modelValue": $event => (row.persen = $event),
                    class: "form-control"
                  }, null, 8 /* PROPS */, ["onUpdate:modelValue"]), [
                    [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, row.persen]
                  ]),
                  _hoisted_14
                ])
              ])
            ])
          ]))
        }), 256 /* UNKEYED_FRAGMENT */)),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_15, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_16, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
              type: "submit",
              class: "btn btn-sm btn-primary float-right",
              onClick: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => ($options.save && $options.save(...args)), ["prevent"]))
            }, "SIMPAN")
          ])
        ]),
        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.records, (row, i) => {
          return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_17, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", _hoisted_18, "Buruh " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.name), 1 /* TEXT */),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_19, [
                _hoisted_20,
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
                  id: "pembayaran",
                  ref: "pembayaran"
                }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.formatUang($data.pembayaran)), 513 /* TEXT, NEED_PATCH */)
              ]),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_21, [
                _hoisted_22,
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
                  id: "bonus",
                  ref: "bonus"
                }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.hitungBonus(row.persen,$data.pembayaran)), 513 /* TEXT, NEED_PATCH */)
              ]),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_23, [
                _hoisted_24,
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
                  id: "total",
                  ref: "total"
                }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.total(row.persen,$data.pembayaran)), 513 /* TEXT, NEED_PATCH */)
              ])
            ])
          ]))
        }), 256 /* UNKEYED_FRAGMENT */))
      ])
    ])
  ]))
}

/***/ })

}]);