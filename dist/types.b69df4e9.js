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
})({"types.js":[function(require,module,exports) {
//task_1

/*let age = parseInt(prompt('Age?', 18));
    console.log(age, 8);
    let message = (age < 12) ? 'You are a child' :
    ((age > 12) && (age < 18)) ? 'You are teenager!' :
    ((age > 18) && (age < 60)) ? 'You are adults' :
    'You are pensioner';
    alert( message );*/
//task_2

/*let arg = prompt("Enter a number from 0 to 9?");
switch (arg) {
  case "0":
    alert("0 = )");
    break;
  case "1":
    alert("1 = !");
    break;
  case "2":
    alert("2 = @");
    break;
  case "3":
    alert("3 = #");
    break;
  case "4":
    alert("4 = $");
    break;
  case "5":
    alert("5 = %");
    break;
  case "6":
    alert("6 = ^");
    break;
  case "7":
    alert("7 = &");
    break;
  case "8":
    alert("8 = *");
    break;
  case "9":
    alert("9 = (");
    break;
  default:
    alert("number > 9");
}*/
//task_3

/*let number = prompt("Enter the number from 100 to 999", 0);
number = number + "";
if (
  number[0] == number[1] || number[0] == number[2] || number[1] == number[2]
) 
{
  alert("TRUE");
} 
else alert("FALSE");
*/
//task_4

/*let year = prompt("Enter year");
if (year % 4 == 0 || year % 400 == 0 && year % 100 !== 0) {
  alert("Leap year");
} 
else alert("Not Leap Year");*/
//task_5

/*
function Palindrome()
	{
		var rem, temp, final = 0;
		let number = prompt("Enter number");
		temp = number;
		while(number>0)
		{
			rem = number%10;
			number = parseInt(number/10);
			final = final*10+rem;
		}
		if(final==temp)
		{
			alert("The inputed number is Palindrome");
		}
		else
		{
			alert("The inputted number is not palindrome");
		}
    }
    Palindrome();*/
//task_6

/*let sum = prompt('Enter the sum in USD:');
    let currency = prompt('EUR = 1, UAH = 2, AZN = 3');
    switch(currency) {
        case '1':
            alert('If you exchange' + ' ' + sum + ' dollar you get' + ' ' + sum*0.85 + ' ' +'EUR');
            break;
        case '2':
            alert('If you exchange' + ' ' + sum + ' dollar you get' + ' ' + sum*28.35 + ' ' + 'UAH');
            break;
        case '3':
            alert('If you exchange' + ' ' + sum + ' dollar you get' + ' ' + sum*1.7 + ' ' + 'AZN');
            break;
    }*/
//task_7

/*let sum = parseInt(prompt('Enter the sum'));
    let discount = ((sum >= 200) && (sum <= 300)) ? ('Your discounted price' + ' ' + (sum - sum*0.03)) :
    ((sum > 300) && (sum <= 500)) ? ('Your discounted price' + ' ' + (sum - sum*0.05)) :
    (sum > 500) ? ('Your discounted price' + ' ' + (sum - sum*0.07)) :
    'You don"t have discount';
    alert( discount );*/
//task_8

/*let diameter = parseInt(prompt('Enter diameter of the circle')),
        perimeter = parseInt(prompt('Enter perimeter of the square')),
        r = diameter/2,//circle radius
        a = perimeter/4,//side of squre
        rc = a/2;//the radius of the inscribed circle
    let message = (rc >= r) ? ('the circle can be inscribed in a square') : 'the circle can not be inscribed in a square';
    alert( message );*/
//task_9

/*let 
    mountain = prompt(
    "What is the highest mountain? 1 - Everest 2 - Kanchenjunga 3 - Goverla"
    ),
    lake = prompt(
    "Which is the deepest lake in the world? 1 - Baikal 2 - Tanganyika 3 - San Martín"
    ),
    country = prompt(
    "What is the smallest country in the world? 1 - Tavulu 2 - Monaco 3 - Vatican"
    ),
    mark = 0;
if (mountain == 1) {mark += 2};
if (lake == 1) mark += 2;
if (country == 3) mark += 2;
alert("Your bal is " + mark);*/
//task_10

/*let date = new Date(prompt('Enter Date (yyyy-mm-dd)'));
date.setDate(date.getDate() + 1);
console.log( date )*/
},{}],"C:/Users/Home/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50717" + '/');

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
},{}]},{},["C:/Users/Home/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","types.js"], null)
//# sourceMappingURL=/types.b69df4e9.js.map