// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n.skin * {\n    box-sizing:border-box;\n    margin: 0;\n    padding: 0;\n}\n.skin *::before,*::after{\n    box-sizing:border-box;\n}\n.skin {\n    background: #ffe600;\n    min-height: 55vh;\n    position: relative;\n}\n@media(max-width:500px){\n    .skin {\n        min-height: 60vh;\n    }\n}\n.node {\n    /* position: absolute; */\n    position: relative;\n    width: 0px;\n    height: 0px;\n    border: 20px solid black;\n    border-top-color: black;\n    border-bottom-color: transparent;\n    border-right-color: transparent;\n    border-left-color: transparent;\n    left: 50%;\n    top: 150px;\n    margin-left: -20px;  \n}\n@keyframes wave {\n    0%{\n        transform: rotate(0deg);\n    }\n    33%{\n        transform: rotate(5deg);\n    }\n    66%{\n        transform: rotate(-5deg);\n    }\n    100%{\n        transform: rotate(0deg);\n    }\n}\n.node:hover {\n    /* \u5DE6\u53F3\u65B9\u5411\u4EE5\u6B63\u4E2D\u5FC3\u4E3A\u51C6   \u4E0A\u4E0B\u65B9\u5411\u4EE5\u6700\u4E0B\u9762\u4E3A\u51C6 */\n    transform-origin: 50% 100%;\n    transform-origin: center bottom;\n    animation: wave 300ms infinite linear;\n}\n.yuanhu {\n    position: absolute;\n    width: 40px;\n    height: 10px;\n    border: 1px solid black;\n    top: -30px;\n    left: -20px;\n    border-radius: 10px 10px 0 0;\n    background: black;\n}\n.eye {\n    position: absolute;\n    border: 1px soid red;\n    width: 64px;\n    height: 64px;\n    left: 50%;\n    top: 95px;\n    background: #2e2e2e;\n    margin-left: -32px;\n    border-radius: 50%;\n}\n@media(max-width:500px){\n    .eye {\n        width: 55px;\n        height: 55px;\n    }\n}\n.eye::before{\n    content: '';\n    display: block;\n    width: 32px;\n    height: 32px;\n    border: 3px solid #000;\n    background: #fff;\n    border-radius: 50%;\n    position: relative;\n    left: 8px;\n    top: 4px;\n}\n@media(max-width:500px){\n    .eye::before {\n        width: 27.5px;\n        height: 27.5px;\n    }\n}\n.eye.left {\n    transform: translateX(-130px);\n}\n@media(max-width:500px){\n    .eye.left {\n        transform: translateX(-100px);\n    }\n}\n.eye.right {\n    transform: translateX(130px);\n}\n@media(max-width:500px){\n    .eye.right {\n        transform: translateX(100px);\n    }\n}\n.mouth {\n    position: absolute;\n    /* border: 1px solid red; */\n    width: 200px;\n    height: 200px;\n    left: 50%;\n    top: 180px;\n    margin-left: -100px;\n}\n@media(max-width:500px){\n    .mouth {\n        /* border: 1px solid green; */\n        width: 100px;\n        height: 100px;\n    }\n}\n.mouth .up {\n    position: relative;\n    z-index: 100;\n    top: 20px;\n}\n.mouth .up .lip {\n    border: 4px solid black;\n    width: 150px;\n    height: 35px;\n    border-top: transparent;\n    background: #ffe600;\n}\n@media(max-width:500px){\n    .mouth .up .lip {\n        width: 100px;\n        height: 21.5px;\n    }\n}\n.mouth .up .lip.left {\n    border-radius: 0 0 0 30px;\n    border-right: transparent;\n    transform: rotate(-26deg);\n    position: absolute;\n    left: 50%;\n    margin-left: -150px;\n}\n@media(max-width:500px){\n    .mouth .up .lip.left {\n        margin-left: -45px;\n    }\n}\n.mouth .up .lip.right {\n    border-radius: 0 0 30px 0;\n    border-left: transparent;\n    transform: rotate(26deg);\n    position: absolute;\n    left: 50%;\n    margin-left: -6px;\n}\n@media(max-width:500px){\n    .mouth .up .lip.right {\n        margin-left: 50px;\n    }\n}\n.mouth .down {\n    /* border: 1px solid red; */\n    width: 250px;\n    height: 180px;\n    position: relative;\n    left: -30px;\n    top: 20px;\n    overflow: hidden;\n}\n@media(max-width:500px){\n    .mouth .down {\n        width: 150px;\n        height: 160px;\n        position: relative;\n        left: 25px;\n        top: 28px;  \n    }\n}\n.mouth .down .yuan1 {\n    border: 3px solid black;\n    width: 150px;\n    height: 800px;\n    position: absolute;\n    bottom:0;\n    left: 50%;\n    /* top: 10px; */\n    margin-left: -73px;\n    border-radius: 75px/300px;\n    background: #9b000a;\n    overflow: hidden;\n}\n.mouth .down .yuan1 .yuan2 {\n    /* border: 1px solid green; */\n    background: #ff485f;\n    width: 200px;\n    height: 300px;\n    position: absolute;\n    bottom: -160px;\n    left: 50%;\n    margin-left: -100px;\n    border-radius: 100px;\n}\n.face {\n    position: absolute;\n    border: 3px solid black;\n    width: 88px;\n    height: 88px;\n    top: 250px;\n    left:50%;\n    margin-left: -44px;\n    z-index: 3;\n    background: #ff0000;\n    border-radius: 50%;\n}\n@media(max-width:500px){\n    .face {\n        width: 66px;\n        height: 66px;\n    }\n}\n.face.left {\n    transform: translateX(-200px);\n}\n@media(max-width:500px){\n    .face.left {\n        transform: translateX(-120px);\n    }\n}\n.face.right {\n    transform: translateX(200px);\n}\n@media(max-width:500px){\n    .face.right {\n        transform: translateX(140px);\n    }\n}\n.face > img {\n    border:1px solid red;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n}\n.face.left > img {\n    transform: rotateY(180deg);\n    transform-origin: 0 0;\n}";
var _default = string;
exports.default = _default;
},{}],"test.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 这就是一个播放器   面向对象的逻辑
var player = {
  // 计时器  id就是⏰号码
  id: undefined,
  time: 0,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  //事件
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  n: 1,
  init: function init() {
    //demo写文本  demo2写CSS
    player.ui.demo.innerText = _css.default.substring(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substring(0, player.n);
    player.bindEvents();
    player.play();
  },
  //绑定事件
  bindEvents: function bindEvents() {
    // const hashTable = {
    //     // 砸掉闹钟
    //     '#btnPause': player.pause,
    //     // 再买一个闹钟
    //     '#btnPlay': player.play,
    //     '#btnSlow': player.slow,
    //     '#btnNormal': player.normal,
    //     '#btnFast': player.fast
    // }
    // player.events.toString()
    // player.events.valueOf()
    for (var key in player.events) {
      // 检查是不是自身属性
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key]; //pause play slow normal fast

        document.querySelector(key).onclick = player[value];
        document.querySelector(key).touchstart = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    }

    console.log(player.n + ':' + _css.default.substring(0, player.n));
    player.ui.demo.innerText = _css.default.substring(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substring(0, player.n); // demo.scrollTop = 999999

    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css.js":"css.js"}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61550" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.js.map