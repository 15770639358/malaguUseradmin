(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@malagu/core/lib/common/annotation/aspect.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/annotation/aspect.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var aop_protocol_1 = __webpack_require__(/*! ../aop/aop-protocol */ "./node_modules/@malagu/core/lib/common/aop/aop-protocol.js");
var component_1 = __webpack_require__(/*! ./component */ "./node_modules/@malagu/core/lib/common/annotation/component.js");
exports.Aspect = function (adviceOrAspectOption) { return function (target) {
    var option = component_1.parseComponentOption(target, adviceOrAspectOption);
    option.pointcut = option.pointcut || component_1.COMPONENT_TAG;
    option.tag = { tag: aop_protocol_1.AOP_TAG, value: option.pointcut };
    component_1.applyComponentDecorator(__assign({ proxy: false }, option), target);
}; };


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/annotation/autowired.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/annotation/autowired.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var container_1 = __webpack_require__(/*! ../container */ "./node_modules/@malagu/core/lib/common/container/index.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/@malagu/core/lib/common/utils/index.js");
exports.Autowired = function (idOrOption) {
    return function (target, targetKey, index) {
        var option = parseAutowiredOption(target, targetKey, index, idOrOption);
        applyAutowiredDecorator(option, target, targetKey, index);
    };
};
var defaultAutowiredOption = {
    multi: false,
    detached: false
};
function parseAutowiredOption(target, targetKey, index, idOrOption) {
    var option = utils_1.AnnotationUtil.getValueOrOption(idOrOption);
    var type = utils_1.AnnotationUtil.getType(target, targetKey, index);
    if (type === Array) {
        option.multi = true;
    }
    option.id = option.id || type;
    return __assign(__assign({}, defaultAutowiredOption), option);
}
exports.parseAutowiredOption = parseAutowiredOption;
function applyAutowiredDecorator(option, target, targetKey, index, doInject, doGetValue) {
    if (doInject === void 0) { doInject = function (_a, t, k, i) {
        var id = _a.id, multi = _a.multi;
        return multi ? inversify_1.multiInject(id)(t, k, i) : inversify_1.inject(id)(t, k, i);
    }; }
    if (doGetValue === void 0) { doGetValue = function (_a, t, property) {
        var id = _a.id, multi = _a.multi;
        return multi ? container_1.ContainerUtil.getAll(id) : container_1.ContainerUtil.get(id);
    }; }
    if (option.detached) {
        if (index !== undefined) {
            throw new Error("The " + target.constructor.name + " itself is not injected into the container, so the parameter injection of the constructor is not supported.");
        }
        createAutowiredProperty(option, doGetValue, target, targetKey);
    }
    else {
        doInject(option, target, targetKey, index);
    }
    return option;
}
exports.applyAutowiredDecorator = applyAutowiredDecorator;
function createAutowiredProperty(option, doGetValue, target, property) {
    var value;
    Object.defineProperty(target, property, {
        enumerable: true,
        get: function () {
            if (value !== undefined) {
                return value;
            }
            value = doGetValue(option, target, property);
            return value;
        }
    });
}
exports.createAutowiredProperty = createAutowiredProperty;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/annotation/component.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/annotation/component.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/core/lib/common/constants.js");
var config_util_1 = __webpack_require__(/*! ../config/config-util */ "./node_modules/@malagu/core/lib/common/config/config-util.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/@malagu/core/lib/common/utils/index.js");
exports.COMPONENT_TAG = 'Component';
var Scope;
(function (Scope) {
    Scope[Scope["Request"] = 0] = "Request";
    Scope[Scope["Singleton"] = 1] = "Singleton";
    Scope[Scope["Transient"] = 2] = "Transient";
})(Scope = exports.Scope || (exports.Scope = {}));
exports.Component = function () {
    var idOrOption = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        idOrOption[_i] = arguments[_i];
    }
    return function (t) {
        var option = parseComponentOption(t, idOrOption);
        applyComponentDecorator(option, t);
    };
};
var defaultComponentOption = __assign({ scope: Scope.Singleton, rebind: false, proxy: false }, (_b = (_a = config_util_1.ConfigUtil.getRaw().malagu) === null || _a === void 0 ? void 0 : _a.annotation) === null || _b === void 0 ? void 0 : _b.Component);
function parseComponentOption(target, idOrOption) {
    if (Array.isArray(idOrOption)) {
        if (idOrOption.length === 1) {
            idOrOption = idOrOption[0];
        }
        else if (idOrOption.length === 0) {
            idOrOption = undefined;
        }
    }
    var option = utils_1.AnnotationUtil.getValueOrOption(idOrOption);
    var parsed = __assign(__assign({}, defaultComponentOption), option);
    var ids;
    if (Array.isArray(parsed.id)) {
        ids = parsed.id;
    }
    else if (parsed.id && parsed.id !== target) {
        ids = [parsed.id, target];
    }
    else {
        ids = [target];
    }
    parsed.id = ids;
    parsed.sysTags = __spread(new Set(__spread([exports.COMPONENT_TAG], parsed.sysTags || [])));
    return parsed;
}
exports.parseComponentOption = parseComponentOption;
function applyComponentDecorator(option, target) {
    var isAlreadyDecorated = Reflect.hasOwnMetadata(inversify_1.METADATA_KEY.PARAM_TYPES, target);
    if (!isAlreadyDecorated) {
        inversify_1.decorate(inversify_1.injectable(), target);
    }
    var metadata = {
        target: target,
        ids: Array.isArray(option.id) ? option.id : [option.id || target],
        sysTags: option.sysTags,
        rebind: option.rebind,
        proxy: option.proxy,
        scope: option.scope,
        name: option.name,
        tag: option.tag,
        default: option.default,
        when: option.when,
        onActivation: option.onActivation
    };
    var metadatas = Reflect.getMetadata(constants_1.METADATA_KEY.component, Reflect);
    if (!metadatas) {
        metadatas = [];
        Reflect.defineMetadata(constants_1.METADATA_KEY.component, metadatas, Reflect);
    }
    metadatas.push(metadata);
    return metadata;
}
exports.applyComponentDecorator = applyComponentDecorator;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/annotation/constant.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/annotation/constant.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/core/lib/common/constants.js");
exports.Constant = function (id, constantValue, rebind) {
    if (rebind === void 0) { rebind = false; }
    return function (t) {
        applyConstantDecorator({ id: id, constantValue: constantValue, rebind: rebind }, t);
    };
};
function applyConstantDecorator(option, target) {
    var previousMetadata = Reflect.getMetadata(constants_1.METADATA_KEY.constantValue, Reflect) || [];
    var newMetadata = [option].concat(previousMetadata);
    Reflect.defineMetadata(constants_1.METADATA_KEY.constantValue, newMetadata, Reflect);
}
exports.applyConstantDecorator = applyConstantDecorator;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/annotation/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/annotation/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./autowired */ "./node_modules/@malagu/core/lib/common/annotation/autowired.js"));
__export(__webpack_require__(/*! ./component */ "./node_modules/@malagu/core/lib/common/annotation/component.js"));
__export(__webpack_require__(/*! ./value */ "./node_modules/@malagu/core/lib/common/annotation/value.js"));
__export(__webpack_require__(/*! ./optional */ "./node_modules/@malagu/core/lib/common/annotation/optional.js"));
__export(__webpack_require__(/*! ./constant */ "./node_modules/@malagu/core/lib/common/annotation/constant.js"));
__export(__webpack_require__(/*! ./named */ "./node_modules/@malagu/core/lib/common/annotation/named.js"));
__export(__webpack_require__(/*! ./tagged */ "./node_modules/@malagu/core/lib/common/annotation/tagged.js"));
__export(__webpack_require__(/*! ./post-construct */ "./node_modules/@malagu/core/lib/common/annotation/post-construct.js"));
__export(__webpack_require__(/*! ./target-name */ "./node_modules/@malagu/core/lib/common/annotation/target-name.js"));
__export(__webpack_require__(/*! ./injectable */ "./node_modules/@malagu/core/lib/common/annotation/injectable.js"));
__export(__webpack_require__(/*! ./aspect */ "./node_modules/@malagu/core/lib/common/annotation/aspect.js"));


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/annotation/injectable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/annotation/injectable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
exports.Injectable = inversify_1.injectable;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/annotation/named.js":
/*!******************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/annotation/named.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
exports.Named = inversify_1.named;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/annotation/optional.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/annotation/optional.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
exports.Optional = inversify_1.optional;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/annotation/post-construct.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/annotation/post-construct.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
exports.PostConstruct = inversify_1.postConstruct;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/annotation/tagged.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/annotation/tagged.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
exports.Tagged = inversify_1.tagged;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/annotation/target-name.js":
/*!************************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/annotation/target-name.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
exports.TargetName = inversify_1.targetName;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/annotation/value.js":
/*!******************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/annotation/value.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var config_util_1 = __webpack_require__(/*! ../config/config-util */ "./node_modules/@malagu/core/lib/common/config/config-util.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/@malagu/core/lib/common/utils/index.js");
exports.VALUE = Symbol('Value');
exports.Value = function (elOrOption) {
    return function (target, targetKey, index) {
        var option = parseValueOption(target, targetKey, index, elOrOption);
        applyValueDecorator(option, target, targetKey, index);
    };
};
var defaultValueOption = {
    detached: false
};
function parseValueOption(target, targetKey, index, elOrOption) {
    var option = utils_1.AnnotationUtil.getValueOrOption(elOrOption, 'el');
    option.el = option.el || targetKey;
    return __assign(__assign({}, defaultValueOption), option);
}
exports.parseValueOption = parseValueOption;
function applyValueDecorator(option, target, targetKey, index) {
    if (option.detached) {
        if (index !== undefined) {
            throw new Error("The " + target.constructor.name + " itself is not injected into the container, so the parameter injection of the constructor is not supported.");
        }
        createValueProperty(option, target, targetKey);
        return;
    }
    var el = option.el;
    inversify_1.inject(exports.VALUE)(target, targetKey, index);
    inversify_1.named(el)(target, targetKey, index);
    return option;
}
exports.applyValueDecorator = applyValueDecorator;
function createValueProperty(option, target, property) {
    Object.defineProperty(target, property, {
        enumerable: true,
        get: function () {
            var el = option.el;
            return config_util_1.ConfigUtil.get(el);
        }
    });
}
exports.createValueProperty = createValueProperty;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/aop/aop-protocol.js":
/*!******************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/aop/aop-protocol.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AOP_TAG = 'AOP_TAG';
exports.MethodBeforeAdvice = Symbol('MethodBeforeAdvice');
exports.AfterReturningAdvice = Symbol('AfterReturningAdvice');
exports.AfterThrowsAdvice = Symbol('AfterThrowsAdvice');
exports.AopProxyFactory = Symbol('AopProxyFactory');
exports.ClassFilter = Symbol('ClassFilter');
exports.MethodMatcher = Symbol('MethodMatcher');


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/aop/aop-proxy-factory.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/aop/aop-proxy-factory.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/@malagu/core/lib/common/utils/index.js");
var container_1 = __webpack_require__(/*! ../container */ "./node_modules/@malagu/core/lib/common/container/index.js");
var aop_protocol_1 = __webpack_require__(/*! ./aop-protocol */ "./node_modules/@malagu/core/lib/common/aop/aop-protocol.js");
var annotation_1 = __webpack_require__(/*! ../annotation */ "./node_modules/@malagu/core/lib/common/annotation/index.js");
var AopProxyFactoryImpl = /** @class */ (function () {
    function AopProxyFactoryImpl() {
    }
    AopProxyFactoryImpl.prototype.getAdvices = function (id, tagValues) {
        var e_1, _a;
        var container = container_1.ContainerProvider.provide();
        var advices = [];
        try {
            for (var tagValues_1 = __values(tagValues), tagValues_1_1 = tagValues_1.next(); !tagValues_1_1.done; tagValues_1_1 = tagValues_1.next()) {
                var tagValue = tagValues_1_1.value;
                if (container.isBoundTagged(id, aop_protocol_1.AOP_TAG, tagValue)) {
                    advices.push.apply(advices, __spread(container.getAllTagged(id, aop_protocol_1.AOP_TAG, tagValue)));
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (tagValues_1_1 && !tagValues_1_1.done && (_a = tagValues_1.return)) _a.call(tagValues_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return advices;
    };
    AopProxyFactoryImpl.prototype.create = function (config) {
        var _this = this;
        var sysTags = config.metadata.sysTags;
        var proxy = new Proxy(config.target, {
            get: function (target, method, receiver) {
                if (utils_1.isResolveMode()) {
                    return target;
                }
                var func = target[method];
                if (typeof func === 'function') {
                    return function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return __awaiter(_this, void 0, void 0, function () {
                            var beforeAdvices, beforeAdvices_1, beforeAdvices_1_1, advice, e_2_1, returnValue, afterReturningAdvices, afterReturningAdvices_1, afterReturningAdvices_1_1, advice, e_3_1, error_1, afterThrowsAdvices, afterThrowsAdvices_1, afterThrowsAdvices_1_1, advice, e_4_1;
                            var e_2, _a, e_3, _b, e_4, _c;
                            return __generator(this, function (_d) {
                                switch (_d.label) {
                                    case 0:
                                        _d.trys.push([0, 18, , 27]);
                                        beforeAdvices = this.getAdvices(aop_protocol_1.MethodBeforeAdvice, sysTags);
                                        _d.label = 1;
                                    case 1:
                                        _d.trys.push([1, 6, 7, 8]);
                                        beforeAdvices_1 = __values(beforeAdvices), beforeAdvices_1_1 = beforeAdvices_1.next();
                                        _d.label = 2;
                                    case 2:
                                        if (!!beforeAdvices_1_1.done) return [3 /*break*/, 5];
                                        advice = beforeAdvices_1_1.value;
                                        return [4 /*yield*/, advice.before(method, args, target)];
                                    case 3:
                                        _d.sent();
                                        _d.label = 4;
                                    case 4:
                                        beforeAdvices_1_1 = beforeAdvices_1.next();
                                        return [3 /*break*/, 2];
                                    case 5: return [3 /*break*/, 8];
                                    case 6:
                                        e_2_1 = _d.sent();
                                        e_2 = { error: e_2_1 };
                                        return [3 /*break*/, 8];
                                    case 7:
                                        try {
                                            if (beforeAdvices_1_1 && !beforeAdvices_1_1.done && (_a = beforeAdvices_1.return)) _a.call(beforeAdvices_1);
                                        }
                                        finally { if (e_2) throw e_2.error; }
                                        return [7 /*endfinally*/];
                                    case 8: return [4 /*yield*/, func.apply(target, args)];
                                    case 9:
                                        returnValue = _d.sent();
                                        afterReturningAdvices = this.getAdvices(aop_protocol_1.AfterReturningAdvice, sysTags);
                                        _d.label = 10;
                                    case 10:
                                        _d.trys.push([10, 15, 16, 17]);
                                        afterReturningAdvices_1 = __values(afterReturningAdvices), afterReturningAdvices_1_1 = afterReturningAdvices_1.next();
                                        _d.label = 11;
                                    case 11:
                                        if (!!afterReturningAdvices_1_1.done) return [3 /*break*/, 14];
                                        advice = afterReturningAdvices_1_1.value;
                                        return [4 /*yield*/, advice.afterReturning(returnValue, method, args, target)];
                                    case 12:
                                        _d.sent();
                                        _d.label = 13;
                                    case 13:
                                        afterReturningAdvices_1_1 = afterReturningAdvices_1.next();
                                        return [3 /*break*/, 11];
                                    case 14: return [3 /*break*/, 17];
                                    case 15:
                                        e_3_1 = _d.sent();
                                        e_3 = { error: e_3_1 };
                                        return [3 /*break*/, 17];
                                    case 16:
                                        try {
                                            if (afterReturningAdvices_1_1 && !afterReturningAdvices_1_1.done && (_b = afterReturningAdvices_1.return)) _b.call(afterReturningAdvices_1);
                                        }
                                        finally { if (e_3) throw e_3.error; }
                                        return [7 /*endfinally*/];
                                    case 17: return [2 /*return*/, returnValue];
                                    case 18:
                                        error_1 = _d.sent();
                                        afterThrowsAdvices = this.getAdvices(aop_protocol_1.AfterThrowsAdvice, sysTags);
                                        _d.label = 19;
                                    case 19:
                                        _d.trys.push([19, 24, 25, 26]);
                                        afterThrowsAdvices_1 = __values(afterThrowsAdvices), afterThrowsAdvices_1_1 = afterThrowsAdvices_1.next();
                                        _d.label = 20;
                                    case 20:
                                        if (!!afterThrowsAdvices_1_1.done) return [3 /*break*/, 23];
                                        advice = afterThrowsAdvices_1_1.value;
                                        return [4 /*yield*/, advice.afterThrows(error_1, method, args, target)];
                                    case 21:
                                        _d.sent();
                                        _d.label = 22;
                                    case 22:
                                        afterThrowsAdvices_1_1 = afterThrowsAdvices_1.next();
                                        return [3 /*break*/, 20];
                                    case 23: return [3 /*break*/, 26];
                                    case 24:
                                        e_4_1 = _d.sent();
                                        e_4 = { error: e_4_1 };
                                        return [3 /*break*/, 26];
                                    case 25:
                                        try {
                                            if (afterThrowsAdvices_1_1 && !afterThrowsAdvices_1_1.done && (_c = afterThrowsAdvices_1.return)) _c.call(afterThrowsAdvices_1);
                                        }
                                        finally { if (e_4) throw e_4.error; }
                                        return [7 /*endfinally*/];
                                    case 26: throw error_1;
                                    case 27: return [2 /*return*/];
                                }
                            });
                        });
                    };
                }
                return func;
            }
        });
        return {
            getPorxy: function () {
                return proxy;
            }
        };
    };
    AopProxyFactoryImpl = __decorate([
        annotation_1.Component({ id: aop_protocol_1.AopProxyFactory, proxy: false })
    ], AopProxyFactoryImpl);
    return AopProxyFactoryImpl;
}());
exports.AopProxyFactoryImpl = AopProxyFactoryImpl;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/aop/class-filter.js":
/*!******************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/aop/class-filter.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var container_1 = __webpack_require__(/*! ../container */ "./node_modules/@malagu/core/lib/common/container/index.js");
var aop_protocol_1 = __webpack_require__(/*! ./aop-protocol */ "./node_modules/@malagu/core/lib/common/aop/aop-protocol.js");
var annotation_1 = __webpack_require__(/*! ../annotation */ "./node_modules/@malagu/core/lib/common/annotation/index.js");
var ClassFilterImpl = /** @class */ (function () {
    function ClassFilterImpl() {
    }
    ClassFilterImpl.prototype.matches = function (clazz, metadata) {
        var e_1, _a;
        var container = container_1.ContainerProvider.provide();
        var tagKeys = metadata.sysTags;
        try {
            for (var tagKeys_1 = __values(tagKeys), tagKeys_1_1 = tagKeys_1.next(); !tagKeys_1_1.done; tagKeys_1_1 = tagKeys_1.next()) {
                var tagValue = tagKeys_1_1.value;
                if (container.isBoundTagged(aop_protocol_1.MethodBeforeAdvice, aop_protocol_1.AOP_TAG, tagValue)
                    || container.isBoundTagged(aop_protocol_1.AfterThrowsAdvice, aop_protocol_1.AOP_TAG, tagValue)
                    || container.isBoundTagged(aop_protocol_1.AfterReturningAdvice, aop_protocol_1.AOP_TAG, tagValue)) {
                    return true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (tagKeys_1_1 && !tagKeys_1_1.done && (_a = tagKeys_1.return)) _a.call(tagKeys_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return false;
    };
    ClassFilterImpl = __decorate([
        annotation_1.Component({ id: aop_protocol_1.ClassFilter, proxy: false })
    ], ClassFilterImpl);
    return ClassFilterImpl;
}());
exports.ClassFilterImpl = ClassFilterImpl;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/aop/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/aop/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./aop-protocol */ "./node_modules/@malagu/core/lib/common/aop/aop-protocol.js"));
__export(__webpack_require__(/*! ./class-filter */ "./node_modules/@malagu/core/lib/common/aop/class-filter.js"));
__export(__webpack_require__(/*! ./aop-proxy-factory */ "./node_modules/@malagu/core/lib/common/aop/aop-proxy-factory.js"));


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/application/application-error.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/application/application-error.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ApplicationError;
(function (ApplicationError) {
    var codes = [];
    function declare(code, factory) {
        if (codes.indexOf(code) !== -1) {
            throw new Error("An application error for '" + code + "' code is already declared");
        }
        var constructorOpt = Object.assign(function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new Impl(code, factory.apply(void 0, __spread(args)), constructorOpt);
        }, {
            code: code,
            is: function (arg) {
                return arg instanceof Impl && arg.code === code;
            }
        });
        return constructorOpt;
    }
    ApplicationError.declare = declare;
    function is(arg) {
        return arg instanceof Impl;
    }
    ApplicationError.is = is;
    function fromJson(code, raw) {
        return new Impl(code, raw);
    }
    ApplicationError.fromJson = fromJson;
    var Impl = /** @class */ (function (_super) {
        __extends(Impl, _super);
        function Impl(code, raw, constructorOpt) {
            var _this = _super.call(this, raw.message) || this;
            _this.code = code;
            _this.data = raw.data;
            Object.setPrototypeOf(_this, Impl.prototype);
            if (raw.stack) {
                _this.stack = raw.stack;
            }
            else if (Error.captureStackTrace && constructorOpt) {
                Error.captureStackTrace(_this, constructorOpt);
            }
            return _this;
        }
        Impl.prototype.toJson = function () {
            var _a = this, message = _a.message, data = _a.data, stack = _a.stack;
            return { message: message, data: data, stack: stack };
        };
        return Impl;
    }(Error));
})(ApplicationError = exports.ApplicationError || (exports.ApplicationError = {}));


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/application/application-protocol.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/application/application-protocol.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var promise_util_1 = __webpack_require__(/*! ../utils/promise-util */ "./node_modules/@malagu/core/lib/common/utils/promise-util.js");
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var logger_1 = __webpack_require__(/*! ../logger */ "./node_modules/@malagu/core/lib/common/logger/index.js");
var annotation_1 = __webpack_require__(/*! ../annotation */ "./node_modules/@malagu/core/lib/common/annotation/index.js");
var vscode_jsonrpc_1 = __webpack_require__(/*! vscode-jsonrpc */ "vscode-jsonrpc");
exports.ApplicationLifecycle = Symbol('ApplicationLifecycle');
exports.Application = Symbol('Application');
exports.ApplicationStateService = Symbol('ApplicationStateService');
var EmptyApplicationLifecycle = /** @class */ (function () {
    function EmptyApplicationLifecycle() {
    }
    EmptyApplicationLifecycle.prototype.initialize = function () {
        // NOOP
    };
    EmptyApplicationLifecycle = __decorate([
        annotation_1.Component(exports.ApplicationLifecycle)
    ], EmptyApplicationLifecycle);
    return EmptyApplicationLifecycle;
}());
exports.EmptyApplicationLifecycle = EmptyApplicationLifecycle;
var AbstractApplication = /** @class */ (function () {
    function AbstractApplication() {
    }
    /**
     * Initialize and start the frontend application.
     */
    AbstractApplication.prototype.doStart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, lifecycle, _c, _d, lifecycle, error_1, e_1_1;
            var e_2, _e, e_1, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        try {
                            for (_a = __values(this.lifecycles), _b = _a.next(); !_b.done; _b = _a.next()) {
                                lifecycle = _b.value;
                                if (lifecycle.initialize) {
                                    try {
                                        lifecycle.initialize();
                                    }
                                    catch (error) {
                                        this.logger.error('Could not initialize lifecycle', error);
                                    }
                                }
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        _g.label = 1;
                    case 1:
                        _g.trys.push([1, 8, 9, 10]);
                        _c = __values(this.lifecycles), _d = _c.next();
                        _g.label = 2;
                    case 2:
                        if (!!_d.done) return [3 /*break*/, 7];
                        lifecycle = _d.value;
                        if (!lifecycle.onStart) return [3 /*break*/, 6];
                        _g.label = 3;
                    case 3:
                        _g.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, lifecycle.onStart(this)];
                    case 4:
                        _g.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        error_1 = _g.sent();
                        this.logger.error('Could not start lifecycle', error_1);
                        return [3 /*break*/, 6];
                    case 6:
                        _d = _c.next();
                        return [3 /*break*/, 2];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_1_1 = _g.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 10];
                    case 9:
                        try {
                            if (_d && !_d.done && (_f = _c.return)) _f.call(_c);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Stop the frontend application lifecycle.
     */
    AbstractApplication.prototype.doStop = function () {
        var e_3, _a;
        try {
            for (var _b = __values(this.lifecycles), _c = _b.next(); !_c.done; _c = _b.next()) {
                var lifecycle = _c.value;
                if (lifecycle.onStop) {
                    try {
                        lifecycle.onStop(this);
                    }
                    catch (error) {
                        this.logger.error('Could not stop lifecycle', error);
                    }
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    __decorate([
        annotation_1.Autowired(exports.ApplicationLifecycle),
        __metadata("design:type", Array)
    ], AbstractApplication.prototype, "lifecycles", void 0);
    __decorate([
        annotation_1.Autowired(logger_1.Logger),
        __metadata("design:type", Object)
    ], AbstractApplication.prototype, "logger", void 0);
    AbstractApplication = __decorate([
        inversify_1.injectable()
    ], AbstractApplication);
    return AbstractApplication;
}());
exports.AbstractApplication = AbstractApplication;
var AbstractApplicationStateService = /** @class */ (function () {
    function AbstractApplicationStateService() {
        this._state = 'init';
        this.deferred = {};
        this.stateChanged = new vscode_jsonrpc_1.Emitter();
    }
    Object.defineProperty(AbstractApplicationStateService.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (state) {
            if (state !== this._state) {
                this.deferred[this._state] = new promise_util_1.Deferred();
                this._state = state;
                if (this.deferred[state] === undefined) {
                    this.deferred[state] = new promise_util_1.Deferred();
                }
                this.deferred[state].resolve();
                this.stateChanged.fire(state);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractApplicationStateService.prototype, "onStateChanged", {
        get: function () {
            return this.stateChanged.event;
        },
        enumerable: true,
        configurable: true
    });
    AbstractApplicationStateService.prototype.reachedState = function (state) {
        if (this.deferred[state] === undefined) {
            this.deferred[state] = new promise_util_1.Deferred();
        }
        return this.deferred[state].promise;
    };
    AbstractApplicationStateService.prototype.reachedAnyState = function () {
        var _this = this;
        var states = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            states[_i] = arguments[_i];
        }
        return Promise.race(states.map(function (s) { return _this.reachedState(s); }));
    };
    AbstractApplicationStateService = __decorate([
        inversify_1.injectable()
    ], AbstractApplicationStateService);
    return AbstractApplicationStateService;
}());
exports.AbstractApplicationStateService = AbstractApplicationStateService;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/application/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/application/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./application-protocol */ "./node_modules/@malagu/core/lib/common/application/application-protocol.js"));
__export(__webpack_require__(/*! ./application-error */ "./node_modules/@malagu/core/lib/common/application/application-error.js"));


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/config/config-protocol.js":
/*!************************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/config/config-protocol.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigProvider = Symbol('ConfigProvider');


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/config/config-provider.js":
/*!************************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/config/config-provider.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_protocol_1 = __webpack_require__(/*! ./config-protocol */ "./node_modules/@malagu/core/lib/common/config/config-protocol.js");
var annotation_1 = __webpack_require__(/*! ../annotation */ "./node_modules/@malagu/core/lib/common/annotation/index.js");
var el_1 = __webpack_require__(/*! ../el */ "./node_modules/@malagu/core/lib/common/el/index.js");
var ConfigProviderImpl = /** @class */ (function () {
    function ConfigProviderImpl() {
    }
    ConfigProviderImpl.prototype.get = function (key, defaultValue) {
        return this.expressionHandler.handle("${" + key + "}") || defaultValue;
    };
    __decorate([
        annotation_1.Autowired(el_1.ExpressionHandler),
        __metadata("design:type", Object)
    ], ConfigProviderImpl.prototype, "expressionHandler", void 0);
    ConfigProviderImpl = __decorate([
        annotation_1.Component(config_protocol_1.ConfigProvider)
    ], ConfigProviderImpl);
    return ConfigProviderImpl;
}());
exports.ConfigProviderImpl = ConfigProviderImpl;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/config/config-util.js":
/*!********************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/config/config-util.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_protocol_1 = __webpack_require__(/*! ./config-protocol */ "./node_modules/@malagu/core/lib/common/config/config-protocol.js");
var container_1 = __webpack_require__(/*! ../container */ "./node_modules/@malagu/core/lib/common/container/index.js");
var traverse = __webpack_require__(/*! traverse */ "traverse");
var config = {"malagu":{"name":"Malagu Framework","hostDomId":"malagu-root","annotation":{"Component":{"proxy":false}},"aop":{"enabled":true},"logger":{"level":"info"},"webpack":{"toES5Plugin":{"include":{"class-transformer":"class-transformer","vscode-jsonrpc":"vscode-jsonrpc"}}},"session":{"autoCommit":true,"maxAge":86400000,"sessionIdKey":"malagu:sessionId","sessionKey":"malagu:session","renew":false},"server":{"path":"/","port":3000,"endpoint":"http://localhost:3000"},"trace":{"requestField":"X-Malagu-Trace-ID","responseField":"X-Malagu-Trace-ID"},"web":{"route":{"cacheSize":500}},"client":{"config":{"withCredentials":true,"headers":{"X-Requested-With":"XMLHttpRequest"}}},"mvc":{"path":"/*","defaultViewName":"json"},"mustache":{"cache":false,"baseViewDir":"assets/views"},"rpc":{"path":"api","merge":{"enabled":false,"timerDelay":35,"maxLength":5242880,"maxCount":100}},"core":{"validationPipeOptions":{"detailedOutputDisabled":false,"transformEnabled":true}},"cookies":{"keys":["abcdef"]}},"mode":["local"],"webpackHooks":[],"initHooks":[],"configHooks":[],"buildHooks":[],"deployHooks":[],"serveHooks":[],"cliHooks":[],"targets":["backend"],"entry":"@malagu/core/lib/common/application/application-entry","devEntry":"@malagu/web/lib/node/application/dev-application-entry","staticModules":[],"modules":["src\\node\\module"],"assets":[]} || {};
var traverseConfig = traverse(config);
var ConfigUtil;
(function (ConfigUtil) {
    function get(key, defaultValue) {
        return container_1.ContainerUtil.get(config_protocol_1.ConfigProvider).get(key, defaultValue);
    }
    ConfigUtil.get = get;
    function getRaw() {
        return config;
    }
    ConfigUtil.getRaw = getRaw;
    function getRawTraverse() {
        return traverseConfig;
    }
    ConfigUtil.getRawTraverse = getRawTraverse;
})(ConfigUtil = exports.ConfigUtil || (exports.ConfigUtil = {}));


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/config/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/config/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./config-protocol */ "./node_modules/@malagu/core/lib/common/config/config-protocol.js"));
__export(__webpack_require__(/*! ./config-provider */ "./node_modules/@malagu/core/lib/common/config/config-provider.js"));
__export(__webpack_require__(/*! ./config-util */ "./node_modules/@malagu/core/lib/common/config/config-util.js"));


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/constants.js":
/*!***********************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/constants.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.METADATA_KEY = {
    constantValue: 'malagu:constant-value',
    component: 'malagu:component'
};


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/container/auto-bind.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/container/auto-bind.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/core/lib/common/constants.js");
var annotation_1 = __webpack_require__(/*! ../annotation */ "./node_modules/@malagu/core/lib/common/annotation/index.js");
var config_util_1 = __webpack_require__(/*! ../config/config-util */ "./node_modules/@malagu/core/lib/common/config/config-util.js");
var aop_protocol_1 = __webpack_require__(/*! ../aop/aop-protocol */ "./node_modules/@malagu/core/lib/common/aop/aop-protocol.js");
var container_util_1 = __webpack_require__(/*! ./container-util */ "./node_modules/@malagu/core/lib/common/container/container-util.js");
function autoBind(registry) {
    return new inversify_1.ContainerModule(function (bind, unbind, isBound, rebind) {
        var metadatas = Reflect.getMetadata(constants_1.METADATA_KEY.component, Reflect) || [];
        for (var index = metadatas.length - 1; index >= 0; index--) {
            var metadata = metadatas[index];
            resolve(metadata, bind, rebind);
        }
        Reflect.defineMetadata(constants_1.METADATA_KEY.component, [], Reflect);
        var constantMetadata = Reflect.getMetadata(constants_1.METADATA_KEY.constantValue, Reflect) || [];
        constantMetadata.map(function (metadata) { return resolveConstant(metadata, bind, rebind); });
        Reflect.defineMetadata(constants_1.METADATA_KEY.constantValue, [], Reflect);
        if (registry) {
            registry(bind, unbind, isBound, rebind);
        }
    });
}
exports.autoBind = autoBind;
function doProxyIfNeed(metadata, target) {
    var _a, _b;
    var enabled = (_b = (_a = config_util_1.ConfigUtil.getRaw().malagu) === null || _a === void 0 ? void 0 : _a.aop) === null || _b === void 0 ? void 0 : _b.enabled;
    if (enabled) {
        var classFilter = container_util_1.ContainerUtil.get(aop_protocol_1.ClassFilter);
        if (target.constructor && classFilter.matches(target.constructor, metadata)) {
            var aopProxyFactory = container_util_1.ContainerUtil.get(aop_protocol_1.AopProxyFactory);
            return aopProxyFactory.create({
                target: target,
                metadata: metadata
            }).getPorxy();
        }
    }
    return target;
}
function resolve(metadata, bind, rebind) {
    var e_1, _a;
    var mid;
    var ids = metadata.ids, scope = metadata.scope, name = metadata.name, tag = metadata.tag, when = metadata.when, proxy = metadata.proxy, onActivation = metadata.onActivation, target = metadata.target;
    var id = ids.shift();
    mid = metadata.rebind ? rebind(id).to(target) : bind(id).to(target);
    if (scope === annotation_1.Scope.Singleton) {
        mid = mid.inSingletonScope();
    }
    else if (scope === annotation_1.Scope.Transient) {
        mid = mid.inTransientScope();
    }
    if (name) {
        mid = mid.whenTargetNamed(name);
    }
    else if (tag) {
        mid = mid.whenTargetTagged(tag.tag, tag.value);
    }
    else if (metadata.default) {
        mid = mid.whenTargetIsDefault();
    }
    else if (when) {
        mid = mid.when(when);
    }
    if (onActivation) {
        mid.onActivation(onActivation);
    }
    else if (proxy) {
        mid.onActivation(function (context, t) { return doProxyIfNeed(metadata, t); });
    }
    try {
        for (var ids_1 = __values(ids), ids_1_1 = ids_1.next(); !ids_1_1.done; ids_1_1 = ids_1.next()) {
            var item = ids_1_1.value;
            bind(item).toService(id);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (ids_1_1 && !ids_1_1.done && (_a = ids_1.return)) _a.call(ids_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
function resolveConstant(metadata, bind, rebind) {
    var e_2, _a;
    var ids = Array.isArray(metadata.id) ? metadata.id : [metadata.id];
    var id = ids.shift();
    if (metadata.rebind) {
        rebind(id).toConstantValue(metadata.constantValue);
    }
    else {
        bind(id).toConstantValue(metadata.constantValue);
    }
    try {
        for (var ids_2 = __values(ids), ids_2_1 = ids_2.next(); !ids_2_1.done; ids_2_1 = ids_2.next()) {
            var item = ids_2_1.value;
            bind(item).toService(id);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (ids_2_1 && !ids_2_1.done && (_a = ids_2.return)) _a.call(ids_2);
        }
        finally { if (e_2) throw e_2.error; }
    }
}


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/container/container-provider.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/container/container-provider.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _container;
var ContainerProvider;
(function (ContainerProvider) {
    function set(container) {
        _container = container;
    }
    ContainerProvider.set = set;
    function provide() {
        if (!_container) {
            throw new Error('Container is not ready yet, the timing is incorrect.');
        }
        return _container;
    }
    ContainerProvider.provide = provide;
})(ContainerProvider = exports.ContainerProvider || (exports.ContainerProvider = {}));


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/container/container-util.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/container/container-util.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var container_provider_1 = __webpack_require__(/*! ./container-provider */ "./node_modules/@malagu/core/lib/common/container/container-provider.js");
var ContainerUtil;
(function (ContainerUtil) {
    function get(serviceIdentifier) {
        return container_provider_1.ContainerProvider.provide().get(serviceIdentifier);
    }
    ContainerUtil.get = get;
    function getAll(serviceIdentifier) {
        return container_provider_1.ContainerProvider.provide().getAll(serviceIdentifier);
    }
    ContainerUtil.getAll = getAll;
    function getAllNamed(serviceIdentifier, named) {
        return container_provider_1.ContainerProvider.provide().getAllNamed(serviceIdentifier, named);
    }
    ContainerUtil.getAllNamed = getAllNamed;
    function getNamed(serviceIdentifier, named) {
        return container_provider_1.ContainerProvider.provide().getNamed(serviceIdentifier, named);
    }
    ContainerUtil.getNamed = getNamed;
    function getAllTagged(serviceIdentifier, key, value) {
        return container_provider_1.ContainerProvider.provide().getAllTagged(serviceIdentifier, key, value);
    }
    ContainerUtil.getAllTagged = getAllTagged;
    function getTagged(serviceIdentifier, key, value) {
        return container_provider_1.ContainerProvider.provide().getTagged(serviceIdentifier, key, value);
    }
    ContainerUtil.getTagged = getTagged;
})(ContainerUtil = exports.ContainerUtil || (exports.ContainerUtil = {}));


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/container/dynamic-container.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/container/dynamic-container.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

        
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
// dynamic loading component module at compile time
exports.container = Promise.resolve(new inversify_1.Container());

        
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
const { Container } = __webpack_require__(/*! inversify */ "inversify");
const { CoreBackendModule } = __webpack_require__(/*! @malagu/core/lib/node/module */ "./node_modules/@malagu/core/lib/node/module.js");
__webpack_require__(/*! source-map-support */ "source-map-support").install();

const container = new Container({ skipBaseClassChecks: true });
container.load(CoreBackendModule);



function load(raw) {
  return Promise.resolve(raw.default).then(module => container.load(module));
}

module.exports.container = Promise.resolve()
  .then(function () { return Promise.resolve(__webpack_require__(/*! @malagu/web/lib/common/module */ "./node_modules/@malagu/web/lib/common/module.js")).then(load) }).
then(function () { return Promise.resolve(__webpack_require__(/*! @malagu/web/lib/node/module */ "./node_modules/@malagu/web/lib/node/module.js")).then(load) }).
then(function () { return Promise.resolve(__webpack_require__(/*! @malagu/fc-adapter/lib/node/module */ "./node_modules/@malagu/fc-adapter/lib/node/module.js")).then(load) }).
then(function () { return Promise.resolve(__webpack_require__(/*! @malagu/mvc/lib/node/module */ "./node_modules/@malagu/mvc/lib/node/module.js")).then(load) }).
then(function () { return Promise.resolve(__webpack_require__(/*! @malagu/rpc/lib/common/module */ "./node_modules/@malagu/rpc/lib/common/module.js")).then(load) }).
then(function () { return Promise.resolve(__webpack_require__(/*! @malagu/rpc/lib/node/module */ "./node_modules/@malagu/rpc/lib/node/module.js")).then(load) }).
then(function () { return Promise.resolve(__webpack_require__(/*! ./src/node/module */ "./src/node/module.ts")).then(load) })
  .then(() => container).catch(reason => {
    console.error('Failed to start the backend application.');
    if (reason) {
      console.error(reason);
    }
  });
        

/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/container/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/container/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./container-provider */ "./node_modules/@malagu/core/lib/common/container/container-provider.js"));
__export(__webpack_require__(/*! ./auto-bind */ "./node_modules/@malagu/core/lib/common/container/auto-bind.js"));
__export(__webpack_require__(/*! ./container-util */ "./node_modules/@malagu/core/lib/common/container/container-util.js"));


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/el/core-context-initializer.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/el/core-context-initializer.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var annotation_1 = __webpack_require__(/*! ../annotation */ "./node_modules/@malagu/core/lib/common/annotation/index.js");
var expression_protocol_1 = __webpack_require__(/*! ./expression-protocol */ "./node_modules/@malagu/core/lib/common/el/expression-protocol.js");
var CoreContextInitializer = /** @class */ (function () {
    function CoreContextInitializer() {
        this.priority = 500;
    }
    CoreContextInitializer.prototype.initialize = function (ctx) {
        ctx.env = __assign(__assign({}, process.env), { _ignoreEl: true });
        var jexlEngine = this.jexlEngineProvider.provide();
        jexlEngine.addTransform('replace', function (val, searchValue, replaceValue) { return val && val.replace(new RegExp(searchValue, 'g'), replaceValue); });
        jexlEngine.addTransform('regexp', function (pattern, flags) { return new RegExp(pattern, flags); });
    };
    __decorate([
        annotation_1.Autowired(expression_protocol_1.JexlEngineProvider),
        __metadata("design:type", Object)
    ], CoreContextInitializer.prototype, "jexlEngineProvider", void 0);
    CoreContextInitializer = __decorate([
        annotation_1.Component(expression_protocol_1.ContextInitializer)
    ], CoreContextInitializer);
    return CoreContextInitializer;
}());
exports.CoreContextInitializer = CoreContextInitializer;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/el/expression-compiler.js":
/*!************************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/el/expression-compiler.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var expression_protocol_1 = __webpack_require__(/*! ./expression-protocol */ "./node_modules/@malagu/core/lib/common/el/expression-protocol.js");
var annotation_1 = __webpack_require__(/*! ../annotation */ "./node_modules/@malagu/core/lib/common/annotation/index.js");
var ExpressionCompilerImpl = /** @class */ (function () {
    function ExpressionCompilerImpl() {
        this.ESCAPE_CHAR = '\\';
        this.SPECIAL_CHAR = '$';
        this.BRACKET_BEGIN = '{';
        this.BRACKET_END = '}';
    }
    ExpressionCompilerImpl.prototype.compileSections = function (text) {
        if (!text || text.indexOf(this.SPECIAL_CHAR) < 0) {
            return [];
        }
        var sections = [];
        var middleText = text;
        while (middleText) {
            var me = this.middleCompile(middleText);
            if (!me) {
                sections.push(middleText);
                middleText = undefined;
            }
            else {
                sections.push(me.expression);
                middleText = me.nextText;
            }
        }
        return sections;
    };
    ExpressionCompilerImpl.prototype.middleCompile = function (text) {
        var me;
        if (text.startsWith('${{')) {
            me = this.nextMiddleExpression(text.substring(3), 2);
        }
        else if (text.startsWith('${')) {
            me = this.nextMiddleExpression(text.substring(2));
        }
        else {
            me = this.nextString(text);
        }
        return me;
    };
    ExpressionCompilerImpl.prototype.nextMiddleExpression = function (text, bracketBeginCharNum) {
        if (bracketBeginCharNum === void 0) { bracketBeginCharNum = 1; }
        var stringed = false;
        var escaped = false;
        var bracketBeginCharFound = 0;
        var section = [];
        for (var i = 0; i < text.length; i++) {
            var c = text[i];
            if (!escaped) {
                if ('\'' === c || '\"' === c) {
                    stringed = !stringed;
                    section.push(c);
                    continue;
                }
                else if (c === this.ESCAPE_CHAR) {
                    escaped = true;
                    continue;
                }
            }
            if (stringed) {
                section.push(c);
                escaped = false;
            }
            else if (escaped) {
                if (this.SPECIAL_CHAR === c || this.BRACKET_BEGIN === c || this.BRACKET_END === c) {
                    section.push(c);
                }
                else {
                    section.push(this.ESCAPE_CHAR);
                    section.push(c);
                }
                escaped = false;
            }
            else if (this.BRACKET_BEGIN === c) {
                bracketBeginCharFound++;
                section.push(c);
            }
            else if (this.BRACKET_END === c) {
                if (bracketBeginCharFound === 0 && bracketBeginCharNum === 1) {
                    var jexlEngine = this.jexlEngineProvider.provide();
                    var expression = jexlEngine.createExpression(section.join(''));
                    var nextText = void 0;
                    if (i !== text.length - 1) {
                        nextText = text.substring(i + 1);
                    }
                    return { expression: expression, nextText: nextText };
                }
                else if (bracketBeginCharFound > 0) {
                    bracketBeginCharFound--;
                    section.push(c);
                }
                else {
                    bracketBeginCharNum--;
                }
            }
            else {
                section.push(c);
            }
        }
    };
    ExpressionCompilerImpl.prototype.nextString = function (text) {
        var escaped = false;
        var specialCharFound = false;
        var section = [];
        for (var i = 0; i < text.length; i++) {
            var c = text[i];
            if (!escaped) {
                if ('\'' === c || '\"' === c) {
                    section.push(c);
                    continue;
                }
                else if (c === this.ESCAPE_CHAR) {
                    escaped = true;
                    continue;
                }
            }
            if (escaped) {
                if (this.SPECIAL_CHAR === c || this.BRACKET_BEGIN === c || this.BRACKET_END === c) {
                    section.push(c);
                }
                else {
                    section.push(this.ESCAPE_CHAR);
                    section.push(c);
                }
                escaped = false;
            }
            else if (specialCharFound) {
                if (this.BRACKET_BEGIN === c) {
                    var expression = section.join('');
                    var nextText = text.substring(i - 1);
                    return { expression: expression, nextText: nextText };
                }
                else {
                    specialCharFound = false;
                    section.push(this.SPECIAL_CHAR);
                    section.push(c);
                }
            }
            else {
                if (this.SPECIAL_CHAR === c) {
                    specialCharFound = true;
                }
                else {
                    section.push(c);
                }
            }
        }
        return { expression: section.join('') };
    };
    __decorate([
        annotation_1.Autowired(expression_protocol_1.JexlEngineProvider),
        __metadata("design:type", Object)
    ], ExpressionCompilerImpl.prototype, "jexlEngineProvider", void 0);
    ExpressionCompilerImpl = __decorate([
        annotation_1.Component(expression_protocol_1.ExpressionCompiler)
    ], ExpressionCompilerImpl);
    return ExpressionCompilerImpl;
}());
exports.ExpressionCompilerImpl = ExpressionCompilerImpl;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/el/expression-context-provider.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/el/expression-context-provider.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var annotation_1 = __webpack_require__(/*! ../annotation */ "./node_modules/@malagu/core/lib/common/annotation/index.js");
var expression_protocol_1 = __webpack_require__(/*! ./expression-protocol */ "./node_modules/@malagu/core/lib/common/el/expression-protocol.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/@malagu/core/lib/common/utils/index.js");
var config_1 = __webpack_require__(/*! ../config */ "./node_modules/@malagu/core/lib/common/config/index.js");
var ExpressionContextProviderImpl = /** @class */ (function () {
    function ExpressionContextProviderImpl(contextInitializers) {
        this.contextInitializers = contextInitializers;
        this.initialized = false;
        this.ctx = config_1.ConfigUtil.getRaw();
    }
    ExpressionContextProviderImpl.prototype.provide = function () {
        var e_1, _a;
        if (!this.prioritized) {
            this.prioritized = utils_1.Prioritizeable.prioritizeAllSync(this.contextInitializers).map(function (c) { return c.value; });
        }
        if (!this.initialized) {
            this.initialized = true;
            try {
                for (var _b = __values(this.prioritized), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var initializer = _c.value;
                    initializer.initialize(this.ctx);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return this.ctx;
    };
    ExpressionContextProviderImpl = __decorate([
        annotation_1.Component(expression_protocol_1.ExpressionContextProvider),
        __param(0, annotation_1.Autowired(expression_protocol_1.ContextInitializer)), __param(0, annotation_1.Optional()),
        __metadata("design:paramtypes", [Array])
    ], ExpressionContextProviderImpl);
    return ExpressionContextProviderImpl;
}());
exports.ExpressionContextProviderImpl = ExpressionContextProviderImpl;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/el/expression-handler.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/el/expression-handler.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var annotation_1 = __webpack_require__(/*! ../annotation */ "./node_modules/@malagu/core/lib/common/annotation/index.js");
var expression_protocol_1 = __webpack_require__(/*! ./expression-protocol */ "./node_modules/@malagu/core/lib/common/el/expression-protocol.js");
var traverse = __webpack_require__(/*! traverse */ "traverse");
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var ExpressionHandlerImpl = /** @class */ (function () {
    function ExpressionHandlerImpl() {
    }
    ExpressionHandlerImpl.prototype.init = function () {
    };
    ExpressionHandlerImpl.prototype.getContext = function (ctx) {
        var c = ctx || this.expressionContextProvider.provide();
        if (!ctx && c !== this._ctx) {
            this._ctx = c;
            this.handle(c, c);
        }
        return c;
    };
    ExpressionHandlerImpl.prototype.handle = function (textOrObj, ctx) {
        if (typeof textOrObj === 'string') {
            return this.doHandle(textOrObj, ctx);
        }
        else {
            var self_1 = this;
            traverse(textOrObj).forEach(function (value) {
                if (typeof value === 'string') {
                    if (typeof value === 'string') {
                        this.update(self_1.handle(value, ctx));
                    }
                    else if (value && value._ignoreEl === true) {
                        this.update(value, true);
                    }
                }
            });
            return textOrObj;
        }
    };
    ExpressionHandlerImpl.prototype.doHandle = function (text, ctx) {
        var e_1, _a;
        var sections = this.expressionCompiler.compileSections(text);
        if (sections.length > 0) {
            if (this.hasExpression(sections)) {
                var c = this.getContext(ctx);
                if (sections.length === 1) {
                    var value = sections[0].evalSync(c);
                    if (typeof value === 'string') {
                        value = this.handle(value, c);
                    }
                    return value;
                }
                var result = [];
                try {
                    for (var sections_1 = __values(sections), sections_1_1 = sections_1.next(); !sections_1_1.done; sections_1_1 = sections_1.next()) {
                        var section = sections_1_1.value;
                        if (typeof section === 'string') {
                            result.push(section);
                        }
                        else {
                            var value = section.evalSync(c);
                            if (typeof value === 'string') {
                                value = this.handle(value, c);
                            }
                            result.push(value);
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (sections_1_1 && !sections_1_1.done && (_a = sections_1.return)) _a.call(sections_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return result.join('');
            }
        }
        return text;
    };
    ExpressionHandlerImpl.prototype.hasExpression = function (sections) {
        var e_2, _a;
        try {
            for (var sections_2 = __values(sections), sections_2_1 = sections_2.next(); !sections_2_1.done; sections_2_1 = sections_2.next()) {
                var section = sections_2_1.value;
                if (typeof section !== 'string') {
                    return true;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (sections_2_1 && !sections_2_1.done && (_a = sections_2.return)) _a.call(sections_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return false;
    };
    __decorate([
        annotation_1.Autowired(expression_protocol_1.JexlEngineProvider),
        __metadata("design:type", Object)
    ], ExpressionHandlerImpl.prototype, "jexlEngineProvider", void 0);
    __decorate([
        annotation_1.Autowired(expression_protocol_1.ExpressionContextProvider),
        __metadata("design:type", Object)
    ], ExpressionHandlerImpl.prototype, "expressionContextProvider", void 0);
    __decorate([
        annotation_1.Autowired(expression_protocol_1.ExpressionCompiler),
        __metadata("design:type", Object)
    ], ExpressionHandlerImpl.prototype, "expressionCompiler", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ExpressionHandlerImpl.prototype, "init", null);
    ExpressionHandlerImpl = __decorate([
        annotation_1.Component(expression_protocol_1.ExpressionHandler)
    ], ExpressionHandlerImpl);
    return ExpressionHandlerImpl;
}());
exports.ExpressionHandlerImpl = ExpressionHandlerImpl;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/el/expression-protocol.js":
/*!************************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/el/expression-protocol.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressionCompiler = Symbol('ExpressionCompiler');
exports.ExpressionHandler = Symbol('ExpressionHandler');
exports.ContextInitializer = Symbol('ContextInitializer');
exports.ExpressionContextProvider = Symbol('ExpressionContextProvider');
exports.JexlEngineProvider = Symbol('JexlEngineProvider');


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/el/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/el/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./expression-protocol */ "./node_modules/@malagu/core/lib/common/el/expression-protocol.js"));
__export(__webpack_require__(/*! ./expression-compiler */ "./node_modules/@malagu/core/lib/common/el/expression-compiler.js"));
__export(__webpack_require__(/*! ./expression-context-provider */ "./node_modules/@malagu/core/lib/common/el/expression-context-provider.js"));
__export(__webpack_require__(/*! ./expression-handler */ "./node_modules/@malagu/core/lib/common/el/expression-handler.js"));
__export(__webpack_require__(/*! ./jexl-engine-provider */ "./node_modules/@malagu/core/lib/common/el/jexl-engine-provider.js"));
__export(__webpack_require__(/*! ./core-context-initializer */ "./node_modules/@malagu/core/lib/common/el/core-context-initializer.js"));


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/el/jexl-engine-provider.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/el/jexl-engine-provider.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var annotation_1 = __webpack_require__(/*! ../annotation */ "./node_modules/@malagu/core/lib/common/annotation/index.js");
var expression_protocol_1 = __webpack_require__(/*! ./expression-protocol */ "./node_modules/@malagu/core/lib/common/el/expression-protocol.js");
var jexl_1 = __webpack_require__(/*! jexl */ "jexl");
var JexlEngineProviderImpl = /** @class */ (function () {
    function JexlEngineProviderImpl() {
    }
    JexlEngineProviderImpl.prototype.provide = function () {
        if (!this.jexlEngine) {
            this.jexlEngine = new jexl_1.Jexl();
        }
        return this.jexlEngine;
    };
    JexlEngineProviderImpl = __decorate([
        annotation_1.Component(expression_protocol_1.JexlEngineProvider)
    ], JexlEngineProviderImpl);
    return JexlEngineProviderImpl;
}());
exports.JexlEngineProviderImpl = JexlEngineProviderImpl;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/error/cutom-error.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/error/cutom-error.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ts_custom_error_1 = __webpack_require__(/*! ts-custom-error */ "ts-custom-error");
var CustomError = /** @class */ (function (_super) {
    __extends(CustomError, _super);
    function CustomError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CustomError;
}(ts_custom_error_1.CustomError));
exports.CustomError = CustomError;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/error/illegal-argument-error.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/error/illegal-argument-error.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var cutom_error_1 = __webpack_require__(/*! ./cutom-error */ "./node_modules/@malagu/core/lib/common/error/cutom-error.js");
var IllegalArgumentError = /** @class */ (function (_super) {
    __extends(IllegalArgumentError, _super);
    function IllegalArgumentError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IllegalArgumentError;
}(cutom_error_1.CustomError));
exports.IllegalArgumentError = IllegalArgumentError;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/error/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/error/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./cutom-error */ "./node_modules/@malagu/core/lib/common/error/cutom-error.js"));
__export(__webpack_require__(/*! ./validation-errors */ "./node_modules/@malagu/core/lib/common/error/validation-errors.js"));
__export(__webpack_require__(/*! ./illegal-argument-error */ "./node_modules/@malagu/core/lib/common/error/illegal-argument-error.js"));


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/error/validation-errors.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/error/validation-errors.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var cutom_error_1 = __webpack_require__(/*! ./cutom-error */ "./node_modules/@malagu/core/lib/common/error/cutom-error.js");
var ValidationErrors = /** @class */ (function (_super) {
    __extends(ValidationErrors, _super);
    function ValidationErrors(errors) {
        return _super.call(this, errors === undefined ? undefined : JSON.stringify(errors)) || this;
    }
    return ValidationErrors;
}(cutom_error_1.CustomError));
exports.ValidationErrors = ValidationErrors;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./utils */ "./node_modules/@malagu/core/lib/common/utils/index.js"));
__export(__webpack_require__(/*! ./annotation */ "./node_modules/@malagu/core/lib/common/annotation/index.js"));
__export(__webpack_require__(/*! ./application */ "./node_modules/@malagu/core/lib/common/application/index.js"));
__export(__webpack_require__(/*! ./logger */ "./node_modules/@malagu/core/lib/common/logger/index.js"));
__export(__webpack_require__(/*! ./container */ "./node_modules/@malagu/core/lib/common/container/index.js"));
__export(__webpack_require__(/*! ./aop */ "./node_modules/@malagu/core/lib/common/aop/index.js"));
__export(__webpack_require__(/*! ./constants */ "./node_modules/@malagu/core/lib/common/constants.js"));
__export(__webpack_require__(/*! ./config */ "./node_modules/@malagu/core/lib/common/config/index.js"));
__export(__webpack_require__(/*! ./error */ "./node_modules/@malagu/core/lib/common/error/index.js"));
__export(__webpack_require__(/*! ./pipe */ "./node_modules/@malagu/core/lib/common/pipe/index.js"));
__export(__webpack_require__(/*! ./el */ "./node_modules/@malagu/core/lib/common/el/index.js"));


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/logger/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/logger/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./logger-protocol */ "./node_modules/@malagu/core/lib/common/logger/logger-protocol.js"));
__export(__webpack_require__(/*! ./logger */ "./node_modules/@malagu/core/lib/common/logger/logger.js"));


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/logger/logger-protocol.js":
/*!************************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/logger/logger-protocol.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LOGGER_CONFIG = 'malagu.logger';
exports.Logger = Symbol('Logger');


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/logger/logger.js":
/*!***************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/logger/logger.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var log = __webpack_require__(/*! loglevel */ "loglevel");
var annotation_1 = __webpack_require__(/*! ../annotation */ "./node_modules/@malagu/core/lib/common/annotation/index.js");
var logger_protocol_1 = __webpack_require__(/*! ./logger-protocol */ "./node_modules/@malagu/core/lib/common/logger/logger-protocol.js");
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.error = function (message) {
        console.error(message);
    };
    ConsoleLogger.prototype.warn = function (message) {
        console.warn(message);
    };
    ConsoleLogger.prototype.info = function (message) {
        console.info(message);
    };
    ConsoleLogger.prototype.log = function (message) {
        console.log(message);
    };
    ConsoleLogger.prototype.debug = function (message) {
        console.debug(message);
    };
    return ConsoleLogger;
}());
exports.ConsoleLogger = ConsoleLogger;
var LoggerImpl = /** @class */ (function () {
    function LoggerImpl(config) {
        this.config = config;
        if (config.level) {
            log.setLevel(config.level);
        }
        else {
            log.setLevel('error');
        }
    }
    LoggerImpl.prototype.error = function (message, context) {
        if (context === void 0) { context = ''; }
        log.error(message, context);
    };
    LoggerImpl.prototype.info = function (message, context) {
        if (context === void 0) { context = ''; }
        log.info(message, context);
    };
    LoggerImpl.prototype.warn = function (message, context) {
        if (context === void 0) { context = ''; }
        log.warn(message, context);
    };
    LoggerImpl.prototype.debug = function (message, context) {
        if (context === void 0) { context = ''; }
        log.debug(message, context);
    };
    LoggerImpl = __decorate([
        annotation_1.Component(logger_protocol_1.Logger),
        __param(0, annotation_1.Value(logger_protocol_1.LOGGER_CONFIG)),
        __metadata("design:paramtypes", [Object])
    ], LoggerImpl);
    return LoggerImpl;
}());
exports.LoggerImpl = LoggerImpl;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/pipe/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/pipe/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./pipe-manager */ "./node_modules/@malagu/core/lib/common/pipe/pipe-manager.js"));
__export(__webpack_require__(/*! ./pipe-protocol */ "./node_modules/@malagu/core/lib/common/pipe/pipe-protocol.js"));
__export(__webpack_require__(/*! ./pipe-provider */ "./node_modules/@malagu/core/lib/common/pipe/pipe-provider.js"));
__export(__webpack_require__(/*! ./pipe-transtorm */ "./node_modules/@malagu/core/lib/common/pipe/pipe-transtorm.js"));


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/pipe/pipe-manager.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/pipe/pipe-manager.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var annotation_1 = __webpack_require__(/*! ../annotation */ "./node_modules/@malagu/core/lib/common/annotation/index.js");
var pipe_protocol_1 = __webpack_require__(/*! ./pipe-protocol */ "./node_modules/@malagu/core/lib/common/pipe/pipe-protocol.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/@malagu/core/lib/common/utils/index.js");
var PipeManagerImpl = /** @class */ (function () {
    function PipeManagerImpl() {
    }
    PipeManagerImpl.prototype.apply = function (metadata, args) {
        return __awaiter(this, void 0, void 0, function () {
            var paramTypes, index, arg, _a, _b, pipe, e_1_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        paramTypes = Reflect.getMetadata('design:paramtypes', utils_1.getTarget(metadata.target), metadata.method);
                        if (!paramTypes) return [3 /*break*/, 11];
                        index = 0;
                        _d.label = 1;
                    case 1:
                        if (!(index < args.length)) return [3 /*break*/, 11];
                        arg = args[index];
                        _d.label = 2;
                    case 2:
                        _d.trys.push([2, 7, 8, 9]);
                        _a = (e_1 = void 0, __values(this.pipeProvider.provide())), _b = _a.next();
                        _d.label = 3;
                    case 3:
                        if (!!_b.done) return [3 /*break*/, 6];
                        pipe = _b.value;
                        return [4 /*yield*/, pipe.transform(arg, { argType: index < paramTypes.length ? paramTypes[index] : undefined })];
                    case 4:
                        arg = _d.sent();
                        _d.label = 5;
                    case 5:
                        _b = _a.next();
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 9:
                        args[index] = arg;
                        _d.label = 10;
                    case 10:
                        index++;
                        return [3 /*break*/, 1];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        annotation_1.Autowired(pipe_protocol_1.PipeProvider),
        __metadata("design:type", Object)
    ], PipeManagerImpl.prototype, "pipeProvider", void 0);
    PipeManagerImpl = __decorate([
        annotation_1.Component(pipe_protocol_1.PipeManager)
    ], PipeManagerImpl);
    return PipeManagerImpl;
}());
exports.PipeManagerImpl = PipeManagerImpl;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/pipe/pipe-protocol.js":
/*!********************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/pipe/pipe-protocol.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PipeTransform = Symbol('PipeTransform');
exports.PipeProvider = Symbol('PipeProvider');
exports.PipeManager = Symbol('PipeManager');


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/pipe/pipe-provider.js":
/*!********************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/pipe/pipe-provider.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var annotation_1 = __webpack_require__(/*! ../annotation */ "./node_modules/@malagu/core/lib/common/annotation/index.js");
var pipe_protocol_1 = __webpack_require__(/*! ./pipe-protocol */ "./node_modules/@malagu/core/lib/common/pipe/pipe-protocol.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/@malagu/core/lib/common/utils/index.js");
var PipeProviderImpl = /** @class */ (function () {
    function PipeProviderImpl(pipes) {
        this.pipes = pipes;
    }
    PipeProviderImpl.prototype.provide = function () {
        if (!this.prioritized) {
            this.prioritized = utils_1.Prioritizeable.prioritizeAllSync(this.pipes).map(function (c) { return c.value; });
        }
        return this.prioritized;
    };
    PipeProviderImpl = __decorate([
        annotation_1.Component(pipe_protocol_1.PipeProvider),
        __param(0, annotation_1.Autowired(pipe_protocol_1.PipeTransform)),
        __metadata("design:paramtypes", [Array])
    ], PipeProviderImpl);
    return PipeProviderImpl;
}());
exports.PipeProviderImpl = PipeProviderImpl;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/pipe/pipe-transtorm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/pipe/pipe-transtorm.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var annotation_1 = __webpack_require__(/*! ../annotation */ "./node_modules/@malagu/core/lib/common/annotation/index.js");
var pipe_protocol_1 = __webpack_require__(/*! ./pipe-protocol */ "./node_modules/@malagu/core/lib/common/pipe/pipe-protocol.js");
var error_1 = __webpack_require__(/*! ../error */ "./node_modules/@malagu/core/lib/common/error/index.js");
var util_1 = __webpack_require__(/*! util */ "util");
var class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
var class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
var ValidationPipe = /** @class */ (function () {
    function ValidationPipe() {
        this.priority = 1000;
    }
    ValidationPipe.prototype.transform = function (value, metadata) {
        return __awaiter(this, void 0, void 0, function () {
            var opts, argType, originalValue, isNil, isPrimitive, entity, originalEntity, isCtorNotEqual, errors;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        opts = this.options || {};
                        argType = metadata.argType;
                        if (!argType || !this.toValidate(metadata)) {
                            return [2 /*return*/, value];
                        }
                        originalValue = value;
                        value = this.toEmptyIfNil(value);
                        isNil = value !== originalValue;
                        isPrimitive = this.isPrimitive(value);
                        this.stripProtoKeys(value);
                        entity = class_transformer_1.plainToClass(argType, value, opts.transformOptions);
                        originalEntity = entity;
                        isCtorNotEqual = entity.constructor !== argType;
                        if (isCtorNotEqual && !isPrimitive) {
                            entity.constructor = argType;
                        }
                        else if (isCtorNotEqual) {
                            // when "entity" is a primitive value, we have to temporarily
                            // replace the entity to perform the validation against the original
                            // metatype defined inside the handler
                            entity = { constructor: argType };
                        }
                        return [4 /*yield*/, class_validator_1.validate(entity, opts.validatorOptions)];
                    case 1:
                        errors = _a.sent();
                        if (errors.length > 0) {
                            throw new error_1.ValidationErrors(opts.detailedOutputDisabled ? undefined : errors);
                        }
                        if (isPrimitive) {
                            // if the value is a primitive value and the validation process has been successfully completed
                            // we have to revert the original value passed through the pipe
                            entity = originalEntity;
                        }
                        if (opts.transformEnabled) {
                            return [2 /*return*/, entity];
                        }
                        if (isNil) {
                            // if the value was originally undefined or null, revert it back
                            return [2 /*return*/, originalValue];
                        }
                        return [2 /*return*/, Object.keys(opts.validatorOptions).length > 0
                                ? class_transformer_1.classToPlain(entity, opts.transformOptions)
                                : value];
                }
            });
        });
    };
    ValidationPipe.prototype.toValidate = function (metadata) {
        var argType = metadata.argType;
        var types = [String, Boolean, Number, Array, Object];
        return !types.some(function (t) { return argType === t; }) && !util_1.isNull(argType);
    };
    ValidationPipe.prototype.toEmptyIfNil = function (value) {
        return util_1.isNull(value) ? {} : value;
    };
    ValidationPipe.prototype.stripProtoKeys = function (value) {
        var _this = this;
        delete value.__proto__;
        var keys = Object.keys(value);
        keys
            .filter(function (key) { return typeof value[key] === 'object' && value[key]; })
            .forEach(function (key) { return _this.stripProtoKeys(value[key]); });
    };
    ValidationPipe.prototype.isPrimitive = function (value) {
        return ['number', 'boolean', 'string'].indexOf(typeof value) !== -1;
    };
    __decorate([
        annotation_1.Value('malagu.core.validationPipeOptions'),
        __metadata("design:type", Object)
    ], ValidationPipe.prototype, "options", void 0);
    ValidationPipe = __decorate([
        annotation_1.Component(pipe_protocol_1.PipeTransform)
    ], ValidationPipe);
    return ValidationPipe;
}());
exports.ValidationPipe = ValidationPipe;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/utils/annotation-util.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/utils/annotation-util.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AnnotationUtil;
(function (AnnotationUtil) {
    function getValueOrOption(valueOrOption, primaryProperty) {
        var _a;
        if (primaryProperty === void 0) { primaryProperty = 'id'; }
        var opiton = {};
        if (typeof valueOrOption === 'object' && !Array.isArray(valueOrOption)) {
            opiton = valueOrOption;
        }
        else if (valueOrOption) {
            opiton = (_a = {}, _a[primaryProperty] = valueOrOption, _a);
        }
        return opiton;
    }
    AnnotationUtil.getValueOrOption = getValueOrOption;
    function getType(target, targetKey, index) {
        if (index !== undefined) {
            return Reflect.getMetadata('design:paramtypes', target, targetKey)[index];
        }
        else {
            return Reflect.getMetadata('design:type', target, targetKey);
        }
    }
    AnnotationUtil.getType = getType;
})(AnnotationUtil = exports.AnnotationUtil || (exports.AnnotationUtil = {}));


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/utils/class-util.js":
/*!******************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/utils/class-util.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
function getSuperClasses(constructor) {
    var constructors = [];
    var current = constructor;
    while (Object.getPrototypeOf(current)) {
        current = Object.getPrototypeOf(current);
        constructors.push(current);
    }
    return constructors;
}
exports.getSuperClasses = getSuperClasses;
function getPropertyNames(obj) {
    var propertyNames = [];
    do {
        propertyNames.push.apply(propertyNames, __spread(Object.getOwnPropertyNames(obj)));
        obj = Object.getPrototypeOf(obj);
    } while (obj);
    // get unique property names
    return new Set(propertyNames);
}
exports.getPropertyNames = getPropertyNames;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/utils/disposable.js":
/*!******************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/utils/disposable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = __webpack_require__(/*! vscode-jsonrpc/lib/events */ "vscode-jsonrpc/lib/events");
exports.Disposable = events_1.Disposable;
var DisposableCollection = /** @class */ (function () {
    function DisposableCollection() {
        var _this = this;
        var toDispose = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            toDispose[_i] = arguments[_i];
        }
        this.disposables = [];
        toDispose.forEach(function (d) { return _this.push(d); });
    }
    DisposableCollection.prototype.dispose = function () {
        while (this.disposables.length !== 0) {
            this.disposables.pop().dispose();
        }
    };
    Object.defineProperty(DisposableCollection.prototype, "disposed", {
        get: function () {
            return this.disposables.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    DisposableCollection.prototype.push = function (disposable) {
        var disposables = this.disposables;
        disposables.push(disposable);
        return {
            dispose: function () {
                var index = disposables.indexOf(disposable);
                if (index !== -1) {
                    disposables.splice(index, 1);
                }
            }
        };
    };
    return DisposableCollection;
}());
exports.DisposableCollection = DisposableCollection;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/utils/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/utils/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./prioritizeable */ "./node_modules/@malagu/core/lib/common/utils/prioritizeable.js"));
__export(__webpack_require__(/*! ./promise-util */ "./node_modules/@malagu/core/lib/common/utils/promise-util.js"));
__export(__webpack_require__(/*! ./class-util */ "./node_modules/@malagu/core/lib/common/utils/class-util.js"));
__export(__webpack_require__(/*! ./metadata-util */ "./node_modules/@malagu/core/lib/common/utils/metadata-util.js"));
__export(__webpack_require__(/*! ./disposable */ "./node_modules/@malagu/core/lib/common/utils/disposable.js"));
__export(__webpack_require__(/*! ./os */ "./node_modules/@malagu/core/lib/common/utils/os.js"));
__export(__webpack_require__(/*! ./proxy-util */ "./node_modules/@malagu/core/lib/common/utils/proxy-util.js"));
__export(__webpack_require__(/*! ./annotation-util */ "./node_modules/@malagu/core/lib/common/utils/annotation-util.js"));


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/utils/metadata-util.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/utils/metadata-util.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var class_util_1 = __webpack_require__(/*! ./class-util */ "./node_modules/@malagu/core/lib/common/utils/class-util.js");
function getOwnMetadata(metadataKey, constructor, propertyKey) {
    var constructors = __spread([constructor], class_util_1.getSuperClasses(constructor));
    var result = [];
    for (var index = 0; index < constructors.length; index++) {
        var c = constructors[constructors.length - index - 1];
        var metadata = void 0;
        if (propertyKey) {
            metadata = Reflect.getOwnMetadata(metadataKey, c, propertyKey);
        }
        else {
            metadata = Reflect.getOwnMetadata(metadataKey, c);
        }
        if (metadata) {
            if (Array.isArray(metadata)) {
                result = __spread(result, metadata);
            }
            else {
                return metadata;
            }
        }
    }
    return result;
}
exports.getOwnMetadata = getOwnMetadata;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/utils/os.js":
/*!**********************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/utils/os.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
function is(userAgent, platform) {
    if (typeof navigator !== 'undefined') {
        if (navigator.userAgent && navigator.userAgent.indexOf(userAgent) >= 0) {
            return true;
        }
    }
    if (typeof process !== 'undefined') {
        return (process.platform === platform);
    }
    return false;
}
exports.isWindows = is('Windows', 'win32');
exports.isOSX = is('Mac', 'darwin');
function cmd(command) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return [
        exports.isWindows ? 'cmd' : command,
        exports.isWindows ? __spread(['/c', command], args) : args
    ];
}
exports.cmd = cmd;
var OS;
(function (OS) {
    /**
     * Enumeration of the supported operating systems.
     */
    var Type;
    (function (Type) {
        Type["Windows"] = "Windows";
        Type["Linux"] = "Linux";
        Type["OSX"] = "OSX";
    })(Type = OS.Type || (OS.Type = {}));
    /**
     * Returns with the type of the operating system. If it is neither [Windows](isWindows) nor [OS X](isOSX), then
     * it always return with the `Linux` OS type.
     */
    function type() {
        if (exports.isWindows) {
            return Type.Windows;
        }
        if (exports.isOSX) {
            return Type.OSX;
        }
        return Type.Linux;
    }
    OS.type = type;
})(OS = exports.OS || (exports.OS = {}));


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/utils/prioritizeable.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/utils/prioritizeable.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Prioritizeable;
(function (Prioritizeable) {
    function toPrioritizeable(rawValue, getPriority) {
        return __awaiter(this, void 0, void 0, function () {
            var value, priority;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (rawValue instanceof Array) {
                            return [2 /*return*/, Promise.all(rawValue.map(function (v) { return toPrioritizeable(v, getPriority); }))];
                        }
                        return [4 /*yield*/, rawValue];
                    case 1:
                        value = _a.sent();
                        return [4 /*yield*/, getPriority(value)];
                    case 2:
                        priority = _a.sent();
                        return [2 /*return*/, { priority: priority, value: value }];
                }
            });
        });
    }
    Prioritizeable.toPrioritizeable = toPrioritizeable;
    function toPrioritizeableSync(rawValue, getPriority) {
        if (getPriority === void 0) { getPriority = function (value) { return value.priority; }; }
        return rawValue.map(function (v) { return ({
            value: v,
            priority: getPriority(v)
        }); });
    }
    Prioritizeable.toPrioritizeableSync = toPrioritizeableSync;
    function prioritizeAllSync(values, getPriority) {
        var prioritizeable = toPrioritizeableSync(values, getPriority);
        return prioritizeable.filter(isValid).sort(compare);
    }
    Prioritizeable.prioritizeAllSync = prioritizeAllSync;
    function prioritizeAll(values, getPriority) {
        return __awaiter(this, void 0, void 0, function () {
            var prioritizeable;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, toPrioritizeable(values, getPriority)];
                    case 1:
                        prioritizeable = _a.sent();
                        return [2 /*return*/, prioritizeable.filter(isValid).sort(compare)];
                }
            });
        });
    }
    Prioritizeable.prioritizeAll = prioritizeAll;
    function isValid(p) {
        return p.priority > 0;
    }
    Prioritizeable.isValid = isValid;
    function compare(p, p2) {
        return p2.priority - p.priority;
    }
    Prioritizeable.compare = compare;
})(Prioritizeable = exports.Prioritizeable || (exports.Prioritizeable = {}));


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/utils/promise-util.js":
/*!********************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/utils/promise-util.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Deferred = /** @class */ (function () {
    function Deferred() {
        var _this = this;
        this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
    }
    return Deferred;
}());
exports.Deferred = Deferred;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/utils/proxy-util.js":
/*!******************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/utils/proxy-util.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var resolveMode = false;
function isResolveMode() {
    return resolveMode;
}
exports.isResolveMode = isResolveMode;
function getTargetClass(obj) {
    try {
        resolveMode = true;
        var target = obj.target;
        return target ? target.constructor : obj.constructor;
    }
    finally {
        resolveMode = false;
    }
}
exports.getTargetClass = getTargetClass;
function getTarget(obj) {
    try {
        resolveMode = true;
        var target = obj.target;
        return target || obj;
    }
    finally {
        resolveMode = false;
    }
}
exports.getTarget = getTarget;
function isProxy(obj) {
    try {
        resolveMode = true;
        return !!obj.target;
    }
    finally {
        resolveMode = false;
    }
}
exports.isProxy = isProxy;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/node/application/backend-application-state.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/node/application/backend-application-state.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(/*! ../../common */ "./node_modules/@malagu/core/lib/common/index.js");
var BackendApplicationStateService = /** @class */ (function (_super) {
    __extends(BackendApplicationStateService, _super);
    function BackendApplicationStateService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BackendApplicationStateService = __decorate([
        common_1.Component(common_1.ApplicationStateService)
    ], BackendApplicationStateService);
    return BackendApplicationStateService;
}(common_1.AbstractApplicationStateService));
exports.BackendApplicationStateService = BackendApplicationStateService;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/node/application/backend-application.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/node/application/backend-application.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(/*! ../../common */ "./node_modules/@malagu/core/lib/common/index.js");
var backend_application_state_1 = __webpack_require__(/*! ./backend-application-state */ "./node_modules/@malagu/core/lib/node/application/backend-application-state.js");
var BackendApplication = /** @class */ (function (_super) {
    __extends(BackendApplication, _super);
    function BackendApplication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BackendApplication_1 = BackendApplication;
    BackendApplication.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setupExitSignals();
                        return [4 /*yield*/, this.doStart()];
                    case 1:
                        _a.sent();
                        this.stateService.state = 'started';
                        this.stateService.state = 'ready';
                        return [2 /*return*/];
                }
            });
        });
    };
    BackendApplication.prototype.removeListeners = function (event) {
        var e_1, _a;
        try {
            for (var _b = __values(process.listeners(event)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var l = _c.value;
                if (l._tag === BackendApplication_1.name) {
                    process.removeListener(event, l);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    BackendApplication.prototype.setupExitSignals = function () {
        this.removeListeners('SIGINT');
        this.removeListeners('SIGTERM');
        var l = this.doExit.bind(this);
        l._tag = BackendApplication_1.name;
        process.once('SIGINT', l);
        process.once('SIGTERM', l);
    };
    BackendApplication.prototype.doExit = function () {
        this.doStop();
        process.exit(0);
    };
    var BackendApplication_1;
    __decorate([
        common_1.Autowired(common_1.ApplicationStateService),
        __metadata("design:type", backend_application_state_1.BackendApplicationStateService)
    ], BackendApplication.prototype, "stateService", void 0);
    BackendApplication = BackendApplication_1 = __decorate([
        common_1.Component(common_1.Application)
    ], BackendApplication);
    return BackendApplication;
}(common_1.AbstractApplication));
exports.BackendApplication = BackendApplication;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/node/application/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/node/application/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./backend-application */ "./node_modules/@malagu/core/lib/node/application/backend-application.js"));
__export(__webpack_require__(/*! ./backend-application-state */ "./node_modules/@malagu/core/lib/node/application/backend-application-state.js"));


/***/ }),

