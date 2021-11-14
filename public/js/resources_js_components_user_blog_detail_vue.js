"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_user_blog_detail_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/blog/detail.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/blog/detail.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      item: [],
      recentBlog: [],
      keyword: ''
    };
  },
  watch: {
    keyword: function keyword(after, before) {
      this.getSearch();
    }
  },
  methods: {
    imgurl: function imgurl(url) {
      return "http://localhost:8000/" + url;
    },
    detail: function detail() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().get('/blog/show/' + this.$route.params.id).then(function (response) {
        _this.item = response.data.blog;
      });
    },
    recentBlogList: function recentBlogList() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().get('/recent/blog').then(function (response) {
        console.log(response);
        _this2.recentBlog = response.data.blog;
      });
    },
    blogShow: function blogShow(id) {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().get('/blog/show/' + id).then(function (response) {
        _this3.item = response.data.blog;
      });
    },
    getSearch: function getSearch() {
      var _this4 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().get('/liveSearchBlog/' + this.keyword).then(function (response) {
        _this4.recentBlog = response.data.blog;
      });
    }
  },
  mounted: function mounted() {
    this.detail(), this.recentBlogList();
  }
});

/***/ }),

/***/ "./resources/js/components/user/blog/detail.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/user/blog/detail.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _detail_vue_vue_type_template_id_b846ff36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.vue?vue&type=template&id=b846ff36& */ "./resources/js/components/user/blog/detail.vue?vue&type=template&id=b846ff36&");
/* harmony import */ var _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.vue?vue&type=script&lang=js& */ "./resources/js/components/user/blog/detail.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_vue_vue_type_template_id_b846ff36___WEBPACK_IMPORTED_MODULE_0__.render,
  _detail_vue_vue_type_template_id_b846ff36___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/blog/detail.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/blog/detail.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/user/blog/detail.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./detail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/blog/detail.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/blog/detail.vue?vue&type=template&id=b846ff36&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/user/blog/detail.vue?vue&type=template&id=b846ff36& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_b846ff36___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_b846ff36___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_b846ff36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./detail.vue?vue&type=template&id=b846ff36& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/blog/detail.vue?vue&type=template&id=b846ff36&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/blog/detail.vue?vue&type=template&id=b846ff36&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/blog/detail.vue?vue&type=template&id=b846ff36& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "section",
      { staticClass: "breadcrumbs", attrs: { id: "breadcrumbs" } },
      [
        _c("div", { staticClass: "container" }, [
          _c(
            "div",
            {
              staticClass: "d-flex justify-content-between align-items-center",
            },
            [
              _c("h2", [_vm._v("Blog")]),
              _vm._v(" "),
              _c("ol", [
                _c(
                  "li",
                  [_c("router-link", { attrs: { to: "/" } }, [_vm._v("Home")])],
                  1
                ),
                _vm._v(" "),
                _c("li", [_vm._v("Blog")]),
              ]),
            ]
          ),
        ]),
      ]
    ),
    _vm._v(" "),
    _c("section", { staticClass: "blog", attrs: { id: "blog" } }, [
      _c(
        "div",
        { staticClass: "container", attrs: { "data-aos": "fade-up" } },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-lg-8 entries" }, [
              _c("article", { staticClass: "entry entry-single" }, [
                _c("div", { staticClass: "entry-img" }, [
                  _c("img", {
                    staticClass: "img-fluid",
                    attrs: { src: _vm.imgurl(_vm.item.image), alt: "" },
                  }),
                ]),
                _vm._v(" "),
                _c("h2", { staticClass: "entry-title" }, [
                  _c("a", { attrs: { href: "blog-single.html" } }, [
                    _vm._v(_vm._s(_vm.item.title)),
                  ]),
                ]),
                _vm._v(" "),
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "entry-content" }, [
                  _vm._v(
                    "\n              " +
                      _vm._s(_vm.item.description) +
                      "\n          "
                  ),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-4" }, [
              _c("div", { staticClass: "sidebar" }, [
                _c("h3", { staticClass: "sidebar-title" }, [_vm._v("Search")]),
                _vm._v(" "),
                _c("div", { staticClass: "sidebar-item search-form" }, [
                  _c("form", { attrs: { action: "" } }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.keyword,
                          expression: "keyword",
                        },
                      ],
                      attrs: { type: "text" },
                      domProps: { value: _vm.keyword },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.keyword = $event.target.value
                        },
                      },
                    }),
                    _vm._v(" "),
                    _vm._m(1),
                  ]),
                ]),
                _vm._v(" "),
                _c("h3", { staticClass: "sidebar-title" }, [
                  _vm._v("Recent Posts"),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "sidebar-item recent-posts" },
                  _vm._l(_vm.recentBlog, function (blog) {
                    return _c(
                      "div",
                      { key: blog.id, staticClass: "post-item clearfix" },
                      [
                        _c("img", {
                          attrs: { src: _vm.imgurl(blog.image), alt: "" },
                        }),
                        _vm._v(" "),
                        _c("h4", [
                          _c(
                            "a",
                            {
                              on: {
                                click: function ($event) {
                                  return _vm.blogShow(blog.id)
                                },
                              },
                            },
                            [_vm._v(_vm._s(blog.title))]
                          ),
                        ]),
                        _vm._v(" "),
                        _c("time", { attrs: { datetime: "2020-01-01" } }, [
                          _vm._v(_vm._s(blog.created_at)),
                        ]),
                      ]
                    )
                  }),
                  0
                ),
                _vm._v(" "),
                _c("h3", { staticClass: "sidebar-title" }, [_vm._v("Tags")]),
                _vm._v(" "),
                _vm._m(2),
              ]),
            ]),
          ]),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "entry-meta" }, [
      _c("ul", [
        _c("li", { staticClass: "d-flex align-items-center" }, [
          _c("i", { staticClass: "bi bi-person" }),
          _vm._v(" "),
          _c("a", { attrs: { href: "blog-single.html" } }, [
            _vm._v("John Doe"),
          ]),
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "d-flex align-items-center" }, [
          _c("i", { staticClass: "bi bi-clock" }),
          _vm._v(" "),
          _c("a", { attrs: { href: "blog-single.html" } }, [
            _c("time", { attrs: { datetime: "2020-01-01" } }, [
              _vm._v("Jan 1, 2020"),
            ]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("button", { attrs: { disabled: "", type: "submit" } }, [
      _c("i", { staticClass: "bi bi-search" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "sidebar-item tags" }, [
      _c("ul", [
        _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("App")])]),
        _vm._v(" "),
        _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("IT")])]),
        _vm._v(" "),
        _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Business")])]),
        _vm._v(" "),
        _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Mac")])]),
        _vm._v(" "),
        _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Design")])]),
        _vm._v(" "),
        _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Office")])]),
        _vm._v(" "),
        _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Creative")])]),
        _vm._v(" "),
        _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Studio")])]),
        _vm._v(" "),
        _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Smart")])]),
        _vm._v(" "),
        _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Tips")])]),
        _vm._v(" "),
        _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Marketing")])]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);