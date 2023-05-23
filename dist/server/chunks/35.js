exports.id = 35;
exports.ids = [35];
exports.modules = {

/***/ 9661:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 53, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8387))

/***/ }),

/***/ 8387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Search)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9483);
;// CONCATENATED MODULE: ./src/components/Icons/IconSearch.tsx


function IconSearch({ className  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        })
    });
}

;// CONCATENATED MODULE: ./src/components/Icons/Index.tsx


;// CONCATENATED MODULE: ./src/components/Search.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function Search() {
    const [search, setSearch] = (0,react_.useState)("");
    const router = (0,navigation.useRouter)();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setSearch("");
        router.push(`/${search}/`);
    };
    const handleChangeSearch = (e)=>{
        setSearch(e.target.value);
    };
    console.log({
        search
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        className: "Wiki-UI__search-form",
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "text",
                className: "Wiki-UI__search-form__input-field",
                value: search,
                onChange: handleChangeSearch
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "Wiki-UI__utilities__ ",
                children: /*#__PURE__*/ jsx_runtime_.jsx(IconSearch, {
                    className: "Wiki-UI__Icon"
                })
            })
        ]
    });
}


/***/ }),

/***/ 9612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  "metadata": () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(4212);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(2585);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(5985);
;// CONCATENATED MODULE: ./src/components/Search.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`D:\workstuff\bashprojects\nextjs__wikipedia\clientcomponentproject\src\components\Search.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
/* harmony default export */ const Search = (proxy.default);

;// CONCATENATED MODULE: ./src/components/Navbar.tsx




function Navbar() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: "Wiki-UI__nav-bar",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "Wiki-UI__nav-bar__title",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        className: "Wiki-UI__nav-bar__title__link",
                        children: "wikipedia search!"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Search, {})
            ]
        })
    });
}

// EXTERNAL MODULE: ./src/app/styles/index.scss
var styles = __webpack_require__(4110);
;// CONCATENATED MODULE: ./src/app/layout.tsx




const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            className: "Wiki-UI",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
                children
            ]
        })
    });
}


/***/ }),

/***/ 1095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2548);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)("", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 4110:
/***/ (() => {



/***/ })

};
;