/***/ "./node_modules/@malagu/core/lib/node/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@malagu/core/lib/node/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./application */ "./node_modules/@malagu/core/lib/node/application/index.js"));


/***/ }),

/***/ "./node_modules/@malagu/core/lib/node/module.js":
/*!******************************************************!*\
  !*** ./node_modules/@malagu/core/lib/node/module.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ../common */ "./node_modules/@malagu/core/lib/common/index.js"));
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
var common_1 = __webpack_require__(/*! ../common */ "./node_modules/@malagu/core/lib/common/index.js");
__export(__webpack_require__(/*! . */ "./node_modules/@malagu/core/lib/node/index.js"));
exports.CoreBackendModule = common_1.autoBind(function (bind) {
    bind(common_1.VALUE).toDynamicValue(function (ctx) {
        var namedMetadata = ctx.currentRequest.target.getNamedTag();
        var el = namedMetadata.value.toString();
        var configProvider = ctx.container.get(common_1.ConfigProvider);
        return configProvider.get(el);
    });
});


/***/ }),

/***/ "./node_modules/@malagu/fc-adapter/lib/node/module.js":
/*!************************************************************!*\
  !*** ./node_modules/@malagu/fc-adapter/lib/node/module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
exports.default = core_1.autoBind();


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/common/constants.js":
/*!**********************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/common/constants.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MVC_PATH = 'malagu.mvc.path';


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/common/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/common/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./constants */ "./node_modules/@malagu/mvc/lib/common/constants.js"));


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/annotation/body.js":
/*!**************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/annotation/body.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/mvc/lib/node/constants.js");
function Body(name) {
    return function (t, tk, i) {
        applyBodyDecorator(t, tk, i, name);
    };
}
exports.Body = Body;
;
function applyBodyDecorator(target, targetKey, parameterIndex, name) {
    var metadatas = Reflect.getOwnMetadata(constants_1.METADATA_KEY.controllerBody, target.constructor, targetKey) || [];
    metadatas.push({ name: name, parameterIndex: parameterIndex });
    Reflect.defineMetadata(constants_1.METADATA_KEY.controllerBody, metadatas, target.constructor, targetKey);
}
exports.applyBodyDecorator = applyBodyDecorator;


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/annotation/catch.js":
/*!***************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/annotation/catch.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/mvc/lib/node/constants.js");
function Catch(errorTypes) {
    return function (t, k, d) {
        applyCatchDecorator(t, k, d, Array.isArray(errorTypes) ? errorTypes : [errorTypes]);
    };
}
exports.Catch = Catch;
;
function applyCatchDecorator(target, key, descriptor, errorTypes) {
    var metadata = { errorTypes: errorTypes, target: target, key: key, descriptor: descriptor };
    var metadataList = [];
    if (!Reflect.hasOwnMetadata(constants_1.METADATA_KEY.controllerCatch, target.constructor)) {
        Reflect.defineMetadata(constants_1.METADATA_KEY.controllerCatch, metadataList, target.constructor);
    }
    else {
        metadataList = Reflect.getOwnMetadata(constants_1.METADATA_KEY.controllerCatch, target.constructor);
    }
    metadataList.push(metadata);
}
exports.applyCatchDecorator = applyCatchDecorator;


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/annotation/controller.js":
/*!********************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/annotation/controller.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/mvc/lib/node/constants.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var web_1 = __webpack_require__(/*! @malagu/web */ "./node_modules/@malagu/web/lib/common/index.js");
exports.CONTROLLER = Symbol('Controller');
exports.CONTROLLER_TAG = 'Controller';
function Controller(pathOrOption) {
    return function (target) {
        var option = parseControllerOption(target, pathOrOption);
        applyControllerDecorator(option, target);
    };
}
exports.Controller = Controller;
function parseControllerOption(target, pathOrOption) {
    var option = core_1.AnnotationUtil.getValueOrOption(pathOrOption, 'path');
    var parsed = core_1.parseComponentOption(target, option);
    if (option.proxy === undefined) {
        parsed.proxy = true;
    }
    parsed.sysTags.push(web_1.AOP_POINTCUT, exports.CONTROLLER_TAG);
    parsed.path = parsed.path || '';
    parsed.id.push(exports.CONTROLLER);
    return parsed;
}
exports.parseControllerOption = parseControllerOption;
function applyControllerDecorator(option, target) {
    var metadata = { path: option.path, target: target };
    Reflect.defineMetadata(constants_1.METADATA_KEY.controller, metadata, target);
    core_1.Component(option)(target);
    return metadata;
}
exports.applyControllerDecorator = applyControllerDecorator;


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/annotation/cookie.js":
/*!****************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/annotation/cookie.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/mvc/lib/node/constants.js");
exports.Cookie = function (name, value) {
    if (name && value) {
        return function (t, tk, d) {
            applyResponseCookieDecorator(t, tk, d, name, value);
        };
    }
    else {
        return function (t, tk, i) {
            applyRequestCookieDecorator(t, tk, i, name);
        };
    }
};
function applyRequestCookieDecorator(target, targetKey, parameterIndex, name) {
    var metadatas = Reflect.getOwnMetadata(constants_1.METADATA_KEY.controllerRequestCookie, target.constructor, targetKey) || [];
    metadatas.push({ name: name, parameterIndex: parameterIndex });
    Reflect.defineMetadata(constants_1.METADATA_KEY.controllerRequestCookie, metadatas, target.constructor, targetKey);
}
exports.applyRequestCookieDecorator = applyRequestCookieDecorator;
function applyResponseCookieDecorator(target, targetKey, descriptor, name, value) {
    var metadatas = Reflect.getOwnMetadata(constants_1.METADATA_KEY.controllerResponseCookie, target.constructor, targetKey) || [];
    metadatas.push({ name: name, value: value });
    Reflect.defineMetadata(constants_1.METADATA_KEY.controllerResponseCookie, metadatas, target.constructor, targetKey);
}
exports.applyResponseCookieDecorator = applyResponseCookieDecorator;


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/annotation/header.js":
/*!****************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/annotation/header.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/mvc/lib/node/constants.js");
exports.Header = function (name, value) {
    if (name && value) {
        return function (t, tk, d) {
            applyResponseHeaderDecorator(t, tk, d, name, value);
        };
    }
    else {
        return function (t, tk, i) {
            applyRequestHeaderDecorator(t, tk, i, name);
        };
    }
};
function applyRequestHeaderDecorator(target, targetKey, parameterIndex, name) {
    var metadatas = Reflect.getOwnMetadata(constants_1.METADATA_KEY.controllerRequestHeader, target.constructor, targetKey) || [];
    metadatas.push({ name: name, parameterIndex: parameterIndex });
    Reflect.defineMetadata(constants_1.METADATA_KEY.controllerRequestHeader, metadatas, target.constructor, targetKey);
}
exports.applyRequestHeaderDecorator = applyRequestHeaderDecorator;
function applyResponseHeaderDecorator(target, targetKey, descriptor, name, value) {
    var metadatas = Reflect.getOwnMetadata(constants_1.METADATA_KEY.controllerResponseHeader, target.constructor, targetKey) || [];
    metadatas.push({ name: name, value: value });
    Reflect.defineMetadata(constants_1.METADATA_KEY.controllerResponseHeader, metadatas, target.constructor, targetKey);
}
exports.applyResponseHeaderDecorator = applyResponseHeaderDecorator;


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/annotation/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/annotation/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./body */ "./node_modules/@malagu/mvc/lib/node/annotation/body.js"));
__export(__webpack_require__(/*! ./controller */ "./node_modules/@malagu/mvc/lib/node/annotation/controller.js"));
__export(__webpack_require__(/*! ./header */ "./node_modules/@malagu/mvc/lib/node/annotation/header.js"));
__export(__webpack_require__(/*! ./method */ "./node_modules/@malagu/mvc/lib/node/annotation/method.js"));
__export(__webpack_require__(/*! ./param */ "./node_modules/@malagu/mvc/lib/node/annotation/param.js"));
__export(__webpack_require__(/*! ./query */ "./node_modules/@malagu/mvc/lib/node/annotation/query.js"));
__export(__webpack_require__(/*! ./view */ "./node_modules/@malagu/mvc/lib/node/annotation/view.js"));
__export(__webpack_require__(/*! ./cookie */ "./node_modules/@malagu/mvc/lib/node/annotation/cookie.js"));
__export(__webpack_require__(/*! ./session */ "./node_modules/@malagu/mvc/lib/node/annotation/session.js"));
__export(__webpack_require__(/*! ./catch */ "./node_modules/@malagu/mvc/lib/node/annotation/catch.js"));


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/annotation/method.js":
/*!****************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/annotation/method.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/mvc/lib/node/constants.js");
var web_1 = __webpack_require__(/*! @malagu/web */ "./node_modules/@malagu/web/lib/common/index.js");
function Get(options) {
    return exports.Method(web_1.HttpMethod.GET, options);
}
exports.Get = Get;
function Post(options) {
    return exports.Method(web_1.HttpMethod.POST, options);
}
exports.Post = Post;
function Put(options) {
    return exports.Method(web_1.HttpMethod.PUT, options);
}
exports.Put = Put;
function Patch(options) {
    return exports.Method(web_1.HttpMethod.PATCH, options);
}
exports.Patch = Patch;
function Head(options) {
    return exports.Method(web_1.HttpMethod.HEAD, options);
}
exports.Head = Head;
function Delete(options) {
    return exports.Method(web_1.HttpMethod.DELETE, options);
}
exports.Delete = Delete;
function Options(options) {
    return exports.Method(web_1.HttpMethod.OPTIONS, options);
}
exports.Options = Options;
exports.Method = function (method, options) {
    if (options === void 0) { options = ''; }
    return function (target, key, descriptor) {
        var metadata = { options: options, method: method, target: target, key: key, descriptor: descriptor };
        var metadataList = [];
        if (!Reflect.hasOwnMetadata(constants_1.METADATA_KEY.controllerMethod, target.constructor)) {
            Reflect.defineMetadata(constants_1.METADATA_KEY.controllerMethod, metadataList, target.constructor);
        }
        else {
            metadataList = Reflect.getOwnMetadata(constants_1.METADATA_KEY.controllerMethod, target.constructor);
        }
        metadataList.push(metadata);
    };
};


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/annotation/param.js":
/*!***************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/annotation/param.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/mvc/lib/node/constants.js");
function Param(name) {
    return function (t, tk, i) {
        applyParamDecorator(t, tk, i, name);
    };
}
exports.Param = Param;
;
function applyParamDecorator(target, targetKey, parameterIndex, name) {
    var metadatas = Reflect.getOwnMetadata(constants_1.METADATA_KEY.controllerParam, target.constructor, targetKey) || [];
    metadatas.push({ name: name, parameterIndex: parameterIndex });
    Reflect.defineMetadata(constants_1.METADATA_KEY.controllerParam, metadatas, target.constructor, targetKey);
}
exports.applyParamDecorator = applyParamDecorator;


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/annotation/query.js":
/*!***************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/annotation/query.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/mvc/lib/node/constants.js");
function Query(name) {
    return function (t, tk, i) {
        applyQueryDecorator(t, tk, i, name);
    };
}
exports.Query = Query;
;
function applyQueryDecorator(target, targetKey, parameterIndex, name) {
    var metadatas = Reflect.getOwnMetadata(constants_1.METADATA_KEY.controllerQuery, target.constructor, targetKey) || [];
    metadatas.push({ name: name, parameterIndex: parameterIndex });
    Reflect.defineMetadata(constants_1.METADATA_KEY.controllerQuery, metadatas, target.constructor, targetKey);
}
exports.applyQueryDecorator = applyQueryDecorator;


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/annotation/session.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/annotation/session.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/mvc/lib/node/constants.js");
exports.Session = function (name, value) {
    if (name && value) {
        return function (t, tk, d) {
            applyResponseSessionDecorator(t, tk, d, name, value);
        };
    }
    else {
        return function (t, tk, i) {
            applyRequestSessionDecorator(t, tk, i, name);
        };
    }
};
function applyRequestSessionDecorator(target, targetKey, parameterIndex, name) {
    var metadatas = Reflect.getOwnMetadata(constants_1.METADATA_KEY.controllerRequestSession, target.constructor, targetKey) || [];
    metadatas.push({ name: name, parameterIndex: parameterIndex });
    Reflect.defineMetadata(constants_1.METADATA_KEY.controllerRequestSession, metadatas, target.constructor, targetKey);
}
exports.applyRequestSessionDecorator = applyRequestSessionDecorator;
function applyResponseSessionDecorator(target, targetKey, descriptor, name, value) {
    var metadatas = Reflect.getOwnMetadata(constants_1.METADATA_KEY.controllerResponseSession, target.constructor, targetKey) || [];
    metadatas.push({ name: name, value: value });
    Reflect.defineMetadata(constants_1.METADATA_KEY.controllerResponseSession, metadatas, target.constructor, targetKey);
}
exports.applyResponseSessionDecorator = applyResponseSessionDecorator;


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/annotation/view.js":
/*!**************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/annotation/view.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/mvc/lib/node/constants.js");
function View(viewName) {
    return function (t, k, d) {
        applyViewDecorator(t, k, d, viewName);
    };
}
exports.View = View;
;
function applyViewDecorator(target, targetKey, descriptor, viewName) {
    Reflect.defineMetadata(constants_1.METADATA_KEY.controllerView, { viewName: viewName }, target.constructor, targetKey);
}
exports.applyViewDecorator = applyViewDecorator;


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/constants.js":
/*!********************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/constants.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.METADATA_KEY = {
    controller: 'malagu:controller',
    controllerMethod: 'malagu:controller-method',
    controllerParam: 'malagu:controller-param',
    controllerRequestHeader: 'malagu:controller-request-header',
    controllerResponseHeader: 'malagu:controller-response-header',
    controllerRequestCookie: 'malagu:controller-request-cookie',
    controllerResponseCookie: 'malagu:controller-response-cookie',
    controllerRequestSession: 'malagu:controller-request-session',
    controllerResponseSession: 'malagu:controller-response-session',
    controllerQuery: 'malagu:controller-query',
    controllerBody: 'malagu:controller-body',
    controllerView: 'malagu:controller-view',
    controllerCatch: 'malagu:controller-catch'
};


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/handler/handler-adapter.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/handler/handler-adapter.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var web_1 = __webpack_require__(/*! @malagu/web */ "./node_modules/@malagu/web/lib/common/index.js");
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var resolver_1 = __webpack_require__(/*! ../resolver */ "./node_modules/@malagu/mvc/lib/node/resolver/index.js");
var handler_protocol_1 = __webpack_require__(/*! ./handler-protocol */ "./node_modules/@malagu/mvc/lib/node/handler/handler-protocol.js");
var common_1 = __webpack_require__(/*! ../../common */ "./node_modules/@malagu/mvc/lib/common/index.js");
var core_2 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var node_2 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var MvcHandlerAdapter = /** @class */ (function () {
    function MvcHandlerAdapter() {
        this.priority = handler_protocol_1.MVC_HANDLER_ADAPTER_PRIORITY;
    }
    MvcHandlerAdapter.prototype.resolveMethodArgs = function (metadata) {
        return __awaiter(this, void 0, void 0, function () {
            var args, _a, _b, resolver, e_1_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        args = [];
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 6, 7, 8]);
                        _a = __values(this.methodArgsResolverProvider.provide()), _b = _a.next();
                        _d.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 5];
                        resolver = _b.value;
                        return [4 /*yield*/, resolver.resolve(metadata, args)];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/, args];
                }
            });
        });
    };
    MvcHandlerAdapter.prototype.resolveResponse = function (metadata) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, resolver, e_2_1;
            var e_2, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 5, 6, 7]);
                        _a = __values(this.responseResolverProvider.provide()), _b = _a.next();
                        _d.label = 1;
                    case 1:
                        if (!!_b.done) return [3 /*break*/, 4];
                        resolver = _b.value;
                        return [4 /*yield*/, resolver.resolve(metadata)];
                    case 2:
                        _d.sent();
                        _d.label = 3;
                    case 3:
                        _b = _a.next();
                        return [3 /*break*/, 1];
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        e_2_1 = _d.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 7];
                    case 6:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    MvcHandlerAdapter.prototype.handle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ctx, path, routeMetadata;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ctx = node_1.Context.getCurrent();
                        path = ctx.request.path;
                        return [4 /*yield*/, this.routeMetadataMatcher.match()];
                    case 1:
                        routeMetadata = _a.sent();
                        if (!routeMetadata) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.doHandle(routeMetadata)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3: throw new node_2.NotFoundAndContinueError("No mapping found: " + ctx.request.method + " " + path);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MvcHandlerAdapter.prototype.doHandle = function (metadata, err) {
        return __awaiter(this, void 0, void 0, function () {
            var args, methodMetadata, target, model, error_1, errorMetadata;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.resolveMethodArgs(metadata)];
                    case 1:
                        args = _a.sent();
                        if (err) {
                            args = __spread([err], args);
                        }
                        methodMetadata = metadata.methodMetadata;
                        target = methodMetadata.target;
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, , 10]);
                        return [4 /*yield*/, this.pipeManager.apply({ target: target, method: methodMetadata.key }, args)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, target[methodMetadata.key].apply(target, __spread(args))];
                    case 4:
                        model = _a.sent();
                        return [3 /*break*/, 10];
                    case 5:
                        error_1 = _a.sent();
                        if (!!err) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.getErrorMetadata(error_1)];
                    case 6:
                        errorMetadata = _a.sent();
                        if (!errorMetadata.viewMetadata.viewName) {
                            errorMetadata.viewMetadata.viewName = metadata.viewMetadata.viewName;
                        }
                        return [4 /*yield*/, this.doHandle(errorMetadata, error_1)];
                    case 7:
                        _a.sent();
                        return [3 /*break*/, 9];
                    case 8: throw error_1;
                    case 9: return [3 /*break*/, 10];
                    case 10:
                        if (!model) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.viewResolver.resolve(metadata, model)];
                    case 11:
                        _a.sent();
                        _a.label = 12;
                    case 12: return [4 /*yield*/, this.resolveResponse(metadata)];
                    case 13:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MvcHandlerAdapter.prototype.getErrorMetadata = function (error) {
        return __awaiter(this, void 0, void 0, function () {
            var routeMetadata;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.routeMetadataMatcher.match(error)];
                    case 1:
                        routeMetadata = _a.sent();
                        if (routeMetadata) {
                            return [2 /*return*/, routeMetadata];
                        }
                        throw error;
                }
            });
        });
    };
    MvcHandlerAdapter.prototype.canHandle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = this.requestMatcher).match;
                        return [4 /*yield*/, this.pathResolver.resolve(this.mvcPath)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    __decorate([
        core_1.Autowired(resolver_1.MethodArgsResolverProvider),
        __metadata("design:type", resolver_1.MethodArgsResolverProvider)
    ], MvcHandlerAdapter.prototype, "methodArgsResolverProvider", void 0);
    __decorate([
        core_1.Autowired(resolver_1.ResponseResolverProvider),
        __metadata("design:type", resolver_1.ResponseResolverProvider)
    ], MvcHandlerAdapter.prototype, "responseResolverProvider", void 0);
    __decorate([
        core_1.Autowired(resolver_1.ViewResolver),
        __metadata("design:type", Object)
    ], MvcHandlerAdapter.prototype, "viewResolver", void 0);
    __decorate([
        core_1.Autowired(node_1.RequestMatcher),
        __metadata("design:type", Object)
    ], MvcHandlerAdapter.prototype, "requestMatcher", void 0);
    __decorate([
        core_1.Autowired(web_1.PathResolver),
        __metadata("design:type", Object)
    ], MvcHandlerAdapter.prototype, "pathResolver", void 0);
    __decorate([
        core_1.Autowired(core_2.PipeManager),
        __metadata("design:type", Object)
    ], MvcHandlerAdapter.prototype, "pipeManager", void 0);
    __decorate([
        core_1.Value(common_1.MVC_PATH),
        __metadata("design:type", String)
    ], MvcHandlerAdapter.prototype, "mvcPath", void 0);
    __decorate([
        core_1.Autowired(handler_protocol_1.RouteMetadataMatcher),
        __metadata("design:type", Object)
    ], MvcHandlerAdapter.prototype, "routeMetadataMatcher", void 0);
    MvcHandlerAdapter = __decorate([
        core_1.Component(node_1.HandlerAdapter)
    ], MvcHandlerAdapter);
    return MvcHandlerAdapter;
}());
exports.MvcHandlerAdapter = MvcHandlerAdapter;


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/handler/handler-protocol.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/handler/handler-protocol.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MVC_HANDLER_ADAPTER_PRIORITY = 2000;
exports.RouteProvider = Symbol('RouteProvider');
exports.RouteMetadataMatcher = Symbol('RouteMetadataMatcher');


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/handler/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/handler/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./handler-adapter */ "./node_modules/@malagu/mvc/lib/node/handler/handler-adapter.js"));
__export(__webpack_require__(/*! ./handler-protocol */ "./node_modules/@malagu/mvc/lib/node/handler/handler-protocol.js"));
__export(__webpack_require__(/*! ./route-builder */ "./node_modules/@malagu/mvc/lib/node/handler/route-builder.js"));
__export(__webpack_require__(/*! ./route-provider */ "./node_modules/@malagu/mvc/lib/node/handler/route-provider.js"));
__export(__webpack_require__(/*! ./route-metadata-matcher */ "./node_modules/@malagu/mvc/lib/node/handler/route-metadata-matcher.js"));


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/handler/route-builder.js":
/*!********************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/handler/route-builder.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var controller_1 = __webpack_require__(/*! ../annotation/controller */ "./node_modules/@malagu/mvc/lib/node/annotation/controller.js");
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/mvc/lib/node/constants.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var web_1 = __webpack_require__(/*! @malagu/web */ "./node_modules/@malagu/web/lib/common/index.js");
var proxy_util_1 = __webpack_require__(/*! @malagu/core/lib/common/utils/proxy-util */ "./node_modules/@malagu/core/lib/common/utils/proxy-util.js");
var RouteBuilder = /** @class */ (function () {
    function RouteBuilder() {
        this.controllers = [];
    }
    RouteBuilder.prototype.build = function () {
        return __awaiter(this, void 0, void 0, function () {
            var mapping, errorMapping, _a, _b, controller, targetConstructor, controllerMetadata, e_1_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        mapping = new Map();
                        errorMapping = new Map();
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 7, 8, 9]);
                        _a = __values(this.controllers), _b = _a.next();
                        _d.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 6];
                        controller = _b.value;
                        targetConstructor = proxy_util_1.getTargetClass(controller);
                        controllerMetadata = Reflect.getOwnMetadata(constants_1.METADATA_KEY.controller, targetConstructor);
                        return [4 /*yield*/, this.doBuildRouteMap(mapping, targetConstructor, controller, controllerMetadata)];
                    case 3:
                        _d.sent();
                        return [4 /*yield*/, this.doBuildErrorRouteMap(errorMapping, targetConstructor, controller, controllerMetadata)];
                    case 4:
                        _d.sent();
                        _d.label = 5;
                    case 5:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/, {
                            mapping: mapping,
                            errorMapping: errorMapping
                        }];
                }
            });
        });
    };
    RouteBuilder.prototype.doBuildRouteMap = function (mapping, targetConstructor, controller, controllerMetadata) {
        return __awaiter(this, void 0, void 0, function () {
            var methodMetadata, methodMetadata_1, methodMetadata_1_1, metadata, routeOptions, m, method, pathMap, path, _a, e_2_1;
            var e_2, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        methodMetadata = core_1.getOwnMetadata(constants_1.METADATA_KEY.controllerMethod, targetConstructor);
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 9, 10, 11]);
                        methodMetadata_1 = __values(methodMetadata), methodMetadata_1_1 = methodMetadata_1.next();
                        _c.label = 2;
                    case 2:
                        if (!!methodMetadata_1_1.done) return [3 /*break*/, 8];
                        metadata = methodMetadata_1_1.value;
                        routeOptions = (typeof metadata.options === 'string' || metadata.options instanceof RegExp) ? { path: metadata.options } : metadata.options;
                        m = __assign({}, metadata);
                        method = m.method;
                        m.target = controller;
                        pathMap = mapping.get(method);
                        if (!pathMap) {
                            pathMap = new Map();
                            mapping.set(method, pathMap);
                        }
                        path = routeOptions.path;
                        if (!(typeof path === 'string')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.pathResolver.resolve(controllerMetadata.path, path)];
                    case 3:
                        path = _c.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        if (!(path instanceof RegExp)) return [3 /*break*/, 6];
                        if (!controllerMetadata.path) return [3 /*break*/, 6];
                        _a = RegExp.bind;
                        return [4 /*yield*/, this.pathResolver.resolve(controllerMetadata.path, path.source)];
                    case 5:
                        path = new (_a.apply(RegExp, [void 0, _c.sent()]))();
                        _c.label = 6;
                    case 6:
                        pathMap.set(path, __assign({ controllerMetadata: controllerMetadata, methodMetadata: m }, this.doRouteMetadata(targetConstructor, m.key.toString())));
                        _c.label = 7;
                    case 7:
                        methodMetadata_1_1 = methodMetadata_1.next();
                        return [3 /*break*/, 2];
                    case 8: return [3 /*break*/, 11];
                    case 9:
                        e_2_1 = _c.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 11];
                    case 10:
                        try {
                            if (methodMetadata_1_1 && !methodMetadata_1_1.done && (_b = methodMetadata_1.return)) _b.call(methodMetadata_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    RouteBuilder.prototype.doBuildErrorRouteMap = function (errorMapping, targetConstructor, controller, controllerMetadata) {
        return __awaiter(this, void 0, void 0, function () {
            var methodMetadata, methodMetadata_2, methodMetadata_2_1, metadata, m, _a, _b, errorType;
            var e_3, _c, e_4, _d;
            return __generator(this, function (_e) {
                methodMetadata = core_1.getOwnMetadata(constants_1.METADATA_KEY.controllerCatch, targetConstructor);
                try {
                    for (methodMetadata_2 = __values(methodMetadata), methodMetadata_2_1 = methodMetadata_2.next(); !methodMetadata_2_1.done; methodMetadata_2_1 = methodMetadata_2.next()) {
                        metadata = methodMetadata_2_1.value;
                        m = __assign({}, metadata);
                        m.target = controller;
                        try {
                            for (_a = (e_4 = void 0, __values(metadata.errorTypes)), _b = _a.next(); !_b.done; _b = _a.next()) {
                                errorType = _b.value;
                                errorMapping.set(errorType, __assign({ controllerMetadata: controllerMetadata, methodMetadata: m }, this.doRouteMetadata(targetConstructor, m.key.toString())));
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (methodMetadata_2_1 && !methodMetadata_2_1.done && (_c = methodMetadata_2.return)) _c.call(methodMetadata_2);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
                return [2 /*return*/];
            });
        });
    };
    RouteBuilder.prototype.doRouteMetadata = function (targetConstructor, method) {
        return {
            paramMetadata: core_1.getOwnMetadata(constants_1.METADATA_KEY.controllerParam, targetConstructor, method),
            bodyMetadata: core_1.getOwnMetadata(constants_1.METADATA_KEY.controllerBody, targetConstructor, method),
            queryMetadata: core_1.getOwnMetadata(constants_1.METADATA_KEY.controllerQuery, targetConstructor, method),
            requestHeaderMetadata: core_1.getOwnMetadata(constants_1.METADATA_KEY.controllerRequestHeader, targetConstructor, method),
            responseHeaderMetadata: core_1.getOwnMetadata(constants_1.METADATA_KEY.controllerResponseHeader, targetConstructor, method),
            requestCookieMetadata: core_1.getOwnMetadata(constants_1.METADATA_KEY.controllerRequestCookie, targetConstructor, method),
            responseCookieMetadata: core_1.getOwnMetadata(constants_1.METADATA_KEY.controllerResponseCookie, targetConstructor, method),
            requestSessionMetadata: core_1.getOwnMetadata(constants_1.METADATA_KEY.controllerRequestSession, targetConstructor, method),
            responseSessionMetadata: core_1.getOwnMetadata(constants_1.METADATA_KEY.controllerResponseSession, targetConstructor, method),
            viewMetadata: core_1.getOwnMetadata(constants_1.METADATA_KEY.controllerView, targetConstructor, method) || {}
        };
    };
    __decorate([
        core_1.Autowired(controller_1.CONTROLLER), core_1.Optional(),
        __metadata("design:type", Array)
    ], RouteBuilder.prototype, "controllers", void 0);
    __decorate([
        core_1.Autowired(web_1.PathResolver),
        __metadata("design:type", Object)
    ], RouteBuilder.prototype, "pathResolver", void 0);
    RouteBuilder = __decorate([
        core_1.Component()
    ], RouteBuilder);
    return RouteBuilder;
}());
exports.RouteBuilder = RouteBuilder;


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/handler/route-metadata-matcher.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/handler/route-metadata-matcher.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var handler_protocol_1 = __webpack_require__(/*! ./handler-protocol */ "./node_modules/@malagu/mvc/lib/node/handler/handler-protocol.js");
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
exports.PATH_PARMAS_ATTR = 'pathParams';
var RouteMetadataMatcherImpl = /** @class */ (function () {
    function RouteMetadataMatcherImpl() {
    }
    RouteMetadataMatcherImpl.prototype.match = function (error) {
        return __awaiter(this, void 0, void 0, function () {
            var route, metadata, _a, _b, entry, request, pathMap, pathMap_1, pathMap_1_1, entry, _c, p, metadata, pathParams, e_1_1;
            var e_2, _d, e_1, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4 /*yield*/, this.routeProvider.provide()];
                    case 1:
                        route = _f.sent();
                        if (!error) return [3 /*break*/, 2];
                        metadata = route.errorMapping.get(error.constructor);
                        if (metadata) {
                            return [2 /*return*/, metadata];
                        }
                        else {
                            try {
                                for (_a = __values(route.errorMapping), _b = _a.next(); !_b.done; _b = _a.next()) {
                                    entry = _b.value;
                                    if (error instanceof entry[0]) {
                                        return [2 /*return*/, entry[1]];
                                    }
                                }
                            }
                            catch (e_2_1) { e_2 = { error: e_2_1 }; }
                            finally {
                                try {
                                    if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                                }
                                finally { if (e_2) throw e_2.error; }
                            }
                        }
                        return [3 /*break*/, 10];
                    case 2:
                        request = node_1.Context.getRequest();
                        pathMap = route.mapping.get(request.method.toUpperCase());
                        if (!pathMap) return [3 /*break*/, 10];
                        _f.label = 3;
                    case 3:
                        _f.trys.push([3, 8, 9, 10]);
                        pathMap_1 = __values(pathMap), pathMap_1_1 = pathMap_1.next();
                        _f.label = 4;
                    case 4:
                        if (!!pathMap_1_1.done) return [3 /*break*/, 7];
                        entry = pathMap_1_1.value;
                        _c = __read(entry, 2), p = _c[0], metadata = _c[1];
                        return [4 /*yield*/, this.requestMatcher.match(p)];
                    case 5:
                        pathParams = _f.sent();
                        if (pathParams) {
                            node_1.Context.setAttr(exports.PATH_PARMAS_ATTR, pathParams);
                            return [2 /*return*/, metadata];
                        }
                        _f.label = 6;
                    case 6:
                        pathMap_1_1 = pathMap_1.next();
                        return [3 /*break*/, 4];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_1_1 = _f.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 10];
                    case 9:
                        try {
                            if (pathMap_1_1 && !pathMap_1_1.done && (_e = pathMap_1.return)) _e.call(pathMap_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        core_1.Autowired(handler_protocol_1.RouteProvider),
        __metadata("design:type", Object)
    ], RouteMetadataMatcherImpl.prototype, "routeProvider", void 0);
    __decorate([
        core_1.Autowired(node_1.RequestMatcher),
        __metadata("design:type", Object)
    ], RouteMetadataMatcherImpl.prototype, "requestMatcher", void 0);
    RouteMetadataMatcherImpl = __decorate([
        core_1.Component(handler_protocol_1.RouteMetadataMatcher)
    ], RouteMetadataMatcherImpl);
    return RouteMetadataMatcherImpl;
}());
exports.RouteMetadataMatcherImpl = RouteMetadataMatcherImpl;


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/handler/route-provider.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/handler/route-provider.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var handler_protocol_1 = __webpack_require__(/*! ./handler-protocol */ "./node_modules/@malagu/mvc/lib/node/handler/handler-protocol.js");
var route_builder_1 = __webpack_require__(/*! ./route-builder */ "./node_modules/@malagu/mvc/lib/node/handler/route-builder.js");
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var RouteProviderImpl = /** @class */ (function () {
    function RouteProviderImpl() {
        this.routeDefered = new core_1.Deferred();
    }
    RouteProviderImpl.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.routeBuilder.build()];
                    case 1:
                        _a.route = _b.sent();
                        this.routeDefered.resolve(this.route);
                        return [2 /*return*/];
                }
            });
        });
    };
    RouteProviderImpl.prototype.provide = function () {
        return this.routeDefered.promise;
    };
    __decorate([
        core_1.Autowired(route_builder_1.RouteBuilder),
        __metadata("design:type", route_builder_1.RouteBuilder)
    ], RouteProviderImpl.prototype, "routeBuilder", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], RouteProviderImpl.prototype, "init", null);
    RouteProviderImpl = __decorate([
        core_1.Component(handler_protocol_1.RouteProvider)
    ], RouteProviderImpl);
    return RouteProviderImpl;
}());
exports.RouteProviderImpl = RouteProviderImpl;


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./annotation */ "./node_modules/@malagu/mvc/lib/node/annotation/index.js"));
__export(__webpack_require__(/*! ./handler */ "./node_modules/@malagu/mvc/lib/node/handler/index.js"));
__export(__webpack_require__(/*! ./resolver */ "./node_modules/@malagu/mvc/lib/node/resolver/index.js"));
__export(__webpack_require__(/*! ./view */ "./node_modules/@malagu/mvc/lib/node/view/index.js"));


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/module.js":
/*!*****************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/module.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
__webpack_require__(/*! . */ "./node_modules/@malagu/mvc/lib/node/index.js");
exports.default = core_1.autoBind();


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/resolver/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/resolver/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./response-resolver */ "./node_modules/@malagu/mvc/lib/node/resolver/response-resolver.js"));
__export(__webpack_require__(/*! ./method-args-resolver */ "./node_modules/@malagu/mvc/lib/node/resolver/method-args-resolver.js"));
__export(__webpack_require__(/*! ./method-args-resolver-provider */ "./node_modules/@malagu/mvc/lib/node/resolver/method-args-resolver-provider.js"));
__export(__webpack_require__(/*! ./resolver-protocol */ "./node_modules/@malagu/mvc/lib/node/resolver/resolver-protocol.js"));
__export(__webpack_require__(/*! ./response-resolver-provider */ "./node_modules/@malagu/mvc/lib/node/resolver/response-resolver-provider.js"));
__export(__webpack_require__(/*! ./view-resolver */ "./node_modules/@malagu/mvc/lib/node/resolver/view-resolver.js"));
__export(__webpack_require__(/*! ./view-resolver-provider */ "./node_modules/@malagu/mvc/lib/node/resolver/view-resolver-provider.js"));


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/resolver/method-args-resolver-provider.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/resolver/method-args-resolver-provider.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var resolver_protocol_1 = __webpack_require__(/*! ./resolver-protocol */ "./node_modules/@malagu/mvc/lib/node/resolver/resolver-protocol.js");
var MethodArgsResolverProvider = /** @class */ (function () {
    function MethodArgsResolverProvider(methodArgsResolvers) {
        this.methodArgsResolvers = methodArgsResolvers;
    }
    MethodArgsResolverProvider.prototype.provide = function () {
        if (!this.prioritized) {
            this.prioritized = core_1.Prioritizeable.prioritizeAllSync(this.methodArgsResolvers).map(function (c) { return c.value; });
        }
        return this.prioritized;
    };
    MethodArgsResolverProvider = __decorate([
        core_1.Component(),
        __param(0, core_1.Autowired(resolver_protocol_1.MethodArgsResolver)),
        __metadata("design:paramtypes", [Array])
    ], MethodArgsResolverProvider);
    return MethodArgsResolverProvider;
}());
exports.MethodArgsResolverProvider = MethodArgsResolverProvider;


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/resolver/method-args-resolver.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/resolver/method-args-resolver.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var resolver_protocol_1 = __webpack_require__(/*! ./resolver-protocol */ "./node_modules/@malagu/mvc/lib/node/resolver/resolver-protocol.js");
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var handler_1 = __webpack_require__(/*! ../handler */ "./node_modules/@malagu/mvc/lib/node/handler/index.js");
var BodyMethodArgsResolver = /** @class */ (function () {
    function BodyMethodArgsResolver() {
        this.priority = 100;
    }
    BodyMethodArgsResolver.prototype.resolve = function (metadata, args) {
        return __awaiter(this, void 0, void 0, function () {
            var body, bodyMetadatas, bodyMetadatas_1, bodyMetadatas_1_1, m;
            var e_1, _a;
            return __generator(this, function (_b) {
                body = node_1.Context.getCurrent().request.body;
                bodyMetadatas = metadata.bodyMetadata;
                if (bodyMetadatas && body !== undefined) {
                    try {
                        for (bodyMetadatas_1 = __values(bodyMetadatas), bodyMetadatas_1_1 = bodyMetadatas_1.next(); !bodyMetadatas_1_1.done; bodyMetadatas_1_1 = bodyMetadatas_1.next()) {
                            m = bodyMetadatas_1_1.value;
                            args[m.parameterIndex] = m.name ? body[m.name] : body;
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (bodyMetadatas_1_1 && !bodyMetadatas_1_1.done && (_a = bodyMetadatas_1.return)) _a.call(bodyMetadatas_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    BodyMethodArgsResolver = __decorate([
        core_1.Component(resolver_protocol_1.MethodArgsResolver)
    ], BodyMethodArgsResolver);
    return BodyMethodArgsResolver;
}());
exports.BodyMethodArgsResolver = BodyMethodArgsResolver;
var HeaderMethodArgsResolver = /** @class */ (function () {
    function HeaderMethodArgsResolver() {
        this.priority = 200;
    }
    HeaderMethodArgsResolver.prototype.resolve = function (metadata, args) {
        return __awaiter(this, void 0, void 0, function () {
            var request, headerMetadatas, headerMetadatas_1, headerMetadatas_1_1, m;
            var e_2, _a;
            return __generator(this, function (_b) {
                request = node_1.Context.getCurrent().request;
                headerMetadatas = metadata.requestHeaderMetadata;
                if (headerMetadatas) {
                    try {
                        for (headerMetadatas_1 = __values(headerMetadatas), headerMetadatas_1_1 = headerMetadatas_1.next(); !headerMetadatas_1_1.done; headerMetadatas_1_1 = headerMetadatas_1.next()) {
                            m = headerMetadatas_1_1.value;
                            args[m.parameterIndex] = m.name ? request.get(m.name) : request.headers;
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (headerMetadatas_1_1 && !headerMetadatas_1_1.done && (_a = headerMetadatas_1.return)) _a.call(headerMetadatas_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    HeaderMethodArgsResolver = __decorate([
        core_1.Component(resolver_protocol_1.MethodArgsResolver)
    ], HeaderMethodArgsResolver);
    return HeaderMethodArgsResolver;
}());
exports.HeaderMethodArgsResolver = HeaderMethodArgsResolver;
var ParamMethodArgsResolver = /** @class */ (function () {
    function ParamMethodArgsResolver() {
        this.priority = 300;
    }
    ParamMethodArgsResolver.prototype.resolve = function (metadata, args) {
        return __awaiter(this, void 0, void 0, function () {
            var params, paramMetadatas, paramMetadatas_1, paramMetadatas_1_1, m;
            var e_3, _a;
            return __generator(this, function (_b) {
                params = node_1.Context.getAttr(handler_1.PATH_PARMAS_ATTR);
                paramMetadatas = metadata.paramMetadata;
                if (paramMetadatas && params) {
                    try {
                        for (paramMetadatas_1 = __values(paramMetadatas), paramMetadatas_1_1 = paramMetadatas_1.next(); !paramMetadatas_1_1.done; paramMetadatas_1_1 = paramMetadatas_1.next()) {
                            m = paramMetadatas_1_1.value;
                            args[m.parameterIndex] = m.name ? params[m.name] : params;
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (paramMetadatas_1_1 && !paramMetadatas_1_1.done && (_a = paramMetadatas_1.return)) _a.call(paramMetadatas_1);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    ParamMethodArgsResolver = __decorate([
        core_1.Component(resolver_protocol_1.MethodArgsResolver)
    ], ParamMethodArgsResolver);
    return ParamMethodArgsResolver;
}());
exports.ParamMethodArgsResolver = ParamMethodArgsResolver;
var QueryMethodArgsResolver = /** @class */ (function () {
    function QueryMethodArgsResolver() {
        this.priority = 400;
    }
    QueryMethodArgsResolver.prototype.resolve = function (metadata, args) {
        return __awaiter(this, void 0, void 0, function () {
            var query, queryMetadatas, queryMetadatas_1, queryMetadatas_1_1, m;
            var e_4, _a;
            return __generator(this, function (_b) {
                query = node_1.Context.getCurrent().request.query;
                queryMetadatas = metadata.queryMetadata;
                if (queryMetadatas && query !== undefined) {
                    try {
                        for (queryMetadatas_1 = __values(queryMetadatas), queryMetadatas_1_1 = queryMetadatas_1.next(); !queryMetadatas_1_1.done; queryMetadatas_1_1 = queryMetadatas_1.next()) {
                            m = queryMetadatas_1_1.value;
                            args[m.parameterIndex] = m.name ? query[m.name] : query;
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (queryMetadatas_1_1 && !queryMetadatas_1_1.done && (_a = queryMetadatas_1.return)) _a.call(queryMetadatas_1);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    QueryMethodArgsResolver = __decorate([
        core_1.Component(resolver_protocol_1.MethodArgsResolver)
    ], QueryMethodArgsResolver);
    return QueryMethodArgsResolver;
}());
exports.QueryMethodArgsResolver = QueryMethodArgsResolver;
var CookieMethodArgsResolver = /** @class */ (function () {
    function CookieMethodArgsResolver() {
        this.priority = 500;
    }
    CookieMethodArgsResolver.prototype.resolve = function (metadata, args) {
        return __awaiter(this, void 0, void 0, function () {
            var cookies, cookieMetadatas, cookieMetadatas_1, cookieMetadatas_1_1, m;
            var e_5, _a;
            return __generator(this, function (_b) {
                cookies = node_1.Context.getCookies();
                cookieMetadatas = metadata.requestCookieMetadata;
                if (cookieMetadatas && cookies !== undefined) {
                    try {
                        for (cookieMetadatas_1 = __values(cookieMetadatas), cookieMetadatas_1_1 = cookieMetadatas_1.next(); !cookieMetadatas_1_1.done; cookieMetadatas_1_1 = cookieMetadatas_1.next()) {
                            m = cookieMetadatas_1_1.value;
                            args[m.parameterIndex] = m.name ? cookies.get(m.name) : cookies;
                        }
                    }
                    catch (e_5_1) { e_5 = { error: e_5_1 }; }
                    finally {
                        try {
                            if (cookieMetadatas_1_1 && !cookieMetadatas_1_1.done && (_a = cookieMetadatas_1.return)) _a.call(cookieMetadatas_1);
                        }
                        finally { if (e_5) throw e_5.error; }
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    CookieMethodArgsResolver = __decorate([
        core_1.Component(resolver_protocol_1.MethodArgsResolver)
    ], CookieMethodArgsResolver);
    return CookieMethodArgsResolver;
}());
exports.CookieMethodArgsResolver = CookieMethodArgsResolver;
var SessionMethodArgsResolver = /** @class */ (function () {
    function SessionMethodArgsResolver() {
        this.priority = 600;
    }
    SessionMethodArgsResolver.prototype.resolve = function (metadata, args) {
        return __awaiter(this, void 0, void 0, function () {
            var session, sessionMetadatas, sessionMetadatas_1, sessionMetadatas_1_1, m;
            var e_6, _a;
            return __generator(this, function (_b) {
                session = node_1.Context.getSession();
                sessionMetadatas = metadata.requestSessionMetadata;
                if (sessionMetadatas && session !== undefined) {
                    try {
                        for (sessionMetadatas_1 = __values(sessionMetadatas), sessionMetadatas_1_1 = sessionMetadatas_1.next(); !sessionMetadatas_1_1.done; sessionMetadatas_1_1 = sessionMetadatas_1.next()) {
                            m = sessionMetadatas_1_1.value;
                            args[m.parameterIndex] = m.name ? session[m.name] : session;
                        }
                    }
                    catch (e_6_1) { e_6 = { error: e_6_1 }; }
                    finally {
                        try {
                            if (sessionMetadatas_1_1 && !sessionMetadatas_1_1.done && (_a = sessionMetadatas_1.return)) _a.call(sessionMetadatas_1);
                        }
                        finally { if (e_6) throw e_6.error; }
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    SessionMethodArgsResolver = __decorate([
        core_1.Component(resolver_protocol_1.MethodArgsResolver)
    ], SessionMethodArgsResolver);
    return SessionMethodArgsResolver;
}());
exports.SessionMethodArgsResolver = SessionMethodArgsResolver;


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/resolver/resolver-protocol.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/resolver/resolver-protocol.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MethodArgsResolver = Symbol('MethodArgsResolver');
exports.ResponseResolver = Symbol('ResponseResolver');
exports.ViewResolver = Symbol('ViewResolver');


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/resolver/response-resolver-provider.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/resolver/response-resolver-provider.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var resolver_protocol_1 = __webpack_require__(/*! ./resolver-protocol */ "./node_modules/@malagu/mvc/lib/node/resolver/resolver-protocol.js");
var ResponseResolverProvider = /** @class */ (function () {
    function ResponseResolverProvider(responseResolvers) {
        this.responseResolvers = responseResolvers;
    }
    ResponseResolverProvider.prototype.provide = function () {
        if (!this.prioritized) {
            this.prioritized = core_1.Prioritizeable.prioritizeAllSync(this.responseResolvers).map(function (c) { return c.value; });
        }
        return this.prioritized;
    };
    ResponseResolverProvider = __decorate([
        core_1.Component(),
        __param(0, core_1.Autowired(resolver_protocol_1.ResponseResolver)),
        __metadata("design:paramtypes", [Array])
    ], ResponseResolverProvider);
    return ResponseResolverProvider;
}());
exports.ResponseResolverProvider = ResponseResolverProvider;


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/resolver/response-resolver.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/resolver/response-resolver.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var resolver_protocol_1 = __webpack_require__(/*! ./resolver-protocol */ "./node_modules/@malagu/mvc/lib/node/resolver/resolver-protocol.js");
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var HeaderResponseResolver = /** @class */ (function () {
    function HeaderResponseResolver() {
        this.priority = 500;
    }
    HeaderResponseResolver.prototype.resolve = function (metadata) {
        return __awaiter(this, void 0, void 0, function () {
            var response, headerMetadatas, headerMetadatas_1, headerMetadatas_1_1, m;
            var e_1, _a;
            return __generator(this, function (_b) {
                response = node_1.Context.getCurrent().response;
                headerMetadatas = metadata.responseHeaderMetadata;
                if (headerMetadatas) {
                    try {
                        for (headerMetadatas_1 = __values(headerMetadatas), headerMetadatas_1_1 = headerMetadatas_1.next(); !headerMetadatas_1_1.done; headerMetadatas_1_1 = headerMetadatas_1.next()) {
                            m = headerMetadatas_1_1.value;
                            response.setHeader(m.name, m.value);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (headerMetadatas_1_1 && !headerMetadatas_1_1.done && (_a = headerMetadatas_1.return)) _a.call(headerMetadatas_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    HeaderResponseResolver = __decorate([
        core_1.Component(resolver_protocol_1.ResponseResolver)
    ], HeaderResponseResolver);
    return HeaderResponseResolver;
}());
exports.HeaderResponseResolver = HeaderResponseResolver;
var CookieResponseResolver = /** @class */ (function () {
    function CookieResponseResolver() {
        this.priority = 500;
    }
    CookieResponseResolver.prototype.resolve = function (metadata) {
        return __awaiter(this, void 0, void 0, function () {
            var cookies, cookieMetadatas, cookieMetadatas_1, cookieMetadatas_1_1, m;
            var e_2, _a;
            return __generator(this, function (_b) {
                cookies = node_1.Context.getCookies();
                cookieMetadatas = metadata.responseCookieMetadata;
                if (cookieMetadatas && cookies) {
                    try {
                        for (cookieMetadatas_1 = __values(cookieMetadatas), cookieMetadatas_1_1 = cookieMetadatas_1.next(); !cookieMetadatas_1_1.done; cookieMetadatas_1_1 = cookieMetadatas_1.next()) {
                            m = cookieMetadatas_1_1.value;
                            cookies.set(m.name, m.value);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (cookieMetadatas_1_1 && !cookieMetadatas_1_1.done && (_a = cookieMetadatas_1.return)) _a.call(cookieMetadatas_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    CookieResponseResolver = __decorate([
        core_1.Component(resolver_protocol_1.ResponseResolver)
    ], CookieResponseResolver);
    return CookieResponseResolver;
}());
exports.CookieResponseResolver = CookieResponseResolver;
var SessionResponseResolver = /** @class */ (function () {
    function SessionResponseResolver() {
        this.priority = 500;
    }
    SessionResponseResolver.prototype.resolve = function (metadata) {
        return __awaiter(this, void 0, void 0, function () {
            var session, sessionMetadatas, sessionMetadatas_1, sessionMetadatas_1_1, m;
            var e_3, _a;
            return __generator(this, function (_b) {
                session = node_1.Context.getSession();
                sessionMetadatas = metadata.responseSessionMetadata;
                if (sessionMetadatas && session) {
                    try {
                        for (sessionMetadatas_1 = __values(sessionMetadatas), sessionMetadatas_1_1 = sessionMetadatas_1.next(); !sessionMetadatas_1_1.done; sessionMetadatas_1_1 = sessionMetadatas_1.next()) {
                            m = sessionMetadatas_1_1.value;
                            session[m.name] = m.value;
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (sessionMetadatas_1_1 && !sessionMetadatas_1_1.done && (_a = sessionMetadatas_1.return)) _a.call(sessionMetadatas_1);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    SessionResponseResolver = __decorate([
        core_1.Component(resolver_protocol_1.ResponseResolver)
    ], SessionResponseResolver);
    return SessionResponseResolver;
}());
exports.SessionResponseResolver = SessionResponseResolver;


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/resolver/view-resolver-provider.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/resolver/view-resolver-provider.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var resolver_protocol_1 = __webpack_require__(/*! ./resolver-protocol */ "./node_modules/@malagu/mvc/lib/node/resolver/resolver-protocol.js");
var ViewResolverProvider = /** @class */ (function () {
    function ViewResolverProvider(viewResolvers) {
        this.viewResolvers = viewResolvers;
    }
    ViewResolverProvider.prototype.provide = function () {
        if (!this.prioritized) {
            this.prioritized = core_1.Prioritizeable.prioritizeAllSync(this.viewResolvers).map(function (c) { return c.value; });
        }
        return this.prioritized;
    };
    ViewResolverProvider = __decorate([
        core_1.Component(),
        __param(0, core_1.Autowired(resolver_protocol_1.ViewResolver)),
        __metadata("design:paramtypes", [Array])
    ], ViewResolverProvider);
    return ViewResolverProvider;
}());
exports.ViewResolverProvider = ViewResolverProvider;


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/resolver/view-resolver.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/resolver/view-resolver.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var resolver_protocol_1 = __webpack_require__(/*! ./resolver-protocol */ "./node_modules/@malagu/mvc/lib/node/resolver/resolver-protocol.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var view_provider_1 = __webpack_require__(/*! ../view/view-provider */ "./node_modules/@malagu/mvc/lib/node/view/view-provider.js");
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var web_1 = __webpack_require__(/*! @malagu/web */ "./node_modules/@malagu/web/lib/common/index.js");
var ViewResolverImpl = /** @class */ (function () {
    function ViewResolverImpl() {
    }
    ViewResolverImpl.prototype.resolve = function (metadata, model) {
        return __awaiter(this, void 0, void 0, function () {
            var viewMetadata, viewName, _a, _b, view, e_1_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        viewMetadata = metadata.viewMetadata;
                        viewName = viewMetadata.viewName || this.defaultViewName;
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 7, 8, 9]);
                        _a = __values(this.viewProvider.provide()), _b = _a.next();
                        _d.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 6];
                        view = _b.value;
                        return [4 /*yield*/, view.support(viewName)];
                    case 3:
                        if (!_d.sent()) return [3 /*break*/, 5];
                        node_1.Context.getResponse().setHeader(web_1.HttpHeaders.CONTENT_TYPE, view.contentType);
                        return [4 /*yield*/, view.render(model, viewName)];
                    case 4:
                        _d.sent();
                        return [2 /*return*/];
                    case 5:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 9: throw new Error('Not found a suitable view.');
                }
            });
        });
    };
    __decorate([
        core_1.Value('malagu.mvc.defaultViewName'),
        __metadata("design:type", String)
    ], ViewResolverImpl.prototype, "defaultViewName", void 0);
    __decorate([
        core_1.Autowired(view_provider_1.ViewProvider),
        __metadata("design:type", view_provider_1.ViewProvider)
    ], ViewResolverImpl.prototype, "viewProvider", void 0);
    ViewResolverImpl = __decorate([
        core_1.Component(resolver_protocol_1.ViewResolver)
    ], ViewResolverImpl);
    return ViewResolverImpl;
}());
exports.ViewResolverImpl = ViewResolverImpl;


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/view/html-view.js":
/*!*************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/view/html-view.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var view_protocol_1 = __webpack_require__(/*! ./view-protocol */ "./node_modules/@malagu/mvc/lib/node/view/view-protocol.js");
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var mustache_1 = __webpack_require__(/*! mustache */ "mustache");
var path_1 = __webpack_require__(/*! path */ "path");
var fs_extra_1 = __webpack_require__(/*! fs-extra */ "fs-extra");
var HtmlView = /** @class */ (function () {
    function HtmlView() {
        this.contentType = 'text/html';
        this.priority = 500;
    }
    HtmlView.prototype.render = function (model, viewName) {
        return __awaiter(this, void 0, void 0, function () {
            var response, _a, baseViewDir, cache, template;
            return __generator(this, function (_b) {
                response = node_1.Context.getCurrent().response;
                _a = this.options, baseViewDir = _a.baseViewDir, cache = _a.cache;
                template = fs_extra_1.readFileSync(path_1.join(__dirname, baseViewDir, viewName), { encoding: 'utf8' });
                if (cache) {
                    mustache_1.parse(template);
                }
                response.body = mustache_1.render(template, model);
                return [2 /*return*/];
            });
        });
    };
    HtmlView.prototype.support = function (viewName) {
        return Promise.resolve(viewName.endsWith('.mustache'));
    };
    __decorate([
        core_1.Value('malagu.mustache'),
        __metadata("design:type", Object)
    ], HtmlView.prototype, "options", void 0);
    HtmlView = __decorate([
        core_1.Component(view_protocol_1.View)
    ], HtmlView);
    return HtmlView;
}());
exports.HtmlView = HtmlView;


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/view/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/view/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./json-view */ "./node_modules/@malagu/mvc/lib/node/view/json-view.js"));
__export(__webpack_require__(/*! ./text-view */ "./node_modules/@malagu/mvc/lib/node/view/text-view.js"));
__export(__webpack_require__(/*! ./view-provider */ "./node_modules/@malagu/mvc/lib/node/view/view-provider.js"));
__export(__webpack_require__(/*! ./html-view */ "./node_modules/@malagu/mvc/lib/node/view/html-view.js"));


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/view/json-view.js":
/*!*************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/view/json-view.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var view_protocol_1 = __webpack_require__(/*! ./view-protocol */ "./node_modules/@malagu/mvc/lib/node/view/view-protocol.js");
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var JsonView = /** @class */ (function () {
    function JsonView() {
        this.contentType = 'application/json';
        this.priority = 500;
    }
    JsonView_1 = JsonView;
    JsonView.prototype.render = function (model, viewName) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                response = node_1.Context.getCurrent().response;
                response.body = JSON.stringify(model);
                return [2 /*return*/];
            });
        });
    };
    JsonView.prototype.support = function (viewName) {
        return Promise.resolve(viewName === JsonView_1.VIEW_NAME);
    };
    var JsonView_1;
    JsonView.VIEW_NAME = 'json';
    JsonView = JsonView_1 = __decorate([
        core_1.Component(view_protocol_1.View)
    ], JsonView);
    return JsonView;
}());
exports.JsonView = JsonView;


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/view/text-view.js":
/*!*************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/view/text-view.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var view_protocol_1 = __webpack_require__(/*! ./view-protocol */ "./node_modules/@malagu/mvc/lib/node/view/view-protocol.js");
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var TextView = /** @class */ (function () {
    function TextView() {
        this.contentType = 'text/plain';
        this.priority = 600;
    }
    TextView_1 = TextView;
    TextView.prototype.render = function (model, viewName) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                response = node_1.Context.getCurrent().response;
                response.body = model;
                return [2 /*return*/];
            });
        });
    };
    TextView.prototype.support = function (viewName) {
        return Promise.resolve(viewName === TextView_1.VIEW_NAME);
    };
    var TextView_1;
    TextView.VIEW_NAME = 'text';
    TextView = TextView_1 = __decorate([
        core_1.Component(view_protocol_1.View)
    ], TextView);
    return TextView;
}());
exports.TextView = TextView;


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/view/view-protocol.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/view/view-protocol.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.View = Symbol('View');


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/view/view-provider.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/view/view-provider.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var view_protocol_1 = __webpack_require__(/*! ./view-protocol */ "./node_modules/@malagu/mvc/lib/node/view/view-protocol.js");
var ViewProvider = /** @class */ (function () {
    function ViewProvider(views) {
        this.views = views;
    }
    ViewProvider.prototype.provide = function () {
        if (!this.prioritized) {
            this.prioritized = core_1.Prioritizeable.prioritizeAllSync(this.views).map(function (c) { return c.value; });
        }
        return this.prioritized;
    };
    ViewProvider = __decorate([
        core_1.Component(),
        __param(0, core_1.Autowired(view_protocol_1.View)),
        __metadata("design:paramtypes", [Array])
    ], ViewProvider);
    return ViewProvider;
}());
exports.ViewProvider = ViewProvider;


/***/ }),

/***/ "./node_modules/@malagu/rpc/lib/common/annotation/autorpc.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/annotation/autorpc.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
exports.RPC = Symbol('RPC');
exports.ID_KEY = Symbol('ID_KEY');
exports.Autorpc = function (idOrOption) {
    return function (target, targetKey, index) {
        var option = core_1.parseAutowiredOption(target, targetKey, index, idOrOption);
        core_1.applyAutowiredDecorator(option, target, targetKey, index, exports.doInjectForAutorpc);
    };
};
exports.doInjectForAutorpc = function (option, t, k, i) {
    inversify_1.inject(exports.RPC)(t, k, i);
    inversify_1.tagged(exports.ID_KEY, option.id)(t, k, i);
};


/***/ }),

/***/ "./node_modules/@malagu/rpc/lib/common/annotation/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/annotation/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./rpc */ "./node_modules/@malagu/rpc/lib/common/annotation/rpc.js"));
__export(__webpack_require__(/*! ./autorpc */ "./node_modules/@malagu/rpc/lib/common/annotation/autorpc.js"));


/***/ }),

/***/ "./node_modules/@malagu/rpc/lib/common/annotation/rpc.js":
/*!***************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/annotation/rpc.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var web_1 = __webpack_require__(/*! @malagu/web */ "./node_modules/@malagu/web/lib/common/index.js");
var converter_1 = __webpack_require__(/*! ../converter */ "./node_modules/@malagu/rpc/lib/common/converter/index.js");
var handler_1 = __webpack_require__(/*! ../handler */ "./node_modules/@malagu/rpc/lib/common/handler/index.js");
var factory_1 = __webpack_require__(/*! ../factory */ "./node_modules/@malagu/rpc/lib/common/factory/index.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/@malagu/rpc/lib/common/utils/index.js");
exports.RPC_TAG = 'Rpc';
exports.Rpc = function () {
    var idOrOption = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        idOrOption[_i] = arguments[_i];
    }
    return function (target) {
        var option = parseRpcOption(target, idOrOption);
        applyRpcDecorator(option, target);
    };
};
function parseRpcOption(target, idOrOption) {
    var _a;
    var parsed = core_1.parseComponentOption(target, idOrOption);
    if (((_a = idOrOption) === null || _a === void 0 ? void 0 : _a.proxy) === undefined) {
        parsed.proxy = true;
    }
    parsed.sysTags.push(web_1.AOP_POINTCUT, exports.RPC_TAG);
    return parsed;
}
exports.parseRpcOption = parseRpcOption;
function applyRpcDecorator(option, target) {
    var ids = core_1.applyComponentDecorator(option, target).ids;
    var id = ids[0];
    return core_1.applyComponentDecorator({ id: handler_1.ConnectionHandler, onActivation: function (context) {
            var _a;
            var t = context.container.get(id);
            var pipeManager = context.container.get(core_1.PipeManager);
            var errorConverters = [];
            try {
                var name_1 = utils_1.RpcUtil.toName(id);
                errorConverters.push(context.container.getNamed(converter_1.ErrorConverter, name_1));
            }
            catch (error) {
                if (!((_a = error) === null || _a === void 0 ? void 0 : _a.message.startsWith('No matching bindings found for serviceIdentifier: Symbol(ErrorConverter)'))) {
                    throw error;
                }
            }
            return new factory_1.JsonRpcConnectionHandler(utils_1.RpcUtil.toPath(id), function () { return t; }, errorConverters, pipeManager);
        } }, target);
}
exports.applyRpcDecorator = applyRpcDecorator;


/***/ }),

/***/ "./node_modules/@malagu/rpc/lib/common/channal/channel-protocol.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/channal/channel-protocol.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var vscode_jsonrpc_1 = __webpack_require__(/*! vscode-jsonrpc */ "vscode-jsonrpc");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var AbstractChannel = /** @class */ (function () {
    function AbstractChannel(id, doSend) {
        this.id = id;
        this.doSend = doSend;
        this.toDispose = new core_1.DisposableCollection();
        this.fireMessage = function () { };
        this.fireError = function () { };
    }
    AbstractChannel.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    AbstractChannel.prototype.checkNotDisposed = function () {
        if (this.toDispose.disposed) {
            throw new Error('The channel has been disposed.');
        }
    };
    AbstractChannel.prototype.send = function (content) {
        this.checkNotDisposed();
        this.doSend(JSON.stringify(this.doGetMessage(content)));
    };
    AbstractChannel.prototype.onMessage = function (cb) {
        var _this = this;
        this.checkNotDisposed();
        this.fireMessage = cb;
        this.toDispose.push(vscode_jsonrpc_1.Disposable.create(function () { return _this.fireMessage = function () { }; }));
    };
    AbstractChannel.prototype.onError = function (cb) {
        var _this = this;
        this.checkNotDisposed();
        this.fireError = cb;
        this.toDispose.push(vscode_jsonrpc_1.Disposable.create(function () { return _this.fireError = function () { }; }));
    };
    return AbstractChannel;
}());
exports.AbstractChannel = AbstractChannel;


/***/ }),

/***/ "./node_modules/@malagu/rpc/lib/common/channal/http-channel.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/channal/http-channel.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var channel_protocol_1 = __webpack_require__(/*! ./channel-protocol */ "./node_modules/@malagu/rpc/lib/common/channal/channel-protocol.js");
var HttpChannel = /** @class */ (function (_super) {
    __extends(HttpChannel, _super);
    function HttpChannel(id, doSend, path) {
        var _this = _super.call(this, id, doSend) || this;
        _this.path = path;
        return _this;
    }
    HttpChannel.prototype.checkNotDisposed = function () {
        // noop
    };
    HttpChannel.prototype.handleMessage = function (message) {
        this.fireMessage(message.content);
    };
    HttpChannel.prototype.doGetMessage = function (content) {
        return {
            kind: 'http',
            id: this.id,
            path: this.path,
            content: content
        };
    };
    return HttpChannel;
}(channel_protocol_1.AbstractChannel));
exports.HttpChannel = HttpChannel;


/***/ }),

/***/ "./node_modules/@malagu/rpc/lib/common/channal/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/channal/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./http-channel */ "./node_modules/@malagu/rpc/lib/common/channal/http-channel.js"));
__export(__webpack_require__(/*! ./channel-protocol */ "./node_modules/@malagu/rpc/lib/common/channal/channel-protocol.js"));


/***/ }),

/***/ "./node_modules/@malagu/rpc/lib/common/constants.js":
/*!**********************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/constants.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RPC_PATH = 'malagu.rpc.path';


/***/ }),

/***/ "./node_modules/@malagu/rpc/lib/common/converter/converter-protocol.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/converter/converter-protocol.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorConverter = Symbol('ErrorConverter');


/***/ }),

/***/ "./node_modules/@malagu/rpc/lib/common/converter/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/converter/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./converter-protocol */ "./node_modules/@malagu/rpc/lib/common/converter/converter-protocol.js"));


/***/ }),

/***/ "./node_modules/@malagu/rpc/lib/common/endpoint/endpoint-protocol.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/endpoint/endpoint-protocol.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EndpointResolver = Symbol('EndpointResolver');


/***/ }),

/***/ "./node_modules/@malagu/rpc/lib/common/endpoint/endpoint-resolver.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/endpoint/endpoint-resolver.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/rpc/lib/common/constants.js");
var web_1 = __webpack_require__(/*! @malagu/web */ "./node_modules/@malagu/web/lib/common/index.js");
var error_1 = __webpack_require__(/*! ../error */ "./node_modules/@malagu/rpc/lib/common/error/index.js");
var endpoint_protocol_1 = __webpack_require__(/*! ./endpoint-protocol */ "./node_modules/@malagu/rpc/lib/common/endpoint/endpoint-protocol.js");
var EndpointResolverImpl = /** @class */ (function () {
    function EndpointResolverImpl() {
    }
    EndpointResolverImpl.prototype.resolve = function (serviceIdentifier) {
        return __awaiter(this, void 0, void 0, function () {
            var result, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (this.endpoint) {
                            result = this.endpoint[serviceIdentifier];
                        }
                        if (/^https?:/i.test(serviceIdentifier)) {
                            result = serviceIdentifier;
                        }
                        if (!result) {
                            result = this.defaultEndpoint;
                        }
                        if (!result && typeof location !== 'undefined') {
                            result = location.protocol + "//" + location.host + "{rpcPath}/{serviceIdentifier}";
                        }
                        if (!result) {
                            throw new error_1.EndpointNotFoundError(serviceIdentifier);
                        }
                        _b = (_a = result).replace;
                        _c = ['{rpcPath}'];
                        return [4 /*yield*/, this.pathResolver.resolve(this.rpcPath)];
                    case 1: return [2 /*return*/, _b.apply(_a, _c.concat([_d.sent()]))
                            .replace('{serviceIdentifier}', serviceIdentifier)];
                }
            });
        });
    };
    __decorate([
        core_1.Value('malagu.rpc.endpoint'),
        __metadata("design:type", Object)
    ], EndpointResolverImpl.prototype, "endpoint", void 0);
    __decorate([
        core_1.Value('malagu.rpc.defaultEndpoint'),
        __metadata("design:type", String)
    ], EndpointResolverImpl.prototype, "defaultEndpoint", void 0);
    __decorate([
        core_1.Value(constants_1.RPC_PATH),
        __metadata("design:type", String)
    ], EndpointResolverImpl.prototype, "rpcPath", void 0);
    __decorate([
        core_1.Autowired(web_1.PathResolver),
        __metadata("design:type", Object)
    ], EndpointResolverImpl.prototype, "pathResolver", void 0);
    EndpointResolverImpl = __decorate([
        core_1.Component(endpoint_protocol_1.EndpointResolver)
    ], EndpointResolverImpl);
    return EndpointResolverImpl;
}());
exports.EndpointResolverImpl = EndpointResolverImpl;


/***/ }),

/***/ "./node_modules/@malagu/rpc/lib/common/endpoint/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/endpoint/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./endpoint-protocol */ "./node_modules/@malagu/rpc/lib/common/endpoint/endpoint-protocol.js"));
__export(__webpack_require__(/*! ./endpoint-resolver */ "./node_modules/@malagu/rpc/lib/common/endpoint/endpoint-resolver.js"));


/***/ }),

/***/ "./node_modules/@malagu/rpc/lib/common/error/error.js":
/*!************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/error/error.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var EndpointNotFoundError = /** @class */ (function (_super) {
    __extends(EndpointNotFoundError, _super);
    function EndpointNotFoundError(serviceId) {
        var _this = _super.call(this, "No endpoint found: " + serviceId) || this;
        _this.serviceId = serviceId;
        return _this;
    }
    return EndpointNotFoundError;
}(core_1.CustomError));
exports.EndpointNotFoundError = EndpointNotFoundError;


/***/ }),

/***/ "./node_modules/@malagu/rpc/lib/common/error/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/error/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./error */ "./node_modules/@malagu/rpc/lib/common/error/error.js"));


/***/ }),

/***/ "./node_modules/@malagu/rpc/lib/common/factory/connection-factory.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/factory/connection-factory.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var vscode_jsonrpc_1 = __webpack_require__(/*! vscode-jsonrpc */ "vscode-jsonrpc");
var reader_1 = __webpack_require__(/*! ./reader */ "./node_modules/@malagu/rpc/lib/common/factory/reader.js");
var writer_1 = __webpack_require__(/*! ./writer */ "./node_modules/@malagu/rpc/lib/common/factory/writer.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
exports.ConnnectionFactory = Symbol('ConnnectionFactory');
var ConnnectionFactoryImpl = /** @class */ (function () {
    function ConnnectionFactoryImpl() {
    }
    ConnnectionFactoryImpl.prototype.create = function (channel, logger) {
        var messageReader = new reader_1.ChannelMessageReader(channel);
        var messageWriter = new writer_1.ChannelMessageWriter(channel);
        var connection = vscode_jsonrpc_1.createMessageConnection(messageReader, messageWriter, logger);
        connection.onClose(function () { return connection.dispose(); });
        return connection;
    };
    ConnnectionFactoryImpl = __decorate([
        core_1.Component(exports.ConnnectionFactory)
    ], ConnnectionFactoryImpl);
    return ConnnectionFactoryImpl;
}());
exports.ConnnectionFactoryImpl = ConnnectionFactoryImpl;


/***/ }),

/***/ "./node_modules/@malagu/rpc/lib/common/factory/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/factory/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./proxy-factory */ "./node_modules/@malagu/rpc/lib/common/factory/proxy-factory.js"));
__export(__webpack_require__(/*! ./connection-factory */ "./node_modules/@malagu/rpc/lib/common/factory/connection-factory.js"));
__export(__webpack_require__(/*! ./reader */ "./node_modules/@malagu/rpc/lib/common/factory/reader.js"));
__export(__webpack_require__(/*! ./writer */ "./node_modules/@malagu/rpc/lib/common/factory/writer.js"));


/***/ }),

/***/ "./node_modules/@malagu/rpc/lib/common/factory/proxy-factory.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/factory/proxy-factory.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var vscode_jsonrpc_1 = __webpack_require__(/*! vscode-jsonrpc */ "vscode-jsonrpc");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var JsonRpcConnectionHandler = /** @class */ (function () {
    function JsonRpcConnectionHandler(path, targetFactory, errorConverters, pipeManager) {
        this.path = path;
        this.targetFactory = targetFactory;
        this.errorConverters = errorConverters;
        this.pipeManager = pipeManager;
    }
    JsonRpcConnectionHandler.prototype.onConnection = function (connection) {
        var factory = new JsonRpcProxyFactory(undefined, this.errorConverters, this.pipeManager);
        var proxy = factory.createProxy();
        factory.target = this.targetFactory(proxy);
        factory.listen(connection);
    };
    return JsonRpcConnectionHandler;
}());
exports.JsonRpcConnectionHandler = JsonRpcConnectionHandler;
var JsonRpcProxyFactory = /** @class */ (function () {
    function JsonRpcProxyFactory(target, errorConverters, pipeMananger) {
        this.target = target;
        this.errorConverters = errorConverters;
        this.pipeMananger = pipeMananger;
        this.onDidOpenConnectionEmitter = new vscode_jsonrpc_1.Emitter();
        this.onDidCloseConnectionEmitter = new vscode_jsonrpc_1.Emitter();
        this.waitForConnection();
    }
    JsonRpcProxyFactory.prototype.waitForConnection = function () {
        var _this = this;
        this.connectionPromise = new Promise(function (resolve) {
            return _this.connectionPromiseResolve = resolve;
        });
        this.connectionPromise.then(function (connection) {
            connection.onClose(function () {
                return _this.onDidCloseConnectionEmitter.fire(undefined);
            });
            _this.onDidOpenConnectionEmitter.fire(undefined);
        });
    };
    JsonRpcProxyFactory.prototype.getRequestHander = function (prop) {
        var _this = this;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _this.onRequest.apply(_this, __spread([prop], args));
        };
    };
    JsonRpcProxyFactory.prototype.getNotificationHander = function (prop) {
        var _this = this;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _this.onNotification.apply(_this, __spread([prop], args));
        };
    };
    JsonRpcProxyFactory.prototype.registerMethods = function (connection) {
        var e_1, _a;
        if (this.target) {
            try {
                for (var _b = __values(core_1.getPropertyNames(this.target)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var prop = _c.value;
                    if (typeof this.target[prop] === 'function') {
                        connection.onRequest(prop, this.getRequestHander(prop));
                        connection.onNotification(prop, this.getNotificationHander(prop));
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    };
    JsonRpcProxyFactory.prototype.listen = function (connection) {
        var _this = this;
        this.registerMethods(connection);
        connection.onDispose(function () { return _this.waitForConnection(); });
        connection.listen();
        this.connectionPromiseResolve(connection);
    };
    JsonRpcProxyFactory.prototype.onRequest = function (method) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var error_1, e, reason, stack;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4, , 5]);
                        if (!this.pipeMananger) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.pipeMananger.apply({ target: this.target, method: method }, args)];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2: return [4 /*yield*/, (_a = this.target)[method].apply(_a, __spread(args))];
                    case 3: return [2 /*return*/, _b.sent()];
                    case 4:
                        error_1 = _b.sent();
                        e = this.serializeError(error_1);
                        if (e instanceof vscode_jsonrpc_1.ResponseError) {
                            throw e;
                        }
                        reason = e.message || '';
                        stack = e.stack || '';
                        console.error("Request " + method + " failed with error: " + reason, stack);
                        throw e;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    JsonRpcProxyFactory.prototype.onNotification = function (method) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (_a = this.target)[method].apply(_a, __spread(args));
    };
    JsonRpcProxyFactory.prototype.createProxy = function () {
        var proxy = new Proxy(this, this);
        return proxy;
    };
    JsonRpcProxyFactory.prototype.get = function (target, p, receiver) {
        var method = this.getInternalMethod(p.toString());
        if (method) {
            return method;
        }
        return this.createProxyMethod(p.toString());
    };
    JsonRpcProxyFactory.prototype.getInternalMethod = function (method) {
        var _this = this;
        if (method === JsonRpcProxyFactory.SET_CLIENT) {
            return function (client) { return _this.target = client; };
        }
        if (method === JsonRpcProxyFactory.ON_DID_OPEN_CONNECTION) {
            return this.onDidOpenConnectionEmitter.event;
        }
        if (method === JsonRpcProxyFactory.ON_DID_CLOSE_CONNECTION) {
            return this.onDidCloseConnectionEmitter.event;
        }
    };
    JsonRpcProxyFactory.prototype.createProxyMethod = function (method) {
        var _this = this;
        var isNotify = this.isNotification(method);
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return __awaiter(_this, void 0, void 0, function () {
                var capturedError, connection, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            capturedError = new Error("Request '" + method + "' failed");
                            return [4 /*yield*/, this.connectionPromise];
                        case 1:
                            connection = _a.sent();
                            if (!isNotify) return [3 /*break*/, 2];
                            connection.sendNotification.apply(connection, __spread([method], args));
                            return [3 /*break*/, 5];
                        case 2:
                            _a.trys.push([2, 4, , 5]);
                            return [4 /*yield*/, connection.sendRequest.apply(connection, __spread([method], args))];
                        case 3: return [2 /*return*/, _a.sent()];
                        case 4:
                            err_1 = _a.sent();
                            throw this.deserializeError(capturedError, err_1);
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
    };
    JsonRpcProxyFactory.prototype.isNotification = function (p) {
        return p.toString().startsWith('notify') || p.toString().startsWith('on');
    };
    JsonRpcProxyFactory.prototype.serializeError = function (e) {
        var e_2, _a;
        if (this.errorConverters) {
            try {
                for (var _b = __values(this.errorConverters), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var converter = _c.value;
                    var serialized = converter.serialize(e);
                    if (serialized) {
                        e = serialized;
                        break;
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        if (core_1.ApplicationError.is(e)) {
            return new vscode_jsonrpc_1.ResponseError(e.code, '', Object.assign({ kind: 'application' }, e.toJson()));
        }
        return e;
    };
    JsonRpcProxyFactory.prototype.deserializeError = function (capturedError, e) {
        var e_3, _a;
        if (e instanceof vscode_jsonrpc_1.ResponseError) {
            var capturedStack = capturedError.stack || '';
            if (e.data && e.data.kind === 'application') {
                var _b = e.data, stack = _b.stack, data = _b.data, message = _b.message;
                e = core_1.ApplicationError.fromJson(e.code, {
                    message: message || capturedError.message,
                    data: data,
                    stack: capturedStack + "\nCaused by: " + stack
                });
            }
            else {
                e.stack = capturedStack;
            }
        }
        if (this.errorConverters) {
            try {
                for (var _c = __values(this.errorConverters), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var converter = _d.value;
                    var deserialized = converter.deserialize(e);
                    if (deserialized) {
                        return deserialized;
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        return e;
    };
    JsonRpcProxyFactory.SET_CLIENT = 'setClient';
    JsonRpcProxyFactory.ON_DID_OPEN_CONNECTION = 'onDidOpenConnection';
    JsonRpcProxyFactory.ON_DID_CLOSE_CONNECTION = 'onDidCloseConnection';
    return JsonRpcProxyFactory;
}());
exports.JsonRpcProxyFactory = JsonRpcProxyFactory;


/***/ }),

/***/ "./node_modules/@malagu/rpc/lib/common/factory/reader.js":
/*!***************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/factory/reader.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = __webpack_require__(/*! vscode-jsonrpc/lib/events */ "vscode-jsonrpc/lib/events");
var AbstractMessageReader = /** @class */ (function () {
    function AbstractMessageReader() {
        this.errorEmitter = new events_1.Emitter();
        this.closeEmitter = new events_1.Emitter();
        this.partialMessageEmitter = new events_1.Emitter();
    }
    AbstractMessageReader.prototype.dispose = function () {
        this.errorEmitter.dispose();
        this.closeEmitter.dispose();
    };
    Object.defineProperty(AbstractMessageReader.prototype, "onError", {
        get: function () {
            return this.errorEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    AbstractMessageReader.prototype.fireError = function (error) {
        this.errorEmitter.fire(this.asError(error));
    };
    Object.defineProperty(AbstractMessageReader.prototype, "onClose", {
        get: function () {
            return this.closeEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    AbstractMessageReader.prototype.fireClose = function () {
        this.closeEmitter.fire(undefined);
    };
    Object.defineProperty(AbstractMessageReader.prototype, "onPartialMessage", {
        get: function () {
            return this.partialMessageEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    AbstractMessageReader.prototype.firePartialMessage = function (info) {
        this.partialMessageEmitter.fire(info);
    };
    AbstractMessageReader.prototype.asError = function (error) {
        if (error instanceof Error) {
            return error;
        }
        else {
            return new Error("Reader received error. Reason: " + (typeof (error.message) === 'string' ? error.message : 'unknown'));
        }
    };
    return AbstractMessageReader;
}());
exports.AbstractMessageReader = AbstractMessageReader;
var ChannelMessageReader = /** @class */ (function (_super) {
    __extends(ChannelMessageReader, _super);
    function ChannelMessageReader(channel) {
        var _this = _super.call(this) || this;
        _this.channel = channel;
        _this.state = 'initial';
        _this.events = [];
        _this.channel.onMessage(function (message) {
            return _this.readMessage(message);
        });
        return _this;
    }
    ChannelMessageReader.prototype.listen = function (callback) {
        if (this.state === 'initial') {
            this.state = 'listening';
            this.callback = callback;
            while (this.events.length !== 0) {
                var event_1 = this.events.pop();
                if (event_1.message) {
                    this.readMessage(event_1.message);
                }
                else if (event_1.error) {
                    this.fireError(event_1.error);
                }
            }
        }
    };
    ChannelMessageReader.prototype.readMessage = function (message) {
        if (this.state === 'initial') {
            this.events.splice(0, 0, { message: message });
        }
        else if (this.state === 'listening') {
            var data = JSON.parse(message);
            this.callback(data);
        }
    };
    ChannelMessageReader.prototype.fireError = function (error) {
        if (this.state === 'initial') {
            this.events.splice(0, 0, { error: error });
        }
        else if (this.state === 'listening') {
            _super.prototype.fireError.call(this, error);
        }
    };
    return ChannelMessageReader;
}(AbstractMessageReader));
exports.ChannelMessageReader = ChannelMessageReader;


/***/ }),

/***/ "./node_modules/@malagu/rpc/lib/common/factory/writer.js":
/*!***************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/factory/writer.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = __webpack_require__(/*! vscode-jsonrpc/lib/events */ "vscode-jsonrpc/lib/events");
var AbstractMessageWriter = /** @class */ (function () {
    function AbstractMessageWriter() {
        this.errorEmitter = new events_1.Emitter();
        this.closeEmitter = new events_1.Emitter();
    }
    AbstractMessageWriter.prototype.dispose = function () {
        this.errorEmitter.dispose();
        this.closeEmitter.dispose();
    };
    Object.defineProperty(AbstractMessageWriter.prototype, "onError", {
        get: function () {
            return this.errorEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    AbstractMessageWriter.prototype.fireError = function (error, message, count) {
        this.errorEmitter.fire([this.asError(error), message, count]);
    };
    Object.defineProperty(AbstractMessageWriter.prototype, "onClose", {
        get: function () {
            return this.closeEmitter.event;
        },
        enumerable: true,
        configurable: true
    });
    AbstractMessageWriter.prototype.fireClose = function () {
        this.closeEmitter.fire(undefined);
    };
    AbstractMessageWriter.prototype.asError = function (error) {
        if (error instanceof Error) {
            return error;
        }
        else {
            return new Error("Writer received error. Reason: " + (typeof error.message === 'string' ? error.message : 'unknown'));
        }
    };
    return AbstractMessageWriter;
}());
exports.AbstractMessageWriter = AbstractMessageWriter;
var ChannelMessageWriter = /** @class */ (function (_super) {
    __extends(ChannelMessageWriter, _super);
    function ChannelMessageWriter(channel) {
        var _this = _super.call(this) || this;
        _this.channel = channel;
        _this.errorCount = 0;
        return _this;
    }
    ChannelMessageWriter.prototype.write = function (msg) {
        try {
            var content = JSON.stringify(msg);
            this.channel.send(content);
        }
        catch (e) {
            this.errorCount++;
            this.fireError(e, msg, this.errorCount);
        }
    };
    return ChannelMessageWriter;
}(AbstractMessageWriter));
exports.ChannelMessageWriter = ChannelMessageWriter;


/***/ }),

/***/ "./node_modules/@malagu/rpc/lib/common/handler/connection-handler.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/handler/connection-handler.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NoOpConnectionHandler = /** @class */ (function () {
    function NoOpConnectionHandler() {
    }
    NoOpConnectionHandler.prototype.onConnection = function (connection) { };
    return NoOpConnectionHandler;
}());
exports.NoOpConnectionHandler = NoOpConnectionHandler;


/***/ }),

/***/ "./node_modules/@malagu/rpc/lib/common/handler/handler-protocol.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/handler/handler-protocol.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionHandler = Symbol('ConnectionHandler');


/***/ }),

/***/ "./node_modules/@malagu/rpc/lib/common/handler/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/handler/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./connection-handler */ "./node_modules/@malagu/rpc/lib/common/handler/connection-handler.js"));
__export(__webpack_require__(/*! ./handler-protocol */ "./node_modules/@malagu/rpc/lib/common/handler/handler-protocol.js"));


/***/ }),

/***/ "./node_modules/@malagu/rpc/lib/common/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./annotation */ "./node_modules/@malagu/rpc/lib/common/annotation/index.js"));
__export(__webpack_require__(/*! ./channal */ "./node_modules/@malagu/rpc/lib/common/channal/index.js"));
__export(__webpack_require__(/*! ./endpoint */ "./node_modules/@malagu/rpc/lib/common/endpoint/index.js"));
__export(__webpack_require__(/*! ./error */ "./node_modules/@malagu/rpc/lib/common/error/index.js"));
__export(__webpack_require__(/*! ./factory */ "./node_modules/@malagu/rpc/lib/common/factory/index.js"));
__export(__webpack_require__(/*! ./handler */ "./node_modules/@malagu/rpc/lib/common/handler/index.js"));
__export(__webpack_require__(/*! ./proxy */ "./node_modules/@malagu/rpc/lib/common/proxy/index.js"));
__export(__webpack_require__(/*! ./utils */ "./node_modules/@malagu/rpc/lib/common/utils/index.js"));
__export(__webpack_require__(/*! ./constants */ "./node_modules/@malagu/rpc/lib/common/constants.js"));
__export(__webpack_require__(/*! ./converter */ "./node_modules/@malagu/rpc/lib/common/converter/index.js"));
__export(__webpack_require__(/*! ./processor */ "./node_modules/@malagu/rpc/lib/common/processor/index.js"));


/***/ }),

/***/ "./node_modules/@malagu/rpc/lib/common/module.js":
/*!*******************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/module.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var proxy_1 = __webpack_require__(/*! ./proxy */ "./node_modules/@malagu/rpc/lib/common/proxy/index.js");
var converter_1 = __webpack_require__(/*! ./converter */ "./node_modules/@malagu/rpc/lib/common/converter/index.js");
var annotation_1 = __webpack_require__(/*! ./annotation */ "./node_modules/@malagu/rpc/lib/common/annotation/index.js");
var utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/@malagu/rpc/lib/common/utils/index.js");
__export(__webpack_require__(/*! . */ "./node_modules/@malagu/rpc/lib/common/index.js"));
exports.default = core_1.autoBind(function (bind) {
    bind(annotation_1.RPC).toDynamicValue(function (ctx) {
        var _a, _b;
        var id = ((_a = ctx.currentRequest.target.getCustomTags()) === null || _a === void 0 ? void 0 : _a.find(function (m) { return m.key === annotation_1.ID_KEY; })).value;
        var path = utils_1.RpcUtil.toPath(id);
        var proxyProvider = ctx.container.get(proxy_1.ProxyProvider);
        var errorConverters = [];
        try {
            var name_1 = utils_1.RpcUtil.toName(id);
            errorConverters.push(ctx.container.getNamed(converter_1.ErrorConverter, name_1));
        }
        catch (error) {
            if (!((_b = error) === null || _b === void 0 ? void 0 : _b.message.startsWith('No matching bindings found for serviceIdentifier: Symbol(ErrorConverter)'))) {
                throw error;
            }
        }
        return proxyProvider.provide(path, errorConverters);
    });
});


/***/ }),

/***/ "./node_modules/@malagu/rpc/lib/common/processor/client-config-processor.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/processor/client-config-processor.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var processor_protocol_1 = __webpack_require__(/*! ./processor-protocol */ "./node_modules/@malagu/rpc/lib/common/processor/processor-protocol.js");
var NoOpClientConfigProcessor = /** @class */ (function () {
    function NoOpClientConfigProcessor() {
    }
    NoOpClientConfigProcessor.prototype.process = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    NoOpClientConfigProcessor = __decorate([
        core_1.Component(processor_protocol_1.ClientConfigProcessor)
    ], NoOpClientConfigProcessor);
    return NoOpClientConfigProcessor;
}());
exports.NoOpClientConfigProcessor = NoOpClientConfigProcessor;


/***/ }),

/***/ "./node_modules/@malagu/rpc/lib/common/processor/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/processor/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./processor-protocol */ "./node_modules/@malagu/rpc/lib/common/processor/processor-protocol.js"));
__export(__webpack_require__(/*! ./client-config-processor */ "./node_modules/@malagu/rpc/lib/common/processor/client-config-processor.js"));


/***/ }),

/***/ "./node_modules/@malagu/rpc/lib/common/processor/processor-protocol.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/processor/processor-protocol.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientConfigProcessor = Symbol('ClientConfigProcessor');


/***/ }),

/***/ "./node_modules/@malagu/rpc/lib/common/proxy/http-proxy-creator.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/proxy/http-proxy-creator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var web_1 = __webpack_require__(/*! @malagu/web */ "./node_modules/@malagu/web/lib/common/index.js");
var proxy_protocol_1 = __webpack_require__(/*! ./proxy-protocol */ "./node_modules/@malagu/rpc/lib/common/proxy/proxy-protocol.js");
var endpoint_1 = __webpack_require__(/*! ../endpoint */ "./node_modules/@malagu/rpc/lib/common/endpoint/index.js");
var factory_1 = __webpack_require__(/*! ../factory */ "./node_modules/@malagu/rpc/lib/common/factory/index.js");
var channal_1 = __webpack_require__(/*! ../channal */ "./node_modules/@malagu/rpc/lib/common/channal/index.js");
var processor_1 = __webpack_require__(/*! ../processor */ "./node_modules/@malagu/rpc/lib/common/processor/index.js");
var HttpProxyCreator = /** @class */ (function () {
    function HttpProxyCreator() {
        this.channelIdSeq = 0;
        this.requestMap = new Map();
        this.channelMap = new Map();
    }
    HttpProxyCreator.prototype.create = function (path, errorConverters, target) {
        var _this = this;
        var factory = new factory_1.JsonRpcProxyFactory(target, errorConverters);
        this.endpointResolver.resolve(path).then(function (endpoint) { return _this.listen({
            path: endpoint,
            onConnection: function (c) { return factory.listen(c); }
        }); });
        return factory.createProxy();
    };
    HttpProxyCreator.prototype.support = function (path) {
        return 500;
    };
    HttpProxyCreator.prototype.listen = function (handler, options) {
        var _this = this;
        this.openChannel(handler.path, function (channel) {
            var connection = _this.connnectionFactory.create(channel, _this.createLogger());
            handler.onConnection(connection);
        }, options);
    };
    HttpProxyCreator.prototype.openChannel = function (path, handler, options) {
        this.doOpenChannel(path, handler, options);
    };
    HttpProxyCreator.prototype.doOpenChannel = function (path, handler, options) {
        var id = this.channelIdSeq++;
        var channel = this.createChannel(id, path);
        handler(channel);
    };
    HttpProxyCreator.prototype.createChannel = function (id, path) {
        var _this = this;
        var parts = path.split('/');
        var serviceName = parts.pop();
        var endpoint = parts.join('/');
        var channel = new channal_1.HttpChannel(id, function (content) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.enabled) {
                    if (this.canMerge(endpoint, content)) {
                        this.pushContent(endpoint, content);
                    }
                    else {
                        this.executeTask(endpoint);
                        this.pushContent(endpoint, content);
                    }
                }
                else {
                    this.pushContent(endpoint, content);
                    this.executeTask(endpoint);
                }
                return [2 /*return*/];
            });
        }); }, serviceName);
        this.channelMap.set(id, channel);
        return channel;
    };
    HttpProxyCreator.prototype.executeTask = function (endpoint) {
        var meta = this.requestMap.get(endpoint);
        if (meta) {
            return meta.task();
        }
    };
    HttpProxyCreator.prototype.canMerge = function (endpoint, content) {
        var meta = this.requestMap.get(endpoint);
        if (meta) {
            if (meta.contentLength + content.length > this.maxLength ||
                meta.contents.length + 1 > this.maxCount) {
                return false;
            }
        }
        return true;
    };
    HttpProxyCreator.prototype.pushContent = function (endpoint, content) {
        var meta = this.requestMap.get(endpoint);
        if (!meta) {
            var task = this.createTask(endpoint);
            meta = {
                id: setTimeout(task, this.timerDelay),
                contents: [],
                contentLength: 0,
                task: task
            };
            this.requestMap.set(endpoint, meta);
        }
        meta.contents.push(content);
        meta.contentLength += content.length;
        return meta;
    };
    HttpProxyCreator.prototype.createTask = function (endpoint) {
        var _this = this;
        return function () { return __awaiter(_this, void 0, void 0, function () {
            var meta, contents, config, data, data_1, data_1_1, message, parsed;
            var _a, e_1, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        meta = this.requestMap.get(endpoint);
                        if (!meta) {
                            return [2 /*return*/];
                        }
                        clearTimeout(meta.id);
                        contents = meta.contents;
                        this.requestMap.delete(endpoint);
                        config = __assign({ url: endpoint, method: web_1.HttpMethod.POST, data: contents.length > 1 ? JSON.stringify(contents) : contents[0], headers: (_a = {},
                                _a[web_1.HttpHeaders.CONTENT_TYPE] = web_1.MediaType.APPLICATION_JSON_UTF8,
                                _a[web_1.HttpHeaders.X_REQUESTED_WITH] = web_1.XML_HTTP_REQUEST,
                                _a) }, this.clientConfig);
                        return [4 /*yield*/, this.clientConfigProcessor.process(config)];
                    case 1:
                        _c.sent();
                        return [4 /*yield*/, this.restOperations.request(config)];
                    case 2:
                        data = (_c.sent()).data;
                        if (Array.isArray(data)) {
                            try {
                                for (data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                                    message = data_1_1.value;
                                    parsed = JSON.parse(message);
                                    this.channelMap.get(parsed.id).handleMessage(parsed);
                                }
                            }
                            catch (e_1_1) { e_1 = { error: e_1_1 }; }
                            finally {
                                try {
                                    if (data_1_1 && !data_1_1.done && (_b = data_1.return)) _b.call(data_1);
                                }
                                finally { if (e_1) throw e_1.error; }
                            }
                        }
                        else {
                            this.channelMap.get(data.id).handleMessage(data);
                        }
                        return [2 /*return*/];
                }
            });
        }); };
    };
    HttpProxyCreator.prototype.createLogger = function () {
        return new core_1.ConsoleLogger();
    };
    __decorate([
        core_1.Autowired(factory_1.ConnnectionFactory),
        __metadata("design:type", Object)
    ], HttpProxyCreator.prototype, "connnectionFactory", void 0);
    __decorate([
        core_1.Autowired(endpoint_1.EndpointResolver),
        __metadata("design:type", Object)
    ], HttpProxyCreator.prototype, "endpointResolver", void 0);
    __decorate([
        core_1.Autowired(web_1.RestOperations),
        __metadata("design:type", Function)
    ], HttpProxyCreator.prototype, "restOperations", void 0);
    __decorate([
        core_1.Autowired(processor_1.ClientConfigProcessor),
        __metadata("design:type", Object)
    ], HttpProxyCreator.prototype, "clientConfigProcessor", void 0);
    __decorate([
        core_1.Value('malagu.rpc.client.config'),
        __metadata("design:type", Object)
    ], HttpProxyCreator.prototype, "clientConfig", void 0);
    __decorate([
        core_1.Value('malagu.rpc.merge.maxCount'),
        __metadata("design:type", Number)
    ], HttpProxyCreator.prototype, "maxCount", void 0);
    __decorate([
        core_1.Value('malagu.rpc.merge.maxLength'),
        __metadata("design:type", Number)
    ], HttpProxyCreator.prototype, "maxLength", void 0);
    __decorate([
        core_1.Value('malagu.rpc.merge.timerDelay'),
        __metadata("design:type", Number)
    ], HttpProxyCreator.prototype, "timerDelay", void 0);
    __decorate([
        core_1.Value('malagu.rpc.merge.enabled'),
        __metadata("design:type", Boolean)
    ], HttpProxyCreator.prototype, "enabled", void 0);
    HttpProxyCreator = __decorate([
        core_1.Component(proxy_protocol_1.ProxyCreator)
    ], HttpProxyCreator);
    return HttpProxyCreator;
}());
exports.HttpProxyCreator = HttpProxyCreator;


