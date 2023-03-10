	define("openDataContext/@babel/runtime/helpers/Objectvalues.js", function(require, module, exports){ 			
Object.values||(Object.values=function(e){if(e!==Object(e))throw new TypeError("Object.values called on a non-object");var t,r=[];for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.push(e[t]);return r}); 
 			});
 		define("openDataContext/@babel/runtime/helpers/classCallCheck.js", function(require, module, exports){ 			
function _classCallCheck(a,l){if(!(a instanceof l))throw new TypeError("Cannot call a class as a function")}module.exports=_classCallCheck; 
 			});
 		define("openDataContext/@babel/runtime/helpers/createClass.js", function(require, module, exports){ 			
function _defineProperties(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),e}module.exports=_createClass; 
 			});
 		define("openDataContext/@babel/runtime/helpers/defineProperty.js", function(require, module, exports){ 			
function _defineProperty(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}module.exports=_defineProperty; 
 			});
 		define("openDataContext/@babel/runtime/helpers/interopRequireDefault.js", function(require, module, exports){ 			
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}module.exports=_interopRequireDefault; 
 			});
 		define("openDataContext/@babel/runtime/helpers/objectSpread2.js", function(require, module, exports){ 			
var defineProperty=require("./defineProperty");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}module.exports=_objectSpread2; 
 			});
 		define("openDataContext/@babel/runtime/helpers/typeof.js", function(require, module, exports){ 			
function _typeof(o){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?module.exports=_typeof=function(o){return typeof o}:module.exports=_typeof=function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}module.exports=_typeof; 
 			});
 		define("openDataContext/engine.min.js", function(require, module, exports){ 			
"use strict";

require("../openDataContext/@babel/runtime/helpers/Objectvalues");

var _typeof2 = require("../openDataContext/@babel/runtime/helpers/typeof");

module.exports = function (t) {
  var e = {};

  function n(o) {
    if (e[o]) return e[o].exports;
    var i = e[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return t[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
  }

  return n.m = t, n.c = e, n.d = function (t, e, o) {
    n.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: o
    });
  }, n.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, n.t = function (t, e) {
    if (1 & e && (t = n(t)), 8 & e) return t;
    if (4 & e && "object" == _typeof2(t) && t && t.__esModule) return t;
    var o = Object.create(null);
    if (n.r(o), Object.defineProperty(o, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var i in t) {
      n.d(o, i, function (e) {
        return t[e];
      }.bind(null, i));
    }
    return o;
  }, n.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };
    return n.d(e, "a", e), e;
  }, n.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, n.p = "", n(n.s = 0);
}([function (t, e, n) {
  "use strict";

  n.r(e), n.d(e, "EE", function () {
    return T;
  }), n(1);
  var o = n(2),
      i = n(5),
      r = n(4),
      l = n.n(r),
      a = n(6),
      s = n.n(a),
      c = n(7),
      u = n(8),
      h = n.n(u),
      f = n(14),
      d = n(16);

  function p(t) {
    return (p = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
      return _typeof2(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof2(t);
    })(t);
  }

  function y(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function v(t, e) {
    for (var n = 0; n < e.length; n++) {
      var o = e[n];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
    }
  }

  function _(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), e && g(t, e);
  }

  function g(t, e) {
    return (g = Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t;
    })(t, e);
  }

  function m(t, e) {
    return !e || "object" !== p(e) && "function" != typeof e ? b(t) : e;
  }

  function b(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }

  function x() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
    } catch (t) {
      return !1;
    }
  }

  function w(t) {
    return (w = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
  }

  var T = new l.a(),
      S = new i.default("imgPool"),
      k = new i.default("canvasPool"),
      L = {
    view: d.View,
    text: d.Text,
    image: d.Image,
    scrollview: d.ScrollView,
    bitmaptext: d.BitMapText
  };

  function O(t) {
    return "string" == typeof t && /\d+(?:\.\d+)?%/.test(t);
  }

  function C(t, e) {
    if ("number" == typeof t) return t;
    var n = t.match(/(\d+(?:\.\d+)?)%/)[1];
    return n ? e * n * .01 : void 0;
  }

  var E = function t(e, n, o) {
    var i = this,
        r = L[e.name],
        l = e.children || [],
        a = e.attr || {},
        s = a.id || "",
        c = Object.keys(a).reduce(function (t, e) {
      var o = a[e],
          i = e;
      return "id" === e ? (t.style = Object.assign(t.style || {}, n[s] || {}), t) : "class" === e ? (t.style = o.split(/\s+/).reduce(function (t, e) {
        return Object.assign(t, n[e]);
      }, t.style || {}), t) : (t[i] = "true" === o || "false" !== o && o, t);
    }, {});
    c.idName = s, c.className = a.class || "";
    var u,
        h = c.style;
    h && (u = o ? o.style : "undefined" != typeof sharedCanvas ? sharedCanvas : "undefined" != typeof __env ? __env.getSharedCanvas() : {
      width: 300,
      height: 150
    }, O(h.width) && (h.width = u.width ? C(h.width, u.width) : 0), O(h.height) && (h.height = u.height ? C(h.height, u.height) : 0));
    var f = new r(c);
    return f.root = this, l.forEach(function (e) {
      var o = t.call(i, e, n, c);
      f.add(o);
    }), f;
  },
      B = function t(e) {
    return Object.keys(e.children).map(function (t) {
      return e.children[t];
    }).map(function (e) {
      return {
        id: e.id,
        name: e.name,
        style: e.style,
        children: t(e)
      };
    });
  },
      D = function t(e, n) {
    e.forEach(function (e) {
      if ("ScrollView" !== e.type) return e.insert(n), t(e.children, n);
      e.insertScrollView(n);
    });
  };

  function N(t, e) {
    var n = this;
    t.forEach(function (t) {
      var o = e.find(function (e) {
        return e.id === t.id;
      });
      o.layoutBox = o.layoutBox || {}, ["left", "top", "width", "height"].forEach(function (e) {
        o.layoutBox[e] = t.layout[e];
      }), o.parent ? (o.layoutBox.absoluteX = (o.parent.layoutBox.absoluteX || 0) + o.layoutBox.left, o.layoutBox.absoluteY = (o.parent.layoutBox.absoluteY || 0) + o.layoutBox.top) : (o.layoutBox.absoluteX = o.layoutBox.left, o.layoutBox.absoluteY = o.layoutBox.top), o.layoutBox.originalAbsoluteY = o.layoutBox.absoluteY, o.layoutBox.originalAbsoluteX = o.layoutBox.absoluteX, "ScrollView" === o.type && o.updateRenderPort(n.renderport), N.call(n, t.children, o.children);
    });
  }

  var M = function t(e, n, o) {
    e.forEach(function (e) {
      var i = n.find(function (t) {
        return t.id === e.id;
      });
      i.realLayoutBox = i.realLayoutBox || {}, ["left", "top", "width", "height"].forEach(function (t) {
        i.realLayoutBox[t] = e.layout[t] * o;
      }), i.parent ? (Object.defineProperty(i.realLayoutBox, "realX", {
        configurable: !0,
        enumerable: !0,
        get: function get() {
          var t = (i.parent.realLayoutBox.realX || 0) + i.realLayoutBox.left;
          return i.parent && "ScrollView" === i.parent.type && (t -= i.parent.scrollLeft * o), t;
        }
      }), Object.defineProperty(i.realLayoutBox, "realY", {
        configurable: !0,
        enumerable: !0,
        get: function get() {
          var t = (i.parent.realLayoutBox.realY || 0) + i.realLayoutBox.top;
          return i.parent && "ScrollView" === i.parent.type && (t -= i.parent.scrollTop * o), t;
        }
      })) : (i.realLayoutBox.realX = i.realLayoutBox.left, i.realLayoutBox.realY = i.realLayoutBox.top), t(e.children, i.children, o);
    });
  };

  function R(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        n = arguments.length > 2 ? arguments[2] : void 0;
    return Object.keys(t.children).forEach(function (o) {
      var i = t.children[o];
      i.idName === n && e.push(i), Object.keys(i.children).length && R(i, e, n);
    }), e;
  }

  function A(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        n = arguments.length > 2 ? arguments[2] : void 0;
    return Object.keys(t.children).forEach(function (o) {
      var i = t.children[o];
      i.className.split(/\s+/).indexOf(n) > -1 && e.push(i), Object.keys(i.children).length && A(i, e, n);
    }), e;
  }

  var j = new (function () {
    _(l, o.default);

    var t,
        e,
        n,
        i,
        r = (t = l, e = x(), function () {
      var n,
          o = w(t);

      if (e) {
        var i = w(this).constructor;
        n = Reflect.construct(o, arguments, i);
      } else n = o.apply(this, arguments);

      return m(this, n);
    });

    function l() {
      var t,
          e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = e.style,
          o = e.name;
      return y(this, l), (t = r.call(this, {
        style: n,
        id: 0,
        name: o
      })).hasEventHandler = !1, t.elementTree = null, t.renderContext = null, t.debugInfo = {}, t.renderport = {}, t.viewport = {}, t.touchStart = t.eventHandler("touchstart").bind(b(t)), t.touchMove = t.eventHandler("touchmove").bind(b(t)), t.touchEnd = t.eventHandler("touchend").bind(b(t)), t.touchCancel = t.eventHandler("touchcancel").bind(b(t)), t.version = "0.0.7", t.touchMsg = {}, t.hasViewPortSet = !1, t.realLayoutBox = {
        realX: 0,
        realY: 0
      }, t.state = c.STATE.UNINIT, t.bitMapFonts = [], t;
    }

    return n = l, (i = [{
      key: "updateViewPort",
      value: function value(t) {
        this.viewport.width = t.width || 0, this.viewport.height = t.height || 0, this.viewport.x = t.x || 0, this.viewport.y = t.y || 0, this.realLayoutBox = {
          realX: this.viewport.x,
          realY: this.viewport.y
        }, this.hasViewPortSet = !0;
      }
    }, {
      key: "init",
      value: function value(t, e, n) {
        var o = new Date(),
            i = {
          attributeNamePrefix: "",
          attrNodeName: "attr",
          textNodeName: "#text",
          ignoreAttributes: !1,
          ignoreNameSpace: !0,
          allowBooleanAttributes: !0,
          parseNodeValue: !1,
          parseAttributeValue: !1,
          trimValues: !0,
          parseTrueNumberOnly: !1
        };
        n && "function" == typeof n && (i.attrValueProcessor = n);
        var r = h.a.parse(t, i, !0).children[0];
        this.debugInfo.xmlTree = new Date() - o, this.layoutTree = E.call(this, r, e), this.debugInfo.layoutTree = new Date() - o, this.add(this.layoutTree);
        var l = {
          id: this.id,
          style: {
            width: this.style.width,
            height: this.style.height,
            flexDirection: "row"
          },
          children: B(this)
        };
        s()(l), this.elementTree = l, this.debugInfo.renderTree = new Date() - o;
        var a = this.children[0];
        void 0 === a.style.width || void 0 === a.style.height ? console.error("Please set width and height property for root element") : (this.renderport.width = a.style.width, this.renderport.height = a.style.height), this.state = c.STATE.INITED;
      }
    }, {
      key: "layout",
      value: function value(t) {
        var e = new Date();
        this.renderContext = t, this.renderContext && this.renderContext.clearRect(0, 0, this.renderport.width, this.renderport.height), this.hasViewPortSet || console.error("Please invoke method `updateViewPort` before method `layout`"), N.call(this, this.elementTree.children, this.children), this.debugInfo.layoutChildren = new Date() - e, M(this.elementTree.children, this.children, this.viewport.width / this.renderport.width), this.debugInfo.updateRealLayout = new Date() - e, D(this.children, t), this.debugInfo.renderChildren = new Date() - e, this.bindEvents(), this.state = c.STATE.RENDERED;
      }
    }, {
      key: "initRepaint",
      value: function value() {
        var t = this;
        this.on("repaint", function () {
          t.repaint();
        }), this.EE.on("one__image__render__done", function () {
          t.repaint();
        });
      }
    }, {
      key: "repaint",
      value: function value() {
        Object(c.repaintChildren)(this.children), this.emit("repaint__done");
      }
    }, {
      key: "getChildByPos",
      value: function value(t, e, n) {
        for (var o = Object.keys(t.children), i = 0; i < o.length; i++) {
          var r = t.children[o[i]],
              l = r.realLayoutBox;
          if (l.realX <= e && e <= l.realX + l.width && l.realY <= n && n <= l.realY + l.height) return Object.keys(r.children).length ? this.getChildByPos(r, e, n) : r;
        }

        return t;
      }
    }, {
      key: "eventHandler",
      value: function value(t) {
        return function (e) {
          if (this.elementTree) {
            var n = e.touches && e.touches[0] || e.changedTouches && e.changedTouches[0] || e;

            if (n && n.pageX && n.pageY) {
              n.timeStamp || (n.timeStamp = e.timeStamp);
              var o = n && this.getChildByPos(this, n.pageX, n.pageY);
              o && o.emit(t, e), "touchstart" !== t && "touchend" !== t || (this.touchMsg[t] = n), "touchend" === t && Object(c.isClick)(this.touchMsg) && o && o.emit("click", e);
            }
          }
        };
      }
    }, {
      key: "bindEvents",
      value: function value() {
        this.hasEventHandler || (this.hasEventHandler = !0, "undefined" != typeof __env ? (__env.onTouchStart(this.touchStart), __env.onTouchMove(this.touchMove), __env.onTouchEnd(this.touchEnd), __env.onTouchCancel(this.touchCancel)) : (document.onmousedown = this.touchStart, document.onmousemove = this.touchMove, document.onmouseup = this.touchEnd, document.onmouseleave = this.touchEnd));
      }
    }, {
      key: "emit",
      value: function value(t, e) {
        T.emit(t, e);
      }
    }, {
      key: "on",
      value: function value(t, e) {
        T.on(t, e);
      }
    }, {
      key: "once",
      value: function value(t, e) {
        T.once(t, e);
      }
    }, {
      key: "off",
      value: function value(t, e) {
        T.off(t, e);
      }
    }, {
      key: "getElementsById",
      value: function value(t) {
        return R(this, [], t);
      }
    }, {
      key: "getElementsByClassName",
      value: function value(t) {
        return A(this, [], t);
      }
    }, {
      key: "destroyAll",
      value: function value(t) {
        var e = this;
        t || (t = this), t.children.forEach(function (t) {
          t.destroy(), e.destroyAll(t), t.destroySelf && t.destroySelf();
        });
      }
    }, {
      key: "clear",
      value: function value() {
        this.destroyAll(), this.elementTree = null, this.children = [], this.layoutTree = {}, this.state = c.STATE.CLEAR, k.getList().forEach(function (t) {
          t.context && t.context.clearRect(0, 0, t.canvas.width, t.canvas.height), t.elements = [], t.canvas = null, t.context = null;
        }), this.renderContext && this.renderContext.clearRect(0, 0, this.renderContext.canvas.width, this.renderContext.canvas.height), this.EE.off("image__render__done");
      }
    }, {
      key: "clearPool",
      value: function value() {
        S.clear(), k.clear();
      }
    }, {
      key: "clearAll",
      value: function value() {
        this.clear(), this.clearPool();
      }
    }, {
      key: "loadImgs",
      value: function value(t) {
        t.forEach(function (t) {
          var e = Object(c.createImage)();
          S.set(t, e), e.onload = function () {
            e.loadDone = !0;
          }, e.onloadcbks = [], e.src = t;
        });
      }
    }, {
      key: "registBitMapFont",
      value: function value(t, e, n) {
        var o = new f.default(t, e, n);
        this.bitMapFonts.push(o);
      }
    }]) && v(n.prototype, i), l;
  }())({
    style: {
      width: 0,
      height: 0
    },
    name: "layout"
  });
  e.default = j;
}, function () {
  "undefined" != typeof GameGlobal && (GameGlobal.__env = GameGlobal.wx || GameGlobal.tt || GameGlobal.swan);
}, function (t, e, n) {
  "use strict";

  n.r(e), n.d(e, "default", function () {
    return f;
  });
  var o = n(3);

  function i(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function r(t, e) {
    for (var n = 0; n < e.length; n++) {
      var o = e[n];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
    }
  }

  var l = new (n(4))(),
      a = 0,
      s = 1;

  function c(t) {
    var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
    return e ? {
      r: parseInt(e[1], 16),
      g: parseInt(e[2], 16),
      b: parseInt(e[3], 16)
    } : null;
  }

  function u(t, e) {
    var n = c(t);
    return null == e && (e = 1), "rgba(".concat(n.r, ", ").concat(n.g, ", ").concat(n.b, ", ").concat(e, ")");
  }

  var h = function h(t, e) {
    return ["click", "touchstart", "touchmove", "touchend", "touchcancel"].indexOf(t), "element-".concat(e, "-").concat(t);
  },
      f = function () {
    function t(e) {
      var n = this,
          r = e.style,
          c = void 0 === r ? {} : r,
          h = e.props,
          f = void 0 === h ? {} : h,
          d = e.idName,
          p = void 0 === d ? "" : d,
          y = e.className,
          v = void 0 === y ? "" : y,
          _ = e.id,
          g = void 0 === _ ? ++a : _;

      for (var m in i(this, t), this.children = [], this.childMap = {}, this.parent = null, this.parentId = 0, this.id = g, this.props = f, this.idName = p, this.className = v, this.style = c, this.EE = l, this.root = null, this.isDestroyed = !1, this.layoutBox = {}, void 0 !== c.opacity && c.color && c.color.indexOf("#") > -1 && (c.color = u(c.color, c.opacity)), void 0 !== c.opacity && c.backgroundColor && c.backgroundColor.indexOf("#") > -1 && (c.backgroundColor = u(c.backgroundColor, c.opacity)), this.style) {
        o.scalableStyles.indexOf(m) > -1 && (this.style[m] *= s);
      }

      ["touchstart", "touchmove", "touchcancel", "touchend", "click"].forEach(function (t) {
        n.on(t, function (e, o) {
          n.parent && n.parent.emit(t, e, o);
        });
      }), this.initRepaint();
    }

    var e, n;
    return e = t, (n = [{
      key: "initRepaint",
      value: function value() {
        var t = this;
        this.on("repaint", function (e) {
          t.parent && t.parent.emit("repaint", e);
        });
      }
    }, {
      key: "repaint",
      value: function value() {}
    }, {
      key: "insert",
      value: function value() {}
    }, {
      key: "destroy",
      value: function value() {
        var t = this;
        ["touchstart", "touchmove", "touchcancel", "touchend", "click", "repaint"].forEach(function (e) {
          t.off(e);
        }), this.EE.off("image__render__done"), this.isDestroyed = !0, this.EE = null, this.parent = null, this.ctx = null, this.realLayoutBox = null, this.layoutBox = null, this.props = null, this.style = null, this.renderBoxes && (this.renderBoxes = null);
      }
    }, {
      key: "add",
      value: function value(t) {
        t.parent = this, t.parentId = this.id, this.children.push(t);
      }
    }, {
      key: "emit",
      value: function value(t) {
        for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++) {
          n[o - 1] = arguments[o];
        }

        l.emit.apply(l, [h(t, this.id)].concat(n));
      }
    }, {
      key: "on",
      value: function value(t, e) {
        l.on(h(t, this.id), e);
      }
    }, {
      key: "once",
      value: function value(t, e) {
        l.once(h(t, this.id), e);
      }
    }, {
      key: "off",
      value: function value(t, e) {
        l.off(h(t, this.id), e);
      }
    }, {
      key: "renderBorder",
      value: function value(t, e) {
        var n = this.style || {},
            o = n.borderRadius || 0,
            i = n.borderWidth,
            r = void 0 === i ? 0 : i,
            l = n.borderTopLeftRadius || o,
            a = n.borderTopRightRadius || o,
            s = n.borderBottomLeftRadius || o,
            c = n.borderBottomRightRadius || o,
            u = e || this.layoutBox,
            h = n.borderColor,
            f = u.absoluteX,
            d = u.absoluteY,
            p = u.width,
            y = u.height,
            v = o || l || a || s || c;
        return r || v ? (t.beginPath(), t.lineWidth = r, t.strokeStyle = h, t.moveTo(f + l, d), t.lineTo(f + p - a, d), t.arcTo(f + p, d, f + p, d + a, a), t.lineTo(f + p, d + y - c), t.arcTo(f + p, d + y, f + p - c, d + y, c), t.lineTo(f + s, d + y), t.arcTo(f, d + y, f, d + y - s, s), t.lineTo(f, d + l), t.arcTo(f, d, f + l, d, l), {
          needClip: !!v,
          needStroke: !!r
        }) : {
          needClip: !1,
          needStroke: !1
        };
      }
    }]) && r(e.prototype, n), t;
  }();
}, function (t, e, n) {
  "use strict";

  n.r(e), n.d(e, "scalableStyles", function () {
    return i;
  }), n.d(e, "textStyles", function () {
    return o;
  }), n.d(e, "layoutAffectedStyles", function () {
    return r;
  });
  var o = ["color", "fontSize", "textAlign", "fontWeight", "lineHeight", "lineBreak"],
      i = ["left", "top", "right", "bottom", "width", "height", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom", "padding", "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "fontSize", "lineHeight", "borderRadius", "minWidth", "maxWidth", "minHeight", "maxHeight"],
      r = ["margin", "marginTop", "marginBottom", "marginLeft", "marginRight", "padding", "paddingTop", "paddingBottom", "paddingLeft", "paddingRight", "width", "height"];
}, function (t) {
  function e() {}

  e.prototype = {
    on: function on(t, e, n) {
      var o = this.e || (this.e = {});
      return (o[t] || (o[t] = [])).push({
        fn: e,
        ctx: n
      }), this;
    },
    once: function once(t, e, n) {
      var o = this;

      function i() {
        o.off(t, i), e.apply(n, arguments);
      }

      return i._ = e, this.on(t, i, n);
    },
    emit: function emit(t) {
      for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), o = 0, i = n.length; o < i; o++) {
        n[o].fn.apply(n[o].ctx, e);
      }

      return this;
    },
    off: function off(t, e) {
      var n = this.e || (this.e = {}),
          o = n[t],
          i = [];
      if (o && e) for (var r = 0, l = o.length; r < l; r++) {
        o[r].fn !== e && o[r].fn._ !== e && i.push(o[r]);
      }
      return i.length ? n[t] = i : delete n[t], this;
    }
  }, t.exports = e, t.exports.TinyEmitter = e;
}, function (t, e, n) {
  "use strict";

  function o(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var o = e[n];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
    }
  }

  n.r(e), n.d(e, "default", function () {
    return l;
  });

  var r = [],
      l = function () {
    function t() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "pool";
      o(this, t);
      var n = r.find(function (t) {
        return t.name === e;
      });
      if (n) return n;
      this.name = e, this.pool = {}, r.push(this);
    }

    var e, n;
    return e = t, (n = [{
      key: "get",
      value: function value(t) {
        return this.pool[t];
      }
    }, {
      key: "set",
      value: function value(t, e) {
        this.pool[t] = e;
      }
    }, {
      key: "clear",
      value: function value() {
        this.pool = {};
      }
    }, {
      key: "getList",
      value: function value() {
        return Object.values(this.pool);
      }
    }]) && i(e.prototype, n), t;
  }();
}, function (t, e) {
  var n, o;
  void 0 === (o = "function" == typeof (n = function n() {
    var e = function () {
      var t,
          e = "inherit",
          n = "ltr",
          o = "rtl",
          i = "row",
          r = "row-reverse",
          l = "column",
          a = "column-reverse",
          s = "flex-start",
          c = "center",
          u = "flex-end",
          h = "space-between",
          f = "space-around",
          d = "flex-start",
          p = "center",
          y = "flex-end",
          v = "stretch",
          _ = "relative",
          g = "absolute",
          m = {
        row: "left",
        "row-reverse": "right",
        column: "top",
        "column-reverse": "bottom"
      },
          b = {
        row: "right",
        "row-reverse": "left",
        column: "bottom",
        "column-reverse": "top"
      },
          x = {
        row: "left",
        "row-reverse": "right",
        column: "top",
        "column-reverse": "bottom"
      },
          w = {
        row: "width",
        "row-reverse": "width",
        column: "height",
        "column-reverse": "height"
      };

      function T(t) {
        return void 0 === t;
      }

      function S(t) {
        return t === i || t === r;
      }

      function k(t) {
        return t === l || t === a;
      }

      function L(t, e) {
        if (void 0 !== t.style.marginStart && S(e)) return t.style.marginStart;
        var n = null;

        switch (e) {
          case "row":
            n = t.style.marginLeft;
            break;

          case "row-reverse":
            n = t.style.marginRight;
            break;

          case "column":
            n = t.style.marginTop;
            break;

          case "column-reverse":
            n = t.style.marginBottom;
        }

        return void 0 !== n ? n : void 0 !== t.style.margin ? t.style.margin : 0;
      }

      function O(t, e) {
        if (void 0 !== t.style.marginEnd && S(e)) return t.style.marginEnd;
        var n = null;

        switch (e) {
          case "row":
            n = t.style.marginRight;
            break;

          case "row-reverse":
            n = t.style.marginLeft;
            break;

          case "column":
            n = t.style.marginBottom;
            break;

          case "column-reverse":
            n = t.style.marginTop;
        }

        return null != n ? n : void 0 !== t.style.margin ? t.style.margin : 0;
      }

      function C(t, e) {
        if (void 0 !== t.style.paddingStart && t.style.paddingStart >= 0 && S(e)) return t.style.paddingStart;
        var n = null;

        switch (e) {
          case "row":
            n = t.style.paddingLeft;
            break;

          case "row-reverse":
            n = t.style.paddingRight;
            break;

          case "column":
            n = t.style.paddingTop;
            break;

          case "column-reverse":
            n = t.style.paddingBottom;
        }

        return null != n && n >= 0 ? n : void 0 !== t.style.padding && t.style.padding >= 0 ? t.style.padding : 0;
      }

      function E(t, e) {
        if (void 0 !== t.style.paddingEnd && t.style.paddingEnd >= 0 && S(e)) return t.style.paddingEnd;
        var n = null;

        switch (e) {
          case "row":
            n = t.style.paddingRight;
            break;

          case "row-reverse":
            n = t.style.paddingLeft;
            break;

          case "column":
            n = t.style.paddingBottom;
            break;

          case "column-reverse":
            n = t.style.paddingTop;
        }

        return null != n && n >= 0 ? n : void 0 !== t.style.padding && t.style.padding >= 0 ? t.style.padding : 0;
      }

      function B(t, e) {
        if (void 0 !== t.style.borderStartWidth && t.style.borderStartWidth >= 0 && S(e)) return t.style.borderStartWidth;
        var n = null;

        switch (e) {
          case "row":
            n = t.style.borderLeftWidth;
            break;

          case "row-reverse":
            n = t.style.borderRightWidth;
            break;

          case "column":
            n = t.style.borderTopWidth;
            break;

          case "column-reverse":
            n = t.style.borderBottomWidth;
        }

        return null != n && n >= 0 ? n : void 0 !== t.style.borderWidth && t.style.borderWidth >= 0 ? t.style.borderWidth : 0;
      }

      function D(t, e) {
        if (void 0 !== t.style.borderEndWidth && t.style.borderEndWidth >= 0 && S(e)) return t.style.borderEndWidth;
        var n = null;

        switch (e) {
          case "row":
            n = t.style.borderRightWidth;
            break;

          case "row-reverse":
            n = t.style.borderLeftWidth;
            break;

          case "column":
            n = t.style.borderBottomWidth;
            break;

          case "column-reverse":
            n = t.style.borderTopWidth;
        }

        return null != n && n >= 0 ? n : void 0 !== t.style.borderWidth && t.style.borderWidth >= 0 ? t.style.borderWidth : 0;
      }

      function N(t, e) {
        return C(t, e) + B(t, e);
      }

      function M(t, e) {
        return E(t, e) + D(t, e);
      }

      function R(t, e) {
        return B(t, e) + D(t, e);
      }

      function A(t, e) {
        return L(t, e) + O(t, e);
      }

      function j(t, e) {
        return N(t, e) + M(t, e);
      }

      function P(t) {
        return t.style.justifyContent ? t.style.justifyContent : "flex-start";
      }

      function I(t) {
        return t.style.alignContent ? t.style.alignContent : "flex-start";
      }

      function X(t, e) {
        return e.style.alignSelf ? e.style.alignSelf : t.style.alignItems ? t.style.alignItems : "stretch";
      }

      function Y(t, e) {
        if (e === o) {
          if (t === i) return r;
          if (t === r) return i;
        }

        return t;
      }

      function W(t, o) {
        var i;
        return (i = t.style.direction ? t.style.direction : e) === e && (i = void 0 === o ? n : o), i;
      }

      function V(t) {
        return t.style.flexDirection ? t.style.flexDirection : l;
      }

      function z(t, e) {
        return k(t) ? Y(i, e) : l;
      }

      function H(t) {
        return t.style.position ? t.style.position : "relative";
      }

      function F(t) {
        return H(t) === _ && t.style.flex > 0;
      }

      function q(t) {
        return "wrap" === t.style.flexWrap;
      }

      function G(t, e) {
        return t.layout[w[e]] + A(t, e);
      }

      function Z(t, e) {
        return void 0 !== t.style[w[e]] && t.style[w[e]] >= 0;
      }

      function K(t, e) {
        return void 0 !== t.style[e];
      }

      function U(t) {
        return void 0 !== t.style.measure;
      }

      function J(t, e) {
        return void 0 !== t.style[e] ? t.style[e] : 0;
      }

      function $(t, e, n) {
        var o = {
          row: t.style.minWidth,
          "row-reverse": t.style.minWidth,
          column: t.style.minHeight,
          "column-reverse": t.style.minHeight
        }[e],
            i = {
          row: t.style.maxWidth,
          "row-reverse": t.style.maxWidth,
          column: t.style.maxHeight,
          "column-reverse": t.style.maxHeight
        }[e],
            r = n;
        return void 0 !== i && i >= 0 && r > i && (r = i), void 0 !== o && o >= 0 && r < o && (r = o), r;
      }

      function Q(t, e) {
        return t > e ? t : e;
      }

      function tt(t, e) {
        void 0 === t.layout[w[e]] && Z(t, e) && (t.layout[w[e]] = Q($(t, e, t.style[w[e]]), j(t, e)));
      }

      function et(t, e, n) {
        e.layout[b[n]] = t.layout[w[n]] - e.layout[w[n]] - e.layout[x[n]];
      }

      function nt(t, e) {
        return void 0 !== t.style[m[e]] ? J(t, m[e]) : -J(t, b[e]);
      }

      function ot(e, n, o) {
        var k = W(e, o),
            C = Y(V(e), k),
            E = z(C, k),
            D = Y(i, k);
        tt(e, C), tt(e, E), e.layout.direction = k, e.layout[m[C]] += L(e, C) + nt(e, C), e.layout[b[C]] += O(e, C) + nt(e, C), e.layout[m[E]] += L(e, E) + nt(e, E), e.layout[b[E]] += O(e, E) + nt(e, E);
        var ot = e.children.length,
            rt = j(e, D);

        if (U(e)) {
          var lt = !T(e.layout[w[D]]),
              at = t;
          at = Z(e, D) ? e.style.width : lt ? e.layout[w[D]] : n - A(e, D), at -= rt;
          var st = !Z(e, D) && !lt,
              ct = !Z(e, l) && T(e.layout[w[l]]);

          if (st || ct) {
            var ut = e.style.measure(at);
            st && (e.layout.width = ut.width + rt), ct && (e.layout.height = ut.height + j(e, l));
          }

          if (0 === ot) return;
        }

        var ht,
            ft,
            dt,
            pt,
            yt = q(e),
            vt = P(e),
            _t = N(e, C),
            gt = N(e, E),
            mt = j(e, C),
            bt = j(e, E),
            xt = !T(e.layout[w[C]]),
            wt = !T(e.layout[w[E]]),
            Tt = S(C),
            St = null,
            kt = null,
            Lt = t;

        xt && (Lt = e.layout[w[C]] - mt);

        for (var Ot = 0, Ct = 0, Et = 0, Bt = 0, Dt = 0, Nt = 0; Ct < ot;) {
          var Mt,
              Rt = 0,
              At = 0,
              jt = 0,
              Pt = 0,
              It = xt && vt === s || !xt && vt !== c,
              Xt = It ? ot : Ot,
              Yt = !0,
              Wt = ot,
              Vt = null,
              zt = null,
              Ht = _t,
              Ft = 0;

          for (ht = Ot; ht < ot; ++ht) {
            if ((dt = e.children[ht]).lineIndex = Nt, dt.nextAbsoluteChild = null, dt.nextFlexChild = null, (te = X(e, dt)) === v && H(dt) === _ && wt && !Z(dt, E)) dt.layout[w[E]] = Q($(dt, E, e.layout[w[E]] - bt - A(dt, E)), j(dt, E));else if (H(dt) === g) for (null === St && (St = dt), null !== kt && (kt.nextAbsoluteChild = dt), kt = dt, ft = 0; ft < 2; ft++) {
              pt = 0 !== ft ? i : l, !T(e.layout[w[pt]]) && !Z(dt, pt) && K(dt, m[pt]) && K(dt, b[pt]) && (dt.layout[w[pt]] = Q($(dt, pt, e.layout[w[pt]] - j(e, pt) - A(dt, pt) - J(dt, m[pt]) - J(dt, b[pt])), j(dt, pt)));
            }
            var qt = 0;

            if (xt && F(dt) ? (At++, jt += dt.style.flex, null === Vt && (Vt = dt), null !== zt && (zt.nextFlexChild = dt), zt = dt, qt = j(dt, C) + A(dt, C)) : (Mt = t, Tt || (Mt = Z(e, D) ? e.layout[w[D]] - rt : n - A(e, D) - rt), 0 === Et && it(dt, Mt, k), H(dt) === _ && (Pt++, qt = G(dt, C))), yt && xt && Rt + qt > Lt && ht !== Ot) {
              Pt--, Et = 1;
              break;
            }

            It && (H(dt) !== _ || F(dt)) && (It = !1, Xt = ht), Yt && (H(dt) !== _ || te !== v && te !== d || T(dt.layout[w[E]])) && (Yt = !1, Wt = ht), It && (dt.layout[x[C]] += Ht, xt && et(e, dt, C), Ht += G(dt, C), Ft = Q(Ft, $(dt, E, G(dt, E)))), Yt && (dt.layout[x[E]] += Bt + gt, wt && et(e, dt, E)), Et = 0, Rt += qt, Ct = ht + 1;
          }

          var Gt = 0,
              Zt = 0,
              Kt = 0;

          if (Kt = xt ? Lt - Rt : Q(Rt, 0) - Rt, 0 !== At) {
            var Ut,
                Jt,
                $t = Kt / jt;

            for (zt = Vt; null !== zt;) {
              (Ut = $t * zt.style.flex + j(zt, C)) !== (Jt = $(zt, C, Ut)) && (Kt -= Jt, jt -= zt.style.flex), zt = zt.nextFlexChild;
            }

            for (($t = Kt / jt) < 0 && ($t = 0), zt = Vt; null !== zt;) {
              zt.layout[w[C]] = $(zt, C, $t * zt.style.flex + j(zt, C)), Mt = t, Z(e, D) ? Mt = e.layout[w[D]] - rt : Tt || (Mt = n - A(e, D) - rt), it(zt, Mt, k), dt = zt, zt = zt.nextFlexChild, dt.nextFlexChild = null;
            }
          } else vt !== s && (vt === c ? Gt = Kt / 2 : vt === u ? Gt = Kt : vt === h ? (Kt = Q(Kt, 0), Zt = At + Pt - 1 != 0 ? Kt / (At + Pt - 1) : 0) : vt === f && (Gt = (Zt = Kt / (At + Pt)) / 2));

          for (Ht += Gt, ht = Xt; ht < Ct; ++ht) {
            H(dt = e.children[ht]) === g && K(dt, m[C]) ? dt.layout[x[C]] = J(dt, m[C]) + B(e, C) + L(dt, C) : (dt.layout[x[C]] += Ht, xt && et(e, dt, C), H(dt) === _ && (Ht += Zt + G(dt, C), Ft = Q(Ft, $(dt, E, G(dt, E)))));
          }

          var Qt = e.layout[w[E]];

          for (wt || (Qt = Q($(e, E, Ft + bt), bt)), ht = Wt; ht < Ct; ++ht) {
            if (H(dt = e.children[ht]) === g && K(dt, m[E])) dt.layout[x[E]] = J(dt, m[E]) + B(e, E) + L(dt, E);else {
              var te,
                  ee = gt;
              if (H(dt) === _) if ((te = X(e, dt)) === v) T(dt.layout[w[E]]) && (dt.layout[w[E]] = Q($(dt, E, Qt - bt - A(dt, E)), j(dt, E)));else if (te !== d) {
                var ne = Qt - bt - G(dt, E);
                ee += te === p ? ne / 2 : ne;
              }
              dt.layout[x[E]] += Bt + ee, wt && et(e, dt, E);
            }
          }

          Bt += Ft, Dt = Q(Dt, Ht), Nt += 1, Ot = Ct;
        }

        if (Nt > 1 && wt) {
          var oe = e.layout[w[E]] - bt,
              ie = oe - Bt,
              re = 0,
              le = gt,
              ae = I(e);
          ae === y ? le += ie : ae === p ? le += ie / 2 : ae === v && oe > Bt && (re = ie / Nt);
          var se = 0;

          for (ht = 0; ht < Nt; ++ht) {
            var ce = se,
                ue = 0;

            for (ft = ce; ft < ot; ++ft) {
              if (H(dt = e.children[ft]) === _) {
                if (dt.lineIndex !== ht) break;
                T(dt.layout[w[E]]) || (ue = Q(ue, dt.layout[w[E]] + A(dt, E)));
              }
            }

            for (se = ft, ue += re, ft = ce; ft < se; ++ft) {
              if (H(dt = e.children[ft]) === _) {
                var he = X(e, dt);
                if (he === d) dt.layout[x[E]] = le + L(dt, E);else if (he === y) dt.layout[x[E]] = le + ue - O(dt, E) - dt.layout[w[E]];else if (he === p) {
                  var fe = dt.layout[w[E]];
                  dt.layout[x[E]] = le + (ue - fe) / 2;
                } else he === v && (dt.layout[x[E]] = le + L(dt, E));
              }
            }

            le += ue;
          }
        }

        var de = !1,
            pe = !1;
        if (xt || (e.layout[w[C]] = Q($(e, C, Dt + M(e, C)), mt), C !== r && C !== a || (de = !0)), wt || (e.layout[w[E]] = Q($(e, E, Bt + bt), bt), E !== r && E !== a || (pe = !0)), de || pe) for (ht = 0; ht < ot; ++ht) {
          dt = e.children[ht], de && et(e, dt, C), pe && et(e, dt, E);
        }

        for (kt = St; null !== kt;) {
          for (ft = 0; ft < 2; ft++) {
            pt = 0 !== ft ? i : l, !T(e.layout[w[pt]]) && !Z(kt, pt) && K(kt, m[pt]) && K(kt, b[pt]) && (kt.layout[w[pt]] = Q($(kt, pt, e.layout[w[pt]] - R(e, pt) - A(kt, pt) - J(kt, m[pt]) - J(kt, b[pt])), j(kt, pt))), K(kt, b[pt]) && !K(kt, m[pt]) && (kt.layout[m[pt]] = e.layout[w[pt]] - kt.layout[w[pt]] - J(kt, b[pt]));
          }

          dt = kt, kt = kt.nextAbsoluteChild, dt.nextAbsoluteChild = null;
        }
      }

      function it(t, e, o) {
        t.shouldUpdate = !0;
        var i = t.style.direction || n;
        !t.isDirty && t.lastLayout && t.lastLayout.requestedHeight === t.layout.height && t.lastLayout.requestedWidth === t.layout.width && t.lastLayout.parentMaxWidth === e && t.lastLayout.direction === i ? (t.layout.width = t.lastLayout.width, t.layout.height = t.lastLayout.height, t.layout.top = t.lastLayout.top, t.layout.left = t.lastLayout.left) : (t.lastLayout || (t.lastLayout = {}), t.lastLayout.requestedWidth = t.layout.width, t.lastLayout.requestedHeight = t.layout.height, t.lastLayout.parentMaxWidth = e, t.lastLayout.direction = i, t.children.forEach(function (t) {
          t.layout.width = void 0, t.layout.height = void 0, t.layout.top = 0, t.layout.left = 0;
        }), ot(t, e, o), t.lastLayout.width = t.layout.width, t.lastLayout.height = t.layout.height, t.lastLayout.top = t.layout.top, t.lastLayout.left = t.layout.left);
      }

      return {
        layoutNodeImpl: ot,
        computeLayout: it,
        fillNodes: function t(e) {
          return e.layout && !e.isDirty || (e.layout = {
            width: void 0,
            height: void 0,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }), e.style || (e.style = {}), e.children || (e.children = []), e.children.forEach(t), e;
        }
      };
    }();

    return t.exports = e, function (t) {
      e.fillNodes(t), e.computeLayout(t);
    };
  }) ? n.apply(e, []) : n) || (t.exports = o);
}, function (t, e, n) {
  "use strict";

  function o(t, e, n) {
    var o, i;
    return e || (e = 250), function () {
      var r = n || this,
          l = +new Date(),
          a = arguments;
      o && l < o + e ? (clearTimeout(i), i = setTimeout(function () {
        o = l, t.apply(r, a);
      }, e)) : (o = l, t.apply(r, a));
    };
  }

  function i() {}

  function r(t) {
    var e = t.touchstart,
        n = t.touchend;
    if (!(e && n && e.timeStamp && n.timeStamp && void 0 !== e.pageX && void 0 !== e.pageY && void 0 !== n.pageX && void 0 !== n.pageY)) return !1;
    var o = e.pageX,
        i = e.pageY,
        r = n.pageX,
        l = n.pageY,
        a = n.timeStamp - e.timeStamp;
    return !!(Math.abs(l - i) < 30 && Math.abs(r - o) < 30 && a < 300);
  }

  function l() {
    return "undefined" != typeof __env ? __env.createCanvas() : document.createElement("canvas");
  }

  function a() {
    return "undefined" != typeof __env ? __env.createImage() : document.createElement("img");
  }

  var s;

  function c() {
    return void 0 !== s ? s : ("undefined" != typeof __env && __env.getSystemInfoSync ? s = __env.getSystemInfoSync().devicePixelRatio : (console.warn("failed to access device pixel ratio, fallback to 1"), s = 1), s);
  }

  n.r(e), n.d(e, "throttle", function () {
    return o;
  }), n.d(e, "none", function () {
    return i;
  }), n.d(e, "isClick", function () {
    return r;
  }), n.d(e, "createCanvas", function () {
    return l;
  }), n.d(e, "createImage", function () {
    return a;
  }), n.d(e, "getDpr", function () {
    return c;
  }), n.d(e, "STATE", function () {
    return u;
  }), n.d(e, "repaintChildren", function () {
    return h;
  }), n.d(e, "repaintTree", function () {
    return f;
  }), "undefined" != typeof swan && __env.onMessage(function (t) {
    t && "engine" === t.type && "systemInfo" === t.event && (s = t.systemInfo.devicePixelRatio);
  });

  var u = {
    UNINIT: "UNINIT",
    INITED: "INITED",
    RENDERED: "RENDERED",
    CLEAR: "CLEAR"
  },
      h = function t(e) {
    e.forEach(function (e) {
      e.repaint(), t(e.children);
    });
  },
      f = function t(e) {
    e.repaint(), e.children.forEach(function (e) {
      e.repaint(), t(e);
    });
  };
}, function (t, e, n) {
  "use strict";

  var o = n(9),
      i = n(11),
      r = n(11),
      l = n(10).buildOptions,
      a = n(13);

  e.parse = function (t, e, n) {
    if (n) {
      !0 === n && (n = {});
      var s = a.validate(t, n);
      if (!0 !== s) throw Error(s.err.msg);
    }

    return e = l(e, r.defaultOptions, r.props), o.convertToJson(i.getTraversalObj(t, e), e);
  };
}, function (t, e, n) {
  "use strict";

  var o = n(10);

  e.convertToJson = function t(e, n) {
    var i = {
      name: e.tagname
    };
    return e.child && !o.isEmptyObject(e.child) || e.attrsMap && !o.isEmptyObject(e.attrsMap) ? (o.isExist(e.val) && ("string" != typeof e.val || "" !== e.val && e.val !== n.cdataPositionChar) && ("strict" === n.arrayMode ? i[n.textNodeName] = [e.val] : i[n.textNodeName] = e.val), o.merge(i, e.attrsMap, n.arrayMode), i.children = [], e.children.forEach(function (e) {
      i.children.push(t(e, n));
    }), i) : o.isExist(e.val) && e.val ? e.val : i;
  };
}, function (t, e) {
  "use strict";

  var n = function n(t, e) {
    return !(null == e.exec(t));
  };

  e.isExist = function (t) {
    return void 0 !== t;
  }, e.isEmptyObject = function (t) {
    return 0 === Object.keys(t).length;
  }, e.merge = function (t, e, n) {
    if (e) for (var o = Object.keys(e), i = o.length, r = 0; r < i; r++) {
      t[o[r]] = "strict" === n ? [e[o[r]]] : e[o[r]];
    }
  }, e.getValue = function (t) {
    return e.isExist(t) ? t : "";
  }, e.buildOptions = function (t, e, n) {
    var o = {};
    if (!t) return e;

    for (var i = 0; i < n.length; i++) {
      void 0 !== t[n[i]] ? o[n[i]] = t[n[i]] : o[n[i]] = e[n[i]];
    }

    return o;
  }, e.doesMatch = n, e.doesNotMatch = function (t, e) {
    return !n(t, e);
  }, e.getAllMatches = function (t, e) {
    for (var n = [], o = e.exec(t); o;) {
      for (var i = [], r = o.length, l = 0; l < r; l++) {
        i.push(o[l]);
      }

      n.push(i), o = e.exec(t);
    }

    return n;
  };
}, function (t, e, n) {
  "use strict";

  var o = n(10),
      i = n(10).buildOptions,
      r = n(12),
      l = {
    OPENING: 1,
    CLOSING: 2,
    SELF: 3,
    CDATA: 4
  },
      a = "<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|(([\\w:\\-._]*:)?([\\w:\\-._]+))([^>]*)>|((\\/)(([\\w:\\-._]*:)?([\\w:\\-._]+))\\s*>))([^<]*)";
  !Number.parseInt && window.parseInt && (Number.parseInt = window.parseInt), !Number.parseFloat && window.parseFloat && (Number.parseFloat = window.parseFloat);
  var s = {
    attributeNamePrefix: "@_",
    attrNodeName: !1,
    textNodeName: "#text",
    ignoreAttributes: !0,
    ignoreNameSpace: !1,
    allowBooleanAttributes: !1,
    parseNodeValue: !0,
    parseAttributeValue: !1,
    arrayMode: !1,
    trimValues: !0,
    cdataTagName: !1,
    cdataPositionChar: "\\c",
    localeRange: "",
    tagValueProcessor: function tagValueProcessor(t) {
      return t;
    },
    attrValueProcessor: function attrValueProcessor(t) {
      return t;
    },
    stopNodes: []
  };
  e.defaultOptions = s;
  var c = ["attributeNamePrefix", "attrNodeName", "textNodeName", "ignoreAttributes", "ignoreNameSpace", "allowBooleanAttributes", "parseNodeValue", "parseAttributeValue", "arrayMode", "trimValues", "cdataTagName", "cdataPositionChar", "localeRange", "tagValueProcessor", "attrValueProcessor", "parseTrueNumberOnly", "stopNodes"];

  function u(t, e, n) {
    var o = t[7] || n,
        i = t[14];
    return i && (e.trimValues && (i = i.trim()), i = f(i = e.tagValueProcessor(i, o), e.parseNodeValue, e.parseTrueNumberOnly)), i;
  }

  function h(t, e) {
    if (e.ignoreNameSpace) {
      var n = t.split(":"),
          o = "/" === t.charAt(0) ? "/" : "";
      if ("xmlns" === n[0]) return "";
      2 === n.length && (t = o + n[1]);
    }

    return t;
  }

  function f(t, e, n) {
    var i;
    return e && "string" == typeof t ? ("" === t.trim() || isNaN(t) ? i = "true" === t || "false" !== t && t : (i = -1 !== t.indexOf("0x") ? Number.parseInt(t, 16) : -1 !== t.indexOf(".") ? Number.parseFloat(t) : Number.parseInt(t, 10), n && (i = String(i) === t ? i : t)), i) : o.isExist(t) ? t : "";
  }

  e.props = c;
  var d = new RegExp("([^\\s=]+)\\s*(=\\s*(['\"])(.*?)\\3)?", "g");

  function p(t, e) {
    if (!e.ignoreAttributes && "string" == typeof t) {
      t = t.replace(/\r?\n/g, " ");

      for (var n = o.getAllMatches(t, d), i = n.length, r = {}, l = 0; l < i; l++) {
        var a = h(n[l][1], e);
        a.length && (void 0 !== n[l][4] ? (e.trimValues && (n[l][4] = n[l][4].trim()), n[l][4] = e.attrValueProcessor(n[l][4], a), r[e.attributeNamePrefix + a] = f(n[l][4], e.parseAttributeValue, e.parseTrueNumberOnly)) : e.allowBooleanAttributes && (r[e.attributeNamePrefix + a] = !0));
      }

      if (!Object.keys(r).length) return;

      if (e.attrNodeName) {
        var s = {};
        return s[e.attrNodeName] = r, s;
      }

      return r;
    }
  }

  e.getTraversalObj = function (t, e) {
    e = i(e, s, c), t = t.replace(/<!--[\s\S]*?-->/g, "");
    var n,
        h = new r("!xml"),
        f = h;
    a = a.replace(/\[\\w/g, "[" + e.localeRange + "\\w");

    for (var d = new RegExp(a, "g"), y = d.exec(t), v = d.exec(t); y;) {
      var _ = "]]>" === (n = y)[4] ? l.CDATA : "/" === n[10] ? l.CLOSING : void 0 !== n[8] && "/" === n[8].substr(n[8].length - 1) ? l.SELF : l.OPENING;

      if (_ === l.CLOSING) f.parent && y[14] && (f.parent.val = o.getValue(f.parent.val) + "" + u(y, e, f.parent.tagname)), e.stopNodes.length && e.stopNodes.includes(f.tagname) && (f.child = [], null == f.attrsMap && (f.attrsMap = {}), f.val = t.substr(f.startIndex + 1, y.index - f.startIndex - 1)), f = f.parent;else if (_ === l.CDATA) {
        if (e.cdataTagName) {
          var g = new r(e.cdataTagName, f, y[3]);
          g.attrsMap = p(y[8], e), f.addChild(g), f.val = o.getValue(f.val) + e.cdataPositionChar, y[14] && (f.val += u(y, e));
        } else f.val = (f.val || "") + (y[3] || "") + u(y, e);
      } else if (_ === l.SELF) {
        f && y[14] && (f.val = o.getValue(f.val) + "" + u(y, e));
        var m = new r(e.ignoreNameSpace ? y[7] : y[5], f, "");
        y[8] && y[8].length > 0 && (y[8] = y[8].substr(0, y[8].length - 1)), m.attrsMap = p(y[8], e), f.addChild(m);
      } else {
        var b = new r(e.ignoreNameSpace ? y[7] : y[5], f, u(y, e));
        e.stopNodes.length && e.stopNodes.includes(b.tagname) && (b.startIndex = y.index + y[1].length), b.attrsMap = p(y[8], e), f.addChild(b), f = b;
      }
      y = v, v = d.exec(t);
    }

    return h;
  };
}, function (t) {
  "use strict";

  t.exports = function (t, e, n) {
    this.tagname = t, this.parent = e, this.child = {}, this.attrsMap = {}, this.children = [], this.val = n, this.addChild = function (t) {
      this.children.push(t), Array.isArray(this.child[t.tagname]) ? this.child[t.tagname].push(t) : this.child[t.tagname] = [t];
    };
  };
}, function (t, e, n) {
  "use strict";

  var o = n(10),
      i = {
    allowBooleanAttributes: !1,
    localeRange: "a-zA-Z"
  },
      r = ["allowBooleanAttributes", "localeRange"];

  function l(t, e) {
    for (var n = e; e < t.length; e++) {
      if ("?" != t[e] && " " != t[e]) ;else {
        var o = t.substr(n, e - n);
        if (e > 5 && "xml" === o) return {
          err: {
            code: "InvalidXml",
            msg: "XML declaration allowed only at the start of the document."
          }
        };

        if ("?" == t[e] && ">" == t[e + 1]) {
          e++;
          break;
        }
      }
    }

    return e;
  }

  function a(t, e) {
    if (t.length > e + 5 && "-" === t[e + 1] && "-" === t[e + 2]) {
      for (e += 3; e < t.length; e++) {
        if ("-" === t[e] && "-" === t[e + 1] && ">" === t[e + 2]) {
          e += 2;
          break;
        }
      }
    } else if (t.length > e + 8 && "D" === t[e + 1] && "O" === t[e + 2] && "C" === t[e + 3] && "T" === t[e + 4] && "Y" === t[e + 5] && "P" === t[e + 6] && "E" === t[e + 7]) {
      var n = 1;

      for (e += 8; e < t.length; e++) {
        if ("<" === t[e]) n++;else if (">" === t[e] && 0 == --n) break;
      }
    } else if (t.length > e + 9 && "[" === t[e + 1] && "C" === t[e + 2] && "D" === t[e + 3] && "A" === t[e + 4] && "T" === t[e + 5] && "A" === t[e + 6] && "[" === t[e + 7]) for (e += 8; e < t.length; e++) {
      if ("]" === t[e] && "]" === t[e + 1] && ">" === t[e + 2]) {
        e += 2;
        break;
      }
    }

    return e;
  }

  e.validate = function (t, e) {
    e = o.buildOptions(e, i, r);
    var n = [],
        s = !1;
    "\uFEFF" === t[0] && (t = t.substr(1));

    for (var c = new RegExp("^[_w][\\w\\-.:]*$".replace("_w", "_" + e.localeRange)), h = new RegExp("^([w]|_)[\\w.\\-_:]*".replace("([w", "([" + e.localeRange)), d = 0; d < t.length; d++) {
      if ("<" !== t[d]) {
        if (" " === t[d] || "\t" === t[d] || "\n" === t[d] || "\r" === t[d]) continue;
        return {
          err: {
            code: "InvalidChar",
            msg: "char " + t[d] + " is not expected ."
          }
        };
      }

      if ("?" === t[++d]) {
        if ((d = l(t, ++d)).err) return d;
      } else {
        if ("!" === t[d]) {
          d = a(t, d);
          continue;
        }

        var y = !1;
        "/" === t[d] && (y = !0, d++);

        for (var v = ""; d < t.length && ">" !== t[d] && " " !== t[d] && "\t" !== t[d] && "\n" !== t[d] && "\r" !== t[d]; d++) {
          v += t[d];
        }

        if ("/" === (v = v.trim())[v.length - 1]) {
          v = v.substring(0, v.length - 1);
          continue;
        }

        if (!p(v, h)) return {
          err: {
            code: "InvalidTag",
            msg: "Tag " + v + " is an invalid name."
          }
        };

        var _ = u(t, d);

        if (!1 === _) return {
          err: {
            code: "InvalidAttr",
            msg: 'Attributes for "' + v + '" have open quote.'
          }
        };
        var g = _.value;

        if (d = _.index, "/" === g[g.length - 1]) {
          var m = f(g = g.substring(0, g.length - 1), e, c);
          if (!0 !== m) return m;
          s = !0;
        } else if (y) {
          if (!_.tagClosed) return {
            err: {
              code: "InvalidTag",
              msg: 'closing tag "' + v + "\" don't have proper closing."
            }
          };
          if (g.trim().length > 0) return {
            err: {
              code: "InvalidTag",
              msg: 'closing tag "' + v + "\" can't have attributes or invalid starting."
            }
          };
          var b = n.pop();
          if (v !== b) return {
            err: {
              code: "InvalidTag",
              msg: "closing tag " + b + " is expected inplace of " + v + "."
            }
          };
        } else {
          var x = f(g, e, c);
          if (!0 !== x) return x;
          n.push(v), s = !0;
        }

        for (d++; d < t.length; d++) {
          if ("<" === t[d]) {
            if ("!" === t[d + 1]) {
              d = a(t, ++d);
              continue;
            }

            break;
          }
        }

        "<" === t[d] && d--;
      }
    }

    return s ? !(n.length > 0) || {
      err: {
        code: "InvalidXml",
        msg: "Invalid " + JSON.stringify(n, null, 4).replace(/\r?\n/g, "") + " found."
      }
    } : {
      err: {
        code: "InvalidXml",
        msg: "Start tag expected."
      }
    };
  };

  var s = '"',
      c = "'";

  function u(t, e) {
    for (var n = "", o = "", i = !1; e < t.length; e++) {
      if (t[e] === s || t[e] === c) {
        if ("" === o) o = t[e];else {
          if (o !== t[e]) continue;
          o = "";
        }
      } else if (">" === t[e] && "" === o) {
        i = !0;
        break;
      }
      n += t[e];
    }

    return "" === o && {
      value: n,
      index: e,
      tagClosed: i
    };
  }

  var h = new RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?", "g");

  function f(t, e, n) {
    for (var i = o.getAllMatches(t, h), r = {}, l = 0; l < i.length; l++) {
      if (0 === i[l][1].length) return {
        err: {
          code: "InvalidAttr",
          msg: "attribute " + i[l][2] + " has no space in starting."
        }
      };
      if (void 0 === i[l][3] && !e.allowBooleanAttributes) return {
        err: {
          code: "InvalidAttr",
          msg: "boolean attribute " + i[l][2] + " is not allowed."
        }
      };
      var a = i[l][2];
      if (!d(a, n)) return {
        err: {
          code: "InvalidAttr",
          msg: "attribute " + a + " is an invalid name."
        }
      };
      if (Object.prototype.hasOwnProperty.call(r, a)) return {
        err: {
          code: "InvalidAttr",
          msg: "attribute " + a + " is repeated."
        }
      };
      r[a] = 1;
    }

    return !0;
  }

  function d(t, e) {
    return o.doesMatch(t, e);
  }

  function p(t, e) {
    return !o.doesNotMatch(t, e);
  }
}, function (t, e, n) {
  "use strict";

  n.r(e), n.d(e, "default", function () {
    return s;
  });
  var o = n(15);

  function i(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function r(t, e) {
    for (var n = 0; n < e.length; n++) {
      var o = e[n];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
    }
  }

  var l = new (n(5).default)("bitMapPool"),
      a = n(4),
      s = function () {
    function t(e, n, r) {
      var s = this;
      i(this, t);
      var c = l.get(e);
      if (c) return c;
      this.config = r, this.chars = this.parseConfig(r), this.ready = !1, this.event = new a(), this.texture = o.default.loadImage(n, function (t, e) {
        e && (s.texture = t), s.ready = !0, s.event.emit("text__load__done");
      }), l.set(e, this);
    }

    var e, n;
    return e = t, (n = [{
      key: "parseConfig",
      value: function value(t) {
        var e = (t = t.split("\r\n").join("\n")).split("\n"),
            n = this.getConfigByKey(e[3], "count");
        this.lineHeight = this.getConfigByKey(e[1], "lineHeight"), this.fontSize = this.getConfigByKey(e[0], "size");

        for (var o = {}, i = 4; i < 4 + n; i++) {
          var r = e[i],
              l = {};
          o[String.fromCharCode(this.getConfigByKey(r, "id"))] = l, l.x = this.getConfigByKey(r, "x"), l.y = this.getConfigByKey(r, "y"), l.w = this.getConfigByKey(r, "width"), l.h = this.getConfigByKey(r, "height"), l.offX = this.getConfigByKey(r, "xoffset"), l.offY = this.getConfigByKey(r, "yoffset"), l.xadvance = this.getConfigByKey(r, "xadvance");
        }

        return o;
      }
    }, {
      key: "getConfigByKey",
      value: function value(t, e) {
        for (var n = t.split(" "), o = 0, i = n.length; o < i; o++) {
          var r = n[o];

          if (e === r.substring(0, e.length)) {
            var l = r.substring(e.length + 1);
            return parseInt(l);
          }
        }

        return 0;
      }
    }]) && r(e.prototype, n), t;
  }();
}, function (t, e, n) {
  "use strict";

  n.r(e);
  var o = n(5),
      i = n(7);

  function r(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function l(t, e) {
    for (var n = 0; n < e.length; n++) {
      var o = e[n];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
    }
  }

  var a = new o.default("imgPool"),
      s = function () {
    function t() {
      r(this, t);
    }

    var e, n;
    return e = t, (n = [{
      key: "getRes",
      value: function value(t) {
        return a.get(t);
      }
    }, {
      key: "loadImage",
      value: function value(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.none,
            n = null,
            o = this.getRes(t);
        return t ? (o && o.loadDone ? e(n = o, !0) : o && !o.loadDone ? (n = o, o.onloadcbks.push(e)) : ((n = Object(i.createImage)()).onloadcbks = [e], a.set(t, n), n.onload = function () {
          n.onloadcbks.forEach(function (t) {
            return t(n, !1);
          }), n.onloadcbks = [], n.loadDone = !0;
        }, n.onerror = function (t) {
          console.log("img load error", t);
        }, n.src = t), n) : n;
      }
    }]) && l(e.prototype, n), t;
  }();

  e.default = new s();
}, function (t, e, n) {
  "use strict";

  n.r(e);
  var o = n(17);
  n.d(e, "View", function () {
    return o.default;
  });
  var i = n(18);
  n.d(e, "Image", function () {
    return i.default;
  });
  var r = n(19);
  n.d(e, "Text", function () {
    return r.default;
  });
  var l = n(20);
  n.d(e, "ScrollView", function () {
    return l.default;
  });
  var a = n(24);
  n.d(e, "BitMapText", function () {
    return a.default;
  });
}, function (t, e, n) {
  "use strict";

  n.r(e), n.d(e, "default", function () {
    return d;
  });
  var o = n(2);

  function i(t) {
    return (i = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
      return _typeof2(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof2(t);
    })(t);
  }

  function r(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function l(t, e) {
    for (var n = 0; n < e.length; n++) {
      var o = e[n];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
    }
  }

  function a(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), e && s(t, e);
  }

  function s(t, e) {
    return (s = Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t;
    })(t, e);
  }

  function c(t, e) {
    return !e || "object" !== i(e) && "function" != typeof e ? u(t) : e;
  }

  function u(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }

  function h() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
    } catch (t) {
      return !1;
    }
  }

  function f(t) {
    return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
  }

  var d = function () {
    a(u, o.default);
    var t,
        e,
        n,
        i,
        s = (t = u, e = h(), function () {
      var n,
          o = f(t);

      if (e) {
        var i = f(this).constructor;
        n = Reflect.construct(o, arguments, i);
      } else n = o.apply(this, arguments);

      return c(this, n);
    });

    function u(t) {
      var e,
          n = t.style,
          o = void 0 === n ? {} : n,
          i = t.props,
          l = void 0 === i ? {} : i,
          a = t.idName,
          c = void 0 === a ? "" : a,
          h = t.className,
          f = void 0 === h ? "" : h;
      return r(this, u), (e = s.call(this, {
        props: l,
        idName: c,
        className: f,
        style: o
      })).type = "View", e.ctx = null, e.renderBoxes = [], e;
    }

    return n = u, (i = [{
      key: "destroySelf",
      value: function value() {
        this.isDestroyed = !0, this.children = null, this.root = null;
      }
    }, {
      key: "checkNeedRender",
      value: function value() {
        var t = this.style || {},
            e = t.borderColor;
        return !!(t.backgroundColor || t.borderWidth && e || t.borderTopWidth && (e || t.borderTopColor) || t.borderBottomWidth && (e || t.borderBottomColor) || t.borderLeftWidth && (e || t.borderLeftColor) || t.borderRightWidth && (e || t.borderRightColor));
      }
    }, {
      key: "render",
      value: function value(t, e) {
        var n = this.style || {},
            o = e || this.layoutBox;
        t.save();
        var i = n.borderWidth || 0,
            r = o.absoluteX,
            l = o.absoluteY,
            a = n.borderLeftWidth || i,
            s = n.borderRightWidth || i,
            c = n.borderTopWidth || i,
            u = n.borderBottomWidth || i;
        this.renderBorder(t, e);
        var h = this.renderBorder(t, e),
            f = h.needClip,
            d = h.needStroke;
        f && t.clip(), n.backgroundColor && (t.fillStyle = n.backgroundColor, t.fillRect(r + a, l + s, o.width - (a + s), o.height - (c + u))), d && t.stroke(), t.restore();
      }
    }, {
      key: "insert",
      value: function value(t, e) {
        this.ctx = t, e || (e = this.layoutBox), this.renderBoxes.push({
          ctx: t,
          box: e
        }), this.render(t, e);
      }
    }, {
      key: "repaint",
      value: function value() {
        var t = this;
        this.renderBoxes.forEach(function (e) {
          t.render(e.ctx, e.box);
        });
      }
    }]) && l(n.prototype, i), u;
  }();
}, function (t, e, n) {
  "use strict";

  n.r(e), n.d(e, "default", function () {
    return p;
  });
  var o = n(2),
      i = n(15);

  function r(t) {
    return (r = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
      return _typeof2(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof2(t);
    })(t);
  }

  function l(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function a(t, e) {
    for (var n = 0; n < e.length; n++) {
      var o = e[n];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
    }
  }

  function s(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), e && c(t, e);
  }

  function c(t, e) {
    return (c = Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t;
    })(t, e);
  }

  function u(t, e) {
    return !e || "object" !== r(e) && "function" != typeof e ? h(t) : e;
  }

  function h(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }

  function f() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
    } catch (t) {
      return !1;
    }
  }

  function d(t) {
    return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
  }

  var p = function () {
    s(p, o.default);
    var t,
        e,
        n,
        r,
        c = (t = p, e = f(), function () {
      var n,
          o = d(t);

      if (e) {
        var i = d(this).constructor;
        n = Reflect.construct(o, arguments, i);
      } else n = o.apply(this, arguments);

      return u(this, n);
    });

    function p(t) {
      var e;
      l(this, p);
      var n = t.style,
          o = void 0 === n ? {} : n,
          r = t.props,
          a = void 0 === r ? {} : r,
          s = t.idName,
          u = void 0 === s ? "" : s,
          f = t.className,
          d = void 0 === f ? "" : f,
          y = t.src,
          v = void 0 === y ? "" : y;
      return (e = c.call(this, {
        props: a,
        idName: u,
        className: d,
        style: o
      })).imgsrc = v, Object.defineProperty(h(e), "src", {
        get: function get() {
          return this.imgsrc;
        },
        set: function set(t) {
          var e = this;
          t !== this.imgsrc && (this.imgsrc = t, i.default.loadImage(this.src, function (t) {
            e.img = t, e.emit("repaint");
          }));
        },
        enumerable: !0,
        configurable: !0
      }), e.type = "Image", e.renderBoxes = [], e.img = i.default.loadImage(e.src, function (t, n) {
        n ? e.img = t : e.img && e.isScrollViewChild && e.EE.emit("image__render__done", h(e));
      }), e;
    }

    return n = p, (r = [{
      key: "repaint",
      value: function value() {
        var t = this;
        this.renderBoxes.forEach(function (e) {
          t.render(e.ctx, e.box, !1);
        });
      }
    }, {
      key: "destroySelf",
      value: function value() {
        this.isDestroyed = !0, this.img = null, delete this.src, this.root = null;
      }
    }, {
      key: "render",
      value: function value(t, e) {
        if (this.img) {
          var n = this.style || {},
              o = e || this.layoutBox;
          t.save(), n.borderColor && (t.strokeStyle = n.borderColor), t.lineWidth = n.borderWidth || 0;
          var i = o.absoluteX,
              r = o.absoluteY,
              l = this.renderBorder(t, e),
              a = l.needClip,
              s = l.needStroke;
          a && t.clip(), t.drawImage(this.img, i, r, o.width, o.height), s && t.stroke(), t.restore();
        }
      }
    }, {
      key: "insert",
      value: function value(t, e) {
        var n = this;
        this.renderBoxes.push({
          ctx: t,
          box: e
        }), this.img = i.default.loadImage(this.src, function (o, i) {
          if (i) n.img = o, n.render(t, e, !1);else if (n.img) {
            var r = n.isScrollViewChild ? "image__render__done" : "one__image__render__done";
            n.EE.emit(r, n);
          }
        });
      }
    }, {
      key: "isScrollViewChild",
      get: function get() {
        for (var t = !1, e = this.parent; e && !t;) {
          "ScrollView" === e.type ? t = !0 : e = e.parent;
        }

        return t;
      }
    }]) && a(n.prototype, r), p;
  }();
}, function (t, e, n) {
  "use strict";

  n.r(e), n.d(e, "default", function () {
    return b;
  });
  var o = n(2),
      i = n(7);

  function r(t) {
    return (r = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
      return _typeof2(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof2(t);
    })(t);
  }

  function l(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function a(t, e) {
    for (var n = 0; n < e.length; n++) {
      var o = e[n];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
    }
  }

  function s(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), e && c(t, e);
  }

  function c(t, e) {
    return (c = Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t;
    })(t, e);
  }

  function u(t, e) {
    return !e || "object" !== r(e) && "function" != typeof e ? h(t) : e;
  }

  function h(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }

  function f() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
    } catch (t) {
      return !1;
    }
  }

  function d(t) {
    return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
  }

  var p = "PingFangSC-Regular, sans-serif",
      y = null,
      v = function v() {
    if (y) return y;
    var t = Object(i.createCanvas)();
    return t.width = 1, t.height = 1, y = t.getContext("2d");
  };

  function _(t, e) {
    var n = v();
    return n.font = "".concat(t.fontWeight || "normal", " ").concat(t.fontSize || 12, "px ").concat(t.fontFamily || p), n.measureText(e).width || 0;
  }

  function g(t) {
    return v().measureText(t).width || 0;
  }

  function m(t, e) {
    e = String(e);

    var n = t.width,
        o = _(t, e),
        i = t.textOverflow || "ellipsis";

    if (o <= n) return e;
    "ellipsis" === i && (n -= g("..."));

    for (var r = e.length - 1, l = e.substring(0, r); g(l) > n && r > 0;) {
      r--, l = e.substring(0, r);
    }

    return r && "ellipsis" === i ? l + "..." : l;
  }

  var b = function () {
    s(c, o.default);
    var t,
        e,
        n,
        i,
        r = (t = c, e = f(), function () {
      var n,
          o = d(t);

      if (e) {
        var i = d(this).constructor;
        n = Reflect.construct(o, arguments, i);
      } else n = o.apply(this, arguments);

      return u(this, n);
    });

    function c(t) {
      var e,
          n = t.style,
          o = void 0 === n ? {} : n,
          i = t.props,
          a = void 0 === i ? {} : i,
          s = t.idName,
          u = void 0 === s ? "" : s,
          f = t.className,
          d = void 0 === f ? "" : f,
          p = t.value,
          y = void 0 === p ? "" : p;
      return l(this, c), void 0 === o.width ? o.width = _(o, y) : "ellipsis" === o.textOverflow && (y = m(o, y)), (e = r.call(this, {
        props: a,
        idName: u,
        className: d,
        style: o
      })).type = "Text", e.ctx = null, e.valuesrc = y, e.renderBoxes = [], Object.defineProperty(h(e), "value", {
        get: function get() {
          return this.valuesrc;
        },
        set: function set(t) {
          t !== this.valuesrc && (this.valuesrc = t, this.emit("repaint"));
        },
        enumerable: !0,
        configurable: !0
      }), e;
    }

    return n = c, (i = [{
      key: "toCanvasData",
      value: function value() {
        var t = this.style || {};
        this.fontSize = t.fontSize || 12, this.textBaseline = "top", this.font = "".concat(t.fontWeight || "", " ").concat(t.fontSize || 12, "px ").concat(p), this.textAlign = t.textAlign || "left", this.fillStyle = t.color || "#000";
      }
    }, {
      key: "insert",
      value: function value(t, e) {
        this.renderBoxes.push({
          ctx: t,
          box: e
        }), this.render(t, e);
      }
    }, {
      key: "repaint",
      value: function value() {
        var t = this;
        this.renderBoxes.forEach(function (e) {
          t.render(e.ctx, e.box);
        });
      }
    }, {
      key: "destroySelf",
      value: function value() {
        this.root = null;
      }
    }, {
      key: "render",
      value: function value(t, e) {
        this.toCanvasData(), t.save();
        var n = e || this.layoutBox,
            o = this.style;
        t.textBaseline = this.textBaseline, t.font = this.font, t.textAlign = this.textAlign;
        var i = n.absoluteX,
            r = n.absoluteY,
            l = this.renderBorder(t, e),
            a = l.needClip,
            s = l.needStroke;
        a && t.clip(), o.backgroundColor && (t.fillStyle = o.backgroundColor, t.fillRect(i, r, n.width, n.height)), s && t.stroke(), t.fillStyle = this.fillStyle, "center" === this.textAlign ? i += n.width / 2 : "right" === this.textAlign && (i += n.width), o.lineHeight && (t.textBaseline = "middle", r += o.lineHeight / 2), t.fillText(this.value, i, r), t.restore();
      }
    }]) && a(n.prototype, i), c;
  }();
}, function (t, e, n) {
  "use strict";

  n.r(e), n.d(e, "default", function () {
    return v;
  });
  var o = n(17),
      i = n(7),
      r = n(21);

  function l(t) {
    return (l = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
      return _typeof2(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof2(t);
    })(t);
  }

  function a(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function s(t, e) {
    for (var n = 0; n < e.length; n++) {
      var o = e[n];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
    }
  }

  function c(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), e && u(t, e);
  }

  function u(t, e) {
    return (u = Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t;
    })(t, e);
  }

  function h(t, e) {
    return !e || "object" !== l(e) && "function" != typeof e ? f(t) : e;
  }

  function f(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }

  function d() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
    } catch (t) {
      return !1;
    }
  }

  function p(t) {
    return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
  }

  function y(t) {
    return t.map(function (t) {
      return {
        identifier: t.identifier,
        pageX: t.pageX,
        pageY: t.pageY,
        clientX: t.clientX,
        clientY: t.clientY
      };
    });
  }

  var v = function () {
    c(v, o.default);
    var t,
        e,
        n,
        l,
        u = (t = v, e = d(), function () {
      var n,
          o = p(t);

      if (e) {
        var i = p(this).constructor;
        n = Reflect.construct(o, arguments, i);
      } else n = o.apply(this, arguments);

      return h(this, n);
    });

    function v(t) {
      var e,
          n = t.style,
          o = void 0 === n ? {} : n,
          r = t.props,
          l = void 0 === r ? {} : r,
          s = t.idName,
          c = void 0 === s ? "" : s,
          h = t.className,
          d = void 0 === h ? "" : h,
          p = t.scrollX,
          y = void 0 !== p && p,
          _ = t.scrollY,
          g = void 0 !== _ && _;
      return a(this, v), (e = u.call(this, {
        props: l,
        style: o,
        idName: c,
        className: d
      })).type = "ScrollView", e.scrollTop = 0, e.scrollLeft = 0, e.hasEventBind = !1, e.currentEvent = null, e.throttleImageLoadDone = Object(i.throttle)(e.childImageLoadDoneCbk, 32, f(e)), e.scrollCanvas = null, e.scrollCtx = null, e.requestID = null, e._scrollX = y, e._scrollY = g, e._scrollerOption = {
        scrollingX: e._scrollX,
        scrollingY: e._scrollY
      }, e.sharedTexture = !1, e;
    }

    return n = v, (l = [{
      key: "repaint",
      value: function value() {
        var t = this;
        this.clear(), this.renderBoxes.forEach(function (e) {
          t.render(e.ctx, e.box);
        }), this.scrollRender(this.scrollLeft, this.scrollTop);
      }
    }, {
      key: "updateRenderPort",
      value: function value(t) {
        this.renderport = t, this.scrollCanvas = Object(i.createCanvas)(), this.scrollCtx = this.scrollCanvas.getContext("2d"), this.scrollCanvas.width = this.renderport.width, this.scrollCanvas.height = this.renderport.height;
      }
    }, {
      key: "destroySelf",
      value: function value() {
        this.touch = null, this.isDestroyed = !0, this.root.off("repaint__done"), this.ctx = null, this.children = null, this.root = null, this.scrollCanvas = null, this.scrollCtx = null, this.requestID && cancelAnimationFrame(this.requestID);
      }
    }, {
      key: "renderTreeWithTop",
      value: function value(t, e, n) {
        var o = this,
            i = t.layoutBox;
        i.absoluteY = i.originalAbsoluteY - e, i.absoluteX = i.originalAbsoluteX - n, t.render(this.scrollCtx, i), t.children.forEach(function (t) {
          o.renderTreeWithTop(t, e, n);
        });
      }
    }, {
      key: "clear",
      value: function value() {
        var t = this.layoutBox;
        this.ctx.clearRect(t.absoluteX, t.absoluteY, t.width, t.height), this.scrollCtx.clearRect(0, 0, this.renderport.width, this.renderport.height);
      }
    }, {
      key: "scrollRenderHandler",
      value: function value() {
        var t = this,
            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            o = this.layoutBox;
        this.scrollTop = n, this.scrollLeft = e;
        var i = o.absoluteY,
            r = o.absoluteX,
            l = i + this.scrollTop,
            a = i + this.scrollTop + o.height,
            s = r + this.scrollLeft,
            c = r + this.scrollLeft + o.width;
        this.clear(), this.renderBoxes.forEach(function (e) {
          t.render(e.ctx, e.box);
        }), this.children.forEach(function (e) {
          var n = e.layoutBox,
              o = n.height,
              i = n.width,
              r = n.originalAbsoluteY,
              u = n.originalAbsoluteX;
          r + o >= l && r <= a && u + i >= s && u <= c && t.renderTreeWithTop(e, t.scrollTop, t.scrollLeft);
        }), this.ctx.drawImage(this.scrollCanvas, o.absoluteX, o.absoluteY, o.width, o.height, o.absoluteX, o.absoluteY, o.width, o.height);
      }
    }, {
      key: "scrollRender",
      value: function value(t, e) {
        var n = this;
        this.sharedTexture ? this.requestID = requestAnimationFrame(function () {
          n.scrollRenderHandler(t, e);
        }) : this.scrollRenderHandler(t, e);
      }
    }, {
      key: "childImageLoadDoneCbk",
      value: function value(t) {
        var e = this.layoutBox,
            n = e.absoluteY + this.scrollTop,
            o = e.absoluteY + this.scrollTop + e.height,
            i = e.absoluteX + this.scrollLeft,
            r = e.absoluteX + this.scrollLeft + e.width,
            l = t.layoutBox,
            a = l.height,
            s = l.width,
            c = l.originalAbsoluteY,
            u = l.originalAbsoluteX;
        c + a >= n && c <= o && u + s >= i && u <= r && this.scrollRender(this.scrollLeft, this.scrollTop);
      }
    }, {
      key: "insertScrollView",
      value: function value(t) {
        var e = this;

        if (this.insert(t), this.root.on("repaint__done", function () {
          e.scrollRender(e.scrollLeft, e.scrollTop);
        }), this.scrollRender(0, 0), this.EE.on("image__render__done", function (t) {
          e.throttleImageLoadDone(t);
        }), !this.hasEventBind) {
          this.hasEventBind = !0, this.scrollerObj = new r.Scroller(function (t, n) {
            e.isDestroyed || (e.scrollRender(t, n), e.currentEvent && e.emit("scroll", e.currentEvent));
          }, this.scrollerOption), this.scrollerObj.setDimensions(this.layoutBox.width, this.layoutBox.height, this.scrollWidth, this.scrollHeight);
          var n = Object(i.getDpr)();
          this.on("touchstart", function (t) {
            t.touches || (t.touches = [t]);
            var o = y(t.touches);
            o.forEach(function (t) {
              1 !== n && (t.pageX *= n, t.pageY *= n);
            }), e.scrollerObj.doTouchStart(o, t.timeStamp), e.currentEvent = t;
          }), this.on("touchmove", function (t) {
            t.touches || (t.touches = [t]);
            var o = y(t.touches);
            o.forEach(function (t) {
              1 !== n && (t.pageX *= n, t.pageY *= n);
            }), e.scrollerObj.doTouchMove(o, t.timeStamp), e.currentEvent = t;
          }), this.root.on("touchend", function (t) {
            e.scrollerObj.doTouchEnd(t.timeStamp), e.currentEvent = t;
          });
        }
      }
    }, {
      key: "scrollTo",
      value: function value() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.scrollerObj.scrollTo(t, e, n);
      }
    }, {
      key: "scrollHeight",
      get: function get() {
        if (!this.children.length) return 0;
        var t = this.children[this.children.length - 1];
        return t.layoutBox.top + t.layoutBox.height;
      }
    }, {
      key: "scrollWidth",
      get: function get() {
        if (!this.children.length) return 0;
        var t = this.children[this.children.length - 1];
        return t.layoutBox.left + t.layoutBox.width;
      }
    }, {
      key: "scrollX",
      get: function get() {
        return this._scrollerOption.scrollingX;
      },
      set: function set(t) {
        this.scrollerOption = {
          scrollingX: t
        };
      }
    }, {
      key: "scrollY",
      get: function get() {
        return this._scrollerOption.scrollingY;
      },
      set: function set(t) {
        this.scrollerOption = {
          scrollingY: t
        };
      }
    }, {
      key: "scrollerOption",
      get: function get() {
        return this._scrollerOption;
      },
      set: function set() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        Object.assign(this._scrollerOption, t), this.scrollerObj && Object.assign(this.scrollerObj.options, this.scrollerOption);
      }
    }]) && s(n.prototype, l), v;
  }();
}, function (t, e, n) {
  var o, i, r;
  i = [e, n(22), n(23)], void 0 === (r = "function" == typeof (o = function o(t, e, n) {
    t.animate = e, t.Scroller = n;
  }) ? o.apply(e, i) : o) || (t.exports = r);
}, function (t, e) {
  var n, o;
  void 0 === (o = "function" == typeof (n = function n(t) {
    var e = "undefined" == typeof window ? this : window,
        n = Date.now || function () {
      return +new Date();
    },
        o = {},
        i = 1;

    t.requestAnimationFrame = function () {
      var t = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame,
          n = !!t;
      if (t && !/requestAnimationFrame\(\)\s*\{\s*\[native code\]\s*\}/i.test(t.toString()) && (n = !1), n) return function (e, n) {
        t(e, n);
      };
      var o = {},
          i = 1,
          r = null,
          l = +new Date();
      return function (t) {
        var e = i++;
        return o[e] = t, null === r && (r = setInterval(function () {
          var t = +new Date(),
              e = o;

          for (var n in o = {}, e) {
            e.hasOwnProperty(n) && (e[n](t), l = t);
          }

          t - l > 2500 && (clearInterval(r), r = null);
        }, 1e3 / 60)), e;
      };
    }(), t.stop = function (t) {
      var e = null !== o[t];
      return e && (o[t] = null), e;
    }, t.isRunning = function (t) {
      return null !== o[t];
    }, t.start = function (e, r, l, a, s, c) {
      var u = n(),
          h = u,
          f = 0,
          d = 0,
          p = i++;

      if (p % 20 == 0) {
        var y = {};

        for (var v in o) {
          y[v] = !0;
        }

        o = y;
      }

      var _ = function _(i) {
        var y = !0 !== i,
            v = n();
        if (!o[p] || r && !r(p)) return o[p] = null, void l(60 - d / ((v - u) / 1e3), p, !1);
        if (y) for (var g = Math.round((v - h) / (1e3 / 60)) - 1, m = 0; m < Math.min(g, 4); m++) {
          _(!0), d++;
        }
        a && (f = (v - u) / a) > 1 && (f = 1);
        var b = s ? s(f) : f;
        !1 !== e(b, v, y) && 1 !== f || !y ? y && (h = v, t.requestAnimationFrame(_, c)) : (o[p] = null, l(60 - d / ((v - u) / 1e3), p, 1 === f || void 0 === a));
      };

      return o[p] = !0, t.requestAnimationFrame(_, c), p;
    };
  }) ? n.apply(e, [e]) : n) || (t.exports = o);
}, function (t, e, n) {
  var o, i, r;
  i = [n(22)], void 0 === (r = "function" == typeof (o = function o(t) {
    var e = function e() {},
        n = function n(t, _n) {
      for (var o in this.__callback = t, this.options = {
        scrollingX: !0,
        scrollingY: !0,
        animating: !0,
        animationDuration: 250,
        bouncing: !0,
        locking: !0,
        paging: !1,
        snapping: !1,
        zooming: !1,
        minZoom: .5,
        maxZoom: 3,
        speedMultiplier: 1,
        scrollingComplete: e,
        penetrationDeceleration: .03,
        penetrationAcceleration: .08
      }, _n) {
        this.options[o] = _n[o];
      }
    },
        o = function o(t) {
      return Math.pow(t - 1, 3) + 1;
    },
        i = function i(t) {
      return (t /= .5) < 1 ? .5 * Math.pow(t, 3) : .5 * (Math.pow(t - 2, 3) + 2);
    };

    return n.prototype = {
      __isSingleTouch: !1,
      __isTracking: !1,
      __didDecelerationComplete: !1,
      __isGesturing: !1,
      __isDragging: !1,
      __isDecelerating: !1,
      __isAnimating: !1,
      __clientLeft: 0,
      __clientTop: 0,
      __clientWidth: 0,
      __clientHeight: 0,
      __contentWidth: 0,
      __contentHeight: 0,
      __snapWidth: 100,
      __snapHeight: 100,
      __zoomLevel: 1,
      __scrollLeft: 0,
      __scrollTop: 0,
      __maxScrollLeft: 0,
      __maxScrollTop: 0,
      __scheduledLeft: 0,
      __scheduledTop: 0,
      __scheduledZoom: 0,
      __lastTouchLeft: null,
      __lastTouchTop: null,
      __lastTouchMove: null,
      __positions: null,
      __minDecelerationScrollLeft: null,
      __minDecelerationScrollTop: null,
      __maxDecelerationScrollLeft: null,
      __maxDecelerationScrollTop: null,
      __decelerationVelocityX: null,
      __decelerationVelocityY: null,
      setDimensions: function setDimensions(t, e, n, o) {
        null !== t && (this.__clientWidth = t), null !== e && (this.__clientHeight = e), null !== n && (this.__contentWidth = n), null !== o && (this.__contentHeight = o), this.__computeScrollMax(), this.scrollTo(this.__scrollLeft, this.__scrollTop, !0);
      },
      setPosition: function setPosition(t, e) {
        this.__clientLeft = t || 0, this.__clientTop = e || 0;
      },
      setSnapSize: function setSnapSize(t, e) {
        this.__snapWidth = t, this.__snapHeight = e;
      },
      getValues: function getValues() {
        return {
          left: this.__scrollLeft,
          top: this.__scrollTop,
          right: this.__scrollLeft + this.__clientWidth / this.__zoomLevel,
          bottom: this.__scrollTop + this.__clientHeight / this.__zoomLevel,
          zoom: this.__zoomLevel
        };
      },
      getPoint: function getPoint(t, e) {
        var n = this.getValues();
        return {
          left: t / n.zoom,
          top: e / n.zoom
        };
      },
      getScrollMax: function getScrollMax() {
        return {
          left: this.__maxScrollLeft,
          top: this.__maxScrollTop
        };
      },
      zoomTo: function zoomTo(e, n, o, i, r) {
        if (!this.options.zooming) throw new Error("Zooming is not enabled!");
        r && (this.__zoomComplete = r), this.__isDecelerating && (t.stop(this.__isDecelerating), this.__isDecelerating = !1);
        var l = this.__zoomLevel;
        void 0 === o && (o = this.__clientWidth / 2), void 0 === i && (i = this.__clientHeight / 2), e = Math.max(Math.min(e, this.options.maxZoom), this.options.minZoom), this.__computeScrollMax(e);
        var a = e / l,
            s = a * (this.__scrollLeft + o) - o,
            c = a * (this.__scrollTop + i) - i;
        s > this.__maxScrollLeft ? s = this.__maxScrollLeft : s < 0 && (s = 0), c > this.__maxScrollTop ? c = this.__maxScrollTop : c < 0 && (c = 0), this.__publish(s, c, e, n);
      },
      zoomBy: function zoomBy(t, e, n, o, i) {
        this.zoomTo(this.__zoomLevel * t, e, n, o, i);
      },
      scrollTo: function scrollTo(e, n, o, i) {
        if (this.__isDecelerating && (t.stop(this.__isDecelerating), this.__isDecelerating = !1), void 0 !== i && i !== this.__zoomLevel) {
          if (!this.options.zooming) throw new Error("Zooming is not enabled!");
          e *= i, n *= i, this.__computeScrollMax(i);
        } else i = this.__zoomLevel;

        this.options.scrollingX ? this.options.paging ? e = Math.round(e / this.__clientWidth) * this.__clientWidth : this.options.snapping && (e = Math.round(e / this.__snapWidth) * this.__snapWidth) : e = this.__scrollLeft, this.options.scrollingY ? this.options.paging ? n = Math.round(n / this.__clientHeight) * this.__clientHeight : this.options.snapping && (n = Math.round(n / this.__snapHeight) * this.__snapHeight) : n = this.__scrollTop, e = Math.max(Math.min(this.__maxScrollLeft, e), 0), n = Math.max(Math.min(this.__maxScrollTop, n), 0), e === this.__scrollLeft && n === this.__scrollTop && (o = !1), this.__publish(e, n, i, o);
      },
      scrollBy: function scrollBy(t, e, n) {
        var o = this.__isAnimating ? this.__scheduledLeft : this.__scrollLeft,
            i = this.__isAnimating ? this.__scheduledTop : this.__scrollTop;
        this.scrollTo(o + (t || 0), i + (e || 0), n);
      },
      doMouseZoom: function doMouseZoom(t, e, n, o) {
        var i = t > 0 ? .97 : 1.03;
        return this.zoomTo(this.__zoomLevel * i, !1, n - this.__clientLeft, o - this.__clientTop);
      },
      doTouchStart: function doTouchStart(e, n) {
        if (void 0 === e.length) throw new Error("Invalid touch list: " + e);
        if (n instanceof Date && (n = n.valueOf()), "number" != typeof n) throw new Error("Invalid timestamp value: " + n);
        var o, i;
        this.__interruptedAnimation = !0, this.__isDecelerating && (t.stop(this.__isDecelerating), this.__isDecelerating = !1, this.__interruptedAnimation = !0), this.__isAnimating && (t.stop(this.__isAnimating), this.__isAnimating = !1, this.__interruptedAnimation = !0);
        var r = 1 === e.length;
        r ? (o = e[0].pageX, i = e[0].pageY) : (o = Math.abs(e[0].pageX + e[1].pageX) / 2, i = Math.abs(e[0].pageY + e[1].pageY) / 2), this.__initialTouchLeft = o, this.__initialTouchTop = i, this.__zoomLevelStart = this.__zoomLevel, this.__lastTouchLeft = o, this.__lastTouchTop = i, this.__lastTouchMove = n, this.__lastScale = 1, this.__enableScrollX = !r && this.options.scrollingX, this.__enableScrollY = !r && this.options.scrollingY, this.__isTracking = !0, this.__didDecelerationComplete = !1, this.__isDragging = !r, this.__isSingleTouch = r, this.__positions = [];
      },
      doTouchMove: function doTouchMove(t, e, n) {
        if (void 0 === t.length) throw new Error("Invalid touch list: " + t);
        if (e instanceof Date && (e = e.valueOf()), "number" != typeof e) throw new Error("Invalid timestamp value: " + e);

        if (this.__isTracking) {
          var o, i;
          2 === t.length ? (o = Math.abs(t[0].pageX + t[1].pageX) / 2, i = Math.abs(t[0].pageY + t[1].pageY) / 2) : (o = t[0].pageX, i = t[0].pageY);
          var r = this.__positions;

          if (this.__isDragging) {
            var l = o - this.__lastTouchLeft,
                a = i - this.__lastTouchTop,
                s = this.__scrollLeft,
                c = this.__scrollTop,
                u = this.__zoomLevel;

            if (void 0 !== n && this.options.zooming) {
              var h = u;

              if (u = u / this.__lastScale * n, h !== (u = Math.max(Math.min(u, this.options.maxZoom), this.options.minZoom))) {
                var f = o - this.__clientLeft,
                    d = i - this.__clientTop;
                s = (f + s) * u / h - f, c = (d + c) * u / h - d, this.__computeScrollMax(u);
              }
            }

            if (this.__enableScrollX) {
              s -= l * this.options.speedMultiplier;
              var p = this.__maxScrollLeft;
              (s > p || s < 0) && (this.options.bouncing ? s += l / 2 * this.options.speedMultiplier : s = s > p ? p : 0);
            }

            if (this.__enableScrollY) {
              c -= a * this.options.speedMultiplier;
              var y = this.__maxScrollTop;
              (c > y || c < 0) && (this.options.bouncing ? c += a / 2 * this.options.speedMultiplier : c = c > y ? y : 0);
            }

            r.length > 60 && r.splice(0, 30), r.push(s, c, e), this.__publish(s, c, u);
          } else {
            var v = this.options.locking ? 3 : 0,
                _ = Math.abs(o - this.__initialTouchLeft),
                g = Math.abs(i - this.__initialTouchTop);

            this.__enableScrollX = this.options.scrollingX && _ >= v, this.__enableScrollY = this.options.scrollingY && g >= v, r.push(this.__scrollLeft, this.__scrollTop, e), this.__isDragging = (this.__enableScrollX || this.__enableScrollY) && (_ >= 5 || g >= 5), this.__isDragging && (this.__interruptedAnimation = !1);
          }

          this.__lastTouchLeft = o, this.__lastTouchTop = i, this.__lastTouchMove = e, this.__lastScale = n;
        }
      },
      doTouchEnd: function doTouchEnd(t) {
        if (t instanceof Date && (t = t.valueOf()), "number" != typeof t) throw new Error("Invalid timestamp value: " + t);

        if (this.__isTracking) {
          if (this.__isTracking = !1, this.__isDragging) if (this.__isDragging = !1, this.__isSingleTouch && this.options.animating && t - this.__lastTouchMove <= 100) {
            for (var e = this.__positions, n = e.length - 1, o = n, i = n; i > 0 && e[i] > this.__lastTouchMove - 100; i -= 3) {
              o = i;
            }

            if (o !== n) {
              var r = e[n] - e[o],
                  l = this.__scrollLeft - e[o - 2],
                  a = this.__scrollTop - e[o - 1];
              this.__decelerationVelocityX = l / r * (1e3 / 60), this.__decelerationVelocityY = a / r * (1e3 / 60);
              var s = this.options.paging || this.options.snapping ? 4 : 1;
              (Math.abs(this.__decelerationVelocityX) > s || Math.abs(this.__decelerationVelocityY) > s) && this.__startDeceleration(t);
            } else this.options.scrollingComplete();
          } else t - this.__lastTouchMove > 100 && this.options.scrollingComplete();
          this.__isDecelerating || ((this.__interruptedAnimation || this.__isDragging) && this.options.scrollingComplete(), this.scrollTo(this.__scrollLeft, this.__scrollTop, !0, this.__zoomLevel)), this.__positions.length = 0;
        }
      },
      __publish: function __publish(e, n, r, l) {
        var a = this.__isAnimating;

        if (a && (t.stop(a), this.__isAnimating = !1), l && this.options.animating) {
          this.__scheduledLeft = e, this.__scheduledTop = n, this.__scheduledZoom = r;

          var s = this.__scrollLeft,
              c = this.__scrollTop,
              u = this.__zoomLevel,
              h = e - s,
              f = n - c,
              d = r - u,
              p = function (t, e, n) {
            n && (this.__scrollLeft = s + h * t, this.__scrollTop = c + f * t, this.__zoomLevel = u + d * t, this.__callback && this.__callback(this.__scrollLeft, this.__scrollTop, this.__zoomLevel));
          }.bind(this),
              y = function (t) {
            return this.__isAnimating === t;
          }.bind(this),
              v = function (t, e, n) {
            e === this.__isAnimating && (this.__isAnimating = !1), (this.__didDecelerationComplete || n) && this.options.scrollingComplete(), this.options.zooming && (this.__computeScrollMax(), this.__zoomComplete && (this.__zoomComplete(), this.__zoomComplete = null));
          }.bind(this);

          this.__isAnimating = t.start(p, y, v, this.options.animationDuration, a ? o : i);
        } else this.__scheduledLeft = this.__scrollLeft = e, this.__scheduledTop = this.__scrollTop = n, this.__scheduledZoom = this.__zoomLevel = r, this.__callback && this.__callback(e, n, r), this.options.zooming && (this.__computeScrollMax(), this.__zoomComplete && (this.__zoomComplete(), this.__zoomComplete = null));
      },
      __computeScrollMax: function __computeScrollMax(t) {
        void 0 === t && (t = this.__zoomLevel), this.__maxScrollLeft = Math.max(this.__contentWidth * t - this.__clientWidth, 0), this.__maxScrollTop = Math.max(this.__contentHeight * t - this.__clientHeight, 0);
      },
      __startDeceleration: function __startDeceleration() {
        if (this.options.paging) {
          var e = Math.max(Math.min(this.__scrollLeft, this.__maxScrollLeft), 0),
              n = Math.max(Math.min(this.__scrollTop, this.__maxScrollTop), 0),
              o = this.__clientWidth,
              i = this.__clientHeight;
          this.__minDecelerationScrollLeft = Math.floor(e / o) * o, this.__minDecelerationScrollTop = Math.floor(n / i) * i, this.__maxDecelerationScrollLeft = Math.ceil(e / o) * o, this.__maxDecelerationScrollTop = Math.ceil(n / i) * i;
        } else this.__minDecelerationScrollLeft = 0, this.__minDecelerationScrollTop = 0, this.__maxDecelerationScrollLeft = this.__maxScrollLeft, this.__maxDecelerationScrollTop = this.__maxScrollTop;

        var r = function (t, e, n) {
          this.__stepThroughDeceleration(n);
        }.bind(this),
            l = this.options.snapping ? 4 : .1,
            a = function () {
          var t = Math.abs(this.__decelerationVelocityX) >= l || Math.abs(this.__decelerationVelocityY) >= l;
          return t || (this.__didDecelerationComplete = !0), t;
        }.bind(this),
            s = function () {
          this.__isDecelerating = !1, this.__didDecelerationComplete && this.options.scrollingComplete(), this.scrollTo(this.__scrollLeft, this.__scrollTop, this.options.snapping);
        }.bind(this);

        this.__isDecelerating = t.start(r, a, s);
      },
      __stepThroughDeceleration: function __stepThroughDeceleration(t) {
        var e = this.__scrollLeft + this.__decelerationVelocityX,
            n = this.__scrollTop + this.__decelerationVelocityY;

        if (!this.options.bouncing) {
          var o = Math.max(Math.min(this.__maxDecelerationScrollLeft, e), this.__minDecelerationScrollLeft);
          o !== e && (e = o, this.__decelerationVelocityX = 0);
          var i = Math.max(Math.min(this.__maxDecelerationScrollTop, n), this.__minDecelerationScrollTop);
          i !== n && (n = i, this.__decelerationVelocityY = 0);
        }

        if (t ? this.__publish(e, n, this.__zoomLevel) : (this.__scrollLeft = e, this.__scrollTop = n), this.options.paging || (this.__decelerationVelocityX *= .95, this.__decelerationVelocityY *= .95), this.options.bouncing) {
          var r = 0,
              l = 0,
              a = this.options.penetrationDeceleration,
              s = this.options.penetrationAcceleration;
          e < this.__minDecelerationScrollLeft ? r = this.__minDecelerationScrollLeft - e : e > this.__maxDecelerationScrollLeft && (r = this.__maxDecelerationScrollLeft - e), n < this.__minDecelerationScrollTop ? l = this.__minDecelerationScrollTop - n : n > this.__maxDecelerationScrollTop && (l = this.__maxDecelerationScrollTop - n), 0 !== r && (r * this.__decelerationVelocityX <= 0 ? this.__decelerationVelocityX += r * a : this.__decelerationVelocityX = r * s), 0 !== l && (l * this.__decelerationVelocityY <= 0 ? this.__decelerationVelocityY += l * a : this.__decelerationVelocityY = l * s);
        }
      }
    }, n;
  }) ? o.apply(e, i) : o) || (t.exports = r);
}, function (t, e, n) {
  "use strict";

  n.r(e), n.d(e, "default", function () {
    return p;
  });
  var o = n(2);

  function i(t) {
    return (i = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
      return _typeof2(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof2(t);
    })(t);
  }

  function r(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function l(t, e) {
    for (var n = 0; n < e.length; n++) {
      var o = e[n];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
    }
  }

  function a(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), e && s(t, e);
  }

  function s(t, e) {
    return (s = Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t;
    })(t, e);
  }

  function c(t, e) {
    return !e || "object" !== i(e) && "function" != typeof e ? u(t) : e;
  }

  function u(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }

  function h() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
    } catch (t) {
      return !1;
    }
  }

  function f(t) {
    return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    })(t);
  }

  var d = new (n(5).default)("bitMapPool"),
      p = function () {
    a(p, o.default);
    var t,
        e,
        n,
        i,
        s = (t = p, e = h(), function () {
      var n,
          o = f(t);

      if (e) {
        var i = f(this).constructor;
        n = Reflect.construct(o, arguments, i);
      } else n = o.apply(this, arguments);

      return c(this, n);
    });

    function p(t) {
      var e;
      r(this, p);
      var n = t.style,
          o = void 0 === n ? {} : n,
          i = t.props,
          l = void 0 === i ? {} : i,
          a = t.idName,
          c = void 0 === a ? "" : a,
          h = t.className,
          f = void 0 === h ? "" : h,
          y = t.value,
          v = void 0 === y ? "" : y,
          _ = t.font,
          g = void 0 === _ ? "" : _;
      return (e = s.call(this, {
        props: l,
        idName: c,
        className: f,
        style: o
      })).type = "BitMapText", e.ctx = null, e.valuesrc = v, e.renderBoxes = [], Object.defineProperty(u(e), "value", {
        get: function get() {
          return this.valuesrc;
        },
        set: function set(t) {
          t !== this.valuesrc && (this.valuesrc = t, this.emit("repaint"));
        },
        enumerable: !0,
        configurable: !0
      }), e.font = d.get(g), e.font || console.error("Please invoke API `registBitMapFont` before using `BitMapText`"), e;
    }

    return n = p, (i = [{
      key: "insert",
      value: function value(t, e) {
        this.renderBoxes.push({
          ctx: t,
          box: e
        }), this.render(t, e);
      }
    }, {
      key: "repaint",
      value: function value() {
        var t = this;
        this.renderBoxes.forEach(function (e) {
          t.render(e.ctx, e.box);
        });
      }
    }, {
      key: "destroySelf",
      value: function value() {
        this.root = null;
      }
    }, {
      key: "render",
      value: function value(t, e) {
        var n = this;
        this.font && (this.font.ready ? this.renderText(t, e) : this.font.event.on("text__load__done", function () {
          n.isDestroyed || n.renderText(t, e);
        }));
      }
    }, {
      key: "getTextBounds",
      value: function value() {
        for (var t = this.style.letterSpacing, e = void 0 === t ? 0 : t, n = 0, o = 0, i = this.value.length; o < i; o++) {
          var r = this.value[o],
              l = this.font.chars[r];
          l && (n += l.w, o < i - 1 && (n += e));
        }

        return {
          width: n,
          height: this.font.lineHeight
        };
      }
    }, {
      key: "renderText",
      value: function value(t, e) {
        var n = this.getTextBounds(),
            o = this.font.lineHeight;
        t.save();
        var i = this.renderBorder(t, e),
            r = i.needClip,
            l = i.needStroke;
        r && t.clip();

        var a = e || this.layoutBox,
            s = this.style,
            c = s.width,
            u = s.height,
            h = s.lineHeight,
            f = void 0 === h ? o : h,
            d = s.textAlign,
            p = s.verticalAlign,
            y = a.absoluteX,
            v = a.absoluteY,
            _ = f / o,
            g = _ * n.width;

        f < u && ("middle" === p ? v += (u - f) / 2 : "bottom" === p && (v = v + u - f)), c > g && ("center" === d ? y += (c - g) / 2 : "right" === d && (y += c - g));

        for (var m = 0; m < this.value.length; m++) {
          var b = this.value[m],
              x = this.font.chars[b];
          x && (t.drawImage(this.font.texture, x.x, x.y, x.w, x.h, y + x.offX * _, v + x.offY * _, x.w * _, x.h * _), y += x.w * _);
        }

        l && t.stroke(), t.restore();
      }
    }]) && l(n.prototype, i), p;
  }();
}]); 
 			});
 		define("openDataContext/render/style/avatar.js", function(require, module, exports){ 			
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  container: {
    width: 100,
    height: 100,
    backgroundColor: "transparent"
  },
  avatarImg: {
    width: "100%",
    height: "100%",
    borderRadius: 10
  }
};
exports.default = _default; 
 			});
 		define("openDataContext/render/style/horizontal.js", function(require, module, exports){ 			
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  container: {
    width: 800,
    height: 170,
    backgroundColor: "transparent"
  },
  list: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center"
  },
  listItem: {
    width: 160,
    height: 170,
    flexDirection: "column"
  },
  itemContent: {
    width: "100%",
    height: "100%"
  },
  separatorImg: {
    width: "100%",
    height: 1
  },
  avatarBgImg: {
    left: 40,
    top: 4,
    width: 80,
    height: 81,
    position: "absolute"
  },
  avatarImg: {
    left: 45,
    top: 7,
    width: 70,
    height: 70,
    position: "absolute"
  },
  nicknameText: {
    left: 5,
    top: 90,
    width: 150,
    height: 30,
    position: "absolute",
    color: "#995600",
    fontSize: 24,
    lineHeight: 30,
    textAlign: "center",
    verticalAlign: "middle",
    textOverflow: "ellipsis"
  },
  inviteBtn: {
    right: 20,
    top: 120,
    width: 120,
    height: 50,
    position: "absolute"
  },
  inviteBtnImg: {
    width: 120,
    height: 50,
    marginTop: 1
  }
};
exports.default = _default; 
 			});
 		define("openDataContext/render/style/inviteNew.js", function(require, module, exports){ 			
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  container: {
    width: 930,
    height: 90,
    backgroundColor: "transparent"
  },
  list: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center"
  },
  listItem: {
    width: 186,
    height: 90,
    flexDirection: "column"
  },
  itemContent: {
    width: "100%",
    height: "100%"
  },
  separatorImg: {
    width: "100%",
    height: 1
  },
  avatarImg: {
    left: 16,
    top: 0,
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: "#ffffff",
    position: "absolute"
  },
  nicknameBgImg: {
    left: -3,
    bottom: 0,
    width: 118,
    height: 20,
    position: "absolute"
  },
  nicknameText: {
    left: 6,
    bottom: 0,
    width: 100,
    height: 16,
    position: "absolute",
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 16,
    textAlign: "center",
    verticalAlign: "middle",
    textOverflow: "ellipsis"
  },
  inviteBtn: {
    right: -10,
    top: 4,
    width: 112,
    height: 72,
    position: "absolute"
  },
  inviteBtnImg: {
    left: 10,
    top: 10,
    width: 92,
    height: 52,
    marginTop: 2
  }
};
exports.default = _default; 
 			});
 		define("openDataContext/render/style/vertical.js", function(require, module, exports){ 			
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  container: {
    width: 370,
    height: 450,
    backgroundColor: "transparent"
  },
  list: {
    width: "100%",
    height: "100%",
    flexDirection: "column"
  },
  listItem: {
    width: "100%",
    height: 84,
    flexDirection: "column"
  },
  itemContent: {
    width: "100%",
    height: "100%"
  },
  separatorImg: {
    width: "100%",
    height: 1
  },
  avatarBgImg: {
    left: 7,
    top: 9,
    width: 70,
    height: 71,
    position: "absolute"
  },
  avatarImg: {
    left: 12,
    top: 12,
    width: 60,
    height: 60,
    position: "absolute"
  },
  nicknameText: {
    left: 80,
    right: 126,
    // width: 164,
    top: 29,
    bottom: 25,
    position: "absolute",
    color: "#995600",
    fontSize: 24,
    lineHeight: 30,
    textAlign: "left",
    verticalAlign: "middle",
    textOverflow: "ellipsis"
  },
  inviteBtn: {
    right: 7,
    top: 17,
    width: 120,
    height: 50,
    position: "absolute"
  },
  inviteBtnImg: {
    width: 120,
    height: 50,
    marginTop: 1
  }
};
exports.default = _default; 
 			});
 		define("openDataContext/render/styleteam.js", function(require, module, exports){ 			
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  container: {
    width: 322,
    height: 420
  },
  rankList: {
    width: 322,
    height: 420,
    backgroundColor: 'transparent'
  },
  list: {
    width: 322,
    height: 420
  },
  listItem: {
    width: 322,
    height: 72,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6
  },
  listInviteImg: {
    width: 121,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -20,
    marginTop: 4
  },
  inviteButton: {
    width: 121,
    height: 50
  },
  listHeadImgBg: {
    width: 71,
    height: 71,
    marginLeft: 6,
    marginTop: 3,
    position: 'absolute'
  },
  listHeadImg: {
    borderRadius: 3,
    width: 60,
    height: 60,
    marginLeft: 12,
    marginTop: -1,
    flexDirection: 'row'
  },
  listItemName: {
    fontSize: 22,
    height: 26,
    color: '#995600',
    lineHeight: 26,
    width: 140,
    left: 6,
    marginTop: 8,
    marginLeft: 10,
    textAlign: 'left'
  },
  listLineImg: {
    width: 310,
    height: 1,
    marginLeft: -316,
    marginTop: 84
  }
};
exports.default = _default; 
 			});
 		define("openDataContext/render/template/avatar.js", function(require, module, exports){ 			
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = anonymous;

/*<view class="container" id="main">
	<image class="avatarImg" src="{{= it.players[0].avatarUrl }}"></image>
</view>*/

/**
 * 上述模板经过模板引擎编译成版本函数，可通过 http://olado.github.io/doT/index.html 在线获得
 * @param {{players: wx.FriendInfo[]}} it
 * @return {string}
 */
function anonymous(it) {
  var out = '<view class="container" id="main"><image class="avatarImg" src="' + it.players[0].avatarUrl + '"></image></view>';
  return out;
} 
 			});
 		define("openDataContext/render/template/horizontal.js", function(require, module, exports){ 			
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = anonymous;

/*<view class="container" id="main">
	<scrollview class="list" scrollX="{{= it.canScroll }}">
	{{~it.players :item:index}}
		<view class="listItem">
			<view class="itemContent">
				<image class="avatarImg" src="{{= item.avatarUrl }}"></image>
				<image class="avatarBgImg" src="{{= it.imgAvatarFrame }}"></image>
				<text class="nicknameText" value="{{= item.nickname}}"></text>
				<view class="inviteBtn">
					<image class="inviteBtnImg" src="{{= it.imgInviteBtn}}"></image>
				</view>
			</view>
		</view>
		{{~}}
	</scrollview>
</view>*/

/**
 * 上述模板经过模板引擎编译成版本函数，可通过 http://olado.github.io/doT/index.html 在线获得
 * @param {{
 * 	players: wx.FriendInfo[],
 * 	canScroll: boolean,
 * 	imgAvatarFrame: string,
 * 	imgInviteBtn: string,
 * 	imgSeparator: string
 * }} it
 * @return {string}
 */
function anonymous(it) {
  var out = '<view class="container" id="main"><scrollview class="list" scrollX="' + it.canScroll + '">';
  var arr1 = it.players;

  if (arr1) {
    var item,
        index = -1,
        l1 = arr1.length - 1;

    while (index < l1) {
      item = arr1[index += 1];
      out += '<view class="listItem"><view class="itemContent"><image class="avatarImg" src="' + item.avatarUrl + '"></image><image class="avatarBgImg" src="' + it.imgAvatarFrame + '"></image><text class="nicknameText" value="' + item.nickname + '"></text><view class="inviteBtn"><image class="inviteBtnImg" src="' + it.imgInviteBtn + '"></image></view></view></view>';
    }
  }

  out += '</scrollview></view>';
  return out;
} 
 			});
 		define("openDataContext/render/template/inviteNew.js", function(require, module, exports){ 			
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = anonymous;

/*<view class="container" id="main">
	<scrollview class="list" scrollX="{{= it.canScroll }}">
	{{~it.players :item:index}}
		<view class="listItem">
			<view class="itemContent">
				<image class="avatarImg" src="{{= item.avatarUrl }}"></image>
				<image class="nicknameBgImg" src="{{= it.imgNicknameBg }}"></image>
				<text class="nicknameText" value="{{= item.nickname}}"></text>
				<view class="inviteBtn">
					<image class="inviteBtnImg" src="{{= it.imgInviteBtn1 }}"></image>
				</view>
			</view>
		</view>
		{{~}}
	</scrollview>
</view>*/

/**
 * 上述模板经过模板引擎编译成版本函数，可通过 http://olado.github.io/doT/index.html 在线获得
 * @param {{
 * 	players: wx.FriendInfo[],
 * 	canScroll: boolean,
 * 	imgInviteBtn1: string,
 * }} it
 * @return {string}
 */
function anonymous(it) {
  var out = '<view class="container" id="main"><scrollview class="list" scrollX="' + it.canScroll + '">';
  var arr1 = it.players;

  if (arr1) {
    var item,
        index = -1,
        l1 = arr1.length - 1;

    while (index < l1) {
      item = arr1[index += 1];
      out += '<view class="listItem"><view class="itemContent"><image class="avatarImg" src="' + item.avatarUrl + '"></image><image class="nicknameBgImg" src="' + it.imgNicknameBg + '"></image><text class="nicknameText" value="' + item.nickname + '"></text><view class="inviteBtn"><image class="inviteBtnImg" src="' + it.imgInviteBtn1 + '"></image></view></view></view>';
    }
  }

  out += '</scrollview></view>';
  return out;
} 
 			});
 		define("openDataContext/render/template/vertical.js", function(require, module, exports){ 			
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = anonymous;

/*<view class="container" id="main">
	<scrollview class="list" scrollY="{{= it.canScroll }}">
		{{~it.players :item:index}}
		<view class="listItem">
			<view class="itemContent">
				<image class="avatarImg" src="{{= item.avatarUrl }}"></image>
				<image class="avatarBgImg" src="{{= it.imgAvatarFrame }}"></image>
				<text class="nicknameText" value="{{= item.nickname}}"></text>
				<view class="inviteBtn">
					<image class="inviteBtnImg" src="{{= it.imgInviteBtn}}"></image>
				</view>
			</view>
			<image class="separatorImg" src="{{= it.imgSeparator }}"></image>
		</view>
		{{~}}
	</scrollview>
</view>*/

/**
 * 上述模板经过模板引擎编译成版本函数，可通过 http://olado.github.io/doT/index.html 在线获得
 * @param {{
 * 	players: wx.FriendInfo[],
 * 	canScroll: boolean,
 * 	imgAvatarFrame: string,
 * 	imgInviteBtn: string,
 * 	imgSeparator: string
 * }} it
 * @return {string}
 */
function anonymous(it) {
  var out = '<view class="container" id="main"><scrollview class="list" scrollY="' + it.canScroll + '">';
  var arr1 = it.players;

  if (arr1) {
    var item,
        index = -1,
        l1 = arr1.length - 1;

    while (index < l1) {
      item = arr1[index += 1];
      out += '<view class="listItem"><view class="itemContent"><image class="avatarImg" src="' + item.avatarUrl + '"></image><image class="avatarBgImg" src="' + it.imgAvatarFrame + '"></image><text class="nicknameText" value="' + item.nickname + '"></text><view class="inviteBtn"><image class="inviteBtnImg" src="' + it.imgInviteBtn + '"></image></view></view><image class="separatorImg" src="' + it.imgSeparator + '"></image></view>';
    }
  }

  out += '</scrollview></view>';
  return out;
} 
 			});
 		define("openDataContext/render/tplfnteam.js", function(require, module, exports){ 			
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = anonymous;

/*<view class="container" id="main">
	view class="rankList">
        <scrollview class="list">
            {{~it.data :item:index}}
                <view class="listItem">
                  <image class="listHeadImgBg" src="{{= it.head_bg }}"></image>
                  <image class="listHeadImg" src="{{= item.avatarUrl }}"></image>
                  <text class="listItemName" value="{{= item.nickname}}"></text>
				  
				  <view class="listInviteImg">
						<image class="inviteButton" src="{{= it.invite_btn}}"></image>
				  </view>
					
                  <image class="listLineImg" src="{{= it.line }}"></image>
				  
                </view>
            {{~}}
        </scrollview>
    </view>
</view>*/
// 上述模板经过模板引擎编译成版本函数，可通过olado.github.io/doT/index.html在线获得
function anonymous(it) {
  var out = '<view class="container" id="main"> <view class="rankList"> <scrollview class="list"> ';
  var arr1 = it.data;

  if (arr1) {
    var item,
        index = -1,
        l1 = arr1.length - 1;

    while (index < l1) {
      item = arr1[index += 1];
      out += ' <view class="listItem"> <image class="listHeadImgBg" src="' + it.head_bg + '"></image> <image class="listHeadImg" src="' + item.avatarUrl + '"></image> <text class="listItemName" value="' + item.nickname + '"></text> <view class="listInviteImg"><image class="inviteButton" src="' + it.invite_btn + '"></image> </view> <image class="listLineImg" src="' + it.line + '"></image>  </view> ';
    }
  }

  out += ' </scrollview> </view></view>';
  return out;
} 
 			});
 		define("openDataContext/wxApi.js", function(require, module, exports){ 			
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = require("../openDataContext/@babel/runtime/helpers/objectSpread2");

var _classCallCheck2 = require("../openDataContext/@babel/runtime/helpers/classCallCheck");

var _createClass2 = require("../openDataContext/@babel/runtime/helpers/createClass");

var WxApi = /*#__PURE__*/function () {
  function WxApi() {
    _classCallCheck2(this, WxApi);
  }

  _createClass2(WxApi, null, [{
    key: "getSharedCanvas",
    value:
    /**
     * 获取主域和开放数据域共享的sharedCanvas。
     * @return {wx.Canvas}
     */
    function getSharedCanvas() {
      console.log("wx.getSharedCanvas.");

      try {
        return wx.getSharedCanvas();
      } catch (e) {
        console.error("wx.getSharedCanvas error:", e);
      }
    }
    /**
     * 同步获取系统信息。
     * @return {Partial<wx.SystemInfo>}
     */

  }, {
    key: "getSystemInfoSync",
    value: function getSystemInfoSync() {
      console.log("wx.getSystemInfoSync.");

      try {
        return wx.getSystemInfoSync();
      } catch (e) {
        console.error("wx.getSystemInfoSync error:", e);
        /** @type {wx.WXConfig} */

        var wxConfig = window["WXConfig"];

        if (wxConfig) {
          return {
            screenWidth: wxConfig.screenWidth,
            screenHeight: wxConfig.screenHeight,
            pixelRatio: wxConfig.devicePixelRatio,
            platform: wxConfig.platform,
            system: wxConfig.system
          };
        } else {
          return {
            screenWidth: 1334,
            screenHeight: 750,
            pixelRatio: 1,
            platform: "unknown",
            system: "Unknown"
          };
        }
      }
    }
    /**
     * 用于onMessage的回调
     * @callback OnMessageCallback
     * @param {Object & any} data
     */

    /**
     * 监听主域发送的消息。
     * @param {OnMessageCallback} callback
     * @return {void}
     */

  }, {
    key: "onMessage",
    value: function onMessage(callback) {
      console.log("wx.onMessage.");

      try {
        return wx.onMessage(callback);
      } catch (e) {
        console.error("wx.onMessage error:", e);
      }
    }
    /**
     * 用于getFriendCloudStorage的回调
     * @callback GetFriendCloudStorageCallback
     * @param {wx.UserGameData[]} data
     */

    /**
     * 拉取当前用户所有同玩好友的托管数据。
     * @param {string[]} keyList
     * @param {GetFriendCloudStorageCallback} [callback]
     * @return {void}
     */

  }, {
    key: "getFriendCloudStorage",
    value: function getFriendCloudStorage(keyList, callback) {
      console.log("wx.getFriendCloudStorage");
      wx.getFriendCloudStorage({
        keyList: keyList,
        success: function success(res) {
          console.log("wx.getFriendCloudStorage succeed:", res);
          callback && callback(res.data);
        },
        fail: function fail(res) {
          console.log("wx.getFriendCloudStorage failed:", res);
          callback && callback(null);
        }
      });
    }
    /**
     * 用于getPotentialFriendList的回调
     * @callback GetPotentialFriendListCallback
     * @param {wx.FriendInfo[]} list
     */

    /**
     * 获取可能对游戏感兴趣的未注册的好友名单。每次调用最多可获得 5 个好友。
     * @param {GetPotentialFriendListCallback} [callback]
     * @return {void}
     */

  }, {
    key: "getPotentialFriendList",
    value: function getPotentialFriendList(callback) {
      console.log("wx.getPotentialFriendList");

      try {
        wx.getPotentialFriendList({
          success: function success(res) {
            console.log("wx.getPotentialFriendList succeed:", res);
            callback && callback(res.list);
          },
          fail: function fail(res) {
            console.log("wx.getPotentialFriendList failed:", res);
            callback && callback(null);
          }
        });
      } catch (e) {
        console.error("wx.getPotentialFriendList error:", e);
        callback && callback(null);
      }
    }
    /**
     * 用于getFriendsStateData的回调
     * @callback GetFriendsStateDataCallback
     * @param {wx.FriendState[]} list
     */

    /**
     * 获取所有好友的在线状态及信息。
     * @param {GetFriendsStateDataCallback} [callback]
     * @return {void}
     */

  }, {
    key: "getFriendsStateData",
    value: function getFriendsStateData(callback) {
      console.log("wx.getGameServerManager");

      try {
        var gameServerManager = wx.getGameServerManager();
        console.log("WXApi GameServerManager.getFriendsStateData");
        gameServerManager.getFriendsStateData({
          success: function success(res) {
            console.log("WXApi GameServerManager.getFriendsStateData succeed:", res);
            res.list.forEach(function (friend) {
              friend.nickname = friend.nickName;
              friend.openid = friend.openId;
            });
            callback && callback(res.list);
          },
          fail: function fail(res) {
            console.log("WXApi GameServerManager.getFriendsStateData failed:", res);
            callback && callback(null);
          }
        });
      } catch (e) {
        console.error("WXApi GameServerManager.getFriendsStateData error:", e);
        callback && callback(null);
      }
    }
    /**
     * 用于shareMessageToFriend的回调
     * @callback ShareMessageToFriendCallback
     * @param {boolean} succeed
     */

    /**
     * 给指定的好友分享游戏信息。
     * @param {wx.ShareMessageToFriendObject} object
     * @param {ShareMessageToFriendCallback} [callback]
     * @return {void}
     */

  }, {
    key: "shareMessageToFriend",
    value: function shareMessageToFriend(object, callback) {
      console.log("wx.shareMessageToFriend");
      wx.shareMessageToFriend(_objectSpread2(_objectSpread2({}, object), {}, {
        success: function success() {
          console.log("wx.shareMessageToFriend succeed.");
          callback && callback(true);
        },
        fail: function fail(res) {
          console.log("wx.shareMessageToFriend failed:", res);
          callback && callback(false);
        }
      }));
    }
  }]);

  return WxApi;
}();

exports.default = WxApi; 
 			});
 		var global = (function () { return this })();    if (!global && typeof GameGlobal !== 'undefined') global = GameGlobal;	var pluginInfoMap = {};	;	global.requirePlugin = global.requirePlugin || function(path) {		    var position = path.indexOf('/');    		var alias = '';    		var pagePath = '';    		if (position !== -1) {    		    alias = path.substr(0, position);    		    pagePath = path.substr(position + 1, path.length);    		}    		else {    		    alias = path;    		}    		if (pluginInfoMap.hasOwnProperty(alias)) {    		    var realPath = '';    		    if (pagePath.length === 0) {    		        realPath =  '__plugin__/' + pluginInfoMap[alias].appid;    		        return require(realPath);    		    } else {    		        realPath = '__plugin__/' + pluginInfoMap[alias].appid + '/' + pagePath;    		        return require(realPath);    		    }    		}    		else {    		    console.error('not found alias: ', alias);    		    throw new Error('Plugin ' + alias + ' is not defined.')    		}	};	define("openDataContext/index.js", function(require, module, exports){ 			
"use strict";

var _interopRequireDefault = require("../openDataContext/@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = require("../openDataContext/@babel/runtime/helpers/classCallCheck");

var _createClass2 = require("../openDataContext/@babel/runtime/helpers/createClass");

var _engineMin = _interopRequireDefault(require("./engine.min.js"));

var _wxApi = _interopRequireDefault(require("./wxApi.js"));

var _WxApi$getSharedCanva;

var sharedContext = (_WxApi$getSharedCanva = _wxApi.default.getSharedCanvas()) === null || _WxApi$getSharedCanva === void 0 ? void 0 : _WxApi$getSharedCanva.getContext("2d");

var Main = /*#__PURE__*/function () {
  function Main() {
    _classCallCheck2(this, Main);
  }

  _createClass2(Main, null, [{
    key: "preload",
    value:
    /**
     * 预加载用到的图片资源，注意图片路径不需要加./作为前缀，以小游戏根目录作为根目录
     * @return {void}
     */
    function preload() {
      _engineMin.default.loadImgs([this.IMG_SEPARATOR, this.IMG_AVATAR_FRAME, this.IMG_NICKNAME_BG, this.IMG_INVITE_BTN, this.IMG_INVITED, this.IMG_INVITE_BTN1, this.IMG_INVITED1]);
    }
  }, {
    key: "setActive",
    value:
    /**
     * 控制开放数据域是否绘制东西
     * @param {boolean} active
     * @return {void}
     */
    function setActive(active) {
      this._active = active;

      _engineMin.default.clearAll();
    }
  }, {
    key: "setClickEnable",
    value:
    /**
     * 控制点击按钮是否可用
     * @param {boolean} canClick
     * @return {void}
     */
    function setClickEnable(canClick) {
      this._canClick = canClick;
    }
  }, {
    key: "setSelfOpenId",
    value:
    /**
     * 设置自己的openId，当绘制邀请列表时，需要过滤掉自己
     * @param {string} selfOpenId
     * @return {void}
     */
    function setSelfOpenId(selfOpenId) {
      this._selfOpenId = selfOpenId;
    }
  }, {
    key: "setShareArgs",
    value:
    /**
     * 设置分享标题和分享图片
     * @param {string} shareTitle
     * @param {string} shareImgUrl
     * @return {void}
     */
    function setShareArgs(shareTitle, shareImgUrl) {
      this._shareTitle = shareTitle;
      this._shareImgUrl = shareImgUrl;
    }
    /**
     * 设置子域绘制的真实物理尺寸，子域不理解主域用的引擎，又需要独立进行事件处理，需要将真实的物理尺寸传给渲染引擎。
     * @param {{x: number, y: number, width: number, height: number}} rect - 相对于屏幕的比例，取值范围[0, 1]
     * @return {void}
     */

  }, {
    key: "updateViewport",
    value: function updateViewport(rect) {
      var sysInfo = _wxApi.default.getSystemInfoSync();

      var x = sysInfo.screenWidth * rect.x;
      var y = sysInfo.screenHeight * rect.y;
      var width = sysInfo.screenWidth * rect.width;
      var height = sysInfo.screenHeight * rect.height;

      _engineMin.default.updateViewPort({
        x: x,
        y: y,
        width: width,
        height: height
      });
    }
  }, {
    key: "updateViewSize",
    value:
    /**
     * 设置子域绘制的真实尺寸，用于更新style。
     * @param {{width: number, height: number}} size
     * @return {void}
     */
    function updateViewSize(size) {
      this._viewWidth = size.width;
      this._viewHeight = size.height;

      if (_engineMin.default.children.length > 0) {
        /** @type {MiniGameCanvasEngine.ScrollViewElement[]} */
        var list = this.getElementsByType(_engineMin.default.children[0], "ScrollView");
        var scrollPosList = list.map(function (scrollView) {
          return {
            x: scrollView.scrollLeft,
            y: scrollView.scrollTop
          };
        });
        this.refreshPlayerList();
        list = this.getElementsByType(_engineMin.default.children[0], "ScrollView");
        list.forEach(function (scrollView, index) {
          var scrollPos = scrollPosList[index];
          scrollView.scrollLeft = scrollPos.x;
          scrollView.scrollTop = scrollPos.y;
        });
      }
    }
    /**
     * 递归遍历所有子节点。
     * @param {MiniGameCanvasEngine.Element} element
     * @param {MiniGameCanvasEngine.ElementType} type
     * @return {MiniGameCanvasEngine.Element[]}
     */

  }, {
    key: "getElementsByType",
    value: function getElementsByType(element, type) {
      var list = [];

      var func = function func(_element) {
        _element.children.forEach(function (child) {
          return func(child);
        });

        _element.type === type && list.push(_element);
      };

      func(element);
      return list;
    }
    /** @type {wx.FriendState[]} */

  }, {
    key: "getFriendsStateData",
    value:
    /**
     * 用于getFriendsStateData的回调
     * @callback GetFriendsStateDataCallback
     * @param {wx.FriendState[]} list
     */

    /**
     * 拉取当前用户所有同玩好友的托管数据。
     * @param {GetFriendsStateDataCallback} [callback]
     * @return {void}
     */
    function getFriendsStateData(callback) {
      var _this = this;

      if (this._friendsData.length > 0) {
        callback && callback(this._friendsData);
      } else {
        _wxApi.default.getFriendsStateData(function (list) {
          _this._friendsData = list || [];
          callback && callback(_this._friendsData);
        });
      }
    }
    /**
     * 用于getPotentialFriendList的回调
     * @callback GetPotentialFriendListCallback
     * @param {wx.FriendInfo[]} list
     */

    /**
     * 获取可能对游戏感兴趣的未注册的好友名单。每次调用最多可获得 5 个好友。
     * @param {GetPotentialFriendListCallback} [callback]
     * @return {void}
     */

  }, {
    key: "getPotentialFriendList",
    value: function getPotentialFriendList(callback) {
      _wxApi.default.getPotentialFriendList(function (list) {
        callback && callback(list || []);
      });
    }
    /** @type {Object<string, Object<string, boolean>>} */

  }, {
    key: "drawPlayerList",
    value:
    /**
     * 绘制玩家列表。
     * @param {string} templateName - 模板名称
     * @param {wx.FriendInfo[]} players - 玩家数据列表
     * @param {boolean=} canScroll - 是否允许滚动,默认false
     * @param {boolean=} ignoreInvited - 是否忽略已邀请状态,默认false
     * @return {void}
     */
    function drawPlayerList(templateName, players, canScroll, ignoreInvited) {
      this._templateName = templateName;
      this._players = players;
      this._canScroll = canScroll;
      this._ignoreInvited = ignoreInvited;
      this.refreshPlayerList();
    }
    /**
     * 绘制玩家列表。
     * @return {void}
     */

  }, {
    key: "refreshPlayerList",
    value: function refreshPlayerList() {
      var _this2 = this;

      if (this._active) {
        var _require, _require2;

        /**
         * 模板函数
         * @callback TemplateFunc
         * @param {{
         * 	players: wx.FriendInfo[],
         * 	invitedIds: Object<string, boolean>,
         * 	canScroll: boolean,
         * 	imgSeparator: string,
         * 	imgAvatarFrame: string,
         * 	imgNicknameBg: string,
         * 	imgInviteBtn: string,
         * 	imgInviteBtn1: string
         * }} it
         * @return {string}
         */

        /** @type {TemplateFunc} */
        var templateFunc = ((_require = require("./render/template/".concat(this._templateName, ".js"))) === null || _require === void 0 ? void 0 : _require.default) || require("./render/template/vertical.js").default;

        this._template = templateFunc({
          players: this._players,
          canScroll: this._canScroll,
          imgSeparator: this.IMG_SEPARATOR,
          imgAvatarFrame: this.IMG_AVATAR_FRAME,
          imgNicknameBg: this.IMG_NICKNAME_BG,
          imgInviteBtn: this.IMG_INVITE_BTN,
          imgInviteBtn1: this.IMG_INVITE_BTN1
        });
        /** @type {MiniGameCanvasEngine.CSSStyles} */

        var style = ((_require2 = require("./render/style/".concat(this._templateName, ".js"))) === null || _require2 === void 0 ? void 0 : _require2.default) || require("./render/style/vertical.js").default;

        var containerStyle = style.container;

        if (containerStyle) {
          containerStyle.width = this._viewWidth;
          containerStyle.height = this._viewHeight;

          for (var styleKey in style) {
            if (style.hasOwnProperty(styleKey)) {
              var styleElement = style[styleKey];

              if (styleElement.position === "absolute" && styleElement.left != null && styleElement.right != null) {
                styleElement.width = containerStyle.width - +styleElement.left - +styleElement.right;
              }
            }
          }
        } // Layout.clearAll();


        _engineMin.default.clear();

        _engineMin.default.init(this._template, style);

        _engineMin.default.layout(sharedContext); // 设置所有邀请按钮的状态


        var elements = _engineMin.default.getElementsByClassName("inviteBtn");

        elements.forEach(function (element, index) {
          _this2.refreshInviteBtn(element, _this2._players[index].openid);
        }); // 手机上图片老刷不出来，这里延迟重绘一下

        setTimeout(function () {
          return _engineMin.default.repaint();
        }, 100);
      }
    }
    /**
     * 更新邀请按钮的状态
     * @param {MiniGameCanvasEngine.Element} element
     * @param {string} openID
     * @return {void}
     */

  }, {
    key: "refreshInviteBtn",
    value: function refreshInviteBtn(element, openID) {
      var _this3 = this;

      element.off("click", null);
      var invitedOpenIds = this._invitedOpenIds[this._templateName] || (this._invitedOpenIds[this._templateName] = []);

      if (!this._ignoreInvited && invitedOpenIds[openID]) {
        /** @type {MiniGameCanvasEngine.ImageElement} */
        var imgBtn = element.children[0];

        switch (imgBtn.src) {
          case this.IMG_INVITE_BTN:
            imgBtn.src = this.IMG_INVITED;
            break;

          case this.IMG_INVITE_BTN1:
            imgBtn.src = this.IMG_INVITED1;
            break;
        }
      } else {
        /** @type {MiniGameCanvasEngine.ImageElement} */
        var _imgBtn = element.children[0];

        switch (_imgBtn.src) {
          case this.IMG_INVITED:
            _imgBtn.src = this.IMG_INVITE_BTN;
            break;

          case this.IMG_INVITED1:
            _imgBtn.src = this.IMG_INVITE_BTN1;
            break;
        }

        element.on("click", function (_) {
          console.log("openDataContext click:", openID, _this3._canClick);

          if (_this3._canClick) {
            _wxApi.default.shareMessageToFriend({
              openId: openID,
              title: _this3._shareTitle,
              imageUrl: _this3._shareImgUrl
            }, function (succeed) {
              if (succeed) {
                invitedOpenIds[openID] = true;

                _this3.refreshInviteBtn(element, openID);
              }
            });
          }
        });
      }
    }
    /**
     * 处理主域传过来的消息，根据不同的event执行不同的操作，其中viewRect为比例
     * @param {{
     * 	event: string,
     *
     * 	funcName: string,
     * 	funcArgs: any[],
     *
     * 	fieldName: string,
     * 	fieldValue: any,
     *
     * 	openId?: string,
     *
     * 	shareTitle?: string,
     * 	shareImgUrl?: string
     *
     * 	templateName: string,
     * 	maxCount: number,
     * 	inBatches: boolean,
     * 	canScroll: boolean,
     * 	ignoreInvited: boolean,
     *
     * 	viewRect?: {x: number, y: number, width: number, height: number},
     * 	viewSize?: {width: number, height: number},
     * }} data
     */

  }, {
    key: "handleMessage",
    value: function handleMessage(data) {
      switch (data.event) {
        case "preload":
          this.preload();
          break;

        case "setSelfOpenId":
          this.setSelfOpenId(data.openId);
          break;

        case "directShareToFriend":
          this.directShareToFriend(data.openId);
          break;

        case "setShareArgs":
          this.setShareArgs(data.shareTitle, data.shareImgUrl);
          break;

        case "showFriends":
          this.setActive(true);
          this.showFriends(data.templateName, data.canScroll, data.ignoreInvited, data.maxCount);
          break;

        case "showMixed":
          this.setActive(true);
          this.showMixed(data.templateName, data.canScroll, data.ignoreInvited, data.maxCount, data.inBatches);
          break;

        case "showPotentials":
          this.setActive(true);
          this.showPotentials(data.templateName, data.canScroll, data.ignoreInvited, data.maxCount);
          break;

        case "showAvatar":
          this.setActive(true);
          this.showAvatar();
          break;

        case "updateViewport":
          this.updateViewport(data.viewRect);
          break;

        case "updateSize":
          this.updateViewSize(data.viewSize);
          break;

        case "close":
          this.setActive(false);
          break;

        case "clickEnable":
          this.setClickEnable(true);
          break;

        case "clickNotEnable":
          this.setClickEnable(false);
          break;
        // 灵活指令，可以随意设置静态成员变量或者随意调用静态成员函数

        case "set":
          var fieldName = data.fieldName;

          if (fieldName) {
            this[fieldName] = data.fieldValue;
          }

          break;

        case "call":
          var funcName = data.funcName;

          if (funcName) {
            /** @type {Function} */
            var func = this[funcName];

            if (typeof func === "function") {
              func.apply(this, data.funcArgs || []);
            }
          }

          break;
      }
    }
    /**
     * 清空已邀请状态
     * @param {string} templateName - 模板名称
     */

  }, {
    key: "clearInvited",
    value: function clearInvited(templateName) {
      this._invitedOpenIds[templateName] = {};
    }
    /**
     * 展示好友列表
     * @param {string} templateName - 模板名称
     * @param {boolean} canScroll - 是否允许滚动
     * @param {boolean} ignoreInvited - 是否忽略已邀请状态
     * @param {number} maxCount - 最大显示数量
     * @return {void}
     */

  }, {
    key: "showFriends",
    value: function showFriends(templateName, canScroll, ignoreInvited, maxCount) {
      var _this4 = this;

      maxCount || (maxCount = 20);
      this.clearInvited(templateName);
      this.getFriendsStateData(function (friendList) {
        /** @type {wx.FriendInfo[]} */
        var list = friendList.slice();

        if (list.length < maxCount) {
          _this4.getPotentialFriendList(function (potentialList) {
            var moreCount = maxCount - list.length;
            var i = 0;
            potentialList.forEach(function (potential) {
              if (i < moreCount && list.every(function (friend) {
                return friend.openid !== potential.openid;
              })) {
                list.push(potential);
                i++;
              }
            });

            _this4.drawPlayerList(templateName, list, canScroll, ignoreInvited);
          });
        } else {
          _this4.drawPlayerList(templateName, list, canScroll, ignoreInvited);
        }
      });
    }
  }, {
    key: "showMixed",
    value:
    /**
     * 展示混合好友列表
     * @param {string} templateName - 模板名称
     * @param {boolean} canScroll - 是否允许滚动
     * @param {boolean} ignoreInvited - 是否忽略已邀请状态
     * @param {number} maxCount - 最大显示数量
     * @param {boolean} inBatches - 是否分批显示
     * @return {void}
     */
    function showMixed(templateName, canScroll, ignoreInvited, maxCount, inBatches) {
      var _this5 = this;

      var maxFriendCount = maxCount ? maxCount - 5 : 15;
      this.clearInvited(templateName);
      this.getFriendsStateData(function (friendList) {
        var startIndex = inBatches ? _this5._friendIndex : 0;
        /** @type {wx.FriendInfo[]} */

        var list = friendList.slice(startIndex, startIndex + maxFriendCount);
        var requireMore = Math.min(maxFriendCount - list.length, startIndex);

        if (requireMore > 0) {
          _this5._friendIndex = requireMore;
          list = list.concat(friendList.slice(0, requireMore));
        } else {
          _this5._friendIndex += maxFriendCount;
        }

        _this5.getPotentialFriendList(function (potentialList) {
          potentialList.forEach(function (potential) {
            if (list.every(function (friend) {
              return friend.openid !== potential.openid;
            })) {
              list.splice(Math.random() * list.length, 0, potential);
            }
          });

          _this5.drawPlayerList(templateName, list, canScroll, ignoreInvited);
        });
      });
    }
    /**
     * 展示潜在好友列表
     * @param {string} templateName - 模板名称
     * @param {boolean} canScroll - 是否允许滚动
     * @param {boolean} ignoreInvited - 是否忽略已邀请状态
     * @param {number} maxCount - 最大显示数量，-1表示全部显示，0或null则显示20个
     * @return {void}
     */

  }, {
    key: "showPotentials",
    value: function showPotentials(templateName, canScroll, ignoreInvited, maxCount) {
      var _this6 = this;

      maxCount === -1 ? maxCount = Number.MAX_VALUE : maxCount || (maxCount = 20);
      this.getPotentialFriendList(function (list) {
        list.length > maxCount && (list = list.slice(0, maxCount));

        _this6.drawPlayerList(templateName, list, canScroll, ignoreInvited);
      });
    }
    /**
     * 展示单个头像
     */

  }, {
    key: "showAvatar",
    value: function showAvatar() {
      var _this7 = this;

      this.getPotentialFriendList(function (potentialList) {
        if (potentialList.length <= 0) {
          _this7.getFriendsStateData(function (friendList) {
            _this7.drawPlayerList("avatar", friendList);
          });
        } else {
          _this7.drawPlayerList("avatar", potentialList);
        }
      });
    }
    /**
     * 定向分享给朋友
     */

  }, {
    key: "directShareToFriend",
    value: function directShareToFriend(openID) {
      console.log("openDataContext directShareToFriend:", openID);

      _wxApi.default.shareMessageToFriend({
        openId: openID,
        title: this._shareTitle,
        imageUrl: this._shareImgUrl
      }, function (succeed) {
        if (succeed) {
          console.log("directShareToFriend.result:", succeed);
        }
      });
    }
  }]);

  return Main;
}();

Main.IMG_SEPARATOR = "openDataContext/img/separator.png";
Main.IMG_AVATAR_FRAME = "openDataContext/img/avatar_frame.png";
Main.IMG_NICKNAME_BG = "openDataContext/img/nickname_bg.png";
Main.IMG_INVITE_BTN = "openDataContext/img/invite_btn.png";
Main.IMG_INVITED = "openDataContext/img/invited.png";
Main.IMG_INVITE_BTN1 = "openDataContext/img/invite_btn1.png";
Main.IMG_INVITED1 = "openDataContext/img/invited1.png";
Main._active = false;
Main._canClick = true;
Main._selfOpenId = "";
Main._shareTitle = "";
Main._shareImgUrl = "";
Main._viewWidth = 0;
Main._viewHeight = 0;
Main._friendsData = [];
Main._invitedOpenIds = {};
Main._templateName = "";
Main._players = [];
Main._canScroll = false;
Main._ignoreInvited = false;
Main._friendIndex = 0;

_wxApi.default.onMessage(function (data) {
  console.log("openDataContext onMessage:", data);
  Main.handleMessage(data);
}); 
 			}); 	require("openDataContext/index.js");
 	