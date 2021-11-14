"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_user_UserHome_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/UserHome.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/UserHome.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      blogs: []
    };
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
    }
  },
  mounted: function mounted() {
    this.allBlog();
  }
});

/***/ }),

/***/ "./resources/js/components/user/UserHome.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/user/UserHome.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserHome_vue_vue_type_template_id_6d060c1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserHome.vue?vue&type=template&id=6d060c1a& */ "./resources/js/components/user/UserHome.vue?vue&type=template&id=6d060c1a&");
/* harmony import */ var _UserHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserHome.vue?vue&type=script&lang=js& */ "./resources/js/components/user/UserHome.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserHome_vue_vue_type_template_id_6d060c1a___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserHome_vue_vue_type_template_id_6d060c1a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/UserHome.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/UserHome.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/user/UserHome.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserHome.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/UserHome.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/UserHome.vue?vue&type=template&id=6d060c1a&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/user/UserHome.vue?vue&type=template&id=6d060c1a& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserHome_vue_vue_type_template_id_6d060c1a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserHome_vue_vue_type_template_id_6d060c1a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserHome_vue_vue_type_template_id_6d060c1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserHome.vue?vue&type=template&id=6d060c1a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/UserHome.vue?vue&type=template&id=6d060c1a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/UserHome.vue?vue&type=template&id=6d060c1a&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/UserHome.vue?vue&type=template&id=6d060c1a& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    _vm._m(0),
    _vm._v(" "),
    _c("main", { attrs: { id: "main" } }, [
      _vm._m(1),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "services section-bg", attrs: { id: "services" } },
        [
          _c(
            "div",
            { staticClass: "container", attrs: { "data-aos": "fade-up" } },
            [
              _c(
                "div",
                { staticClass: "row" },
                _vm._l(_vm.blogs, function (blog) {
                  return _c(
                    "div",
                    {
                      key: blog.id,
                      staticClass:
                        "col-lg-4 col-md-6 d-flex align-items-stretch",
                      attrs: { "data-aos": "zoom-in", "data-aos-delay": "100" },
                    },
                    [
                      _c("div", { staticClass: "icon-box iconbox-blue" }, [
                        _c("div", { staticClass: "icon" }, [
                          _c("img", {
                            staticClass: "rounded",
                            attrs: {
                              src: _vm.imgurl(blog.image),
                              height: "40px",
                              width: "50px",
                              alt: "",
                            },
                          }),
                        ]),
                        _vm._v(" "),
                        _c(
                          "h4",
                          [
                            _c(
                              "router-link",
                              { attrs: { to: "/blog/detail/" + blog.id } },
                              [_vm._v(_vm._s(blog.title))]
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(blog.short_description))]),
                      ]),
                    ]
                  )
                }),
                0
              ),
            ]
          ),
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
    return _c("section", { attrs: { id: "hero" } }, [
      _c(
        "div",
        {
          staticClass: "carousel slide carousel-fade",
          attrs: {
            id: "heroCarousel",
            "data-bs-interval": "5000",
            "data-bs-ride": "carousel",
          },
        },
        [
          _c(
            "div",
            { staticClass: "carousel-inner", attrs: { role: "listbox" } },
            [
              _c(
                "div",
                {
                  staticClass: "carousel-item active",
                  staticStyle: {
                    "background-image":
                      "url(user/assets/img/slide/slide-1.jpg)",
                  },
                },
                [
                  _c("div", { staticClass: "carousel-container" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "carousel-content animate__animated animate__fadeInUp",
                      },
                      [
                        _c("h2", [
                          _vm._v("Welcome to "),
                          _c("span", [_vm._v("Blog Website")]),
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto."
                          ),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-center" }, [
                          _c(
                            "a",
                            {
                              staticClass: "btn-get-started",
                              attrs: { href: "" },
                            },
                            [_vm._v("Read More")]
                          ),
                        ]),
                      ]
                    ),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "carousel-item",
                  staticStyle: {
                    "background-image":
                      "url(user/assets/img/slide/slide-2.jpg)",
                  },
                },
                [
                  _c("div", { staticClass: "carousel-container" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "carousel-content animate__animated animate__fadeInUp",
                      },
                      [
                        _c("h2", [_vm._v("Lorem Ipsum Dolor")]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto."
                          ),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-center" }, [
                          _c(
                            "a",
                            {
                              staticClass: "btn-get-started",
                              attrs: { href: "" },
                            },
                            [_vm._v("Read More")]
                          ),
                        ]),
                      ]
                    ),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "carousel-item",
                  staticStyle: {
                    "background-image":
                      "url(user/assets/img/slide/slide-3.jpg)",
                  },
                },
                [
                  _c("div", { staticClass: "carousel-container" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "carousel-content animate__animated animate__fadeInUp",
                      },
                      [
                        _c("h2", [_vm._v("Sequi ea ut et est quaerat")]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto."
                          ),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-center" }, [
                          _c(
                            "a",
                            {
                              staticClass: "btn-get-started",
                              attrs: { href: "" },
                            },
                            [_vm._v("Read More")]
                          ),
                        ]),
                      ]
                    ),
                  ]),
                ]
              ),
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "carousel-control-prev",
              attrs: {
                href: "#heroCarousel",
                role: "button",
                "data-bs-slide": "prev",
              },
            },
            [
              _c("span", {
                staticClass: "carousel-control-prev-icon bi bi-chevron-left",
                attrs: { "aria-hidden": "true" },
              }),
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "carousel-control-next",
              attrs: {
                href: "#heroCarousel",
                role: "button",
                "data-bs-slide": "next",
              },
            },
            [
              _c("span", {
                staticClass: "carousel-control-next-icon bi bi-chevron-right",
                attrs: { "aria-hidden": "true" },
              }),
            ]
          ),
          _vm._v(" "),
          _c("ol", {
            staticClass: "carousel-indicators",
            attrs: { id: "hero-carousel-indicators" },
          }),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "section",
      { staticClass: "about-us", attrs: { id: "about-us" } },
      [
        _c(
          "div",
          { staticClass: "container", attrs: { "data-aos": "fade-up" } },
          [
            _c("div", { staticClass: "row content" }, [
              _c(
                "div",
                {
                  staticClass: "col-lg-6",
                  attrs: { "data-aos": "fade-right" },
                },
                [
                  _c("h2", [_vm._v("Eum ipsam laborum deleniti velitena")]),
                  _vm._v(" "),
                  _c("h3", [
                    _vm._v(
                      "Voluptatem dignissimos provident quasi corporis voluptates sit assum perenda sruen jonee trave"
                    ),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-lg-6 pt-4 pt-lg-0",
                  attrs: { "data-aos": "fade-left" },
                },
                [
                  _c("p", [
                    _vm._v(
                      "\n              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\n              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\n              culpa qui officia deserunt mollit anim id est laborum\n            "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("ul", [
                    _c("li", [
                      _c("i", { staticClass: "ri-check-double-line" }),
                      _vm._v(
                        " Ullamco laboris nisi ut aliquip ex ea commodo consequa"
                      ),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("i", { staticClass: "ri-check-double-line" }),
                      _vm._v(
                        " Duis aute irure dolor in reprehenderit in voluptate velit"
                      ),
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("i", { staticClass: "ri-check-double-line" }),
                      _vm._v(
                        " Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in"
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "fst-italic" }, [
                    _vm._v(
                      "\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n              magna aliqua.\n            "
                    ),
                  ]),
                ]
              ),
            ]),
          ]
        ),
      ]
    )
  },
]
render._withStripped = true



/***/ })

}]);