/***/ }),

/***/ "./node_modules/@malagu/rpc/lib/common/proxy/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/proxy/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./proxy-provider */ "./node_modules/@malagu/rpc/lib/common/proxy/proxy-provider.js"));
__export(__webpack_require__(/*! ./proxy-protocol */ "./node_modules/@malagu/rpc/lib/common/proxy/proxy-protocol.js"));
__export(__webpack_require__(/*! ./http-proxy-creator */ "./node_modules/@malagu/rpc/lib/common/proxy/http-proxy-creator.js"));


/***/ }),

/***/ "./node_modules/@malagu/rpc/lib/common/proxy/proxy-protocol.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/proxy/proxy-protocol.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyProvider = Symbol('ProxyProvider');
exports.ProxyCreator = Symbol('ProxyCreator');


/***/ }),

/***/ "./node_modules/@malagu/rpc/lib/common/proxy/proxy-provider.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/proxy/proxy-provider.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var proxy_protocol_1 = __webpack_require__(/*! ./proxy-protocol */ "./node_modules/@malagu/rpc/lib/common/proxy/proxy-protocol.js");
var ProxyProviderImpl = /** @class */ (function () {
    function ProxyProviderImpl(proxyCreators) {
        this.proxyCreators = proxyCreators;
    }
    ProxyProviderImpl.prototype.provide = function (path, errorConverters, target) {
        return this.prioritize(path)[0].create(path, errorConverters, target);
    };
    ProxyProviderImpl.prototype.prioritize = function (path) {
        var prioritized = core_1.Prioritizeable.prioritizeAllSync(this.proxyCreators, function (proxyCreator) {
            try {
                return proxyCreator.support(path);
            }
            catch (_a) {
                return 0;
            }
        });
        return prioritized.map(function (p) { return p.value; });
    };
    ProxyProviderImpl = __decorate([
        core_1.Component(proxy_protocol_1.ProxyProvider),
        __param(0, core_1.Autowired(proxy_protocol_1.ProxyCreator)),
        __metadata("design:paramtypes", [Array])
    ], ProxyProviderImpl);
    return ProxyProviderImpl;
}());
exports.ProxyProviderImpl = ProxyProviderImpl;


