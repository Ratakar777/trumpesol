(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) r(n);
  new MutationObserver((n) => {
    for (const i of n)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(n) {
    const i = {};
    return (
      n.integrity && (i.integrity = n.integrity),
      n.referrerPolicy && (i.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : n.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(n) {
    if (n.ep) return;
    n.ep = !0;
    const i = t(n);
    fetch(n.href, i);
  }
})();
function Cd(A) {
  return A && A.__esModule && Object.prototype.hasOwnProperty.call(A, "default")
    ? A.default
    : A;
}
var nB = { exports: {} },
  fs = {},
  iB = { exports: {} },
  O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mn = Symbol.for("react.element"),
  Ud = Symbol.for("react.portal"),
  Fd = Symbol.for("react.fragment"),
  vd = Symbol.for("react.strict_mode"),
  md = Symbol.for("react.profiler"),
  yd = Symbol.for("react.provider"),
  Ed = Symbol.for("react.context"),
  Hd = Symbol.for("react.forward_ref"),
  Id = Symbol.for("react.suspense"),
  xd = Symbol.for("react.memo"),
  Sd = Symbol.for("react.lazy"),
  za = Symbol.iterator;
function Ld(A) {
  return A === null || typeof A != "object"
    ? null
    : ((A = (za && A[za]) || A["@@iterator"]),
      typeof A == "function" ? A : null);
}
var sB = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  oB = Object.assign,
  lB = {};
function wr(A, e, t) {
  (this.props = A),
    (this.context = e),
    (this.refs = lB),
    (this.updater = t || sB);
}
wr.prototype.isReactComponent = {};
wr.prototype.setState = function (A, e) {
  if (typeof A != "object" && typeof A != "function" && A != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, A, e, "setState");
};
wr.prototype.forceUpdate = function (A) {
  this.updater.enqueueForceUpdate(this, A, "forceUpdate");
};
function aB() {}
aB.prototype = wr.prototype;
function jl(A, e, t) {
  (this.props = A),
    (this.context = e),
    (this.refs = lB),
    (this.updater = t || sB);
}
var zl = (jl.prototype = new aB());
zl.constructor = jl;
oB(zl, wr.prototype);
zl.isPureReactComponent = !0;
var Za = Array.isArray,
  uB = Object.prototype.hasOwnProperty,
  Zl = { current: null },
  cB = { key: !0, ref: !0, __self: !0, __source: !0 };
function BB(A, e, t) {
  var r,
    n = {},
    i = null,
    s = null;
  if (e != null)
    for (r in (e.ref !== void 0 && (s = e.ref),
    e.key !== void 0 && (i = "" + e.key),
    e))
      uB.call(e, r) && !cB.hasOwnProperty(r) && (n[r] = e[r]);
  var o = arguments.length - 2;
  if (o === 1) n.children = t;
  else if (1 < o) {
    for (var l = Array(o), a = 0; a < o; a++) l[a] = arguments[a + 2];
    n.children = l;
  }
  if (A && A.defaultProps)
    for (r in ((o = A.defaultProps), o)) n[r] === void 0 && (n[r] = o[r]);
  return {
    $$typeof: mn,
    type: A,
    key: i,
    ref: s,
    props: n,
    _owner: Zl.current,
  };
}
function Kd(A, e) {
  return {
    $$typeof: mn,
    type: A.type,
    key: e,
    ref: A.ref,
    props: A.props,
    _owner: A._owner,
  };
}
function $l(A) {
  return typeof A == "object" && A !== null && A.$$typeof === mn;
}
function Dd(A) {
  var e = { "=": "=0", ":": "=2" };
  return (
    "$" +
    A.replace(/[=:]/g, function (t) {
      return e[t];
    })
  );
}
var $a = /\/+/g;
function Rs(A, e) {
  return typeof A == "object" && A !== null && A.key != null
    ? Dd("" + A.key)
    : e.toString(36);
}
function hi(A, e, t, r, n) {
  var i = typeof A;
  (i === "undefined" || i === "boolean") && (A = null);
  var s = !1;
  if (A === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (A.$$typeof) {
          case mn:
          case Ud:
            s = !0;
        }
    }
  if (s)
    return (
      (s = A),
      (n = n(s)),
      (A = r === "" ? "." + Rs(s, 0) : r),
      Za(n)
        ? ((t = ""),
          A != null && (t = A.replace($a, "$&/") + "/"),
          hi(n, e, t, "", function (a) {
            return a;
          }))
        : n != null &&
          ($l(n) &&
            (n = Kd(
              n,
              t +
                (!n.key || (s && s.key === n.key)
                  ? ""
                  : ("" + n.key).replace($a, "$&/") + "/") +
                A
            )),
          e.push(n)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Za(A)))
    for (var o = 0; o < A.length; o++) {
      i = A[o];
      var l = r + Rs(i, o);
      s += hi(i, e, t, l, n);
    }
  else if (((l = Ld(A)), typeof l == "function"))
    for (A = l.call(A), o = 0; !(i = A.next()).done; )
      (i = i.value), (l = r + Rs(i, o++)), (s += hi(i, e, t, l, n));
  else if (i === "object")
    throw (
      ((e = String(A)),
      Error(
        "Objects are not valid as a React child (found: " +
          (e === "[object Object]"
            ? "object with keys {" + Object.keys(A).join(", ") + "}"
            : e) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function Ln(A, e, t) {
  if (A == null) return A;
  var r = [],
    n = 0;
  return (
    hi(A, r, "", "", function (i) {
      return e.call(t, i, n++);
    }),
    r
  );
}
function Td(A) {
  if (A._status === -1) {
    var e = A._result;
    (e = e()),
      e.then(
        function (t) {
          (A._status === 0 || A._status === -1) &&
            ((A._status = 1), (A._result = t));
        },
        function (t) {
          (A._status === 0 || A._status === -1) &&
            ((A._status = 2), (A._result = t));
        }
      ),
      A._status === -1 && ((A._status = 0), (A._result = e));
  }
  if (A._status === 1) return A._result.default;
  throw A._result;
}
var KA = { current: null },
  pi = { transition: null },
  kd = {
    ReactCurrentDispatcher: KA,
    ReactCurrentBatchConfig: pi,
    ReactCurrentOwner: Zl,
  };
function fB() {
  throw Error("act(...) is not supported in production builds of React.");
}
O.Children = {
  map: Ln,
  forEach: function (A, e, t) {
    Ln(
      A,
      function () {
        e.apply(this, arguments);
      },
      t
    );
  },
  count: function (A) {
    var e = 0;
    return (
      Ln(A, function () {
        e++;
      }),
      e
    );
  },
  toArray: function (A) {
    return (
      Ln(A, function (e) {
        return e;
      }) || []
    );
  },
  only: function (A) {
    if (!$l(A))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return A;
  },
};
O.Component = wr;
O.Fragment = Fd;
O.Profiler = md;
O.PureComponent = jl;
O.StrictMode = vd;
O.Suspense = Id;
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kd;
O.act = fB;
O.cloneElement = function (A, e, t) {
  if (A == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        A +
        "."
    );
  var r = oB({}, A.props),
    n = A.key,
    i = A.ref,
    s = A._owner;
  if (e != null) {
    if (
      (e.ref !== void 0 && ((i = e.ref), (s = Zl.current)),
      e.key !== void 0 && (n = "" + e.key),
      A.type && A.type.defaultProps)
    )
      var o = A.type.defaultProps;
    for (l in e)
      uB.call(e, l) &&
        !cB.hasOwnProperty(l) &&
        (r[l] = e[l] === void 0 && o !== void 0 ? o[l] : e[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = t;
  else if (1 < l) {
    o = Array(l);
    for (var a = 0; a < l; a++) o[a] = arguments[a + 2];
    r.children = o;
  }
  return { $$typeof: mn, type: A.type, key: n, ref: i, props: r, _owner: s };
};
O.createContext = function (A) {
  return (
    (A = {
      $$typeof: Ed,
      _currentValue: A,
      _currentValue2: A,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (A.Provider = { $$typeof: yd, _context: A }),
    (A.Consumer = A)
  );
};
O.createElement = BB;
O.createFactory = function (A) {
  var e = BB.bind(null, A);
  return (e.type = A), e;
};
O.createRef = function () {
  return { current: null };
};
O.forwardRef = function (A) {
  return { $$typeof: Hd, render: A };
};
O.isValidElement = $l;
O.lazy = function (A) {
  return { $$typeof: Sd, _payload: { _status: -1, _result: A }, _init: Td };
};
O.memo = function (A, e) {
  return { $$typeof: xd, type: A, compare: e === void 0 ? null : e };
};
O.startTransition = function (A) {
  var e = pi.transition;
  pi.transition = {};
  try {
    A();
  } finally {
    pi.transition = e;
  }
};
O.unstable_act = fB;
O.useCallback = function (A, e) {
  return KA.current.useCallback(A, e);
};
O.useContext = function (A) {
  return KA.current.useContext(A);
};
O.useDebugValue = function () {};
O.useDeferredValue = function (A) {
  return KA.current.useDeferredValue(A);
};
O.useEffect = function (A, e) {
  return KA.current.useEffect(A, e);
};
O.useId = function () {
  return KA.current.useId();
};
O.useImperativeHandle = function (A, e, t) {
  return KA.current.useImperativeHandle(A, e, t);
};
O.useInsertionEffect = function (A, e) {
  return KA.current.useInsertionEffect(A, e);
};
O.useLayoutEffect = function (A, e) {
  return KA.current.useLayoutEffect(A, e);
};
O.useMemo = function (A, e) {
  return KA.current.useMemo(A, e);
};
O.useReducer = function (A, e, t) {
  return KA.current.useReducer(A, e, t);
};
O.useRef = function (A) {
  return KA.current.useRef(A);
};
O.useState = function (A) {
  return KA.current.useState(A);
};
O.useSyncExternalStore = function (A, e, t) {
  return KA.current.useSyncExternalStore(A, e, t);
};
O.useTransition = function () {
  return KA.current.useTransition();
};
O.version = "18.3.1";
iB.exports = O;
var SA = iB.exports;
const Od = Cd(SA);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nd = SA,
  Md = Symbol.for("react.element"),
  Rd = Symbol.for("react.fragment"),
  _d = Object.prototype.hasOwnProperty,
  Gd = Nd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Vd = { key: !0, ref: !0, __self: !0, __source: !0 };
function gB(A, e, t) {
  var r,
    n = {},
    i = null,
    s = null;
  t !== void 0 && (i = "" + t),
    e.key !== void 0 && (i = "" + e.key),
    e.ref !== void 0 && (s = e.ref);
  for (r in e) _d.call(e, r) && !Vd.hasOwnProperty(r) && (n[r] = e[r]);
  if (A && A.defaultProps)
    for (r in ((e = A.defaultProps), e)) n[r] === void 0 && (n[r] = e[r]);
  return {
    $$typeof: Md,
    type: A,
    key: i,
    ref: s,
    props: n,
    _owner: Gd.current,
  };
}
fs.Fragment = Rd;
fs.jsx = gB;
fs.jsxs = gB;
nB.exports = fs;
var y = nB.exports,
  Do = {},
  dB = { exports: {} },
  jA = {},
  wB = { exports: {} },
  hB = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (A) {
  function e(I, T) {
    var k = I.length;
    I.push(T);
    A: for (; 0 < k; ) {
      var G = (k - 1) >>> 1,
        X = I[G];
      if (0 < n(X, T)) (I[G] = T), (I[k] = X), (k = G);
      else break A;
    }
  }
  function t(I) {
    return I.length === 0 ? null : I[0];
  }
  function r(I) {
    if (I.length === 0) return null;
    var T = I[0],
      k = I.pop();
    if (k !== T) {
      I[0] = k;
      A: for (var G = 0, X = I.length, kA = X >>> 1; G < kA; ) {
        var HA = 2 * (G + 1) - 1,
          PA = I[HA],
          OA = HA + 1,
          we = I[OA];
        if (0 > n(PA, k))
          OA < X && 0 > n(we, PA)
            ? ((I[G] = we), (I[OA] = k), (G = OA))
            : ((I[G] = PA), (I[HA] = k), (G = HA));
        else if (OA < X && 0 > n(we, k)) (I[G] = we), (I[OA] = k), (G = OA);
        else break A;
      }
    }
    return T;
  }
  function n(I, T) {
    var k = I.sortIndex - T.sortIndex;
    return k !== 0 ? k : I.id - T.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    A.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      o = s.now();
    A.unstable_now = function () {
      return s.now() - o;
    };
  }
  var l = [],
    a = [],
    u = 1,
    c = null,
    f = 3,
    h = !1,
    w = !1,
    p = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    B = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(I) {
    for (var T = t(a); T !== null; ) {
      if (T.callback === null) r(a);
      else if (T.startTime <= I)
        r(a), (T.sortIndex = T.expirationTime), e(l, T);
      else break;
      T = t(a);
    }
  }
  function Q(I) {
    if (((p = !1), d(I), !w))
      if (t(l) !== null) (w = !0), z(U);
      else {
        var T = t(a);
        T !== null && oA(Q, T.startTime - I);
      }
  }
  function U(I, T) {
    (w = !1), p && ((p = !1), g(m), (m = -1)), (h = !0);
    var k = f;
    try {
      for (
        d(T), c = t(l);
        c !== null && (!(c.expirationTime > T) || (I && !_()));

      ) {
        var G = c.callback;
        if (typeof G == "function") {
          (c.callback = null), (f = c.priorityLevel);
          var X = G(c.expirationTime <= T);
          (T = A.unstable_now()),
            typeof X == "function" ? (c.callback = X) : c === t(l) && r(l),
            d(T);
        } else r(l);
        c = t(l);
      }
      if (c !== null) var kA = !0;
      else {
        var HA = t(a);
        HA !== null && oA(Q, HA.startTime - T), (kA = !1);
      }
      return kA;
    } finally {
      (c = null), (f = k), (h = !1);
    }
  }
  var C = !1,
    v = null,
    m = -1,
    F = 5,
    H = -1;
  function _() {
    return !(A.unstable_now() - H < F);
  }
  function tA() {
    if (v !== null) {
      var I = A.unstable_now();
      H = I;
      var T = !0;
      try {
        T = v(!0, I);
      } finally {
        T ? D() : ((C = !1), (v = null));
      }
    } else C = !1;
  }
  var D;
  if (typeof B == "function")
    D = function () {
      B(tA);
    };
  else if (typeof MessageChannel < "u") {
    var b = new MessageChannel(),
      TA = b.port2;
    (b.port1.onmessage = tA),
      (D = function () {
        TA.postMessage(null);
      });
  } else
    D = function () {
      x(tA, 0);
    };
  function z(I) {
    (v = I), C || ((C = !0), D());
  }
  function oA(I, T) {
    m = x(function () {
      I(A.unstable_now());
    }, T);
  }
  (A.unstable_IdlePriority = 5),
    (A.unstable_ImmediatePriority = 1),
    (A.unstable_LowPriority = 4),
    (A.unstable_NormalPriority = 3),
    (A.unstable_Profiling = null),
    (A.unstable_UserBlockingPriority = 2),
    (A.unstable_cancelCallback = function (I) {
      I.callback = null;
    }),
    (A.unstable_continueExecution = function () {
      w || h || ((w = !0), z(U));
    }),
    (A.unstable_forceFrameRate = function (I) {
      0 > I || 125 < I
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (F = 0 < I ? Math.floor(1e3 / I) : 5);
    }),
    (A.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (A.unstable_getFirstCallbackNode = function () {
      return t(l);
    }),
    (A.unstable_next = function (I) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = f;
      }
      var k = f;
      f = T;
      try {
        return I();
      } finally {
        f = k;
      }
    }),
    (A.unstable_pauseExecution = function () {}),
    (A.unstable_requestPaint = function () {}),
    (A.unstable_runWithPriority = function (I, T) {
      switch (I) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          I = 3;
      }
      var k = f;
      f = I;
      try {
        return T();
      } finally {
        f = k;
      }
    }),
    (A.unstable_scheduleCallback = function (I, T, k) {
      var G = A.unstable_now();
      switch (
        (typeof k == "object" && k !== null
          ? ((k = k.delay), (k = typeof k == "number" && 0 < k ? G + k : G))
          : (k = G),
        I)
      ) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return (
        (X = k + X),
        (I = {
          id: u++,
          callback: T,
          priorityLevel: I,
          startTime: k,
          expirationTime: X,
          sortIndex: -1,
        }),
        k > G
          ? ((I.sortIndex = k),
            e(a, I),
            t(l) === null &&
              I === t(a) &&
              (p ? (g(m), (m = -1)) : (p = !0), oA(Q, k - G)))
          : ((I.sortIndex = X), e(l, I), w || h || ((w = !0), z(U))),
        I
      );
    }),
    (A.unstable_shouldYield = _),
    (A.unstable_wrapCallback = function (I) {
      var T = f;
      return function () {
        var k = f;
        f = T;
        try {
          return I.apply(this, arguments);
        } finally {
          f = k;
        }
      };
    });
})(hB);
wB.exports = hB;
var Pd = wB.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bd = SA,
  YA = Pd;
function E(A) {
  for (
    var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + A, t = 1;
    t < arguments.length;
    t++
  )
    e += "&args[]=" + encodeURIComponent(arguments[t]);
  return (
    "Minified React error #" +
    A +
    "; visit " +
    e +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var pB = new Set(),
  rn = {};
function Lt(A, e) {
  lr(A, e), lr(A + "Capture", e);
}
function lr(A, e) {
  for (rn[A] = e, A = 0; A < e.length; A++) pB.add(e[A]);
}
var De = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  To = Object.prototype.hasOwnProperty,
  Xd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  qa = {},
  Au = {};
function Wd(A) {
  return To.call(Au, A)
    ? !0
    : To.call(qa, A)
    ? !1
    : Xd.test(A)
    ? (Au[A] = !0)
    : ((qa[A] = !0), !1);
}
function Jd(A, e, t, r) {
  if (t !== null && t.type === 0) return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : t !== null
        ? !t.acceptsBooleans
        : ((A = A.toLowerCase().slice(0, 5)), A !== "data-" && A !== "aria-");
    default:
      return !1;
  }
}
function Yd(A, e, t, r) {
  if (e === null || typeof e > "u" || Jd(A, e, t, r)) return !0;
  if (r) return !1;
  if (t !== null)
    switch (t.type) {
      case 3:
        return !e;
      case 4:
        return e === !1;
      case 5:
        return isNaN(e);
      case 6:
        return isNaN(e) || 1 > e;
    }
  return !1;
}
function DA(A, e, t, r, n, i, s) {
  (this.acceptsBooleans = e === 2 || e === 3 || e === 4),
    (this.attributeName = r),
    (this.attributeNamespace = n),
    (this.mustUseProperty = t),
    (this.propertyName = A),
    (this.type = e),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var CA = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (A) {
    CA[A] = new DA(A, 0, !1, A, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (A) {
  var e = A[0];
  CA[e] = new DA(e, 1, !1, A[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (A) {
  CA[A] = new DA(A, 2, !1, A.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (A) {
  CA[A] = new DA(A, 2, !1, A, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (A) {
    CA[A] = new DA(A, 3, !1, A.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (A) {
  CA[A] = new DA(A, 3, !0, A, null, !1, !1);
});
["capture", "download"].forEach(function (A) {
  CA[A] = new DA(A, 4, !1, A, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (A) {
  CA[A] = new DA(A, 6, !1, A, null, !1, !1);
});
["rowSpan", "start"].forEach(function (A) {
  CA[A] = new DA(A, 5, !1, A.toLowerCase(), null, !1, !1);
});
var ql = /[\-:]([a-z])/g;
function Aa(A) {
  return A[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (A) {
    var e = A.replace(ql, Aa);
    CA[e] = new DA(e, 1, !1, A, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (A) {
    var e = A.replace(ql, Aa);
    CA[e] = new DA(e, 1, !1, A, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (A) {
  var e = A.replace(ql, Aa);
  CA[e] = new DA(e, 1, !1, A, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (A) {
  CA[A] = new DA(A, 1, !1, A.toLowerCase(), null, !1, !1);
});
CA.xlinkHref = new DA(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (A) {
  CA[A] = new DA(A, 1, !1, A.toLowerCase(), null, !0, !0);
});
function ea(A, e, t, r) {
  var n = CA.hasOwnProperty(e) ? CA[e] : null;
  (n !== null
    ? n.type !== 0
    : r ||
      !(2 < e.length) ||
      (e[0] !== "o" && e[0] !== "O") ||
      (e[1] !== "n" && e[1] !== "N")) &&
    (Yd(e, t, n, r) && (t = null),
    r || n === null
      ? Wd(e) && (t === null ? A.removeAttribute(e) : A.setAttribute(e, "" + t))
      : n.mustUseProperty
      ? (A[n.propertyName] = t === null ? (n.type === 3 ? !1 : "") : t)
      : ((e = n.attributeName),
        (r = n.attributeNamespace),
        t === null
          ? A.removeAttribute(e)
          : ((n = n.type),
            (t = n === 3 || (n === 4 && t === !0) ? "" : "" + t),
            r ? A.setAttributeNS(r, e, t) : A.setAttribute(e, t))));
}
var Me = bd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Kn = Symbol.for("react.element"),
  Vt = Symbol.for("react.portal"),
  Pt = Symbol.for("react.fragment"),
  ta = Symbol.for("react.strict_mode"),
  ko = Symbol.for("react.profiler"),
  QB = Symbol.for("react.provider"),
  CB = Symbol.for("react.context"),
  ra = Symbol.for("react.forward_ref"),
  Oo = Symbol.for("react.suspense"),
  No = Symbol.for("react.suspense_list"),
  na = Symbol.for("react.memo"),
  Ve = Symbol.for("react.lazy"),
  UB = Symbol.for("react.offscreen"),
  eu = Symbol.iterator;
function Cr(A) {
  return A === null || typeof A != "object"
    ? null
    : ((A = (eu && A[eu]) || A["@@iterator"]),
      typeof A == "function" ? A : null);
}
var eA = Object.assign,
  _s;
function Kr(A) {
  if (_s === void 0)
    try {
      throw Error();
    } catch (t) {
      var e = t.stack.trim().match(/\n( *(at )?)/);
      _s = (e && e[1]) || "";
    }
  return (
    `
` +
    _s +
    A
  );
}
var Gs = !1;
function Vs(A, e) {
  if (!A || Gs) return "";
  Gs = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e)
      if (
        ((e = function () {
          throw Error();
        }),
        Object.defineProperty(e.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(e, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(A, [], e);
      } else {
        try {
          e.call();
        } catch (a) {
          r = a;
        }
        A.call(e.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      A();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var n = a.stack.split(`
`),
          i = r.stack.split(`
`),
          s = n.length - 1,
          o = i.length - 1;
        1 <= s && 0 <= o && n[s] !== i[o];

      )
        o--;
      for (; 1 <= s && 0 <= o; s--, o--)
        if (n[s] !== i[o]) {
          if (s !== 1 || o !== 1)
            do
              if ((s--, o--, 0 > o || n[s] !== i[o])) {
                var l =
                  `
` + n[s].replace(" at new ", " at ");
                return (
                  A.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", A.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= o);
          break;
        }
    }
  } finally {
    (Gs = !1), (Error.prepareStackTrace = t);
  }
  return (A = A ? A.displayName || A.name : "") ? Kr(A) : "";
}
function jd(A) {
  switch (A.tag) {
    case 5:
      return Kr(A.type);
    case 16:
      return Kr("Lazy");
    case 13:
      return Kr("Suspense");
    case 19:
      return Kr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (A = Vs(A.type, !1)), A;
    case 11:
      return (A = Vs(A.type.render, !1)), A;
    case 1:
      return (A = Vs(A.type, !0)), A;
    default:
      return "";
  }
}
function Mo(A) {
  if (A == null) return null;
  if (typeof A == "function") return A.displayName || A.name || null;
  if (typeof A == "string") return A;
  switch (A) {
    case Pt:
      return "Fragment";
    case Vt:
      return "Portal";
    case ko:
      return "Profiler";
    case ta:
      return "StrictMode";
    case Oo:
      return "Suspense";
    case No:
      return "SuspenseList";
  }
  if (typeof A == "object")
    switch (A.$$typeof) {
      case CB:
        return (A.displayName || "Context") + ".Consumer";
      case QB:
        return (A._context.displayName || "Context") + ".Provider";
      case ra:
        var e = A.render;
        return (
          (A = A.displayName),
          A ||
            ((A = e.displayName || e.name || ""),
            (A = A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef")),
          A
        );
      case na:
        return (
          (e = A.displayName || null), e !== null ? e : Mo(A.type) || "Memo"
        );
      case Ve:
        (e = A._payload), (A = A._init);
        try {
          return Mo(A(e));
        } catch {}
    }
  return null;
}
function zd(A) {
  var e = A.type;
  switch (A.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (A = e.render),
        (A = A.displayName || A.name || ""),
        e.displayName || (A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return e;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Mo(e);
    case 8:
      return e === ta ? "StrictMode" : "Mode";
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
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
  }
  return null;
}
function lt(A) {
  switch (typeof A) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return A;
    case "object":
      return A;
    default:
      return "";
  }
}
function FB(A) {
  var e = A.type;
  return (
    (A = A.nodeName) &&
    A.toLowerCase() === "input" &&
    (e === "checkbox" || e === "radio")
  );
}
function Zd(A) {
  var e = FB(A) ? "checked" : "value",
    t = Object.getOwnPropertyDescriptor(A.constructor.prototype, e),
    r = "" + A[e];
  if (
    !A.hasOwnProperty(e) &&
    typeof t < "u" &&
    typeof t.get == "function" &&
    typeof t.set == "function"
  ) {
    var n = t.get,
      i = t.set;
    return (
      Object.defineProperty(A, e, {
        configurable: !0,
        get: function () {
          return n.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(A, e, { enumerable: t.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (A._valueTracker = null), delete A[e];
        },
      }
    );
  }
}
function Dn(A) {
  A._valueTracker || (A._valueTracker = Zd(A));
}
function vB(A) {
  if (!A) return !1;
  var e = A._valueTracker;
  if (!e) return !0;
  var t = e.getValue(),
    r = "";
  return (
    A && (r = FB(A) ? (A.checked ? "true" : "false") : A.value),
    (A = r),
    A !== t ? (e.setValue(A), !0) : !1
  );
}
function Di(A) {
  if (((A = A || (typeof document < "u" ? document : void 0)), typeof A > "u"))
    return null;
  try {
    return A.activeElement || A.body;
  } catch {
    return A.body;
  }
}
function Ro(A, e) {
  var t = e.checked;
  return eA({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: t ?? A._wrapperState.initialChecked,
  });
}
function tu(A, e) {
  var t = e.defaultValue == null ? "" : e.defaultValue,
    r = e.checked != null ? e.checked : e.defaultChecked;
  (t = lt(e.value != null ? e.value : t)),
    (A._wrapperState = {
      initialChecked: r,
      initialValue: t,
      controlled:
        e.type === "checkbox" || e.type === "radio"
          ? e.checked != null
          : e.value != null,
    });
}
function mB(A, e) {
  (e = e.checked), e != null && ea(A, "checked", e, !1);
}
function _o(A, e) {
  mB(A, e);
  var t = lt(e.value),
    r = e.type;
  if (t != null)
    r === "number"
      ? ((t === 0 && A.value === "") || A.value != t) && (A.value = "" + t)
      : A.value !== "" + t && (A.value = "" + t);
  else if (r === "submit" || r === "reset") {
    A.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value")
    ? Go(A, e.type, t)
    : e.hasOwnProperty("defaultValue") && Go(A, e.type, lt(e.defaultValue)),
    e.checked == null &&
      e.defaultChecked != null &&
      (A.defaultChecked = !!e.defaultChecked);
}
function ru(A, e, t) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var r = e.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (e.value !== void 0 && e.value !== null)
      )
    )
      return;
    (e = "" + A._wrapperState.initialValue),
      t || e === A.value || (A.value = e),
      (A.defaultValue = e);
  }
  (t = A.name),
    t !== "" && (A.name = ""),
    (A.defaultChecked = !!A._wrapperState.initialChecked),
    t !== "" && (A.name = t);
}
function Go(A, e, t) {
  (e !== "number" || Di(A.ownerDocument) !== A) &&
    (t == null
      ? (A.defaultValue = "" + A._wrapperState.initialValue)
      : A.defaultValue !== "" + t && (A.defaultValue = "" + t));
}
var Dr = Array.isArray;
function er(A, e, t, r) {
  if (((A = A.options), e)) {
    e = {};
    for (var n = 0; n < t.length; n++) e["$" + t[n]] = !0;
    for (t = 0; t < A.length; t++)
      (n = e.hasOwnProperty("$" + A[t].value)),
        A[t].selected !== n && (A[t].selected = n),
        n && r && (A[t].defaultSelected = !0);
  } else {
    for (t = "" + lt(t), e = null, n = 0; n < A.length; n++) {
      if (A[n].value === t) {
        (A[n].selected = !0), r && (A[n].defaultSelected = !0);
        return;
      }
      e !== null || A[n].disabled || (e = A[n]);
    }
    e !== null && (e.selected = !0);
  }
}
function Vo(A, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(E(91));
  return eA({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: "" + A._wrapperState.initialValue,
  });
}
function nu(A, e) {
  var t = e.value;
  if (t == null) {
    if (((t = e.children), (e = e.defaultValue), t != null)) {
      if (e != null) throw Error(E(92));
      if (Dr(t)) {
        if (1 < t.length) throw Error(E(93));
        t = t[0];
      }
      e = t;
    }
    e == null && (e = ""), (t = e);
  }
  A._wrapperState = { initialValue: lt(t) };
}
function yB(A, e) {
  var t = lt(e.value),
    r = lt(e.defaultValue);
  t != null &&
    ((t = "" + t),
    t !== A.value && (A.value = t),
    e.defaultValue == null && A.defaultValue !== t && (A.defaultValue = t)),
    r != null && (A.defaultValue = "" + r);
}
function iu(A) {
  var e = A.textContent;
  e === A._wrapperState.initialValue && e !== "" && e !== null && (A.value = e);
}
function EB(A) {
  switch (A) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Po(A, e) {
  return A == null || A === "http://www.w3.org/1999/xhtml"
    ? EB(e)
    : A === "http://www.w3.org/2000/svg" && e === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : A;
}
var Tn,
  HB = (function (A) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (e, t, r, n) {
          MSApp.execUnsafeLocalFunction(function () {
            return A(e, t, r, n);
          });
        }
      : A;
  })(function (A, e) {
    if (A.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in A)
      A.innerHTML = e;
    else {
      for (
        Tn = Tn || document.createElement("div"),
          Tn.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
          e = Tn.firstChild;
        A.firstChild;

      )
        A.removeChild(A.firstChild);
      for (; e.firstChild; ) A.appendChild(e.firstChild);
    }
  });
function nn(A, e) {
  if (e) {
    var t = A.firstChild;
    if (t && t === A.lastChild && t.nodeType === 3) {
      t.nodeValue = e;
      return;
    }
  }
  A.textContent = e;
}
var Pr = {
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
    strokeWidth: !0,
  },
  $d = ["Webkit", "ms", "Moz", "O"];
Object.keys(Pr).forEach(function (A) {
  $d.forEach(function (e) {
    (e = e + A.charAt(0).toUpperCase() + A.substring(1)), (Pr[e] = Pr[A]);
  });
});
function IB(A, e, t) {
  return e == null || typeof e == "boolean" || e === ""
    ? ""
    : t || typeof e != "number" || e === 0 || (Pr.hasOwnProperty(A) && Pr[A])
    ? ("" + e).trim()
    : e + "px";
}
function xB(A, e) {
  A = A.style;
  for (var t in e)
    if (e.hasOwnProperty(t)) {
      var r = t.indexOf("--") === 0,
        n = IB(t, e[t], r);
      t === "float" && (t = "cssFloat"), r ? A.setProperty(t, n) : (A[t] = n);
    }
}
var qd = eA(
  { menuitem: !0 },
  {
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
    wbr: !0,
  }
);
function bo(A, e) {
  if (e) {
    if (qd[A] && (e.children != null || e.dangerouslySetInnerHTML != null))
      throw Error(E(137, A));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(E(60));
      if (
        typeof e.dangerouslySetInnerHTML != "object" ||
        !("__html" in e.dangerouslySetInnerHTML)
      )
        throw Error(E(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error(E(62));
  }
}
function Xo(A, e) {
  if (A.indexOf("-") === -1) return typeof e.is == "string";
  switch (A) {
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
      return !0;
  }
}
var Wo = null;
function ia(A) {
  return (
    (A = A.target || A.srcElement || window),
    A.correspondingUseElement && (A = A.correspondingUseElement),
    A.nodeType === 3 ? A.parentNode : A
  );
}
var Jo = null,
  tr = null,
  rr = null;
function su(A) {
  if ((A = Hn(A))) {
    if (typeof Jo != "function") throw Error(E(280));
    var e = A.stateNode;
    e && ((e = ps(e)), Jo(A.stateNode, A.type, e));
  }
}
function SB(A) {
  tr ? (rr ? rr.push(A) : (rr = [A])) : (tr = A);
}
function LB() {
  if (tr) {
    var A = tr,
      e = rr;
    if (((rr = tr = null), su(A), e)) for (A = 0; A < e.length; A++) su(e[A]);
  }
}
function KB(A, e) {
  return A(e);
}
function DB() {}
var Ps = !1;
function TB(A, e, t) {
  if (Ps) return A(e, t);
  Ps = !0;
  try {
    return KB(A, e, t);
  } finally {
    (Ps = !1), (tr !== null || rr !== null) && (DB(), LB());
  }
}
function sn(A, e) {
  var t = A.stateNode;
  if (t === null) return null;
  var r = ps(t);
  if (r === null) return null;
  t = r[e];
  A: switch (e) {
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
      (r = !r.disabled) ||
        ((A = A.type),
        (r = !(
          A === "button" ||
          A === "input" ||
          A === "select" ||
          A === "textarea"
        ))),
        (A = !r);
      break A;
    default:
      A = !1;
  }
  if (A) return null;
  if (t && typeof t != "function") throw Error(E(231, e, typeof t));
  return t;
}
var Yo = !1;
if (De)
  try {
    var Ur = {};
    Object.defineProperty(Ur, "passive", {
      get: function () {
        Yo = !0;
      },
    }),
      window.addEventListener("test", Ur, Ur),
      window.removeEventListener("test", Ur, Ur);
  } catch {
    Yo = !1;
  }
function Aw(A, e, t, r, n, i, s, o, l) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(t, a);
  } catch (u) {
    this.onError(u);
  }
}
var br = !1,
  Ti = null,
  ki = !1,
  jo = null,
  ew = {
    onError: function (A) {
      (br = !0), (Ti = A);
    },
  };
function tw(A, e, t, r, n, i, s, o, l) {
  (br = !1), (Ti = null), Aw.apply(ew, arguments);
}
function rw(A, e, t, r, n, i, s, o, l) {
  if ((tw.apply(this, arguments), br)) {
    if (br) {
      var a = Ti;
      (br = !1), (Ti = null);
    } else throw Error(E(198));
    ki || ((ki = !0), (jo = a));
  }
}
function Kt(A) {
  var e = A,
    t = A;
  if (A.alternate) for (; e.return; ) e = e.return;
  else {
    A = e;
    do (e = A), e.flags & 4098 && (t = e.return), (A = e.return);
    while (A);
  }
  return e.tag === 3 ? t : null;
}
function kB(A) {
  if (A.tag === 13) {
    var e = A.memoizedState;
    if (
      (e === null && ((A = A.alternate), A !== null && (e = A.memoizedState)),
      e !== null)
    )
      return e.dehydrated;
  }
  return null;
}
function ou(A) {
  if (Kt(A) !== A) throw Error(E(188));
}
function nw(A) {
  var e = A.alternate;
  if (!e) {
    if (((e = Kt(A)), e === null)) throw Error(E(188));
    return e !== A ? null : A;
  }
  for (var t = A, r = e; ; ) {
    var n = t.return;
    if (n === null) break;
    var i = n.alternate;
    if (i === null) {
      if (((r = n.return), r !== null)) {
        t = r;
        continue;
      }
      break;
    }
    if (n.child === i.child) {
      for (i = n.child; i; ) {
        if (i === t) return ou(n), A;
        if (i === r) return ou(n), e;
        i = i.sibling;
      }
      throw Error(E(188));
    }
    if (t.return !== r.return) (t = n), (r = i);
    else {
      for (var s = !1, o = n.child; o; ) {
        if (o === t) {
          (s = !0), (t = n), (r = i);
          break;
        }
        if (o === r) {
          (s = !0), (r = n), (t = i);
          break;
        }
        o = o.sibling;
      }
      if (!s) {
        for (o = i.child; o; ) {
          if (o === t) {
            (s = !0), (t = i), (r = n);
            break;
          }
          if (o === r) {
            (s = !0), (r = i), (t = n);
            break;
          }
          o = o.sibling;
        }
        if (!s) throw Error(E(189));
      }
    }
    if (t.alternate !== r) throw Error(E(190));
  }
  if (t.tag !== 3) throw Error(E(188));
  return t.stateNode.current === t ? A : e;
}
function OB(A) {
  return (A = nw(A)), A !== null ? NB(A) : null;
}
function NB(A) {
  if (A.tag === 5 || A.tag === 6) return A;
  for (A = A.child; A !== null; ) {
    var e = NB(A);
    if (e !== null) return e;
    A = A.sibling;
  }
  return null;
}
var MB = YA.unstable_scheduleCallback,
  lu = YA.unstable_cancelCallback,
  iw = YA.unstable_shouldYield,
  sw = YA.unstable_requestPaint,
  sA = YA.unstable_now,
  ow = YA.unstable_getCurrentPriorityLevel,
  sa = YA.unstable_ImmediatePriority,
  RB = YA.unstable_UserBlockingPriority,
  Oi = YA.unstable_NormalPriority,
  lw = YA.unstable_LowPriority,
  _B = YA.unstable_IdlePriority,
  gs = null,
  Ue = null;
function aw(A) {
  if (Ue && typeof Ue.onCommitFiberRoot == "function")
    try {
      Ue.onCommitFiberRoot(gs, A, void 0, (A.current.flags & 128) === 128);
    } catch {}
}
var Be = Math.clz32 ? Math.clz32 : Bw,
  uw = Math.log,
  cw = Math.LN2;
function Bw(A) {
  return (A >>>= 0), A === 0 ? 32 : (31 - ((uw(A) / cw) | 0)) | 0;
}
var kn = 64,
  On = 4194304;
function Tr(A) {
  switch (A & -A) {
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
      return A & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return A & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return A;
  }
}
function Ni(A, e) {
  var t = A.pendingLanes;
  if (t === 0) return 0;
  var r = 0,
    n = A.suspendedLanes,
    i = A.pingedLanes,
    s = t & 268435455;
  if (s !== 0) {
    var o = s & ~n;
    o !== 0 ? (r = Tr(o)) : ((i &= s), i !== 0 && (r = Tr(i)));
  } else (s = t & ~n), s !== 0 ? (r = Tr(s)) : i !== 0 && (r = Tr(i));
  if (r === 0) return 0;
  if (
    e !== 0 &&
    e !== r &&
    !(e & n) &&
    ((n = r & -r), (i = e & -e), n >= i || (n === 16 && (i & 4194240) !== 0))
  )
    return e;
  if ((r & 4 && (r |= t & 16), (e = A.entangledLanes), e !== 0))
    for (A = A.entanglements, e &= r; 0 < e; )
      (t = 31 - Be(e)), (n = 1 << t), (r |= A[t]), (e &= ~n);
  return r;
}
function fw(A, e) {
  switch (A) {
    case 1:
    case 2:
    case 4:
      return e + 250;
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
      return e + 5e3;
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
      return -1;
  }
}
function gw(A, e) {
  for (
    var t = A.suspendedLanes,
      r = A.pingedLanes,
      n = A.expirationTimes,
      i = A.pendingLanes;
    0 < i;

  ) {
    var s = 31 - Be(i),
      o = 1 << s,
      l = n[s];
    l === -1
      ? (!(o & t) || o & r) && (n[s] = fw(o, e))
      : l <= e && (A.expiredLanes |= o),
      (i &= ~o);
  }
}
function zo(A) {
  return (
    (A = A.pendingLanes & -1073741825),
    A !== 0 ? A : A & 1073741824 ? 1073741824 : 0
  );
}
function GB() {
  var A = kn;
  return (kn <<= 1), !(kn & 4194240) && (kn = 64), A;
}
function bs(A) {
  for (var e = [], t = 0; 31 > t; t++) e.push(A);
  return e;
}
function yn(A, e, t) {
  (A.pendingLanes |= e),
    e !== 536870912 && ((A.suspendedLanes = 0), (A.pingedLanes = 0)),
    (A = A.eventTimes),
    (e = 31 - Be(e)),
    (A[e] = t);
}
function dw(A, e) {
  var t = A.pendingLanes & ~e;
  (A.pendingLanes = e),
    (A.suspendedLanes = 0),
    (A.pingedLanes = 0),
    (A.expiredLanes &= e),
    (A.mutableReadLanes &= e),
    (A.entangledLanes &= e),
    (e = A.entanglements);
  var r = A.eventTimes;
  for (A = A.expirationTimes; 0 < t; ) {
    var n = 31 - Be(t),
      i = 1 << n;
    (e[n] = 0), (r[n] = -1), (A[n] = -1), (t &= ~i);
  }
}
function oa(A, e) {
  var t = (A.entangledLanes |= e);
  for (A = A.entanglements; t; ) {
    var r = 31 - Be(t),
      n = 1 << r;
    (n & e) | (A[r] & e) && (A[r] |= e), (t &= ~n);
  }
}
var V = 0;
function VB(A) {
  return (A &= -A), 1 < A ? (4 < A ? (A & 268435455 ? 16 : 536870912) : 4) : 1;
}
var PB,
  la,
  bB,
  XB,
  WB,
  Zo = !1,
  Nn = [],
  $e = null,
  qe = null,
  At = null,
  on = new Map(),
  ln = new Map(),
  Xe = [],
  ww =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function au(A, e) {
  switch (A) {
    case "focusin":
    case "focusout":
      $e = null;
      break;
    case "dragenter":
    case "dragleave":
      qe = null;
      break;
    case "mouseover":
    case "mouseout":
      At = null;
      break;
    case "pointerover":
    case "pointerout":
      on.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ln.delete(e.pointerId);
  }
}
function Fr(A, e, t, r, n, i) {
  return A === null || A.nativeEvent !== i
    ? ((A = {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [n],
      }),
      e !== null && ((e = Hn(e)), e !== null && la(e)),
      A)
    : ((A.eventSystemFlags |= r),
      (e = A.targetContainers),
      n !== null && e.indexOf(n) === -1 && e.push(n),
      A);
}
function hw(A, e, t, r, n) {
  switch (e) {
    case "focusin":
      return ($e = Fr($e, A, e, t, r, n)), !0;
    case "dragenter":
      return (qe = Fr(qe, A, e, t, r, n)), !0;
    case "mouseover":
      return (At = Fr(At, A, e, t, r, n)), !0;
    case "pointerover":
      var i = n.pointerId;
      return on.set(i, Fr(on.get(i) || null, A, e, t, r, n)), !0;
    case "gotpointercapture":
      return (
        (i = n.pointerId), ln.set(i, Fr(ln.get(i) || null, A, e, t, r, n)), !0
      );
  }
  return !1;
}
function JB(A) {
  var e = pt(A.target);
  if (e !== null) {
    var t = Kt(e);
    if (t !== null) {
      if (((e = t.tag), e === 13)) {
        if (((e = kB(t)), e !== null)) {
          (A.blockedOn = e),
            WB(A.priority, function () {
              bB(t);
            });
          return;
        }
      } else if (e === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        A.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  A.blockedOn = null;
}
function Qi(A) {
  if (A.blockedOn !== null) return !1;
  for (var e = A.targetContainers; 0 < e.length; ) {
    var t = $o(A.domEventName, A.eventSystemFlags, e[0], A.nativeEvent);
    if (t === null) {
      t = A.nativeEvent;
      var r = new t.constructor(t.type, t);
      (Wo = r), t.target.dispatchEvent(r), (Wo = null);
    } else return (e = Hn(t)), e !== null && la(e), (A.blockedOn = t), !1;
    e.shift();
  }
  return !0;
}
function uu(A, e, t) {
  Qi(A) && t.delete(e);
}
function pw() {
  (Zo = !1),
    $e !== null && Qi($e) && ($e = null),
    qe !== null && Qi(qe) && (qe = null),
    At !== null && Qi(At) && (At = null),
    on.forEach(uu),
    ln.forEach(uu);
}
function vr(A, e) {
  A.blockedOn === e &&
    ((A.blockedOn = null),
    Zo ||
      ((Zo = !0),
      YA.unstable_scheduleCallback(YA.unstable_NormalPriority, pw)));
}
function an(A) {
  function e(n) {
    return vr(n, A);
  }
  if (0 < Nn.length) {
    vr(Nn[0], A);
    for (var t = 1; t < Nn.length; t++) {
      var r = Nn[t];
      r.blockedOn === A && (r.blockedOn = null);
    }
  }
  for (
    $e !== null && vr($e, A),
      qe !== null && vr(qe, A),
      At !== null && vr(At, A),
      on.forEach(e),
      ln.forEach(e),
      t = 0;
    t < Xe.length;
    t++
  )
    (r = Xe[t]), r.blockedOn === A && (r.blockedOn = null);
  for (; 0 < Xe.length && ((t = Xe[0]), t.blockedOn === null); )
    JB(t), t.blockedOn === null && Xe.shift();
}
var nr = Me.ReactCurrentBatchConfig,
  Mi = !0;
function Qw(A, e, t, r) {
  var n = V,
    i = nr.transition;
  nr.transition = null;
  try {
    (V = 1), aa(A, e, t, r);
  } finally {
    (V = n), (nr.transition = i);
  }
}
function Cw(A, e, t, r) {
  var n = V,
    i = nr.transition;
  nr.transition = null;
  try {
    (V = 4), aa(A, e, t, r);
  } finally {
    (V = n), (nr.transition = i);
  }
}
function aa(A, e, t, r) {
  if (Mi) {
    var n = $o(A, e, t, r);
    if (n === null) Ao(A, e, r, Ri, t), au(A, r);
    else if (hw(n, A, e, t, r)) r.stopPropagation();
    else if ((au(A, r), e & 4 && -1 < ww.indexOf(A))) {
      for (; n !== null; ) {
        var i = Hn(n);
        if (
          (i !== null && PB(i),
          (i = $o(A, e, t, r)),
          i === null && Ao(A, e, r, Ri, t),
          i === n)
        )
          break;
        n = i;
      }
      n !== null && r.stopPropagation();
    } else Ao(A, e, r, null, t);
  }
}
var Ri = null;
function $o(A, e, t, r) {
  if (((Ri = null), (A = ia(r)), (A = pt(A)), A !== null))
    if (((e = Kt(A)), e === null)) A = null;
    else if (((t = e.tag), t === 13)) {
      if (((A = kB(e)), A !== null)) return A;
      A = null;
    } else if (t === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      A = null;
    } else e !== A && (A = null);
  return (Ri = A), null;
}
function YB(A) {
  switch (A) {
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
      switch (ow()) {
        case sa:
          return 1;
        case RB:
          return 4;
        case Oi:
        case lw:
          return 16;
        case _B:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Je = null,
  ua = null,
  Ci = null;
function jB() {
  if (Ci) return Ci;
  var A,
    e = ua,
    t = e.length,
    r,
    n = "value" in Je ? Je.value : Je.textContent,
    i = n.length;
  for (A = 0; A < t && e[A] === n[A]; A++);
  var s = t - A;
  for (r = 1; r <= s && e[t - r] === n[i - r]; r++);
  return (Ci = n.slice(A, 1 < r ? 1 - r : void 0));
}
function Ui(A) {
  var e = A.keyCode;
  return (
    "charCode" in A
      ? ((A = A.charCode), A === 0 && e === 13 && (A = 13))
      : (A = e),
    A === 10 && (A = 13),
    32 <= A || A === 13 ? A : 0
  );
}
function Mn() {
  return !0;
}
function cu() {
  return !1;
}
function zA(A) {
  function e(t, r, n, i, s) {
    (this._reactName = t),
      (this._targetInst = n),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var o in A)
      A.hasOwnProperty(o) && ((t = A[o]), (this[o] = t ? t(i) : i[o]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Mn
        : cu),
      (this.isPropagationStopped = cu),
      this
    );
  }
  return (
    eA(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t &&
          (t.preventDefault
            ? t.preventDefault()
            : typeof t.returnValue != "unknown" && (t.returnValue = !1),
          (this.isDefaultPrevented = Mn));
      },
      stopPropagation: function () {
        var t = this.nativeEvent;
        t &&
          (t.stopPropagation
            ? t.stopPropagation()
            : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
          (this.isPropagationStopped = Mn));
      },
      persist: function () {},
      isPersistent: Mn,
    }),
    e
  );
}
var hr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (A) {
      return A.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ca = zA(hr),
  En = eA({}, hr, { view: 0, detail: 0 }),
  Uw = zA(En),
  Xs,
  Ws,
  mr,
  ds = eA({}, En, {
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
    getModifierState: Ba,
    button: 0,
    buttons: 0,
    relatedTarget: function (A) {
      return A.relatedTarget === void 0
        ? A.fromElement === A.srcElement
          ? A.toElement
          : A.fromElement
        : A.relatedTarget;
    },
    movementX: function (A) {
      return "movementX" in A
        ? A.movementX
        : (A !== mr &&
            (mr && A.type === "mousemove"
              ? ((Xs = A.screenX - mr.screenX), (Ws = A.screenY - mr.screenY))
              : (Ws = Xs = 0),
            (mr = A)),
          Xs);
    },
    movementY: function (A) {
      return "movementY" in A ? A.movementY : Ws;
    },
  }),
  Bu = zA(ds),
  Fw = eA({}, ds, { dataTransfer: 0 }),
  vw = zA(Fw),
  mw = eA({}, En, { relatedTarget: 0 }),
  Js = zA(mw),
  yw = eA({}, hr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ew = zA(yw),
  Hw = eA({}, hr, {
    clipboardData: function (A) {
      return "clipboardData" in A ? A.clipboardData : window.clipboardData;
    },
  }),
  Iw = zA(Hw),
  xw = eA({}, hr, { data: 0 }),
  fu = zA(xw),
  Sw = {
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
    MozPrintableKey: "Unidentified",
  },
  Lw = {
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
    224: "Meta",
  },
  Kw = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Dw(A) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(A) : (A = Kw[A]) ? !!e[A] : !1;
}
function Ba() {
  return Dw;
}
var Tw = eA({}, En, {
    key: function (A) {
      if (A.key) {
        var e = Sw[A.key] || A.key;
        if (e !== "Unidentified") return e;
      }
      return A.type === "keypress"
        ? ((A = Ui(A)), A === 13 ? "Enter" : String.fromCharCode(A))
        : A.type === "keydown" || A.type === "keyup"
        ? Lw[A.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ba,
    charCode: function (A) {
      return A.type === "keypress" ? Ui(A) : 0;
    },
    keyCode: function (A) {
      return A.type === "keydown" || A.type === "keyup" ? A.keyCode : 0;
    },
    which: function (A) {
      return A.type === "keypress"
        ? Ui(A)
        : A.type === "keydown" || A.type === "keyup"
        ? A.keyCode
        : 0;
    },
  }),
  kw = zA(Tw),
  Ow = eA({}, ds, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  gu = zA(Ow),
  Nw = eA({}, En, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ba,
  }),
  Mw = zA(Nw),
  Rw = eA({}, hr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  _w = zA(Rw),
  Gw = eA({}, ds, {
    deltaX: function (A) {
      return "deltaX" in A ? A.deltaX : "wheelDeltaX" in A ? -A.wheelDeltaX : 0;
    },
    deltaY: function (A) {
      return "deltaY" in A
        ? A.deltaY
        : "wheelDeltaY" in A
        ? -A.wheelDeltaY
        : "wheelDelta" in A
        ? -A.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Vw = zA(Gw),
  Pw = [9, 13, 27, 32],
  fa = De && "CompositionEvent" in window,
  Xr = null;
De && "documentMode" in document && (Xr = document.documentMode);
var bw = De && "TextEvent" in window && !Xr,
  zB = De && (!fa || (Xr && 8 < Xr && 11 >= Xr)),
  du = " ",
  wu = !1;
function ZB(A, e) {
  switch (A) {
    case "keyup":
      return Pw.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function $B(A) {
  return (A = A.detail), typeof A == "object" && "data" in A ? A.data : null;
}
var bt = !1;
function Xw(A, e) {
  switch (A) {
    case "compositionend":
      return $B(e);
    case "keypress":
      return e.which !== 32 ? null : ((wu = !0), du);
    case "textInput":
      return (A = e.data), A === du && wu ? null : A;
    default:
      return null;
  }
}
function Ww(A, e) {
  if (bt)
    return A === "compositionend" || (!fa && ZB(A, e))
      ? ((A = jB()), (Ci = ua = Je = null), (bt = !1), A)
      : null;
  switch (A) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return zB && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var Jw = {
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
  week: !0,
};
function hu(A) {
  var e = A && A.nodeName && A.nodeName.toLowerCase();
  return e === "input" ? !!Jw[A.type] : e === "textarea";
}
function qB(A, e, t, r) {
  SB(r),
    (e = _i(e, "onChange")),
    0 < e.length &&
      ((t = new ca("onChange", "change", null, t, r)),
      A.push({ event: t, listeners: e }));
}
var Wr = null,
  un = null;
function Yw(A) {
  cf(A, 0);
}
function ws(A) {
  var e = Jt(A);
  if (vB(e)) return A;
}
function jw(A, e) {
  if (A === "change") return e;
}
var Af = !1;
if (De) {
  var Ys;
  if (De) {
    var js = "oninput" in document;
    if (!js) {
      var pu = document.createElement("div");
      pu.setAttribute("oninput", "return;"),
        (js = typeof pu.oninput == "function");
    }
    Ys = js;
  } else Ys = !1;
  Af = Ys && (!document.documentMode || 9 < document.documentMode);
}
function Qu() {
  Wr && (Wr.detachEvent("onpropertychange", ef), (un = Wr = null));
}
function ef(A) {
  if (A.propertyName === "value" && ws(un)) {
    var e = [];
    qB(e, un, A, ia(A)), TB(Yw, e);
  }
}
function zw(A, e, t) {
  A === "focusin"
    ? (Qu(), (Wr = e), (un = t), Wr.attachEvent("onpropertychange", ef))
    : A === "focusout" && Qu();
}
function Zw(A) {
  if (A === "selectionchange" || A === "keyup" || A === "keydown")
    return ws(un);
}
function $w(A, e) {
  if (A === "click") return ws(e);
}
function qw(A, e) {
  if (A === "input" || A === "change") return ws(e);
}
function Ah(A, e) {
  return (A === e && (A !== 0 || 1 / A === 1 / e)) || (A !== A && e !== e);
}
var ge = typeof Object.is == "function" ? Object.is : Ah;
function cn(A, e) {
  if (ge(A, e)) return !0;
  if (typeof A != "object" || A === null || typeof e != "object" || e === null)
    return !1;
  var t = Object.keys(A),
    r = Object.keys(e);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) {
    var n = t[r];
    if (!To.call(e, n) || !ge(A[n], e[n])) return !1;
  }
  return !0;
}
function Cu(A) {
  for (; A && A.firstChild; ) A = A.firstChild;
  return A;
}
function Uu(A, e) {
  var t = Cu(A);
  A = 0;
  for (var r; t; ) {
    if (t.nodeType === 3) {
      if (((r = A + t.textContent.length), A <= e && r >= e))
        return { node: t, offset: e - A };
      A = r;
    }
    A: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break A;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = Cu(t);
  }
}
function tf(A, e) {
  return A && e
    ? A === e
      ? !0
      : A && A.nodeType === 3
      ? !1
      : e && e.nodeType === 3
      ? tf(A, e.parentNode)
      : "contains" in A
      ? A.contains(e)
      : A.compareDocumentPosition
      ? !!(A.compareDocumentPosition(e) & 16)
      : !1
    : !1;
}
function rf() {
  for (var A = window, e = Di(); e instanceof A.HTMLIFrameElement; ) {
    try {
      var t = typeof e.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t) A = e.contentWindow;
    else break;
    e = Di(A.document);
  }
  return e;
}
function ga(A) {
  var e = A && A.nodeName && A.nodeName.toLowerCase();
  return (
    e &&
    ((e === "input" &&
      (A.type === "text" ||
        A.type === "search" ||
        A.type === "tel" ||
        A.type === "url" ||
        A.type === "password")) ||
      e === "textarea" ||
      A.contentEditable === "true")
  );
}
function eh(A) {
  var e = rf(),
    t = A.focusedElem,
    r = A.selectionRange;
  if (
    e !== t &&
    t &&
    t.ownerDocument &&
    tf(t.ownerDocument.documentElement, t)
  ) {
    if (r !== null && ga(t)) {
      if (
        ((e = r.start),
        (A = r.end),
        A === void 0 && (A = e),
        "selectionStart" in t)
      )
        (t.selectionStart = e), (t.selectionEnd = Math.min(A, t.value.length));
      else if (
        ((A = ((e = t.ownerDocument || document) && e.defaultView) || window),
        A.getSelection)
      ) {
        A = A.getSelection();
        var n = t.textContent.length,
          i = Math.min(r.start, n);
        (r = r.end === void 0 ? i : Math.min(r.end, n)),
          !A.extend && i > r && ((n = r), (r = i), (i = n)),
          (n = Uu(t, i));
        var s = Uu(t, r);
        n &&
          s &&
          (A.rangeCount !== 1 ||
            A.anchorNode !== n.node ||
            A.anchorOffset !== n.offset ||
            A.focusNode !== s.node ||
            A.focusOffset !== s.offset) &&
          ((e = e.createRange()),
          e.setStart(n.node, n.offset),
          A.removeAllRanges(),
          i > r
            ? (A.addRange(e), A.extend(s.node, s.offset))
            : (e.setEnd(s.node, s.offset), A.addRange(e)));
      }
    }
    for (e = [], A = t; (A = A.parentNode); )
      A.nodeType === 1 &&
        e.push({ element: A, left: A.scrollLeft, top: A.scrollTop });
    for (typeof t.focus == "function" && t.focus(), t = 0; t < e.length; t++)
      (A = e[t]),
        (A.element.scrollLeft = A.left),
        (A.element.scrollTop = A.top);
  }
}
var th = De && "documentMode" in document && 11 >= document.documentMode,
  Xt = null,
  qo = null,
  Jr = null,
  Al = !1;
function Fu(A, e, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  Al ||
    Xt == null ||
    Xt !== Di(r) ||
    ((r = Xt),
    "selectionStart" in r && ga(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Jr && cn(Jr, r)) ||
      ((Jr = r),
      (r = _i(qo, "onSelect")),
      0 < r.length &&
        ((e = new ca("onSelect", "select", null, e, t)),
        A.push({ event: e, listeners: r }),
        (e.target = Xt))));
}
function Rn(A, e) {
  var t = {};
  return (
    (t[A.toLowerCase()] = e.toLowerCase()),
    (t["Webkit" + A] = "webkit" + e),
    (t["Moz" + A] = "moz" + e),
    t
  );
}
var Wt = {
    animationend: Rn("Animation", "AnimationEnd"),
    animationiteration: Rn("Animation", "AnimationIteration"),
    animationstart: Rn("Animation", "AnimationStart"),
    transitionend: Rn("Transition", "TransitionEnd"),
  },
  zs = {},
  nf = {};
De &&
  ((nf = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Wt.animationend.animation,
    delete Wt.animationiteration.animation,
    delete Wt.animationstart.animation),
  "TransitionEvent" in window || delete Wt.transitionend.transition);
function hs(A) {
  if (zs[A]) return zs[A];
  if (!Wt[A]) return A;
  var e = Wt[A],
    t;
  for (t in e) if (e.hasOwnProperty(t) && t in nf) return (zs[A] = e[t]);
  return A;
}
var sf = hs("animationend"),
  of = hs("animationiteration"),
  lf = hs("animationstart"),
  af = hs("transitionend"),
  uf = new Map(),
  vu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function ct(A, e) {
  uf.set(A, e), Lt(e, [A]);
}
for (var Zs = 0; Zs < vu.length; Zs++) {
  var $s = vu[Zs],
    rh = $s.toLowerCase(),
    nh = $s[0].toUpperCase() + $s.slice(1);
  ct(rh, "on" + nh);
}
ct(sf, "onAnimationEnd");
ct(of, "onAnimationIteration");
ct(lf, "onAnimationStart");
ct("dblclick", "onDoubleClick");
ct("focusin", "onFocus");
ct("focusout", "onBlur");
ct(af, "onTransitionEnd");
lr("onMouseEnter", ["mouseout", "mouseover"]);
lr("onMouseLeave", ["mouseout", "mouseover"]);
lr("onPointerEnter", ["pointerout", "pointerover"]);
lr("onPointerLeave", ["pointerout", "pointerover"]);
Lt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Lt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Lt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Lt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Lt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Lt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var kr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  ih = new Set("cancel close invalid load scroll toggle".split(" ").concat(kr));
function mu(A, e, t) {
  var r = A.type || "unknown-event";
  (A.currentTarget = t), rw(r, e, void 0, A), (A.currentTarget = null);
}
function cf(A, e) {
  e = (e & 4) !== 0;
  for (var t = 0; t < A.length; t++) {
    var r = A[t],
      n = r.event;
    r = r.listeners;
    A: {
      var i = void 0;
      if (e)
        for (var s = r.length - 1; 0 <= s; s--) {
          var o = r[s],
            l = o.instance,
            a = o.currentTarget;
          if (((o = o.listener), l !== i && n.isPropagationStopped())) break A;
          mu(n, o, a), (i = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((o = r[s]),
            (l = o.instance),
            (a = o.currentTarget),
            (o = o.listener),
            l !== i && n.isPropagationStopped())
          )
            break A;
          mu(n, o, a), (i = l);
        }
    }
  }
  if (ki) throw ((A = jo), (ki = !1), (jo = null), A);
}
function Y(A, e) {
  var t = e[il];
  t === void 0 && (t = e[il] = new Set());
  var r = A + "__bubble";
  t.has(r) || (Bf(e, A, 2, !1), t.add(r));
}
function qs(A, e, t) {
  var r = 0;
  e && (r |= 4), Bf(t, A, r, e);
}
var _n = "_reactListening" + Math.random().toString(36).slice(2);
function Bn(A) {
  if (!A[_n]) {
    (A[_n] = !0),
      pB.forEach(function (t) {
        t !== "selectionchange" && (ih.has(t) || qs(t, !1, A), qs(t, !0, A));
      });
    var e = A.nodeType === 9 ? A : A.ownerDocument;
    e === null || e[_n] || ((e[_n] = !0), qs("selectionchange", !1, e));
  }
}
function Bf(A, e, t, r) {
  switch (YB(e)) {
    case 1:
      var n = Qw;
      break;
    case 4:
      n = Cw;
      break;
    default:
      n = aa;
  }
  (t = n.bind(null, e, t, A)),
    (n = void 0),
    !Yo ||
      (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
      (n = !0),
    r
      ? n !== void 0
        ? A.addEventListener(e, t, { capture: !0, passive: n })
        : A.addEventListener(e, t, !0)
      : n !== void 0
      ? A.addEventListener(e, t, { passive: n })
      : A.addEventListener(e, t, !1);
}
function Ao(A, e, t, r, n) {
  var i = r;
  if (!(e & 1) && !(e & 2) && r !== null)
    A: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var o = r.stateNode.containerInfo;
        if (o === n || (o.nodeType === 8 && o.parentNode === n)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === n || (l.nodeType === 8 && l.parentNode === n))
            )
              return;
            s = s.return;
          }
        for (; o !== null; ) {
          if (((s = pt(o)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = i = s;
            continue A;
          }
          o = o.parentNode;
        }
      }
      r = r.return;
    }
  TB(function () {
    var a = i,
      u = ia(t),
      c = [];
    A: {
      var f = uf.get(A);
      if (f !== void 0) {
        var h = ca,
          w = A;
        switch (A) {
          case "keypress":
            if (Ui(t) === 0) break A;
          case "keydown":
          case "keyup":
            h = kw;
            break;
          case "focusin":
            (w = "focus"), (h = Js);
            break;
          case "focusout":
            (w = "blur"), (h = Js);
            break;
          case "beforeblur":
          case "afterblur":
            h = Js;
            break;
          case "click":
            if (t.button === 2) break A;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = Bu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = vw;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = Mw;
            break;
          case sf:
          case of:
          case lf:
            h = Ew;
            break;
          case af:
            h = _w;
            break;
          case "scroll":
            h = Uw;
            break;
          case "wheel":
            h = Vw;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = Iw;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = gu;
        }
        var p = (e & 4) !== 0,
          x = !p && A === "scroll",
          g = p ? (f !== null ? f + "Capture" : null) : f;
        p = [];
        for (var B = a, d; B !== null; ) {
          d = B;
          var Q = d.stateNode;
          if (
            (d.tag === 5 &&
              Q !== null &&
              ((d = Q),
              g !== null && ((Q = sn(B, g)), Q != null && p.push(fn(B, Q, d)))),
            x)
          )
            break;
          B = B.return;
        }
        0 < p.length &&
          ((f = new h(f, w, null, t, u)), c.push({ event: f, listeners: p }));
      }
    }
    if (!(e & 7)) {
      A: {
        if (
          ((f = A === "mouseover" || A === "pointerover"),
          (h = A === "mouseout" || A === "pointerout"),
          f &&
            t !== Wo &&
            (w = t.relatedTarget || t.fromElement) &&
            (pt(w) || w[Te]))
        )
          break A;
        if (
          (h || f) &&
          ((f =
            u.window === u
              ? u
              : (f = u.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          h
            ? ((w = t.relatedTarget || t.toElement),
              (h = a),
              (w = w ? pt(w) : null),
              w !== null &&
                ((x = Kt(w)), w !== x || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((h = null), (w = a)),
          h !== w)
        ) {
          if (
            ((p = Bu),
            (Q = "onMouseLeave"),
            (g = "onMouseEnter"),
            (B = "mouse"),
            (A === "pointerout" || A === "pointerover") &&
              ((p = gu),
              (Q = "onPointerLeave"),
              (g = "onPointerEnter"),
              (B = "pointer")),
            (x = h == null ? f : Jt(h)),
            (d = w == null ? f : Jt(w)),
            (f = new p(Q, B + "leave", h, t, u)),
            (f.target = x),
            (f.relatedTarget = d),
            (Q = null),
            pt(u) === a &&
              ((p = new p(g, B + "enter", w, t, u)),
              (p.target = d),
              (p.relatedTarget = x),
              (Q = p)),
            (x = Q),
            h && w)
          )
            e: {
              for (p = h, g = w, B = 0, d = p; d; d = Dt(d)) B++;
              for (d = 0, Q = g; Q; Q = Dt(Q)) d++;
              for (; 0 < B - d; ) (p = Dt(p)), B--;
              for (; 0 < d - B; ) (g = Dt(g)), d--;
              for (; B--; ) {
                if (p === g || (g !== null && p === g.alternate)) break e;
                (p = Dt(p)), (g = Dt(g));
              }
              p = null;
            }
          else p = null;
          h !== null && yu(c, f, h, p, !1),
            w !== null && x !== null && yu(c, x, w, p, !0);
        }
      }
      A: {
        if (
          ((f = a ? Jt(a) : window),
          (h = f.nodeName && f.nodeName.toLowerCase()),
          h === "select" || (h === "input" && f.type === "file"))
        )
          var U = jw;
        else if (hu(f))
          if (Af) U = qw;
          else {
            U = Zw;
            var C = zw;
          }
        else
          (h = f.nodeName) &&
            h.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (U = $w);
        if (U && (U = U(A, a))) {
          qB(c, U, t, u);
          break A;
        }
        C && C(A, f, a),
          A === "focusout" &&
            (C = f._wrapperState) &&
            C.controlled &&
            f.type === "number" &&
            Go(f, "number", f.value);
      }
      switch (((C = a ? Jt(a) : window), A)) {
        case "focusin":
          (hu(C) || C.contentEditable === "true") &&
            ((Xt = C), (qo = a), (Jr = null));
          break;
        case "focusout":
          Jr = qo = Xt = null;
          break;
        case "mousedown":
          Al = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Al = !1), Fu(c, t, u);
          break;
        case "selectionchange":
          if (th) break;
        case "keydown":
        case "keyup":
          Fu(c, t, u);
      }
      var v;
      if (fa)
        A: {
          switch (A) {
            case "compositionstart":
              var m = "onCompositionStart";
              break A;
            case "compositionend":
              m = "onCompositionEnd";
              break A;
            case "compositionupdate":
              m = "onCompositionUpdate";
              break A;
          }
          m = void 0;
        }
      else
        bt
          ? ZB(A, t) && (m = "onCompositionEnd")
          : A === "keydown" && t.keyCode === 229 && (m = "onCompositionStart");
      m &&
        (zB &&
          t.locale !== "ko" &&
          (bt || m !== "onCompositionStart"
            ? m === "onCompositionEnd" && bt && (v = jB())
            : ((Je = u),
              (ua = "value" in Je ? Je.value : Je.textContent),
              (bt = !0))),
        (C = _i(a, m)),
        0 < C.length &&
          ((m = new fu(m, A, null, t, u)),
          c.push({ event: m, listeners: C }),
          v ? (m.data = v) : ((v = $B(t)), v !== null && (m.data = v)))),
        (v = bw ? Xw(A, t) : Ww(A, t)) &&
          ((a = _i(a, "onBeforeInput")),
          0 < a.length &&
            ((u = new fu("onBeforeInput", "beforeinput", null, t, u)),
            c.push({ event: u, listeners: a }),
            (u.data = v)));
    }
    cf(c, e);
  });
}
function fn(A, e, t) {
  return { instance: A, listener: e, currentTarget: t };
}
function _i(A, e) {
  for (var t = e + "Capture", r = []; A !== null; ) {
    var n = A,
      i = n.stateNode;
    n.tag === 5 &&
      i !== null &&
      ((n = i),
      (i = sn(A, t)),
      i != null && r.unshift(fn(A, i, n)),
      (i = sn(A, e)),
      i != null && r.push(fn(A, i, n))),
      (A = A.return);
  }
  return r;
}
function Dt(A) {
  if (A === null) return null;
  do A = A.return;
  while (A && A.tag !== 5);
  return A || null;
}
function yu(A, e, t, r, n) {
  for (var i = e._reactName, s = []; t !== null && t !== r; ) {
    var o = t,
      l = o.alternate,
      a = o.stateNode;
    if (l !== null && l === r) break;
    o.tag === 5 &&
      a !== null &&
      ((o = a),
      n
        ? ((l = sn(t, i)), l != null && s.unshift(fn(t, l, o)))
        : n || ((l = sn(t, i)), l != null && s.push(fn(t, l, o)))),
      (t = t.return);
  }
  s.length !== 0 && A.push({ event: e, listeners: s });
}
var sh = /\r\n?/g,
  oh = /\u0000|\uFFFD/g;
function Eu(A) {
  return (typeof A == "string" ? A : "" + A)
    .replace(
      sh,
      `
`
    )
    .replace(oh, "");
}
function Gn(A, e, t) {
  if (((e = Eu(e)), Eu(A) !== e && t)) throw Error(E(425));
}
function Gi() {}
var el = null,
  tl = null;
function rl(A, e) {
  return (
    A === "textarea" ||
    A === "noscript" ||
    typeof e.children == "string" ||
    typeof e.children == "number" ||
    (typeof e.dangerouslySetInnerHTML == "object" &&
      e.dangerouslySetInnerHTML !== null &&
      e.dangerouslySetInnerHTML.__html != null)
  );
}
var nl = typeof setTimeout == "function" ? setTimeout : void 0,
  lh = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Hu = typeof Promise == "function" ? Promise : void 0,
  ah =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Hu < "u"
      ? function (A) {
          return Hu.resolve(null).then(A).catch(uh);
        }
      : nl;
function uh(A) {
  setTimeout(function () {
    throw A;
  });
}
function eo(A, e) {
  var t = e,
    r = 0;
  do {
    var n = t.nextSibling;
    if ((A.removeChild(t), n && n.nodeType === 8))
      if (((t = n.data), t === "/$")) {
        if (r === 0) {
          A.removeChild(n), an(e);
          return;
        }
        r--;
      } else (t !== "$" && t !== "$?" && t !== "$!") || r++;
    t = n;
  } while (t);
  an(e);
}
function et(A) {
  for (; A != null; A = A.nextSibling) {
    var e = A.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (((e = A.data), e === "$" || e === "$!" || e === "$?")) break;
      if (e === "/$") return null;
    }
  }
  return A;
}
function Iu(A) {
  A = A.previousSibling;
  for (var e = 0; A; ) {
    if (A.nodeType === 8) {
      var t = A.data;
      if (t === "$" || t === "$!" || t === "$?") {
        if (e === 0) return A;
        e--;
      } else t === "/$" && e++;
    }
    A = A.previousSibling;
  }
  return null;
}
var pr = Math.random().toString(36).slice(2),
  Ce = "__reactFiber$" + pr,
  gn = "__reactProps$" + pr,
  Te = "__reactContainer$" + pr,
  il = "__reactEvents$" + pr,
  ch = "__reactListeners$" + pr,
  Bh = "__reactHandles$" + pr;
function pt(A) {
  var e = A[Ce];
  if (e) return e;
  for (var t = A.parentNode; t; ) {
    if ((e = t[Te] || t[Ce])) {
      if (
        ((t = e.alternate),
        e.child !== null || (t !== null && t.child !== null))
      )
        for (A = Iu(A); A !== null; ) {
          if ((t = A[Ce])) return t;
          A = Iu(A);
        }
      return e;
    }
    (A = t), (t = A.parentNode);
  }
  return null;
}
function Hn(A) {
  return (
    (A = A[Ce] || A[Te]),
    !A || (A.tag !== 5 && A.tag !== 6 && A.tag !== 13 && A.tag !== 3) ? null : A
  );
}
function Jt(A) {
  if (A.tag === 5 || A.tag === 6) return A.stateNode;
  throw Error(E(33));
}
function ps(A) {
  return A[gn] || null;
}
var sl = [],
  Yt = -1;
function Bt(A) {
  return { current: A };
}
function j(A) {
  0 > Yt || ((A.current = sl[Yt]), (sl[Yt] = null), Yt--);
}
function J(A, e) {
  Yt++, (sl[Yt] = A.current), (A.current = e);
}
var at = {},
  EA = Bt(at),
  _A = Bt(!1),
  Et = at;
function ar(A, e) {
  var t = A.type.contextTypes;
  if (!t) return at;
  var r = A.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
    return r.__reactInternalMemoizedMaskedChildContext;
  var n = {},
    i;
  for (i in t) n[i] = e[i];
  return (
    r &&
      ((A = A.stateNode),
      (A.__reactInternalMemoizedUnmaskedChildContext = e),
      (A.__reactInternalMemoizedMaskedChildContext = n)),
    n
  );
}
function GA(A) {
  return (A = A.childContextTypes), A != null;
}
function Vi() {
  j(_A), j(EA);
}
function xu(A, e, t) {
  if (EA.current !== at) throw Error(E(168));
  J(EA, e), J(_A, t);
}
function ff(A, e, t) {
  var r = A.stateNode;
  if (((e = e.childContextTypes), typeof r.getChildContext != "function"))
    return t;
  r = r.getChildContext();
  for (var n in r) if (!(n in e)) throw Error(E(108, zd(A) || "Unknown", n));
  return eA({}, t, r);
}
function Pi(A) {
  return (
    (A =
      ((A = A.stateNode) && A.__reactInternalMemoizedMergedChildContext) || at),
    (Et = EA.current),
    J(EA, A),
    J(_A, _A.current),
    !0
  );
}
function Su(A, e, t) {
  var r = A.stateNode;
  if (!r) throw Error(E(169));
  t
    ? ((A = ff(A, e, Et)),
      (r.__reactInternalMemoizedMergedChildContext = A),
      j(_A),
      j(EA),
      J(EA, A))
    : j(_A),
    J(_A, t);
}
var Ie = null,
  Qs = !1,
  to = !1;
function gf(A) {
  Ie === null ? (Ie = [A]) : Ie.push(A);
}
function fh(A) {
  (Qs = !0), gf(A);
}
function ft() {
  if (!to && Ie !== null) {
    to = !0;
    var A = 0,
      e = V;
    try {
      var t = Ie;
      for (V = 1; A < t.length; A++) {
        var r = t[A];
        do r = r(!0);
        while (r !== null);
      }
      (Ie = null), (Qs = !1);
    } catch (n) {
      throw (Ie !== null && (Ie = Ie.slice(A + 1)), MB(sa, ft), n);
    } finally {
      (V = e), (to = !1);
    }
  }
  return null;
}
var jt = [],
  zt = 0,
  bi = null,
  Xi = 0,
  $A = [],
  qA = 0,
  Ht = null,
  xe = 1,
  Se = "";
function dt(A, e) {
  (jt[zt++] = Xi), (jt[zt++] = bi), (bi = A), (Xi = e);
}
function df(A, e, t) {
  ($A[qA++] = xe), ($A[qA++] = Se), ($A[qA++] = Ht), (Ht = A);
  var r = xe;
  A = Se;
  var n = 32 - Be(r) - 1;
  (r &= ~(1 << n)), (t += 1);
  var i = 32 - Be(e) + n;
  if (30 < i) {
    var s = n - (n % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (n -= s),
      (xe = (1 << (32 - Be(e) + n)) | (t << n) | r),
      (Se = i + A);
  } else (xe = (1 << i) | (t << n) | r), (Se = A);
}
function da(A) {
  A.return !== null && (dt(A, 1), df(A, 1, 0));
}
function wa(A) {
  for (; A === bi; )
    (bi = jt[--zt]), (jt[zt] = null), (Xi = jt[--zt]), (jt[zt] = null);
  for (; A === Ht; )
    (Ht = $A[--qA]),
      ($A[qA] = null),
      (Se = $A[--qA]),
      ($A[qA] = null),
      (xe = $A[--qA]),
      ($A[qA] = null);
}
var JA = null,
  WA = null,
  $ = !1,
  ce = null;
function wf(A, e) {
  var t = ee(5, null, null, 0);
  (t.elementType = "DELETED"),
    (t.stateNode = e),
    (t.return = A),
    (e = A.deletions),
    e === null ? ((A.deletions = [t]), (A.flags |= 16)) : e.push(t);
}
function Lu(A, e) {
  switch (A.tag) {
    case 5:
      var t = A.type;
      return (
        (e =
          e.nodeType !== 1 || t.toLowerCase() !== e.nodeName.toLowerCase()
            ? null
            : e),
        e !== null
          ? ((A.stateNode = e), (JA = A), (WA = et(e.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (e = A.pendingProps === "" || e.nodeType !== 3 ? null : e),
        e !== null ? ((A.stateNode = e), (JA = A), (WA = null), !0) : !1
      );
    case 13:
      return (
        (e = e.nodeType !== 8 ? null : e),
        e !== null
          ? ((t = Ht !== null ? { id: xe, overflow: Se } : null),
            (A.memoizedState = {
              dehydrated: e,
              treeContext: t,
              retryLane: 1073741824,
            }),
            (t = ee(18, null, null, 0)),
            (t.stateNode = e),
            (t.return = A),
            (A.child = t),
            (JA = A),
            (WA = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ol(A) {
  return (A.mode & 1) !== 0 && (A.flags & 128) === 0;
}
function ll(A) {
  if ($) {
    var e = WA;
    if (e) {
      var t = e;
      if (!Lu(A, e)) {
        if (ol(A)) throw Error(E(418));
        e = et(t.nextSibling);
        var r = JA;
        e && Lu(A, e)
          ? wf(r, t)
          : ((A.flags = (A.flags & -4097) | 2), ($ = !1), (JA = A));
      }
    } else {
      if (ol(A)) throw Error(E(418));
      (A.flags = (A.flags & -4097) | 2), ($ = !1), (JA = A);
    }
  }
}
function Ku(A) {
  for (A = A.return; A !== null && A.tag !== 5 && A.tag !== 3 && A.tag !== 13; )
    A = A.return;
  JA = A;
}
function Vn(A) {
  if (A !== JA) return !1;
  if (!$) return Ku(A), ($ = !0), !1;
  var e;
  if (
    ((e = A.tag !== 3) &&
      !(e = A.tag !== 5) &&
      ((e = A.type),
      (e = e !== "head" && e !== "body" && !rl(A.type, A.memoizedProps))),
    e && (e = WA))
  ) {
    if (ol(A)) throw (hf(), Error(E(418)));
    for (; e; ) wf(A, e), (e = et(e.nextSibling));
  }
  if ((Ku(A), A.tag === 13)) {
    if (((A = A.memoizedState), (A = A !== null ? A.dehydrated : null), !A))
      throw Error(E(317));
    A: {
      for (A = A.nextSibling, e = 0; A; ) {
        if (A.nodeType === 8) {
          var t = A.data;
          if (t === "/$") {
            if (e === 0) {
              WA = et(A.nextSibling);
              break A;
            }
            e--;
          } else (t !== "$" && t !== "$!" && t !== "$?") || e++;
        }
        A = A.nextSibling;
      }
      WA = null;
    }
  } else WA = JA ? et(A.stateNode.nextSibling) : null;
  return !0;
}
function hf() {
  for (var A = WA; A; ) A = et(A.nextSibling);
}
function ur() {
  (WA = JA = null), ($ = !1);
}
function ha(A) {
  ce === null ? (ce = [A]) : ce.push(A);
}
var gh = Me.ReactCurrentBatchConfig;
function yr(A, e, t) {
  if (
    ((A = t.ref), A !== null && typeof A != "function" && typeof A != "object")
  ) {
    if (t._owner) {
      if (((t = t._owner), t)) {
        if (t.tag !== 1) throw Error(E(309));
        var r = t.stateNode;
      }
      if (!r) throw Error(E(147, A));
      var n = r,
        i = "" + A;
      return e !== null &&
        e.ref !== null &&
        typeof e.ref == "function" &&
        e.ref._stringRef === i
        ? e.ref
        : ((e = function (s) {
            var o = n.refs;
            s === null ? delete o[i] : (o[i] = s);
          }),
          (e._stringRef = i),
          e);
    }
    if (typeof A != "string") throw Error(E(284));
    if (!t._owner) throw Error(E(290, A));
  }
  return A;
}
function Pn(A, e) {
  throw (
    ((A = Object.prototype.toString.call(e)),
    Error(
      E(
        31,
        A === "[object Object]"
          ? "object with keys {" + Object.keys(e).join(", ") + "}"
          : A
      )
    ))
  );
}
function Du(A) {
  var e = A._init;
  return e(A._payload);
}
function pf(A) {
  function e(g, B) {
    if (A) {
      var d = g.deletions;
      d === null ? ((g.deletions = [B]), (g.flags |= 16)) : d.push(B);
    }
  }
  function t(g, B) {
    if (!A) return null;
    for (; B !== null; ) e(g, B), (B = B.sibling);
    return null;
  }
  function r(g, B) {
    for (g = new Map(); B !== null; )
      B.key !== null ? g.set(B.key, B) : g.set(B.index, B), (B = B.sibling);
    return g;
  }
  function n(g, B) {
    return (g = it(g, B)), (g.index = 0), (g.sibling = null), g;
  }
  function i(g, B, d) {
    return (
      (g.index = d),
      A
        ? ((d = g.alternate),
          d !== null
            ? ((d = d.index), d < B ? ((g.flags |= 2), B) : d)
            : ((g.flags |= 2), B))
        : ((g.flags |= 1048576), B)
    );
  }
  function s(g) {
    return A && g.alternate === null && (g.flags |= 2), g;
  }
  function o(g, B, d, Q) {
    return B === null || B.tag !== 6
      ? ((B = ao(d, g.mode, Q)), (B.return = g), B)
      : ((B = n(B, d)), (B.return = g), B);
  }
  function l(g, B, d, Q) {
    var U = d.type;
    return U === Pt
      ? u(g, B, d.props.children, Q, d.key)
      : B !== null &&
        (B.elementType === U ||
          (typeof U == "object" &&
            U !== null &&
            U.$$typeof === Ve &&
            Du(U) === B.type))
      ? ((Q = n(B, d.props)), (Q.ref = yr(g, B, d)), (Q.return = g), Q)
      : ((Q = Ii(d.type, d.key, d.props, null, g.mode, Q)),
        (Q.ref = yr(g, B, d)),
        (Q.return = g),
        Q);
  }
  function a(g, B, d, Q) {
    return B === null ||
      B.tag !== 4 ||
      B.stateNode.containerInfo !== d.containerInfo ||
      B.stateNode.implementation !== d.implementation
      ? ((B = uo(d, g.mode, Q)), (B.return = g), B)
      : ((B = n(B, d.children || [])), (B.return = g), B);
  }
  function u(g, B, d, Q, U) {
    return B === null || B.tag !== 7
      ? ((B = vt(d, g.mode, Q, U)), (B.return = g), B)
      : ((B = n(B, d)), (B.return = g), B);
  }
  function c(g, B, d) {
    if ((typeof B == "string" && B !== "") || typeof B == "number")
      return (B = ao("" + B, g.mode, d)), (B.return = g), B;
    if (typeof B == "object" && B !== null) {
      switch (B.$$typeof) {
        case Kn:
          return (
            (d = Ii(B.type, B.key, B.props, null, g.mode, d)),
            (d.ref = yr(g, null, B)),
            (d.return = g),
            d
          );
        case Vt:
          return (B = uo(B, g.mode, d)), (B.return = g), B;
        case Ve:
          var Q = B._init;
          return c(g, Q(B._payload), d);
      }
      if (Dr(B) || Cr(B))
        return (B = vt(B, g.mode, d, null)), (B.return = g), B;
      Pn(g, B);
    }
    return null;
  }
  function f(g, B, d, Q) {
    var U = B !== null ? B.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return U !== null ? null : o(g, B, "" + d, Q);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Kn:
          return d.key === U ? l(g, B, d, Q) : null;
        case Vt:
          return d.key === U ? a(g, B, d, Q) : null;
        case Ve:
          return (U = d._init), f(g, B, U(d._payload), Q);
      }
      if (Dr(d) || Cr(d)) return U !== null ? null : u(g, B, d, Q, null);
      Pn(g, d);
    }
    return null;
  }
  function h(g, B, d, Q, U) {
    if ((typeof Q == "string" && Q !== "") || typeof Q == "number")
      return (g = g.get(d) || null), o(B, g, "" + Q, U);
    if (typeof Q == "object" && Q !== null) {
      switch (Q.$$typeof) {
        case Kn:
          return (g = g.get(Q.key === null ? d : Q.key) || null), l(B, g, Q, U);
        case Vt:
          return (g = g.get(Q.key === null ? d : Q.key) || null), a(B, g, Q, U);
        case Ve:
          var C = Q._init;
          return h(g, B, d, C(Q._payload), U);
      }
      if (Dr(Q) || Cr(Q)) return (g = g.get(d) || null), u(B, g, Q, U, null);
      Pn(B, Q);
    }
    return null;
  }
  function w(g, B, d, Q) {
    for (
      var U = null, C = null, v = B, m = (B = 0), F = null;
      v !== null && m < d.length;
      m++
    ) {
      v.index > m ? ((F = v), (v = null)) : (F = v.sibling);
      var H = f(g, v, d[m], Q);
      if (H === null) {
        v === null && (v = F);
        break;
      }
      A && v && H.alternate === null && e(g, v),
        (B = i(H, B, m)),
        C === null ? (U = H) : (C.sibling = H),
        (C = H),
        (v = F);
    }
    if (m === d.length) return t(g, v), $ && dt(g, m), U;
    if (v === null) {
      for (; m < d.length; m++)
        (v = c(g, d[m], Q)),
          v !== null &&
            ((B = i(v, B, m)), C === null ? (U = v) : (C.sibling = v), (C = v));
      return $ && dt(g, m), U;
    }
    for (v = r(g, v); m < d.length; m++)
      (F = h(v, g, m, d[m], Q)),
        F !== null &&
          (A && F.alternate !== null && v.delete(F.key === null ? m : F.key),
          (B = i(F, B, m)),
          C === null ? (U = F) : (C.sibling = F),
          (C = F));
    return (
      A &&
        v.forEach(function (_) {
          return e(g, _);
        }),
      $ && dt(g, m),
      U
    );
  }
  function p(g, B, d, Q) {
    var U = Cr(d);
    if (typeof U != "function") throw Error(E(150));
    if (((d = U.call(d)), d == null)) throw Error(E(151));
    for (
      var C = (U = null), v = B, m = (B = 0), F = null, H = d.next();
      v !== null && !H.done;
      m++, H = d.next()
    ) {
      v.index > m ? ((F = v), (v = null)) : (F = v.sibling);
      var _ = f(g, v, H.value, Q);
      if (_ === null) {
        v === null && (v = F);
        break;
      }
      A && v && _.alternate === null && e(g, v),
        (B = i(_, B, m)),
        C === null ? (U = _) : (C.sibling = _),
        (C = _),
        (v = F);
    }
    if (H.done) return t(g, v), $ && dt(g, m), U;
    if (v === null) {
      for (; !H.done; m++, H = d.next())
        (H = c(g, H.value, Q)),
          H !== null &&
            ((B = i(H, B, m)), C === null ? (U = H) : (C.sibling = H), (C = H));
      return $ && dt(g, m), U;
    }
    for (v = r(g, v); !H.done; m++, H = d.next())
      (H = h(v, g, m, H.value, Q)),
        H !== null &&
          (A && H.alternate !== null && v.delete(H.key === null ? m : H.key),
          (B = i(H, B, m)),
          C === null ? (U = H) : (C.sibling = H),
          (C = H));
    return (
      A &&
        v.forEach(function (tA) {
          return e(g, tA);
        }),
      $ && dt(g, m),
      U
    );
  }
  function x(g, B, d, Q) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === Pt &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case Kn:
          A: {
            for (var U = d.key, C = B; C !== null; ) {
              if (C.key === U) {
                if (((U = d.type), U === Pt)) {
                  if (C.tag === 7) {
                    t(g, C.sibling),
                      (B = n(C, d.props.children)),
                      (B.return = g),
                      (g = B);
                    break A;
                  }
                } else if (
                  C.elementType === U ||
                  (typeof U == "object" &&
                    U !== null &&
                    U.$$typeof === Ve &&
                    Du(U) === C.type)
                ) {
                  t(g, C.sibling),
                    (B = n(C, d.props)),
                    (B.ref = yr(g, C, d)),
                    (B.return = g),
                    (g = B);
                  break A;
                }
                t(g, C);
                break;
              } else e(g, C);
              C = C.sibling;
            }
            d.type === Pt
              ? ((B = vt(d.props.children, g.mode, Q, d.key)),
                (B.return = g),
                (g = B))
              : ((Q = Ii(d.type, d.key, d.props, null, g.mode, Q)),
                (Q.ref = yr(g, B, d)),
                (Q.return = g),
                (g = Q));
          }
          return s(g);
        case Vt:
          A: {
            for (C = d.key; B !== null; ) {
              if (B.key === C)
                if (
                  B.tag === 4 &&
                  B.stateNode.containerInfo === d.containerInfo &&
                  B.stateNode.implementation === d.implementation
                ) {
                  t(g, B.sibling),
                    (B = n(B, d.children || [])),
                    (B.return = g),
                    (g = B);
                  break A;
                } else {
                  t(g, B);
                  break;
                }
              else e(g, B);
              B = B.sibling;
            }
            (B = uo(d, g.mode, Q)), (B.return = g), (g = B);
          }
          return s(g);
        case Ve:
          return (C = d._init), x(g, B, C(d._payload), Q);
      }
      if (Dr(d)) return w(g, B, d, Q);
      if (Cr(d)) return p(g, B, d, Q);
      Pn(g, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        B !== null && B.tag === 6
          ? (t(g, B.sibling), (B = n(B, d)), (B.return = g), (g = B))
          : (t(g, B), (B = ao(d, g.mode, Q)), (B.return = g), (g = B)),
        s(g))
      : t(g, B);
  }
  return x;
}
var cr = pf(!0),
  Qf = pf(!1),
  Wi = Bt(null),
  Ji = null,
  Zt = null,
  pa = null;
function Qa() {
  pa = Zt = Ji = null;
}
function Ca(A) {
  var e = Wi.current;
  j(Wi), (A._currentValue = e);
}
function al(A, e, t) {
  for (; A !== null; ) {
    var r = A.alternate;
    if (
      ((A.childLanes & e) !== e
        ? ((A.childLanes |= e), r !== null && (r.childLanes |= e))
        : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
      A === t)
    )
      break;
    A = A.return;
  }
}
function ir(A, e) {
  (Ji = A),
    (pa = Zt = null),
    (A = A.dependencies),
    A !== null &&
      A.firstContext !== null &&
      (A.lanes & e && (RA = !0), (A.firstContext = null));
}
function ie(A) {
  var e = A._currentValue;
  if (pa !== A)
    if (((A = { context: A, memoizedValue: e, next: null }), Zt === null)) {
      if (Ji === null) throw Error(E(308));
      (Zt = A), (Ji.dependencies = { lanes: 0, firstContext: A });
    } else Zt = Zt.next = A;
  return e;
}
var Qt = null;
function Ua(A) {
  Qt === null ? (Qt = [A]) : Qt.push(A);
}
function Cf(A, e, t, r) {
  var n = e.interleaved;
  return (
    n === null ? ((t.next = t), Ua(e)) : ((t.next = n.next), (n.next = t)),
    (e.interleaved = t),
    ke(A, r)
  );
}
function ke(A, e) {
  A.lanes |= e;
  var t = A.alternate;
  for (t !== null && (t.lanes |= e), t = A, A = A.return; A !== null; )
    (A.childLanes |= e),
      (t = A.alternate),
      t !== null && (t.childLanes |= e),
      (t = A),
      (A = A.return);
  return t.tag === 3 ? t.stateNode : null;
}
var Pe = !1;
function Fa(A) {
  A.updateQueue = {
    baseState: A.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Uf(A, e) {
  (A = A.updateQueue),
    e.updateQueue === A &&
      (e.updateQueue = {
        baseState: A.baseState,
        firstBaseUpdate: A.firstBaseUpdate,
        lastBaseUpdate: A.lastBaseUpdate,
        shared: A.shared,
        effects: A.effects,
      });
}
function Le(A, e) {
  return {
    eventTime: A,
    lane: e,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function tt(A, e, t) {
  var r = A.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), M & 2)) {
    var n = r.pending;
    return (
      n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
      (r.pending = e),
      ke(A, t)
    );
  }
  return (
    (n = r.interleaved),
    n === null ? ((e.next = e), Ua(r)) : ((e.next = n.next), (n.next = e)),
    (r.interleaved = e),
    ke(A, t)
  );
}
function Fi(A, e, t) {
  if (
    ((e = e.updateQueue), e !== null && ((e = e.shared), (t & 4194240) !== 0))
  ) {
    var r = e.lanes;
    (r &= A.pendingLanes), (t |= r), (e.lanes = t), oa(A, t);
  }
}
function Tu(A, e) {
  var t = A.updateQueue,
    r = A.alternate;
  if (r !== null && ((r = r.updateQueue), t === r)) {
    var n = null,
      i = null;
    if (((t = t.firstBaseUpdate), t !== null)) {
      do {
        var s = {
          eventTime: t.eventTime,
          lane: t.lane,
          tag: t.tag,
          payload: t.payload,
          callback: t.callback,
          next: null,
        };
        i === null ? (n = i = s) : (i = i.next = s), (t = t.next);
      } while (t !== null);
      i === null ? (n = i = e) : (i = i.next = e);
    } else n = i = e;
    (t = {
      baseState: r.baseState,
      firstBaseUpdate: n,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (A.updateQueue = t);
    return;
  }
  (A = t.lastBaseUpdate),
    A === null ? (t.firstBaseUpdate = e) : (A.next = e),
    (t.lastBaseUpdate = e);
}
function Yi(A, e, t, r) {
  var n = A.updateQueue;
  Pe = !1;
  var i = n.firstBaseUpdate,
    s = n.lastBaseUpdate,
    o = n.shared.pending;
  if (o !== null) {
    n.shared.pending = null;
    var l = o,
      a = l.next;
    (l.next = null), s === null ? (i = a) : (s.next = a), (s = l);
    var u = A.alternate;
    u !== null &&
      ((u = u.updateQueue),
      (o = u.lastBaseUpdate),
      o !== s &&
        (o === null ? (u.firstBaseUpdate = a) : (o.next = a),
        (u.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var c = n.baseState;
    (s = 0), (u = a = l = null), (o = i);
    do {
      var f = o.lane,
        h = o.eventTime;
      if ((r & f) === f) {
        u !== null &&
          (u = u.next =
            {
              eventTime: h,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        A: {
          var w = A,
            p = o;
          switch (((f = e), (h = t), p.tag)) {
            case 1:
              if (((w = p.payload), typeof w == "function")) {
                c = w.call(h, c, f);
                break A;
              }
              c = w;
              break A;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = p.payload),
                (f = typeof w == "function" ? w.call(h, c, f) : w),
                f == null)
              )
                break A;
              c = eA({}, c, f);
              break A;
            case 2:
              Pe = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((A.flags |= 64),
          (f = n.effects),
          f === null ? (n.effects = [o]) : f.push(o));
      } else
        (h = {
          eventTime: h,
          lane: f,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          u === null ? ((a = u = h), (l = c)) : (u = u.next = h),
          (s |= f);
      if (((o = o.next), o === null)) {
        if (((o = n.shared.pending), o === null)) break;
        (f = o),
          (o = f.next),
          (f.next = null),
          (n.lastBaseUpdate = f),
          (n.shared.pending = null);
      }
    } while (!0);
    if (
      (u === null && (l = c),
      (n.baseState = l),
      (n.firstBaseUpdate = a),
      (n.lastBaseUpdate = u),
      (e = n.shared.interleaved),
      e !== null)
    ) {
      n = e;
      do (s |= n.lane), (n = n.next);
      while (n !== e);
    } else i === null && (n.shared.lanes = 0);
    (xt |= s), (A.lanes = s), (A.memoizedState = c);
  }
}
function ku(A, e, t) {
  if (((A = e.effects), (e.effects = null), A !== null))
    for (e = 0; e < A.length; e++) {
      var r = A[e],
        n = r.callback;
      if (n !== null) {
        if (((r.callback = null), (r = t), typeof n != "function"))
          throw Error(E(191, n));
        n.call(r);
      }
    }
}
var In = {},
  Fe = Bt(In),
  dn = Bt(In),
  wn = Bt(In);
function Ct(A) {
  if (A === In) throw Error(E(174));
  return A;
}
function va(A, e) {
  switch ((J(wn, e), J(dn, A), J(Fe, In), (A = e.nodeType), A)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : Po(null, "");
      break;
    default:
      (A = A === 8 ? e.parentNode : e),
        (e = A.namespaceURI || null),
        (A = A.tagName),
        (e = Po(e, A));
  }
  j(Fe), J(Fe, e);
}
function Br() {
  j(Fe), j(dn), j(wn);
}
function Ff(A) {
  Ct(wn.current);
  var e = Ct(Fe.current),
    t = Po(e, A.type);
  e !== t && (J(dn, A), J(Fe, t));
}
function ma(A) {
  dn.current === A && (j(Fe), j(dn));
}
var q = Bt(0);
function ji(A) {
  for (var e = A; e !== null; ) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        t !== null &&
        ((t = t.dehydrated), t === null || t.data === "$?" || t.data === "$!")
      )
        return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      (e.child.return = e), (e = e.child);
      continue;
    }
    if (e === A) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === A) return null;
      e = e.return;
    }
    (e.sibling.return = e.return), (e = e.sibling);
  }
  return null;
}
var ro = [];
function ya() {
  for (var A = 0; A < ro.length; A++)
    ro[A]._workInProgressVersionPrimary = null;
  ro.length = 0;
}
var vi = Me.ReactCurrentDispatcher,
  no = Me.ReactCurrentBatchConfig,
  It = 0,
  AA = null,
  uA = null,
  gA = null,
  zi = !1,
  Yr = !1,
  hn = 0,
  dh = 0;
function UA() {
  throw Error(E(321));
}
function Ea(A, e) {
  if (e === null) return !1;
  for (var t = 0; t < e.length && t < A.length; t++)
    if (!ge(A[t], e[t])) return !1;
  return !0;
}
function Ha(A, e, t, r, n, i) {
  if (
    ((It = i),
    (AA = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (vi.current = A === null || A.memoizedState === null ? Qh : Ch),
    (A = t(r, n)),
    Yr)
  ) {
    i = 0;
    do {
      if (((Yr = !1), (hn = 0), 25 <= i)) throw Error(E(301));
      (i += 1),
        (gA = uA = null),
        (e.updateQueue = null),
        (vi.current = Uh),
        (A = t(r, n));
    } while (Yr);
  }
  if (
    ((vi.current = Zi),
    (e = uA !== null && uA.next !== null),
    (It = 0),
    (gA = uA = AA = null),
    (zi = !1),
    e)
  )
    throw Error(E(300));
  return A;
}
function Ia() {
  var A = hn !== 0;
  return (hn = 0), A;
}
function Qe() {
  var A = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return gA === null ? (AA.memoizedState = gA = A) : (gA = gA.next = A), gA;
}
function se() {
  if (uA === null) {
    var A = AA.alternate;
    A = A !== null ? A.memoizedState : null;
  } else A = uA.next;
  var e = gA === null ? AA.memoizedState : gA.next;
  if (e !== null) (gA = e), (uA = A);
  else {
    if (A === null) throw Error(E(310));
    (uA = A),
      (A = {
        memoizedState: uA.memoizedState,
        baseState: uA.baseState,
        baseQueue: uA.baseQueue,
        queue: uA.queue,
        next: null,
      }),
      gA === null ? (AA.memoizedState = gA = A) : (gA = gA.next = A);
  }
  return gA;
}
function pn(A, e) {
  return typeof e == "function" ? e(A) : e;
}
function io(A) {
  var e = se(),
    t = e.queue;
  if (t === null) throw Error(E(311));
  t.lastRenderedReducer = A;
  var r = uA,
    n = r.baseQueue,
    i = t.pending;
  if (i !== null) {
    if (n !== null) {
      var s = n.next;
      (n.next = i.next), (i.next = s);
    }
    (r.baseQueue = n = i), (t.pending = null);
  }
  if (n !== null) {
    (i = n.next), (r = r.baseState);
    var o = (s = null),
      l = null,
      a = i;
    do {
      var u = a.lane;
      if ((It & u) === u)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : A(r, a.action));
      else {
        var c = {
          lane: u,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        l === null ? ((o = l = c), (s = r)) : (l = l.next = c),
          (AA.lanes |= u),
          (xt |= u);
      }
      a = a.next;
    } while (a !== null && a !== i);
    l === null ? (s = r) : (l.next = o),
      ge(r, e.memoizedState) || (RA = !0),
      (e.memoizedState = r),
      (e.baseState = s),
      (e.baseQueue = l),
      (t.lastRenderedState = r);
  }
  if (((A = t.interleaved), A !== null)) {
    n = A;
    do (i = n.lane), (AA.lanes |= i), (xt |= i), (n = n.next);
    while (n !== A);
  } else n === null && (t.lanes = 0);
  return [e.memoizedState, t.dispatch];
}
function so(A) {
  var e = se(),
    t = e.queue;
  if (t === null) throw Error(E(311));
  t.lastRenderedReducer = A;
  var r = t.dispatch,
    n = t.pending,
    i = e.memoizedState;
  if (n !== null) {
    t.pending = null;
    var s = (n = n.next);
    do (i = A(i, s.action)), (s = s.next);
    while (s !== n);
    ge(i, e.memoizedState) || (RA = !0),
      (e.memoizedState = i),
      e.baseQueue === null && (e.baseState = i),
      (t.lastRenderedState = i);
  }
  return [i, r];
}
function vf() {}
function mf(A, e) {
  var t = AA,
    r = se(),
    n = e(),
    i = !ge(r.memoizedState, n);
  if (
    (i && ((r.memoizedState = n), (RA = !0)),
    (r = r.queue),
    xa(Hf.bind(null, t, r, A), [A]),
    r.getSnapshot !== e || i || (gA !== null && gA.memoizedState.tag & 1))
  ) {
    if (
      ((t.flags |= 2048),
      Qn(9, Ef.bind(null, t, r, n, e), void 0, null),
      dA === null)
    )
      throw Error(E(349));
    It & 30 || yf(t, e, n);
  }
  return n;
}
function yf(A, e, t) {
  (A.flags |= 16384),
    (A = { getSnapshot: e, value: t }),
    (e = AA.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (AA.updateQueue = e),
        (e.stores = [A]))
      : ((t = e.stores), t === null ? (e.stores = [A]) : t.push(A));
}
function Ef(A, e, t, r) {
  (e.value = t), (e.getSnapshot = r), If(e) && xf(A);
}
function Hf(A, e, t) {
  return t(function () {
    If(e) && xf(A);
  });
}
function If(A) {
  var e = A.getSnapshot;
  A = A.value;
  try {
    var t = e();
    return !ge(A, t);
  } catch {
    return !0;
  }
}
function xf(A) {
  var e = ke(A, 1);
  e !== null && fe(e, A, 1, -1);
}
function Ou(A) {
  var e = Qe();
  return (
    typeof A == "function" && (A = A()),
    (e.memoizedState = e.baseState = A),
    (A = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: pn,
      lastRenderedState: A,
    }),
    (e.queue = A),
    (A = A.dispatch = ph.bind(null, AA, A)),
    [e.memoizedState, A]
  );
}
function Qn(A, e, t, r) {
  return (
    (A = { tag: A, create: e, destroy: t, deps: r, next: null }),
    (e = AA.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (AA.updateQueue = e),
        (e.lastEffect = A.next = A))
      : ((t = e.lastEffect),
        t === null
          ? (e.lastEffect = A.next = A)
          : ((r = t.next), (t.next = A), (A.next = r), (e.lastEffect = A))),
    A
  );
}
function Sf() {
  return se().memoizedState;
}
function mi(A, e, t, r) {
  var n = Qe();
  (AA.flags |= A),
    (n.memoizedState = Qn(1 | e, t, void 0, r === void 0 ? null : r));
}
function Cs(A, e, t, r) {
  var n = se();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (uA !== null) {
    var s = uA.memoizedState;
    if (((i = s.destroy), r !== null && Ea(r, s.deps))) {
      n.memoizedState = Qn(e, t, i, r);
      return;
    }
  }
  (AA.flags |= A), (n.memoizedState = Qn(1 | e, t, i, r));
}
function Nu(A, e) {
  return mi(8390656, 8, A, e);
}
function xa(A, e) {
  return Cs(2048, 8, A, e);
}
function Lf(A, e) {
  return Cs(4, 2, A, e);
}
function Kf(A, e) {
  return Cs(4, 4, A, e);
}
function Df(A, e) {
  if (typeof e == "function")
    return (
      (A = A()),
      e(A),
      function () {
        e(null);
      }
    );
  if (e != null)
    return (
      (A = A()),
      (e.current = A),
      function () {
        e.current = null;
      }
    );
}
function Tf(A, e, t) {
  return (
    (t = t != null ? t.concat([A]) : null), Cs(4, 4, Df.bind(null, e, A), t)
  );
}
function Sa() {}
function kf(A, e) {
  var t = se();
  e = e === void 0 ? null : e;
  var r = t.memoizedState;
  return r !== null && e !== null && Ea(e, r[1])
    ? r[0]
    : ((t.memoizedState = [A, e]), A);
}
function Of(A, e) {
  var t = se();
  e = e === void 0 ? null : e;
  var r = t.memoizedState;
  return r !== null && e !== null && Ea(e, r[1])
    ? r[0]
    : ((A = A()), (t.memoizedState = [A, e]), A);
}
function Nf(A, e, t) {
  return It & 21
    ? (ge(t, e) || ((t = GB()), (AA.lanes |= t), (xt |= t), (A.baseState = !0)),
      e)
    : (A.baseState && ((A.baseState = !1), (RA = !0)), (A.memoizedState = t));
}
function wh(A, e) {
  var t = V;
  (V = t !== 0 && 4 > t ? t : 4), A(!0);
  var r = no.transition;
  no.transition = {};
  try {
    A(!1), e();
  } finally {
    (V = t), (no.transition = r);
  }
}
function Mf() {
  return se().memoizedState;
}
function hh(A, e, t) {
  var r = nt(A);
  if (
    ((t = {
      lane: r,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Rf(A))
  )
    _f(e, t);
  else if (((t = Cf(A, e, t, r)), t !== null)) {
    var n = LA();
    fe(t, A, r, n), Gf(t, e, r);
  }
}
function ph(A, e, t) {
  var r = nt(A),
    n = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (Rf(A)) _f(e, n);
  else {
    var i = A.alternate;
    if (
      A.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = e.lastRenderedReducer), i !== null)
    )
      try {
        var s = e.lastRenderedState,
          o = i(s, t);
        if (((n.hasEagerState = !0), (n.eagerState = o), ge(o, s))) {
          var l = e.interleaved;
          l === null
            ? ((n.next = n), Ua(e))
            : ((n.next = l.next), (l.next = n)),
            (e.interleaved = n);
          return;
        }
      } catch {
      } finally {
      }
    (t = Cf(A, e, n, r)),
      t !== null && ((n = LA()), fe(t, A, r, n), Gf(t, e, r));
  }
}
function Rf(A) {
  var e = A.alternate;
  return A === AA || (e !== null && e === AA);
}
function _f(A, e) {
  Yr = zi = !0;
  var t = A.pending;
  t === null ? (e.next = e) : ((e.next = t.next), (t.next = e)),
    (A.pending = e);
}
function Gf(A, e, t) {
  if (t & 4194240) {
    var r = e.lanes;
    (r &= A.pendingLanes), (t |= r), (e.lanes = t), oa(A, t);
  }
}
var Zi = {
    readContext: ie,
    useCallback: UA,
    useContext: UA,
    useEffect: UA,
    useImperativeHandle: UA,
    useInsertionEffect: UA,
    useLayoutEffect: UA,
    useMemo: UA,
    useReducer: UA,
    useRef: UA,
    useState: UA,
    useDebugValue: UA,
    useDeferredValue: UA,
    useTransition: UA,
    useMutableSource: UA,
    useSyncExternalStore: UA,
    useId: UA,
    unstable_isNewReconciler: !1,
  },
  Qh = {
    readContext: ie,
    useCallback: function (A, e) {
      return (Qe().memoizedState = [A, e === void 0 ? null : e]), A;
    },
    useContext: ie,
    useEffect: Nu,
    useImperativeHandle: function (A, e, t) {
      return (
        (t = t != null ? t.concat([A]) : null),
        mi(4194308, 4, Df.bind(null, e, A), t)
      );
    },
    useLayoutEffect: function (A, e) {
      return mi(4194308, 4, A, e);
    },
    useInsertionEffect: function (A, e) {
      return mi(4, 2, A, e);
    },
    useMemo: function (A, e) {
      var t = Qe();
      return (
        (e = e === void 0 ? null : e), (A = A()), (t.memoizedState = [A, e]), A
      );
    },
    useReducer: function (A, e, t) {
      var r = Qe();
      return (
        (e = t !== void 0 ? t(e) : e),
        (r.memoizedState = r.baseState = e),
        (A = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: A,
          lastRenderedState: e,
        }),
        (r.queue = A),
        (A = A.dispatch = hh.bind(null, AA, A)),
        [r.memoizedState, A]
      );
    },
    useRef: function (A) {
      var e = Qe();
      return (A = { current: A }), (e.memoizedState = A);
    },
    useState: Ou,
    useDebugValue: Sa,
    useDeferredValue: function (A) {
      return (Qe().memoizedState = A);
    },
    useTransition: function () {
      var A = Ou(!1),
        e = A[0];
      return (A = wh.bind(null, A[1])), (Qe().memoizedState = A), [e, A];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (A, e, t) {
      var r = AA,
        n = Qe();
      if ($) {
        if (t === void 0) throw Error(E(407));
        t = t();
      } else {
        if (((t = e()), dA === null)) throw Error(E(349));
        It & 30 || yf(r, e, t);
      }
      n.memoizedState = t;
      var i = { value: t, getSnapshot: e };
      return (
        (n.queue = i),
        Nu(Hf.bind(null, r, i, A), [A]),
        (r.flags |= 2048),
        Qn(9, Ef.bind(null, r, i, t, e), void 0, null),
        t
      );
    },
    useId: function () {
      var A = Qe(),
        e = dA.identifierPrefix;
      if ($) {
        var t = Se,
          r = xe;
        (t = (r & ~(1 << (32 - Be(r) - 1))).toString(32) + t),
          (e = ":" + e + "R" + t),
          (t = hn++),
          0 < t && (e += "H" + t.toString(32)),
          (e += ":");
      } else (t = dh++), (e = ":" + e + "r" + t.toString(32) + ":");
      return (A.memoizedState = e);
    },
    unstable_isNewReconciler: !1,
  },
  Ch = {
    readContext: ie,
    useCallback: kf,
    useContext: ie,
    useEffect: xa,
    useImperativeHandle: Tf,
    useInsertionEffect: Lf,
    useLayoutEffect: Kf,
    useMemo: Of,
    useReducer: io,
    useRef: Sf,
    useState: function () {
      return io(pn);
    },
    useDebugValue: Sa,
    useDeferredValue: function (A) {
      var e = se();
      return Nf(e, uA.memoizedState, A);
    },
    useTransition: function () {
      var A = io(pn)[0],
        e = se().memoizedState;
      return [A, e];
    },
    useMutableSource: vf,
    useSyncExternalStore: mf,
    useId: Mf,
    unstable_isNewReconciler: !1,
  },
  Uh = {
    readContext: ie,
    useCallback: kf,
    useContext: ie,
    useEffect: xa,
    useImperativeHandle: Tf,
    useInsertionEffect: Lf,
    useLayoutEffect: Kf,
    useMemo: Of,
    useReducer: so,
    useRef: Sf,
    useState: function () {
      return so(pn);
    },
    useDebugValue: Sa,
    useDeferredValue: function (A) {
      var e = se();
      return uA === null ? (e.memoizedState = A) : Nf(e, uA.memoizedState, A);
    },
    useTransition: function () {
      var A = so(pn)[0],
        e = se().memoizedState;
      return [A, e];
    },
    useMutableSource: vf,
    useSyncExternalStore: mf,
    useId: Mf,
    unstable_isNewReconciler: !1,
  };
function ae(A, e) {
  if (A && A.defaultProps) {
    (e = eA({}, e)), (A = A.defaultProps);
    for (var t in A) e[t] === void 0 && (e[t] = A[t]);
    return e;
  }
  return e;
}
function ul(A, e, t, r) {
  (e = A.memoizedState),
    (t = t(r, e)),
    (t = t == null ? e : eA({}, e, t)),
    (A.memoizedState = t),
    A.lanes === 0 && (A.updateQueue.baseState = t);
}
var Us = {
  isMounted: function (A) {
    return (A = A._reactInternals) ? Kt(A) === A : !1;
  },
  enqueueSetState: function (A, e, t) {
    A = A._reactInternals;
    var r = LA(),
      n = nt(A),
      i = Le(r, n);
    (i.payload = e),
      t != null && (i.callback = t),
      (e = tt(A, i, n)),
      e !== null && (fe(e, A, n, r), Fi(e, A, n));
  },
  enqueueReplaceState: function (A, e, t) {
    A = A._reactInternals;
    var r = LA(),
      n = nt(A),
      i = Le(r, n);
    (i.tag = 1),
      (i.payload = e),
      t != null && (i.callback = t),
      (e = tt(A, i, n)),
      e !== null && (fe(e, A, n, r), Fi(e, A, n));
  },
  enqueueForceUpdate: function (A, e) {
    A = A._reactInternals;
    var t = LA(),
      r = nt(A),
      n = Le(t, r);
    (n.tag = 2),
      e != null && (n.callback = e),
      (e = tt(A, n, r)),
      e !== null && (fe(e, A, r, t), Fi(e, A, r));
  },
};
function Mu(A, e, t, r, n, i, s) {
  return (
    (A = A.stateNode),
    typeof A.shouldComponentUpdate == "function"
      ? A.shouldComponentUpdate(r, i, s)
      : e.prototype && e.prototype.isPureReactComponent
      ? !cn(t, r) || !cn(n, i)
      : !0
  );
}
function Vf(A, e, t) {
  var r = !1,
    n = at,
    i = e.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = ie(i))
      : ((n = GA(e) ? Et : EA.current),
        (r = e.contextTypes),
        (i = (r = r != null) ? ar(A, n) : at)),
    (e = new e(t, i)),
    (A.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = Us),
    (A.stateNode = e),
    (e._reactInternals = A),
    r &&
      ((A = A.stateNode),
      (A.__reactInternalMemoizedUnmaskedChildContext = n),
      (A.__reactInternalMemoizedMaskedChildContext = i)),
    e
  );
}
function Ru(A, e, t, r) {
  (A = e.state),
    typeof e.componentWillReceiveProps == "function" &&
      e.componentWillReceiveProps(t, r),
    typeof e.UNSAFE_componentWillReceiveProps == "function" &&
      e.UNSAFE_componentWillReceiveProps(t, r),
    e.state !== A && Us.enqueueReplaceState(e, e.state, null);
}
function cl(A, e, t, r) {
  var n = A.stateNode;
  (n.props = t), (n.state = A.memoizedState), (n.refs = {}), Fa(A);
  var i = e.contextType;
  typeof i == "object" && i !== null
    ? (n.context = ie(i))
    : ((i = GA(e) ? Et : EA.current), (n.context = ar(A, i))),
    (n.state = A.memoizedState),
    (i = e.getDerivedStateFromProps),
    typeof i == "function" && (ul(A, e, i, t), (n.state = A.memoizedState)),
    typeof e.getDerivedStateFromProps == "function" ||
      typeof n.getSnapshotBeforeUpdate == "function" ||
      (typeof n.UNSAFE_componentWillMount != "function" &&
        typeof n.componentWillMount != "function") ||
      ((e = n.state),
      typeof n.componentWillMount == "function" && n.componentWillMount(),
      typeof n.UNSAFE_componentWillMount == "function" &&
        n.UNSAFE_componentWillMount(),
      e !== n.state && Us.enqueueReplaceState(n, n.state, null),
      Yi(A, t, n, r),
      (n.state = A.memoizedState)),
    typeof n.componentDidMount == "function" && (A.flags |= 4194308);
}
function fr(A, e) {
  try {
    var t = "",
      r = e;
    do (t += jd(r)), (r = r.return);
    while (r);
    var n = t;
  } catch (i) {
    n =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: A, source: e, stack: n, digest: null };
}
function oo(A, e, t) {
  return { value: A, source: null, stack: t ?? null, digest: e ?? null };
}
function Bl(A, e) {
  try {
    console.error(e.value);
  } catch (t) {
    setTimeout(function () {
      throw t;
    });
  }
}
var Fh = typeof WeakMap == "function" ? WeakMap : Map;
function Pf(A, e, t) {
  (t = Le(-1, t)), (t.tag = 3), (t.payload = { element: null });
  var r = e.value;
  return (
    (t.callback = function () {
      qi || ((qi = !0), (Fl = r)), Bl(A, e);
    }),
    t
  );
}
function bf(A, e, t) {
  (t = Le(-1, t)), (t.tag = 3);
  var r = A.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var n = e.value;
    (t.payload = function () {
      return r(n);
    }),
      (t.callback = function () {
        Bl(A, e);
      });
  }
  var i = A.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (t.callback = function () {
        Bl(A, e),
          typeof r != "function" &&
            (rt === null ? (rt = new Set([this])) : rt.add(this));
        var s = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    t
  );
}
function _u(A, e, t) {
  var r = A.pingCache;
  if (r === null) {
    r = A.pingCache = new Fh();
    var n = new Set();
    r.set(e, n);
  } else (n = r.get(e)), n === void 0 && ((n = new Set()), r.set(e, n));
  n.has(t) || (n.add(t), (A = Oh.bind(null, A, e, t)), e.then(A, A));
}
function Gu(A) {
  do {
    var e;
    if (
      ((e = A.tag === 13) &&
        ((e = A.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
      e)
    )
      return A;
    A = A.return;
  } while (A !== null);
  return null;
}
function Vu(A, e, t, r, n) {
  return A.mode & 1
    ? ((A.flags |= 65536), (A.lanes = n), A)
    : (A === e
        ? (A.flags |= 65536)
        : ((A.flags |= 128),
          (t.flags |= 131072),
          (t.flags &= -52805),
          t.tag === 1 &&
            (t.alternate === null
              ? (t.tag = 17)
              : ((e = Le(-1, 1)), (e.tag = 2), tt(t, e, 1))),
          (t.lanes |= 1)),
      A);
}
var vh = Me.ReactCurrentOwner,
  RA = !1;
function xA(A, e, t, r) {
  e.child = A === null ? Qf(e, null, t, r) : cr(e, A.child, t, r);
}
function Pu(A, e, t, r, n) {
  t = t.render;
  var i = e.ref;
  return (
    ir(e, n),
    (r = Ha(A, e, t, r, i, n)),
    (t = Ia()),
    A !== null && !RA
      ? ((e.updateQueue = A.updateQueue),
        (e.flags &= -2053),
        (A.lanes &= ~n),
        Oe(A, e, n))
      : ($ && t && da(e), (e.flags |= 1), xA(A, e, r, n), e.child)
  );
}
function bu(A, e, t, r, n) {
  if (A === null) {
    var i = t.type;
    return typeof i == "function" &&
      !Ma(i) &&
      i.defaultProps === void 0 &&
      t.compare === null &&
      t.defaultProps === void 0
      ? ((e.tag = 15), (e.type = i), Xf(A, e, i, r, n))
      : ((A = Ii(t.type, null, r, e, e.mode, n)),
        (A.ref = e.ref),
        (A.return = e),
        (e.child = A));
  }
  if (((i = A.child), !(A.lanes & n))) {
    var s = i.memoizedProps;
    if (
      ((t = t.compare), (t = t !== null ? t : cn), t(s, r) && A.ref === e.ref)
    )
      return Oe(A, e, n);
  }
  return (
    (e.flags |= 1),
    (A = it(i, r)),
    (A.ref = e.ref),
    (A.return = e),
    (e.child = A)
  );
}
function Xf(A, e, t, r, n) {
  if (A !== null) {
    var i = A.memoizedProps;
    if (cn(i, r) && A.ref === e.ref)
      if (((RA = !1), (e.pendingProps = r = i), (A.lanes & n) !== 0))
        A.flags & 131072 && (RA = !0);
      else return (e.lanes = A.lanes), Oe(A, e, n);
  }
  return fl(A, e, t, r, n);
}
function Wf(A, e, t) {
  var r = e.pendingProps,
    n = r.children,
    i = A !== null ? A.memoizedState : null;
  if (r.mode === "hidden")
    if (!(e.mode & 1))
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        J(qt, XA),
        (XA |= t);
    else {
      if (!(t & 1073741824))
        return (
          (A = i !== null ? i.baseLanes | t : t),
          (e.lanes = e.childLanes = 1073741824),
          (e.memoizedState = {
            baseLanes: A,
            cachePool: null,
            transitions: null,
          }),
          (e.updateQueue = null),
          J(qt, XA),
          (XA |= A),
          null
        );
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : t),
        J(qt, XA),
        (XA |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | t), (e.memoizedState = null)) : (r = t),
      J(qt, XA),
      (XA |= r);
  return xA(A, e, n, t), e.child;
}
function Jf(A, e) {
  var t = e.ref;
  ((A === null && t !== null) || (A !== null && A.ref !== t)) &&
    ((e.flags |= 512), (e.flags |= 2097152));
}
function fl(A, e, t, r, n) {
  var i = GA(t) ? Et : EA.current;
  return (
    (i = ar(e, i)),
    ir(e, n),
    (t = Ha(A, e, t, r, i, n)),
    (r = Ia()),
    A !== null && !RA
      ? ((e.updateQueue = A.updateQueue),
        (e.flags &= -2053),
        (A.lanes &= ~n),
        Oe(A, e, n))
      : ($ && r && da(e), (e.flags |= 1), xA(A, e, t, n), e.child)
  );
}
function Xu(A, e, t, r, n) {
  if (GA(t)) {
    var i = !0;
    Pi(e);
  } else i = !1;
  if ((ir(e, n), e.stateNode === null))
    yi(A, e), Vf(e, t, r), cl(e, t, r, n), (r = !0);
  else if (A === null) {
    var s = e.stateNode,
      o = e.memoizedProps;
    s.props = o;
    var l = s.context,
      a = t.contextType;
    typeof a == "object" && a !== null
      ? (a = ie(a))
      : ((a = GA(t) ? Et : EA.current), (a = ar(e, a)));
    var u = t.getDerivedStateFromProps,
      c =
        typeof u == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    c ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((o !== r || l !== a) && Ru(e, s, r, a)),
      (Pe = !1);
    var f = e.memoizedState;
    (s.state = f),
      Yi(e, r, s, n),
      (l = e.memoizedState),
      o !== r || f !== l || _A.current || Pe
        ? (typeof u == "function" && (ul(e, t, u, r), (l = e.memoizedState)),
          (o = Pe || Mu(e, t, o, r, f, l, a))
            ? (c ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (e.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (e.flags |= 4194308),
              (e.memoizedProps = r),
              (e.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = a),
          (r = o))
        : (typeof s.componentDidMount == "function" && (e.flags |= 4194308),
          (r = !1));
  } else {
    (s = e.stateNode),
      Uf(A, e),
      (o = e.memoizedProps),
      (a = e.type === e.elementType ? o : ae(e.type, o)),
      (s.props = a),
      (c = e.pendingProps),
      (f = s.context),
      (l = t.contextType),
      typeof l == "object" && l !== null
        ? (l = ie(l))
        : ((l = GA(t) ? Et : EA.current), (l = ar(e, l)));
    var h = t.getDerivedStateFromProps;
    (u =
      typeof h == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((o !== c || f !== l) && Ru(e, s, r, l)),
      (Pe = !1),
      (f = e.memoizedState),
      (s.state = f),
      Yi(e, r, s, n);
    var w = e.memoizedState;
    o !== c || f !== w || _A.current || Pe
      ? (typeof h == "function" && (ul(e, t, h, r), (w = e.memoizedState)),
        (a = Pe || Mu(e, t, a, r, f, w, l) || !1)
          ? (u ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, w, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, w, l)),
            typeof s.componentDidUpdate == "function" && (e.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (o === A.memoizedProps && f === A.memoizedState) ||
              (e.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (o === A.memoizedProps && f === A.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = r),
            (e.memoizedState = w)),
        (s.props = r),
        (s.state = w),
        (s.context = l),
        (r = a))
      : (typeof s.componentDidUpdate != "function" ||
          (o === A.memoizedProps && f === A.memoizedState) ||
          (e.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (o === A.memoizedProps && f === A.memoizedState) ||
          (e.flags |= 1024),
        (r = !1));
  }
  return gl(A, e, t, r, i, n);
}
function gl(A, e, t, r, n, i) {
  Jf(A, e);
  var s = (e.flags & 128) !== 0;
  if (!r && !s) return n && Su(e, t, !1), Oe(A, e, i);
  (r = e.stateNode), (vh.current = e);
  var o =
    s && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (e.flags |= 1),
    A !== null && s
      ? ((e.child = cr(e, A.child, null, i)), (e.child = cr(e, null, o, i)))
      : xA(A, e, o, i),
    (e.memoizedState = r.state),
    n && Su(e, t, !0),
    e.child
  );
}
function Yf(A) {
  var e = A.stateNode;
  e.pendingContext
    ? xu(A, e.pendingContext, e.pendingContext !== e.context)
    : e.context && xu(A, e.context, !1),
    va(A, e.containerInfo);
}
function Wu(A, e, t, r, n) {
  return ur(), ha(n), (e.flags |= 256), xA(A, e, t, r), e.child;
}
var dl = { dehydrated: null, treeContext: null, retryLane: 0 };
function wl(A) {
  return { baseLanes: A, cachePool: null, transitions: null };
}
function jf(A, e, t) {
  var r = e.pendingProps,
    n = q.current,
    i = !1,
    s = (e.flags & 128) !== 0,
    o;
  if (
    ((o = s) ||
      (o = A !== null && A.memoizedState === null ? !1 : (n & 2) !== 0),
    o
      ? ((i = !0), (e.flags &= -129))
      : (A === null || A.memoizedState !== null) && (n |= 1),
    J(q, n & 1),
    A === null)
  )
    return (
      ll(e),
      (A = e.memoizedState),
      A !== null && ((A = A.dehydrated), A !== null)
        ? (e.mode & 1
            ? A.data === "$!"
              ? (e.lanes = 8)
              : (e.lanes = 1073741824)
            : (e.lanes = 1),
          null)
        : ((s = r.children),
          (A = r.fallback),
          i
            ? ((r = e.mode),
              (i = e.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = ms(s, r, 0, null)),
              (A = vt(A, r, t, null)),
              (i.return = e),
              (A.return = e),
              (i.sibling = A),
              (e.child = i),
              (e.child.memoizedState = wl(t)),
              (e.memoizedState = dl),
              A)
            : La(e, s))
    );
  if (((n = A.memoizedState), n !== null && ((o = n.dehydrated), o !== null)))
    return mh(A, e, s, r, o, n, t);
  if (i) {
    (i = r.fallback), (s = e.mode), (n = A.child), (o = n.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && e.child !== n
        ? ((r = e.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (e.deletions = null))
        : ((r = it(n, l)), (r.subtreeFlags = n.subtreeFlags & 14680064)),
      o !== null ? (i = it(o, i)) : ((i = vt(i, s, t, null)), (i.flags |= 2)),
      (i.return = e),
      (r.return = e),
      (r.sibling = i),
      (e.child = r),
      (r = i),
      (i = e.child),
      (s = A.child.memoizedState),
      (s =
        s === null
          ? wl(t)
          : {
              baseLanes: s.baseLanes | t,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = A.childLanes & ~t),
      (e.memoizedState = dl),
      r
    );
  }
  return (
    (i = A.child),
    (A = i.sibling),
    (r = it(i, { mode: "visible", children: r.children })),
    !(e.mode & 1) && (r.lanes = t),
    (r.return = e),
    (r.sibling = null),
    A !== null &&
      ((t = e.deletions),
      t === null ? ((e.deletions = [A]), (e.flags |= 16)) : t.push(A)),
    (e.child = r),
    (e.memoizedState = null),
    r
  );
}
function La(A, e) {
  return (
    (e = ms({ mode: "visible", children: e }, A.mode, 0, null)),
    (e.return = A),
    (A.child = e)
  );
}
function bn(A, e, t, r) {
  return (
    r !== null && ha(r),
    cr(e, A.child, null, t),
    (A = La(e, e.pendingProps.children)),
    (A.flags |= 2),
    (e.memoizedState = null),
    A
  );
}
function mh(A, e, t, r, n, i, s) {
  if (t)
    return e.flags & 256
      ? ((e.flags &= -257), (r = oo(Error(E(422)))), bn(A, e, s, r))
      : e.memoizedState !== null
      ? ((e.child = A.child), (e.flags |= 128), null)
      : ((i = r.fallback),
        (n = e.mode),
        (r = ms({ mode: "visible", children: r.children }, n, 0, null)),
        (i = vt(i, n, s, null)),
        (i.flags |= 2),
        (r.return = e),
        (i.return = e),
        (r.sibling = i),
        (e.child = r),
        e.mode & 1 && cr(e, A.child, null, s),
        (e.child.memoizedState = wl(s)),
        (e.memoizedState = dl),
        i);
  if (!(e.mode & 1)) return bn(A, e, s, null);
  if (n.data === "$!") {
    if (((r = n.nextSibling && n.nextSibling.dataset), r)) var o = r.dgst;
    return (r = o), (i = Error(E(419))), (r = oo(i, r, void 0)), bn(A, e, s, r);
  }
  if (((o = (s & A.childLanes) !== 0), RA || o)) {
    if (((r = dA), r !== null)) {
      switch (s & -s) {
        case 4:
          n = 2;
          break;
        case 16:
          n = 8;
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
          n = 32;
          break;
        case 536870912:
          n = 268435456;
          break;
        default:
          n = 0;
      }
      (n = n & (r.suspendedLanes | s) ? 0 : n),
        n !== 0 &&
          n !== i.retryLane &&
          ((i.retryLane = n), ke(A, n), fe(r, A, n, -1));
    }
    return Na(), (r = oo(Error(E(421)))), bn(A, e, s, r);
  }
  return n.data === "$?"
    ? ((e.flags |= 128),
      (e.child = A.child),
      (e = Nh.bind(null, A)),
      (n._reactRetry = e),
      null)
    : ((A = i.treeContext),
      (WA = et(n.nextSibling)),
      (JA = e),
      ($ = !0),
      (ce = null),
      A !== null &&
        (($A[qA++] = xe),
        ($A[qA++] = Se),
        ($A[qA++] = Ht),
        (xe = A.id),
        (Se = A.overflow),
        (Ht = e)),
      (e = La(e, r.children)),
      (e.flags |= 4096),
      e);
}
function Ju(A, e, t) {
  A.lanes |= e;
  var r = A.alternate;
  r !== null && (r.lanes |= e), al(A.return, e, t);
}
function lo(A, e, t, r, n) {
  var i = A.memoizedState;
  i === null
    ? (A.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: t,
        tailMode: n,
      })
    : ((i.isBackwards = e),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = t),
      (i.tailMode = n));
}
function zf(A, e, t) {
  var r = e.pendingProps,
    n = r.revealOrder,
    i = r.tail;
  if ((xA(A, e, r.children, t), (r = q.current), r & 2))
    (r = (r & 1) | 2), (e.flags |= 128);
  else {
    if (A !== null && A.flags & 128)
      A: for (A = e.child; A !== null; ) {
        if (A.tag === 13) A.memoizedState !== null && Ju(A, t, e);
        else if (A.tag === 19) Ju(A, t, e);
        else if (A.child !== null) {
          (A.child.return = A), (A = A.child);
          continue;
        }
        if (A === e) break A;
        for (; A.sibling === null; ) {
          if (A.return === null || A.return === e) break A;
          A = A.return;
        }
        (A.sibling.return = A.return), (A = A.sibling);
      }
    r &= 1;
  }
  if ((J(q, r), !(e.mode & 1))) e.memoizedState = null;
  else
    switch (n) {
      case "forwards":
        for (t = e.child, n = null; t !== null; )
          (A = t.alternate),
            A !== null && ji(A) === null && (n = t),
            (t = t.sibling);
        (t = n),
          t === null
            ? ((n = e.child), (e.child = null))
            : ((n = t.sibling), (t.sibling = null)),
          lo(e, !1, n, t, i);
        break;
      case "backwards":
        for (t = null, n = e.child, e.child = null; n !== null; ) {
          if (((A = n.alternate), A !== null && ji(A) === null)) {
            e.child = n;
            break;
          }
          (A = n.sibling), (n.sibling = t), (t = n), (n = A);
        }
        lo(e, !0, t, null, i);
        break;
      case "together":
        lo(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function yi(A, e) {
  !(e.mode & 1) &&
    A !== null &&
    ((A.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function Oe(A, e, t) {
  if (
    (A !== null && (e.dependencies = A.dependencies),
    (xt |= e.lanes),
    !(t & e.childLanes))
  )
    return null;
  if (A !== null && e.child !== A.child) throw Error(E(153));
  if (e.child !== null) {
    for (
      A = e.child, t = it(A, A.pendingProps), e.child = t, t.return = e;
      A.sibling !== null;

    )
      (A = A.sibling), (t = t.sibling = it(A, A.pendingProps)), (t.return = e);
    t.sibling = null;
  }
  return e.child;
}
function yh(A, e, t) {
  switch (e.tag) {
    case 3:
      Yf(e), ur();
      break;
    case 5:
      Ff(e);
      break;
    case 1:
      GA(e.type) && Pi(e);
      break;
    case 4:
      va(e, e.stateNode.containerInfo);
      break;
    case 10:
      var r = e.type._context,
        n = e.memoizedProps.value;
      J(Wi, r._currentValue), (r._currentValue = n);
      break;
    case 13:
      if (((r = e.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (J(q, q.current & 1), (e.flags |= 128), null)
          : t & e.child.childLanes
          ? jf(A, e, t)
          : (J(q, q.current & 1),
            (A = Oe(A, e, t)),
            A !== null ? A.sibling : null);
      J(q, q.current & 1);
      break;
    case 19:
      if (((r = (t & e.childLanes) !== 0), A.flags & 128)) {
        if (r) return zf(A, e, t);
        e.flags |= 128;
      }
      if (
        ((n = e.memoizedState),
        n !== null &&
          ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
        J(q, q.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (e.lanes = 0), Wf(A, e, t);
  }
  return Oe(A, e, t);
}
var Zf, hl, $f, qf;
Zf = function (A, e) {
  for (var t = e.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6) A.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
};
hl = function () {};
$f = function (A, e, t, r) {
  var n = A.memoizedProps;
  if (n !== r) {
    (A = e.stateNode), Ct(Fe.current);
    var i = null;
    switch (t) {
      case "input":
        (n = Ro(A, n)), (r = Ro(A, r)), (i = []);
        break;
      case "select":
        (n = eA({}, n, { value: void 0 })),
          (r = eA({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (n = Vo(A, n)), (r = Vo(A, r)), (i = []);
        break;
      default:
        typeof n.onClick != "function" &&
          typeof r.onClick == "function" &&
          (A.onclick = Gi);
    }
    bo(t, r);
    var s;
    t = null;
    for (a in n)
      if (!r.hasOwnProperty(a) && n.hasOwnProperty(a) && n[a] != null)
        if (a === "style") {
          var o = n[a];
          for (s in o) o.hasOwnProperty(s) && (t || (t = {}), (t[s] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (rn.hasOwnProperty(a)
              ? i || (i = [])
              : (i = i || []).push(a, null));
    for (a in r) {
      var l = r[a];
      if (
        ((o = n != null ? n[a] : void 0),
        r.hasOwnProperty(a) && l !== o && (l != null || o != null))
      )
        if (a === "style")
          if (o) {
            for (s in o)
              !o.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (t || (t = {}), (t[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                o[s] !== l[s] &&
                (t || (t = {}), (t[s] = l[s]));
          } else t || (i || (i = []), i.push(a, t)), (t = l);
        else
          a === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (o = o ? o.__html : void 0),
              l != null && o !== l && (i = i || []).push(a, l))
            : a === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (i = i || []).push(a, "" + l)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (rn.hasOwnProperty(a)
                ? (l != null && a === "onScroll" && Y("scroll", A),
                  i || o === l || (i = []))
                : (i = i || []).push(a, l));
    }
    t && (i = i || []).push("style", t);
    var a = i;
    (e.updateQueue = a) && (e.flags |= 4);
  }
};
qf = function (A, e, t, r) {
  t !== r && (e.flags |= 4);
};
function Er(A, e) {
  if (!$)
    switch (A.tailMode) {
      case "hidden":
        e = A.tail;
        for (var t = null; e !== null; )
          e.alternate !== null && (t = e), (e = e.sibling);
        t === null ? (A.tail = null) : (t.sibling = null);
        break;
      case "collapsed":
        t = A.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null
          ? e || A.tail === null
            ? (A.tail = null)
            : (A.tail.sibling = null)
          : (r.sibling = null);
    }
}
function FA(A) {
  var e = A.alternate !== null && A.alternate.child === A.child,
    t = 0,
    r = 0;
  if (e)
    for (var n = A.child; n !== null; )
      (t |= n.lanes | n.childLanes),
        (r |= n.subtreeFlags & 14680064),
        (r |= n.flags & 14680064),
        (n.return = A),
        (n = n.sibling);
  else
    for (n = A.child; n !== null; )
      (t |= n.lanes | n.childLanes),
        (r |= n.subtreeFlags),
        (r |= n.flags),
        (n.return = A),
        (n = n.sibling);
  return (A.subtreeFlags |= r), (A.childLanes = t), e;
}
function Eh(A, e, t) {
  var r = e.pendingProps;
  switch ((wa(e), e.tag)) {
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
      return FA(e), null;
    case 1:
      return GA(e.type) && Vi(), FA(e), null;
    case 3:
      return (
        (r = e.stateNode),
        Br(),
        j(_A),
        j(EA),
        ya(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (A === null || A.child === null) &&
          (Vn(e)
            ? (e.flags |= 4)
            : A === null ||
              (A.memoizedState.isDehydrated && !(e.flags & 256)) ||
              ((e.flags |= 1024), ce !== null && (yl(ce), (ce = null)))),
        hl(A, e),
        FA(e),
        null
      );
    case 5:
      ma(e);
      var n = Ct(wn.current);
      if (((t = e.type), A !== null && e.stateNode != null))
        $f(A, e, t, r, n),
          A.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
      else {
        if (!r) {
          if (e.stateNode === null) throw Error(E(166));
          return FA(e), null;
        }
        if (((A = Ct(Fe.current)), Vn(e))) {
          (r = e.stateNode), (t = e.type);
          var i = e.memoizedProps;
          switch (((r[Ce] = e), (r[gn] = i), (A = (e.mode & 1) !== 0), t)) {
            case "dialog":
              Y("cancel", r), Y("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Y("load", r);
              break;
            case "video":
            case "audio":
              for (n = 0; n < kr.length; n++) Y(kr[n], r);
              break;
            case "source":
              Y("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Y("error", r), Y("load", r);
              break;
            case "details":
              Y("toggle", r);
              break;
            case "input":
              tu(r, i), Y("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                Y("invalid", r);
              break;
            case "textarea":
              nu(r, i), Y("invalid", r);
          }
          bo(t, i), (n = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var o = i[s];
              s === "children"
                ? typeof o == "string"
                  ? r.textContent !== o &&
                    (i.suppressHydrationWarning !== !0 &&
                      Gn(r.textContent, o, A),
                    (n = ["children", o]))
                  : typeof o == "number" &&
                    r.textContent !== "" + o &&
                    (i.suppressHydrationWarning !== !0 &&
                      Gn(r.textContent, o, A),
                    (n = ["children", "" + o]))
                : rn.hasOwnProperty(s) &&
                  o != null &&
                  s === "onScroll" &&
                  Y("scroll", r);
            }
          switch (t) {
            case "input":
              Dn(r), ru(r, i, !0);
              break;
            case "textarea":
              Dn(r), iu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Gi);
          }
          (r = n), (e.updateQueue = r), r !== null && (e.flags |= 4);
        } else {
          (s = n.nodeType === 9 ? n : n.ownerDocument),
            A === "http://www.w3.org/1999/xhtml" && (A = EB(t)),
            A === "http://www.w3.org/1999/xhtml"
              ? t === "script"
                ? ((A = s.createElement("div")),
                  (A.innerHTML = "<script></script>"),
                  (A = A.removeChild(A.firstChild)))
                : typeof r.is == "string"
                ? (A = s.createElement(t, { is: r.is }))
                : ((A = s.createElement(t)),
                  t === "select" &&
                    ((s = A),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (A = s.createElementNS(A, t)),
            (A[Ce] = e),
            (A[gn] = r),
            Zf(A, e, !1, !1),
            (e.stateNode = A);
          A: {
            switch (((s = Xo(t, r)), t)) {
              case "dialog":
                Y("cancel", A), Y("close", A), (n = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Y("load", A), (n = r);
                break;
              case "video":
              case "audio":
                for (n = 0; n < kr.length; n++) Y(kr[n], A);
                n = r;
                break;
              case "source":
                Y("error", A), (n = r);
                break;
              case "img":
              case "image":
              case "link":
                Y("error", A), Y("load", A), (n = r);
                break;
              case "details":
                Y("toggle", A), (n = r);
                break;
              case "input":
                tu(A, r), (n = Ro(A, r)), Y("invalid", A);
                break;
              case "option":
                n = r;
                break;
              case "select":
                (A._wrapperState = { wasMultiple: !!r.multiple }),
                  (n = eA({}, r, { value: void 0 })),
                  Y("invalid", A);
                break;
              case "textarea":
                nu(A, r), (n = Vo(A, r)), Y("invalid", A);
                break;
              default:
                n = r;
            }
            bo(t, n), (o = n);
            for (i in o)
              if (o.hasOwnProperty(i)) {
                var l = o[i];
                i === "style"
                  ? xB(A, l)
                  : i === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && HB(A, l))
                  : i === "children"
                  ? typeof l == "string"
                    ? (t !== "textarea" || l !== "") && nn(A, l)
                    : typeof l == "number" && nn(A, "" + l)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (rn.hasOwnProperty(i)
                      ? l != null && i === "onScroll" && Y("scroll", A)
                      : l != null && ea(A, i, l, s));
              }
            switch (t) {
              case "input":
                Dn(A), ru(A, r, !1);
                break;
              case "textarea":
                Dn(A), iu(A);
                break;
              case "option":
                r.value != null && A.setAttribute("value", "" + lt(r.value));
                break;
              case "select":
                (A.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? er(A, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      er(A, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof n.onClick == "function" && (A.onclick = Gi);
            }
            switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break A;
              case "img":
                r = !0;
                break A;
              default:
                r = !1;
            }
          }
          r && (e.flags |= 4);
        }
        e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
      }
      return FA(e), null;
    case 6:
      if (A && e.stateNode != null) qf(A, e, A.memoizedProps, r);
      else {
        if (typeof r != "string" && e.stateNode === null) throw Error(E(166));
        if (((t = Ct(wn.current)), Ct(Fe.current), Vn(e))) {
          if (
            ((r = e.stateNode),
            (t = e.memoizedProps),
            (r[Ce] = e),
            (i = r.nodeValue !== t) && ((A = JA), A !== null))
          )
            switch (A.tag) {
              case 3:
                Gn(r.nodeValue, t, (A.mode & 1) !== 0);
                break;
              case 5:
                A.memoizedProps.suppressHydrationWarning !== !0 &&
                  Gn(r.nodeValue, t, (A.mode & 1) !== 0);
            }
          i && (e.flags |= 4);
        } else
          (r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r)),
            (r[Ce] = e),
            (e.stateNode = r);
      }
      return FA(e), null;
    case 13:
      if (
        (j(q),
        (r = e.memoizedState),
        A === null ||
          (A.memoizedState !== null && A.memoizedState.dehydrated !== null))
      ) {
        if ($ && WA !== null && e.mode & 1 && !(e.flags & 128))
          hf(), ur(), (e.flags |= 98560), (i = !1);
        else if (((i = Vn(e)), r !== null && r.dehydrated !== null)) {
          if (A === null) {
            if (!i) throw Error(E(318));
            if (
              ((i = e.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(E(317));
            i[Ce] = e;
          } else
            ur(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4);
          FA(e), (i = !1);
        } else ce !== null && (yl(ce), (ce = null)), (i = !0);
        if (!i) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128
        ? ((e.lanes = t), e)
        : ((r = r !== null),
          r !== (A !== null && A.memoizedState !== null) &&
            r &&
            ((e.child.flags |= 8192),
            e.mode & 1 &&
              (A === null || q.current & 1 ? BA === 0 && (BA = 3) : Na())),
          e.updateQueue !== null && (e.flags |= 4),
          FA(e),
          null);
    case 4:
      return (
        Br(), hl(A, e), A === null && Bn(e.stateNode.containerInfo), FA(e), null
      );
    case 10:
      return Ca(e.type._context), FA(e), null;
    case 17:
      return GA(e.type) && Vi(), FA(e), null;
    case 19:
      if ((j(q), (i = e.memoizedState), i === null)) return FA(e), null;
      if (((r = (e.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) Er(i, !1);
        else {
          if (BA !== 0 || (A !== null && A.flags & 128))
            for (A = e.child; A !== null; ) {
              if (((s = ji(A)), s !== null)) {
                for (
                  e.flags |= 128,
                    Er(i, !1),
                    r = s.updateQueue,
                    r !== null && ((e.updateQueue = r), (e.flags |= 4)),
                    e.subtreeFlags = 0,
                    r = t,
                    t = e.child;
                  t !== null;

                )
                  (i = t),
                    (A = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = A),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (A = s.dependencies),
                        (i.dependencies =
                          A === null
                            ? null
                            : {
                                lanes: A.lanes,
                                firstContext: A.firstContext,
                              })),
                    (t = t.sibling);
                return J(q, (q.current & 1) | 2), e.child;
              }
              A = A.sibling;
            }
          i.tail !== null &&
            sA() > gr &&
            ((e.flags |= 128), (r = !0), Er(i, !1), (e.lanes = 4194304));
        }
      else {
        if (!r)
          if (((A = ji(s)), A !== null)) {
            if (
              ((e.flags |= 128),
              (r = !0),
              (t = A.updateQueue),
              t !== null && ((e.updateQueue = t), (e.flags |= 4)),
              Er(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !$)
            )
              return FA(e), null;
          } else
            2 * sA() - i.renderingStartTime > gr &&
              t !== 1073741824 &&
              ((e.flags |= 128), (r = !0), Er(i, !1), (e.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = e.child), (e.child = s))
          : ((t = i.last),
            t !== null ? (t.sibling = s) : (e.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((e = i.tail),
          (i.rendering = e),
          (i.tail = e.sibling),
          (i.renderingStartTime = sA()),
          (e.sibling = null),
          (t = q.current),
          J(q, r ? (t & 1) | 2 : t & 1),
          e)
        : (FA(e), null);
    case 22:
    case 23:
      return (
        Oa(),
        (r = e.memoizedState !== null),
        A !== null && (A.memoizedState !== null) !== r && (e.flags |= 8192),
        r && e.mode & 1
          ? XA & 1073741824 && (FA(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : FA(e),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, e.tag));
}
function Hh(A, e) {
  switch ((wa(e), e.tag)) {
    case 1:
      return (
        GA(e.type) && Vi(),
        (A = e.flags),
        A & 65536 ? ((e.flags = (A & -65537) | 128), e) : null
      );
    case 3:
      return (
        Br(),
        j(_A),
        j(EA),
        ya(),
        (A = e.flags),
        A & 65536 && !(A & 128) ? ((e.flags = (A & -65537) | 128), e) : null
      );
    case 5:
      return ma(e), null;
    case 13:
      if ((j(q), (A = e.memoizedState), A !== null && A.dehydrated !== null)) {
        if (e.alternate === null) throw Error(E(340));
        ur();
      }
      return (
        (A = e.flags), A & 65536 ? ((e.flags = (A & -65537) | 128), e) : null
      );
    case 19:
      return j(q), null;
    case 4:
      return Br(), null;
    case 10:
      return Ca(e.type._context), null;
    case 22:
    case 23:
      return Oa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Xn = !1,
  yA = !1,
  Ih = typeof WeakSet == "function" ? WeakSet : Set,
  K = null;
function $t(A, e) {
  var t = A.ref;
  if (t !== null)
    if (typeof t == "function")
      try {
        t(null);
      } catch (r) {
        rA(A, e, r);
      }
    else t.current = null;
}
function pl(A, e, t) {
  try {
    t();
  } catch (r) {
    rA(A, e, r);
  }
}
var Yu = !1;
function xh(A, e) {
  if (((el = Mi), (A = rf()), ga(A))) {
    if ("selectionStart" in A)
      var t = { start: A.selectionStart, end: A.selectionEnd };
    else
      A: {
        t = ((t = A.ownerDocument) && t.defaultView) || window;
        var r = t.getSelection && t.getSelection();
        if (r && r.rangeCount !== 0) {
          t = r.anchorNode;
          var n = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            t.nodeType, i.nodeType;
          } catch {
            t = null;
            break A;
          }
          var s = 0,
            o = -1,
            l = -1,
            a = 0,
            u = 0,
            c = A,
            f = null;
          e: for (;;) {
            for (
              var h;
              c !== t || (n !== 0 && c.nodeType !== 3) || (o = s + n),
                c !== i || (r !== 0 && c.nodeType !== 3) || (l = s + r),
                c.nodeType === 3 && (s += c.nodeValue.length),
                (h = c.firstChild) !== null;

            )
              (f = c), (c = h);
            for (;;) {
              if (c === A) break e;
              if (
                (f === t && ++a === n && (o = s),
                f === i && ++u === r && (l = s),
                (h = c.nextSibling) !== null)
              )
                break;
              (c = f), (f = c.parentNode);
            }
            c = h;
          }
          t = o === -1 || l === -1 ? null : { start: o, end: l };
        } else t = null;
      }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (tl = { focusedElem: A, selectionRange: t }, Mi = !1, K = e; K !== null; )
    if (((e = K), (A = e.child), (e.subtreeFlags & 1028) !== 0 && A !== null))
      (A.return = e), (K = A);
    else
      for (; K !== null; ) {
        e = K;
        try {
          var w = e.alternate;
          if (e.flags & 1024)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var p = w.memoizedProps,
                    x = w.memoizedState,
                    g = e.stateNode,
                    B = g.getSnapshotBeforeUpdate(
                      e.elementType === e.type ? p : ae(e.type, p),
                      x
                    );
                  g.__reactInternalSnapshotBeforeUpdate = B;
                }
                break;
              case 3:
                var d = e.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(E(163));
            }
        } catch (Q) {
          rA(e, e.return, Q);
        }
        if (((A = e.sibling), A !== null)) {
          (A.return = e.return), (K = A);
          break;
        }
        K = e.return;
      }
  return (w = Yu), (Yu = !1), w;
}
function jr(A, e, t) {
  var r = e.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var n = (r = r.next);
    do {
      if ((n.tag & A) === A) {
        var i = n.destroy;
        (n.destroy = void 0), i !== void 0 && pl(e, t, i);
      }
      n = n.next;
    } while (n !== r);
  }
}
function Fs(A, e) {
  if (
    ((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
  ) {
    var t = (e = e.next);
    do {
      if ((t.tag & A) === A) {
        var r = t.create;
        t.destroy = r();
      }
      t = t.next;
    } while (t !== e);
  }
}
function Ql(A) {
  var e = A.ref;
  if (e !== null) {
    var t = A.stateNode;
    switch (A.tag) {
      case 5:
        A = t;
        break;
      default:
        A = t;
    }
    typeof e == "function" ? e(A) : (e.current = A);
  }
}
function Ag(A) {
  var e = A.alternate;
  e !== null && ((A.alternate = null), Ag(e)),
    (A.child = null),
    (A.deletions = null),
    (A.sibling = null),
    A.tag === 5 &&
      ((e = A.stateNode),
      e !== null &&
        (delete e[Ce], delete e[gn], delete e[il], delete e[ch], delete e[Bh])),
    (A.stateNode = null),
    (A.return = null),
    (A.dependencies = null),
    (A.memoizedProps = null),
    (A.memoizedState = null),
    (A.pendingProps = null),
    (A.stateNode = null),
    (A.updateQueue = null);
}
function eg(A) {
  return A.tag === 5 || A.tag === 3 || A.tag === 4;
}
function ju(A) {
  A: for (;;) {
    for (; A.sibling === null; ) {
      if (A.return === null || eg(A.return)) return null;
      A = A.return;
    }
    for (
      A.sibling.return = A.return, A = A.sibling;
      A.tag !== 5 && A.tag !== 6 && A.tag !== 18;

    ) {
      if (A.flags & 2 || A.child === null || A.tag === 4) continue A;
      (A.child.return = A), (A = A.child);
    }
    if (!(A.flags & 2)) return A.stateNode;
  }
}
function Cl(A, e, t) {
  var r = A.tag;
  if (r === 5 || r === 6)
    (A = A.stateNode),
      e
        ? t.nodeType === 8
          ? t.parentNode.insertBefore(A, e)
          : t.insertBefore(A, e)
        : (t.nodeType === 8
            ? ((e = t.parentNode), e.insertBefore(A, t))
            : ((e = t), e.appendChild(A)),
          (t = t._reactRootContainer),
          t != null || e.onclick !== null || (e.onclick = Gi));
  else if (r !== 4 && ((A = A.child), A !== null))
    for (Cl(A, e, t), A = A.sibling; A !== null; ) Cl(A, e, t), (A = A.sibling);
}
function Ul(A, e, t) {
  var r = A.tag;
  if (r === 5 || r === 6)
    (A = A.stateNode), e ? t.insertBefore(A, e) : t.appendChild(A);
  else if (r !== 4 && ((A = A.child), A !== null))
    for (Ul(A, e, t), A = A.sibling; A !== null; ) Ul(A, e, t), (A = A.sibling);
}
var wA = null,
  ue = !1;
function Re(A, e, t) {
  for (t = t.child; t !== null; ) tg(A, e, t), (t = t.sibling);
}
function tg(A, e, t) {
  if (Ue && typeof Ue.onCommitFiberUnmount == "function")
    try {
      Ue.onCommitFiberUnmount(gs, t);
    } catch {}
  switch (t.tag) {
    case 5:
      yA || $t(t, e);
    case 6:
      var r = wA,
        n = ue;
      (wA = null),
        Re(A, e, t),
        (wA = r),
        (ue = n),
        wA !== null &&
          (ue
            ? ((A = wA),
              (t = t.stateNode),
              A.nodeType === 8 ? A.parentNode.removeChild(t) : A.removeChild(t))
            : wA.removeChild(t.stateNode));
      break;
    case 18:
      wA !== null &&
        (ue
          ? ((A = wA),
            (t = t.stateNode),
            A.nodeType === 8
              ? eo(A.parentNode, t)
              : A.nodeType === 1 && eo(A, t),
            an(A))
          : eo(wA, t.stateNode));
      break;
    case 4:
      (r = wA),
        (n = ue),
        (wA = t.stateNode.containerInfo),
        (ue = !0),
        Re(A, e, t),
        (wA = r),
        (ue = n);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !yA &&
        ((r = t.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        n = r = r.next;
        do {
          var i = n,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && pl(t, e, s),
            (n = n.next);
        } while (n !== r);
      }
      Re(A, e, t);
      break;
    case 1:
      if (
        !yA &&
        ($t(t, e),
        (r = t.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = t.memoizedProps),
            (r.state = t.memoizedState),
            r.componentWillUnmount();
        } catch (o) {
          rA(t, e, o);
        }
      Re(A, e, t);
      break;
    case 21:
      Re(A, e, t);
      break;
    case 22:
      t.mode & 1
        ? ((yA = (r = yA) || t.memoizedState !== null), Re(A, e, t), (yA = r))
        : Re(A, e, t);
      break;
    default:
      Re(A, e, t);
  }
}
function zu(A) {
  var e = A.updateQueue;
  if (e !== null) {
    A.updateQueue = null;
    var t = A.stateNode;
    t === null && (t = A.stateNode = new Ih()),
      e.forEach(function (r) {
        var n = Mh.bind(null, A, r);
        t.has(r) || (t.add(r), r.then(n, n));
      });
  }
}
function oe(A, e) {
  var t = e.deletions;
  if (t !== null)
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      try {
        var i = A,
          s = e,
          o = s;
        A: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              (wA = o.stateNode), (ue = !1);
              break A;
            case 3:
              (wA = o.stateNode.containerInfo), (ue = !0);
              break A;
            case 4:
              (wA = o.stateNode.containerInfo), (ue = !0);
              break A;
          }
          o = o.return;
        }
        if (wA === null) throw Error(E(160));
        tg(i, s, n), (wA = null), (ue = !1);
        var l = n.alternate;
        l !== null && (l.return = null), (n.return = null);
      } catch (a) {
        rA(n, e, a);
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null; ) rg(e, A), (e = e.sibling);
}
function rg(A, e) {
  var t = A.alternate,
    r = A.flags;
  switch (A.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((oe(e, A), he(A), r & 4)) {
        try {
          jr(3, A, A.return), Fs(3, A);
        } catch (p) {
          rA(A, A.return, p);
        }
        try {
          jr(5, A, A.return);
        } catch (p) {
          rA(A, A.return, p);
        }
      }
      break;
    case 1:
      oe(e, A), he(A), r & 512 && t !== null && $t(t, t.return);
      break;
    case 5:
      if (
        (oe(e, A),
        he(A),
        r & 512 && t !== null && $t(t, t.return),
        A.flags & 32)
      ) {
        var n = A.stateNode;
        try {
          nn(n, "");
        } catch (p) {
          rA(A, A.return, p);
        }
      }
      if (r & 4 && ((n = A.stateNode), n != null)) {
        var i = A.memoizedProps,
          s = t !== null ? t.memoizedProps : i,
          o = A.type,
          l = A.updateQueue;
        if (((A.updateQueue = null), l !== null))
          try {
            o === "input" && i.type === "radio" && i.name != null && mB(n, i),
              Xo(o, s);
            var a = Xo(o, i);
            for (s = 0; s < l.length; s += 2) {
              var u = l[s],
                c = l[s + 1];
              u === "style"
                ? xB(n, c)
                : u === "dangerouslySetInnerHTML"
                ? HB(n, c)
                : u === "children"
                ? nn(n, c)
                : ea(n, u, c, a);
            }
            switch (o) {
              case "input":
                _o(n, i);
                break;
              case "textarea":
                yB(n, i);
                break;
              case "select":
                var f = n._wrapperState.wasMultiple;
                n._wrapperState.wasMultiple = !!i.multiple;
                var h = i.value;
                h != null
                  ? er(n, !!i.multiple, h, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? er(n, !!i.multiple, i.defaultValue, !0)
                      : er(n, !!i.multiple, i.multiple ? [] : "", !1));
            }
            n[gn] = i;
          } catch (p) {
            rA(A, A.return, p);
          }
      }
      break;
    case 6:
      if ((oe(e, A), he(A), r & 4)) {
        if (A.stateNode === null) throw Error(E(162));
        (n = A.stateNode), (i = A.memoizedProps);
        try {
          n.nodeValue = i;
        } catch (p) {
          rA(A, A.return, p);
        }
      }
      break;
    case 3:
      if (
        (oe(e, A), he(A), r & 4 && t !== null && t.memoizedState.isDehydrated)
      )
        try {
          an(e.containerInfo);
        } catch (p) {
          rA(A, A.return, p);
        }
      break;
    case 4:
      oe(e, A), he(A);
      break;
    case 13:
      oe(e, A),
        he(A),
        (n = A.child),
        n.flags & 8192 &&
          ((i = n.memoizedState !== null),
          (n.stateNode.isHidden = i),
          !i ||
            (n.alternate !== null && n.alternate.memoizedState !== null) ||
            (Ta = sA())),
        r & 4 && zu(A);
      break;
    case 22:
      if (
        ((u = t !== null && t.memoizedState !== null),
        A.mode & 1 ? ((yA = (a = yA) || u), oe(e, A), (yA = a)) : oe(e, A),
        he(A),
        r & 8192)
      ) {
        if (
          ((a = A.memoizedState !== null),
          (A.stateNode.isHidden = a) && !u && A.mode & 1)
        )
          for (K = A, u = A.child; u !== null; ) {
            for (c = K = u; K !== null; ) {
              switch (((f = K), (h = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  jr(4, f, f.return);
                  break;
                case 1:
                  $t(f, f.return);
                  var w = f.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = f), (t = f.return);
                    try {
                      (e = r),
                        (w.props = e.memoizedProps),
                        (w.state = e.memoizedState),
                        w.componentWillUnmount();
                    } catch (p) {
                      rA(r, t, p);
                    }
                  }
                  break;
                case 5:
                  $t(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    $u(c);
                    continue;
                  }
              }
              h !== null ? ((h.return = f), (K = h)) : $u(c);
            }
            u = u.sibling;
          }
        A: for (u = null, c = A; ; ) {
          if (c.tag === 5) {
            if (u === null) {
              u = c;
              try {
                (n = c.stateNode),
                  a
                    ? ((i = n.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((o = c.stateNode),
                      (l = c.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (o.style.display = IB("display", s)));
              } catch (p) {
                rA(A, A.return, p);
              }
            }
          } else if (c.tag === 6) {
            if (u === null)
              try {
                c.stateNode.nodeValue = a ? "" : c.memoizedProps;
              } catch (p) {
                rA(A, A.return, p);
              }
          } else if (
            ((c.tag !== 22 && c.tag !== 23) ||
              c.memoizedState === null ||
              c === A) &&
            c.child !== null
          ) {
            (c.child.return = c), (c = c.child);
            continue;
          }
          if (c === A) break A;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === A) break A;
            u === c && (u = null), (c = c.return);
          }
          u === c && (u = null), (c.sibling.return = c.return), (c = c.sibling);
        }
      }
      break;
    case 19:
      oe(e, A), he(A), r & 4 && zu(A);
      break;
    case 21:
      break;
    default:
      oe(e, A), he(A);
  }
}
function he(A) {
  var e = A.flags;
  if (e & 2) {
    try {
      A: {
        for (var t = A.return; t !== null; ) {
          if (eg(t)) {
            var r = t;
            break A;
          }
          t = t.return;
        }
        throw Error(E(160));
      }
      switch (r.tag) {
        case 5:
          var n = r.stateNode;
          r.flags & 32 && (nn(n, ""), (r.flags &= -33));
          var i = ju(A);
          Ul(A, i, n);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            o = ju(A);
          Cl(A, o, s);
          break;
        default:
          throw Error(E(161));
      }
    } catch (l) {
      rA(A, A.return, l);
    }
    A.flags &= -3;
  }
  e & 4096 && (A.flags &= -4097);
}
function Sh(A, e, t) {
  (K = A), ng(A);
}
function ng(A, e, t) {
  for (var r = (A.mode & 1) !== 0; K !== null; ) {
    var n = K,
      i = n.child;
    if (n.tag === 22 && r) {
      var s = n.memoizedState !== null || Xn;
      if (!s) {
        var o = n.alternate,
          l = (o !== null && o.memoizedState !== null) || yA;
        o = Xn;
        var a = yA;
        if (((Xn = s), (yA = l) && !a))
          for (K = n; K !== null; )
            (s = K),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? qu(n)
                : l !== null
                ? ((l.return = s), (K = l))
                : qu(n);
        for (; i !== null; ) (K = i), ng(i), (i = i.sibling);
        (K = n), (Xn = o), (yA = a);
      }
      Zu(A);
    } else
      n.subtreeFlags & 8772 && i !== null ? ((i.return = n), (K = i)) : Zu(A);
  }
}
function Zu(A) {
  for (; K !== null; ) {
    var e = K;
    if (e.flags & 8772) {
      var t = e.alternate;
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              yA || Fs(5, e);
              break;
            case 1:
              var r = e.stateNode;
              if (e.flags & 4 && !yA)
                if (t === null) r.componentDidMount();
                else {
                  var n =
                    e.elementType === e.type
                      ? t.memoizedProps
                      : ae(e.type, t.memoizedProps);
                  r.componentDidUpdate(
                    n,
                    t.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = e.updateQueue;
              i !== null && ku(e, i, r);
              break;
            case 3:
              var s = e.updateQueue;
              if (s !== null) {
                if (((t = null), e.child !== null))
                  switch (e.child.tag) {
                    case 5:
                      t = e.child.stateNode;
                      break;
                    case 1:
                      t = e.child.stateNode;
                  }
                ku(e, s, t);
              }
              break;
            case 5:
              var o = e.stateNode;
              if (t === null && e.flags & 4) {
                t = o;
                var l = e.memoizedProps;
                switch (e.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && t.focus();
                    break;
                  case "img":
                    l.src && (t.src = l.src);
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
              if (e.memoizedState === null) {
                var a = e.alternate;
                if (a !== null) {
                  var u = a.memoizedState;
                  if (u !== null) {
                    var c = u.dehydrated;
                    c !== null && an(c);
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
              throw Error(E(163));
          }
        yA || (e.flags & 512 && Ql(e));
      } catch (f) {
        rA(e, e.return, f);
      }
    }
    if (e === A) {
      K = null;
      break;
    }
    if (((t = e.sibling), t !== null)) {
      (t.return = e.return), (K = t);
      break;
    }
    K = e.return;
  }
}
function $u(A) {
  for (; K !== null; ) {
    var e = K;
    if (e === A) {
      K = null;
      break;
    }
    var t = e.sibling;
    if (t !== null) {
      (t.return = e.return), (K = t);
      break;
    }
    K = e.return;
  }
}
function qu(A) {
  for (; K !== null; ) {
    var e = K;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var t = e.return;
          try {
            Fs(4, e);
          } catch (l) {
            rA(e, t, l);
          }
          break;
        case 1:
          var r = e.stateNode;
          if (typeof r.componentDidMount == "function") {
            var n = e.return;
            try {
              r.componentDidMount();
            } catch (l) {
              rA(e, n, l);
            }
          }
          var i = e.return;
          try {
            Ql(e);
          } catch (l) {
            rA(e, i, l);
          }
          break;
        case 5:
          var s = e.return;
          try {
            Ql(e);
          } catch (l) {
            rA(e, s, l);
          }
      }
    } catch (l) {
      rA(e, e.return, l);
    }
    if (e === A) {
      K = null;
      break;
    }
    var o = e.sibling;
    if (o !== null) {
      (o.return = e.return), (K = o);
      break;
    }
    K = e.return;
  }
}
var Lh = Math.ceil,
  $i = Me.ReactCurrentDispatcher,
  Ka = Me.ReactCurrentOwner,
  ne = Me.ReactCurrentBatchConfig,
  M = 0,
  dA = null,
  aA = null,
  QA = 0,
  XA = 0,
  qt = Bt(0),
  BA = 0,
  Cn = null,
  xt = 0,
  vs = 0,
  Da = 0,
  zr = null,
  MA = null,
  Ta = 0,
  gr = 1 / 0,
  He = null,
  qi = !1,
  Fl = null,
  rt = null,
  Wn = !1,
  Ye = null,
  As = 0,
  Zr = 0,
  vl = null,
  Ei = -1,
  Hi = 0;
function LA() {
  return M & 6 ? sA() : Ei !== -1 ? Ei : (Ei = sA());
}
function nt(A) {
  return A.mode & 1
    ? M & 2 && QA !== 0
      ? QA & -QA
      : gh.transition !== null
      ? (Hi === 0 && (Hi = GB()), Hi)
      : ((A = V),
        A !== 0 || ((A = window.event), (A = A === void 0 ? 16 : YB(A.type))),
        A)
    : 1;
}
function fe(A, e, t, r) {
  if (50 < Zr) throw ((Zr = 0), (vl = null), Error(E(185)));
  yn(A, t, r),
    (!(M & 2) || A !== dA) &&
      (A === dA && (!(M & 2) && (vs |= t), BA === 4 && We(A, QA)),
      VA(A, r),
      t === 1 && M === 0 && !(e.mode & 1) && ((gr = sA() + 500), Qs && ft()));
}
function VA(A, e) {
  var t = A.callbackNode;
  gw(A, e);
  var r = Ni(A, A === dA ? QA : 0);
  if (r === 0)
    t !== null && lu(t), (A.callbackNode = null), (A.callbackPriority = 0);
  else if (((e = r & -r), A.callbackPriority !== e)) {
    if ((t != null && lu(t), e === 1))
      A.tag === 0 ? fh(Ac.bind(null, A)) : gf(Ac.bind(null, A)),
        ah(function () {
          !(M & 6) && ft();
        }),
        (t = null);
    else {
      switch (VB(r)) {
        case 1:
          t = sa;
          break;
        case 4:
          t = RB;
          break;
        case 16:
          t = Oi;
          break;
        case 536870912:
          t = _B;
          break;
        default:
          t = Oi;
      }
      t = Bg(t, ig.bind(null, A));
    }
    (A.callbackPriority = e), (A.callbackNode = t);
  }
}
function ig(A, e) {
  if (((Ei = -1), (Hi = 0), M & 6)) throw Error(E(327));
  var t = A.callbackNode;
  if (sr() && A.callbackNode !== t) return null;
  var r = Ni(A, A === dA ? QA : 0);
  if (r === 0) return null;
  if (r & 30 || r & A.expiredLanes || e) e = es(A, r);
  else {
    e = r;
    var n = M;
    M |= 2;
    var i = og();
    (dA !== A || QA !== e) && ((He = null), (gr = sA() + 500), Ft(A, e));
    do
      try {
        Th();
        break;
      } catch (o) {
        sg(A, o);
      }
    while (!0);
    Qa(),
      ($i.current = i),
      (M = n),
      aA !== null ? (e = 0) : ((dA = null), (QA = 0), (e = BA));
  }
  if (e !== 0) {
    if (
      (e === 2 && ((n = zo(A)), n !== 0 && ((r = n), (e = ml(A, n)))), e === 1)
    )
      throw ((t = Cn), Ft(A, 0), We(A, r), VA(A, sA()), t);
    if (e === 6) We(A, r);
    else {
      if (
        ((n = A.current.alternate),
        !(r & 30) &&
          !Kh(n) &&
          ((e = es(A, r)),
          e === 2 && ((i = zo(A)), i !== 0 && ((r = i), (e = ml(A, i)))),
          e === 1))
      )
        throw ((t = Cn), Ft(A, 0), We(A, r), VA(A, sA()), t);
      switch (((A.finishedWork = n), (A.finishedLanes = r), e)) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          wt(A, MA, He);
          break;
        case 3:
          if (
            (We(A, r), (r & 130023424) === r && ((e = Ta + 500 - sA()), 10 < e))
          ) {
            if (Ni(A, 0) !== 0) break;
            if (((n = A.suspendedLanes), (n & r) !== r)) {
              LA(), (A.pingedLanes |= A.suspendedLanes & n);
              break;
            }
            A.timeoutHandle = nl(wt.bind(null, A, MA, He), e);
            break;
          }
          wt(A, MA, He);
          break;
        case 4:
          if ((We(A, r), (r & 4194240) === r)) break;
          for (e = A.eventTimes, n = -1; 0 < r; ) {
            var s = 31 - Be(r);
            (i = 1 << s), (s = e[s]), s > n && (n = s), (r &= ~i);
          }
          if (
            ((r = n),
            (r = sA() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Lh(r / 1960)) - r),
            10 < r)
          ) {
            A.timeoutHandle = nl(wt.bind(null, A, MA, He), r);
            break;
          }
          wt(A, MA, He);
          break;
        case 5:
          wt(A, MA, He);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return VA(A, sA()), A.callbackNode === t ? ig.bind(null, A) : null;
}
function ml(A, e) {
  var t = zr;
  return (
    A.current.memoizedState.isDehydrated && (Ft(A, e).flags |= 256),
    (A = es(A, e)),
    A !== 2 && ((e = MA), (MA = t), e !== null && yl(e)),
    A
  );
}
function yl(A) {
  MA === null ? (MA = A) : MA.push.apply(MA, A);
}
function Kh(A) {
  for (var e = A; ; ) {
    if (e.flags & 16384) {
      var t = e.updateQueue;
      if (t !== null && ((t = t.stores), t !== null))
        for (var r = 0; r < t.length; r++) {
          var n = t[r],
            i = n.getSnapshot;
          n = n.value;
          try {
            if (!ge(i(), n)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((t = e.child), e.subtreeFlags & 16384 && t !== null))
      (t.return = e), (e = t);
    else {
      if (e === A) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === A) return !0;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
  }
  return !0;
}
function We(A, e) {
  for (
    e &= ~Da,
      e &= ~vs,
      A.suspendedLanes |= e,
      A.pingedLanes &= ~e,
      A = A.expirationTimes;
    0 < e;

  ) {
    var t = 31 - Be(e),
      r = 1 << t;
    (A[t] = -1), (e &= ~r);
  }
}
function Ac(A) {
  if (M & 6) throw Error(E(327));
  sr();
  var e = Ni(A, 0);
  if (!(e & 1)) return VA(A, sA()), null;
  var t = es(A, e);
  if (A.tag !== 0 && t === 2) {
    var r = zo(A);
    r !== 0 && ((e = r), (t = ml(A, r)));
  }
  if (t === 1) throw ((t = Cn), Ft(A, 0), We(A, e), VA(A, sA()), t);
  if (t === 6) throw Error(E(345));
  return (
    (A.finishedWork = A.current.alternate),
    (A.finishedLanes = e),
    wt(A, MA, He),
    VA(A, sA()),
    null
  );
}
function ka(A, e) {
  var t = M;
  M |= 1;
  try {
    return A(e);
  } finally {
    (M = t), M === 0 && ((gr = sA() + 500), Qs && ft());
  }
}
function St(A) {
  Ye !== null && Ye.tag === 0 && !(M & 6) && sr();
  var e = M;
  M |= 1;
  var t = ne.transition,
    r = V;
  try {
    if (((ne.transition = null), (V = 1), A)) return A();
  } finally {
    (V = r), (ne.transition = t), (M = e), !(M & 6) && ft();
  }
}
function Oa() {
  (XA = qt.current), j(qt);
}
function Ft(A, e) {
  (A.finishedWork = null), (A.finishedLanes = 0);
  var t = A.timeoutHandle;
  if ((t !== -1 && ((A.timeoutHandle = -1), lh(t)), aA !== null))
    for (t = aA.return; t !== null; ) {
      var r = t;
      switch ((wa(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Vi();
          break;
        case 3:
          Br(), j(_A), j(EA), ya();
          break;
        case 5:
          ma(r);
          break;
        case 4:
          Br();
          break;
        case 13:
          j(q);
          break;
        case 19:
          j(q);
          break;
        case 10:
          Ca(r.type._context);
          break;
        case 22:
        case 23:
          Oa();
      }
      t = t.return;
    }
  if (
    ((dA = A),
    (aA = A = it(A.current, null)),
    (QA = XA = e),
    (BA = 0),
    (Cn = null),
    (Da = vs = xt = 0),
    (MA = zr = null),
    Qt !== null)
  ) {
    for (e = 0; e < Qt.length; e++)
      if (((t = Qt[e]), (r = t.interleaved), r !== null)) {
        t.interleaved = null;
        var n = r.next,
          i = t.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = n), (r.next = s);
        }
        t.pending = r;
      }
    Qt = null;
  }
  return A;
}
function sg(A, e) {
  do {
    var t = aA;
    try {
      if ((Qa(), (vi.current = Zi), zi)) {
        for (var r = AA.memoizedState; r !== null; ) {
          var n = r.queue;
          n !== null && (n.pending = null), (r = r.next);
        }
        zi = !1;
      }
      if (
        ((It = 0),
        (gA = uA = AA = null),
        (Yr = !1),
        (hn = 0),
        (Ka.current = null),
        t === null || t.return === null)
      ) {
        (BA = 1), (Cn = e), (aA = null);
        break;
      }
      A: {
        var i = A,
          s = t.return,
          o = t,
          l = e;
        if (
          ((e = QA),
          (o.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var a = l,
            u = o,
            c = u.tag;
          if (!(u.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var f = u.alternate;
            f
              ? ((u.updateQueue = f.updateQueue),
                (u.memoizedState = f.memoizedState),
                (u.lanes = f.lanes))
              : ((u.updateQueue = null), (u.memoizedState = null));
          }
          var h = Gu(s);
          if (h !== null) {
            (h.flags &= -257),
              Vu(h, s, o, i, e),
              h.mode & 1 && _u(i, a, e),
              (e = h),
              (l = a);
            var w = e.updateQueue;
            if (w === null) {
              var p = new Set();
              p.add(l), (e.updateQueue = p);
            } else w.add(l);
            break A;
          } else {
            if (!(e & 1)) {
              _u(i, a, e), Na();
              break A;
            }
            l = Error(E(426));
          }
        } else if ($ && o.mode & 1) {
          var x = Gu(s);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              Vu(x, s, o, i, e),
              ha(fr(l, o));
            break A;
          }
        }
        (i = l = fr(l, o)),
          BA !== 4 && (BA = 2),
          zr === null ? (zr = [i]) : zr.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (e &= -e), (i.lanes |= e);
              var g = Pf(i, l, e);
              Tu(i, g);
              break A;
            case 1:
              o = l;
              var B = i.type,
                d = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof B.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (rt === null || !rt.has(d))))
              ) {
                (i.flags |= 65536), (e &= -e), (i.lanes |= e);
                var Q = bf(i, o, e);
                Tu(i, Q);
                break A;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      ag(t);
    } catch (U) {
      (e = U), aA === t && t !== null && (aA = t = t.return);
      continue;
    }
    break;
  } while (!0);
}
function og() {
  var A = $i.current;
  return ($i.current = Zi), A === null ? Zi : A;
}
function Na() {
  (BA === 0 || BA === 3 || BA === 2) && (BA = 4),
    dA === null || (!(xt & 268435455) && !(vs & 268435455)) || We(dA, QA);
}
function es(A, e) {
  var t = M;
  M |= 2;
  var r = og();
  (dA !== A || QA !== e) && ((He = null), Ft(A, e));
  do
    try {
      Dh();
      break;
    } catch (n) {
      sg(A, n);
    }
  while (!0);
  if ((Qa(), (M = t), ($i.current = r), aA !== null)) throw Error(E(261));
  return (dA = null), (QA = 0), BA;
}
function Dh() {
  for (; aA !== null; ) lg(aA);
}
function Th() {
  for (; aA !== null && !iw(); ) lg(aA);
}
function lg(A) {
  var e = cg(A.alternate, A, XA);
  (A.memoizedProps = A.pendingProps),
    e === null ? ag(A) : (aA = e),
    (Ka.current = null);
}
function ag(A) {
  var e = A;
  do {
    var t = e.alternate;
    if (((A = e.return), e.flags & 32768)) {
      if (((t = Hh(t, e)), t !== null)) {
        (t.flags &= 32767), (aA = t);
        return;
      }
      if (A !== null)
        (A.flags |= 32768), (A.subtreeFlags = 0), (A.deletions = null);
      else {
        (BA = 6), (aA = null);
        return;
      }
    } else if (((t = Eh(t, e, XA)), t !== null)) {
      aA = t;
      return;
    }
    if (((e = e.sibling), e !== null)) {
      aA = e;
      return;
    }
    aA = e = A;
  } while (e !== null);
  BA === 0 && (BA = 5);
}
function wt(A, e, t) {
  var r = V,
    n = ne.transition;
  try {
    (ne.transition = null), (V = 1), kh(A, e, t, r);
  } finally {
    (ne.transition = n), (V = r);
  }
  return null;
}
function kh(A, e, t, r) {
  do sr();
  while (Ye !== null);
  if (M & 6) throw Error(E(327));
  t = A.finishedWork;
  var n = A.finishedLanes;
  if (t === null) return null;
  if (((A.finishedWork = null), (A.finishedLanes = 0), t === A.current))
    throw Error(E(177));
  (A.callbackNode = null), (A.callbackPriority = 0);
  var i = t.lanes | t.childLanes;
  if (
    (dw(A, i),
    A === dA && ((aA = dA = null), (QA = 0)),
    (!(t.subtreeFlags & 2064) && !(t.flags & 2064)) ||
      Wn ||
      ((Wn = !0),
      Bg(Oi, function () {
        return sr(), null;
      })),
    (i = (t.flags & 15990) !== 0),
    t.subtreeFlags & 15990 || i)
  ) {
    (i = ne.transition), (ne.transition = null);
    var s = V;
    V = 1;
    var o = M;
    (M |= 4),
      (Ka.current = null),
      xh(A, t),
      rg(t, A),
      eh(tl),
      (Mi = !!el),
      (tl = el = null),
      (A.current = t),
      Sh(t),
      sw(),
      (M = o),
      (V = s),
      (ne.transition = i);
  } else A.current = t;
  if (
    (Wn && ((Wn = !1), (Ye = A), (As = n)),
    (i = A.pendingLanes),
    i === 0 && (rt = null),
    aw(t.stateNode),
    VA(A, sA()),
    e !== null)
  )
    for (r = A.onRecoverableError, t = 0; t < e.length; t++)
      (n = e[t]), r(n.value, { componentStack: n.stack, digest: n.digest });
  if (qi) throw ((qi = !1), (A = Fl), (Fl = null), A);
  return (
    As & 1 && A.tag !== 0 && sr(),
    (i = A.pendingLanes),
    i & 1 ? (A === vl ? Zr++ : ((Zr = 0), (vl = A))) : (Zr = 0),
    ft(),
    null
  );
}
function sr() {
  if (Ye !== null) {
    var A = VB(As),
      e = ne.transition,
      t = V;
    try {
      if (((ne.transition = null), (V = 16 > A ? 16 : A), Ye === null))
        var r = !1;
      else {
        if (((A = Ye), (Ye = null), (As = 0), M & 6)) throw Error(E(331));
        var n = M;
        for (M |= 4, K = A.current; K !== null; ) {
          var i = K,
            s = i.child;
          if (K.flags & 16) {
            var o = i.deletions;
            if (o !== null) {
              for (var l = 0; l < o.length; l++) {
                var a = o[l];
                for (K = a; K !== null; ) {
                  var u = K;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      jr(8, u, i);
                  }
                  var c = u.child;
                  if (c !== null) (c.return = u), (K = c);
                  else
                    for (; K !== null; ) {
                      u = K;
                      var f = u.sibling,
                        h = u.return;
                      if ((Ag(u), u === a)) {
                        K = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = h), (K = f);
                        break;
                      }
                      K = h;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var p = w.child;
                if (p !== null) {
                  w.child = null;
                  do {
                    var x = p.sibling;
                    (p.sibling = null), (p = x);
                  } while (p !== null);
                }
              }
              K = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (K = s);
          else
            A: for (; K !== null; ) {
              if (((i = K), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    jr(9, i, i.return);
                }
              var g = i.sibling;
              if (g !== null) {
                (g.return = i.return), (K = g);
                break A;
              }
              K = i.return;
            }
        }
        var B = A.current;
        for (K = B; K !== null; ) {
          s = K;
          var d = s.child;
          if (s.subtreeFlags & 2064 && d !== null) (d.return = s), (K = d);
          else
            A: for (s = B; K !== null; ) {
              if (((o = K), o.flags & 2048))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Fs(9, o);
                  }
                } catch (U) {
                  rA(o, o.return, U);
                }
              if (o === s) {
                K = null;
                break A;
              }
              var Q = o.sibling;
              if (Q !== null) {
                (Q.return = o.return), (K = Q);
                break A;
              }
              K = o.return;
            }
        }
        if (
          ((M = n), ft(), Ue && typeof Ue.onPostCommitFiberRoot == "function")
        )
          try {
            Ue.onPostCommitFiberRoot(gs, A);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (V = t), (ne.transition = e);
    }
  }
  return !1;
}
function ec(A, e, t) {
  (e = fr(t, e)),
    (e = Pf(A, e, 1)),
    (A = tt(A, e, 1)),
    (e = LA()),
    A !== null && (yn(A, 1, e), VA(A, e));
}
function rA(A, e, t) {
  if (A.tag === 3) ec(A, A, t);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        ec(e, A, t);
        break;
      } else if (e.tag === 1) {
        var r = e.stateNode;
        if (
          typeof e.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (rt === null || !rt.has(r)))
        ) {
          (A = fr(t, A)),
            (A = bf(e, A, 1)),
            (e = tt(e, A, 1)),
            (A = LA()),
            e !== null && (yn(e, 1, A), VA(e, A));
          break;
        }
      }
      e = e.return;
    }
}
function Oh(A, e, t) {
  var r = A.pingCache;
  r !== null && r.delete(e),
    (e = LA()),
    (A.pingedLanes |= A.suspendedLanes & t),
    dA === A &&
      (QA & t) === t &&
      (BA === 4 || (BA === 3 && (QA & 130023424) === QA && 500 > sA() - Ta)
        ? Ft(A, 0)
        : (Da |= t)),
    VA(A, e);
}
function ug(A, e) {
  e === 0 &&
    (A.mode & 1
      ? ((e = On), (On <<= 1), !(On & 130023424) && (On = 4194304))
      : (e = 1));
  var t = LA();
  (A = ke(A, e)), A !== null && (yn(A, e, t), VA(A, t));
}
function Nh(A) {
  var e = A.memoizedState,
    t = 0;
  e !== null && (t = e.retryLane), ug(A, t);
}
function Mh(A, e) {
  var t = 0;
  switch (A.tag) {
    case 13:
      var r = A.stateNode,
        n = A.memoizedState;
      n !== null && (t = n.retryLane);
      break;
    case 19:
      r = A.stateNode;
      break;
    default:
      throw Error(E(314));
  }
  r !== null && r.delete(e), ug(A, t);
}
var cg;
cg = function (A, e, t) {
  if (A !== null)
    if (A.memoizedProps !== e.pendingProps || _A.current) RA = !0;
    else {
      if (!(A.lanes & t) && !(e.flags & 128)) return (RA = !1), yh(A, e, t);
      RA = !!(A.flags & 131072);
    }
  else (RA = !1), $ && e.flags & 1048576 && df(e, Xi, e.index);
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var r = e.type;
      yi(A, e), (A = e.pendingProps);
      var n = ar(e, EA.current);
      ir(e, t), (n = Ha(null, e, r, A, n, t));
      var i = Ia();
      return (
        (e.flags |= 1),
        typeof n == "object" &&
        n !== null &&
        typeof n.render == "function" &&
        n.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            GA(r) ? ((i = !0), Pi(e)) : (i = !1),
            (e.memoizedState =
              n.state !== null && n.state !== void 0 ? n.state : null),
            Fa(e),
            (n.updater = Us),
            (e.stateNode = n),
            (n._reactInternals = e),
            cl(e, r, A, t),
            (e = gl(null, e, r, !0, i, t)))
          : ((e.tag = 0), $ && i && da(e), xA(null, e, n, t), (e = e.child)),
        e
      );
    case 16:
      r = e.elementType;
      A: {
        switch (
          (yi(A, e),
          (A = e.pendingProps),
          (n = r._init),
          (r = n(r._payload)),
          (e.type = r),
          (n = e.tag = _h(r)),
          (A = ae(r, A)),
          n)
        ) {
          case 0:
            e = fl(null, e, r, A, t);
            break A;
          case 1:
            e = Xu(null, e, r, A, t);
            break A;
          case 11:
            e = Pu(null, e, r, A, t);
            break A;
          case 14:
            e = bu(null, e, r, ae(r.type, A), t);
            break A;
        }
        throw Error(E(306, r, ""));
      }
      return e;
    case 0:
      return (
        (r = e.type),
        (n = e.pendingProps),
        (n = e.elementType === r ? n : ae(r, n)),
        fl(A, e, r, n, t)
      );
    case 1:
      return (
        (r = e.type),
        (n = e.pendingProps),
        (n = e.elementType === r ? n : ae(r, n)),
        Xu(A, e, r, n, t)
      );
    case 3:
      A: {
        if ((Yf(e), A === null)) throw Error(E(387));
        (r = e.pendingProps),
          (i = e.memoizedState),
          (n = i.element),
          Uf(A, e),
          Yi(e, r, null, t);
        var s = e.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (e.updateQueue.baseState = i),
            (e.memoizedState = i),
            e.flags & 256)
          ) {
            (n = fr(Error(E(423)), e)), (e = Wu(A, e, r, t, n));
            break A;
          } else if (r !== n) {
            (n = fr(Error(E(424)), e)), (e = Wu(A, e, r, t, n));
            break A;
          } else
            for (
              WA = et(e.stateNode.containerInfo.firstChild),
                JA = e,
                $ = !0,
                ce = null,
                t = Qf(e, null, r, t),
                e.child = t;
              t;

            )
              (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
        else {
          if ((ur(), r === n)) {
            e = Oe(A, e, t);
            break A;
          }
          xA(A, e, r, t);
        }
        e = e.child;
      }
      return e;
    case 5:
      return (
        Ff(e),
        A === null && ll(e),
        (r = e.type),
        (n = e.pendingProps),
        (i = A !== null ? A.memoizedProps : null),
        (s = n.children),
        rl(r, n) ? (s = null) : i !== null && rl(r, i) && (e.flags |= 32),
        Jf(A, e),
        xA(A, e, s, t),
        e.child
      );
    case 6:
      return A === null && ll(e), null;
    case 13:
      return jf(A, e, t);
    case 4:
      return (
        va(e, e.stateNode.containerInfo),
        (r = e.pendingProps),
        A === null ? (e.child = cr(e, null, r, t)) : xA(A, e, r, t),
        e.child
      );
    case 11:
      return (
        (r = e.type),
        (n = e.pendingProps),
        (n = e.elementType === r ? n : ae(r, n)),
        Pu(A, e, r, n, t)
      );
    case 7:
      return xA(A, e, e.pendingProps, t), e.child;
    case 8:
      return xA(A, e, e.pendingProps.children, t), e.child;
    case 12:
      return xA(A, e, e.pendingProps.children, t), e.child;
    case 10:
      A: {
        if (
          ((r = e.type._context),
          (n = e.pendingProps),
          (i = e.memoizedProps),
          (s = n.value),
          J(Wi, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (ge(i.value, s)) {
            if (i.children === n.children && !_A.current) {
              e = Oe(A, e, t);
              break A;
            }
          } else
            for (i = e.child, i !== null && (i.return = e); i !== null; ) {
              var o = i.dependencies;
              if (o !== null) {
                s = i.child;
                for (var l = o.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = Le(-1, t & -t)), (l.tag = 2);
                      var a = i.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var u = a.pending;
                        u === null
                          ? (l.next = l)
                          : ((l.next = u.next), (u.next = l)),
                          (a.pending = l);
                      }
                    }
                    (i.lanes |= t),
                      (l = i.alternate),
                      l !== null && (l.lanes |= t),
                      al(i.return, t, e),
                      (o.lanes |= t);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) s = i.type === e.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(E(341));
                (s.lanes |= t),
                  (o = s.alternate),
                  o !== null && (o.lanes |= t),
                  al(s, t, e),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === e) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        xA(A, e, n.children, t), (e = e.child);
      }
      return e;
    case 9:
      return (
        (n = e.type),
        (r = e.pendingProps.children),
        ir(e, t),
        (n = ie(n)),
        (r = r(n)),
        (e.flags |= 1),
        xA(A, e, r, t),
        e.child
      );
    case 14:
      return (
        (r = e.type),
        (n = ae(r, e.pendingProps)),
        (n = ae(r.type, n)),
        bu(A, e, r, n, t)
      );
    case 15:
      return Xf(A, e, e.type, e.pendingProps, t);
    case 17:
      return (
        (r = e.type),
        (n = e.pendingProps),
        (n = e.elementType === r ? n : ae(r, n)),
        yi(A, e),
        (e.tag = 1),
        GA(r) ? ((A = !0), Pi(e)) : (A = !1),
        ir(e, t),
        Vf(e, r, n),
        cl(e, r, n, t),
        gl(null, e, r, !0, A, t)
      );
    case 19:
      return zf(A, e, t);
    case 22:
      return Wf(A, e, t);
  }
  throw Error(E(156, e.tag));
};
function Bg(A, e) {
  return MB(A, e);
}
function Rh(A, e, t, r) {
  (this.tag = A),
    (this.key = t),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = e),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ee(A, e, t, r) {
  return new Rh(A, e, t, r);
}
function Ma(A) {
  return (A = A.prototype), !(!A || !A.isReactComponent);
}
function _h(A) {
  if (typeof A == "function") return Ma(A) ? 1 : 0;
  if (A != null) {
    if (((A = A.$$typeof), A === ra)) return 11;
    if (A === na) return 14;
  }
  return 2;
}
function it(A, e) {
  var t = A.alternate;
  return (
    t === null
      ? ((t = ee(A.tag, e, A.key, A.mode)),
        (t.elementType = A.elementType),
        (t.type = A.type),
        (t.stateNode = A.stateNode),
        (t.alternate = A),
        (A.alternate = t))
      : ((t.pendingProps = e),
        (t.type = A.type),
        (t.flags = 0),
        (t.subtreeFlags = 0),
        (t.deletions = null)),
    (t.flags = A.flags & 14680064),
    (t.childLanes = A.childLanes),
    (t.lanes = A.lanes),
    (t.child = A.child),
    (t.memoizedProps = A.memoizedProps),
    (t.memoizedState = A.memoizedState),
    (t.updateQueue = A.updateQueue),
    (e = A.dependencies),
    (t.dependencies =
      e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
    (t.sibling = A.sibling),
    (t.index = A.index),
    (t.ref = A.ref),
    t
  );
}
function Ii(A, e, t, r, n, i) {
  var s = 2;
  if (((r = A), typeof A == "function")) Ma(A) && (s = 1);
  else if (typeof A == "string") s = 5;
  else
    A: switch (A) {
      case Pt:
        return vt(t.children, n, i, e);
      case ta:
        (s = 8), (n |= 8);
        break;
      case ko:
        return (
          (A = ee(12, t, e, n | 2)), (A.elementType = ko), (A.lanes = i), A
        );
      case Oo:
        return (A = ee(13, t, e, n)), (A.elementType = Oo), (A.lanes = i), A;
      case No:
        return (A = ee(19, t, e, n)), (A.elementType = No), (A.lanes = i), A;
      case UB:
        return ms(t, n, i, e);
      default:
        if (typeof A == "object" && A !== null)
          switch (A.$$typeof) {
            case QB:
              s = 10;
              break A;
            case CB:
              s = 9;
              break A;
            case ra:
              s = 11;
              break A;
            case na:
              s = 14;
              break A;
            case Ve:
              (s = 16), (r = null);
              break A;
          }
        throw Error(E(130, A == null ? A : typeof A, ""));
    }
  return (
    (e = ee(s, t, e, n)), (e.elementType = A), (e.type = r), (e.lanes = i), e
  );
}
function vt(A, e, t, r) {
  return (A = ee(7, A, r, e)), (A.lanes = t), A;
}
function ms(A, e, t, r) {
  return (
    (A = ee(22, A, r, e)),
    (A.elementType = UB),
    (A.lanes = t),
    (A.stateNode = { isHidden: !1 }),
    A
  );
}
function ao(A, e, t) {
  return (A = ee(6, A, null, e)), (A.lanes = t), A;
}
function uo(A, e, t) {
  return (
    (e = ee(4, A.children !== null ? A.children : [], A.key, e)),
    (e.lanes = t),
    (e.stateNode = {
      containerInfo: A.containerInfo,
      pendingChildren: null,
      implementation: A.implementation,
    }),
    e
  );
}
function Gh(A, e, t, r, n) {
  (this.tag = e),
    (this.containerInfo = A),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = bs(0)),
    (this.expirationTimes = bs(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = bs(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = n),
    (this.mutableSourceEagerHydrationData = null);
}
function Ra(A, e, t, r, n, i, s, o, l) {
  return (
    (A = new Gh(A, e, t, o, l)),
    e === 1 ? ((e = 1), i === !0 && (e |= 8)) : (e = 0),
    (i = ee(3, null, null, e)),
    (A.current = i),
    (i.stateNode = A),
    (i.memoizedState = {
      element: r,
      isDehydrated: t,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Fa(i),
    A
  );
}
function Vh(A, e, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Vt,
    key: r == null ? null : "" + r,
    children: A,
    containerInfo: e,
    implementation: t,
  };
}
function fg(A) {
  if (!A) return at;
  A = A._reactInternals;
  A: {
    if (Kt(A) !== A || A.tag !== 1) throw Error(E(170));
    var e = A;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break A;
        case 1:
          if (GA(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break A;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(E(171));
  }
  if (A.tag === 1) {
    var t = A.type;
    if (GA(t)) return ff(A, t, e);
  }
  return e;
}
function gg(A, e, t, r, n, i, s, o, l) {
  return (
    (A = Ra(t, r, !0, A, n, i, s, o, l)),
    (A.context = fg(null)),
    (t = A.current),
    (r = LA()),
    (n = nt(t)),
    (i = Le(r, n)),
    (i.callback = e ?? null),
    tt(t, i, n),
    (A.current.lanes = n),
    yn(A, n, r),
    VA(A, r),
    A
  );
}
function ys(A, e, t, r) {
  var n = e.current,
    i = LA(),
    s = nt(n);
  return (
    (t = fg(t)),
    e.context === null ? (e.context = t) : (e.pendingContext = t),
    (e = Le(i, s)),
    (e.payload = { element: A }),
    (r = r === void 0 ? null : r),
    r !== null && (e.callback = r),
    (A = tt(n, e, s)),
    A !== null && (fe(A, n, s, i), Fi(A, n, s)),
    s
  );
}
function ts(A) {
  if (((A = A.current), !A.child)) return null;
  switch (A.child.tag) {
    case 5:
      return A.child.stateNode;
    default:
      return A.child.stateNode;
  }
}
function tc(A, e) {
  if (((A = A.memoizedState), A !== null && A.dehydrated !== null)) {
    var t = A.retryLane;
    A.retryLane = t !== 0 && t < e ? t : e;
  }
}
function _a(A, e) {
  tc(A, e), (A = A.alternate) && tc(A, e);
}
function Ph() {
  return null;
}
var dg =
  typeof reportError == "function"
    ? reportError
    : function (A) {
        console.error(A);
      };
function Ga(A) {
  this._internalRoot = A;
}
Es.prototype.render = Ga.prototype.render = function (A) {
  var e = this._internalRoot;
  if (e === null) throw Error(E(409));
  ys(A, e, null, null);
};
Es.prototype.unmount = Ga.prototype.unmount = function () {
  var A = this._internalRoot;
  if (A !== null) {
    this._internalRoot = null;
    var e = A.containerInfo;
    St(function () {
      ys(null, A, null, null);
    }),
      (e[Te] = null);
  }
};
function Es(A) {
  this._internalRoot = A;
}
Es.prototype.unstable_scheduleHydration = function (A) {
  if (A) {
    var e = XB();
    A = { blockedOn: null, target: A, priority: e };
    for (var t = 0; t < Xe.length && e !== 0 && e < Xe[t].priority; t++);
    Xe.splice(t, 0, A), t === 0 && JB(A);
  }
};
function Va(A) {
  return !(!A || (A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11));
}
function Hs(A) {
  return !(
    !A ||
    (A.nodeType !== 1 &&
      A.nodeType !== 9 &&
      A.nodeType !== 11 &&
      (A.nodeType !== 8 || A.nodeValue !== " react-mount-point-unstable "))
  );
}
function rc() {}
function bh(A, e, t, r, n) {
  if (n) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var a = ts(s);
        i.call(a);
      };
    }
    var s = gg(e, r, A, 0, null, !1, !1, "", rc);
    return (
      (A._reactRootContainer = s),
      (A[Te] = s.current),
      Bn(A.nodeType === 8 ? A.parentNode : A),
      St(),
      s
    );
  }
  for (; (n = A.lastChild); ) A.removeChild(n);
  if (typeof r == "function") {
    var o = r;
    r = function () {
      var a = ts(l);
      o.call(a);
    };
  }
  var l = Ra(A, 0, !1, null, null, !1, !1, "", rc);
  return (
    (A._reactRootContainer = l),
    (A[Te] = l.current),
    Bn(A.nodeType === 8 ? A.parentNode : A),
    St(function () {
      ys(e, l, t, r);
    }),
    l
  );
}
function Is(A, e, t, r, n) {
  var i = t._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof n == "function") {
      var o = n;
      n = function () {
        var l = ts(s);
        o.call(l);
      };
    }
    ys(e, s, A, n);
  } else s = bh(t, e, A, n, r);
  return ts(s);
}
PB = function (A) {
  switch (A.tag) {
    case 3:
      var e = A.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var t = Tr(e.pendingLanes);
        t !== 0 &&
          (oa(e, t | 1), VA(e, sA()), !(M & 6) && ((gr = sA() + 500), ft()));
      }
      break;
    case 13:
      St(function () {
        var r = ke(A, 1);
        if (r !== null) {
          var n = LA();
          fe(r, A, 1, n);
        }
      }),
        _a(A, 1);
  }
};
la = function (A) {
  if (A.tag === 13) {
    var e = ke(A, 134217728);
    if (e !== null) {
      var t = LA();
      fe(e, A, 134217728, t);
    }
    _a(A, 134217728);
  }
};
bB = function (A) {
  if (A.tag === 13) {
    var e = nt(A),
      t = ke(A, e);
    if (t !== null) {
      var r = LA();
      fe(t, A, e, r);
    }
    _a(A, e);
  }
};
XB = function () {
  return V;
};
WB = function (A, e) {
  var t = V;
  try {
    return (V = A), e();
  } finally {
    V = t;
  }
};
Jo = function (A, e, t) {
  switch (e) {
    case "input":
      if ((_o(A, t), (e = t.name), t.type === "radio" && e != null)) {
        for (t = A; t.parentNode; ) t = t.parentNode;
        for (
          t = t.querySelectorAll(
            "input[name=" + JSON.stringify("" + e) + '][type="radio"]'
          ),
            e = 0;
          e < t.length;
          e++
        ) {
          var r = t[e];
          if (r !== A && r.form === A.form) {
            var n = ps(r);
            if (!n) throw Error(E(90));
            vB(r), _o(r, n);
          }
        }
      }
      break;
    case "textarea":
      yB(A, t);
      break;
    case "select":
      (e = t.value), e != null && er(A, !!t.multiple, e, !1);
  }
};
KB = ka;
DB = St;
var Xh = { usingClientEntryPoint: !1, Events: [Hn, Jt, ps, SB, LB, ka] },
  Hr = {
    findFiberByHostInstance: pt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Wh = {
    bundleType: Hr.bundleType,
    version: Hr.version,
    rendererPackageName: Hr.rendererPackageName,
    rendererConfig: Hr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Me.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (A) {
      return (A = OB(A)), A === null ? null : A.stateNode;
    },
    findFiberByHostInstance: Hr.findFiberByHostInstance || Ph,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Jn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Jn.isDisabled && Jn.supportsFiber)
    try {
      (gs = Jn.inject(Wh)), (Ue = Jn);
    } catch {}
}
jA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xh;
jA.createPortal = function (A, e) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Va(e)) throw Error(E(200));
  return Vh(A, e, null, t);
};
jA.createRoot = function (A, e) {
  if (!Va(A)) throw Error(E(299));
  var t = !1,
    r = "",
    n = dg;
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (t = !0),
      e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (n = e.onRecoverableError)),
    (e = Ra(A, 1, !1, null, null, t, !1, r, n)),
    (A[Te] = e.current),
    Bn(A.nodeType === 8 ? A.parentNode : A),
    new Ga(e)
  );
};
jA.findDOMNode = function (A) {
  if (A == null) return null;
  if (A.nodeType === 1) return A;
  var e = A._reactInternals;
  if (e === void 0)
    throw typeof A.render == "function"
      ? Error(E(188))
      : ((A = Object.keys(A).join(",")), Error(E(268, A)));
  return (A = OB(e)), (A = A === null ? null : A.stateNode), A;
};
jA.flushSync = function (A) {
  return St(A);
};
jA.hydrate = function (A, e, t) {
  if (!Hs(e)) throw Error(E(200));
  return Is(null, A, e, !0, t);
};
jA.hydrateRoot = function (A, e, t) {
  if (!Va(A)) throw Error(E(405));
  var r = (t != null && t.hydratedSources) || null,
    n = !1,
    i = "",
    s = dg;
  if (
    (t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    (e = gg(e, null, A, 1, t ?? null, n, !1, i, s)),
    (A[Te] = e.current),
    Bn(A),
    r)
  )
    for (A = 0; A < r.length; A++)
      (t = r[A]),
        (n = t._getVersion),
        (n = n(t._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [t, n])
          : e.mutableSourceEagerHydrationData.push(t, n);
  return new Es(e);
};
jA.render = function (A, e, t) {
  if (!Hs(e)) throw Error(E(200));
  return Is(null, A, e, !1, t);
};
jA.unmountComponentAtNode = function (A) {
  if (!Hs(A)) throw Error(E(40));
  return A._reactRootContainer
    ? (St(function () {
        Is(null, null, A, !1, function () {
          (A._reactRootContainer = null), (A[Te] = null);
        });
      }),
      !0)
    : !1;
};
jA.unstable_batchedUpdates = ka;
jA.unstable_renderSubtreeIntoContainer = function (A, e, t, r) {
  if (!Hs(t)) throw Error(E(200));
  if (A == null || A._reactInternals === void 0) throw Error(E(38));
  return Is(A, e, t, !1, r);
};
jA.version = "18.3.1-next-f1338f8080-20240426";
function wg() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wg);
    } catch (A) {
      console.error(A);
    }
}
wg(), (dB.exports = jA);
var Jh = dB.exports,
  nc = Jh;
(Do.createRoot = nc.createRoot), (Do.hydrateRoot = nc.hydrateRoot);
const Yh = () => {
    const [A, e] = SA.useState(!1),
      t = () => {
        e(!A);
      };
    return y.jsx("header", {
      className: "",
      children: y.jsxs("div", {
        className:
          "",
        children: [
          y.jsxs("div", {
            className:
              "",
            children: [
              y.jsxs("div", {
                className:
                  "",
                children: [
                  y.jsx("a", {
                    href: "",
                    children: y.jsx("img", {
                      src: "",
                      alt: "",
                      className: "",
                    }),
                  }),
                  y.jsx("img", {
                    src: "",
                    alt: "",
                    className: "",
                  }),
                ],
              }),
              y.jsx("button", {
                className:
                  "",
                onClick: t,
                children: y.jsx("svg", {
                  className: "w-6 h-6 text-white",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  xmlns: "",
                  children: y.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "",
                  }),
                }),
              }),
            ],
          }),
          y.jsxs("nav", {
            className: `flex-col md:flex-row text-black font-bold w-full ${
              A ? "block" : "hidden"
            } md:flex`,
            children: [
              y.jsx("a", {
                href: "",
                className:
                  "",
                children: "",
              }),
              y.jsx("a", {
                href: "",
                className:
                  "",
                children: "",
              }),
              y.jsx("a", {
                href: "",
                className:
                  "",
                children: "  ",
              }),
              y.jsx("a", {
                href: "",
                className:
                  "",
                children: "",
              }),
              y.jsx("a", {
                href: "/",
                className:
                  "",
                children: "",
              }),
              y.jsx("a", {
                href: "",
                className:
                  "",
                children: "",
              }),
            ],
          }),
        ],
      }),
    });
  },
  jh = ({
    handleClothesChange: A,
    handleBackgroundChange: e,
    handleFaceChange: t,
    handleHatChange: r,
    handleAccessoryChange: n,
    handleHandChange: i,
    handleHeadChange: s,
    pfpOptions: o,
    pfpIndex: l,
    handlePrevious: a,
    handleNext: u,
    onDownload: c,
    onRandomise: f,
  }) => {
    const [h, w] = SA.useState("background"),
      p = [
        { name: "BACKGROUND", value: "background" },
        { name: "CLOTHES", value: "clothes" },
        { name: "HATS", value: "hats" },
        { name: "HEADS", value: "heads" },
        { name: "FACES", value: "faces" },
        { name: "ACCESSORIES", value: "accessories" },
        { name: "HANDS", value: "hands" },
      ],
      x = () => {
        const g = Array.from({ length: 16 }, (F, H) => H),
          B = Array.from({ length: 7 }, (F, H) => H),
          d = Array.from({ length: 8 }, (F, H) => H),
          Q = Array.from({ length: 0 }, (F, H) => H),
          U = Array.from({ length: 0 }, (F, H) => H),
          C = Array.from({ length: 2 }, (F, H) => H),
          v = Array.from({ length: 9 }, (F, H) => H),
          m =
            "w-[120px] h-[120px] bg-gray-200 border-[6px] rounded-full border-black cursor-pointer flex items-center justify-center";
        switch (h) {
          case "background":
            return y.jsx("div", {
              className: "flex md:space-x-2 flex-wrap gap-4 mt-5",
              children: g.map((F) =>
                y.jsx(
                  "img",
                  {
                    onClick: () => e(F),
                    src: `images/BG${F}.png`,
                    alt: `Background ${F}`,
                    className:
                      "w-[120px] h-[120px] bg-gray-200 border-[6px] rounded-full border-black cursor-pointer",
                  },
                  F
                )
              ),
            });
          case "heads":
            return y.jsx("div", {
              className: "flex md:space-x-2 flex-wrap gap-4 mt-5",
              children: B.map((F) =>
                y.jsx(
                  "img",
                  {
                    onClick: () => s(F),
                    src: `images/head${F}.png`,
                    alt: `Head ${F}`,
                    className:
                      "w-[120px] h-[120px] bg-gray-200 border-[6px] rounded-full border-black cursor-pointer",
                  },
                  F
                )
              ),
            });
          case "clothes":
            return y.jsx("div", {
              className: "flex md:space-x-2 flex-wrap gap-4 mt-5",
              children: d.map((F) =>
                y.jsx(
                  "img",
                  {
                    onClick: () => A(F),
                    src: `images/body${F}.png`,
                    alt: `Clothes ${F}`,
                    className:
                      "w-[120px] h-[120px] scale-[1.05] bg-gray-200 border-[6px] rounded-full border-black cursor-pointer",
                  },
                  F
                )
              ),
            });
          case "hats":
            return y.jsxs("div", {
              className: "flex md:space-x-2 flex-wrap gap-4 mt-5",
              children: [
                y.jsx("div", {
                  onClick: () => r(-1),
                  className: m,
                  children: y.jsx("span", { children: "None" }),
                }),
                Q.map((F) =>
                  y.jsx(
                    "img",
                    {
                      onClick: () => r(F),
                      src: ``,
                      alt: ``,
                      className:
                        "w-[120px] h-[120px] bg-gray-200 border-[6px] rounded-full border-black cursor-pointer",
                    },
                    F
                  )
                ),
              ],
            });
          case "faces":
            return y.jsx("div", {
              className: "flex md:space-x-2 flex-wrap gap-4 mt-5",
              children: U.map((F) =>
                y.jsx(
                  "img",
                  {
                    onClick: () => t(F),
                    src: `images/emotion${F}.png`,
                    alt: `Face ${F}`,
                    className:
                      "w-[120px] h-[120px] bg-gray-200 border-[6px] rounded-full border-black cursor-pointer",
                  },
                  F
                )
              ),
            });
          case "accessories":
            return y.jsxs("div", {
              className: "flex md:space-x-2 flex-wrap gap-4 mt-5",
              children: [
                y.jsx("div", {
                  onClick: () => n(-1),
                  className: m,
                  children: y.jsx("span", { children: "None" }),
                }),
                C.map((F) =>
                  y.jsx(
                    "img",
                    {
                      onClick: () => n(F),
                      src: `images/accessory${F}.png`,
                      alt: `Accessory ${F}`,
                      className:
                        "w-[120px] h-[120px] bg-gray-200 border-[6px] rounded-full border-black cursor-pointer",
                    },
                    F
                  )
                ),
              ],
            });
          case "hands":
            return y.jsx("div", {
              className: "flex md:space-x-2 flex-wrap gap-4 mt-5",
              children: v.map((F) =>
                y.jsx(
                  "img",
                  {
                    onClick: () => i(F),
                    src: `images/hand${F}.png`,
                    alt: `Hand ${F}`,
                    className:
                      "w-[120px] h-[120px] bg-gray-200 border-[6px] rounded-full border-black cursor-pointer",
                  },
                  F
                )
              ),
            });
          default:
            return null;
        }
      };
    return y.jsxs("div", {
      className: "mt-6 md:mt-0",
      children: [
        y.jsxs("div", {
          className: "flex flex-col gap-2 md:hidden",
          children: [
            y.jsx("button", {
              onClick: f,
              className:
                "bg-white text-black border-[3px] border-black px-4 py-2 grow transition-transform duration-300 hover:bg-black hover:text-white",
              children: "RANDOMISE",
            }),
            y.jsx("button", {
              onClick: c,
              className:
                "bg-black text-white border-[3px] border-black px-4 py-2 grow block md:hidden transition-transform duration-300 hover:bg-white hover:text-black",
              children: "DOWNLOAD",
            }),
          ],
        }),
        y.jsxs("div", {
          className: "flex flex-col gap-4 mt-6 md:mt-0",
          children: [
            y.jsx("div", {
              className: "flex flex-wrap",
              children: p.map((g) =>
                y.jsx(
                  "button",
                  {
                    onClick: () => w(g.value),
                    className: `px-4 md:px-0 transition-all duration-300 ease-in-out hover:bg-black hover:text-white grow md:max-w-[210px] md:w-full py-2 font-bold ${
                      h === g.value
                        ? "bg-black text-white"
                        : "bg-white text-black"
                    } border-black border-2`,
                    children: g.name,
                  },
                  g.value
                )
              ),
            }),
            y.jsx("div", {
              className:
                "overflow-hidden h-[504px] md:h-[484px]  border-b-[3px] border-black relative",
              children: y.jsx("div", {
                className:
                  "overflow-hidden w-full h-[514px] skew-y-3 bg-white border-[3px] border-black mt-[0.5rem] md:mt-10 px-6 md:p-10 pt-0",
                children: y.jsx("div", {
                  className: "w-full h-full -skew-y-3 overflow-auto",
                  children: y.jsx("div", {
                    className: "w-full  md:h-[584px] p-2 pb-10 md:p-0",
                    children: x(),
                  }),
                }),
              }),
            }),
          ],
        }),
      ],
    });
  },
  zh = ({
    pfpOptions: A,
    pfpIndex: e,
    handlePrevious: t,
    handleNext: r,
    className: n,
  }) => {
    const [i, s] = SA.useState(""),
      o = () => {
        s("left"), t();
      },
      l = () => {
        s("right"), r();
      };
    return (
      SA.useEffect(() => {
        const a = setTimeout(() => {
          s("");
        }, 300);
        return () => clearTimeout(a);
      }, [e]),
      y.jsxs("div", {
        className: `flex items-center max-w-[499px] w-full gap-2 ${n}`,
        children: [
          y.jsx("button", {
            onClick: o,
            className:
              "bg-black text-white px-4 py-2 border-[3px] border-black transition-transform duration-300 hover:bg-white hover:text-black",
            children: "<",
          }),
          y.jsx("div", {
            className: `border-[3px] border-black px-4 py-2 w-full bg-white text-center relative overflow-hidden ${
              i === "left"
                ? "animate-slide-in-left"
                : i === "right"
                ? "animate-slide-in-right"
                : ""
            }`,
            children: A[e],
          }),
          y.jsx("button", {
            onClick: l,
            className:
              "bg-black text-white px-4 py-2 border-[3px] border-black transition-transform duration-300 hover:bg-white hover:text-black",
            children: ">",
          }),
        ],
      })
    );
  },
  Zh = ({
    onRandomise: A,
    onReset: e,
    onDownload: t,
    pfpOptions: r,
    pfpIndex: n,
    handlePrevious: i,
    handleNext: s,
  }) =>
    y.jsxs("div", {
      className: "flex items-center w-full mt-4 gap-4",
      children: [
        y.jsx(zh, {
          pfpOptions: r,
          pfpIndex: n,
          handlePrevious: i,
          handleNext: s,
          className: "hidden md:flex",
        }),
        y.jsxs("div", {
          className: "flex w-full gap-6",
          children: [
            y.jsx("button", {
              onClick: e,
              className:
                "bg-white text-black border-[3px] border-black px-4 py-2 grow transition-transform duration-300 hover:bg-black hover:text-white",
              children: "RESET",
            }),
            y.jsx("button", {
              onClick: A,
              className:
                "bg-white text-black border-[3px] hidden md:block border-black px-4 py-2 grow transition-transform duration-300 hover:bg-black hover:text-white",
              children: "RANDOMISE",
            }),
            y.jsx("button", {
              onClick: t,
              className:
                "bg-black text-white border-[3px] border-black px-4 py-2 grow hidden md:block transition-transform duration-300 hover:bg-white hover:text-black",
              children: "DOWNLOAD",
            }),
          ],
        }),
      ],
    });
/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */ /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var El =
  function (A, e) {
    return (
      (El =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, r) {
            t.__proto__ = r;
          }) ||
        function (t, r) {
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
        }),
      El(A, e)
    );
  };
function de(A, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Class extends value " + String(e) + " is not a constructor or null"
    );
  El(A, e);
  function t() {
    this.constructor = A;
  }
  A.prototype =
    e === null ? Object.create(e) : ((t.prototype = e.prototype), new t());
}
var Hl = function () {
  return (
    (Hl =
      Object.assign ||
      function (e) {
        for (var t, r = 1, n = arguments.length; r < n; r++) {
          t = arguments[r];
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        }
        return e;
      }),
    Hl.apply(this, arguments)
  );
};
function IA(A, e, t, r) {
  function n(i) {
    return i instanceof t
      ? i
      : new t(function (s) {
          s(i);
        });
  }
  return new (t || (t = Promise))(function (i, s) {
    function o(u) {
      try {
        a(r.next(u));
      } catch (c) {
        s(c);
      }
    }
    function l(u) {
      try {
        a(r.throw(u));
      } catch (c) {
        s(c);
      }
    }
    function a(u) {
      u.done ? i(u.value) : n(u.value).then(o, l);
    }
    a((r = r.apply(A, [])).next());
  });
}
function vA(A, e) {
  var t = {
      label: 0,
      sent: function () {
        if (i[0] & 1) throw i[1];
        return i[1];
      },
      trys: [],
      ops: [],
    },
    r,
    n,
    i,
    s;
  return (
    (s = { next: o(0), throw: o(1), return: o(2) }),
    typeof Symbol == "function" &&
      (s[Symbol.iterator] = function () {
        return this;
      }),
    s
  );
  function o(a) {
    return function (u) {
      return l([a, u]);
    };
  }
  function l(a) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (
          ((r = 1),
          n &&
            (i =
              a[0] & 2
                ? n.return
                : a[0]
                ? n.throw || ((i = n.return) && i.call(n), 0)
                : n.next) &&
            !(i = i.call(n, a[1])).done)
        )
          return i;
        switch (((n = 0), i && (a = [a[0] & 2, i.value]), a[0])) {
          case 0:
          case 1:
            i = a;
            break;
          case 4:
            return t.label++, { value: a[1], done: !1 };
          case 5:
            t.label++, (n = a[1]), (a = [0]);
            continue;
          case 7:
            (a = t.ops.pop()), t.trys.pop();
            continue;
          default:
            if (
              ((i = t.trys),
              !(i = i.length > 0 && i[i.length - 1]) &&
                (a[0] === 6 || a[0] === 2))
            ) {
              t = 0;
              continue;
            }
            if (a[0] === 3 && (!i || (a[1] > i[0] && a[1] < i[3]))) {
              t.label = a[1];
              break;
            }
            if (a[0] === 6 && t.label < i[1]) {
              (t.label = i[1]), (i = a);
              break;
            }
            if (i && t.label < i[2]) {
              (t.label = i[2]), t.ops.push(a);
              break;
            }
            i[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        a = e.call(A, t);
      } catch (u) {
        (a = [6, u]), (n = 0);
      } finally {
        r = i = 0;
      }
    if (a[0] & 5) throw a[1];
    return { value: a[0] ? a[1] : void 0, done: !0 };
  }
}
function Yn(A, e, t) {
  if (arguments.length === 2)
    for (var r = 0, n = e.length, i; r < n; r++)
      (i || !(r in e)) &&
        (i || (i = Array.prototype.slice.call(e, 0, r)), (i[r] = e[r]));
  return A.concat(i || e);
}
var Ne = (function () {
    function A(e, t, r, n) {
      (this.left = e), (this.top = t), (this.width = r), (this.height = n);
    }
    return (
      (A.prototype.add = function (e, t, r, n) {
        return new A(
          this.left + e,
          this.top + t,
          this.width + r,
          this.height + n
        );
      }),
      (A.fromClientRect = function (e, t) {
        return new A(
          t.left + e.windowBounds.left,
          t.top + e.windowBounds.top,
          t.width,
          t.height
        );
      }),
      (A.fromDOMRectList = function (e, t) {
        var r = Array.from(t).find(function (n) {
          return n.width !== 0;
        });
        return r
          ? new A(
              r.left + e.windowBounds.left,
              r.top + e.windowBounds.top,
              r.width,
              r.height
            )
          : A.EMPTY;
      }),
      (A.EMPTY = new A(0, 0, 0, 0)),
      A
    );
  })(),
  xs = function (A, e) {
    return Ne.fromClientRect(A, e.getBoundingClientRect());
  },
  $h = function (A) {
    var e = A.body,
      t = A.documentElement;
    if (!e || !t) throw new Error("Unable to get document size");
    var r = Math.max(
        Math.max(e.scrollWidth, t.scrollWidth),
        Math.max(e.offsetWidth, t.offsetWidth),
        Math.max(e.clientWidth, t.clientWidth)
      ),
      n = Math.max(
        Math.max(e.scrollHeight, t.scrollHeight),
        Math.max(e.offsetHeight, t.offsetHeight),
        Math.max(e.clientHeight, t.clientHeight)
      );
    return new Ne(0, 0, r, n);
  },
  Ss = function (A) {
    for (var e = [], t = 0, r = A.length; t < r; ) {
      var n = A.charCodeAt(t++);
      if (n >= 55296 && n <= 56319 && t < r) {
        var i = A.charCodeAt(t++);
        (i & 64512) === 56320
          ? e.push(((n & 1023) << 10) + (i & 1023) + 65536)
          : (e.push(n), t--);
      } else e.push(n);
    }
    return e;
  },
  iA = function () {
    for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
    if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
    var t = A.length;
    if (!t) return "";
    for (var r = [], n = -1, i = ""; ++n < t; ) {
      var s = A[n];
      s <= 65535
        ? r.push(s)
        : ((s -= 65536), r.push((s >> 10) + 55296, (s % 1024) + 56320)),
        (n + 1 === t || r.length > 16384) &&
          ((i += String.fromCharCode.apply(String, r)), (r.length = 0));
    }
    return i;
  },
  ic = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  qh = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var jn = 0; jn < ic.length; jn++) qh[ic.charCodeAt(jn)] = jn;
var sc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  Or = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var zn = 0; zn < sc.length; zn++) Or[sc.charCodeAt(zn)] = zn;
var Ap = function (A) {
    var e = A.length * 0.75,
      t = A.length,
      r,
      n = 0,
      i,
      s,
      o,
      l;
    A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
    var a =
        typeof ArrayBuffer < "u" &&
        typeof Uint8Array < "u" &&
        typeof Uint8Array.prototype.slice < "u"
          ? new ArrayBuffer(e)
          : new Array(e),
      u = Array.isArray(a) ? a : new Uint8Array(a);
    for (r = 0; r < t; r += 4)
      (i = Or[A.charCodeAt(r)]),
        (s = Or[A.charCodeAt(r + 1)]),
        (o = Or[A.charCodeAt(r + 2)]),
        (l = Or[A.charCodeAt(r + 3)]),
        (u[n++] = (i << 2) | (s >> 4)),
        (u[n++] = ((s & 15) << 4) | (o >> 2)),
        (u[n++] = ((o & 3) << 6) | (l & 63));
    return a;
  },
  ep = function (A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 2)
      t.push((A[r + 1] << 8) | A[r]);
    return t;
  },
  tp = function (A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 4)
      t.push((A[r + 3] << 24) | (A[r + 2] << 16) | (A[r + 1] << 8) | A[r]);
    return t;
  },
  mt = 5,
  Pa = 11,
  co = 2,
  rp = Pa - mt,
  hg = 65536 >> mt,
  np = 1 << mt,
  Bo = np - 1,
  ip = 1024 >> mt,
  sp = hg + ip,
  op = sp,
  lp = 32,
  ap = op + lp,
  up = 65536 >> Pa,
  cp = 1 << rp,
  Bp = cp - 1,
  oc = function (A, e, t) {
    return A.slice
      ? A.slice(e, t)
      : new Uint16Array(Array.prototype.slice.call(A, e, t));
  },
  fp = function (A, e, t) {
    return A.slice
      ? A.slice(e, t)
      : new Uint32Array(Array.prototype.slice.call(A, e, t));
  },
  gp = function (A, e) {
    var t = Ap(A),
      r = Array.isArray(t) ? tp(t) : new Uint32Array(t),
      n = Array.isArray(t) ? ep(t) : new Uint16Array(t),
      i = 24,
      s = oc(n, i / 2, r[4] / 2),
      o = r[5] === 2 ? oc(n, (i + r[4]) / 2) : fp(r, Math.ceil((i + r[4]) / 4));
    return new dp(r[0], r[1], r[2], r[3], s, o);
  },
  dp = (function () {
    function A(e, t, r, n, i, s) {
      (this.initialValue = e),
        (this.errorValue = t),
        (this.highStart = r),
        (this.highValueIndex = n),
        (this.index = i),
        (this.data = s);
    }
    return (
      (A.prototype.get = function (e) {
        var t;
        if (e >= 0) {
          if (e < 55296 || (e > 56319 && e <= 65535))
            return (
              (t = this.index[e >> mt]),
              (t = (t << co) + (e & Bo)),
              this.data[t]
            );
          if (e <= 65535)
            return (
              (t = this.index[hg + ((e - 55296) >> mt)]),
              (t = (t << co) + (e & Bo)),
              this.data[t]
            );
          if (e < this.highStart)
            return (
              (t = ap - up + (e >> Pa)),
              (t = this.index[t]),
              (t += (e >> mt) & Bp),
              (t = this.index[t]),
              (t = (t << co) + (e & Bo)),
              this.data[t]
            );
          if (e <= 1114111) return this.data[this.highValueIndex];
        }
        return this.errorValue;
      }),
      A
    );
  })(),
  lc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  wp = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Zn = 0; Zn < lc.length; Zn++) wp[lc.charCodeAt(Zn)] = Zn;
var hp =
    "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==",
  ac = 50,
  pp = 1,
  pg = 2,
  Qg = 3,
  Qp = 4,
  Cp = 5,
  uc = 7,
  Cg = 8,
  cc = 9,
  je = 10,
  Il = 11,
  Bc = 12,
  xl = 13,
  Up = 14,
  Nr = 15,
  Sl = 16,
  $n = 17,
  Ir = 18,
  Fp = 19,
  fc = 20,
  Ll = 21,
  xr = 22,
  fo = 23,
  Tt = 24,
  bA = 25,
  Mr = 26,
  Rr = 27,
  kt = 28,
  vp = 29,
  ht = 30,
  mp = 31,
  qn = 32,
  Ai = 33,
  Kl = 34,
  Dl = 35,
  Tl = 36,
  Un = 37,
  kl = 38,
  xi = 39,
  Si = 40,
  go = 41,
  Ug = 42,
  yp = 43,
  Ep = [9001, 65288],
  Fg = "!",
  N = "×",
  ei = "÷",
  Ol = gp(hp),
  ye = [ht, Tl],
  Nl = [pp, pg, Qg, Cp],
  vg = [je, Cg],
  gc = [Rr, Mr],
  Hp = Nl.concat(vg),
  dc = [kl, xi, Si, Kl, Dl],
  Ip = [Nr, xl],
  xp = function (A, e) {
    e === void 0 && (e = "strict");
    var t = [],
      r = [],
      n = [];
    return (
      A.forEach(function (i, s) {
        var o = Ol.get(i);
        if (
          (o > ac ? (n.push(!0), (o -= ac)) : n.push(!1),
          ["normal", "auto", "loose"].indexOf(e) !== -1 &&
            [8208, 8211, 12316, 12448].indexOf(i) !== -1)
        )
          return r.push(s), t.push(Sl);
        if (o === Qp || o === Il) {
          if (s === 0) return r.push(s), t.push(ht);
          var l = t[s - 1];
          return Hp.indexOf(l) === -1
            ? (r.push(r[s - 1]), t.push(l))
            : (r.push(s), t.push(ht));
        }
        if ((r.push(s), o === mp)) return t.push(e === "strict" ? Ll : Un);
        if (o === Ug || o === vp) return t.push(ht);
        if (o === yp)
          return (i >= 131072 && i <= 196605) || (i >= 196608 && i <= 262141)
            ? t.push(Un)
            : t.push(ht);
        t.push(o);
      }),
      [r, t, n]
    );
  },
  wo = function (A, e, t, r) {
    var n = r[t];
    if (Array.isArray(A) ? A.indexOf(n) !== -1 : A === n)
      for (var i = t; i <= r.length; ) {
        i++;
        var s = r[i];
        if (s === e) return !0;
        if (s !== je) break;
      }
    if (n === je)
      for (var i = t; i > 0; ) {
        i--;
        var o = r[i];
        if (Array.isArray(A) ? A.indexOf(o) !== -1 : A === o)
          for (var l = t; l <= r.length; ) {
            l++;
            var s = r[l];
            if (s === e) return !0;
            if (s !== je) break;
          }
        if (o !== je) break;
      }
    return !1;
  },
  wc = function (A, e) {
    for (var t = A; t >= 0; ) {
      var r = e[t];
      if (r === je) t--;
      else return r;
    }
    return 0;
  },
  Sp = function (A, e, t, r, n) {
    if (t[r] === 0) return N;
    var i = r - 1;
    if (Array.isArray(n) && n[i] === !0) return N;
    var s = i - 1,
      o = i + 1,
      l = e[i],
      a = s >= 0 ? e[s] : 0,
      u = e[o];
    if (l === pg && u === Qg) return N;
    if (Nl.indexOf(l) !== -1) return Fg;
    if (Nl.indexOf(u) !== -1 || vg.indexOf(u) !== -1) return N;
    if (wc(i, e) === Cg) return ei;
    if (
      Ol.get(A[i]) === Il ||
      ((l === qn || l === Ai) && Ol.get(A[o]) === Il) ||
      l === uc ||
      u === uc ||
      l === cc ||
      ([je, xl, Nr].indexOf(l) === -1 && u === cc) ||
      [$n, Ir, Fp, Tt, kt].indexOf(u) !== -1 ||
      wc(i, e) === xr ||
      wo(fo, xr, i, e) ||
      wo([$n, Ir], Ll, i, e) ||
      wo(Bc, Bc, i, e)
    )
      return N;
    if (l === je) return ei;
    if (l === fo || u === fo) return N;
    if (u === Sl || l === Sl) return ei;
    if (
      [xl, Nr, Ll].indexOf(u) !== -1 ||
      l === Up ||
      (a === Tl && Ip.indexOf(l) !== -1) ||
      (l === kt && u === Tl) ||
      u === fc ||
      (ye.indexOf(u) !== -1 && l === bA) ||
      (ye.indexOf(l) !== -1 && u === bA) ||
      (l === Rr && [Un, qn, Ai].indexOf(u) !== -1) ||
      ([Un, qn, Ai].indexOf(l) !== -1 && u === Mr) ||
      (ye.indexOf(l) !== -1 && gc.indexOf(u) !== -1) ||
      (gc.indexOf(l) !== -1 && ye.indexOf(u) !== -1) ||
      ([Rr, Mr].indexOf(l) !== -1 &&
        (u === bA || ([xr, Nr].indexOf(u) !== -1 && e[o + 1] === bA))) ||
      ([xr, Nr].indexOf(l) !== -1 && u === bA) ||
      (l === bA && [bA, kt, Tt].indexOf(u) !== -1)
    )
      return N;
    if ([bA, kt, Tt, $n, Ir].indexOf(u) !== -1)
      for (var c = i; c >= 0; ) {
        var f = e[c];
        if (f === bA) return N;
        if ([kt, Tt].indexOf(f) !== -1) c--;
        else break;
      }
    if ([Rr, Mr].indexOf(u) !== -1)
      for (var c = [$n, Ir].indexOf(l) !== -1 ? s : i; c >= 0; ) {
        var f = e[c];
        if (f === bA) return N;
        if ([kt, Tt].indexOf(f) !== -1) c--;
        else break;
      }
    if (
      (kl === l && [kl, xi, Kl, Dl].indexOf(u) !== -1) ||
      ([xi, Kl].indexOf(l) !== -1 && [xi, Si].indexOf(u) !== -1) ||
      ([Si, Dl].indexOf(l) !== -1 && u === Si) ||
      (dc.indexOf(l) !== -1 && [fc, Mr].indexOf(u) !== -1) ||
      (dc.indexOf(u) !== -1 && l === Rr) ||
      (ye.indexOf(l) !== -1 && ye.indexOf(u) !== -1) ||
      (l === Tt && ye.indexOf(u) !== -1) ||
      (ye.concat(bA).indexOf(l) !== -1 &&
        u === xr &&
        Ep.indexOf(A[o]) === -1) ||
      (ye.concat(bA).indexOf(u) !== -1 && l === Ir)
    )
      return N;
    if (l === go && u === go) {
      for (var h = t[i], w = 1; h > 0 && (h--, e[h] === go); ) w++;
      if (w % 2 !== 0) return N;
    }
    return l === qn && u === Ai ? N : ei;
  },
  Lp = function (A, e) {
    e || (e = { lineBreak: "normal", wordBreak: "normal" });
    var t = xp(A, e.lineBreak),
      r = t[0],
      n = t[1],
      i = t[2];
    (e.wordBreak === "break-all" || e.wordBreak === "break-word") &&
      (n = n.map(function (o) {
        return [bA, ht, Ug].indexOf(o) !== -1 ? Un : o;
      }));
    var s =
      e.wordBreak === "keep-all"
        ? i.map(function (o, l) {
            return o && A[l] >= 19968 && A[l] <= 40959;
          })
        : void 0;
    return [r, n, s];
  },
  Kp = (function () {
    function A(e, t, r, n) {
      (this.codePoints = e),
        (this.required = t === Fg),
        (this.start = r),
        (this.end = n);
    }
    return (
      (A.prototype.slice = function () {
        return iA.apply(void 0, this.codePoints.slice(this.start, this.end));
      }),
      A
    );
  })(),
  Dp = function (A, e) {
    var t = Ss(A),
      r = Lp(t, e),
      n = r[0],
      i = r[1],
      s = r[2],
      o = t.length,
      l = 0,
      a = 0;
    return {
      next: function () {
        if (a >= o) return { done: !0, value: null };
        for (var u = N; a < o && (u = Sp(t, i, n, ++a, s)) === N; );
        if (u !== N || a === o) {
          var c = new Kp(t, u, l, a);
          return (l = a), { value: c, done: !1 };
        }
        return { done: !0, value: null };
      },
    };
  },
  Tp = 1,
  kp = 2,
  xn = 4,
  hc = 8,
  rs = 10,
  pc = 47,
  $r = 92,
  Op = 9,
  Np = 32,
  ti = 34,
  Sr = 61,
  Mp = 35,
  Rp = 36,
  _p = 37,
  ri = 39,
  ni = 40,
  Lr = 41,
  Gp = 95,
  NA = 45,
  Vp = 33,
  Pp = 60,
  bp = 62,
  Xp = 64,
  Wp = 91,
  Jp = 93,
  Yp = 61,
  jp = 123,
  ii = 63,
  zp = 125,
  Qc = 124,
  Zp = 126,
  $p = 128,
  Cc = 65533,
  ho = 42,
  Ut = 43,
  qp = 44,
  AQ = 58,
  eQ = 59,
  Fn = 46,
  tQ = 0,
  rQ = 8,
  nQ = 11,
  iQ = 14,
  sQ = 31,
  oQ = 127,
  pe = -1,
  mg = 48,
  yg = 97,
  Eg = 101,
  lQ = 102,
  aQ = 117,
  uQ = 122,
  Hg = 65,
  Ig = 69,
  xg = 70,
  cQ = 85,
  BQ = 90,
  mA = function (A) {
    return A >= mg && A <= 57;
  },
  fQ = function (A) {
    return A >= 55296 && A <= 57343;
  },
  Ot = function (A) {
    return mA(A) || (A >= Hg && A <= xg) || (A >= yg && A <= lQ);
  },
  gQ = function (A) {
    return A >= yg && A <= uQ;
  },
  dQ = function (A) {
    return A >= Hg && A <= BQ;
  },
  wQ = function (A) {
    return gQ(A) || dQ(A);
  },
  hQ = function (A) {
    return A >= $p;
  },
  si = function (A) {
    return A === rs || A === Op || A === Np;
  },
  ns = function (A) {
    return wQ(A) || hQ(A) || A === Gp;
  },
  Uc = function (A) {
    return ns(A) || mA(A) || A === NA;
  },
  pQ = function (A) {
    return (A >= tQ && A <= rQ) || A === nQ || (A >= iQ && A <= sQ) || A === oQ;
  },
  be = function (A, e) {
    return A !== $r ? !1 : e !== rs;
  },
  oi = function (A, e, t) {
    return A === NA ? ns(e) || be(e, t) : ns(A) ? !0 : !!(A === $r && be(A, e));
  },
  po = function (A, e, t) {
    return A === Ut || A === NA
      ? mA(e)
        ? !0
        : e === Fn && mA(t)
      : mA(A === Fn ? e : A);
  },
  QQ = function (A) {
    var e = 0,
      t = 1;
    (A[e] === Ut || A[e] === NA) && (A[e] === NA && (t = -1), e++);
    for (var r = []; mA(A[e]); ) r.push(A[e++]);
    var n = r.length ? parseInt(iA.apply(void 0, r), 10) : 0;
    A[e] === Fn && e++;
    for (var i = []; mA(A[e]); ) i.push(A[e++]);
    var s = i.length,
      o = s ? parseInt(iA.apply(void 0, i), 10) : 0;
    (A[e] === Ig || A[e] === Eg) && e++;
    var l = 1;
    (A[e] === Ut || A[e] === NA) && (A[e] === NA && (l = -1), e++);
    for (var a = []; mA(A[e]); ) a.push(A[e++]);
    var u = a.length ? parseInt(iA.apply(void 0, a), 10) : 0;
    return t * (n + o * Math.pow(10, -s)) * Math.pow(10, l * u);
  },
  CQ = { type: 2 },
  UQ = { type: 3 },
  FQ = { type: 4 },
  vQ = { type: 13 },
  mQ = { type: 8 },
  yQ = { type: 21 },
  EQ = { type: 9 },
  HQ = { type: 10 },
  IQ = { type: 11 },
  xQ = { type: 12 },
  SQ = { type: 14 },
  li = { type: 23 },
  LQ = { type: 1 },
  KQ = { type: 25 },
  DQ = { type: 24 },
  TQ = { type: 26 },
  kQ = { type: 27 },
  OQ = { type: 28 },
  NQ = { type: 29 },
  MQ = { type: 31 },
  Ml = { type: 32 },
  Sg = (function () {
    function A() {
      this._value = [];
    }
    return (
      (A.prototype.write = function (e) {
        this._value = this._value.concat(Ss(e));
      }),
      (A.prototype.read = function () {
        for (var e = [], t = this.consumeToken(); t !== Ml; )
          e.push(t), (t = this.consumeToken());
        return e;
      }),
      (A.prototype.consumeToken = function () {
        var e = this.consumeCodePoint();
        switch (e) {
          case ti:
            return this.consumeStringToken(ti);
          case Mp:
            var t = this.peekCodePoint(0),
              r = this.peekCodePoint(1),
              n = this.peekCodePoint(2);
            if (Uc(t) || be(r, n)) {
              var i = oi(t, r, n) ? kp : Tp,
                s = this.consumeName();
              return { type: 5, value: s, flags: i };
            }
            break;
          case Rp:
            if (this.peekCodePoint(0) === Sr)
              return this.consumeCodePoint(), vQ;
            break;
          case ri:
            return this.consumeStringToken(ri);
          case ni:
            return CQ;
          case Lr:
            return UQ;
          case ho:
            if (this.peekCodePoint(0) === Sr)
              return this.consumeCodePoint(), SQ;
            break;
          case Ut:
            if (po(e, this.peekCodePoint(0), this.peekCodePoint(1)))
              return this.reconsumeCodePoint(e), this.consumeNumericToken();
            break;
          case qp:
            return FQ;
          case NA:
            var o = e,
              l = this.peekCodePoint(0),
              a = this.peekCodePoint(1);
            if (po(o, l, a))
              return this.reconsumeCodePoint(e), this.consumeNumericToken();
            if (oi(o, l, a))
              return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
            if (l === NA && a === bp)
              return this.consumeCodePoint(), this.consumeCodePoint(), DQ;
            break;
          case Fn:
            if (po(e, this.peekCodePoint(0), this.peekCodePoint(1)))
              return this.reconsumeCodePoint(e), this.consumeNumericToken();
            break;
          case pc:
            if (this.peekCodePoint(0) === ho)
              for (this.consumeCodePoint(); ; ) {
                var u = this.consumeCodePoint();
                if (u === ho && ((u = this.consumeCodePoint()), u === pc))
                  return this.consumeToken();
                if (u === pe) return this.consumeToken();
              }
            break;
          case AQ:
            return TQ;
          case eQ:
            return kQ;
          case Pp:
            if (
              this.peekCodePoint(0) === Vp &&
              this.peekCodePoint(1) === NA &&
              this.peekCodePoint(2) === NA
            )
              return this.consumeCodePoint(), this.consumeCodePoint(), KQ;
            break;
          case Xp:
            var c = this.peekCodePoint(0),
              f = this.peekCodePoint(1),
              h = this.peekCodePoint(2);
            if (oi(c, f, h)) {
              var s = this.consumeName();
              return { type: 7, value: s };
            }
            break;
          case Wp:
            return OQ;
          case $r:
            if (be(e, this.peekCodePoint(0)))
              return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
            break;
          case Jp:
            return NQ;
          case Yp:
            if (this.peekCodePoint(0) === Sr)
              return this.consumeCodePoint(), mQ;
            break;
          case jp:
            return IQ;
          case zp:
            return xQ;
          case aQ:
          case cQ:
            var w = this.peekCodePoint(0),
              p = this.peekCodePoint(1);
            return (
              w === Ut &&
                (Ot(p) || p === ii) &&
                (this.consumeCodePoint(), this.consumeUnicodeRangeToken()),
              this.reconsumeCodePoint(e),
              this.consumeIdentLikeToken()
            );
          case Qc:
            if (this.peekCodePoint(0) === Sr)
              return this.consumeCodePoint(), EQ;
            if (this.peekCodePoint(0) === Qc)
              return this.consumeCodePoint(), yQ;
            break;
          case Zp:
            if (this.peekCodePoint(0) === Sr)
              return this.consumeCodePoint(), HQ;
            break;
          case pe:
            return Ml;
        }
        return si(e)
          ? (this.consumeWhiteSpace(), MQ)
          : mA(e)
          ? (this.reconsumeCodePoint(e), this.consumeNumericToken())
          : ns(e)
          ? (this.reconsumeCodePoint(e), this.consumeIdentLikeToken())
          : { type: 6, value: iA(e) };
      }),
      (A.prototype.consumeCodePoint = function () {
        var e = this._value.shift();
        return typeof e > "u" ? -1 : e;
      }),
      (A.prototype.reconsumeCodePoint = function (e) {
        this._value.unshift(e);
      }),
      (A.prototype.peekCodePoint = function (e) {
        return e >= this._value.length ? -1 : this._value[e];
      }),
      (A.prototype.consumeUnicodeRangeToken = function () {
        for (var e = [], t = this.consumeCodePoint(); Ot(t) && e.length < 6; )
          e.push(t), (t = this.consumeCodePoint());
        for (var r = !1; t === ii && e.length < 6; )
          e.push(t), (t = this.consumeCodePoint()), (r = !0);
        if (r) {
          var n = parseInt(
              iA.apply(
                void 0,
                e.map(function (l) {
                  return l === ii ? mg : l;
                })
              ),
              16
            ),
            i = parseInt(
              iA.apply(
                void 0,
                e.map(function (l) {
                  return l === ii ? xg : l;
                })
              ),
              16
            );
          return { type: 30, start: n, end: i };
        }
        var s = parseInt(iA.apply(void 0, e), 16);
        if (this.peekCodePoint(0) === NA && Ot(this.peekCodePoint(1))) {
          this.consumeCodePoint(), (t = this.consumeCodePoint());
          for (var o = []; Ot(t) && o.length < 6; )
            o.push(t), (t = this.consumeCodePoint());
          var i = parseInt(iA.apply(void 0, o), 16);
          return { type: 30, start: s, end: i };
        } else return { type: 30, start: s, end: s };
      }),
      (A.prototype.consumeIdentLikeToken = function () {
        var e = this.consumeName();
        return e.toLowerCase() === "url" && this.peekCodePoint(0) === ni
          ? (this.consumeCodePoint(), this.consumeUrlToken())
          : this.peekCodePoint(0) === ni
          ? (this.consumeCodePoint(), { type: 19, value: e })
          : { type: 20, value: e };
      }),
      (A.prototype.consumeUrlToken = function () {
        var e = [];
        if ((this.consumeWhiteSpace(), this.peekCodePoint(0) === pe))
          return { type: 22, value: "" };
        var t = this.peekCodePoint(0);
        if (t === ri || t === ti) {
          var r = this.consumeStringToken(this.consumeCodePoint());
          return r.type === 0 &&
            (this.consumeWhiteSpace(),
            this.peekCodePoint(0) === pe || this.peekCodePoint(0) === Lr)
            ? (this.consumeCodePoint(), { type: 22, value: r.value })
            : (this.consumeBadUrlRemnants(), li);
        }
        for (;;) {
          var n = this.consumeCodePoint();
          if (n === pe || n === Lr)
            return { type: 22, value: iA.apply(void 0, e) };
          if (si(n))
            return (
              this.consumeWhiteSpace(),
              this.peekCodePoint(0) === pe || this.peekCodePoint(0) === Lr
                ? (this.consumeCodePoint(),
                  { type: 22, value: iA.apply(void 0, e) })
                : (this.consumeBadUrlRemnants(), li)
            );
          if (n === ti || n === ri || n === ni || pQ(n))
            return this.consumeBadUrlRemnants(), li;
          if (n === $r)
            if (be(n, this.peekCodePoint(0)))
              e.push(this.consumeEscapedCodePoint());
            else return this.consumeBadUrlRemnants(), li;
          else e.push(n);
        }
      }),
      (A.prototype.consumeWhiteSpace = function () {
        for (; si(this.peekCodePoint(0)); ) this.consumeCodePoint();
      }),
      (A.prototype.consumeBadUrlRemnants = function () {
        for (;;) {
          var e = this.consumeCodePoint();
          if (e === Lr || e === pe) return;
          be(e, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
        }
      }),
      (A.prototype.consumeStringSlice = function (e) {
        for (var t = 5e4, r = ""; e > 0; ) {
          var n = Math.min(t, e);
          (r += iA.apply(void 0, this._value.splice(0, n))), (e -= n);
        }
        return this._value.shift(), r;
      }),
      (A.prototype.consumeStringToken = function (e) {
        var t = "",
          r = 0;
        do {
          var n = this._value[r];
          if (n === pe || n === void 0 || n === e)
            return (t += this.consumeStringSlice(r)), { type: 0, value: t };
          if (n === rs) return this._value.splice(0, r), LQ;
          if (n === $r) {
            var i = this._value[r + 1];
            i !== pe &&
              i !== void 0 &&
              (i === rs
                ? ((t += this.consumeStringSlice(r)),
                  (r = -1),
                  this._value.shift())
                : be(n, i) &&
                  ((t += this.consumeStringSlice(r)),
                  (t += iA(this.consumeEscapedCodePoint())),
                  (r = -1)));
          }
          r++;
        } while (!0);
      }),
      (A.prototype.consumeNumber = function () {
        var e = [],
          t = xn,
          r = this.peekCodePoint(0);
        for (
          (r === Ut || r === NA) && e.push(this.consumeCodePoint());
          mA(this.peekCodePoint(0));

        )
          e.push(this.consumeCodePoint());
        r = this.peekCodePoint(0);
        var n = this.peekCodePoint(1);
        if (r === Fn && mA(n))
          for (
            e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = hc;
            mA(this.peekCodePoint(0));

          )
            e.push(this.consumeCodePoint());
        (r = this.peekCodePoint(0)), (n = this.peekCodePoint(1));
        var i = this.peekCodePoint(2);
        if (
          (r === Ig || r === Eg) &&
          (((n === Ut || n === NA) && mA(i)) || mA(n))
        )
          for (
            e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = hc;
            mA(this.peekCodePoint(0));

          )
            e.push(this.consumeCodePoint());
        return [QQ(e), t];
      }),
      (A.prototype.consumeNumericToken = function () {
        var e = this.consumeNumber(),
          t = e[0],
          r = e[1],
          n = this.peekCodePoint(0),
          i = this.peekCodePoint(1),
          s = this.peekCodePoint(2);
        if (oi(n, i, s)) {
          var o = this.consumeName();
          return { type: 15, number: t, flags: r, unit: o };
        }
        return n === _p
          ? (this.consumeCodePoint(), { type: 16, number: t, flags: r })
          : { type: 17, number: t, flags: r };
      }),
      (A.prototype.consumeEscapedCodePoint = function () {
        var e = this.consumeCodePoint();
        if (Ot(e)) {
          for (var t = iA(e); Ot(this.peekCodePoint(0)) && t.length < 6; )
            t += iA(this.consumeCodePoint());
          si(this.peekCodePoint(0)) && this.consumeCodePoint();
          var r = parseInt(t, 16);
          return r === 0 || fQ(r) || r > 1114111 ? Cc : r;
        }
        return e === pe ? Cc : e;
      }),
      (A.prototype.consumeName = function () {
        for (var e = ""; ; ) {
          var t = this.consumeCodePoint();
          if (Uc(t)) e += iA(t);
          else if (be(t, this.peekCodePoint(0)))
            e += iA(this.consumeEscapedCodePoint());
          else return this.reconsumeCodePoint(t), e;
        }
      }),
      A
    );
  })(),
  Lg = (function () {
    function A(e) {
      this._tokens = e;
    }
    return (
      (A.create = function (e) {
        var t = new Sg();
        return t.write(e), new A(t.read());
      }),
      (A.parseValue = function (e) {
        return A.create(e).parseComponentValue();
      }),
      (A.parseValues = function (e) {
        return A.create(e).parseComponentValues();
      }),
      (A.prototype.parseComponentValue = function () {
        for (var e = this.consumeToken(); e.type === 31; )
          e = this.consumeToken();
        if (e.type === 32)
          throw new SyntaxError(
            "Error parsing CSS component value, unexpected EOF"
          );
        this.reconsumeToken(e);
        var t = this.consumeComponentValue();
        do e = this.consumeToken();
        while (e.type === 31);
        if (e.type === 32) return t;
        throw new SyntaxError(
          "Error parsing CSS component value, multiple values found when expecting only one"
        );
      }),
      (A.prototype.parseComponentValues = function () {
        for (var e = []; ; ) {
          var t = this.consumeComponentValue();
          if (t.type === 32) return e;
          e.push(t), e.push();
        }
      }),
      (A.prototype.consumeComponentValue = function () {
        var e = this.consumeToken();
        switch (e.type) {
          case 11:
          case 28:
          case 2:
            return this.consumeSimpleBlock(e.type);
          case 19:
            return this.consumeFunction(e);
        }
        return e;
      }),
      (A.prototype.consumeSimpleBlock = function (e) {
        for (var t = { type: e, values: [] }, r = this.consumeToken(); ; ) {
          if (r.type === 32 || _Q(r, e)) return t;
          this.reconsumeToken(r),
            t.values.push(this.consumeComponentValue()),
            (r = this.consumeToken());
        }
      }),
      (A.prototype.consumeFunction = function (e) {
        for (var t = { name: e.value, values: [], type: 18 }; ; ) {
          var r = this.consumeToken();
          if (r.type === 32 || r.type === 3) return t;
          this.reconsumeToken(r), t.values.push(this.consumeComponentValue());
        }
      }),
      (A.prototype.consumeToken = function () {
        var e = this._tokens.shift();
        return typeof e > "u" ? Ml : e;
      }),
      (A.prototype.reconsumeToken = function (e) {
        this._tokens.unshift(e);
      }),
      A
    );
  })(),
  Sn = function (A) {
    return A.type === 15;
  },
  Qr = function (A) {
    return A.type === 17;
  },
  P = function (A) {
    return A.type === 20;
  },
  RQ = function (A) {
    return A.type === 0;
  },
  Rl = function (A, e) {
    return P(A) && A.value === e;
  },
  Kg = function (A) {
    return A.type !== 31;
  },
  dr = function (A) {
    return A.type !== 31 && A.type !== 4;
  },
  ve = function (A) {
    var e = [],
      t = [];
    return (
      A.forEach(function (r) {
        if (r.type === 4) {
          if (t.length === 0)
            throw new Error("Error parsing function args, zero tokens for arg");
          e.push(t), (t = []);
          return;
        }
        r.type !== 31 && t.push(r);
      }),
      t.length && e.push(t),
      e
    );
  },
  _Q = function (A, e) {
    return (e === 11 && A.type === 12) || (e === 28 && A.type === 29)
      ? !0
      : e === 2 && A.type === 3;
  },
  ut = function (A) {
    return A.type === 17 || A.type === 15;
  },
  lA = function (A) {
    return A.type === 16 || ut(A);
  },
  Dg = function (A) {
    return A.length > 1 ? [A[0], A[1]] : [A[0]];
  },
  pA = { type: 17, number: 0, flags: xn },
  ba = { type: 16, number: 50, flags: xn },
  ze = { type: 16, number: 100, flags: xn },
  _r = function (A, e, t) {
    var r = A[0],
      n = A[1];
    return [W(r, e), W(typeof n < "u" ? n : r, t)];
  },
  W = function (A, e) {
    if (A.type === 16) return (A.number / 100) * e;
    if (Sn(A))
      switch (A.unit) {
        case "rem":
        case "em":
          return 16 * A.number;
        case "px":
        default:
          return A.number;
      }
    return A.number;
  },
  Tg = "deg",
  kg = "grad",
  Og = "rad",
  Ng = "turn",
  Ls = {
    name: "angle",
    parse: function (A, e) {
      if (e.type === 15)
        switch (e.unit) {
          case Tg:
            return (Math.PI * e.number) / 180;
          case kg:
            return (Math.PI / 200) * e.number;
          case Og:
            return e.number;
          case Ng:
            return Math.PI * 2 * e.number;
        }
      throw new Error("Unsupported angle type");
    },
  },
  Mg = function (A) {
    return (
      A.type === 15 &&
      (A.unit === Tg || A.unit === kg || A.unit === Og || A.unit === Ng)
    );
  },
  Rg = function (A) {
    var e = A.filter(P)
      .map(function (t) {
        return t.value;
      })
      .join(" ");
    switch (e) {
      case "to bottom right":
      case "to right bottom":
      case "left top":
      case "top left":
        return [pA, pA];
      case "to top":
      case "bottom":
        return te(0);
      case "to bottom left":
      case "to left bottom":
      case "right top":
      case "top right":
        return [pA, ze];
      case "to right":
      case "left":
        return te(90);
      case "to top left":
      case "to left top":
      case "right bottom":
      case "bottom right":
        return [ze, ze];
      case "to bottom":
      case "top":
        return te(180);
      case "to top right":
      case "to right top":
      case "left bottom":
      case "bottom left":
        return [ze, pA];
      case "to left":
      case "right":
        return te(270);
    }
    return 0;
  },
  te = function (A) {
    return (Math.PI * A) / 180;
  },
  st = {
    name: "color",
    parse: function (A, e) {
      if (e.type === 18) {
        var t = GQ[e.name];
        if (typeof t > "u")
          throw new Error(
            'Attempting to parse an unsupported color function "' + e.name + '"'
          );
        return t(A, e.values);
      }
      if (e.type === 5) {
        if (e.value.length === 3) {
          var r = e.value.substring(0, 1),
            n = e.value.substring(1, 2),
            i = e.value.substring(2, 3);
          return Ze(
            parseInt(r + r, 16),
            parseInt(n + n, 16),
            parseInt(i + i, 16),
            1
          );
        }
        if (e.value.length === 4) {
          var r = e.value.substring(0, 1),
            n = e.value.substring(1, 2),
            i = e.value.substring(2, 3),
            s = e.value.substring(3, 4);
          return Ze(
            parseInt(r + r, 16),
            parseInt(n + n, 16),
            parseInt(i + i, 16),
            parseInt(s + s, 16) / 255
          );
        }
        if (e.value.length === 6) {
          var r = e.value.substring(0, 2),
            n = e.value.substring(2, 4),
            i = e.value.substring(4, 6);
          return Ze(parseInt(r, 16), parseInt(n, 16), parseInt(i, 16), 1);
        }
        if (e.value.length === 8) {
          var r = e.value.substring(0, 2),
            n = e.value.substring(2, 4),
            i = e.value.substring(4, 6),
            s = e.value.substring(6, 8);
          return Ze(
            parseInt(r, 16),
            parseInt(n, 16),
            parseInt(i, 16),
            parseInt(s, 16) / 255
          );
        }
      }
      if (e.type === 20) {
        var o = Ke[e.value.toUpperCase()];
        if (typeof o < "u") return o;
      }
      return Ke.TRANSPARENT;
    },
  },
  ot = function (A) {
    return (255 & A) === 0;
  },
  fA = function (A) {
    var e = 255 & A,
      t = 255 & (A >> 8),
      r = 255 & (A >> 16),
      n = 255 & (A >> 24);
    return e < 255
      ? "rgba(" + n + "," + r + "," + t + "," + e / 255 + ")"
      : "rgb(" + n + "," + r + "," + t + ")";
  },
  Ze = function (A, e, t, r) {
    return (
      ((A << 24) | (e << 16) | (t << 8) | (Math.round(r * 255) << 0)) >>> 0
    );
  },
  Fc = function (A, e) {
    if (A.type === 17) return A.number;
    if (A.type === 16) {
      var t = e === 3 ? 1 : 255;
      return e === 3 ? (A.number / 100) * t : Math.round((A.number / 100) * t);
    }
    return 0;
  },
  vc = function (A, e) {
    var t = e.filter(dr);
    if (t.length === 3) {
      var r = t.map(Fc),
        n = r[0],
        i = r[1],
        s = r[2];
      return Ze(n, i, s, 1);
    }
    if (t.length === 4) {
      var o = t.map(Fc),
        n = o[0],
        i = o[1],
        s = o[2],
        l = o[3];
      return Ze(n, i, s, l);
    }
    return 0;
  };
function Qo(A, e, t) {
  return (
    t < 0 && (t += 1),
    t >= 1 && (t -= 1),
    t < 1 / 6
      ? (e - A) * t * 6 + A
      : t < 1 / 2
      ? e
      : t < 2 / 3
      ? (e - A) * 6 * (2 / 3 - t) + A
      : A
  );
}
var mc = function (A, e) {
    var t = e.filter(dr),
      r = t[0],
      n = t[1],
      i = t[2],
      s = t[3],
      o = (r.type === 17 ? te(r.number) : Ls.parse(A, r)) / (Math.PI * 2),
      l = lA(n) ? n.number / 100 : 0,
      a = lA(i) ? i.number / 100 : 0,
      u = typeof s < "u" && lA(s) ? W(s, 1) : 1;
    if (l === 0) return Ze(a * 255, a * 255, a * 255, 1);
    var c = a <= 0.5 ? a * (l + 1) : a + l - a * l,
      f = a * 2 - c,
      h = Qo(f, c, o + 1 / 3),
      w = Qo(f, c, o),
      p = Qo(f, c, o - 1 / 3);
    return Ze(h * 255, w * 255, p * 255, u);
  },
  GQ = { hsl: mc, hsla: mc, rgb: vc, rgba: vc },
  qr = function (A, e) {
    return st.parse(A, Lg.create(e).parseComponentValue());
  },
  Ke = {
    ALICEBLUE: 4042850303,
    ANTIQUEWHITE: 4209760255,
    AQUA: 16777215,
    AQUAMARINE: 2147472639,
    AZURE: 4043309055,
    BEIGE: 4126530815,
    BISQUE: 4293182719,
    BLACK: 255,
    BLANCHEDALMOND: 4293643775,
    BLUE: 65535,
    BLUEVIOLET: 2318131967,
    BROWN: 2771004159,
    BURLYWOOD: 3736635391,
    CADETBLUE: 1604231423,
    CHARTREUSE: 2147418367,
    CHOCOLATE: 3530104575,
    CORAL: 4286533887,
    CORNFLOWERBLUE: 1687547391,
    CORNSILK: 4294499583,
    CRIMSON: 3692313855,
    CYAN: 16777215,
    DARKBLUE: 35839,
    DARKCYAN: 9145343,
    DARKGOLDENROD: 3095837695,
    DARKGRAY: 2846468607,
    DARKGREEN: 6553855,
    DARKGREY: 2846468607,
    DARKKHAKI: 3182914559,
    DARKMAGENTA: 2332068863,
    DARKOLIVEGREEN: 1433087999,
    DARKORANGE: 4287365375,
    DARKORCHID: 2570243327,
    DARKRED: 2332033279,
    DARKSALMON: 3918953215,
    DARKSEAGREEN: 2411499519,
    DARKSLATEBLUE: 1211993087,
    DARKSLATEGRAY: 793726975,
    DARKSLATEGREY: 793726975,
    DARKTURQUOISE: 13554175,
    DARKVIOLET: 2483082239,
    DEEPPINK: 4279538687,
    DEEPSKYBLUE: 12582911,
    DIMGRAY: 1768516095,
    DIMGREY: 1768516095,
    DODGERBLUE: 512819199,
    FIREBRICK: 2988581631,
    FLORALWHITE: 4294635775,
    FORESTGREEN: 579543807,
    FUCHSIA: 4278255615,
    GAINSBORO: 3705462015,
    GHOSTWHITE: 4177068031,
    GOLD: 4292280575,
    GOLDENROD: 3668254975,
    GRAY: 2155905279,
    GREEN: 8388863,
    GREENYELLOW: 2919182335,
    GREY: 2155905279,
    HONEYDEW: 4043305215,
    HOTPINK: 4285117695,
    INDIANRED: 3445382399,
    INDIGO: 1258324735,
    IVORY: 4294963455,
    KHAKI: 4041641215,
    LAVENDER: 3873897215,
    LAVENDERBLUSH: 4293981695,
    LAWNGREEN: 2096890111,
    LEMONCHIFFON: 4294626815,
    LIGHTBLUE: 2916673279,
    LIGHTCORAL: 4034953471,
    LIGHTCYAN: 3774873599,
    LIGHTGOLDENRODYELLOW: 4210742015,
    LIGHTGRAY: 3553874943,
    LIGHTGREEN: 2431553791,
    LIGHTGREY: 3553874943,
    LIGHTPINK: 4290167295,
    LIGHTSALMON: 4288707327,
    LIGHTSEAGREEN: 548580095,
    LIGHTSKYBLUE: 2278488831,
    LIGHTSLATEGRAY: 2005441023,
    LIGHTSLATEGREY: 2005441023,
    LIGHTSTEELBLUE: 2965692159,
    LIGHTYELLOW: 4294959359,
    LIME: 16711935,
    LIMEGREEN: 852308735,
    LINEN: 4210091775,
    MAGENTA: 4278255615,
    MAROON: 2147483903,
    MEDIUMAQUAMARINE: 1724754687,
    MEDIUMBLUE: 52735,
    MEDIUMORCHID: 3126187007,
    MEDIUMPURPLE: 2473647103,
    MEDIUMSEAGREEN: 1018393087,
    MEDIUMSLATEBLUE: 2070474495,
    MEDIUMSPRINGGREEN: 16423679,
    MEDIUMTURQUOISE: 1221709055,
    MEDIUMVIOLETRED: 3340076543,
    MIDNIGHTBLUE: 421097727,
    MINTCREAM: 4127193855,
    MISTYROSE: 4293190143,
    MOCCASIN: 4293178879,
    NAVAJOWHITE: 4292783615,
    NAVY: 33023,
    OLDLACE: 4260751103,
    OLIVE: 2155872511,
    OLIVEDRAB: 1804477439,
    ORANGE: 4289003775,
    ORANGERED: 4282712319,
    ORCHID: 3664828159,
    PALEGOLDENROD: 4008225535,
    PALEGREEN: 2566625535,
    PALETURQUOISE: 2951671551,
    PALEVIOLETRED: 3681588223,
    PAPAYAWHIP: 4293907967,
    PEACHPUFF: 4292524543,
    PERU: 3448061951,
    PINK: 4290825215,
    PLUM: 3718307327,
    POWDERBLUE: 2967529215,
    PURPLE: 2147516671,
    REBECCAPURPLE: 1714657791,
    RED: 4278190335,
    ROSYBROWN: 3163525119,
    ROYALBLUE: 1097458175,
    SADDLEBROWN: 2336560127,
    SALMON: 4202722047,
    SANDYBROWN: 4104413439,
    SEAGREEN: 780883967,
    SEASHELL: 4294307583,
    SIENNA: 2689740287,
    SILVER: 3233857791,
    SKYBLUE: 2278484991,
    SLATEBLUE: 1784335871,
    SLATEGRAY: 1887473919,
    SLATEGREY: 1887473919,
    SNOW: 4294638335,
    SPRINGGREEN: 16744447,
    STEELBLUE: 1182971135,
    TAN: 3535047935,
    TEAL: 8421631,
    THISTLE: 3636451583,
    TOMATO: 4284696575,
    TRANSPARENT: 0,
    TURQUOISE: 1088475391,
    VIOLET: 4001558271,
    WHEAT: 4125012991,
    WHITE: 4294967295,
    WHITESMOKE: 4126537215,
    YELLOW: 4294902015,
    YELLOWGREEN: 2597139199,
  },
  VQ = {
    name: "background-clip",
    initialValue: "border-box",
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      return e.map(function (t) {
        if (P(t))
          switch (t.value) {
            case "padding-box":
              return 1;
            case "content-box":
              return 2;
          }
        return 0;
      });
    },
  },
  PQ = {
    name: "background-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color",
  },
  Ks = function (A, e) {
    var t = st.parse(A, e[0]),
      r = e[1];
    return r && lA(r) ? { color: t, stop: r } : { color: t, stop: null };
  },
  yc = function (A, e) {
    var t = A[0],
      r = A[A.length - 1];
    t.stop === null && (t.stop = pA), r.stop === null && (r.stop = ze);
    for (var n = [], i = 0, s = 0; s < A.length; s++) {
      var o = A[s].stop;
      if (o !== null) {
        var l = W(o, e);
        l > i ? n.push(l) : n.push(i), (i = l);
      } else n.push(null);
    }
    for (var a = null, s = 0; s < n.length; s++) {
      var u = n[s];
      if (u === null) a === null && (a = s);
      else if (a !== null) {
        for (
          var c = s - a, f = n[a - 1], h = (u - f) / (c + 1), w = 1;
          w <= c;
          w++
        )
          n[a + w - 1] = h * w;
        a = null;
      }
    }
    return A.map(function (p, x) {
      var g = p.color;
      return { color: g, stop: Math.max(Math.min(1, n[x] / e), 0) };
    });
  },
  bQ = function (A, e, t) {
    var r = e / 2,
      n = t / 2,
      i = W(A[0], e) - r,
      s = n - W(A[1], t);
    return (Math.atan2(s, i) + Math.PI * 2) % (Math.PI * 2);
  },
  XQ = function (A, e, t) {
    var r = typeof A == "number" ? A : bQ(A, e, t),
      n = Math.abs(e * Math.sin(r)) + Math.abs(t * Math.cos(r)),
      i = e / 2,
      s = t / 2,
      o = n / 2,
      l = Math.sin(r - Math.PI / 2) * o,
      a = Math.cos(r - Math.PI / 2) * o;
    return [n, i - a, i + a, s - l, s + l];
  },
  le = function (A, e) {
    return Math.sqrt(A * A + e * e);
  },
  Ec = function (A, e, t, r, n) {
    var i = [
      [0, 0],
      [0, e],
      [A, 0],
      [A, e],
    ];
    return i.reduce(
      function (s, o) {
        var l = o[0],
          a = o[1],
          u = le(t - l, r - a);
        return (n ? u < s.optimumDistance : u > s.optimumDistance)
          ? { optimumCorner: o, optimumDistance: u }
          : s;
      },
      { optimumDistance: n ? 1 / 0 : -1 / 0, optimumCorner: null }
    ).optimumCorner;
  },
  WQ = function (A, e, t, r, n) {
    var i = 0,
      s = 0;
    switch (A.size) {
      case 0:
        A.shape === 0
          ? (i = s =
              Math.min(
                Math.abs(e),
                Math.abs(e - r),
                Math.abs(t),
                Math.abs(t - n)
              ))
          : A.shape === 1 &&
            ((i = Math.min(Math.abs(e), Math.abs(e - r))),
            (s = Math.min(Math.abs(t), Math.abs(t - n))));
        break;
      case 2:
        if (A.shape === 0)
          i = s = Math.min(
            le(e, t),
            le(e, t - n),
            le(e - r, t),
            le(e - r, t - n)
          );
        else if (A.shape === 1) {
          var o =
              Math.min(Math.abs(t), Math.abs(t - n)) /
              Math.min(Math.abs(e), Math.abs(e - r)),
            l = Ec(r, n, e, t, !0),
            a = l[0],
            u = l[1];
          (i = le(a - e, (u - t) / o)), (s = o * i);
        }
        break;
      case 1:
        A.shape === 0
          ? (i = s =
              Math.max(
                Math.abs(e),
                Math.abs(e - r),
                Math.abs(t),
                Math.abs(t - n)
              ))
          : A.shape === 1 &&
            ((i = Math.max(Math.abs(e), Math.abs(e - r))),
            (s = Math.max(Math.abs(t), Math.abs(t - n))));
        break;
      case 3:
        if (A.shape === 0)
          i = s = Math.max(
            le(e, t),
            le(e, t - n),
            le(e - r, t),
            le(e - r, t - n)
          );
        else if (A.shape === 1) {
          var o =
              Math.max(Math.abs(t), Math.abs(t - n)) /
              Math.max(Math.abs(e), Math.abs(e - r)),
            c = Ec(r, n, e, t, !1),
            a = c[0],
            u = c[1];
          (i = le(a - e, (u - t) / o)), (s = o * i);
        }
        break;
    }
    return (
      Array.isArray(A.size) &&
        ((i = W(A.size[0], r)),
        (s = A.size.length === 2 ? W(A.size[1], n) : i)),
      [i, s]
    );
  },
  JQ = function (A, e) {
    var t = te(180),
      r = [];
    return (
      ve(e).forEach(function (n, i) {
        if (i === 0) {
          var s = n[0];
          if (s.type === 20 && s.value === "to") {
            t = Rg(n);
            return;
          } else if (Mg(s)) {
            t = Ls.parse(A, s);
            return;
          }
        }
        var o = Ks(A, n);
        r.push(o);
      }),
      { angle: t, stops: r, type: 1 }
    );
  },
  ai = function (A, e) {
    var t = te(180),
      r = [];
    return (
      ve(e).forEach(function (n, i) {
        if (i === 0) {
          var s = n[0];
          if (
            s.type === 20 &&
            ["top", "left", "right", "bottom"].indexOf(s.value) !== -1
          ) {
            t = Rg(n);
            return;
          } else if (Mg(s)) {
            t = (Ls.parse(A, s) + te(270)) % te(360);
            return;
          }
        }
        var o = Ks(A, n);
        r.push(o);
      }),
      { angle: t, stops: r, type: 1 }
    );
  },
  YQ = function (A, e) {
    var t = te(180),
      r = [],
      n = 1,
      i = 0,
      s = 3,
      o = [];
    return (
      ve(e).forEach(function (l, a) {
        var u = l[0];
        if (a === 0) {
          if (P(u) && u.value === "linear") {
            n = 1;
            return;
          } else if (P(u) && u.value === "radial") {
            n = 2;
            return;
          }
        }
        if (u.type === 18) {
          if (u.name === "from") {
            var c = st.parse(A, u.values[0]);
            r.push({ stop: pA, color: c });
          } else if (u.name === "to") {
            var c = st.parse(A, u.values[0]);
            r.push({ stop: ze, color: c });
          } else if (u.name === "color-stop") {
            var f = u.values.filter(dr);
            if (f.length === 2) {
              var c = st.parse(A, f[1]),
                h = f[0];
              Qr(h) &&
                r.push({
                  stop: { type: 16, number: h.number * 100, flags: h.flags },
                  color: c,
                });
            }
          }
        }
      }),
      n === 1
        ? { angle: (t + te(180)) % te(360), stops: r, type: n }
        : { size: s, shape: i, stops: r, position: o, type: n }
    );
  },
  _g = "closest-side",
  Gg = "farthest-side",
  Vg = "closest-corner",
  Pg = "farthest-corner",
  bg = "circle",
  Xg = "ellipse",
  Wg = "cover",
  Jg = "contain",
  jQ = function (A, e) {
    var t = 0,
      r = 3,
      n = [],
      i = [];
    return (
      ve(e).forEach(function (s, o) {
        var l = !0;
        if (o === 0) {
          var a = !1;
          l = s.reduce(function (c, f) {
            if (a)
              if (P(f))
                switch (f.value) {
                  case "center":
                    return i.push(ba), c;
                  case "top":
                  case "left":
                    return i.push(pA), c;
                  case "right":
                  case "bottom":
                    return i.push(ze), c;
                }
              else (lA(f) || ut(f)) && i.push(f);
            else if (P(f))
              switch (f.value) {
                case bg:
                  return (t = 0), !1;
                case Xg:
                  return (t = 1), !1;
                case "at":
                  return (a = !0), !1;
                case _g:
                  return (r = 0), !1;
                case Wg:
                case Gg:
                  return (r = 1), !1;
                case Jg:
                case Vg:
                  return (r = 2), !1;
                case Pg:
                  return (r = 3), !1;
              }
            else if (ut(f) || lA(f))
              return Array.isArray(r) || (r = []), r.push(f), !1;
            return c;
          }, l);
        }
        if (l) {
          var u = Ks(A, s);
          n.push(u);
        }
      }),
      { size: r, shape: t, stops: n, position: i, type: 2 }
    );
  },
  ui = function (A, e) {
    var t = 0,
      r = 3,
      n = [],
      i = [];
    return (
      ve(e).forEach(function (s, o) {
        var l = !0;
        if (
          (o === 0
            ? (l = s.reduce(function (u, c) {
                if (P(c))
                  switch (c.value) {
                    case "center":
                      return i.push(ba), !1;
                    case "top":
                    case "left":
                      return i.push(pA), !1;
                    case "right":
                    case "bottom":
                      return i.push(ze), !1;
                  }
                else if (lA(c) || ut(c)) return i.push(c), !1;
                return u;
              }, l))
            : o === 1 &&
              (l = s.reduce(function (u, c) {
                if (P(c))
                  switch (c.value) {
                    case bg:
                      return (t = 0), !1;
                    case Xg:
                      return (t = 1), !1;
                    case Jg:
                    case _g:
                      return (r = 0), !1;
                    case Gg:
                      return (r = 1), !1;
                    case Vg:
                      return (r = 2), !1;
                    case Wg:
                    case Pg:
                      return (r = 3), !1;
                  }
                else if (ut(c) || lA(c))
                  return Array.isArray(r) || (r = []), r.push(c), !1;
                return u;
              }, l)),
          l)
        ) {
          var a = Ks(A, s);
          n.push(a);
        }
      }),
      { size: r, shape: t, stops: n, position: i, type: 2 }
    );
  },
  zQ = function (A) {
    return A.type === 1;
  },
  ZQ = function (A) {
    return A.type === 2;
  },
  Xa = {
    name: "image",
    parse: function (A, e) {
      if (e.type === 22) {
        var t = { url: e.value, type: 0 };
        return A.cache.addImage(e.value), t;
      }
      if (e.type === 18) {
        var r = Yg[e.name];
        if (typeof r > "u")
          throw new Error(
            'Attempting to parse an unsupported image function "' + e.name + '"'
          );
        return r(A, e.values);
      }
      throw new Error("Unsupported image type " + e.type);
    },
  };
function $Q(A) {
  return (
    !(A.type === 20 && A.value === "none") && (A.type !== 18 || !!Yg[A.name])
  );
}
var Yg = {
    "linear-gradient": JQ,
    "-moz-linear-gradient": ai,
    "-ms-linear-gradient": ai,
    "-o-linear-gradient": ai,
    "-webkit-linear-gradient": ai,
    "radial-gradient": jQ,
    "-moz-radial-gradient": ui,
    "-ms-radial-gradient": ui,
    "-o-radial-gradient": ui,
    "-webkit-radial-gradient": ui,
    "-webkit-gradient": YQ,
  },
  qQ = {
    name: "background-image",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function (A, e) {
      if (e.length === 0) return [];
      var t = e[0];
      return t.type === 20 && t.value === "none"
        ? []
        : e
            .filter(function (r) {
              return dr(r) && $Q(r);
            })
            .map(function (r) {
              return Xa.parse(A, r);
            });
    },
  },
  AC = {
    name: "background-origin",
    initialValue: "border-box",
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      return e.map(function (t) {
        if (P(t))
          switch (t.value) {
            case "padding-box":
              return 1;
            case "content-box":
              return 2;
          }
        return 0;
      });
    },
  },
  eC = {
    name: "background-position",
    initialValue: "0% 0%",
    type: 1,
    prefix: !1,
    parse: function (A, e) {
      return ve(e)
        .map(function (t) {
          return t.filter(lA);
        })
        .map(Dg);
    },
  },
  tC = {
    name: "background-repeat",
    initialValue: "repeat",
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      return ve(e)
        .map(function (t) {
          return t
            .filter(P)
            .map(function (r) {
              return r.value;
            })
            .join(" ");
        })
        .map(rC);
    },
  },
  rC = function (A) {
    switch (A) {
      case "no-repeat":
        return 1;
      case "repeat-x":
      case "repeat no-repeat":
        return 2;
      case "repeat-y":
      case "no-repeat repeat":
        return 3;
      case "repeat":
      default:
        return 0;
    }
  },
  or;
(function (A) {
  (A.AUTO = "auto"), (A.CONTAIN = "contain"), (A.COVER = "cover");
})(or || (or = {}));
var nC = {
    name: "background-size",
    initialValue: "0",
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      return ve(e).map(function (t) {
        return t.filter(iC);
      });
    },
  },
  iC = function (A) {
    return P(A) || lA(A);
  },
  Ds = function (A) {
    return {
      name: "border-" + A + "-color",
      initialValue: "transparent",
      prefix: !1,
      type: 3,
      format: "color",
    };
  },
  sC = Ds("top"),
  oC = Ds("right"),
  lC = Ds("bottom"),
  aC = Ds("left"),
  Ts = function (A) {
    return {
      name: "border-radius-" + A,
      initialValue: "0 0",
      prefix: !1,
      type: 1,
      parse: function (e, t) {
        return Dg(t.filter(lA));
      },
    };
  },
  uC = Ts("top-left"),
  cC = Ts("top-right"),
  BC = Ts("bottom-right"),
  fC = Ts("bottom-left"),
  ks = function (A) {
    return {
      name: "border-" + A + "-style",
      initialValue: "solid",
      prefix: !1,
      type: 2,
      parse: function (e, t) {
        switch (t) {
          case "none":
            return 0;
          case "dashed":
            return 2;
          case "dotted":
            return 3;
          case "double":
            return 4;
        }
        return 1;
      },
    };
  },
  gC = ks("top"),
  dC = ks("right"),
  wC = ks("bottom"),
  hC = ks("left"),
  Os = function (A) {
    return {
      name: "border-" + A + "-width",
      initialValue: "0",
      type: 0,
      prefix: !1,
      parse: function (e, t) {
        return Sn(t) ? t.number : 0;
      },
    };
  },
  pC = Os("top"),
  QC = Os("right"),
  CC = Os("bottom"),
  UC = Os("left"),
  FC = {
    name: "color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color",
  },
  vC = {
    name: "direction",
    initialValue: "ltr",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "rtl":
          return 1;
        case "ltr":
        default:
          return 0;
      }
    },
  },
  mC = {
    name: "display",
    initialValue: "inline-block",
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      return e.filter(P).reduce(function (t, r) {
        return t | yC(r.value);
      }, 0);
    },
  },
  yC = function (A) {
    switch (A) {
      case "block":
      case "-webkit-box":
        return 2;
      case "inline":
        return 4;
      case "run-in":
        return 8;
      case "flow":
        return 16;
      case "flow-root":
        return 32;
      case "table":
        return 64;
      case "flex":
      case "-webkit-flex":
        return 128;
      case "grid":
      case "-ms-grid":
        return 256;
      case "ruby":
        return 512;
      case "subgrid":
        return 1024;
      case "list-item":
        return 2048;
      case "table-row-group":
        return 4096;
      case "table-header-group":
        return 8192;
      case "table-footer-group":
        return 16384;
      case "table-row":
        return 32768;
      case "table-cell":
        return 65536;
      case "table-column-group":
        return 131072;
      case "table-column":
        return 262144;
      case "table-caption":
        return 524288;
      case "ruby-base":
        return 1048576;
      case "ruby-text":
        return 2097152;
      case "ruby-base-container":
        return 4194304;
      case "ruby-text-container":
        return 8388608;
      case "contents":
        return 16777216;
      case "inline-block":
        return 33554432;
      case "inline-list-item":
        return 67108864;
      case "inline-table":
        return 134217728;
      case "inline-flex":
        return 268435456;
      case "inline-grid":
        return 536870912;
    }
    return 0;
  },
  EC = {
    name: "float",
    initialValue: "none",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "left":
          return 1;
        case "right":
          return 2;
        case "inline-start":
          return 3;
        case "inline-end":
          return 4;
      }
      return 0;
    },
  },
  HC = {
    name: "letter-spacing",
    initialValue: "0",
    prefix: !1,
    type: 0,
    parse: function (A, e) {
      return e.type === 20 && e.value === "normal"
        ? 0
        : e.type === 17 || e.type === 15
        ? e.number
        : 0;
    },
  },
  is;
(function (A) {
  (A.NORMAL = "normal"), (A.STRICT = "strict");
})(is || (is = {}));
var IC = {
    name: "line-break",
    initialValue: "normal",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "strict":
          return is.STRICT;
        case "normal":
        default:
          return is.NORMAL;
      }
    },
  },
  xC = { name: "line-height", initialValue: "normal", prefix: !1, type: 4 },
  Hc = function (A, e) {
    return P(A) && A.value === "normal"
      ? 1.2 * e
      : A.type === 17
      ? e * A.number
      : lA(A)
      ? W(A, e)
      : e;
  },
  SC = {
    name: "list-style-image",
    initialValue: "none",
    type: 0,
    prefix: !1,
    parse: function (A, e) {
      return e.type === 20 && e.value === "none" ? null : Xa.parse(A, e);
    },
  },
  LC = {
    name: "list-style-position",
    initialValue: "outside",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "inside":
          return 0;
        case "outside":
        default:
          return 1;
      }
    },
  },
  _l = {
    name: "list-style-type",
    initialValue: "none",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "disc":
          return 0;
        case "circle":
          return 1;
        case "square":
          return 2;
        case "decimal":
          return 3;
        case "cjk-decimal":
          return 4;
        case "decimal-leading-zero":
          return 5;
        case "lower-roman":
          return 6;
        case "upper-roman":
          return 7;
        case "lower-greek":
          return 8;
        case "lower-alpha":
          return 9;
        case "upper-alpha":
          return 10;
        case "arabic-indic":
          return 11;
        case "armenian":
          return 12;
        case "bengali":
          return 13;
        case "cambodian":
          return 14;
        case "cjk-earthly-branch":
          return 15;
        case "cjk-heavenly-stem":
          return 16;
        case "cjk-ideographic":
          return 17;
        case "devanagari":
          return 18;
        case "ethiopic-numeric":
          return 19;
        case "georgian":
          return 20;
        case "gujarati":
          return 21;
        case "gurmukhi":
          return 22;
        case "hebrew":
          return 22;
        case "hiragana":
          return 23;
        case "hiragana-iroha":
          return 24;
        case "japanese-formal":
          return 25;
        case "japanese-informal":
          return 26;
        case "kannada":
          return 27;
        case "katakana":
          return 28;
        case "katakana-iroha":
          return 29;
        case "khmer":
          return 30;
        case "korean-hangul-formal":
          return 31;
        case "korean-hanja-formal":
          return 32;
        case "korean-hanja-informal":
          return 33;
        case "lao":
          return 34;
        case "lower-armenian":
          return 35;
        case "malayalam":
          return 36;
        case "mongolian":
          return 37;
        case "myanmar":
          return 38;
        case "oriya":
          return 39;
        case "persian":
          return 40;
        case "simp-chinese-formal":
          return 41;
        case "simp-chinese-informal":
          return 42;
        case "tamil":
          return 43;
        case "telugu":
          return 44;
        case "thai":
          return 45;
        case "tibetan":
          return 46;
        case "trad-chinese-formal":
          return 47;
        case "trad-chinese-informal":
          return 48;
        case "upper-armenian":
          return 49;
        case "disclosure-open":
          return 50;
        case "disclosure-closed":
          return 51;
        case "none":
        default:
          return -1;
      }
    },
  },
  Ns = function (A) {
    return { name: "margin-" + A, initialValue: "0", prefix: !1, type: 4 };
  },
  KC = Ns("top"),
  DC = Ns("right"),
  TC = Ns("bottom"),
  kC = Ns("left"),
  OC = {
    name: "overflow",
    initialValue: "visible",
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      return e.filter(P).map(function (t) {
        switch (t.value) {
          case "hidden":
            return 1;
          case "scroll":
            return 2;
          case "clip":
            return 3;
          case "auto":
            return 4;
          case "visible":
          default:
            return 0;
        }
      });
    },
  },
  NC = {
    name: "overflow-wrap",
    initialValue: "normal",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "break-word":
          return "break-word";
        case "normal":
        default:
          return "normal";
      }
    },
  },
  Ms = function (A) {
    return {
      name: "padding-" + A,
      initialValue: "0",
      prefix: !1,
      type: 3,
      format: "length-percentage",
    };
  },
  MC = Ms("top"),
  RC = Ms("right"),
  _C = Ms("bottom"),
  GC = Ms("left"),
  VC = {
    name: "text-align",
    initialValue: "left",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "right":
          return 2;
        case "center":
        case "justify":
          return 1;
        case "left":
        default:
          return 0;
      }
    },
  },
  PC = {
    name: "position",
    initialValue: "static",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "relative":
          return 1;
        case "absolute":
          return 2;
        case "fixed":
          return 3;
        case "sticky":
          return 4;
      }
      return 0;
    },
  },
  bC = {
    name: "text-shadow",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function (A, e) {
      return e.length === 1 && Rl(e[0], "none")
        ? []
        : ve(e).map(function (t) {
            for (
              var r = {
                  color: Ke.TRANSPARENT,
                  offsetX: pA,
                  offsetY: pA,
                  blur: pA,
                },
                n = 0,
                i = 0;
              i < t.length;
              i++
            ) {
              var s = t[i];
              ut(s)
                ? (n === 0
                    ? (r.offsetX = s)
                    : n === 1
                    ? (r.offsetY = s)
                    : (r.blur = s),
                  n++)
                : (r.color = st.parse(A, s));
            }
            return r;
          });
    },
  },
  XC = {
    name: "text-transform",
    initialValue: "none",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "uppercase":
          return 2;
        case "lowercase":
          return 1;
        case "capitalize":
          return 3;
      }
      return 0;
    },
  },
  WC = {
    name: "transform",
    initialValue: "none",
    prefix: !0,
    type: 0,
    parse: function (A, e) {
      if (e.type === 20 && e.value === "none") return null;
      if (e.type === 18) {
        var t = jC[e.name];
        if (typeof t > "u")
          throw new Error(
            'Attempting to parse an unsupported transform function "' +
              e.name +
              '"'
          );
        return t(e.values);
      }
      return null;
    },
  },
  JC = function (A) {
    var e = A.filter(function (t) {
      return t.type === 17;
    }).map(function (t) {
      return t.number;
    });
    return e.length === 6 ? e : null;
  },
  YC = function (A) {
    var e = A.filter(function (l) {
        return l.type === 17;
      }).map(function (l) {
        return l.number;
      }),
      t = e[0],
      r = e[1];
    e[2], e[3];
    var n = e[4],
      i = e[5];
    e[6], e[7], e[8], e[9], e[10], e[11];
    var s = e[12],
      o = e[13];
    return e[14], e[15], e.length === 16 ? [t, r, n, i, s, o] : null;
  },
  jC = { matrix: JC, matrix3d: YC },
  Ic = { type: 16, number: 50, flags: xn },
  zC = [Ic, Ic],
  ZC = {
    name: "transform-origin",
    initialValue: "50% 50%",
    prefix: !0,
    type: 1,
    parse: function (A, e) {
      var t = e.filter(lA);
      return t.length !== 2 ? zC : [t[0], t[1]];
    },
  },
  $C = {
    name: "visible",
    initialValue: "none",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "hidden":
          return 1;
        case "collapse":
          return 2;
        case "visible":
        default:
          return 0;
      }
    },
  },
  An;
(function (A) {
  (A.NORMAL = "normal"), (A.BREAK_ALL = "break-all"), (A.KEEP_ALL = "keep-all");
})(An || (An = {}));
var qC = {
    name: "word-break",
    initialValue: "normal",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "break-all":
          return An.BREAK_ALL;
        case "keep-all":
          return An.KEEP_ALL;
        case "normal":
        default:
          return An.NORMAL;
      }
    },
  },
  A0 = {
    name: "z-index",
    initialValue: "auto",
    prefix: !1,
    type: 0,
    parse: function (A, e) {
      if (e.type === 20) return { auto: !0, order: 0 };
      if (Qr(e)) return { auto: !1, order: e.number };
      throw new Error("Invalid z-index number parsed");
    },
  },
  jg = {
    name: "time",
    parse: function (A, e) {
      if (e.type === 15)
        switch (e.unit.toLowerCase()) {
          case "s":
            return 1e3 * e.number;
          case "ms":
            return e.number;
        }
      throw new Error("Unsupported time type");
    },
  },
  e0 = {
    name: "opacity",
    initialValue: "1",
    type: 0,
    prefix: !1,
    parse: function (A, e) {
      return Qr(e) ? e.number : 1;
    },
  },
  t0 = {
    name: "text-decoration-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color",
  },
  r0 = {
    name: "text-decoration-line",
    initialValue: "none",
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      return e
        .filter(P)
        .map(function (t) {
          switch (t.value) {
            case "underline":
              return 1;
            case "overline":
              return 2;
            case "line-through":
              return 3;
            case "none":
              return 4;
          }
          return 0;
        })
        .filter(function (t) {
          return t !== 0;
        });
    },
  },
  n0 = {
    name: "font-family",
    initialValue: "",
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      var t = [],
        r = [];
      return (
        e.forEach(function (n) {
          switch (n.type) {
            case 20:
            case 0:
              t.push(n.value);
              break;
            case 17:
              t.push(n.number.toString());
              break;
            case 4:
              r.push(t.join(" ")), (t.length = 0);
              break;
          }
        }),
        t.length && r.push(t.join(" ")),
        r.map(function (n) {
          return n.indexOf(" ") === -1 ? n : "'" + n + "'";
        })
      );
    },
  },
  i0 = {
    name: "font-size",
    initialValue: "0",
    prefix: !1,
    type: 3,
    format: "length",
  },
  s0 = {
    name: "font-weight",
    initialValue: "normal",
    type: 0,
    prefix: !1,
    parse: function (A, e) {
      if (Qr(e)) return e.number;
      if (P(e))
        switch (e.value) {
          case "bold":
            return 700;
          case "normal":
          default:
            return 400;
        }
      return 400;
    },
  },
  o0 = {
    name: "font-variant",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function (A, e) {
      return e.filter(P).map(function (t) {
        return t.value;
      });
    },
  },
  l0 = {
    name: "font-style",
    initialValue: "normal",
    prefix: !1,
    type: 2,
    parse: function (A, e) {
      switch (e) {
        case "oblique":
          return "oblique";
        case "italic":
          return "italic";
        case "normal":
        default:
          return "normal";
      }
    },
  },
  cA = function (A, e) {
    return (A & e) !== 0;
  },
  a0 = {
    name: "content",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function (A, e) {
      if (e.length === 0) return [];
      var t = e[0];
      return t.type === 20 && t.value === "none" ? [] : e;
    },
  },
  u0 = {
    name: "counter-increment",
    initialValue: "none",
    prefix: !0,
    type: 1,
    parse: function (A, e) {
      if (e.length === 0) return null;
      var t = e[0];
      if (t.type === 20 && t.value === "none") return null;
      for (var r = [], n = e.filter(Kg), i = 0; i < n.length; i++) {
        var s = n[i],
          o = n[i + 1];
        if (s.type === 20) {
          var l = o && Qr(o) ? o.number : 1;
          r.push({ counter: s.value, increment: l });
        }
      }
      return r;
    },
  },
  c0 = {
    name: "counter-reset",
    initialValue: "none",
    prefix: !0,
    type: 1,
    parse: function (A, e) {
      if (e.length === 0) return [];
      for (var t = [], r = e.filter(Kg), n = 0; n < r.length; n++) {
        var i = r[n],
          s = r[n + 1];
        if (P(i) && i.value !== "none") {
          var o = s && Qr(s) ? s.number : 0;
          t.push({ counter: i.value, reset: o });
        }
      }
      return t;
    },
  },
  B0 = {
    name: "duration",
    initialValue: "0s",
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      return e.filter(Sn).map(function (t) {
        return jg.parse(A, t);
      });
    },
  },
  f0 = {
    name: "quotes",
    initialValue: "none",
    prefix: !0,
    type: 1,
    parse: function (A, e) {
      if (e.length === 0) return null;
      var t = e[0];
      if (t.type === 20 && t.value === "none") return null;
      var r = [],
        n = e.filter(RQ);
      if (n.length % 2 !== 0) return null;
      for (var i = 0; i < n.length; i += 2) {
        var s = n[i].value,
          o = n[i + 1].value;
        r.push({ open: s, close: o });
      }
      return r;
    },
  },
  xc = function (A, e, t) {
    if (!A) return "";
    var r = A[Math.min(e, A.length - 1)];
    return r ? (t ? r.open : r.close) : "";
  },
  g0 = {
    name: "box-shadow",
    initialValue: "none",
    type: 1,
    prefix: !1,
    parse: function (A, e) {
      return e.length === 1 && Rl(e[0], "none")
        ? []
        : ve(e).map(function (t) {
            for (
              var r = {
                  color: 255,
                  offsetX: pA,
                  offsetY: pA,
                  blur: pA,
                  spread: pA,
                  inset: !1,
                },
                n = 0,
                i = 0;
              i < t.length;
              i++
            ) {
              var s = t[i];
              Rl(s, "inset")
                ? (r.inset = !0)
                : ut(s)
                ? (n === 0
                    ? (r.offsetX = s)
                    : n === 1
                    ? (r.offsetY = s)
                    : n === 2
                    ? (r.blur = s)
                    : (r.spread = s),
                  n++)
                : (r.color = st.parse(A, s));
            }
            return r;
          });
    },
  },
  d0 = {
    name: "paint-order",
    initialValue: "normal",
    prefix: !1,
    type: 1,
    parse: function (A, e) {
      var t = [0, 1, 2],
        r = [];
      return (
        e.filter(P).forEach(function (n) {
          switch (n.value) {
            case "stroke":
              r.push(1);
              break;
            case "fill":
              r.push(0);
              break;
            case "markers":
              r.push(2);
              break;
          }
        }),
        t.forEach(function (n) {
          r.indexOf(n) === -1 && r.push(n);
        }),
        r
      );
    },
  },
  w0 = {
    name: "-webkit-text-stroke-color",
    initialValue: "currentcolor",
    prefix: !1,
    type: 3,
    format: "color",
  },
  h0 = {
    name: "-webkit-text-stroke-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function (A, e) {
      return Sn(e) ? e.number : 0;
    },
  },
  p0 = (function () {
    function A(e, t) {
      var r, n;
      (this.animationDuration = L(e, B0, t.animationDuration)),
        (this.backgroundClip = L(e, VQ, t.backgroundClip)),
        (this.backgroundColor = L(e, PQ, t.backgroundColor)),
        (this.backgroundImage = L(e, qQ, t.backgroundImage)),
        (this.backgroundOrigin = L(e, AC, t.backgroundOrigin)),
        (this.backgroundPosition = L(e, eC, t.backgroundPosition)),
        (this.backgroundRepeat = L(e, tC, t.backgroundRepeat)),
        (this.backgroundSize = L(e, nC, t.backgroundSize)),
        (this.borderTopColor = L(e, sC, t.borderTopColor)),
        (this.borderRightColor = L(e, oC, t.borderRightColor)),
        (this.borderBottomColor = L(e, lC, t.borderBottomColor)),
        (this.borderLeftColor = L(e, aC, t.borderLeftColor)),
        (this.borderTopLeftRadius = L(e, uC, t.borderTopLeftRadius)),
        (this.borderTopRightRadius = L(e, cC, t.borderTopRightRadius)),
        (this.borderBottomRightRadius = L(e, BC, t.borderBottomRightRadius)),
        (this.borderBottomLeftRadius = L(e, fC, t.borderBottomLeftRadius)),
        (this.borderTopStyle = L(e, gC, t.borderTopStyle)),
        (this.borderRightStyle = L(e, dC, t.borderRightStyle)),
        (this.borderBottomStyle = L(e, wC, t.borderBottomStyle)),
        (this.borderLeftStyle = L(e, hC, t.borderLeftStyle)),
        (this.borderTopWidth = L(e, pC, t.borderTopWidth)),
        (this.borderRightWidth = L(e, QC, t.borderRightWidth)),
        (this.borderBottomWidth = L(e, CC, t.borderBottomWidth)),
        (this.borderLeftWidth = L(e, UC, t.borderLeftWidth)),
        (this.boxShadow = L(e, g0, t.boxShadow)),
        (this.color = L(e, FC, t.color)),
        (this.direction = L(e, vC, t.direction)),
        (this.display = L(e, mC, t.display)),
        (this.float = L(e, EC, t.cssFloat)),
        (this.fontFamily = L(e, n0, t.fontFamily)),
        (this.fontSize = L(e, i0, t.fontSize)),
        (this.fontStyle = L(e, l0, t.fontStyle)),
        (this.fontVariant = L(e, o0, t.fontVariant)),
        (this.fontWeight = L(e, s0, t.fontWeight)),
        (this.letterSpacing = L(e, HC, t.letterSpacing)),
        (this.lineBreak = L(e, IC, t.lineBreak)),
        (this.lineHeight = L(e, xC, t.lineHeight)),
        (this.listStyleImage = L(e, SC, t.listStyleImage)),
        (this.listStylePosition = L(e, LC, t.listStylePosition)),
        (this.listStyleType = L(e, _l, t.listStyleType)),
        (this.marginTop = L(e, KC, t.marginTop)),
        (this.marginRight = L(e, DC, t.marginRight)),
        (this.marginBottom = L(e, TC, t.marginBottom)),
        (this.marginLeft = L(e, kC, t.marginLeft)),
        (this.opacity = L(e, e0, t.opacity));
      var i = L(e, OC, t.overflow);
      (this.overflowX = i[0]),
        (this.overflowY = i[i.length > 1 ? 1 : 0]),
        (this.overflowWrap = L(e, NC, t.overflowWrap)),
        (this.paddingTop = L(e, MC, t.paddingTop)),
        (this.paddingRight = L(e, RC, t.paddingRight)),
        (this.paddingBottom = L(e, _C, t.paddingBottom)),
        (this.paddingLeft = L(e, GC, t.paddingLeft)),
        (this.paintOrder = L(e, d0, t.paintOrder)),
        (this.position = L(e, PC, t.position)),
        (this.textAlign = L(e, VC, t.textAlign)),
        (this.textDecorationColor = L(
          e,
          t0,
          (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color
        )),
        (this.textDecorationLine = L(
          e,
          r0,
          (n = t.textDecorationLine) !== null && n !== void 0
            ? n
            : t.textDecoration
        )),
        (this.textShadow = L(e, bC, t.textShadow)),
        (this.textTransform = L(e, XC, t.textTransform)),
        (this.transform = L(e, WC, t.transform)),
        (this.transformOrigin = L(e, ZC, t.transformOrigin)),
        (this.visibility = L(e, $C, t.visibility)),
        (this.webkitTextStrokeColor = L(e, w0, t.webkitTextStrokeColor)),
        (this.webkitTextStrokeWidth = L(e, h0, t.webkitTextStrokeWidth)),
        (this.wordBreak = L(e, qC, t.wordBreak)),
        (this.zIndex = L(e, A0, t.zIndex));
    }
    return (
      (A.prototype.isVisible = function () {
        return this.display > 0 && this.opacity > 0 && this.visibility === 0;
      }),
      (A.prototype.isTransparent = function () {
        return ot(this.backgroundColor);
      }),
      (A.prototype.isTransformed = function () {
        return this.transform !== null;
      }),
      (A.prototype.isPositioned = function () {
        return this.position !== 0;
      }),
      (A.prototype.isPositionedWithZIndex = function () {
        return this.isPositioned() && !this.zIndex.auto;
      }),
      (A.prototype.isFloating = function () {
        return this.float !== 0;
      }),
      (A.prototype.isInlineLevel = function () {
        return (
          cA(this.display, 4) ||
          cA(this.display, 33554432) ||
          cA(this.display, 268435456) ||
          cA(this.display, 536870912) ||
          cA(this.display, 67108864) ||
          cA(this.display, 134217728)
        );
      }),
      A
    );
  })(),
  Q0 = (function () {
    function A(e, t) {
      (this.content = L(e, a0, t.content)), (this.quotes = L(e, f0, t.quotes));
    }
    return A;
  })(),
  Sc = (function () {
    function A(e, t) {
      (this.counterIncrement = L(e, u0, t.counterIncrement)),
        (this.counterReset = L(e, c0, t.counterReset));
    }
    return A;
  })(),
  L = function (A, e, t) {
    var r = new Sg(),
      n = t !== null && typeof t < "u" ? t.toString() : e.initialValue;
    r.write(n);
    var i = new Lg(r.read());
    switch (e.type) {
      case 2:
        var s = i.parseComponentValue();
        return e.parse(A, P(s) ? s.value : e.initialValue);
      case 0:
        return e.parse(A, i.parseComponentValue());
      case 1:
        return e.parse(A, i.parseComponentValues());
      case 4:
        return i.parseComponentValue();
      case 3:
        switch (e.format) {
          case "angle":
            return Ls.parse(A, i.parseComponentValue());
          case "color":
            return st.parse(A, i.parseComponentValue());
          case "image":
            return Xa.parse(A, i.parseComponentValue());
          case "length":
            var o = i.parseComponentValue();
            return ut(o) ? o : pA;
          case "length-percentage":
            var l = i.parseComponentValue();
            return lA(l) ? l : pA;
          case "time":
            return jg.parse(A, i.parseComponentValue());
        }
        break;
    }
  },
  C0 = "data-html2canvas-debug",
  U0 = function (A) {
    var e = A.getAttribute(C0);
    switch (e) {
      case "all":
        return 1;
      case "clone":
        return 2;
      case "parse":
        return 3;
      case "render":
        return 4;
      default:
        return 0;
    }
  },
  Gl = function (A, e) {
    var t = U0(A);
    return t === 1 || e === t;
  },
  me = (function () {
    function A(e, t) {
      if (
        ((this.context = e),
        (this.textNodes = []),
        (this.elements = []),
        (this.flags = 0),
        Gl(t, 3))
      )
        debugger;
      (this.styles = new p0(e, window.getComputedStyle(t, null))),
        bl(t) &&
          (this.styles.animationDuration.some(function (r) {
            return r > 0;
          }) && (t.style.animationDuration = "0s"),
          this.styles.transform !== null && (t.style.transform = "none")),
        (this.bounds = xs(this.context, t)),
        Gl(t, 4) && (this.flags |= 16);
    }
    return A;
  })(),
  F0 =
    "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=",
  Lc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  Gr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var ci = 0; ci < Lc.length; ci++) Gr[Lc.charCodeAt(ci)] = ci;
var v0 = function (A) {
    var e = A.length * 0.75,
      t = A.length,
      r,
      n = 0,
      i,
      s,
      o,
      l;
    A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
    var a =
        typeof ArrayBuffer < "u" &&
        typeof Uint8Array < "u" &&
        typeof Uint8Array.prototype.slice < "u"
          ? new ArrayBuffer(e)
          : new Array(e),
      u = Array.isArray(a) ? a : new Uint8Array(a);
    for (r = 0; r < t; r += 4)
      (i = Gr[A.charCodeAt(r)]),
        (s = Gr[A.charCodeAt(r + 1)]),
        (o = Gr[A.charCodeAt(r + 2)]),
        (l = Gr[A.charCodeAt(r + 3)]),
        (u[n++] = (i << 2) | (s >> 4)),
        (u[n++] = ((s & 15) << 4) | (o >> 2)),
        (u[n++] = ((o & 3) << 6) | (l & 63));
    return a;
  },
  m0 = function (A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 2)
      t.push((A[r + 1] << 8) | A[r]);
    return t;
  },
  y0 = function (A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 4)
      t.push((A[r + 3] << 24) | (A[r + 2] << 16) | (A[r + 1] << 8) | A[r]);
    return t;
  },
  yt = 5,
  Wa = 11,
  Co = 2,
  E0 = Wa - yt,
  zg = 65536 >> yt,
  H0 = 1 << yt,
  Uo = H0 - 1,
  I0 = 1024 >> yt,
  x0 = zg + I0,
  S0 = x0,
  L0 = 32,
  K0 = S0 + L0,
  D0 = 65536 >> Wa,
  T0 = 1 << E0,
  k0 = T0 - 1,
  Kc = function (A, e, t) {
    return A.slice
      ? A.slice(e, t)
      : new Uint16Array(Array.prototype.slice.call(A, e, t));
  },
  O0 = function (A, e, t) {
    return A.slice
      ? A.slice(e, t)
      : new Uint32Array(Array.prototype.slice.call(A, e, t));
  },
  N0 = function (A, e) {
    var t = v0(A),
      r = Array.isArray(t) ? y0(t) : new Uint32Array(t),
      n = Array.isArray(t) ? m0(t) : new Uint16Array(t),
      i = 24,
      s = Kc(n, i / 2, r[4] / 2),
      o = r[5] === 2 ? Kc(n, (i + r[4]) / 2) : O0(r, Math.ceil((i + r[4]) / 4));
    return new M0(r[0], r[1], r[2], r[3], s, o);
  },
  M0 = (function () {
    function A(e, t, r, n, i, s) {
      (this.initialValue = e),
        (this.errorValue = t),
        (this.highStart = r),
        (this.highValueIndex = n),
        (this.index = i),
        (this.data = s);
    }
    return (
      (A.prototype.get = function (e) {
        var t;
        if (e >= 0) {
          if (e < 55296 || (e > 56319 && e <= 65535))
            return (
              (t = this.index[e >> yt]),
              (t = (t << Co) + (e & Uo)),
              this.data[t]
            );
          if (e <= 65535)
            return (
              (t = this.index[zg + ((e - 55296) >> yt)]),
              (t = (t << Co) + (e & Uo)),
              this.data[t]
            );
          if (e < this.highStart)
            return (
              (t = K0 - D0 + (e >> Wa)),
              (t = this.index[t]),
              (t += (e >> yt) & k0),
              (t = this.index[t]),
              (t = (t << Co) + (e & Uo)),
              this.data[t]
            );
          if (e <= 1114111) return this.data[this.highValueIndex];
        }
        return this.errorValue;
      }),
      A
    );
  })(),
  Dc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  R0 = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Bi = 0; Bi < Dc.length; Bi++) R0[Dc.charCodeAt(Bi)] = Bi;
var _0 = 1,
  Fo = 2,
  vo = 3,
  Tc = 4,
  kc = 5,
  G0 = 7,
  Oc = 8,
  mo = 9,
  yo = 10,
  Nc = 11,
  Mc = 12,
  Rc = 13,
  _c = 14,
  Eo = 15,
  V0 = function (A) {
    for (var e = [], t = 0, r = A.length; t < r; ) {
      var n = A.charCodeAt(t++);
      if (n >= 55296 && n <= 56319 && t < r) {
        var i = A.charCodeAt(t++);
        (i & 64512) === 56320
          ? e.push(((n & 1023) << 10) + (i & 1023) + 65536)
          : (e.push(n), t--);
      } else e.push(n);
    }
    return e;
  },
  P0 = function () {
    for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
    if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
    var t = A.length;
    if (!t) return "";
    for (var r = [], n = -1, i = ""; ++n < t; ) {
      var s = A[n];
      s <= 65535
        ? r.push(s)
        : ((s -= 65536), r.push((s >> 10) + 55296, (s % 1024) + 56320)),
        (n + 1 === t || r.length > 16384) &&
          ((i += String.fromCharCode.apply(String, r)), (r.length = 0));
    }
    return i;
  },
  b0 = N0(F0),
  ZA = "×",
  Ho = "÷",
  X0 = function (A) {
    return b0.get(A);
  },
  W0 = function (A, e, t) {
    var r = t - 2,
      n = e[r],
      i = e[t - 1],
      s = e[t];
    if (i === Fo && s === vo) return ZA;
    if (i === Fo || i === vo || i === Tc || s === Fo || s === vo || s === Tc)
      return Ho;
    if (
      (i === Oc && [Oc, mo, Nc, Mc].indexOf(s) !== -1) ||
      ((i === Nc || i === mo) && (s === mo || s === yo)) ||
      ((i === Mc || i === yo) && s === yo) ||
      s === Rc ||
      s === kc ||
      s === G0 ||
      i === _0
    )
      return ZA;
    if (i === Rc && s === _c) {
      for (; n === kc; ) n = e[--r];
      if (n === _c) return ZA;
    }
    if (i === Eo && s === Eo) {
      for (var o = 0; n === Eo; ) o++, (n = e[--r]);
      if (o % 2 === 0) return ZA;
    }
    return Ho;
  },
  J0 = function (A) {
    var e = V0(A),
      t = e.length,
      r = 0,
      n = 0,
      i = e.map(X0);
    return {
      next: function () {
        if (r >= t) return { done: !0, value: null };
        for (var s = ZA; r < t && (s = W0(e, i, ++r)) === ZA; );
        if (s !== ZA || r === t) {
          var o = P0.apply(null, e.slice(n, r));
          return (n = r), { value: o, done: !1 };
        }
        return { done: !0, value: null };
      },
    };
  },
  Y0 = function (A) {
    for (var e = J0(A), t = [], r; !(r = e.next()).done; )
      r.value && t.push(r.value.slice());
    return t;
  },
  j0 = function (A) {
    var e = 123;
    if (A.createRange) {
      var t = A.createRange();
      if (t.getBoundingClientRect) {
        var r = A.createElement("boundtest");
        (r.style.height = e + "px"),
          (r.style.display = "block"),
          A.body.appendChild(r),
          t.selectNode(r);
        var n = t.getBoundingClientRect(),
          i = Math.round(n.height);
        if ((A.body.removeChild(r), i === e)) return !0;
      }
    }
    return !1;
  },
  z0 = function (A) {
    var e = A.createElement("boundtest");
    (e.style.width = "50px"),
      (e.style.display = "block"),
      (e.style.fontSize = "12px"),
      (e.style.letterSpacing = "0px"),
      (e.style.wordSpacing = "0px"),
      A.body.appendChild(e);
    var t = A.createRange();
    e.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
    var r = e.firstChild,
      n = Ss(r.data).map(function (l) {
        return iA(l);
      }),
      i = 0,
      s = {},
      o = n.every(function (l, a) {
        t.setStart(r, i), t.setEnd(r, i + l.length);
        var u = t.getBoundingClientRect();
        i += l.length;
        var c = u.x > s.x || u.y > s.y;
        return (s = u), a === 0 ? !0 : c;
      });
    return A.body.removeChild(e), o;
  },
  Z0 = function () {
    return typeof new Image().crossOrigin < "u";
  },
  $0 = function () {
    return typeof new XMLHttpRequest().responseType == "string";
  },
  q0 = function (A) {
    var e = new Image(),
      t = A.createElement("canvas"),
      r = t.getContext("2d");
    if (!r) return !1;
    e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
    try {
      r.drawImage(e, 0, 0), t.toDataURL();
    } catch {
      return !1;
    }
    return !0;
  },
  Gc = function (A) {
    return A[0] === 0 && A[1] === 255 && A[2] === 0 && A[3] === 255;
  },
  AU = function (A) {
    var e = A.createElement("canvas"),
      t = 100;
    (e.width = t), (e.height = t);
    var r = e.getContext("2d");
    if (!r) return Promise.reject(!1);
    (r.fillStyle = "rgb(0, 255, 0)"), r.fillRect(0, 0, t, t);
    var n = new Image(),
      i = e.toDataURL();
    n.src = i;
    var s = Vl(t, t, 0, 0, n);
    return (
      (r.fillStyle = "red"),
      r.fillRect(0, 0, t, t),
      Vc(s)
        .then(function (o) {
          r.drawImage(o, 0, 0);
          var l = r.getImageData(0, 0, t, t).data;
          (r.fillStyle = "red"), r.fillRect(0, 0, t, t);
          var a = A.createElement("div");
          return (
            (a.style.backgroundImage = "url(" + i + ")"),
            (a.style.height = t + "px"),
            Gc(l) ? Vc(Vl(t, t, 0, 0, a)) : Promise.reject(!1)
          );
        })
        .then(function (o) {
          return r.drawImage(o, 0, 0), Gc(r.getImageData(0, 0, t, t).data);
        })
        .catch(function () {
          return !1;
        })
    );
  },
  Vl = function (A, e, t, r, n) {
    var i = "http://www.w3.org/2000/svg",
      s = document.createElementNS(i, "svg"),
      o = document.createElementNS(i, "foreignObject");
    return (
      s.setAttributeNS(null, "width", A.toString()),
      s.setAttributeNS(null, "height", e.toString()),
      o.setAttributeNS(null, "width", "100%"),
      o.setAttributeNS(null, "height", "100%"),
      o.setAttributeNS(null, "x", t.toString()),
      o.setAttributeNS(null, "y", r.toString()),
      o.setAttributeNS(null, "externalResourcesRequired", "true"),
      s.appendChild(o),
      o.appendChild(n),
      s
    );
  },
  Vc = function (A) {
    return new Promise(function (e, t) {
      var r = new Image();
      (r.onload = function () {
        return e(r);
      }),
        (r.onerror = t),
        (r.src =
          "data:image/svg+xml;charset=utf-8," +
          encodeURIComponent(new XMLSerializer().serializeToString(A)));
    });
  },
  hA = {
    get SUPPORT_RANGE_BOUNDS() {
      var A = j0(document);
      return Object.defineProperty(hA, "SUPPORT_RANGE_BOUNDS", { value: A }), A;
    },
    get SUPPORT_WORD_BREAKING() {
      var A = hA.SUPPORT_RANGE_BOUNDS && z0(document);
      return (
        Object.defineProperty(hA, "SUPPORT_WORD_BREAKING", { value: A }), A
      );
    },
    get SUPPORT_SVG_DRAWING() {
      var A = q0(document);
      return Object.defineProperty(hA, "SUPPORT_SVG_DRAWING", { value: A }), A;
    },
    get SUPPORT_FOREIGNOBJECT_DRAWING() {
      var A =
        typeof Array.from == "function" && typeof window.fetch == "function"
          ? AU(document)
          : Promise.resolve(!1);
      return (
        Object.defineProperty(hA, "SUPPORT_FOREIGNOBJECT_DRAWING", {
          value: A,
        }),
        A
      );
    },
    get SUPPORT_CORS_IMAGES() {
      var A = Z0();
      return Object.defineProperty(hA, "SUPPORT_CORS_IMAGES", { value: A }), A;
    },
    get SUPPORT_RESPONSE_TYPE() {
      var A = $0();
      return (
        Object.defineProperty(hA, "SUPPORT_RESPONSE_TYPE", { value: A }), A
      );
    },
    get SUPPORT_CORS_XHR() {
      var A = "withCredentials" in new XMLHttpRequest();
      return Object.defineProperty(hA, "SUPPORT_CORS_XHR", { value: A }), A;
    },
    get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
      var A = !!(typeof Intl < "u" && Intl.Segmenter);
      return (
        Object.defineProperty(hA, "SUPPORT_NATIVE_TEXT_SEGMENTATION", {
          value: A,
        }),
        A
      );
    },
  },
  en = (function () {
    function A(e, t) {
      (this.text = e), (this.bounds = t);
    }
    return A;
  })(),
  eU = function (A, e, t, r) {
    var n = nU(e, t),
      i = [],
      s = 0;
    return (
      n.forEach(function (o) {
        if (t.textDecorationLine.length || o.trim().length > 0)
          if (hA.SUPPORT_RANGE_BOUNDS) {
            var l = Pc(r, s, o.length).getClientRects();
            if (l.length > 1) {
              var a = Ja(o),
                u = 0;
              a.forEach(function (f) {
                i.push(
                  new en(
                    f,
                    Ne.fromDOMRectList(
                      A,
                      Pc(r, u + s, f.length).getClientRects()
                    )
                  )
                ),
                  (u += f.length);
              });
            } else i.push(new en(o, Ne.fromDOMRectList(A, l)));
          } else {
            var c = r.splitText(o.length);
            i.push(new en(o, tU(A, r))), (r = c);
          }
        else hA.SUPPORT_RANGE_BOUNDS || (r = r.splitText(o.length));
        s += o.length;
      }),
      i
    );
  },
  tU = function (A, e) {
    var t = e.ownerDocument;
    if (t) {
      var r = t.createElement("html2canvaswrapper");
      r.appendChild(e.cloneNode(!0));
      var n = e.parentNode;
      if (n) {
        n.replaceChild(r, e);
        var i = xs(A, r);
        return r.firstChild && n.replaceChild(r.firstChild, r), i;
      }
    }
    return Ne.EMPTY;
  },
  Pc = function (A, e, t) {
    var r = A.ownerDocument;
    if (!r) throw new Error("Node has no owner document");
    var n = r.createRange();
    return n.setStart(A, e), n.setEnd(A, e + t), n;
  },
  Ja = function (A) {
    if (hA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var e = new Intl.Segmenter(void 0, { granularity: "grapheme" });
      return Array.from(e.segment(A)).map(function (t) {
        return t.segment;
      });
    }
    return Y0(A);
  },
  rU = function (A, e) {
    if (hA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var t = new Intl.Segmenter(void 0, { granularity: "word" });
      return Array.from(t.segment(A)).map(function (r) {
        return r.segment;
      });
    }
    return sU(A, e);
  },
  nU = function (A, e) {
    return e.letterSpacing !== 0 ? Ja(A) : rU(A, e);
  },
  iU = [32, 160, 4961, 65792, 65793, 4153, 4241],
  sU = function (A, e) {
    for (
      var t = Dp(A, {
          lineBreak: e.lineBreak,
          wordBreak:
            e.overflowWrap === "break-word" ? "break-word" : e.wordBreak,
        }),
        r = [],
        n,
        i = function () {
          if (n.value) {
            var s = n.value.slice(),
              o = Ss(s),
              l = "";
            o.forEach(function (a) {
              iU.indexOf(a) === -1
                ? (l += iA(a))
                : (l.length && r.push(l), r.push(iA(a)), (l = ""));
            }),
              l.length && r.push(l);
          }
        };
      !(n = t.next()).done;

    )
      i();
    return r;
  },
  oU = (function () {
    function A(e, t, r) {
      (this.text = lU(t.data, r.textTransform)),
        (this.textBounds = eU(e, this.text, r, t));
    }
    return A;
  })(),
  lU = function (A, e) {
    switch (e) {
      case 1:
        return A.toLowerCase();
      case 3:
        return A.replace(aU, uU);
      case 2:
        return A.toUpperCase();
      default:
        return A;
    }
  },
  aU = /(^|\s|:|-|\(|\))([a-z])/g,
  uU = function (A, e, t) {
    return A.length > 0 ? e + t.toUpperCase() : A;
  },
  Zg = (function (A) {
    de(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return (
        (n.src = r.currentSrc || r.src),
        (n.intrinsicWidth = r.naturalWidth),
        (n.intrinsicHeight = r.naturalHeight),
        n.context.cache.addImage(n.src),
        n
      );
    }
    return e;
  })(me),
  $g = (function (A) {
    de(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return (
        (n.canvas = r),
        (n.intrinsicWidth = r.width),
        (n.intrinsicHeight = r.height),
        n
      );
    }
    return e;
  })(me),
  qg = (function (A) {
    de(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this,
        i = new XMLSerializer(),
        s = xs(t, r);
      return (
        r.setAttribute("width", s.width + "px"),
        r.setAttribute("height", s.height + "px"),
        (n.svg =
          "data:image/svg+xml," + encodeURIComponent(i.serializeToString(r))),
        (n.intrinsicWidth = r.width.baseVal.value),
        (n.intrinsicHeight = r.height.baseVal.value),
        n.context.cache.addImage(n.svg),
        n
      );
    }
    return e;
  })(me),
  Ad = (function (A) {
    de(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return (n.value = r.value), n;
    }
    return e;
  })(me),
  Pl = (function (A) {
    de(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return (
        (n.start = r.start),
        (n.reversed = typeof r.reversed == "boolean" && r.reversed === !0),
        n
      );
    }
    return e;
  })(me),
  cU = [{ type: 15, flags: 0, unit: "px", number: 3 }],
  BU = [{ type: 16, flags: 0, number: 50 }],
  fU = function (A) {
    return A.width > A.height
      ? new Ne(A.left + (A.width - A.height) / 2, A.top, A.height, A.height)
      : A.width < A.height
      ? new Ne(A.left, A.top + (A.height - A.width) / 2, A.width, A.width)
      : A;
  },
  gU = function (A) {
    var e = A.type === dU ? new Array(A.value.length + 1).join("•") : A.value;
    return e.length === 0 ? A.placeholder || "" : e;
  },
  ss = "checkbox",
  os = "radio",
  dU = "password",
  bc = 707406591,
  Ya = (function (A) {
    de(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      switch (
        ((n.type = r.type.toLowerCase()),
        (n.checked = r.checked),
        (n.value = gU(r)),
        (n.type === ss || n.type === os) &&
          ((n.styles.backgroundColor = 3739148031),
          (n.styles.borderTopColor =
            n.styles.borderRightColor =
            n.styles.borderBottomColor =
            n.styles.borderLeftColor =
              2779096575),
          (n.styles.borderTopWidth =
            n.styles.borderRightWidth =
            n.styles.borderBottomWidth =
            n.styles.borderLeftWidth =
              1),
          (n.styles.borderTopStyle =
            n.styles.borderRightStyle =
            n.styles.borderBottomStyle =
            n.styles.borderLeftStyle =
              1),
          (n.styles.backgroundClip = [0]),
          (n.styles.backgroundOrigin = [0]),
          (n.bounds = fU(n.bounds))),
        n.type)
      ) {
        case ss:
          n.styles.borderTopRightRadius =
            n.styles.borderTopLeftRadius =
            n.styles.borderBottomRightRadius =
            n.styles.borderBottomLeftRadius =
              cU;
          break;
        case os:
          n.styles.borderTopRightRadius =
            n.styles.borderTopLeftRadius =
            n.styles.borderBottomRightRadius =
            n.styles.borderBottomLeftRadius =
              BU;
          break;
      }
      return n;
    }
    return e;
  })(me),
  ed = (function (A) {
    de(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this,
        i = r.options[r.selectedIndex || 0];
      return (n.value = (i && i.text) || ""), n;
    }
    return e;
  })(me),
  td = (function (A) {
    de(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return (n.value = r.value), n;
    }
    return e;
  })(me),
  rd = (function (A) {
    de(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      (n.src = r.src),
        (n.width = parseInt(r.width, 10) || 0),
        (n.height = parseInt(r.height, 10) || 0),
        (n.backgroundColor = n.styles.backgroundColor);
      try {
        if (
          r.contentWindow &&
          r.contentWindow.document &&
          r.contentWindow.document.documentElement
        ) {
          n.tree = id(t, r.contentWindow.document.documentElement);
          var i = r.contentWindow.document.documentElement
              ? qr(
                  t,
                  getComputedStyle(r.contentWindow.document.documentElement)
                    .backgroundColor
                )
              : Ke.TRANSPARENT,
            s = r.contentWindow.document.body
              ? qr(
                  t,
                  getComputedStyle(r.contentWindow.document.body)
                    .backgroundColor
                )
              : Ke.TRANSPARENT;
          n.backgroundColor = ot(i)
            ? ot(s)
              ? n.styles.backgroundColor
              : s
            : i;
        }
      } catch {}
      return n;
    }
    return e;
  })(me),
  wU = ["OL", "UL", "MENU"],
  Li = function (A, e, t, r) {
    for (var n = e.firstChild, i = void 0; n; n = i)
      if (((i = n.nextSibling), sd(n) && n.data.trim().length > 0))
        t.textNodes.push(new oU(A, n, t.styles));
      else if (Ar(n))
        if (ud(n) && n.assignedNodes)
          n.assignedNodes().forEach(function (o) {
            return Li(A, o, t, r);
          });
        else {
          var s = nd(A, n);
          s.styles.isVisible() &&
            (hU(n, s, r) ? (s.flags |= 4) : pU(s.styles) && (s.flags |= 2),
            wU.indexOf(n.tagName) !== -1 && (s.flags |= 8),
            t.elements.push(s),
            n.slot,
            n.shadowRoot
              ? Li(A, n.shadowRoot, s, r)
              : !ls(n) && !od(n) && !as(n) && Li(A, n, s, r));
        }
  },
  nd = function (A, e) {
    return Xl(e)
      ? new Zg(A, e)
      : ld(e)
      ? new $g(A, e)
      : od(e)
      ? new qg(A, e)
      : QU(e)
      ? new Ad(A, e)
      : CU(e)
      ? new Pl(A, e)
      : UU(e)
      ? new Ya(A, e)
      : as(e)
      ? new ed(A, e)
      : ls(e)
      ? new td(A, e)
      : ad(e)
      ? new rd(A, e)
      : new me(A, e);
  },
  id = function (A, e) {
    var t = nd(A, e);
    return (t.flags |= 4), Li(A, e, t, t), t;
  },
  hU = function (A, e, t) {
    return (
      e.styles.isPositionedWithZIndex() ||
      e.styles.opacity < 1 ||
      e.styles.isTransformed() ||
      (ja(A) && t.styles.isTransparent())
    );
  },
  pU = function (A) {
    return A.isPositioned() || A.isFloating();
  },
  sd = function (A) {
    return A.nodeType === Node.TEXT_NODE;
  },
  Ar = function (A) {
    return A.nodeType === Node.ELEMENT_NODE;
  },
  bl = function (A) {
    return Ar(A) && typeof A.style < "u" && !Ki(A);
  },
  Ki = function (A) {
    return typeof A.className == "object";
  },
  QU = function (A) {
    return A.tagName === "LI";
  },
  CU = function (A) {
    return A.tagName === "OL";
  },
  UU = function (A) {
    return A.tagName === "INPUT";
  },
  FU = function (A) {
    return A.tagName === "HTML";
  },
  od = function (A) {
    return A.tagName === "svg";
  },
  ja = function (A) {
    return A.tagName === "BODY";
  },
  ld = function (A) {
    return A.tagName === "CANVAS";
  },
  Xc = function (A) {
    return A.tagName === "VIDEO";
  },
  Xl = function (A) {
    return A.tagName === "IMG";
  },
  ad = function (A) {
    return A.tagName === "IFRAME";
  },
  Wc = function (A) {
    return A.tagName === "STYLE";
  },
  vU = function (A) {
    return A.tagName === "SCRIPT";
  },
  ls = function (A) {
    return A.tagName === "TEXTAREA";
  },
  as = function (A) {
    return A.tagName === "SELECT";
  },
  ud = function (A) {
    return A.tagName === "SLOT";
  },
  Jc = function (A) {
    return A.tagName.indexOf("-") > 0;
  },
  mU = (function () {
    function A() {
      this.counters = {};
    }
    return (
      (A.prototype.getCounterValue = function (e) {
        var t = this.counters[e];
        return t && t.length ? t[t.length - 1] : 1;
      }),
      (A.prototype.getCounterValues = function (e) {
        var t = this.counters[e];
        return t || [];
      }),
      (A.prototype.pop = function (e) {
        var t = this;
        e.forEach(function (r) {
          return t.counters[r].pop();
        });
      }),
      (A.prototype.parse = function (e) {
        var t = this,
          r = e.counterIncrement,
          n = e.counterReset,
          i = !0;
        r !== null &&
          r.forEach(function (o) {
            var l = t.counters[o.counter];
            l &&
              o.increment !== 0 &&
              ((i = !1),
              l.length || l.push(1),
              (l[Math.max(0, l.length - 1)] += o.increment));
          });
        var s = [];
        return (
          i &&
            n.forEach(function (o) {
              var l = t.counters[o.counter];
              s.push(o.counter),
                l || (l = t.counters[o.counter] = []),
                l.push(o.reset);
            }),
          s
        );
      }),
      A
    );
  })(),
  Yc = {
    integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    values: [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ],
  },
  jc = {
    integers: [
      9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400,
      300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2,
      1,
    ],
    values: [
      "Ք",
      "Փ",
      "Ւ",
      "Ց",
      "Ր",
      "Տ",
      "Վ",
      "Ս",
      "Ռ",
      "Ջ",
      "Պ",
      "Չ",
      "Ո",
      "Շ",
      "Ն",
      "Յ",
      "Մ",
      "Ճ",
      "Ղ",
      "Ձ",
      "Հ",
      "Կ",
      "Ծ",
      "Խ",
      "Լ",
      "Ի",
      "Ժ",
      "Թ",
      "Ը",
      "Է",
      "Զ",
      "Ե",
      "Դ",
      "Գ",
      "Բ",
      "Ա",
    ],
  },
  yU = {
    integers: [
      1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90,
      80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3,
      2, 1,
    ],
    values: [
      "י׳",
      "ט׳",
      "ח׳",
      "ז׳",
      "ו׳",
      "ה׳",
      "ד׳",
      "ג׳",
      "ב׳",
      "א׳",
      "ת",
      "ש",
      "ר",
      "ק",
      "צ",
      "פ",
      "ע",
      "ס",
      "נ",
      "מ",
      "ל",
      "כ",
      "יט",
      "יח",
      "יז",
      "טז",
      "טו",
      "י",
      "ט",
      "ח",
      "ז",
      "ו",
      "ה",
      "ד",
      "ג",
      "ב",
      "א",
    ],
  },
  EU = {
    integers: [
      1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500,
      400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4,
      3, 2, 1,
    ],
    values: [
      "ჵ",
      "ჰ",
      "ჯ",
      "ჴ",
      "ხ",
      "ჭ",
      "წ",
      "ძ",
      "ც",
      "ჩ",
      "შ",
      "ყ",
      "ღ",
      "ქ",
      "ფ",
      "ჳ",
      "ტ",
      "ს",
      "რ",
      "ჟ",
      "პ",
      "ო",
      "ჲ",
      "ნ",
      "მ",
      "ლ",
      "კ",
      "ი",
      "თ",
      "ჱ",
      "ზ",
      "ვ",
      "ე",
      "დ",
      "გ",
      "ბ",
      "ა",
    ],
  },
  Nt = function (A, e, t, r, n, i) {
    return A < e || A > t
      ? vn(A, n, i.length > 0)
      : r.integers.reduce(function (s, o, l) {
          for (; A >= o; ) (A -= o), (s += r.values[l]);
          return s;
        }, "") + i;
  },
  cd = function (A, e, t, r) {
    var n = "";
    do t || A--, (n = r(A) + n), (A /= e);
    while (A * e >= e);
    return n;
  },
  nA = function (A, e, t, r, n) {
    var i = t - e + 1;
    return (
      (A < 0 ? "-" : "") +
      (cd(Math.abs(A), i, r, function (s) {
        return iA(Math.floor(s % i) + e);
      }) +
        n)
    );
  },
  gt = function (A, e, t) {
    t === void 0 && (t = ". ");
    var r = e.length;
    return (
      cd(Math.abs(A), r, !1, function (n) {
        return e[Math.floor(n % r)];
      }) + t
    );
  },
  _t = 1,
  _e = 2,
  Ge = 4,
  Vr = 8,
  Ee = function (A, e, t, r, n, i) {
    if (A < -9999 || A > 9999) return vn(A, 4, n.length > 0);
    var s = Math.abs(A),
      o = n;
    if (s === 0) return e[0] + o;
    for (var l = 0; s > 0 && l <= 4; l++) {
      var a = s % 10;
      a === 0 && cA(i, _t) && o !== ""
        ? (o = e[a] + o)
        : a > 1 ||
          (a === 1 && l === 0) ||
          (a === 1 && l === 1 && cA(i, _e)) ||
          (a === 1 && l === 1 && cA(i, Ge) && A > 100) ||
          (a === 1 && l > 1 && cA(i, Vr))
        ? (o = e[a] + (l > 0 ? t[l - 1] : "") + o)
        : a === 1 && l > 0 && (o = t[l - 1] + o),
        (s = Math.floor(s / 10));
    }
    return (A < 0 ? r : "") + o;
  },
  zc = "十百千萬",
  Zc = "拾佰仟萬",
  $c = "マイナス",
  Io = "마이너스",
  vn = function (A, e, t) {
    var r = t ? ". " : "",
      n = t ? "、" : "",
      i = t ? ", " : "",
      s = t ? " " : "";
    switch (e) {
      case 0:
        return "•" + s;
      case 1:
        return "◦" + s;
      case 2:
        return "◾" + s;
      case 5:
        var o = nA(A, 48, 57, !0, r);
        return o.length < 4 ? "0" + o : o;
      case 4:
        return gt(A, "〇一二三四五六七八九", n);
      case 6:
        return Nt(A, 1, 3999, Yc, 3, r).toLowerCase();
      case 7:
        return Nt(A, 1, 3999, Yc, 3, r);
      case 8:
        return nA(A, 945, 969, !1, r);
      case 9:
        return nA(A, 97, 122, !1, r);
      case 10:
        return nA(A, 65, 90, !1, r);
      case 11:
        return nA(A, 1632, 1641, !0, r);
      case 12:
      case 49:
        return Nt(A, 1, 9999, jc, 3, r);
      case 35:
        return Nt(A, 1, 9999, jc, 3, r).toLowerCase();
      case 13:
        return nA(A, 2534, 2543, !0, r);
      case 14:
      case 30:
        return nA(A, 6112, 6121, !0, r);
      case 15:
        return gt(A, "子丑寅卯辰巳午未申酉戌亥", n);
      case 16:
        return gt(A, "甲乙丙丁戊己庚辛壬癸", n);
      case 17:
      case 48:
        return Ee(A, "零一二三四五六七八九", zc, "負", n, _e | Ge | Vr);
      case 47:
        return Ee(A, "零壹貳參肆伍陸柒捌玖", Zc, "負", n, _t | _e | Ge | Vr);
      case 42:
        return Ee(A, "零一二三四五六七八九", zc, "负", n, _e | Ge | Vr);
      case 41:
        return Ee(A, "零壹贰叁肆伍陆柒捌玖", Zc, "负", n, _t | _e | Ge | Vr);
      case 26:
        return Ee(A, "〇一二三四五六七八九", "十百千万", $c, n, 0);
      case 25:
        return Ee(A, "零壱弐参四伍六七八九", "拾百千万", $c, n, _t | _e | Ge);
      case 31:
        return Ee(A, "영일이삼사오육칠팔구", "십백천만", Io, i, _t | _e | Ge);
      case 33:
        return Ee(A, "零一二三四五六七八九", "十百千萬", Io, i, 0);
      case 32:
        return Ee(A, "零壹貳參四五六七八九", "拾百千", Io, i, _t | _e | Ge);
      case 18:
        return nA(A, 2406, 2415, !0, r);
      case 20:
        return Nt(A, 1, 19999, EU, 3, r);
      case 21:
        return nA(A, 2790, 2799, !0, r);
      case 22:
        return nA(A, 2662, 2671, !0, r);
      case 22:
        return Nt(A, 1, 10999, yU, 3, r);
      case 23:
        return gt(
          A,
          "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん"
        );
      case 24:
        return gt(
          A,
          "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす"
        );
      case 27:
        return nA(A, 3302, 3311, !0, r);
      case 28:
        return gt(
          A,
          "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",
          n
        );
      case 29:
        return gt(
          A,
          "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",
          n
        );
      case 34:
        return nA(A, 3792, 3801, !0, r);
      case 37:
        return nA(A, 6160, 6169, !0, r);
      case 38:
        return nA(A, 4160, 4169, !0, r);
      case 39:
        return nA(A, 2918, 2927, !0, r);
      case 40:
        return nA(A, 1776, 1785, !0, r);
      case 43:
        return nA(A, 3046, 3055, !0, r);
      case 44:
        return nA(A, 3174, 3183, !0, r);
      case 45:
        return nA(A, 3664, 3673, !0, r);
      case 46:
        return nA(A, 3872, 3881, !0, r);
      case 3:
      default:
        return nA(A, 48, 57, !0, r);
    }
  },
  Bd = "data-html2canvas-ignore",
  qc = (function () {
    function A(e, t, r) {
      if (
        ((this.context = e),
        (this.options = r),
        (this.scrolledElements = []),
        (this.referenceElement = t),
        (this.counters = new mU()),
        (this.quoteDepth = 0),
        !t.ownerDocument)
      )
        throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(
        t.ownerDocument.documentElement,
        !1
      );
    }
    return (
      (A.prototype.toIFrame = function (e, t) {
        var r = this,
          n = HU(e, t);
        if (!n.contentWindow)
          return Promise.reject("Unable to find iframe window");
        var i = e.defaultView.pageXOffset,
          s = e.defaultView.pageYOffset,
          o = n.contentWindow,
          l = o.document,
          a = SU(n).then(function () {
            return IA(r, void 0, void 0, function () {
              var u, c;
              return vA(this, function (f) {
                switch (f.label) {
                  case 0:
                    return (
                      this.scrolledElements.forEach(TU),
                      o &&
                        (o.scrollTo(t.left, t.top),
                        /(iPad|iPhone|iPod)/g.test(navigator.userAgent) &&
                          (o.scrollY !== t.top || o.scrollX !== t.left) &&
                          (this.context.logger.warn(
                            "Unable to restore scroll position for cloned document"
                          ),
                          (this.context.windowBounds =
                            this.context.windowBounds.add(
                              o.scrollX - t.left,
                              o.scrollY - t.top,
                              0,
                              0
                            )))),
                      (u = this.options.onclone),
                      (c = this.clonedReferenceElement),
                      typeof c > "u"
                        ? [
                            2,
                            Promise.reject(
                              "Error finding the " +
                                this.referenceElement.nodeName +
                                " in the cloned document"
                            ),
                          ]
                        : l.fonts && l.fonts.ready
                        ? [4, l.fonts.ready]
                        : [3, 2]
                    );
                  case 1:
                    f.sent(), (f.label = 2);
                  case 2:
                    return /(AppleWebKit)/g.test(navigator.userAgent)
                      ? [4, xU(l)]
                      : [3, 4];
                  case 3:
                    f.sent(), (f.label = 4);
                  case 4:
                    return typeof u == "function"
                      ? [
                          2,
                          Promise.resolve()
                            .then(function () {
                              return u(l, c);
                            })
                            .then(function () {
                              return n;
                            }),
                        ]
                      : [2, n];
                }
              });
            });
          });
        return (
          l.open(),
          l.write(KU(document.doctype) + "<html></html>"),
          DU(this.referenceElement.ownerDocument, i, s),
          l.replaceChild(l.adoptNode(this.documentElement), l.documentElement),
          l.close(),
          a
        );
      }),
      (A.prototype.createElementClone = function (e) {
        if (Gl(e, 2)) debugger;
        if (ld(e)) return this.createCanvasClone(e);
        if (Xc(e)) return this.createVideoClone(e);
        if (Wc(e)) return this.createStyleClone(e);
        var t = e.cloneNode(!1);
        return (
          Xl(t) &&
            (Xl(e) &&
              e.currentSrc &&
              e.currentSrc !== e.src &&
              ((t.src = e.currentSrc), (t.srcset = "")),
            t.loading === "lazy" && (t.loading = "eager")),
          Jc(t) ? this.createCustomElementClone(t) : t
        );
      }),
      (A.prototype.createCustomElementClone = function (e) {
        var t = document.createElement("html2canvascustomelement");
        return xo(e.style, t), t;
      }),
      (A.prototype.createStyleClone = function (e) {
        try {
          var t = e.sheet;
          if (t && t.cssRules) {
            var r = [].slice.call(t.cssRules, 0).reduce(function (i, s) {
                return s && typeof s.cssText == "string" ? i + s.cssText : i;
              }, ""),
              n = e.cloneNode(!1);
            return (n.textContent = r), n;
          }
        } catch (i) {
          if (
            (this.context.logger.error("Unable to access cssRules property", i),
            i.name !== "SecurityError")
          )
            throw i;
        }
        return e.cloneNode(!1);
      }),
      (A.prototype.createCanvasClone = function (e) {
        var t;
        if (this.options.inlineImages && e.ownerDocument) {
          var r = e.ownerDocument.createElement("img");
          try {
            return (r.src = e.toDataURL()), r;
          } catch {
            this.context.logger.info(
              "Unable to inline canvas contents, canvas is tainted",
              e
            );
          }
        }
        var n = e.cloneNode(!1);
        try {
          (n.width = e.width), (n.height = e.height);
          var i = e.getContext("2d"),
            s = n.getContext("2d");
          if (s)
            if (!this.options.allowTaint && i)
              s.putImageData(i.getImageData(0, 0, e.width, e.height), 0, 0);
            else {
              var o =
                (t = e.getContext("webgl2")) !== null && t !== void 0
                  ? t
                  : e.getContext("webgl");
              if (o) {
                var l = o.getContextAttributes();
                (l == null ? void 0 : l.preserveDrawingBuffer) === !1 &&
                  this.context.logger.warn(
                    "Unable to clone WebGL context as it has preserveDrawingBuffer=false",
                    e
                  );
              }
              s.drawImage(e, 0, 0);
            }
          return n;
        } catch {
          this.context.logger.info(
            "Unable to clone canvas as it is tainted",
            e
          );
        }
        return n;
      }),
      (A.prototype.createVideoClone = function (e) {
        var t = e.ownerDocument.createElement("canvas");
        (t.width = e.offsetWidth), (t.height = e.offsetHeight);
        var r = t.getContext("2d");
        try {
          return (
            r &&
              (r.drawImage(e, 0, 0, t.width, t.height),
              this.options.allowTaint ||
                r.getImageData(0, 0, t.width, t.height)),
            t
          );
        } catch {
          this.context.logger.info("Unable to clone video as it is tainted", e);
        }
        var n = e.ownerDocument.createElement("canvas");
        return (n.width = e.offsetWidth), (n.height = e.offsetHeight), n;
      }),
      (A.prototype.appendChildNode = function (e, t, r) {
        (!Ar(t) ||
          (!vU(t) &&
            !t.hasAttribute(Bd) &&
            (typeof this.options.ignoreElements != "function" ||
              !this.options.ignoreElements(t)))) &&
          (!this.options.copyStyles || !Ar(t) || !Wc(t)) &&
          e.appendChild(this.cloneNode(t, r));
      }),
      (A.prototype.cloneChildNodes = function (e, t, r) {
        for (
          var n = this,
            i = e.shadowRoot ? e.shadowRoot.firstChild : e.firstChild;
          i;
          i = i.nextSibling
        )
          if (Ar(i) && ud(i) && typeof i.assignedNodes == "function") {
            var s = i.assignedNodes();
            s.length &&
              s.forEach(function (o) {
                return n.appendChildNode(t, o, r);
              });
          } else this.appendChildNode(t, i, r);
      }),
      (A.prototype.cloneNode = function (e, t) {
        if (sd(e)) return document.createTextNode(e.data);
        if (!e.ownerDocument) return e.cloneNode(!1);
        var r = e.ownerDocument.defaultView;
        if (r && Ar(e) && (bl(e) || Ki(e))) {
          var n = this.createElementClone(e);
          n.style.transitionProperty = "none";
          var i = r.getComputedStyle(e),
            s = r.getComputedStyle(e, ":before"),
            o = r.getComputedStyle(e, ":after");
          this.referenceElement === e &&
            bl(n) &&
            (this.clonedReferenceElement = n),
            ja(n) && NU(n);
          var l = this.counters.parse(new Sc(this.context, i)),
            a = this.resolvePseudoContent(e, n, s, tn.BEFORE);
          Jc(e) && (t = !0),
            Xc(e) || this.cloneChildNodes(e, n, t),
            a && n.insertBefore(a, n.firstChild);
          var u = this.resolvePseudoContent(e, n, o, tn.AFTER);
          return (
            u && n.appendChild(u),
            this.counters.pop(l),
            ((i && (this.options.copyStyles || Ki(e)) && !ad(e)) || t) &&
              xo(i, n),
            (e.scrollTop !== 0 || e.scrollLeft !== 0) &&
              this.scrolledElements.push([n, e.scrollLeft, e.scrollTop]),
            (ls(e) || as(e)) && (ls(n) || as(n)) && (n.value = e.value),
            n
          );
        }
        return e.cloneNode(!1);
      }),
      (A.prototype.resolvePseudoContent = function (e, t, r, n) {
        var i = this;
        if (r) {
          var s = r.content,
            o = t.ownerDocument;
          if (
            !(
              !o ||
              !s ||
              s === "none" ||
              s === "-moz-alt-content" ||
              r.display === "none"
            )
          ) {
            this.counters.parse(new Sc(this.context, r));
            var l = new Q0(this.context, r),
              a = o.createElement("html2canvaspseudoelement");
            xo(r, a),
              l.content.forEach(function (c) {
                if (c.type === 0) a.appendChild(o.createTextNode(c.value));
                else if (c.type === 22) {
                  var f = o.createElement("img");
                  (f.src = c.value), (f.style.opacity = "1"), a.appendChild(f);
                } else if (c.type === 18) {
                  if (c.name === "attr") {
                    var h = c.values.filter(P);
                    h.length &&
                      a.appendChild(
                        o.createTextNode(e.getAttribute(h[0].value) || "")
                      );
                  } else if (c.name === "counter") {
                    var w = c.values.filter(dr),
                      p = w[0],
                      x = w[1];
                    if (p && P(p)) {
                      var g = i.counters.getCounterValue(p.value),
                        B = x && P(x) ? _l.parse(i.context, x.value) : 3;
                      a.appendChild(o.createTextNode(vn(g, B, !1)));
                    }
                  } else if (c.name === "counters") {
                    var d = c.values.filter(dr),
                      p = d[0],
                      Q = d[1],
                      x = d[2];
                    if (p && P(p)) {
                      var U = i.counters.getCounterValues(p.value),
                        C = x && P(x) ? _l.parse(i.context, x.value) : 3,
                        v = Q && Q.type === 0 ? Q.value : "",
                        m = U.map(function (_) {
                          return vn(_, C, !1);
                        }).join(v);
                      a.appendChild(o.createTextNode(m));
                    }
                  }
                } else if (c.type === 20)
                  switch (c.value) {
                    case "open-quote":
                      a.appendChild(
                        o.createTextNode(xc(l.quotes, i.quoteDepth++, !0))
                      );
                      break;
                    case "close-quote":
                      a.appendChild(
                        o.createTextNode(xc(l.quotes, --i.quoteDepth, !1))
                      );
                      break;
                    default:
                      a.appendChild(o.createTextNode(c.value));
                  }
              }),
              (a.className = Wl + " " + Jl);
            var u = n === tn.BEFORE ? " " + Wl : " " + Jl;
            return Ki(t) ? (t.className.baseValue += u) : (t.className += u), a;
          }
        }
      }),
      (A.destroy = function (e) {
        return e.parentNode ? (e.parentNode.removeChild(e), !0) : !1;
      }),
      A
    );
  })(),
  tn;
(function (A) {
  (A[(A.BEFORE = 0)] = "BEFORE"), (A[(A.AFTER = 1)] = "AFTER");
})(tn || (tn = {}));
var HU = function (A, e) {
    var t = A.createElement("iframe");
    return (
      (t.className = "html2canvas-container"),
      (t.style.visibility = "hidden"),
      (t.style.position = "fixed"),
      (t.style.left = "-10000px"),
      (t.style.top = "0px"),
      (t.style.border = "0"),
      (t.width = e.width.toString()),
      (t.height = e.height.toString()),
      (t.scrolling = "no"),
      t.setAttribute(Bd, "true"),
      A.body.appendChild(t),
      t
    );
  },
  IU = function (A) {
    return new Promise(function (e) {
      if (A.complete) {
        e();
        return;
      }
      if (!A.src) {
        e();
        return;
      }
      (A.onload = e), (A.onerror = e);
    });
  },
  xU = function (A) {
    return Promise.all([].slice.call(A.images, 0).map(IU));
  },
  SU = function (A) {
    return new Promise(function (e, t) {
      var r = A.contentWindow;
      if (!r) return t("No window assigned for iframe");
      var n = r.document;
      r.onload = A.onload = function () {
        r.onload = A.onload = null;
        var i = setInterval(function () {
          n.body.childNodes.length > 0 &&
            n.readyState === "complete" &&
            (clearInterval(i), e(A));
        }, 50);
      };
    });
  },
  LU = ["all", "d", "content"],
  xo = function (A, e) {
    for (var t = A.length - 1; t >= 0; t--) {
      var r = A.item(t);
      LU.indexOf(r) === -1 && e.style.setProperty(r, A.getPropertyValue(r));
    }
    return e;
  },
  KU = function (A) {
    var e = "";
    return (
      A &&
        ((e += "<!DOCTYPE "),
        A.name && (e += A.name),
        A.internalSubset && (e += A.internalSubset),
        A.publicId && (e += '"' + A.publicId + '"'),
        A.systemId && (e += '"' + A.systemId + '"'),
        (e += ">")),
      e
    );
  },
  DU = function (A, e, t) {
    A &&
      A.defaultView &&
      (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) &&
      A.defaultView.scrollTo(e, t);
  },
  TU = function (A) {
    var e = A[0],
      t = A[1],
      r = A[2];
    (e.scrollLeft = t), (e.scrollTop = r);
  },
  kU = ":before",
  OU = ":after",
  Wl = "___html2canvas___pseudoelement_before",
  Jl = "___html2canvas___pseudoelement_after",
  AB = `{
    content: "" !important;
    display: none !important;
}`,
  NU = function (A) {
    MU(
      A,
      "." +
        Wl +
        kU +
        AB +
        `
         .` +
        Jl +
        OU +
        AB
    );
  },
  MU = function (A, e) {
    var t = A.ownerDocument;
    if (t) {
      var r = t.createElement("style");
      (r.textContent = e), A.appendChild(r);
    }
  },
  fd = (function () {
    function A() {}
    return (
      (A.getOrigin = function (e) {
        var t = A._link;
        return t
          ? ((t.href = e), (t.href = t.href), t.protocol + t.hostname + t.port)
          : "about:blank";
      }),
      (A.isSameOrigin = function (e) {
        return A.getOrigin(e) === A._origin;
      }),
      (A.setContext = function (e) {
        (A._link = e.document.createElement("a")),
          (A._origin = A.getOrigin(e.location.href));
      }),
      (A._origin = "about:blank"),
      A
    );
  })(),
  RU = (function () {
    function A(e, t) {
      (this.context = e), (this._options = t), (this._cache = {});
    }
    return (
      (A.prototype.addImage = function (e) {
        var t = Promise.resolve();
        return (
          this.has(e) ||
            ((Lo(e) || PU(e)) &&
              (this._cache[e] = this.loadImage(e)).catch(function () {})),
          t
        );
      }),
      (A.prototype.match = function (e) {
        return this._cache[e];
      }),
      (A.prototype.loadImage = function (e) {
        return IA(this, void 0, void 0, function () {
          var t,
            r,
            n,
            i,
            s = this;
          return vA(this, function (o) {
            switch (o.label) {
              case 0:
                return (
                  (t = fd.isSameOrigin(e)),
                  (r =
                    !So(e) &&
                    this._options.useCORS === !0 &&
                    hA.SUPPORT_CORS_IMAGES &&
                    !t),
                  (n =
                    !So(e) &&
                    !t &&
                    !Lo(e) &&
                    typeof this._options.proxy == "string" &&
                    hA.SUPPORT_CORS_XHR &&
                    !r),
                  !t &&
                  this._options.allowTaint === !1 &&
                  !So(e) &&
                  !Lo(e) &&
                  !n &&
                  !r
                    ? [2]
                    : ((i = e), n ? [4, this.proxy(i)] : [3, 2])
                );
              case 1:
                (i = o.sent()), (o.label = 2);
              case 2:
                return (
                  this.context.logger.debug(
                    "Added image " + e.substring(0, 256)
                  ),
                  [
                    4,
                    new Promise(function (l, a) {
                      var u = new Image();
                      (u.onload = function () {
                        return l(u);
                      }),
                        (u.onerror = a),
                        (bU(i) || r) && (u.crossOrigin = "anonymous"),
                        (u.src = i),
                        u.complete === !0 &&
                          setTimeout(function () {
                            return l(u);
                          }, 500),
                        s._options.imageTimeout > 0 &&
                          setTimeout(function () {
                            return a(
                              "Timed out (" +
                                s._options.imageTimeout +
                                "ms) loading image"
                            );
                          }, s._options.imageTimeout);
                    }),
                  ]
                );
              case 3:
                return [2, o.sent()];
            }
          });
        });
      }),
      (A.prototype.has = function (e) {
        return typeof this._cache[e] < "u";
      }),
      (A.prototype.keys = function () {
        return Promise.resolve(Object.keys(this._cache));
      }),
      (A.prototype.proxy = function (e) {
        var t = this,
          r = this._options.proxy;
        if (!r) throw new Error("No proxy defined");
        var n = e.substring(0, 256);
        return new Promise(function (i, s) {
          var o = hA.SUPPORT_RESPONSE_TYPE ? "blob" : "text",
            l = new XMLHttpRequest();
          (l.onload = function () {
            if (l.status === 200)
              if (o === "text") i(l.response);
              else {
                var c = new FileReader();
                c.addEventListener(
                  "load",
                  function () {
                    return i(c.result);
                  },
                  !1
                ),
                  c.addEventListener(
                    "error",
                    function (f) {
                      return s(f);
                    },
                    !1
                  ),
                  c.readAsDataURL(l.response);
              }
            else
              s(
                "Failed to proxy resource " +
                  n +
                  " with status code " +
                  l.status
              );
          }),
            (l.onerror = s);
          var a = r.indexOf("?") > -1 ? "&" : "?";
          if (
            (l.open(
              "GET",
              "" + r + a + "url=" + encodeURIComponent(e) + "&responseType=" + o
            ),
            o !== "text" && l instanceof XMLHttpRequest && (l.responseType = o),
            t._options.imageTimeout)
          ) {
            var u = t._options.imageTimeout;
            (l.timeout = u),
              (l.ontimeout = function () {
                return s("Timed out (" + u + "ms) proxying " + n);
              });
          }
          l.send();
        });
      }),
      A
    );
  })(),
  _U = /^data:image\/svg\+xml/i,
  GU = /^data:image\/.*;base64,/i,
  VU = /^data:image\/.*/i,
  PU = function (A) {
    return hA.SUPPORT_SVG_DRAWING || !XU(A);
  },
  So = function (A) {
    return VU.test(A);
  },
  bU = function (A) {
    return GU.test(A);
  },
  Lo = function (A) {
    return A.substr(0, 4) === "blob";
  },
  XU = function (A) {
    return A.substr(-3).toLowerCase() === "svg" || _U.test(A);
  },
  S = (function () {
    function A(e, t) {
      (this.type = 0), (this.x = e), (this.y = t);
    }
    return (
      (A.prototype.add = function (e, t) {
        return new A(this.x + e, this.y + t);
      }),
      A
    );
  })(),
  Mt = function (A, e, t) {
    return new S(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t);
  },
  fi = (function () {
    function A(e, t, r, n) {
      (this.type = 1),
        (this.start = e),
        (this.startControl = t),
        (this.endControl = r),
        (this.end = n);
    }
    return (
      (A.prototype.subdivide = function (e, t) {
        var r = Mt(this.start, this.startControl, e),
          n = Mt(this.startControl, this.endControl, e),
          i = Mt(this.endControl, this.end, e),
          s = Mt(r, n, e),
          o = Mt(n, i, e),
          l = Mt(s, o, e);
        return t ? new A(this.start, r, s, l) : new A(l, o, i, this.end);
      }),
      (A.prototype.add = function (e, t) {
        return new A(
          this.start.add(e, t),
          this.startControl.add(e, t),
          this.endControl.add(e, t),
          this.end.add(e, t)
        );
      }),
      (A.prototype.reverse = function () {
        return new A(this.end, this.endControl, this.startControl, this.start);
      }),
      A
    );
  })(),
  Ae = function (A) {
    return A.type === 1;
  },
  WU = (function () {
    function A(e) {
      var t = e.styles,
        r = e.bounds,
        n = _r(t.borderTopLeftRadius, r.width, r.height),
        i = n[0],
        s = n[1],
        o = _r(t.borderTopRightRadius, r.width, r.height),
        l = o[0],
        a = o[1],
        u = _r(t.borderBottomRightRadius, r.width, r.height),
        c = u[0],
        f = u[1],
        h = _r(t.borderBottomLeftRadius, r.width, r.height),
        w = h[0],
        p = h[1],
        x = [];
      x.push((i + l) / r.width),
        x.push((w + c) / r.width),
        x.push((s + p) / r.height),
        x.push((a + f) / r.height);
      var g = Math.max.apply(Math, x);
      g > 1 &&
        ((i /= g),
        (s /= g),
        (l /= g),
        (a /= g),
        (c /= g),
        (f /= g),
        (w /= g),
        (p /= g));
      var B = r.width - l,
        d = r.height - f,
        Q = r.width - c,
        U = r.height - p,
        C = t.borderTopWidth,
        v = t.borderRightWidth,
        m = t.borderBottomWidth,
        F = t.borderLeftWidth,
        H = W(t.paddingTop, e.bounds.width),
        _ = W(t.paddingRight, e.bounds.width),
        tA = W(t.paddingBottom, e.bounds.width),
        D = W(t.paddingLeft, e.bounds.width);
      (this.topLeftBorderDoubleOuterBox =
        i > 0 || s > 0
          ? Z(r.left + F / 3, r.top + C / 3, i - F / 3, s - C / 3, R.TOP_LEFT)
          : new S(r.left + F / 3, r.top + C / 3)),
        (this.topRightBorderDoubleOuterBox =
          i > 0 || s > 0
            ? Z(r.left + B, r.top + C / 3, l - v / 3, a - C / 3, R.TOP_RIGHT)
            : new S(r.left + r.width - v / 3, r.top + C / 3)),
        (this.bottomRightBorderDoubleOuterBox =
          c > 0 || f > 0
            ? Z(r.left + Q, r.top + d, c - v / 3, f - m / 3, R.BOTTOM_RIGHT)
            : new S(r.left + r.width - v / 3, r.top + r.height - m / 3)),
        (this.bottomLeftBorderDoubleOuterBox =
          w > 0 || p > 0
            ? Z(r.left + F / 3, r.top + U, w - F / 3, p - m / 3, R.BOTTOM_LEFT)
            : new S(r.left + F / 3, r.top + r.height - m / 3)),
        (this.topLeftBorderDoubleInnerBox =
          i > 0 || s > 0
            ? Z(
                r.left + (F * 2) / 3,
                r.top + (C * 2) / 3,
                i - (F * 2) / 3,
                s - (C * 2) / 3,
                R.TOP_LEFT
              )
            : new S(r.left + (F * 2) / 3, r.top + (C * 2) / 3)),
        (this.topRightBorderDoubleInnerBox =
          i > 0 || s > 0
            ? Z(
                r.left + B,
                r.top + (C * 2) / 3,
                l - (v * 2) / 3,
                a - (C * 2) / 3,
                R.TOP_RIGHT
              )
            : new S(r.left + r.width - (v * 2) / 3, r.top + (C * 2) / 3)),
        (this.bottomRightBorderDoubleInnerBox =
          c > 0 || f > 0
            ? Z(
                r.left + Q,
                r.top + d,
                c - (v * 2) / 3,
                f - (m * 2) / 3,
                R.BOTTOM_RIGHT
              )
            : new S(
                r.left + r.width - (v * 2) / 3,
                r.top + r.height - (m * 2) / 3
              )),
        (this.bottomLeftBorderDoubleInnerBox =
          w > 0 || p > 0
            ? Z(
                r.left + (F * 2) / 3,
                r.top + U,
                w - (F * 2) / 3,
                p - (m * 2) / 3,
                R.BOTTOM_LEFT
              )
            : new S(r.left + (F * 2) / 3, r.top + r.height - (m * 2) / 3)),
        (this.topLeftBorderStroke =
          i > 0 || s > 0
            ? Z(r.left + F / 2, r.top + C / 2, i - F / 2, s - C / 2, R.TOP_LEFT)
            : new S(r.left + F / 2, r.top + C / 2)),
        (this.topRightBorderStroke =
          i > 0 || s > 0
            ? Z(r.left + B, r.top + C / 2, l - v / 2, a - C / 2, R.TOP_RIGHT)
            : new S(r.left + r.width - v / 2, r.top + C / 2)),
        (this.bottomRightBorderStroke =
          c > 0 || f > 0
            ? Z(r.left + Q, r.top + d, c - v / 2, f - m / 2, R.BOTTOM_RIGHT)
            : new S(r.left + r.width - v / 2, r.top + r.height - m / 2)),
        (this.bottomLeftBorderStroke =
          w > 0 || p > 0
            ? Z(r.left + F / 2, r.top + U, w - F / 2, p - m / 2, R.BOTTOM_LEFT)
            : new S(r.left + F / 2, r.top + r.height - m / 2)),
        (this.topLeftBorderBox =
          i > 0 || s > 0
            ? Z(r.left, r.top, i, s, R.TOP_LEFT)
            : new S(r.left, r.top)),
        (this.topRightBorderBox =
          l > 0 || a > 0
            ? Z(r.left + B, r.top, l, a, R.TOP_RIGHT)
            : new S(r.left + r.width, r.top)),
        (this.bottomRightBorderBox =
          c > 0 || f > 0
            ? Z(r.left + Q, r.top + d, c, f, R.BOTTOM_RIGHT)
            : new S(r.left + r.width, r.top + r.height)),
        (this.bottomLeftBorderBox =
          w > 0 || p > 0
            ? Z(r.left, r.top + U, w, p, R.BOTTOM_LEFT)
            : new S(r.left, r.top + r.height)),
        (this.topLeftPaddingBox =
          i > 0 || s > 0
            ? Z(
                r.left + F,
                r.top + C,
                Math.max(0, i - F),
                Math.max(0, s - C),
                R.TOP_LEFT
              )
            : new S(r.left + F, r.top + C)),
        (this.topRightPaddingBox =
          l > 0 || a > 0
            ? Z(
                r.left + Math.min(B, r.width - v),
                r.top + C,
                B > r.width + v ? 0 : Math.max(0, l - v),
                Math.max(0, a - C),
                R.TOP_RIGHT
              )
            : new S(r.left + r.width - v, r.top + C)),
        (this.bottomRightPaddingBox =
          c > 0 || f > 0
            ? Z(
                r.left + Math.min(Q, r.width - F),
                r.top + Math.min(d, r.height - m),
                Math.max(0, c - v),
                Math.max(0, f - m),
                R.BOTTOM_RIGHT
              )
            : new S(r.left + r.width - v, r.top + r.height - m)),
        (this.bottomLeftPaddingBox =
          w > 0 || p > 0
            ? Z(
                r.left + F,
                r.top + Math.min(U, r.height - m),
                Math.max(0, w - F),
                Math.max(0, p - m),
                R.BOTTOM_LEFT
              )
            : new S(r.left + F, r.top + r.height - m)),
        (this.topLeftContentBox =
          i > 0 || s > 0
            ? Z(
                r.left + F + D,
                r.top + C + H,
                Math.max(0, i - (F + D)),
                Math.max(0, s - (C + H)),
                R.TOP_LEFT
              )
            : new S(r.left + F + D, r.top + C + H)),
        (this.topRightContentBox =
          l > 0 || a > 0
            ? Z(
                r.left + Math.min(B, r.width + F + D),
                r.top + C + H,
                B > r.width + F + D ? 0 : l - F + D,
                a - (C + H),
                R.TOP_RIGHT
              )
            : new S(r.left + r.width - (v + _), r.top + C + H)),
        (this.bottomRightContentBox =
          c > 0 || f > 0
            ? Z(
                r.left + Math.min(Q, r.width - (F + D)),
                r.top + Math.min(d, r.height + C + H),
                Math.max(0, c - (v + _)),
                f - (m + tA),
                R.BOTTOM_RIGHT
              )
            : new S(r.left + r.width - (v + _), r.top + r.height - (m + tA))),
        (this.bottomLeftContentBox =
          w > 0 || p > 0
            ? Z(
                r.left + F + D,
                r.top + U,
                Math.max(0, w - (F + D)),
                p - (m + tA),
                R.BOTTOM_LEFT
              )
            : new S(r.left + F + D, r.top + r.height - (m + tA)));
    }
    return A;
  })(),
  R;
(function (A) {
  (A[(A.TOP_LEFT = 0)] = "TOP_LEFT"),
    (A[(A.TOP_RIGHT = 1)] = "TOP_RIGHT"),
    (A[(A.BOTTOM_RIGHT = 2)] = "BOTTOM_RIGHT"),
    (A[(A.BOTTOM_LEFT = 3)] = "BOTTOM_LEFT");
})(R || (R = {}));
var Z = function (A, e, t, r, n) {
    var i = 4 * ((Math.sqrt(2) - 1) / 3),
      s = t * i,
      o = r * i,
      l = A + t,
      a = e + r;
    switch (n) {
      case R.TOP_LEFT:
        return new fi(
          new S(A, a),
          new S(A, a - o),
          new S(l - s, e),
          new S(l, e)
        );
      case R.TOP_RIGHT:
        return new fi(
          new S(A, e),
          new S(A + s, e),
          new S(l, a - o),
          new S(l, a)
        );
      case R.BOTTOM_RIGHT:
        return new fi(
          new S(l, e),
          new S(l, e + o),
          new S(A + s, a),
          new S(A, a)
        );
      case R.BOTTOM_LEFT:
      default:
        return new fi(
          new S(l, a),
          new S(l - s, a),
          new S(A, e + o),
          new S(A, e)
        );
    }
  },
  us = function (A) {
    return [
      A.topLeftBorderBox,
      A.topRightBorderBox,
      A.bottomRightBorderBox,
      A.bottomLeftBorderBox,
    ];
  },
  JU = function (A) {
    return [
      A.topLeftContentBox,
      A.topRightContentBox,
      A.bottomRightContentBox,
      A.bottomLeftContentBox,
    ];
  },
  cs = function (A) {
    return [
      A.topLeftPaddingBox,
      A.topRightPaddingBox,
      A.bottomRightPaddingBox,
      A.bottomLeftPaddingBox,
    ];
  },
  YU = (function () {
    function A(e, t, r) {
      (this.offsetX = e),
        (this.offsetY = t),
        (this.matrix = r),
        (this.type = 0),
        (this.target = 6);
    }
    return A;
  })(),
  gi = (function () {
    function A(e, t) {
      (this.path = e), (this.target = t), (this.type = 1);
    }
    return A;
  })(),
  jU = (function () {
    function A(e) {
      (this.opacity = e), (this.type = 2), (this.target = 6);
    }
    return A;
  })(),
  zU = function (A) {
    return A.type === 0;
  },
  gd = function (A) {
    return A.type === 1;
  },
  ZU = function (A) {
    return A.type === 2;
  },
  eB = function (A, e) {
    return A.length === e.length
      ? A.some(function (t, r) {
          return t === e[r];
        })
      : !1;
  },
  $U = function (A, e, t, r, n) {
    return A.map(function (i, s) {
      switch (s) {
        case 0:
          return i.add(e, t);
        case 1:
          return i.add(e + r, t);
        case 2:
          return i.add(e + r, t + n);
        case 3:
          return i.add(e, t + n);
      }
      return i;
    });
  },
  dd = (function () {
    function A(e) {
      (this.element = e),
        (this.inlineLevel = []),
        (this.nonInlineLevel = []),
        (this.negativeZIndex = []),
        (this.zeroOrAutoZIndexOrTransformedOrOpacity = []),
        (this.positiveZIndex = []),
        (this.nonPositionedFloats = []),
        (this.nonPositionedInlineLevel = []);
    }
    return A;
  })(),
  wd = (function () {
    function A(e, t) {
      if (
        ((this.container = e),
        (this.parent = t),
        (this.effects = []),
        (this.curves = new WU(this.container)),
        this.container.styles.opacity < 1 &&
          this.effects.push(new jU(this.container.styles.opacity)),
        this.container.styles.transform !== null)
      ) {
        var r =
            this.container.bounds.left +
            this.container.styles.transformOrigin[0].number,
          n =
            this.container.bounds.top +
            this.container.styles.transformOrigin[1].number,
          i = this.container.styles.transform;
        this.effects.push(new YU(r, n, i));
      }
      if (this.container.styles.overflowX !== 0) {
        var s = us(this.curves),
          o = cs(this.curves);
        eB(s, o)
          ? this.effects.push(new gi(s, 6))
          : (this.effects.push(new gi(s, 2)), this.effects.push(new gi(o, 4)));
      }
    }
    return (
      (A.prototype.getEffects = function (e) {
        for (
          var t = [2, 3].indexOf(this.container.styles.position) === -1,
            r = this.parent,
            n = this.effects.slice(0);
          r;

        ) {
          var i = r.effects.filter(function (l) {
            return !gd(l);
          });
          if (t || r.container.styles.position !== 0 || !r.parent) {
            if (
              (n.unshift.apply(n, i),
              (t = [2, 3].indexOf(r.container.styles.position) === -1),
              r.container.styles.overflowX !== 0)
            ) {
              var s = us(r.curves),
                o = cs(r.curves);
              eB(s, o) || n.unshift(new gi(o, 6));
            }
          } else n.unshift.apply(n, i);
          r = r.parent;
        }
        return n.filter(function (l) {
          return cA(l.target, e);
        });
      }),
      A
    );
  })(),
  Yl = function (A, e, t, r) {
    A.container.elements.forEach(function (n) {
      var i = cA(n.flags, 4),
        s = cA(n.flags, 2),
        o = new wd(n, A);
      cA(n.styles.display, 2048) && r.push(o);
      var l = cA(n.flags, 8) ? [] : r;
      if (i || s) {
        var a = i || n.styles.isPositioned() ? t : e,
          u = new dd(o);
        if (
          n.styles.isPositioned() ||
          n.styles.opacity < 1 ||
          n.styles.isTransformed()
        ) {
          var c = n.styles.zIndex.order;
          if (c < 0) {
            var f = 0;
            a.negativeZIndex.some(function (w, p) {
              return c > w.element.container.styles.zIndex.order
                ? ((f = p), !1)
                : f > 0;
            }),
              a.negativeZIndex.splice(f, 0, u);
          } else if (c > 0) {
            var h = 0;
            a.positiveZIndex.some(function (w, p) {
              return c >= w.element.container.styles.zIndex.order
                ? ((h = p + 1), !1)
                : h > 0;
            }),
              a.positiveZIndex.splice(h, 0, u);
          } else a.zeroOrAutoZIndexOrTransformedOrOpacity.push(u);
        } else
          n.styles.isFloating()
            ? a.nonPositionedFloats.push(u)
            : a.nonPositionedInlineLevel.push(u);
        Yl(o, u, i ? u : t, l);
      } else n.styles.isInlineLevel() ? e.inlineLevel.push(o) : e.nonInlineLevel.push(o), Yl(o, e, t, l);
      cA(n.flags, 8) && hd(n, l);
    });
  },
  hd = function (A, e) {
    for (
      var t = A instanceof Pl ? A.start : 1,
        r = A instanceof Pl ? A.reversed : !1,
        n = 0;
      n < e.length;
      n++
    ) {
      var i = e[n];
      i.container instanceof Ad &&
        typeof i.container.value == "number" &&
        i.container.value !== 0 &&
        (t = i.container.value),
        (i.listValue = vn(t, i.container.styles.listStyleType, !0)),
        (t += r ? -1 : 1);
    }
  },
  qU = function (A) {
    var e = new wd(A, null),
      t = new dd(e),
      r = [];
    return Yl(e, t, t, r), hd(e.container, r), t;
  },
  tB = function (A, e) {
    switch (e) {
      case 0:
        return re(
          A.topLeftBorderBox,
          A.topLeftPaddingBox,
          A.topRightBorderBox,
          A.topRightPaddingBox
        );
      case 1:
        return re(
          A.topRightBorderBox,
          A.topRightPaddingBox,
          A.bottomRightBorderBox,
          A.bottomRightPaddingBox
        );
      case 2:
        return re(
          A.bottomRightBorderBox,
          A.bottomRightPaddingBox,
          A.bottomLeftBorderBox,
          A.bottomLeftPaddingBox
        );
      case 3:
      default:
        return re(
          A.bottomLeftBorderBox,
          A.bottomLeftPaddingBox,
          A.topLeftBorderBox,
          A.topLeftPaddingBox
        );
    }
  },
  AF = function (A, e) {
    switch (e) {
      case 0:
        return re(
          A.topLeftBorderBox,
          A.topLeftBorderDoubleOuterBox,
          A.topRightBorderBox,
          A.topRightBorderDoubleOuterBox
        );
      case 1:
        return re(
          A.topRightBorderBox,
          A.topRightBorderDoubleOuterBox,
          A.bottomRightBorderBox,
          A.bottomRightBorderDoubleOuterBox
        );
      case 2:
        return re(
          A.bottomRightBorderBox,
          A.bottomRightBorderDoubleOuterBox,
          A.bottomLeftBorderBox,
          A.bottomLeftBorderDoubleOuterBox
        );
      case 3:
      default:
        return re(
          A.bottomLeftBorderBox,
          A.bottomLeftBorderDoubleOuterBox,
          A.topLeftBorderBox,
          A.topLeftBorderDoubleOuterBox
        );
    }
  },
  eF = function (A, e) {
    switch (e) {
      case 0:
        return re(
          A.topLeftBorderDoubleInnerBox,
          A.topLeftPaddingBox,
          A.topRightBorderDoubleInnerBox,
          A.topRightPaddingBox
        );
      case 1:
        return re(
          A.topRightBorderDoubleInnerBox,
          A.topRightPaddingBox,
          A.bottomRightBorderDoubleInnerBox,
          A.bottomRightPaddingBox
        );
      case 2:
        return re(
          A.bottomRightBorderDoubleInnerBox,
          A.bottomRightPaddingBox,
          A.bottomLeftBorderDoubleInnerBox,
          A.bottomLeftPaddingBox
        );
      case 3:
      default:
        return re(
          A.bottomLeftBorderDoubleInnerBox,
          A.bottomLeftPaddingBox,
          A.topLeftBorderDoubleInnerBox,
          A.topLeftPaddingBox
        );
    }
  },
  tF = function (A, e) {
    switch (e) {
      case 0:
        return di(A.topLeftBorderStroke, A.topRightBorderStroke);
      case 1:
        return di(A.topRightBorderStroke, A.bottomRightBorderStroke);
      case 2:
        return di(A.bottomRightBorderStroke, A.bottomLeftBorderStroke);
      case 3:
      default:
        return di(A.bottomLeftBorderStroke, A.topLeftBorderStroke);
    }
  },
  di = function (A, e) {
    var t = [];
    return (
      Ae(A) ? t.push(A.subdivide(0.5, !1)) : t.push(A),
      Ae(e) ? t.push(e.subdivide(0.5, !0)) : t.push(e),
      t
    );
  },
  re = function (A, e, t, r) {
    var n = [];
    return (
      Ae(A) ? n.push(A.subdivide(0.5, !1)) : n.push(A),
      Ae(t) ? n.push(t.subdivide(0.5, !0)) : n.push(t),
      Ae(r) ? n.push(r.subdivide(0.5, !0).reverse()) : n.push(r),
      Ae(e) ? n.push(e.subdivide(0.5, !1).reverse()) : n.push(e),
      n
    );
  },
  pd = function (A) {
    var e = A.bounds,
      t = A.styles;
    return e.add(
      t.borderLeftWidth,
      t.borderTopWidth,
      -(t.borderRightWidth + t.borderLeftWidth),
      -(t.borderTopWidth + t.borderBottomWidth)
    );
  },
  Bs = function (A) {
    var e = A.styles,
      t = A.bounds,
      r = W(e.paddingLeft, t.width),
      n = W(e.paddingRight, t.width),
      i = W(e.paddingTop, t.width),
      s = W(e.paddingBottom, t.width);
    return t.add(
      r + e.borderLeftWidth,
      i + e.borderTopWidth,
      -(e.borderRightWidth + e.borderLeftWidth + r + n),
      -(e.borderTopWidth + e.borderBottomWidth + i + s)
    );
  },
  rF = function (A, e) {
    return A === 0 ? e.bounds : A === 2 ? Bs(e) : pd(e);
  },
  nF = function (A, e) {
    return A === 0 ? e.bounds : A === 2 ? Bs(e) : pd(e);
  },
  Ko = function (A, e, t) {
    var r = rF(Gt(A.styles.backgroundOrigin, e), A),
      n = nF(Gt(A.styles.backgroundClip, e), A),
      i = iF(Gt(A.styles.backgroundSize, e), t, r),
      s = i[0],
      o = i[1],
      l = _r(Gt(A.styles.backgroundPosition, e), r.width - s, r.height - o),
      a = sF(Gt(A.styles.backgroundRepeat, e), l, i, r, n),
      u = Math.round(r.left + l[0]),
      c = Math.round(r.top + l[1]);
    return [a, u, c, s, o];
  },
  Rt = function (A) {
    return P(A) && A.value === or.AUTO;
  },
  wi = function (A) {
    return typeof A == "number";
  },
  iF = function (A, e, t) {
    var r = e[0],
      n = e[1],
      i = e[2],
      s = A[0],
      o = A[1];
    if (!s) return [0, 0];
    if (lA(s) && o && lA(o)) return [W(s, t.width), W(o, t.height)];
    var l = wi(i);
    if (P(s) && (s.value === or.CONTAIN || s.value === or.COVER)) {
      if (wi(i)) {
        var a = t.width / t.height;
        return a < i != (s.value === or.COVER)
          ? [t.width, t.width / i]
          : [t.height * i, t.height];
      }
      return [t.width, t.height];
    }
    var u = wi(r),
      c = wi(n),
      f = u || c;
    if (Rt(s) && (!o || Rt(o))) {
      if (u && c) return [r, n];
      if (!l && !f) return [t.width, t.height];
      if (f && l) {
        var h = u ? r : n * i,
          w = c ? n : r / i;
        return [h, w];
      }
      var p = u ? r : t.width,
        x = c ? n : t.height;
      return [p, x];
    }
    if (l) {
      var g = 0,
        B = 0;
      return (
        lA(s) ? (g = W(s, t.width)) : lA(o) && (B = W(o, t.height)),
        Rt(s) ? (g = B * i) : (!o || Rt(o)) && (B = g / i),
        [g, B]
      );
    }
    var d = null,
      Q = null;
    if (
      (lA(s) ? (d = W(s, t.width)) : o && lA(o) && (Q = W(o, t.height)),
      d !== null && (!o || Rt(o)) && (Q = u && c ? (d / r) * n : t.height),
      Q !== null && Rt(s) && (d = u && c ? (Q / n) * r : t.width),
      d !== null && Q !== null)
    )
      return [d, Q];
    throw new Error("Unable to calculate background-size for element");
  },
  Gt = function (A, e) {
    var t = A[e];
    return typeof t > "u" ? A[0] : t;
  },
  sF = function (A, e, t, r, n) {
    var i = e[0],
      s = e[1],
      o = t[0],
      l = t[1];
    switch (A) {
      case 2:
        return [
          new S(Math.round(r.left), Math.round(r.top + s)),
          new S(Math.round(r.left + r.width), Math.round(r.top + s)),
          new S(Math.round(r.left + r.width), Math.round(l + r.top + s)),
          new S(Math.round(r.left), Math.round(l + r.top + s)),
        ];
      case 3:
        return [
          new S(Math.round(r.left + i), Math.round(r.top)),
          new S(Math.round(r.left + i + o), Math.round(r.top)),
          new S(Math.round(r.left + i + o), Math.round(r.height + r.top)),
          new S(Math.round(r.left + i), Math.round(r.height + r.top)),
        ];
      case 1:
        return [
          new S(Math.round(r.left + i), Math.round(r.top + s)),
          new S(Math.round(r.left + i + o), Math.round(r.top + s)),
          new S(Math.round(r.left + i + o), Math.round(r.top + s + l)),
          new S(Math.round(r.left + i), Math.round(r.top + s + l)),
        ];
      default:
        return [
          new S(Math.round(n.left), Math.round(n.top)),
          new S(Math.round(n.left + n.width), Math.round(n.top)),
          new S(Math.round(n.left + n.width), Math.round(n.height + n.top)),
          new S(Math.round(n.left), Math.round(n.height + n.top)),
        ];
    }
  },
  oF =
    "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  rB = "Hidden Text",
  lF = (function () {
    function A(e) {
      (this._data = {}), (this._document = e);
    }
    return (
      (A.prototype.parseMetrics = function (e, t) {
        var r = this._document.createElement("div"),
          n = this._document.createElement("img"),
          i = this._document.createElement("span"),
          s = this._document.body;
        (r.style.visibility = "hidden"),
          (r.style.fontFamily = e),
          (r.style.fontSize = t),
          (r.style.margin = "0"),
          (r.style.padding = "0"),
          (r.style.whiteSpace = "nowrap"),
          s.appendChild(r),
          (n.src = oF),
          (n.width = 1),
          (n.height = 1),
          (n.style.margin = "0"),
          (n.style.padding = "0"),
          (n.style.verticalAlign = "baseline"),
          (i.style.fontFamily = e),
          (i.style.fontSize = t),
          (i.style.margin = "0"),
          (i.style.padding = "0"),
          i.appendChild(this._document.createTextNode(rB)),
          r.appendChild(i),
          r.appendChild(n);
        var o = n.offsetTop - i.offsetTop + 2;
        r.removeChild(i),
          r.appendChild(this._document.createTextNode(rB)),
          (r.style.lineHeight = "normal"),
          (n.style.verticalAlign = "super");
        var l = n.offsetTop - r.offsetTop + 2;
        return s.removeChild(r), { baseline: o, middle: l };
      }),
      (A.prototype.getMetrics = function (e, t) {
        var r = e + " " + t;
        return (
          typeof this._data[r] > "u" &&
            (this._data[r] = this.parseMetrics(e, t)),
          this._data[r]
        );
      }),
      A
    );
  })(),
  Qd = (function () {
    function A(e, t) {
      (this.context = e), (this.options = t);
    }
    return A;
  })(),
  aF = 1e4,
  uF = (function (A) {
    de(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return (
        (n._activeEffects = []),
        (n.canvas = r.canvas ? r.canvas : document.createElement("canvas")),
        (n.ctx = n.canvas.getContext("2d")),
        r.canvas ||
          ((n.canvas.width = Math.floor(r.width * r.scale)),
          (n.canvas.height = Math.floor(r.height * r.scale)),
          (n.canvas.style.width = r.width + "px"),
          (n.canvas.style.height = r.height + "px")),
        (n.fontMetrics = new lF(document)),
        n.ctx.scale(n.options.scale, n.options.scale),
        n.ctx.translate(-r.x, -r.y),
        (n.ctx.textBaseline = "bottom"),
        (n._activeEffects = []),
        n.context.logger.debug(
          "Canvas renderer initialized (" +
            r.width +
            "x" +
            r.height +
            ") with scale " +
            r.scale
        ),
        n
      );
    }
    return (
      (e.prototype.applyEffects = function (t) {
        for (var r = this; this._activeEffects.length; ) this.popEffect();
        t.forEach(function (n) {
          return r.applyEffect(n);
        });
      }),
      (e.prototype.applyEffect = function (t) {
        this.ctx.save(),
          ZU(t) && (this.ctx.globalAlpha = t.opacity),
          zU(t) &&
            (this.ctx.translate(t.offsetX, t.offsetY),
            this.ctx.transform(
              t.matrix[0],
              t.matrix[1],
              t.matrix[2],
              t.matrix[3],
              t.matrix[4],
              t.matrix[5]
            ),
            this.ctx.translate(-t.offsetX, -t.offsetY)),
          gd(t) && (this.path(t.path), this.ctx.clip()),
          this._activeEffects.push(t);
      }),
      (e.prototype.popEffect = function () {
        this._activeEffects.pop(), this.ctx.restore();
      }),
      (e.prototype.renderStack = function (t) {
        return IA(this, void 0, void 0, function () {
          var r;
          return vA(this, function (n) {
            switch (n.label) {
              case 0:
                return (
                  (r = t.element.container.styles),
                  r.isVisible() ? [4, this.renderStackContent(t)] : [3, 2]
                );
              case 1:
                n.sent(), (n.label = 2);
              case 2:
                return [2];
            }
          });
        });
      }),
      (e.prototype.renderNode = function (t) {
        return IA(this, void 0, void 0, function () {
          return vA(this, function (r) {
            switch (r.label) {
              case 0:
                if (cA(t.container.flags, 16)) debugger;
                return t.container.styles.isVisible()
                  ? [4, this.renderNodeBackgroundAndBorders(t)]
                  : [3, 3];
              case 1:
                return r.sent(), [4, this.renderNodeContent(t)];
              case 2:
                r.sent(), (r.label = 3);
              case 3:
                return [2];
            }
          });
        });
      }),
      (e.prototype.renderTextWithLetterSpacing = function (t, r, n) {
        var i = this;
        if (r === 0) this.ctx.fillText(t.text, t.bounds.left, t.bounds.top + n);
        else {
          var s = Ja(t.text);
          s.reduce(function (o, l) {
            return (
              i.ctx.fillText(l, o, t.bounds.top + n),
              o + i.ctx.measureText(l).width
            );
          }, t.bounds.left);
        }
      }),
      (e.prototype.createFontStyle = function (t) {
        var r = t.fontVariant
            .filter(function (s) {
              return s === "normal" || s === "small-caps";
            })
            .join(""),
          n = dF(t.fontFamily).join(", "),
          i = Sn(t.fontSize)
            ? "" + t.fontSize.number + t.fontSize.unit
            : t.fontSize.number + "px";
        return [[t.fontStyle, r, t.fontWeight, i, n].join(" "), n, i];
      }),
      (e.prototype.renderTextNode = function (t, r) {
        return IA(this, void 0, void 0, function () {
          var n,
            i,
            s,
            o,
            l,
            a,
            u,
            c,
            f = this;
          return vA(this, function (h) {
            return (
              (n = this.createFontStyle(r)),
              (i = n[0]),
              (s = n[1]),
              (o = n[2]),
              (this.ctx.font = i),
              (this.ctx.direction = r.direction === 1 ? "rtl" : "ltr"),
              (this.ctx.textAlign = "left"),
              (this.ctx.textBaseline = "alphabetic"),
              (l = this.fontMetrics.getMetrics(s, o)),
              (a = l.baseline),
              (u = l.middle),
              (c = r.paintOrder),
              t.textBounds.forEach(function (w) {
                c.forEach(function (p) {
                  switch (p) {
                    case 0:
                      (f.ctx.fillStyle = fA(r.color)),
                        f.renderTextWithLetterSpacing(w, r.letterSpacing, a);
                      var x = r.textShadow;
                      x.length &&
                        w.text.trim().length &&
                        (x
                          .slice(0)
                          .reverse()
                          .forEach(function (g) {
                            (f.ctx.shadowColor = fA(g.color)),
                              (f.ctx.shadowOffsetX =
                                g.offsetX.number * f.options.scale),
                              (f.ctx.shadowOffsetY =
                                g.offsetY.number * f.options.scale),
                              (f.ctx.shadowBlur = g.blur.number),
                              f.renderTextWithLetterSpacing(
                                w,
                                r.letterSpacing,
                                a
                              );
                          }),
                        (f.ctx.shadowColor = ""),
                        (f.ctx.shadowOffsetX = 0),
                        (f.ctx.shadowOffsetY = 0),
                        (f.ctx.shadowBlur = 0)),
                        r.textDecorationLine.length &&
                          ((f.ctx.fillStyle = fA(
                            r.textDecorationColor || r.color
                          )),
                          r.textDecorationLine.forEach(function (g) {
                            switch (g) {
                              case 1:
                                f.ctx.fillRect(
                                  w.bounds.left,
                                  Math.round(w.bounds.top + a),
                                  w.bounds.width,
                                  1
                                );
                                break;
                              case 2:
                                f.ctx.fillRect(
                                  w.bounds.left,
                                  Math.round(w.bounds.top),
                                  w.bounds.width,
                                  1
                                );
                                break;
                              case 3:
                                f.ctx.fillRect(
                                  w.bounds.left,
                                  Math.ceil(w.bounds.top + u),
                                  w.bounds.width,
                                  1
                                );
                                break;
                            }
                          }));
                      break;
                    case 1:
                      r.webkitTextStrokeWidth &&
                        w.text.trim().length &&
                        ((f.ctx.strokeStyle = fA(r.webkitTextStrokeColor)),
                        (f.ctx.lineWidth = r.webkitTextStrokeWidth),
                        (f.ctx.lineJoin = window.chrome ? "miter" : "round"),
                        f.ctx.strokeText(
                          w.text,
                          w.bounds.left,
                          w.bounds.top + a
                        )),
                        (f.ctx.strokeStyle = ""),
                        (f.ctx.lineWidth = 0),
                        (f.ctx.lineJoin = "miter");
                      break;
                  }
                });
              }),
              [2]
            );
          });
        });
      }),
      (e.prototype.renderReplacedElement = function (t, r, n) {
        if (n && t.intrinsicWidth > 0 && t.intrinsicHeight > 0) {
          var i = Bs(t),
            s = cs(r);
          this.path(s),
            this.ctx.save(),
            this.ctx.clip(),
            this.ctx.drawImage(
              n,
              0,
              0,
              t.intrinsicWidth,
              t.intrinsicHeight,
              i.left,
              i.top,
              i.width,
              i.height
            ),
            this.ctx.restore();
        }
      }),
      (e.prototype.renderNodeContent = function (t) {
        return IA(this, void 0, void 0, function () {
          var r,
            n,
            i,
            s,
            o,
            l,
            B,
            B,
            a,
            u,
            c,
            f,
            Q,
            h,
            w,
            U,
            p,
            x,
            g,
            B,
            d,
            Q,
            U;
          return vA(this, function (C) {
            switch (C.label) {
              case 0:
                this.applyEffects(t.getEffects(4)),
                  (r = t.container),
                  (n = t.curves),
                  (i = r.styles),
                  (s = 0),
                  (o = r.textNodes),
                  (C.label = 1);
              case 1:
                return s < o.length
                  ? ((l = o[s]), [4, this.renderTextNode(l, i)])
                  : [3, 4];
              case 2:
                C.sent(), (C.label = 3);
              case 3:
                return s++, [3, 1];
              case 4:
                if (!(r instanceof Zg)) return [3, 8];
                C.label = 5;
              case 5:
                return (
                  C.trys.push([5, 7, , 8]), [4, this.context.cache.match(r.src)]
                );
              case 6:
                return (
                  (B = C.sent()), this.renderReplacedElement(r, n, B), [3, 8]
                );
              case 7:
                return (
                  C.sent(),
                  this.context.logger.error("Error loading image " + r.src),
                  [3, 8]
                );
              case 8:
                if (
                  (r instanceof $g &&
                    this.renderReplacedElement(r, n, r.canvas),
                  !(r instanceof qg))
                )
                  return [3, 12];
                C.label = 9;
              case 9:
                return (
                  C.trys.push([9, 11, , 12]),
                  [4, this.context.cache.match(r.svg)]
                );
              case 10:
                return (
                  (B = C.sent()), this.renderReplacedElement(r, n, B), [3, 12]
                );
              case 11:
                return (
                  C.sent(),
                  this.context.logger.error(
                    "Error loading svg " + r.svg.substring(0, 255)
                  ),
                  [3, 12]
                );
              case 12:
                return r instanceof rd && r.tree
                  ? ((a = new e(this.context, {
                      scale: this.options.scale,
                      backgroundColor: r.backgroundColor,
                      x: 0,
                      y: 0,
                      width: r.width,
                      height: r.height,
                    })),
                    [4, a.render(r.tree)])
                  : [3, 14];
              case 13:
                (u = C.sent()),
                  r.width &&
                    r.height &&
                    this.ctx.drawImage(
                      u,
                      0,
                      0,
                      r.width,
                      r.height,
                      r.bounds.left,
                      r.bounds.top,
                      r.bounds.width,
                      r.bounds.height
                    ),
                  (C.label = 14);
              case 14:
                if (
                  (r instanceof Ya &&
                    ((c = Math.min(r.bounds.width, r.bounds.height)),
                    r.type === ss
                      ? r.checked &&
                        (this.ctx.save(),
                        this.path([
                          new S(
                            r.bounds.left + c * 0.39363,
                            r.bounds.top + c * 0.79
                          ),
                          new S(
                            r.bounds.left + c * 0.16,
                            r.bounds.top + c * 0.5549
                          ),
                          new S(
                            r.bounds.left + c * 0.27347,
                            r.bounds.top + c * 0.44071
                          ),
                          new S(
                            r.bounds.left + c * 0.39694,
                            r.bounds.top + c * 0.5649
                          ),
                          new S(
                            r.bounds.left + c * 0.72983,
                            r.bounds.top + c * 0.23
                          ),
                          new S(
                            r.bounds.left + c * 0.84,
                            r.bounds.top + c * 0.34085
                          ),
                          new S(
                            r.bounds.left + c * 0.39363,
                            r.bounds.top + c * 0.79
                          ),
                        ]),
                        (this.ctx.fillStyle = fA(bc)),
                        this.ctx.fill(),
                        this.ctx.restore())
                      : r.type === os &&
                        r.checked &&
                        (this.ctx.save(),
                        this.ctx.beginPath(),
                        this.ctx.arc(
                          r.bounds.left + c / 2,
                          r.bounds.top + c / 2,
                          c / 4,
                          0,
                          Math.PI * 2,
                          !0
                        ),
                        (this.ctx.fillStyle = fA(bc)),
                        this.ctx.fill(),
                        this.ctx.restore())),
                  cF(r) && r.value.length)
                ) {
                  switch (
                    ((f = this.createFontStyle(i)),
                    (Q = f[0]),
                    (h = f[1]),
                    (w = this.fontMetrics.getMetrics(Q, h).baseline),
                    (this.ctx.font = Q),
                    (this.ctx.fillStyle = fA(i.color)),
                    (this.ctx.textBaseline = "alphabetic"),
                    (this.ctx.textAlign = fF(r.styles.textAlign)),
                    (U = Bs(r)),
                    (p = 0),
                    r.styles.textAlign)
                  ) {
                    case 1:
                      p += U.width / 2;
                      break;
                    case 2:
                      p += U.width;
                      break;
                  }
                  (x = U.add(p, 0, 0, -U.height / 2 + 1)),
                    this.ctx.save(),
                    this.path([
                      new S(U.left, U.top),
                      new S(U.left + U.width, U.top),
                      new S(U.left + U.width, U.top + U.height),
                      new S(U.left, U.top + U.height),
                    ]),
                    this.ctx.clip(),
                    this.renderTextWithLetterSpacing(
                      new en(r.value, x),
                      i.letterSpacing,
                      w
                    ),
                    this.ctx.restore(),
                    (this.ctx.textBaseline = "alphabetic"),
                    (this.ctx.textAlign = "left");
                }
                if (!cA(r.styles.display, 2048)) return [3, 20];
                if (r.styles.listStyleImage === null) return [3, 19];
                if (((g = r.styles.listStyleImage), g.type !== 0))
                  return [3, 18];
                (B = void 0), (d = g.url), (C.label = 15);
              case 15:
                return (
                  C.trys.push([15, 17, , 18]), [4, this.context.cache.match(d)]
                );
              case 16:
                return (
                  (B = C.sent()),
                  this.ctx.drawImage(
                    B,
                    r.bounds.left - (B.width + 10),
                    r.bounds.top
                  ),
                  [3, 18]
                );
              case 17:
                return (
                  C.sent(),
                  this.context.logger.error(
                    "Error loading list-style-image " + d
                  ),
                  [3, 18]
                );
              case 18:
                return [3, 20];
              case 19:
                t.listValue &&
                  r.styles.listStyleType !== -1 &&
                  ((Q = this.createFontStyle(i)[0]),
                  (this.ctx.font = Q),
                  (this.ctx.fillStyle = fA(i.color)),
                  (this.ctx.textBaseline = "middle"),
                  (this.ctx.textAlign = "right"),
                  (U = new Ne(
                    r.bounds.left,
                    r.bounds.top + W(r.styles.paddingTop, r.bounds.width),
                    r.bounds.width,
                    Hc(i.lineHeight, i.fontSize.number) / 2 + 1
                  )),
                  this.renderTextWithLetterSpacing(
                    new en(t.listValue, U),
                    i.letterSpacing,
                    Hc(i.lineHeight, i.fontSize.number) / 2 + 2
                  ),
                  (this.ctx.textBaseline = "bottom"),
                  (this.ctx.textAlign = "left")),
                  (C.label = 20);
              case 20:
                return [2];
            }
          });
        });
      }),
      (e.prototype.renderStackContent = function (t) {
        return IA(this, void 0, void 0, function () {
          var r, n, g, i, s, g, o, l, g, a, u, g, c, f, g, h, w, g, p, x, g;
          return vA(this, function (B) {
            switch (B.label) {
              case 0:
                if (cA(t.element.container.flags, 16)) debugger;
                return [4, this.renderNodeBackgroundAndBorders(t.element)];
              case 1:
                B.sent(), (r = 0), (n = t.negativeZIndex), (B.label = 2);
              case 2:
                return r < n.length
                  ? ((g = n[r]), [4, this.renderStack(g)])
                  : [3, 5];
              case 3:
                B.sent(), (B.label = 4);
              case 4:
                return r++, [3, 2];
              case 5:
                return [4, this.renderNodeContent(t.element)];
              case 6:
                B.sent(), (i = 0), (s = t.nonInlineLevel), (B.label = 7);
              case 7:
                return i < s.length
                  ? ((g = s[i]), [4, this.renderNode(g)])
                  : [3, 10];
              case 8:
                B.sent(), (B.label = 9);
              case 9:
                return i++, [3, 7];
              case 10:
                (o = 0), (l = t.nonPositionedFloats), (B.label = 11);
              case 11:
                return o < l.length
                  ? ((g = l[o]), [4, this.renderStack(g)])
                  : [3, 14];
              case 12:
                B.sent(), (B.label = 13);
              case 13:
                return o++, [3, 11];
              case 14:
                (a = 0), (u = t.nonPositionedInlineLevel), (B.label = 15);
              case 15:
                return a < u.length
                  ? ((g = u[a]), [4, this.renderStack(g)])
                  : [3, 18];
              case 16:
                B.sent(), (B.label = 17);
              case 17:
                return a++, [3, 15];
              case 18:
                (c = 0), (f = t.inlineLevel), (B.label = 19);
              case 19:
                return c < f.length
                  ? ((g = f[c]), [4, this.renderNode(g)])
                  : [3, 22];
              case 20:
                B.sent(), (B.label = 21);
              case 21:
                return c++, [3, 19];
              case 22:
                (h = 0),
                  (w = t.zeroOrAutoZIndexOrTransformedOrOpacity),
                  (B.label = 23);
              case 23:
                return h < w.length
                  ? ((g = w[h]), [4, this.renderStack(g)])
                  : [3, 26];
              case 24:
                B.sent(), (B.label = 25);
              case 25:
                return h++, [3, 23];
              case 26:
                (p = 0), (x = t.positiveZIndex), (B.label = 27);
              case 27:
                return p < x.length
                  ? ((g = x[p]), [4, this.renderStack(g)])
                  : [3, 30];
              case 28:
                B.sent(), (B.label = 29);
              case 29:
                return p++, [3, 27];
              case 30:
                return [2];
            }
          });
        });
      }),
      (e.prototype.mask = function (t) {
        this.ctx.beginPath(),
          this.ctx.moveTo(0, 0),
          this.ctx.lineTo(this.canvas.width, 0),
          this.ctx.lineTo(this.canvas.width, this.canvas.height),
          this.ctx.lineTo(0, this.canvas.height),
          this.ctx.lineTo(0, 0),
          this.formatPath(t.slice(0).reverse()),
          this.ctx.closePath();
      }),
      (e.prototype.path = function (t) {
        this.ctx.beginPath(), this.formatPath(t), this.ctx.closePath();
      }),
      (e.prototype.formatPath = function (t) {
        var r = this;
        t.forEach(function (n, i) {
          var s = Ae(n) ? n.start : n;
          i === 0 ? r.ctx.moveTo(s.x, s.y) : r.ctx.lineTo(s.x, s.y),
            Ae(n) &&
              r.ctx.bezierCurveTo(
                n.startControl.x,
                n.startControl.y,
                n.endControl.x,
                n.endControl.y,
                n.end.x,
                n.end.y
              );
        });
      }),
      (e.prototype.renderRepeat = function (t, r, n, i) {
        this.path(t),
          (this.ctx.fillStyle = r),
          this.ctx.translate(n, i),
          this.ctx.fill(),
          this.ctx.translate(-n, -i);
      }),
      (e.prototype.resizeImage = function (t, r, n) {
        var i;
        if (t.width === r && t.height === n) return t;
        var s =
            (i = this.canvas.ownerDocument) !== null && i !== void 0
              ? i
              : document,
          o = s.createElement("canvas");
        (o.width = Math.max(1, r)), (o.height = Math.max(1, n));
        var l = o.getContext("2d");
        return l.drawImage(t, 0, 0, t.width, t.height, 0, 0, r, n), o;
      }),
      (e.prototype.renderBackgroundImage = function (t) {
        return IA(this, void 0, void 0, function () {
          var r, n, i, s, o, l;
          return vA(this, function (a) {
            switch (a.label) {
              case 0:
                (r = t.styles.backgroundImage.length - 1),
                  (n = function (u) {
                    var c,
                      f,
                      h,
                      H,
                      z,
                      oA,
                      D,
                      b,
                      m,
                      w,
                      H,
                      z,
                      oA,
                      D,
                      b,
                      p,
                      x,
                      g,
                      B,
                      d,
                      Q,
                      U,
                      C,
                      v,
                      m,
                      F,
                      H,
                      _,
                      tA,
                      D,
                      b,
                      TA,
                      z,
                      oA,
                      I,
                      T,
                      k,
                      G,
                      X,
                      kA,
                      HA,
                      PA;
                    return vA(this, function (OA) {
                      switch (OA.label) {
                        case 0:
                          if (u.type !== 0) return [3, 5];
                          (c = void 0), (f = u.url), (OA.label = 1);
                        case 1:
                          return (
                            OA.trys.push([1, 3, , 4]),
                            [4, i.context.cache.match(f)]
                          );
                        case 2:
                          return (c = OA.sent()), [3, 4];
                        case 3:
                          return (
                            OA.sent(),
                            i.context.logger.error(
                              "Error loading background-image " + f
                            ),
                            [3, 4]
                          );
                        case 4:
                          return (
                            c &&
                              ((h = Ko(t, r, [
                                c.width,
                                c.height,
                                c.width / c.height,
                              ])),
                              (H = h[0]),
                              (z = h[1]),
                              (oA = h[2]),
                              (D = h[3]),
                              (b = h[4]),
                              (m = i.ctx.createPattern(
                                i.resizeImage(c, D, b),
                                "repeat"
                              )),
                              i.renderRepeat(H, m, z, oA)),
                            [3, 6]
                          );
                        case 5:
                          zQ(u)
                            ? ((w = Ko(t, r, [null, null, null])),
                              (H = w[0]),
                              (z = w[1]),
                              (oA = w[2]),
                              (D = w[3]),
                              (b = w[4]),
                              (p = XQ(u.angle, D, b)),
                              (x = p[0]),
                              (g = p[1]),
                              (B = p[2]),
                              (d = p[3]),
                              (Q = p[4]),
                              (U = document.createElement("canvas")),
                              (U.width = D),
                              (U.height = b),
                              (C = U.getContext("2d")),
                              (v = C.createLinearGradient(g, d, B, Q)),
                              yc(u.stops, x).forEach(function (we) {
                                return v.addColorStop(we.stop, fA(we.color));
                              }),
                              (C.fillStyle = v),
                              C.fillRect(0, 0, D, b),
                              D > 0 &&
                                b > 0 &&
                                ((m = i.ctx.createPattern(U, "repeat")),
                                i.renderRepeat(H, m, z, oA)))
                            : ZQ(u) &&
                              ((F = Ko(t, r, [null, null, null])),
                              (H = F[0]),
                              (_ = F[1]),
                              (tA = F[2]),
                              (D = F[3]),
                              (b = F[4]),
                              (TA =
                                u.position.length === 0 ? [ba] : u.position),
                              (z = W(TA[0], D)),
                              (oA = W(TA[TA.length - 1], b)),
                              (I = WQ(u, z, oA, D, b)),
                              (T = I[0]),
                              (k = I[1]),
                              T > 0 &&
                                k > 0 &&
                                ((G = i.ctx.createRadialGradient(
                                  _ + z,
                                  tA + oA,
                                  0,
                                  _ + z,
                                  tA + oA,
                                  T
                                )),
                                yc(u.stops, T * 2).forEach(function (we) {
                                  return G.addColorStop(we.stop, fA(we.color));
                                }),
                                i.path(H),
                                (i.ctx.fillStyle = G),
                                T !== k
                                  ? ((X = t.bounds.left + 0.5 * t.bounds.width),
                                    (kA = t.bounds.top + 0.5 * t.bounds.height),
                                    (HA = k / T),
                                    (PA = 1 / HA),
                                    i.ctx.save(),
                                    i.ctx.translate(X, kA),
                                    i.ctx.transform(1, 0, 0, HA, 0, 0),
                                    i.ctx.translate(-X, -kA),
                                    i.ctx.fillRect(
                                      _,
                                      PA * (tA - kA) + kA,
                                      D,
                                      b * PA
                                    ),
                                    i.ctx.restore())
                                  : i.ctx.fill())),
                            (OA.label = 6);
                        case 6:
                          return r--, [2];
                      }
                    });
                  }),
                  (i = this),
                  (s = 0),
                  (o = t.styles.backgroundImage.slice(0).reverse()),
                  (a.label = 1);
              case 1:
                return s < o.length ? ((l = o[s]), [5, n(l)]) : [3, 4];
              case 2:
                a.sent(), (a.label = 3);
              case 3:
                return s++, [3, 1];
              case 4:
                return [2];
            }
          });
        });
      }),
      (e.prototype.renderSolidBorder = function (t, r, n) {
        return IA(this, void 0, void 0, function () {
          return vA(this, function (i) {
            return (
              this.path(tB(n, r)),
              (this.ctx.fillStyle = fA(t)),
              this.ctx.fill(),
              [2]
            );
          });
        });
      }),
      (e.prototype.renderDoubleBorder = function (t, r, n, i) {
        return IA(this, void 0, void 0, function () {
          var s, o;
          return vA(this, function (l) {
            switch (l.label) {
              case 0:
                return r < 3 ? [4, this.renderSolidBorder(t, n, i)] : [3, 2];
              case 1:
                return l.sent(), [2];
              case 2:
                return (
                  (s = AF(i, n)),
                  this.path(s),
                  (this.ctx.fillStyle = fA(t)),
                  this.ctx.fill(),
                  (o = eF(i, n)),
                  this.path(o),
                  this.ctx.fill(),
                  [2]
                );
            }
          });
        });
      }),
      (e.prototype.renderNodeBackgroundAndBorders = function (t) {
        return IA(this, void 0, void 0, function () {
          var r,
            n,
            i,
            s,
            o,
            l,
            a,
            u,
            c = this;
          return vA(this, function (f) {
            switch (f.label) {
              case 0:
                return (
                  this.applyEffects(t.getEffects(2)),
                  (r = t.container.styles),
                  (n = !ot(r.backgroundColor) || r.backgroundImage.length),
                  (i = [
                    {
                      style: r.borderTopStyle,
                      color: r.borderTopColor,
                      width: r.borderTopWidth,
                    },
                    {
                      style: r.borderRightStyle,
                      color: r.borderRightColor,
                      width: r.borderRightWidth,
                    },
                    {
                      style: r.borderBottomStyle,
                      color: r.borderBottomColor,
                      width: r.borderBottomWidth,
                    },
                    {
                      style: r.borderLeftStyle,
                      color: r.borderLeftColor,
                      width: r.borderLeftWidth,
                    },
                  ]),
                  (s = BF(Gt(r.backgroundClip, 0), t.curves)),
                  n || r.boxShadow.length
                    ? (this.ctx.save(),
                      this.path(s),
                      this.ctx.clip(),
                      ot(r.backgroundColor) ||
                        ((this.ctx.fillStyle = fA(r.backgroundColor)),
                        this.ctx.fill()),
                      [4, this.renderBackgroundImage(t.container)])
                    : [3, 2]
                );
              case 1:
                f.sent(),
                  this.ctx.restore(),
                  r.boxShadow
                    .slice(0)
                    .reverse()
                    .forEach(function (h) {
                      c.ctx.save();
                      var w = us(t.curves),
                        p = h.inset ? 0 : aF,
                        x = $U(
                          w,
                          -p + (h.inset ? 1 : -1) * h.spread.number,
                          (h.inset ? 1 : -1) * h.spread.number,
                          h.spread.number * (h.inset ? -2 : 2),
                          h.spread.number * (h.inset ? -2 : 2)
                        );
                      h.inset
                        ? (c.path(w), c.ctx.clip(), c.mask(x))
                        : (c.mask(w), c.ctx.clip(), c.path(x)),
                        (c.ctx.shadowOffsetX = h.offsetX.number + p),
                        (c.ctx.shadowOffsetY = h.offsetY.number),
                        (c.ctx.shadowColor = fA(h.color)),
                        (c.ctx.shadowBlur = h.blur.number),
                        (c.ctx.fillStyle = h.inset
                          ? fA(h.color)
                          : "rgba(0,0,0,1)"),
                        c.ctx.fill(),
                        c.ctx.restore();
                    }),
                  (f.label = 2);
              case 2:
                (o = 0), (l = 0), (a = i), (f.label = 3);
              case 3:
                return l < a.length
                  ? ((u = a[l]),
                    u.style !== 0 && !ot(u.color) && u.width > 0
                      ? u.style !== 2
                        ? [3, 5]
                        : [
                            4,
                            this.renderDashedDottedBorder(
                              u.color,
                              u.width,
                              o,
                              t.curves,
                              2
                            ),
                          ]
                      : [3, 11])
                  : [3, 13];
              case 4:
                return f.sent(), [3, 11];
              case 5:
                return u.style !== 3
                  ? [3, 7]
                  : [
                      4,
                      this.renderDashedDottedBorder(
                        u.color,
                        u.width,
                        o,
                        t.curves,
                        3
                      ),
                    ];
              case 6:
                return f.sent(), [3, 11];
              case 7:
                return u.style !== 4
                  ? [3, 9]
                  : [4, this.renderDoubleBorder(u.color, u.width, o, t.curves)];
              case 8:
                return f.sent(), [3, 11];
              case 9:
                return [4, this.renderSolidBorder(u.color, o, t.curves)];
              case 10:
                f.sent(), (f.label = 11);
              case 11:
                o++, (f.label = 12);
              case 12:
                return l++, [3, 3];
              case 13:
                return [2];
            }
          });
        });
      }),
      (e.prototype.renderDashedDottedBorder = function (t, r, n, i, s) {
        return IA(this, void 0, void 0, function () {
          var o, l, a, u, c, f, h, w, p, x, g, B, d, Q, U, C, U, C;
          return vA(this, function (v) {
            return (
              this.ctx.save(),
              (o = tF(i, n)),
              (l = tB(i, n)),
              s === 2 && (this.path(l), this.ctx.clip()),
              Ae(l[0])
                ? ((a = l[0].start.x), (u = l[0].start.y))
                : ((a = l[0].x), (u = l[0].y)),
              Ae(l[1])
                ? ((c = l[1].end.x), (f = l[1].end.y))
                : ((c = l[1].x), (f = l[1].y)),
              n === 0 || n === 2
                ? (h = Math.abs(a - c))
                : (h = Math.abs(u - f)),
              this.ctx.beginPath(),
              s === 3 ? this.formatPath(o) : this.formatPath(l.slice(0, 2)),
              (w = r < 3 ? r * 3 : r * 2),
              (p = r < 3 ? r * 2 : r),
              s === 3 && ((w = r), (p = r)),
              (x = !0),
              h <= w * 2
                ? (x = !1)
                : h <= w * 2 + p
                ? ((g = h / (2 * w + p)), (w *= g), (p *= g))
                : ((B = Math.floor((h + p) / (w + p))),
                  (d = (h - B * w) / (B - 1)),
                  (Q = (h - (B + 1) * w) / B),
                  (p = Q <= 0 || Math.abs(p - d) < Math.abs(p - Q) ? d : Q)),
              x &&
                (s === 3
                  ? this.ctx.setLineDash([0, w + p])
                  : this.ctx.setLineDash([w, p])),
              s === 3
                ? ((this.ctx.lineCap = "round"), (this.ctx.lineWidth = r))
                : (this.ctx.lineWidth = r * 2 + 1.1),
              (this.ctx.strokeStyle = fA(t)),
              this.ctx.stroke(),
              this.ctx.setLineDash([]),
              s === 2 &&
                (Ae(l[0]) &&
                  ((U = l[3]),
                  (C = l[0]),
                  this.ctx.beginPath(),
                  this.formatPath([
                    new S(U.end.x, U.end.y),
                    new S(C.start.x, C.start.y),
                  ]),
                  this.ctx.stroke()),
                Ae(l[1]) &&
                  ((U = l[1]),
                  (C = l[2]),
                  this.ctx.beginPath(),
                  this.formatPath([
                    new S(U.end.x, U.end.y),
                    new S(C.start.x, C.start.y),
                  ]),
                  this.ctx.stroke())),
              this.ctx.restore(),
              [2]
            );
          });
        });
      }),
      (e.prototype.render = function (t) {
        return IA(this, void 0, void 0, function () {
          var r;
          return vA(this, function (n) {
            switch (n.label) {
              case 0:
                return (
                  this.options.backgroundColor &&
                    ((this.ctx.fillStyle = fA(this.options.backgroundColor)),
                    this.ctx.fillRect(
                      this.options.x,
                      this.options.y,
                      this.options.width,
                      this.options.height
                    )),
                  (r = qU(t)),
                  [4, this.renderStack(r)]
                );
              case 1:
                return n.sent(), this.applyEffects([]), [2, this.canvas];
            }
          });
        });
      }),
      e
    );
  })(Qd),
  cF = function (A) {
    return A instanceof td || A instanceof ed
      ? !0
      : A instanceof Ya && A.type !== os && A.type !== ss;
  },
  BF = function (A, e) {
    switch (A) {
      case 0:
        return us(e);
      case 2:
        return JU(e);
      case 1:
      default:
        return cs(e);
    }
  },
  fF = function (A) {
    switch (A) {
      case 1:
        return "center";
      case 2:
        return "right";
      case 0:
      default:
        return "left";
    }
  },
  gF = ["-apple-system", "system-ui"],
  dF = function (A) {
    return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent)
      ? A.filter(function (e) {
          return gF.indexOf(e) === -1;
        })
      : A;
  },
  wF = (function (A) {
    de(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return (
        (n.canvas = r.canvas ? r.canvas : document.createElement("canvas")),
        (n.ctx = n.canvas.getContext("2d")),
        (n.options = r),
        (n.canvas.width = Math.floor(r.width * r.scale)),
        (n.canvas.height = Math.floor(r.height * r.scale)),
        (n.canvas.style.width = r.width + "px"),
        (n.canvas.style.height = r.height + "px"),
        n.ctx.scale(n.options.scale, n.options.scale),
        n.ctx.translate(-r.x, -r.y),
        n.context.logger.debug(
          "EXPERIMENTAL ForeignObject renderer initialized (" +
            r.width +
            "x" +
            r.height +
            " at " +
            r.x +
            "," +
            r.y +
            ") with scale " +
            r.scale
        ),
        n
      );
    }
    return (
      (e.prototype.render = function (t) {
        return IA(this, void 0, void 0, function () {
          var r, n;
          return vA(this, function (i) {
            switch (i.label) {
              case 0:
                return (
                  (r = Vl(
                    this.options.width * this.options.scale,
                    this.options.height * this.options.scale,
                    this.options.scale,
                    this.options.scale,
                    t
                  )),
                  [4, hF(r)]
                );
              case 1:
                return (
                  (n = i.sent()),
                  this.options.backgroundColor &&
                    ((this.ctx.fillStyle = fA(this.options.backgroundColor)),
                    this.ctx.fillRect(
                      0,
                      0,
                      this.options.width * this.options.scale,
                      this.options.height * this.options.scale
                    )),
                  this.ctx.drawImage(
                    n,
                    -this.options.x * this.options.scale,
                    -this.options.y * this.options.scale
                  ),
                  [2, this.canvas]
                );
            }
          });
        });
      }),
      e
    );
  })(Qd),
  hF = function (A) {
    return new Promise(function (e, t) {
      var r = new Image();
      (r.onload = function () {
        e(r);
      }),
        (r.onerror = t),
        (r.src =
          "data:image/svg+xml;charset=utf-8," +
          encodeURIComponent(new XMLSerializer().serializeToString(A)));
    });
  },
  pF = (function () {
    function A(e) {
      var t = e.id,
        r = e.enabled;
      (this.id = t), (this.enabled = r), (this.start = Date.now());
    }
    return (
      (A.prototype.debug = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this.enabled &&
          (typeof window < "u" &&
          window.console &&
          typeof console.debug == "function"
            ? console.debug.apply(
                console,
                Yn([this.id, this.getTime() + "ms"], e)
              )
            : this.info.apply(this, e));
      }),
      (A.prototype.getTime = function () {
        return Date.now() - this.start;
      }),
      (A.prototype.info = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this.enabled &&
          typeof window < "u" &&
          window.console &&
          typeof console.info == "function" &&
          console.info.apply(console, Yn([this.id, this.getTime() + "ms"], e));
      }),
      (A.prototype.warn = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this.enabled &&
          (typeof window < "u" &&
          window.console &&
          typeof console.warn == "function"
            ? console.warn.apply(
                console,
                Yn([this.id, this.getTime() + "ms"], e)
              )
            : this.info.apply(this, e));
      }),
      (A.prototype.error = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this.enabled &&
          (typeof window < "u" &&
          window.console &&
          typeof console.error == "function"
            ? console.error.apply(
                console,
                Yn([this.id, this.getTime() + "ms"], e)
              )
            : this.info.apply(this, e));
      }),
      (A.instances = {}),
      A
    );
  })(),
  QF = (function () {
    function A(e, t) {
      var r;
      (this.windowBounds = t),
        (this.instanceName = "#" + A.instanceCount++),
        (this.logger = new pF({ id: this.instanceName, enabled: e.logging })),
        (this.cache =
          (r = e.cache) !== null && r !== void 0 ? r : new RU(this, e));
    }
    return (A.instanceCount = 1), A;
  })(),
  CF = function (A, e) {
    return e === void 0 && (e = {}), UF(A, e);
  };
typeof window < "u" && fd.setContext(window);
var UF = function (A, e) {
    return IA(void 0, void 0, void 0, function () {
      var t,
        r,
        n,
        i,
        s,
        o,
        l,
        a,
        u,
        c,
        f,
        h,
        w,
        p,
        x,
        g,
        B,
        d,
        Q,
        U,
        v,
        C,
        v,
        m,
        F,
        H,
        _,
        tA,
        D,
        b,
        TA,
        z,
        oA,
        I,
        T,
        k,
        G,
        X,
        kA,
        HA;
      return vA(this, function (PA) {
        switch (PA.label) {
          case 0:
            if (!A || typeof A != "object")
              return [
                2,
                Promise.reject("Invalid element provided as first argument"),
              ];
            if (((t = A.ownerDocument), !t))
              throw new Error("Element is not attached to a Document");
            if (((r = t.defaultView), !r))
              throw new Error("Document is not attached to a Window");
            return (
              (n = {
                allowTaint:
                  (m = e.allowTaint) !== null && m !== void 0 ? m : !1,
                imageTimeout:
                  (F = e.imageTimeout) !== null && F !== void 0 ? F : 15e3,
                proxy: e.proxy,
                useCORS: (H = e.useCORS) !== null && H !== void 0 ? H : !1,
              }),
              (i = Hl(
                {
                  logging: (_ = e.logging) !== null && _ !== void 0 ? _ : !0,
                  cache: e.cache,
                },
                n
              )),
              (s = {
                windowWidth:
                  (tA = e.windowWidth) !== null && tA !== void 0
                    ? tA
                    : r.innerWidth,
                windowHeight:
                  (D = e.windowHeight) !== null && D !== void 0
                    ? D
                    : r.innerHeight,
                scrollX:
                  (b = e.scrollX) !== null && b !== void 0 ? b : r.pageXOffset,
                scrollY:
                  (TA = e.scrollY) !== null && TA !== void 0
                    ? TA
                    : r.pageYOffset,
              }),
              (o = new Ne(s.scrollX, s.scrollY, s.windowWidth, s.windowHeight)),
              (l = new QF(i, o)),
              (a =
                (z = e.foreignObjectRendering) !== null && z !== void 0
                  ? z
                  : !1),
              (u = {
                allowTaint:
                  (oA = e.allowTaint) !== null && oA !== void 0 ? oA : !1,
                onclone: e.onclone,
                ignoreElements: e.ignoreElements,
                inlineImages: a,
                copyStyles: a,
              }),
              l.logger.debug(
                "Starting document clone with size " +
                  o.width +
                  "x" +
                  o.height +
                  " scrolled to " +
                  -o.left +
                  "," +
                  -o.top
              ),
              (c = new qc(l, A, u)),
              (f = c.clonedReferenceElement),
              f
                ? [4, c.toIFrame(t, o)]
                : [2, Promise.reject("Unable to find element in cloned iframe")]
            );
          case 1:
            return (
              (h = PA.sent()),
              (w = ja(f) || FU(f) ? $h(f.ownerDocument) : xs(l, f)),
              (p = w.width),
              (x = w.height),
              (g = w.left),
              (B = w.top),
              (d = FF(l, f, e.backgroundColor)),
              (Q = {
                canvas: e.canvas,
                backgroundColor: d,
                scale:
                  (T =
                    (I = e.scale) !== null && I !== void 0
                      ? I
                      : r.devicePixelRatio) !== null && T !== void 0
                    ? T
                    : 1,
                x: ((k = e.x) !== null && k !== void 0 ? k : 0) + g,
                y: ((G = e.y) !== null && G !== void 0 ? G : 0) + B,
                width:
                  (X = e.width) !== null && X !== void 0 ? X : Math.ceil(p),
                height:
                  (kA = e.height) !== null && kA !== void 0 ? kA : Math.ceil(x),
              }),
              a
                ? (l.logger.debug(
                    "Document cloned, using foreign object rendering"
                  ),
                  (v = new wF(l, Q)),
                  [4, v.render(f)])
                : [3, 3]
            );
          case 2:
            return (U = PA.sent()), [3, 5];
          case 3:
            return (
              l.logger.debug(
                "Document cloned, element located at " +
                  g +
                  "," +
                  B +
                  " with size " +
                  p +
                  "x" +
                  x +
                  " using computed rendering"
              ),
              l.logger.debug("Starting DOM parsing"),
              (C = id(l, f)),
              d === C.styles.backgroundColor &&
                (C.styles.backgroundColor = Ke.TRANSPARENT),
              l.logger.debug(
                "Starting renderer for element at " +
                  Q.x +
                  "," +
                  Q.y +
                  " with size " +
                  Q.width +
                  "x" +
                  Q.height
              ),
              (v = new uF(l, Q)),
              [4, v.render(C)]
            );
          case 4:
            (U = PA.sent()), (PA.label = 5);
          case 5:
            return (
              (!((HA = e.removeContainer) !== null && HA !== void 0) || HA) &&
                (qc.destroy(h) ||
                  l.logger.error(
                    "Cannot detach cloned iframe as it is not in the DOM anymore"
                  )),
              l.logger.debug("Finished rendering"),
              [2, U]
            );
        }
      });
    });
  },
  FF = function (A, e, t) {
    var r = e.ownerDocument,
      n = r.documentElement
        ? qr(A, getComputedStyle(r.documentElement).backgroundColor)
        : Ke.TRANSPARENT,
      i = r.body
        ? qr(A, getComputedStyle(r.body).backgroundColor)
        : Ke.TRANSPARENT,
      s =
        typeof t == "string"
          ? qr(A, t)
          : t === null
          ? Ke.TRANSPARENT
          : 4294967295;
    return e === r.documentElement ? (ot(n) ? (ot(i) ? s : i) : n) : s;
  };
const vF = () => {
    const [A, e] = SA.useState("images/BG0.png"),
      [t, r] = SA.useState("images/body0.png"),
      [n, i] = SA.useState(""),
      [s, o] = SA.useState(""),
      [l, a] = SA.useState("images/head0.png"),
      // [l, a] = SA.useState("images/head1.png"),
      [u, c] = SA.useState(""),
      [f, h] = SA.useState("images/hand0.png"),
      w = (D) => {
        e(`images/BG${D}.png`);
      },
      p = (D) => {
        r(`images/body${D}.png`);
      },
      x = (D) => {
        i(`images/emotion${D}.png`);
      },
      g = (D) => {
        o(`images/hat${D}.png`);
      },
      B = (D) => {
        a(`images/head${D}.png`);
      },
      d = (D) => {
        c(`images/accessory${D}.png`);
      },
      Q = (D) => {
        h(`images/hand${D}.png`);
      },
      U = () => {
        const D = Math.floor(Math.random() * 16),
          b = Math.floor(Math.random() * 16),
          TA = Math.floor(Math.random() * 16),
          z = Math.floor(Math.random() * 13),
          oA = Math.floor(Math.random() * 2),
          I = Math.floor(Math.random() * 14),
          T = Math.floor(Math.random() * 16);
        w(D), p(b), x(TA), g(z), B(oA), d(I), Q(T);
      },
      C = () => {
        w(0), p(0), x(0), g(0), B(0), d(0), Q(0);
      },
      v = () => {
        const D = document.getElementById("pfpImage");
        D &&
          CF(D, { scale: 10 })
            .then((b) => {
              const TA = b.toDataURL("image/png"),
                z = document.createElement("a");
              (z.href = TA), (z.download = "connect-us.png"), z.click();
            })
            .catch((b) => {
              console.error("Error while downloading:", b);
            });
      },
      [m, F] = SA.useState(0),
      H = ["High Quality PFP", "Medium Quality PFP", "Low Quality PFP"],
      _ = () => {
        F((D) => (D === 0 ? H.length - 1 : D - 1));
      },
      tA = () => {
        F((D) => (D === H.length - 1 ? 0 : D + 1));
      };
    return y.jsxs("div", {
      className:
        "max-w-[1402px] w-full m-auto flex flex-col my-auto px-4 md:px-0 mt-10 ",
      children: [
        y.jsx("div", {
          children: y.jsx("img", {
            src: "",
            alt: "",
          }),
        }),
        y.jsxs("div", {
          className: "flex justify-between md:flex-row flex-col",
          children: [
            y.jsxs("div", {
              className: "flex flex-col items-center max-w-[499px] w-full",
              children: [
                y.jsx("section", {
                  className:
                    "w-full h-[404px] md:h-[540px] overflow-hidden border-b-[3px] border-black",
                  children: y.jsxs("div", {
                    className:
                      "content-wrapper w-full h-[424px] md:h-full mt-9 -skew-y-6 relative border-[3px] border-black",
                    children: [
                      y.jsx("img", {
                        src: `/${A}`,
                        className: "w-full h-full",
                      }),
                      y.jsx("img", {
                        src: `/${l}`,
                        className:
                          "w-full absolute top-[51%] left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain z-[1]",
                      }),
                      y.jsx("img", {
                        src: `/${t}`,
                        className:
                          "w-full absolute top-[51%] left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain",
                      }),
                      y.jsx("img", {
                        src: `/${n}`,
                        className:
                          "w-full absolute top-[51%] left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain z-[2]",
                      }),
                      y.jsx("img", {
                        src: `/${s}`,
                        className:
                          "w-full absolute top-[51%] left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain z-[3]",
                      }),
                      y.jsx("img", {
                        src: `/${u}`,
                        className:
                          "w-full absolute top-[51%] left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain z-[4]",
                      }),
                      y.jsx("img", {
                        src: `/${f}`,
                        className:
                          "w-full absolute top-[51%] left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain z-[5]",
                      }),
                    ],
                  }),
                }),
                y.jsx("section", {
                  className:
                    "w-full h-[404px] max-w-[499px] md:h-[550px] overflow-hidden absolute top-[-9999px] left-[-9999px]",
                  children: y.jsxs("div", {
                    id: "pfpImage",
                    className:
                      "content-wrapper w-[499px] h-[424px] md:h-full mt-9 relative",
                    style: {
                      position: "relative",
                      width: "200px",
                      height: "215px",
                    },
                    children: [
                      y.jsx("img", {
                        src: `/${A}`,
                        className: "w-full h-full",
                      }),
                      y.jsx("img", {
                        src: `/${l}`,
                        className:
                          "w-full absolute top-[51%] left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain z-[1]",
                      }),
                      y.jsx("img", {
                        src: `/${t}`,
                        className:
                          "w-full absolute top-[51%] left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain",
                      }),
                      y.jsx("img", {
                        src: `/${n}`,
                        className:
                          "w-full absolute top-[51%] left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain z-[2]",
                      }),
                      y.jsx("img", {
                        src: `/${s}`,
                        className:
                          "w-full absolute top-[51%] left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain z-[3]",
                      }),
                      y.jsx("img", {
                        src: `/${u}`,
                        className:
                          "w-full absolute top-[51%] left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain z-[4]",
                      }),
                      y.jsx("img", {
                        src: `/${f}`,
                        className:
                          "w-full absolute top-[51%] left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain z-[5]",
                      }),
                    ],
                  }),
                }),
              ],
            }),
            y.jsx("div", {
              className: "flex-1 md:ml-4",
              children: y.jsx(jh, {
                handleClothesChange: p,
                handleBackgroundChange: w,
                handleFaceChange: x,
                handleHatChange: g,
                handleHeadChange: B,
                handleAccessoryChange: d,
                handleHandChange: Q,
                pfpOptions: H,
                pfpIndex: m,
                handlePrevious: _,
                handleNext: tA,
                onDownload: v,
                onRandomise: U,
              }),
            }),
          ],
        }),
        y.jsx(Zh, {
          onRandomise: U,
          onReset: C,
          onDownload: v,
          pfpOptions: H,
          pfpIndex: m,
          handlePrevious: _,
          handleNext: tA,
        }),
      ],
    });
  },
  mF = () =>
    y.jsxs("div", {
      className: "bg-[#2FBFFD] min-h-screen relative overflow-hidden",
      children: [
        y.jsx("img", {
          src: "/pfp/left-rectangle.png",
          alt: "",
          className:
            "w-[328.7px] h-[200%] absolute left-0 top-[-19rem] rotate-[23.53deg]",
        }),
        y.jsx("img", {
          src: "/pfp/middle-rectangle.png",
          alt: "",
          className:
            "w-[454.16px] h-[200%] absolute left-[18rem] top-[-11rem] rotate-[23.53deg]",
        }),
        y.jsx("img", {
          src: "/pfp/right-rectangle.png",
          alt: "",
          className:
            "w-[500.32px] h-[200%] absolute -right-[20rem] -top-[40rem] rotate-[31.56deg]",
        }),
        y.jsxs("div", {
          className:
            "min-h-screen relative z-10 flex flex-col mb-[30px] md:mb-0",
          children: [y.jsx(Yh, {}), y.jsx(vF, {})],
        }),
      ],
    });
function yF() {
  return y.jsx(y.Fragment, { children: y.jsx(mF, {}) });
}
Do.createRoot(document.getElementById("root")).render(
  y.jsx(Od.StrictMode, { children: y.jsx(yF, {}) })
);
