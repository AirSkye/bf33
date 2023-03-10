
	define("@babel/runtime/helpers/Arrayincludes.js", function(require, module, exports){ 			
Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(r,e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),n=t.length>>>0;if(0==n)return!1;for(var i,o,a=0|e,u=Math.max(0<=a?a:n-Math.abs(a),0);u<n;){if((i=t[u])===(o=r)||"number"==typeof i&&"number"==typeof o&&isNaN(i)&&isNaN(o))return!0;u++}return!1}}); 
 			});
 		define("@babel/runtime/helpers/arrayLikeToArray.js", function(require, module, exports){ 			
function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=new Array(a);e<a;e++)n[e]=r[e];return n}module.exports=_arrayLikeToArray; 
 			});
 		define("@babel/runtime/helpers/arrayWithHoles.js", function(require, module, exports){ 			
function _arrayWithHoles(r){if(Array.isArray(r))return r}module.exports=_arrayWithHoles; 
 			});
 		define("@babel/runtime/helpers/createForOfIteratorHelper.js", function(require, module, exports){ 			
var unsupportedIterableToArray=require("./unsupportedIterableToArray");function _createForOfIteratorHelper(r,e){var t;if("undefined"==typeof Symbol||null==r[Symbol.iterator]){if(Array.isArray(r)||(t=unsupportedIterableToArray(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var n=0,o=function(){};return{s:o,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(r){throw r},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,i=!1;return{s:function(){t=r[Symbol.iterator]()},n:function(){var r=t.next();return u=r.done,r},e:function(r){i=!0,a=r},f:function(){try{u||null==t.return||t.return()}finally{if(i)throw a}}}}module.exports=_createForOfIteratorHelper; 
 			});
 		define("@babel/runtime/helpers/iterableToArrayLimit.js", function(require, module, exports){ 			
function _iterableToArrayLimit(r,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var e=[],i=!0,o=!1,l=void 0;try{for(var n,a=r[Symbol.iterator]();!(i=(n=a.next()).done)&&(e.push(n.value),!t||e.length!==t);i=!0);}catch(r){o=!0,l=r}finally{try{i||null==a.return||a.return()}finally{if(o)throw l}}return e}}module.exports=_iterableToArrayLimit; 
 			});
 		define("@babel/runtime/helpers/nonIterableRest.js", function(require, module, exports){ 			
function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}module.exports=_nonIterableRest; 
 			});
 		define("@babel/runtime/helpers/slicedToArray.js", function(require, module, exports){ 			
var arrayWithHoles=require("./arrayWithHoles"),iterableToArrayLimit=require("./iterableToArrayLimit"),unsupportedIterableToArray=require("./unsupportedIterableToArray"),nonIterableRest=require("./nonIterableRest");function _slicedToArray(r,e){return arrayWithHoles(r)||iterableToArrayLimit(r,e)||unsupportedIterableToArray(r,e)||nonIterableRest()}module.exports=_slicedToArray; 
 			});
 		define("@babel/runtime/helpers/typeof.js", function(require, module, exports){ 			
function _typeof(o){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?module.exports=_typeof=function(o){return typeof o}:module.exports=_typeof=function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}module.exports=_typeof; 
 			});
 		define("@babel/runtime/helpers/unsupportedIterableToArray.js", function(require, module, exports){ 			
var arrayLikeToArray=require("./arrayLikeToArray");function _unsupportedIterableToArray(r,e){if(r){if("string"==typeof r)return arrayLikeToArray(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?arrayLikeToArray(r,e):void 0}}module.exports=_unsupportedIterableToArray; 
 			});
 		define("adapter-min.js", function(require, module, exports){ 			
"use strict";

var _typeof2 = require("@babel/runtime/helpers/typeof");

!function r(o, i, a) {
  function c(t, e) {
    if (!i[t]) {
      if (!o[t]) {
        var n = "function" == typeof require && require;
        if (!e && n) return n(t, !0);
        if (u) return u(t, !0);
        throw (e = new Error("Cannot find module '" + t + "'")).code = "MODULE_NOT_FOUND", e;
      }

      n = i[t] = {
        exports: {}
      }, o[t][0].call(n.exports, function (e) {
        return c(o[t][1][e] || e);
      }, n, n.exports, r, o, i, a);
    }

    return i[t].exports;
  }

  for (var u = "function" == typeof require && require, e = 0; e < a.length; e++) {
    c(a[e]);
  }

  return c;
}({
  1: [function (e, t, n) {}, {}],
  2: [function (e, t, n) {
    "use strict";

    var r = window.fsUtils,
        o = r.getUserDataPath,
        i = r.readJsonSync,
        c = r.makeDirSync,
        a = r.writeFileSync,
        s = r.copyFile,
        l = r.downloadFile,
        u = r.writeFile,
        f = r.deleteFile,
        d = r.rmdirSync,
        p = r.unzip,
        h = r.isOutOfStorage,
        m = !1,
        y = null,
        g = !1,
        b = [],
        v = [],
        w = !1,
        _ = 0,
        E = /^https?:\/\/.*/;
    cc.assetManager.cacheManager = t.exports = {
      cacheDir: "gamecaches",
      cachedFileName: "cacheList.json",
      cacheEnabled: !0,
      autoClear: !0,
      cacheInterval: 500,
      deleteInterval: 500,
      writeFileInterval: 2e3,
      outOfStorage: !1,
      tempFiles: null,
      cachedFiles: null,
      cacheQueue: {},
      version: "1.0",
      getCache: function getCache(e) {
        return this.cachedFiles.has(e) ? this.cachedFiles.get(e).url : "";
      },
      getTemp: function getTemp(e) {
        return this.tempFiles.has(e) ? this.tempFiles.get(e) : "";
      },
      init: function init() {
        this.cacheDir = o() + "/" + this.cacheDir;
        var e = this.cacheDir + "/" + this.cachedFileName,
            t = i(e);
        t instanceof Error || !t.version ? (t instanceof Error || d(this.cacheDir, !0), this.cachedFiles = new cc.AssetManager.Cache(), c(this.cacheDir, !0), a(e, JSON.stringify({
          files: this.cachedFiles._map,
          version: this.version
        }), "utf8")) : this.cachedFiles = new cc.AssetManager.Cache(t.files), this.tempFiles = new cc.AssetManager.Cache();
      },
      updateLastTime: function updateLastTime(e) {
        this.cachedFiles.has(e) && (this.cachedFiles.get(e).lastTime = Date.now());
      },
      _write: function _write() {
        g = !(y = null), u(this.cacheDir + "/" + this.cachedFileName, JSON.stringify({
          files: this.cachedFiles._map,
          version: this.version
        }), "utf8", function () {
          g = !1;

          for (var e = 0, t = v.length; e < t; e++) {
            v[e]();
          }

          v.length = 0, v.push.apply(v, b), b.length = 0;
        });
      },
      writeCacheFile: function writeCacheFile(e) {
        y ? e && v.push(e) : (y = setTimeout(this._write.bind(this), this.writeFileInterval), !0 === g ? e && b.push(e) : e && v.push(e));
      },
      _cache: function _cache() {
        var t,
            n = this;

        for (t in this.cacheQueue) {
          var e = function e(_e) {
            if (m = !1, _e) {
              if (h(_e.message)) return n.outOfStorage = !0, void (n.autoClear && n.clearLRU());
            } else n.cachedFiles.add(t, {
              bundle: a,
              url: u,
              lastTime: c
            }), delete n.cacheQueue[t], n.writeCacheFile();

            cc.js.isEmptyObject(n.cacheQueue) || (m = !0, setTimeout(n._cache.bind(n), n.cacheInterval));
          },
              r = this.cacheQueue[t],
              o = r.srcUrl,
              i = r.isCopy,
              a = r.cacheBundleRoot,
              c = Date.now().toString(),
              u = "",
              u = (a ? "".concat(this.cacheDir, "/").concat(a, "/") : "".concat(this.cacheDir, "/")).concat(c).concat(_++).concat(cc.path.extname(t));

          return void (i ? s(o, u, e) : l(o, u, null, e));
        }

        m = !1;
      },
      cacheFile: function cacheFile(e, t, n, r, o) {
        !(n = void 0 !== n ? n : this.cacheEnabled) || this.cacheQueue[e] || this.cachedFiles.has(e) || (this.cacheQueue[e] = {
          srcUrl: t,
          cacheBundleRoot: r,
          isCopy: o
        }, m || (m = !0, this.outOfStorage ? m = !1 : setTimeout(this._cache.bind(this), this.cacheInterval)));
      },
      clearCache: function clearCache() {
        var t = this,
            e = (d(this.cacheDir, !0), this.cachedFiles = new cc.AssetManager.Cache(), c(this.cacheDir, !0), this.cacheDir + "/" + this.cachedFileName);
        this.outOfStorage = !1, a(e, JSON.stringify({
          files: this.cachedFiles._map,
          version: this.version
        }), "utf8"), cc.assetManager.bundles.forEach(function (e) {
          E.test(e.base) && t.makeBundleFolder(e.name);
        });
      },
      clearLRU: function clearLRU() {
        if (!w) {
          w = !0;
          var n = [],
              r = this;

          if (this.cachedFiles.forEach(function (t, e) {
            "internal" === t.bundle || r._isZipFile(e) && cc.assetManager.bundles.find(function (e) {
              return -1 !== e.base.indexOf(t.url);
            }) || n.push({
              originUrl: e,
              url: t.url,
              lastTime: t.lastTime
            });
          }), n.sort(function (e, t) {
            return e.lastTime - t.lastTime;
          }), n.length = Math.floor(n.length / 3), 0 !== n.length) {
            for (var e = 0, t = n.length; e < t; e++) {
              this.cachedFiles.remove(n[e].originUrl);
            }

            this.writeCacheFile(function () {
              setTimeout(function e() {
                var t = n.pop();
                r._isZipFile(t.originUrl) ? (d(t.url, !0), r._deleteFileCB()) : f(t.url, r._deleteFileCB.bind(r)), 0 < n.length ? setTimeout(e, r.deleteInterval) : w = !1;
              }, r.deleteInterval);
            });
          }
        }
      },
      removeCache: function removeCache(e) {
        var t, n;
        this.cachedFiles.has(e) && (n = (t = this).cachedFiles.remove(e).url, this.writeCacheFile(function () {
          t._isZipFile(e) ? (d(n, !0), t._deleteFileCB()) : f(n, t._deleteFileCB.bind(t));
        }));
      },
      _deleteFileCB: function _deleteFileCB(e) {
        e || (this.outOfStorage = !1);
      },
      makeBundleFolder: function makeBundleFolder(e) {
        c(this.cacheDir + "/" + e, !0);
      },
      unzipAndCacheBundle: function unzipAndCacheBundle(t, e, n, r) {
        var o = Date.now().toString(),
            i = "".concat(this.cacheDir, "/").concat(n, "/").concat(o).concat(_++),
            a = this;
        c(i, !0), p(e, i, function (e) {
          if (e) return d(i, !0), h(e.message) && (a.outOfStorage = !0, a.autoClear && a.clearLRU()), void (r && r(e));
          a.cachedFiles.add(t, {
            bundle: n,
            url: i,
            lastTime: o
          }), a.writeCacheFile(), r && r(null, i);
        });
      },
      _isZipFile: function _isZipFile(e) {
        return ".zip" === e.slice(-4);
      }
    };
  }, {}],
  3: [function (e, R, L) {
    "use strict";

    var r,
        s,
        l = e("../cache-manager"),
        e = window.fsUtils,
        f = e.fs,
        d = e.downloadFile,
        o = e.readText,
        i = e.readArrayBuffer,
        a = e.readJson,
        p = e.loadSubpackage,
        h = e.getUserDataPath,
        c = e.exists,
        m = /^https?:\/\/.*/,
        y = {},
        e = cc.assetManager.downloader,
        t = cc.assetManager.parser,
        n = cc.assetManager.presets,
        g = __globalAdapter.isSubContext,
        b = (e.maxConcurrency = 8, e.maxRequestsPerFrame = 64, n.scene.maxConcurrency = 10, n.scene.maxRequestsPerFrame = 64, {}),
        v = {};

    function u(e, t, n) {
      "function" == typeof t && (n = t, t = null), m.test(e) ? n && n(new Error("Can not load remote scripts")) : (__cocos_require__(e), n && n(null));
    }

    function w(e, t, n) {
      "function" == typeof t && (n = t, t = null);
      t = cc.sys, t = (t.platform === t.TAOBAO ? window.document : document).createElement("audio");
      t.src = e, n && n(null, t);
    }

    function _(r, t, o, e, i) {
      var n = I(r, o);
      n.inLocal ? t(n.url, o, i) : n.inCache ? (l.updateLastTime(r), t(n.url, o, function (e, t) {
        e && l.removeCache(r), i(e, t);
      })) : d(r, null, o.header, e, function (e, n) {
        e ? i(e, null) : t(n, o, function (e, t) {
          e || (l.tempFiles.add(r, n), l.cacheFile(r, n, o.cacheEnabled, o.__cacheBundleRoot__, !0)), i(e, t);
        });
      });
    }

    function E(e, t, n) {
      i(e, n);
    }

    function x(e, t, n) {
      o(e, n);
    }

    function O(e, t, n) {
      a(e, n);
    }

    var S = g ? function (e, t, n) {
      e = (e = I(e, t).url).slice(r.length + 1);
      t = __cocos_require__(cc.path.changeExtname(e, ".js"));
      n && n(null, t);
    } : function (e, t, n) {
      _(e, O, t, t.onFileProgress, n);
    },
        n = g ? function (e, t, n) {
      n(null, "Arial");
    } : function (e, t, n) {
      n(null, __globalAdapter.loadFont(e) || "Arial");
    };

    function T(t, e, n) {
      c(t, function (e) {
        e ? n(null, t) : n(new Error("file ".concat(t, " does not exist!")));
      });
    }

    function N(e, t, n) {
      _(e, T, t, t.onFileProgress, n);
    }

    function M(e, n, r) {
      i(e, function (e, t) {
        if (e) return r(e);
        C(t, n, r);
      });
    }

    function A(e, n, r) {
      i(e, function (e, t) {
        if (e) return r(e);
        P(t, n, r);
      });
    }

    var C = t.parsePVRTex,
        P = t.parsePKMTex;
    var D,
        j = g ? function (e, t, n) {
      n(null, e = I(e, t).url);
    } : N,
        I = (e.downloadDomAudio = w, e.downloadScript = u, t.parsePVRTex = M, t.parsePKMTex = A, e.register({
      ".js": u,
      ".mp3": N,
      ".ogg": N,
      ".wav": N,
      ".m4a": N,
      ".png": j,
      ".jpg": j,
      ".bmp": j,
      ".jpeg": j,
      ".gif": j,
      ".ico": j,
      ".tiff": j,
      ".image": j,
      ".webp": j,
      ".pvr": N,
      ".pkm": N,
      ".font": N,
      ".eot": N,
      ".ttf": N,
      ".woff": N,
      ".svg": N,
      ".ttc": N,
      ".txt": N,
      ".xml": N,
      ".vsh": N,
      ".fsh": N,
      ".atlas": N,
      ".tmx": N,
      ".tsx": N,
      ".plist": N,
      ".fnt": N,
      ".json": S,
      ".ExportJson": N,
      ".binary": N,
      ".bin": N,
      ".dbbin": N,
      ".skel": N,
      ".mp4": N,
      ".avi": N,
      ".mov": N,
      ".mpg": N,
      ".mpeg": N,
      ".rm": N,
      ".rmvb": N,
      bundle: function bundle(e, t, a) {
        var n = cc.path.basename(e),
            r = t.version || cc.assetManager.downloader.bundleVers[n];

        if (b[n]) {
          var o = "subpackages/".concat(n, "/config.").concat(r ? r + "." : "", "json"),
              i = function i() {
            S(o, t, function (e, t) {
              t && (t.base = "subpackages/".concat(n, "/")), a(e, t);
            });
          };

          if (y[n]) return i();
          p(n, t.onFileProgress, function (e) {
            e ? a(e, null) : (y[n] = !0, i());
          });
        } else {
          m.test(e) || !g && e.startsWith(h()) ? (u = e, c = "src/scripts/".concat(n, "/index.js"), l.makeBundleFolder(n)) : v[n] ? (u = "".concat(s, "remote/").concat(n), c = "src/scripts/".concat(n, "/index.js"), l.makeBundleFolder(n)) : (u = "assets/".concat(n), c = "assets/".concat(n, "/index.js")), __cocos_require__(c), t.__cacheBundleRoot__ = n;
          var c,
              u,
              o = "".concat(u, "/config.").concat(r ? r + "." : "", "json");
          S(o, t, function (e, n) {
            var r, o, i;
            e ? a && a(e) : n.isZip ? (e = n.zipVersion, e = "".concat(u, "/res.").concat(e ? e + "." : "", "zip"), r = e, o = t, i = function i(e, t) {
              e ? a && a(e) : (n.base = t + "/res/", (e = cc.sys).platform === e.ALIPAY_GAME && e.os === e.OS_ANDROID && f.accessSync({
                path: e = t + "res/"
              }) && (n.base = e), a && a(null, n));
            }, (e = l.cachedFiles.get(r)) ? (l.updateLastTime(r), i && i(null, e.url)) : m.test(r) ? d(r, null, o.header, o.onFileProgress, function (e, t) {
              e ? i && i(e) : l.unzipAndCacheBundle(r, t, o.__cacheBundleRoot__, i);
            }) : l.unzipAndCacheBundle(r, r, o.__cacheBundleRoot__, i)) : (n.base = u + "/", a && a(null, n));
          });
        }
      },
      default: function _default(e, t, n) {
        _(e, x, t, t.onFileProgress, n);
      }
    }), t.register({
      ".png": e.downloadDomImage,
      ".jpg": e.downloadDomImage,
      ".bmp": e.downloadDomImage,
      ".jpeg": e.downloadDomImage,
      ".gif": e.downloadDomImage,
      ".ico": e.downloadDomImage,
      ".tiff": e.downloadDomImage,
      ".image": e.downloadDomImage,
      ".webp": e.downloadDomImage,
      ".pvr": M,
      ".pkm": A,
      ".font": n,
      ".eot": n,
      ".ttf": n,
      ".woff": n,
      ".svg": n,
      ".ttc": n,
      ".mp3": w,
      ".ogg": w,
      ".wav": w,
      ".m4a": w,
      ".txt": x,
      ".xml": x,
      ".vsh": x,
      ".fsh": x,
      ".atlas": x,
      ".tmx": x,
      ".tsx": x,
      ".fnt": x,
      ".plist": function plist(e, t, r) {
        o(e, function (e, t) {
          var n = null;
          e || (n = cc.plistParser.parse(t)) || (e = new Error("parse failed")), r && r(e, n);
        });
      },
      ".binary": E,
      ".bin": E,
      ".dbbin": E,
      ".skel": E,
      ".ExportJson": O
    }), g ? function (e, t) {
      return {
        url: e = m.test(e) ? e : r + "/" + e
      };
    } : function (e, t) {
      var n = !1,
          r = !1;
      return !e.startsWith(h()) && m.test(e) ? t.reload || ((t = l.cachedFiles.get(e)) ? (r = !0, e = t.url) : (t = l.tempFiles.get(e)) && (n = !0, e = t)) : n = !0, {
        url: e,
        inLocal: n,
        inCache: r
      };
    });
    g ? (D = cc.assetManager.init, cc.assetManager.init = function (e) {
      D.call(cc.assetManager, e), r = e.subContextRoot || "";
    }) : (cc.assetManager.transformPipeline.append(function (e) {
      for (var t = e.output = e.input, n = 0, r = t.length; n < r; n++) {
        var o = t[n],
            i = o.options;
        o.config ? i.__cacheBundleRoot__ = o.config.name : "bundle" !== o.ext && (i.cacheEnabled = void 0 !== i.cacheEnabled && i.cacheEnabled);
      }
    }), D = cc.assetManager.init, cc.assetManager.init = function (e) {
      D.call(cc.assetManager, e), e.subpackages && e.subpackages.forEach(function (e) {
        return b[e] = "subpackages/" + e;
      }), e.remoteBundles && e.remoteBundles.forEach(function (e) {
        return v[e] = !0;
      }), (s = e.server || "") && !s.endsWith("/") && (s += "/"), l.init();
    });
  }, {
    "../cache-manager": 2
  }],
  4: [function (e, t, n) {
    "use strict";

    var r,
        o = cc._Audio;
    o && (r = o.prototype.getDuration, Object.assign(o.prototype, {
      _createElement: function _createElement() {
        var e = this._src._nativeAsset;
        this._element || (this._element = __globalAdapter.createInnerAudioContext()), this._element.src = e.src;
      },
      destroy: function destroy() {
        this._element && (this._element.destroy(), this._element = null);
      },
      setCurrentTime: function setCurrentTime(e) {
        var t = this;
        this._src && this._src._ensureLoaded(function () {
          t._element.seek(e);
        });
      },
      stop: function stop() {
        var e = this;
        this._src && this._src._ensureLoaded(function () {
          e._element.seek(0), e._element.stop(), e._unbindEnded(), e.emit("stop"), e._state = o.State.STOPPED;
        });
      },
      _bindEnded: function _bindEnded() {
        var e = this._element;
        e && e.onEnded && !this._onended._binded && (this._onended._binded = !0, e.onEnded(this._onended));
      },
      _unbindEnded: function _unbindEnded() {
        var e = this._element;
        e && e.offEnded && this._onended._binded && (this._onended._binded = !1, e.offEnded && e.offEnded(this._onended));
      },
      getDuration: function getDuration() {
        return r.call(this) || (this._element ? this._element.duration : 0);
      },
      _touchToPlay: function _touchToPlay() {},
      _forceUpdatingState: function _forceUpdatingState() {}
    }));
  }, {}],
  5: [function (e, t, n) {
    "use strict";

    cc && cc.audioEngine && (cc.audioEngine._maxAudioInstance = 10);
  }, {}],
  6: [function (e, t, n) {
    "use strict";

    var r = cc.internal.inputManager,
        o = window.__globalAdapter;
    Object.assign(r, {
      setAccelerometerEnabled: function setAccelerometerEnabled(e) {
        var t = cc.director.getScheduler();
        t.enableForTarget(this), e ? (this._registerAccelerometerEvent(), t.scheduleUpdate(this)) : (this._unregisterAccelerometerEvent(), t.unscheduleUpdate(this));
      },
      _registerAccelerometerEvent: function _registerAccelerometerEvent() {
        this._accelCurTime = 0;
        var t = this;
        this._acceleration = new cc.Acceleration(), o.startAccelerometer(function (e) {
          t._acceleration.x = e.x, t._acceleration.y = e.y, t._acceleration.z = e.y;
        });
      },
      _unregisterAccelerometerEvent: function _unregisterAccelerometerEvent() {
        this._accelCurTime = 0, o.stopAccelerometer();
      }
    });
  }, {}],
  7: [function (e, t, n) {
    "use strict";

    function r() {
      s.call(this), this._eventListeners = {
        onKeyboardInput: null,
        onKeyboardConfirm: null,
        onKeyboardComplete: null
      };
    }

    var o, i, a, c, u, s;
    cc && cc.EditBox && (o = cc.EditBox, i = cc.js, a = o.KeyboardReturnType, u = c = null, s = o._ImplClass, i.extend(r, s), o._ImplClass = r, Object.assign(r.prototype, {
      init: function init(e) {
        e ? this._delegate = e : cc.error("EditBox init failed");
      },
      beginEditing: function beginEditing() {
        var t = this;
        this._editing || this._ensureKeyboardHide(function () {
          var e = t._delegate;
          t._showKeyboard(), t._registerKeyboardEvent(), t._editing = !0, u = t, e.editBoxEditingDidBegan();
        });
      },
      endEditing: function endEditing() {
        this._hideKeyboard();

        var e = this._eventListeners;
        e.onKeyboardComplete && e.onKeyboardComplete();
      },
      _registerKeyboardEvent: function _registerKeyboardEvent() {
        var n = this,
            r = this._delegate,
            e = this._eventListeners;
        e.onKeyboardInput = function (e) {
          r._string !== e.value && r.editBoxTextChanged(e.value);
        }, e.onKeyboardConfirm = function (e) {
          r.editBoxEditingReturn();
          var t = n._eventListeners;
          t.onKeyboardComplete && t.onKeyboardComplete();
        }, e.onKeyboardComplete = function () {
          n._editing = !1, u = null, n._unregisterKeyboardEvent(), r.editBoxEditingDidEnded();
        }, __globalAdapter.onKeyboardInput(e.onKeyboardInput), __globalAdapter.onKeyboardConfirm(e.onKeyboardConfirm), __globalAdapter.onKeyboardComplete(e.onKeyboardComplete);
      },
      _unregisterKeyboardEvent: function _unregisterKeyboardEvent() {
        var e = this._eventListeners;
        e.onKeyboardInput && (__globalAdapter.offKeyboardInput(e.onKeyboardInput), e.onKeyboardInput = null), e.onKeyboardConfirm && (__globalAdapter.offKeyboardConfirm(e.onKeyboardConfirm), e.onKeyboardConfirm = null), e.onKeyboardComplete && (__globalAdapter.offKeyboardComplete(e.onKeyboardComplete), e.onKeyboardComplete = null);
      },
      _otherEditing: function _otherEditing() {
        return !!u && u !== this && u._editing;
      },
      _ensureKeyboardHide: function _ensureKeyboardHide(e) {
        var t = this._otherEditing();

        if (!t && !c) return e();
        c && clearTimeout(c), t && u.endEditing(), c = setTimeout(function () {
          c = null, e();
        }, 600);
      },
      _showKeyboard: function _showKeyboard() {
        var e = this._delegate,
            t = e.inputMode === o.InputMode.ANY,
            n = e.maxLength < 0 ? 65535 : e.maxLength;

        __globalAdapter.showKeyboard({
          defaultValue: e._string,
          maxLength: n,
          multiple: t,
          confirmHold: !1,
          confirmType: function (e) {
            switch (e) {
              case a.DEFAULT:
              case a.DONE:
                return "done";

              case a.SEND:
                return "send";

              case a.SEARCH:
                return "search";

              case a.GO:
                return "go";

              case a.NEXT:
                return "next";
            }

            return "done";
          }(e.returnType),
          success: function success(e) {},
          fail: function fail(e) {
            cc.warn(e.errMsg);
          }
        });
      },
      _hideKeyboard: function _hideKeyboard() {
        __globalAdapter.hideKeyboard({
          success: function success(e) {},
          fail: function fail(e) {
            cc.warn(e.errMsg);
          }
        });
      }
    }));
  }, {}],
  8: [function (e, t, n) {
    "use strict";

    var r = cc.internal.inputManager,
        o = cc.renderer,
        i = cc.game,
        a = cc.dynamicAtlasManager,
        c = i.run;
    Object.assign(i, {
      _banRunningMainLoop: __globalAdapter.isSubContext,
      _firstSceneLaunched: !1,
      run: function run() {
        var e = this;
        cc.director.once(cc.Director.EVENT_AFTER_SCENE_LAUNCH, function () {
          e._firstSceneLaunched = !0;
        }), c.apply(this, arguments);
      },
      setFrameRate: function setFrameRate(e) {
        this.config.frameRate = e, __globalAdapter.setPreferredFramesPerSecond ? __globalAdapter.setPreferredFramesPerSecond(e) : (this._intervalId && window.cancelAnimFrame(this._intervalId), this._intervalId = 0, this._paused = !0, this._setAnimFrame(), this._runMainLoop());
      },
      _runMainLoop: function _runMainLoop() {
        var e, _t, n, r, o, i;

        this._banRunningMainLoop || (n = (e = this).config, r = cc.director, o = !0, i = n.frameRate, cc.debug.setDisplayStats(n.showFPS), _t = function t() {
          e._paused || (e._intervalId = window.requestAnimFrame(_t), 30 === i && !__globalAdapter.setPreferredFramesPerSecond && (o = !o) || r.mainLoop());
        }, e._intervalId = window.requestAnimFrame(_t), e._paused = !1);
      },
      _initRenderer: function _initRenderer() {
        var e, t;
        this._rendererInitialized || ((e = cc.sys).platform === e.TAOBAO ? this.frame = this.container = window.document.createElement("DIV") : this.frame = this.container = document.createElement("DIV"), e = __globalAdapter.isSubContext ? window.sharedCanvas || __globalAdapter.getSharedCanvas() : e.platform === e.TAOBAO ? window.canvas : canvas, this.canvas = e, this._determineRenderType(), this.renderType === this.RENDER_TYPE_WEBGL && (t = {
          stencil: !0,
          antialias: cc.macro.ENABLE_WEBGL_ANTIALIAS,
          alpha: cc.macro.ENABLE_TRANSPARENT_CANVAS,
          preserveDrawingBuffer: !1
        }, o.initWebGL(e, t), this._renderContext = o.device._gl, !cc.macro.CLEANUP_IMAGE_CACHE && a && (a.enabled = !0)), this._renderContext || (this.renderType = this.RENDER_TYPE_CANVAS, o.initCanvas(e), this._renderContext = o.device._ctx), this._rendererInitialized = !0);
      },
      _initEvents: function _initEvents() {
        this.config.registerSystemEvent && r.registerSystemEvent(this.canvas);
        var t = !1;
        __globalAdapter.onAudioInterruptionEnd && __globalAdapter.onAudioInterruptionEnd(function () {
          cc.audioEngine && cc.audioEngine._restore();
        }), __globalAdapter.onAudioInterruptionBegin && __globalAdapter.onAudioInterruptionBegin(function () {
          cc.audioEngine && cc.audioEngine._break();
        }), __globalAdapter.onShow && __globalAdapter.onShow(function (e) {
          t && (t = !1, i.renderType === i.RENDER_TYPE_WEBGL && i._renderContext.finish(), i.emit(i.EVENT_SHOW, e));
        }), __globalAdapter.onHide && __globalAdapter.onHide(function () {
          t || (t = !0, i.emit(i.EVENT_HIDE));
        }), this.on(i.EVENT_HIDE, function () {
          i.pause();
        }), this.on(i.EVENT_SHOW, function () {
          i.resume();
        });
      },
      end: function end() {}
    });
  }, {}],
  9: [function (e, t, n) {
    "use strict";

    var r = cc.internal.inputManager,
        o = {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
    r && Object.assign(r, {
      _updateCanvasBoundingRect: function _updateCanvasBoundingRect() {},
      registerSystemEvent: function registerSystemEvent(e) {
        if (!this._isRegisterEvent) {
          this._glView = cc.view;
          var t,
              n = this,
              r = {
            onTouchStart: this.handleTouchesBegin,
            onTouchMove: this.handleTouchesMove,
            onTouchEnd: this.handleTouchesEnd,
            onTouchCancel: this.handleTouchesCancel
          };

          for (t in r) {
            !function (e) {
              var t = r[e];

              __globalAdapter[e](function (e) {
                e.changedTouches && t.call(n, n.getTouchesByEvent(e, o));
              });
            }(t);
          }

          this._isRegisterEvent = !0;
        }
      }
    });
  }, {}],
  10: [function (e, t, n) {
    "use strict";

    Object.assign(cc.screen, {
      autoFullScreen: function autoFullScreen(e, t) {}
    });
  }, {}],
  11: [function (e, t, n) {
    "use strict";

    var r = cc.Texture2D;
    r && Object.assign(r.prototype, {
      initWithElement: function initWithElement(e) {
        e && (this._image = e, this.handleLoadedTexture());
      }
    });
  }, {}],
  12: [function (e, t, n) {
    "use strict";

    t.exports = function (e, t) {
      var n = (t = t || __globalAdapter.getSystemInfoSync()).language || "",
          r = t.system || "iOS",
          o = t.platform || "iOS",
          n = (e.isNative = !1, e.isBrowser = !1, e.isMobile = !0, e.language = n.substr(0, 2), e.languageCode = n.toLowerCase(), "android" === (o = o.toLowerCase()) ? e.os = e.OS_ANDROID : "ios" === o && (e.os = e.OS_IOS), r = r.toLowerCase(), /[\d\.]+/.exec(r = "android p" === r ? "android p 9.0" : r)),
          o = (e.osVersion = n ? n[0] : r, e.osMainVersion = parseInt(e.osVersion), e.browserType = null, e.browserVersion = null, t.windowWidth),
          n = t.windowHeight,
          r = t.pixelRatio || 1,
          t = (e.windowPixelResolution = {
        width: r * o,
        height: r * n
      }, e.localStorage = window.localStorage, !__globalAdapter.isSubContext),
          o = !1;

      try {
        o = document.createElement("canvas").toDataURL("image/webp").startsWith("data:image/webp");
      } catch (e) {}

      e.capabilities = {
        canvas: !0,
        opengl: !!t,
        webp: o
      }, e.__audioSupport = {
        ONLY_ONE: !1,
        WEB_AUDIO: !1,
        DELAY_CREATE_CTX: !1,
        format: [".mp3"]
      };
    };
  }, {}],
  13: [function (e, t, n) {
    "use strict";

    t.exports = function (e) {
      e._setupContainer = function (e, t, n) {
        var r = e._devicePixelRatio = 1;
        e.isRetinaEnabled() && (r = e._devicePixelRatio = Math.min(e._maxPixelRatio, window.devicePixelRatio || 1)), __globalAdapter.isSubContext || (n *= r, (e = cc.game.canvas).width === (t *= r) && e.height === n || (e.width = t, e.height = n));
      };
    };
  }, {}],
  14: [function (e, t, n) {
    "use strict";

    t.exports = function (e) {
      Object.assign(e, {
        _adjustViewportMeta: function _adjustViewportMeta() {},
        setRealPixelResolution: function setRealPixelResolution(e, t, n) {
          this.setDesignResolutionSize(e, t, n);
        },
        enableAutoFullScreen: function enableAutoFullScreen(e) {
          cc.warn("cc.view.enableAutoFullScreen() is not supported on minigame platform.");
        },
        isAutoFullScreenEnabled: function isAutoFullScreenEnabled() {
          return !1;
        },
        setCanvasSize: function setCanvasSize() {
          cc.warn("cc.view.setCanvasSize() is not supported on minigame platform.");
        },
        setFrameSize: function setFrameSize() {
          cc.warn("frame size is readonly on minigame platform.");
        },
        _initFrameSize: function _initFrameSize() {
          var e,
              t = this._frameSize;
          __globalAdapter.isSubContext ? (e = window.sharedCanvas || __globalAdapter.getSharedCanvas(), t.width = e.width, t.height = e.height) : (t.width = window.innerWidth, t.height = window.innerHeight);
        }
      });
    };
  }, {}],
  15: [function (e, t, n) {
    "use strict";

    var r = window.__globalAdapter;
    Object.assign(r, {
      adaptSys: e("./BaseSystemInfo"),
      adaptView: e("./View"),
      adaptContainerStrategy: e("./ContainerStrategy")
    });
  }, {
    "./BaseSystemInfo": 12,
    "./ContainerStrategy": 13,
    "./View": 14
  }],
  16: [function (e, t, n) {
    "use strict";

    e("./Audio"), e("./AudioEngine"), e("./DeviceMotionEvent"), e("./Editbox"), e("./Game"), e("./InputManager"), e("./AssetManager"), e("./Screen"), e("./Texture2D"), e("./misc");
  }, {
    "./AssetManager": 3,
    "./Audio": 4,
    "./AudioEngine": 5,
    "./DeviceMotionEvent": 6,
    "./Editbox": 7,
    "./Game": 8,
    "./InputManager": 9,
    "./Screen": 10,
    "./Texture2D": 11,
    "./misc": 17
  }],
  17: [function (e, t, n) {
    "use strict";

    cc.macro.DOWNLOAD_MAX_CONCURRENT = 10;
  }, {}],
  18: [function (e, t, n) {
    "use strict";

    t.exports = {
      cloneMethod: function cloneMethod(e, t, n, r) {
        t[n] && (e[r = r || n] = t[n].bind(t));
      }
    };
  }, {}],
  19: [function (e, t, n) {
    "use strict";

    function r(e) {
      this.options = e || {
        locator: {}
      };
    }

    function s() {
      this.cdata = !1;
    }

    function l(e, t) {
      t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber;
    }

    function f(e) {
      if (e) return "\n@" + (e.systemId || "") + "#[line:" + e.lineNumber + ",col:" + e.columnNumber + "]";
    }

    function o(e, t, n) {
      return "string" == typeof e ? e.substr(t, n) : e.length >= t + n || t ? new java.lang.String(e, t, n) + "" : e;
    }

    function d(e, t) {
      (e.currentElement || e.doc).appendChild(t);
    }

    r.prototype.parseFromString = function (e, t) {
      var n = this.options,
          r = new h(),
          o = n.domBuilder || new s(),
          i = n.errorHandler,
          a = n.locator,
          c = n.xmlns || {},
          t = /\/x?html?$/.test(t),
          u = t ? p.entityMap : {
        lt: "<",
        gt: ">",
        amp: "&",
        quot: '"',
        apos: "'"
      };
      return a && o.setDocumentLocator(a), r.errorHandler = function (r, e, o) {
        if (!r) {
          if (e instanceof s) return e;
          r = e;
        }

        var i = {},
            a = r instanceof Function;

        function t(t) {
          var n = r[t];
          !n && a && (n = 2 == r.length ? function (e) {
            r(t, e);
          } : r), i[t] = n ? function (e) {
            n("[xmldom " + t + "]\t" + e + f(o));
          } : function () {};
        }

        return o = o || {}, t("warning"), t("error"), t("fatalError"), i;
      }(i, o, a), r.domBuilder = n.domBuilder || o, t && (c[""] = "http://www.w3.org/1999/xhtml"), c.xml = c.xml || "http://www.w3.org/XML/1998/namespace", e ? r.parse(e, c, u) : r.errorHandler.error("invalid doc source"), o.doc;
    }, s.prototype = {
      startDocument: function startDocument() {
        this.doc = new i().createDocument(null, null, null), this.locator && (this.doc.documentURI = this.locator.systemId);
      },
      startElement: function startElement(e, t, n, r) {
        var o = this.doc,
            i = o.createElementNS(e, n || t),
            a = r.length;
        d(this, i), this.currentElement = i, this.locator && l(this.locator, i);

        for (var c = 0; c < a; c++) {
          var e = r.getURI(c),
              u = r.getValue(c),
              n = r.getQName(c),
              s = o.createAttributeNS(e, n);
          this.locator && l(r.getLocator(c), s), s.value = s.nodeValue = u, i.setAttributeNode(s);
        }
      },
      endElement: function endElement(e, t, n) {
        var r = this.currentElement;
        r.tagName;
        this.currentElement = r.parentNode;
      },
      startPrefixMapping: function startPrefixMapping(e, t) {},
      endPrefixMapping: function endPrefixMapping(e) {},
      processingInstruction: function processingInstruction(e, t) {
        e = this.doc.createProcessingInstruction(e, t);
        this.locator && l(this.locator, e), d(this, e);
      },
      ignorableWhitespace: function ignorableWhitespace(e, t, n) {},
      characters: function characters(e, t, n) {
        var r;
        (e = o.apply(this, arguments)) && (r = this.cdata ? this.doc.createCDATASection(e) : this.doc.createTextNode(e), this.currentElement ? this.currentElement.appendChild(r) : /^\s*$/.test(e) && this.doc.appendChild(r), this.locator && l(this.locator, r));
      },
      skippedEntity: function skippedEntity(e) {},
      endDocument: function endDocument() {
        this.doc.normalize();
      },
      setDocumentLocator: function setDocumentLocator(e) {
        (this.locator = e) && (e.lineNumber = 0);
      },
      comment: function comment(e, t, n) {
        e = o.apply(this, arguments);
        e = this.doc.createComment(e);
        this.locator && l(this.locator, e), d(this, e);
      },
      startCDATA: function startCDATA() {
        this.cdata = !0;
      },
      endCDATA: function endCDATA() {
        this.cdata = !1;
      },
      startDTD: function startDTD(e, t, n) {
        var r = this.doc.implementation;
        r && r.createDocumentType && (r = r.createDocumentType(e, t, n), this.locator && l(this.locator, r), d(this, r));
      },
      warning: function warning(e) {
        console.warn("[xmldom warning]\t" + e, f(this.locator));
      },
      error: function error(e) {
        console.error("[xmldom error]\t" + e, f(this.locator));
      },
      fatalError: function fatalError(e) {
        throw console.error("[xmldom fatalError]\t" + e, f(this.locator)), e;
      }
    }, "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function (e) {
      s.prototype[e] = function () {
        return null;
      };
    });
    var p = e("./entities"),
        h = e("./sax").XMLReader,
        i = n.DOMImplementation = e("./dom").DOMImplementation;
    n.XMLSerializer = e("./dom").XMLSerializer, n.DOMParser = r;
  }, {
    "./dom": 20,
    "./entities": 21,
    "./sax": 22
  }],
  20: [function (L, k, e) {
    "use strict";

    function d(e) {
      return (d = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
        return _typeof2(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof2(e);
      })(e);
    }

    function t(e, t) {
      for (var n in e) {
        t[n] = e[n];
      }
    }

    function n(e, t) {
      var n = e.prototype;

      if (!(n instanceof t)) {
        var r,
            o = function o() {};

        for (r in o.prototype = t.prototype, o = new o(), n) {
          o[r] = n[r];
        }

        e.prototype = n = o;
      }

      n.constructor != e && ("function" != typeof e && console.error("unknow Class:" + e), n.constructor = e);
    }

    var r,
        o = {},
        i = (o.ELEMENT_NODE = 1, o.ATTRIBUTE_NODE = 2, o.TEXT_NODE = 3, o.CDATA_SECTION_NODE = 4, o.ENTITY_REFERENCE_NODE = 5, o.ENTITY_NODE = 6, o.PROCESSING_INSTRUCTION_NODE = 7, o.COMMENT_NODE = 8, o.DOCUMENT_NODE = 9, o.DOCUMENT_TYPE_NODE = 10, o.DOCUMENT_FRAGMENT_NODE = 11, o.NOTATION_NODE = 12, {}),
        a = {};
    i.INDEX_SIZE_ERR = (a[1] = "Index size error", 1), i.DOMSTRING_SIZE_ERR = (a[2] = "DOMString size error", 2), i.HIERARCHY_REQUEST_ERR = (a[3] = "Hierarchy request error", 3), i.WRONG_DOCUMENT_ERR = (a[4] = "Wrong document", 4), i.INVALID_CHARACTER_ERR = (a[5] = "Invalid character", 5), i.NO_DATA_ALLOWED_ERR = (a[6] = "No data allowed", 6), i.NO_MODIFICATION_ALLOWED_ERR = (a[7] = "No modification allowed", 7), i.NOT_FOUND_ERR = (a[8] = "Not found", 8), i.NOT_SUPPORTED_ERR = (a[9] = "Not supported", 9), i.INUSE_ATTRIBUTE_ERR = (a[10] = "Attribute in use", 10), i.INVALID_STATE_ERR = (a[11] = "Invalid state", 11), i.SYNTAX_ERR = (a[12] = "Syntax error", 12), i.INVALID_MODIFICATION_ERR = (a[13] = "Invalid modification", 13), i.NAMESPACE_ERR = (a[14] = "Invalid namespace", 14), i.INVALID_ACCESS_ERR = (a[15] = "Invalid access", 15);

    function c(e, t) {
      var n;
      return t instanceof Error ? n = t : (n = this, Error.call(this, a[e]), this.message = a[e], Error.captureStackTrace && Error.captureStackTrace(this, c)), n.code = e, t && (this.message = this.message + ": " + t), n;
    }

    function p() {}

    function u(e, t) {
      this._node = e, this._refresh = t, s(this);
    }

    function s(e) {
      var t = e._node._inc || e._node.ownerDocument._inc;

      if (e._inc != t) {
        var n,
            r = e._refresh(e._node);

        for (n in V(e, "length", r.length), r) {
          e[n] = r[n];
        }

        e._inc = t;
      }
    }

    function h() {}

    function l(e, t) {
      for (var n = e.length; n--;) {
        if (e[n] === t) return n;
      }
    }

    function f(e, t, n, r) {
      r ? t[l(t, r)] = n : t[t.length++] = n, e && (t = (n.ownerElement = e).ownerDocument) && (r && _(t, e, r), r = e, e = n, (n = t) && n._inc++, "http://www.w3.org/2000/xmlns/" == e.namespaceURI && (r._nsMap[e.prefix ? e.localName : ""] = e.value));
    }

    function m(e, t, n) {
      var r = l(t, n);
      if (!(0 <= r)) throw c(8, new Error(e.tagName + "@" + n));

      for (var o, i = t.length - 1; r < i;) {
        t[r] = t[++r];
      }

      t.length = i, e && (o = e.ownerDocument) && (_(o, e, n), n.ownerElement = null);
    }

    function y(e) {
      if (this._features = {}, e) for (var t in e) {
        this._features = e[t];
      }
    }

    function g() {}

    function b(e) {
      return ("<" == e ? "&lt;" : ">" == e && "&gt;") || "&" == e && "&amp;" || '"' == e && "&quot;" || "&#" + e.charCodeAt() + ";";
    }

    function v(e, t) {
      if (t(e)) return 1;
      if (e = e.firstChild) do {
        if (v(e, t)) return 1;
      } while (e = e.nextSibling);
    }

    function w() {}

    function _(e, t, n) {
      e && e._inc++, "http://www.w3.org/2000/xmlns/" == n.namespaceURI && delete t._nsMap[n.prefix ? n.localName : ""];
    }

    function E(e, t, n) {
      if (e && e._inc) {
        e._inc++;
        var r = t.childNodes;
        if (n) r[r.length++] = n;else {
          for (var o = t.firstChild, i = 0; o;) {
            o = (r[i++] = o).nextSibling;
          }

          r.length = i;
        }
      }
    }

    function x(e, t) {
      var n = t.previousSibling,
          r = t.nextSibling;
      return n ? n.nextSibling = r : e.firstChild = r, r ? r.previousSibling = n : e.lastChild = n, E(e.ownerDocument, e), t;
    }

    function O(e, t, n) {
      var r = t.parentNode;

      if (r && r.removeChild(t), 11 === t.nodeType) {
        var o = t.firstChild;
        if (null == o) return t;
        var i = t.lastChild;
      } else o = i = t;

      r = n ? n.previousSibling : e.lastChild;

      for (o.previousSibling = r, i.nextSibling = n, r ? r.nextSibling = o : e.firstChild = o, null == n ? e.lastChild = i : n.previousSibling = i; o.parentNode = e, o !== i && (o = o.nextSibling);) {
        ;
      }

      return E(e.ownerDocument || e, e), 11 == t.nodeType && (t.firstChild = t.lastChild = null), t;
    }

    function S() {
      this._nsMap = {};
    }

    function T() {}

    function N() {}

    function M() {}

    function A() {}

    function C() {}

    function P() {}

    function F() {}

    function H() {}

    function D() {}

    function j() {}

    function I() {}

    function B() {}

    function W(e, t) {
      var n,
          r = [],
          o = 9 == this.nodeType && this.documentElement || this,
          i = o.prefix,
          a = o.namespaceURI;
      return R(this, r, e, t, n = a && null == i && null == (i = o.lookupPrefix(a)) ? [{
        namespace: a,
        prefix: null
      }] : n), r.join("");
    }

    function U(e, t, n) {
      var r = e.prefix || "",
          o = e.namespaceURI;

      if ((r || o) && ("xml" !== r || "http://www.w3.org/XML/1998/namespace" !== o) && "http://www.w3.org/2000/xmlns/" != o) {
        for (var i = n.length; i--;) {
          var a = n[i];
          if (a.prefix == r) return a.namespace != o;
        }

        return 1;
      }
    }

    function R(e, t, n, r, o) {
      if (r) {
        if (!(e = r(e))) return;
        if ("string" == typeof e) return void t.push(e);
      }

      switch (e.nodeType) {
        case 1:
          o = o || [];
          var i = e.attributes,
              a = i.length,
              c = e.firstChild,
              u = e.tagName;
          n = "http://www.w3.org/1999/xhtml" === e.namespaceURI || n, t.push("<", u);

          for (var s = 0; s < a; s++) {
            "xmlns" == (l = i.item(s)).prefix ? o.push({
              prefix: l.localName,
              namespace: l.value
            }) : "xmlns" == l.nodeName && o.push({
              prefix: "",
              namespace: l.value
            });
          }

          for (var l, f, d, s = 0; s < a; s++) {
            U(l = i.item(s), 0, o) && (f = l.prefix || "", d = l.namespaceURI, t.push(f ? " xmlns:" + f : " xmlns", '="', d, '"'), o.push({
              prefix: f,
              namespace: d
            })), R(l, t, n, r, o);
          }

          if (U(e, 0, o) && (f = e.prefix || "", d = e.namespaceURI, t.push(f ? " xmlns:" + f : " xmlns", '="', d, '"'), o.push({
            prefix: f,
            namespace: d
          })), c || n && !/^(?:meta|link|img|br|hr|input)$/i.test(u)) {
            if (t.push(">"), n && /^script$/i.test(u)) for (; c;) {
              c.data ? t.push(c.data) : R(c, t, n, r, o), c = c.nextSibling;
            } else for (; c;) {
              R(c, t, n, r, o), c = c.nextSibling;
            }
            t.push("</", u, ">");
          } else t.push("/>");

          return;

        case 9:
        case 11:
          for (c = e.firstChild; c;) {
            R(c, t, n, r, o), c = c.nextSibling;
          }

          return;

        case 2:
          return t.push(" ", e.name, '="', e.value.replace(/[<&"]/g, b), '"');

        case 3:
          return t.push(e.data.replace(/[<&]/g, b));

        case 4:
          return t.push("<![CDATA[", e.data, "]]>");

        case 8:
          return t.push("\x3c!--", e.data, "--\x3e");

        case 10:
          var u = e.publicId,
              p = e.systemId;
          return t.push("<!DOCTYPE ", e.name), void (u ? (t.push(' PUBLIC "', u), p && "." != p && t.push('" "', p), t.push('">')) : p && "." != p ? t.push(' SYSTEM "', p, '">') : ((u = e.internalSubset) && t.push(" [", u, "]"), t.push(">")));

        case 7:
          return t.push("<?", e.target, " ", e.data, "?>");

        case 5:
          return t.push("&", e.nodeName, ";");

        default:
          t.push("??", e.nodeName);
      }
    }

    function V(e, t, n) {
      e[t] = n;
    }

    c.prototype = Error.prototype, t(i, c), p.prototype = {
      length: 0,
      item: function item(e) {
        return this[e] || null;
      },
      toString: function toString(e, t) {
        for (var n = [], r = 0; r < this.length; r++) {
          R(this[r], n, e, t);
        }

        return n.join("");
      }
    }, u.prototype.item = function (e) {
      return s(this), this[e];
    }, n(u, p), h.prototype = {
      length: 0,
      item: p.prototype.item,
      getNamedItem: function getNamedItem(e) {
        for (var t = this.length; t--;) {
          var n = this[t];
          if (n.nodeName == e) return n;
        }
      },
      setNamedItem: function setNamedItem(e) {
        var t = e.ownerElement;
        if (t && t != this._ownerElement) throw new c(10);
        t = this.getNamedItem(e.nodeName);
        return f(this._ownerElement, this, e, t), t;
      },
      setNamedItemNS: function setNamedItemNS(e) {
        var t = e.ownerElement;
        if (t && t != this._ownerElement) throw new c(10);
        return t = this.getNamedItemNS(e.namespaceURI, e.localName), f(this._ownerElement, this, e, t), t;
      },
      removeNamedItem: function removeNamedItem(e) {
        e = this.getNamedItem(e);
        return m(this._ownerElement, this, e), e;
      },
      removeNamedItemNS: function removeNamedItemNS(e, t) {
        e = this.getNamedItemNS(e, t);
        return m(this._ownerElement, this, e), e;
      },
      getNamedItemNS: function getNamedItemNS(e, t) {
        for (var n = this.length; n--;) {
          var r = this[n];
          if (r.localName == t && r.namespaceURI == e) return r;
        }

        return null;
      }
    }, y.prototype = {
      hasFeature: function hasFeature(e, t) {
        e = this._features[e.toLowerCase()];
        return !(!e || t && !(t in e));
      },
      createDocument: function createDocument(e, t, n) {
        var r = new w();
        return r.implementation = this, r.childNodes = new p(), (r.doctype = n) && r.appendChild(n), t && (n = r.createElementNS(e, t), r.appendChild(n)), r;
      },
      createDocumentType: function createDocumentType(e, t, n) {
        var r = new P();
        return r.name = e, r.nodeName = e, r.publicId = t, r.systemId = n, r;
      }
    }, g.prototype = {
      firstChild: null,
      lastChild: null,
      previousSibling: null,
      nextSibling: null,
      attributes: null,
      parentNode: null,
      childNodes: null,
      ownerDocument: null,
      nodeValue: null,
      namespaceURI: null,
      prefix: null,
      localName: null,
      insertBefore: function insertBefore(e, t) {
        return O(this, e, t);
      },
      replaceChild: function replaceChild(e, t) {
        this.insertBefore(e, t), t && this.removeChild(t);
      },
      removeChild: function removeChild(e) {
        return x(this, e);
      },
      appendChild: function appendChild(e) {
        return this.insertBefore(e, null);
      },
      hasChildNodes: function hasChildNodes() {
        return null != this.firstChild;
      },
      cloneNode: function cloneNode(e) {
        return function e(t, n, r) {
          var o = new n.constructor();

          for (var i in n) {
            var a = n[i];
            "object" != d(a) && a != o[i] && (o[i] = a);
          }

          n.childNodes && (o.childNodes = new p());
          o.ownerDocument = t;

          switch (o.nodeType) {
            case 1:
              var c = n.attributes,
                  u = o.attributes = new h(),
                  s = c.length;
              u._ownerElement = o;

              for (var l = 0; l < s; l++) {
                o.setAttributeNode(e(t, c.item(l), !0));
              }

              break;

            case 2:
              r = !0;
          }

          if (r) for (var f = n.firstChild; f;) {
            o.appendChild(e(t, f, r)), f = f.nextSibling;
          }
          return o;
        }(this.ownerDocument || this, this, e);
      },
      normalize: function normalize() {
        for (var e = this.firstChild; e;) {
          var t = e.nextSibling;
          t && 3 == t.nodeType && 3 == e.nodeType ? (this.removeChild(t), e.appendData(t.data)) : (e.normalize(), e = t);
        }
      },
      isSupported: function isSupported(e, t) {
        return this.ownerDocument.implementation.hasFeature(e, t);
      },
      hasAttributes: function hasAttributes() {
        return 0 < this.attributes.length;
      },
      lookupPrefix: function lookupPrefix(e) {
        for (var t = this; t;) {
          var n = t._nsMap;
          if (n) for (var r in n) {
            if (n[r] == e) return r;
          }
          t = 2 == t.nodeType ? t.ownerDocument : t.parentNode;
        }

        return null;
      },
      lookupNamespaceURI: function lookupNamespaceURI(e) {
        for (var t = this; t;) {
          var n = t._nsMap;
          if (n && e in n) return n[e];
          t = 2 == t.nodeType ? t.ownerDocument : t.parentNode;
        }

        return null;
      },
      isDefaultNamespace: function isDefaultNamespace(e) {
        return null == this.lookupPrefix(e);
      }
    }, t(o, g), t(o, g.prototype), w.prototype = {
      nodeName: "#document",
      nodeType: 9,
      doctype: null,
      documentElement: null,
      _inc: 1,
      insertBefore: function insertBefore(e, t) {
        if (11 != e.nodeType) return null == this.documentElement && 1 == e.nodeType && (this.documentElement = e), O(this, e, t), e.ownerDocument = this, e;

        for (var n = e.firstChild; n;) {
          var r = n.nextSibling;
          this.insertBefore(n, t), n = r;
        }

        return e;
      },
      removeChild: function removeChild(e) {
        return this.documentElement == e && (this.documentElement = null), x(this, e);
      },
      importNode: function importNode(e, t) {
        return function e(t, n, r) {
          var o;

          switch (n.nodeType) {
            case 1:
              (o = n.cloneNode(!1)).ownerDocument = t;

            case 11:
              break;

            case 2:
              r = !0;
          }

          o = o || n.cloneNode(!1);
          o.ownerDocument = t;
          o.parentNode = null;
          if (r) for (var i = n.firstChild; i;) {
            o.appendChild(e(t, i, r)), i = i.nextSibling;
          }
          return o;
        }(this, e, t);
      },
      getElementById: function getElementById(t) {
        var n = null;
        return v(this.documentElement, function (e) {
          if (1 == e.nodeType && e.getAttribute("id") == t) return n = e, !0;
        }), n;
      },
      createElement: function createElement(e) {
        var t = new S();
        return t.ownerDocument = this, t.nodeName = e, t.tagName = e, t.childNodes = new p(), (t.attributes = new h())._ownerElement = t;
      },
      createDocumentFragment: function createDocumentFragment() {
        var e = new j();
        return e.ownerDocument = this, e.childNodes = new p(), e;
      },
      createTextNode: function createTextNode(e) {
        var t = new M();
        return t.ownerDocument = this, t.appendData(e), t;
      },
      createComment: function createComment(e) {
        var t = new A();
        return t.ownerDocument = this, t.appendData(e), t;
      },
      createCDATASection: function createCDATASection(e) {
        var t = new C();
        return t.ownerDocument = this, t.appendData(e), t;
      },
      createProcessingInstruction: function createProcessingInstruction(e, t) {
        var n = new I();
        return n.ownerDocument = this, n.tagName = n.target = e, n.nodeValue = n.data = t, n;
      },
      createAttribute: function createAttribute(e) {
        var t = new T();
        return t.ownerDocument = this, t.name = e, t.nodeName = e, t.localName = e, t.specified = !0, t;
      },
      createEntityReference: function createEntityReference(e) {
        var t = new D();
        return t.ownerDocument = this, t.nodeName = e, t;
      },
      createElementNS: function createElementNS(e, t) {
        var n = new S(),
            r = t.split(":"),
            o = n.attributes = new h();
        return n.childNodes = new p(), n.ownerDocument = this, n.nodeName = t, n.tagName = t, n.namespaceURI = e, 2 == r.length ? (n.prefix = r[0], n.localName = r[1]) : n.localName = t, o._ownerElement = n;
      },
      createAttributeNS: function createAttributeNS(e, t) {
        var n = new T(),
            r = t.split(":");
        return n.ownerDocument = this, n.nodeName = t, n.name = t, n.namespaceURI = e, n.specified = !0, 2 == r.length ? (n.prefix = r[0], n.localName = r[1]) : n.localName = t, n;
      }
    }, n(w, g), w.prototype.getElementsByTagName = (S.prototype = {
      nodeType: 1,
      hasAttribute: function hasAttribute(e) {
        return null != this.getAttributeNode(e);
      },
      getAttribute: function getAttribute(e) {
        e = this.getAttributeNode(e);
        return e && e.value || "";
      },
      getAttributeNode: function getAttributeNode(e) {
        return this.attributes.getNamedItem(e);
      },
      setAttribute: function setAttribute(e, t) {
        e = this.ownerDocument.createAttribute(e);
        e.value = e.nodeValue = "" + t, this.setAttributeNode(e);
      },
      removeAttribute: function removeAttribute(e) {
        e = this.getAttributeNode(e);
        e && this.removeAttributeNode(e);
      },
      appendChild: function appendChild(e) {
        return 11 === e.nodeType ? this.insertBefore(e, null) : (t = this, (n = (e = e).parentNode) && (r = t.lastChild, n.removeChild(e), r = t.lastChild), r = t.lastChild, e.parentNode = t, e.previousSibling = r, e.nextSibling = null, r ? r.nextSibling = e : t.firstChild = e, t.lastChild = e, E(t.ownerDocument, t, e), e);
        var t, n, r;
      },
      setAttributeNode: function setAttributeNode(e) {
        return this.attributes.setNamedItem(e);
      },
      setAttributeNodeNS: function setAttributeNodeNS(e) {
        return this.attributes.setNamedItemNS(e);
      },
      removeAttributeNode: function removeAttributeNode(e) {
        return this.attributes.removeNamedItem(e.nodeName);
      },
      removeAttributeNS: function removeAttributeNS(e, t) {
        e = this.getAttributeNodeNS(e, t);
        e && this.removeAttributeNode(e);
      },
      hasAttributeNS: function hasAttributeNS(e, t) {
        return null != this.getAttributeNodeNS(e, t);
      },
      getAttributeNS: function getAttributeNS(e, t) {
        e = this.getAttributeNodeNS(e, t);
        return e && e.value || "";
      },
      setAttributeNS: function setAttributeNS(e, t, n) {
        e = this.ownerDocument.createAttributeNS(e, t);
        e.value = e.nodeValue = "" + n, this.setAttributeNode(e);
      },
      getAttributeNodeNS: function getAttributeNodeNS(e, t) {
        return this.attributes.getNamedItemNS(e, t);
      },
      getElementsByTagName: function getElementsByTagName(r) {
        return new u(this, function (t) {
          var n = [];
          return v(t, function (e) {
            e === t || 1 != e.nodeType || "*" !== r && e.tagName != r || n.push(e);
          }), n;
        });
      },
      getElementsByTagNameNS: function getElementsByTagNameNS(r, o) {
        return new u(this, function (t) {
          var n = [];
          return v(t, function (e) {
            e === t || 1 !== e.nodeType || "*" !== r && e.namespaceURI !== r || "*" !== o && e.localName != o || n.push(e);
          }), n;
        });
      }
    }).getElementsByTagName, w.prototype.getElementsByTagNameNS = S.prototype.getElementsByTagNameNS, n(S, g), T.prototype.nodeType = 2, n(T, g), N.prototype = {
      data: "",
      substringData: function substringData(e, t) {
        return this.data.substring(e, e + t);
      },
      appendData: function appendData(e) {
        e = this.data + e, this.nodeValue = this.data = e, this.length = e.length;
      },
      insertData: function insertData(e, t) {
        this.replaceData(e, 0, t);
      },
      appendChild: function appendChild(e) {
        throw new Error(a[3]);
      },
      deleteData: function deleteData(e, t) {
        this.replaceData(e, t, "");
      },
      replaceData: function replaceData(e, t, n) {
        var r = this.data.substring(0, e),
            e = this.data.substring(e + t);
        this.nodeValue = this.data = n = r + n + e, this.length = n.length;
      }
    }, n(N, g), M.prototype = {
      nodeName: "#text",
      nodeType: 3,
      splitText: function splitText(e) {
        var t = (n = this.data).substring(e),
            n = n.substring(0, e),
            e = (this.data = this.nodeValue = n, this.length = n.length, this.ownerDocument.createTextNode(t));
        return this.parentNode && this.parentNode.insertBefore(e, this.nextSibling), e;
      }
    }, n(M, N), A.prototype = {
      nodeName: "#comment",
      nodeType: 8
    }, n(A, N), C.prototype = {
      nodeName: "#cdata-section",
      nodeType: 4
    }, n(C, N), P.prototype.nodeType = 10, n(P, g), F.prototype.nodeType = 12, n(F, g), H.prototype.nodeType = 6, n(H, g), D.prototype.nodeType = 5, n(D, g), j.prototype.nodeName = "#document-fragment", j.prototype.nodeType = 11, n(j, g), I.prototype.nodeType = 7, n(I, g), B.prototype.serializeToString = function (e, t, n) {
      return W.call(e, t, n);
    }, g.prototype.toString = W;

    try {
      Object.defineProperty && (r = function e(t) {
        switch (t.nodeType) {
          case 1:
          case 11:
            var n = [];

            for (t = t.firstChild; t;) {
              7 !== t.nodeType && 8 !== t.nodeType && n.push(e(t)), t = t.nextSibling;
            }

            return n.join("");

          default:
            return t.nodeValue;
        }
      }, Object.defineProperty(u.prototype, "length", {
        get: function get() {
          return s(this), this.$$length;
        }
      }), Object.defineProperty(g.prototype, "textContent", {
        get: function get() {
          return r(this);
        },
        set: function set(e) {
          switch (this.nodeType) {
            case 1:
            case 11:
              for (; this.firstChild;) {
                this.removeChild(this.firstChild);
              }

              (e || String(e)) && this.appendChild(this.ownerDocument.createTextNode(e));
              break;

            default:
              this.data = e, this.value = e, this.nodeValue = e;
          }
        }
      }), V = function V(e, t, n) {
        e["$$" + t] = n;
      });
    } catch (e) {}

    e.DOMImplementation = y, e.XMLSerializer = B;
  }, {}],
  21: [function (e, t, n) {
    "use strict";

    n.entityMap = {
      lt: "<",
      gt: ">",
      amp: "&",
      quot: '"',
      apos: "'",
      Agrave: "À",
      Aacute: "Á",
      Acirc: "Â",
      Atilde: "Ã",
      Auml: "Ä",
      Aring: "Å",
      AElig: "Æ",
      Ccedil: "Ç",
      Egrave: "È",
      Eacute: "É",
      Ecirc: "Ê",
      Euml: "Ë",
      Igrave: "Ì",
      Iacute: "Í",
      Icirc: "Î",
      Iuml: "Ï",
      ETH: "Ð",
      Ntilde: "Ñ",
      Ograve: "Ò",
      Oacute: "Ó",
      Ocirc: "Ô",
      Otilde: "Õ",
      Ouml: "Ö",
      Oslash: "Ø",
      Ugrave: "Ù",
      Uacute: "Ú",
      Ucirc: "Û",
      Uuml: "Ü",
      Yacute: "Ý",
      THORN: "Þ",
      szlig: "ß",
      agrave: "à",
      aacute: "á",
      acirc: "â",
      atilde: "ã",
      auml: "ä",
      aring: "å",
      aelig: "æ",
      ccedil: "ç",
      egrave: "è",
      eacute: "é",
      ecirc: "ê",
      euml: "ë",
      igrave: "ì",
      iacute: "í",
      icirc: "î",
      iuml: "ï",
      eth: "ð",
      ntilde: "ñ",
      ograve: "ò",
      oacute: "ó",
      ocirc: "ô",
      otilde: "õ",
      ouml: "ö",
      oslash: "ø",
      ugrave: "ù",
      uacute: "ú",
      ucirc: "û",
      uuml: "ü",
      yacute: "ý",
      thorn: "þ",
      yuml: "ÿ",
      nbsp: " ",
      iexcl: "¡",
      cent: "¢",
      pound: "£",
      curren: "¤",
      yen: "¥",
      brvbar: "¦",
      sect: "§",
      uml: "¨",
      copy: "©",
      ordf: "ª",
      laquo: "«",
      not: "¬",
      shy: "­­",
      reg: "®",
      macr: "¯",
      deg: "°",
      plusmn: "±",
      sup2: "²",
      sup3: "³",
      acute: "´",
      micro: "µ",
      para: "¶",
      middot: "·",
      cedil: "¸",
      sup1: "¹",
      ordm: "º",
      raquo: "»",
      frac14: "¼",
      frac12: "½",
      frac34: "¾",
      iquest: "¿",
      times: "×",
      divide: "÷",
      forall: "∀",
      part: "∂",
      exist: "∃",
      empty: "∅",
      nabla: "∇",
      isin: "∈",
      notin: "∉",
      ni: "∋",
      prod: "∏",
      sum: "∑",
      minus: "−",
      lowast: "∗",
      radic: "√",
      prop: "∝",
      infin: "∞",
      ang: "∠",
      and: "∧",
      or: "∨",
      cap: "∩",
      cup: "∪",
      int: "∫",
      there4: "∴",
      sim: "∼",
      cong: "≅",
      asymp: "≈",
      ne: "≠",
      equiv: "≡",
      le: "≤",
      ge: "≥",
      sub: "⊂",
      sup: "⊃",
      nsub: "⊄",
      sube: "⊆",
      supe: "⊇",
      oplus: "⊕",
      otimes: "⊗",
      perp: "⊥",
      sdot: "⋅",
      Alpha: "Α",
      Beta: "Β",
      Gamma: "Γ",
      Delta: "Δ",
      Epsilon: "Ε",
      Zeta: "Ζ",
      Eta: "Η",
      Theta: "Θ",
      Iota: "Ι",
      Kappa: "Κ",
      Lambda: "Λ",
      Mu: "Μ",
      Nu: "Ν",
      Xi: "Ξ",
      Omicron: "Ο",
      Pi: "Π",
      Rho: "Ρ",
      Sigma: "Σ",
      Tau: "Τ",
      Upsilon: "Υ",
      Phi: "Φ",
      Chi: "Χ",
      Psi: "Ψ",
      Omega: "Ω",
      alpha: "α",
      beta: "β",
      gamma: "γ",
      delta: "δ",
      epsilon: "ε",
      zeta: "ζ",
      eta: "η",
      theta: "θ",
      iota: "ι",
      kappa: "κ",
      lambda: "λ",
      mu: "μ",
      nu: "ν",
      xi: "ξ",
      omicron: "ο",
      pi: "π",
      rho: "ρ",
      sigmaf: "ς",
      sigma: "σ",
      tau: "τ",
      upsilon: "υ",
      phi: "φ",
      chi: "χ",
      psi: "ψ",
      omega: "ω",
      thetasym: "ϑ",
      upsih: "ϒ",
      piv: "ϖ",
      OElig: "Œ",
      oelig: "œ",
      Scaron: "Š",
      scaron: "š",
      Yuml: "Ÿ",
      fnof: "ƒ",
      circ: "ˆ",
      tilde: "˜",
      ensp: " ",
      emsp: " ",
      thinsp: " ",
      zwnj: "‌",
      zwj: "‍",
      lrm: "‎",
      rlm: "‏",
      ndash: "–",
      mdash: "—",
      lsquo: "‘",
      rsquo: "’",
      sbquo: "‚",
      ldquo: "“",
      rdquo: "”",
      bdquo: "„",
      dagger: "†",
      Dagger: "‡",
      bull: "•",
      hellip: "…",
      permil: "‰",
      prime: "′",
      Prime: "″",
      lsaquo: "‹",
      rsaquo: "›",
      oline: "‾",
      euro: "€",
      trade: "™",
      larr: "←",
      uarr: "↑",
      rarr: "→",
      darr: "↓",
      harr: "↔",
      crarr: "↵",
      lceil: "⌈",
      rceil: "⌉",
      lfloor: "⌊",
      rfloor: "⌋",
      loz: "◊",
      spades: "♠",
      clubs: "♣",
      hearts: "♥",
      diams: "♦"
    };
  }, {}],
  22: [function (e, t, n) {
    "use strict";

    var r = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
        o = new RegExp("[\\-\\.0-9" + r.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"),
        i = new RegExp("^" + r.source + o.source + "*(?::" + r.source + o.source + "*)?$"),
        C = 0,
        P = 1,
        D = 2,
        j = 3,
        I = 4,
        R = 5,
        L = 6,
        k = 7;

    function a() {}

    function F(e, t) {
      return t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber, t;
    }

    function H(e, t, n) {
      for (var r = e.tagName, o = null, i = e.length; i--;) {
        var a = e[i],
            c = a.qName,
            u = a.value,
            c = 0 < (l = c.indexOf(":")) ? (s = a.prefix = c.slice(0, l), f = c.slice(l + 1), "xmlns" === s && f) : (s = null, "xmlns" === (f = c) && "");
        a.localName = f, !1 !== c && (null == o && (o = {}, p(n, n = {})), n[c] = o[c] = u, a.uri = "http://www.w3.org/2000/xmlns/", t.startPrefixMapping(c, u));
      }

      for (var s, i = e.length; i--;) {
        (s = (a = e[i]).prefix) && ("xml" === s && (a.uri = "http://www.w3.org/XML/1998/namespace"), "xmlns" !== s && (a.uri = n[s || ""]));
      }

      var l,
          f = 0 < (l = r.indexOf(":")) ? (s = e.prefix = r.slice(0, l), e.localName = r.slice(l + 1)) : (s = null, e.localName = r),
          d = e.uri = n[s || ""];
      if (t.startElement(d, f, r, e), !e.closed) return e.currentNSMap = n, e.localNSMap = o, 1;
      if (t.endElement(d, f, r), o) for (s in o) {
        t.endPrefixMapping(s);
      }
    }

    function p(e, t) {
      for (var n in e) {
        t[n] = e[n];
      }
    }

    function B(e) {}

    a.prototype = {
      parse: function parse(e, t, n) {
        var r = this.domBuilder;
        r.startDocument(), p(t, t = {}), function (n, e, r, o, i) {
          function a(e) {
            var t = e.slice(1, -1);
            return t in r ? r[t] : "#" === t.charAt(0) ? 65535 < (t = parseInt(t.substr(1).replace("x", "0x"))) ? (t -= 65536, String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t))) : String.fromCharCode(t) : (i.error("entity not found:" + e), e);
          }

          function t(e) {
            var t;
            h < e && (t = n.substring(h, e).replace(/&#?\w+;/g, a), f && c(h), o.characters(t, 0, e - h), h = e);
          }

          function c(e, t) {
            for (; s <= e && (t = l.exec(n));) {
              u = t.index, s = u + t[0].length, f.lineNumber++;
            }

            f.columnNumber = e - u + 1;
          }

          var u = 0,
              s = 0,
              l = /.*(?:\r\n?|\n)|.*$/g,
              f = o.locator,
              d = [{
            currentNSMap: e
          }],
              p = {},
              h = 0;

          for (;;) {
            try {
              var m,
                  y,
                  g = n.indexOf("<", h);
              if (g < 0) return n.substr(h).match(/^\s*$/) || (m = o.doc, y = m.createTextNode(n.substr(h)), m.appendChild(y), o.currentElement = y);

              switch (h < g && t(g), n.charAt(g + 1)) {
                case "/":
                  var b = n.indexOf(">", g + 3),
                      v = n.substring(g + 2, b),
                      w = d.pop(),
                      _ = (b < 0 ? (v = n.substring(g + 2).replace(/[\s<].*/, ""), i.error("end tag name: " + v + " is not complete:" + w.tagName), b = g + 1 + v.length) : v.match(/\s</) && (v = v.replace(/[\s<].*/, ""), i.error("end tag name: " + v + " maybe not complete"), b = g + 1 + v.length), w.localNSMap),
                      E = w.tagName == v;

                  if (E || w.tagName && w.tagName.toLowerCase() == v.toLowerCase()) {
                    if (o.endElement(w.uri, w.localName, v), _) for (var x in _) {
                      o.endPrefixMapping(x);
                    }
                    E || i.fatalError("end tag name: " + v + " is not match the current start tagName:" + w.tagName);
                  } else d.push(w);

                  b++;
                  break;

                case "?":
                  f && c(g), b = function (e, t, n) {
                    var r = e.indexOf("?>", t);
                    if (r) return (e = e.substring(t, r).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/)) ? (e[0].length, n.processingInstruction(e[1], e[2]), r + 2) : -1;
                    return -1;
                  }(n, g, o);
                  break;

                case "!":
                  f && c(g), b = function (e, t, n, r) {
                    {
                      if ("-" === e.charAt(t + 2)) return "-" === e.charAt(t + 3) ? (i = e.indexOf("--\x3e", t + 4), t < i ? (n.comment(e, t + 4, i - t - 4), i + 3) : (r.error("Unclosed comment"), -1)) : -1;
                      if ("CDATA[" == e.substr(t + 3, 6)) return i = e.indexOf("]]>", t + 9), n.startCDATA(), n.characters(e, t + 9, i - t - 9), n.endCDATA(), i + 3;

                      var o,
                          r = function (e, t) {
                        var n,
                            r = [],
                            o = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
                        o.lastIndex = t, o.exec(e);

                        for (; n = o.exec(e);) {
                          if (r.push(n), n[1]) return r;
                        }
                      }(e, t),
                          i = r.length;

                      if (1 < i && /!doctype/i.test(r[0][0])) return e = r[1][0], t = 3 < i && /^public$/i.test(r[2][0]) && r[3][0], o = 4 < i && r[4][0], r = r[i - 1], n.startDTD(e, t && t.replace(/^(['"])(.*?)\1$/, "$2"), o && o.replace(/^(['"])(.*?)\1$/, "$2")), n.endDTD(), r.index + r[0].length;
                    }
                    return -1;
                  }(n, g, o, i);
                  break;

                default:
                  f && c(g);

                  var O = new B(),
                      S = d[d.length - 1].currentNSMap,
                      b = function (e, t, n, r, o, i) {
                    var a,
                        c = ++t,
                        u = C;

                    for (;;) {
                      var s = e.charAt(c);

                      switch (s) {
                        case "=":
                          if (u === P) a = e.slice(t, c), u = j;else {
                            if (u !== D) throw new Error("attribute equal must after attrName");
                            u = j;
                          }
                          break;

                        case "'":
                        case '"':
                          if (u === j || u === P) {
                            if (u === P && (i.warning('attribute value must after "="'), a = e.slice(t, c)), t = c + 1, !(0 < (c = e.indexOf(s, t)))) throw new Error("attribute value no end '" + s + "' match");
                            l = e.slice(t, c).replace(/&#?\w+;/g, o), n.add(a, l, t - 1), u = R;
                          } else {
                            if (u != I) throw new Error('attribute value must after "="');
                            l = e.slice(t, c).replace(/&#?\w+;/g, o), n.add(a, l, t), i.warning('attribute "' + a + '" missed start quot(' + s + ")!!"), t = c + 1, u = R;
                          }

                          break;

                        case "/":
                          switch (u) {
                            case C:
                              n.setTagName(e.slice(t, c));

                            case R:
                            case L:
                            case k:
                              u = k, n.closed = !0;

                            case I:
                            case P:
                            case D:
                              break;

                            default:
                              throw new Error("attribute invalid close char('/')");
                          }

                          break;

                        case "":
                          return i.error("unexpected end of input"), u == C && n.setTagName(e.slice(t, c)), c;

                        case ">":
                          switch (u) {
                            case C:
                              n.setTagName(e.slice(t, c));

                            case R:
                            case L:
                            case k:
                              break;

                            case I:
                            case P:
                              "/" === (l = e.slice(t, c)).slice(-1) && (n.closed = !0, l = l.slice(0, -1));

                            case D:
                              u === D && (l = a), u == I ? (i.warning('attribute "' + l + '" missed quot(")!!'), n.add(a, l.replace(/&#?\w+;/g, o), t)) : ("http://www.w3.org/1999/xhtml" === r[""] && l.match(/^(?:disabled|checked|selected)$/i) || i.warning('attribute "' + l + '" missed value!! "' + l + '" instead!!'), n.add(l, l, t));
                              break;

                            case j:
                              throw new Error("attribute value missed!!");
                          }

                          return c;

                        case "":
                          s = " ";

                        default:
                          if (s <= " ") switch (u) {
                            case C:
                              n.setTagName(e.slice(t, c)), u = L;
                              break;

                            case P:
                              a = e.slice(t, c), u = D;
                              break;

                            case I:
                              var l = e.slice(t, c).replace(/&#?\w+;/g, o);
                              i.warning('attribute "' + l + '" missed quot(")!!'), n.add(a, l, t);

                            case R:
                              u = L;
                          } else switch (u) {
                            case D:
                              n.tagName;
                              "http://www.w3.org/1999/xhtml" === r[""] && a.match(/^(?:disabled|checked|selected)$/i) || i.warning('attribute "' + a + '" missed value!! "' + a + '" instead2!!'), n.add(a, a, t), t = c, u = P;
                              break;

                            case R:
                              i.warning('attribute space is required"' + a + '"!!');

                            case L:
                              u = P, t = c;
                              break;

                            case j:
                              u = I, t = c;
                              break;

                            case k:
                              throw new Error("elements closed character '/' and '>' must be connected to");
                          }
                      }

                      c++;
                    }
                  }(n, g, O, S, a, i),
                      T = O.length;

                  if (!O.closed && function (e, t, n, r) {
                    var o = r[n];
                    null == o && ((o = e.lastIndexOf("</" + n + ">")) < t && (o = e.lastIndexOf("</" + n)), r[n] = o);
                    return o < t;
                  }(n, b, O.tagName, p) && (O.closed = !0, r.nbsp || i.warning("unclosed xml attribute")), f && T) {
                    for (var N = F(f, {}), M = 0; M < T; M++) {
                      var A = O[M];
                      c(A.offset), A.locator = F(f, {});
                    }

                    o.locator = N, H(O, o, S) && d.push(O), o.locator = f;
                  } else H(O, o, S) && d.push(O);

                  "http://www.w3.org/1999/xhtml" !== O.uri || O.closed ? b++ : b = function (e, t, n, r, o) {
                    if (/^(?:script|textarea)$/i.test(n)) {
                      var i = e.indexOf("</" + n + ">", t),
                          e = e.substring(t + 1, i);
                      if (/[&<]/.test(e)) return /^script$/i.test(n) || (e = e.replace(/&#?\w+;/g, r)), o.characters(e, 0, e.length), i;
                    }

                    return t + 1;
                  }(n, b, O.tagName, a, o);
              }
            } catch (e) {
              i.error("element parse error: " + e), b = -1;
            }

            h < b ? h = b : t(Math.max(g, h) + 1);
          }
        }(e, t, n, r, this.errorHandler), r.endDocument();
      }
    }, B.prototype = {
      setTagName: function setTagName(e) {
        if (!i.test(e)) throw new Error("invalid tagName:" + e);
        this.tagName = e;
      },
      add: function add(e, t, n) {
        if (!i.test(e)) throw new Error("invalid attribute:" + e);
        this[this.length++] = {
          qName: e,
          value: t,
          offset: n
        };
      },
      length: 0,
      getLocalName: function getLocalName(e) {
        return this[e].localName;
      },
      getLocator: function getLocator(e) {
        return this[e].locator;
      },
      getQName: function getQName(e) {
        return this[e].qName;
      },
      getURI: function getURI(e) {
        return this[e].uri;
      },
      getValue: function getValue(e) {
        return this[e].value;
      }
    }, n.XMLReader = a;
  }, {}],
  23: [function (e, t, n) {
    "use strict";

    var r = GameGlobal,
        o = r.__globalAdapter = {};
    Object.assign(o, {
      init: function init() {
        e("./wrapper/builtin"), r.DOMParser = e("../../common/xmldom/dom-parser").DOMParser, e("./wrapper/unify"), e("./wrapper/fs-utils"), e("../../common/engine/globalAdapter"), e("./wrapper/systemInfo");
      },
      adaptEngine: function adaptEngine() {
        e("./wrapper/error-reporter"), e("../../common/engine"), e("./wrapper/engine"), e("./wrapper/sub-context-adapter");
      }
    });
  }, {
    "../../common/engine": 16,
    "../../common/engine/globalAdapter": 15,
    "../../common/xmldom/dom-parser": 19,
    "./wrapper/builtin": 46,
    "./wrapper/engine": 53,
    "./wrapper/error-reporter": 55,
    "./wrapper/fs-utils": 56,
    "./wrapper/sub-context-adapter": 1,
    "./wrapper/systemInfo": 57,
    "./wrapper/unify": 58
  }],
  24: [function (e, t, n) {
    "use strict";

    function o(e) {
      return (o = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
        return _typeof2(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof2(e);
      })(e);
    }

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    e = (e = e("./HTMLAudioElement")) && e.__esModule ? e : {
      default: e
    };

    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    function a() {
      return (a = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, n) {
        var r = function (e, t) {
          for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = s(e));) {
            ;
          }

          return e;
        }(e, t);

        if (r) return r = Object.getOwnPropertyDescriptor(r, t), r.get ? r.get.call(arguments.length < 3 ? e : n) : r.value;
      }).apply(this, arguments);
    }

    function c(e, t) {
      return (c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }

    function u(n) {
      var r = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      }();

      return function () {
        var e,
            t = s(n),
            t = (e = r ? (e = s(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments), this);
        if (e && ("object" === o(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        if (void 0 !== t) return t;
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      };
    }

    function s(e) {
      return (s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }

    var l = 1,
        f = {},
        e = function (e) {
      var t = o;
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), Object.defineProperty(t, "prototype", {
        writable: !1
      }), e && c(t, e);
      var n,
          r = u(o);

      function o(e) {
        var t;
        if (!(this instanceof o)) throw new TypeError("Cannot call a class as a function");
        (t = r.call(this))._$sn = l++, t.HAVE_NOTHING = 0, t.HAVE_METADATA = 1, t.HAVE_CURRENT_DATA = 2, t.HAVE_FUTURE_DATA = 3, t.HAVE_ENOUGH_DATA = 4, t.readyState = 0;
        var n = wx.createInnerAudioContext();
        return f[t._$sn] = n, t._canplayEvents = ["load", "loadend", "canplay", "canplaythrough", "loadedmetadata"], n.onCanplay(function () {
          t._loaded = !0, t.readyState = t.HAVE_CURRENT_DATA, t._canplayEvents.forEach(function (e) {
            t.dispatchEvent({
              type: e
            });
          });
        }), n.onPlay(function () {
          t._paused = f[t._$sn].paused, t.dispatchEvent({
            type: "play"
          });
        }), n.onPause(function () {
          t._paused = f[t._$sn].paused, t.dispatchEvent({
            type: "pause"
          });
        }), n.onEnded(function () {
          t._paused = f[t._$sn].paused, !1 === f[t._$sn].loop && t.dispatchEvent({
            type: "ended"
          }), t.readyState = 4;
        }), n.onError(function () {
          t._paused = f[t._$sn].paused, t.dispatchEvent({
            type: "error"
          });
        }), e ? t.src = e : t._src = "", t._loop = n.loop, t._autoplay = n.autoplay, t._paused = n.paused, t._volume = n.volume, t._muted = !1, t;
      }

      return t = o, (e = [{
        key: "addEventListener",
        value: function value(e, t) {
          var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
          a(s(o.prototype), "addEventListener", this).call(this, e, t, n), e = String(e).toLowerCase(), this._loaded && -1 !== this._canplayEvents.indexOf(e) && this.dispatchEvent({
            type: e
          });
        }
      }, {
        key: "load",
        value: function value() {}
      }, {
        key: "play",
        value: function value() {
          f[this._$sn].play();
        }
      }, {
        key: "resume",
        value: function value() {
          f[this._$sn].resume();
        }
      }, {
        key: "pause",
        value: function value() {
          f[this._$sn].pause();
        }
      }, {
        key: "stop",
        value: function value() {
          f[this._$sn].stop();
        }
      }, {
        key: "destroy",
        value: function value() {
          f[this._$sn].destroy();
        }
      }, {
        key: "canPlayType",
        value: function value() {
          var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
          return "string" == typeof e && (-1 < e.indexOf("audio/mpeg") || e.indexOf("audio/mp4")) ? "probably" : "";
        }
      }, {
        key: "currentTime",
        get: function get() {
          return f[this._$sn].currentTime;
        },
        set: function set(e) {
          f[this._$sn].seek(e);
        }
      }, {
        key: "duration",
        get: function get() {
          return f[this._$sn].duration;
        }
      }, {
        key: "src",
        get: function get() {
          return this._src;
        },
        set: function set(e) {
          this._src = e, this._loaded = !1, this.readyState = this.HAVE_NOTHING, f[this._$sn].src = e;
        }
      }, {
        key: "loop",
        get: function get() {
          return this._loop;
        },
        set: function set(e) {
          this._loop = e, f[this._$sn].loop = e;
        }
      }, {
        key: "autoplay",
        get: function get() {
          return this.autoplay;
        },
        set: function set(e) {
          this._autoplay = e, f[this._$sn].autoplay = e;
        }
      }, {
        key: "paused",
        get: function get() {
          return this._paused;
        }
      }, {
        key: "volume",
        get: function get() {
          return this._volume;
        },
        set: function set(e) {
          this._volume = e, this._muted || (f[this._$sn].volume = e);
        }
      }, {
        key: "muted",
        get: function get() {
          return this._muted;
        },
        set: function set(e) {
          this._muted = e, f[this._$sn].volume = e ? 0 : this._volume;
        }
      }, {
        key: "cloneNode",
        value: function value() {
          var e = new o();
          return e.loop = this.loop, e.autoplay = this.autoplay, e.src = this.src, e;
        }
      }]) && i(t.prototype, e), n && i(t, n), Object.defineProperty(t, "prototype", {
        writable: !1
      }), o;
    }(e.default);

    n.default = e, t.exports = n.default;
  }, {
    "./HTMLAudioElement": 32
  }],
  25: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = function () {
      var e = wx.createCanvas();
      e.type = "canvas", e.getContext;
      return e.getBoundingClientRect = function () {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      }, e.style = {
        top: "0px",
        left: "0px",
        width: r.innerWidth + "px",
        height: r.innerHeight + "px"
      }, e.addEventListener = function (e, t) {
        document.addEventListener(e, t, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {});
      }, e.removeEventListener = function (e, t) {
        document.removeEventListener(e, t);
      }, e.dispatchEvent = function () {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        console.log("canvas.dispatchEvent", e.type, e);
      }, Object.defineProperty(e, "clientWidth", {
        enumerable: !0,
        get: function get() {
          return r.innerWidth;
        }
      }), Object.defineProperty(e, "clientHeight", {
        enumerable: !0,
        get: function get() {
          return r.innerHeight;
        }
      }), e;
    };
    var r = e("./WindowProperties");
    t.exports = n.default;
  }, {
    "./WindowProperties": 43
  }],
  26: [function (e, t, n) {
    "use strict";

    function o(e) {
      return (o = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
        return _typeof2(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof2(e);
      })(e);
    }

    function a(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    function c(e, t) {
      return (c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }

    function u(n) {
      var r = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      }();

      return function () {
        var e,
            t = i(n),
            t = (e = r ? (e = i(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments), this);
        if (e && ("object" === o(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        if (void 0 !== t) return t;
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      };
    }

    function i(e) {
      return (i = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;

    e = function (e) {
      var t = i;
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), Object.defineProperty(t, "prototype", {
        writable: !1
      }), e && c(t, e);
      var n,
          r,
          o = u(i);

      function i() {
        var e;
        if (this instanceof i) return (e = o.call(this)).className = "", e.children = [], e;
        throw new TypeError("Cannot call a class as a function");
      }

      return t = i, n && a(t.prototype, n), r && a(t, r), Object.defineProperty(t, "prototype", {
        writable: !1
      }), t;
    }(((e = e("./Node")) && e.__esModule ? e : {
      default: e
    }).default);

    n.default = e, t.exports = n.default;
  }, {
    "./Node": 40
  }],
  27: [function (e, t, n) {
    "use strict";

    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    function o(e, t, n) {
      return t && r(e.prototype, t), n && r(e, n), Object.defineProperty(e, "prototype", {
        writable: !1
      }), e;
    }

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0, n.default = o(function e() {
      if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
    }), t.exports = n.default;
  }, {}],
  28: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var r = e("../util/index.js");

    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    function i(e, t, n) {
      return t && o(e.prototype, t), n && o(e, n), Object.defineProperty(e, "prototype", {
        writable: !1
      }), e;
    }

    var a = i(function e(t) {
      if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
      this.touches = [], this.targetTouches = [], this.changedTouches = [], this.preventDefault = r.noop, this.stopPropagation = r.noop, this.type = t, this.target = window.canvas, this.currentTarget = window.canvas;
    });

    function c(n) {
      return function (e) {
        var t = new a(n);
        t.touches = e.touches, t.targetTouches = Array.prototype.slice.call(e.touches), t.changedTouches = e.changedTouches, t.timeStamp = e.timeStamp, document.dispatchEvent(t);
      };
    }

    n.default = a, wx.onTouchStart(c("touchstart")), wx.onTouchMove(c("touchmove")), wx.onTouchEnd(c("touchend")), wx.onTouchCancel(c("touchcancel")), t.exports = n.default;
  }, {
    "../util/index.js": 50
  }],
  29: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), Object.defineProperty(n, "MouseEvent", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(n, "TouchEvent", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    });
    var r = i(e("./TouchEvent")),
        o = i(e("./MouseEvent"));

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./MouseEvent": 27,
    "./TouchEvent": 28
  }],
  30: [function (e, t, n) {
    "use strict";

    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;

    var i = new WeakMap(),
        r = function () {
      function e() {
        if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
        i.set(this, {});
      }

      var t, n, r;
      return t = e, (n = [{
        key: "addEventListener",
        value: function value(e, t) {
          var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
              r = i.get(this);
          r || i.set(this, r = {}), r[e] || (r[e] = []), r[e].push(t), n.capture, n.once, n.passive;
        }
      }, {
        key: "removeEventListener",
        value: function value(e, t) {
          var n = i.get(this);

          if (n) {
            var r = n[e];
            if (r && 0 < r.length) for (var o = r.length; o--;) {
              if (r[o] === t) {
                r.splice(o, 1);
                break;
              }
            }
          }
        }
      }, {
        key: "dispatchEvent",
        value: function value() {
          var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
              t = i.get(this)[e.type];
          if (t) for (var n = 0; n < t.length; n++) {
            t[n](e);
          }
        }
      }]) && o(t.prototype, n), r && o(t, r), Object.defineProperty(t, "prototype", {
        writable: !1
      }), e;
    }();

    n.default = r, t.exports = n.default;
  }, {}],
  31: [function (e, t, n) {
    "use strict";

    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;

    var r = function () {
      function e() {
        if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
      }

      var t, n, r;
      return t = e, (n = [{
        key: "construct",
        value: function value() {}
      }]) && o(t.prototype, n), r && o(t, r), Object.defineProperty(t, "prototype", {
        writable: !1
      }), e;
    }();

    n.default = r, t.exports = n.default;
  }, {}],
  32: [function (e, t, n) {
    "use strict";

    function o(e) {
      return (o = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
        return _typeof2(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof2(e);
      })(e);
    }

    function a(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    function c(e, t) {
      return (c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }

    function u(n) {
      var r = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      }();

      return function () {
        var e,
            t = i(n),
            t = (e = r ? (e = i(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments), this);
        if (e && ("object" === o(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        if (void 0 !== t) return t;
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      };
    }

    function i(e) {
      return (i = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;

    e = function (e) {
      var t = i;
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), Object.defineProperty(t, "prototype", {
        writable: !1
      }), e && c(t, e);
      var n,
          r,
          o = u(i);

      function i() {
        if (this instanceof i) return o.call(this, "audio");
        throw new TypeError("Cannot call a class as a function");
      }

      return t = i, n && a(t.prototype, n), r && a(t, r), Object.defineProperty(t, "prototype", {
        writable: !1
      }), t;
    }(((e = e("./HTMLMediaElement")) && e.__esModule ? e : {
      default: e
    }).default);

    n.default = e, t.exports = n.default;
  }, {
    "./HTMLMediaElement": 36
  }],
  33: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var r = o(e("./Canvas"));
    o(e("./HTMLElement"));

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    GameGlobal.screencanvas = GameGlobal.screencanvas || new r.default();
    e = GameGlobal.screencanvas.constructor;
    n.default = e, t.exports = n.default;
  }, {
    "./Canvas": 25,
    "./HTMLElement": 34
  }],
  34: [function (e, t, n) {
    "use strict";

    function o(e) {
      return (o = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
        return _typeof2(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof2(e);
      })(e);
    }

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var r = (r = e("./Element")) && r.__esModule ? r : {
      default: r
    },
        i = e("./util/index.js"),
        a = e("./WindowProperties");

    function c(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    function u(e, t) {
      return (u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }

    function s(n) {
      var r = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      }();

      return function () {
        var e,
            t = l(n),
            t = (e = r ? (e = l(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments), this);
        if (e && ("object" === o(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        if (void 0 !== t) return t;
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      };
    }

    function l(e) {
      return (l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }

    e = function (e) {
      var t = o;
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), Object.defineProperty(t, "prototype", {
        writable: !1
      }), e && u(t, e);
      var n,
          r = s(o);

      function o() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
            t = this,
            n = o;
        if (t instanceof n) return (t = r.call(this)).className = "", t.childern = [], t.style = {
          width: "".concat(a.innerWidth, "px"),
          height: "".concat(a.innerHeight, "px")
        }, t.insertBefore = i.noop, t.innerHTML = "", t.tagName = e.toUpperCase(), t;
        throw new TypeError("Cannot call a class as a function");
      }

      return t = o, (e = [{
        key: "setAttribute",
        value: function value(e, t) {
          this[e] = t;
        }
      }, {
        key: "getAttribute",
        value: function value(e) {
          return this[e];
        }
      }, {
        key: "clientWidth",
        get: function get() {
          var e = parseInt(this.style.fontSize, 10) * this.innerHTML.length;
          return Number.isNaN(e) ? 0 : e;
        }
      }, {
        key: "clientHeight",
        get: function get() {
          var e = parseInt(this.style.fontSize, 10);
          return Number.isNaN(e) ? 0 : e;
        }
      }, {
        key: "getBoundingClientRect",
        value: function value() {
          return {
            top: 0,
            left: 0,
            width: a.innerWidth,
            height: a.innerHeight
          };
        }
      }, {
        key: "focus",
        value: function value() {}
      }]) && c(t.prototype, e), n && c(t, n), Object.defineProperty(t, "prototype", {
        writable: !1
      }), o;
    }(r.default);

    n.default = e, t.exports = n.default;
  }, {
    "./Element": 26,
    "./WindowProperties": 43,
    "./util/index.js": 50
  }],
  35: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    (e = e("./HTMLElement")) && e.__esModule;
    e = wx.createImage().constructor;
    n.default = e, t.exports = n.default;
  }, {
    "./HTMLElement": 34
  }],
  36: [function (e, t, n) {
    "use strict";

    function o(e) {
      return (o = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
        return _typeof2(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof2(e);
      })(e);
    }

    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    function a(e, t) {
      return (a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }

    function c(n) {
      var r = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      }();

      return function () {
        var e,
            t = u(n),
            t = (e = r ? (e = u(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments), this);
        if (e && ("object" === o(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        if (void 0 !== t) return t;
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      };
    }

    function u(e) {
      return (u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;

    e = function (e) {
      var t = o;
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), Object.defineProperty(t, "prototype", {
        writable: !1
      }), e && a(t, e);
      var n,
          r = c(o);

      function o(e) {
        if (this instanceof o) return r.call(this, e);
        throw new TypeError("Cannot call a class as a function");
      }

      return t = o, (e = [{
        key: "addTextTrack",
        value: function value() {}
      }, {
        key: "captureStream",
        value: function value() {}
      }, {
        key: "fastSeek",
        value: function value() {}
      }, {
        key: "load",
        value: function value() {}
      }, {
        key: "pause",
        value: function value() {}
      }, {
        key: "play",
        value: function value() {}
      }]) && i(t.prototype, e), n && i(t, n), Object.defineProperty(t, "prototype", {
        writable: !1
      }), o;
    }(((e = e("./HTMLElement")) && e.__esModule ? e : {
      default: e
    }).default);

    n.default = e, t.exports = n.default;
  }, {
    "./HTMLElement": 34
  }],
  37: [function (e, t, n) {
    "use strict";

    function o(e) {
      return (o = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
        return _typeof2(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof2(e);
      })(e);
    }

    function a(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    function c(e, t) {
      return (c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }

    function u(n) {
      var r = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      }();

      return function () {
        var e,
            t = i(n),
            t = (e = r ? (e = i(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments), this);
        if (e && ("object" === o(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        if (void 0 !== t) return t;
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      };
    }

    function i(e) {
      return (i = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;

    e = function (e) {
      var t = i;
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), Object.defineProperty(t, "prototype", {
        writable: !1
      }), e && c(t, e);
      var n,
          r,
          o = u(i);

      function i() {
        if (this instanceof i) return o.call(this, "video");
        throw new TypeError("Cannot call a class as a function");
      }

      return t = i, n && a(t.prototype, n), r && a(t, r), Object.defineProperty(t, "prototype", {
        writable: !1
      }), t;
    }(((e = e("./HTMLMediaElement")) && e.__esModule ? e : {
      default: e
    }).default);

    n.default = e, t.exports = n.default;
  }, {
    "./HTMLMediaElement": 36
  }],
  38: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = function () {
      return wx.createImage();
    };
    (e = e("./HTMLImageElement")) && e.__esModule;
    t.exports = n.default;
  }, {
    "./HTMLImageElement": 35
  }],
  39: [function (e, t, n) {
    "use strict";

    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    function o(e, t, n) {
      return t && r(e.prototype, t), n && r(e, n), Object.defineProperty(e, "prototype", {
        writable: !1
      }), e;
    }

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0, n.default = o(function e() {
      if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
    }), t.exports = n.default;
  }, {}],
  40: [function (e, t, n) {
    "use strict";

    function o(e) {
      return (o = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
        return _typeof2(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof2(e);
      })(e);
    }

    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    function a(e, t) {
      return (a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }

    function c(n) {
      var r = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      }();

      return function () {
        var e,
            t = u(n),
            t = (e = r ? (e = u(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments), this);
        if (e && ("object" === o(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        if (void 0 !== t) return t;
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      };
    }

    function u(e) {
      return (u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;

    e = function (e) {
      var t = o;
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), Object.defineProperty(t, "prototype", {
        writable: !1
      }), e && a(t, e);
      var n,
          r = c(o);

      function o() {
        var e;
        if (this instanceof o) return (e = r.call(this)).childNodes = [], e;
        throw new TypeError("Cannot call a class as a function");
      }

      return t = o, (e = [{
        key: "appendChild",
        value: function value(e) {
          this.childNodes.push(e);
        }
      }, {
        key: "cloneNode",
        value: function value() {
          var e = Object.create(this);
          return Object.assign(e, this), e;
        }
      }, {
        key: "removeChild",
        value: function value(t) {
          var e = this.childNodes.findIndex(function (e) {
            return e === t;
          });
          return -1 < e ? this.childNodes.splice(e, 1) : null;
        }
      }]) && i(t.prototype, e), n && i(t, n), Object.defineProperty(t, "prototype", {
        writable: !1
      }), o;
    }(((e = e("./EventTarget.js")) && e.__esModule ? e : {
      default: e
    }).default);

    n.default = e, t.exports = n.default;
  }, {
    "./EventTarget.js": 30
  }],
  41: [function (e, t, n) {
    "use strict";

    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    function o(e, t, n) {
      return t && r(e.prototype, t), n && r(e, n), Object.defineProperty(e, "prototype", {
        writable: !1
      }), e;
    }

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0, n.default = o(function e() {
      if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function");
    }), t.exports = n.default;
  }, {}],
  42: [function (e, t, n) {
    "use strict";

    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;

    var a = new WeakMap(),
        o = function () {
      function i(e) {
        var t = this,
            n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [],
            r = this,
            o = i;
        if (!(r instanceof o)) throw new TypeError("Cannot call a class as a function");
        if (this.binaryType = "", this.bufferedAmount = 0, this.extensions = "", this.onclose = null, this.onerror = null, this.onmessage = null, this.onopen = null, this.protocol = "", this.readyState = 3, "string" != typeof e || !/(^ws:\/\/)|(^wss:\/\/)/.test(e)) throw new TypeError("Failed to construct 'WebSocket': The URL '".concat(e, "' is invalid"));
        this.url = e, this.readyState = i.CONNECTING;
        r = wx.connectSocket({
          url: e,
          protocols: Array.isArray(n) ? n : [n],
          tcpNoDelay: !0
        });
        return a.set(this, r), r.onClose(function (e) {
          t.readyState = i.CLOSED, "function" == typeof t.onclose && t.onclose(e);
        }), r.onMessage(function (e) {
          "function" == typeof t.onmessage && t.onmessage(e);
        }), r.onOpen(function () {
          t.readyState = i.OPEN, "function" == typeof t.onopen && t.onopen();
        }), r.onError(function (e) {
          "function" == typeof t.onerror && t.onerror(new Error(e.errMsg));
        }), this;
      }

      var e, t, n;
      return e = i, (t = [{
        key: "close",
        value: function value(e, t) {
          this.readyState = i.CLOSING, a.get(this).close({
            code: e,
            reason: t
          });
        }
      }, {
        key: "send",
        value: function value(e) {
          if (!("string" == typeof e || e instanceof ArrayBuffer || ArrayBuffer.isView(e))) throw new TypeError("Failed to send message: The data ".concat(e, " is invalid"));
          a.get(this).send({
            data: e
          });
        }
      }]) && r(e.prototype, t), n && r(e, n), Object.defineProperty(e, "prototype", {
        writable: !1
      }), i;
    }();

    (n.default = o).CONNECTING = 0, o.OPEN = 1, o.CLOSING = 2, o.CLOSED = 3, t.exports = n.default;
  }, {}],
  43: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.screen = n.performance = n.ontouchstart = n.ontouchmove = n.ontouchend = n.innerWidth = n.innerHeight = n.devicePixelRatio = void 0;
    var r = wx.getSystemInfoSync(),
        o = r.screenWidth,
        i = r.screenHeight,
        r = r.devicePixelRatio,
        r = (n.devicePixelRatio = r, o),
        a = i,
        o = {
      width: o,
      height: i,
      availWidth: n.innerWidth = r,
      availHeight: n.innerHeight = a,
      availLeft: 0,
      availTop: 0
    },
        i = (n.screen = o, {
      now: Date.now
    });
    n.performance = i, n.ontouchstart = null, n.ontouchmove = null;
    n.ontouchend = null;
  }, {}],
  44: [function (e, t, n) {
    "use strict";

    function o(e) {
      return (o = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
        return _typeof2(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof2(e);
      })(e);
    }

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    e = (e = e("./EventTarget.js")) && e.__esModule ? e : {
      default: e
    };

    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    function a(e, t) {
      return (a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }

    function u(n) {
      var r = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      }();

      return function () {
        var e,
            t = c(n),
            t = (e = r ? (e = c(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments), this);
        if (e && ("object" === o(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return s(t);
      };
    }

    function s(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }

    function c(e) {
      return (c = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }

    var l = new WeakMap(),
        f = new WeakMap(),
        d = new WeakMap(),
        p = new WeakMap(),
        h = new WeakMap();

    function m(e) {
      if ("function" == typeof this["on".concat(e)]) {
        for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) {
          n[r - 1] = arguments[r];
        }

        this["on".concat(e)].apply(this, n);
      }
    }

    function y(e) {
      this.readyState = e, m.call(this, "readystatechange");
    }

    e = function (e) {
      var t = c;
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), Object.defineProperty(t, "prototype", {
        writable: !1
      }), e && a(t, e);
      var n,
          r = u(c);

      function c() {
        var e;
        if (this instanceof c) return (e = r.call(this)).timeout = 0, e.onabort = null, e.onerror = null, e.onload = null, e.onloadstart = null, e.onprogress = null, e.ontimeout = null, e.onloadend = null, e.onreadystatechange = null, e.readyState = 0, e.response = null, e.responseText = null, e.responseType = "", e.responseXML = null, e.status = 0, e.statusText = "", e.upload = {}, e.withCredentials = !1, d.set(s(e), {
          "content-type": "application/x-www-form-urlencoded"
        }), p.set(s(e), {}), e;
        throw new TypeError("Cannot call a class as a function");
      }

      return t = c, (e = [{
        key: "abort",
        value: function value() {
          var e = h.get(this);
          e && e.abort();
        }
      }, {
        key: "getAllResponseHeaders",
        value: function value() {
          var t = p.get(this);
          return Object.keys(t).map(function (e) {
            return "".concat(e, ": ").concat(t[e]);
          }).join("\n");
        }
      }, {
        key: "getResponseHeader",
        value: function value(e) {
          return p.get(this)[e];
        }
      }, {
        key: "open",
        value: function value(e, t) {
          f.set(this, e), l.set(this, t), y.call(this, c.OPENED);
        }
      }, {
        key: "overrideMimeType",
        value: function value() {}
      }, {
        key: "send",
        value: function value() {
          var a = this,
              e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
          if (this.readyState !== c.OPENED) throw new Error("Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED.");
          e = wx.request({
            data: e,
            url: l.get(this),
            method: f.get(this),
            header: d.get(this),
            dataType: "other",
            responseType: "arraybuffer" === this.responseType ? "arraybuffer" : "text",
            timeout: this.timeout || void 0,
            success: function success(e) {
              var t = e.data,
                  n = e.statusCode,
                  e = e.header;

              switch (a.status = n, p.set(a, e), m.call(a, "loadstart"), y.call(a, c.HEADERS_RECEIVED), y.call(a, c.LOADING), a.responseType) {
                case "json":
                  a.responseText = t;

                  try {
                    a.response = JSON.parse(t);
                  } catch (e) {
                    a.response = null;
                  }

                  break;

                case "":
                case "text":
                  a.responseText = a.response = t;
                  break;

                case "arraybuffer":
                  a.response = t, a.responseText = "";

                  for (var r = new Uint8Array(t), o = r.byteLength, i = 0; i < o; i++) {
                    a.responseText += String.fromCharCode(r[i]);
                  }

                  break;

                default:
                  a.response = null;
              }

              y.call(a, c.DONE), m.call(a, "load"), m.call(a, "loadend");
            },
            fail: function fail(e) {
              e = e.errMsg;
              -1 !== e.indexOf("abort") ? m.call(a, "abort") : -1 !== e.indexOf("timeout") ? m.call(a, "timeout") : m.call(a, "error", e), m.call(a, "loadend");
            }
          });
          h.set(this, e);
        }
      }, {
        key: "setRequestHeader",
        value: function value(e, t) {
          var n = d.get(this);
          n[e] = t, d.set(this, n);
        }
      }, {
        key: "addEventListener",
        value: function value(e, t) {
          var n;
          "function" == typeof t && (n = this, this["on" + e] = function (e) {
            t.call(n, e);
          });
        }
      }]) && i(t.prototype, e), n && i(t, n), Object.defineProperty(t, "prototype", {
        writable: !1
      }), c;
    }(e.default);

    (n.default = e).UNSEND = 0, e.OPENED = 1, e.HEADERS_RECEIVED = 2, e.LOADING = 3, e.DONE = 4, t.exports = n.default;
  }, {
    "./EventTarget.js": 30
  }],
  45: [function (e, t, n) {
    "use strict";

    function a(e) {
      return (a = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
        return _typeof2(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof2(e);
      })(e);
    }

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;

    var r = function (e, t) {
      if (!t && e && e.__esModule) return e;
      if (null === e || "object" !== a(e) && "function" != typeof e) return {
        default: e
      };
      t = f(t);
      if (t && t.has(e)) return t.get(e);
      var n,
          r = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (n in e) {
        var i;
        "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && ((i = o ? Object.getOwnPropertyDescriptor(e, n) : null) && (i.get || i.set) ? Object.defineProperty(r, n, i) : r[n] = e[n]);
      }

      r.default = e, t && t.set(e, r);
      return r;
    }(e("./window")),
        o = l(e("./HTMLElement")),
        i = l(e("./HTMLVideoElement")),
        c = l(e("./Image")),
        u = l(e("./Audio")),
        s = l(e("./Canvas"));

    function l(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function f(e) {
      if ("function" != typeof WeakMap) return null;
      var t = new WeakMap(),
          n = new WeakMap();
      return (f = function f(e) {
        return e ? n : t;
      })(e);
    }

    e("./EventIniter/index.js");
    var d = {},
        p = {
      readyState: "complete",
      visibilityState: "visible",
      documentElement: r,
      hidden: !1,
      style: {},
      location: r.location,
      ontouchstart: null,
      ontouchmove: null,
      ontouchend: null,
      head: new o.default("head"),
      body: new o.default("body"),
      createElement: function createElement(e) {
        return "canvas" === e ? new s.default() : "audio" === e ? new u.default() : "img" === e ? new c.default() : "video" === e ? new i.default() : new o.default(e);
      },
      createElementNS: function createElementNS(e, t) {
        return this.createElement(t);
      },
      getElementById: function getElementById(e) {
        return e === r.canvas.id ? r.canvas : null;
      },
      getElementsByTagName: function getElementsByTagName(e) {
        return "head" === e ? [p.head] : "body" === e ? [p.body] : "canvas" === e ? [r.canvas] : [];
      },
      getElementsByName: function getElementsByName(e) {
        return "head" === e ? [p.head] : "body" === e ? [p.body] : "canvas" === e ? [r.canvas] : [];
      },
      querySelector: function querySelector(e) {
        return "head" === e ? p.head : "body" === e ? p.body : "canvas" === e || e === "#".concat(r.canvas.id) ? r.canvas : null;
      },
      querySelectorAll: function querySelectorAll(e) {
        return "head" === e ? [p.head] : "body" === e ? [p.body] : "canvas" === e ? [r.canvas] : [];
      },
      addEventListener: function addEventListener(e, t) {
        d[e] || (d[e] = []), d[e].push(t);
      },
      removeEventListener: function removeEventListener(e, t) {
        var n = d[e];
        if (n && 0 < n.length) for (var r = n.length; r--;) {
          if (n[r] === t) {
            n.splice(r, 1);
            break;
          }
        }
      },
      dispatchEvent: function dispatchEvent(e) {
        var t = d[e.type];
        if (t) for (var n = 0; n < t.length; n++) {
          t[n](e);
        }
      }
    };
    n.default = p, t.exports = n.default;
  }, {
    "./Audio": 24,
    "./Canvas": 25,
    "./EventIniter/index.js": 29,
    "./HTMLElement": 34,
    "./HTMLVideoElement": 37,
    "./Image": 38,
    "./window": 51
  }],
  46: [function (e, t, n) {
    "use strict";

    function a(e) {
      return (a = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
        return _typeof2(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof2(e);
      })(e);
    }

    var r = function (e, t) {
      if (!t && e && e.__esModule) return e;
      if (null === e || "object" !== a(e) && "function" != typeof e) return {
        default: e
      };
      t = c(t);
      if (t && t.has(e)) return t.get(e);
      var n,
          r = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (n in e) {
        var i;
        "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && ((i = o ? Object.getOwnPropertyDescriptor(e, n) : null) && (i.get || i.set) ? Object.defineProperty(r, n, i) : r[n] = e[n]);
      }

      r.default = e, t && t.set(e, r);
      return r;
    }(e("./window")),
        o = i(e("./document"));

    i(e("./HTMLElement"));

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function c(e) {
      if ("function" != typeof WeakMap) return null;
      var t = new WeakMap(),
          n = new WeakMap();
      return (c = function c(e) {
        return e ? n : t;
      })(e);
    }

    var u = GameGlobal;

    if (!GameGlobal.__isAdapterInjected) {
      GameGlobal.__isAdapterInjected = !0, r.document = o.default, r.addEventListener = function (e, t) {
        r.document.addEventListener(e, t);
      }, r.removeEventListener = function (e, t) {
        r.document.removeEventListener(e, t);
      }, r.dispatchEvent = r.document.dispatchEvent;
      e = wx.getSystemInfoSync().platform;

      if ("undefined" == typeof __devtoolssubcontext && "devtools" === e) {
        for (var s in r) {
          var l = Object.getOwnPropertyDescriptor(u, s);
          l && !0 !== l.configurable || Object.defineProperty(window, s, {
            value: r[s]
          });
        }

        for (var f in r.document) {
          var d = Object.getOwnPropertyDescriptor(u.document, f);
          d && !0 !== d.configurable || Object.defineProperty(u.document, f, {
            value: r.document[f]
          });
        }

        window.parent = window;
      } else {
        for (var p in r) {
          u[p] = r[p];
        }

        u.window = r, (window = u).top = window.parent = window;
      }
    }
  }, {
    "./HTMLElement": 34,
    "./document": 45,
    "./window": 51
  }],
  47: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0, n.default = {
      get length() {
        return wx.getStorageInfoSync().keys.length;
      },

      key: function key(e) {
        return wx.getStorageInfoSync().keys[e];
      },
      getItem: function getItem(e) {
        return wx.getStorageSync(e);
      },
      setItem: function setItem(e, t) {
        return wx.setStorageSync(e, t);
      },
      removeItem: function removeItem(e) {
        wx.removeStorageSync(e);
      },
      clear: function clear() {
        wx.clearStorageSync();
      }
    }, t.exports = n.default;
  }, {}],
  48: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    n.default = {
      href: "game.js",
      reload: function reload() {}
    }, t.exports = n.default;
  }, {}],
  49: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var e = e("./util/index.js"),
        r = wx.getSystemInfoSync(),
        o = (console.log(r), r.system),
        i = r.platform,
        a = r.language,
        r = r.version,
        o = !!o && -1 !== o.toLowerCase().indexOf("android") ? "Android; CPU ".concat(o) : "iPhone; CPU iPhone OS ".concat(o, " like Mac OS X"),
        r = "Mozilla/5.0 (".concat(o, ") AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/").concat(r, " MiniGame NetType/WIFI Language/").concat(a),
        c = {
      platform: i,
      language: a,
      appVersion: "5.0 (".concat(o, ") AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1"),
      userAgent: r,
      onLine: !0,
      geolocation: {
        getCurrentPosition: e.noop,
        watchPosition: e.noop,
        clearWatch: e.noop
      }
    };
    wx.onNetworkStatusChange && wx.onNetworkStatusChange(function (e) {
      c.onLine = e.isConnected;
    }), n.default = c, t.exports = n.default;
  }, {
    "./util/index.js": 50
  }],
  50: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.noop = function () {};
  }, {}],
  51: [function (e, t, n) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    });

    var r = {
      canvas: !0,
      setTimeout: !0,
      setInterval: !0,
      clearTimeout: !0,
      clearInterval: !0,
      requestAnimationFrame: !0,
      cancelAnimationFrame: !0,
      navigator: !0,
      XMLHttpRequest: !0,
      WebSocket: !0,
      Image: !0,
      ImageBitmap: !0,
      Audio: !0,
      FileReader: !0,
      HTMLElement: !0,
      HTMLImageElement: !0,
      HTMLCanvasElement: !0,
      HTMLMediaElement: !0,
      HTMLAudioElement: !0,
      HTMLVideoElement: !0,
      WebGLRenderingContext: !0,
      TouchEvent: !0,
      MouseEvent: !0,
      DeviceMotionEvent: !0,
      localStorage: !0,
      location: !0
    },
        o = (Object.defineProperty(n, "Audio", {
      enumerable: !0,
      get: function get() {
        return l.default;
      }
    }), Object.defineProperty(n, "DeviceMotionEvent", {
      enumerable: !0,
      get: function get() {
        return v.DeviceMotionEvent;
      }
    }), Object.defineProperty(n, "FileReader", {
      enumerable: !0,
      get: function get() {
        return f.default;
      }
    }), Object.defineProperty(n, "HTMLAudioElement", {
      enumerable: !0,
      get: function get() {
        return y.default;
      }
    }), Object.defineProperty(n, "HTMLCanvasElement", {
      enumerable: !0,
      get: function get() {
        return h.default;
      }
    }), Object.defineProperty(n, "HTMLElement", {
      enumerable: !0,
      get: function get() {
        return d.default;
      }
    }), Object.defineProperty(n, "HTMLImageElement", {
      enumerable: !0,
      get: function get() {
        return p.default;
      }
    }), Object.defineProperty(n, "HTMLMediaElement", {
      enumerable: !0,
      get: function get() {
        return m.default;
      }
    }), Object.defineProperty(n, "HTMLVideoElement", {
      enumerable: !0,
      get: function get() {
        return g.default;
      }
    }), Object.defineProperty(n, "Image", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    }), Object.defineProperty(n, "ImageBitmap", {
      enumerable: !0,
      get: function get() {
        return s.default;
      }
    }), Object.defineProperty(n, "MouseEvent", {
      enumerable: !0,
      get: function get() {
        return v.MouseEvent;
      }
    }), Object.defineProperty(n, "TouchEvent", {
      enumerable: !0,
      get: function get() {
        return v.TouchEvent;
      }
    }), Object.defineProperty(n, "WebGLRenderingContext", {
      enumerable: !0,
      get: function get() {
        return b.default;
      }
    }), Object.defineProperty(n, "WebSocket", {
      enumerable: !0,
      get: function get() {
        return c.default;
      }
    }), Object.defineProperty(n, "XMLHttpRequest", {
      enumerable: !0,
      get: function get() {
        return a.default;
      }
    }), n.clearTimeout = n.clearInterval = n.canvas = n.cancelAnimationFrame = void 0, Object.defineProperty(n, "localStorage", {
      enumerable: !0,
      get: function get() {
        return w.default;
      }
    }), Object.defineProperty(n, "location", {
      enumerable: !0,
      get: function get() {
        return _.default;
      }
    }), Object.defineProperty(n, "navigator", {
      enumerable: !0,
      get: function get() {
        return i.default;
      }
    }), n.setTimeout = n.setInterval = n.requestAnimationFrame = void 0, x(e("./Canvas"))),
        i = x(e("./navigator")),
        a = x(e("./XMLHttpRequest")),
        c = x(e("./WebSocket")),
        u = x(e("./Image")),
        s = x(e("./ImageBitmap")),
        l = x(e("./Audio")),
        f = x(e("./FileReader")),
        d = x(e("./HTMLElement")),
        p = x(e("./HTMLImageElement")),
        h = x(e("./HTMLCanvasElement")),
        m = x(e("./HTMLMediaElement")),
        y = x(e("./HTMLAudioElement")),
        g = x(e("./HTMLVideoElement")),
        b = x(e("./WebGLRenderingContext")),
        v = e("./EventIniter/index.js"),
        w = x(e("./localStorage")),
        _ = x(e("./location")),
        E = e("./WindowProperties");

    function x(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    Object.keys(E).forEach(function (e) {
      "default" === e || "__esModule" === e || Object.prototype.hasOwnProperty.call(r, e) || e in n && n[e] === E[e] || Object.defineProperty(n, e, {
        enumerable: !0,
        get: function get() {
          return E[e];
        }
      });
    }), GameGlobal.screencanvas = GameGlobal.screencanvas || new o.default();
    var e = GameGlobal.screencanvas,
        o = (n.canvas = e, GameGlobal),
        e = o.setTimeout,
        O = o.setInterval,
        S = o.clearTimeout,
        T = o.clearInterval,
        N = o.requestAnimationFrame,
        o = o.cancelAnimationFrame;
    n.cancelAnimationFrame = o, n.requestAnimationFrame = N, n.clearInterval = T, n.clearTimeout = S, n.setInterval = O, n.setTimeout = e;
  }, {
    "./Audio": 24,
    "./Canvas": 25,
    "./EventIniter/index.js": 29,
    "./FileReader": 31,
    "./HTMLAudioElement": 32,
    "./HTMLCanvasElement": 33,
    "./HTMLElement": 34,
    "./HTMLImageElement": 35,
    "./HTMLMediaElement": 36,
    "./HTMLVideoElement": 37,
    "./Image": 38,
    "./ImageBitmap": 39,
    "./WebGLRenderingContext": 41,
    "./WebSocket": 42,
    "./WindowProperties": 43,
    "./XMLHttpRequest": 44,
    "./localStorage": 47,
    "./location": 48,
    "./navigator": 49
  }],
  52: [function (e, t, n) {
    "use strict";

    cc.Texture2D && (cc.Texture2D.prototype._checkPackable = function () {
      var e,
          t,
          n = cc.dynamicAtlasManager;
      n && (this._isCompressed() ? this._packable = !1 : (e = this.width, t = this.height, !this._image || e > n.maxFrameSize || t > n.maxFrameSize || this._getHash() !== n.Atlas.DEFAULT_HASH ? this._packable = !1 : this._image && this._image.getContext && (this._packable = !0)));
    });
  }, {}],
  53: [function (e, t, n) {
    "use strict";

    e("./VideoPlayer"), e("./pc-adapter"), e("./Texture2D");
  }, {
    "./Texture2D": 52,
    "./VideoPlayer": 1,
    "./pc-adapter": 54
  }],
  54: [function (e, t, n) {
    "use strict";

    var r = wx.getSystemInfoSync(),
        i = cc.internal.inputManager,
        a = cc.internal.eventManager,
        c = cc.Event.EventKeyboard,
        u = cc.Event.EventMouse,
        o = {
      backspace: 8,
      tab: 9,
      enter: 13,
      shift: 16,
      control: 17,
      alt: 18,
      pause: 19,
      capslock: 20,
      escape: 27,
      " ": 32,
      pageup: 33,
      pagedown: 34,
      end: 35,
      home: 36,
      arrowleft: 37,
      arrowup: 38,
      arrowright: 39,
      arrowdown: 40,
      insert: 45,
      a: 65,
      b: 66,
      c: 67,
      d: 68,
      e: 69,
      f: 70,
      g: 71,
      h: 72,
      i: 73,
      j: 74,
      k: 75,
      l: 76,
      m: 77,
      n: 78,
      o: 79,
      p: 80,
      q: 81,
      r: 82,
      s: 83,
      t: 84,
      u: 85,
      v: 86,
      w: 87,
      x: 88,
      y: 89,
      z: 90,
      "*": 106,
      "+": 107,
      "-": 109,
      "/": 111,
      f1: 112,
      f2: 113,
      f3: 114,
      f4: 115,
      f5: 116,
      f6: 117,
      f7: 118,
      f8: 119,
      f9: 120,
      f10: 121,
      f11: 122,
      f12: 123,
      numlock: 144,
      scrolllock: 145,
      ";": 186,
      "=": 187,
      ",": 188,
      ".": 190,
      "`": 192,
      "[": 219,
      "\\": 220,
      "]": 221,
      "'": 222
    },
        s = {
      Delete: 46,
      Digit0: 48,
      Digit1: 49,
      Digit2: 50,
      Digit3: 51,
      Digit4: 52,
      Digit5: 53,
      Digit6: 54,
      Digit7: 55,
      Digit8: 56,
      Digit9: 57,
      Numpad0: 96,
      Numpad1: 97,
      Numpad2: 98,
      Numpad3: 99,
      Numpad4: 100,
      Numpad5: 101,
      Numpad6: 102,
      Numpad7: 103,
      Numpad8: 104,
      Numpad9: 105,
      NumpadDecimal: 110
    };

    function l(e) {
      var t = e.key.toLowerCase(),
          e = e.code;
      return /^\d$/.test(t) || "delete" === t ? s[e] : o[t] || 0;
    }

    __globalAdapter.isSubContext || "windows" !== r.platform || (i.registerSystemEvent = function () {
      var o;

      function e(e, n, r) {
        wx[e](function (e) {
          var t = i.getMouseEvent(e, o, n);
          t.setButton(e.button || 0), r(e, t), a.dispatchEvent(t);
        });
      }

      this._isRegisterEvent || (this._glView = cc.view, wx.onKeyDown(function (e) {
        return a.dispatchEvent(new c(l(e), !0));
      }), wx.onKeyUp(function (e) {
        return a.dispatchEvent(new c(l(e), !1));
      }), o = {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      }, e("onMouseDown", u.DOWN, function (e, t) {
        i._mousePressed = !0, i.handleTouchesBegin([i.getTouchByXY(e.x, e.y, o)]);
      }), e("onMouseUp", u.UP, function (e, t) {
        i._mousePressed = !1, i.handleTouchesEnd([i.getTouchByXY(e.x, e.y, o)]);
      }), e("onMouseMove", u.MOVE, function (e, t) {
        i.handleTouchesMove([i.getTouchByXY(e.x, e.y, o)]), i._mousePressed || t.setButton(null);
      }), e("onWheel", u.SCROLL, function (e, t) {
        t.setScrollData(0, -e.deltaY);
      }), this._isRegisterEvent = !0);
    });
  }, {}],
  55: [function (e, t, n) {
    "use strict";

    wx.onError && wx.onError(function e(t) {
      wx.offError && wx.offError(e);
      var n,
          r,
          o,
          i = Math.random() < .01;
      !__globalAdapter.isSubContext && i && (i = wx.getSystemInfoSync()) && cc.Canvas.instance && (n = cc.Canvas.instance.node) && ((r = new cc.Node()).color = cc.Color.BLACK, o = r.addComponent(cc.Label), r.height = n.height - 60, r.width = n.width - 60, o.overflow = cc.Label.Overflow.SHRINK, o.horizontalAlign = cc.Label.HorizontalAlign.LEFT, o.verticalAlign = cc.Label.VerticalAlign.TOP, o.fontSize = 24, o.string = "出错了，请截屏发送给游戏开发者（Please send this screenshot to the game developer）\nPlatform: WeChat " + i.version + "\nEngine: Cocos Creator v" + window.CocosEngine + "\nDevice: " + i.brand + " " + i.model + " System: " + i.system + "\nError:\n" + t.message, cc.LabelOutline && (r.addComponent(cc.LabelOutline).color = cc.Color.WHITE), r.once("touchend", function () {
        r.destroy(), setTimeout(function () {
          cc.director.resume();
        }, 1e3);
      }), r.parent = n, cc.director.pause());
    });
  }, {}],
  56: [function (e, t, n) {
    "use strict";

    var o = wx.getFileSystemManager ? wx.getFileSystemManager() : null,
        r = /the maximum size of the file storage/,
        a = {
      fs: o,
      isOutOfStorage: function isOutOfStorage(e) {
        return r.test(e);
      },
      getUserDataPath: function getUserDataPath() {
        return wx.env.USER_DATA_PATH;
      },
      checkFsValid: function checkFsValid() {
        return !!o || (console.warn("can not get the file system!"), !1);
      },
      deleteFile: function deleteFile(t, n) {
        o.unlink({
          filePath: t,
          success: function success() {
            n && n(null);
          },
          fail: function fail(e) {
            console.warn("Delete file failed: path: ".concat(t, " message: ").concat(e.errMsg)), n && n(new Error(e.errMsg));
          }
        });
      },
      downloadFile: function downloadFile(t, e, n, r, o) {
        var i = {
          url: t,
          success: function success(e) {
            200 === e.statusCode ? o && o(null, e.tempFilePath || e.filePath) : (e.filePath && a.deleteFile(e.filePath), console.warn("Download file failed: path: ".concat(t, " message: ").concat(e.statusCode)), o && o(new Error(e.statusCode), null));
          },
          fail: function fail(e) {
            console.warn("Download file failed: path: ".concat(t, " message: ").concat(e.errMsg)), o && o(new Error(e.errMsg), null);
          }
        },
            e = (e && (i.filePath = e), n && (i.header = n), wx.downloadFile(i));
        r && e.onProgressUpdate(r);
      },
      saveFile: function saveFile(t, e, n) {
        wx.saveFile({
          tempFilePath: t,
          filePath: e,
          success: function success(e) {
            n && n(null);
          },
          fail: function fail(e) {
            console.warn("Save file failed: path: ".concat(t, " message: ").concat(e.errMsg)), n && n(new Error(e.errMsg));
          }
        });
      },
      copyFile: function copyFile(t, e, n) {
        o.copyFile({
          srcPath: t,
          destPath: e,
          success: function success() {
            n && n(null);
          },
          fail: function fail(e) {
            console.warn("Copy file failed: path: ".concat(t, " message: ").concat(e.errMsg)), n && n(new Error(e.errMsg));
          }
        });
      },
      writeFile: function writeFile(t, e, n, r) {
        o.writeFile({
          filePath: t,
          encoding: n,
          data: e,
          success: function success() {
            r && r(null);
          },
          fail: function fail(e) {
            console.warn("Write file failed: path: ".concat(t, " message: ").concat(e.errMsg)), r && r(new Error(e.errMsg));
          }
        });
      },
      writeFileSync: function writeFileSync(t, e, n) {
        try {
          return o.writeFileSync(t, e, n), null;
        } catch (e) {
          return console.warn("Write file failed: path: ".concat(t, " message: ").concat(e.message)), new Error(e.message);
        }
      },
      readFile: function readFile(t, e, n) {
        o.readFile({
          filePath: t,
          encoding: e,
          success: function success(e) {
            n && n(null, e.data);
          },
          fail: function fail(e) {
            console.warn("Read file failed: path: ".concat(t, " message: ").concat(e.errMsg)), n && n(new Error(e.errMsg), null);
          }
        });
      },
      readDir: function readDir(t, n) {
        o.readdir({
          dirPath: t,
          success: function success(e) {
            n && n(null, e.files);
          },
          fail: function fail(e) {
            console.warn("Read directory failed: path: ".concat(t, " message: ").concat(e.errMsg)), n && n(new Error(e.errMsg), null);
          }
        });
      },
      readText: function readText(e, t) {
        a.readFile(e, "utf8", t);
      },
      readArrayBuffer: function readArrayBuffer(e, t) {
        a.readFile(e, "", t);
      },
      readJson: function readJson(r, o) {
        a.readFile(r, "utf8", function (t, e) {
          var n = null;
          if (!t) try {
            n = JSON.parse(e);
          } catch (e) {
            console.warn("Read json failed: path: ".concat(r, " message: ").concat(e.message)), t = new Error(e.message);
          }
          o && o(t, n);
        });
      },
      readJsonSync: function readJsonSync(t) {
        try {
          var e = o.readFileSync(t, "utf8");
          return JSON.parse(e);
        } catch (e) {
          return console.warn("Read json failed: path: ".concat(t, " message: ").concat(e.message)), new Error(e.message);
        }
      },
      makeDirSync: function makeDirSync(t, e) {
        try {
          return o.mkdirSync(t, e), null;
        } catch (e) {
          return console.warn("Make directory failed: path: ".concat(t, " message: ").concat(e.message)), new Error(e.message);
        }
      },
      rmdirSync: function rmdirSync(t, e) {
        try {
          o.rmdirSync(t, e);
        } catch (e) {
          return console.warn("rm directory failed: path: ".concat(t, " message: ").concat(e.message)), new Error(e.message);
        }
      },
      exists: function exists(e, t) {
        o.access({
          path: e,
          success: function success() {
            t && t(!0);
          },
          fail: function fail() {
            t && t(!1);
          }
        });
      },
      loadSubpackage: function loadSubpackage(t, e, n) {
        var r = wx.loadSubpackage({
          name: t,
          success: function success() {
            n && n();
          },
          fail: function fail(e) {
            console.warn("Load Subpackage failed: path: ".concat(t, " message: ").concat(e.errMsg)), n && n(new Error("Failed to load subpackage ".concat(t, ": ").concat(e.errMsg)));
          }
        });
        return e && r.onProgressUpdate(e), r;
      },
      unzip: function unzip(t, e, n) {
        o.unzip({
          zipFilePath: t,
          targetPath: e,
          success: function success() {
            n && n(null);
          },
          fail: function fail(e) {
            console.warn("unzip failed: path: ".concat(t, " message: ").concat(e.errMsg)), n && n(new Error("unzip failed: " + e.errMsg));
          }
        });
      }
    };
    window.fsUtils = t.exports = a;
  }, {}],
  57: [function (e, t, n) {
    "use strict";

    var o = window.__globalAdapter,
        r = wx.getSystemInfoSync(),
        i = o.adaptSys;
    Object.assign(o, {
      adaptSys: function adaptSys(e) {
        var t;
        i.call(this, e), "windows" === r.platform ? (e.isMobile = !1, e.os = e.OS_WINDOWS) : o.isDevTool && (-1 < (t = r.system.toLowerCase()).indexOf("android") ? e.os = e.OS_ANDROID : -1 < t.indexOf("ios") && (e.os = e.OS_IOS)), wx.getOpenDataContext ? e.platform = e.WECHAT_GAME : e.platform = e.WECHAT_GAME_SUB, e.getSafeAreaRect = function () {
          var e = cc.view,
              t = o.getSafeArea(),
              n = e.getFrameSize(),
              r = new cc.Vec2(t.left, t.bottom),
              t = new cc.Vec2(t.right, t.top),
              n = {
            left: 0,
            top: 0,
            width: n.width,
            height: n.height
          };
          return e.convertToLocationInView(r.x, r.y, n, r), e.convertToLocationInView(t.x, t.y, n, t), e._convertPointWithScale(r), e._convertPointWithScale(t), cc.rect(r.x, r.y, t.x - r.x, t.y - r.y);
        };
      }
    });
  }, {}],
  58: [function (e, t, n) {
    "use strict";

    var r,
        f,
        d,
        p,
        h,
        o,
        a,
        e = e("../../../common/utils");
    window.__globalAdapter && (r = function r(e) {
      p = wx.getSystemInfoSync(), setTimeout(function () {
        p = wx.getSystemInfoSync(), h = !0;
      }, e || 5e3);
    }, f = function f() {
      return p.deviceOrientation ? "landscape" === p.deviceOrientation : p.screenWidth > p.screenHeight;
    }, d = window.__globalAdapter, h = !1, r(), d.isSubContext = void 0 === wx.getOpenDataContext, d.isDevTool = "devtools" === p.platform, e.cloneMethod(d, wx, "getSystemInfoSync"), e.cloneMethod(d, wx, "onTouchStart"), e.cloneMethod(d, wx, "onTouchMove"), e.cloneMethod(d, wx, "onTouchEnd"), e.cloneMethod(d, wx, "onTouchCancel"), e.cloneMethod(d, wx, "createInnerAudioContext"), e.cloneMethod(d, wx, "onAudioInterruptionEnd"), e.cloneMethod(d, wx, "onAudioInterruptionBegin"), e.cloneMethod(d, wx, "createVideo"), e.cloneMethod(d, wx, "setPreferredFramesPerSecond"), e.cloneMethod(d, wx, "showKeyboard"), e.cloneMethod(d, wx, "hideKeyboard"), e.cloneMethod(d, wx, "updateKeyboard"), e.cloneMethod(d, wx, "onKeyboardInput"), e.cloneMethod(d, wx, "onKeyboardConfirm"), e.cloneMethod(d, wx, "onKeyboardComplete"), e.cloneMethod(d, wx, "offKeyboardInput"), e.cloneMethod(d, wx, "offKeyboardConfirm"), e.cloneMethod(d, wx, "offKeyboardComplete"), e.cloneMethod(d, wx, "getOpenDataContext"), e.cloneMethod(d, wx, "onMessage"), e.cloneMethod(d, wx, "getSharedCanvas"), e.cloneMethod(d, wx, "loadFont"), e.cloneMethod(d, wx, "onShow"), e.cloneMethod(d, wx, "onHide"), e.cloneMethod(d, wx, "onError"), e.cloneMethod(d, wx, "offError"), o = !1, a = 1, wx.onDeviceOrientationChange && wx.onDeviceOrientationChange(function (e) {
      r(), "landscape" === e.value ? a = 1 : "landscapeReverse" === e.value && (a = -1);
    }), wx.onWindowResize && wx.onWindowResize(function () {
      r();
    }), Object.assign(d, {
      startAccelerometer: function startAccelerometer(i) {
        o ? wx.startAccelerometer && wx.startAccelerometer({
          fail: function fail(e) {
            console.error("start accelerometer failed", e);
          }
        }) : (o = !0, wx.onAccelerometerChange && wx.onAccelerometerChange(function (e) {
          var t,
              n = {},
              r = e.x,
              o = e.y;
          f() && (t = r, r = -o, o = t), n.x = r * a, n.y = o * a, n.z = e.z, i && i(n);
        }));
      },
      stopAccelerometer: function stopAccelerometer() {
        wx.stopAccelerometer && wx.stopAccelerometer({
          fail: function fail(e) {
            console.error("stop accelerometer failed", e);
          }
        });
      }
    }), d.getSafeArea = function () {
      var e,
          t,
          n,
          r = (p = h ? p : wx.getSystemInfoSync()).windowWidth,
          o = p.windowHeight,
          i = p.safeArea,
          a = i.top,
          c = i.left,
          u = i.bottom,
          s = i.right,
          l = i.width,
          i = i.height;
      return "ios" === p.platform && !d.isDevTool && f() && (t = a, e = c, n = i, a = o - s, c = t, u = o - e - (o = r - (t = u)), s = t, i = l - o, l = n), {
        top: a,
        left: c,
        bottom: u,
        right: s,
        width: l,
        height: i
      };
    });
  }, {
    "../../../common/utils": 18
  }]
}, {}, [23]); 
 			});
 		define("assets/internal/index.js", function(require, module, exports){ 			
"use strict";

(function r(e, n, t) {
  function i(u, f) {
    if (!n[u]) {
      if (!e[u]) {
        var _ = u.split("/");

        if (_ = _[_.length - 1], !e[_]) {
          var p = "function" == typeof __require && __require;
          if (!f && p) return p(_, !0);
          if (o) return o(_, !0);
          throw new Error("Cannot find module '" + u + "'");
        }

        u = _;
      }

      var a = n[u] = {
        exports: {}
      };
      e[u][0].call(a.exports, function (r) {
        return i(e[u][1][r] || r);
      }, a, a.exports, r, e, n, t);
    }

    return n[u].exports;
  }

  for (var o = "function" == typeof __require && __require, u = 0; u < t.length; u++) {
    i(t[u]);
  }

  return i;
})({}, {}, []); //# sourceMappingURL=index.js.map 
 			});
 		define("assets/main/index.js", function(require, module, exports){ 			
"use strict";

var _typeof2 = require("../../@babel/runtime/helpers/typeof");

window.__require = function t(e, r, n) {
  function o(c, p) {
    if (!r[c]) {
      if (!e[c]) {
        var l = c.split("/");

        if (l = l[l.length - 1], !e[l]) {
          var s = "function" == typeof __require && __require;
          if (!p && s) return s(l, !0);
          if (i) return i(l, !0);
          throw new Error("Cannot find module '" + c + "'");
        }

        c = l;
      }

      var a = r[c] = {
        exports: {}
      };
      e[c][0].call(a.exports, function (t) {
        return o(e[c][1][t] || t);
      }, a, a.exports, t, e, r, n);
    }

    return r[c].exports;
  }

  for (var i = "function" == typeof __require && __require, c = 0; c < n.length; c++) {
    o(n[c]);
  }

  return o;
}({
  InitResizeToScreen: [function (t, e, r) {
    "use strict";

    cc._RF.push(e, "eb2742/jR9CQqEf1a+Iye6x", "InitResizeToScreen");

    var _n,
        o = this && this.__extends || (_n = function n(t, e) {
      return (_n = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var r in e) {
          Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        }
      })(t, e);
    }, function (t, e) {
      function r() {
        this.constructor = t;
      }

      _n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
    }),
        i = this && this.__decorate || function (t, e, r, n) {
      var o,
          i = arguments.length,
          c = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, r) : n;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, r, n);else for (var p = t.length - 1; p >= 0; p--) {
        (o = t[p]) && (c = (i < 3 ? o(c) : i > 3 ? o(e, r, c) : o(e, r)) || c);
      }
      return i > 3 && c && Object.defineProperty(e, r, c), c;
    };

    Object.defineProperty(r, "__esModule", {
      value: !0
    }), r.ResizeToScreen = void 0;

    var c = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }

      return o(e, t), e.prototype.onLoad = function () {
        this.resize(), cc.view.on("canvas-resize", this.resize, this);
      }, e.prototype.resize = function () {
        var t = cc.view.getCanvasSize(),
            e = t.width / cc.view.getScaleX(),
            r = t.height / cc.view.getScaleY();
        this.node.setContentSize(e, r);
      }, i([cc._decorator.ccclass, cc._decorator.executeInEditMode], e);
    }(cc.Component);

    r.ResizeToScreen = c, cc._RF.pop();
  }, {}],
  InitSpriteContainer: [function (t, e, r) {
    "use strict";

    cc._RF.push(e, "5be0cYX/1lN4KHxxqQLlkd4", "InitSpriteContainer");

    var _n2,
        o = this && this.__extends || (_n2 = function n(t, e) {
      return (_n2 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var r in e) {
          Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        }
      })(t, e);
    }, function (t, e) {
      function r() {
        this.constructor = t;
      }

      _n2(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
    }),
        i = this && this.__decorate || function (t, e, r, n) {
      var o,
          i = arguments.length,
          c = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, r) : n;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, r, n);else for (var p = t.length - 1; p >= 0; p--) {
        (o = t[p]) && (c = (i < 3 ? o(c) : i > 3 ? o(e, r, c) : o(e, r)) || c);
      }
      return i > 3 && c && Object.defineProperty(e, r, c), c;
    };

    Object.defineProperty(r, "__esModule", {
      value: !0
    }), r.SpriteContainer = r.VerticalAlignType = r.HorizontalAlignType = r.FillType = void 0;
    var c,
        p,
        l,
        s = cc._decorator.property;
    (function (t) {
      t[t.NONE = 0] = "NONE", t[t.SHOW_ALL = 1] = "SHOW_ALL", t[t.NO_BORDER = 2] = "NO_BORDER", t[t.FIT_HEIGHT = 3] = "FIT_HEIGHT", t[t.FIT_WIDTH = 4] = "FIT_WIDTH", t[t.FREEDOM = 5] = "FREEDOM";
    })(c = r.FillType || (r.FillType = {})), function (t) {
      t[t.LEFT = 0] = "LEFT", t[t.MIDDLE = 1] = "MIDDLE", t[t.RIGHT = 2] = "RIGHT";
    }(p = r.HorizontalAlignType || (r.HorizontalAlignType = {})), function (t) {
      t[t.TOP = 0] = "TOP", t[t.CENTER = 1] = "CENTER", t[t.BOTTOM = 2] = "BOTTOM";
    }(l = r.VerticalAlignType || (r.VerticalAlignType = {}));

    var a = function (t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.sprite = null, e._fillType = c.NONE, e._horizontalAlign = p.MIDDLE, e._verticalAlign = l.CENTER, e;
      }

      return o(e, t), Object.defineProperty(e.prototype, "fillType", {
        get: function get() {
          return this._fillType;
        },
        set: function set(t) {
          this._fillType = t, this.updateSprite();
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "horizontalAlign", {
        get: function get() {
          return this._horizontalAlign;
        },
        set: function set(t) {
          this._horizontalAlign = t, this.updateSprite();
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "verticalAlign", {
        get: function get() {
          return this._verticalAlign;
        },
        set: function set(t) {
          this._verticalAlign = t, this.updateSprite();
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.onLoad = function () {
        this.sprite || (this.sprite = this.getComponentInChildren(cc.Sprite)), this.updateSprite(), this.node.on(cc.Node.EventType.SIZE_CHANGED, this.updateSprite, this);
      }, e.prototype.updateSprite = function () {
        this.sprite && (this.scaleSprite(), this.alignSprite());
      }, e.prototype.scaleSprite = function () {
        var t = this.node,
            e = this.sprite.node,
            r = t.width / e.width,
            n = t.height / e.height;

        switch (this.fillType) {
          case c.NONE:
            return void this.sprite.node.setScale(1, 1);

          case c.SHOW_ALL:
            var o = Math.min(r, n);
            return void this.sprite.node.setScale(o, o);

          case c.NO_BORDER:
            return o = Math.max(r, n), void this.sprite.node.setScale(o, o);

          case c.FIT_HEIGHT:
            return void this.sprite.node.setScale(n, n);

          case c.FIT_WIDTH:
            return void this.sprite.node.setScale(r, r);

          case c.FREEDOM:
            return void this.sprite.node.setScale(r, n);
        }
      }, e.prototype.alignSprite = function () {
        var t = this.sprite.node,
            e = t.width * t.scaleX,
            r = t.height * t.scaleY,
            n = this.node,
            o = n.width * n.scaleX,
            i = n.height * n.scaleY,
            c = 0;
        p.LEFT === this.horizontalAlign ? c = .5 * (e - o) : p.RIGHT === this.horizontalAlign && (c = .5 * (o - e));
        var s = 0;
        l.TOP === this.verticalAlign ? s = .5 * (i - r) : l.BOTTOM === this.verticalAlign && (s = .5 * (r - i));
        var a = (t.anchorX - .5) * e,
            u = (t.anchorY - .5) * r;
        t.setPosition(a + c, u + s);
      }, i([s(cc.Sprite)], e.prototype, "sprite", void 0), i([s], e.prototype, "_fillType", void 0), i([s({
        type: cc.Enum(c)
      })], e.prototype, "fillType", null), i([s], e.prototype, "_horizontalAlign", void 0), i([s({
        type: cc.Enum(p)
      })], e.prototype, "horizontalAlign", null), i([s], e.prototype, "_verticalAlign", void 0), i([s({
        type: cc.Enum(l)
      })], e.prototype, "verticalAlign", null), i([cc._decorator.ccclass, cc._decorator.executeInEditMode], e);
    }(cc.Component);

    r.SpriteContainer = a, cc._RF.pop();
  }, {}],
  Start: [function (t, e, r) {
    "use strict";

    cc._RF.push(e, "b0154mle+pPMIzjTnkrP0wg", "Start");

    var _n3,
        o = this && this.__extends || (_n3 = function n(t, e) {
      return (_n3 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var r in e) {
          Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        }
      })(t, e);
    }, function (t, e) {
      function r() {
        this.constructor = t;
      }

      _n3(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
    }),
        i = this && this.__decorate || function (t, e, r, n) {
      var o,
          i = arguments.length,
          c = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, r) : n;
      if ("object" == (typeof Reflect === "undefined" ? "undefined" : _typeof2(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, r, n);else for (var p = t.length - 1; p >= 0; p--) {
        (o = t[p]) && (c = (i < 3 ? o(c) : i > 3 ? o(e, r, c) : o(e, r)) || c);
      }
      return i > 3 && c && Object.defineProperty(e, r, c), c;
    };

    Object.defineProperty(r, "__esModule", {
      value: !0
    });
    var c = cc._decorator,
        p = c.ccclass,
        l = (c.property, function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }

      return o(e, t), e.prototype.onLoad = function () {
        cc.assetManager.loadBundle("scripts", cc.Asset, function (t) {
          t ? console.error("Start.\u4EE3\u7801\u5206\u5305\u52A0\u8F7D\u5931\u8D25:" + t) : (console.warn("Start.\u4EE3\u7801\u5206\u5305\u52A0\u8F7D\u6210\u529F"), cc.director.loadScene("Main", function () {
            console.warn("Start.\u52A0\u8F7DMainScene\u6210\u529F!");
          }));
        });
      }, i([p], e);
    }(cc.Component));
    r.default = l, cc._RF.pop();
  }, {}]
}, {}, ["InitResizeToScreen", "InitSpriteContainer", "Start"]); //# sourceMappingURL=index.js.map 
 			});
 		define("ccRequire.js", function(require, module, exports){ 			
"use strict";

var moduleMap = {
  'src/assets/libs/ArrayExtension.js': function srcAssetsLibsArrayExtensionJs() {
    return require('src/assets/libs/ArrayExtension.js');
  },
  'src/assets/libs/CocosCreatorExtension.js': function srcAssetsLibsCocosCreatorExtensionJs() {
    return require('src/assets/libs/CocosCreatorExtension.js');
  },
  'src/assets/libs/DateExtension.js': function srcAssetsLibsDateExtensionJs() {
    return require('src/assets/libs/DateExtension.js');
  },
  'src/assets/libs/Decorators.js': function srcAssetsLibsDecoratorsJs() {
    return require('src/assets/libs/Decorators.js');
  },
  'src/assets/libs/FunctionExtension.js': function srcAssetsLibsFunctionExtensionJs() {
    return require('src/assets/libs/FunctionExtension.js');
  },
  'src/assets/libs/JSONExtension.js': function srcAssetsLibsJSONExtensionJs() {
    return require('src/assets/libs/JSONExtension.js');
  },
  'src/assets/libs/MathExtension.js': function srcAssetsLibsMathExtensionJs() {
    return require('src/assets/libs/MathExtension.js');
  },
  'src/assets/libs/NumberExtension.js': function srcAssetsLibsNumberExtensionJs() {
    return require('src/assets/libs/NumberExtension.js');
  },
  'src/assets/libs/ObjectExtension.js': function srcAssetsLibsObjectExtensionJs() {
    return require('src/assets/libs/ObjectExtension.js');
  },
  'src/assets/libs/StringExtension.js': function srcAssetsLibsStringExtensionJs() {
    return require('src/assets/libs/StringExtension.js');
  },
  'src/assets/libs/bf33.js': function srcAssetsLibsBf33Js() {
    return require('src/assets/libs/bf33.js');
  },
  'src/assets/libs/encoding-indexes.js': function srcAssetsLibsEncodingIndexesJs() {
    return require('src/assets/libs/encoding-indexes.js');
  },
  'src/assets/libs/fairygui.js': function srcAssetsLibsFairyguiJs() {
    return require('src/assets/libs/fairygui.js');
  },
  'src/assets/libs/long.js': function srcAssetsLibsLongJs() {
    return require('src/assets/libs/long.js');
  },
  'assets/internal/index.js': function assetsInternalIndexJs() {
    return require('assets/internal/index.js');
  },
  'src/scripts/resources/index.js': function srcScriptsResourcesIndexJs() {
    return require('src/scripts/resources/index.js');
  },
  'assets/main/index.js': function assetsMainIndexJs() {
    return require('assets/main/index.js');
  } // tail

};

window.__cocos_require__ = function (moduleName) {
  var func = moduleMap[moduleName];

  if (!func) {
    throw new Error("cannot find module ".concat(moduleName));
  }

  return func();
}; 
 			});
 		define("main.js", function(require, module, exports){ 			
"use strict";

window.boot = function () {
  var settings = window._CCSettings;
  window._CCSettings = undefined;

  var onStart = function onStart() {
    cc.view.enableRetina(true);
    cc.view.resizeWithBrowserSize(true);
    var launchScene = settings.launchScene; // load scene

    cc.director.loadScene(launchScene, null, function () {
      console.log('Success to load scene: ' + launchScene);
    });
  };

  var isSubContext = cc.sys.platform === cc.sys.WECHAT_GAME_SUB;
  var option = {
    id: 'GameCanvas',
    debugMode: settings.debug ? cc.debug.DebugMode.INFO : cc.debug.DebugMode.ERROR,
    showFPS: !isSubContext && settings.debug,
    frameRate: 60,
    groupList: settings.groupList,
    collisionMatrix: settings.collisionMatrix
  };
  cc.assetManager.init({
    bundleVers: settings.bundleVers,
    subpackages: settings.subpackages,
    remoteBundles: settings.remoteBundles,
    server: settings.server,
    subContextRoot: settings.subContextRoot
  });
  var RESOURCES = cc.AssetManager.BuiltinBundleName.RESOURCES;
  var INTERNAL = cc.AssetManager.BuiltinBundleName.INTERNAL;
  var MAIN = cc.AssetManager.BuiltinBundleName.MAIN;
  var START_SCENE = cc.AssetManager.BuiltinBundleName.START_SCENE;
  var bundleRoot = [INTERNAL];
  settings.hasResourcesBundle && bundleRoot.push(RESOURCES);
  settings.hasStartSceneBundle && bundleRoot.push(MAIN);
  var count = 0;

  function cb(err) {
    if (err) return console.error(err.message, err.stack);
    count++;

    if (count === bundleRoot.length + 1) {
      // if there is start-scene bundle. should load start-scene bundle in the last stage
      // Otherwise the main bundle should be the last
      cc.assetManager.loadBundle(settings.hasStartSceneBundle ? START_SCENE : MAIN, function (err) {
        if (!err) cc.game.run(option, onStart);
      });
    }
  } // load plugins


  cc.assetManager.loadScript(settings.jsList.map(function (x) {
    return 'src/' + x;
  }), cb); // load bundles

  for (var i = 0; i < bundleRoot.length; i++) {
    cc.assetManager.loadBundle(bundleRoot[i], cb);
  }
}; 
 			});
 		define("prerender.js", function(require, module, exports){ 			
"use strict";

var V_SHADER_SOURCE = "\n    attribute vec4 a_Position;\n    attribute vec2 a_TexCoord;\n    varying vec2 v_TexCoord;\n\n    void main(){\n        gl_Position = a_Position;\n        v_TexCoord = a_TexCoord;\n    }\n";
var F_SHADER_SOURCE = "\n    precision mediump float;\n    uniform sampler2D u_Sampler;\n    varying vec2 v_TexCoord;\n\n    void main(){\n        gl_FragColor = texture2D(u_Sampler, v_TexCoord);\n    }\n";

function loadShader(gl, type, source) {
  // Create shader object
  var shader = gl.createShader(type);

  if (shader == null) {
    console.log("Unable to create shader");
    return null;
  } // Set the shader source


  gl.shaderSource(shader, source); // Compile the shader

  gl.compileShader(shader); // Check the result of compilation

  var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

  if (!compiled) {
    var error = gl.getShaderInfoLog(shader);
    console.log("Failed to compile shader: " + error);
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

function createProgram(gl, vShader, fShader) {
  // Create shader object
  var vertexShader = loadShader(gl, gl.VERTEX_SHADER, vShader);
  var fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fShader);

  if (!vertexShader || !fragmentShader) {
    return null;
  } // Create a program object


  var program = gl.createProgram();

  if (!program) {
    return null;
  } // Attach the shader objects


  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader); // Link the program object

  gl.linkProgram(program); // Check the result of linking

  var linked = gl.getProgramParameter(program, gl.LINK_STATUS);

  if (!linked) {
    var error = gl.getProgramInfoLog(program);
    console.log("Failed to link program: " + error);
    gl.deleteProgram(program);
    gl.deleteShader(fragmentShader);
    gl.deleteShader(vertexShader);
    return null;
  }

  return program;
}

function initShaders(gl, vShader, fShader) {
  var program = createProgram(gl, vShader, fShader);

  if (!program) {
    console.log("Failed to create program");
    return false;
  }

  gl.useProgram(program);
  gl.program = program;
  return true;
}

function initVertexBuffers(gl, x0, y0, x1, y1) {
  // The number of vertices
  var n = 4;

  var _x0 = x0 * 2 - 1;

  var _x1 = x1 * 2 - 1;

  var _y0 = 1 - y0 * 2;

  var _y1 = 1 - y1 * 2;

  var verticesSizes = new Float32Array([// Vertex coordinates, texture coordinate
  _x0, _y0, 0.0, 1.0, _x0, _y1, 0.0, 0.0, _x1, _y0, 1.0, 1.0, _x1, _y1, 1.0, 0.0]); // Create the buffer object

  var vertexSizeBuffer = gl.createBuffer();

  if (!vertexSizeBuffer) {
    console.log("无法创建缓冲区");
    return -1;
  } // Bind the buffer object to target


  gl.bindBuffer(gl.ARRAY_BUFFER, vertexSizeBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, verticesSizes, gl.STATIC_DRAW); // Bytes per element

  var fSize = verticesSizes.BYTES_PER_ELEMENT; // Get the storage location of a_Position, assign and enable buffer

  var a_Position = gl.getAttribLocation(gl.program, "a_Position");

  if (a_Position < 0) {
    console.log("无法获取到存储位置");
    return;
  } // Assign the buffer object to a_Position variable


  gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, fSize * 4, 0); // Enable the assignment of the buffer object

  gl.enableVertexAttribArray(a_Position); // Get the storage location of a_TexCoord

  var a_TexCoord = gl.getAttribLocation(gl.program, "a_TexCoord");

  if (a_TexCoord < 0) {
    console.log("无法获取到存储位置");
    return;
  } // Assign the buffer object to a_TexCoord variable


  gl.vertexAttribPointer(a_TexCoord, 2, gl.FLOAT, false, fSize * 4, fSize * 2); // Enable the assignment of the buffer object

  gl.enableVertexAttribArray(a_TexCoord);
  return n;
}

function initTextures(gl, n, image) {
  // Create a texture object
  var texture = gl.createTexture();

  if (!texture) {
    console.log("Failed to create the texture object");
    return false;
  } // Get the storage location of u_Sampler


  var u_Sampler = gl.getUniformLocation(gl.program, "u_Sampler");

  if (u_Sampler < 0) {
    console.log("Failed to get the storage location of u_Sampler");
    return false;
  } // Flip the image's y axis


  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1); // Enable texture unit0

  gl.activeTexture(gl.TEXTURE0); // Bind the texture object to the target

  gl.bindTexture(gl.TEXTURE_2D, texture); // Set the texture parameters

  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE); // Set the texture image

  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image); // Set the texture unit 0 to the sampler

  gl.uniform1i(u_Sampler, 0); // Specify the color for clearing

  gl.clearColor(1.0, 1.0, 1.0, 1.0); // Clear

  gl.clear(gl.COLOR_BUFFER_BIT); // Draw the rectangle

  gl.drawArrays(gl.TRIANGLE_STRIP, 0, n);
  return true;
}

function drawImage(gl, image, x0, y0, x1, y1) {
  if (initShaders(gl, V_SHADER_SOURCE, F_SHADER_SOURCE)) {
    var n = initVertexBuffers(gl, x0, y0, x1, y1);

    if (n >= 0) {
      if (!initTextures(gl, n, image)) {
        console.log("Failed to set the texture");
      }
    } else {
      console.log("Failed to set the vertexes");
    }
  } else {
    console.log("Failed to init the shader");
  }
}

var platform = wx.getSystemInfoSync().platform; // 微信开发者工具上提前渲染会导致白屏

if (platform !== "devtools" && platform !== "windows") {
  GameGlobal.screencanvas = wx.createCanvas();
  var gl = GameGlobal.screencanvas.getContext("webgl");
  var image = wx.createImage();

  image.onload = function () {
    var designWidth = 1334;
    var designHeight = 750;
    var systemInfo = wx.getSystemInfoSync();
    var windowWidth = systemInfo && systemInfo.windowWidth || designWidth;
    var windowHeight = systemInfo && systemInfo.windowHeight || designHeight; // // center
    // let w = image.width / windowWidth;
    // let h = image.height / windowHeight;
    // let x = (1 - w) * 0.5;
    // let y = (1 - h) * 0.5;
    // no-border

    var bgWidth = image.width;
    var bgHeight = image.height;
    var scale = Math.max(windowWidth / bgWidth, windowHeight / bgHeight);
    var w = bgWidth * scale / windowWidth;
    var h = bgHeight * scale / windowHeight;
    var x = (1 - w) * 0.5;
    var y = (1 - h) * 0.5; // 安卓手机直接调用渲染一次就可以了，苹果手机需要在requestAnimationFrame里持续调用

    if (platform === "android") {
      drawImage(gl, image, x, y, x + w, y + h);
    } else {
      var render = function render() {
        var scene = cc && cc.director && cc.director.getScene();

        if (!scene) {
          drawImage(gl, image, x, y, x + w, y + h);
          requestAnimationFrame(render);
        }
      };

      requestAnimationFrame(render);
    }
  };

  image.src = "bg.jpg";
} 
 			});
 		define("src/assets/libs/ArrayExtension.js", function(require, module, exports){ 			
"use strict";

require("../../../@babel/runtime/helpers/Arrayincludes");

var indexOf = function indexOf(n, t, e) {
  if (n) {
    var r = n.length;
    null == e || e <= -r ? e = 0 : e < 0 && (e += r);

    for (var i = e || 0, d = n.length; i < d; ++i) {
      if (n[i] === t) return i;
    }
  }

  return -1;
},
    lastIndexOf = function lastIndexOf(n, t, e) {
  if (n) {
    var r = n.length;
    null == e || e >= r ? e = r - 1 : e < 0 && (e += r);

    for (var i = e; i >= 0; --i) {
      if (n[i] === t) return i;
    }
  }

  return -1;
},
    findIndex = function findIndex(n, t, e) {
  if (n && t) for (var r = 0, i = n.length; r < i; ++r) {
    if (t.call(e, n[r], r, n)) return r;
  }
  return -1;
},
    findLastIndex = function findLastIndex(n, t, e) {
  if (n && t) for (var r = n.length - 1; r >= 0; --r) {
    if (t.call(e, n[r], r, n)) return r;
  }
  return -1;
};

Array.prototype.peek || Object.defineProperty(Array.prototype, "peek", {
  value: function value() {
    return this[this.length - 1];
  }
}), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
  value: function value(n, t) {
    return -1 !== this.indexOf(n, t);
  }
}), Array.prototype.findIndex || Object.defineProperty(Array.prototype, "findIndex", {
  value: function value(n, t) {
    return findIndex(this, n, t);
  }
}), Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
  value: function value(n, t) {
    var e = findIndex(this, n, t);
    return -1 !== e ? this[e] : void 0;
  }
}), Array.prototype.findIndex || Object.defineProperty(Array.prototype, "findLastIndex", {
  value: function value(n, t) {
    return findLastIndex(this, n, t);
  }
}), Array.prototype.find || Object.defineProperty(Array.prototype, "findLast", {
  value: function value(n, t) {
    var e = findLastIndex(this, n, t);
    return -1 !== e ? this[e] : void 0;
  }
}), Array.prototype.contains || Object.defineProperty(Array.prototype, "contains", {
  value: function value(n, t) {
    return -1 !== findIndex(this, n, t);
  }
}), Array.indexOf = function (n, t, e) {
  return n && n.indexOf ? n.indexOf(t, e) : indexOf(n, t, e);
}, Array.lastIndexOf = function (n, t, e) {
  return n && n.lastIndexOf ? arguments.length < 3 ? n.lastIndexOf(t) : n.lastIndexOf(t, e) : arguments.length < 3 ? lastIndexOf(n, t) : lastIndexOf(n, t, void 0 === e ? 0 : e);
}, Array.findIndex = function (n, t, e) {
  return n && n.findIndex ? n.findIndex(t, e) : findIndex(n, t, e);
}, Array.includes = function (n, t, e) {
  return !!n && (n.includes ? n.includes(t, e) : -1 !== n.indexOf(t, e));
}, Array.findIndex = function (n, t, e) {
  return n && n.findIndex ? n.findIndex(t, e) : findIndex(n, t, e);
}, Array.find = function (n, t, e) {
  if (n && n.find) return n.find(t, e);
  {
    var r = findIndex(n, t, e);
    return -1 !== r ? n[r] : void 0;
  }
}, Array.findLastIndex = function (n, t, e) {
  return n && n.findLastIndex ? n.findLastIndex(t, e) : findLastIndex(n, t, e);
}, Array.findLast = function (n, t, e) {
  if (n && n.findLast) return n.findLast(t, e);
  {
    var r = findLastIndex(n, t, e);
    return -1 !== r ? n[r] : void 0;
  }
}, Array.contains = function (n, t, e) {
  return n && n.contains ? n.contains(t, e) : -1 !== findIndex(n, t, e);
}; 
 			});
 		define("src/assets/libs/CocosCreatorExtension.js", function(require, module, exports){ 			
"use strict";

var Destroying = cc.Object.Flags.Destroying,
    js = cc.js;

cc._BaseNode.prototype.addComponent = function (e) {
  var r;

  if ("string" == typeof e) {
    if (!(r = js.getClassByName(e))) return cc.errorID(3807, e), cc._RFpeek() && cc.errorID(3808, e), null;
  } else {
    if (!e) return cc.errorID(3804), null;
    r = e;
  }

  if ("function" != typeof r) return cc.errorID(3809), null;
  if (!js.isChildClassOf(r, cc.Component)) return cc.errorID(3810), null;
  var n = r._requireComponent;
  if (n && !this.getComponent(n) && !this.addComponent(n)) return null;
  var t = new r();
  return t.node = this, this._components.push(t), t.onAwake && t.onAwake(), this._activeInHierarchy && cc.director._nodeActivator.activateComp(t), t;
}; 
 			});
 		define("src/assets/libs/DateExtension.js", function(require, module, exports){ 			
"use strict";

Date.prototype.toCustomString = function (e) {
  if (e) {
    var t = this.getFullYear() + "",
        a = this.getMonth() + 1 + "",
        r = this.getDate() + "",
        g = this.getHours(),
        p = g + "",
        l = g % 12 + "",
        c = this.getMinutes() + "",
        s = this.getSeconds() + "",
        i = this.getMilliseconds(),
        o = i + "",
        h = Math.floor(i / 10) + "",
        d = Math.floor(i / 100) + "";
    return e.replace(/ms|f{3,}/g, o.padStart(3, "0")).replace(/ff/g, h.padStart(2, "0")).replace(/f/g, d).replace(/y{3,}/g, t).replace(/y{1,2}/g, t.substring(2)).replace(/M{2,}/g, a.padStart(2, "0")).replace(/M/g, a).replace(/d{2,}/g, r.padStart(2, "0")).replace(/d/g, r).replace(/H{2,}/g, p.padStart(2, "0")).replace(/H/g, p).replace(/h{2,}/g, l.padStart(2, "0")).replace(/h/g, l).replace(/m{2,}/g, c.padStart(2, "0")).replace(/m/g, c).replace(/s{2,}/g, s.padStart(2, "0")).replace(/s/g, s);
  }

  return this.toString();
}; 
 			});
 		define("src/assets/libs/Decorators.js", function(require, module, exports){ 			
"use strict";

function decorate(c, e) {
  return cc.Component.isPrototypeOf(c) ? e ? cc._decorator.ccclass(e)(c) : cc._decorator.ccclass(c) : (e || (e = cc._RF.peek().script), cc.js.setClassName(e, c));
}

function globalDecorate(c, e) {
  e || (e = cc._RF.peek().script), window[e] = c;
}

window.jsClass = function (c) {
  return "string" == typeof c ? function (e) {
    return decorate(e, c);
  } : decorate(c);
}, window.globalClass = function (c) {
  return "string" == typeof c ? function (e) {
    return globalDecorate(e, c);
  } : globalDecorate(c);
}; 
 			});
 		define("src/assets/libs/FunctionExtension.js", function(require, module, exports){ 			
"use strict";

Function.prototype.tailBind = function (t) {
  for (var _len = arguments.length, n = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    n[_key - 1] = arguments[_key];
  }

  var e = this;
  return function () {
    for (var _len2 = arguments.length, i = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      i[_key2] = arguments[_key2];
    }

    return e.call.apply(e, [t].concat(i, n));
  };
}, Function.prototype.combineAfter = function (t, n) {
  var e = this;
  return function () {
    for (var _len3 = arguments.length, i = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      i[_key3] = arguments[_key3];
    }

    var o = t || this,
        r = e.apply(o, i);
    return n.apply(o, i), r;
  };
}, Function.prototype.combineBefore = function (t, n) {
  var e = this;
  return function () {
    var o = t || this;

    for (var _len4 = arguments.length, i = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      i[_key4] = arguments[_key4];
    }

    return n.apply(o, i), e.apply(o, i);
  };
}; 
 			});
 		define("src/assets/libs/JSONExtension.js", function(require, module, exports){ 			
"use strict";

JSON.parseBy = function (t, e, r) {
  var s = this.parse(t, r);
  return s && e ? s : Object.setPrototypeOf(s, e);
}; 
 			});
 		define("src/assets/libs/MathExtension.js", function(require, module, exports){ 			
"use strict";

Math.randomRangeInt = function (t, a) {
  return t + Math.floor(Math.random() * (a - t));
}, Math.randomRangeFloat = function (t, a) {
  return t + Math.random() * (a - t);
}, Math.clamp = function (t, a, n) {
  return Math.max(Math.min(t, n), a);
}, Math.average = function () {
  var a = 0;

  for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
    t[_key] = arguments[_key];
  }

  for (var _i = 0, _t = t; _i < _t.length; _i++) {
    var n = _t[_i];
    a += n;
  }

  return a / t.length;
}, Math.variance = function () {
  for (var _len2 = arguments.length, t = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    t[_key2] = arguments[_key2];
  }

  var a = this.average.apply(this, t),
      n = 0;

  for (var _i2 = 0, _t2 = t; _i2 < _t2.length; _i2++) {
    var r = _t2[_i2];
    n += Math.pow(r - a, 2);
  }

  return n / t.length;
}, Math.rad2deg = function (t) {
  return 180 * t / Math.PI;
}, Math.deg2rad = function (t) {
  return t * Math.PI / 180;
}; 
 			});
 		define("src/assets/libs/NumberExtension.js", function(require, module, exports){ 			
"use strict";

Number.prototype.toFloated = function (t) {
  return +this.toFixed(t) + "";
}; 
 			});
 		define("src/assets/libs/ObjectExtension.js", function(require, module, exports){ 			
"use strict";

var _slicedToArray2 = require("../../../@babel/runtime/helpers/slicedToArray");

var _createForOfIteratorHelper2 = require("../../../@babel/runtime/helpers/createForOfIteratorHelper");

Object.deepCopy = function (t) {
  var e = new Map(),
      n = function n(t) {
    if (!(t instanceof Object)) return t;
    if (e.has(t)) return e.get(t);
    var n;
    return t instanceof Array ? (n = [], e.set(t, n)) : t instanceof Map ? (n = new t.constructor(), e.set(t, n), o(t, n)) : t instanceof Set ? (n = new t.constructor(), e.set(t, n), f(t, n)) : (n = {}, e.set(t, n)), r(t, n), n;
  },
      r = function r(t, e) {
    for (var _r in t) {
      t.hasOwnProperty(_r) && (e[_r] = n(t[_r]));
    }
  },
      o = function o(t, e) {
    var _iterator = _createForOfIteratorHelper2(t),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray2(_step.value, 2),
            _r2 = _step$value[0],
            _o = _step$value[1];

        e.set(_r2, n(_o));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  },
      f = function f(t, e) {
    var _iterator2 = _createForOfIteratorHelper2(t),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _r3 = _step2.value;
        e.add(n(_r3));
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  };

  return n(t);
}, Object.diff = function (t, e) {
  var n = new Map(),
      r = function r(t, e) {
    var o = n.get(t);
    if (o || (o = new Map(), n.set(t, o)), o.has(e)) return o.get(e);
    var f = {};
    o.set(e, f);

    for (var _n in t) {
      t.hasOwnProperty(_n) && !e.hasOwnProperty(_n) && (f[_n] = -1);
    }

    for (var _n2 in e) {
      e.hasOwnProperty(_n2) && !t.hasOwnProperty(_n2) && (f[_n2] = 1);
    }

    for (var _n3 in t) {
      if (t.hasOwnProperty(_n3) && e.hasOwnProperty(_n3)) {
        var _o2 = t[_n3],
            c = e[_n3];
        _o2 !== c && (_o2 instanceof Object && c instanceof Object ? f[_n3] = r(_o2, c) : f[_n3] = 0);
      }
    }

    return f;
  };

  return r(t, e);
}, Object.merge = function (t, e) {
  return t ? e ? Object.assign(t, e) : t : e;
}, Object.findByPath = function (t, e) {
  var n = e.split("."),
      r = t;

  var _iterator3 = _createForOfIteratorHelper2(n),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var o = _step3.value;
      if (!(r = r[o])) return null;
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  return r;
}, Object.trim = function (t, e) {
  if (t) for (var n in t) {
    t.hasOwnProperty(n) && void 0 === t[n] && (delete t[n], e && e.push(n));
  }
  return t;
}, Object.slice = function (t, e) {
  var n = {};
  return e && e.forEach(function (e) {
    return n[e] = t[e];
  }), n;
}, Object.pluck = function (t, e) {
  return e ? e.map(function (e) {
    return t[e];
  }) : [];
}, Object.fromEntries = Object.fromEntries || function (t) {
  var e = {};

  if (t) {
    var _iterator4 = _createForOfIteratorHelper2(t),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var n = _step4.value;
        e[n[0]] = n[1];
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  }

  return e;
}; 
 			});
 		define("src/assets/libs/StringExtension.js", function(require, module, exports){ 			
"use strict";

String.prototype.startsWith = String.prototype.startsWith || function (t, e) {
  return this.indexOf(t, e) === e;
}, String.prototype.endsWith = String.prototype.endsWith || function (t, e) {
  null == e && (e = this.length);
  var r = this.lastIndexOf(t);
  return -1 !== r && r === e - t.length;
}, String.prototype.includes = String.prototype.includes || function (t, e) {
  return -1 !== this.indexOf(t, e);
}, String.prototype.repeat = String.prototype.repeat || function (t) {
  var e = [];

  for (var r = 0; r < t; ++r) {
    e.push(this.toString());
  }

  return e.join("");
}, String.prototype.padStart = String.prototype.padStart || function (t, e) {
  if ("" === e) return this.toString();
  e = null === e ? "null" : void 0 === e ? " " : e;
  var r = (t = t || 0) - this.length,
      n = e.length,
      i = Math.max(r / n, 0),
      o = Math.max(r % n, 0);
  return e.repeat(i) + e.slice(0, o) + this;
}, String.prototype.padEnd = String.prototype.padEnd || function (t, e) {
  if ("" === e) return this.toString();
  e = null === e ? "null" : void 0 === e ? " " : e;
  var r = (t = t || 0) - this.length,
      n = e.length,
      i = Math.max(r / n, 0),
      o = Math.max(r % n, 0);
  return this + e.repeat(i) + e.slice(0, o);
}, String.prototype.format = function () {
  var _arguments = arguments;
  var e = this.toString(),
      r = arguments.length;
  if (0 === r) return this.toString();

  if (1 === r && (arguments.length <= 0 ? undefined : arguments[0]) instanceof Object) {
    var _r = arguments.length <= 0 ? undefined : arguments[0];

    for (var t in _r) {
      if (_r.hasOwnProperty(t)) {
        var n = new RegExp("\\{".concat(t, "\\}"), "g");
        e = e.replace(n, _r[t]);
      }
    }
  } else {
    var _loop = function _loop(_n) {
      var r = _n < 0 || _arguments.length <= _n ? undefined : _arguments[_n],
          i = _n.toString(),
          o = new RegExp("\\{".concat(i, "\\}"), "g");

      e = e.replace(o, r);
      var p = new RegExp("\\{".concat(i, ":[^{}:]+\\}"), "g"),
          s = i.length + 2;
      e = e.replace(p, function (t) {
        var e = t.substring(s, t.length - 1);
        return String.formatParamFunc(r, e);
      });
    };

    for (var _n = 0; _n < r; _n++) {
      _loop(_n);
    }
  }

  return e;
}, String.formatParamFunc = function (t, e) {
  if (/^D\d+$/.test(e)) {
    if (Number.isInteger(t)) {
      var r = Number.parseInt(e.substring(1));
      return (t + "").padStart(r, "0");
    }
  } else if (/^N\d+$/.test(e)) {
    if (t === +t) {
      var _r2 = Number.parseInt(e.substring(1)),
          n = Math.pow(10, _r2);

      return Math.round(t * n) / n;
    }
  } else {
    if (e.startsWith("|")) return t ? t + "" : e.substring(1);
    if (e.startsWith("&")) return t ? t + e.substring(1) : "";
  }

  return t;
}, String.prototype.replaceAll = function (t, e, r) {
  return this.replace(new RegExp(t, r ? "gm" : "g"), e);
}; 
 			});
 		define("src/assets/libs/bf33.js", function(require, module, exports){ 			
 			});
 		define("src/assets/libs/encoding-indexes.js", function(require, module, exports){ 			
"use strict";

(function (e) {
  "use strict";

  "undefined" != typeof module && module.exports && (module.exports = e), e["encoding-indexes"] = {
    gb18030: [19970, 19972, 19973, 19974, 19983, 19986, 19991, 19999, 2e4, 20001, 20003, 20006, 20009, 20014, 20015, 20017, 20019, 20021, 20023, 20028, 20032, 20033, 20034, 20036, 20038, 20042, 20049, 20053, 20055, 20058, 20059, 20066, 20067, 20068, 20069, 20071, 20072, 20074, 20075, 20076, 20077, 20078, 20079, 20082, 20084, 20085, 20086, 20087, 20088, 20089, 20090, 20091, 20092, 20093, 20095, 20096, 20097, 20098, 20099, 20100, 20101, 20103, 20106, 20112, 20118, 20119, 20121, 20124, 20125, 20126, 20131, 20138, 20143, 20144, 20145, 20148, 20150, 20151, 20152, 20153, 20156, 20157, 20158, 20168, 20172, 20175, 20176, 20178, 20186, 20187, 20188, 20192, 20194, 20198, 20199, 20201, 20205, 20206, 20207, 20209, 20212, 20216, 20217, 20218, 20220, 20222, 20224, 20226, 20227, 20228, 20229, 20230, 20231, 20232, 20235, 20236, 20242, 20243, 20244, 20245, 20246, 20252, 20253, 20257, 20259, 20264, 20265, 20268, 20269, 20270, 20273, 20275, 20277, 20279, 20281, 20283, 20286, 20287, 20288, 20289, 20290, 20292, 20293, 20295, 20296, 20297, 20298, 20299, 20300, 20306, 20308, 20310, 20321, 20322, 20326, 20328, 20330, 20331, 20333, 20334, 20337, 20338, 20341, 20343, 20344, 20345, 20346, 20349, 20352, 20353, 20354, 20357, 20358, 20359, 20362, 20364, 20366, 20368, 20370, 20371, 20373, 20374, 20376, 20377, 20378, 20380, 20382, 20383, 20385, 20386, 20388, 20395, 20397, 20400, 20401, 20402, 20403, 20404, 20406, 20407, 20408, 20409, 20410, 20411, 20412, 20413, 20414, 20416, 20417, 20418, 20422, 20423, 20424, 20425, 20427, 20428, 20429, 20434, 20435, 20436, 20437, 20438, 20441, 20443, 20448, 20450, 20452, 20453, 20455, 20459, 20460, 20464, 20466, 20468, 20469, 20470, 20471, 20473, 20475, 20476, 20477, 20479, 20480, 20481, 20482, 20483, 20484, 20485, 20486, 20487, 20488, 20489, 20490, 20491, 20494, 20496, 20497, 20499, 20501, 20502, 20503, 20507, 20509, 20510, 20512, 20514, 20515, 20516, 20519, 20523, 20527, 20528, 20529, 20530, 20531, 20532, 20533, 20534, 20535, 20536, 20537, 20539, 20541, 20543, 20544, 20545, 20546, 20548, 20549, 20550, 20553, 20554, 20555, 20557, 20560, 20561, 20562, 20563, 20564, 20566, 20567, 20568, 20569, 20571, 20573, 20574, 20575, 20576, 20577, 20578, 20579, 20580, 20582, 20583, 20584, 20585, 20586, 20587, 20589, 20590, 20591, 20592, 20593, 20594, 20595, 20596, 20597, 20600, 20601, 20602, 20604, 20605, 20609, 20610, 20611, 20612, 20614, 20615, 20617, 20618, 20619, 20620, 20622, 20623, 20624, 20625, 20626, 20627, 20628, 20629, 20630, 20631, 20632, 20633, 20634, 20635, 20636, 20637, 20638, 20639, 20640, 20641, 20642, 20644, 20646, 20650, 20651, 20653, 20654, 20655, 20656, 20657, 20659, 20660, 20661, 20662, 20663, 20664, 20665, 20668, 20669, 20670, 20671, 20672, 20673, 20674, 20675, 20676, 20677, 20678, 20679, 20680, 20681, 20682, 20683, 20684, 20685, 20686, 20688, 20689, 20690, 20691, 20692, 20693, 20695, 20696, 20697, 20699, 20700, 20701, 20702, 20703, 20704, 20705, 20706, 20707, 20708, 20709, 20712, 20713, 20714, 20715, 20719, 20720, 20721, 20722, 20724, 20726, 20727, 20728, 20729, 20730, 20732, 20733, 20734, 20735, 20736, 20737, 20738, 20739, 20740, 20741, 20744, 20745, 20746, 20748, 20749, 20750, 20751, 20752, 20753, 20755, 20756, 20757, 20758, 20759, 20760, 20761, 20762, 20763, 20764, 20765, 20766, 20767, 20768, 20770, 20771, 20772, 20773, 20774, 20775, 20776, 20777, 20778, 20779, 20780, 20781, 20782, 20783, 20784, 20785, 20786, 20787, 20788, 20789, 20790, 20791, 20792, 20793, 20794, 20795, 20796, 20797, 20798, 20802, 20807, 20810, 20812, 20814, 20815, 20816, 20818, 20819, 20823, 20824, 20825, 20827, 20829, 20830, 20831, 20832, 20833, 20835, 20836, 20838, 20839, 20841, 20842, 20847, 20850, 20858, 20862, 20863, 20867, 20868, 20870, 20871, 20874, 20875, 20878, 20879, 20880, 20881, 20883, 20884, 20888, 20890, 20893, 20894, 20895, 20897, 20899, 20902, 20903, 20904, 20905, 20906, 20909, 20910, 20916, 20920, 20921, 20922, 20926, 20927, 20929, 20930, 20931, 20933, 20936, 20938, 20941, 20942, 20944, 20946, 20947, 20948, 20949, 20950, 20951, 20952, 20953, 20954, 20956, 20958, 20959, 20962, 20963, 20965, 20966, 20967, 20968, 20969, 20970, 20972, 20974, 20977, 20978, 20980, 20983, 20990, 20996, 20997, 21001, 21003, 21004, 21007, 21008, 21011, 21012, 21013, 21020, 21022, 21023, 21025, 21026, 21027, 21029, 21030, 21031, 21034, 21036, 21039, 21041, 21042, 21044, 21045, 21052, 21054, 21060, 21061, 21062, 21063, 21064, 21065, 21067, 21070, 21071, 21074, 21075, 21077, 21079, 21080, 21081, 21082, 21083, 21085, 21087, 21088, 21090, 21091, 21092, 21094, 21096, 21099, 21100, 21101, 21102, 21104, 21105, 21107, 21108, 21109, 21110, 21111, 21112, 21113, 21114, 21115, 21116, 21118, 21120, 21123, 21124, 21125, 21126, 21127, 21129, 21130, 21131, 21132, 21133, 21134, 21135, 21137, 21138, 21140, 21141, 21142, 21143, 21144, 21145, 21146, 21148, 21156, 21157, 21158, 21159, 21166, 21167, 21168, 21172, 21173, 21174, 21175, 21176, 21177, 21178, 21179, 21180, 21181, 21184, 21185, 21186, 21188, 21189, 21190, 21192, 21194, 21196, 21197, 21198, 21199, 21201, 21203, 21204, 21205, 21207, 21209, 21210, 21211, 21212, 21213, 21214, 21216, 21217, 21218, 21219, 21221, 21222, 21223, 21224, 21225, 21226, 21227, 21228, 21229, 21230, 21231, 21233, 21234, 21235, 21236, 21237, 21238, 21239, 21240, 21243, 21244, 21245, 21249, 21250, 21251, 21252, 21255, 21257, 21258, 21259, 21260, 21262, 21265, 21266, 21267, 21268, 21272, 21275, 21276, 21278, 21279, 21282, 21284, 21285, 21287, 21288, 21289, 21291, 21292, 21293, 21295, 21296, 21297, 21298, 21299, 21300, 21301, 21302, 21303, 21304, 21308, 21309, 21312, 21314, 21316, 21318, 21323, 21324, 21325, 21328, 21332, 21336, 21337, 21339, 21341, 21349, 21352, 21354, 21356, 21357, 21362, 21366, 21369, 21371, 21372, 21373, 21374, 21376, 21377, 21379, 21383, 21384, 21386, 21390, 21391, 21392, 21393, 21394, 21395, 21396, 21398, 21399, 21401, 21403, 21404, 21406, 21408, 21409, 21412, 21415, 21418, 21419, 21420, 21421, 21423, 21424, 21425, 21426, 21427, 21428, 21429, 21431, 21432, 21433, 21434, 21436, 21437, 21438, 21440, 21443, 21444, 21445, 21446, 21447, 21454, 21455, 21456, 21458, 21459, 21461, 21466, 21468, 21469, 21470, 21473, 21474, 21479, 21492, 21498, 21502, 21503, 21504, 21506, 21509, 21511, 21515, 21524, 21528, 21529, 21530, 21532, 21538, 21540, 21541, 21546, 21552, 21555, 21558, 21559, 21562, 21565, 21567, 21569, 21570, 21572, 21573, 21575, 21577, 21580, 21581, 21582, 21583, 21585, 21594, 21597, 21598, 21599, 21600, 21601, 21603, 21605, 21607, 21609, 21610, 21611, 21612, 21613, 21614, 21615, 21616, 21620, 21625, 21626, 21630, 21631, 21633, 21635, 21637, 21639, 21640, 21641, 21642, 21645, 21649, 21651, 21655, 21656, 21660, 21662, 21663, 21664, 21665, 21666, 21669, 21678, 21680, 21682, 21685, 21686, 21687, 21689, 21690, 21692, 21694, 21699, 21701, 21706, 21707, 21718, 21720, 21723, 21728, 21729, 21730, 21731, 21732, 21739, 21740, 21743, 21744, 21745, 21748, 21749, 21750, 21751, 21752, 21753, 21755, 21758, 21760, 21762, 21763, 21764, 21765, 21768, 21770, 21771, 21772, 21773, 21774, 21778, 21779, 21781, 21782, 21783, 21784, 21785, 21786, 21788, 21789, 21790, 21791, 21793, 21797, 21798, 21800, 21801, 21803, 21805, 21810, 21812, 21813, 21814, 21816, 21817, 21818, 21819, 21821, 21824, 21826, 21829, 21831, 21832, 21835, 21836, 21837, 21838, 21839, 21841, 21842, 21843, 21844, 21847, 21848, 21849, 21850, 21851, 21853, 21854, 21855, 21856, 21858, 21859, 21864, 21865, 21867, 21871, 21872, 21873, 21874, 21875, 21876, 21881, 21882, 21885, 21887, 21893, 21894, 21900, 21901, 21902, 21904, 21906, 21907, 21909, 21910, 21911, 21914, 21915, 21918, 21920, 21921, 21922, 21923, 21924, 21925, 21926, 21928, 21929, 21930, 21931, 21932, 21933, 21934, 21935, 21936, 21938, 21940, 21942, 21944, 21946, 21948, 21951, 21952, 21953, 21954, 21955, 21958, 21959, 21960, 21962, 21963, 21966, 21967, 21968, 21973, 21975, 21976, 21977, 21978, 21979, 21982, 21984, 21986, 21991, 21993, 21997, 21998, 22e3, 22001, 22004, 22006, 22008, 22009, 22010, 22011, 22012, 22015, 22018, 22019, 22020, 22021, 22022, 22023, 22026, 22027, 22029, 22032, 22033, 22034, 22035, 22036, 22037, 22038, 22039, 22041, 22042, 22044, 22045, 22048, 22049, 22050, 22053, 22054, 22056, 22057, 22058, 22059, 22062, 22063, 22064, 22067, 22069, 22071, 22072, 22074, 22076, 22077, 22078, 22080, 22081, 22082, 22083, 22084, 22085, 22086, 22087, 22088, 22089, 22090, 22091, 22095, 22096, 22097, 22098, 22099, 22101, 22102, 22106, 22107, 22109, 22110, 22111, 22112, 22113, 22115, 22117, 22118, 22119, 22125, 22126, 22127, 22128, 22130, 22131, 22132, 22133, 22135, 22136, 22137, 22138, 22141, 22142, 22143, 22144, 22145, 22146, 22147, 22148, 22151, 22152, 22153, 22154, 22155, 22156, 22157, 22160, 22161, 22162, 22164, 22165, 22166, 22167, 22168, 22169, 22170, 22171, 22172, 22173, 22174, 22175, 22176, 22177, 22178, 22180, 22181, 22182, 22183, 22184, 22185, 22186, 22187, 22188, 22189, 22190, 22192, 22193, 22194, 22195, 22196, 22197, 22198, 22200, 22201, 22202, 22203, 22205, 22206, 22207, 22208, 22209, 22210, 22211, 22212, 22213, 22214, 22215, 22216, 22217, 22219, 22220, 22221, 22222, 22223, 22224, 22225, 22226, 22227, 22229, 22230, 22232, 22233, 22236, 22243, 22245, 22246, 22247, 22248, 22249, 22250, 22252, 22254, 22255, 22258, 22259, 22262, 22263, 22264, 22267, 22268, 22272, 22273, 22274, 22277, 22279, 22283, 22284, 22285, 22286, 22287, 22288, 22289, 22290, 22291, 22292, 22293, 22294, 22295, 22296, 22297, 22298, 22299, 22301, 22302, 22304, 22305, 22306, 22308, 22309, 22310, 22311, 22315, 22321, 22322, 22324, 22325, 22326, 22327, 22328, 22332, 22333, 22335, 22337, 22339, 22340, 22341, 22342, 22344, 22345, 22347, 22354, 22355, 22356, 22357, 22358, 22360, 22361, 22370, 22371, 22373, 22375, 22380, 22382, 22384, 22385, 22386, 22388, 22389, 22392, 22393, 22394, 22397, 22398, 22399, 22400, 22401, 22407, 22408, 22409, 22410, 22413, 22414, 22415, 22416, 22417, 22420, 22421, 22422, 22423, 22424, 22425, 22426, 22428, 22429, 22430, 22431, 22437, 22440, 22442, 22444, 22447, 22448, 22449, 22451, 22453, 22454, 22455, 22457, 22458, 22459, 22460, 22461, 22462, 22463, 22464, 22465, 22468, 22469, 22470, 22471, 22472, 22473, 22474, 22476, 22477, 22480, 22481, 22483, 22486, 22487, 22491, 22492, 22494, 22497, 22498, 22499, 22501, 22502, 22503, 22504, 22505, 22506, 22507, 22508, 22510, 22512, 22513, 22514, 22515, 22517, 22518, 22519, 22523, 22524, 22526, 22527, 22529, 22531, 22532, 22533, 22536, 22537, 22538, 22540, 22542, 22543, 22544, 22546, 22547, 22548, 22550, 22551, 22552, 22554, 22555, 22556, 22557, 22559, 22562, 22563, 22565, 22566, 22567, 22568, 22569, 22571, 22572, 22573, 22574, 22575, 22577, 22578, 22579, 22580, 22582, 22583, 22584, 22585, 22586, 22587, 22588, 22589, 22590, 22591, 22592, 22593, 22594, 22595, 22597, 22598, 22599, 22600, 22601, 22602, 22603, 22606, 22607, 22608, 22610, 22611, 22613, 22614, 22615, 22617, 22618, 22619, 22620, 22621, 22623, 22624, 22625, 22626, 22627, 22628, 22630, 22631, 22632, 22633, 22634, 22637, 22638, 22639, 22640, 22641, 22642, 22643, 22644, 22645, 22646, 22647, 22648, 22649, 22650, 22651, 22652, 22653, 22655, 22658, 22660, 22662, 22663, 22664, 22666, 22667, 22668, 22669, 22670, 22671, 22672, 22673, 22676, 22677, 22678, 22679, 22680, 22683, 22684, 22685, 22688, 22689, 22690, 22691, 22692, 22693, 22694, 22695, 22698, 22699, 22700, 22701, 22702, 22703, 22704, 22705, 22706, 22707, 22708, 22709, 22710, 22711, 22712, 22713, 22714, 22715, 22717, 22718, 22719, 22720, 22722, 22723, 22724, 22726, 22727, 22728, 22729, 22730, 22731, 22732, 22733, 22734, 22735, 22736, 22738, 22739, 22740, 22742, 22743, 22744, 22745, 22746, 22747, 22748, 22749, 22750, 22751, 22752, 22753, 22754, 22755, 22757, 22758, 22759, 22760, 22761, 22762, 22765, 22767, 22769, 22770, 22772, 22773, 22775, 22776, 22778, 22779, 22780, 22781, 22782, 22783, 22784, 22785, 22787, 22789, 22790, 22792, 22793, 22794, 22795, 22796, 22798, 22800, 22801, 22802, 22803, 22807, 22808, 22811, 22813, 22814, 22816, 22817, 22818, 22819, 22822, 22824, 22828, 22832, 22834, 22835, 22837, 22838, 22843, 22845, 22846, 22847, 22848, 22851, 22853, 22854, 22858, 22860, 22861, 22864, 22866, 22867, 22873, 22875, 22876, 22877, 22878, 22879, 22881, 22883, 22884, 22886, 22887, 22888, 22889, 22890, 22891, 22892, 22893, 22894, 22895, 22896, 22897, 22898, 22901, 22903, 22906, 22907, 22908, 22910, 22911, 22912, 22917, 22921, 22923, 22924, 22926, 22927, 22928, 22929, 22932, 22933, 22936, 22938, 22939, 22940, 22941, 22943, 22944, 22945, 22946, 22950, 22951, 22956, 22957, 22960, 22961, 22963, 22964, 22965, 22966, 22967, 22968, 22970, 22972, 22973, 22975, 22976, 22977, 22978, 22979, 22980, 22981, 22983, 22984, 22985, 22988, 22989, 22990, 22991, 22997, 22998, 23001, 23003, 23006, 23007, 23008, 23009, 23010, 23012, 23014, 23015, 23017, 23018, 23019, 23021, 23022, 23023, 23024, 23025, 23026, 23027, 23028, 23029, 23030, 23031, 23032, 23034, 23036, 23037, 23038, 23040, 23042, 23050, 23051, 23053, 23054, 23055, 23056, 23058, 23060, 23061, 23062, 23063, 23065, 23066, 23067, 23069, 23070, 23073, 23074, 23076, 23078, 23079, 23080, 23082, 23083, 23084, 23085, 23086, 23087, 23088, 23091, 23093, 23095, 23096, 23097, 23098, 23099, 23101, 23102, 23103, 23105, 23106, 23107, 23108, 23109, 23111, 23112, 23115, 23116, 23117, 23118, 23119, 23120, 23121, 23122, 23123, 23124, 23126, 23127, 23128, 23129, 23131, 23132, 23133, 23134, 23135, 23136, 23137, 23139, 23140, 23141, 23142, 23144, 23145, 23147, 23148, 23149, 23150, 23151, 23152, 23153, 23154, 23155, 23160, 23161, 23163, 23164, 23165, 23166, 23168, 23169, 23170, 23171, 23172, 23173, 23174, 23175, 23176, 23177, 23178, 23179, 23180, 23181, 23182, 23183, 23184, 23185, 23187, 23188, 23189, 23190, 23191, 23192, 23193, 23196, 23197, 23198, 23199, 23200, 23201, 23202, 23203, 23204, 23205, 23206, 23207, 23208, 23209, 23211, 23212, 23213, 23214, 23215, 23216, 23217, 23220, 23222, 23223, 23225, 23226, 23227, 23228, 23229, 23231, 23232, 23235, 23236, 23237, 23238, 23239, 23240, 23242, 23243, 23245, 23246, 23247, 23248, 23249, 23251, 23253, 23255, 23257, 23258, 23259, 23261, 23262, 23263, 23266, 23268, 23269, 23271, 23272, 23274, 23276, 23277, 23278, 23279, 23280, 23282, 23283, 23284, 23285, 23286, 23287, 23288, 23289, 23290, 23291, 23292, 23293, 23294, 23295, 23296, 23297, 23298, 23299, 23300, 23301, 23302, 23303, 23304, 23306, 23307, 23308, 23309, 23310, 23311, 23312, 23313, 23314, 23315, 23316, 23317, 23320, 23321, 23322, 23323, 23324, 23325, 23326, 23327, 23328, 23329, 23330, 23331, 23332, 23333, 23334, 23335, 23336, 23337, 23338, 23339, 23340, 23341, 23342, 23343, 23344, 23345, 23347, 23349, 23350, 23352, 23353, 23354, 23355, 23356, 23357, 23358, 23359, 23361, 23362, 23363, 23364, 23365, 23366, 23367, 23368, 23369, 23370, 23371, 23372, 23373, 23374, 23375, 23378, 23382, 23390, 23392, 23393, 23399, 23400, 23403, 23405, 23406, 23407, 23410, 23412, 23414, 23415, 23416, 23417, 23419, 23420, 23422, 23423, 23426, 23430, 23434, 23437, 23438, 23440, 23441, 23442, 23444, 23446, 23455, 23463, 23464, 23465, 23468, 23469, 23470, 23471, 23473, 23474, 23479, 23482, 23483, 23484, 23488, 23489, 23491, 23496, 23497, 23498, 23499, 23501, 23502, 23503, 23505, 23508, 23509, 23510, 23511, 23512, 23513, 23514, 23515, 23516, 23520, 23522, 23523, 23526, 23527, 23529, 23530, 23531, 23532, 23533, 23535, 23537, 23538, 23539, 23540, 23541, 23542, 23543, 23549, 23550, 23552, 23554, 23555, 23557, 23559, 23560, 23563, 23564, 23565, 23566, 23568, 23570, 23571, 23575, 23577, 23579, 23582, 23583, 23584, 23585, 23587, 23590, 23592, 23593, 23594, 23595, 23597, 23598, 23599, 23600, 23602, 23603, 23605, 23606, 23607, 23619, 23620, 23622, 23623, 23628, 23629, 23634, 23635, 23636, 23638, 23639, 23640, 23642, 23643, 23644, 23645, 23647, 23650, 23652, 23655, 23656, 23657, 23658, 23659, 23660, 23661, 23664, 23666, 23667, 23668, 23669, 23670, 23671, 23672, 23675, 23676, 23677, 23678, 23680, 23683, 23684, 23685, 23686, 23687, 23689, 23690, 23691, 23694, 23695, 23698, 23699, 23701, 23709, 23710, 23711, 23712, 23713, 23716, 23717, 23718, 23719, 23720, 23722, 23726, 23727, 23728, 23730, 23732, 23734, 23737, 23738, 23739, 23740, 23742, 23744, 23746, 23747, 23749, 23750, 23751, 23752, 23753, 23754, 23756, 23757, 23758, 23759, 23760, 23761, 23763, 23764, 23765, 23766, 23767, 23768, 23770, 23771, 23772, 23773, 23774, 23775, 23776, 23778, 23779, 23783, 23785, 23787, 23788, 23790, 23791, 23793, 23794, 23795, 23796, 23797, 23798, 23799, 23800, 23801, 23802, 23804, 23805, 23806, 23807, 23808, 23809, 23812, 23813, 23816, 23817, 23818, 23819, 23820, 23821, 23823, 23824, 23825, 23826, 23827, 23829, 23831, 23832, 23833, 23834, 23836, 23837, 23839, 23840, 23841, 23842, 23843, 23845, 23848, 23850, 23851, 23852, 23855, 23856, 23857, 23858, 23859, 23861, 23862, 23863, 23864, 23865, 23866, 23867, 23868, 23871, 23872, 23873, 23874, 23875, 23876, 23877, 23878, 23880, 23881, 23885, 23886, 23887, 23888, 23889, 23890, 23891, 23892, 23893, 23894, 23895, 23897, 23898, 23900, 23902, 23903, 23904, 23905, 23906, 23907, 23908, 23909, 23910, 23911, 23912, 23914, 23917, 23918, 23920, 23921, 23922, 23923, 23925, 23926, 23927, 23928, 23929, 23930, 23931, 23932, 23933, 23934, 23935, 23936, 23937, 23939, 23940, 23941, 23942, 23943, 23944, 23945, 23946, 23947, 23948, 23949, 23950, 23951, 23952, 23953, 23954, 23955, 23956, 23957, 23958, 23959, 23960, 23962, 23963, 23964, 23966, 23967, 23968, 23969, 23970, 23971, 23972, 23973, 23974, 23975, 23976, 23977, 23978, 23979, 23980, 23981, 23982, 23983, 23984, 23985, 23986, 23987, 23988, 23989, 23990, 23992, 23993, 23994, 23995, 23996, 23997, 23998, 23999, 24e3, 24001, 24002, 24003, 24004, 24006, 24007, 24008, 24009, 24010, 24011, 24012, 24014, 24015, 24016, 24017, 24018, 24019, 24020, 24021, 24022, 24023, 24024, 24025, 24026, 24028, 24031, 24032, 24035, 24036, 24042, 24044, 24045, 24048, 24053, 24054, 24056, 24057, 24058, 24059, 24060, 24063, 24064, 24068, 24071, 24073, 24074, 24075, 24077, 24078, 24082, 24083, 24087, 24094, 24095, 24096, 24097, 24098, 24099, 24100, 24101, 24104, 24105, 24106, 24107, 24108, 24111, 24112, 24114, 24115, 24116, 24117, 24118, 24121, 24122, 24126, 24127, 24128, 24129, 24131, 24134, 24135, 24136, 24137, 24138, 24139, 24141, 24142, 24143, 24144, 24145, 24146, 24147, 24150, 24151, 24152, 24153, 24154, 24156, 24157, 24159, 24160, 24163, 24164, 24165, 24166, 24167, 24168, 24169, 24170, 24171, 24172, 24173, 24174, 24175, 24176, 24177, 24181, 24183, 24185, 24190, 24193, 24194, 24195, 24197, 24200, 24201, 24204, 24205, 24206, 24210, 24216, 24219, 24221, 24225, 24226, 24227, 24228, 24232, 24233, 24234, 24235, 24236, 24238, 24239, 24240, 24241, 24242, 24244, 24250, 24251, 24252, 24253, 24255, 24256, 24257, 24258, 24259, 24260, 24261, 24262, 24263, 24264, 24267, 24268, 24269, 24270, 24271, 24272, 24276, 24277, 24279, 24280, 24281, 24282, 24284, 24285, 24286, 24287, 24288, 24289, 24290, 24291, 24292, 24293, 24294, 24295, 24297, 24299, 24300, 24301, 24302, 24303, 24304, 24305, 24306, 24307, 24309, 24312, 24313, 24315, 24316, 24317, 24325, 24326, 24327, 24329, 24332, 24333, 24334, 24336, 24338, 24340, 24342, 24345, 24346, 24348, 24349, 24350, 24353, 24354, 24355, 24356, 24360, 24363, 24364, 24366, 24368, 24370, 24371, 24372, 24373, 24374, 24375, 24376, 24379, 24381, 24382, 24383, 24385, 24386, 24387, 24388, 24389, 24390, 24391, 24392, 24393, 24394, 24395, 24396, 24397, 24398, 24399, 24401, 24404, 24409, 24410, 24411, 24412, 24414, 24415, 24416, 24419, 24421, 24423, 24424, 24427, 24430, 24431, 24434, 24436, 24437, 24438, 24440, 24442, 24445, 24446, 24447, 24451, 24454, 24461, 24462, 24463, 24465, 24467, 24468, 24470, 24474, 24475, 24477, 24478, 24479, 24480, 24482, 24483, 24484, 24485, 24486, 24487, 24489, 24491, 24492, 24495, 24496, 24497, 24498, 24499, 24500, 24502, 24504, 24505, 24506, 24507, 24510, 24511, 24512, 24513, 24514, 24519, 24520, 24522, 24523, 24526, 24531, 24532, 24533, 24538, 24539, 24540, 24542, 24543, 24546, 24547, 24549, 24550, 24552, 24553, 24556, 24559, 24560, 24562, 24563, 24564, 24566, 24567, 24569, 24570, 24572, 24583, 24584, 24585, 24587, 24588, 24592, 24593, 24595, 24599, 24600, 24602, 24606, 24607, 24610, 24611, 24612, 24620, 24621, 24622, 24624, 24625, 24626, 24627, 24628, 24630, 24631, 24632, 24633, 24634, 24637, 24638, 24640, 24644, 24645, 24646, 24647, 24648, 24649, 24650, 24652, 24654, 24655, 24657, 24659, 24660, 24662, 24663, 24664, 24667, 24668, 24670, 24671, 24672, 24673, 24677, 24678, 24686, 24689, 24690, 24692, 24693, 24695, 24702, 24704, 24705, 24706, 24709, 24710, 24711, 24712, 24714, 24715, 24718, 24719, 24720, 24721, 24723, 24725, 24727, 24728, 24729, 24732, 24734, 24737, 24738, 24740, 24741, 24743, 24745, 24746, 24750, 24752, 24755, 24757, 24758, 24759, 24761, 24762, 24765, 24766, 24767, 24768, 24769, 24770, 24771, 24772, 24775, 24776, 24777, 24780, 24781, 24782, 24783, 24784, 24786, 24787, 24788, 24790, 24791, 24793, 24795, 24798, 24801, 24802, 24803, 24804, 24805, 24810, 24817, 24818, 24821, 24823, 24824, 24827, 24828, 24829, 24830, 24831, 24834, 24835, 24836, 24837, 24839, 24842, 24843, 24844, 24848, 24849, 24850, 24851, 24852, 24854, 24855, 24856, 24857, 24859, 24860, 24861, 24862, 24865, 24866, 24869, 24872, 24873, 24874, 24876, 24877, 24878, 24879, 24880, 24881, 24882, 24883, 24884, 24885, 24886, 24887, 24888, 24889, 24890, 24891, 24892, 24893, 24894, 24896, 24897, 24898, 24899, 24900, 24901, 24902, 24903, 24905, 24907, 24909, 24911, 24912, 24914, 24915, 24916, 24918, 24919, 24920, 24921, 24922, 24923, 24924, 24926, 24927, 24928, 24929, 24931, 24932, 24933, 24934, 24937, 24938, 24939, 24940, 24941, 24942, 24943, 24945, 24946, 24947, 24948, 24950, 24952, 24953, 24954, 24955, 24956, 24957, 24958, 24959, 24960, 24961, 24962, 24963, 24964, 24965, 24966, 24967, 24968, 24969, 24970, 24972, 24973, 24975, 24976, 24977, 24978, 24979, 24981, 24982, 24983, 24984, 24985, 24986, 24987, 24988, 24990, 24991, 24992, 24993, 24994, 24995, 24996, 24997, 24998, 25002, 25003, 25005, 25006, 25007, 25008, 25009, 25010, 25011, 25012, 25013, 25014, 25016, 25017, 25018, 25019, 25020, 25021, 25023, 25024, 25025, 25027, 25028, 25029, 25030, 25031, 25033, 25036, 25037, 25038, 25039, 25040, 25043, 25045, 25046, 25047, 25048, 25049, 25050, 25051, 25052, 25053, 25054, 25055, 25056, 25057, 25058, 25059, 25060, 25061, 25063, 25064, 25065, 25066, 25067, 25068, 25069, 25070, 25071, 25072, 25073, 25074, 25075, 25076, 25078, 25079, 25080, 25081, 25082, 25083, 25084, 25085, 25086, 25088, 25089, 25090, 25091, 25092, 25093, 25095, 25097, 25107, 25108, 25113, 25116, 25117, 25118, 25120, 25123, 25126, 25127, 25128, 25129, 25131, 25133, 25135, 25136, 25137, 25138, 25141, 25142, 25144, 25145, 25146, 25147, 25148, 25154, 25156, 25157, 25158, 25162, 25167, 25168, 25173, 25174, 25175, 25177, 25178, 25180, 25181, 25182, 25183, 25184, 25185, 25186, 25188, 25189, 25192, 25201, 25202, 25204, 25205, 25207, 25208, 25210, 25211, 25213, 25217, 25218, 25219, 25221, 25222, 25223, 25224, 25227, 25228, 25229, 25230, 25231, 25232, 25236, 25241, 25244, 25245, 25246, 25251, 25254, 25255, 25257, 25258, 25261, 25262, 25263, 25264, 25266, 25267, 25268, 25270, 25271, 25272, 25274, 25278, 25280, 25281, 25283, 25291, 25295, 25297, 25301, 25309, 25310, 25312, 25313, 25316, 25322, 25323, 25328, 25330, 25333, 25336, 25337, 25338, 25339, 25344, 25347, 25348, 25349, 25350, 25354, 25355, 25356, 25357, 25359, 25360, 25362, 25363, 25364, 25365, 25367, 25368, 25369, 25372, 25382, 25383, 25385, 25388, 25389, 25390, 25392, 25393, 25395, 25396, 25397, 25398, 25399, 25400, 25403, 25404, 25406, 25407, 25408, 25409, 25412, 25415, 25416, 25418, 25425, 25426, 25427, 25428, 25430, 25431, 25432, 25433, 25434, 25435, 25436, 25437, 25440, 25444, 25445, 25446, 25448, 25450, 25451, 25452, 25455, 25456, 25458, 25459, 25460, 25461, 25464, 25465, 25468, 25469, 25470, 25471, 25473, 25475, 25476, 25477, 25478, 25483, 25485, 25489, 25491, 25492, 25493, 25495, 25497, 25498, 25499, 25500, 25501, 25502, 25503, 25505, 25508, 25510, 25515, 25519, 25521, 25522, 25525, 25526, 25529, 25531, 25533, 25535, 25536, 25537, 25538, 25539, 25541, 25543, 25544, 25546, 25547, 25548, 25553, 25555, 25556, 25557, 25559, 25560, 25561, 25562, 25563, 25564, 25565, 25567, 25570, 25572, 25573, 25574, 25575, 25576, 25579, 25580, 25582, 25583, 25584, 25585, 25587, 25589, 25591, 25593, 25594, 25595, 25596, 25598, 25603, 25604, 25606, 25607, 25608, 25609, 25610, 25613, 25614, 25617, 25618, 25621, 25622, 25623, 25624, 25625, 25626, 25629, 25631, 25634, 25635, 25636, 25637, 25639, 25640, 25641, 25643, 25646, 25647, 25648, 25649, 25650, 25651, 25653, 25654, 25655, 25656, 25657, 25659, 25660, 25662, 25664, 25666, 25667, 25673, 25675, 25676, 25677, 25678, 25679, 25680, 25681, 25683, 25685, 25686, 25687, 25689, 25690, 25691, 25692, 25693, 25695, 25696, 25697, 25698, 25699, 25700, 25701, 25702, 25704, 25706, 25707, 25708, 25710, 25711, 25712, 25713, 25714, 25715, 25716, 25717, 25718, 25719, 25723, 25724, 25725, 25726, 25727, 25728, 25729, 25731, 25734, 25736, 25737, 25738, 25739, 25740, 25741, 25742, 25743, 25744, 25747, 25748, 25751, 25752, 25754, 25755, 25756, 25757, 25759, 25760, 25761, 25762, 25763, 25765, 25766, 25767, 25768, 25770, 25771, 25775, 25777, 25778, 25779, 25780, 25782, 25785, 25787, 25789, 25790, 25791, 25793, 25795, 25796, 25798, 25799, 25800, 25801, 25802, 25803, 25804, 25807, 25809, 25811, 25812, 25813, 25814, 25817, 25818, 25819, 25820, 25821, 25823, 25824, 25825, 25827, 25829, 25831, 25832, 25833, 25834, 25835, 25836, 25837, 25838, 25839, 25840, 25841, 25842, 25843, 25844, 25845, 25846, 25847, 25848, 25849, 25850, 25851, 25852, 25853, 25854, 25855, 25857, 25858, 25859, 25860, 25861, 25862, 25863, 25864, 25866, 25867, 25868, 25869, 25870, 25871, 25872, 25873, 25875, 25876, 25877, 25878, 25879, 25881, 25882, 25883, 25884, 25885, 25886, 25887, 25888, 25889, 25890, 25891, 25892, 25894, 25895, 25896, 25897, 25898, 25900, 25901, 25904, 25905, 25906, 25907, 25911, 25914, 25916, 25917, 25920, 25921, 25922, 25923, 25924, 25926, 25927, 25930, 25931, 25933, 25934, 25936, 25938, 25939, 25940, 25943, 25944, 25946, 25948, 25951, 25952, 25953, 25956, 25957, 25959, 25960, 25961, 25962, 25965, 25966, 25967, 25969, 25971, 25973, 25974, 25976, 25977, 25978, 25979, 25980, 25981, 25982, 25983, 25984, 25985, 25986, 25987, 25988, 25989, 25990, 25992, 25993, 25994, 25997, 25998, 25999, 26002, 26004, 26005, 26006, 26008, 26010, 26013, 26014, 26016, 26018, 26019, 26022, 26024, 26026, 26028, 26030, 26033, 26034, 26035, 26036, 26037, 26038, 26039, 26040, 26042, 26043, 26046, 26047, 26048, 26050, 26055, 26056, 26057, 26058, 26061, 26064, 26065, 26067, 26068, 26069, 26072, 26073, 26074, 26075, 26076, 26077, 26078, 26079, 26081, 26083, 26084, 26090, 26091, 26098, 26099, 26100, 26101, 26104, 26105, 26107, 26108, 26109, 26110, 26111, 26113, 26116, 26117, 26119, 26120, 26121, 26123, 26125, 26128, 26129, 26130, 26134, 26135, 26136, 26138, 26139, 26140, 26142, 26145, 26146, 26147, 26148, 26150, 26153, 26154, 26155, 26156, 26158, 26160, 26162, 26163, 26167, 26168, 26169, 26170, 26171, 26173, 26175, 26176, 26178, 26180, 26181, 26182, 26183, 26184, 26185, 26186, 26189, 26190, 26192, 26193, 26200, 26201, 26203, 26204, 26205, 26206, 26208, 26210, 26211, 26213, 26215, 26217, 26218, 26219, 26220, 26221, 26225, 26226, 26227, 26229, 26232, 26233, 26235, 26236, 26237, 26239, 26240, 26241, 26243, 26245, 26246, 26248, 26249, 26250, 26251, 26253, 26254, 26255, 26256, 26258, 26259, 26260, 26261, 26264, 26265, 26266, 26267, 26268, 26270, 26271, 26272, 26273, 26274, 26275, 26276, 26277, 26278, 26281, 26282, 26283, 26284, 26285, 26287, 26288, 26289, 26290, 26291, 26293, 26294, 26295, 26296, 26298, 26299, 26300, 26301, 26303, 26304, 26305, 26306, 26307, 26308, 26309, 26310, 26311, 26312, 26313, 26314, 26315, 26316, 26317, 26318, 26319, 26320, 26321, 26322, 26323, 26324, 26325, 26326, 26327, 26328, 26330, 26334, 26335, 26336, 26337, 26338, 26339, 26340, 26341, 26343, 26344, 26346, 26347, 26348, 26349, 26350, 26351, 26353, 26357, 26358, 26360, 26362, 26363, 26365, 26369, 26370, 26371, 26372, 26373, 26374, 26375, 26380, 26382, 26383, 26385, 26386, 26387, 26390, 26392, 26393, 26394, 26396, 26398, 26400, 26401, 26402, 26403, 26404, 26405, 26407, 26409, 26414, 26416, 26418, 26419, 26422, 26423, 26424, 26425, 26427, 26428, 26430, 26431, 26433, 26436, 26437, 26439, 26442, 26443, 26445, 26450, 26452, 26453, 26455, 26456, 26457, 26458, 26459, 26461, 26466, 26467, 26468, 26470, 26471, 26475, 26476, 26478, 26481, 26484, 26486, 26488, 26489, 26490, 26491, 26493, 26496, 26498, 26499, 26501, 26502, 26504, 26506, 26508, 26509, 26510, 26511, 26513, 26514, 26515, 26516, 26518, 26521, 26523, 26527, 26528, 26529, 26532, 26534, 26537, 26540, 26542, 26545, 26546, 26548, 26553, 26554, 26555, 26556, 26557, 26558, 26559, 26560, 26562, 26565, 26566, 26567, 26568, 26569, 26570, 26571, 26572, 26573, 26574, 26581, 26582, 26583, 26587, 26591, 26593, 26595, 26596, 26598, 26599, 26600, 26602, 26603, 26605, 26606, 26610, 26613, 26614, 26615, 26616, 26617, 26618, 26619, 26620, 26622, 26625, 26626, 26627, 26628, 26630, 26637, 26640, 26642, 26644, 26645, 26648, 26649, 26650, 26651, 26652, 26654, 26655, 26656, 26658, 26659, 26660, 26661, 26662, 26663, 26664, 26667, 26668, 26669, 26670, 26671, 26672, 26673, 26676, 26677, 26678, 26682, 26683, 26687, 26695, 26699, 26701, 26703, 26706, 26710, 26711, 26712, 26713, 26714, 26715, 26716, 26717, 26718, 26719, 26730, 26732, 26733, 26734, 26735, 26736, 26737, 26738, 26739, 26741, 26744, 26745, 26746, 26747, 26748, 26749, 26750, 26751, 26752, 26754, 26756, 26759, 26760, 26761, 26762, 26763, 26764, 26765, 26766, 26768, 26769, 26770, 26772, 26773, 26774, 26776, 26777, 26778, 26779, 26780, 26781, 26782, 26783, 26784, 26785, 26787, 26788, 26789, 26793, 26794, 26795, 26796, 26798, 26801, 26802, 26804, 26806, 26807, 26808, 26809, 26810, 26811, 26812, 26813, 26814, 26815, 26817, 26819, 26820, 26821, 26822, 26823, 26824, 26826, 26828, 26830, 26831, 26832, 26833, 26835, 26836, 26838, 26839, 26841, 26843, 26844, 26845, 26846, 26847, 26849, 26850, 26852, 26853, 26854, 26855, 26856, 26857, 26858, 26859, 26860, 26861, 26863, 26866, 26867, 26868, 26870, 26871, 26872, 26875, 26877, 26878, 26879, 26880, 26882, 26883, 26884, 26886, 26887, 26888, 26889, 26890, 26892, 26895, 26897, 26899, 26900, 26901, 26902, 26903, 26904, 26905, 26906, 26907, 26908, 26909, 26910, 26913, 26914, 26915, 26917, 26918, 26919, 26920, 26921, 26922, 26923, 26924, 26926, 26927, 26929, 26930, 26931, 26933, 26934, 26935, 26936, 26938, 26939, 26940, 26942, 26944, 26945, 26947, 26948, 26949, 26950, 26951, 26952, 26953, 26954, 26955, 26956, 26957, 26958, 26959, 26960, 26961, 26962, 26963, 26965, 26966, 26968, 26969, 26971, 26972, 26975, 26977, 26978, 26980, 26981, 26983, 26984, 26985, 26986, 26988, 26989, 26991, 26992, 26994, 26995, 26996, 26997, 26998, 27002, 27003, 27005, 27006, 27007, 27009, 27011, 27013, 27018, 27019, 27020, 27022, 27023, 27024, 27025, 27026, 27027, 27030, 27031, 27033, 27034, 27037, 27038, 27039, 27040, 27041, 27042, 27043, 27044, 27045, 27046, 27049, 27050, 27052, 27054, 27055, 27056, 27058, 27059, 27061, 27062, 27064, 27065, 27066, 27068, 27069, 27070, 27071, 27072, 27074, 27075, 27076, 27077, 27078, 27079, 27080, 27081, 27083, 27085, 27087, 27089, 27090, 27091, 27093, 27094, 27095, 27096, 27097, 27098, 27100, 27101, 27102, 27105, 27106, 27107, 27108, 27109, 27110, 27111, 27112, 27113, 27114, 27115, 27116, 27118, 27119, 27120, 27121, 27123, 27124, 27125, 27126, 27127, 27128, 27129, 27130, 27131, 27132, 27134, 27136, 27137, 27138, 27139, 27140, 27141, 27142, 27143, 27144, 27145, 27147, 27148, 27149, 27150, 27151, 27152, 27153, 27154, 27155, 27156, 27157, 27158, 27161, 27162, 27163, 27164, 27165, 27166, 27168, 27170, 27171, 27172, 27173, 27174, 27175, 27177, 27179, 27180, 27181, 27182, 27184, 27186, 27187, 27188, 27190, 27191, 27192, 27193, 27194, 27195, 27196, 27199, 27200, 27201, 27202, 27203, 27205, 27206, 27208, 27209, 27210, 27211, 27212, 27213, 27214, 27215, 27217, 27218, 27219, 27220, 27221, 27222, 27223, 27226, 27228, 27229, 27230, 27231, 27232, 27234, 27235, 27236, 27238, 27239, 27240, 27241, 27242, 27243, 27244, 27245, 27246, 27247, 27248, 27250, 27251, 27252, 27253, 27254, 27255, 27256, 27258, 27259, 27261, 27262, 27263, 27265, 27266, 27267, 27269, 27270, 27271, 27272, 27273, 27274, 27275, 27276, 27277, 27279, 27282, 27283, 27284, 27285, 27286, 27288, 27289, 27290, 27291, 27292, 27293, 27294, 27295, 27297, 27298, 27299, 27300, 27301, 27302, 27303, 27304, 27306, 27309, 27310, 27311, 27312, 27313, 27314, 27315, 27316, 27317, 27318, 27319, 27320, 27321, 27322, 27323, 27324, 27325, 27326, 27327, 27328, 27329, 27330, 27331, 27332, 27333, 27334, 27335, 27336, 27337, 27338, 27339, 27340, 27341, 27342, 27343, 27344, 27345, 27346, 27347, 27348, 27349, 27350, 27351, 27352, 27353, 27354, 27355, 27356, 27357, 27358, 27359, 27360, 27361, 27362, 27363, 27364, 27365, 27366, 27367, 27368, 27369, 27370, 27371, 27372, 27373, 27374, 27375, 27376, 27377, 27378, 27379, 27380, 27381, 27382, 27383, 27384, 27385, 27386, 27387, 27388, 27389, 27390, 27391, 27392, 27393, 27394, 27395, 27396, 27397, 27398, 27399, 27400, 27401, 27402, 27403, 27404, 27405, 27406, 27407, 27408, 27409, 27410, 27411, 27412, 27413, 27414, 27415, 27416, 27417, 27418, 27419, 27420, 27421, 27422, 27423, 27429, 27430, 27432, 27433, 27434, 27435, 27436, 27437, 27438, 27439, 27440, 27441, 27443, 27444, 27445, 27446, 27448, 27451, 27452, 27453, 27455, 27456, 27457, 27458, 27460, 27461, 27464, 27466, 27467, 27469, 27470, 27471, 27472, 27473, 27474, 27475, 27476, 27477, 27478, 27479, 27480, 27482, 27483, 27484, 27485, 27486, 27487, 27488, 27489, 27496, 27497, 27499, 27500, 27501, 27502, 27503, 27504, 27505, 27506, 27507, 27508, 27509, 27510, 27511, 27512, 27514, 27517, 27518, 27519, 27520, 27525, 27528, 27532, 27534, 27535, 27536, 27537, 27540, 27541, 27543, 27544, 27545, 27548, 27549, 27550, 27551, 27552, 27554, 27555, 27556, 27557, 27558, 27559, 27560, 27561, 27563, 27564, 27565, 27566, 27567, 27568, 27569, 27570, 27574, 27576, 27577, 27578, 27579, 27580, 27581, 27582, 27584, 27587, 27588, 27590, 27591, 27592, 27593, 27594, 27596, 27598, 27600, 27601, 27608, 27610, 27612, 27613, 27614, 27615, 27616, 27618, 27619, 27620, 27621, 27622, 27623, 27624, 27625, 27628, 27629, 27630, 27632, 27633, 27634, 27636, 27638, 27639, 27640, 27642, 27643, 27644, 27646, 27647, 27648, 27649, 27650, 27651, 27652, 27656, 27657, 27658, 27659, 27660, 27662, 27666, 27671, 27676, 27677, 27678, 27680, 27683, 27685, 27691, 27692, 27693, 27697, 27699, 27702, 27703, 27705, 27706, 27707, 27708, 27710, 27711, 27715, 27716, 27717, 27720, 27723, 27724, 27725, 27726, 27727, 27729, 27730, 27731, 27734, 27736, 27737, 27738, 27746, 27747, 27749, 27750, 27751, 27755, 27756, 27757, 27758, 27759, 27761, 27763, 27765, 27767, 27768, 27770, 27771, 27772, 27775, 27776, 27780, 27783, 27786, 27787, 27789, 27790, 27793, 27794, 27797, 27798, 27799, 27800, 27802, 27804, 27805, 27806, 27808, 27810, 27816, 27820, 27823, 27824, 27828, 27829, 27830, 27831, 27834, 27840, 27841, 27842, 27843, 27846, 27847, 27848, 27851, 27853, 27854, 27855, 27857, 27858, 27864, 27865, 27866, 27868, 27869, 27871, 27876, 27878, 27879, 27881, 27884, 27885, 27890, 27892, 27897, 27903, 27904, 27906, 27907, 27909, 27910, 27912, 27913, 27914, 27917, 27919, 27920, 27921, 27923, 27924, 27925, 27926, 27928, 27932, 27933, 27935, 27936, 27937, 27938, 27939, 27940, 27942, 27944, 27945, 27948, 27949, 27951, 27952, 27956, 27958, 27959, 27960, 27962, 27967, 27968, 27970, 27972, 27977, 27980, 27984, 27989, 27990, 27991, 27992, 27995, 27997, 27999, 28001, 28002, 28004, 28005, 28007, 28008, 28011, 28012, 28013, 28016, 28017, 28018, 28019, 28021, 28022, 28025, 28026, 28027, 28029, 28030, 28031, 28032, 28033, 28035, 28036, 28038, 28039, 28042, 28043, 28045, 28047, 28048, 28050, 28054, 28055, 28056, 28057, 28058, 28060, 28066, 28069, 28076, 28077, 28080, 28081, 28083, 28084, 28086, 28087, 28089, 28090, 28091, 28092, 28093, 28094, 28097, 28098, 28099, 28104, 28105, 28106, 28109, 28110, 28111, 28112, 28114, 28115, 28116, 28117, 28119, 28122, 28123, 28124, 28127, 28130, 28131, 28133, 28135, 28136, 28137, 28138, 28141, 28143, 28144, 28146, 28148, 28149, 28150, 28152, 28154, 28157, 28158, 28159, 28160, 28161, 28162, 28163, 28164, 28166, 28167, 28168, 28169, 28171, 28175, 28178, 28179, 28181, 28184, 28185, 28187, 28188, 28190, 28191, 28194, 28198, 28199, 28200, 28202, 28204, 28206, 28208, 28209, 28211, 28213, 28214, 28215, 28217, 28219, 28220, 28221, 28222, 28223, 28224, 28225, 28226, 28229, 28230, 28231, 28232, 28233, 28234, 28235, 28236, 28239, 28240, 28241, 28242, 28245, 28247, 28249, 28250, 28252, 28253, 28254, 28256, 28257, 28258, 28259, 28260, 28261, 28262, 28263, 28264, 28265, 28266, 28268, 28269, 28271, 28272, 28273, 28274, 28275, 28276, 28277, 28278, 28279, 28280, 28281, 28282, 28283, 28284, 28285, 28288, 28289, 28290, 28292, 28295, 28296, 28298, 28299, 28300, 28301, 28302, 28305, 28306, 28307, 28308, 28309, 28310, 28311, 28313, 28314, 28315, 28317, 28318, 28320, 28321, 28323, 28324, 28326, 28328, 28329, 28331, 28332, 28333, 28334, 28336, 28339, 28341, 28344, 28345, 28348, 28350, 28351, 28352, 28355, 28356, 28357, 28358, 28360, 28361, 28362, 28364, 28365, 28366, 28368, 28370, 28374, 28376, 28377, 28379, 28380, 28381, 28387, 28391, 28394, 28395, 28396, 28397, 28398, 28399, 28400, 28401, 28402, 28403, 28405, 28406, 28407, 28408, 28410, 28411, 28412, 28413, 28414, 28415, 28416, 28417, 28419, 28420, 28421, 28423, 28424, 28426, 28427, 28428, 28429, 28430, 28432, 28433, 28434, 28438, 28439, 28440, 28441, 28442, 28443, 28444, 28445, 28446, 28447, 28449, 28450, 28451, 28453, 28454, 28455, 28456, 28460, 28462, 28464, 28466, 28468, 28469, 28471, 28472, 28473, 28474, 28475, 28476, 28477, 28479, 28480, 28481, 28482, 28483, 28484, 28485, 28488, 28489, 28490, 28492, 28494, 28495, 28496, 28497, 28498, 28499, 28500, 28501, 28502, 28503, 28505, 28506, 28507, 28509, 28511, 28512, 28513, 28515, 28516, 28517, 28519, 28520, 28521, 28522, 28523, 28524, 28527, 28528, 28529, 28531, 28533, 28534, 28535, 28537, 28539, 28541, 28542, 28543, 28544, 28545, 28546, 28547, 28549, 28550, 28551, 28554, 28555, 28559, 28560, 28561, 28562, 28563, 28564, 28565, 28566, 28567, 28568, 28569, 28570, 28571, 28573, 28574, 28575, 28576, 28578, 28579, 28580, 28581, 28582, 28584, 28585, 28586, 28587, 28588, 28589, 28590, 28591, 28592, 28593, 28594, 28596, 28597, 28599, 28600, 28602, 28603, 28604, 28605, 28606, 28607, 28609, 28611, 28612, 28613, 28614, 28615, 28616, 28618, 28619, 28620, 28621, 28622, 28623, 28624, 28627, 28628, 28629, 28630, 28631, 28632, 28633, 28634, 28635, 28636, 28637, 28639, 28642, 28643, 28644, 28645, 28646, 28647, 28648, 28649, 28650, 28651, 28652, 28653, 28656, 28657, 28658, 28659, 28660, 28661, 28662, 28663, 28664, 28665, 28666, 28667, 28668, 28669, 28670, 28671, 28672, 28673, 28674, 28675, 28676, 28677, 28678, 28679, 28680, 28681, 28682, 28683, 28684, 28685, 28686, 28687, 28688, 28690, 28691, 28692, 28693, 28694, 28695, 28696, 28697, 28700, 28701, 28702, 28703, 28704, 28705, 28706, 28708, 28709, 28710, 28711, 28712, 28713, 28714, 28715, 28716, 28717, 28718, 28719, 28720, 28721, 28722, 28723, 28724, 28726, 28727, 28728, 28730, 28731, 28732, 28733, 28734, 28735, 28736, 28737, 28738, 28739, 28740, 28741, 28742, 28743, 28744, 28745, 28746, 28747, 28749, 28750, 28752, 28753, 28754, 28755, 28756, 28757, 28758, 28759, 28760, 28761, 28762, 28763, 28764, 28765, 28767, 28768, 28769, 28770, 28771, 28772, 28773, 28774, 28775, 28776, 28777, 28778, 28782, 28785, 28786, 28787, 28788, 28791, 28793, 28794, 28795, 28797, 28801, 28802, 28803, 28804, 28806, 28807, 28808, 28811, 28812, 28813, 28815, 28816, 28817, 28819, 28823, 28824, 28826, 28827, 28830, 28831, 28832, 28833, 28834, 28835, 28836, 28837, 28838, 28839, 28840, 28841, 28842, 28848, 28850, 28852, 28853, 28854, 28858, 28862, 28863, 28868, 28869, 28870, 28871, 28873, 28875, 28876, 28877, 28878, 28879, 28880, 28881, 28882, 28883, 28884, 28885, 28886, 28887, 28890, 28892, 28893, 28894, 28896, 28897, 28898, 28899, 28901, 28906, 28910, 28912, 28913, 28914, 28915, 28916, 28917, 28918, 28920, 28922, 28923, 28924, 28926, 28927, 28928, 28929, 28930, 28931, 28932, 28933, 28934, 28935, 28936, 28939, 28940, 28941, 28942, 28943, 28945, 28946, 28948, 28951, 28955, 28956, 28957, 28958, 28959, 28960, 28961, 28962, 28963, 28964, 28965, 28967, 28968, 28969, 28970, 28971, 28972, 28973, 28974, 28978, 28979, 28980, 28981, 28983, 28984, 28985, 28986, 28987, 28988, 28989, 28990, 28991, 28992, 28993, 28994, 28995, 28996, 28998, 28999, 29e3, 29001, 29003, 29005, 29007, 29008, 29009, 29010, 29011, 29012, 29013, 29014, 29015, 29016, 29017, 29018, 29019, 29021, 29023, 29024, 29025, 29026, 29027, 29029, 29033, 29034, 29035, 29036, 29037, 29039, 29040, 29041, 29044, 29045, 29046, 29047, 29049, 29051, 29052, 29054, 29055, 29056, 29057, 29058, 29059, 29061, 29062, 29063, 29064, 29065, 29067, 29068, 29069, 29070, 29072, 29073, 29074, 29075, 29077, 29078, 29079, 29082, 29083, 29084, 29085, 29086, 29089, 29090, 29091, 29092, 29093, 29094, 29095, 29097, 29098, 29099, 29101, 29102, 29103, 29104, 29105, 29106, 29108, 29110, 29111, 29112, 29114, 29115, 29116, 29117, 29118, 29119, 29120, 29121, 29122, 29124, 29125, 29126, 29127, 29128, 29129, 29130, 29131, 29132, 29133, 29135, 29136, 29137, 29138, 29139, 29142, 29143, 29144, 29145, 29146, 29147, 29148, 29149, 29150, 29151, 29153, 29154, 29155, 29156, 29158, 29160, 29161, 29162, 29163, 29164, 29165, 29167, 29168, 29169, 29170, 29171, 29172, 29173, 29174, 29175, 29176, 29178, 29179, 29180, 29181, 29182, 29183, 29184, 29185, 29186, 29187, 29188, 29189, 29191, 29192, 29193, 29194, 29195, 29196, 29197, 29198, 29199, 29200, 29201, 29202, 29203, 29204, 29205, 29206, 29207, 29208, 29209, 29210, 29211, 29212, 29214, 29215, 29216, 29217, 29218, 29219, 29220, 29221, 29222, 29223, 29225, 29227, 29229, 29230, 29231, 29234, 29235, 29236, 29242, 29244, 29246, 29248, 29249, 29250, 29251, 29252, 29253, 29254, 29257, 29258, 29259, 29262, 29263, 29264, 29265, 29267, 29268, 29269, 29271, 29272, 29274, 29276, 29278, 29280, 29283, 29284, 29285, 29288, 29290, 29291, 29292, 29293, 29296, 29297, 29299, 29300, 29302, 29303, 29304, 29307, 29308, 29309, 29314, 29315, 29317, 29318, 29319, 29320, 29321, 29324, 29326, 29328, 29329, 29331, 29332, 29333, 29334, 29335, 29336, 29337, 29338, 29339, 29340, 29341, 29342, 29344, 29345, 29346, 29347, 29348, 29349, 29350, 29351, 29352, 29353, 29354, 29355, 29358, 29361, 29362, 29363, 29365, 29370, 29371, 29372, 29373, 29374, 29375, 29376, 29381, 29382, 29383, 29385, 29386, 29387, 29388, 29391, 29393, 29395, 29396, 29397, 29398, 29400, 29402, 29403, 58566, 58567, 58568, 58569, 58570, 58571, 58572, 58573, 58574, 58575, 58576, 58577, 58578, 58579, 58580, 58581, 58582, 58583, 58584, 58585, 58586, 58587, 58588, 58589, 58590, 58591, 58592, 58593, 58594, 58595, 58596, 58597, 58598, 58599, 58600, 58601, 58602, 58603, 58604, 58605, 58606, 58607, 58608, 58609, 58610, 58611, 58612, 58613, 58614, 58615, 58616, 58617, 58618, 58619, 58620, 58621, 58622, 58623, 58624, 58625, 58626, 58627, 58628, 58629, 58630, 58631, 58632, 58633, 58634, 58635, 58636, 58637, 58638, 58639, 58640, 58641, 58642, 58643, 58644, 58645, 58646, 58647, 58648, 58649, 58650, 58651, 58652, 58653, 58654, 58655, 58656, 58657, 58658, 58659, 58660, 58661, 12288, 12289, 12290, 183, 713, 711, 168, 12291, 12293, 8212, 65374, 8214, 8230, 8216, 8217, 8220, 8221, 12308, 12309, 12296, 12297, 12298, 12299, 12300, 12301, 12302, 12303, 12310, 12311, 12304, 12305, 177, 215, 247, 8758, 8743, 8744, 8721, 8719, 8746, 8745, 8712, 8759, 8730, 8869, 8741, 8736, 8978, 8857, 8747, 8750, 8801, 8780, 8776, 8765, 8733, 8800, 8814, 8815, 8804, 8805, 8734, 8757, 8756, 9794, 9792, 176, 8242, 8243, 8451, 65284, 164, 65504, 65505, 8240, 167, 8470, 9734, 9733, 9675, 9679, 9678, 9671, 9670, 9633, 9632, 9651, 9650, 8251, 8594, 8592, 8593, 8595, 12307, 58662, 58663, 58664, 58665, 58666, 58667, 58668, 58669, 58670, 58671, 58672, 58673, 58674, 58675, 58676, 58677, 58678, 58679, 58680, 58681, 58682, 58683, 58684, 58685, 58686, 58687, 58688, 58689, 58690, 58691, 58692, 58693, 58694, 58695, 58696, 58697, 58698, 58699, 58700, 58701, 58702, 58703, 58704, 58705, 58706, 58707, 58708, 58709, 58710, 58711, 58712, 58713, 58714, 58715, 58716, 58717, 58718, 58719, 58720, 58721, 58722, 58723, 58724, 58725, 58726, 58727, 58728, 58729, 58730, 58731, 58732, 58733, 58734, 58735, 58736, 58737, 58738, 58739, 58740, 58741, 58742, 58743, 58744, 58745, 58746, 58747, 58748, 58749, 58750, 58751, 58752, 58753, 58754, 58755, 58756, 58757, 8560, 8561, 8562, 8563, 8564, 8565, 8566, 8567, 8568, 8569, 59238, 59239, 59240, 59241, 59242, 59243, 9352, 9353, 9354, 9355, 9356, 9357, 9358, 9359, 9360, 9361, 9362, 9363, 9364, 9365, 9366, 9367, 9368, 9369, 9370, 9371, 9332, 9333, 9334, 9335, 9336, 9337, 9338, 9339, 9340, 9341, 9342, 9343, 9344, 9345, 9346, 9347, 9348, 9349, 9350, 9351, 9312, 9313, 9314, 9315, 9316, 9317, 9318, 9319, 9320, 9321, 8364, 59245, 12832, 12833, 12834, 12835, 12836, 12837, 12838, 12839, 12840, 12841, 59246, 59247, 8544, 8545, 8546, 8547, 8548, 8549, 8550, 8551, 8552, 8553, 8554, 8555, 59248, 59249, 58758, 58759, 58760, 58761, 58762, 58763, 58764, 58765, 58766, 58767, 58768, 58769, 58770, 58771, 58772, 58773, 58774, 58775, 58776, 58777, 58778, 58779, 58780, 58781, 58782, 58783, 58784, 58785, 58786, 58787, 58788, 58789, 58790, 58791, 58792, 58793, 58794, 58795, 58796, 58797, 58798, 58799, 58800, 58801, 58802, 58803, 58804, 58805, 58806, 58807, 58808, 58809, 58810, 58811, 58812, 58813, 58814, 58815, 58816, 58817, 58818, 58819, 58820, 58821, 58822, 58823, 58824, 58825, 58826, 58827, 58828, 58829, 58830, 58831, 58832, 58833, 58834, 58835, 58836, 58837, 58838, 58839, 58840, 58841, 58842, 58843, 58844, 58845, 58846, 58847, 58848, 58849, 58850, 58851, 58852, 12288, 65281, 65282, 65283, 65509, 65285, 65286, 65287, 65288, 65289, 65290, 65291, 65292, 65293, 65294, 65295, 65296, 65297, 65298, 65299, 65300, 65301, 65302, 65303, 65304, 65305, 65306, 65307, 65308, 65309, 65310, 65311, 65312, 65313, 65314, 65315, 65316, 65317, 65318, 65319, 65320, 65321, 65322, 65323, 65324, 65325, 65326, 65327, 65328, 65329, 65330, 65331, 65332, 65333, 65334, 65335, 65336, 65337, 65338, 65339, 65340, 65341, 65342, 65343, 65344, 65345, 65346, 65347, 65348, 65349, 65350, 65351, 65352, 65353, 65354, 65355, 65356, 65357, 65358, 65359, 65360, 65361, 65362, 65363, 65364, 65365, 65366, 65367, 65368, 65369, 65370, 65371, 65372, 65373, 65507, 58854, 58855, 58856, 58857, 58858, 58859, 58860, 58861, 58862, 58863, 58864, 58865, 58866, 58867, 58868, 58869, 58870, 58871, 58872, 58873, 58874, 58875, 58876, 58877, 58878, 58879, 58880, 58881, 58882, 58883, 58884, 58885, 58886, 58887, 58888, 58889, 58890, 58891, 58892, 58893, 58894, 58895, 58896, 58897, 58898, 58899, 58900, 58901, 58902, 58903, 58904, 58905, 58906, 58907, 58908, 58909, 58910, 58911, 58912, 58913, 58914, 58915, 58916, 58917, 58918, 58919, 58920, 58921, 58922, 58923, 58924, 58925, 58926, 58927, 58928, 58929, 58930, 58931, 58932, 58933, 58934, 58935, 58936, 58937, 58938, 58939, 58940, 58941, 58942, 58943, 58944, 58945, 58946, 58947, 58948, 58949, 12353, 12354, 12355, 12356, 12357, 12358, 12359, 12360, 12361, 12362, 12363, 12364, 12365, 12366, 12367, 12368, 12369, 12370, 12371, 12372, 12373, 12374, 12375, 12376, 12377, 12378, 12379, 12380, 12381, 12382, 12383, 12384, 12385, 12386, 12387, 12388, 12389, 12390, 12391, 12392, 12393, 12394, 12395, 12396, 12397, 12398, 12399, 12400, 12401, 12402, 12403, 12404, 12405, 12406, 12407, 12408, 12409, 12410, 12411, 12412, 12413, 12414, 12415, 12416, 12417, 12418, 12419, 12420, 12421, 12422, 12423, 12424, 12425, 12426, 12427, 12428, 12429, 12430, 12431, 12432, 12433, 12434, 12435, 59250, 59251, 59252, 59253, 59254, 59255, 59256, 59257, 59258, 59259, 59260, 58950, 58951, 58952, 58953, 58954, 58955, 58956, 58957, 58958, 58959, 58960, 58961, 58962, 58963, 58964, 58965, 58966, 58967, 58968, 58969, 58970, 58971, 58972, 58973, 58974, 58975, 58976, 58977, 58978, 58979, 58980, 58981, 58982, 58983, 58984, 58985, 58986, 58987, 58988, 58989, 58990, 58991, 58992, 58993, 58994, 58995, 58996, 58997, 58998, 58999, 59e3, 59001, 59002, 59003, 59004, 59005, 59006, 59007, 59008, 59009, 59010, 59011, 59012, 59013, 59014, 59015, 59016, 59017, 59018, 59019, 59020, 59021, 59022, 59023, 59024, 59025, 59026, 59027, 59028, 59029, 59030, 59031, 59032, 59033, 59034, 59035, 59036, 59037, 59038, 59039, 59040, 59041, 59042, 59043, 59044, 59045, 12449, 12450, 12451, 12452, 12453, 12454, 12455, 12456, 12457, 12458, 12459, 12460, 12461, 12462, 12463, 12464, 12465, 12466, 12467, 12468, 12469, 12470, 12471, 12472, 12473, 12474, 12475, 12476, 12477, 12478, 12479, 12480, 12481, 12482, 12483, 12484, 12485, 12486, 12487, 12488, 12489, 12490, 12491, 12492, 12493, 12494, 12495, 12496, 12497, 12498, 12499, 12500, 12501, 12502, 12503, 12504, 12505, 12506, 12507, 12508, 12509, 12510, 12511, 12512, 12513, 12514, 12515, 12516, 12517, 12518, 12519, 12520, 12521, 12522, 12523, 12524, 12525, 12526, 12527, 12528, 12529, 12530, 12531, 12532, 12533, 12534, 59261, 59262, 59263, 59264, 59265, 59266, 59267, 59268, 59046, 59047, 59048, 59049, 59050, 59051, 59052, 59053, 59054, 59055, 59056, 59057, 59058, 59059, 59060, 59061, 59062, 59063, 59064, 59065, 59066, 59067, 59068, 59069, 59070, 59071, 59072, 59073, 59074, 59075, 59076, 59077, 59078, 59079, 59080, 59081, 59082, 59083, 59084, 59085, 59086, 59087, 59088, 59089, 59090, 59091, 59092, 59093, 59094, 59095, 59096, 59097, 59098, 59099, 59100, 59101, 59102, 59103, 59104, 59105, 59106, 59107, 59108, 59109, 59110, 59111, 59112, 59113, 59114, 59115, 59116, 59117, 59118, 59119, 59120, 59121, 59122, 59123, 59124, 59125, 59126, 59127, 59128, 59129, 59130, 59131, 59132, 59133, 59134, 59135, 59136, 59137, 59138, 59139, 59140, 59141, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 931, 932, 933, 934, 935, 936, 937, 59269, 59270, 59271, 59272, 59273, 59274, 59275, 59276, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 963, 964, 965, 966, 967, 968, 969, 59277, 59278, 59279, 59280, 59281, 59282, 59283, 65077, 65078, 65081, 65082, 65087, 65088, 65085, 65086, 65089, 65090, 65091, 65092, 59284, 59285, 65083, 65084, 65079, 65080, 65073, 59286, 65075, 65076, 59287, 59288, 59289, 59290, 59291, 59292, 59293, 59294, 59295, 59142, 59143, 59144, 59145, 59146, 59147, 59148, 59149, 59150, 59151, 59152, 59153, 59154, 59155, 59156, 59157, 59158, 59159, 59160, 59161, 59162, 59163, 59164, 59165, 59166, 59167, 59168, 59169, 59170, 59171, 59172, 59173, 59174, 59175, 59176, 59177, 59178, 59179, 59180, 59181, 59182, 59183, 59184, 59185, 59186, 59187, 59188, 59189, 59190, 59191, 59192, 59193, 59194, 59195, 59196, 59197, 59198, 59199, 59200, 59201, 59202, 59203, 59204, 59205, 59206, 59207, 59208, 59209, 59210, 59211, 59212, 59213, 59214, 59215, 59216, 59217, 59218, 59219, 59220, 59221, 59222, 59223, 59224, 59225, 59226, 59227, 59228, 59229, 59230, 59231, 59232, 59233, 59234, 59235, 59236, 59237, 1040, 1041, 1042, 1043, 1044, 1045, 1025, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 59296, 59297, 59298, 59299, 59300, 59301, 59302, 59303, 59304, 59305, 59306, 59307, 59308, 59309, 59310, 1072, 1073, 1074, 1075, 1076, 1077, 1105, 1078, 1079, 1080, 1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 59311, 59312, 59313, 59314, 59315, 59316, 59317, 59318, 59319, 59320, 59321, 59322, 59323, 714, 715, 729, 8211, 8213, 8229, 8245, 8453, 8457, 8598, 8599, 8600, 8601, 8725, 8735, 8739, 8786, 8806, 8807, 8895, 9552, 9553, 9554, 9555, 9556, 9557, 9558, 9559, 9560, 9561, 9562, 9563, 9564, 9565, 9566, 9567, 9568, 9569, 9570, 9571, 9572, 9573, 9574, 9575, 9576, 9577, 9578, 9579, 9580, 9581, 9582, 9583, 9584, 9585, 9586, 9587, 9601, 9602, 9603, 9604, 9605, 9606, 9607, 9608, 9609, 9610, 9611, 9612, 9613, 9614, 9615, 9619, 9620, 9621, 9660, 9661, 9698, 9699, 9700, 9701, 9737, 8853, 12306, 12317, 12318, 59324, 59325, 59326, 59327, 59328, 59329, 59330, 59331, 59332, 59333, 59334, 257, 225, 462, 224, 275, 233, 283, 232, 299, 237, 464, 236, 333, 243, 466, 242, 363, 250, 468, 249, 470, 472, 474, 476, 252, 234, 593, 7743, 324, 328, 505, 609, 59337, 59338, 59339, 59340, 12549, 12550, 12551, 12552, 12553, 12554, 12555, 12556, 12557, 12558, 12559, 12560, 12561, 12562, 12563, 12564, 12565, 12566, 12567, 12568, 12569, 12570, 12571, 12572, 12573, 12574, 12575, 12576, 12577, 12578, 12579, 12580, 12581, 12582, 12583, 12584, 12585, 59341, 59342, 59343, 59344, 59345, 59346, 59347, 59348, 59349, 59350, 59351, 59352, 59353, 59354, 59355, 59356, 59357, 59358, 59359, 59360, 59361, 12321, 12322, 12323, 12324, 12325, 12326, 12327, 12328, 12329, 12963, 13198, 13199, 13212, 13213, 13214, 13217, 13252, 13262, 13265, 13266, 13269, 65072, 65506, 65508, 59362, 8481, 12849, 59363, 8208, 59364, 59365, 59366, 12540, 12443, 12444, 12541, 12542, 12294, 12445, 12446, 65097, 65098, 65099, 65100, 65101, 65102, 65103, 65104, 65105, 65106, 65108, 65109, 65110, 65111, 65113, 65114, 65115, 65116, 65117, 65118, 65119, 65120, 65121, 65122, 65123, 65124, 65125, 65126, 65128, 65129, 65130, 65131, 12350, 12272, 12273, 12274, 12275, 12276, 12277, 12278, 12279, 12280, 12281, 12282, 12283, 12295, 59380, 59381, 59382, 59383, 59384, 59385, 59386, 59387, 59388, 59389, 59390, 59391, 59392, 9472, 9473, 9474, 9475, 9476, 9477, 9478, 9479, 9480, 9481, 9482, 9483, 9484, 9485, 9486, 9487, 9488, 9489, 9490, 9491, 9492, 9493, 9494, 9495, 9496, 9497, 9498, 9499, 9500, 9501, 9502, 9503, 9504, 9505, 9506, 9507, 9508, 9509, 9510, 9511, 9512, 9513, 9514, 9515, 9516, 9517, 9518, 9519, 9520, 9521, 9522, 9523, 9524, 9525, 9526, 9527, 9528, 9529, 9530, 9531, 9532, 9533, 9534, 9535, 9536, 9537, 9538, 9539, 9540, 9541, 9542, 9543, 9544, 9545, 9546, 9547, 59393, 59394, 59395, 59396, 59397, 59398, 59399, 59400, 59401, 59402, 59403, 59404, 59405, 59406, 59407, 29404, 29405, 29407, 29410, 29411, 29412, 29413, 29414, 29415, 29418, 29419, 29429, 29430, 29433, 29437, 29438, 29439, 29440, 29442, 29444, 29445, 29446, 29447, 29448, 29449, 29451, 29452, 29453, 29455, 29456, 29457, 29458, 29460, 29464, 29465, 29466, 29471, 29472, 29475, 29476, 29478, 29479, 29480, 29485, 29487, 29488, 29490, 29491, 29493, 29494, 29498, 29499, 29500, 29501, 29504, 29505, 29506, 29507, 29508, 29509, 29510, 29511, 29512, 29513, 29514, 29515, 29516, 29518, 29519, 29521, 29523, 29524, 29525, 29526, 29528, 29529, 29530, 29531, 29532, 29533, 29534, 29535, 29537, 29538, 29539, 29540, 29541, 29542, 29543, 29544, 29545, 29546, 29547, 29550, 29552, 29553, 57344, 57345, 57346, 57347, 57348, 57349, 57350, 57351, 57352, 57353, 57354, 57355, 57356, 57357, 57358, 57359, 57360, 57361, 57362, 57363, 57364, 57365, 57366, 57367, 57368, 57369, 57370, 57371, 57372, 57373, 57374, 57375, 57376, 57377, 57378, 57379, 57380, 57381, 57382, 57383, 57384, 57385, 57386, 57387, 57388, 57389, 57390, 57391, 57392, 57393, 57394, 57395, 57396, 57397, 57398, 57399, 57400, 57401, 57402, 57403, 57404, 57405, 57406, 57407, 57408, 57409, 57410, 57411, 57412, 57413, 57414, 57415, 57416, 57417, 57418, 57419, 57420, 57421, 57422, 57423, 57424, 57425, 57426, 57427, 57428, 57429, 57430, 57431, 57432, 57433, 57434, 57435, 57436, 57437, 29554, 29555, 29556, 29557, 29558, 29559, 29560, 29561, 29562, 29563, 29564, 29565, 29567, 29568, 29569, 29570, 29571, 29573, 29574, 29576, 29578, 29580, 29581, 29583, 29584, 29586, 29587, 29588, 29589, 29591, 29592, 29593, 29594, 29596, 29597, 29598, 29600, 29601, 29603, 29604, 29605, 29606, 29607, 29608, 29610, 29612, 29613, 29617, 29620, 29621, 29622, 29624, 29625, 29628, 29629, 29630, 29631, 29633, 29635, 29636, 29637, 29638, 29639, 29643, 29644, 29646, 29650, 29651, 29652, 29653, 29654, 29655, 29656, 29658, 29659, 29660, 29661, 29663, 29665, 29666, 29667, 29668, 29670, 29672, 29674, 29675, 29676, 29678, 29679, 29680, 29681, 29683, 29684, 29685, 29686, 29687, 57438, 57439, 57440, 57441, 57442, 57443, 57444, 57445, 57446, 57447, 57448, 57449, 57450, 57451, 57452, 57453, 57454, 57455, 57456, 57457, 57458, 57459, 57460, 57461, 57462, 57463, 57464, 57465, 57466, 57467, 57468, 57469, 57470, 57471, 57472, 57473, 57474, 57475, 57476, 57477, 57478, 57479, 57480, 57481, 57482, 57483, 57484, 57485, 57486, 57487, 57488, 57489, 57490, 57491, 57492, 57493, 57494, 57495, 57496, 57497, 57498, 57499, 57500, 57501, 57502, 57503, 57504, 57505, 57506, 57507, 57508, 57509, 57510, 57511, 57512, 57513, 57514, 57515, 57516, 57517, 57518, 57519, 57520, 57521, 57522, 57523, 57524, 57525, 57526, 57527, 57528, 57529, 57530, 57531, 29688, 29689, 29690, 29691, 29692, 29693, 29694, 29695, 29696, 29697, 29698, 29700, 29703, 29704, 29707, 29708, 29709, 29710, 29713, 29714, 29715, 29716, 29717, 29718, 29719, 29720, 29721, 29724, 29725, 29726, 29727, 29728, 29729, 29731, 29732, 29735, 29737, 29739, 29741, 29743, 29745, 29746, 29751, 29752, 29753, 29754, 29755, 29757, 29758, 29759, 29760, 29762, 29763, 29764, 29765, 29766, 29767, 29768, 29769, 29770, 29771, 29772, 29773, 29774, 29775, 29776, 29777, 29778, 29779, 29780, 29782, 29784, 29789, 29792, 29793, 29794, 29795, 29796, 29797, 29798, 29799, 29800, 29801, 29802, 29803, 29804, 29806, 29807, 29809, 29810, 29811, 29812, 29813, 29816, 29817, 29818, 57532, 57533, 57534, 57535, 57536, 57537, 57538, 57539, 57540, 57541, 57542, 57543, 57544, 57545, 57546, 57547, 57548, 57549, 57550, 57551, 57552, 57553, 57554, 57555, 57556, 57557, 57558, 57559, 57560, 57561, 57562, 57563, 57564, 57565, 57566, 57567, 57568, 57569, 57570, 57571, 57572, 57573, 57574, 57575, 57576, 57577, 57578, 57579, 57580, 57581, 57582, 57583, 57584, 57585, 57586, 57587, 57588, 57589, 57590, 57591, 57592, 57593, 57594, 57595, 57596, 57597, 57598, 57599, 57600, 57601, 57602, 57603, 57604, 57605, 57606, 57607, 57608, 57609, 57610, 57611, 57612, 57613, 57614, 57615, 57616, 57617, 57618, 57619, 57620, 57621, 57622, 57623, 57624, 57625, 29819, 29820, 29821, 29823, 29826, 29828, 29829, 29830, 29832, 29833, 29834, 29836, 29837, 29839, 29841, 29842, 29843, 29844, 29845, 29846, 29847, 29848, 29849, 29850, 29851, 29853, 29855, 29856, 29857, 29858, 29859, 29860, 29861, 29862, 29866, 29867, 29868, 29869, 29870, 29871, 29872, 29873, 29874, 29875, 29876, 29877, 29878, 29879, 29880, 29881, 29883, 29884, 29885, 29886, 29887, 29888, 29889, 29890, 29891, 29892, 29893, 29894, 29895, 29896, 29897, 29898, 29899, 29900, 29901, 29902, 29903, 29904, 29905, 29907, 29908, 29909, 29910, 29911, 29912, 29913, 29914, 29915, 29917, 29919, 29921, 29925, 29927, 29928, 29929, 29930, 29931, 29932, 29933, 29936, 29937, 29938, 57626, 57627, 57628, 57629, 57630, 57631, 57632, 57633, 57634, 57635, 57636, 57637, 57638, 57639, 57640, 57641, 57642, 57643, 57644, 57645, 57646, 57647, 57648, 57649, 57650, 57651, 57652, 57653, 57654, 57655, 57656, 57657, 57658, 57659, 57660, 57661, 57662, 57663, 57664, 57665, 57666, 57667, 57668, 57669, 57670, 57671, 57672, 57673, 57674, 57675, 57676, 57677, 57678, 57679, 57680, 57681, 57682, 57683, 57684, 57685, 57686, 57687, 57688, 57689, 57690, 57691, 57692, 57693, 57694, 57695, 57696, 57697, 57698, 57699, 57700, 57701, 57702, 57703, 57704, 57705, 57706, 57707, 57708, 57709, 57710, 57711, 57712, 57713, 57714, 57715, 57716, 57717, 57718, 57719, 29939, 29941, 29944, 29945, 29946, 29947, 29948, 29949, 29950, 29952, 29953, 29954, 29955, 29957, 29958, 29959, 29960, 29961, 29962, 29963, 29964, 29966, 29968, 29970, 29972, 29973, 29974, 29975, 29979, 29981, 29982, 29984, 29985, 29986, 29987, 29988, 29990, 29991, 29994, 29998, 30004, 30006, 30009, 30012, 30013, 30015, 30017, 30018, 30019, 30020, 30022, 30023, 30025, 30026, 30029, 30032, 30033, 30034, 30035, 30037, 30038, 30039, 30040, 30045, 30046, 30047, 30048, 30049, 30050, 30051, 30052, 30055, 30056, 30057, 30059, 30060, 30061, 30062, 30063, 30064, 30065, 30067, 30069, 30070, 30071, 30074, 30075, 30076, 30077, 30078, 30080, 30081, 30082, 30084, 30085, 30087, 57720, 57721, 57722, 57723, 57724, 57725, 57726, 57727, 57728, 57729, 57730, 57731, 57732, 57733, 57734, 57735, 57736, 57737, 57738, 57739, 57740, 57741, 57742, 57743, 57744, 57745, 57746, 57747, 57748, 57749, 57750, 57751, 57752, 57753, 57754, 57755, 57756, 57757, 57758, 57759, 57760, 57761, 57762, 57763, 57764, 57765, 57766, 57767, 57768, 57769, 57770, 57771, 57772, 57773, 57774, 57775, 57776, 57777, 57778, 57779, 57780, 57781, 57782, 57783, 57784, 57785, 57786, 57787, 57788, 57789, 57790, 57791, 57792, 57793, 57794, 57795, 57796, 57797, 57798, 57799, 57800, 57801, 57802, 57803, 57804, 57805, 57806, 57807, 57808, 57809, 57810, 57811, 57812, 57813, 30088, 30089, 30090, 30092, 30093, 30094, 30096, 30099, 30101, 30104, 30107, 30108, 30110, 30114, 30118, 30119, 30120, 30121, 30122, 30125, 30134, 30135, 30138, 30139, 30143, 30144, 30145, 30150, 30155, 30156, 30158, 30159, 30160, 30161, 30163, 30167, 30169, 30170, 30172, 30173, 30175, 30176, 30177, 30181, 30185, 30188, 30189, 30190, 30191, 30194, 30195, 30197, 30198, 30199, 30200, 30202, 30203, 30205, 30206, 30210, 30212, 30214, 30215, 30216, 30217, 30219, 30221, 30222, 30223, 30225, 30226, 30227, 30228, 30230, 30234, 30236, 30237, 30238, 30241, 30243, 30247, 30248, 30252, 30254, 30255, 30257, 30258, 30262, 30263, 30265, 30266, 30267, 30269, 30273, 30274, 30276, 57814, 57815, 57816, 57817, 57818, 57819, 57820, 57821, 57822, 57823, 57824, 57825, 57826, 57827, 57828, 57829, 57830, 57831, 57832, 57833, 57834, 57835, 57836, 57837, 57838, 57839, 57840, 57841, 57842, 57843, 57844, 57845, 57846, 57847, 57848, 57849, 57850, 57851, 57852, 57853, 57854, 57855, 57856, 57857, 57858, 57859, 57860, 57861, 57862, 57863, 57864, 57865, 57866, 57867, 57868, 57869, 57870, 57871, 57872, 57873, 57874, 57875, 57876, 57877, 57878, 57879, 57880, 57881, 57882, 57883, 57884, 57885, 57886, 57887, 57888, 57889, 57890, 57891, 57892, 57893, 57894, 57895, 57896, 57897, 57898, 57899, 57900, 57901, 57902, 57903, 57904, 57905, 57906, 57907, 30277, 30278, 30279, 30280, 30281, 30282, 30283, 30286, 30287, 30288, 30289, 30290, 30291, 30293, 30295, 30296, 30297, 30298, 30299, 30301, 30303, 30304, 30305, 30306, 30308, 30309, 30310, 30311, 30312, 30313, 30314, 30316, 30317, 30318, 30320, 30321, 30322, 30323, 30324, 30325, 30326, 30327, 30329, 30330, 30332, 30335, 30336, 30337, 30339, 30341, 30345, 30346, 30348, 30349, 30351, 30352, 30354, 30356, 30357, 30359, 30360, 30362, 30363, 30364, 30365, 30366, 30367, 30368, 30369, 30370, 30371, 30373, 30374, 30375, 30376, 30377, 30378, 30379, 30380, 30381, 30383, 30384, 30387, 30389, 30390, 30391, 30392, 30393, 30394, 30395, 30396, 30397, 30398, 30400, 30401, 30403, 21834, 38463, 22467, 25384, 21710, 21769, 21696, 30353, 30284, 34108, 30702, 33406, 30861, 29233, 38552, 38797, 27688, 23433, 20474, 25353, 26263, 23736, 33018, 26696, 32942, 26114, 30414, 20985, 25942, 29100, 32753, 34948, 20658, 22885, 25034, 28595, 33453, 25420, 25170, 21485, 21543, 31494, 20843, 30116, 24052, 25300, 36299, 38774, 25226, 32793, 22365, 38712, 32610, 29240, 30333, 26575, 30334, 25670, 20336, 36133, 25308, 31255, 26001, 29677, 25644, 25203, 33324, 39041, 26495, 29256, 25198, 25292, 20276, 29923, 21322, 21150, 32458, 37030, 24110, 26758, 27036, 33152, 32465, 26834, 30917, 34444, 38225, 20621, 35876, 33502, 32990, 21253, 35090, 21093, 30404, 30407, 30409, 30411, 30412, 30419, 30421, 30425, 30426, 30428, 30429, 30430, 30432, 30433, 30434, 30435, 30436, 30438, 30439, 30440, 30441, 30442, 30443, 30444, 30445, 30448, 30451, 30453, 30454, 30455, 30458, 30459, 30461, 30463, 30464, 30466, 30467, 30469, 30470, 30474, 30476, 30478, 30479, 30480, 30481, 30482, 30483, 30484, 30485, 30486, 30487, 30488, 30491, 30492, 30493, 30494, 30497, 30499, 30500, 30501, 30503, 30506, 30507, 30508, 30510, 30512, 30513, 30514, 30515, 30516, 30521, 30523, 30525, 30526, 30527, 30530, 30532, 30533, 30534, 30536, 30537, 30538, 30539, 30540, 30541, 30542, 30543, 30546, 30547, 30548, 30549, 30550, 30551, 30552, 30553, 30556, 34180, 38649, 20445, 22561, 39281, 23453, 25265, 25253, 26292, 35961, 40077, 29190, 26479, 30865, 24754, 21329, 21271, 36744, 32972, 36125, 38049, 20493, 29384, 22791, 24811, 28953, 34987, 22868, 33519, 26412, 31528, 23849, 32503, 29997, 27893, 36454, 36856, 36924, 40763, 27604, 37145, 31508, 24444, 30887, 34006, 34109, 27605, 27609, 27606, 24065, 24199, 30201, 38381, 25949, 24330, 24517, 36767, 22721, 33218, 36991, 38491, 38829, 36793, 32534, 36140, 25153, 20415, 21464, 21342, 36776, 36777, 36779, 36941, 26631, 24426, 33176, 34920, 40150, 24971, 21035, 30250, 24428, 25996, 28626, 28392, 23486, 25672, 20853, 20912, 26564, 19993, 31177, 39292, 28851, 30557, 30558, 30559, 30560, 30564, 30567, 30569, 30570, 30573, 30574, 30575, 30576, 30577, 30578, 30579, 30580, 30581, 30582, 30583, 30584, 30586, 30587, 30588, 30593, 30594, 30595, 30598, 30599, 30600, 30601, 30602, 30603, 30607, 30608, 30611, 30612, 30613, 30614, 30615, 30616, 30617, 30618, 30619, 30620, 30621, 30622, 30625, 30627, 30628, 30630, 30632, 30635, 30637, 30638, 30639, 30641, 30642, 30644, 30646, 30647, 30648, 30649, 30650, 30652, 30654, 30656, 30657, 30658, 30659, 30660, 30661, 30662, 30663, 30664, 30665, 30666, 30667, 30668, 30670, 30671, 30672, 30673, 30674, 30675, 30676, 30677, 30678, 30680, 30681, 30682, 30685, 30686, 30687, 30688, 30689, 30692, 30149, 24182, 29627, 33760, 25773, 25320, 38069, 27874, 21338, 21187, 25615, 38082, 31636, 20271, 24091, 33334, 33046, 33162, 28196, 27850, 39539, 25429, 21340, 21754, 34917, 22496, 19981, 24067, 27493, 31807, 37096, 24598, 25830, 29468, 35009, 26448, 25165, 36130, 30572, 36393, 37319, 24425, 33756, 34081, 39184, 21442, 34453, 27531, 24813, 24808, 28799, 33485, 33329, 20179, 27815, 34255, 25805, 31961, 27133, 26361, 33609, 21397, 31574, 20391, 20876, 27979, 23618, 36461, 25554, 21449, 33580, 33590, 26597, 30900, 25661, 23519, 23700, 24046, 35815, 25286, 26612, 35962, 25600, 25530, 34633, 39307, 35863, 32544, 38130, 20135, 38416, 39076, 26124, 29462, 30694, 30696, 30698, 30703, 30704, 30705, 30706, 30708, 30709, 30711, 30713, 30714, 30715, 30716, 30723, 30724, 30725, 30726, 30727, 30728, 30730, 30731, 30734, 30735, 30736, 30739, 30741, 30745, 30747, 30750, 30752, 30753, 30754, 30756, 30760, 30762, 30763, 30766, 30767, 30769, 30770, 30771, 30773, 30774, 30781, 30783, 30785, 30786, 30787, 30788, 30790, 30792, 30793, 30794, 30795, 30797, 30799, 30801, 30803, 30804, 30808, 30809, 30810, 30811, 30812, 30814, 30815, 30816, 30817, 30818, 30819, 30820, 30821, 30822, 30823, 30824, 30825, 30831, 30832, 30833, 30834, 30835, 30836, 30837, 30838, 30840, 30841, 30842, 30843, 30845, 30846, 30847, 30848, 30849, 30850, 30851, 22330, 23581, 24120, 38271, 20607, 32928, 21378, 25950, 30021, 21809, 20513, 36229, 25220, 38046, 26397, 22066, 28526, 24034, 21557, 28818, 36710, 25199, 25764, 25507, 24443, 28552, 37108, 33251, 36784, 23576, 26216, 24561, 27785, 38472, 36225, 34924, 25745, 31216, 22478, 27225, 25104, 21576, 20056, 31243, 24809, 28548, 35802, 25215, 36894, 39563, 31204, 21507, 30196, 25345, 21273, 27744, 36831, 24347, 39536, 32827, 40831, 20360, 23610, 36196, 32709, 26021, 28861, 20805, 20914, 34411, 23815, 23456, 25277, 37228, 30068, 36364, 31264, 24833, 31609, 20167, 32504, 30597, 19985, 33261, 21021, 20986, 27249, 21416, 36487, 38148, 38607, 28353, 38500, 26970, 30852, 30853, 30854, 30856, 30858, 30859, 30863, 30864, 30866, 30868, 30869, 30870, 30873, 30877, 30878, 30880, 30882, 30884, 30886, 30888, 30889, 30890, 30891, 30892, 30893, 30894, 30895, 30901, 30902, 30903, 30904, 30906, 30907, 30908, 30909, 30911, 30912, 30914, 30915, 30916, 30918, 30919, 30920, 30924, 30925, 30926, 30927, 30929, 30930, 30931, 30934, 30935, 30936, 30938, 30939, 30940, 30941, 30942, 30943, 30944, 30945, 30946, 30947, 30948, 30949, 30950, 30951, 30953, 30954, 30955, 30957, 30958, 30959, 30960, 30961, 30963, 30965, 30966, 30968, 30969, 30971, 30972, 30973, 30974, 30975, 30976, 30978, 30979, 30980, 30982, 30983, 30984, 30985, 30986, 30987, 30988, 30784, 20648, 30679, 25616, 35302, 22788, 25571, 24029, 31359, 26941, 20256, 33337, 21912, 20018, 30126, 31383, 24162, 24202, 38383, 21019, 21561, 28810, 25462, 38180, 22402, 26149, 26943, 37255, 21767, 28147, 32431, 34850, 25139, 32496, 30133, 33576, 30913, 38604, 36766, 24904, 29943, 35789, 27492, 21050, 36176, 27425, 32874, 33905, 22257, 21254, 20174, 19995, 20945, 31895, 37259, 31751, 20419, 36479, 31713, 31388, 25703, 23828, 20652, 33030, 30209, 31929, 28140, 32736, 26449, 23384, 23544, 30923, 25774, 25619, 25514, 25387, 38169, 25645, 36798, 31572, 30249, 25171, 22823, 21574, 27513, 20643, 25140, 24102, 27526, 20195, 36151, 34955, 24453, 36910, 30989, 30990, 30991, 30992, 30993, 30994, 30996, 30997, 30998, 30999, 31e3, 31001, 31002, 31003, 31004, 31005, 31007, 31008, 31009, 31010, 31011, 31013, 31014, 31015, 31016, 31017, 31018, 31019, 31020, 31021, 31022, 31023, 31024, 31025, 31026, 31027, 31029, 31030, 31031, 31032, 31033, 31037, 31039, 31042, 31043, 31044, 31045, 31047, 31050, 31051, 31052, 31053, 31054, 31055, 31056, 31057, 31058, 31060, 31061, 31064, 31065, 31073, 31075, 31076, 31078, 31081, 31082, 31083, 31084, 31086, 31088, 31089, 31090, 31091, 31092, 31093, 31094, 31097, 31099, 31100, 31101, 31102, 31103, 31106, 31107, 31110, 31111, 31112, 31113, 31115, 31116, 31117, 31118, 31120, 31121, 31122, 24608, 32829, 25285, 20025, 21333, 37112, 25528, 32966, 26086, 27694, 20294, 24814, 28129, 35806, 24377, 34507, 24403, 25377, 20826, 33633, 26723, 20992, 25443, 36424, 20498, 23707, 31095, 23548, 21040, 31291, 24764, 36947, 30423, 24503, 24471, 30340, 36460, 28783, 30331, 31561, 30634, 20979, 37011, 22564, 20302, 28404, 36842, 25932, 31515, 29380, 28068, 32735, 23265, 25269, 24213, 22320, 33922, 31532, 24093, 24351, 36882, 32532, 39072, 25474, 28359, 30872, 28857, 20856, 38747, 22443, 30005, 20291, 30008, 24215, 24806, 22880, 28096, 27583, 30857, 21500, 38613, 20939, 20993, 25481, 21514, 38035, 35843, 36300, 29241, 30879, 34678, 36845, 35853, 21472, 31123, 31124, 31125, 31126, 31127, 31128, 31129, 31131, 31132, 31133, 31134, 31135, 31136, 31137, 31138, 31139, 31140, 31141, 31142, 31144, 31145, 31146, 31147, 31148, 31149, 31150, 31151, 31152, 31153, 31154, 31156, 31157, 31158, 31159, 31160, 31164, 31167, 31170, 31172, 31173, 31175, 31176, 31178, 31180, 31182, 31183, 31184, 31187, 31188, 31190, 31191, 31193, 31194, 31195, 31196, 31197, 31198, 31200, 31201, 31202, 31205, 31208, 31210, 31212, 31214, 31217, 31218, 31219, 31220, 31221, 31222, 31223, 31225, 31226, 31228, 31230, 31231, 31233, 31236, 31237, 31239, 31240, 31241, 31242, 31244, 31247, 31248, 31249, 31250, 31251, 31253, 31254, 31256, 31257, 31259, 31260, 19969, 30447, 21486, 38025, 39030, 40718, 38189, 23450, 35746, 20002, 19996, 20908, 33891, 25026, 21160, 26635, 20375, 24683, 20923, 27934, 20828, 25238, 26007, 38497, 35910, 36887, 30168, 37117, 30563, 27602, 29322, 29420, 35835, 22581, 30585, 36172, 26460, 38208, 32922, 24230, 28193, 22930, 31471, 30701, 38203, 27573, 26029, 32526, 22534, 20817, 38431, 23545, 22697, 21544, 36466, 25958, 39039, 22244, 38045, 30462, 36929, 25479, 21702, 22810, 22842, 22427, 36530, 26421, 36346, 33333, 21057, 24816, 22549, 34558, 23784, 40517, 20420, 39069, 35769, 23077, 24694, 21380, 25212, 36943, 37122, 39295, 24681, 32780, 20799, 32819, 23572, 39285, 27953, 20108, 31261, 31263, 31265, 31266, 31268, 31269, 31270, 31271, 31272, 31273, 31274, 31275, 31276, 31277, 31278, 31279, 31280, 31281, 31282, 31284, 31285, 31286, 31288, 31290, 31294, 31296, 31297, 31298, 31299, 31300, 31301, 31303, 31304, 31305, 31306, 31307, 31308, 31309, 31310, 31311, 31312, 31314, 31315, 31316, 31317, 31318, 31320, 31321, 31322, 31323, 31324, 31325, 31326, 31327, 31328, 31329, 31330, 31331, 31332, 31333, 31334, 31335, 31336, 31337, 31338, 31339, 31340, 31341, 31342, 31343, 31345, 31346, 31347, 31349, 31355, 31356, 31357, 31358, 31362, 31365, 31367, 31369, 31370, 31371, 31372, 31374, 31375, 31376, 31379, 31380, 31385, 31386, 31387, 31390, 31393, 31394, 36144, 21457, 32602, 31567, 20240, 20047, 38400, 27861, 29648, 34281, 24070, 30058, 32763, 27146, 30718, 38034, 32321, 20961, 28902, 21453, 36820, 33539, 36137, 29359, 39277, 27867, 22346, 33459, 26041, 32938, 25151, 38450, 22952, 20223, 35775, 32442, 25918, 33778, 38750, 21857, 39134, 32933, 21290, 35837, 21536, 32954, 24223, 27832, 36153, 33452, 37210, 21545, 27675, 20998, 32439, 22367, 28954, 27774, 31881, 22859, 20221, 24575, 24868, 31914, 20016, 23553, 26539, 34562, 23792, 38155, 39118, 30127, 28925, 36898, 20911, 32541, 35773, 22857, 20964, 20315, 21542, 22827, 25975, 32932, 23413, 25206, 25282, 36752, 24133, 27679, 31526, 20239, 20440, 26381, 31395, 31396, 31399, 31401, 31402, 31403, 31406, 31407, 31408, 31409, 31410, 31412, 31413, 31414, 31415, 31416, 31417, 31418, 31419, 31420, 31421, 31422, 31424, 31425, 31426, 31427, 31428, 31429, 31430, 31431, 31432, 31433, 31434, 31436, 31437, 31438, 31439, 31440, 31441, 31442, 31443, 31444, 31445, 31447, 31448, 31450, 31451, 31452, 31453, 31457, 31458, 31460, 31463, 31464, 31465, 31466, 31467, 31468, 31470, 31472, 31473, 31474, 31475, 31476, 31477, 31478, 31479, 31480, 31483, 31484, 31486, 31488, 31489, 31490, 31493, 31495, 31497, 31500, 31501, 31502, 31504, 31506, 31507, 31510, 31511, 31512, 31514, 31516, 31517, 31519, 31521, 31522, 31523, 31527, 31529, 31533, 28014, 28074, 31119, 34993, 24343, 29995, 25242, 36741, 20463, 37340, 26023, 33071, 33105, 24220, 33104, 36212, 21103, 35206, 36171, 22797, 20613, 20184, 38428, 29238, 33145, 36127, 23500, 35747, 38468, 22919, 32538, 21648, 22134, 22030, 35813, 25913, 27010, 38041, 30422, 28297, 24178, 29976, 26438, 26577, 31487, 32925, 36214, 24863, 31174, 25954, 36195, 20872, 21018, 38050, 32568, 32923, 32434, 23703, 28207, 26464, 31705, 30347, 39640, 33167, 32660, 31957, 25630, 38224, 31295, 21578, 21733, 27468, 25601, 25096, 40509, 33011, 30105, 21106, 38761, 33883, 26684, 34532, 38401, 38548, 38124, 20010, 21508, 32473, 26681, 36319, 32789, 26356, 24218, 32697, 31535, 31536, 31538, 31540, 31541, 31542, 31543, 31545, 31547, 31549, 31551, 31552, 31553, 31554, 31555, 31556, 31558, 31560, 31562, 31565, 31566, 31571, 31573, 31575, 31577, 31580, 31582, 31583, 31585, 31587, 31588, 31589, 31590, 31591, 31592, 31593, 31594, 31595, 31596, 31597, 31599, 31600, 31603, 31604, 31606, 31608, 31610, 31612, 31613, 31615, 31617, 31618, 31619, 31620, 31622, 31623, 31624, 31625, 31626, 31627, 31628, 31630, 31631, 31633, 31634, 31635, 31638, 31640, 31641, 31642, 31643, 31646, 31647, 31648, 31651, 31652, 31653, 31662, 31663, 31664, 31666, 31667, 31669, 31670, 31671, 31673, 31674, 31675, 31676, 31677, 31678, 31679, 31680, 31682, 31683, 31684, 22466, 32831, 26775, 24037, 25915, 21151, 24685, 40858, 20379, 36524, 20844, 23467, 24339, 24041, 27742, 25329, 36129, 20849, 38057, 21246, 27807, 33503, 29399, 22434, 26500, 36141, 22815, 36764, 33735, 21653, 31629, 20272, 27837, 23396, 22993, 40723, 21476, 34506, 39592, 35895, 32929, 25925, 39038, 22266, 38599, 21038, 29916, 21072, 23521, 25346, 35074, 20054, 25296, 24618, 26874, 20851, 23448, 20896, 35266, 31649, 39302, 32592, 24815, 28748, 36143, 20809, 24191, 36891, 29808, 35268, 22317, 30789, 24402, 40863, 38394, 36712, 39740, 35809, 30328, 26690, 26588, 36330, 36149, 21053, 36746, 28378, 26829, 38149, 37101, 22269, 26524, 35065, 36807, 21704, 31685, 31688, 31689, 31690, 31691, 31693, 31694, 31695, 31696, 31698, 31700, 31701, 31702, 31703, 31704, 31707, 31708, 31710, 31711, 31712, 31714, 31715, 31716, 31719, 31720, 31721, 31723, 31724, 31725, 31727, 31728, 31730, 31731, 31732, 31733, 31734, 31736, 31737, 31738, 31739, 31741, 31743, 31744, 31745, 31746, 31747, 31748, 31749, 31750, 31752, 31753, 31754, 31757, 31758, 31760, 31761, 31762, 31763, 31764, 31765, 31767, 31768, 31769, 31770, 31771, 31772, 31773, 31774, 31776, 31777, 31778, 31779, 31780, 31781, 31784, 31785, 31787, 31788, 31789, 31790, 31791, 31792, 31793, 31794, 31795, 31796, 31797, 31798, 31799, 31801, 31802, 31803, 31804, 31805, 31806, 31810, 39608, 23401, 28023, 27686, 20133, 23475, 39559, 37219, 25e3, 37039, 38889, 21547, 28085, 23506, 20989, 21898, 32597, 32752, 25788, 25421, 26097, 25022, 24717, 28938, 27735, 27721, 22831, 26477, 33322, 22741, 22158, 35946, 27627, 37085, 22909, 32791, 21495, 28009, 21621, 21917, 33655, 33743, 26680, 31166, 21644, 20309, 21512, 30418, 35977, 38402, 27827, 28088, 36203, 35088, 40548, 36154, 22079, 40657, 30165, 24456, 29408, 24680, 21756, 20136, 27178, 34913, 24658, 36720, 21700, 28888, 34425, 40511, 27946, 23439, 24344, 32418, 21897, 20399, 29492, 21564, 21402, 20505, 21518, 21628, 20046, 24573, 29786, 22774, 33899, 32993, 34676, 29392, 31946, 28246, 31811, 31812, 31813, 31814, 31815, 31816, 31817, 31818, 31819, 31820, 31822, 31823, 31824, 31825, 31826, 31827, 31828, 31829, 31830, 31831, 31832, 31833, 31834, 31835, 31836, 31837, 31838, 31839, 31840, 31841, 31842, 31843, 31844, 31845, 31846, 31847, 31848, 31849, 31850, 31851, 31852, 31853, 31854, 31855, 31856, 31857, 31858, 31861, 31862, 31863, 31864, 31865, 31866, 31870, 31871, 31872, 31873, 31874, 31875, 31876, 31877, 31878, 31879, 31880, 31882, 31883, 31884, 31885, 31886, 31887, 31888, 31891, 31892, 31894, 31897, 31898, 31899, 31904, 31905, 31907, 31910, 31911, 31912, 31913, 31915, 31916, 31917, 31919, 31920, 31924, 31925, 31926, 31927, 31928, 31930, 31931, 24359, 34382, 21804, 25252, 20114, 27818, 25143, 33457, 21719, 21326, 29502, 28369, 30011, 21010, 21270, 35805, 27088, 24458, 24576, 28142, 22351, 27426, 29615, 26707, 36824, 32531, 25442, 24739, 21796, 30186, 35938, 28949, 28067, 23462, 24187, 33618, 24908, 40644, 30970, 34647, 31783, 30343, 20976, 24822, 29004, 26179, 24140, 24653, 35854, 28784, 25381, 36745, 24509, 24674, 34516, 22238, 27585, 24724, 24935, 21321, 24800, 26214, 36159, 31229, 20250, 28905, 27719, 35763, 35826, 32472, 33636, 26127, 23130, 39746, 27985, 28151, 35905, 27963, 20249, 28779, 33719, 25110, 24785, 38669, 36135, 31096, 20987, 22334, 22522, 26426, 30072, 31293, 31215, 31637, 31935, 31936, 31938, 31939, 31940, 31942, 31945, 31947, 31950, 31951, 31952, 31953, 31954, 31955, 31956, 31960, 31962, 31963, 31965, 31966, 31969, 31970, 31971, 31972, 31973, 31974, 31975, 31977, 31978, 31979, 31980, 31981, 31982, 31984, 31985, 31986, 31987, 31988, 31989, 31990, 31991, 31993, 31994, 31996, 31997, 31998, 31999, 32e3, 32001, 32002, 32003, 32004, 32005, 32006, 32007, 32008, 32009, 32011, 32012, 32013, 32014, 32015, 32016, 32017, 32018, 32019, 32020, 32021, 32022, 32023, 32024, 32025, 32026, 32027, 32028, 32029, 32030, 32031, 32033, 32035, 32036, 32037, 32038, 32040, 32041, 32042, 32044, 32045, 32046, 32048, 32049, 32050, 32051, 32052, 32053, 32054, 32908, 39269, 36857, 28608, 35749, 40481, 23020, 32489, 32521, 21513, 26497, 26840, 36753, 31821, 38598, 21450, 24613, 30142, 27762, 21363, 23241, 32423, 25380, 20960, 33034, 24049, 34015, 25216, 20864, 23395, 20238, 31085, 21058, 24760, 27982, 23492, 23490, 35745, 35760, 26082, 24524, 38469, 22931, 32487, 32426, 22025, 26551, 22841, 20339, 23478, 21152, 33626, 39050, 36158, 30002, 38078, 20551, 31292, 20215, 26550, 39550, 23233, 27516, 30417, 22362, 23574, 31546, 38388, 29006, 20860, 32937, 33392, 22904, 32516, 33575, 26816, 26604, 30897, 30839, 25315, 25441, 31616, 20461, 21098, 20943, 33616, 27099, 37492, 36341, 36145, 35265, 38190, 31661, 20214, 32055, 32056, 32057, 32058, 32059, 32060, 32061, 32062, 32063, 32064, 32065, 32066, 32067, 32068, 32069, 32070, 32071, 32072, 32073, 32074, 32075, 32076, 32077, 32078, 32079, 32080, 32081, 32082, 32083, 32084, 32085, 32086, 32087, 32088, 32089, 32090, 32091, 32092, 32093, 32094, 32095, 32096, 32097, 32098, 32099, 32100, 32101, 32102, 32103, 32104, 32105, 32106, 32107, 32108, 32109, 32111, 32112, 32113, 32114, 32115, 32116, 32117, 32118, 32120, 32121, 32122, 32123, 32124, 32125, 32126, 32127, 32128, 32129, 32130, 32131, 32132, 32133, 32134, 32135, 32136, 32137, 32138, 32139, 32140, 32141, 32142, 32143, 32144, 32145, 32146, 32147, 32148, 32149, 32150, 32151, 32152, 20581, 33328, 21073, 39279, 28176, 28293, 28071, 24314, 20725, 23004, 23558, 27974, 27743, 30086, 33931, 26728, 22870, 35762, 21280, 37233, 38477, 34121, 26898, 30977, 28966, 33014, 20132, 37066, 27975, 39556, 23047, 22204, 25605, 38128, 30699, 20389, 33050, 29409, 35282, 39290, 32564, 32478, 21119, 25945, 37237, 36735, 36739, 21483, 31382, 25581, 25509, 30342, 31224, 34903, 38454, 25130, 21163, 33410, 26708, 26480, 25463, 30571, 31469, 27905, 32467, 35299, 22992, 25106, 34249, 33445, 30028, 20511, 20171, 30117, 35819, 23626, 24062, 31563, 26020, 37329, 20170, 27941, 35167, 32039, 38182, 20165, 35880, 36827, 38771, 26187, 31105, 36817, 28908, 28024, 32153, 32154, 32155, 32156, 32157, 32158, 32159, 32160, 32161, 32162, 32163, 32164, 32165, 32167, 32168, 32169, 32170, 32171, 32172, 32173, 32175, 32176, 32177, 32178, 32179, 32180, 32181, 32182, 32183, 32184, 32185, 32186, 32187, 32188, 32189, 32190, 32191, 32192, 32193, 32194, 32195, 32196, 32197, 32198, 32199, 32200, 32201, 32202, 32203, 32204, 32205, 32206, 32207, 32208, 32209, 32210, 32211, 32212, 32213, 32214, 32215, 32216, 32217, 32218, 32219, 32220, 32221, 32222, 32223, 32224, 32225, 32226, 32227, 32228, 32229, 32230, 32231, 32232, 32233, 32234, 32235, 32236, 32237, 32238, 32239, 32240, 32241, 32242, 32243, 32244, 32245, 32246, 32247, 32248, 32249, 32250, 23613, 21170, 33606, 20834, 33550, 30555, 26230, 40120, 20140, 24778, 31934, 31923, 32463, 20117, 35686, 26223, 39048, 38745, 22659, 25964, 38236, 24452, 30153, 38742, 31455, 31454, 20928, 28847, 31384, 25578, 31350, 32416, 29590, 38893, 20037, 28792, 20061, 37202, 21417, 25937, 26087, 33276, 33285, 21646, 23601, 30106, 38816, 25304, 29401, 30141, 23621, 39545, 33738, 23616, 21632, 30697, 20030, 27822, 32858, 25298, 25454, 24040, 20855, 36317, 36382, 38191, 20465, 21477, 24807, 28844, 21095, 25424, 40515, 23071, 20518, 30519, 21367, 32482, 25733, 25899, 25225, 25496, 20500, 29237, 35273, 20915, 35776, 32477, 22343, 33740, 38055, 20891, 21531, 23803, 32251, 32252, 32253, 32254, 32255, 32256, 32257, 32258, 32259, 32260, 32261, 32262, 32263, 32264, 32265, 32266, 32267, 32268, 32269, 32270, 32271, 32272, 32273, 32274, 32275, 32276, 32277, 32278, 32279, 32280, 32281, 32282, 32283, 32284, 32285, 32286, 32287, 32288, 32289, 32290, 32291, 32292, 32293, 32294, 32295, 32296, 32297, 32298, 32299, 32300, 32301, 32302, 32303, 32304, 32305, 32306, 32307, 32308, 32309, 32310, 32311, 32312, 32313, 32314, 32316, 32317, 32318, 32319, 32320, 32322, 32323, 32324, 32325, 32326, 32328, 32329, 32330, 32331, 32332, 32333, 32334, 32335, 32336, 32337, 32338, 32339, 32340, 32341, 32342, 32343, 32344, 32345, 32346, 32347, 32348, 32349, 20426, 31459, 27994, 37089, 39567, 21888, 21654, 21345, 21679, 24320, 25577, 26999, 20975, 24936, 21002, 22570, 21208, 22350, 30733, 30475, 24247, 24951, 31968, 25179, 25239, 20130, 28821, 32771, 25335, 28900, 38752, 22391, 33499, 26607, 26869, 30933, 39063, 31185, 22771, 21683, 21487, 28212, 20811, 21051, 23458, 35838, 32943, 21827, 22438, 24691, 22353, 21549, 31354, 24656, 23380, 25511, 25248, 21475, 25187, 23495, 26543, 21741, 31391, 33510, 37239, 24211, 35044, 22840, 22446, 25358, 36328, 33007, 22359, 31607, 20393, 24555, 23485, 27454, 21281, 31568, 29378, 26694, 30719, 30518, 26103, 20917, 20111, 30420, 23743, 31397, 33909, 22862, 39745, 20608, 32350, 32351, 32352, 32353, 32354, 32355, 32356, 32357, 32358, 32359, 32360, 32361, 32362, 32363, 32364, 32365, 32366, 32367, 32368, 32369, 32370, 32371, 32372, 32373, 32374, 32375, 32376, 32377, 32378, 32379, 32380, 32381, 32382, 32383, 32384, 32385, 32387, 32388, 32389, 32390, 32391, 32392, 32393, 32394, 32395, 32396, 32397, 32398, 32399, 32400, 32401, 32402, 32403, 32404, 32405, 32406, 32407, 32408, 32409, 32410, 32412, 32413, 32414, 32430, 32436, 32443, 32444, 32470, 32484, 32492, 32505, 32522, 32528, 32542, 32567, 32569, 32571, 32572, 32573, 32574, 32575, 32576, 32577, 32579, 32582, 32583, 32584, 32585, 32586, 32587, 32588, 32589, 32590, 32591, 32594, 32595, 39304, 24871, 28291, 22372, 26118, 25414, 22256, 25324, 25193, 24275, 38420, 22403, 25289, 21895, 34593, 33098, 36771, 21862, 33713, 26469, 36182, 34013, 23146, 26639, 25318, 31726, 38417, 20848, 28572, 35888, 25597, 35272, 25042, 32518, 28866, 28389, 29701, 27028, 29436, 24266, 37070, 26391, 28010, 25438, 21171, 29282, 32769, 20332, 23013, 37226, 28889, 28061, 21202, 20048, 38647, 38253, 34174, 30922, 32047, 20769, 22418, 25794, 32907, 31867, 27882, 26865, 26974, 20919, 21400, 26792, 29313, 40654, 31729, 29432, 31163, 28435, 29702, 26446, 37324, 40100, 31036, 33673, 33620, 21519, 26647, 20029, 21385, 21169, 30782, 21382, 21033, 20616, 20363, 20432, 32598, 32601, 32603, 32604, 32605, 32606, 32608, 32611, 32612, 32613, 32614, 32615, 32619, 32620, 32621, 32623, 32624, 32627, 32629, 32630, 32631, 32632, 32634, 32635, 32636, 32637, 32639, 32640, 32642, 32643, 32644, 32645, 32646, 32647, 32648, 32649, 32651, 32653, 32655, 32656, 32657, 32658, 32659, 32661, 32662, 32663, 32664, 32665, 32667, 32668, 32672, 32674, 32675, 32677, 32678, 32680, 32681, 32682, 32683, 32684, 32685, 32686, 32689, 32691, 32692, 32693, 32694, 32695, 32698, 32699, 32702, 32704, 32706, 32707, 32708, 32710, 32711, 32712, 32713, 32715, 32717, 32719, 32720, 32721, 32722, 32723, 32726, 32727, 32729, 32730, 32731, 32732, 32733, 32734, 32738, 32739, 30178, 31435, 31890, 27813, 38582, 21147, 29827, 21737, 20457, 32852, 33714, 36830, 38256, 24265, 24604, 28063, 24088, 25947, 33080, 38142, 24651, 28860, 32451, 31918, 20937, 26753, 31921, 33391, 20004, 36742, 37327, 26238, 20142, 35845, 25769, 32842, 20698, 30103, 29134, 23525, 36797, 28518, 20102, 25730, 38243, 24278, 26009, 21015, 35010, 28872, 21155, 29454, 29747, 26519, 30967, 38678, 20020, 37051, 40158, 28107, 20955, 36161, 21533, 25294, 29618, 33777, 38646, 40836, 38083, 20278, 32666, 20940, 28789, 38517, 23725, 39046, 21478, 20196, 28316, 29705, 27060, 30827, 39311, 30041, 21016, 30244, 27969, 26611, 20845, 40857, 32843, 21657, 31548, 31423, 32740, 32743, 32744, 32746, 32747, 32748, 32749, 32751, 32754, 32756, 32757, 32758, 32759, 32760, 32761, 32762, 32765, 32766, 32767, 32770, 32775, 32776, 32777, 32778, 32782, 32783, 32785, 32787, 32794, 32795, 32797, 32798, 32799, 32801, 32803, 32804, 32811, 32812, 32813, 32814, 32815, 32816, 32818, 32820, 32825, 32826, 32828, 32830, 32832, 32833, 32836, 32837, 32839, 32840, 32841, 32846, 32847, 32848, 32849, 32851, 32853, 32854, 32855, 32857, 32859, 32860, 32861, 32862, 32863, 32864, 32865, 32866, 32867, 32868, 32869, 32870, 32871, 32872, 32875, 32876, 32877, 32878, 32879, 32880, 32882, 32883, 32884, 32885, 32886, 32887, 32888, 32889, 32890, 32891, 32892, 32893, 38534, 22404, 25314, 38471, 27004, 23044, 25602, 31699, 28431, 38475, 33446, 21346, 39045, 24208, 28809, 25523, 21348, 34383, 40065, 40595, 30860, 38706, 36335, 36162, 40575, 28510, 31108, 24405, 38470, 25134, 39540, 21525, 38109, 20387, 26053, 23653, 23649, 32533, 34385, 27695, 24459, 29575, 28388, 32511, 23782, 25371, 23402, 28390, 21365, 20081, 25504, 30053, 25249, 36718, 20262, 20177, 27814, 32438, 35770, 33821, 34746, 32599, 36923, 38179, 31657, 39585, 35064, 33853, 27931, 39558, 32476, 22920, 40635, 29595, 30721, 34434, 39532, 39554, 22043, 21527, 22475, 20080, 40614, 21334, 36808, 33033, 30610, 39314, 34542, 28385, 34067, 26364, 24930, 28459, 32894, 32897, 32898, 32901, 32904, 32906, 32909, 32910, 32911, 32912, 32913, 32914, 32916, 32917, 32919, 32921, 32926, 32931, 32934, 32935, 32936, 32940, 32944, 32947, 32949, 32950, 32952, 32953, 32955, 32965, 32967, 32968, 32969, 32970, 32971, 32975, 32976, 32977, 32978, 32979, 32980, 32981, 32984, 32991, 32992, 32994, 32995, 32998, 33006, 33013, 33015, 33017, 33019, 33022, 33023, 33024, 33025, 33027, 33028, 33029, 33031, 33032, 33035, 33036, 33045, 33047, 33049, 33051, 33052, 33053, 33055, 33056, 33057, 33058, 33059, 33060, 33061, 33062, 33063, 33064, 33065, 33066, 33067, 33069, 33070, 33072, 33075, 33076, 33077, 33079, 33081, 33082, 33083, 33084, 33085, 33087, 35881, 33426, 33579, 30450, 27667, 24537, 33725, 29483, 33541, 38170, 27611, 30683, 38086, 21359, 33538, 20882, 24125, 35980, 36152, 20040, 29611, 26522, 26757, 37238, 38665, 29028, 27809, 30473, 23186, 38209, 27599, 32654, 26151, 23504, 22969, 23194, 38376, 38391, 20204, 33804, 33945, 27308, 30431, 38192, 29467, 26790, 23391, 30511, 37274, 38753, 31964, 36855, 35868, 24357, 31859, 31192, 35269, 27852, 34588, 23494, 24130, 26825, 30496, 32501, 20885, 20813, 21193, 23081, 32517, 38754, 33495, 25551, 30596, 34256, 31186, 28218, 24217, 22937, 34065, 28781, 27665, 25279, 30399, 25935, 24751, 38397, 26126, 34719, 40483, 38125, 21517, 21629, 35884, 25720, 33088, 33089, 33090, 33091, 33092, 33093, 33095, 33097, 33101, 33102, 33103, 33106, 33110, 33111, 33112, 33115, 33116, 33117, 33118, 33119, 33121, 33122, 33123, 33124, 33126, 33128, 33130, 33131, 33132, 33135, 33138, 33139, 33141, 33142, 33143, 33144, 33153, 33155, 33156, 33157, 33158, 33159, 33161, 33163, 33164, 33165, 33166, 33168, 33170, 33171, 33172, 33173, 33174, 33175, 33177, 33178, 33182, 33183, 33184, 33185, 33186, 33188, 33189, 33191, 33193, 33195, 33196, 33197, 33198, 33199, 33200, 33201, 33202, 33204, 33205, 33206, 33207, 33208, 33209, 33212, 33213, 33214, 33215, 33220, 33221, 33223, 33224, 33225, 33227, 33229, 33230, 33231, 33232, 33233, 33234, 33235, 25721, 34321, 27169, 33180, 30952, 25705, 39764, 25273, 26411, 33707, 22696, 40664, 27819, 28448, 23518, 38476, 35851, 29279, 26576, 25287, 29281, 20137, 22982, 27597, 22675, 26286, 24149, 21215, 24917, 26408, 30446, 30566, 29287, 31302, 25343, 21738, 21584, 38048, 37027, 23068, 32435, 27670, 20035, 22902, 32784, 22856, 21335, 30007, 38590, 22218, 25376, 33041, 24700, 38393, 28118, 21602, 39297, 20869, 23273, 33021, 22958, 38675, 20522, 27877, 23612, 25311, 20320, 21311, 33147, 36870, 28346, 34091, 25288, 24180, 30910, 25781, 25467, 24565, 23064, 37247, 40479, 23615, 25423, 32834, 23421, 21870, 38218, 38221, 28037, 24744, 26592, 29406, 20957, 23425, 33236, 33237, 33238, 33239, 33240, 33241, 33242, 33243, 33244, 33245, 33246, 33247, 33248, 33249, 33250, 33252, 33253, 33254, 33256, 33257, 33259, 33262, 33263, 33264, 33265, 33266, 33269, 33270, 33271, 33272, 33273, 33274, 33277, 33279, 33283, 33287, 33288, 33289, 33290, 33291, 33294, 33295, 33297, 33299, 33301, 33302, 33303, 33304, 33305, 33306, 33309, 33312, 33316, 33317, 33318, 33319, 33321, 33326, 33330, 33338, 33340, 33341, 33343, 33344, 33345, 33346, 33347, 33349, 33350, 33352, 33354, 33356, 33357, 33358, 33360, 33361, 33362, 33363, 33364, 33365, 33366, 33367, 33369, 33371, 33372, 33373, 33374, 33376, 33377, 33378, 33379, 33380, 33381, 33382, 33383, 33385, 25319, 27870, 29275, 25197, 38062, 32445, 33043, 27987, 20892, 24324, 22900, 21162, 24594, 22899, 26262, 34384, 30111, 25386, 25062, 31983, 35834, 21734, 27431, 40485, 27572, 34261, 21589, 20598, 27812, 21866, 36276, 29228, 24085, 24597, 29750, 25293, 25490, 29260, 24472, 28227, 27966, 25856, 28504, 30424, 30928, 30460, 30036, 21028, 21467, 20051, 24222, 26049, 32810, 32982, 25243, 21638, 21032, 28846, 34957, 36305, 27873, 21624, 32986, 22521, 35060, 36180, 38506, 37197, 20329, 27803, 21943, 30406, 30768, 25256, 28921, 28558, 24429, 34028, 26842, 30844, 31735, 33192, 26379, 40527, 25447, 30896, 22383, 30738, 38713, 25209, 25259, 21128, 29749, 27607, 33386, 33387, 33388, 33389, 33393, 33397, 33398, 33399, 33400, 33403, 33404, 33408, 33409, 33411, 33413, 33414, 33415, 33417, 33420, 33424, 33427, 33428, 33429, 33430, 33434, 33435, 33438, 33440, 33442, 33443, 33447, 33458, 33461, 33462, 33466, 33467, 33468, 33471, 33472, 33474, 33475, 33477, 33478, 33481, 33488, 33494, 33497, 33498, 33501, 33506, 33511, 33512, 33513, 33514, 33516, 33517, 33518, 33520, 33522, 33523, 33525, 33526, 33528, 33530, 33532, 33533, 33534, 33535, 33536, 33546, 33547, 33549, 33552, 33554, 33555, 33558, 33560, 33561, 33565, 33566, 33567, 33568, 33569, 33570, 33571, 33572, 33573, 33574, 33577, 33578, 33582, 33584, 33586, 33591, 33595, 33597, 21860, 33086, 30130, 30382, 21305, 30174, 20731, 23617, 35692, 31687, 20559, 29255, 39575, 39128, 28418, 29922, 31080, 25735, 30629, 25340, 39057, 36139, 21697, 32856, 20050, 22378, 33529, 33805, 24179, 20973, 29942, 35780, 23631, 22369, 27900, 39047, 23110, 30772, 39748, 36843, 31893, 21078, 25169, 38138, 20166, 33670, 33889, 33769, 33970, 22484, 26420, 22275, 26222, 28006, 35889, 26333, 28689, 26399, 27450, 26646, 25114, 22971, 19971, 20932, 28422, 26578, 27791, 20854, 26827, 22855, 27495, 30054, 23822, 33040, 40784, 26071, 31048, 31041, 39569, 36215, 23682, 20062, 20225, 21551, 22865, 30732, 22120, 27668, 36804, 24323, 27773, 27875, 35755, 25488, 33598, 33599, 33601, 33602, 33604, 33605, 33608, 33610, 33611, 33612, 33613, 33614, 33619, 33621, 33622, 33623, 33624, 33625, 33629, 33634, 33648, 33649, 33650, 33651, 33652, 33653, 33654, 33657, 33658, 33662, 33663, 33664, 33665, 33666, 33667, 33668, 33671, 33672, 33674, 33675, 33676, 33677, 33679, 33680, 33681, 33684, 33685, 33686, 33687, 33689, 33690, 33693, 33695, 33697, 33698, 33699, 33700, 33701, 33702, 33703, 33708, 33709, 33710, 33711, 33717, 33723, 33726, 33727, 33730, 33731, 33732, 33734, 33736, 33737, 33739, 33741, 33742, 33744, 33745, 33746, 33747, 33749, 33751, 33753, 33754, 33755, 33758, 33762, 33763, 33764, 33766, 33767, 33768, 33771, 33772, 33773, 24688, 27965, 29301, 25190, 38030, 38085, 21315, 36801, 31614, 20191, 35878, 20094, 40660, 38065, 38067, 21069, 28508, 36963, 27973, 35892, 22545, 23884, 27424, 27465, 26538, 21595, 33108, 32652, 22681, 34103, 24378, 25250, 27207, 38201, 25970, 24708, 26725, 30631, 20052, 20392, 24039, 38808, 25772, 32728, 23789, 20431, 31373, 20999, 33540, 19988, 24623, 31363, 38054, 20405, 20146, 31206, 29748, 21220, 33465, 25810, 31165, 23517, 27777, 38738, 36731, 27682, 20542, 21375, 28165, 25806, 26228, 27696, 24773, 39031, 35831, 24198, 29756, 31351, 31179, 19992, 37041, 29699, 27714, 22234, 37195, 27845, 36235, 21306, 34502, 26354, 36527, 23624, 39537, 28192, 33774, 33775, 33779, 33780, 33781, 33782, 33783, 33786, 33787, 33788, 33790, 33791, 33792, 33794, 33797, 33799, 33800, 33801, 33802, 33808, 33810, 33811, 33812, 33813, 33814, 33815, 33817, 33818, 33819, 33822, 33823, 33824, 33825, 33826, 33827, 33833, 33834, 33835, 33836, 33837, 33838, 33839, 33840, 33842, 33843, 33844, 33845, 33846, 33847, 33849, 33850, 33851, 33854, 33855, 33856, 33857, 33858, 33859, 33860, 33861, 33863, 33864, 33865, 33866, 33867, 33868, 33869, 33870, 33871, 33872, 33874, 33875, 33876, 33877, 33878, 33880, 33885, 33886, 33887, 33888, 33890, 33892, 33893, 33894, 33895, 33896, 33898, 33902, 33903, 33904, 33906, 33908, 33911, 33913, 33915, 33916, 21462, 23094, 40843, 36259, 21435, 22280, 39079, 26435, 37275, 27849, 20840, 30154, 25331, 29356, 21048, 21149, 32570, 28820, 30264, 21364, 40522, 27063, 30830, 38592, 35033, 32676, 28982, 29123, 20873, 26579, 29924, 22756, 25880, 22199, 35753, 39286, 25200, 32469, 24825, 28909, 22764, 20161, 20154, 24525, 38887, 20219, 35748, 20995, 22922, 32427, 25172, 20173, 26085, 25102, 33592, 33993, 33635, 34701, 29076, 28342, 23481, 32466, 20887, 25545, 26580, 32905, 33593, 34837, 20754, 23418, 22914, 36785, 20083, 27741, 20837, 35109, 36719, 38446, 34122, 29790, 38160, 38384, 28070, 33509, 24369, 25746, 27922, 33832, 33134, 40131, 22622, 36187, 19977, 21441, 33917, 33918, 33919, 33920, 33921, 33923, 33924, 33925, 33926, 33930, 33933, 33935, 33936, 33937, 33938, 33939, 33940, 33941, 33942, 33944, 33946, 33947, 33949, 33950, 33951, 33952, 33954, 33955, 33956, 33957, 33958, 33959, 33960, 33961, 33962, 33963, 33964, 33965, 33966, 33968, 33969, 33971, 33973, 33974, 33975, 33979, 33980, 33982, 33984, 33986, 33987, 33989, 33990, 33991, 33992, 33995, 33996, 33998, 33999, 34002, 34004, 34005, 34007, 34008, 34009, 34010, 34011, 34012, 34014, 34017, 34018, 34020, 34023, 34024, 34025, 34026, 34027, 34029, 34030, 34031, 34033, 34034, 34035, 34036, 34037, 34038, 34039, 34040, 34041, 34042, 34043, 34045, 34046, 34048, 34049, 34050, 20254, 25955, 26705, 21971, 20007, 25620, 39578, 25195, 23234, 29791, 33394, 28073, 26862, 20711, 33678, 30722, 26432, 21049, 27801, 32433, 20667, 21861, 29022, 31579, 26194, 29642, 33515, 26441, 23665, 21024, 29053, 34923, 38378, 38485, 25797, 36193, 33203, 21892, 27733, 25159, 32558, 22674, 20260, 21830, 36175, 26188, 19978, 23578, 35059, 26786, 25422, 31245, 28903, 33421, 21242, 38902, 23569, 21736, 37045, 32461, 22882, 36170, 34503, 33292, 33293, 36198, 25668, 23556, 24913, 28041, 31038, 35774, 30775, 30003, 21627, 20280, 36523, 28145, 23072, 32453, 31070, 27784, 23457, 23158, 29978, 32958, 24910, 28183, 22768, 29983, 29989, 29298, 21319, 32499, 34051, 34052, 34053, 34054, 34055, 34056, 34057, 34058, 34059, 34061, 34062, 34063, 34064, 34066, 34068, 34069, 34070, 34072, 34073, 34075, 34076, 34077, 34078, 34080, 34082, 34083, 34084, 34085, 34086, 34087, 34088, 34089, 34090, 34093, 34094, 34095, 34096, 34097, 34098, 34099, 34100, 34101, 34102, 34110, 34111, 34112, 34113, 34114, 34116, 34117, 34118, 34119, 34123, 34124, 34125, 34126, 34127, 34128, 34129, 34130, 34131, 34132, 34133, 34135, 34136, 34138, 34139, 34140, 34141, 34143, 34144, 34145, 34146, 34147, 34149, 34150, 34151, 34153, 34154, 34155, 34156, 34157, 34158, 34159, 34160, 34161, 34163, 34165, 34166, 34167, 34168, 34172, 34173, 34175, 34176, 34177, 30465, 30427, 21097, 32988, 22307, 24072, 22833, 29422, 26045, 28287, 35799, 23608, 34417, 21313, 30707, 25342, 26102, 20160, 39135, 34432, 23454, 35782, 21490, 30690, 20351, 23630, 39542, 22987, 24335, 31034, 22763, 19990, 26623, 20107, 25325, 35475, 36893, 21183, 26159, 21980, 22124, 36866, 20181, 20365, 37322, 39280, 27663, 24066, 24643, 23460, 35270, 35797, 25910, 25163, 39318, 23432, 23551, 25480, 21806, 21463, 30246, 20861, 34092, 26530, 26803, 27530, 25234, 36755, 21460, 33298, 28113, 30095, 20070, 36174, 23408, 29087, 34223, 26257, 26329, 32626, 34560, 40653, 40736, 23646, 26415, 36848, 26641, 26463, 25101, 31446, 22661, 24246, 25968, 28465, 34178, 34179, 34182, 34184, 34185, 34186, 34187, 34188, 34189, 34190, 34192, 34193, 34194, 34195, 34196, 34197, 34198, 34199, 34200, 34201, 34202, 34205, 34206, 34207, 34208, 34209, 34210, 34211, 34213, 34214, 34215, 34217, 34219, 34220, 34221, 34225, 34226, 34227, 34228, 34229, 34230, 34232, 34234, 34235, 34236, 34237, 34238, 34239, 34240, 34242, 34243, 34244, 34245, 34246, 34247, 34248, 34250, 34251, 34252, 34253, 34254, 34257, 34258, 34260, 34262, 34263, 34264, 34265, 34266, 34267, 34269, 34270, 34271, 34272, 34273, 34274, 34275, 34277, 34278, 34279, 34280, 34282, 34283, 34284, 34285, 34286, 34287, 34288, 34289, 34290, 34291, 34292, 34293, 34294, 34295, 34296, 24661, 21047, 32781, 25684, 34928, 29993, 24069, 26643, 25332, 38684, 21452, 29245, 35841, 27700, 30561, 31246, 21550, 30636, 39034, 33308, 35828, 30805, 26388, 28865, 26031, 25749, 22070, 24605, 31169, 21496, 19997, 27515, 32902, 23546, 21987, 22235, 20282, 20284, 39282, 24051, 26494, 32824, 24578, 39042, 36865, 23435, 35772, 35829, 25628, 33368, 25822, 22013, 33487, 37221, 20439, 32032, 36895, 31903, 20723, 22609, 28335, 23487, 35785, 32899, 37240, 33948, 31639, 34429, 38539, 38543, 32485, 39635, 30862, 23681, 31319, 36930, 38567, 31071, 23385, 25439, 31499, 34001, 26797, 21766, 32553, 29712, 32034, 38145, 25152, 22604, 20182, 23427, 22905, 22612, 34297, 34298, 34300, 34301, 34302, 34304, 34305, 34306, 34307, 34308, 34310, 34311, 34312, 34313, 34314, 34315, 34316, 34317, 34318, 34319, 34320, 34322, 34323, 34324, 34325, 34327, 34328, 34329, 34330, 34331, 34332, 34333, 34334, 34335, 34336, 34337, 34338, 34339, 34340, 34341, 34342, 34344, 34346, 34347, 34348, 34349, 34350, 34351, 34352, 34353, 34354, 34355, 34356, 34357, 34358, 34359, 34361, 34362, 34363, 34365, 34366, 34367, 34368, 34369, 34370, 34371, 34372, 34373, 34374, 34375, 34376, 34377, 34378, 34379, 34380, 34386, 34387, 34389, 34390, 34391, 34392, 34393, 34395, 34396, 34397, 34399, 34400, 34401, 34403, 34404, 34405, 34406, 34407, 34408, 34409, 34410, 29549, 25374, 36427, 36367, 32974, 33492, 25260, 21488, 27888, 37214, 22826, 24577, 27760, 22349, 25674, 36138, 30251, 28393, 22363, 27264, 30192, 28525, 35885, 35848, 22374, 27631, 34962, 30899, 25506, 21497, 28845, 27748, 22616, 25642, 22530, 26848, 33179, 21776, 31958, 20504, 36538, 28108, 36255, 28907, 25487, 28059, 28372, 32486, 33796, 26691, 36867, 28120, 38518, 35752, 22871, 29305, 34276, 33150, 30140, 35466, 26799, 21076, 36386, 38161, 25552, 39064, 36420, 21884, 20307, 26367, 22159, 24789, 28053, 21059, 23625, 22825, 28155, 22635, 3e4, 29980, 24684, 33300, 33094, 25361, 26465, 36834, 30522, 36339, 36148, 38081, 24086, 21381, 21548, 28867, 34413, 34415, 34416, 34418, 34419, 34420, 34421, 34422, 34423, 34424, 34435, 34436, 34437, 34438, 34439, 34440, 34441, 34446, 34447, 34448, 34449, 34450, 34452, 34454, 34455, 34456, 34457, 34458, 34459, 34462, 34463, 34464, 34465, 34466, 34469, 34470, 34475, 34477, 34478, 34482, 34483, 34487, 34488, 34489, 34491, 34492, 34493, 34494, 34495, 34497, 34498, 34499, 34501, 34504, 34508, 34509, 34514, 34515, 34517, 34518, 34519, 34522, 34524, 34525, 34528, 34529, 34530, 34531, 34533, 34534, 34535, 34536, 34538, 34539, 34540, 34543, 34549, 34550, 34551, 34554, 34555, 34556, 34557, 34559, 34561, 34564, 34565, 34566, 34571, 34572, 34574, 34575, 34576, 34577, 34580, 34582, 27712, 24311, 20572, 20141, 24237, 25402, 33351, 36890, 26704, 37230, 30643, 21516, 38108, 24420, 31461, 26742, 25413, 31570, 32479, 30171, 20599, 25237, 22836, 36879, 20984, 31171, 31361, 22270, 24466, 36884, 28034, 23648, 22303, 21520, 20820, 28237, 22242, 25512, 39059, 33151, 34581, 35114, 36864, 21534, 23663, 33216, 25302, 25176, 33073, 40501, 38464, 39534, 39548, 26925, 22949, 25299, 21822, 25366, 21703, 34521, 27964, 23043, 29926, 34972, 27498, 22806, 35916, 24367, 28286, 29609, 39037, 20024, 28919, 23436, 30871, 25405, 26202, 30358, 24779, 23451, 23113, 19975, 33109, 27754, 29579, 20129, 26505, 32593, 24448, 26106, 26395, 24536, 22916, 23041, 34585, 34587, 34589, 34591, 34592, 34596, 34598, 34599, 34600, 34602, 34603, 34604, 34605, 34607, 34608, 34610, 34611, 34613, 34614, 34616, 34617, 34618, 34620, 34621, 34624, 34625, 34626, 34627, 34628, 34629, 34630, 34634, 34635, 34637, 34639, 34640, 34641, 34642, 34644, 34645, 34646, 34648, 34650, 34651, 34652, 34653, 34654, 34655, 34657, 34658, 34662, 34663, 34664, 34665, 34666, 34667, 34668, 34669, 34671, 34673, 34674, 34675, 34677, 34679, 34680, 34681, 34682, 34687, 34688, 34689, 34692, 34694, 34695, 34697, 34698, 34700, 34702, 34703, 34704, 34705, 34706, 34708, 34709, 34710, 34712, 34713, 34714, 34715, 34716, 34717, 34718, 34720, 34721, 34722, 34723, 34724, 24013, 24494, 21361, 38886, 36829, 26693, 22260, 21807, 24799, 20026, 28493, 32500, 33479, 33806, 22996, 20255, 20266, 23614, 32428, 26410, 34074, 21619, 30031, 32963, 21890, 39759, 20301, 28205, 35859, 23561, 24944, 21355, 30239, 28201, 34442, 25991, 38395, 32441, 21563, 31283, 32010, 38382, 21985, 32705, 29934, 25373, 34583, 28065, 31389, 25105, 26017, 21351, 25569, 27779, 24043, 21596, 38056, 20044, 27745, 35820, 23627, 26080, 33436, 26791, 21566, 21556, 27595, 27494, 20116, 25410, 21320, 33310, 20237, 20398, 22366, 25098, 38654, 26212, 29289, 21247, 21153, 24735, 35823, 26132, 29081, 26512, 35199, 30802, 30717, 26224, 22075, 21560, 38177, 29306, 34725, 34726, 34727, 34729, 34730, 34734, 34736, 34737, 34738, 34740, 34742, 34743, 34744, 34745, 34747, 34748, 34750, 34751, 34753, 34754, 34755, 34756, 34757, 34759, 34760, 34761, 34764, 34765, 34766, 34767, 34768, 34772, 34773, 34774, 34775, 34776, 34777, 34778, 34780, 34781, 34782, 34783, 34785, 34786, 34787, 34788, 34790, 34791, 34792, 34793, 34795, 34796, 34797, 34799, 34800, 34801, 34802, 34803, 34804, 34805, 34806, 34807, 34808, 34810, 34811, 34812, 34813, 34815, 34816, 34817, 34818, 34820, 34821, 34822, 34823, 34824, 34825, 34827, 34828, 34829, 34830, 34831, 34832, 34833, 34834, 34836, 34839, 34840, 34841, 34842, 34844, 34845, 34846, 34847, 34848, 34851, 31232, 24687, 24076, 24713, 33181, 22805, 24796, 29060, 28911, 28330, 27728, 29312, 27268, 34989, 24109, 20064, 23219, 21916, 38115, 27927, 31995, 38553, 25103, 32454, 30606, 34430, 21283, 38686, 36758, 26247, 23777, 20384, 29421, 19979, 21414, 22799, 21523, 25472, 38184, 20808, 20185, 40092, 32420, 21688, 36132, 34900, 33335, 38386, 28046, 24358, 23244, 26174, 38505, 29616, 29486, 21439, 33146, 39301, 32673, 23466, 38519, 38480, 32447, 30456, 21410, 38262, 39321, 31665, 35140, 28248, 20065, 32724, 31077, 35814, 24819, 21709, 20139, 39033, 24055, 27233, 20687, 21521, 35937, 33831, 30813, 38660, 21066, 21742, 22179, 38144, 28040, 23477, 28102, 26195, 34852, 34853, 34854, 34855, 34856, 34857, 34858, 34859, 34860, 34861, 34862, 34863, 34864, 34865, 34867, 34868, 34869, 34870, 34871, 34872, 34874, 34875, 34877, 34878, 34879, 34881, 34882, 34883, 34886, 34887, 34888, 34889, 34890, 34891, 34894, 34895, 34896, 34897, 34898, 34899, 34901, 34902, 34904, 34906, 34907, 34908, 34909, 34910, 34911, 34912, 34918, 34919, 34922, 34925, 34927, 34929, 34931, 34932, 34933, 34934, 34936, 34937, 34938, 34939, 34940, 34944, 34947, 34950, 34951, 34953, 34954, 34956, 34958, 34959, 34960, 34961, 34963, 34964, 34965, 34967, 34968, 34969, 34970, 34971, 34973, 34974, 34975, 34976, 34977, 34979, 34981, 34982, 34983, 34984, 34985, 34986, 23567, 23389, 26657, 32918, 21880, 31505, 25928, 26964, 20123, 27463, 34638, 38795, 21327, 25375, 25658, 37034, 26012, 32961, 35856, 20889, 26800, 21368, 34809, 25032, 27844, 27899, 35874, 23633, 34218, 33455, 38156, 27427, 36763, 26032, 24571, 24515, 20449, 34885, 26143, 33125, 29481, 24826, 20852, 21009, 22411, 24418, 37026, 34892, 37266, 24184, 26447, 24615, 22995, 20804, 20982, 33016, 21256, 27769, 38596, 29066, 20241, 20462, 32670, 26429, 21957, 38152, 31168, 34966, 32483, 22687, 25100, 38656, 34394, 22040, 39035, 24464, 35768, 33988, 37207, 21465, 26093, 24207, 30044, 24676, 32110, 23167, 32490, 32493, 36713, 21927, 23459, 24748, 26059, 29572, 34988, 34990, 34991, 34992, 34994, 34995, 34996, 34997, 34998, 35e3, 35001, 35002, 35003, 35005, 35006, 35007, 35008, 35011, 35012, 35015, 35016, 35018, 35019, 35020, 35021, 35023, 35024, 35025, 35027, 35030, 35031, 35034, 35035, 35036, 35037, 35038, 35040, 35041, 35046, 35047, 35049, 35050, 35051, 35052, 35053, 35054, 35055, 35058, 35061, 35062, 35063, 35066, 35067, 35069, 35071, 35072, 35073, 35075, 35076, 35077, 35078, 35079, 35080, 35081, 35083, 35084, 35085, 35086, 35087, 35089, 35092, 35093, 35094, 35095, 35096, 35100, 35101, 35102, 35103, 35104, 35106, 35107, 35108, 35110, 35111, 35112, 35113, 35116, 35117, 35118, 35119, 35121, 35122, 35123, 35125, 35127, 36873, 30307, 30505, 32474, 38772, 34203, 23398, 31348, 38634, 34880, 21195, 29071, 24490, 26092, 35810, 23547, 39535, 24033, 27529, 27739, 35757, 35759, 36874, 36805, 21387, 25276, 40486, 40493, 21568, 20011, 33469, 29273, 34460, 23830, 34905, 28079, 38597, 21713, 20122, 35766, 28937, 21693, 38409, 28895, 28153, 30416, 20005, 30740, 34578, 23721, 24310, 35328, 39068, 38414, 28814, 27839, 22852, 25513, 30524, 34893, 28436, 33395, 22576, 29141, 21388, 30746, 38593, 21761, 24422, 28976, 23476, 35866, 39564, 27523, 22830, 40495, 31207, 26472, 25196, 20335, 30113, 32650, 27915, 38451, 27687, 20208, 30162, 20859, 26679, 28478, 36992, 33136, 22934, 29814, 35128, 35129, 35130, 35131, 35132, 35133, 35134, 35135, 35136, 35138, 35139, 35141, 35142, 35143, 35144, 35145, 35146, 35147, 35148, 35149, 35150, 35151, 35152, 35153, 35154, 35155, 35156, 35157, 35158, 35159, 35160, 35161, 35162, 35163, 35164, 35165, 35168, 35169, 35170, 35171, 35172, 35173, 35175, 35176, 35177, 35178, 35179, 35180, 35181, 35182, 35183, 35184, 35185, 35186, 35187, 35188, 35189, 35190, 35191, 35192, 35193, 35194, 35196, 35197, 35198, 35200, 35202, 35204, 35205, 35207, 35208, 35209, 35210, 35211, 35212, 35213, 35214, 35215, 35216, 35217, 35218, 35219, 35220, 35221, 35222, 35223, 35224, 35225, 35226, 35227, 35228, 35229, 35230, 35231, 35232, 35233, 25671, 23591, 36965, 31377, 35875, 23002, 21676, 33280, 33647, 35201, 32768, 26928, 22094, 32822, 29239, 37326, 20918, 20063, 39029, 25494, 19994, 21494, 26355, 33099, 22812, 28082, 19968, 22777, 21307, 25558, 38129, 20381, 20234, 34915, 39056, 22839, 36951, 31227, 20202, 33008, 30097, 27778, 23452, 23016, 24413, 26885, 34433, 20506, 24050, 20057, 30691, 20197, 33402, 25233, 26131, 37009, 23673, 20159, 24441, 33222, 36920, 32900, 30123, 20134, 35028, 24847, 27589, 24518, 20041, 30410, 28322, 35811, 35758, 35850, 35793, 24322, 32764, 32716, 32462, 33589, 33643, 22240, 27575, 38899, 38452, 23035, 21535, 38134, 28139, 23493, 39278, 23609, 24341, 38544, 35234, 35235, 35236, 35237, 35238, 35239, 35240, 35241, 35242, 35243, 35244, 35245, 35246, 35247, 35248, 35249, 35250, 35251, 35252, 35253, 35254, 35255, 35256, 35257, 35258, 35259, 35260, 35261, 35262, 35263, 35264, 35267, 35277, 35283, 35284, 35285, 35287, 35288, 35289, 35291, 35293, 35295, 35296, 35297, 35298, 35300, 35303, 35304, 35305, 35306, 35308, 35309, 35310, 35312, 35313, 35314, 35316, 35317, 35318, 35319, 35320, 35321, 35322, 35323, 35324, 35325, 35326, 35327, 35329, 35330, 35331, 35332, 35333, 35334, 35336, 35337, 35338, 35339, 35340, 35341, 35342, 35343, 35344, 35345, 35346, 35347, 35348, 35349, 35350, 35351, 35352, 35353, 35354, 35355, 35356, 35357, 21360, 33521, 27185, 23156, 40560, 24212, 32552, 33721, 33828, 33829, 33639, 34631, 36814, 36194, 30408, 24433, 39062, 30828, 26144, 21727, 25317, 20323, 33219, 30152, 24248, 38605, 36362, 34553, 21647, 27891, 28044, 27704, 24703, 21191, 29992, 24189, 20248, 24736, 24551, 23588, 30001, 37038, 38080, 29369, 27833, 28216, 37193, 26377, 21451, 21491, 20305, 37321, 35825, 21448, 24188, 36802, 28132, 20110, 30402, 27014, 34398, 24858, 33286, 20313, 20446, 36926, 40060, 24841, 28189, 28180, 38533, 20104, 23089, 38632, 19982, 23679, 31161, 23431, 35821, 32701, 29577, 22495, 33419, 37057, 21505, 36935, 21947, 23786, 24481, 24840, 27442, 29425, 32946, 35465, 35358, 35359, 35360, 35361, 35362, 35363, 35364, 35365, 35366, 35367, 35368, 35369, 35370, 35371, 35372, 35373, 35374, 35375, 35376, 35377, 35378, 35379, 35380, 35381, 35382, 35383, 35384, 35385, 35386, 35387, 35388, 35389, 35391, 35392, 35393, 35394, 35395, 35396, 35397, 35398, 35399, 35401, 35402, 35403, 35404, 35405, 35406, 35407, 35408, 35409, 35410, 35411, 35412, 35413, 35414, 35415, 35416, 35417, 35418, 35419, 35420, 35421, 35422, 35423, 35424, 35425, 35426, 35427, 35428, 35429, 35430, 35431, 35432, 35433, 35434, 35435, 35436, 35437, 35438, 35439, 35440, 35441, 35442, 35443, 35444, 35445, 35446, 35447, 35448, 35450, 35451, 35452, 35453, 35454, 35455, 35456, 28020, 23507, 35029, 39044, 35947, 39533, 40499, 28170, 20900, 20803, 22435, 34945, 21407, 25588, 36757, 22253, 21592, 22278, 29503, 28304, 32536, 36828, 33489, 24895, 24616, 38498, 26352, 32422, 36234, 36291, 38053, 23731, 31908, 26376, 24742, 38405, 32792, 20113, 37095, 21248, 38504, 20801, 36816, 34164, 37213, 26197, 38901, 23381, 21277, 30776, 26434, 26685, 21705, 28798, 23472, 36733, 20877, 22312, 21681, 25874, 26242, 36190, 36163, 33039, 33900, 36973, 31967, 20991, 34299, 26531, 26089, 28577, 34468, 36481, 22122, 36896, 30338, 28790, 29157, 36131, 25321, 21017, 27901, 36156, 24590, 22686, 24974, 26366, 36192, 25166, 21939, 28195, 26413, 36711, 35457, 35458, 35459, 35460, 35461, 35462, 35463, 35464, 35467, 35468, 35469, 35470, 35471, 35472, 35473, 35474, 35476, 35477, 35478, 35479, 35480, 35481, 35482, 35483, 35484, 35485, 35486, 35487, 35488, 35489, 35490, 35491, 35492, 35493, 35494, 35495, 35496, 35497, 35498, 35499, 35500, 35501, 35502, 35503, 35504, 35505, 35506, 35507, 35508, 35509, 35510, 35511, 35512, 35513, 35514, 35515, 35516, 35517, 35518, 35519, 35520, 35521, 35522, 35523, 35524, 35525, 35526, 35527, 35528, 35529, 35530, 35531, 35532, 35533, 35534, 35535, 35536, 35537, 35538, 35539, 35540, 35541, 35542, 35543, 35544, 35545, 35546, 35547, 35548, 35549, 35550, 35551, 35552, 35553, 35554, 35555, 38113, 38392, 30504, 26629, 27048, 21643, 20045, 28856, 35784, 25688, 25995, 23429, 31364, 20538, 23528, 30651, 27617, 35449, 31896, 27838, 30415, 26025, 36759, 23853, 23637, 34360, 26632, 21344, 25112, 31449, 28251, 32509, 27167, 31456, 24432, 28467, 24352, 25484, 28072, 26454, 19976, 24080, 36134, 20183, 32960, 30260, 38556, 25307, 26157, 25214, 27836, 36213, 29031, 32617, 20806, 32903, 21484, 36974, 25240, 21746, 34544, 36761, 32773, 38167, 34071, 36825, 27993, 29645, 26015, 30495, 29956, 30759, 33275, 36126, 38024, 20390, 26517, 30137, 35786, 38663, 25391, 38215, 38453, 33976, 25379, 30529, 24449, 29424, 20105, 24596, 25972, 25327, 27491, 25919, 35556, 35557, 35558, 35559, 35560, 35561, 35562, 35563, 35564, 35565, 35566, 35567, 35568, 35569, 35570, 35571, 35572, 35573, 35574, 35575, 35576, 35577, 35578, 35579, 35580, 35581, 35582, 35583, 35584, 35585, 35586, 35587, 35588, 35589, 35590, 35592, 35593, 35594, 35595, 35596, 35597, 35598, 35599, 35600, 35601, 35602, 35603, 35604, 35605, 35606, 35607, 35608, 35609, 35610, 35611, 35612, 35613, 35614, 35615, 35616, 35617, 35618, 35619, 35620, 35621, 35623, 35624, 35625, 35626, 35627, 35628, 35629, 35630, 35631, 35632, 35633, 35634, 35635, 35636, 35637, 35638, 35639, 35640, 35641, 35642, 35643, 35644, 35645, 35646, 35647, 35648, 35649, 35650, 35651, 35652, 35653, 24103, 30151, 37073, 35777, 33437, 26525, 25903, 21553, 34584, 30693, 32930, 33026, 27713, 20043, 32455, 32844, 30452, 26893, 27542, 25191, 20540, 20356, 22336, 25351, 27490, 36286, 21482, 26088, 32440, 24535, 25370, 25527, 33267, 33268, 32622, 24092, 23769, 21046, 26234, 31209, 31258, 36136, 28825, 30164, 28382, 27835, 31378, 20013, 30405, 24544, 38047, 34935, 32456, 31181, 32959, 37325, 20210, 20247, 33311, 21608, 24030, 27954, 35788, 31909, 36724, 32920, 24090, 21650, 30385, 23449, 26172, 39588, 29664, 26666, 34523, 26417, 29482, 35832, 35803, 36880, 31481, 28891, 29038, 25284, 30633, 22065, 20027, 33879, 26609, 21161, 34496, 36142, 38136, 31569, 35654, 35655, 35656, 35657, 35658, 35659, 35660, 35661, 35662, 35663, 35664, 35665, 35666, 35667, 35668, 35669, 35670, 35671, 35672, 35673, 35674, 35675, 35676, 35677, 35678, 35679, 35680, 35681, 35682, 35683, 35684, 35685, 35687, 35688, 35689, 35690, 35691, 35693, 35694, 35695, 35696, 35697, 35698, 35699, 35700, 35701, 35702, 35703, 35704, 35705, 35706, 35707, 35708, 35709, 35710, 35711, 35712, 35713, 35714, 35715, 35716, 35717, 35718, 35719, 35720, 35721, 35722, 35723, 35724, 35725, 35726, 35727, 35728, 35729, 35730, 35731, 35732, 35733, 35734, 35735, 35736, 35737, 35738, 35739, 35740, 35741, 35742, 35743, 35756, 35761, 35771, 35783, 35792, 35818, 35849, 35870, 20303, 27880, 31069, 39547, 25235, 29226, 25341, 19987, 30742, 36716, 25776, 36186, 31686, 26729, 24196, 35013, 22918, 25758, 22766, 29366, 26894, 38181, 36861, 36184, 22368, 32512, 35846, 20934, 25417, 25305, 21331, 26700, 29730, 33537, 37196, 21828, 30528, 28796, 27978, 20857, 21672, 36164, 23039, 28363, 28100, 23388, 32043, 20180, 31869, 28371, 23376, 33258, 28173, 23383, 39683, 26837, 36394, 23447, 32508, 24635, 32437, 37049, 36208, 22863, 25549, 31199, 36275, 21330, 26063, 31062, 35781, 38459, 32452, 38075, 32386, 22068, 37257, 26368, 32618, 23562, 36981, 26152, 24038, 20304, 26590, 20570, 20316, 22352, 24231, 59408, 59409, 59410, 59411, 59412, 35896, 35897, 35898, 35899, 35900, 35901, 35902, 35903, 35904, 35906, 35907, 35908, 35909, 35912, 35914, 35915, 35917, 35918, 35919, 35920, 35921, 35922, 35923, 35924, 35926, 35927, 35928, 35929, 35931, 35932, 35933, 35934, 35935, 35936, 35939, 35940, 35941, 35942, 35943, 35944, 35945, 35948, 35949, 35950, 35951, 35952, 35953, 35954, 35956, 35957, 35958, 35959, 35963, 35964, 35965, 35966, 35967, 35968, 35969, 35971, 35972, 35974, 35975, 35976, 35979, 35981, 35982, 35983, 35984, 35985, 35986, 35987, 35989, 35990, 35991, 35993, 35994, 35995, 35996, 35997, 35998, 35999, 36e3, 36001, 36002, 36003, 36004, 36005, 36006, 36007, 36008, 36009, 36010, 36011, 36012, 36013, 20109, 19980, 20800, 19984, 24319, 21317, 19989, 20120, 19998, 39730, 23404, 22121, 20008, 31162, 20031, 21269, 20039, 22829, 29243, 21358, 27664, 22239, 32996, 39319, 27603, 30590, 40727, 20022, 20127, 40720, 20060, 20073, 20115, 33416, 23387, 21868, 22031, 20164, 21389, 21405, 21411, 21413, 21422, 38757, 36189, 21274, 21493, 21286, 21294, 21310, 36188, 21350, 21347, 20994, 21e3, 21006, 21037, 21043, 21055, 21056, 21068, 21086, 21089, 21084, 33967, 21117, 21122, 21121, 21136, 21139, 20866, 32596, 20155, 20163, 20169, 20162, 20200, 20193, 20203, 20190, 20251, 20211, 20258, 20324, 20213, 20261, 20263, 20233, 20267, 20318, 20327, 25912, 20314, 20317, 36014, 36015, 36016, 36017, 36018, 36019, 36020, 36021, 36022, 36023, 36024, 36025, 36026, 36027, 36028, 36029, 36030, 36031, 36032, 36033, 36034, 36035, 36036, 36037, 36038, 36039, 36040, 36041, 36042, 36043, 36044, 36045, 36046, 36047, 36048, 36049, 36050, 36051, 36052, 36053, 36054, 36055, 36056, 36057, 36058, 36059, 36060, 36061, 36062, 36063, 36064, 36065, 36066, 36067, 36068, 36069, 36070, 36071, 36072, 36073, 36074, 36075, 36076, 36077, 36078, 36079, 36080, 36081, 36082, 36083, 36084, 36085, 36086, 36087, 36088, 36089, 36090, 36091, 36092, 36093, 36094, 36095, 36096, 36097, 36098, 36099, 36100, 36101, 36102, 36103, 36104, 36105, 36106, 36107, 36108, 36109, 20319, 20311, 20274, 20285, 20342, 20340, 20369, 20361, 20355, 20367, 20350, 20347, 20394, 20348, 20396, 20372, 20454, 20456, 20458, 20421, 20442, 20451, 20444, 20433, 20447, 20472, 20521, 20556, 20467, 20524, 20495, 20526, 20525, 20478, 20508, 20492, 20517, 20520, 20606, 20547, 20565, 20552, 20558, 20588, 20603, 20645, 20647, 20649, 20666, 20694, 20742, 20717, 20716, 20710, 20718, 20743, 20747, 20189, 27709, 20312, 20325, 20430, 40864, 27718, 31860, 20846, 24061, 40649, 39320, 20865, 22804, 21241, 21261, 35335, 21264, 20971, 22809, 20821, 20128, 20822, 20147, 34926, 34980, 20149, 33044, 35026, 31104, 23348, 34819, 32696, 20907, 20913, 20925, 20924, 36110, 36111, 36112, 36113, 36114, 36115, 36116, 36117, 36118, 36119, 36120, 36121, 36122, 36123, 36124, 36128, 36177, 36178, 36183, 36191, 36197, 36200, 36201, 36202, 36204, 36206, 36207, 36209, 36210, 36216, 36217, 36218, 36219, 36220, 36221, 36222, 36223, 36224, 36226, 36227, 36230, 36231, 36232, 36233, 36236, 36237, 36238, 36239, 36240, 36242, 36243, 36245, 36246, 36247, 36248, 36249, 36250, 36251, 36252, 36253, 36254, 36256, 36257, 36258, 36260, 36261, 36262, 36263, 36264, 36265, 36266, 36267, 36268, 36269, 36270, 36271, 36272, 36274, 36278, 36279, 36281, 36283, 36285, 36288, 36289, 36290, 36293, 36295, 36296, 36297, 36298, 36301, 36304, 36306, 36307, 36308, 20935, 20886, 20898, 20901, 35744, 35750, 35751, 35754, 35764, 35765, 35767, 35778, 35779, 35787, 35791, 35790, 35794, 35795, 35796, 35798, 35800, 35801, 35804, 35807, 35808, 35812, 35816, 35817, 35822, 35824, 35827, 35830, 35833, 35836, 35839, 35840, 35842, 35844, 35847, 35852, 35855, 35857, 35858, 35860, 35861, 35862, 35865, 35867, 35864, 35869, 35871, 35872, 35873, 35877, 35879, 35882, 35883, 35886, 35887, 35890, 35891, 35893, 35894, 21353, 21370, 38429, 38434, 38433, 38449, 38442, 38461, 38460, 38466, 38473, 38484, 38495, 38503, 38508, 38514, 38516, 38536, 38541, 38551, 38576, 37015, 37019, 37021, 37017, 37036, 37025, 37044, 37043, 37046, 37050, 36309, 36312, 36313, 36316, 36320, 36321, 36322, 36325, 36326, 36327, 36329, 36333, 36334, 36336, 36337, 36338, 36340, 36342, 36348, 36350, 36351, 36352, 36353, 36354, 36355, 36356, 36358, 36359, 36360, 36363, 36365, 36366, 36368, 36369, 36370, 36371, 36373, 36374, 36375, 36376, 36377, 36378, 36379, 36380, 36384, 36385, 36388, 36389, 36390, 36391, 36392, 36395, 36397, 36400, 36402, 36403, 36404, 36406, 36407, 36408, 36411, 36412, 36414, 36415, 36419, 36421, 36422, 36428, 36429, 36430, 36431, 36432, 36435, 36436, 36437, 36438, 36439, 36440, 36442, 36443, 36444, 36445, 36446, 36447, 36448, 36449, 36450, 36451, 36452, 36453, 36455, 36456, 36458, 36459, 36462, 36465, 37048, 37040, 37071, 37061, 37054, 37072, 37060, 37063, 37075, 37094, 37090, 37084, 37079, 37083, 37099, 37103, 37118, 37124, 37154, 37150, 37155, 37169, 37167, 37177, 37187, 37190, 21005, 22850, 21154, 21164, 21165, 21182, 21759, 21200, 21206, 21232, 21471, 29166, 30669, 24308, 20981, 20988, 39727, 21430, 24321, 30042, 24047, 22348, 22441, 22433, 22654, 22716, 22725, 22737, 22313, 22316, 22314, 22323, 22329, 22318, 22319, 22364, 22331, 22338, 22377, 22405, 22379, 22406, 22396, 22395, 22376, 22381, 22390, 22387, 22445, 22436, 22412, 22450, 22479, 22439, 22452, 22419, 22432, 22485, 22488, 22490, 22489, 22482, 22456, 22516, 22511, 22520, 22500, 22493, 36467, 36469, 36471, 36472, 36473, 36474, 36475, 36477, 36478, 36480, 36482, 36483, 36484, 36486, 36488, 36489, 36490, 36491, 36492, 36493, 36494, 36497, 36498, 36499, 36501, 36502, 36503, 36504, 36505, 36506, 36507, 36509, 36511, 36512, 36513, 36514, 36515, 36516, 36517, 36518, 36519, 36520, 36521, 36522, 36525, 36526, 36528, 36529, 36531, 36532, 36533, 36534, 36535, 36536, 36537, 36539, 36540, 36541, 36542, 36543, 36544, 36545, 36546, 36547, 36548, 36549, 36550, 36551, 36552, 36553, 36554, 36555, 36556, 36557, 36559, 36560, 36561, 36562, 36563, 36564, 36565, 36566, 36567, 36568, 36569, 36570, 36571, 36572, 36573, 36574, 36575, 36576, 36577, 36578, 36579, 36580, 22539, 22541, 22525, 22509, 22528, 22558, 22553, 22596, 22560, 22629, 22636, 22657, 22665, 22682, 22656, 39336, 40729, 25087, 33401, 33405, 33407, 33423, 33418, 33448, 33412, 33422, 33425, 33431, 33433, 33451, 33464, 33470, 33456, 33480, 33482, 33507, 33432, 33463, 33454, 33483, 33484, 33473, 33449, 33460, 33441, 33450, 33439, 33476, 33486, 33444, 33505, 33545, 33527, 33508, 33551, 33543, 33500, 33524, 33490, 33496, 33548, 33531, 33491, 33553, 33562, 33542, 33556, 33557, 33504, 33493, 33564, 33617, 33627, 33628, 33544, 33682, 33596, 33588, 33585, 33691, 33630, 33583, 33615, 33607, 33603, 33631, 33600, 33559, 33632, 33581, 33594, 33587, 33638, 33637, 36581, 36582, 36583, 36584, 36585, 36586, 36587, 36588, 36589, 36590, 36591, 36592, 36593, 36594, 36595, 36596, 36597, 36598, 36599, 36600, 36601, 36602, 36603, 36604, 36605, 36606, 36607, 36608, 36609, 36610, 36611, 36612, 36613, 36614, 36615, 36616, 36617, 36618, 36619, 36620, 36621, 36622, 36623, 36624, 36625, 36626, 36627, 36628, 36629, 36630, 36631, 36632, 36633, 36634, 36635, 36636, 36637, 36638, 36639, 36640, 36641, 36642, 36643, 36644, 36645, 36646, 36647, 36648, 36649, 36650, 36651, 36652, 36653, 36654, 36655, 36656, 36657, 36658, 36659, 36660, 36661, 36662, 36663, 36664, 36665, 36666, 36667, 36668, 36669, 36670, 36671, 36672, 36673, 36674, 36675, 36676, 33640, 33563, 33641, 33644, 33642, 33645, 33646, 33712, 33656, 33715, 33716, 33696, 33706, 33683, 33692, 33669, 33660, 33718, 33705, 33661, 33720, 33659, 33688, 33694, 33704, 33722, 33724, 33729, 33793, 33765, 33752, 22535, 33816, 33803, 33757, 33789, 33750, 33820, 33848, 33809, 33798, 33748, 33759, 33807, 33795, 33784, 33785, 33770, 33733, 33728, 33830, 33776, 33761, 33884, 33873, 33882, 33881, 33907, 33927, 33928, 33914, 33929, 33912, 33852, 33862, 33897, 33910, 33932, 33934, 33841, 33901, 33985, 33997, 34e3, 34022, 33981, 34003, 33994, 33983, 33978, 34016, 33953, 33977, 33972, 33943, 34021, 34019, 34060, 29965, 34104, 34032, 34105, 34079, 34106, 36677, 36678, 36679, 36680, 36681, 36682, 36683, 36684, 36685, 36686, 36687, 36688, 36689, 36690, 36691, 36692, 36693, 36694, 36695, 36696, 36697, 36698, 36699, 36700, 36701, 36702, 36703, 36704, 36705, 36706, 36707, 36708, 36709, 36714, 36736, 36748, 36754, 36765, 36768, 36769, 36770, 36772, 36773, 36774, 36775, 36778, 36780, 36781, 36782, 36783, 36786, 36787, 36788, 36789, 36791, 36792, 36794, 36795, 36796, 36799, 36800, 36803, 36806, 36809, 36810, 36811, 36812, 36813, 36815, 36818, 36822, 36823, 36826, 36832, 36833, 36835, 36839, 36844, 36847, 36849, 36850, 36852, 36853, 36854, 36858, 36859, 36860, 36862, 36863, 36871, 36872, 36876, 36878, 36883, 36885, 36888, 34134, 34107, 34047, 34044, 34137, 34120, 34152, 34148, 34142, 34170, 30626, 34115, 34162, 34171, 34212, 34216, 34183, 34191, 34169, 34222, 34204, 34181, 34233, 34231, 34224, 34259, 34241, 34268, 34303, 34343, 34309, 34345, 34326, 34364, 24318, 24328, 22844, 22849, 32823, 22869, 22874, 22872, 21263, 23586, 23589, 23596, 23604, 25164, 25194, 25247, 25275, 25290, 25306, 25303, 25326, 25378, 25334, 25401, 25419, 25411, 25517, 25590, 25457, 25466, 25486, 25524, 25453, 25516, 25482, 25449, 25518, 25532, 25586, 25592, 25568, 25599, 25540, 25566, 25550, 25682, 25542, 25534, 25669, 25665, 25611, 25627, 25632, 25612, 25638, 25633, 25694, 25732, 25709, 25750, 36889, 36892, 36899, 36900, 36901, 36903, 36904, 36905, 36906, 36907, 36908, 36912, 36913, 36914, 36915, 36916, 36919, 36921, 36922, 36925, 36927, 36928, 36931, 36933, 36934, 36936, 36937, 36938, 36939, 36940, 36942, 36948, 36949, 36950, 36953, 36954, 36956, 36957, 36958, 36959, 36960, 36961, 36964, 36966, 36967, 36969, 36970, 36971, 36972, 36975, 36976, 36977, 36978, 36979, 36982, 36983, 36984, 36985, 36986, 36987, 36988, 36990, 36993, 36996, 36997, 36998, 36999, 37001, 37002, 37004, 37005, 37006, 37007, 37008, 37010, 37012, 37014, 37016, 37018, 37020, 37022, 37023, 37024, 37028, 37029, 37031, 37032, 37033, 37035, 37037, 37042, 37047, 37052, 37053, 37055, 37056, 25722, 25783, 25784, 25753, 25786, 25792, 25808, 25815, 25828, 25826, 25865, 25893, 25902, 24331, 24530, 29977, 24337, 21343, 21489, 21501, 21481, 21480, 21499, 21522, 21526, 21510, 21579, 21586, 21587, 21588, 21590, 21571, 21537, 21591, 21593, 21539, 21554, 21634, 21652, 21623, 21617, 21604, 21658, 21659, 21636, 21622, 21606, 21661, 21712, 21677, 21698, 21684, 21714, 21671, 21670, 21715, 21716, 21618, 21667, 21717, 21691, 21695, 21708, 21721, 21722, 21724, 21673, 21674, 21668, 21725, 21711, 21726, 21787, 21735, 21792, 21757, 21780, 21747, 21794, 21795, 21775, 21777, 21799, 21802, 21863, 21903, 21941, 21833, 21869, 21825, 21845, 21823, 21840, 21820, 37058, 37059, 37062, 37064, 37065, 37067, 37068, 37069, 37074, 37076, 37077, 37078, 37080, 37081, 37082, 37086, 37087, 37088, 37091, 37092, 37093, 37097, 37098, 37100, 37102, 37104, 37105, 37106, 37107, 37109, 37110, 37111, 37113, 37114, 37115, 37116, 37119, 37120, 37121, 37123, 37125, 37126, 37127, 37128, 37129, 37130, 37131, 37132, 37133, 37134, 37135, 37136, 37137, 37138, 37139, 37140, 37141, 37142, 37143, 37144, 37146, 37147, 37148, 37149, 37151, 37152, 37153, 37156, 37157, 37158, 37159, 37160, 37161, 37162, 37163, 37164, 37165, 37166, 37168, 37170, 37171, 37172, 37173, 37174, 37175, 37176, 37178, 37179, 37180, 37181, 37182, 37183, 37184, 37185, 37186, 37188, 21815, 21846, 21877, 21878, 21879, 21811, 21808, 21852, 21899, 21970, 21891, 21937, 21945, 21896, 21889, 21919, 21886, 21974, 21905, 21883, 21983, 21949, 21950, 21908, 21913, 21994, 22007, 21961, 22047, 21969, 21995, 21996, 21972, 21990, 21981, 21956, 21999, 21989, 22002, 22003, 21964, 21965, 21992, 22005, 21988, 36756, 22046, 22024, 22028, 22017, 22052, 22051, 22014, 22016, 22055, 22061, 22104, 22073, 22103, 22060, 22093, 22114, 22105, 22108, 22092, 22100, 22150, 22116, 22129, 22123, 22139, 22140, 22149, 22163, 22191, 22228, 22231, 22237, 22241, 22261, 22251, 22265, 22271, 22276, 22282, 22281, 22300, 24079, 24089, 24084, 24081, 24113, 24123, 24124, 37189, 37191, 37192, 37201, 37203, 37204, 37205, 37206, 37208, 37209, 37211, 37212, 37215, 37216, 37222, 37223, 37224, 37227, 37229, 37235, 37242, 37243, 37244, 37248, 37249, 37250, 37251, 37252, 37254, 37256, 37258, 37262, 37263, 37267, 37268, 37269, 37270, 37271, 37272, 37273, 37276, 37277, 37278, 37279, 37280, 37281, 37284, 37285, 37286, 37287, 37288, 37289, 37291, 37292, 37296, 37297, 37298, 37299, 37302, 37303, 37304, 37305, 37307, 37308, 37309, 37310, 37311, 37312, 37313, 37314, 37315, 37316, 37317, 37318, 37320, 37323, 37328, 37330, 37331, 37332, 37333, 37334, 37335, 37336, 37337, 37338, 37339, 37341, 37342, 37343, 37344, 37345, 37346, 37347, 37348, 37349, 24119, 24132, 24148, 24155, 24158, 24161, 23692, 23674, 23693, 23696, 23702, 23688, 23704, 23705, 23697, 23706, 23708, 23733, 23714, 23741, 23724, 23723, 23729, 23715, 23745, 23735, 23748, 23762, 23780, 23755, 23781, 23810, 23811, 23847, 23846, 23854, 23844, 23838, 23814, 23835, 23896, 23870, 23860, 23869, 23916, 23899, 23919, 23901, 23915, 23883, 23882, 23913, 23924, 23938, 23961, 23965, 35955, 23991, 24005, 24435, 24439, 24450, 24455, 24457, 24460, 24469, 24473, 24476, 24488, 24493, 24501, 24508, 34914, 24417, 29357, 29360, 29364, 29367, 29368, 29379, 29377, 29390, 29389, 29394, 29416, 29423, 29417, 29426, 29428, 29431, 29441, 29427, 29443, 29434, 37350, 37351, 37352, 37353, 37354, 37355, 37356, 37357, 37358, 37359, 37360, 37361, 37362, 37363, 37364, 37365, 37366, 37367, 37368, 37369, 37370, 37371, 37372, 37373, 37374, 37375, 37376, 37377, 37378, 37379, 37380, 37381, 37382, 37383, 37384, 37385, 37386, 37387, 37388, 37389, 37390, 37391, 37392, 37393, 37394, 37395, 37396, 37397, 37398, 37399, 37400, 37401, 37402, 37403, 37404, 37405, 37406, 37407, 37408, 37409, 37410, 37411, 37412, 37413, 37414, 37415, 37416, 37417, 37418, 37419, 37420, 37421, 37422, 37423, 37424, 37425, 37426, 37427, 37428, 37429, 37430, 37431, 37432, 37433, 37434, 37435, 37436, 37437, 37438, 37439, 37440, 37441, 37442, 37443, 37444, 37445, 29435, 29463, 29459, 29473, 29450, 29470, 29469, 29461, 29474, 29497, 29477, 29484, 29496, 29489, 29520, 29517, 29527, 29536, 29548, 29551, 29566, 33307, 22821, 39143, 22820, 22786, 39267, 39271, 39272, 39273, 39274, 39275, 39276, 39284, 39287, 39293, 39296, 39300, 39303, 39306, 39309, 39312, 39313, 39315, 39316, 39317, 24192, 24209, 24203, 24214, 24229, 24224, 24249, 24245, 24254, 24243, 36179, 24274, 24273, 24283, 24296, 24298, 33210, 24516, 24521, 24534, 24527, 24579, 24558, 24580, 24545, 24548, 24574, 24581, 24582, 24554, 24557, 24568, 24601, 24629, 24614, 24603, 24591, 24589, 24617, 24619, 24586, 24639, 24609, 24696, 24697, 24699, 24698, 24642, 37446, 37447, 37448, 37449, 37450, 37451, 37452, 37453, 37454, 37455, 37456, 37457, 37458, 37459, 37460, 37461, 37462, 37463, 37464, 37465, 37466, 37467, 37468, 37469, 37470, 37471, 37472, 37473, 37474, 37475, 37476, 37477, 37478, 37479, 37480, 37481, 37482, 37483, 37484, 37485, 37486, 37487, 37488, 37489, 37490, 37491, 37493, 37494, 37495, 37496, 37497, 37498, 37499, 37500, 37501, 37502, 37503, 37504, 37505, 37506, 37507, 37508, 37509, 37510, 37511, 37512, 37513, 37514, 37515, 37516, 37517, 37519, 37520, 37521, 37522, 37523, 37524, 37525, 37526, 37527, 37528, 37529, 37530, 37531, 37532, 37533, 37534, 37535, 37536, 37537, 37538, 37539, 37540, 37541, 37542, 37543, 24682, 24701, 24726, 24730, 24749, 24733, 24707, 24722, 24716, 24731, 24812, 24763, 24753, 24797, 24792, 24774, 24794, 24756, 24864, 24870, 24853, 24867, 24820, 24832, 24846, 24875, 24906, 24949, 25004, 24980, 24999, 25015, 25044, 25077, 24541, 38579, 38377, 38379, 38385, 38387, 38389, 38390, 38396, 38398, 38403, 38404, 38406, 38408, 38410, 38411, 38412, 38413, 38415, 38418, 38421, 38422, 38423, 38425, 38426, 20012, 29247, 25109, 27701, 27732, 27740, 27722, 27811, 27781, 27792, 27796, 27788, 27752, 27753, 27764, 27766, 27782, 27817, 27856, 27860, 27821, 27895, 27896, 27889, 27863, 27826, 27872, 27862, 27898, 27883, 27886, 27825, 27859, 27887, 27902, 37544, 37545, 37546, 37547, 37548, 37549, 37551, 37552, 37553, 37554, 37555, 37556, 37557, 37558, 37559, 37560, 37561, 37562, 37563, 37564, 37565, 37566, 37567, 37568, 37569, 37570, 37571, 37572, 37573, 37574, 37575, 37577, 37578, 37579, 37580, 37581, 37582, 37583, 37584, 37585, 37586, 37587, 37588, 37589, 37590, 37591, 37592, 37593, 37594, 37595, 37596, 37597, 37598, 37599, 37600, 37601, 37602, 37603, 37604, 37605, 37606, 37607, 37608, 37609, 37610, 37611, 37612, 37613, 37614, 37615, 37616, 37617, 37618, 37619, 37620, 37621, 37622, 37623, 37624, 37625, 37626, 37627, 37628, 37629, 37630, 37631, 37632, 37633, 37634, 37635, 37636, 37637, 37638, 37639, 37640, 37641, 27961, 27943, 27916, 27971, 27976, 27911, 27908, 27929, 27918, 27947, 27981, 27950, 27957, 27930, 27983, 27986, 27988, 27955, 28049, 28015, 28062, 28064, 27998, 28051, 28052, 27996, 28e3, 28028, 28003, 28186, 28103, 28101, 28126, 28174, 28095, 28128, 28177, 28134, 28125, 28121, 28182, 28075, 28172, 28078, 28203, 28270, 28238, 28267, 28338, 28255, 28294, 28243, 28244, 28210, 28197, 28228, 28383, 28337, 28312, 28384, 28461, 28386, 28325, 28327, 28349, 28347, 28343, 28375, 28340, 28367, 28303, 28354, 28319, 28514, 28486, 28487, 28452, 28437, 28409, 28463, 28470, 28491, 28532, 28458, 28425, 28457, 28553, 28557, 28556, 28536, 28530, 28540, 28538, 28625, 37642, 37643, 37644, 37645, 37646, 37647, 37648, 37649, 37650, 37651, 37652, 37653, 37654, 37655, 37656, 37657, 37658, 37659, 37660, 37661, 37662, 37663, 37664, 37665, 37666, 37667, 37668, 37669, 37670, 37671, 37672, 37673, 37674, 37675, 37676, 37677, 37678, 37679, 37680, 37681, 37682, 37683, 37684, 37685, 37686, 37687, 37688, 37689, 37690, 37691, 37692, 37693, 37695, 37696, 37697, 37698, 37699, 37700, 37701, 37702, 37703, 37704, 37705, 37706, 37707, 37708, 37709, 37710, 37711, 37712, 37713, 37714, 37715, 37716, 37717, 37718, 37719, 37720, 37721, 37722, 37723, 37724, 37725, 37726, 37727, 37728, 37729, 37730, 37731, 37732, 37733, 37734, 37735, 37736, 37737, 37739, 28617, 28583, 28601, 28598, 28610, 28641, 28654, 28638, 28640, 28655, 28698, 28707, 28699, 28729, 28725, 28751, 28766, 23424, 23428, 23445, 23443, 23461, 23480, 29999, 39582, 25652, 23524, 23534, 35120, 23536, 36423, 35591, 36790, 36819, 36821, 36837, 36846, 36836, 36841, 36838, 36851, 36840, 36869, 36868, 36875, 36902, 36881, 36877, 36886, 36897, 36917, 36918, 36909, 36911, 36932, 36945, 36946, 36944, 36968, 36952, 36962, 36955, 26297, 36980, 36989, 36994, 37e3, 36995, 37003, 24400, 24407, 24406, 24408, 23611, 21675, 23632, 23641, 23409, 23651, 23654, 32700, 24362, 24361, 24365, 33396, 24380, 39739, 23662, 22913, 22915, 22925, 22953, 22954, 22947, 37740, 37741, 37742, 37743, 37744, 37745, 37746, 37747, 37748, 37749, 37750, 37751, 37752, 37753, 37754, 37755, 37756, 37757, 37758, 37759, 37760, 37761, 37762, 37763, 37764, 37765, 37766, 37767, 37768, 37769, 37770, 37771, 37772, 37773, 37774, 37776, 37777, 37778, 37779, 37780, 37781, 37782, 37783, 37784, 37785, 37786, 37787, 37788, 37789, 37790, 37791, 37792, 37793, 37794, 37795, 37796, 37797, 37798, 37799, 37800, 37801, 37802, 37803, 37804, 37805, 37806, 37807, 37808, 37809, 37810, 37811, 37812, 37813, 37814, 37815, 37816, 37817, 37818, 37819, 37820, 37821, 37822, 37823, 37824, 37825, 37826, 37827, 37828, 37829, 37830, 37831, 37832, 37833, 37835, 37836, 37837, 22935, 22986, 22955, 22942, 22948, 22994, 22962, 22959, 22999, 22974, 23045, 23046, 23005, 23048, 23011, 23e3, 23033, 23052, 23049, 23090, 23092, 23057, 23075, 23059, 23104, 23143, 23114, 23125, 23100, 23138, 23157, 33004, 23210, 23195, 23159, 23162, 23230, 23275, 23218, 23250, 23252, 23224, 23264, 23267, 23281, 23254, 23270, 23256, 23260, 23305, 23319, 23318, 23346, 23351, 23360, 23573, 23580, 23386, 23397, 23411, 23377, 23379, 23394, 39541, 39543, 39544, 39546, 39551, 39549, 39552, 39553, 39557, 39560, 39562, 39568, 39570, 39571, 39574, 39576, 39579, 39580, 39581, 39583, 39584, 39586, 39587, 39589, 39591, 32415, 32417, 32419, 32421, 32424, 32425, 37838, 37839, 37840, 37841, 37842, 37843, 37844, 37845, 37847, 37848, 37849, 37850, 37851, 37852, 37853, 37854, 37855, 37856, 37857, 37858, 37859, 37860, 37861, 37862, 37863, 37864, 37865, 37866, 37867, 37868, 37869, 37870, 37871, 37872, 37873, 37874, 37875, 37876, 37877, 37878, 37879, 37880, 37881, 37882, 37883, 37884, 37885, 37886, 37887, 37888, 37889, 37890, 37891, 37892, 37893, 37894, 37895, 37896, 37897, 37898, 37899, 37900, 37901, 37902, 37903, 37904, 37905, 37906, 37907, 37908, 37909, 37910, 37911, 37912, 37913, 37914, 37915, 37916, 37917, 37918, 37919, 37920, 37921, 37922, 37923, 37924, 37925, 37926, 37927, 37928, 37929, 37930, 37931, 37932, 37933, 37934, 32429, 32432, 32446, 32448, 32449, 32450, 32457, 32459, 32460, 32464, 32468, 32471, 32475, 32480, 32481, 32488, 32491, 32494, 32495, 32497, 32498, 32525, 32502, 32506, 32507, 32510, 32513, 32514, 32515, 32519, 32520, 32523, 32524, 32527, 32529, 32530, 32535, 32537, 32540, 32539, 32543, 32545, 32546, 32547, 32548, 32549, 32550, 32551, 32554, 32555, 32556, 32557, 32559, 32560, 32561, 32562, 32563, 32565, 24186, 30079, 24027, 30014, 37013, 29582, 29585, 29614, 29602, 29599, 29647, 29634, 29649, 29623, 29619, 29632, 29641, 29640, 29669, 29657, 39036, 29706, 29673, 29671, 29662, 29626, 29682, 29711, 29738, 29787, 29734, 29733, 29736, 29744, 29742, 29740, 37935, 37936, 37937, 37938, 37939, 37940, 37941, 37942, 37943, 37944, 37945, 37946, 37947, 37948, 37949, 37951, 37952, 37953, 37954, 37955, 37956, 37957, 37958, 37959, 37960, 37961, 37962, 37963, 37964, 37965, 37966, 37967, 37968, 37969, 37970, 37971, 37972, 37973, 37974, 37975, 37976, 37977, 37978, 37979, 37980, 37981, 37982, 37983, 37984, 37985, 37986, 37987, 37988, 37989, 37990, 37991, 37992, 37993, 37994, 37996, 37997, 37998, 37999, 38e3, 38001, 38002, 38003, 38004, 38005, 38006, 38007, 38008, 38009, 38010, 38011, 38012, 38013, 38014, 38015, 38016, 38017, 38018, 38019, 38020, 38033, 38038, 38040, 38087, 38095, 38099, 38100, 38106, 38118, 38139, 38172, 38176, 29723, 29722, 29761, 29788, 29783, 29781, 29785, 29815, 29805, 29822, 29852, 29838, 29824, 29825, 29831, 29835, 29854, 29864, 29865, 29840, 29863, 29906, 29882, 38890, 38891, 38892, 26444, 26451, 26462, 26440, 26473, 26533, 26503, 26474, 26483, 26520, 26535, 26485, 26536, 26526, 26541, 26507, 26487, 26492, 26608, 26633, 26584, 26634, 26601, 26544, 26636, 26585, 26549, 26586, 26547, 26589, 26624, 26563, 26552, 26594, 26638, 26561, 26621, 26674, 26675, 26720, 26721, 26702, 26722, 26692, 26724, 26755, 26653, 26709, 26726, 26689, 26727, 26688, 26686, 26698, 26697, 26665, 26805, 26767, 26740, 26743, 26771, 26731, 26818, 26990, 26876, 26911, 26912, 26873, 38183, 38195, 38205, 38211, 38216, 38219, 38229, 38234, 38240, 38254, 38260, 38261, 38263, 38264, 38265, 38266, 38267, 38268, 38269, 38270, 38272, 38273, 38274, 38275, 38276, 38277, 38278, 38279, 38280, 38281, 38282, 38283, 38284, 38285, 38286, 38287, 38288, 38289, 38290, 38291, 38292, 38293, 38294, 38295, 38296, 38297, 38298, 38299, 38300, 38301, 38302, 38303, 38304, 38305, 38306, 38307, 38308, 38309, 38310, 38311, 38312, 38313, 38314, 38315, 38316, 38317, 38318, 38319, 38320, 38321, 38322, 38323, 38324, 38325, 38326, 38327, 38328, 38329, 38330, 38331, 38332, 38333, 38334, 38335, 38336, 38337, 38338, 38339, 38340, 38341, 38342, 38343, 38344, 38345, 38346, 38347, 26916, 26864, 26891, 26881, 26967, 26851, 26896, 26993, 26937, 26976, 26946, 26973, 27012, 26987, 27008, 27032, 27e3, 26932, 27084, 27015, 27016, 27086, 27017, 26982, 26979, 27001, 27035, 27047, 27067, 27051, 27053, 27092, 27057, 27073, 27082, 27103, 27029, 27104, 27021, 27135, 27183, 27117, 27159, 27160, 27237, 27122, 27204, 27198, 27296, 27216, 27227, 27189, 27278, 27257, 27197, 27176, 27224, 27260, 27281, 27280, 27305, 27287, 27307, 29495, 29522, 27521, 27522, 27527, 27524, 27538, 27539, 27533, 27546, 27547, 27553, 27562, 36715, 36717, 36721, 36722, 36723, 36725, 36726, 36728, 36727, 36729, 36730, 36732, 36734, 36737, 36738, 36740, 36743, 36747, 38348, 38349, 38350, 38351, 38352, 38353, 38354, 38355, 38356, 38357, 38358, 38359, 38360, 38361, 38362, 38363, 38364, 38365, 38366, 38367, 38368, 38369, 38370, 38371, 38372, 38373, 38374, 38375, 38380, 38399, 38407, 38419, 38424, 38427, 38430, 38432, 38435, 38436, 38437, 38438, 38439, 38440, 38441, 38443, 38444, 38445, 38447, 38448, 38455, 38456, 38457, 38458, 38462, 38465, 38467, 38474, 38478, 38479, 38481, 38482, 38483, 38486, 38487, 38488, 38489, 38490, 38492, 38493, 38494, 38496, 38499, 38501, 38502, 38507, 38509, 38510, 38511, 38512, 38513, 38515, 38520, 38521, 38522, 38523, 38524, 38525, 38526, 38527, 38528, 38529, 38530, 38531, 38532, 38535, 38537, 38538, 36749, 36750, 36751, 36760, 36762, 36558, 25099, 25111, 25115, 25119, 25122, 25121, 25125, 25124, 25132, 33255, 29935, 29940, 29951, 29967, 29969, 29971, 25908, 26094, 26095, 26096, 26122, 26137, 26482, 26115, 26133, 26112, 28805, 26359, 26141, 26164, 26161, 26166, 26165, 32774, 26207, 26196, 26177, 26191, 26198, 26209, 26199, 26231, 26244, 26252, 26279, 26269, 26302, 26331, 26332, 26342, 26345, 36146, 36147, 36150, 36155, 36157, 36160, 36165, 36166, 36168, 36169, 36167, 36173, 36181, 36185, 35271, 35274, 35275, 35276, 35278, 35279, 35280, 35281, 29294, 29343, 29277, 29286, 29295, 29310, 29311, 29316, 29323, 29325, 29327, 29330, 25352, 25394, 25520, 38540, 38542, 38545, 38546, 38547, 38549, 38550, 38554, 38555, 38557, 38558, 38559, 38560, 38561, 38562, 38563, 38564, 38565, 38566, 38568, 38569, 38570, 38571, 38572, 38573, 38574, 38575, 38577, 38578, 38580, 38581, 38583, 38584, 38586, 38587, 38591, 38594, 38595, 38600, 38602, 38603, 38608, 38609, 38611, 38612, 38614, 38615, 38616, 38617, 38618, 38619, 38620, 38621, 38622, 38623, 38625, 38626, 38627, 38628, 38629, 38630, 38631, 38635, 38636, 38637, 38638, 38640, 38641, 38642, 38644, 38645, 38648, 38650, 38651, 38652, 38653, 38655, 38658, 38659, 38661, 38666, 38667, 38668, 38672, 38673, 38674, 38676, 38677, 38679, 38680, 38681, 38682, 38683, 38685, 38687, 38688, 25663, 25816, 32772, 27626, 27635, 27645, 27637, 27641, 27653, 27655, 27654, 27661, 27669, 27672, 27673, 27674, 27681, 27689, 27684, 27690, 27698, 25909, 25941, 25963, 29261, 29266, 29270, 29232, 34402, 21014, 32927, 32924, 32915, 32956, 26378, 32957, 32945, 32939, 32941, 32948, 32951, 32999, 33e3, 33001, 33002, 32987, 32962, 32964, 32985, 32973, 32983, 26384, 32989, 33003, 33009, 33012, 33005, 33037, 33038, 33010, 33020, 26389, 33042, 35930, 33078, 33054, 33068, 33048, 33074, 33096, 33100, 33107, 33140, 33113, 33114, 33137, 33120, 33129, 33148, 33149, 33133, 33127, 22605, 23221, 33160, 33154, 33169, 28373, 33187, 33194, 33228, 26406, 33226, 33211, 38689, 38690, 38691, 38692, 38693, 38694, 38695, 38696, 38697, 38699, 38700, 38702, 38703, 38705, 38707, 38708, 38709, 38710, 38711, 38714, 38715, 38716, 38717, 38719, 38720, 38721, 38722, 38723, 38724, 38725, 38726, 38727, 38728, 38729, 38730, 38731, 38732, 38733, 38734, 38735, 38736, 38737, 38740, 38741, 38743, 38744, 38746, 38748, 38749, 38751, 38755, 38756, 38758, 38759, 38760, 38762, 38763, 38764, 38765, 38766, 38767, 38768, 38769, 38770, 38773, 38775, 38776, 38777, 38778, 38779, 38781, 38782, 38783, 38784, 38785, 38786, 38787, 38788, 38790, 38791, 38792, 38793, 38794, 38796, 38798, 38799, 38800, 38803, 38805, 38806, 38807, 38809, 38810, 38811, 38812, 38813, 33217, 33190, 27428, 27447, 27449, 27459, 27462, 27481, 39121, 39122, 39123, 39125, 39129, 39130, 27571, 24384, 27586, 35315, 26e3, 40785, 26003, 26044, 26054, 26052, 26051, 26060, 26062, 26066, 26070, 28800, 28828, 28822, 28829, 28859, 28864, 28855, 28843, 28849, 28904, 28874, 28944, 28947, 28950, 28975, 28977, 29043, 29020, 29032, 28997, 29042, 29002, 29048, 29050, 29080, 29107, 29109, 29096, 29088, 29152, 29140, 29159, 29177, 29213, 29224, 28780, 28952, 29030, 29113, 25150, 25149, 25155, 25160, 25161, 31035, 31040, 31046, 31049, 31067, 31068, 31059, 31066, 31074, 31063, 31072, 31087, 31079, 31098, 31109, 31114, 31130, 31143, 31155, 24529, 24528, 38814, 38815, 38817, 38818, 38820, 38821, 38822, 38823, 38824, 38825, 38826, 38828, 38830, 38832, 38833, 38835, 38837, 38838, 38839, 38840, 38841, 38842, 38843, 38844, 38845, 38846, 38847, 38848, 38849, 38850, 38851, 38852, 38853, 38854, 38855, 38856, 38857, 38858, 38859, 38860, 38861, 38862, 38863, 38864, 38865, 38866, 38867, 38868, 38869, 38870, 38871, 38872, 38873, 38874, 38875, 38876, 38877, 38878, 38879, 38880, 38881, 38882, 38883, 38884, 38885, 38888, 38894, 38895, 38896, 38897, 38898, 38900, 38903, 38904, 38905, 38906, 38907, 38908, 38909, 38910, 38911, 38912, 38913, 38914, 38915, 38916, 38917, 38918, 38919, 38920, 38921, 38922, 38923, 38924, 38925, 38926, 24636, 24669, 24666, 24679, 24641, 24665, 24675, 24747, 24838, 24845, 24925, 25001, 24989, 25035, 25041, 25094, 32896, 32895, 27795, 27894, 28156, 30710, 30712, 30720, 30729, 30743, 30744, 30737, 26027, 30765, 30748, 30749, 30777, 30778, 30779, 30751, 30780, 30757, 30764, 30755, 30761, 30798, 30829, 30806, 30807, 30758, 30800, 30791, 30796, 30826, 30875, 30867, 30874, 30855, 30876, 30881, 30883, 30898, 30905, 30885, 30932, 30937, 30921, 30956, 30962, 30981, 30964, 30995, 31012, 31006, 31028, 40859, 40697, 40699, 40700, 30449, 30468, 30477, 30457, 30471, 30472, 30490, 30498, 30489, 30509, 30502, 30517, 30520, 30544, 30545, 30535, 30531, 30554, 30568, 38927, 38928, 38929, 38930, 38931, 38932, 38933, 38934, 38935, 38936, 38937, 38938, 38939, 38940, 38941, 38942, 38943, 38944, 38945, 38946, 38947, 38948, 38949, 38950, 38951, 38952, 38953, 38954, 38955, 38956, 38957, 38958, 38959, 38960, 38961, 38962, 38963, 38964, 38965, 38966, 38967, 38968, 38969, 38970, 38971, 38972, 38973, 38974, 38975, 38976, 38977, 38978, 38979, 38980, 38981, 38982, 38983, 38984, 38985, 38986, 38987, 38988, 38989, 38990, 38991, 38992, 38993, 38994, 38995, 38996, 38997, 38998, 38999, 39e3, 39001, 39002, 39003, 39004, 39005, 39006, 39007, 39008, 39009, 39010, 39011, 39012, 39013, 39014, 39015, 39016, 39017, 39018, 39019, 39020, 39021, 39022, 30562, 30565, 30591, 30605, 30589, 30592, 30604, 30609, 30623, 30624, 30640, 30645, 30653, 30010, 30016, 30030, 30027, 30024, 30043, 30066, 30073, 30083, 32600, 32609, 32607, 35400, 32616, 32628, 32625, 32633, 32641, 32638, 30413, 30437, 34866, 38021, 38022, 38023, 38027, 38026, 38028, 38029, 38031, 38032, 38036, 38039, 38037, 38042, 38043, 38044, 38051, 38052, 38059, 38058, 38061, 38060, 38063, 38064, 38066, 38068, 38070, 38071, 38072, 38073, 38074, 38076, 38077, 38079, 38084, 38088, 38089, 38090, 38091, 38092, 38093, 38094, 38096, 38097, 38098, 38101, 38102, 38103, 38105, 38104, 38107, 38110, 38111, 38112, 38114, 38116, 38117, 38119, 38120, 38122, 39023, 39024, 39025, 39026, 39027, 39028, 39051, 39054, 39058, 39061, 39065, 39075, 39080, 39081, 39082, 39083, 39084, 39085, 39086, 39087, 39088, 39089, 39090, 39091, 39092, 39093, 39094, 39095, 39096, 39097, 39098, 39099, 39100, 39101, 39102, 39103, 39104, 39105, 39106, 39107, 39108, 39109, 39110, 39111, 39112, 39113, 39114, 39115, 39116, 39117, 39119, 39120, 39124, 39126, 39127, 39131, 39132, 39133, 39136, 39137, 39138, 39139, 39140, 39141, 39142, 39145, 39146, 39147, 39148, 39149, 39150, 39151, 39152, 39153, 39154, 39155, 39156, 39157, 39158, 39159, 39160, 39161, 39162, 39163, 39164, 39165, 39166, 39167, 39168, 39169, 39170, 39171, 39172, 39173, 39174, 39175, 38121, 38123, 38126, 38127, 38131, 38132, 38133, 38135, 38137, 38140, 38141, 38143, 38147, 38146, 38150, 38151, 38153, 38154, 38157, 38158, 38159, 38162, 38163, 38164, 38165, 38166, 38168, 38171, 38173, 38174, 38175, 38178, 38186, 38187, 38185, 38188, 38193, 38194, 38196, 38198, 38199, 38200, 38204, 38206, 38207, 38210, 38197, 38212, 38213, 38214, 38217, 38220, 38222, 38223, 38226, 38227, 38228, 38230, 38231, 38232, 38233, 38235, 38238, 38239, 38237, 38241, 38242, 38244, 38245, 38246, 38247, 38248, 38249, 38250, 38251, 38252, 38255, 38257, 38258, 38259, 38202, 30695, 30700, 38601, 31189, 31213, 31203, 31211, 31238, 23879, 31235, 31234, 31262, 31252, 39176, 39177, 39178, 39179, 39180, 39182, 39183, 39185, 39186, 39187, 39188, 39189, 39190, 39191, 39192, 39193, 39194, 39195, 39196, 39197, 39198, 39199, 39200, 39201, 39202, 39203, 39204, 39205, 39206, 39207, 39208, 39209, 39210, 39211, 39212, 39213, 39215, 39216, 39217, 39218, 39219, 39220, 39221, 39222, 39223, 39224, 39225, 39226, 39227, 39228, 39229, 39230, 39231, 39232, 39233, 39234, 39235, 39236, 39237, 39238, 39239, 39240, 39241, 39242, 39243, 39244, 39245, 39246, 39247, 39248, 39249, 39250, 39251, 39254, 39255, 39256, 39257, 39258, 39259, 39260, 39261, 39262, 39263, 39264, 39265, 39266, 39268, 39270, 39283, 39288, 39289, 39291, 39294, 39298, 39299, 39305, 31289, 31287, 31313, 40655, 39333, 31344, 30344, 30350, 30355, 30361, 30372, 29918, 29920, 29996, 40480, 40482, 40488, 40489, 40490, 40491, 40492, 40498, 40497, 40502, 40504, 40503, 40505, 40506, 40510, 40513, 40514, 40516, 40518, 40519, 40520, 40521, 40523, 40524, 40526, 40529, 40533, 40535, 40538, 40539, 40540, 40542, 40547, 40550, 40551, 40552, 40553, 40554, 40555, 40556, 40561, 40557, 40563, 30098, 30100, 30102, 30112, 30109, 30124, 30115, 30131, 30132, 30136, 30148, 30129, 30128, 30147, 30146, 30166, 30157, 30179, 30184, 30182, 30180, 30187, 30183, 30211, 30193, 30204, 30207, 30224, 30208, 30213, 30220, 30231, 30218, 30245, 30232, 30229, 30233, 39308, 39310, 39322, 39323, 39324, 39325, 39326, 39327, 39328, 39329, 39330, 39331, 39332, 39334, 39335, 39337, 39338, 39339, 39340, 39341, 39342, 39343, 39344, 39345, 39346, 39347, 39348, 39349, 39350, 39351, 39352, 39353, 39354, 39355, 39356, 39357, 39358, 39359, 39360, 39361, 39362, 39363, 39364, 39365, 39366, 39367, 39368, 39369, 39370, 39371, 39372, 39373, 39374, 39375, 39376, 39377, 39378, 39379, 39380, 39381, 39382, 39383, 39384, 39385, 39386, 39387, 39388, 39389, 39390, 39391, 39392, 39393, 39394, 39395, 39396, 39397, 39398, 39399, 39400, 39401, 39402, 39403, 39404, 39405, 39406, 39407, 39408, 39409, 39410, 39411, 39412, 39413, 39414, 39415, 39416, 39417, 30235, 30268, 30242, 30240, 30272, 30253, 30256, 30271, 30261, 30275, 30270, 30259, 30285, 30302, 30292, 30300, 30294, 30315, 30319, 32714, 31462, 31352, 31353, 31360, 31366, 31368, 31381, 31398, 31392, 31404, 31400, 31405, 31411, 34916, 34921, 34930, 34941, 34943, 34946, 34978, 35014, 34999, 35004, 35017, 35042, 35022, 35043, 35045, 35057, 35098, 35068, 35048, 35070, 35056, 35105, 35097, 35091, 35099, 35082, 35124, 35115, 35126, 35137, 35174, 35195, 30091, 32997, 30386, 30388, 30684, 32786, 32788, 32790, 32796, 32800, 32802, 32805, 32806, 32807, 32809, 32808, 32817, 32779, 32821, 32835, 32838, 32845, 32850, 32873, 32881, 35203, 39032, 39040, 39043, 39418, 39419, 39420, 39421, 39422, 39423, 39424, 39425, 39426, 39427, 39428, 39429, 39430, 39431, 39432, 39433, 39434, 39435, 39436, 39437, 39438, 39439, 39440, 39441, 39442, 39443, 39444, 39445, 39446, 39447, 39448, 39449, 39450, 39451, 39452, 39453, 39454, 39455, 39456, 39457, 39458, 39459, 39460, 39461, 39462, 39463, 39464, 39465, 39466, 39467, 39468, 39469, 39470, 39471, 39472, 39473, 39474, 39475, 39476, 39477, 39478, 39479, 39480, 39481, 39482, 39483, 39484, 39485, 39486, 39487, 39488, 39489, 39490, 39491, 39492, 39493, 39494, 39495, 39496, 39497, 39498, 39499, 39500, 39501, 39502, 39503, 39504, 39505, 39506, 39507, 39508, 39509, 39510, 39511, 39512, 39513, 39049, 39052, 39053, 39055, 39060, 39066, 39067, 39070, 39071, 39073, 39074, 39077, 39078, 34381, 34388, 34412, 34414, 34431, 34426, 34428, 34427, 34472, 34445, 34443, 34476, 34461, 34471, 34467, 34474, 34451, 34473, 34486, 34500, 34485, 34510, 34480, 34490, 34481, 34479, 34505, 34511, 34484, 34537, 34545, 34546, 34541, 34547, 34512, 34579, 34526, 34548, 34527, 34520, 34513, 34563, 34567, 34552, 34568, 34570, 34573, 34569, 34595, 34619, 34590, 34597, 34606, 34586, 34622, 34632, 34612, 34609, 34601, 34615, 34623, 34690, 34594, 34685, 34686, 34683, 34656, 34672, 34636, 34670, 34699, 34643, 34659, 34684, 34660, 34649, 34661, 34707, 34735, 34728, 34770, 39514, 39515, 39516, 39517, 39518, 39519, 39520, 39521, 39522, 39523, 39524, 39525, 39526, 39527, 39528, 39529, 39530, 39531, 39538, 39555, 39561, 39565, 39566, 39572, 39573, 39577, 39590, 39593, 39594, 39595, 39596, 39597, 39598, 39599, 39602, 39603, 39604, 39605, 39609, 39611, 39613, 39614, 39615, 39619, 39620, 39622, 39623, 39624, 39625, 39626, 39629, 39630, 39631, 39632, 39634, 39636, 39637, 39638, 39639, 39641, 39642, 39643, 39644, 39645, 39646, 39648, 39650, 39651, 39652, 39653, 39655, 39656, 39657, 39658, 39660, 39662, 39664, 39665, 39666, 39667, 39668, 39669, 39670, 39671, 39672, 39674, 39676, 39677, 39678, 39679, 39680, 39681, 39682, 39684, 39685, 39686, 34758, 34696, 34693, 34733, 34711, 34691, 34731, 34789, 34732, 34741, 34739, 34763, 34771, 34749, 34769, 34752, 34762, 34779, 34794, 34784, 34798, 34838, 34835, 34814, 34826, 34843, 34849, 34873, 34876, 32566, 32578, 32580, 32581, 33296, 31482, 31485, 31496, 31491, 31492, 31509, 31498, 31531, 31503, 31559, 31544, 31530, 31513, 31534, 31537, 31520, 31525, 31524, 31539, 31550, 31518, 31576, 31578, 31557, 31605, 31564, 31581, 31584, 31598, 31611, 31586, 31602, 31601, 31632, 31654, 31655, 31672, 31660, 31645, 31656, 31621, 31658, 31644, 31650, 31659, 31668, 31697, 31681, 31692, 31709, 31706, 31717, 31718, 31722, 31756, 31742, 31740, 31759, 31766, 31755, 39687, 39689, 39690, 39691, 39692, 39693, 39694, 39696, 39697, 39698, 39700, 39701, 39702, 39703, 39704, 39705, 39706, 39707, 39708, 39709, 39710, 39712, 39713, 39714, 39716, 39717, 39718, 39719, 39720, 39721, 39722, 39723, 39724, 39725, 39726, 39728, 39729, 39731, 39732, 39733, 39734, 39735, 39736, 39737, 39738, 39741, 39742, 39743, 39744, 39750, 39754, 39755, 39756, 39758, 39760, 39762, 39763, 39765, 39766, 39767, 39768, 39769, 39770, 39771, 39772, 39773, 39774, 39775, 39776, 39777, 39778, 39779, 39780, 39781, 39782, 39783, 39784, 39785, 39786, 39787, 39788, 39789, 39790, 39791, 39792, 39793, 39794, 39795, 39796, 39797, 39798, 39799, 39800, 39801, 39802, 39803, 31775, 31786, 31782, 31800, 31809, 31808, 33278, 33281, 33282, 33284, 33260, 34884, 33313, 33314, 33315, 33325, 33327, 33320, 33323, 33336, 33339, 33331, 33332, 33342, 33348, 33353, 33355, 33359, 33370, 33375, 33384, 34942, 34949, 34952, 35032, 35039, 35166, 32669, 32671, 32679, 32687, 32688, 32690, 31868, 25929, 31889, 31901, 31900, 31902, 31906, 31922, 31932, 31933, 31937, 31943, 31948, 31949, 31944, 31941, 31959, 31976, 33390, 26280, 32703, 32718, 32725, 32741, 32737, 32742, 32745, 32750, 32755, 31992, 32119, 32166, 32174, 32327, 32411, 40632, 40628, 36211, 36228, 36244, 36241, 36273, 36199, 36205, 35911, 35913, 37194, 37200, 37198, 37199, 37220, 39804, 39805, 39806, 39807, 39808, 39809, 39810, 39811, 39812, 39813, 39814, 39815, 39816, 39817, 39818, 39819, 39820, 39821, 39822, 39823, 39824, 39825, 39826, 39827, 39828, 39829, 39830, 39831, 39832, 39833, 39834, 39835, 39836, 39837, 39838, 39839, 39840, 39841, 39842, 39843, 39844, 39845, 39846, 39847, 39848, 39849, 39850, 39851, 39852, 39853, 39854, 39855, 39856, 39857, 39858, 39859, 39860, 39861, 39862, 39863, 39864, 39865, 39866, 39867, 39868, 39869, 39870, 39871, 39872, 39873, 39874, 39875, 39876, 39877, 39878, 39879, 39880, 39881, 39882, 39883, 39884, 39885, 39886, 39887, 39888, 39889, 39890, 39891, 39892, 39893, 39894, 39895, 39896, 39897, 39898, 39899, 37218, 37217, 37232, 37225, 37231, 37245, 37246, 37234, 37236, 37241, 37260, 37253, 37264, 37261, 37265, 37282, 37283, 37290, 37293, 37294, 37295, 37301, 37300, 37306, 35925, 40574, 36280, 36331, 36357, 36441, 36457, 36277, 36287, 36284, 36282, 36292, 36310, 36311, 36314, 36318, 36302, 36303, 36315, 36294, 36332, 36343, 36344, 36323, 36345, 36347, 36324, 36361, 36349, 36372, 36381, 36383, 36396, 36398, 36387, 36399, 36410, 36416, 36409, 36405, 36413, 36401, 36425, 36417, 36418, 36433, 36434, 36426, 36464, 36470, 36476, 36463, 36468, 36485, 36495, 36500, 36496, 36508, 36510, 35960, 35970, 35978, 35973, 35992, 35988, 26011, 35286, 35294, 35290, 35292, 39900, 39901, 39902, 39903, 39904, 39905, 39906, 39907, 39908, 39909, 39910, 39911, 39912, 39913, 39914, 39915, 39916, 39917, 39918, 39919, 39920, 39921, 39922, 39923, 39924, 39925, 39926, 39927, 39928, 39929, 39930, 39931, 39932, 39933, 39934, 39935, 39936, 39937, 39938, 39939, 39940, 39941, 39942, 39943, 39944, 39945, 39946, 39947, 39948, 39949, 39950, 39951, 39952, 39953, 39954, 39955, 39956, 39957, 39958, 39959, 39960, 39961, 39962, 39963, 39964, 39965, 39966, 39967, 39968, 39969, 39970, 39971, 39972, 39973, 39974, 39975, 39976, 39977, 39978, 39979, 39980, 39981, 39982, 39983, 39984, 39985, 39986, 39987, 39988, 39989, 39990, 39991, 39992, 39993, 39994, 39995, 35301, 35307, 35311, 35390, 35622, 38739, 38633, 38643, 38639, 38662, 38657, 38664, 38671, 38670, 38698, 38701, 38704, 38718, 40832, 40835, 40837, 40838, 40839, 40840, 40841, 40842, 40844, 40702, 40715, 40717, 38585, 38588, 38589, 38606, 38610, 30655, 38624, 37518, 37550, 37576, 37694, 37738, 37834, 37775, 37950, 37995, 40063, 40066, 40069, 40070, 40071, 40072, 31267, 40075, 40078, 40080, 40081, 40082, 40084, 40085, 40090, 40091, 40094, 40095, 40096, 40097, 40098, 40099, 40101, 40102, 40103, 40104, 40105, 40107, 40109, 40110, 40112, 40113, 40114, 40115, 40116, 40117, 40118, 40119, 40122, 40123, 40124, 40125, 40132, 40133, 40134, 40135, 40138, 40139, 39996, 39997, 39998, 39999, 4e4, 40001, 40002, 40003, 40004, 40005, 40006, 40007, 40008, 40009, 40010, 40011, 40012, 40013, 40014, 40015, 40016, 40017, 40018, 40019, 40020, 40021, 40022, 40023, 40024, 40025, 40026, 40027, 40028, 40029, 40030, 40031, 40032, 40033, 40034, 40035, 40036, 40037, 40038, 40039, 40040, 40041, 40042, 40043, 40044, 40045, 40046, 40047, 40048, 40049, 40050, 40051, 40052, 40053, 40054, 40055, 40056, 40057, 40058, 40059, 40061, 40062, 40064, 40067, 40068, 40073, 40074, 40076, 40079, 40083, 40086, 40087, 40088, 40089, 40093, 40106, 40108, 40111, 40121, 40126, 40127, 40128, 40129, 40130, 40136, 40137, 40145, 40146, 40154, 40155, 40160, 40161, 40140, 40141, 40142, 40143, 40144, 40147, 40148, 40149, 40151, 40152, 40153, 40156, 40157, 40159, 40162, 38780, 38789, 38801, 38802, 38804, 38831, 38827, 38819, 38834, 38836, 39601, 39600, 39607, 40536, 39606, 39610, 39612, 39617, 39616, 39621, 39618, 39627, 39628, 39633, 39749, 39747, 39751, 39753, 39752, 39757, 39761, 39144, 39181, 39214, 39253, 39252, 39647, 39649, 39654, 39663, 39659, 39675, 39661, 39673, 39688, 39695, 39699, 39711, 39715, 40637, 40638, 32315, 40578, 40583, 40584, 40587, 40594, 37846, 40605, 40607, 40667, 40668, 40669, 40672, 40671, 40674, 40681, 40679, 40677, 40682, 40687, 40738, 40748, 40751, 40761, 40759, 40765, 40766, 40772, 40163, 40164, 40165, 40166, 40167, 40168, 40169, 40170, 40171, 40172, 40173, 40174, 40175, 40176, 40177, 40178, 40179, 40180, 40181, 40182, 40183, 40184, 40185, 40186, 40187, 40188, 40189, 40190, 40191, 40192, 40193, 40194, 40195, 40196, 40197, 40198, 40199, 40200, 40201, 40202, 40203, 40204, 40205, 40206, 40207, 40208, 40209, 40210, 40211, 40212, 40213, 40214, 40215, 40216, 40217, 40218, 40219, 40220, 40221, 40222, 40223, 40224, 40225, 40226, 40227, 40228, 40229, 40230, 40231, 40232, 40233, 40234, 40235, 40236, 40237, 40238, 40239, 40240, 40241, 40242, 40243, 40244, 40245, 40246, 40247, 40248, 40249, 40250, 40251, 40252, 40253, 40254, 40255, 40256, 40257, 40258, 57908, 57909, 57910, 57911, 57912, 57913, 57914, 57915, 57916, 57917, 57918, 57919, 57920, 57921, 57922, 57923, 57924, 57925, 57926, 57927, 57928, 57929, 57930, 57931, 57932, 57933, 57934, 57935, 57936, 57937, 57938, 57939, 57940, 57941, 57942, 57943, 57944, 57945, 57946, 57947, 57948, 57949, 57950, 57951, 57952, 57953, 57954, 57955, 57956, 57957, 57958, 57959, 57960, 57961, 57962, 57963, 57964, 57965, 57966, 57967, 57968, 57969, 57970, 57971, 57972, 57973, 57974, 57975, 57976, 57977, 57978, 57979, 57980, 57981, 57982, 57983, 57984, 57985, 57986, 57987, 57988, 57989, 57990, 57991, 57992, 57993, 57994, 57995, 57996, 57997, 57998, 57999, 58e3, 58001, 40259, 40260, 40261, 40262, 40263, 40264, 40265, 40266, 40267, 40268, 40269, 40270, 40271, 40272, 40273, 40274, 40275, 40276, 40277, 40278, 40279, 40280, 40281, 40282, 40283, 40284, 40285, 40286, 40287, 40288, 40289, 40290, 40291, 40292, 40293, 40294, 40295, 40296, 40297, 40298, 40299, 40300, 40301, 40302, 40303, 40304, 40305, 40306, 40307, 40308, 40309, 40310, 40311, 40312, 40313, 40314, 40315, 40316, 40317, 40318, 40319, 40320, 40321, 40322, 40323, 40324, 40325, 40326, 40327, 40328, 40329, 40330, 40331, 40332, 40333, 40334, 40335, 40336, 40337, 40338, 40339, 40340, 40341, 40342, 40343, 40344, 40345, 40346, 40347, 40348, 40349, 40350, 40351, 40352, 40353, 40354, 58002, 58003, 58004, 58005, 58006, 58007, 58008, 58009, 58010, 58011, 58012, 58013, 58014, 58015, 58016, 58017, 58018, 58019, 58020, 58021, 58022, 58023, 58024, 58025, 58026, 58027, 58028, 58029, 58030, 58031, 58032, 58033, 58034, 58035, 58036, 58037, 58038, 58039, 58040, 58041, 58042, 58043, 58044, 58045, 58046, 58047, 58048, 58049, 58050, 58051, 58052, 58053, 58054, 58055, 58056, 58057, 58058, 58059, 58060, 58061, 58062, 58063, 58064, 58065, 58066, 58067, 58068, 58069, 58070, 58071, 58072, 58073, 58074, 58075, 58076, 58077, 58078, 58079, 58080, 58081, 58082, 58083, 58084, 58085, 58086, 58087, 58088, 58089, 58090, 58091, 58092, 58093, 58094, 58095, 40355, 40356, 40357, 40358, 40359, 40360, 40361, 40362, 40363, 40364, 40365, 40366, 40367, 40368, 40369, 40370, 40371, 40372, 40373, 40374, 40375, 40376, 40377, 40378, 40379, 40380, 40381, 40382, 40383, 40384, 40385, 40386, 40387, 40388, 40389, 40390, 40391, 40392, 40393, 40394, 40395, 40396, 40397, 40398, 40399, 40400, 40401, 40402, 40403, 40404, 40405, 40406, 40407, 40408, 40409, 40410, 40411, 40412, 40413, 40414, 40415, 40416, 40417, 40418, 40419, 40420, 40421, 40422, 40423, 40424, 40425, 40426, 40427, 40428, 40429, 40430, 40431, 40432, 40433, 40434, 40435, 40436, 40437, 40438, 40439, 40440, 40441, 40442, 40443, 40444, 40445, 40446, 40447, 40448, 40449, 40450, 58096, 58097, 58098, 58099, 58100, 58101, 58102, 58103, 58104, 58105, 58106, 58107, 58108, 58109, 58110, 58111, 58112, 58113, 58114, 58115, 58116, 58117, 58118, 58119, 58120, 58121, 58122, 58123, 58124, 58125, 58126, 58127, 58128, 58129, 58130, 58131, 58132, 58133, 58134, 58135, 58136, 58137, 58138, 58139, 58140, 58141, 58142, 58143, 58144, 58145, 58146, 58147, 58148, 58149, 58150, 58151, 58152, 58153, 58154, 58155, 58156, 58157, 58158, 58159, 58160, 58161, 58162, 58163, 58164, 58165, 58166, 58167, 58168, 58169, 58170, 58171, 58172, 58173, 58174, 58175, 58176, 58177, 58178, 58179, 58180, 58181, 58182, 58183, 58184, 58185, 58186, 58187, 58188, 58189, 40451, 40452, 40453, 40454, 40455, 40456, 40457, 40458, 40459, 40460, 40461, 40462, 40463, 40464, 40465, 40466, 40467, 40468, 40469, 40470, 40471, 40472, 40473, 40474, 40475, 40476, 40477, 40478, 40484, 40487, 40494, 40496, 40500, 40507, 40508, 40512, 40525, 40528, 40530, 40531, 40532, 40534, 40537, 40541, 40543, 40544, 40545, 40546, 40549, 40558, 40559, 40562, 40564, 40565, 40566, 40567, 40568, 40569, 40570, 40571, 40572, 40573, 40576, 40577, 40579, 40580, 40581, 40582, 40585, 40586, 40588, 40589, 40590, 40591, 40592, 40593, 40596, 40597, 40598, 40599, 40600, 40601, 40602, 40603, 40604, 40606, 40608, 40609, 40610, 40611, 40612, 40613, 40615, 40616, 40617, 40618, 58190, 58191, 58192, 58193, 58194, 58195, 58196, 58197, 58198, 58199, 58200, 58201, 58202, 58203, 58204, 58205, 58206, 58207, 58208, 58209, 58210, 58211, 58212, 58213, 58214, 58215, 58216, 58217, 58218, 58219, 58220, 58221, 58222, 58223, 58224, 58225, 58226, 58227, 58228, 58229, 58230, 58231, 58232, 58233, 58234, 58235, 58236, 58237, 58238, 58239, 58240, 58241, 58242, 58243, 58244, 58245, 58246, 58247, 58248, 58249, 58250, 58251, 58252, 58253, 58254, 58255, 58256, 58257, 58258, 58259, 58260, 58261, 58262, 58263, 58264, 58265, 58266, 58267, 58268, 58269, 58270, 58271, 58272, 58273, 58274, 58275, 58276, 58277, 58278, 58279, 58280, 58281, 58282, 58283, 40619, 40620, 40621, 40622, 40623, 40624, 40625, 40626, 40627, 40629, 40630, 40631, 40633, 40634, 40636, 40639, 40640, 40641, 40642, 40643, 40645, 40646, 40647, 40648, 40650, 40651, 40652, 40656, 40658, 40659, 40661, 40662, 40663, 40665, 40666, 40670, 40673, 40675, 40676, 40678, 40680, 40683, 40684, 40685, 40686, 40688, 40689, 40690, 40691, 40692, 40693, 40694, 40695, 40696, 40698, 40701, 40703, 40704, 40705, 40706, 40707, 40708, 40709, 40710, 40711, 40712, 40713, 40714, 40716, 40719, 40721, 40722, 40724, 40725, 40726, 40728, 40730, 40731, 40732, 40733, 40734, 40735, 40737, 40739, 40740, 40741, 40742, 40743, 40744, 40745, 40746, 40747, 40749, 40750, 40752, 40753, 58284, 58285, 58286, 58287, 58288, 58289, 58290, 58291, 58292, 58293, 58294, 58295, 58296, 58297, 58298, 58299, 58300, 58301, 58302, 58303, 58304, 58305, 58306, 58307, 58308, 58309, 58310, 58311, 58312, 58313, 58314, 58315, 58316, 58317, 58318, 58319, 58320, 58321, 58322, 58323, 58324, 58325, 58326, 58327, 58328, 58329, 58330, 58331, 58332, 58333, 58334, 58335, 58336, 58337, 58338, 58339, 58340, 58341, 58342, 58343, 58344, 58345, 58346, 58347, 58348, 58349, 58350, 58351, 58352, 58353, 58354, 58355, 58356, 58357, 58358, 58359, 58360, 58361, 58362, 58363, 58364, 58365, 58366, 58367, 58368, 58369, 58370, 58371, 58372, 58373, 58374, 58375, 58376, 58377, 40754, 40755, 40756, 40757, 40758, 40760, 40762, 40764, 40767, 40768, 40769, 40770, 40771, 40773, 40774, 40775, 40776, 40777, 40778, 40779, 40780, 40781, 40782, 40783, 40786, 40787, 40788, 40789, 40790, 40791, 40792, 40793, 40794, 40795, 40796, 40797, 40798, 40799, 40800, 40801, 40802, 40803, 40804, 40805, 40806, 40807, 40808, 40809, 40810, 40811, 40812, 40813, 40814, 40815, 40816, 40817, 40818, 40819, 40820, 40821, 40822, 40823, 40824, 40825, 40826, 40827, 40828, 40829, 40830, 40833, 40834, 40845, 40846, 40847, 40848, 40849, 40850, 40851, 40852, 40853, 40854, 40855, 40856, 40860, 40861, 40862, 40865, 40866, 40867, 40868, 40869, 63788, 63865, 63893, 63975, 63985, 58378, 58379, 58380, 58381, 58382, 58383, 58384, 58385, 58386, 58387, 58388, 58389, 58390, 58391, 58392, 58393, 58394, 58395, 58396, 58397, 58398, 58399, 58400, 58401, 58402, 58403, 58404, 58405, 58406, 58407, 58408, 58409, 58410, 58411, 58412, 58413, 58414, 58415, 58416, 58417, 58418, 58419, 58420, 58421, 58422, 58423, 58424, 58425, 58426, 58427, 58428, 58429, 58430, 58431, 58432, 58433, 58434, 58435, 58436, 58437, 58438, 58439, 58440, 58441, 58442, 58443, 58444, 58445, 58446, 58447, 58448, 58449, 58450, 58451, 58452, 58453, 58454, 58455, 58456, 58457, 58458, 58459, 58460, 58461, 58462, 58463, 58464, 58465, 58466, 58467, 58468, 58469, 58470, 58471, 64012, 64013, 64014, 64015, 64017, 64019, 64020, 64024, 64031, 64032, 64033, 64035, 64036, 64039, 64040, 64041, 11905, 59414, 59415, 59416, 11908, 13427, 13383, 11912, 11915, 59422, 13726, 13850, 13838, 11916, 11927, 14702, 14616, 59430, 14799, 14815, 14963, 14800, 59435, 59436, 15182, 15470, 15584, 11943, 59441, 59442, 11946, 16470, 16735, 11950, 17207, 11955, 11958, 11959, 59451, 17329, 17324, 11963, 17373, 17622, 18017, 17996, 59459, 18211, 18217, 18300, 18317, 11978, 18759, 18810, 18813, 18818, 18819, 18821, 18822, 18847, 18843, 18871, 18870, 59476, 59477, 19619, 19615, 19616, 19617, 19575, 19618, 19731, 19732, 19733, 19734, 19735, 19736, 19737, 19886, 59492, 58472, 58473, 58474, 58475, 58476, 58477, 58478, 58479, 58480, 58481, 58482, 58483, 58484, 58485, 58486, 58487, 58488, 58489, 58490, 58491, 58492, 58493, 58494, 58495, 58496, 58497, 58498, 58499, 58500, 58501, 58502, 58503, 58504, 58505, 58506, 58507, 58508, 58509, 58510, 58511, 58512, 58513, 58514, 58515, 58516, 58517, 58518, 58519, 58520, 58521, 58522, 58523, 58524, 58525, 58526, 58527, 58528, 58529, 58530, 58531, 58532, 58533, 58534, 58535, 58536, 58537, 58538, 58539, 58540, 58541, 58542, 58543, 58544, 58545, 58546, 58547, 58548, 58549, 58550, 58551, 58552, 58553, 58554, 58555, 58556, 58557, 58558, 58559, 58560, 58561, 58562, 58563, 58564, 58565],
    "gb18030-ranges": [[0, 128], [36, 165], [38, 169], [45, 178], [50, 184], [81, 216], [89, 226], [95, 235], [96, 238], [100, 244], [103, 248], [104, 251], [105, 253], [109, 258], [126, 276], [133, 284], [148, 300], [172, 325], [175, 329], [179, 334], [208, 364], [306, 463], [307, 465], [308, 467], [309, 469], [310, 471], [311, 473], [312, 475], [313, 477], [341, 506], [428, 594], [443, 610], [544, 712], [545, 716], [558, 730], [741, 930], [742, 938], [749, 962], [750, 970], [805, 1026], [819, 1104], [820, 1106], [7922, 8209], [7924, 8215], [7925, 8218], [7927, 8222], [7934, 8231], [7943, 8241], [7944, 8244], [7945, 8246], [7950, 8252], [8062, 8365], [8148, 8452], [8149, 8454], [8152, 8458], [8164, 8471], [8174, 8482], [8236, 8556], [8240, 8570], [8262, 8596], [8264, 8602], [8374, 8713], [8380, 8720], [8381, 8722], [8384, 8726], [8388, 8731], [8390, 8737], [8392, 8740], [8393, 8742], [8394, 8748], [8396, 8751], [8401, 8760], [8406, 8766], [8416, 8777], [8419, 8781], [8424, 8787], [8437, 8802], [8439, 8808], [8445, 8816], [8482, 8854], [8485, 8858], [8496, 8870], [8521, 8896], [8603, 8979], [8936, 9322], [8946, 9372], [9046, 9548], [9050, 9588], [9063, 9616], [9066, 9622], [9076, 9634], [9092, 9652], [9100, 9662], [9108, 9672], [9111, 9676], [9113, 9680], [9131, 9702], [9162, 9735], [9164, 9738], [9218, 9793], [9219, 9795], [11329, 11906], [11331, 11909], [11334, 11913], [11336, 11917], [11346, 11928], [11361, 11944], [11363, 11947], [11366, 11951], [11370, 11956], [11372, 11960], [11375, 11964], [11389, 11979], [11682, 12284], [11686, 12292], [11687, 12312], [11692, 12319], [11694, 12330], [11714, 12351], [11716, 12436], [11723, 12447], [11725, 12535], [11730, 12543], [11736, 12586], [11982, 12842], [11989, 12850], [12102, 12964], [12336, 13200], [12348, 13215], [12350, 13218], [12384, 13253], [12393, 13263], [12395, 13267], [12397, 13270], [12510, 13384], [12553, 13428], [12851, 13727], [12962, 13839], [12973, 13851], [13738, 14617], [13823, 14703], [13919, 14801], [13933, 14816], [14080, 14964], [14298, 15183], [14585, 15471], [14698, 15585], [15583, 16471], [15847, 16736], [16318, 17208], [16434, 17325], [16438, 17330], [16481, 17374], [16729, 17623], [17102, 17997], [17122, 18018], [17315, 18212], [17320, 18218], [17402, 18301], [17418, 18318], [17859, 18760], [17909, 18811], [17911, 18814], [17915, 18820], [17916, 18823], [17936, 18844], [17939, 18848], [17961, 18872], [18664, 19576], [18703, 19620], [18814, 19738], [18962, 19887], [19043, 40870], [33469, 59244], [33470, 59336], [33471, 59367], [33484, 59413], [33485, 59417], [33490, 59423], [33497, 59431], [33501, 59437], [33505, 59443], [33513, 59452], [33520, 59460], [33536, 59478], [33550, 59493], [37845, 63789], [37921, 63866], [37948, 63894], [38029, 63976], [38038, 63986], [38064, 64016], [38065, 64018], [38066, 64021], [38069, 64025], [38075, 64034], [38076, 64037], [38078, 64042], [39108, 65074], [39109, 65093], [39113, 65107], [39114, 65112], [39115, 65127], [39116, 65132], [39265, 65375], [39394, 65510], [189e3, 65536]]
  };
})(void 0 || {}); 
 			});
 		define("src/assets/libs/fairygui.js", function(require, module, exports){ 			
"use strict";

window.fgui = {}, window.fairygui = window.fgui, window.__extends = void 0 && (void 0).__extends || function () {
  var _t = function t(e, i) {
    return (_t = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var i in e) {
        e.hasOwnProperty(i) && (t[i] = e[i]);
      }
    })(e, i);
  };

  return function (e, i) {
    function o() {
      this.constructor = e;
    }

    _t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o());
  };
}(), function (t) {
  var e = function () {
    function e() {}

    return e.prototype.createObject = function (e, i) {
      if (this._node) throw "Already running";
      var o = t.UIPackage.getByName(e);
      if (!o) throw new Error("package not found: " + e);
      var n = o.getItemByName(i);
      if (!n) throw new Error("resource not found: " + i);
      this.internalCreateObject(n);
    }, e.prototype.createObjectFromURL = function (e) {
      if (this._node) throw "Already running";
      var i = t.UIPackage.getItemByURL(e);
      if (!i) throw new Error("resource not found: " + e);
      this.internalCreateObject(i);
    }, e.prototype.cancel = function () {
      this._node && (this._node.destroy(), this._node = null);
    }, e.prototype.internalCreateObject = function (t) {
      this._node = new cc.Node("[AsyncCreating:" + t.name + "]"), this._node.parent = cc.director.getScene(), this._node.on("#", this.completed, this), this._node.addComponent(i).init(t);
    }, e.prototype.completed = function (t) {
      this.cancel(), this.callback && this.callback(t);
    }, e;
  }();

  t.AsyncOperation = e;

  var i = function (e) {
    function i() {
      var t = e.call(this) || this;
      return t._itemList = new Array(), t._objectPool = new Array(), t;
    }

    return __extends(i, e), i.prototype.init = function (t) {
      this._itemList.length = 0, this._objectPool.length = 0;
      var e = {
        pi: t,
        type: t.objectType
      };
      e.childCount = this.collectComponentChildren(t), this._itemList.push(e), this._index = 0;
    }, i.prototype.onDestroy = function () {
      this._itemList.length = 0;
      var t = this._objectPool.length;

      if (t > 0) {
        for (var e = 0; e < t; e++) {
          this._objectPool[e].dispose();
        }

        this._objectPool.length = 0;
      }
    }, i.prototype.collectComponentChildren = function (e) {
      var i,
          o,
          n,
          r,
          s,
          h,
          a = e.rawData;
      a.seek(0, 2);
      var l = a.readShort();

      for (n = 0; n < l; n++) {
        r = a.readShort(), s = a.position, a.seek(s, 0);

        var c = a.readByte(),
            u = a.readS(),
            _ = a.readS();

        a.position = s, null != u ? (i = {
          pi: o = null != (h = null != _ ? t.UIPackage.getById(_) : e.owner) ? h.getItemById(u) : null,
          type: c
        }, o && o.type == t.PackageItemType.Component && (i.childCount = this.collectComponentChildren(o))) : (i = {
          type: c
        }, c == t.ObjectType.List && (i.listItemCount = this.collectListChildren(a))), this._itemList.push(i), a.position = s + r;
      }

      return l;
    }, i.prototype.collectListChildren = function (e) {
      e.seek(e.position, 8);
      var i,
          o,
          n,
          r,
          s,
          h = 0,
          a = e.readS(),
          l = e.readShort();

      for (i = 0; i < l; i++) {
        o = e.readShort(), o += e.position, null == (n = e.readS()) && (n = a), n && (r = t.UIPackage.getItemByURL(n)) && (s = {
          pi: r,
          type: r.objectType
        }, r.type == t.PackageItemType.Component && (s.childCount = this.collectComponentChildren(r)), this._itemList.push(s), h++), e.position = o;
      }

      return h;
    }, i.prototype.update = function () {
      for (var e, i, o, n, r = t.ToolSet.getTime(), s = t.UIConfig.frameTimeForAsyncUIConstruction, h = this._itemList.length; this._index < h;) {
        if ((i = this._itemList[this._index]).pi) e = t.UIObjectFactory.newObject(i.pi), this._objectPool.push(e), t.UIPackage._constructing++, i.pi.type == t.PackageItemType.Component ? (o = this._objectPool.length - i.childCount - 1, e.constructFromResource2(this._objectPool, o), this._objectPool.splice(o, i.childCount)) : e.constructFromResource(), t.UIPackage._constructing--;else if (e = t.UIObjectFactory.newObject(i.type), this._objectPool.push(e), i.type == t.ObjectType.List && i.listItemCount > 0) {
          for (o = this._objectPool.length - i.listItemCount - 1, n = 0; n < i.listItemCount; n++) {
            e.itemPool.returnObject(this._objectPool[n + o]);
          }

          this._objectPool.splice(o, i.listItemCount);
        }
        if (this._index++, this._index % 5 == 0 && t.ToolSet.getTime() - r >= s) return;
      }

      var a = this._objectPool[0];
      this._itemList.length = 0, this._objectPool.length = 0, this.node.emit("#", a);
    }, i;
  }(cc.Component);
}(fgui || (fgui = {})), function (t) {
  var e = 0,
      i = function (i) {
    function o() {
      var t = i.call(this) || this;
      return t._pageIds = [], t._pageNames = [], t._selectedIndex = -1, t._previousIndex = -1, t;
    }

    return __extends(o, i), o.prototype.dispose = function () {}, Object.defineProperty(o.prototype, "selectedIndex", {
      get: function get() {
        return this._selectedIndex;
      },
      set: function set(e) {
        if (this._selectedIndex != e) {
          if (e > this._pageIds.length - 1) throw "index out of bounds: " + e;
          this.changing = !0, this._previousIndex = this._selectedIndex, this._selectedIndex = e, this.parent.applyController(this), this.emit(t.Event.STATUS_CHANGED, this), this.changing = !1;
        }
      },
      enumerable: !1,
      configurable: !0
    }), o.prototype.onChanged = function (e, i) {
      this.on(t.Event.STATUS_CHANGED, e, i);
    }, o.prototype.offChanged = function (e, i) {
      this.off(t.Event.STATUS_CHANGED, e, i);
    }, o.prototype.setSelectedIndex = function (t) {
      if (this._selectedIndex != t) {
        if (t > this._pageIds.length - 1) throw "index out of bounds: " + t;
        this.changing = !0, this._previousIndex = this._selectedIndex, this._selectedIndex = t, this.parent.applyController(this), this.changing = !1;
      }
    }, Object.defineProperty(o.prototype, "previsousIndex", {
      get: function get() {
        return this._previousIndex;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "selectedPage", {
      get: function get() {
        return -1 == this._selectedIndex ? null : this._pageNames[this._selectedIndex];
      },
      set: function set(t) {
        var e = this._pageNames.indexOf(t);

        -1 == e && (e = 0), this.selectedIndex = e;
      },
      enumerable: !1,
      configurable: !0
    }), o.prototype.setSelectedPage = function (t) {
      var e = this._pageNames.indexOf(t);

      -1 == e && (e = 0), this.setSelectedIndex(e);
    }, Object.defineProperty(o.prototype, "previousPage", {
      get: function get() {
        return -1 == this._previousIndex ? null : this._pageNames[this._previousIndex];
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "pageCount", {
      get: function get() {
        return this._pageIds.length;
      },
      enumerable: !1,
      configurable: !0
    }), o.prototype.getPageName = function (t) {
      return this._pageNames[t];
    }, o.prototype.addPage = function (t) {
      void 0 === t && (t = ""), this.addPageAt(t, this._pageIds.length);
    }, o.prototype.addPageAt = function (t, i) {
      var o = "" + e++;
      i == this._pageIds.length ? (this._pageIds.push(o), this._pageNames.push(t)) : (this._pageIds.splice(i, 0, o), this._pageNames.splice(i, 0, t));
    }, o.prototype.removePage = function (t) {
      var e = this._pageNames.indexOf(t);

      -1 != e && (this._pageIds.splice(e, 1), this._pageNames.splice(e, 1), this._selectedIndex >= this._pageIds.length ? this.selectedIndex = this._selectedIndex - 1 : this.parent.applyController(this));
    }, o.prototype.removePageAt = function (t) {
      this._pageIds.splice(t, 1), this._pageNames.splice(t, 1), this._selectedIndex >= this._pageIds.length ? this.selectedIndex = this._selectedIndex - 1 : this.parent.applyController(this);
    }, o.prototype.clearPages = function () {
      this._pageIds.length = 0, this._pageNames.length = 0, -1 != this._selectedIndex ? this.selectedIndex = -1 : this.parent.applyController(this);
    }, o.prototype.hasPage = function (t) {
      return -1 != this._pageNames.indexOf(t);
    }, o.prototype.getPageIndexById = function (t) {
      return this._pageIds.indexOf(t);
    }, o.prototype.getPageIdByName = function (t) {
      var e = this._pageNames.indexOf(t);

      return -1 != e ? this._pageIds[e] : null;
    }, o.prototype.getPageNameById = function (t) {
      var e = this._pageIds.indexOf(t);

      return -1 != e ? this._pageNames[e] : null;
    }, o.prototype.getPageId = function (t) {
      return this._pageIds[t];
    }, Object.defineProperty(o.prototype, "selectedPageId", {
      get: function get() {
        return -1 == this._selectedIndex ? null : this._pageIds[this._selectedIndex];
      },
      set: function set(t) {
        var e = this._pageIds.indexOf(t);

        this.selectedIndex = e;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "oppositePageId", {
      set: function set(t) {
        this._pageIds.indexOf(t) > 0 ? this.selectedIndex = 0 : this._pageIds.length > 1 && (this.selectedIndex = 1);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "previousPageId", {
      get: function get() {
        return -1 == this._previousIndex ? null : this._pageIds[this._previousIndex];
      },
      enumerable: !1,
      configurable: !0
    }), o.prototype.runActions = function () {
      if (this._actions) for (var t = this._actions.length, e = 0; e < t; e++) {
        this._actions[e].run(this, this.previousPageId, this.selectedPageId);
      }
    }, o.prototype.setup = function (e) {
      var i,
          o,
          n = e.position;
      e.seek(n, 0), this.name = e.readS(), e.readBool() && (this.autoRadioGroupDepth = !0), e.seek(n, 1);
      var r = e.readShort();

      for (i = 0; i < r; i++) {
        this._pageIds.push(e.readS()), this._pageNames.push(e.readS());
      }

      var s = 0;
      if (e.version >= 2) switch (e.readByte()) {
        case 1:
          s = e.readShort();
          break;

        case 2:
          -1 == (s = this._pageNames.indexOf(t.UIPackage.branch)) && (s = 0);
          break;

        case 3:
          -1 == (s = this._pageNames.indexOf(t.UIPackage.getVar(e.readS()))) && (s = 0);
      }
      if (e.seek(n, 2), (r = e.readShort()) > 0) for (this._actions || (this._actions = new Array()), i = 0; i < r; i++) {
        o = e.readShort(), o += e.position;
        var h = t.ControllerAction.createAction(e.readByte());
        h.setup(e), this._actions.push(h), e.position = o;
      }
      this.parent && this._pageIds.length > 0 ? this._selectedIndex = s : this._selectedIndex = -1;
    }, o;
  }(cc.EventTarget);

  t.Controller = i;
}(fgui || (fgui = {})), function (t) {
  var e = function () {
    function e() {
      this._agent = new t.GLoader(), this._agent.draggable = !0, this._agent.touchable = !1, this._agent.setSize(100, 100), this._agent.setPivot(.5, .5, !0), this._agent.align = t.AlignType.Center, this._agent.verticalAlign = t.VertAlignType.Middle, this._agent.sortingOrder = 1e6, this._agent.on(t.Event.DRAG_END, this.onDragEnd, this);
    }

    return Object.defineProperty(e, "inst", {
      get: function get() {
        return e._inst || (e._inst = new e()), e._inst;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "dragAgent", {
      get: function get() {
        return this._agent;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "dragging", {
      get: function get() {
        return null != this._agent.parent;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.startDrag = function (e, i, o, n) {
      if (!this._agent.parent) {
        this._sourceData = o, this._agent.url = i, t.GRoot.inst.addChild(this._agent);
        var r = t.GRoot.inst.getTouchPosition(n);
        r = t.GRoot.inst.globalToLocal(r.x, r.y), this._agent.setPosition(r.x, r.y), this._agent.startDrag(n);
      }
    }, e.prototype.cancel = function () {
      this._agent.parent && (this._agent.stopDrag(), t.GRoot.inst.removeChild(this._agent), this._sourceData = null);
    }, e.prototype.onDragEnd = function () {
      if (this._agent.parent) {
        t.GRoot.inst.removeChild(this._agent);
        var e = this._sourceData;
        this._sourceData = null;

        for (var i = t.GRoot.inst.touchTarget; i;) {
          if (i.node.hasEventListener(t.Event.DROP)) return i.requestFocus(), void i.node.emit(t.Event.DROP, i, e);
          i = i.parent;
        }
      }
    }, e;
  }();

  t.DragDropManager = e;
}(fgui || (fgui = {})), function (t) {
  (function (t) {
    t[t.Common = 0] = "Common", t[t.Check = 1] = "Check", t[t.Radio = 2] = "Radio";
  })(t.ButtonMode || (t.ButtonMode = {})), function (t) {
    t[t.None = 0] = "None", t[t.Both = 1] = "Both", t[t.Height = 2] = "Height", t[t.Shrink = 3] = "Shrink";
  }(t.AutoSizeType || (t.AutoSizeType = {})), function (t) {
    t[t.Left = 0] = "Left", t[t.Center = 1] = "Center", t[t.Right = 2] = "Right";
  }(t.AlignType || (t.AlignType = {})), function (t) {
    t[t.Top = 0] = "Top", t[t.Middle = 1] = "Middle", t[t.Bottom = 2] = "Bottom";
  }(t.VertAlignType || (t.VertAlignType = {})), function (t) {
    t[t.None = 0] = "None", t[t.Scale = 1] = "Scale", t[t.ScaleMatchHeight = 2] = "ScaleMatchHeight", t[t.ScaleMatchWidth = 3] = "ScaleMatchWidth", t[t.ScaleFree = 4] = "ScaleFree", t[t.ScaleNoBorder = 5] = "ScaleNoBorder";
  }(t.LoaderFillType || (t.LoaderFillType = {})), function (t) {
    t[t.SingleColumn = 0] = "SingleColumn", t[t.SingleRow = 1] = "SingleRow", t[t.FlowHorizontal = 2] = "FlowHorizontal", t[t.FlowVertical = 3] = "FlowVertical", t[t.Pagination = 4] = "Pagination";
  }(t.ListLayoutType || (t.ListLayoutType = {})), function (t) {
    t[t.Single = 0] = "Single", t[t.Multiple = 1] = "Multiple", t[t.Multiple_SingleClick = 2] = "Multiple_SingleClick", t[t.None = 3] = "None";
  }(t.ListSelectionMode || (t.ListSelectionMode = {})), function (t) {
    t[t.Visible = 0] = "Visible", t[t.Hidden = 1] = "Hidden", t[t.Scroll = 2] = "Scroll";
  }(t.OverflowType || (t.OverflowType = {})), function (t) {
    t[t.Image = 0] = "Image", t[t.MovieClip = 1] = "MovieClip", t[t.Sound = 2] = "Sound", t[t.Component = 3] = "Component", t[t.Atlas = 4] = "Atlas", t[t.Font = 5] = "Font", t[t.Swf = 6] = "Swf", t[t.Misc = 7] = "Misc", t[t.Unknown = 8] = "Unknown", t[t.Spine = 9] = "Spine", t[t.DragonBones = 10] = "DragonBones";
  }(t.PackageItemType || (t.PackageItemType = {})), function (t) {
    t[t.Image = 0] = "Image", t[t.MovieClip = 1] = "MovieClip", t[t.Swf = 2] = "Swf", t[t.Graph = 3] = "Graph", t[t.Loader = 4] = "Loader", t[t.Group = 5] = "Group", t[t.Text = 6] = "Text", t[t.RichText = 7] = "RichText", t[t.InputText = 8] = "InputText", t[t.Component = 9] = "Component", t[t.List = 10] = "List", t[t.Label = 11] = "Label", t[t.Button = 12] = "Button", t[t.ComboBox = 13] = "ComboBox", t[t.ProgressBar = 14] = "ProgressBar", t[t.Slider = 15] = "Slider", t[t.ScrollBar = 16] = "ScrollBar", t[t.Tree = 17] = "Tree", t[t.Loader3D = 18] = "Loader3D";
  }(t.ObjectType || (t.ObjectType = {})), function (t) {
    t[t.Percent = 0] = "Percent", t[t.ValueAndMax = 1] = "ValueAndMax", t[t.Value = 2] = "Value", t[t.Max = 3] = "Max";
  }(t.ProgressTitleType || (t.ProgressTitleType = {})), function (t) {
    t[t.Default = 0] = "Default", t[t.Visible = 1] = "Visible", t[t.Auto = 2] = "Auto", t[t.Hidden = 3] = "Hidden";
  }(t.ScrollBarDisplayType || (t.ScrollBarDisplayType = {})), function (t) {
    t[t.Horizontal = 0] = "Horizontal", t[t.Vertical = 1] = "Vertical", t[t.Both = 2] = "Both";
  }(t.ScrollType || (t.ScrollType = {})), function (t) {
    t[t.None = 0] = "None", t[t.Horizontal = 1] = "Horizontal", t[t.Vertical = 2] = "Vertical", t[t.Both = 3] = "Both";
  }(t.FlipType || (t.FlipType = {})), function (t) {
    t[t.Ascent = 0] = "Ascent", t[t.Descent = 1] = "Descent", t[t.Arch = 2] = "Arch";
  }(t.ChildrenRenderOrder || (t.ChildrenRenderOrder = {})), function (t) {
    t[t.None = 0] = "None", t[t.Horizontal = 1] = "Horizontal", t[t.Vertical = 2] = "Vertical";
  }(t.GroupLayoutType || (t.GroupLayoutType = {})), function (t) {
    t[t.Auto = 0] = "Auto", t[t.Up = 1] = "Up", t[t.Down = 2] = "Down";
  }(t.PopupDirection || (t.PopupDirection = {})), function (t) {
    t[t.Left_Left = 0] = "Left_Left", t[t.Left_Center = 1] = "Left_Center", t[t.Left_Right = 2] = "Left_Right", t[t.Center_Center = 3] = "Center_Center", t[t.Right_Left = 4] = "Right_Left", t[t.Right_Center = 5] = "Right_Center", t[t.Right_Right = 6] = "Right_Right", t[t.Top_Top = 7] = "Top_Top", t[t.Top_Middle = 8] = "Top_Middle", t[t.Top_Bottom = 9] = "Top_Bottom", t[t.Middle_Middle = 10] = "Middle_Middle", t[t.Bottom_Top = 11] = "Bottom_Top", t[t.Bottom_Middle = 12] = "Bottom_Middle", t[t.Bottom_Bottom = 13] = "Bottom_Bottom", t[t.Width = 14] = "Width", t[t.Height = 15] = "Height", t[t.LeftExt_Left = 16] = "LeftExt_Left", t[t.LeftExt_Right = 17] = "LeftExt_Right", t[t.RightExt_Left = 18] = "RightExt_Left", t[t.RightExt_Right = 19] = "RightExt_Right", t[t.TopExt_Top = 20] = "TopExt_Top", t[t.TopExt_Bottom = 21] = "TopExt_Bottom", t[t.BottomExt_Top = 22] = "BottomExt_Top", t[t.BottomExt_Bottom = 23] = "BottomExt_Bottom", t[t.Size = 24] = "Size";
  }(t.RelationType || (t.RelationType = {})), function (t) {
    t[t.None = 0] = "None", t[t.Horizontal = 1] = "Horizontal", t[t.Vertical = 2] = "Vertical", t[t.Radial90 = 3] = "Radial90", t[t.Radial180 = 4] = "Radial180", t[t.Radial360 = 5] = "Radial360";
  }(t.FillMethod || (t.FillMethod = {})), function (t) {
    t[t.Top = 0] = "Top", t[t.Bottom = 1] = "Bottom", t[t.Left = 2] = "Left", t[t.Right = 3] = "Right";
  }(t.FillOrigin || (t.FillOrigin = {})), function (t) {
    t[t.Text = 0] = "Text", t[t.Icon = 1] = "Icon", t[t.Color = 2] = "Color", t[t.OutlineColor = 3] = "OutlineColor", t[t.Playing = 4] = "Playing", t[t.Frame = 5] = "Frame", t[t.DeltaTime = 6] = "DeltaTime", t[t.TimeScale = 7] = "TimeScale", t[t.FontSize = 8] = "FontSize", t[t.Selected = 9] = "Selected";
  }(t.ObjectPropID || (t.ObjectPropID = {}));
}(fgui || (fgui = {})), function (t) {
  var e = function () {
    function e() {
      if (this._x = 0, this._y = 0, this._alpha = 1, this._visible = !0, this._touchable = !0, this._skewX = 0, this._skewY = 0, this._sortingOrder = 0, this._internalVisible = !0, this.sourceWidth = 0, this.sourceHeight = 0, this.initWidth = 0, this.initHeight = 0, this.minWidth = 0, this.minHeight = 0, this.maxWidth = 0, this.maxHeight = 0, this._width = 0, this._height = 0, this._rawWidth = 0, this._rawHeight = 0, this._sizePercentInGroup = 0, this._node = new cc.Node(), -1 == e._defaultGroupIndex) {
        e._defaultGroupIndex = 0;

        for (var i = cc.game.groupList, o = i.length, n = 0; n < o; n++) {
          if (i[n].toLowerCase() == t.UIConfig.defaultUIGroup.toLowerCase()) {
            e._defaultGroupIndex = n;
            break;
          }
        }
      }

      this._node.$gobj = this, this._node.groupIndex = e._defaultGroupIndex, this._node.setAnchorPoint(0, 1), this._node.on(cc.Node.EventType.ANCHOR_CHANGED, this.handleAnchorChanged, this), this._id = this._node.uuid, this._name = "", this._relations = new t.Relations(this), this._gears = new Array(10), this._blendMode = t.BlendMode.Normal, this._partner = this._node.addComponent(a);
    }

    return Object.defineProperty(e.prototype, "id", {
      get: function get() {
        return this._id;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "name", {
      get: function get() {
        return this._name;
      },
      set: function set(t) {
        this._name = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "x", {
      get: function get() {
        return this._x;
      },
      set: function set(t) {
        this.setPosition(t, this._y);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "y", {
      get: function get() {
        return this._y;
      },
      set: function set(t) {
        this.setPosition(this._x, t);
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.setPosition = function (o, r) {
      if (this._x != o || this._y != r) {
        var s = o - this._x,
            h = r - this._y;
        this._x = o, this._y = r, this.handlePositionChanged(), this instanceof t.GGroup && this.moveChildren(s, h), this.updateGear(1), !this._parent || this._parent instanceof t.GList || (this._parent.setBoundsChangedFlag(), this._group && this._group.setBoundsChangedFlag(!0), this._node.emit(t.Event.XY_CHANGED, this)), e.draggingObject != this || i || this.localToGlobalRect(0, 0, this._width, this._height, n);
      }
    }, Object.defineProperty(e.prototype, "xMin", {
      get: function get() {
        return this._pivotAsAnchor ? this._x - this._width * this.node.anchorX : this._x;
      },
      set: function set(t) {
        this._pivotAsAnchor ? this.setPosition(t + this._width * this.node.anchorX, this._y) : this.setPosition(t, this._y);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "yMin", {
      get: function get() {
        return this._pivotAsAnchor ? this._y - this._height * (1 - this.node.anchorY) : this._y;
      },
      set: function set(t) {
        this._pivotAsAnchor ? this.setPosition(this._x, t + this._height * (1 - this.node.anchorY)) : this.setPosition(this._x, t);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "pixelSnapping", {
      get: function get() {
        return this._pixelSnapping;
      },
      set: function set(t) {
        this._pixelSnapping != t && (this._pixelSnapping = t, this.handlePositionChanged());
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.center = function (e) {
      var i;
      i = this._parent ? this.parent : this.root, this.setPosition((i.width - this._width) / 2, (i.height - this._height) / 2), e && (this.addRelation(i, t.RelationType.Center_Center), this.addRelation(i, t.RelationType.Middle_Middle));
    }, Object.defineProperty(e.prototype, "width", {
      get: function get() {
        return this.ensureSizeCorrect(), this._relations.sizeDirty && this._relations.ensureRelationsSizeCorrect(), this._width;
      },
      set: function set(t) {
        this.setSize(t, this._rawHeight);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "height", {
      get: function get() {
        return this.ensureSizeCorrect(), this._relations.sizeDirty && this._relations.ensureRelationsSizeCorrect(), this._height;
      },
      set: function set(t) {
        this.setSize(this._rawWidth, t);
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.setSize = function (e, i, o) {
      if (this._rawWidth != e || this._rawHeight != i) {
        this._rawWidth = e, this._rawHeight = i, e < this.minWidth && (e = this.minWidth), i < this.minHeight && (i = this.minHeight), this.maxWidth > 0 && e > this.maxWidth && (e = this.maxWidth), this.maxHeight > 0 && i > this.maxHeight && (i = this.maxHeight);
        var n = e - this._width,
            r = i - this._height;
        this._width = e, this._height = i, this.handleSizeChanged(), 0 == this.node.anchorX && 1 == this.node.anchorY || this._pivotAsAnchor || o ? this.handlePositionChanged() : this.setPosition(this.x - this.node.anchorX * n, this.y - (1 - this.node.anchorY) * r), this instanceof t.GGroup && this.resizeChildren(n, r), this.updateGear(2), this._parent && (this._relations.onOwnerSizeChanged(n, r, this._pivotAsAnchor || !o), this._parent.setBoundsChangedFlag(), this._group && this._group.setBoundsChangedFlag()), this._node.emit(t.Event.SIZE_CHANGED, this);
      }
    }, e.prototype.makeFullScreen = function () {
      this.setSize(t.GRoot.inst.width, t.GRoot.inst.height);
    }, e.prototype.ensureSizeCorrect = function () {}, Object.defineProperty(e.prototype, "actualWidth", {
      get: function get() {
        return this.width * Math.abs(this._node.scaleX);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "actualHeight", {
      get: function get() {
        return this.height * Math.abs(this._node.scaleY);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "scaleX", {
      get: function get() {
        return this._node.scaleX;
      },
      set: function set(t) {
        this.setScale(t, this._node.scaleY);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "scaleY", {
      get: function get() {
        return this._node.scaleY;
      },
      set: function set(t) {
        this.setScale(this._node.scaleX, t);
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.setScale = function (t, e) {
      this._node.scaleX == t && this._node.scaleY == e || (this._node.setScale(t, e), this.updateGear(2));
    }, Object.defineProperty(e.prototype, "skewX", {
      get: function get() {
        return this._skewX;
      },
      set: function set(t) {
        this.setSkew(t, this._skewY);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "skewY", {
      get: function get() {
        return this._skewY;
      },
      set: function set(t) {
        this.setSkew(this._skewX, t);
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.setSkew = function (t, e) {
      this._skewX == t && this._skewY == e || (this._skewX = t, this._skewY = e, this._node.skewX = t, this._node.skewY = e);
    }, Object.defineProperty(e.prototype, "pivotX", {
      get: function get() {
        return this.node.anchorX;
      },
      set: function set(t) {
        this.node.anchorX = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "pivotY", {
      get: function get() {
        return 1 - this.node.anchorY;
      },
      set: function set(t) {
        this.node.anchorY = 1 - t;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.setPivot = function (t, e, i) {
      this.node.anchorX != t || this.node.anchorY != 1 - e ? (this._pivotAsAnchor = i, this.node.setAnchorPoint(t, 1 - e)) : this._pivotAsAnchor != i && (this._pivotAsAnchor = i, this.handlePositionChanged());
    }, Object.defineProperty(e.prototype, "pivotAsAnchor", {
      get: function get() {
        return this._pivotAsAnchor;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "touchable", {
      get: function get() {
        return this._touchable;
      },
      set: function set(t) {
        this._touchable != t && (this._touchable = t, this.updateGear(3));
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "grayed", {
      get: function get() {
        return this._grayed;
      },
      set: function set(t) {
        this._grayed != t && (this._grayed = t, this.handleGrayedChanged(), this.updateGear(3));
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "enabled", {
      get: function get() {
        return !this._grayed && this._touchable;
      },
      set: function set(t) {
        this.grayed = !t, this.touchable = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "rotation", {
      get: function get() {
        return -this._node.angle;
      },
      set: function set(t) {
        t = -t, this._node.angle != t && (this._node.angle = t, this.updateGear(3));
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "alpha", {
      get: function get() {
        return this._alpha;
      },
      set: function set(e) {
        this._alpha != e && (this._alpha = e, this._node.opacity = 255 * this._alpha, this instanceof t.GGroup && this.handleAlphaChanged(), this.updateGear(3));
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "visible", {
      get: function get() {
        return this._visible;
      },
      set: function set(t) {
        this._visible != t && (this._visible = t, this.handleVisibleChanged(), this._group && this._group.excludeInvisibles && this._group.setBoundsChangedFlag());
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "_finalVisible", {
      get: function get() {
        return this._visible && this._internalVisible && (!this._group || this._group._finalVisible);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "internalVisible3", {
      get: function get() {
        return this._visible && this._internalVisible;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "sortingOrder", {
      get: function get() {
        return this._sortingOrder;
      },
      set: function set(t) {
        if (t < 0 && (t = 0), this._sortingOrder != t) {
          var e = this._sortingOrder;
          this._sortingOrder = t, this._parent && this._parent.childSortingOrderChanged(this, e, this._sortingOrder);
        }
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.requestFocus = function () {}, Object.defineProperty(e.prototype, "tooltips", {
      get: function get() {
        return this._tooltips;
      },
      set: function set(e) {
        this._tooltips && (this._node.off(t.Event.ROLL_OVER, this.onRollOver, this), this._node.off(t.Event.ROLL_OUT, this.onRollOut, this)), this._tooltips = e, this._tooltips && (this._node.on(t.Event.ROLL_OVER, this.onRollOver, this), this._node.on(t.Event.ROLL_OUT, this.onRollOut, this));
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "blendMode", {
      get: function get() {
        return this._blendMode;
      },
      set: function set(e) {
        this._blendMode != e && (this._blendMode = e, t.BlendModeUtils.apply(this._node, e));
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "onStage", {
      get: function get() {
        return this._node && this._node.activeInHierarchy;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "resourceURL", {
      get: function get() {
        return this.packageItem ? "ui://" + this.packageItem.owner.id + this.packageItem.id : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "group", {
      get: function get() {
        return this._group;
      },
      set: function set(t) {
        this._group != t && (this._group && this._group.setBoundsChangedFlag(), this._group = t, this._group && this._group.setBoundsChangedFlag());
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getGear = function (e) {
      var i = this._gears[e];
      return i || (this._gears[e] = i = t.GearBase.create(this, e)), i;
    }, e.prototype.updateGear = function (t) {
      if (!this._underConstruct && !this._gearLocked) {
        var e = this._gears[t];
        e && e.controller && e.updateState();
      }
    }, e.prototype.checkGearController = function (t, e) {
      return this._gears[t] && this._gears[t].controller == e;
    }, e.prototype.updateGearFromRelations = function (t, e, i) {
      this._gears[t] && this._gears[t].updateFromRelations(e, i);
    }, e.prototype.addDisplayLock = function () {
      var t = this._gears[0];

      if (t && t.controller) {
        var e = t.addLock();
        return this.checkGearDisplay(), e;
      }

      return 0;
    }, e.prototype.releaseDisplayLock = function (t) {
      var e = this._gears[0];
      e && e.controller && (e.releaseLock(t), this.checkGearDisplay());
    }, e.prototype.checkGearDisplay = function () {
      if (!this._handlingController) {
        var t = null == this._gears[0] || this._gears[0].connected;
        this._gears[8] && (t = this._gears[8].evaluate(t)), t != this._internalVisible && (this._internalVisible = t, this.handleVisibleChanged(), this._group && this._group.excludeInvisibles && this._group.setBoundsChangedFlag());
      }
    }, Object.defineProperty(e.prototype, "gearXY", {
      get: function get() {
        return this.getGear(1);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "gearSize", {
      get: function get() {
        return this.getGear(2);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "gearLook", {
      get: function get() {
        return this.getGear(3);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "relations", {
      get: function get() {
        return this._relations;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.addRelation = function (t, e, i) {
      this._relations.add(t, e, i);
    }, e.prototype.removeRelation = function (t, e) {
      this._relations.remove(t, e);
    }, Object.defineProperty(e.prototype, "node", {
      get: function get() {
        return this._node;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "parent", {
      get: function get() {
        return this._parent;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.removeFromParent = function () {
      this._parent && this._parent.removeChild(this);
    }, e.prototype.findParent = function () {
      if (this._parent) return this._parent;

      for (var t = this._node.parent; t;) {
        var e = t.$gobj;
        if (e) return e;
        t = t.parent;
      }

      return null;
    }, Object.defineProperty(e.prototype, "root", {
      get: function get() {
        if (this instanceof t.GRoot) return this;

        for (var e = this._parent; e;) {
          if (e instanceof t.GRoot) return e;
          e = e.parent;
        }

        return t.GRoot.inst;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "asCom", {
      get: function get() {
        return this;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "asButton", {
      get: function get() {
        return this;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "asLabel", {
      get: function get() {
        return this;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "asProgress", {
      get: function get() {
        return this;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "asTextField", {
      get: function get() {
        return this;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "asRichTextField", {
      get: function get() {
        return this;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "asTextInput", {
      get: function get() {
        return this;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "asLoader", {
      get: function get() {
        return this;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "asList", {
      get: function get() {
        return this;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "asTree", {
      get: function get() {
        return this;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "asGraph", {
      get: function get() {
        return this;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "asGroup", {
      get: function get() {
        return this;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "asSlider", {
      get: function get() {
        return this;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "asComboBox", {
      get: function get() {
        return this;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "asImage", {
      get: function get() {
        return this;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "asMovieClip", {
      get: function get() {
        return this;
      },
      enumerable: !1,
      configurable: !0
    }), e.cast = function (t) {
      return t.$gobj;
    }, Object.defineProperty(e.prototype, "text", {
      get: function get() {
        return null;
      },
      set: function set() {},
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "icon", {
      get: function get() {
        return null;
      },
      set: function set() {},
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "treeNode", {
      get: function get() {
        return this._treeNode;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.dispose = function () {
      var t = this._node;

      if (t) {
        this.removeFromParent(), this._relations.dispose(), this._node = null, t.destroy();

        for (var e = 0; e < 10; e++) {
          var i = this._gears[e];
          i && i.dispose();
        }
      }
    }, e.prototype.onEnable = function () {}, e.prototype.onDisable = function () {}, e.prototype.onUpdate = function () {}, e.prototype.onDestroy = function () {}, e.prototype.onClick = function (e, i) {
      this._node.on(t.Event.CLICK, e, i);
    }, e.prototype.onceClick = function (e, i) {
      this._node.once(t.Event.CLICK, e, i);
    }, e.prototype.offClick = function (e, i) {
      this._node.off(t.Event.CLICK, e, i);
    }, e.prototype.clearClick = function () {
      this._node.off(t.Event.CLICK);
    }, e.prototype.hasClickListener = function () {
      return this._node.hasEventListener(t.Event.CLICK);
    }, e.prototype.on = function (e, i, o) {
      e != t.Event.DISPLAY && e != t.Event.UNDISPLAY || (this._partner._emitDisplayEvents = !0), this._node.on(e, i, o);
    }, e.prototype.once = function (e, i, o) {
      e != t.Event.DISPLAY && e != t.Event.UNDISPLAY || (this._partner._emitDisplayEvents = !0), this._node.once(e, i, o);
    }, e.prototype.off = function (t, e, i) {
      this._node.off(t, e, i);
    }, Object.defineProperty(e.prototype, "draggable", {
      get: function get() {
        return this._draggable;
      },
      set: function set(t) {
        this._draggable != t && (this._draggable = t, this.initDrag());
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "dragBounds", {
      get: function get() {
        return this._dragBounds;
      },
      set: function set(t) {
        this._dragBounds = t;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.startDrag = function (t) {
      this._node.activeInHierarchy && this.dragBegin(t);
    }, e.prototype.stopDrag = function () {
      this.dragEnd();
    }, Object.defineProperty(e.prototype, "dragging", {
      get: function get() {
        return e.draggingObject == this;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.localToGlobal = function (e, i, o) {
      return e = e || 0, i = i || 0, (o = o || new cc.Vec2()).x = e, o.y = i, o.y = -o.y, this._pivotAsAnchor || (o.x -= this.node.anchorX * this._width, o.y += (1 - this.node.anchorY) * this._height), this._node.convertToWorldSpaceAR(o, o), o.y = t.GRoot.inst.height - o.y, o;
    }, e.prototype.globalToLocal = function (e, i, o) {
      return e = e || 0, i = i || 0, (o = o || new cc.Vec2()).x = e, o.y = t.GRoot.inst.height - i, this._node.convertToNodeSpaceAR(o, o), this._pivotAsAnchor || (o.x += this._node.anchorX * this._width, o.y -= (1 - this._node.anchorY) * this._height), o.y = -o.y, o;
    }, e.prototype.localToGlobalRect = function (t, e, i, o, n) {
      t = t || 0, e = e || 0, i = i || 0, o = o || 0, n = n || new cc.Rect();
      var r = this.localToGlobal(t, e);
      return n.x = r.x, n.y = r.y, r = this.localToGlobal(t + i, e + o, r), n.xMax = r.x, n.yMax = r.y, n;
    }, e.prototype.globalToLocalRect = function (t, e, i, o, n) {
      t = t || 0, e = e || 0, i = i || 0, o = o || 0, n = n || new cc.Rect();
      var r = this.globalToLocal(t, e);
      return n.x = r.x, n.y = r.y, r = this.globalToLocal(t + i, e + o, r), n.xMax = r.x, n.yMax = r.y, n;
    }, e.prototype.handleControllerChanged = function (t) {
      this._handlingController = !0;

      for (var e = 0; e < 10; e++) {
        var i = this._gears[e];
        i && i.controller == t && i.apply();
      }

      this._handlingController = !1, this.checkGearDisplay();
    }, e.prototype.handleAnchorChanged = function () {
      this.handlePositionChanged();
    }, e.prototype.handlePositionChanged = function () {
      var t = this._x,
          e = -this._y;
      this._pivotAsAnchor || (t += this.node.anchorX * this._width, e -= (1 - this.node.anchorY) * this._height), this._pixelSnapping && (t = Math.round(t), e = Math.round(e)), this._node.setPosition(t, e);
    }, e.prototype.handleSizeChanged = function () {
      this._node.setContentSize(this._width, this._height);
    }, e.prototype.handleGrayedChanged = function () {}, e.prototype.handleVisibleChanged = function () {
      this._node.active = this._finalVisible, this instanceof t.GGroup && this.handleVisibleChanged(), this._parent && this._parent.setBoundsChangedFlag();
    }, e.prototype.hitTest = function (t, e) {
      return null == e && (e = !0), !e || !this._touchDisabled && this._touchable && this._node.activeInHierarchy ? (this._hitTestPt || (this._hitTestPt = new cc.Vec2()), this.globalToLocal(t.x, t.y, this._hitTestPt), this._pivotAsAnchor && (this._hitTestPt.x += this.node.anchorX * this._width, this._hitTestPt.y += (1 - this.node.anchorY) * this._height), this._hitTest(this._hitTestPt, t)) : null;
    }, e.prototype._hitTest = function (t) {
      return t.x >= 0 && t.y >= 0 && t.x < this._width && t.y < this._height ? this : null;
    }, e.prototype.getProp = function (e) {
      switch (e) {
        case t.ObjectPropID.Text:
          return this.text;

        case t.ObjectPropID.Icon:
          return this.icon;

        case t.ObjectPropID.Color:
        case t.ObjectPropID.OutlineColor:
          return null;

        case t.ObjectPropID.Playing:
          return !1;

        case t.ObjectPropID.Frame:
        case t.ObjectPropID.DeltaTime:
          return 0;

        case t.ObjectPropID.TimeScale:
          return 1;

        case t.ObjectPropID.FontSize:
          return 0;

        case t.ObjectPropID.Selected:
          return !1;

        default:
          return;
      }
    }, e.prototype.setProp = function (e, i) {
      switch (e) {
        case t.ObjectPropID.Text:
          this.text = i;
          break;

        case t.ObjectPropID.Icon:
          this.icon = i;
      }
    }, e.prototype.constructFromResource = function () {}, e.prototype.setup_beforeAdd = function (t, e) {
      var i, o;
      t.seek(e, 0), t.skip(5), this._id = t.readS(), this._name = t.readS(), i = t.readInt(), o = t.readInt(), this.setPosition(i, o), t.readBool() && (this.initWidth = t.readInt(), this.initHeight = t.readInt(), this.setSize(this.initWidth, this.initHeight, !0)), t.readBool() && (this.minWidth = t.readInt(), this.maxWidth = t.readInt(), this.minHeight = t.readInt(), this.maxHeight = t.readInt()), t.readBool() && (i = t.readFloat(), o = t.readFloat(), this.setScale(i, o)), t.readBool() && (i = t.readFloat(), o = t.readFloat(), this.setSkew(i, o)), t.readBool() && (i = t.readFloat(), o = t.readFloat(), this.setPivot(i, o, t.readBool())), 1 != (i = t.readFloat()) && (this.alpha = i), 0 != (i = t.readFloat()) && (this.rotation = i), t.readBool() || (this.visible = !1), t.readBool() || (this.touchable = !1), t.readBool() && (this.grayed = !0), this.blendMode = t.readByte(), t.readByte();
      var n = t.readS();
      null != n && (this.data = n);
    }, e.prototype.setup_afterAdd = function (t, e) {
      t.seek(e, 1);
      var i = t.readS();
      null != i && (this.tooltips = i);
      var o = t.readShort();
      o >= 0 && (this.group = this.parent.getChildAt(o)), t.seek(e, 2);

      for (var n = t.readShort(), r = 0; r < n; r++) {
        var s = t.readShort();
        s += t.position, this.getGear(t.readByte()).setup(t), t.position = s;
      }
    }, e.prototype.onRollOver = function () {
      this.root.showTooltips(this.tooltips);
    }, e.prototype.onRollOut = function () {
      this.root.hideTooltips();
    }, e.prototype.initDrag = function () {
      this._draggable ? (this.on(t.Event.TOUCH_BEGIN, this.onTouchBegin_0, this), this.on(t.Event.TOUCH_MOVE, this.onTouchMove_0, this), this.on(t.Event.TOUCH_END, this.onTouchEnd_0, this)) : (this.off(t.Event.TOUCH_BEGIN, this.onTouchBegin_0, this), this.off(t.Event.TOUCH_MOVE, this.onTouchMove_0, this), this.off(t.Event.TOUCH_END, this.onTouchEnd_0, this));
    }, e.prototype.dragBegin = function (i) {
      if (e.draggingObject) {
        var r = e.draggingObject;
        r.stopDrag(), e.draggingObject = null, r._node.emit(t.Event.DRAG_END);
      }

      null == i && (i = t.GRoot.inst.inputProcessor.getAllTouches()[0]), o.set(t.GRoot.inst.getTouchPosition(i)), this.localToGlobalRect(0, 0, this._width, this._height, n), e.draggingObject = this, this._dragTesting = !0, t.GRoot.inst.inputProcessor.addTouchMonitor(i, this), this.on(t.Event.TOUCH_MOVE, this.onTouchMove_0, this), this.on(t.Event.TOUCH_END, this.onTouchEnd_0, this);
    }, e.prototype.dragEnd = function () {
      e.draggingObject == this && (this._dragTesting = !1, e.draggingObject = null), h = !1;
    }, e.prototype.onTouchBegin_0 = function (t) {
      null == this._dragStartPos && (this._dragStartPos = new cc.Vec2()), this._dragStartPos.set(t.pos), this._dragTesting = !0, t.captureTouch();
    }, e.prototype.onTouchMove_0 = function (a) {
      if (e.draggingObject != this && this._draggable && this._dragTesting) {
        var l = t.UIConfig.touchDragSensitivity;
        if (this._dragStartPos && Math.abs(this._dragStartPos.x - a.pos.x) < l && Math.abs(this._dragStartPos.y - a.pos.y) < l) return;
        this._dragTesting = !1, h = !0, this._node.emit(t.Event.DRAG_START, a), h && this.dragBegin(a.touchId);
      }

      if (e.draggingObject == this) {
        var c = a.pos.x - o.x + n.x,
            u = a.pos.y - o.y + n.y;

        if (this._dragBounds) {
          var _ = t.GRoot.inst.localToGlobalRect(this._dragBounds.x, this._dragBounds.y, this._dragBounds.width, this._dragBounds.height, s);

          c < _.x ? c = _.x : c + n.width > _.xMax && (c = _.xMax - n.width) < _.x && (c = _.x), u < _.y ? u = _.y : u + n.height > _.yMax && (u = _.yMax - n.height) < _.y && (u = _.y);
        }

        i = !0;
        var p = this.parent.globalToLocal(c, u, r);
        this.setPosition(Math.round(p.x), Math.round(p.y)), i = !1, this._node.emit(t.Event.DRAG_MOVE, a);
      }
    }, e.prototype.onTouchEnd_0 = function (i) {
      e.draggingObject == this && (e.draggingObject = null, this._node.emit(t.Event.DRAG_END, i));
    }, e._defaultGroupIndex = -1, e;
  }();

  t.GObject = e;

  var i,
      o = new cc.Vec2(),
      n = new cc.Rect(),
      r = new cc.Vec2(),
      s = new cc.Rect(),
      h = !1,
      a = function (e) {
    function i() {
      var t = null !== e && e.apply(this, arguments) || this;
      return t._emitDisplayEvents = !1, t;
    }

    return __extends(i, e), i.prototype.callLater = function (t, e) {
      cc.director.getScheduler().isScheduled(t, this) || this.scheduleOnce(t, e);
    }, i.prototype.onClickLink = function (e, i) {
      this.node.emit(t.Event.LINK, i, e);
    }, i.prototype.onEnable = function () {
      this.node.$gobj.onEnable(), this._emitDisplayEvents && this.node.emit(t.Event.DISPLAY);
    }, i.prototype.onDisable = function () {
      this.node.$gobj.onDisable(), this._emitDisplayEvents && this.node.emit(t.Event.UNDISPLAY);
    }, i.prototype.update = function (t) {
      this.node.$gobj.onUpdate(t);
    }, i.prototype.onDestroy = function () {
      this.node.$gobj.onDestroy();
    }, i;
  }(cc.Component);

  t.GObjectPartner = a;
}(fgui || (fgui = {})), function (t) {
  var e = function (e) {
    function o() {
      var i = e.call(this) || this;
      return i._sortingChildCount = 0, i._childrenRenderOrder = t.ChildrenRenderOrder.Ascent, i._apexIndex = 0, i._node.name = "GComponent", i._children = new Array(), i._controllers = new Array(), i._transitions = new Array(), i._margin = new t.Margin(), i._alignOffset = new cc.Vec2(), i._container = new cc.Node("Container"), i._container.setAnchorPoint(0, 1), i._node.addChild(i._container), i;
    }

    return __extends(o, e), o.prototype.dispose = function () {
      var t, i;

      for (i = this._transitions.length, t = 0; t < i; ++t) {
        this._transitions[t].dispose();
      }

      for (i = this._controllers.length, t = 0; t < i; ++t) {
        this._controllers[t].dispose();
      }

      for (this._scrollPane && this._scrollPane.destroy(), t = (i = this._children.length) - 1; t >= 0; --t) {
        var o = this._children[t];
        o._parent = null, o.dispose();
      }

      this._boundsChanged = !1, e.prototype.dispose.call(this);
    }, Object.defineProperty(o.prototype, "displayListContainer", {
      get: function get() {
        return this._container;
      },
      enumerable: !1,
      configurable: !0
    }), o.prototype.addChild = function (t) {
      return this.addChildAt(t, this._children.length), t;
    }, o.prototype.addChildAt = function (t, e) {
      if (!t) throw "child is null";
      var i = this._children.length;

      if (e >= 0 && e <= i) {
        if (t.parent == this) this.setChildIndex(t, e);else {
          t.removeFromParent(), t._parent = this;
          var o = this._children.length;
          0 != t.sortingOrder ? (this._sortingChildCount++, e = this.getInsertPosForSortingChild(t)) : this._sortingChildCount > 0 && e > o - this._sortingChildCount && (e = o - this._sortingChildCount), e == o ? this._children.push(t) : this._children.splice(e, 0, t), this.onChildAdd(t, e), this.setBoundsChangedFlag();
        }
        return t;
      }

      throw "Invalid child index";
    }, o.prototype.getInsertPosForSortingChild = function (t) {
      var e = this._children.length,
          i = 0;

      for (i = 0; i < e; i++) {
        var o = this._children[i];
        if (o != t && t.sortingOrder < o.sortingOrder) break;
      }

      return i;
    }, o.prototype.removeChild = function (t, e) {
      var i = this._children.indexOf(t);

      return -1 != i && this.removeChildAt(i, e), t;
    }, o.prototype.removeChildAt = function (e, i) {
      if (e >= 0 && e < this.numChildren) {
        var o = this._children[e];
        return o._parent = null, 0 != o.sortingOrder && this._sortingChildCount--, this._children.splice(e, 1), o.group = null, this._container.removeChild(o.node), this._childrenRenderOrder == t.ChildrenRenderOrder.Arch && this._partner.callLater(this.buildNativeDisplayList), i ? o.dispose() : o.node.parent = null, this.setBoundsChangedFlag(), o;
      }

      throw "Invalid child index";
    }, o.prototype.removeChildren = function (t, e, i) {
      null == t && (t = 0), null == e && (e = -1), (e < 0 || e >= this.numChildren) && (e = this.numChildren - 1);

      for (var o = t; o <= e; ++o) {
        this.removeChildAt(t, i);
      }
    }, o.prototype.getChildAt = function (t) {
      if (t >= 0 && t < this.numChildren) return this._children[t];
      throw "Invalid child index";
    }, o.prototype.getChild = function (t) {
      for (var e = this._children.length, i = 0; i < e; ++i) {
        if (this._children[i].name == t) return this._children[i];
      }

      return null;
    }, o.prototype.getChildByPath = function (t) {
      for (var e, i = t.split("."), n = i.length, r = this, s = 0; s < n && (e = r.getChild(i[s])); ++s) {
        if (s != n - 1) {
          if (!(e instanceof o)) {
            e = null;
            break;
          }

          r = e;
        }
      }

      return e;
    }, o.prototype.getVisibleChild = function (t) {
      for (var e = this._children.length, i = 0; i < e; ++i) {
        var o = this._children[i];
        if (o._finalVisible && o.name == t) return o;
      }

      return null;
    }, o.prototype.getChildInGroup = function (t, e) {
      for (var i = this._children.length, o = 0; o < i; ++o) {
        var n = this._children[o];
        if (n.group == e && n.name == t) return n;
      }

      return null;
    }, o.prototype.getChildById = function (t) {
      for (var e = this._children.length, i = 0; i < e; ++i) {
        if (this._children[i]._id == t) return this._children[i];
      }

      return null;
    }, o.prototype.getChildIndex = function (t) {
      return this._children.indexOf(t);
    }, o.prototype.setChildIndex = function (t, e) {
      var i = this._children.indexOf(t);

      if (-1 == i) throw "Not a child of this container";

      if (0 == t.sortingOrder) {
        var o = this._children.length;
        this._sortingChildCount > 0 && e > o - this._sortingChildCount - 1 && (e = o - this._sortingChildCount - 1), this._setChildIndex(t, i, e);
      }
    }, o.prototype.setChildIndexBefore = function (t, e) {
      var i = this._children.indexOf(t);

      if (-1 == i) throw "Not a child of this container";
      if (0 != t.sortingOrder) return i;
      var o = this._children.length;
      return this._sortingChildCount > 0 && e > o - this._sortingChildCount - 1 && (e = o - this._sortingChildCount - 1), i < e ? this._setChildIndex(t, i, e - 1) : this._setChildIndex(t, i, e);
    }, o.prototype._setChildIndex = function (e, i, o) {
      var n = this._children.length;
      return o > n && (o = n), i == o ? i : (this._children.splice(i, 1), this._children.splice(o, 0, e), this._childrenRenderOrder == t.ChildrenRenderOrder.Ascent ? e.node.setSiblingIndex(o) : this._childrenRenderOrder == t.ChildrenRenderOrder.Descent ? e.node.setSiblingIndex(n - o) : this._partner.callLater(this.buildNativeDisplayList), this.setBoundsChangedFlag(), o);
    }, o.prototype.swapChildren = function (t, e) {
      var i = this._children.indexOf(t),
          o = this._children.indexOf(e);

      if (-1 == i || -1 == o) throw "Not a child of this container";
      this.swapChildrenAt(i, o);
    }, o.prototype.swapChildrenAt = function (t, e) {
      var i = this._children[t],
          o = this._children[e];
      this.setChildIndex(i, e), this.setChildIndex(o, t);
    }, Object.defineProperty(o.prototype, "numChildren", {
      get: function get() {
        return this._children.length;
      },
      enumerable: !1,
      configurable: !0
    }), o.prototype.isAncestorOf = function (t) {
      if (null == t) return !1;

      for (var e = t.parent; e;) {
        if (e == this) return !0;
        e = e.parent;
      }

      return !1;
    }, o.prototype.addController = function (t) {
      this._controllers.push(t), t.parent = this, this.applyController(t);
    }, o.prototype.getControllerAt = function (t) {
      return this._controllers[t];
    }, o.prototype.getController = function (t) {
      for (var e = this._controllers.length, i = 0; i < e; ++i) {
        var o = this._controllers[i];
        if (o.name == t) return o;
      }

      return null;
    }, o.prototype.removeController = function (t) {
      var e = this._controllers.indexOf(t);

      if (-1 == e) throw "controller not exists";
      t.parent = null, this._controllers.splice(e, 1);

      for (var i = this._children.length, o = 0; o < i; o++) {
        this._children[o].handleControllerChanged(t);
      }
    }, Object.defineProperty(o.prototype, "controllers", {
      get: function get() {
        return this._controllers;
      },
      enumerable: !1,
      configurable: !0
    }), o.prototype.onChildAdd = function (e, i) {
      if (e.node.parent = this._container, e.node.active = e._finalVisible, !this._buildingDisplayList) {
        var o = this._children.length;
        this._childrenRenderOrder == t.ChildrenRenderOrder.Ascent ? e.node.setSiblingIndex(i) : this._childrenRenderOrder == t.ChildrenRenderOrder.Descent ? e.node.setSiblingIndex(o - i) : this._partner.callLater(this.buildNativeDisplayList);
      }
    }, o.prototype.buildNativeDisplayList = function (e) {
      if (isNaN(e)) {
        var i = this._children.length;
        if (0 != i) switch (this._childrenRenderOrder) {
          case t.ChildrenRenderOrder.Ascent:
            for (var o = 0, n = 0; n < i; n++) {
              this._children[n].node.setSiblingIndex(o++);
            }

            break;

          case t.ChildrenRenderOrder.Descent:
            for (o = 0, n = i - 1; n >= 0; n--) {
              this._children[n].node.setSiblingIndex(o++);
            }

            break;

          case t.ChildrenRenderOrder.Arch:
            for (o = 0, n = 0; n < this._apexIndex; n++) {
              this._children[n].node.setSiblingIndex(o++);
            }

            for (n = i - 1; n >= this._apexIndex; n--) {
              this._children[n].node.setSiblingIndex(o++);
            }

        }
      } else this.node.$gobj.buildNativeDisplayList();
    }, o.prototype.applyController = function (t) {
      this._applyingController = t;

      for (var e = this._children.length, i = 0; i < e; i++) {
        this._children[i].handleControllerChanged(t);
      }

      this._applyingController = null, t.runActions();
    }, o.prototype.applyAllControllers = function () {
      for (var t = this._controllers.length, e = 0; e < t; ++e) {
        this.applyController(this._controllers[e]);
      }
    }, o.prototype.adjustRadioGroupDepth = function (e, i) {
      var o,
          n,
          r = this._children.length,
          s = -1,
          h = -1;

      for (o = 0; o < r; o++) {
        (n = this._children[o]) == e ? s = o : n instanceof t.GButton && n.relatedController == i && o > h && (h = o);
      }

      s < h && (this._applyingController && this._children[h].handleControllerChanged(this._applyingController), this.swapChildrenAt(s, h));
    }, o.prototype.getTransitionAt = function (t) {
      return this._transitions[t];
    }, o.prototype.getTransition = function (t) {
      for (var e = this._transitions.length, i = 0; i < e; ++i) {
        var o = this._transitions[i];
        if (o.name == t) return o;
      }

      return null;
    }, o.prototype.isChildInView = function (t) {
      return this._rectMask ? t.x + t.width >= 0 && t.x <= this.width && t.y + t.height >= 0 && t.y <= this.height : !this._scrollPane || this._scrollPane.isChildInView(t);
    }, o.prototype.getFirstChildInView = function () {
      for (var t = this._children.length, e = 0; e < t; ++e) {
        var i = this._children[e];
        if (this.isChildInView(i)) return e;
      }

      return -1;
    }, Object.defineProperty(o.prototype, "scrollPane", {
      get: function get() {
        return this._scrollPane;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "opaque", {
      get: function get() {
        return this._opaque;
      },
      set: function set(t) {
        this._opaque = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "margin", {
      get: function get() {
        return this._margin;
      },
      set: function set(t) {
        this._margin.copy(t), this.handleSizeChanged();
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "childrenRenderOrder", {
      get: function get() {
        return this._childrenRenderOrder;
      },
      set: function set(t) {
        this._childrenRenderOrder != t && (this._childrenRenderOrder = t, this.buildNativeDisplayList());
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "apexIndex", {
      get: function get() {
        return this._apexIndex;
      },
      set: function set(e) {
        this._apexIndex != e && (this._apexIndex = e, this._childrenRenderOrder == t.ChildrenRenderOrder.Arch && this.buildNativeDisplayList());
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "mask", {
      get: function get() {
        return this._maskContent;
      },
      set: function set(t) {
        this.setMask(t, !1);
      },
      enumerable: !1,
      configurable: !0
    }), o.prototype.setMask = function (e, i) {
      if (this._maskContent && (this._maskContent.node.off(cc.Node.EventType.POSITION_CHANGED, this.onMaskContentChanged, this), this._maskContent.node.off(cc.Node.EventType.SIZE_CHANGED, this.onMaskContentChanged, this), this._maskContent.node.off(cc.Node.EventType.SCALE_CHANGED, this.onMaskContentChanged, this), this._maskContent.node.off(cc.Node.EventType.ANCHOR_CHANGED, this.onMaskContentChanged, this), this._maskContent.visible = !0), this._maskContent = e, this._maskContent) {
        if (!(e instanceof t.GImage || e instanceof t.GGraph)) return;

        if (!this._customMask) {
          var o = new cc.Node("Mask");
          o.parent = this._node, this._scrollPane ? this._container.parent.parent = o : this._container.parent = o, this._customMask = o.addComponent(cc.Mask);
        }

        e.visible = !1, e.node.on(cc.Node.EventType.POSITION_CHANGED, this.onMaskContentChanged, this), e.node.on(cc.Node.EventType.SIZE_CHANGED, this.onMaskContentChanged, this), e.node.on(cc.Node.EventType.SCALE_CHANGED, this.onMaskContentChanged, this), e.node.on(cc.Node.EventType.ANCHOR_CHANGED, this.onMaskContentChanged, this), this._customMask.inverted = i, this._node.activeInHierarchy ? this.onMaskReady() : this.on(t.Event.DISPLAY, this.onMaskReady, this), this.onMaskContentChanged(), this._scrollPane ? this._scrollPane.adjustMaskContainer() : this._container.setPosition(0, 0);
      } else this._customMask && (this._scrollPane ? this._container.parent.parent = this._node : this._container.parent = this._node, this._customMask.node.destroy(), this._customMask = null, this._scrollPane ? this._scrollPane.adjustMaskContainer() : this._container.setPosition(this._pivotCorrectX, this._pivotCorrectY));
    }, o.prototype.onMaskReady = function () {
      this.off(t.Event.DISPLAY, this.onMaskReady, this), this._maskContent instanceof t.GImage ? (this._customMask.type = cc.Mask.Type.IMAGE_STENCIL, this._customMask.alphaThreshold = 1e-4, this._customMask.spriteFrame = this._maskContent._content.spriteFrame) : this._maskContent instanceof t.GGraph && (2 == this._maskContent.type ? this._customMask.type = cc.Mask.Type.ELLIPSE : this._customMask.type = cc.Mask.Type.RECT);
    }, o.prototype.onMaskContentChanged = function () {
      var t = this._customMask.node,
          e = this._maskContent.node,
          i = e.width * e.scaleX,
          o = e.height * e.scaleY;
      t.setContentSize(i, o);
      var n = e.x - e.anchorX * i,
          r = e.y - e.anchorY * o;
      t.setAnchorPoint(-n / t.width, -r / t.height), t.setPosition(this._pivotCorrectX, this._pivotCorrectY);
    }, Object.defineProperty(o.prototype, "_pivotCorrectX", {
      get: function get() {
        return -this.pivotX * this._width + this._margin.left;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "_pivotCorrectY", {
      get: function get() {
        return this.pivotY * this._height - this._margin.top;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "baseUserData", {
      get: function get() {
        var t = this.packageItem.rawData;
        return t.seek(0, 4), t.readS();
      },
      enumerable: !1,
      configurable: !0
    }), o.prototype.setupScroll = function (e) {
      this._scrollPane = this._node.addComponent(t.ScrollPane), this._scrollPane.setup(e);
    }, o.prototype.setupOverflow = function (e) {
      e == t.OverflowType.Hidden && (this._rectMask = this._container.addComponent(cc.Mask)), this._margin.isNone || this.handleSizeChanged();
    }, o.prototype.handleAnchorChanged = function () {
      e.prototype.handleAnchorChanged.call(this), this._customMask ? this._customMask.node.setPosition(this._pivotCorrectX, this._pivotCorrectY) : this._scrollPane ? this._scrollPane.adjustMaskContainer() : this._container.setPosition(this._pivotCorrectX + this._alignOffset.x, this._pivotCorrectY - this._alignOffset.y);
    }, o.prototype.handleSizeChanged = function () {
      e.prototype.handleSizeChanged.call(this), this._customMask ? this._customMask.node.setPosition(this._pivotCorrectX, this._pivotCorrectY) : this._scrollPane || this._container.setPosition(this._pivotCorrectX, this._pivotCorrectY), this._scrollPane ? this._scrollPane.onOwnerSizeChanged() : this._container.setContentSize(this.viewWidth, this.viewHeight);
    }, o.prototype.handleGrayedChanged = function () {
      var t = this.getController("grayed");
      if (t) t.selectedIndex = this.grayed ? 1 : 0;else for (var e = this.grayed, i = this._children.length, o = 0; o < i; ++o) {
        this._children[o].grayed = e;
      }
    }, o.prototype.handleControllerChanged = function (t) {
      e.prototype.handleControllerChanged.call(this, t), this._scrollPane && this._scrollPane.handleControllerChanged(t);
    }, o.prototype._hitTest = function (e, o) {
      if (this._customMask && (i.set(o), i.y = t.GRoot.inst.height - o.y, !this._customMask._hitTest(i))) return null;

      if (this.hitArea) {
        if (!this.hitArea.hitTest(e, o)) return null;
      } else if (this._rectMask) {
        i.set(e), i.x += this._container.x, i.y += this._container.y;

        var n = this._container.getContentSize();

        if (i.x < 0 || i.y < 0 || i.x >= n.width || i.y >= n.height) return null;
      }

      if (this._scrollPane) {
        var r = this._scrollPane.hitTest(e, o);

        if (!r) return null;
        if (r != this) return r;
      }

      for (var s = null, h = this._children.length - 1; h >= 0; h--) {
        var a = this._children[h];
        if (this._maskContent != a && !a._touchDisabled && (s = a.hitTest(o))) break;
      }

      return !s && this._opaque && (this.hitArea || e.x >= 0 && e.y >= 0 && e.x < this._width && e.y < this._height) && (s = this), s;
    }, o.prototype.setBoundsChangedFlag = function () {
      (this._scrollPane || this._trackBounds) && (this._boundsChanged || (this._boundsChanged = !0, this._partner.callLater(this.refresh)));
    }, o.prototype.refresh = function (t) {
      if (isNaN(t)) {
        if (this._boundsChanged) {
          var e = this._children.length;
          if (e > 0) for (var i = 0; i < e; i++) {
            this._children[i].ensureSizeCorrect();
          }
          this.updateBounds();
        }
      } else this.node.$gobj.refresh();
    }, o.prototype.ensureBoundsCorrect = function () {
      var t = this._children.length;
      if (t > 0) for (var e = 0; e < t; e++) {
        this._children[e].ensureSizeCorrect();
      }
      this._boundsChanged && this.updateBounds();
    }, o.prototype.updateBounds = function () {
      var t = 0,
          e = 0,
          i = 0,
          o = 0,
          n = this._children.length;

      if (n > 0) {
        t = Number.POSITIVE_INFINITY, e = Number.POSITIVE_INFINITY;
        var r = Number.NEGATIVE_INFINITY,
            s = Number.NEGATIVE_INFINITY,
            h = 0,
            a = 0;

        for (a = 0; a < n; a++) {
          var l = this._children[a];
          (h = l.x) < t && (t = h), (h = l.y) < e && (e = h), (h = l.x + l.actualWidth) > r && (r = h), (h = l.y + l.actualHeight) > s && (s = h);
        }

        i = r - t, o = s - e;
      }

      this.setBounds(t, e, i, o);
    }, o.prototype.setBounds = function (t, e, i, o) {
      void 0 === o && (o = 0), this._boundsChanged = !1, this._scrollPane && this._scrollPane.setContentSize(Math.round(t + i), Math.round(e + o));
    }, Object.defineProperty(o.prototype, "viewWidth", {
      get: function get() {
        return this._scrollPane ? this._scrollPane.viewWidth : this.width - this._margin.left - this._margin.right;
      },
      set: function set(t) {
        this._scrollPane ? this._scrollPane.viewWidth = t : this.width = t + this._margin.left + this._margin.right;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "viewHeight", {
      get: function get() {
        return this._scrollPane ? this._scrollPane.viewHeight : this.height - this._margin.top - this._margin.bottom;
      },
      set: function set(t) {
        this._scrollPane ? this._scrollPane.viewHeight = t : this.height = t + this._margin.top + this._margin.bottom;
      },
      enumerable: !1,
      configurable: !0
    }), o.prototype.getSnappingPosition = function (t, e, i) {
      i || (i = new cc.Vec2());
      var o = this._children.length;
      if (0 == o) return i.x = 0, i.y = 0, i;
      this.ensureBoundsCorrect();
      var n = null,
          r = null,
          s = 0;

      if (0 != e) {
        for (; s < o; s++) {
          if (e < (n = this._children[s]).y) {
            if (0 == s) {
              e = 0;
              break;
            }

            e = e < (r = this._children[s - 1]).y + r.actualHeight / 2 ? r.y : n.y;
            break;
          }
        }

        s == o && (e = n.y);
      }

      if (0 != t) {
        for (s > 0 && s--; s < o; s++) {
          if (t < (n = this._children[s]).x) {
            if (0 == s) {
              t = 0;
              break;
            }

            t = t < (r = this._children[s - 1]).x + r.actualWidth / 2 ? r.x : n.x;
            break;
          }
        }

        s == o && (t = n.x);
      }

      return i.x = t, i.y = e, i;
    }, o.prototype.childSortingOrderChanged = function (t, e, i) {
      if (void 0 === i && (i = 0), 0 == i) this._sortingChildCount--, this.setChildIndex(t, this._children.length);else {
        0 == e && this._sortingChildCount++;

        var o = this._children.indexOf(t),
            n = this.getInsertPosForSortingChild(t);

        o < n ? this._setChildIndex(t, o, n - 1) : this._setChildIndex(t, o, n);
      }
    }, o.prototype.constructFromResource = function () {
      this.constructFromResource2(null, 0);
    }, o.prototype.constructFromResource2 = function (e, i) {
      var o,
          n,
          r,
          s,
          h,
          a,
          l,
          c,
          u = this.packageItem.getBranch();
      u.decoded || (u.decoded = !0, t.TranslationHelper.translateComponent(u));
      var _ = u.rawData;
      _.seek(0, 0), this._underConstruct = !0, this.sourceWidth = _.readInt(), this.sourceHeight = _.readInt(), this.initWidth = this.sourceWidth, this.initHeight = this.sourceHeight, this.setSize(this.sourceWidth, this.sourceHeight), _.readBool() && (this.minWidth = _.readInt(), this.maxWidth = _.readInt(), this.minHeight = _.readInt(), this.maxHeight = _.readInt()), _.readBool() && (h = _.readFloat(), a = _.readFloat(), this.setPivot(h, a, _.readBool())), _.readBool() && (this._margin.top = _.readInt(), this._margin.bottom = _.readInt(), this._margin.left = _.readInt(), this._margin.right = _.readInt());

      var p = _.readByte();

      if (p == t.OverflowType.Scroll) {
        var d = _.position;
        _.seek(0, 7), this.setupScroll(_), _.position = d;
      } else this.setupOverflow(p);

      _.readBool() && _.skip(8), this._buildingDisplayList = !0, _.seek(0, 1);

      var f,
          g = _.readShort();

      for (o = 0; o < g; o++) {
        s = _.readShort(), s += _.position;
        var y = new t.Controller();
        this._controllers.push(y), y.parent = this, y.setup(_), _.position = s;
      }

      _.seek(0, 2);

      var m = _.readShort();

      for (o = 0; o < m; o++) {
        if (n = _.readShort(), r = _.position, e) f = e[i + o];else {
          _.seek(r, 0);

          var b,
              v = _.readByte(),
              C = _.readS(),
              w = _.readS(),
              S = null;

          null != C && (S = (b = null != w ? t.UIPackage.getById(w) : u.owner) ? b.getItemById(C) : null), S ? (f = t.UIObjectFactory.newObject(S)).constructFromResource() : f = t.UIObjectFactory.newObject(v);
        }
        f._underConstruct = !0, f.setup_beforeAdd(_, r), f._parent = this, f.node.parent = this._container, this._children.push(f), _.position = r + n;
      }

      for (_.seek(0, 3), this.relations.setup(_, !0), _.seek(0, 2), _.skip(2), o = 0; o < m; o++) {
        s = _.readShort(), s += _.position, _.seek(_.position, 3), this._children[o].relations.setup(_, !1), _.position = s;
      }

      for (_.seek(0, 2), _.skip(2), o = 0; o < m; o++) {
        s = _.readShort(), s += _.position, (f = this._children[o]).setup_afterAdd(_, _.position), f._underConstruct = !1, _.position = s;
      }

      _.seek(0, 4), _.skip(2), this.opaque = _.readBool();

      var x = _.readShort();

      -1 != x && this.setMask(this.getChildAt(x), _.readBool());

      var P = _.readS();

      l = _.readInt(), c = _.readInt(), null != P ? (S = u.owner.getItemById(P)) && S.hitTestData && (this.hitArea = new t.PixelHitTest(S.hitTestData, l, c)) : 0 != l && -1 != c && (this.hitArea = new t.ChildHitArea(this.getChildAt(c))), _.seek(0, 5);

      var I = _.readShort();

      for (o = 0; o < I; o++) {
        s = _.readShort(), s += _.position;
        var T = new t.Transition(this);
        T.setup(_), this._transitions.push(T), _.position = s;
      }

      this.applyAllControllers(), this._buildingDisplayList = !1, this._underConstruct = !1, this.buildNativeDisplayList(), this.setBoundsChangedFlag(), u.objectType != t.ObjectType.Component && this.constructExtension(_), this.onConstruct();
    }, o.prototype.constructExtension = function () {}, o.prototype.onConstruct = function () {}, o.prototype.setup_afterAdd = function (t, i) {
      e.prototype.setup_afterAdd.call(this, t, i), t.seek(i, 4);
      var o = t.readShort();
      -1 != o && this._scrollPane && (this._scrollPane.pageController = this._parent.getControllerAt(o));

      for (var n = t.readShort(), r = 0; r < n; r++) {
        var s = this.getController(t.readS()),
            h = t.readS();
        s && (s.selectedPageId = h);
      }

      if (t.version >= 2) for (n = t.readShort(), r = 0; r < n; r++) {
        var a = t.readS(),
            l = t.readShort(),
            c = t.readS(),
            u = this.getChildByPath(a);
        u && u.setProp(l, c);
      }
    }, o.prototype.onEnable = function () {
      for (var t = this._transitions.length, e = 0; e < t; ++e) {
        this._transitions[e].onEnable();
      }
    }, o.prototype.onDisable = function () {
      for (var t = this._transitions.length, e = 0; e < t; ++e) {
        this._transitions[e].onDisable();
      }
    }, o;
  }(t.GObject);

  t.GComponent = e;
  var i = new cc.Vec2();
}(fgui || (fgui = {})), function (t) {
  var e = function (e) {
    function i() {
      var i = e.call(this) || this;
      return i._node.name = "GButton", i._mode = t.ButtonMode.Common, i._title = "", i._icon = "", i._sound = t.UIConfig.buttonSound, i._soundVolumeScale = t.UIConfig.buttonSoundVolumeScale, i._changeStateOnClick = !0, i._downEffect = 0, i._downEffectValue = .8, i;
    }

    return __extends(i, e), Object.defineProperty(i.prototype, "icon", {
      get: function get() {
        return this._icon;
      },
      set: function set(t) {
        this._icon = t, t = this._selected && this._selectedIcon ? this._selectedIcon : this._icon, this._iconObject && (this._iconObject.icon = t), this.updateGear(7);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "selectedIcon", {
      get: function get() {
        return this._selectedIcon;
      },
      set: function set(t) {
        this._selectedIcon = t, t = this._selected && this._selectedIcon ? this._selectedIcon : this._icon, this._iconObject && (this._iconObject.icon = t);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "title", {
      get: function get() {
        return this._title;
      },
      set: function set(t) {
        this._title = t, this._titleObject && (this._titleObject.text = this._selected && this._selectedTitle ? this._selectedTitle : this._title), this.updateGear(6);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "text", {
      get: function get() {
        return this.title;
      },
      set: function set(t) {
        this.title = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "selectedTitle", {
      get: function get() {
        return this._selectedTitle;
      },
      set: function set(t) {
        this._selectedTitle = t, this._titleObject && (this._titleObject.text = this._selected && this._selectedTitle ? this._selectedTitle : this._title);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "titleColor", {
      get: function get() {
        var t = this.getTextField();
        return t ? t.color : cc.Color.BLACK;
      },
      set: function set(t) {
        var e = this.getTextField();
        e && (e.color = t);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "titleFontSize", {
      get: function get() {
        var t = this.getTextField();
        return t ? t.fontSize : 0;
      },
      set: function set(t) {
        var e = this.getTextField();
        e && (e.fontSize = t);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "sound", {
      get: function get() {
        return this._sound;
      },
      set: function set(t) {
        this._sound = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "soundVolumeScale", {
      get: function get() {
        return this._soundVolumeScale;
      },
      set: function set(t) {
        this._soundVolumeScale = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "selected", {
      get: function get() {
        return this._selected;
      },
      set: function set(e) {
        if (this._mode != t.ButtonMode.Common && this._selected != e) {
          if (this._selected = e, this.setCurrentState(), this._selectedTitle && this._titleObject && (this._titleObject.text = this._selected ? this._selectedTitle : this._title), this._selectedIcon) {
            var i = this._selected ? this._selectedIcon : this._icon;
            this._iconObject && (this._iconObject.icon = i);
          }

          this._relatedController && this._parent && !this._parent._buildingDisplayList && (this._selected ? (this._relatedController.selectedPageId = this._relatedPageId, this._relatedController.autoRadioGroupDepth && this._parent.adjustRadioGroupDepth(this, this._relatedController)) : this._mode == t.ButtonMode.Check && this._relatedController.selectedPageId == this._relatedPageId && (this._relatedController.oppositePageId = this._relatedPageId));
        }
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "mode", {
      get: function get() {
        return this._mode;
      },
      set: function set(e) {
        this._mode != e && (e == t.ButtonMode.Common && (this.selected = !1), this._mode = e);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "relatedController", {
      get: function get() {
        return this._relatedController;
      },
      set: function set(t) {
        this._relatedController = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "relatedPageId", {
      get: function get() {
        return this._relatedPageId;
      },
      set: function set(t) {
        this._relatedPageId = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "changeStateOnClick", {
      get: function get() {
        return this._changeStateOnClick;
      },
      set: function set(t) {
        this._changeStateOnClick = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "linkedPopup", {
      get: function get() {
        return this._linkedPopup;
      },
      set: function set(t) {
        this._linkedPopup = t;
      },
      enumerable: !1,
      configurable: !0
    }), i.prototype.getTextField = function () {
      return this._titleObject instanceof t.GTextField ? this._titleObject : this._titleObject instanceof t.GLabel || this._titleObject instanceof i ? this._titleObject.getTextField() : null;
    }, i.prototype.fireClick = function () {
      t.GRoot.inst.inputProcessor.simulateClick(this);
    }, i.prototype.setState = function (e) {
      if (this._buttonController && (this._buttonController.selectedPage = e), 1 == this._downEffect) {
        var o = this.numChildren;

        if (e == i.DOWN || e == i.SELECTED_OVER || e == i.SELECTED_DISABLED) {
          this._downColor || (this._downColor = new cc.Color());
          var n = 255 * this._downEffectValue;
          this._downColor.r = this._downColor.g = this._downColor.b = n;

          for (var r = 0; r < o; r++) {
            null == (s = this.getChildAt(r)).color || s instanceof t.GTextField || (s.color = this._downColor);
          }
        } else for (r = 0; r < o; r++) {
          var s;
          null == (s = this.getChildAt(r)).color || s instanceof t.GTextField || (s.color = cc.Color.WHITE);
        }
      } else 2 == this._downEffect && (e == i.DOWN || e == i.SELECTED_OVER || e == i.SELECTED_DISABLED ? this._downScaled || (this._downScaled = !0, this.setScale(this.scaleX * this._downEffectValue, this.scaleY * this._downEffectValue)) : this._downScaled && (this._downScaled = !1, this.setScale(this.scaleX / this._downEffectValue, this.scaleY / this._downEffectValue)));
    }, i.prototype.setCurrentState = function () {
      this.grayed && this._buttonController && this._buttonController.hasPage(i.DISABLED) ? this._selected ? this.setState(i.SELECTED_DISABLED) : this.setState(i.DISABLED) : this._selected ? this.setState(this._over ? i.SELECTED_OVER : i.DOWN) : this.setState(this._over ? i.OVER : i.UP);
    }, i.prototype.handleControllerChanged = function (t) {
      e.prototype.handleControllerChanged.call(this, t), this._relatedController == t && (this.selected = this._relatedPageId == t.selectedPageId);
    }, i.prototype.handleGrayedChanged = function () {
      this._buttonController && this._buttonController.hasPage(i.DISABLED) ? this.grayed ? this._selected && this._buttonController.hasPage(i.SELECTED_DISABLED) ? this.setState(i.SELECTED_DISABLED) : this.setState(i.DISABLED) : this._selected ? this.setState(i.DOWN) : this.setState(i.UP) : e.prototype.handleGrayedChanged.call(this);
    }, i.prototype.getProp = function (i) {
      switch (i) {
        case t.ObjectPropID.Color:
          return this.titleColor;

        case t.ObjectPropID.OutlineColor:
          var o = this.getTextField();
          return o ? o.strokeColor : 0;

        case t.ObjectPropID.FontSize:
          return this.titleFontSize;

        case t.ObjectPropID.Selected:
          return this.selected;

        default:
          return e.prototype.getProp.call(this, i);
      }
    }, i.prototype.setProp = function (i, o) {
      switch (i) {
        case t.ObjectPropID.Color:
          this.titleColor = o;
          break;

        case t.ObjectPropID.OutlineColor:
          var n = this.getTextField();
          n && (n.strokeColor = o);
          break;

        case t.ObjectPropID.FontSize:
          this.titleFontSize = o;
          break;

        case t.ObjectPropID.Selected:
          this.selected = o;
          break;

        default:
          e.prototype.setProp.call(this, i, o);
      }
    }, i.prototype.constructExtension = function (e) {
      e.seek(0, 6), this._mode = e.readByte();
      var o = e.readS();
      o && (this._sound = o), this._soundVolumeScale = e.readFloat(), this._downEffect = e.readByte(), this._downEffectValue = e.readFloat(), 2 == this._downEffect && this.setPivot(.5, .5, this.pivotAsAnchor), this._buttonController = this.getController("button"), this._titleObject = this.getChild("title"), this._iconObject = this.getChild("icon"), this._titleObject && (this._title = this._titleObject.text), this._iconObject && (this._icon = this._iconObject.icon), this._mode == t.ButtonMode.Common && this.setState(i.UP), this._node.on(t.Event.TOUCH_BEGIN, this.onTouchBegin_1, this), this._node.on(t.Event.TOUCH_END, this.onTouchEnd_1, this), this._node.on(t.Event.ROLL_OVER, this.onRollOver_1, this), this._node.on(t.Event.ROLL_OUT, this.onRollOut_1, this), this._node.on(t.Event.CLICK, this.onClick_1, this);
    }, i.prototype.setup_afterAdd = function (t, i) {
      var o, n;
      e.prototype.setup_afterAdd.call(this, t, i), t.seek(i, 6) && t.readByte() == this.packageItem.objectType && (null != (o = t.readS()) && (this.title = o), null != (o = t.readS()) && (this.selectedTitle = o), null != (o = t.readS()) && (this.icon = o), null != (o = t.readS()) && (this.selectedIcon = o), t.readBool() && (this.titleColor = t.readColor()), 0 != (n = t.readInt()) && (this.titleFontSize = n), (n = t.readShort()) >= 0 && (this._relatedController = this.parent.getControllerAt(n)), this._relatedPageId = t.readS(), null != (o = t.readS()) && (this._sound = o), t.readBool() && (this._soundVolumeScale = t.readFloat()), this.selected = t.readBool());
    }, i.prototype.onRollOver_1 = function () {
      this._buttonController && this._buttonController.hasPage(i.OVER) && (this._over = !0, this._down || this.grayed && this._buttonController.hasPage(i.DISABLED) || this.setState(this._selected ? i.SELECTED_OVER : i.OVER));
    }, i.prototype.onRollOut_1 = function () {
      this._buttonController && this._buttonController.hasPage(i.OVER) && (this._over = !1, this._down || this.grayed && this._buttonController.hasPage(i.DISABLED) || this.setState(this._selected ? i.DOWN : i.UP));
    }, i.prototype.onTouchBegin_1 = function (e) {
      e.button == cc.Event.EventMouse.BUTTON_LEFT && (this._down = !0, e.captureTouch(), this._mode == t.ButtonMode.Common && (this.grayed && this._buttonController && this._buttonController.hasPage(i.DISABLED) ? this.setState(i.SELECTED_DISABLED) : this.setState(i.DOWN)), this._linkedPopup && (this._linkedPopup instanceof t.Window ? this._linkedPopup.toggleStatus() : this.root.togglePopup(this._linkedPopup, this)));
    }, i.prototype.onTouchEnd_1 = function (e) {
      if (e.button == cc.Event.EventMouse.BUTTON_LEFT && this._down) {
        if (this._down = !1, null == this._node) return;
        this._mode == t.ButtonMode.Common ? this.grayed && this._buttonController && this._buttonController.hasPage(i.DISABLED) ? this.setState(i.DISABLED) : this._over ? this.setState(i.OVER) : this.setState(i.UP) : this._over || null == this._buttonController || this._buttonController.selectedPage != i.OVER && this._buttonController.selectedPage != i.SELECTED_OVER || this.setCurrentState();
      }
    }, i.prototype.onClick_1 = function () {
      if (this._sound) {
        var e = t.UIPackage.getItemByURL(this._sound);

        if (e) {
          var i = e.owner.getItemAsset(e);
          i && t.GRoot.inst.playOneShotSound(i, this._soundVolumeScale);
        }
      }

      this._mode == t.ButtonMode.Check ? this._changeStateOnClick && (this.selected = !this._selected, this._node.emit(t.Event.STATUS_CHANGED, this)) : this._mode == t.ButtonMode.Radio ? this._changeStateOnClick && !this._selected && (this.selected = !0, this._node.emit(t.Event.STATUS_CHANGED, this)) : this._relatedController && (this._relatedController.selectedPageId = this._relatedPageId);
    }, i.UP = "up", i.DOWN = "down", i.OVER = "over", i.SELECTED_OVER = "selectedOver", i.DISABLED = "disabled", i.SELECTED_DISABLED = "selectedDisabled", i;
  }(t.GComponent);

  t.GButton = e;
}(fgui || (fgui = {})), function (t) {
  var e = function (e) {
    function i() {
      var i = e.call(this) || this;
      return i._visibleItemCount = 0, i._selectedIndex = 0, i._popupDirection = t.PopupDirection.Auto, i._node.name = "GComboBox", i._visibleItemCount = t.UIConfig.defaultComboBoxVisibleItemCount, i._itemsUpdated = !0, i._selectedIndex = -1, i._items = [], i._values = [], i;
    }

    return __extends(i, e), Object.defineProperty(i.prototype, "text", {
      get: function get() {
        return this._titleObject ? this._titleObject.text : null;
      },
      set: function set(t) {
        this._titleObject && (this._titleObject.text = t), this.updateGear(6);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "icon", {
      get: function get() {
        return this._iconObject ? this._iconObject.icon : null;
      },
      set: function set(t) {
        this._iconObject && (this._iconObject.icon = t), this.updateGear(7);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "titleColor", {
      get: function get() {
        var t = this.getTextField();
        return t ? t.color : cc.Color.BLACK;
      },
      set: function set(t) {
        var e = this.getTextField();
        e && (e.color = t);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "titleFontSize", {
      get: function get() {
        var t = this.getTextField();
        return t ? t.fontSize : 0;
      },
      set: function set(t) {
        var e = this.getTextField();
        e && (e.fontSize = t);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "visibleItemCount", {
      get: function get() {
        return this._visibleItemCount;
      },
      set: function set(t) {
        this._visibleItemCount = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "popupDirection", {
      get: function get() {
        return this._popupDirection;
      },
      set: function set(t) {
        this._popupDirection = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "items", {
      get: function get() {
        return this._items;
      },
      set: function set(t) {
        t ? this._items = t.concat() : this._items.length = 0, this._items.length > 0 ? (this._selectedIndex >= this._items.length ? this._selectedIndex = this._items.length - 1 : -1 == this._selectedIndex && (this._selectedIndex = 0), this.text = this._items[this._selectedIndex], this._icons && this._selectedIndex < this._icons.length && (this.icon = this._icons[this._selectedIndex])) : (this.text = "", this._icons && (this.icon = null), this._selectedIndex = -1), this._itemsUpdated = !0;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "icons", {
      get: function get() {
        return this._icons;
      },
      set: function set(t) {
        this._icons = t, this._icons && -1 != this._selectedIndex && this._selectedIndex < this._icons.length && (this.icon = this._icons[this._selectedIndex]);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "values", {
      get: function get() {
        return this._values;
      },
      set: function set(t) {
        t ? this._values = t.concat() : this._values.length = 0;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "selectedIndex", {
      get: function get() {
        return this._selectedIndex;
      },
      set: function set(t) {
        this._selectedIndex != t && (this._selectedIndex = t, this._selectedIndex >= 0 && this._selectedIndex < this._items.length ? (this.text = this._items[this._selectedIndex], this._icons && this._selectedIndex < this._icons.length && (this.icon = this._icons[this._selectedIndex])) : (this.text = "", this._icons && (this.icon = null)), this.updateSelectionController());
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "value", {
      get: function get() {
        return this._values[this._selectedIndex];
      },
      set: function set(t) {
        var e = this._values.indexOf(t);

        -1 == e && null == t && (e = this._values.indexOf("")), this.selectedIndex = e;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "selectionController", {
      get: function get() {
        return this._selectionController;
      },
      set: function set(t) {
        this._selectionController = t;
      },
      enumerable: !1,
      configurable: !0
    }), i.prototype.getTextField = function () {
      return this._titleObject instanceof t.GTextField ? this._titleObject : this._titleObject instanceof t.GLabel || this._titleObject instanceof t.GButton ? this._titleObject.getTextField() : null;
    }, i.prototype.setState = function (t) {
      this._buttonController && (this._buttonController.selectedPage = t);
    }, i.prototype.getProp = function (i) {
      switch (i) {
        case t.ObjectPropID.Color:
          return this.titleColor;

        case t.ObjectPropID.OutlineColor:
          var o = this.getTextField();
          return o ? o.strokeColor : 0;

        case t.ObjectPropID.FontSize:
          return (o = this.getTextField()) ? o.fontSize : 0;

        default:
          return e.prototype.getProp.call(this, i);
      }
    }, i.prototype.setProp = function (i, o) {
      switch (i) {
        case t.ObjectPropID.Color:
          this.titleColor = o;
          break;

        case t.ObjectPropID.OutlineColor:
          var n = this.getTextField();
          n && (n.strokeColor = o);
          break;

        case t.ObjectPropID.FontSize:
          (n = this.getTextField()) && (n.fontSize = o);
          break;

        default:
          e.prototype.setProp.call(this, i, o);
      }
    }, i.prototype.constructExtension = function (e) {
      var i;

      if (this._buttonController = this.getController("button"), this._titleObject = this.getChild("title"), this._iconObject = this.getChild("icon"), i = e.readS()) {
        var o = t.UIPackage.createObjectFromURL(i);
        if (!(o instanceof t.GComponent)) return void console.error("\u4E0B\u62C9\u6846\u5FC5\u987B\u4E3A\u5143\u4EF6");
        if (this.dropdown = o, this.dropdown.name = "this.dropdown", this._list = this.dropdown.getChild("list"), null == this._list) return void console.error(this.resourceURL + ": \u4E0B\u62C9\u6846\u7684\u5F39\u51FA\u5143\u4EF6\u91CC\u5FC5\u987B\u5305\u542B\u540D\u4E3Alist\u7684\u5217\u8868");
        this._list.on(t.Event.CLICK_ITEM, this.onClickItem, this), this._list.addRelation(this.dropdown, t.RelationType.Width), this._list.removeRelation(this.dropdown, t.RelationType.Height), this.dropdown.addRelation(this._list, t.RelationType.Height), this.dropdown.removeRelation(this._list, t.RelationType.Width), this.dropdown.on(t.Event.UNDISPLAY, this.onPopupClosed, this);
      }

      this._node.on(t.Event.TOUCH_BEGIN, this.onTouchBegin_1, this), this._node.on(t.Event.TOUCH_END, this.onTouchEnd_1, this), this._node.on(t.Event.ROLL_OVER, this.onRollOver_1, this), this._node.on(t.Event.ROLL_OUT, this.onRollOut_1, this);
    }, i.prototype.handleControllerChanged = function (t) {
      e.prototype.handleControllerChanged.call(this, t), this._selectionController == t && (this.selectedIndex = t.selectedIndex);
    }, i.prototype.updateSelectionController = function () {
      if (this._selectionController && !this._selectionController.changing && this._selectedIndex < this._selectionController.pageCount) {
        var t = this._selectionController;
        this._selectionController = null, t.selectedIndex = this._selectedIndex, this._selectionController = t;
      }
    }, i.prototype.dispose = function () {
      this.dropdown && (this.dropdown.dispose(), this.dropdown = null), e.prototype.dispose.call(this);
    }, i.prototype.setup_afterAdd = function (t, i) {
      if (e.prototype.setup_afterAdd.call(this, t, i), t.seek(i, 6) && t.readByte() == this.packageItem.objectType) {
        var o,
            n,
            r,
            s,
            h = t.readShort();

        for (o = 0; o < h; o++) {
          r = t.readShort(), r += t.position, this._items[o] = t.readS(), this._values[o] = t.readS(), null != (s = t.readS()) && (null == this._icons && (this._icons = new Array()), this._icons[o] = s), t.position = r;
        }

        null != (s = t.readS()) ? (this.text = s, this._selectedIndex = this._items.indexOf(s)) : this._items.length > 0 ? (this._selectedIndex = 0, this.text = this._items[0]) : this._selectedIndex = -1, null != (s = t.readS()) && (this.icon = s), t.readBool() && (this.titleColor = t.readColor()), (n = t.readInt()) > 0 && (this._visibleItemCount = n), this._popupDirection = t.readByte(), (n = t.readShort()) >= 0 && (this._selectionController = this.parent.getControllerAt(n));
      }
    }, i.prototype.showDropdown = function () {
      if (this._itemsUpdated) {
        this._itemsUpdated = !1, this._list.removeChildrenToPool();

        for (var e = this._items.length, i = 0; i < e; i++) {
          var o = this._list.addItemFromPool();

          o.name = i < this._values.length ? this._values[i] : "", o.text = this._items[i], o.icon = this._icons && i < this._icons.length ? this._icons[i] : null;
        }

        this._list.resizeToFit(this._visibleItemCount);
      }

      this._list.selectedIndex = -1, this.dropdown.width = this.width, this._list.ensureBoundsCorrect(), this.root.togglePopup(this.dropdown, this, this._popupDirection), this.dropdown.parent && this.setState(t.GButton.DOWN);
    }, i.prototype.onPopupClosed = function () {
      this._over ? this.setState(t.GButton.OVER) : this.setState(t.GButton.UP);
    }, i.prototype.onClickItem = function (t) {
      var e = this,
          i = this._list.getChildIndex(t);

      this._partner.callLater(function () {
        e.onClickItem2(i);
      }, .1);
    }, i.prototype.onClickItem2 = function (e) {
      this.dropdown.parent instanceof t.GRoot && this.dropdown.parent.hidePopup(), this._selectedIndex = -1, this.selectedIndex = e, this._node.emit(t.Event.STATUS_CHANGED, this);
    }, i.prototype.onRollOver_1 = function () {
      this._over = !0, this._down || this.dropdown && this.dropdown.parent || this.setState(t.GButton.OVER);
    }, i.prototype.onRollOut_1 = function () {
      this._over = !1, this._down || this.dropdown && this.dropdown.parent || this.setState(t.GButton.UP);
    }, i.prototype.onTouchBegin_1 = function (e) {
      e.button == cc.Event.EventMouse.BUTTON_LEFT && (e.initiator instanceof t.GTextInput && e.initiator.editable || (this._down = !0, e.captureTouch(), this.dropdown && this.showDropdown()));
    }, i.prototype.onTouchEnd_1 = function (e) {
      e.button == cc.Event.EventMouse.BUTTON_LEFT && this._down && (this._down = !1, this.dropdown && !this.dropdown.parent && (this._over ? this.setState(t.GButton.OVER) : this.setState(t.GButton.UP)));
    }, i;
  }(t.GComponent);

  t.GComboBox = e;
}(fgui || (fgui = {})), function (t) {
  var e = function (e) {
    function i() {
      var t = e.call(this) || this;
      return t._type = 0, t._lineSize = 0, t._node.name = "GGraph", t._lineSize = 1, t._lineColor = new cc.Color(), t._fillColor = new cc.Color(255, 255, 255, 255), t._content = t._node.addComponent(cc.Graphics), t;
    }

    return __extends(i, e), i.prototype.drawRect = function (t, e, i, o) {
      this._type = 1, this._lineSize = t, this._lineColor.set(e), this._fillColor.set(i), this._cornerRadius = o, this.updateGraph();
    }, i.prototype.drawEllipse = function (t, e, i) {
      this._type = 2, this._lineSize = t, this._lineColor.set(e), this._fillColor.set(i), this.updateGraph();
    }, i.prototype.drawRegularPolygon = function (t, e, i, o, n, r) {
      this._type = 4, this._lineSize = t, this._lineColor.set(e), this._fillColor.set(i), this._sides = o, this._startAngle = n || 0, this._distances = r, this.updateGraph();
    }, i.prototype.drawPolygon = function (t, e, i, o) {
      this._type = 3, this._lineSize = t, this._lineColor.set(e), this._fillColor.set(i), this._polygonPoints = o, this.updateGraph();
    }, Object.defineProperty(i.prototype, "distances", {
      get: function get() {
        return this._distances;
      },
      set: function set(t) {
        this._distances = t, 3 == this._type && this.updateGraph();
      },
      enumerable: !1,
      configurable: !0
    }), i.prototype.clearGraphics = function () {
      this._type = 0, this._hasContent && (this._content.clear(), this._hasContent = !1);
    }, Object.defineProperty(i.prototype, "type", {
      get: function get() {
        return this._type;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "color", {
      get: function get() {
        return this._fillColor;
      },
      set: function set(t) {
        this._fillColor.set(t), 0 != this._type && this.updateGraph();
      },
      enumerable: !1,
      configurable: !0
    }), i.prototype.updateGraph = function () {
      var t = this._content;
      this._hasContent && (this._hasContent = !1, t.clear());
      var e = this._width,
          i = this._height;

      if (0 != e && 0 != i) {
        var o = -this.pivotX * this._width,
            n = this.pivotY * this._height,
            r = this._lineSize / 2;
        if (t.lineWidth = this._lineSize, t.strokeColor = this._lineColor, t.fillColor = this._fillColor, 1 == this._type) this._cornerRadius ? t.roundRect(o + r, -i + n + r, e - this._lineSize, i - this._lineSize, this._cornerRadius[0]) : t.rect(o + r, -i + n + r, e - this._lineSize, i - this._lineSize);else if (2 == this._type) t.ellipse(e / 2 + o, -i / 2 + n, e / 2 - r, i / 2 - r);else if (3 == this._type) this.drawPath(t, this._polygonPoints, o, n);else if (4 == this._type) {
          this._polygonPoints || (this._polygonPoints = []);
          var s = Math.min(e, i) / 2 - r;
          this._polygonPoints.length = 0;

          for (var h, a = cc.misc.degreesToRadians(this._startAngle), l = 2 * Math.PI / this._sides, c = 0; c < this._sides; c++) {
            this._distances ? (h = this._distances[c], isNaN(h) && (h = 1)) : h = 1;

            var u = s + s * h * Math.cos(a),
                _ = s + s * h * Math.sin(a);

            this._polygonPoints.push(u, _), a += l;
          }

          this.drawPath(t, this._polygonPoints, o, n);
        }
        0 != r && t.stroke(), 0 != this._fillColor.a && t.fill(), this._hasContent = !0;
      }
    }, i.prototype.drawPath = function (t, e, i, o) {
      var n = e.length;
      t.moveTo(e[0] + i, -e[1] + o);

      for (var r = 2; r < n; r += 2) {
        t.lineTo(e[r] + i, -e[r + 1] + o);
      }

      t.lineTo(e[0] + i, -e[1] + o);
    }, i.prototype.handleSizeChanged = function () {
      e.prototype.handleSizeChanged.call(this), 0 != this._type && this.updateGraph();
    }, i.prototype.handleAnchorChanged = function () {
      e.prototype.handleAnchorChanged.call(this), 0 != this._type && this.updateGraph();
    }, i.prototype.getProp = function (i) {
      return i == t.ObjectPropID.Color ? this.color : e.prototype.getProp.call(this, i);
    }, i.prototype.setProp = function (i, o) {
      i == t.ObjectPropID.Color ? this.color = o : e.prototype.setProp.call(this, i, o);
    }, i.prototype._hitTest = function (t) {
      if (t.x >= 0 && t.y >= 0 && t.x < this._width && t.y < this._height) {
        if (3 == this._type) {
          var e = this._polygonPoints,
              i = e.length / 2,
              o = void 0,
              n = i - 1,
              r = !1;

          for (this._width, this._height, o = 0; o < i; ++o) {
            var s = e[2 * o],
                h = e[2 * o + 1],
                a = e[2 * n],
                l = e[2 * n + 1];
            (h < t.y && l >= t.y || l < t.y && h >= t.y) && (s <= t.x || a <= t.x) && s + (t.y - h) / (l - h) * (a - s) < t.x && (r = !r), n = o;
          }

          return r ? this : null;
        }

        return this;
      }

      return null;
    }, i.prototype.setup_beforeAdd = function (t, i) {
      if (e.prototype.setup_beforeAdd.call(this, t, i), t.seek(i, 5), this._type = t.readByte(), 0 != this._type) {
        var o, n;
        if (this._lineSize = t.readInt(), this._lineColor.set(t.readColor(!0)), this._fillColor.set(t.readColor(!0)), t.readBool()) for (this._cornerRadius = new Array(4), o = 0; o < 4; o++) {
          this._cornerRadius[o] = t.readFloat();
        }
        if (3 == this._type) for (n = t.readShort(), this._polygonPoints = [], this._polygonPoints.length = n, o = 0; o < n; o++) {
          this._polygonPoints[o] = t.readFloat();
        } else if (4 == this._type && (this._sides = t.readShort(), this._startAngle = t.readFloat(), (n = t.readShort()) > 0)) for (this._distances = [], o = 0; o < n; o++) {
          this._distances[o] = t.readFloat();
        }
        this.updateGraph();
      }
    }, i;
  }(t.GObject);

  t.GGraph = e;
}(fgui || (fgui = {})), function (t) {
  var e = function (e) {
    function i() {
      var t = e.call(this) || this;
      return t._layout = 0, t._lineGap = 0, t._columnGap = 0, t._mainGridIndex = -1, t._mainGridMinSize = 50, t._mainChildIndex = -1, t._totalSize = 0, t._numChildren = 0, t._updating = 0, t._node.name = "GGroup", t._touchDisabled = !0, t;
    }

    return __extends(i, e), i.prototype.dispose = function () {
      this._boundsChanged = !1, e.prototype.dispose.call(this);
    }, Object.defineProperty(i.prototype, "layout", {
      get: function get() {
        return this._layout;
      },
      set: function set(t) {
        this._layout != t && (this._layout = t, this.setBoundsChangedFlag());
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "lineGap", {
      get: function get() {
        return this._lineGap;
      },
      set: function set(t) {
        this._lineGap != t && (this._lineGap = t, this.setBoundsChangedFlag(!0));
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "columnGap", {
      get: function get() {
        return this._columnGap;
      },
      set: function set(t) {
        this._columnGap != t && (this._columnGap = t, this.setBoundsChangedFlag(!0));
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "excludeInvisibles", {
      get: function get() {
        return this._excludeInvisibles;
      },
      set: function set(t) {
        this._excludeInvisibles != t && (this._excludeInvisibles = t, this.setBoundsChangedFlag());
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "autoSizeDisabled", {
      get: function get() {
        return this._autoSizeDisabled;
      },
      set: function set(t) {
        this._autoSizeDisabled = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "mainGridMinSize", {
      get: function get() {
        return this._mainGridMinSize;
      },
      set: function set(t) {
        this._mainGridMinSize != t && (this._mainGridMinSize = t, this.setBoundsChangedFlag());
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "mainGridIndex", {
      get: function get() {
        return this._mainGridIndex;
      },
      set: function set(t) {
        this._mainGridIndex != t && (this._mainGridIndex = t, this.setBoundsChangedFlag());
      },
      enumerable: !1,
      configurable: !0
    }), i.prototype.setBoundsChangedFlag = function (e) {
      void 0 === e && (e = !1), 0 == this._updating && this._parent && (e || (this._percentReady = !1), this._boundsChanged || (this._boundsChanged = !0, this._layout != t.GroupLayoutType.None && this._partner.callLater(this._ensureBoundsCorrect)));
    }, i.prototype._ensureBoundsCorrect = function () {
      this.node.$gobj.ensureBoundsCorrect();
    }, i.prototype.ensureSizeCorrect = function () {
      null != this._parent && this._boundsChanged && 0 != this._layout && (this._boundsChanged = !1, this._autoSizeDisabled ? this.resizeChildren(0, 0) : (this.handleLayout(), this.updateBounds()));
    }, i.prototype.ensureBoundsCorrect = function () {
      null != this._parent && this._boundsChanged && (this._boundsChanged = !1, 0 == this._layout ? this.updateBounds() : this._autoSizeDisabled ? this.resizeChildren(0, 0) : (this.handleLayout(), this.updateBounds()));
    }, i.prototype.updateBounds = function () {
      this._partner.unschedule(this._ensureBoundsCorrect);

      var t,
          e,
          i,
          o = this._parent.numChildren,
          n = Number.POSITIVE_INFINITY,
          r = Number.POSITIVE_INFINITY,
          s = Number.NEGATIVE_INFINITY,
          h = Number.NEGATIVE_INFINITY,
          a = !0;

      for (t = 0; t < o; t++) {
        (e = this._parent.getChildAt(t)).group != this || this._excludeInvisibles && !e.internalVisible3 || ((i = e.xMin) < n && (n = i), (i = e.yMin) < r && (r = i), (i = e.xMin + e.width) > s && (s = i), (i = e.yMin + e.height) > h && (h = i), a = !1);
      }

      var l = 0,
          c = 0;
      a || (this._updating |= 1, this.setPosition(n, r), this._updating &= 2, l = s - n, c = h - r), 0 == (2 & this._updating) ? (this._updating |= 2, this.setSize(l, c), this._updating &= 1) : (this._updating &= 1, this.resizeChildren(this._width - l, this._height - c));
    }, i.prototype.handleLayout = function () {
      var e, i, o;

      if (this._updating |= 1, this._layout == t.GroupLayoutType.Horizontal) {
        var n = this.x;

        for (o = this._parent.numChildren, i = 0; i < o; i++) {
          (e = this._parent.getChildAt(i)).group == this && (this._excludeInvisibles && !e.internalVisible3 || (e.xMin = n, 0 != e.width && (n += e.width + this._columnGap)));
        }
      } else if (this._layout == t.GroupLayoutType.Vertical) {
        var r = this.y;

        for (o = this._parent.numChildren, i = 0; i < o; i++) {
          (e = this._parent.getChildAt(i)).group == this && (this._excludeInvisibles && !e.internalVisible3 || (e.yMin = r, 0 != e.height && (r += e.height + this._lineGap)));
        }
      }

      this._updating &= 2;
    }, i.prototype.moveChildren = function (t, e) {
      if (0 == (1 & this._updating) && null != this._parent) {
        this._updating |= 1;
        var i,
            o,
            n = this._parent.numChildren;

        for (i = 0; i < n; i++) {
          (o = this._parent.getChildAt(i)).group == this && o.setPosition(o.x + t, o.y + e);
        }

        this._updating &= 2;
      }
    }, i.prototype.resizeChildren = function (e, i) {
      if (this._layout != t.GroupLayoutType.None && 0 == (2 & this._updating) && null != this._parent) if (this._updating |= 2, !this._boundsChanged || (this._boundsChanged = !1, this._autoSizeDisabled)) {
        var o,
            n,
            r = this._parent.numChildren;

        if (!this._percentReady) {
          this._percentReady = !0, this._numChildren = 0, this._totalSize = 0, this._mainChildIndex = -1;
          var s = 0;

          for (o = 0; o < r; o++) {
            (n = this._parent.getChildAt(o)).group == this && (this._excludeInvisibles && !n.internalVisible3 || (s == this._mainGridIndex && (this._mainChildIndex = o), this._numChildren++, 1 == this._layout ? this._totalSize += n.width : this._totalSize += n.height), s++);
          }

          for (-1 != this._mainChildIndex && (1 == this._layout ? (n = this._parent.getChildAt(this._mainChildIndex), this._totalSize += this._mainGridMinSize - n.width, n._sizePercentInGroup = this._mainGridMinSize / this._totalSize) : (n = this._parent.getChildAt(this._mainChildIndex), this._totalSize += this._mainGridMinSize - n.height, n._sizePercentInGroup = this._mainGridMinSize / this._totalSize)), o = 0; o < r; o++) {
            (n = this._parent.getChildAt(o)).group == this && o != this._mainChildIndex && (this._totalSize > 0 ? n._sizePercentInGroup = (1 == this._layout ? n.width : n.height) / this._totalSize : n._sizePercentInGroup = 0);
          }
        }

        var h = 0,
            a = 1,
            l = !1;

        if (1 == this._layout) {
          h = this.width - (this._numChildren - 1) * this._columnGap, -1 != this._mainChildIndex && h >= this._totalSize && ((n = this._parent.getChildAt(this._mainChildIndex)).setSize(h - (this._totalSize - this._mainGridMinSize), n._rawHeight + i, !0), h -= n.width, a -= n._sizePercentInGroup, l = !0);
          var c = this.x;

          for (o = 0; o < r; o++) {
            (n = this._parent.getChildAt(o)).group == this && (!this._excludeInvisibles || n.internalVisible3 ? (l && o == this._mainChildIndex || (n.setSize(Math.round(n._sizePercentInGroup / a * h), n._rawHeight + i, !0), a -= n._sizePercentInGroup, h -= n.width), n.xMin = c, 0 != n.width && (c += n.width + this._columnGap)) : n.setSize(n._rawWidth, n._rawHeight + i, !0));
          }
        } else {
          h = this.height - (this._numChildren - 1) * this._lineGap, -1 != this._mainChildIndex && h >= this._totalSize && ((n = this._parent.getChildAt(this._mainChildIndex)).setSize(n._rawWidth + e, h - (this._totalSize - this._mainGridMinSize), !0), h -= n.height, a -= n._sizePercentInGroup, l = !0);
          var u = this.y;

          for (o = 0; o < r; o++) {
            (n = this._parent.getChildAt(o)).group == this && (!this._excludeInvisibles || n.internalVisible3 ? (l && o == this._mainChildIndex || (n.setSize(n._rawWidth + e, Math.round(n._sizePercentInGroup / a * h), !0), a -= n._sizePercentInGroup, h -= n.height), n.yMin = u, 0 != n.height && (u += n.height + this._lineGap)) : n.setSize(n._rawWidth + e, n._rawHeight, !0));
          }
        }

        this._updating &= 1;
      } else this.updateBounds();
    }, i.prototype.handleAlphaChanged = function () {
      if (!this._underConstruct) for (var t = this._parent.numChildren, e = 0; e < t; e++) {
        var i = this._parent.getChildAt(e);

        i.group == this && (i.alpha = this.alpha);
      }
    }, i.prototype.handleVisibleChanged = function () {
      if (this._parent) for (var t = this._parent.numChildren, e = 0; e < t; e++) {
        var i = this._parent.getChildAt(e);

        i.group == this && i.handleVisibleChanged();
      }
    }, i.prototype.setup_beforeAdd = function (t, i) {
      e.prototype.setup_beforeAdd.call(this, t, i), t.seek(i, 5), this._layout = t.readByte(), this._lineGap = t.readInt(), this._columnGap = t.readInt(), t.version >= 2 && (this._excludeInvisibles = t.readBool(), this._autoSizeDisabled = t.readBool(), this._mainGridIndex = t.readShort());
    }, i.prototype.setup_afterAdd = function (t, i) {
      e.prototype.setup_afterAdd.call(this, t, i), this.visible || this.handleVisibleChanged();
    }, i;
  }(t.GObject);

  t.GGroup = e;
}(fgui || (fgui = {})), function (t) {
  var e = function (e) {
    function i() {
      var i = e.call(this) || this;
      return i._node.name = "GImage", i._touchDisabled = !0, i._content = i._node.addComponent(t.Image), i._content.sizeMode = cc.Sprite.SizeMode.CUSTOM, i._content.trim = !1, i;
    }

    return __extends(i, e), Object.defineProperty(i.prototype, "color", {
      get: function get() {
        return this._node.color;
      },
      set: function set(t) {
        this._node.color = t, this.updateGear(4);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "flip", {
      get: function get() {
        return this._content.flip;
      },
      set: function set(t) {
        this._content.flip = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "fillMethod", {
      get: function get() {
        return this._content.fillMethod;
      },
      set: function set(t) {
        this._content.fillMethod = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "fillOrigin", {
      get: function get() {
        return this._content.fillOrigin;
      },
      set: function set(t) {
        this._content.fillOrigin = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "fillClockwise", {
      get: function get() {
        return this._content.fillClockwise;
      },
      set: function set(t) {
        this._content.fillClockwise = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "fillAmount", {
      get: function get() {
        return this._content.fillAmount;
      },
      set: function set(t) {
        this._content.fillAmount = t;
      },
      enumerable: !1,
      configurable: !0
    }), i.prototype.constructFromResource = function () {
      var t = this.packageItem.getBranch();
      this.sourceWidth = t.width, this.sourceHeight = t.height, this.initWidth = this.sourceWidth, this.initHeight = this.sourceHeight, this.setSize(this.sourceWidth, this.sourceHeight), (t = t.getHighResolution()).load(), t.scale9Grid ? this._content.type = cc.Sprite.Type.SLICED : t.scaleByTile && (this._content.type = cc.Sprite.Type.TILED), this._content.spriteFrame = t.asset;
    }, i.prototype.handleGrayedChanged = function () {
      this._content.grayed = this._grayed;
    }, i.prototype.getProp = function (i) {
      return i == t.ObjectPropID.Color ? this.color : e.prototype.getProp.call(this, i);
    }, i.prototype.setProp = function (i, o) {
      i == t.ObjectPropID.Color ? this.color = o : e.prototype.setProp.call(this, i, o);
    }, i.prototype.setup_beforeAdd = function (t, i) {
      e.prototype.setup_beforeAdd.call(this, t, i), t.seek(i, 5), t.readBool() && (this.color = t.readColor()), this._content.flip = t.readByte(), this._content.fillMethod = t.readByte(), 0 != this._content.fillMethod && (this._content.fillOrigin = t.readByte(), this._content.fillClockwise = t.readBool(), this._content.fillAmount = t.readFloat());
    }, i;
  }(t.GObject);

  t.GImage = e;
}(fgui || (fgui = {})), function (t) {
  var e = function (e) {
    function i() {
      var t = e.call(this) || this;
      return t._node.name = "GLabel", t;
    }

    return __extends(i, e), Object.defineProperty(i.prototype, "icon", {
      get: function get() {
        if (this._iconObject) return this._iconObject.icon;
      },
      set: function set(t) {
        this._iconObject && (this._iconObject.icon = t), this.updateGear(7);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "title", {
      get: function get() {
        return this._titleObject ? this._titleObject.text : null;
      },
      set: function set(t) {
        this._titleObject && (this._titleObject.text = t), this.updateGear(6);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "text", {
      get: function get() {
        return this.title;
      },
      set: function set(t) {
        this.title = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "titleColor", {
      get: function get() {
        var t = this.getTextField();
        return t ? t.color : cc.Color.WHITE;
      },
      set: function set(t) {
        var e = this.getTextField();
        e && (e.color = t), this.updateGear(4);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "titleFontSize", {
      get: function get() {
        var t = this.getTextField();
        return t ? t.fontSize : 0;
      },
      set: function set(t) {
        var e = this.getTextField();
        e && (e.fontSize = t);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "editable", {
      get: function get() {
        return !!(this._titleObject && this._titleObject instanceof t.GTextInput) && this._titleObject.editable;
      },
      set: function set(e) {
        this._titleObject && this._titleObject instanceof t.GTextInput && (this._titleObject.editable = e);
      },
      enumerable: !1,
      configurable: !0
    }), i.prototype.getTextField = function () {
      return this._titleObject instanceof t.GTextField ? this._titleObject : this._titleObject instanceof i || this._titleObject instanceof t.GButton ? this._titleObject.getTextField() : null;
    }, i.prototype.getProp = function (i) {
      switch (i) {
        case t.ObjectPropID.Color:
          return this.titleColor;

        case t.ObjectPropID.OutlineColor:
          var o = this.getTextField();
          return o ? o.strokeColor : 0;

        case t.ObjectPropID.FontSize:
          return this.titleFontSize;

        default:
          return e.prototype.getProp.call(this, i);
      }
    }, i.prototype.setProp = function (i, o) {
      switch (i) {
        case t.ObjectPropID.Color:
          this.titleColor = o;
          break;

        case t.ObjectPropID.OutlineColor:
          var n = this.getTextField();
          n && (n.strokeColor = o);
          break;

        case t.ObjectPropID.FontSize:
          this.titleFontSize = o;
          break;

        default:
          e.prototype.setProp.call(this, i, o);
      }
    }, i.prototype.constructExtension = function () {
      this._titleObject = this.getChild("title"), this._iconObject = this.getChild("icon");
    }, i.prototype.setup_afterAdd = function (i, o) {
      if (e.prototype.setup_afterAdd.call(this, i, o), i.seek(o, 6) && i.readByte() == this.packageItem.objectType) {
        var n;
        null != (n = i.readS()) && (this.title = n), null != (n = i.readS()) && (this.icon = n), i.readBool() && (this.titleColor = i.readColor());
        var r = i.readInt();

        if (0 != r && (this.titleFontSize = r), i.readBool()) {
          var s = this.getTextField();
          s instanceof t.GTextInput ? (null != (n = i.readS()) && (s.promptText = n), null != (n = i.readS()) && (s.restrict = n), 0 != (r = i.readInt()) && (s.maxLength = r), r = i.readInt(), i.readBool() && (s.password = !0)) : i.skip(13);
        }
      }
    }, i;
  }(t.GComponent);

  t.GLabel = e;
}(fgui || (fgui = {})), function (t) {
  var e = function (e) {
    function o() {
      var i = e.call(this) || this;
      return i.scrollItemToViewOnClick = !0, i.foldInvisibleItems = !1, i._lineCount = 0, i._columnCount = 0, i._lineGap = 0, i._columnGap = 0, i._lastSelectedIndex = 0, i._numItems = 0, i._realNumItems = 0, i._firstIndex = 0, i._curLineItemCount = 0, i._curLineItemCount2 = 0, i._virtualListChanged = 0, i.itemInfoVer = 0, i._node.name = "GList", i._trackBounds = !0, i._pool = new t.GObjectPool(), i._layout = t.ListLayoutType.SingleColumn, i._autoResizeItem = !0, i._lastSelectedIndex = -1, i._selectionMode = t.ListSelectionMode.Single, i.opaque = !0, i._align = t.AlignType.Left, i._verticalAlign = t.VertAlignType.Top, i;
    }

    return __extends(o, e), o.prototype.dispose = function () {
      this._partner.unschedule(this._refreshVirtualList), this._pool.clear(), e.prototype.dispose.call(this);
    }, Object.defineProperty(o.prototype, "layout", {
      get: function get() {
        return this._layout;
      },
      set: function set(t) {
        this._layout != t && (this._layout = t, this.setBoundsChangedFlag(), this._virtual && this.setVirtualListChangedFlag(!0));
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "lineCount", {
      get: function get() {
        return this._lineCount;
      },
      set: function set(t) {
        this._lineCount != t && (this._lineCount = t, this.setBoundsChangedFlag(), this._virtual && this.setVirtualListChangedFlag(!0));
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "columnCount", {
      get: function get() {
        return this._columnCount;
      },
      set: function set(t) {
        this._columnCount != t && (this._columnCount = t, this.setBoundsChangedFlag(), this._virtual && this.setVirtualListChangedFlag(!0));
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "lineGap", {
      get: function get() {
        return this._lineGap;
      },
      set: function set(t) {
        this._lineGap != t && (this._lineGap = t, this.setBoundsChangedFlag(), this._virtual && this.setVirtualListChangedFlag(!0));
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "columnGap", {
      get: function get() {
        return this._columnGap;
      },
      set: function set(t) {
        this._columnGap != t && (this._columnGap = t, this.setBoundsChangedFlag(), this._virtual && this.setVirtualListChangedFlag(!0));
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "align", {
      get: function get() {
        return this._align;
      },
      set: function set(t) {
        this._align != t && (this._align = t, this.setBoundsChangedFlag(), this._virtual && this.setVirtualListChangedFlag(!0));
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "verticalAlign", {
      get: function get() {
        return this._verticalAlign;
      },
      set: function set(t) {
        this._verticalAlign != t && (this._verticalAlign = t, this.setBoundsChangedFlag(), this._virtual && this.setVirtualListChangedFlag(!0));
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "virtualItemSize", {
      get: function get() {
        return this._itemSize;
      },
      set: function set(t) {
        this._virtual && (null == this._itemSize && (this._itemSize = new cc.Size(0, 0)), this._itemSize.width = t.width, this._itemSize.height = t.height, this.setVirtualListChangedFlag(!0));
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "defaultItem", {
      get: function get() {
        return this._defaultItem;
      },
      set: function set(e) {
        this._defaultItem = t.UIPackage.normalizeURL(e);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "autoResizeItem", {
      get: function get() {
        return this._autoResizeItem;
      },
      set: function set(t) {
        this._autoResizeItem != t && (this._autoResizeItem = t, this.setBoundsChangedFlag(), this._virtual && this.setVirtualListChangedFlag(!0));
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "selectionMode", {
      get: function get() {
        return this._selectionMode;
      },
      set: function set(t) {
        this._selectionMode = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "selectionController", {
      get: function get() {
        return this._selectionController;
      },
      set: function set(t) {
        this._selectionController = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "itemPool", {
      get: function get() {
        return this._pool;
      },
      enumerable: !1,
      configurable: !0
    }), o.prototype.getFromPool = function (t) {
      t || (t = this._defaultItem);

      var e = this._pool.getObject(t);

      return e && (e.visible = !0), e;
    }, o.prototype.returnToPool = function (t) {
      this._pool.returnObject(t);
    }, o.prototype.addChildAt = function (i, o) {
      return e.prototype.addChildAt.call(this, i, o), i instanceof t.GButton && (i.selected = !1, i.changeStateOnClick = !1), i.on(t.Event.CLICK, this.onClickItem, this), i;
    }, o.prototype.addItem = function (e) {
      return e || (e = this._defaultItem), this.addChild(t.UIPackage.createObjectFromURL(e));
    }, o.prototype.addItemFromPool = function (t) {
      return this.addChild(this.getFromPool(t));
    }, o.prototype.removeChildAt = function (i, o) {
      var n = e.prototype.removeChildAt.call(this, i, o);
      return o || n.off(t.Event.CLICK, this.onClickItem, this), n;
    }, o.prototype.removeChildToPoolAt = function (t) {
      var i = e.prototype.removeChildAt.call(this, t);
      this.returnToPool(i);
    }, o.prototype.removeChildToPool = function (t) {
      e.prototype.removeChild.call(this, t), this.returnToPool(t);
    }, o.prototype.removeChildrenToPool = function (t, e) {
      null == t && (t = 0), null == e && (e = -1), (e < 0 || e >= this._children.length) && (e = this._children.length - 1);

      for (var i = t; i <= e; ++i) {
        this.removeChildToPoolAt(t);
      }
    }, Object.defineProperty(o.prototype, "selectedIndex", {
      get: function get() {
        var e;
        if (this._virtual) for (e = 0; e < this._realNumItems; e++) {
          var i = this._virtualItems[e];
          if (i.obj instanceof t.GButton && i.obj.selected || !i.obj && i.selected) return this._loop ? e % this._numItems : e;
        } else {
          var o = this._children.length;

          for (e = 0; e < o; e++) {
            var n = this._children[e];
            if (n instanceof t.GButton && n.selected) return e;
          }
        }
        return -1;
      },
      set: function set(e) {
        e >= 0 && e < this.numItems ? (this._selectionMode != t.ListSelectionMode.Single && this.clearSelection(), this.addSelection(e)) : this.clearSelection();
      },
      enumerable: !1,
      configurable: !0
    }), o.prototype.getSelection = function (e) {
      var i;
      if (e || (e = new Array()), this._virtual) for (i = 0; i < this._realNumItems; i++) {
        var o = this._virtualItems[i];

        if (o.obj instanceof t.GButton && o.obj.selected || !o.obj && o.selected) {
          var n = i;
          if (this._loop && (n = i % this._numItems, -1 != e.indexOf(n))) continue;
          e.push(n);
        }
      } else {
        var r = this._children.length;

        for (i = 0; i < r; i++) {
          var s = this._children[i];
          s instanceof t.GButton && s.selected && e.push(i);
        }
      }
      return e;
    }, o.prototype.addSelection = function (e, i) {
      if (this._selectionMode != t.ListSelectionMode.None) {
        var o;

        if (this.checkVirtualList(), this._selectionMode == t.ListSelectionMode.Single && this.clearSelection(), i && this.scrollToView(e), this._lastSelectedIndex = e, this._virtual) {
          var n = this._virtualItems[e];
          n.obj && (o = n.obj), n.selected = !0;
        } else o = this.getChildAt(e);

        o instanceof t.GButton && !o.selected && (o.selected = !0, this.updateSelectionController(e));
      }
    }, o.prototype.removeSelection = function (e) {
      if (this._selectionMode != t.ListSelectionMode.None) {
        var i;

        if (this._virtual) {
          var o = this._virtualItems[e];
          o.obj && (i = o.obj), o.selected = !1;
        } else i = this.getChildAt(e);

        i instanceof t.GButton && (i.selected = !1);
      }
    }, o.prototype.clearSelection = function () {
      var e;
      if (this._virtual) for (e = 0; e < this._realNumItems; e++) {
        var i = this._virtualItems[e];
        i.obj instanceof t.GButton && (i.obj.selected = !1), i.selected = !1;
      } else {
        var o = this._children.length;

        for (e = 0; e < o; e++) {
          var n = this._children[e];
          n instanceof t.GButton && (n.selected = !1);
        }
      }
    }, o.prototype.clearSelectionExcept = function (e) {
      var i;
      if (this._virtual) for (i = 0; i < this._realNumItems; i++) {
        var o = this._virtualItems[i];
        o.obj != e && (o.obj instanceof t.GButton && (o.obj.selected = !1), o.selected = !1);
      } else {
        var n = this._children.length;

        for (i = 0; i < n; i++) {
          var r = this._children[i];
          r instanceof t.GButton && r != e && (r.selected = !1);
        }
      }
    }, o.prototype.selectAll = function () {
      this.checkVirtualList();
      var e,
          i = -1;
      if (this._virtual) for (e = 0; e < this._realNumItems; e++) {
        var o = this._virtualItems[e];
        o.obj instanceof t.GButton && !o.obj.selected && (o.obj.selected = !0, i = e), o.selected = !0;
      } else {
        var n = this._children.length;

        for (e = 0; e < n; e++) {
          var r = this._children[e];
          r instanceof t.GButton && !r.selected && (r.selected = !0, i = e);
        }
      }
      -1 != i && this.updateSelectionController(i);
    }, o.prototype.selectNone = function () {
      this.clearSelection();
    }, o.prototype.selectReverse = function () {
      this.checkVirtualList();
      var e,
          i = -1;
      if (this._virtual) for (e = 0; e < this._realNumItems; e++) {
        var o = this._virtualItems[e];
        o.obj instanceof t.GButton && (o.obj.selected = !o.obj.selected, o.obj.selected && (i = e)), o.selected = !o.selected;
      } else {
        var n = this._children.length;

        for (e = 0; e < n; e++) {
          var r = this._children[e];
          r instanceof t.GButton && (r.selected = !r.selected, r.selected && (i = e));
        }
      }
      -1 != i && this.updateSelectionController(i);
    }, o.prototype.handleArrowKey = function (e) {
      var i = this.selectedIndex;
      if (-1 != i) switch (e) {
        case 1:
          if (this._layout == t.ListLayoutType.SingleColumn || this._layout == t.ListLayoutType.FlowVertical) --i >= 0 && (this.clearSelection(), this.addSelection(i, !0));else if (this._layout == t.ListLayoutType.FlowHorizontal || this._layout == t.ListLayoutType.Pagination) {
            for (var o = this._children[i], n = 0, r = i - 1; r >= 0; r--) {
              var s = this._children[r];

              if (s.y != o.y) {
                o = s;
                break;
              }

              n++;
            }

            for (; r >= 0; r--) {
              if ((s = this._children[r]).y != o.y) {
                this.clearSelection(), this.addSelection(r + n + 1, !0);
                break;
              }
            }
          }
          break;

        case 3:
          if (this._layout == t.ListLayoutType.SingleRow || this._layout == t.ListLayoutType.FlowHorizontal || this._layout == t.ListLayoutType.Pagination) ++i < this._children.length && (this.clearSelection(), this.addSelection(i, !0));else if (this._layout == t.ListLayoutType.FlowVertical) {
            o = this._children[i], n = 0;
            var h = this._children.length;

            for (r = i + 1; r < h; r++) {
              if ((s = this._children[r]).x != o.x) {
                o = s;
                break;
              }

              n++;
            }

            for (; r < h; r++) {
              if ((s = this._children[r]).x != o.x) {
                this.clearSelection(), this.addSelection(r - n - 1, !0);
                break;
              }
            }
          }
          break;

        case 5:
          if (this._layout == t.ListLayoutType.SingleColumn || this._layout == t.ListLayoutType.FlowVertical) ++i < this._children.length && (this.clearSelection(), this.addSelection(i, !0));else if (this._layout == t.ListLayoutType.FlowHorizontal || this._layout == t.ListLayoutType.Pagination) {
            for (o = this._children[i], n = 0, h = this._children.length, r = i + 1; r < h; r++) {
              if ((s = this._children[r]).y != o.y) {
                o = s;
                break;
              }

              n++;
            }

            for (; r < h; r++) {
              if ((s = this._children[r]).y != o.y) {
                this.clearSelection(), this.addSelection(r - n - 1, !0);
                break;
              }
            }
          }
          break;

        case 7:
          if (this._layout == t.ListLayoutType.SingleRow || this._layout == t.ListLayoutType.FlowHorizontal || this._layout == t.ListLayoutType.Pagination) --i >= 0 && (this.clearSelection(), this.addSelection(i, !0));else if (this._layout == t.ListLayoutType.FlowVertical) {
            for (o = this._children[i], n = 0, r = i - 1; r >= 0; r--) {
              if ((s = this._children[r]).x != o.x) {
                o = s;
                break;
              }

              n++;
            }

            for (; r >= 0; r--) {
              if ((s = this._children[r]).x != o.x) {
                this.clearSelection(), this.addSelection(r + n + 1, !0);
                break;
              }
            }
          }
      }
    }, o.prototype.onClickItem = function (e) {
      if (!this._scrollPane || !this._scrollPane.isDragged) {
        var i = t.GObject.cast(e.currentTarget);
        this.setSelectionOnEvent(i, e), this._scrollPane && this.scrollItemToViewOnClick && this._scrollPane.scrollToView(i, !0), this.dispatchItemEvent(i, e);
      }
    }, o.prototype.dispatchItemEvent = function (e, i) {
      this._node.emit(t.Event.CLICK_ITEM, e, i);
    }, o.prototype.setSelectionOnEvent = function (e, i) {
      if (e instanceof t.GButton && this._selectionMode != t.ListSelectionMode.None) {
        var o = !1,
            n = this.childIndexToItemIndex(this.getChildIndex(e));
        if (this._selectionMode == t.ListSelectionMode.Single) e.selected || (this.clearSelectionExcept(e), e.selected = !0);else if (i.isShiftDown) {
          if (!e.selected) if (-1 != this._lastSelectedIndex) {
            var r,
                s = Math.min(this._lastSelectedIndex, n),
                h = Math.max(this._lastSelectedIndex, n);
            if (h = Math.min(h, this.numItems - 1), this._virtual) for (r = s; r <= h; r++) {
              var a = this._virtualItems[r];
              a.obj instanceof t.GButton && (a.obj.selected = !0), a.selected = !0;
            } else for (r = s; r <= h; r++) {
              var l = this.getChildAt(r);
              l instanceof t.GButton && (l.selected = !0);
            }
            o = !0;
          } else e.selected = !0;
        } else i.isCtrlDown || this._selectionMode == t.ListSelectionMode.Multiple_SingleClick ? e.selected = !e.selected : e.selected ? this.clearSelectionExcept(e) : (this.clearSelectionExcept(e), e.selected = !0);
        o || (this._lastSelectedIndex = n), e.selected && this.updateSelectionController(n);
      }
    }, o.prototype.resizeToFit = function (e, i) {
      void 0 === e && (e = Number.POSITIVE_INFINITY), void 0 === i && (i = 0), this.ensureBoundsCorrect();
      var o = this.numItems;

      if (e > o && (e = o), this._virtual) {
        var n = Math.ceil(e / this._curLineItemCount);
        this._layout == t.ListLayoutType.SingleColumn || this._layout == t.ListLayoutType.FlowHorizontal ? this.viewHeight = n * this._itemSize.height + Math.max(0, n - 1) * this._lineGap : this.viewWidth = n * this._itemSize.width + Math.max(0, n - 1) * this._columnGap;
      } else if (0 == e) this._layout == t.ListLayoutType.SingleColumn || this._layout == t.ListLayoutType.FlowHorizontal ? this.viewHeight = i : this.viewWidth = i;else {
        for (var r = e - 1, s = null; r >= 0 && (s = this.getChildAt(r), this.foldInvisibleItems && !s.visible);) {
          r--;
        }

        if (r < 0) this._layout == t.ListLayoutType.SingleColumn || this._layout == t.ListLayoutType.FlowHorizontal ? this.viewHeight = i : this.viewWidth = i;else {
          var h = 0;
          this._layout == t.ListLayoutType.SingleColumn || this._layout == t.ListLayoutType.FlowHorizontal ? ((h = s.y + s.height) < i && (h = i), this.viewHeight = h) : ((h = s.x + s.width) < i && (h = i), this.viewWidth = h);
        }
      }
    }, o.prototype.getMaxItemWidth = function () {
      for (var t = this._children.length, e = 0, i = 0; i < t; i++) {
        var o = this.getChildAt(i);
        o.width > e && (e = o.width);
      }

      return e;
    }, o.prototype.handleSizeChanged = function () {
      e.prototype.handleSizeChanged.call(this), this.setBoundsChangedFlag(), this._virtual && this.setVirtualListChangedFlag(!0);
    }, o.prototype.handleControllerChanged = function (t) {
      e.prototype.handleControllerChanged.call(this, t), this._selectionController == t && (this.selectedIndex = t.selectedIndex);
    }, o.prototype.updateSelectionController = function (t) {
      if (this._selectionController && !this._selectionController.changing && t < this._selectionController.pageCount) {
        var e = this._selectionController;
        this._selectionController = null, e.selectedIndex = t, this._selectionController = e;
      }
    }, o.prototype.getSnappingPosition = function (o, n, r) {
      var s, h;
      return this._virtual ? (r = r || new cc.Vec2(), this._layout == t.ListLayoutType.SingleColumn || this._layout == t.ListLayoutType.FlowHorizontal ? (s = n, i = n, h = this.getIndexOnPos1(!1), n = i, h < this._virtualItems.length && s - n > this._virtualItems[h].height / 2 && h < this._realNumItems && (n += this._virtualItems[h].height + this._lineGap)) : this._layout == t.ListLayoutType.SingleRow || this._layout == t.ListLayoutType.FlowVertical ? (s = o, i = o, h = this.getIndexOnPos2(!1), o = i, h < this._virtualItems.length && s - o > this._virtualItems[h].width / 2 && h < this._realNumItems && (o += this._virtualItems[h].width + this._columnGap)) : (s = o, i = o, h = this.getIndexOnPos3(!1), o = i, h < this._virtualItems.length && s - o > this._virtualItems[h].width / 2 && h < this._realNumItems && (o += this._virtualItems[h].width + this._columnGap)), r.x = o, r.y = n, r) : e.prototype.getSnappingPosition.call(this, o, n, r);
    }, o.prototype.scrollToView = function (e, i, o) {
      if (this._virtual) {
        if (0 == this._numItems) return;
        if (this.checkVirtualList(), e >= this._virtualItems.length) throw "Invalid child index: " + e + ">" + this._virtualItems.length;
        var n;
        this._loop && (e = Math.floor(this._firstIndex / this._numItems) * this._numItems + e);
        var r,
            s = this._virtualItems[e],
            h = 0;

        if (this._layout == t.ListLayoutType.SingleColumn || this._layout == t.ListLayoutType.FlowHorizontal) {
          for (r = this._curLineItemCount - 1; r < e; r += this._curLineItemCount) {
            h += this._virtualItems[r].height + this._lineGap;
          }

          n = new cc.Rect(0, h, this._itemSize.width, s.height);
        } else if (this._layout == t.ListLayoutType.SingleRow || this._layout == t.ListLayoutType.FlowVertical) {
          for (r = this._curLineItemCount - 1; r < e; r += this._curLineItemCount) {
            h += this._virtualItems[r].width + this._columnGap;
          }

          n = new cc.Rect(h, 0, s.width, this._itemSize.height);
        } else {
          var a = e / (this._curLineItemCount * this._curLineItemCount2);
          n = new cc.Rect(a * this.viewWidth + e % this._curLineItemCount * (s.width + this._columnGap), e / this._curLineItemCount % this._curLineItemCount2 * (s.height + this._lineGap), s.width, s.height);
        }

        this._scrollPane && this._scrollPane.scrollToView(n, i, o);
      } else {
        var l = this.getChildAt(e);
        l && (this._scrollPane ? this._scrollPane.scrollToView(l, i, o) : this.parent && this.parent.scrollPane && this.parent.scrollPane.scrollToView(l, i, o));
      }
    }, o.prototype.getFirstChildInView = function () {
      return this.childIndexToItemIndex(e.prototype.getFirstChildInView.call(this));
    }, o.prototype.childIndexToItemIndex = function (e) {
      if (!this._virtual) return e;

      if (this._layout == t.ListLayoutType.Pagination) {
        for (var i = this._firstIndex; i < this._realNumItems; i++) {
          if (this._virtualItems[i].obj && --e < 0) return i;
        }

        return e;
      }

      return e += this._firstIndex, this._loop && this._numItems > 0 && (e %= this._numItems), e;
    }, o.prototype.itemIndexToChildIndex = function (e) {
      if (!this._virtual) return e;
      if (this._layout == t.ListLayoutType.Pagination) return this.getChildIndex(this._virtualItems[e].obj);

      if (this._loop && this._numItems > 0) {
        var i = this._firstIndex % this._numItems;
        e >= i ? e -= i : e = this._numItems - i + e;
      } else e -= this._firstIndex;

      return e;
    }, o.prototype.setVirtual = function () {
      this._setVirtual(!1);
    }, o.prototype.setVirtualAndLoop = function () {
      this._setVirtual(!0);
    }, o.prototype._setVirtual = function (e) {
      if (!this._virtual) {
        if (!this._scrollPane) throw "Virtual list must be scrollable!";

        if (e) {
          if (this._layout == t.ListLayoutType.FlowHorizontal || this._layout == t.ListLayoutType.FlowVertical) throw "Loop list is not supported for FlowHorizontal or FlowVertical layout!";
          this._scrollPane.bouncebackEffect = !1;
        }

        if (this._virtual = !0, this._loop = e, this._virtualItems = new Array(), this.removeChildrenToPool(), null == this._itemSize) {
          this._itemSize = new cc.Size(0, 0);
          var i = this.getFromPool(null);
          if (!i) throw "Virtual List must have a default list item resource.";
          this._itemSize.width = i.width, this._itemSize.height = i.height, this.returnToPool(i);
        }

        this._layout == t.ListLayoutType.SingleColumn || this._layout == t.ListLayoutType.FlowHorizontal ? (this._scrollPane.scrollStep = this._itemSize.height, this._loop && (this._scrollPane._loop = 2)) : (this._scrollPane.scrollStep = this._itemSize.width, this._loop && (this._scrollPane._loop = 1)), this._node.on(t.Event.SCROLL, this.__scrolled, this), this.setVirtualListChangedFlag(!0);
      }
    }, Object.defineProperty(o.prototype, "numItems", {
      get: function get() {
        return this._virtual ? this._numItems : this._children.length;
      },
      set: function set(t) {
        if (this._virtual) {
          if (null == this.itemRenderer) throw "Set itemRenderer first!";
          this._numItems = t, this._loop ? this._realNumItems = 6 * this._numItems : this._realNumItems = this._numItems;
          var e = this._virtualItems.length;
          if (this._realNumItems > e) for (n = e; n < this._realNumItems; n++) {
            var i = {
              width: this._itemSize.width,
              height: this._itemSize.height,
              updateFlag: 0
            };

            this._virtualItems.push(i);
          } else for (n = this._realNumItems; n < e; n++) {
            this._virtualItems[n].selected = !1;
          }
          0 != this._virtualListChanged && this._partner.unschedule(this._refreshVirtualList), this._refreshVirtualList();
        } else {
          var o = this._children.length;
          if (t > o) for (var n = o; n < t; n++) {
            null == this.itemProvider ? this.addItemFromPool() : this.addItemFromPool(this.itemProvider(n));
          } else this.removeChildrenToPool(t, o);
          if (null != this.itemRenderer) for (n = 0; n < t; n++) {
            this.itemRenderer(n, this.getChildAt(n));
          }
        }
      },
      enumerable: !1,
      configurable: !0
    }), o.prototype.refreshVirtualList = function () {
      this.setVirtualListChangedFlag(!1);
    }, o.prototype.checkVirtualList = function () {
      0 != this._virtualListChanged && (this._refreshVirtualList(), this._partner.unschedule(this._refreshVirtualList));
    }, o.prototype.setVirtualListChangedFlag = function (t) {
      t ? this._virtualListChanged = 2 : 0 == this._virtualListChanged && (this._virtualListChanged = 1), this._partner.callLater(this._refreshVirtualList);
    }, o.prototype._refreshVirtualList = function (e) {
      if (isNaN(e)) {
        var i = 2 == this._virtualListChanged;
        this._virtualListChanged = 0, this._eventLocked = !0, i && (this._layout == t.ListLayoutType.SingleColumn || this._layout == t.ListLayoutType.SingleRow ? this._curLineItemCount = 1 : this._layout == t.ListLayoutType.FlowHorizontal ? this._columnCount > 0 ? this._curLineItemCount = this._columnCount : (this._curLineItemCount = Math.floor((this._scrollPane.viewWidth + this._columnGap) / (this._itemSize.width + this._columnGap)), this._curLineItemCount <= 0 && (this._curLineItemCount = 1)) : this._layout == t.ListLayoutType.FlowVertical ? this._lineCount > 0 ? this._curLineItemCount = this._lineCount : (this._curLineItemCount = Math.floor((this._scrollPane.viewHeight + this._lineGap) / (this._itemSize.height + this._lineGap)), this._curLineItemCount <= 0 && (this._curLineItemCount = 1)) : (this._columnCount > 0 ? this._curLineItemCount = this._columnCount : (this._curLineItemCount = Math.floor((this._scrollPane.viewWidth + this._columnGap) / (this._itemSize.width + this._columnGap)), this._curLineItemCount <= 0 && (this._curLineItemCount = 1)), this._lineCount > 0 ? this._curLineItemCount2 = this._lineCount : (this._curLineItemCount2 = Math.floor((this._scrollPane.viewHeight + this._lineGap) / (this._itemSize.height + this._lineGap)), this._curLineItemCount2 <= 0 && (this._curLineItemCount2 = 1))));
        var o = 0,
            n = 0;

        if (this._realNumItems > 0) {
          var r,
              s = Math.ceil(this._realNumItems / this._curLineItemCount) * this._curLineItemCount,
              h = Math.min(this._curLineItemCount, this._realNumItems);

          if (this._layout == t.ListLayoutType.SingleColumn || this._layout == t.ListLayoutType.FlowHorizontal) {
            for (r = 0; r < s; r += this._curLineItemCount) {
              o += this._virtualItems[r].height + this._lineGap;
            }

            if (o > 0 && (o -= this._lineGap), this._autoResizeItem) n = this._scrollPane.viewWidth;else {
              for (r = 0; r < h; r++) {
                n += this._virtualItems[r].width + this._columnGap;
              }

              n > 0 && (n -= this._columnGap);
            }
          } else if (this._layout == t.ListLayoutType.SingleRow || this._layout == t.ListLayoutType.FlowVertical) {
            for (r = 0; r < s; r += this._curLineItemCount) {
              n += this._virtualItems[r].width + this._columnGap;
            }

            if (n > 0 && (n -= this._columnGap), this._autoResizeItem) o = this._scrollPane.viewHeight;else {
              for (r = 0; r < h; r++) {
                o += this._virtualItems[r].height + this._lineGap;
              }

              o > 0 && (o -= this._lineGap);
            }
          } else n = Math.ceil(s / (this._curLineItemCount * this._curLineItemCount2)) * this.viewWidth, o = this.viewHeight;
        }

        this.handleAlign(n, o), this._scrollPane.setContentSize(n, o), this._eventLocked = !1, this.handleScroll(!0);
      } else this.node.$gobj._refreshVirtualList();
    }, o.prototype.__scrolled = function () {
      this.handleScroll(!1);
    }, o.prototype.getIndexOnPos1 = function (t) {
      if (this._realNumItems < this._curLineItemCount) return i = 0, 0;
      var e, o, n;

      if (this.numChildren > 0 && !t) {
        if ((o = this.getChildAt(0).y) > i) {
          for (e = this._firstIndex - this._curLineItemCount; e >= 0; e -= this._curLineItemCount) {
            if ((o -= this._virtualItems[e].height + this._lineGap) <= i) return i = o, e;
          }

          return i = 0, 0;
        }

        for (e = this._firstIndex; e < this._realNumItems; e += this._curLineItemCount) {
          if ((n = o + this._virtualItems[e].height + this._lineGap) > i) return i = o, e;
          o = n;
        }

        return i = o, this._realNumItems - this._curLineItemCount;
      }

      for (o = 0, e = 0; e < this._realNumItems; e += this._curLineItemCount) {
        if ((n = o + this._virtualItems[e].height + this._lineGap) > i) return i = o, e;
        o = n;
      }

      return i = o, this._realNumItems - this._curLineItemCount;
    }, o.prototype.getIndexOnPos2 = function (t) {
      if (this._realNumItems < this._curLineItemCount) return i = 0, 0;
      var e, o, n;

      if (this.numChildren > 0 && !t) {
        if ((o = this.getChildAt(0).x) > i) {
          for (e = this._firstIndex - this._curLineItemCount; e >= 0; e -= this._curLineItemCount) {
            if ((o -= this._virtualItems[e].width + this._columnGap) <= i) return i = o, e;
          }

          return i = 0, 0;
        }

        for (e = this._firstIndex; e < this._realNumItems; e += this._curLineItemCount) {
          if ((n = o + this._virtualItems[e].width + this._columnGap) > i) return i = o, e;
          o = n;
        }

        return i = o, this._realNumItems - this._curLineItemCount;
      }

      for (o = 0, e = 0; e < this._realNumItems; e += this._curLineItemCount) {
        if ((n = o + this._virtualItems[e].width + this._columnGap) > i) return i = o, e;
        o = n;
      }

      return i = o, this._realNumItems - this._curLineItemCount;
    }, o.prototype.getIndexOnPos3 = function () {
      if (this._realNumItems < this._curLineItemCount) return i = 0, 0;
      var t,
          e,
          o = this.viewWidth,
          n = Math.floor(i / o),
          r = n * this._curLineItemCount * this._curLineItemCount2,
          s = n * o;

      for (t = 0; t < this._curLineItemCount; t++) {
        if ((e = s + this._virtualItems[r + t].width + this._columnGap) > i) return i = s, r + t;
        s = e;
      }

      return i = s, r + this._curLineItemCount - 1;
    }, o.prototype.handleScroll = function (e) {
      if (!this._eventLocked) {
        if (this._layout == t.ListLayoutType.SingleColumn || this._layout == t.ListLayoutType.FlowHorizontal) {
          for (var i = 0; this.handleScroll1(e);) {
            if (e = !1, ++i > 20) {
              console.log("FairyGUI: list will never be filled as the item renderer function always returns a different size.");
              break;
            }
          }

          this.handleArchOrder1();
        } else if (this._layout == t.ListLayoutType.SingleRow || this._layout == t.ListLayoutType.FlowVertical) {
          for (i = 0; this.handleScroll2(e);) {
            if (e = !1, ++i > 20) {
              console.log("FairyGUI: list will never be filled as the item renderer function always returns a different size.");
              break;
            }
          }

          this.handleArchOrder2();
        } else this.handleScroll3(e);

        this._boundsChanged = !1;
      }
    }, o.prototype.handleScroll1 = function (e) {
      var o = this._scrollPane.scrollingPosY,
          n = o + this._scrollPane.viewHeight,
          r = n == this._scrollPane.contentHeight;
      i = o;
      var s = this.getIndexOnPos1(e);
      if (o = i, s == this._firstIndex && !e) return !1;
      var h = this._firstIndex;
      this._firstIndex = s;

      var a,
          l,
          c,
          u,
          _,
          p = s,
          d = h > s,
          f = this.numChildren,
          g = h + f - 1,
          y = d ? g : h,
          m = 0,
          b = o,
          v = 0,
          C = 0,
          w = this._defaultItem,
          S = (this._scrollPane.viewWidth - this._columnGap * (this._curLineItemCount - 1)) / this._curLineItemCount;

      for (this.itemInfoVer++; p < this._realNumItems && (r || b < n);) {
        if ((l = this._virtualItems[p]).obj && !e || (null != this.itemProvider && (null == (w = this.itemProvider(p % this._numItems)) && (w = this._defaultItem), w = t.UIPackage.normalizeURL(w)), l.obj && l.obj.resourceURL != w && (l.obj instanceof t.GButton && (l.selected = l.obj.selected), this.removeChildToPool(l.obj), l.obj = null)), l.obj) a = e;else {
          if (d) {
            for (_ = y; _ >= h; _--) {
              if ((c = this._virtualItems[_]).obj && c.updateFlag != this.itemInfoVer && c.obj.resourceURL == w) {
                c.obj instanceof t.GButton && (c.selected = c.obj.selected), l.obj = c.obj, c.obj = null, _ == y && y--;
                break;
              }
            }
          } else for (_ = y; _ <= g; _++) {
            if ((c = this._virtualItems[_]).obj && c.updateFlag != this.itemInfoVer && c.obj.resourceURL == w) {
              c.obj instanceof t.GButton && (c.selected = c.obj.selected), l.obj = c.obj, c.obj = null, _ == y && y++;
              break;
            }
          }

          l.obj ? this.setChildIndex(l.obj, d ? p - s : this.numChildren) : (l.obj = this._pool.getObject(w), d ? this.addChildAt(l.obj, p - s) : this.addChild(l.obj)), l.obj instanceof t.GButton && (l.obj.selected = l.selected), a = !0;
        }
        a && (this._autoResizeItem && (this._layout == t.ListLayoutType.SingleColumn || this._columnCount > 0) && l.obj.setSize(S, l.obj.height, !0), this.itemRenderer(p % this._numItems, l.obj), p % this._curLineItemCount == 0 && (v += Math.ceil(l.obj.height) - l.height, p == s && h > s && (C = Math.ceil(l.obj.height) - l.height)), l.width = Math.ceil(l.obj.width), l.height = Math.ceil(l.obj.height)), l.updateFlag = this.itemInfoVer, l.obj.setPosition(m, b), p == s && (n += l.height), m += l.width + this._columnGap, p % this._curLineItemCount == this._curLineItemCount - 1 && (m = 0, b += l.height + this._lineGap), p++;
      }

      for (u = 0; u < f; u++) {
        (l = this._virtualItems[h + u]).updateFlag != this.itemInfoVer && l.obj && (l.obj instanceof t.GButton && (l.selected = l.obj.selected), this.removeChildToPool(l.obj), l.obj = null);
      }

      for (f = this._children.length, u = 0; u < f; u++) {
        var x = this._virtualItems[s + u].obj;
        this._children[u] != x && this.setChildIndex(x, u);
      }

      return 0 == v && 0 == C || this._scrollPane.changeContentSizeOnScrolling(0, v, 0, C), p > 0 && this.numChildren > 0 && this._container.y <= 0 && this.getChildAt(0).y > -this._container.y;
    }, o.prototype.handleScroll2 = function (e) {
      var o = this._scrollPane.scrollingPosX,
          n = o + this._scrollPane.viewWidth,
          r = o == this._scrollPane.contentWidth;
      i = o;
      var s = this.getIndexOnPos2(e);
      if (o = i, s == this._firstIndex && !e) return !1;
      var h = this._firstIndex;
      this._firstIndex = s;

      var a,
          l,
          c,
          u,
          _,
          p = s,
          d = h > s,
          f = this.numChildren,
          g = h + f - 1,
          y = d ? g : h,
          m = o,
          b = 0,
          v = 0,
          C = 0,
          w = this._defaultItem,
          S = (this._scrollPane.viewHeight - this._lineGap * (this._curLineItemCount - 1)) / this._curLineItemCount;

      for (this.itemInfoVer++; p < this._realNumItems && (r || m < n);) {
        if ((l = this._virtualItems[p]).obj && !e || (null != this.itemProvider && (null == (w = this.itemProvider(p % this._numItems)) && (w = this._defaultItem), w = t.UIPackage.normalizeURL(w)), l.obj && l.obj.resourceURL != w && (l.obj instanceof t.GButton && (l.selected = l.obj.selected), this.removeChildToPool(l.obj), l.obj = null)), l.obj) a = e;else {
          if (d) {
            for (_ = y; _ >= h; _--) {
              if ((c = this._virtualItems[_]).obj && c.updateFlag != this.itemInfoVer && c.obj.resourceURL == w) {
                c.obj instanceof t.GButton && (c.selected = c.obj.selected), l.obj = c.obj, c.obj = null, _ == y && y--;
                break;
              }
            }
          } else for (_ = y; _ <= g; _++) {
            if ((c = this._virtualItems[_]).obj && c.updateFlag != this.itemInfoVer && c.obj.resourceURL == w) {
              c.obj instanceof t.GButton && (c.selected = c.obj.selected), l.obj = c.obj, c.obj = null, _ == y && y++;
              break;
            }
          }

          l.obj ? this.setChildIndex(l.obj, d ? p - s : this.numChildren) : (l.obj = this._pool.getObject(w), d ? this.addChildAt(l.obj, p - s) : this.addChild(l.obj)), l.obj instanceof t.GButton && (l.obj.selected = l.selected), a = !0;
        }
        a && (this._autoResizeItem && (this._layout == t.ListLayoutType.SingleRow || this._lineCount > 0) && l.obj.setSize(l.obj.width, S, !0), this.itemRenderer(p % this._numItems, l.obj), p % this._curLineItemCount == 0 && (v += Math.ceil(l.obj.width) - l.width, p == s && h > s && (C = Math.ceil(l.obj.width) - l.width)), l.width = Math.ceil(l.obj.width), l.height = Math.ceil(l.obj.height)), l.updateFlag = this.itemInfoVer, l.obj.setPosition(m, b), p == s && (n += l.width), b += l.height + this._lineGap, p % this._curLineItemCount == this._curLineItemCount - 1 && (b = 0, m += l.width + this._columnGap), p++;
      }

      for (u = 0; u < f; u++) {
        (l = this._virtualItems[h + u]).updateFlag != this.itemInfoVer && l.obj && (l.obj instanceof t.GButton && (l.selected = l.obj.selected), this.removeChildToPool(l.obj), l.obj = null);
      }

      for (f = this._children.length, u = 0; u < f; u++) {
        var x = this._virtualItems[s + u].obj;
        this._children[u] != x && this.setChildIndex(x, u);
      }

      return 0 == v && 0 == C || this._scrollPane.changeContentSizeOnScrolling(v, 0, C, 0), p > 0 && this.numChildren > 0 && this._container.x <= 0 && this.getChildAt(0).x > -this._container.x;
    }, o.prototype.handleScroll3 = function (e) {
      var o = this._scrollPane.scrollingPosX;
      i = o;
      var n = this.getIndexOnPos3(e);

      if (o = i, n != this._firstIndex || e) {
        var r = this._firstIndex;
        this._firstIndex = n;
        var s,
            h,
            a,
            l,
            c,
            u = r,
            _ = this._virtualItems.length,
            p = this._curLineItemCount * this._curLineItemCount2,
            d = n % this._curLineItemCount,
            f = this.viewWidth,
            g = Math.floor(n / p) * p,
            y = g + 2 * p,
            m = this._defaultItem,
            b = (this._scrollPane.viewWidth - this._columnGap * (this._curLineItemCount - 1)) / this._curLineItemCount,
            v = (this._scrollPane.viewHeight - this._lineGap * (this._curLineItemCount2 - 1)) / this._curLineItemCount2;

        for (this.itemInfoVer++, h = g; h < y; h++) {
          if (!(h >= this._realNumItems)) {
            if (c = h % this._curLineItemCount, h - g < p) {
              if (c < d) continue;
            } else if (c > d) continue;

            (a = this._virtualItems[h]).updateFlag = this.itemInfoVer;
          }
        }

        var C = null,
            w = 0;

        for (h = g; h < y; h++) {
          if (!(h >= this._realNumItems) && (a = this._virtualItems[h]).updateFlag == this.itemInfoVer) {
            if (a.obj) s = e, w = -1, C = a.obj;else {
              for (; u < _;) {
                if ((l = this._virtualItems[u]).obj && l.updateFlag != this.itemInfoVer) {
                  l.obj instanceof t.GButton && (l.selected = l.obj.selected), a.obj = l.obj, l.obj = null;
                  break;
                }

                u++;
              }

              -1 == w && (w = this.getChildIndex(C) + 1), a.obj ? w = this.setChildIndexBefore(a.obj, w) : (null != this.itemProvider && (null == (m = this.itemProvider(h % this._numItems)) && (m = this._defaultItem), m = t.UIPackage.normalizeURL(m)), a.obj = this._pool.getObject(m), this.addChildAt(a.obj, w)), w++, a.obj instanceof t.GButton && (a.obj.selected = a.selected), s = !0;
            }
            s && (this._autoResizeItem && (this._curLineItemCount == this._columnCount && this._curLineItemCount2 == this._lineCount ? a.obj.setSize(b, v, !0) : this._curLineItemCount == this._columnCount ? a.obj.setSize(b, a.obj.height, !0) : this._curLineItemCount2 == this._lineCount && a.obj.setSize(a.obj.width, v, !0)), this.itemRenderer(h % this._numItems, a.obj), a.width = Math.ceil(a.obj.width), a.height = Math.ceil(a.obj.height));
          }
        }

        var S = g / p * f,
            x = S,
            P = 0,
            I = 0;

        for (h = g; h < y; h++) {
          h >= this._realNumItems || ((a = this._virtualItems[h]).updateFlag == this.itemInfoVer && a.obj.setPosition(x, P), a.height > I && (I = a.height), h % this._curLineItemCount == this._curLineItemCount - 1 ? (x = S, P += I + this._lineGap, I = 0, h == g + p - 1 && (x = S += f, P = 0)) : x += a.width + this._columnGap);
        }

        for (h = u; h < _; h++) {
          (a = this._virtualItems[h]).updateFlag != this.itemInfoVer && a.obj && (a.obj instanceof t.GButton && (a.selected = a.obj.selected), this.removeChildToPool(a.obj), a.obj = null);
        }
      }
    }, o.prototype.handleArchOrder1 = function () {
      if (this._childrenRenderOrder == t.ChildrenRenderOrder.Arch) {
        for (var e = this._scrollPane.posY + this.viewHeight / 2, i = Number.POSITIVE_INFINITY, o = 0, n = 0, r = this.numChildren, s = 0; s < r; s++) {
          var h = this.getChildAt(s);
          this.foldInvisibleItems && !h.visible || (o = Math.abs(e - h.y - h.height / 2)) < i && (i = o, n = s);
        }

        this.apexIndex = n;
      }
    }, o.prototype.handleArchOrder2 = function () {
      if (this._childrenRenderOrder == t.ChildrenRenderOrder.Arch) {
        for (var e = this._scrollPane.posX + this.viewWidth / 2, i = Number.POSITIVE_INFINITY, o = 0, n = 0, r = this.numChildren, s = 0; s < r; s++) {
          var h = this.getChildAt(s);
          this.foldInvisibleItems && !h.visible || (o = Math.abs(e - h.x - h.width / 2)) < i && (i = o, n = s);
        }

        this.apexIndex = n;
      }
    }, o.prototype.handleAlign = function (e, i) {
      var o = 0,
          n = 0;
      i < this.viewHeight && (this._verticalAlign == t.VertAlignType.Middle ? n = Math.floor((this.viewHeight - i) / 2) : this._verticalAlign == t.VertAlignType.Bottom && (n = this.viewHeight - i)), e < this.viewWidth && (this._align == t.AlignType.Center ? o = Math.floor((this.viewWidth - e) / 2) : this._align == t.AlignType.Right && (o = this.viewWidth - e)), o == this._alignOffset.x && n == this._alignOffset.y || (this._alignOffset.x = o, this._alignOffset.y = n, this._scrollPane ? this._scrollPane.adjustMaskContainer() : this._container.setPosition(this._pivotCorrectX + this._alignOffset.x, this._pivotCorrectY - this._alignOffset.y));
    }, o.prototype.updateBounds = function () {
      if (!this._virtual) {
        var e,
            i,
            o = 0,
            n = 0,
            r = 0,
            s = 0,
            h = 0,
            a = 0,
            l = 0,
            c = 0,
            u = 0,
            _ = this._children.length,
            p = this.viewWidth,
            d = this.viewHeight,
            f = 0,
            g = 0,
            y = 0;

        if (this._layout == t.ListLayoutType.SingleColumn) {
          for (e = 0; e < _; e++) {
            i = this.getChildAt(e), this.foldInvisibleItems && !i.visible || (0 != n && (n += this._lineGap), i.y = n, this._autoResizeItem && i.setSize(p, i.height, !0), n += Math.ceil(i.height), i.width > r && (r = i.width));
          }

          if ((a = n) <= d && this._autoResizeItem && this._scrollPane && this._scrollPane._displayInDemand && this._scrollPane.vtScrollBar) for (p += this._scrollPane.vtScrollBar.width, e = 0; e < _; e++) {
            i = this.getChildAt(e), this.foldInvisibleItems && !i.visible || (i.setSize(p, i.height, !0), i.width > r && (r = i.width));
          }
          h = Math.ceil(r);
        } else if (this._layout == t.ListLayoutType.SingleRow) {
          for (e = 0; e < _; e++) {
            i = this.getChildAt(e), this.foldInvisibleItems && !i.visible || (0 != o && (o += this._columnGap), i.x = o, this._autoResizeItem && i.setSize(i.width, d, !0), o += Math.ceil(i.width), i.height > s && (s = i.height));
          }

          if ((h = o) <= p && this._autoResizeItem && this._scrollPane && this._scrollPane._displayInDemand && this._scrollPane.hzScrollBar) for (d += this._scrollPane.hzScrollBar.height, e = 0; e < _; e++) {
            i = this.getChildAt(e), this.foldInvisibleItems && !i.visible || (i.setSize(i.width, d, !0), i.height > s && (s = i.height));
          }
          a = Math.ceil(s);
        } else if (this._layout == t.ListLayoutType.FlowHorizontal) {
          if (this._autoResizeItem && this._columnCount > 0) {
            for (e = 0; e < _; e++) {
              if (i = this.getChildAt(e), (!this.foldInvisibleItems || i.visible) && (f += i.sourceWidth, ++l == this._columnCount || e == _ - 1)) {
                for (y = (p - f - (l - 1) * this._columnGap) / f, o = 0, l = g; l <= e; l++) {
                  i = this.getChildAt(l), this.foldInvisibleItems && !i.visible || (i.setPosition(o, n), l < e ? (i.setSize(i.sourceWidth + Math.round(i.sourceWidth * y), i.height, !0), o += Math.ceil(i.width) + this._columnGap) : i.setSize(p - o, i.height, !0), i.height > s && (s = i.height));
                }

                n += Math.ceil(s) + this._lineGap, s = 0, l = 0, g = e + 1, f = 0;
              }
            }

            a = n + Math.ceil(s), h = p;
          } else {
            for (e = 0; e < _; e++) {
              i = this.getChildAt(e), this.foldInvisibleItems && !i.visible || (0 != o && (o += this._columnGap), (0 != this._columnCount && l >= this._columnCount || 0 == this._columnCount && o + i.width > p && 0 != s) && (o = 0, n += Math.ceil(s) + this._lineGap, s = 0, l = 0), i.setPosition(o, n), (o += Math.ceil(i.width)) > r && (r = o), i.height > s && (s = i.height), l++);
            }

            a = n + Math.ceil(s), h = Math.ceil(r);
          }
        } else if (this._layout == t.ListLayoutType.FlowVertical) {
          if (this._autoResizeItem && this._lineCount > 0) {
            for (e = 0; e < _; e++) {
              if (i = this.getChildAt(e), (!this.foldInvisibleItems || i.visible) && (f += i.sourceHeight, ++l == this._lineCount || e == _ - 1)) {
                for (y = (d - f - (l - 1) * this._lineGap) / f, n = 0, l = g; l <= e; l++) {
                  i = this.getChildAt(l), this.foldInvisibleItems && !i.visible || (i.setPosition(o, n), l < e ? (i.setSize(i.width, i.sourceHeight + Math.round(i.sourceHeight * y), !0), n += Math.ceil(i.height) + this._lineGap) : i.setSize(i.width, d - n, !0), i.width > r && (r = i.width));
                }

                o += Math.ceil(r) + this._columnGap, r = 0, l = 0, g = e + 1, f = 0;
              }
            }

            h = o + Math.ceil(r), a = d;
          } else {
            for (e = 0; e < _; e++) {
              i = this.getChildAt(e), this.foldInvisibleItems && !i.visible || (0 != n && (n += this._lineGap), (0 != this._lineCount && l >= this._lineCount || 0 == this._lineCount && n + i.height > d && 0 != r) && (n = 0, o += Math.ceil(r) + this._columnGap, r = 0, l = 0), i.setPosition(o, n), (n += Math.ceil(i.height)) > s && (s = n), i.width > r && (r = i.width), l++);
            }

            h = o + Math.ceil(r), a = Math.ceil(s);
          }
        } else {
          var m;

          if (this._autoResizeItem && this._lineCount > 0 && (m = Math.floor((d - (this._lineCount - 1) * this._lineGap) / this._lineCount)), this._autoResizeItem && this._columnCount > 0) {
            for (e = 0; e < _; e++) {
              if (i = this.getChildAt(e), (!this.foldInvisibleItems || i.visible) && (0 == l && (0 != this._lineCount && u >= this._lineCount || 0 == this._lineCount && n + (this._lineCount > 0 ? m : i.height) > d) && (c++, n = 0, u = 0), f += i.sourceWidth, ++l == this._columnCount || e == _ - 1)) {
                for (y = (p - f - (l - 1) * this._columnGap) / f, o = 0, l = g; l <= e; l++) {
                  i = this.getChildAt(l), this.foldInvisibleItems && !i.visible || (i.setPosition(c * p + o, n), l < e ? (i.setSize(i.sourceWidth + Math.round(i.sourceWidth * y), this._lineCount > 0 ? m : i.height, !0), o += Math.ceil(i.width) + this._columnGap) : i.setSize(p - o, this._lineCount > 0 ? m : i.height, !0), i.height > s && (s = i.height));
                }

                n += Math.ceil(s) + this._lineGap, s = 0, l = 0, g = e + 1, f = 0, u++;
              }
            }
          } else for (e = 0; e < _; e++) {
            i = this.getChildAt(e), this.foldInvisibleItems && !i.visible || (0 != o && (o += this._columnGap), this._autoResizeItem && this._lineCount > 0 && i.setSize(i.width, m, !0), (0 != this._columnCount && l >= this._columnCount || 0 == this._columnCount && o + i.width > p && 0 != s) && (o = 0, n += Math.ceil(s) + this._lineGap, s = 0, l = 0, u++, (0 != this._lineCount && u >= this._lineCount || 0 == this._lineCount && n + i.height > d && 0 != r) && (c++, n = 0, u = 0)), i.setPosition(c * p + o, n), (o += Math.ceil(i.width)) > r && (r = o), i.height > s && (s = i.height), l++);
          }

          a = c > 0 ? d : n + Math.ceil(s), h = (c + 1) * p;
        }

        this.handleAlign(h, a), this.setBounds(0, 0, h, a);
      }
    }, o.prototype.setup_beforeAdd = function (i, o) {
      e.prototype.setup_beforeAdd.call(this, i, o), i.seek(o, 5), this._layout = i.readByte(), this._selectionMode = i.readByte(), this._align = i.readByte(), this._verticalAlign = i.readByte(), this._lineGap = i.readShort(), this._columnGap = i.readShort(), this._lineCount = i.readShort(), this._columnCount = i.readShort(), this._autoResizeItem = i.readBool(), this._childrenRenderOrder = i.readByte(), this._apexIndex = i.readShort(), i.readBool() && (this._margin.top = i.readInt(), this._margin.bottom = i.readInt(), this._margin.left = i.readInt(), this._margin.right = i.readInt());
      var n = i.readByte();

      if (n == t.OverflowType.Scroll) {
        var r = i.position;
        i.seek(o, 7), this.setupScroll(i), i.position = r;
      } else this.setupOverflow(n);

      i.readBool() && i.skip(8), i.version >= 2 && (this.scrollItemToViewOnClick = i.readBool(), this.foldInvisibleItems = i.readBool()), i.seek(o, 8), this._defaultItem = i.readS(), this.readItems(i);
    }, o.prototype.readItems = function (t) {
      var e, i, o, n;

      for (e = t.readShort(), i = 0; i < e; i++) {
        if (o = t.readShort(), o += t.position, null != (n = t.readS()) || (n = this._defaultItem)) {
          var r = this.getFromPool(n);
          r && (this.addChild(r), this.setupItem(t, r)), t.position = o;
        } else t.position = o;
      }
    }, o.prototype.setupItem = function (e, i) {
      var o, n, r;

      if (null != (o = e.readS()) && (i.text = o), null != (o = e.readS()) && i instanceof t.GButton && (i.selectedTitle = o), null != (o = e.readS()) && (i.icon = o), null != (o = e.readS()) && i instanceof t.GButton && (i.selectedIcon = o), null != (o = e.readS()) && (i.name = o), i instanceof t.GComponent) {
        for (n = e.readShort(), r = 0; r < n; r++) {
          var s = i.getController(e.readS());
          o = e.readS(), s && (s.selectedPageId = o);
        }

        if (e.version >= 2) for (n = e.readShort(), r = 0; r < n; r++) {
          var h = e.readS(),
              a = e.readShort(),
              l = e.readS(),
              c = i.getChildByPath(h);
          c && c.setProp(a, l);
        }
      }
    }, o.prototype.setup_afterAdd = function (t, i) {
      e.prototype.setup_afterAdd.call(this, t, i), t.seek(i, 6);
      var o = t.readShort();
      -1 != o && (this._selectionController = this.parent.getControllerAt(o));
    }, o;
  }(t.GComponent);

  t.GList = e;
  var i = 0;
}(fgui || (fgui = {})), function (t) {
  var e = function () {
    function e() {
      this._count = 0, this._pool = {};
    }

    return e.prototype.clear = function () {
      for (var t in this._pool) {
        for (var e = this._pool[t], i = e.length, o = 0; o < i; o++) {
          e[o].dispose();
        }
      }

      this._pool = {}, this._count = 0;
    }, Object.defineProperty(e.prototype, "count", {
      get: function get() {
        return this._count;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getObject = function (e) {
      if (null == (e = t.UIPackage.normalizeURL(e))) return null;
      var i = this._pool[e];
      return i && i.length ? (this._count--, i.shift()) : t.UIPackage.createObjectFromURL(e);
    }, e.prototype.returnObject = function (t) {
      var e = t.resourceURL;

      if (e) {
        var i = this._pool[e];
        null == i && (i = new Array(), this._pool[e] = i), this._count++, i.push(t);
      }
    }, e;
  }();

  t.GObjectPool = e;
}(fgui || (fgui = {})), function (t) {
  var e = function (e) {
    function i() {
      var i = e.call(this) || this;
      return i._frame = 0, i._node.name = "GLoader", i._playing = !0, i._url = "", i._fill = t.LoaderFillType.None, i._align = t.AlignType.Left, i._verticalAlign = t.VertAlignType.Top, i._showErrorSign = !0, i._color = new cc.Color(255, 255, 255, 255), i._container = new cc.Node("Image"), i._container.setAnchorPoint(0, 1), i._node.addChild(i._container), i._content = i._container.addComponent(t.MovieClip), i._content.sizeMode = cc.Sprite.SizeMode.CUSTOM, i._content.trim = !1, i._content.setPlaySettings(), i;
    }

    return __extends(i, e), i.prototype.dispose = function () {
      null == this._contentItem && this._content.spriteFrame && this.freeExternal(this._content.spriteFrame), this._content2 && this._content2.dispose(), e.prototype.dispose.call(this);
    }, Object.defineProperty(i.prototype, "url", {
      get: function get() {
        return this._url;
      },
      set: function set(t) {
        this._url != t && (this._url = t, this.loadContent(), this.updateGear(7));
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "icon", {
      get: function get() {
        return this._url;
      },
      set: function set(t) {
        this.url = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "align", {
      get: function get() {
        return this._align;
      },
      set: function set(t) {
        this._align != t && (this._align = t, this.updateLayout());
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "verticalAlign", {
      get: function get() {
        return this._verticalAlign;
      },
      set: function set(t) {
        this._verticalAlign != t && (this._verticalAlign = t, this.updateLayout());
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "fill", {
      get: function get() {
        return this._fill;
      },
      set: function set(t) {
        this._fill != t && (this._fill = t, this.updateLayout());
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "shrinkOnly", {
      get: function get() {
        return this._shrinkOnly;
      },
      set: function set(t) {
        this._shrinkOnly != t && (this._shrinkOnly = t, this.updateLayout());
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "autoSize", {
      get: function get() {
        return this._autoSize;
      },
      set: function set(t) {
        this._autoSize != t && (this._autoSize = t, this.updateLayout());
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "playing", {
      get: function get() {
        return this._playing;
      },
      set: function set(e) {
        this._playing != e && (this._playing = e, this._content instanceof t.MovieClip && (this._content.playing = e), this.updateGear(5));
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "frame", {
      get: function get() {
        return this._frame;
      },
      set: function set(e) {
        this._frame != e && (this._frame = e, this._content instanceof t.MovieClip && (this._content.frame = e), this.updateGear(5));
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "color", {
      get: function get() {
        return this._color;
      },
      set: function set(t) {
        this._color.set(t), this.updateGear(4), this._container.color = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "fillMethod", {
      get: function get() {
        return this._content.fillMethod;
      },
      set: function set(t) {
        this._content.fillMethod = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "fillOrigin", {
      get: function get() {
        return this._content.fillOrigin;
      },
      set: function set(t) {
        this._content.fillOrigin = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "fillClockwise", {
      get: function get() {
        return this._content.fillClockwise;
      },
      set: function set(t) {
        this._content.fillClockwise = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "fillAmount", {
      get: function get() {
        return this._content.fillAmount;
      },
      set: function set(t) {
        this._content.fillAmount = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "showErrorSign", {
      get: function get() {
        return this._showErrorSign;
      },
      set: function set(t) {
        this._showErrorSign = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "component", {
      get: function get() {
        return this._content2;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "texture", {
      get: function get() {
        return this._content.spriteFrame;
      },
      set: function set(t) {
        this.url = null, this._content.spriteFrame = t, this._content.type = cc.Sprite.Type.SIMPLE, null != t ? (this.sourceWidth = t.getRect().width, this.sourceHeight = t.getRect().height) : this.sourceWidth = this.sourceHeight = 0, this.updateLayout();
      },
      enumerable: !1,
      configurable: !0
    }), i.prototype.loadContent = function () {
      this.clearContent(), this._url && (t.ToolSet.startsWith(this._url, "ui://") ? this.loadFromPackage(this._url) : this.loadExternal());
    }, i.prototype.loadFromPackage = function (e) {
      if (this._contentItem = t.UIPackage.getItemByURL(e), this._contentItem) {
        if (this._contentItem = this._contentItem.getBranch(), this.sourceWidth = this._contentItem.width, this.sourceHeight = this._contentItem.height, this._contentItem = this._contentItem.getHighResolution(), this._contentItem.load(), this._autoSize && this.setSize(this.sourceWidth, this.sourceHeight), this._contentItem.type == t.PackageItemType.Image) this._contentItem.asset ? (this._content.spriteFrame = this._contentItem.asset, 0 == this._content.fillMethod && (this._contentItem.scale9Grid ? this._content.type = cc.Sprite.Type.SLICED : this._contentItem.scaleByTile ? this._content.type = cc.Sprite.Type.TILED : this._content.type = cc.Sprite.Type.SIMPLE), this.updateLayout()) : this.setErrorState();else if (this._contentItem.type == t.PackageItemType.MovieClip) this._content.interval = this._contentItem.interval, this._content.swing = this._contentItem.swing, this._content.repeatDelay = this._contentItem.repeatDelay, this._content.frames = this._contentItem.frames, this.updateLayout();else if (this._contentItem.type == t.PackageItemType.Component) {
          var i = t.UIPackage.createObjectFromURL(e);
          i ? i instanceof t.GComponent ? (this._content2 = i, this._container.addChild(this._content2.node), this.updateLayout()) : (i.dispose(), this.setErrorState()) : this.setErrorState();
        } else this.setErrorState();
      } else this.setErrorState();
    }, i.prototype.loadExternal = function () {
      var e = this,
          i = this.url,
          o = function o(t, _o) {
        e._url == i && cc.isValid(e._node) && (t && console.warn(t), _o instanceof cc.SpriteFrame ? e.onExternalLoadSuccess(_o) : _o instanceof cc.Texture2D && e.onExternalLoadSuccess(new cc.SpriteFrame(_o)));
      };

      t.ToolSet.startsWith(this._url, "http://") || t.ToolSet.startsWith(this._url, "https://") || t.ToolSet.startsWith(this._url, "/") ? cc.assetManager.loadRemote(this._url, o) : cc.resources.load(this._url, cc.Asset, o);
    }, i.prototype.freeExternal = function () {}, i.prototype.onExternalLoadSuccess = function (t) {
      this._content.spriteFrame = t, this._content.type = cc.Sprite.Type.SIMPLE, this.sourceWidth = t.getRect().width, this.sourceHeight = t.getRect().height, this._autoSize && this.setSize(this.sourceWidth, this.sourceHeight), this.updateLayout();
    }, i.prototype.onExternalLoadFailed = function () {
      this.setErrorState();
    }, i.prototype.setErrorState = function () {
      this._showErrorSign && (null == this._errorSign && null != t.UIConfig.loaderErrorSign && (this._errorSign = i._errorSignPool.getObject(t.UIConfig.loaderErrorSign)), this._errorSign && (this._errorSign.setSize(this.width, this.height), this._container.addChild(this._errorSign.node)));
    }, i.prototype.clearErrorState = function () {
      this._errorSign && (this._container.removeChild(this._errorSign.node), i._errorSignPool.returnObject(this._errorSign), this._errorSign = null);
    }, i.prototype.updateLayout = function () {
      if (null != this._content2 || null != this._content) {
        var e = this.sourceWidth,
            i = this.sourceHeight,
            o = -this.pivotX * this._width,
            n = this.pivotY * this._height;

        if (!this._autoSize || (this._updatingLayout = !0, 0 == e && (e = 50), 0 == i && (i = 30), this.setSize(e, i), this._updatingLayout = !1, this._container.setContentSize(this._width, this._height), this._container.setPosition(o, n), this._content2 && (this._content2.setPosition(o + this._width * this.pivotX, n - this._height * this.pivotY), this._content2.setScale(1, 1)), e != this._width || i != this._height)) {
          var r,
              s,
              h = 1,
              a = 1;
          this._fill != t.LoaderFillType.None && (h = this.width / this.sourceWidth, a = this.height / this.sourceHeight, 1 == h && 1 == a || (this._fill == t.LoaderFillType.ScaleMatchHeight ? h = a : this._fill == t.LoaderFillType.ScaleMatchWidth ? a = h : this._fill == t.LoaderFillType.Scale ? h > a ? h = a : a = h : this._fill == t.LoaderFillType.ScaleNoBorder && (h > a ? a = h : h = a), this._shrinkOnly && (h > 1 && (h = 1), a > 1 && (a = 1)), e = this.sourceWidth * h, i = this.sourceHeight * a)), this._container.setContentSize(e, i), this._content2 && (this._content2.setPosition(o + this._width * this.pivotX, n - this._height * this.pivotY), this._content2.setScale(h, a)), r = this._align == t.AlignType.Left ? 0 : this._align == t.AlignType.Center ? Math.floor((this._width - e) / 2) : this._width - e, s = -(s = this._verticalAlign == t.VertAlignType.Top ? 0 : this._verticalAlign == t.VertAlignType.Middle ? Math.floor((this._height - i) / 2) : this._height - i), this._container.setPosition(o + r, n + s);
        }
      } else this._autoSize && (this._updatingLayout = !0, this.setSize(50, 30), this._updatingLayout = !1);
    }, i.prototype.clearContent = function () {
      if (this.clearErrorState(), !this._contentItem) {
        var t = this._content.spriteFrame;
        t && this.freeExternal(t);
      }

      this._content2 && (this._container.removeChild(this._content2.node), this._content2.dispose(), this._content2 = null), this._content.frames = null, this._content.spriteFrame = null, this._contentItem = null;
    }, i.prototype.handleSizeChanged = function () {
      e.prototype.handleSizeChanged.call(this), this._updatingLayout || this.updateLayout();
    }, i.prototype.handleAnchorChanged = function () {
      e.prototype.handleAnchorChanged.call(this), this._updatingLayout || this.updateLayout();
    }, i.prototype.handleGrayedChanged = function () {
      this._content.grayed = this._grayed;
    }, i.prototype._hitTest = function (t, e) {
      if (this._content2) {
        var i = this._content2.hitTest(e);

        if (i) return i;
      }

      return t.x >= 0 && t.y >= 0 && t.x < this._width && t.y < this._height ? this : null;
    }, i.prototype.getProp = function (i) {
      switch (i) {
        case t.ObjectPropID.Color:
          return this.color;

        case t.ObjectPropID.Playing:
          return this.playing;

        case t.ObjectPropID.Frame:
          return this.frame;

        case t.ObjectPropID.TimeScale:
          return this._content.timeScale;

        default:
          return e.prototype.getProp.call(this, i);
      }
    }, i.prototype.setProp = function (i, o) {
      switch (i) {
        case t.ObjectPropID.Color:
          this.color = o;
          break;

        case t.ObjectPropID.Playing:
          this.playing = o;
          break;

        case t.ObjectPropID.Frame:
          this.frame = o;
          break;

        case t.ObjectPropID.TimeScale:
          this._content.timeScale = o;
          break;

        case t.ObjectPropID.DeltaTime:
          this._content.advance(o);

          break;

        default:
          e.prototype.setProp.call(this, i, o);
      }
    }, i.prototype.setup_beforeAdd = function (t, i) {
      e.prototype.setup_beforeAdd.call(this, t, i), t.seek(i, 5), this._url = t.readS(), this._align = t.readByte(), this._verticalAlign = t.readByte(), this._fill = t.readByte(), this._shrinkOnly = t.readBool(), this._autoSize = t.readBool(), this._showErrorSign = t.readBool(), this._playing = t.readBool(), this._frame = t.readInt(), t.readBool() && (this.color = t.readColor()), this._content.fillMethod = t.readByte(), 0 != this._content.fillMethod && (this._content.fillOrigin = t.readByte(), this._content.fillClockwise = t.readBool(), this._content.fillAmount = t.readFloat()), this._url && this.loadContent();
    }, i._errorSignPool = new t.GObjectPool(), i;
  }(t.GObject);

  t.GLoader = e;
}(fgui || (fgui = {})), function (t) {
  var e = function (e) {
    function i() {
      var i = e.call(this) || this;
      return i._frame = 0, i._node.name = "GLoader3D", i._playing = !0, i._url = "", i._fill = t.LoaderFillType.None, i._align = t.AlignType.Left, i._verticalAlign = t.VertAlignType.Top, i._color = new cc.Color(255, 255, 255, 255), i._container = new cc.Node("Wrapper"), i._container.setAnchorPoint(0, 1), i._node.addChild(i._container), i;
    }

    return __extends(i, e), i.prototype.dispose = function () {
      e.prototype.dispose.call(this);
    }, Object.defineProperty(i.prototype, "url", {
      get: function get() {
        return this._url;
      },
      set: function set(t) {
        this._url != t && (this._url = t, this.loadContent(), this.updateGear(7));
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "icon", {
      get: function get() {
        return this._url;
      },
      set: function set(t) {
        this.url = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "align", {
      get: function get() {
        return this._align;
      },
      set: function set(t) {
        this._align != t && (this._align = t, this.updateLayout());
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "verticalAlign", {
      get: function get() {
        return this._verticalAlign;
      },
      set: function set(t) {
        this._verticalAlign != t && (this._verticalAlign = t, this.updateLayout());
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "fill", {
      get: function get() {
        return this._fill;
      },
      set: function set(t) {
        this._fill != t && (this._fill = t, this.updateLayout());
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "shrinkOnly", {
      get: function get() {
        return this._shrinkOnly;
      },
      set: function set(t) {
        this._shrinkOnly != t && (this._shrinkOnly = t, this.updateLayout());
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "autoSize", {
      get: function get() {
        return this._autoSize;
      },
      set: function set(t) {
        this._autoSize != t && (this._autoSize = t, this.updateLayout());
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "playing", {
      get: function get() {
        return this._playing;
      },
      set: function set(t) {
        this._playing != t && (this._playing = t, this.updateGear(5), this.onChange());
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "frame", {
      get: function get() {
        return this._frame;
      },
      set: function set(t) {
        this._frame != t && (this._frame = t, this.updateGear(5), this.onChange());
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "animationName", {
      get: function get() {
        return this._animationName;
      },
      set: function set(t) {
        this._animationName != t && (this._animationName = t, this.onChange());
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "skinName", {
      get: function get() {
        return this._skinName;
      },
      set: function set(t) {
        this._skinName != t && (this._skinName = t, this.onChange());
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "loop", {
      get: function get() {
        return this._loop;
      },
      set: function set(t) {
        this._loop != t && (this._loop = t, this.onChange());
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "color", {
      get: function get() {
        return this._color;
      },
      set: function set(t) {
        this._color.set(t), this.updateGear(4), this._content && (this._content.node.color = t);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "content", {
      get: function get() {
        return this._content;
      },
      enumerable: !1,
      configurable: !0
    }), i.prototype.loadContent = function () {
      this.clearContent(), this._url && (t.ToolSet.startsWith(this._url, "ui://") ? this.loadFromPackage(this._url) : this.loadExternal());
    }, i.prototype.loadFromPackage = function (e) {
      this._contentItem = t.UIPackage.getItemByURL(e), this._contentItem && (this._contentItem = this._contentItem.getBranch(), this.sourceWidth = this._contentItem.width, this.sourceHeight = this._contentItem.height, this._contentItem = this._contentItem.getHighResolution(), this._autoSize && this.setSize(this.sourceWidth, this.sourceHeight), this._contentItem.type != t.PackageItemType.Spine && this._contentItem.type != t.PackageItemType.DragonBones || this._contentItem.owner.getItemAssetAsync(this._contentItem, this.onLoaded.bind(this)));
    }, i.prototype.onLoaded = function (e, i) {
      this._contentItem == i && (e && console.warn(e), this._contentItem.asset && (this._contentItem.type == t.PackageItemType.Spine ? this.setSpine(this._contentItem.asset, this._contentItem.skeletonAnchor) : this._contentItem.type == t.PackageItemType.DragonBones && this.setDragonBones(this._contentItem.asset, this._contentItem.atlasAsset, this._contentItem.skeletonAnchor)));
    }, i.prototype.setSpine = function (t, e, i) {
      this.url = null, this.clearContent();
      var o = new cc.Node();
      o.color = this._color, this._container.addChild(o), o.setPosition(e.x, -e.y), this._content = o.addComponent(sp.Skeleton), this._content.premultipliedAlpha = i, this._content.skeletonData = t, this.onChangeSpine(), this.updateLayout();
    }, i.prototype.setDragonBones = function (t, e, i, o) {
      this.url = null, this.clearContent();
      var n = new cc.Node();
      n.color = this._color, this._container.addChild(n), n.setPosition(i.x, -i.y), this._content = n.addComponent(dragonBones.ArmatureDisplay), this._content.premultipliedAlpha = o, this._content.dragonAsset = t, this._content.dragonAtlasAsset = e;

      var r = t.init(dragonBones.CCFactory.getInstance(), e._uuid),
          s = this._content._factory.getDragonBonesData(r);

      this._content.armatureName = s.armatureNames[0], this.onChangeDragonBones(), this.updateLayout();
    }, i.prototype.onChange = function () {
      this.onChangeSpine(), this.onChangeDragonBones();
    }, i.prototype.onChangeSpine = function () {
      if (this._content instanceof sp.Skeleton) {
        if (this._animationName) {
          var e = this._content.getCurrent(0);

          (!e || e.animation.name != this._animationName || e.isComplete() && !e.loop) && (this._content.defaultAnimation = this._animationName, e = this._content.setAnimation(0, this._animationName, this._loop)), this._playing ? this._content.paused = !1 : (this._content.paused = !0, e.trackTime = t.ToolSet.lerp(0, e.animationEnd - e.animationStart, this._frame / 100));
        } else this._content.clearTrack(0);

        var i = this._skinName || this._content.skeletonData.getRuntimeData().skins[0].name;

        this._content._skeleton.skin != i && this._content.setSkin(i);
      }
    }, i.prototype.onChangeDragonBones = function () {
      this._content instanceof dragonBones.ArmatureDisplay && (this._animationName ? this._playing ? this._content.playAnimation(this._animationName, this._loop ? 0 : 1) : this._content.armature().animation.gotoAndStopByFrame(this._animationName, this._frame) : this._content.armature().animation.reset());
    }, i.prototype.loadExternal = function () {
      t.ToolSet.startsWith(this._url, "http://") || t.ToolSet.startsWith(this._url, "https://") || t.ToolSet.startsWith(this._url, "/") ? cc.assetManager.loadRemote(this._url, sp.SkeletonData, this.onLoaded2.bind(this)) : cc.resources.load(this._url, sp.SkeletonData, this.onLoaded2.bind(this));
    }, i.prototype.onLoaded2 = function (t) {
      this._url && cc.isValid(this._node) && t && console.warn(t);
    }, i.prototype.updateLayout = function () {
      var e = this.sourceWidth,
          i = this.sourceHeight,
          o = -this.pivotX * this._width,
          n = this.pivotY * this._height;
      if (this._autoSize && (this._updatingLayout = !0, 0 == e && (e = 50), 0 == i && (i = 30), this.setSize(e, i), this._updatingLayout = !1, e == this._width && i == this._height)) return this._container.setScale(1, 1), void this._container.setPosition(o, n);
      var r,
          s,
          h = 1,
          a = 1;
      this._fill != t.LoaderFillType.None && (h = this.width / this.sourceWidth, a = this.height / this.sourceHeight, 1 == h && 1 == a || (this._fill == t.LoaderFillType.ScaleMatchHeight ? h = a : this._fill == t.LoaderFillType.ScaleMatchWidth ? a = h : this._fill == t.LoaderFillType.Scale ? h > a ? h = a : a = h : this._fill == t.LoaderFillType.ScaleNoBorder && (h > a ? a = h : h = a), this._shrinkOnly && (h > 1 && (h = 1), a > 1 && (a = 1)), e = this.sourceWidth * h, i = this.sourceHeight * a)), this._container.setScale(h, a), r = this._align == t.AlignType.Left ? 0 : this._align == t.AlignType.Center ? Math.floor((this._width - e) / 2) : this._width - e, s = -(s = this._verticalAlign == t.VertAlignType.Top ? 0 : this._verticalAlign == t.VertAlignType.Middle ? Math.floor((this._height - i) / 2) : this._height - i), this._container.setPosition(o + r, n + s);
    }, i.prototype.clearContent = function () {
      this._contentItem = null, this._content && (this._content.node.destroy(), this._content = null);
    }, i.prototype.handleSizeChanged = function () {
      e.prototype.handleSizeChanged.call(this), this._updatingLayout || this.updateLayout();
    }, i.prototype.handleAnchorChanged = function () {
      e.prototype.handleAnchorChanged.call(this), this._updatingLayout || this.updateLayout();
    }, i.prototype.handleGrayedChanged = function () {}, i.prototype.getProp = function (i) {
      switch (i) {
        case t.ObjectPropID.Color:
          return this.color;

        case t.ObjectPropID.Playing:
          return this.playing;

        case t.ObjectPropID.Frame:
          return this.frame;

        case t.ObjectPropID.TimeScale:
          return 1;

        default:
          return e.prototype.getProp.call(this, i);
      }
    }, i.prototype.setProp = function (i, o) {
      switch (i) {
        case t.ObjectPropID.Color:
          this.color = o;
          break;

        case t.ObjectPropID.Playing:
          this.playing = o;
          break;

        case t.ObjectPropID.Frame:
          this.frame = o;
          break;

        case t.ObjectPropID.TimeScale:
        case t.ObjectPropID.DeltaTime:
          break;

        default:
          e.prototype.setProp.call(this, i, o);
      }
    }, i.prototype.setup_beforeAdd = function (t, i) {
      e.prototype.setup_beforeAdd.call(this, t, i), t.seek(i, 5), this._url = t.readS(), this._align = t.readByte(), this._verticalAlign = t.readByte(), this._fill = t.readByte(), this._shrinkOnly = t.readBool(), this._autoSize = t.readBool(), this._animationName = t.readS(), this._skinName = t.readS(), this._playing = t.readBool(), this._frame = t.readInt(), this._loop = t.readBool(), t.readBool() && (this.color = t.readColor()), this._url && this.loadContent();
    }, i;
  }(t.GObject);

  t.GLoader3D = e;
}(fgui || (fgui = {})), function (t) {
  var e = function (e) {
    function i() {
      var i = e.call(this) || this;
      return i._node.name = "GMovieClip", i._touchDisabled = !0, i._content = i._node.addComponent(t.MovieClip), i._content.sizeMode = cc.Sprite.SizeMode.CUSTOM, i._content.trim = !1, i._content.setPlaySettings(), i;
    }

    return __extends(i, e), Object.defineProperty(i.prototype, "color", {
      get: function get() {
        return this._node.color;
      },
      set: function set(t) {
        this._node.color = t, this.updateGear(4);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "playing", {
      get: function get() {
        return this._content.playing;
      },
      set: function set(t) {
        this._content.playing != t && (this._content.playing = t, this.updateGear(5));
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "frame", {
      get: function get() {
        return this._content.frame;
      },
      set: function set(t) {
        this._content.frame != t && (this._content.frame = t, this.updateGear(5));
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "timeScale", {
      get: function get() {
        return this._content.timeScale;
      },
      set: function set(t) {
        this._content.timeScale = t;
      },
      enumerable: !1,
      configurable: !0
    }), i.prototype.rewind = function () {
      this._content.rewind();
    }, i.prototype.syncStatus = function (t) {
      this._content.syncStatus(t._content);
    }, i.prototype.advance = function (t) {
      this._content.advance(t);
    }, i.prototype.setPlaySettings = function (t, e, i, o, n, r) {
      this._content.setPlaySettings(t, e, i, o, n, r);
    }, i.prototype.handleGrayedChanged = function () {
      this._content.grayed = this._grayed;
    }, i.prototype.handleSizeChanged = function () {
      e.prototype.handleSizeChanged.call(this), this._content.sizeMode = cc.Sprite.SizeMode.CUSTOM;
    }, i.prototype.getProp = function (i) {
      switch (i) {
        case t.ObjectPropID.Color:
          return this.color;

        case t.ObjectPropID.Playing:
          return this.playing;

        case t.ObjectPropID.Frame:
          return this.frame;

        case t.ObjectPropID.TimeScale:
          return this.timeScale;

        default:
          return e.prototype.getProp.call(this, i);
      }
    }, i.prototype.setProp = function (i, o) {
      switch (i) {
        case t.ObjectPropID.Color:
          this.color = o;
          break;

        case t.ObjectPropID.Playing:
          this.playing = o;
          break;

        case t.ObjectPropID.Frame:
          this.frame = o;
          break;

        case t.ObjectPropID.TimeScale:
          this.timeScale = o;
          break;

        case t.ObjectPropID.DeltaTime:
          this.advance(o);
          break;

        default:
          e.prototype.setProp.call(this, i, o);
      }
    }, i.prototype.constructFromResource = function () {
      var t = this.packageItem.getBranch();
      this.sourceWidth = t.width, this.sourceHeight = t.height, this.initWidth = this.sourceWidth, this.initHeight = this.sourceHeight, this.setSize(this.sourceWidth, this.sourceHeight), (t = t.getHighResolution()).load(), this._content.interval = t.interval, this._content.swing = t.swing, this._content.repeatDelay = t.repeatDelay, this._content.frames = t.frames, this._content.smoothing = t.smoothing;
    }, i.prototype.setup_beforeAdd = function (t, i) {
      e.prototype.setup_beforeAdd.call(this, t, i), t.seek(i, 5), t.readBool() && (this.color = t.readColor()), t.readByte(), this._content.frame = t.readInt(), this._content.playing = t.readBool();
    }, i;
  }(t.GObject);

  t.GMovieClip = e;
}(fgui || (fgui = {})), function (t) {
  var e = function (e) {
    function i() {
      var i = e.call(this) || this;
      return i._min = 0, i._max = 0, i._value = 0, i._barMaxWidth = 0, i._barMaxHeight = 0, i._barMaxWidthDelta = 0, i._barMaxHeightDelta = 0, i._barStartX = 0, i._barStartY = 0, i._node.name = "GProgressBar", i._titleType = t.ProgressTitleType.Percent, i._value = 50, i._max = 100, i;
    }

    return __extends(i, e), Object.defineProperty(i.prototype, "titleType", {
      get: function get() {
        return this._titleType;
      },
      set: function set(t) {
        this._titleType != t && (this._titleType = t, this.update(this._value));
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "min", {
      get: function get() {
        return this._min;
      },
      set: function set(t) {
        this._min != t && (this._min = t, this.update(this._value));
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "max", {
      get: function get() {
        return this._max;
      },
      set: function set(t) {
        this._max != t && (this._max = t, this.update(this._value));
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "value", {
      get: function get() {
        return this._value;
      },
      set: function set(e) {
        this._value != e && (t.GTween.kill(this, !1, this.update), this._value = e, this.update(e));
      },
      enumerable: !1,
      configurable: !0
    }), i.prototype.tweenValue = function (e, i) {
      var o,
          n = t.GTween.getTween(this, this.update);
      return n ? (o = n.value.x, n.kill()) : o = this._value, this._value = e, t.GTween.to(o, this._value, i).setTarget(this, this.update).setEase(t.EaseType.Linear);
    }, i.prototype.update = function (e) {
      var i = t.ToolSet.clamp01((e - this._min) / (this._max - this._min));
      if (this._titleObject) switch (this._titleType) {
        case t.ProgressTitleType.Percent:
          this._titleObject.text = Math.floor(100 * i) + "%";
          break;

        case t.ProgressTitleType.ValueAndMax:
          this._titleObject.text = Math.floor(e) + "/" + Math.floor(this._max);
          break;

        case t.ProgressTitleType.Value:
          this._titleObject.text = "" + Math.floor(e);
          break;

        case t.ProgressTitleType.Max:
          this._titleObject.text = "" + Math.floor(this._max);
      }
      var o = this.width - this._barMaxWidthDelta,
          n = this.height - this._barMaxHeightDelta;
      this._reverse ? (this._barObjectH && (this.setFillAmount(this._barObjectH, 1 - i) || (this._barObjectH.width = Math.round(o * i), this._barObjectH.x = this._barStartX + (o - this._barObjectH.width))), this._barObjectV && (this.setFillAmount(this._barObjectV, 1 - i) || (this._barObjectV.height = Math.round(n * i), this._barObjectV.y = this._barStartY + (n - this._barObjectV.height)))) : (this._barObjectH && (this.setFillAmount(this._barObjectH, i) || (this._barObjectH.width = Math.round(o * i))), this._barObjectV && (this.setFillAmount(this._barObjectV, i) || (this._barObjectV.height = Math.round(n * i)))), this._aniObject && this._aniObject.setProp(t.ObjectPropID.Frame, Math.floor(100 * i));
    }, i.prototype.setFillAmount = function (e, i) {
      return (e instanceof t.GImage || e instanceof t.GLoader) && e.fillMethod != t.FillMethod.None && (e.fillAmount = i, !0);
    }, i.prototype.constructExtension = function (t) {
      t.seek(0, 6), this._titleType = t.readByte(), this._reverse = t.readBool(), this._titleObject = this.getChild("title"), this._barObjectH = this.getChild("bar"), this._barObjectV = this.getChild("bar_v"), this._aniObject = this.getChild("ani"), this._barObjectH && (this._barMaxWidth = this._barObjectH.width, this._barMaxWidthDelta = this.width - this._barMaxWidth, this._barStartX = this._barObjectH.x), this._barObjectV && (this._barMaxHeight = this._barObjectV.height, this._barMaxHeightDelta = this.height - this._barMaxHeight, this._barStartY = this._barObjectV.y);
    }, i.prototype.handleSizeChanged = function () {
      e.prototype.handleSizeChanged.call(this), this._barObjectH && (this._barMaxWidth = this.width - this._barMaxWidthDelta), this._barObjectV && (this._barMaxHeight = this.height - this._barMaxHeightDelta), this._underConstruct || this.update(this._value);
    }, i.prototype.setup_afterAdd = function (t, i) {
      e.prototype.setup_afterAdd.call(this, t, i), t.seek(i, 6) && t.readByte() == this.packageItem.objectType ? (this._value = t.readInt(), this._max = t.readInt(), t.version >= 2 && (this._min = t.readInt()), this.update(this._value)) : this.update(this._value);
    }, i;
  }(t.GComponent);

  t.GProgressBar = e;
}(fgui || (fgui = {})), function (t) {
  var e = function (e) {
    function i() {
      var t = e.call(this) || this;
      return t._fontSize = 0, t._leading = 0, t._node.name = "GTextField", t._touchDisabled = !0, t._text = "", t._color = new cc.Color(255, 255, 255, 255), t.createRenderer(), t.fontSize = 12, t.leading = 3, t.singleLine = !1, t._sizeDirty = !1, t._node.on(cc.Node.EventType.SIZE_CHANGED, t.onLabelSizeChanged, t), t;
    }

    return __extends(i, e), i.prototype.createRenderer = function () {
      this._label = this._node.addComponent(cc.Label), this.autoSize = t.AutoSizeType.Both;
    }, Object.defineProperty(i.prototype, "text", {
      get: function get() {
        return this._text;
      },
      set: function set(t) {
        this._text = t, null == this._text && (this._text = ""), this.updateGear(6), this.markSizeChanged(), this.updateText();
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "font", {
      get: function get() {
        return this._font;
      },
      set: function set(e) {
        if (this._font != e || !e) {
          this._font = e, this.markSizeChanged();
          var i = e || t.UIConfig.defaultFont;

          if (t.ToolSet.startsWith(i, "ui://")) {
            var o = t.UIPackage.getItemByURL(i);
            i = o ? o.owner.getItemAsset(o) : t.UIConfig.defaultFont;
          }

          this._realFont = i, this.updateFont();
        }
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "fontSize", {
      get: function get() {
        return this._fontSize;
      },
      set: function set(t) {
        t < 0 || this._fontSize != t && (this._fontSize = t, this.markSizeChanged(), this.updateFontSize());
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "color", {
      get: function get() {
        return this._color;
      },
      set: function set(t) {
        this._color.set(t), this.updateGear(4), this.updateFontColor();
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "align", {
      get: function get() {
        return this._label ? this._label.horizontalAlign : 0;
      },
      set: function set(t) {
        this._label && (this._label.horizontalAlign = t);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "verticalAlign", {
      get: function get() {
        return this._label ? this._label.verticalAlign : 0;
      },
      set: function set(t) {
        this._label && (this._label.verticalAlign = t);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "leading", {
      get: function get() {
        return this._leading;
      },
      set: function set(t) {
        this._leading != t && (this._leading = t, this.markSizeChanged(), this.updateFontSize());
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "letterSpacing", {
      get: function get() {
        return this._label ? this._label.spacingX : 0;
      },
      set: function set(t) {
        this._label && this._label.spacingX != t && (this.markSizeChanged(), this._label.spacingX = t);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "underline", {
      get: function get() {
        return !!this._label && this._label.enableUnderline;
      },
      set: function set(t) {
        this._label && (this._label.enableUnderline = t);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "bold", {
      get: function get() {
        return !!this._label && this._label.enableBold;
      },
      set: function set(t) {
        this._label && (this._label.enableBold = t);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "italic", {
      get: function get() {
        return !!this._label && this._label.enableItalic;
      },
      set: function set(t) {
        this._label && (this._label.enableItalic = t);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "singleLine", {
      get: function get() {
        return !!this._label && !this._label.enableWrapText;
      },
      set: function set(t) {
        this._label && (this._label.enableWrapText = !t);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "stroke", {
      get: function get() {
        return this._outline && this._outline.enabled ? this._outline.width : 0;
      },
      set: function set(t) {
        0 == t ? this._outline && (this._outline.enabled = !1) : (this._outline ? this._outline.enabled = !0 : (this._outline = this._node.addComponent(cc.LabelOutline), this.updateStrokeColor()), this._outline.width = t);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "strokeColor", {
      get: function get() {
        return this._strokeColor;
      },
      set: function set(t) {
        this._strokeColor || (this._strokeColor = new cc.Color()), this._strokeColor.set(t), this.updateGear(4), this.updateStrokeColor();
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "shadowOffset", {
      get: function get() {
        return this._shadowOffset;
      },
      set: function set(t) {
        this._shadowOffset || (this._shadowOffset = new cc.Vec2()), this._shadowOffset.set(t), 0 != this._shadowOffset.x || 0 != this._shadowOffset.y ? (this._shadow ? this._shadow.enabled = !0 : (this._shadow = this._node.addComponent(cc.LabelShadow), this.updateShadowColor()), this._shadow.offset.x = t.x, this._shadow.offset.y = -t.y) : this._shadow && (this._shadow.enabled = !1);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "shadowColor", {
      get: function get() {
        return this._shadowColor;
      },
      set: function set(t) {
        this._shadowColor || (this._shadowColor = new cc.Color()), this._shadowColor.set(t), this.updateShadowColor();
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "ubbEnabled", {
      get: function get() {
        return this._ubbEnabled;
      },
      set: function set(t) {
        this._ubbEnabled != t && (this._ubbEnabled = t, this.markSizeChanged(), this.updateText());
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "autoSize", {
      get: function get() {
        return this._autoSize;
      },
      set: function set(t) {
        this._autoSize != t && (this._autoSize = t, this.markSizeChanged(), this.updateOverflow());
      },
      enumerable: !1,
      configurable: !0
    }), i.prototype.parseTemplate = function (t) {
      for (var e, i, o, n, r = 0, s = ""; -1 != (e = t.indexOf("{", r));) {
        if (e > 0 && 92 == t.charCodeAt(e - 1)) s += t.substring(r, e - 1), s += "{", r = e + 1;else {
          if (s += t.substring(r, e), r = e, -1 == (e = t.indexOf("}", r))) break;
          e != r + 1 ? (-1 != (i = (o = t.substring(r + 1, e)).indexOf("=")) ? s += null == (n = this._templateVars[o.substring(0, i)]) ? o.substring(i + 1) : n : null != (n = this._templateVars[o]) && (s += n), r = e + 1) : (s += t.substr(r, 2), r = e + 1);
        }
      }

      return r < t.length && (s += t.substr(r)), s;
    }, Object.defineProperty(i.prototype, "templateVars", {
      get: function get() {
        return this._templateVars;
      },
      set: function set(t) {
        null == this._templateVars && null == t || (this._templateVars = t, this.flushVars());
      },
      enumerable: !1,
      configurable: !0
    }), i.prototype.setVar = function (t, e) {
      return this._templateVars || (this._templateVars = {}), this._templateVars[t] = e, this;
    }, i.prototype.flushVars = function () {
      this.markSizeChanged(), this.updateText();
    }, Object.defineProperty(i.prototype, "textWidth", {
      get: function get() {
        return this.ensureSizeCorrect(), this._node.width;
      },
      enumerable: !1,
      configurable: !0
    }), i.prototype.ensureSizeCorrect = function () {
      this._sizeDirty && (this._label._forceUpdateRenderData ? this._label._forceUpdateRenderData() : this._label._updateRenderData(!0), this._sizeDirty = !1);
    }, i.prototype.updateText = function () {
      var e = this._text;
      this._templateVars && (e = this.parseTemplate(e)), this._ubbEnabled && (e = t.UBBParser.inst.parse(e, !0)), this._label.string = e;
    }, i.prototype.assignFont = function (e, i) {
      if (i instanceof cc.Font) e.font = i;else {
        var o = t.getFontByName(i);
        o ? e.font = o : (e.fontFamily = i, e.useSystemFont = !0);
      }
    }, i.prototype.assignFontColor = function (e, i) {
      var o = e.font;
      o instanceof cc.BitmapFont && !o._fntConfig.canTint && (i = cc.Color.WHITE), this._grayed && (i = t.ToolSet.toGrayed(i)), e.node.color = i;
    }, i.prototype.updateFont = function () {
      this.assignFont(this._label, this._realFont);
    }, i.prototype.updateFontColor = function () {
      this.assignFontColor(this._label, this._color);
    }, i.prototype.updateStrokeColor = function () {
      this._outline && (this._strokeColor || (this._strokeColor = new cc.Color()), this._grayed ? this._outline.color = t.ToolSet.toGrayed(this._strokeColor) : this._outline.color = this._strokeColor);
    }, i.prototype.updateShadowColor = function () {
      this._shadow && (this._shadowColor || (this._shadowColor = new cc.Color()), this._grayed ? this._shadow.color = t.ToolSet.toGrayed(this._shadowColor) : this._shadow.color = this._shadowColor);
    }, i.prototype.updateFontSize = function () {
      var t = this._label.font;

      if (t instanceof cc.BitmapFont) {
        var e = t._fntConfig;
        e.resizable ? this._label.fontSize = this._fontSize : this._label.fontSize = e.fontSize, this._label.lineHeight = e.fontSize + (this._leading + 4) * e.fontSize / this._label.fontSize;
      } else this._label.fontSize = this._fontSize, this._label.lineHeight = this._fontSize + this._leading;
    }, i.prototype.updateOverflow = function () {
      this._autoSize == t.AutoSizeType.Both ? this._label.overflow = cc.Label.Overflow.NONE : this._autoSize == t.AutoSizeType.Height ? (this._label.overflow = cc.Label.Overflow.RESIZE_HEIGHT, this._node.width = this._width) : this._autoSize == t.AutoSizeType.Shrink ? (this._label.overflow = cc.Label.Overflow.SHRINK, this._node.setContentSize(this._width, this._height)) : (this._label.overflow = cc.Label.Overflow.CLAMP, this._node.setContentSize(this._width, this._height));
    }, i.prototype.markSizeChanged = function () {
      this._underConstruct || this._autoSize != t.AutoSizeType.Both && this._autoSize != t.AutoSizeType.Height || this._sizeDirty || (this._node.emit(t.Event.SIZE_DELAY_CHANGE, this), this._sizeDirty = !0);
    }, i.prototype.onLabelSizeChanged = function () {
      this._sizeDirty = !1, this._underConstruct || this._autoSize != t.AutoSizeType.Both && this._autoSize != t.AutoSizeType.Height || (this._updatingSize = !0, this.setSize(this._node.width, this._node.height), this._updatingSize = !1);
    }, i.prototype.handleSizeChanged = function () {
      this._updatingSize || (this._autoSize == t.AutoSizeType.None || this._autoSize == t.AutoSizeType.Shrink ? this._node.setContentSize(this._width, this._height) : this._autoSize == t.AutoSizeType.Height && (this._node.width = this._width));
    }, i.prototype.handleGrayedChanged = function () {
      this.updateFontColor(), this.updateStrokeColor();
    }, i.prototype.getProp = function (i) {
      switch (i) {
        case t.ObjectPropID.Color:
          return this.color;

        case t.ObjectPropID.OutlineColor:
          return this.strokeColor;

        case t.ObjectPropID.FontSize:
          return this.fontSize;

        default:
          return e.prototype.getProp.call(this, i);
      }
    }, i.prototype.setProp = function (i, o) {
      switch (i) {
        case t.ObjectPropID.Color:
          this.color = o;
          break;

        case t.ObjectPropID.OutlineColor:
          this.strokeColor = o;
          break;

        case t.ObjectPropID.FontSize:
          this.fontSize = o;
          break;

        default:
          e.prototype.setProp.call(this, i, o);
      }
    }, i.prototype.setup_beforeAdd = function (t, i) {
      if (e.prototype.setup_beforeAdd.call(this, t, i), t.seek(i, 5), this.font = t.readS(), this.fontSize = t.readShort(), this.color = t.readColor(), this.align = t.readByte(), this.verticalAlign = t.readByte(), this.leading = t.readShort(), this.letterSpacing = t.readShort(), this._ubbEnabled = t.readBool(), this.autoSize = t.readByte(), this.underline = t.readBool(), this.italic = t.readBool(), this.bold = t.readBool(), this.singleLine = t.readBool(), t.readBool() && (this.strokeColor = t.readColor(), this.stroke = t.readFloat()), t.readBool()) {
        this.shadowColor = t.readColor();
        var o = t.readFloat(),
            n = t.readFloat();
        this.shadowOffset = new cc.Vec2(o, n);
      }

      t.readBool() && (this._templateVars = {});
    }, i.prototype.setup_afterAdd = function (t, i) {
      e.prototype.setup_afterAdd.call(this, t, i), t.seek(i, 6);
      var o = t.readS();
      null != o && (this.text = o);
    }, i;
  }(t.GObject);

  t.GTextField = e;
}(fgui || (fgui = {})), function (t) {
  var e = function (e) {
    function i() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return __extends(i, e), i.prototype.getSpriteFrame = function (i) {
      var o = t.UIPackage.getItemByURL(i);

      if (o) {
        if (o.load(), o.type == t.PackageItemType.Image) return o.asset;
        if (o.type == t.PackageItemType.MovieClip) return o.frames[0].texture;
      }

      return e.prototype.getSpriteFrame.call(this, i);
    }, i;
  }(cc.SpriteAtlas);

  t.RichTextImageAtlas = e;

  var i = new e(),
      o = function (e) {
    function o() {
      var i = e.call(this) || this;
      return i._node.name = "GRichTextField", i._touchDisabled = !1, i.linkUnderline = t.UIConfig.linkUnderline, i;
    }

    return __extends(o, e), o.prototype.createRenderer = function () {
      this._richText = this._node.addComponent(cc.RichText), this._richText.handleTouchEvent = !1, this.autoSize = t.AutoSizeType.None, this._richText.imageAtlas = i;
    }, Object.defineProperty(o.prototype, "align", {
      get: function get() {
        return this._richText.horizontalAlign;
      },
      set: function set(t) {
        this._richText.horizontalAlign = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "underline", {
      get: function get() {
        return this._underline;
      },
      set: function set(t) {
        this._underline != t && (this._underline = t, this.updateText());
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "bold", {
      get: function get() {
        return this._bold;
      },
      set: function set(t) {
        this._bold != t && (this._bold = t, this.updateText());
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "italic", {
      get: function get() {
        return this._italics;
      },
      set: function set(t) {
        this._italics != t && (this._italics = t, this.updateText());
      },
      enumerable: !1,
      configurable: !0
    }), o.prototype.markSizeChanged = function () {}, o.prototype.updateText = function () {
      var e = this._text;
      this._templateVars && (e = this.parseTemplate(e)), this._ubbEnabled && (t.UBBParser.inst.linkUnderline = this.linkUnderline, t.UBBParser.inst.linkColor = this.linkColor, e = t.UBBParser.inst.parse(e)), this._bold && (e = "<b>" + e + "</b>"), this._italics && (e = "<i>" + e + "</i>"), this._underline && (e = "<u>" + e + "</u>");
      var i = this._color;
      this._grayed && (i = t.ToolSet.toGrayed(i)), e = "<color=" + i.toHEX("#rrggbb") + ">" + e + "</color>", this._autoSize == t.AutoSizeType.Both ? (0 != this._richText.maxWidth && (this._richText.maxWidth = 0), this._richText.string = e, 0 != this.maxWidth && this._node.width > this.maxWidth && (this._richText.maxWidth = this.maxWidth)) : this._richText.string = e;
    }, o.prototype.updateFont = function () {
      this.assignFont(this._richText, this._realFont);
    }, o.prototype.updateFontColor = function () {
      this.assignFontColor(this._richText, this._color);
    }, o.prototype.updateFontSize = function () {
      var t = this._fontSize,
          e = this._richText.font;
      e instanceof cc.BitmapFont && (e._fntConfig.resizable || (t = e._fntConfig.fontSize)), this._richText.fontSize = t, this._richText.lineHeight = t + 2 * this._leading;
    }, o.prototype.updateOverflow = function () {
      this._autoSize == t.AutoSizeType.Both ? this._richText.maxWidth = 0 : this._richText.maxWidth = this._width;
    }, o.prototype.handleSizeChanged = function () {
      this._updatingSize || this._autoSize != t.AutoSizeType.Both && (this._richText.maxWidth = this._width);
    }, o;
  }(t.GTextField);

  t.GRichTextField = o;
}(fgui || (fgui = {})), function (t) {
  var e = function (e) {
    function i() {
      var i = e.call(this) || this;
      return i._node.name = "GRoot", i.opaque = !1, i._volumeScale = 1, i._popupStack = new Array(), i._justClosedPopups = new Array(), i._modalLayer = new t.GGraph(), i._modalLayer.setSize(i.width, i.height), i._modalLayer.drawRect(0, cc.Color.TRANSPARENT, t.UIConfig.modalLayerColor), i._modalLayer.addRelation(i, t.RelationType.Size), i._thisOnResized = i.onWinResize.bind(i), i._inputProcessor = i.node.addComponent(t.InputProcessor), i._inputProcessor._captureCallback = i.onTouchBegin_1, cc.view.on("canvas-resize", i._thisOnResized), i.onWinResize(), i;
    }

    return __extends(i, e), Object.defineProperty(i, "inst", {
      get: function get() {
        if (!i._inst) throw "Call GRoot.create first!";
        return i._inst;
      },
      enumerable: !1,
      configurable: !0
    }), i.create = function () {
      return i._inst = new i(), i._inst.node.parent = cc.director.getScene(), i._inst;
    }, i.prototype.onDestroy = function () {
      cc.view.off("canvas-resize", this._thisOnResized), this == i._inst && (i._inst = null);
    }, i.prototype.getTouchPosition = function (t) {
      return this._inputProcessor.getTouchPosition(t);
    }, Object.defineProperty(i.prototype, "touchTarget", {
      get: function get() {
        return this._inputProcessor.getTouchTarget();
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "inputProcessor", {
      get: function get() {
        return this._inputProcessor;
      },
      enumerable: !1,
      configurable: !0
    }), i.prototype.showWindow = function (t) {
      this.addChild(t), t.requestFocus(), t.x > this.width ? t.x = this.width - t.width : t.x + t.width < 0 && (t.x = 0), t.y > this.height ? t.y = this.height - t.height : t.y + t.height < 0 && (t.y = 0), this.adjustModalLayer();
    }, i.prototype.hideWindow = function (t) {
      t.hide();
    }, i.prototype.hideWindowImmediately = function (t) {
      t.parent == this && this.removeChild(t), this.adjustModalLayer();
    }, i.prototype.bringToFront = function (e) {
      var i,
          o = this.numChildren;

      for (i = this._modalLayer.parent && !e.modal ? this.getChildIndex(this._modalLayer) - 1 : o - 1; i >= 0; i--) {
        var n = this.getChildAt(i);
        if (n == e) return;
        if (n instanceof t.Window) break;
      }

      i >= 0 && this.setChildIndex(e, i);
    }, i.prototype.showModalWait = function (e) {
      null != t.UIConfig.globalModalWaiting && (null == this._modalWaitPane && (this._modalWaitPane = t.UIPackage.createObjectFromURL(t.UIConfig.globalModalWaiting)), this._modalWaitPane.setSize(this.width, this.height), this._modalWaitPane.addRelation(this, t.RelationType.Size), this.addChild(this._modalWaitPane), this._modalWaitPane.text = e);
    }, i.prototype.closeModalWait = function () {
      this._modalWaitPane && this._modalWaitPane.parent && this.removeChild(this._modalWaitPane);
    }, i.prototype.closeAllExceptModals = function () {
      for (var e = this._children.slice(), i = e.length, o = 0; o < i; o++) {
        var n = e[o];
        n instanceof t.Window && !n.modal && n.hide();
      }
    }, i.prototype.closeAllWindows = function () {
      for (var e = this._children.slice(), i = e.length, o = 0; o < i; o++) {
        var n = e[o];
        n instanceof t.Window && n.hide();
      }
    }, i.prototype.getTopWindow = function () {
      for (var e = this.numChildren - 1; e >= 0; e--) {
        var i = this.getChildAt(e);
        if (i instanceof t.Window) return i;
      }

      return null;
    }, Object.defineProperty(i.prototype, "modalLayer", {
      get: function get() {
        return this._modalLayer;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "hasModalWindow", {
      get: function get() {
        return null != this._modalLayer.parent;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "modalWaiting", {
      get: function get() {
        return this._modalWaitPane && this._modalWaitPane.node.activeInHierarchy;
      },
      enumerable: !1,
      configurable: !0
    }), i.prototype.getPopupPosition = function (e, i, o, n) {
      var r = n || new cc.Vec2(),
          s = 0,
          h = 0;

      if (i) {
        r = i.localToGlobal();
        var a = i.localToGlobal(i.width, i.height);
        s = a.x - r.x, h = a.y - r.y;
      } else r = this.getTouchPosition(), r = this.globalToLocal(r.x, r.y);

      return r.x + e.width > this.width && (r.x = r.x + s - e.width), r.y += h, ((void 0 === o || o === t.PopupDirection.Auto) && r.y + e.height > this.height || !1 === o || o === t.PopupDirection.Up) && (r.y = r.y - h - e.height - 1, r.y < 0 && (r.y = 0, r.x += s / 2)), r;
    }, i.prototype.showPopup = function (t, e, i) {
      if (this._popupStack.length > 0) {
        var o = this._popupStack.indexOf(t);

        if (-1 != o) for (var n = this._popupStack.length - 1; n >= o; n--) {
          this.removeChild(this._popupStack.pop());
        }
      }

      if (this._popupStack.push(t), e) for (var r = e; r;) {
        if (r.parent == this) {
          t.sortingOrder < r.sortingOrder && (t.sortingOrder = r.sortingOrder);
          break;
        }

        r = r.parent;
      }
      this.addChild(t), this.adjustModalLayer();
      var s = this.getPopupPosition(t, e, i);
      t.setPosition(s.x, s.y);
    }, i.prototype.togglePopup = function (t, e, i) {
      -1 == this._justClosedPopups.indexOf(t) && this.showPopup(t, e, i);
    }, i.prototype.hidePopup = function (t) {
      if (t) {
        var e = this._popupStack.indexOf(t);

        if (-1 != e) for (var i = this._popupStack.length - 1; i >= e; i--) {
          this.closePopup(this._popupStack.pop());
        }
      } else {
        for (i = this._popupStack.length - 1; i >= 0; i--) {
          this.closePopup(this._popupStack[i]);
        }

        this._popupStack.length = 0;
      }
    }, Object.defineProperty(i.prototype, "hasAnyPopup", {
      get: function get() {
        return 0 != this._popupStack.length;
      },
      enumerable: !1,
      configurable: !0
    }), i.prototype.closePopup = function (e) {
      e.parent && (e instanceof t.Window ? e.hide() : this.removeChild(e));
    }, i.prototype.showTooltips = function (e) {
      if (null == this._defaultTooltipWin) {
        var i = t.UIConfig.tooltipsWin;
        if (!i) return void console.error("UIConfig.tooltipsWin not defined");
        this._defaultTooltipWin = t.UIPackage.createObjectFromURL(i);
      }

      this._defaultTooltipWin.text = e, this.showTooltipsWin(this._defaultTooltipWin);
    }, i.prototype.showTooltipsWin = function (t) {
      this.hideTooltips(), this._tooltipWin = t;
      var e = this.getTouchPosition();
      e.x += 10, e.y += 20, this.globalToLocal(e.x, e.y, e), e.x + this._tooltipWin.width > this.width && (e.x = e.x - this._tooltipWin.width - 1, e.x < 0 && (e.x = 10)), e.y + this._tooltipWin.height > this.height && (e.y = e.y - this._tooltipWin.height - 1, e.y < 0 && (e.y = 10)), this._tooltipWin.setPosition(e.x, e.y), this.addChild(this._tooltipWin);
    }, i.prototype.hideTooltips = function () {
      this._tooltipWin && (this._tooltipWin.parent && this.removeChild(this._tooltipWin), this._tooltipWin = null);
    }, Object.defineProperty(i.prototype, "volumeScale", {
      get: function get() {
        return this._volumeScale;
      },
      set: function set(t) {
        this._volumeScale = t;
      },
      enumerable: !1,
      configurable: !0
    }), i.prototype.playOneShotSound = function (t, e) {
      void 0 === e && (e = 1), cc.audioEngine.play(t, !1, this._volumeScale * e);
    }, i.prototype.adjustModalLayer = function () {
      var e = this.numChildren;
      this._modalWaitPane && this._modalWaitPane.parent && this.setChildIndex(this._modalWaitPane, e - 1);

      for (var i = e - 1; i >= 0; i--) {
        var o = this.getChildAt(i);
        if (o instanceof t.Window && o.modal) return void (null == this._modalLayer.parent ? this.addChildAt(this._modalLayer, i) : this.setChildIndexBefore(this._modalLayer, i));
      }

      this._modalLayer.parent && this.removeChild(this._modalLayer);
    }, i.prototype.onTouchBegin_1 = function (t) {
      if (this._tooltipWin && this.hideTooltips(), this._justClosedPopups.length = 0, this._popupStack.length > 0) {
        for (var e = t.initiator; e && e != this;) {
          var i = this._popupStack.indexOf(e);

          if (-1 != i) {
            for (var o = this._popupStack.length - 1; o > i; o--) {
              var n = this._popupStack.pop();

              this.closePopup(n), this._justClosedPopups.push(n);
            }

            return;
          }

          e = e.findParent();
        }

        for (o = this._popupStack.length - 1; o >= 0; o--) {
          n = this._popupStack[o], this.closePopup(n), this._justClosedPopups.push(n);
        }

        this._popupStack.length = 0;
      }
    }, i.prototype.onWinResize = function () {
      var t = cc.view.getCanvasSize();
      t.width /= cc.view.getScaleX(), t.height /= cc.view.getScaleY();
      var e = cc.view.getViewportRect().origin;
      e.x = e.x / cc.view.getScaleX(), e.y = e.y / cc.view.getScaleY(), this.setSize(t.width, t.height), this._node.setPosition(-e.x, this._height - e.y), this.updateContentScaleLevel();
    }, i.prototype.handlePositionChanged = function () {}, i.prototype.updateContentScaleLevel = function () {
      var t = Math.max(cc.view.getScaleX(), cc.view.getScaleY());
      i.contentScaleLevel = t >= 3.5 ? 3 : t >= 2.5 ? 2 : t >= 1.5 ? 1 : 0;
    }, i.contentScaleLevel = 0, i;
  }(t.GComponent);

  t.GRoot = e;
}(fgui || (fgui = {})), function (t) {
  var e = function (e) {
    function o() {
      var t = e.call(this) || this;
      return t._node.name = "GScrollBar", t._dragOffset = new cc.Vec2(), t._scrollPerc = 0, t;
    }

    return __extends(o, e), o.prototype.setScrollPane = function (t, e) {
      this._target = t, this._vertical = e;
    }, o.prototype.setDisplayPerc = function (t) {
      this._vertical ? (this._fixedGripSize || (this._grip.height = Math.floor(t * this._bar.height)), this._grip.y = this._bar.y + (this._bar.height - this._grip.height) * this._scrollPerc) : (this._fixedGripSize || (this._grip.width = Math.floor(t * this._bar.width)), this._grip.x = this._bar.x + (this._bar.width - this._grip.width) * this._scrollPerc), this._grip.visible = 0 != t && 1 != t;
    }, o.prototype.setScrollPerc = function (t) {
      this._scrollPerc = t, this._vertical ? this._grip.y = this._bar.y + (this._bar.height - this._grip.height) * this._scrollPerc : this._grip.x = this._bar.x + (this._bar.width - this._grip.width) * this._scrollPerc;
    }, Object.defineProperty(o.prototype, "minSize", {
      get: function get() {
        return this._vertical ? (this._arrowButton1 ? this._arrowButton1.height : 0) + (this._arrowButton2 ? this._arrowButton2.height : 0) : (this._arrowButton1 ? this._arrowButton1.width : 0) + (this._arrowButton2 ? this._arrowButton2.width : 0);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "gripDragging", {
      get: function get() {
        return this._gripDragging;
      },
      enumerable: !1,
      configurable: !0
    }), o.prototype.constructExtension = function (e) {
      e.seek(0, 6), this._fixedGripSize = e.readBool(), this._grip = this.getChild("grip"), this._grip ? (this._bar = this.getChild("bar"), this._bar ? (this._arrowButton1 = this.getChild("arrow1"), this._arrowButton2 = this.getChild("arrow2"), this._grip.on(t.Event.TOUCH_BEGIN, this.onGripTouchDown, this), this._grip.on(t.Event.TOUCH_MOVE, this.onGripTouchMove, this), this._grip.on(t.Event.TOUCH_END, this.onGripTouchEnd, this), this._arrowButton1 && this._arrowButton1.on(t.Event.TOUCH_BEGIN, this.onClickArrow1, this), this._arrowButton2 && this._arrowButton2.on(t.Event.TOUCH_BEGIN, this.onClickArrow2, this), this.on(t.Event.TOUCH_BEGIN, this.onBarTouchBegin, this)) : console.error("\u9700\u8981\u5B9A\u4E49bar")) : console.error("\u9700\u8981\u5B9A\u4E49grip");
    }, o.prototype.onGripTouchDown = function (t) {
      t.stopPropagation(), t.captureTouch(), this._gripDragging = !0, this._target.updateScrollBarVisible(), this.globalToLocal(t.pos.x, t.pos.y, this._dragOffset), this._dragOffset.x -= this._grip.x, this._dragOffset.y -= this._grip.y;
    }, o.prototype.onGripTouchMove = function (t) {
      if (this.onStage) {
        var e = this.globalToLocal(t.pos.x, t.pos.y, i);

        if (this._vertical) {
          var o = e.y - this._dragOffset.y;

          this._target.setPercY((o - this._bar.y) / (this._bar.height - this._grip.height), !1);
        } else {
          var n = e.x - this._dragOffset.x;

          this._target.setPercX((n - this._bar.x) / (this._bar.width - this._grip.width), !1);
        }
      }
    }, o.prototype.onGripTouchEnd = function () {
      this.onStage && (this._gripDragging = !1, this._target.updateScrollBarVisible());
    }, o.prototype.onClickArrow1 = function (t) {
      t.stopPropagation(), this._vertical ? this._target.scrollUp() : this._target.scrollLeft();
    }, o.prototype.onClickArrow2 = function (t) {
      t.stopPropagation(), this._vertical ? this._target.scrollDown() : this._target.scrollRight();
    }, o.prototype.onBarTouchBegin = function (t) {
      var e = this._grip.globalToLocal(t.pos.x, t.pos.y, i);

      this._vertical ? e.y < 0 ? this._target.scrollUp(4) : this._target.scrollDown(4) : e.x < 0 ? this._target.scrollLeft(4) : this._target.scrollRight(4);
    }, o;
  }(t.GComponent);

  t.GScrollBar = e;
  var i = new cc.Vec2();
}(fgui || (fgui = {})), function (t) {
  var e = function (e) {
    function o() {
      var i = e.call(this) || this;
      return i._min = 0, i._max = 0, i._value = 0, i._barMaxWidth = 0, i._barMaxHeight = 0, i._barMaxWidthDelta = 0, i._barMaxHeightDelta = 0, i._clickPercent = 0, i._barStartX = 0, i._barStartY = 0, i.changeOnClick = !0, i.canDrag = !0, i._node.name = "GSlider", i._titleType = t.ProgressTitleType.Percent, i._value = 50, i._max = 100, i._clickPos = new cc.Vec2(), i;
    }

    return __extends(o, e), Object.defineProperty(o.prototype, "titleType", {
      get: function get() {
        return this._titleType;
      },
      set: function set(t) {
        this._titleType = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "wholeNumbers", {
      get: function get() {
        return this._wholeNumbers;
      },
      set: function set(t) {
        this._wholeNumbers != t && (this._wholeNumbers = t, this.update());
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "min", {
      get: function get() {
        return this._min;
      },
      set: function set(t) {
        this._min != t && (this._min = t, this.update());
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "max", {
      get: function get() {
        return this._max;
      },
      set: function set(t) {
        this._max != t && (this._max = t, this.update());
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "value", {
      get: function get() {
        return this._value;
      },
      set: function set(t) {
        this._value != t && (this._value = t, this.update());
      },
      enumerable: !1,
      configurable: !0
    }), o.prototype.update = function () {
      this.updateWithPercent((this._value - this._min) / (this._max - this._min));
    }, o.prototype.updateWithPercent = function (e, i) {
      if (e = t.ToolSet.clamp01(e), i) {
        var o = t.ToolSet.clamp(this._min + (this._max - this._min) * e, this._min, this._max);
        this._wholeNumbers && (o = Math.round(o), e = t.ToolSet.clamp01((o - this._min) / (this._max - this._min))), o != this._value && (this._value = o, this._node.emit(t.Event.STATUS_CHANGED, this));
      }

      if (this._titleObject) switch (this._titleType) {
        case t.ProgressTitleType.Percent:
          this._titleObject.text = Math.floor(100 * e) + "%";
          break;

        case t.ProgressTitleType.ValueAndMax:
          this._titleObject.text = this._value + "/" + this._max;
          break;

        case t.ProgressTitleType.Value:
          this._titleObject.text = "" + this._value;
          break;

        case t.ProgressTitleType.Max:
          this._titleObject.text = "" + this._max;
      }
      var n = this.width - this._barMaxWidthDelta,
          r = this.height - this._barMaxHeightDelta;
      this._reverse ? (this._barObjectH && (this._barObjectH.width = Math.round(n * e), this._barObjectH.x = this._barStartX + (n - this._barObjectH.width)), this._barObjectV && (this._barObjectV.height = Math.round(r * e), this._barObjectV.y = this._barStartY + (r - this._barObjectV.height))) : (this._barObjectH && (this._barObjectH.width = Math.round(n * e)), this._barObjectV && (this._barObjectV.height = Math.round(r * e)));
    }, o.prototype.constructExtension = function (e) {
      e.seek(0, 6), this._titleType = e.readByte(), this._reverse = e.readBool(), e.version >= 2 && (this._wholeNumbers = e.readBool(), this.changeOnClick = e.readBool()), this._titleObject = this.getChild("title"), this._barObjectH = this.getChild("bar"), this._barObjectV = this.getChild("bar_v"), this._gripObject = this.getChild("grip"), this._barObjectH && (this._barMaxWidth = this._barObjectH.width, this._barMaxWidthDelta = this.width - this._barMaxWidth, this._barStartX = this._barObjectH.x), this._barObjectV && (this._barMaxHeight = this._barObjectV.height, this._barMaxHeightDelta = this.height - this._barMaxHeight, this._barStartY = this._barObjectV.y), this._gripObject && (this._gripObject.on(t.Event.TOUCH_BEGIN, this.onGripTouchBegin, this), this._gripObject.on(t.Event.TOUCH_MOVE, this.onGripTouchMove, this)), this._node.on(t.Event.TOUCH_BEGIN, this.onBarTouchBegin, this);
    }, o.prototype.handleSizeChanged = function () {
      e.prototype.handleSizeChanged.call(this), this._barObjectH && (this._barMaxWidth = this.width - this._barMaxWidthDelta), this._barObjectV && (this._barMaxHeight = this.height - this._barMaxHeightDelta), this._underConstruct || this.update();
    }, o.prototype.setup_afterAdd = function (t, i) {
      e.prototype.setup_afterAdd.call(this, t, i), t.seek(i, 6) && t.readByte() == this.packageItem.objectType ? (this._value = t.readInt(), this._max = t.readInt(), t.version >= 2 && (this._min = t.readInt()), this.update()) : this.update();
    }, o.prototype.onGripTouchBegin = function (e) {
      this.canDrag = !0, e.stopPropagation(), e.captureTouch(), this._clickPos = this.globalToLocal(e.pos.x, e.pos.y), this._clickPercent = t.ToolSet.clamp01((this._value - this._min) / (this._max - this._min));
    }, o.prototype.onGripTouchMove = function (t) {
      if (this.canDrag) {
        var e,
            o = this.globalToLocal(t.pos.x, t.pos.y, i),
            n = o.x - this._clickPos.x,
            r = o.y - this._clickPos.y;
        this._reverse && (n = -n, r = -r), e = this._barObjectH ? this._clickPercent + n / this._barMaxWidth : this._clickPercent + r / this._barMaxHeight, this.updateWithPercent(e, !0);
      }
    }, o.prototype.onBarTouchBegin = function (e) {
      if (this.changeOnClick) {
        var o = this._gripObject.globalToLocal(e.pos.x, e.pos.y, i),
            n = t.ToolSet.clamp01((this._value - this._min) / (this._max - this._min)),
            r = 0;

        null != this._barObjectH && (r = (o.x - this._gripObject.width / 2) / this._barMaxWidth), null != this._barObjectV && (r = (o.y - this._gripObject.height / 2) / this._barMaxHeight), this._reverse ? n -= r : n += r, this.updateWithPercent(n, !0);
      }
    }, o;
  }(t.GComponent);

  t.GSlider = e;
  var i = new cc.Vec2();
}(fgui || (fgui = {})), function (t) {
  var e = function (e) {
    function o() {
      var t = e.call(this) || this;
      return t._node.name = "GTextInput", t._touchDisabled = !1, t;
    }

    return __extends(o, e), o.prototype.createRenderer = function () {
      this._editBox = this._node.addComponent(i), this._editBox.maxLength = -1, this._editBox._updateTextLabel(), this._node.on("text-changed", this.onTextChanged, this), this.on(t.Event.TOUCH_END, this.onTouchEnd1, this), this.autoSize = t.AutoSizeType.None;
    }, Object.defineProperty(o.prototype, "editable", {
      get: function get() {
        return this._editBox.enabled;
      },
      set: function set(t) {
        this._editBox.enabled = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "maxLength", {
      get: function get() {
        return this._editBox.maxLength;
      },
      set: function set(t) {
        0 == t && (t = -1), this._editBox.maxLength = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "promptText", {
      get: function get() {
        return this._promptText;
      },
      set: function set(e) {
        this._promptText = e;
        var i = !this._editBox.placeholderLabel;

        if (this._editBox._updatePlaceholderLabel(), i && this.assignFont(this._editBox.placeholderLabel, this._realFont), this._editBox.placeholderLabel.string = t.UBBParser.inst.parse(this._promptText, !0), t.UBBParser.inst.lastColor) {
          var o = this._editBox.placeholderLabel.node.color;
          o || (o = new cc.Color()), o.fromHEX(t.UBBParser.inst.lastColor), this.assignFontColor(this._editBox.placeholderLabel, o);
        } else this.assignFontColor(this._editBox.placeholderLabel, this._color);

        t.UBBParser.inst.lastSize ? this._editBox.placeholderLabel.fontSize = parseInt(t.UBBParser.inst.lastSize) : this._editBox.placeholderLabel.fontSize = this._fontSize;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "restrict", {
      get: function get() {
        return "";
      },
      set: function set() {},
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "password", {
      get: function get() {
        return this._editBox.inputFlag == cc.EditBox.InputFlag.PASSWORD;
      },
      set: function set(t) {
        this._editBox.inputFlag = t ? cc.EditBox.InputFlag.PASSWORD : cc.EditBox.InputFlag.DEFAULT;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "align", {
      get: function get() {
        return this._editBox.textLabel.horizontalAlign;
      },
      set: function set(t) {
        this._editBox.textLabel.horizontalAlign = t, this._editBox.placeholderLabel && (this._editBox.placeholderLabel.horizontalAlign = t);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "verticalAlign", {
      get: function get() {
        return this._editBox.textLabel.verticalAlign;
      },
      set: function set(t) {
        this._editBox.textLabel.verticalAlign = t, this._editBox.placeholderLabel && (this._editBox.placeholderLabel.verticalAlign = t);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "singleLine", {
      get: function get() {
        return this._editBox.inputMode != cc.EditBox.InputMode.ANY;
      },
      set: function set(t) {
        this._editBox.inputMode = t ? cc.EditBox.InputMode.SINGLE_LINE : cc.EditBox.InputMode.ANY;
      },
      enumerable: !1,
      configurable: !0
    }), o.prototype.requestFocus = function () {
      this._editBox.focus();
    }, o.prototype.markSizeChanged = function () {}, o.prototype.updateText = function () {
      var e = this._text;
      this._templateVars && (e = this.parseTemplate(e)), this._ubbEnabled && (e = t.UBBParser.inst.parse(t.ToolSet.encodeHTML(e), !0)), this._editBox.string = e;
    }, o.prototype.updateFont = function () {
      this.assignFont(this._editBox.textLabel, this._realFont), this._editBox.placeholderLabel && this.assignFont(this._editBox.placeholderLabel, this._realFont);
    }, o.prototype.updateFontColor = function () {
      this.assignFontColor(this._editBox.textLabel, this._color);
    }, o.prototype.updateFontSize = function () {
      this._editBox.textLabel.fontSize = this._fontSize, this._editBox.textLabel.lineHeight = this._fontSize + this._leading, this._editBox.placeholderLabel && (this._editBox.placeholderLabel.fontSize = this._editBox.textLabel.fontSize);
    }, o.prototype.updateOverflow = function () {}, o.prototype.onTextChanged = function () {
      this._text = this._editBox.string;
    }, o.prototype.onTouchEnd1 = function (t) {
      this._editBox.openKeyboard(t.touch);
    }, o.prototype.setup_beforeAdd = function (t, i) {
      e.prototype.setup_beforeAdd.call(this, t, i), t.seek(i, 4);
      var o = t.readS();
      null != o && (this.promptText = o), null != (o = t.readS()) && (this.restrict = o);
      var n = t.readInt();

      if (0 != n && (this.maxLength = n), n = t.readInt(), t.readBool() && (this.password = !0), this._editBox.placeholderLabel) {
        var r = this._editBox.textLabel.horizontalAlign;
        this._editBox.placeholderLabel.horizontalAlign = r;
        var s = this._editBox.textLabel.verticalAlign;
        this._editBox.placeholderLabel.verticalAlign = s;
      }
    }, o;
  }(t.GTextField);

  t.GTextInput = e;

  var i = function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return __extends(e, t), e.prototype._registerEvent = function () {}, e.prototype._syncSize = function () {
      var t = this.node.getContentSize();
      this._impl.setSize(t.width, t.height), this.textLabel && this.textLabel.node.setContentSize(t.width, t.height), this.placeholderLabel && this.placeholderLabel.node.setContentSize(t.width, t.height);
    }, e.prototype.openKeyboard = function () {
      var t = this._impl;
      t && t.beginEditing();
    }, e;
  }(cc.EditBox);
}(fgui || (fgui = {})), function (t) {
  var e = function (e) {
    function o() {
      var i = e.call(this) || this;
      return i._indent = 15, i._rootNode = new t.GTreeNode(!0), i._rootNode._setTree(i), i._rootNode.expanded = !0, i;
    }

    return __extends(o, e), Object.defineProperty(o.prototype, "rootNode", {
      get: function get() {
        return this._rootNode;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "indent", {
      get: function get() {
        return this._indent;
      },
      set: function set(t) {
        this._indent = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "clickToExpand", {
      get: function get() {
        return this._clickToExpand;
      },
      set: function set(t) {
        this._clickToExpand = t;
      },
      enumerable: !1,
      configurable: !0
    }), o.prototype.getSelectedNode = function () {
      return -1 != this.selectedIndex ? this.getChildAt(this.selectedIndex)._treeNode : null;
    }, o.prototype.getSelectedNodes = function (t) {
      t || (t = new Array()), i.length = 0, e.prototype.getSelection.call(this, i);

      for (var o = i.length, n = new Array(), r = 0; r < o; r++) {
        var s = this.getChildAt(i[r])._treeNode;

        n.push(s);
      }

      return n;
    }, o.prototype.selectNode = function (t, e) {
      for (var i = t.parent; i && i != this._rootNode;) {
        i.expanded = !0, i = i.parent;
      }

      t._cell && this.addSelection(this.getChildIndex(t._cell), e);
    }, o.prototype.unselectNode = function (t) {
      t._cell && this.removeSelection(this.getChildIndex(t._cell));
    }, o.prototype.expandAll = function (t) {
      t || (t = this._rootNode), t.expanded = !0;

      for (var e = t.numChildren, i = 0; i < e; i++) {
        var o = t.getChildAt(i);
        o.isFolder && this.expandAll(o);
      }
    }, o.prototype.collapseAll = function (t) {
      t || (t = this._rootNode), t != this._rootNode && (t.expanded = !1);

      for (var e = t.numChildren, i = 0; i < e; i++) {
        var o = t.getChildAt(i);
        o.isFolder && this.collapseAll(o);
      }
    }, o.prototype.createCell = function (e) {
      var i = this.getFromPool(e._resURL);
      if (!(i instanceof t.GComponent)) throw new Error("cannot create tree node object.");
      i._treeNode = e, e._cell = i;
      var o,
          n = i.getChild("indent");
      n && (n.width = (e.level - 1) * this._indent), (o = i.getController("expanded")) && (o.on(t.Event.STATUS_CHANGED, this.__expandedStateChanged, this), o.selectedIndex = e.expanded ? 1 : 0), (o = i.getController("leaf")) && (o.selectedIndex = e.isFolder ? 0 : 1), e.isFolder && e._cell.on(t.Event.TOUCH_BEGIN, this.__cellMouseDown, this), this.treeNodeRender && this.treeNodeRender(e, i);
    }, o.prototype._afterInserted = function (t) {
      t._cell || this.createCell(t);
      var e = this.getInsertIndexForNode(t);
      this.addChildAt(t._cell, e), this.treeNodeRender && this.treeNodeRender(t, t._cell), t.isFolder && t.expanded && this.checkChildren(t, e);
    }, o.prototype.getInsertIndexForNode = function (t) {
      var e = t.getPrevSibling();
      null == e && (e = t.parent);

      for (var i = this.getChildIndex(e._cell) + 1, o = t.level, n = this.numChildren, r = i; r < n && !(this.getChildAt(r)._treeNode.level <= o); r++) {
        i++;
      }

      return i;
    }, o.prototype._afterRemoved = function (t) {
      this.removeNode(t);
    }, o.prototype._afterExpanded = function (t) {
      if (t != this._rootNode) {
        if (null != this.treeNodeWillExpand && this.treeNodeWillExpand(t, !0), null != t._cell) {
          this.treeNodeRender && this.treeNodeRender(t, t._cell);

          var e = t._cell.getController("expanded");

          e && (e.selectedIndex = 1), t._cell.parent && this.checkChildren(t, this.getChildIndex(t._cell));
        }
      } else this.checkChildren(this._rootNode, 0);
    }, o.prototype._afterCollapsed = function (t) {
      if (t != this._rootNode) {
        if (this.treeNodeWillExpand && this.treeNodeWillExpand(t, !1), null != t._cell) {
          this.treeNodeRender && this.treeNodeRender(t, t._cell);

          var e = t._cell.getController("expanded");

          e && (e.selectedIndex = 0), t._cell.parent && this.hideFolderNode(t);
        }
      } else this.checkChildren(this._rootNode, 0);
    }, o.prototype._afterMoved = function (t) {
      var e,
          i = this.getChildIndex(t._cell);
      e = t.isFolder ? this.getFolderEndIndex(i, t.level) : i + 1;
      var o,
          n,
          r = this.getInsertIndexForNode(t),
          s = e - i;
      if (r < i) for (o = 0; o < s; o++) {
        n = this.getChildAt(i + o), this.setChildIndex(n, r + o);
      } else for (o = 0; o < s; o++) {
        n = this.getChildAt(i), this.setChildIndex(n, r);
      }
    }, o.prototype.getFolderEndIndex = function (t, e) {
      for (var i = this.numChildren, o = t + 1; o < i; o++) {
        if (this.getChildAt(o)._treeNode.level <= e) return o;
      }

      return i;
    }, o.prototype.checkChildren = function (t, e) {
      for (var i = t.numChildren, o = 0; o < i; o++) {
        e++;
        var n = t.getChildAt(o);
        null == n._cell && this.createCell(n), n._cell.parent || this.addChildAt(n._cell, e), n.isFolder && n.expanded && (e = this.checkChildren(n, e));
      }

      return e;
    }, o.prototype.hideFolderNode = function (t) {
      for (var e = t.numChildren, i = 0; i < e; i++) {
        var o = t.getChildAt(i);
        o._cell && this.removeChild(o._cell), o.isFolder && o.expanded && this.hideFolderNode(o);
      }
    }, o.prototype.removeNode = function (t) {
      if (t._cell && (t._cell.parent && this.removeChild(t._cell), this.returnToPool(t._cell), t._cell._treeNode = null, t._cell = null), t.isFolder) for (var e = t.numChildren, i = 0; i < e; i++) {
        var o = t.getChildAt(i);
        this.removeNode(o);
      }
    }, o.prototype.__cellMouseDown = function (e) {
      var i = t.GObject.cast(e.currentTarget)._treeNode;

      this._expandedStatusInEvt = i.expanded;
    }, o.prototype.__expandedStateChanged = function (t) {
      t.parent._treeNode.expanded = 1 == t.selectedIndex;
    }, o.prototype.dispatchItemEvent = function (t, i) {
      if (0 != this._clickToExpand) {
        var o = t._treeNode;
        o && this._expandedStatusInEvt == o.expanded && (2 == this._clickToExpand || (o.expanded = !o.expanded));
      }

      e.prototype.dispatchItemEvent.call(this, t, i);
    }, o.prototype.setup_beforeAdd = function (t, i) {
      e.prototype.setup_beforeAdd.call(this, t, i), t.seek(i, 9), this._indent = t.readInt(), this._clickToExpand = t.readByte();
    }, o.prototype.readItems = function (e) {
      var i,
          o,
          n,
          r,
          s,
          h,
          a,
          l = 0;

      for (i = e.readShort(), o = 0; o < i; o++) {
        if (n = e.readShort(), n += e.position, null != (r = e.readS()) || (r = this.defaultItem)) {
          s = e.readBool(), a = e.readByte();
          var c = new t.GTreeNode(s, r);
          if (c.expanded = !0, 0 == o) this._rootNode.addChild(c);else if (a > l) h.addChild(c);else if (a < l) {
            for (var u = a; u <= l; u++) {
              h = h.parent;
            }

            h.addChild(c);
          } else h.parent.addChild(c);
          h = c, l = a, this.setupItem(e, c.cell), e.position = n;
        } else e.position = n;
      }
    }, o;
  }(t.GList);

  t.GTree = e;
  var i = new Array();
}(fgui || (fgui = {})), function (t) {
  var e = function () {
    function t(t, e) {
      this._level = 0, this._resURL = e, t && (this._children = new Array());
    }

    return Object.defineProperty(t.prototype, "expanded", {
      get: function get() {
        return this._expanded;
      },
      set: function set(t) {
        null != this._children && this._expanded != t && (this._expanded = t, this._tree && (this._expanded ? this._tree._afterExpanded(this) : this._tree._afterCollapsed(this)));
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "isFolder", {
      get: function get() {
        return null != this._children;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "parent", {
      get: function get() {
        return this._parent;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "text", {
      get: function get() {
        return this._cell ? this._cell.text : null;
      },
      set: function set(t) {
        this._cell && (this._cell.text = t);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "icon", {
      get: function get() {
        return this._cell ? this._cell.icon : null;
      },
      set: function set(t) {
        this._cell && (this._cell.icon = t);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "cell", {
      get: function get() {
        return this._cell;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "level", {
      get: function get() {
        return this._level;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype._setLevel = function (t) {
      this._level = t;
    }, t.prototype.addChild = function (t) {
      return this.addChildAt(t, this._children.length), t;
    }, t.prototype.addChildAt = function (t, e) {
      if (!t) throw new Error("child is null");
      var i = this._children.length;
      if (e >= 0 && e <= i) return t._parent == this ? this.setChildIndex(t, e) : (t._parent && t._parent.removeChild(t), e == this._children.length ? this._children.push(t) : this._children.splice(e, 0, t), t._parent = this, t._level = this._level + 1, t._setTree(this._tree), (this._tree && this == this._tree.rootNode || this._cell && this._cell.parent && this._expanded) && this._tree._afterInserted(t)), t;
      throw new RangeError("Invalid child index");
    }, t.prototype.removeChild = function (t) {
      var e = this._children.indexOf(t);

      return -1 != e && this.removeChildAt(e), t;
    }, t.prototype.removeChildAt = function (t) {
      if (t >= 0 && t < this.numChildren) {
        var e = this._children[t];
        return this._children.splice(t, 1), e._parent = null, this._tree && (e._setTree(null), this._tree._afterRemoved(e)), e;
      }

      throw "Invalid child index";
    }, t.prototype.removeChildren = function (t, e) {
      t = t || 0, null == e && (e = -1), (e < 0 || e >= this.numChildren) && (e = this.numChildren - 1);

      for (var i = t; i <= e; ++i) {
        this.removeChildAt(t);
      }
    }, t.prototype.getChildAt = function (t) {
      if (t >= 0 && t < this.numChildren) return this._children[t];
      throw "Invalid child index";
    }, t.prototype.getChildIndex = function (t) {
      return this._children.indexOf(t);
    }, t.prototype.getPrevSibling = function () {
      if (null == this._parent) return null;

      var t = this._parent._children.indexOf(this);

      return t <= 0 ? null : this._parent._children[t - 1];
    }, t.prototype.getNextSibling = function () {
      if (null == this._parent) return null;

      var t = this._parent._children.indexOf(this);

      return t < 0 || t >= this._parent._children.length - 1 ? null : this._parent._children[t + 1];
    }, t.prototype.setChildIndex = function (t, e) {
      var i = this._children.indexOf(t);

      if (-1 == i) throw "Not a child of this container";
      var o = this._children.length;
      e < 0 ? e = 0 : e > o && (e = o), i != e && (this._children.splice(i, 1), this._children.splice(e, 0, t), (this._tree && this == this._tree.rootNode || this._cell && this._cell.parent && this._expanded) && this._tree._afterMoved(t));
    }, t.prototype.swapChildren = function (t, e) {
      var i = this._children.indexOf(t),
          o = this._children.indexOf(e);

      if (-1 == i || -1 == o) throw "Not a child of this container";
      this.swapChildrenAt(i, o);
    }, t.prototype.swapChildrenAt = function (t, e) {
      var i = this._children[t],
          o = this._children[e];
      this.setChildIndex(i, e), this.setChildIndex(o, t);
    }, Object.defineProperty(t.prototype, "numChildren", {
      get: function get() {
        return this._children.length;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.expandToRoot = function () {
      for (var t = this; t;) {
        t.expanded = !0, t = t.parent;
      }
    }, Object.defineProperty(t.prototype, "tree", {
      get: function get() {
        return this._tree;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype._setTree = function (t) {
      if (this._tree = t, this._tree && this._tree.treeNodeWillExpand && this._expanded && this._tree.treeNodeWillExpand(this, !0), this._children) for (var e = this._children.length, i = 0; i < e; i++) {
        var o = this._children[i];
        o._level = this._level + 1, o._setTree(t);
      }
    }, t;
  }();

  t.GTreeNode = e;
}(fgui || (fgui = {})), function (t) {
  var e = function () {
    function t() {
      this.left = 0, this.right = 0, this.top = 0, this.bottom = 0;
    }

    return t.prototype.copy = function (t) {
      this.top = t.top, this.bottom = t.bottom, this.left = t.left, this.right = t.right;
    }, t.prototype.isNone = function () {
      return 0 == this.left && 0 == this.right && 0 == this.top && 0 == this.bottom;
    }, t;
  }();

  t.Margin = e;
}(fgui || (fgui = {})), function (t) {
  var e = function () {
    function e() {
      this.width = 0, this.height = 0;
    }

    return e.prototype.load = function () {
      return this.owner.getItemAsset(this);
    }, e.prototype.getBranch = function () {
      if (this.branches && -1 != this.owner._branchIndex) {
        var t = this.branches[this.owner._branchIndex];
        if (t) return this.owner.getItemById(t);
      }

      return this;
    }, e.prototype.getHighResolution = function () {
      if (this.highResolution && t.GRoot.contentScaleLevel > 0) {
        var e = this.highResolution[t.GRoot.contentScaleLevel - 1];
        if (e) return this.owner.getItemById(e);
      }

      return this;
    }, e.prototype.toString = function () {
      return this.name;
    }, e;
  }();

  t.PackageItem = e;
}(fgui || (fgui = {})), function (t) {
  var e = function () {
    function e(e) {
      if (!e && !(e = t.UIConfig.popupMenu)) throw "UIConfig.popupMenu not defined";
      this._contentPane = t.UIPackage.createObjectFromURL(e), this._contentPane.on(t.Event.DISPLAY, this.onDisplay, this), this._list = this._contentPane.getChild("list"), this._list.removeChildrenToPool(), this._list.addRelation(this._contentPane, t.RelationType.Width), this._list.removeRelation(this._contentPane, t.RelationType.Height), this._contentPane.addRelation(this._list, t.RelationType.Height), this._list.on(t.Event.CLICK_ITEM, this.onClickItem, this);
    }

    return e.prototype.dispose = function () {
      this._contentPane.dispose();
    }, e.prototype.addItem = function (t, e) {
      var i = this._list.addItemFromPool();

      i.title = t, i.data = e, i.grayed = !1;
      var o = i.getController("checked");
      return o && (o.selectedIndex = 0), i;
    }, e.prototype.addItemAt = function (t, e, i) {
      var o = this._list.getFromPool();

      this._list.addChildAt(o, e), o.title = t, o.data = i, o.grayed = !1;
      var n = o.getController("checked");
      return n && (n.selectedIndex = 0), o;
    }, e.prototype.addSeperator = function () {
      if (null == t.UIConfig.popupMenu_seperator) throw "UIConfig.popupMenu_seperator not defined";
      this.list.addItemFromPool(t.UIConfig.popupMenu_seperator);
    }, e.prototype.getItemName = function (t) {
      return this._list.getChildAt(t).name;
    }, e.prototype.setItemText = function (t, e) {
      this._list.getChild(t).title = e;
    }, e.prototype.setItemVisible = function (t, e) {
      var i = this._list.getChild(t);

      i.visible != e && (i.visible = e, this._list.setBoundsChangedFlag());
    }, e.prototype.setItemGrayed = function (t, e) {
      this._list.getChild(t).grayed = e;
    }, e.prototype.setItemCheckable = function (t, e) {
      var i = this._list.getChild(t).getController("checked");

      i && (e ? 0 == i.selectedIndex && (i.selectedIndex = 1) : i.selectedIndex = 0);
    }, e.prototype.setItemChecked = function (t, e) {
      var i = this._list.getChild(t).getController("checked");

      i && (i.selectedIndex = e ? 2 : 1);
    }, e.prototype.isItemChecked = function (t) {
      var e = this._list.getChild(t).getController("checked");

      return !!e && 2 == e.selectedIndex;
    }, e.prototype.removeItem = function (t) {
      var e = this._list.getChild(t);

      if (e) {
        var i = this._list.getChildIndex(e);

        return this._list.removeChildToPoolAt(i), !0;
      }

      return !1;
    }, e.prototype.clearItems = function () {
      this._list.removeChildrenToPool();
    }, Object.defineProperty(e.prototype, "itemCount", {
      get: function get() {
        return this._list.numChildren;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "contentPane", {
      get: function get() {
        return this._contentPane;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "list", {
      get: function get() {
        return this._list;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.show = function (e, i) {
      void 0 === e && (e = null), (null != e ? e.root : t.GRoot.inst).showPopup(this.contentPane, e instanceof t.GRoot ? null : e, i);
    }, e.prototype.onClickItem = function (t, e) {
      var i = this;

      this._list._partner.callLater(function () {
        i.onClickItem2(t, e);
      }, .1);
    }, e.prototype.onClickItem2 = function (e, i) {
      if (e instanceof t.GButton) if (e.grayed) this._list.selectedIndex = -1;else {
        var o = e.getController("checked");
        o && 0 != o.selectedIndex && (1 == o.selectedIndex ? o.selectedIndex = 2 : o.selectedIndex = 1), this._contentPane.parent.hidePopup(this.contentPane), e.data instanceof Function && e.data(e, i);
      }
    }, e.prototype.onDisplay = function () {
      this._list.selectedIndex = -1, this._list.resizeToFit(1e5, 10);
    }, e;
  }();

  t.PopupMenu = e;
}(fgui || (fgui = {})), function (t) {
  var e = function () {
    function e(t) {
      this._owner = t, this._defs = new Array();
    }

    return Object.defineProperty(e.prototype, "owner", {
      get: function get() {
        return this._owner;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "target", {
      get: function get() {
        return this._target;
      },
      set: function set(t) {
        this._target != t && (this._target && this.releaseRefTarget(this._target), this._target = t, this._target && this.addRefTarget(this._target));
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.add = function (e, i) {
      if (e == t.RelationType.Size) return this.add(t.RelationType.Width, i), void this.add(t.RelationType.Height, i);

      for (var o = this._defs.length, n = 0; n < o; n++) {
        if (this._defs[n].type == e) return;
      }

      this.internalAdd(e, i);
    }, e.prototype.internalAdd = function (e, o) {
      if (e == t.RelationType.Size) return this.internalAdd(t.RelationType.Width, o), void this.internalAdd(t.RelationType.Height, o);
      var n = new i();
      n.percent = o, n.type = e, n.axis = e <= t.RelationType.Right_Right || e == t.RelationType.Width || e >= t.RelationType.LeftExt_Left && e <= t.RelationType.RightExt_Right ? 0 : 1, this._defs.push(n);
    }, e.prototype.remove = function (e) {
      if (e == t.RelationType.Size) return this.remove(t.RelationType.Width), void this.remove(t.RelationType.Height);

      for (var i = this._defs.length, o = 0; o < i; o++) {
        if (this._defs[o].type == e) {
          this._defs.splice(o, 1);

          break;
        }
      }
    }, e.prototype.copyFrom = function (t) {
      this.target = t.target, this._defs.length = 0;

      for (var e = t._defs.length, o = 0; o < e; o++) {
        var n = t._defs[o],
            r = new i();
        r.copyFrom(n), this._defs.push(r);
      }
    }, e.prototype.dispose = function () {
      this._target && (this.releaseRefTarget(this._target), this._target = null);
    }, Object.defineProperty(e.prototype, "isEmpty", {
      get: function get() {
        return 0 == this._defs.length;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.applyOnSelfResized = function (e, i, o) {
      for (var n = this._owner.x, r = this._owner.y, s = this._defs.length, h = 0; h < s; h++) {
        switch (this._defs[h].type) {
          case t.RelationType.Center_Center:
            this._owner.x -= (.5 - (o ? this._owner.pivotX : 0)) * e;
            break;

          case t.RelationType.Right_Center:
          case t.RelationType.Right_Left:
          case t.RelationType.Right_Right:
            this._owner.x -= (1 - (o ? this._owner.pivotX : 0)) * e;
            break;

          case t.RelationType.Middle_Middle:
            this._owner.y -= (.5 - (o ? this._owner.pivotY : 0)) * i;
            break;

          case t.RelationType.Bottom_Middle:
          case t.RelationType.Bottom_Top:
          case t.RelationType.Bottom_Bottom:
            this._owner.y -= (1 - (o ? this._owner.pivotY : 0)) * i;
        }
      }

      if ((n != this._owner.x || r != this._owner.y) && (n = this._owner.x - n, r = this._owner.y - r, this._owner.updateGearFromRelations(1, n, r), this._owner.parent)) {
        var a = this._owner.parent._transitions.length;
        if (a > 0) for (h = 0; h < a; ++h) {
          this._owner.parent._transitions[h].updateFromRelations(this._owner.id, n, r);
        }
      }
    }, e.prototype.applyOnXYChanged = function (e, i, o) {
      var n;

      switch (e.type) {
        case t.RelationType.Left_Left:
        case t.RelationType.Left_Center:
        case t.RelationType.Left_Right:
        case t.RelationType.Center_Center:
        case t.RelationType.Right_Left:
        case t.RelationType.Right_Center:
        case t.RelationType.Right_Right:
          this._owner.x += i;
          break;

        case t.RelationType.Top_Top:
        case t.RelationType.Top_Middle:
        case t.RelationType.Top_Bottom:
        case t.RelationType.Middle_Middle:
        case t.RelationType.Bottom_Top:
        case t.RelationType.Bottom_Middle:
        case t.RelationType.Bottom_Bottom:
          this._owner.y += o;
          break;

        case t.RelationType.Width:
        case t.RelationType.Height:
          break;

        case t.RelationType.LeftExt_Left:
        case t.RelationType.LeftExt_Right:
          this._owner != this._target.parent ? (n = this._owner.xMin, this._owner.width = this._owner._rawWidth - i, this._owner.xMin = n + i) : this._owner.width = this._owner._rawWidth - i;
          break;

        case t.RelationType.RightExt_Left:
        case t.RelationType.RightExt_Right:
          this._owner != this._target.parent ? (n = this._owner.xMin, this._owner.width = this._owner._rawWidth + i, this._owner.xMin = n) : this._owner.width = this._owner._rawWidth + i;
          break;

        case t.RelationType.TopExt_Top:
        case t.RelationType.TopExt_Bottom:
          this._owner != this._target.parent ? (n = this._owner.yMin, this._owner.height = this._owner._rawHeight - o, this._owner.yMin = n + o) : this._owner.height = this._owner._rawHeight - o;
          break;

        case t.RelationType.BottomExt_Top:
        case t.RelationType.BottomExt_Bottom:
          this._owner != this._target.parent ? (n = this._owner.yMin, this._owner.height = this._owner._rawHeight + o, this._owner.yMin = n) : this._owner.height = this._owner._rawHeight + o;
      }
    }, e.prototype.applyOnSizeChanged = function (e) {
      var i,
          o,
          n = 0,
          r = 0,
          s = 0;

      switch (0 == e.axis ? (this._target != this._owner.parent && (n = this._target.x, this._target.pivotAsAnchor && (r = this._target.pivotX)), e.percent ? 0 != this._targetWidth && (s = this._target._width / this._targetWidth) : s = this._target._width - this._targetWidth) : (this._target != this._owner.parent && (n = this._target.y, this._target.pivotAsAnchor && (r = this._target.pivotY)), e.percent ? 0 != this._targetHeight && (s = this._target._height / this._targetHeight) : s = this._target._height - this._targetHeight), e.type) {
        case t.RelationType.Left_Left:
          e.percent ? this._owner.xMin = n + (this._owner.xMin - n) * s : 0 != r && (this._owner.x += s * -r);
          break;

        case t.RelationType.Left_Center:
          e.percent ? this._owner.xMin = n + (this._owner.xMin - n) * s : this._owner.x += s * (.5 - r);
          break;

        case t.RelationType.Left_Right:
          e.percent ? this._owner.xMin = n + (this._owner.xMin - n) * s : this._owner.x += s * (1 - r);
          break;

        case t.RelationType.Center_Center:
          e.percent ? this._owner.xMin = n + (this._owner.xMin + .5 * this._owner._rawWidth - n) * s - .5 * this._owner._rawWidth : this._owner.x += s * (.5 - r);
          break;

        case t.RelationType.Right_Left:
          e.percent ? this._owner.xMin = n + (this._owner.xMin + this._owner._rawWidth - n) * s - this._owner._rawWidth : 0 != r && (this._owner.x += s * -r);
          break;

        case t.RelationType.Right_Center:
          e.percent ? this._owner.xMin = n + (this._owner.xMin + this._owner._rawWidth - n) * s - this._owner._rawWidth : this._owner.x += s * (.5 - r);
          break;

        case t.RelationType.Right_Right:
          e.percent ? this._owner.xMin = n + (this._owner.xMin + this._owner._rawWidth - n) * s - this._owner._rawWidth : this._owner.x += s * (1 - r);
          break;

        case t.RelationType.Top_Top:
          e.percent ? this._owner.yMin = n + (this._owner.yMin - n) * s : 0 != r && (this._owner.y += s * -r);
          break;

        case t.RelationType.Top_Middle:
          e.percent ? this._owner.yMin = n + (this._owner.yMin - n) * s : this._owner.y += s * (.5 - r);
          break;

        case t.RelationType.Top_Bottom:
          e.percent ? this._owner.yMin = n + (this._owner.yMin - n) * s : this._owner.y += s * (1 - r);
          break;

        case t.RelationType.Middle_Middle:
          e.percent ? this._owner.yMin = n + (this._owner.yMin + .5 * this._owner._rawHeight - n) * s - .5 * this._owner._rawHeight : this._owner.y += s * (.5 - r);
          break;

        case t.RelationType.Bottom_Top:
          e.percent ? this._owner.yMin = n + (this._owner.yMin + this._owner._rawHeight - n) * s - this._owner._rawHeight : 0 != r && (this._owner.y += s * -r);
          break;

        case t.RelationType.Bottom_Middle:
          e.percent ? this._owner.yMin = n + (this._owner.yMin + this._owner._rawHeight - n) * s - this._owner._rawHeight : this._owner.y += s * (.5 - r);
          break;

        case t.RelationType.Bottom_Bottom:
          e.percent ? this._owner.yMin = n + (this._owner.yMin + this._owner._rawHeight - n) * s - this._owner._rawHeight : this._owner.y += s * (1 - r);
          break;

        case t.RelationType.Width:
          i = this._owner._underConstruct && this._owner == this._target.parent ? this._owner.sourceWidth - this._target.initWidth : this._owner._rawWidth - this._targetWidth, e.percent && (i *= s), this._target == this._owner.parent ? this._owner.pivotAsAnchor ? (o = this._owner.xMin, this._owner.setSize(this._target._width + i, this._owner._rawHeight, !0), this._owner.xMin = o) : this._owner.setSize(this._target._width + i, this._owner._rawHeight, !0) : this._owner.width = this._target._width + i;
          break;

        case t.RelationType.Height:
          i = this._owner._underConstruct && this._owner == this._target.parent ? this._owner.sourceHeight - this._target.initHeight : this._owner._rawHeight - this._targetHeight, e.percent && (i *= s), this._target == this._owner.parent ? this._owner.pivotAsAnchor ? (o = this._owner.yMin, this._owner.setSize(this._owner._rawWidth, this._target._height + i, !0), this._owner.yMin = o) : this._owner.setSize(this._owner._rawWidth, this._target._height + i, !0) : this._owner.height = this._target._height + i;
          break;

        case t.RelationType.LeftExt_Left:
          o = this._owner.xMin, i = e.percent ? n + (o - n) * s - o : s * -r, this._owner.width = this._owner._rawWidth - i, this._owner.xMin = o + i;
          break;

        case t.RelationType.LeftExt_Right:
          o = this._owner.xMin, i = e.percent ? n + (o - n) * s - o : s * (1 - r), this._owner.width = this._owner._rawWidth - i, this._owner.xMin = o + i;
          break;

        case t.RelationType.RightExt_Left:
          o = this._owner.xMin, i = e.percent ? n + (o + this._owner._rawWidth - n) * s - (o + this._owner._rawWidth) : s * -r, this._owner.width = this._owner._rawWidth + i, this._owner.xMin = o;
          break;

        case t.RelationType.RightExt_Right:
          o = this._owner.xMin, e.percent ? this._owner == this._target.parent ? this._owner._underConstruct ? this._owner.width = n + this._target._width - this._target._width * r + (this._owner.sourceWidth - n - this._target.initWidth + this._target.initWidth * r) * s : this._owner.width = n + (this._owner._rawWidth - n) * s : (i = n + (o + this._owner._rawWidth - n) * s - (o + this._owner._rawWidth), this._owner.width = this._owner._rawWidth + i, this._owner.xMin = o) : this._owner == this._target.parent ? this._owner._underConstruct ? this._owner.width = this._owner.sourceWidth + (this._target._width - this._target.initWidth) * (1 - r) : this._owner.width = this._owner._rawWidth + s * (1 - r) : (i = s * (1 - r), this._owner.width = this._owner._rawWidth + i, this._owner.xMin = o);
          break;

        case t.RelationType.TopExt_Top:
          o = this._owner.yMin, i = e.percent ? n + (o - n) * s - o : s * -r, this._owner.height = this._owner._rawHeight - i, this._owner.yMin = o + i;
          break;

        case t.RelationType.TopExt_Bottom:
          o = this._owner.yMin, i = e.percent ? n + (o - n) * s - o : s * (1 - r), this._owner.height = this._owner._rawHeight - i, this._owner.yMin = o + i;
          break;

        case t.RelationType.BottomExt_Top:
          o = this._owner.yMin, i = e.percent ? n + (o + this._owner._rawHeight - n) * s - (o + this._owner._rawHeight) : s * -r, this._owner.height = this._owner._rawHeight + i, this._owner.yMin = o;
          break;

        case t.RelationType.BottomExt_Bottom:
          o = this._owner.yMin, e.percent ? this._owner == this._target.parent ? this._owner._underConstruct ? this._owner.height = n + this._target._height - this._target._height * r + (this._owner.sourceHeight - n - this._target.initHeight + this._target.initHeight * r) * s : this._owner.height = n + (this._owner._rawHeight - n) * s : (i = n + (o + this._owner._rawHeight - n) * s - (o + this._owner._rawHeight), this._owner.height = this._owner._rawHeight + i, this._owner.yMin = o) : this._owner == this._target.parent ? this._owner._underConstruct ? this._owner.height = this._owner.sourceHeight + (this._target._height - this._target.initHeight) * (1 - r) : this._owner.height = this._owner._rawHeight + s * (1 - r) : (i = s * (1 - r), this._owner.height = this._owner._rawHeight + i, this._owner.yMin = o);
      }
    }, e.prototype.addRefTarget = function (e) {
      e != this._owner.parent && e.on(t.Event.XY_CHANGED, this.__targetXYChanged, this), e.on(t.Event.SIZE_CHANGED, this.__targetSizeChanged, this), e.on(t.Event.SIZE_DELAY_CHANGE, this.__targetSizeWillChange, this), this._targetX = this._target.x, this._targetY = this._target.y, this._targetWidth = this._target._width, this._targetHeight = this._target._height;
    }, e.prototype.releaseRefTarget = function (e) {
      e.node && (e.off(t.Event.XY_CHANGED, this.__targetXYChanged, this), e.off(t.Event.SIZE_CHANGED, this.__targetSizeChanged, this), e.off(t.Event.SIZE_DELAY_CHANGE, this.__targetSizeWillChange, this));
    }, e.prototype.__targetXYChanged = function () {
      if (null != this._owner.relations.handling || null != this._owner.group && this._owner.group._updating) return this._targetX = this._target.x, void (this._targetY = this._target.y);
      this._owner.relations.handling = this._target;

      for (var t = this._owner.x, e = this._owner.y, i = this._target.x - this._targetX, o = this._target.y - this._targetY, n = this._defs.length, r = 0; r < n; r++) {
        var s = this._defs[r];
        this.applyOnXYChanged(s, i, o);
      }

      if (this._targetX = this._target.x, this._targetY = this._target.y, (t != this._owner.x || e != this._owner.y) && (t = this._owner.x - t, e = this._owner.y - e, this._owner.updateGearFromRelations(1, t, e), this._owner.parent)) {
        var h = this._owner.parent._transitions.length;
        if (h > 0) for (r = 0; r < h; ++r) {
          this._owner.parent._transitions[r].updateFromRelations(this._owner.id, t, e);
        }
      }

      this._owner.relations.handling = null;
    }, e.prototype.__targetSizeChanged = function () {
      if (null == this._owner.relations.handling) {
        this._owner.relations.handling = this._target;

        for (var t = this._owner.x, e = this._owner.y, i = this._owner._rawWidth, o = this._owner._rawHeight, n = this._defs.length, r = 0; r < n; r++) {
          var s = this._defs[r];
          this.applyOnSizeChanged(s);
        }

        if (this._targetWidth = this._target._width, this._targetHeight = this._target._height, (t != this._owner.x || e != this._owner.y) && (t = this._owner.x - t, e = this._owner.y - e, this._owner.updateGearFromRelations(1, t, e), this._owner.parent)) {
          var h = this._owner.parent._transitions.length;
          if (h > 0) for (r = 0; r < h; ++r) {
            this._owner.parent._transitions[r].updateFromRelations(this._owner.id, t, e);
          }
        }

        i == this._owner._rawWidth && o == this._owner._rawHeight || (i = this._owner._rawWidth - i, o = this._owner._rawHeight - o, this._owner.updateGearFromRelations(2, i, o)), this._owner.relations.handling = null;
      }
    }, e.prototype.__targetSizeWillChange = function () {
      this._owner.relations.sizeDirty = !0;
    }, e;
  }();

  t.RelationItem = e;

  var i = function () {
    function t() {}

    return t.prototype.copyFrom = function (t) {
      this.percent = t.percent, this.type = t.type, this.axis = t.axis;
    }, t;
  }();

  t.RelationDef = i;
}(fgui || (fgui = {})), function (t) {
  var e = function () {
    function e(t) {
      this._owner = t, this._items = new Array();
    }

    return e.prototype.add = function (e, i, o) {
      for (var n = this._items.length, r = 0; r < n; r++) {
        var s = this._items[r];
        if (s.target == e) return void s.add(i, o);
      }

      var h = new t.RelationItem(this._owner);
      h.target = e, h.add(i, o), this._items.push(h);
    }, e.prototype.remove = function (t, e) {
      e = e || 0;

      for (var i = this._items.length, o = 0; o < i;) {
        var n = this._items[o];
        n.target == t ? (n.remove(e), n.isEmpty ? (n.dispose(), this._items.splice(o, 1), i--) : o++) : o++;
      }
    }, e.prototype.contains = function (t) {
      for (var e = this._items.length, i = 0; i < e; i++) {
        if (this._items[i].target == t) return !0;
      }

      return !1;
    }, e.prototype.clearFor = function (t) {
      for (var e = this._items.length, i = 0; i < e;) {
        var o = this._items[i];
        o.target == t ? (o.dispose(), this._items.splice(i, 1), e--) : i++;
      }
    }, e.prototype.clearAll = function () {
      for (var t = this._items.length, e = 0; e < t; e++) {
        this._items[e].dispose();
      }

      this._items.length = 0;
    }, e.prototype.copyFrom = function (e) {
      this.clearAll();

      for (var i = e._items, o = i.length, n = 0; n < o; n++) {
        var r = i[n],
            s = new t.RelationItem(this._owner);
        s.copyFrom(r), this._items.push(s);
      }
    }, e.prototype.dispose = function () {
      this.clearAll();
    }, e.prototype.onOwnerSizeChanged = function (t, e, i) {
      if (0 != this._items.length) for (var o = this._items.length, n = 0; n < o; n++) {
        this._items[n].applyOnSelfResized(t, e, i);
      }
    }, e.prototype.ensureRelationsSizeCorrect = function () {
      if (0 != this._items.length) {
        this.sizeDirty = !1;

        for (var t = this._items.length, e = 0; e < t; e++) {
          this._items[e].target.ensureSizeCorrect();
        }
      }
    }, Object.defineProperty(e.prototype, "empty", {
      get: function get() {
        return 0 == this._items.length;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.setup = function (e, i) {
      for (var o, n = e.readByte(), r = 0; r < n; r++) {
        var s = e.readShort();
        o = -1 == s ? this._owner.parent : i ? this._owner.getChildAt(s) : this._owner.parent.getChildAt(s);
        var h = new t.RelationItem(this._owner);
        h.target = o, this._items.push(h);

        for (var a = e.readByte(), l = 0; l < a; l++) {
          var c = e.readByte(),
              u = e.readBool();
          h.internalAdd(c, u);
        }
      }
    }, e;
  }();

  t.Relations = e;
}(fgui || (fgui = {})), function (t) {
  var e = function (e) {
    function c() {
      var t = null !== e && e.apply(this, arguments) || this;
      return t._aniFlag = 0, t;
    }

    return __extends(c, e), c.prototype.setup = function (e) {
      var i = this._owner = this.node.$gobj;
      this._maskContainer = new cc.Node("ScrollPane"), this._maskContainer.setAnchorPoint(0, 1), this._maskContainer.parent = i.node, this._container = i._container, this._container.parent = this._maskContainer, this._scrollBarMargin = new t.Margin(), this._mouseWheelEnabled = !0, this._xPos = 0, this._yPos = 0, this._aniFlag = 0, this._tweening = 0, this._footerLockedSize = 0, this._headerLockedSize = 0, this._viewSize = new cc.Vec2(), this._contentSize = new cc.Vec2(), this._pageSize = new cc.Vec2(1, 1), this._overlapSize = new cc.Vec2(), this._tweenTime = new cc.Vec2(), this._tweenStart = new cc.Vec2(), this._tweenDuration = new cc.Vec2(), this._tweenChange = new cc.Vec2(), this._velocity = new cc.Vec2(), this._containerPos = new cc.Vec2(), this._beginTouchPos = new cc.Vec2(), this._lastTouchPos = new cc.Vec2(), this._lastTouchGlobalPos = new cc.Vec2(), this._scrollStep = t.UIConfig.defaultScrollStep, this._mouseWheelStep = 2 * this._scrollStep, this._decelerationRate = t.UIConfig.defaultScrollDecelerationRate, this._snappingPolicy = 0, i.on(t.Event.TOUCH_BEGIN, this.onTouchBegin, this), i.on(t.Event.TOUCH_MOVE, this.onTouchMove, this), i.on(t.Event.TOUCH_END, this.onTouchEnd, this), i.on(t.Event.MOUSE_WHEEL, this.onMouseWheel, this), this._scrollType = e.readByte();
      var o = e.readByte(),
          n = e.readInt();
      e.readBool() && (this._scrollBarMargin.top = e.readInt(), this._scrollBarMargin.bottom = e.readInt(), this._scrollBarMargin.left = e.readInt(), this._scrollBarMargin.right = e.readInt());
      var r = e.readS(),
          s = e.readS(),
          h = e.readS(),
          a = e.readS();

      if (0 != (1 & n) && (this._displayOnLeft = !0), 0 != (2 & n) && (this._snapToItem = !0), 0 != (4 & n) && (this._displayInDemand = !0), 0 != (8 & n) && (this._pageMode = !0), this._touchEffect = !!(16 & n) || !(32 & n) && t.UIConfig.defaultScrollTouchEffect, this._bouncebackEffect = !!(64 & n) || !(128 & n) && t.UIConfig.defaultScrollBounceEffect, 0 != (256 & n) && (this._inertiaDisabled = !0), 0 == (512 & n) && this._maskContainer.addComponent(cc.Mask), 0 != (1024 & n) && (this._floating = !0), 0 != (2048 & n) && (this._dontClipMargin = !0), o == t.ScrollBarDisplayType.Default && (o = t.UIConfig.defaultScrollBarDisplay), o != t.ScrollBarDisplayType.Hidden) {
        var l;

        if ((this._scrollType == t.ScrollType.Both || this._scrollType == t.ScrollType.Vertical) && (l = r || t.UIConfig.verticalScrollBar)) {
          if (this._vtScrollBar = t.UIPackage.createObjectFromURL(l), !this._vtScrollBar) throw "cannot create scrollbar from " + l;
          this._vtScrollBar.setScrollPane(this, !0), this._vtScrollBar.node.parent = i.node;
        }

        if ((this._scrollType == t.ScrollType.Both || this._scrollType == t.ScrollType.Horizontal) && (l = s || t.UIConfig.horizontalScrollBar)) {
          if (this._hzScrollBar = t.UIPackage.createObjectFromURL(l), !this._hzScrollBar) throw "cannot create scrollbar from " + l;
          this._hzScrollBar.setScrollPane(this, !1), this._hzScrollBar.node.parent = i.node;
        }

        o == t.ScrollBarDisplayType.Auto && (this._scrollBarDisplayAuto = !0), this._scrollBarDisplayAuto && (this._vtScrollBar && (this._vtScrollBar.node.active = !1), this._hzScrollBar && (this._hzScrollBar.node.active = !1), i.on(t.Event.ROLL_OVER, this.onRollOver, this), i.on(t.Event.ROLL_OUT, this.onRollOut, this));
      }

      if (h) {
        if (this._header = t.UIPackage.createObjectFromURL(h), null == this._header) throw "cannot create scrollPane header from " + h;

        this._maskContainer.insertChild(this._header.node, 0);
      }

      if (a) {
        if (this._footer = t.UIPackage.createObjectFromURL(a), null == this._footer) throw "cannot create scrollPane footer from " + a;

        this._maskContainer.insertChild(this._footer.node, 0);
      }

      this._refreshBarAxis = this._scrollType == t.ScrollType.Both || this._scrollType == t.ScrollType.Vertical ? "y" : "x", this.setSize(i.width, i.height);
    }, c.prototype.onDestroy = function () {
      delete this._pageController, this._hzScrollBar && this._hzScrollBar.dispose(), this._vtScrollBar && this._vtScrollBar.dispose(), this._header && this._header.dispose(), this._footer && this._footer.dispose();
    }, c.prototype.hitTest = function (t, e) {
      var i;
      return this._vtScrollBar && (i = this._vtScrollBar.hitTest(e)) ? i : this._hzScrollBar && (i = this._hzScrollBar.hitTest(e)) ? i : this._header && this._header.node.activeInHierarchy && (i = this._header.hitTest(e)) ? i : this._footer && this._footer.node.activeInHierarchy && (i = this._footer.hitTest(e)) ? i : t.x >= this._owner.margin.left && t.y >= this._owner.margin.top && t.x < this._owner.margin.left + this._viewSize.x && t.y < this._owner.margin.top + this._viewSize.y ? this._owner : null;
    }, Object.defineProperty(c.prototype, "owner", {
      get: function get() {
        return this._owner;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(c.prototype, "hzScrollBar", {
      get: function get() {
        return this._hzScrollBar;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(c.prototype, "vtScrollBar", {
      get: function get() {
        return this._vtScrollBar;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(c.prototype, "header", {
      get: function get() {
        return this._header;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(c.prototype, "footer", {
      get: function get() {
        return this._footer;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(c.prototype, "bouncebackEffect", {
      get: function get() {
        return this._bouncebackEffect;
      },
      set: function set(t) {
        this._bouncebackEffect = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(c.prototype, "touchEffect", {
      get: function get() {
        return this._touchEffect;
      },
      set: function set(t) {
        this._touchEffect = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(c.prototype, "scrollStep", {
      get: function get() {
        return this._scrollStep;
      },
      set: function set(e) {
        this._scrollStep = e, 0 == this._scrollStep && (this._scrollStep = t.UIConfig.defaultScrollStep), this._mouseWheelStep = 2 * this._scrollStep;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(c.prototype, "decelerationRate", {
      get: function get() {
        return this._decelerationRate;
      },
      set: function set(t) {
        this._decelerationRate = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(c.prototype, "snapToItem", {
      get: function get() {
        return this._snapToItem;
      },
      set: function set(t) {
        this._snapToItem = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(c.prototype, "snappingPolicy", {
      get: function get() {
        return this._snappingPolicy;
      },
      set: function set(t) {
        this._snappingPolicy = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(c.prototype, "mouseWheelEnabled", {
      get: function get() {
        return this._mouseWheelEnabled;
      },
      set: function set(t) {
        this._mouseWheelEnabled = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(c.prototype, "isDragged", {
      get: function get() {
        return this._dragged;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(c.prototype, "percX", {
      get: function get() {
        return 0 == this._overlapSize.x ? 0 : this._xPos / this._overlapSize.x;
      },
      set: function set(t) {
        this.setPercX(t, !1);
      },
      enumerable: !1,
      configurable: !0
    }), c.prototype.setPercX = function (e, i) {
      this._owner.ensureBoundsCorrect(), this.setPosX(this._overlapSize.x * t.ToolSet.clamp01(e), i);
    }, Object.defineProperty(c.prototype, "percY", {
      get: function get() {
        return 0 == this._overlapSize.y ? 0 : this._yPos / this._overlapSize.y;
      },
      set: function set(t) {
        this.setPercY(t, !1);
      },
      enumerable: !1,
      configurable: !0
    }), c.prototype.setPercY = function (e, i) {
      this._owner.ensureBoundsCorrect(), this.setPosY(this._overlapSize.y * t.ToolSet.clamp01(e), i);
    }, Object.defineProperty(c.prototype, "posX", {
      get: function get() {
        return this._xPos;
      },
      set: function set(t) {
        this.setPosX(t, !1);
      },
      enumerable: !1,
      configurable: !0
    }), c.prototype.setPosX = function (e, i) {
      this._owner.ensureBoundsCorrect(), 1 == this._loop && (e = this.loopCheckingNewPos(e, "x")), (e = t.ToolSet.clamp(e, 0, this._overlapSize.x)) != this._xPos && (this._xPos = e, this.posChanged(i));
    }, Object.defineProperty(c.prototype, "posY", {
      get: function get() {
        return this._yPos;
      },
      set: function set(t) {
        this.setPosY(t, !1);
      },
      enumerable: !1,
      configurable: !0
    }), c.prototype.setPosY = function (e, i) {
      this._owner.ensureBoundsCorrect(), 1 == this._loop && (e = this.loopCheckingNewPos(e, "y")), (e = t.ToolSet.clamp(e, 0, this._overlapSize.y)) != this._yPos && (this._yPos = e, this.posChanged(i));
    }, Object.defineProperty(c.prototype, "contentWidth", {
      get: function get() {
        return this._contentSize.x;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(c.prototype, "contentHeight", {
      get: function get() {
        return this._contentSize.y;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(c.prototype, "viewWidth", {
      get: function get() {
        return this._viewSize.x;
      },
      set: function set(t) {
        t = t + this._owner.margin.left + this._owner.margin.right, this._vtScrollBar && !this._floating && (t += this._vtScrollBar.width), this._owner.width = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(c.prototype, "viewHeight", {
      get: function get() {
        return this._viewSize.y;
      },
      set: function set(t) {
        t = t + this._owner.margin.top + this._owner.margin.bottom, this._hzScrollBar && !this._floating && (t += this._hzScrollBar.height), this._owner.height = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(c.prototype, "currentPageX", {
      get: function get() {
        if (!this._pageMode) return 0;
        var t = Math.floor(this._xPos / this._pageSize.x);
        return this._xPos - t * this._pageSize.x > .5 * this._pageSize.x && t++, t;
      },
      set: function set(t) {
        this.setCurrentPageX(t, !1);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(c.prototype, "currentPageY", {
      get: function get() {
        if (!this._pageMode) return 0;
        var t = Math.floor(this._yPos / this._pageSize.y);
        return this._yPos - t * this._pageSize.y > .5 * this._pageSize.y && t++, t;
      },
      set: function set(t) {
        this.setCurrentPageY(t, !1);
      },
      enumerable: !1,
      configurable: !0
    }), c.prototype.setCurrentPageX = function (t, e) {
      this._pageMode && (this._owner.ensureBoundsCorrect(), this._overlapSize.x > 0 && this.setPosX(t * this._pageSize.x, e));
    }, c.prototype.setCurrentPageY = function (t, e) {
      this._pageMode && (this._owner.ensureBoundsCorrect(), this._overlapSize.y > 0 && this.setPosY(t * this._pageSize.y, e));
    }, Object.defineProperty(c.prototype, "isBottomMost", {
      get: function get() {
        return this._yPos == this._overlapSize.y || 0 == this._overlapSize.y;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(c.prototype, "isRightMost", {
      get: function get() {
        return this._xPos == this._overlapSize.x || 0 == this._overlapSize.x;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(c.prototype, "pageController", {
      get: function get() {
        return this._pageController;
      },
      set: function set(t) {
        this._pageController = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(c.prototype, "scrollingPosX", {
      get: function get() {
        return t.ToolSet.clamp(-this._container.x, 0, this._overlapSize.x);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(c.prototype, "scrollingPosY", {
      get: function get() {
        return t.ToolSet.clamp(- -this._container.y, 0, this._overlapSize.y);
      },
      enumerable: !1,
      configurable: !0
    }), c.prototype.scrollTop = function (t) {
      this.setPercY(0, t);
    }, c.prototype.scrollBottom = function (t) {
      this.setPercY(1, t);
    }, c.prototype.scrollUp = function (t, e) {
      null == t && (t = 1), this._pageMode ? this.setPosY(this._yPos - this._pageSize.y * t, e) : this.setPosY(this._yPos - this._scrollStep * t, e);
    }, c.prototype.scrollDown = function (t, e) {
      null == t && (t = 1), this._pageMode ? this.setPosY(this._yPos + this._pageSize.y * t, e) : this.setPosY(this._yPos + this._scrollStep * t, e);
    }, c.prototype.scrollLeft = function (t, e) {
      null == t && (t = 1), this._pageMode ? this.setPosX(this._xPos - this._pageSize.x * t, e) : this.setPosX(this._xPos - this._scrollStep * t, e);
    }, c.prototype.scrollRight = function (t, e) {
      null == t && (t = 1), this._pageMode ? this.setPosX(this._xPos + this._pageSize.x * t, e) : this.setPosX(this._xPos + this._scrollStep * t, e);
    }, c.prototype.scrollToView = function (e, i, o) {
      var n;

      if (this._owner.ensureBoundsCorrect(), this._needRefresh && this.refresh(), e instanceof t.GObject ? e.parent != this._owner ? (e.parent.localToGlobalRect(e.x, e.y, e.width, e.height, h), n = this._owner.globalToLocalRect(h.x, h.y, h.width, h.height, h)) : ((n = h).x = e.x, n.y = e.y, n.width = e.width, n.height = e.height) : n = e, this._overlapSize.y > 0) {
        var r = this._yPos + this._viewSize.y;
        o || n.y <= this._yPos || n.height >= this._viewSize.y ? this._pageMode ? this.setPosY(Math.floor(n.y / this._pageSize.y) * this._pageSize.y, i) : this.setPosY(n.y, i) : n.y + n.height > r && (this._pageMode ? this.setPosY(Math.floor(n.y / this._pageSize.y) * this._pageSize.y, i) : n.height <= this._viewSize.y / 2 ? this.setPosY(n.y + 2 * n.height - this._viewSize.y, i) : this.setPosY(n.y + n.height - this._viewSize.y, i));
      }

      if (this._overlapSize.x > 0) {
        var s = this._xPos + this._viewSize.x;
        o || n.x <= this._xPos || n.width >= this._viewSize.x ? this._pageMode ? this.setPosX(Math.floor(n.x / this._pageSize.x) * this._pageSize.x, i) : this.setPosX(n.x, i) : n.x + n.width > s && (this._pageMode ? this.setPosX(Math.floor(n.x / this._pageSize.x) * this._pageSize.x, i) : n.width <= this._viewSize.x / 2 ? this.setPosX(n.x + 2 * n.width - this._viewSize.x, i) : this.setPosX(n.x + n.width - this._viewSize.x, i));
      }

      !i && this._needRefresh && this.refresh();
    }, c.prototype.isChildInView = function (t) {
      if (this._overlapSize.y > 0) {
        var e = t.y + -this._container.y;
        if (e < -t.height || e > this._viewSize.y) return !1;
      }

      return !(this._overlapSize.x > 0 && ((e = t.x + this._container.x) < -t.width || e > this._viewSize.x));
    }, c.prototype.cancelDragging = function () {
      c.draggingPane == this && (c.draggingPane = null), i = 0, this._dragged = !1;
    }, c.prototype.lockHeader = function (t) {
      if (this._headerLockedSize != t) {
        var e = this._container.x,
            i = -this._container.y,
            o = "x" == this._refreshBarAxis ? e : i;
        this._headerLockedSize = t, !this._refreshEventDispatching && o >= 0 && (this._tweenStart.x = e, this._tweenStart.y = i, this._tweenChange.set(cc.Vec2.ZERO), this._tweenChange[this._refreshBarAxis] = this._headerLockedSize - this._tweenStart[this._refreshBarAxis], this._tweenDuration.x = this._tweenDuration.y = n, this.startTween(2));
      }
    }, c.prototype.lockFooter = function (t) {
      if (this._footerLockedSize != t) {
        var e = this._container.x,
            i = -this._container.y,
            o = "x" == this._refreshBarAxis ? e : i;

        if (this._footerLockedSize = t, !this._refreshEventDispatching && o <= -this._overlapSize[this._refreshBarAxis]) {
          this._tweenStart.x = e, this._tweenStart.y = i, this._tweenChange.set(cc.Vec2.ZERO);
          var r = this._overlapSize[this._refreshBarAxis];
          0 == r ? r = Math.max(this._contentSize[this._refreshBarAxis] + this._footerLockedSize - this._viewSize[this._refreshBarAxis], 0) : r += this._footerLockedSize, this._tweenChange[this._refreshBarAxis] = -r - this._tweenStart[this._refreshBarAxis], this._tweenDuration.x = this._tweenDuration.y = n, this.startTween(2);
        }
      }
    }, c.prototype.onOwnerSizeChanged = function () {
      this.setSize(this._owner.width, this._owner.height), this.posChanged(!1);
    }, c.prototype.handleControllerChanged = function (e) {
      this._pageController == e && (this._scrollType == t.ScrollType.Horizontal ? this.setCurrentPageX(e.selectedIndex, !0) : this.setCurrentPageY(e.selectedIndex, !0));
    }, c.prototype.updatePageController = function () {
      var e;

      if (this._pageController && !this._pageController.changing && (e = this._scrollType == t.ScrollType.Horizontal ? this.currentPageX : this.currentPageY) < this._pageController.pageCount) {
        var i = this._pageController;
        this._pageController = null, i.selectedIndex = e, this._pageController = i;
      }
    }, c.prototype.adjustMaskContainer = function () {
      var t = 0;
      this._displayOnLeft && this._vtScrollBar && !this._floating && (t = this._vtScrollBar.width);
      var e = this._owner;
      this._dontClipMargin ? this._maskContainer.setAnchorPoint((e.margin.left + e._alignOffset.x) / e.width, 1 - (e.margin.top + e._alignOffset.y) / e.height) : this._maskContainer.setAnchorPoint(e._alignOffset.x / this._viewSize.x, 1 - e._alignOffset.y / this._viewSize.y), e._customMask ? this._maskContainer.setPosition(t + e._alignOffset.x, -e._alignOffset.y) : this._maskContainer.setPosition(e._pivotCorrectX + t + e._alignOffset.x, e._pivotCorrectY - e._alignOffset.y);
    }, c.prototype.setSize = function (t, e) {
      this._hzScrollBar && (this._hzScrollBar.y = e - this._hzScrollBar.height, this._vtScrollBar ? (this._hzScrollBar.width = t - this._vtScrollBar.width - this._scrollBarMargin.left - this._scrollBarMargin.right, this._displayOnLeft ? this._hzScrollBar.x = this._scrollBarMargin.left + this._vtScrollBar.width : this._hzScrollBar.x = this._scrollBarMargin.left) : (this._hzScrollBar.width = t - this._scrollBarMargin.left - this._scrollBarMargin.right, this._hzScrollBar.x = this._scrollBarMargin.left)), this._vtScrollBar && (this._displayOnLeft || (this._vtScrollBar.x = t - this._vtScrollBar.width), this._hzScrollBar ? this._vtScrollBar.height = e - this._hzScrollBar.height - this._scrollBarMargin.top - this._scrollBarMargin.bottom : this._vtScrollBar.height = e - this._scrollBarMargin.top - this._scrollBarMargin.bottom, this._vtScrollBar.y = this._scrollBarMargin.top), this._viewSize.x = t, this._viewSize.y = e, this._hzScrollBar && !this._floating && (this._viewSize.y -= this._hzScrollBar.height), this._vtScrollBar && !this._floating && (this._viewSize.x -= this._vtScrollBar.width), this._viewSize.x -= this._owner.margin.left + this._owner.margin.right, this._viewSize.y -= this._owner.margin.top + this._owner.margin.bottom, this._viewSize.x = Math.max(1, this._viewSize.x), this._viewSize.y = Math.max(1, this._viewSize.y), this._pageSize.x = this._viewSize.x, this._pageSize.y = this._viewSize.y, this.adjustMaskContainer(), this.handleSizeChanged();
    }, c.prototype.setContentSize = function (t, e) {
      this._contentSize.x == t && this._contentSize.y == e || (this._contentSize.x = t, this._contentSize.y = e, this.handleSizeChanged(), this._snapToItem && 0 != this._snappingPolicy && 0 == this._xPos && 0 == this._yPos && this.posChanged(!1));
    }, c.prototype.changeContentSizeOnScrolling = function (t, e, i, o) {
      var n = this._xPos == this._overlapSize.x,
          r = this._yPos == this._overlapSize.y;
      this._contentSize.x += t, this._contentSize.y += e, this.handleSizeChanged(), 1 == this._tweening ? (0 != t && n && this._tweenChange.x < 0 && (this._xPos = this._overlapSize.x, this._tweenChange.x = -this._xPos - this._tweenStart.x), 0 != e && r && this._tweenChange.y < 0 && (this._yPos = this._overlapSize.y, this._tweenChange.y = -this._yPos - this._tweenStart.y)) : 2 == this._tweening ? (0 != i && (this._container.x -= i, this._tweenStart.x -= i, this._xPos = -this._container.x), 0 != o && (this._container.y += o, this._tweenStart.y -= o, this._yPos = - -this._container.y)) : this._dragged ? (0 != i && (this._container.x -= i, this._containerPos.x -= i, this._xPos = -this._container.x), 0 != o && (this._container.y += o, this._containerPos.y -= o, this._yPos = - -this._container.y)) : (0 != t && n && (this._xPos = this._overlapSize.x, this._container.x = -this._xPos), 0 != e && r && (this._yPos = this._overlapSize.y, this._container.y = this._yPos)), this._pageMode && this.updatePageController();
    }, c.prototype.handleSizeChanged = function () {
      this._displayInDemand && (this._vScrollNone = this._contentSize.y <= this._viewSize.y, this._hScrollNone = this._contentSize.x <= this._viewSize.x), this._vtScrollBar && (0 == this._contentSize.y ? this._vtScrollBar.setDisplayPerc(0) : this._vtScrollBar.setDisplayPerc(Math.min(1, this._viewSize.y / this._contentSize.y))), this._hzScrollBar && (0 == this._contentSize.x ? this._hzScrollBar.setDisplayPerc(0) : this._hzScrollBar.setDisplayPerc(Math.min(1, this._viewSize.x / this._contentSize.x))), this.updateScrollBarVisible();
      var e = this._viewSize.x,
          i = this._viewSize.y;
      this._vScrollNone && this._vtScrollBar && (e += this._vtScrollBar.width), this._hScrollNone && this._hzScrollBar && (i += this._hzScrollBar.height), this._dontClipMargin && (e += this._owner.margin.left + this._owner.margin.right, i += this._owner.margin.top + this._owner.margin.bottom), this._maskContainer.setContentSize(e, i), this._vtScrollBar && this._vtScrollBar.handlePositionChanged(), this._hzScrollBar && this._hzScrollBar.handlePositionChanged(), this._header && this._header.handlePositionChanged(), this._footer && this._footer.handlePositionChanged(), this._scrollType == t.ScrollType.Horizontal || this._scrollType == t.ScrollType.Both ? this._overlapSize.x = Math.ceil(Math.max(0, this._contentSize.x - this._viewSize.x)) : this._overlapSize.x = 0, this._scrollType == t.ScrollType.Vertical || this._scrollType == t.ScrollType.Both ? this._overlapSize.y = Math.ceil(Math.max(0, this._contentSize.y - this._viewSize.y)) : this._overlapSize.y = 0, this._xPos = t.ToolSet.clamp(this._xPos, 0, this._overlapSize.x), this._yPos = t.ToolSet.clamp(this._yPos, 0, this._overlapSize.y);
      var o = this._overlapSize[this._refreshBarAxis];
      0 == o ? o = Math.max(this._contentSize[this._refreshBarAxis] + this._footerLockedSize - this._viewSize[this._refreshBarAxis], 0) : o += this._footerLockedSize, "x" == this._refreshBarAxis ? this._container.setPosition(t.ToolSet.clamp(this._container.x, -o, this._headerLockedSize), -t.ToolSet.clamp(-this._container.y, -this._overlapSize.y, 0)) : this._container.setPosition(t.ToolSet.clamp(this._container.x, -this._overlapSize.x, 0), -t.ToolSet.clamp(-this._container.y, -o, this._headerLockedSize)), this._header && ("x" == this._refreshBarAxis ? this._header.height = this._viewSize.y : this._header.width = this._viewSize.x), this._footer && ("y" == this._refreshBarAxis ? this._footer.height = this._viewSize.y : this._footer.width = this._viewSize.x), this.updateScrollBarPos(), this._pageMode && this.updatePageController();
    }, c.prototype.posChanged = function (t) {
      0 == this._aniFlag ? this._aniFlag = t ? 1 : -1 : 1 != this._aniFlag || t || (this._aniFlag = -1), this._needRefresh = !0, cc.director.getScheduler().isScheduled(this.refresh, this) || this.scheduleOnce(this.refresh);
    }, c.prototype.refresh = function () {
      this._needRefresh = !1, this.unschedule(this.refresh), (this._pageMode || this._snapToItem) && (a.x = -this._xPos, a.y = -this._yPos, this.alignPosition(a, !1), this._xPos = -a.x, this._yPos = -a.y), this.refresh2(), this._owner.node.emit(t.Event.SCROLL, this._owner), this._needRefresh && (this._needRefresh = !1, this.unschedule(this.refresh), this.refresh2()), this.updateScrollBarPos(), this._aniFlag = 0;
    }, c.prototype.refresh2 = function () {
      var t, e;
      1 != this._aniFlag || this._dragged ? (0 != this._tweening && this.killTween(), this._container.setPosition(Math.floor(-this._xPos), -Math.floor(-this._yPos)), this.loopCheckingCurrent()) : (this._overlapSize.x > 0 ? t = -Math.floor(this._xPos) : (0 != this._container.x && (this._container.x = 0), t = 0), this._overlapSize.y > 0 ? e = -Math.floor(this._yPos) : (0 != this._container.y && (this._container.y = 0), e = 0), t != this._container.x || e != -this._container.y ? (this._tweenDuration.x = this._tweenDuration.y = o, this._tweenStart.x = this._container.x, this._tweenStart.y = -this._container.y, this._tweenChange.x = t - this._tweenStart.x, this._tweenChange.y = e - this._tweenStart.y, this.startTween(1)) : 0 != this._tweening && this.killTween()), this._pageMode && this.updatePageController();
    }, c.prototype.onTouchBegin = function (e) {
      if (this._touchEffect) {
        e.captureTouch(), 0 != this._tweening ? (this.killTween(), t.GRoot.inst.inputProcessor.cancelClick(e.touchId), this._dragged = !0) : this._dragged = !1;

        var i = this._owner.globalToLocal(e.pos.x, e.pos.y, s);

        this._containerPos.x = this._container.x, this._containerPos.y = -this._container.y, this._beginTouchPos.set(i), this._lastTouchPos.set(i), this._lastTouchGlobalPos.set(e.pos), this._isHoldAreaDone = !1, this._velocity.set(cc.Vec2.ZERO), this._velocityScale = 1, this._lastMoveTime = t.ToolSet.getTime();
      }
    }, c.prototype.onTouchMove = function (e) {
      if (cc.isValid(this._owner.node) && this._touchEffect && !(t.GObject.draggingObject && t.GObject.draggingObject.onStage || c.draggingPane && c.draggingPane != this && c.draggingPane._owner.onStage)) {
        var o,
            n,
            h,
            a = this._owner.globalToLocal(e.pos.x, e.pos.y, s),
            l = t.UIConfig.touchScrollSensitivity;

        if (this._scrollType == t.ScrollType.Vertical) {
          if (!this._isHoldAreaDone) {
            if (i |= 1, (o = Math.abs(this._beginTouchPos.y - a.y)) < l) return;
            if (0 != (2 & i) && o < Math.abs(this._beginTouchPos.x - a.x)) return;
          }

          n = !0;
        } else if (this._scrollType == t.ScrollType.Horizontal) {
          if (!this._isHoldAreaDone) {
            if (i |= 2, (o = Math.abs(this._beginTouchPos.x - a.x)) < l) return;
            if (0 != (1 & i) && o < Math.abs(this._beginTouchPos.y - a.y)) return;
          }

          h = !0;
        } else {
          if (i = 3, !this._isHoldAreaDone && (o = Math.abs(this._beginTouchPos.y - a.y)) < l && (o = Math.abs(this._beginTouchPos.x - a.x)) < l) return;
          n = h = !0;
        }

        var u = Math.floor(this._containerPos.x + a.x - this._beginTouchPos.x),
            _ = Math.floor(this._containerPos.y + a.y - this._beginTouchPos.y);

        n && (_ > 0 ? this._bouncebackEffect ? this._header && 0 != this._header.maxHeight ? this._container.y = -Math.floor(Math.min(.5 * _, this._header.maxHeight)) : this._container.y = -Math.floor(Math.min(.5 * _, this._viewSize.y * r)) : this._container.y = 0 : _ < -this._overlapSize.y ? this._bouncebackEffect ? this._footer && this._footer.maxHeight > 0 ? this._container.y = -Math.floor(Math.max(.5 * (_ + this._overlapSize.y), -this._footer.maxHeight) - this._overlapSize.y) : this._container.y = -Math.floor(Math.max(.5 * (_ + this._overlapSize.y), -this._viewSize.y * r) - this._overlapSize.y) : this._container.y = this._overlapSize.y : this._container.y = -_), h && (u > 0 ? this._bouncebackEffect ? this._header && 0 != this._header.maxWidth ? this._container.x = Math.floor(Math.min(.5 * u, this._header.maxWidth)) : this._container.x = Math.floor(Math.min(.5 * u, this._viewSize.x * r)) : this._container.x = 0 : u < 0 - this._overlapSize.x ? this._bouncebackEffect ? this._footer && this._footer.maxWidth > 0 ? this._container.x = Math.floor(Math.max(.5 * (u + this._overlapSize.x), -this._footer.maxWidth) - this._overlapSize.x) : this._container.x = Math.floor(Math.max(.5 * (u + this._overlapSize.x), -this._viewSize.x * r) - this._overlapSize.x) : this._container.x = -this._overlapSize.x : this._container.x = u);
        var p = t.ToolSet.getTime(),
            d = Math.max(p - this._lastMoveTime, 1 / 60),
            f = a.x - this._lastTouchPos.x,
            g = a.y - this._lastTouchPos.y;

        if (h || (f = 0), n || (g = 0), 0 != d) {
          var y = 60 * d - 1;

          if (y > 1) {
            var m = Math.pow(.833, y);
            this._velocity.x = this._velocity.x * m, this._velocity.y = this._velocity.y * m;
          }

          this._velocity.x = t.ToolSet.lerp(this._velocity.x, 60 * f / 60 / d, 10 * d), this._velocity.y = t.ToolSet.lerp(this._velocity.y, 60 * g / 60 / d, 10 * d);
        }

        var b = this._lastTouchGlobalPos.x - e.pos.x,
            v = this._lastTouchGlobalPos.y - e.pos.y;
        0 != f ? this._velocityScale = Math.abs(b / f) : 0 != g && (this._velocityScale = Math.abs(v / g)), this._lastTouchPos.set(a), this._lastTouchGlobalPos.x = e.pos.x, this._lastTouchGlobalPos.y = e.pos.y, this._lastMoveTime = p, this._overlapSize.x > 0 && (this._xPos = t.ToolSet.clamp(-this._container.x, 0, this._overlapSize.x)), this._overlapSize.y > 0 && (this._yPos = t.ToolSet.clamp(- -this._container.y, 0, this._overlapSize.y)), 0 != this._loop && (u = this._container.x, _ = -this._container.y, this.loopCheckingCurrent() && (this._containerPos.x += this._container.x - u, this._containerPos.y += -this._container.y - _)), c.draggingPane = this, this._isHoldAreaDone = !0, this._dragged = !0, this.updateScrollBarPos(), this.updateScrollBarVisible(), this._pageMode && this.updatePageController(), this._owner.node.emit(t.Event.SCROLL), this._owner;
      }
    }, c.prototype.onTouchEnd = function () {
      if (c.draggingPane == this && (c.draggingPane = null), i = 0, this._dragged && this._touchEffect && this._owner.node.activeInHierarchy) {
        this._dragged = !1, this._tweenStart.x = this._container.x, this._tweenStart.y = -this._container.y, a.set(this._tweenStart);
        var e = !1;

        if (this._container.x > 0 ? (a.x = 0, e = !0) : this._container.x < -this._overlapSize.x && (a.x = -this._overlapSize.x, e = !0), -this._container.y > 0 ? (a.y = 0, e = !0) : -this._container.y < -this._overlapSize.y && (a.y = -this._overlapSize.y, e = !0), e) {
          if (this._tweenChange.x = a.x - this._tweenStart.x, this._tweenChange.y = a.y - this._tweenStart.y, this._tweenChange.x < -t.UIConfig.touchDragSensitivity || this._tweenChange.y < -t.UIConfig.touchDragSensitivity ? (this._refreshEventDispatching = !0, this._owner.node.emit(t.Event.PULL_DOWN_RELEASE), this._owner, this._refreshEventDispatching = !1) : (this._tweenChange.x > t.UIConfig.touchDragSensitivity || this._tweenChange.y > t.UIConfig.touchDragSensitivity) && (this._refreshEventDispatching = !0, this._owner.node.emit(t.Event.PULL_UP_RELEASE, this._owner), this._refreshEventDispatching = !1), this._headerLockedSize > 0 && 0 == a[this._refreshBarAxis]) a[this._refreshBarAxis] = this._headerLockedSize, this._tweenChange.x = a.x - this._tweenStart.x, this._tweenChange.y = a.y - this._tweenStart.y;else if (this._footerLockedSize > 0 && a[this._refreshBarAxis] == -this._overlapSize[this._refreshBarAxis]) {
            var o = this._overlapSize[this._refreshBarAxis];
            0 == o ? o = Math.max(this._contentSize[this._refreshBarAxis] + this._footerLockedSize - this._viewSize[this._refreshBarAxis], 0) : o += this._footerLockedSize, a[this._refreshBarAxis] = -o, this._tweenChange.x = a.x - this._tweenStart.x, this._tweenChange.y = a.y - this._tweenStart.y;
          }
          this._tweenDuration.x = this._tweenDuration.y = n;
        } else {
          if (this._inertiaDisabled) this._tweenDuration.x = this._tweenDuration.y = n;else {
            var r = 60 * (t.ToolSet.getTime() - this._lastMoveTime) - 1;

            if (r > 1) {
              var s = Math.pow(.833, r);
              this._velocity.x = this._velocity.x * s, this._velocity.y = this._velocity.y * s;
            }

            this.updateTargetAndDuration(this._tweenStart, a);
          }
          if (l.x = a.x - this._tweenStart.x, l.y = a.y - this._tweenStart.y, this.loopCheckingTarget(a), (this._pageMode || this._snapToItem) && this.alignPosition(a, !0), this._tweenChange.x = a.x - this._tweenStart.x, this._tweenChange.y = a.y - this._tweenStart.y, 0 == this._tweenChange.x && 0 == this._tweenChange.y) return void this.updateScrollBarVisible();
          (this._pageMode || this._snapToItem) && (this.fixDuration("x", l.x), this.fixDuration("y", l.y));
        }

        this.startTween(2);
      } else this._dragged = !1;
    }, c.prototype.onRollOver = function () {
      this._hover = !0, this.updateScrollBarVisible();
    }, c.prototype.onRollOut = function () {
      this._hover = !1, this.updateScrollBarVisible();
    }, c.prototype.onMouseWheel = function (t) {
      if (this._mouseWheelEnabled) {
        var e = t.mouseWheelDelta > 0 ? -1 : 1;
        this._overlapSize.x > 0 && 0 == this._overlapSize.y ? this._pageMode ? this.setPosX(this._xPos + this._pageSize.x * e, !1) : this.setPosX(this._xPos + this._mouseWheelStep * e, !1) : this._pageMode ? this.setPosY(this._yPos + this._pageSize.y * e, !1) : this.setPosY(this._yPos + this._mouseWheelStep * e, !1);
      }
    }, c.prototype.updateScrollBarPos = function () {
      this._vtScrollBar && this._vtScrollBar.setScrollPerc(0 == this._overlapSize.y ? 0 : t.ToolSet.clamp(this._container.y, 0, this._overlapSize.y) / this._overlapSize.y), this._hzScrollBar && this._hzScrollBar.setScrollPerc(0 == this._overlapSize.x ? 0 : t.ToolSet.clamp(-this._container.x, 0, this._overlapSize.x) / this._overlapSize.x), this.checkRefreshBar();
    }, c.prototype.updateScrollBarVisible = function () {
      this._vtScrollBar && (this._viewSize.y <= this._vtScrollBar.minSize || this._vScrollNone ? this._vtScrollBar.node.active = !1 : this.updateScrollBarVisible2(this._vtScrollBar)), this._hzScrollBar && (this._viewSize.x <= this._hzScrollBar.minSize || this._hScrollNone ? this._hzScrollBar.node.active = !1 : this.updateScrollBarVisible2(this._hzScrollBar));
    }, c.prototype.updateScrollBarVisible2 = function (e) {
      this._scrollBarDisplayAuto && t.GTween.kill(e, !1, "alpha"), !this._scrollBarDisplayAuto || this._hover || 0 != this._tweening || this._dragged || e.gripDragging ? (e.alpha = 1, e.node.active = !0) : e.node.active && t.GTween.to(1, 0, .5).setDelay(.5).onComplete(this.__barTweenComplete, this).setTarget(e, "alpha");
    }, c.prototype.__barTweenComplete = function (t) {
      var e = t.target;
      e.alpha = 1, e.node.active = !1;
    }, c.prototype.getLoopPartSize = function (t, e) {
      return (this._contentSize[e] + ("x" == e ? this._owner.columnGap : this._owner.lineGap)) / t;
    }, c.prototype.loopCheckingCurrent = function () {
      var t = !1;
      return 1 == this._loop && this._overlapSize.x > 0 ? this._xPos < .001 ? (this._xPos += this.getLoopPartSize(2, "x"), t = !0) : this._xPos >= this._overlapSize.x && (this._xPos -= this.getLoopPartSize(2, "x"), t = !0) : 2 == this._loop && this._overlapSize.y > 0 && (this._yPos < .001 ? (this._yPos += this.getLoopPartSize(2, "y"), t = !0) : this._yPos >= this._overlapSize.y && (this._yPos -= this.getLoopPartSize(2, "y"), t = !0)), t && this._container.setPosition(Math.floor(-this._xPos), -Math.floor(-this._yPos)), t;
    }, c.prototype.loopCheckingTarget = function (t) {
      1 == this._loop && this.loopCheckingTarget2(t, "x"), 2 == this._loop && this.loopCheckingTarget2(t, "y");
    }, c.prototype.loopCheckingTarget2 = function (t, e) {
      var i, o;
      t[e] > 0 ? (i = this.getLoopPartSize(2, e), (o = this._tweenStart[e] - i) <= 0 && o >= -this._overlapSize[e] && (t[e] -= i, this._tweenStart[e] = o)) : t[e] < -this._overlapSize[e] && (i = this.getLoopPartSize(2, e), (o = this._tweenStart[e] + i) <= 0 && o >= -this._overlapSize[e] && (t[e] += i, this._tweenStart[e] = o));
    }, c.prototype.loopCheckingNewPos = function (e, i) {
      if (0 == this._overlapSize[i]) return e;
      var o,
          n = "x" == i ? this._xPos : this._yPos,
          r = !1;
      return e < .001 ? (e += this.getLoopPartSize(2, i)) > n && (o = this.getLoopPartSize(6, i), o = Math.ceil((e - n) / o) * o, n = t.ToolSet.clamp(n + o, 0, this._overlapSize[i]), r = !0) : e >= this._overlapSize[i] && (e -= this.getLoopPartSize(2, i)) < n && (o = this.getLoopPartSize(6, i), o = Math.ceil((n - e) / o) * o, n = t.ToolSet.clamp(n - o, 0, this._overlapSize[i]), r = !0), r && ("x" == i ? this._container.x = -Math.floor(n) : this._container.y = Math.floor(n)), e;
    }, c.prototype.alignPosition = function (t, e) {
      var i = 0,
          o = 0;

      if (1 == this._snappingPolicy) {
        if (this._owner.numChildren > 0) {
          var n = this._owner.getChildAt(0);

          i = Math.floor(.5 * this._viewSize.x - .5 * n.width), o = Math.floor(.5 * this._viewSize.y - .5 * n.height);
        }
      } else 2 == this._snappingPolicy && this._owner.numChildren > 0 && (n = this._owner.getChildAt(0), i = Math.floor(this._viewSize.x - n.width), o = Math.floor(this._viewSize.y - n.height));

      if (t.x -= i, t.y -= o, this._pageMode) t.x = this.alignByPage(t.x, "x", e), t.y = this.alignByPage(t.y, "y", e);else if (this._snapToItem) {
        var r = this._owner.getSnappingPosition(-t.x, -t.y, s);

        t.x < 0 && t.x > -this._overlapSize.x && (t.x = -r.x), t.y < 0 && t.y > -this._overlapSize.y && (t.y = -r.y);
      }
      t.x += i, t.y += o;
    }, c.prototype.alignByPage = function (t, e, i) {
      var o;
      if (t > 0) o = 0;else if (t < -this._overlapSize[e]) o = Math.ceil(this._contentSize[e] / this._pageSize[e]) - 1;else {
        o = Math.floor(-t / this._pageSize[e]);
        var n = i ? t - this._containerPos[e] : t - ("x" == e ? this._container.x : -this._container.y),
            r = Math.min(this._pageSize[e], this._contentSize[e] - (o + 1) * this._pageSize[e]),
            s = -t - o * this._pageSize[e];
        Math.abs(n) > this._pageSize[e] ? s > .5 * r && o++ : s > r * (n < 0 ? .3 : .7) && o++, (t = -o * this._pageSize[e]) < -this._overlapSize[e] && (t = -this._overlapSize[e]);
      }

      if (i) {
        var h,
            a = this._tweenStart[e];
        h = a > 0 ? 0 : a < -this._overlapSize[e] ? Math.ceil(this._contentSize[e] / this._pageSize[e]) - 1 : Math.floor(-a / this._pageSize[e]);
        var l = Math.floor(-this._containerPos[e] / this._pageSize[e]);
        Math.abs(o - l) > 1 && Math.abs(h - l) <= 1 && (t = -(o = o > l ? l + 1 : l - 1) * this._pageSize[e]);
      }

      return t;
    }, c.prototype.updateTargetAndDuration = function (t, e) {
      e.x = this.updateTargetAndDuration2(t.x, "x"), e.y = this.updateTargetAndDuration2(t.y, "y");
    }, c.prototype.updateTargetAndDuration2 = function (t, e) {
      var i = this._velocity[e],
          o = 0;
      if (t > 0) t = 0;else if (t < -this._overlapSize[e]) t = -this._overlapSize[e];else {
        var r = cc.sys.isMobile,
            s = Math.abs(i) * this._velocityScale;

        r && (s *= 1136 / Math.max(cc.winSize.width, cc.winSize.height));
        var h = 0;
        this._pageMode || !r ? s > 500 && (h = Math.pow((s - 500) / 500, 2)) : s > 1e3 && (h = Math.pow((s - 1e3) / 1e3, 2)), 0 != h && (h > 1 && (h = 1), s *= h, i *= h, this._velocity[e] = i, o = Math.log(60 / s) / Math.log(this._decelerationRate) / 60, t += Math.floor(i * o * .4));
      }
      return o < n && (o = n), this._tweenDuration[e] = o, t;
    }, c.prototype.fixDuration = function (t, e) {
      if (!(0 == this._tweenChange[t] || Math.abs(this._tweenChange[t]) >= Math.abs(e))) {
        var i = Math.abs(this._tweenChange[t] / e) * this._tweenDuration[t];

        i < n && (i = n), this._tweenDuration[t] = i;
      }
    }, c.prototype.startTween = function (t) {
      this._tweenTime.set(cc.Vec2.ZERO), this._tweening = t, this.updateScrollBarVisible();
    }, c.prototype.killTween = function () {
      1 == this._tweening && (this._container.setPosition(this._tweenStart.x + this._tweenChange.x, -(this._tweenStart.y + this._tweenChange.y)), this._owner.node.emit(t.Event.SCROLL, this._owner)), this._tweening = 0, this.updateScrollBarVisible(), this._owner.node.emit(t.Event.SCROLL_END, this._owner);
    }, c.prototype.checkRefreshBar = function () {
      if (null != this._header || null != this._footer) {
        var t = "x" == this._refreshBarAxis ? this._container.x : -this._container.y;
        if (this._header) if (t > 0) {
          this._header.node.active = !0;
          var e = s;
          e.x = this._header.width, e.y = this._header.height, e[this._refreshBarAxis] = t, this._header.setSize(e.x, e.y);
        } else this._header.node.active = !1;

        if (this._footer) {
          var i = this._overlapSize[this._refreshBarAxis];
          t < -i || 0 == i && this._footerLockedSize > 0 ? (this._footer.node.active = !0, (e = s).x = this._footer.x, e.y = this._footer.y, e[this._refreshBarAxis] = i > 0 ? t + this._contentSize[this._refreshBarAxis] : Math.max(Math.min(t + this._viewSize[this._refreshBarAxis], this._viewSize[this._refreshBarAxis] - this._footerLockedSize), this._viewSize[this._refreshBarAxis] - this._contentSize[this._refreshBarAxis]), this._footer.setPosition(e.x, e.y), e.x = this._footer.width, e.y = this._footer.height, e[this._refreshBarAxis] = i > 0 ? -i - t : this._viewSize[this._refreshBarAxis] - this._footer[this._refreshBarAxis], this._footer.setSize(e.x, e.y)) : this._footer.node.active = !1;
        }
      }
    }, c.prototype.update = function (e) {
      if (0 != this._tweening) {
        var i = this.runTween("x", e),
            o = this.runTween("y", e);
        return this._container.setPosition(i, -o), 2 == this._tweening && (this._overlapSize.x > 0 && (this._xPos = t.ToolSet.clamp(-i, 0, this._overlapSize.x)), this._overlapSize.y > 0 && (this._yPos = t.ToolSet.clamp(-o, 0, this._overlapSize.y)), this._pageMode && this.updatePageController()), 0 == this._tweenChange.x && 0 == this._tweenChange.y ? (this._tweening = 0, this.loopCheckingCurrent(), this.updateScrollBarPos(), this.updateScrollBarVisible(), this._owner.node.emit(t.Event.SCROLL, this._owner), this._owner.node.emit(t.Event.SCROLL_END, this._owner)) : (this.updateScrollBarPos(), this._owner.node.emit(t.Event.SCROLL, this._owner)), !0;
      }
    }, c.prototype.runTween = function (t, e) {
      var i, o;

      if (0 != this._tweenChange[t]) {
        if (this._tweenTime[t] += e, this._tweenTime[t] >= this._tweenDuration[t]) i = this._tweenStart[t] + this._tweenChange[t], this._tweenChange[t] = 0;else {
          var r = (o = (o = this._tweenTime[t]) / this._tweenDuration[t] - 1) * o * o + 1;
          i = this._tweenStart[t] + Math.floor(this._tweenChange[t] * r);
        }
        var s = 0,
            h = -this._overlapSize[t];

        if (this._headerLockedSize > 0 && this._refreshBarAxis == t && (s = this._headerLockedSize), this._footerLockedSize > 0 && this._refreshBarAxis == t) {
          var a = this._overlapSize[this._refreshBarAxis];
          0 == a ? a = Math.max(this._contentSize[this._refreshBarAxis] + this._footerLockedSize - this._viewSize[this._refreshBarAxis], 0) : a += this._footerLockedSize, h = -a;
        }

        2 == this._tweening && this._bouncebackEffect ? i > 20 + s && this._tweenChange[t] > 0 || i > s && 0 == this._tweenChange[t] ? (this._tweenTime[t] = 0, this._tweenDuration[t] = n, this._tweenChange[t] = -i + s, this._tweenStart[t] = i) : (i < h - 20 && this._tweenChange[t] < 0 || i < h && 0 == this._tweenChange[t]) && (this._tweenTime[t] = 0, this._tweenDuration[t] = n, this._tweenChange[t] = h - i, this._tweenStart[t] = i) : i > s ? (i = s, this._tweenChange[t] = 0) : i < h && (i = h, this._tweenChange[t] = 0);
      } else i = "x" == t ? this._container.x : -this._container.y;

      return i;
    }, c;
  }(cc.Component);

  t.ScrollPane = e;
  var i = 0,
      o = .5,
      n = .3,
      r = .5,
      s = new cc.Vec2(),
      h = new cc.Rect(),
      a = new cc.Vec2(),
      l = new cc.Vec2();
}(fgui || (fgui = {})), function (t) {
  var e = function () {
    function e(t) {
      this._ownerBaseX = 0, this._ownerBaseY = 0, this._totalTimes = 0, this._totalTasks = 0, this._options = 0, this._totalDuration = 0, this._autoPlayTimes = 1, this._autoPlayDelay = 0, this._timeScale = 1, this._startTime = 0, this._endTime = 0, this._owner = t, this._items = new Array();
    }

    return e.prototype.play = function (t, e, i, o, n) {
      this._play(t, e, i, o, n, !1);
    }, e.prototype.playReverse = function (t, e, i) {
      this._play(t, e, i, 0, -1, !0);
    }, e.prototype.changePlayTimes = function (t) {
      this._totalTimes = t;
    }, e.prototype.setAutoPlay = function (t, e, i) {
      null == e && (e = -1), null == i && (i = 0), this._autoPlay != t && (this._autoPlay = t, this._autoPlayTimes = e, this._autoPlayDelay = i, this._autoPlay ? this._owner.onStage && this.play(null, this._autoPlayTimes, this._autoPlayDelay) : this._owner.onStage || this.stop(!1, !0));
    }, e.prototype._play = function (e, o, n, r, s, h) {
      null == o && (o = 1), null == n && (n = 0), null == r && (r = 0), null == s && (s = -1), this.stop(!0, !0), this._totalTimes = o, this._reversed = h, this._startTime = r, this._endTime = s, this._playing = !0, this._paused = !1, this._onComplete = e;

      for (var a = this._items.length, l = 0; l < a; l++) {
        var c = this._items[l];

        if (null == c.target ? c.targetId ? c.target = this._owner.getChildById(c.targetId) : c.target = this._owner : c.target != this._owner && c.target.parent != this._owner && (c.target = null), c.target && c.type == i.Transition) {
          var u = c.target.getTransition(c.value.transName);
          if (u == this && (u = null), u) if (0 == c.value.playTimes) {
            var _;

            for (_ = l - 1; _ >= 0; _--) {
              var p = this._items[_];

              if (p.type == i.Transition && p.value.trans == u) {
                p.value.stopTime = c.time - p.time;
                break;
              }
            }

            _ < 0 ? c.value.stopTime = 0 : u = null;
          } else c.value.stopTime = -1;
          c.value.trans = u;
        }
      }

      0 == n ? this.onDelayedPlay() : t.GTween.delayedCall(n).setTarget(this).onComplete(this.onDelayedPlay, this);
    }, e.prototype.stop = function (e, i) {
      if (null == e && (e = !0), this._playing) {
        this._playing = !1, this._totalTasks = 0, this._totalTimes = 0;
        var o = this._onComplete;
        this._onComplete = null, t.GTween.kill(this);
        var n = this._items.length;
        if (this._reversed) for (var r = n - 1; r >= 0; r--) {
          var s = this._items[r];
          null != s.target && this.stopItem(s, e);
        } else for (r = 0; r < n; r++) {
          null != (s = this._items[r]).target && this.stopItem(s, e);
        }
        i && null != o && o();
      }
    }, e.prototype.stopItem = function (t, e) {
      if (0 != t.displayLockToken && (t.target.releaseDisplayLock(t.displayLockToken), t.displayLockToken = 0), t.tweener && (t.tweener.kill(e), t.tweener = null, t.type != i.Shake || e || (t.target._gearLocked = !0, t.target.setPosition(t.target.x - t.value.lastOffsetX, t.target.y - t.value.lastOffsetY), t.target._gearLocked = !1)), t.type == i.Transition) {
        var o = t.value.trans;
        o && o.stop(e, !1);
      }
    }, e.prototype.setPaused = function (e) {
      if (this._playing && this._paused != e) {
        this._paused = e;
        var o = t.GTween.getTween(this);
        o && o.setPaused(e);

        for (var n = this._items.length, r = 0; r < n; r++) {
          var s = this._items[r];
          null != s.target && (s.type == i.Transition ? s.value.trans && s.value.trans.setPaused(e) : s.type == i.Animation && (e ? (s.value.flag = s.target.getProp(t.ObjectPropID.Playing), s.target.setProp(t.ObjectPropID.Playing, !1)) : s.target.setProp(t.ObjectPropID.Playing, s.value.flag)), s.tweener && s.tweener.setPaused(e));
        }
      }
    }, e.prototype.dispose = function () {
      this._playing && t.GTween.kill(this);

      for (var e = this._items.length, i = 0; i < e; i++) {
        var o = this._items[i];
        o.tweener && (o.tweener.kill(), o.tweener = null), o.target = null, o.hook = null, o.tweenConfig && (o.tweenConfig.endHook = null);
      }

      this._items.length = 0, this._playing = !1, this._onComplete = null;
    }, Object.defineProperty(e.prototype, "playing", {
      get: function get() {
        return this._playing;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.setValue = function (t) {
      for (var e = [], o = 1; o < arguments.length; o++) {
        e[o - 1] = arguments[o];
      }

      for (var n, r = this._items.length, s = 0; s < r; s++) {
        var h = this._items[s];
        if (h.label == t) n = h.tweenConfig ? h.tweenConfig.startValue : h.value;else {
          if (!h.tweenConfig || h.tweenConfig.endLabel != t) continue;
          n = h.tweenConfig.endValue;
        }

        switch (h.type) {
          case i.XY:
          case i.Size:
          case i.Pivot:
          case i.Scale:
          case i.Skew:
            n.b1 = !0, n.b2 = !0, n.f1 = parseFloat(e[0]), n.f2 = parseFloat(e[1]);
            break;

          case i.Alpha:
          case i.Rotation:
          case i.Color:
            n.f1 = parseFloat(e[0]);
            break;

          case i.Animation:
            n.frame = parseInt(e[0]), e.length > 1 && (n.playing = e[1]);
            break;

          case i.Visible:
            n.visible = e[0];
            break;

          case i.Sound:
            n.sound = e[0], e.length > 1 && (n.volume = parseFloat(e[1]));
            break;

          case i.Transition:
            n.transName = e[0], e.length > 1 && (n.playTimes = parseInt(e[1]));
            break;

          case i.Shake:
            n.amplitude = parseFloat(e[0]), e.length > 1 && (n.duration = parseFloat(e[1]));
            break;

          case i.ColorFilter:
            n.f1 = parseFloat(e[0]), n.f2 = parseFloat(e[1]), n.f3 = parseFloat(e[2]), n.f4 = parseFloat(e[3]);
            break;

          case i.Text:
          case i.Icon:
            n.text = e[0];
        }
      }
    }, e.prototype.setHook = function (t, e) {
      for (var i = this._items.length, o = 0; o < i; o++) {
        var n = this._items[o];

        if (n.label == t) {
          n.hook = e;
          break;
        }

        if (n.tweenConfig && n.tweenConfig.endLabel == t) {
          n.tweenConfig.endHook = e;
          break;
        }
      }
    }, e.prototype.clearHooks = function () {
      for (var t = this._items.length, e = 0; e < t; e++) {
        var i = this._items[e];
        i.hook = null, i.tweenConfig && (i.tweenConfig.endHook = null);
      }
    }, e.prototype.setTarget = function (t, e) {
      for (var i = this._items.length, o = 0; o < i; o++) {
        var n = this._items[o];
        n.label == t && (n.targetId = e.id, n.target = null);
      }
    }, e.prototype.setDuration = function (t, e) {
      for (var i = this._items.length, o = 0; o < i; o++) {
        var n = this._items[o];
        n.tweenConfig && n.label == t && (n.tweenConfig.duration = e);
      }
    }, e.prototype.getLabelTime = function (t) {
      for (var e = this._items.length, i = 0; i < e; i++) {
        var o = this._items[i];
        if (o.label == t) return o.time;
        if (o.tweenConfig && o.tweenConfig.endLabel == t) return o.time + o.tweenConfig.duration;
      }

      return Number.NaN;
    }, Object.defineProperty(e.prototype, "timeScale", {
      get: function get() {
        return this._timeScale;
      },
      set: function set(e) {
        if (this._timeScale != e && (this._timeScale = e, this._playing)) for (var o = this._items.length, n = 0; n < o; n++) {
          var r = this._items[n];
          r.tweener ? r.tweener.setTimeScale(e) : r.type == i.Transition ? r.value.trans && (r.value.trans.timeScale = e) : r.type == i.Animation && r.target && r.target.setProp(t.ObjectPropID.TimeScale, e);
        }
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.updateFromRelations = function (t, e, o) {
      var n = this._items.length;
      if (0 != n) for (var r = 0; r < n; r++) {
        var s = this._items[r];
        s.type == i.XY && s.targetId == t && (s.tweenConfig ? (s.tweenConfig.startValue.f1 += e, s.tweenConfig.startValue.f2 += o, s.tweenConfig.endValue.f1 += e, s.tweenConfig.endValue.f2 += o) : (s.value.f1 += e, s.value.f2 += o));
      }
    }, e.prototype.onEnable = function () {
      this._autoPlay && !this._playing && this.play(null, this._autoPlayTimes, this._autoPlayDelay);
    }, e.prototype.onDisable = function () {
      0 == (this._options & n) && this.stop(0 != (this._options & r), !1);
    }, e.prototype.onDelayedPlay = function () {
      if (this.internalPlay(), this._playing = this._totalTasks > 0, this._playing) {
        if (0 != (this._options & o)) for (var t = this._items.length, e = 0; e < t; e++) {
          var i = this._items[e];
          i.target && i.target != this._owner && (i.displayLockToken = i.target.addDisplayLock());
        }
      } else if (null != this._onComplete) {
        var n = this._onComplete;
        this._onComplete = null, n();
      }
    }, e.prototype.internalPlay = function () {
      this._ownerBaseX = this._owner.x, this._ownerBaseY = this._owner.y, this._totalTasks = 1;
      var t,
          e,
          o = this._items.length,
          n = !1;
      if (this._reversed) for (e = o - 1; e >= 0; e--) {
        null != (t = this._items[e]).target && this.playItem(t);
      } else for (e = 0; e < o; e++) {
        null != (t = this._items[e]).target && (t.type == i.Animation && 0 != this._startTime && t.time <= this._startTime ? (n = !0, t.value.flag = !1) : this.playItem(t));
      }
      n && this.skipAnimations(), this._totalTasks--;
    }, e.prototype.playItem = function (e) {
      var o;

      if (e.tweenConfig) {
        if (o = this._reversed ? this._totalDuration - e.time - e.tweenConfig.duration : e.time, -1 == this._endTime || o <= this._endTime) {
          var n, r;

          switch (this._reversed ? (n = e.tweenConfig.endValue, r = e.tweenConfig.startValue) : (n = e.tweenConfig.startValue, r = e.tweenConfig.endValue), e.value.b1 = n.b1 || r.b1, e.value.b2 = n.b2 || r.b2, e.type) {
            case i.XY:
            case i.Size:
            case i.Scale:
            case i.Skew:
              e.tweener = t.GTween.to2(n.f1, n.f2, r.f1, r.f2, e.tweenConfig.duration);
              break;

            case i.Alpha:
            case i.Rotation:
              e.tweener = t.GTween.to(n.f1, r.f1, e.tweenConfig.duration);
              break;

            case i.Color:
              e.tweener = t.GTween.toColor(n.f1, r.f1, e.tweenConfig.duration);
              break;

            case i.ColorFilter:
              e.tweener = t.GTween.to4(n.f1, n.f2, n.f3, n.f4, r.f1, r.f2, r.f3, r.f4, e.tweenConfig.duration);
          }

          e.tweener.setDelay(o).setEase(e.tweenConfig.easeType).setRepeat(e.tweenConfig.repeat, e.tweenConfig.yoyo).setTimeScale(this._timeScale).setTarget(e).onStart(this.onTweenStart, this).onUpdate(this.onTweenUpdate, this).onComplete(this.onTweenComplete, this), this._endTime >= 0 && e.tweener.setBreakpoint(this._endTime - o), this._totalTasks++;
        }
      } else e.type == i.Shake ? (o = this._reversed ? this._totalDuration - e.time - e.value.duration : e.time, e.value.offsetX = e.value.offsetY = 0, e.value.lastOffsetX = e.value.lastOffsetY = 0, e.tweener = t.GTween.shake(0, 0, e.value.amplitude, e.value.duration).setDelay(o).setTimeScale(this._timeScale).setTarget(e).onUpdate(this.onTweenUpdate, this).onComplete(this.onTweenComplete, this), this._endTime >= 0 && e.tweener.setBreakpoint(this._endTime - e.time), this._totalTasks++) : (o = this._reversed ? this._totalDuration - e.time : e.time) <= this._startTime ? (this.applyValue(e), this.callHook(e, !1)) : (-1 == this._endTime || o <= this._endTime) && (this._totalTasks++, e.tweener = t.GTween.delayedCall(o).setTimeScale(this._timeScale).setTarget(e).onComplete(this.onDelayedPlayItem, this));

      e.tweener && e.tweener.seek(this._startTime);
    }, e.prototype.skipAnimations = function () {
      for (var e, o, n, r, s, h, a = this._items.length, l = 0; l < a; l++) {
        if (!((h = this._items[l]).type != i.Animation || h.time > this._startTime || (r = h.value).flag)) {
          e = (s = h.target).getProp(t.ObjectPropID.Frame), o = s.getProp(t.ObjectPropID.Playing) ? 0 : -1, n = 0;

          for (var c = l; c < a; c++) {
            (h = this._items[c]).type != i.Animation || h.target != s || h.time > this._startTime || ((r = h.value).flag = !0, -1 != r.frame ? (e = r.frame, o = r.playing ? h.time : -1, n = 0) : r.playing ? o < 0 && (o = h.time) : (o >= 0 && (n += h.time - o), o = -1), this.callHook(h, !1));
          }

          o >= 0 && (n += this._startTime - o), s.setProp(t.ObjectPropID.Playing, o >= 0), s.setProp(t.ObjectPropID.Frame, e), n > 0 && s.setProp(t.ObjectPropID.DeltaTime, n);
        }
      }
    }, e.prototype.onDelayedPlayItem = function (t) {
      var e = t.target;
      e.tweener = null, this._totalTasks--, this.applyValue(e), this.callHook(e, !1), this.checkAllComplete();
    }, e.prototype.onTweenStart = function (t) {
      var e,
          o,
          n = t.target;
      n.type != i.XY && n.type != i.Size || (this._reversed ? (e = n.tweenConfig.endValue, o = n.tweenConfig.startValue) : (e = n.tweenConfig.startValue, o = n.tweenConfig.endValue), n.type == i.XY ? n.target != this._owner ? (e.b1 ? e.b3 && (t.startValue.x = e.f1 * this._owner.width) : t.startValue.x = n.target.x, e.b2 ? e.b3 && (t.startValue.y = e.f2 * this._owner.height) : t.startValue.y = n.target.y, o.b1 ? o.b3 && (t.endValue.x = o.f1 * this._owner.width) : t.endValue.x = t.startValue.x, o.b2 ? o.b3 && (t.endValue.y = o.f2 * this._owner.height) : t.endValue.y = t.startValue.y) : (e.b1 || (t.startValue.x = n.target.x - this._ownerBaseX), e.b2 || (t.startValue.y = n.target.y - this._ownerBaseY), o.b1 || (t.endValue.x = t.startValue.x), o.b2 || (t.endValue.y = t.startValue.y)) : (e.b1 || (t.startValue.x = n.target.width), e.b2 || (t.startValue.y = n.target.height), o.b1 || (t.endValue.x = t.startValue.x), o.b2 || (t.endValue.y = t.startValue.y)), n.tweenConfig.path && (n.value.b1 = n.value.b2 = !0, t.setPath(n.tweenConfig.path))), this.callHook(n, !1);
    }, e.prototype.onTweenUpdate = function (t) {
      var e = t.target;

      switch (e.type) {
        case i.XY:
        case i.Size:
        case i.Scale:
        case i.Skew:
          e.value.f1 = t.value.x, e.value.f2 = t.value.y, e.tweenConfig.path && (e.value.f1 += t.startValue.x, e.value.f2 += t.startValue.y);
          break;

        case i.Alpha:
        case i.Rotation:
          e.value.f1 = t.value.x;
          break;

        case i.Color:
          e.value.f1 = t.value.color;
          break;

        case i.ColorFilter:
          e.value.f1 = t.value.x, e.value.f2 = t.value.y, e.value.f3 = t.value.z, e.value.f4 = t.value.w;
          break;

        case i.Shake:
          e.value.offsetX = t.deltaValue.x, e.value.offsetY = t.deltaValue.y;
      }

      this.applyValue(e);
    }, e.prototype.onTweenComplete = function (t) {
      var e = t.target;
      e.tweener = null, this._totalTasks--, t.allCompleted && this.callHook(e, !0), this.checkAllComplete();
    }, e.prototype.onPlayTransCompleted = function () {
      this._totalTasks--, this.checkAllComplete();
    }, e.prototype.callHook = function (t, e) {
      e ? t.tweenConfig && null != t.tweenConfig.endHook && t.tweenConfig.endHook(t.label) : t.time >= this._startTime && null != t.hook && t.hook(t.label);
    }, e.prototype.checkAllComplete = function () {
      if (this._playing && 0 == this._totalTasks) if (this._totalTimes < 0) this.internalPlay(), 0 == this._totalTasks && t.GTween.delayedCall(0).setTarget(this).onComplete(this.checkAllComplete, this);else if (this._totalTimes--, this._totalTimes > 0) this.internalPlay(), 0 == this._totalTasks && t.GTween.delayedCall(0).setTarget(this).onComplete(this.checkAllComplete, this);else {
        this._playing = !1;

        for (var e = this._items.length, i = 0; i < e; i++) {
          var o = this._items[i];
          o.target && 0 != o.displayLockToken && (o.target.releaseDisplayLock(o.displayLockToken), o.displayLockToken = 0);
        }

        if (null != this._onComplete) {
          var n = this._onComplete;
          this._onComplete = null, n();
        }
      }
    }, e.prototype.applyValue = function (e) {
      e.target._gearLocked = !0;
      var o = e.value;

      switch (e.type) {
        case i.XY:
          e.target == this._owner ? o.b1 && o.b2 ? e.target.setPosition(o.f1 + this._ownerBaseX, o.f2 + this._ownerBaseY) : o.b1 ? e.target.x = o.f1 + this._ownerBaseX : e.target.y = o.f2 + this._ownerBaseY : o.b3 ? o.b1 && o.b2 ? e.target.setPosition(o.f1 * this._owner.width, o.f2 * this._owner.height) : o.b1 ? e.target.x = o.f1 * this._owner.width : o.b2 && (e.target.y = o.f2 * this._owner.height) : o.b1 && o.b2 ? e.target.setPosition(o.f1, o.f2) : o.b1 ? e.target.x = o.f1 : o.b2 && (e.target.y = o.f2);
          break;

        case i.Size:
          o.b1 || (o.f1 = e.target.width), o.b2 || (o.f2 = e.target.height), e.target.setSize(o.f1, o.f2);
          break;

        case i.Pivot:
          e.target.setPivot(o.f1, o.f2, e.target.pivotAsAnchor);
          break;

        case i.Alpha:
          e.target.alpha = o.f1;
          break;

        case i.Rotation:
          e.target.rotation = o.f1;
          break;

        case i.Scale:
          e.target.setScale(o.f1, o.f2);
          break;

        case i.Skew:
          e.target.setSkew(o.f1, o.f2);
          break;

        case i.Color:
          var n = e.target.getProp(t.ObjectPropID.Color);

          if (n instanceof cc.Color) {
            var r = Math.floor(o.f1);
            n.setR(r >> 16 & 255).setG(r >> 8 & 255).setB(255 & r), e.target.setProp(t.ObjectPropID.Color, n);
          }

          break;

        case i.Animation:
          o.frame >= 0 && e.target.setProp(t.ObjectPropID.Frame, o.frame), e.target.setProp(t.ObjectPropID.Playing, o.playing), e.target.setProp(t.ObjectPropID.TimeScale, this._timeScale);
          break;

        case i.Visible:
          e.target.visible = o.visible;
          break;

        case i.Transition:
          if (this._playing) {
            var s = o.trans;

            if (s) {
              this._totalTasks++;
              var h = this._startTime > e.time ? this._startTime - e.time : 0,
                  a = this._endTime >= 0 ? this._endTime - e.time : -1;
              o.stopTime >= 0 && (a < 0 || a > o.stopTime) && (a = o.stopTime), s.timeScale = this._timeScale, s._play(function () {
                this.onPlayTransCompleted(e);
              }.bind(this), o.playTimes, 0, h, a, this._reversed);
            }
          }

          break;

        case i.Sound:
          if (this._playing && e.time >= this._startTime) {
            if (null == o.audioClip) {
              var l = t.UIPackage.getItemByURL(o.sound);
              l && (o.audioClip = l.owner.getItemAsset(l));
            }

            o.audioClip && t.GRoot.inst.playOneShotSound(o.audioClip, o.volume);
          }

          break;

        case i.Shake:
          e.target.setPosition(e.target.x - o.lastOffsetX + o.offsetX, e.target.y - o.lastOffsetY + o.offsetY), o.lastOffsetX = o.offsetX, o.lastOffsetY = o.offsetY;
          break;

        case i.ColorFilter:
          break;

        case i.Text:
          e.target.text = o.text;
          break;

        case i.Icon:
          e.target.icon = o.text;
      }

      e.target._gearLocked = !1;
    }, e.prototype.setup = function (e) {
      this.name = e.readS(), this._options = e.readInt(), this._autoPlay = e.readBool(), this._autoPlayTimes = e.readInt(), this._autoPlayDelay = e.readFloat();

      for (var i = e.readShort(), o = 0; o < i; o++) {
        var n = e.readShort(),
            r = e.position;
        e.seek(r, 0);
        var a = new s(e.readByte());
        this._items[o] = a, a.time = e.readFloat();
        var l = e.readShort();

        if (a.targetId = l < 0 ? "" : this._owner.getChildAt(l).id, a.label = e.readS(), e.readBool()) {
          if (e.seek(r, 1), a.tweenConfig = new h(), a.tweenConfig.duration = e.readFloat(), a.time + a.tweenConfig.duration > this._totalDuration && (this._totalDuration = a.time + a.tweenConfig.duration), a.tweenConfig.easeType = e.readByte(), a.tweenConfig.repeat = e.readInt(), a.tweenConfig.yoyo = e.readBool(), a.tweenConfig.endLabel = e.readS(), e.seek(r, 2), this.decodeValue(a, e, a.tweenConfig.startValue), e.seek(r, 3), this.decodeValue(a, e, a.tweenConfig.endValue), e.version >= 2) {
            var c = e.readInt();

            if (c > 0) {
              a.tweenConfig.path = new t.GPath();

              for (var u = new Array(), _ = 0; _ < c; _++) {
                var p = e.readByte();

                switch (p) {
                  case t.CurveType.Bezier:
                    u.push(t.GPathPoint.newBezierPoint(e.readFloat(), e.readFloat(), e.readFloat(), e.readFloat()));
                    break;

                  case t.CurveType.CubicBezier:
                    u.push(t.GPathPoint.newCubicBezierPoint(e.readFloat(), e.readFloat(), e.readFloat(), e.readFloat(), e.readFloat(), e.readFloat()));
                    break;

                  default:
                    u.push(t.GPathPoint.newPoint(e.readFloat(), e.readFloat(), p));
                }
              }

              a.tweenConfig.path.create(u);
            }
          }
        } else a.time > this._totalDuration && (this._totalDuration = a.time), e.seek(r, 2), this.decodeValue(a, e, a.value);

        e.position = r + n;
      }
    }, e.prototype.decodeValue = function (t, e, o) {
      switch (t.type) {
        case i.XY:
        case i.Size:
        case i.Pivot:
        case i.Skew:
          o.b1 = e.readBool(), o.b2 = e.readBool(), o.f1 = e.readFloat(), o.f2 = e.readFloat(), e.version >= 2 && t.type == i.XY && (o.b3 = e.readBool());
          break;

        case i.Alpha:
        case i.Rotation:
          o.f1 = e.readFloat();
          break;

        case i.Scale:
          o.f1 = e.readFloat(), o.f2 = e.readFloat();
          break;

        case i.Color:
          var n = e.readColor();
          o.f1 = (n.getR() << 16) + (n.getG() << 8) + n.getB();
          break;

        case i.Animation:
          o.playing = e.readBool(), o.frame = e.readInt();
          break;

        case i.Visible:
          o.visible = e.readBool();
          break;

        case i.Sound:
          o.sound = e.readS(), o.volume = e.readFloat();
          break;

        case i.Transition:
          o.transName = e.readS(), o.playTimes = e.readInt();
          break;

        case i.Shake:
          o.amplitude = e.readFloat(), o.duration = e.readFloat();
          break;

        case i.ColorFilter:
          o.f1 = e.readFloat(), o.f2 = e.readFloat(), o.f3 = e.readFloat(), o.f4 = e.readFloat();
          break;

        case i.Text:
        case i.Icon:
          o.text = e.readS();
      }
    }, e;
  }();

  t.Transition = e;
  var i,
      o = 1,
      n = 2,
      r = 4;

  (function (t) {
    t[t.XY = 0] = "XY", t[t.Size = 1] = "Size", t[t.Scale = 2] = "Scale", t[t.Pivot = 3] = "Pivot", t[t.Alpha = 4] = "Alpha", t[t.Rotation = 5] = "Rotation", t[t.Color = 6] = "Color", t[t.Animation = 7] = "Animation", t[t.Visible = 8] = "Visible", t[t.Sound = 9] = "Sound", t[t.Transition = 10] = "Transition", t[t.Shake = 11] = "Shake", t[t.ColorFilter = 12] = "ColorFilter", t[t.Skew = 13] = "Skew", t[t.Text = 14] = "Text", t[t.Icon = 15] = "Icon", t[t.Unknown = 16] = "Unknown";
  })(i || (i = {}));

  var s = function s(t) {
    this.type = t, this.value = {}, this.displayLockToken = 0;
  },
      h = function h() {
    this.easeType = t.EaseType.QuadOut, this.startValue = {
      b1: !0,
      b2: !0
    }, this.endValue = {
      b1: !0,
      b2: !0
    };
  };
}(fgui || (fgui = {})), function (t) {
  var e = function () {
    function e() {}

    return e.loadFromXML = function (t) {
      var i = {};
      e.strings = i;

      for (var o = new cc.SAXParser().parse(t).documentElement.childNodes, n = o.length, r = 0; r < n; r++) {
        var s = o[r];

        if ("string" == s.tagName) {
          var h = s.getAttribute("name"),
              a = s.childNodes.length > 0 ? s.firstChild.nodeValue : "",
              l = h.indexOf("-");
          if (-1 == l) continue;
          var c = h.substr(0, l),
              u = h.substr(l + 1),
              _ = i[c];
          _ || (_ = {}, i[c] = _), _[u] = a;
        }
      }
    }, e.translateComponent = function (i) {
      if (null != e.strings) {
        var o = e.strings[i.owner.id + i.id];

        if (null != o) {
          var n,
              r,
              s,
              h,
              a,
              l,
              c,
              u,
              _,
              p = i.rawData;

          p.seek(0, 2);
          var d = p.readShort();

          for (a = 0; a < d; a++) {
            c = p.readShort(), u = p.position, p.seek(u, 0);
            var f = p.readByte(),
                g = f;
            p.skip(4), n = p.readS(), g == t.ObjectType.Component && p.seek(u, 6) && (g = p.readByte()), p.seek(u, 1), null != (r = o[n + "-tips"]) && p.writeS(r), p.seek(u, 2);
            var y = p.readShort();

            for (l = 0; l < y; l++) {
              if (s = p.readShort(), s += p.position, 6 == p.readByte()) {
                for (p.skip(2), _ = p.readShort(), b = 0; b < _; b++) {
                  null != p.readS() && (null != (r = o[n + "-texts_" + b]) ? p.writeS(r) : p.skip(2));
                }

                p.readBool() && null != (r = o[n + "-texts_def"]) && p.writeS(r);
              }

              p.position = s;
            }

            if (f == t.ObjectType.Component && p.version >= 2) {
              p.seek(u, 4), p.skip(2), p.skip(4 * p.readShort());

              for (var m = p.readShort(), b = 0; b < m; b++) {
                var v = p.readS();
                0 == p.readShort() && null != (r = o[n + "-cp-" + v]) ? p.writeS(r) : p.skip(2);
              }
            }

            switch (g) {
              case t.ObjectType.Text:
              case t.ObjectType.RichText:
              case t.ObjectType.InputText:
                null != (r = o[n]) && (p.seek(u, 6), p.writeS(r)), null != (r = o[n + "-prompt"]) && (p.seek(u, 4), p.writeS(r));
                break;

              case t.ObjectType.List:
              case t.ObjectType.Tree:
                for (p.seek(u, 8), p.skip(2), h = p.readShort(), l = 0; l < h; l++) {
                  if (s = p.readShort(), s += p.position, p.skip(2), g == t.ObjectType.Tree && p.skip(2), null != (r = o[n + "-" + l]) ? p.writeS(r) : p.skip(2), null != (r = o[n + "-" + l + "-0"]) ? p.writeS(r) : p.skip(2), p.version >= 2) for (p.skip(6), p.skip(4 * p.readUshort()), m = p.readUshort(), b = 0; b < m; b++) {
                    v = p.readS(), 0 == p.readUshort() && null != (r = o[n + "-" + l + "-" + v]) ? p.writeS(r) : p.skip(2);
                  }
                  p.position = s;
                }

                break;

              case t.ObjectType.Label:
                p.seek(u, 6) && p.readByte() == g && (null != (r = o[n]) ? p.writeS(r) : p.skip(2), p.skip(2), p.readBool() && p.skip(4), p.skip(4), p.readBool() && null != (r = o[n + "-prompt"]) && p.writeS(r));
                break;

              case t.ObjectType.Button:
                p.seek(u, 6) && p.readByte() == g && (null != (r = o[n]) ? p.writeS(r) : p.skip(2), null != (r = o[n + "-0"]) && p.writeS(r));
                break;

              case t.ObjectType.ComboBox:
                if (p.seek(u, 6) && p.readByte() == g) {
                  for (h = p.readShort(), l = 0; l < h; l++) {
                    s = p.readShort(), s += p.position, null != (r = o[n + "-" + l]) && p.writeS(r), p.position = s;
                  }

                  null != (r = o[n]) && p.writeS(r);
                }

            }

            p.position = u + c;
          }
        }
      }
    }, e;
  }();

  t.TranslationHelper = e;
}(fgui || (fgui = {})), function (t) {
  var e = function () {
    function e() {}

    return e.defaultFont = "Arial", e.modalLayerColor = new cc.Color(51, 51, 51, 51), e.buttonSoundVolumeScale = 1, e.defaultScrollStep = 25, e.defaultScrollDecelerationRate = .967, e.defaultScrollBarDisplay = t.ScrollBarDisplayType.Visible, e.defaultScrollTouchEffect = !0, e.defaultScrollBounceEffect = !0, e.defaultComboBoxVisibleItemCount = 10, e.touchScrollSensitivity = 20, e.touchDragSensitivity = 10, e.clickDragSensitivity = 2, e.bringWindowToFrontOnClick = !0, e.frameTimeForAsyncUIConstruction = .002, e.linkUnderline = !0, e.defaultUIGroup = "UI", e;
  }();

  t.UIConfig = e, t.addLoadHandler = function () {};
  var i = {};
  t.registerFont = function (t, e) {
    e instanceof cc.Font ? i[t] = e : i[t] = cc.loader.getRes(t, cc.Font);
  }, t.getFontByName = function (t) {
    return i[t];
  };
}(fgui || (fgui = {})), function (t) {
  var e = function () {
    function e() {}

    return e.setExtension = function (i, o) {
      if (null == i) throw new Error("Invaild url: " + i);
      var n = t.UIPackage.getItemByURL(i);
      n && (n.extensionType = o), e.extensions[i] = o;
    }, e.setLoaderExtension = function (t) {
      e.loaderType = t;
    }, e.resolveExtension = function (t) {
      var i = e.extensions["ui://" + t.owner.id + t.id];
      i || (i = e.extensions["ui://" + t.owner.name + "/" + t.name]), i && (t.extensionType = i);
    }, e.newObject = function (i, o) {
      var n;
      if (e.counter++, "number" == typeof i) switch (i) {
        case t.ObjectType.Image:
          return new t.GImage();

        case t.ObjectType.MovieClip:
          return new t.GMovieClip();

        case t.ObjectType.Component:
          return new t.GComponent();

        case t.ObjectType.Text:
          return new t.GTextField();

        case t.ObjectType.RichText:
          return new t.GRichTextField();

        case t.ObjectType.InputText:
          return new t.GTextInput();

        case t.ObjectType.Group:
          return new t.GGroup();

        case t.ObjectType.List:
          return new t.GList();

        case t.ObjectType.Graph:
          return new t.GGraph();

        case t.ObjectType.Loader:
          return e.loaderType ? new e.loaderType() : new t.GLoader();

        case t.ObjectType.Button:
          return new t.GButton();

        case t.ObjectType.Label:
          return new t.GLabel();

        case t.ObjectType.ProgressBar:
          return new t.GProgressBar();

        case t.ObjectType.Slider:
          return new t.GSlider();

        case t.ObjectType.ScrollBar:
          return new t.GScrollBar();

        case t.ObjectType.ComboBox:
          return new t.GComboBox();

        case t.ObjectType.Tree:
          return new t.GTree();

        case t.ObjectType.Loader3D:
          return new t.GLoader3D();

        default:
          return null;
      } else (n = i.type == t.PackageItemType.Component ? o ? new o() : i.extensionType ? new i.extensionType() : e.newObject(i.objectType) : e.newObject(i.objectType)) && (n.packageItem = i);
      return n;
    }, e.counter = 0, e.extensions = {}, e;
  }();

  t.UIObjectFactory = e;
}(fgui || (fgui = {})), function (t) {
  var e,
      i = function () {
    function e() {
      this._items = [], this._itemsById = {}, this._itemsByName = {}, this._sprites = {}, this._dependencies = [], this._branches = [], this._branchIndex = -1;
    }

    return Object.defineProperty(e, "branch", {
      get: function get() {
        return e._branch;
      },
      set: function set(t) {
        for (var i in e._branch = t, e._instById) {
          var o = e._instById[i];
          o._branches && (o._branchIndex = o._branches.indexOf(t));
        }
      },
      enumerable: !1,
      configurable: !0
    }), e.getVar = function (t) {
      return e._vars[t];
    }, e.setVar = function (t, i) {
      e._vars[t] = i;
    }, e.getById = function (t) {
      return e._instById[t];
    }, e.getByName = function (t) {
      return e._instByName[t];
    }, e.addPackage = function (i) {
      var o = e._instById[i];
      if (o) return o;
      var n = cc.resources.get(i, cc.BufferAsset);
      if (!n) throw "Resource '" + i + "' not ready";
      if (!n._buffer) throw "Missing asset data.";
      return (o = new e())._bundle = cc.resources, o.loadPackage(new t.ByteBuffer(n._buffer), i), e._instById[o.id] = o, e._instByName[o.name] = o, e._instById[o._path] = o, o;
    }, e.loadPackage = function () {
      for (var i, n, r, s, h = [], a = 0; a < arguments.length; a++) {
        h[a] = arguments[a];
      }

      h[0] instanceof cc.AssetManager.Bundle ? (s = h[0], i = h[1], h.length > 3 ? (n = h[2], r = h[3]) : r = h[2]) : (i = h[0], h.length > 2 ? (n = h[1], r = h[2]) : r = h[1]), (s = s || cc.resources).load(i, cc.BufferAsset, n, function (h, a) {
        if (h) null != r && r(h, null);else {
          var l = new e();
          l._bundle = s, l.loadPackage(new t.ByteBuffer(a._buffer), i);

          for (var c = l._items.length, u = [], _ = [], p = 0; p < c; p++) {
            var d = l._items[p];

            if (d.type == t.PackageItemType.Atlas || d.type == t.PackageItemType.Sound) {
              var f = o[d.type];
              u.push(d.file), _.push(f);
            }
          }

          var g,
              y = u.length,
              m = function m(t) {
            t && (g = t), --y <= 0 && (e._instById[l.id] = l, e._instByName[l.name] = l, l._path && (e._instById[l._path] = l), null != r && r(g, l));
          };

          y > 0 ? u.forEach(function (t, e) {
            s.load(t, _[e], n, m);
          }) : m();
        }
      });
    }, e.removePackage = function (t) {
      var i = e._instById[t];
      if (i || (i = e._instByName[t]), !i) throw "No package found: " + t;
      i.dispose(), delete e._instById[i.id], delete e._instByName[i.name], i._path && delete e._instById[i._path];
    }, e.createObject = function (t, i, o) {
      var n = e.getByName(t);
      return n ? n.createObject(i, o) : null;
    }, e.createObjectFromURL = function (t, i) {
      var o = e.getItemByURL(t);
      return o ? o.owner.internalCreateObject(o, i) : null;
    }, e.getItemURL = function (t, i) {
      var o = e.getByName(t);
      if (!o) return null;
      var n = o._itemsByName[i];
      return n ? "ui://" + o.id + n.id : null;
    }, e.getItemByURL = function (t) {
      var i = t.indexOf("//");
      if (-1 == i) return null;
      var o = t.indexOf("/", i + 2);

      if (-1 == o) {
        if (t.length > 13) {
          var n = t.substr(5, 8),
              r = e.getById(n);

          if (null != r) {
            var s = t.substr(13);
            return r.getItemById(s);
          }
        }
      } else {
        var h = t.substr(i + 2, o - i - 2);

        if (null != (r = e.getByName(h))) {
          var a = t.substr(o + 1);
          return r.getItemByName(a);
        }
      }

      return null;
    }, e.normalizeURL = function (t) {
      if (null == t) return null;
      var i = t.indexOf("//");
      if (-1 == i) return null;
      var o = t.indexOf("/", i + 2);
      if (-1 == o) return t;
      var n = t.substr(i + 2, o - i - 2),
          r = t.substr(o + 1);
      return e.getItemURL(n, r);
    }, e.setStringsSource = function (e) {
      t.TranslationHelper.loadFromXML(e);
    }, e.prototype.loadPackage = function (i, o) {
      if (1179080009 != i.readUint()) throw "FairyGUI: old package format found in '" + o + "'";
      this._path = o, i.version = i.readInt();
      var n = i.version >= 2;
      i.readBool(), this._id = i.readString(), this._name = i.readString(), i.skip(20);
      var r,
          s,
          h,
          a,
          l,
          c = i.position;
      i.seek(c, 4), r = i.readInt();

      var u,
          _ = new Array(r);

      for (i.stringTable = _, s = 0; s < r; s++) {
        _[s] = i.readString();
      }

      if (i.seek(c, 5)) for (r = i.readInt(), s = 0; s < r; s++) {
        var p = i.readUshort(),
            d = i.readInt();
        _[p] = i.readString(d);
      }

      for (i.seek(c, 0), r = i.readShort(), s = 0; s < r; s++) {
        this._dependencies.push({
          id: i.readS(),
          name: i.readS()
        });
      }

      n && ((r = i.readShort()) > 0 && (this._branches = i.readSArray(r), e._branch && (this._branchIndex = this._branches.indexOf(e._branch))), l = r > 0), i.seek(c, 1);
      var f = o.lastIndexOf("/"),
          g = -1 == f ? "" : o.substr(0, f + 1);

      for (o += "_", r = i.readShort(), s = 0; s < r; s++) {
        switch (h = i.readInt(), h += i.position, (u = new t.PackageItem()).owner = this, u.type = i.readByte(), u.id = i.readS(), u.name = i.readS(), i.readS(), u.file = i.readS(), i.readBool(), u.width = i.readInt(), u.height = i.readInt(), u.type) {
          case t.PackageItemType.Image:
            u.objectType = t.ObjectType.Image;
            var y = i.readByte();
            1 == y ? (u.scale9Grid = new cc.Rect(), u.scale9Grid.x = i.readInt(), u.scale9Grid.y = i.readInt(), u.scale9Grid.width = i.readInt(), u.scale9Grid.height = i.readInt(), u.tileGridIndice = i.readInt()) : 2 == y && (u.scaleByTile = !0), u.smoothing = i.readBool();
            break;

          case t.PackageItemType.MovieClip:
            u.smoothing = i.readBool(), u.objectType = t.ObjectType.MovieClip, u.rawData = i.readBuffer();
            break;

          case t.PackageItemType.Font:
            u.rawData = i.readBuffer();
            break;

          case t.PackageItemType.Component:
            var m = i.readByte();
            u.objectType = m > 0 ? m : t.ObjectType.Component, u.rawData = i.readBuffer(), t.UIObjectFactory.resolveExtension(u);
            break;

          case t.PackageItemType.Atlas:
          case t.PackageItemType.Sound:
          case t.PackageItemType.Misc:
            u.file = o + cc.path.mainFileName(u.file);
            break;

          case t.PackageItemType.Spine:
          case t.PackageItemType.DragonBones:
            u.file = g + cc.path.mainFileName(u.file), u.skeletonAnchor = new cc.Vec2(), u.skeletonAnchor.x = i.readFloat(), u.skeletonAnchor.y = i.readFloat();
        }

        if (n) {
          (a = i.readS()) && (u.name = a + "/" + u.name);
          var b = i.readUbyte();
          b > 0 && (l ? u.branches = i.readSArray(b) : this._itemsById[i.readS()] = u);
          var v = i.readUbyte();
          v > 0 && (u.highResolution = i.readSArray(v));
        }

        this._items.push(u), this._itemsById[u.id] = u, null != u.name && (this._itemsByName[u.name] = u), i.position = h;
      }

      for (i.seek(c, 2), r = i.readShort(), s = 0; s < r; s++) {
        h = i.readShort(), h += i.position;
        var C = i.readS();
        u = this._itemsById[i.readS()];
        var w = new cc.Rect();
        w.x = i.readInt(), w.y = i.readInt(), w.width = i.readInt(), w.height = i.readInt();
        var S = {
          atlas: u,
          rect: w,
          offset: new cc.Vec2(),
          originalSize: new cc.Size(0, 0)
        };
        S.rotated = i.readBool(), n && i.readBool() ? (S.offset.x = i.readInt(), S.offset.y = i.readInt(), S.originalSize.width = i.readInt(), S.originalSize.height = i.readInt()) : (S.originalSize.width = S.rect.width, S.originalSize.height = S.rect.height), this._sprites[C] = S, i.position = h;
      }

      if (i.seek(c, 3)) for (r = i.readShort(), s = 0; s < r; s++) {
        h = i.readInt(), h += i.position, (u = this._itemsById[i.readS()]) && u.type == t.PackageItemType.Image && (u.hitTestData = new t.PixelHitTestData(i)), i.position = h;
      }
    }, e.prototype.dispose = function () {
      for (var t = this._items.length, e = 0; e < t; e++) {
        var i = this._items[e];
        i.asset && cc.assetManager.releaseAsset(i.asset);
      }
    }, Object.defineProperty(e.prototype, "id", {
      get: function get() {
        return this._id;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "name", {
      get: function get() {
        return this._name;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "path", {
      get: function get() {
        return this._path;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "dependencies", {
      get: function get() {
        return this._dependencies;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.createObject = function (t, e) {
      var i = this._itemsByName[t];
      return i ? this.internalCreateObject(i, e) : null;
    }, e.prototype.internalCreateObject = function (i, o) {
      var n = t.UIObjectFactory.newObject(i, o);
      return null == n ? null : (e._constructing++, n.constructFromResource(), e._constructing--, n);
    }, e.prototype.getItemById = function (t) {
      return this._itemsById[t];
    }, e.prototype.getItemByName = function (t) {
      return this._itemsByName[t];
    }, e.prototype.getItemAssetByName = function (t) {
      var e = this._itemsByName[t];
      if (null == e) throw "Resource not found -" + t;
      return this.getItemAsset(e);
    }, e.prototype.getItemAsset = function (e) {
      switch (e.type) {
        case t.PackageItemType.Image:
          if (!e.decoded) {
            e.decoded = !0;
            var i = this._sprites[e.id];

            if (i) {
              var n = this.getItemAsset(i.atlas);

              if (n) {
                var r = new cc.SpriteFrame(n, i.rect, i.rotated, new cc.Vec2(i.offset.x - (i.originalSize.width - i.rect.width) / 2, -(i.offset.y - (i.originalSize.height - i.rect.height) / 2)), i.originalSize);
                e.scale9Grid && (r.insetLeft = e.scale9Grid.x, r.insetTop = e.scale9Grid.y, r.insetRight = e.width - e.scale9Grid.xMax, r.insetBottom = e.height - e.scale9Grid.yMax), e.asset = r;
              }
            }
          }

          break;

        case t.PackageItemType.Atlas:
        case t.PackageItemType.Sound:
          e.decoded || (e.decoded = !0, e.asset = this._bundle.get(e.file, o[e.type]), e.asset || console.log("Resource '" + e.file + "' not found"));
          break;

        case t.PackageItemType.Font:
          e.decoded || (e.decoded = !0, this.loadFont(e));
          break;

        case t.PackageItemType.MovieClip:
          e.decoded || (e.decoded = !0, this.loadMovieClip(e));
      }

      return e.asset;
    }, e.prototype.getItemAssetAsync = function (e, i) {
      if (e.decoded) i(null, e);else if (e.loading) e.loading.push(i);else switch (e.type) {
        case t.PackageItemType.Spine:
          e.loading = [i], this.loadSpine(e);
          break;

        case t.PackageItemType.DragonBones:
          e.loading = [i], this.loadDragonBones(e);
          break;

        default:
          this.getItemAsset(e), i(null, e);
      }
    }, e.prototype.loadAllAssets = function () {
      for (var t = this._items.length, e = 0; e < t; e++) {
        var i = this._items[e];
        this.getItemAsset(i);
      }
    }, e.prototype.loadMovieClip = function (t) {
      var e = t.rawData;
      e.seek(0, 0), t.interval = e.readInt() / 1e3, t.swing = e.readBool(), t.repeatDelay = e.readInt() / 1e3, e.seek(0, 1);
      var i,
          o,
          n = e.readShort();
      t.frames = Array(n);

      for (var r = 0; r < n; r++) {
        var s = e.readShort();
        s += e.position;
        var h = new cc.Rect();
        h.x = e.readInt(), h.y = e.readInt(), h.width = e.readInt(), h.height = e.readInt();
        var a = {
          rect: h,
          addDelay: e.readInt() / 1e3
        };

        if (null != (i = e.readS()) && null != (o = this._sprites[i])) {
          var l = this.getItemAsset(o.atlas);
          l && (t.width, a.rect.width, a.texture = new cc.SpriteFrame(l, o.rect, o.rotated, new cc.Vec2(a.rect.x - (t.width - a.rect.width) / 2, -(a.rect.y - (t.height - a.rect.height) / 2)), new cc.Size(t.width, t.height)));
        }

        t.frames[r] = a, e.position = s;
      }
    }, e.prototype.loadFont = function (t) {
      var e = new cc.LabelAtlas();
      t.asset = e, e._fntConfig = {
        commonHeight: 0,
        fontSize: 0,
        kerningDict: {},
        fontDefDictionary: {}
      };
      var i = e._fntConfig.fontDefDictionary,
          o = t.rawData;
      o.seek(0, 0);
      var n = o.readBool(),
          r = o.readBool(),
          s = o.readBool();
      o.readBool();
      var h,
          a,
          l = o.readInt(),
          c = o.readInt(),
          u = o.readInt(),
          _ = this._sprites[t.id];
      _ && (h = this.getItemAsset(_.atlas)), o.seek(0, 1);

      for (var p = o.readInt(), d = 0; d < p; d++) {
        var f = o.readShort();
        f += o.position, a = {}, i[o.readUshort()] = a;
        var g = new cc.Rect();
        a.rect = g;
        var y = o.readS();
        if (g.x = o.readInt(), g.y = o.readInt(), a.xOffset = o.readInt(), a.yOffset = o.readInt(), g.width = o.readInt(), g.height = o.readInt(), a.xAdvance = o.readInt(), a.channel = o.readByte(), 1 == a.channel ? a.channel = 3 : 2 == a.channel ? a.channel = 2 : 3 == a.channel && (a.channel = 1), n) g.x += _.rect.x, g.y += _.rect.y;else {
          var m = this._sprites[y];
          m && (g.set(m.rect), a.xOffset += m.offset.x, a.yOffset += m.offset.y, 0 == l && (l = m.originalSize.height), h || (m.atlas.load(), h = m.atlas.asset)), 0 == a.xAdvance && (a.xAdvance = 0 == c ? a.xOffset + a.rect.width : c);
        }
        o.position = f;
      }

      e.fontSize = l, e._fntConfig.fontSize = l, e._fntConfig.commonHeight = 0 == u ? l : u, e._fntConfig.resizable = s, e._fntConfig.canTint = r;
      var b = new cc.SpriteFrame();
      b.setTexture(h), e.spriteFrame = b, e.onLoad();
    }, e.prototype.loadSpine = function (t) {
      this._bundle.load(t.file, sp.SkeletonData, function (e, i) {
        t.decoded = !0, t.asset = i;
        var o = t.loading;
        delete t.loading, o.forEach(function (i) {
          return i(e, t);
        });
      });
    }, e.prototype.loadDragonBones = function (t) {
      var e = this;

      this._bundle.load(t.file, dragonBones.DragonBonesAsset, function (i, o) {
        if (i) {
          t.decoded = !0;
          var n = t.loading;
          return delete t.loading, void n.forEach(function (e) {
            return e(i, t);
          });
        }

        t.asset = o;
        var r = t.file.replace("_ske", "_tex"),
            s = r.lastIndexOf(".");
        -1 != s && (r = r.substr(0, s + 1) + "json"), e._bundle.load(r, dragonBones.DragonBonesAtlasAsset, function (e, i) {
          t.decoded = !0, t.atlasAsset = i;
          var o = t.loading;
          delete t.loading, o.forEach(function (i) {
            return i(e, t);
          });
        });
      });
    }, e._constructing = 0, e._instById = {}, e._instByName = {}, e._branch = "", e._vars = {}, e;
  }();

  t.UIPackage = i;
  var o = ((e = {})[t.PackageItemType.Atlas] = cc.Texture2D, e[t.PackageItemType.Sound] = cc.AudioClip, e);
}(fgui || (fgui = {})), function (t) {
  var e = function (e) {
    function i() {
      var i = e.call(this) || this;
      return i._requestingCmd = 0, i._uiSources = new Array(), i.bringToFontOnClick = t.UIConfig.bringWindowToFrontOnClick, i._node.on(t.Event.TOUCH_BEGIN, i.onTouchBegin_1, i, !0), i;
    }

    return __extends(i, e), i.prototype.addUISource = function (t) {
      this._uiSources.push(t);
    }, Object.defineProperty(i.prototype, "contentPane", {
      get: function get() {
        return this._contentPane;
      },
      set: function set(e) {
        this._contentPane != e && (this._contentPane && this.removeChild(this._contentPane), this._contentPane = e, this._contentPane && (this.addChild(this._contentPane), this.setSize(this._contentPane.width, this._contentPane.height), this._contentPane.addRelation(this, t.RelationType.Size), this._frame = this._contentPane.getChild("frame"), this._frame && (this.closeButton = this._frame.getChild("closeButton"), this.dragArea = this._frame.getChild("dragArea"), this.contentArea = this._frame.getChild("contentArea"))));
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "frame", {
      get: function get() {
        return this._frame;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "closeButton", {
      get: function get() {
        return this._closeButton;
      },
      set: function set(t) {
        this._closeButton && this._closeButton.offClick(this.closeEventHandler, this), this._closeButton = t, this._closeButton && this._closeButton.onClick(this.closeEventHandler, this);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "dragArea", {
      get: function get() {
        return this._dragArea;
      },
      set: function set(e) {
        this._dragArea != e && (this._dragArea && (this._dragArea.draggable = !1, this._dragArea.off(t.Event.DRAG_START, this.onDragStart_1, this)), this._dragArea = e, this._dragArea && (this._dragArea.draggable = !0, this._dragArea.on(t.Event.DRAG_START, this.onDragStart_1, this)));
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "contentArea", {
      get: function get() {
        return this._contentArea;
      },
      set: function set(t) {
        this._contentArea = t;
      },
      enumerable: !1,
      configurable: !0
    }), i.prototype.show = function () {
      t.GRoot.inst.showWindow(this);
    }, i.prototype.showOn = function (t) {
      t.showWindow(this);
    }, i.prototype.hide = function () {
      this.isShowing && this.doHideAnimation();
    }, i.prototype.hideImmediately = function () {
      var e = this.parent instanceof t.GRoot ? this.parent : null;
      e || (e = t.GRoot.inst), e.hideWindowImmediately(this);
    }, i.prototype.centerOn = function (e, i) {
      this.setPosition(Math.round((e.width - this.width) / 2), Math.round((e.height - this.height) / 2)), i && (this.addRelation(e, t.RelationType.Center_Center), this.addRelation(e, t.RelationType.Middle_Middle));
    }, i.prototype.toggleStatus = function () {
      this.isTop ? this.hide() : this.show();
    }, Object.defineProperty(i.prototype, "isShowing", {
      get: function get() {
        return null != this.parent;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "isTop", {
      get: function get() {
        return this.parent && this.parent.getChildIndex(this) == this.parent.numChildren - 1;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "modal", {
      get: function get() {
        return this._modal;
      },
      set: function set(t) {
        this._modal = t;
      },
      enumerable: !1,
      configurable: !0
    }), i.prototype.bringToFront = function () {
      this.root.bringToFront(this);
    }, i.prototype.showModalWait = function (e) {
      null != e && (this._requestingCmd = e), t.UIConfig.windowModalWaiting && (this._modalWaitPane || (this._modalWaitPane = t.UIPackage.createObjectFromURL(t.UIConfig.windowModalWaiting)), this.layoutModalWaitPane(), this.addChild(this._modalWaitPane));
    }, i.prototype.layoutModalWaitPane = function () {
      if (this._contentArea) {
        var t = this._frame.localToGlobal();

        t = this.globalToLocal(t.x, t.y, t), this._modalWaitPane.setPosition(t.x + this._contentArea.x, t.y + this._contentArea.y), this._modalWaitPane.setSize(this._contentArea.width, this._contentArea.height);
      } else this._modalWaitPane.setSize(this.width, this.height);
    }, i.prototype.closeModalWait = function (t) {
      return (null == t || this._requestingCmd == t) && (this._requestingCmd = 0, this._modalWaitPane && this._modalWaitPane.parent && this.removeChild(this._modalWaitPane), !0);
    }, Object.defineProperty(i.prototype, "modalWaiting", {
      get: function get() {
        return this._modalWaitPane && null != this._modalWaitPane.parent;
      },
      enumerable: !1,
      configurable: !0
    }), i.prototype.init = function () {
      if (!this._inited && !this._loading) if (this._uiSources.length > 0) {
        this._loading = !1;

        for (var t = this._uiSources.length, e = 0; e < t; e++) {
          var i = this._uiSources[e];
          i.loaded || (i.load(this.__uiLoadComplete, this), this._loading = !0);
        }

        this._loading || this._init();
      } else this._init();
    }, i.prototype.onInit = function () {}, i.prototype.onShown = function () {}, i.prototype.onHide = function () {}, i.prototype.doShowAnimation = function () {
      this.onShown();
    }, i.prototype.doHideAnimation = function () {
      this.hideImmediately();
    }, i.prototype.__uiLoadComplete = function () {
      for (var t = this._uiSources.length, e = 0; e < t; e++) {
        if (!this._uiSources[e].loaded) return;
      }

      this._loading = !1, this._init();
    }, i.prototype._init = function () {
      this._inited = !0, this.onInit(), this.isShowing && this.doShowAnimation();
    }, i.prototype.dispose = function () {
      this.parent && this.hideImmediately(), e.prototype.dispose.call(this);
    }, i.prototype.closeEventHandler = function () {
      this.hide();
    }, i.prototype.onEnable = function () {
      e.prototype.onEnable.call(this), this._inited ? this.doShowAnimation() : this.init();
    }, i.prototype.onDisable = function () {
      e.prototype.onDisable.call(this), this.closeModalWait(), this.onHide();
    }, i.prototype.onTouchBegin_1 = function () {
      this.isShowing && this.bringToFontOnClick && this.bringToFront();
    }, i.prototype.onDragStart_1 = function (e) {
      t.GObject.cast(e.currentTarget).stopDrag(), this.startDrag(e.touchId);
    }, i;
  }(t.GComponent);

  t.Window = e;
}(fgui || (fgui = {})), function (t) {
  var e = function () {
    function e() {}

    return e.createAction = function (e) {
      switch (e) {
        case 0:
          return new t.PlayTransitionAction();

        case 1:
          return new t.ChangePageAction();
      }

      return null;
    }, e.prototype.run = function (t, e, i) {
      null != this.fromPage && 0 != this.fromPage.length && -1 == this.fromPage.indexOf(e) || null != this.toPage && 0 != this.toPage.length && -1 == this.toPage.indexOf(i) ? this.leave(t) : this.enter(t);
    }, e.prototype.enter = function () {}, e.prototype.leave = function () {}, e.prototype.setup = function (t) {
      var e, i;

      for (e = t.readShort(), this.fromPage = [], i = 0; i < e; i++) {
        this.fromPage[i] = t.readS();
      }

      for (e = t.readShort(), this.toPage = [], i = 0; i < e; i++) {
        this.toPage[i] = t.readS();
      }
    }, e;
  }();

  t.ControllerAction = e;
}(fgui || (fgui = {})), function (t) {
  var e = function (e) {
    function i() {
      return e.call(this) || this;
    }

    return __extends(i, e), i.prototype.enter = function (e) {
      if (this.controllerName) {
        var i;

        if (this.objectId) {
          var o = e.parent.getChildById(this.objectId);
          if (!(o instanceof t.GComponent)) return;
          i = o;
        } else i = e.parent;

        if (i) {
          var n = i.getController(this.controllerName);
          n && n != e && !n.changing && ("~1" == this.targetPage ? e.selectedIndex < n.pageCount && (n.selectedIndex = e.selectedIndex) : "~2" == this.targetPage ? n.selectedPage = e.selectedPage : n.selectedPageId = this.targetPage);
        }
      }
    }, i.prototype.setup = function (t) {
      e.prototype.setup.call(this, t), this.objectId = t.readS(), this.controllerName = t.readS(), this.targetPage = t.readS();
    }, i;
  }(t.ControllerAction);

  t.ChangePageAction = e;
}(fgui || (fgui = {})), function (t) {
  var e = function (t) {
    function e() {
      var e = t.call(this) || this;
      return e.playTimes = 1, e.delay = 0, e.stopOnExit = !1, e;
    }

    return __extends(e, t), e.prototype.enter = function (t) {
      var e = t.parent.getTransition(this.transitionName);
      e && (this._currentTransition && this._currentTransition.playing ? e.changePlayTimes(this.playTimes) : e.play(null, this.playTimes, this.delay), this._currentTransition = e);
    }, e.prototype.leave = function () {
      this.stopOnExit && this._currentTransition && (this._currentTransition.stop(), this._currentTransition = null);
    }, e.prototype.setup = function (e) {
      t.prototype.setup.call(this, e), this.transitionName = e.readS(), this.playTimes = e.readInt(), this.delay = e.readFloat(), this.stopOnExit = e.readBool();
    }, e;
  }(t.ControllerAction);

  t.PlayTransitionAction = e;
}(fgui || (fgui = {})), function (t) {
  (function (t) {
    t[t.Normal = 0] = "Normal", t[t.None = 1] = "None", t[t.Add = 2] = "Add", t[t.Multiply = 3] = "Multiply", t[t.Screen = 4] = "Screen", t[t.Erase = 5] = "Erase", t[t.Mask = 6] = "Mask", t[t.Below = 7] = "Below", t[t.Off = 8] = "Off", t[t.Custom1 = 9] = "Custom1", t[t.Custom2 = 10] = "Custom2", t[t.Custom3 = 11] = "Custom3";
  })(t.BlendMode || (t.BlendMode = {}));

  var e = function () {
    function t() {}

    return t.apply = function (t, e) {
      var o = i[e];
      t.getComponentsInChildren(cc.RenderComponent).forEach(function (t) {
        t.srcBlendFactor = o[0], t.dstBlendFactor = o[1];
      });
    }, t.override = function (t, e, o) {
      i[t][0] = e, i[t][1] = o;
    }, t;
  }();

  t.BlendModeUtils = e;
  var i = [[cc.macro.SRC_ALPHA, cc.macro.ONE_MINUS_SRC_ALPHA], [cc.macro.ONE, cc.macro.ONE], [cc.macro.SRC_ALPHA, cc.macro.ONE], [cc.macro.DST_COLOR, cc.macro.ONE_MINUS_SRC_ALPHA], [cc.macro.ONE, cc.macro.ONE_MINUS_SRC_COLOR], [cc.macro.ZERO, cc.macro.ONE_MINUS_SRC_ALPHA], [cc.macro.ZERO, cc.macro.SRC_ALPHA], [cc.macro.ONE_MINUS_DST_ALPHA, cc.macro.DST_ALPHA], [cc.macro.ONE, cc.macro.ZERO], [cc.macro.SRC_ALPHA, cc.macro.ONE_MINUS_SRC_ALPHA], [cc.macro.SRC_ALPHA, cc.macro.ONE_MINUS_SRC_ALPHA], [cc.macro.SRC_ALPHA, cc.macro.ONE_MINUS_SRC_ALPHA]];
}(fgui || (fgui = {})), function (t) {
  var e = function (e) {
    function i() {
      var i = e.call(this) || this;
      return i._flip = t.FlipType.None, i._fillMethod = t.FillMethod.None, i._fillOrigin = t.FillOrigin.Left, i._fillAmount = 0, i;
    }

    return __extends(i, e), Object.defineProperty(i.prototype, "flip", {
      get: function get() {
        return this._flip;
      },
      set: function set(e) {
        if (this._flip != e) {
          this._flip = e;
          var i = 1,
              o = 1;
          this._flip != t.FlipType.Horizontal && this._flip != t.FlipType.Both || (i = -1), this._flip != t.FlipType.Vertical && this._flip != t.FlipType.Both || (o = -1), 1 == i && 1 == o || this.node.setAnchorPoint(.5, .5), this.node.setScale(i, o);
        }
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "fillMethod", {
      get: function get() {
        return this._fillMethod;
      },
      set: function set(t) {
        this._fillMethod != t && (this._fillMethod = t, 0 != this._fillMethod ? (this.type = cc.Sprite.Type.FILLED, this._fillMethod <= 3 ? this.fillType = this._fillMethod - 1 : this.fillType = cc.Sprite.FillType.RADIAL, this.fillCenter = new cc.Vec2(.5, .5), this.setupFill()) : this.type = cc.Sprite.Type.SIMPLE);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "fillOrigin", {
      get: function get() {
        return this._fillOrigin;
      },
      set: function set(t) {
        this._fillOrigin != t && (this._fillOrigin = t, 0 != this._fillMethod && this.setupFill());
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "fillClockwise", {
      get: function get() {
        return this._fillClockwise;
      },
      set: function set(t) {
        this._fillClockwise != t && (this._fillClockwise = t, 0 != this._fillMethod && this.setupFill());
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "fillAmount", {
      get: function get() {
        return this._fillAmount;
      },
      set: function set(t) {
        this._fillAmount != t && (this._fillAmount = t, 0 != this._fillMethod && (this._fillClockwise ? this.fillRange = -this._fillAmount : this.fillRange = this._fillAmount));
      },
      enumerable: !1,
      configurable: !0
    }), i.prototype.setupFill = function () {
      if (this._fillMethod == t.FillMethod.Horizontal) this._fillClockwise = this._fillOrigin == t.FillOrigin.Right || this._fillOrigin == t.FillOrigin.Bottom, this.fillStart = this._fillClockwise ? 1 : 0;else if (this._fillMethod == t.FillMethod.Vertical) this._fillClockwise = this._fillOrigin == t.FillOrigin.Left || this._fillOrigin == t.FillOrigin.Top, this.fillStart = this._fillClockwise ? 1 : 0;else switch (this._fillOrigin) {
        case t.FillOrigin.Right:
          this.fillOrigin = 0;
          break;

        case t.FillOrigin.Top:
          this.fillStart = .25;
          break;

        case t.FillOrigin.Left:
          this.fillStart = .5;
          break;

        case t.FillOrigin.Bottom:
          this.fillStart = .75;
      }
    }, Object.defineProperty(i.prototype, "grayed", {
      get: function get() {
        return this._grayed;
      },
      set: function set(t) {
        var e;
        this._grayed != t && (this._grayed = t, t ? ((e = this._graySpriteMaterial) || (e = cc.Material.getBuiltinMaterial("2d-gray-sprite")), e = this._graySpriteMaterial = cc.MaterialVariant.create(e, this)) : ((e = this._spriteMaterial) || (e = cc.Material.getBuiltinMaterial("2d-sprite", this)), e = this._spriteMaterial = cc.MaterialVariant.create(e, this)), this.setMaterial(0, e));
      },
      enumerable: !1,
      configurable: !0
    }), i;
  }(cc.Sprite);

  t.Image = e;
}(fgui || (fgui = {})), function (t) {
  var e = function (t) {
    function e() {
      var e = t.call(this) || this;
      return e.interval = 0, e.repeatDelay = 0, e.timeScale = 1, e._playing = !0, e._frameCount = 0, e._frame = 0, e._start = 0, e._end = 0, e._times = 0, e._endAt = 0, e._status = 0, e._smoothing = !0, e._frameElapsed = 0, e._reversed = !1, e._repeatedCount = 0, e;
    }

    return __extends(e, t), Object.defineProperty(e.prototype, "frames", {
      get: function get() {
        return this._frames;
      },
      set: function set(t) {
        this._frames = t, this._frames ? (this._frameCount = this._frames.length, (-1 == this._end || this._end > this._frameCount - 1) && (this._end = this._frameCount - 1), (-1 == this._endAt || this._endAt > this._frameCount - 1) && (this._endAt = this._frameCount - 1), (this._frame < 0 || this._frame > this._frameCount - 1) && (this._frame = this._frameCount - 1), this.type = cc.Sprite.Type.SIMPLE, this.drawFrame(), this._frameElapsed = 0, this._repeatedCount = 0, this._reversed = !1) : this._frameCount = 0;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "frameCount", {
      get: function get() {
        return this._frameCount;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "frame", {
      get: function get() {
        return this._frame;
      },
      set: function set(t) {
        this._frame != t && (this._frames && t >= this._frameCount && (t = this._frameCount - 1), this._frame = t, this._frameElapsed = 0, this.drawFrame());
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "playing", {
      get: function get() {
        return this._playing;
      },
      set: function set(t) {
        this._playing != t && (this._playing = t);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "smoothing", {
      get: function get() {
        return this._smoothing;
      },
      set: function set(t) {
        this._smoothing = t;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.rewind = function () {
      this._frame = 0, this._frameElapsed = 0, this._reversed = !1, this._repeatedCount = 0, this.drawFrame();
    }, e.prototype.syncStatus = function (t) {
      this._frame = t._frame, this._frameElapsed = t._frameElapsed, this._reversed = t._reversed, this._repeatedCount = t._repeatedCount, this.drawFrame();
    }, e.prototype.advance = function (t) {
      for (var e = this._frame, i = this._reversed, o = t;;) {
        var n = this.interval + this._frames[this._frame].addDelay;

        if (0 == this._frame && this._repeatedCount > 0 && (n += this.repeatDelay), t < n) {
          this._frameElapsed = 0;
          break;
        }

        if (t -= n, this.swing ? this._reversed ? (this._frame--, this._frame <= 0 && (this._frame = 0, this._repeatedCount++, this._reversed = !this._reversed)) : (this._frame++, this._frame > this._frameCount - 1 && (this._frame = Math.max(0, this._frameCount - 2), this._repeatedCount++, this._reversed = !this._reversed)) : (this._frame++, this._frame > this._frameCount - 1 && (this._frame = 0, this._repeatedCount++)), this._frame == e && this._reversed == i) {
          var r = o - t;
          t -= Math.floor(t / r) * r;
        }
      }

      this.drawFrame();
    }, e.prototype.setPlaySettings = function (t, e, i, o, n, r) {
      null == t && (t = 0), null == e && (e = -1), null == i && (i = 0), null == o && (o = -1), this._start = t, this._end = e, (-1 == this._end || this._end > this._frameCount - 1) && (this._end = this._frameCount - 1), this._times = i, this._endAt = o, -1 == this._endAt && (this._endAt = this._end), this._status = 0, this._callback = n, this._callbackObj = r, this.frame = t;
    }, e.prototype.update = function (t) {
      if (this._playing && 0 != this._frameCount && 3 != this._status) {
        1 != this.timeScale && (t *= this.timeScale), this._frameElapsed += t;
        var e = this.interval + this._frames[this._frame].addDelay;

        if (0 == this._frame && this._repeatedCount > 0 && (e += this.repeatDelay), !(this._frameElapsed < e)) {
          if (this._frameElapsed -= e, this._frameElapsed > this.interval && (this._frameElapsed = this.interval), this.swing ? this._reversed ? (this._frame--, this._frame <= 0 && (this._frame = 0, this._repeatedCount++, this._reversed = !this._reversed)) : (this._frame++, this._frame > this._frameCount - 1 && (this._frame = Math.max(0, this._frameCount - 2), this._repeatedCount++, this._reversed = !this._reversed)) : (this._frame++, this._frame > this._frameCount - 1 && (this._frame = 0, this._repeatedCount++)), 1 == this._status) this._frame = this._start, this._frameElapsed = 0, this._status = 0;else if (2 == this._status) {
            if (this._frame = this._endAt, this._frameElapsed = 0, this._status = 3, null != this._callback) {
              var i = this._callback,
                  o = this._callbackObj;
              this._callback = null, this._callbackObj = null, i.call(o);
            }
          } else this._frame == this._end && (this._times > 0 ? (this._times--, 0 == this._times ? this._status = 2 : this._status = 1) : 0 != this._start && (this._status = 1));
          this.drawFrame();
        }
      }
    }, e.prototype.drawFrame = function () {
      if (this._frameCount > 0 && this._frame < this._frames.length) {
        var t = this._frames[this._frame];
        this.spriteFrame = t.texture;
      }
    }, e;
  }(t.Image);

  t.MovieClip = e;
}(fgui || (fgui = {})), function (t) {
  var e = function (e) {
    function o(t, i) {
      var o = e.call(this, t, i) || this;
      return o.pos = new cc.Vec2(), o.touchId = 0, o.clickCount = 0, o.button = 0, o.keyModifiers = 0, o.mouseWheelDelta = 0, o;
    }

    return __extends(o, e), Object.defineProperty(o.prototype, "isShiftDown", {
      get: function get() {
        return !1;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(o.prototype, "isCtrlDown", {
      get: function get() {
        return !1;
      },
      enumerable: !1,
      configurable: !0
    }), o.prototype.captureTouch = function () {
      var e = t.GObject.cast(this.currentTarget);
      e && this._processor.addTouchMonitor(this.touchId, e);
    }, o._borrow = function (t, e) {
      var n;
      return i.length ? ((n = i.pop()).type = t, n.bubbles = e) : n = new o(t, e), n;
    }, o._return = function (t) {
      t.initiator = null, t.touch = null, t.unuse(), i.push(t);
    }, o.TOUCH_BEGIN = "fui_touch_begin", o.TOUCH_MOVE = "fui_touch_move", o.TOUCH_END = "fui_touch_end", o.CLICK = "fui_click", o.ROLL_OVER = "fui_roll_over", o.ROLL_OUT = "fui_roll_out", o.MOUSE_WHEEL = "fui_mouse_wheel", o.DISPLAY = "fui_display", o.UNDISPLAY = "fui_undisplay", o.GEAR_STOP = "fui_gear_stop", o.LINK = "fui_text_link", o.Submit = "editing-return", o.TEXT_CHANGE = "text-changed", o.STATUS_CHANGED = "fui_status_changed", o.XY_CHANGED = "fui_xy_changed", o.SIZE_CHANGED = "fui_size_changed", o.SIZE_DELAY_CHANGE = "fui_size_delay_change", o.DRAG_START = "fui_drag_start", o.DRAG_MOVE = "fui_drag_move", o.DRAG_END = "fui_drag_end", o.DROP = "fui_drop", o.SCROLL = "fui_scroll", o.SCROLL_END = "fui_scroll_end", o.PULL_DOWN_RELEASE = "fui_pull_down_release", o.PULL_UP_RELEASE = "fui_pull_up_release", o.CLICK_ITEM = "fui_click_item", o;
  }(cc.Event);

  t.Event = e;
  var i = new Array();
}(fgui || (fgui = {})), function (t) {
  var e = function () {
    function t(t, e, i) {
      this._data = t, this.offsetX = null == e ? 0 : e, this.offsetY = null == i ? 0 : i, this.scaleX = 1, this.scaleY = 1;
    }

    return t.prototype.hitTest = function (t) {
      var e = Math.floor((t.x / this.scaleX - this.offsetX) * this._data.scale),
          i = Math.floor((t.y / this.scaleY - this.offsetY) * this._data.scale);
      if (e < 0 || i < 0 || e >= this._data.pixelWidth) return !1;
      var o = i * this._data.pixelWidth + e,
          n = Math.floor(o / 8),
          r = o % 8;
      return n >= 0 && n < this._data.pixels.length && 1 == (this._data.pixels[n] >> r & 1);
    }, t;
  }();

  t.PixelHitTest = e;

  t.PixelHitTestData = function (t) {
    t.readInt(), this.pixelWidth = t.readInt(), this.scale = 1 / t.readByte(), this.pixels = t.readBuffer().data;
  };

  var i = function () {
    function t(t) {
      this._child = t;
    }

    return t.prototype.hitTest = function (t, e) {
      return null != this._child.hitTest(e, !1);
    }, t;
  }();

  t.ChildHitArea = i;
}(fgui || (fgui = {})), function (t) {
  var e = function (e) {
    function o() {
      var t = e.call(this) || this;
      return t._touches = new Array(), t._rollOutChain = new Array(), t._rollOverChain = new Array(), t._touchPos = new cc.Vec2(), t;
    }

    return __extends(o, e), o.prototype.onLoad = function () {
      this._owner = this.node.$gobj;
    }, o.prototype.onEnable = function () {
      var t = this.node;
      t.on(cc.Node.EventType.TOUCH_START, this.touchBeginHandler, this), t.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveHandler, this), t.on(cc.Node.EventType.TOUCH_END, this.touchEndHandler, this), t.on(cc.Node.EventType.TOUCH_CANCEL, this.touchCancelHandler, this), t.on(cc.Node.EventType.MOUSE_DOWN, this.mouseDownHandler, this), t.on(cc.Node.EventType.MOUSE_MOVE, this.mouseMoveHandler, this), t.on(cc.Node.EventType.MOUSE_UP, this.mouseUpHandler, this), t.on(cc.Node.EventType.MOUSE_WHEEL, this.mouseWheelHandler, this), this._touchListener = this.node._touchListener;
    }, o.prototype.onDisable = function () {
      var t = this.node;
      t.off(cc.Node.EventType.TOUCH_START, this.touchBeginHandler, this), t.off(cc.Node.EventType.TOUCH_MOVE, this.touchMoveHandler, this), t.off(cc.Node.EventType.TOUCH_END, this.touchEndHandler, this), t.off(cc.Node.EventType.TOUCH_CANCEL, this.touchCancelHandler, this), t.off(cc.Node.EventType.MOUSE_DOWN, this.mouseDownHandler, this), t.off(cc.Node.EventType.MOUSE_MOVE, this.mouseMoveHandler, this), t.off(cc.Node.EventType.MOUSE_UP, this.mouseUpHandler, this), t.off(cc.Node.EventType.MOUSE_WHEEL, this.mouseWheelHandler, this), this._touchListener = null;
    }, o.prototype.getAllTouches = function (t) {
      t = t || new Array();

      for (var e = this._touches.length, i = 0; i < e; i++) {
        var o = this._touches[i];
        -1 != o.touchId && t.push(o.touchId);
      }

      return t;
    }, o.prototype.getTouchPosition = function (t) {
      void 0 === t && (t = -1);

      for (var e = this._touches.length, i = 0; i < e; i++) {
        var o = this._touches[i];
        if (-1 != o.touchId && (-1 == t || o.touchId == t)) return o.pos;
      }

      return cc.Vec2.ZERO;
    }, o.prototype.getTouchTarget = function () {
      for (var t = this._touches.length, e = 0; e < t; e++) {
        var i = this._touches[e];
        if (-1 != i.touchId) return i.target;
      }

      return null;
    }, o.prototype.addTouchMonitor = function (t, e) {
      var i = this.getInfo(t, !1);
      i && -1 == i.touchMonitors.indexOf(e) && i.touchMonitors.push(e);
    }, o.prototype.removeTouchMonitor = function (t) {
      for (var e = this._touches.length, i = 0; i < e; i++) {
        var o = this._touches[i],
            n = o.touchMonitors.indexOf(t);
        -1 != n && o.touchMonitors.splice(n, 1);
      }
    }, o.prototype.cancelClick = function (t) {
      var e = this.getInfo(t, !1);
      e && (e.clickCancelled = !0);
    }, o.prototype.simulateClick = function (e) {
      var i;
      (i = t.Event._borrow(t.Event.TOUCH_BEGIN, !0)).initiator = e, i.pos.set(e.localToGlobal()), i.touchId = 0, i.clickCount = 1, i.button = 0, i._processor = this, this._captureCallback && this._captureCallback.call(this._owner, i), e.node.dispatchEvent(i), i.unuse(), i.type = t.Event.TOUCH_END, i.bubbles = !0, e.node.dispatchEvent(i), i.unuse(), i.type = t.Event.CLICK, i.bubbles = !0, e.node.dispatchEvent(i), t.Event._return(i);
    }, o.prototype.touchBeginHandler = function (e) {
      var i = this.updateInfo(e.getID(), e.getLocation(), e);
      this._touchListener.setSwallowTouches(i.target != this._owner), this.setBegin(i);
      var o = this.getEvent(i, i.target, t.Event.TOUCH_BEGIN, !0);
      return this._captureCallback && this._captureCallback.call(this._owner, o), i.target.node.dispatchEvent(o), this.handleRollOver(i, i.target), !0;
    }, o.prototype.touchMoveHandler = function (e) {
      var i = this.updateInfo(e.getID(), e.getLocation(), e);

      if (this.handleRollOver(i, i.target), i.began) {
        for (var o = this.getEvent(i, i.target, t.Event.TOUCH_MOVE, !1), n = !1, r = i.touchMonitors.length, s = 0; s < r; s++) {
          var h = i.touchMonitors[s];
          null != h.node && h.node.activeInHierarchy && (o.unuse(), o.type = t.Event.TOUCH_MOVE, h.node.dispatchEvent(o), h == this._owner && (n = !0));
        }

        !n && this.node && (o.unuse(), o.type = t.Event.TOUCH_MOVE, this.node.dispatchEvent(o)), t.Event._return(o);
      }
    }, o.prototype.touchEndHandler = function (e) {
      var i = this.updateInfo(e.getID(), e.getLocation(), e);
      this.setEnd(i);

      for (var o = this.getEvent(i, i.target, t.Event.TOUCH_END, !1), n = i.touchMonitors.length, r = 0; r < n; r++) {
        var s = i.touchMonitors[r];
        s == i.target || null == s.node || !s.node.activeInHierarchy || s instanceof t.GComponent && s.isAncestorOf(i.target) || (o.unuse(), o.type = t.Event.TOUCH_END, s.node.dispatchEvent(o));
      }

      i.touchMonitors.length = 0, i.target && i.target.node && (i.target instanceof t.GRichTextField && i.target.node.getComponent(cc.RichText)._onTouchEnded(o), o.unuse(), o.type = t.Event.TOUCH_END, o.bubbles = !0, i.target.node.dispatchEvent(o)), t.Event._return(o), i.target = this.clickTest(i), i.target && (o = this.getEvent(i, i.target, t.Event.CLICK, !0), i.target.node.dispatchEvent(o), t.Event._return(o)), cc.sys.isMobile ? this.handleRollOver(i, null) : this.handleRollOver(i, i.target), i.target = null, i.touchId = -1, i.button = -1;
    }, o.prototype.touchCancelHandler = function (e) {
      for (var i = this.updateInfo(e.getID(), e.getLocation(), e), o = this.getEvent(i, i.target, t.Event.TOUCH_END, !1), n = i.touchMonitors.length, r = 0; r < n; r++) {
        var s = i.touchMonitors[r];
        s == i.target || null == s.node || !s.node.activeInHierarchy || s instanceof t.GComponent && s.isAncestorOf(i.target) || (o.initiator = s, s.node.dispatchEvent(o));
      }

      i.touchMonitors.length = 0, i.target && i.target.node && (o.bubbles = !0, i.target.node.dispatchEvent(o)), t.Event._return(o), this.handleRollOver(i, null), i.target = null, i.touchId = -1, i.button = -1;
    }, o.prototype.mouseDownHandler = function (t) {
      this.getInfo(0, !0).button = t.getButton();
    }, o.prototype.mouseUpHandler = function (t) {
      this.getInfo(0, !0).button = t.getButton();
    }, o.prototype.mouseMoveHandler = function (e) {
      var i = this.getInfo(0, !1);

      if (!(i && Math.abs(i.pos.x - e.getLocationX()) < 1 && Math.abs(i.pos.y - (t.GRoot.inst.height - e.getLocationY())) < 1) && (i = this.updateInfo(0, e.getLocation()), this.handleRollOver(i, i.target), i.began)) {
        for (var o = this.getEvent(i, i.target, t.Event.TOUCH_MOVE, !1), n = !1, r = i.touchMonitors.length, s = 0; s < r; s++) {
          var h = i.touchMonitors[s];
          null != h.node && h.node.activeInHierarchy && (o.initiator = h, h.node.dispatchEvent(o), h == this._owner && (n = !0));
        }

        !n && this.node && (o.initiator = this._owner, this.node.dispatchEvent(o), t.Event._return(o)), t.Event._return(o);
      }
    }, o.prototype.mouseWheelHandler = function (e) {
      var i = this.updateInfo(0, e.getLocation());
      i.mouseWheelDelta = Math.max(e.getScrollX(), e.getScrollY());
      var o = this.getEvent(i, i.target, t.Event.MOUSE_WHEEL, !0);
      i.target.node.dispatchEvent(o), t.Event._return(o);
    }, o.prototype.updateInfo = function (e, i, o) {
      var n = cc.Camera.findCamera(this.node);
      n ? n.getScreenToWorldPoint(i, this._touchPos) : this._touchPos.set(i), this._touchPos.y = t.GRoot.inst.height - this._touchPos.y;

      var r = this._owner.hitTest(this._touchPos);

      r || (r = this._owner);
      var s = this.getInfo(e);
      return s.target = r, s.pos.set(this._touchPos), s.button = cc.Event.EventMouse.BUTTON_LEFT, s.touch = o, s;
    }, o.prototype.getInfo = function (t, e) {
      void 0 === e && (e = !0);

      for (var o = null, n = this._touches.length, r = 0; r < n; r++) {
        var s = this._touches[r];
        if (s.touchId == t) return s;
        -1 == s.touchId && (o = s);
      }

      if (!o) {
        if (!e) return null;
        o = new i(), this._touches.push(o);
      }

      return o.touchId = t, o;
    }, o.prototype.setBegin = function (t) {
      t.began = !0, t.clickCancelled = !1, t.downPos.set(t.pos), t.downTargets.length = 0;

      for (var e = t.target; e;) {
        t.downTargets.push(e), e = e.findParent();
      }
    }, o.prototype.setEnd = function (e) {
      e.began = !1;
      var i = t.ToolSet.getTime();
      i - e.lastClickTime < .45 ? 2 == e.clickCount ? e.clickCount = 1 : e.clickCount++ : e.clickCount = 1, e.lastClickTime = i;
    }, o.prototype.clickTest = function (t) {
      if (0 == t.downTargets.length || t.clickCancelled || Math.abs(t.pos.x - t.downPos.x) > 50 || Math.abs(t.pos.y - t.downPos.y) > 50) return null;
      var e = t.downTargets[0];
      if (e && e.node && e.node.activeInHierarchy) return e;

      for (e = t.target; e && (-1 == t.downTargets.indexOf(e) || !e.node || !e.node.activeInHierarchy);) {
        e = e.findParent();
      }

      return e;
    }, o.prototype.handleRollOver = function (e, i) {
      if (e.lastRollOver != i) {
        for (var o = e.lastRollOver; o && o.node;) {
          this._rollOutChain.push(o), o = o.findParent();
        }

        for (o = i; o && o.node;) {
          if (-1 != (r = this._rollOutChain.indexOf(o))) {
            this._rollOutChain.length = r;
            break;
          }

          this._rollOverChain.push(o), o = o.findParent();
        }

        e.lastRollOver = i;

        for (var n = this._rollOutChain.length, r = 0; r < n; r++) {
          if ((o = this._rollOutChain[r]).node && o.node.activeInHierarchy) {
            var s = this.getEvent(e, o, t.Event.ROLL_OUT, !1);
            o.node.dispatchEvent(s), t.Event._return(s);
          }
        }

        for (n = this._rollOverChain.length, r = 0; r < n; r++) {
          (o = this._rollOverChain[r]).node && o.node.activeInHierarchy && (s = this.getEvent(e, o, t.Event.ROLL_OVER, !1), o.node.dispatchEvent(s), t.Event._return(s));
        }

        this._rollOutChain.length = 0, this._rollOverChain.length = 0;
      }
    }, o.prototype.getEvent = function (e, i, o, n) {
      var r = t.Event._borrow(o, n);

      return r.initiator = i, r.touch = e.touch, r.pos.set(e.pos), r.touchId = e.touch ? e.touch.getID() : 0, r.clickCount = e.clickCount, r.button = e.button, r.mouseWheelDelta = e.mouseWheelDelta, r._processor = this, r;
    }, o;
  }(cc.Component);

  t.InputProcessor = e;

  var i = function i() {
    this.pos = new cc.Vec2(), this.touchId = 0, this.clickCount = 0, this.mouseWheelDelta = 0, this.button = -1, this.downPos = new cc.Vec2(), this.began = !1, this.clickCancelled = !1, this.lastClickTime = 0, this.downTargets = new Array(), this.touchMonitors = new Array();
  };
}(fgui || (fgui = {})), function (t) {
  var e,
      i = function () {
    function i(t) {
      this._owner = t;
    }

    return i.create = function (i, o) {
      return e || (e = [t.GearDisplay, t.GearXY, t.GearSize, t.GearLook, t.GearColor, t.GearAnimation, t.GearText, t.GearIcon, t.GearDisplay2, t.GearFontSize]), new e[o](i);
    }, i.prototype.dispose = function () {
      this._tweenConfig && this._tweenConfig._tweener && (this._tweenConfig._tweener.kill(), this._tweenConfig._tweener = null);
    }, Object.defineProperty(i.prototype, "controller", {
      get: function get() {
        return this._controller;
      },
      set: function set(t) {
        t != this._controller && (this._controller = t, this._controller && this.init());
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i.prototype, "tweenConfig", {
      get: function get() {
        return this._tweenConfig || (this._tweenConfig = new o()), this._tweenConfig;
      },
      enumerable: !1,
      configurable: !0
    }), i.prototype.setup = function (e) {
      var i, n;
      this._controller = this._owner.parent.getControllerAt(e.readShort()), this.init();
      var r = e.readShort();
      if (this instanceof t.GearDisplay) this.pages = e.readSArray(r);else if (this instanceof t.GearDisplay2) this.pages = e.readSArray(r);else {
        for (i = 0; i < r; i++) {
          null != (n = e.readS()) && this.addStatus(n, e);
        }

        e.readBool() && this.addStatus(null, e);
      }
      if (e.readBool() && (this._tweenConfig = new o(), this._tweenConfig.easeType = e.readByte(), this._tweenConfig.duration = e.readFloat(), this._tweenConfig.delay = e.readFloat()), e.version >= 2) if (this instanceof t.GearXY) {
        if (e.readBool()) {
          for (this.positionsInPercent = !0, i = 0; i < r; i++) {
            null != (n = e.readS()) && this.addExtStatus(n, e);
          }

          e.readBool() && this.addExtStatus(null, e);
        }
      } else this instanceof t.GearDisplay2 && (this.condition = e.readByte());
    }, i.prototype.updateFromRelations = function () {}, i.prototype.addStatus = function () {}, i.prototype.init = function () {}, i.prototype.apply = function () {}, i.prototype.updateState = function () {}, i;
  }();

  t.GearBase = i;

  var o = function o() {
    this.tween = !0, this.easeType = t.EaseType.QuadOut, this.duration = .3, this.delay = 0;
  };

  t.GearTweenConfig = o;
}(fgui || (fgui = {})), function (t) {
  var e = function (e) {
    function i(t) {
      return e.call(this, t) || this;
    }

    return __extends(i, e), i.prototype.init = function () {
      this._default = {
        playing: this._owner.getProp(t.ObjectPropID.Playing),
        frame: this._owner.getProp(t.ObjectPropID.Frame)
      }, this._storage = {};
    }, i.prototype.addStatus = function (t, e) {
      var i;
      null == t ? i = this._default : this._storage[t] = i = {}, i.playing = e.readBool(), i.frame = e.readInt();
    }, i.prototype.apply = function () {
      this._owner._gearLocked = !0;
      var e = this._storage[this._controller.selectedPageId];
      e || (e = this._default), this._owner.setProp(t.ObjectPropID.Playing, e.playing), this._owner.setProp(t.ObjectPropID.Frame, e.frame), this._owner._gearLocked = !1;
    }, i.prototype.updateState = function () {
      var e = this._storage[this._controller.selectedPageId];
      e || (this._storage[this._controller.selectedPageId] = e = {}), e.playing = this._owner.getProp(t.ObjectPropID.Playing), e.frame = this._owner.getProp(t.ObjectPropID.Frame);
    }, i;
  }(t.GearBase);

  t.GearAnimation = e;
}(fgui || (fgui = {})), function (t) {
  var e = function (e) {
    function i(t) {
      return e.call(this, t) || this;
    }

    return __extends(i, e), i.prototype.init = function () {
      this._default = {
        color: this._owner.getProp(t.ObjectPropID.Color),
        strokeColor: this._owner.getProp(t.ObjectPropID.OutlineColor)
      }, this._storage = {};
    }, i.prototype.addStatus = function (t, e) {
      var i;
      null == t ? i = this._default : this._storage[t] = i = {}, i.color = e.readColor(), i.strokeColor = e.readColor();
    }, i.prototype.apply = function () {
      this._owner._gearLocked = !0;
      var e = this._storage[this._controller.selectedPageId];
      e || (e = this._default), this._owner.setProp(t.ObjectPropID.Color, e.color), this._owner.setProp(t.ObjectPropID.OutlineColor, e.strokeColor), this._owner._gearLocked = !1;
    }, i.prototype.updateState = function () {
      var e = this._storage[this._controller.selectedPageId];
      e || (this._storage[this._controller.selectedPageId] = e = {}), e.color = this._owner.getProp(t.ObjectPropID.Color), e.strokeColor = this._owner.getProp(t.ObjectPropID.OutlineColor);
    }, i;
  }(t.GearBase);

  t.GearColor = e;
}(fgui || (fgui = {})), function (t) {
  var e = function (t) {
    function e(e) {
      var i = t.call(this, e) || this;
      return i._displayLockToken = 1, i._visible = 0, i;
    }

    return __extends(e, t), e.prototype.init = function () {
      this.pages = null;
    }, e.prototype.apply = function () {
      this._displayLockToken++, 0 == this._displayLockToken && (this._displayLockToken = 1), null == this.pages || 0 == this.pages.length || -1 != this.pages.indexOf(this._controller.selectedPageId) ? this._visible = 1 : this._visible = 0;
    }, e.prototype.addLock = function () {
      return this._visible++, this._displayLockToken;
    }, e.prototype.releaseLock = function (t) {
      t == this._displayLockToken && this._visible--;
    }, Object.defineProperty(e.prototype, "connected", {
      get: function get() {
        return null == this._controller || this._visible > 0;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(t.GearBase);

  t.GearDisplay = e;
}(fgui || (fgui = {})), function (t) {
  var e = function (t) {
    function e(e) {
      var i = t.call(this, e) || this;
      return i._visible = 0, i;
    }

    return __extends(e, t), e.prototype.init = function () {
      this.pages = null;
    }, e.prototype.apply = function () {
      null == this.pages || 0 == this.pages.length || -1 != this.pages.indexOf(this._controller.selectedPageId) ? this._visible = 1 : this._visible = 0;
    }, e.prototype.evaluate = function (t) {
      var e = null == this._controller || this._visible > 0;
      return 0 == this.condition ? e && t : e || t;
    }, e;
  }(t.GearBase);

  t.GearDisplay2 = e;
}(fgui || (fgui = {})), function (t) {
  var e = function (e) {
    function i(t) {
      var i = e.call(this, t) || this;
      return i._default = 0, i;
    }

    return __extends(i, e), i.prototype.init = function () {
      this._default = this._owner.getProp(t.ObjectPropID.FontSize), this._storage = {};
    }, i.prototype.addStatus = function (t, e) {
      null == t ? this._default = e.readInt() : this._storage[t] = e.readInt();
    }, i.prototype.apply = function () {
      this._owner._gearLocked = !0;
      var e = this._storage[this._controller.selectedPageId];
      null != e ? this._owner.setProp(t.ObjectPropID.FontSize, e) : this._owner.setProp(t.ObjectPropID.FontSize, this._default), this._owner._gearLocked = !1;
    }, i.prototype.updateState = function () {
      this._storage[this._controller.selectedPageId] = this._owner.getProp(t.ObjectPropID.FontSize);
    }, i;
  }(t.GearBase);

  t.GearFontSize = e;
}(fgui || (fgui = {})), function (t) {
  var e = function (t) {
    function e(e) {
      return t.call(this, e) || this;
    }

    return __extends(e, t), e.prototype.init = function () {
      this._default = this._owner.icon, this._storage = {};
    }, e.prototype.addStatus = function (t, e) {
      null == t ? this._default = e.readS() : this._storage[t] = e.readS();
    }, e.prototype.apply = function () {
      this._owner._gearLocked = !0;
      var t = this._storage[this._controller.selectedPageId];
      this._owner.icon = void 0 !== t ? t : this._default, this._owner._gearLocked = !1;
    }, e.prototype.updateState = function () {
      this._storage[this._controller.selectedPageId] = this._owner.icon;
    }, e;
  }(t.GearBase);

  t.GearIcon = e;
}(fgui || (fgui = {})), function (t) {
  var e = function (e) {
    function i(t) {
      return e.call(this, t) || this;
    }

    return __extends(i, e), i.prototype.init = function () {
      this._default = {
        alpha: this._owner.alpha,
        rotation: this._owner.rotation,
        grayed: this._owner.grayed,
        touchable: this._owner.touchable
      }, this._storage = {};
    }, i.prototype.addStatus = function (t, e) {
      var i;
      null == t ? i = this._default : this._storage[t] = i = {}, i.alpha = e.readFloat(), i.rotation = e.readFloat(), i.grayed = e.readBool(), i.touchable = e.readBool();
    }, i.prototype.apply = function () {
      var e = this._storage[this._controller.selectedPageId];

      if (e || (e = this._default), this._tweenConfig && this._tweenConfig.tween && !t.UIPackage._constructing && !t.GearBase.disableAllTweenEffect) {
        if (this._owner._gearLocked = !0, this._owner.grayed = e.grayed, this._owner.touchable = e.touchable, this._owner._gearLocked = !1, this._tweenConfig._tweener) {
          if (this._tweenConfig._tweener.endValue.x == e.alpha && this._tweenConfig._tweener.endValue.y == e.rotation) return;
          this._tweenConfig._tweener.kill(!0), this._tweenConfig._tweener = null;
        }

        var i = e.alpha != this._owner.alpha,
            o = e.rotation != this._owner.rotation;
        (i || o) && (this._owner.checkGearController(0, this._controller) && (this._tweenConfig._displayLockToken = this._owner.addDisplayLock()), this._tweenConfig._tweener = t.GTween.to2(this._owner.alpha, this._owner.rotation, e.alpha, e.rotation, this._tweenConfig.duration).setDelay(this._tweenConfig.delay).setEase(this._tweenConfig.easeType).setUserData((i ? 1 : 0) + (o ? 2 : 0)).setTarget(this).onUpdate(this.__tweenUpdate, this).onComplete(this.__tweenComplete, this));
      } else this._owner._gearLocked = !0, this._owner.grayed = e.grayed, this._owner.touchable = e.touchable, this._owner.alpha = e.alpha, this._owner.rotation = e.rotation, this._owner._gearLocked = !1;
    }, i.prototype.__tweenUpdate = function (t) {
      var e = t.userData;
      this._owner._gearLocked = !0, 0 != (1 & e) && (this._owner.alpha = t.value.x), 0 != (2 & e) && (this._owner.rotation = t.value.y), this._owner._gearLocked = !1;
    }, i.prototype.__tweenComplete = function () {
      0 != this._tweenConfig._displayLockToken && (this._owner.releaseDisplayLock(this._tweenConfig._displayLockToken), this._tweenConfig._displayLockToken = 0), this._tweenConfig._tweener = null;
    }, i.prototype.updateState = function () {
      var t = this._storage[this._controller.selectedPageId];
      t || (this._storage[this._controller.selectedPageId] = t = {}), t.alpha = this._owner.alpha, t.rotation = this._owner.rotation, t.grayed = this._owner.grayed, t.touchable = this._owner.touchable;
    }, i;
  }(t.GearBase);

  t.GearLook = e;
}(fgui || (fgui = {})), function (t) {
  var e = function (e) {
    function i(t) {
      return e.call(this, t) || this;
    }

    return __extends(i, e), i.prototype.init = function () {
      this._default = {
        width: this._owner.width,
        height: this._owner.height,
        scaleX: this._owner.scaleX,
        scaleY: this._owner.scaleY
      }, this._storage = {};
    }, i.prototype.addStatus = function (t, e) {
      var i;
      null == t ? i = this._default : this._storage[t] = i = {}, i.width = e.readInt(), i.height = e.readInt(), i.scaleX = e.readFloat(), i.scaleY = e.readFloat();
    }, i.prototype.apply = function () {
      var e = this._storage[this._controller.selectedPageId];

      if (e || (e = this._default), this._tweenConfig && this._tweenConfig.tween && !t.UIPackage._constructing && !t.GearBase.disableAllTweenEffect) {
        if (this._tweenConfig._tweener) {
          if (this._tweenConfig._tweener.endValue.x == e.width && this._tweenConfig._tweener.endValue.y == e.height && this._tweenConfig._tweener.endValue.z == e.scaleX && this._tweenConfig._tweener.endValue.w == e.scaleY) return;
          this._tweenConfig._tweener.kill(!0), this._tweenConfig._tweener = null;
        }

        var i = e.width != this._owner.width || e.height != this._owner.height,
            o = e.scaleX != this._owner.scaleX || e.scaleY != this._owner.scaleY;
        (i || o) && (this._owner.checkGearController(0, this._controller) && (this._tweenConfig._displayLockToken = this._owner.addDisplayLock()), this._tweenConfig._tweener = t.GTween.to4(this._owner.width, this._owner.height, this._owner.scaleX, this._owner.scaleY, e.width, e.height, e.scaleX, e.scaleY, this._tweenConfig.duration).setDelay(this._tweenConfig.delay).setEase(this._tweenConfig.easeType).setUserData((i ? 1 : 0) + (o ? 2 : 0)).setTarget(this).onUpdate(this.__tweenUpdate, this).onComplete(this.__tweenComplete, this));
      } else this._owner._gearLocked = !0, this._owner.setSize(e.width, e.height, this._owner.gearXY.controller == this._controller), this._owner.setScale(e.scaleX, e.scaleY), this._owner._gearLocked = !1;
    }, i.prototype.__tweenUpdate = function (t) {
      var e = t.userData;
      this._owner._gearLocked = !0, 0 != (1 & e) && this._owner.setSize(t.value.x, t.value.y, this._owner.checkGearController(1, this._controller)), 0 != (2 & e) && this._owner.setScale(t.value.z, t.value.w), this._owner._gearLocked = !1;
    }, i.prototype.__tweenComplete = function () {
      0 != this._tweenConfig._displayLockToken && (this._owner.releaseDisplayLock(this._tweenConfig._displayLockToken), this._tweenConfig._displayLockToken = 0), this._tweenConfig._tweener = null;
    }, i.prototype.updateState = function () {
      var t = this._storage[this._controller.selectedPageId];
      t || (this._storage[this._controller.selectedPageId] = t = {}), t.width = this._owner.width, t.height = this._owner.height, t.scaleX = this._owner.scaleX, t.scaleY = this._owner.scaleY;
    }, i.prototype.updateFromRelations = function (t, e) {
      if (null != this._controller && null != this._storage) {
        for (var i in this._storage) {
          var o = this._storage[i];
          o.width += t, o.height += e;
        }

        this._default.width += t, this._default.height += e, this.updateState();
      }
    }, i;
  }(t.GearBase);

  t.GearSize = e;
}(fgui || (fgui = {})), function (t) {
  var e = function (t) {
    function e(e) {
      return t.call(this, e) || this;
    }

    return __extends(e, t), e.prototype.init = function () {
      this._default = this._owner.text, this._storage = {};
    }, e.prototype.addStatus = function (t, e) {
      null == t ? this._default = e.readS() : this._storage[t] = e.readS();
    }, e.prototype.apply = function () {
      this._owner._gearLocked = !0;
      var t = this._storage[this._controller.selectedPageId];
      this._owner.text = void 0 !== t ? t : this._default, this._owner._gearLocked = !1;
    }, e.prototype.updateState = function () {
      this._storage[this._controller.selectedPageId] = this._owner.text;
    }, e;
  }(t.GearBase);

  t.GearText = e;
}(fgui || (fgui = {})), function (t) {
  var e = function (e) {
    function i(t) {
      return e.call(this, t) || this;
    }

    return __extends(i, e), i.prototype.init = function () {
      this._default = {
        x: this._owner.x,
        y: this._owner.y,
        px: this._owner.x / this._owner.parent.width,
        py: this._owner.y / this._owner.parent.height
      }, this._storage = {};
    }, i.prototype.addStatus = function (t, e) {
      var i;
      null == t ? i = this._default : this._storage[t] = i = {}, i.x = e.readInt(), i.y = e.readInt();
    }, i.prototype.addExtStatus = function (t, e) {
      var i;
      (i = null == t ? this._default : this._storage[t]).px = e.readFloat(), i.py = e.readFloat();
    }, i.prototype.apply = function () {
      var e,
          i,
          o = this._storage[this._controller.selectedPageId];

      if (o || (o = this._default), this.positionsInPercent && this._owner.parent ? (e = o.px * this._owner.parent.width, i = o.py * this._owner.parent.height) : (e = o.x, i = o.y), this._tweenConfig && this._tweenConfig.tween && !t.UIPackage._constructing && !t.GearBase.disableAllTweenEffect) {
        if (this._tweenConfig._tweener) {
          if (this._tweenConfig._tweener.endValue.x == e && this._tweenConfig._tweener.endValue.y == i) return;
          this._tweenConfig._tweener.kill(!0), this._tweenConfig._tweener = null;
        }

        var n = this._owner.x,
            r = this._owner.y;
        n == e && r == i || (this._owner.checkGearController(0, this._controller) && (this._tweenConfig._displayLockToken = this._owner.addDisplayLock()), this._tweenConfig._tweener = t.GTween.to2(n, r, e, i, this._tweenConfig.duration).setDelay(this._tweenConfig.delay).setEase(this._tweenConfig.easeType).setTarget(this).onUpdate(this.__tweenUpdate, this).onComplete(this.__tweenComplete, this));
      } else this._owner._gearLocked = !0, this._owner.setPosition(e, i), this._owner._gearLocked = !1;
    }, i.prototype.__tweenUpdate = function (t) {
      this._owner._gearLocked = !0, this._owner.setPosition(t.value.x, t.value.y), this._owner._gearLocked = !1;
    }, i.prototype.__tweenComplete = function () {
      0 != this._tweenConfig._displayLockToken && (this._owner.releaseDisplayLock(this._tweenConfig._displayLockToken), this._tweenConfig._displayLockToken = 0), this._tweenConfig._tweener = null;
    }, i.prototype.updateState = function () {
      var t = this._storage[this._controller.selectedPageId];
      t || (this._storage[this._controller.selectedPageId] = t = {}), t.x = this._owner.x, t.y = this._owner.y, t.px = this._owner.x / this._owner.parent.width, t.py = this._owner.y / this._owner.parent.height;
    }, i.prototype.updateFromRelations = function (t, e) {
      if (null != this._controller && null != this._storage && !this.positionsInPercent) {
        for (var i in this._storage) {
          var o = this._storage[i];
          o.x += t, o.y += e;
        }

        this._default.x += t, this._default.y += e, this.updateState();
      }
    }, i;
  }(t.GearBase);

  t.GearXY = e;
}(fgui || (fgui = {})), function (t) {
  var e = .5 * Math.PI,
      i = 2 * Math.PI;

  function o(t, e) {
    return 1 - n(e - t, e);
  }

  function n(t, e) {
    return (t /= e) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
  }

  function r(t, e) {
    return t < .5 * e ? .5 * o(2 * t, e) : .5 * n(2 * t - e, e) + .5;
  }

  t.evaluateEase = function (s, h, a, l, c) {
    switch (s) {
      case t.EaseType.Linear:
        return h / a;

      case t.EaseType.SineIn:
        return 1 - Math.cos(h / a * e);

      case t.EaseType.SineOut:
        return Math.sin(h / a * e);

      case t.EaseType.SineInOut:
        return -.5 * (Math.cos(Math.PI * h / a) - 1);

      case t.EaseType.QuadIn:
        return (h /= a) * h;

      case t.EaseType.QuadOut:
        return -(h /= a) * (h - 2);

      case t.EaseType.QuadInOut:
        return (h /= .5 * a) < 1 ? .5 * h * h : -.5 * (--h * (h - 2) - 1);

      case t.EaseType.CubicIn:
        return (h /= a) * h * h;

      case t.EaseType.CubicOut:
        return (h = h / a - 1) * h * h + 1;

      case t.EaseType.CubicInOut:
        return (h /= .5 * a) < 1 ? .5 * h * h * h : .5 * ((h -= 2) * h * h + 2);

      case t.EaseType.QuartIn:
        return (h /= a) * h * h * h;

      case t.EaseType.QuartOut:
        return -((h = h / a - 1) * h * h * h - 1);

      case t.EaseType.QuartInOut:
        return (h /= .5 * a) < 1 ? .5 * h * h * h * h : -.5 * ((h -= 2) * h * h * h - 2);

      case t.EaseType.QuintIn:
        return (h /= a) * h * h * h * h;

      case t.EaseType.QuintOut:
        return (h = h / a - 1) * h * h * h * h + 1;

      case t.EaseType.QuintInOut:
        return (h /= .5 * a) < 1 ? .5 * h * h * h * h * h : .5 * ((h -= 2) * h * h * h * h + 2);

      case t.EaseType.ExpoIn:
        return 0 == h ? 0 : Math.pow(2, 10 * (h / a - 1));

      case t.EaseType.ExpoOut:
        return h == a ? 1 : 1 - Math.pow(2, -10 * h / a);

      case t.EaseType.ExpoInOut:
        return 0 == h ? 0 : h == a ? 1 : (h /= .5 * a) < 1 ? .5 * Math.pow(2, 10 * (h - 1)) : .5 * (2 - Math.pow(2, -10 * --h));

      case t.EaseType.CircIn:
        return -(Math.sqrt(1 - (h /= a) * h) - 1);

      case t.EaseType.CircOut:
        return Math.sqrt(1 - (h = h / a - 1) * h);

      case t.EaseType.CircInOut:
        return (h /= .5 * a) < 1 ? -.5 * (Math.sqrt(1 - h * h) - 1) : .5 * (Math.sqrt(1 - (h -= 2) * h) + 1);

      case t.EaseType.ElasticIn:
        var u;
        return 0 == h ? 0 : 1 == (h /= a) ? 1 : (0 == c && (c = .3 * a), l < 1 ? (l = 1, u = c / 4) : u = c / i * Math.asin(1 / l), -l * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * a - u) * i / c));

      case t.EaseType.ElasticOut:
        var _;

        return 0 == h ? 0 : 1 == (h /= a) ? 1 : (0 == c && (c = .3 * a), l < 1 ? (l = 1, _ = c / 4) : _ = c / i * Math.asin(1 / l), l * Math.pow(2, -10 * h) * Math.sin((h * a - _) * i / c) + 1);

      case t.EaseType.ElasticInOut:
        var p;
        return 0 == h ? 0 : 2 == (h /= .5 * a) ? 1 : (0 == c && (c = .3 * 1.5 * a), l < 1 ? (l = 1, p = c / 4) : p = c / i * Math.asin(1 / l), h < 1 ? l * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * a - p) * i / c) * -.5 : l * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * a - p) * i / c) * .5 + 1);

      case t.EaseType.BackIn:
        return (h /= a) * h * ((l + 1) * h - l);

      case t.EaseType.BackOut:
        return (h = h / a - 1) * h * ((l + 1) * h + l) + 1;

      case t.EaseType.BackInOut:
        return (h /= .5 * a) < 1 ? h * h * ((1 + (l *= 1.525)) * h - l) * .5 : .5 * ((h -= 2) * h * ((1 + (l *= 1.525)) * h + l) + 2);

      case t.EaseType.BounceIn:
        return o(h, a);

      case t.EaseType.BounceOut:
        return n(h, a);

      case t.EaseType.BounceInOut:
        return r(h, a);

      default:
        return -(h /= a) * (h - 2);
    }
  };
}(fgui || (fgui = {})), function (t) {
  var e = function () {
    function t() {}

    return t.Linear = 0, t.SineIn = 1, t.SineOut = 2, t.SineInOut = 3, t.QuadIn = 4, t.QuadOut = 5, t.QuadInOut = 6, t.CubicIn = 7, t.CubicOut = 8, t.CubicInOut = 9, t.QuartIn = 10, t.QuartOut = 11, t.QuartInOut = 12, t.QuintIn = 13, t.QuintOut = 14, t.QuintInOut = 15, t.ExpoIn = 16, t.ExpoOut = 17, t.ExpoInOut = 18, t.CircIn = 19, t.CircOut = 20, t.CircInOut = 21, t.ElasticIn = 22, t.ElasticOut = 23, t.ElasticInOut = 24, t.BackIn = 25, t.BackOut = 26, t.BackInOut = 27, t.BounceIn = 28, t.BounceOut = 29, t.BounceInOut = 30, t.Custom = 31, t;
  }();

  t.EaseType = e;
}(fgui || (fgui = {})), function (t) {
  var e = function () {
    function e() {
      this._segments = new Array(), this._points = new Array();
    }

    return Object.defineProperty(e.prototype, "length", {
      get: function get() {
        return this._fullLength;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.create = function (e, o, n, r) {
      var s;
      Array.isArray(e) ? s = e : ((s = new Array()).push(e), s.push(o), n && s.push(n), r && s.push(r)), this._segments.length = 0, this._points.length = 0, this._fullLength = 0;
      var h = s.length;

      if (0 != h) {
        var a = i;
        a.length = 0;
        var l = s[0];
        l.curveType == t.CurveType.CRSpline && a.push(new cc.Vec2(l.x, l.y));

        for (var c = 1; c < h; c++) {
          var u = s[c];

          if (l.curveType != t.CurveType.CRSpline) {
            var _ = {};
            _.type = l.curveType, _.ptStart = this._points.length, l.curveType == t.CurveType.Straight ? (_.ptCount = 2, this._points.push(new cc.Vec2(l.x, l.y)), this._points.push(new cc.Vec2(u.x, u.y))) : l.curveType == t.CurveType.Bezier ? (_.ptCount = 3, this._points.push(new cc.Vec2(l.x, l.y)), this._points.push(new cc.Vec2(u.x, u.y)), this._points.push(new cc.Vec2(l.control1_x, l.control1_y))) : l.curveType == t.CurveType.CubicBezier && (_.ptCount = 4, this._points.push(new cc.Vec2(l.x, l.y)), this._points.push(new cc.Vec2(u.x, u.y)), this._points.push(new cc.Vec2(l.control1_x, l.control1_y)), this._points.push(new cc.Vec2(l.control2_x, l.control2_y))), _.length = t.ToolSet.distance(l.x, l.y, u.x, u.y), this._fullLength += _.length, this._segments.push(_);
          }

          u.curveType != t.CurveType.CRSpline ? a.length > 0 && (a.push(new cc.Vec2(u.x, u.y)), this.createSplineSegment()) : a.push(new cc.Vec2(u.x, u.y)), l = u;
        }

        a.length > 1 && this.createSplineSegment();
      }
    }, e.prototype.createSplineSegment = function () {
      var e = i,
          o = e.length;
      e.splice(0, 0, e[0]), e.push(e[o]), e.push(e[o]), o += 3;
      var n = {};
      n.type = t.CurveType.CRSpline, n.ptStart = this._points.length, n.ptCount = o, this._points = this._points.concat(e), n.length = 0;

      for (var r = 1; r < o; r++) {
        n.length += t.ToolSet.distance(e[r - 1].x, e[r - 1].y, e[r].x, e[r].y);
      }

      this._fullLength += n.length, this._segments.push(n), e.length = 0;
    }, e.prototype.clear = function () {
      this._segments.length = 0, this._points.length = 0;
    }, e.prototype.getPointAt = function (e, i) {
      i ? i.x = i.y = 0 : i = new cc.Vec2(), e = t.ToolSet.clamp01(e);
      var o,
          n = this._segments.length;
      if (0 == n) return i;
      if (1 == e) return (o = this._segments[n - 1]).type == t.CurveType.Straight ? (i.x = t.ToolSet.lerp(this._points[o.ptStart].x, this._points[o.ptStart + 1].x, e), i.y = t.ToolSet.lerp(this._points[o.ptStart].y, this._points[o.ptStart + 1].y, e), i) : o.type == t.CurveType.Bezier || o.type == t.CurveType.CubicBezier ? this.onBezierCurve(o.ptStart, o.ptCount, e, i) : this.onCRSplineCurve(o.ptStart, o.ptCount, e, i);

      for (var r = e * this._fullLength, s = 0; s < n; s++) {
        if ((r -= (o = this._segments[s]).length) < 0) {
          e = 1 + r / o.length, o.type == t.CurveType.Straight ? (i.x = t.ToolSet.lerp(this._points[o.ptStart].x, this._points[o.ptStart + 1].x, e), i.y = t.ToolSet.lerp(this._points[o.ptStart].y, this._points[o.ptStart + 1].y, e)) : i = o.type == t.CurveType.Bezier || o.type == t.CurveType.CubicBezier ? this.onBezierCurve(o.ptStart, o.ptCount, e, i) : this.onCRSplineCurve(o.ptStart, o.ptCount, e, i);
          break;
        }
      }

      return i;
    }, Object.defineProperty(e.prototype, "segmentCount", {
      get: function get() {
        return this._segments.length;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getAnchorsInSegment = function (t, e) {
      null == e && (e = new Array());

      for (var i = this._segments[t], o = 0; o < i.ptCount; o++) {
        e.push(new cc.Vec2(this._points[i.ptStart + o].x, this._points[i.ptStart + o].y));
      }

      return e;
    }, e.prototype.getPointsInSegment = function (e, i, o, n, r, s) {
      null == n && (n = new Array()), s && !isNaN(s) || (s = .1), r && r.push(i);
      var h = this._segments[e];
      if (h.type == t.CurveType.Straight) n.push(new cc.Vec2(t.ToolSet.lerp(this._points[h.ptStart].x, this._points[h.ptStart + 1].x, i), t.ToolSet.lerp(this._points[h.ptStart].y, this._points[h.ptStart + 1].y, i))), n.push(new cc.Vec2(t.ToolSet.lerp(this._points[h.ptStart].x, this._points[h.ptStart + 1].x, o), t.ToolSet.lerp(this._points[h.ptStart].y, this._points[h.ptStart + 1].y, o)));else {
        var a;
        a = h.type == t.CurveType.Bezier || h.type == t.CurveType.CubicBezier ? this.onBezierCurve : this.onCRSplineCurve, n.push(a.call(this, h.ptStart, h.ptCount, i, new cc.Vec2()));

        for (var l = Math.min(h.length * s, 50), c = 0; c <= l; c++) {
          var u = c / l;
          u > i && u < o && (n.push(a.call(this, h.ptStart, h.ptCount, u, new cc.Vec2())), null != r && r.push(u));
        }

        n.push(a.call(this, h.ptStart, h.ptCount, o, new cc.Vec2()));
      }
      return null != r && r.push(o), n;
    }, e.prototype.getAllPoints = function (t, e, i) {
      null == t && (t = new Array()), i && !isNaN(i) || (i = .1);

      for (var o = this._segments.length, n = 0; n < o; n++) {
        this.getPointsInSegment(n, 0, 1, t, e, i);
      }

      return t;
    }, e.prototype.onCRSplineCurve = function (e, i, o, n) {
      var r = Math.floor(o * (i - 4)) + e,
          s = this._points[r].x,
          h = this._points[r].y,
          a = this._points[r + 1].x,
          l = this._points[r + 1].y,
          c = this._points[r + 2].x,
          u = this._points[r + 2].y,
          _ = this._points[r + 3].x,
          p = this._points[r + 3].y,
          d = 1 == o ? 1 : t.ToolSet.repeat(o * (i - 4), 1),
          f = ((2 - d) * d - 1) * d * .5,
          g = .5 * ((3 * d - 5) * d * d + 2),
          y = ((-3 * d + 4) * d + 1) * d * .5,
          m = (d - 1) * d * d * .5;
      return n.x = s * f + a * g + c * y + _ * m, n.y = h * f + l * g + u * y + p * m, n;
    }, e.prototype.onBezierCurve = function (t, e, i, o) {
      var n = 1 - i,
          r = this._points[t].x,
          s = this._points[t].y,
          h = this._points[t + 1].x,
          a = this._points[t + 1].y,
          l = this._points[t + 2].x,
          c = this._points[t + 2].y;

      if (4 == e) {
        var u = this._points[t + 3].x,
            _ = this._points[t + 3].y;
        o.x = n * n * n * r + 3 * n * n * i * l + 3 * n * i * i * u + i * i * i * h, o.y = n * n * n * s + 3 * n * n * i * c + 3 * n * i * i * _ + i * i * i * a;
      } else o.x = n * n * r + 2 * n * i * l + i * i * h, o.y = n * n * s + 2 * n * i * c + i * i * a;

      return o;
    }, e;
  }();

  t.GPath = e;
  var i = new Array();
}(fgui || (fgui = {})), function (t) {
  var e;

  (function (t) {
    t[t.CRSpline = 0] = "CRSpline", t[t.Bezier = 1] = "Bezier", t[t.CubicBezier = 2] = "CubicBezier", t[t.Straight = 3] = "Straight";
  })(e = t.CurveType || (t.CurveType = {}));

  var i = function () {
    function t() {
      this.x = 0, this.y = 0, this.control1_x = 0, this.control1_y = 0, this.control2_x = 0, this.control2_y = 0, this.curveType = 0;
    }

    return t.newPoint = function (e, i, o) {
      void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === o && (o = 0);
      var n = new t();
      return n.x = e, n.y = i, n.control1_x = 0, n.control1_y = 0, n.control2_x = 0, n.control2_y = 0, n.curveType = o, n;
    }, t.newBezierPoint = function (i, o, n, r) {
      void 0 === i && (i = 0), void 0 === o && (o = 0), void 0 === n && (n = 0), void 0 === r && (r = 0);
      var s = new t();
      return s.x = i, s.y = o, s.control1_x = n, s.control1_y = r, s.control2_x = 0, s.control2_y = 0, s.curveType = e.Bezier, s;
    }, t.newCubicBezierPoint = function (i, o, n, r, s, h) {
      void 0 === i && (i = 0), void 0 === o && (o = 0), void 0 === n && (n = 0), void 0 === r && (r = 0), void 0 === s && (s = 0), void 0 === h && (h = 0);
      var a = new t();
      return a.x = i, a.y = o, a.control1_x = n, a.control1_y = r, a.control2_x = s, a.control2_y = h, a.curveType = e.CubicBezier, a;
    }, t.prototype.clone = function () {
      var e = new t();
      return e.x = this.x, e.y = this.y, e.control1_x = this.control1_x, e.control1_y = this.control1_y, e.control2_x = this.control2_x, e.control2_y = this.control2_y, e.curveType = this.curveType, e;
    }, t;
  }();

  t.GPathPoint = i;
}(fgui || (fgui = {})), function (t) {
  var e = function () {
    function e() {}

    return e.to = function (e, i, o) {
      return t.TweenManager.createTween()._to(e, i, o);
    }, e.to2 = function (e, i, o, n, r) {
      return t.TweenManager.createTween()._to2(e, i, o, n, r);
    }, e.to3 = function (e, i, o, n, r, s, h) {
      return t.TweenManager.createTween()._to3(e, i, o, n, r, s, h);
    }, e.to4 = function (e, i, o, n, r, s, h, a, l) {
      return t.TweenManager.createTween()._to4(e, i, o, n, r, s, h, a, l);
    }, e.toColor = function (e, i, o) {
      return t.TweenManager.createTween()._toColor(e, i, o);
    }, e.delayedCall = function (e) {
      return t.TweenManager.createTween().setDelay(e);
    }, e.shake = function (e, i, o, n) {
      return t.TweenManager.createTween()._shake(e, i, o, n);
    }, e.isTweening = function (e, i) {
      return t.TweenManager.isTweening(e, i);
    }, e.kill = function (e, i, o) {
      t.TweenManager.killTweens(e, i, o);
    }, e.getTween = function (e, i) {
      return t.TweenManager.getTween(e, i);
    }, e.catchCallbackExceptions = !0, e;
  }();

  t.GTween = e;
}(fgui || (fgui = {})), function (t) {
  var e = function () {
    function e() {
      this._startValue = new t.TweenValue(), this._endValue = new t.TweenValue(), this._value = new t.TweenValue(), this._deltaValue = new t.TweenValue(), this._reset();
    }

    return e.prototype.setDelay = function (t) {
      return this._delay = t, this;
    }, Object.defineProperty(e.prototype, "delay", {
      get: function get() {
        return this._delay;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.setDuration = function (t) {
      return this._duration = t, this;
    }, Object.defineProperty(e.prototype, "duration", {
      get: function get() {
        return this._duration;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.setBreakpoint = function (t) {
      return this._breakpoint = t, this;
    }, e.prototype.setEase = function (t) {
      return this._easeType = t, this;
    }, e.prototype.setEasePeriod = function (t) {
      return this._easePeriod = t, this;
    }, e.prototype.setEaseOvershootOrAmplitude = function (t) {
      return this._easeOvershootOrAmplitude = t, this;
    }, e.prototype.setRepeat = function (t, e) {
      return this._repeat = t, this._yoyo = e, this;
    }, Object.defineProperty(e.prototype, "repeat", {
      get: function get() {
        return this._repeat;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.setTimeScale = function (t) {
      return this._timeScale = t, this;
    }, e.prototype.setSnapping = function (t) {
      return this._snapping = t, this;
    }, e.prototype.setTarget = function (e, i) {
      return this._target = e, this._propType = i, e instanceof t.GObject ? this._node = e.node : e instanceof cc.Node && (this._node = e), this;
    }, Object.defineProperty(e.prototype, "target", {
      get: function get() {
        return this._target;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.setPath = function (t) {
      return this._path = t, this;
    }, e.prototype.setUserData = function (t) {
      return this._userData = t, this;
    }, Object.defineProperty(e.prototype, "userData", {
      get: function get() {
        return this._userData;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.onUpdate = function (t, e) {
      return this._onUpdate = t, this._onUpdateCaller = e, this;
    }, e.prototype.onStart = function (t, e) {
      return this._onStart = t, this._onStartCaller = e, this;
    }, e.prototype.onComplete = function (t, e) {
      return this._onComplete = t, this._onCompleteCaller = e, this;
    }, Object.defineProperty(e.prototype, "startValue", {
      get: function get() {
        return this._startValue;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "endValue", {
      get: function get() {
        return this._endValue;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "value", {
      get: function get() {
        return this._value;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "deltaValue", {
      get: function get() {
        return this._deltaValue;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "normalizedTime", {
      get: function get() {
        return this._normalizedTime;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "completed", {
      get: function get() {
        return 0 != this._ended;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "allCompleted", {
      get: function get() {
        return 1 == this._ended;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.setPaused = function (t) {
      return this._paused = t, this;
    }, e.prototype.seek = function (t) {
      if (!this._killed) {
        if (this._elapsedTime = t, this._elapsedTime < this._delay) {
          if (!this._started) return;
          this._elapsedTime = this._delay;
        }

        this.update();
      }
    }, e.prototype.kill = function (t) {
      this._killed || (t && (0 == this._ended && (this._breakpoint >= 0 ? this._elapsedTime = this._delay + this._breakpoint : this._repeat >= 0 ? this._elapsedTime = this._delay + this._duration * (this._repeat + 1) : this._elapsedTime = this._delay + 2 * this._duration, this.update()), this.callCompleteCallback()), this._killed = !0);
    }, e.prototype._to = function (t, e, i) {
      return this._valueSize = 1, this._startValue.x = t, this._endValue.x = e, this._duration = i, this;
    }, e.prototype._to2 = function (t, e, i, o, n) {
      return this._valueSize = 2, this._startValue.x = t, this._endValue.x = i, this._startValue.y = e, this._endValue.y = o, this._duration = n, this;
    }, e.prototype._to3 = function (t, e, i, o, n, r, s) {
      return this._valueSize = 3, this._startValue.x = t, this._endValue.x = o, this._startValue.y = e, this._endValue.y = n, this._startValue.z = i, this._endValue.z = r, this._duration = s, this;
    }, e.prototype._to4 = function (t, e, i, o, n, r, s, h, a) {
      return this._valueSize = 4, this._startValue.x = t, this._endValue.x = n, this._startValue.y = e, this._endValue.y = r, this._startValue.z = i, this._endValue.z = s, this._startValue.w = o, this._endValue.w = h, this._duration = a, this;
    }, e.prototype._toColor = function (t, e, i) {
      return this._valueSize = 5, this._startValue.color = t, this._endValue.color = e, this._duration = i, this;
    }, e.prototype._shake = function (t, e, i, o) {
      return this._valueSize = 6, this._startValue.x = t, this._startValue.y = e, this._startValue.w = i, this._duration = o, this;
    }, e.prototype._init = function () {
      this._delay = 0, this._duration = 0, this._breakpoint = -1, this._easeType = t.EaseType.QuadOut, this._timeScale = 1, this._easePeriod = 0, this._easeOvershootOrAmplitude = 1.70158, this._snapping = !1, this._repeat = 0, this._yoyo = !1, this._valueSize = 0, this._started = !1, this._paused = !1, this._killed = !1, this._elapsedTime = 0, this._normalizedTime = 0, this._ended = 0;
    }, e.prototype._reset = function () {
      this._target = null, this._propType = null, this._userData = null, this._node = null, this._path = null, this._onStart = this._onUpdate = this._onComplete = null, this._onStartCaller = this._onUpdateCaller = this._onCompleteCaller = null;
    }, e.prototype._update = function (t) {
      if (!this._node || cc.isValid(this._node)) {
        if (1 != this._timeScale && (t *= this._timeScale), 0 != t) {
          if (0 != this._ended) return this.callCompleteCallback(), void (this._killed = !0);
          this._elapsedTime += t, this.update(), 0 != this._ended && (this._killed || (this.callCompleteCallback(), this._killed = !0));
        }
      } else this._killed = !0;
    }, e.prototype.update = function () {
      if (this._ended = 0, 0 != this._valueSize) {
        if (!this._started) {
          if (this._elapsedTime < this._delay) return;
          if (this._started = !0, this.callStartCallback(), this._killed) return;
        }

        var e = !1,
            o = this._elapsedTime - this._delay;

        if (this._breakpoint >= 0 && o >= this._breakpoint && (o = this._breakpoint, this._ended = 2), 0 != this._repeat) {
          var n = Math.floor(o / this._duration);
          o -= this._duration * n, this._yoyo && (e = n % 2 == 1), this._repeat > 0 && this._repeat - n < 0 && (this._yoyo && (e = this._repeat % 2 == 1), o = this._duration, this._ended = 1);
        } else o >= this._duration && (o = this._duration, this._ended = 1);

        if (this._normalizedTime = t.evaluateEase(this._easeType, e ? this._duration - o : o, this._duration, this._easeOvershootOrAmplitude, this._easePeriod), this._value.setZero(), this._deltaValue.setZero(), 6 == this._valueSize) {
          if (0 == this._ended) {
            var r = this._startValue.w * (1 - this._normalizedTime),
                s = r * (Math.random() > .5 ? 1 : -1),
                h = r * (Math.random() > .5 ? 1 : -1);
            this._deltaValue.x = s, this._deltaValue.y = h, this._value.x = this._startValue.x + s, this._value.y = this._startValue.y + h;
          } else this._value.x = this._startValue.x, this._value.y = this._startValue.y;
        } else if (this._path) {
          var a = i;
          this._path.getPointAt(this._normalizedTime, a), this._snapping && (a.x = Math.round(a.x), a.y = Math.round(a.y)), this._deltaValue.x = a.x - this._value.x, this._deltaValue.y = a.y - this._value.y, this._value.x = a.x, this._value.y = a.y;
        } else for (var l = Math.min(this._valueSize, 4), c = 0; c < l; c++) {
          var u = this._startValue.getField(c),
              _ = u + (this._endValue.getField(c) - u) * this._normalizedTime;

          this._snapping && (_ = Math.round(_)), this._deltaValue.setField(c, _ - this._value.getField(c)), this._value.setField(c, _);
        }
        if (null != this._target && null != this._propType) if (this._propType instanceof Function) switch (this._valueSize) {
          case 1:
            this._propType.call(this._target, this._value.x);

            break;

          case 2:
            this._propType.call(this._target, this._value.x, this._value.y);

            break;

          case 3:
            this._propType.call(this._target, this._value.x, this._value.y, this._value.z);

            break;

          case 4:
            this._propType.call(this._target, this._value.x, this._value.y, this._value.z, this._value.w);

            break;

          case 5:
            this._propType.call(this._target, this._value.color);

            break;

          case 6:
            this._propType.call(this._target, this._value.x, this._value.y);

        } else 5 == this._valueSize ? this._target[this._propType] = this._value.color : this._target[this._propType] = this._value.x;
        this.callUpdateCallback();
      } else this._elapsedTime >= this._delay + this._duration && (this._ended = 1);
    }, e.prototype.callStartCallback = function () {
      if (null != this._onStart) try {
        this._onStart.call(this._onStartCaller, this);
      } catch (t) {
        console.log("FairyGUI: error in start callback > " + t);
      }
    }, e.prototype.callUpdateCallback = function () {
      if (null != this._onUpdate) try {
        this._onUpdate.call(this._onUpdateCaller, this);
      } catch (t) {
        console.log("FairyGUI: error in update callback > " + t);
      }
    }, e.prototype.callCompleteCallback = function () {
      if (null != this._onComplete) try {
        this._onComplete.call(this._onCompleteCaller, this);
      } catch (t) {
        console.log("FairyGUI: error in complete callback > " + t);
      }
    }, e;
  }();

  t.GTweener = e;
  var i = new cc.Vec2();
}(fgui || (fgui = {})), function (t) {
  var e,
      i = new Array(30),
      o = new Array(),
      n = 0,
      r = function () {
    function r() {}

    return r.createTween = function () {
      var s;
      return e || (e = new cc.Node("[TweenManager]"), cc.game.addPersistRootNode(e), cc.director.getScheduler().schedule(r.update, e, 0, !1)), (s = o.length > 0 ? o.pop() : new t.GTweener())._init(), i[n++] = s, n == i.length && (i.length = i.length + Math.ceil(.5 * i.length)), s;
    }, r.isTweening = function (t, e) {
      if (null == t) return !1;

      for (var o = null == e || null == e, r = 0; r < n; r++) {
        var s = i[r];
        if (s && s.target == t && !s._killed && (o || s._propType == e)) return !0;
      }

      return !1;
    }, r.killTweens = function (t, e, o) {
      if (null == t) return !1;

      for (var r = !1, s = n, h = null == o || null == o, a = 0; a < s; a++) {
        var l = i[a];
        !l || l.target != t || l._killed || !h && l._propType != o || (l.kill(e), r = !0);
      }

      return r;
    }, r.getTween = function (t, e) {
      if (null == t) return null;

      for (var o = n, r = null == e || null == e, s = 0; s < o; s++) {
        var h = i[s];
        if (h && h.target == t && !h._killed && (r || h._propType == e)) return h;
      }

      return null;
    }, r.update = function (e) {
      for (var r = i, s = n, h = -1, a = 0; a < s; a++) {
        var l = r[a];
        null == l ? -1 == h && (h = a) : l._killed ? (l._reset(), o.push(l), r[a] = null, -1 == h && (h = a)) : (l._target instanceof t.GObject && null == l._target.node ? l._killed = !0 : l._paused || l._update(e), -1 != h && (r[h] = l, r[a] = null, h++));
      }

      if (h >= 0) {
        if (n != s) {
          var c = s;

          for (s = n - s, a = 0; a < s; a++) {
            r[h++] = r[c++];
          }
        }

        n = h;
      }

      return !1;
    }, r;
  }();

  t.TweenManager = r;
}(fgui || (fgui = {})), function (t) {
  var e = function () {
    function t() {
      this.x = this.y = this.z = this.w = 0;
    }

    return Object.defineProperty(t.prototype, "color", {
      get: function get() {
        return (this.w << 24) + (this.x << 16) + (this.y << 8) + this.z;
      },
      set: function set(t) {
        this.x = (16711680 & t) >> 16, this.y = (65280 & t) >> 8, this.z = 255 & t, this.w = (4278190080 & t) >> 24;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.getField = function (t) {
      switch (t) {
        case 0:
          return this.x;

        case 1:
          return this.y;

        case 2:
          return this.z;

        case 3:
          return this.w;

        default:
          throw new Error("Index out of bounds: " + t);
      }
    }, t.prototype.setField = function (t, e) {
      switch (t) {
        case 0:
          this.x = e;
          break;

        case 1:
          this.y = e;
          break;

        case 2:
          this.z = e;
          break;

        case 3:
          this.w = e;
          break;

        default:
          throw new Error("Index out of bounds: " + t);
      }
    }, t.prototype.setZero = function () {
      this.x = this.y = this.z = this.w = 0;
    }, t;
  }();

  t.TweenValue = e;
}(fgui || (fgui = {})), function (t) {
  var e = function () {
    function t(t, e, i) {
      void 0 === e && (e = 0), void 0 === i && (i = -1), this.version = 0, -1 == i && (i = t.byteLength - e), this._bytes = new Uint8Array(t, e, i), this._view = new DataView(this._bytes.buffer, e, i), this._pos = 0, this._length = i;
    }

    return Object.defineProperty(t.prototype, "data", {
      get: function get() {
        return this._bytes;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "position", {
      get: function get() {
        return this._pos;
      },
      set: function set(t) {
        if (t > this._length) throw "Out of bounds";
        this._pos = t;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.skip = function (t) {
      this._pos += t;
    }, t.prototype.validate = function (t) {
      if (this._pos + t > this._length) throw "Out of bounds";
    }, t.prototype.readByte = function () {
      return this.validate(1), this._view.getInt8(this._pos++);
    }, t.prototype.readUbyte = function () {
      return this._bytes[this._pos++];
    }, t.prototype.readBool = function () {
      return 1 == this.readByte();
    }, t.prototype.readShort = function () {
      this.validate(2);

      var t = this._view.getInt16(this._pos, this.littleEndian);

      return this._pos += 2, t;
    }, t.prototype.readUshort = function () {
      this.validate(2);

      var t = this._view.getUint16(this._pos, this.littleEndian);

      return this._pos += 2, t;
    }, t.prototype.readInt = function () {
      this.validate(4);

      var t = this._view.getInt32(this._pos, this.littleEndian);

      return this._pos += 4, t;
    }, t.prototype.readUint = function () {
      this.validate(4);

      var t = this._view.getUint32(this._pos, this.littleEndian);

      return this._pos += 4, t;
    }, t.prototype.readFloat = function () {
      this.validate(4);

      var t = this._view.getFloat32(this._pos, this.littleEndian);

      return this._pos += 4, t;
    }, t.prototype.readString = function (t) {
      null == t && (t = this.readUshort()), this.validate(t);

      for (var e = "", i = this._pos + t, o = 0, n = String.fromCharCode, r = this._bytes, s = this._pos; s < i;) {
        (o = r[s++]) < 128 ? 0 != o && (e += n(o)) : e += n(o < 224 ? (63 & o) << 6 | 127 & r[s++] : o < 240 ? (31 & o) << 12 | (127 & r[s++]) << 6 | 127 & r[s++] : (15 & o) << 18 | (127 & r[s++]) << 12 | r[s++] << 6 & 127 | 127 & r[s++]);
      }

      return this._pos += t, e;
    }, t.prototype.readS = function () {
      var t = this.readUshort();
      return 65534 == t ? null : 65533 == t ? "" : this.stringTable[t];
    }, t.prototype.readSArray = function (t) {
      for (var e = new Array(t), i = 0; i < t; i++) {
        e[i] = this.readS();
      }

      return e;
    }, t.prototype.writeS = function (t) {
      var e = this.readUshort();
      65534 != e && 65533 != e && (this.stringTable[e] = t);
    }, t.prototype.readColor = function (t) {
      var e = this.readUbyte(),
          i = this.readUbyte(),
          o = this.readUbyte(),
          n = this.readUbyte();
      return new cc.Color(e, i, o, t ? n : 255);
    }, t.prototype.readChar = function () {
      var t = this.readUshort();
      return String.fromCharCode(t);
    }, t.prototype.readBuffer = function () {
      var e = this.readUint();
      this.validate(e);
      var i = new t(this._bytes.buffer, this._bytes.byteOffset + this._pos, e);
      return i.stringTable = this.stringTable, i.version = this.version, this._pos += e, i;
    }, t.prototype.seek = function (t, e) {
      var i,
          o = this._pos;
      return this._pos = t, e < this.readByte() ? (1 == this.readByte() ? (this._pos += 2 * e, i = this.readUshort()) : (this._pos += 4 * e, i = this.readUint()), i > 0 ? (this._pos = t + i, !0) : (this._pos = o, !1)) : (this._pos = o, !1);
    }, t;
  }();

  t.ByteBuffer = e;
}(fgui || (fgui = {})), function (t) {
  var e = function () {
    function t(t, e, i, n) {
      this.matrix = new Array(o), this.reset(), void 0 === t && void 0 === e && void 0 === i && void 0 === n || this.adjustColor(t, e, i, n);
    }

    return t.prototype.reset = function () {
      for (var t = 0; t < o; t++) {
        this.matrix[t] = i[t];
      }
    }, t.prototype.invert = function () {
      this.multiplyMatrix([-1, 0, 0, 0, 255, 0, -1, 0, 0, 255, 0, 0, -1, 0, 255, 0, 0, 0, 1, 0]);
    }, t.prototype.adjustColor = function (t, e, i, o) {
      this.adjustHue(o || 0), this.adjustContrast(e || 0), this.adjustBrightness(t || 0), this.adjustSaturation(i || 0);
    }, t.prototype.adjustBrightness = function (t) {
      t = 255 * this.cleanValue(t, 1), this.multiplyMatrix([1, 0, 0, 0, t, 0, 1, 0, 0, t, 0, 0, 1, 0, t, 0, 0, 0, 1, 0]);
    }, t.prototype.adjustContrast = function (t) {
      var e = (t = this.cleanValue(t, 1)) + 1,
          i = 128 * (1 - e);
      this.multiplyMatrix([e, 0, 0, 0, i, 0, e, 0, 0, i, 0, 0, e, 0, i, 0, 0, 0, 1, 0]);
    }, t.prototype.adjustSaturation = function (t) {
      t = this.cleanValue(t, 1);
      var e = 1 - (t += 1),
          i = e * n,
          o = e * r,
          h = e * s;
      this.multiplyMatrix([i + t, o, h, 0, 0, i, o + t, h, 0, 0, i, o, h + t, 0, 0, 0, 0, 0, 1, 0]);
    }, t.prototype.adjustHue = function (t) {
      t = this.cleanValue(t, 1), t *= Math.PI;
      var e = Math.cos(t),
          i = Math.sin(t);
      this.multiplyMatrix([n + e * (1 - n) + i * -n, r + e * -r + i * -r, s + e * -s + i * (1 - s), 0, 0, n + e * -n + .143 * i, r + e * (1 - r) + .14 * i, s + e * -s + -.283 * i, 0, 0, n + e * -n + i * -(1 - n), r + e * -r + i * r, s + e * (1 - s) + i * s, 0, 0, 0, 0, 0, 1, 0]);
    }, t.prototype.concat = function (t) {
      t.length == o && this.multiplyMatrix(t);
    }, t.prototype.clone = function () {
      var e = new t();
      return e.copyMatrix(this.matrix), e;
    }, t.prototype.copyMatrix = function (t) {
      for (var e = o, i = 0; i < e; i++) {
        this.matrix[i] = t[i];
      }
    }, t.prototype.multiplyMatrix = function (t) {
      for (var e = [], i = 0, o = 0; o < 4; ++o) {
        for (var n = 0; n < 5; ++n) {
          e[i + n] = t[i] * this.matrix[n] + t[i + 1] * this.matrix[n + 5] + t[i + 2] * this.matrix[n + 10] + t[i + 3] * this.matrix[n + 15] + (4 == n ? t[i + 4] : 0);
        }

        i += 5;
      }

      this.copyMatrix(e);
    }, t.prototype.cleanValue = function (t, e) {
      return Math.min(e, Math.max(-e, t));
    }, t;
  }();

  t.ColorMatrix = e;
  var i = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
      o = i.length,
      n = .299,
      r = .587,
      s = .114;
}(fgui || (fgui = {})), function (t) {
  var e = function () {
    function t() {
      this._readPos = 0, this._handlers = {}, this._handlers.url = this.onTag_URL, this._handlers.img = this.onTag_IMG, this._handlers.b = this.onTag_Simple, this._handlers.i = this.onTag_Simple, this._handlers.u = this.onTag_Simple, this._handlers.color = this.onTag_COLOR, this._handlers.size = this.onTag_SIZE;
    }

    return t.prototype.onTag_URL = function (t, e, i) {
      if (e) return o = "", this.linkColor && (o += "</color>"), this.linkUnderline && (o += "</u>"), o + "</on>";
      var o = void 0;
      return o = null != i ? '<on click="onClickLink" param="' + i + '">' : '<on click="onClickLink" param="' + this.getTagText() + '">', this.linkUnderline && (o += "<u>"), this.linkColor && (o += "<color=" + this.linkColor + ">"), o;
    }, t.prototype.onTag_IMG = function (t, e) {
      if (e) return null;
      var i = this.getTagText(!0);
      return i ? '<img src="' + i + '"/>' : null;
    }, t.prototype.onTag_Simple = function (t, e) {
      return e ? "</" + t + ">" : "<" + t + ">";
    }, t.prototype.onTag_COLOR = function (t, e, i) {
      return e ? "</color>" : (this.lastColor = i, "<color=" + i + ">");
    }, t.prototype.onTag_FONT = function (t, e, i) {
      return e ? "</font>" : '<font face="' + i + '">';
    }, t.prototype.onTag_SIZE = function (t, e, i) {
      return e ? "</size>" : (this.lastSize = i, "<size=" + i + ">");
    }, t.prototype.getTagText = function (t) {
      for (var e, i = this._readPos, o = ""; -1 != (e = this._text.indexOf("[", i));) {
        if (92 != this._text.charCodeAt(e - 1)) {
          o += this._text.substring(i, e);
          break;
        }

        o += this._text.substring(i, e - 1), o += "[", i = e + 1;
      }

      return -1 == e ? null : (t && (this._readPos = e), o);
    }, t.prototype.parse = function (t, e) {
      this._text = t, this.lastColor = null, this.lastSize = null;

      for (var i, o, n, r, s, h, a, l = 0, c = ""; -1 != (i = this._text.indexOf("[", l));) {
        if (i > 0 && 92 == this._text.charCodeAt(i - 1)) c += this._text.substring(l, i - 1), c += "[", l = i + 1;else {
          if (c += this._text.substring(l, i), l = i, -1 == (i = this._text.indexOf("]", l))) break;
          n = "/" == this._text.charAt(l + 1), r = this._text.substring(n ? l + 2 : l + 1, i), this._readPos = i + 1, s = null, h = null, -1 != (o = r.indexOf("=")) && (s = r.substring(o + 1), r = r.substring(0, o)), r = r.toLowerCase(), null != (a = this._handlers[r]) ? null == (h = a.call(this, r, n, s)) || e || (c += h) : c += this._text.substring(l, this._readPos), l = this._readPos;
        }
      }

      return l < this._text.length && (c += this._text.substr(l)), this._text = null, c;
    }, t.inst = new t(), t;
  }();

  t.UBBParser = e;
}(fgui || (fgui = {})), function (t) {
  var e = function () {
    function t() {}

    return t.startsWith = function (t, e, i) {
      return !(!t || t.length < e.length || (t = t.substring(0, e.length), i ? t.toLowerCase() != e.toLowerCase() : t != e));
    }, t.encodeHTML = function (t) {
      return t ? t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;") : "";
    }, t.clamp = function (t, e, i) {
      return t < e ? t = e : t > i && (t = i), t;
    }, t.clamp01 = function (t) {
      return t > 1 ? t = 1 : t < 0 && (t = 0), t;
    }, t.lerp = function (t, e, i) {
      return t + i * (e - t);
    }, t.getTime = function () {
      return new Date().getMilliseconds() / 1e3;
    }, t.toGrayed = function (t) {
      var e = .299 * t.getR() + .587 * t.getG() + .114 * t.getB();
      return new cc.Color(e, e, e, t.getA());
    }, t.repeat = function (t, e) {
      return t - Math.floor(t / e) * e;
    }, t.distance = function (t, e, i, o) {
      return Math.sqrt(Math.pow(t - i, 2) + Math.pow(e - o, 2));
    }, t;
  }();

  t.ToolSet = e;
}(fgui || (fgui = {})); 
 			});
 		define("src/assets/libs/long.js", function(require, module, exports){ 			
"use strict";

var _typeof2 = require("../../../@babel/runtime/helpers/typeof");

(function (i, t) {
  "function" == typeof define && define.amd ? define([], t) : "function" == typeof require && "object" == (typeof module === "undefined" ? "undefined" : _typeof2(module)) && module && module.exports ? module.exports = t() : (i.dcodeIO = i.dcodeIO || {}).Long = t();
})(void 0, function () {
  "use strict";

  function i(i, t, n) {
    this.low = 0 | i, this.high = 0 | t, this.unsigned = !!n;
  }

  function t(i) {
    return !0 === (i && i.__isLong__);
  }

  window.Long = i, i.prototype.__isLong__, Object.defineProperty(i.prototype, "__isLong__", {
    value: !0,
    enumerable: !1,
    configurable: !1
  }), i.isLong = t;
  var n = {},
      e = {};

  function s(i, t) {
    var s, h, u;
    return t ? (u = 0 <= (i >>>= 0) && i < 256) && (h = e[i]) ? h : (s = r(i, (0 | i) < 0 ? -1 : 0, !0), u && (e[i] = s), s) : (u = -128 <= (i |= 0) && i < 128) && (h = n[i]) ? h : (s = r(i, i < 0 ? -1 : 0, !1), u && (n[i] = s), s);
  }

  function h(i, t) {
    if (isNaN(i) || !isFinite(i)) return t ? v : c;

    if (t) {
      if (i < 0) return v;
      if (i >= a) return b;
    } else {
      if (i <= -d) return E;
      if (i + 1 >= d) return p;
    }

    return i < 0 ? h(-i, t).neg() : r(i % f | 0, i / f | 0, t);
  }

  function r(t, n, e) {
    return new i(t, n, e);
  }

  i.fromInt = s, i.fromNumber = h, i.fromBits = r;
  var u = Math.pow;

  function o(i, t, n) {
    if (0 === i.length) throw Error("empty string");
    if ("NaN" === i || "Infinity" === i || "+Infinity" === i || "-Infinity" === i) return c;
    if ("number" == typeof t ? (n = t, t = !1) : t = !!t, (n = n || 10) < 2 || 36 < n) throw RangeError("radix");
    var e;
    if ((e = i.indexOf("-")) > 0) throw Error("interior hyphen");
    if (0 === e) return o(i.substring(1), t, n).neg();

    for (var s = h(u(n, 8)), r = c, g = 0; g < i.length; g += 8) {
      var f = Math.min(8, i.length - g),
          a = parseInt(i.substring(g, g + f), n);

      if (f < 8) {
        var d = h(u(n, f));
        r = r.mul(d).add(h(a));
      } else r = (r = r.mul(s)).add(h(a));
    }

    return r.unsigned = t, r;
  }

  function g(t) {
    return t instanceof i ? t : "number" == typeof t ? h(t) : "string" == typeof t ? o(t) : r(t.low, t.high, t.unsigned);
  }

  i.fromString = o, i.fromValue = g;
  var f = 4294967296,
      a = f * f,
      d = a / 2,
      l = s(1 << 24),
      c = s(0);
  i.ZERO = c;
  var v = s(0, !0);
  i.UZERO = v;
  var w = s(1);
  i.ONE = w;
  var m = s(1, !0);
  i.UONE = m;
  var N = s(-1);
  i.NEG_ONE = N;
  var p = r(-1, 2147483647, !1);
  i.MAX_VALUE = p;
  var b = r(-1, -1, !0);
  i.MAX_UNSIGNED_VALUE = b;
  var E = r(0, -2147483648, !1);
  i.MIN_VALUE = E;
  var q = i.prototype;
  return q.toInt = function () {
    return this.unsigned ? this.low >>> 0 : this.low;
  }, q.toNumber = function () {
    return this.unsigned ? (this.high >>> 0) * f + (this.low >>> 0) : this.high * f + (this.low >>> 0);
  }, q.toString = function (i) {
    if ((i = i || 10) < 2 || 36 < i) throw RangeError("radix");
    if (this.isZero()) return "0";

    if (this.isNegative()) {
      if (this.eq(E)) {
        var t = h(i),
            n = this.div(t),
            e = n.mul(t).sub(this);
        return n.toString(i) + e.toInt().toString(i);
      }

      return "-" + this.neg().toString(i);
    }

    for (var s = h(u(i, 6), this.unsigned), r = this, o = "";;) {
      var g = r.div(s),
          f = (r.sub(g.mul(s)).toInt() >>> 0).toString(i);
      if ((r = g).isZero()) return f + o;

      for (; f.length < 6;) {
        f = "0" + f;
      }

      o = "" + f + o;
    }
  }, q.getHighBits = function () {
    return this.high;
  }, q.getHighBitsUnsigned = function () {
    return this.high >>> 0;
  }, q.getLowBits = function () {
    return this.low;
  }, q.getLowBitsUnsigned = function () {
    return this.low >>> 0;
  }, q.getNumBitsAbs = function () {
    if (this.isNegative()) return this.eq(E) ? 64 : this.neg().getNumBitsAbs();

    for (var i = 0 != this.high ? this.high : this.low, t = 31; t > 0 && 0 == (i & 1 << t); t--) {
      ;
    }

    return 0 != this.high ? t + 33 : t + 1;
  }, q.isZero = function () {
    return 0 === this.high && 0 === this.low;
  }, q.isNegative = function () {
    return !this.unsigned && this.high < 0;
  }, q.isPositive = function () {
    return this.unsigned || this.high >= 0;
  }, q.isOdd = function () {
    return 1 == (1 & this.low);
  }, q.isEven = function () {
    return 0 == (1 & this.low);
  }, q.equals = function (i) {
    return t(i) || (i = g(i)), (this.unsigned === i.unsigned || this.high >>> 31 != 1 || i.high >>> 31 != 1) && this.high === i.high && this.low === i.low;
  }, q.eq = q.equals, q.notEquals = function (i) {
    return !this.eq(i);
  }, q.neq = q.notEquals, q.lessThan = function (i) {
    return this.comp(i) < 0;
  }, q.lt = q.lessThan, q.lessThanOrEqual = function (i) {
    return this.comp(i) <= 0;
  }, q.lte = q.lessThanOrEqual, q.greaterThan = function (i) {
    return this.comp(i) > 0;
  }, q.gt = q.greaterThan, q.greaterThanOrEqual = function (i) {
    return this.comp(i) >= 0;
  }, q.gte = q.greaterThanOrEqual, q.compare = function (i) {
    if (t(i) || (i = g(i)), this.eq(i)) return 0;
    var n = this.isNegative(),
        e = i.isNegative();
    return n && !e ? -1 : !n && e ? 1 : this.unsigned ? i.high >>> 0 > this.high >>> 0 || i.high === this.high && i.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(i).isNegative() ? -1 : 1;
  }, q.comp = q.compare, q.negate = function () {
    return !this.unsigned && this.eq(E) ? E : this.not().add(w);
  }, q.neg = q.negate, q.add = function (i) {
    t(i) || (i = g(i));
    var n = this.high >>> 16,
        e = 65535 & this.high,
        s = this.low >>> 16,
        h = 65535 & this.low,
        u = i.high >>> 16,
        o = 65535 & i.high,
        f = i.low >>> 16,
        a = 0,
        d = 0,
        l = 0,
        c = 0;
    return l += (c += h + (65535 & i.low)) >>> 16, d += (l += s + f) >>> 16, a += (d += e + o) >>> 16, a += n + u, r((l &= 65535) << 16 | (c &= 65535), (a &= 65535) << 16 | (d &= 65535), this.unsigned);
  }, q.subtract = function (i) {
    return t(i) || (i = g(i)), this.add(i.neg());
  }, q.sub = q.subtract, q.multiply = function (i) {
    if (this.isZero()) return c;
    if (t(i) || (i = g(i)), i.isZero()) return c;
    if (this.eq(E)) return i.isOdd() ? E : c;
    if (i.eq(E)) return this.isOdd() ? E : c;
    if (this.isNegative()) return i.isNegative() ? this.neg().mul(i.neg()) : this.neg().mul(i).neg();
    if (i.isNegative()) return this.mul(i.neg()).neg();
    if (this.lt(l) && i.lt(l)) return h(this.toNumber() * i.toNumber(), this.unsigned);
    var n = this.high >>> 16,
        e = 65535 & this.high,
        s = this.low >>> 16,
        u = 65535 & this.low,
        o = i.high >>> 16,
        f = 65535 & i.high,
        a = i.low >>> 16,
        d = 65535 & i.low,
        v = 0,
        w = 0,
        m = 0,
        N = 0;
    return m += (N += u * d) >>> 16, w += (m += s * d) >>> 16, m &= 65535, w += (m += u * a) >>> 16, v += (w += e * d) >>> 16, w &= 65535, v += (w += s * a) >>> 16, w &= 65535, v += (w += u * f) >>> 16, v += n * d + e * a + s * f + u * o, r((m &= 65535) << 16 | (N &= 65535), (v &= 65535) << 16 | (w &= 65535), this.unsigned);
  }, q.mul = q.multiply, q.divide = function (i) {
    if (t(i) || (i = g(i)), i.isZero()) throw Error("division by zero");
    if (this.isZero()) return this.unsigned ? v : c;
    var n, e, s;

    if (this.unsigned) {
      if (i.unsigned || (i = i.toUnsigned()), i.gt(this)) return v;
      if (i.gt(this.shru(1))) return m;
      s = v;
    } else {
      if (this.eq(E)) return i.eq(w) || i.eq(N) ? E : i.eq(E) ? w : (n = this.shr(1).div(i).shl(1)).eq(c) ? i.isNegative() ? w : N : (e = this.sub(i.mul(n)), s = n.add(e.div(i)));
      if (i.eq(E)) return this.unsigned ? v : c;
      if (this.isNegative()) return i.isNegative() ? this.neg().div(i.neg()) : this.neg().div(i).neg();
      if (i.isNegative()) return this.div(i.neg()).neg();
      s = c;
    }

    for (e = this; e.gte(i);) {
      n = Math.max(1, Math.floor(e.toNumber() / i.toNumber()));

      for (var r = Math.ceil(Math.log(n) / Math.LN2), o = r <= 48 ? 1 : u(2, r - 48), f = h(n), a = f.mul(i); a.isNegative() || a.gt(e);) {
        a = (f = h(n -= o, this.unsigned)).mul(i);
      }

      f.isZero() && (f = w), s = s.add(f), e = e.sub(a);
    }

    return s;
  }, q.div = q.divide, q.modulo = function (i) {
    return t(i) || (i = g(i)), this.sub(this.div(i).mul(i));
  }, q.mod = q.modulo, q.not = function () {
    return r(~this.low, ~this.high, this.unsigned);
  }, q.and = function (i) {
    return t(i) || (i = g(i)), r(this.low & i.low, this.high & i.high, this.unsigned);
  }, q.or = function (i) {
    return t(i) || (i = g(i)), r(this.low | i.low, this.high | i.high, this.unsigned);
  }, q.xor = function (i) {
    return t(i) || (i = g(i)), r(this.low ^ i.low, this.high ^ i.high, this.unsigned);
  }, q.shiftLeft = function (i) {
    return t(i) && (i = i.toInt()), 0 == (i &= 63) ? this : i < 32 ? r(this.low << i, this.high << i | this.low >>> 32 - i, this.unsigned) : r(0, this.low << i - 32, this.unsigned);
  }, q.shl = q.shiftLeft, q.shiftRight = function (i) {
    return t(i) && (i = i.toInt()), 0 == (i &= 63) ? this : i < 32 ? r(this.low >>> i | this.high << 32 - i, this.high >> i, this.unsigned) : r(this.high >> i - 32, this.high >= 0 ? 0 : -1, this.unsigned);
  }, q.shr = q.shiftRight, q.shiftRightUnsigned = function (i) {
    if (t(i) && (i = i.toInt()), 0 == (i &= 63)) return this;
    var n = this.high;
    return i < 32 ? r(this.low >>> i | n << 32 - i, n >>> i, this.unsigned) : r(32 === i ? n : n >>> i - 32, 0, this.unsigned);
  }, q.shru = q.shiftRightUnsigned, q.toSigned = function () {
    return this.unsigned ? r(this.low, this.high, !1) : this;
  }, q.toUnsigned = function () {
    return this.unsigned ? this : r(this.low, this.high, !0);
  }, q.toBytes = function (i) {
    return i ? this.toBytesLE() : this.toBytesBE();
  }, q.toBytesLE = function () {
    var i = this.high,
        t = this.low;
    return [255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24 & 255, 255 & i, i >>> 8 & 255, i >>> 16 & 255, i >>> 24 & 255];
  }, q.toBytesBE = function () {
    var i = this.high,
        t = this.low;
    return [i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t];
  }, i;
}); 
 			});
 		define("src/scripts/resources/index.js", function(require, module, exports){ 			
"use strict";

(function r(e, n, t) {
  function i(u, f) {
    if (!n[u]) {
      if (!e[u]) {
        var _ = u.split("/");

        if (_ = _[_.length - 1], !e[_]) {
          var p = "function" == typeof __require && __require;
          if (!f && p) return p(_, !0);
          if (o) return o(_, !0);
          throw new Error("Cannot find module '" + u + "'");
        }

        u = _;
      }

      var a = n[u] = {
        exports: {}
      };
      e[u][0].call(a.exports, function (r) {
        return i(e[u][1][r] || r);
      }, a, a.exports, r, e, n, t);
    }

    return n[u].exports;
  }

  for (var o = "function" == typeof __require && __require, u = 0; u < t.length; u++) {
    i(t[u]);
  }

  return i;
})({}, {}, []); //# sourceMappingURL=index.js.map 
 			});
 		define("src/settings.js", function(require, module, exports){ 			
"use strict";

window._CCSettings = {
  platform: "wechatgame",
  groupList: ["default"],
  collisionMatrix: [[true]],
  hasResourcesBundle: true,
  hasStartSceneBundle: false,
  remoteBundles: ["resources"],
  subpackages: ["audioBundle", "scripts"],
  launchScene: "db://assets/scenes/Start.fire",
  orientation: "landscape",
  server: "https://wxstatic.gameabc2.com/100002/prod",
  jsList: ["assets/libs/ArrayExtension.js", "assets/libs/CocosCreatorExtension.js", "assets/libs/DateExtension.js", "assets/libs/Decorators.js", "assets/libs/FunctionExtension.js", "assets/libs/JSONExtension.js", "assets/libs/MathExtension.js", "assets/libs/NumberExtension.js", "assets/libs/ObjectExtension.js", "assets/libs/StringExtension.js", "assets/libs/bf33.js", "assets/libs/encoding-indexes.js", "assets/libs/fairygui.js", "assets/libs/long.js"],
  bundleVers: {
    internal: "e6604",
    audioBundle: "d526f",
    resources: "825f4",
    scripts: "79624",
    main: "2d7f7"
  }
}; 
 			});
 		var global = (function () { return this })();	if (!global && typeof GameGlobal !== 'undefined') global = GameGlobal;	var pluginInfoMap = {};	;	global.requirePlugin = global.requirePlugin || function(path) {		    var position = path.indexOf('/');    		var alias = '';    		var pagePath = '';    		if (position !== -1) {    		    alias = path.substr(0, position);    		    pagePath = path.substr(position + 1, path.length);    		}    		else {    		    alias = path;    		}    		if (pluginInfoMap.hasOwnProperty(alias)) {    		    var realPath = '';    		    if (pagePath.length === 0) {    		        realPath =  '__plugin__/' + pluginInfoMap[alias].appid;    		        return require(realPath);    		    } else {    		        realPath = '__plugin__/' + pluginInfoMap[alias].appid + '/' + pagePath;    		        return require(realPath);    		    }    		}    		else {    		    console.error('not found alias: ', alias);    		    throw new Error('Plugin ' + alias + ' is not defined.')    		}	};	define("game.js", function(require, module, exports){ 			
"use strict";

require('prerender.js');

require('adapter-min.js');

__globalAdapter.init();

requirePlugin('cocos');

__globalAdapter.adaptEngine();

require('./ccRequire');

require('./src/settings'); // Introduce Cocos Service here


require('./main'); // TODO: move to common
// Adjust devicePixelRatio


cc.view._maxPixelRatio = 4;

if (cc.sys.platform !== cc.sys.WECHAT_GAME_SUB) {
  // Release Image objects after uploaded gl texture
  cc.macro.CLEANUP_IMAGE_CACHE = true;
}

window.boot(); 
 			}); 	require("game.js");
 	