/***/ }),

/***/ "./node_modules/@malagu/rpc/lib/common/utils/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/utils/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./rpc-util */ "./node_modules/@malagu/rpc/lib/common/utils/rpc-util.js"));


/***/ }),

/***/ "./node_modules/@malagu/rpc/lib/common/utils/rpc-util.js":
/*!***************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/common/utils/rpc-util.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var annotation_1 = __webpack_require__(/*! ../annotation */ "./node_modules/@malagu/rpc/lib/common/annotation/index.js");
var RpcUtil;
(function (RpcUtil) {
    function get(rpcServiceIdentifier) {
        return core_1.ContainerUtil.getTagged(annotation_1.RPC, annotation_1.ID_KEY, rpcServiceIdentifier);
    }
    RpcUtil.get = get;
    function toPath(serviceIdentifier) {
        return typeof serviceIdentifier !== 'function' ? serviceIdentifier.toString() : serviceIdentifier.name || serviceIdentifier.toString();
    }
    RpcUtil.toPath = toPath;
    function toName(serviceIdentifier) {
        return typeof serviceIdentifier !== 'function' ? serviceIdentifier : serviceIdentifier.name || serviceIdentifier.toString();
    }
    RpcUtil.toName = toName;
})(RpcUtil = exports.RpcUtil || (exports.RpcUtil = {}));


