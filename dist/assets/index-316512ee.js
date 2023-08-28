(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function Lm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Wf = { exports: {} },
  Eo = {},
  Qf = { exports: {} },
  B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ni = Symbol.for("react.element"),
  Rm = Symbol.for("react.portal"),
  Nm = Symbol.for("react.fragment"),
  jm = Symbol.for("react.strict_mode"),
  Om = Symbol.for("react.profiler"),
  Bm = Symbol.for("react.provider"),
  Fm = Symbol.for("react.context"),
  Im = Symbol.for("react.forward_ref"),
  zm = Symbol.for("react.suspense"),
  _m = Symbol.for("react.memo"),
  Um = Symbol.for("react.lazy"),
  vu = Symbol.iterator;
function Hm(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (vu && e[vu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Yf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Gf = Object.assign,
  Xf = {};
function $n(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Xf),
    (this.updater = n || Yf);
}
$n.prototype.isReactComponent = {};
$n.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
$n.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Kf() {}
Kf.prototype = $n.prototype;
function Jl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Xf),
    (this.updater = n || Yf);
}
var bl = (Jl.prototype = new Kf());
bl.constructor = Jl;
Gf(bl, $n.prototype);
bl.isPureReactComponent = !0;
var Au = Array.isArray,
  Zf = Object.prototype.hasOwnProperty,
  ea = { current: null },
  qf = { key: !0, ref: !0, __self: !0, __source: !0 };
function $f(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Zf.call(t, r) && !qf.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: ni,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: ea.current,
  };
}
function Wm(e, t) {
  return {
    $$typeof: ni,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ta(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ni;
}
function Qm(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var xu = /\/+/g;
function es(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Qm("" + e.key)
    : t.toString(36);
}
function Ni(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ni:
          case Rm:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + es(s, 0) : r),
      Au(i)
        ? ((n = ""),
          e != null && (n = e.replace(xu, "$&/") + "/"),
          Ni(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (ta(i) &&
            (i = Wm(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(xu, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Au(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var a = r + es(o, l);
      s += Ni(o, t, n, a, i);
    }
  else if (((a = Hm(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + es(o, l++)), (s += Ni(o, t, n, a, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function pi(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ni(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function Ym(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ve = { current: null },
  ji = { transition: null },
  Gm = {
    ReactCurrentDispatcher: ve,
    ReactCurrentBatchConfig: ji,
    ReactCurrentOwner: ea,
  };
B.Children = {
  map: pi,
  forEach: function (e, t, n) {
    pi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      pi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      pi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ta(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
B.Component = $n;
B.Fragment = Nm;
B.Profiler = Om;
B.PureComponent = Jl;
B.StrictMode = jm;
B.Suspense = zm;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gm;
B.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Gf({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = ea.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Zf.call(t, a) &&
        !qf.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: ni, type: e.type, key: i, ref: o, props: r, _owner: s };
};
B.createContext = function (e) {
  return (
    (e = {
      $$typeof: Fm,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Bm, _context: e }),
    (e.Consumer = e)
  );
};
B.createElement = $f;
B.createFactory = function (e) {
  var t = $f.bind(null, e);
  return (t.type = e), t;
};
B.createRef = function () {
  return { current: null };
};
B.forwardRef = function (e) {
  return { $$typeof: Im, render: e };
};
B.isValidElement = ta;
B.lazy = function (e) {
  return { $$typeof: Um, _payload: { _status: -1, _result: e }, _init: Ym };
};
B.memo = function (e, t) {
  return { $$typeof: _m, type: e, compare: t === void 0 ? null : t };
};
B.startTransition = function (e) {
  var t = ji.transition;
  ji.transition = {};
  try {
    e();
  } finally {
    ji.transition = t;
  }
};
B.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
B.useCallback = function (e, t) {
  return ve.current.useCallback(e, t);
};
B.useContext = function (e) {
  return ve.current.useContext(e);
};
B.useDebugValue = function () {};
B.useDeferredValue = function (e) {
  return ve.current.useDeferredValue(e);
};
B.useEffect = function (e, t) {
  return ve.current.useEffect(e, t);
};
B.useId = function () {
  return ve.current.useId();
};
B.useImperativeHandle = function (e, t, n) {
  return ve.current.useImperativeHandle(e, t, n);
};
B.useInsertionEffect = function (e, t) {
  return ve.current.useInsertionEffect(e, t);
};
B.useLayoutEffect = function (e, t) {
  return ve.current.useLayoutEffect(e, t);
};
B.useMemo = function (e, t) {
  return ve.current.useMemo(e, t);
};
B.useReducer = function (e, t, n) {
  return ve.current.useReducer(e, t, n);
};
B.useRef = function (e) {
  return ve.current.useRef(e);
};
B.useState = function (e) {
  return ve.current.useState(e);
};
B.useSyncExternalStore = function (e, t, n) {
  return ve.current.useSyncExternalStore(e, t, n);
};
B.useTransition = function () {
  return ve.current.useTransition();
};
B.version = "18.2.0";
Qf.exports = B;
var E = Qf.exports;
const To = Lm(E);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xm = E,
  Km = Symbol.for("react.element"),
  Zm = Symbol.for("react.fragment"),
  qm = Object.prototype.hasOwnProperty,
  $m = Xm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Jm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Jf(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) qm.call(t, r) && !Jm.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Km,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: $m.current,
  };
}
Eo.Fragment = Zm;
Eo.jsx = Jf;
Eo.jsxs = Jf;
Wf.exports = Eo;
var C = Wf.exports,
  zs = {},
  bf = { exports: {} },
  Ne = {},
  ed = { exports: {} },
  td = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, R) {
    var O = M.length;
    M.push(R);
    e: for (; 0 < O; ) {
      var N = (O - 1) >>> 1,
        W = M[N];
      if (0 < i(W, R)) (M[N] = R), (M[O] = W), (O = N);
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var R = M[0],
      O = M.pop();
    if (O !== R) {
      M[0] = O;
      e: for (var N = 0, W = M.length, Xt = W >>> 1; N < Xt; ) {
        var be = 2 * (N + 1) - 1,
          An = M[be],
          Te = be + 1,
          Kt = M[Te];
        if (0 > i(An, O))
          Te < W && 0 > i(Kt, An)
            ? ((M[N] = Kt), (M[Te] = O), (N = Te))
            : ((M[N] = An), (M[be] = O), (N = be));
        else if (Te < W && 0 > i(Kt, O)) (M[N] = Kt), (M[Te] = O), (N = Te);
        else break e;
      }
    }
    return R;
  }
  function i(M, R) {
    var O = M.sortIndex - R.sortIndex;
    return O !== 0 ? O : M.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    g = !1,
    y = !1,
    v = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(M) {
    for (var R = n(u); R !== null; ) {
      if (R.callback === null) r(u);
      else if (R.startTime <= M)
        r(u), (R.sortIndex = R.expirationTime), t(a, R);
      else break;
      R = n(u);
    }
  }
  function A(M) {
    if (((v = !1), m(M), !y))
      if (n(a) !== null) (y = !0), Be(x);
      else {
        var R = n(u);
        R !== null && Je(A, R.startTime - M);
      }
  }
  function x(M, R) {
    (y = !1), v && ((v = !1), h(P), (P = -1)), (g = !0);
    var O = d;
    try {
      for (
        m(R), f = n(a);
        f !== null && (!(f.expirationTime > R) || (M && !q()));

      ) {
        var N = f.callback;
        if (typeof N == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var W = N(f.expirationTime <= R);
          (R = e.unstable_now()),
            typeof W == "function" ? (f.callback = W) : f === n(a) && r(a),
            m(R);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var Xt = !0;
      else {
        var be = n(u);
        be !== null && Je(A, be.startTime - R), (Xt = !1);
      }
      return Xt;
    } finally {
      (f = null), (d = O), (g = !1);
    }
  }
  var T = !1,
    k = null,
    P = -1,
    j = 5,
    L = -1;
  function q() {
    return !(e.unstable_now() - L < j);
  }
  function xe() {
    if (k !== null) {
      var M = e.unstable_now();
      L = M;
      var R = !0;
      try {
        R = k(!0, M);
      } finally {
        R ? Oe() : ((T = !1), (k = null));
      }
    } else T = !1;
  }
  var Oe;
  if (typeof p == "function")
    Oe = function () {
      p(xe);
    };
  else if (typeof MessageChannel < "u") {
    var $ = new MessageChannel(),
      J = $.port2;
    ($.port1.onmessage = xe),
      (Oe = function () {
        J.postMessage(null);
      });
  } else
    Oe = function () {
      w(xe, 0);
    };
  function Be(M) {
    (k = M), T || ((T = !0), Oe());
  }
  function Je(M, R) {
    P = w(function () {
      M(e.unstable_now());
    }, R);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), Be(x));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (j = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (M) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = d;
      }
      var O = d;
      d = R;
      try {
        return M();
      } finally {
        d = O;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, R) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var O = d;
      d = M;
      try {
        return R();
      } finally {
        d = O;
      }
    }),
    (e.unstable_scheduleCallback = function (M, R, O) {
      var N = e.unstable_now();
      switch (
        (typeof O == "object" && O !== null
          ? ((O = O.delay), (O = typeof O == "number" && 0 < O ? N + O : N))
          : (O = N),
        M)
      ) {
        case 1:
          var W = -1;
          break;
        case 2:
          W = 250;
          break;
        case 5:
          W = 1073741823;
          break;
        case 4:
          W = 1e4;
          break;
        default:
          W = 5e3;
      }
      return (
        (W = O + W),
        (M = {
          id: c++,
          callback: R,
          priorityLevel: M,
          startTime: O,
          expirationTime: W,
          sortIndex: -1,
        }),
        O > N
          ? ((M.sortIndex = O),
            t(u, M),
            n(a) === null &&
              M === n(u) &&
              (v ? (h(P), (P = -1)) : (v = !0), Je(A, O - N)))
          : ((M.sortIndex = W), t(a, M), y || g || ((y = !0), Be(x))),
        M
      );
    }),
    (e.unstable_shouldYield = q),
    (e.unstable_wrapCallback = function (M) {
      var R = d;
      return function () {
        var O = d;
        d = R;
        try {
          return M.apply(this, arguments);
        } finally {
          d = O;
        }
      };
    });
})(td);
ed.exports = td;
var bm = ed.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nd = E,
  Le = bm;
function S(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var rd = new Set(),
  Rr = {};
function mn(e, t) {
  Wn(e, t), Wn(e + "Capture", t);
}
function Wn(e, t) {
  for (Rr[e] = t, e = 0; e < t.length; e++) rd.add(t[e]);
}
var mt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  _s = Object.prototype.hasOwnProperty,
  eg =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  wu = {},
  Su = {};
function tg(e) {
  return _s.call(Su, e)
    ? !0
    : _s.call(wu, e)
    ? !1
    : eg.test(e)
    ? (Su[e] = !0)
    : ((wu[e] = !0), !1);
}
function ng(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function rg(e, t, n, r) {
  if (t === null || typeof t > "u" || ng(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ae(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ce[e] = new Ae(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ce[t] = new Ae(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ce[e] = new Ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ce[e] = new Ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ce[e] = new Ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ce[e] = new Ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ce[e] = new Ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ce[e] = new Ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ce[e] = new Ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var na = /[\-:]([a-z])/g;
function ra(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(na, ra);
    ce[t] = new Ae(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(na, ra);
    ce[t] = new Ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(na, ra);
  ce[t] = new Ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ce[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ce.xlinkHref = new Ae(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ce[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ia(e, t, n, r) {
  var i = ce.hasOwnProperty(t) ? ce[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (rg(t, n, i, r) && (n = null),
    r || i === null
      ? tg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var xt = nd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  hi = Symbol.for("react.element"),
  wn = Symbol.for("react.portal"),
  Sn = Symbol.for("react.fragment"),
  oa = Symbol.for("react.strict_mode"),
  Us = Symbol.for("react.profiler"),
  id = Symbol.for("react.provider"),
  od = Symbol.for("react.context"),
  sa = Symbol.for("react.forward_ref"),
  Hs = Symbol.for("react.suspense"),
  Ws = Symbol.for("react.suspense_list"),
  la = Symbol.for("react.memo"),
  Pt = Symbol.for("react.lazy"),
  sd = Symbol.for("react.offscreen"),
  Pu = Symbol.iterator;
function er(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Pu && e[Pu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var K = Object.assign,
  ts;
function dr(e) {
  if (ts === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ts = (t && t[1]) || "";
    }
  return (
    `
` +
    ts +
    e
  );
}
var ns = !1;
function rs(e, t) {
  if (!e || ns) return "";
  ns = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          l = o.length - 1;
        1 <= s && 0 <= l && i[s] !== o[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (i[s] !== o[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || i[s] !== o[l])) {
                var a =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (ns = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? dr(e) : "";
}
function ig(e) {
  switch (e.tag) {
    case 5:
      return dr(e.type);
    case 16:
      return dr("Lazy");
    case 13:
      return dr("Suspense");
    case 19:
      return dr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = rs(e.type, !1)), e;
    case 11:
      return (e = rs(e.type.render, !1)), e;
    case 1:
      return (e = rs(e.type, !0)), e;
    default:
      return "";
  }
}
function Qs(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Sn:
      return "Fragment";
    case wn:
      return "Portal";
    case Us:
      return "Profiler";
    case oa:
      return "StrictMode";
    case Hs:
      return "Suspense";
    case Ws:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case od:
        return (e.displayName || "Context") + ".Consumer";
      case id:
        return (e._context.displayName || "Context") + ".Provider";
      case sa:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case la:
        return (
          (t = e.displayName || null), t !== null ? t : Qs(e.type) || "Memo"
        );
      case Pt:
        (t = e._payload), (e = e._init);
        try {
          return Qs(e(t));
        } catch {}
    }
  return null;
}
function og(e) {
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
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
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
      return Qs(t);
    case 8:
      return t === oa ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function _t(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ld(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function sg(e) {
  var t = ld(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function mi(e) {
  e._valueTracker || (e._valueTracker = sg(e));
}
function ad(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ld(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Gi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ys(e, t) {
  var n = t.checked;
  return K({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ku(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = _t(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ud(e, t) {
  (t = t.checked), t != null && ia(e, "checked", t, !1);
}
function Gs(e, t) {
  ud(e, t);
  var n = _t(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Xs(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Xs(e, t.type, _t(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Cu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Xs(e, t, n) {
  (t !== "number" || Gi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var pr = Array.isArray;
function Bn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + _t(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ks(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return K({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Eu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(S(92));
      if (pr(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: _t(n) };
}
function cd(e, t) {
  var n = _t(t.value),
    r = _t(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Tu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function fd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Zs(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? fd(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var gi,
  dd = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        gi = gi || document.createElement("div"),
          gi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = gi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Nr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var yr = {
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
  lg = ["Webkit", "ms", "Moz", "O"];
Object.keys(yr).forEach(function (e) {
  lg.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (yr[t] = yr[e]);
  });
});
function pd(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (yr.hasOwnProperty(e) && yr[e])
    ? ("" + t).trim()
    : t + "px";
}
function hd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = pd(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var ag = K(
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
function qs(e, t) {
  if (t) {
    if (ag[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function $s(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
      return !0;
  }
}
var Js = null;
function aa(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var bs = null,
  Fn = null,
  In = null;
function Mu(e) {
  if ((e = oi(e))) {
    if (typeof bs != "function") throw Error(S(280));
    var t = e.stateNode;
    t && ((t = Ro(t)), bs(e.stateNode, e.type, t));
  }
}
function md(e) {
  Fn ? (In ? In.push(e) : (In = [e])) : (Fn = e);
}
function gd() {
  if (Fn) {
    var e = Fn,
      t = In;
    if (((In = Fn = null), Mu(e), t)) for (e = 0; e < t.length; e++) Mu(t[e]);
  }
}
function yd(e, t) {
  return e(t);
}
function vd() {}
var is = !1;
function Ad(e, t, n) {
  if (is) return e(t, n);
  is = !0;
  try {
    return yd(e, t, n);
  } finally {
    (is = !1), (Fn !== null || In !== null) && (vd(), gd());
  }
}
function jr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ro(n);
  if (r === null) return null;
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(S(231, t, typeof n));
  return n;
}
var el = !1;
if (mt)
  try {
    var tr = {};
    Object.defineProperty(tr, "passive", {
      get: function () {
        el = !0;
      },
    }),
      window.addEventListener("test", tr, tr),
      window.removeEventListener("test", tr, tr);
  } catch {
    el = !1;
  }
function ug(e, t, n, r, i, o, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var vr = !1,
  Xi = null,
  Ki = !1,
  tl = null,
  cg = {
    onError: function (e) {
      (vr = !0), (Xi = e);
    },
  };
function fg(e, t, n, r, i, o, s, l, a) {
  (vr = !1), (Xi = null), ug.apply(cg, arguments);
}
function dg(e, t, n, r, i, o, s, l, a) {
  if ((fg.apply(this, arguments), vr)) {
    if (vr) {
      var u = Xi;
      (vr = !1), (Xi = null);
    } else throw Error(S(198));
    Ki || ((Ki = !0), (tl = u));
  }
}
function gn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function xd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Du(e) {
  if (gn(e) !== e) throw Error(S(188));
}
function pg(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = gn(e)), t === null)) throw Error(S(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Du(i), e;
        if (o === r) return Du(i), t;
        o = o.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, l = i.child; l; ) {
        if (l === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (l === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = o.child; l; ) {
          if (l === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (l === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function wd(e) {
  return (e = pg(e)), e !== null ? Sd(e) : null;
}
function Sd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Sd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Pd = Le.unstable_scheduleCallback,
  Vu = Le.unstable_cancelCallback,
  hg = Le.unstable_shouldYield,
  mg = Le.unstable_requestPaint,
  b = Le.unstable_now,
  gg = Le.unstable_getCurrentPriorityLevel,
  ua = Le.unstable_ImmediatePriority,
  kd = Le.unstable_UserBlockingPriority,
  Zi = Le.unstable_NormalPriority,
  yg = Le.unstable_LowPriority,
  Cd = Le.unstable_IdlePriority,
  Mo = null,
  it = null;
function vg(e) {
  if (it && typeof it.onCommitFiberRoot == "function")
    try {
      it.onCommitFiberRoot(Mo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ke = Math.clz32 ? Math.clz32 : wg,
  Ag = Math.log,
  xg = Math.LN2;
function wg(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Ag(e) / xg) | 0)) | 0;
}
var yi = 64,
  vi = 4194304;
function hr(e) {
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
      return e;
  }
}
function qi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~i;
    l !== 0 ? (r = hr(l)) : ((o &= s), o !== 0 && (r = hr(o)));
  } else (s = n & ~i), s !== 0 ? (r = hr(s)) : o !== 0 && (r = hr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ke(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Sg(e, t) {
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
      return -1;
  }
}
function Pg(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - Ke(o),
      l = 1 << s,
      a = i[s];
    a === -1
      ? (!(l & n) || l & r) && (i[s] = Sg(l, t))
      : a <= t && (e.expiredLanes |= l),
      (o &= ~l);
  }
}
function nl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ed() {
  var e = yi;
  return (yi <<= 1), !(yi & 4194240) && (yi = 64), e;
}
function os(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ri(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ke(t)),
    (e[t] = n);
}
function kg(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Ke(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function ca(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ke(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var I = 0;
function Td(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Md,
  fa,
  Dd,
  Vd,
  Ld,
  rl = !1,
  Ai = [],
  Vt = null,
  Lt = null,
  Rt = null,
  Or = new Map(),
  Br = new Map(),
  Et = [],
  Cg =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Lu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Vt = null;
      break;
    case "dragenter":
    case "dragleave":
      Lt = null;
      break;
    case "mouseover":
    case "mouseout":
      Rt = null;
      break;
    case "pointerover":
    case "pointerout":
      Or.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Br.delete(t.pointerId);
  }
}
function nr(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = oi(t)), t !== null && fa(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Eg(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Vt = nr(Vt, e, t, n, r, i)), !0;
    case "dragenter":
      return (Lt = nr(Lt, e, t, n, r, i)), !0;
    case "mouseover":
      return (Rt = nr(Rt, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Or.set(o, nr(Or.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Br.set(o, nr(Br.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Rd(e) {
  var t = tn(e.target);
  if (t !== null) {
    var n = gn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = xd(n)), t !== null)) {
          (e.blockedOn = t),
            Ld(e.priority, function () {
              Dd(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Oi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = il(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Js = r), n.target.dispatchEvent(r), (Js = null);
    } else return (t = oi(n)), t !== null && fa(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ru(e, t, n) {
  Oi(e) && n.delete(t);
}
function Tg() {
  (rl = !1),
    Vt !== null && Oi(Vt) && (Vt = null),
    Lt !== null && Oi(Lt) && (Lt = null),
    Rt !== null && Oi(Rt) && (Rt = null),
    Or.forEach(Ru),
    Br.forEach(Ru);
}
function rr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    rl ||
      ((rl = !0),
      Le.unstable_scheduleCallback(Le.unstable_NormalPriority, Tg)));
}
function Fr(e) {
  function t(i) {
    return rr(i, e);
  }
  if (0 < Ai.length) {
    rr(Ai[0], e);
    for (var n = 1; n < Ai.length; n++) {
      var r = Ai[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Vt !== null && rr(Vt, e),
      Lt !== null && rr(Lt, e),
      Rt !== null && rr(Rt, e),
      Or.forEach(t),
      Br.forEach(t),
      n = 0;
    n < Et.length;
    n++
  )
    (r = Et[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Et.length && ((n = Et[0]), n.blockedOn === null); )
    Rd(n), n.blockedOn === null && Et.shift();
}
var zn = xt.ReactCurrentBatchConfig,
  $i = !0;
function Mg(e, t, n, r) {
  var i = I,
    o = zn.transition;
  zn.transition = null;
  try {
    (I = 1), da(e, t, n, r);
  } finally {
    (I = i), (zn.transition = o);
  }
}
function Dg(e, t, n, r) {
  var i = I,
    o = zn.transition;
  zn.transition = null;
  try {
    (I = 4), da(e, t, n, r);
  } finally {
    (I = i), (zn.transition = o);
  }
}
function da(e, t, n, r) {
  if ($i) {
    var i = il(e, t, n, r);
    if (i === null) ms(e, t, r, Ji, n), Lu(e, r);
    else if (Eg(i, e, t, n, r)) r.stopPropagation();
    else if ((Lu(e, r), t & 4 && -1 < Cg.indexOf(e))) {
      for (; i !== null; ) {
        var o = oi(i);
        if (
          (o !== null && Md(o),
          (o = il(e, t, n, r)),
          o === null && ms(e, t, r, Ji, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else ms(e, t, r, null, n);
  }
}
var Ji = null;
function il(e, t, n, r) {
  if (((Ji = null), (e = aa(r)), (e = tn(e)), e !== null))
    if (((t = gn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = xd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ji = e), null;
}
function Nd(e) {
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
      switch (gg()) {
        case ua:
          return 1;
        case kd:
          return 4;
        case Zi:
        case yg:
          return 16;
        case Cd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Mt = null,
  pa = null,
  Bi = null;
function jd() {
  if (Bi) return Bi;
  var e,
    t = pa,
    n = t.length,
    r,
    i = "value" in Mt ? Mt.value : Mt.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (Bi = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Fi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function xi() {
  return !0;
}
function Nu() {
  return !1;
}
function je(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? xi
        : Nu),
      (this.isPropagationStopped = Nu),
      this
    );
  }
  return (
    K(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = xi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = xi));
      },
      persist: function () {},
      isPersistent: xi,
    }),
    t
  );
}
var Jn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ha = je(Jn),
  ii = K({}, Jn, { view: 0, detail: 0 }),
  Vg = je(ii),
  ss,
  ls,
  ir,
  Do = K({}, ii, {
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
    getModifierState: ma,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ir &&
            (ir && e.type === "mousemove"
              ? ((ss = e.screenX - ir.screenX), (ls = e.screenY - ir.screenY))
              : (ls = ss = 0),
            (ir = e)),
          ss);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ls;
    },
  }),
  ju = je(Do),
  Lg = K({}, Do, { dataTransfer: 0 }),
  Rg = je(Lg),
  Ng = K({}, ii, { relatedTarget: 0 }),
  as = je(Ng),
  jg = K({}, Jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Og = je(jg),
  Bg = K({}, Jn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Fg = je(Bg),
  Ig = K({}, Jn, { data: 0 }),
  Ou = je(Ig),
  zg = {
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
  _g = {
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
  Ug = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Hg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ug[e]) ? !!t[e] : !1;
}
function ma() {
  return Hg;
}
var Wg = K({}, ii, {
    key: function (e) {
      if (e.key) {
        var t = zg[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Fi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? _g[e.keyCode] || "Unidentified"
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
    getModifierState: ma,
    charCode: function (e) {
      return e.type === "keypress" ? Fi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Fi(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Qg = je(Wg),
  Yg = K({}, Do, {
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
  Bu = je(Yg),
  Gg = K({}, ii, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ma,
  }),
  Xg = je(Gg),
  Kg = K({}, Jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Zg = je(Kg),
  qg = K({}, Do, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  $g = je(qg),
  Jg = [9, 13, 27, 32],
  ga = mt && "CompositionEvent" in window,
  Ar = null;
mt && "documentMode" in document && (Ar = document.documentMode);
var bg = mt && "TextEvent" in window && !Ar,
  Od = mt && (!ga || (Ar && 8 < Ar && 11 >= Ar)),
  Fu = String.fromCharCode(32),
  Iu = !1;
function Bd(e, t) {
  switch (e) {
    case "keyup":
      return Jg.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Fd(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Pn = !1;
function ey(e, t) {
  switch (e) {
    case "compositionend":
      return Fd(t);
    case "keypress":
      return t.which !== 32 ? null : ((Iu = !0), Fu);
    case "textInput":
      return (e = t.data), e === Fu && Iu ? null : e;
    default:
      return null;
  }
}
function ty(e, t) {
  if (Pn)
    return e === "compositionend" || (!ga && Bd(e, t))
      ? ((e = jd()), (Bi = pa = Mt = null), (Pn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Od && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var ny = {
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
function zu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!ny[e.type] : t === "textarea";
}
function Id(e, t, n, r) {
  md(r),
    (t = bi(t, "onChange")),
    0 < t.length &&
      ((n = new ha("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var xr = null,
  Ir = null;
function ry(e) {
  Zd(e, 0);
}
function Vo(e) {
  var t = En(e);
  if (ad(t)) return e;
}
function iy(e, t) {
  if (e === "change") return t;
}
var zd = !1;
if (mt) {
  var us;
  if (mt) {
    var cs = "oninput" in document;
    if (!cs) {
      var _u = document.createElement("div");
      _u.setAttribute("oninput", "return;"),
        (cs = typeof _u.oninput == "function");
    }
    us = cs;
  } else us = !1;
  zd = us && (!document.documentMode || 9 < document.documentMode);
}
function Uu() {
  xr && (xr.detachEvent("onpropertychange", _d), (Ir = xr = null));
}
function _d(e) {
  if (e.propertyName === "value" && Vo(Ir)) {
    var t = [];
    Id(t, Ir, e, aa(e)), Ad(ry, t);
  }
}
function oy(e, t, n) {
  e === "focusin"
    ? (Uu(), (xr = t), (Ir = n), xr.attachEvent("onpropertychange", _d))
    : e === "focusout" && Uu();
}
function sy(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Vo(Ir);
}
function ly(e, t) {
  if (e === "click") return Vo(t);
}
function ay(e, t) {
  if (e === "input" || e === "change") return Vo(t);
}
function uy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var $e = typeof Object.is == "function" ? Object.is : uy;
function zr(e, t) {
  if ($e(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!_s.call(t, i) || !$e(e[i], t[i])) return !1;
  }
  return !0;
}
function Hu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Wu(e, t) {
  var n = Hu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Hu(n);
  }
}
function Ud(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Ud(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Hd() {
  for (var e = window, t = Gi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Gi(e.document);
  }
  return t;
}
function ya(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function cy(e) {
  var t = Hd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ud(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ya(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Wu(n, o));
        var s = Wu(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var fy = mt && "documentMode" in document && 11 >= document.documentMode,
  kn = null,
  ol = null,
  wr = null,
  sl = !1;
function Qu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  sl ||
    kn == null ||
    kn !== Gi(r) ||
    ((r = kn),
    "selectionStart" in r && ya(r)
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
    (wr && zr(wr, r)) ||
      ((wr = r),
      (r = bi(ol, "onSelect")),
      0 < r.length &&
        ((t = new ha("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = kn))));
}
function wi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Cn = {
    animationend: wi("Animation", "AnimationEnd"),
    animationiteration: wi("Animation", "AnimationIteration"),
    animationstart: wi("Animation", "AnimationStart"),
    transitionend: wi("Transition", "TransitionEnd"),
  },
  fs = {},
  Wd = {};
mt &&
  ((Wd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Cn.animationend.animation,
    delete Cn.animationiteration.animation,
    delete Cn.animationstart.animation),
  "TransitionEvent" in window || delete Cn.transitionend.transition);
function Lo(e) {
  if (fs[e]) return fs[e];
  if (!Cn[e]) return e;
  var t = Cn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Wd) return (fs[e] = t[n]);
  return e;
}
var Qd = Lo("animationend"),
  Yd = Lo("animationiteration"),
  Gd = Lo("animationstart"),
  Xd = Lo("transitionend"),
  Kd = new Map(),
  Yu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Wt(e, t) {
  Kd.set(e, t), mn(t, [e]);
}
for (var ds = 0; ds < Yu.length; ds++) {
  var ps = Yu[ds],
    dy = ps.toLowerCase(),
    py = ps[0].toUpperCase() + ps.slice(1);
  Wt(dy, "on" + py);
}
Wt(Qd, "onAnimationEnd");
Wt(Yd, "onAnimationIteration");
Wt(Gd, "onAnimationStart");
Wt("dblclick", "onDoubleClick");
Wt("focusin", "onFocus");
Wt("focusout", "onBlur");
Wt(Xd, "onTransitionEnd");
Wn("onMouseEnter", ["mouseout", "mouseover"]);
Wn("onMouseLeave", ["mouseout", "mouseover"]);
Wn("onPointerEnter", ["pointerout", "pointerover"]);
Wn("onPointerLeave", ["pointerout", "pointerover"]);
mn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
mn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
mn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
mn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
mn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
mn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var mr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  hy = new Set("cancel close invalid load scroll toggle".split(" ").concat(mr));
function Gu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), dg(r, t, void 0, e), (e.currentTarget = null);
}
function Zd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== o && i.isPropagationStopped())) break e;
          Gu(i, l, u), (o = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== o && i.isPropagationStopped())
          )
            break e;
          Gu(i, l, u), (o = a);
        }
    }
  }
  if (Ki) throw ((e = tl), (Ki = !1), (tl = null), e);
}
function _(e, t) {
  var n = t[fl];
  n === void 0 && (n = t[fl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (qd(t, e, 2, !1), n.add(r));
}
function hs(e, t, n) {
  var r = 0;
  t && (r |= 4), qd(n, e, r, t);
}
var Si = "_reactListening" + Math.random().toString(36).slice(2);
function _r(e) {
  if (!e[Si]) {
    (e[Si] = !0),
      rd.forEach(function (n) {
        n !== "selectionchange" && (hy.has(n) || hs(n, !1, e), hs(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Si] || ((t[Si] = !0), hs("selectionchange", !1, t));
  }
}
function qd(e, t, n, r) {
  switch (Nd(t)) {
    case 1:
      var i = Mg;
      break;
    case 4:
      i = Dg;
      break;
    default:
      i = da;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !el ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function ms(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = tn(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = o = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Ad(function () {
    var u = o,
      c = aa(n),
      f = [];
    e: {
      var d = Kd.get(e);
      if (d !== void 0) {
        var g = ha,
          y = e;
        switch (e) {
          case "keypress":
            if (Fi(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Qg;
            break;
          case "focusin":
            (y = "focus"), (g = as);
            break;
          case "focusout":
            (y = "blur"), (g = as);
            break;
          case "beforeblur":
          case "afterblur":
            g = as;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = ju;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Rg;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Xg;
            break;
          case Qd:
          case Yd:
          case Gd:
            g = Og;
            break;
          case Xd:
            g = Zg;
            break;
          case "scroll":
            g = Vg;
            break;
          case "wheel":
            g = $g;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Fg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Bu;
        }
        var v = (t & 4) !== 0,
          w = !v && e === "scroll",
          h = v ? (d !== null ? d + "Capture" : null) : d;
        v = [];
        for (var p = u, m; p !== null; ) {
          m = p;
          var A = m.stateNode;
          if (
            (m.tag === 5 &&
              A !== null &&
              ((m = A),
              h !== null && ((A = jr(p, h)), A != null && v.push(Ur(p, A, m)))),
            w)
          )
            break;
          p = p.return;
        }
        0 < v.length &&
          ((d = new g(d, y, null, n, c)), f.push({ event: d, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          d &&
            n !== Js &&
            (y = n.relatedTarget || n.fromElement) &&
            (tn(y) || y[gt]))
        )
          break e;
        if (
          (g || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = u),
              (y = y ? tn(y) : null),
              y !== null &&
                ((w = gn(y)), y !== w || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((g = null), (y = u)),
          g !== y)
        ) {
          if (
            ((v = ju),
            (A = "onMouseLeave"),
            (h = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = Bu),
              (A = "onPointerLeave"),
              (h = "onPointerEnter"),
              (p = "pointer")),
            (w = g == null ? d : En(g)),
            (m = y == null ? d : En(y)),
            (d = new v(A, p + "leave", g, n, c)),
            (d.target = w),
            (d.relatedTarget = m),
            (A = null),
            tn(c) === u &&
              ((v = new v(h, p + "enter", y, n, c)),
              (v.target = m),
              (v.relatedTarget = w),
              (A = v)),
            (w = A),
            g && y)
          )
            t: {
              for (v = g, h = y, p = 0, m = v; m; m = xn(m)) p++;
              for (m = 0, A = h; A; A = xn(A)) m++;
              for (; 0 < p - m; ) (v = xn(v)), p--;
              for (; 0 < m - p; ) (h = xn(h)), m--;
              for (; p--; ) {
                if (v === h || (h !== null && v === h.alternate)) break t;
                (v = xn(v)), (h = xn(h));
              }
              v = null;
            }
          else v = null;
          g !== null && Xu(f, d, g, v, !1),
            y !== null && w !== null && Xu(f, w, y, v, !0);
        }
      }
      e: {
        if (
          ((d = u ? En(u) : window),
          (g = d.nodeName && d.nodeName.toLowerCase()),
          g === "select" || (g === "input" && d.type === "file"))
        )
          var x = iy;
        else if (zu(d))
          if (zd) x = ay;
          else {
            x = sy;
            var T = oy;
          }
        else
          (g = d.nodeName) &&
            g.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (x = ly);
        if (x && (x = x(e, u))) {
          Id(f, x, n, c);
          break e;
        }
        T && T(e, d, u),
          e === "focusout" &&
            (T = d._wrapperState) &&
            T.controlled &&
            d.type === "number" &&
            Xs(d, "number", d.value);
      }
      switch (((T = u ? En(u) : window), e)) {
        case "focusin":
          (zu(T) || T.contentEditable === "true") &&
            ((kn = T), (ol = u), (wr = null));
          break;
        case "focusout":
          wr = ol = kn = null;
          break;
        case "mousedown":
          sl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (sl = !1), Qu(f, n, c);
          break;
        case "selectionchange":
          if (fy) break;
        case "keydown":
        case "keyup":
          Qu(f, n, c);
      }
      var k;
      if (ga)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        Pn
          ? Bd(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (Od &&
          n.locale !== "ko" &&
          (Pn || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && Pn && (k = jd())
            : ((Mt = c),
              (pa = "value" in Mt ? Mt.value : Mt.textContent),
              (Pn = !0))),
        (T = bi(u, P)),
        0 < T.length &&
          ((P = new Ou(P, e, null, n, c)),
          f.push({ event: P, listeners: T }),
          k ? (P.data = k) : ((k = Fd(n)), k !== null && (P.data = k)))),
        (k = bg ? ey(e, n) : ty(e, n)) &&
          ((u = bi(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Ou("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = k)));
    }
    Zd(f, t);
  });
}
function Ur(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function bi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = jr(e, n)),
      o != null && r.unshift(Ur(e, o, i)),
      (o = jr(e, t)),
      o != null && r.push(Ur(e, o, i))),
      (e = e.return);
  }
  return r;
}
function xn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Xu(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((a = jr(n, o)), a != null && s.unshift(Ur(n, a, l)))
        : i || ((a = jr(n, o)), a != null && s.push(Ur(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var my = /\r\n?/g,
  gy = /\u0000|\uFFFD/g;
function Ku(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      my,
      `
`
    )
    .replace(gy, "");
}
function Pi(e, t, n) {
  if (((t = Ku(t)), Ku(e) !== t && n)) throw Error(S(425));
}
function eo() {}
var ll = null,
  al = null;
function ul(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var cl = typeof setTimeout == "function" ? setTimeout : void 0,
  yy = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Zu = typeof Promise == "function" ? Promise : void 0,
  vy =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Zu < "u"
      ? function (e) {
          return Zu.resolve(null).then(e).catch(Ay);
        }
      : cl;
function Ay(e) {
  setTimeout(function () {
    throw e;
  });
}
function gs(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Fr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Fr(t);
}
function Nt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function qu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var bn = Math.random().toString(36).slice(2),
  rt = "__reactFiber$" + bn,
  Hr = "__reactProps$" + bn,
  gt = "__reactContainer$" + bn,
  fl = "__reactEvents$" + bn,
  xy = "__reactListeners$" + bn,
  wy = "__reactHandles$" + bn;
function tn(e) {
  var t = e[rt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[gt] || n[rt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = qu(e); e !== null; ) {
          if ((n = e[rt])) return n;
          e = qu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function oi(e) {
  return (
    (e = e[rt] || e[gt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function En(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function Ro(e) {
  return e[Hr] || null;
}
var dl = [],
  Tn = -1;
function Qt(e) {
  return { current: e };
}
function U(e) {
  0 > Tn || ((e.current = dl[Tn]), (dl[Tn] = null), Tn--);
}
function z(e, t) {
  Tn++, (dl[Tn] = e.current), (e.current = t);
}
var Ut = {},
  he = Qt(Ut),
  Pe = Qt(!1),
  un = Ut;
function Qn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ut;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function ke(e) {
  return (e = e.childContextTypes), e != null;
}
function to() {
  U(Pe), U(he);
}
function $u(e, t, n) {
  if (he.current !== Ut) throw Error(S(168));
  z(he, t), z(Pe, n);
}
function $d(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(S(108, og(e) || "Unknown", i));
  return K({}, n, r);
}
function no(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ut),
    (un = he.current),
    z(he, e),
    z(Pe, Pe.current),
    !0
  );
}
function Ju(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  n
    ? ((e = $d(e, t, un)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      U(Pe),
      U(he),
      z(he, e))
    : U(Pe),
    z(Pe, n);
}
var at = null,
  No = !1,
  ys = !1;
function Jd(e) {
  at === null ? (at = [e]) : at.push(e);
}
function Sy(e) {
  (No = !0), Jd(e);
}
function Yt() {
  if (!ys && at !== null) {
    ys = !0;
    var e = 0,
      t = I;
    try {
      var n = at;
      for (I = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (at = null), (No = !1);
    } catch (i) {
      throw (at !== null && (at = at.slice(e + 1)), Pd(ua, Yt), i);
    } finally {
      (I = t), (ys = !1);
    }
  }
  return null;
}
var Mn = [],
  Dn = 0,
  ro = null,
  io = 0,
  Ie = [],
  ze = 0,
  cn = null,
  ut = 1,
  ct = "";
function $t(e, t) {
  (Mn[Dn++] = io), (Mn[Dn++] = ro), (ro = e), (io = t);
}
function bd(e, t, n) {
  (Ie[ze++] = ut), (Ie[ze++] = ct), (Ie[ze++] = cn), (cn = e);
  var r = ut;
  e = ct;
  var i = 32 - Ke(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Ke(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (ut = (1 << (32 - Ke(t) + i)) | (n << i) | r),
      (ct = o + e);
  } else (ut = (1 << o) | (n << i) | r), (ct = e);
}
function va(e) {
  e.return !== null && ($t(e, 1), bd(e, 1, 0));
}
function Aa(e) {
  for (; e === ro; )
    (ro = Mn[--Dn]), (Mn[Dn] = null), (io = Mn[--Dn]), (Mn[Dn] = null);
  for (; e === cn; )
    (cn = Ie[--ze]),
      (Ie[ze] = null),
      (ct = Ie[--ze]),
      (Ie[ze] = null),
      (ut = Ie[--ze]),
      (Ie[ze] = null);
}
var Ve = null,
  De = null,
  H = !1,
  Xe = null;
function ep(e, t) {
  var n = _e(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function bu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ve = e), (De = Nt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ve = e), (De = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = cn !== null ? { id: ut, overflow: ct } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = _e(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ve = e),
            (De = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function pl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function hl(e) {
  if (H) {
    var t = De;
    if (t) {
      var n = t;
      if (!bu(e, t)) {
        if (pl(e)) throw Error(S(418));
        t = Nt(n.nextSibling);
        var r = Ve;
        t && bu(e, t)
          ? ep(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (H = !1), (Ve = e));
      }
    } else {
      if (pl(e)) throw Error(S(418));
      (e.flags = (e.flags & -4097) | 2), (H = !1), (Ve = e);
    }
  }
}
function ec(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ve = e;
}
function ki(e) {
  if (e !== Ve) return !1;
  if (!H) return ec(e), (H = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ul(e.type, e.memoizedProps))),
    t && (t = De))
  ) {
    if (pl(e)) throw (tp(), Error(S(418)));
    for (; t; ) ep(e, t), (t = Nt(t.nextSibling));
  }
  if ((ec(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              De = Nt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      De = null;
    }
  } else De = Ve ? Nt(e.stateNode.nextSibling) : null;
  return !0;
}
function tp() {
  for (var e = De; e; ) e = Nt(e.nextSibling);
}
function Yn() {
  (De = Ve = null), (H = !1);
}
function xa(e) {
  Xe === null ? (Xe = [e]) : Xe.push(e);
}
var Py = xt.ReactCurrentBatchConfig;
function Ye(e, t) {
  if (e && e.defaultProps) {
    (t = K({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var oo = Qt(null),
  so = null,
  Vn = null,
  wa = null;
function Sa() {
  wa = Vn = so = null;
}
function Pa(e) {
  var t = oo.current;
  U(oo), (e._currentValue = t);
}
function ml(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function _n(e, t) {
  (so = e),
    (wa = Vn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Se = !0), (e.firstContext = null));
}
function He(e) {
  var t = e._currentValue;
  if (wa !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Vn === null)) {
      if (so === null) throw Error(S(308));
      (Vn = e), (so.dependencies = { lanes: 0, firstContext: e });
    } else Vn = Vn.next = e;
  return t;
}
var nn = null;
function ka(e) {
  nn === null ? (nn = [e]) : nn.push(e);
}
function np(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), ka(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    yt(e, r)
  );
}
function yt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var kt = !1;
function Ca(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function rp(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function dt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function jt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), F & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      yt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), ka(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    yt(e, n)
  );
}
function Ii(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ca(e, n);
  }
}
function tc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function lo(e, t, n, r) {
  var i = e.updateQueue;
  kt = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), s === null ? (o = u) : (s.next = u), (s = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== s &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var f = i.baseState;
    (s = 0), (c = u = a = null), (l = o);
    do {
      var d = l.lane,
        g = l.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var y = e,
            v = l;
          switch (((d = t), (g = n), v.tag)) {
            case 1:
              if (((y = v.payload), typeof y == "function")) {
                f = y.call(g, f, d);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = v.payload),
                (d = typeof y == "function" ? y.call(g, f, d) : y),
                d == null)
              )
                break e;
              f = K({}, f, d);
              break e;
            case 2:
              kt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [l]) : d.push(l));
      } else
        (g = {
          eventTime: g,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = g), (a = f)) : (c = c.next = g),
          (s |= d);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (d = l),
          (l = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (a = f),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (dn |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function nc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(S(191, i));
        i.call(r);
      }
    }
}
var ip = new nd.Component().refs;
function gl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : K({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var jo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? gn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ye(),
      i = Bt(e),
      o = dt(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = jt(e, o, i)),
      t !== null && (Ze(t, e, i, r), Ii(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ye(),
      i = Bt(e),
      o = dt(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = jt(e, o, i)),
      t !== null && (Ze(t, e, i, r), Ii(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ye(),
      r = Bt(e),
      i = dt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = jt(e, i, r)),
      t !== null && (Ze(t, e, r, n), Ii(t, e, r));
  },
};
function rc(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !zr(n, r) || !zr(i, o)
      : !0
  );
}
function op(e, t, n) {
  var r = !1,
    i = Ut,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = He(o))
      : ((i = ke(t) ? un : he.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Qn(e, i) : Ut)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = jo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function ic(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && jo.enqueueReplaceState(t, t.state, null);
}
function yl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = ip), Ca(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = He(o))
    : ((o = ke(t) ? un : he.current), (i.context = Qn(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (gl(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && jo.enqueueReplaceState(i, i.state, null),
      lo(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function or(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var l = i.refs;
            l === ip && (l = i.refs = {}),
              s === null ? delete l[o] : (l[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function Ci(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      S(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function oc(e) {
  var t = e._init;
  return t(e._payload);
}
function sp(e) {
  function t(h, p) {
    if (e) {
      var m = h.deletions;
      m === null ? ((h.deletions = [p]), (h.flags |= 16)) : m.push(p);
    }
  }
  function n(h, p) {
    if (!e) return null;
    for (; p !== null; ) t(h, p), (p = p.sibling);
    return null;
  }
  function r(h, p) {
    for (h = new Map(); p !== null; )
      p.key !== null ? h.set(p.key, p) : h.set(p.index, p), (p = p.sibling);
    return h;
  }
  function i(h, p) {
    return (h = Ft(h, p)), (h.index = 0), (h.sibling = null), h;
  }
  function o(h, p, m) {
    return (
      (h.index = m),
      e
        ? ((m = h.alternate),
          m !== null
            ? ((m = m.index), m < p ? ((h.flags |= 2), p) : m)
            : ((h.flags |= 2), p))
        : ((h.flags |= 1048576), p)
    );
  }
  function s(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function l(h, p, m, A) {
    return p === null || p.tag !== 6
      ? ((p = ks(m, h.mode, A)), (p.return = h), p)
      : ((p = i(p, m)), (p.return = h), p);
  }
  function a(h, p, m, A) {
    var x = m.type;
    return x === Sn
      ? c(h, p, m.props.children, A, m.key)
      : p !== null &&
        (p.elementType === x ||
          (typeof x == "object" &&
            x !== null &&
            x.$$typeof === Pt &&
            oc(x) === p.type))
      ? ((A = i(p, m.props)), (A.ref = or(h, p, m)), (A.return = h), A)
      : ((A = Qi(m.type, m.key, m.props, null, h.mode, A)),
        (A.ref = or(h, p, m)),
        (A.return = h),
        A);
  }
  function u(h, p, m, A) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== m.containerInfo ||
      p.stateNode.implementation !== m.implementation
      ? ((p = Cs(m, h.mode, A)), (p.return = h), p)
      : ((p = i(p, m.children || [])), (p.return = h), p);
  }
  function c(h, p, m, A, x) {
    return p === null || p.tag !== 7
      ? ((p = an(m, h.mode, A, x)), (p.return = h), p)
      : ((p = i(p, m)), (p.return = h), p);
  }
  function f(h, p, m) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = ks("" + p, h.mode, m)), (p.return = h), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case hi:
          return (
            (m = Qi(p.type, p.key, p.props, null, h.mode, m)),
            (m.ref = or(h, null, p)),
            (m.return = h),
            m
          );
        case wn:
          return (p = Cs(p, h.mode, m)), (p.return = h), p;
        case Pt:
          var A = p._init;
          return f(h, A(p._payload), m);
      }
      if (pr(p) || er(p))
        return (p = an(p, h.mode, m, null)), (p.return = h), p;
      Ci(h, p);
    }
    return null;
  }
  function d(h, p, m, A) {
    var x = p !== null ? p.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return x !== null ? null : l(h, p, "" + m, A);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case hi:
          return m.key === x ? a(h, p, m, A) : null;
        case wn:
          return m.key === x ? u(h, p, m, A) : null;
        case Pt:
          return (x = m._init), d(h, p, x(m._payload), A);
      }
      if (pr(m) || er(m)) return x !== null ? null : c(h, p, m, A, null);
      Ci(h, m);
    }
    return null;
  }
  function g(h, p, m, A, x) {
    if ((typeof A == "string" && A !== "") || typeof A == "number")
      return (h = h.get(m) || null), l(p, h, "" + A, x);
    if (typeof A == "object" && A !== null) {
      switch (A.$$typeof) {
        case hi:
          return (h = h.get(A.key === null ? m : A.key) || null), a(p, h, A, x);
        case wn:
          return (h = h.get(A.key === null ? m : A.key) || null), u(p, h, A, x);
        case Pt:
          var T = A._init;
          return g(h, p, m, T(A._payload), x);
      }
      if (pr(A) || er(A)) return (h = h.get(m) || null), c(p, h, A, x, null);
      Ci(p, A);
    }
    return null;
  }
  function y(h, p, m, A) {
    for (
      var x = null, T = null, k = p, P = (p = 0), j = null;
      k !== null && P < m.length;
      P++
    ) {
      k.index > P ? ((j = k), (k = null)) : (j = k.sibling);
      var L = d(h, k, m[P], A);
      if (L === null) {
        k === null && (k = j);
        break;
      }
      e && k && L.alternate === null && t(h, k),
        (p = o(L, p, P)),
        T === null ? (x = L) : (T.sibling = L),
        (T = L),
        (k = j);
    }
    if (P === m.length) return n(h, k), H && $t(h, P), x;
    if (k === null) {
      for (; P < m.length; P++)
        (k = f(h, m[P], A)),
          k !== null &&
            ((p = o(k, p, P)), T === null ? (x = k) : (T.sibling = k), (T = k));
      return H && $t(h, P), x;
    }
    for (k = r(h, k); P < m.length; P++)
      (j = g(k, h, P, m[P], A)),
        j !== null &&
          (e && j.alternate !== null && k.delete(j.key === null ? P : j.key),
          (p = o(j, p, P)),
          T === null ? (x = j) : (T.sibling = j),
          (T = j));
    return (
      e &&
        k.forEach(function (q) {
          return t(h, q);
        }),
      H && $t(h, P),
      x
    );
  }
  function v(h, p, m, A) {
    var x = er(m);
    if (typeof x != "function") throw Error(S(150));
    if (((m = x.call(m)), m == null)) throw Error(S(151));
    for (
      var T = (x = null), k = p, P = (p = 0), j = null, L = m.next();
      k !== null && !L.done;
      P++, L = m.next()
    ) {
      k.index > P ? ((j = k), (k = null)) : (j = k.sibling);
      var q = d(h, k, L.value, A);
      if (q === null) {
        k === null && (k = j);
        break;
      }
      e && k && q.alternate === null && t(h, k),
        (p = o(q, p, P)),
        T === null ? (x = q) : (T.sibling = q),
        (T = q),
        (k = j);
    }
    if (L.done) return n(h, k), H && $t(h, P), x;
    if (k === null) {
      for (; !L.done; P++, L = m.next())
        (L = f(h, L.value, A)),
          L !== null &&
            ((p = o(L, p, P)), T === null ? (x = L) : (T.sibling = L), (T = L));
      return H && $t(h, P), x;
    }
    for (k = r(h, k); !L.done; P++, L = m.next())
      (L = g(k, h, P, L.value, A)),
        L !== null &&
          (e && L.alternate !== null && k.delete(L.key === null ? P : L.key),
          (p = o(L, p, P)),
          T === null ? (x = L) : (T.sibling = L),
          (T = L));
    return (
      e &&
        k.forEach(function (xe) {
          return t(h, xe);
        }),
      H && $t(h, P),
      x
    );
  }
  function w(h, p, m, A) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === Sn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case hi:
          e: {
            for (var x = m.key, T = p; T !== null; ) {
              if (T.key === x) {
                if (((x = m.type), x === Sn)) {
                  if (T.tag === 7) {
                    n(h, T.sibling),
                      (p = i(T, m.props.children)),
                      (p.return = h),
                      (h = p);
                    break e;
                  }
                } else if (
                  T.elementType === x ||
                  (typeof x == "object" &&
                    x !== null &&
                    x.$$typeof === Pt &&
                    oc(x) === T.type)
                ) {
                  n(h, T.sibling),
                    (p = i(T, m.props)),
                    (p.ref = or(h, T, m)),
                    (p.return = h),
                    (h = p);
                  break e;
                }
                n(h, T);
                break;
              } else t(h, T);
              T = T.sibling;
            }
            m.type === Sn
              ? ((p = an(m.props.children, h.mode, A, m.key)),
                (p.return = h),
                (h = p))
              : ((A = Qi(m.type, m.key, m.props, null, h.mode, A)),
                (A.ref = or(h, p, m)),
                (A.return = h),
                (h = A));
          }
          return s(h);
        case wn:
          e: {
            for (T = m.key; p !== null; ) {
              if (p.key === T)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === m.containerInfo &&
                  p.stateNode.implementation === m.implementation
                ) {
                  n(h, p.sibling),
                    (p = i(p, m.children || [])),
                    (p.return = h),
                    (h = p);
                  break e;
                } else {
                  n(h, p);
                  break;
                }
              else t(h, p);
              p = p.sibling;
            }
            (p = Cs(m, h.mode, A)), (p.return = h), (h = p);
          }
          return s(h);
        case Pt:
          return (T = m._init), w(h, p, T(m._payload), A);
      }
      if (pr(m)) return y(h, p, m, A);
      if (er(m)) return v(h, p, m, A);
      Ci(h, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        p !== null && p.tag === 6
          ? (n(h, p.sibling), (p = i(p, m)), (p.return = h), (h = p))
          : (n(h, p), (p = ks(m, h.mode, A)), (p.return = h), (h = p)),
        s(h))
      : n(h, p);
  }
  return w;
}
var Gn = sp(!0),
  lp = sp(!1),
  si = {},
  ot = Qt(si),
  Wr = Qt(si),
  Qr = Qt(si);
function rn(e) {
  if (e === si) throw Error(S(174));
  return e;
}
function Ea(e, t) {
  switch ((z(Qr, t), z(Wr, e), z(ot, si), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Zs(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Zs(t, e));
  }
  U(ot), z(ot, t);
}
function Xn() {
  U(ot), U(Wr), U(Qr);
}
function ap(e) {
  rn(Qr.current);
  var t = rn(ot.current),
    n = Zs(t, e.type);
  t !== n && (z(Wr, e), z(ot, n));
}
function Ta(e) {
  Wr.current === e && (U(ot), U(Wr));
}
var Q = Qt(0);
function ao(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var vs = [];
function Ma() {
  for (var e = 0; e < vs.length; e++)
    vs[e]._workInProgressVersionPrimary = null;
  vs.length = 0;
}
var zi = xt.ReactCurrentDispatcher,
  As = xt.ReactCurrentBatchConfig,
  fn = 0,
  X = null,
  ne = null,
  oe = null,
  uo = !1,
  Sr = !1,
  Yr = 0,
  ky = 0;
function fe() {
  throw Error(S(321));
}
function Da(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!$e(e[n], t[n])) return !1;
  return !0;
}
function Va(e, t, n, r, i, o) {
  if (
    ((fn = o),
    (X = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (zi.current = e === null || e.memoizedState === null ? My : Dy),
    (e = n(r, i)),
    Sr)
  ) {
    o = 0;
    do {
      if (((Sr = !1), (Yr = 0), 25 <= o)) throw Error(S(301));
      (o += 1),
        (oe = ne = null),
        (t.updateQueue = null),
        (zi.current = Vy),
        (e = n(r, i));
    } while (Sr);
  }
  if (
    ((zi.current = co),
    (t = ne !== null && ne.next !== null),
    (fn = 0),
    (oe = ne = X = null),
    (uo = !1),
    t)
  )
    throw Error(S(300));
  return e;
}
function La() {
  var e = Yr !== 0;
  return (Yr = 0), e;
}
function tt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return oe === null ? (X.memoizedState = oe = e) : (oe = oe.next = e), oe;
}
function We() {
  if (ne === null) {
    var e = X.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ne.next;
  var t = oe === null ? X.memoizedState : oe.next;
  if (t !== null) (oe = t), (ne = e);
  else {
    if (e === null) throw Error(S(310));
    (ne = e),
      (e = {
        memoizedState: ne.memoizedState,
        baseState: ne.baseState,
        baseQueue: ne.baseQueue,
        queue: ne.queue,
        next: null,
      }),
      oe === null ? (X.memoizedState = oe = e) : (oe = oe.next = e);
  }
  return oe;
}
function Gr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function xs(e) {
  var t = We(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = ne,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var l = (s = null),
      a = null,
      u = o;
    do {
      var c = u.lane;
      if ((fn & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = f), (s = r)) : (a = a.next = f),
          (X.lanes |= c),
          (dn |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    a === null ? (s = r) : (a.next = l),
      $e(r, t.memoizedState) || (Se = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (X.lanes |= o), (dn |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ws(e) {
  var t = We(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    $e(o, t.memoizedState) || (Se = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function up() {}
function cp(e, t) {
  var n = X,
    r = We(),
    i = t(),
    o = !$e(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Se = !0)),
    (r = r.queue),
    Ra(pp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (oe !== null && oe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Xr(9, dp.bind(null, n, r, i, t), void 0, null),
      le === null)
    )
      throw Error(S(349));
    fn & 30 || fp(n, t, i);
  }
  return i;
}
function fp(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = X.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (X.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function dp(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), hp(t) && mp(e);
}
function pp(e, t, n) {
  return n(function () {
    hp(t) && mp(e);
  });
}
function hp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !$e(e, n);
  } catch {
    return !0;
  }
}
function mp(e) {
  var t = yt(e, 1);
  t !== null && Ze(t, e, 1, -1);
}
function sc(e) {
  var t = tt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Gr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Ty.bind(null, X, e)),
    [t.memoizedState, e]
  );
}
function Xr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = X.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (X.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function gp() {
  return We().memoizedState;
}
function _i(e, t, n, r) {
  var i = tt();
  (X.flags |= e),
    (i.memoizedState = Xr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Oo(e, t, n, r) {
  var i = We();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ne !== null) {
    var s = ne.memoizedState;
    if (((o = s.destroy), r !== null && Da(r, s.deps))) {
      i.memoizedState = Xr(t, n, o, r);
      return;
    }
  }
  (X.flags |= e), (i.memoizedState = Xr(1 | t, n, o, r));
}
function lc(e, t) {
  return _i(8390656, 8, e, t);
}
function Ra(e, t) {
  return Oo(2048, 8, e, t);
}
function yp(e, t) {
  return Oo(4, 2, e, t);
}
function vp(e, t) {
  return Oo(4, 4, e, t);
}
function Ap(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function xp(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Oo(4, 4, Ap.bind(null, t, e), n)
  );
}
function Na() {}
function wp(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Da(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Sp(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Da(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Pp(e, t, n) {
  return fn & 21
    ? ($e(n, t) || ((n = Ed()), (X.lanes |= n), (dn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Se = !0)), (e.memoizedState = n));
}
function Cy(e, t) {
  var n = I;
  (I = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = As.transition;
  As.transition = {};
  try {
    e(!1), t();
  } finally {
    (I = n), (As.transition = r);
  }
}
function kp() {
  return We().memoizedState;
}
function Ey(e, t, n) {
  var r = Bt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Cp(e))
  )
    Ep(t, n);
  else if (((n = np(e, t, n, r)), n !== null)) {
    var i = ye();
    Ze(n, e, r, i), Tp(n, t, r);
  }
}
function Ty(e, t, n) {
  var r = Bt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Cp(e)) Ep(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), $e(l, s))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), ka(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = np(e, t, i, r)),
      n !== null && ((i = ye()), Ze(n, e, r, i), Tp(n, t, r));
  }
}
function Cp(e) {
  var t = e.alternate;
  return e === X || (t !== null && t === X);
}
function Ep(e, t) {
  Sr = uo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Tp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ca(e, n);
  }
}
var co = {
    readContext: He,
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
    unstable_isNewReconciler: !1,
  },
  My = {
    readContext: He,
    useCallback: function (e, t) {
      return (tt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: He,
    useEffect: lc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        _i(4194308, 4, Ap.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return _i(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return _i(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = tt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = tt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Ey.bind(null, X, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = tt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: sc,
    useDebugValue: Na,
    useDeferredValue: function (e) {
      return (tt().memoizedState = e);
    },
    useTransition: function () {
      var e = sc(!1),
        t = e[0];
      return (e = Cy.bind(null, e[1])), (tt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = X,
        i = tt();
      if (H) {
        if (n === void 0) throw Error(S(407));
        n = n();
      } else {
        if (((n = t()), le === null)) throw Error(S(349));
        fn & 30 || fp(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        lc(pp.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Xr(9, dp.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = tt(),
        t = le.identifierPrefix;
      if (H) {
        var n = ct,
          r = ut;
        (n = (r & ~(1 << (32 - Ke(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Yr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = ky++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Dy = {
    readContext: He,
    useCallback: wp,
    useContext: He,
    useEffect: Ra,
    useImperativeHandle: xp,
    useInsertionEffect: yp,
    useLayoutEffect: vp,
    useMemo: Sp,
    useReducer: xs,
    useRef: gp,
    useState: function () {
      return xs(Gr);
    },
    useDebugValue: Na,
    useDeferredValue: function (e) {
      var t = We();
      return Pp(t, ne.memoizedState, e);
    },
    useTransition: function () {
      var e = xs(Gr)[0],
        t = We().memoizedState;
      return [e, t];
    },
    useMutableSource: up,
    useSyncExternalStore: cp,
    useId: kp,
    unstable_isNewReconciler: !1,
  },
  Vy = {
    readContext: He,
    useCallback: wp,
    useContext: He,
    useEffect: Ra,
    useImperativeHandle: xp,
    useInsertionEffect: yp,
    useLayoutEffect: vp,
    useMemo: Sp,
    useReducer: ws,
    useRef: gp,
    useState: function () {
      return ws(Gr);
    },
    useDebugValue: Na,
    useDeferredValue: function (e) {
      var t = We();
      return ne === null ? (t.memoizedState = e) : Pp(t, ne.memoizedState, e);
    },
    useTransition: function () {
      var e = ws(Gr)[0],
        t = We().memoizedState;
      return [e, t];
    },
    useMutableSource: up,
    useSyncExternalStore: cp,
    useId: kp,
    unstable_isNewReconciler: !1,
  };
function Kn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += ig(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Ss(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function vl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Ly = typeof WeakMap == "function" ? WeakMap : Map;
function Mp(e, t, n) {
  (n = dt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      po || ((po = !0), (Ml = r)), vl(e, t);
    }),
    n
  );
}
function Dp(e, t, n) {
  (n = dt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        vl(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        vl(e, t),
          typeof r != "function" &&
            (Ot === null ? (Ot = new Set([this])) : Ot.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function ac(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Ly();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Yy.bind(null, e, t, n)), t.then(e, e));
}
function uc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function cc(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = dt(-1, 1)), (t.tag = 2), jt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Ry = xt.ReactCurrentOwner,
  Se = !1;
function ge(e, t, n, r) {
  t.child = e === null ? lp(t, null, n, r) : Gn(t, e.child, n, r);
}
function fc(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    _n(t, i),
    (r = Va(e, t, n, r, o, i)),
    (n = La()),
    e !== null && !Se
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        vt(e, t, i))
      : (H && n && va(t), (t.flags |= 1), ge(e, t, r, i), t.child)
  );
}
function dc(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Ua(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Vp(e, t, o, r, i))
      : ((e = Qi(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : zr), n(s, r) && e.ref === t.ref)
    )
      return vt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Ft(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Vp(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (zr(o, r) && e.ref === t.ref)
      if (((Se = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Se = !0);
      else return (t.lanes = e.lanes), vt(e, t, i);
  }
  return Al(e, t, n, r, i);
}
function Lp(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        z(Rn, Me),
        (Me |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          z(Rn, Me),
          (Me |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        z(Rn, Me),
        (Me |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      z(Rn, Me),
      (Me |= r);
  return ge(e, t, i, n), t.child;
}
function Rp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Al(e, t, n, r, i) {
  var o = ke(n) ? un : he.current;
  return (
    (o = Qn(t, o)),
    _n(t, i),
    (n = Va(e, t, n, r, o, i)),
    (r = La()),
    e !== null && !Se
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        vt(e, t, i))
      : (H && r && va(t), (t.flags |= 1), ge(e, t, n, i), t.child)
  );
}
function pc(e, t, n, r, i) {
  if (ke(n)) {
    var o = !0;
    no(t);
  } else o = !1;
  if ((_n(t, i), t.stateNode === null))
    Ui(e, t), op(t, n, r), yl(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = He(u))
      : ((u = ke(n) ? un : he.current), (u = Qn(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && ic(t, s, r, u)),
      (kt = !1);
    var d = t.memoizedState;
    (s.state = d),
      lo(t, r, s, i),
      (a = t.memoizedState),
      l !== r || d !== a || Pe.current || kt
        ? (typeof c == "function" && (gl(t, n, c, r), (a = t.memoizedState)),
          (l = kt || rc(t, n, l, r, d, a, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      rp(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Ye(t.type, l)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = He(a))
        : ((a = ke(n) ? un : he.current), (a = Qn(t, a)));
    var g = n.getDerivedStateFromProps;
    (c =
      typeof g == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== f || d !== a) && ic(t, s, r, a)),
      (kt = !1),
      (d = t.memoizedState),
      (s.state = d),
      lo(t, r, s, i);
    var y = t.memoizedState;
    l !== f || d !== y || Pe.current || kt
      ? (typeof g == "function" && (gl(t, n, g, r), (y = t.memoizedState)),
        (u = kt || rc(t, n, u, r, d, y, a) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, y, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, y, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (s.props = r),
        (s.state = y),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return xl(e, t, n, r, o, i);
}
function xl(e, t, n, r, i, o) {
  Rp(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && Ju(t, n, !1), vt(e, t, o);
  (r = t.stateNode), (Ry.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Gn(t, e.child, null, o)), (t.child = Gn(t, null, l, o)))
      : ge(e, t, l, o),
    (t.memoizedState = r.state),
    i && Ju(t, n, !0),
    t.child
  );
}
function Np(e) {
  var t = e.stateNode;
  t.pendingContext
    ? $u(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && $u(e, t.context, !1),
    Ea(e, t.containerInfo);
}
function hc(e, t, n, r, i) {
  return Yn(), xa(i), (t.flags |= 256), ge(e, t, n, r), t.child;
}
var wl = { dehydrated: null, treeContext: null, retryLane: 0 };
function Sl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function jp(e, t, n) {
  var r = t.pendingProps,
    i = Q.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    z(Q, i & 1),
    e === null)
  )
    return (
      hl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = Io(s, r, 0, null)),
              (e = an(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Sl(n)),
              (t.memoizedState = wl),
              e)
            : ja(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return Ny(e, t, s, r, l, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (l = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Ft(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = Ft(l, o)) : ((o = an(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Sl(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = wl),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Ft(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ja(e, t) {
  return (
    (t = Io({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ei(e, t, n, r) {
  return (
    r !== null && xa(r),
    Gn(t, e.child, null, n),
    (e = ja(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Ny(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ss(Error(S(422)))), Ei(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Io({ mode: "visible", children: r.children }, i, 0, null)),
        (o = an(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Gn(t, e.child, null, s),
        (t.child.memoizedState = Sl(s)),
        (t.memoizedState = wl),
        o);
  if (!(t.mode & 1)) return Ei(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (o = Error(S(419))), (r = Ss(o, r, void 0)), Ei(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), Se || l)) {
    if (((r = le), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), yt(e, i), Ze(r, e, i, -1));
    }
    return _a(), (r = Ss(Error(S(421)))), Ei(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Gy.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (De = Nt(i.nextSibling)),
      (Ve = t),
      (H = !0),
      (Xe = null),
      e !== null &&
        ((Ie[ze++] = ut),
        (Ie[ze++] = ct),
        (Ie[ze++] = cn),
        (ut = e.id),
        (ct = e.overflow),
        (cn = t)),
      (t = ja(t, r.children)),
      (t.flags |= 4096),
      t);
}
function mc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ml(e.return, t, n);
}
function Ps(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Op(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((ge(e, t, r.children, n), (r = Q.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && mc(e, n, t);
        else if (e.tag === 19) mc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((z(Q, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && ao(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Ps(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && ao(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Ps(t, !0, n, null, o);
        break;
      case "together":
        Ps(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ui(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function vt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (dn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Ft(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Ft(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function jy(e, t, n) {
  switch (t.tag) {
    case 3:
      Np(t), Yn();
      break;
    case 5:
      ap(t);
      break;
    case 1:
      ke(t.type) && no(t);
      break;
    case 4:
      Ea(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      z(oo, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (z(Q, Q.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? jp(e, t, n)
          : (z(Q, Q.current & 1),
            (e = vt(e, t, n)),
            e !== null ? e.sibling : null);
      z(Q, Q.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Op(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        z(Q, Q.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Lp(e, t, n);
  }
  return vt(e, t, n);
}
var Bp, Pl, Fp, Ip;
Bp = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Pl = function () {};
Fp = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), rn(ot.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Ys(e, i)), (r = Ys(e, r)), (o = []);
        break;
      case "select":
        (i = K({}, i, { value: void 0 })),
          (r = K({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Ks(e, i)), (r = Ks(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = eo);
    }
    qs(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Rr.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (o || (o = []), o.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (o = o || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (o = o || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Rr.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && _("scroll", e),
                  o || l === a || (o = []))
                : (o = o || []).push(u, a));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Ip = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function sr(e, t) {
  if (!H)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function de(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Oy(e, t, n) {
  var r = t.pendingProps;
  switch ((Aa(t), t.tag)) {
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
      return de(t), null;
    case 1:
      return ke(t.type) && to(), de(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Xn(),
        U(Pe),
        U(he),
        Ma(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ki(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Xe !== null && (Ll(Xe), (Xe = null)))),
        Pl(e, t),
        de(t),
        null
      );
    case 5:
      Ta(t);
      var i = rn(Qr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Fp(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return de(t), null;
        }
        if (((e = rn(ot.current)), ki(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[rt] = t), (r[Hr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              _("cancel", r), _("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              _("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < mr.length; i++) _(mr[i], r);
              break;
            case "source":
              _("error", r);
              break;
            case "img":
            case "image":
            case "link":
              _("error", r), _("load", r);
              break;
            case "details":
              _("toggle", r);
              break;
            case "input":
              ku(r, o), _("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                _("invalid", r);
              break;
            case "textarea":
              Eu(r, o), _("invalid", r);
          }
          qs(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var l = o[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      Pi(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      Pi(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : Rr.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  _("scroll", r);
            }
          switch (n) {
            case "input":
              mi(r), Cu(r, o, !0);
              break;
            case "textarea":
              mi(r), Tu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = eo);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = fd(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[rt] = t),
            (e[Hr] = r),
            Bp(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = $s(n, r)), n)) {
              case "dialog":
                _("cancel", e), _("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                _("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < mr.length; i++) _(mr[i], e);
                i = r;
                break;
              case "source":
                _("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                _("error", e), _("load", e), (i = r);
                break;
              case "details":
                _("toggle", e), (i = r);
                break;
              case "input":
                ku(e, r), (i = Ys(e, r)), _("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = K({}, r, { value: void 0 })),
                  _("invalid", e);
                break;
              case "textarea":
                Eu(e, r), (i = Ks(e, r)), _("invalid", e);
                break;
              default:
                i = r;
            }
            qs(n, i), (l = i);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var a = l[o];
                o === "style"
                  ? hd(e, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && dd(e, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Nr(e, a)
                    : typeof a == "number" && Nr(e, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Rr.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && _("scroll", e)
                      : a != null && ia(e, o, a, s));
              }
            switch (n) {
              case "input":
                mi(e), Cu(e, r, !1);
                break;
              case "textarea":
                mi(e), Tu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + _t(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Bn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Bn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = eo);
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
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return de(t), null;
    case 6:
      if (e && t.stateNode != null) Ip(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (((n = rn(Qr.current)), rn(ot.current), ki(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[rt] = t),
            (o = r.nodeValue !== n) && ((e = Ve), e !== null))
          )
            switch (e.tag) {
              case 3:
                Pi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Pi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[rt] = t),
            (t.stateNode = r);
      }
      return de(t), null;
    case 13:
      if (
        (U(Q),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (H && De !== null && t.mode & 1 && !(t.flags & 128))
          tp(), Yn(), (t.flags |= 98560), (o = !1);
        else if (((o = ki(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(S(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(S(317));
            o[rt] = t;
          } else
            Yn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          de(t), (o = !1);
        } else Xe !== null && (Ll(Xe), (Xe = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Q.current & 1 ? ie === 0 && (ie = 3) : _a())),
          t.updateQueue !== null && (t.flags |= 4),
          de(t),
          null);
    case 4:
      return (
        Xn(), Pl(e, t), e === null && _r(t.stateNode.containerInfo), de(t), null
      );
    case 10:
      return Pa(t.type._context), de(t), null;
    case 17:
      return ke(t.type) && to(), de(t), null;
    case 19:
      if ((U(Q), (o = t.memoizedState), o === null)) return de(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) sr(o, !1);
        else {
          if (ie !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = ao(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    sr(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return z(Q, (Q.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            b() > Zn &&
            ((t.flags |= 128), (r = !0), sr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ao(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              sr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !H)
            )
              return de(t), null;
          } else
            2 * b() - o.renderingStartTime > Zn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), sr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = b()),
          (t.sibling = null),
          (n = Q.current),
          z(Q, r ? (n & 1) | 2 : n & 1),
          t)
        : (de(t), null);
    case 22:
    case 23:
      return (
        za(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Me & 1073741824 && (de(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : de(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function By(e, t) {
  switch ((Aa(t), t.tag)) {
    case 1:
      return (
        ke(t.type) && to(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Xn(),
        U(Pe),
        U(he),
        Ma(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ta(t), null;
    case 13:
      if ((U(Q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(S(340));
        Yn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return U(Q), null;
    case 4:
      return Xn(), null;
    case 10:
      return Pa(t.type._context), null;
    case 22:
    case 23:
      return za(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ti = !1,
  pe = !1,
  Fy = typeof WeakSet == "function" ? WeakSet : Set,
  D = null;
function Ln(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Z(e, t, r);
      }
    else n.current = null;
}
function kl(e, t, n) {
  try {
    n();
  } catch (r) {
    Z(e, t, r);
  }
}
var gc = !1;
function Iy(e, t) {
  if (((ll = $i), (e = Hd()), ya(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var g;
              f !== n || (i !== 0 && f.nodeType !== 3) || (l = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (a = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (g = f.firstChild) !== null;

            )
              (d = f), (f = g);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === i && (l = s),
                d === o && ++c === r && (a = s),
                (g = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = g;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (al = { focusedElem: e, selectionRange: n }, $i = !1, D = t; D !== null; )
    if (((t = D), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (D = e);
    else
      for (; D !== null; ) {
        t = D;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var v = y.memoizedProps,
                    w = y.memoizedState,
                    h = t.stateNode,
                    p = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : Ye(t.type, v),
                      w
                    );
                  h.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(S(163));
            }
        } catch (A) {
          Z(t, t.return, A);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (D = e);
          break;
        }
        D = t.return;
      }
  return (y = gc), (gc = !1), y;
}
function Pr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && kl(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Bo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Cl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function zp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), zp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[rt], delete t[Hr], delete t[fl], delete t[xy], delete t[wy])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function _p(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function yc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || _p(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function El(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = eo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (El(e, t, n), e = e.sibling; e !== null; ) El(e, t, n), (e = e.sibling);
}
function Tl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Tl(e, t, n), e = e.sibling; e !== null; ) Tl(e, t, n), (e = e.sibling);
}
var ae = null,
  Ge = !1;
function wt(e, t, n) {
  for (n = n.child; n !== null; ) Up(e, t, n), (n = n.sibling);
}
function Up(e, t, n) {
  if (it && typeof it.onCommitFiberUnmount == "function")
    try {
      it.onCommitFiberUnmount(Mo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      pe || Ln(n, t);
    case 6:
      var r = ae,
        i = Ge;
      (ae = null),
        wt(e, t, n),
        (ae = r),
        (Ge = i),
        ae !== null &&
          (Ge
            ? ((e = ae),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ae.removeChild(n.stateNode));
      break;
    case 18:
      ae !== null &&
        (Ge
          ? ((e = ae),
            (n = n.stateNode),
            e.nodeType === 8
              ? gs(e.parentNode, n)
              : e.nodeType === 1 && gs(e, n),
            Fr(e))
          : gs(ae, n.stateNode));
      break;
    case 4:
      (r = ae),
        (i = Ge),
        (ae = n.stateNode.containerInfo),
        (Ge = !0),
        wt(e, t, n),
        (ae = r),
        (Ge = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !pe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && kl(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      wt(e, t, n);
      break;
    case 1:
      if (
        !pe &&
        (Ln(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Z(n, t, l);
        }
      wt(e, t, n);
      break;
    case 21:
      wt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((pe = (r = pe) || n.memoizedState !== null), wt(e, t, n), (pe = r))
        : wt(e, t, n);
      break;
    default:
      wt(e, t, n);
  }
}
function vc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Fy()),
      t.forEach(function (r) {
        var i = Xy.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Qe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (ae = l.stateNode), (Ge = !1);
              break e;
            case 3:
              (ae = l.stateNode.containerInfo), (Ge = !0);
              break e;
            case 4:
              (ae = l.stateNode.containerInfo), (Ge = !0);
              break e;
          }
          l = l.return;
        }
        if (ae === null) throw Error(S(160));
        Up(o, s, i), (ae = null), (Ge = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        Z(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Hp(t, e), (t = t.sibling);
}
function Hp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Qe(t, e), et(e), r & 4)) {
        try {
          Pr(3, e, e.return), Bo(3, e);
        } catch (v) {
          Z(e, e.return, v);
        }
        try {
          Pr(5, e, e.return);
        } catch (v) {
          Z(e, e.return, v);
        }
      }
      break;
    case 1:
      Qe(t, e), et(e), r & 512 && n !== null && Ln(n, n.return);
      break;
    case 5:
      if (
        (Qe(t, e),
        et(e),
        r & 512 && n !== null && Ln(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Nr(i, "");
        } catch (v) {
          Z(e, e.return, v);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && o.type === "radio" && o.name != null && ud(i, o),
              $s(l, s);
            var u = $s(l, o);
            for (s = 0; s < a.length; s += 2) {
              var c = a[s],
                f = a[s + 1];
              c === "style"
                ? hd(i, f)
                : c === "dangerouslySetInnerHTML"
                ? dd(i, f)
                : c === "children"
                ? Nr(i, f)
                : ia(i, c, f, u);
            }
            switch (l) {
              case "input":
                Gs(i, o);
                break;
              case "textarea":
                cd(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? Bn(i, !!o.multiple, g, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Bn(i, !!o.multiple, o.defaultValue, !0)
                      : Bn(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Hr] = o;
          } catch (v) {
            Z(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Qe(t, e), et(e), r & 4)) {
        if (e.stateNode === null) throw Error(S(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (v) {
          Z(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Qe(t, e), et(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Fr(t.containerInfo);
        } catch (v) {
          Z(e, e.return, v);
        }
      break;
    case 4:
      Qe(t, e), et(e);
      break;
    case 13:
      Qe(t, e),
        et(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Fa = b())),
        r & 4 && vc(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((pe = (u = pe) || c), Qe(t, e), (pe = u)) : Qe(t, e),
        et(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (D = e, c = e.child; c !== null; ) {
            for (f = D = c; D !== null; ) {
              switch (((d = D), (g = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Pr(4, d, d.return);
                  break;
                case 1:
                  Ln(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (v) {
                      Z(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Ln(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    xc(f);
                    continue;
                  }
              }
              g !== null ? ((g.return = d), (D = g)) : xc(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((l = f.stateNode),
                      (a = f.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = pd("display", s)));
              } catch (v) {
                Z(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (v) {
                Z(e, e.return, v);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Qe(t, e), et(e), r & 4 && vc(e);
      break;
    case 21:
      break;
    default:
      Qe(t, e), et(e);
  }
}
function et(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (_p(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Nr(i, ""), (r.flags &= -33));
          var o = yc(e);
          Tl(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = yc(e);
          El(e, l, s);
          break;
        default:
          throw Error(S(161));
      }
    } catch (a) {
      Z(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function zy(e, t, n) {
  (D = e), Wp(e);
}
function Wp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; D !== null; ) {
    var i = D,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Ti;
      if (!s) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || pe;
        l = Ti;
        var u = pe;
        if (((Ti = s), (pe = a) && !u))
          for (D = i; D !== null; )
            (s = D),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? wc(i)
                : a !== null
                ? ((a.return = s), (D = a))
                : wc(i);
        for (; o !== null; ) (D = o), Wp(o), (o = o.sibling);
        (D = i), (Ti = l), (pe = u);
      }
      Ac(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (D = o)) : Ac(e);
  }
}
function Ac(e) {
  for (; D !== null; ) {
    var t = D;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              pe || Bo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !pe)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ye(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && nc(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                nc(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
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
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Fr(f);
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
              throw Error(S(163));
          }
        pe || (t.flags & 512 && Cl(t));
      } catch (d) {
        Z(t, t.return, d);
      }
    }
    if (t === e) {
      D = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (D = n);
      break;
    }
    D = t.return;
  }
}
function xc(e) {
  for (; D !== null; ) {
    var t = D;
    if (t === e) {
      D = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (D = n);
      break;
    }
    D = t.return;
  }
}
function wc(e) {
  for (; D !== null; ) {
    var t = D;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Bo(4, t);
          } catch (a) {
            Z(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Z(t, i, a);
            }
          }
          var o = t.return;
          try {
            Cl(t);
          } catch (a) {
            Z(t, o, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Cl(t);
          } catch (a) {
            Z(t, s, a);
          }
      }
    } catch (a) {
      Z(t, t.return, a);
    }
    if (t === e) {
      D = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (D = l);
      break;
    }
    D = t.return;
  }
}
var _y = Math.ceil,
  fo = xt.ReactCurrentDispatcher,
  Oa = xt.ReactCurrentOwner,
  Ue = xt.ReactCurrentBatchConfig,
  F = 0,
  le = null,
  te = null,
  ue = 0,
  Me = 0,
  Rn = Qt(0),
  ie = 0,
  Kr = null,
  dn = 0,
  Fo = 0,
  Ba = 0,
  kr = null,
  we = null,
  Fa = 0,
  Zn = 1 / 0,
  lt = null,
  po = !1,
  Ml = null,
  Ot = null,
  Mi = !1,
  Dt = null,
  ho = 0,
  Cr = 0,
  Dl = null,
  Hi = -1,
  Wi = 0;
function ye() {
  return F & 6 ? b() : Hi !== -1 ? Hi : (Hi = b());
}
function Bt(e) {
  return e.mode & 1
    ? F & 2 && ue !== 0
      ? ue & -ue
      : Py.transition !== null
      ? (Wi === 0 && (Wi = Ed()), Wi)
      : ((e = I),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Nd(e.type))),
        e)
    : 1;
}
function Ze(e, t, n, r) {
  if (50 < Cr) throw ((Cr = 0), (Dl = null), Error(S(185)));
  ri(e, n, r),
    (!(F & 2) || e !== le) &&
      (e === le && (!(F & 2) && (Fo |= n), ie === 4 && Tt(e, ue)),
      Ce(e, r),
      n === 1 && F === 0 && !(t.mode & 1) && ((Zn = b() + 500), No && Yt()));
}
function Ce(e, t) {
  var n = e.callbackNode;
  Pg(e, t);
  var r = qi(e, e === le ? ue : 0);
  if (r === 0)
    n !== null && Vu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Vu(n), t === 1))
      e.tag === 0 ? Sy(Sc.bind(null, e)) : Jd(Sc.bind(null, e)),
        vy(function () {
          !(F & 6) && Yt();
        }),
        (n = null);
    else {
      switch (Td(r)) {
        case 1:
          n = ua;
          break;
        case 4:
          n = kd;
          break;
        case 16:
          n = Zi;
          break;
        case 536870912:
          n = Cd;
          break;
        default:
          n = Zi;
      }
      n = $p(n, Qp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Qp(e, t) {
  if (((Hi = -1), (Wi = 0), F & 6)) throw Error(S(327));
  var n = e.callbackNode;
  if (Un() && e.callbackNode !== n) return null;
  var r = qi(e, e === le ? ue : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = mo(e, r);
  else {
    t = r;
    var i = F;
    F |= 2;
    var o = Gp();
    (le !== e || ue !== t) && ((lt = null), (Zn = b() + 500), ln(e, t));
    do
      try {
        Wy();
        break;
      } catch (l) {
        Yp(e, l);
      }
    while (1);
    Sa(),
      (fo.current = o),
      (F = i),
      te !== null ? (t = 0) : ((le = null), (ue = 0), (t = ie));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = nl(e)), i !== 0 && ((r = i), (t = Vl(e, i)))), t === 1)
    )
      throw ((n = Kr), ln(e, 0), Tt(e, r), Ce(e, b()), n);
    if (t === 6) Tt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Uy(i) &&
          ((t = mo(e, r)),
          t === 2 && ((o = nl(e)), o !== 0 && ((r = o), (t = Vl(e, o)))),
          t === 1))
      )
        throw ((n = Kr), ln(e, 0), Tt(e, r), Ce(e, b()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Jt(e, we, lt);
          break;
        case 3:
          if (
            (Tt(e, r), (r & 130023424) === r && ((t = Fa + 500 - b()), 10 < t))
          ) {
            if (qi(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              ye(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = cl(Jt.bind(null, e, we, lt), t);
            break;
          }
          Jt(e, we, lt);
          break;
        case 4:
          if ((Tt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Ke(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = b() - r),
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
                : 1960 * _y(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = cl(Jt.bind(null, e, we, lt), r);
            break;
          }
          Jt(e, we, lt);
          break;
        case 5:
          Jt(e, we, lt);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return Ce(e, b()), e.callbackNode === n ? Qp.bind(null, e) : null;
}
function Vl(e, t) {
  var n = kr;
  return (
    e.current.memoizedState.isDehydrated && (ln(e, t).flags |= 256),
    (e = mo(e, t)),
    e !== 2 && ((t = we), (we = n), t !== null && Ll(t)),
    e
  );
}
function Ll(e) {
  we === null ? (we = e) : we.push.apply(we, e);
}
function Uy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!$e(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Tt(e, t) {
  for (
    t &= ~Ba,
      t &= ~Fo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ke(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Sc(e) {
  if (F & 6) throw Error(S(327));
  Un();
  var t = qi(e, 0);
  if (!(t & 1)) return Ce(e, b()), null;
  var n = mo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = nl(e);
    r !== 0 && ((t = r), (n = Vl(e, r)));
  }
  if (n === 1) throw ((n = Kr), ln(e, 0), Tt(e, t), Ce(e, b()), n);
  if (n === 6) throw Error(S(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Jt(e, we, lt),
    Ce(e, b()),
    null
  );
}
function Ia(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    (F = n), F === 0 && ((Zn = b() + 500), No && Yt());
  }
}
function pn(e) {
  Dt !== null && Dt.tag === 0 && !(F & 6) && Un();
  var t = F;
  F |= 1;
  var n = Ue.transition,
    r = I;
  try {
    if (((Ue.transition = null), (I = 1), e)) return e();
  } finally {
    (I = r), (Ue.transition = n), (F = t), !(F & 6) && Yt();
  }
}
function za() {
  (Me = Rn.current), U(Rn);
}
function ln(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), yy(n)), te !== null))
    for (n = te.return; n !== null; ) {
      var r = n;
      switch ((Aa(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && to();
          break;
        case 3:
          Xn(), U(Pe), U(he), Ma();
          break;
        case 5:
          Ta(r);
          break;
        case 4:
          Xn();
          break;
        case 13:
          U(Q);
          break;
        case 19:
          U(Q);
          break;
        case 10:
          Pa(r.type._context);
          break;
        case 22:
        case 23:
          za();
      }
      n = n.return;
    }
  if (
    ((le = e),
    (te = e = Ft(e.current, null)),
    (ue = Me = t),
    (ie = 0),
    (Kr = null),
    (Ba = Fo = dn = 0),
    (we = kr = null),
    nn !== null)
  ) {
    for (t = 0; t < nn.length; t++)
      if (((n = nn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    nn = null;
  }
  return e;
}
function Yp(e, t) {
  do {
    var n = te;
    try {
      if ((Sa(), (zi.current = co), uo)) {
        for (var r = X.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        uo = !1;
      }
      if (
        ((fn = 0),
        (oe = ne = X = null),
        (Sr = !1),
        (Yr = 0),
        (Oa.current = null),
        n === null || n.return === null)
      ) {
        (ie = 1), (Kr = t), (te = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          l = n,
          a = t;
        if (
          ((t = ue),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = uc(s);
          if (g !== null) {
            (g.flags &= -257),
              cc(g, s, l, o, t),
              g.mode & 1 && ac(o, u, t),
              (t = g),
              (a = u);
            var y = t.updateQueue;
            if (y === null) {
              var v = new Set();
              v.add(a), (t.updateQueue = v);
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              ac(o, u, t), _a();
              break e;
            }
            a = Error(S(426));
          }
        } else if (H && l.mode & 1) {
          var w = uc(s);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              cc(w, s, l, o, t),
              xa(Kn(a, l));
            break e;
          }
        }
        (o = a = Kn(a, l)),
          ie !== 4 && (ie = 2),
          kr === null ? (kr = [o]) : kr.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var h = Mp(o, a, t);
              tc(o, h);
              break e;
            case 1:
              l = a;
              var p = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (Ot === null || !Ot.has(m))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var A = Dp(o, l, t);
                tc(o, A);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Kp(n);
    } catch (x) {
      (t = x), te === n && n !== null && (te = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Gp() {
  var e = fo.current;
  return (fo.current = co), e === null ? co : e;
}
function _a() {
  (ie === 0 || ie === 3 || ie === 2) && (ie = 4),
    le === null || (!(dn & 268435455) && !(Fo & 268435455)) || Tt(le, ue);
}
function mo(e, t) {
  var n = F;
  F |= 2;
  var r = Gp();
  (le !== e || ue !== t) && ((lt = null), ln(e, t));
  do
    try {
      Hy();
      break;
    } catch (i) {
      Yp(e, i);
    }
  while (1);
  if ((Sa(), (F = n), (fo.current = r), te !== null)) throw Error(S(261));
  return (le = null), (ue = 0), ie;
}
function Hy() {
  for (; te !== null; ) Xp(te);
}
function Wy() {
  for (; te !== null && !hg(); ) Xp(te);
}
function Xp(e) {
  var t = qp(e.alternate, e, Me);
  (e.memoizedProps = e.pendingProps),
    t === null ? Kp(e) : (te = t),
    (Oa.current = null);
}
function Kp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = By(n, t)), n !== null)) {
        (n.flags &= 32767), (te = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ie = 6), (te = null);
        return;
      }
    } else if (((n = Oy(n, t, Me)), n !== null)) {
      te = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      te = t;
      return;
    }
    te = t = e;
  } while (t !== null);
  ie === 0 && (ie = 5);
}
function Jt(e, t, n) {
  var r = I,
    i = Ue.transition;
  try {
    (Ue.transition = null), (I = 1), Qy(e, t, n, r);
  } finally {
    (Ue.transition = i), (I = r);
  }
  return null;
}
function Qy(e, t, n, r) {
  do Un();
  while (Dt !== null);
  if (F & 6) throw Error(S(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(S(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (kg(e, o),
    e === le && ((te = le = null), (ue = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Mi ||
      ((Mi = !0),
      $p(Zi, function () {
        return Un(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ue.transition), (Ue.transition = null);
    var s = I;
    I = 1;
    var l = F;
    (F |= 4),
      (Oa.current = null),
      Iy(e, n),
      Hp(n, e),
      cy(al),
      ($i = !!ll),
      (al = ll = null),
      (e.current = n),
      zy(n),
      mg(),
      (F = l),
      (I = s),
      (Ue.transition = o);
  } else e.current = n;
  if (
    (Mi && ((Mi = !1), (Dt = e), (ho = i)),
    (o = e.pendingLanes),
    o === 0 && (Ot = null),
    vg(n.stateNode),
    Ce(e, b()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (po) throw ((po = !1), (e = Ml), (Ml = null), e);
  return (
    ho & 1 && e.tag !== 0 && Un(),
    (o = e.pendingLanes),
    o & 1 ? (e === Dl ? Cr++ : ((Cr = 0), (Dl = e))) : (Cr = 0),
    Yt(),
    null
  );
}
function Un() {
  if (Dt !== null) {
    var e = Td(ho),
      t = Ue.transition,
      n = I;
    try {
      if (((Ue.transition = null), (I = 16 > e ? 16 : e), Dt === null))
        var r = !1;
      else {
        if (((e = Dt), (Dt = null), (ho = 0), F & 6)) throw Error(S(331));
        var i = F;
        for (F |= 4, D = e.current; D !== null; ) {
          var o = D,
            s = o.child;
          if (D.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (D = u; D !== null; ) {
                  var c = D;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pr(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (D = f);
                  else
                    for (; D !== null; ) {
                      c = D;
                      var d = c.sibling,
                        g = c.return;
                      if ((zp(c), c === u)) {
                        D = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = g), (D = d);
                        break;
                      }
                      D = g;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var w = v.sibling;
                    (v.sibling = null), (v = w);
                  } while (v !== null);
                }
              }
              D = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (D = s);
          else
            e: for (; D !== null; ) {
              if (((o = D), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Pr(9, o, o.return);
                }
              var h = o.sibling;
              if (h !== null) {
                (h.return = o.return), (D = h);
                break e;
              }
              D = o.return;
            }
        }
        var p = e.current;
        for (D = p; D !== null; ) {
          s = D;
          var m = s.child;
          if (s.subtreeFlags & 2064 && m !== null) (m.return = s), (D = m);
          else
            e: for (s = p; D !== null; ) {
              if (((l = D), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bo(9, l);
                  }
                } catch (x) {
                  Z(l, l.return, x);
                }
              if (l === s) {
                D = null;
                break e;
              }
              var A = l.sibling;
              if (A !== null) {
                (A.return = l.return), (D = A);
                break e;
              }
              D = l.return;
            }
        }
        if (
          ((F = i), Yt(), it && typeof it.onPostCommitFiberRoot == "function")
        )
          try {
            it.onPostCommitFiberRoot(Mo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (I = n), (Ue.transition = t);
    }
  }
  return !1;
}
function Pc(e, t, n) {
  (t = Kn(n, t)),
    (t = Mp(e, t, 1)),
    (e = jt(e, t, 1)),
    (t = ye()),
    e !== null && (ri(e, 1, t), Ce(e, t));
}
function Z(e, t, n) {
  if (e.tag === 3) Pc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Pc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Ot === null || !Ot.has(r)))
        ) {
          (e = Kn(n, e)),
            (e = Dp(t, e, 1)),
            (t = jt(t, e, 1)),
            (e = ye()),
            t !== null && (ri(t, 1, e), Ce(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Yy(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ye()),
    (e.pingedLanes |= e.suspendedLanes & n),
    le === e &&
      (ue & n) === n &&
      (ie === 4 || (ie === 3 && (ue & 130023424) === ue && 500 > b() - Fa)
        ? ln(e, 0)
        : (Ba |= n)),
    Ce(e, t);
}
function Zp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = vi), (vi <<= 1), !(vi & 130023424) && (vi = 4194304))
      : (t = 1));
  var n = ye();
  (e = yt(e, t)), e !== null && (ri(e, t, n), Ce(e, n));
}
function Gy(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Zp(e, n);
}
function Xy(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(S(314));
  }
  r !== null && r.delete(t), Zp(e, n);
}
var qp;
qp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Pe.current) Se = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Se = !1), jy(e, t, n);
      Se = !!(e.flags & 131072);
    }
  else (Se = !1), H && t.flags & 1048576 && bd(t, io, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ui(e, t), (e = t.pendingProps);
      var i = Qn(t, he.current);
      _n(t, n), (i = Va(null, t, r, e, i, n));
      var o = La();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ke(r) ? ((o = !0), no(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Ca(t),
            (i.updater = jo),
            (t.stateNode = i),
            (i._reactInternals = t),
            yl(t, r, e, n),
            (t = xl(null, t, r, !0, o, n)))
          : ((t.tag = 0), H && o && va(t), ge(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ui(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Zy(r)),
          (e = Ye(r, e)),
          i)
        ) {
          case 0:
            t = Al(null, t, r, e, n);
            break e;
          case 1:
            t = pc(null, t, r, e, n);
            break e;
          case 11:
            t = fc(null, t, r, e, n);
            break e;
          case 14:
            t = dc(null, t, r, Ye(r.type, e), n);
            break e;
        }
        throw Error(S(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ye(r, i)),
        Al(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ye(r, i)),
        pc(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Np(t), e === null)) throw Error(S(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          rp(e, t),
          lo(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Kn(Error(S(423)), t)), (t = hc(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Kn(Error(S(424)), t)), (t = hc(e, t, r, n, i));
            break e;
          } else
            for (
              De = Nt(t.stateNode.containerInfo.firstChild),
                Ve = t,
                H = !0,
                Xe = null,
                n = lp(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Yn(), r === i)) {
            t = vt(e, t, n);
            break e;
          }
          ge(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        ap(t),
        e === null && hl(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        ul(r, i) ? (s = null) : o !== null && ul(r, o) && (t.flags |= 32),
        Rp(e, t),
        ge(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && hl(t), null;
    case 13:
      return jp(e, t, n);
    case 4:
      return (
        Ea(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Gn(t, null, r, n)) : ge(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ye(r, i)),
        fc(e, t, r, i, n)
      );
    case 7:
      return ge(e, t, t.pendingProps, n), t.child;
    case 8:
      return ge(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ge(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          z(oo, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if ($e(o.value, s)) {
            if (o.children === i.children && !Pe.current) {
              t = vt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                s = o.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = dt(-1, n & -n)), (a.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      ml(o.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(S(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  ml(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        ge(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        _n(t, n),
        (i = He(i)),
        (r = r(i)),
        (t.flags |= 1),
        ge(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Ye(r, t.pendingProps)),
        (i = Ye(r.type, i)),
        dc(e, t, r, i, n)
      );
    case 15:
      return Vp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ye(r, i)),
        Ui(e, t),
        (t.tag = 1),
        ke(r) ? ((e = !0), no(t)) : (e = !1),
        _n(t, n),
        op(t, r, i),
        yl(t, r, i, n),
        xl(null, t, r, !0, e, n)
      );
    case 19:
      return Op(e, t, n);
    case 22:
      return Lp(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function $p(e, t) {
  return Pd(e, t);
}
function Ky(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
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
function _e(e, t, n, r) {
  return new Ky(e, t, n, r);
}
function Ua(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Zy(e) {
  if (typeof e == "function") return Ua(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === sa)) return 11;
    if (e === la) return 14;
  }
  return 2;
}
function Ft(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = _e(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Qi(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) Ua(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Sn:
        return an(n.children, i, o, t);
      case oa:
        (s = 8), (i |= 8);
        break;
      case Us:
        return (
          (e = _e(12, n, t, i | 2)), (e.elementType = Us), (e.lanes = o), e
        );
      case Hs:
        return (e = _e(13, n, t, i)), (e.elementType = Hs), (e.lanes = o), e;
      case Ws:
        return (e = _e(19, n, t, i)), (e.elementType = Ws), (e.lanes = o), e;
      case sd:
        return Io(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case id:
              s = 10;
              break e;
            case od:
              s = 9;
              break e;
            case sa:
              s = 11;
              break e;
            case la:
              s = 14;
              break e;
            case Pt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(S(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = _e(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function an(e, t, n, r) {
  return (e = _e(7, e, r, t)), (e.lanes = n), e;
}
function Io(e, t, n, r) {
  return (
    (e = _e(22, e, r, t)),
    (e.elementType = sd),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ks(e, t, n) {
  return (e = _e(6, e, null, t)), (e.lanes = n), e;
}
function Cs(e, t, n) {
  return (
    (t = _e(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function qy(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = os(0)),
    (this.expirationTimes = os(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = os(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Ha(e, t, n, r, i, o, s, l, a) {
  return (
    (e = new qy(e, t, n, l, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = _e(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ca(o),
    e
  );
}
function $y(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: wn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Jp(e) {
  if (!e) return Ut;
  e = e._reactInternals;
  e: {
    if (gn(e) !== e || e.tag !== 1) throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ke(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ke(n)) return $d(e, n, t);
  }
  return t;
}
function bp(e, t, n, r, i, o, s, l, a) {
  return (
    (e = Ha(n, r, !0, e, i, o, s, l, a)),
    (e.context = Jp(null)),
    (n = e.current),
    (r = ye()),
    (i = Bt(n)),
    (o = dt(r, i)),
    (o.callback = t ?? null),
    jt(n, o, i),
    (e.current.lanes = i),
    ri(e, i, r),
    Ce(e, r),
    e
  );
}
function zo(e, t, n, r) {
  var i = t.current,
    o = ye(),
    s = Bt(i);
  return (
    (n = Jp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = dt(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = jt(i, t, s)),
    e !== null && (Ze(e, i, s, o), Ii(e, i, s)),
    s
  );
}
function go(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function kc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Wa(e, t) {
  kc(e, t), (e = e.alternate) && kc(e, t);
}
function Jy() {
  return null;
}
var eh =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Qa(e) {
  this._internalRoot = e;
}
_o.prototype.render = Qa.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  zo(e, t, null, null);
};
_o.prototype.unmount = Qa.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    pn(function () {
      zo(null, e, null, null);
    }),
      (t[gt] = null);
  }
};
function _o(e) {
  this._internalRoot = e;
}
_o.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Vd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Et.length && t !== 0 && t < Et[n].priority; n++);
    Et.splice(n, 0, e), n === 0 && Rd(e);
  }
};
function Ya(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Uo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Cc() {}
function by(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = go(s);
        o.call(u);
      };
    }
    var s = bp(t, r, e, 0, null, !1, !1, "", Cc);
    return (
      (e._reactRootContainer = s),
      (e[gt] = s.current),
      _r(e.nodeType === 8 ? e.parentNode : e),
      pn(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = go(a);
      l.call(u);
    };
  }
  var a = Ha(e, 0, !1, null, null, !1, !1, "", Cc);
  return (
    (e._reactRootContainer = a),
    (e[gt] = a.current),
    _r(e.nodeType === 8 ? e.parentNode : e),
    pn(function () {
      zo(t, a, n, r);
    }),
    a
  );
}
function Ho(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var a = go(s);
        l.call(a);
      };
    }
    zo(t, s, e, i);
  } else s = by(n, t, e, i, r);
  return go(s);
}
Md = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = hr(t.pendingLanes);
        n !== 0 &&
          (ca(t, n | 1), Ce(t, b()), !(F & 6) && ((Zn = b() + 500), Yt()));
      }
      break;
    case 13:
      pn(function () {
        var r = yt(e, 1);
        if (r !== null) {
          var i = ye();
          Ze(r, e, 1, i);
        }
      }),
        Wa(e, 1);
  }
};
fa = function (e) {
  if (e.tag === 13) {
    var t = yt(e, 134217728);
    if (t !== null) {
      var n = ye();
      Ze(t, e, 134217728, n);
    }
    Wa(e, 134217728);
  }
};
Dd = function (e) {
  if (e.tag === 13) {
    var t = Bt(e),
      n = yt(e, t);
    if (n !== null) {
      var r = ye();
      Ze(n, e, t, r);
    }
    Wa(e, t);
  }
};
Vd = function () {
  return I;
};
Ld = function (e, t) {
  var n = I;
  try {
    return (I = e), t();
  } finally {
    I = n;
  }
};
bs = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Gs(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Ro(r);
            if (!i) throw Error(S(90));
            ad(r), Gs(r, i);
          }
        }
      }
      break;
    case "textarea":
      cd(e, n);
      break;
    case "select":
      (t = n.value), t != null && Bn(e, !!n.multiple, t, !1);
  }
};
yd = Ia;
vd = pn;
var e0 = { usingClientEntryPoint: !1, Events: [oi, En, Ro, md, gd, Ia] },
  lr = {
    findFiberByHostInstance: tn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  t0 = {
    bundleType: lr.bundleType,
    version: lr.version,
    rendererPackageName: lr.rendererPackageName,
    rendererConfig: lr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: xt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = wd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: lr.findFiberByHostInstance || Jy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Di = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Di.isDisabled && Di.supportsFiber)
    try {
      (Mo = Di.inject(t0)), (it = Di);
    } catch {}
}
Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = e0;
Ne.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ya(t)) throw Error(S(200));
  return $y(e, t, null, n);
};
Ne.createRoot = function (e, t) {
  if (!Ya(e)) throw Error(S(299));
  var n = !1,
    r = "",
    i = eh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Ha(e, 1, !1, null, null, n, !1, r, i)),
    (e[gt] = t.current),
    _r(e.nodeType === 8 ? e.parentNode : e),
    new Qa(t)
  );
};
Ne.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(S(188))
      : ((e = Object.keys(e).join(",")), Error(S(268, e)));
  return (e = wd(t)), (e = e === null ? null : e.stateNode), e;
};
Ne.flushSync = function (e) {
  return pn(e);
};
Ne.hydrate = function (e, t, n) {
  if (!Uo(t)) throw Error(S(200));
  return Ho(null, e, t, !0, n);
};
Ne.hydrateRoot = function (e, t, n) {
  if (!Ya(e)) throw Error(S(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = eh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = bp(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[gt] = t.current),
    _r(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new _o(t);
};
Ne.render = function (e, t, n) {
  if (!Uo(t)) throw Error(S(200));
  return Ho(null, e, t, !1, n);
};
Ne.unmountComponentAtNode = function (e) {
  if (!Uo(e)) throw Error(S(40));
  return e._reactRootContainer
    ? (pn(function () {
        Ho(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[gt] = null);
        });
      }),
      !0)
    : !1;
};
Ne.unstable_batchedUpdates = Ia;
Ne.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Uo(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return Ho(e, t, n, !1, r);
};
Ne.version = "18.2.0-next-9e3b772b8-20220608";
function th() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(th);
    } catch (e) {
      console.error(e);
    }
}
th(), (bf.exports = Ne);
var n0 = bf.exports,
  Ec = n0;
(zs.createRoot = Ec.createRoot), (zs.hydrateRoot = Ec.hydrateRoot);
/**
 * @remix-run/router v1.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Zr() {
  return (
    (Zr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Zr.apply(this, arguments)
  );
}
var on;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(on || (on = {}));
const Tc = "popstate";
function r0(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: s, hash: l } = r.location;
    return Rl(
      "",
      { pathname: o, search: s, hash: l },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : yo(i);
  }
  return o0(t, n, null, e);
}
function qe(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function i0() {
  return Math.random().toString(36).substr(2, 8);
}
function Mc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Rl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Zr(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Wo(t) : t,
      { state: n, key: (t && t.key) || r || i0() }
    )
  );
}
function yo(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Wo(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function o0(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    s = i.history,
    l = on.Pop,
    a = null,
    u = c();
  u == null && ((u = 0), s.replaceState(Zr({}, s.state, { idx: u }), ""));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function f() {
    l = on.Pop;
    let w = c(),
      h = w == null ? null : w - u;
    (u = w), a && a({ action: l, location: v.location, delta: h });
  }
  function d(w, h) {
    l = on.Push;
    let p = Rl(v.location, w, h);
    n && n(p, w), (u = c() + 1);
    let m = Mc(p, u),
      A = v.createHref(p);
    try {
      s.pushState(m, "", A);
    } catch {
      i.location.assign(A);
    }
    o && a && a({ action: l, location: v.location, delta: 1 });
  }
  function g(w, h) {
    l = on.Replace;
    let p = Rl(v.location, w, h);
    n && n(p, w), (u = c());
    let m = Mc(p, u),
      A = v.createHref(p);
    s.replaceState(m, "", A),
      o && a && a({ action: l, location: v.location, delta: 0 });
  }
  function y(w) {
    let h = i.location.origin !== "null" ? i.location.origin : i.location.href,
      p = typeof w == "string" ? w : yo(w);
    return (
      qe(
        h,
        "No window.location.(origin|href) available to create URL for href: " +
          p
      ),
      new URL(p, h)
    );
  }
  let v = {
    get action() {
      return l;
    },
    get location() {
      return e(i, s);
    },
    listen(w) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Tc, f),
        (a = w),
        () => {
          i.removeEventListener(Tc, f), (a = null);
        }
      );
    },
    createHref(w) {
      return t(i, w);
    },
    createURL: y,
    encodeLocation(w) {
      let h = y(w);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: d,
    replace: g,
    go(w) {
      return s.go(w);
    },
  };
  return v;
}
var Dc;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Dc || (Dc = {}));
function nh(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function s0(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? Wo(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : l0(n, t)) : t,
    search: a0(r),
    hash: u0(i),
  };
}
function l0(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Es(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function rh(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function ih(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = Wo(e))
    : ((i = Zr({}, e)),
      qe(
        !i.pathname || !i.pathname.includes("?"),
        Es("?", "pathname", "search", i)
      ),
      qe(
        !i.pathname || !i.pathname.includes("#"),
        Es("#", "pathname", "hash", i)
      ),
      qe(!i.search || !i.search.includes("#"), Es("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    s = o ? "/" : i.pathname,
    l;
  if (r || s == null) l = n;
  else {
    let f = t.length - 1;
    if (s.startsWith("..")) {
      let d = s.split("/");
      for (; d[0] === ".."; ) d.shift(), (f -= 1);
      i.pathname = d.join("/");
    }
    l = f >= 0 ? t[f] : "/";
  }
  let a = s0(i, l),
    u = s && s !== "/" && s.endsWith("/"),
    c = (o || s === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (u || c) && (a.pathname += "/"), a;
}
const oh = (e) => e.join("/").replace(/\/\/+/g, "/"),
  a0 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  u0 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e),
  sh = ["post", "put", "patch", "delete"];
new Set(sh);
const c0 = ["get", ...sh];
new Set(c0);
/**
 * React Router v6.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Nl() {
  return (
    (Nl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Nl.apply(this, arguments)
  );
}
const lh = E.createContext(null),
  li = E.createContext(null),
  Ga = E.createContext(null),
  Xa = E.createContext({ outlet: null, matches: [] });
function f0(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Qo() || qe(!1);
  let { basename: r, navigator: i } = E.useContext(li),
    { hash: o, pathname: s, search: l } = uh(e, { relative: n }),
    a = s;
  return (
    r !== "/" && (a = s === "/" ? r : oh([r, s])),
    i.createHref({ pathname: a, search: l, hash: o })
  );
}
function Qo() {
  return E.useContext(Ga) != null;
}
function Ka() {
  return Qo() || qe(!1), E.useContext(Ga).location;
}
function ah(e) {
  E.useContext(li).static || E.useLayoutEffect(e);
}
function d0() {
  return E.useContext(lh) != null ? y0() : p0();
}
function p0() {
  Qo() || qe(!1);
  let { basename: e, navigator: t } = E.useContext(li),
    { matches: n } = E.useContext(Xa),
    { pathname: r } = Ka(),
    i = JSON.stringify(rh(n).map((l) => l.pathnameBase)),
    o = E.useRef(!1);
  return (
    ah(() => {
      o.current = !0;
    }),
    E.useCallback(
      function (l, a) {
        if ((a === void 0 && (a = {}), !o.current)) return;
        if (typeof l == "number") {
          t.go(l);
          return;
        }
        let u = ih(l, JSON.parse(i), r, a.relative === "path");
        e !== "/" &&
          (u.pathname = u.pathname === "/" ? e : oh([e, u.pathname])),
          (a.replace ? t.replace : t.push)(u, a.state, a);
      },
      [e, t, i, r]
    )
  );
}
function uh(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = E.useContext(Xa),
    { pathname: i } = Ka(),
    o = JSON.stringify(rh(r).map((s) => s.pathnameBase));
  return E.useMemo(() => ih(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
var jl;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate");
})(jl || (jl = {}));
var Ol;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId");
})(Ol || (Ol = {}));
function h0(e) {
  let t = E.useContext(lh);
  return t || qe(!1), t;
}
function m0(e) {
  let t = E.useContext(Xa);
  return t || qe(!1), t;
}
function g0(e) {
  let t = m0(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || qe(!1), n.route.id;
}
function y0() {
  let { router: e } = h0(jl.UseNavigateStable),
    t = g0(Ol.UseNavigateStable),
    n = E.useRef(!1);
  return (
    ah(() => {
      n.current = !0;
    }),
    E.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, Nl({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function v0(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = on.Pop,
    navigator: o,
    static: s = !1,
  } = e;
  Qo() && qe(!1);
  let l = t.replace(/^\/*/, "/"),
    a = E.useMemo(() => ({ basename: l, navigator: o, static: s }), [l, o, s]);
  typeof r == "string" && (r = Wo(r));
  let {
      pathname: u = "/",
      search: c = "",
      hash: f = "",
      state: d = null,
      key: g = "default",
    } = r,
    y = E.useMemo(() => {
      let v = nh(u, l);
      return v == null
        ? null
        : {
            location: { pathname: v, search: c, hash: f, state: d, key: g },
            navigationType: i,
          };
    }, [l, u, c, f, d, g, i]);
  return y == null
    ? null
    : E.createElement(
        li.Provider,
        { value: a },
        E.createElement(Ga.Provider, { children: n, value: y })
      );
}
var Vc;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(Vc || (Vc = {}));
new Promise(() => {});
/**
 * React Router DOM v6.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Bl() {
  return (
    (Bl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Bl.apply(this, arguments)
  );
}
function A0(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function x0(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function w0(e, t) {
  return e.button === 0 && (!t || t === "_self") && !x0(e);
}
const S0 = [
  "onClick",
  "relative",
  "reloadDocument",
  "replace",
  "state",
  "target",
  "to",
  "preventScrollReset",
];
function P0(e) {
  let { basename: t, children: n, window: r } = e,
    i = E.useRef();
  i.current == null && (i.current = r0({ window: r, v5Compat: !0 }));
  let o = i.current,
    [s, l] = E.useState({ action: o.action, location: o.location });
  return (
    E.useLayoutEffect(() => o.listen(l), [o]),
    E.createElement(v0, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: o,
    })
  );
}
const k0 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  C0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  E0 = E.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: s,
        state: l,
        target: a,
        to: u,
        preventScrollReset: c,
      } = t,
      f = A0(t, S0),
      { basename: d } = E.useContext(li),
      g,
      y = !1;
    if (typeof u == "string" && C0.test(u) && ((g = u), k0))
      try {
        let p = new URL(window.location.href),
          m = u.startsWith("//") ? new URL(p.protocol + u) : new URL(u),
          A = nh(m.pathname, d);
        m.origin === p.origin && A != null
          ? (u = A + m.search + m.hash)
          : (y = !0);
      } catch {}
    let v = f0(u, { relative: i }),
      w = T0(u, {
        replace: s,
        state: l,
        target: a,
        preventScrollReset: c,
        relative: i,
      });
    function h(p) {
      r && r(p), p.defaultPrevented || w(p);
    }
    return E.createElement(
      "a",
      Bl({}, f, { href: g || v, onClick: y || o ? r : h, ref: n, target: a })
    );
  });
var Lc;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmitImpl = "useSubmitImpl"),
    (e.UseFetcher = "useFetcher");
})(Lc || (Lc = {}));
var Rc;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Rc || (Rc = {}));
function T0(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: s,
    } = t === void 0 ? {} : t,
    l = d0(),
    a = Ka(),
    u = uh(e, { relative: s });
  return E.useCallback(
    (c) => {
      if (w0(c, n)) {
        c.preventDefault();
        let f = r !== void 0 ? r : yo(a) === yo(u);
        l(e, { replace: f, state: i, preventScrollReset: o, relative: s });
      }
    },
    [a, l, u, r, i, n, e, o, s]
  );
}
const M0 = () => C.jsx("div", { children: "Stars" }),
  ch = E.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Yo = E.createContext({}),
  Za = E.createContext(null),
  Go = typeof document < "u",
  Nc = Go ? E.useLayoutEffect : E.useEffect,
  fh = E.createContext({ strict: !1 });
function D0(e, t, n, r) {
  const { visualElement: i } = E.useContext(Yo),
    o = E.useContext(fh),
    s = E.useContext(Za),
    l = E.useContext(ch).reducedMotion,
    a = E.useRef();
  (r = r || o.renderer),
    !a.current &&
      r &&
      (a.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: l,
      }));
  const u = a.current;
  return (
    E.useInsertionEffect(() => {
      u && u.update(n, s);
    }),
    Nc(() => {
      u && u.render();
    }),
    E.useEffect(() => {
      u && u.updateFeatures();
    }),
    (window.HandoffAppearAnimations ? Nc : E.useEffect)(() => {
      u && u.animationState && u.animationState.animateChanges();
    }),
    u
  );
}
function Nn(e) {
  return (
    typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function V0(e, t, n) {
  return E.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Nn(n) && (n.current = r));
    },
    [t]
  );
}
function qr(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Xo(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const qa = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  $a = ["initial", ...qa];
function Ko(e) {
  return Xo(e.animate) || $a.some((t) => qr(e[t]));
}
function dh(e) {
  return !!(Ko(e) || e.variants);
}
function L0(e, t) {
  if (Ko(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || qr(n) ? n : void 0,
      animate: qr(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function R0(e) {
  const { initial: t, animate: n } = L0(e, E.useContext(Yo));
  return E.useMemo(() => ({ initial: t, animate: n }), [jc(t), jc(n)]);
}
function jc(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Oc = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  $r = {};
for (const e in Oc) $r[e] = { isEnabled: (t) => Oc[e].some((n) => !!t[n]) };
function N0(e) {
  for (const t in e) $r[t] = { ...$r[t], ...e[t] };
}
function ph(e) {
  const t = E.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Er = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
let j0 = 1;
function O0() {
  return ph(() => {
    if (Er.hasEverUpdated) return j0++;
  });
}
const hh = E.createContext({}),
  mh = E.createContext({}),
  B0 = Symbol.for("motionComponentSymbol");
function F0({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && N0(e);
  function o(l, a) {
    let u;
    const c = { ...E.useContext(ch), ...l, layoutId: I0(l) },
      { isStatic: f } = c,
      d = R0(l),
      g = f ? void 0 : O0(),
      y = r(l, f);
    if (!f && Go) {
      d.visualElement = D0(i, y, c, t);
      const v = E.useContext(mh),
        w = E.useContext(fh).strict;
      d.visualElement && (u = d.visualElement.loadFeatures(c, w, e, g, v));
    }
    return E.createElement(
      Yo.Provider,
      { value: d },
      u && d.visualElement
        ? E.createElement(u, { visualElement: d.visualElement, ...c })
        : null,
      n(i, l, g, V0(y, d.visualElement, a), y, f, d.visualElement)
    );
  }
  const s = E.forwardRef(o);
  return (s[B0] = i), s;
}
function I0({ layoutId: e }) {
  const t = E.useContext(hh).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function z0(e) {
  function t(r, i = {}) {
    return F0(e(r, i));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)),
  });
}
const _0 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Ja(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(_0.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const vo = {};
function U0(e) {
  Object.assign(vo, e);
}
const ai = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  yn = new Set(ai);
function gh(e, { layout: t, layoutId: n }) {
  return (
    yn.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!vo[e] || e === "opacity"))
  );
}
const Ee = (e) => !!(e && e.getVelocity),
  H0 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  W0 = ai.length;
function Q0(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  i
) {
  let o = "";
  for (let s = 0; s < W0; s++) {
    const l = ai[s];
    if (e[l] !== void 0) {
      const a = H0[l] || l;
      o += `${a}(${e[l]}) `;
    }
  }
  return (
    t && !e.z && (o += "translateZ(0)"),
    (o = o.trim()),
    i ? (o = i(e, r ? "" : o)) : n && r && (o = "none"),
    o
  );
}
const yh = (e) => (t) => typeof t == "string" && t.startsWith(e),
  vh = yh("--"),
  Fl = yh("var(--"),
  Y0 =
    /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
  G0 = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  hn = (e, t, n) => Math.min(Math.max(n, e), t),
  vn = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Tr = { ...vn, transform: (e) => hn(0, 1, e) },
  Vi = { ...vn, default: 1 },
  Mr = (e) => Math.round(e * 1e5) / 1e5,
  Zo = /(-)?([\d]*\.?[\d])+/g,
  Ah =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  X0 =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function ui(e) {
  return typeof e == "string";
}
const ci = (e) => ({
    test: (t) => ui(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  St = ci("deg"),
  st = ci("%"),
  V = ci("px"),
  K0 = ci("vh"),
  Z0 = ci("vw"),
  Bc = {
    ...st,
    parse: (e) => st.parse(e) / 100,
    transform: (e) => st.transform(e * 100),
  },
  Fc = { ...vn, transform: Math.round },
  xh = {
    borderWidth: V,
    borderTopWidth: V,
    borderRightWidth: V,
    borderBottomWidth: V,
    borderLeftWidth: V,
    borderRadius: V,
    radius: V,
    borderTopLeftRadius: V,
    borderTopRightRadius: V,
    borderBottomRightRadius: V,
    borderBottomLeftRadius: V,
    width: V,
    maxWidth: V,
    height: V,
    maxHeight: V,
    size: V,
    top: V,
    right: V,
    bottom: V,
    left: V,
    padding: V,
    paddingTop: V,
    paddingRight: V,
    paddingBottom: V,
    paddingLeft: V,
    margin: V,
    marginTop: V,
    marginRight: V,
    marginBottom: V,
    marginLeft: V,
    rotate: St,
    rotateX: St,
    rotateY: St,
    rotateZ: St,
    scale: Vi,
    scaleX: Vi,
    scaleY: Vi,
    scaleZ: Vi,
    skew: St,
    skewX: St,
    skewY: St,
    distance: V,
    translateX: V,
    translateY: V,
    translateZ: V,
    x: V,
    y: V,
    z: V,
    perspective: V,
    transformPerspective: V,
    opacity: Tr,
    originX: Bc,
    originY: Bc,
    originZ: V,
    zIndex: Fc,
    fillOpacity: Tr,
    strokeOpacity: Tr,
    numOctaves: Fc,
  };
function ba(e, t, n, r) {
  const { style: i, vars: o, transform: s, transformOrigin: l } = e;
  let a = !1,
    u = !1,
    c = !0;
  for (const f in t) {
    const d = t[f];
    if (vh(f)) {
      o[f] = d;
      continue;
    }
    const g = xh[f],
      y = G0(d, g);
    if (yn.has(f)) {
      if (((a = !0), (s[f] = y), !c)) continue;
      d !== (g.default || 0) && (c = !1);
    } else f.startsWith("origin") ? ((u = !0), (l[f] = y)) : (i[f] = y);
  }
  if (
    (t.transform ||
      (a || r
        ? (i.transform = Q0(e.transform, n, c, r))
        : i.transform && (i.transform = "none")),
    u)
  ) {
    const { originX: f = "50%", originY: d = "50%", originZ: g = 0 } = l;
    i.transformOrigin = `${f} ${d} ${g}`;
  }
}
const eu = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function wh(e, t, n) {
  for (const r in t) !Ee(t[r]) && !gh(r, n) && (e[r] = t[r]);
}
function q0({ transformTemplate: e }, t, n) {
  return E.useMemo(() => {
    const r = eu();
    return (
      ba(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function $0(e, t, n) {
  const r = e.style || {},
    i = {};
  return (
    wh(i, r, e),
    Object.assign(i, q0(e, t, n)),
    e.transformValues ? e.transformValues(i) : i
  );
}
function J0(e, t, n) {
  const r = {},
    i = $0(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = i),
    r
  );
}
const b0 = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "ignoreStrict",
  "viewport",
]);
function Ao(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    b0.has(e)
  );
}
let Sh = (e) => !Ao(e);
function ev(e) {
  e && (Sh = (t) => (t.startsWith("on") ? !Ao(t) : e(t)));
}
try {
  ev(require("@emotion/is-prop-valid").default);
} catch {}
function tv(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((Sh(i) ||
        (n === !0 && Ao(i)) ||
        (!t && !Ao(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function Ic(e, t, n) {
  return typeof e == "string" ? e : V.transform(t + n * e);
}
function nv(e, t, n) {
  const r = Ic(t, e.x, e.width),
    i = Ic(n, e.y, e.height);
  return `${r} ${i}`;
}
const rv = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  iv = { offset: "strokeDashoffset", array: "strokeDasharray" };
function ov(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? rv : iv;
  e[o.offset] = V.transform(-r);
  const s = V.transform(t),
    l = V.transform(n);
  e[o.array] = `${s} ${l}`;
}
function tu(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: l = 1,
    pathOffset: a = 0,
    ...u
  },
  c,
  f,
  d
) {
  if ((ba(e, u, c, d), f)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: g, style: y, dimensions: v } = e;
  g.transform && (v && (y.transform = g.transform), delete g.transform),
    v &&
      (i !== void 0 || o !== void 0 || y.transform) &&
      (y.transformOrigin = nv(
        v,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5
      )),
    t !== void 0 && (g.x = t),
    n !== void 0 && (g.y = n),
    r !== void 0 && (g.scale = r),
    s !== void 0 && ov(g, s, l, a, !1);
}
const Ph = () => ({ ...eu(), attrs: {} }),
  nu = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function sv(e, t, n, r) {
  const i = E.useMemo(() => {
    const o = Ph();
    return (
      tu(o, t, { enableHardwareAcceleration: !1 }, nu(r), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    const o = {};
    wh(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
function lv(e = !1) {
  return (n, r, i, o, { latestValues: s }, l) => {
    const u = (Ja(n) ? sv : J0)(r, s, l, n),
      f = { ...tv(r, typeof n == "string", e), ...u, ref: o },
      { children: d } = r,
      g = E.useMemo(() => (Ee(d) ? d.get() : d), [d]);
    return (
      i && (f["data-projection-id"] = i),
      E.createElement(n, { ...f, children: g })
    );
  };
}
const ru = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function kh(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const o in n) e.style.setProperty(o, n[o]);
}
const Ch = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function Eh(e, t, n, r) {
  kh(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(Ch.has(i) ? i : ru(i), t.attrs[i]);
}
function iu(e, t) {
  const { style: n } = e,
    r = {};
  for (const i in n)
    (Ee(n[i]) || (t.style && Ee(t.style[i])) || gh(i, e)) && (r[i] = n[i]);
  return r;
}
function Th(e, t) {
  const n = iu(e, t);
  for (const r in e)
    if (Ee(e[r]) || Ee(t[r])) {
      const i =
        ai.indexOf(r) !== -1
          ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
          : r;
      n[i] = e[r];
    }
  return n;
}
function ou(e, t, n, r = {}, i = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    t
  );
}
const xo = (e) => Array.isArray(e),
  av = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  uv = (e) => (xo(e) ? e[e.length - 1] || 0 : e);
function Yi(e) {
  const t = Ee(e) ? e.get() : e;
  return av(t) ? t.toValue() : t;
}
function cv(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  i,
  o
) {
  const s = { latestValues: fv(r, i, o, e), renderState: t() };
  return n && (s.mount = (l) => n(r, l, s)), s;
}
const Mh = (e) => (t, n) => {
  const r = E.useContext(Yo),
    i = E.useContext(Za),
    o = () => cv(e, t, r, i);
  return n ? o() : ph(o);
};
function fv(e, t, n, r) {
  const i = {},
    o = r(e, {});
  for (const d in o) i[d] = Yi(o[d]);
  let { initial: s, animate: l } = e;
  const a = Ko(e),
    u = dh(e);
  t &&
    u &&
    !a &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), l === void 0 && (l = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const f = c ? l : s;
  return (
    f &&
      typeof f != "boolean" &&
      !Xo(f) &&
      (Array.isArray(f) ? f : [f]).forEach((g) => {
        const y = ou(e, g);
        if (!y) return;
        const { transitionEnd: v, transition: w, ...h } = y;
        for (const p in h) {
          let m = h[p];
          if (Array.isArray(m)) {
            const A = c ? m.length - 1 : 0;
            m = m[A];
          }
          m !== null && (i[p] = m);
        }
        for (const p in v) i[p] = v[p];
      }),
    i
  );
}
const dv = {
    useVisualState: Mh({
      scrapeMotionValuesFromProps: Th,
      createRenderState: Ph,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        try {
          n.dimensions =
            typeof t.getBBox == "function"
              ? t.getBBox()
              : t.getBoundingClientRect();
        } catch {
          n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
        }
        tu(
          n,
          r,
          { enableHardwareAcceleration: !1 },
          nu(t.tagName),
          e.transformTemplate
        ),
          Eh(t, n);
      },
    }),
  },
  pv = {
    useVisualState: Mh({
      scrapeMotionValuesFromProps: iu,
      createRenderState: eu,
    }),
  };
function hv(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(Ja(e) ? dv : pv),
    preloadedFeatures: n,
    useRender: lv(t),
    createVisualElement: r,
    Component: e,
  };
}
function ft(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const Dh = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function qo(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const mv = (e) => (t) => Dh(t) && e(t, qo(t));
function pt(e, t, n, r) {
  return ft(e, t, mv(n), r);
}
const gv = (e, t) => (n) => t(e(n)),
  It = (...e) => e.reduce(gv);
function Vh(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const zc = Vh("dragHorizontal"),
  _c = Vh("dragVertical");
function Lh(e) {
  let t = !1;
  if (e === "y") t = _c();
  else if (e === "x") t = zc();
  else {
    const n = zc(),
      r = _c();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function Rh() {
  const e = Lh(!0);
  return e ? (e(), !1) : !0;
}
class Gt {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function yv(e) {
  let t = [],
    n = [],
    r = 0,
    i = !1,
    o = !1;
  const s = new WeakSet(),
    l = {
      schedule: (a, u = !1, c = !1) => {
        const f = c && i,
          d = f ? t : n;
        return (
          u && s.add(a),
          d.indexOf(a) === -1 && (d.push(a), f && i && (r = t.length)),
          a
        );
      },
      cancel: (a) => {
        const u = n.indexOf(a);
        u !== -1 && n.splice(u, 1), s.delete(a);
      },
      process: (a) => {
        if (i) {
          o = !0;
          return;
        }
        if (((i = !0), ([t, n] = [n, t]), (n.length = 0), (r = t.length), r))
          for (let u = 0; u < r; u++) {
            const c = t[u];
            c(a), s.has(c) && (l.schedule(c), e());
          }
        (i = !1), o && ((o = !1), l.process(a));
      },
    };
  return l;
}
const se = { delta: 0, timestamp: 0, isProcessing: !1 },
  vv = 40;
let Il = !0,
  Jr = !1;
const $o = ["read", "update", "preRender", "render", "postRender"],
  Hn = $o.reduce((e, t) => ((e[t] = yv(() => (Jr = !0))), e), {}),
  Av = (e) => Hn[e].process(se),
  Nh = (e) => {
    (Jr = !1),
      (se.delta = Il ? 1e3 / 60 : Math.max(Math.min(e - se.timestamp, vv), 1)),
      (se.timestamp = e),
      (se.isProcessing = !0),
      $o.forEach(Av),
      (se.isProcessing = !1),
      Jr && ((Il = !1), requestAnimationFrame(Nh));
  },
  xv = () => {
    (Jr = !0), (Il = !0), se.isProcessing || requestAnimationFrame(Nh);
  },
  G = $o.reduce((e, t) => {
    const n = Hn[t];
    return (e[t] = (r, i = !1, o = !1) => (Jr || xv(), n.schedule(r, i, o))), e;
  }, {});
function At(e) {
  $o.forEach((t) => Hn[t].cancel(e));
}
function Uc(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"),
    r = "onHover" + (t ? "Start" : "End"),
    i = (o, s) => {
      if (o.type === "touch" || Rh()) return;
      const l = e.getProps();
      e.animationState &&
        l.whileHover &&
        e.animationState.setActive("whileHover", t),
        l[r] && G.update(() => l[r](o, s));
    };
  return pt(e.current, n, i, { passive: !e.getProps()[r] });
}
class wv extends Gt {
  mount() {
    this.unmount = It(Uc(this.node, !0), Uc(this.node, !1));
  }
  unmount() {}
}
class Sv extends Gt {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = It(
      ft(this.node.current, "focus", () => this.onFocus()),
      ft(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const jh = (e, t) => (t ? (e === t ? !0 : jh(e, t.parentElement)) : !1),
  re = (e) => e;
function Ts(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, qo(n));
}
class Pv extends Gt {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = re),
      (this.removeEndListeners = re),
      (this.removeAccessibleListeners = re),
      (this.startPointerPress = (t, n) => {
        if ((this.removeEndListeners(), this.isPressing)) return;
        const r = this.node.getProps(),
          o = pt(
            window,
            "pointerup",
            (l, a) => {
              if (!this.checkPressEnd()) return;
              const { onTap: u, onTapCancel: c } = this.node.getProps();
              G.update(() => {
                jh(this.node.current, l.target) ? u && u(l, a) : c && c(l, a);
              });
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          s = pt(window, "pointercancel", (l, a) => this.cancelPress(l, a), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = It(o, s)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (o) => {
            if (o.key !== "Enter" || this.isPressing) return;
            const s = (l) => {
              l.key !== "Enter" ||
                !this.checkPressEnd() ||
                Ts("up", (a, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && G.update(() => c(a, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = ft(this.node.current, "keyup", s)),
              Ts("down", (l, a) => {
                this.startPress(l, a);
              });
          },
          n = ft(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && Ts("cancel", (o, s) => this.cancelPress(o, s));
          },
          i = ft(this.node.current, "blur", r);
        this.removeAccessibleListeners = It(n, i);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && G.update(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !Rh()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && G.update(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = pt(this.node.current, "pointerdown", this.startPointerPress, {
        passive: !(t.onTapStart || t.onPointerStart),
      }),
      r = ft(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = It(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const zl = new WeakMap(),
  Ms = new WeakMap(),
  kv = (e) => {
    const t = zl.get(e.target);
    t && t(e);
  },
  Cv = (e) => {
    e.forEach(kv);
  };
function Ev({ root: e, ...t }) {
  const n = e || document;
  Ms.has(n) || Ms.set(n, {});
  const r = Ms.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(Cv, { root: e, ...t })), r[i];
}
function Tv(e, t, n) {
  const r = Ev(t);
  return (
    zl.set(e, n),
    r.observe(e),
    () => {
      zl.delete(e), r.unobserve(e);
    }
  );
}
const Mv = { some: 0, all: 1 };
class Dv extends Gt {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: o } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : Mv[i],
      },
      l = (a) => {
        const { isIntersecting: u } = a;
        if (
          this.isInView === u ||
          ((this.isInView = u), o && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          d = u ? c : f;
        d && d(a);
      };
    return Tv(this.node.current, s, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Vv(t, n)) && this.startObserver();
  }
  unmount() {}
}
function Vv({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Lv = {
  inView: { Feature: Dv },
  tap: { Feature: Pv },
  focus: { Feature: Sv },
  hover: { Feature: wv },
};
function Oh(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function Rv(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function Nv(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function Jo(e, t, n) {
  const r = e.getProps();
  return ou(r, t, n !== void 0 ? n : r.custom, Rv(e), Nv(e));
}
const jv = "framerAppearId",
  Ov = "data-" + ru(jv);
let Bv = re,
  su = re;
const zt = (e) => e * 1e3,
  ht = (e) => e / 1e3,
  Fv = { current: !1 },
  Bh = (e) => Array.isArray(e) && typeof e[0] == "number";
function Fh(e) {
  return !!(
    !e ||
    (typeof e == "string" && Ih[e]) ||
    Bh(e) ||
    (Array.isArray(e) && e.every(Fh))
  );
}
const gr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Ih = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: gr([0, 0.65, 0.55, 1]),
    circOut: gr([0.55, 0, 1, 0.45]),
    backIn: gr([0.31, 0.01, 0.66, -0.59]),
    backOut: gr([0.33, 1.53, 0.69, 0.99]),
  };
function zh(e) {
  if (e) return Bh(e) ? gr(e) : Array.isArray(e) ? e.map(zh) : Ih[e];
}
function Iv(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: l,
    times: a,
  } = {}
) {
  const u = { [t]: n };
  a && (u.offset = a);
  const c = zh(l);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
const Hc = {
    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
  },
  Ds = {},
  _h = {};
for (const e in Hc)
  _h[e] = () => (Ds[e] === void 0 && (Ds[e] = Hc[e]()), Ds[e]);
function zv(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const Uh = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  _v = 1e-7,
  Uv = 12;
function Hv(e, t, n, r, i) {
  let o,
    s,
    l = 0;
  do (s = t + (n - t) / 2), (o = Uh(s, r, i) - e), o > 0 ? (n = s) : (t = s);
  while (Math.abs(o) > _v && ++l < Uv);
  return s;
}
function fi(e, t, n, r) {
  if (e === t && n === r) return re;
  const i = (o) => Hv(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : Uh(i(o), t, r));
}
const Wv = fi(0.42, 0, 1, 1),
  Qv = fi(0, 0, 0.58, 1),
  Hh = fi(0.42, 0, 0.58, 1),
  Yv = (e) => Array.isArray(e) && typeof e[0] != "number",
  Wh = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Qh = (e) => (t) => 1 - e(1 - t),
  Yh = (e) => 1 - Math.sin(Math.acos(e)),
  lu = Qh(Yh),
  Gv = Wh(lu),
  Gh = fi(0.33, 1.53, 0.69, 0.99),
  au = Qh(Gh),
  Xv = Wh(au),
  Kv = (e) =>
    (e *= 2) < 1 ? 0.5 * au(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Zv = {
    linear: re,
    easeIn: Wv,
    easeInOut: Hh,
    easeOut: Qv,
    circIn: Yh,
    circInOut: Gv,
    circOut: lu,
    backIn: au,
    backInOut: Xv,
    backOut: Gh,
    anticipate: Kv,
  },
  Wc = (e) => {
    if (Array.isArray(e)) {
      su(e.length === 4);
      const [t, n, r, i] = e;
      return fi(t, n, r, i);
    } else if (typeof e == "string") return Zv[e];
    return e;
  },
  uu = (e, t) => (n) =>
    !!(
      (ui(n) && X0.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Xh = (e, t, n) => (r) => {
    if (!ui(r)) return r;
    const [i, o, s, l] = r.match(Zo);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: l !== void 0 ? parseFloat(l) : 1,
    };
  },
  qv = (e) => hn(0, 255, e),
  Vs = { ...vn, transform: (e) => Math.round(qv(e)) },
  sn = {
    test: uu("rgb", "red"),
    parse: Xh("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Vs.transform(e) +
      ", " +
      Vs.transform(t) +
      ", " +
      Vs.transform(n) +
      ", " +
      Mr(Tr.transform(r)) +
      ")",
  };
function $v(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const _l = { test: uu("#"), parse: $v, transform: sn.transform },
  jn = {
    test: uu("hsl", "hue"),
    parse: Xh("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      st.transform(Mr(t)) +
      ", " +
      st.transform(Mr(n)) +
      ", " +
      Mr(Tr.transform(r)) +
      ")",
  },
  me = {
    test: (e) => sn.test(e) || _l.test(e) || jn.test(e),
    parse: (e) =>
      sn.test(e) ? sn.parse(e) : jn.test(e) ? jn.parse(e) : _l.parse(e),
    transform: (e) =>
      ui(e) ? e : e.hasOwnProperty("red") ? sn.transform(e) : jn.transform(e),
  },
  Y = (e, t, n) => -n * e + n * t + e;
function Ls(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function Jv({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t,
      a = 2 * n - l;
    (i = Ls(a, l, e + 1 / 3)), (o = Ls(a, l, e)), (s = Ls(a, l, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
const Rs = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r));
  },
  bv = [_l, sn, jn],
  eA = (e) => bv.find((t) => t.test(e));
function Qc(e) {
  const t = eA(e);
  let n = t.parse(e);
  return t === jn && (n = Jv(n)), n;
}
const Kh = (e, t) => {
  const n = Qc(e),
    r = Qc(t),
    i = { ...n };
  return (o) => (
    (i.red = Rs(n.red, r.red, o)),
    (i.green = Rs(n.green, r.green, o)),
    (i.blue = Rs(n.blue, r.blue, o)),
    (i.alpha = Y(n.alpha, r.alpha, o)),
    sn.transform(i)
  );
};
function tA(e) {
  var t, n;
  return (
    isNaN(e) &&
    ui(e) &&
    (((t = e.match(Zo)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(Ah)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const Zh = { regex: Y0, countKey: "Vars", token: "${v}", parse: re },
  qh = { regex: Ah, countKey: "Colors", token: "${c}", parse: me.parse },
  $h = { regex: Zo, countKey: "Numbers", token: "${n}", parse: vn.parse };
function Ns(e, { regex: t, countKey: n, token: r, parse: i }) {
  const o = e.tokenised.match(t);
  o &&
    ((e["num" + n] = o.length),
    (e.tokenised = e.tokenised.replace(t, r)),
    e.values.push(...o.map(i)));
}
function wo(e) {
  const t = e.toString(),
    n = {
      value: t,
      tokenised: t,
      values: [],
      numVars: 0,
      numColors: 0,
      numNumbers: 0,
    };
  return n.value.includes("var(--") && Ns(n, Zh), Ns(n, qh), Ns(n, $h), n;
}
function Jh(e) {
  return wo(e).values;
}
function bh(e) {
  const { values: t, numColors: n, numVars: r, tokenised: i } = wo(e),
    o = t.length;
  return (s) => {
    let l = i;
    for (let a = 0; a < o; a++)
      a < r
        ? (l = l.replace(Zh.token, s[a]))
        : a < r + n
        ? (l = l.replace(qh.token, me.transform(s[a])))
        : (l = l.replace($h.token, Mr(s[a])));
    return l;
  };
}
const nA = (e) => (typeof e == "number" ? 0 : e);
function rA(e) {
  const t = Jh(e);
  return bh(e)(t.map(nA));
}
const Ht = {
    test: tA,
    parse: Jh,
    createTransformer: bh,
    getAnimatableNone: rA,
  },
  em = (e, t) => (n) => `${n > 0 ? t : e}`;
function tm(e, t) {
  return typeof e == "number"
    ? (n) => Y(e, t, n)
    : me.test(e)
    ? Kh(e, t)
    : e.startsWith("var(")
    ? em(e, t)
    : rm(e, t);
}
const nm = (e, t) => {
    const n = [...e],
      r = n.length,
      i = e.map((o, s) => tm(o, t[s]));
    return (o) => {
      for (let s = 0; s < r; s++) n[s] = i[s](o);
      return n;
    };
  },
  iA = (e, t) => {
    const n = { ...e, ...t },
      r = {};
    for (const i in n)
      e[i] !== void 0 && t[i] !== void 0 && (r[i] = tm(e[i], t[i]));
    return (i) => {
      for (const o in r) n[o] = r[o](i);
      return n;
    };
  },
  rm = (e, t) => {
    const n = Ht.createTransformer(t),
      r = wo(e),
      i = wo(t);
    return r.numVars === i.numVars &&
      r.numColors === i.numColors &&
      r.numNumbers >= i.numNumbers
      ? It(nm(r.values, i.values), n)
      : em(e, t);
  },
  br = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Yc = (e, t) => (n) => Y(e, t, n);
function oA(e) {
  return typeof e == "number"
    ? Yc
    : typeof e == "string"
    ? me.test(e)
      ? Kh
      : rm
    : Array.isArray(e)
    ? nm
    : typeof e == "object"
    ? iA
    : Yc;
}
function sA(e, t, n) {
  const r = [],
    i = n || oA(e[0]),
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let l = i(e[s], e[s + 1]);
    if (t) {
      const a = Array.isArray(t) ? t[s] || re : t;
      l = It(a, l);
    }
    r.push(l);
  }
  return r;
}
function im(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if ((su(o === t.length), o === 1)) return () => t[0];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = sA(t, r, i),
    l = s.length,
    a = (u) => {
      let c = 0;
      if (l > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const f = br(e[c], e[c + 1], u);
      return s[c](f);
    };
  return n ? (u) => a(hn(e[0], e[o - 1], u)) : a;
}
function lA(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = br(0, t, r);
    e.push(Y(n, 1, i));
  }
}
function aA(e) {
  const t = [0];
  return lA(t, e.length - 1), t;
}
function uA(e, t) {
  return e.map((n) => n * t);
}
function cA(e, t) {
  return e.map(() => t || Hh).splice(0, e.length - 1);
}
function So({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = Yv(r) ? r.map(Wc) : Wc(r),
    o = { done: !1, value: t[0] },
    s = uA(n && n.length === t.length ? n : aA(t), e),
    l = im(s, t, { ease: Array.isArray(i) ? i : cA(t, i) });
  return {
    calculatedDuration: e,
    next: (a) => ((o.value = l(a)), (o.done = a >= e), o),
  };
}
function om(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const fA = 5;
function sm(e, t, n) {
  const r = Math.max(t - fA, 0);
  return om(n - e(r), t - r);
}
const js = 0.001,
  dA = 0.01,
  Gc = 10,
  pA = 0.05,
  hA = 1;
function mA({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i, o;
  Bv(e <= zt(Gc));
  let s = 1 - t;
  (s = hn(pA, hA, s)),
    (e = hn(dA, Gc, ht(e))),
    s < 1
      ? ((i = (u) => {
          const c = u * s,
            f = c * e,
            d = c - n,
            g = Ul(u, s),
            y = Math.exp(-f);
          return js - (d / g) * y;
        }),
        (o = (u) => {
          const f = u * s * e,
            d = f * n + n,
            g = Math.pow(s, 2) * Math.pow(u, 2) * e,
            y = Math.exp(-f),
            v = Ul(Math.pow(u, 2), s);
          return ((-i(u) + js > 0 ? -1 : 1) * ((d - g) * y)) / v;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -js + c * f;
        }),
        (o = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        }));
  const l = 5 / e,
    a = yA(i, o, l);
  if (((e = zt(e)), isNaN(a)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(a, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const gA = 12;
function yA(e, t, n) {
  let r = n;
  for (let i = 1; i < gA; i++) r = r - e(r) / t(r);
  return r;
}
function Ul(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const vA = ["duration", "bounce"],
  AA = ["stiffness", "damping", "mass"];
function Xc(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function xA(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Xc(e, AA) && Xc(e, vA)) {
    const n = mA(e);
    (t = { ...t, ...n, velocity: 0, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function lm({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    o = e[e.length - 1],
    s = { done: !1, value: i },
    {
      stiffness: l,
      damping: a,
      mass: u,
      velocity: c,
      duration: f,
      isResolvedFromDuration: d,
    } = xA(r),
    g = c ? -ht(c) : 0,
    y = a / (2 * Math.sqrt(l * u)),
    v = o - i,
    w = ht(Math.sqrt(l / u)),
    h = Math.abs(v) < 5;
  n || (n = h ? 0.01 : 2), t || (t = h ? 0.005 : 0.5);
  let p;
  if (y < 1) {
    const m = Ul(w, y);
    p = (A) => {
      const x = Math.exp(-y * w * A);
      return (
        o - x * (((g + y * w * v) / m) * Math.sin(m * A) + v * Math.cos(m * A))
      );
    };
  } else if (y === 1) p = (m) => o - Math.exp(-w * m) * (v + (g + w * v) * m);
  else {
    const m = w * Math.sqrt(y * y - 1);
    p = (A) => {
      const x = Math.exp(-y * w * A),
        T = Math.min(m * A, 300);
      return (
        o - (x * ((g + y * w * v) * Math.sinh(T) + m * v * Math.cosh(T))) / m
      );
    };
  }
  return {
    calculatedDuration: (d && f) || null,
    next: (m) => {
      const A = p(m);
      if (d) s.done = m >= f;
      else {
        let x = g;
        m !== 0 && (y < 1 ? (x = sm(p, m, A)) : (x = 0));
        const T = Math.abs(x) <= n,
          k = Math.abs(o - A) <= t;
        s.done = T && k;
      }
      return (s.value = s.done ? o : A), s;
    },
  };
}
function Kc({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: l,
  max: a,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    d = { done: !1, value: f },
    g = (P) => (l !== void 0 && P < l) || (a !== void 0 && P > a),
    y = (P) =>
      l === void 0
        ? a
        : a === void 0 || Math.abs(l - P) < Math.abs(a - P)
        ? l
        : a;
  let v = n * t;
  const w = f + v,
    h = s === void 0 ? w : s(w);
  h !== w && (v = h - f);
  const p = (P) => -v * Math.exp(-P / r),
    m = (P) => h + p(P),
    A = (P) => {
      const j = p(P),
        L = m(P);
      (d.done = Math.abs(j) <= u), (d.value = d.done ? h : L);
    };
  let x, T;
  const k = (P) => {
    g(d.value) &&
      ((x = P),
      (T = lm({
        keyframes: [d.value, y(d.value)],
        velocity: sm(m, P, d.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    k(0),
    {
      calculatedDuration: null,
      next: (P) => {
        let j = !1;
        return (
          !T && x === void 0 && ((j = !0), A(P), k(P)),
          x !== void 0 && P > x ? T.next(P - x) : (!j && A(P), d)
        );
      },
    }
  );
}
const wA = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => G.update(t, !0),
      stop: () => At(t),
      now: () => (se.isProcessing ? se.timestamp : performance.now()),
    };
  },
  Zc = 2e4;
function qc(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Zc; ) (t += n), (r = e.next(t));
  return t >= Zc ? 1 / 0 : t;
}
const SA = { decay: Kc, inertia: Kc, tween: So, keyframes: So, spring: lm };
function Po({
  autoplay: e = !0,
  delay: t = 0,
  driver: n = wA,
  keyframes: r,
  type: i = "keyframes",
  repeat: o = 0,
  repeatDelay: s = 0,
  repeatType: l = "loop",
  onPlay: a,
  onStop: u,
  onComplete: c,
  onUpdate: f,
  ...d
}) {
  let g = 1,
    y = !1,
    v,
    w;
  const h = () => {
    v && v(),
      (w = new Promise((N) => {
        v = N;
      }));
  };
  h();
  let p;
  const m = SA[i] || So;
  let A;
  m !== So &&
    typeof r[0] != "number" &&
    ((A = im([0, 100], r, { clamp: !1 })), (r = [0, 100]));
  const x = m({ ...d, keyframes: r });
  let T;
  l === "mirror" &&
    (T = m({
      ...d,
      keyframes: [...r].reverse(),
      velocity: -(d.velocity || 0),
    }));
  let k = "idle",
    P = null,
    j = null,
    L = null;
  x.calculatedDuration === null && o && (x.calculatedDuration = qc(x));
  const { calculatedDuration: q } = x;
  let xe = 1 / 0,
    Oe = 1 / 0;
  q !== null && ((xe = q + s), (Oe = xe * (o + 1) - s));
  let $ = 0;
  const J = (N) => {
      if (j === null) return;
      g > 0 && (j = Math.min(j, N)), P !== null ? ($ = P) : ($ = (N - j) * g);
      const W = $ - t,
        Xt = W < 0;
      ($ = Math.max(W, 0)), k === "finished" && P === null && ($ = Oe);
      let be = $,
        An = x;
      if (o) {
        const bo = $ / xe;
        let di = Math.floor(bo),
          Zt = bo % 1;
        !Zt && bo >= 1 && (Zt = 1),
          Zt === 1 && di--,
          (di = Math.min(di, o + 1));
        const gu = !!(di % 2);
        gu &&
          (l === "reverse"
            ? ((Zt = 1 - Zt), s && (Zt -= s / xe))
            : l === "mirror" && (An = T));
        let yu = hn(0, 1, Zt);
        $ > Oe && (yu = l === "reverse" && gu ? 1 : 0), (be = yu * xe);
      }
      const Te = Xt ? { done: !1, value: r[0] } : An.next(be);
      A && (Te.value = A(Te.value));
      let { done: Kt } = Te;
      !Xt && q !== null && (Kt = $ >= Oe);
      const Vm =
        P === null &&
        (k === "finished" || (k === "running" && Kt) || (g < 0 && $ <= 0));
      return f && f(Te.value), Vm && M(), Te;
    },
    Be = () => {
      p && p.stop(), (p = void 0);
    },
    Je = () => {
      (k = "idle"), Be(), h(), (j = L = null);
    },
    M = () => {
      (k = "finished"), c && c(), Be(), h();
    },
    R = () => {
      if (y) return;
      p || (p = n(J));
      const N = p.now();
      a && a(),
        P !== null ? (j = N - P) : (!j || k === "finished") && (j = N),
        (L = j),
        (P = null),
        (k = "running"),
        p.start();
    };
  e && R();
  const O = {
    then(N, W) {
      return w.then(N, W);
    },
    get time() {
      return ht($);
    },
    set time(N) {
      (N = zt(N)),
        ($ = N),
        P !== null || !p || g === 0 ? (P = N) : (j = p.now() - N / g);
    },
    get duration() {
      const N = x.calculatedDuration === null ? qc(x) : x.calculatedDuration;
      return ht(N);
    },
    get speed() {
      return g;
    },
    set speed(N) {
      N === g || !p || ((g = N), (O.time = ht($)));
    },
    get state() {
      return k;
    },
    play: R,
    pause: () => {
      (k = "paused"), (P = $);
    },
    stop: () => {
      (y = !0), k !== "idle" && ((k = "idle"), u && u(), Je());
    },
    cancel: () => {
      L !== null && J(L), Je();
    },
    complete: () => {
      k = "finished";
    },
    sample: (N) => ((j = 0), J(N)),
  };
  return O;
}
const PA = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor",
  ]),
  Li = 10,
  kA = 2e4,
  CA = (e, t) => t.type === "spring" || e === "backgroundColor" || !Fh(t.ease);
function EA(e, t, { onUpdate: n, onComplete: r, ...i }) {
  if (
    !(
      _h.waapi() &&
      PA.has(t) &&
      !i.repeatDelay &&
      i.repeatType !== "mirror" &&
      i.damping !== 0 &&
      i.type !== "inertia"
    )
  )
    return !1;
  let s = !1,
    l,
    a;
  const u = () => {
    a = new Promise((h) => {
      l = h;
    });
  };
  u();
  let { keyframes: c, duration: f = 300, ease: d, times: g } = i;
  if (CA(t, i)) {
    const h = Po({ ...i, repeat: 0, delay: 0 });
    let p = { done: !1, value: c[0] };
    const m = [];
    let A = 0;
    for (; !p.done && A < kA; ) (p = h.sample(A)), m.push(p.value), (A += Li);
    (g = void 0), (c = m), (f = A - Li), (d = "linear");
  }
  const y = Iv(e.owner.current, t, c, { ...i, duration: f, ease: d, times: g }),
    v = () => y.cancel(),
    w = () => {
      G.update(v), l(), u();
    };
  return (
    (y.onfinish = () => {
      e.set(zv(c, i)), r && r(), w();
    }),
    {
      then(h, p) {
        return a.then(h, p);
      },
      get time() {
        return ht(y.currentTime || 0);
      },
      set time(h) {
        y.currentTime = zt(h);
      },
      get speed() {
        return y.playbackRate;
      },
      set speed(h) {
        y.playbackRate = h;
      },
      get duration() {
        return ht(f);
      },
      play: () => {
        s || (y.play(), At(v));
      },
      pause: () => y.pause(),
      stop: () => {
        if (((s = !0), y.playState === "idle")) return;
        const { currentTime: h } = y;
        if (h) {
          const p = Po({ ...i, autoplay: !1 });
          e.setWithVelocity(p.sample(h - Li).value, p.sample(h).value, Li);
        }
        w();
      },
      complete: () => y.finish(),
      cancel: w,
    }
  );
}
function TA({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
  const i = () => (
    n && n(e[e.length - 1]),
    r && r(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: re,
      pause: re,
      stop: re,
      then: (o) => (o(), Promise.resolve()),
      cancel: re,
      complete: re,
    }
  );
  return t
    ? Po({ keyframes: [0, 1], duration: 0, delay: t, onComplete: i })
    : i();
}
const MA = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  DA = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  VA = { type: "keyframes", duration: 0.8 },
  LA = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  RA = (e, { keyframes: t }) =>
    t.length > 2
      ? VA
      : yn.has(e)
      ? e.startsWith("scale")
        ? DA(t[1])
        : MA
      : LA,
  Hl = (e, t) =>
    e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" && Ht.test(t) && !t.startsWith("url("))
        ),
  NA = new Set(["brightness", "contrast", "saturate", "opacity"]);
function jA(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Zo) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let o = NA.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const OA = /([a-z-]*)\(.*?\)/g,
  Wl = {
    ...Ht,
    getAnimatableNone: (e) => {
      const t = e.match(OA);
      return t ? t.map(jA).join(" ") : e;
    },
  },
  BA = {
    ...xh,
    color: me,
    backgroundColor: me,
    outlineColor: me,
    fill: me,
    stroke: me,
    borderColor: me,
    borderTopColor: me,
    borderRightColor: me,
    borderBottomColor: me,
    borderLeftColor: me,
    filter: Wl,
    WebkitFilter: Wl,
  },
  cu = (e) => BA[e];
function fu(e, t) {
  let n = cu(e);
  return (
    n !== Wl && (n = Ht), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
function FA({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: l,
  from: a,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function $c(e) {
  return (
    e === 0 ||
    (typeof e == "string" && parseFloat(e) === 0 && e.indexOf(" ") === -1)
  );
}
function Jc(e) {
  return typeof e == "number" ? 0 : fu("", e);
}
function am(e, t) {
  return e[t] || e.default || e;
}
function IA(e, [...t]) {
  for (let n = 0; n < t.length; n++)
    t[n] === null && (t[n] = n === 0 ? e : t[n - 1]);
  return t;
}
function zA(e, t, n, r) {
  const i = Hl(t, n);
  let o = r.from !== void 0 ? r.from : e.get();
  return (
    o === "none" && i && typeof n == "string"
      ? (o = fu(t, n))
      : $c(o) && typeof n == "string"
      ? (o = Jc(n))
      : !Array.isArray(n) && $c(n) && typeof o == "string" && (n = Jc(o)),
    Array.isArray(n) ? IA(o, n) : [o, n]
  );
}
const du =
  (e, t, n, r = {}) =>
  (i) => {
    const o = am(r, e) || {},
      s = o.delay || r.delay || 0;
    let { elapsed: l = 0 } = r;
    l = l - zt(s);
    const a = zA(t, e, n, o),
      u = a[0],
      c = a[a.length - 1],
      f = Hl(e, u),
      d = Hl(e, c);
    let g = {
      keyframes: a,
      velocity: t.getVelocity(),
      ease: "easeOut",
      ...o,
      delay: -l,
      onUpdate: (y) => {
        t.set(y), o.onUpdate && o.onUpdate(y);
      },
      onComplete: () => {
        i(), o.onComplete && o.onComplete();
      },
    };
    if (
      (FA(o) || (g = { ...g, ...RA(e, g) }),
      g.duration && (g.duration = zt(g.duration)),
      g.repeatDelay && (g.repeatDelay = zt(g.repeatDelay)),
      !f || !d || Fv.current || o.type === !1)
    )
      return TA(g);
    if (
      t.owner &&
      t.owner.current instanceof HTMLElement &&
      !t.owner.getProps().onUpdate
    ) {
      const y = EA(t, e, g);
      if (y) return y;
    }
    return Po(g);
  };
function ko(e) {
  return !!(Ee(e) && e.add);
}
const _A = (e) => /^\-?\d*\.?\d+$/.test(e),
  UA = (e) => /^0[^.\s]+$/.test(e);
function pu(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function hu(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class mu {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return pu(this.subscriptions, t), () => hu(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const HA = (e) => !isNaN(parseFloat(e));
class WA {
  constructor(t, n = {}) {
    (this.version = "10.12.5"),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        (this.prev = this.current), (this.current = r);
        const { delta: o, timestamp: s } = se;
        this.lastUpdated !== s &&
          ((this.timeDelta = o),
          (this.lastUpdated = s),
          G.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.scheduleVelocityCheck = () => G.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: r }) => {
        r !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = HA(this.current)),
      (this.owner = n.owner);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new mu());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            G.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), (this.prev = t), (this.timeDelta = r);
  }
  jump(t) {
    this.updateAndNotify(t),
      (this.prev = t),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity
      ? om(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0;
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function qn(e, t) {
  return new WA(e, t);
}
const um = (e) => (t) => t.test(e),
  QA = { test: (e) => e === "auto", parse: (e) => e },
  cm = [vn, V, st, St, Z0, K0, QA],
  ar = (e) => cm.find(um(e)),
  YA = [...cm, me, Ht],
  GA = (e) => YA.find(um(e));
function XA(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, qn(n));
}
function KA(e, t) {
  const n = Jo(e, t);
  let {
    transitionEnd: r = {},
    transition: i = {},
    ...o
  } = n ? e.makeTargetAnimatable(n, !1) : {};
  o = { ...o, ...r };
  for (const s in o) {
    const l = uv(o[s]);
    XA(e, s, l);
  }
}
function ZA(e, t, n) {
  var r, i;
  const o = Object.keys(t).filter((l) => !e.hasValue(l)),
    s = o.length;
  if (s)
    for (let l = 0; l < s; l++) {
      const a = o[l],
        u = t[a];
      let c = null;
      Array.isArray(u) && (c = u[0]),
        c === null &&
          (c =
            (i = (r = n[a]) !== null && r !== void 0 ? r : e.readValue(a)) !==
              null && i !== void 0
              ? i
              : t[a]),
        c != null &&
          (typeof c == "string" && (_A(c) || UA(c))
            ? (c = parseFloat(c))
            : !GA(c) && Ht.test(u) && (c = fu(a, u)),
          e.addValue(a, qn(c, { owner: e })),
          n[a] === void 0 && (n[a] = c),
          c !== null && e.setBaseTarget(a, c));
    }
}
function qA(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function $A(e, t, n) {
  const r = {};
  for (const i in e) {
    const o = qA(i, t);
    if (o !== void 0) r[i] = o;
    else {
      const s = n.getValue(i);
      s && (r[i] = s.get());
    }
  }
  return r;
}
function JA({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function fm(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let {
    transition: o = e.getDefaultTransition(),
    transitionEnd: s,
    ...l
  } = e.makeTargetAnimatable(t);
  const a = e.getValue("willChange");
  r && (o = r);
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const f in l) {
    const d = e.getValue(f),
      g = l[f];
    if (!d || g === void 0 || (c && JA(c, f))) continue;
    const y = { delay: n, elapsed: 0, ...o };
    if (window.HandoffAppearAnimations && !d.hasAnimated) {
      const w = e.getProps()[Ov];
      w && (y.elapsed = window.HandoffAppearAnimations(w, f, d, G));
    }
    d.start(du(f, d, g, e.shouldReduceMotion && yn.has(f) ? { type: !1 } : y));
    const v = d.animation;
    ko(a) && (a.add(f), v.then(() => a.remove(f))), u.push(v);
  }
  return (
    s &&
      Promise.all(u).then(() => {
        s && KA(e, s);
      }),
    u
  );
}
function Ql(e, t, n = {}) {
  const r = Jo(e, t, n.custom);
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = r ? () => Promise.all(fm(e, r, n)) : () => Promise.resolve(),
    s =
      e.variantChildren && e.variantChildren.size
        ? (a = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: c,
              staggerDirection: f,
            } = i;
            return bA(e, t, u + a, c, f, n);
          }
        : () => Promise.resolve(),
    { when: l } = i;
  if (l) {
    const [a, u] = l === "beforeChildren" ? [o, s] : [s, o];
    return a().then(() => u());
  } else return Promise.all([o(), s(n.delay)]);
}
function bA(e, t, n = 0, r = 0, i = 1, o) {
  const s = [],
    l = (e.variantChildren.size - 1) * r,
    a = i === 1 ? (u = 0) => u * r : (u = 0) => l - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(e1)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          s.push(
            Ql(u, t, { ...o, delay: n + a(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(s)
  );
}
function e1(e, t) {
  return e.sortNodePosition(t);
}
function t1(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => Ql(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = Ql(e, t, n);
  else {
    const i = typeof t == "function" ? Jo(e, t, n.custom) : t;
    r = Promise.all(fm(e, i, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const n1 = [...qa].reverse(),
  r1 = qa.length;
function i1(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => t1(e, n, r)));
}
function o1(e) {
  let t = i1(e);
  const n = l1();
  let r = !0;
  const i = (a, u) => {
    const c = Jo(e, u);
    if (c) {
      const { transition: f, transitionEnd: d, ...g } = c;
      a = { ...a, ...g, ...d };
    }
    return a;
  };
  function o(a) {
    t = a(e);
  }
  function s(a, u) {
    const c = e.getProps(),
      f = e.getVariantContext(!0) || {},
      d = [],
      g = new Set();
    let y = {},
      v = 1 / 0;
    for (let h = 0; h < r1; h++) {
      const p = n1[h],
        m = n[p],
        A = c[p] !== void 0 ? c[p] : f[p],
        x = qr(A),
        T = p === u ? m.isActive : null;
      T === !1 && (v = h);
      let k = A === f[p] && A !== c[p] && x;
      if (
        (k && r && e.manuallyAnimateOnMount && (k = !1),
        (m.protectedKeys = { ...y }),
        (!m.isActive && T === null) ||
          (!A && !m.prevProp) ||
          Xo(A) ||
          typeof A == "boolean")
      )
        continue;
      const P = s1(m.prevProp, A);
      let j = P || (p === u && m.isActive && !k && x) || (h > v && x);
      const L = Array.isArray(A) ? A : [A];
      let q = L.reduce(i, {});
      T === !1 && (q = {});
      const { prevResolvedValues: xe = {} } = m,
        Oe = { ...xe, ...q },
        $ = (J) => {
          (j = !0), g.delete(J), (m.needsAnimating[J] = !0);
        };
      for (const J in Oe) {
        const Be = q[J],
          Je = xe[J];
        y.hasOwnProperty(J) ||
          (Be !== Je
            ? xo(Be) && xo(Je)
              ? !Oh(Be, Je) || P
                ? $(J)
                : (m.protectedKeys[J] = !0)
              : Be !== void 0
              ? $(J)
              : g.add(J)
            : Be !== void 0 && g.has(J)
            ? $(J)
            : (m.protectedKeys[J] = !0));
      }
      (m.prevProp = A),
        (m.prevResolvedValues = q),
        m.isActive && (y = { ...y, ...q }),
        r && e.blockInitialAnimation && (j = !1),
        j &&
          !k &&
          d.push(
            ...L.map((J) => ({ animation: J, options: { type: p, ...a } }))
          );
    }
    if (g.size) {
      const h = {};
      g.forEach((p) => {
        const m = e.getBaseTarget(p);
        m !== void 0 && (h[p] = m);
      }),
        d.push({ animation: h });
    }
    let w = !!d.length;
    return (
      r && c.initial === !1 && !e.manuallyAnimateOnMount && (w = !1),
      (r = !1),
      w ? t(d) : Promise.resolve()
    );
  }
  function l(a, u, c) {
    var f;
    if (n[a].isActive === u) return Promise.resolve();
    (f = e.variantChildren) === null ||
      f === void 0 ||
      f.forEach((g) => {
        var y;
        return (y = g.animationState) === null || y === void 0
          ? void 0
          : y.setActive(a, u);
      }),
      (n[a].isActive = u);
    const d = s(c, a);
    for (const g in n) n[g].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: s,
    setActive: l,
    setAnimateFunction: o,
    getState: () => n,
  };
}
function s1(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Oh(t, e) : !1;
}
function qt(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function l1() {
  return {
    animate: qt(!0),
    whileInView: qt(),
    whileHover: qt(),
    whileTap: qt(),
    whileDrag: qt(),
    whileFocus: qt(),
    exit: qt(),
  };
}
class a1 extends Gt {
  constructor(t) {
    super(t), t.animationState || (t.animationState = o1(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Xo(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let u1 = 0;
class c1 extends Gt {
  constructor() {
    super(...arguments), (this.id = u1++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
        isPresent: t,
        onExitComplete: n,
        custom: r,
      } = this.node.presenceContext,
      { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === i) return;
    const o = this.node.animationState.setActive("exit", !t, {
      custom: r ?? this.node.getProps().custom,
    });
    n && !t && o.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const f1 = { animation: { Feature: a1 }, exit: { Feature: c1 } },
  bc = (e, t) => Math.abs(e - t);
function d1(e, t) {
  const n = bc(e.x, t.x),
    r = bc(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class dm {
  constructor(t, n, { transformPagePoint: r } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const u = Bs(this.lastMoveEventInfo, this.history),
          c = this.startEvent !== null,
          f = d1(u.offset, { x: 0, y: 0 }) >= 3;
        if (!c && !f) return;
        const { point: d } = u,
          { timestamp: g } = se;
        this.history.push({ ...d, timestamp: g });
        const { onStart: y, onMove: v } = this.handlers;
        c ||
          (y && y(this.lastMoveEvent, u),
          (this.startEvent = this.lastMoveEvent)),
          v && v(this.lastMoveEvent, u);
      }),
      (this.handlePointerMove = (u, c) => {
        (this.lastMoveEvent = u),
          (this.lastMoveEventInfo = Os(c, this.transformPagePoint)),
          G.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (u, c) => {
        if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
          return;
        const { onEnd: f, onSessionEnd: d } = this.handlers,
          g = Bs(
            u.type === "pointercancel"
              ? this.lastMoveEventInfo
              : Os(c, this.transformPagePoint),
            this.history
          );
        this.startEvent && f && f(u, g), d && d(u, g);
      }),
      !Dh(t))
    )
      return;
    (this.handlers = n), (this.transformPagePoint = r);
    const i = qo(t),
      o = Os(i, this.transformPagePoint),
      { point: s } = o,
      { timestamp: l } = se;
    this.history = [{ ...s, timestamp: l }];
    const { onSessionStart: a } = n;
    a && a(t, Bs(o, this.history)),
      (this.removeListeners = It(
        pt(window, "pointermove", this.handlePointerMove),
        pt(window, "pointerup", this.handlePointerUp),
        pt(window, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), At(this.updatePoint);
  }
}
function Os(e, t) {
  return t ? { point: t(e.point) } : e;
}
function ef(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Bs({ point: e }, t) {
  return {
    point: e,
    delta: ef(e, pm(t)),
    offset: ef(e, p1(t)),
    velocity: h1(t, 0.1),
  };
}
function p1(e) {
  return e[0];
}
function pm(e) {
  return e[e.length - 1];
}
function h1(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = pm(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > zt(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const o = ht(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function Re(e) {
  return e.max - e.min;
}
function Yl(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function tf(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = Y(t.min, t.max, e.origin)),
    (e.scale = Re(n) / Re(t)),
    (Yl(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = Y(n.min, n.max, e.origin) - e.originPoint),
    (Yl(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Dr(e, t, n, r) {
  tf(e.x, t.x, n.x, r ? r.originX : void 0),
    tf(e.y, t.y, n.y, r ? r.originY : void 0);
}
function nf(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Re(t));
}
function m1(e, t, n) {
  nf(e.x, t.x, n.x), nf(e.y, t.y, n.y);
}
function rf(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Re(t));
}
function Vr(e, t, n) {
  rf(e.x, t.x, n.x), rf(e.y, t.y, n.y);
}
function g1(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? Y(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? Y(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function of(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function y1(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: of(e.x, n, i), y: of(e.y, t, r) };
}
function sf(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function v1(e, t) {
  return { x: sf(e.x, t.x), y: sf(e.y, t.y) };
}
function A1(e, t) {
  let n = 0.5;
  const r = Re(e),
    i = Re(t);
  return (
    i > r
      ? (n = br(t.min, t.max - r, e.min))
      : r > i && (n = br(e.min, e.max - i, t.min)),
    hn(0, 1, n)
  );
}
function x1(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Gl = 0.35;
function w1(e = Gl) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Gl),
    { x: lf(e, "left", "right"), y: lf(e, "top", "bottom") }
  );
}
function lf(e, t, n) {
  return { min: af(e, t), max: af(e, n) };
}
function af(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const uf = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Lr = () => ({ x: uf(), y: uf() }),
  cf = () => ({ min: 0, max: 0 }),
  ee = () => ({ x: cf(), y: cf() });
function nt(e) {
  return [e("x"), e("y")];
}
function hm({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function S1({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function P1(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Fs(e) {
  return e === void 0 || e === 1;
}
function Xl({ scale: e, scaleX: t, scaleY: n }) {
  return !Fs(e) || !Fs(t) || !Fs(n);
}
function bt(e) {
  return Xl(e) || mm(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function mm(e) {
  return ff(e.x) || ff(e.y);
}
function ff(e) {
  return e && e !== "0%";
}
function Co(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function df(e, t, n, r, i) {
  return i !== void 0 && (e = Co(e, i, r)), Co(e, n, r) + t;
}
function Kl(e, t = 0, n = 1, r, i) {
  (e.min = df(e.min, t, n, r, i)), (e.max = df(e.max, t, n, r, i));
}
function gm(e, { x: t, y: n }) {
  Kl(e.x, t.translate, t.scale, t.originPoint),
    Kl(e.y, n.translate, n.scale, n.originPoint);
}
function k1(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let l = 0; l < i; l++) {
    (o = n[l]), (s = o.projectionDelta);
    const a = o.instance;
    (a && a.style && a.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        On(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), gm(e, s)),
      r && bt(o.latestValues) && On(e, o.latestValues));
  }
  (t.x = pf(t.x)), (t.y = pf(t.y));
}
function pf(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function Ct(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function hf(e, t, [n, r, i]) {
  const o = t[i] !== void 0 ? t[i] : 0.5,
    s = Y(e.min, e.max, o);
  Kl(e, t[n], t[r], s, t.scale);
}
const C1 = ["x", "scaleX", "originX"],
  E1 = ["y", "scaleY", "originY"];
function On(e, t) {
  hf(e.x, t, C1), hf(e.y, t, E1);
}
function ym(e, t) {
  return hm(P1(e.getBoundingClientRect(), t));
}
function T1(e, t, n) {
  const r = ym(e, n),
    { scroll: i } = t;
  return i && (Ct(r.x, i.offset.x), Ct(r.y, i.offset.y)), r;
}
const M1 = new WeakMap();
class D1 {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = ee()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (a) => {
        this.stopAnimation(), n && this.snapToCursor(qo(a, "page").point);
      },
      o = (a, u) => {
        const { drag: c, dragPropagation: f, onDragStart: d } = this.getProps();
        if (
          c &&
          !f &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = Lh(c)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          nt((y) => {
            let v = this.getAxisMotionValue(y).get() || 0;
            if (st.test(v)) {
              const { projection: w } = this.visualElement;
              if (w && w.layout) {
                const h = w.layout.layoutBox[y];
                h && (v = Re(h) * (parseFloat(v) / 100));
              }
            }
            this.originPoint[y] = v;
          }),
          d && G.update(() => d(a, u), !1, !0);
        const { animationState: g } = this.visualElement;
        g && g.setActive("whileDrag", !0);
      },
      s = (a, u) => {
        const {
          dragPropagation: c,
          dragDirectionLock: f,
          onDirectionLock: d,
          onDrag: g,
        } = this.getProps();
        if (!c && !this.openGlobalLock) return;
        const { offset: y } = u;
        if (f && this.currentDirection === null) {
          (this.currentDirection = V1(y)),
            this.currentDirection !== null && d && d(this.currentDirection);
          return;
        }
        this.updateAxis("x", u.point, y),
          this.updateAxis("y", u.point, y),
          this.visualElement.render(),
          g && g(a, u);
      },
      l = (a, u) => this.stop(a, u);
    this.panSession = new dm(
      t,
      { onSessionStart: i, onStart: o, onMove: s, onSessionEnd: l },
      { transformPagePoint: this.visualElement.getTransformPagePoint() }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && G.update(() => o(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Ri(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = g1(s, this.constraints[t], this.elastic[t])),
      o.set(s);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      { layout: r } = this.visualElement.projection || {},
      i = this.constraints;
    t && Nn(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
      ? (this.constraints = y1(r.layoutBox, t))
      : (this.constraints = !1),
      (this.elastic = w1(n)),
      i !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        nt((o) => {
          this.getAxisMotionValue(o) &&
            (this.constraints[o] = x1(r.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Nn(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = T1(r, i.root, this.visualElement.getTransformPagePoint());
    let s = v1(i.layout.layoutBox, o);
    if (n) {
      const l = n(S1(s));
      (this.hasMutatedConstraints = !!l), l && (s = hm(l));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: s,
        onDragTransitionEnd: l,
      } = this.getProps(),
      a = this.constraints || {},
      u = nt((c) => {
        if (!Ri(c, n, this.currentDirection)) return;
        let f = (a && a[c]) || {};
        s && (f = { min: 0, max: 0 });
        const d = i ? 200 : 1e6,
          g = i ? 40 : 1e7,
          y = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: d,
            bounceDamping: g,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...f,
          };
        return this.startAxisValueAnimation(c, y);
      });
    return Promise.all(u).then(l);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(du(t, r, 0, n));
  }
  stopAnimation() {
    nt((t) => this.getAxisMotionValue(t).stop());
  }
  getAxisMotionValue(t) {
    const n = "_drag" + t.toUpperCase(),
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    nt((n) => {
      const { drag: r } = this.getProps();
      if (!Ri(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: l } = i.layout.layoutBox[n];
        o.set(t[n] - Y(s, l, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Nn(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    nt((s) => {
      const l = this.getAxisMotionValue(s);
      if (l) {
        const a = l.get();
        i[s] = A1({ min: a, max: a }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      nt((s) => {
        if (!Ri(s, t, null)) return;
        const l = this.getAxisMotionValue(s),
          { min: a, max: u } = this.constraints[s];
        l.set(Y(a, u, i[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    M1.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = pt(t, "pointerdown", (a) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(a);
      }),
      r = () => {
        const { dragConstraints: a } = this.getProps();
        Nn(a) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
    const s = ft(window, "resize", () => this.scalePositionWithinConstraints()),
      l = i.addEventListener(
        "didUpdate",
        ({ delta: a, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (nt((c) => {
              const f = this.getAxisMotionValue(c);
              f &&
                ((this.originPoint[c] += a[c].translate),
                f.set(f.get() + a[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      s(), n(), o(), l && l();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: s = Gl,
        dragMomentum: l = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: l,
    };
  }
}
function Ri(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function V1(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class L1 extends Gt {
  constructor(t) {
    super(t),
      (this.removeGroupControls = re),
      (this.removeListeners = re),
      (this.controls = new D1(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || re);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const mf = (e) => (t, n) => {
  e && G.update(() => e(t, n));
};
class R1 extends Gt {
  constructor() {
    super(...arguments), (this.removePointerDownListener = re);
  }
  onPointerDown(t) {
    this.session = new dm(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: mf(t),
      onStart: mf(n),
      onMove: r,
      onEnd: (o, s) => {
        delete this.session, i && G.update(() => i(o, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = pt(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function N1() {
  const e = E.useContext(Za);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = E.useId();
  return E.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
}
function gf(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const ur = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (V.test(e)) e = parseFloat(e);
        else return e;
      const n = gf(e, t.target.x),
        r = gf(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  j1 = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = Ht.parse(e);
      if (i.length > 5) return r;
      const o = Ht.createTransformer(e),
        s = typeof i[0] != "number" ? 1 : 0,
        l = n.x.scale * t.x,
        a = n.y.scale * t.y;
      (i[0 + s] /= l), (i[1 + s] /= a);
      const u = Y(l, a, 0.5);
      return (
        typeof i[2 + s] == "number" && (i[2 + s] /= u),
        typeof i[3 + s] == "number" && (i[3 + s] /= u),
        o(i)
      );
    },
  };
class O1 extends To.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: o } = t;
    U0(B1),
      o &&
        (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Er.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: o,
      } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = o),
        i || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? s.promote()
            : s.relegate() ||
              G.postRender(() => {
                const l = s.getStack();
                (!l || !l.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      !t.currentAnimation && t.isLead() && this.safeToRemove());
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function vm(e) {
  const [t, n] = N1(),
    r = E.useContext(hh);
  return To.createElement(O1, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: E.useContext(mh),
    isPresent: t,
    safeToRemove: n,
  });
}
const B1 = {
    borderRadius: {
      ...ur,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: ur,
    borderTopRightRadius: ur,
    borderBottomLeftRadius: ur,
    borderBottomRightRadius: ur,
    boxShadow: j1,
  },
  Am = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  F1 = Am.length,
  yf = (e) => (typeof e == "string" ? parseFloat(e) : e),
  vf = (e) => typeof e == "number" || V.test(e);
function I1(e, t, n, r, i, o) {
  i
    ? ((e.opacity = Y(0, n.opacity !== void 0 ? n.opacity : 1, z1(r))),
      (e.opacityExit = Y(t.opacity !== void 0 ? t.opacity : 1, 0, _1(r))))
    : o &&
      (e.opacity = Y(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let s = 0; s < F1; s++) {
    const l = `border${Am[s]}Radius`;
    let a = Af(t, l),
      u = Af(n, l);
    if (a === void 0 && u === void 0) continue;
    a || (a = 0),
      u || (u = 0),
      a === 0 || u === 0 || vf(a) === vf(u)
        ? ((e[l] = Math.max(Y(yf(a), yf(u), r), 0)),
          (st.test(u) || st.test(a)) && (e[l] += "%"))
        : (e[l] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = Y(t.rotate || 0, n.rotate || 0, r));
}
function Af(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const z1 = xm(0, 0.5, lu),
  _1 = xm(0.5, 0.95, re);
function xm(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(br(e, t, r)));
}
function xf(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Fe(e, t) {
  xf(e.x, t.x), xf(e.y, t.y);
}
function wf(e, t, n, r, i) {
  return (
    (e -= t), (e = Co(e, 1 / n, r)), i !== void 0 && (e = Co(e, 1 / i, r)), e
  );
}
function U1(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (st.test(t) &&
      ((t = parseFloat(t)), (t = Y(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let l = Y(o.min, o.max, r);
  e === o && (l -= t),
    (e.min = wf(e.min, t, n, l, i)),
    (e.max = wf(e.max, t, n, l, i));
}
function Sf(e, t, [n, r, i], o, s) {
  U1(e, t[n], t[r], t[i], t.scale, o, s);
}
const H1 = ["x", "scaleX", "originX"],
  W1 = ["y", "scaleY", "originY"];
function Pf(e, t, n, r) {
  Sf(e.x, t, H1, n ? n.x : void 0, r ? r.x : void 0),
    Sf(e.y, t, W1, n ? n.y : void 0, r ? r.y : void 0);
}
function kf(e) {
  return e.translate === 0 && e.scale === 1;
}
function wm(e) {
  return kf(e.x) && kf(e.y);
}
function Zl(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function Cf(e) {
  return Re(e.x) / Re(e.y);
}
class Q1 {
  constructor() {
    this.members = [];
  }
  add(t) {
    pu(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (hu(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Ef(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y;
  if (
    ((i || o) && (r = `translate3d(${i}px, ${o}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { rotate: a, rotateX: u, rotateY: c } = n;
    a && (r += `rotate(${a}deg) `),
      u && (r += `rotateX(${u}deg) `),
      c && (r += `rotateY(${c}deg) `);
  }
  const s = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (s !== 1 || l !== 1) && (r += `scale(${s}, ${l})`), r || "none";
}
const Y1 = (e, t) => e.depth - t.depth;
class G1 {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    pu(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    hu(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(Y1),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function X1(e, t) {
  const n = performance.now(),
    r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (At(r), e(o - t));
    };
  return G.read(r, !0), () => At(r);
}
function K1(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function Z1(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function q1(e, t, n) {
  const r = Ee(e) ? e : qn(e);
  return r.start(du("", r, t, n)), r.animation;
}
const Tf = ["", "X", "Y", "Z"],
  Mf = 1e3;
let $1 = 0;
const en = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function Sm({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s, l = {}, a = t == null ? void 0 : t()) {
      (this.id = $1++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.potentialNodes = new Map()),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (en.totalNodes =
            en.resolvedTargetDeltas =
            en.recalculatedProjection =
              0),
            this.nodes.forEach(ex),
            this.nodes.forEach(ix),
            this.nodes.forEach(ox),
            this.nodes.forEach(tx),
            K1(en);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.elementId = s),
        (this.latestValues = l),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0),
        s && this.root.registerPotentialNode(s, this);
      for (let u = 0; u < this.path.length; u++)
        this.path[u].shouldResetTransform = !0;
      this.root === this && (this.nodes = new G1());
    }
    addEventListener(s, l) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new mu()),
        this.eventHandlers.get(s).add(l)
      );
    }
    notifyListeners(s, ...l) {
      const a = this.eventHandlers.get(s);
      a && a.notify(...l);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    registerPotentialNode(s, l) {
      this.potentialNodes.set(s, l);
    }
    mount(s, l = !1) {
      if (this.instance) return;
      (this.isSVG = Z1(s)), (this.instance = s);
      const { layoutId: a, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.elementId && this.root.potentialNodes.delete(this.elementId),
        l && (u || a) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const d = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = X1(d, 250)),
            Er.hasAnimatedSinceResize &&
              ((Er.hasAnimatedSinceResize = !1), this.nodes.forEach(Vf));
        });
      }
      a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          c &&
          (a || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: g,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const v =
                  this.options.transition || c.getDefaultTransition() || cx,
                { onLayoutAnimationStart: w, onLayoutAnimationComplete: h } =
                  c.getProps(),
                p = !this.targetLayout || !Zl(this.targetLayout, y) || g,
                m = !d && g;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                m ||
                (d && (p || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, m);
                const A = { ...am(v, "layout"), onPlay: w, onComplete: h };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((A.delay = 0), (A.type = !1)),
                  this.startAnimation(A);
              } else
                !d && this.animationProgress === 0 && Vf(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = y;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        At(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(sx),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: l, layout: a } = this.options;
      if (l === void 0 && !a) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    didUpdate() {
      if (this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Df);
        return;
      }
      this.isUpdating &&
        ((this.isUpdating = !1),
        this.potentialNodes.size &&
          (this.potentialNodes.forEach(fx), this.potentialNodes.clear()),
        this.nodes.forEach(rx),
        this.nodes.forEach(J1),
        this.nodes.forEach(b1),
        this.clearAllSnapshots(),
        Hn.update.process(se),
        Hn.preRender.process(se),
        Hn.render.process(se));
    }
    clearAllSnapshots() {
      this.nodes.forEach(nx), this.sharedNodes.forEach(lx);
    }
    scheduleUpdateProjection() {
      G.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      G.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let a = 0; a < this.path.length; a++) this.path[a].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = ee()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: l } = this.options;
      l &&
        l.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = "measure") {
      let l = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === s &&
        (l = !1),
        l &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: s,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!i) return;
      const s = this.isLayoutDirty || this.shouldResetTransform,
        l = this.projectionDelta && !wm(this.projectionDelta),
        a = this.getTransformTemplate(),
        u = a ? a(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        (l || bt(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const l = this.measurePageBox();
      let a = this.removeElementScroll(l);
      return (
        s && (a = this.removeTransform(a)),
        dx(a),
        {
          animationId: this.root.animationId,
          measuredBox: l,
          layoutBox: a,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: s } = this.options;
      if (!s) return ee();
      const l = s.measureViewportBox(),
        { scroll: a } = this.root;
      return a && (Ct(l.x, a.offset.x), Ct(l.y, a.offset.y)), l;
    }
    removeElementScroll(s) {
      const l = ee();
      Fe(l, s);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a],
          { scroll: c, options: f } = u;
        if (u !== this.root && c && f.layoutScroll) {
          if (c.isRoot) {
            Fe(l, s);
            const { scroll: d } = this.root;
            d && (Ct(l.x, -d.offset.x), Ct(l.y, -d.offset.y));
          }
          Ct(l.x, c.offset.x), Ct(l.y, c.offset.y);
        }
      }
      return l;
    }
    applyTransform(s, l = !1) {
      const a = ee();
      Fe(a, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !l &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          On(a, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          bt(c.latestValues) && On(a, c.latestValues);
      }
      return bt(this.latestValues) && On(a, this.latestValues), a;
    }
    removeTransform(s) {
      const l = ee();
      Fe(l, s);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a];
        if (!u.instance || !bt(u.latestValues)) continue;
        Xl(u.latestValues) && u.updateSnapshot();
        const c = ee(),
          f = u.measurePageBox();
        Fe(c, f),
          Pf(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return bt(this.latestValues) && Pf(l, this.latestValues), l;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== se.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var l;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== a;
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((l = this.parent) === null || l === void 0) &&
            l.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = se.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const g = this.getClosestProjectingParent();
          g && g.layout
            ? ((this.relativeParent = g),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = ee()),
              (this.relativeTargetOrigin = ee()),
              Vr(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                g.layout.layoutBox
              ),
              Fe(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = ee()), (this.targetWithTransforms = ee())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                m1(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Fe(this.target, this.layout.layoutBox),
                gm(this.target, this.targetDelta))
              : Fe(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const g = this.getClosestProjectingParent();
            g &&
            !!g.resumingFrom == !!this.resumingFrom &&
            !g.options.layoutScroll &&
            g.target
              ? ((this.relativeParent = g),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = ee()),
                (this.relativeTargetOrigin = ee()),
                Vr(this.relativeTargetOrigin, this.target, g.target),
                Fe(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          en.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Xl(this.parent.latestValues) ||
          mm(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const l = this.getLead(),
        a = !!this.resumingFrom || this !== l;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === se.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || f))
      )
        return;
      Fe(this.layoutCorrected, this.layout.layoutBox),
        k1(this.layoutCorrected, this.treeScale, this.path, a);
      const { target: d } = l;
      if (!d) return;
      this.projectionDelta ||
        ((this.projectionDelta = Lr()),
        (this.projectionDeltaWithTransform = Lr()));
      const g = this.treeScale.x,
        y = this.treeScale.y,
        v = this.projectionTransform;
      Dr(this.projectionDelta, this.layoutCorrected, d, this.latestValues),
        (this.projectionTransform = Ef(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== v ||
          this.treeScale.x !== g ||
          this.treeScale.y !== y) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", d)),
        en.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), s)) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(s, l = !1) {
      const a = this.snapshot,
        u = a ? a.latestValues : {},
        c = { ...this.latestValues },
        f = Lr();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !l);
      const d = ee(),
        g = a ? a.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        v = g !== y,
        w = this.getStack(),
        h = !w || w.members.length <= 1,
        p = !!(v && !h && this.options.crossfade === !0 && !this.path.some(ux));
      this.animationProgress = 0;
      let m;
      (this.mixTargetDelta = (A) => {
        const x = A / 1e3;
        Lf(f.x, s.x, x),
          Lf(f.y, s.y, x),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Vr(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            ax(this.relativeTarget, this.relativeTargetOrigin, d, x),
            m && Zl(this.relativeTarget, m) && (this.isProjectionDirty = !1),
            m || (m = ee()),
            Fe(m, this.relativeTarget)),
          v &&
            ((this.animationValues = c), I1(c, u, this.latestValues, x, p, h)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = x);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (At(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = G.update(() => {
          (Er.hasAnimatedSinceResize = !0),
            (this.currentAnimation = q1(0, Mf, {
              ...s,
              onUpdate: (l) => {
                this.mixTargetDelta(l), s.onUpdate && s.onUpdate(l);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Mf),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: l,
        target: a,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!l || !a || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          Pm(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          a = this.target || ee();
          const f = Re(this.layout.layoutBox.x);
          (a.x.min = s.target.x.min), (a.x.max = a.x.min + f);
          const d = Re(this.layout.layoutBox.y);
          (a.y.min = s.target.y.min), (a.y.max = a.y.min + d);
        }
        Fe(l, a),
          On(l, c),
          Dr(this.projectionDeltaWithTransform, this.layoutCorrected, l, c);
      }
    }
    registerSharedNode(s, l) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new Q1()),
        this.sharedNodes.get(s).add(l);
      const u = l.options.initialPromotionConfig;
      l.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(l)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: l } = this.options;
      return l
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: l } = this.options;
      return l
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: l, preserveFollowOpacity: a } = {}) {
      const u = this.getStack();
      u && u.promote(this, a),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        l && this.setOptions({ transition: l });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let l = !1;
      const { latestValues: a } = s;
      if (((a.rotate || a.rotateX || a.rotateY || a.rotateZ) && (l = !0), !l))
        return;
      const u = {};
      for (let c = 0; c < Tf.length; c++) {
        const f = "rotate" + Tf[c];
        a[f] && ((u[f] = a[f]), s.setStaticValue(f, 0));
      }
      s.render();
      for (const c in u) s.setStaticValue(c, u[c]);
      s.scheduleRender();
    }
    getProjectionStyles(s = {}) {
      var l, a;
      const u = {};
      if (!this.instance || this.isSVG) return u;
      if (this.isVisible) u.visibility = "";
      else return { visibility: "hidden" };
      const c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = Yi(s.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const v = {};
        return (
          this.options.layoutId &&
            ((v.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (v.pointerEvents = Yi(s.pointerEvents) || "")),
          this.hasProjected &&
            !bt(this.latestValues) &&
            ((v.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          v
        );
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = Ef(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d
        )),
        c && (u.transform = c(d, u.transform));
      const { x: g, y } = this.projectionDelta;
      (u.transformOrigin = `${g.origin * 100}% ${y.origin * 100}% 0`),
        f.animationValues
          ? (u.opacity =
              f === this
                ? (a =
                    (l = d.opacity) !== null && l !== void 0
                      ? l
                      : this.latestValues.opacity) !== null && a !== void 0
                  ? a
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : d.opacityExit)
          : (u.opacity =
              f === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                ? d.opacityExit
                : 0);
      for (const v in vo) {
        if (d[v] === void 0) continue;
        const { correct: w, applyTo: h } = vo[v],
          p = u.transform === "none" ? d[v] : w(d[v], f);
        if (h) {
          const m = h.length;
          for (let A = 0; A < m; A++) u[h[A]] = p;
        } else u[v] = p;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents = f === this ? Yi(s.pointerEvents) || "" : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var l;
        return (l = s.currentAnimation) === null || l === void 0
          ? void 0
          : l.stop();
      }),
        this.root.nodes.forEach(Df),
        this.root.sharedNodes.clear();
    }
  };
}
function J1(e) {
  e.updateLayout();
}
function b1(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = n.source !== e.layout.source;
    o === "size"
      ? nt((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            g = Re(d);
          (d.min = r[f].min), (d.max = d.min + g);
        })
      : Pm(o, n.layoutBox, r) &&
        nt((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            g = Re(r[f]);
          (d.max = d.min + g),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + g));
        });
    const l = Lr();
    Dr(l, r, n.layoutBox);
    const a = Lr();
    s ? Dr(a, e.applyTransform(i, !0), n.measuredBox) : Dr(a, r, n.layoutBox);
    const u = !wm(l);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: g } = f;
        if (d && g) {
          const y = ee();
          Vr(y, n.layoutBox, d.layoutBox);
          const v = ee();
          Vr(v, r, g.layoutBox),
            Zl(y, v) || (c = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = v),
              (e.relativeTargetOrigin = y),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: a,
      layoutDelta: l,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function ex(e) {
  en.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function tx(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function nx(e) {
  e.clearSnapshot();
}
function Df(e) {
  e.clearMeasurements();
}
function rx(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Vf(e) {
  e.finishAnimation(), (e.targetDelta = e.relativeTarget = e.target = void 0);
}
function ix(e) {
  e.resolveTargetDelta();
}
function ox(e) {
  e.calcProjection();
}
function sx(e) {
  e.resetRotation();
}
function lx(e) {
  e.removeLeadSnapshot();
}
function Lf(e, t, n) {
  (e.translate = Y(t.translate, 0, n)),
    (e.scale = Y(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Rf(e, t, n, r) {
  (e.min = Y(t.min, n.min, r)), (e.max = Y(t.max, n.max, r));
}
function ax(e, t, n, r) {
  Rf(e.x, t.x, n.x, r), Rf(e.y, t.y, n.y, r);
}
function ux(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const cx = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
function fx(e, t) {
  let n = e.root;
  for (let o = e.path.length - 1; o >= 0; o--)
    if (e.path[o].instance) {
      n = e.path[o];
      break;
    }
  const i = (n && n !== e.root ? n.instance : document).querySelector(
    `[data-projection-id="${t}"]`
  );
  i && e.mount(i, !0);
}
function Nf(e) {
  (e.min = Math.round(e.min)), (e.max = Math.round(e.max));
}
function dx(e) {
  Nf(e.x), Nf(e.y);
}
function Pm(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !Yl(Cf(t), Cf(n), 0.2))
  );
}
const px = Sm({
    attachResizeListener: (e, t) => ft(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Is = { current: void 0 },
  km = Sm({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Is.current) {
        const e = new px(0, {});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Is.current = e);
      }
      return Is.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  hx = {
    pan: { Feature: R1 },
    drag: { Feature: L1, ProjectionNode: km, MeasureLayout: vm },
  },
  mx = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function gx(e) {
  const t = mx.exec(e);
  if (!t) return [,];
  const [, n, r] = t;
  return [n, r];
}
function ql(e, t, n = 1) {
  const [r, i] = gx(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  return o ? o.trim() : Fl(i) ? ql(i, t, n + 1) : i;
}
function yx(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element)) return { target: t, transitionEnd: n };
  n && (n = { ...n }),
    e.values.forEach((i) => {
      const o = i.get();
      if (!Fl(o)) return;
      const s = ql(o, r);
      s && i.set(s);
    });
  for (const i in t) {
    const o = t[i];
    if (!Fl(o)) continue;
    const s = ql(o, r);
    s && ((t[i] = s), n || (n = {}), n[i] === void 0 && (n[i] = o));
  }
  return { target: t, transitionEnd: n };
}
const vx = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
  ]),
  Cm = (e) => vx.has(e),
  Ax = (e) => Object.keys(e).some(Cm),
  jf = (e) => e === vn || e === V,
  Of = (e, t) => parseFloat(e.split(", ")[t]),
  Bf =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/);
      if (i) return Of(i[1], t);
      {
        const o = r.match(/^matrix\((.+)\)$/);
        return o ? Of(o[1], e) : 0;
      }
    },
  xx = new Set(["x", "y", "z"]),
  wx = ai.filter((e) => !xx.has(e));
function Sx(e) {
  const t = [];
  return (
    wx.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
const Ff = {
    width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
      e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
      e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, { top: t }) => parseFloat(t),
    left: (e, { left: t }) => parseFloat(t),
    bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
    right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
    x: Bf(4, 13),
    y: Bf(5, 14),
  },
  Px = (e, t, n) => {
    const r = t.measureViewportBox(),
      i = t.current,
      o = getComputedStyle(i),
      { display: s } = o,
      l = {};
    s === "none" && t.setStaticValue("display", e.display || "block"),
      n.forEach((u) => {
        l[u] = Ff[u](r, o);
      }),
      t.render();
    const a = t.measureViewportBox();
    return (
      n.forEach((u) => {
        const c = t.getValue(u);
        c && c.jump(l[u]), (e[u] = Ff[u](a, o));
      }),
      e
    );
  },
  kx = (e, t, n = {}, r = {}) => {
    (t = { ...t }), (r = { ...r });
    const i = Object.keys(t).filter(Cm);
    let o = [],
      s = !1;
    const l = [];
    if (
      (i.forEach((a) => {
        const u = e.getValue(a);
        if (!e.hasValue(a)) return;
        let c = n[a],
          f = ar(c);
        const d = t[a];
        let g;
        if (xo(d)) {
          const y = d.length,
            v = d[0] === null ? 1 : 0;
          (c = d[v]), (f = ar(c));
          for (let w = v; w < y && d[w] !== null; w++)
            g ? su(ar(d[w]) === g) : (g = ar(d[w]));
        } else g = ar(d);
        if (f !== g)
          if (jf(f) && jf(g)) {
            const y = u.get();
            typeof y == "string" && u.set(parseFloat(y)),
              typeof d == "string"
                ? (t[a] = parseFloat(d))
                : Array.isArray(d) && g === V && (t[a] = d.map(parseFloat));
          } else
            f != null &&
            f.transform &&
            g != null &&
            g.transform &&
            (c === 0 || d === 0)
              ? c === 0
                ? u.set(g.transform(c))
                : (t[a] = f.transform(d))
              : (s || ((o = Sx(e)), (s = !0)),
                l.push(a),
                (r[a] = r[a] !== void 0 ? r[a] : t[a]),
                u.jump(d));
      }),
      l.length)
    ) {
      const a = l.indexOf("height") >= 0 ? window.pageYOffset : null,
        u = Px(t, e, l);
      return (
        o.length &&
          o.forEach(([c, f]) => {
            e.getValue(c).set(f);
          }),
        e.render(),
        Go && a !== null && window.scrollTo({ top: a }),
        { target: u, transitionEnd: r }
      );
    } else return { target: t, transitionEnd: r };
  };
function Cx(e, t, n, r) {
  return Ax(t) ? kx(e, t, n, r) : { target: t, transitionEnd: r };
}
const Ex = (e, t, n, r) => {
    const i = yx(e, t, r);
    return (t = i.target), (r = i.transitionEnd), Cx(e, t, n, r);
  },
  $l = { current: null },
  Em = { current: !1 };
function Tx() {
  if (((Em.current = !0), !!Go))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => ($l.current = e.matches);
      e.addListener(t), t();
    } else $l.current = !1;
}
function Mx(e, t, n) {
  const { willChange: r } = t;
  for (const i in t) {
    const o = t[i],
      s = n[i];
    if (Ee(o)) e.addValue(i, o), ko(r) && r.add(i);
    else if (Ee(s)) e.addValue(i, qn(o, { owner: e })), ko(r) && r.remove(i);
    else if (s !== o)
      if (e.hasValue(i)) {
        const l = e.getValue(i);
        !l.hasAnimated && l.set(o);
      } else {
        const l = e.getStaticValue(i);
        e.addValue(i, qn(l !== void 0 ? l : o, { owner: e }));
      }
  }
  for (const i in n) t[i] === void 0 && e.removeValue(i);
  return t;
}
const If = new WeakMap(),
  Tm = Object.keys($r),
  Dx = Tm.length,
  zf = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  Vx = $a.length;
class Lx {
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      visualState: o,
    },
    s = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => G.render(this.render, !1, !0));
    const { latestValues: l, renderState: a } = o;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = a),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = s),
      (this.isControllingVariants = Ko(n)),
      (this.isVariantNode = dh(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const f in c) {
      const d = c[f];
      l[f] !== void 0 && Ee(d) && (d.set(l[f], !1), ko(u) && u.add(f));
    }
  }
  scrapeMotionValuesFromProps(t, n) {
    return {};
  }
  mount(t) {
    (this.current = t),
      If.set(t, this),
      this.projection && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      Em.current || Tx(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : $l.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    If.delete(this.current),
      this.projection && this.projection.unmount(),
      At(this.notifyUpdate),
      At(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = yn.has(t),
      i = n.on("change", (s) => {
        (this.latestValues[t] = s),
          this.props.onUpdate && G.update(this.notifyUpdate, !1, !0),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      o = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      i(), o();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, i, o, s) {
    let l, a;
    for (let u = 0; u < Dx; u++) {
      const c = Tm[u],
        {
          isEnabled: f,
          Feature: d,
          ProjectionNode: g,
          MeasureLayout: y,
        } = $r[c];
      g && (l = g),
        f(n) &&
          (!this.features[c] && d && (this.features[c] = new d(this)),
          y && (a = y));
    }
    if (!this.projection && l) {
      this.projection = new l(
        o,
        this.latestValues,
        this.parent && this.parent.projection
      );
      const {
        layoutId: u,
        layout: c,
        drag: f,
        dragConstraints: d,
        layoutScroll: g,
        layoutRoot: y,
      } = n;
      this.projection.setOptions({
        layoutId: u,
        layout: c,
        alwaysMeasureLayout: !!f || (d && Nn(d)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof c == "string" ? c : "both",
        initialPromotionConfig: s,
        layoutScroll: g,
        layoutRoot: y,
      });
    }
    return a;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted
        ? n.update(this.props, this.prevProps)
        : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : ee();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  makeTargetAnimatable(t, n = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, n);
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < zf.length; r++) {
      const i = zf[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = t["on" + i];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    (this.prevMotionValues = Mx(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < Vx; r++) {
      const i = $a[r],
        o = this.props[i];
      (qr(o) || o === !1) && (n[i] = o);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    n !== this.values.get(t) &&
      (this.removeValue(t), this.bindToMotionValue(t, n)),
      this.values.set(t, n),
      (this.latestValues[t] = n.get());
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = qn(n, { owner: this })), this.addValue(t, r)),
      r
    );
  }
  readValue(t) {
    return this.latestValues[t] !== void 0 || !this.current
      ? this.latestValues[t]
      : this.readValueFromInstance(this.current, t, this.options);
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props,
      i =
        typeof r == "string" || typeof r == "object"
          ? (n = ou(this.props, r)) === null || n === void 0
            ? void 0
            : n[t]
          : void 0;
    if (r && i !== void 0) return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !Ee(o)
      ? o
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new mu()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Mm extends Lx {
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  makeTargetAnimatableFromInstance(
    { transition: t, transitionEnd: n, ...r },
    { transformValues: i },
    o
  ) {
    let s = $A(r, t || {}, this);
    if ((i && (n && (n = i(n)), r && (r = i(r)), s && (s = i(s))), o)) {
      ZA(this, r, s);
      const l = Ex(this, r, s, n);
      (n = l.transitionEnd), (r = l.target);
    }
    return { transition: t, transitionEnd: n, ...r };
  }
}
function Rx(e) {
  return window.getComputedStyle(e);
}
class Nx extends Mm {
  readValueFromInstance(t, n) {
    if (yn.has(n)) {
      const r = cu(n);
      return (r && r.default) || 0;
    } else {
      const r = Rx(t),
        i = (vh(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return ym(t, n);
  }
  build(t, n, r, i) {
    ba(t, n, r, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return iu(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Ee(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, i) {
    kh(t, n, r, i);
  }
}
class jx extends Mm {
  constructor() {
    super(...arguments), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (yn.has(n)) {
      const r = cu(n);
      return (r && r.default) || 0;
    }
    return (n = Ch.has(n) ? n : ru(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return ee();
  }
  scrapeMotionValuesFromProps(t, n) {
    return Th(t, n);
  }
  build(t, n, r, i) {
    tu(t, n, r, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    Eh(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = nu(t.tagName)), super.mount(t);
  }
}
const Ox = (e, t) =>
    Ja(e)
      ? new jx(t, { enableHardwareAcceleration: !1 })
      : new Nx(t, { enableHardwareAcceleration: !0 }),
  Bx = { layout: { ProjectionNode: km, MeasureLayout: vm } },
  Fx = { ...f1, ...Lv, ...hx, ...Bx },
  ei = z0((e, t) => hv(e, t, Fx, Ox)),
  ti = {
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-16 py-10",
    heroHeadText:
      "font-black text-eerieBlack lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
    heroSubText:
      "text-eerieBlack font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",
    sectionHeadText:
      "text-eerieBlack font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
    sectionSubText:
      "sm:text-[18px] text-[16px] text-taupe uppercase tracking-wider font-semibold",
  },
  Ix =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFl0lEQVR4nO2dTYwUVRDHh5CwIup6MSRyQTyIHxhN1IusRxCRbCLZxOPqyUA0HsSoMaxKSLwQj8CyqDG7F86unlBPkIiiF/TkakI0etC4iAbWJT9TTA2+edMzPdPTHzUz9Us6m8zreVVd/63XM9011bVaAPAgcBL4CVjBKYoVjfEcsC3UoCHEGuBt4FphLjjtkJjPiAahICKGUy0z4TJ1LUqno8A0MOUbRcRAYnssOi2sXl++9JwRivF4y5rmFAKwPRLlRE1PLg2OFmPaaQdwPIj/Ui1SaDraeRPwjKbZIwmTjQFP6bj8HUvY51Edl3k21YYMmmOQtrXEQJevBlflhZCpSIw/o/Hnosk+jcYXo/Hno3GZ787aEEFrDNJoioEKdYNOguxMmGwucmY5NhaNh+enBjtqQwStMeiGHVkEkVRc1LO/8APwUOTMy8BfOi5/X4rGH5Z1Ucdlno+BdbUhguYYpNESg64FccrBBTGGCzJggpwBTvlGmTE400kQp2JcEGP4koXtJcs/9paMf8oyhgtiDBfEGC6IMVwQY5gVBLgPOAQslPiRc0Ft3lvhcdsTBHgnuMxfBWL7rYqO3ZYgwIvYYd9ICwLcBPwR2L+iN8XKWrIW1WaD35PqAkZJkCci+0+WaV99kAKFkO2jLMjeyP7aMu2rD2sjH/aOsiDNzlSEqRiYcqYiTMXAlDMVYSoGppypCFMxMOVMRZiKgSlnKsJUDEw5UxGmYmDKmYowFQNTzlSEqRiYcqYiTMXAlDMVYSoGppypCFMxqNgZv7iILUEmIvu7yrSvPuyOfBjpy+9jCTeoPinxBpXYuhrdoFo3soKoQ/uxwwsVHL8tQdSpmYqLHP4FDlZ07PYEUce2as+V+R6XnYuB/xd7fO+82rynwuO2KUhWqAe2wanagOGCGMMFMYYLYgwXxBguiDFcEGO4IKMqCDAJfAFcZni4DHwO7BkoQYB3GX4OD4QgmhmjwtODIIgsUw2k29orPbZQnepxOxvYO1uwrQNRB7nPBkGQsLvagX7ns3YtC3g1sHdpEATJdT6DguRaB+CC9IkLkoJnSHqAfMnqAV+y+sSXrBR8yaoHYWOHfuchRxLGJxOfKpP+e/aJPr6HTPT6+3N9jMdkwlxH4mU5YZPYbCz8Yy9wuxYG5PEknm+SGvy36fQQ1m5lRebY34W9x4Bvc7AnMfoIGC9EEOBm4Gvy5e9OolDvgVLMk2zai/FPzvbOAeuLEORNiuF8h+5AqwXYkzm3trGZR2Yk8UYRgnwf7CeZsrmWAWAD8F5k9/6U7LgibTeydHrQTg27op4mLZ1/gAcin+RcsSHjMW6Wf7RgrgtFCNL2wS8ZHL4lsjuZsM9Cu+eSZLQpdbwN5ru4Sp1JjLYPailAkK7268HhjvOR8zWqtPkK/37R7X4uSB0XxDPkOp4hdXzJiqEZP4cofg5R/BzSjGeI4hmieIY04xmieIYoniHNeIYoniGKZ0gzniEZMiS3ikRgS2R3Z8I+7wfj5/qxp/N9Fcx3MmFcLu+H3FVGhWM/l06kDL/BshrMUh87rbdvwxtGdyTY2xf5JgI9m8GevOeDtI4NWicQ3po+r75mOUaJzaVgrtNFCLKHYviwjb1x4LcC7P0K3NrGptwDL4LduQuibz6cs6NfArelNOtfztGezDXRwd643gPPk0OFFlvLbyKkDL+HZ4jHSPedC8BrUt7Thb27dcn5JXtM+FmXvC1d2FsPvA58F3UK6gWJzelOmZGbIE6+uCDGcEEGQJDcqkmcHKpTgB+DF45lmNPpA2A2iP+SvDAXvLBSdhPIUYb6x3rpZtdgVl7cFpVsiijH+/iW6htdXa2YjcRYvVHBqT0PnWr5v+cjsMZAI8pRRWJ+UDSotSk4PqEn+qzfUh1Skdgu6bLVVGj+H7o+6DX7moFaAAAAAElFTkSuQmCC",
  zx =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEOUlEQVR4nO2dO4wVVRjHL0KMEFgNEAKEJdHWRXlEHhVGqOiJiQ3BbCgsjMYCoibyKCB0RhcKHqHZAg0BtoKeikpMIITO1WajMW4BkbjyI58ekslw7rzuPL7N/H/JqfacmW++3z33mzs7c2YwKACwFpgAdqhRJQeWu7VFcp0lYQtwDvgNURe/hpxuKSNiJXAZ+Le2MEQay+0ly3WejHHg55eGi6awXI9nzYx7je1aDOM+MBYTYl9TMR4D14ATwFE1quTgRMih5TLGxVgBj9WM68D6wgVIZAJsAG5G8rxgZ2LJjlb509wAXsnehSiL5XSIlKkXHZZETm1tamlmNDtTnqRyPpv80ZfmWlPBiP8J5SDN6hf1I83JME40BHAqkvcJ+8PuyB+O5WzMLgXsT7RdwKsZ/V8H9ib67wM2DXoMcCyS992lhWScHv8ErIr03w78Een/D3B40FOoQwjwNtl8EhnzY0b/uUFPoSYh9mnP4vPImJmM/n/ZWd6gh1CTEDuHvp1xJXNdZIzVi7+HjPly0FOosYYsBQ4ARxLtQ+CNjDFvAocS/SeBnYMeQ11CRD1IiDMkxBkS4gwJWeRCpoGDajSZg+kyQkQ3SIgzJMQZEuIMFXUWSVHXpZOG0e8QZ0iIMyTEGRLiDAlxhoQ4Q0KcISHOkBBnSIgzJMQZEuIMCXGGhDhDQpwhIc6QkL4JAdYAb7XcNpd5dNseu2sojjVuhAArMp4ZaYM54P0CcU5GHkWuk1vAcg9CPqN7HuTEOAY8bSGOTz0IOU33/JkT47stxXHOg5BtLX36svg2J8attMP5zoWEjb8DfAOc6aB9lFfYhwi5M+J+v3MrxDvEhRwfcZvrJaQiEuIMNEN8gYT4AgnxBX0TYktqhNPPIy23SeC9AvH1R0hYNuN3uuWLnBh7JeQk3TOXE2OvhHxF9/ySE2OvhNgimg/pjqdWv3Ji7I+QsPHXgD2pdRjbaB/YkqsF4uuXEO8gIb5AQnyBhPgCCfEFEuIL+iYkrFJ6BfihZLMxB0bYx1Xga7sVqYKQ+xXiTbYZl0LsnijgGdWxsXtH3Md0BSFN4ELI2RoO5OyI+5jPGR97A0QTfO9BiF0CH5WPR9zH3QJ3V87XEOdIx9GWkGU2VSse8HwYu7TiPhZMRpEXNYYa9KhCjLUdRytCRDUkxBkS4gwJcYaEOENCnCEhzpAQZ0iIMyTEGRLiDAlxhoQ4Q0IWkRC9vtvZ67ttjZI0esF9hy+4XxLeY5vkcZF7ZkU1gI2RdVdmkx2mIrZulllpRxQjvOB5JvP/8aGOLAyRoplS78yIybDcT6Q7XyLOk/B9Z09KHVWjSg4sdzcyloe6ELO3Erg3ZIBoDrthb2zYlBqXlFaxCTCe9z1nM+XikJoi6sFye8FyXaYATYSzr9maghD8l8uplwp4WewHSxC0Q40qObDcrS6S7Oe8HVQwawLXqQAAAABJRU5ErkJggg==",
  _x =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGLUlEQVR4nO2daahVVRTHj0WZOVQOlZVlFkH1DEoywQ8SKlEERVgSURFZPSKi4UOSCGlR9EHqg1bkQEEWFE4NNKBfxKDBBqtnA1nxGm0iCm1Sf7F4+8LtuPZ59+x7rm/vd9YPzqe7975rrf85Zw9nn3WyrAWAsUAXMMUOQmIgsRvbSqyLRJgMPAJ8g1EVX7uYTi4jxAhgFbC3MjOMPBLblRLr/sSYAHywX3WjU0isJxRdGds69teGjx5glCaI3KY0dgFrgEXAXXYQEoNFLoYSS40VWgeu9RnrgGNb7oCMQoDxwAYlzntkJNZcUHr+POuBg4r/wiiLxNQjyrJGgSHK0FYuLbsyOnul7M7FvLd50pdnTaeMMfpw3UGe0Y3+I89iV8/oEMC9Sty75Idpyg/z+2lMlgJmNR3nAYcWlD8CmNFUfiZwQlZjgPlK3KeVFqRgePw+MFIpfw7ws1L+X+C6rKZQhSDAmRRzs1LnuYLyO7OaQkWCyNlexO1KnecLyv8mo7yshlCRIDKGfrVgJfNopY70F3956tyd1RQq7EMOBi4Cbmw65gJHFtQ5Gbi2qfw8YGpWY6hKEKMaTJDIMEEiwwSJDBMkcUFWA5fbQSdjsLqMIMbAYIJEhgkSGSZIZFinTiKdui2ddBibh0SGCRIZJkhkmCCRYYJEhgkSGSZIZJggkWGCRIYJEhkmSGSYIJFRO0GAw4D7gBeAW2WDXxYRdRTk8ZxPC7KIqJUgwFHAnzmfXs8iom6CdCs+PZlFRN0EeUPx6YIsImojCHAasC/nz7fWqQ+cIA8oJ9iDWWTU4gqh74WiXsWf1tMhHSDqIshsxZe3+6kzINkqohbEZZNYAHznsuPMDGznKcWXWzxlLwN+cK/bPQQc0rYjg0EQCYQSyF+AYSXbGaVk2/lbS63nUlH9niv7InB4pc6lJggwHHgFnZNKtnW90sZaT9kTPf+5RSaVlTmYkiAux8qbnsBsLfu6NLBZaeeSkuUbWd7GV+JkKoLI2Q987AlIT9m0G8Apytzjx6J+ARjjmUAKXwCnVuJs7IIAZ3iGpsJbIelUJVkO+/Nwi7fMl9GRDv/sYEdTEMQlqfnJE4CNWq6UFkdoO5T2WgqmJM0BnvHY9IcMpYOcjV0Q4OKCnINPhw47gfOV9j4KEHWJxzYZFs8JsS1aQYBrgH88Di9tZ3IGPKG0eWdgW5KwEk9OxBtCbYxKEOBKpcNtsLDNtoe720o+7VNwekLJaORJCCo+XNWOvbEI0uNxrruiKy/PSxW0O9dzEm1vt+0YBHkXnfvbTc0EbFLavaLNNiW5znKPzVvbaTsWQWa7JQyNx0KfU9A3l8nfWn6VzQ1tboxY67FVfJgV2nZsnfpMZe2owbqQIAILlbYebcNGWd96zWOjjA4vDG071mHvuQVzkE1l5yDAJ6pDYbYdA7zjsU2uuukh7aYwMTy9n1n6mBbbma7U/yykTwImAp96bJLHAWcFOZuCIE0rrdrZjRuRHR+w5yooXaBbxpHUhBqfyxpZsKOpCOKMGSdP8jyB2AFMKqg7zCXPbGav9zsc/namuduRhtg2rhJnUxDEGTTSrV9pfOi7/biJZp6NAUPb3irX1JIXxBk1tCCv70RPHe2B1tUl/3eS5z/FlqGVOZiaIE1nq8xHmtmpDYWlf3HrSs3IcHp4wInwfVVzokElSJOBtwFfAu/5hpmexb9Vgf833f2X3LruaNuBwSZIKwDbFVtnZAmSvCDAVMXOr1L9CtBgEGSZYuc9WaIkLQh9j1nzn7zY18mJW6dJXZA5io2bs4RJXZBnFRvnZQmTuiBbcvbtVr+OmRCpC9Kds29JljhJCyIAl8oDKOCm2N6GqqUggw0TJDJMkMgwQSLDBIkMEyQyTJDIMEESEsQ+3x3Z57vlXbs89oH7AfzA/RBls9iuA/Emal0BjnMLpM309vc0bkOqj0cTyMeifUF7aXOhycr2moYodqVUe2VoYkjsu/KFV6Kz293vFrttOHZQOgYSu/XKbarBct/7Eds8FYzO0eN92CYblk2UA8q2fjeJuytlhadPMaphj3uPcUSZDqjLjb58u8SN8vS6mP6/Ay+LTFicQFPsICQGErvRrQT7P9WX1nUadcvzAAAAAElFTkSuQmCC",
  Ux =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHPklEQVR4nO2dCagVVRjHJ/O5pKaFpra40bNCszRJk4zCpaI9ewStVD4lCoyi1SijECMpDVySMEWjTCvKV5KpYVgqGVpJFJFEGEVWtGhRLr84732vhvGcWe6cmTtz3/nDgXvvzFnm/ubM2b7vjOc5OTk5lU/AYGAN8CfZ6GdgAdC92tdaeAEnA3+Qj3YAHap9zYUW8Ab5alq1r7nQAn7KGcjKal9zoQXszRlIU7WvudByQMoBZBbQLWW6xwPrXA2xA6SLpbQvdUDsADlSjm0Bvq4gzJX4JwBTAuGipGVsU4oA8n2FDfdL1b6u0ipLIEA/aY+yCNOAgV6tKWMgo8lW/wD3erWkktaQ2cBGX37XeLWiMrchwFOS38derajMvSzgJCnvAaC9Vwsq8zgE6GK7zEUF8qSFkbqqHeszBnK0L91U5S2MyjqXBRwBvOVLd7VXCyoiEKAj0B8YpAm95ZxTNWnXy7G+hrj9Cr9AViQgtICYFbGUvF7O7Q3sD4xJesmx7SHx1erow4XtBBQMyOIY8fcBPeT8qcBvwK9Ao2+WWfW6ojTbK6KKAgQ4I0Eai3zx2qnga1dWxkzjoHqEeSUB8hjQKWW6PcWSJS6Qm0mmF1U744tfX4F9wOVeSYAcZSntSxIAaSS5DgHfArupTA1eyUbqXwC/VBCel/jjMgaSVg1tbXLRBpCHDF3YJGGGA2IPyHkWbrrxDog9IHuBbSmD6irr5B5Zrg0pfxuSpRra2nqIDSCzgZHAWRUGFXdu2YF0tZT2ZRaAjLJQjrFlB6LuqD7AMYHQ3rcwpL53lO+dNeeeAmyyAOQH4N2U4ceyAzHpfInziny/Q76b+vk6uTYkTA5IwVQCIIuACTK4qyRMBF4wpO0eWRUAGWHhpjvHAbFXQ3ZJjUwTvnFA7AHJUoV8ZF2lChYz9DK0IUMSpHGuoRyNmf71ZQFSiYJALKXZaPjTVgHXasBeB3xQc0CAZ4HnYobBhhoyPmAIHZbGnQmBjAwp+421CKTo3d6dYlQdtIB/OsXSbascENeoRyikS5hVDVliKEcj+auQNeSJnIFcnBDIX8BaTVu0MjBp+B2wTHNeU4glZCGBdDT4k2cBZE5IORoNg8L6kDhq1vlt4M0wOzLZ7Wh3UiCynrPQwsBUF5YCt7Qa+QUzVhZ/1yvznYhEhhiANETEWxzlqIMeyJU+89Bgt3e4z8b3OPk8XHNe35AemRGI9Bbz0Ma0Rol5jkN6ybENmmN/+31C1Gf5LagNvm2oYgFRNw/5amZZgHSJsGbv44uvFtR02u5zIIoLRD1O8tSutH9erQNpIl/tLQuQrnJM2Vbp1DNg3K3TtoCDqF8OSEIgp/uMJVbLb/vlhpgux9oDdfJ5eqAzsUI5nsqxCx2Q9DVkheoByvEBuuoN3K3sfyPS7mAwuHA1JCEQpQUmIDJGUC4JSi8DN2m6vWpPlE/RKymQnRqLlg2y62qbaEOU1oYAMdnsxlUSIM+ElP1YmSmoVA5IBUAmRNxQr1K5HJAKgIyL+dSoGSDdDM42fUMeWQNTOvJot+NwQOIBG2DlboqXl6shtCwD65xtlpqAAO8ksO99X5P2eAfEfFc2GJ6vW0OAxNkgIEyuDQkBMqkKQCa5GmIGMqoKQM52QMxA2gGbcwSyVbtaZ27Uo1YXdXuDlbfbqyRd0R3BPy4DIJ9FLA3rgHylNts0WNg/4pvCqR0gvolAZd56H3C/mp8KATIz4W6mM8QKstnzyyS3HlKOcUiWKm4NMckBCZEDYl2uhoTJPbLK8cjaDJymcf9OEpShxZxaqyH7cshrtJjY+lcCr7aUdmdNFzk1kNclobtsFDJmnj18F9A7pzyVxeSXkqfNLdIPWAMi9qiHfFuuNpuX5iH+t89a2Gr8YDn9TsCDYvo6UX4bIxtm5gtE7sARIZu41Pk2pDnMDFKekaa4w6IGYwn2kj/ke6Y/LoNHW0FN57dKQRgj+X6YGxD1RwPzYwz9h8r5yufPr2YXNdWeRMRXtWmyhYuZKi4KeehRyXN5nkDUPEwcNds+yRbgm+QPXtK6dbf4cERJ3XVjLVzQicA9wLwE/pFxQtBktRkC8F6eQD6PCeR31e2z4Hw53yuoaDHnWSgzt7fKb0NlG/PcgOicPpdrXsQyRfdqIXGamaw5d6rBJrc0r16l5XUYH0m5qwqkv6WMbysjEFp8SW4XD65WXWFxNvtgUiBbLL24a3dJgTRpyr2m9SUAKdKtk32ISQokS5UVSJZyQMoGZJ2l9w2qZc+gXA2pAMh/rmJpBNxQUiAPZOQKbQrLooCsMnR7kwQ1cv+kjECqqgQDQ1ua5xVcwJkp9nisJFzgz1y9ICsvHTRtYFYkVbtRr5M5oTR2RXGnXpqnI4ouimB1AnSPmH5PE4YV/v2BPmlmtLPWHn/+TgGpldCcgbwWLIPT4fNNQZPWLB/lg/z5O5lnetXC3Z6MQOyTtspoY+zk5OTkFVf/Ar+1GNdaFFBrAAAAAElFTkSuQmCC",
  _f = [
    { id: "about", title: "About" },
    { id: "projects", title: "Projects" },
    { id: "education&experience", title: "Education/Experience" },
    { id: "contact", title: "Contact" },
  ],
  Hx = [
    { title: "Frontend Developer", icon: _x },
    { title: "Backend Developer", icon: Ix },
    { title: "UI/UX Design", icon: zx },
    { title: "Software Prototyping", icon: Ux },
  ],
  Wx = "/assets/bw-3-89198645.png",
  Qx = "/assets/bw-1-a809737c.png",
  Yx = "/assets/grey-map-5be9c82f.png",
  Gx = "/assets/world-map-a167947e.png",
  Xx = () =>
    C.jsxs(C.Fragment, {
      children: [
        C.jsx("div", {
          className: "absolute top-0 left-0 z-0 h-[100vh] w-screen",
          children: C.jsx("img", {
            src: Yx,
            alt: "world map",
            className: "w-full h-full sm:object-cover sm:block hidden",
          }),
        }),
        C.jsx("div", {
          className: "absolute top-0 left-0 z-0 h-[100vh] w-screen",
          children: C.jsx("img", {
            src: Gx,
            alt: "world map",
            className: "w-full h-full sm:hidden block object-cover",
          }),
        }),
        C.jsxs("section", {
          className:
            "relative w-full h-screen mx-auto mx-auto sm:bg-hero bg-hero-mobile overflow-hidden",
          children: [
            C.jsxs("div", {
              className: `absolute inset-0 sm:top-[250px] top-[150px] lg:top-[150px] xl:top-[250px] ${ti.paddingX} max-w-7xl mx-auto flex flex-row items-start justify-between gap-3`,
              children: [
                C.jsxs("div", {
                  className:
                    "flex flex-col justify-center items-center mt-5 ml-3",
                  children: [
                    C.jsx("div", {
                      className: "w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden",
                    }),
                    C.jsx("div", {
                      className: "w-1 sm:h-80 h-40 bw-gradient sm:hidden",
                    }),
                  ],
                }),
                C.jsxs("div", {
                  className:
                    "w-screen flex flex-col items-start justify-center sm:-ml-[3rem] xxs:mt-4",
                  children: [
                    C.jsxs("h1", {
                      className:
                        "hero-heading text-eerieBlack sm:text-[90px] text-[45px] lg:text-[70px] xl:text-[85px] 2xl:text-[100px] leading-tight",
                      children: [
                        "Shaquille",
                        " ",
                        C.jsx("span", {
                          className:
                            "text-taupe sm:text-[90px] text-[45px] lg:text-[70px] xl:text-[85px] 2xl:text-[100px] font-beckman",
                          children: "Ndunda",
                        }),
                      ],
                    }),
                    C.jsx("p", {
                      className:
                        "sm:text-[34px] text-[20px] lg:text-[28px] 2xl:text-[36px] text-jetGray font-beckman mt-1",
                      children: "SOFTWARE DEVELOPER",
                    }),
                    C.jsx("button", {
                      className:
                        "flex justify-center items-center sm:text-center sm:w-[210px] sm:h-[65px] w-[140px] h-[50px] lg:w-[180px] lg:h-[55px] xl:w-[200px] xl:h-[60px] 2xl:w-[220px] 2xl:h-[70px] mt-10 rounded bg-neutral-800 px-6 pb-2 pt-2.5 sm:text-[27px] text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] z-10 whitespace-nowrap sm:font-black font-extrabold font-arenq sm:tracking-[2px] uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-taupe hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]",
                      children: "MY WORK",
                    }),
                  ],
                }),
                C.jsxs("div", {
                  children: [
                    C.jsx("img", {
                      src: Wx,
                      alt: "shaq",
                      className:
                        "w-[1130px] h-[850px] absolute -right-[46rem] -top-[10rem] sm:block md:-right-[24rem] md:top-[12rem] xmd:top-[25rem] xmd:-right-[26rem] lg:-right-[30rem] lg:-top-[7rem] xl:-right-[33rem] xl:-top-[7rem] 2xl:-right-[46rem] 2xl:-top-[1rem] 3xl:-right-[54rem] hidden object-contain",
                    }),
                    C.jsx("img", {
                      src: Qx,
                      alt: "shaq",
                      className:
                        "w-[400px] h-[450px] absolute -right-[12rem] top-[19.5rem] sm:hidden block object-contain",
                    }),
                  ],
                }),
              ],
            }),
            C.jsx("div", {
              className:
                "absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center",
              children: C.jsx("a", {
                href: "#about",
                children: C.jsx("div", {
                  className:
                    "w-[35px] h-[64px] rounded-3xl border-4 sm:border-eerieBlack border-dim flex justify-center items-start p-2",
                  children: C.jsx(ei.div, {
                    animate: { y: [0, 24, 0] },
                    transition: {
                      duration: 1.5,
                      repeat: 1 / 0,
                      repeatType: "loop",
                    },
                    className: "w-3 h-3 rounded-full bg-taupe mb-1",
                  }),
                }),
              }),
            }),
          ],
        }),
      ],
    }),
  Kx = "/assets/logo-black-67edd0f7.png",
  Zx = "/assets/logo-text-black-6aadf281.png",
  qx =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAADgJJREFUeJzt3UGsZmV5wPH/MGQG4ji02EFhxjQUxZK0muCusQWUdFC6MyVpMGpI05R0ISGYrqqGnRtMbbRRbHBiu+imMbESkESUbrrqoi5UBGObgRAxswBMZ6aZmS4ONtQ6cO/c+933vt/9/ZKbzOz+i5l7nu/5znlPAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsJ72jQ6A1/GW6p3VoerXB7cA6+ds9fPqheqZ6vTYnJ1lAGA3eVv14eoD1fuqI2NzgD3kfPWj6snq8erRlgFhbRkA2A1urR6o7qj2j00BqOpUdaJ6qDo5uGUlDACM9O7qb6o/GB0CcBFnqy9Un6leGpuyvQwAjHB5y3+mv3z1zwC73fPVx6snBndsG+tWdtqRlu/WPlJdNrgFYKPeXN3d8sH5qcEt28IAwE76zerb1c2jQwAuwb6We5aOVd+sLgyt2SIDADvlSMvdte8aHQKwRTdX11dfHx2yFQYAdsKVLRf/3xkdArBN3tPy6OB3R4dcKgMAO+FvqztHRwBss1uqf62eHR1yKTwFwKrdWf3z6AiAFXmuuql6eXTIZtkAsEpXVt/IMb7A+jpcHay+NTpkszyGxSr9afVboyMAVuwvqqOjIzbLBoBVubz6x+qq0SEAK/aLA82m2gK4B4BV+aOW9T/AXnCquq46Mzpko3wFwKrcPToAYAddXR0fHbEZBgBW4bLq9tERADvMAMCe97vVb4yOANhht40O2AwDAKvw7tEBAAPcWF0xOmKjDACswo2jAwAG2F/dMDpiowwArMKR0QEAg0zz+88AwCocGh0AMMjh0QEbZQAAgD3IAMAqvDI6AGCQl0YHbJQBgFX46egAgEFeHB2wUQYAVuHp0QEAA5yrnh0dsVEGAFbh30cHAAzww+r06IiNMgCwCt+rfjY6AmCHPTk6YDMMAKzChSZ7LSbANnh8dMBmGABYlX8YHQCwg05lAIBq2QD8x+gIgB3ySHV2dMRm7B8dwNo6X/139aHRIQArdqb6k+rl0SGbYQPAKv1dEz0SA3CJPl89Nzpis/aNDmDtfbB6dHQEwIqcrG5qwhNQfQXAqj1TXVe9d3QIwDY7X/1x9YPRIZfCVwDshPuqfxsdAbDNPl09MTriUvkKgJ1ypPqX6l2jQwC2wcPVn42O2AobAHbKi9UfNumqDOA1Hq7uHR2xVQYAdtJ/Vu+rvjO4A+BSnKv+quWT/7nBLVvmJkB22n9Vf//qn38v/waBOZysPlydGB2yXfzyZYQLLVuAf6p+u7p+aA3AxZ2uPlfd1fK2v7XhJkB2g9+vPtlyZsDlg1sAanmj6Ynqoer5wS0rYQBgN7mmZcX2gZZ7Bd46NgfYQ85VT7e80vexlhf7THW2/2YZANjNrq5uqK6qfi3/XoHtdablBL8XWo4tPzM2BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADYTfaNDhjgiuqd1VurN1UHxuYAMMjZ6ufVC9Uz1emxOTtrLwwAB6sPVcerW1su/peNDAJg1zlf/ah6snq8erRlQFhb6zwAvL26v/podfXgFgDmcqo6UT1UnRzcshLrOABcVT1Y/XnW+wBszdnqC9VnqpfGpmyvdRsAjlePVNeODgFgrTxffbx6YnDHttk/OmCb7Gv51P+l6vDgFgDWz5uru1uuN08NbtkW6zAA7K++Un2i9dtoALB77Gu5mfxY9c3qwtCaLZp9ANhXfbm6Z3QIAHvGzdX11ddHh2zF7APAg9V9oyMA2HPe0/Lo4HdHh1yqmVfm76++1fxDDABzOl99sOVaNJ1ZB4DD1Q9ytz8AYz1X3VS9PDpks2b99PzZ6vbREQDseYdbTpydbgsw4wbgWPVsDvkBYHc4U93Qsg2Yxoxn4j+Qiz8Au8fBlqPnpzLbBuBAy2lMbxkdAgCvcaq6rmUbMIXZNgB35uIPwO5zdctx9NOYbQC4Y3QAAFyEAWCFbhkdAAAXcdvogM2Y6R6AK6tXmm9oAWBvOFcdqk6PDtmImS6m72iuXgD2lv0tjwNOYaYL6jWjAwDgDRwZHbBRMw0Ah0YHAMAbODw6YKNmGgAAgG0y0wDwyugAAHgDL40O2KiZBoCfjg4AgDfw4uiAjZrpMcArWrYAs77BEID15jHAFTldPTM6AgAu4odNcvGvuQaAqu+MDgCAi3hydMBmzDYAPDY6AAAu4vHRAZsx0z0A5XXAAOxOp6prq7OjQzZqtg3A2eproyMA4Jc80kQX/5pvA1B1rOVmwIOjQwCgOtPyDoDnRodsxmwbgKqT1RdHRwDAqz7fZBf/mnMDUMtZy9+vrhsdAsCedrK6qQlPq51xA1DLUYsfaTl0AQBGOF/d04QX/5r7VL2ftGwwbh2bAcAe9anqq6MjLtXMA0DVU9XR6ubRIQDsKQ9XnxwdsRWzDwBVj2YIAGDnPFzdW10YHbIV6zAAXKi+0fJdzC3Ne2MjALvbuerTLZ/8p7741/pdLG9v+T7m6OAOANbLyepj1bdHh2yXddgAvNaPW1YzB6r3VpePzQFgcqerz1V3tbztb22s2wbgtY5W97dMbN4dAMBm/Kw6UT3U8g6atbPOA8AvHKjuqI5Xt1U3tn6bDwC25lz1dMsrfR9rebPfVGf7b9ZeGAB+2cGWM5vfVh3KOwUA9qozLYf4vFA9++rfAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACq2jc6ANhRV1TvrN5avak6MDYHhjpb/bx6oXqmOj02Z2cZAGC9Haw+VB2vbm25+F82Mgh2qfPVj6onq8erR1sGhLVlAID19Pbq/uqj1dWDW2BGp6oT1UPVycEtAG/oquqvqzPVBT9+/Gz550zLEHC4NWMDAOvjePVIde3oEFhDz1cfr54Y3LFt9o8OALZsX/Vg9aXW8FMK7BJvru5u+f/21OCWbWEAgLntr75SfSIbPVi1fS030x6rvtnyFcG0DAAwr33Vl6t7RofAHnNzdX319dEhW2EAgHk9WN03OgL2qPe0PDr43dEhl8rKEOb0/upbGeJhpPPVB1v+L07HAADzOVz9IHf7w27wXHVT9fLokM3y6QHm89nq9tERQLUM5AebcAtgAwBzOVY9mzP8YTc5U93Qsg2YhjPBYS4P5OIPu83BlqO3p2IDAPM40HIa2VtGhwD/z6nqupZtwBRsAGAed+biD7vV1S3HcU/DAADzuGN0APC6DADAStwyOgB4XbeNDtgM9wDAHK6sXsnQDrvZuepQdXp0yEb4ZQJzeEf+v8Jut7/lccAp+IUCc7hmdACwIUdGB2yUAQDmcGh0ALAhh0cHbJQBAAD2IAMAzOGV0QHAhrw0OmCjDAAwh5+ODgA25MXRARvlMUCYwxUtWwBv8ITdy2OAwLY7XT0zOgJ4XT9skot/GQBgJt8ZHQC8ridHB2yGAQDm8djoAOB1PT46YDPcAwDz8Dpg2L1OVddWZ0eHbJQNAMzjbPW10RHAr/RIE138ywYAZnOs5WbAg6NDgP91puUdAM+NDtkMGwCYy8nqi6MjgP/j80128S8bAJjR4er71XWjQ4BOVjc14WmdNgAwn5eqj7QcOgKMc766pwkv/uVUMZjVT1o2eLeOzYA97VPVV0dHXCoDAMzrqepodfPoENiDHq4+OTpiKwwAMLdHMwTATnu4ure6MDpkKwwAMLcL1Tdavou8JTf2wiqdqz7d8sl/6ot/+WUB6+T2lu8jjw7ugHV0svpY9e3RIdvFBgDWx49bVpMHqvdWl4/NgbVwuvpcdVfL2/7Whg0ArKej1f0tn1i8OwA272fVieqhlndwrB0DAKy3A9Ud1fHqturGbP7gVzlXPd3ySt/HWt7sN9XZ/ptlAIC95WDLmeVvqw7lnQLsbWdaDvF5oXr21b8DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA5P4Hai45Ce28ckYAAAAASUVORK5CYII=",
  $x = "/assets/close-80658a2f.png",
  Jx = () => {
    const [e, t] = E.useState(""),
      [n, r] = E.useState(!1);
    return C.jsx("nav", {
      className: `${ti.paddingX} w-full flex items-center py-2 fixed top-0 z-20 bg-flashWhite shadow sm:opacity-[0.9] xxs:h-[12vh]`,
      children: C.jsxs("div", {
        className: "w-full flex justify-between items-center mx-auto",
        children: [
          C.jsxs(E0, {
            to: "/",
            className: "flex items-center gap-2",
            onClick: () => {
              t(""), window.scrollTo(0, 0);
            },
            children: [
              C.jsx("img", {
                src: Kx,
                alt: "logo",
                className:
                  "sm:w-[50px] sm:h-[50px] w-[45px] h-[45px] object-contain",
              }),
              C.jsx("img", {
                src: Zx,
                alt: "logo",
                className:
                  "sm:w-[90px] sm:h-[90px] w-[85px] h-[85px] -ml-[0.6rem] object-contain",
              }),
            ],
          }),
          C.jsx("ul", {
            className: "list-none hidden sm:flex flex-row gap-14 mt-2",
            children: _f.map((i) =>
              C.jsx(
                "li",
                {
                  className: `${
                    e === i.title ? "text-french" : "text-eerieBlack"
                  } hover:text-taupe text-[21px] font-medium font-mova uppercase tracking-[3px] cursor-pointer nav-links`,
                  onClick: () => t(i.title),
                  children: C.jsx("a", { href: `#${i.id}`, children: i.title }),
                },
                i.id
              )
            ),
          }),
          C.jsx("div", {
            className: "sm:hidden flex flex-1 justify-end items-center",
            children: n
              ? C.jsxs("div", {
                  className: `p-6 bg-flashWhite opacity-[0.98] absolute top-0 w-[100vw] h-[100vh] z-10 menu ${
                    n ? "menu-open" : "menu-close"
                  }`,
                  children: [
                    C.jsx("div", {
                      className: "flex w-full justify-end",
                      children: C.jsx("img", {
                        src: $x,
                        alt: "close",
                        className:
                          "w-[22px] h-[22px] object-contain cursor-pointer",
                        onClick: () => r(!n),
                      }),
                    }),
                    C.jsx("ul", {
                      className:
                        "list-none flex flex-col -gap-[1rem] items-start justify-end mt-[10rem] -ml-[35px]",
                      children: _f.map((i) =>
                        C.jsx(
                          "li",
                          {
                            id: i.id,
                            className: `${
                              e === i.title ? "text-french" : "text-eerieBlack"
                            } text-[88px] font-bold font-arenq uppercase tracking-[1px] cursor-pointer`,
                            onClick: () => {
                              r(!n), t(i.title);
                            },
                            children: C.jsx("a", {
                              href: `#${i.id}`,
                              children: i.title,
                            }),
                          },
                          i.id
                        )
                      ),
                    }),
                  ],
                })
              : C.jsx("img", {
                  src: qx,
                  alt: "menu",
                  className: "w-[34px] h-[34px] object-contain cursor-pointer",
                  onClick: () => r(!n),
                }),
          }),
        ],
      }),
    });
  };
var bx = Object.defineProperty,
  ew = Object.defineProperties,
  tw = Object.getOwnPropertyDescriptors,
  Uf = Object.getOwnPropertySymbols,
  nw = Object.prototype.hasOwnProperty,
  rw = Object.prototype.propertyIsEnumerable,
  Hf = (e, t, n) =>
    t in e
      ? bx(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  cr = (e, t) => {
    for (var n in t || (t = {})) nw.call(t, n) && Hf(e, n, t[n]);
    if (Uf) for (var n of Uf(t)) rw.call(t, n) && Hf(e, n, t[n]);
    return e;
  },
  fr = (e, t) => ew(e, tw(t)),
  iw = class extends E.Component {
    constructor(e) {
      super(e), (this.ref = To.createRef()), (this.state = { style: {} });
      const t = {
        reverse: !1,
        max: 35,
        perspective: 1e3,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        scale: "1.1",
        speed: "1000",
        transition: !0,
        axis: null,
        reset: !0,
      };
      (this.width = null),
        (this.height = null),
        (this.left = null),
        (this.top = null),
        (this.transitionTimeout = null),
        (this.updateCall = null),
        (this.element = null),
        (this.settings = Object.assign({}, t, this.props.options)),
        (this.reverse = this.settings.reverse ? -1 : 1),
        (this.onMouseEnter = this.onMouseEnter.bind(
          this,
          this.props.onMouseEnter
        )),
        (this.onMouseMove = this.onMouseMove.bind(
          this,
          this.props.onMouseMove
        )),
        (this.onMouseLeave = this.onMouseLeave.bind(
          this,
          this.props.onMouseLeave
        ));
    }
    componentDidMount() {
      (this.element = this.ref.current),
        setTimeout(() => {
          this.element.parentElement.querySelector(":hover") === this.element &&
            this.onMouseEnter();
        }, 0);
    }
    componentWillUnmount() {
      clearTimeout(this.transitionTimeout),
        cancelAnimationFrame(this.updateCall);
    }
    onMouseEnter(e = () => {}, t) {
      return (
        this.updateElementPosition(),
        this.setState(
          Object.assign({}, this.state, {
            style: fr(cr({}, this.state.style), { willChange: "transform" }),
          })
        ),
        this.setTransition(),
        e(t)
      );
    }
    reset() {
      window.requestAnimationFrame(() => {
        this.setState(
          Object.assign({}, this.state, {
            style: fr(cr({}, this.state.style), {
              transform: `perspective(${this.settings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
            }),
          })
        );
      });
    }
    onMouseMove(e = () => {}, t) {
      return (
        t.persist(),
        this.updateCall !== null &&
          window.cancelAnimationFrame(this.updateCall),
        (this.event = t),
        (this.updateCall = requestAnimationFrame(this.update.bind(this, t))),
        e(t)
      );
    }
    setTransition() {
      clearTimeout(this.transitionTimeout),
        this.setState(
          Object.assign({}, this.state, {
            style: fr(cr({}, this.state.style), {
              transition: `${this.settings.speed}ms ${this.settings.easing}`,
            }),
          })
        ),
        (this.transitionTimeout = setTimeout(() => {
          this.setState(
            Object.assign({}, this.state, {
              style: fr(cr({}, this.state.style), { transition: "" }),
            })
          );
        }, this.settings.speed));
    }
    onMouseLeave(e = () => {}, t) {
      return this.setTransition(), this.settings.reset && this.reset(), e(t);
    }
    getValues(e) {
      const t = (e.nativeEvent.clientX - this.left) / this.width,
        n = (e.nativeEvent.clientY - this.top) / this.height,
        r = Math.min(Math.max(t, 0), 1),
        i = Math.min(Math.max(n, 0), 1),
        o = (
          this.reverse *
          (this.settings.max / 2 - r * this.settings.max)
        ).toFixed(2),
        s = (
          this.reverse *
          (i * this.settings.max - this.settings.max / 2)
        ).toFixed(2),
        l = r * 100,
        a = i * 100;
      return { tiltX: o, tiltY: s, percentageX: l, percentageY: a };
    }
    updateElementPosition() {
      const e = this.element.getBoundingClientRect();
      (this.width = this.element.offsetWidth),
        (this.height = this.element.offsetHeight),
        (this.left = e.left),
        (this.top = e.top);
    }
    update(e) {
      const t = this.getValues(e);
      this.setState(
        Object.assign({}, this.state, {
          style: fr(cr({}, this.state.style), {
            transform: `perspective(${this.settings.perspective}px) rotateX(${
              this.settings.axis === "x" ? 0 : t.tiltY
            }deg) rotateY(${
              this.settings.axis === "y" ? 0 : t.tiltX
            }deg) scale3d(${this.settings.scale}, ${this.settings.scale}, ${
              this.settings.scale
            })`,
          }),
        })
      ),
        (this.updateCall = null);
    }
    render() {
      const e = Object.assign({}, this.props.style, this.state.style);
      return C.jsx("div", {
        style: e,
        ref: this.ref,
        className: this.props.className,
        onMouseEnter: this.onMouseEnter,
        onMouseMove: this.onMouseMove,
        onMouseLeave: this.onMouseLeave,
        children: this.props.children,
      });
    }
  };
const ow = (e) => ({
    hidden: { y: -50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", duration: 1.25, delay: e },
    },
  }),
  Dm = (e, t, n, r) => ({
    hidden: {
      x: e === "left" ? 100 : e === "right" ? -100 : 0,
      y: e === "up" ? 100 : e === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { type: t, delay: n, duration: r, ease: "easeOut" },
    },
  }),
  sw = (e, t) => ({
    hidden: {},
    show: { transition: { staggerChildren: e, delayChildren: t || 0 } },
  }),
  lw = (e, t) => {
    function n() {
      return C.jsx(ei.section, {
        variants: sw(),
        initial: "hidden",
        whileInView: "show",
        viewport: { once: !1, amount: 0.25 },
        className: `${ti.padding} max-w-7xl mx-auto relative z-0`,
        children: C.jsx(e, {}),
      });
    }
    return n;
  },
  aw = ({ index: e, title: t, icon: n }) =>
    C.jsx(iw, {
      className: "xs:w-[250px] w-full",
      children: C.jsx(ei.div, {
        variants: Dm("right", "spring", 0.5 * e, 0.75),
        className: "w-full card-gradient p-[1px] rounded-[20px] shadow-card",
        children: C.jsxs("div", {
          options: { max: 45, scale: 1, speed: 450 },
          className:
            "bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col",
          children: [
            C.jsx("img", {
              src: n,
              alt: t,
              className: "w-16 h-16 object-contain",
            }),
            C.jsx("h3", {
              className: "text-taupe text-[18px] font-bold text-center",
              children: t,
            }),
          ],
        }),
      }),
    }),
  uw = () =>
    C.jsxs(C.Fragment, {
      children: [
        C.jsxs(ei.div, {
          variants: ow(),
          children: [
            C.jsx("p", {
              className: ti.sectionSubText,
              children: "Introduction",
            }),
            C.jsx("h2", {
              className: ti.sectionHeadText,
              children: "Overview.",
            }),
          ],
        }),
        C.jsx(ei.p, {
          variants: Dm("", "", 0.1, 1),
          className: "mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]",
          children:
            "I spend my days tapping on keyboards and Googling stuff. I'm a skilled software developer with experience in JavaScript and TypeScript, and expertise in frameworks like React and Next.js, Node.js, and Ruby on Rails. I'm a quick learner and I can help you build a product, feature or app. If you have a project you need coded, don't hesitate to contact me. Let's work together to bring your ideas to life!",
        }),
        C.jsx("div", {
          className: "mt-20 flex flex-wrap gap-10",
          children: Hx.map((e, t) => C.jsx(aw, { index: t, ...e }, e.title)),
        }),
      ],
    }),
  cw = lw(uw),
  fw = () => C.jsx("div", { children: "Tech" }),
  dw = () => C.jsx("div", { children: "Experience" }),
  pw = () => C.jsx("div", { children: "Works" }),
  hw = () => C.jsx("div", { children: "Feedbacks" }),
  mw = () => C.jsx("div", { children: "Contact" }),
  gw = () =>
    C.jsx(P0, {
      children: C.jsxs("div", {
        className: "relative z-0",
        children: [
          C.jsxs("div", { children: [C.jsx(Jx, {}), C.jsx(Xx, {})] }),
          C.jsx(cw, {}),
          C.jsx(dw, {}),
          C.jsx(fw, {}),
          C.jsx(pw, {}),
          C.jsx(hw, {}),
          C.jsxs("div", {
            className: "relative z-0",
            children: [C.jsx(mw, {}), C.jsx(M0, {})],
          }),
        ],
      }),
    });
zs.createRoot(document.getElementById("root")).render(
  C.jsx(To.StrictMode, { children: C.jsx(gw, {}) })
);
