function gd(e, t) {
  for (var n = 0; n < t.length; n++) {
      const r = t[n];
      if (typeof r != "string" && !Array.isArray(r)) {
          for (const o in r)
              if (o !== "default" && !(o in e)) {
                  const i = Object.getOwnPropertyDescriptor(r, o);
                  i && Object.defineProperty(e, o, i.get ? i : {
                      enumerable: !0,
                      get: ()=>r[o]
                  })
              }
      }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
  }))
}
(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload"))
      return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
      r(o);
  new MutationObserver(o=>{
      for (const i of o)
          if (i.type === "childList")
              for (const l of i.addedNodes)
                  l.tagName === "LINK" && l.rel === "modulepreload" && r(l)
  }
  ).observe(document, {
      childList: !0,
      subtree: !0
  });
  function n(o) {
      const i = {};
      return o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
      i
  }
  function r(o) {
      if (o.ep)
          return;
      o.ep = !0;
      const i = n(o);
      fetch(o.href, i)
  }
}
)();
function vd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Tu = {
  exports: {}
}
, Fo = {}
, Ou = {
  exports: {}
}
, j = {};
/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Sr = Symbol.for("react.element")
, wd = Symbol.for("react.portal")
, Sd = Symbol.for("react.fragment")
, kd = Symbol.for("react.strict_mode")
, xd = Symbol.for("react.profiler")
, Cd = Symbol.for("react.provider")
, Ed = Symbol.for("react.context")
, Nd = Symbol.for("react.forward_ref")
, Pd = Symbol.for("react.suspense")
, _d = Symbol.for("react.memo")
, zd = Symbol.for("react.lazy")
, sa = Symbol.iterator;
function Td(e) {
  return e === null || typeof e != "object" ? null : (e = sa && e[sa] || e["@@iterator"],
  typeof e == "function" ? e : null)
}
var Lu = {
  isMounted: function() {
      return !1
  },
  enqueueForceUpdate: function() {},
  enqueueReplaceState: function() {},
  enqueueSetState: function() {}
}
, ju = Object.assign
, Iu = {};
function Nn(e, t, n) {
  this.props = e,
  this.context = t,
  this.refs = Iu,
  this.updater = n || Lu
}
Nn.prototype.isReactComponent = {};
Nn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState")
}
;
Nn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Ru() {}
Ru.prototype = Nn.prototype;
function es(e, t, n) {
  this.props = e,
  this.context = t,
  this.refs = Iu,
  this.updater = n || Lu
}
var ts = es.prototype = new Ru;
ts.constructor = es;
ju(ts, Nn.prototype);
ts.isPureReactComponent = !0;
var aa = Array.isArray
, Mu = Object.prototype.hasOwnProperty
, ns = {
  current: null
}
, $u = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function Du(e, t, n) {
  var r, o = {}, i = null, l = null;
  if (t != null)
      for (r in t.ref !== void 0 && (l = t.ref),
      t.key !== void 0 && (i = "" + t.key),
      t)
          Mu.call(t, r) && !$u.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1)
      o.children = n;
  else if (1 < s) {
      for (var a = Array(s), c = 0; c < s; c++)
          a[c] = arguments[c + 2];
      o.children = a
  }
  if (e && e.defaultProps)
      for (r in s = e.defaultProps,
      s)
          o[r] === void 0 && (o[r] = s[r]);
  return {
      $$typeof: Sr,
      type: e,
      key: i,
      ref: l,
      props: o,
      _owner: ns.current
  }
}
function Od(e, t) {
  return {
      $$typeof: Sr,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner
  }
}
function rs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Sr
}
function Ld(e) {
  var t = {
      "=": "=0",
      ":": "=2"
  };
  return "$" + e.replace(/[=:]/g, function(n) {
      return t[n]
  })
}
var ua = /\/+/g;
function _i(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Ld("" + e.key) : t.toString(36)
}
function Gr(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null)
      l = !0;
  else
      switch (i) {
      case "string":
      case "number":
          l = !0;
          break;
      case "object":
          switch (e.$$typeof) {
          case Sr:
          case wd:
              l = !0
          }
      }
  if (l)
      return l = e,
      o = o(l),
      e = r === "" ? "." + _i(l, 0) : r,
      aa(o) ? (n = "",
      e != null && (n = e.replace(ua, "$&/") + "/"),
      Gr(o, t, n, "", function(c) {
          return c
      })) : o != null && (rs(o) && (o = Od(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(ua, "$&/") + "/") + e)),
      t.push(o)),
      1;
  if (l = 0,
  r = r === "" ? "." : r + ":",
  aa(e))
      for (var s = 0; s < e.length; s++) {
          i = e[s];
          var a = r + _i(i, s);
          l += Gr(i, t, n, a, o)
      }
  else if (a = Td(e),
  typeof a == "function")
      for (e = a.call(e),
      s = 0; !(i = e.next()).done; )
          i = i.value,
          a = r + _i(i, s++),
          l += Gr(i, t, n, a, o);
  else if (i === "object")
      throw t = String(e),
      Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l
}
function Tr(e, t, n) {
  if (e == null)
      return e;
  var r = []
    , o = 0;
  return Gr(e, r, "", "", function(i) {
      return t.call(n, i, o++)
  }),
  r
}
function jd(e) {
  if (e._status === -1) {
      var t = e._result;
      t = t(),
      t.then(function(n) {
          (e._status === 0 || e._status === -1) && (e._status = 1,
          e._result = n)
      }, function(n) {
          (e._status === 0 || e._status === -1) && (e._status = 2,
          e._result = n)
      }),
      e._status === -1 && (e._status = 0,
      e._result = t)
  }
  if (e._status === 1)
      return e._result.default;
  throw e._result
}
var ve = {
  current: null
}
, Zr = {
  transition: null
}
, Id = {
  ReactCurrentDispatcher: ve,
  ReactCurrentBatchConfig: Zr,
  ReactCurrentOwner: ns
};
function Fu() {
  throw Error("act(...) is not supported in production builds of React.")
}
j.Children = {
  map: Tr,
  forEach: function(e, t, n) {
      Tr(e, function() {
          t.apply(this, arguments)
      }, n)
  },
  count: function(e) {
      var t = 0;
      return Tr(e, function() {
          t++
      }),
      t
  },
  toArray: function(e) {
      return Tr(e, function(t) {
          return t
      }) || []
  },
  only: function(e) {
      if (!rs(e))
          throw Error("React.Children.only expected to receive a single React element child.");
      return e
  }
};
j.Component = Nn;
j.Fragment = Sd;
j.Profiler = xd;
j.PureComponent = es;
j.StrictMode = kd;
j.Suspense = Pd;
j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Id;
j.act = Fu;
j.cloneElement = function(e, t, n) {
  if (e == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ju({}, e.props)
    , o = e.key
    , i = e.ref
    , l = e._owner;
  if (t != null) {
      if (t.ref !== void 0 && (i = t.ref,
      l = ns.current),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
          var s = e.type.defaultProps;
      for (a in t)
          Mu.call(t, a) && !$u.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a])
  }
  var a = arguments.length - 2;
  if (a === 1)
      r.children = n;
  else if (1 < a) {
      s = Array(a);
      for (var c = 0; c < a; c++)
          s[c] = arguments[c + 2];
      r.children = s
  }
  return {
      $$typeof: Sr,
      type: e.type,
      key: o,
      ref: i,
      props: r,
      _owner: l
  }
}
;
j.createContext = function(e) {
  return e = {
      $$typeof: Ed,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
  },
  e.Provider = {
      $$typeof: Cd,
      _context: e
  },
  e.Consumer = e
}
;
j.createElement = Du;
j.createFactory = function(e) {
  var t = Du.bind(null, e);
  return t.type = e,
  t
}
;
j.createRef = function() {
  return {
      current: null
  }
}
;
j.forwardRef = function(e) {
  return {
      $$typeof: Nd,
      render: e
  }
}
;
j.isValidElement = rs;
j.lazy = function(e) {
  return {
      $$typeof: zd,
      _payload: {
          _status: -1,
          _result: e
      },
      _init: jd
  }
}
;
j.memo = function(e, t) {
  return {
      $$typeof: _d,
      type: e,
      compare: t === void 0 ? null : t
  }
}
;
j.startTransition = function(e) {
  var t = Zr.transition;
  Zr.transition = {};
  try {
      e()
  } finally {
      Zr.transition = t
  }
}
;
j.unstable_act = Fu;
j.useCallback = function(e, t) {
  return ve.current.useCallback(e, t)
}
;
j.useContext = function(e) {
  return ve.current.useContext(e)
}
;
j.useDebugValue = function() {}
;
j.useDeferredValue = function(e) {
  return ve.current.useDeferredValue(e)
}
;
j.useEffect = function(e, t) {
  return ve.current.useEffect(e, t)
}
;
j.useId = function() {
  return ve.current.useId()
}
;
j.useImperativeHandle = function(e, t, n) {
  return ve.current.useImperativeHandle(e, t, n)
}
;
j.useInsertionEffect = function(e, t) {
  return ve.current.useInsertionEffect(e, t)
}
;
j.useLayoutEffect = function(e, t) {
  return ve.current.useLayoutEffect(e, t)
}
;
j.useMemo = function(e, t) {
  return ve.current.useMemo(e, t)
}
;
j.useReducer = function(e, t, n) {
  return ve.current.useReducer(e, t, n)
}
;
j.useRef = function(e) {
  return ve.current.useRef(e)
}
;
j.useState = function(e) {
  return ve.current.useState(e)
}
;
j.useSyncExternalStore = function(e, t, n) {
  return ve.current.useSyncExternalStore(e, t, n)
}
;
j.useTransition = function() {
  return ve.current.useTransition()
}
;
j.version = "18.3.1";
Ou.exports = j;
var R = Ou.exports;
const De = vd(R)
, ca = gd({
  __proto__: null,
  default: De
}, [R]);
/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Rd = R
, Md = Symbol.for("react.element")
, $d = Symbol.for("react.fragment")
, Dd = Object.prototype.hasOwnProperty
, Fd = Rd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
, Bd = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};
function Bu(e, t, n) {
  var r, o = {}, i = null, l = null;
  n !== void 0 && (i = "" + n),
  t.key !== void 0 && (i = "" + t.key),
  t.ref !== void 0 && (l = t.ref);
  for (r in t)
      Dd.call(t, r) && !Bd.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
      for (r in t = e.defaultProps,
      t)
          o[r] === void 0 && (o[r] = t[r]);
  return {
      $$typeof: Md,
      type: e,
      key: i,
      ref: l,
      props: o,
      _owner: Fd.current
  }
}
Fo.Fragment = $d;
Fo.jsx = Bu;
Fo.jsxs = Bu;
Tu.exports = Fo;
var N = Tu.exports
, tl = {}
, Au = {
  exports: {}
}
, Le = {}
, Uu = {
  exports: {}
}
, Vu = {};
/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
(function(e) {
  function t(_, O) {
      var L = _.length;
      _.push(O);
      e: for (; 0 < L; ) {
          var Z = L - 1 >>> 1
            , ne = _[Z];
          if (0 < o(ne, O))
              _[Z] = O,
              _[L] = ne,
              L = Z;
          else
              break e
      }
  }
  function n(_) {
      return _.length === 0 ? null : _[0]
  }
  function r(_) {
      if (_.length === 0)
          return null;
      var O = _[0]
        , L = _.pop();
      if (L !== O) {
          _[0] = L;
          e: for (var Z = 0, ne = _.length, _r = ne >>> 1; Z < _r; ) {
              var Rt = 2 * (Z + 1) - 1
                , Pi = _[Rt]
                , Mt = Rt + 1
                , zr = _[Mt];
              if (0 > o(Pi, L))
                  Mt < ne && 0 > o(zr, Pi) ? (_[Z] = zr,
                  _[Mt] = L,
                  Z = Mt) : (_[Z] = Pi,
                  _[Rt] = L,
                  Z = Rt);
              else if (Mt < ne && 0 > o(zr, L))
                  _[Z] = zr,
                  _[Mt] = L,
                  Z = Mt;
              else
                  break e
          }
      }
      return O
  }
  function o(_, O) {
      var L = _.sortIndex - O.sortIndex;
      return L !== 0 ? L : _.id - O.id
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
      var i = performance;
      e.unstable_now = function() {
          return i.now()
      }
  } else {
      var l = Date
        , s = l.now();
      e.unstable_now = function() {
          return l.now() - s
      }
  }
  var a = []
    , c = []
    , h = 1
    , m = null
    , p = 3
    , w = !1
    , v = !1
    , y = !1
    , T = typeof setTimeout == "function" ? setTimeout : null
    , f = typeof clearTimeout == "function" ? clearTimeout : null
    , u = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(_) {
      for (var O = n(c); O !== null; ) {
          if (O.callback === null)
              r(c);
          else if (O.startTime <= _)
              r(c),
              O.sortIndex = O.expirationTime,
              t(a, O);
          else
              break;
          O = n(c)
      }
  }
  function g(_) {
      if (y = !1,
      d(_),
      !v)
          if (n(a) !== null)
              v = !0,
              Ei(C);
          else {
              var O = n(c);
              O !== null && Ni(g, O.startTime - _)
          }
  }
  function C(_, O) {
      v = !1,
      y && (y = !1,
      f(z),
      z = -1),
      w = !0;
      var L = p;
      try {
          for (d(O),
          m = n(a); m !== null && (!(m.expirationTime > O) || _ && !Ve()); ) {
              var Z = m.callback;
              if (typeof Z == "function") {
                  m.callback = null,
                  p = m.priorityLevel;
                  var ne = Z(m.expirationTime <= O);
                  O = e.unstable_now(),
                  typeof ne == "function" ? m.callback = ne : m === n(a) && r(a),
                  d(O)
              } else
                  r(a);
              m = n(a)
          }
          if (m !== null)
              var _r = !0;
          else {
              var Rt = n(c);
              Rt !== null && Ni(g, Rt.startTime - O),
              _r = !1
          }
          return _r
      } finally {
          m = null,
          p = L,
          w = !1
      }
  }
  var E = !1
    , x = null
    , z = -1
    , G = 5
    , I = -1;
  function Ve() {
      return !(e.unstable_now() - I < G)
  }
  function Tn() {
      if (x !== null) {
          var _ = e.unstable_now();
          I = _;
          var O = !0;
          try {
              O = x(!0, _)
          } finally {
              O ? On() : (E = !1,
              x = null)
          }
      } else
          E = !1
  }
  var On;
  if (typeof u == "function")
      On = function() {
          u(Tn)
      }
      ;
  else if (typeof MessageChannel < "u") {
      var la = new MessageChannel
        , yd = la.port2;
      la.port1.onmessage = Tn,
      On = function() {
          yd.postMessage(null)
      }
  } else
      On = function() {
          T(Tn, 0)
      }
      ;
  function Ei(_) {
      x = _,
      E || (E = !0,
      On())
  }
  function Ni(_, O) {
      z = T(function() {
          _(e.unstable_now())
      }, O)
  }
  e.unstable_IdlePriority = 5,
  e.unstable_ImmediatePriority = 1,
  e.unstable_LowPriority = 4,
  e.unstable_NormalPriority = 3,
  e.unstable_Profiling = null,
  e.unstable_UserBlockingPriority = 2,
  e.unstable_cancelCallback = function(_) {
      _.callback = null
  }
  ,
  e.unstable_continueExecution = function() {
      v || w || (v = !0,
      Ei(C))
  }
  ,
  e.unstable_forceFrameRate = function(_) {
      0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : G = 0 < _ ? Math.floor(1e3 / _) : 5
  }
  ,
  e.unstable_getCurrentPriorityLevel = function() {
      return p
  }
  ,
  e.unstable_getFirstCallbackNode = function() {
      return n(a)
  }
  ,
  e.unstable_next = function(_) {
      switch (p) {
      case 1:
      case 2:
      case 3:
          var O = 3;
          break;
      default:
          O = p
      }
      var L = p;
      p = O;
      try {
          return _()
      } finally {
          p = L
      }
  }
  ,
  e.unstable_pauseExecution = function() {}
  ,
  e.unstable_requestPaint = function() {}
  ,
  e.unstable_runWithPriority = function(_, O) {
      switch (_) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
          break;
      default:
          _ = 3
      }
      var L = p;
      p = _;
      try {
          return O()
      } finally {
          p = L
      }
  }
  ,
  e.unstable_scheduleCallback = function(_, O, L) {
      var Z = e.unstable_now();
      switch (typeof L == "object" && L !== null ? (L = L.delay,
      L = typeof L == "number" && 0 < L ? Z + L : Z) : L = Z,
      _) {
      case 1:
          var ne = -1;
          break;
      case 2:
          ne = 250;
          break;
      case 5:
          ne = 1073741823;
          break;
      case 4:
          ne = 1e4;
          break;
      default:
          ne = 5e3
      }
      return ne = L + ne,
      _ = {
          id: h++,
          callback: O,
          priorityLevel: _,
          startTime: L,
          expirationTime: ne,
          sortIndex: -1
      },
      L > Z ? (_.sortIndex = L,
      t(c, _),
      n(a) === null && _ === n(c) && (y ? (f(z),
      z = -1) : y = !0,
      Ni(g, L - Z))) : (_.sortIndex = ne,
      t(a, _),
      v || w || (v = !0,
      Ei(C))),
      _
  }
  ,
  e.unstable_shouldYield = Ve,
  e.unstable_wrapCallback = function(_) {
      var O = p;
      return function() {
          var L = p;
          p = O;
          try {
              return _.apply(this, arguments)
          } finally {
              p = L
          }
      }
  }
}
)(Vu);
Uu.exports = Vu;
var Ad = Uu.exports;
/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Ud = R
, Oe = Ad;
function S(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
      t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Hu = new Set
, bn = {};
function Kt(e, t) {
  gn(e, t),
  gn(e + "Capture", t)
}
function gn(e, t) {
  for (bn[e] = t,
  e = 0; e < t.length; e++)
      Hu.add(t[e])
}
var ut = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
, nl = Object.prototype.hasOwnProperty
, Vd = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
, fa = {}
, da = {};
function Hd(e) {
  return nl.call(da, e) ? !0 : nl.call(fa, e) ? !1 : Vd.test(e) ? da[e] = !0 : (fa[e] = !0,
  !1)
}
function Wd(e, t, n, r) {
  if (n !== null && n.type === 0)
      return !1;
  switch (typeof t) {
  case "function":
  case "symbol":
      return !0;
  case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
      e !== "data-" && e !== "aria-");
  default:
      return !1
  }
}
function Qd(e, t, n, r) {
  if (t === null || typeof t > "u" || Wd(e, t, n, r))
      return !0;
  if (r)
      return !1;
  if (n !== null)
      switch (n.type) {
      case 3:
          return !t;
      case 4:
          return t === !1;
      case 5:
          return isNaN(t);
      case 6:
          return isNaN(t) || 1 > t
      }
  return !1
}
function we(e, t, n, r, o, i, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4,
  this.attributeName = r,
  this.attributeNamespace = o,
  this.mustUseProperty = n,
  this.propertyName = e,
  this.type = t,
  this.sanitizeURL = i,
  this.removeEmptyString = l
}
var ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ce[e] = new we(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ce[t] = new we(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ce[e] = new we(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ce[e] = new we(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ce[e] = new we(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ce[e] = new we(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
  ce[e] = new we(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ce[e] = new we(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
  ce[e] = new we(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var os = /[\-:]([a-z])/g;
function is(e) {
  return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(os, is);
  ce[t] = new we(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(os, is);
  ce[t] = new we(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(os, is);
  ce[t] = new we(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ce[e] = new we(e,1,!1,e.toLowerCase(),null,!1,!1)
});
ce.xlinkHref = new we("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ce[e] = new we(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function ls(e, t, n, r) {
  var o = ce.hasOwnProperty(t) ? ce[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Qd(t, n, o, r) && (n = null),
  r || o === null ? Hd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
  r = o.attributeNamespace,
  n === null ? e.removeAttribute(t) : (o = o.type,
  n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var pt = Ud.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
, Or = Symbol.for("react.element")
, Jt = Symbol.for("react.portal")
, qt = Symbol.for("react.fragment")
, ss = Symbol.for("react.strict_mode")
, rl = Symbol.for("react.profiler")
, Wu = Symbol.for("react.provider")
, Qu = Symbol.for("react.context")
, as = Symbol.for("react.forward_ref")
, ol = Symbol.for("react.suspense")
, il = Symbol.for("react.suspense_list")
, us = Symbol.for("react.memo")
, ht = Symbol.for("react.lazy")
, Yu = Symbol.for("react.offscreen")
, pa = Symbol.iterator;
function Ln(e) {
  return e === null || typeof e != "object" ? null : (e = pa && e[pa] || e["@@iterator"],
  typeof e == "function" ? e : null)
}
var X = Object.assign, zi;
function An(e) {
  if (zi === void 0)
      try {
          throw Error()
      } catch (n) {
          var t = n.stack.trim().match(/\n( *(at )?)/);
          zi = t && t[1] || ""
      }
  return `
` + zi + e
}
var Ti = !1;
function Oi(e, t) {
  if (!e || Ti)
      return "";
  Ti = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
      if (t)
          if (t = function() {
              throw Error()
          }
          ,
          Object.defineProperty(t.prototype, "props", {
              set: function() {
                  throw Error()
              }
          }),
          typeof Reflect == "object" && Reflect.construct) {
              try {
                  Reflect.construct(t, [])
              } catch (c) {
                  var r = c
              }
              Reflect.construct(e, [], t)
          } else {
              try {
                  t.call()
              } catch (c) {
                  r = c
              }
              e.call(t.prototype)
          }
      else {
          try {
              throw Error()
          } catch (c) {
              r = c
          }
          e()
      }
  } catch (c) {
      if (c && r && typeof c.stack == "string") {
          for (var o = c.stack.split(`
`), i = r.stack.split(`
`), l = o.length - 1, s = i.length - 1; 1 <= l && 0 <= s && o[l] !== i[s]; )
              s--;
          for (; 1 <= l && 0 <= s; l--,
          s--)
              if (o[l] !== i[s]) {
                  if (l !== 1 || s !== 1)
                      do
                          if (l--,
                          s--,
                          0 > s || o[l] !== i[s]) {
                              var a = `
` + o[l].replace(" at new ", " at ");
                              return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)),
                              a
                          }
                      while (1 <= l && 0 <= s);
                  break
              }
      }
  } finally {
      Ti = !1,
      Error.prepareStackTrace = n
  }
  return (e = e ? e.displayName || e.name : "") ? An(e) : ""
}
function Yd(e) {
  switch (e.tag) {
  case 5:
      return An(e.type);
  case 16:
      return An("Lazy");
  case 13:
      return An("Suspense");
  case 19:
      return An("SuspenseList");
  case 0:
  case 2:
  case 15:
      return e = Oi(e.type, !1),
      e;
  case 11:
      return e = Oi(e.type.render, !1),
      e;
  case 1:
      return e = Oi(e.type, !0),
      e;
  default:
      return ""
  }
}
function ll(e) {
  if (e == null)
      return null;
  if (typeof e == "function")
      return e.displayName || e.name || null;
  if (typeof e == "string")
      return e;
  switch (e) {
  case qt:
      return "Fragment";
  case Jt:
      return "Portal";
  case rl:
      return "Profiler";
  case ss:
      return "StrictMode";
  case ol:
      return "Suspense";
  case il:
      return "SuspenseList"
  }
  if (typeof e == "object")
      switch (e.$$typeof) {
      case Qu:
          return (e.displayName || "Context") + ".Consumer";
      case Wu:
          return (e._context.displayName || "Context") + ".Provider";
      case as:
          var t = e.render;
          return e = e.displayName,
          e || (e = t.displayName || t.name || "",
          e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
          e;
      case us:
          return t = e.displayName || null,
          t !== null ? t : ll(e.type) || "Memo";
      case ht:
          t = e._payload,
          e = e._init;
          try {
              return ll(e(t))
          } catch {}
      }
  return null
}
function Xd(e) {
  var t = e.type;
  switch (e.tag) {
  case 24:
      return "Cache";
  case 9:
      return (t.displayName || "Context") + ".Consumer";
  case 10:
      return (t._context.displayName || "Context") + ".Provider";
  case 18:
      return "DehydratedFragment";
  case 11:
      return e = t.render,
      e = e.displayName || e.name || "",
      t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
  case 7:
      return "Fragment";
  case 5:
      return t;
  case 4:
      return "Portal";
  case 3:
      return "Root";
  case 6:
      return "Text";
  case 16:
      return ll(t);
  case 8:
      return t === ss ? "StrictMode" : "Mode";
  case 22:
      return "Offscreen";
  case 12:
      return "Profiler";
  case 21:
      return "Scope";
  case 13:
      return "Suspense";
  case 19:
      return "SuspenseList";
  case 25:
      return "TracingMarker";
  case 1:
  case 0:
  case 17:
  case 2:
  case 14:
  case 15:
      if (typeof t == "function")
          return t.displayName || t.name || null;
      if (typeof t == "string")
          return t
  }
  return null
}
function Tt(e) {
  switch (typeof e) {
  case "boolean":
  case "number":
  case "string":
  case "undefined":
      return e;
  case "object":
      return e;
  default:
      return ""
  }
}
function Xu(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function Kd(e) {
  var t = Xu(e) ? "checked" : "value"
    , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
    , r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var o = n.get
        , i = n.set;
      return Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
              return o.call(this)
          },
          set: function(l) {
              r = "" + l,
              i.call(this, l)
          }
      }),
      Object.defineProperty(e, t, {
          enumerable: n.enumerable
      }),
      {
          getValue: function() {
              return r
          },
          setValue: function(l) {
              r = "" + l
          },
          stopTracking: function() {
              e._valueTracker = null,
              delete e[t]
          }
      }
  }
}
function Lr(e) {
  e._valueTracker || (e._valueTracker = Kd(e))
}
function Ku(e) {
  if (!e)
      return !1;
  var t = e._valueTracker;
  if (!t)
      return !0;
  var n = t.getValue()
    , r = "";
  return e && (r = Xu(e) ? e.checked ? "true" : "false" : e.value),
  e = r,
  e !== n ? (t.setValue(e),
  !0) : !1
}
function co(e) {
  if (e = e || (typeof document < "u" ? document : void 0),
  typeof e > "u")
      return null;
  try {
      return e.activeElement || e.body
  } catch {
      return e.body
  }
}
function sl(e, t) {
  var n = t.checked;
  return X({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked
  })
}
function ma(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue
    , r = t.checked != null ? t.checked : t.defaultChecked;
  n = Tt(t.value != null ? t.value : n),
  e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
  }
}
function Gu(e, t) {
  t = t.checked,
  t != null && ls(e, "checked", t, !1)
}
function al(e, t) {
  Gu(e, t);
  var n = Tt(t.value)
    , r = t.type;
  if (n != null)
      r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return
  }
  t.hasOwnProperty("value") ? ul(e, t.type, n) : t.hasOwnProperty("defaultValue") && ul(e, t.type, Tt(t.defaultValue)),
  t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function ha(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
          return;
      t = "" + e._wrapperState.initialValue,
      n || t === e.value || (e.value = t),
      e.defaultValue = t
  }
  n = e.name,
  n !== "" && (e.name = ""),
  e.defaultChecked = !!e._wrapperState.initialChecked,
  n !== "" && (e.name = n)
}
function ul(e, t, n) {
  (t !== "number" || co(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Un = Array.isArray;
function cn(e, t, n, r) {
  if (e = e.options,
  t) {
      t = {};
      for (var o = 0; o < n.length; o++)
          t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++)
          o = t.hasOwnProperty("$" + e[n].value),
          e[n].selected !== o && (e[n].selected = o),
          o && r && (e[n].defaultSelected = !0)
  } else {
      for (n = "" + Tt(n),
      t = null,
      o = 0; o < e.length; o++) {
          if (e[o].value === n) {
              e[o].selected = !0,
              r && (e[o].defaultSelected = !0);
              return
          }
          t !== null || e[o].disabled || (t = e[o])
      }
      t !== null && (t.selected = !0)
  }
}
function cl(e, t) {
  if (t.dangerouslySetInnerHTML != null)
      throw Error(S(91));
  return X({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue
  })
}
function ya(e, t) {
  var n = t.value;
  if (n == null) {
      if (n = t.children,
      t = t.defaultValue,
      n != null) {
          if (t != null)
              throw Error(S(92));
          if (Un(n)) {
              if (1 < n.length)
                  throw Error(S(93));
              n = n[0]
          }
          t = n
      }
      t == null && (t = ""),
      n = t
  }
  e._wrapperState = {
      initialValue: Tt(n)
  }
}
function Zu(e, t) {
  var n = Tt(t.value)
    , r = Tt(t.defaultValue);
  n != null && (n = "" + n,
  n !== e.value && (e.value = n),
  t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
  r != null && (e.defaultValue = "" + r)
}
function ga(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Ju(e) {
  switch (e) {
  case "svg":
      return "http://www.w3.org/2000/svg";
  case "math":
      return "http://www.w3.org/1998/Math/MathML";
  default:
      return "http://www.w3.org/1999/xhtml"
  }
}
function fl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Ju(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var jr, qu = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
      MSApp.execUnsafeLocalFunction(function() {
          return e(t, n, r, o)
      })
  }
  : e
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
      e.innerHTML = t;
  else {
      for (jr = jr || document.createElement("div"),
      jr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
      t = jr.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
      for (; t.firstChild; )
          e.appendChild(t.firstChild)
  }
});
function er(e, t) {
  if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return
      }
  }
  e.textContent = t
}
var Wn = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}
, Gd = ["Webkit", "ms", "Moz", "O"];
Object.keys(Wn).forEach(function(e) {
  Gd.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1),
      Wn[t] = Wn[e]
  })
});
function bu(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Wn.hasOwnProperty(e) && Wn[e] ? ("" + t).trim() : t + "px"
}
function ec(e, t) {
  e = e.style;
  for (var n in t)
      if (t.hasOwnProperty(n)) {
          var r = n.indexOf("--") === 0
            , o = bu(n, t[n], r);
          n === "float" && (n = "cssFloat"),
          r ? e.setProperty(n, o) : e[n] = o
      }
}
var Zd = X({
  menuitem: !0
}, {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  keygen: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0
});
function dl(e, t) {
  if (t) {
      if (Zd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw Error(S(137, e));
      if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
              throw Error(S(60));
          if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
              throw Error(S(61))
      }
      if (t.style != null && typeof t.style != "object")
          throw Error(S(62))
  }
}
function pl(e, t) {
  if (e.indexOf("-") === -1)
      return typeof t.is == "string";
  switch (e) {
  case "annotation-xml":
  case "color-profile":
  case "font-face":
  case "font-face-src":
  case "font-face-uri":
  case "font-face-format":
  case "font-face-name":
  case "missing-glyph":
      return !1;
  default:
      return !0
  }
}
var ml = null;
function cs(e) {
  return e = e.target || e.srcElement || window,
  e.correspondingUseElement && (e = e.correspondingUseElement),
  e.nodeType === 3 ? e.parentNode : e
}
var hl = null
, fn = null
, dn = null;
function va(e) {
  if (e = Cr(e)) {
      if (typeof hl != "function")
          throw Error(S(280));
      var t = e.stateNode;
      t && (t = Ho(t),
      hl(e.stateNode, e.type, t))
  }
}
function tc(e) {
  fn ? dn ? dn.push(e) : dn = [e] : fn = e
}
function nc() {
  if (fn) {
      var e = fn
        , t = dn;
      if (dn = fn = null,
      va(e),
      t)
          for (e = 0; e < t.length; e++)
              va(t[e])
  }
}
function rc(e, t) {
  return e(t)
}
function oc() {}
var Li = !1;
function ic(e, t, n) {
  if (Li)
      return e(t, n);
  Li = !0;
  try {
      return rc(e, t, n)
  } finally {
      Li = !1,
      (fn !== null || dn !== null) && (oc(),
      nc())
  }
}
function tr(e, t) {
  var n = e.stateNode;
  if (n === null)
      return null;
  var r = Ho(n);
  if (r === null)
      return null;
  n = r[t];
  e: switch (t) {
  case "onClick":
  case "onClickCapture":
  case "onDoubleClick":
  case "onDoubleClickCapture":
  case "onMouseDown":
  case "onMouseDownCapture":
  case "onMouseMove":
  case "onMouseMoveCapture":
  case "onMouseUp":
  case "onMouseUpCapture":
  case "onMouseEnter":
      (r = !r.disabled) || (e = e.type,
      r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
      e = !r;
      break e;
  default:
      e = !1
  }
  if (e)
      return null;
  if (n && typeof n != "function")
      throw Error(S(231, t, typeof n));
  return n
}
var yl = !1;
if (ut)
  try {
      var jn = {};
      Object.defineProperty(jn, "passive", {
          get: function() {
              yl = !0
          }
      }),
      window.addEventListener("test", jn, jn),
      window.removeEventListener("test", jn, jn)
  } catch {
      yl = !1
  }
function Jd(e, t, n, r, o, i, l, s, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
      t.apply(n, c)
  } catch (h) {
      this.onError(h)
  }
}
var Qn = !1
, fo = null
, po = !1
, gl = null
, qd = {
  onError: function(e) {
      Qn = !0,
      fo = e
  }
};
function bd(e, t, n, r, o, i, l, s, a) {
  Qn = !1,
  fo = null,
  Jd.apply(qd, arguments)
}
function ep(e, t, n, r, o, i, l, s, a) {
  if (bd.apply(this, arguments),
  Qn) {
      if (Qn) {
          var c = fo;
          Qn = !1,
          fo = null
      } else
          throw Error(S(198));
      po || (po = !0,
      gl = c)
  }
}
function Gt(e) {
  var t = e
    , n = e;
  if (e.alternate)
      for (; t.return; )
          t = t.return;
  else {
      e = t;
      do
          t = e,
          t.flags & 4098 && (n = t.return),
          e = t.return;
      while (e)
  }
  return t.tag === 3 ? n : null
}
function lc(e) {
  if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate,
      e !== null && (t = e.memoizedState)),
      t !== null)
          return t.dehydrated
  }
  return null
}
function wa(e) {
  if (Gt(e) !== e)
      throw Error(S(188))
}
function tp(e) {
  var t = e.alternate;
  if (!t) {
      if (t = Gt(e),
      t === null)
          throw Error(S(188));
      return t !== e ? null : e
  }
  for (var n = e, r = t; ; ) {
      var o = n.return;
      if (o === null)
          break;
      var i = o.alternate;
      if (i === null) {
          if (r = o.return,
          r !== null) {
              n = r;
              continue
          }
          break
      }
      if (o.child === i.child) {
          for (i = o.child; i; ) {
              if (i === n)
                  return wa(o),
                  e;
              if (i === r)
                  return wa(o),
                  t;
              i = i.sibling
          }
          throw Error(S(188))
      }
      if (n.return !== r.return)
          n = o,
          r = i;
      else {
          for (var l = !1, s = o.child; s; ) {
              if (s === n) {
                  l = !0,
                  n = o,
                  r = i;
                  break
              }
              if (s === r) {
                  l = !0,
                  r = o,
                  n = i;
                  break
              }
              s = s.sibling
          }
          if (!l) {
              for (s = i.child; s; ) {
                  if (s === n) {
                      l = !0,
                      n = i,
                      r = o;
                      break
                  }
                  if (s === r) {
                      l = !0,
                      r = i,
                      n = o;
                      break
                  }
                  s = s.sibling
              }
              if (!l)
                  throw Error(S(189))
          }
      }
      if (n.alternate !== r)
          throw Error(S(190))
  }
  if (n.tag !== 3)
      throw Error(S(188));
  return n.stateNode.current === n ? e : t
}
function sc(e) {
  return e = tp(e),
  e !== null ? ac(e) : null
}
function ac(e) {
  if (e.tag === 5 || e.tag === 6)
      return e;
  for (e = e.child; e !== null; ) {
      var t = ac(e);
      if (t !== null)
          return t;
      e = e.sibling
  }
  return null
}
var uc = Oe.unstable_scheduleCallback
, Sa = Oe.unstable_cancelCallback
, np = Oe.unstable_shouldYield
, rp = Oe.unstable_requestPaint
, J = Oe.unstable_now
, op = Oe.unstable_getCurrentPriorityLevel
, fs = Oe.unstable_ImmediatePriority
, cc = Oe.unstable_UserBlockingPriority
, mo = Oe.unstable_NormalPriority
, ip = Oe.unstable_LowPriority
, fc = Oe.unstable_IdlePriority
, Bo = null
, tt = null;
function lp(e) {
  if (tt && typeof tt.onCommitFiberRoot == "function")
      try {
          tt.onCommitFiberRoot(Bo, e, void 0, (e.current.flags & 128) === 128)
      } catch {}
}
var Xe = Math.clz32 ? Math.clz32 : up
, sp = Math.log
, ap = Math.LN2;
function up(e) {
  return e >>>= 0,
  e === 0 ? 32 : 31 - (sp(e) / ap | 0) | 0
}
var Ir = 64
, Rr = 4194304;
function Vn(e) {
  switch (e & -e) {
  case 1:
      return 1;
  case 2:
      return 2;
  case 4:
      return 4;
  case 8:
      return 8;
  case 16:
      return 16;
  case 32:
      return 32;
  case 64:
  case 128:
  case 256:
  case 512:
  case 1024:
  case 2048:
  case 4096:
  case 8192:
  case 16384:
  case 32768:
  case 65536:
  case 131072:
  case 262144:
  case 524288:
  case 1048576:
  case 2097152:
      return e & 4194240;
  case 4194304:
  case 8388608:
  case 16777216:
  case 33554432:
  case 67108864:
      return e & 130023424;
  case 134217728:
      return 134217728;
  case 268435456:
      return 268435456;
  case 536870912:
      return 536870912;
  case 1073741824:
      return 1073741824;
  default:
      return e
  }
}
function ho(e, t) {
  var n = e.pendingLanes;
  if (n === 0)
      return 0;
  var r = 0
    , o = e.suspendedLanes
    , i = e.pingedLanes
    , l = n & 268435455;
  if (l !== 0) {
      var s = l & ~o;
      s !== 0 ? r = Vn(s) : (i &= l,
      i !== 0 && (r = Vn(i)))
  } else
      l = n & ~o,
      l !== 0 ? r = Vn(l) : i !== 0 && (r = Vn(i));
  if (r === 0)
      return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
  i = t & -t,
  o >= i || o === 16 && (i & 4194240) !== 0))
      return t;
  if (r & 4 && (r |= n & 16),
  t = e.entangledLanes,
  t !== 0)
      for (e = e.entanglements,
      t &= r; 0 < t; )
          n = 31 - Xe(t),
          o = 1 << n,
          r |= e[n],
          t &= ~o;
  return r
}
function cp(e, t) {
  switch (e) {
  case 1:
  case 2:
  case 4:
      return t + 250;
  case 8:
  case 16:
  case 32:
  case 64:
  case 128:
  case 256:
  case 512:
  case 1024:
  case 2048:
  case 4096:
  case 8192:
  case 16384:
  case 32768:
  case 65536:
  case 131072:
  case 262144:
  case 524288:
  case 1048576:
  case 2097152:
      return t + 5e3;
  case 4194304:
  case 8388608:
  case 16777216:
  case 33554432:
  case 67108864:
      return -1;
  case 134217728:
  case 268435456:
  case 536870912:
  case 1073741824:
      return -1;
  default:
      return -1
  }
}
function fp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
      var l = 31 - Xe(i)
        , s = 1 << l
        , a = o[l];
      a === -1 ? (!(s & n) || s & r) && (o[l] = cp(s, t)) : a <= t && (e.expiredLanes |= s),
      i &= ~s
  }
}
function vl(e) {
  return e = e.pendingLanes & -1073741825,
  e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function dc() {
  var e = Ir;
  return Ir <<= 1,
  !(Ir & 4194240) && (Ir = 64),
  e
}
function ji(e) {
  for (var t = [], n = 0; 31 > n; n++)
      t.push(e);
  return t
}
function kr(e, t, n) {
  e.pendingLanes |= t,
  t !== 536870912 && (e.suspendedLanes = 0,
  e.pingedLanes = 0),
  e = e.eventTimes,
  t = 31 - Xe(t),
  e[t] = n
}
function dp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t,
  e.suspendedLanes = 0,
  e.pingedLanes = 0,
  e.expiredLanes &= t,
  e.mutableReadLanes &= t,
  e.entangledLanes &= t,
  t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
      var o = 31 - Xe(n)
        , i = 1 << o;
      t[o] = 0,
      r[o] = -1,
      e[o] = -1,
      n &= ~i
  }
}
function ds(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
      var r = 31 - Xe(n)
        , o = 1 << r;
      o & t | e[r] & t && (e[r] |= t),
      n &= ~o
  }
}
var F = 0;
function pc(e) {
  return e &= -e,
  1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var mc, ps, hc, yc, gc, wl = !1, Mr = [], kt = null, xt = null, Ct = null, nr = new Map, rr = new Map, gt = [], pp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ka(e, t) {
  switch (e) {
  case "focusin":
  case "focusout":
      kt = null;
      break;
  case "dragenter":
  case "dragleave":
      xt = null;
      break;
  case "mouseover":
  case "mouseout":
      Ct = null;
      break;
  case "pointerover":
  case "pointerout":
      nr.delete(t.pointerId);
      break;
  case "gotpointercapture":
  case "lostpointercapture":
      rr.delete(t.pointerId)
  }
}
function In(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: r,
      nativeEvent: i,
      targetContainers: [o]
  },
  t !== null && (t = Cr(t),
  t !== null && ps(t)),
  e) : (e.eventSystemFlags |= r,
  t = e.targetContainers,
  o !== null && t.indexOf(o) === -1 && t.push(o),
  e)
}
function mp(e, t, n, r, o) {
  switch (t) {
  case "focusin":
      return kt = In(kt, e, t, n, r, o),
      !0;
  case "dragenter":
      return xt = In(xt, e, t, n, r, o),
      !0;
  case "mouseover":
      return Ct = In(Ct, e, t, n, r, o),
      !0;
  case "pointerover":
      var i = o.pointerId;
      return nr.set(i, In(nr.get(i) || null, e, t, n, r, o)),
      !0;
  case "gotpointercapture":
      return i = o.pointerId,
      rr.set(i, In(rr.get(i) || null, e, t, n, r, o)),
      !0
  }
  return !1
}
function vc(e) {
  var t = Ft(e.target);
  if (t !== null) {
      var n = Gt(t);
      if (n !== null) {
          if (t = n.tag,
          t === 13) {
              if (t = lc(n),
              t !== null) {
                  e.blockedOn = t,
                  gc(e.priority, function() {
                      hc(n)
                  });
                  return
              }
          } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
              e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
              return
          }
      }
  }
  e.blockedOn = null
}
function Jr(e) {
  if (e.blockedOn !== null)
      return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Sl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
          n = e.nativeEvent;
          var r = new n.constructor(n.type,n);
          ml = r,
          n.target.dispatchEvent(r),
          ml = null
      } else
          return t = Cr(n),
          t !== null && ps(t),
          e.blockedOn = n,
          !1;
      t.shift()
  }
  return !0
}
function xa(e, t, n) {
  Jr(e) && n.delete(t)
}
function hp() {
  wl = !1,
  kt !== null && Jr(kt) && (kt = null),
  xt !== null && Jr(xt) && (xt = null),
  Ct !== null && Jr(Ct) && (Ct = null),
  nr.forEach(xa),
  rr.forEach(xa)
}
function Rn(e, t) {
  e.blockedOn === t && (e.blockedOn = null,
  wl || (wl = !0,
  Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority, hp)))
}
function or(e) {
  function t(o) {
      return Rn(o, e)
  }
  if (0 < Mr.length) {
      Rn(Mr[0], e);
      for (var n = 1; n < Mr.length; n++) {
          var r = Mr[n];
          r.blockedOn === e && (r.blockedOn = null)
      }
  }
  for (kt !== null && Rn(kt, e),
  xt !== null && Rn(xt, e),
  Ct !== null && Rn(Ct, e),
  nr.forEach(t),
  rr.forEach(t),
  n = 0; n < gt.length; n++)
      r = gt[n],
      r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < gt.length && (n = gt[0],
  n.blockedOn === null); )
      vc(n),
      n.blockedOn === null && gt.shift()
}
var pn = pt.ReactCurrentBatchConfig
, yo = !0;
function yp(e, t, n, r) {
  var o = F
    , i = pn.transition;
  pn.transition = null;
  try {
      F = 1,
      ms(e, t, n, r)
  } finally {
      F = o,
      pn.transition = i
  }
}
function gp(e, t, n, r) {
  var o = F
    , i = pn.transition;
  pn.transition = null;
  try {
      F = 4,
      ms(e, t, n, r)
  } finally {
      F = o,
      pn.transition = i
  }
}
function ms(e, t, n, r) {
  if (yo) {
      var o = Sl(e, t, n, r);
      if (o === null)
          Vi(e, t, r, go, n),
          ka(e, r);
      else if (mp(o, e, t, n, r))
          r.stopPropagation();
      else if (ka(e, r),
      t & 4 && -1 < pp.indexOf(e)) {
          for (; o !== null; ) {
              var i = Cr(o);
              if (i !== null && mc(i),
              i = Sl(e, t, n, r),
              i === null && Vi(e, t, r, go, n),
              i === o)
                  break;
              o = i
          }
          o !== null && r.stopPropagation()
      } else
          Vi(e, t, r, null, n)
  }
}
var go = null;
function Sl(e, t, n, r) {
  if (go = null,
  e = cs(r),
  e = Ft(e),
  e !== null)
      if (t = Gt(e),
      t === null)
          e = null;
      else if (n = t.tag,
      n === 13) {
          if (e = lc(t),
          e !== null)
              return e;
          e = null
      } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null
      } else
          t !== e && (e = null);
  return go = e,
  null
}
function wc(e) {
  switch (e) {
  case "cancel":
  case "click":
  case "close":
  case "contextmenu":
  case "copy":
  case "cut":
  case "auxclick":
  case "dblclick":
  case "dragend":
  case "dragstart":
  case "drop":
  case "focusin":
  case "focusout":
  case "input":
  case "invalid":
  case "keydown":
  case "keypress":
  case "keyup":
  case "mousedown":
  case "mouseup":
  case "paste":
  case "pause":
  case "play":
  case "pointercancel":
  case "pointerdown":
  case "pointerup":
  case "ratechange":
  case "reset":
  case "resize":
  case "seeked":
  case "submit":
  case "touchcancel":
  case "touchend":
  case "touchstart":
  case "volumechange":
  case "change":
  case "selectionchange":
  case "textInput":
  case "compositionstart":
  case "compositionend":
  case "compositionupdate":
  case "beforeblur":
  case "afterblur":
  case "beforeinput":
  case "blur":
  case "fullscreenchange":
  case "focus":
  case "hashchange":
  case "popstate":
  case "select":
  case "selectstart":
      return 1;
  case "drag":
  case "dragenter":
  case "dragexit":
  case "dragleave":
  case "dragover":
  case "mousemove":
  case "mouseout":
  case "mouseover":
  case "pointermove":
  case "pointerout":
  case "pointerover":
  case "scroll":
  case "toggle":
  case "touchmove":
  case "wheel":
  case "mouseenter":
  case "mouseleave":
  case "pointerenter":
  case "pointerleave":
      return 4;
  case "message":
      switch (op()) {
      case fs:
          return 1;
      case cc:
          return 4;
      case mo:
      case ip:
          return 16;
      case fc:
          return 536870912;
      default:
          return 16
      }
  default:
      return 16
  }
}
var wt = null
, hs = null
, qr = null;
function Sc() {
  if (qr)
      return qr;
  var e, t = hs, n = t.length, r, o = "value"in wt ? wt.value : wt.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++)
      ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++)
      ;
  return qr = o.slice(e, 1 < r ? 1 - r : void 0)
}
function br(e) {
  var t = e.keyCode;
  return "charCode"in e ? (e = e.charCode,
  e === 0 && t === 13 && (e = 13)) : e = t,
  e === 10 && (e = 13),
  32 <= e || e === 13 ? e : 0
}
function $r() {
  return !0
}
function Ca() {
  return !1
}
function je(e) {
  function t(n, r, o, i, l) {
      this._reactName = n,
      this._targetInst = o,
      this.type = r,
      this.nativeEvent = i,
      this.target = l,
      this.currentTarget = null;
      for (var s in e)
          e.hasOwnProperty(s) && (n = e[s],
          this[s] = n ? n(i) : i[s]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? $r : Ca,
      this.isPropagationStopped = Ca,
      this
  }
  return X(t.prototype, {
      preventDefault: function() {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          this.isDefaultPrevented = $r)
      },
      stopPropagation: function() {
          var n = this.nativeEvent;
          n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          this.isPropagationStopped = $r)
      },
      persist: function() {},
      isPersistent: $r
  }),
  t
}
var Pn = {
  eventPhase: 0,
  bubbles: 0,
  cancelable: 0,
  timeStamp: function(e) {
      return e.timeStamp || Date.now()
  },
  defaultPrevented: 0,
  isTrusted: 0
}, ys = je(Pn), xr = X({}, Pn, {
  view: 0,
  detail: 0
}), vp = je(xr), Ii, Ri, Mn, Ao = X({}, xr, {
  screenX: 0,
  screenY: 0,
  clientX: 0,
  clientY: 0,
  pageX: 0,
  pageY: 0,
  ctrlKey: 0,
  shiftKey: 0,
  altKey: 0,
  metaKey: 0,
  getModifierState: gs,
  button: 0,
  buttons: 0,
  relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
  },
  movementX: function(e) {
      return "movementX"in e ? e.movementX : (e !== Mn && (Mn && e.type === "mousemove" ? (Ii = e.screenX - Mn.screenX,
      Ri = e.screenY - Mn.screenY) : Ri = Ii = 0,
      Mn = e),
      Ii)
  },
  movementY: function(e) {
      return "movementY"in e ? e.movementY : Ri
  }
}), Ea = je(Ao), wp = X({}, Ao, {
  dataTransfer: 0
}), Sp = je(wp), kp = X({}, xr, {
  relatedTarget: 0
}), Mi = je(kp), xp = X({}, Pn, {
  animationName: 0,
  elapsedTime: 0,
  pseudoElement: 0
}), Cp = je(xp), Ep = X({}, Pn, {
  clipboardData: function(e) {
      return "clipboardData"in e ? e.clipboardData : window.clipboardData
  }
}), Np = je(Ep), Pp = X({}, Pn, {
  data: 0
}), Na = je(Pp), _p = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, zp = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Tp = {
  Alt: "altKey",
  Control: "ctrlKey",
  Meta: "metaKey",
  Shift: "shiftKey"
};
function Op(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Tp[e]) ? !!t[e] : !1
}
function gs() {
  return Op
}
var Lp = X({}, xr, {
  key: function(e) {
      if (e.key) {
          var t = _p[e.key] || e.key;
          if (t !== "Unidentified")
              return t
      }
      return e.type === "keypress" ? (e = br(e),
      e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? zp[e.keyCode] || "Unidentified" : ""
  },
  code: 0,
  location: 0,
  ctrlKey: 0,
  shiftKey: 0,
  altKey: 0,
  metaKey: 0,
  repeat: 0,
  locale: 0,
  getModifierState: gs,
  charCode: function(e) {
      return e.type === "keypress" ? br(e) : 0
  },
  keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
  },
  which: function(e) {
      return e.type === "keypress" ? br(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
  }
})
, jp = je(Lp)
, Ip = X({}, Ao, {
  pointerId: 0,
  width: 0,
  height: 0,
  pressure: 0,
  tangentialPressure: 0,
  tiltX: 0,
  tiltY: 0,
  twist: 0,
  pointerType: 0,
  isPrimary: 0
})
, Pa = je(Ip)
, Rp = X({}, xr, {
  touches: 0,
  targetTouches: 0,
  changedTouches: 0,
  altKey: 0,
  metaKey: 0,
  ctrlKey: 0,
  shiftKey: 0,
  getModifierState: gs
})
, Mp = je(Rp)
, $p = X({}, Pn, {
  propertyName: 0,
  elapsedTime: 0,
  pseudoElement: 0
})
, Dp = je($p)
, Fp = X({}, Ao, {
  deltaX: function(e) {
      return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
  },
  deltaY: function(e) {
      return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
  },
  deltaZ: 0,
  deltaMode: 0
})
, Bp = je(Fp)
, Ap = [9, 13, 27, 32]
, vs = ut && "CompositionEvent"in window
, Yn = null;
ut && "documentMode"in document && (Yn = document.documentMode);
var Up = ut && "TextEvent"in window && !Yn
, kc = ut && (!vs || Yn && 8 < Yn && 11 >= Yn)
, _a = " "
, za = !1;
function xc(e, t) {
  switch (e) {
  case "keyup":
      return Ap.indexOf(t.keyCode) !== -1;
  case "keydown":
      return t.keyCode !== 229;
  case "keypress":
  case "mousedown":
  case "focusout":
      return !0;
  default:
      return !1
  }
}
function Cc(e) {
  return e = e.detail,
  typeof e == "object" && "data"in e ? e.data : null
}
var bt = !1;
function Vp(e, t) {
  switch (e) {
  case "compositionend":
      return Cc(t);
  case "keypress":
      return t.which !== 32 ? null : (za = !0,
      _a);
  case "textInput":
      return e = t.data,
      e === _a && za ? null : e;
  default:
      return null
  }
}
function Hp(e, t) {
  if (bt)
      return e === "compositionend" || !vs && xc(e, t) ? (e = Sc(),
      qr = hs = wt = null,
      bt = !1,
      e) : null;
  switch (e) {
  case "paste":
      return null;
  case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
              return t.char;
          if (t.which)
              return String.fromCharCode(t.which)
      }
      return null;
  case "compositionend":
      return kc && t.locale !== "ko" ? null : t.data;
  default:
      return null
  }
}
var Wp = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
};
function Ta(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Wp[e.type] : t === "textarea"
}
function Ec(e, t, n, r) {
  tc(r),
  t = vo(t, "onChange"),
  0 < t.length && (n = new ys("onChange","change",null,n,r),
  e.push({
      event: n,
      listeners: t
  }))
}
var Xn = null
, ir = null;
function Qp(e) {
  Mc(e, 0)
}
function Uo(e) {
  var t = nn(e);
  if (Ku(t))
      return e
}
function Yp(e, t) {
  if (e === "change")
      return t
}
var Nc = !1;
if (ut) {
  var $i;
  if (ut) {
      var Di = "oninput"in document;
      if (!Di) {
          var Oa = document.createElement("div");
          Oa.setAttribute("oninput", "return;"),
          Di = typeof Oa.oninput == "function"
      }
      $i = Di
  } else
      $i = !1;
  Nc = $i && (!document.documentMode || 9 < document.documentMode)
}
function La() {
  Xn && (Xn.detachEvent("onpropertychange", Pc),
  ir = Xn = null)
}
function Pc(e) {
  if (e.propertyName === "value" && Uo(ir)) {
      var t = [];
      Ec(t, ir, e, cs(e)),
      ic(Qp, t)
  }
}
function Xp(e, t, n) {
  e === "focusin" ? (La(),
  Xn = t,
  ir = n,
  Xn.attachEvent("onpropertychange", Pc)) : e === "focusout" && La()
}
function Kp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Uo(ir)
}
function Gp(e, t) {
  if (e === "click")
      return Uo(t)
}
function Zp(e, t) {
  if (e === "input" || e === "change")
      return Uo(t)
}
function Jp(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Ge = typeof Object.is == "function" ? Object.is : Jp;
function lr(e, t) {
  if (Ge(e, t))
      return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
  var n = Object.keys(e)
    , r = Object.keys(t);
  if (n.length !== r.length)
      return !1;
  for (r = 0; r < n.length; r++) {
      var o = n[r];
      if (!nl.call(t, o) || !Ge(e[o], t[o]))
          return !1
  }
  return !0
}
function ja(e) {
  for (; e && e.firstChild; )
      e = e.firstChild;
  return e
}
function Ia(e, t) {
  var n = ja(e);
  e = 0;
  for (var r; n; ) {
      if (n.nodeType === 3) {
          if (r = e + n.textContent.length,
          e <= t && r >= t)
              return {
                  node: n,
                  offset: t - e
              };
          e = r
      }
      e: {
          for (; n; ) {
              if (n.nextSibling) {
                  n = n.nextSibling;
                  break e
              }
              n = n.parentNode
          }
          n = void 0
      }
      n = ja(n)
  }
}
function _c(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? _c(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function zc() {
  for (var e = window, t = co(); t instanceof e.HTMLIFrameElement; ) {
      try {
          var n = typeof t.contentWindow.location.href == "string"
      } catch {
          n = !1
      }
      if (n)
          e = t.contentWindow;
      else
          break;
      t = co(e.document)
  }
  return t
}
function ws(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function qp(e) {
  var t = zc()
    , n = e.focusedElem
    , r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && _c(n.ownerDocument.documentElement, n)) {
      if (r !== null && ws(n)) {
          if (t = r.start,
          e = r.end,
          e === void 0 && (e = t),
          "selectionStart"in n)
              n.selectionStart = t,
              n.selectionEnd = Math.min(e, n.value.length);
          else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
          e.getSelection) {
              e = e.getSelection();
              var o = n.textContent.length
                , i = Math.min(r.start, o);
              r = r.end === void 0 ? i : Math.min(r.end, o),
              !e.extend && i > r && (o = r,
              r = i,
              i = o),
              o = Ia(n, i);
              var l = Ia(n, r);
              o && l && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(),
              t.setStart(o.node, o.offset),
              e.removeAllRanges(),
              i > r ? (e.addRange(t),
              e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset),
              e.addRange(t)))
          }
      }
      for (t = [],
      e = n; e = e.parentNode; )
          e.nodeType === 1 && t.push({
              element: e,
              left: e.scrollLeft,
              top: e.scrollTop
          });
      for (typeof n.focus == "function" && n.focus(),
      n = 0; n < t.length; n++)
          e = t[n],
          e.element.scrollLeft = e.left,
          e.element.scrollTop = e.top
  }
}
var bp = ut && "documentMode"in document && 11 >= document.documentMode
, en = null
, kl = null
, Kn = null
, xl = !1;
function Ra(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  xl || en == null || en !== co(r) || (r = en,
  "selectionStart"in r && ws(r) ? r = {
      start: r.selectionStart,
      end: r.selectionEnd
  } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
  r = {
      anchorNode: r.anchorNode,
      anchorOffset: r.anchorOffset,
      focusNode: r.focusNode,
      focusOffset: r.focusOffset
  }),
  Kn && lr(Kn, r) || (Kn = r,
  r = vo(kl, "onSelect"),
  0 < r.length && (t = new ys("onSelect","select",null,t,n),
  e.push({
      event: t,
      listeners: r
  }),
  t.target = en)))
}
function Dr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(),
  n["Webkit" + e] = "webkit" + t,
  n["Moz" + e] = "moz" + t,
  n
}
var tn = {
  animationend: Dr("Animation", "AnimationEnd"),
  animationiteration: Dr("Animation", "AnimationIteration"),
  animationstart: Dr("Animation", "AnimationStart"),
  transitionend: Dr("Transition", "TransitionEnd")
}
, Fi = {}
, Tc = {};
ut && (Tc = document.createElement("div").style,
"AnimationEvent"in window || (delete tn.animationend.animation,
delete tn.animationiteration.animation,
delete tn.animationstart.animation),
"TransitionEvent"in window || delete tn.transitionend.transition);
function Vo(e) {
  if (Fi[e])
      return Fi[e];
  if (!tn[e])
      return e;
  var t = tn[e], n;
  for (n in t)
      if (t.hasOwnProperty(n) && n in Tc)
          return Fi[e] = t[n];
  return e
}
var Oc = Vo("animationend")
, Lc = Vo("animationiteration")
, jc = Vo("animationstart")
, Ic = Vo("transitionend")
, Rc = new Map
, Ma = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Lt(e, t) {
  Rc.set(e, t),
  Kt(t, [e])
}
for (var Bi = 0; Bi < Ma.length; Bi++) {
  var Ai = Ma[Bi]
    , e0 = Ai.toLowerCase()
    , t0 = Ai[0].toUpperCase() + Ai.slice(1);
  Lt(e0, "on" + t0)
}
Lt(Oc, "onAnimationEnd");
Lt(Lc, "onAnimationIteration");
Lt(jc, "onAnimationStart");
Lt("dblclick", "onDoubleClick");
Lt("focusin", "onFocus");
Lt("focusout", "onBlur");
Lt(Ic, "onTransitionEnd");
gn("onMouseEnter", ["mouseout", "mouseover"]);
gn("onMouseLeave", ["mouseout", "mouseover"]);
gn("onPointerEnter", ["pointerout", "pointerover"]);
gn("onPointerLeave", ["pointerout", "pointerover"]);
Kt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Kt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Kt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Kt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Kt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Kt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Hn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
, n0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Hn));
function $a(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n,
  ep(r, t, void 0, e),
  e.currentTarget = null
}
function Mc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
      var r = e[n]
        , o = r.event;
      r = r.listeners;
      e: {
          var i = void 0;
          if (t)
              for (var l = r.length - 1; 0 <= l; l--) {
                  var s = r[l]
                    , a = s.instance
                    , c = s.currentTarget;
                  if (s = s.listener,
                  a !== i && o.isPropagationStopped())
                      break e;
                  $a(o, s, c),
                  i = a
              }
          else
              for (l = 0; l < r.length; l++) {
                  if (s = r[l],
                  a = s.instance,
                  c = s.currentTarget,
                  s = s.listener,
                  a !== i && o.isPropagationStopped())
                      break e;
                  $a(o, s, c),
                  i = a
              }
      }
  }
  if (po)
      throw e = gl,
      po = !1,
      gl = null,
      e
}
function V(e, t) {
  var n = t[_l];
  n === void 0 && (n = t[_l] = new Set);
  var r = e + "__bubble";
  n.has(r) || ($c(t, e, 2, !1),
  n.add(r))
}
function Ui(e, t, n) {
  var r = 0;
  t && (r |= 4),
  $c(n, e, r, t)
}
var Fr = "_reactListening" + Math.random().toString(36).slice(2);
function sr(e) {
  if (!e[Fr]) {
      e[Fr] = !0,
      Hu.forEach(function(n) {
          n !== "selectionchange" && (n0.has(n) || Ui(n, !1, e),
          Ui(n, !0, e))
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Fr] || (t[Fr] = !0,
      Ui("selectionchange", !1, t))
  }
}
function $c(e, t, n, r) {
  switch (wc(t)) {
  case 1:
      var o = yp;
      break;
  case 4:
      o = gp;
      break;
  default:
      o = ms
  }
  n = o.bind(null, t, n, e),
  o = void 0,
  !yl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
  r ? o !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: o
  }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
      passive: o
  }) : e.addEventListener(t, n, !1)
}
function Vi(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
      e: for (; ; ) {
          if (r === null)
              return;
          var l = r.tag;
          if (l === 3 || l === 4) {
              var s = r.stateNode.containerInfo;
              if (s === o || s.nodeType === 8 && s.parentNode === o)
                  break;
              if (l === 4)
                  for (l = r.return; l !== null; ) {
                      var a = l.tag;
                      if ((a === 3 || a === 4) && (a = l.stateNode.containerInfo,
                      a === o || a.nodeType === 8 && a.parentNode === o))
                          return;
                      l = l.return
                  }
              for (; s !== null; ) {
                  if (l = Ft(s),
                  l === null)
                      return;
                  if (a = l.tag,
                  a === 5 || a === 6) {
                      r = i = l;
                      continue e
                  }
                  s = s.parentNode
              }
          }
          r = r.return
      }
  ic(function() {
      var c = i
        , h = cs(n)
        , m = [];
      e: {
          var p = Rc.get(e);
          if (p !== void 0) {
              var w = ys
                , v = e;
              switch (e) {
              case "keypress":
                  if (br(n) === 0)
                      break e;
              case "keydown":
              case "keyup":
                  w = jp;
                  break;
              case "focusin":
                  v = "focus",
                  w = Mi;
                  break;
              case "focusout":
                  v = "blur",
                  w = Mi;
                  break;
              case "beforeblur":
              case "afterblur":
                  w = Mi;
                  break;
              case "click":
                  if (n.button === 2)
                      break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                  w = Ea;
                  break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                  w = Sp;
                  break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                  w = Mp;
                  break;
              case Oc:
              case Lc:
              case jc:
                  w = Cp;
                  break;
              case Ic:
                  w = Dp;
                  break;
              case "scroll":
                  w = vp;
                  break;
              case "wheel":
                  w = Bp;
                  break;
              case "copy":
              case "cut":
              case "paste":
                  w = Np;
                  break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                  w = Pa
              }
              var y = (t & 4) !== 0
                , T = !y && e === "scroll"
                , f = y ? p !== null ? p + "Capture" : null : p;
              y = [];
              for (var u = c, d; u !== null; ) {
                  d = u;
                  var g = d.stateNode;
                  if (d.tag === 5 && g !== null && (d = g,
                  f !== null && (g = tr(u, f),
                  g != null && y.push(ar(u, g, d)))),
                  T)
                      break;
                  u = u.return
              }
              0 < y.length && (p = new w(p,v,null,n,h),
              m.push({
                  event: p,
                  listeners: y
              }))
          }
      }
      if (!(t & 7)) {
          e: {
              if (p = e === "mouseover" || e === "pointerover",
              w = e === "mouseout" || e === "pointerout",
              p && n !== ml && (v = n.relatedTarget || n.fromElement) && (Ft(v) || v[ct]))
                  break e;
              if ((w || p) && (p = h.window === h ? h : (p = h.ownerDocument) ? p.defaultView || p.parentWindow : window,
              w ? (v = n.relatedTarget || n.toElement,
              w = c,
              v = v ? Ft(v) : null,
              v !== null && (T = Gt(v),
              v !== T || v.tag !== 5 && v.tag !== 6) && (v = null)) : (w = null,
              v = c),
              w !== v)) {
                  if (y = Ea,
                  g = "onMouseLeave",
                  f = "onMouseEnter",
                  u = "mouse",
                  (e === "pointerout" || e === "pointerover") && (y = Pa,
                  g = "onPointerLeave",
                  f = "onPointerEnter",
                  u = "pointer"),
                  T = w == null ? p : nn(w),
                  d = v == null ? p : nn(v),
                  p = new y(g,u + "leave",w,n,h),
                  p.target = T,
                  p.relatedTarget = d,
                  g = null,
                  Ft(h) === c && (y = new y(f,u + "enter",v,n,h),
                  y.target = d,
                  y.relatedTarget = T,
                  g = y),
                  T = g,
                  w && v)
                      t: {
                          for (y = w,
                          f = v,
                          u = 0,
                          d = y; d; d = Zt(d))
                              u++;
                          for (d = 0,
                          g = f; g; g = Zt(g))
                              d++;
                          for (; 0 < u - d; )
                              y = Zt(y),
                              u--;
                          for (; 0 < d - u; )
                              f = Zt(f),
                              d--;
                          for (; u--; ) {
                              if (y === f || f !== null && y === f.alternate)
                                  break t;
                              y = Zt(y),
                              f = Zt(f)
                          }
                          y = null
                      }
                  else
                      y = null;
                  w !== null && Da(m, p, w, y, !1),
                  v !== null && T !== null && Da(m, T, v, y, !0)
              }
          }
          e: {
              if (p = c ? nn(c) : window,
              w = p.nodeName && p.nodeName.toLowerCase(),
              w === "select" || w === "input" && p.type === "file")
                  var C = Yp;
              else if (Ta(p))
                  if (Nc)
                      C = Zp;
                  else {
                      C = Kp;
                      var E = Xp
                  }
              else
                  (w = p.nodeName) && w.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (C = Gp);
              if (C && (C = C(e, c))) {
                  Ec(m, C, n, h);
                  break e
              }
              E && E(e, p, c),
              e === "focusout" && (E = p._wrapperState) && E.controlled && p.type === "number" && ul(p, "number", p.value)
          }
          switch (E = c ? nn(c) : window,
          e) {
          case "focusin":
              (Ta(E) || E.contentEditable === "true") && (en = E,
              kl = c,
              Kn = null);
              break;
          case "focusout":
              Kn = kl = en = null;
              break;
          case "mousedown":
              xl = !0;
              break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
              xl = !1,
              Ra(m, n, h);
              break;
          case "selectionchange":
              if (bp)
                  break;
          case "keydown":
          case "keyup":
              Ra(m, n, h)
          }
          var x;
          if (vs)
              e: {
                  switch (e) {
                  case "compositionstart":
                      var z = "onCompositionStart";
                      break e;
                  case "compositionend":
                      z = "onCompositionEnd";
                      break e;
                  case "compositionupdate":
                      z = "onCompositionUpdate";
                      break e
                  }
                  z = void 0
              }
          else
              bt ? xc(e, n) && (z = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (z = "onCompositionStart");
          z && (kc && n.locale !== "ko" && (bt || z !== "onCompositionStart" ? z === "onCompositionEnd" && bt && (x = Sc()) : (wt = h,
          hs = "value"in wt ? wt.value : wt.textContent,
          bt = !0)),
          E = vo(c, z),
          0 < E.length && (z = new Na(z,e,null,n,h),
          m.push({
              event: z,
              listeners: E
          }),
          x ? z.data = x : (x = Cc(n),
          x !== null && (z.data = x)))),
          (x = Up ? Vp(e, n) : Hp(e, n)) && (c = vo(c, "onBeforeInput"),
          0 < c.length && (h = new Na("onBeforeInput","beforeinput",null,n,h),
          m.push({
              event: h,
              listeners: c
          }),
          h.data = x))
      }
      Mc(m, t)
  })
}
function ar(e, t, n) {
  return {
      instance: e,
      listener: t,
      currentTarget: n
  }
}
function vo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
      var o = e
        , i = o.stateNode;
      o.tag === 5 && i !== null && (o = i,
      i = tr(e, n),
      i != null && r.unshift(ar(e, i, o)),
      i = tr(e, t),
      i != null && r.push(ar(e, i, o))),
      e = e.return
  }
  return r
}
function Zt(e) {
  if (e === null)
      return null;
  do
      e = e.return;
  while (e && e.tag !== 5);
  return e || null
}
function Da(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
      var s = n
        , a = s.alternate
        , c = s.stateNode;
      if (a !== null && a === r)
          break;
      s.tag === 5 && c !== null && (s = c,
      o ? (a = tr(n, i),
      a != null && l.unshift(ar(n, a, s))) : o || (a = tr(n, i),
      a != null && l.push(ar(n, a, s)))),
      n = n.return
  }
  l.length !== 0 && e.push({
      event: t,
      listeners: l
  })
}
var r0 = /\r\n?/g
, o0 = /\u0000|\uFFFD/g;
function Fa(e) {
  return (typeof e == "string" ? e : "" + e).replace(r0, `
`).replace(o0, "")
}
function Br(e, t, n) {
  if (t = Fa(t),
  Fa(e) !== t && n)
      throw Error(S(425))
}
function wo() {}
var Cl = null
, El = null;
function Nl(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Pl = typeof setTimeout == "function" ? setTimeout : void 0
, i0 = typeof clearTimeout == "function" ? clearTimeout : void 0
, Ba = typeof Promise == "function" ? Promise : void 0
, l0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ba < "u" ? function(e) {
  return Ba.resolve(null).then(e).catch(s0)
}
: Pl;
function s0(e) {
  setTimeout(function() {
      throw e
  })
}
function Hi(e, t) {
  var n = t
    , r = 0;
  do {
      var o = n.nextSibling;
      if (e.removeChild(n),
      o && o.nodeType === 8)
          if (n = o.data,
          n === "/$") {
              if (r === 0) {
                  e.removeChild(o),
                  or(t);
                  return
              }
              r--
          } else
              n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = o
  } while (n);
  or(t)
}
function Et(e) {
  for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3)
          break;
      if (t === 8) {
          if (t = e.data,
          t === "$" || t === "$!" || t === "$?")
              break;
          if (t === "/$")
              return null
      }
  }
  return e
}
function Aa(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
      if (e.nodeType === 8) {
          var n = e.data;
          if (n === "$" || n === "$!" || n === "$?") {
              if (t === 0)
                  return e;
              t--
          } else
              n === "/$" && t++
      }
      e = e.previousSibling
  }
  return null
}
var _n = Math.random().toString(36).slice(2)
, et = "__reactFiber$" + _n
, ur = "__reactProps$" + _n
, ct = "__reactContainer$" + _n
, _l = "__reactEvents$" + _n
, a0 = "__reactListeners$" + _n
, u0 = "__reactHandles$" + _n;
function Ft(e) {
  var t = e[et];
  if (t)
      return t;
  for (var n = e.parentNode; n; ) {
      if (t = n[ct] || n[et]) {
          if (n = t.alternate,
          t.child !== null || n !== null && n.child !== null)
              for (e = Aa(e); e !== null; ) {
                  if (n = e[et])
                      return n;
                  e = Aa(e)
              }
          return t
      }
      e = n,
      n = e.parentNode
  }
  return null
}
function Cr(e) {
  return e = e[et] || e[ct],
  !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function nn(e) {
  if (e.tag === 5 || e.tag === 6)
      return e.stateNode;
  throw Error(S(33))
}
function Ho(e) {
  return e[ur] || null
}
var zl = []
, rn = -1;
function jt(e) {
  return {
      current: e
  }
}
function H(e) {
  0 > rn || (e.current = zl[rn],
  zl[rn] = null,
  rn--)
}
function U(e, t) {
  rn++,
  zl[rn] = e.current,
  e.current = t
}
var Ot = {}
, he = jt(Ot)
, xe = jt(!1)
, Ht = Ot;
function vn(e, t) {
  var n = e.type.contextTypes;
  if (!n)
      return Ot;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n)
      o[i] = t[i];
  return r && (e = e.stateNode,
  e.__reactInternalMemoizedUnmaskedChildContext = t,
  e.__reactInternalMemoizedMaskedChildContext = o),
  o
}
function Ce(e) {
  return e = e.childContextTypes,
  e != null
}
function So() {
  H(xe),
  H(he)
}
function Ua(e, t, n) {
  if (he.current !== Ot)
      throw Error(S(168));
  U(he, t),
  U(xe, n)
}
function Dc(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes,
  typeof r.getChildContext != "function")
      return n;
  r = r.getChildContext();
  for (var o in r)
      if (!(o in t))
          throw Error(S(108, Xd(e) || "Unknown", o));
  return X({}, n, r)
}
function ko(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ot,
  Ht = he.current,
  U(he, e),
  U(xe, xe.current),
  !0
}
function Va(e, t, n) {
  var r = e.stateNode;
  if (!r)
      throw Error(S(169));
  n ? (e = Dc(e, t, Ht),
  r.__reactInternalMemoizedMergedChildContext = e,
  H(xe),
  H(he),
  U(he, e)) : H(xe),
  U(xe, n)
}
var it = null
, Wo = !1
, Wi = !1;
function Fc(e) {
  it === null ? it = [e] : it.push(e)
}
function c0(e) {
  Wo = !0,
  Fc(e)
}
function It() {
  if (!Wi && it !== null) {
      Wi = !0;
      var e = 0
        , t = F;
      try {
          var n = it;
          for (F = 1; e < n.length; e++) {
              var r = n[e];
              do
                  r = r(!0);
              while (r !== null)
          }
          it = null,
          Wo = !1
      } catch (o) {
          throw it !== null && (it = it.slice(e + 1)),
          uc(fs, It),
          o
      } finally {
          F = t,
          Wi = !1
      }
  }
  return null
}
var on = []
, ln = 0
, xo = null
, Co = 0
, Re = []
, Me = 0
, Wt = null
, lt = 1
, st = "";
function $t(e, t) {
  on[ln++] = Co,
  on[ln++] = xo,
  xo = e,
  Co = t
}
function Bc(e, t, n) {
  Re[Me++] = lt,
  Re[Me++] = st,
  Re[Me++] = Wt,
  Wt = e;
  var r = lt;
  e = st;
  var o = 32 - Xe(r) - 1;
  r &= ~(1 << o),
  n += 1;
  var i = 32 - Xe(t) + o;
  if (30 < i) {
      var l = o - o % 5;
      i = (r & (1 << l) - 1).toString(32),
      r >>= l,
      o -= l,
      lt = 1 << 32 - Xe(t) + o | n << o | r,
      st = i + e
  } else
      lt = 1 << i | n << o | r,
      st = e
}
function Ss(e) {
  e.return !== null && ($t(e, 1),
  Bc(e, 1, 0))
}
function ks(e) {
  for (; e === xo; )
      xo = on[--ln],
      on[ln] = null,
      Co = on[--ln],
      on[ln] = null;
  for (; e === Wt; )
      Wt = Re[--Me],
      Re[Me] = null,
      st = Re[--Me],
      Re[Me] = null,
      lt = Re[--Me],
      Re[Me] = null
}
var ze = null
, _e = null
, W = !1
, Ye = null;
function Ac(e, t) {
  var n = $e(5, null, null, 0);
  n.elementType = "DELETED",
  n.stateNode = t,
  n.return = e,
  t = e.deletions,
  t === null ? (e.deletions = [n],
  e.flags |= 16) : t.push(n)
}
function Ha(e, t) {
  switch (e.tag) {
  case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
      t !== null ? (e.stateNode = t,
      ze = e,
      _e = Et(t.firstChild),
      !0) : !1;
  case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
      t !== null ? (e.stateNode = t,
      ze = e,
      _e = null,
      !0) : !1;
  case 13:
      return t = t.nodeType !== 8 ? null : t,
      t !== null ? (n = Wt !== null ? {
          id: lt,
          overflow: st
      } : null,
      e.memoizedState = {
          dehydrated: t,
          treeContext: n,
          retryLane: 1073741824
      },
      n = $e(18, null, null, 0),
      n.stateNode = t,
      n.return = e,
      e.child = n,
      ze = e,
      _e = null,
      !0) : !1;
  default:
      return !1
  }
}
function Tl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Ol(e) {
  if (W) {
      var t = _e;
      if (t) {
          var n = t;
          if (!Ha(e, t)) {
              if (Tl(e))
                  throw Error(S(418));
              t = Et(n.nextSibling);
              var r = ze;
              t && Ha(e, t) ? Ac(r, n) : (e.flags = e.flags & -4097 | 2,
              W = !1,
              ze = e)
          }
      } else {
          if (Tl(e))
              throw Error(S(418));
          e.flags = e.flags & -4097 | 2,
          W = !1,
          ze = e
      }
  }
}
function Wa(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
      e = e.return;
  ze = e
}
function Ar(e) {
  if (e !== ze)
      return !1;
  if (!W)
      return Wa(e),
      W = !0,
      !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
  t = t !== "head" && t !== "body" && !Nl(e.type, e.memoizedProps)),
  t && (t = _e)) {
      if (Tl(e))
          throw Uc(),
          Error(S(418));
      for (; t; )
          Ac(e, t),
          t = Et(t.nextSibling)
  }
  if (Wa(e),
  e.tag === 13) {
      if (e = e.memoizedState,
      e = e !== null ? e.dehydrated : null,
      !e)
          throw Error(S(317));
      e: {
          for (e = e.nextSibling,
          t = 0; e; ) {
              if (e.nodeType === 8) {
                  var n = e.data;
                  if (n === "/$") {
                      if (t === 0) {
                          _e = Et(e.nextSibling);
                          break e
                      }
                      t--
                  } else
                      n !== "$" && n !== "$!" && n !== "$?" || t++
              }
              e = e.nextSibling
          }
          _e = null
      }
  } else
      _e = ze ? Et(e.stateNode.nextSibling) : null;
  return !0
}
function Uc() {
  for (var e = _e; e; )
      e = Et(e.nextSibling)
}
function wn() {
  _e = ze = null,
  W = !1
}
function xs(e) {
  Ye === null ? Ye = [e] : Ye.push(e)
}
var f0 = pt.ReactCurrentBatchConfig;
function $n(e, t, n) {
  if (e = n.ref,
  e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
          if (n = n._owner,
          n) {
              if (n.tag !== 1)
                  throw Error(S(309));
              var r = n.stateNode
          }
          if (!r)
              throw Error(S(147, e));
          var o = r
            , i = "" + e;
          return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(l) {
              var s = o.refs;
              l === null ? delete s[i] : s[i] = l
          }
          ,
          t._stringRef = i,
          t)
      }
      if (typeof e != "string")
          throw Error(S(284));
      if (!n._owner)
          throw Error(S(290, e))
  }
  return e
}
function Ur(e, t) {
  throw e = Object.prototype.toString.call(t),
  Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Qa(e) {
  var t = e._init;
  return t(e._payload)
}
function Vc(e) {
  function t(f, u) {
      if (e) {
          var d = f.deletions;
          d === null ? (f.deletions = [u],
          f.flags |= 16) : d.push(u)
      }
  }
  function n(f, u) {
      if (!e)
          return null;
      for (; u !== null; )
          t(f, u),
          u = u.sibling;
      return null
  }
  function r(f, u) {
      for (f = new Map; u !== null; )
          u.key !== null ? f.set(u.key, u) : f.set(u.index, u),
          u = u.sibling;
      return f
  }
  function o(f, u) {
      return f = zt(f, u),
      f.index = 0,
      f.sibling = null,
      f
  }
  function i(f, u, d) {
      return f.index = d,
      e ? (d = f.alternate,
      d !== null ? (d = d.index,
      d < u ? (f.flags |= 2,
      u) : d) : (f.flags |= 2,
      u)) : (f.flags |= 1048576,
      u)
  }
  function l(f) {
      return e && f.alternate === null && (f.flags |= 2),
      f
  }
  function s(f, u, d, g) {
      return u === null || u.tag !== 6 ? (u = Ji(d, f.mode, g),
      u.return = f,
      u) : (u = o(u, d),
      u.return = f,
      u)
  }
  function a(f, u, d, g) {
      var C = d.type;
      return C === qt ? h(f, u, d.props.children, g, d.key) : u !== null && (u.elementType === C || typeof C == "object" && C !== null && C.$$typeof === ht && Qa(C) === u.type) ? (g = o(u, d.props),
      g.ref = $n(f, u, d),
      g.return = f,
      g) : (g = lo(d.type, d.key, d.props, null, f.mode, g),
      g.ref = $n(f, u, d),
      g.return = f,
      g)
  }
  function c(f, u, d, g) {
      return u === null || u.tag !== 4 || u.stateNode.containerInfo !== d.containerInfo || u.stateNode.implementation !== d.implementation ? (u = qi(d, f.mode, g),
      u.return = f,
      u) : (u = o(u, d.children || []),
      u.return = f,
      u)
  }
  function h(f, u, d, g, C) {
      return u === null || u.tag !== 7 ? (u = Vt(d, f.mode, g, C),
      u.return = f,
      u) : (u = o(u, d),
      u.return = f,
      u)
  }
  function m(f, u, d) {
      if (typeof u == "string" && u !== "" || typeof u == "number")
          return u = Ji("" + u, f.mode, d),
          u.return = f,
          u;
      if (typeof u == "object" && u !== null) {
          switch (u.$$typeof) {
          case Or:
              return d = lo(u.type, u.key, u.props, null, f.mode, d),
              d.ref = $n(f, null, u),
              d.return = f,
              d;
          case Jt:
              return u = qi(u, f.mode, d),
              u.return = f,
              u;
          case ht:
              var g = u._init;
              return m(f, g(u._payload), d)
          }
          if (Un(u) || Ln(u))
              return u = Vt(u, f.mode, d, null),
              u.return = f,
              u;
          Ur(f, u)
      }
      return null
  }
  function p(f, u, d, g) {
      var C = u !== null ? u.key : null;
      if (typeof d == "string" && d !== "" || typeof d == "number")
          return C !== null ? null : s(f, u, "" + d, g);
      if (typeof d == "object" && d !== null) {
          switch (d.$$typeof) {
          case Or:
              return d.key === C ? a(f, u, d, g) : null;
          case Jt:
              return d.key === C ? c(f, u, d, g) : null;
          case ht:
              return C = d._init,
              p(f, u, C(d._payload), g)
          }
          if (Un(d) || Ln(d))
              return C !== null ? null : h(f, u, d, g, null);
          Ur(f, d)
      }
      return null
  }
  function w(f, u, d, g, C) {
      if (typeof g == "string" && g !== "" || typeof g == "number")
          return f = f.get(d) || null,
          s(u, f, "" + g, C);
      if (typeof g == "object" && g !== null) {
          switch (g.$$typeof) {
          case Or:
              return f = f.get(g.key === null ? d : g.key) || null,
              a(u, f, g, C);
          case Jt:
              return f = f.get(g.key === null ? d : g.key) || null,
              c(u, f, g, C);
          case ht:
              var E = g._init;
              return w(f, u, d, E(g._payload), C)
          }
          if (Un(g) || Ln(g))
              return f = f.get(d) || null,
              h(u, f, g, C, null);
          Ur(u, g)
      }
      return null
  }
  function v(f, u, d, g) {
      for (var C = null, E = null, x = u, z = u = 0, G = null; x !== null && z < d.length; z++) {
          x.index > z ? (G = x,
          x = null) : G = x.sibling;
          var I = p(f, x, d[z], g);
          if (I === null) {
              x === null && (x = G);
              break
          }
          e && x && I.alternate === null && t(f, x),
          u = i(I, u, z),
          E === null ? C = I : E.sibling = I,
          E = I,
          x = G
      }
      if (z === d.length)
          return n(f, x),
          W && $t(f, z),
          C;
      if (x === null) {
          for (; z < d.length; z++)
              x = m(f, d[z], g),
              x !== null && (u = i(x, u, z),
              E === null ? C = x : E.sibling = x,
              E = x);
          return W && $t(f, z),
          C
      }
      for (x = r(f, x); z < d.length; z++)
          G = w(x, f, z, d[z], g),
          G !== null && (e && G.alternate !== null && x.delete(G.key === null ? z : G.key),
          u = i(G, u, z),
          E === null ? C = G : E.sibling = G,
          E = G);
      return e && x.forEach(function(Ve) {
          return t(f, Ve)
      }),
      W && $t(f, z),
      C
  }
  function y(f, u, d, g) {
      var C = Ln(d);
      if (typeof C != "function")
          throw Error(S(150));
      if (d = C.call(d),
      d == null)
          throw Error(S(151));
      for (var E = C = null, x = u, z = u = 0, G = null, I = d.next(); x !== null && !I.done; z++,
      I = d.next()) {
          x.index > z ? (G = x,
          x = null) : G = x.sibling;
          var Ve = p(f, x, I.value, g);
          if (Ve === null) {
              x === null && (x = G);
              break
          }
          e && x && Ve.alternate === null && t(f, x),
          u = i(Ve, u, z),
          E === null ? C = Ve : E.sibling = Ve,
          E = Ve,
          x = G
      }
      if (I.done)
          return n(f, x),
          W && $t(f, z),
          C;
      if (x === null) {
          for (; !I.done; z++,
          I = d.next())
              I = m(f, I.value, g),
              I !== null && (u = i(I, u, z),
              E === null ? C = I : E.sibling = I,
              E = I);
          return W && $t(f, z),
          C
      }
      for (x = r(f, x); !I.done; z++,
      I = d.next())
          I = w(x, f, z, I.value, g),
          I !== null && (e && I.alternate !== null && x.delete(I.key === null ? z : I.key),
          u = i(I, u, z),
          E === null ? C = I : E.sibling = I,
          E = I);
      return e && x.forEach(function(Tn) {
          return t(f, Tn)
      }),
      W && $t(f, z),
      C
  }
  function T(f, u, d, g) {
      if (typeof d == "object" && d !== null && d.type === qt && d.key === null && (d = d.props.children),
      typeof d == "object" && d !== null) {
          switch (d.$$typeof) {
          case Or:
              e: {
                  for (var C = d.key, E = u; E !== null; ) {
                      if (E.key === C) {
                          if (C = d.type,
                          C === qt) {
                              if (E.tag === 7) {
                                  n(f, E.sibling),
                                  u = o(E, d.props.children),
                                  u.return = f,
                                  f = u;
                                  break e
                              }
                          } else if (E.elementType === C || typeof C == "object" && C !== null && C.$$typeof === ht && Qa(C) === E.type) {
                              n(f, E.sibling),
                              u = o(E, d.props),
                              u.ref = $n(f, E, d),
                              u.return = f,
                              f = u;
                              break e
                          }
                          n(f, E);
                          break
                      } else
                          t(f, E);
                      E = E.sibling
                  }
                  d.type === qt ? (u = Vt(d.props.children, f.mode, g, d.key),
                  u.return = f,
                  f = u) : (g = lo(d.type, d.key, d.props, null, f.mode, g),
                  g.ref = $n(f, u, d),
                  g.return = f,
                  f = g)
              }
              return l(f);
          case Jt:
              e: {
                  for (E = d.key; u !== null; ) {
                      if (u.key === E)
                          if (u.tag === 4 && u.stateNode.containerInfo === d.containerInfo && u.stateNode.implementation === d.implementation) {
                              n(f, u.sibling),
                              u = o(u, d.children || []),
                              u.return = f,
                              f = u;
                              break e
                          } else {
                              n(f, u);
                              break
                          }
                      else
                          t(f, u);
                      u = u.sibling
                  }
                  u = qi(d, f.mode, g),
                  u.return = f,
                  f = u
              }
              return l(f);
          case ht:
              return E = d._init,
              T(f, u, E(d._payload), g)
          }
          if (Un(d))
              return v(f, u, d, g);
          if (Ln(d))
              return y(f, u, d, g);
          Ur(f, d)
      }
      return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d,
      u !== null && u.tag === 6 ? (n(f, u.sibling),
      u = o(u, d),
      u.return = f,
      f = u) : (n(f, u),
      u = Ji(d, f.mode, g),
      u.return = f,
      f = u),
      l(f)) : n(f, u)
  }
  return T
}
var Sn = Vc(!0)
, Hc = Vc(!1)
, Eo = jt(null)
, No = null
, sn = null
, Cs = null;
function Es() {
  Cs = sn = No = null
}
function Ns(e) {
  var t = Eo.current;
  H(Eo),
  e._currentValue = t
}
function Ll(e, t, n) {
  for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t,
      r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
          break;
      e = e.return
  }
}
function mn(e, t) {
  No = e,
  Cs = sn = null,
  e = e.dependencies,
  e !== null && e.firstContext !== null && (e.lanes & t && (ke = !0),
  e.firstContext = null)
}
function Be(e) {
  var t = e._currentValue;
  if (Cs !== e)
      if (e = {
          context: e,
          memoizedValue: t,
          next: null
      },
      sn === null) {
          if (No === null)
              throw Error(S(308));
          sn = e,
          No.dependencies = {
              lanes: 0,
              firstContext: e
          }
      } else
          sn = sn.next = e;
  return t
}
var Bt = null;
function Ps(e) {
  Bt === null ? Bt = [e] : Bt.push(e)
}
function Wc(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n,
  Ps(t)) : (n.next = o.next,
  o.next = n),
  t.interleaved = n,
  ft(e, r)
}
function ft(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t),
  n = e,
  e = e.return; e !== null; )
      e.childLanes |= t,
      n = e.alternate,
      n !== null && (n.childLanes |= t),
      n = e,
      e = e.return;
  return n.tag === 3 ? n.stateNode : null
}
var yt = !1;
function _s(e) {
  e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
          pending: null,
          interleaved: null,
          lanes: 0
      },
      effects: null
  }
}
function Qc(e, t) {
  e = e.updateQueue,
  t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      effects: e.effects
  })
}
function at(e, t) {
  return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null
  }
}
function Nt(e, t, n) {
  var r = e.updateQueue;
  if (r === null)
      return null;
  if (r = r.shared,
  M & 2) {
      var o = r.pending;
      return o === null ? t.next = t : (t.next = o.next,
      o.next = t),
      r.pending = t,
      ft(e, n)
  }
  return o = r.interleaved,
  o === null ? (t.next = t,
  Ps(r)) : (t.next = o.next,
  o.next = t),
  r.interleaved = t,
  ft(e, n)
}
function eo(e, t, n) {
  if (t = t.updateQueue,
  t !== null && (t = t.shared,
  (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes,
      n |= r,
      t.lanes = n,
      ds(e, n)
  }
}
function Ya(e, t) {
  var n = e.updateQueue
    , r = e.alternate;
  if (r !== null && (r = r.updateQueue,
  n === r)) {
      var o = null
        , i = null;
      if (n = n.firstBaseUpdate,
      n !== null) {
          do {
              var l = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null
              };
              i === null ? o = i = l : i = i.next = l,
              n = n.next
          } while (n !== null);
          i === null ? o = i = t : i = i.next = t
      } else
          o = i = t;
      n = {
          baseState: r.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: i,
          shared: r.shared,
          effects: r.effects
      },
      e.updateQueue = n;
      return
  }
  e = n.lastBaseUpdate,
  e === null ? n.firstBaseUpdate = t : e.next = t,
  n.lastBaseUpdate = t
}
function Po(e, t, n, r) {
  var o = e.updateQueue;
  yt = !1;
  var i = o.firstBaseUpdate
    , l = o.lastBaseUpdate
    , s = o.shared.pending;
  if (s !== null) {
      o.shared.pending = null;
      var a = s
        , c = a.next;
      a.next = null,
      l === null ? i = c : l.next = c,
      l = a;
      var h = e.alternate;
      h !== null && (h = h.updateQueue,
      s = h.lastBaseUpdate,
      s !== l && (s === null ? h.firstBaseUpdate = c : s.next = c,
      h.lastBaseUpdate = a))
  }
  if (i !== null) {
      var m = o.baseState;
      l = 0,
      h = c = a = null,
      s = i;
      do {
          var p = s.lane
            , w = s.eventTime;
          if ((r & p) === p) {
              h !== null && (h = h.next = {
                  eventTime: w,
                  lane: 0,
                  tag: s.tag,
                  payload: s.payload,
                  callback: s.callback,
                  next: null
              });
              e: {
                  var v = e
                    , y = s;
                  switch (p = t,
                  w = n,
                  y.tag) {
                  case 1:
                      if (v = y.payload,
                      typeof v == "function") {
                          m = v.call(w, m, p);
                          break e
                      }
                      m = v;
                      break e;
                  case 3:
                      v.flags = v.flags & -65537 | 128;
                  case 0:
                      if (v = y.payload,
                      p = typeof v == "function" ? v.call(w, m, p) : v,
                      p == null)
                          break e;
                      m = X({}, m, p);
                      break e;
                  case 2:
                      yt = !0
                  }
              }
              s.callback !== null && s.lane !== 0 && (e.flags |= 64,
              p = o.effects,
              p === null ? o.effects = [s] : p.push(s))
          } else
              w = {
                  eventTime: w,
                  lane: p,
                  tag: s.tag,
                  payload: s.payload,
                  callback: s.callback,
                  next: null
              },
              h === null ? (c = h = w,
              a = m) : h = h.next = w,
              l |= p;
          if (s = s.next,
          s === null) {
              if (s = o.shared.pending,
              s === null)
                  break;
              p = s,
              s = p.next,
              p.next = null,
              o.lastBaseUpdate = p,
              o.shared.pending = null
          }
      } while (!0);
      if (h === null && (a = m),
      o.baseState = a,
      o.firstBaseUpdate = c,
      o.lastBaseUpdate = h,
      t = o.shared.interleaved,
      t !== null) {
          o = t;
          do
              l |= o.lane,
              o = o.next;
          while (o !== t)
      } else
          i === null && (o.shared.lanes = 0);
      Yt |= l,
      e.lanes = l,
      e.memoizedState = m
  }
}
function Xa(e, t, n) {
  if (e = t.effects,
  t.effects = null,
  e !== null)
      for (t = 0; t < e.length; t++) {
          var r = e[t]
            , o = r.callback;
          if (o !== null) {
              if (r.callback = null,
              r = n,
              typeof o != "function")
                  throw Error(S(191, o));
              o.call(r)
          }
      }
}
var Er = {}
, nt = jt(Er)
, cr = jt(Er)
, fr = jt(Er);
function At(e) {
  if (e === Er)
      throw Error(S(174));
  return e
}
function zs(e, t) {
  switch (U(fr, t),
  U(cr, e),
  U(nt, Er),
  e = t.nodeType,
  e) {
  case 9:
  case 11:
      t = (t = t.documentElement) ? t.namespaceURI : fl(null, "");
      break;
  default:
      e = e === 8 ? t.parentNode : t,
      t = e.namespaceURI || null,
      e = e.tagName,
      t = fl(t, e)
  }
  H(nt),
  U(nt, t)
}
function kn() {
  H(nt),
  H(cr),
  H(fr)
}
function Yc(e) {
  At(fr.current);
  var t = At(nt.current)
    , n = fl(t, e.type);
  t !== n && (U(cr, e),
  U(nt, n))
}
function Ts(e) {
  cr.current === e && (H(nt),
  H(cr))
}
var Q = jt(0);
function _o(e) {
  for (var t = e; t !== null; ) {
      if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && (n = n.dehydrated,
          n === null || n.data === "$?" || n.data === "$!"))
              return t
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if (t.flags & 128)
              return t
      } else if (t.child !== null) {
          t.child.return = t,
          t = t.child;
          continue
      }
      if (t === e)
          break;
      for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
              return null;
          t = t.return
      }
      t.sibling.return = t.return,
      t = t.sibling
  }
  return null
}
var Qi = [];
function Os() {
  for (var e = 0; e < Qi.length; e++)
      Qi[e]._workInProgressVersionPrimary = null;
  Qi.length = 0
}
var to = pt.ReactCurrentDispatcher
, Yi = pt.ReactCurrentBatchConfig
, Qt = 0
, Y = null
, ee = null
, oe = null
, zo = !1
, Gn = !1
, dr = 0
, d0 = 0;
function fe() {
  throw Error(S(321))
}
function Ls(e, t) {
  if (t === null)
      return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
      if (!Ge(e[n], t[n]))
          return !1;
  return !0
}
function js(e, t, n, r, o, i) {
  if (Qt = i,
  Y = t,
  t.memoizedState = null,
  t.updateQueue = null,
  t.lanes = 0,
  to.current = e === null || e.memoizedState === null ? y0 : g0,
  e = n(r, o),
  Gn) {
      i = 0;
      do {
          if (Gn = !1,
          dr = 0,
          25 <= i)
              throw Error(S(301));
          i += 1,
          oe = ee = null,
          t.updateQueue = null,
          to.current = v0,
          e = n(r, o)
      } while (Gn)
  }
  if (to.current = To,
  t = ee !== null && ee.next !== null,
  Qt = 0,
  oe = ee = Y = null,
  zo = !1,
  t)
      throw Error(S(300));
  return e
}
function Is() {
  var e = dr !== 0;
  return dr = 0,
  e
}
function Je() {
  var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
  };
  return oe === null ? Y.memoizedState = oe = e : oe = oe.next = e,
  oe
}
function Ae() {
  if (ee === null) {
      var e = Y.alternate;
      e = e !== null ? e.memoizedState : null
  } else
      e = ee.next;
  var t = oe === null ? Y.memoizedState : oe.next;
  if (t !== null)
      oe = t,
      ee = e;
  else {
      if (e === null)
          throw Error(S(310));
      ee = e,
      e = {
          memoizedState: ee.memoizedState,
          baseState: ee.baseState,
          baseQueue: ee.baseQueue,
          queue: ee.queue,
          next: null
      },
      oe === null ? Y.memoizedState = oe = e : oe = oe.next = e
  }
  return oe
}
function pr(e, t) {
  return typeof t == "function" ? t(e) : t
}
function Xi(e) {
  var t = Ae()
    , n = t.queue;
  if (n === null)
      throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = ee
    , o = r.baseQueue
    , i = n.pending;
  if (i !== null) {
      if (o !== null) {
          var l = o.next;
          o.next = i.next,
          i.next = l
      }
      r.baseQueue = o = i,
      n.pending = null
  }
  if (o !== null) {
      i = o.next,
      r = r.baseState;
      var s = l = null
        , a = null
        , c = i;
      do {
          var h = c.lane;
          if ((Qt & h) === h)
              a !== null && (a = a.next = {
                  lane: 0,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null
              }),
              r = c.hasEagerState ? c.eagerState : e(r, c.action);
          else {
              var m = {
                  lane: h,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null
              };
              a === null ? (s = a = m,
              l = r) : a = a.next = m,
              Y.lanes |= h,
              Yt |= h
          }
          c = c.next
      } while (c !== null && c !== i);
      a === null ? l = r : a.next = s,
      Ge(r, t.memoizedState) || (ke = !0),
      t.memoizedState = r,
      t.baseState = l,
      t.baseQueue = a,
      n.lastRenderedState = r
  }
  if (e = n.interleaved,
  e !== null) {
      o = e;
      do
          i = o.lane,
          Y.lanes |= i,
          Yt |= i,
          o = o.next;
      while (o !== e)
  } else
      o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch]
}
function Ki(e) {
  var t = Ae()
    , n = t.queue;
  if (n === null)
      throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch
    , o = n.pending
    , i = t.memoizedState;
  if (o !== null) {
      n.pending = null;
      var l = o = o.next;
      do
          i = e(i, l.action),
          l = l.next;
      while (l !== o);
      Ge(i, t.memoizedState) || (ke = !0),
      t.memoizedState = i,
      t.baseQueue === null && (t.baseState = i),
      n.lastRenderedState = i
  }
  return [i, r]
}
function Xc() {}
function Kc(e, t) {
  var n = Y
    , r = Ae()
    , o = t()
    , i = !Ge(r.memoizedState, o);
  if (i && (r.memoizedState = o,
  ke = !0),
  r = r.queue,
  Rs(Jc.bind(null, n, r, e), [e]),
  r.getSnapshot !== t || i || oe !== null && oe.memoizedState.tag & 1) {
      if (n.flags |= 2048,
      mr(9, Zc.bind(null, n, r, o, t), void 0, null),
      ie === null)
          throw Error(S(349));
      Qt & 30 || Gc(n, t, o)
  }
  return o
}
function Gc(e, t, n) {
  e.flags |= 16384,
  e = {
      getSnapshot: t,
      value: n
  },
  t = Y.updateQueue,
  t === null ? (t = {
      lastEffect: null,
      stores: null
  },
  Y.updateQueue = t,
  t.stores = [e]) : (n = t.stores,
  n === null ? t.stores = [e] : n.push(e))
}
function Zc(e, t, n, r) {
  t.value = n,
  t.getSnapshot = r,
  qc(t) && bc(e)
}
function Jc(e, t, n) {
  return n(function() {
      qc(t) && bc(e)
  })
}
function qc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
      var n = t();
      return !Ge(e, n)
  } catch {
      return !0
  }
}
function bc(e) {
  var t = ft(e, 1);
  t !== null && Ke(t, e, 1, -1)
}
function Ka(e) {
  var t = Je();
  return typeof e == "function" && (e = e()),
  t.memoizedState = t.baseState = e,
  e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: pr,
      lastRenderedState: e
  },
  t.queue = e,
  e = e.dispatch = h0.bind(null, Y, e),
  [t.memoizedState, e]
}
function mr(e, t, n, r) {
  return e = {
      tag: e,
      create: t,
      destroy: n,
      deps: r,
      next: null
  },
  t = Y.updateQueue,
  t === null ? (t = {
      lastEffect: null,
      stores: null
  },
  Y.updateQueue = t,
  t.lastEffect = e.next = e) : (n = t.lastEffect,
  n === null ? t.lastEffect = e.next = e : (r = n.next,
  n.next = e,
  e.next = r,
  t.lastEffect = e)),
  e
}
function ef() {
  return Ae().memoizedState
}
function no(e, t, n, r) {
  var o = Je();
  Y.flags |= e,
  o.memoizedState = mr(1 | t, n, void 0, r === void 0 ? null : r)
}
function Qo(e, t, n, r) {
  var o = Ae();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ee !== null) {
      var l = ee.memoizedState;
      if (i = l.destroy,
      r !== null && Ls(r, l.deps)) {
          o.memoizedState = mr(t, n, i, r);
          return
      }
  }
  Y.flags |= e,
  o.memoizedState = mr(1 | t, n, i, r)
}
function Ga(e, t) {
  return no(8390656, 8, e, t)
}
function Rs(e, t) {
  return Qo(2048, 8, e, t)
}
function tf(e, t) {
  return Qo(4, 2, e, t)
}
function nf(e, t) {
  return Qo(4, 4, e, t)
}
function rf(e, t) {
  if (typeof t == "function")
      return e = e(),
      t(e),
      function() {
          t(null)
      }
      ;
  if (t != null)
      return e = e(),
      t.current = e,
      function() {
          t.current = null
      }
}
function of(e, t, n) {
  return n = n != null ? n.concat([e]) : null,
  Qo(4, 4, rf.bind(null, t, e), n)
}
function Ms() {}
function lf(e, t) {
  var n = Ae();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ls(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
  e)
}
function sf(e, t) {
  var n = Ae();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ls(t, r[1]) ? r[0] : (e = e(),
  n.memoizedState = [e, t],
  e)
}
function af(e, t, n) {
  return Qt & 21 ? (Ge(n, t) || (n = dc(),
  Y.lanes |= n,
  Yt |= n,
  e.baseState = !0),
  t) : (e.baseState && (e.baseState = !1,
  ke = !0),
  e.memoizedState = n)
}
function p0(e, t) {
  var n = F;
  F = n !== 0 && 4 > n ? n : 4,
  e(!0);
  var r = Yi.transition;
  Yi.transition = {};
  try {
      e(!1),
      t()
  } finally {
      F = n,
      Yi.transition = r
  }
}
function uf() {
  return Ae().memoizedState
}
function m0(e, t, n) {
  var r = _t(e);
  if (n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
  },
  cf(e))
      ff(t, n);
  else if (n = Wc(e, t, n, r),
  n !== null) {
      var o = ge();
      Ke(n, e, r, o),
      df(n, t, r)
  }
}
function h0(e, t, n) {
  var r = _t(e)
    , o = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
  };
  if (cf(e))
      ff(t, o);
  else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
      i !== null))
          try {
              var l = t.lastRenderedState
                , s = i(l, n);
              if (o.hasEagerState = !0,
              o.eagerState = s,
              Ge(s, l)) {
                  var a = t.interleaved;
                  a === null ? (o.next = o,
                  Ps(t)) : (o.next = a.next,
                  a.next = o),
                  t.interleaved = o;
                  return
              }
          } catch {} finally {}
      n = Wc(e, t, o, r),
      n !== null && (o = ge(),
      Ke(n, e, r, o),
      df(n, t, r))
  }
}
function cf(e) {
  var t = e.alternate;
  return e === Y || t !== null && t === Y
}
function ff(e, t) {
  Gn = zo = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next,
  n.next = t),
  e.pending = t
}
function df(e, t, n) {
  if (n & 4194240) {
      var r = t.lanes;
      r &= e.pendingLanes,
      n |= r,
      t.lanes = n,
      ds(e, n)
  }
}
var To = {
  readContext: Be,
  useCallback: fe,
  useContext: fe,
  useEffect: fe,
  useImperativeHandle: fe,
  useInsertionEffect: fe,
  useLayoutEffect: fe,
  useMemo: fe,
  useReducer: fe,
  useRef: fe,
  useState: fe,
  useDebugValue: fe,
  useDeferredValue: fe,
  useTransition: fe,
  useMutableSource: fe,
  useSyncExternalStore: fe,
  useId: fe,
  unstable_isNewReconciler: !1
}
, y0 = {
  readContext: Be,
  useCallback: function(e, t) {
      return Je().memoizedState = [e, t === void 0 ? null : t],
      e
  },
  useContext: Be,
  useEffect: Ga,
  useImperativeHandle: function(e, t, n) {
      return n = n != null ? n.concat([e]) : null,
      no(4194308, 4, rf.bind(null, t, e), n)
  },
  useLayoutEffect: function(e, t) {
      return no(4194308, 4, e, t)
  },
  useInsertionEffect: function(e, t) {
      return no(4, 2, e, t)
  },
  useMemo: function(e, t) {
      var n = Je();
      return t = t === void 0 ? null : t,
      e = e(),
      n.memoizedState = [e, t],
      e
  },
  useReducer: function(e, t, n) {
      var r = Je();
      return t = n !== void 0 ? n(t) : t,
      r.memoizedState = r.baseState = t,
      e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t
      },
      r.queue = e,
      e = e.dispatch = m0.bind(null, Y, e),
      [r.memoizedState, e]
  },
  useRef: function(e) {
      var t = Je();
      return e = {
          current: e
      },
      t.memoizedState = e
  },
  useState: Ka,
  useDebugValue: Ms,
  useDeferredValue: function(e) {
      return Je().memoizedState = e
  },
  useTransition: function() {
      var e = Ka(!1)
        , t = e[0];
      return e = p0.bind(null, e[1]),
      Je().memoizedState = e,
      [t, e]
  },
  useMutableSource: function() {},
  useSyncExternalStore: function(e, t, n) {
      var r = Y
        , o = Je();
      if (W) {
          if (n === void 0)
              throw Error(S(407));
          n = n()
      } else {
          if (n = t(),
          ie === null)
              throw Error(S(349));
          Qt & 30 || Gc(r, t, n)
      }
      o.memoizedState = n;
      var i = {
          value: n,
          getSnapshot: t
      };
      return o.queue = i,
      Ga(Jc.bind(null, r, i, e), [e]),
      r.flags |= 2048,
      mr(9, Zc.bind(null, r, i, n, t), void 0, null),
      n
  },
  useId: function() {
      var e = Je()
        , t = ie.identifierPrefix;
      if (W) {
          var n = st
            , r = lt;
          n = (r & ~(1 << 32 - Xe(r) - 1)).toString(32) + n,
          t = ":" + t + "R" + n,
          n = dr++,
          0 < n && (t += "H" + n.toString(32)),
          t += ":"
      } else
          n = d0++,
          t = ":" + t + "r" + n.toString(32) + ":";
      return e.memoizedState = t
  },
  unstable_isNewReconciler: !1
}
, g0 = {
  readContext: Be,
  useCallback: lf,
  useContext: Be,
  useEffect: Rs,
  useImperativeHandle: of,
  useInsertionEffect: tf,
  useLayoutEffect: nf,
  useMemo: sf,
  useReducer: Xi,
  useRef: ef,
  useState: function() {
      return Xi(pr)
  },
  useDebugValue: Ms,
  useDeferredValue: function(e) {
      var t = Ae();
      return af(t, ee.memoizedState, e)
  },
  useTransition: function() {
      var e = Xi(pr)[0]
        , t = Ae().memoizedState;
      return [e, t]
  },
  useMutableSource: Xc,
  useSyncExternalStore: Kc,
  useId: uf,
  unstable_isNewReconciler: !1
}
, v0 = {
  readContext: Be,
  useCallback: lf,
  useContext: Be,
  useEffect: Rs,
  useImperativeHandle: of,
  useInsertionEffect: tf,
  useLayoutEffect: nf,
  useMemo: sf,
  useReducer: Ki,
  useRef: ef,
  useState: function() {
      return Ki(pr)
  },
  useDebugValue: Ms,
  useDeferredValue: function(e) {
      var t = Ae();
      return ee === null ? t.memoizedState = e : af(t, ee.memoizedState, e)
  },
  useTransition: function() {
      var e = Ki(pr)[0]
        , t = Ae().memoizedState;
      return [e, t]
  },
  useMutableSource: Xc,
  useSyncExternalStore: Kc,
  useId: uf,
  unstable_isNewReconciler: !1
};
function We(e, t) {
  if (e && e.defaultProps) {
      t = X({}, t),
      e = e.defaultProps;
      for (var n in e)
          t[n] === void 0 && (t[n] = e[n]);
      return t
  }
  return t
}
function jl(e, t, n, r) {
  t = e.memoizedState,
  n = n(r, t),
  n = n == null ? t : X({}, t, n),
  e.memoizedState = n,
  e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Yo = {
  isMounted: function(e) {
      return (e = e._reactInternals) ? Gt(e) === e : !1
  },
  enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var r = ge()
        , o = _t(e)
        , i = at(r, o);
      i.payload = t,
      n != null && (i.callback = n),
      t = Nt(e, i, o),
      t !== null && (Ke(t, e, o, r),
      eo(t, e, o))
  },
  enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var r = ge()
        , o = _t(e)
        , i = at(r, o);
      i.tag = 1,
      i.payload = t,
      n != null && (i.callback = n),
      t = Nt(e, i, o),
      t !== null && (Ke(t, e, o, r),
      eo(t, e, o))
  },
  enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = ge()
        , r = _t(e)
        , o = at(n, r);
      o.tag = 2,
      t != null && (o.callback = t),
      t = Nt(e, o, r),
      t !== null && (Ke(t, e, r, n),
      eo(t, e, r))
  }
};
function Za(e, t, n, r, o, i, l) {
  return e = e.stateNode,
  typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !lr(n, r) || !lr(o, i) : !0
}
function pf(e, t, n) {
  var r = !1
    , o = Ot
    , i = t.contextType;
  return typeof i == "object" && i !== null ? i = Be(i) : (o = Ce(t) ? Ht : he.current,
  r = t.contextTypes,
  i = (r = r != null) ? vn(e, o) : Ot),
  t = new t(n,i),
  e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
  t.updater = Yo,
  e.stateNode = t,
  t._reactInternals = e,
  r && (e = e.stateNode,
  e.__reactInternalMemoizedUnmaskedChildContext = o,
  e.__reactInternalMemoizedMaskedChildContext = i),
  t
}
function Ja(e, t, n, r) {
  e = t.state,
  typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
  typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
  t.state !== e && Yo.enqueueReplaceState(t, t.state, null)
}
function Il(e, t, n, r) {
  var o = e.stateNode;
  o.props = n,
  o.state = e.memoizedState,
  o.refs = {},
  _s(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = Be(i) : (i = Ce(t) ? Ht : he.current,
  o.context = vn(e, i)),
  o.state = e.memoizedState,
  i = t.getDerivedStateFromProps,
  typeof i == "function" && (jl(e, t, i, n),
  o.state = e.memoizedState),
  typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
  typeof o.componentWillMount == "function" && o.componentWillMount(),
  typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
  t !== o.state && Yo.enqueueReplaceState(o, o.state, null),
  Po(e, n, o, r),
  o.state = e.memoizedState),
  typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function xn(e, t) {
  try {
      var n = ""
        , r = t;
      do
          n += Yd(r),
          r = r.return;
      while (r);
      var o = n
  } catch (i) {
      o = `
Error generating stack: ` + i.message + `
` + i.stack
  }
  return {
      value: e,
      source: t,
      stack: o,
      digest: null
  }
}
function Gi(e, t, n) {
  return {
      value: e,
      source: null,
      stack: n ?? null,
      digest: t ?? null
  }
}
function Rl(e, t) {
  try {
      console.error(t.value)
  } catch (n) {
      setTimeout(function() {
          throw n
      })
  }
}
var w0 = typeof WeakMap == "function" ? WeakMap : Map;
function mf(e, t, n) {
  n = at(-1, n),
  n.tag = 3,
  n.payload = {
      element: null
  };
  var r = t.value;
  return n.callback = function() {
      Lo || (Lo = !0,
      Wl = r),
      Rl(e, t)
  }
  ,
  n
}
function hf(e, t, n) {
  n = at(-1, n),
  n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
      var o = t.value;
      n.payload = function() {
          return r(o)
      }
      ,
      n.callback = function() {
          Rl(e, t)
      }
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
      Rl(e, t),
      typeof r != "function" && (Pt === null ? Pt = new Set([this]) : Pt.add(this));
      var l = t.stack;
      this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : ""
      })
  }
  ),
  n
}
function qa(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
      r = e.pingCache = new w0;
      var o = new Set;
      r.set(t, o)
  } else
      o = r.get(t),
      o === void 0 && (o = new Set,
      r.set(t, o));
  o.has(n) || (o.add(n),
  e = I0.bind(null, e, t, n),
  t.then(e, e))
}
function ba(e) {
  do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState,
      t = t !== null ? t.dehydrated !== null : !0),
      t)
          return e;
      e = e.return
  } while (e !== null);
  return null
}
function eu(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536,
  e.lanes = o,
  e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
  n.flags |= 131072,
  n.flags &= -52805,
  n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = at(-1, 1),
  t.tag = 2,
  Nt(n, t, 1))),
  n.lanes |= 1),
  e)
}
var S0 = pt.ReactCurrentOwner
, ke = !1;
function ye(e, t, n, r) {
  t.child = e === null ? Hc(t, null, n, r) : Sn(t, e.child, n, r)
}
function tu(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return mn(t, o),
  r = js(e, t, n, r, i, o),
  n = Is(),
  e !== null && !ke ? (t.updateQueue = e.updateQueue,
  t.flags &= -2053,
  e.lanes &= ~o,
  dt(e, t, o)) : (W && n && Ss(t),
  t.flags |= 1,
  ye(e, t, r, o),
  t.child)
}
function nu(e, t, n, r, o) {
  if (e === null) {
      var i = n.type;
      return typeof i == "function" && !Hs(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
      t.type = i,
      yf(e, t, i, r, o)) : (e = lo(n.type, null, r, t, t.mode, o),
      e.ref = t.ref,
      e.return = t,
      t.child = e)
  }
  if (i = e.child,
  !(e.lanes & o)) {
      var l = i.memoizedProps;
      if (n = n.compare,
      n = n !== null ? n : lr,
      n(l, r) && e.ref === t.ref)
          return dt(e, t, o)
  }
  return t.flags |= 1,
  e = zt(i, r),
  e.ref = t.ref,
  e.return = t,
  t.child = e
}
function yf(e, t, n, r, o) {
  if (e !== null) {
      var i = e.memoizedProps;
      if (lr(i, r) && e.ref === t.ref)
          if (ke = !1,
          t.pendingProps = r = i,
          (e.lanes & o) !== 0)
              e.flags & 131072 && (ke = !0);
          else
              return t.lanes = e.lanes,
              dt(e, t, o)
  }
  return Ml(e, t, n, r, o)
}
function gf(e, t, n) {
  var r = t.pendingProps
    , o = r.children
    , i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
      if (!(t.mode & 1))
          t.memoizedState = {
              baseLanes: 0,
              cachePool: null,
              transitions: null
          },
          U(un, Pe),
          Pe |= n;
      else {
          if (!(n & 1073741824))
              return e = i !== null ? i.baseLanes | n : n,
              t.lanes = t.childLanes = 1073741824,
              t.memoizedState = {
                  baseLanes: e,
                  cachePool: null,
                  transitions: null
              },
              t.updateQueue = null,
              U(un, Pe),
              Pe |= e,
              null;
          t.memoizedState = {
              baseLanes: 0,
              cachePool: null,
              transitions: null
          },
          r = i !== null ? i.baseLanes : n,
          U(un, Pe),
          Pe |= r
      }
  else
      i !== null ? (r = i.baseLanes | n,
      t.memoizedState = null) : r = n,
      U(un, Pe),
      Pe |= r;
  return ye(e, t, o, n),
  t.child
}
function vf(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
  t.flags |= 2097152)
}
function Ml(e, t, n, r, o) {
  var i = Ce(n) ? Ht : he.current;
  return i = vn(t, i),
  mn(t, o),
  n = js(e, t, n, r, i, o),
  r = Is(),
  e !== null && !ke ? (t.updateQueue = e.updateQueue,
  t.flags &= -2053,
  e.lanes &= ~o,
  dt(e, t, o)) : (W && r && Ss(t),
  t.flags |= 1,
  ye(e, t, n, o),
  t.child)
}
function ru(e, t, n, r, o) {
  if (Ce(n)) {
      var i = !0;
      ko(t)
  } else
      i = !1;
  if (mn(t, o),
  t.stateNode === null)
      ro(e, t),
      pf(t, n, r),
      Il(t, n, r, o),
      r = !0;
  else if (e === null) {
      var l = t.stateNode
        , s = t.memoizedProps;
      l.props = s;
      var a = l.context
        , c = n.contextType;
      typeof c == "object" && c !== null ? c = Be(c) : (c = Ce(n) ? Ht : he.current,
      c = vn(t, c));
      var h = n.getDerivedStateFromProps
        , m = typeof h == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      m || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== r || a !== c) && Ja(t, l, r, c),
      yt = !1;
      var p = t.memoizedState;
      l.state = p,
      Po(t, r, l, o),
      a = t.memoizedState,
      s !== r || p !== a || xe.current || yt ? (typeof h == "function" && (jl(t, n, h, r),
      a = t.memoizedState),
      (s = yt || Za(t, n, s, r, p, a, c)) ? (m || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()),
      typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
      t.memoizedProps = r,
      t.memoizedState = a),
      l.props = r,
      l.state = a,
      l.context = c,
      r = s) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
      r = !1)
  } else {
      l = t.stateNode,
      Qc(e, t),
      s = t.memoizedProps,
      c = t.type === t.elementType ? s : We(t.type, s),
      l.props = c,
      m = t.pendingProps,
      p = l.context,
      a = n.contextType,
      typeof a == "object" && a !== null ? a = Be(a) : (a = Ce(n) ? Ht : he.current,
      a = vn(t, a));
      var w = n.getDerivedStateFromProps;
      (h = typeof w == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== m || p !== a) && Ja(t, l, r, a),
      yt = !1,
      p = t.memoizedState,
      l.state = p,
      Po(t, r, l, o);
      var v = t.memoizedState;
      s !== m || p !== v || xe.current || yt ? (typeof w == "function" && (jl(t, n, w, r),
      v = t.memoizedState),
      (c = yt || Za(t, n, c, r, p, v, a) || !1) ? (h || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, v, a),
      typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, v, a)),
      typeof l.componentDidUpdate == "function" && (t.flags |= 4),
      typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 4),
      typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024),
      t.memoizedProps = r,
      t.memoizedState = v),
      l.props = r,
      l.state = v,
      l.context = a,
      r = c) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 4),
      typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024),
      r = !1)
  }
  return $l(e, t, n, r, i, o)
}
function $l(e, t, n, r, o, i) {
  vf(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l)
      return o && Va(t, n, !1),
      dt(e, t, i);
  r = t.stateNode,
  S0.current = t;
  var s = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1,
  e !== null && l ? (t.child = Sn(t, e.child, null, i),
  t.child = Sn(t, null, s, i)) : ye(e, t, s, i),
  t.memoizedState = r.state,
  o && Va(t, n, !0),
  t.child
}
function wf(e) {
  var t = e.stateNode;
  t.pendingContext ? Ua(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ua(e, t.context, !1),
  zs(e, t.containerInfo)
}
function ou(e, t, n, r, o) {
  return wn(),
  xs(o),
  t.flags |= 256,
  ye(e, t, n, r),
  t.child
}
var Dl = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0
};
function Fl(e) {
  return {
      baseLanes: e,
      cachePool: null,
      transitions: null
  }
}
function Sf(e, t, n) {
  var r = t.pendingProps, o = Q.current, i = !1, l = (t.flags & 128) !== 0, s;
  if ((s = l) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
  s ? (i = !0,
  t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
  U(Q, o & 1),
  e === null)
      return Ol(t),
      e = t.memoizedState,
      e !== null && (e = e.dehydrated,
      e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
      null) : (l = r.children,
      e = r.fallback,
      i ? (r = t.mode,
      i = t.child,
      l = {
          mode: "hidden",
          children: l
      },
      !(r & 1) && i !== null ? (i.childLanes = 0,
      i.pendingProps = l) : i = Go(l, r, 0, null),
      e = Vt(e, r, n, null),
      i.return = t,
      e.return = t,
      i.sibling = e,
      t.child = i,
      t.child.memoizedState = Fl(n),
      t.memoizedState = Dl,
      e) : $s(t, l));
  if (o = e.memoizedState,
  o !== null && (s = o.dehydrated,
  s !== null))
      return k0(e, t, l, r, s, o, n);
  if (i) {
      i = r.fallback,
      l = t.mode,
      o = e.child,
      s = o.sibling;
      var a = {
          mode: "hidden",
          children: r.children
      };
      return !(l & 1) && t.child !== o ? (r = t.child,
      r.childLanes = 0,
      r.pendingProps = a,
      t.deletions = null) : (r = zt(o, a),
      r.subtreeFlags = o.subtreeFlags & 14680064),
      s !== null ? i = zt(s, i) : (i = Vt(i, l, n, null),
      i.flags |= 2),
      i.return = t,
      r.return = t,
      r.sibling = i,
      t.child = r,
      r = i,
      i = t.child,
      l = e.child.memoizedState,
      l = l === null ? Fl(n) : {
          baseLanes: l.baseLanes | n,
          cachePool: null,
          transitions: l.transitions
      },
      i.memoizedState = l,
      i.childLanes = e.childLanes & ~n,
      t.memoizedState = Dl,
      r
  }
  return i = e.child,
  e = i.sibling,
  r = zt(i, {
      mode: "visible",
      children: r.children
  }),
  !(t.mode & 1) && (r.lanes = n),
  r.return = t,
  r.sibling = null,
  e !== null && (n = t.deletions,
  n === null ? (t.deletions = [e],
  t.flags |= 16) : n.push(e)),
  t.child = r,
  t.memoizedState = null,
  r
}
function $s(e, t) {
  return t = Go({
      mode: "visible",
      children: t
  }, e.mode, 0, null),
  t.return = e,
  e.child = t
}
function Vr(e, t, n, r) {
  return r !== null && xs(r),
  Sn(t, e.child, null, n),
  e = $s(t, t.pendingProps.children),
  e.flags |= 2,
  t.memoizedState = null,
  e
}
function k0(e, t, n, r, o, i, l) {
  if (n)
      return t.flags & 256 ? (t.flags &= -257,
      r = Gi(Error(S(422))),
      Vr(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child,
      t.flags |= 128,
      null) : (i = r.fallback,
      o = t.mode,
      r = Go({
          mode: "visible",
          children: r.children
      }, o, 0, null),
      i = Vt(i, o, l, null),
      i.flags |= 2,
      r.return = t,
      i.return = t,
      r.sibling = i,
      t.child = r,
      t.mode & 1 && Sn(t, e.child, null, l),
      t.child.memoizedState = Fl(l),
      t.memoizedState = Dl,
      i);
  if (!(t.mode & 1))
      return Vr(e, t, l, null);
  if (o.data === "$!") {
      if (r = o.nextSibling && o.nextSibling.dataset,
      r)
          var s = r.dgst;
      return r = s,
      i = Error(S(419)),
      r = Gi(i, r, void 0),
      Vr(e, t, l, r)
  }
  if (s = (l & e.childLanes) !== 0,
  ke || s) {
      if (r = ie,
      r !== null) {
          switch (l & -l) {
          case 4:
              o = 2;
              break;
          case 16:
              o = 8;
              break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
              o = 32;
              break;
          case 536870912:
              o = 268435456;
              break;
          default:
              o = 0
          }
          o = o & (r.suspendedLanes | l) ? 0 : o,
          o !== 0 && o !== i.retryLane && (i.retryLane = o,
          ft(e, o),
          Ke(r, e, o, -1))
      }
      return Vs(),
      r = Gi(Error(S(421))),
      Vr(e, t, l, r)
  }
  return o.data === "$?" ? (t.flags |= 128,
  t.child = e.child,
  t = R0.bind(null, e),
  o._reactRetry = t,
  null) : (e = i.treeContext,
  _e = Et(o.nextSibling),
  ze = t,
  W = !0,
  Ye = null,
  e !== null && (Re[Me++] = lt,
  Re[Me++] = st,
  Re[Me++] = Wt,
  lt = e.id,
  st = e.overflow,
  Wt = t),
  t = $s(t, r.children),
  t.flags |= 4096,
  t)
}
function iu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t),
  Ll(e.return, t, n)
}
function Zi(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: r,
      tail: n,
      tailMode: o
  } : (i.isBackwards = t,
  i.rendering = null,
  i.renderingStartTime = 0,
  i.last = r,
  i.tail = n,
  i.tailMode = o)
}
function kf(e, t, n) {
  var r = t.pendingProps
    , o = r.revealOrder
    , i = r.tail;
  if (ye(e, t, r.children, n),
  r = Q.current,
  r & 2)
      r = r & 1 | 2,
      t.flags |= 128;
  else {
      if (e !== null && e.flags & 128)
          e: for (e = t.child; e !== null; ) {
              if (e.tag === 13)
                  e.memoizedState !== null && iu(e, n, t);
              else if (e.tag === 19)
                  iu(e, n, t);
              else if (e.child !== null) {
                  e.child.return = e,
                  e = e.child;
                  continue
              }
              if (e === t)
                  break e;
              for (; e.sibling === null; ) {
                  if (e.return === null || e.return === t)
                      break e;
                  e = e.return
              }
              e.sibling.return = e.return,
              e = e.sibling
          }
      r &= 1
  }
  if (U(Q, r),
  !(t.mode & 1))
      t.memoizedState = null;
  else
      switch (o) {
      case "forwards":
          for (n = t.child,
          o = null; n !== null; )
              e = n.alternate,
              e !== null && _o(e) === null && (o = n),
              n = n.sibling;
          n = o,
          n === null ? (o = t.child,
          t.child = null) : (o = n.sibling,
          n.sibling = null),
          Zi(t, !1, o, n, i);
          break;
      case "backwards":
          for (n = null,
          o = t.child,
          t.child = null; o !== null; ) {
              if (e = o.alternate,
              e !== null && _o(e) === null) {
                  t.child = o;
                  break
              }
              e = o.sibling,
              o.sibling = n,
              n = o,
              o = e
          }
          Zi(t, !0, n, null, i);
          break;
      case "together":
          Zi(t, !1, null, null, void 0);
          break;
      default:
          t.memoizedState = null
      }
  return t.child
}
function ro(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null,
  t.alternate = null,
  t.flags |= 2)
}
function dt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies),
  Yt |= t.lanes,
  !(n & t.childLanes))
      return null;
  if (e !== null && t.child !== e.child)
      throw Error(S(153));
  if (t.child !== null) {
      for (e = t.child,
      n = zt(e, e.pendingProps),
      t.child = n,
      n.return = t; e.sibling !== null; )
          e = e.sibling,
          n = n.sibling = zt(e, e.pendingProps),
          n.return = t;
      n.sibling = null
  }
  return t.child
}
function x0(e, t, n) {
  switch (t.tag) {
  case 3:
      wf(t),
      wn();
      break;
  case 5:
      Yc(t);
      break;
  case 1:
      Ce(t.type) && ko(t);
      break;
  case 4:
      zs(t, t.stateNode.containerInfo);
      break;
  case 10:
      var r = t.type._context
        , o = t.memoizedProps.value;
      U(Eo, r._currentValue),
      r._currentValue = o;
      break;
  case 13:
      if (r = t.memoizedState,
      r !== null)
          return r.dehydrated !== null ? (U(Q, Q.current & 1),
          t.flags |= 128,
          null) : n & t.child.childLanes ? Sf(e, t, n) : (U(Q, Q.current & 1),
          e = dt(e, t, n),
          e !== null ? e.sibling : null);
      U(Q, Q.current & 1);
      break;
  case 19:
      if (r = (n & t.childLanes) !== 0,
      e.flags & 128) {
          if (r)
              return kf(e, t, n);
          t.flags |= 128
      }
      if (o = t.memoizedState,
      o !== null && (o.rendering = null,
      o.tail = null,
      o.lastEffect = null),
      U(Q, Q.current),
      r)
          break;
      return null;
  case 22:
  case 23:
      return t.lanes = 0,
      gf(e, t, n)
  }
  return dt(e, t, n)
}
var xf, Bl, Cf, Ef;
xf = function(e, t) {
  for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6)
          e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
          n.child.return = n,
          n = n.child;
          continue
      }
      if (n === t)
          break;
      for (; n.sibling === null; ) {
          if (n.return === null || n.return === t)
              return;
          n = n.return
      }
      n.sibling.return = n.return,
      n = n.sibling
  }
}
;
Bl = function() {}
;
Cf = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
      e = t.stateNode,
      At(nt.current);
      var i = null;
      switch (n) {
      case "input":
          o = sl(e, o),
          r = sl(e, r),
          i = [];
          break;
      case "select":
          o = X({}, o, {
              value: void 0
          }),
          r = X({}, r, {
              value: void 0
          }),
          i = [];
          break;
      case "textarea":
          o = cl(e, o),
          r = cl(e, r),
          i = [];
          break;
      default:
          typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = wo)
      }
      dl(n, r);
      var l;
      n = null;
      for (c in o)
          if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
              if (c === "style") {
                  var s = o[c];
                  for (l in s)
                      s.hasOwnProperty(l) && (n || (n = {}),
                      n[l] = "")
              } else
                  c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (bn.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
      for (c in r) {
          var a = r[c];
          if (s = o != null ? o[c] : void 0,
          r.hasOwnProperty(c) && a !== s && (a != null || s != null))
              if (c === "style")
                  if (s) {
                      for (l in s)
                          !s.hasOwnProperty(l) || a && a.hasOwnProperty(l) || (n || (n = {}),
                          n[l] = "");
                      for (l in a)
                          a.hasOwnProperty(l) && s[l] !== a[l] && (n || (n = {}),
                          n[l] = a[l])
                  } else
                      n || (i || (i = []),
                      i.push(c, n)),
                      n = a;
              else
                  c === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                  s = s ? s.__html : void 0,
                  a != null && s !== a && (i = i || []).push(c, a)) : c === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(c, "" + a) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (bn.hasOwnProperty(c) ? (a != null && c === "onScroll" && V("scroll", e),
                  i || s === a || (i = [])) : (i = i || []).push(c, a))
      }
      n && (i = i || []).push("style", n);
      var c = i;
      (t.updateQueue = c) && (t.flags |= 4)
  }
}
;
Ef = function(e, t, n, r) {
  n !== r && (t.flags |= 4)
}
;
function Dn(e, t) {
  if (!W)
      switch (e.tailMode) {
      case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
              t.alternate !== null && (n = t),
              t = t.sibling;
          n === null ? e.tail = null : n.sibling = null;
          break;
      case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
              n.alternate !== null && (r = n),
              n = n.sibling;
          r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
      }
}
function de(e) {
  var t = e.alternate !== null && e.alternate.child === e.child
    , n = 0
    , r = 0;
  if (t)
      for (var o = e.child; o !== null; )
          n |= o.lanes | o.childLanes,
          r |= o.subtreeFlags & 14680064,
          r |= o.flags & 14680064,
          o.return = e,
          o = o.sibling;
  else
      for (o = e.child; o !== null; )
          n |= o.lanes | o.childLanes,
          r |= o.subtreeFlags,
          r |= o.flags,
          o.return = e,
          o = o.sibling;
  return e.subtreeFlags |= r,
  e.childLanes = n,
  t
}
function C0(e, t, n) {
  var r = t.pendingProps;
  switch (ks(t),
  t.tag) {
  case 2:
  case 16:
  case 15:
  case 0:
  case 11:
  case 7:
  case 8:
  case 12:
  case 9:
  case 14:
      return de(t),
      null;
  case 1:
      return Ce(t.type) && So(),
      de(t),
      null;
  case 3:
      return r = t.stateNode,
      kn(),
      H(xe),
      H(he),
      Os(),
      r.pendingContext && (r.context = r.pendingContext,
      r.pendingContext = null),
      (e === null || e.child === null) && (Ar(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
      Ye !== null && (Xl(Ye),
      Ye = null))),
      Bl(e, t),
      de(t),
      null;
  case 5:
      Ts(t);
      var o = At(fr.current);
      if (n = t.type,
      e !== null && t.stateNode != null)
          Cf(e, t, n, r, o),
          e.ref !== t.ref && (t.flags |= 512,
          t.flags |= 2097152);
      else {
          if (!r) {
              if (t.stateNode === null)
                  throw Error(S(166));
              return de(t),
              null
          }
          if (e = At(nt.current),
          Ar(t)) {
              r = t.stateNode,
              n = t.type;
              var i = t.memoizedProps;
              switch (r[et] = t,
              r[ur] = i,
              e = (t.mode & 1) !== 0,
              n) {
              case "dialog":
                  V("cancel", r),
                  V("close", r);
                  break;
              case "iframe":
              case "object":
              case "embed":
                  V("load", r);
                  break;
              case "video":
              case "audio":
                  for (o = 0; o < Hn.length; o++)
                      V(Hn[o], r);
                  break;
              case "source":
                  V("error", r);
                  break;
              case "img":
              case "image":
              case "link":
                  V("error", r),
                  V("load", r);
                  break;
              case "details":
                  V("toggle", r);
                  break;
              case "input":
                  ma(r, i),
                  V("invalid", r);
                  break;
              case "select":
                  r._wrapperState = {
                      wasMultiple: !!i.multiple
                  },
                  V("invalid", r);
                  break;
              case "textarea":
                  ya(r, i),
                  V("invalid", r)
              }
              dl(n, i),
              o = null;
              for (var l in i)
                  if (i.hasOwnProperty(l)) {
                      var s = i[l];
                      l === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && Br(r.textContent, s, e),
                      o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && Br(r.textContent, s, e),
                      o = ["children", "" + s]) : bn.hasOwnProperty(l) && s != null && l === "onScroll" && V("scroll", r)
                  }
              switch (n) {
              case "input":
                  Lr(r),
                  ha(r, i, !0);
                  break;
              case "textarea":
                  Lr(r),
                  ga(r);
                  break;
              case "select":
              case "option":
                  break;
              default:
                  typeof i.onClick == "function" && (r.onclick = wo)
              }
              r = o,
              t.updateQueue = r,
              r !== null && (t.flags |= 4)
          } else {
              l = o.nodeType === 9 ? o : o.ownerDocument,
              e === "http://www.w3.org/1999/xhtml" && (e = Ju(n)),
              e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"),
              e.innerHTML = "<script><\/script>",
              e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, {
                  is: r.is
              }) : (e = l.createElement(n),
              n === "select" && (l = e,
              r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n),
              e[et] = t,
              e[ur] = r,
              xf(e, t, !1, !1),
              t.stateNode = e;
              e: {
                  switch (l = pl(n, r),
                  n) {
                  case "dialog":
                      V("cancel", e),
                      V("close", e),
                      o = r;
                      break;
                  case "iframe":
                  case "object":
                  case "embed":
                      V("load", e),
                      o = r;
                      break;
                  case "video":
                  case "audio":
                      for (o = 0; o < Hn.length; o++)
                          V(Hn[o], e);
                      o = r;
                      break;
                  case "source":
                      V("error", e),
                      o = r;
                      break;
                  case "img":
                  case "image":
                  case "link":
                      V("error", e),
                      V("load", e),
                      o = r;
                      break;
                  case "details":
                      V("toggle", e),
                      o = r;
                      break;
                  case "input":
                      ma(e, r),
                      o = sl(e, r),
                      V("invalid", e);
                      break;
                  case "option":
                      o = r;
                      break;
                  case "select":
                      e._wrapperState = {
                          wasMultiple: !!r.multiple
                      },
                      o = X({}, r, {
                          value: void 0
                      }),
                      V("invalid", e);
                      break;
                  case "textarea":
                      ya(e, r),
                      o = cl(e, r),
                      V("invalid", e);
                      break;
                  default:
                      o = r
                  }
                  dl(n, o),
                  s = o;
                  for (i in s)
                      if (s.hasOwnProperty(i)) {
                          var a = s[i];
                          i === "style" ? ec(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                          a != null && qu(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && er(e, a) : typeof a == "number" && er(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (bn.hasOwnProperty(i) ? a != null && i === "onScroll" && V("scroll", e) : a != null && ls(e, i, a, l))
                      }
                  switch (n) {
                  case "input":
                      Lr(e),
                      ha(e, r, !1);
                      break;
                  case "textarea":
                      Lr(e),
                      ga(e);
                      break;
                  case "option":
                      r.value != null && e.setAttribute("value", "" + Tt(r.value));
                      break;
                  case "select":
                      e.multiple = !!r.multiple,
                      i = r.value,
                      i != null ? cn(e, !!r.multiple, i, !1) : r.defaultValue != null && cn(e, !!r.multiple, r.defaultValue, !0);
                      break;
                  default:
                      typeof o.onClick == "function" && (e.onclick = wo)
                  }
                  switch (n) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                      r = !!r.autoFocus;
                      break e;
                  case "img":
                      r = !0;
                      break e;
                  default:
                      r = !1
                  }
              }
              r && (t.flags |= 4)
          }
          t.ref !== null && (t.flags |= 512,
          t.flags |= 2097152)
      }
      return de(t),
      null;
  case 6:
      if (e && t.stateNode != null)
          Ef(e, t, e.memoizedProps, r);
      else {
          if (typeof r != "string" && t.stateNode === null)
              throw Error(S(166));
          if (n = At(fr.current),
          At(nt.current),
          Ar(t)) {
              if (r = t.stateNode,
              n = t.memoizedProps,
              r[et] = t,
              (i = r.nodeValue !== n) && (e = ze,
              e !== null))
                  switch (e.tag) {
                  case 3:
                      Br(r.nodeValue, n, (e.mode & 1) !== 0);
                      break;
                  case 5:
                      e.memoizedProps.suppressHydrationWarning !== !0 && Br(r.nodeValue, n, (e.mode & 1) !== 0)
                  }
              i && (t.flags |= 4)
          } else
              r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
              r[et] = t,
              t.stateNode = r
      }
      return de(t),
      null;
  case 13:
      if (H(Q),
      r = t.memoizedState,
      e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (W && _e !== null && t.mode & 1 && !(t.flags & 128))
              Uc(),
              wn(),
              t.flags |= 98560,
              i = !1;
          else if (i = Ar(t),
          r !== null && r.dehydrated !== null) {
              if (e === null) {
                  if (!i)
                      throw Error(S(318));
                  if (i = t.memoizedState,
                  i = i !== null ? i.dehydrated : null,
                  !i)
                      throw Error(S(317));
                  i[et] = t
              } else
                  wn(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  t.flags |= 4;
              de(t),
              i = !1
          } else
              Ye !== null && (Xl(Ye),
              Ye = null),
              i = !0;
          if (!i)
              return t.flags & 65536 ? t : null
      }
      return t.flags & 128 ? (t.lanes = n,
      t) : (r = r !== null,
      r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
      t.mode & 1 && (e === null || Q.current & 1 ? te === 0 && (te = 3) : Vs())),
      t.updateQueue !== null && (t.flags |= 4),
      de(t),
      null);
  case 4:
      return kn(),
      Bl(e, t),
      e === null && sr(t.stateNode.containerInfo),
      de(t),
      null;
  case 10:
      return Ns(t.type._context),
      de(t),
      null;
  case 17:
      return Ce(t.type) && So(),
      de(t),
      null;
  case 19:
      if (H(Q),
      i = t.memoizedState,
      i === null)
          return de(t),
          null;
      if (r = (t.flags & 128) !== 0,
      l = i.rendering,
      l === null)
          if (r)
              Dn(i, !1);
          else {
              if (te !== 0 || e !== null && e.flags & 128)
                  for (e = t.child; e !== null; ) {
                      if (l = _o(e),
                      l !== null) {
                          for (t.flags |= 128,
                          Dn(i, !1),
                          r = l.updateQueue,
                          r !== null && (t.updateQueue = r,
                          t.flags |= 4),
                          t.subtreeFlags = 0,
                          r = n,
                          n = t.child; n !== null; )
                              i = n,
                              e = r,
                              i.flags &= 14680066,
                              l = i.alternate,
                              l === null ? (i.childLanes = 0,
                              i.lanes = e,
                              i.child = null,
                              i.subtreeFlags = 0,
                              i.memoizedProps = null,
                              i.memoizedState = null,
                              i.updateQueue = null,
                              i.dependencies = null,
                              i.stateNode = null) : (i.childLanes = l.childLanes,
                              i.lanes = l.lanes,
                              i.child = l.child,
                              i.subtreeFlags = 0,
                              i.deletions = null,
                              i.memoizedProps = l.memoizedProps,
                              i.memoizedState = l.memoizedState,
                              i.updateQueue = l.updateQueue,
                              i.type = l.type,
                              e = l.dependencies,
                              i.dependencies = e === null ? null : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext
                              }),
                              n = n.sibling;
                          return U(Q, Q.current & 1 | 2),
                          t.child
                      }
                      e = e.sibling
                  }
              i.tail !== null && J() > Cn && (t.flags |= 128,
              r = !0,
              Dn(i, !1),
              t.lanes = 4194304)
          }
      else {
          if (!r)
              if (e = _o(l),
              e !== null) {
                  if (t.flags |= 128,
                  r = !0,
                  n = e.updateQueue,
                  n !== null && (t.updateQueue = n,
                  t.flags |= 4),
                  Dn(i, !0),
                  i.tail === null && i.tailMode === "hidden" && !l.alternate && !W)
                      return de(t),
                      null
              } else
                  2 * J() - i.renderingStartTime > Cn && n !== 1073741824 && (t.flags |= 128,
                  r = !0,
                  Dn(i, !1),
                  t.lanes = 4194304);
          i.isBackwards ? (l.sibling = t.child,
          t.child = l) : (n = i.last,
          n !== null ? n.sibling = l : t.child = l,
          i.last = l)
      }
      return i.tail !== null ? (t = i.tail,
      i.rendering = t,
      i.tail = t.sibling,
      i.renderingStartTime = J(),
      t.sibling = null,
      n = Q.current,
      U(Q, r ? n & 1 | 2 : n & 1),
      t) : (de(t),
      null);
  case 22:
  case 23:
      return Us(),
      r = t.memoizedState !== null,
      e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
      r && t.mode & 1 ? Pe & 1073741824 && (de(t),
      t.subtreeFlags & 6 && (t.flags |= 8192)) : de(t),
      null;
  case 24:
      return null;
  case 25:
      return null
  }
  throw Error(S(156, t.tag))
}
function E0(e, t) {
  switch (ks(t),
  t.tag) {
  case 1:
      return Ce(t.type) && So(),
      e = t.flags,
      e & 65536 ? (t.flags = e & -65537 | 128,
      t) : null;
  case 3:
      return kn(),
      H(xe),
      H(he),
      Os(),
      e = t.flags,
      e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
      t) : null;
  case 5:
      return Ts(t),
      null;
  case 13:
      if (H(Q),
      e = t.memoizedState,
      e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
              throw Error(S(340));
          wn()
      }
      return e = t.flags,
      e & 65536 ? (t.flags = e & -65537 | 128,
      t) : null;
  case 19:
      return H(Q),
      null;
  case 4:
      return kn(),
      null;
  case 10:
      return Ns(t.type._context),
      null;
  case 22:
  case 23:
      return Us(),
      null;
  case 24:
      return null;
  default:
      return null
  }
}
var Hr = !1
, me = !1
, N0 = typeof WeakSet == "function" ? WeakSet : Set
, P = null;
function an(e, t) {
  var n = e.ref;
  if (n !== null)
      if (typeof n == "function")
          try {
              n(null)
          } catch (r) {
              K(e, t, r)
          }
      else
          n.current = null
}
function Al(e, t, n) {
  try {
      n()
  } catch (r) {
      K(e, t, r)
  }
}
var lu = !1;
function P0(e, t) {
  if (Cl = yo,
  e = zc(),
  ws(e)) {
      if ("selectionStart"in e)
          var n = {
              start: e.selectionStart,
              end: e.selectionEnd
          };
      else
          e: {
              n = (n = e.ownerDocument) && n.defaultView || window;
              var r = n.getSelection && n.getSelection();
              if (r && r.rangeCount !== 0) {
                  n = r.anchorNode;
                  var o = r.anchorOffset
                    , i = r.focusNode;
                  r = r.focusOffset;
                  try {
                      n.nodeType,
                      i.nodeType
                  } catch {
                      n = null;
                      break e
                  }
                  var l = 0
                    , s = -1
                    , a = -1
                    , c = 0
                    , h = 0
                    , m = e
                    , p = null;
                  t: for (; ; ) {
                      for (var w; m !== n || o !== 0 && m.nodeType !== 3 || (s = l + o),
                      m !== i || r !== 0 && m.nodeType !== 3 || (a = l + r),
                      m.nodeType === 3 && (l += m.nodeValue.length),
                      (w = m.firstChild) !== null; )
                          p = m,
                          m = w;
                      for (; ; ) {
                          if (m === e)
                              break t;
                          if (p === n && ++c === o && (s = l),
                          p === i && ++h === r && (a = l),
                          (w = m.nextSibling) !== null)
                              break;
                          m = p,
                          p = m.parentNode
                      }
                      m = w
                  }
                  n = s === -1 || a === -1 ? null : {
                      start: s,
                      end: a
                  }
              } else
                  n = null
          }
      n = n || {
          start: 0,
          end: 0
      }
  } else
      n = null;
  for (El = {
      focusedElem: e,
      selectionRange: n
  },
  yo = !1,
  P = t; P !== null; )
      if (t = P,
      e = t.child,
      (t.subtreeFlags & 1028) !== 0 && e !== null)
          e.return = t,
          P = e;
      else
          for (; P !== null; ) {
              t = P;
              try {
                  var v = t.alternate;
                  if (t.flags & 1024)
                      switch (t.tag) {
                      case 0:
                      case 11:
                      case 15:
                          break;
                      case 1:
                          if (v !== null) {
                              var y = v.memoizedProps
                                , T = v.memoizedState
                                , f = t.stateNode
                                , u = f.getSnapshotBeforeUpdate(t.elementType === t.type ? y : We(t.type, y), T);
                              f.__reactInternalSnapshotBeforeUpdate = u
                          }
                          break;
                      case 3:
                          var d = t.stateNode.containerInfo;
                          d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
                          break;
                      case 5:
                      case 6:
                      case 4:
                      case 17:
                          break;
                      default:
                          throw Error(S(163))
                      }
              } catch (g) {
                  K(t, t.return, g)
              }
              if (e = t.sibling,
              e !== null) {
                  e.return = t.return,
                  P = e;
                  break
              }
              P = t.return
          }
  return v = lu,
  lu = !1,
  v
}
function Zn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null,
  r !== null) {
      var o = r = r.next;
      do {
          if ((o.tag & e) === e) {
              var i = o.destroy;
              o.destroy = void 0,
              i !== void 0 && Al(t, n, i)
          }
          o = o.next
      } while (o !== r)
  }
}
function Xo(e, t) {
  if (t = t.updateQueue,
  t = t !== null ? t.lastEffect : null,
  t !== null) {
      var n = t = t.next;
      do {
          if ((n.tag & e) === e) {
              var r = n.create;
              n.destroy = r()
          }
          n = n.next
      } while (n !== t)
  }
}
function Ul(e) {
  var t = e.ref;
  if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
      case 5:
          e = n;
          break;
      default:
          e = n
      }
      typeof t == "function" ? t(e) : t.current = e
  }
}
function Nf(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null,
  Nf(t)),
  e.child = null,
  e.deletions = null,
  e.sibling = null,
  e.tag === 5 && (t = e.stateNode,
  t !== null && (delete t[et],
  delete t[ur],
  delete t[_l],
  delete t[a0],
  delete t[u0])),
  e.stateNode = null,
  e.return = null,
  e.dependencies = null,
  e.memoizedProps = null,
  e.memoizedState = null,
  e.pendingProps = null,
  e.stateNode = null,
  e.updateQueue = null
}
function Pf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function su(e) {
  e: for (; ; ) {
      for (; e.sibling === null; ) {
          if (e.return === null || Pf(e.return))
              return null;
          e = e.return
      }
      for (e.sibling.return = e.return,
      e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.flags & 2 || e.child === null || e.tag === 4)
              continue e;
          e.child.return = e,
          e = e.child
      }
      if (!(e.flags & 2))
          return e.stateNode
  }
}
function Vl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
      e = e.stateNode,
      t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
      t.insertBefore(e, n)) : (t = n,
      t.appendChild(e)),
      n = n._reactRootContainer,
      n != null || t.onclick !== null || (t.onclick = wo));
  else if (r !== 4 && (e = e.child,
  e !== null))
      for (Vl(e, t, n),
      e = e.sibling; e !== null; )
          Vl(e, t, n),
          e = e.sibling
}
function Hl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
      e = e.stateNode,
      t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child,
  e !== null))
      for (Hl(e, t, n),
      e = e.sibling; e !== null; )
          Hl(e, t, n),
          e = e.sibling
}
var se = null
, Qe = !1;
function mt(e, t, n) {
  for (n = n.child; n !== null; )
      _f(e, t, n),
      n = n.sibling
}
function _f(e, t, n) {
  if (tt && typeof tt.onCommitFiberUnmount == "function")
      try {
          tt.onCommitFiberUnmount(Bo, n)
      } catch {}
  switch (n.tag) {
  case 5:
      me || an(n, t);
  case 6:
      var r = se
        , o = Qe;
      se = null,
      mt(e, t, n),
      se = r,
      Qe = o,
      se !== null && (Qe ? (e = se,
      n = n.stateNode,
      e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : se.removeChild(n.stateNode));
      break;
  case 18:
      se !== null && (Qe ? (e = se,
      n = n.stateNode,
      e.nodeType === 8 ? Hi(e.parentNode, n) : e.nodeType === 1 && Hi(e, n),
      or(e)) : Hi(se, n.stateNode));
      break;
  case 4:
      r = se,
      o = Qe,
      se = n.stateNode.containerInfo,
      Qe = !0,
      mt(e, t, n),
      se = r,
      Qe = o;
      break;
  case 0:
  case 11:
  case 14:
  case 15:
      if (!me && (r = n.updateQueue,
      r !== null && (r = r.lastEffect,
      r !== null))) {
          o = r = r.next;
          do {
              var i = o
                , l = i.destroy;
              i = i.tag,
              l !== void 0 && (i & 2 || i & 4) && Al(n, t, l),
              o = o.next
          } while (o !== r)
      }
      mt(e, t, n);
      break;
  case 1:
      if (!me && (an(n, t),
      r = n.stateNode,
      typeof r.componentWillUnmount == "function"))
          try {
              r.props = n.memoizedProps,
              r.state = n.memoizedState,
              r.componentWillUnmount()
          } catch (s) {
              K(n, t, s)
          }
      mt(e, t, n);
      break;
  case 21:
      mt(e, t, n);
      break;
  case 22:
      n.mode & 1 ? (me = (r = me) || n.memoizedState !== null,
      mt(e, t, n),
      me = r) : mt(e, t, n);
      break;
  default:
      mt(e, t, n)
  }
}
function au(e) {
  var t = e.updateQueue;
  if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new N0),
      t.forEach(function(r) {
          var o = M0.bind(null, e, r);
          n.has(r) || (n.add(r),
          r.then(o, o))
      })
  }
}
function He(e, t) {
  var n = t.deletions;
  if (n !== null)
      for (var r = 0; r < n.length; r++) {
          var o = n[r];
          try {
              var i = e
                , l = t
                , s = l;
              e: for (; s !== null; ) {
                  switch (s.tag) {
                  case 5:
                      se = s.stateNode,
                      Qe = !1;
                      break e;
                  case 3:
                      se = s.stateNode.containerInfo,
                      Qe = !0;
                      break e;
                  case 4:
                      se = s.stateNode.containerInfo,
                      Qe = !0;
                      break e
                  }
                  s = s.return
              }
              if (se === null)
                  throw Error(S(160));
              _f(i, l, o),
              se = null,
              Qe = !1;
              var a = o.alternate;
              a !== null && (a.return = null),
              o.return = null
          } catch (c) {
              K(o, t, c)
          }
      }
  if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; )
          zf(t, e),
          t = t.sibling
}
function zf(e, t) {
  var n = e.alternate
    , r = e.flags;
  switch (e.tag) {
  case 0:
  case 11:
  case 14:
  case 15:
      if (He(t, e),
      Ze(e),
      r & 4) {
          try {
              Zn(3, e, e.return),
              Xo(3, e)
          } catch (y) {
              K(e, e.return, y)
          }
          try {
              Zn(5, e, e.return)
          } catch (y) {
              K(e, e.return, y)
          }
      }
      break;
  case 1:
      He(t, e),
      Ze(e),
      r & 512 && n !== null && an(n, n.return);
      break;
  case 5:
      if (He(t, e),
      Ze(e),
      r & 512 && n !== null && an(n, n.return),
      e.flags & 32) {
          var o = e.stateNode;
          try {
              er(o, "")
          } catch (y) {
              K(e, e.return, y)
          }
      }
      if (r & 4 && (o = e.stateNode,
      o != null)) {
          var i = e.memoizedProps
            , l = n !== null ? n.memoizedProps : i
            , s = e.type
            , a = e.updateQueue;
          if (e.updateQueue = null,
          a !== null)
              try {
                  s === "input" && i.type === "radio" && i.name != null && Gu(o, i),
                  pl(s, l);
                  var c = pl(s, i);
                  for (l = 0; l < a.length; l += 2) {
                      var h = a[l]
                        , m = a[l + 1];
                      h === "style" ? ec(o, m) : h === "dangerouslySetInnerHTML" ? qu(o, m) : h === "children" ? er(o, m) : ls(o, h, m, c)
                  }
                  switch (s) {
                  case "input":
                      al(o, i);
                      break;
                  case "textarea":
                      Zu(o, i);
                      break;
                  case "select":
                      var p = o._wrapperState.wasMultiple;
                      o._wrapperState.wasMultiple = !!i.multiple;
                      var w = i.value;
                      w != null ? cn(o, !!i.multiple, w, !1) : p !== !!i.multiple && (i.defaultValue != null ? cn(o, !!i.multiple, i.defaultValue, !0) : cn(o, !!i.multiple, i.multiple ? [] : "", !1))
                  }
                  o[ur] = i
              } catch (y) {
                  K(e, e.return, y)
              }
      }
      break;
  case 6:
      if (He(t, e),
      Ze(e),
      r & 4) {
          if (e.stateNode === null)
              throw Error(S(162));
          o = e.stateNode,
          i = e.memoizedProps;
          try {
              o.nodeValue = i
          } catch (y) {
              K(e, e.return, y)
          }
      }
      break;
  case 3:
      if (He(t, e),
      Ze(e),
      r & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
              or(t.containerInfo)
          } catch (y) {
              K(e, e.return, y)
          }
      break;
  case 4:
      He(t, e),
      Ze(e);
      break;
  case 13:
      He(t, e),
      Ze(e),
      o = e.child,
      o.flags & 8192 && (i = o.memoizedState !== null,
      o.stateNode.isHidden = i,
      !i || o.alternate !== null && o.alternate.memoizedState !== null || (Bs = J())),
      r & 4 && au(e);
      break;
  case 22:
      if (h = n !== null && n.memoizedState !== null,
      e.mode & 1 ? (me = (c = me) || h,
      He(t, e),
      me = c) : He(t, e),
      Ze(e),
      r & 8192) {
          if (c = e.memoizedState !== null,
          (e.stateNode.isHidden = c) && !h && e.mode & 1)
              for (P = e,
              h = e.child; h !== null; ) {
                  for (m = P = h; P !== null; ) {
                      switch (p = P,
                      w = p.child,
                      p.tag) {
                      case 0:
                      case 11:
                      case 14:
                      case 15:
                          Zn(4, p, p.return);
                          break;
                      case 1:
                          an(p, p.return);
                          var v = p.stateNode;
                          if (typeof v.componentWillUnmount == "function") {
                              r = p,
                              n = p.return;
                              try {
                                  t = r,
                                  v.props = t.memoizedProps,
                                  v.state = t.memoizedState,
                                  v.componentWillUnmount()
                              } catch (y) {
                                  K(r, n, y)
                              }
                          }
                          break;
                      case 5:
                          an(p, p.return);
                          break;
                      case 22:
                          if (p.memoizedState !== null) {
                              cu(m);
                              continue
                          }
                      }
                      w !== null ? (w.return = p,
                      P = w) : cu(m)
                  }
                  h = h.sibling
              }
          e: for (h = null,
          m = e; ; ) {
              if (m.tag === 5) {
                  if (h === null) {
                      h = m;
                      try {
                          o = m.stateNode,
                          c ? (i = o.style,
                          typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = m.stateNode,
                          a = m.memoizedProps.style,
                          l = a != null && a.hasOwnProperty("display") ? a.display : null,
                          s.style.display = bu("display", l))
                      } catch (y) {
                          K(e, e.return, y)
                      }
                  }
              } else if (m.tag === 6) {
                  if (h === null)
                      try {
                          m.stateNode.nodeValue = c ? "" : m.memoizedProps
                      } catch (y) {
                          K(e, e.return, y)
                      }
              } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
                  m.child.return = m,
                  m = m.child;
                  continue
              }
              if (m === e)
                  break e;
              for (; m.sibling === null; ) {
                  if (m.return === null || m.return === e)
                      break e;
                  h === m && (h = null),
                  m = m.return
              }
              h === m && (h = null),
              m.sibling.return = m.return,
              m = m.sibling
          }
      }
      break;
  case 19:
      He(t, e),
      Ze(e),
      r & 4 && au(e);
      break;
  case 21:
      break;
  default:
      He(t, e),
      Ze(e)
  }
}
function Ze(e) {
  var t = e.flags;
  if (t & 2) {
      try {
          e: {
              for (var n = e.return; n !== null; ) {
                  if (Pf(n)) {
                      var r = n;
                      break e
                  }
                  n = n.return
              }
              throw Error(S(160))
          }
          switch (r.tag) {
          case 5:
              var o = r.stateNode;
              r.flags & 32 && (er(o, ""),
              r.flags &= -33);
              var i = su(e);
              Hl(e, i, o);
              break;
          case 3:
          case 4:
              var l = r.stateNode.containerInfo
                , s = su(e);
              Vl(e, s, l);
              break;
          default:
              throw Error(S(161))
          }
      } catch (a) {
          K(e, e.return, a)
      }
      e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function _0(e, t, n) {
  P = e,
  Tf(e)
}
function Tf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; P !== null; ) {
      var o = P
        , i = o.child;
      if (o.tag === 22 && r) {
          var l = o.memoizedState !== null || Hr;
          if (!l) {
              var s = o.alternate
                , a = s !== null && s.memoizedState !== null || me;
              s = Hr;
              var c = me;
              if (Hr = l,
              (me = a) && !c)
                  for (P = o; P !== null; )
                      l = P,
                      a = l.child,
                      l.tag === 22 && l.memoizedState !== null ? fu(o) : a !== null ? (a.return = l,
                      P = a) : fu(o);
              for (; i !== null; )
                  P = i,
                  Tf(i),
                  i = i.sibling;
              P = o,
              Hr = s,
              me = c
          }
          uu(e)
      } else
          o.subtreeFlags & 8772 && i !== null ? (i.return = o,
          P = i) : uu(e)
  }
}
function uu(e) {
  for (; P !== null; ) {
      var t = P;
      if (t.flags & 8772) {
          var n = t.alternate;
          try {
              if (t.flags & 8772)
                  switch (t.tag) {
                  case 0:
                  case 11:
                  case 15:
                      me || Xo(5, t);
                      break;
                  case 1:
                      var r = t.stateNode;
                      if (t.flags & 4 && !me)
                          if (n === null)
                              r.componentDidMount();
                          else {
                              var o = t.elementType === t.type ? n.memoizedProps : We(t.type, n.memoizedProps);
                              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                          }
                      var i = t.updateQueue;
                      i !== null && Xa(t, i, r);
                      break;
                  case 3:
                      var l = t.updateQueue;
                      if (l !== null) {
                          if (n = null,
                          t.child !== null)
                              switch (t.child.tag) {
                              case 5:
                                  n = t.child.stateNode;
                                  break;
                              case 1:
                                  n = t.child.stateNode
                              }
                          Xa(t, l, n)
                      }
                      break;
                  case 5:
                      var s = t.stateNode;
                      if (n === null && t.flags & 4) {
                          n = s;
                          var a = t.memoizedProps;
                          switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                              a.autoFocus && n.focus();
                              break;
                          case "img":
                              a.src && (n.src = a.src)
                          }
                      }
                      break;
                  case 6:
                      break;
                  case 4:
                      break;
                  case 12:
                      break;
                  case 13:
                      if (t.memoizedState === null) {
                          var c = t.alternate;
                          if (c !== null) {
                              var h = c.memoizedState;
                              if (h !== null) {
                                  var m = h.dehydrated;
                                  m !== null && or(m)
                              }
                          }
                      }
                      break;
                  case 19:
                  case 17:
                  case 21:
                  case 22:
                  case 23:
                  case 25:
                      break;
                  default:
                      throw Error(S(163))
                  }
              me || t.flags & 512 && Ul(t)
          } catch (p) {
              K(t, t.return, p)
          }
      }
      if (t === e) {
          P = null;
          break
      }
      if (n = t.sibling,
      n !== null) {
          n.return = t.return,
          P = n;
          break
      }
      P = t.return
  }
}
function cu(e) {
  for (; P !== null; ) {
      var t = P;
      if (t === e) {
          P = null;
          break
      }
      var n = t.sibling;
      if (n !== null) {
          n.return = t.return,
          P = n;
          break
      }
      P = t.return
  }
}
function fu(e) {
  for (; P !== null; ) {
      var t = P;
      try {
          switch (t.tag) {
          case 0:
          case 11:
          case 15:
              var n = t.return;
              try {
                  Xo(4, t)
              } catch (a) {
                  K(t, n, a)
              }
              break;
          case 1:
              var r = t.stateNode;
              if (typeof r.componentDidMount == "function") {
                  var o = t.return;
                  try {
                      r.componentDidMount()
                  } catch (a) {
                      K(t, o, a)
                  }
              }
              var i = t.return;
              try {
                  Ul(t)
              } catch (a) {
                  K(t, i, a)
              }
              break;
          case 5:
              var l = t.return;
              try {
                  Ul(t)
              } catch (a) {
                  K(t, l, a)
              }
          }
      } catch (a) {
          K(t, t.return, a)
      }
      if (t === e) {
          P = null;
          break
      }
      var s = t.sibling;
      if (s !== null) {
          s.return = t.return,
          P = s;
          break
      }
      P = t.return
  }
}
var z0 = Math.ceil
, Oo = pt.ReactCurrentDispatcher
, Ds = pt.ReactCurrentOwner
, Fe = pt.ReactCurrentBatchConfig
, M = 0
, ie = null
, b = null
, ue = 0
, Pe = 0
, un = jt(0)
, te = 0
, hr = null
, Yt = 0
, Ko = 0
, Fs = 0
, Jn = null
, Se = null
, Bs = 0
, Cn = 1 / 0
, ot = null
, Lo = !1
, Wl = null
, Pt = null
, Wr = !1
, St = null
, jo = 0
, qn = 0
, Ql = null
, oo = -1
, io = 0;
function ge() {
  return M & 6 ? J() : oo !== -1 ? oo : oo = J()
}
function _t(e) {
  return e.mode & 1 ? M & 2 && ue !== 0 ? ue & -ue : f0.transition !== null ? (io === 0 && (io = dc()),
  io) : (e = F,
  e !== 0 || (e = window.event,
  e = e === void 0 ? 16 : wc(e.type)),
  e) : 1
}
function Ke(e, t, n, r) {
  if (50 < qn)
      throw qn = 0,
      Ql = null,
      Error(S(185));
  kr(e, n, r),
  (!(M & 2) || e !== ie) && (e === ie && (!(M & 2) && (Ko |= n),
  te === 4 && vt(e, ue)),
  Ee(e, r),
  n === 1 && M === 0 && !(t.mode & 1) && (Cn = J() + 500,
  Wo && It()))
}
function Ee(e, t) {
  var n = e.callbackNode;
  fp(e, t);
  var r = ho(e, e === ie ? ue : 0);
  if (r === 0)
      n !== null && Sa(n),
      e.callbackNode = null,
      e.callbackPriority = 0;
  else if (t = r & -r,
  e.callbackPriority !== t) {
      if (n != null && Sa(n),
      t === 1)
          e.tag === 0 ? c0(du.bind(null, e)) : Fc(du.bind(null, e)),
          l0(function() {
              !(M & 6) && It()
          }),
          n = null;
      else {
          switch (pc(r)) {
          case 1:
              n = fs;
              break;
          case 4:
              n = cc;
              break;
          case 16:
              n = mo;
              break;
          case 536870912:
              n = fc;
              break;
          default:
              n = mo
          }
          n = Df(n, Of.bind(null, e))
      }
      e.callbackPriority = t,
      e.callbackNode = n
  }
}
function Of(e, t) {
  if (oo = -1,
  io = 0,
  M & 6)
      throw Error(S(327));
  var n = e.callbackNode;
  if (hn() && e.callbackNode !== n)
      return null;
  var r = ho(e, e === ie ? ue : 0);
  if (r === 0)
      return null;
  if (r & 30 || r & e.expiredLanes || t)
      t = Io(e, r);
  else {
      t = r;
      var o = M;
      M |= 2;
      var i = jf();
      (ie !== e || ue !== t) && (ot = null,
      Cn = J() + 500,
      Ut(e, t));
      do
          try {
              L0();
              break
          } catch (s) {
              Lf(e, s)
          }
      while (!0);
      Es(),
      Oo.current = i,
      M = o,
      b !== null ? t = 0 : (ie = null,
      ue = 0,
      t = te)
  }
  if (t !== 0) {
      if (t === 2 && (o = vl(e),
      o !== 0 && (r = o,
      t = Yl(e, o))),
      t === 1)
          throw n = hr,
          Ut(e, 0),
          vt(e, r),
          Ee(e, J()),
          n;
      if (t === 6)
          vt(e, r);
      else {
          if (o = e.current.alternate,
          !(r & 30) && !T0(o) && (t = Io(e, r),
          t === 2 && (i = vl(e),
          i !== 0 && (r = i,
          t = Yl(e, i))),
          t === 1))
              throw n = hr,
              Ut(e, 0),
              vt(e, r),
              Ee(e, J()),
              n;
          switch (e.finishedWork = o,
          e.finishedLanes = r,
          t) {
          case 0:
          case 1:
              throw Error(S(345));
          case 2:
              Dt(e, Se, ot);
              break;
          case 3:
              if (vt(e, r),
              (r & 130023424) === r && (t = Bs + 500 - J(),
              10 < t)) {
                  if (ho(e, 0) !== 0)
                      break;
                  if (o = e.suspendedLanes,
                  (o & r) !== r) {
                      ge(),
                      e.pingedLanes |= e.suspendedLanes & o;
                      break
                  }
                  e.timeoutHandle = Pl(Dt.bind(null, e, Se, ot), t);
                  break
              }
              Dt(e, Se, ot);
              break;
          case 4:
              if (vt(e, r),
              (r & 4194240) === r)
                  break;
              for (t = e.eventTimes,
              o = -1; 0 < r; ) {
                  var l = 31 - Xe(r);
                  i = 1 << l,
                  l = t[l],
                  l > o && (o = l),
                  r &= ~i
              }
              if (r = o,
              r = J() - r,
              r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * z0(r / 1960)) - r,
              10 < r) {
                  e.timeoutHandle = Pl(Dt.bind(null, e, Se, ot), r);
                  break
              }
              Dt(e, Se, ot);
              break;
          case 5:
              Dt(e, Se, ot);
              break;
          default:
              throw Error(S(329))
          }
      }
  }
  return Ee(e, J()),
  e.callbackNode === n ? Of.bind(null, e) : null
}
function Yl(e, t) {
  var n = Jn;
  return e.current.memoizedState.isDehydrated && (Ut(e, t).flags |= 256),
  e = Io(e, t),
  e !== 2 && (t = Se,
  Se = n,
  t !== null && Xl(t)),
  e
}
function Xl(e) {
  Se === null ? Se = e : Se.push.apply(Se, e)
}
function T0(e) {
  for (var t = e; ; ) {
      if (t.flags & 16384) {
          var n = t.updateQueue;
          if (n !== null && (n = n.stores,
          n !== null))
              for (var r = 0; r < n.length; r++) {
                  var o = n[r]
                    , i = o.getSnapshot;
                  o = o.value;
                  try {
                      if (!Ge(i(), o))
                          return !1
                  } catch {
                      return !1
                  }
              }
      }
      if (n = t.child,
      t.subtreeFlags & 16384 && n !== null)
          n.return = t,
          t = n;
      else {
          if (t === e)
              break;
          for (; t.sibling === null; ) {
              if (t.return === null || t.return === e)
                  return !0;
              t = t.return
          }
          t.sibling.return = t.return,
          t = t.sibling
      }
  }
  return !0
}
function vt(e, t) {
  for (t &= ~Fs,
  t &= ~Ko,
  e.suspendedLanes |= t,
  e.pingedLanes &= ~t,
  e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Xe(t)
        , r = 1 << n;
      e[n] = -1,
      t &= ~r
  }
}
function du(e) {
  if (M & 6)
      throw Error(S(327));
  hn();
  var t = ho(e, 0);
  if (!(t & 1))
      return Ee(e, J()),
      null;
  var n = Io(e, t);
  if (e.tag !== 0 && n === 2) {
      var r = vl(e);
      r !== 0 && (t = r,
      n = Yl(e, r))
  }
  if (n === 1)
      throw n = hr,
      Ut(e, 0),
      vt(e, t),
      Ee(e, J()),
      n;
  if (n === 6)
      throw Error(S(345));
  return e.finishedWork = e.current.alternate,
  e.finishedLanes = t,
  Dt(e, Se, ot),
  Ee(e, J()),
  null
}
function As(e, t) {
  var n = M;
  M |= 1;
  try {
      return e(t)
  } finally {
      M = n,
      M === 0 && (Cn = J() + 500,
      Wo && It())
  }
}
function Xt(e) {
  St !== null && St.tag === 0 && !(M & 6) && hn();
  var t = M;
  M |= 1;
  var n = Fe.transition
    , r = F;
  try {
      if (Fe.transition = null,
      F = 1,
      e)
          return e()
  } finally {
      F = r,
      Fe.transition = n,
      M = t,
      !(M & 6) && It()
  }
}
function Us() {
  Pe = un.current,
  H(un)
}
function Ut(e, t) {
  e.finishedWork = null,
  e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1,
  i0(n)),
  b !== null)
      for (n = b.return; n !== null; ) {
          var r = n;
          switch (ks(r),
          r.tag) {
          case 1:
              r = r.type.childContextTypes,
              r != null && So();
              break;
          case 3:
              kn(),
              H(xe),
              H(he),
              Os();
              break;
          case 5:
              Ts(r);
              break;
          case 4:
              kn();
              break;
          case 13:
              H(Q);
              break;
          case 19:
              H(Q);
              break;
          case 10:
              Ns(r.type._context);
              break;
          case 22:
          case 23:
              Us()
          }
          n = n.return
      }
  if (ie = e,
  b = e = zt(e.current, null),
  ue = Pe = t,
  te = 0,
  hr = null,
  Fs = Ko = Yt = 0,
  Se = Jn = null,
  Bt !== null) {
      for (t = 0; t < Bt.length; t++)
          if (n = Bt[t],
          r = n.interleaved,
          r !== null) {
              n.interleaved = null;
              var o = r.next
                , i = n.pending;
              if (i !== null) {
                  var l = i.next;
                  i.next = o,
                  r.next = l
              }
              n.pending = r
          }
      Bt = null
  }
  return e
}
function Lf(e, t) {
  do {
      var n = b;
      try {
          if (Es(),
          to.current = To,
          zo) {
              for (var r = Y.memoizedState; r !== null; ) {
                  var o = r.queue;
                  o !== null && (o.pending = null),
                  r = r.next
              }
              zo = !1
          }
          if (Qt = 0,
          oe = ee = Y = null,
          Gn = !1,
          dr = 0,
          Ds.current = null,
          n === null || n.return === null) {
              te = 1,
              hr = t,
              b = null;
              break
          }
          e: {
              var i = e
                , l = n.return
                , s = n
                , a = t;
              if (t = ue,
              s.flags |= 32768,
              a !== null && typeof a == "object" && typeof a.then == "function") {
                  var c = a
                    , h = s
                    , m = h.tag;
                  if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
                      var p = h.alternate;
                      p ? (h.updateQueue = p.updateQueue,
                      h.memoizedState = p.memoizedState,
                      h.lanes = p.lanes) : (h.updateQueue = null,
                      h.memoizedState = null)
                  }
                  var w = ba(l);
                  if (w !== null) {
                      w.flags &= -257,
                      eu(w, l, s, i, t),
                      w.mode & 1 && qa(i, c, t),
                      t = w,
                      a = c;
                      var v = t.updateQueue;
                      if (v === null) {
                          var y = new Set;
                          y.add(a),
                          t.updateQueue = y
                      } else
                          v.add(a);
                      break e
                  } else {
                      if (!(t & 1)) {
                          qa(i, c, t),
                          Vs();
                          break e
                      }
                      a = Error(S(426))
                  }
              } else if (W && s.mode & 1) {
                  var T = ba(l);
                  if (T !== null) {
                      !(T.flags & 65536) && (T.flags |= 256),
                      eu(T, l, s, i, t),
                      xs(xn(a, s));
                      break e
                  }
              }
              i = a = xn(a, s),
              te !== 4 && (te = 2),
              Jn === null ? Jn = [i] : Jn.push(i),
              i = l;
              do {
                  switch (i.tag) {
                  case 3:
                      i.flags |= 65536,
                      t &= -t,
                      i.lanes |= t;
                      var f = mf(i, a, t);
                      Ya(i, f);
                      break e;
                  case 1:
                      s = a;
                      var u = i.type
                        , d = i.stateNode;
                      if (!(i.flags & 128) && (typeof u.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (Pt === null || !Pt.has(d)))) {
                          i.flags |= 65536,
                          t &= -t,
                          i.lanes |= t;
                          var g = hf(i, s, t);
                          Ya(i, g);
                          break e
                      }
                  }
                  i = i.return
              } while (i !== null)
          }
          Rf(n)
      } catch (C) {
          t = C,
          b === n && n !== null && (b = n = n.return);
          continue
      }
      break
  } while (!0)
}
function jf() {
  var e = Oo.current;
  return Oo.current = To,
  e === null ? To : e
}
function Vs() {
  (te === 0 || te === 3 || te === 2) && (te = 4),
  ie === null || !(Yt & 268435455) && !(Ko & 268435455) || vt(ie, ue)
}
function Io(e, t) {
  var n = M;
  M |= 2;
  var r = jf();
  (ie !== e || ue !== t) && (ot = null,
  Ut(e, t));
  do
      try {
          O0();
          break
      } catch (o) {
          Lf(e, o)
      }
  while (!0);
  if (Es(),
  M = n,
  Oo.current = r,
  b !== null)
      throw Error(S(261));
  return ie = null,
  ue = 0,
  te
}
function O0() {
  for (; b !== null; )
      If(b)
}
function L0() {
  for (; b !== null && !np(); )
      If(b)
}
function If(e) {
  var t = $f(e.alternate, e, Pe);
  e.memoizedProps = e.pendingProps,
  t === null ? Rf(e) : b = t,
  Ds.current = null
}
function Rf(e) {
  var t = e;
  do {
      var n = t.alternate;
      if (e = t.return,
      t.flags & 32768) {
          if (n = E0(n, t),
          n !== null) {
              n.flags &= 32767,
              b = n;
              return
          }
          if (e !== null)
              e.flags |= 32768,
              e.subtreeFlags = 0,
              e.deletions = null;
          else {
              te = 6,
              b = null;
              return
          }
      } else if (n = C0(n, t, Pe),
      n !== null) {
          b = n;
          return
      }
      if (t = t.sibling,
      t !== null) {
          b = t;
          return
      }
      b = t = e
  } while (t !== null);
  te === 0 && (te = 5)
}
function Dt(e, t, n) {
  var r = F
    , o = Fe.transition;
  try {
      Fe.transition = null,
      F = 1,
      j0(e, t, n, r)
  } finally {
      Fe.transition = o,
      F = r
  }
  return null
}
function j0(e, t, n, r) {
  do
      hn();
  while (St !== null);
  if (M & 6)
      throw Error(S(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null)
      return null;
  if (e.finishedWork = null,
  e.finishedLanes = 0,
  n === e.current)
      throw Error(S(177));
  e.callbackNode = null,
  e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (dp(e, i),
  e === ie && (b = ie = null,
  ue = 0),
  !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Wr || (Wr = !0,
  Df(mo, function() {
      return hn(),
      null
  })),
  i = (n.flags & 15990) !== 0,
  n.subtreeFlags & 15990 || i) {
      i = Fe.transition,
      Fe.transition = null;
      var l = F;
      F = 1;
      var s = M;
      M |= 4,
      Ds.current = null,
      P0(e, n),
      zf(n, e),
      qp(El),
      yo = !!Cl,
      El = Cl = null,
      e.current = n,
      _0(n),
      rp(),
      M = s,
      F = l,
      Fe.transition = i
  } else
      e.current = n;
  if (Wr && (Wr = !1,
  St = e,
  jo = o),
  i = e.pendingLanes,
  i === 0 && (Pt = null),
  lp(n.stateNode),
  Ee(e, J()),
  t !== null)
      for (r = e.onRecoverableError,
      n = 0; n < t.length; n++)
          o = t[n],
          r(o.value, {
              componentStack: o.stack,
              digest: o.digest
          });
  if (Lo)
      throw Lo = !1,
      e = Wl,
      Wl = null,
      e;
  return jo & 1 && e.tag !== 0 && hn(),
  i = e.pendingLanes,
  i & 1 ? e === Ql ? qn++ : (qn = 0,
  Ql = e) : qn = 0,
  It(),
  null
}
function hn() {
  if (St !== null) {
      var e = pc(jo)
        , t = Fe.transition
        , n = F;
      try {
          if (Fe.transition = null,
          F = 16 > e ? 16 : e,
          St === null)
              var r = !1;
          else {
              if (e = St,
              St = null,
              jo = 0,
              M & 6)
                  throw Error(S(331));
              var o = M;
              for (M |= 4,
              P = e.current; P !== null; ) {
                  var i = P
                    , l = i.child;
                  if (P.flags & 16) {
                      var s = i.deletions;
                      if (s !== null) {
                          for (var a = 0; a < s.length; a++) {
                              var c = s[a];
                              for (P = c; P !== null; ) {
                                  var h = P;
                                  switch (h.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                      Zn(8, h, i)
                                  }
                                  var m = h.child;
                                  if (m !== null)
                                      m.return = h,
                                      P = m;
                                  else
                                      for (; P !== null; ) {
                                          h = P;
                                          var p = h.sibling
                                            , w = h.return;
                                          if (Nf(h),
                                          h === c) {
                                              P = null;
                                              break
                                          }
                                          if (p !== null) {
                                              p.return = w,
                                              P = p;
                                              break
                                          }
                                          P = w
                                      }
                              }
                          }
                          var v = i.alternate;
                          if (v !== null) {
                              var y = v.child;
                              if (y !== null) {
                                  v.child = null;
                                  do {
                                      var T = y.sibling;
                                      y.sibling = null,
                                      y = T
                                  } while (y !== null)
                              }
                          }
                          P = i
                      }
                  }
                  if (i.subtreeFlags & 2064 && l !== null)
                      l.return = i,
                      P = l;
                  else
                      e: for (; P !== null; ) {
                          if (i = P,
                          i.flags & 2048)
                              switch (i.tag) {
                              case 0:
                              case 11:
                              case 15:
                                  Zn(9, i, i.return)
                              }
                          var f = i.sibling;
                          if (f !== null) {
                              f.return = i.return,
                              P = f;
                              break e
                          }
                          P = i.return
                      }
              }
              var u = e.current;
              for (P = u; P !== null; ) {
                  l = P;
                  var d = l.child;
                  if (l.subtreeFlags & 2064 && d !== null)
                      d.return = l,
                      P = d;
                  else
                      e: for (l = u; P !== null; ) {
                          if (s = P,
                          s.flags & 2048)
                              try {
                                  switch (s.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                      Xo(9, s)
                                  }
                              } catch (C) {
                                  K(s, s.return, C)
                              }
                          if (s === l) {
                              P = null;
                              break e
                          }
                          var g = s.sibling;
                          if (g !== null) {
                              g.return = s.return,
                              P = g;
                              break e
                          }
                          P = s.return
                      }
              }
              if (M = o,
              It(),
              tt && typeof tt.onPostCommitFiberRoot == "function")
                  try {
                      tt.onPostCommitFiberRoot(Bo, e)
                  } catch {}
              r = !0
          }
          return r
      } finally {
          F = n,
          Fe.transition = t
      }
  }
  return !1
}
function pu(e, t, n) {
  t = xn(n, t),
  t = mf(e, t, 1),
  e = Nt(e, t, 1),
  t = ge(),
  e !== null && (kr(e, 1, t),
  Ee(e, t))
}
function K(e, t, n) {
  if (e.tag === 3)
      pu(e, e, n);
  else
      for (; t !== null; ) {
          if (t.tag === 3) {
              pu(t, e, n);
              break
          } else if (t.tag === 1) {
              var r = t.stateNode;
              if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Pt === null || !Pt.has(r))) {
                  e = xn(n, e),
                  e = hf(t, e, 1),
                  t = Nt(t, e, 1),
                  e = ge(),
                  t !== null && (kr(t, 1, e),
                  Ee(t, e));
                  break
              }
          }
          t = t.return
      }
}
function I0(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
  t = ge(),
  e.pingedLanes |= e.suspendedLanes & n,
  ie === e && (ue & n) === n && (te === 4 || te === 3 && (ue & 130023424) === ue && 500 > J() - Bs ? Ut(e, 0) : Fs |= n),
  Ee(e, t)
}
function Mf(e, t) {
  t === 0 && (e.mode & 1 ? (t = Rr,
  Rr <<= 1,
  !(Rr & 130023424) && (Rr = 4194304)) : t = 1);
  var n = ge();
  e = ft(e, t),
  e !== null && (kr(e, t, n),
  Ee(e, n))
}
function R0(e) {
  var t = e.memoizedState
    , n = 0;
  t !== null && (n = t.retryLane),
  Mf(e, n)
}
function M0(e, t) {
  var n = 0;
  switch (e.tag) {
  case 13:
      var r = e.stateNode
        , o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
  case 19:
      r = e.stateNode;
      break;
  default:
      throw Error(S(314))
  }
  r !== null && r.delete(t),
  Mf(e, n)
}
var $f;
$f = function(e, t, n) {
  if (e !== null)
      if (e.memoizedProps !== t.pendingProps || xe.current)
          ke = !0;
      else {
          if (!(e.lanes & n) && !(t.flags & 128))
              return ke = !1,
              x0(e, t, n);
          ke = !!(e.flags & 131072)
      }
  else
      ke = !1,
      W && t.flags & 1048576 && Bc(t, Co, t.index);
  switch (t.lanes = 0,
  t.tag) {
  case 2:
      var r = t.type;
      ro(e, t),
      e = t.pendingProps;
      var o = vn(t, he.current);
      mn(t, n),
      o = js(null, t, r, e, o, n);
      var i = Is();
      return t.flags |= 1,
      typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
      t.memoizedState = null,
      t.updateQueue = null,
      Ce(r) ? (i = !0,
      ko(t)) : i = !1,
      t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
      _s(t),
      o.updater = Yo,
      t.stateNode = o,
      o._reactInternals = t,
      Il(t, r, e, n),
      t = $l(null, t, r, !0, i, n)) : (t.tag = 0,
      W && i && Ss(t),
      ye(null, t, o, n),
      t = t.child),
      t;
  case 16:
      r = t.elementType;
      e: {
          switch (ro(e, t),
          e = t.pendingProps,
          o = r._init,
          r = o(r._payload),
          t.type = r,
          o = t.tag = D0(r),
          e = We(r, e),
          o) {
          case 0:
              t = Ml(null, t, r, e, n);
              break e;
          case 1:
              t = ru(null, t, r, e, n);
              break e;
          case 11:
              t = tu(null, t, r, e, n);
              break e;
          case 14:
              t = nu(null, t, r, We(r.type, e), n);
              break e
          }
          throw Error(S(306, r, ""))
      }
      return t;
  case 0:
      return r = t.type,
      o = t.pendingProps,
      o = t.elementType === r ? o : We(r, o),
      Ml(e, t, r, o, n);
  case 1:
      return r = t.type,
      o = t.pendingProps,
      o = t.elementType === r ? o : We(r, o),
      ru(e, t, r, o, n);
  case 3:
      e: {
          if (wf(t),
          e === null)
              throw Error(S(387));
          r = t.pendingProps,
          i = t.memoizedState,
          o = i.element,
          Qc(e, t),
          Po(t, r, null, n);
          var l = t.memoizedState;
          if (r = l.element,
          i.isDehydrated)
              if (i = {
                  element: r,
                  isDehydrated: !1,
                  cache: l.cache,
                  pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                  transitions: l.transitions
              },
              t.updateQueue.baseState = i,
              t.memoizedState = i,
              t.flags & 256) {
                  o = xn(Error(S(423)), t),
                  t = ou(e, t, r, n, o);
                  break e
              } else if (r !== o) {
                  o = xn(Error(S(424)), t),
                  t = ou(e, t, r, n, o);
                  break e
              } else
                  for (_e = Et(t.stateNode.containerInfo.firstChild),
                  ze = t,
                  W = !0,
                  Ye = null,
                  n = Hc(t, null, r, n),
                  t.child = n; n; )
                      n.flags = n.flags & -3 | 4096,
                      n = n.sibling;
          else {
              if (wn(),
              r === o) {
                  t = dt(e, t, n);
                  break e
              }
              ye(e, t, r, n)
          }
          t = t.child
      }
      return t;
  case 5:
      return Yc(t),
      e === null && Ol(t),
      r = t.type,
      o = t.pendingProps,
      i = e !== null ? e.memoizedProps : null,
      l = o.children,
      Nl(r, o) ? l = null : i !== null && Nl(r, i) && (t.flags |= 32),
      vf(e, t),
      ye(e, t, l, n),
      t.child;
  case 6:
      return e === null && Ol(t),
      null;
  case 13:
      return Sf(e, t, n);
  case 4:
      return zs(t, t.stateNode.containerInfo),
      r = t.pendingProps,
      e === null ? t.child = Sn(t, null, r, n) : ye(e, t, r, n),
      t.child;
  case 11:
      return r = t.type,
      o = t.pendingProps,
      o = t.elementType === r ? o : We(r, o),
      tu(e, t, r, o, n);
  case 7:
      return ye(e, t, t.pendingProps, n),
      t.child;
  case 8:
      return ye(e, t, t.pendingProps.children, n),
      t.child;
  case 12:
      return ye(e, t, t.pendingProps.children, n),
      t.child;
  case 10:
      e: {
          if (r = t.type._context,
          o = t.pendingProps,
          i = t.memoizedProps,
          l = o.value,
          U(Eo, r._currentValue),
          r._currentValue = l,
          i !== null)
              if (Ge(i.value, l)) {
                  if (i.children === o.children && !xe.current) {
                      t = dt(e, t, n);
                      break e
                  }
              } else
                  for (i = t.child,
                  i !== null && (i.return = t); i !== null; ) {
                      var s = i.dependencies;
                      if (s !== null) {
                          l = i.child;
                          for (var a = s.firstContext; a !== null; ) {
                              if (a.context === r) {
                                  if (i.tag === 1) {
                                      a = at(-1, n & -n),
                                      a.tag = 2;
                                      var c = i.updateQueue;
                                      if (c !== null) {
                                          c = c.shared;
                                          var h = c.pending;
                                          h === null ? a.next = a : (a.next = h.next,
                                          h.next = a),
                                          c.pending = a
                                      }
                                  }
                                  i.lanes |= n,
                                  a = i.alternate,
                                  a !== null && (a.lanes |= n),
                                  Ll(i.return, n, t),
                                  s.lanes |= n;
                                  break
                              }
                              a = a.next
                          }
                      } else if (i.tag === 10)
                          l = i.type === t.type ? null : i.child;
                      else if (i.tag === 18) {
                          if (l = i.return,
                          l === null)
                              throw Error(S(341));
                          l.lanes |= n,
                          s = l.alternate,
                          s !== null && (s.lanes |= n),
                          Ll(l, n, t),
                          l = i.sibling
                      } else
                          l = i.child;
                      if (l !== null)
                          l.return = i;
                      else
                          for (l = i; l !== null; ) {
                              if (l === t) {
                                  l = null;
                                  break
                              }
                              if (i = l.sibling,
                              i !== null) {
                                  i.return = l.return,
                                  l = i;
                                  break
                              }
                              l = l.return
                          }
                      i = l
                  }
          ye(e, t, o.children, n),
          t = t.child
      }
      return t;
  case 9:
      return o = t.type,
      r = t.pendingProps.children,
      mn(t, n),
      o = Be(o),
      r = r(o),
      t.flags |= 1,
      ye(e, t, r, n),
      t.child;
  case 14:
      return r = t.type,
      o = We(r, t.pendingProps),
      o = We(r.type, o),
      nu(e, t, r, o, n);
  case 15:
      return yf(e, t, t.type, t.pendingProps, n);
  case 17:
      return r = t.type,
      o = t.pendingProps,
      o = t.elementType === r ? o : We(r, o),
      ro(e, t),
      t.tag = 1,
      Ce(r) ? (e = !0,
      ko(t)) : e = !1,
      mn(t, n),
      pf(t, r, o),
      Il(t, r, o, n),
      $l(null, t, r, !0, e, n);
  case 19:
      return kf(e, t, n);
  case 22:
      return gf(e, t, n)
  }
  throw Error(S(156, t.tag))
}
;
function Df(e, t) {
  return uc(e, t)
}
function $0(e, t, n, r) {
  this.tag = e,
  this.key = n,
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
  this.index = 0,
  this.ref = null,
  this.pendingProps = t,
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
  this.mode = r,
  this.subtreeFlags = this.flags = 0,
  this.deletions = null,
  this.childLanes = this.lanes = 0,
  this.alternate = null
}
function $e(e, t, n, r) {
  return new $0(e,t,n,r)
}
function Hs(e) {
  return e = e.prototype,
  !(!e || !e.isReactComponent)
}
function D0(e) {
  if (typeof e == "function")
      return Hs(e) ? 1 : 0;
  if (e != null) {
      if (e = e.$$typeof,
      e === as)
          return 11;
      if (e === us)
          return 14
  }
  return 2
}
function zt(e, t) {
  var n = e.alternate;
  return n === null ? (n = $e(e.tag, t, e.key, e.mode),
  n.elementType = e.elementType,
  n.type = e.type,
  n.stateNode = e.stateNode,
  n.alternate = e,
  e.alternate = n) : (n.pendingProps = t,
  n.type = e.type,
  n.flags = 0,
  n.subtreeFlags = 0,
  n.deletions = null),
  n.flags = e.flags & 14680064,
  n.childLanes = e.childLanes,
  n.lanes = e.lanes,
  n.child = e.child,
  n.memoizedProps = e.memoizedProps,
  n.memoizedState = e.memoizedState,
  n.updateQueue = e.updateQueue,
  t = e.dependencies,
  n.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
  },
  n.sibling = e.sibling,
  n.index = e.index,
  n.ref = e.ref,
  n
}
function lo(e, t, n, r, o, i) {
  var l = 2;
  if (r = e,
  typeof e == "function")
      Hs(e) && (l = 1);
  else if (typeof e == "string")
      l = 5;
  else
      e: switch (e) {
      case qt:
          return Vt(n.children, o, i, t);
      case ss:
          l = 8,
          o |= 8;
          break;
      case rl:
          return e = $e(12, n, t, o | 2),
          e.elementType = rl,
          e.lanes = i,
          e;
      case ol:
          return e = $e(13, n, t, o),
          e.elementType = ol,
          e.lanes = i,
          e;
      case il:
          return e = $e(19, n, t, o),
          e.elementType = il,
          e.lanes = i,
          e;
      case Yu:
          return Go(n, o, i, t);
      default:
          if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
              case Wu:
                  l = 10;
                  break e;
              case Qu:
                  l = 9;
                  break e;
              case as:
                  l = 11;
                  break e;
              case us:
                  l = 14;
                  break e;
              case ht:
                  l = 16,
                  r = null;
                  break e
              }
          throw Error(S(130, e == null ? e : typeof e, ""))
      }
  return t = $e(l, n, t, o),
  t.elementType = e,
  t.type = r,
  t.lanes = i,
  t
}
function Vt(e, t, n, r) {
  return e = $e(7, e, r, t),
  e.lanes = n,
  e
}
function Go(e, t, n, r) {
  return e = $e(22, e, r, t),
  e.elementType = Yu,
  e.lanes = n,
  e.stateNode = {
      isHidden: !1
  },
  e
}
function Ji(e, t, n) {
  return e = $e(6, e, null, t),
  e.lanes = n,
  e
}
function qi(e, t, n) {
  return t = $e(4, e.children !== null ? e.children : [], e.key, t),
  t.lanes = n,
  t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
  },
  t
}
function F0(e, t, n, r, o) {
  this.tag = t,
  this.containerInfo = e,
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
  this.timeoutHandle = -1,
  this.callbackNode = this.pendingContext = this.context = null,
  this.callbackPriority = 0,
  this.eventTimes = ji(0),
  this.expirationTimes = ji(-1),
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
  this.entanglements = ji(0),
  this.identifierPrefix = r,
  this.onRecoverableError = o,
  this.mutableSourceEagerHydrationData = null
}
function Ws(e, t, n, r, o, i, l, s, a) {
  return e = new F0(e,t,n,s,a),
  t === 1 ? (t = 1,
  i === !0 && (t |= 8)) : t = 0,
  i = $e(3, null, null, t),
  e.current = i,
  i.stateNode = e,
  i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
  },
  _s(i),
  e
}
function B0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
      $$typeof: Jt,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n
  }
}
function Ff(e) {
  if (!e)
      return Ot;
  e = e._reactInternals;
  e: {
      if (Gt(e) !== e || e.tag !== 1)
          throw Error(S(170));
      var t = e;
      do {
          switch (t.tag) {
          case 3:
              t = t.stateNode.context;
              break e;
          case 1:
              if (Ce(t.type)) {
                  t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                  break e
              }
          }
          t = t.return
      } while (t !== null);
      throw Error(S(171))
  }
  if (e.tag === 1) {
      var n = e.type;
      if (Ce(n))
          return Dc(e, n, t)
  }
  return t
}
function Bf(e, t, n, r, o, i, l, s, a) {
  return e = Ws(n, r, !0, e, o, i, l, s, a),
  e.context = Ff(null),
  n = e.current,
  r = ge(),
  o = _t(n),
  i = at(r, o),
  i.callback = t ?? null,
  Nt(n, i, o),
  e.current.lanes = o,
  kr(e, o, r),
  Ee(e, r),
  e
}
function Zo(e, t, n, r) {
  var o = t.current
    , i = ge()
    , l = _t(o);
  return n = Ff(n),
  t.context === null ? t.context = n : t.pendingContext = n,
  t = at(i, l),
  t.payload = {
      element: e
  },
  r = r === void 0 ? null : r,
  r !== null && (t.callback = r),
  e = Nt(o, t, l),
  e !== null && (Ke(e, o, l, i),
  eo(e, o, l)),
  l
}
function Ro(e) {
  if (e = e.current,
  !e.child)
      return null;
  switch (e.child.tag) {
  case 5:
      return e.child.stateNode;
  default:
      return e.child.stateNode
  }
}
function mu(e, t) {
  if (e = e.memoizedState,
  e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t
  }
}
function Qs(e, t) {
  mu(e, t),
  (e = e.alternate) && mu(e, t)
}
function A0() {
  return null
}
var Af = typeof reportError == "function" ? reportError : function(e) {
  console.error(e)
}
;
function Ys(e) {
  this._internalRoot = e
}
Jo.prototype.render = Ys.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null)
      throw Error(S(409));
  Zo(e, t, null, null)
}
;
Jo.prototype.unmount = Ys.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Xt(function() {
          Zo(null, e, null, null)
      }),
      t[ct] = null
  }
}
;
function Jo(e) {
  this._internalRoot = e
}
Jo.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
      var t = yc();
      e = {
          blockedOn: null,
          target: e,
          priority: t
      };
      for (var n = 0; n < gt.length && t !== 0 && t < gt[n].priority; n++)
          ;
      gt.splice(n, 0, e),
      n === 0 && vc(e)
  }
}
;
function Xs(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function qo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function hu() {}
function U0(e, t, n, r, o) {
  if (o) {
      if (typeof r == "function") {
          var i = r;
          r = function() {
              var c = Ro(l);
              i.call(c)
          }
      }
      var l = Bf(t, r, e, 0, null, !1, !1, "", hu);
      return e._reactRootContainer = l,
      e[ct] = l.current,
      sr(e.nodeType === 8 ? e.parentNode : e),
      Xt(),
      l
  }
  for (; o = e.lastChild; )
      e.removeChild(o);
  if (typeof r == "function") {
      var s = r;
      r = function() {
          var c = Ro(a);
          s.call(c)
      }
  }
  var a = Ws(e, 0, !1, null, null, !1, !1, "", hu);
  return e._reactRootContainer = a,
  e[ct] = a.current,
  sr(e.nodeType === 8 ? e.parentNode : e),
  Xt(function() {
      Zo(t, a, n, r)
  }),
  a
}
function bo(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
      var l = i;
      if (typeof o == "function") {
          var s = o;
          o = function() {
              var a = Ro(l);
              s.call(a)
          }
      }
      Zo(t, l, e, o)
  } else
      l = U0(n, t, e, o, r);
  return Ro(l)
}
mc = function(e) {
  switch (e.tag) {
  case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
          var n = Vn(t.pendingLanes);
          n !== 0 && (ds(t, n | 1),
          Ee(t, J()),
          !(M & 6) && (Cn = J() + 500,
          It()))
      }
      break;
  case 13:
      Xt(function() {
          var r = ft(e, 1);
          if (r !== null) {
              var o = ge();
              Ke(r, e, 1, o)
          }
      }),
      Qs(e, 1)
  }
}
;
ps = function(e) {
  if (e.tag === 13) {
      var t = ft(e, 134217728);
      if (t !== null) {
          var n = ge();
          Ke(t, e, 134217728, n)
      }
      Qs(e, 134217728)
  }
}
;
hc = function(e) {
  if (e.tag === 13) {
      var t = _t(e)
        , n = ft(e, t);
      if (n !== null) {
          var r = ge();
          Ke(n, e, t, r)
      }
      Qs(e, t)
  }
}
;
yc = function() {
  return F
}
;
gc = function(e, t) {
  var n = F;
  try {
      return F = e,
      t()
  } finally {
      F = n
  }
}
;
hl = function(e, t, n) {
  switch (t) {
  case "input":
      if (al(e, n),
      t = n.name,
      n.type === "radio" && t != null) {
          for (n = e; n.parentNode; )
              n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
          t = 0; t < n.length; t++) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                  var o = Ho(r);
                  if (!o)
                      throw Error(S(90));
                  Ku(r),
                  al(r, o)
              }
          }
      }
      break;
  case "textarea":
      Zu(e, n);
      break;
  case "select":
      t = n.value,
      t != null && cn(e, !!n.multiple, t, !1)
  }
}
;
rc = As;
oc = Xt;
var V0 = {
  usingClientEntryPoint: !1,
  Events: [Cr, nn, Ho, tc, nc, As]
}
, Fn = {
  findFiberByHostInstance: Ft,
  bundleType: 0,
  version: "18.3.1",
  rendererPackageName: "react-dom"
}
, H0 = {
  bundleType: Fn.bundleType,
  version: Fn.version,
  rendererPackageName: Fn.rendererPackageName,
  rendererConfig: Fn.rendererConfig,
  overrideHookState: null,
  overrideHookStateDeletePath: null,
  overrideHookStateRenamePath: null,
  overrideProps: null,
  overridePropsDeletePath: null,
  overridePropsRenamePath: null,
  setErrorHandler: null,
  setSuspenseHandler: null,
  scheduleUpdate: null,
  currentDispatcherRef: pt.ReactCurrentDispatcher,
  findHostInstanceByFiber: function(e) {
      return e = sc(e),
      e === null ? null : e.stateNode
  },
  findFiberByHostInstance: Fn.findFiberByHostInstance || A0,
  findHostInstancesForRefresh: null,
  scheduleRefresh: null,
  scheduleRoot: null,
  setRefreshHandler: null,
  getCurrentFiber: null,
  reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Qr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Qr.isDisabled && Qr.supportsFiber)
      try {
          Bo = Qr.inject(H0),
          tt = Qr
      } catch {}
}
Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = V0;
Le.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Xs(t))
      throw Error(S(200));
  return B0(e, t, null, n)
}
;
Le.createRoot = function(e, t) {
  if (!Xs(e))
      throw Error(S(299));
  var n = !1
    , r = ""
    , o = Af;
  return t != null && (t.unstable_strictMode === !0 && (n = !0),
  t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
  t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
  t = Ws(e, 1, !1, null, null, n, !1, r, o),
  e[ct] = t.current,
  sr(e.nodeType === 8 ? e.parentNode : e),
  new Ys(t)
}
;
Le.findDOMNode = function(e) {
  if (e == null)
      return null;
  if (e.nodeType === 1)
      return e;
  var t = e._reactInternals;
  if (t === void 0)
      throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","),
      Error(S(268, e)));
  return e = sc(t),
  e = e === null ? null : e.stateNode,
  e
}
;
Le.flushSync = function(e) {
  return Xt(e)
}
;
Le.hydrate = function(e, t, n) {
  if (!qo(t))
      throw Error(S(200));
  return bo(null, e, t, !0, n)
}
;
Le.hydrateRoot = function(e, t, n) {
  if (!Xs(e))
      throw Error(S(405));
  var r = n != null && n.hydratedSources || null
    , o = !1
    , i = ""
    , l = Af;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0),
  n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
  n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
  t = Bf(t, null, e, 1, n ?? null, o, !1, i, l),
  e[ct] = t.current,
  sr(e),
  r)
      for (e = 0; e < r.length; e++)
          n = r[e],
          o = n._getVersion,
          o = o(n._source),
          t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
  return new Jo(t)
}
;
Le.render = function(e, t, n) {
  if (!qo(t))
      throw Error(S(200));
  return bo(null, e, t, !1, n)
}
;
Le.unmountComponentAtNode = function(e) {
  if (!qo(e))
      throw Error(S(40));
  return e._reactRootContainer ? (Xt(function() {
      bo(null, null, e, !1, function() {
          e._reactRootContainer = null,
          e[ct] = null
      })
  }),
  !0) : !1
}
;
Le.unstable_batchedUpdates = As;
Le.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!qo(n))
      throw Error(S(200));
  if (e == null || e._reactInternals === void 0)
      throw Error(S(38));
  return bo(e, t, n, !1, r)
}
;
Le.version = "18.3.1-next-f1338f8080-20240426";
function Uf() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uf)
      } catch (e) {
          console.error(e)
      }
}
Uf(),
Au.exports = Le;
var W0 = Au.exports
, yu = W0;
tl.createRoot = yu.createRoot,
tl.hydrateRoot = yu.hydrateRoot;
const Q0 = ()=>{
  const e = (t,n)=>{
      n.preventDefault();
      const r = document.getElementById(t);
      r && window.scrollTo({
          top: r.offsetTop,
          behavior: "smooth"
      })
  }
  ;
  return N.jsx("section", {
      className: "flex justify-center items-center my-16 w-full z-50",
      children: N.jsx("a", {
          className: "inline-block underline cursor-pointer text-customBlack hover:text-customBlackLight transition-all duration-200",
          onClick: t=>{
              e("banner", t)
          }
          ,
          children: "volver al inicio"
      })
  })
}
;
function Y0(e) {
  if (e.sheet)
      return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
      if (document.styleSheets[t].ownerNode === e)
          return document.styleSheets[t]
}
function X0(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key),
  e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
  t.appendChild(document.createTextNode("")),
  t.setAttribute("data-s", ""),
  t
}
var K0 = function() {
  function e(n) {
      var r = this;
      this._insertTag = function(o) {
          var i;
          r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling,
          r.container.insertBefore(o, i),
          r.tags.push(o)
      }
      ,
      this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy,
      this.tags = [],
      this.ctr = 0,
      this.nonce = n.nonce,
      this.key = n.key,
      this.container = n.container,
      this.prepend = n.prepend,
      this.insertionPoint = n.insertionPoint,
      this.before = null
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
      r.forEach(this._insertTag)
  }
  ,
  t.insert = function(r) {
      this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(X0(this));
      var o = this.tags[this.tags.length - 1];
      if (this.isSpeedy) {
          var i = Y0(o);
          try {
              i.insertRule(r, i.cssRules.length)
          } catch {}
      } else
          o.appendChild(document.createTextNode(r));
      this.ctr++
  }
  ,
  t.flush = function() {
      this.tags.forEach(function(r) {
          return r.parentNode && r.parentNode.removeChild(r)
      }),
      this.tags = [],
      this.ctr = 0
  }
  ,
  e
}()
, pe = "-ms-"
, Mo = "-moz-"
, $ = "-webkit-"
, Vf = "comm"
, Ks = "rule"
, Gs = "decl"
, G0 = "@import"
, Hf = "@keyframes"
, Z0 = "@layer"
, J0 = Math.abs
, ei = String.fromCharCode
, q0 = Object.assign;
function b0(e, t) {
  return ae(e, 0) ^ 45 ? (((t << 2 ^ ae(e, 0)) << 2 ^ ae(e, 1)) << 2 ^ ae(e, 2)) << 2 ^ ae(e, 3) : 0
}
function Wf(e) {
  return e.trim()
}
function em(e, t) {
  return (e = t.exec(e)) ? e[0] : e
}
function D(e, t, n) {
  return e.replace(t, n)
}
function Kl(e, t) {
  return e.indexOf(t)
}
function ae(e, t) {
  return e.charCodeAt(t) | 0
}
function yr(e, t, n) {
  return e.slice(t, n)
}
function qe(e) {
  return e.length
}
function Zs(e) {
  return e.length
}
function Yr(e, t) {
  return t.push(e),
  e
}
function tm(e, t) {
  return e.map(t).join("")
}
var ti = 1
, En = 1
, Qf = 0
, Ne = 0
, q = 0
, zn = "";
function ni(e, t, n, r, o, i, l) {
  return {
      value: e,
      root: t,
      parent: n,
      type: r,
      props: o,
      children: i,
      line: ti,
      column: En,
      length: l,
      return: ""
  }
}
function Bn(e, t) {
  return q0(ni("", null, null, "", null, null, 0), e, {
      length: -e.length
  }, t)
}
function nm() {
  return q
}
function rm() {
  return q = Ne > 0 ? ae(zn, --Ne) : 0,
  En--,
  q === 10 && (En = 1,
  ti--),
  q
}
function Te() {
  return q = Ne < Qf ? ae(zn, Ne++) : 0,
  En++,
  q === 10 && (En = 1,
  ti++),
  q
}
function rt() {
  return ae(zn, Ne)
}
function so() {
  return Ne
}
function Nr(e, t) {
  return yr(zn, e, t)
}
function gr(e) {
  switch (e) {
  case 0:
  case 9:
  case 10:
  case 13:
  case 32:
      return 5;
  case 33:
  case 43:
  case 44:
  case 47:
  case 62:
  case 64:
  case 126:
  case 59:
  case 123:
  case 125:
      return 4;
  case 58:
      return 3;
  case 34:
  case 39:
  case 40:
  case 91:
      return 2;
  case 41:
  case 93:
      return 1
  }
  return 0
}
function Yf(e) {
  return ti = En = 1,
  Qf = qe(zn = e),
  Ne = 0,
  []
}
function Xf(e) {
  return zn = "",
  e
}
function ao(e) {
  return Wf(Nr(Ne - 1, Gl(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
}
function om(e) {
  for (; (q = rt()) && q < 33; )
      Te();
  return gr(e) > 2 || gr(q) > 3 ? "" : " "
}
function im(e, t) {
  for (; --t && Te() && !(q < 48 || q > 102 || q > 57 && q < 65 || q > 70 && q < 97); )
      ;
  return Nr(e, so() + (t < 6 && rt() == 32 && Te() == 32))
}
function Gl(e) {
  for (; Te(); )
      switch (q) {
      case e:
          return Ne;
      case 34:
      case 39:
          e !== 34 && e !== 39 && Gl(q);
          break;
      case 40:
          e === 41 && Gl(e);
          break;
      case 92:
          Te();
          break
      }
  return Ne
}
function lm(e, t) {
  for (; Te() && e + q !== 57; )
      if (e + q === 84 && rt() === 47)
          break;
  return "/*" + Nr(t, Ne - 1) + "*" + ei(e === 47 ? e : Te())
}
function sm(e) {
  for (; !gr(rt()); )
      Te();
  return Nr(e, Ne)
}
function am(e) {
  return Xf(uo("", null, null, null, [""], e = Yf(e), 0, [0], e))
}
function uo(e, t, n, r, o, i, l, s, a) {
  for (var c = 0, h = 0, m = l, p = 0, w = 0, v = 0, y = 1, T = 1, f = 1, u = 0, d = "", g = o, C = i, E = r, x = d; T; )
      switch (v = u,
      u = Te()) {
      case 40:
          if (v != 108 && ae(x, m - 1) == 58) {
              Kl(x += D(ao(u), "&", "&\f"), "&\f") != -1 && (f = -1);
              break
          }
      case 34:
      case 39:
      case 91:
          x += ao(u);
          break;
      case 9:
      case 10:
      case 13:
      case 32:
          x += om(v);
          break;
      case 92:
          x += im(so() - 1, 7);
          continue;
      case 47:
          switch (rt()) {
          case 42:
          case 47:
              Yr(um(lm(Te(), so()), t, n), a);
              break;
          default:
              x += "/"
          }
          break;
      case 123 * y:
          s[c++] = qe(x) * f;
      case 125 * y:
      case 59:
      case 0:
          switch (u) {
          case 0:
          case 125:
              T = 0;
          case 59 + h:
              f == -1 && (x = D(x, /\f/g, "")),
              w > 0 && qe(x) - m && Yr(w > 32 ? vu(x + ";", r, n, m - 1) : vu(D(x, " ", "") + ";", r, n, m - 2), a);
              break;
          case 59:
              x += ";";
          default:
              if (Yr(E = gu(x, t, n, c, h, o, s, d, g = [], C = [], m), i),
              u === 123)
                  if (h === 0)
                      uo(x, t, E, E, g, i, m, s, C);
                  else
                      switch (p === 99 && ae(x, 3) === 110 ? 100 : p) {
                      case 100:
                      case 108:
                      case 109:
                      case 115:
                          uo(e, E, E, r && Yr(gu(e, E, E, 0, 0, o, s, d, o, g = [], m), C), o, C, m, s, r ? g : C);
                          break;
                      default:
                          uo(x, E, E, E, [""], C, 0, s, C)
                      }
          }
          c = h = w = 0,
          y = f = 1,
          d = x = "",
          m = l;
          break;
      case 58:
          m = 1 + qe(x),
          w = v;
      default:
          if (y < 1) {
              if (u == 123)
                  --y;
              else if (u == 125 && y++ == 0 && rm() == 125)
                  continue
          }
          switch (x += ei(u),
          u * y) {
          case 38:
              f = h > 0 ? 1 : (x += "\f",
              -1);
              break;
          case 44:
              s[c++] = (qe(x) - 1) * f,
              f = 1;
              break;
          case 64:
              rt() === 45 && (x += ao(Te())),
              p = rt(),
              h = m = qe(d = x += sm(so())),
              u++;
              break;
          case 45:
              v === 45 && qe(x) == 2 && (y = 0)
          }
      }
  return i
}
function gu(e, t, n, r, o, i, l, s, a, c, h) {
  for (var m = o - 1, p = o === 0 ? i : [""], w = Zs(p), v = 0, y = 0, T = 0; v < r; ++v)
      for (var f = 0, u = yr(e, m + 1, m = J0(y = l[v])), d = e; f < w; ++f)
          (d = Wf(y > 0 ? p[f] + " " + u : D(u, /&\f/g, p[f]))) && (a[T++] = d);
  return ni(e, t, n, o === 0 ? Ks : s, a, c, h)
}
function um(e, t, n) {
  return ni(e, t, n, Vf, ei(nm()), yr(e, 2, -2), 0)
}
function vu(e, t, n, r) {
  return ni(e, t, n, Gs, yr(e, 0, r), yr(e, r + 1, -1), r)
}
function yn(e, t) {
  for (var n = "", r = Zs(e), o = 0; o < r; o++)
      n += t(e[o], o, e, t) || "";
  return n
}
function cm(e, t, n, r) {
  switch (e.type) {
  case Z0:
      if (e.children.length)
          break;
  case G0:
  case Gs:
      return e.return = e.return || e.value;
  case Vf:
      return "";
  case Hf:
      return e.return = e.value + "{" + yn(e.children, r) + "}";
  case Ks:
      e.value = e.props.join(",")
  }
  return qe(n = yn(e.children, r)) ? e.return = e.value + "{" + n + "}" : ""
}
function fm(e) {
  var t = Zs(e);
  return function(n, r, o, i) {
      for (var l = "", s = 0; s < t; s++)
          l += e[s](n, r, o, i) || "";
      return l
  }
}
function dm(e) {
  return function(t) {
      t.root || (t = t.return) && e(t)
  }
}
function pm(e) {
  var t = Object.create(null);
  return function(n) {
      return t[n] === void 0 && (t[n] = e(n)),
      t[n]
  }
}
var mm = function(t, n, r) {
  for (var o = 0, i = 0; o = i,
  i = rt(),
  o === 38 && i === 12 && (n[r] = 1),
  !gr(i); )
      Te();
  return Nr(t, Ne)
}
, hm = function(t, n) {
  var r = -1
    , o = 44;
  do
      switch (gr(o)) {
      case 0:
          o === 38 && rt() === 12 && (n[r] = 1),
          t[r] += mm(Ne - 1, n, r);
          break;
      case 2:
          t[r] += ao(o);
          break;
      case 4:
          if (o === 44) {
              t[++r] = rt() === 58 ? "&\f" : "",
              n[r] = t[r].length;
              break
          }
      default:
          t[r] += ei(o)
      }
  while (o = Te());
  return t
}
, ym = function(t, n) {
  return Xf(hm(Yf(t), n))
}
, wu = new WeakMap
, gm = function(t) {
  if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
          if (r = r.parent,
          !r)
              return;
      if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !wu.get(r)) && !o) {
          wu.set(t, !0);
          for (var i = [], l = ym(n, i), s = r.props, a = 0, c = 0; a < l.length; a++)
              for (var h = 0; h < s.length; h++,
              c++)
                  t.props[c] = i[a] ? l[a].replace(/&\f/g, s[h]) : s[h] + " " + l[a]
      }
  }
}
, vm = function(t) {
  if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 && n.charCodeAt(2) === 98 && (t.return = "",
      t.value = "")
  }
};
function Kf(e, t) {
  switch (b0(e, t)) {
  case 5103:
      return $ + "print-" + e + e;
  case 5737:
  case 4201:
  case 3177:
  case 3433:
  case 1641:
  case 4457:
  case 2921:
  case 5572:
  case 6356:
  case 5844:
  case 3191:
  case 6645:
  case 3005:
  case 6391:
  case 5879:
  case 5623:
  case 6135:
  case 4599:
  case 4855:
  case 4215:
  case 6389:
  case 5109:
  case 5365:
  case 5621:
  case 3829:
      return $ + e + e;
  case 5349:
  case 4246:
  case 4810:
  case 6968:
  case 2756:
      return $ + e + Mo + e + pe + e + e;
  case 6828:
  case 4268:
      return $ + e + pe + e + e;
  case 6165:
      return $ + e + pe + "flex-" + e + e;
  case 5187:
      return $ + e + D(e, /(\w+).+(:[^]+)/, $ + "box-$1$2" + pe + "flex-$1$2") + e;
  case 5443:
      return $ + e + pe + "flex-item-" + D(e, /flex-|-self/, "") + e;
  case 4675:
      return $ + e + pe + "flex-line-pack" + D(e, /align-content|flex-|-self/, "") + e;
  case 5548:
      return $ + e + pe + D(e, "shrink", "negative") + e;
  case 5292:
      return $ + e + pe + D(e, "basis", "preferred-size") + e;
  case 6060:
      return $ + "box-" + D(e, "-grow", "") + $ + e + pe + D(e, "grow", "positive") + e;
  case 4554:
      return $ + D(e, /([^-])(transform)/g, "$1" + $ + "$2") + e;
  case 6187:
      return D(D(D(e, /(zoom-|grab)/, $ + "$1"), /(image-set)/, $ + "$1"), e, "") + e;
  case 5495:
  case 3959:
      return D(e, /(image-set\([^]*)/, $ + "$1$`$1");
  case 4968:
      return D(D(e, /(.+:)(flex-)?(.*)/, $ + "box-pack:$3" + pe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + $ + e + e;
  case 4095:
  case 3583:
  case 4068:
  case 2532:
      return D(e, /(.+)-inline(.+)/, $ + "$1$2") + e;
  case 8116:
  case 7059:
  case 5753:
  case 5535:
  case 5445:
  case 5701:
  case 4933:
  case 4677:
  case 5533:
  case 5789:
  case 5021:
  case 4765:
      if (qe(e) - 1 - t > 6)
          switch (ae(e, t + 1)) {
          case 109:
              if (ae(e, t + 4) !== 45)
                  break;
          case 102:
              return D(e, /(.+:)(.+)-([^]+)/, "$1" + $ + "$2-$3$1" + Mo + (ae(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
              return ~Kl(e, "stretch") ? Kf(D(e, "stretch", "fill-available"), t) + e : e
          }
      break;
  case 4949:
      if (ae(e, t + 1) !== 115)
          break;
  case 6444:
      switch (ae(e, qe(e) - 3 - (~Kl(e, "!important") && 10))) {
      case 107:
          return D(e, ":", ":" + $) + e;
      case 101:
          return D(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + $ + (ae(e, 14) === 45 ? "inline-" : "") + "box$3$1" + $ + "$2$3$1" + pe + "$2box$3") + e
      }
      break;
  case 5936:
      switch (ae(e, t + 11)) {
      case 114:
          return $ + e + pe + D(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
      case 108:
          return $ + e + pe + D(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
      case 45:
          return $ + e + pe + D(e, /[svh]\w+-[tblr]{2}/, "lr") + e
      }
      return $ + e + pe + e + e
  }
  return e
}
var wm = function(t, n, r, o) {
  if (t.length > -1 && !t.return)
      switch (t.type) {
      case Gs:
          t.return = Kf(t.value, t.length);
          break;
      case Hf:
          return yn([Bn(t, {
              value: D(t.value, "@", "@" + $)
          })], o);
      case Ks:
          if (t.length)
              return tm(t.props, function(i) {
                  switch (em(i, /(::plac\w+|:read-\w+)/)) {
                  case ":read-only":
                  case ":read-write":
                      return yn([Bn(t, {
                          props: [D(i, /:(read-\w+)/, ":" + Mo + "$1")]
                      })], o);
                  case "::placeholder":
                      return yn([Bn(t, {
                          props: [D(i, /:(plac\w+)/, ":" + $ + "input-$1")]
                      }), Bn(t, {
                          props: [D(i, /:(plac\w+)/, ":" + Mo + "$1")]
                      }), Bn(t, {
                          props: [D(i, /:(plac\w+)/, pe + "input-$1")]
                      })], o)
                  }
                  return ""
              })
      }
}
, Sm = [wm]
, km = function(t) {
  var n = t.key;
  if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function(y) {
          var T = y.getAttribute("data-emotion");
          T.indexOf(" ") !== -1 && (document.head.appendChild(y),
          y.setAttribute("data-s", ""))
      })
  }
  var o = t.stylisPlugins || Sm, i = {}, l, s = [];
  l = t.container || document.head,
  Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + n + ' "]'), function(y) {
      for (var T = y.getAttribute("data-emotion").split(" "), f = 1; f < T.length; f++)
          i[T[f]] = !0;
      s.push(y)
  });
  var a, c = [gm, vm];
  {
      var h, m = [cm, dm(function(y) {
          h.insert(y)
      })], p = fm(c.concat(o, m)), w = function(T) {
          return yn(am(T), p)
      };
      a = function(T, f, u, d) {
          h = u,
          w(T ? T + "{" + f.styles + "}" : f.styles),
          d && (v.inserted[f.name] = !0)
      }
  }
  var v = {
      key: n,
      sheet: new K0({
          key: n,
          container: l,
          nonce: t.nonce,
          speedy: t.speedy,
          prepend: t.prepend,
          insertionPoint: t.insertionPoint
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: a
  };
  return v.sheet.hydrate(s),
  v
}
, Gf = {
  exports: {}
}
, B = {};
/** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var le = typeof Symbol == "function" && Symbol.for
, Js = le ? Symbol.for("react.element") : 60103
, qs = le ? Symbol.for("react.portal") : 60106
, ri = le ? Symbol.for("react.fragment") : 60107
, oi = le ? Symbol.for("react.strict_mode") : 60108
, ii = le ? Symbol.for("react.profiler") : 60114
, li = le ? Symbol.for("react.provider") : 60109
, si = le ? Symbol.for("react.context") : 60110
, bs = le ? Symbol.for("react.async_mode") : 60111
, ai = le ? Symbol.for("react.concurrent_mode") : 60111
, ui = le ? Symbol.for("react.forward_ref") : 60112
, ci = le ? Symbol.for("react.suspense") : 60113
, xm = le ? Symbol.for("react.suspense_list") : 60120
, fi = le ? Symbol.for("react.memo") : 60115
, di = le ? Symbol.for("react.lazy") : 60116
, Cm = le ? Symbol.for("react.block") : 60121
, Em = le ? Symbol.for("react.fundamental") : 60117
, Nm = le ? Symbol.for("react.responder") : 60118
, Pm = le ? Symbol.for("react.scope") : 60119;
function Ie(e) {
  if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
      case Js:
          switch (e = e.type,
          e) {
          case bs:
          case ai:
          case ri:
          case ii:
          case oi:
          case ci:
              return e;
          default:
              switch (e = e && e.$$typeof,
              e) {
              case si:
              case ui:
              case di:
              case fi:
              case li:
                  return e;
              default:
                  return t
              }
          }
      case qs:
          return t
      }
  }
}
function Zf(e) {
  return Ie(e) === ai
}
B.AsyncMode = bs;
B.ConcurrentMode = ai;
B.ContextConsumer = si;
B.ContextProvider = li;
B.Element = Js;
B.ForwardRef = ui;
B.Fragment = ri;
B.Lazy = di;
B.Memo = fi;
B.Portal = qs;
B.Profiler = ii;
B.StrictMode = oi;
B.Suspense = ci;
B.isAsyncMode = function(e) {
  return Zf(e) || Ie(e) === bs
}
;
B.isConcurrentMode = Zf;
B.isContextConsumer = function(e) {
  return Ie(e) === si
}
;
B.isContextProvider = function(e) {
  return Ie(e) === li
}
;
B.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Js
}
;
B.isForwardRef = function(e) {
  return Ie(e) === ui
}
;
B.isFragment = function(e) {
  return Ie(e) === ri
}
;
B.isLazy = function(e) {
  return Ie(e) === di
}
;
B.isMemo = function(e) {
  return Ie(e) === fi
}
;
B.isPortal = function(e) {
  return Ie(e) === qs
}
;
B.isProfiler = function(e) {
  return Ie(e) === ii
}
;
B.isStrictMode = function(e) {
  return Ie(e) === oi
}
;
B.isSuspense = function(e) {
  return Ie(e) === ci
}
;
B.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === ri || e === ai || e === ii || e === oi || e === ci || e === xm || typeof e == "object" && e !== null && (e.$$typeof === di || e.$$typeof === fi || e.$$typeof === li || e.$$typeof === si || e.$$typeof === ui || e.$$typeof === Em || e.$$typeof === Nm || e.$$typeof === Pm || e.$$typeof === Cm)
}
;
B.typeOf = Ie;
Gf.exports = B;
var _m = Gf.exports
, Jf = _m
, zm = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}
, Tm = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}
, qf = {};
qf[Jf.ForwardRef] = zm;
qf[Jf.Memo] = Tm;
var Om = !0;
function bf(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : r += o + " "
  }),
  r
}
var ea = function(t, n, r) {
  var o = t.key + "-" + n.name;
  (r === !1 || Om === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles)
}
, ed = function(t, n, r) {
  ea(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
      var i = n;
      do
          t.insert(n === i ? "." + o : "", i, t.sheet, !0),
          i = i.next;
      while (i !== void 0)
  }
};
function Lm(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r,
  o -= 4)
      n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24,
      n = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16),
      n ^= n >>> 24,
      t = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
  case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
  case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
  case 1:
      t ^= e.charCodeAt(r) & 255,
      t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16)
  }
  return t ^= t >>> 13,
  t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16),
  ((t ^ t >>> 15) >>> 0).toString(36)
}
var jm = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}
, Im = /[A-Z]|^ms/g
, Rm = /_EMO_([^_]+?)_([^]*?)_EMO_/g
, td = function(t) {
  return t.charCodeAt(1) === 45
}
, Su = function(t) {
  return t != null && typeof t != "boolean"
}
, bi = pm(function(e) {
  return td(e) ? e : e.replace(Im, "-$&").toLowerCase()
})
, ku = function(t, n) {
  switch (t) {
  case "animation":
  case "animationName":
      if (typeof n == "string")
          return n.replace(Rm, function(r, o, i) {
              return be = {
                  name: o,
                  styles: i,
                  next: be
              },
              o
          })
  }
  return jm[t] !== 1 && !td(t) && typeof n == "number" && n !== 0 ? n + "px" : n
};
function vr(e, t, n) {
  if (n == null)
      return "";
  if (n.__emotion_styles !== void 0)
      return n;
  switch (typeof n) {
  case "boolean":
      return "";
  case "object":
      {
          if (n.anim === 1)
              return be = {
                  name: n.name,
                  styles: n.styles,
                  next: be
              },
              n.name;
          if (n.styles !== void 0) {
              var r = n.next;
              if (r !== void 0)
                  for (; r !== void 0; )
                      be = {
                          name: r.name,
                          styles: r.styles,
                          next: be
                      },
                      r = r.next;
              var o = n.styles + ";";
              return o
          }
          return Mm(e, t, n)
      }
  case "function":
      {
          if (e !== void 0) {
              var i = be
                , l = n(e);
              return be = i,
              vr(e, t, l)
          }
          break
      }
  }
  if (t == null)
      return n;
  var s = t[n];
  return s !== void 0 ? s : n
}
function Mm(e, t, n) {
  var r = "";
  if (Array.isArray(n))
      for (var o = 0; o < n.length; o++)
          r += vr(e, t, n[o]) + ";";
  else
      for (var i in n) {
          var l = n[i];
          if (typeof l != "object")
              t != null && t[l] !== void 0 ? r += i + "{" + t[l] + "}" : Su(l) && (r += bi(i) + ":" + ku(i, l) + ";");
          else if (Array.isArray(l) && typeof l[0] == "string" && (t == null || t[l[0]] === void 0))
              for (var s = 0; s < l.length; s++)
                  Su(l[s]) && (r += bi(i) + ":" + ku(i, l[s]) + ";");
          else {
              var a = vr(e, t, l);
              switch (i) {
              case "animation":
              case "animationName":
                  {
                      r += bi(i) + ":" + a + ";";
                      break
                  }
              default:
                  r += i + "{" + a + "}"
              }
          }
      }
  return r
}
var xu = /label:\s*([^\s;\n{]+)\s*(;|$)/g, be, ta = function(t, n, r) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
      return t[0];
  var o = !0
    , i = "";
  be = void 0;
  var l = t[0];
  l == null || l.raw === void 0 ? (o = !1,
  i += vr(r, n, l)) : i += l[0];
  for (var s = 1; s < t.length; s++)
      i += vr(r, n, t[s]),
      o && (i += l[s]);
  xu.lastIndex = 0;
  for (var a = "", c; (c = xu.exec(i)) !== null; )
      a += "-" + c[1];
  var h = Lm(i) + a;
  return {
      name: h,
      styles: i,
      next: be
  }
}, $m = function(t) {
  return t()
}, Dm = ca.useInsertionEffect ? ca.useInsertionEffect : !1, nd = Dm || $m, na = {}.hasOwnProperty, rd = R.createContext(typeof HTMLElement < "u" ? km({
  key: "css"
}) : null);
rd.Provider;
var od = function(t) {
  return R.forwardRef(function(n, r) {
      var o = R.useContext(rd);
      return t(n, o, r)
  })
}
, id = R.createContext({})
, Zl = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__"
, Fm = function(t, n) {
  var r = {};
  for (var o in n)
      na.call(n, o) && (r[o] = n[o]);
  return r[Zl] = t,
  r
}
, Bm = function(t) {
  var n = t.cache
    , r = t.serialized
    , o = t.isStringTag;
  return ea(n, r, o),
  nd(function() {
      return ed(n, r, o)
  }),
  null
}
, Am = od(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[Zl]
    , i = [r]
    , l = "";
  typeof e.className == "string" ? l = bf(t.registered, i, e.className) : e.className != null && (l = e.className + " ");
  var s = ta(i, void 0, R.useContext(id));
  l += t.key + "-" + s.name;
  var a = {};
  for (var c in e)
      na.call(e, c) && c !== "css" && c !== Zl && (a[c] = e[c]);
  return a.ref = n,
  a.className = l,
  R.createElement(R.Fragment, null, R.createElement(Bm, {
      cache: t,
      serialized: s,
      isStringTag: typeof o == "string"
  }), R.createElement(o, a))
})
, Um = Am
, Vm = N.Fragment;
function re(e, t, n) {
  return na.call(t, "css") ? N.jsx(Um, Fm(e, t), n) : N.jsx(e, t, n)
}
function ld() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
  return ta(t)
}
var k = function() {
  var t = ld.apply(void 0, arguments)
    , n = "animation-" + t.name;
  return {
      name: n,
      styles: "@keyframes " + n + "{" + t.styles + "}",
      anim: 1,
      toString: function() {
          return "_EMO_" + this.name + "_" + this.styles + "_EMO_"
      }
  }
}
, Hm = function e(t) {
  for (var n = t.length, r = 0, o = ""; r < n; r++) {
      var i = t[r];
      if (i != null) {
          var l = void 0;
          switch (typeof i) {
          case "boolean":
              break;
          case "object":
              {
                  if (Array.isArray(i))
                      l = e(i);
                  else {
                      l = "";
                      for (var s in i)
                          i[s] && s && (l && (l += " "),
                          l += s)
                  }
                  break
              }
          default:
              l = i
          }
          l && (o && (o += " "),
          o += l)
      }
  }
  return o
};
function Wm(e, t, n) {
  var r = []
    , o = bf(e, r, n);
  return r.length < 2 ? n : o + t(r)
}
var Qm = function(t) {
  var n = t.cache
    , r = t.serializedArr;
  return nd(function() {
      for (var o = 0; o < r.length; o++)
          ed(n, r[o], !1)
  }),
  null
}
, el = od(function(e, t) {
  var n = !1
    , r = []
    , o = function() {
      for (var c = arguments.length, h = new Array(c), m = 0; m < c; m++)
          h[m] = arguments[m];
      var p = ta(h, t.registered);
      return r.push(p),
      ea(t, p, !1),
      t.key + "-" + p.name
  }
    , i = function() {
      for (var c = arguments.length, h = new Array(c), m = 0; m < c; m++)
          h[m] = arguments[m];
      return Wm(t.registered, o, Hm(h))
  }
    , l = {
      css: o,
      cx: i,
      theme: R.useContext(id)
  }
    , s = e.children(l);
  return n = !0,
  R.createElement(R.Fragment, null, R.createElement(Qm, {
      cache: t,
      serializedArr: r
  }), s)
})
, Ym = Object.defineProperty
, Xm = (e,t,n)=>t in e ? Ym(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n
, Xr = (e,t,n)=>(Xm(e, typeof t != "symbol" ? t + "" : t, n),
n)
, Jl = new Map
, Kr = new WeakMap
, Cu = 0
, Km = void 0;
function Gm(e) {
  return e ? (Kr.has(e) || (Cu += 1,
  Kr.set(e, Cu.toString())),
  Kr.get(e)) : "0"
}
function Zm(e) {
  return Object.keys(e).sort().filter(t=>e[t] !== void 0).map(t=>`${t}_${t === "root" ? Gm(e.root) : e[t]}`).toString()
}
function Jm(e) {
  const t = Zm(e);
  let n = Jl.get(t);
  if (!n) {
      const r = new Map;
      let o;
      const i = new IntersectionObserver(l=>{
          l.forEach(s=>{
              var a;
              const c = s.isIntersecting && o.some(h=>s.intersectionRatio >= h);
              e.trackVisibility && typeof s.isVisible > "u" && (s.isVisible = c),
              (a = r.get(s.target)) == null || a.forEach(h=>{
                  h(c, s)
              }
              )
          }
          )
      }
      ,e);
      o = i.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]),
      n = {
          id: t,
          observer: i,
          elements: r
      },
      Jl.set(t, n)
  }
  return n
}
function sd(e, t, n={}, r=Km) {
  if (typeof window.IntersectionObserver > "u" && r !== void 0) {
      const a = e.getBoundingClientRect();
      return t(r, {
          isIntersecting: r,
          target: e,
          intersectionRatio: typeof n.threshold == "number" ? n.threshold : 0,
          time: 0,
          boundingClientRect: a,
          intersectionRect: a,
          rootBounds: a
      }),
      ()=>{}
  }
  const {id: o, observer: i, elements: l} = Jm(n)
    , s = l.get(e) || [];
  return l.has(e) || l.set(e, s),
  s.push(t),
  i.observe(e),
  function() {
      s.splice(s.indexOf(t), 1),
      s.length === 0 && (l.delete(e),
      i.unobserve(e)),
      l.size === 0 && (i.disconnect(),
      Jl.delete(o))
  }
}
function qm(e) {
  return typeof e.children != "function"
}
var Eu = class extends R.Component {
  constructor(e) {
      super(e),
      Xr(this, "node", null),
      Xr(this, "_unobserveCb", null),
      Xr(this, "handleNode", t=>{
          this.node && (this.unobserve(),
          !t && !this.props.triggerOnce && !this.props.skip && this.setState({
              inView: !!this.props.initialInView,
              entry: void 0
          })),
          this.node = t || null,
          this.observeNode()
      }
      ),
      Xr(this, "handleChange", (t,n)=>{
          t && this.props.triggerOnce && this.unobserve(),
          qm(this.props) || this.setState({
              inView: t,
              entry: n
          }),
          this.props.onChange && this.props.onChange(t, n)
      }
      ),
      this.state = {
          inView: !!e.initialInView,
          entry: void 0
      }
  }
  componentDidMount() {
      this.unobserve(),
      this.observeNode()
  }
  componentDidUpdate(e) {
      (e.rootMargin !== this.props.rootMargin || e.root !== this.props.root || e.threshold !== this.props.threshold || e.skip !== this.props.skip || e.trackVisibility !== this.props.trackVisibility || e.delay !== this.props.delay) && (this.unobserve(),
      this.observeNode())
  }
  componentWillUnmount() {
      this.unobserve()
  }
  observeNode() {
      if (!this.node || this.props.skip)
          return;
      const {threshold: e, root: t, rootMargin: n, trackVisibility: r, delay: o, fallbackInView: i} = this.props;
      this._unobserveCb = sd(this.node, this.handleChange, {
          threshold: e,
          root: t,
          rootMargin: n,
          trackVisibility: r,
          delay: o
      }, i)
  }
  unobserve() {
      this._unobserveCb && (this._unobserveCb(),
      this._unobserveCb = null)
  }
  render() {
      const {children: e} = this.props;
      if (typeof e == "function") {
          const {inView: w, entry: v} = this.state;
          return e({
              inView: w,
              entry: v,
              ref: this.handleNode
          })
      }
      const {as: t, triggerOnce: n, threshold: r, root: o, rootMargin: i, onChange: l, skip: s, trackVisibility: a, delay: c, initialInView: h, fallbackInView: m, ...p} = this.props;
      return R.createElement(t || "div", {
          ref: this.handleNode,
          ...p
      }, e)
  }
}
;
function ad({threshold: e, delay: t, trackVisibility: n, rootMargin: r, root: o, triggerOnce: i, skip: l, initialInView: s, fallbackInView: a, onChange: c}={}) {
  var h;
  const [m,p] = R.useState(null)
    , w = R.useRef()
    , [v,y] = R.useState({
      inView: !!s,
      entry: void 0
  });
  w.current = c,
  R.useEffect(()=>{
      if (l || !m)
          return;
      let d;
      return d = sd(m, (g,C)=>{
          y({
              inView: g,
              entry: C
          }),
          w.current && w.current(g, C),
          C.isIntersecting && i && d && (d(),
          d = void 0)
      }
      , {
          root: o,
          rootMargin: r,
          threshold: e,
          trackVisibility: n,
          delay: t
      }, a),
      ()=>{
          d && d()
      }
  }
  , [Array.isArray(e) ? e.toString() : e, m, o, r, i, l, n, a, t]);
  const T = (h = v.entry) == null ? void 0 : h.target
    , f = R.useRef();
  !m && T && !i && !l && f.current !== T && (f.current = T,
  y({
      inView: !!s,
      entry: void 0
  }));
  const u = [p, v.inView, v.entry];
  return u.ref = u[0],
  u.inView = u[1],
  u.entry = u[2],
  u
}
var ud = {
  exports: {}
}
, A = {};
/**
* @license React
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var ra = Symbol.for("react.element"), oa = Symbol.for("react.portal"), pi = Symbol.for("react.fragment"), mi = Symbol.for("react.strict_mode"), hi = Symbol.for("react.profiler"), yi = Symbol.for("react.provider"), gi = Symbol.for("react.context"), bm = Symbol.for("react.server_context"), vi = Symbol.for("react.forward_ref"), wi = Symbol.for("react.suspense"), Si = Symbol.for("react.suspense_list"), ki = Symbol.for("react.memo"), xi = Symbol.for("react.lazy"), e1 = Symbol.for("react.offscreen"), cd;
cd = Symbol.for("react.module.reference");
function Ue(e) {
  if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
      case ra:
          switch (e = e.type,
          e) {
          case pi:
          case hi:
          case mi:
          case wi:
          case Si:
              return e;
          default:
              switch (e = e && e.$$typeof,
              e) {
              case bm:
              case gi:
              case vi:
              case xi:
              case ki:
              case yi:
                  return e;
              default:
                  return t
              }
          }
      case oa:
          return t
      }
  }
}
A.ContextConsumer = gi;
A.ContextProvider = yi;
A.Element = ra;
A.ForwardRef = vi;
A.Fragment = pi;
A.Lazy = xi;
A.Memo = ki;
A.Portal = oa;
A.Profiler = hi;
A.StrictMode = mi;
A.Suspense = wi;
A.SuspenseList = Si;
A.isAsyncMode = function() {
  return !1
}
;
A.isConcurrentMode = function() {
  return !1
}
;
A.isContextConsumer = function(e) {
  return Ue(e) === gi
}
;
A.isContextProvider = function(e) {
  return Ue(e) === yi
}
;
A.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ra
}
;
A.isForwardRef = function(e) {
  return Ue(e) === vi
}
;
A.isFragment = function(e) {
  return Ue(e) === pi
}
;
A.isLazy = function(e) {
  return Ue(e) === xi
}
;
A.isMemo = function(e) {
  return Ue(e) === ki
}
;
A.isPortal = function(e) {
  return Ue(e) === oa
}
;
A.isProfiler = function(e) {
  return Ue(e) === hi
}
;
A.isStrictMode = function(e) {
  return Ue(e) === mi
}
;
A.isSuspense = function(e) {
  return Ue(e) === wi
}
;
A.isSuspenseList = function(e) {
  return Ue(e) === Si
}
;
A.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === pi || e === hi || e === mi || e === wi || e === Si || e === e1 || typeof e == "object" && e !== null && (e.$$typeof === xi || e.$$typeof === ki || e.$$typeof === yi || e.$$typeof === gi || e.$$typeof === vi || e.$$typeof === cd || e.getModuleId !== void 0)
}
;
A.typeOf = Ue;
ud.exports = A;
var t1 = ud.exports;
k`
from,
20%,
53%,
to {
  animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  transform: translate3d(0, 0, 0);
}

40%,
43% {
  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
  transform: translate3d(0, -30px, 0) scaleY(1.1);
}

70% {
  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
  transform: translate3d(0, -15px, 0) scaleY(1.05);
}

80% {
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  transform: translate3d(0, 0, 0) scaleY(0.95);
}

90% {
  transform: translate3d(0, -4px, 0) scaleY(1.02);
}
`;
k`
from,
50%,
to {
  opacity: 1;
}

25%,
75% {
  opacity: 0;
}
`;
k`
0% {
  transform: translateX(0);
}

6.5% {
  transform: translateX(-6px) rotateY(-9deg);
}

18.5% {
  transform: translateX(5px) rotateY(7deg);
}

31.5% {
  transform: translateX(-3px) rotateY(-5deg);
}

43.5% {
  transform: translateX(2px) rotateY(3deg);
}

50% {
  transform: translateX(0);
}
`;
k`
0% {
  transform: scale(1);
}

14% {
  transform: scale(1.3);
}

28% {
  transform: scale(1);
}

42% {
  transform: scale(1.3);
}

70% {
  transform: scale(1);
}
`;
k`
from,
11.1%,
to {
  transform: translate3d(0, 0, 0);
}

22.2% {
  transform: skewX(-12.5deg) skewY(-12.5deg);
}

33.3% {
  transform: skewX(6.25deg) skewY(6.25deg);
}

44.4% {
  transform: skewX(-3.125deg) skewY(-3.125deg);
}

55.5% {
  transform: skewX(1.5625deg) skewY(1.5625deg);
}

66.6% {
  transform: skewX(-0.78125deg) skewY(-0.78125deg);
}

77.7% {
  transform: skewX(0.390625deg) skewY(0.390625deg);
}

88.8% {
  transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
}
`;
k`
from {
  transform: scale3d(1, 1, 1);
}

50% {
  transform: scale3d(1.05, 1.05, 1.05);
}

to {
  transform: scale3d(1, 1, 1);
}
`;
k`
from {
  transform: scale3d(1, 1, 1);
}

30% {
  transform: scale3d(1.25, 0.75, 1);
}

40% {
  transform: scale3d(0.75, 1.25, 1);
}

50% {
  transform: scale3d(1.15, 0.85, 1);
}

65% {
  transform: scale3d(0.95, 1.05, 1);
}

75% {
  transform: scale3d(1.05, 0.95, 1);
}

to {
  transform: scale3d(1, 1, 1);
}
`;
k`
from,
to {
  transform: translate3d(0, 0, 0);
}

10%,
30%,
50%,
70%,
90% {
  transform: translate3d(-10px, 0, 0);
}

20%,
40%,
60%,
80% {
  transform: translate3d(10px, 0, 0);
}
`;
k`
from,
to {
  transform: translate3d(0, 0, 0);
}

10%,
30%,
50%,
70%,
90% {
  transform: translate3d(-10px, 0, 0);
}

20%,
40%,
60%,
80% {
  transform: translate3d(10px, 0, 0);
}
`;
k`
from,
to {
  transform: translate3d(0, 0, 0);
}

10%,
30%,
50%,
70%,
90% {
  transform: translate3d(0, -10px, 0);
}

20%,
40%,
60%,
80% {
  transform: translate3d(0, 10px, 0);
}
`;
k`
20% {
  transform: rotate3d(0, 0, 1, 15deg);
}

40% {
  transform: rotate3d(0, 0, 1, -10deg);
}

60% {
  transform: rotate3d(0, 0, 1, 5deg);
}

80% {
  transform: rotate3d(0, 0, 1, -5deg);
}

to {
  transform: rotate3d(0, 0, 1, 0deg);
}
`;
k`
from {
  transform: scale3d(1, 1, 1);
}

10%,
20% {
  transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
}

30%,
50%,
70%,
90% {
  transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
}

40%,
60%,
80% {
  transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
}

to {
  transform: scale3d(1, 1, 1);
}
`;
k`
from {
  transform: translate3d(0, 0, 0);
}

15% {
  transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
}

30% {
  transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
}

45% {
  transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
}

60% {
  transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
}

75% {
  transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
}

to {
  transform: translate3d(0, 0, 0);
}
`;
const n1 = k`
from {
  opacity: 0;
}

to {
  opacity: 1;
}
`
, r1 = k`
from {
  opacity: 0;
  transform: translate3d(-100%, 100%, 0);
}

to {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
`
, o1 = k`
from {
  opacity: 0;
  transform: translate3d(100%, 100%, 0);
}

to {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
`
, i1 = k`
from {
  opacity: 0;
  transform: translate3d(0, -100%, 0);
}

to {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
`
, l1 = k`
from {
  opacity: 0;
  transform: translate3d(0, -2000px, 0);
}

to {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
`
, ia = k`
from {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

to {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
`
, s1 = k`
from {
  opacity: 0;
  transform: translate3d(-2000px, 0, 0);
}

to {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
`
, a1 = k`
from {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

to {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
`
, u1 = k`
from {
  opacity: 0;
  transform: translate3d(2000px, 0, 0);
}

to {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
`
, c1 = k`
from {
  opacity: 0;
  transform: translate3d(-100%, -100%, 0);
}

to {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
`
, f1 = k`
from {
  opacity: 0;
  transform: translate3d(100%, -100%, 0);
}

to {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
`
, d1 = k`
from {
  opacity: 0;
  transform: translate3d(0, 100%, 0);
}

to {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
`
, p1 = k`
from {
  opacity: 0;
  transform: translate3d(0, 2000px, 0);
}

to {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
`;
function m1({duration: e=1e3, delay: t=0, timingFunction: n="ease", keyframes: r=ia, iterationCount: o=1}) {
  return ld`
  animation-duration: ${e}ms;
  animation-timing-function: ${n};
  animation-delay: ${t}ms;
  animation-name: ${r};
  animation-direction: normal;
  animation-fill-mode: both;
  animation-iteration-count: ${o};

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`
}
function h1(e) {
  return e == null
}
function y1(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean"
}
function fd(e, t) {
  return n=>n ? e() : t()
}
function wr(e) {
  return fd(e, ()=>null)
}
function ql(e) {
  return wr(()=>({
      opacity: 0
  }))(e)
}
const dd = e=>{
  const {cascade: t=!1, damping: n=.5, delay: r=0, duration: o=1e3, fraction: i=0, keyframes: l=ia, triggerOnce: s=!1, className: a, style: c, childClassName: h, childStyle: m, children: p, onVisibilityChange: w} = e
    , v = R.useMemo(()=>m1({
      keyframes: l,
      duration: o
  }), [o, l]);
  return h1(p) ? null : y1(p) ? re(v1, {
      ...e,
      animationStyles: v,
      children: String(p)
  }) : t1.isFragment(p) ? re(pd, {
      ...e,
      animationStyles: v
  }) : re(Vm, {
      children: R.Children.map(p, (y,T)=>{
          if (!R.isValidElement(y))
              return null;
          const f = r + (t ? T * o * n : 0);
          switch (y.type) {
          case "ol":
          case "ul":
              return re(el, {
                  children: ({cx: u})=>re(y.type, {
                      ...y.props,
                      className: u(a, y.props.className),
                      style: Object.assign({}, c, y.props.style),
                      children: re(dd, {
                          ...e,
                          children: y.props.children
                      })
                  })
              });
          case "li":
              return re(Eu, {
                  threshold: i,
                  triggerOnce: s,
                  onChange: w,
                  children: ({inView: u, ref: d})=>re(el, {
                      children: ({cx: g})=>re(y.type, {
                          ...y.props,
                          ref: d,
                          className: g(h, y.props.className),
                          css: wr(()=>v)(u),
                          style: Object.assign({}, m, y.props.style, ql(!u), {
                              animationDelay: f + "ms"
                          })
                      })
                  })
              });
          default:
              return re(Eu, {
                  threshold: i,
                  triggerOnce: s,
                  onChange: w,
                  children: ({inView: u, ref: d})=>re("div", {
                      ref: d,
                      className: a,
                      css: wr(()=>v)(u),
                      style: Object.assign({}, c, ql(!u), {
                          animationDelay: f + "ms"
                      }),
                      children: re(el, {
                          children: ({cx: g})=>re(y.type, {
                              ...y.props,
                              className: g(h, y.props.className),
                              style: Object.assign({}, m, y.props.style)
                          })
                      })
                  })
              })
          }
      }
      )
  })
}
, g1 = {
  display: "inline-block",
  whiteSpace: "pre"
}
, v1 = e=>{
  const {animationStyles: t, cascade: n=!1, damping: r=.5, delay: o=0, duration: i=1e3, fraction: l=0, triggerOnce: s=!1, className: a, style: c, children: h, onVisibilityChange: m} = e
    , {ref: p, inView: w} = ad({
      triggerOnce: s,
      threshold: l,
      onChange: m
  });
  return fd(()=>re("div", {
      ref: p,
      className: a,
      style: Object.assign({}, c, g1),
      children: h.split("").map((v,y)=>re("span", {
          css: wr(()=>t)(w),
          style: {
              animationDelay: o + y * i * r + "ms"
          },
          children: v
      }, y))
  }), ()=>re(pd, {
      ...e,
      children: h
  }))(n)
}
, pd = e=>{
  const {animationStyles: t, fraction: n=0, triggerOnce: r=!1, className: o, style: i, children: l, onVisibilityChange: s} = e
    , {ref: a, inView: c} = ad({
      triggerOnce: r,
      threshold: n,
      onChange: s
  });
  return re("div", {
      ref: a,
      className: o,
      css: wr(()=>t)(c),
      style: Object.assign({}, i, ql(!c)),
      children: l
  })
}
;
k`
from,
20%,
40%,
60%,
80%,
to {
  animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}

0% {
  opacity: 0;
  transform: scale3d(0.3, 0.3, 0.3);
}

20% {
  transform: scale3d(1.1, 1.1, 1.1);
}

40% {
  transform: scale3d(0.9, 0.9, 0.9);
}

60% {
  opacity: 1;
  transform: scale3d(1.03, 1.03, 1.03);
}

80% {
  transform: scale3d(0.97, 0.97, 0.97);
}

to {
  opacity: 1;
  transform: scale3d(1, 1, 1);
}
`;
k`
from,
60%,
75%,
90%,
to {
  animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}

0% {
  opacity: 0;
  transform: translate3d(0, -3000px, 0) scaleY(3);
}

60% {
  opacity: 1;
  transform: translate3d(0, 25px, 0) scaleY(0.9);
}

75% {
  transform: translate3d(0, -10px, 0) scaleY(0.95);
}

90% {
  transform: translate3d(0, 5px, 0) scaleY(0.985);
}

to {
  transform: translate3d(0, 0, 0);
}
`;
k`
from,
60%,
75%,
90%,
to {
  animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}

0% {
  opacity: 0;
  transform: translate3d(-3000px, 0, 0) scaleX(3);
}

60% {
  opacity: 1;
  transform: translate3d(25px, 0, 0) scaleX(1);
}

75% {
  transform: translate3d(-10px, 0, 0) scaleX(0.98);
}

90% {
  transform: translate3d(5px, 0, 0) scaleX(0.995);
}

to {
  transform: translate3d(0, 0, 0);
}
`;
k`
from,
60%,
75%,
90%,
to {
  animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}

from {
  opacity: 0;
  transform: translate3d(3000px, 0, 0) scaleX(3);
}

60% {
  opacity: 1;
  transform: translate3d(-25px, 0, 0) scaleX(1);
}

75% {
  transform: translate3d(10px, 0, 0) scaleX(0.98);
}

90% {
  transform: translate3d(-5px, 0, 0) scaleX(0.995);
}

to {
  transform: translate3d(0, 0, 0);
}
`;
k`
from,
60%,
75%,
90%,
to {
  animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}

from {
  opacity: 0;
  transform: translate3d(0, 3000px, 0) scaleY(5);
}

60% {
  opacity: 1;
  transform: translate3d(0, -20px, 0) scaleY(0.9);
}

75% {
  transform: translate3d(0, 10px, 0) scaleY(0.95);
}

90% {
  transform: translate3d(0, -5px, 0) scaleY(0.985);
}

to {
  transform: translate3d(0, 0, 0);
}
`;
k`
20% {
  transform: scale3d(0.9, 0.9, 0.9);
}

50%,
55% {
  opacity: 1;
  transform: scale3d(1.1, 1.1, 1.1);
}

to {
  opacity: 0;
  transform: scale3d(0.3, 0.3, 0.3);
}
`;
k`
20% {
  transform: translate3d(0, 10px, 0) scaleY(0.985);
}

40%,
45% {
  opacity: 1;
  transform: translate3d(0, -20px, 0) scaleY(0.9);
}

to {
  opacity: 0;
  transform: translate3d(0, 2000px, 0) scaleY(3);
}
`;
k`
20% {
  opacity: 1;
  transform: translate3d(20px, 0, 0) scaleX(0.9);
}

to {
  opacity: 0;
  transform: translate3d(-2000px, 0, 0) scaleX(2);
}
`;
k`
20% {
  opacity: 1;
  transform: translate3d(-20px, 0, 0) scaleX(0.9);
}

to {
  opacity: 0;
  transform: translate3d(2000px, 0, 0) scaleX(2);
}
`;
k`
20% {
  transform: translate3d(0, -10px, 0) scaleY(0.985);
}

40%,
45% {
  opacity: 1;
  transform: translate3d(0, 20px, 0) scaleY(0.9);
}

to {
  opacity: 0;
  transform: translate3d(0, -2000px, 0) scaleY(3);
}
`;
const w1 = k`
from {
  opacity: 1;
}

to {
  opacity: 0;
}
`
, S1 = k`
from {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

to {
  opacity: 0;
  transform: translate3d(-100%, 100%, 0);
}
`
, k1 = k`
from {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

to {
  opacity: 0;
  transform: translate3d(100%, 100%, 0);
}
`
, x1 = k`
from {
  opacity: 1;
}

to {
  opacity: 0;
  transform: translate3d(0, 100%, 0);
}
`
, C1 = k`
from {
  opacity: 1;
}

to {
  opacity: 0;
  transform: translate3d(0, 2000px, 0);
}
`
, E1 = k`
from {
  opacity: 1;
}

to {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
`
, N1 = k`
from {
  opacity: 1;
}

to {
  opacity: 0;
  transform: translate3d(-2000px, 0, 0);
}
`
, P1 = k`
from {
  opacity: 1;
}

to {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
`
, _1 = k`
from {
  opacity: 1;
}

to {
  opacity: 0;
  transform: translate3d(2000px, 0, 0);
}
`
, z1 = k`
from {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

to {
  opacity: 0;
  transform: translate3d(-100%, -100%, 0);
}
`
, T1 = k`
from {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

to {
  opacity: 0;
  transform: translate3d(100%, -100%, 0);
}
`
, O1 = k`
from {
  opacity: 1;
}

to {
  opacity: 0;
  transform: translate3d(0, -100%, 0);
}
`
, L1 = k`
from {
  opacity: 1;
}

to {
  opacity: 0;
  transform: translate3d(0, -2000px, 0);
}
`;
function j1(e, t, n) {
  switch (n) {
  case "bottom-left":
      return t ? S1 : r1;
  case "bottom-right":
      return t ? k1 : o1;
  case "down":
      return e ? t ? C1 : l1 : t ? x1 : i1;
  case "left":
      return e ? t ? N1 : s1 : t ? E1 : ia;
  case "right":
      return e ? t ? _1 : u1 : t ? P1 : a1;
  case "top-left":
      return t ? z1 : c1;
  case "top-right":
      return t ? T1 : f1;
  case "up":
      return e ? t ? L1 : p1 : t ? O1 : d1;
  default:
      return t ? w1 : n1
  }
}
const Ci = e=>{
  const {big: t=!1, direction: n, reverse: r=!1, ...o} = e
    , i = R.useMemo(()=>j1(t, r, n), [t, n, r]);
  return re(dd, {
      keyframes: i,
      ...o
  })
}
;
k`
from {
  transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
  animation-timing-function: ease-out;
}

40% {
  transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
    rotate3d(0, 1, 0, -190deg);
  animation-timing-function: ease-out;
}

50% {
  transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
    rotate3d(0, 1, 0, -170deg);
  animation-timing-function: ease-in;
}

80% {
  transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
    rotate3d(0, 1, 0, 0deg);
  animation-timing-function: ease-in;
}

to {
  transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
  animation-timing-function: ease-in;
}
`;
k`
from {
  transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
  animation-timing-function: ease-in;
  opacity: 0;
}

40% {
  transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
  animation-timing-function: ease-in;
}

60% {
  transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
  opacity: 1;
}

80% {
  transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
}

to {
  transform: perspective(400px);
}
`;
k`
from {
  transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
  animation-timing-function: ease-in;
  opacity: 0;
}

40% {
  transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
  animation-timing-function: ease-in;
}

60% {
  transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
  opacity: 1;
}

80% {
  transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
}

to {
  transform: perspective(400px);
}
`;
k`
from {
  transform: perspective(400px);
}

30% {
  transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
  opacity: 1;
}

to {
  transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
  opacity: 0;
}
`;
k`
from {
  transform: perspective(400px);
}

30% {
  transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
  opacity: 1;
}

to {
  transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
  opacity: 0;
}
`;
k`
0% {
  animation-timing-function: ease-in-out;
}

20%,
60% {
  transform: rotate3d(0, 0, 1, 80deg);
  animation-timing-function: ease-in-out;
}

40%,
80% {
  transform: rotate3d(0, 0, 1, 60deg);
  animation-timing-function: ease-in-out;
  opacity: 1;
}

to {
  transform: translate3d(0, 700px, 0);
  opacity: 0;
}
`;
k`
from {
  opacity: 0;
  transform: scale(0.1) rotate(30deg);
  transform-origin: center bottom;
}

50% {
  transform: rotate(-10deg);
}

70% {
  transform: rotate(3deg);
}

to {
  opacity: 1;
  transform: scale(1);
}
`;
k`
from {
  opacity: 0;
  transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
}

to {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
`;
k`
from {
  opacity: 1;
}

to {
  opacity: 0;
  transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
}
`;
k`
from {
  transform: rotate3d(0, 0, 1, -200deg);
  opacity: 0;
}

to {
  transform: translate3d(0, 0, 0);
  opacity: 1;
}
`;
k`
from {
  transform: rotate3d(0, 0, 1, -45deg);
  opacity: 0;
}

to {
  transform: translate3d(0, 0, 0);
  opacity: 1;
}
`;
k`
from {
  transform: rotate3d(0, 0, 1, 45deg);
  opacity: 0;
}

to {
  transform: translate3d(0, 0, 0);
  opacity: 1;
}
`;
k`
from {
  transform: rotate3d(0, 0, 1, 45deg);
  opacity: 0;
}

to {
  transform: translate3d(0, 0, 0);
  opacity: 1;
}
`;
k`
from {
  transform: rotate3d(0, 0, 1, -90deg);
  opacity: 0;
}

to {
  transform: translate3d(0, 0, 0);
  opacity: 1;
}
`;
k`
from {
  opacity: 1;
}

to {
  transform: rotate3d(0, 0, 1, 200deg);
  opacity: 0;
}
`;
k`
from {
  opacity: 1;
}

to {
  transform: rotate3d(0, 0, 1, 45deg);
  opacity: 0;
}
`;
k`
from {
  opacity: 1;
}

to {
  transform: rotate3d(0, 0, 1, -45deg);
  opacity: 0;
}
`;
k`
from {
  opacity: 1;
}

to {
  transform: rotate3d(0, 0, 1, -45deg);
  opacity: 0;
}
`;
k`
from {
  opacity: 1;
}

to {
  transform: rotate3d(0, 0, 1, 90deg);
  opacity: 0;
}
`;
k`
from {
  transform: translate3d(0, -100%, 0);
  visibility: visible;
}

to {
  transform: translate3d(0, 0, 0);
}
`;
k`
from {
  transform: translate3d(-100%, 0, 0);
  visibility: visible;
}

to {
  transform: translate3d(0, 0, 0);
}
`;
k`
from {
  transform: translate3d(100%, 0, 0);
  visibility: visible;
}

to {
  transform: translate3d(0, 0, 0);
}
`;
k`
from {
  transform: translate3d(0, 100%, 0);
  visibility: visible;
}

to {
  transform: translate3d(0, 0, 0);
}
`;
k`
from {
  transform: translate3d(0, 0, 0);
}

to {
  visibility: hidden;
  transform: translate3d(0, 100%, 0);
}
`;
k`
from {
  transform: translate3d(0, 0, 0);
}

to {
  visibility: hidden;
  transform: translate3d(-100%, 0, 0);
}
`;
k`
from {
  transform: translate3d(0, 0, 0);
}

to {
  visibility: hidden;
  transform: translate3d(100%, 0, 0);
}
`;
k`
from {
  transform: translate3d(0, 0, 0);
}

to {
  visibility: hidden;
  transform: translate3d(0, -100%, 0);
}
`;
k`
from {
  opacity: 0;
  transform: scale3d(0.3, 0.3, 0.3);
}

50% {
  opacity: 1;
}
`;
k`
from {
  opacity: 0;
  transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
  animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

60% {
  opacity: 1;
  transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
  animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
}
`;
k`
from {
  opacity: 0;
  transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
  animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

60% {
  opacity: 1;
  transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
  animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
}
`;
k`
from {
  opacity: 0;
  transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
  animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

60% {
  opacity: 1;
  transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
  animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
}
`;
k`
from {
  opacity: 0;
  transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
  animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

60% {
  opacity: 1;
  transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
  animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
}
`;
k`
from {
  opacity: 1;
}

50% {
  opacity: 0;
  transform: scale3d(0.3, 0.3, 0.3);
}

to {
  opacity: 0;
}
`;
k`
40% {
  opacity: 1;
  transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
  animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

to {
  opacity: 0;
  transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
  animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
}
`;
k`
40% {
  opacity: 1;
  transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
}

to {
  opacity: 0;
  transform: scale(0.1) translate3d(-2000px, 0, 0);
}
`;
k`
40% {
  opacity: 1;
  transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
}

to {
  opacity: 0;
  transform: scale(0.1) translate3d(2000px, 0, 0);
}
`;
k`
40% {
  opacity: 1;
  transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
  animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

to {
  opacity: 0;
  transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
  animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
}
`;
function bl() {
  return bl = Object.assign ? Object.assign.bind() : function(e) {
      for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
  }
  ,
  bl.apply(this, arguments)
}
var I1 = {
  strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
  stringsElement: null,
  typeSpeed: 0,
  startDelay: 0,
  backSpeed: 0,
  smartBackspace: !0,
  shuffle: !1,
  backDelay: 700,
  fadeOut: !1,
  fadeOutClass: "typed-fade-out",
  fadeOutDelay: 500,
  loop: !1,
  loopCount: 1 / 0,
  showCursor: !0,
  cursorChar: "|",
  autoInsertCss: !0,
  attr: null,
  bindInputFocusEvents: !1,
  contentType: "html",
  onBegin: function(e) {},
  onComplete: function(e) {},
  preStringTyped: function(e, t) {},
  onStringTyped: function(e, t) {},
  onLastStringBackspaced: function(e) {},
  onTypingPaused: function(e, t) {},
  onTypingResumed: function(e, t) {},
  onReset: function(e) {},
  onStop: function(e, t) {},
  onStart: function(e, t) {},
  onDestroy: function(e) {}
}
, R1 = new (function() {
  function e() {}
  var t = e.prototype;
  return t.load = function(n, r, o) {
      if (n.el = typeof o == "string" ? document.querySelector(o) : o,
      n.options = bl({}, I1, r),
      n.isInput = n.el.tagName.toLowerCase() === "input",
      n.attr = n.options.attr,
      n.bindInputFocusEvents = n.options.bindInputFocusEvents,
      n.showCursor = !n.isInput && n.options.showCursor,
      n.cursorChar = n.options.cursorChar,
      n.cursorBlinking = !0,
      n.elContent = n.attr ? n.el.getAttribute(n.attr) : n.el.textContent,
      n.contentType = n.options.contentType,
      n.typeSpeed = n.options.typeSpeed,
      n.startDelay = n.options.startDelay,
      n.backSpeed = n.options.backSpeed,
      n.smartBackspace = n.options.smartBackspace,
      n.backDelay = n.options.backDelay,
      n.fadeOut = n.options.fadeOut,
      n.fadeOutClass = n.options.fadeOutClass,
      n.fadeOutDelay = n.options.fadeOutDelay,
      n.isPaused = !1,
      n.strings = n.options.strings.map(function(c) {
          return c.trim()
      }),
      n.stringsElement = typeof n.options.stringsElement == "string" ? document.querySelector(n.options.stringsElement) : n.options.stringsElement,
      n.stringsElement) {
          n.strings = [],
          n.stringsElement.style.cssText = "clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";
          var i = Array.prototype.slice.apply(n.stringsElement.children)
            , l = i.length;
          if (l)
              for (var s = 0; s < l; s += 1)
                  n.strings.push(i[s].innerHTML.trim())
      }
      for (var a in n.strPos = 0,
      n.currentElContent = this.getCurrentElContent(n),
      n.currentElContent && n.currentElContent.length > 0 && (n.strPos = n.currentElContent.length - 1,
      n.strings.unshift(n.currentElContent)),
      n.sequence = [],
      n.strings)
          n.sequence[a] = a;
      n.arrayPos = 0,
      n.stopNum = 0,
      n.loop = n.options.loop,
      n.loopCount = n.options.loopCount,
      n.curLoop = 0,
      n.shuffle = n.options.shuffle,
      n.pause = {
          status: !1,
          typewrite: !0,
          curString: "",
          curStrPos: 0
      },
      n.typingComplete = !1,
      n.autoInsertCss = n.options.autoInsertCss,
      n.autoInsertCss && (this.appendCursorAnimationCss(n),
      this.appendFadeOutAnimationCss(n))
  }
  ,
  t.getCurrentElContent = function(n) {
      return n.attr ? n.el.getAttribute(n.attr) : n.isInput ? n.el.value : n.contentType === "html" ? n.el.innerHTML : n.el.textContent
  }
  ,
  t.appendCursorAnimationCss = function(n) {
      var r = "data-typed-js-cursor-css";
      if (n.showCursor && !document.querySelector("[" + r + "]")) {
          var o = document.createElement("style");
          o.setAttribute(r, "true"),
          o.innerHTML = `
      .typed-cursor{
        opacity: 1;
      }
      .typed-cursor.typed-cursor--blink{
        animation: typedjsBlink 0.7s infinite;
        -webkit-animation: typedjsBlink 0.7s infinite;
                animation: typedjsBlink 0.7s infinite;
      }
      @keyframes typedjsBlink{
        50% { opacity: 0.0; }
      }
      @-webkit-keyframes typedjsBlink{
        0% { opacity: 1; }
        50% { opacity: 0.0; }
        100% { opacity: 1; }
      }
    `,
          document.body.appendChild(o)
      }
  }
  ,
  t.appendFadeOutAnimationCss = function(n) {
      var r = "data-typed-fadeout-js-css";
      if (n.fadeOut && !document.querySelector("[" + r + "]")) {
          var o = document.createElement("style");
          o.setAttribute(r, "true"),
          o.innerHTML = `
      .typed-fade-out{
        opacity: 0;
        transition: opacity .25s;
      }
      .typed-cursor.typed-cursor--blink.typed-fade-out{
        -webkit-animation: 0;
        animation: 0;
      }
    `,
          document.body.appendChild(o)
      }
  }
  ,
  e
}())
, Nu = new (function() {
  function e() {}
  var t = e.prototype;
  return t.typeHtmlChars = function(n, r, o) {
      if (o.contentType !== "html")
          return r;
      var i = n.substring(r).charAt(0);
      if (i === "<" || i === "&") {
          var l;
          for (l = i === "<" ? ">" : ";"; n.substring(r + 1).charAt(0) !== l && !(1 + ++r > n.length); )
              ;
          r++
      }
      return r
  }
  ,
  t.backSpaceHtmlChars = function(n, r, o) {
      if (o.contentType !== "html")
          return r;
      var i = n.substring(r).charAt(0);
      if (i === ">" || i === ";") {
          var l;
          for (l = i === ">" ? "<" : "&"; n.substring(r - 1).charAt(0) !== l && !(--r < 0); )
              ;
          r--
      }
      return r
  }
  ,
  e
}())
, M1 = function() {
  function e(n, r) {
      R1.load(this, r, n),
      this.begin()
  }
  var t = e.prototype;
  return t.toggle = function() {
      this.pause.status ? this.start() : this.stop()
  }
  ,
  t.stop = function() {
      this.typingComplete || this.pause.status || (this.toggleBlinking(!0),
      this.pause.status = !0,
      this.options.onStop(this.arrayPos, this))
  }
  ,
  t.start = function() {
      this.typingComplete || this.pause.status && (this.pause.status = !1,
      this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos),
      this.options.onStart(this.arrayPos, this))
  }
  ,
  t.destroy = function() {
      this.reset(!1),
      this.options.onDestroy(this)
  }
  ,
  t.reset = function(n) {
      n === void 0 && (n = !0),
      clearInterval(this.timeout),
      this.replaceText(""),
      this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor),
      this.cursor = null),
      this.strPos = 0,
      this.arrayPos = 0,
      this.curLoop = 0,
      n && (this.insertCursor(),
      this.options.onReset(this),
      this.begin())
  }
  ,
  t.begin = function() {
      var n = this;
      this.options.onBegin(this),
      this.typingComplete = !1,
      this.shuffleStringsIfNeeded(this),
      this.insertCursor(),
      this.bindInputFocusEvents && this.bindFocusEvents(),
      this.timeout = setTimeout(function() {
          n.strPos === 0 ? n.typewrite(n.strings[n.sequence[n.arrayPos]], n.strPos) : n.backspace(n.strings[n.sequence[n.arrayPos]], n.strPos)
      }, this.startDelay)
  }
  ,
  t.typewrite = function(n, r) {
      var o = this;
      this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass),
      this.cursor && this.cursor.classList.remove(this.fadeOutClass));
      var i = this.humanizer(this.typeSpeed)
        , l = 1;
      this.pause.status !== !0 ? this.timeout = setTimeout(function() {
          r = Nu.typeHtmlChars(n, r, o);
          var s = 0
            , a = n.substring(r);
          if (a.charAt(0) === "^" && /^\^\d+/.test(a)) {
              var c = 1;
              c += (a = /\d+/.exec(a)[0]).length,
              s = parseInt(a),
              o.temporaryPause = !0,
              o.options.onTypingPaused(o.arrayPos, o),
              n = n.substring(0, r) + n.substring(r + c),
              o.toggleBlinking(!0)
          }
          if (a.charAt(0) === "`") {
              for (; n.substring(r + l).charAt(0) !== "`" && (l++,
              !(r + l > n.length)); )
                  ;
              var h = n.substring(0, r)
                , m = n.substring(h.length + 1, r + l)
                , p = n.substring(r + l + 1);
              n = h + m + p,
              l--
          }
          o.timeout = setTimeout(function() {
              o.toggleBlinking(!1),
              r >= n.length ? o.doneTyping(n, r) : o.keepTyping(n, r, l),
              o.temporaryPause && (o.temporaryPause = !1,
              o.options.onTypingResumed(o.arrayPos, o))
          }, s)
      }, i) : this.setPauseStatus(n, r, !0)
  }
  ,
  t.keepTyping = function(n, r, o) {
      r === 0 && (this.toggleBlinking(!1),
      this.options.preStringTyped(this.arrayPos, this));
      var i = n.substring(0, r += o);
      this.replaceText(i),
      this.typewrite(n, r)
  }
  ,
  t.doneTyping = function(n, r) {
      var o = this;
      this.options.onStringTyped(this.arrayPos, this),
      this.toggleBlinking(!0),
      this.arrayPos === this.strings.length - 1 && (this.complete(),
      this.loop === !1 || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function() {
          o.backspace(n, r)
      }, this.backDelay))
  }
  ,
  t.backspace = function(n, r) {
      var o = this;
      if (this.pause.status !== !0) {
          if (this.fadeOut)
              return this.initFadeOut();
          this.toggleBlinking(!1);
          var i = this.humanizer(this.backSpeed);
          this.timeout = setTimeout(function() {
              r = Nu.backSpaceHtmlChars(n, r, o);
              var l = n.substring(0, r);
              if (o.replaceText(l),
              o.smartBackspace) {
                  var s = o.strings[o.arrayPos + 1];
                  o.stopNum = s && l === s.substring(0, r) ? r : 0
              }
              r > o.stopNum ? (r--,
              o.backspace(n, r)) : r <= o.stopNum && (o.arrayPos++,
              o.arrayPos === o.strings.length ? (o.arrayPos = 0,
              o.options.onLastStringBackspaced(),
              o.shuffleStringsIfNeeded(),
              o.begin()) : o.typewrite(o.strings[o.sequence[o.arrayPos]], r))
          }, i)
      } else
          this.setPauseStatus(n, r, !1)
  }
  ,
  t.complete = function() {
      this.options.onComplete(this),
      this.loop ? this.curLoop++ : this.typingComplete = !0
  }
  ,
  t.setPauseStatus = function(n, r, o) {
      this.pause.typewrite = o,
      this.pause.curString = n,
      this.pause.curStrPos = r
  }
  ,
  t.toggleBlinking = function(n) {
      this.cursor && (this.pause.status || this.cursorBlinking !== n && (this.cursorBlinking = n,
      n ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")))
  }
  ,
  t.humanizer = function(n) {
      return Math.round(Math.random() * n / 2) + n
  }
  ,
  t.shuffleStringsIfNeeded = function() {
      this.shuffle && (this.sequence = this.sequence.sort(function() {
          return Math.random() - .5
      }))
  }
  ,
  t.initFadeOut = function() {
      var n = this;
      return this.el.className += " " + this.fadeOutClass,
      this.cursor && (this.cursor.className += " " + this.fadeOutClass),
      setTimeout(function() {
          n.arrayPos++,
          n.replaceText(""),
          n.strings.length > n.arrayPos ? n.typewrite(n.strings[n.sequence[n.arrayPos]], 0) : (n.typewrite(n.strings[0], 0),
          n.arrayPos = 0)
      }, this.fadeOutDelay)
  }
  ,
  t.replaceText = function(n) {
      this.attr ? this.el.setAttribute(this.attr, n) : this.isInput ? this.el.value = n : this.contentType === "html" ? this.el.innerHTML = n : this.el.textContent = n
  }
  ,
  t.bindFocusEvents = function() {
      var n = this;
      this.isInput && (this.el.addEventListener("focus", function(r) {
          n.stop()
      }),
      this.el.addEventListener("blur", function(r) {
          n.el.value && n.el.value.length !== 0 || n.start()
      }))
  }
  ,
  t.insertCursor = function() {
      this.showCursor && (this.cursor || (this.cursor = document.createElement("span"),
      this.cursor.className = "typed-cursor",
      this.cursor.setAttribute("aria-hidden", !0),
      this.cursor.innerHTML = this.cursorChar,
      this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)))
  }
  ,
  e
}();
const Pu = R.memo(({style: e, className: t, typedRef: n, parseRef: r, stopped: o, children: i, startWhenVisible: l, ...s})=>{
  const a = R.useRef(null)
    , c = R.useMemo(()=>{
      var m;
      return [...Object.values(s).filter(p=>typeof p == "boolean" || typeof p == "number" || typeof p == "string"), (m = s.strings) == null ? void 0 : m.join(",")]
  }
  , [s]);
  R.useEffect(()=>{
      const m = r && r(a) || a.current
        , p = new M1(m,{
          ...s
      });
      if ((o || l) && (p == null || p.stop()),
      l) {
          const w = new IntersectionObserver(([v])=>{
              v.isIntersecting && (p == null || p.start(),
              w.disconnect())
          }
          );
          w.observe(m)
      }
      return n && p && n(p),
      ()=>{
          p.destroy()
      }
  }
  , c);
  const h = i ? De.cloneElement(i, {
      ref: a
  }) : De.createElement("span", {
      style: e,
      ref: a
  });
  return De.createElement("span", {
      style: e,
      className: t,
      "data-testid": "react-typed"
  }, h)
}
);
var md = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}
, _u = De.createContext && De.createContext(md)
, $1 = ["attr", "size", "title"];
function D1(e, t) {
  if (e == null)
      return {};
  var n = F1(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (o = 0; o < i.length; o++)
          r = i[o],
          !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
  }
  return n
}
function F1(e, t) {
  if (e == null)
      return {};
  var n = {};
  for (var r in e)
      if (Object.prototype.hasOwnProperty.call(e, r)) {
          if (t.indexOf(r) >= 0)
              continue;
          n[r] = e[r]
      }
  return n
}
function $o() {
  return $o = Object.assign ? Object.assign.bind() : function(e) {
      for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
  }
  ,
  $o.apply(this, arguments)
}
function zu(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function(o) {
          return Object.getOwnPropertyDescriptor(e, o).enumerable
      })),
      n.push.apply(n, r)
  }
  return n
}
function Do(e) {
  for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t] != null ? arguments[t] : {};
      t % 2 ? zu(Object(n), !0).forEach(function(r) {
          B1(e, r, n[r])
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : zu(Object(n)).forEach(function(r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
      })
  }
  return e
}
function B1(e, t, n) {
  return t = A1(t),
  t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
  }) : e[t] = n,
  e
}
function A1(e) {
  var t = U1(e, "string");
  return typeof t == "symbol" ? t : t + ""
}
function U1(e, t) {
  if (typeof e != "object" || !e)
      return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
      var r = n.call(e, t || "default");
      if (typeof r != "object")
          return r;
      throw new TypeError("@@toPrimitive must return a primitive value.")
  }
  return (t === "string" ? String : Number)(e)
}
function hd(e) {
  return e && e.map((t,n)=>De.createElement(t.tag, Do({
      key: n
  }, t.attr), hd(t.child)))
}
function Pr(e) {
  return t=>De.createElement(V1, $o({
      attr: Do({}, e.attr)
  }, t), hd(e.child))
}
function V1(e) {
  var t = n=>{
      var {attr: r, size: o, title: i} = e, l = D1(e, $1), s = o || n.size || "1em", a;
      return n.className && (a = n.className),
      e.className && (a = (a ? a + " " : "") + e.className),
      De.createElement("svg", $o({
          stroke: "currentColor",
          fill: "currentColor",
          strokeWidth: "0"
      }, n.attr, r, l, {
          className: a,
          style: Do(Do({
              color: e.color || n.color
          }, n.style), e.style),
          height: s,
          width: s,
          xmlns: "http://www.w3.org/2000/svg"
      }), i && De.createElement("title", null, i), e.children)
  }
  ;
  return _u !== void 0 ? De.createElement(_u.Consumer, null, n=>t(n)) : t(md)
}
function H1(e) {
  return Pr({
      tag: "svg",
      attr: {
          viewBox: "0 0 448 512"
      },
      child: [{
          tag: "path",
          attr: {
              d: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"
          },
          child: []
      }]
  })(e)
}
function W1(e) {
  return Pr({
      tag: "svg",
      attr: {
          viewBox: "0 0 448 512"
      },
      child: [{
          tag: "path",
          attr: {
              d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
          },
          child: []
      }]
  })(e)
}
function Q1(e) {
  return Pr({
      tag: "svg",
      attr: {
          viewBox: "0 0 448 512"
      },
      child: [{
          tag: "path",
          attr: {
              d: "M224 122.8c-72.7 0-131.8 59.1-131.9 131.8 0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6 49.9-13.1 4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8 0-35.2-15.2-68.3-40.1-93.2-25-25-58-38.7-93.2-38.7zm77.5 188.4c-3.3 9.3-19.1 17.7-26.7 18.8-12.6 1.9-22.4.9-47.5-9.9-39.7-17.2-65.7-57.2-67.7-59.8-2-2.6-16.2-21.5-16.2-41s10.2-29.1 13.9-33.1c3.6-4 7.9-5 10.6-5 2.6 0 5.3 0 7.6.1 2.4.1 5.7-.9 8.9 6.8 3.3 7.9 11.2 27.4 12.2 29.4s1.7 4.3.3 6.9c-7.6 15.2-15.7 14.6-11.6 21.6 15.3 26.3 30.6 35.4 53.9 47.1 4 2 6.3 1.7 8.6-1 2.3-2.6 9.9-11.6 12.5-15.5 2.6-4 5.3-3.3 8.9-2 3.6 1.3 23.1 10.9 27.1 12.9s6.6 3 7.6 4.6c.9 1.9.9 9.9-2.4 19.1zM400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM223.9 413.2c-26.6 0-52.7-6.7-75.8-19.3L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5 29.9 30 47.9 69.8 47.9 112.2 0 87.4-72.7 158.5-160.1 158.5z"
          },
          child: []
      }]
  })(e)
}
function Y1(e) {
  return Pr({
      tag: "svg",
      attr: {
          viewBox: "0 0 448 512"
      },
      child: [{
          tag: "path",
          attr: {
              d: "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"
          },
          child: []
      }]
  })(e)
}
const X1 = ()=>N.jsx(Ci, {
  delay: .5,
  cascade: !0,
  damping: .5,
  children: N.jsxs("section", {
      className: "-z-10",
      id: "banner",
      children: [N.jsx(Pu, {
          className: "font-light text-xl lg:text-[1.8em] md:text-[1.5em] tracking-[.05em] text-customBlackLight",
          strings: ["Martin Samuel Perez"],
          typeSpeed: 40
      }), N.jsx(Pu, {
          className: "font-bold text-2xl lg:text-[2.5em] md:text-[2em] lg:mt-2 tracking-[.05em] text-customBlack block",
          strings: ["Estudiante FrontEnd", "Estudiante de React", "Estudiante DiseñoUI"],
          typeSpeed: 80,
          backSpeed: 50,
          attr: "placeholder",
          loop: !0,
          children: N.jsx("input", {
              type: "text",
              className: "bg-customWhiteLight placeholder:text-customBlack"
          })
      }), N.jsx("span", {
          className: "text-sm lg:text-[1em] inline-block mt-2 italic text-customBlackLight",
          children: "la creatividad se encuentra en cada linea de codigo"
      }), N.jsxs("section", {
          className: "flex gap-2 mt-5",
          children: [N.jsx("a", {
              href: "https://www.linkedin.com/in/mart%C3%ADn-samuel-p%C3%A9rez-montenero-747690251/",
              target: "blank",
              children: N.jsx(W1, {
                  className: "fill-customBlack hover:fill-customBlackLight transition-all duration-200",
                  size: "2em"
              })
          }), N.jsx("a", {
              href: "https://wa.me/50256216845?text=Hola!%20Me%20gustaría%20hablar%20contigo",
              target: "blank",
              children: N.jsx(Q1, {
                  className: "fill-customBlack hover:fill-customBlackLight transition-all duration-200",
                  size: "2em"
              })
          }), N.jsx("a", {
              href: "https://github.com/INKINSS",
              target: "blank",
              children: N.jsx(H1, {
                  className: "fill-customBlack hover:fill-customBlackLight transition-all duration-200",
                  size: "2em"
              })
          }), N.jsx("a", {
              href: "https://www.facebook.com/profile.php?id=100001496362178&locale=es_LA",
              target: "blank",
              children: N.jsx(Y1, {
                  className: "fill-customBlack hover:fill-customBlackLight transition-all duration-200",
                  size: "2em"
              })
          })]
      })]
  })
})
, K1 = ()=>N.jsx(Ci, {
  damping: .5,
  delay: 100,
  children: N.jsxs("section", {
      className: "mt-16",
      id: "mimundo",
      children: [N.jsx("h3", {
          className: "text-customBlack ssm:text-xl lg:text-2xl font-semibold mb-4",
          children: "mi mundo"
      }), N.jsxs("p", {
          className: "text-customBlackLight text-[1em]",
          children: ["Hace más de un año, descubrí mi pasión por el desarrollo web, explorando las herramientas principales para crear diseños simples y funcionales que transmitan ideas de manera efectiva en el ámbito digital. Creo firmemente en la importancia de un ", N.jsx("span", {
              className: "text-customBlack font-bold",
              children: "código limpio"
          }), " y un ", N.jsx("span", {
              className: "text-customBlack text-bold font-bold",
              children: "diseño adecuado"
          }), " para lograr este propósito."]
      })]
  })
});
function G1(e) {
  return Pr({
      tag: "svg",
      attr: {
          viewBox: "0 0 24 24",
          fill: "currentColor"
      },
      child: [{
          tag: "path",
          attr: {
              d: "M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"
          },
          child: []
      }]
  })(e)
}
const Z1 = ()=>{
  const [e,t] = R.useState(!1)
    , n = ()=>{
      t(!e)
  }
    , r = (o,i)=>{
      i.preventDefault(),
      t(!1);
      const l = document.getElementById(o);
      l && window.scrollTo({
          top: l.offsetTop,
          behavior: "smooth"
      })
  }
  ;
  return N.jsxs("header", {
      className: "flex justify-between w-full absolute lg:justify-center",
      children: [N.jsx("nav", {
          className: `${e ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 px-9 transition-all duration-300 ease-in-out ssm:w-1/2 md:w-1/3 lg:w-full h-screen lg:h-20 pb-5 ssm:fixed lg:relative ssm:bg-customWhiteLight lg:bg-transparent ssm:shadow-lg lg:shadow-none`,
          children: N.jsxs("ul", {
              className: "sm:flex-col lg:flex lg:flex-row lg:gap-8 lg:translate-y-4 w-full ssm:h-screen lg:h-10 justify-center",
              children: [N.jsx("li", {
                  className: "ssm:pt-16 lg:pt-5",
                  children: N.jsx("a", {
                      className: "hover:text-customBlackLight transition duration-200 text-customBlack",
                      href: "#banner",
                      onClick: o=>{
                          r("banner", o)
                      }
                      ,
                      children: "inicio"
                  })
              }), N.jsx("li", {
                  className: "pt-5",
                  children: N.jsx("a", {
                      className: "hover:text-customBlackLight transition duration-200 text-customBlack",
                      href: "#mimundo",
                      onClick: o=>{
                          r("mimundo", o)
                      }
                      ,
                      children: "mi mundo"
                  })
              }), N.jsx("li", {
                  className: "pt-5",
                  children: N.jsx("a", {
                      className: "hover:text-customBlackLight transition duration-200 text-customBlack",
                      href: "#proyects",
                      onClick: o=>{
                          r("proyects", o)
                      }
                      ,
                      children: "proyectos"
                  })
              }), N.jsx("li", {
                  className: "pt-5",
                  children: N.jsx("a", {
                      className: "hover:text-customBlackLight transition duration-200 text-customBlack",
                      href: "#skills",
                      onClick: o=>{
                          r("skills", o)
                      }
                      ,
                      children: "habilidades"
                  })
              })]
          })
      }), N.jsx(G1, {
          className: ` ${e ? "rotate-180 fixed" : " absolute rotate-0"} mx-6 my-4 transition-all duration-300 ease-in-out lg:hidden left-0 fill-customBlack`,
          size: "2.1em",
          onClick: n
      })]
  })
}
, J1 = [{
  id: 1,
  title: "Clon de X",
  description: "Clon de la red social X en base a su pagina principal hecha de manera responsive para cualquier dispositivo utilizando frameworks de diseño UI, CSS y más",
  scripts: {
      framework: "React",
      FrameworkCSS: "TailwindCSS",
      FrameworkUI: "ChakraUI"
  },
  urlGitHub: "https://github.com/INKINSS/Twitter",
  urlPrewiew: "https://twitter-wheat-two.vercel.app/"
}, {
  id: 2,
  title: "Clon de Spotify Desktop",
  description: "Clon de la aplicacion web Spotify en base a su pagina principal hecha para vista tamaño desktop unicamente, utilizando frameworks de diseño UI, CSS y más",
  scripts: {
      framework: "React",
      FrameworkCSS: "TailwindCSS",
      FrameworkUI: "MaterialUI"
  },
  urlGitHub: "https://github.com/INKINSS/Spotify",
  urlPrewiew: "https://spotify-smoky-ten.vercel.app/"
}, {
  id: 3,
  title: "Portfolio",
  description: "Este mismo portfolio esta hecho de manera responsive para cualquier dispositivo, con un diseño minimalista y elegante, hecho a codigo limpio y con ayuda de TailwindCSS",
  scripts: {
      framework: "React",
      FrameworkCSS: "TailwindCSS"
  },
  urlGitHub: "https://github.com/INKINSS/cv/tree/master"
}, {
  id: 4,
  title: "Diseño figma de reproductor de musica",
  description: "Un diseño elegante para una aplicacion web de streaming de musica hecho con la herramienta figma, otorgando una vista para dispositivos moviles y de escritorio con diferentes apartados haciendo el diseño completo",
  scripts: {},
  urlGitHub: "https://github.com/INKINSS/appMusic-Desing/tree/main",
  urlPrewiew: "https://www.figma.com/community/file/1372083410748549349/appmusic-desing"
}]
, q1 = ()=>N.jsxs("article", {
  className: "mt-16",
  id: "proyects",
  children: [N.jsx("h3", {
      className: "text-customBlack ssm:text-xl lg:text-2xl font-semibold mb-4",
      children: "proyectos"
  }), N.jsx("div", {
      children: J1.map(e=>N.jsx(Ci, {
          cascade: !0,
          damping: .5,
          delay: 100,
          children: N.jsxs("section", {
              className: "bg-customBlack text-customWhite my-8 py-8 px-7 hover:bg-customWhite hover:text-customBlack transition-all duration-200 border hover:border-customBlack",
              children: [N.jsx("h3", {
                  className: "text-[1.1em] font-semibold",
                  children: e.title
              }), N.jsx("p", {
                  className: "font-light text-[1em] my-5 lg:text-[1.1em]",
                  children: e.description
              }), N.jsxs("div", {
                  className: "mt-10 flex justify-between items-center",
                  children: [N.jsxs("div", {
                      className: "lg:flex lg:gap-4",
                      children: [N.jsx("div", {
                          className: "font-light text-[1em]",
                          children: e.scripts.framework
                      }), N.jsx("div", {
                          className: "font-light text-[1em]",
                          children: e.scripts.FrameworkCSS
                      }), N.jsx("div", {
                          className: "font-light text-[1em]",
                          children: e.scripts.FrameworkUI
                      })]
                  }), N.jsxs("div", {
                      className: "flex flex-col gap-y-3 lg:flex lg:flex-row lg:gap-4",
                      children: [N.jsx("a", {
                          className: "border px-3 py-2 hover:text-customBlackLight hover:border-customBlackLight transition-all duration-100",
                          target: "blank",
                          href: e.urlGitHub,
                          children: "GitHub"
                      }), e.urlPrewiew ? N.jsx("a", {
                          className: "border px-3 py-2 hover:text-customBlackLight hover:border-customBlackLight transition-all duration-100",
                          target: "blank",
                          href: e.urlPrewiew,
                          children: "Preview"
                      }) : ""]
                  })]
              })]
          })
      }, e.id))
  })]
})
, b1 = ()=>{
  const e = ["HTML", "CSS", "JavaScript", "React", "TailwindCSS", "Librerías React", "Git", "GitHub", "FrameworksUI", "Diseño"];
  return N.jsx(Ci, {
      damping: .5,
      delay: 100,
      children: N.jsxs("section", {
          id: "skills",
          children: [N.jsx("h3", {
              className: "text-customBlack ssm:text-xl lg:text-2xl font-semibold mb-4",
              children: "Habilidades"
          }), N.jsx("section", {
              className: "flex flex-wrap",
              children: e.map(t=>N.jsx("div", {
                  className: "bg-customBlack text-customWhite hover:text-customBlack hover:bg-customWhite border border-customBlack transition-all duration-200 px-3 py-2 mr-3 my-2 text-[1em]",
                  children: t
              }, t))
          })]
      })
  })
}
;
function eh() {
  return N.jsxs("main", {
      className: "relative bg-customWhite",
      children: [N.jsx(Z1, {}), N.jsxs("article", {
          className: "absolute translate-y-24 -z-10 ssm:px-9 lg:translate-y-40 md:px-40",
          children: [N.jsx(X1, {}), N.jsx(K1, {}), N.jsx(q1, {}), N.jsx(b1, {}), N.jsx(Q0, {})]
      })]
  })
}
tl.createRoot(document.getElementById("root")).render(N.jsx(De.StrictMode, {
  children: N.jsx(eh, {})
}));