/***/ }),

/***/ "./node_modules/@malagu/rpc/lib/node/channel/channel-manager.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/node/channel/channel-manager.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var common_1 = __webpack_require__(/*! ../../common */ "./node_modules/@malagu/rpc/lib/common/index.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var channel_protocol_1 = __webpack_require__(/*! ./channel-protocol */ "./node_modules/@malagu/rpc/lib/node/channel/channel-protocol.js");
// tslint:disable:no-any
var ChannelManager = /** @class */ (function () {
    function ChannelManager(handlers, connnectionFactory) {
        var e_1, _a;
        this.handlers = handlers;
        this.connnectionFactory = connnectionFactory;
        this._handlers = new Map();
        try {
            for (var handlers_1 = __values(handlers), handlers_1_1 = handlers_1.next(); !handlers_1_1.done; handlers_1_1 = handlers_1.next()) {
                var handler = handlers_1_1.value;
                this._handlers.set(handler.path, handler);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (handlers_1_1 && !handlers_1_1.done && (_a = handlers_1.return)) _a.call(handlers_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    ChannelManager.prototype.handleChannels = function () {
        return __awaiter(this, void 0, void 0, function () {
            var channelStrategy, _a, _b, message, _c, id, path, handler, channel, e_2_1;
            var e_2, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        channelStrategy = node_1.Context.getAttr(channel_protocol_1.CURRENT_CHANNEL_STRATEGY_REQUEST_KEY);
                        node_1.Context.getResponse().body = new core_1.Deferred();
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 9, 10, 11]);
                        return [4 /*yield*/, channelStrategy.getMessages()];
                    case 2:
                        _a = __values.apply(void 0, [_e.sent()]), _b = _a.next();
                        _e.label = 3;
                    case 3:
                        if (!!_b.done) return [3 /*break*/, 8];
                        message = _b.value;
                        _c = message, id = _c.id, path = _c.path;
                        if (!path) return [3 /*break*/, 6];
                        handler = this._handlers.get(this.getRealPath(path));
                        if (!handler) return [3 /*break*/, 5];
                        return [4 /*yield*/, channelStrategy.createChannel(id)];
                    case 4:
                        channel = _e.sent();
                        handler.onConnection(this.connnectionFactory.create(channel, new core_1.ConsoleLogger()));
                        channel.handleMessage(message);
                        _e.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6: throw new node_1.NotFoundError("Cannot find a service for the path: " + path);
                    case 7:
                        _b = _a.next();
                        return [3 /*break*/, 3];
                    case 8: return [3 /*break*/, 11];
                    case 9:
                        e_2_1 = _e.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 11];
                    case 10:
                        try {
                            if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    ChannelManager.prototype.getRealPath = function (path) {
        return path.split(':').pop();
    };
    ChannelManager = __decorate([
        core_1.Component(),
        __param(0, core_1.Autowired(common_1.ConnectionHandler)), __param(0, inversify_1.optional()),
        __param(1, core_1.Autowired(common_1.ConnnectionFactory)),
        __metadata("design:paramtypes", [Array, Object])
    ], ChannelManager);
    return ChannelManager;
}());
exports.ChannelManager = ChannelManager;


/***/ }),

/***/ "./node_modules/@malagu/rpc/lib/node/channel/channel-middleware.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/node/channel/channel-middleware.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var channel_protocol_1 = __webpack_require__(/*! ./channel-protocol */ "./node_modules/@malagu/rpc/lib/node/channel/channel-protocol.js");
var web_1 = __webpack_require__(/*! @malagu/web */ "./node_modules/@malagu/web/lib/common/index.js");
var ChannelMiddleware = /** @class */ (function () {
    function ChannelMiddleware() {
        this.priority = channel_protocol_1.CHANNEL_MIDDLEWARE_PRIORITY;
    }
    ChannelMiddleware.prototype.handle = function (ctx, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, channelStrategy, e_1_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 5, 6, 7]);
                        _a = __values(this.channelStrategies), _b = _a.next();
                        _d.label = 1;
                    case 1:
                        if (!!_b.done) return [3 /*break*/, 4];
                        channelStrategy = _b.value;
                        return [4 /*yield*/, channelStrategy.support()];
                    case 2:
                        if (_d.sent()) {
                            node_1.Context.setAttr(channel_protocol_1.CURRENT_CHANNEL_STRATEGY_REQUEST_KEY, channelStrategy);
                            return [3 /*break*/, 4];
                        }
                        _d.label = 3;
                    case 3:
                        _b = _a.next();
                        return [3 /*break*/, 1];
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 7];
                    case 6:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 7:
                        ctx.response.setHeader(web_1.HttpHeaders.CONTENT_TYPE, web_1.MediaType.APPLICATION_JSON_UTF8);
                        return [4 /*yield*/, next()];
                    case 8:
                        _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        core_1.Autowired(channel_protocol_1.ChannelStrategy),
        __metadata("design:type", Array)
    ], ChannelMiddleware.prototype, "channelStrategies", void 0);
    ChannelMiddleware = __decorate([
        core_1.Component(node_1.Middleware)
    ], ChannelMiddleware);
    return ChannelMiddleware;
}());
exports.ChannelMiddleware = ChannelMiddleware;


