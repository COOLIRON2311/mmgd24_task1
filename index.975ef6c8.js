// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4rkIz":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _collisions = require("./base/collisions");
var _collisionsDefault = parcelHelpers.interopDefault(_collisions);
var _circle = require("./shapes/circle");
var _circleDefault = parcelHelpers.interopDefault(_circle);
var _polygon = require("./shapes/polygon");
var _polygonDefault = parcelHelpers.interopDefault(_polygon);
const canvas = document.getElementById("canvas");
const gameState = {
    objects: []
};
//#region Shapes generation
const r = 20;
const speedX = 2;
const speedY = 2;
// Circles
for(let i = 0; i < 10; i++){
    const x = randInRange(0 + r / 2, window.innerWidth - r / 2);
    const y = randInRange(0 + r / 2, window.innerHeight - r / 2);
    const a = randInRange(1, 360);
    const vx = Math.cos(a) * speedX;
    const vy = Math.sin(a) * speedY;
    gameState.objects.push(new (0, _circleDefault.default)(x, y, r, vx, vy));
}
// Triangles
for(let i = 0; i < 10; i++){
    const x = randInRange(0 + r / 2, window.innerWidth - r / 2);
    const y = randInRange(0 + r / 2, window.innerHeight - r / 2);
    const a = randInRange(0, 360);
    const vx = Math.cos(a) * speedX;
    const vy = Math.sin(a) * speedY;
    gameState.objects.push(new (0, _polygonDefault.default)(x, y, 3, r, vx, vy));
}
// Hexagons
for(let i = 0; i < 10; i++){
    const x = randInRange(0 + r / 2, window.innerWidth - r / 2);
    const y = randInRange(0 + r / 2, window.innerHeight - r / 2);
    const a = randInRange(1, 360);
    const vx = Math.cos(a) * speedX;
    const vy = Math.sin(a) * speedY;
    gameState.objects.push(new (0, _polygonDefault.default)(x, y, 6, r, vx, vy));
}
//#endregion Shapes generation
/**
 * @param {number} numTicks
 */ function queueUpdates(numTicks) {
    for(let i = 0; i < numTicks; i++){
        gameState.lastTick = gameState.lastTick + gameState.tickLength;
        update(gameState.lastTick);
    }
}
/**
 * @param {DOMHighResTimeStamp} tFrame
 */ function draw(tFrame) {
    /** @type {CanvasRenderingContext2D} */ const context = canvas.getContext("2d");
    // clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    // draw
    gameState.objects.forEach((o)=>{
        if (o.active) o.draw(context);
    });
}
/**
 * @param {number} tick
 */ function update(tick) {
    // Naïve Collision Detection
    // TODO: Implement it using Quad-trees
    for(let i = 0; i < gameState.objects.length; i++){
        const o1 = gameState.objects[i];
        if (!o1.active) continue;
        for(let j = i + 1; j < gameState.objects.length; j++){
            const o2 = gameState.objects[j];
            if (!o2.active) continue;
            if (!(0, _collisionsDefault.default).AABBOverlap(o1, o2)) continue;
            if ((0, _collisionsDefault.default).PreciseOverlap(o1, o2)) {
                o1.vx = -o1.vx;
                o1.vy = -o1.vy;
                o1.handleCollision();
                o2.vx = -o2.vx;
                o2.vy = -o2.vy;
                o2.handleCollision();
            }
        }
        // Window border check
        if (0 > o1.AABB.left || window.innerWidth < o1.AABB.right) {
            o1.vx = -o1.vx;
            o1.handleCollision(true);
        }
        if (0 > o1.AABB.top || window.innerHeight < o1.AABB.bottom) {
            o1.vy = -o1.vy;
            o1.handleCollision(true);
        }
    }
    // Update objects position
    gameState.objects.forEach((o)=>{
        if (o.active) o.move();
    });
}
/**
 * @param {DOMHighResTimeStamp} tFrame
 */ function run(tFrame) {
    gameState.stopCycle = window.requestAnimationFrame(run);
    const nextTick = gameState.lastTick + gameState.tickLength;
    let numTicks = 0;
    if (tFrame > nextTick) {
        const timeSinceTick = tFrame - gameState.lastTick;
        numTicks = Math.floor(timeSinceTick / gameState.tickLength);
    }
    queueUpdates(numTicks);
    draw(tFrame);
    gameState.lastRender = tFrame;
}
function stopGame(handle) {
    window.cancelAnimationFrame(handle);
}
function setup() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gameState.lastTick = performance.now();
    gameState.lastRender = gameState.lastTick;
    gameState.tickLength = 15; // ms
}
/**
 * Returns a random number between min (inclusive) and max (exclusive)
 * @param {number} min
 * @param {number} max
 * @returns
 */ function randInRange(min, max) {
    return Math.random() * (max - min) + min;
}
setup();
run();

},{"./shapes/circle":"kwKGx","./shapes/polygon":"Q6exW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./base/collisions":"75bWl"}],"kwKGx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rectangle = require("../base/rectangle");
var _rectangleDefault = parcelHelpers.interopDefault(_rectangle);
var _shape = require("../base/shape");
var _shapeDefault = parcelHelpers.interopDefault(_shape);
class Circle extends (0, _shapeDefault.default) {
    /** @type {number} Radius */ r;
    /**
     * @param {number} x X circle center coordinate
     * @param {number} y Y circle center coordinate
     * @param {number} r Radius
     * @param {number} vx X velocity
     * @param {number} vy Y velocity
     * @param {null} [color=null] Color
     */ constructor(x, y, r, vx, vy, color = null){
        super(x, y, vx, vy, color);
        this.r = r;
        // Calculate AABB
        this.AABB = new (0, _rectangleDefault.default)(this.x - this.r, this.y - this.r, 2 * this.r, 2 * this.r);
    }
    /**
     * Draw `this` circle using provided `context`
     * @param {CanvasRenderingContext2D} context
     */ draw(context) {
        const style = context.fillStyle;
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        context.fill();
        context.stroke();
        context.fillStyle = style;
    // Draw AABB (uncomment for debugging)
    // this.AABB.draw(context);
    }
    /**
     * Moves `this` circle by (`vx`, `vy`)
     */ move() {
        this.x += this.vx;
        this.y += this.vy;
        this.AABB.x += this.vx;
        this.AABB.y += this.vy;
    }
}
exports.default = Circle;

},{"../base/rectangle":"dExJr","../base/shape":"4w0jc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dExJr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _point = require("./point");
var _pointDefault = parcelHelpers.interopDefault(_point);
class Rectangle {
    /** @type {number} Top left corner X   */ x;
    /** @type {number} Top left corner Y   */ y;
    /** @type {number} Width (right down)  */ w;
    /** @type {number} Height (right down) */ h;
    /**
     * @param {number} x Top left corner X
     * @param {number} y Top left corner Y
     * @param {number} w Width
     * @param {number} h Height
     */ constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    get left() {
        return this.x;
    }
    get right() {
        return this.x + this.w;
    }
    get top() {
        return this.y;
    }
    get bottom() {
        return this.y + this.h;
    }
    get center() {
        return {
            x: this.x + this.w / 2,
            y: this.y + this.h / 2
        };
    }
    /**
     * @param {Point} point
     * @returns {boolean}
     */ contains(point) {
        return point.x >= this.x && point.x < this.x + this.w && point.y >= this.y && point.y < this.y + this.h;
    }
    /**
     * @param {Rectangle} rect
     * @returns {boolean}
     */ intersects(rect) {
        return this.x < rect.x + rect.w && rect.x < this.x + this.w && this.y < rect.y + rect.h && rect.y < this.y + this.w;
    }
    /**
     * Draw `this` rectangle using provided `context`
     * @param {CanvasRenderingContext2D} context
     */ draw(context) {
        const style = context.fillStyle;
        context.strokeStyle = "#ff0000";
        context.beginPath();
        context.rect(this.x, this.y, this.w, this.h);
        context.stroke();
        context.strokeStyle = style;
    }
}
exports.default = Rectangle;

},{"./point":"2Vt3e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Vt3e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Point {
    /** @type {number} */ x;
    /** @type {number} */ y;
}
exports.default = Point;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"4w0jc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Shape {
    /** @type {number} Object hit points          */ lives;
    /** @type {string} Object color               */ color;
    /** @type {number} X center coordinate        */ x;
    /** @type {number} Y center coordinate        */ y;
    /** @type {number} X velocity                 */ vx;
    /** @type {number} Y velocity                 */ vy;
    /** @type {number} Active                     */ active;
    /** @type {Polygon} Axis-Aligned Bounding Box */ AABB;
    /**
     *
     * @param {number} x X center coordinate
     * @param {number} y Y center coordinate
     * @param {number} vx X velocity
     * @param {number} vy Y velocity
     * @param {null} [color=null] Color
     */ constructor(x, y, vx, vy, color = null){
        this.color = color || Shape.randomHexColor();
        this.active = true;
        this.lives = 3;
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
    }
    /** @returns {Point} */ get center() {
        return {
            x: this.x,
            y: this.y
        };
    }
    /**
     * Draw `this` object using provided `context`
     * @param {CanvasRenderingContext2D} context
     */ draw(context) {}
    /**
     * Moves `this` object by (`vx`, `vy`)
     */ move() {}
    /**
     * Handle collision with other object
     * @param {boolean} [screen_border=false] whether did collision happen with screen border
     */ handleCollision(screen_border = false) {
        if (screen_border) return;
        this.lives--;
        if (this.lives === 0) {
            this.active = false;
            return;
        }
        this.color = Shape.randomHexColor();
    }
    static randomHexColor() {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
    /**
     * Convert number of `degrees` to `radians`
     * @param {number} degrees to convert
     */ static radians(degrees) {
        return degrees * Math.PI / 180.0;
    }
}
exports.default = Shape;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Q6exW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _point = require("../base/point");
var _pointDefault = parcelHelpers.interopDefault(_point);
var _rectangle = require("../base/rectangle");
var _rectangleDefault = parcelHelpers.interopDefault(_rectangle);
var _shape = require("../base/shape");
var _shapeDefault = parcelHelpers.interopDefault(_shape);
class Polygon extends (0, _shapeDefault.default) {
    /** @type {number} Circumscribed circle radius */ r;
    /** @type {number} Number of vertices          */ n;
    /** @type {Point[]} Polygon vertices           */ vertices;
    /**
     * @param {number} x Polygon circle center coordinate
     * @param {number} y Circumscribed circle radius
     * @param {number} n Number of vertices
     * @param {number} r Circumscribed circle radius
     * @param {number} vx X velocity
     * @param {number} vy Y velocity
     * @param {null} [color=null] Color
     */ constructor(x, y, n, r, vx, vy, color = null){
        super(x, y, vx, vy, color);
        this.n = n;
        this.r = r;
        // Calculate vertices
        const center_angle = 360 / this.n;
        const step = (0, _shapeDefault.default).radians(center_angle);
        let angle;
        if (n % 2 === 0) angle = (0, _shapeDefault.default).radians(-90 - center_angle / 2);
        else angle = (0, _shapeDefault.default).radians(-90);
        this.vertices = [];
        for(let i = 0; i < this.n; i++){
            this.vertices.push({
                x: this.x + this.r * Math.cos(angle),
                y: this.y + this.r * Math.sin(angle)
            });
            angle += step;
        }
        // Calculate AABB
        const min_x = this.vertices.reduce((a, b)=>a.x < b.x ? a : b).x;
        const max_x = this.vertices.reduce((a, b)=>a.x > b.x ? a : b).x;
        const min_y = this.vertices.reduce((a, b)=>a.y < b.y ? a : b).y;
        const max_y = this.vertices.reduce((a, b)=>a.y > b.y ? a : b).y;
        this.AABB = new (0, _rectangleDefault.default)(min_x, min_y, max_x - min_x, max_y - min_y);
    }
    /**
     * Draw `this` polygon using provided `context`
     * @param {CanvasRenderingContext2D} context
     */ draw(context) {
        const style = context.fillStyle;
        context.fillStyle = this.color;
        context.beginPath();
        context.moveTo(this.vertices[0].x, this.vertices[0].y);
        for(let i = 1; i < this.n; i++)context.lineTo(this.vertices[i].x, this.vertices[i].y);
        context.lineTo(this.vertices[0].x, this.vertices[0].y);
        context.fill();
        context.stroke();
        context.fillStyle = style;
    // Draw AABB (uncomment for debugging)
    // this.AABB.draw(context);
    }
    /**
     * Moves `this` polygon by (`vx`, `vy`)
     */ move() {
        this.vertices.forEach((p, _)=>{
            p.x += this.vx;
            p.y += this.vy;
        });
        this.AABB.x += this.vx;
        this.AABB.y += this.vy;
    }
}
exports.default = Polygon;

},{"../base/rectangle":"dExJr","../base/shape":"4w0jc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../base/point":"2Vt3e"}],"75bWl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _circle = require("../shapes/circle");
var _circleDefault = parcelHelpers.interopDefault(_circle);
var _polygon = require("../shapes/polygon");
var _polygonDefault = parcelHelpers.interopDefault(_polygon);
var _point = require("./point");
var _pointDefault = parcelHelpers.interopDefault(_point);
var _shape = require("./shape");
var _shapeDefault = parcelHelpers.interopDefault(_shape);
class Collisions {
    /**
     * Check if AABB of `a` overlaps with AABB of `b`
     * @param {Shape} a
     * @param {Shape} b
     */ static AABBOverlap(a, b) {
        return a.AABB.intersects(b.AABB);
    }
    /**
     * Precise collision detection for different objects
     * @param {Shape} a
     * @param {Shape} b
     */ static PreciseOverlap(a, b) {
        if (a instanceof (0, _circleDefault.default)) {
            if (b instanceof (0, _circleDefault.default)) return Collisions.#circleCircle(a, b);
            else if (b instanceof (0, _polygonDefault.default)) return Collisions.#polygonCircle(b, a);
            else throw new Error("invalid object type");
        } else if (a instanceof (0, _polygonDefault.default)) {
            if (b instanceof (0, _circleDefault.default)) return Collisions.#polygonCircle(a, b);
            else if (b instanceof (0, _polygonDefault.default)) return Collisions.#polygonPolygon(a, b);
            else throw new Error("invalid object type");
        } else throw new Error("invalid object type");
    }
    /**
     * Calculate euclidean distance between points or objects `a` and `b`
     * @param {Point | Shape} a
     * @param {Point | Shape} b
     * @returns
     */ static dist(a, b) {
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
    /**
     * Check if circle `c1` overlaps with circle `c2`
     * @param {Circle} c1
     * @param {Circle} c2
     */ static #circleCircle(c1, c2) {
        const dist = this.dist(c1, c2);
        if (dist <= c1.r + c2.r) return true;
        return false;
    }
    /**
     * Check if point `p` is inside circle `c`
     * @param {Point} p
     * @param {Circle} c
     */ static #pointCircle(p, c) {
        const dist = this.dist(c, p);
        if (dist <= c.r) return true;
        return false;
    }
    /**
     * Check if point `p` is on line defined by points `p1` and `p2`
     * @param {Point} p
     * @param {Point} p1
     * @param {Point} p2
     */ static #pointLine(p, p1, p2) {
        const d1 = this.dist(p, p1);
        const d2 = this.dist(p, p2);
        const len = this.dist(p1, p2);
        const buf = 0.1; // a little buffer zone that will give collision
        // if the sum of two distances is equal to the line's length,
        // then the point is on the line (buf is used for range here)
        if (len - buf <= d1 + d2 && d1 + d2 <= len + buf) return true;
        return false;
    }
    /**
     * Check if line defined by points `p1` and `p2` overlaps with circle `c`
     * @param {Point} p1
     * @param {Point} p2
     * @param {Circle} c
     */ static #lineCircle(p1, p2, c) {
        const inside1 = this.#pointCircle(p1, c);
        const inside2 = this.#pointCircle(p2, c);
        if (inside1 || inside2) return true;
        const len = this.dist(p2, p1);
        const dot = ((c.x - p1.x) * (p2.x - p1.x) + (c.y - p1.y) * (p2.y - p1.y)) / (len * len);
        const closest = {
            x: p1.x + dot * (p2.x - p1.x),
            y: p1.y + dot * (p2.y - p1.y)
        };
        // if point is on line we can keep going, else return false
        if (!this.#pointLine(closest, p1, p2)) return false;
        const dist = this.dist(closest, c);
        if (dist <= c.r) return true;
        return false;
    }
    /**
     * Check if line defined by points `p1` and `p2` overlaps with the line defined by points `p3` and `p4`
     * @param {Point} p1 point of `first` line
     * @param {Point} p2 point of `first` line
     * @param {Point} p3 point of `second` line
     * @param {Point} p4 point of `second` line
     */ static #lineLine(p1, p2, p3, p4) {
        // directions of lines
        const uA = ((p4.x - p3.x) * (p1.y - p3.y) - (p4.y - p3.y) * (p1.x - p3.x)) / ((p4.y - p3.y) * (p2.x - p1.x) - (p4.x - p3.x) * (p2.y - p1.y));
        const uB = ((p2.x - p1.x) * (p1.y - p3.y) - (p2.y - p1.y) * (p1.x - p3.x)) / ((p4.y - p3.y) * (p2.x - p1.x) - (p4.x - p3.x) * (p2.y - p1.y));
        if (0 <= uA && uA <= 1 && 0 <= uB && uB <= 1) return true;
        return false;
    }
    /**
     * Check if polygon `p` overlaps with circle `c`
     * @param {Polygon} p
     * @param {Circle} c
     */ static #polygonCircle(p, c) {
        const vx = p.vertices;
        if (this.#polygonPoint(p, c)) return true;
        let next = 0;
        for(let current = 0; current < vx.length; current++){
            next = current + 1;
            if (next === vx.length) next = 0;
            const vc = vx[current]; // current vertex
            const vn = vx[next]; // next vertex
            if (this.#lineCircle(vc, vn, c)) return true;
        }
        return false;
    }
    /**
     * Check if point `p` is inside polygon `poly`
     * @param {Polygon} poly polygon
     * @param {Point | Shape} p point or shape center
     */ static #polygonPoint(poly, p) {
        const vx = poly.vertices;
        let collision = false;
        let next = 0;
        for(let current = 0; current < vx.length; current++){
            next = current + 1;
            if (next === vx.length) next = 0;
            const vc = vx[current]; // current vertex
            const vn = vx[next]; // next vertex
            if ((vc.y >= p.y && vn.y < p.y || vc.y < p.y && vn.y >= p.y) && p.x < (vn.x - vc.x) * (p.y - vc.y) / (vn.y - vc.y) + vc.x) collision = !collision;
        }
        return collision;
    }
    /**
     * Check if line defined by `p1` and `p2` overlaps with polygon `p`
     * @param {Polygon} p
     * @param {Point} p1
     * @param {Point} p2
     */ static #polygonLine(p, p1, p2) {
        const vx = p.vertices;
        let next = 0;
        for(let current = 0; current < vx.length; current++){
            next = current + 1;
            if (next === vx.length) next = 0;
            const p3 = vx[current]; // current vertex
            const p4 = vx[next]; // next vertex
            if (this.#lineLine(p1, p2, p3, p4)) return true;
        }
        return false;
    }
    /**
     * Check if polygon `p1` overlaps with polygon `p2`
     * @param {Polygon} p1
     * @param {Polygon} p2
     */ static #polygonPolygon(p1, p2) {
        if (this.#polygonPoint(p2, p1)) return true;
        if (this.#polygonPoint(p1, p2)) return true;
        const vx = p1.vertices;
        let next = 0;
        for(let current = 0; current < vx.length; current++){
            next = current + 1;
            if (next === vx.length) next = 0;
            const vc = vx[current]; // current vertex
            const vn = vx[next]; // next vertex
            if (this.#polygonLine(p2, vc, vn)) return true;
        }
        return false;
    }
}
exports.default = Collisions;

},{"../shapes/circle":"kwKGx","../shapes/polygon":"Q6exW","./point":"2Vt3e","./shape":"4w0jc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["4rkIz","8lqZg"], "8lqZg", "parcelRequire20db")

//# sourceMappingURL=index.975ef6c8.js.map
