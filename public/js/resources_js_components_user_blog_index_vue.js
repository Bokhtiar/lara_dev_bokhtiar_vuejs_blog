"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_user_blog_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/blog/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/blog/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
      blogs: [],
      categories: [],
      recentBlog: [],
      keyword: ''
    };
  },
  mounted: function mounted() {
    this.allBlog(), this.category(), this.recentBlogList();
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
    allBlog: function allBlog() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().get('/blog').then(function (response) {
        _this.blogs = response.data.blog;
      });
    },
    category: function category() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().get('/category').then(function (response) {
        _this2.categories = response.data.category;
      });
    },
    categoryWaysBlog: function categoryWaysBlog(id) {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().get('/category/ways/blog/' + id).then(function (response) {
        _this3.blogs = response.data.blog;
      });
    },
    recentBlogList: function recentBlogList() {
      var _this4 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().get('/recent/blog').then(function (response) {
        _this4.recentBlog = response.data.blog;
      });
    },
    getSearch: function getSearch() {
      var _this5 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().get('/liveSearchBlog/' + this.keyword).then(function (response) {
        _this5.recentBlog = response.data.blog;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/user/blog/index.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/user/blog/index.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_73fc2cee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=73fc2cee& */ "./resources/js/components/user/blog/index.vue?vue&type=template&id=73fc2cee&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/user/blog/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_73fc2cee___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_73fc2cee___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/blog/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/blog/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/user/blog/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/blog/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/blog/index.vue?vue&type=template&id=73fc2cee&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/user/blog/index.vue?vue&type=template&id=73fc2cee& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_73fc2cee___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_73fc2cee___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_73fc2cee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=73fc2cee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/blog/index.vue?vue&type=template&id=73fc2cee&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/blog/index.vue?vue&type=template&id=73fc2cee&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/blog/index.vue?vue&type=template&id=73fc2cee& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
            _c(
              "div",
              { staticClass: "col-lg-8 entries" },
              [
                _vm._l(_vm.blogs, function (blog) {
                  return _c("article", { key: blog.id, staticClass: "entry" }, [
                    _c("div", { staticClass: "entry-img" }, [
                      _c("img", {
                        staticClass: "img-fluid",
                        attrs: { src: _vm.imgurl(blog.image), alt: "" },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("h2", { staticClass: "entry-title" }, [
                      _c("a", { attrs: { href: "blog-single.html" } }, [
                        _vm._v(_vm._s(blog.title)),
                      ]),
                    ]),
                    _vm._v(" "),
                    _vm._m(0, true),
                    _vm._v(" "),
                    _c("div", { staticClass: "entry-content" }, [
                      _c("p", [
                        _vm._v(
                          "\n              " +
                            _vm._s(blog.short_description) +
                            "\n            "
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "read-more" },
                        [
                          _c(
                            "router-link",
                            { attrs: { to: "/blog/detail/" + blog.id } },
                            [_vm._v("Read More")]
                          ),
                        ],
                        1
                      ),
                    ]),
                  ])
                }),
                _vm._v(" "),
                _vm._m(1),
              ],
              2
            ),
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
                    _vm._m(2),
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
                  _vm._l(_vm.recentBlog, function (item) {
                    return _c(
                      "div",
                      { key: item.id, staticClass: "post-item clearfix" },
                      [
                        _c("img", {
                          attrs: { src: _vm.imgurl(item.image), alt: "" },
                        }),
                        _vm._v(" "),
                        _c(
                          "h4",
                          [
                            _c(
                              "router-link",
                              { attrs: { to: "/blog/detail/" + item.id } },
                              [_vm._v(_vm._s(item.title))]
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("time", { attrs: { datetime: "2020-01-01" } }, [
                          _vm._v(_vm._s(item.created_at)),
                        ]),
                      ]
                    )
                  }),
                  0
                ),
                _vm._v(" "),
                _c("h3", { staticClass: "sidebar-title" }, [
                  _vm._v("Categories"),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "sidebar-item categories" }, [
                  _c(
                    "ul",
                    _vm._l(_vm.categories, function (category) {
                      return _c("li", { key: category.id }, [
                        _c(
                          "a",
                          {
                            on: {
                              click: function ($event) {
                                return _vm.categoryWaysBlog(category.id)
                              },
                            },
                          },
                          [
                            _vm._v(_vm._s(category.category_name) + " "),
                            _c("span", [_vm._v("(25)")]),
                          ]
                        ),
                      ])
                    }),
                    0
                  ),
                ]),
                _vm._v(" "),
                _c("h3", { staticClass: "sidebar-title" }, [_vm._v("Tags")]),
                _vm._v(" "),
                _vm._m(3),
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
        _vm._v(" "),
        _c("li", { staticClass: "d-flex align-items-center" }, [
          _c("i", { staticClass: "bi bi-chat-dots" }),
          _vm._v(" "),
          _c("a", { attrs: { href: "blog-single.html" } }, [
            _vm._v("12 Comments"),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "blog-pagination" }, [
      _c("ul", { staticClass: "justify-content-center" }, [
        _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("1")])]),
        _vm._v(" "),
        _c("li", { staticClass: "active" }, [
          _c("a", { attrs: { href: "#" } }, [_vm._v("2")]),
        ]),
        _vm._v(" "),
        _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("3")])]),
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