/***/ }),

/***/ "./node_modules/@malagu/rpc/lib/node/channel/channel-protocol.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/node/channel/channel-protocol.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelStrategy = Symbol('ChannelStrategy');
exports.CHANNEL_MIDDLEWARE_PRIORITY = 2100;
exports.CURRENT_CHANNEL_STRATEGY_REQUEST_KEY = 'CurrentChannelStrategyRequest';
exports.CURRENT_MESSAGE_COUNT_REQUEST_KEY = 'CurrentMessageCountRequest';
exports.CURRENT_RESPONSE_MESSAGE_REQUEST_KEY = 'CurrentResponseMessageRequest';


/***/ }),

/***/ "./node_modules/@malagu/rpc/lib/node/channel/channel-strategy.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/node/channel/channel-strategy.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var channal_1 = __webpack_require__(/*! ../../common/channal */ "./node_modules/@malagu/rpc/lib/common/channal/index.js");
var channel_protocol_1 = __webpack_require__(/*! ./channel-protocol */ "./node_modules/@malagu/rpc/lib/node/channel/channel-protocol.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var HttpChannelStrategy = /** @class */ (function () {
    function HttpChannelStrategy() {
    }
    HttpChannelStrategy.prototype.getMessages = function () {
        return __awaiter(this, void 0, void 0, function () {
            var message, parsed, message_1, message_1_1, m;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, node_1.Context.getRequest().body];
                    case 1:
                        message = _b.sent();
                        if (!Array.isArray(message)) {
                            message = [message];
                        }
                        else {
                            parsed = [];
                            try {
                                for (message_1 = __values(message), message_1_1 = message_1.next(); !message_1_1.done; message_1_1 = message_1.next()) {
                                    m = message_1_1.value;
                                    parsed.push(JSON.parse(m));
                                }
                            }
                            catch (e_1_1) { e_1 = { error: e_1_1 }; }
                            finally {
                                try {
                                    if (message_1_1 && !message_1_1.done && (_a = message_1.return)) _a.call(message_1);
                                }
                                finally { if (e_1) throw e_1.error; }
                            }
                            message = parsed;
                        }
                        node_1.Context.setAttr(channel_protocol_1.CURRENT_MESSAGE_COUNT_REQUEST_KEY, message.length);
                        return [2 /*return*/, message];
                }
            });
        });
    };
    HttpChannelStrategy.prototype.createChannel = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new channal_1.HttpChannel(id, function (content) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            this.handleMessage(content);
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    HttpChannelStrategy.prototype.handleMessage = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var deferred, messages;
            return __generator(this, function (_a) {
                if (!this.consumeMessage(message)) {
                    deferred = node_1.Context.getResponse().body;
                    messages = node_1.Context.getAttr(channel_protocol_1.CURRENT_RESPONSE_MESSAGE_REQUEST_KEY);
                    deferred.resolve(messages.length > 1 ? JSON.stringify(messages) : message);
                }
                return [2 /*return*/];
            });
        });
    };
    HttpChannelStrategy.prototype.consumeMessage = function (message) {
        var messageCount = node_1.Context.getAttr(channel_protocol_1.CURRENT_MESSAGE_COUNT_REQUEST_KEY);
        node_1.Context.setAttr(channel_protocol_1.CURRENT_MESSAGE_COUNT_REQUEST_KEY, messageCount - 1);
        var messages = node_1.Context.getAttr(channel_protocol_1.CURRENT_RESPONSE_MESSAGE_REQUEST_KEY);
        if (!messages) {
            messages = [];
            node_1.Context.setAttr(channel_protocol_1.CURRENT_RESPONSE_MESSAGE_REQUEST_KEY, messages);
        }
        messages.push(message);
        if (messageCount - 1 <= 0) {
            return false;
        }
        return true;
    };
    HttpChannelStrategy.prototype.support = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, node_1.Context.getCurrent() instanceof node_1.HttpContext];
            });
        });
    };
    HttpChannelStrategy = __decorate([
        core_1.Component(channel_protocol_1.ChannelStrategy)
    ], HttpChannelStrategy);
    return HttpChannelStrategy;
}());
exports.HttpChannelStrategy = HttpChannelStrategy;


/***/ }),

/***/ "./node_modules/@malagu/rpc/lib/node/channel/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/node/channel/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./channel-manager */ "./node_modules/@malagu/rpc/lib/node/channel/channel-manager.js"));
__export(__webpack_require__(/*! ./channel-protocol */ "./node_modules/@malagu/rpc/lib/node/channel/channel-protocol.js"));
__export(__webpack_require__(/*! ./channel-strategy */ "./node_modules/@malagu/rpc/lib/node/channel/channel-strategy.js"));
__export(__webpack_require__(/*! ./channel-middleware */ "./node_modules/@malagu/rpc/lib/node/channel/channel-middleware.js"));


/***/ }),

/***/ "./node_modules/@malagu/rpc/lib/node/handler/handler-adapter.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/node/handler/handler-adapter.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var channel_1 = __webpack_require__(/*! ../channel */ "./node_modules/@malagu/rpc/lib/node/channel/index.js");
var handler_protocol_1 = __webpack_require__(/*! ./handler-protocol */ "./node_modules/@malagu/rpc/lib/node/handler/handler-protocol.js");
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var web_1 = __webpack_require__(/*! @malagu/web */ "./node_modules/@malagu/web/lib/common/index.js");
var common_1 = __webpack_require__(/*! ../../common */ "./node_modules/@malagu/rpc/lib/common/index.js");
exports.PATH_PARMAS_ATTR = 'pathParams';
var RpcHandlerAdapter = /** @class */ (function () {
    function RpcHandlerAdapter() {
        this.priority = handler_protocol_1.RPC_HANDLER_ADAPTER_PRIORITY;
    }
    RpcHandlerAdapter.prototype.handle = function () {
        return this.channelManager.handleChannels();
    };
    RpcHandlerAdapter.prototype.canHandle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = this.requestMatcher).match;
                        return [4 /*yield*/, this.pathResolver.resolve(this.rpcPath)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    __decorate([
        core_1.Autowired(channel_1.ChannelManager),
        __metadata("design:type", channel_1.ChannelManager)
    ], RpcHandlerAdapter.prototype, "channelManager", void 0);
    __decorate([
        core_1.Autowired(node_1.RequestMatcher),
        __metadata("design:type", Object)
    ], RpcHandlerAdapter.prototype, "requestMatcher", void 0);
    __decorate([
        core_1.Autowired(web_1.PathResolver),
        __metadata("design:type", Object)
    ], RpcHandlerAdapter.prototype, "pathResolver", void 0);
    __decorate([
        core_1.Value(common_1.RPC_PATH),
        __metadata("design:type", String)
    ], RpcHandlerAdapter.prototype, "rpcPath", void 0);
    RpcHandlerAdapter = __decorate([
        core_1.Component(node_1.HandlerAdapter)
    ], RpcHandlerAdapter);
    return RpcHandlerAdapter;
}());
exports.RpcHandlerAdapter = RpcHandlerAdapter;


/***/ }),

/***/ "./node_modules/@malagu/rpc/lib/node/handler/handler-protocol.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/node/handler/handler-protocol.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RPC_HANDLER_ADAPTER_PRIORITY = 1000;


/***/ }),

/***/ "./node_modules/@malagu/rpc/lib/node/handler/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/node/handler/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./handler-adapter */ "./node_modules/@malagu/rpc/lib/node/handler/handler-adapter.js"));
__export(__webpack_require__(/*! ./handler-protocol */ "./node_modules/@malagu/rpc/lib/node/handler/handler-protocol.js"));


/***/ }),

/***/ "./node_modules/@malagu/rpc/lib/node/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/node/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./channel */ "./node_modules/@malagu/rpc/lib/node/channel/index.js"));
__export(__webpack_require__(/*! ./handler */ "./node_modules/@malagu/rpc/lib/node/handler/index.js"));


/***/ }),

/***/ "./node_modules/@malagu/rpc/lib/node/module.js":
/*!*****************************************************!*\
  !*** ./node_modules/@malagu/rpc/lib/node/module.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
__webpack_require__(/*! . */ "./node_modules/@malagu/rpc/lib/node/index.js");
exports.default = core_1.autoBind();


/***/ }),

/***/ "./node_modules/@malagu/web/lib/common/client/client-protocol.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/common/client/client-protocol.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RestOperations = Symbol('RestOperations');
exports.RestOperationsFactory = Symbol('RestOperationsFactory');


/***/ }),

/***/ "./node_modules/@malagu/web/lib/common/client/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/common/client/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./client-protocol */ "./node_modules/@malagu/web/lib/common/client/client-protocol.js"));
__export(__webpack_require__(/*! ./rest-operations-factory */ "./node_modules/@malagu/web/lib/common/client/rest-operations-factory.js"));


/***/ }),

/***/ "./node_modules/@malagu/web/lib/common/client/rest-operations-factory.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/common/client/rest-operations-factory.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_protocol_1 = __webpack_require__(/*! ./client-protocol */ "./node_modules/@malagu/web/lib/common/client/client-protocol.js");
var axios_1 = __webpack_require__(/*! axios */ "axios");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var DefaultRestOperationsFactory = /** @class */ (function () {
    function DefaultRestOperationsFactory() {
    }
    DefaultRestOperationsFactory.prototype.create = function () {
        return axios_1.default.create(this.clientConfig);
    };
    __decorate([
        core_1.Value('malagu.client.config'),
        __metadata("design:type", Object)
    ], DefaultRestOperationsFactory.prototype, "clientConfig", void 0);
    DefaultRestOperationsFactory = __decorate([
        core_1.Component(client_protocol_1.RestOperationsFactory)
    ], DefaultRestOperationsFactory);
    return DefaultRestOperationsFactory;
}());
exports.DefaultRestOperationsFactory = DefaultRestOperationsFactory;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/common/constants.js":
/*!**********************************************************!*\
  !*** ./node_modules/@malagu/web/lib/common/constants.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ENDPOINT = 'malagu.server.endpoint';
exports.SERVER_PATH = 'malagu.server.path';
exports.CORS = 'malagu.web.cors';
exports.AOP_POINTCUT = 'Endpoint';


/***/ }),

