"use strict";
exports.id = 345;
exports.ids = [345];
exports.modules = {

/***/ 603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Et": () => (/* binding */ WorkGridItem),
/* harmony export */   "Pg": () => (/* binding */ GridItemStyle)
/* harmony export */ });
/* unused harmony export GridItem */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_4__);





const GridItem = ({ children , href , title , thumbnail  })=>/*#__PURE__*/ _jsx(Box, {
        w: "100%",
        textAlign: "center",
        children: /*#__PURE__*/ _jsxs(LinkBox, {
            cursor: "pointer",
            children: [
                /*#__PURE__*/ _jsx(Image, {
                    src: thumbnail,
                    alt: title,
                    className: "grid-item-thumbnail",
                    placeholder: "blur",
                    loading: "lazy"
                }),
                /*#__PURE__*/ _jsx(LinkOverlay, {
                    href: href,
                    target: "_blank",
                    children: /*#__PURE__*/ _jsx(Text, {
                        mt: 2,
                        children: title
                    })
                }),
                /*#__PURE__*/ _jsx(Text, {
                    fontSize: 14,
                    children: children
                })
            ]
        })
    })
;
const WorkGridItem = ({ children , id , title , thumbnail  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
        w: "100%",
        textAlign: "center",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
            href: `/works/${id}`,
            passHref: true,
            scroll: false,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.LinkBox, {
                cursor: "pointer",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        src: thumbnail,
                        alt: title,
                        className: "grid-item-thumbnail",
                        placeholder: "blur"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.LinkOverlay, {
                        href: `/works/${id}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
                            mt: 2,
                            fontSize: 20,
                            children: title
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
                        fontSize: 14,
                        children: children
                    })
                ]
            })
        })
    })
;
const GridItemStyle = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react__WEBPACK_IMPORTED_MODULE_4__.Global, {
        styles: `
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `
    })
;


/***/ }),

/***/ 2857:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grid_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(603);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const variants = {
    hidden: {
        opacity: 0,
        x: 0,
        y: 20
    },
    enter: {
        opacity: 1,
        x: 0,
        y: 0
    },
    exit: {
        opacity: 0,
        x: -0,
        y: 20
    }
};
const Layout = ({ children , title  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.article, {
        initial: "hidden",
        animate: "enter",
        exit: "exit",
        variants: variants,
        transition: {
            duration: 0.4,
            type: 'easeInOut'
        },
        style: {
            position: 'relative'
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                        children: [
                            title,
                            " - Tosa Vireak"
                        ]
                    })
                }),
                children,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_grid_item__WEBPACK_IMPORTED_MODULE_3__/* .GridItemStyle */ .Pg, {})
            ]
        })
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7578:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const StyledDiv = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.chakra)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
    shouldForwardProp: (prop)=>{
        return (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.shouldForwardProp)(prop) || prop === 'transition';
    }
});
const Section = ({ children , delay =0  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledDiv, {
        initial: {
            y: 10,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        },
        transition: {
            duration: 0.8,
            delay
        },
        mb: 6,
        children: children
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;