/***/ "./node_modules/@malagu/web/lib/common/http/http-headers.js":
/*!******************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/common/http/http-headers.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HttpHeaders = /** @class */ (function () {
    function HttpHeaders() {
    }
    /**
     * The HTTP {@code Accept} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.3.2">Section 5.3.2 of RFC 7231</a>
     */
    HttpHeaders.ACCEPT = 'Accept';
    /**
     * The HTTP {@code Accept-Charset} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.3.3">Section 5.3.3 of RFC 7231</a>
     */
    HttpHeaders.ACCEPT_CHARSET = 'Accept-Charset';
    /**
     * The HTTP {@code Accept-Encoding} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.3.4">Section 5.3.4 of RFC 7231</a>
     */
    HttpHeaders.ACCEPT_ENCODING = 'Accept-Encoding';
    /**
     * The HTTP {@code Accept-Language} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.3.5">Section 5.3.5 of RFC 7231</a>
     */
    HttpHeaders.ACCEPT_LANGUAGE = 'Accept-Language';
    /**
     * The HTTP {@code Accept-Ranges} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7233#section-2.3">Section 5.3.5 of RFC 7233</a>
     */
    HttpHeaders.ACCEPT_RANGES = 'Accept-Ranges';
    /**
     * The CORS {@code Access-Control-Allow-Credentials} response header field name.
     * @see <a href="http://www.w3.org/TR/cors/">CORS W3C recommendation</a>
     */
    HttpHeaders.ACCESS_CONTROL_ALLOW_CREDENTIALS = 'Access-Control-Allow-Credentials';
    /**
     * The CORS {@code Access-Control-Allow-Headers} response header field name.
     * @see <a href="http://www.w3.org/TR/cors/">CORS W3C recommendation</a>
     */
    HttpHeaders.ACCESS_CONTROL_ALLOW_HEADERS = 'Access-Control-Allow-Headers';
    /**
     * The CORS {@code Access-Control-Allow-Methods} response header field name.
     * @see <a href="http://www.w3.org/TR/cors/">CORS W3C recommendation</a>
     */
    HttpHeaders.ACCESS_CONTROL_ALLOW_METHODS = 'Access-Control-Allow-Methods';
    /**
     * The CORS {@code Access-Control-Allow-Origin} response header field name.
     * @see <a href="http://www.w3.org/TR/cors/">CORS W3C recommendation</a>
     */
    HttpHeaders.ACCESS_CONTROL_ALLOW_ORIGIN = 'Access-Control-Allow-Origin';
    /**
     * The CORS {@code Access-Control-Expose-Headers} response header field name.
     * @see <a href="http://www.w3.org/TR/cors/">CORS W3C recommendation</a>
     */
    HttpHeaders.ACCESS_CONTROL_EXPOSE_HEADERS = 'Access-Control-Expose-Headers';
    /**
     * The CORS {@code Access-Control-Max-Age} response header field name.
     * @see <a href="http://www.w3.org/TR/cors/">CORS W3C recommendation</a>
     */
    HttpHeaders.ACCESS_CONTROL_MAX_AGE = 'Access-Control-Max-Age';
    /**
     * The CORS {@code Access-Control-Request-Headers} request header field name.
     * @see <a href="http://www.w3.org/TR/cors/">CORS W3C recommendation</a>
     */
    HttpHeaders.ACCESS_CONTROL_REQUEST_HEADERS = 'Access-Control-Request-Headers';
    /**
     * The CORS {@code Access-Control-Request-Method} request header field name.
     * @see <a href="http://www.w3.org/TR/cors/">CORS W3C recommendation</a>
     */
    HttpHeaders.ACCESS_CONTROL_REQUEST_METHOD = 'Access-Control-Request-Method';
    /**
     * The HTTP {@code Age} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7234#section-5.1">Section 5.1 of RFC 7234</a>
     */
    HttpHeaders.AGE = 'Age';
    /**
     * The HTTP {@code Allow} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-7.4.1">Section 7.4.1 of RFC 7231</a>
     */
    HttpHeaders.ALLOW = 'Allow';
    /**
     * The HTTP {@code Authorization} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7235#section-4.2">Section 4.2 of RFC 7235</a>
     */
    HttpHeaders.AUTHORIZATION = 'Authorization';
    /**
     * The HTTP {@code Cache-Control} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7234#section-5.2">Section 5.2 of RFC 7234</a>
     */
    HttpHeaders.CACHE_CONTROL = 'Cache-Control';
    /**
     * The HTTP {@code Connection} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7230#section-6.1">Section 6.1 of RFC 7230</a>
     */
    HttpHeaders.CONNECTION = 'Connection';
    /**
     * The HTTP {@code Content-Encoding} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-3.1.2.2">Section 3.1.2.2 of RFC 7231</a>
     */
    HttpHeaders.CONTENT_ENCODING = 'Content-Encoding';
    /**
     * The HTTP {@code Content-Disposition} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc6266">RFC 6266</a>
     */
    HttpHeaders.CONTENT_DISPOSITION = 'Content-Disposition';
    /**
     * The HTTP {@code Content-Language} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-3.1.3.2">Section 3.1.3.2 of RFC 7231</a>
     */
    HttpHeaders.CONTENT_LANGUAGE = 'Content-Language';
    /**
     * The HTTP {@code Content-Length} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7230#section-3.3.2">Section 3.3.2 of RFC 7230</a>
     */
    HttpHeaders.CONTENT_LENGTH = 'Content-Length';
    /**
     * The HTTP {@code Content-Location} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-3.1.4.2">Section 3.1.4.2 of RFC 7231</a>
     */
    HttpHeaders.CONTENT_LOCATION = 'Content-Location';
    /**
     * The HTTP {@code Content-Range} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7233#section-4.2">Section 4.2 of RFC 7233</a>
     */
    HttpHeaders.CONTENT_RANGE = 'Content-Range';
    /**
     * The HTTP {@code Content-Type} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-3.1.1.5">Section 3.1.1.5 of RFC 7231</a>
     */
    HttpHeaders.CONTENT_TYPE = 'Content-Type';
    /**
     * The HTTP {@code Cookie} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc2109#section-4.3.4">Section 4.3.4 of RFC 2109</a>
     */
    HttpHeaders.COOKIE = 'Cookie';
    /**
     * The HTTP {@code Date} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-7.1.1.2">Section 7.1.1.2 of RFC 7231</a>
     */
    HttpHeaders.DATE = 'Date';
    /**
     * The HTTP {@code ETag} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7232#section-2.3">Section 2.3 of RFC 7232</a>
     */
    HttpHeaders.ETAG = 'ETag';
    /**
     * The HTTP {@code Expect} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.1.1">Section 5.1.1 of RFC 7231</a>
     */
    HttpHeaders.EXPECT = 'Expect';
    /**
     * The HTTP {@code Expires} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7234#section-5.3">Section 5.3 of RFC 7234</a>
     */
    HttpHeaders.EXPIRES = 'Expires';
    /**
     * The HTTP {@code From} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.5.1">Section 5.5.1 of RFC 7231</a>
     */
    HttpHeaders.FROM = 'From';
    /**
     * The HTTP {@code Host} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7230#section-5.4">Section 5.4 of RFC 7230</a>
     */
    HttpHeaders.HOST = 'Host';
    /**
     * The HTTP {@code If-Match} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7232#section-3.1">Section 3.1 of RFC 7232</a>
     */
    HttpHeaders.IF_MATCH = 'If-Match';
    /**
     * The HTTP {@code If-Modified-Since} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7232#section-3.3">Section 3.3 of RFC 7232</a>
     */
    HttpHeaders.IF_MODIFIED_SINCE = 'If-Modified-Since';
    /**
     * The HTTP {@code If-None-Match} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7232#section-3.2">Section 3.2 of RFC 7232</a>
     */
    HttpHeaders.IF_NONE_MATCH = 'If-None-Match';
    /**
     * The HTTP {@code If-Range} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7233#section-3.2">Section 3.2 of RFC 7233</a>
     */
    HttpHeaders.IF_RANGE = 'If-Range';
    /**
     * The HTTP {@code If-Unmodified-Since} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7232#section-3.4">Section 3.4 of RFC 7232</a>
     */
    HttpHeaders.IF_UNMODIFIED_SINCE = 'If-Unmodified-Since';
    /**
     * The HTTP {@code Last-Modified} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7232#section-2.2">Section 2.2 of RFC 7232</a>
     */
    HttpHeaders.LAST_MODIFIED = 'Last-Modified';
    /**
     * The HTTP {@code Link} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc5988">RFC 5988</a>
     */
    HttpHeaders.LINK = 'Link';
    /**
     * The HTTP {@code Location} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-7.1.2">Section 7.1.2 of RFC 7231</a>
     */
    HttpHeaders.LOCATION = 'Location';
    /**
     * The HTTP {@code Max-Forwards} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.1.2">Section 5.1.2 of RFC 7231</a>
     */
    HttpHeaders.MAX_FORWARDS = 'Max-Forwards';
    /**
     * The HTTP {@code Origin} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc6454">RFC 6454</a>
     */
    HttpHeaders.ORIGIN = 'Origin';
    /**
     * The HTTP {@code Pragma} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7234#section-5.4">Section 5.4 of RFC 7234</a>
     */
    HttpHeaders.PRAGMA = 'Pragma';
    /**
     * The HTTP {@code Proxy-Authenticate} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7235#section-4.3">Section 4.3 of RFC 7235</a>
     */
    HttpHeaders.PROXY_AUTHENTICATE = 'Proxy-Authenticate';
    /**
     * The HTTP {@code Proxy-Authorization} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7235#section-4.4">Section 4.4 of RFC 7235</a>
     */
    HttpHeaders.PROXY_AUTHORIZATION = 'Proxy-Authorization';
    /**
     * The HTTP {@code Range} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7233#section-3.1">Section 3.1 of RFC 7233</a>
     */
    HttpHeaders.RANGE = 'Range';
    /**
     * The HTTP {@code Referer} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.5.2">Section 5.5.2 of RFC 7231</a>
     */
    HttpHeaders.REFERER = 'Referer';
    /**
     * The HTTP {@code Retry-After} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-7.1.3">Section 7.1.3 of RFC 7231</a>
     */
    HttpHeaders.RETRY_AFTER = 'Retry-After';
    /**
     * The HTTP {@code Server} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-7.4.2">Section 7.4.2 of RFC 7231</a>
     */
    HttpHeaders.SERVER = 'Server';
    /**
     * The HTTP {@code Set-Cookie} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc2109#section-4.2.2">Section 4.2.2 of RFC 2109</a>
     */
    HttpHeaders.SET_COOKIE = 'Set-Cookie';
    /**
     * The HTTP {@code Set-Cookie2} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc2965">RFC 2965</a>
     */
    HttpHeaders.SET_COOKIE2 = 'Set-Cookie2';
    /**
     * The HTTP {@code TE} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7230#section-4.3">Section 4.3 of RFC 7230</a>
     */
    HttpHeaders.TE = 'TE';
    /**
     * The HTTP {@code Trailer} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7230#section-4.4">Section 4.4 of RFC 7230</a>
     */
    HttpHeaders.TRAILER = 'Trailer';
    /**
     * The HTTP {@code Transfer-Encoding} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7230#section-3.3.1">Section 3.3.1 of RFC 7230</a>
     */
    HttpHeaders.TRANSFER_ENCODING = 'Transfer-Encoding';
    /**
     * The HTTP {@code Upgrade} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7230#section-6.7">Section 6.7 of RFC 7230</a>
     */
    HttpHeaders.UPGRADE = 'Upgrade';
    /**
     * The HTTP {@code User-Agent} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-5.5.3">Section 5.5.3 of RFC 7231</a>
     */
    HttpHeaders.USER_AGENT = 'User-Agent';
    /**
     * The HTTP {@code Vary} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7231#section-7.1.4">Section 7.1.4 of RFC 7231</a>
     */
    HttpHeaders.VARY = 'Vary';
    /**
     * The HTTP {@code Via} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7230#section-5.7.1">Section 5.7.1 of RFC 7230</a>
     */
    HttpHeaders.VIA = 'Via';
    /**
     * The HTTP {@code Warning} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7234#section-5.5">Section 5.5 of RFC 7234</a>
     */
    HttpHeaders.WARNING = 'Warning';
    /**
     * The HTTP {@code WWW-Authenticate} header field name.
     * @see <a href="https://tools.ietf.org/html/rfc7235#section-4.1">Section 4.1 of RFC 7235</a>
     */
    HttpHeaders.WWW_AUTHENTICATE = 'WWW-Authenticate';
    HttpHeaders.X_REQUESTED_WITH = 'X-Requested-With';
    return HttpHeaders;
}());
exports.HttpHeaders = HttpHeaders;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/common/http/http-protocol.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/common/http/http-protocol.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["CONTINUE"] = 100] = "CONTINUE";
    HttpStatus[HttpStatus["SWITCHING_PROTOCOLS"] = 101] = "SWITCHING_PROTOCOLS";
    HttpStatus[HttpStatus["PROCESSING"] = 102] = "PROCESSING";
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["CREATED"] = 201] = "CREATED";
    HttpStatus[HttpStatus["ACCEPTED"] = 202] = "ACCEPTED";
    HttpStatus[HttpStatus["NON_AUTHORITATIVE_INFORMATION"] = 203] = "NON_AUTHORITATIVE_INFORMATION";
    HttpStatus[HttpStatus["NO_CONTENT"] = 204] = "NO_CONTENT";
    HttpStatus[HttpStatus["RESET_CONTENT"] = 205] = "RESET_CONTENT";
    HttpStatus[HttpStatus["PARTIAL_CONTENT"] = 206] = "PARTIAL_CONTENT";
    HttpStatus[HttpStatus["AMBIGUOUS"] = 300] = "AMBIGUOUS";
    HttpStatus[HttpStatus["MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
    HttpStatus[HttpStatus["FOUND"] = 302] = "FOUND";
    HttpStatus[HttpStatus["SEE_OTHER"] = 303] = "SEE_OTHER";
    HttpStatus[HttpStatus["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
    HttpStatus[HttpStatus["TEMPORARY_REDIRECT"] = 307] = "TEMPORARY_REDIRECT";
    HttpStatus[HttpStatus["PERMANENT_REDIRECT"] = 308] = "PERMANENT_REDIRECT";
    HttpStatus[HttpStatus["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatus[HttpStatus["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpStatus[HttpStatus["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
    HttpStatus[HttpStatus["FORBIDDEN"] = 403] = "FORBIDDEN";
    HttpStatus[HttpStatus["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatus[HttpStatus["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
    HttpStatus[HttpStatus["NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
    HttpStatus[HttpStatus["PROXY_AUTHENTICATION_REQUIRED"] = 407] = "PROXY_AUTHENTICATION_REQUIRED";
    HttpStatus[HttpStatus["REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
    HttpStatus[HttpStatus["CONFLICT"] = 409] = "CONFLICT";
    HttpStatus[HttpStatus["GONE"] = 410] = "GONE";
    HttpStatus[HttpStatus["LENGTH_REQUIRED"] = 411] = "LENGTH_REQUIRED";
    HttpStatus[HttpStatus["PRECONDITION_FAILED"] = 412] = "PRECONDITION_FAILED";
    HttpStatus[HttpStatus["PAYLOAD_TOO_LARGE"] = 413] = "PAYLOAD_TOO_LARGE";
    HttpStatus[HttpStatus["URI_TOO_LONG"] = 414] = "URI_TOO_LONG";
    HttpStatus[HttpStatus["UNSUPPORTED_MEDIA_TYPE"] = 415] = "UNSUPPORTED_MEDIA_TYPE";
    HttpStatus[HttpStatus["REQUESTED_RANGE_NOT_SATISFIABLE"] = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE";
    HttpStatus[HttpStatus["EXPECTATION_FAILED"] = 417] = "EXPECTATION_FAILED";
    HttpStatus[HttpStatus["I_AM_A_TEAPOT"] = 418] = "I_AM_A_TEAPOT";
    HttpStatus[HttpStatus["UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
    HttpStatus[HttpStatus["FAILED_DEPENDENCY"] = 424] = "FAILED_DEPENDENCY";
    HttpStatus[HttpStatus["TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
    HttpStatus[HttpStatus["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    HttpStatus[HttpStatus["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
    HttpStatus[HttpStatus["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
    HttpStatus[HttpStatus["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
    HttpStatus[HttpStatus["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
    HttpStatus[HttpStatus["HTTP_VERSION_NOT_SUPPORTED"] = 505] = "HTTP_VERSION_NOT_SUPPORTED";
    HttpStatus[HttpStatus["VARIANT_ALSO_NEGOTIATES"] = 506] = "VARIANT_ALSO_NEGOTIATES";
    HttpStatus[HttpStatus["INSUFFICIENT_STORAGE"] = 507] = "INSUFFICIENT_STORAGE";
    HttpStatus[HttpStatus["LOOP_DETECTED"] = 508] = "LOOP_DETECTED";
    HttpStatus[HttpStatus["BANDWIDTH_LIMIT_EXCEEDED"] = 509] = "BANDWIDTH_LIMIT_EXCEEDED";
    HttpStatus[HttpStatus["NOT_EXTENDED"] = 510] = "NOT_EXTENDED";
    HttpStatus[HttpStatus["NETWORK_AUTHENTICATION_REQUIRED"] = 511] = "NETWORK_AUTHENTICATION_REQUIRED";
    HttpStatus["CONTINUE_REASON_PHRASE"] = "Continue";
    HttpStatus["SWITCHING_PROTOCOLS_REASON_PHRASE"] = "Switching Protocols";
    HttpStatus["PROCESSING_REASON_PHRASE"] = "Processing";
    HttpStatus["CHECKPOINT_REASON_PHRASE"] = "Checkpoint";
    // 2xx Success
    HttpStatus["OK_REASON_PHRASE"] = "OK";
    HttpStatus["CREATED_REASON_PHRASE"] = "Created";
    HttpStatus["ACCEPTED_REASON_PHRASE"] = "Accepted";
    HttpStatus["NON_AUTHORITATIVE_INFORMATION_REASON_PHRASE"] = "Non-Authoritative Information";
    HttpStatus["NO_CONTENT_REASON_PHRASE"] = "No Content";
    HttpStatus["RESET_CONTENT_REASON_PHRASE"] = "Reset Content";
    HttpStatus["PARTIAL_CONTENT_REASON_PHRASE"] = "Partial Content";
    HttpStatus["MULTI_STATUS_REASON_PHRASE"] = "Multi-Status";
    HttpStatus["ALREADY_REPORTED_REASON_PHRASE"] = "Already Reported";
    HttpStatus["IM_USED_REASON_PHRASE"] = "IM Used";
    // 3xx Redirection
    HttpStatus["MULTIPLE_CHOICES_REASON_PHRASE"] = "Multiple Choices";
    HttpStatus["MOVED_PERMANENTLY_REASON_PHRASE"] = "Moved Permanently";
    HttpStatus["FOUND_REASON_PHRASE"] = "Found";
    HttpStatus["MOVED_TEMPORARILY_REASON_PHRASE"] = "Moved Temporarily";
    HttpStatus["SEE_OTHER_REASON_PHRASE"] = "See Other";
    HttpStatus["NOT_MODIFIED_REASON_PHRASE"] = "Not Modified";
    HttpStatus["USE_PROXY_REASON_PHRASE"] = "Use Proxy";
    HttpStatus["TEMPORARY_REDIRECT_REASON_PHRASE"] = "Temporary Redirect";
    HttpStatus["PERMANENT_REDIRECT_REASON_PHRASE"] = "Permanent Redirect";
    // --- 4xx Client Error ---
    HttpStatus["BAD_REQUEST_REASON_PHRASE"] = "Bad Request";
    HttpStatus["UNAUTHORIZED_REASON_PHRASE"] = "Unauthorized";
    HttpStatus["PAYMENT_REQUIRED_REASON_PHRASE"] = "Payment Required";
    HttpStatus["FORBIDDEN_REASON_PHRASE"] = "Forbidden";
    HttpStatus["NOT_FOUND_REASON_PHRASE"] = "Not Found";
    HttpStatus["METHOD_NOT_ALLOWED_REASON_PHRASE"] = "Method Not Allowed";
    HttpStatus["NOT_ACCEPTABLE_REASON_PHRASE"] = "Not Acceptable";
    HttpStatus["PROXY_AUTHENTICATION_REQUIRED_REASON_PHRASE"] = "Proxy Authentication Required";
    HttpStatus["REQUEST_TIMEOUT_REASON_PHRASE"] = "Request Timeout";
    HttpStatus["CONFLICT_REASON_PHRASE"] = "Conflict";
    HttpStatus["GONE_REASON_PHRASE"] = "Gone";
    HttpStatus["LENGTH_REQUIRED_REASON_PHRASE"] = "Length Required";
    HttpStatus["PRECONDITION_FAILED_REASON_PHRASE"] = "Precondition Failed";
    HttpStatus["PAYLOAD_TOO_LARGE_REASON_PHRASE"] = "Payload Too Large";
    HttpStatus["REQUEST_ENTITY_TOO_LARGE_REASON_PHRASE"] = "Request Entity Too Large";
    HttpStatus["URI_TOO_LONG_REASON_PHRASE"] = "URI Too Long";
    HttpStatus["REQUEST_URI_TOO_LONG_REASON_PHRASE"] = "Request-URI Too Long";
    HttpStatus["UNSUPPORTED_MEDIA_TYPE_REASON_PHRASE"] = "Unsupported Media Type";
    HttpStatus["REQUESTED_RANGE_NOT_SATISFIABLE_REASON_PHRASE"] = "Requested range not satisfiable";
    HttpStatus["EXPECTATION_FAILED_REASON_PHRASE"] = "Expectation Failed";
    HttpStatus["I_AM_A_TEAPOT_REASON_PHRASE"] = "I'm a teapot";
    HttpStatus["INSUFFICIENT_SPACE_ON_RESOURCE_REASON_PHRASE"] = "Insufficient Space On Resource";
    HttpStatus["METHOD_FAILURE_REASON_PHRASE"] = "Method Failure";
    HttpStatus["DESTINATION_LOCKED_REASON_PHRASE"] = "Destination Locked";
    HttpStatus["UNPROCESSABLE_ENTITY_REASON_PHRASE"] = "Unprocessable Entity";
    HttpStatus["LOCKED_REASON_PHRASE"] = "Locked";
    HttpStatus["FAILED_DEPENDENCY_REASON_PHRASE"] = "Failed Dependency";
    HttpStatus["UPGRADE_REQUIRED_REASON_PHRASE"] = "Upgrade Required";
    HttpStatus["PRECONDITION_REQUIRED_REASON_PHRASE"] = "Precondition Required";
    HttpStatus["TOO_MANY_REQUESTS_REASON_PHRASE"] = "Too Many Requests";
    HttpStatus["REQUEST_HEADER_FIELDS_TOO_LARGE_REASON_PHRASE"] = "Request Header Fields Too Large";
    HttpStatus["UNAVAILABLE_FOR_LEGAL_REASONS_REASON_PHRASE"] = "Unavailable For Legal Reasons";
    // --- 5xx Server Error ---
    HttpStatus["INTERNAL_SERVER_ERROR_REASON_PHRASE"] = "Internal Server Error";
    HttpStatus["NOT_IMPLEMENTED_REASON_PHRASE"] = "Not Implemented";
    HttpStatus["BAD_GATEWAY_REASON_PHRASE"] = "Bad Gateway";
    HttpStatus["SERVICE_UNAVAILABLE_REASON_PHRASE"] = "Service Unavailable";
    HttpStatus["GATEWAY_TIMEOUT_REASON_PHRASE"] = "Gateway Timeout";
    HttpStatus["HTTP_VERSION_NOT_SUPPORTED_REASON_PHRASE"] = "HTTP Version not supported";
    HttpStatus["VARIANT_ALSO_NEGOTIATES_REASON_PHRASE"] = "Variant Also Negotiates";
    HttpStatus["INSUFFICIENT_STORAGE_REASON_PHRASE"] = "Insufficient Storage";
    HttpStatus["LOOP_DETECTED_REASON_PHRASE"] = "Loop Detected";
    HttpStatus["BANDWIDTH_LIMIT_EXCEEDED_REASON_PHRASE"] = "Bandwidth Limit Exceeded";
    HttpStatus["NOT_EXTENDED_REASON_PHRASE"] = "Not Extended";
})(HttpStatus = exports.HttpStatus || (exports.HttpStatus = {}));
var MediaType;
(function (MediaType) {
    MediaType["ALL"] = "*/*";
    MediaType["APPLICATION_ATOM_XML"] = "application/atom+xml";
    MediaType["APPLICATION_FORM_URLENCODED"] = "application/x-www-form-urlencoded";
    MediaType["APPLICATION_JSON"] = "application/json";
    MediaType["APPLICATION_JSON_UTF8"] = "application/json;charset=UTF-8";
    MediaType["APPLICATION_OCTET_STREAM"] = "application/octet-stream";
    MediaType["APPLICATION_PDF"] = "application/pdf";
    MediaType["APPLICATION_PROBLEM_JSON"] = "application/problem+json";
    MediaType["APPLICATION_PROBLEM_JSON_UTF8"] = "application/problem+json;charset=UTF-8";
    MediaType["APPLICATION_PROBLEM_XML"] = "application/problem+xml";
    MediaType["APPLICATION_RSS_XML"] = "application/rss+xml";
    MediaType["APPLICATION_STREAM_JSON"] = "application/stream+json";
    MediaType["APPLICATION_XHTML_XML"] = "application/xhtml+xml";
    MediaType["APPLICATION_XML"] = "application/xml";
    MediaType["IMAGE_GIF"] = "image/gif";
    MediaType["IMAGE_JPEG"] = "image/jpeg";
    MediaType["IMAGE_PNG"] = "image/png";
    MediaType["MULTIPART_FORM_DATA"] = "multipart/form-data";
    MediaType["TEXT_EVENT_STREAM"] = "text/event-stream";
    MediaType["TEXT_HTML"] = "text/html";
    MediaType["TEXT_MARKDOWN"] = "text/markdown";
    MediaType["TEXT_PLAIN"] = "text/plain";
    MediaType["TEXT_XML"] = "text/xml";
})(MediaType = exports.MediaType || (exports.MediaType = {}));
var HttpMethod;
(function (HttpMethod) {
    HttpMethod["GET"] = "GET";
    HttpMethod["HEAD"] = "HEAD";
    HttpMethod["POST"] = "POST";
    HttpMethod["PUT"] = "PUT";
    HttpMethod["PATCH"] = "PATCH";
    HttpMethod["DELETE"] = "DELETE";
    HttpMethod["OPTIONS"] = "OPTIONS";
    HttpMethod["TRACE"] = "TRACE";
})(HttpMethod = exports.HttpMethod || (exports.HttpMethod = {}));
exports.XML_HTTP_REQUEST = 'XMLHttpRequest';


/***/ }),

/***/ "./node_modules/@malagu/web/lib/common/http/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@malagu/web/lib/common/http/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./http-protocol */ "./node_modules/@malagu/web/lib/common/http/http-protocol.js"));
__export(__webpack_require__(/*! ./http-headers */ "./node_modules/@malagu/web/lib/common/http/http-headers.js"));


/***/ }),

/***/ "./node_modules/@malagu/web/lib/common/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@malagu/web/lib/common/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./resolver */ "./node_modules/@malagu/web/lib/common/resolver/index.js"));
__export(__webpack_require__(/*! ./constants */ "./node_modules/@malagu/web/lib/common/constants.js"));
__export(__webpack_require__(/*! ./utils */ "./node_modules/@malagu/web/lib/common/utils/index.js"));
__export(__webpack_require__(/*! ./http */ "./node_modules/@malagu/web/lib/common/http/index.js"));
__export(__webpack_require__(/*! ./client */ "./node_modules/@malagu/web/lib/common/client/index.js"));


/***/ }),

/***/ "./node_modules/@malagu/web/lib/common/module.js":
/*!*******************************************************!*\
  !*** ./node_modules/@malagu/web/lib/common/module.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var client_1 = __webpack_require__(/*! ./client */ "./node_modules/@malagu/web/lib/common/client/index.js");
__webpack_require__(/*! ./resolver */ "./node_modules/@malagu/web/lib/common/resolver/index.js");
exports.default = core_1.autoBind(function (bind) {
    bind(client_1.RestOperations).toDynamicValue(function (ctx) {
        var factory = ctx.container.get(client_1.RestOperationsFactory);
        return factory.create();
    }).inSingletonScope();
});


/***/ }),

/***/ "./node_modules/@malagu/web/lib/common/resolver/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/common/resolver/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./resolver-protocol */ "./node_modules/@malagu/web/lib/common/resolver/resolver-protocol.js"));
__export(__webpack_require__(/*! ./path-resolver */ "./node_modules/@malagu/web/lib/common/resolver/path-resolver.js"));


/***/ }),

/***/ "./node_modules/@malagu/web/lib/common/resolver/path-resolver.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/common/resolver/path-resolver.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var resolver_protocol_1 = __webpack_require__(/*! ./resolver-protocol */ "./node_modules/@malagu/web/lib/common/resolver/resolver-protocol.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var urlJoin = __webpack_require__(/*! url-join */ "url-join");
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/web/lib/common/constants.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/@malagu/web/lib/common/utils/index.js");
var PathResolverImpl = /** @class */ (function () {
    function PathResolverImpl() {
    }
    PathResolverImpl.prototype.resolve = function () {
        var parts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            parts[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var _a, first, rest;
            return __generator(this, function (_b) {
                _a = __read(parts.filter(function (v) { return !!v; })), first = _a[0], rest = _a.slice(1);
                if (!first) {
                    return [2 /*return*/, this.serverPath];
                }
                else if (utils_1.UrlUtil.isAbsoluteUrl(first)) {
                    return [2 /*return*/, urlJoin.apply(void 0, __spread([first], rest))];
                }
                else if (first.startsWith(this.serverPath)) {
                    return [2 /*return*/, urlJoin(__spread([first], rest))];
                }
                return [2 /*return*/, urlJoin.apply(void 0, __spread([this.serverPath], __spread([first], rest)))];
            });
        });
    };
    __decorate([
        core_1.Value(constants_1.SERVER_PATH),
        __metadata("design:type", String)
    ], PathResolverImpl.prototype, "serverPath", void 0);
    PathResolverImpl = __decorate([
        core_1.Component(resolver_protocol_1.PathResolver)
    ], PathResolverImpl);
    return PathResolverImpl;
}());
exports.PathResolverImpl = PathResolverImpl;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/common/resolver/resolver-protocol.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/common/resolver/resolver-protocol.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PathResolver = Symbol('PathResolver');


/***/ }),

/***/ "./node_modules/@malagu/web/lib/common/utils/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/common/utils/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./url-util */ "./node_modules/@malagu/web/lib/common/utils/url-util.js"));


/***/ }),

/***/ "./node_modules/@malagu/web/lib/common/utils/url-util.js":
/*!***************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/common/utils/url-util.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UrlUtil;
(function (UrlUtil) {
    function isValidRedirectUrl(url) {
        return url && (url.startsWith('/') || isAbsoluteUrl(url));
    }
    UrlUtil.isValidRedirectUrl = isValidRedirectUrl;
    /**
     * Decides if a URL is absolute based on whether it contains a valid scheme name, as
     * defined in RFC 1738.
     */
    function isAbsoluteUrl(url) {
        if (!url) {
            return false;
        }
        return /^[a-z0-9.+-]+:\/\/.*/i.test(url);
    }
    UrlUtil.isAbsoluteUrl = isAbsoluteUrl;
})(UrlUtil = exports.UrlUtil || (exports.UrlUtil = {}));


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/application/dev-application-entry.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/application/dev-application-entry.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! @malagu/core/lib/common/container/dynamic-container */ "./node_modules/@malagu/core/lib/common/container/dynamic-container.js"));
__export(__webpack_require__(/*! @malagu/core/lib/common/container/container-provider */ "./node_modules/@malagu/core/lib/common/container/container-provider.js"));
__export(__webpack_require__(/*! ../context */ "./node_modules/@malagu/web/lib/node/context.js"));
__export(__webpack_require__(/*! ../dispatcher */ "./node_modules/@malagu/web/lib/node/dispatcher/index.js"));
__export(__webpack_require__(/*! @malagu/core/lib/common/application */ "./node_modules/@malagu/core/lib/common/application/index.js"));


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/context.js":
/*!******************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/context.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var requestContext = __webpack_require__(/*! express-http-context */ "express-http-context");
// eslint-disable-next-line no-shadow
var AttributeScope;
(function (AttributeScope) {
    AttributeScope[AttributeScope["App"] = 0] = "App";
    AttributeScope[AttributeScope["Request"] = 1] = "Request";
    AttributeScope[AttributeScope["Session"] = 2] = "Session";
})(AttributeScope = exports.AttributeScope || (exports.AttributeScope = {}));
exports.CURRENT_CONTEXT_REQUEST_KEY = 'CurrentContextRequest';
exports.CURRENT_COOKIES_REQUEST_KEY = 'CurrentCookiesRequest';
exports.CURRENT_SESSION_REQUEST_KEY = 'CurrentSessionRequest';
exports.CURRENT_TRACE_ID_REQUEST_KEY = 'CurrentTraceIdRequest';
exports.CURRENT_SKIP_AUTO_END_REQUEST_KEY = 'CurrentSkipAutoEndRequest';
var appAttrs = new Map();
var Context;
(function (Context) {
    function run(fn) {
        requestContext.ns.run(fn);
    }
    Context.run = run;
    function setCurrent(context) {
        requestContext.set(exports.CURRENT_CONTEXT_REQUEST_KEY, context);
    }
    Context.setCurrent = setCurrent;
    function getCurrent() {
        return requestContext.get(exports.CURRENT_CONTEXT_REQUEST_KEY);
    }
    Context.getCurrent = getCurrent;
    function getRequest() {
        return getCurrent().request;
    }
    Context.getRequest = getRequest;
    function getResponse() {
        return getCurrent().response;
    }
    Context.getResponse = getResponse;
    function getCookies() {
        return requestContext.get(exports.CURRENT_COOKIES_REQUEST_KEY);
    }
    Context.getCookies = getCookies;
    function setCookies(cookies) {
        requestContext.set(exports.CURRENT_COOKIES_REQUEST_KEY, cookies);
    }
    Context.setCookies = setCookies;
    function getSession() {
        return requestContext.get(exports.CURRENT_SESSION_REQUEST_KEY);
    }
    Context.getSession = getSession;
    function setSession(session) {
        requestContext.set(exports.CURRENT_SESSION_REQUEST_KEY, session);
    }
    Context.setSession = setSession;
    function setTraceId(traceId) {
        requestContext.set(exports.CURRENT_TRACE_ID_REQUEST_KEY, traceId);
    }
    Context.setTraceId = setTraceId;
    function getTraceId() {
        return requestContext.get(exports.CURRENT_TRACE_ID_REQUEST_KEY);
    }
    Context.getTraceId = getTraceId;
    function setSkipAutoEnd(skipAutoEnd) {
        requestContext.set(exports.CURRENT_SKIP_AUTO_END_REQUEST_KEY, skipAutoEnd);
    }
    Context.setSkipAutoEnd = setSkipAutoEnd;
    function isSkipAutoEnd() {
        return !!requestContext.get(exports.CURRENT_SKIP_AUTO_END_REQUEST_KEY);
    }
    Context.isSkipAutoEnd = isSkipAutoEnd;
    function setAttr(key, value, scope) {
        if (scope === void 0) { scope = AttributeScope.Request; }
        if (scope === AttributeScope.Request) {
            requestContext.set(key, value);
        }
        else if (scope === AttributeScope.Session) {
            getSession()[key] = value;
        }
        else {
            appAttrs.set(key, value);
        }
    }
    Context.setAttr = setAttr;
    function getAttr(key, scope) {
        if (scope) {
            if (scope === AttributeScope.Request) {
                return requestContext.get(key);
            }
            else if (scope === AttributeScope.Session) {
                return getSession()[key];
            }
            else {
                return appAttrs.get(key);
            }
        }
        else {
            var value = requestContext.get(key);
            value = value ? value : getSession()[key];
            return value ? value : appAttrs.get(key);
        }
    }
    Context.getAttr = getAttr;
})(Context = exports.Context || (exports.Context = {}));
var HttpContext = /** @class */ (function () {
    function HttpContext(request, response) {
        this.request = request;
        this.response = response;
    }
    return HttpContext;
}());
exports.HttpContext = HttpContext;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/cookies/cookies-factory.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/cookies/cookies-factory.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var context_1 = __webpack_require__(/*! ../context */ "./node_modules/@malagu/web/lib/node/context.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var _Cookies = __webpack_require__(/*! cookies */ "cookies");
var CookiesFactory = /** @class */ (function () {
    function CookiesFactory() {
    }
    CookiesFactory.prototype.create = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cookies;
            return __generator(this, function (_a) {
                cookies = new _Cookies(context_1.Context.getRequest(), context_1.Context.getResponse(), {
                    keys: this.keys,
                    secure: this.secure
                });
                return [2 /*return*/, cookies];
            });
        });
    };
    __decorate([
        core_1.Value('malagu.cookies.keys'),
        __metadata("design:type", Array)
    ], CookiesFactory.prototype, "keys", void 0);
    __decorate([
        core_1.Value('malagu.cookies.secure'),
        __metadata("design:type", Boolean)
    ], CookiesFactory.prototype, "secure", void 0);
    CookiesFactory = __decorate([
        core_1.Component()
    ], CookiesFactory);
    return CookiesFactory;
}());
exports.CookiesFactory = CookiesFactory;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/cookies/cookies-middleware.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/cookies/cookies-middleware.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var middleware_1 = __webpack_require__(/*! ../middleware */ "./node_modules/@malagu/web/lib/node/middleware/index.js");
var context_1 = __webpack_require__(/*! ../context */ "./node_modules/@malagu/web/lib/node/context.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var cookies_factory_1 = __webpack_require__(/*! ./cookies-factory */ "./node_modules/@malagu/web/lib/node/cookies/cookies-factory.js");
var cookies_protocol_1 = __webpack_require__(/*! ./cookies-protocol */ "./node_modules/@malagu/web/lib/node/cookies/cookies-protocol.js");
var CookiesMiddleware = /** @class */ (function () {
    function CookiesMiddleware() {
        this.priority = cookies_protocol_1.COOKIES_MIDDLEWARE_PRIORITY;
    }
    CookiesMiddleware.prototype.handle = function (ctx, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!ctx.request) return [3 /*break*/, 2];
                        _b = (_a = context_1.Context).setCookies;
                        return [4 /*yield*/, this.cookiesFactory.create()];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        _c.label = 2;
                    case 2: return [4 /*yield*/, next()];
                    case 3:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        core_1.Autowired(cookies_factory_1.CookiesFactory),
        __metadata("design:type", cookies_factory_1.CookiesFactory)
    ], CookiesMiddleware.prototype, "cookiesFactory", void 0);
    CookiesMiddleware = __decorate([
        core_1.Component(middleware_1.Middleware)
    ], CookiesMiddleware);
    return CookiesMiddleware;
}());
exports.CookiesMiddleware = CookiesMiddleware;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/cookies/cookies-protocol.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/cookies/cookies-protocol.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__(/*! ../http */ "./node_modules/@malagu/web/lib/node/http/index.js");
exports.COOKIES_MIDDLEWARE_PRIORITY = http_1.HTTP_MIDDLEWARE_PRIORITY - 100;
exports.Cookies = Symbol('Cookies');


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/cookies/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/cookies/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./cookies-protocol */ "./node_modules/@malagu/web/lib/node/cookies/cookies-protocol.js"));
__export(__webpack_require__(/*! ./cookies-middleware */ "./node_modules/@malagu/web/lib/node/cookies/cookies-middleware.js"));
__export(__webpack_require__(/*! ./cookies-factory */ "./node_modules/@malagu/web/lib/node/cookies/cookies-factory.js"));


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/cors/cors-middleware.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/cors/cors-middleware.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var middleware_1 = __webpack_require__(/*! ../middleware */ "./node_modules/@malagu/web/lib/node/middleware/index.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var cors = __webpack_require__(/*! cors */ "cors");
var common_1 = __webpack_require__(/*! ../../common */ "./node_modules/@malagu/web/lib/common/index.js");
var cors_protocol_1 = __webpack_require__(/*! ./cors-protocol */ "./node_modules/@malagu/web/lib/node/cors/cors-protocol.js");
var CorsMiddleware = /** @class */ (function () {
    function CorsMiddleware() {
        this.priority = cors_protocol_1.CORS_MIDDLEWARE_PRIORITY;
    }
    CorsMiddleware_1 = CorsMiddleware;
    CorsMiddleware.prototype.handle = function (ctx, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return cors(_this.options)(ctx.request, ctx.response, function (err) {
                        if (err) {
                            reject(err);
                        }
                        else {
                            if (_this.endpoint && !ctx.response.getHeader(common_1.HttpHeaders.ACCESS_CONTROL_ALLOW_ORIGIN)) {
                                ctx.response.setHeader(common_1.HttpHeaders.ACCESS_CONTROL_ALLOW_ORIGIN, _this.endpoint);
                            }
                            next().then(resolve).catch(reject);
                        }
                    }); })];
            });
        });
    };
    var CorsMiddleware_1;
    __decorate([
        core_1.Value(common_1.CORS),
        __metadata("design:type", Object)
    ], CorsMiddleware.prototype, "options", void 0);
    __decorate([
        core_1.Value(common_1.ENDPOINT),
        __metadata("design:type", String)
    ], CorsMiddleware.prototype, "endpoint", void 0);
    CorsMiddleware = CorsMiddleware_1 = __decorate([
        core_1.Component([CorsMiddleware_1, middleware_1.Middleware])
    ], CorsMiddleware);
    return CorsMiddleware;
}());
exports.CorsMiddleware = CorsMiddleware;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/cors/cors-protocol.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/cors/cors-protocol.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var trace_1 = __webpack_require__(/*! ../trace */ "./node_modules/@malagu/web/lib/node/trace/index.js");
exports.CORS_MIDDLEWARE_PRIORITY = trace_1.TRACE_MIDDLEWARE_PRIORITY - 100;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/cors/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/cors/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./cors-protocol */ "./node_modules/@malagu/web/lib/node/cors/cors-protocol.js"));
__export(__webpack_require__(/*! ./cors-middleware */ "./node_modules/@malagu/web/lib/node/cors/cors-middleware.js"));


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/dispatcher/dispatcher-protocol.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/dispatcher/dispatcher-protocol.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Dispatcher = Symbol('Dispatcher');


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/dispatcher/dispatcher.js":
/*!********************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/dispatcher/dispatcher.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var context_1 = __webpack_require__(/*! ../context */ "./node_modules/@malagu/web/lib/node/context.js");
var middleware_1 = __webpack_require__(/*! ../middleware */ "./node_modules/@malagu/web/lib/node/middleware/index.js");
var error_hander_provider_1 = __webpack_require__(/*! ../error/error-hander-provider */ "./node_modules/@malagu/web/lib/node/error/error-hander-provider.js");
var dispatcher_protocol_1 = __webpack_require__(/*! ./dispatcher-protocol */ "./node_modules/@malagu/web/lib/node/dispatcher/dispatcher-protocol.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var handler_protocol_1 = __webpack_require__(/*! ../handler/handler-protocol */ "./node_modules/@malagu/web/lib/node/handler/handler-protocol.js");
var DispatcherImpl = /** @class */ (function () {
    function DispatcherImpl() {
    }
    DispatcherImpl.prototype.dispatch = function (ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var middlewares, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        context_1.Context.setCurrent(ctx);
                        middlewares = this.middlewareProvider.provide();
                        return [4 /*yield*/, this.handlerExecutionChain.execute(middlewares)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        err_1 = _a.sent();
                        this.logger.error(err_1);
                        return [4 /*yield*/, this.handleError(ctx, err_1)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DispatcherImpl.prototype.handleError = function (ctx, err) {
        return __awaiter(this, void 0, void 0, function () {
            var errorHandlers, errorHandlers_1, errorHandlers_1_1, handler, error_1, e_1_1;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        errorHandlers = this.errorHandlerProvider.provide();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 10, 11, 12]);
                        errorHandlers_1 = __values(errorHandlers), errorHandlers_1_1 = errorHandlers_1.next();
                        _b.label = 2;
                    case 2:
                        if (!!errorHandlers_1_1.done) return [3 /*break*/, 9];
                        handler = errorHandlers_1_1.value;
                        return [4 /*yield*/, handler.canHandle(ctx, err)];
                    case 3:
                        if (!_b.sent()) return [3 /*break*/, 8];
                        _b.label = 4;
                    case 4:
                        _b.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, handler.handle(ctx, err)];
                    case 5:
                        _b.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        error_1 = _b.sent();
                        this.logger.error(error_1);
                        return [3 /*break*/, 8];
                    case 7: return [2 /*return*/];
                    case 8:
                        errorHandlers_1_1 = errorHandlers_1.next();
                        return [3 /*break*/, 2];
                    case 9: return [3 /*break*/, 12];
                    case 10:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 12];
                    case 11:
                        try {
                            if (errorHandlers_1_1 && !errorHandlers_1_1.done && (_a = errorHandlers_1.return)) _a.call(errorHandlers_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        core_1.Autowired(handler_protocol_1.HandlerExecutionChain),
        __metadata("design:type", Object)
    ], DispatcherImpl.prototype, "handlerExecutionChain", void 0);
    __decorate([
        core_1.Autowired(middleware_1.MiddlewareProvider),
        __metadata("design:type", middleware_1.MiddlewareProvider)
    ], DispatcherImpl.prototype, "middlewareProvider", void 0);
    __decorate([
        core_1.Autowired(error_hander_provider_1.ErrorHandlerProvider),
        __metadata("design:type", error_hander_provider_1.ErrorHandlerProvider)
    ], DispatcherImpl.prototype, "errorHandlerProvider", void 0);
    __decorate([
        core_1.Autowired(core_1.Logger),
        __metadata("design:type", Object)
    ], DispatcherImpl.prototype, "logger", void 0);
    DispatcherImpl = __decorate([
        core_1.Component(dispatcher_protocol_1.Dispatcher)
    ], DispatcherImpl);
    return DispatcherImpl;
}());
exports.DispatcherImpl = DispatcherImpl;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/dispatcher/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/dispatcher/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./dispatcher */ "./node_modules/@malagu/web/lib/node/dispatcher/dispatcher.js"));
__export(__webpack_require__(/*! ./dispatcher-protocol */ "./node_modules/@malagu/web/lib/node/dispatcher/dispatcher-protocol.js"));


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/error/error-hander-provider.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/error/error-hander-provider.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var error_protocol_1 = __webpack_require__(/*! ./error-protocol */ "./node_modules/@malagu/web/lib/node/error/error-protocol.js");
var http_error_1 = __webpack_require__(/*! ./http-error */ "./node_modules/@malagu/web/lib/node/error/http-error.js");
var http_1 = __webpack_require__(/*! ../../common/http */ "./node_modules/@malagu/web/lib/common/http/index.js");
var AbstractErrorHandler = /** @class */ (function () {
    function AbstractErrorHandler() {
        this.priority = error_protocol_1.DEFALUT_ERROR_HANDlER_PRIORITY;
    }
    AbstractErrorHandler.prototype.canHandle = function (ctx, err) {
        return Promise.resolve(true);
    };
    AbstractErrorHandler.prototype.handle = function (ctx, err) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.error(err);
                        ctx.response.statusCode = http_1.HttpStatus.INTERNAL_SERVER_ERROR;
                        ctx.response.end(err.message);
                        return [4 /*yield*/, this.doHandle(ctx, err)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AbstractErrorHandler.prototype.doHandle = function (ctx, err) {
        return Promise.resolve();
    };
    AbstractErrorHandler = __decorate([
        inversify_1.injectable()
    ], AbstractErrorHandler);
    return AbstractErrorHandler;
}());
exports.AbstractErrorHandler = AbstractErrorHandler;
var DefaultErrorHandler = /** @class */ (function (_super) {
    __extends(DefaultErrorHandler, _super);
    function DefaultErrorHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultErrorHandler = __decorate([
        core_1.Component(error_protocol_1.ErrorHandler)
    ], DefaultErrorHandler);
    return DefaultErrorHandler;
}(AbstractErrorHandler));
exports.DefaultErrorHandler = DefaultErrorHandler;
var HttpErrorHandler = /** @class */ (function () {
    function HttpErrorHandler() {
        this.priority = error_protocol_1.HTTP_ERROR_HANDlER_PRIORITY;
    }
    HttpErrorHandler.prototype.canHandle = function (ctx, err) {
        return Promise.resolve(err instanceof http_error_1.HttpError);
    };
    HttpErrorHandler.prototype.handle = function (ctx, err) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                ctx.response.statusCode = err.statusCode;
                ctx.response.end(err.message);
                return [2 /*return*/];
            });
        });
    };
    HttpErrorHandler = __decorate([
        core_1.Component(error_protocol_1.ErrorHandler)
    ], HttpErrorHandler);
    return HttpErrorHandler;
}());
exports.HttpErrorHandler = HttpErrorHandler;
var ValidationErrorsHandler = /** @class */ (function () {
    function ValidationErrorsHandler() {
        this.priority = error_protocol_1.VALIDATION_ERRORS_ERROR_HANDlER_PRIORITY;
    }
    ValidationErrorsHandler.prototype.canHandle = function (ctx, err) {
        return Promise.resolve(err instanceof core_1.ValidationErrors);
    };
    ValidationErrorsHandler.prototype.handle = function (ctx, err) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                ctx.response.statusCode = http_1.HttpStatus.BAD_REQUEST;
                ctx.response.end(err.message);
                return [2 /*return*/];
            });
        });
    };
    ValidationErrorsHandler = __decorate([
        core_1.Component(error_protocol_1.ErrorHandler)
    ], ValidationErrorsHandler);
    return ValidationErrorsHandler;
}());
exports.ValidationErrorsHandler = ValidationErrorsHandler;
var ErrorHandlerProvider = /** @class */ (function () {
    function ErrorHandlerProvider(handlers) {
        this.handlers = handlers;
    }
    ErrorHandlerProvider.prototype.provide = function () {
        if (!this.prioritized) {
            this.prioritized = core_1.Prioritizeable.prioritizeAllSync(this.handlers).map(function (c) { return c.value; });
        }
        return this.prioritized;
    };
    ErrorHandlerProvider = __decorate([
        core_1.Component(),
        __param(0, core_1.Autowired(error_protocol_1.ErrorHandler)),
        __metadata("design:paramtypes", [Array])
    ], ErrorHandlerProvider);
    return ErrorHandlerProvider;
}());
exports.ErrorHandlerProvider = ErrorHandlerProvider;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/error/error-protocol.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/error/error-protocol.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = Symbol('ErrorHandler');
exports.DEFALUT_ERROR_HANDlER_PRIORITY = 500;
exports.HTTP_ERROR_HANDlER_PRIORITY = exports.DEFALUT_ERROR_HANDlER_PRIORITY + 100;
exports.VALIDATION_ERRORS_ERROR_HANDlER_PRIORITY = exports.HTTP_ERROR_HANDlER_PRIORITY + 100;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/error/http-error.js":
/*!***************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/error/http-error.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var HttpError = /** @class */ (function (_super) {
    __extends(HttpError, _super);
    function HttpError(statusCode, message) {
        var _this = _super.call(this, message) || this;
        _this.statusCode = statusCode;
        return _this;
    }
    return HttpError;
}(core_1.CustomError));
exports.HttpError = HttpError;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/error/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/error/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./http-error */ "./node_modules/@malagu/web/lib/node/error/http-error.js"));
__export(__webpack_require__(/*! ./error-hander-provider */ "./node_modules/@malagu/web/lib/node/error/error-hander-provider.js"));
__export(__webpack_require__(/*! ./error-protocol */ "./node_modules/@malagu/web/lib/node/error/error-protocol.js"));
__export(__webpack_require__(/*! ./not-found-error */ "./node_modules/@malagu/web/lib/node/error/not-found-error.js"));


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/error/not-found-error.js":
/*!********************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/error/not-found-error.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var http_error_1 = __webpack_require__(/*! ./http-error */ "./node_modules/@malagu/web/lib/node/error/http-error.js");
var http_1 = __webpack_require__(/*! ../../common/http */ "./node_modules/@malagu/web/lib/common/http/index.js");
var NotFoundError = /** @class */ (function (_super) {
    __extends(NotFoundError, _super);
    function NotFoundError(message) {
        return _super.call(this, http_1.HttpStatus.NOT_FOUND, message) || this;
    }
    return NotFoundError;
}(http_error_1.HttpError));
exports.NotFoundError = NotFoundError;
var NotFoundAndContinueError = /** @class */ (function (_super) {
    __extends(NotFoundAndContinueError, _super);
    function NotFoundAndContinueError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NotFoundAndContinueError;
}(NotFoundError));
exports.NotFoundAndContinueError = NotFoundAndContinueError;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/handler/handler-execution-chain.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/handler/handler-execution-chain.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var middleware_1 = __webpack_require__(/*! ../middleware */ "./node_modules/@malagu/web/lib/node/middleware/index.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var context_1 = __webpack_require__(/*! ../context */ "./node_modules/@malagu/web/lib/node/context.js");
var handler_protocol_1 = __webpack_require__(/*! ./handler-protocol */ "./node_modules/@malagu/web/lib/node/handler/handler-protocol.js");
var HandlerExecutionChainImpl = /** @class */ (function () {
    function HandlerExecutionChainImpl() {
    }
    HandlerExecutionChainImpl.prototype.execute = function (middlewares) {
        var _this = this;
        var middleware = middleware_1.compose(middlewares);
        return middleware(context_1.Context.getCurrent(), {
            handle: function (c, next) { return _this.handlerMapping.handle(); },
            priority: 0
        });
    };
    __decorate([
        core_1.Autowired(handler_protocol_1.HandlerMapping),
        __metadata("design:type", Object)
    ], HandlerExecutionChainImpl.prototype, "handlerMapping", void 0);
    HandlerExecutionChainImpl = __decorate([
        core_1.Component(handler_protocol_1.HandlerExecutionChain)
    ], HandlerExecutionChainImpl);
    return HandlerExecutionChainImpl;
}());
exports.HandlerExecutionChainImpl = HandlerExecutionChainImpl;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/handler/handler-mapping.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/handler/handler-mapping.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var handler_protocol_1 = __webpack_require__(/*! ./handler-protocol */ "./node_modules/@malagu/web/lib/node/handler/handler-protocol.js");
var error_1 = __webpack_require__(/*! ../error */ "./node_modules/@malagu/web/lib/node/error/index.js");
var error_2 = __webpack_require__(/*! ../error */ "./node_modules/@malagu/web/lib/node/error/index.js");
var context_1 = __webpack_require__(/*! ../context */ "./node_modules/@malagu/web/lib/node/context.js");
var HandlerMappingImpl = /** @class */ (function () {
    function HandlerMappingImpl(handlerAdapters) {
        this.handlerAdapters = handlerAdapters;
        this.prioritized = core_1.Prioritizeable.prioritizeAllSync(this.handlerAdapters).map(function (c) { return c.value; });
    }
    HandlerMappingImpl.prototype.handle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var lastError, _a, _b, handler, error_3, e_1_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 8, 9, 10]);
                        _a = __values(this.prioritized), _b = _a.next();
                        _d.label = 1;
                    case 1:
                        if (!!_b.done) return [3 /*break*/, 7];
                        handler = _b.value;
                        return [4 /*yield*/, handler.canHandle()];
                    case 2:
                        if (!_d.sent()) return [3 /*break*/, 6];
                        _d.label = 3;
                    case 3:
                        _d.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, handler.handle()];
                    case 4:
                        _d.sent();
                        return [2 /*return*/];
                    case 5:
                        error_3 = _d.sent();
                        if (error_3 instanceof error_2.NotFoundAndContinueError) {
                            lastError = error_3;
                        }
                        else {
                            throw error_3;
                        }
                        return [3 /*break*/, 6];
                    case 6:
                        _b = _a.next();
                        return [3 /*break*/, 1];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 10];
                    case 9:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 10:
                        if (lastError) {
                            throw lastError;
                        }
                        throw new error_1.NotFoundError("Not found a suitable handler adapter: " + context_1.Context.getRequest().path);
                }
            });
        });
    };
    HandlerMappingImpl = __decorate([
        core_1.Component(handler_protocol_1.HandlerMapping),
        __param(0, core_1.Autowired(handler_protocol_1.HandlerAdapter)),
        __metadata("design:paramtypes", [Array])
    ], HandlerMappingImpl);
    return HandlerMappingImpl;
}());
exports.HandlerMappingImpl = HandlerMappingImpl;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/handler/handler-protocol.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/handler/handler-protocol.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HandlerExecutionChain = Symbol('HandlerExecutionChain');
exports.HandlerAdapter = Symbol('HandlerAdapter');
exports.HandlerMapping = Symbol('HandlerMapping');


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/handler/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/handler/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./handler-execution-chain */ "./node_modules/@malagu/web/lib/node/handler/handler-execution-chain.js"));
__export(__webpack_require__(/*! ./handler-mapping */ "./node_modules/@malagu/web/lib/node/handler/handler-mapping.js"));
__export(__webpack_require__(/*! ./handler-protocol */ "./node_modules/@malagu/web/lib/node/handler/handler-protocol.js"));


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/http/http-middleware.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/http/http-middleware.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var middleware_1 = __webpack_require__(/*! ../middleware */ "./node_modules/@malagu/web/lib/node/middleware/index.js");
var context_1 = __webpack_require__(/*! ../context */ "./node_modules/@malagu/web/lib/node/context.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var http_protocol_1 = __webpack_require__(/*! ./http-protocol */ "./node_modules/@malagu/web/lib/node/http/http-protocol.js");
var HttpMiddleware = /** @class */ (function () {
    function HttpMiddleware() {
        this.priority = http_protocol_1.HTTP_MIDDLEWARE_PRIORITY;
    }
    HttpMiddleware.prototype.handle = function (ctx, next) {
        return __awaiter(this, void 0, void 0, function () {
            var response, body, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, next()];
                    case 1:
                        _c.sent();
                        response = ctx.response;
                        if (!(!context_1.Context.isSkipAutoEnd() && !response.finished)) return [3 /*break*/, 4];
                        body = response.body;
                        if (!(body instanceof core_1.Deferred)) return [3 /*break*/, 3];
                        _b = (_a = response).end;
                        return [4 /*yield*/, body.promise];
                    case 2:
                        _b.apply(_a, [_c.sent()]);
                        return [3 /*break*/, 4];
                    case 3:
                        response.end(response.body);
                        _c.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HttpMiddleware = __decorate([
        core_1.Component(middleware_1.Middleware)
    ], HttpMiddleware);
    return HttpMiddleware;
}());
exports.HttpMiddleware = HttpMiddleware;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/http/http-protocol.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/http/http-protocol.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __webpack_require__(/*! ../cors */ "./node_modules/@malagu/web/lib/node/cors/index.js");
exports.HTTP_MIDDLEWARE_PRIORITY = cors_1.CORS_MIDDLEWARE_PRIORITY - 100;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/http/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/http/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./http-protocol */ "./node_modules/@malagu/web/lib/node/http/http-protocol.js"));
__export(__webpack_require__(/*! ./http-middleware */ "./node_modules/@malagu/web/lib/node/http/http-middleware.js"));


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./middleware */ "./node_modules/@malagu/web/lib/node/middleware/index.js"));
__export(__webpack_require__(/*! ./middleware */ "./node_modules/@malagu/web/lib/node/middleware/index.js"));
__export(__webpack_require__(/*! ./dispatcher */ "./node_modules/@malagu/web/lib/node/dispatcher/index.js"));
__export(__webpack_require__(/*! ./context */ "./node_modules/@malagu/web/lib/node/context.js"));
__export(__webpack_require__(/*! ./error */ "./node_modules/@malagu/web/lib/node/error/index.js"));
__export(__webpack_require__(/*! ./handler */ "./node_modules/@malagu/web/lib/node/handler/index.js"));
__export(__webpack_require__(/*! ./cookies */ "./node_modules/@malagu/web/lib/node/cookies/index.js"));
__export(__webpack_require__(/*! ./session */ "./node_modules/@malagu/web/lib/node/session/index.js"));
__export(__webpack_require__(/*! ./http */ "./node_modules/@malagu/web/lib/node/http/index.js"));
__export(__webpack_require__(/*! ./matcher */ "./node_modules/@malagu/web/lib/node/matcher/index.js"));
__export(__webpack_require__(/*! ./cors */ "./node_modules/@malagu/web/lib/node/cors/index.js"));
__export(__webpack_require__(/*! ./trace */ "./node_modules/@malagu/web/lib/node/trace/index.js"));
__export(__webpack_require__(/*! ./redirect */ "./node_modules/@malagu/web/lib/node/redirect/index.js"));


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/matcher/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/matcher/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./matcher-protocol */ "./node_modules/@malagu/web/lib/node/matcher/matcher-protocol.js"));
__export(__webpack_require__(/*! ./request-matcher */ "./node_modules/@malagu/web/lib/node/matcher/request-matcher.js"));


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/matcher/matcher-protocol.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/matcher/matcher-protocol.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestMatcher = Symbol('RequestMatcher');


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/matcher/request-matcher.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/matcher/request-matcher.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var matcher_protocol_1 = __webpack_require__(/*! ./matcher-protocol */ "./node_modules/@malagu/web/lib/node/matcher/matcher-protocol.js");
var context_1 = __webpack_require__(/*! ../context */ "./node_modules/@malagu/web/lib/node/context.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var UrlPattern = __webpack_require__(/*! url-pattern */ "url-pattern");
var RequestMatcherImpl = /** @class */ (function () {
    function RequestMatcherImpl() {
        this.caches = new Map();
    }
    RequestMatcherImpl.prototype.match = function (pattern, method) {
        return __awaiter(this, void 0, void 0, function () {
            var request, path, urlPathern;
            return __generator(this, function (_a) {
                request = context_1.Context.getRequest();
                path = request.path;
                if (method && request.method && method.toUpperCase() !== request.method.toUpperCase()) {
                    return [2 /*return*/, false];
                }
                pattern = pattern || '/';
                if (typeof pattern === 'string') {
                    urlPathern = this.caches.get(pattern);
                    if (!urlPathern) {
                        urlPathern = new UrlPattern(pattern);
                        if (this.caches.size < this.cacheSize) {
                            this.caches.set(pattern, urlPathern);
                        }
                    }
                }
                else {
                    urlPathern = new UrlPattern(pattern);
                }
                return [2 /*return*/, urlPathern.match(path)];
            });
        });
    };
    __decorate([
        core_1.Value('malagu.web.route.cacheSize'),
        __metadata("design:type", Number)
    ], RequestMatcherImpl.prototype, "cacheSize", void 0);
    RequestMatcherImpl = __decorate([
        core_1.Component(matcher_protocol_1.RequestMatcher)
    ], RequestMatcherImpl);
    return RequestMatcherImpl;
}());
exports.RequestMatcherImpl = RequestMatcherImpl;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/middleware/compose.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/middleware/compose.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function compose(middlewares) {
    return function (ctx, next) {
        var index = -1;
        var dispatch = function (i) {
            if (i <= index) {
                return Promise.reject(new Error('next() called multiple times'));
            }
            index = i;
            var middleware = middlewares[i];
            if (i === middlewares.length) {
                middleware = next;
            }
            if (!middleware) {
                return Promise.resolve();
            }
            try {
                return middleware.handle(ctx, function () { return dispatch(i + 1); });
            }
            catch (err) {
                return Promise.reject(err);
            }
        };
        return dispatch(0);
    };
}
exports.compose = compose;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/middleware/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/middleware/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./middleware-provider */ "./node_modules/@malagu/web/lib/node/middleware/middleware-provider.js"));
__export(__webpack_require__(/*! ./compose */ "./node_modules/@malagu/web/lib/node/middleware/compose.js"));


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/middleware/middleware-provider.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/middleware/middleware-provider.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
exports.Middleware = Symbol('Middleware');
var MiddlewareProvider = /** @class */ (function () {
    function MiddlewareProvider(middlewares) {
        this.middlewares = middlewares;
    }
    MiddlewareProvider.prototype.provide = function () {
        if (!this.prioritized) {
            this.prioritized = core_1.Prioritizeable.prioritizeAllSync(this.middlewares).map(function (c) { return c.value; });
        }
        return this.prioritized;
    };
    MiddlewareProvider = __decorate([
        core_1.Component(),
        __param(0, core_1.Autowired(exports.Middleware)), __param(0, core_1.Optional()),
        __metadata("design:paramtypes", [Array])
    ], MiddlewareProvider);
    return MiddlewareProvider;
}());
exports.MiddlewareProvider = MiddlewareProvider;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/module.js":
/*!*****************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/module.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
__webpack_require__(/*! . */ "./node_modules/@malagu/web/lib/node/index.js");
exports.default = core_1.autoBind();


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/redirect/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/redirect/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./redirect-protocol */ "./node_modules/@malagu/web/lib/node/redirect/redirect-protocol.js"));
__export(__webpack_require__(/*! ./redirect-strategy */ "./node_modules/@malagu/web/lib/node/redirect/redirect-strategy.js"));


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/redirect/redirect-protocol.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/redirect/redirect-protocol.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RedirectStrategy = Symbol('RedirectStrategy');


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/redirect/redirect-strategy.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/redirect/redirect-strategy.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var redirect_protocol_1 = __webpack_require__(/*! ./redirect-protocol */ "./node_modules/@malagu/web/lib/node/redirect/redirect-protocol.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var context_1 = __webpack_require__(/*! ../context */ "./node_modules/@malagu/web/lib/node/context.js");
var http_1 = __webpack_require__(/*! ../../common/http */ "./node_modules/@malagu/web/lib/common/http/index.js");
var resolver_1 = __webpack_require__(/*! ../../common/resolver */ "./node_modules/@malagu/web/lib/common/resolver/index.js");
var DefaultRedirectStrategy = /** @class */ (function () {
    function DefaultRedirectStrategy() {
    }
    DefaultRedirectStrategy.prototype.send = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var response, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        response = context_1.Context.getResponse();
                        response.statusCode = http_1.HttpStatus.FOUND;
                        _b = (_a = response).setHeader;
                        _c = [http_1.HttpHeaders.LOCATION];
                        return [4 /*yield*/, this.pathResolver.resolve(url)];
                    case 1:
                        _b.apply(_a, _c.concat([_d.sent()]));
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        core_1.Autowired(resolver_1.PathResolver),
        __metadata("design:type", Object)
    ], DefaultRedirectStrategy.prototype, "pathResolver", void 0);
    DefaultRedirectStrategy = __decorate([
        core_1.Component(redirect_protocol_1.RedirectStrategy)
    ], DefaultRedirectStrategy);
    return DefaultRedirectStrategy;
}());
exports.DefaultRedirectStrategy = DefaultRedirectStrategy;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/session/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/session/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./session-manager */ "./node_modules/@malagu/web/lib/node/session/session-manager.js"));
__export(__webpack_require__(/*! ./session */ "./node_modules/@malagu/web/lib/node/session/session.js"));
__export(__webpack_require__(/*! ./session-store */ "./node_modules/@malagu/web/lib/node/session/session-store.js"));
__export(__webpack_require__(/*! ./session-strategy */ "./node_modules/@malagu/web/lib/node/session/session-strategy.js"));
__export(__webpack_require__(/*! ./session-middleware */ "./node_modules/@malagu/web/lib/node/session/session-middleware.js"));


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/session/session-manager.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/session/session-manager.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var session_protocol_1 = __webpack_require__(/*! ./session-protocol */ "./node_modules/@malagu/web/lib/node/session/session-protocol.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var context_1 = __webpack_require__(/*! ../context */ "./node_modules/@malagu/web/lib/node/context.js");
var SessionManagerImpl = /** @class */ (function () {
    function SessionManagerImpl() {
    }
    SessionManagerImpl.prototype.getSessionId = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cookies;
            return __generator(this, function (_a) {
                cookies = context_1.Context.getCookies();
                return [2 /*return*/, cookies.get(this.sessionIdKey)];
            });
        });
    };
    SessionManagerImpl.prototype.get = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sessionId, session, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (context_1.Context.getSession()) {
                            return [2 /*return*/, context_1.Context.getSession()];
                        }
                        return [4 /*yield*/, this.getSessionId()];
                    case 1:
                        sessionId = _b.sent();
                        if (!sessionId) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.sessionStore.get(sessionId)];
                    case 2:
                        session = _b.sent();
                        _a = session;
                        if (!_a) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.sessionStrategy.valid(session)];
                    case 3:
                        _a = (_b.sent());
                        _b.label = 4;
                    case 4:
                        if (_a) {
                            return [2 /*return*/, session];
                        }
                        _b.label = 5;
                    case 5: return [2 /*return*/, this.sessionStrategy.create()];
                }
            });
        });
    };
    SessionManagerImpl.prototype.remove = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!context_1.Context.getSession()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.sessionStore.remove(context_1.Context.getSession().id)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        context_1.Context.getCookies().set(this.sessionIdKey, '', {
                            expires: session_protocol_1.COOKIE_EXP_DATE,
                            maxAge: false,
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SessionManagerImpl.prototype.commit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var session;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        session = context_1.Context.getSession();
                        if (!session) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.sessionStrategy.shouldSaveSession(session)];
                    case 1:
                        if (!_a.sent()) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.sessionStore.set(session)];
                    case 2:
                        _a.sent();
                        context_1.Context.getCookies().set(this.sessionIdKey, session.id, this.sessionOptions);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        core_1.Value('malagu.session.sessionIdKey'),
        __metadata("design:type", String)
    ], SessionManagerImpl.prototype, "sessionIdKey", void 0);
    __decorate([
        core_1.Value('malagu.session'),
        __metadata("design:type", Object)
    ], SessionManagerImpl.prototype, "sessionOptions", void 0);
    __decorate([
        core_1.Autowired(session_protocol_1.SessionStrategy),
        __metadata("design:type", Object)
    ], SessionManagerImpl.prototype, "sessionStrategy", void 0);
    __decorate([
        core_1.Autowired(session_protocol_1.SessionStore),
        __metadata("design:type", Object)
    ], SessionManagerImpl.prototype, "sessionStore", void 0);
    SessionManagerImpl = __decorate([
        core_1.Component(session_protocol_1.SessionManager)
    ], SessionManagerImpl);
    return SessionManagerImpl;
}());
exports.SessionManagerImpl = SessionManagerImpl;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/session/session-middleware.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/session/session-middleware.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var middleware_1 = __webpack_require__(/*! ../middleware */ "./node_modules/@malagu/web/lib/node/middleware/index.js");
var context_1 = __webpack_require__(/*! ../context */ "./node_modules/@malagu/web/lib/node/context.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var session_protocol_1 = __webpack_require__(/*! ./session-protocol */ "./node_modules/@malagu/web/lib/node/session/session-protocol.js");
var SessionMiddleware = /** @class */ (function () {
    function SessionMiddleware() {
        this.priority = session_protocol_1.SESSION_MIDDLEWARE_PRIORITY;
    }
    SessionMiddleware.prototype.handle = function (ctx, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = context_1.Context).setSession;
                        return [4 /*yield*/, this.sessionManager.get()];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, , 4, 7]);
                        return [4 /*yield*/, next()];
                    case 3:
                        _c.sent();
                        return [3 /*break*/, 7];
                    case 4:
                        if (!this.sessionOptions.autoCommit) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.sessionManager.commit()];
                    case 5:
                        _c.sent();
                        _c.label = 6;
                    case 6: return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        core_1.Autowired(session_protocol_1.SessionManager),
        __metadata("design:type", Object)
    ], SessionMiddleware.prototype, "sessionManager", void 0);
    __decorate([
        core_1.Value('malagu.session'),
        __metadata("design:type", Object)
    ], SessionMiddleware.prototype, "sessionOptions", void 0);
    SessionMiddleware = __decorate([
        core_1.Component(middleware_1.Middleware)
    ], SessionMiddleware);
    return SessionMiddleware;
}());
exports.SessionMiddleware = SessionMiddleware;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/session/session-protocol.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/session/session-protocol.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cookies_1 = __webpack_require__(/*! ../cookies */ "./node_modules/@malagu/web/lib/node/cookies/index.js");
exports.Session = Symbol('Session');
exports.SessionStore = Symbol('SessionStore');
exports.SessionManager = Symbol('SessionManager');
exports.SessionStrategy = Symbol('SessionStrategy');
exports.COOKIE_EXP_DATE = new Date('Thu, 01 Jan 1970 00:00:00 GMT');
exports.SESSION_MIDDLEWARE_PRIORITY = cookies_1.COOKIES_MIDDLEWARE_PRIORITY - 100;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/session/session-store.js":
/*!********************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/session/session-store.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var session_protocol_1 = __webpack_require__(/*! ./session-protocol */ "./node_modules/@malagu/web/lib/node/session/session-protocol.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var context_1 = __webpack_require__(/*! ../context */ "./node_modules/@malagu/web/lib/node/context.js");
var _a = __webpack_require__(/*! node-gzip */ "node-gzip"), gzip = _a.gzip, ungzip = _a.ungzip;
var CookieSessionStore = /** @class */ (function () {
    function CookieSessionStore() {
    }
    CookieSessionStore.prototype.get = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var value, decompressed, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        value = context_1.Context.getCookies().get(this.sessionOptions.sessionKey, this.sessionOptions);
                        if (!value) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, ungzip(Buffer.from(value, 'base64'))];
                    case 2:
                        decompressed = _a.sent();
                        return [2 /*return*/, this.sessionStrategy.create(JSON.parse(decompressed.toString()))];
                    case 3:
                        error_1 = _a.sent();
                        this.logger.error(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CookieSessionStore.prototype.set = function (session) {
        return __awaiter(this, void 0, void 0, function () {
            var compressed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, gzip(JSON.stringify(session.toJSON()))];
                    case 1:
                        compressed = _a.sent();
                        context_1.Context.getCookies().set(this.sessionOptions.sessionKey, compressed.toString('base64'), this.sessionOptions);
                        return [2 /*return*/];
                }
            });
        });
    };
    CookieSessionStore.prototype.remove = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                context_1.Context.getCookies().set(this.sessionOptions.sessionKey, '', {
                    expires: session_protocol_1.COOKIE_EXP_DATE,
                    maxAge: false,
                });
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        core_1.Value('malagu.session'),
        __metadata("design:type", Object)
    ], CookieSessionStore.prototype, "sessionOptions", void 0);
    __decorate([
        core_1.Autowired(session_protocol_1.SessionStrategy),
        __metadata("design:type", Object)
    ], CookieSessionStore.prototype, "sessionStrategy", void 0);
    __decorate([
        core_1.Autowired(core_1.Logger),
        __metadata("design:type", Object)
    ], CookieSessionStore.prototype, "logger", void 0);
    CookieSessionStore = __decorate([
        core_1.Component(session_protocol_1.SessionStore)
    ], CookieSessionStore);
    return CookieSessionStore;
}());
exports.CookieSessionStore = CookieSessionStore;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/session/session-strategy.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/session/session-strategy.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var session_protocol_1 = __webpack_require__(/*! ./session-protocol */ "./node_modules/@malagu/web/lib/node/session/session-protocol.js");
var session_1 = __webpack_require__(/*! ./session */ "./node_modules/@malagu/web/lib/node/session/session.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var SessionStrategyImpl = /** @class */ (function () {
    function SessionStrategyImpl() {
    }
    SessionStrategyImpl.prototype.valid = function (session) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (session.expire && session.expire < Date.now()) {
                    return [2 /*return*/, false];
                }
                return [2 /*return*/, true];
            });
        });
    };
    SessionStrategyImpl.prototype.create = function (obj) {
        return Promise.resolve(new session_1.SessionImpl(this.sessionOptions, obj));
    };
    SessionStrategyImpl.prototype.shouldSaveSession = function (session) {
        return __awaiter(this, void 0, void 0, function () {
            var expire, maxAge;
            return __generator(this, function (_a) {
                if (session.changed) {
                    return [2 /*return*/, true];
                }
                // save if opts.renew and session will expired
                if (this.sessionOptions.renew === true) {
                    expire = session.expire;
                    maxAge = session.maxAge;
                    // renew when session will expired in maxAge / 2
                    if (expire && maxAge && expire - Date.now() < maxAge / 2) {
                        return [2 /*return*/, true];
                    }
                }
                return [2 /*return*/, false];
            });
        });
    };
    __decorate([
        core_1.Value('malagu.session'),
        __metadata("design:type", Object)
    ], SessionStrategyImpl.prototype, "sessionOptions", void 0);
    SessionStrategyImpl = __decorate([
        core_1.Component(session_protocol_1.SessionStrategy)
    ], SessionStrategyImpl);
    return SessionStrategyImpl;
}());
exports.SessionStrategyImpl = SessionStrategyImpl;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/session/session.js":
/*!**************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/session/session.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var uuid = __webpack_require__(/*! uuid/v4 */ "uuid/v4");
var crc = __webpack_require__(/*! crc */ "crc").crc32;
var SessionImpl = /** @class */ (function () {
    function SessionImpl(sessionOptions, obj) {
        var e_1, _a;
        this.id = uuid();
        this.isNew = true;
        if (obj) {
            this.isNew = false;
            try {
                for (var _b = __values(Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    this[key] = obj[key];
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        else {
            this.expire = sessionOptions.maxAge + Date.now();
            this.maxAge = sessionOptions.maxAge;
        }
        this._preHash = this.hash();
    }
    SessionImpl.prototype.hash = function () {
        return crc(JSON.stringify(this.toJSON()));
    };
    SessionImpl.prototype.toJSON = function () {
        var e_2, _a;
        var obj = {};
        try {
            for (var _b = __values(Object.keys(this)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                if (key !== 'isNew' && key[0] !== '_') {
                    obj[key] = this[key];
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return obj;
    };
    Object.defineProperty(SessionImpl.prototype, "changed", {
        get: function () {
            if (this._preHash !== this.hash()) {
                return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    return SessionImpl;
}());
exports.SessionImpl = SessionImpl;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/trace/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/trace/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./trace-middleware */ "./node_modules/@malagu/web/lib/node/trace/trace-middleware.js"));
__export(__webpack_require__(/*! ./trace-protocol */ "./node_modules/@malagu/web/lib/node/trace/trace-protocol.js"));
__export(__webpack_require__(/*! ./trace-id-resolver */ "./node_modules/@malagu/web/lib/node/trace/trace-id-resolver.js"));


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/trace/trace-id-resolver.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/trace/trace-id-resolver.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = __webpack_require__(/*! uuid */ "uuid");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var trace_protocol_1 = __webpack_require__(/*! ./trace-protocol */ "./node_modules/@malagu/web/lib/node/trace/trace-protocol.js");
var context_1 = __webpack_require__(/*! ../context */ "./node_modules/@malagu/web/lib/node/context.js");
var TraceIdResolverImpl = /** @class */ (function () {
    function TraceIdResolverImpl() {
    }
    TraceIdResolverImpl.prototype.resolve = function () {
        if (context_1.Context.getRequest() && this.traceField) {
            var traceId = context_1.Context.getRequest().get(this.traceField);
            if (traceId) {
                return Promise.resolve(traceId);
            }
        }
        return Promise.resolve(uuid_1.v4());
    };
    __decorate([
        core_1.Value(trace_protocol_1.TRACE_ID_REQUEST_FIELD),
        __metadata("design:type", String)
    ], TraceIdResolverImpl.prototype, "traceField", void 0);
    TraceIdResolverImpl = __decorate([
        core_1.Component(trace_protocol_1.TraceIdResolver)
    ], TraceIdResolverImpl);
    return TraceIdResolverImpl;
}());
exports.TraceIdResolverImpl = TraceIdResolverImpl;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/trace/trace-middleware.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/trace/trace-middleware.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var trace_protocol_1 = __webpack_require__(/*! ./trace-protocol */ "./node_modules/@malagu/web/lib/node/trace/trace-protocol.js");
var middleware_1 = __webpack_require__(/*! ../middleware */ "./node_modules/@malagu/web/lib/node/middleware/index.js");
var context_1 = __webpack_require__(/*! ../context */ "./node_modules/@malagu/web/lib/node/context.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var trace_protocol_2 = __webpack_require__(/*! ./trace-protocol */ "./node_modules/@malagu/web/lib/node/trace/trace-protocol.js");
var TraceMiddleware = /** @class */ (function () {
    function TraceMiddleware() {
        this.priority = trace_protocol_2.TRACE_MIDDLEWARE_PRIORITY;
    }
    TraceMiddleware.prototype.handle = function (ctx, next) {
        return __awaiter(this, void 0, void 0, function () {
            var method, path, traceId, now;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = ctx.request.method;
                        path = ctx.request.path;
                        return [4 /*yield*/, this.traceIdResolver.resolve()];
                    case 1:
                        traceId = _a.sent();
                        this.logger.info("starting " + method + " " + path + " with traceId[" + traceId + "]");
                        now = Date.now();
                        context_1.Context.setTraceId(traceId);
                        ctx.response.setHeader(this.traceField, traceId);
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, , 4, 5]);
                        return [4 /*yield*/, next()];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        this.logger.info("ending " + method + " " + path + " with traceId[" + traceId + "], cost " + (Date.now() - now) + "ms");
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        core_1.Autowired(trace_protocol_1.TraceIdResolver),
        __metadata("design:type", Object)
    ], TraceMiddleware.prototype, "traceIdResolver", void 0);
    __decorate([
        core_1.Autowired(core_1.Logger),
        __metadata("design:type", Object)
    ], TraceMiddleware.prototype, "logger", void 0);
    __decorate([
        core_1.Value(trace_protocol_2.TRACE_ID_RESPONSE_FIELD),
        __metadata("design:type", String)
    ], TraceMiddleware.prototype, "traceField", void 0);
    TraceMiddleware = __decorate([
        core_1.Component(middleware_1.Middleware)
    ], TraceMiddleware);
    return TraceMiddleware;
}());
exports.TraceMiddleware = TraceMiddleware;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/trace/trace-protocol.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/trace/trace-protocol.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Be sure this middleware is always at first position
exports.TRACE_MIDDLEWARE_PRIORITY = 2200;
exports.TRACE_ID_REQUEST_FIELD = 'malagu.trace.requestField';
exports.TRACE_ID_RESPONSE_FIELD = 'malagu.trace.responseField';
exports.TraceIdResolver = Symbol('TraceIdResolver');


/***/ }),

/***/ "./src/node/controller/login.ts":
/*!**************************************!*\
  !*** ./src/node/controller/login.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
var node_1 = __webpack_require__(/*! @malagu/mvc/lib/node */ "./node_modules/@malagu/mvc/lib/node/index.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var User_1 = __webpack_require__(/*! ../entity/User */ "./src/node/entity/User.ts");
var loginService_1 = __webpack_require__(/*! ../service/loginService */ "./src/node/service/loginService.ts");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.login = function (user) {
        return this.userService.login(user);
    };
    UserController.prototype.isLogin = function () {
        return this.userService.isLogin();
    };
    var _a, _b, _c, _d;
    __decorate([
        core_1.Autowired(),
        __metadata("design:type", typeof (_a = typeof loginService_1.UserService !== "undefined" && loginService_1.UserService) === "function" ? _a : Object)
    ], UserController.prototype, "userService", void 0);
    __decorate([
        node_1.Post('login'),
        __param(0, node_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_b = typeof User_1.User !== "undefined" && User_1.User) === "function" ? _b : Object]),
        __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
    ], UserController.prototype, "login", null);
    __decorate([
        node_1.Get('isLogin'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
    ], UserController.prototype, "isLogin", null);
    UserController = __decorate([
        node_1.Controller('user')
    ], UserController);
    return UserController;
}());
exports.UserController = UserController;


/***/ }),

/***/ "./src/node/entity/User.ts":
/*!*********************************!*\
  !*** ./src/node/entity/User.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
exports.User = User;


/***/ }),

/***/ "./src/node/module.ts":
/*!****************************!*\
  !*** ./src/node/module.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./controller/login */ "./src/node/controller/login.ts");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
exports.default = core_1.autoBind();


/***/ }),

/***/ "./src/node/service/loginService.ts":
/*!******************************************!*\
  !*** ./src/node/service/loginService.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var rpc_1 = __webpack_require__(/*! @malagu/rpc */ "./node_modules/@malagu/rpc/lib/common/index.js");
var responseData_1 = __webpack_require__(/*! ../utils/responseData */ "./src/node/utils/responseData.ts");
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.login = function (user) {
        return __awaiter(this, void 0, Promise, function () {
            var data, foo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.UserServer.login(user)];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            node_1.Context.getSession().foo = data;
                            foo = node_1.Context.getSession();
                            console.log(foo);
                            return [2 /*return*/, responseData_1.responseData(0, data, '登录成功')];
                        }
                        else {
                            return [2 /*return*/, responseData_1.responseData(400, data, '登录失败,用户名或密码错误')];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.isLogin = function () {
        return __awaiter(this, void 0, Promise, function () {
            var foo;
            return __generator(this, function (_a) {
                foo = node_1.Context.getSession().foo;
                console.log(foo);
                if (foo) {
                    return [2 /*return*/, Promise.resolve(responseData_1.responseData(0, foo, '用户已登录'))];
                }
                else {
                    return [2 /*return*/, Promise.resolve(responseData_1.responseData(0, foo, '用户未登录'))];
                }
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        rpc_1.Autorpc('https://1476306111676342.cn-shanghai.fc.aliyuncs.com/2016-08-15/proxy/malagu.test/auth-vetify/api/UserInterfaceServive'),
        __metadata("design:type", Object)
    ], UserService.prototype, "UserServer", void 0);
    UserService = __decorate([
        core_1.Component()
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;


/***/ }),

/***/ "./src/node/utils/responseData.ts":
/*!****************************************!*\
  !*** ./src/node/utils/responseData.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.responseData = void 0;
function responseData(code, data, message) {
    return {
        code: code,
        data: data,
        message: message
    };
}
exports.responseData = responseData;


/***/ }),

/***/ 0:
/*!**************************************************************************************!*\
  !*** multi ./node_modules/@malagu/web/lib/node/application/dev-application-entry.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\zenghuataoa\Desktop\useradminmicroservice\userlogin\node_modules\@malagu\web\lib\node\application\dev-application-entry.js */"./node_modules/@malagu/web/lib/node/application/dev-application-entry.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "class-transformer":
/*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("class-transformer");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("class-validator");

/***/ }),

/***/ "cookies":
/*!**************************!*\
  !*** external "cookies" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookies");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "crc":
/*!**********************!*\
  !*** external "crc" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crc");

/***/ }),

/***/ "express-http-context":
/*!***************************************!*\
  !*** external "express-http-context" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-http-context");

/***/ }),

/***/ "fs-extra":
/*!***************************!*\
  !*** external "fs-extra" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs-extra");

/***/ }),

/***/ "inversify":
/*!****************************!*\
  !*** external "inversify" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inversify");

/***/ }),

/***/ "jexl":
/*!***********************!*\
  !*** external "jexl" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jexl");

/***/ }),

/***/ "loglevel":
/*!***************************!*\
  !*** external "loglevel" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("loglevel");

/***/ }),

/***/ "mustache":
/*!***************************!*\
  !*** external "mustache" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mustache");

/***/ }),

/***/ "node-gzip":
/*!****************************!*\
  !*** external "node-gzip" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-gzip");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "reflect-metadata":
/*!***********************************!*\
  !*** external "reflect-metadata" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reflect-metadata");

/***/ }),

/***/ "source-map-support":
/*!*************************************!*\
  !*** external "source-map-support" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("source-map-support");

/***/ }),

/***/ "traverse":
/*!***************************!*\
  !*** external "traverse" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("traverse");

/***/ }),

/***/ "ts-custom-error":
/*!**********************************!*\
  !*** external "ts-custom-error" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ts-custom-error");

/***/ }),

/***/ "url-join":
/*!***************************!*\
  !*** external "url-join" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url-join");

/***/ }),

/***/ "url-pattern":
/*!******************************!*\
  !*** external "url-pattern" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url-pattern");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),

/***/ "uuid/v4":
/*!**************************!*\
  !*** external "uuid/v4" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ }),

/***/ "vscode-jsonrpc":
/*!*********************************!*\
  !*** external "vscode-jsonrpc" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vscode-jsonrpc");

/***/ }),

/***/ "vscode-jsonrpc/lib/events":
/*!********************************************!*\
  !*** external "vscode-jsonrpc/lib/events" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vscode-jsonrpc/lib/events");

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map