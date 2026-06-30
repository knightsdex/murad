(function () {
  const l = document.createElement("link").relList;
  if (l && l.supports && l.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) o(c);
  new MutationObserver((c) => {
    for (const h of c)
      if (h.type === "childList")
        for (const d of h.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && o(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(c) {
    const h = {};
    return (
      c.integrity && (h.integrity = c.integrity),
      c.referrerPolicy && (h.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (h.credentials = "include")
        : c.crossOrigin === "anonymous"
        ? (h.credentials = "omit")
        : (h.credentials = "same-origin"),
      h
    );
  }
  function o(c) {
    if (c.ep) return;
    c.ep = !0;
    const h = u(c);
    fetch(c.href, h);
  }
})();
var Br = { exports: {} },
  cl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fp;
function P1() {
  if (fp) return cl;
  fp = 1;
  var a = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.fragment");
  function u(o, c, h) {
    var d = null;
    if (
      (h !== void 0 && (d = "" + h),
      c.key !== void 0 && (d = "" + c.key),
      "key" in c)
    ) {
      h = {};
      for (var m in c) m !== "key" && (h[m] = c[m]);
    } else h = c;
    return (
      (c = h.ref),
      { $$typeof: a, type: o, key: d, ref: c !== void 0 ? c : null, props: h }
    );
  }
  return (cl.Fragment = l), (cl.jsx = u), (cl.jsxs = u), cl;
}
var dp;
function $1() {
  return dp || ((dp = 1), (Br.exports = P1())), Br.exports;
}
var v = $1(),
  Lr = { exports: {} },
  lt = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hp;
function I1() {
  if (hp) return lt;
  hp = 1;
  var a = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.portal"),
    u = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    h = Symbol.for("react.consumer"),
    d = Symbol.for("react.context"),
    m = Symbol.for("react.forward_ref"),
    g = Symbol.for("react.suspense"),
    p = Symbol.for("react.memo"),
    x = Symbol.for("react.lazy"),
    b = Symbol.for("react.activity"),
    T = Symbol.iterator;
  function j(E) {
    return E === null || typeof E != "object"
      ? null
      : ((E = (T && E[T]) || E["@@iterator"]),
        typeof E == "function" ? E : null);
  }
  var D = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    U = Object.assign,
    B = {};
  function H(E, L, Q) {
    (this.props = E),
      (this.context = L),
      (this.refs = B),
      (this.updater = Q || D);
  }
  (H.prototype.isReactComponent = {}),
    (H.prototype.setState = function (E, L) {
      if (typeof E != "object" && typeof E != "function" && E != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, E, L, "setState");
    }),
    (H.prototype.forceUpdate = function (E) {
      this.updater.enqueueForceUpdate(this, E, "forceUpdate");
    });
  function X() {}
  X.prototype = H.prototype;
  function Y(E, L, Q) {
    (this.props = E),
      (this.context = L),
      (this.refs = B),
      (this.updater = Q || D);
  }
  var q = (Y.prototype = new X());
  (q.constructor = Y), U(q, H.prototype), (q.isPureReactComponent = !0);
  var I = Array.isArray;
  function it() {}
  var k = { H: null, A: null, T: null, S: null },
    K = Object.prototype.hasOwnProperty;
  function at(E, L, Q) {
    var P = Q.ref;
    return {
      $$typeof: a,
      type: E,
      key: L,
      ref: P !== void 0 ? P : null,
      props: Q,
    };
  }
  function tt(E, L) {
    return at(E.type, L, E.props);
  }
  function pt(E) {
    return typeof E == "object" && E !== null && E.$$typeof === a;
  }
  function vt(E) {
    var L = { "=": "=0", ":": "=2" };
    return (
      "$" +
      E.replace(/[=:]/g, function (Q) {
        return L[Q];
      })
    );
  }
  var te = /\/+/g;
  function Xt(E, L) {
    return typeof E == "object" && E !== null && E.key != null
      ? vt("" + E.key)
      : L.toString(36);
  }
  function Ht(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (
          (typeof E.status == "string"
            ? E.then(it, it)
            : ((E.status = "pending"),
              E.then(
                function (L) {
                  E.status === "pending" &&
                    ((E.status = "fulfilled"), (E.value = L));
                },
                function (L) {
                  E.status === "pending" &&
                    ((E.status = "rejected"), (E.reason = L));
                }
              )),
          E.status)
        ) {
          case "fulfilled":
            return E.value;
          case "rejected":
            throw E.reason;
        }
    }
    throw E;
  }
  function R(E, L, Q, P, st) {
    var ct = typeof E;
    (ct === "undefined" || ct === "boolean") && (E = null);
    var Tt = !1;
    if (E === null) Tt = !0;
    else
      switch (ct) {
        case "bigint":
        case "string":
        case "number":
          Tt = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case a:
            case l:
              Tt = !0;
              break;
            case x:
              return (Tt = E._init), R(Tt(E._payload), L, Q, P, st);
          }
      }
    if (Tt)
      return (
        (st = st(E)),
        (Tt = P === "" ? "." + Xt(E, 0) : P),
        I(st)
          ? ((Q = ""),
            Tt != null && (Q = Tt.replace(te, "$&/") + "/"),
            R(st, L, Q, "", function (gi) {
              return gi;
            }))
          : st != null &&
            (pt(st) &&
              (st = tt(
                st,
                Q +
                  (st.key == null || (E && E.key === st.key)
                    ? ""
                    : ("" + st.key).replace(te, "$&/") + "/") +
                  Tt
              )),
            L.push(st)),
        1
      );
    Tt = 0;
    var re = P === "" ? "." : P + ":";
    if (I(E))
      for (var Yt = 0; Yt < E.length; Yt++)
        (P = E[Yt]), (ct = re + Xt(P, Yt)), (Tt += R(P, L, Q, ct, st));
    else if (((Yt = j(E)), typeof Yt == "function"))
      for (E = Yt.call(E), Yt = 0; !(P = E.next()).done; )
        (P = P.value), (ct = re + Xt(P, Yt++)), (Tt += R(P, L, Q, ct, st));
    else if (ct === "object") {
      if (typeof E.then == "function") return R(Ht(E), L, Q, P, st);
      throw (
        ((L = String(E)),
        Error(
          "Objects are not valid as a React child (found: " +
            (L === "[object Object]"
              ? "object with keys {" + Object.keys(E).join(", ") + "}"
              : L) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return Tt;
  }
  function Z(E, L, Q) {
    if (E == null) return E;
    var P = [],
      st = 0;
    return (
      R(E, P, "", "", function (ct) {
        return L.call(Q, ct, st++);
      }),
      P
    );
  }
  function F(E) {
    if (E._status === -1) {
      var L = E._result;
      (L = L()),
        L.then(
          function (Q) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 1), (E._result = Q));
          },
          function (Q) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 2), (E._result = Q));
          }
        ),
        E._status === -1 && ((E._status = 0), (E._result = L));
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var ut =
      typeof reportError == "function"
        ? reportError
        : function (E) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var L = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof E == "object" &&
                  E !== null &&
                  typeof E.message == "string"
                    ? String(E.message)
                    : String(E),
                error: E,
              });
              if (!window.dispatchEvent(L)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", E);
              return;
            }
            console.error(E);
          },
    yt = {
      map: Z,
      forEach: function (E, L, Q) {
        Z(
          E,
          function () {
            L.apply(this, arguments);
          },
          Q
        );
      },
      count: function (E) {
        var L = 0;
        return (
          Z(E, function () {
            L++;
          }),
          L
        );
      },
      toArray: function (E) {
        return (
          Z(E, function (L) {
            return L;
          }) || []
        );
      },
      only: function (E) {
        if (!pt(E))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return E;
      },
    };
  return (
    (lt.Activity = b),
    (lt.Children = yt),
    (lt.Component = H),
    (lt.Fragment = u),
    (lt.Profiler = c),
    (lt.PureComponent = Y),
    (lt.StrictMode = o),
    (lt.Suspense = g),
    (lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k),
    (lt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (E) {
        return k.H.useMemoCache(E);
      },
    }),
    (lt.cache = function (E) {
      return function () {
        return E.apply(null, arguments);
      };
    }),
    (lt.cacheSignal = function () {
      return null;
    }),
    (lt.cloneElement = function (E, L, Q) {
      if (E == null)
        throw Error(
          "The argument must be a React element, but you passed " + E + "."
        );
      var P = U({}, E.props),
        st = E.key;
      if (L != null)
        for (ct in (L.key !== void 0 && (st = "" + L.key), L))
          !K.call(L, ct) ||
            ct === "key" ||
            ct === "__self" ||
            ct === "__source" ||
            (ct === "ref" && L.ref === void 0) ||
            (P[ct] = L[ct]);
      var ct = arguments.length - 2;
      if (ct === 1) P.children = Q;
      else if (1 < ct) {
        for (var Tt = Array(ct), re = 0; re < ct; re++)
          Tt[re] = arguments[re + 2];
        P.children = Tt;
      }
      return at(E.type, st, P);
    }),
    (lt.createContext = function (E) {
      return (
        (E = {
          $$typeof: d,
          _currentValue: E,
          _currentValue2: E,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (E.Provider = E),
        (E.Consumer = { $$typeof: h, _context: E }),
        E
      );
    }),
    (lt.createElement = function (E, L, Q) {
      var P,
        st = {},
        ct = null;
      if (L != null)
        for (P in (L.key !== void 0 && (ct = "" + L.key), L))
          K.call(L, P) &&
            P !== "key" &&
            P !== "__self" &&
            P !== "__source" &&
            (st[P] = L[P]);
      var Tt = arguments.length - 2;
      if (Tt === 1) st.children = Q;
      else if (1 < Tt) {
        for (var re = Array(Tt), Yt = 0; Yt < Tt; Yt++)
          re[Yt] = arguments[Yt + 2];
        st.children = re;
      }
      if (E && E.defaultProps)
        for (P in ((Tt = E.defaultProps), Tt))
          st[P] === void 0 && (st[P] = Tt[P]);
      return at(E, ct, st);
    }),
    (lt.createRef = function () {
      return { current: null };
    }),
    (lt.forwardRef = function (E) {
      return { $$typeof: m, render: E };
    }),
    (lt.isValidElement = pt),
    (lt.lazy = function (E) {
      return { $$typeof: x, _payload: { _status: -1, _result: E }, _init: F };
    }),
    (lt.memo = function (E, L) {
      return { $$typeof: p, type: E, compare: L === void 0 ? null : L };
    }),
    (lt.startTransition = function (E) {
      var L = k.T,
        Q = {};
      k.T = Q;
      try {
        var P = E(),
          st = k.S;
        st !== null && st(Q, P),
          typeof P == "object" &&
            P !== null &&
            typeof P.then == "function" &&
            P.then(it, ut);
      } catch (ct) {
        ut(ct);
      } finally {
        L !== null && Q.types !== null && (L.types = Q.types), (k.T = L);
      }
    }),
    (lt.unstable_useCacheRefresh = function () {
      return k.H.useCacheRefresh();
    }),
    (lt.use = function (E) {
      return k.H.use(E);
    }),
    (lt.useActionState = function (E, L, Q) {
      return k.H.useActionState(E, L, Q);
    }),
    (lt.useCallback = function (E, L) {
      return k.H.useCallback(E, L);
    }),
    (lt.useContext = function (E) {
      return k.H.useContext(E);
    }),
    (lt.useDebugValue = function () {}),
    (lt.useDeferredValue = function (E, L) {
      return k.H.useDeferredValue(E, L);
    }),
    (lt.useEffect = function (E, L) {
      return k.H.useEffect(E, L);
    }),
    (lt.useEffectEvent = function (E) {
      return k.H.useEffectEvent(E);
    }),
    (lt.useId = function () {
      return k.H.useId();
    }),
    (lt.useImperativeHandle = function (E, L, Q) {
      return k.H.useImperativeHandle(E, L, Q);
    }),
    (lt.useInsertionEffect = function (E, L) {
      return k.H.useInsertionEffect(E, L);
    }),
    (lt.useLayoutEffect = function (E, L) {
      return k.H.useLayoutEffect(E, L);
    }),
    (lt.useMemo = function (E, L) {
      return k.H.useMemo(E, L);
    }),
    (lt.useOptimistic = function (E, L) {
      return k.H.useOptimistic(E, L);
    }),
    (lt.useReducer = function (E, L, Q) {
      return k.H.useReducer(E, L, Q);
    }),
    (lt.useRef = function (E) {
      return k.H.useRef(E);
    }),
    (lt.useState = function (E) {
      return k.H.useState(E);
    }),
    (lt.useSyncExternalStore = function (E, L, Q) {
      return k.H.useSyncExternalStore(E, L, Q);
    }),
    (lt.useTransition = function () {
      return k.H.useTransition();
    }),
    (lt.version = "19.2.7"),
    lt
  );
}
var mp;
function Rc() {
  return mp || ((mp = 1), (Lr.exports = I1())), Lr.exports;
}
var G = Rc(),
  Hr = { exports: {} },
  fl = {},
  Yr = { exports: {} },
  qr = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pp;
function tx() {
  return (
    pp ||
      ((pp = 1),
      (function (a) {
        function l(R, Z) {
          var F = R.length;
          R.push(Z);
          t: for (; 0 < F; ) {
            var ut = (F - 1) >>> 1,
              yt = R[ut];
            if (0 < c(yt, Z)) (R[ut] = Z), (R[F] = yt), (F = ut);
            else break t;
          }
        }
        function u(R) {
          return R.length === 0 ? null : R[0];
        }
        function o(R) {
          if (R.length === 0) return null;
          var Z = R[0],
            F = R.pop();
          if (F !== Z) {
            R[0] = F;
            t: for (var ut = 0, yt = R.length, E = yt >>> 1; ut < E; ) {
              var L = 2 * (ut + 1) - 1,
                Q = R[L],
                P = L + 1,
                st = R[P];
              if (0 > c(Q, F))
                P < yt && 0 > c(st, Q)
                  ? ((R[ut] = st), (R[P] = F), (ut = P))
                  : ((R[ut] = Q), (R[L] = F), (ut = L));
              else if (P < yt && 0 > c(st, F))
                (R[ut] = st), (R[P] = F), (ut = P);
              else break t;
            }
          }
          return Z;
        }
        function c(R, Z) {
          var F = R.sortIndex - Z.sortIndex;
          return F !== 0 ? F : R.id - Z.id;
        }
        if (
          ((a.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var h = performance;
          a.unstable_now = function () {
            return h.now();
          };
        } else {
          var d = Date,
            m = d.now();
          a.unstable_now = function () {
            return d.now() - m;
          };
        }
        var g = [],
          p = [],
          x = 1,
          b = null,
          T = 3,
          j = !1,
          D = !1,
          U = !1,
          B = !1,
          H = typeof setTimeout == "function" ? setTimeout : null,
          X = typeof clearTimeout == "function" ? clearTimeout : null,
          Y = typeof setImmediate < "u" ? setImmediate : null;
        function q(R) {
          for (var Z = u(p); Z !== null; ) {
            if (Z.callback === null) o(p);
            else if (Z.startTime <= R)
              o(p), (Z.sortIndex = Z.expirationTime), l(g, Z);
            else break;
            Z = u(p);
          }
        }
        function I(R) {
          if (((U = !1), q(R), !D))
            if (u(g) !== null) (D = !0), it || ((it = !0), vt());
            else {
              var Z = u(p);
              Z !== null && Ht(I, Z.startTime - R);
            }
        }
        var it = !1,
          k = -1,
          K = 5,
          at = -1;
        function tt() {
          return B ? !0 : !(a.unstable_now() - at < K);
        }
        function pt() {
          if (((B = !1), it)) {
            var R = a.unstable_now();
            at = R;
            var Z = !0;
            try {
              t: {
                (D = !1), U && ((U = !1), X(k), (k = -1)), (j = !0);
                var F = T;
                try {
                  e: {
                    for (
                      q(R), b = u(g);
                      b !== null && !(b.expirationTime > R && tt());

                    ) {
                      var ut = b.callback;
                      if (typeof ut == "function") {
                        (b.callback = null), (T = b.priorityLevel);
                        var yt = ut(b.expirationTime <= R);
                        if (((R = a.unstable_now()), typeof yt == "function")) {
                          (b.callback = yt), q(R), (Z = !0);
                          break e;
                        }
                        b === u(g) && o(g), q(R);
                      } else o(g);
                      b = u(g);
                    }
                    if (b !== null) Z = !0;
                    else {
                      var E = u(p);
                      E !== null && Ht(I, E.startTime - R), (Z = !1);
                    }
                  }
                  break t;
                } finally {
                  (b = null), (T = F), (j = !1);
                }
                Z = void 0;
              }
            } finally {
              Z ? vt() : (it = !1);
            }
          }
        }
        var vt;
        if (typeof Y == "function")
          vt = function () {
            Y(pt);
          };
        else if (typeof MessageChannel < "u") {
          var te = new MessageChannel(),
            Xt = te.port2;
          (te.port1.onmessage = pt),
            (vt = function () {
              Xt.postMessage(null);
            });
        } else
          vt = function () {
            H(pt, 0);
          };
        function Ht(R, Z) {
          k = H(function () {
            R(a.unstable_now());
          }, Z);
        }
        (a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (R) {
            R.callback = null;
          }),
          (a.unstable_forceFrameRate = function (R) {
            0 > R || 125 < R
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (K = 0 < R ? Math.floor(1e3 / R) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return T;
          }),
          (a.unstable_next = function (R) {
            switch (T) {
              case 1:
              case 2:
              case 3:
                var Z = 3;
                break;
              default:
                Z = T;
            }
            var F = T;
            T = Z;
            try {
              return R();
            } finally {
              T = F;
            }
          }),
          (a.unstable_requestPaint = function () {
            B = !0;
          }),
          (a.unstable_runWithPriority = function (R, Z) {
            switch (R) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                R = 3;
            }
            var F = T;
            T = R;
            try {
              return Z();
            } finally {
              T = F;
            }
          }),
          (a.unstable_scheduleCallback = function (R, Z, F) {
            var ut = a.unstable_now();
            switch (
              (typeof F == "object" && F !== null
                ? ((F = F.delay),
                  (F = typeof F == "number" && 0 < F ? ut + F : ut))
                : (F = ut),
              R)
            ) {
              case 1:
                var yt = -1;
                break;
              case 2:
                yt = 250;
                break;
              case 5:
                yt = 1073741823;
                break;
              case 4:
                yt = 1e4;
                break;
              default:
                yt = 5e3;
            }
            return (
              (yt = F + yt),
              (R = {
                id: x++,
                callback: Z,
                priorityLevel: R,
                startTime: F,
                expirationTime: yt,
                sortIndex: -1,
              }),
              F > ut
                ? ((R.sortIndex = F),
                  l(p, R),
                  u(g) === null &&
                    R === u(p) &&
                    (U ? (X(k), (k = -1)) : (U = !0), Ht(I, F - ut)))
                : ((R.sortIndex = yt),
                  l(g, R),
                  D || j || ((D = !0), it || ((it = !0), vt()))),
              R
            );
          }),
          (a.unstable_shouldYield = tt),
          (a.unstable_wrapCallback = function (R) {
            var Z = T;
            return function () {
              var F = T;
              T = Z;
              try {
                return R.apply(this, arguments);
              } finally {
                T = F;
              }
            };
          });
      })(qr)),
    qr
  );
}
var yp;
function ex() {
  return yp || ((yp = 1), (Yr.exports = tx())), Yr.exports;
}
var Gr = { exports: {} },
  ue = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gp;
function nx() {
  if (gp) return ue;
  gp = 1;
  var a = Rc();
  function l(g) {
    var p = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var x = 2; x < arguments.length; x++)
        p += "&args[]=" + encodeURIComponent(arguments[x]);
    }
    return (
      "Minified React error #" +
      g +
      "; visit " +
      p +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function u() {}
  var o = {
      d: {
        f: u,
        r: function () {
          throw Error(l(522));
        },
        D: u,
        C: u,
        L: u,
        m: u,
        X: u,
        S: u,
        M: u,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for("react.portal");
  function h(g, p, x) {
    var b =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: b == null ? null : "" + b,
      children: g,
      containerInfo: p,
      implementation: x,
    };
  }
  var d = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(g, p) {
    if (g === "font") return "";
    if (typeof p == "string") return p === "use-credentials" ? p : "";
  }
  return (
    (ue.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
    (ue.createPortal = function (g, p) {
      var x =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11))
        throw Error(l(299));
      return h(g, p, null, x);
    }),
    (ue.flushSync = function (g) {
      var p = d.T,
        x = o.p;
      try {
        if (((d.T = null), (o.p = 2), g)) return g();
      } finally {
        (d.T = p), (o.p = x), o.d.f();
      }
    }),
    (ue.preconnect = function (g, p) {
      typeof g == "string" &&
        (p
          ? ((p = p.crossOrigin),
            (p =
              typeof p == "string"
                ? p === "use-credentials"
                  ? p
                  : ""
                : void 0))
          : (p = null),
        o.d.C(g, p));
    }),
    (ue.prefetchDNS = function (g) {
      typeof g == "string" && o.d.D(g);
    }),
    (ue.preinit = function (g, p) {
      if (typeof g == "string" && p && typeof p.as == "string") {
        var x = p.as,
          b = m(x, p.crossOrigin),
          T = typeof p.integrity == "string" ? p.integrity : void 0,
          j = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
        x === "style"
          ? o.d.S(g, typeof p.precedence == "string" ? p.precedence : void 0, {
              crossOrigin: b,
              integrity: T,
              fetchPriority: j,
            })
          : x === "script" &&
            o.d.X(g, {
              crossOrigin: b,
              integrity: T,
              fetchPriority: j,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
      }
    }),
    (ue.preinitModule = function (g, p) {
      if (typeof g == "string")
        if (typeof p == "object" && p !== null) {
          if (p.as == null || p.as === "script") {
            var x = m(p.as, p.crossOrigin);
            o.d.M(g, {
              crossOrigin: x,
              integrity: typeof p.integrity == "string" ? p.integrity : void 0,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
          }
        } else p == null && o.d.M(g);
    }),
    (ue.preload = function (g, p) {
      if (
        typeof g == "string" &&
        typeof p == "object" &&
        p !== null &&
        typeof p.as == "string"
      ) {
        var x = p.as,
          b = m(x, p.crossOrigin);
        o.d.L(g, x, {
          crossOrigin: b,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          type: typeof p.type == "string" ? p.type : void 0,
          fetchPriority:
            typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
          referrerPolicy:
            typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
          imageSrcSet:
            typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
          media: typeof p.media == "string" ? p.media : void 0,
        });
      }
    }),
    (ue.preloadModule = function (g, p) {
      if (typeof g == "string")
        if (p) {
          var x = m(p.as, p.crossOrigin);
          o.d.m(g, {
            as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
            crossOrigin: x,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          });
        } else o.d.m(g);
    }),
    (ue.requestFormReset = function (g) {
      o.d.r(g);
    }),
    (ue.unstable_batchedUpdates = function (g, p) {
      return g(p);
    }),
    (ue.useFormState = function (g, p, x) {
      return d.H.useFormState(g, p, x);
    }),
    (ue.useFormStatus = function () {
      return d.H.useHostTransitionStatus();
    }),
    (ue.version = "19.2.7"),
    ue
  );
}
var vp;
function ax() {
  if (vp) return Gr.exports;
  vp = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (l) {
        console.error(l);
      }
  }
  return a(), (Gr.exports = nx()), Gr.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xp;
function ix() {
  if (xp) return fl;
  xp = 1;
  var a = ex(),
    l = Rc(),
    u = ax();
  function o(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function c(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function h(t) {
    var e = t,
      n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do (e = t), (e.flags & 4098) !== 0 && (n = e.return), (t = e.return);
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function d(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function m(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function g(t) {
    if (h(t) !== t) throw Error(o(188));
  }
  function p(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = h(t)), e === null)) throw Error(o(188));
      return e !== t ? null : t;
    }
    for (var n = t, i = e; ; ) {
      var s = n.return;
      if (s === null) break;
      var r = s.alternate;
      if (r === null) {
        if (((i = s.return), i !== null)) {
          n = i;
          continue;
        }
        break;
      }
      if (s.child === r.child) {
        for (r = s.child; r; ) {
          if (r === n) return g(s), t;
          if (r === i) return g(s), e;
          r = r.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== i.return) (n = s), (i = r);
      else {
        for (var f = !1, y = s.child; y; ) {
          if (y === n) {
            (f = !0), (n = s), (i = r);
            break;
          }
          if (y === i) {
            (f = !0), (i = s), (n = r);
            break;
          }
          y = y.sibling;
        }
        if (!f) {
          for (y = r.child; y; ) {
            if (y === n) {
              (f = !0), (n = r), (i = s);
              break;
            }
            if (y === i) {
              (f = !0), (i = r), (n = s);
              break;
            }
            y = y.sibling;
          }
          if (!f) throw Error(o(189));
        }
      }
      if (n.alternate !== i) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? t : e;
  }
  function x(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = x(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var b = Object.assign,
    T = Symbol.for("react.element"),
    j = Symbol.for("react.transitional.element"),
    D = Symbol.for("react.portal"),
    U = Symbol.for("react.fragment"),
    B = Symbol.for("react.strict_mode"),
    H = Symbol.for("react.profiler"),
    X = Symbol.for("react.consumer"),
    Y = Symbol.for("react.context"),
    q = Symbol.for("react.forward_ref"),
    I = Symbol.for("react.suspense"),
    it = Symbol.for("react.suspense_list"),
    k = Symbol.for("react.memo"),
    K = Symbol.for("react.lazy"),
    at = Symbol.for("react.activity"),
    tt = Symbol.for("react.memo_cache_sentinel"),
    pt = Symbol.iterator;
  function vt(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (pt && t[pt]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var te = Symbol.for("react.client.reference");
  function Xt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === te ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case U:
        return "Fragment";
      case H:
        return "Profiler";
      case B:
        return "StrictMode";
      case I:
        return "Suspense";
      case it:
        return "SuspenseList";
      case at:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case D:
          return "Portal";
        case Y:
          return t.displayName || "Context";
        case X:
          return (t._context.displayName || "Context") + ".Consumer";
        case q:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case k:
          return (
            (e = t.displayName || null), e !== null ? e : Xt(t.type) || "Memo"
          );
        case K:
          (e = t._payload), (t = t._init);
          try {
            return Xt(t(e));
          } catch {}
      }
    return null;
  }
  var Ht = Array.isArray,
    R = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Z = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    F = { pending: !1, data: null, method: null, action: null },
    ut = [],
    yt = -1;
  function E(t) {
    return { current: t };
  }
  function L(t) {
    0 > yt || ((t.current = ut[yt]), (ut[yt] = null), yt--);
  }
  function Q(t, e) {
    yt++, (ut[yt] = t.current), (t.current = e);
  }
  var P = E(null),
    st = E(null),
    ct = E(null),
    Tt = E(null);
  function re(t, e) {
    switch ((Q(ct, e), Q(st, t), Q(P, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Vm(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          (e = Vm(e)), (t = _m(e, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    L(P), Q(P, t);
  }
  function Yt() {
    L(P), L(st), L(ct);
  }
  function gi(t) {
    t.memoizedState !== null && Q(Tt, t);
    var e = P.current,
      n = _m(e, t.type);
    e !== n && (Q(st, t), Q(P, n));
  }
  function Dl(t) {
    st.current === t && (L(P), L(st)),
      Tt.current === t && (L(Tt), (sl._currentValue = F));
  }
  var xo, cf;
  function In(t) {
    if (xo === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        (xo = (e && e[1]) || ""),
          (cf =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      xo +
      t +
      cf
    );
  }
  var bo = !1;
  function So(t, e) {
    if (!t || bo) return "";
    bo = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var _ = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(_.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(_, []);
                } catch (C) {
                  var z = C;
                }
                Reflect.construct(t, [], _);
              } else {
                try {
                  _.call();
                } catch (C) {
                  z = C;
                }
                t.call(_.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (C) {
                z = C;
              }
              (_ = t()) &&
                typeof _.catch == "function" &&
                _.catch(function () {});
            }
          } catch (C) {
            if (C && z && typeof C.stack == "string") return [C.stack, z.stack];
          }
          return [null, null];
        },
      };
      i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        i.DetermineComponentFrameRoot,
        "name"
      );
      s &&
        s.configurable &&
        Object.defineProperty(i.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var r = i.DetermineComponentFrameRoot(),
        f = r[0],
        y = r[1];
      if (f && y) {
        var S = f.split(`
`),
          w = y.split(`
`);
        for (
          s = i = 0;
          i < S.length && !S[i].includes("DetermineComponentFrameRoot");

        )
          i++;
        for (; s < w.length && !w[s].includes("DetermineComponentFrameRoot"); )
          s++;
        if (i === S.length || s === w.length)
          for (
            i = S.length - 1, s = w.length - 1;
            1 <= i && 0 <= s && S[i] !== w[s];

          )
            s--;
        for (; 1 <= i && 0 <= s; i--, s--)
          if (S[i] !== w[s]) {
            if (i !== 1 || s !== 1)
              do
                if ((i--, s--, 0 > s || S[i] !== w[s])) {
                  var O =
                    `
` + S[i].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      O.includes("<anonymous>") &&
                      (O = O.replace("<anonymous>", t.displayName)),
                    O
                  );
                }
              while (1 <= i && 0 <= s);
            break;
          }
      }
    } finally {
      (bo = !1), (Error.prepareStackTrace = n);
    }
    return (n = t ? t.displayName || t.name : "") ? In(n) : "";
  }
  function wg(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return In(t.type);
      case 16:
        return In("Lazy");
      case 13:
        return t.child !== e && e !== null
          ? In("Suspense Fallback")
          : In("Suspense");
      case 19:
        return In("SuspenseList");
      case 0:
      case 15:
        return So(t.type, !1);
      case 11:
        return So(t.type.render, !1);
      case 1:
        return So(t.type, !0);
      case 31:
        return In("Activity");
      default:
        return "";
    }
  }
  function ff(t) {
    try {
      var e = "",
        n = null;
      do (e += wg(t, n)), (n = t), (t = t.return);
      while (t);
      return e;
    } catch (i) {
      return (
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack
      );
    }
  }
  var To = Object.prototype.hasOwnProperty,
    Ao = a.unstable_scheduleCallback,
    Eo = a.unstable_cancelCallback,
    jg = a.unstable_shouldYield,
    zg = a.unstable_requestPaint,
    be = a.unstable_now,
    Cg = a.unstable_getCurrentPriorityLevel,
    df = a.unstable_ImmediatePriority,
    hf = a.unstable_UserBlockingPriority,
    Nl = a.unstable_NormalPriority,
    Rg = a.unstable_LowPriority,
    mf = a.unstable_IdlePriority,
    Og = a.log,
    Vg = a.unstable_setDisableYieldValue,
    vi = null,
    Se = null;
  function An(t) {
    if (
      (typeof Og == "function" && Vg(t),
      Se && typeof Se.setStrictMode == "function")
    )
      try {
        Se.setStrictMode(vi, t);
      } catch {}
  }
  var Te = Math.clz32 ? Math.clz32 : Bg,
    _g = Math.log,
    Ug = Math.LN2;
  function Bg(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((_g(t) / Ug) | 0)) | 0;
  }
  var wl = 256,
    jl = 262144,
    zl = 4194304;
  function ta(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
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
        return 64;
      case 128:
        return 128;
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
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Cl(t, e, n) {
    var i = t.pendingLanes;
    if (i === 0) return 0;
    var s = 0,
      r = t.suspendedLanes,
      f = t.pingedLanes;
    t = t.warmLanes;
    var y = i & 134217727;
    return (
      y !== 0
        ? ((i = y & ~r),
          i !== 0
            ? (s = ta(i))
            : ((f &= y),
              f !== 0
                ? (s = ta(f))
                : n || ((n = y & ~t), n !== 0 && (s = ta(n)))))
        : ((y = i & ~r),
          y !== 0
            ? (s = ta(y))
            : f !== 0
            ? (s = ta(f))
            : n || ((n = i & ~t), n !== 0 && (s = ta(n)))),
      s === 0
        ? 0
        : e !== 0 &&
          e !== s &&
          (e & r) === 0 &&
          ((r = s & -s),
          (n = e & -e),
          r >= n || (r === 32 && (n & 4194048) !== 0))
        ? e
        : s
    );
  }
  function xi(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Lg(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
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
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function pf() {
    var t = zl;
    return (zl <<= 1), (zl & 62914560) === 0 && (zl = 4194304), t;
  }
  function Mo(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function bi(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function Hg(t, e, n, i, s, r) {
    var f = t.pendingLanes;
    (t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= n),
      (t.entangledLanes &= n),
      (t.errorRecoveryDisabledLanes &= n),
      (t.shellSuspendCounter = 0);
    var y = t.entanglements,
      S = t.expirationTimes,
      w = t.hiddenUpdates;
    for (n = f & ~n; 0 < n; ) {
      var O = 31 - Te(n),
        _ = 1 << O;
      (y[O] = 0), (S[O] = -1);
      var z = w[O];
      if (z !== null)
        for (w[O] = null, O = 0; O < z.length; O++) {
          var C = z[O];
          C !== null && (C.lane &= -536870913);
        }
      n &= ~_;
    }
    i !== 0 && yf(t, i, 0),
      r !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= r & ~(f & ~e));
  }
  function yf(t, e, n) {
    (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
    var i = 31 - Te(e);
    (t.entangledLanes |= e),
      (t.entanglements[i] = t.entanglements[i] | 1073741824 | (n & 261930));
  }
  function gf(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n; ) {
      var i = 31 - Te(n),
        s = 1 << i;
      (s & e) | (t[i] & e) && (t[i] |= e), (n &= ~s);
    }
  }
  function vf(t, e) {
    var n = e & -e;
    return (
      (n = (n & 42) !== 0 ? 1 : Do(n)),
      (n & (t.suspendedLanes | e)) !== 0 ? 0 : n
    );
  }
  function Do(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function No(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function xf() {
    var t = Z.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : ip(t.type));
  }
  function bf(t, e) {
    var n = Z.p;
    try {
      return (Z.p = t), e();
    } finally {
      Z.p = n;
    }
  }
  var En = Math.random().toString(36).slice(2),
    ee = "__reactFiber$" + En,
    he = "__reactProps$" + En,
    Ea = "__reactContainer$" + En,
    wo = "__reactEvents$" + En,
    Yg = "__reactListeners$" + En,
    qg = "__reactHandles$" + En,
    Sf = "__reactResources$" + En,
    Si = "__reactMarker$" + En;
  function jo(t) {
    delete t[ee], delete t[he], delete t[wo], delete t[Yg], delete t[qg];
  }
  function Ma(t) {
    var e = t[ee];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if ((e = n[Ea] || n[ee])) {
        if (
          ((n = e.alternate),
          e.child !== null || (n !== null && n.child !== null))
        )
          for (t = Gm(t); t !== null; ) {
            if ((n = t[ee])) return n;
            t = Gm(t);
          }
        return e;
      }
      (t = n), (n = t.parentNode);
    }
    return null;
  }
  function Da(t) {
    if ((t = t[ee] || t[Ea])) {
      var e = t.tag;
      if (
        e === 5 ||
        e === 6 ||
        e === 13 ||
        e === 31 ||
        e === 26 ||
        e === 27 ||
        e === 3
      )
        return t;
    }
    return null;
  }
  function Ti(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(o(33));
  }
  function Na(t) {
    var e = t[Sf];
    return (
      e ||
        (e = t[Sf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Pt(t) {
    t[Si] = !0;
  }
  var Tf = new Set(),
    Af = {};
  function ea(t, e) {
    wa(t, e), wa(t + "Capture", e);
  }
  function wa(t, e) {
    for (Af[t] = e, t = 0; t < e.length; t++) Tf.add(e[t]);
  }
  var Gg = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Ef = {},
    Mf = {};
  function Xg(t) {
    return To.call(Mf, t)
      ? !0
      : To.call(Ef, t)
      ? !1
      : Gg.test(t)
      ? (Mf[t] = !0)
      : ((Ef[t] = !0), !1);
  }
  function Rl(t, e, n) {
    if (Xg(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var i = e.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function Ol(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function an(t, e, n, i) {
    if (i === null) t.removeAttribute(n);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + i);
    }
  }
  function Ce(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Df(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function kg(t, e, n) {
    var i = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (
      !t.hasOwnProperty(e) &&
      typeof i < "u" &&
      typeof i.get == "function" &&
      typeof i.set == "function"
    ) {
      var s = i.get,
        r = i.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return s.call(this);
          },
          set: function (f) {
            (n = "" + f), r.call(this, f);
          },
        }),
        Object.defineProperty(t, e, { enumerable: i.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (f) {
            n = "" + f;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function zo(t) {
    if (!t._valueTracker) {
      var e = Df(t) ? "checked" : "value";
      t._valueTracker = kg(t, e, "" + t[e]);
    }
  }
  function Nf(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      i = "";
    return (
      t && (i = Df(t) ? (t.checked ? "true" : "false") : t.value),
      (t = i),
      t !== n ? (e.setValue(t), !0) : !1
    );
  }
  function Vl(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Zg = /[\n"\\]/g;
  function Re(t) {
    return t.replace(Zg, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Co(t, e, n, i, s, r, f, y) {
    (t.name = ""),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (t.type = f)
        : t.removeAttribute("type"),
      e != null
        ? f === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + Ce(e))
          : t.value !== "" + Ce(e) && (t.value = "" + Ce(e))
        : (f !== "submit" && f !== "reset") || t.removeAttribute("value"),
      e != null
        ? Ro(t, f, Ce(e))
        : n != null
        ? Ro(t, f, Ce(n))
        : i != null && t.removeAttribute("value"),
      s == null && r != null && (t.defaultChecked = !!r),
      s != null &&
        (t.checked = s && typeof s != "function" && typeof s != "symbol"),
      y != null &&
      typeof y != "function" &&
      typeof y != "symbol" &&
      typeof y != "boolean"
        ? (t.name = "" + Ce(y))
        : t.removeAttribute("name");
  }
  function wf(t, e, n, i, s, r, f, y) {
    if (
      (r != null &&
        typeof r != "function" &&
        typeof r != "symbol" &&
        typeof r != "boolean" &&
        (t.type = r),
      e != null || n != null)
    ) {
      if (!((r !== "submit" && r !== "reset") || e != null)) {
        zo(t);
        return;
      }
      (n = n != null ? "" + Ce(n) : ""),
        (e = e != null ? "" + Ce(e) : n),
        y || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (i = i ?? s),
      (i = typeof i != "function" && typeof i != "symbol" && !!i),
      (t.checked = y ? t.checked : !!i),
      (t.defaultChecked = !!i),
      f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (t.name = f),
      zo(t);
  }
  function Ro(t, e, n) {
    (e === "number" && Vl(t.ownerDocument) === t) ||
      t.defaultValue === "" + n ||
      (t.defaultValue = "" + n);
  }
  function ja(t, e, n, i) {
    if (((t = t.options), e)) {
      e = {};
      for (var s = 0; s < n.length; s++) e["$" + n[s]] = !0;
      for (n = 0; n < t.length; n++)
        (s = e.hasOwnProperty("$" + t[n].value)),
          t[n].selected !== s && (t[n].selected = s),
          s && i && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + Ce(n), e = null, s = 0; s < t.length; s++) {
        if (t[s].value === n) {
          (t[s].selected = !0), i && (t[s].defaultSelected = !0);
          return;
        }
        e !== null || t[s].disabled || (e = t[s]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function jf(t, e, n) {
    if (
      e != null &&
      ((e = "" + Ce(e)), e !== t.value && (t.value = e), n == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + Ce(n) : "";
  }
  function zf(t, e, n, i) {
    if (e == null) {
      if (i != null) {
        if (n != null) throw Error(o(92));
        if (Ht(i)) {
          if (1 < i.length) throw Error(o(93));
          i = i[0];
        }
        n = i;
      }
      n == null && (n = ""), (e = n);
    }
    (n = Ce(e)),
      (t.defaultValue = n),
      (i = t.textContent),
      i === n && i !== "" && i !== null && (t.value = i),
      zo(t);
  }
  function za(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Qg = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Cf(t, e, n) {
    var i = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? i
        ? t.setProperty(e, "")
        : e === "float"
        ? (t.cssFloat = "")
        : (t[e] = "")
      : i
      ? t.setProperty(e, n)
      : typeof n != "number" || n === 0 || Qg.has(e)
      ? e === "float"
        ? (t.cssFloat = n)
        : (t[e] = ("" + n).trim())
      : (t[e] = n + "px");
  }
  function Rf(t, e, n) {
    if (e != null && typeof e != "object") throw Error(o(62));
    if (((t = t.style), n != null)) {
      for (var i in n)
        !n.hasOwnProperty(i) ||
          (e != null && e.hasOwnProperty(i)) ||
          (i.indexOf("--") === 0
            ? t.setProperty(i, "")
            : i === "float"
            ? (t.cssFloat = "")
            : (t[i] = ""));
      for (var s in e)
        (i = e[s]), e.hasOwnProperty(s) && n[s] !== i && Cf(t, s, i);
    } else for (var r in e) e.hasOwnProperty(r) && Cf(t, r, e[r]);
  }
  function Oo(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
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
  var Kg = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Fg =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function _l(t) {
    return Fg.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function ln() {}
  var Vo = null;
  function _o(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Ca = null,
    Ra = null;
  function Of(t) {
    var e = Da(t);
    if (e && (t = e.stateNode)) {
      var n = t[he] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (Co(
              t,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name
            ),
            (e = n.name),
            n.type === "radio" && e != null)
          ) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + Re("" + e) + '"][type="radio"]'
              ),
                e = 0;
              e < n.length;
              e++
            ) {
              var i = n[e];
              if (i !== t && i.form === t.form) {
                var s = i[he] || null;
                if (!s) throw Error(o(90));
                Co(
                  i,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (e = 0; e < n.length; e++)
              (i = n[e]), i.form === t.form && Nf(i);
          }
          break t;
        case "textarea":
          jf(t, n.value, n.defaultValue);
          break t;
        case "select":
          (e = n.value), e != null && ja(t, !!n.multiple, e, !1);
      }
    }
  }
  var Uo = !1;
  function Vf(t, e, n) {
    if (Uo) return t(e, n);
    Uo = !0;
    try {
      var i = t(e);
      return i;
    } finally {
      if (
        ((Uo = !1),
        (Ca !== null || Ra !== null) &&
          (Ts(), Ca && ((e = Ca), (t = Ra), (Ra = Ca = null), Of(e), t)))
      )
        for (e = 0; e < t.length; e++) Of(t[e]);
    }
  }
  function Ai(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var i = n[he] || null;
    if (i === null) return null;
    n = i[e];
    t: switch (e) {
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
        (i = !i.disabled) ||
          ((t = t.type),
          (i = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !i);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(o(231, e, typeof n));
    return n;
  }
  var sn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Bo = !1;
  if (sn)
    try {
      var Ei = {};
      Object.defineProperty(Ei, "passive", {
        get: function () {
          Bo = !0;
        },
      }),
        window.addEventListener("test", Ei, Ei),
        window.removeEventListener("test", Ei, Ei);
    } catch {
      Bo = !1;
    }
  var Mn = null,
    Lo = null,
    Ul = null;
  function _f() {
    if (Ul) return Ul;
    var t,
      e = Lo,
      n = e.length,
      i,
      s = "value" in Mn ? Mn.value : Mn.textContent,
      r = s.length;
    for (t = 0; t < n && e[t] === s[t]; t++);
    var f = n - t;
    for (i = 1; i <= f && e[n - i] === s[r - i]; i++);
    return (Ul = s.slice(t, 1 < i ? 1 - i : void 0));
  }
  function Bl(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Ll() {
    return !0;
  }
  function Uf() {
    return !1;
  }
  function me(t) {
    function e(n, i, s, r, f) {
      (this._reactName = n),
        (this._targetInst = s),
        (this.type = i),
        (this.nativeEvent = r),
        (this.target = f),
        (this.currentTarget = null);
      for (var y in t)
        t.hasOwnProperty(y) && ((n = t[y]), (this[y] = n ? n(r) : r[y]));
      return (
        (this.isDefaultPrevented = (
          r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1
        )
          ? Ll
          : Uf),
        (this.isPropagationStopped = Uf),
        this
      );
    }
    return (
      b(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Ll));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Ll));
        },
        persist: function () {},
        isPersistent: Ll,
      }),
      e
    );
  }
  var na = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Hl = me(na),
    Mi = b({}, na, { view: 0, detail: 0 }),
    Jg = me(Mi),
    Ho,
    Yo,
    Di,
    Yl = b({}, Mi, {
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
      getModifierState: Go,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Di &&
              (Di && t.type === "mousemove"
                ? ((Ho = t.screenX - Di.screenX), (Yo = t.screenY - Di.screenY))
                : (Yo = Ho = 0),
              (Di = t)),
            Ho);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Yo;
      },
    }),
    Bf = me(Yl),
    Wg = b({}, Yl, { dataTransfer: 0 }),
    Pg = me(Wg),
    $g = b({}, Mi, { relatedTarget: 0 }),
    qo = me($g),
    Ig = b({}, na, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    tv = me(Ig),
    ev = b({}, na, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    nv = me(ev),
    av = b({}, na, { data: 0 }),
    Lf = me(av),
    iv = {
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
    lv = {
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
    sv = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function ov(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = sv[t])
      ? !!e[t]
      : !1;
  }
  function Go() {
    return ov;
  }
  var uv = b({}, Mi, {
      key: function (t) {
        if (t.key) {
          var e = iv[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Bl(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? lv[t.keyCode] || "Unidentified"
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
      getModifierState: Go,
      charCode: function (t) {
        return t.type === "keypress" ? Bl(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Bl(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    rv = me(uv),
    cv = b({}, Yl, {
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
    Hf = me(cv),
    fv = b({}, Mi, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Go,
    }),
    dv = me(fv),
    hv = b({}, na, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    mv = me(hv),
    pv = b({}, Yl, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    yv = me(pv),
    gv = b({}, na, { newState: 0, oldState: 0 }),
    vv = me(gv),
    xv = [9, 13, 27, 32],
    Xo = sn && "CompositionEvent" in window,
    Ni = null;
  sn && "documentMode" in document && (Ni = document.documentMode);
  var bv = sn && "TextEvent" in window && !Ni,
    Yf = sn && (!Xo || (Ni && 8 < Ni && 11 >= Ni)),
    qf = " ",
    Gf = !1;
  function Xf(t, e) {
    switch (t) {
      case "keyup":
        return xv.indexOf(e.keyCode) !== -1;
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
  function kf(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var Oa = !1;
  function Sv(t, e) {
    switch (t) {
      case "compositionend":
        return kf(e);
      case "keypress":
        return e.which !== 32 ? null : ((Gf = !0), qf);
      case "textInput":
        return (t = e.data), t === qf && Gf ? null : t;
      default:
        return null;
    }
  }
  function Tv(t, e) {
    if (Oa)
      return t === "compositionend" || (!Xo && Xf(t, e))
        ? ((t = _f()), (Ul = Lo = Mn = null), (Oa = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Yf && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Av = {
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
  function Zf(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Av[t.type] : e === "textarea";
  }
  function Qf(t, e, n, i) {
    Ca ? (Ra ? Ra.push(i) : (Ra = [i])) : (Ca = i),
      (e = js(e, "onChange")),
      0 < e.length &&
        ((n = new Hl("onChange", "change", null, n, i)),
        t.push({ event: n, listeners: e }));
  }
  var wi = null,
    ji = null;
  function Ev(t) {
    wm(t, 0);
  }
  function ql(t) {
    var e = Ti(t);
    if (Nf(e)) return t;
  }
  function Kf(t, e) {
    if (t === "change") return e;
  }
  var Ff = !1;
  if (sn) {
    var ko;
    if (sn) {
      var Zo = "oninput" in document;
      if (!Zo) {
        var Jf = document.createElement("div");
        Jf.setAttribute("oninput", "return;"),
          (Zo = typeof Jf.oninput == "function");
      }
      ko = Zo;
    } else ko = !1;
    Ff = ko && (!document.documentMode || 9 < document.documentMode);
  }
  function Wf() {
    wi && (wi.detachEvent("onpropertychange", Pf), (ji = wi = null));
  }
  function Pf(t) {
    if (t.propertyName === "value" && ql(ji)) {
      var e = [];
      Qf(e, ji, t, _o(t)), Vf(Ev, e);
    }
  }
  function Mv(t, e, n) {
    t === "focusin"
      ? (Wf(), (wi = e), (ji = n), wi.attachEvent("onpropertychange", Pf))
      : t === "focusout" && Wf();
  }
  function Dv(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return ql(ji);
  }
  function Nv(t, e) {
    if (t === "click") return ql(e);
  }
  function wv(t, e) {
    if (t === "input" || t === "change") return ql(e);
  }
  function jv(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var Ae = typeof Object.is == "function" ? Object.is : jv;
  function zi(t, e) {
    if (Ae(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var n = Object.keys(t),
      i = Object.keys(e);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var s = n[i];
      if (!To.call(e, s) || !Ae(t[s], e[s])) return !1;
    }
    return !0;
  }
  function $f(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function If(t, e) {
    var n = $f(t);
    t = 0;
    for (var i; n; ) {
      if (n.nodeType === 3) {
        if (((i = t + n.textContent.length), t <= e && i >= e))
          return { node: n, offset: e - t };
        t = i;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = $f(n);
    }
  }
  function td(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
        ? td(t, e.parentNode)
        : "contains" in t
        ? t.contains(e)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(e) & 16)
        : !1
      : !1;
  }
  function ed(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Vl(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Vl(t.document);
    }
    return e;
  }
  function Qo(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var zv = sn && "documentMode" in document && 11 >= document.documentMode,
    Va = null,
    Ko = null,
    Ci = null,
    Fo = !1;
  function nd(t, e, n) {
    var i =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Fo ||
      Va == null ||
      Va !== Vl(i) ||
      ((i = Va),
      "selectionStart" in i && Qo(i)
        ? (i = { start: i.selectionStart, end: i.selectionEnd })
        : ((i = (
            (i.ownerDocument && i.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset,
          })),
      (Ci && zi(Ci, i)) ||
        ((Ci = i),
        (i = js(Ko, "onSelect")),
        0 < i.length &&
          ((e = new Hl("onSelect", "select", null, e, n)),
          t.push({ event: e, listeners: i }),
          (e.target = Va))));
  }
  function aa(t, e) {
    var n = {};
    return (
      (n[t.toLowerCase()] = e.toLowerCase()),
      (n["Webkit" + t] = "webkit" + e),
      (n["Moz" + t] = "moz" + e),
      n
    );
  }
  var _a = {
      animationend: aa("Animation", "AnimationEnd"),
      animationiteration: aa("Animation", "AnimationIteration"),
      animationstart: aa("Animation", "AnimationStart"),
      transitionrun: aa("Transition", "TransitionRun"),
      transitionstart: aa("Transition", "TransitionStart"),
      transitioncancel: aa("Transition", "TransitionCancel"),
      transitionend: aa("Transition", "TransitionEnd"),
    },
    Jo = {},
    ad = {};
  sn &&
    ((ad = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete _a.animationend.animation,
      delete _a.animationiteration.animation,
      delete _a.animationstart.animation),
    "TransitionEvent" in window || delete _a.transitionend.transition);
  function ia(t) {
    if (Jo[t]) return Jo[t];
    if (!_a[t]) return t;
    var e = _a[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in ad) return (Jo[t] = e[n]);
    return t;
  }
  var id = ia("animationend"),
    ld = ia("animationiteration"),
    sd = ia("animationstart"),
    Cv = ia("transitionrun"),
    Rv = ia("transitionstart"),
    Ov = ia("transitioncancel"),
    od = ia("transitionend"),
    ud = new Map(),
    Wo =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  Wo.push("scrollEnd");
  function Xe(t, e) {
    ud.set(t, e), ea(e, [t]);
  }
  var Gl =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var e = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" &&
                  t !== null &&
                  typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(e)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    Oe = [],
    Ua = 0,
    Po = 0;
  function Xl() {
    for (var t = Ua, e = (Po = Ua = 0); e < t; ) {
      var n = Oe[e];
      Oe[e++] = null;
      var i = Oe[e];
      Oe[e++] = null;
      var s = Oe[e];
      Oe[e++] = null;
      var r = Oe[e];
      if (((Oe[e++] = null), i !== null && s !== null)) {
        var f = i.pending;
        f === null ? (s.next = s) : ((s.next = f.next), (f.next = s)),
          (i.pending = s);
      }
      r !== 0 && rd(n, s, r);
    }
  }
  function kl(t, e, n, i) {
    (Oe[Ua++] = t),
      (Oe[Ua++] = e),
      (Oe[Ua++] = n),
      (Oe[Ua++] = i),
      (Po |= i),
      (t.lanes |= i),
      (t = t.alternate),
      t !== null && (t.lanes |= i);
  }
  function $o(t, e, n, i) {
    return kl(t, e, n, i), Zl(t);
  }
  function la(t, e) {
    return kl(t, null, null, e), Zl(t);
  }
  function rd(t, e, n) {
    t.lanes |= n;
    var i = t.alternate;
    i !== null && (i.lanes |= n);
    for (var s = !1, r = t.return; r !== null; )
      (r.childLanes |= n),
        (i = r.alternate),
        i !== null && (i.childLanes |= n),
        r.tag === 22 &&
          ((t = r.stateNode), t === null || t._visibility & 1 || (s = !0)),
        (t = r),
        (r = r.return);
    return t.tag === 3
      ? ((r = t.stateNode),
        s &&
          e !== null &&
          ((s = 31 - Te(n)),
          (t = r.hiddenUpdates),
          (i = t[s]),
          i === null ? (t[s] = [e]) : i.push(e),
          (e.lane = n | 536870912)),
        r)
      : null;
  }
  function Zl(t) {
    if (50 < Ii) throw ((Ii = 0), (or = null), Error(o(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ba = {};
  function Vv(t, e, n, i) {
    (this.tag = t),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = i),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Ee(t, e, n, i) {
    return new Vv(t, e, n, i);
  }
  function Io(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function on(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = Ee(t.tag, e, t.key, t.mode)),
          (n.elementType = t.elementType),
          (n.type = t.type),
          (n.stateNode = t.stateNode),
          (n.alternate = t),
          (t.alternate = n))
        : ((n.pendingProps = e),
          (n.type = t.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = t.flags & 65011712),
      (n.childLanes = t.childLanes),
      (n.lanes = t.lanes),
      (n.child = t.child),
      (n.memoizedProps = t.memoizedProps),
      (n.memoizedState = t.memoizedState),
      (n.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (n.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (n.sibling = t.sibling),
      (n.index = t.index),
      (n.ref = t.ref),
      (n.refCleanup = t.refCleanup),
      n
    );
  }
  function cd(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return (
      n === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = n.childLanes),
          (t.lanes = n.lanes),
          (t.child = n.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = n.memoizedProps),
          (t.memoizedState = n.memoizedState),
          (t.updateQueue = n.updateQueue),
          (t.type = n.type),
          (e = n.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function Ql(t, e, n, i, s, r) {
    var f = 0;
    if (((i = t), typeof t == "function")) Io(t) && (f = 1);
    else if (typeof t == "string")
      f = H1(t, n, P.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      t: switch (t) {
        case at:
          return (t = Ee(31, n, e, s)), (t.elementType = at), (t.lanes = r), t;
        case U:
          return sa(n.children, s, r, e);
        case B:
          (f = 8), (s |= 24);
          break;
        case H:
          return (
            (t = Ee(12, n, e, s | 2)), (t.elementType = H), (t.lanes = r), t
          );
        case I:
          return (t = Ee(13, n, e, s)), (t.elementType = I), (t.lanes = r), t;
        case it:
          return (t = Ee(19, n, e, s)), (t.elementType = it), (t.lanes = r), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case Y:
                f = 10;
                break t;
              case X:
                f = 9;
                break t;
              case q:
                f = 11;
                break t;
              case k:
                f = 14;
                break t;
              case K:
                (f = 16), (i = null);
                break t;
            }
          (f = 29),
            (n = Error(o(130, t === null ? "null" : typeof t, ""))),
            (i = null);
      }
    return (
      (e = Ee(f, n, e, s)), (e.elementType = t), (e.type = i), (e.lanes = r), e
    );
  }
  function sa(t, e, n, i) {
    return (t = Ee(7, t, i, e)), (t.lanes = n), t;
  }
  function tu(t, e, n) {
    return (t = Ee(6, t, null, e)), (t.lanes = n), t;
  }
  function fd(t) {
    var e = Ee(18, null, null, 0);
    return (e.stateNode = t), e;
  }
  function eu(t, e, n) {
    return (
      (e = Ee(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var dd = new WeakMap();
  function Ve(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = dd.get(t);
      return n !== void 0
        ? n
        : ((e = { value: t, source: e, stack: ff(e) }), dd.set(t, e), e);
    }
    return { value: t, source: e, stack: ff(e) };
  }
  var La = [],
    Ha = 0,
    Kl = null,
    Ri = 0,
    _e = [],
    Ue = 0,
    Dn = null,
    Je = 1,
    We = "";
  function un(t, e) {
    (La[Ha++] = Ri), (La[Ha++] = Kl), (Kl = t), (Ri = e);
  }
  function hd(t, e, n) {
    (_e[Ue++] = Je), (_e[Ue++] = We), (_e[Ue++] = Dn), (Dn = t);
    var i = Je;
    t = We;
    var s = 32 - Te(i) - 1;
    (i &= ~(1 << s)), (n += 1);
    var r = 32 - Te(e) + s;
    if (30 < r) {
      var f = s - (s % 5);
      (r = (i & ((1 << f) - 1)).toString(32)),
        (i >>= f),
        (s -= f),
        (Je = (1 << (32 - Te(e) + s)) | (n << s) | i),
        (We = r + t);
    } else (Je = (1 << r) | (n << s) | i), (We = t);
  }
  function nu(t) {
    t.return !== null && (un(t, 1), hd(t, 1, 0));
  }
  function au(t) {
    for (; t === Kl; )
      (Kl = La[--Ha]), (La[Ha] = null), (Ri = La[--Ha]), (La[Ha] = null);
    for (; t === Dn; )
      (Dn = _e[--Ue]),
        (_e[Ue] = null),
        (We = _e[--Ue]),
        (_e[Ue] = null),
        (Je = _e[--Ue]),
        (_e[Ue] = null);
  }
  function md(t, e) {
    (_e[Ue++] = Je),
      (_e[Ue++] = We),
      (_e[Ue++] = Dn),
      (Je = e.id),
      (We = e.overflow),
      (Dn = t);
  }
  var ne = null,
    Rt = null,
    gt = !1,
    Nn = null,
    Be = !1,
    iu = Error(o(519));
  function wn(t) {
    var e = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        ""
      )
    );
    throw (Oi(Ve(e, t)), iu);
  }
  function pd(t) {
    var e = t.stateNode,
      n = t.type,
      i = t.memoizedProps;
    switch (((e[ee] = t), (e[he] = i), n)) {
      case "dialog":
        dt("cancel", e), dt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        dt("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < el.length; n++) dt(el[n], e);
        break;
      case "source":
        dt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        dt("error", e), dt("load", e);
        break;
      case "details":
        dt("toggle", e);
        break;
      case "input":
        dt("invalid", e),
          wf(
            e,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          );
        break;
      case "select":
        dt("invalid", e);
        break;
      case "textarea":
        dt("invalid", e), zf(e, i.value, i.defaultValue, i.children);
    }
    (n = i.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      e.textContent === "" + n ||
      i.suppressHydrationWarning === !0 ||
      Rm(e.textContent, n)
        ? (i.popover != null && (dt("beforetoggle", e), dt("toggle", e)),
          i.onScroll != null && dt("scroll", e),
          i.onScrollEnd != null && dt("scrollend", e),
          i.onClick != null && (e.onclick = ln),
          (e = !0))
        : (e = !1),
      e || wn(t, !0);
  }
  function yd(t) {
    for (ne = t.return; ne; )
      switch (ne.tag) {
        case 5:
        case 31:
        case 13:
          Be = !1;
          return;
        case 27:
        case 3:
          Be = !0;
          return;
        default:
          ne = ne.return;
      }
  }
  function Ya(t) {
    if (t !== ne) return !1;
    if (!gt) return yd(t), (gt = !0), !1;
    var e = t.tag,
      n;
    if (
      ((n = e !== 3 && e !== 27) &&
        ((n = e === 5) &&
          ((n = t.type),
          (n =
            !(n !== "form" && n !== "button") || Tr(t.type, t.memoizedProps))),
        (n = !n)),
      n && Rt && wn(t),
      yd(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(o(317));
      Rt = qm(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(o(317));
      Rt = qm(t);
    } else
      e === 27
        ? ((e = Rt), Gn(t.type) ? ((t = Nr), (Nr = null), (Rt = t)) : (Rt = e))
        : (Rt = ne ? He(t.stateNode.nextSibling) : null);
    return !0;
  }
  function oa() {
    (Rt = ne = null), (gt = !1);
  }
  function lu() {
    var t = Nn;
    return (
      t !== null &&
        (ve === null ? (ve = t) : ve.push.apply(ve, t), (Nn = null)),
      t
    );
  }
  function Oi(t) {
    Nn === null ? (Nn = [t]) : Nn.push(t);
  }
  var su = E(null),
    ua = null,
    rn = null;
  function jn(t, e, n) {
    Q(su, e._currentValue), (e._currentValue = n);
  }
  function cn(t) {
    (t._currentValue = su.current), L(su);
  }
  function ou(t, e, n) {
    for (; t !== null; ) {
      var i = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), i !== null && (i.childLanes |= e))
          : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e),
        t === n)
      )
        break;
      t = t.return;
    }
  }
  function uu(t, e, n, i) {
    var s = t.child;
    for (s !== null && (s.return = t); s !== null; ) {
      var r = s.dependencies;
      if (r !== null) {
        var f = s.child;
        r = r.firstContext;
        t: for (; r !== null; ) {
          var y = r;
          r = s;
          for (var S = 0; S < e.length; S++)
            if (y.context === e[S]) {
              (r.lanes |= n),
                (y = r.alternate),
                y !== null && (y.lanes |= n),
                ou(r.return, n, t),
                i || (f = null);
              break t;
            }
          r = y.next;
        }
      } else if (s.tag === 18) {
        if (((f = s.return), f === null)) throw Error(o(341));
        (f.lanes |= n),
          (r = f.alternate),
          r !== null && (r.lanes |= n),
          ou(f, n, t),
          (f = null);
      } else f = s.child;
      if (f !== null) f.return = s;
      else
        for (f = s; f !== null; ) {
          if (f === t) {
            f = null;
            break;
          }
          if (((s = f.sibling), s !== null)) {
            (s.return = f.return), (f = s);
            break;
          }
          f = f.return;
        }
      s = f;
    }
  }
  function qa(t, e, n, i) {
    t = null;
    for (var s = e, r = !1; s !== null; ) {
      if (!r) {
        if ((s.flags & 524288) !== 0) r = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var f = s.alternate;
        if (f === null) throw Error(o(387));
        if (((f = f.memoizedProps), f !== null)) {
          var y = s.type;
          Ae(s.pendingProps.value, f.value) ||
            (t !== null ? t.push(y) : (t = [y]));
        }
      } else if (s === Tt.current) {
        if (((f = s.alternate), f === null)) throw Error(o(387));
        f.memoizedState.memoizedState !== s.memoizedState.memoizedState &&
          (t !== null ? t.push(sl) : (t = [sl]));
      }
      s = s.return;
    }
    t !== null && uu(e, t, n, i), (e.flags |= 262144);
  }
  function Fl(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Ae(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function ra(t) {
    (ua = t),
      (rn = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function ae(t) {
    return gd(ua, t);
  }
  function Jl(t, e) {
    return ua === null && ra(t), gd(t, e);
  }
  function gd(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), rn === null)) {
      if (t === null) throw Error(o(308));
      (rn = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288);
    } else rn = rn.next = e;
    return n;
  }
  var _v =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (n, i) {
                  t.push(i);
                },
              });
            this.abort = function () {
              (e.aborted = !0),
                t.forEach(function (n) {
                  return n();
                });
            };
          },
    Uv = a.unstable_scheduleCallback,
    Bv = a.unstable_NormalPriority,
    kt = {
      $$typeof: Y,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function ru() {
    return { controller: new _v(), data: new Map(), refCount: 0 };
  }
  function Vi(t) {
    t.refCount--,
      t.refCount === 0 &&
        Uv(Bv, function () {
          t.controller.abort();
        });
  }
  var _i = null,
    cu = 0,
    Ga = 0,
    Xa = null;
  function Lv(t, e) {
    if (_i === null) {
      var n = (_i = []);
      (cu = 0),
        (Ga = hr()),
        (Xa = {
          status: "pending",
          value: void 0,
          then: function (i) {
            n.push(i);
          },
        });
    }
    return cu++, e.then(vd, vd), e;
  }
  function vd() {
    if (--cu === 0 && _i !== null) {
      Xa !== null && (Xa.status = "fulfilled");
      var t = _i;
      (_i = null), (Ga = 0), (Xa = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Hv(t, e) {
    var n = [],
      i = {
        status: "pending",
        value: null,
        reason: null,
        then: function (s) {
          n.push(s);
        },
      };
    return (
      t.then(
        function () {
          (i.status = "fulfilled"), (i.value = e);
          for (var s = 0; s < n.length; s++) (0, n[s])(e);
        },
        function (s) {
          for (i.status = "rejected", i.reason = s, s = 0; s < n.length; s++)
            (0, n[s])(void 0);
        }
      ),
      i
    );
  }
  var xd = R.S;
  R.S = function (t, e) {
    (nm = be()),
      typeof e == "object" &&
        e !== null &&
        typeof e.then == "function" &&
        Lv(t, e),
      xd !== null && xd(t, e);
  };
  var ca = E(null);
  function fu() {
    var t = ca.current;
    return t !== null ? t : wt.pooledCache;
  }
  function Wl(t, e) {
    e === null ? Q(ca, ca.current) : Q(ca, e.pool);
  }
  function bd() {
    var t = fu();
    return t === null ? null : { parent: kt._currentValue, pool: t };
  }
  var ka = Error(o(460)),
    du = Error(o(474)),
    Pl = Error(o(542)),
    $l = { then: function () {} };
  function Sd(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function Td(t, e, n) {
    switch (
      ((n = t[n]),
      n === void 0 ? t.push(e) : n !== e && (e.then(ln, ln), (e = n)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), Ed(t), t);
      default:
        if (typeof e.status == "string") e.then(ln, ln);
        else {
          if (((t = wt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(o(482));
          (t = e),
            (t.status = "pending"),
            t.then(
              function (i) {
                if (e.status === "pending") {
                  var s = e;
                  (s.status = "fulfilled"), (s.value = i);
                }
              },
              function (i) {
                if (e.status === "pending") {
                  var s = e;
                  (s.status = "rejected"), (s.reason = i);
                }
              }
            );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), Ed(t), t);
        }
        throw ((da = e), ka);
    }
  }
  function fa(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function"
        ? ((da = n), ka)
        : n;
    }
  }
  var da = null;
  function Ad() {
    if (da === null) throw Error(o(459));
    var t = da;
    return (da = null), t;
  }
  function Ed(t) {
    if (t === ka || t === Pl) throw Error(o(483));
  }
  var Za = null,
    Ui = 0;
  function Il(t) {
    var e = Ui;
    return (Ui += 1), Za === null && (Za = []), Td(Za, t, e);
  }
  function Bi(t, e) {
    (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
  }
  function ts(t, e) {
    throw e.$$typeof === T
      ? Error(o(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          o(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t
          )
        ));
  }
  function Md(t) {
    function e(M, A) {
      if (t) {
        var N = M.deletions;
        N === null ? ((M.deletions = [A]), (M.flags |= 16)) : N.push(A);
      }
    }
    function n(M, A) {
      if (!t) return null;
      for (; A !== null; ) e(M, A), (A = A.sibling);
      return null;
    }
    function i(M) {
      for (var A = new Map(); M !== null; )
        M.key !== null ? A.set(M.key, M) : A.set(M.index, M), (M = M.sibling);
      return A;
    }
    function s(M, A) {
      return (M = on(M, A)), (M.index = 0), (M.sibling = null), M;
    }
    function r(M, A, N) {
      return (
        (M.index = N),
        t
          ? ((N = M.alternate),
            N !== null
              ? ((N = N.index), N < A ? ((M.flags |= 67108866), A) : N)
              : ((M.flags |= 67108866), A))
          : ((M.flags |= 1048576), A)
      );
    }
    function f(M) {
      return t && M.alternate === null && (M.flags |= 67108866), M;
    }
    function y(M, A, N, V) {
      return A === null || A.tag !== 6
        ? ((A = tu(N, M.mode, V)), (A.return = M), A)
        : ((A = s(A, N)), (A.return = M), A);
    }
    function S(M, A, N, V) {
      var et = N.type;
      return et === U
        ? O(M, A, N.props.children, V, N.key)
        : A !== null &&
          (A.elementType === et ||
            (typeof et == "object" &&
              et !== null &&
              et.$$typeof === K &&
              fa(et) === A.type))
        ? ((A = s(A, N.props)), Bi(A, N), (A.return = M), A)
        : ((A = Ql(N.type, N.key, N.props, null, M.mode, V)),
          Bi(A, N),
          (A.return = M),
          A);
    }
    function w(M, A, N, V) {
      return A === null ||
        A.tag !== 4 ||
        A.stateNode.containerInfo !== N.containerInfo ||
        A.stateNode.implementation !== N.implementation
        ? ((A = eu(N, M.mode, V)), (A.return = M), A)
        : ((A = s(A, N.children || [])), (A.return = M), A);
    }
    function O(M, A, N, V, et) {
      return A === null || A.tag !== 7
        ? ((A = sa(N, M.mode, V, et)), (A.return = M), A)
        : ((A = s(A, N)), (A.return = M), A);
    }
    function _(M, A, N) {
      if (
        (typeof A == "string" && A !== "") ||
        typeof A == "number" ||
        typeof A == "bigint"
      )
        return (A = tu("" + A, M.mode, N)), (A.return = M), A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case j:
            return (
              (N = Ql(A.type, A.key, A.props, null, M.mode, N)),
              Bi(N, A),
              (N.return = M),
              N
            );
          case D:
            return (A = eu(A, M.mode, N)), (A.return = M), A;
          case K:
            return (A = fa(A)), _(M, A, N);
        }
        if (Ht(A) || vt(A))
          return (A = sa(A, M.mode, N, null)), (A.return = M), A;
        if (typeof A.then == "function") return _(M, Il(A), N);
        if (A.$$typeof === Y) return _(M, Jl(M, A), N);
        ts(M, A);
      }
      return null;
    }
    function z(M, A, N, V) {
      var et = A !== null ? A.key : null;
      if (
        (typeof N == "string" && N !== "") ||
        typeof N == "number" ||
        typeof N == "bigint"
      )
        return et !== null ? null : y(M, A, "" + N, V);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case j:
            return N.key === et ? S(M, A, N, V) : null;
          case D:
            return N.key === et ? w(M, A, N, V) : null;
          case K:
            return (N = fa(N)), z(M, A, N, V);
        }
        if (Ht(N) || vt(N)) return et !== null ? null : O(M, A, N, V, null);
        if (typeof N.then == "function") return z(M, A, Il(N), V);
        if (N.$$typeof === Y) return z(M, A, Jl(M, N), V);
        ts(M, N);
      }
      return null;
    }
    function C(M, A, N, V, et) {
      if (
        (typeof V == "string" && V !== "") ||
        typeof V == "number" ||
        typeof V == "bigint"
      )
        return (M = M.get(N) || null), y(A, M, "" + V, et);
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case j:
            return (
              (M = M.get(V.key === null ? N : V.key) || null), S(A, M, V, et)
            );
          case D:
            return (
              (M = M.get(V.key === null ? N : V.key) || null), w(A, M, V, et)
            );
          case K:
            return (V = fa(V)), C(M, A, N, V, et);
        }
        if (Ht(V) || vt(V)) return (M = M.get(N) || null), O(A, M, V, et, null);
        if (typeof V.then == "function") return C(M, A, N, Il(V), et);
        if (V.$$typeof === Y) return C(M, A, N, Jl(A, V), et);
        ts(A, V);
      }
      return null;
    }
    function J(M, A, N, V) {
      for (
        var et = null, xt = null, $ = A, rt = (A = 0), mt = null;
        $ !== null && rt < N.length;
        rt++
      ) {
        $.index > rt ? ((mt = $), ($ = null)) : (mt = $.sibling);
        var bt = z(M, $, N[rt], V);
        if (bt === null) {
          $ === null && ($ = mt);
          break;
        }
        t && $ && bt.alternate === null && e(M, $),
          (A = r(bt, A, rt)),
          xt === null ? (et = bt) : (xt.sibling = bt),
          (xt = bt),
          ($ = mt);
      }
      if (rt === N.length) return n(M, $), gt && un(M, rt), et;
      if ($ === null) {
        for (; rt < N.length; rt++)
          ($ = _(M, N[rt], V)),
            $ !== null &&
              ((A = r($, A, rt)),
              xt === null ? (et = $) : (xt.sibling = $),
              (xt = $));
        return gt && un(M, rt), et;
      }
      for ($ = i($); rt < N.length; rt++)
        (mt = C($, M, rt, N[rt], V)),
          mt !== null &&
            (t &&
              mt.alternate !== null &&
              $.delete(mt.key === null ? rt : mt.key),
            (A = r(mt, A, rt)),
            xt === null ? (et = mt) : (xt.sibling = mt),
            (xt = mt));
      return (
        t &&
          $.forEach(function (Kn) {
            return e(M, Kn);
          }),
        gt && un(M, rt),
        et
      );
    }
    function nt(M, A, N, V) {
      if (N == null) throw Error(o(151));
      for (
        var et = null, xt = null, $ = A, rt = (A = 0), mt = null, bt = N.next();
        $ !== null && !bt.done;
        rt++, bt = N.next()
      ) {
        $.index > rt ? ((mt = $), ($ = null)) : (mt = $.sibling);
        var Kn = z(M, $, bt.value, V);
        if (Kn === null) {
          $ === null && ($ = mt);
          break;
        }
        t && $ && Kn.alternate === null && e(M, $),
          (A = r(Kn, A, rt)),
          xt === null ? (et = Kn) : (xt.sibling = Kn),
          (xt = Kn),
          ($ = mt);
      }
      if (bt.done) return n(M, $), gt && un(M, rt), et;
      if ($ === null) {
        for (; !bt.done; rt++, bt = N.next())
          (bt = _(M, bt.value, V)),
            bt !== null &&
              ((A = r(bt, A, rt)),
              xt === null ? (et = bt) : (xt.sibling = bt),
              (xt = bt));
        return gt && un(M, rt), et;
      }
      for ($ = i($); !bt.done; rt++, bt = N.next())
        (bt = C($, M, rt, bt.value, V)),
          bt !== null &&
            (t &&
              bt.alternate !== null &&
              $.delete(bt.key === null ? rt : bt.key),
            (A = r(bt, A, rt)),
            xt === null ? (et = bt) : (xt.sibling = bt),
            (xt = bt));
      return (
        t &&
          $.forEach(function (W1) {
            return e(M, W1);
          }),
        gt && un(M, rt),
        et
      );
    }
    function Nt(M, A, N, V) {
      if (
        (typeof N == "object" &&
          N !== null &&
          N.type === U &&
          N.key === null &&
          (N = N.props.children),
        typeof N == "object" && N !== null)
      ) {
        switch (N.$$typeof) {
          case j:
            t: {
              for (var et = N.key; A !== null; ) {
                if (A.key === et) {
                  if (((et = N.type), et === U)) {
                    if (A.tag === 7) {
                      n(M, A.sibling),
                        (V = s(A, N.props.children)),
                        (V.return = M),
                        (M = V);
                      break t;
                    }
                  } else if (
                    A.elementType === et ||
                    (typeof et == "object" &&
                      et !== null &&
                      et.$$typeof === K &&
                      fa(et) === A.type)
                  ) {
                    n(M, A.sibling),
                      (V = s(A, N.props)),
                      Bi(V, N),
                      (V.return = M),
                      (M = V);
                    break t;
                  }
                  n(M, A);
                  break;
                } else e(M, A);
                A = A.sibling;
              }
              N.type === U
                ? ((V = sa(N.props.children, M.mode, V, N.key)),
                  (V.return = M),
                  (M = V))
                : ((V = Ql(N.type, N.key, N.props, null, M.mode, V)),
                  Bi(V, N),
                  (V.return = M),
                  (M = V));
            }
            return f(M);
          case D:
            t: {
              for (et = N.key; A !== null; ) {
                if (A.key === et)
                  if (
                    A.tag === 4 &&
                    A.stateNode.containerInfo === N.containerInfo &&
                    A.stateNode.implementation === N.implementation
                  ) {
                    n(M, A.sibling),
                      (V = s(A, N.children || [])),
                      (V.return = M),
                      (M = V);
                    break t;
                  } else {
                    n(M, A);
                    break;
                  }
                else e(M, A);
                A = A.sibling;
              }
              (V = eu(N, M.mode, V)), (V.return = M), (M = V);
            }
            return f(M);
          case K:
            return (N = fa(N)), Nt(M, A, N, V);
        }
        if (Ht(N)) return J(M, A, N, V);
        if (vt(N)) {
          if (((et = vt(N)), typeof et != "function")) throw Error(o(150));
          return (N = et.call(N)), nt(M, A, N, V);
        }
        if (typeof N.then == "function") return Nt(M, A, Il(N), V);
        if (N.$$typeof === Y) return Nt(M, A, Jl(M, N), V);
        ts(M, N);
      }
      return (typeof N == "string" && N !== "") ||
        typeof N == "number" ||
        typeof N == "bigint"
        ? ((N = "" + N),
          A !== null && A.tag === 6
            ? (n(M, A.sibling), (V = s(A, N)), (V.return = M), (M = V))
            : (n(M, A), (V = tu(N, M.mode, V)), (V.return = M), (M = V)),
          f(M))
        : n(M, A);
    }
    return function (M, A, N, V) {
      try {
        Ui = 0;
        var et = Nt(M, A, N, V);
        return (Za = null), et;
      } catch ($) {
        if ($ === ka || $ === Pl) throw $;
        var xt = Ee(29, $, null, M.mode);
        return (xt.lanes = V), (xt.return = M), xt;
      } finally {
      }
    };
  }
  var ha = Md(!0),
    Dd = Md(!1),
    zn = !1;
  function hu(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function mu(t, e) {
    (t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function Cn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Rn(t, e, n) {
    var i = t.updateQueue;
    if (i === null) return null;
    if (((i = i.shared), (St & 2) !== 0)) {
      var s = i.pending;
      return (
        s === null ? (e.next = e) : ((e.next = s.next), (s.next = e)),
        (i.pending = e),
        (e = Zl(t)),
        rd(t, null, n),
        e
      );
    }
    return kl(t, i, e, n), Zl(t);
  }
  function Li(t, e, n) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194048) !== 0))
    ) {
      var i = e.lanes;
      (i &= t.pendingLanes), (n |= i), (e.lanes = n), gf(t, n);
    }
  }
  function pu(t, e) {
    var n = t.updateQueue,
      i = t.alternate;
    if (i !== null && ((i = i.updateQueue), n === i)) {
      var s = null,
        r = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var f = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          r === null ? (s = r = f) : (r = r.next = f), (n = n.next);
        } while (n !== null);
        r === null ? (s = r = e) : (r = r.next = e);
      } else s = r = e;
      (n = {
        baseState: i.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: r,
        shared: i.shared,
        callbacks: i.callbacks,
      }),
        (t.updateQueue = n);
      return;
    }
    (t = n.lastBaseUpdate),
      t === null ? (n.firstBaseUpdate = e) : (t.next = e),
      (n.lastBaseUpdate = e);
  }
  var yu = !1;
  function Hi() {
    if (yu) {
      var t = Xa;
      if (t !== null) throw t;
    }
  }
  function Yi(t, e, n, i) {
    yu = !1;
    var s = t.updateQueue;
    zn = !1;
    var r = s.firstBaseUpdate,
      f = s.lastBaseUpdate,
      y = s.shared.pending;
    if (y !== null) {
      s.shared.pending = null;
      var S = y,
        w = S.next;
      (S.next = null), f === null ? (r = w) : (f.next = w), (f = S);
      var O = t.alternate;
      O !== null &&
        ((O = O.updateQueue),
        (y = O.lastBaseUpdate),
        y !== f &&
          (y === null ? (O.firstBaseUpdate = w) : (y.next = w),
          (O.lastBaseUpdate = S)));
    }
    if (r !== null) {
      var _ = s.baseState;
      (f = 0), (O = w = S = null), (y = r);
      do {
        var z = y.lane & -536870913,
          C = z !== y.lane;
        if (C ? (ht & z) === z : (i & z) === z) {
          z !== 0 && z === Ga && (yu = !0),
            O !== null &&
              (O = O.next =
                {
                  lane: 0,
                  tag: y.tag,
                  payload: y.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var J = t,
              nt = y;
            z = e;
            var Nt = n;
            switch (nt.tag) {
              case 1:
                if (((J = nt.payload), typeof J == "function")) {
                  _ = J.call(Nt, _, z);
                  break t;
                }
                _ = J;
                break t;
              case 3:
                J.flags = (J.flags & -65537) | 128;
              case 0:
                if (
                  ((J = nt.payload),
                  (z = typeof J == "function" ? J.call(Nt, _, z) : J),
                  z == null)
                )
                  break t;
                _ = b({}, _, z);
                break t;
              case 2:
                zn = !0;
            }
          }
          (z = y.callback),
            z !== null &&
              ((t.flags |= 64),
              C && (t.flags |= 8192),
              (C = s.callbacks),
              C === null ? (s.callbacks = [z]) : C.push(z));
        } else
          (C = {
            lane: z,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null,
          }),
            O === null ? ((w = O = C), (S = _)) : (O = O.next = C),
            (f |= z);
        if (((y = y.next), y === null)) {
          if (((y = s.shared.pending), y === null)) break;
          (C = y),
            (y = C.next),
            (C.next = null),
            (s.lastBaseUpdate = C),
            (s.shared.pending = null);
        }
      } while (!0);
      O === null && (S = _),
        (s.baseState = S),
        (s.firstBaseUpdate = w),
        (s.lastBaseUpdate = O),
        r === null && (s.shared.lanes = 0),
        (Bn |= f),
        (t.lanes = f),
        (t.memoizedState = _);
    }
  }
  function Nd(t, e) {
    if (typeof t != "function") throw Error(o(191, t));
    t.call(e);
  }
  function wd(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++) Nd(n[t], e);
  }
  var Qa = E(null),
    es = E(0);
  function jd(t, e) {
    (t = xn), Q(es, t), Q(Qa, e), (xn = t | e.baseLanes);
  }
  function gu() {
    Q(es, xn), Q(Qa, Qa.current);
  }
  function vu() {
    (xn = es.current), L(Qa), L(es);
  }
  var Me = E(null),
    Le = null;
  function On(t) {
    var e = t.alternate;
    Q(qt, qt.current & 1),
      Q(Me, t),
      Le === null &&
        (e === null || Qa.current !== null || e.memoizedState !== null) &&
        (Le = t);
  }
  function xu(t) {
    Q(qt, qt.current), Q(Me, t), Le === null && (Le = t);
  }
  function zd(t) {
    t.tag === 22
      ? (Q(qt, qt.current), Q(Me, t), Le === null && (Le = t))
      : Vn();
  }
  function Vn() {
    Q(qt, qt.current), Q(Me, Me.current);
  }
  function De(t) {
    L(Me), Le === t && (Le = null), L(qt);
  }
  var qt = E(0);
  function ns(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || Mr(n) || Dr(n)))
          return e;
      } else if (
        e.tag === 19 &&
        (e.memoizedProps.revealOrder === "forwards" ||
          e.memoizedProps.revealOrder === "backwards" ||
          e.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          e.memoizedProps.revealOrder === "together")
      ) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  var fn = 0,
    ot = null,
    Mt = null,
    Zt = null,
    as = !1,
    Ka = !1,
    ma = !1,
    is = 0,
    qi = 0,
    Fa = null,
    Yv = 0;
  function Ut() {
    throw Error(o(321));
  }
  function bu(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!Ae(t[n], e[n])) return !1;
    return !0;
  }
  function Su(t, e, n, i, s, r) {
    return (
      (fn = r),
      (ot = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (R.H = t === null || t.memoizedState === null ? hh : Uu),
      (ma = !1),
      (r = n(i, s)),
      (ma = !1),
      Ka && (r = Rd(e, n, i, s)),
      Cd(t),
      r
    );
  }
  function Cd(t) {
    R.H = ki;
    var e = Mt !== null && Mt.next !== null;
    if (((fn = 0), (Zt = Mt = ot = null), (as = !1), (qi = 0), (Fa = null), e))
      throw Error(o(300));
    t === null ||
      Qt ||
      ((t = t.dependencies), t !== null && Fl(t) && (Qt = !0));
  }
  function Rd(t, e, n, i) {
    ot = t;
    var s = 0;
    do {
      if ((Ka && (Fa = null), (qi = 0), (Ka = !1), 25 <= s))
        throw Error(o(301));
      if (((s += 1), (Zt = Mt = null), t.updateQueue != null)) {
        var r = t.updateQueue;
        (r.lastEffect = null),
          (r.events = null),
          (r.stores = null),
          r.memoCache != null && (r.memoCache.index = 0);
      }
      (R.H = mh), (r = e(n, i));
    } while (Ka);
    return r;
  }
  function qv() {
    var t = R.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? Gi(e) : e),
      (t = t.useState()[0]),
      (Mt !== null ? Mt.memoizedState : null) !== t && (ot.flags |= 1024),
      e
    );
  }
  function Tu() {
    var t = is !== 0;
    return (is = 0), t;
  }
  function Au(t, e, n) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n);
  }
  function Eu(t) {
    if (as) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      as = !1;
    }
    (fn = 0), (Zt = Mt = ot = null), (Ka = !1), (qi = is = 0), (Fa = null);
  }
  function ce() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Zt === null ? (ot.memoizedState = Zt = t) : (Zt = Zt.next = t), Zt;
  }
  function Gt() {
    if (Mt === null) {
      var t = ot.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Mt.next;
    var e = Zt === null ? ot.memoizedState : Zt.next;
    if (e !== null) (Zt = e), (Mt = t);
    else {
      if (t === null)
        throw ot.alternate === null ? Error(o(467)) : Error(o(310));
      (Mt = t),
        (t = {
          memoizedState: Mt.memoizedState,
          baseState: Mt.baseState,
          baseQueue: Mt.baseQueue,
          queue: Mt.queue,
          next: null,
        }),
        Zt === null ? (ot.memoizedState = Zt = t) : (Zt = Zt.next = t);
    }
    return Zt;
  }
  function ls() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Gi(t) {
    var e = qi;
    return (
      (qi += 1),
      Fa === null && (Fa = []),
      (t = Td(Fa, t, e)),
      (e = ot),
      (Zt === null ? e.memoizedState : Zt.next) === null &&
        ((e = e.alternate),
        (R.H = e === null || e.memoizedState === null ? hh : Uu)),
      t
    );
  }
  function ss(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Gi(t);
      if (t.$$typeof === Y) return ae(t);
    }
    throw Error(o(438, String(t)));
  }
  function Mu(t) {
    var e = null,
      n = ot.updateQueue;
    if ((n !== null && (e = n.memoCache), e == null)) {
      var i = ot.alternate;
      i !== null &&
        ((i = i.updateQueue),
        i !== null &&
          ((i = i.memoCache),
          i != null &&
            (e = {
              data: i.data.map(function (s) {
                return s.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      n === null && ((n = ls()), (ot.updateQueue = n)),
      (n.memoCache = e),
      (n = e.data[e.index]),
      n === void 0)
    )
      for (n = e.data[e.index] = Array(t), i = 0; i < t; i++) n[i] = tt;
    return e.index++, n;
  }
  function dn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function os(t) {
    var e = Gt();
    return Du(e, Mt, t);
  }
  function Du(t, e, n) {
    var i = t.queue;
    if (i === null) throw Error(o(311));
    i.lastRenderedReducer = n;
    var s = t.baseQueue,
      r = i.pending;
    if (r !== null) {
      if (s !== null) {
        var f = s.next;
        (s.next = r.next), (r.next = f);
      }
      (e.baseQueue = s = r), (i.pending = null);
    }
    if (((r = t.baseState), s === null)) t.memoizedState = r;
    else {
      e = s.next;
      var y = (f = null),
        S = null,
        w = e,
        O = !1;
      do {
        var _ = w.lane & -536870913;
        if (_ !== w.lane ? (ht & _) === _ : (fn & _) === _) {
          var z = w.revertLane;
          if (z === 0)
            S !== null &&
              (S = S.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: w.action,
                  hasEagerState: w.hasEagerState,
                  eagerState: w.eagerState,
                  next: null,
                }),
              _ === Ga && (O = !0);
          else if ((fn & z) === z) {
            (w = w.next), z === Ga && (O = !0);
            continue;
          } else
            (_ = {
              lane: 0,
              revertLane: w.revertLane,
              gesture: null,
              action: w.action,
              hasEagerState: w.hasEagerState,
              eagerState: w.eagerState,
              next: null,
            }),
              S === null ? ((y = S = _), (f = r)) : (S = S.next = _),
              (ot.lanes |= z),
              (Bn |= z);
          (_ = w.action),
            ma && n(r, _),
            (r = w.hasEagerState ? w.eagerState : n(r, _));
        } else
          (z = {
            lane: _,
            revertLane: w.revertLane,
            gesture: w.gesture,
            action: w.action,
            hasEagerState: w.hasEagerState,
            eagerState: w.eagerState,
            next: null,
          }),
            S === null ? ((y = S = z), (f = r)) : (S = S.next = z),
            (ot.lanes |= _),
            (Bn |= _);
        w = w.next;
      } while (w !== null && w !== e);
      if (
        (S === null ? (f = r) : (S.next = y),
        !Ae(r, t.memoizedState) && ((Qt = !0), O && ((n = Xa), n !== null)))
      )
        throw n;
      (t.memoizedState = r),
        (t.baseState = f),
        (t.baseQueue = S),
        (i.lastRenderedState = r);
    }
    return s === null && (i.lanes = 0), [t.memoizedState, i.dispatch];
  }
  function Nu(t) {
    var e = Gt(),
      n = e.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = t;
    var i = n.dispatch,
      s = n.pending,
      r = e.memoizedState;
    if (s !== null) {
      n.pending = null;
      var f = (s = s.next);
      do (r = t(r, f.action)), (f = f.next);
      while (f !== s);
      Ae(r, e.memoizedState) || (Qt = !0),
        (e.memoizedState = r),
        e.baseQueue === null && (e.baseState = r),
        (n.lastRenderedState = r);
    }
    return [r, i];
  }
  function Od(t, e, n) {
    var i = ot,
      s = Gt(),
      r = gt;
    if (r) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else n = e();
    var f = !Ae((Mt || s).memoizedState, n);
    if (
      (f && ((s.memoizedState = n), (Qt = !0)),
      (s = s.queue),
      zu(Ud.bind(null, i, s, t), [t]),
      s.getSnapshot !== e || f || (Zt !== null && Zt.memoizedState.tag & 1))
    ) {
      if (
        ((i.flags |= 2048),
        Ja(9, { destroy: void 0 }, _d.bind(null, i, s, n, e), null),
        wt === null)
      )
        throw Error(o(349));
      r || (fn & 127) !== 0 || Vd(i, e, n);
    }
    return n;
  }
  function Vd(t, e, n) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = ot.updateQueue),
      e === null
        ? ((e = ls()), (ot.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
  }
  function _d(t, e, n, i) {
    (e.value = n), (e.getSnapshot = i), Bd(e) && Ld(t);
  }
  function Ud(t, e, n) {
    return n(function () {
      Bd(e) && Ld(t);
    });
  }
  function Bd(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !Ae(t, n);
    } catch {
      return !0;
    }
  }
  function Ld(t) {
    var e = la(t, 2);
    e !== null && xe(e, t, 2);
  }
  function wu(t) {
    var e = ce();
    if (typeof t == "function") {
      var n = t;
      if (((t = n()), ma)) {
        An(!0);
        try {
          n();
        } finally {
          An(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: dn,
        lastRenderedState: t,
      }),
      e
    );
  }
  function Hd(t, e, n, i) {
    return (t.baseState = n), Du(t, Mt, typeof i == "function" ? i : dn);
  }
  function Gv(t, e, n, i, s) {
    if (cs(t)) throw Error(o(485));
    if (((t = e.action), t !== null)) {
      var r = {
        payload: s,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (f) {
          r.listeners.push(f);
        },
      };
      R.T !== null ? n(!0) : (r.isTransition = !1),
        i(r),
        (n = e.pending),
        n === null
          ? ((r.next = e.pending = r), Yd(e, r))
          : ((r.next = n.next), (e.pending = n.next = r));
    }
  }
  function Yd(t, e) {
    var n = e.action,
      i = e.payload,
      s = t.state;
    if (e.isTransition) {
      var r = R.T,
        f = {};
      R.T = f;
      try {
        var y = n(s, i),
          S = R.S;
        S !== null && S(f, y), qd(t, e, y);
      } catch (w) {
        ju(t, e, w);
      } finally {
        r !== null && f.types !== null && (r.types = f.types), (R.T = r);
      }
    } else
      try {
        (r = n(s, i)), qd(t, e, r);
      } catch (w) {
        ju(t, e, w);
      }
  }
  function qd(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (i) {
            Gd(t, e, i);
          },
          function (i) {
            return ju(t, e, i);
          }
        )
      : Gd(t, e, n);
  }
  function Gd(t, e, n) {
    (e.status = "fulfilled"),
      (e.value = n),
      Xd(e),
      (t.state = n),
      (e = t.pending),
      e !== null &&
        ((n = e.next),
        n === e ? (t.pending = null) : ((n = n.next), (e.next = n), Yd(t, n)));
  }
  function ju(t, e, n) {
    var i = t.pending;
    if (((t.pending = null), i !== null)) {
      i = i.next;
      do (e.status = "rejected"), (e.reason = n), Xd(e), (e = e.next);
      while (e !== i);
    }
    t.action = null;
  }
  function Xd(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function kd(t, e) {
    return e;
  }
  function Zd(t, e) {
    if (gt) {
      var n = wt.formState;
      if (n !== null) {
        t: {
          var i = ot;
          if (gt) {
            if (Rt) {
              e: {
                for (var s = Rt, r = Be; s.nodeType !== 8; ) {
                  if (!r) {
                    s = null;
                    break e;
                  }
                  if (((s = He(s.nextSibling)), s === null)) {
                    s = null;
                    break e;
                  }
                }
                (r = s.data), (s = r === "F!" || r === "F" ? s : null);
              }
              if (s) {
                (Rt = He(s.nextSibling)), (i = s.data === "F!");
                break t;
              }
            }
            wn(i);
          }
          i = !1;
        }
        i && (e = n[0]);
      }
    }
    return (
      (n = ce()),
      (n.memoizedState = n.baseState = e),
      (i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: kd,
        lastRenderedState: e,
      }),
      (n.queue = i),
      (n = ch.bind(null, ot, i)),
      (i.dispatch = n),
      (i = wu(!1)),
      (r = _u.bind(null, ot, !1, i.queue)),
      (i = ce()),
      (s = { state: e, dispatch: null, action: t, pending: null }),
      (i.queue = s),
      (n = Gv.bind(null, ot, s, r, n)),
      (s.dispatch = n),
      (i.memoizedState = t),
      [e, n, !1]
    );
  }
  function Qd(t) {
    var e = Gt();
    return Kd(e, Mt, t);
  }
  function Kd(t, e, n) {
    if (
      ((e = Du(t, e, kd)[0]),
      (t = os(dn)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var i = Gi(e);
      } catch (f) {
        throw f === ka ? Pl : f;
      }
    else i = e;
    e = Gt();
    var s = e.queue,
      r = s.dispatch;
    return (
      n !== e.memoizedState &&
        ((ot.flags |= 2048),
        Ja(9, { destroy: void 0 }, Xv.bind(null, s, n), null)),
      [i, r, t]
    );
  }
  function Xv(t, e) {
    t.action = e;
  }
  function Fd(t) {
    var e = Gt(),
      n = Mt;
    if (n !== null) return Kd(e, n, t);
    Gt(), (e = e.memoizedState), (n = Gt());
    var i = n.queue.dispatch;
    return (n.memoizedState = t), [e, i, !1];
  }
  function Ja(t, e, n, i) {
    return (
      (t = { tag: t, create: n, deps: i, inst: e, next: null }),
      (e = ot.updateQueue),
      e === null && ((e = ls()), (ot.updateQueue = e)),
      (n = e.lastEffect),
      n === null
        ? (e.lastEffect = t.next = t)
        : ((i = n.next), (n.next = t), (t.next = i), (e.lastEffect = t)),
      t
    );
  }
  function Jd() {
    return Gt().memoizedState;
  }
  function us(t, e, n, i) {
    var s = ce();
    (ot.flags |= t),
      (s.memoizedState = Ja(
        1 | e,
        { destroy: void 0 },
        n,
        i === void 0 ? null : i
      ));
  }
  function rs(t, e, n, i) {
    var s = Gt();
    i = i === void 0 ? null : i;
    var r = s.memoizedState.inst;
    Mt !== null && i !== null && bu(i, Mt.memoizedState.deps)
      ? (s.memoizedState = Ja(e, r, n, i))
      : ((ot.flags |= t), (s.memoizedState = Ja(1 | e, r, n, i)));
  }
  function Wd(t, e) {
    us(8390656, 8, t, e);
  }
  function zu(t, e) {
    rs(2048, 8, t, e);
  }
  function kv(t) {
    ot.flags |= 4;
    var e = ot.updateQueue;
    if (e === null) (e = ls()), (ot.updateQueue = e), (e.events = [t]);
    else {
      var n = e.events;
      n === null ? (e.events = [t]) : n.push(t);
    }
  }
  function Pd(t) {
    var e = Gt().memoizedState;
    return (
      kv({ ref: e, nextImpl: t }),
      function () {
        if ((St & 2) !== 0) throw Error(o(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function $d(t, e) {
    return rs(4, 2, t, e);
  }
  function Id(t, e) {
    return rs(4, 4, t, e);
  }
  function th(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function () {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function eh(t, e, n) {
    (n = n != null ? n.concat([t]) : null), rs(4, 4, th.bind(null, e, t), n);
  }
  function Cu() {}
  function nh(t, e) {
    var n = Gt();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    return e !== null && bu(e, i[1]) ? i[0] : ((n.memoizedState = [t, e]), t);
  }
  function ah(t, e) {
    var n = Gt();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    if (e !== null && bu(e, i[1])) return i[0];
    if (((i = t()), ma)) {
      An(!0);
      try {
        t();
      } finally {
        An(!1);
      }
    }
    return (n.memoizedState = [i, e]), i;
  }
  function Ru(t, e, n) {
    return n === void 0 || ((fn & 1073741824) !== 0 && (ht & 261930) === 0)
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = im()), (ot.lanes |= t), (Bn |= t), n);
  }
  function ih(t, e, n, i) {
    return Ae(n, e)
      ? n
      : Qa.current !== null
      ? ((t = Ru(t, n, i)), Ae(t, e) || (Qt = !0), t)
      : (fn & 42) === 0 || ((fn & 1073741824) !== 0 && (ht & 261930) === 0)
      ? ((Qt = !0), (t.memoizedState = n))
      : ((t = im()), (ot.lanes |= t), (Bn |= t), e);
  }
  function lh(t, e, n, i, s) {
    var r = Z.p;
    Z.p = r !== 0 && 8 > r ? r : 8;
    var f = R.T,
      y = {};
    (R.T = y), _u(t, !1, e, n);
    try {
      var S = s(),
        w = R.S;
      if (
        (w !== null && w(y, S),
        S !== null && typeof S == "object" && typeof S.then == "function")
      ) {
        var O = Hv(S, i);
        Xi(t, e, O, je(t));
      } else Xi(t, e, i, je(t));
    } catch (_) {
      Xi(t, e, { then: function () {}, status: "rejected", reason: _ }, je());
    } finally {
      (Z.p = r),
        f !== null && y.types !== null && (f.types = y.types),
        (R.T = f);
    }
  }
  function Zv() {}
  function Ou(t, e, n, i) {
    if (t.tag !== 5) throw Error(o(476));
    var s = sh(t).queue;
    lh(
      t,
      s,
      e,
      F,
      n === null
        ? Zv
        : function () {
            return oh(t), n(i);
          }
    );
  }
  function sh(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: F,
      baseState: F,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: dn,
        lastRenderedState: F,
      },
      next: null,
    };
    var n = {};
    return (
      (e.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: dn,
          lastRenderedState: n,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function oh(t) {
    var e = sh(t);
    e.next === null && (e = t.alternate.memoizedState),
      Xi(t, e.next.queue, {}, je());
  }
  function Vu() {
    return ae(sl);
  }
  function uh() {
    return Gt().memoizedState;
  }
  function rh() {
    return Gt().memoizedState;
  }
  function Qv(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = je();
          t = Cn(n);
          var i = Rn(e, t, n);
          i !== null && (xe(i, e, n), Li(i, e, n)),
            (e = { cache: ru() }),
            (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function Kv(t, e, n) {
    var i = je();
    (n = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      cs(t)
        ? fh(e, n)
        : ((n = $o(t, e, n, i)), n !== null && (xe(n, t, i), dh(n, e, i)));
  }
  function ch(t, e, n) {
    var i = je();
    Xi(t, e, n, i);
  }
  function Xi(t, e, n, i) {
    var s = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (cs(t)) fh(e, s);
    else {
      var r = t.alternate;
      if (
        t.lanes === 0 &&
        (r === null || r.lanes === 0) &&
        ((r = e.lastRenderedReducer), r !== null)
      )
        try {
          var f = e.lastRenderedState,
            y = r(f, n);
          if (((s.hasEagerState = !0), (s.eagerState = y), Ae(y, f)))
            return kl(t, e, s, 0), wt === null && Xl(), !1;
        } catch {
        } finally {
        }
      if (((n = $o(t, e, s, i)), n !== null))
        return xe(n, t, i), dh(n, e, i), !0;
    }
    return !1;
  }
  function _u(t, e, n, i) {
    if (
      ((i = {
        lane: 2,
        revertLane: hr(),
        gesture: null,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      cs(t))
    ) {
      if (e) throw Error(o(479));
    } else (e = $o(t, n, i, 2)), e !== null && xe(e, t, 2);
  }
  function cs(t) {
    var e = t.alternate;
    return t === ot || (e !== null && e === ot);
  }
  function fh(t, e) {
    Ka = as = !0;
    var n = t.pending;
    n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
      (t.pending = e);
  }
  function dh(t, e, n) {
    if ((n & 4194048) !== 0) {
      var i = e.lanes;
      (i &= t.pendingLanes), (n |= i), (e.lanes = n), gf(t, n);
    }
  }
  var ki = {
    readContext: ae,
    use: ss,
    useCallback: Ut,
    useContext: Ut,
    useEffect: Ut,
    useImperativeHandle: Ut,
    useLayoutEffect: Ut,
    useInsertionEffect: Ut,
    useMemo: Ut,
    useReducer: Ut,
    useRef: Ut,
    useState: Ut,
    useDebugValue: Ut,
    useDeferredValue: Ut,
    useTransition: Ut,
    useSyncExternalStore: Ut,
    useId: Ut,
    useHostTransitionStatus: Ut,
    useFormState: Ut,
    useActionState: Ut,
    useOptimistic: Ut,
    useMemoCache: Ut,
    useCacheRefresh: Ut,
  };
  ki.useEffectEvent = Ut;
  var hh = {
      readContext: ae,
      use: ss,
      useCallback: function (t, e) {
        return (ce().memoizedState = [t, e === void 0 ? null : e]), t;
      },
      useContext: ae,
      useEffect: Wd,
      useImperativeHandle: function (t, e, n) {
        (n = n != null ? n.concat([t]) : null),
          us(4194308, 4, th.bind(null, e, t), n);
      },
      useLayoutEffect: function (t, e) {
        return us(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        us(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var n = ce();
        e = e === void 0 ? null : e;
        var i = t();
        if (ma) {
          An(!0);
          try {
            t();
          } finally {
            An(!1);
          }
        }
        return (n.memoizedState = [i, e]), i;
      },
      useReducer: function (t, e, n) {
        var i = ce();
        if (n !== void 0) {
          var s = n(e);
          if (ma) {
            An(!0);
            try {
              n(e);
            } finally {
              An(!1);
            }
          }
        } else s = e;
        return (
          (i.memoizedState = i.baseState = s),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: s,
          }),
          (i.queue = t),
          (t = t.dispatch = Kv.bind(null, ot, t)),
          [i.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = ce();
        return (t = { current: t }), (e.memoizedState = t);
      },
      useState: function (t) {
        t = wu(t);
        var e = t.queue,
          n = ch.bind(null, ot, e);
        return (e.dispatch = n), [t.memoizedState, n];
      },
      useDebugValue: Cu,
      useDeferredValue: function (t, e) {
        var n = ce();
        return Ru(n, t, e);
      },
      useTransition: function () {
        var t = wu(!1);
        return (
          (t = lh.bind(null, ot, t.queue, !0, !1)),
          (ce().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, n) {
        var i = ot,
          s = ce();
        if (gt) {
          if (n === void 0) throw Error(o(407));
          n = n();
        } else {
          if (((n = e()), wt === null)) throw Error(o(349));
          (ht & 127) !== 0 || Vd(i, e, n);
        }
        s.memoizedState = n;
        var r = { value: n, getSnapshot: e };
        return (
          (s.queue = r),
          Wd(Ud.bind(null, i, r, t), [t]),
          (i.flags |= 2048),
          Ja(9, { destroy: void 0 }, _d.bind(null, i, r, n, e), null),
          n
        );
      },
      useId: function () {
        var t = ce(),
          e = wt.identifierPrefix;
        if (gt) {
          var n = We,
            i = Je;
          (n = (i & ~(1 << (32 - Te(i) - 1))).toString(32) + n),
            (e = "_" + e + "R_" + n),
            (n = is++),
            0 < n && (e += "H" + n.toString(32)),
            (e += "_");
        } else (n = Yv++), (e = "_" + e + "r_" + n.toString(32) + "_");
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Vu,
      useFormState: Zd,
      useActionState: Zd,
      useOptimistic: function (t) {
        var e = ce();
        e.memoizedState = e.baseState = t;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = n),
          (e = _u.bind(null, ot, !0, n)),
          (n.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: Mu,
      useCacheRefresh: function () {
        return (ce().memoizedState = Qv.bind(null, ot));
      },
      useEffectEvent: function (t) {
        var e = ce(),
          n = { impl: t };
        return (
          (e.memoizedState = n),
          function () {
            if ((St & 2) !== 0) throw Error(o(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Uu = {
      readContext: ae,
      use: ss,
      useCallback: nh,
      useContext: ae,
      useEffect: zu,
      useImperativeHandle: eh,
      useInsertionEffect: $d,
      useLayoutEffect: Id,
      useMemo: ah,
      useReducer: os,
      useRef: Jd,
      useState: function () {
        return os(dn);
      },
      useDebugValue: Cu,
      useDeferredValue: function (t, e) {
        var n = Gt();
        return ih(n, Mt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = os(dn)[0],
          e = Gt().memoizedState;
        return [typeof t == "boolean" ? t : Gi(t), e];
      },
      useSyncExternalStore: Od,
      useId: uh,
      useHostTransitionStatus: Vu,
      useFormState: Qd,
      useActionState: Qd,
      useOptimistic: function (t, e) {
        var n = Gt();
        return Hd(n, Mt, t, e);
      },
      useMemoCache: Mu,
      useCacheRefresh: rh,
    };
  Uu.useEffectEvent = Pd;
  var mh = {
    readContext: ae,
    use: ss,
    useCallback: nh,
    useContext: ae,
    useEffect: zu,
    useImperativeHandle: eh,
    useInsertionEffect: $d,
    useLayoutEffect: Id,
    useMemo: ah,
    useReducer: Nu,
    useRef: Jd,
    useState: function () {
      return Nu(dn);
    },
    useDebugValue: Cu,
    useDeferredValue: function (t, e) {
      var n = Gt();
      return Mt === null ? Ru(n, t, e) : ih(n, Mt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = Nu(dn)[0],
        e = Gt().memoizedState;
      return [typeof t == "boolean" ? t : Gi(t), e];
    },
    useSyncExternalStore: Od,
    useId: uh,
    useHostTransitionStatus: Vu,
    useFormState: Fd,
    useActionState: Fd,
    useOptimistic: function (t, e) {
      var n = Gt();
      return Mt !== null
        ? Hd(n, Mt, t, e)
        : ((n.baseState = t), [t, n.queue.dispatch]);
    },
    useMemoCache: Mu,
    useCacheRefresh: rh,
  };
  mh.useEffectEvent = Pd;
  function Bu(t, e, n, i) {
    (e = t.memoizedState),
      (n = n(i, e)),
      (n = n == null ? e : b({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var Lu = {
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var i = je(),
        s = Cn(i);
      (s.payload = e),
        n != null && (s.callback = n),
        (e = Rn(t, s, i)),
        e !== null && (xe(e, t, i), Li(e, t, i));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var i = je(),
        s = Cn(i);
      (s.tag = 1),
        (s.payload = e),
        n != null && (s.callback = n),
        (e = Rn(t, s, i)),
        e !== null && (xe(e, t, i), Li(e, t, i));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = je(),
        i = Cn(n);
      (i.tag = 2),
        e != null && (i.callback = e),
        (e = Rn(t, i, n)),
        e !== null && (xe(e, t, n), Li(e, t, n));
    },
  };
  function ph(t, e, n, i, s, r, f) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(i, r, f)
        : e.prototype && e.prototype.isPureReactComponent
        ? !zi(n, i) || !zi(s, r)
        : !0
    );
  }
  function yh(t, e, n, i) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(n, i),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(n, i),
      e.state !== t && Lu.enqueueReplaceState(e, e.state, null);
  }
  function pa(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var i in e) i !== "ref" && (n[i] = e[i]);
    }
    if ((t = t.defaultProps)) {
      n === e && (n = b({}, n));
      for (var s in t) n[s] === void 0 && (n[s] = t[s]);
    }
    return n;
  }
  function gh(t) {
    Gl(t);
  }
  function vh(t) {
    console.error(t);
  }
  function xh(t) {
    Gl(t);
  }
  function fs(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function bh(t, e, n) {
    try {
      var i = t.onCaughtError;
      i(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function Hu(t, e, n) {
    return (
      (n = Cn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        fs(t, e);
      }),
      n
    );
  }
  function Sh(t) {
    return (t = Cn(t)), (t.tag = 3), t;
  }
  function Th(t, e, n, i) {
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var r = i.value;
      (t.payload = function () {
        return s(r);
      }),
        (t.callback = function () {
          bh(e, n, i);
        });
    }
    var f = n.stateNode;
    f !== null &&
      typeof f.componentDidCatch == "function" &&
      (t.callback = function () {
        bh(e, n, i),
          typeof s != "function" &&
            (Ln === null ? (Ln = new Set([this])) : Ln.add(this));
        var y = i.stack;
        this.componentDidCatch(i.value, {
          componentStack: y !== null ? y : "",
        });
      });
  }
  function Fv(t, e, n, i, s) {
    if (
      ((n.flags |= 32768),
      i !== null && typeof i == "object" && typeof i.then == "function")
    ) {
      if (
        ((e = n.alternate),
        e !== null && qa(e, n, s, !0),
        (n = Me.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              Le === null ? As() : n.alternate === null && Bt === 0 && (Bt = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = s),
              i === $l
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null ? (n.updateQueue = new Set([i])) : e.add(i),
                  cr(t, i, s)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              i === $l
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([i]),
                      }),
                      (n.updateQueue = e))
                    : ((n = e.retryQueue),
                      n === null ? (e.retryQueue = new Set([i])) : n.add(i)),
                  cr(t, i, s)),
              !1
            );
        }
        throw Error(o(435, n.tag));
      }
      return cr(t, i, s), As(), !1;
    }
    if (gt)
      return (
        (e = Me.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = s),
            i !== iu && ((t = Error(o(422), { cause: i })), Oi(Ve(t, n))))
          : (i !== iu && ((e = Error(o(423), { cause: i })), Oi(Ve(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (s &= -s),
            (t.lanes |= s),
            (i = Ve(i, n)),
            (s = Hu(t.stateNode, i, s)),
            pu(t, s),
            Bt !== 4 && (Bt = 2)),
        !1
      );
    var r = Error(o(520), { cause: i });
    if (
      ((r = Ve(r, n)),
      $i === null ? ($i = [r]) : $i.push(r),
      Bt !== 4 && (Bt = 2),
      e === null)
    )
      return !0;
    (i = Ve(i, n)), (n = e);
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (t = s & -s),
            (n.lanes |= t),
            (t = Hu(n.stateNode, i, t)),
            pu(n, t),
            !1
          );
        case 1:
          if (
            ((e = n.type),
            (r = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (r !== null &&
                  typeof r.componentDidCatch == "function" &&
                  (Ln === null || !Ln.has(r)))))
          )
            return (
              (n.flags |= 65536),
              (s &= -s),
              (n.lanes |= s),
              (s = Sh(s)),
              Th(s, t, n, i),
              pu(n, s),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Yu = Error(o(461)),
    Qt = !1;
  function ie(t, e, n, i) {
    e.child = t === null ? Dd(e, null, n, i) : ha(e, t.child, n, i);
  }
  function Ah(t, e, n, i, s) {
    n = n.render;
    var r = e.ref;
    if ("ref" in i) {
      var f = {};
      for (var y in i) y !== "ref" && (f[y] = i[y]);
    } else f = i;
    return (
      ra(e),
      (i = Su(t, e, n, f, r, s)),
      (y = Tu()),
      t !== null && !Qt
        ? (Au(t, e, s), hn(t, e, s))
        : (gt && y && nu(e), (e.flags |= 1), ie(t, e, i, s), e.child)
    );
  }
  function Eh(t, e, n, i, s) {
    if (t === null) {
      var r = n.type;
      return typeof r == "function" &&
        !Io(r) &&
        r.defaultProps === void 0 &&
        n.compare === null
        ? ((e.tag = 15), (e.type = r), Mh(t, e, r, i, s))
        : ((t = Ql(n.type, null, i, e, e.mode, s)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((r = t.child), !Fu(t, s))) {
      var f = r.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : zi), n(f, i) && t.ref === e.ref)
      )
        return hn(t, e, s);
    }
    return (
      (e.flags |= 1),
      (t = on(r, i)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function Mh(t, e, n, i, s) {
    if (t !== null) {
      var r = t.memoizedProps;
      if (zi(r, i) && t.ref === e.ref)
        if (((Qt = !1), (e.pendingProps = i = r), Fu(t, s)))
          (t.flags & 131072) !== 0 && (Qt = !0);
        else return (e.lanes = t.lanes), hn(t, e, s);
    }
    return qu(t, e, n, i, s);
  }
  function Dh(t, e, n, i) {
    var s = i.children,
      r = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        e.stateNode === null &&
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      i.mode === "hidden")
    ) {
      if ((e.flags & 128) !== 0) {
        if (((r = r !== null ? r.baseLanes | n : n), t !== null)) {
          for (i = e.child = t.child, s = 0; i !== null; )
            (s = s | i.lanes | i.childLanes), (i = i.sibling);
          i = s & ~r;
        } else (i = 0), (e.child = null);
        return Nh(t, e, r, n, i);
      }
      if ((n & 536870912) !== 0)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && Wl(e, r !== null ? r.cachePool : null),
          r !== null ? jd(e, r) : gu(),
          zd(e);
      else
        return (
          (i = e.lanes = 536870912),
          Nh(t, e, r !== null ? r.baseLanes | n : n, n, i)
        );
    } else
      r !== null
        ? (Wl(e, r.cachePool), jd(e, r), Vn(), (e.memoizedState = null))
        : (t !== null && Wl(e, null), gu(), Vn());
    return ie(t, e, s, n), e.child;
  }
  function Zi(t, e) {
    return (
      (t !== null && t.tag === 22) ||
        e.stateNode !== null ||
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.sibling
    );
  }
  function Nh(t, e, n, i, s) {
    var r = fu();
    return (
      (r = r === null ? null : { parent: kt._currentValue, pool: r }),
      (e.memoizedState = { baseLanes: n, cachePool: r }),
      t !== null && Wl(e, null),
      gu(),
      zd(e),
      t !== null && qa(t, e, i, !0),
      (e.childLanes = s),
      null
    );
  }
  function ds(t, e) {
    return (
      (e = ms({ mode: e.mode, children: e.children }, t.mode)),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function wh(t, e, n) {
    return (
      ha(e, t.child, null, n),
      (t = ds(e, e.pendingProps)),
      (t.flags |= 2),
      De(e),
      (e.memoizedState = null),
      t
    );
  }
  function Jv(t, e, n) {
    var i = e.pendingProps,
      s = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (gt) {
        if (i.mode === "hidden")
          return (t = ds(e, i)), (e.lanes = 536870912), Zi(null, t);
        if (
          (xu(e),
          (t = Rt)
            ? ((t = Ym(t, Be)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: Dn !== null ? { id: Je, overflow: We } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = fd(t)),
                (n.return = e),
                (e.child = n),
                (ne = e),
                (Rt = null)))
            : (t = null),
          t === null)
        )
          throw wn(e);
        return (e.lanes = 536870912), null;
      }
      return ds(e, i);
    }
    var r = t.memoizedState;
    if (r !== null) {
      var f = r.dehydrated;
      if ((xu(e), s))
        if (e.flags & 256) (e.flags &= -257), (e = wh(t, e, n));
        else if (e.memoizedState !== null)
          (e.child = t.child), (e.flags |= 128), (e = null);
        else throw Error(o(558));
      else if (
        (Qt || qa(t, e, n, !1), (s = (n & t.childLanes) !== 0), Qt || s)
      ) {
        if (
          ((i = wt),
          i !== null && ((f = vf(i, n)), f !== 0 && f !== r.retryLane))
        )
          throw ((r.retryLane = f), la(t, f), xe(i, t, f), Yu);
        As(), (e = wh(t, e, n));
      } else
        (t = r.treeContext),
          (Rt = He(f.nextSibling)),
          (ne = e),
          (gt = !0),
          (Nn = null),
          (Be = !1),
          t !== null && md(e, t),
          (e = ds(e, i)),
          (e.flags |= 4096);
      return e;
    }
    return (
      (t = on(t.child, { mode: i.mode, children: i.children })),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function hs(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(o(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function qu(t, e, n, i, s) {
    return (
      ra(e),
      (n = Su(t, e, n, i, void 0, s)),
      (i = Tu()),
      t !== null && !Qt
        ? (Au(t, e, s), hn(t, e, s))
        : (gt && i && nu(e), (e.flags |= 1), ie(t, e, n, s), e.child)
    );
  }
  function jh(t, e, n, i, s, r) {
    return (
      ra(e),
      (e.updateQueue = null),
      (n = Rd(e, i, n, s)),
      Cd(t),
      (i = Tu()),
      t !== null && !Qt
        ? (Au(t, e, r), hn(t, e, r))
        : (gt && i && nu(e), (e.flags |= 1), ie(t, e, n, r), e.child)
    );
  }
  function zh(t, e, n, i, s) {
    if ((ra(e), e.stateNode === null)) {
      var r = Ba,
        f = n.contextType;
      typeof f == "object" && f !== null && (r = ae(f)),
        (r = new n(i, r)),
        (e.memoizedState =
          r.state !== null && r.state !== void 0 ? r.state : null),
        (r.updater = Lu),
        (e.stateNode = r),
        (r._reactInternals = e),
        (r = e.stateNode),
        (r.props = i),
        (r.state = e.memoizedState),
        (r.refs = {}),
        hu(e),
        (f = n.contextType),
        (r.context = typeof f == "object" && f !== null ? ae(f) : Ba),
        (r.state = e.memoizedState),
        (f = n.getDerivedStateFromProps),
        typeof f == "function" && (Bu(e, n, f, i), (r.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof r.getSnapshotBeforeUpdate == "function" ||
          (typeof r.UNSAFE_componentWillMount != "function" &&
            typeof r.componentWillMount != "function") ||
          ((f = r.state),
          typeof r.componentWillMount == "function" && r.componentWillMount(),
          typeof r.UNSAFE_componentWillMount == "function" &&
            r.UNSAFE_componentWillMount(),
          f !== r.state && Lu.enqueueReplaceState(r, r.state, null),
          Yi(e, i, r, s),
          Hi(),
          (r.state = e.memoizedState)),
        typeof r.componentDidMount == "function" && (e.flags |= 4194308),
        (i = !0);
    } else if (t === null) {
      r = e.stateNode;
      var y = e.memoizedProps,
        S = pa(n, y);
      r.props = S;
      var w = r.context,
        O = n.contextType;
      (f = Ba), typeof O == "object" && O !== null && (f = ae(O));
      var _ = n.getDerivedStateFromProps;
      (O =
        typeof _ == "function" ||
        typeof r.getSnapshotBeforeUpdate == "function"),
        (y = e.pendingProps !== y),
        O ||
          (typeof r.UNSAFE_componentWillReceiveProps != "function" &&
            typeof r.componentWillReceiveProps != "function") ||
          ((y || w !== f) && yh(e, r, i, f)),
        (zn = !1);
      var z = e.memoizedState;
      (r.state = z),
        Yi(e, i, r, s),
        Hi(),
        (w = e.memoizedState),
        y || z !== w || zn
          ? (typeof _ == "function" && (Bu(e, n, _, i), (w = e.memoizedState)),
            (S = zn || ph(e, n, S, i, z, w, f))
              ? (O ||
                  (typeof r.UNSAFE_componentWillMount != "function" &&
                    typeof r.componentWillMount != "function") ||
                  (typeof r.componentWillMount == "function" &&
                    r.componentWillMount(),
                  typeof r.UNSAFE_componentWillMount == "function" &&
                    r.UNSAFE_componentWillMount()),
                typeof r.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof r.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = i),
                (e.memoizedState = w)),
            (r.props = i),
            (r.state = w),
            (r.context = f),
            (i = S))
          : (typeof r.componentDidMount == "function" && (e.flags |= 4194308),
            (i = !1));
    } else {
      (r = e.stateNode),
        mu(t, e),
        (f = e.memoizedProps),
        (O = pa(n, f)),
        (r.props = O),
        (_ = e.pendingProps),
        (z = r.context),
        (w = n.contextType),
        (S = Ba),
        typeof w == "object" && w !== null && (S = ae(w)),
        (y = n.getDerivedStateFromProps),
        (w =
          typeof y == "function" ||
          typeof r.getSnapshotBeforeUpdate == "function") ||
          (typeof r.UNSAFE_componentWillReceiveProps != "function" &&
            typeof r.componentWillReceiveProps != "function") ||
          ((f !== _ || z !== S) && yh(e, r, i, S)),
        (zn = !1),
        (z = e.memoizedState),
        (r.state = z),
        Yi(e, i, r, s),
        Hi();
      var C = e.memoizedState;
      f !== _ ||
      z !== C ||
      zn ||
      (t !== null && t.dependencies !== null && Fl(t.dependencies))
        ? (typeof y == "function" && (Bu(e, n, y, i), (C = e.memoizedState)),
          (O =
            zn ||
            ph(e, n, O, i, z, C, S) ||
            (t !== null && t.dependencies !== null && Fl(t.dependencies)))
            ? (w ||
                (typeof r.UNSAFE_componentWillUpdate != "function" &&
                  typeof r.componentWillUpdate != "function") ||
                (typeof r.componentWillUpdate == "function" &&
                  r.componentWillUpdate(i, C, S),
                typeof r.UNSAFE_componentWillUpdate == "function" &&
                  r.UNSAFE_componentWillUpdate(i, C, S)),
              typeof r.componentDidUpdate == "function" && (e.flags |= 4),
              typeof r.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof r.componentDidUpdate != "function" ||
                (f === t.memoizedProps && z === t.memoizedState) ||
                (e.flags |= 4),
              typeof r.getSnapshotBeforeUpdate != "function" ||
                (f === t.memoizedProps && z === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = i),
              (e.memoizedState = C)),
          (r.props = i),
          (r.state = C),
          (r.context = S),
          (i = O))
        : (typeof r.componentDidUpdate != "function" ||
            (f === t.memoizedProps && z === t.memoizedState) ||
            (e.flags |= 4),
          typeof r.getSnapshotBeforeUpdate != "function" ||
            (f === t.memoizedProps && z === t.memoizedState) ||
            (e.flags |= 1024),
          (i = !1));
    }
    return (
      (r = i),
      hs(t, e),
      (i = (e.flags & 128) !== 0),
      r || i
        ? ((r = e.stateNode),
          (n =
            i && typeof n.getDerivedStateFromError != "function"
              ? null
              : r.render()),
          (e.flags |= 1),
          t !== null && i
            ? ((e.child = ha(e, t.child, null, s)),
              (e.child = ha(e, null, n, s)))
            : ie(t, e, n, s),
          (e.memoizedState = r.state),
          (t = e.child))
        : (t = hn(t, e, s)),
      t
    );
  }
  function Ch(t, e, n, i) {
    return oa(), (e.flags |= 256), ie(t, e, n, i), e.child;
  }
  var Gu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Xu(t) {
    return { baseLanes: t, cachePool: bd() };
  }
  function ku(t, e, n) {
    return (t = t !== null ? t.childLanes & ~n : 0), e && (t |= we), t;
  }
  function Rh(t, e, n) {
    var i = e.pendingProps,
      s = !1,
      r = (e.flags & 128) !== 0,
      f;
    if (
      ((f = r) ||
        (f =
          t !== null && t.memoizedState === null ? !1 : (qt.current & 2) !== 0),
      f && ((s = !0), (e.flags &= -129)),
      (f = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (gt) {
        if (
          (s ? On(e) : Vn(),
          (t = Rt)
            ? ((t = Ym(t, Be)),
              (t = t !== null && t.data !== "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: Dn !== null ? { id: Je, overflow: We } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = fd(t)),
                (n.return = e),
                (e.child = n),
                (ne = e),
                (Rt = null)))
            : (t = null),
          t === null)
        )
          throw wn(e);
        return Dr(t) ? (e.lanes = 32) : (e.lanes = 536870912), null;
      }
      var y = i.children;
      return (
        (i = i.fallback),
        s
          ? (Vn(),
            (s = e.mode),
            (y = ms({ mode: "hidden", children: y }, s)),
            (i = sa(i, s, n, null)),
            (y.return = e),
            (i.return = e),
            (y.sibling = i),
            (e.child = y),
            (i = e.child),
            (i.memoizedState = Xu(n)),
            (i.childLanes = ku(t, f, n)),
            (e.memoizedState = Gu),
            Zi(null, i))
          : (On(e), Zu(e, y))
      );
    }
    var S = t.memoizedState;
    if (S !== null && ((y = S.dehydrated), y !== null)) {
      if (r)
        e.flags & 256
          ? (On(e), (e.flags &= -257), (e = Qu(t, e, n)))
          : e.memoizedState !== null
          ? (Vn(), (e.child = t.child), (e.flags |= 128), (e = null))
          : (Vn(),
            (y = i.fallback),
            (s = e.mode),
            (i = ms({ mode: "visible", children: i.children }, s)),
            (y = sa(y, s, n, null)),
            (y.flags |= 2),
            (i.return = e),
            (y.return = e),
            (i.sibling = y),
            (e.child = i),
            ha(e, t.child, null, n),
            (i = e.child),
            (i.memoizedState = Xu(n)),
            (i.childLanes = ku(t, f, n)),
            (e.memoizedState = Gu),
            (e = Zi(null, i)));
      else if ((On(e), Dr(y))) {
        if (((f = y.nextSibling && y.nextSibling.dataset), f)) var w = f.dgst;
        (f = w),
          (i = Error(o(419))),
          (i.stack = ""),
          (i.digest = f),
          Oi({ value: i, source: null, stack: null }),
          (e = Qu(t, e, n));
      } else if (
        (Qt || qa(t, e, n, !1), (f = (n & t.childLanes) !== 0), Qt || f)
      ) {
        if (
          ((f = wt),
          f !== null && ((i = vf(f, n)), i !== 0 && i !== S.retryLane))
        )
          throw ((S.retryLane = i), la(t, i), xe(f, t, i), Yu);
        Mr(y) || As(), (e = Qu(t, e, n));
      } else
        Mr(y)
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = S.treeContext),
            (Rt = He(y.nextSibling)),
            (ne = e),
            (gt = !0),
            (Nn = null),
            (Be = !1),
            t !== null && md(e, t),
            (e = Zu(e, i.children)),
            (e.flags |= 4096));
      return e;
    }
    return s
      ? (Vn(),
        (y = i.fallback),
        (s = e.mode),
        (S = t.child),
        (w = S.sibling),
        (i = on(S, { mode: "hidden", children: i.children })),
        (i.subtreeFlags = S.subtreeFlags & 65011712),
        w !== null ? (y = on(w, y)) : ((y = sa(y, s, n, null)), (y.flags |= 2)),
        (y.return = e),
        (i.return = e),
        (i.sibling = y),
        (e.child = i),
        Zi(null, i),
        (i = e.child),
        (y = t.child.memoizedState),
        y === null
          ? (y = Xu(n))
          : ((s = y.cachePool),
            s !== null
              ? ((S = kt._currentValue),
                (s = s.parent !== S ? { parent: S, pool: S } : s))
              : (s = bd()),
            (y = { baseLanes: y.baseLanes | n, cachePool: s })),
        (i.memoizedState = y),
        (i.childLanes = ku(t, f, n)),
        (e.memoizedState = Gu),
        Zi(t.child, i))
      : (On(e),
        (n = t.child),
        (t = n.sibling),
        (n = on(n, { mode: "visible", children: i.children })),
        (n.return = e),
        (n.sibling = null),
        t !== null &&
          ((f = e.deletions),
          f === null ? ((e.deletions = [t]), (e.flags |= 16)) : f.push(t)),
        (e.child = n),
        (e.memoizedState = null),
        n);
  }
  function Zu(t, e) {
    return (
      (e = ms({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function ms(t, e) {
    return (t = Ee(22, t, null, e)), (t.lanes = 0), t;
  }
  function Qu(t, e, n) {
    return (
      ha(e, t.child, null, n),
      (t = Zu(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Oh(t, e, n) {
    t.lanes |= e;
    var i = t.alternate;
    i !== null && (i.lanes |= e), ou(t.return, e, n);
  }
  function Ku(t, e, n, i, s, r) {
    var f = t.memoizedState;
    f === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: i,
          tail: n,
          tailMode: s,
          treeForkCount: r,
        })
      : ((f.isBackwards = e),
        (f.rendering = null),
        (f.renderingStartTime = 0),
        (f.last = i),
        (f.tail = n),
        (f.tailMode = s),
        (f.treeForkCount = r));
  }
  function Vh(t, e, n) {
    var i = e.pendingProps,
      s = i.revealOrder,
      r = i.tail;
    i = i.children;
    var f = qt.current,
      y = (f & 2) !== 0;
    if (
      (y ? ((f = (f & 1) | 2), (e.flags |= 128)) : (f &= 1),
      Q(qt, f),
      ie(t, e, i, n),
      (i = gt ? Ri : 0),
      !y && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Oh(t, n, e);
        else if (t.tag === 19) Oh(t, n, e);
        else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    switch (s) {
      case "forwards":
        for (n = e.child, s = null; n !== null; )
          (t = n.alternate),
            t !== null && ns(t) === null && (s = n),
            (n = n.sibling);
        (n = s),
          n === null
            ? ((s = e.child), (e.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          Ku(e, !1, s, n, r, i);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, s = e.child, e.child = null; s !== null; ) {
          if (((t = s.alternate), t !== null && ns(t) === null)) {
            e.child = s;
            break;
          }
          (t = s.sibling), (s.sibling = n), (n = s), (s = t);
        }
        Ku(e, !0, n, null, r, i);
        break;
      case "together":
        Ku(e, !1, null, null, void 0, i);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function hn(t, e, n) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (Bn |= e.lanes),
      (n & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((qa(t, e, n, !1), (n & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(o(153));
    if (e.child !== null) {
      for (
        t = e.child, n = on(t, t.pendingProps), e.child = n, n.return = e;
        t.sibling !== null;

      )
        (t = t.sibling),
          (n = n.sibling = on(t, t.pendingProps)),
          (n.return = e);
      n.sibling = null;
    }
    return e.child;
  }
  function Fu(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && Fl(t)));
  }
  function Wv(t, e, n) {
    switch (e.tag) {
      case 3:
        re(e, e.stateNode.containerInfo),
          jn(e, kt, t.memoizedState.cache),
          oa();
        break;
      case 27:
      case 5:
        gi(e);
        break;
      case 4:
        re(e, e.stateNode.containerInfo);
        break;
      case 10:
        jn(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return (e.flags |= 128), xu(e), null;
        break;
      case 13:
        var i = e.memoizedState;
        if (i !== null)
          return i.dehydrated !== null
            ? (On(e), (e.flags |= 128), null)
            : (n & e.child.childLanes) !== 0
            ? Rh(t, e, n)
            : (On(e), (t = hn(t, e, n)), t !== null ? t.sibling : null);
        On(e);
        break;
      case 19:
        var s = (t.flags & 128) !== 0;
        if (
          ((i = (n & e.childLanes) !== 0),
          i || (qa(t, e, n, !1), (i = (n & e.childLanes) !== 0)),
          s)
        ) {
          if (i) return Vh(t, e, n);
          e.flags |= 128;
        }
        if (
          ((s = e.memoizedState),
          s !== null &&
            ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          Q(qt, qt.current),
          i)
        )
          break;
        return null;
      case 22:
        return (e.lanes = 0), Dh(t, e, n, e.pendingProps);
      case 24:
        jn(e, kt, t.memoizedState.cache);
    }
    return hn(t, e, n);
  }
  function _h(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Qt = !0;
      else {
        if (!Fu(t, n) && (e.flags & 128) === 0) return (Qt = !1), Wv(t, e, n);
        Qt = (t.flags & 131072) !== 0;
      }
    else (Qt = !1), gt && (e.flags & 1048576) !== 0 && hd(e, Ri, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var i = e.pendingProps;
          if (((t = fa(e.elementType)), (e.type = t), typeof t == "function"))
            Io(t)
              ? ((i = pa(t, i)), (e.tag = 1), (e = zh(null, e, t, i, n)))
              : ((e.tag = 0), (e = qu(null, e, t, i, n)));
          else {
            if (t != null) {
              var s = t.$$typeof;
              if (s === q) {
                (e.tag = 11), (e = Ah(null, e, t, i, n));
                break t;
              } else if (s === k) {
                (e.tag = 14), (e = Eh(null, e, t, i, n));
                break t;
              }
            }
            throw ((e = Xt(t) || t), Error(o(306, e, "")));
          }
        }
        return e;
      case 0:
        return qu(t, e, e.type, e.pendingProps, n);
      case 1:
        return (i = e.type), (s = pa(i, e.pendingProps)), zh(t, e, i, s, n);
      case 3:
        t: {
          if ((re(e, e.stateNode.containerInfo), t === null))
            throw Error(o(387));
          i = e.pendingProps;
          var r = e.memoizedState;
          (s = r.element), mu(t, e), Yi(e, i, null, n);
          var f = e.memoizedState;
          if (
            ((i = f.cache),
            jn(e, kt, i),
            i !== r.cache && uu(e, [kt], n, !0),
            Hi(),
            (i = f.element),
            r.isDehydrated)
          )
            if (
              ((r = { element: i, isDehydrated: !1, cache: f.cache }),
              (e.updateQueue.baseState = r),
              (e.memoizedState = r),
              e.flags & 256)
            ) {
              e = Ch(t, e, i, n);
              break t;
            } else if (i !== s) {
              (s = Ve(Error(o(424)), e)), Oi(s), (e = Ch(t, e, i, n));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                Rt = He(t.firstChild),
                  ne = e,
                  gt = !0,
                  Nn = null,
                  Be = !0,
                  n = Dd(e, null, i, n),
                  e.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
            }
          else {
            if ((oa(), i === s)) {
              e = hn(t, e, n);
              break t;
            }
            ie(t, e, i, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          hs(t, e),
          t === null
            ? (n = Qm(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = n)
              : gt ||
                ((n = e.type),
                (t = e.pendingProps),
                (i = zs(ct.current).createElement(n)),
                (i[ee] = e),
                (i[he] = t),
                le(i, n, t),
                Pt(i),
                (e.stateNode = i))
            : (e.memoizedState = Qm(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          gi(e),
          t === null &&
            gt &&
            ((i = e.stateNode = Xm(e.type, e.pendingProps, ct.current)),
            (ne = e),
            (Be = !0),
            (s = Rt),
            Gn(e.type) ? ((Nr = s), (Rt = He(i.firstChild))) : (Rt = s)),
          ie(t, e, e.pendingProps.children, n),
          hs(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            gt &&
            ((s = i = Rt) &&
              ((i = D1(i, e.type, e.pendingProps, Be)),
              i !== null
                ? ((e.stateNode = i),
                  (ne = e),
                  (Rt = He(i.firstChild)),
                  (Be = !1),
                  (s = !0))
                : (s = !1)),
            s || wn(e)),
          gi(e),
          (s = e.type),
          (r = e.pendingProps),
          (f = t !== null ? t.memoizedProps : null),
          (i = r.children),
          Tr(s, r) ? (i = null) : f !== null && Tr(s, f) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((s = Su(t, e, qv, null, null, n)), (sl._currentValue = s)),
          hs(t, e),
          ie(t, e, i, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            gt &&
            ((t = n = Rt) &&
              ((n = N1(n, e.pendingProps, Be)),
              n !== null
                ? ((e.stateNode = n), (ne = e), (Rt = null), (t = !0))
                : (t = !1)),
            t || wn(e)),
          null
        );
      case 13:
        return Rh(t, e, n);
      case 4:
        return (
          re(e, e.stateNode.containerInfo),
          (i = e.pendingProps),
          t === null ? (e.child = ha(e, null, i, n)) : ie(t, e, i, n),
          e.child
        );
      case 11:
        return Ah(t, e, e.type, e.pendingProps, n);
      case 7:
        return ie(t, e, e.pendingProps, n), e.child;
      case 8:
        return ie(t, e, e.pendingProps.children, n), e.child;
      case 12:
        return ie(t, e, e.pendingProps.children, n), e.child;
      case 10:
        return (
          (i = e.pendingProps),
          jn(e, e.type, i.value),
          ie(t, e, i.children, n),
          e.child
        );
      case 9:
        return (
          (s = e.type._context),
          (i = e.pendingProps.children),
          ra(e),
          (s = ae(s)),
          (i = i(s)),
          (e.flags |= 1),
          ie(t, e, i, n),
          e.child
        );
      case 14:
        return Eh(t, e, e.type, e.pendingProps, n);
      case 15:
        return Mh(t, e, e.type, e.pendingProps, n);
      case 19:
        return Vh(t, e, n);
      case 31:
        return Jv(t, e, n);
      case 22:
        return Dh(t, e, n, e.pendingProps);
      case 24:
        return (
          ra(e),
          (i = ae(kt)),
          t === null
            ? ((s = fu()),
              s === null &&
                ((s = wt),
                (r = ru()),
                (s.pooledCache = r),
                r.refCount++,
                r !== null && (s.pooledCacheLanes |= n),
                (s = r)),
              (e.memoizedState = { parent: i, cache: s }),
              hu(e),
              jn(e, kt, s))
            : ((t.lanes & n) !== 0 && (mu(t, e), Yi(e, null, null, n), Hi()),
              (s = t.memoizedState),
              (r = e.memoizedState),
              s.parent !== i
                ? ((s = { parent: i, cache: i }),
                  (e.memoizedState = s),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = s),
                  jn(e, kt, i))
                : ((i = r.cache),
                  jn(e, kt, i),
                  i !== s.cache && uu(e, [kt], n, !0))),
          ie(t, e, e.pendingProps.children, n),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(o(156, e.tag));
  }
  function mn(t) {
    t.flags |= 4;
  }
  function Ju(t, e, n, i, s) {
    if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
      if (((t.flags |= 16777216), (s & 335544128) === s))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (um()) t.flags |= 8192;
        else throw ((da = $l), du);
    } else t.flags &= -16777217;
  }
  function Uh(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !Pm(e)))
      if (um()) t.flags |= 8192;
      else throw ((da = $l), du);
  }
  function ps(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? pf() : 536870912), (t.lanes |= e), (Ia |= e));
  }
  function Qi(t, e) {
    if (!gt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
            e.alternate !== null && (n = e), (e = e.sibling);
          n === null ? (t.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = t.tail;
          for (var i = null; n !== null; )
            n.alternate !== null && (i = n), (n = n.sibling);
          i === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (i.sibling = null);
      }
  }
  function Ot(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      i = 0;
    if (e)
      for (var s = t.child; s !== null; )
        (n |= s.lanes | s.childLanes),
          (i |= s.subtreeFlags & 65011712),
          (i |= s.flags & 65011712),
          (s.return = t),
          (s = s.sibling);
    else
      for (s = t.child; s !== null; )
        (n |= s.lanes | s.childLanes),
          (i |= s.subtreeFlags),
          (i |= s.flags),
          (s.return = t),
          (s = s.sibling);
    return (t.subtreeFlags |= i), (t.childLanes = n), e;
  }
  function Pv(t, e, n) {
    var i = e.pendingProps;
    switch ((au(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ot(e), null;
      case 1:
        return Ot(e), null;
      case 3:
        return (
          (n = e.stateNode),
          (i = null),
          t !== null && (i = t.memoizedState.cache),
          e.memoizedState.cache !== i && (e.flags |= 2048),
          cn(kt),
          Yt(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            (Ya(e)
              ? mn(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), lu())),
          Ot(e),
          null
        );
      case 26:
        var s = e.type,
          r = e.memoizedState;
        return (
          t === null
            ? (mn(e),
              r !== null ? (Ot(e), Uh(e, r)) : (Ot(e), Ju(e, s, null, i, n)))
            : r
            ? r !== t.memoizedState
              ? (mn(e), Ot(e), Uh(e, r))
              : (Ot(e), (e.flags &= -16777217))
            : ((t = t.memoizedProps),
              t !== i && mn(e),
              Ot(e),
              Ju(e, s, t, i, n)),
          null
        );
      case 27:
        if (
          (Dl(e),
          (n = ct.current),
          (s = e.type),
          t !== null && e.stateNode != null)
        )
          t.memoizedProps !== i && mn(e);
        else {
          if (!i) {
            if (e.stateNode === null) throw Error(o(166));
            return Ot(e), null;
          }
          (t = P.current),
            Ya(e) ? pd(e) : ((t = Xm(s, i, n)), (e.stateNode = t), mn(e));
        }
        return Ot(e), null;
      case 5:
        if ((Dl(e), (s = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== i && mn(e);
        else {
          if (!i) {
            if (e.stateNode === null) throw Error(o(166));
            return Ot(e), null;
          }
          if (((r = P.current), Ya(e))) pd(e);
          else {
            var f = zs(ct.current);
            switch (r) {
              case 1:
                r = f.createElementNS("http://www.w3.org/2000/svg", s);
                break;
              case 2:
                r = f.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                break;
              default:
                switch (s) {
                  case "svg":
                    r = f.createElementNS("http://www.w3.org/2000/svg", s);
                    break;
                  case "math":
                    r = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s
                    );
                    break;
                  case "script":
                    (r = f.createElement("div")),
                      (r.innerHTML = "<script></script>"),
                      (r = r.removeChild(r.firstChild));
                    break;
                  case "select":
                    (r =
                      typeof i.is == "string"
                        ? f.createElement("select", { is: i.is })
                        : f.createElement("select")),
                      i.multiple
                        ? (r.multiple = !0)
                        : i.size && (r.size = i.size);
                    break;
                  default:
                    r =
                      typeof i.is == "string"
                        ? f.createElement(s, { is: i.is })
                        : f.createElement(s);
                }
            }
            (r[ee] = e), (r[he] = i);
            t: for (f = e.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6) r.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                (f.child.return = f), (f = f.child);
                continue;
              }
              if (f === e) break t;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === e) break t;
                f = f.return;
              }
              (f.sibling.return = f.return), (f = f.sibling);
            }
            e.stateNode = r;
            t: switch ((le(r, s, i), s)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break t;
              case "img":
                i = !0;
                break t;
              default:
                i = !1;
            }
            i && mn(e);
          }
        }
        return (
          Ot(e),
          Ju(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, n),
          null
        );
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== i && mn(e);
        else {
          if (typeof i != "string" && e.stateNode === null) throw Error(o(166));
          if (((t = ct.current), Ya(e))) {
            if (
              ((t = e.stateNode),
              (n = e.memoizedProps),
              (i = null),
              (s = ne),
              s !== null)
            )
              switch (s.tag) {
                case 27:
                case 5:
                  i = s.memoizedProps;
              }
            (t[ee] = e),
              (t = !!(
                t.nodeValue === n ||
                (i !== null && i.suppressHydrationWarning === !0) ||
                Rm(t.nodeValue, n)
              )),
              t || wn(e, !0);
          } else (t = zs(t).createTextNode(i)), (t[ee] = e), (e.stateNode = t);
        }
        return Ot(e), null;
      case 31:
        if (((n = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((i = Ya(e)), n !== null)) {
            if (t === null) {
              if (!i) throw Error(o(318));
              if (
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated : null),
                !t)
              )
                throw Error(o(557));
              t[ee] = e;
            } else
              oa(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            Ot(e), (t = !1);
          } else
            (n = lu()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = n),
              (t = !0);
          if (!t) return e.flags & 256 ? (De(e), e) : (De(e), null);
          if ((e.flags & 128) !== 0) throw Error(o(558));
        }
        return Ot(e), null;
      case 13:
        if (
          ((i = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((s = Ya(e)), i !== null && i.dehydrated !== null)) {
            if (t === null) {
              if (!s) throw Error(o(318));
              if (
                ((s = e.memoizedState),
                (s = s !== null ? s.dehydrated : null),
                !s)
              )
                throw Error(o(317));
              s[ee] = e;
            } else
              oa(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            Ot(e), (s = !1);
          } else
            (s = lu()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = s),
              (s = !0);
          if (!s) return e.flags & 256 ? (De(e), e) : (De(e), null);
        }
        return (
          De(e),
          (e.flags & 128) !== 0
            ? ((e.lanes = n), e)
            : ((n = i !== null),
              (t = t !== null && t.memoizedState !== null),
              n &&
                ((i = e.child),
                (s = null),
                i.alternate !== null &&
                  i.alternate.memoizedState !== null &&
                  i.alternate.memoizedState.cachePool !== null &&
                  (s = i.alternate.memoizedState.cachePool.pool),
                (r = null),
                i.memoizedState !== null &&
                  i.memoizedState.cachePool !== null &&
                  (r = i.memoizedState.cachePool.pool),
                r !== s && (i.flags |= 2048)),
              n !== t && n && (e.child.flags |= 8192),
              ps(e, e.updateQueue),
              Ot(e),
              null)
        );
      case 4:
        return Yt(), t === null && gr(e.stateNode.containerInfo), Ot(e), null;
      case 10:
        return cn(e.type), Ot(e), null;
      case 19:
        if ((L(qt), (i = e.memoizedState), i === null)) return Ot(e), null;
        if (((s = (e.flags & 128) !== 0), (r = i.rendering), r === null))
          if (s) Qi(i, !1);
          else {
            if (Bt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((r = ns(t)), r !== null)) {
                  for (
                    e.flags |= 128,
                      Qi(i, !1),
                      t = r.updateQueue,
                      e.updateQueue = t,
                      ps(e, t),
                      e.subtreeFlags = 0,
                      t = n,
                      n = e.child;
                    n !== null;

                  )
                    cd(n, t), (n = n.sibling);
                  return (
                    Q(qt, (qt.current & 1) | 2),
                    gt && un(e, i.treeForkCount),
                    e.child
                  );
                }
                t = t.sibling;
              }
            i.tail !== null &&
              be() > bs &&
              ((e.flags |= 128), (s = !0), Qi(i, !1), (e.lanes = 4194304));
          }
        else {
          if (!s)
            if (((t = ns(r)), t !== null)) {
              if (
                ((e.flags |= 128),
                (s = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                ps(e, t),
                Qi(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !r.alternate &&
                  !gt)
              )
                return Ot(e), null;
            } else
              2 * be() - i.renderingStartTime > bs &&
                n !== 536870912 &&
                ((e.flags |= 128), (s = !0), Qi(i, !1), (e.lanes = 4194304));
          i.isBackwards
            ? ((r.sibling = e.child), (e.child = r))
            : ((t = i.last),
              t !== null ? (t.sibling = r) : (e.child = r),
              (i.last = r));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = be()),
            (t.sibling = null),
            (n = qt.current),
            Q(qt, s ? (n & 1) | 2 : n & 1),
            gt && un(e, i.treeForkCount),
            t)
          : (Ot(e), null);
      case 22:
      case 23:
        return (
          De(e),
          vu(),
          (i = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== i && (e.flags |= 8192)
            : i && (e.flags |= 8192),
          i
            ? (n & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Ot(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Ot(e),
          (n = e.updateQueue),
          n !== null && ps(e, n.retryQueue),
          (n = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          (i = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (i = e.memoizedState.cachePool.pool),
          i !== n && (e.flags |= 2048),
          t !== null && L(ca),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          cn(kt),
          Ot(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, e.tag));
  }
  function $v(t, e) {
    switch ((au(e), e.tag)) {
      case 1:
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          cn(kt),
          Yt(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Dl(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if ((De(e), e.alternate === null)) throw Error(o(340));
          oa();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 13:
        if (
          (De(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(o(340));
          oa();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return L(qt), null;
      case 4:
        return Yt(), null;
      case 10:
        return cn(e.type), null;
      case 22:
      case 23:
        return (
          De(e),
          vu(),
          t !== null && L(ca),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return cn(kt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Bh(t, e) {
    switch ((au(e), e.tag)) {
      case 3:
        cn(kt), Yt();
        break;
      case 26:
      case 27:
      case 5:
        Dl(e);
        break;
      case 4:
        Yt();
        break;
      case 31:
        e.memoizedState !== null && De(e);
        break;
      case 13:
        De(e);
        break;
      case 19:
        L(qt);
        break;
      case 10:
        cn(e.type);
        break;
      case 22:
      case 23:
        De(e), vu(), t !== null && L(ca);
        break;
      case 24:
        cn(kt);
    }
  }
  function Ki(t, e) {
    try {
      var n = e.updateQueue,
        i = n !== null ? n.lastEffect : null;
      if (i !== null) {
        var s = i.next;
        n = s;
        do {
          if ((n.tag & t) === t) {
            i = void 0;
            var r = n.create,
              f = n.inst;
            (i = r()), (f.destroy = i);
          }
          n = n.next;
        } while (n !== s);
      }
    } catch (y) {
      Et(e, e.return, y);
    }
  }
  function _n(t, e, n) {
    try {
      var i = e.updateQueue,
        s = i !== null ? i.lastEffect : null;
      if (s !== null) {
        var r = s.next;
        i = r;
        do {
          if ((i.tag & t) === t) {
            var f = i.inst,
              y = f.destroy;
            if (y !== void 0) {
              (f.destroy = void 0), (s = e);
              var S = n,
                w = y;
              try {
                w();
              } catch (O) {
                Et(s, S, O);
              }
            }
          }
          i = i.next;
        } while (i !== r);
      }
    } catch (O) {
      Et(e, e.return, O);
    }
  }
  function Lh(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        wd(e, n);
      } catch (i) {
        Et(t, t.return, i);
      }
    }
  }
  function Hh(t, e, n) {
    (n.props = pa(t.type, t.memoizedProps)), (n.state = t.memoizedState);
    try {
      n.componentWillUnmount();
    } catch (i) {
      Et(t, e, i);
    }
  }
  function Fi(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var i = t.stateNode;
            break;
          case 30:
            i = t.stateNode;
            break;
          default:
            i = t.stateNode;
        }
        typeof n == "function" ? (t.refCleanup = n(i)) : (n.current = i);
      }
    } catch (s) {
      Et(t, e, s);
    }
  }
  function Pe(t, e) {
    var n = t.ref,
      i = t.refCleanup;
    if (n !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (s) {
          Et(t, e, s);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (s) {
          Et(t, e, s);
        }
      else n.current = null;
  }
  function Yh(t) {
    var e = t.type,
      n = t.memoizedProps,
      i = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && i.focus();
          break t;
        case "img":
          n.src ? (i.src = n.src) : n.srcSet && (i.srcset = n.srcSet);
      }
    } catch (s) {
      Et(t, t.return, s);
    }
  }
  function Wu(t, e, n) {
    try {
      var i = t.stateNode;
      b1(i, t.type, n, e), (i[he] = e);
    } catch (s) {
      Et(t, t.return, s);
    }
  }
  function qh(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && Gn(t.type)) ||
      t.tag === 4
    );
  }
  function Pu(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || qh(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && Gn(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function $u(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6)
      (t = t.stateNode),
        e
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
              ? n.ownerDocument.body
              : n
            ).insertBefore(t, e)
          : ((e =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n),
            e.appendChild(t),
            (n = n._reactRootContainer),
            n != null || e.onclick !== null || (e.onclick = ln));
    else if (
      i !== 4 &&
      (i === 27 && Gn(t.type) && ((n = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for ($u(t, e, n), t = t.sibling; t !== null; )
        $u(t, e, n), (t = t.sibling);
  }
  function ys(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6)
      (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (
      i !== 4 &&
      (i === 27 && Gn(t.type) && (n = t.stateNode), (t = t.child), t !== null)
    )
      for (ys(t, e, n), t = t.sibling; t !== null; )
        ys(t, e, n), (t = t.sibling);
  }
  function Gh(t) {
    var e = t.stateNode,
      n = t.memoizedProps;
    try {
      for (var i = t.type, s = e.attributes; s.length; )
        e.removeAttributeNode(s[0]);
      le(e, i, n), (e[ee] = t), (e[he] = n);
    } catch (r) {
      Et(t, t.return, r);
    }
  }
  var pn = !1,
    Kt = !1,
    Iu = !1,
    Xh = typeof WeakSet == "function" ? WeakSet : Set,
    $t = null;
  function Iv(t, e) {
    if (((t = t.containerInfo), (br = Bs), (t = ed(t)), Qo(t))) {
      if ("selectionStart" in t)
        var n = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          n = ((n = t.ownerDocument) && n.defaultView) || window;
          var i = n.getSelection && n.getSelection();
          if (i && i.rangeCount !== 0) {
            n = i.anchorNode;
            var s = i.anchorOffset,
              r = i.focusNode;
            i = i.focusOffset;
            try {
              n.nodeType, r.nodeType;
            } catch {
              n = null;
              break t;
            }
            var f = 0,
              y = -1,
              S = -1,
              w = 0,
              O = 0,
              _ = t,
              z = null;
            e: for (;;) {
              for (
                var C;
                _ !== n || (s !== 0 && _.nodeType !== 3) || (y = f + s),
                  _ !== r || (i !== 0 && _.nodeType !== 3) || (S = f + i),
                  _.nodeType === 3 && (f += _.nodeValue.length),
                  (C = _.firstChild) !== null;

              )
                (z = _), (_ = C);
              for (;;) {
                if (_ === t) break e;
                if (
                  (z === n && ++w === s && (y = f),
                  z === r && ++O === i && (S = f),
                  (C = _.nextSibling) !== null)
                )
                  break;
                (_ = z), (z = _.parentNode);
              }
              _ = C;
            }
            n = y === -1 || S === -1 ? null : { start: y, end: S };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Sr = { focusedElem: t, selectionRange: n }, Bs = !1, $t = e;
      $t !== null;

    )
      if (
        ((e = $t), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)
      )
        (t.return = e), ($t = t);
      else
        for (; $t !== null; ) {
          switch (((e = $t), (r = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              if (
                (t & 4) !== 0 &&
                ((t = e.updateQueue),
                (t = t !== null ? t.events : null),
                t !== null)
              )
                for (n = 0; n < t.length; n++)
                  (s = t[n]), (s.ref.impl = s.nextImpl);
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && r !== null) {
                (t = void 0),
                  (n = e),
                  (s = r.memoizedProps),
                  (r = r.memoizedState),
                  (i = n.stateNode);
                try {
                  var J = pa(n.type, s);
                  (t = i.getSnapshotBeforeUpdate(J, r)),
                    (i.__reactInternalSnapshotBeforeUpdate = t);
                } catch (nt) {
                  Et(n, n.return, nt);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (n = t.nodeType), n === 9)
                )
                  Er(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Er(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(o(163));
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), ($t = t);
            break;
          }
          $t = e.return;
        }
  }
  function kh(t, e, n) {
    var i = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        gn(t, n), i & 4 && Ki(5, n);
        break;
      case 1:
        if ((gn(t, n), i & 4))
          if (((t = n.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (f) {
              Et(n, n.return, f);
            }
          else {
            var s = pa(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(s, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (f) {
              Et(n, n.return, f);
            }
          }
        i & 64 && Lh(n), i & 512 && Fi(n, n.return);
        break;
      case 3:
        if ((gn(t, n), i & 64 && ((t = n.updateQueue), t !== null))) {
          if (((e = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            wd(t, e);
          } catch (f) {
            Et(n, n.return, f);
          }
        }
        break;
      case 27:
        e === null && i & 4 && Gh(n);
      case 26:
      case 5:
        gn(t, n), e === null && i & 4 && Yh(n), i & 512 && Fi(n, n.return);
        break;
      case 12:
        gn(t, n);
        break;
      case 31:
        gn(t, n), i & 4 && Kh(t, n);
        break;
      case 13:
        gn(t, n),
          i & 4 && Fh(t, n),
          i & 64 &&
            ((t = n.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((n = u1.bind(null, n)), w1(t, n))));
        break;
      case 22:
        if (((i = n.memoizedState !== null || pn), !i)) {
          (e = (e !== null && e.memoizedState !== null) || Kt), (s = pn);
          var r = Kt;
          (pn = i),
            (Kt = e) && !r ? vn(t, n, (n.subtreeFlags & 8772) !== 0) : gn(t, n),
            (pn = s),
            (Kt = r);
        }
        break;
      case 30:
        break;
      default:
        gn(t, n);
    }
  }
  function Zh(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), Zh(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && jo(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var Vt = null,
    pe = !1;
  function yn(t, e, n) {
    for (n = n.child; n !== null; ) Qh(t, e, n), (n = n.sibling);
  }
  function Qh(t, e, n) {
    if (Se && typeof Se.onCommitFiberUnmount == "function")
      try {
        Se.onCommitFiberUnmount(vi, n);
      } catch {}
    switch (n.tag) {
      case 26:
        Kt || Pe(n, e),
          yn(t, e, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
        break;
      case 27:
        Kt || Pe(n, e);
        var i = Vt,
          s = pe;
        Gn(n.type) && ((Vt = n.stateNode), (pe = !1)),
          yn(t, e, n),
          al(n.stateNode),
          (Vt = i),
          (pe = s);
        break;
      case 5:
        Kt || Pe(n, e);
      case 6:
        if (
          ((i = Vt),
          (s = pe),
          (Vt = null),
          yn(t, e, n),
          (Vt = i),
          (pe = s),
          Vt !== null)
        )
          if (pe)
            try {
              (Vt.nodeType === 9
                ? Vt.body
                : Vt.nodeName === "HTML"
                ? Vt.ownerDocument.body
                : Vt
              ).removeChild(n.stateNode);
            } catch (r) {
              Et(n, e, r);
            }
          else
            try {
              Vt.removeChild(n.stateNode);
            } catch (r) {
              Et(n, e, r);
            }
        break;
      case 18:
        Vt !== null &&
          (pe
            ? ((t = Vt),
              Lm(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t,
                n.stateNode
              ),
              oi(t))
            : Lm(Vt, n.stateNode));
        break;
      case 4:
        (i = Vt),
          (s = pe),
          (Vt = n.stateNode.containerInfo),
          (pe = !0),
          yn(t, e, n),
          (Vt = i),
          (pe = s);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        _n(2, n, e), Kt || _n(4, n, e), yn(t, e, n);
        break;
      case 1:
        Kt ||
          (Pe(n, e),
          (i = n.stateNode),
          typeof i.componentWillUnmount == "function" && Hh(n, e, i)),
          yn(t, e, n);
        break;
      case 21:
        yn(t, e, n);
        break;
      case 22:
        (Kt = (i = Kt) || n.memoizedState !== null), yn(t, e, n), (Kt = i);
        break;
      default:
        yn(t, e, n);
    }
  }
  function Kh(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        oi(t);
      } catch (n) {
        Et(e, e.return, n);
      }
    }
  }
  function Fh(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        oi(t);
      } catch (n) {
        Et(e, e.return, n);
      }
  }
  function t1(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Xh()), e;
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new Xh()),
          e
        );
      default:
        throw Error(o(435, t.tag));
    }
  }
  function gs(t, e) {
    var n = t1(t);
    e.forEach(function (i) {
      if (!n.has(i)) {
        n.add(i);
        var s = r1.bind(null, t, i);
        i.then(s, s);
      }
    });
  }
  function ye(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var s = n[i],
          r = t,
          f = e,
          y = f;
        t: for (; y !== null; ) {
          switch (y.tag) {
            case 27:
              if (Gn(y.type)) {
                (Vt = y.stateNode), (pe = !1);
                break t;
              }
              break;
            case 5:
              (Vt = y.stateNode), (pe = !1);
              break t;
            case 3:
            case 4:
              (Vt = y.stateNode.containerInfo), (pe = !0);
              break t;
          }
          y = y.return;
        }
        if (Vt === null) throw Error(o(160));
        Qh(r, f, s),
          (Vt = null),
          (pe = !1),
          (r = s.alternate),
          r !== null && (r.return = null),
          (s.return = null);
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; ) Jh(e, t), (e = e.sibling);
  }
  var ke = null;
  function Jh(t, e) {
    var n = t.alternate,
      i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ye(e, t),
          ge(t),
          i & 4 && (_n(3, t, t.return), Ki(3, t), _n(5, t, t.return));
        break;
      case 1:
        ye(e, t),
          ge(t),
          i & 512 && (Kt || n === null || Pe(n, n.return)),
          i & 64 &&
            pn &&
            ((t = t.updateQueue),
            t !== null &&
              ((i = t.callbacks),
              i !== null &&
                ((n = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = n === null ? i : n.concat(i)))));
        break;
      case 26:
        var s = ke;
        if (
          (ye(e, t),
          ge(t),
          i & 512 && (Kt || n === null || Pe(n, n.return)),
          i & 4)
        ) {
          var r = n !== null ? n.memoizedState : null;
          if (((i = t.memoizedState), n === null))
            if (i === null)
              if (t.stateNode === null) {
                t: {
                  (i = t.type),
                    (n = t.memoizedProps),
                    (s = s.ownerDocument || s);
                  e: switch (i) {
                    case "title":
                      (r = s.getElementsByTagName("title")[0]),
                        (!r ||
                          r[Si] ||
                          r[ee] ||
                          r.namespaceURI === "http://www.w3.org/2000/svg" ||
                          r.hasAttribute("itemprop")) &&
                          ((r = s.createElement(i)),
                          s.head.insertBefore(
                            r,
                            s.querySelector("head > title")
                          )),
                        le(r, i, n),
                        (r[ee] = t),
                        Pt(r),
                        (i = r);
                      break t;
                    case "link":
                      var f = Jm("link", "href", s).get(i + (n.href || ""));
                      if (f) {
                        for (var y = 0; y < f.length; y++)
                          if (
                            ((r = f[y]),
                            r.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              r.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              r.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              r.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            f.splice(y, 1);
                            break e;
                          }
                      }
                      (r = s.createElement(i)),
                        le(r, i, n),
                        s.head.appendChild(r);
                      break;
                    case "meta":
                      if (
                        (f = Jm("meta", "content", s).get(
                          i + (n.content || "")
                        ))
                      ) {
                        for (y = 0; y < f.length; y++)
                          if (
                            ((r = f[y]),
                            r.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              r.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              r.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              r.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              r.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            f.splice(y, 1);
                            break e;
                          }
                      }
                      (r = s.createElement(i)),
                        le(r, i, n),
                        s.head.appendChild(r);
                      break;
                    default:
                      throw Error(o(468, i));
                  }
                  (r[ee] = t), Pt(r), (i = r);
                }
                t.stateNode = i;
              } else Wm(s, t.type, t.stateNode);
            else t.stateNode = Fm(s, i, t.memoizedProps);
          else
            r !== i
              ? (r === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : r.count--,
                i === null
                  ? Wm(s, t.type, t.stateNode)
                  : Fm(s, i, t.memoizedProps))
              : i === null &&
                t.stateNode !== null &&
                Wu(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        ye(e, t),
          ge(t),
          i & 512 && (Kt || n === null || Pe(n, n.return)),
          n !== null && i & 4 && Wu(t, t.memoizedProps, n.memoizedProps);
        break;
      case 5:
        if (
          (ye(e, t),
          ge(t),
          i & 512 && (Kt || n === null || Pe(n, n.return)),
          t.flags & 32)
        ) {
          s = t.stateNode;
          try {
            za(s, "");
          } catch (J) {
            Et(t, t.return, J);
          }
        }
        i & 4 &&
          t.stateNode != null &&
          ((s = t.memoizedProps), Wu(t, s, n !== null ? n.memoizedProps : s)),
          i & 1024 && (Iu = !0);
        break;
      case 6:
        if ((ye(e, t), ge(t), i & 4)) {
          if (t.stateNode === null) throw Error(o(162));
          (i = t.memoizedProps), (n = t.stateNode);
          try {
            n.nodeValue = i;
          } catch (J) {
            Et(t, t.return, J);
          }
        }
        break;
      case 3:
        if (
          ((Os = null),
          (s = ke),
          (ke = Cs(e.containerInfo)),
          ye(e, t),
          (ke = s),
          ge(t),
          i & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            oi(e.containerInfo);
          } catch (J) {
            Et(t, t.return, J);
          }
        Iu && ((Iu = !1), Wh(t));
        break;
      case 4:
        (i = ke),
          (ke = Cs(t.stateNode.containerInfo)),
          ye(e, t),
          ge(t),
          (ke = i);
        break;
      case 12:
        ye(e, t), ge(t);
        break;
      case 31:
        ye(e, t),
          ge(t),
          i & 4 &&
            ((i = t.updateQueue),
            i !== null && ((t.updateQueue = null), gs(t, i)));
        break;
      case 13:
        ye(e, t),
          ge(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (xs = be()),
          i & 4 &&
            ((i = t.updateQueue),
            i !== null && ((t.updateQueue = null), gs(t, i)));
        break;
      case 22:
        s = t.memoizedState !== null;
        var S = n !== null && n.memoizedState !== null,
          w = pn,
          O = Kt;
        if (
          ((pn = w || s),
          (Kt = O || S),
          ye(e, t),
          (Kt = O),
          (pn = w),
          ge(t),
          i & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = s ? e._visibility & -2 : e._visibility | 1,
              s && (n === null || S || pn || Kt || ya(t)),
              n = null,
              e = t;
            ;

          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                S = n = e;
                try {
                  if (((r = S.stateNode), s))
                    (f = r.style),
                      typeof f.setProperty == "function"
                        ? f.setProperty("display", "none", "important")
                        : (f.display = "none");
                  else {
                    y = S.stateNode;
                    var _ = S.memoizedProps.style,
                      z =
                        _ != null && _.hasOwnProperty("display")
                          ? _.display
                          : null;
                    y.style.display =
                      z == null || typeof z == "boolean" ? "" : ("" + z).trim();
                  }
                } catch (J) {
                  Et(S, S.return, J);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                S = e;
                try {
                  S.stateNode.nodeValue = s ? "" : S.memoizedProps;
                } catch (J) {
                  Et(S, S.return, J);
                }
              }
            } else if (e.tag === 18) {
              if (n === null) {
                S = e;
                try {
                  var C = S.stateNode;
                  s ? Hm(C, !0) : Hm(S.stateNode, !1);
                } catch (J) {
                  Et(S, S.return, J);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              n === e && (n = null), (e = e.return);
            }
            n === e && (n = null),
              (e.sibling.return = e.return),
              (e = e.sibling);
          }
        i & 4 &&
          ((i = t.updateQueue),
          i !== null &&
            ((n = i.retryQueue),
            n !== null && ((i.retryQueue = null), gs(t, n))));
        break;
      case 19:
        ye(e, t),
          ge(t),
          i & 4 &&
            ((i = t.updateQueue),
            i !== null && ((t.updateQueue = null), gs(t, i)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ye(e, t), ge(t);
    }
  }
  function ge(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, i = t.return; i !== null; ) {
          if (qh(i)) {
            n = i;
            break;
          }
          i = i.return;
        }
        if (n == null) throw Error(o(160));
        switch (n.tag) {
          case 27:
            var s = n.stateNode,
              r = Pu(t);
            ys(t, r, s);
            break;
          case 5:
            var f = n.stateNode;
            n.flags & 32 && (za(f, ""), (n.flags &= -33));
            var y = Pu(t);
            ys(t, y, f);
            break;
          case 3:
          case 4:
            var S = n.stateNode.containerInfo,
              w = Pu(t);
            $u(t, w, S);
            break;
          default:
            throw Error(o(161));
        }
      } catch (O) {
        Et(t, t.return, O);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Wh(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Wh(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function gn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) kh(t, e.alternate, e), (e = e.sibling);
  }
  function ya(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          _n(4, e, e.return), ya(e);
          break;
        case 1:
          Pe(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && Hh(e, e.return, n),
            ya(e);
          break;
        case 27:
          al(e.stateNode);
        case 26:
        case 5:
          Pe(e, e.return), ya(e);
          break;
        case 22:
          e.memoizedState === null && ya(e);
          break;
        case 30:
          ya(e);
          break;
        default:
          ya(e);
      }
      t = t.sibling;
    }
  }
  function vn(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var i = e.alternate,
        s = t,
        r = e,
        f = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          vn(s, r, n), Ki(4, r);
          break;
        case 1:
          if (
            (vn(s, r, n),
            (i = r),
            (s = i.stateNode),
            typeof s.componentDidMount == "function")
          )
            try {
              s.componentDidMount();
            } catch (w) {
              Et(i, i.return, w);
            }
          if (((i = r), (s = i.updateQueue), s !== null)) {
            var y = i.stateNode;
            try {
              var S = s.shared.hiddenCallbacks;
              if (S !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < S.length; s++)
                  Nd(S[s], y);
            } catch (w) {
              Et(i, i.return, w);
            }
          }
          n && f & 64 && Lh(r), Fi(r, r.return);
          break;
        case 27:
          Gh(r);
        case 26:
        case 5:
          vn(s, r, n), n && i === null && f & 4 && Yh(r), Fi(r, r.return);
          break;
        case 12:
          vn(s, r, n);
          break;
        case 31:
          vn(s, r, n), n && f & 4 && Kh(s, r);
          break;
        case 13:
          vn(s, r, n), n && f & 4 && Fh(s, r);
          break;
        case 22:
          r.memoizedState === null && vn(s, r, n), Fi(r, r.return);
          break;
        case 30:
          break;
        default:
          vn(s, r, n);
      }
      e = e.sibling;
    }
  }
  function tr(t, e) {
    var n = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (n = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== n && (t != null && t.refCount++, n != null && Vi(n));
  }
  function er(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && Vi(t));
  }
  function Ze(t, e, n, i) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Ph(t, e, n, i), (e = e.sibling);
  }
  function Ph(t, e, n, i) {
    var s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ze(t, e, n, i), s & 2048 && Ki(9, e);
        break;
      case 1:
        Ze(t, e, n, i);
        break;
      case 3:
        Ze(t, e, n, i),
          s & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Vi(t)));
        break;
      case 12:
        if (s & 2048) {
          Ze(t, e, n, i), (t = e.stateNode);
          try {
            var r = e.memoizedProps,
              f = r.id,
              y = r.onPostCommit;
            typeof y == "function" &&
              y(
                f,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (S) {
            Et(e, e.return, S);
          }
        } else Ze(t, e, n, i);
        break;
      case 31:
        Ze(t, e, n, i);
        break;
      case 13:
        Ze(t, e, n, i);
        break;
      case 23:
        break;
      case 22:
        (r = e.stateNode),
          (f = e.alternate),
          e.memoizedState !== null
            ? r._visibility & 2
              ? Ze(t, e, n, i)
              : Ji(t, e)
            : r._visibility & 2
            ? Ze(t, e, n, i)
            : ((r._visibility |= 2),
              Wa(t, e, n, i, (e.subtreeFlags & 10256) !== 0 || !1)),
          s & 2048 && tr(f, e);
        break;
      case 24:
        Ze(t, e, n, i), s & 2048 && er(e.alternate, e);
        break;
      default:
        Ze(t, e, n, i);
    }
  }
  function Wa(t, e, n, i, s) {
    for (
      s = s && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child;
      e !== null;

    ) {
      var r = t,
        f = e,
        y = n,
        S = i,
        w = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Wa(r, f, y, S, s), Ki(8, f);
          break;
        case 23:
          break;
        case 22:
          var O = f.stateNode;
          f.memoizedState !== null
            ? O._visibility & 2
              ? Wa(r, f, y, S, s)
              : Ji(r, f)
            : ((O._visibility |= 2), Wa(r, f, y, S, s)),
            s && w & 2048 && tr(f.alternate, f);
          break;
        case 24:
          Wa(r, f, y, S, s), s && w & 2048 && er(f.alternate, f);
          break;
        default:
          Wa(r, f, y, S, s);
      }
      e = e.sibling;
    }
  }
  function Ji(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t,
          i = e,
          s = i.flags;
        switch (i.tag) {
          case 22:
            Ji(n, i), s & 2048 && tr(i.alternate, i);
            break;
          case 24:
            Ji(n, i), s & 2048 && er(i.alternate, i);
            break;
          default:
            Ji(n, i);
        }
        e = e.sibling;
      }
  }
  var Wi = 8192;
  function Pa(t, e, n) {
    if (t.subtreeFlags & Wi)
      for (t = t.child; t !== null; ) $h(t, e, n), (t = t.sibling);
  }
  function $h(t, e, n) {
    switch (t.tag) {
      case 26:
        Pa(t, e, n),
          t.flags & Wi &&
            t.memoizedState !== null &&
            Y1(n, ke, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        Pa(t, e, n);
        break;
      case 3:
      case 4:
        var i = ke;
        (ke = Cs(t.stateNode.containerInfo)), Pa(t, e, n), (ke = i);
        break;
      case 22:
        t.memoizedState === null &&
          ((i = t.alternate),
          i !== null && i.memoizedState !== null
            ? ((i = Wi), (Wi = 16777216), Pa(t, e, n), (Wi = i))
            : Pa(t, e, n));
        break;
      default:
        Pa(t, e, n);
    }
  }
  function Ih(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function Pi(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ($t = i), em(i, t);
        }
      Ih(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) tm(t), (t = t.sibling);
  }
  function tm(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Pi(t), t.flags & 2048 && _n(9, t, t.return);
        break;
      case 3:
        Pi(t);
        break;
      case 12:
        Pi(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), vs(t))
          : Pi(t);
        break;
      default:
        Pi(t);
    }
  }
  function vs(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          ($t = i), em(i, t);
        }
      Ih(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          _n(8, e, e.return), vs(e);
          break;
        case 22:
          (n = e.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), vs(e));
          break;
        default:
          vs(e);
      }
      t = t.sibling;
    }
  }
  function em(t, e) {
    for (; $t !== null; ) {
      var n = $t;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          _n(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var i = n.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          Vi(n.memoizedState.cache);
      }
      if (((i = n.child), i !== null)) (i.return = n), ($t = i);
      else
        t: for (n = t; $t !== null; ) {
          i = $t;
          var s = i.sibling,
            r = i.return;
          if ((Zh(i), i === n)) {
            $t = null;
            break t;
          }
          if (s !== null) {
            (s.return = r), ($t = s);
            break t;
          }
          $t = r;
        }
    }
  }
  var e1 = {
      getCacheForType: function (t) {
        var e = ae(kt),
          n = e.data.get(t);
        return n === void 0 && ((n = t()), e.data.set(t, n)), n;
      },
      cacheSignal: function () {
        return ae(kt).controller.signal;
      },
    },
    n1 = typeof WeakMap == "function" ? WeakMap : Map,
    St = 0,
    wt = null,
    ft = null,
    ht = 0,
    At = 0,
    Ne = null,
    Un = !1,
    $a = !1,
    nr = !1,
    xn = 0,
    Bt = 0,
    Bn = 0,
    ga = 0,
    ar = 0,
    we = 0,
    Ia = 0,
    $i = null,
    ve = null,
    ir = !1,
    xs = 0,
    nm = 0,
    bs = 1 / 0,
    Ss = null,
    Ln = null,
    Jt = 0,
    Hn = null,
    ti = null,
    bn = 0,
    lr = 0,
    sr = null,
    am = null,
    Ii = 0,
    or = null;
  function je() {
    return (St & 2) !== 0 && ht !== 0 ? ht & -ht : R.T !== null ? hr() : xf();
  }
  function im() {
    if (we === 0)
      if ((ht & 536870912) === 0 || gt) {
        var t = jl;
        (jl <<= 1), (jl & 3932160) === 0 && (jl = 262144), (we = t);
      } else we = 536870912;
    return (t = Me.current), t !== null && (t.flags |= 32), we;
  }
  function xe(t, e, n) {
    ((t === wt && (At === 2 || At === 9)) || t.cancelPendingCommit !== null) &&
      (ei(t, 0), Yn(t, ht, we, !1)),
      bi(t, n),
      ((St & 2) === 0 || t !== wt) &&
        (t === wt &&
          ((St & 2) === 0 && (ga |= n), Bt === 4 && Yn(t, ht, we, !1)),
        $e(t));
  }
  function lm(t, e, n) {
    if ((St & 6) !== 0) throw Error(o(327));
    var i = (!n && (e & 127) === 0 && (e & t.expiredLanes) === 0) || xi(t, e),
      s = i ? l1(t, e) : rr(t, e, !0),
      r = i;
    do {
      if (s === 0) {
        $a && !i && Yn(t, e, 0, !1);
        break;
      } else {
        if (((n = t.current.alternate), r && !a1(n))) {
          (s = rr(t, e, !1)), (r = !1);
          continue;
        }
        if (s === 2) {
          if (((r = e), t.errorRecoveryDisabledLanes & r)) var f = 0;
          else
            (f = t.pendingLanes & -536870913),
              (f = f !== 0 ? f : f & 536870912 ? 536870912 : 0);
          if (f !== 0) {
            e = f;
            t: {
              var y = t;
              s = $i;
              var S = y.current.memoizedState.isDehydrated;
              if ((S && (ei(y, f).flags |= 256), (f = rr(y, f, !1)), f !== 2)) {
                if (nr && !S) {
                  (y.errorRecoveryDisabledLanes |= r), (ga |= r), (s = 4);
                  break t;
                }
                (r = ve),
                  (ve = s),
                  r !== null && (ve === null ? (ve = r) : ve.push.apply(ve, r));
              }
              s = f;
            }
            if (((r = !1), s !== 2)) continue;
          }
        }
        if (s === 1) {
          ei(t, 0), Yn(t, e, 0, !0);
          break;
        }
        t: {
          switch (((i = t), (r = s), r)) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Yn(i, e, we, !Un);
              break t;
            case 2:
              ve = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((e & 62914560) === e && ((s = xs + 300 - be()), 10 < s)) {
            if ((Yn(i, e, we, !Un), Cl(i, 0, !0) !== 0)) break t;
            (bn = e),
              (i.timeoutHandle = Um(
                sm.bind(
                  null,
                  i,
                  n,
                  ve,
                  Ss,
                  ir,
                  e,
                  we,
                  ga,
                  Ia,
                  Un,
                  r,
                  "Throttled",
                  -0,
                  0
                ),
                s
              ));
            break t;
          }
          sm(i, n, ve, Ss, ir, e, we, ga, Ia, Un, r, null, -0, 0);
        }
      }
      break;
    } while (!0);
    $e(t);
  }
  function sm(t, e, n, i, s, r, f, y, S, w, O, _, z, C) {
    if (
      ((t.timeoutHandle = -1),
      (_ = e.subtreeFlags),
      _ & 8192 || (_ & 16785408) === 16785408)
    ) {
      (_ = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: ln,
      }),
        $h(e, r, _);
      var J =
        (r & 62914560) === r ? xs - be() : (r & 4194048) === r ? nm - be() : 0;
      if (((J = q1(_, J)), J !== null)) {
        (bn = r),
          (t.cancelPendingCommit = J(
            mm.bind(null, t, e, r, n, i, s, f, y, S, O, _, null, z, C)
          )),
          Yn(t, r, f, !w);
        return;
      }
    }
    mm(t, e, r, n, i, s, f, y, S);
  }
  function a1(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        e.flags & 16384 &&
        ((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var i = 0; i < n.length; i++) {
          var s = n[i],
            r = s.getSnapshot;
          s = s.value;
          try {
            if (!Ae(r(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
        (n.return = e), (e = n);
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function Yn(t, e, n, i) {
    (e &= ~ar),
      (e &= ~ga),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      i && (t.warmLanes |= e),
      (i = t.expirationTimes);
    for (var s = e; 0 < s; ) {
      var r = 31 - Te(s),
        f = 1 << r;
      (i[r] = -1), (s &= ~f);
    }
    n !== 0 && yf(t, n, e);
  }
  function Ts() {
    return (St & 6) === 0 ? (tl(0), !1) : !0;
  }
  function ur() {
    if (ft !== null) {
      if (At === 0) var t = ft.return;
      else (t = ft), (rn = ua = null), Eu(t), (Za = null), (Ui = 0), (t = ft);
      for (; t !== null; ) Bh(t.alternate, t), (t = t.return);
      ft = null;
    }
  }
  function ei(t, e) {
    var n = t.timeoutHandle;
    n !== -1 && ((t.timeoutHandle = -1), A1(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      (bn = 0),
      ur(),
      (wt = t),
      (ft = n = on(t.current, null)),
      (ht = e),
      (At = 0),
      (Ne = null),
      (Un = !1),
      ($a = xi(t, e)),
      (nr = !1),
      (Ia = we = ar = ga = Bn = Bt = 0),
      (ve = $i = null),
      (ir = !1),
      (e & 8) !== 0 && (e |= e & 32);
    var i = t.entangledLanes;
    if (i !== 0)
      for (t = t.entanglements, i &= e; 0 < i; ) {
        var s = 31 - Te(i),
          r = 1 << s;
        (e |= t[s]), (i &= ~r);
      }
    return (xn = e), Xl(), n;
  }
  function om(t, e) {
    (ot = null),
      (R.H = ki),
      e === ka || e === Pl
        ? ((e = Ad()), (At = 3))
        : e === du
        ? ((e = Ad()), (At = 4))
        : (At =
            e === Yu
              ? 8
              : e !== null &&
                typeof e == "object" &&
                typeof e.then == "function"
              ? 6
              : 1),
      (Ne = e),
      ft === null && ((Bt = 1), fs(t, Ve(e, t.current)));
  }
  function um() {
    var t = Me.current;
    return t === null
      ? !0
      : (ht & 4194048) === ht
      ? Le === null
      : (ht & 62914560) === ht || (ht & 536870912) !== 0
      ? t === Le
      : !1;
  }
  function rm() {
    var t = R.H;
    return (R.H = ki), t === null ? ki : t;
  }
  function cm() {
    var t = R.A;
    return (R.A = e1), t;
  }
  function As() {
    (Bt = 4),
      Un || ((ht & 4194048) !== ht && Me.current !== null) || ($a = !0),
      ((Bn & 134217727) === 0 && (ga & 134217727) === 0) ||
        wt === null ||
        Yn(wt, ht, we, !1);
  }
  function rr(t, e, n) {
    var i = St;
    St |= 2;
    var s = rm(),
      r = cm();
    (wt !== t || ht !== e) && ((Ss = null), ei(t, e)), (e = !1);
    var f = Bt;
    t: do
      try {
        if (At !== 0 && ft !== null) {
          var y = ft,
            S = Ne;
          switch (At) {
            case 8:
              ur(), (f = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Me.current === null && (e = !0);
              var w = At;
              if (((At = 0), (Ne = null), ni(t, y, S, w), n && $a)) {
                f = 0;
                break t;
              }
              break;
            default:
              (w = At), (At = 0), (Ne = null), ni(t, y, S, w);
          }
        }
        i1(), (f = Bt);
        break;
      } catch (O) {
        om(t, O);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (rn = ua = null),
      (St = i),
      (R.H = s),
      (R.A = r),
      ft === null && ((wt = null), (ht = 0), Xl()),
      f
    );
  }
  function i1() {
    for (; ft !== null; ) fm(ft);
  }
  function l1(t, e) {
    var n = St;
    St |= 2;
    var i = rm(),
      s = cm();
    wt !== t || ht !== e
      ? ((Ss = null), (bs = be() + 500), ei(t, e))
      : ($a = xi(t, e));
    t: do
      try {
        if (At !== 0 && ft !== null) {
          e = ft;
          var r = Ne;
          e: switch (At) {
            case 1:
              (At = 0), (Ne = null), ni(t, e, r, 1);
              break;
            case 2:
            case 9:
              if (Sd(r)) {
                (At = 0), (Ne = null), dm(e);
                break;
              }
              (e = function () {
                (At !== 2 && At !== 9) || wt !== t || (At = 7), $e(t);
              }),
                r.then(e, e);
              break t;
            case 3:
              At = 7;
              break t;
            case 4:
              At = 5;
              break t;
            case 7:
              Sd(r)
                ? ((At = 0), (Ne = null), dm(e))
                : ((At = 0), (Ne = null), ni(t, e, r, 7));
              break;
            case 5:
              var f = null;
              switch (ft.tag) {
                case 26:
                  f = ft.memoizedState;
                case 5:
                case 27:
                  var y = ft;
                  if (f ? Pm(f) : y.stateNode.complete) {
                    (At = 0), (Ne = null);
                    var S = y.sibling;
                    if (S !== null) ft = S;
                    else {
                      var w = y.return;
                      w !== null ? ((ft = w), Es(w)) : (ft = null);
                    }
                    break e;
                  }
              }
              (At = 0), (Ne = null), ni(t, e, r, 5);
              break;
            case 6:
              (At = 0), (Ne = null), ni(t, e, r, 6);
              break;
            case 8:
              ur(), (Bt = 6);
              break t;
            default:
              throw Error(o(462));
          }
        }
        s1();
        break;
      } catch (O) {
        om(t, O);
      }
    while (!0);
    return (
      (rn = ua = null),
      (R.H = i),
      (R.A = s),
      (St = n),
      ft !== null ? 0 : ((wt = null), (ht = 0), Xl(), Bt)
    );
  }
  function s1() {
    for (; ft !== null && !jg(); ) fm(ft);
  }
  function fm(t) {
    var e = _h(t.alternate, t, xn);
    (t.memoizedProps = t.pendingProps), e === null ? Es(t) : (ft = e);
  }
  function dm(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = jh(n, e, e.pendingProps, e.type, void 0, ht);
        break;
      case 11:
        e = jh(n, e, e.pendingProps, e.type.render, e.ref, ht);
        break;
      case 5:
        Eu(e);
      default:
        Bh(n, e), (e = ft = cd(e, xn)), (e = _h(n, e, xn));
    }
    (t.memoizedProps = t.pendingProps), e === null ? Es(t) : (ft = e);
  }
  function ni(t, e, n, i) {
    (rn = ua = null), Eu(e), (Za = null), (Ui = 0);
    var s = e.return;
    try {
      if (Fv(t, s, e, n, ht)) {
        (Bt = 1), fs(t, Ve(n, t.current)), (ft = null);
        return;
      }
    } catch (r) {
      if (s !== null) throw ((ft = s), r);
      (Bt = 1), fs(t, Ve(n, t.current)), (ft = null);
      return;
    }
    e.flags & 32768
      ? (gt || i === 1
          ? (t = !0)
          : $a || (ht & 536870912) !== 0
          ? (t = !1)
          : ((Un = t = !0),
            (i === 2 || i === 9 || i === 3 || i === 6) &&
              ((i = Me.current),
              i !== null && i.tag === 13 && (i.flags |= 16384))),
        hm(e, t))
      : Es(e);
  }
  function Es(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        hm(e, Un);
        return;
      }
      t = e.return;
      var n = Pv(e.alternate, e, xn);
      if (n !== null) {
        ft = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        ft = e;
        return;
      }
      ft = e = t;
    } while (e !== null);
    Bt === 0 && (Bt = 5);
  }
  function hm(t, e) {
    do {
      var n = $v(t.alternate, t);
      if (n !== null) {
        (n.flags &= 32767), (ft = n);
        return;
      }
      if (
        ((n = t.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        ft = t;
        return;
      }
      ft = t = n;
    } while (t !== null);
    (Bt = 6), (ft = null);
  }
  function mm(t, e, n, i, s, r, f, y, S) {
    t.cancelPendingCommit = null;
    do Ms();
    while (Jt !== 0);
    if ((St & 6) !== 0) throw Error(o(327));
    if (e !== null) {
      if (e === t.current) throw Error(o(177));
      if (
        ((r = e.lanes | e.childLanes),
        (r |= Po),
        Hg(t, n, r, f, y, S),
        t === wt && ((ft = wt = null), (ht = 0)),
        (ti = e),
        (Hn = t),
        (bn = n),
        (lr = r),
        (sr = s),
        (am = i),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            c1(Nl, function () {
              return xm(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (i = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || i)
      ) {
        (i = R.T), (R.T = null), (s = Z.p), (Z.p = 2), (f = St), (St |= 4);
        try {
          Iv(t, e, n);
        } finally {
          (St = f), (Z.p = s), (R.T = i);
        }
      }
      (Jt = 1), pm(), ym(), gm();
    }
  }
  function pm() {
    if (Jt === 1) {
      Jt = 0;
      var t = Hn,
        e = ti,
        n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        (n = R.T), (R.T = null);
        var i = Z.p;
        Z.p = 2;
        var s = St;
        St |= 4;
        try {
          Jh(e, t);
          var r = Sr,
            f = ed(t.containerInfo),
            y = r.focusedElem,
            S = r.selectionRange;
          if (
            f !== y &&
            y &&
            y.ownerDocument &&
            td(y.ownerDocument.documentElement, y)
          ) {
            if (S !== null && Qo(y)) {
              var w = S.start,
                O = S.end;
              if ((O === void 0 && (O = w), "selectionStart" in y))
                (y.selectionStart = w),
                  (y.selectionEnd = Math.min(O, y.value.length));
              else {
                var _ = y.ownerDocument || document,
                  z = (_ && _.defaultView) || window;
                if (z.getSelection) {
                  var C = z.getSelection(),
                    J = y.textContent.length,
                    nt = Math.min(S.start, J),
                    Nt = S.end === void 0 ? nt : Math.min(S.end, J);
                  !C.extend && nt > Nt && ((f = Nt), (Nt = nt), (nt = f));
                  var M = If(y, nt),
                    A = If(y, Nt);
                  if (
                    M &&
                    A &&
                    (C.rangeCount !== 1 ||
                      C.anchorNode !== M.node ||
                      C.anchorOffset !== M.offset ||
                      C.focusNode !== A.node ||
                      C.focusOffset !== A.offset)
                  ) {
                    var N = _.createRange();
                    N.setStart(M.node, M.offset),
                      C.removeAllRanges(),
                      nt > Nt
                        ? (C.addRange(N), C.extend(A.node, A.offset))
                        : (N.setEnd(A.node, A.offset), C.addRange(N));
                  }
                }
              }
            }
            for (_ = [], C = y; (C = C.parentNode); )
              C.nodeType === 1 &&
                _.push({ element: C, left: C.scrollLeft, top: C.scrollTop });
            for (
              typeof y.focus == "function" && y.focus(), y = 0;
              y < _.length;
              y++
            ) {
              var V = _[y];
              (V.element.scrollLeft = V.left), (V.element.scrollTop = V.top);
            }
          }
          (Bs = !!br), (Sr = br = null);
        } finally {
          (St = s), (Z.p = i), (R.T = n);
        }
      }
      (t.current = e), (Jt = 2);
    }
  }
  function ym() {
    if (Jt === 2) {
      Jt = 0;
      var t = Hn,
        e = ti,
        n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        (n = R.T), (R.T = null);
        var i = Z.p;
        Z.p = 2;
        var s = St;
        St |= 4;
        try {
          kh(t, e.alternate, e);
        } finally {
          (St = s), (Z.p = i), (R.T = n);
        }
      }
      Jt = 3;
    }
  }
  function gm() {
    if (Jt === 4 || Jt === 3) {
      (Jt = 0), zg();
      var t = Hn,
        e = ti,
        n = bn,
        i = am;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Jt = 5)
        : ((Jt = 0), (ti = Hn = null), vm(t, t.pendingLanes));
      var s = t.pendingLanes;
      if (
        (s === 0 && (Ln = null),
        No(n),
        (e = e.stateNode),
        Se && typeof Se.onCommitFiberRoot == "function")
      )
        try {
          Se.onCommitFiberRoot(vi, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (i !== null) {
        (e = R.T), (s = Z.p), (Z.p = 2), (R.T = null);
        try {
          for (var r = t.onRecoverableError, f = 0; f < i.length; f++) {
            var y = i[f];
            r(y.value, { componentStack: y.stack });
          }
        } finally {
          (R.T = e), (Z.p = s);
        }
      }
      (bn & 3) !== 0 && Ms(),
        $e(t),
        (s = t.pendingLanes),
        (n & 261930) !== 0 && (s & 42) !== 0
          ? t === or
            ? Ii++
            : ((Ii = 0), (or = t))
          : (Ii = 0),
        tl(0);
    }
  }
  function vm(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), Vi(e)));
  }
  function Ms() {
    return pm(), ym(), gm(), xm();
  }
  function xm() {
    if (Jt !== 5) return !1;
    var t = Hn,
      e = lr;
    lr = 0;
    var n = No(bn),
      i = R.T,
      s = Z.p;
    try {
      (Z.p = 32 > n ? 32 : n), (R.T = null), (n = sr), (sr = null);
      var r = Hn,
        f = bn;
      if (((Jt = 0), (ti = Hn = null), (bn = 0), (St & 6) !== 0))
        throw Error(o(331));
      var y = St;
      if (
        ((St |= 4),
        tm(r.current),
        Ph(r, r.current, f, n),
        (St = y),
        tl(0, !1),
        Se && typeof Se.onPostCommitFiberRoot == "function")
      )
        try {
          Se.onPostCommitFiberRoot(vi, r);
        } catch {}
      return !0;
    } finally {
      (Z.p = s), (R.T = i), vm(t, e);
    }
  }
  function bm(t, e, n) {
    (e = Ve(n, e)),
      (e = Hu(t.stateNode, e, 2)),
      (t = Rn(t, e, 2)),
      t !== null && (bi(t, 2), $e(t));
  }
  function Et(t, e, n) {
    if (t.tag === 3) bm(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          bm(e, t, n);
          break;
        } else if (e.tag === 1) {
          var i = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof i.componentDidCatch == "function" &&
              (Ln === null || !Ln.has(i)))
          ) {
            (t = Ve(n, t)),
              (n = Sh(2)),
              (i = Rn(e, n, 2)),
              i !== null && (Th(n, i, e, t), bi(i, 2), $e(i));
            break;
          }
        }
        e = e.return;
      }
  }
  function cr(t, e, n) {
    var i = t.pingCache;
    if (i === null) {
      i = t.pingCache = new n1();
      var s = new Set();
      i.set(e, s);
    } else (s = i.get(e)), s === void 0 && ((s = new Set()), i.set(e, s));
    s.has(n) ||
      ((nr = !0), s.add(n), (t = o1.bind(null, t, e, n)), e.then(t, t));
  }
  function o1(t, e, n) {
    var i = t.pingCache;
    i !== null && i.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      wt === t &&
        (ht & n) === n &&
        (Bt === 4 || (Bt === 3 && (ht & 62914560) === ht && 300 > be() - xs)
          ? (St & 2) === 0 && ei(t, 0)
          : (ar |= n),
        Ia === ht && (Ia = 0)),
      $e(t);
  }
  function Sm(t, e) {
    e === 0 && (e = pf()), (t = la(t, e)), t !== null && (bi(t, e), $e(t));
  }
  function u1(t) {
    var e = t.memoizedState,
      n = 0;
    e !== null && (n = e.retryLane), Sm(t, n);
  }
  function r1(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var i = t.stateNode,
          s = t.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        i = t.stateNode;
        break;
      case 22:
        i = t.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    i !== null && i.delete(e), Sm(t, n);
  }
  function c1(t, e) {
    return Ao(t, e);
  }
  var Ds = null,
    ai = null,
    fr = !1,
    Ns = !1,
    dr = !1,
    qn = 0;
  function $e(t) {
    t !== ai &&
      t.next === null &&
      (ai === null ? (Ds = ai = t) : (ai = ai.next = t)),
      (Ns = !0),
      fr || ((fr = !0), d1());
  }
  function tl(t, e) {
    if (!dr && Ns) {
      dr = !0;
      do
        for (var n = !1, i = Ds; i !== null; ) {
          if (t !== 0) {
            var s = i.pendingLanes;
            if (s === 0) var r = 0;
            else {
              var f = i.suspendedLanes,
                y = i.pingedLanes;
              (r = (1 << (31 - Te(42 | t) + 1)) - 1),
                (r &= s & ~(f & ~y)),
                (r = r & 201326741 ? (r & 201326741) | 1 : r ? r | 2 : 0);
            }
            r !== 0 && ((n = !0), Mm(i, r));
          } else
            (r = ht),
              (r = Cl(
                i,
                i === wt ? r : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== -1
              )),
              (r & 3) === 0 || xi(i, r) || ((n = !0), Mm(i, r));
          i = i.next;
        }
      while (n);
      dr = !1;
    }
  }
  function f1() {
    Tm();
  }
  function Tm() {
    Ns = fr = !1;
    var t = 0;
    qn !== 0 && T1() && (t = qn);
    for (var e = be(), n = null, i = Ds; i !== null; ) {
      var s = i.next,
        r = Am(i, e);
      r === 0
        ? ((i.next = null),
          n === null ? (Ds = s) : (n.next = s),
          s === null && (ai = n))
        : ((n = i), (t !== 0 || (r & 3) !== 0) && (Ns = !0)),
        (i = s);
    }
    (Jt !== 0 && Jt !== 5) || tl(t), qn !== 0 && (qn = 0);
  }
  function Am(t, e) {
    for (
      var n = t.suspendedLanes,
        i = t.pingedLanes,
        s = t.expirationTimes,
        r = t.pendingLanes & -62914561;
      0 < r;

    ) {
      var f = 31 - Te(r),
        y = 1 << f,
        S = s[f];
      S === -1
        ? ((y & n) === 0 || (y & i) !== 0) && (s[f] = Lg(y, e))
        : S <= e && (t.expiredLanes |= y),
        (r &= ~y);
    }
    if (
      ((e = wt),
      (n = ht),
      (n = Cl(
        t,
        t === e ? n : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      (i = t.callbackNode),
      n === 0 ||
        (t === e && (At === 2 || At === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        i !== null && i !== null && Eo(i),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((n & 3) === 0 || xi(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((i !== null && Eo(i), No(n))) {
        case 2:
        case 8:
          n = hf;
          break;
        case 32:
          n = Nl;
          break;
        case 268435456:
          n = mf;
          break;
        default:
          n = Nl;
      }
      return (
        (i = Em.bind(null, t)),
        (n = Ao(n, i)),
        (t.callbackPriority = e),
        (t.callbackNode = n),
        e
      );
    }
    return (
      i !== null && i !== null && Eo(i),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Em(t, e) {
    if (Jt !== 0 && Jt !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var n = t.callbackNode;
    if (Ms() && t.callbackNode !== n) return null;
    var i = ht;
    return (
      (i = Cl(
        t,
        t === wt ? i : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      i === 0
        ? null
        : (lm(t, i, e),
          Am(t, be()),
          t.callbackNode != null && t.callbackNode === n
            ? Em.bind(null, t)
            : null)
    );
  }
  function Mm(t, e) {
    if (Ms()) return null;
    lm(t, e, !0);
  }
  function d1() {
    E1(function () {
      (St & 6) !== 0 ? Ao(df, f1) : Tm();
    });
  }
  function hr() {
    if (qn === 0) {
      var t = Ga;
      t === 0 && ((t = wl), (wl <<= 1), (wl & 261888) === 0 && (wl = 256)),
        (qn = t);
    }
    return qn;
  }
  function Dm(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : _l("" + t);
  }
  function Nm(t, e) {
    var n = e.ownerDocument.createElement("input");
    return (
      (n.name = e.name),
      (n.value = e.value),
      t.id && n.setAttribute("form", t.id),
      e.parentNode.insertBefore(n, e),
      (t = new FormData(t)),
      n.parentNode.removeChild(n),
      t
    );
  }
  function h1(t, e, n, i, s) {
    if (e === "submit" && n && n.stateNode === s) {
      var r = Dm((s[he] || null).action),
        f = i.submitter;
      f &&
        ((e = (e = f[he] || null)
          ? Dm(e.formAction)
          : f.getAttribute("formAction")),
        e !== null && ((r = e), (f = null)));
      var y = new Hl("action", "action", null, i, s);
      t.push({
        event: y,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (i.defaultPrevented) {
                if (qn !== 0) {
                  var S = f ? Nm(s, f) : new FormData(s);
                  Ou(
                    n,
                    { pending: !0, data: S, method: s.method, action: r },
                    null,
                    S
                  );
                }
              } else
                typeof r == "function" &&
                  (y.preventDefault(),
                  (S = f ? Nm(s, f) : new FormData(s)),
                  Ou(
                    n,
                    { pending: !0, data: S, method: s.method, action: r },
                    r,
                    S
                  ));
            },
            currentTarget: s,
          },
        ],
      });
    }
  }
  for (var mr = 0; mr < Wo.length; mr++) {
    var pr = Wo[mr],
      m1 = pr.toLowerCase(),
      p1 = pr[0].toUpperCase() + pr.slice(1);
    Xe(m1, "on" + p1);
  }
  Xe(id, "onAnimationEnd"),
    Xe(ld, "onAnimationIteration"),
    Xe(sd, "onAnimationStart"),
    Xe("dblclick", "onDoubleClick"),
    Xe("focusin", "onFocus"),
    Xe("focusout", "onBlur"),
    Xe(Cv, "onTransitionRun"),
    Xe(Rv, "onTransitionStart"),
    Xe(Ov, "onTransitionCancel"),
    Xe(od, "onTransitionEnd"),
    wa("onMouseEnter", ["mouseout", "mouseover"]),
    wa("onMouseLeave", ["mouseout", "mouseover"]),
    wa("onPointerEnter", ["pointerout", "pointerover"]),
    wa("onPointerLeave", ["pointerout", "pointerover"]),
    ea(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    ea(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    ea("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    ea(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    ea(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    ea(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var el =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    y1 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(el)
    );
  function wm(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var i = t[n],
        s = i.event;
      i = i.listeners;
      t: {
        var r = void 0;
        if (e)
          for (var f = i.length - 1; 0 <= f; f--) {
            var y = i[f],
              S = y.instance,
              w = y.currentTarget;
            if (((y = y.listener), S !== r && s.isPropagationStopped()))
              break t;
            (r = y), (s.currentTarget = w);
            try {
              r(s);
            } catch (O) {
              Gl(O);
            }
            (s.currentTarget = null), (r = S);
          }
        else
          for (f = 0; f < i.length; f++) {
            if (
              ((y = i[f]),
              (S = y.instance),
              (w = y.currentTarget),
              (y = y.listener),
              S !== r && s.isPropagationStopped())
            )
              break t;
            (r = y), (s.currentTarget = w);
            try {
              r(s);
            } catch (O) {
              Gl(O);
            }
            (s.currentTarget = null), (r = S);
          }
      }
    }
  }
  function dt(t, e) {
    var n = e[wo];
    n === void 0 && (n = e[wo] = new Set());
    var i = t + "__bubble";
    n.has(i) || (jm(e, t, 2, !1), n.add(i));
  }
  function yr(t, e, n) {
    var i = 0;
    e && (i |= 4), jm(n, t, i, e);
  }
  var ws = "_reactListening" + Math.random().toString(36).slice(2);
  function gr(t) {
    if (!t[ws]) {
      (t[ws] = !0),
        Tf.forEach(function (n) {
          n !== "selectionchange" && (y1.has(n) || yr(n, !1, t), yr(n, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[ws] || ((e[ws] = !0), yr("selectionchange", !1, e));
    }
  }
  function jm(t, e, n, i) {
    switch (ip(e)) {
      case 2:
        var s = k1;
        break;
      case 8:
        s = Z1;
        break;
      default:
        s = Rr;
    }
    (n = s.bind(null, e, n, t)),
      (s = void 0),
      !Bo ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (s = !0),
      i
        ? s !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: s })
          : t.addEventListener(e, n, !0)
        : s !== void 0
        ? t.addEventListener(e, n, { passive: s })
        : t.addEventListener(e, n, !1);
  }
  function vr(t, e, n, i, s) {
    var r = i;
    if ((e & 1) === 0 && (e & 2) === 0 && i !== null)
      t: for (;;) {
        if (i === null) return;
        var f = i.tag;
        if (f === 3 || f === 4) {
          var y = i.stateNode.containerInfo;
          if (y === s) break;
          if (f === 4)
            for (f = i.return; f !== null; ) {
              var S = f.tag;
              if ((S === 3 || S === 4) && f.stateNode.containerInfo === s)
                return;
              f = f.return;
            }
          for (; y !== null; ) {
            if (((f = Ma(y)), f === null)) return;
            if (((S = f.tag), S === 5 || S === 6 || S === 26 || S === 27)) {
              i = r = f;
              continue t;
            }
            y = y.parentNode;
          }
        }
        i = i.return;
      }
    Vf(function () {
      var w = r,
        O = _o(n),
        _ = [];
      t: {
        var z = ud.get(t);
        if (z !== void 0) {
          var C = Hl,
            J = t;
          switch (t) {
            case "keypress":
              if (Bl(n) === 0) break t;
            case "keydown":
            case "keyup":
              C = rv;
              break;
            case "focusin":
              (J = "focus"), (C = qo);
              break;
            case "focusout":
              (J = "blur"), (C = qo);
              break;
            case "beforeblur":
            case "afterblur":
              C = qo;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              C = Bf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              C = Pg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              C = dv;
              break;
            case id:
            case ld:
            case sd:
              C = tv;
              break;
            case od:
              C = mv;
              break;
            case "scroll":
            case "scrollend":
              C = Jg;
              break;
            case "wheel":
              C = yv;
              break;
            case "copy":
            case "cut":
            case "paste":
              C = nv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              C = Hf;
              break;
            case "toggle":
            case "beforetoggle":
              C = vv;
          }
          var nt = (e & 4) !== 0,
            Nt = !nt && (t === "scroll" || t === "scrollend"),
            M = nt ? (z !== null ? z + "Capture" : null) : z;
          nt = [];
          for (var A = w, N; A !== null; ) {
            var V = A;
            if (
              ((N = V.stateNode),
              (V = V.tag),
              (V !== 5 && V !== 26 && V !== 27) ||
                N === null ||
                M === null ||
                ((V = Ai(A, M)), V != null && nt.push(nl(A, V, N))),
              Nt)
            )
              break;
            A = A.return;
          }
          0 < nt.length &&
            ((z = new C(z, J, null, n, O)),
            _.push({ event: z, listeners: nt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((z = t === "mouseover" || t === "pointerover"),
            (C = t === "mouseout" || t === "pointerout"),
            z &&
              n !== Vo &&
              (J = n.relatedTarget || n.fromElement) &&
              (Ma(J) || J[Ea]))
          )
            break t;
          if (
            (C || z) &&
            ((z =
              O.window === O
                ? O
                : (z = O.ownerDocument)
                ? z.defaultView || z.parentWindow
                : window),
            C
              ? ((J = n.relatedTarget || n.toElement),
                (C = w),
                (J = J ? Ma(J) : null),
                J !== null &&
                  ((Nt = h(J)),
                  (nt = J.tag),
                  J !== Nt || (nt !== 5 && nt !== 27 && nt !== 6)) &&
                  (J = null))
              : ((C = null), (J = w)),
            C !== J)
          ) {
            if (
              ((nt = Bf),
              (V = "onMouseLeave"),
              (M = "onMouseEnter"),
              (A = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((nt = Hf),
                (V = "onPointerLeave"),
                (M = "onPointerEnter"),
                (A = "pointer")),
              (Nt = C == null ? z : Ti(C)),
              (N = J == null ? z : Ti(J)),
              (z = new nt(V, A + "leave", C, n, O)),
              (z.target = Nt),
              (z.relatedTarget = N),
              (V = null),
              Ma(O) === w &&
                ((nt = new nt(M, A + "enter", J, n, O)),
                (nt.target = N),
                (nt.relatedTarget = Nt),
                (V = nt)),
              (Nt = V),
              C && J)
            )
              e: {
                for (nt = g1, M = C, A = J, N = 0, V = M; V; V = nt(V)) N++;
                V = 0;
                for (var et = A; et; et = nt(et)) V++;
                for (; 0 < N - V; ) (M = nt(M)), N--;
                for (; 0 < V - N; ) (A = nt(A)), V--;
                for (; N--; ) {
                  if (M === A || (A !== null && M === A.alternate)) {
                    nt = M;
                    break e;
                  }
                  (M = nt(M)), (A = nt(A));
                }
                nt = null;
              }
            else nt = null;
            C !== null && zm(_, z, C, nt, !1),
              J !== null && Nt !== null && zm(_, Nt, J, nt, !0);
          }
        }
        t: {
          if (
            ((z = w ? Ti(w) : window),
            (C = z.nodeName && z.nodeName.toLowerCase()),
            C === "select" || (C === "input" && z.type === "file"))
          )
            var xt = Kf;
          else if (Zf(z))
            if (Ff) xt = wv;
            else {
              xt = Dv;
              var $ = Mv;
            }
          else
            (C = z.nodeName),
              !C ||
              C.toLowerCase() !== "input" ||
              (z.type !== "checkbox" && z.type !== "radio")
                ? w && Oo(w.elementType) && (xt = Kf)
                : (xt = Nv);
          if (xt && (xt = xt(t, w))) {
            Qf(_, xt, n, O);
            break t;
          }
          $ && $(t, z, w),
            t === "focusout" &&
              w &&
              z.type === "number" &&
              w.memoizedProps.value != null &&
              Ro(z, "number", z.value);
        }
        switch ((($ = w ? Ti(w) : window), t)) {
          case "focusin":
            (Zf($) || $.contentEditable === "true") &&
              ((Va = $), (Ko = w), (Ci = null));
            break;
          case "focusout":
            Ci = Ko = Va = null;
            break;
          case "mousedown":
            Fo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Fo = !1), nd(_, n, O);
            break;
          case "selectionchange":
            if (zv) break;
          case "keydown":
          case "keyup":
            nd(_, n, O);
        }
        var rt;
        if (Xo)
          t: {
            switch (t) {
              case "compositionstart":
                var mt = "onCompositionStart";
                break t;
              case "compositionend":
                mt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                mt = "onCompositionUpdate";
                break t;
            }
            mt = void 0;
          }
        else
          Oa
            ? Xf(t, n) && (mt = "onCompositionEnd")
            : t === "keydown" &&
              n.keyCode === 229 &&
              (mt = "onCompositionStart");
        mt &&
          (Yf &&
            n.locale !== "ko" &&
            (Oa || mt !== "onCompositionStart"
              ? mt === "onCompositionEnd" && Oa && (rt = _f())
              : ((Mn = O),
                (Lo = "value" in Mn ? Mn.value : Mn.textContent),
                (Oa = !0))),
          ($ = js(w, mt)),
          0 < $.length &&
            ((mt = new Lf(mt, t, null, n, O)),
            _.push({ event: mt, listeners: $ }),
            rt
              ? (mt.data = rt)
              : ((rt = kf(n)), rt !== null && (mt.data = rt)))),
          (rt = bv ? Sv(t, n) : Tv(t, n)) &&
            ((mt = js(w, "onBeforeInput")),
            0 < mt.length &&
              (($ = new Lf("onBeforeInput", "beforeinput", null, n, O)),
              _.push({ event: $, listeners: mt }),
              ($.data = rt))),
          h1(_, t, w, n, O);
      }
      wm(_, e);
    });
  }
  function nl(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function js(t, e) {
    for (var n = e + "Capture", i = []; t !== null; ) {
      var s = t,
        r = s.stateNode;
      if (
        ((s = s.tag),
        (s !== 5 && s !== 26 && s !== 27) ||
          r === null ||
          ((s = Ai(t, n)),
          s != null && i.unshift(nl(t, s, r)),
          (s = Ai(t, e)),
          s != null && i.push(nl(t, s, r))),
        t.tag === 3)
      )
        return i;
      t = t.return;
    }
    return [];
  }
  function g1(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function zm(t, e, n, i, s) {
    for (var r = e._reactName, f = []; n !== null && n !== i; ) {
      var y = n,
        S = y.alternate,
        w = y.stateNode;
      if (((y = y.tag), S !== null && S === i)) break;
      (y !== 5 && y !== 26 && y !== 27) ||
        w === null ||
        ((S = w),
        s
          ? ((w = Ai(n, r)), w != null && f.unshift(nl(n, w, S)))
          : s || ((w = Ai(n, r)), w != null && f.push(nl(n, w, S)))),
        (n = n.return);
    }
    f.length !== 0 && t.push({ event: e, listeners: f });
  }
  var v1 = /\r\n?/g,
    x1 = /\u0000|\uFFFD/g;
  function Cm(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        v1,
        `
`
      )
      .replace(x1, "");
  }
  function Rm(t, e) {
    return (e = Cm(e)), Cm(t) === e;
  }
  function Dt(t, e, n, i, s, r) {
    switch (n) {
      case "children":
        typeof i == "string"
          ? e === "body" || (e === "textarea" && i === "") || za(t, i)
          : (typeof i == "number" || typeof i == "bigint") &&
            e !== "body" &&
            za(t, "" + i);
        break;
      case "className":
        Ol(t, "class", i);
        break;
      case "tabIndex":
        Ol(t, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ol(t, n, i);
        break;
      case "style":
        Rf(t, i, r);
        break;
      case "data":
        if (e !== "object") {
          Ol(t, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "symbol" ||
          typeof i == "boolean"
        ) {
          t.removeAttribute(n);
          break;
        }
        (i = _l("" + i)), t.setAttribute(n, i);
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof r == "function" &&
            (n === "formAction"
              ? (e !== "input" && Dt(t, e, "name", s.name, s, null),
                Dt(t, e, "formEncType", s.formEncType, s, null),
                Dt(t, e, "formMethod", s.formMethod, s, null),
                Dt(t, e, "formTarget", s.formTarget, s, null))
              : (Dt(t, e, "encType", s.encType, s, null),
                Dt(t, e, "method", s.method, s, null),
                Dt(t, e, "target", s.target, s, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          t.removeAttribute(n);
          break;
        }
        (i = _l("" + i)), t.setAttribute(n, i);
        break;
      case "onClick":
        i != null && (t.onclick = ln);
        break;
      case "onScroll":
        i != null && dt("scroll", t);
        break;
      case "onScrollEnd":
        i != null && dt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(o(61));
          if (((n = i.__html), n != null)) {
            if (s.children != null) throw Error(o(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        t.muted = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "boolean" ||
          typeof i == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (n = _l("" + i)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        i != null && typeof i != "function" && typeof i != "symbol"
          ? t.setAttribute(n, "" + i)
          : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        i && typeof i != "function" && typeof i != "symbol"
          ? t.setAttribute(n, "")
          : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        i === !0
          ? t.setAttribute(n, "")
          : i !== !1 &&
            i != null &&
            typeof i != "function" &&
            typeof i != "symbol"
          ? t.setAttribute(n, i)
          : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        !isNaN(i) &&
        1 <= i
          ? t.setAttribute(n, i)
          : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i)
          ? t.removeAttribute(n)
          : t.setAttribute(n, i);
        break;
      case "popover":
        dt("beforetoggle", t), dt("toggle", t), Rl(t, "popover", i);
        break;
      case "xlinkActuate":
        an(t, "http://www.w3.org/1999/xlink", "xlink:actuate", i);
        break;
      case "xlinkArcrole":
        an(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", i);
        break;
      case "xlinkRole":
        an(t, "http://www.w3.org/1999/xlink", "xlink:role", i);
        break;
      case "xlinkShow":
        an(t, "http://www.w3.org/1999/xlink", "xlink:show", i);
        break;
      case "xlinkTitle":
        an(t, "http://www.w3.org/1999/xlink", "xlink:title", i);
        break;
      case "xlinkType":
        an(t, "http://www.w3.org/1999/xlink", "xlink:type", i);
        break;
      case "xmlBase":
        an(t, "http://www.w3.org/XML/1998/namespace", "xml:base", i);
        break;
      case "xmlLang":
        an(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", i);
        break;
      case "xmlSpace":
        an(t, "http://www.w3.org/XML/1998/namespace", "xml:space", i);
        break;
      case "is":
        Rl(t, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = Kg.get(n) || n), Rl(t, n, i));
    }
  }
  function xr(t, e, n, i, s, r) {
    switch (n) {
      case "style":
        Rf(t, i, r);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(o(61));
          if (((n = i.__html), n != null)) {
            if (s.children != null) throw Error(o(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof i == "string"
          ? za(t, i)
          : (typeof i == "number" || typeof i == "bigint") && za(t, "" + i);
        break;
      case "onScroll":
        i != null && dt("scroll", t);
        break;
      case "onScrollEnd":
        i != null && dt("scrollend", t);
        break;
      case "onClick":
        i != null && (t.onclick = ln);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Af.hasOwnProperty(n))
          t: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((s = n.endsWith("Capture")),
              (e = n.slice(2, s ? n.length - 7 : void 0)),
              (r = t[he] || null),
              (r = r != null ? r[n] : null),
              typeof r == "function" && t.removeEventListener(e, r, s),
              typeof i == "function")
            ) {
              typeof r != "function" &&
                r !== null &&
                (n in t
                  ? (t[n] = null)
                  : t.hasAttribute(n) && t.removeAttribute(n)),
                t.addEventListener(e, i, s);
              break t;
            }
            n in t
              ? (t[n] = i)
              : i === !0
              ? t.setAttribute(n, "")
              : Rl(t, n, i);
          }
    }
  }
  function le(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        dt("error", t), dt("load", t);
        var i = !1,
          s = !1,
          r;
        for (r in n)
          if (n.hasOwnProperty(r)) {
            var f = n[r];
            if (f != null)
              switch (r) {
                case "src":
                  i = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, e));
                default:
                  Dt(t, e, r, f, n, null);
              }
          }
        s && Dt(t, e, "srcSet", n.srcSet, n, null),
          i && Dt(t, e, "src", n.src, n, null);
        return;
      case "input":
        dt("invalid", t);
        var y = (r = f = s = null),
          S = null,
          w = null;
        for (i in n)
          if (n.hasOwnProperty(i)) {
            var O = n[i];
            if (O != null)
              switch (i) {
                case "name":
                  s = O;
                  break;
                case "type":
                  f = O;
                  break;
                case "checked":
                  S = O;
                  break;
                case "defaultChecked":
                  w = O;
                  break;
                case "value":
                  r = O;
                  break;
                case "defaultValue":
                  y = O;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (O != null) throw Error(o(137, e));
                  break;
                default:
                  Dt(t, e, i, O, n, null);
              }
          }
        wf(t, r, y, S, w, f, s, !1);
        return;
      case "select":
        dt("invalid", t), (i = f = r = null);
        for (s in n)
          if (n.hasOwnProperty(s) && ((y = n[s]), y != null))
            switch (s) {
              case "value":
                r = y;
                break;
              case "defaultValue":
                f = y;
                break;
              case "multiple":
                i = y;
              default:
                Dt(t, e, s, y, n, null);
            }
        (e = r),
          (n = f),
          (t.multiple = !!i),
          e != null ? ja(t, !!i, e, !1) : n != null && ja(t, !!i, n, !0);
        return;
      case "textarea":
        dt("invalid", t), (r = s = i = null);
        for (f in n)
          if (n.hasOwnProperty(f) && ((y = n[f]), y != null))
            switch (f) {
              case "value":
                i = y;
                break;
              case "defaultValue":
                s = y;
                break;
              case "children":
                r = y;
                break;
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(o(91));
                break;
              default:
                Dt(t, e, f, y, n, null);
            }
        zf(t, i, s, r);
        return;
      case "option":
        for (S in n)
          if (n.hasOwnProperty(S) && ((i = n[S]), i != null))
            switch (S) {
              case "selected":
                t.selected =
                  i && typeof i != "function" && typeof i != "symbol";
                break;
              default:
                Dt(t, e, S, i, n, null);
            }
        return;
      case "dialog":
        dt("beforetoggle", t), dt("toggle", t), dt("cancel", t), dt("close", t);
        break;
      case "iframe":
      case "object":
        dt("load", t);
        break;
      case "video":
      case "audio":
        for (i = 0; i < el.length; i++) dt(el[i], t);
        break;
      case "image":
        dt("error", t), dt("load", t);
        break;
      case "details":
        dt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        dt("error", t), dt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (w in n)
          if (n.hasOwnProperty(w) && ((i = n[w]), i != null))
            switch (w) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, e));
              default:
                Dt(t, e, w, i, n, null);
            }
        return;
      default:
        if (Oo(e)) {
          for (O in n)
            n.hasOwnProperty(O) &&
              ((i = n[O]), i !== void 0 && xr(t, e, O, i, n, void 0));
          return;
        }
    }
    for (y in n)
      n.hasOwnProperty(y) && ((i = n[y]), i != null && Dt(t, e, y, i, n, null));
  }
  function b1(t, e, n, i) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null,
          r = null,
          f = null,
          y = null,
          S = null,
          w = null,
          O = null;
        for (C in n) {
          var _ = n[C];
          if (n.hasOwnProperty(C) && _ != null)
            switch (C) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = _;
              default:
                i.hasOwnProperty(C) || Dt(t, e, C, null, i, _);
            }
        }
        for (var z in i) {
          var C = i[z];
          if (((_ = n[z]), i.hasOwnProperty(z) && (C != null || _ != null)))
            switch (z) {
              case "type":
                r = C;
                break;
              case "name":
                s = C;
                break;
              case "checked":
                w = C;
                break;
              case "defaultChecked":
                O = C;
                break;
              case "value":
                f = C;
                break;
              case "defaultValue":
                y = C;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null) throw Error(o(137, e));
                break;
              default:
                C !== _ && Dt(t, e, z, C, i, _);
            }
        }
        Co(t, f, y, S, w, O, r, s);
        return;
      case "select":
        C = f = y = z = null;
        for (r in n)
          if (((S = n[r]), n.hasOwnProperty(r) && S != null))
            switch (r) {
              case "value":
                break;
              case "multiple":
                C = S;
              default:
                i.hasOwnProperty(r) || Dt(t, e, r, null, i, S);
            }
        for (s in i)
          if (
            ((r = i[s]),
            (S = n[s]),
            i.hasOwnProperty(s) && (r != null || S != null))
          )
            switch (s) {
              case "value":
                z = r;
                break;
              case "defaultValue":
                y = r;
                break;
              case "multiple":
                f = r;
              default:
                r !== S && Dt(t, e, s, r, i, S);
            }
        (e = y),
          (n = f),
          (i = C),
          z != null
            ? ja(t, !!n, z, !1)
            : !!i != !!n &&
              (e != null ? ja(t, !!n, e, !0) : ja(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        C = z = null;
        for (y in n)
          if (
            ((s = n[y]),
            n.hasOwnProperty(y) && s != null && !i.hasOwnProperty(y))
          )
            switch (y) {
              case "value":
                break;
              case "children":
                break;
              default:
                Dt(t, e, y, null, i, s);
            }
        for (f in i)
          if (
            ((s = i[f]),
            (r = n[f]),
            i.hasOwnProperty(f) && (s != null || r != null))
          )
            switch (f) {
              case "value":
                z = s;
                break;
              case "defaultValue":
                C = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(o(91));
                break;
              default:
                s !== r && Dt(t, e, f, s, i, r);
            }
        jf(t, z, C);
        return;
      case "option":
        for (var J in n)
          if (
            ((z = n[J]),
            n.hasOwnProperty(J) && z != null && !i.hasOwnProperty(J))
          )
            switch (J) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Dt(t, e, J, null, i, z);
            }
        for (S in i)
          if (
            ((z = i[S]),
            (C = n[S]),
            i.hasOwnProperty(S) && z !== C && (z != null || C != null))
          )
            switch (S) {
              case "selected":
                t.selected =
                  z && typeof z != "function" && typeof z != "symbol";
                break;
              default:
                Dt(t, e, S, z, i, C);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var nt in n)
          (z = n[nt]),
            n.hasOwnProperty(nt) &&
              z != null &&
              !i.hasOwnProperty(nt) &&
              Dt(t, e, nt, null, i, z);
        for (w in i)
          if (
            ((z = i[w]),
            (C = n[w]),
            i.hasOwnProperty(w) && z !== C && (z != null || C != null))
          )
            switch (w) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null) throw Error(o(137, e));
                break;
              default:
                Dt(t, e, w, z, i, C);
            }
        return;
      default:
        if (Oo(e)) {
          for (var Nt in n)
            (z = n[Nt]),
              n.hasOwnProperty(Nt) &&
                z !== void 0 &&
                !i.hasOwnProperty(Nt) &&
                xr(t, e, Nt, void 0, i, z);
          for (O in i)
            (z = i[O]),
              (C = n[O]),
              !i.hasOwnProperty(O) ||
                z === C ||
                (z === void 0 && C === void 0) ||
                xr(t, e, O, z, i, C);
          return;
        }
    }
    for (var M in n)
      (z = n[M]),
        n.hasOwnProperty(M) &&
          z != null &&
          !i.hasOwnProperty(M) &&
          Dt(t, e, M, null, i, z);
    for (_ in i)
      (z = i[_]),
        (C = n[_]),
        !i.hasOwnProperty(_) ||
          z === C ||
          (z == null && C == null) ||
          Dt(t, e, _, z, i, C);
  }
  function Om(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function S1() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var t = 0, e = 0, n = performance.getEntriesByType("resource"), i = 0;
        i < n.length;
        i++
      ) {
        var s = n[i],
          r = s.transferSize,
          f = s.initiatorType,
          y = s.duration;
        if (r && y && Om(f)) {
          for (f = 0, y = s.responseEnd, i += 1; i < n.length; i++) {
            var S = n[i],
              w = S.startTime;
            if (w > y) break;
            var O = S.transferSize,
              _ = S.initiatorType;
            O &&
              Om(_) &&
              ((S = S.responseEnd), (f += O * (S < y ? 1 : (y - w) / (S - w))));
          }
          if ((--i, (e += (8 * (r + f)) / (s.duration / 1e3)), t++, 10 < t))
            break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection &&
      ((t = navigator.connection.downlink), typeof t == "number")
      ? t
      : 5;
  }
  var br = null,
    Sr = null;
  function zs(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Vm(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function _m(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Tr(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Ar = null;
  function T1() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === Ar
        ? !1
        : ((Ar = t), !0)
      : ((Ar = null), !1);
  }
  var Um = typeof setTimeout == "function" ? setTimeout : void 0,
    A1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Bm = typeof Promise == "function" ? Promise : void 0,
    E1 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Bm < "u"
        ? function (t) {
            return Bm.resolve(null).then(t).catch(M1);
          }
        : Um;
  function M1(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Gn(t) {
    return t === "head";
  }
  function Lm(t, e) {
    var n = e,
      i = 0;
    do {
      var s = n.nextSibling;
      if ((t.removeChild(n), s && s.nodeType === 8))
        if (((n = s.data), n === "/$" || n === "/&")) {
          if (i === 0) {
            t.removeChild(s), oi(e);
            return;
          }
          i--;
        } else if (
          n === "$" ||
          n === "$?" ||
          n === "$~" ||
          n === "$!" ||
          n === "&"
        )
          i++;
        else if (n === "html") al(t.ownerDocument.documentElement);
        else if (n === "head") {
          (n = t.ownerDocument.head), al(n);
          for (var r = n.firstChild; r; ) {
            var f = r.nextSibling,
              y = r.nodeName;
            r[Si] ||
              y === "SCRIPT" ||
              y === "STYLE" ||
              (y === "LINK" && r.rel.toLowerCase() === "stylesheet") ||
              n.removeChild(r),
              (r = f);
          }
        } else n === "body" && al(t.ownerDocument.body);
      n = s;
    } while (n);
    oi(e);
  }
  function Hm(t, e) {
    var n = t;
    t = 0;
    do {
      var i = n.nextSibling;
      if (
        (n.nodeType === 1
          ? e
            ? ((n._stashedDisplay = n.style.display),
              (n.style.display = "none"))
            : ((n.style.display = n._stashedDisplay || ""),
              n.getAttribute("style") === "" && n.removeAttribute("style"))
          : n.nodeType === 3 &&
            (e
              ? ((n._stashedText = n.nodeValue), (n.nodeValue = ""))
              : (n.nodeValue = n._stashedText || "")),
        i && i.nodeType === 8)
      )
        if (((n = i.data), n === "/$")) {
          if (t === 0) break;
          t--;
        } else (n !== "$" && n !== "$?" && n !== "$~" && n !== "$!") || t++;
      n = i;
    } while (n);
  }
  function Er(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (((e = e.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Er(n), jo(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function D1(t, e, n, i) {
    for (; t.nodeType === 1; ) {
      var s = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!i && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (i) {
        if (!t[Si])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((r = t.getAttribute("rel")),
                r === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                r !== s.rel ||
                t.getAttribute("href") !==
                  (s.href == null || s.href === "" ? null : s.href) ||
                t.getAttribute("crossorigin") !==
                  (s.crossOrigin == null ? null : s.crossOrigin) ||
                t.getAttribute("title") !== (s.title == null ? null : s.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((r = t.getAttribute("src")),
                (r !== (s.src == null ? null : s.src) ||
                  t.getAttribute("type") !== (s.type == null ? null : s.type) ||
                  t.getAttribute("crossorigin") !==
                    (s.crossOrigin == null ? null : s.crossOrigin)) &&
                  r &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var r = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && t.getAttribute("name") === r) return t;
      } else return t;
      if (((t = He(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function N1(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !n) ||
        ((t = He(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Ym(t, e) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !e) ||
        ((t = He(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Mr(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Dr(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState !== "loading")
    );
  }
  function w1(t, e) {
    var n = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || n.readyState !== "loading") e();
    else {
      var i = function () {
        e(), n.removeEventListener("DOMContentLoaded", i);
      };
      n.addEventListener("DOMContentLoaded", i), (t._reactRetry = i);
    }
  }
  function He(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" ||
            e === "$!" ||
            e === "$?" ||
            e === "$~" ||
            e === "&" ||
            e === "F!" ||
            e === "F")
        )
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var Nr = null;
  function qm(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0) return He(t.nextSibling);
          e--;
        } else
          (n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&") ||
            e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Gm(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (e === 0) return t;
          e--;
        } else (n !== "/$" && n !== "/&") || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Xm(t, e, n) {
    switch (((e = zs(n)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(o(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(o(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(o(454));
        return t;
      default:
        throw Error(o(451));
    }
  }
  function al(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    jo(t);
  }
  var Ye = new Map(),
    km = new Set();
  function Cs(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
      ? t
      : t.ownerDocument;
  }
  var Sn = Z.d;
  Z.d = { f: j1, r: z1, D: C1, C: R1, L: O1, m: V1, X: U1, S: _1, M: B1 };
  function j1() {
    var t = Sn.f(),
      e = Ts();
    return t || e;
  }
  function z1(t) {
    var e = Da(t);
    e !== null && e.tag === 5 && e.type === "form" ? oh(e) : Sn.r(t);
  }
  var ii = typeof document > "u" ? null : document;
  function Zm(t, e, n) {
    var i = ii;
    if (i && typeof e == "string" && e) {
      var s = Re(e);
      (s = 'link[rel="' + t + '"][href="' + s + '"]'),
        typeof n == "string" && (s += '[crossorigin="' + n + '"]'),
        km.has(s) ||
          (km.add(s),
          (t = { rel: t, crossOrigin: n, href: e }),
          i.querySelector(s) === null &&
            ((e = i.createElement("link")),
            le(e, "link", t),
            Pt(e),
            i.head.appendChild(e)));
    }
  }
  function C1(t) {
    Sn.D(t), Zm("dns-prefetch", t, null);
  }
  function R1(t, e) {
    Sn.C(t, e), Zm("preconnect", t, e);
  }
  function O1(t, e, n) {
    Sn.L(t, e, n);
    var i = ii;
    if (i && t && e) {
      var s = 'link[rel="preload"][as="' + Re(e) + '"]';
      e === "image" && n && n.imageSrcSet
        ? ((s += '[imagesrcset="' + Re(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (s += '[imagesizes="' + Re(n.imageSizes) + '"]'))
        : (s += '[href="' + Re(t) + '"]');
      var r = s;
      switch (e) {
        case "style":
          r = li(t);
          break;
        case "script":
          r = si(t);
      }
      Ye.has(r) ||
        ((t = b(
          {
            rel: "preload",
            href: e === "image" && n && n.imageSrcSet ? void 0 : t,
            as: e,
          },
          n
        )),
        Ye.set(r, t),
        i.querySelector(s) !== null ||
          (e === "style" && i.querySelector(il(r))) ||
          (e === "script" && i.querySelector(ll(r))) ||
          ((e = i.createElement("link")),
          le(e, "link", t),
          Pt(e),
          i.head.appendChild(e)));
    }
  }
  function V1(t, e) {
    Sn.m(t, e);
    var n = ii;
    if (n && t) {
      var i = e && typeof e.as == "string" ? e.as : "script",
        s =
          'link[rel="modulepreload"][as="' + Re(i) + '"][href="' + Re(t) + '"]',
        r = s;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = si(t);
      }
      if (
        !Ye.has(r) &&
        ((t = b({ rel: "modulepreload", href: t }, e)),
        Ye.set(r, t),
        n.querySelector(s) === null)
      ) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(ll(r))) return;
        }
        (i = n.createElement("link")),
          le(i, "link", t),
          Pt(i),
          n.head.appendChild(i);
      }
    }
  }
  function _1(t, e, n) {
    Sn.S(t, e, n);
    var i = ii;
    if (i && t) {
      var s = Na(i).hoistableStyles,
        r = li(t);
      e = e || "default";
      var f = s.get(r);
      if (!f) {
        var y = { loading: 0, preload: null };
        if ((f = i.querySelector(il(r)))) y.loading = 5;
        else {
          (t = b({ rel: "stylesheet", href: t, "data-precedence": e }, n)),
            (n = Ye.get(r)) && wr(t, n);
          var S = (f = i.createElement("link"));
          Pt(S),
            le(S, "link", t),
            (S._p = new Promise(function (w, O) {
              (S.onload = w), (S.onerror = O);
            })),
            S.addEventListener("load", function () {
              y.loading |= 1;
            }),
            S.addEventListener("error", function () {
              y.loading |= 2;
            }),
            (y.loading |= 4),
            Rs(f, e, i);
        }
        (f = { type: "stylesheet", instance: f, count: 1, state: y }),
          s.set(r, f);
      }
    }
  }
  function U1(t, e) {
    Sn.X(t, e);
    var n = ii;
    if (n && t) {
      var i = Na(n).hoistableScripts,
        s = si(t),
        r = i.get(s);
      r ||
        ((r = n.querySelector(ll(s))),
        r ||
          ((t = b({ src: t, async: !0 }, e)),
          (e = Ye.get(s)) && jr(t, e),
          (r = n.createElement("script")),
          Pt(r),
          le(r, "link", t),
          n.head.appendChild(r)),
        (r = { type: "script", instance: r, count: 1, state: null }),
        i.set(s, r));
    }
  }
  function B1(t, e) {
    Sn.M(t, e);
    var n = ii;
    if (n && t) {
      var i = Na(n).hoistableScripts,
        s = si(t),
        r = i.get(s);
      r ||
        ((r = n.querySelector(ll(s))),
        r ||
          ((t = b({ src: t, async: !0, type: "module" }, e)),
          (e = Ye.get(s)) && jr(t, e),
          (r = n.createElement("script")),
          Pt(r),
          le(r, "link", t),
          n.head.appendChild(r)),
        (r = { type: "script", instance: r, count: 1, state: null }),
        i.set(s, r));
    }
  }
  function Qm(t, e, n, i) {
    var s = (s = ct.current) ? Cs(s) : null;
    if (!s) throw Error(o(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((e = li(n.href)),
            (n = Na(s).hoistableStyles),
            (i = n.get(e)),
            i ||
              ((i = { type: "style", instance: null, count: 0, state: null }),
              n.set(e, i)),
            i)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          t = li(n.href);
          var r = Na(s).hoistableStyles,
            f = r.get(t);
          if (
            (f ||
              ((s = s.ownerDocument || s),
              (f = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              r.set(t, f),
              (r = s.querySelector(il(t))) &&
                !r._p &&
                ((f.instance = r), (f.state.loading = 5)),
              Ye.has(t) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                Ye.set(t, n),
                r || L1(s, t, n, f.state))),
            e && i === null)
          )
            throw Error(o(528, ""));
          return f;
        }
        if (e && i !== null) throw Error(o(529, ""));
        return null;
      case "script":
        return (
          (e = n.async),
          (n = n.src),
          typeof n == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = si(n)),
              (n = Na(s).hoistableScripts),
              (i = n.get(e)),
              i ||
                ((i = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(e, i)),
              i)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(o(444, t));
    }
  }
  function li(t) {
    return 'href="' + Re(t) + '"';
  }
  function il(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Km(t) {
    return b({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function L1(t, e, n, i) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (i.loading = 1)
      : ((e = t.createElement("link")),
        (i.preload = e),
        e.addEventListener("load", function () {
          return (i.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (i.loading |= 2);
        }),
        le(e, "link", n),
        Pt(e),
        t.head.appendChild(e));
  }
  function si(t) {
    return '[src="' + Re(t) + '"]';
  }
  function ll(t) {
    return "script[async]" + t;
  }
  function Fm(t, e, n) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var i = t.querySelector('style[data-href~="' + Re(n.href) + '"]');
          if (i) return (e.instance = i), Pt(i), i;
          var s = b({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (i = (t.ownerDocument || t).createElement("style")),
            Pt(i),
            le(i, "style", s),
            Rs(i, n.precedence, t),
            (e.instance = i)
          );
        case "stylesheet":
          s = li(n.href);
          var r = t.querySelector(il(s));
          if (r) return (e.state.loading |= 4), (e.instance = r), Pt(r), r;
          (i = Km(n)),
            (s = Ye.get(s)) && wr(i, s),
            (r = (t.ownerDocument || t).createElement("link")),
            Pt(r);
          var f = r;
          return (
            (f._p = new Promise(function (y, S) {
              (f.onload = y), (f.onerror = S);
            })),
            le(r, "link", i),
            (e.state.loading |= 4),
            Rs(r, n.precedence, t),
            (e.instance = r)
          );
        case "script":
          return (
            (r = si(n.src)),
            (s = t.querySelector(ll(r)))
              ? ((e.instance = s), Pt(s), s)
              : ((i = n),
                (s = Ye.get(r)) && ((i = b({}, n)), jr(i, s)),
                (t = t.ownerDocument || t),
                (s = t.createElement("script")),
                Pt(s),
                le(s, "link", i),
                t.head.appendChild(s),
                (e.instance = s))
          );
        case "void":
          return null;
        default:
          throw Error(o(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((i = e.instance), (e.state.loading |= 4), Rs(i, n.precedence, t));
    return e.instance;
  }
  function Rs(t, e, n) {
    for (
      var i = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        s = i.length ? i[i.length - 1] : null,
        r = s,
        f = 0;
      f < i.length;
      f++
    ) {
      var y = i[f];
      if (y.dataset.precedence === e) r = y;
      else if (r !== s) break;
    }
    r
      ? r.parentNode.insertBefore(t, r.nextSibling)
      : ((e = n.nodeType === 9 ? n.head : n), e.insertBefore(t, e.firstChild));
  }
  function wr(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function jr(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var Os = null;
  function Jm(t, e, n) {
    if (Os === null) {
      var i = new Map(),
        s = (Os = new Map());
      s.set(n, i);
    } else (s = Os), (i = s.get(n)), i || ((i = new Map()), s.set(n, i));
    if (i.has(t)) return i;
    for (
      i.set(t, null), n = n.getElementsByTagName(t), s = 0;
      s < n.length;
      s++
    ) {
      var r = n[s];
      if (
        !(
          r[Si] ||
          r[ee] ||
          (t === "link" && r.getAttribute("rel") === "stylesheet")
        ) &&
        r.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var f = r.getAttribute(e) || "";
        f = t + f;
        var y = i.get(f);
        y ? y.push(r) : i.set(f, [r]);
      }
    }
    return i;
  }
  function Wm(t, e, n) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        n,
        e === "title" ? t.querySelector("head > title") : null
      );
  }
  function H1(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled), typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Pm(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Y1(t, e, n, i) {
    if (
      n.type === "stylesheet" &&
      (typeof i.media != "string" || matchMedia(i.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var s = li(i.href),
          r = e.querySelector(il(s));
        if (r) {
          (e = r._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (t.count++, (t = Vs.bind(t)), e.then(t, t)),
            (n.state.loading |= 4),
            (n.instance = r),
            Pt(r);
          return;
        }
        (r = e.ownerDocument || e),
          (i = Km(i)),
          (s = Ye.get(s)) && wr(i, s),
          (r = r.createElement("link")),
          Pt(r);
        var f = r;
        (f._p = new Promise(function (y, S) {
          (f.onload = y), (f.onerror = S);
        })),
          le(r, "link", i),
          (n.instance = r);
      }
      t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(n, e),
        (e = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (t.count++,
          (n = Vs.bind(t)),
          e.addEventListener("load", n),
          e.addEventListener("error", n));
    }
  }
  var zr = 0;
  function q1(t, e) {
    return (
      t.stylesheets && t.count === 0 && Us(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (n) {
            var i = setTimeout(function () {
              if ((t.stylesheets && Us(t, t.stylesheets), t.unsuspend)) {
                var r = t.unsuspend;
                (t.unsuspend = null), r();
              }
            }, 6e4 + e);
            0 < t.imgBytes && zr === 0 && (zr = 62500 * S1());
            var s = setTimeout(function () {
              if (
                ((t.waitingForImages = !1),
                t.count === 0 &&
                  (t.stylesheets && Us(t, t.stylesheets), t.unsuspend))
              ) {
                var r = t.unsuspend;
                (t.unsuspend = null), r();
              }
            }, (t.imgBytes > zr ? 50 : 800) + e);
            return (
              (t.unsuspend = n),
              function () {
                (t.unsuspend = null), clearTimeout(i), clearTimeout(s);
              }
            );
          }
        : null
    );
  }
  function Vs() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Us(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var _s = null;
  function Us(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (_s = new Map()),
        e.forEach(G1, t),
        (_s = null),
        Vs.call(t));
  }
  function G1(t, e) {
    if (!(e.state.loading & 4)) {
      var n = _s.get(t);
      if (n) var i = n.get(null);
      else {
        (n = new Map()), _s.set(t, n);
        for (
          var s = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            r = 0;
          r < s.length;
          r++
        ) {
          var f = s[r];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") &&
            (n.set(f.dataset.precedence, f), (i = f));
        }
        i && n.set(null, i);
      }
      (s = e.instance),
        (f = s.getAttribute("data-precedence")),
        (r = n.get(f) || i),
        r === i && n.set(null, s),
        n.set(f, s),
        this.count++,
        (i = Vs.bind(this)),
        s.addEventListener("load", i),
        s.addEventListener("error", i),
        r
          ? r.parentNode.insertBefore(s, r.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(s, t.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var sl = {
    $$typeof: Y,
    Provider: null,
    Consumer: null,
    _currentValue: F,
    _currentValue2: F,
    _threadCount: 0,
  };
  function X1(t, e, n, i, s, r, f, y, S) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Mo(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Mo(0)),
      (this.hiddenUpdates = Mo(null)),
      (this.identifierPrefix = i),
      (this.onUncaughtError = s),
      (this.onCaughtError = r),
      (this.onRecoverableError = f),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = S),
      (this.incompleteTransitions = new Map());
  }
  function $m(t, e, n, i, s, r, f, y, S, w, O, _) {
    return (
      (t = new X1(t, e, n, f, S, w, O, _, y)),
      (e = 1),
      r === !0 && (e |= 24),
      (r = Ee(3, null, null, e)),
      (t.current = r),
      (r.stateNode = t),
      (e = ru()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (r.memoizedState = { element: i, isDehydrated: n, cache: e }),
      hu(r),
      t
    );
  }
  function Im(t) {
    return t ? ((t = Ba), t) : Ba;
  }
  function tp(t, e, n, i, s, r) {
    (s = Im(s)),
      i.context === null ? (i.context = s) : (i.pendingContext = s),
      (i = Cn(e)),
      (i.payload = { element: n }),
      (r = r === void 0 ? null : r),
      r !== null && (i.callback = r),
      (n = Rn(t, i, e)),
      n !== null && (xe(n, t, e), Li(n, t, e));
  }
  function ep(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function Cr(t, e) {
    ep(t, e), (t = t.alternate) && ep(t, e);
  }
  function np(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = la(t, 67108864);
      e !== null && xe(e, t, 67108864), Cr(t, 67108864);
    }
  }
  function ap(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = je();
      e = Do(e);
      var n = la(t, e);
      n !== null && xe(n, t, e), Cr(t, e);
    }
  }
  var Bs = !0;
  function k1(t, e, n, i) {
    var s = R.T;
    R.T = null;
    var r = Z.p;
    try {
      (Z.p = 2), Rr(t, e, n, i);
    } finally {
      (Z.p = r), (R.T = s);
    }
  }
  function Z1(t, e, n, i) {
    var s = R.T;
    R.T = null;
    var r = Z.p;
    try {
      (Z.p = 8), Rr(t, e, n, i);
    } finally {
      (Z.p = r), (R.T = s);
    }
  }
  function Rr(t, e, n, i) {
    if (Bs) {
      var s = Or(i);
      if (s === null) vr(t, e, i, Ls, n), lp(t, i);
      else if (K1(s, t, e, n, i)) i.stopPropagation();
      else if ((lp(t, i), e & 4 && -1 < Q1.indexOf(t))) {
        for (; s !== null; ) {
          var r = Da(s);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (((r = r.stateNode), r.current.memoizedState.isDehydrated)) {
                  var f = ta(r.pendingLanes);
                  if (f !== 0) {
                    var y = r;
                    for (y.pendingLanes |= 2, y.entangledLanes |= 2; f; ) {
                      var S = 1 << (31 - Te(f));
                      (y.entanglements[1] |= S), (f &= ~S);
                    }
                    $e(r), (St & 6) === 0 && ((bs = be() + 500), tl(0));
                  }
                }
                break;
              case 31:
              case 13:
                (y = la(r, 2)), y !== null && xe(y, r, 2), Ts(), Cr(r, 2);
            }
          if (((r = Or(i)), r === null && vr(t, e, i, Ls, n), r === s)) break;
          s = r;
        }
        s !== null && i.stopPropagation();
      } else vr(t, e, i, null, n);
    }
  }
  function Or(t) {
    return (t = _o(t)), Vr(t);
  }
  var Ls = null;
  function Vr(t) {
    if (((Ls = null), (t = Ma(t)), t !== null)) {
      var e = h(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (((t = d(e)), t !== null)) return t;
          t = null;
        } else if (n === 31) {
          if (((t = m(e)), t !== null)) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return (Ls = t), null;
  }
  function ip(t) {
    switch (t) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Cg()) {
          case df:
            return 2;
          case hf:
            return 8;
          case Nl:
          case Rg:
            return 32;
          case mf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var _r = !1,
    Xn = null,
    kn = null,
    Zn = null,
    ol = new Map(),
    ul = new Map(),
    Qn = [],
    Q1 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function lp(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Xn = null;
        break;
      case "dragenter":
      case "dragleave":
        kn = null;
        break;
      case "mouseover":
      case "mouseout":
        Zn = null;
        break;
      case "pointerover":
      case "pointerout":
        ol.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ul.delete(e.pointerId);
    }
  }
  function rl(t, e, n, i, s, r) {
    return t === null || t.nativeEvent !== r
      ? ((t = {
          blockedOn: e,
          domEventName: n,
          eventSystemFlags: i,
          nativeEvent: r,
          targetContainers: [s],
        }),
        e !== null && ((e = Da(e)), e !== null && np(e)),
        t)
      : ((t.eventSystemFlags |= i),
        (e = t.targetContainers),
        s !== null && e.indexOf(s) === -1 && e.push(s),
        t);
  }
  function K1(t, e, n, i, s) {
    switch (e) {
      case "focusin":
        return (Xn = rl(Xn, t, e, n, i, s)), !0;
      case "dragenter":
        return (kn = rl(kn, t, e, n, i, s)), !0;
      case "mouseover":
        return (Zn = rl(Zn, t, e, n, i, s)), !0;
      case "pointerover":
        var r = s.pointerId;
        return ol.set(r, rl(ol.get(r) || null, t, e, n, i, s)), !0;
      case "gotpointercapture":
        return (
          (r = s.pointerId), ul.set(r, rl(ul.get(r) || null, t, e, n, i, s)), !0
        );
    }
    return !1;
  }
  function sp(t) {
    var e = Ma(t.target);
    if (e !== null) {
      var n = h(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = d(n)), e !== null)) {
            (t.blockedOn = e),
              bf(t.priority, function () {
                ap(n);
              });
            return;
          }
        } else if (e === 31) {
          if (((e = m(n)), e !== null)) {
            (t.blockedOn = e),
              bf(t.priority, function () {
                ap(n);
              });
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Hs(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = Or(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var i = new n.constructor(n.type, n);
        (Vo = i), n.target.dispatchEvent(i), (Vo = null);
      } else return (e = Da(n)), e !== null && np(e), (t.blockedOn = n), !1;
      e.shift();
    }
    return !0;
  }
  function op(t, e, n) {
    Hs(t) && n.delete(e);
  }
  function F1() {
    (_r = !1),
      Xn !== null && Hs(Xn) && (Xn = null),
      kn !== null && Hs(kn) && (kn = null),
      Zn !== null && Hs(Zn) && (Zn = null),
      ol.forEach(op),
      ul.forEach(op);
  }
  function Ys(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      _r ||
        ((_r = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, F1)));
  }
  var qs = null;
  function up(t) {
    qs !== t &&
      ((qs = t),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        qs === t && (qs = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            i = t[e + 1],
            s = t[e + 2];
          if (typeof i != "function") {
            if (Vr(i || n) === null) continue;
            break;
          }
          var r = Da(n);
          r !== null &&
            (t.splice(e, 3),
            (e -= 3),
            Ou(r, { pending: !0, data: s, method: n.method, action: i }, i, s));
        }
      }));
  }
  function oi(t) {
    function e(S) {
      return Ys(S, t);
    }
    Xn !== null && Ys(Xn, t),
      kn !== null && Ys(kn, t),
      Zn !== null && Ys(Zn, t),
      ol.forEach(e),
      ul.forEach(e);
    for (var n = 0; n < Qn.length; n++) {
      var i = Qn[n];
      i.blockedOn === t && (i.blockedOn = null);
    }
    for (; 0 < Qn.length && ((n = Qn[0]), n.blockedOn === null); )
      sp(n), n.blockedOn === null && Qn.shift();
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (i = 0; i < n.length; i += 3) {
        var s = n[i],
          r = n[i + 1],
          f = s[he] || null;
        if (typeof r == "function") f || up(n);
        else if (f) {
          var y = null;
          if (r && r.hasAttribute("formAction")) {
            if (((s = r), (f = r[he] || null))) y = f.formAction;
            else if (Vr(s) !== null) continue;
          } else y = f.action;
          typeof y == "function" ? (n[i + 1] = y) : (n.splice(i, 3), (i -= 3)),
            up(n);
        }
      }
  }
  function rp() {
    function t(r) {
      r.canIntercept &&
        r.info === "react-transition" &&
        r.intercept({
          handler: function () {
            return new Promise(function (f) {
              return (s = f);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function e() {
      s !== null && (s(), (s = null)), i || setTimeout(n, 20);
    }
    function n() {
      if (!i && !navigation.transition) {
        var r = navigation.currentEntry;
        r &&
          r.url != null &&
          navigation.navigate(r.url, {
            state: r.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var i = !1,
        s = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", e),
        navigation.addEventListener("navigateerror", e),
        setTimeout(n, 100),
        function () {
          (i = !0),
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", e),
            navigation.removeEventListener("navigateerror", e),
            s !== null && (s(), (s = null));
        }
      );
    }
  }
  function Ur(t) {
    this._internalRoot = t;
  }
  (Gs.prototype.render = Ur.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(o(409));
      var n = e.current,
        i = je();
      tp(n, i, t, e, null, null);
    }),
    (Gs.prototype.unmount = Ur.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          tp(t.current, 2, null, t, null, null), Ts(), (e[Ea] = null);
        }
      });
  function Gs(t) {
    this._internalRoot = t;
  }
  Gs.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = xf();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Qn.length && e !== 0 && e < Qn[n].priority; n++);
      Qn.splice(n, 0, t), n === 0 && sp(t);
    }
  };
  var cp = l.version;
  if (cp !== "19.2.7") throw Error(o(527, cp, "19.2.7"));
  Z.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(o(188))
        : ((t = Object.keys(t).join(",")), Error(o(268, t)));
    return (
      (t = p(e)),
      (t = t !== null ? x(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var J1 = {
    bundleType: 0,
    version: "19.2.7",
    rendererPackageName: "react-dom",
    currentDispatcherRef: R,
    reconcilerVersion: "19.2.7",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Xs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xs.isDisabled && Xs.supportsFiber)
      try {
        (vi = Xs.inject(J1)), (Se = Xs);
      } catch {}
  }
  return (
    (fl.createRoot = function (t, e) {
      if (!c(t)) throw Error(o(299));
      var n = !1,
        i = "",
        s = gh,
        r = vh,
        f = xh;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (n = !0),
          e.identifierPrefix !== void 0 && (i = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (s = e.onUncaughtError),
          e.onCaughtError !== void 0 && (r = e.onCaughtError),
          e.onRecoverableError !== void 0 && (f = e.onRecoverableError)),
        (e = $m(t, 1, !1, null, null, n, i, null, s, r, f, rp)),
        (t[Ea] = e.current),
        gr(t),
        new Ur(e)
      );
    }),
    (fl.hydrateRoot = function (t, e, n) {
      if (!c(t)) throw Error(o(299));
      var i = !1,
        s = "",
        r = gh,
        f = vh,
        y = xh,
        S = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (i = !0),
          n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (r = n.onUncaughtError),
          n.onCaughtError !== void 0 && (f = n.onCaughtError),
          n.onRecoverableError !== void 0 && (y = n.onRecoverableError),
          n.formState !== void 0 && (S = n.formState)),
        (e = $m(t, 1, !0, e, n ?? null, i, s, S, r, f, y, rp)),
        (e.context = Im(null)),
        (n = e.current),
        (i = je()),
        (i = Do(i)),
        (s = Cn(i)),
        (s.callback = null),
        Rn(n, s, i),
        (n = i),
        (e.current.lanes = n),
        bi(e, n),
        $e(e),
        (t[Ea] = e.current),
        gr(t),
        new Gs(e)
      );
    }),
    (fl.version = "19.2.7"),
    fl
  );
}
var bp;
function lx() {
  if (bp) return Hr.exports;
  bp = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (l) {
        console.error(l);
      }
  }
  return a(), (Hr.exports = ix()), Hr.exports;
}
var sx = lx();
const Ct = {
  ticker: "$MURAD",
  contractAddress: "0xComingSoon",
  telegramUrl: "https://t.me/muradoneth",
  twitterUrl: "https://x.com/muradoneth",
  pumpFunUrl:
    "https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0xComingSoon",
  logoUrl: "./muradlogo.jpg",
};
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ox = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  ux = (a) =>
    a.replace(/^([A-Z])|[\s-_]+(\w)/g, (l, u, o) =>
      o ? o.toUpperCase() : u.toLowerCase()
    ),
  Sp = (a) => {
    const l = ux(a);
    return l.charAt(0).toUpperCase() + l.slice(1);
  },
  L0 = (...a) =>
    a
      .filter((l, u, o) => !!l && l.trim() !== "" && o.indexOf(l) === u)
      .join(" ")
      .trim(),
  rx = (a) => {
    for (const l in a)
      if (l.startsWith("aria-") || l === "role" || l === "title") return !0;
  };
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var cx = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fx = G.forwardRef(
  (
    {
      color: a = "currentColor",
      size: l = 24,
      strokeWidth: u = 2,
      absoluteStrokeWidth: o,
      className: c = "",
      children: h,
      iconNode: d,
      ...m
    },
    g
  ) =>
    G.createElement(
      "svg",
      {
        ref: g,
        ...cx,
        width: l,
        height: l,
        stroke: a,
        strokeWidth: o ? (Number(u) * 24) / Number(l) : u,
        className: L0("lucide", c),
        ...(!h && !rx(m) && { "aria-hidden": "true" }),
        ...m,
      },
      [
        ...d.map(([p, x]) => G.createElement(p, x)),
        ...(Array.isArray(h) ? h : [h]),
      ]
    )
);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _t = (a, l) => {
  const u = G.forwardRef(({ className: o, ...c }, h) =>
    G.createElement(fx, {
      ref: h,
      iconNode: l,
      className: L0(`lucide-${ox(Sp(a))}`, `lucide-${a}`, o),
      ...c,
    })
  );
  return (u.displayName = Sp(a)), u;
};
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dx = [
    ["path", { d: "m16 3 4 4-4 4", key: "1x1c3m" }],
    ["path", { d: "M20 7H4", key: "zbl0bi" }],
    ["path", { d: "m8 21-4-4 4-4", key: "h9nckh" }],
    ["path", { d: "M4 17h16", key: "g4d7ey" }],
  ],
  hx = _t("arrow-right-left", dx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mx = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
  ],
  px = _t("arrow-right", mx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yx = [
    [
      "path",
      {
        d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
        key: "1yiouv",
      },
    ],
    ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
  ],
  gx = _t("award", yx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vx = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
  H0 = _t("check", vx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xx = [
    ["circle", { cx: "8", cy: "8", r: "6", key: "3yglwk" }],
    ["path", { d: "M18.09 10.37A6 6 0 1 1 10.34 18", key: "t5s6rm" }],
    ["path", { d: "M7 6h1v4", key: "1obek4" }],
    ["path", { d: "m16.71 13.88.7.71-2.82 2.82", key: "1rbuyh" }],
  ],
  Y0 = _t("coins", xx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bx = [
    [
      "rect",
      {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2",
        key: "17jyea",
      },
    ],
    [
      "path",
      {
        d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
        key: "zix9uf",
      },
    ],
  ],
  q0 = _t("copy", bx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sx = [
    ["path", { d: "M12 15V3", key: "m9g1x1" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }],
  ],
  Tx = _t("download", Sx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ax = [
    ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
    ["path", { d: "M10 14 21 3", key: "gplh6r" }],
    [
      "path",
      {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
        key: "a6xqqp",
      },
    ],
  ],
  lc = _t("external-link", Ax);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ex = [
    [
      "path",
      {
        d: "M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",
        key: "1slcih",
      },
    ],
  ],
  Oc = _t("flame", Ex);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mx = [
    [
      "path",
      {
        d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
        key: "mvr1a0",
      },
    ],
  ],
  Dx = _t("heart", Mx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nx = [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }],
  ],
  wx = _t("menu", Nx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jx = [
    [
      "path",
      { d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z", key: "7g6ntu" },
    ],
    [
      "path",
      { d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z", key: "ijws7r" },
    ],
    ["path", { d: "M7 21h10", key: "1b0cd5" }],
    ["path", { d: "M12 3v18", key: "108xh3" }],
    ["path", { d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2", key: "3gwbw2" }],
  ],
  zx = _t("scale", jx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cx = [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ],
  Rx = _t("search", Cx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ox = [
    [
      "path",
      {
        d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
        key: "1ffxy3",
      },
    ],
    ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
  ],
  sc = _t("send", Ox);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vx = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
    ["path", { d: "M12 8v4", key: "1got3b" }],
    ["path", { d: "M12 16h.01", key: "1drbdi" }],
  ],
  _x = _t("shield-alert", Vx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ux = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
  ],
  Bx = _t("shield", Ux);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lx = [
    [
      "path",
      {
        d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
        key: "1s2grr",
      },
    ],
    ["path", { d: "M20 2v4", key: "1rf3ol" }],
    ["path", { d: "M22 4h-4", key: "gwowj6" }],
    ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }],
  ],
  Hx = _t("sparkles", Lx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yx = [
    ["path", { d: "M16 7h6v6", key: "box55l" }],
    ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }],
  ],
  G0 = _t("trending-up", Yx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qx = [
    [
      "path",
      {
        d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
        key: "pff0z6",
      },
    ],
  ],
  X0 = _t("twitter", qx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gx = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ],
  Xx = _t("users", Gx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kx = [
    [
      "path",
      {
        d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
        key: "18etb6",
      },
    ],
    ["path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" }],
  ],
  Zx = _t("wallet", kx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qx = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  Kx = _t("x", Qx);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fx = [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db",
      },
    ],
  ],
  Jx = _t("zap", Fx),
  Vc = G.createContext({});
function _c(a) {
  const l = G.useRef(null);
  return l.current === null && (l.current = a()), l.current;
}
const Wx = typeof window < "u",
  Uc = Wx ? G.useLayoutEffect : G.useEffect,
  mo = G.createContext(null);
function Bc(a, l) {
  a.indexOf(l) === -1 && a.push(l);
}
function ao(a, l) {
  const u = a.indexOf(l);
  u > -1 && a.splice(u, 1);
}
const nn = (a, l, u) => (u > l ? l : u < a ? a : u);
let Lc = () => {};
const Wn = {},
  k0 = (a) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a),
  Z0 = (a) => typeof a == "object" && a !== null,
  Q0 = (a) => /^0[^.\s]+$/u.test(a);
function K0(a) {
  let l;
  return () => (l === void 0 && (l = a()), l);
}
const Ge = (a) => a,
  Tl = (...a) => a.reduce((l, u) => (o) => u(l(o))),
  vl = (a, l, u) => {
    const o = l - a;
    return o ? (u - a) / o : 1;
  };
class Hc {
  constructor() {
    this.subscriptions = [];
  }
  add(l) {
    return Bc(this.subscriptions, l), () => ao(this.subscriptions, l);
  }
  notify(l, u, o) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1) this.subscriptions[0](l, u, o);
      else
        for (let h = 0; h < c; h++) {
          const d = this.subscriptions[h];
          d && d(l, u, o);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const ze = (a) => a * 1e3,
  qe = (a) => a / 1e3,
  F0 = (a, l) => (l ? a * (1e3 / l) : 0),
  J0 = (a, l, u) =>
    (((1 - 3 * u + 3 * l) * a + (3 * u - 6 * l)) * a + 3 * l) * a,
  Px = 1e-7,
  $x = 12;
function Ix(a, l, u, o, c) {
  let h,
    d,
    m = 0;
  do (d = l + (u - l) / 2), (h = J0(d, o, c) - a), h > 0 ? (u = d) : (l = d);
  while (Math.abs(h) > Px && ++m < $x);
  return d;
}
function Al(a, l, u, o) {
  if (a === l && u === o) return Ge;
  const c = (h) => Ix(h, 0, 1, a, u);
  return (h) => (h === 0 || h === 1 ? h : J0(c(h), l, o));
}
const W0 = (a) => (l) => l <= 0.5 ? a(2 * l) / 2 : (2 - a(2 * (1 - l))) / 2,
  P0 = (a) => (l) => 1 - a(1 - l),
  $0 = Al(0.33, 1.53, 0.69, 0.99),
  Yc = P0($0),
  I0 = W0(Yc),
  ty = (a) =>
    a >= 1
      ? 1
      : (a *= 2) < 1
      ? 0.5 * Yc(a)
      : 0.5 * (2 - Math.pow(2, -10 * (a - 1))),
  qc = (a) => 1 - Math.sin(Math.acos(a)),
  ey = P0(qc),
  ny = W0(qc),
  tb = Al(0.42, 0, 1, 1),
  eb = Al(0, 0, 0.58, 1),
  ay = Al(0.42, 0, 0.58, 1),
  nb = (a) => Array.isArray(a) && typeof a[0] != "number",
  iy = (a) => Array.isArray(a) && typeof a[0] == "number",
  ab = {
    linear: Ge,
    easeIn: tb,
    easeInOut: ay,
    easeOut: eb,
    circIn: qc,
    circInOut: ny,
    circOut: ey,
    backIn: Yc,
    backInOut: I0,
    backOut: $0,
    anticipate: ty,
  },
  ib = (a) => typeof a == "string",
  Tp = (a) => {
    if (iy(a)) {
      Lc(a.length === 4);
      const [l, u, o, c] = a;
      return Al(l, u, o, c);
    } else if (ib(a)) return ab[a];
    return a;
  },
  ks = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function lb(a) {
  let l = new Set(),
    u = new Set(),
    o = !1,
    c = !1;
  const h = new WeakSet();
  let d = { delta: 0, timestamp: 0, isProcessing: !1 };
  function m(p) {
    h.has(p) && (g.schedule(p), a()), p(d);
  }
  const g = {
    schedule: (p, x = !1, b = !1) => {
      const j = b && o ? l : u;
      return x && h.add(p), j.add(p), p;
    },
    cancel: (p) => {
      u.delete(p), h.delete(p);
    },
    process: (p) => {
      if (((d = p), o)) {
        c = !0;
        return;
      }
      o = !0;
      const x = l;
      (l = u),
        (u = x),
        l.forEach(m),
        l.clear(),
        (o = !1),
        c && ((c = !1), g.process(p));
    },
  };
  return g;
}
const sb = 40;
function ly(a, l) {
  let u = !1,
    o = !0;
  const c = { delta: 0, timestamp: 0, isProcessing: !1 },
    h = () => (u = !0),
    d = ks.reduce((Y, q) => ((Y[q] = lb(h)), Y), {}),
    {
      setup: m,
      read: g,
      resolveKeyframes: p,
      preUpdate: x,
      update: b,
      preRender: T,
      render: j,
      postRender: D,
    } = d,
    U = () => {
      const Y = Wn.useManualTiming,
        q = Y ? c.timestamp : performance.now();
      (u = !1),
        Y ||
          (c.delta = o ? 1e3 / 60 : Math.max(Math.min(q - c.timestamp, sb), 1)),
        (c.timestamp = q),
        (c.isProcessing = !0),
        m.process(c),
        g.process(c),
        p.process(c),
        x.process(c),
        b.process(c),
        T.process(c),
        j.process(c),
        D.process(c),
        (c.isProcessing = !1),
        u && l && ((o = !1), a(U));
    },
    B = () => {
      (u = !0), (o = !0), c.isProcessing || a(U);
    };
  return {
    schedule: ks.reduce((Y, q) => {
      const I = d[q];
      return (
        (Y[q] = (it, k = !1, K = !1) => (u || B(), I.schedule(it, k, K))), Y
      );
    }, {}),
    cancel: (Y) => {
      for (let q = 0; q < ks.length; q++) d[ks[q]].cancel(Y);
    },
    state: c,
    steps: d,
  };
}
const {
  schedule: zt,
  cancel: Pn,
  state: se,
  steps: Xr,
} = ly(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ge, !0);
let Js;
function ob() {
  Js = void 0;
}
const fe = {
    now: () => (
      Js === void 0 &&
        fe.set(
          se.isProcessing || Wn.useManualTiming
            ? se.timestamp
            : performance.now()
        ),
      Js
    ),
    set: (a) => {
      (Js = a), queueMicrotask(ob);
    },
  },
  sy = (a) => (l) => typeof l == "string" && l.startsWith(a),
  oy = sy("--"),
  ub = sy("var(--"),
  Gc = (a) => (ub(a) ? rb.test(a.split("/*")[0].trim()) : !1),
  rb =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Ap(a) {
  return typeof a != "string" ? !1 : a.split("/*")[0].includes("var(--");
}
const mi = {
    test: (a) => typeof a == "number",
    parse: parseFloat,
    transform: (a) => a,
  },
  xl = { ...mi, transform: (a) => nn(0, 1, a) },
  Zs = { ...mi, default: 1 },
  ml = (a) => Math.round(a * 1e5) / 1e5,
  Xc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function cb(a) {
  return a == null;
}
const fb =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  kc = (a, l) => (u) =>
    !!(
      (typeof u == "string" && fb.test(u) && u.startsWith(a)) ||
      (l && !cb(u) && Object.prototype.hasOwnProperty.call(u, l))
    ),
  uy = (a, l, u) => (o) => {
    if (typeof o != "string") return o;
    const [c, h, d, m] = o.match(Xc);
    return {
      [a]: parseFloat(c),
      [l]: parseFloat(h),
      [u]: parseFloat(d),
      alpha: m !== void 0 ? parseFloat(m) : 1,
    };
  },
  db = (a) => nn(0, 255, a),
  kr = { ...mi, transform: (a) => Math.round(db(a)) },
  ba = {
    test: kc("rgb", "red"),
    parse: uy("red", "green", "blue"),
    transform: ({ red: a, green: l, blue: u, alpha: o = 1 }) =>
      "rgba(" +
      kr.transform(a) +
      ", " +
      kr.transform(l) +
      ", " +
      kr.transform(u) +
      ", " +
      ml(xl.transform(o)) +
      ")",
  };
function hb(a) {
  let l = "",
    u = "",
    o = "",
    c = "";
  return (
    a.length > 5
      ? ((l = a.substring(1, 3)),
        (u = a.substring(3, 5)),
        (o = a.substring(5, 7)),
        (c = a.substring(7, 9)))
      : ((l = a.substring(1, 2)),
        (u = a.substring(2, 3)),
        (o = a.substring(3, 4)),
        (c = a.substring(4, 5)),
        (l += l),
        (u += u),
        (o += o),
        (c += c)),
    {
      red: parseInt(l, 16),
      green: parseInt(u, 16),
      blue: parseInt(o, 16),
      alpha: c ? parseInt(c, 16) / 255 : 1,
    }
  );
}
const oc = { test: kc("#"), parse: hb, transform: ba.transform },
  El = (a) => ({
    test: (l) =>
      typeof l == "string" && l.endsWith(a) && l.split(" ").length === 1,
    parse: parseFloat,
    transform: (l) => `${l}${a}`,
  }),
  Tn = El("deg"),
  en = El("%"),
  W = El("px"),
  mb = El("vh"),
  pb = El("vw"),
  Ep = {
    ...en,
    parse: (a) => en.parse(a) / 100,
    transform: (a) => en.transform(a * 100),
  },
  ri = {
    test: kc("hsl", "hue"),
    parse: uy("hue", "saturation", "lightness"),
    transform: ({ hue: a, saturation: l, lightness: u, alpha: o = 1 }) =>
      "hsla(" +
      Math.round(a) +
      ", " +
      en.transform(ml(l)) +
      ", " +
      en.transform(ml(u)) +
      ", " +
      ml(xl.transform(o)) +
      ")",
  },
  Ft = {
    test: (a) => ba.test(a) || oc.test(a) || ri.test(a),
    parse: (a) =>
      ba.test(a) ? ba.parse(a) : ri.test(a) ? ri.parse(a) : oc.parse(a),
    transform: (a) =>
      typeof a == "string"
        ? a
        : a.hasOwnProperty("red")
        ? ba.transform(a)
        : ri.transform(a),
    getAnimatableNone: (a) => {
      const l = Ft.parse(a);
      return (l.alpha = 0), Ft.transform(l);
    },
  },
  yb =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function gb(a) {
  var l, u;
  return (
    isNaN(a) &&
    typeof a == "string" &&
    (((l = a.match(Xc)) == null ? void 0 : l.length) || 0) +
      (((u = a.match(yb)) == null ? void 0 : u.length) || 0) >
      0
  );
}
const ry = "number",
  cy = "color",
  vb = "var",
  xb = "var(",
  Mp = "${}",
  bb =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function di(a) {
  const l = a.toString(),
    u = [],
    o = { color: [], number: [], var: [] },
    c = [];
  let h = 0;
  const m = l
    .replace(
      bb,
      (g) => (
        Ft.test(g)
          ? (o.color.push(h), c.push(cy), u.push(Ft.parse(g)))
          : g.startsWith(xb)
          ? (o.var.push(h), c.push(vb), u.push(g))
          : (o.number.push(h), c.push(ry), u.push(parseFloat(g))),
        ++h,
        Mp
      )
    )
    .split(Mp);
  return { values: u, split: m, indexes: o, types: c };
}
function Sb(a) {
  return di(a).values;
}
function fy({ split: a, types: l }) {
  const u = a.length;
  return (o) => {
    let c = "";
    for (let h = 0; h < u; h++)
      if (((c += a[h]), o[h] !== void 0)) {
        const d = l[h];
        d === ry
          ? (c += ml(o[h]))
          : d === cy
          ? (c += Ft.transform(o[h]))
          : (c += o[h]);
      }
    return c;
  };
}
function Tb(a) {
  return fy(di(a));
}
const Ab = (a) =>
    typeof a == "number" ? 0 : Ft.test(a) ? Ft.getAnimatableNone(a) : a,
  Eb = (a, l) =>
    typeof a == "number"
      ? l != null && l.trim().endsWith("/")
        ? a
        : 0
      : Ab(a);
function Mb(a) {
  const l = di(a);
  return fy(l)(l.values.map((o, c) => Eb(o, l.split[c])));
}
const Fe = {
  test: gb,
  parse: Sb,
  createTransformer: Tb,
  getAnimatableNone: Mb,
};
function Zr(a, l, u) {
  return (
    u < 0 && (u += 1),
    u > 1 && (u -= 1),
    u < 1 / 6
      ? a + (l - a) * 6 * u
      : u < 1 / 2
      ? l
      : u < 2 / 3
      ? a + (l - a) * (2 / 3 - u) * 6
      : a
  );
}
function Db({ hue: a, saturation: l, lightness: u, alpha: o }) {
  (a /= 360), (l /= 100), (u /= 100);
  let c = 0,
    h = 0,
    d = 0;
  if (!l) c = h = d = u;
  else {
    const m = u < 0.5 ? u * (1 + l) : u + l - u * l,
      g = 2 * u - m;
    (c = Zr(g, m, a + 1 / 3)), (h = Zr(g, m, a)), (d = Zr(g, m, a - 1 / 3));
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(h * 255),
    blue: Math.round(d * 255),
    alpha: o,
  };
}
function io(a, l) {
  return (u) => (u > 0 ? l : a);
}
const jt = (a, l, u) => a + (l - a) * u,
  Qr = (a, l, u) => {
    const o = a * a,
      c = u * (l * l - o) + o;
    return c < 0 ? 0 : Math.sqrt(c);
  },
  Nb = [oc, ba, ri],
  wb = (a) => Nb.find((l) => l.test(a));
function Dp(a) {
  const l = wb(a);
  if (!l) return !1;
  let u = l.parse(a);
  return l === ri && (u = Db(u)), u;
}
const Np = (a, l) => {
    const u = Dp(a),
      o = Dp(l);
    if (!u || !o) return io(a, l);
    const c = { ...u };
    return (h) => (
      (c.red = Qr(u.red, o.red, h)),
      (c.green = Qr(u.green, o.green, h)),
      (c.blue = Qr(u.blue, o.blue, h)),
      (c.alpha = jt(u.alpha, o.alpha, h)),
      ba.transform(c)
    );
  },
  uc = new Set(["none", "hidden"]);
function jb(a, l) {
  return uc.has(a) ? (u) => (u <= 0 ? a : l) : (u) => (u >= 1 ? l : a);
}
function zb(a, l) {
  return (u) => jt(a, l, u);
}
function Zc(a) {
  return typeof a == "number"
    ? zb
    : typeof a == "string"
    ? Gc(a)
      ? io
      : Ft.test(a)
      ? Np
      : Ob
    : Array.isArray(a)
    ? dy
    : typeof a == "object"
    ? Ft.test(a)
      ? Np
      : Cb
    : io;
}
function dy(a, l) {
  const u = [...a],
    o = u.length,
    c = a.map((h, d) => Zc(h)(h, l[d]));
  return (h) => {
    for (let d = 0; d < o; d++) u[d] = c[d](h);
    return u;
  };
}
function Cb(a, l) {
  const u = { ...a, ...l },
    o = {};
  for (const c in u)
    a[c] !== void 0 && l[c] !== void 0 && (o[c] = Zc(a[c])(a[c], l[c]));
  return (c) => {
    for (const h in o) u[h] = o[h](c);
    return u;
  };
}
function Rb(a, l) {
  const u = [],
    o = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < l.values.length; c++) {
    const h = l.types[c],
      d = a.indexes[h][o[h]],
      m = a.values[d] ?? 0;
    (u[c] = m), o[h]++;
  }
  return u;
}
const Ob = (a, l) => {
  const u = Fe.createTransformer(l),
    o = di(a),
    c = di(l);
  return o.indexes.var.length === c.indexes.var.length &&
    o.indexes.color.length === c.indexes.color.length &&
    o.indexes.number.length >= c.indexes.number.length
    ? (uc.has(a) && !c.values.length) || (uc.has(l) && !o.values.length)
      ? jb(a, l)
      : Tl(dy(Rb(o, c), c.values), u)
    : io(a, l);
};
function hy(a, l, u) {
  return typeof a == "number" && typeof l == "number" && typeof u == "number"
    ? jt(a, l, u)
    : Zc(a)(a, l);
}
const Vb = (a) => {
    const l = ({ timestamp: u }) => a(u);
    return {
      start: (u = !0) => zt.update(l, u),
      stop: () => Pn(l),
      now: () => (se.isProcessing ? se.timestamp : fe.now()),
    };
  },
  my = (a, l, u = 10) => {
    let o = "";
    const c = Math.max(Math.round(l / u), 2);
    for (let h = 0; h < c; h++)
      o += Math.round(a(h / (c - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${o.substring(0, o.length - 2)})`;
  },
  lo = 2e4;
function Qc(a) {
  let l = 0;
  const u = 50;
  let o = a.next(l);
  for (; !o.done && l < lo; ) (l += u), (o = a.next(l));
  return l >= lo ? 1 / 0 : l;
}
function _b(a, l = 100, u) {
  const o = u({ ...a, keyframes: [0, l] }),
    c = Math.min(Qc(o), lo);
  return {
    type: "keyframes",
    ease: (h) => o.next(c * h).value / l,
    duration: qe(c),
  };
}
const Lt = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: 0.3,
  visualDuration: 0.3,
  restSpeed: { granular: 0.01, default: 2 },
  restDelta: { granular: 0.005, default: 0.5 },
  minDuration: 0.01,
  maxDuration: 10,
  minDamping: 0.05,
  maxDamping: 1,
};
function rc(a, l) {
  return a * Math.sqrt(1 - l * l);
}
const Ub = 12;
function Bb(a, l, u) {
  let o = u;
  for (let c = 1; c < Ub; c++) o = o - a(o) / l(o);
  return o;
}
const Kr = 0.001;
function Lb({
  duration: a = Lt.duration,
  bounce: l = Lt.bounce,
  velocity: u = Lt.velocity,
  mass: o = Lt.mass,
}) {
  let c,
    h,
    d = 1 - l;
  (d = nn(Lt.minDamping, Lt.maxDamping, d)),
    (a = nn(Lt.minDuration, Lt.maxDuration, qe(a))),
    d < 1
      ? ((c = (p) => {
          const x = p * d,
            b = x * a,
            T = x - u,
            j = rc(p, d),
            D = Math.exp(-b);
          return Kr - (T / j) * D;
        }),
        (h = (p) => {
          const b = p * d * a,
            T = b * u + u,
            j = Math.pow(d, 2) * Math.pow(p, 2) * a,
            D = Math.exp(-b),
            U = rc(Math.pow(p, 2), d);
          return ((-c(p) + Kr > 0 ? -1 : 1) * ((T - j) * D)) / U;
        }))
      : ((c = (p) => {
          const x = Math.exp(-p * a),
            b = (p - u) * a + 1;
          return -Kr + x * b;
        }),
        (h = (p) => {
          const x = Math.exp(-p * a),
            b = (u - p) * (a * a);
          return x * b;
        }));
  const m = 5 / a,
    g = Bb(c, h, m);
  if (((a = ze(a)), isNaN(g)))
    return { stiffness: Lt.stiffness, damping: Lt.damping, duration: a };
  {
    const p = Math.pow(g, 2) * o;
    return { stiffness: p, damping: d * 2 * Math.sqrt(o * p), duration: a };
  }
}
const Hb = ["duration", "bounce"],
  Yb = ["stiffness", "damping", "mass"];
function wp(a, l) {
  return l.some((u) => a[u] !== void 0);
}
function qb(a) {
  let l = {
    velocity: Lt.velocity,
    stiffness: Lt.stiffness,
    damping: Lt.damping,
    mass: Lt.mass,
    isResolvedFromDuration: !1,
    ...a,
  };
  if (!wp(a, Yb) && wp(a, Hb))
    if (((l.velocity = 0), a.visualDuration)) {
      const u = a.visualDuration,
        o = (2 * Math.PI) / (u * 1.2),
        c = o * o,
        h = 2 * nn(0.05, 1, 1 - (a.bounce || 0)) * Math.sqrt(c);
      l = { ...l, mass: Lt.mass, stiffness: c, damping: h };
    } else {
      const u = Lb({ ...a, velocity: 0 });
      (l = { ...l, ...u, mass: Lt.mass }), (l.isResolvedFromDuration = !0);
    }
  return l;
}
function so(a = Lt.visualDuration, l = Lt.bounce) {
  const u =
    typeof a != "object"
      ? { visualDuration: a, keyframes: [0, 1], bounce: l }
      : a;
  let { restSpeed: o, restDelta: c } = u;
  const h = u.keyframes[0],
    d = u.keyframes[u.keyframes.length - 1],
    m = { done: !1, value: h },
    {
      stiffness: g,
      damping: p,
      mass: x,
      duration: b,
      velocity: T,
      isResolvedFromDuration: j,
    } = qb({ ...u, velocity: -qe(u.velocity || 0) }),
    D = T || 0,
    U = p / (2 * Math.sqrt(g * x)),
    B = d - h,
    H = qe(Math.sqrt(g / x)),
    X = Math.abs(B) < 5;
  o || (o = X ? Lt.restSpeed.granular : Lt.restSpeed.default),
    c || (c = X ? Lt.restDelta.granular : Lt.restDelta.default);
  let Y, q, I, it, k, K;
  if (U < 1)
    (I = rc(H, U)),
      (it = (D + U * H * B) / I),
      (Y = (tt) => {
        const pt = Math.exp(-U * H * tt);
        return d - pt * (it * Math.sin(I * tt) + B * Math.cos(I * tt));
      }),
      (k = U * H * it + B * I),
      (K = U * H * B - it * I),
      (q = (tt) =>
        Math.exp(-U * H * tt) * (k * Math.sin(I * tt) + K * Math.cos(I * tt)));
  else if (U === 1) {
    Y = (pt) => d - Math.exp(-H * pt) * (B + (D + H * B) * pt);
    const tt = D + H * B;
    q = (pt) => Math.exp(-H * pt) * (H * tt * pt - D);
  } else {
    const tt = H * Math.sqrt(U * U - 1);
    Y = (Xt) => {
      const Ht = Math.exp(-U * H * Xt),
        R = Math.min(tt * Xt, 300);
      return (
        d - (Ht * ((D + U * H * B) * Math.sinh(R) + tt * B * Math.cosh(R))) / tt
      );
    };
    const pt = (D + U * H * B) / tt,
      vt = U * H * pt - B * tt,
      te = U * H * B - pt * tt;
    q = (Xt) => {
      const Ht = Math.exp(-U * H * Xt),
        R = Math.min(tt * Xt, 300);
      return Ht * (vt * Math.sinh(R) + te * Math.cosh(R));
    };
  }
  const at = {
    calculatedDuration: (j && b) || null,
    velocity: (tt) => ze(q(tt)),
    next: (tt) => {
      if (!j && U < 1) {
        const vt = Math.exp(-U * H * tt),
          te = Math.sin(I * tt),
          Xt = Math.cos(I * tt),
          Ht = d - vt * (it * te + B * Xt),
          R = ze(vt * (k * te + K * Xt));
        return (
          (m.done = Math.abs(R) <= o && Math.abs(d - Ht) <= c),
          (m.value = m.done ? d : Ht),
          m
        );
      }
      const pt = Y(tt);
      if (j) m.done = tt >= b;
      else {
        const vt = ze(q(tt));
        m.done = Math.abs(vt) <= o && Math.abs(d - pt) <= c;
      }
      return (m.value = m.done ? d : pt), m;
    },
    toString: () => {
      const tt = Math.min(Qc(at), lo),
        pt = my((vt) => at.next(tt * vt).value, tt, 30);
      return tt + "ms " + pt;
    },
    toTransition: () => {},
  };
  return at;
}
so.applyToOptions = (a) => {
  const l = _b(a, 100, so);
  return (
    (a.ease = l.ease), (a.duration = ze(l.duration)), (a.type = "keyframes"), a
  );
};
const Gb = 5;
function py(a, l, u) {
  const o = Math.max(l - Gb, 0);
  return F0(u - a(o), l - o);
}
function cc({
  keyframes: a,
  velocity: l = 0,
  power: u = 0.8,
  timeConstant: o = 325,
  bounceDamping: c = 10,
  bounceStiffness: h = 500,
  modifyTarget: d,
  min: m,
  max: g,
  restDelta: p = 0.5,
  restSpeed: x,
}) {
  const b = a[0],
    T = { done: !1, value: b },
    j = (K) => (m !== void 0 && K < m) || (g !== void 0 && K > g),
    D = (K) =>
      m === void 0
        ? g
        : g === void 0 || Math.abs(m - K) < Math.abs(g - K)
        ? m
        : g;
  let U = u * l;
  const B = b + U,
    H = d === void 0 ? B : d(B);
  H !== B && (U = H - b);
  const X = (K) => -U * Math.exp(-K / o),
    Y = (K) => H + X(K),
    q = (K) => {
      const at = X(K),
        tt = Y(K);
      (T.done = Math.abs(at) <= p), (T.value = T.done ? H : tt);
    };
  let I, it;
  const k = (K) => {
    j(T.value) &&
      ((I = K),
      (it = so({
        keyframes: [T.value, D(T.value)],
        velocity: py(Y, K, T.value),
        damping: c,
        stiffness: h,
        restDelta: p,
        restSpeed: x,
      })));
  };
  return (
    k(0),
    {
      calculatedDuration: null,
      next: (K) => {
        let at = !1;
        return (
          !it && I === void 0 && ((at = !0), q(K), k(K)),
          I !== void 0 && K >= I ? it.next(K - I) : (!at && q(K), T)
        );
      },
    }
  );
}
function Xb(a, l, u) {
  const o = [],
    c = u || Wn.mix || hy,
    h = a.length - 1;
  for (let d = 0; d < h; d++) {
    let m = c(a[d], a[d + 1]);
    if (l) {
      const g = Array.isArray(l) ? l[d] || Ge : l;
      m = Tl(g, m);
    }
    o.push(m);
  }
  return o;
}
function kb(a, l, { clamp: u = !0, ease: o, mixer: c } = {}) {
  const h = a.length;
  if ((Lc(h === l.length), h === 1)) return () => l[0];
  if (h === 2 && l[0] === l[1]) return () => l[1];
  const d = a[0] === a[1];
  a[0] > a[h - 1] && ((a = [...a].reverse()), (l = [...l].reverse()));
  const m = Xb(l, o, c),
    g = m.length,
    p = (x) => {
      if (d && x < a[0]) return l[0];
      let b = 0;
      if (g > 1) for (; b < a.length - 2 && !(x < a[b + 1]); b++);
      const T = vl(a[b], a[b + 1], x);
      return m[b](T);
    };
  return u ? (x) => p(nn(a[0], a[h - 1], x)) : p;
}
function Zb(a, l) {
  const u = a[a.length - 1];
  for (let o = 1; o <= l; o++) {
    const c = vl(0, l, o);
    a.push(jt(u, 1, c));
  }
}
function Qb(a) {
  const l = [0];
  return Zb(l, a.length - 1), l;
}
function Kb(a, l) {
  return a.map((u) => u * l);
}
function Fb(a, l) {
  return a.map(() => l || ay).splice(0, a.length - 1);
}
function pl({
  duration: a = 300,
  keyframes: l,
  times: u,
  ease: o = "easeInOut",
}) {
  const c = nb(o) ? o.map(Tp) : Tp(o),
    h = { done: !1, value: l[0] },
    d = Kb(u && u.length === l.length ? u : Qb(l), a),
    m = kb(d, l, { ease: Array.isArray(c) ? c : Fb(l, c) });
  return {
    calculatedDuration: a,
    next: (g) => ((h.value = m(g)), (h.done = g >= a), h),
  };
}
const Jb = (a) => a !== null;
function po(a, { repeat: l, repeatType: u = "loop" }, o, c = 1) {
  const h = a.filter(Jb),
    m = c < 0 || (l && u !== "loop" && l % 2 === 1) ? 0 : h.length - 1;
  return !m || o === void 0 ? h[m] : o;
}
const Wb = { decay: cc, inertia: cc, tween: pl, keyframes: pl, spring: so };
function yy(a) {
  typeof a.type == "string" && (a.type = Wb[a.type]);
}
class Kc {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((l) => {
      this.resolve = l;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(l, u) {
    return this.finished.then(l, u);
  }
}
const Pb = (a) => a / 100;
class oo extends Kc {
  constructor(l) {
    super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.delayState = { done: !1, value: void 0 }),
      (this.stop = () => {
        var o, c;
        const { motionValue: u } = this.options;
        u && u.updatedAt !== fe.now() && this.tick(fe.now()),
          (this.isStopped = !0),
          this.state !== "idle" &&
            (this.teardown(),
            (c = (o = this.options).onStop) == null || c.call(o));
      }),
      (this.options = l),
      this.initAnimation(),
      this.play(),
      l.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: l } = this;
    yy(l);
    const {
      type: u = pl,
      repeat: o = 0,
      repeatDelay: c = 0,
      repeatType: h,
      velocity: d = 0,
    } = l;
    let { keyframes: m } = l;
    const g = u || pl;
    g !== pl &&
      typeof m[0] != "number" &&
      ((this.mixKeyframes = Tl(Pb, hy(m[0], m[1]))), (m = [0, 100]));
    const p = g({ ...l, keyframes: m });
    h === "mirror" &&
      (this.mirroredGenerator = g({
        ...l,
        keyframes: [...m].reverse(),
        velocity: -d,
      })),
      p.calculatedDuration === null && (p.calculatedDuration = Qc(p));
    const { calculatedDuration: x } = p;
    (this.calculatedDuration = x),
      (this.resolvedDuration = x + c),
      (this.totalDuration = this.resolvedDuration * (o + 1) - c),
      (this.generator = p);
  }
  updateTime(l) {
    const u = Math.round(l - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = u);
  }
  tick(l, u = !1) {
    const {
      generator: o,
      totalDuration: c,
      mixKeyframes: h,
      mirroredGenerator: d,
      resolvedDuration: m,
      calculatedDuration: g,
    } = this;
    if (this.startTime === null) return o.next(0);
    const {
      delay: p = 0,
      keyframes: x,
      repeat: b,
      repeatType: T,
      repeatDelay: j,
      type: D,
      onUpdate: U,
      finalKeyframe: B,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, l))
      : this.speed < 0 &&
        (this.startTime = Math.min(l - c / this.speed, this.startTime)),
      u ? (this.currentTime = l) : this.updateTime(l);
    const H = this.currentTime - p * (this.playbackSpeed >= 0 ? 1 : -1),
      X = this.playbackSpeed >= 0 ? H < 0 : H > c;
    (this.currentTime = Math.max(H, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c);
    let Y = this.currentTime,
      q = o;
    if (b) {
      const K = Math.min(this.currentTime, c) / m;
      let at = Math.floor(K),
        tt = K % 1;
      !tt && K >= 1 && (tt = 1),
        tt === 1 && at--,
        (at = Math.min(at, b + 1)),
        !!(at % 2) &&
          (T === "reverse"
            ? ((tt = 1 - tt), j && (tt -= j / m))
            : T === "mirror" && (q = d)),
        (Y = nn(0, 1, tt) * m);
    }
    let I;
    X
      ? ((this.delayState.value = x[0]), (I = this.delayState))
      : (I = q.next(Y)),
      h && !X && (I.value = h(I.value));
    let { done: it } = I;
    !X &&
      g !== null &&
      (it =
        this.playbackSpeed >= 0
          ? this.currentTime >= c
          : this.currentTime <= 0);
    const k =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && it));
    return (
      k && D !== cc && (I.value = po(x, this.options, B, this.speed)),
      U && U(I.value),
      k && this.finish(),
      I
    );
  }
  then(l, u) {
    return this.finished.then(l, u);
  }
  get duration() {
    return qe(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + qe(l);
  }
  get time() {
    return qe(this.currentTime);
  }
  set time(l) {
    (l = ze(l)),
      (this.currentTime = l),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = l)
        : this.driver &&
          (this.startTime = this.driver.now() - l / this.playbackSpeed),
      this.driver
        ? this.driver.start(!1)
        : ((this.startTime = 0),
          (this.state = "paused"),
          (this.holdTime = l),
          this.tick(l));
  }
  getGeneratorVelocity() {
    const l = this.currentTime;
    if (l <= 0) return this.options.velocity || 0;
    if (this.generator.velocity) return this.generator.velocity(l);
    const u = this.generator.next(l).value;
    return py((o) => this.generator.next(o).value, l, u);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(l) {
    const u = this.playbackSpeed !== l;
    u && this.driver && this.updateTime(fe.now()),
      (this.playbackSpeed = l),
      u && this.driver && (this.time = qe(this.currentTime));
  }
  play() {
    var c, h;
    if (this.isStopped) return;
    const { driver: l = Vb, startTime: u } = this.options;
    this.driver || (this.driver = l((d) => this.tick(d))),
      (h = (c = this.options).onPlay) == null || h.call(c);
    const o = this.driver.now();
    this.state === "finished"
      ? (this.updateFinished(), (this.startTime = o))
      : this.holdTime !== null
      ? (this.startTime = o - this.holdTime)
      : this.startTime || (this.startTime = u ?? o),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    (this.state = "paused"),
      this.updateTime(fe.now()),
      (this.holdTime = this.currentTime);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    var l, u;
    this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (u = (l = this.options).onComplete) == null || u.call(l);
  }
  cancel() {
    var l, u;
    (this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (u = (l = this.options).onCancel) == null || u.call(l);
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null);
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(l) {
    return (this.startTime = 0), this.tick(l, !0);
  }
  attachTimeline(l) {
    var u;
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      (u = this.driver) == null || u.stop(),
      l.observe(this)
    );
  }
}
function $b(a) {
  for (let l = 1; l < a.length; l++) a[l] ?? (a[l] = a[l - 1]);
}
const Sa = (a) => (a * 180) / Math.PI,
  fc = (a) => {
    const l = Sa(Math.atan2(a[1], a[0]));
    return dc(l);
  },
  Ib = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (a) => (Math.abs(a[0]) + Math.abs(a[3])) / 2,
    rotate: fc,
    rotateZ: fc,
    skewX: (a) => Sa(Math.atan(a[1])),
    skewY: (a) => Sa(Math.atan(a[2])),
    skew: (a) => (Math.abs(a[1]) + Math.abs(a[2])) / 2,
  },
  dc = (a) => ((a = a % 360), a < 0 && (a += 360), a),
  jp = fc,
  zp = (a) => Math.sqrt(a[0] * a[0] + a[1] * a[1]),
  Cp = (a) => Math.sqrt(a[4] * a[4] + a[5] * a[5]),
  tS = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: zp,
    scaleY: Cp,
    scale: (a) => (zp(a) + Cp(a)) / 2,
    rotateX: (a) => dc(Sa(Math.atan2(a[6], a[5]))),
    rotateY: (a) => dc(Sa(Math.atan2(-a[2], a[0]))),
    rotateZ: jp,
    rotate: jp,
    skewX: (a) => Sa(Math.atan(a[4])),
    skewY: (a) => Sa(Math.atan(a[1])),
    skew: (a) => (Math.abs(a[1]) + Math.abs(a[4])) / 2,
  };
function hc(a) {
  return a.includes("scale") ? 1 : 0;
}
function mc(a, l) {
  if (!a || a === "none") return hc(l);
  const u = a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let o, c;
  if (u) (o = tS), (c = u);
  else {
    const m = a.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    (o = Ib), (c = m);
  }
  if (!c) return hc(l);
  const h = o[l],
    d = c[1].split(",").map(nS);
  return typeof h == "function" ? h(d) : d[h];
}
const eS = (a, l) => {
  const { transform: u = "none" } = getComputedStyle(a);
  return mc(u, l);
};
function nS(a) {
  return parseFloat(a.trim());
}
const pi = [
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
  yi = new Set([...pi, "pathRotation"]),
  Rp = (a) => a === mi || a === W,
  aS = new Set(["x", "y", "z"]),
  iS = pi.filter((a) => !aS.has(a));
function lS(a) {
  const l = [];
  return (
    iS.forEach((u) => {
      const o = a.getValue(u);
      o !== void 0 &&
        (l.push([u, o.get()]), o.set(u.startsWith("scale") ? 1 : 0));
    }),
    l
  );
}
const Jn = {
  width: (
    { x: a },
    { paddingLeft: l = "0", paddingRight: u = "0", boxSizing: o }
  ) => {
    const c = a.max - a.min;
    return o === "border-box" ? c : c - parseFloat(l) - parseFloat(u);
  },
  height: (
    { y: a },
    { paddingTop: l = "0", paddingBottom: u = "0", boxSizing: o }
  ) => {
    const c = a.max - a.min;
    return o === "border-box" ? c : c - parseFloat(l) - parseFloat(u);
  },
  top: (a, { top: l }) => parseFloat(l),
  left: (a, { left: l }) => parseFloat(l),
  bottom: ({ y: a }, { top: l }) => parseFloat(l) + (a.max - a.min),
  right: ({ x: a }, { left: l }) => parseFloat(l) + (a.max - a.min),
  x: (a, { transform: l }) => mc(l, "x"),
  y: (a, { transform: l }) => mc(l, "y"),
};
Jn.translateX = Jn.x;
Jn.translateY = Jn.y;
const Ta = new Set();
let pc = !1,
  yc = !1,
  gc = !1;
function gy() {
  if (yc) {
    const a = Array.from(Ta).filter((o) => o.needsMeasurement),
      l = new Set(a.map((o) => o.element)),
      u = new Map();
    l.forEach((o) => {
      const c = lS(o);
      c.length && (u.set(o, c), o.render());
    }),
      a.forEach((o) => o.measureInitialState()),
      l.forEach((o) => {
        o.render();
        const c = u.get(o);
        c &&
          c.forEach(([h, d]) => {
            var m;
            (m = o.getValue(h)) == null || m.set(d);
          });
      }),
      a.forEach((o) => o.measureEndState()),
      a.forEach((o) => {
        o.suspendedScrollY !== void 0 && window.scrollTo(0, o.suspendedScrollY);
      });
  }
  (yc = !1), (pc = !1), Ta.forEach((a) => a.complete(gc)), Ta.clear();
}
function vy() {
  Ta.forEach((a) => {
    a.readKeyframes(), a.needsMeasurement && (yc = !0);
  });
}
function sS() {
  (gc = !0), vy(), gy(), (gc = !1);
}
class Fc {
  constructor(l, u, o, c, h, d = !1) {
    (this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...l]),
      (this.onComplete = u),
      (this.name = o),
      (this.motionValue = c),
      (this.element = h),
      (this.isAsync = d);
  }
  scheduleResolve() {
    (this.state = "scheduled"),
      this.isAsync
        ? (Ta.add(this),
          pc || ((pc = !0), zt.read(vy), zt.resolveKeyframes(gy)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: l,
      name: u,
      element: o,
      motionValue: c,
    } = this;
    if (l[0] === null) {
      const h = c == null ? void 0 : c.get(),
        d = l[l.length - 1];
      if (h !== void 0) l[0] = h;
      else if (o && u) {
        const m = o.readValue(u, d);
        m != null && (l[0] = m);
      }
      l[0] === void 0 && (l[0] = d), c && h === void 0 && c.set(l[0]);
    }
    $b(l);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(l = !1) {
    (this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, l),
      Ta.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Ta.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const oS = (a) => a.startsWith("--");
function xy(a, l, u) {
  oS(l) ? a.style.setProperty(l, u) : (a.style[l] = u);
}
const uS = {};
function by(a, l) {
  const u = K0(a);
  return () => uS[l] ?? u();
}
const rS = by(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
  Sy = by(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  hl = ([a, l, u, o]) => `cubic-bezier(${a}, ${l}, ${u}, ${o})`,
  Op = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: hl([0, 0.65, 0.55, 1]),
    circOut: hl([0.55, 0, 1, 0.45]),
    backIn: hl([0.31, 0.01, 0.66, -0.59]),
    backOut: hl([0.33, 1.53, 0.69, 0.99]),
  };
function Ty(a, l) {
  if (a)
    return typeof a == "function"
      ? Sy()
        ? my(a, l)
        : "ease-out"
      : iy(a)
      ? hl(a)
      : Array.isArray(a)
      ? a.map((u) => Ty(u, l) || Op.easeOut)
      : Op[a];
}
function cS(
  a,
  l,
  u,
  {
    delay: o = 0,
    duration: c = 300,
    repeat: h = 0,
    repeatType: d = "loop",
    ease: m = "easeOut",
    times: g,
  } = {},
  p = void 0
) {
  const x = { [l]: u };
  g && (x.offset = g);
  const b = Ty(m, c);
  Array.isArray(b) && (x.easing = b);
  const T = {
    delay: o,
    duration: c,
    easing: Array.isArray(b) ? "linear" : b,
    fill: "both",
    iterations: h + 1,
    direction: d === "reverse" ? "alternate" : "normal",
  };
  return p && (T.pseudoElement = p), a.animate(x, T);
}
function Ay(a) {
  return typeof a == "function" && "applyToOptions" in a;
}
function fS({ type: a, ...l }) {
  return Ay(a) && Sy()
    ? a.applyToOptions(l)
    : (l.duration ?? (l.duration = 300), l.ease ?? (l.ease = "easeOut"), l);
}
class Ey extends Kc {
  constructor(l) {
    if (
      (super(),
      (this.finishedTime = null),
      (this.isStopped = !1),
      (this.manualStartTime = null),
      !l)
    )
      return;
    const {
      element: u,
      name: o,
      keyframes: c,
      pseudoElement: h,
      allowFlatten: d = !1,
      finalKeyframe: m,
      onComplete: g,
    } = l;
    (this.isPseudoElement = !!h),
      (this.allowFlatten = d),
      (this.options = l),
      Lc(typeof l.type != "string");
    const p = fS(l);
    (this.animation = cS(u, o, c, p, h)),
      p.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !h)) {
          const x = po(c, this.options, m, this.speed);
          this.updateMotionValue && this.updateMotionValue(x),
            xy(u, o, x),
            this.animation.cancel();
        }
        g == null || g(), this.notifyFinished();
      });
  }
  play() {
    this.isStopped ||
      ((this.manualStartTime = null),
      this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var l, u;
    (u = (l = this.animation).finish) == null || u.call(l);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: l } = this;
    l === "idle" ||
      l === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var u, o, c;
    const l = (u = this.options) == null ? void 0 : u.element;
    !this.isPseudoElement &&
      l != null &&
      l.isConnected &&
      ((c = (o = this.animation).commitStyles) == null || c.call(o));
  }
  get duration() {
    var u, o;
    const l =
      ((o =
        (u = this.animation.effect) == null ? void 0 : u.getComputedTiming) ==
      null
        ? void 0
        : o.call(u).duration) || 0;
    return qe(Number(l));
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + qe(l);
  }
  get time() {
    return qe(Number(this.animation.currentTime) || 0);
  }
  set time(l) {
    const u = this.finishedTime !== null;
    (this.manualStartTime = null),
      (this.finishedTime = null),
      (this.animation.currentTime = ze(l)),
      u && this.animation.pause();
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(l) {
    l < 0 && (this.finishedTime = null), (this.animation.playbackRate = l);
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(l) {
    this.manualStartTime = this.animation.startTime = l;
  }
  attachTimeline({ timeline: l, rangeStart: u, rangeEnd: o, observe: c }) {
    var h;
    return (
      this.allowFlatten &&
        ((h = this.animation.effect) == null ||
          h.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      l && rS()
        ? ((this.animation.timeline = l),
          u && (this.animation.rangeStart = u),
          o && (this.animation.rangeEnd = o),
          Ge)
        : c(this)
    );
  }
}
const My = { anticipate: ty, backInOut: I0, circInOut: ny };
function dS(a) {
  return a in My;
}
function hS(a) {
  typeof a.ease == "string" && dS(a.ease) && (a.ease = My[a.ease]);
}
const Fr = 10;
class mS extends Ey {
  constructor(l) {
    hS(l),
      yy(l),
      super(l),
      l.startTime !== void 0 &&
        l.autoplay !== !1 &&
        (this.startTime = l.startTime),
      (this.options = l);
  }
  updateMotionValue(l) {
    const {
      motionValue: u,
      onUpdate: o,
      onComplete: c,
      element: h,
      ...d
    } = this.options;
    if (!u) return;
    if (l !== void 0) {
      u.set(l);
      return;
    }
    const m = new oo({ ...d, autoplay: !1 }),
      g = Math.max(Fr, fe.now() - this.startTime),
      p = nn(0, Fr, g - Fr),
      x = m.sample(g).value,
      { name: b } = this.options;
    h && b && xy(h, b, x),
      u.setWithVelocity(m.sample(Math.max(0, g - p)).value, x, p),
      m.stop();
  }
}
const Vp = (a, l) =>
  l === "zIndex"
    ? !1
    : !!(
        typeof a == "number" ||
        Array.isArray(a) ||
        (typeof a == "string" &&
          (Fe.test(a) || a === "0") &&
          !a.startsWith("url("))
      );
function pS(a) {
  const l = a[0];
  if (a.length === 1) return !0;
  for (let u = 0; u < a.length; u++) if (a[u] !== l) return !0;
}
function yS(a, l, u, o) {
  const c = a[0];
  if (c === null) return !1;
  if (l === "display" || l === "visibility") return !0;
  const h = a[a.length - 1],
    d = Vp(c, l),
    m = Vp(h, l);
  return !d || !m ? !1 : pS(a) || ((u === "spring" || Ay(u)) && o);
}
function vc(a) {
  (a.duration = 0), (a.type = "keyframes");
}
const Dy = new Set(["opacity", "clipPath", "filter", "transform"]),
  gS = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function vS(a) {
  for (let l = 0; l < a.length; l++)
    if (typeof a[l] == "string" && gS.test(a[l])) return !0;
  return !1;
}
const xS = new Set([
    "color",
    "backgroundColor",
    "outlineColor",
    "fill",
    "stroke",
    "borderColor",
    "borderTopColor",
    "borderRightColor",
    "borderBottomColor",
    "borderLeftColor",
  ]),
  bS = K0(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function SS(a) {
  var b;
  const {
    motionValue: l,
    name: u,
    repeatDelay: o,
    repeatType: c,
    damping: h,
    type: d,
    keyframes: m,
  } = a;
  if (
    !(
      ((b = l == null ? void 0 : l.owner) == null
        ? void 0
        : b.current) instanceof HTMLElement
    )
  )
    return !1;
  const { onUpdate: p, transformTemplate: x } = l.owner.getProps();
  return (
    bS() &&
    u &&
    (Dy.has(u) || (xS.has(u) && vS(m))) &&
    (u !== "transform" || !x) &&
    !p &&
    !o &&
    c !== "mirror" &&
    h !== 0 &&
    d !== "inertia"
  );
}
const TS = 40;
class AS extends Kc {
  constructor({
    autoplay: l = !0,
    delay: u = 0,
    type: o = "keyframes",
    repeat: c = 0,
    repeatDelay: h = 0,
    repeatType: d = "loop",
    keyframes: m,
    name: g,
    motionValue: p,
    element: x,
    ...b
  }) {
    var D;
    super(),
      (this.stop = () => {
        var U, B;
        this._animation &&
          (this._animation.stop(),
          (U = this.stopTimeline) == null || U.call(this)),
          (B = this.keyframeResolver) == null || B.cancel();
      }),
      (this.createdAt = fe.now());
    const T = {
        autoplay: l,
        delay: u,
        type: o,
        repeat: c,
        repeatDelay: h,
        repeatType: d,
        name: g,
        motionValue: p,
        element: x,
        ...b,
      },
      j = (x == null ? void 0 : x.KeyframeResolver) || Fc;
    (this.keyframeResolver = new j(
      m,
      (U, B, H) => this.onKeyframesResolved(U, B, T, !H),
      g,
      p,
      x
    )),
      (D = this.keyframeResolver) == null || D.scheduleResolve();
  }
  onKeyframesResolved(l, u, o, c) {
    var H, X;
    this.keyframeResolver = void 0;
    const {
      name: h,
      type: d,
      velocity: m,
      delay: g,
      isHandoff: p,
      onUpdate: x,
    } = o;
    this.resolvedAt = fe.now();
    let b = !0;
    yS(l, h, d, m) ||
      ((b = !1),
      (Wn.instantAnimations || !g) && (x == null || x(po(l, o, u))),
      (l[0] = l[l.length - 1]),
      vc(o),
      (o.repeat = 0));
    const j = {
        startTime: c
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > TS
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: u,
        ...o,
        keyframes: l,
      },
      D = b && !p && SS(j),
      U =
        (X = (H = j.motionValue) == null ? void 0 : H.owner) == null
          ? void 0
          : X.current;
    let B;
    if (D)
      try {
        B = new mS({ ...j, element: U });
      } catch {
        B = new oo(j);
      }
    else B = new oo(j);
    B.finished
      .then(() => {
        this.notifyFinished();
      })
      .catch(Ge),
      this.pendingTimeline &&
        ((this.stopTimeline = B.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = B);
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(l, u) {
    return this.finished.finally(l).then(() => {});
  }
  get animation() {
    var l;
    return (
      this._animation ||
        ((l = this.keyframeResolver) == null || l.resume(), sS()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(l) {
    this.animation.time = l;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(l) {
    this.animation.speed = l;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(l) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(l))
        : (this.pendingTimeline = l),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var l;
    this._animation && this.animation.cancel(),
      (l = this.keyframeResolver) == null || l.cancel();
  }
}
function Ny(a, l, u, o = 0, c = 1) {
  const h = Array.from(a)
      .sort((p, x) => p.sortNodePosition(x))
      .indexOf(l),
    d = a.size,
    m = (d - 1) * o;
  return typeof u == "function" ? u(h, d) : c === 1 ? h * o : m - h * o;
}
const _p = 30,
  ES = (a) => !isNaN(parseFloat(a));
class MS {
  constructor(l, u = {}) {
    (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (o) => {
        var h;
        const c = fe.now();
        if (
          (this.updatedAt !== c && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(o),
          this.current !== this.prev &&
            ((h = this.events.change) == null || h.notify(this.current),
            this.dependents))
        )
          for (const d of this.dependents) d.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(l),
      (this.owner = u.owner);
  }
  setCurrent(l) {
    (this.current = l),
      (this.updatedAt = fe.now()),
      this.canTrackVelocity === null &&
        l !== void 0 &&
        (this.canTrackVelocity = ES(this.current));
  }
  setPrevFrameValue(l = this.current) {
    (this.prevFrameValue = l), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(l) {
    return this.on("change", l);
  }
  on(l, u) {
    this.events[l] || (this.events[l] = new Hc());
    const o = this.events[l].add(u);
    return l === "change"
      ? () => {
          o(),
            zt.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : o;
  }
  clearListeners() {
    for (const l in this.events) this.events[l].clear();
  }
  attach(l, u) {
    (this.passiveEffect = l), (this.stopPassiveEffect = u);
  }
  set(l) {
    this.passiveEffect
      ? this.passiveEffect(l, this.updateAndNotify)
      : this.updateAndNotify(l);
  }
  setWithVelocity(l, u, o) {
    this.set(u),
      (this.prev = void 0),
      (this.prevFrameValue = l),
      (this.prevUpdatedAt = this.updatedAt - o);
  }
  jump(l, u = !0) {
    this.updateAndNotify(l),
      (this.prev = l),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      u && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    var l;
    (l = this.events.change) == null || l.notify(this.current);
  }
  addDependent(l) {
    this.dependents || (this.dependents = new Set()), this.dependents.add(l);
  }
  removeDependent(l) {
    this.dependents && this.dependents.delete(l);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const l = fe.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      l - this.updatedAt > _p
    )
      return 0;
    const u = Math.min(this.updatedAt - this.prevUpdatedAt, _p);
    return F0(parseFloat(this.current) - parseFloat(this.prevFrameValue), u);
  }
  start(l) {
    return (
      this.stop(),
      new Promise((u) => {
        (this.hasAnimated = !0),
          (this.animation = l(u)),
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
    var l, u;
    (l = this.dependents) == null || l.clear(),
      (u = this.events.destroy) == null || u.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function hi(a, l) {
  return new MS(a, l);
}
function wy(a, l) {
  if (a != null && a.inherit && l) {
    const { inherit: u, ...o } = a;
    return { ...l, ...o };
  }
  return a;
}
function Jc(a, l) {
  const u =
    (a == null ? void 0 : a[l]) ?? (a == null ? void 0 : a.default) ?? a;
  return u !== a ? wy(u, a) : u;
}
const DS = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  NS = (a) => ({
    type: "spring",
    stiffness: 550,
    damping: a === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  wS = { type: "keyframes", duration: 0.8 },
  jS = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  zS = (a, { keyframes: l }) =>
    l.length > 2
      ? wS
      : yi.has(a)
      ? a.startsWith("scale")
        ? NS(l[1])
        : DS
      : jS,
  CS = new Set([
    "when",
    "delay",
    "delayChildren",
    "staggerChildren",
    "staggerDirection",
    "repeat",
    "repeatType",
    "repeatDelay",
    "from",
    "elapsed",
  ]);
function RS(a) {
  for (const l in a) if (!CS.has(l)) return !0;
  return !1;
}
const Wc =
    (a, l, u, o = {}, c, h) =>
    (d) => {
      const m = Jc(o, a) || {},
        g = m.delay || o.delay || 0;
      let { elapsed: p = 0 } = o;
      p = p - ze(g);
      const x = {
        keyframes: Array.isArray(u) ? u : [null, u],
        ease: "easeOut",
        velocity: l.getVelocity(),
        ...m,
        delay: -p,
        onUpdate: (T) => {
          l.set(T), m.onUpdate && m.onUpdate(T);
        },
        onComplete: () => {
          d(), m.onComplete && m.onComplete();
        },
        name: a,
        motionValue: l,
        element: h ? void 0 : c,
      };
      RS(m) || Object.assign(x, zS(a, x)),
        x.duration && (x.duration = ze(x.duration)),
        x.repeatDelay && (x.repeatDelay = ze(x.repeatDelay)),
        x.from !== void 0 && (x.keyframes[0] = x.from);
      let b = !1;
      if (
        ((x.type === !1 || (x.duration === 0 && !x.repeatDelay)) &&
          (vc(x), x.delay === 0 && (b = !0)),
        (Wn.instantAnimations ||
          Wn.skipAnimations ||
          (c != null && c.shouldSkipAnimations) ||
          m.skipAnimations) &&
          ((b = !0), vc(x), (x.delay = 0)),
        (x.allowFlatten = !m.type && !m.ease),
        b && !h && l.get() !== void 0)
      ) {
        const T = po(x.keyframes, m);
        if (T !== void 0) {
          zt.update(() => {
            x.onUpdate(T), x.onComplete();
          });
          return;
        }
      }
      return m.isSync ? new oo(x) : new AS(x);
    },
  OS = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function VS(a) {
  const l = OS.exec(a);
  if (!l) return [,];
  const [, u, o, c] = l;
  return [`--${u ?? o}`, c];
}
function jy(a, l, u = 1) {
  const [o, c] = VS(a);
  if (!o) return;
  const h = window.getComputedStyle(l).getPropertyValue(o);
  if (h) {
    const d = h.trim();
    return k0(d) ? parseFloat(d) : d;
  }
  return Gc(c) ? jy(c, l, u + 1) : c;
}
function Up(a) {
  const l = [{}, {}];
  return (
    a == null ||
      a.values.forEach((u, o) => {
        (l[0][o] = u.get()), (l[1][o] = u.getVelocity());
      }),
    l
  );
}
function Pc(a, l, u, o) {
  if (typeof l == "function") {
    const [c, h] = Up(o);
    l = l(u !== void 0 ? u : a.custom, c, h);
  }
  if (
    (typeof l == "string" && (l = a.variants && a.variants[l]),
    typeof l == "function")
  ) {
    const [c, h] = Up(o);
    l = l(u !== void 0 ? u : a.custom, c, h);
  }
  return l;
}
function Aa(a, l, u) {
  const o = a.getProps();
  return Pc(o, l, u !== void 0 ? u : o.custom, a);
}
const zy = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...pi,
  ]),
  xc = (a) => Array.isArray(a);
function _S(a, l, u) {
  a.hasValue(l) ? a.getValue(l).set(u) : a.addValue(l, hi(u));
}
function US(a) {
  return xc(a) ? a[a.length - 1] || 0 : a;
}
function BS(a, l) {
  const u = Aa(a, l);
  let { transitionEnd: o = {}, transition: c = {}, ...h } = u || {};
  h = { ...h, ...o };
  for (const d in h) {
    const m = US(h[d]);
    _S(a, d, m);
  }
}
const oe = (a) => !!(a && a.getVelocity);
function LS(a) {
  return !!(oe(a) && a.add);
}
function bc(a, l) {
  const u = a.getValue("willChange");
  if (LS(u)) return u.add(l);
  if (!u && Wn.WillChange) {
    const o = new Wn.WillChange("auto");
    a.addValue("willChange", o), o.add(l);
  }
}
function $c(a) {
  return a.replace(/([A-Z])/g, (l) => `-${l.toLowerCase()}`);
}
const HS = "framerAppearId",
  Cy = "data-" + $c(HS);
function Ry(a) {
  return a.props[Cy];
}
function YS({ protectedKeys: a, needsAnimating: l }, u) {
  const o = a.hasOwnProperty(u) && l[u] !== !0;
  return (l[u] = !1), o;
}
function Oy(a, l, { delay: u = 0, transitionOverride: o, type: c } = {}) {
  let { transition: h, transitionEnd: d, ...m } = l;
  const g = a.getDefaultTransition();
  h = h ? wy(h, g) : g;
  const p = h == null ? void 0 : h.reduceMotion,
    x = h == null ? void 0 : h.skipAnimations;
  o && (h = o);
  const b = [],
    T = c && a.animationState && a.animationState.getState()[c],
    j = h == null ? void 0 : h.path;
  j && j.animateVisualElement(a, m, h, u, b);
  for (const D in m) {
    const U = a.getValue(D, a.latestValues[D] ?? null),
      B = m[D];
    if (B === void 0 || (T && YS(T, D))) continue;
    const H = { delay: u, ...Jc(h || {}, D) };
    x && (H.skipAnimations = !0);
    const X = U.get();
    if (
      X !== void 0 &&
      !U.isAnimating() &&
      !Array.isArray(B) &&
      B === X &&
      !H.velocity
    ) {
      zt.update(() => U.set(B));
      continue;
    }
    let Y = !1;
    if (window.MotionHandoffAnimation) {
      const it = Ry(a);
      if (it) {
        const k = window.MotionHandoffAnimation(it, D, zt);
        k !== null && ((H.startTime = k), (Y = !0));
      }
    }
    bc(a, D);
    const q = p ?? a.shouldReduceMotion;
    U.start(Wc(D, U, B, q && zy.has(D) ? { type: !1 } : H, a, Y));
    const I = U.animation;
    I && b.push(I);
  }
  if (d) {
    const D = () =>
      zt.update(() => {
        d && BS(a, d);
      });
    b.length ? Promise.all(b).then(D) : D();
  }
  return b;
}
function Sc(a, l, u = {}) {
  var g;
  const o = Aa(
    a,
    l,
    u.type === "exit"
      ? (g = a.presenceContext) == null
        ? void 0
        : g.custom
      : void 0
  );
  let { transition: c = a.getDefaultTransition() || {} } = o || {};
  u.transitionOverride && (c = u.transitionOverride);
  const h = o ? () => Promise.all(Oy(a, o, u)) : () => Promise.resolve(),
    d =
      a.variantChildren && a.variantChildren.size
        ? (p = 0) => {
            const {
              delayChildren: x = 0,
              staggerChildren: b,
              staggerDirection: T,
            } = c;
            return qS(a, l, p, x, b, T, u);
          }
        : () => Promise.resolve(),
    { when: m } = c;
  if (m) {
    const [p, x] = m === "beforeChildren" ? [h, d] : [d, h];
    return p().then(() => x());
  } else return Promise.all([h(), d(u.delay)]);
}
function qS(a, l, u = 0, o = 0, c = 0, h = 1, d) {
  const m = [];
  for (const g of a.variantChildren)
    g.notify("AnimationStart", l),
      m.push(
        Sc(g, l, {
          ...d,
          delay:
            u +
            (typeof o == "function" ? 0 : o) +
            Ny(a.variantChildren, g, o, c, h),
        }).then(() => g.notify("AnimationComplete", l))
      );
  return Promise.all(m);
}
function GS(a, l, u = {}) {
  a.notify("AnimationStart", l);
  let o;
  if (Array.isArray(l)) {
    const c = l.map((h) => Sc(a, h, u));
    o = Promise.all(c);
  } else if (typeof l == "string") o = Sc(a, l, u);
  else {
    const c = typeof l == "function" ? Aa(a, l, u.custom) : l;
    o = Promise.all(Oy(a, c, u));
  }
  return o.then(() => {
    a.notify("AnimationComplete", l);
  });
}
const XS = { test: (a) => a === "auto", parse: (a) => a },
  Vy = (a) => (l) => l.test(a),
  _y = [mi, W, en, Tn, pb, mb, XS],
  Bp = (a) => _y.find(Vy(a));
function kS(a) {
  return typeof a == "number"
    ? a === 0
    : a !== null
    ? a === "none" || a === "0" || Q0(a)
    : !0;
}
const ZS = new Set(["brightness", "contrast", "saturate", "opacity"]);
function QS(a) {
  const [l, u] = a.slice(0, -1).split("(");
  if (l === "drop-shadow") return a;
  const [o] = u.match(Xc) || [];
  if (!o) return a;
  const c = u.replace(o, "");
  let h = ZS.has(l) ? 1 : 0;
  return o !== u && (h *= 100), l + "(" + h + c + ")";
}
const KS = /\b([a-z-]*)\(.*?\)/gu,
  Tc = {
    ...Fe,
    getAnimatableNone: (a) => {
      const l = a.match(KS);
      return l ? l.map(QS).join(" ") : a;
    },
  },
  Ac = {
    ...Fe,
    getAnimatableNone: (a) => {
      const l = Fe.parse(a);
      return Fe.createTransformer(a)(
        l.map((o) =>
          typeof o == "number"
            ? 0
            : typeof o == "object"
            ? { ...o, alpha: 1 }
            : o
        )
      );
    },
  },
  Lp = { ...mi, transform: Math.round },
  FS = {
    rotate: Tn,
    pathRotation: Tn,
    rotateX: Tn,
    rotateY: Tn,
    rotateZ: Tn,
    scale: Zs,
    scaleX: Zs,
    scaleY: Zs,
    scaleZ: Zs,
    skew: Tn,
    skewX: Tn,
    skewY: Tn,
    distance: W,
    translateX: W,
    translateY: W,
    translateZ: W,
    x: W,
    y: W,
    z: W,
    perspective: W,
    transformPerspective: W,
    opacity: xl,
    originX: Ep,
    originY: Ep,
    originZ: W,
  },
  uo = {
    borderWidth: W,
    borderTopWidth: W,
    borderRightWidth: W,
    borderBottomWidth: W,
    borderLeftWidth: W,
    borderRadius: W,
    borderTopLeftRadius: W,
    borderTopRightRadius: W,
    borderBottomRightRadius: W,
    borderBottomLeftRadius: W,
    width: W,
    maxWidth: W,
    height: W,
    maxHeight: W,
    top: W,
    right: W,
    bottom: W,
    left: W,
    inset: W,
    insetBlock: W,
    insetBlockStart: W,
    insetBlockEnd: W,
    insetInline: W,
    insetInlineStart: W,
    insetInlineEnd: W,
    padding: W,
    paddingTop: W,
    paddingRight: W,
    paddingBottom: W,
    paddingLeft: W,
    paddingBlock: W,
    paddingBlockStart: W,
    paddingBlockEnd: W,
    paddingInline: W,
    paddingInlineStart: W,
    paddingInlineEnd: W,
    margin: W,
    marginTop: W,
    marginRight: W,
    marginBottom: W,
    marginLeft: W,
    marginBlock: W,
    marginBlockStart: W,
    marginBlockEnd: W,
    marginInline: W,
    marginInlineStart: W,
    marginInlineEnd: W,
    fontSize: W,
    backgroundPositionX: W,
    backgroundPositionY: W,
    ...FS,
    zIndex: Lp,
    fillOpacity: xl,
    strokeOpacity: xl,
    numOctaves: Lp,
  },
  JS = {
    ...uo,
    color: Ft,
    backgroundColor: Ft,
    outlineColor: Ft,
    fill: Ft,
    stroke: Ft,
    borderColor: Ft,
    borderTopColor: Ft,
    borderRightColor: Ft,
    borderBottomColor: Ft,
    borderLeftColor: Ft,
    filter: Tc,
    WebkitFilter: Tc,
    mask: Ac,
    WebkitMask: Ac,
  },
  Uy = (a) => JS[a],
  WS = new Set([Tc, Ac]);
function By(a, l) {
  let u = Uy(a);
  return (
    WS.has(u) || (u = Fe), u.getAnimatableNone ? u.getAnimatableNone(l) : void 0
  );
}
const PS = new Set(["auto", "none", "0"]);
function $S(a, l, u) {
  let o = 0,
    c;
  for (; o < a.length && !c; ) {
    const h = a[o];
    typeof h == "string" && !PS.has(h) && di(h).values.length && (c = a[o]),
      o++;
  }
  if (c && u) for (const h of l) a[h] = By(u, c);
}
class IS extends Fc {
  constructor(l, u, o, c, h) {
    super(l, u, o, c, h, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, element: u, name: o } = this;
    if (!u || !u.current) return;
    super.readKeyframes();
    for (let x = 0; x < l.length; x++) {
      let b = l[x];
      if (typeof b == "string" && ((b = b.trim()), Gc(b))) {
        const T = jy(b, u.current);
        T !== void 0 && (l[x] = T),
          x === l.length - 1 && (this.finalKeyframe = b);
      }
    }
    if ((this.resolveNoneKeyframes(), !zy.has(o) || l.length !== 2)) return;
    const [c, h] = l,
      d = Bp(c),
      m = Bp(h),
      g = Ap(c),
      p = Ap(h);
    if (g !== p && Jn[o]) {
      this.needsMeasurement = !0;
      return;
    }
    if (d !== m)
      if (Rp(d) && Rp(m))
        for (let x = 0; x < l.length; x++) {
          const b = l[x];
          typeof b == "string" && (l[x] = parseFloat(b));
        }
      else Jn[o] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: l, name: u } = this,
      o = [];
    for (let c = 0; c < l.length; c++) (l[c] === null || kS(l[c])) && o.push(c);
    o.length && $S(l, o, u);
  }
  measureInitialState() {
    const { element: l, unresolvedKeyframes: u, name: o } = this;
    if (!l || !l.current) return;
    o === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Jn[o](
        l.measureViewportBox(),
        window.getComputedStyle(l.current)
      )),
      (u[0] = this.measuredOrigin);
    const c = u[u.length - 1];
    c !== void 0 && l.getValue(o, c).jump(c, !1);
  }
  measureEndState() {
    var m;
    const { element: l, name: u, unresolvedKeyframes: o } = this;
    if (!l || !l.current) return;
    const c = l.getValue(u);
    c && c.jump(this.measuredOrigin, !1);
    const h = o.length - 1,
      d = o[h];
    (o[h] = Jn[u](l.measureViewportBox(), window.getComputedStyle(l.current))),
      d !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = d),
      (m = this.removedTransforms) != null &&
        m.length &&
        this.removedTransforms.forEach(([g, p]) => {
          l.getValue(g).set(p);
        }),
      this.resolveNoneKeyframes();
  }
}
function Ly(a, l, u) {
  if (a == null) return [];
  if (a instanceof EventTarget) return [a];
  if (typeof a == "string") {
    let o = document;
    const c = (u == null ? void 0 : u[a]) ?? o.querySelectorAll(a);
    return c ? Array.from(c) : [];
  }
  return Array.from(a).filter((o) => o != null);
}
const Ec = (a, l) => (l && typeof a == "number" ? l.transform(a) : a);
function Ws(a) {
  return Z0(a) && "offsetHeight" in a && !("ownerSVGElement" in a);
}
const { schedule: Ic } = ly(queueMicrotask, !1),
  Ke = { x: !1, y: !1 };
function Hy() {
  return Ke.x || Ke.y;
}
function t2(a) {
  return a === "x" || a === "y"
    ? Ke[a]
      ? null
      : ((Ke[a] = !0),
        () => {
          Ke[a] = !1;
        })
    : Ke.x || Ke.y
    ? null
    : ((Ke.x = Ke.y = !0),
      () => {
        Ke.x = Ke.y = !1;
      });
}
function Yy(a, l) {
  const u = Ly(a),
    o = new AbortController(),
    c = { passive: !0, ...l, signal: o.signal };
  return [u, c, () => o.abort()];
}
function e2(a) {
  return !(a.pointerType === "touch" || Hy());
}
function n2(a, l, u = {}) {
  const [o, c, h] = Yy(a, u);
  return (
    o.forEach((d) => {
      let m = !1,
        g = !1,
        p;
      const x = () => {
          d.removeEventListener("pointerleave", D);
        },
        b = (B) => {
          p && (p(B), (p = void 0)), x();
        },
        T = (B) => {
          (m = !1),
            window.removeEventListener("pointerup", T),
            window.removeEventListener("pointercancel", T),
            g && ((g = !1), b(B));
        },
        j = () => {
          (m = !0),
            window.addEventListener("pointerup", T, c),
            window.addEventListener("pointercancel", T, c);
        },
        D = (B) => {
          if (B.pointerType !== "touch") {
            if (m) {
              g = !0;
              return;
            }
            b(B);
          }
        },
        U = (B) => {
          if (!e2(B)) return;
          g = !1;
          const H = l(d, B);
          typeof H == "function" &&
            ((p = H), d.addEventListener("pointerleave", D, c));
        };
      d.addEventListener("pointerenter", U, c),
        d.addEventListener("pointerdown", j, c);
    }),
    h
  );
}
const qy = (a, l) => (l ? (a === l ? !0 : qy(a, l.parentElement)) : !1),
  tf = (a) =>
    a.pointerType === "mouse"
      ? typeof a.button != "number" || a.button <= 0
      : a.isPrimary !== !1,
  a2 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function i2(a) {
  return a2.has(a.tagName) || a.isContentEditable === !0;
}
const l2 = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function s2(a) {
  return l2.has(a.tagName) || a.isContentEditable === !0;
}
const Ps = new WeakSet();
function Hp(a) {
  return (l) => {
    l.key === "Enter" && a(l);
  };
}
function Jr(a, l) {
  a.dispatchEvent(
    new PointerEvent("pointer" + l, { isPrimary: !0, bubbles: !0 })
  );
}
const o2 = (a, l) => {
  const u = a.currentTarget;
  if (!u) return;
  const o = Hp(() => {
    if (Ps.has(u)) return;
    Jr(u, "down");
    const c = Hp(() => {
        Jr(u, "up");
      }),
      h = () => Jr(u, "cancel");
    u.addEventListener("keyup", c, l), u.addEventListener("blur", h, l);
  });
  u.addEventListener("keydown", o, l),
    u.addEventListener("blur", () => u.removeEventListener("keydown", o), l);
};
function Yp(a) {
  return tf(a) && !Hy();
}
const qp = new WeakSet();
function u2(a, l, u = {}) {
  const [o, c, h] = Yy(a, u),
    d = (m) => {
      const g = m.currentTarget;
      if (!Yp(m) || qp.has(m)) return;
      Ps.add(g), u.stopPropagation && qp.add(m);
      const p = l(g, m),
        x = { ...c, capture: !0 },
        b = (D, U) => {
          window.removeEventListener("pointerup", T, x),
            window.removeEventListener("pointercancel", j, x),
            Ps.has(g) && Ps.delete(g),
            Yp(D) && typeof p == "function" && p(D, { success: U });
        },
        T = (D) => {
          b(
            D,
            g === window ||
              g === document ||
              u.useGlobalTarget ||
              qy(g, D.target)
          );
        },
        j = (D) => {
          b(D, !1);
        };
      window.addEventListener("pointerup", T, x),
        window.addEventListener("pointercancel", j, x);
    };
  return (
    o.forEach((m) => {
      (u.useGlobalTarget ? window : m).addEventListener("pointerdown", d, c),
        Ws(m) &&
          (m.addEventListener("focus", (p) => o2(p, c)),
          !i2(m) && !m.hasAttribute("tabindex") && (m.tabIndex = 0));
    }),
    h
  );
}
function ef(a) {
  return Z0(a) && "ownerSVGElement" in a;
}
const $s = new WeakMap();
let Fn;
const Gy = (a, l, u) => (o, c) =>
    c && c[0]
      ? c[0][a + "Size"]
      : ef(o) && "getBBox" in o
      ? o.getBBox()[l]
      : o[u],
  r2 = Gy("inline", "width", "offsetWidth"),
  c2 = Gy("block", "height", "offsetHeight");
function f2({ target: a, borderBoxSize: l }) {
  var u;
  (u = $s.get(a)) == null ||
    u.forEach((o) => {
      o(a, {
        get width() {
          return r2(a, l);
        },
        get height() {
          return c2(a, l);
        },
      });
    });
}
function d2(a) {
  a.forEach(f2);
}
function h2() {
  typeof ResizeObserver > "u" || (Fn = new ResizeObserver(d2));
}
function m2(a, l) {
  Fn || h2();
  const u = Ly(a);
  return (
    u.forEach((o) => {
      let c = $s.get(o);
      c || ((c = new Set()), $s.set(o, c)),
        c.add(l),
        Fn == null || Fn.observe(o);
    }),
    () => {
      u.forEach((o) => {
        const c = $s.get(o);
        c == null || c.delete(l),
          (c != null && c.size) || Fn == null || Fn.unobserve(o);
      });
    }
  );
}
const Is = new Set();
let ci;
function p2() {
  (ci = () => {
    const a = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    Is.forEach((l) => l(a));
  }),
    window.addEventListener("resize", ci);
}
function y2(a) {
  return (
    Is.add(a),
    ci || p2(),
    () => {
      Is.delete(a),
        !Is.size &&
          typeof ci == "function" &&
          (window.removeEventListener("resize", ci), (ci = void 0));
    }
  );
}
function Gp(a, l) {
  return typeof a == "function" ? y2(a) : m2(a, l);
}
function g2(a) {
  return ef(a) && a.tagName === "svg";
}
const v2 = [..._y, Ft, Fe],
  x2 = (a) => v2.find(Vy(a)),
  Xp = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  fi = () => ({ x: Xp(), y: Xp() }),
  kp = () => ({ min: 0, max: 0 }),
  Wt = () => ({ x: kp(), y: kp() }),
  b2 = new WeakMap();
function yo(a) {
  return a !== null && typeof a == "object" && typeof a.start == "function";
}
function bl(a) {
  return typeof a == "string" || Array.isArray(a);
}
const nf = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  af = ["initial", ...nf];
function go(a) {
  return yo(a.animate) || af.some((l) => bl(a[l]));
}
function Xy(a) {
  return !!(go(a) || a.variants);
}
function S2(a, l, u) {
  for (const o in l) {
    const c = l[o],
      h = u[o];
    if (oe(c)) a.addValue(o, c);
    else if (oe(h)) a.addValue(o, hi(c, { owner: a }));
    else if (h !== c)
      if (a.hasValue(o)) {
        const d = a.getValue(o);
        d.liveStyle === !0 ? d.jump(c) : d.hasAnimated || d.set(c);
      } else {
        const d = a.getStaticValue(o);
        a.addValue(o, hi(d !== void 0 ? d : c, { owner: a }));
      }
  }
  for (const o in u) l[o] === void 0 && a.removeValue(o);
  return l;
}
const Mc = { current: null },
  ky = { current: !1 },
  T2 = typeof window < "u";
function A2() {
  if (((ky.current = !0), !!T2))
    if (window.matchMedia) {
      const a = window.matchMedia("(prefers-reduced-motion)"),
        l = () => (Mc.current = a.matches);
      a.addEventListener("change", l), l();
    } else Mc.current = !1;
}
const Zp = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
let ro = {};
function Zy(a) {
  ro = a;
}
function E2() {
  return ro;
}
class M2 {
  scrapeMotionValuesFromProps(l, u, o) {
    return {};
  }
  constructor(
    {
      parent: l,
      props: u,
      presenceContext: o,
      reducedMotionConfig: c,
      skipAnimations: h,
      blockInitialAnimation: d,
      visualState: m,
    },
    g = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.shouldSkipAnimations = !1),
      (this.values = new Map()),
      (this.KeyframeResolver = Fc),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.hasBeenMounted = !1),
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
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const j = fe.now();
        this.renderScheduledAt < j &&
          ((this.renderScheduledAt = j), zt.render(this.render, !1, !0));
      });
    const { latestValues: p, renderState: x } = m;
    (this.latestValues = p),
      (this.baseTarget = { ...p }),
      (this.initialValues = u.initial ? { ...p } : {}),
      (this.renderState = x),
      (this.parent = l),
      (this.props = u),
      (this.presenceContext = o),
      (this.depth = l ? l.depth + 1 : 0),
      (this.reducedMotionConfig = c),
      (this.skipAnimationsConfig = h),
      (this.options = g),
      (this.blockInitialAnimation = !!d),
      (this.isControllingVariants = go(u)),
      (this.isVariantNode = Xy(u)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(l && l.current));
    const { willChange: b, ...T } = this.scrapeMotionValuesFromProps(
      u,
      {},
      this
    );
    for (const j in T) {
      const D = T[j];
      p[j] !== void 0 && oe(D) && D.set(p[j]);
    }
  }
  mount(l) {
    var u, o;
    if (this.hasBeenMounted)
      for (const c in this.initialValues)
        (u = this.values.get(c)) == null || u.jump(this.initialValues[c]),
          (this.latestValues[c] = this.initialValues[c]);
    (this.current = l),
      b2.set(l, this),
      this.projection && !this.projection.instance && this.projection.mount(l),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((c, h) => this.bindToMotionValue(h, c)),
      this.reducedMotionConfig === "never"
        ? (this.shouldReduceMotion = !1)
        : this.reducedMotionConfig === "always"
        ? (this.shouldReduceMotion = !0)
        : (ky.current || A2(), (this.shouldReduceMotion = Mc.current)),
      (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
      (o = this.parent) == null || o.addChild(this),
      this.update(this.props, this.presenceContext),
      (this.hasBeenMounted = !0);
  }
  unmount() {
    var l;
    this.projection && this.projection.unmount(),
      Pn(this.notifyUpdate),
      Pn(this.render),
      this.valueSubscriptions.forEach((u) => u()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      (l = this.parent) == null || l.removeChild(this);
    for (const u in this.events) this.events[u].clear();
    for (const u in this.features) {
      const o = this.features[u];
      o && (o.unmount(), (o.isMounted = !1));
    }
    this.current = null;
  }
  addChild(l) {
    this.children.add(l),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(l);
  }
  removeChild(l) {
    this.children.delete(l),
      this.enteringChildren && this.enteringChildren.delete(l);
  }
  bindToMotionValue(l, u) {
    if (
      (this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)(),
      u.accelerate && Dy.has(l) && this.current instanceof HTMLElement)
    ) {
      const {
          factory: d,
          keyframes: m,
          times: g,
          ease: p,
          duration: x,
        } = u.accelerate,
        b = new Ey({
          element: this.current,
          name: l,
          keyframes: m,
          times: g,
          ease: p,
          duration: ze(x),
        }),
        T = d(b);
      this.valueSubscriptions.set(l, () => {
        T(), b.cancel();
      });
      return;
    }
    const o = yi.has(l);
    o && this.onBindTransform && this.onBindTransform();
    const c = u.on("change", (d) => {
      (this.latestValues[l] = d),
        this.props.onUpdate && zt.preRender(this.notifyUpdate),
        o && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender();
    });
    let h;
    typeof window < "u" &&
      window.MotionCheckAppearSync &&
      (h = window.MotionCheckAppearSync(this, l, u)),
      this.valueSubscriptions.set(l, () => {
        c(), h && h();
      });
  }
  sortNodePosition(l) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== l.type
      ? 0
      : this.sortInstanceNodePosition(this.current, l.current);
  }
  updateFeatures() {
    let l = "animation";
    for (l in ro) {
      const u = ro[l];
      if (!u) continue;
      const { isEnabled: o, Feature: c } = u;
      if (
        (!this.features[l] &&
          c &&
          o(this.props) &&
          (this.features[l] = new c(this)),
        this.features[l])
      ) {
        const h = this.features[l];
        h.isMounted ? h.update() : (h.mount(), (h.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Wt();
  }
  getStaticValue(l) {
    return this.latestValues[l];
  }
  setStaticValue(l, u) {
    this.latestValues[l] = u;
  }
  update(l, u) {
    (l.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = l),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = u);
    for (let o = 0; o < Zp.length; o++) {
      const c = Zp[o];
      this.propEventSubscriptions[c] &&
        (this.propEventSubscriptions[c](),
        delete this.propEventSubscriptions[c]);
      const h = "on" + c,
        d = l[h];
      d && (this.propEventSubscriptions[c] = this.on(c, d));
    }
    (this.prevMotionValues = S2(
      this,
      this.scrapeMotionValuesFromProps(l, this.prevProps || {}, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(l) {
    return this.props.variants ? this.props.variants[l] : void 0;
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
  addVariantChild(l) {
    const u = this.getClosestVariantNode();
    if (u)
      return (
        u.variantChildren && u.variantChildren.add(l),
        () => u.variantChildren.delete(l)
      );
  }
  addValue(l, u) {
    const o = this.values.get(l);
    u !== o &&
      (o && this.removeValue(l),
      this.bindToMotionValue(l, u),
      this.values.set(l, u),
      (this.latestValues[l] = u.get()));
  }
  removeValue(l) {
    this.values.delete(l);
    const u = this.valueSubscriptions.get(l);
    u && (u(), this.valueSubscriptions.delete(l)),
      delete this.latestValues[l],
      this.removeValueFromRenderState(l, this.renderState);
  }
  hasValue(l) {
    return this.values.has(l);
  }
  getValue(l, u) {
    if (this.props.values && this.props.values[l]) return this.props.values[l];
    let o = this.values.get(l);
    return (
      o === void 0 &&
        u !== void 0 &&
        ((o = hi(u === null ? void 0 : u, { owner: this })),
        this.addValue(l, o)),
      o
    );
  }
  readValue(l, u) {
    let o =
      this.latestValues[l] !== void 0 || !this.current
        ? this.latestValues[l]
        : this.getBaseTargetFromProps(this.props, l) ??
          this.readValueFromInstance(this.current, l, this.options);
    return (
      o != null &&
        (typeof o == "string" && (k0(o) || Q0(o))
          ? (o = parseFloat(o))
          : !x2(o) && Fe.test(u) && (o = By(l, u)),
        this.setBaseTarget(l, oe(o) ? o.get() : o)),
      oe(o) ? o.get() : o
    );
  }
  setBaseTarget(l, u) {
    this.baseTarget[l] = u;
  }
  getBaseTarget(l) {
    var h;
    const { initial: u } = this.props;
    let o;
    if (typeof u == "string" || typeof u == "object") {
      const d = Pc(
        this.props,
        u,
        (h = this.presenceContext) == null ? void 0 : h.custom
      );
      d && (o = d[l]);
    }
    if (u && o !== void 0) return o;
    const c = this.getBaseTargetFromProps(this.props, l);
    return c !== void 0 && !oe(c)
      ? c
      : this.initialValues[l] !== void 0 && o === void 0
      ? void 0
      : this.baseTarget[l];
  }
  on(l, u) {
    return this.events[l] || (this.events[l] = new Hc()), this.events[l].add(u);
  }
  notify(l, ...u) {
    this.events[l] && this.events[l].notify(...u);
  }
  scheduleRenderMicrotask() {
    Ic.render(this.render);
  }
}
class Qy extends M2 {
  constructor() {
    super(...arguments), (this.KeyframeResolver = IS);
  }
  sortInstanceNodePosition(l, u) {
    return l.compareDocumentPosition(u) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(l, u) {
    const o = l.style;
    return o ? o[u] : void 0;
  }
  removeValueFromRenderState(l, { vars: u, style: o }) {
    delete u[l], delete o[l];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: l } = this.props;
    oe(l) &&
      (this.childSubscription = l.on("change", (u) => {
        this.current && (this.current.textContent = `${u}`);
      }));
  }
}
class $n {
  constructor(l) {
    (this.isMounted = !1), (this.node = l);
  }
  update() {}
}
function Ky({ top: a, left: l, right: u, bottom: o }) {
  return { x: { min: l, max: u }, y: { min: a, max: o } };
}
function D2({ x: a, y: l }) {
  return { top: l.min, right: a.max, bottom: l.max, left: a.min };
}
function N2(a, l) {
  if (!l) return a;
  const u = l({ x: a.left, y: a.top }),
    o = l({ x: a.right, y: a.bottom });
  return { top: u.y, left: u.x, bottom: o.y, right: o.x };
}
function Wr(a) {
  return a === void 0 || a === 1;
}
function Dc({ scale: a, scaleX: l, scaleY: u }) {
  return !Wr(a) || !Wr(l) || !Wr(u);
}
function xa(a) {
  return (
    Dc(a) ||
    Fy(a) ||
    a.z ||
    a.rotate ||
    a.rotateX ||
    a.rotateY ||
    a.skewX ||
    a.skewY
  );
}
function Fy(a) {
  return Qp(a.x) || Qp(a.y);
}
function Qp(a) {
  return a && a !== "0%";
}
function co(a, l, u) {
  const o = a - u,
    c = l * o;
  return u + c;
}
function Kp(a, l, u, o, c) {
  return c !== void 0 && (a = co(a, c, o)), co(a, u, o) + l;
}
function Nc(a, l = 0, u = 1, o, c) {
  (a.min = Kp(a.min, l, u, o, c)), (a.max = Kp(a.max, l, u, o, c));
}
function Jy(a, { x: l, y: u }) {
  Nc(a.x, l.translate, l.scale, l.originPoint),
    Nc(a.y, u.translate, u.scale, u.originPoint);
}
const Fp = 0.999999999999,
  Jp = 1.0000000000001;
function w2(a, l, u, o = !1) {
  var m;
  const c = u.length;
  if (!c) return;
  l.x = l.y = 1;
  let h, d;
  for (let g = 0; g < c; g++) {
    (h = u[g]), (d = h.projectionDelta);
    const { visualElement: p } = h.options;
    (p && p.props.style && p.props.style.display === "contents") ||
      (o &&
        h.options.layoutScroll &&
        h.scroll &&
        h !== h.root &&
        (tn(a.x, -h.scroll.offset.x), tn(a.y, -h.scroll.offset.y)),
      d && ((l.x *= d.x.scale), (l.y *= d.y.scale), Jy(a, d)),
      o &&
        xa(h.latestValues) &&
        to(a, h.latestValues, (m = h.layout) == null ? void 0 : m.layoutBox));
  }
  l.x < Jp && l.x > Fp && (l.x = 1), l.y < Jp && l.y > Fp && (l.y = 1);
}
function tn(a, l) {
  (a.min += l), (a.max += l);
}
function Wp(a, l, u, o, c = 0.5) {
  const h = jt(a.min, a.max, c);
  Nc(a, l, u, h, o);
}
function Pp(a, l) {
  return typeof a == "string" ? (parseFloat(a) / 100) * (l.max - l.min) : a;
}
function to(a, l, u) {
  const o = u ?? a;
  Wp(a.x, Pp(l.x, o.x), l.scaleX, l.scale, l.originX),
    Wp(a.y, Pp(l.y, o.y), l.scaleY, l.scale, l.originY);
}
function Wy(a, l) {
  return Ky(N2(a.getBoundingClientRect(), l));
}
function j2(a, l, u) {
  const o = Wy(a, u),
    { scroll: c } = l;
  return c && (tn(o.x, c.offset.x), tn(o.y, c.offset.y)), o;
}
const z2 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  C2 = pi.length;
function R2(a, l, u) {
  let o = "",
    c = !0;
  for (let d = 0; d < C2; d++) {
    const m = pi[d],
      g = a[m];
    if (g === void 0) continue;
    let p = !0;
    if (typeof g == "number") p = g === (m.startsWith("scale") ? 1 : 0);
    else {
      const x = parseFloat(g);
      p = m.startsWith("scale") ? x === 1 : x === 0;
    }
    if (!p || u) {
      const x = Ec(g, uo[m]);
      if (!p) {
        c = !1;
        const b = z2[m] || m;
        o += `${b}(${x}) `;
      }
      u && (l[m] = x);
    }
  }
  const h = a.pathRotation;
  return (
    h && ((c = !1), (o += `rotate(${Ec(h, uo.pathRotation)}) `)),
    (o = o.trim()),
    u ? (o = u(l, c ? "" : o)) : c && (o = "none"),
    o
  );
}
function lf(a, l, u) {
  const { style: o, vars: c, transformOrigin: h } = a;
  let d = !1,
    m = !1;
  for (const g in l) {
    const p = l[g];
    if (yi.has(g)) {
      d = !0;
      continue;
    } else if (oy(g)) {
      c[g] = p;
      continue;
    } else {
      const x = Ec(p, uo[g]);
      g.startsWith("origin") ? ((m = !0), (h[g] = x)) : (o[g] = x);
    }
  }
  if (
    (l.transform ||
      (d || u
        ? (o.transform = R2(l, a.transform, u))
        : o.transform && (o.transform = "none")),
    m)
  ) {
    const { originX: g = "50%", originY: p = "50%", originZ: x = 0 } = h;
    o.transformOrigin = `${g} ${p} ${x}`;
  }
}
function Py(a, { style: l, vars: u }, o, c) {
  const h = a.style;
  let d;
  for (d in l) h[d] = l[d];
  c == null || c.applyProjectionStyles(h, o);
  for (d in u) h.setProperty(d, u[d]);
}
function $p(a, l) {
  return l.max === l.min ? 0 : (a / (l.max - l.min)) * 100;
}
const dl = {
    correct: (a, l) => {
      if (!l.target) return a;
      if (typeof a == "string")
        if (W.test(a)) a = parseFloat(a);
        else return a;
      const u = $p(a, l.target.x),
        o = $p(a, l.target.y);
      return `${u}% ${o}%`;
    },
  },
  O2 = {
    correct: (a, { treeScale: l, projectionDelta: u }) => {
      const o = a,
        c = Fe.parse(a);
      if (c.length > 5) return o;
      const h = Fe.createTransformer(a),
        d = typeof c[0] != "number" ? 1 : 0,
        m = u.x.scale * l.x,
        g = u.y.scale * l.y;
      (c[0 + d] /= m), (c[1 + d] /= g);
      const p = jt(m, g, 0.5);
      return (
        typeof c[2 + d] == "number" && (c[2 + d] /= p),
        typeof c[3 + d] == "number" && (c[3 + d] /= p),
        h(c)
      );
    },
  },
  wc = {
    borderRadius: {
      ...dl,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: dl,
    borderTopRightRadius: dl,
    borderBottomLeftRadius: dl,
    borderBottomRightRadius: dl,
    boxShadow: O2,
  };
function $y(a, { layout: l, layoutId: u }) {
  return (
    yi.has(a) ||
    a.startsWith("origin") ||
    ((l || u !== void 0) && (!!wc[a] || a === "opacity"))
  );
}
function sf(a, l, u) {
  var d;
  const o = a.style,
    c = l == null ? void 0 : l.style,
    h = {};
  if (!o) return h;
  for (const m in o)
    (oe(o[m]) ||
      (c && oe(c[m])) ||
      $y(m, a) ||
      ((d = u == null ? void 0 : u.getValue(m)) == null
        ? void 0
        : d.liveStyle) !== void 0) &&
      (h[m] = o[m]);
  return h;
}
function V2(a) {
  return window.getComputedStyle(a);
}
class _2 extends Qy {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = Py);
  }
  readValueFromInstance(l, u) {
    var o;
    if (yi.has(u))
      return (o = this.projection) != null && o.isProjecting ? hc(u) : eS(l, u);
    {
      const c = V2(l),
        h = (oy(u) ? c.getPropertyValue(u) : c[u]) || 0;
      return typeof h == "string" ? h.trim() : h;
    }
  }
  measureInstanceViewportBox(l, { transformPagePoint: u }) {
    return Wy(l, u);
  }
  build(l, u, o) {
    lf(l, u, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(l, u, o) {
    return sf(l, u, o);
  }
}
const U2 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  B2 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function L2(a, l, u = 1, o = 0, c = !0) {
  a.pathLength = 1;
  const h = c ? U2 : B2;
  (a[h.offset] = `${-o}`), (a[h.array] = `${l} ${u}`);
}
const H2 = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function Iy(
  a,
  {
    attrX: l,
    attrY: u,
    attrScale: o,
    pathLength: c,
    pathSpacing: h = 1,
    pathOffset: d = 0,
    ...m
  },
  g,
  p,
  x
) {
  if ((lf(a, m, p), g)) {
    a.style.viewBox && (a.attrs.viewBox = a.style.viewBox);
    return;
  }
  (a.attrs = a.style), (a.style = {});
  const { attrs: b, style: T } = a;
  b.transform && ((T.transform = b.transform), delete b.transform),
    (T.transform || b.transformOrigin) &&
      ((T.transformOrigin = b.transformOrigin ?? "50% 50%"),
      delete b.transformOrigin),
    T.transform &&
      ((T.transformBox = (x == null ? void 0 : x.transformBox) ?? "fill-box"),
      delete b.transformBox);
  for (const j of H2) b[j] !== void 0 && ((T[j] = b[j]), delete b[j]);
  l !== void 0 && (b.x = l),
    u !== void 0 && (b.y = u),
    o !== void 0 && (b.scale = o),
    c !== void 0 && L2(b, c, h, d, !1);
}
const tg = new Set([
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
  ]),
  eg = (a) => typeof a == "string" && a.toLowerCase() === "svg";
function Y2(a, l, u, o) {
  Py(a, l, void 0, o);
  for (const c in l.attrs) a.setAttribute(tg.has(c) ? c : $c(c), l.attrs[c]);
}
function ng(a, l, u) {
  const o = sf(a, l, u);
  for (const c in a)
    if (oe(a[c]) || oe(l[c])) {
      const h =
        pi.indexOf(c) !== -1
          ? "attr" + c.charAt(0).toUpperCase() + c.substring(1)
          : c;
      o[h] = a[c];
    }
  return o;
}
class q2 extends Qy {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Wt);
  }
  getBaseTargetFromProps(l, u) {
    return l[u];
  }
  readValueFromInstance(l, u) {
    if (yi.has(u)) {
      const o = Uy(u);
      return (o && o.default) || 0;
    }
    return (u = tg.has(u) ? u : $c(u)), l.getAttribute(u);
  }
  scrapeMotionValuesFromProps(l, u, o) {
    return ng(l, u, o);
  }
  build(l, u, o) {
    Iy(l, u, this.isSVGTag, o.transformTemplate, o.style);
  }
  renderInstance(l, u, o, c) {
    Y2(l, u, o, c);
  }
  mount(l) {
    (this.isSVGTag = eg(l.tagName)), super.mount(l);
  }
}
const G2 = af.length;
function ag(a) {
  if (!a) return;
  if (!a.isControllingVariants) {
    const u = a.parent ? ag(a.parent) || {} : {};
    return a.props.initial !== void 0 && (u.initial = a.props.initial), u;
  }
  const l = {};
  for (let u = 0; u < G2; u++) {
    const o = af[u],
      c = a.props[o];
    (bl(c) || c === !1) && (l[o] = c);
  }
  return l;
}
function ig(a, l) {
  if (!Array.isArray(l)) return !1;
  const u = l.length;
  if (u !== a.length) return !1;
  for (let o = 0; o < u; o++) if (l[o] !== a[o]) return !1;
  return !0;
}
const X2 = [...nf].reverse(),
  k2 = nf.length;
function Z2(a) {
  return (l) =>
    Promise.all(l.map(({ animation: u, options: o }) => GS(a, u, o)));
}
function Q2(a) {
  let l = Z2(a),
    u = Ip(),
    o = !0,
    c = !1;
  const h = (p) => (x, b) => {
    var j;
    const T = Aa(
      a,
      b,
      p === "exit"
        ? (j = a.presenceContext) == null
          ? void 0
          : j.custom
        : void 0
    );
    if (T) {
      const { transition: D, transitionEnd: U, ...B } = T;
      x = { ...x, ...B, ...U };
    }
    return x;
  };
  function d(p) {
    l = p(a);
  }
  function m(p) {
    const { props: x } = a,
      b = ag(a.parent) || {},
      T = [],
      j = new Set();
    let D = {},
      U = 1 / 0;
    for (let H = 0; H < k2; H++) {
      const X = X2[H],
        Y = u[X],
        q = x[X] !== void 0 ? x[X] : b[X],
        I = bl(q),
        it = X === p ? Y.isActive : null;
      it === !1 && (U = H);
      let k = q === b[X] && q !== x[X] && I;
      if (
        (k && (o || c) && a.manuallyAnimateOnMount && (k = !1),
        (Y.protectedKeys = { ...D }),
        (!Y.isActive && it === null) ||
          (!q && !Y.prevProp) ||
          yo(q) ||
          typeof q == "boolean")
      )
        continue;
      if (X === "exit" && Y.isActive && it !== !0) {
        Y.prevResolvedValues && (D = { ...D, ...Y.prevResolvedValues });
        continue;
      }
      const K = K2(Y.prevProp, q);
      let at = K || (X === p && Y.isActive && !k && I) || (H > U && I),
        tt = !1;
      const pt = Array.isArray(q) ? q : [q];
      let vt = pt.reduce(h(X), {});
      it === !1 && (vt = {});
      const { prevResolvedValues: te = {} } = Y,
        Xt = { ...te, ...vt },
        Ht = (F) => {
          (at = !0),
            j.has(F) && ((tt = !0), j.delete(F)),
            (Y.needsAnimating[F] = !0);
          const ut = a.getValue(F);
          ut && (ut.liveStyle = !1);
        };
      for (const F in Xt) {
        const ut = vt[F],
          yt = te[F];
        if (D.hasOwnProperty(F)) continue;
        let E = !1;
        xc(ut) && xc(yt) ? (E = !ig(ut, yt) || K) : (E = ut !== yt),
          E
            ? ut != null
              ? Ht(F)
              : j.add(F)
            : ut !== void 0 && j.has(F)
            ? Ht(F)
            : (Y.protectedKeys[F] = !0);
      }
      (Y.prevProp = q),
        (Y.prevResolvedValues = vt),
        Y.isActive && (D = { ...D, ...vt }),
        (o || c) && a.blockInitialAnimation && (at = !1);
      const R = k && K;
      at &&
        (!R || tt) &&
        T.push(
          ...pt.map((F) => {
            const ut = { type: X };
            if (
              typeof F == "string" &&
              (o || c) &&
              !R &&
              a.manuallyAnimateOnMount &&
              a.parent
            ) {
              const { parent: yt } = a,
                E = Aa(yt, F);
              if (yt.enteringChildren && E) {
                const { delayChildren: L } = E.transition || {};
                ut.delay = Ny(yt.enteringChildren, a, L);
              }
            }
            return { animation: F, options: ut };
          })
        );
    }
    if (j.size) {
      const H = {};
      if (typeof x.initial != "boolean") {
        const X = Aa(a, Array.isArray(x.initial) ? x.initial[0] : x.initial);
        X && X.transition && (H.transition = X.transition);
      }
      j.forEach((X) => {
        const Y = a.getBaseTarget(X),
          q = a.getValue(X);
        q && (q.liveStyle = !0), (H[X] = Y ?? null);
      }),
        T.push({ animation: H });
    }
    let B = !!T.length;
    return (
      o &&
        (x.initial === !1 || x.initial === x.animate) &&
        !a.manuallyAnimateOnMount &&
        (B = !1),
      (o = !1),
      (c = !1),
      B ? l(T) : Promise.resolve()
    );
  }
  function g(p, x) {
    var T;
    if (u[p].isActive === x) return Promise.resolve();
    (T = a.variantChildren) == null ||
      T.forEach((j) => {
        var D;
        return (D = j.animationState) == null ? void 0 : D.setActive(p, x);
      }),
      (u[p].isActive = x);
    const b = m(p);
    for (const j in u) u[j].protectedKeys = {};
    return b;
  }
  return {
    animateChanges: m,
    setActive: g,
    setAnimateFunction: d,
    getState: () => u,
    reset: () => {
      (u = Ip()), (c = !0);
    },
  };
}
function K2(a, l) {
  return typeof l == "string" ? l !== a : Array.isArray(l) ? !ig(l, a) : !1;
}
function va(a = !1) {
  return {
    isActive: a,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Ip() {
  return {
    animate: va(!0),
    whileInView: va(),
    whileHover: va(),
    whileTap: va(),
    whileDrag: va(),
    whileFocus: va(),
    exit: va(),
  };
}
function jc(a, l) {
  (a.min = l.min), (a.max = l.max);
}
function Qe(a, l) {
  jc(a.x, l.x), jc(a.y, l.y);
}
function t0(a, l) {
  (a.translate = l.translate),
    (a.scale = l.scale),
    (a.originPoint = l.originPoint),
    (a.origin = l.origin);
}
const lg = 1e-4,
  F2 = 1 - lg,
  J2 = 1 + lg,
  sg = 0.01,
  W2 = 0 - sg,
  P2 = 0 + sg;
function de(a) {
  return a.max - a.min;
}
function $2(a, l, u) {
  return Math.abs(a - l) <= u;
}
function e0(a, l, u, o = 0.5) {
  (a.origin = o),
    (a.originPoint = jt(l.min, l.max, a.origin)),
    (a.scale = de(u) / de(l)),
    (a.translate = jt(u.min, u.max, a.origin) - a.originPoint),
    ((a.scale >= F2 && a.scale <= J2) || isNaN(a.scale)) && (a.scale = 1),
    ((a.translate >= W2 && a.translate <= P2) || isNaN(a.translate)) &&
      (a.translate = 0);
}
function yl(a, l, u, o) {
  e0(a.x, l.x, u.x, o ? o.originX : void 0),
    e0(a.y, l.y, u.y, o ? o.originY : void 0);
}
function n0(a, l, u, o = 0) {
  const c = o ? jt(u.min, u.max, o) : u.min;
  (a.min = c + l.min), (a.max = a.min + de(l));
}
function I2(a, l, u, o) {
  n0(a.x, l.x, u.x, o == null ? void 0 : o.x),
    n0(a.y, l.y, u.y, o == null ? void 0 : o.y);
}
function a0(a, l, u, o = 0) {
  const c = o ? jt(u.min, u.max, o) : u.min;
  (a.min = l.min - c), (a.max = a.min + de(l));
}
function fo(a, l, u, o) {
  a0(a.x, l.x, u.x, o == null ? void 0 : o.x),
    a0(a.y, l.y, u.y, o == null ? void 0 : o.y);
}
function i0(a, l, u, o, c) {
  return (
    (a -= l), (a = co(a, 1 / u, o)), c !== void 0 && (a = co(a, 1 / c, o)), a
  );
}
function tT(a, l = 0, u = 1, o = 0.5, c, h = a, d = a) {
  if (
    (en.test(l) &&
      ((l = parseFloat(l)), (l = jt(d.min, d.max, l / 100) - d.min)),
    typeof l != "number")
  )
    return;
  let m = jt(h.min, h.max, o);
  a === h && (m -= l),
    (a.min = i0(a.min, l, u, m, c)),
    (a.max = i0(a.max, l, u, m, c));
}
function l0(a, l, [u, o, c], h, d) {
  tT(a, l[u], l[o], l[c], l.scale, h, d);
}
const eT = ["x", "scaleX", "originX"],
  nT = ["y", "scaleY", "originY"];
function s0(a, l, u, o) {
  l0(a.x, l, eT, u ? u.x : void 0, o ? o.x : void 0),
    l0(a.y, l, nT, u ? u.y : void 0, o ? o.y : void 0);
}
function o0(a) {
  return a.translate === 0 && a.scale === 1;
}
function og(a) {
  return o0(a.x) && o0(a.y);
}
function u0(a, l) {
  return a.min === l.min && a.max === l.max;
}
function aT(a, l) {
  return u0(a.x, l.x) && u0(a.y, l.y);
}
function r0(a, l) {
  return (
    Math.round(a.min) === Math.round(l.min) &&
    Math.round(a.max) === Math.round(l.max)
  );
}
function ug(a, l) {
  return r0(a.x, l.x) && r0(a.y, l.y);
}
function c0(a) {
  return de(a.x) / de(a.y);
}
function f0(a, l) {
  return (
    a.translate === l.translate &&
    a.scale === l.scale &&
    a.originPoint === l.originPoint
  );
}
function Ie(a) {
  return [a("x"), a("y")];
}
function iT(a, l, u) {
  let o = "";
  const c = a.x.translate / l.x,
    h = a.y.translate / l.y,
    d = (u == null ? void 0 : u.z) || 0;
  if (
    ((c || h || d) && (o = `translate3d(${c}px, ${h}px, ${d}px) `),
    (l.x !== 1 || l.y !== 1) && (o += `scale(${1 / l.x}, ${1 / l.y}) `),
    u)
  ) {
    const {
      transformPerspective: p,
      rotate: x,
      pathRotation: b,
      rotateX: T,
      rotateY: j,
      skewX: D,
      skewY: U,
    } = u;
    p && (o = `perspective(${p}px) ${o}`),
      x && (o += `rotate(${x}deg) `),
      b && (o += `rotate(${b}deg) `),
      T && (o += `rotateX(${T}deg) `),
      j && (o += `rotateY(${j}deg) `),
      D && (o += `skewX(${D}deg) `),
      U && (o += `skewY(${U}deg) `);
  }
  const m = a.x.scale * l.x,
    g = a.y.scale * l.y;
  return (m !== 1 || g !== 1) && (o += `scale(${m}, ${g})`), o || "none";
}
const rg = [
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
  ],
  lT = rg.length,
  d0 = (a) => (typeof a == "string" ? parseFloat(a) : a),
  h0 = (a) => typeof a == "number" || W.test(a);
function sT(a, l, u, o, c, h) {
  c
    ? ((a.opacity = jt(0, u.opacity ?? 1, oT(o))),
      (a.opacityExit = jt(l.opacity ?? 1, 0, uT(o))))
    : h && (a.opacity = jt(l.opacity ?? 1, u.opacity ?? 1, o));
  for (let d = 0; d < lT; d++) {
    const m = rg[d];
    let g = m0(l, m),
      p = m0(u, m);
    if (g === void 0 && p === void 0) continue;
    g || (g = 0),
      p || (p = 0),
      g === 0 || p === 0 || h0(g) === h0(p)
        ? ((a[m] = Math.max(jt(d0(g), d0(p), o), 0)),
          (en.test(p) || en.test(g)) && (a[m] += "%"))
        : (a[m] = p);
  }
  (l.rotate || u.rotate) && (a.rotate = jt(l.rotate || 0, u.rotate || 0, o));
}
function m0(a, l) {
  return a[l] !== void 0 ? a[l] : a.borderRadius;
}
const oT = cg(0, 0.5, ey),
  uT = cg(0.5, 0.95, Ge);
function cg(a, l, u) {
  return (o) => (o < a ? 0 : o > l ? 1 : u(vl(a, l, o)));
}
function rT(a, l, u) {
  const o = oe(a) ? a : hi(a);
  return o.start(Wc("", o, l, u)), o.animation;
}
function Sl(a, l, u, o = { passive: !0 }) {
  return a.addEventListener(l, u, o), () => a.removeEventListener(l, u, o);
}
const cT = (a, l) => a.depth - l.depth;
class fT {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(l) {
    Bc(this.children, l), (this.isDirty = !0);
  }
  remove(l) {
    ao(this.children, l), (this.isDirty = !0);
  }
  forEach(l) {
    this.isDirty && this.children.sort(cT),
      (this.isDirty = !1),
      this.children.forEach(l);
  }
}
function dT(a, l) {
  const u = fe.now(),
    o = ({ timestamp: c }) => {
      const h = c - u;
      h >= l && (Pn(o), a(h - l));
    };
  return zt.setup(o, !0), () => Pn(o);
}
function eo(a) {
  return oe(a) ? a.get() : a;
}
class hT {
  constructor() {
    this.members = [];
  }
  add(l) {
    Bc(this.members, l);
    for (let u = this.members.length - 1; u >= 0; u--) {
      const o = this.members[u];
      if (o === l || o === this.lead || o === this.prevLead) continue;
      const c = o.instance;
      (!c || c.isConnected === !1) &&
        !o.snapshot &&
        (ao(this.members, o), o.unmount());
    }
    l.scheduleRender();
  }
  remove(l) {
    if (
      (ao(this.members, l),
      l === this.prevLead && (this.prevLead = void 0),
      l === this.lead)
    ) {
      const u = this.members[this.members.length - 1];
      u && this.promote(u);
    }
  }
  relegate(l) {
    var u;
    for (let o = this.members.indexOf(l) - 1; o >= 0; o--) {
      const c = this.members[o];
      if (
        c.isPresent !== !1 &&
        ((u = c.instance) == null ? void 0 : u.isConnected) !== !1
      )
        return this.promote(c), !0;
    }
    return !1;
  }
  promote(l, u) {
    var c;
    const o = this.lead;
    if (l !== o && ((this.prevLead = o), (this.lead = l), l.show(), o)) {
      o.updateSnapshot(), l.scheduleRender();
      const { layoutDependency: h } = o.options,
        { layoutDependency: d } = l.options;
      (h === void 0 || h !== d) &&
        ((l.resumeFrom = o),
        u && (o.preserveOpacity = !0),
        o.snapshot &&
          ((l.snapshot = o.snapshot),
          (l.snapshot.latestValues = o.animationValues || o.latestValues)),
        (c = l.root) != null && c.isUpdating && (l.isLayoutDirty = !0)),
        l.options.crossfade === !1 && o.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((l) => {
      var u, o, c, h, d;
      (o = (u = l.options).onExitComplete) == null || o.call(u),
        (d =
          (c = l.resumingFrom) == null
            ? void 0
            : (h = c.options).onExitComplete) == null || d.call(h);
    });
  }
  scheduleRender() {
    this.members.forEach((l) => l.instance && l.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    var l;
    (l = this.lead) != null && l.snapshot && (this.lead.snapshot = void 0);
  }
}
const no = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  Pr = ["", "X", "Y", "Z"],
  mT = 1e3;
let pT = 0;
function $r(a, l, u, o) {
  const { latestValues: c } = l;
  c[a] && ((u[a] = c[a]), l.setStaticValue(a, 0), o && (o[a] = 0));
}
function fg(a) {
  if (((a.hasCheckedOptimisedAppear = !0), a.root === a)) return;
  const { visualElement: l } = a.options;
  if (!l) return;
  const u = Ry(l);
  if (window.MotionHasOptimisedAnimation(u, "transform")) {
    const { layout: c, layoutId: h } = a.options;
    window.MotionCancelOptimisedAnimation(u, "transform", zt, !(c || h));
  }
  const { parent: o } = a;
  o && !o.hasCheckedOptimisedAppear && fg(o);
}
function dg({
  attachResizeListener: a,
  defaultParent: l,
  measureScroll: u,
  checkIsScrollRoot: o,
  resetTransform: c,
}) {
  return class {
    constructor(d = {}, m = l == null ? void 0 : l()) {
      (this.id = pT++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
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
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            this.nodes.forEach(vT),
            this.nodes.forEach(ET),
            this.nodes.forEach(MT),
            this.nodes.forEach(xT);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = d),
        (this.root = m ? m.root || m : this),
        (this.path = m ? [...m.path, m] : []),
        (this.parent = m),
        (this.depth = m ? m.depth + 1 : 0);
      for (let g = 0; g < this.path.length; g++)
        this.path[g].shouldResetTransform = !0;
      this.root === this && (this.nodes = new fT());
    }
    addEventListener(d, m) {
      return (
        this.eventHandlers.has(d) || this.eventHandlers.set(d, new Hc()),
        this.eventHandlers.get(d).add(m)
      );
    }
    notifyListeners(d, ...m) {
      const g = this.eventHandlers.get(d);
      g && g.notify(...m);
    }
    hasListeners(d) {
      return this.eventHandlers.has(d);
    }
    mount(d) {
      if (this.instance) return;
      (this.isSVG = ef(d) && !g2(d)), (this.instance = d);
      const { layoutId: m, layout: g, visualElement: p } = this.options;
      if (
        (p && !p.current && p.mount(d),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (g || m) && (this.isLayoutDirty = !0),
        a)
      ) {
        let x,
          b = 0;
        const T = () => (this.root.updateBlockedByResize = !1);
        zt.read(() => {
          b = window.innerWidth;
        }),
          a(d, () => {
            const j = window.innerWidth;
            j !== b &&
              ((b = j),
              (this.root.updateBlockedByResize = !0),
              x && x(),
              (x = dT(T, 250)),
              no.hasAnimatedSinceResize &&
                ((no.hasAnimatedSinceResize = !1), this.nodes.forEach(g0)));
          });
      }
      m && this.root.registerSharedNode(m, this),
        this.options.animate !== !1 &&
          p &&
          (m || g) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: x,
              hasLayoutChanged: b,
              hasRelativeLayoutChanged: T,
              layout: j,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const D =
                  this.options.transition || p.getDefaultTransition() || zT,
                { onLayoutAnimationStart: U, onLayoutAnimationComplete: B } =
                  p.getProps(),
                H = !this.targetLayout || !ug(this.targetLayout, j),
                X = !b && T;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                X ||
                (b && (H || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const Y = { ...Jc(D, "layout"), onPlay: U, onComplete: B };
                (p.shouldReduceMotion || this.options.layoutRoot) &&
                  ((Y.delay = 0), (Y.type = !1)),
                  this.startAnimation(Y),
                  this.setAnimationOrigin(x, X, Y.path);
              } else
                b || g0(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = j;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const d = this.getStack();
      d && d.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        Pn(this.updateProjection);
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
        this.nodes && this.nodes.forEach(DT),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: d } = this.options;
      return d && d.getProps().transformTemplate;
    }
    willUpdate(d = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          fg(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let x = 0; x < this.path.length; x++) {
        const b = this.path[x];
        (b.shouldResetTransform = !0),
          (typeof b.latestValues.x == "string" ||
            typeof b.latestValues.y == "string") &&
            (b.isLayoutDirty = !0),
          b.updateScroll("snapshot"),
          b.options.layoutRoot && b.willUpdate(!1);
      }
      const { layoutId: m, layout: g } = this.options;
      if (m === void 0 && !g) return;
      const p = this.getTransformTemplate();
      (this.prevTransformTemplateValue = p ? p(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        d && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        const g = this.updateBlockedByResize;
        this.unblockUpdate(),
          (this.updateBlockedByResize = !1),
          this.clearAllSnapshots(),
          g && this.nodes.forEach(ST),
          this.nodes.forEach(p0);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(y0);
        return;
      }
      (this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(TT),
            this.nodes.forEach(AT),
            this.nodes.forEach(yT),
            this.nodes.forEach(gT))
          : this.nodes.forEach(y0),
        this.clearAllSnapshots();
      const m = fe.now();
      (se.delta = nn(0, 1e3 / 60, m - se.timestamp)),
        (se.timestamp = m),
        (se.isProcessing = !0),
        Xr.update.process(se),
        Xr.preRender.process(se),
        Xr.render.process(se),
        (se.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Ic.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(bT), this.sharedNodes.forEach(NT);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        zt.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      zt.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !de(this.snapshot.measuredBox.x) &&
          !de(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
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
        for (let g = 0; g < this.path.length; g++) this.path[g].updateScroll();
      const d = this.layout;
      (this.layout = this.measure(!1)),
        this.layoutVersion++,
        this.layoutCorrected || (this.layoutCorrected = Wt()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: m } = this.options;
      m &&
        m.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          d ? d.layoutBox : void 0
        );
    }
    updateScroll(d = "measure") {
      let m = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === d &&
          (m = !1),
        m && this.instance)
      ) {
        const g = o(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: d,
          isRoot: g,
          offset: u(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : g,
        };
      }
    }
    resetTransform() {
      if (!c) return;
      const d =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        m = this.projectionDelta && !og(this.projectionDelta),
        g = this.getTransformTemplate(),
        p = g ? g(this.latestValues, "") : void 0,
        x = p !== this.prevTransformTemplateValue;
      d &&
        this.instance &&
        (m || xa(this.latestValues) || x) &&
        (c(this.instance, p),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(d = !0) {
      const m = this.measurePageBox();
      let g = this.removeElementScroll(m);
      return (
        d && (g = this.removeTransform(g)),
        CT(g),
        {
          animationId: this.root.animationId,
          measuredBox: m,
          layoutBox: g,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var p;
      const { visualElement: d } = this.options;
      if (!d) return Wt();
      const m = d.measureViewportBox();
      if (
        !(
          ((p = this.scroll) == null ? void 0 : p.wasRoot) || this.path.some(RT)
        )
      ) {
        const { scroll: x } = this.root;
        x && (tn(m.x, x.offset.x), tn(m.y, x.offset.y));
      }
      return m;
    }
    removeElementScroll(d) {
      var g;
      const m = Wt();
      if ((Qe(m, d), (g = this.scroll) != null && g.wasRoot)) return m;
      for (let p = 0; p < this.path.length; p++) {
        const x = this.path[p],
          { scroll: b, options: T } = x;
        x !== this.root &&
          b &&
          T.layoutScroll &&
          (b.wasRoot && Qe(m, d), tn(m.x, b.offset.x), tn(m.y, b.offset.y));
      }
      return m;
    }
    applyTransform(d, m = !1, g) {
      var x, b;
      const p = g || Wt();
      Qe(p, d);
      for (let T = 0; T < this.path.length; T++) {
        const j = this.path[T];
        !m &&
          j.options.layoutScroll &&
          j.scroll &&
          j !== j.root &&
          (tn(p.x, -j.scroll.offset.x), tn(p.y, -j.scroll.offset.y)),
          xa(j.latestValues) &&
            to(
              p,
              j.latestValues,
              (x = j.layout) == null ? void 0 : x.layoutBox
            );
      }
      return (
        xa(this.latestValues) &&
          to(
            p,
            this.latestValues,
            (b = this.layout) == null ? void 0 : b.layoutBox
          ),
        p
      );
    }
    removeTransform(d) {
      var g;
      const m = Wt();
      Qe(m, d);
      for (let p = 0; p < this.path.length; p++) {
        const x = this.path[p];
        if (!xa(x.latestValues)) continue;
        let b;
        x.instance &&
          (Dc(x.latestValues) && x.updateSnapshot(),
          (b = Wt()),
          Qe(b, x.measurePageBox())),
          s0(
            m,
            x.latestValues,
            (g = x.snapshot) == null ? void 0 : g.layoutBox,
            b
          );
      }
      return xa(this.latestValues) && s0(m, this.latestValues), m;
    }
    setTargetDelta(d) {
      (this.targetDelta = d),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(d) {
      this.options = {
        ...this.options,
        ...d,
        crossfade: d.crossfade !== void 0 ? d.crossfade : !0,
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
    resolveTargetDelta(d = !1) {
      var j;
      const m = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = m.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = m.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = m.isSharedProjectionDirty);
      const g = !!this.resumingFrom || this !== m;
      if (
        !(
          d ||
          (g && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((j = this.parent) != null && j.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: x, layoutId: b } = this.options;
      if (!this.layout || !(x || b)) return;
      this.resolvedRelativeTargetAt = se.timestamp;
      const T = this.getClosestProjectingParent();
      T &&
        this.linkedParentVersion !== T.layoutVersion &&
        !T.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (this.options.layoutAnchor !== !1 && T && T.layout
            ? this.createRelativeTarget(
                T,
                this.layout.layoutBox,
                T.layout.layoutBox
              )
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = Wt()), (this.targetWithTransforms = Wt())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              I2(
                this.target,
                this.relativeTarget,
                this.relativeParent.target,
                this.options.layoutAnchor || void 0
              ))
            : this.targetDelta
            ? (this.resumingFrom
                ? this.applyTransform(this.layout.layoutBox, !1, this.target)
                : Qe(this.target, this.layout.layoutBox),
              Jy(this.target, this.targetDelta))
            : Qe(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            this.options.layoutAnchor !== !1 &&
            T &&
            !!T.resumingFrom == !!this.resumingFrom &&
            !T.options.layoutScroll &&
            T.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(T, this.target, T.target)
              : (this.relativeParent = this.relativeTarget = void 0)));
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Dc(this.parent.latestValues) ||
          Fy(this.parent.latestValues)
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
    createRelativeTarget(d, m, g) {
      (this.relativeParent = d),
        (this.linkedParentVersion = d.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = Wt()),
        (this.relativeTargetOrigin = Wt()),
        fo(
          this.relativeTargetOrigin,
          m,
          g,
          this.options.layoutAnchor || void 0
        ),
        Qe(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var D;
      const d = this.getLead(),
        m = !!this.resumingFrom || this !== d;
      let g = !0;
      if (
        ((this.isProjectionDirty ||
          ((D = this.parent) != null && D.isProjectionDirty)) &&
          (g = !1),
        m &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (g = !1),
        this.resolvedRelativeTargetAt === se.timestamp && (g = !1),
        g)
      )
        return;
      const { layout: p, layoutId: x } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(p || x))
      )
        return;
      Qe(this.layoutCorrected, this.layout.layoutBox);
      const b = this.treeScale.x,
        T = this.treeScale.y;
      w2(this.layoutCorrected, this.treeScale, this.path, m),
        d.layout &&
          !d.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((d.target = d.layout.layoutBox), (d.targetWithTransforms = Wt()));
      const { target: j } = d;
      if (!j) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (t0(this.prevProjectionDelta.x, this.projectionDelta.x),
          t0(this.prevProjectionDelta.y, this.projectionDelta.y)),
        yl(this.projectionDelta, this.layoutCorrected, j, this.latestValues),
        (this.treeScale.x !== b ||
          this.treeScale.y !== T ||
          !f0(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !f0(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", j));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(d = !0) {
      var m;
      if (((m = this.options.visualElement) == null || m.scheduleRender(), d)) {
        const g = this.getStack();
        g && g.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = fi()),
        (this.projectionDelta = fi()),
        (this.projectionDeltaWithTransform = fi());
    }
    setAnimationOrigin(d, m = !1, g) {
      const p = this.snapshot,
        x = p ? p.latestValues : {},
        b = { ...this.latestValues },
        T = fi();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !m);
      const j = Wt(),
        D = p ? p.source : void 0,
        U = this.layout ? this.layout.source : void 0,
        B = D !== U,
        H = this.getStack(),
        X = !H || H.members.length <= 1,
        Y = !!(B && !X && this.options.crossfade === !0 && !this.path.some(jT));
      this.animationProgress = 0;
      let q;
      const I = g == null ? void 0 : g.interpolateProjection(d);
      (this.mixTargetDelta = (it) => {
        const k = it / 1e3,
          K = I == null ? void 0 : I(k);
        K
          ? ((T.x.translate = K.x),
            (T.x.scale = jt(d.x.scale, 1, k)),
            (T.x.origin = d.x.origin),
            (T.x.originPoint = d.x.originPoint),
            (T.y.translate = K.y),
            (T.y.scale = jt(d.y.scale, 1, k)),
            (T.y.origin = d.y.origin),
            (T.y.originPoint = d.y.originPoint))
          : (v0(T.x, d.x, k), v0(T.y, d.y, k)),
          this.setTargetDelta(T),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (fo(
              j,
              this.layout.layoutBox,
              this.relativeParent.layout.layoutBox,
              this.options.layoutAnchor || void 0
            ),
            wT(this.relativeTarget, this.relativeTargetOrigin, j, k),
            q && aT(this.relativeTarget, q) && (this.isProjectionDirty = !1),
            q || (q = Wt()),
            Qe(q, this.relativeTarget)),
          B &&
            ((this.animationValues = b), sT(b, x, this.latestValues, k, Y, X)),
          K &&
            K.rotate !== void 0 &&
            (this.animationValues || (this.animationValues = b),
            (this.animationValues.pathRotation = K.rotate)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = k);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(d) {
      var m, g, p;
      this.notifyListeners("animationStart"),
        (m = this.currentAnimation) == null || m.stop(),
        (p = (g = this.resumingFrom) == null ? void 0 : g.currentAnimation) ==
          null || p.stop(),
        this.pendingAnimation &&
          (Pn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = zt.update(() => {
          (no.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = hi(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = rT(this.motionValue, [0, 1e3], {
              ...d,
              velocity: 0,
              isSync: !0,
              onUpdate: (x) => {
                this.mixTargetDelta(x), d.onUpdate && d.onUpdate(x);
              },
              onComplete: () => {
                d.onComplete && d.onComplete(), this.completeAnimation();
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
      const d = this.getStack();
      d && d.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(mT),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const d = this.getLead();
      let {
        targetWithTransforms: m,
        target: g,
        layout: p,
        latestValues: x,
      } = d;
      if (!(!m || !g || !p)) {
        if (
          this !== d &&
          this.layout &&
          p &&
          hg(this.options.animationType, this.layout.layoutBox, p.layoutBox)
        ) {
          g = this.target || Wt();
          const b = de(this.layout.layoutBox.x);
          (g.x.min = d.target.x.min), (g.x.max = g.x.min + b);
          const T = de(this.layout.layoutBox.y);
          (g.y.min = d.target.y.min), (g.y.max = g.y.min + T);
        }
        Qe(m, g),
          to(m, x),
          yl(this.projectionDeltaWithTransform, this.layoutCorrected, m, x);
      }
    }
    registerSharedNode(d, m) {
      this.sharedNodes.has(d) || this.sharedNodes.set(d, new hT()),
        this.sharedNodes.get(d).add(m);
      const p = m.options.initialPromotionConfig;
      m.promote({
        transition: p ? p.transition : void 0,
        preserveFollowOpacity:
          p && p.shouldPreserveFollowOpacity
            ? p.shouldPreserveFollowOpacity(m)
            : void 0,
      });
    }
    isLead() {
      const d = this.getStack();
      return d ? d.lead === this : !0;
    }
    getLead() {
      var m;
      const { layoutId: d } = this.options;
      return d
        ? ((m = this.getStack()) == null ? void 0 : m.lead) || this
        : this;
    }
    getPrevLead() {
      var m;
      const { layoutId: d } = this.options;
      return d ? ((m = this.getStack()) == null ? void 0 : m.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: d } = this.options;
      if (d) return this.root.sharedNodes.get(d);
    }
    promote({ needsReset: d, transition: m, preserveFollowOpacity: g } = {}) {
      const p = this.getStack();
      p && p.promote(this, g),
        d && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        m && this.setOptions({ transition: m });
    }
    relegate() {
      const d = this.getStack();
      return d ? d.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: d } = this.options;
      if (!d) return;
      let m = !1;
      const { latestValues: g } = d;
      if (
        ((g.z ||
          g.rotate ||
          g.rotateX ||
          g.rotateY ||
          g.rotateZ ||
          g.skewX ||
          g.skewY) &&
          (m = !0),
        !m)
      )
        return;
      const p = {};
      g.z && $r("z", d, p, this.animationValues);
      for (let x = 0; x < Pr.length; x++)
        $r(`rotate${Pr[x]}`, d, p, this.animationValues),
          $r(`skew${Pr[x]}`, d, p, this.animationValues);
      d.render();
      for (const x in p)
        d.setStaticValue(x, p[x]),
          this.animationValues && (this.animationValues[x] = p[x]);
      d.scheduleRender();
    }
    applyProjectionStyles(d, m) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        d.visibility = "hidden";
        return;
      }
      const g = this.getTransformTemplate();
      if (this.needsReset) {
        (this.needsReset = !1),
          (d.visibility = ""),
          (d.opacity = ""),
          (d.pointerEvents = eo(m == null ? void 0 : m.pointerEvents) || ""),
          (d.transform = g ? g(this.latestValues, "") : "none");
        return;
      }
      const p = this.getLead();
      if (!this.projectionDelta || !this.layout || !p.target) {
        this.options.layoutId &&
          ((d.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (d.pointerEvents = eo(m == null ? void 0 : m.pointerEvents) || "")),
          this.hasProjected &&
            !xa(this.latestValues) &&
            ((d.transform = g ? g({}, "") : "none"), (this.hasProjected = !1));
        return;
      }
      d.visibility = "";
      const x = p.animationValues || p.latestValues;
      this.applyTransformsToTarget();
      let b = iT(this.projectionDeltaWithTransform, this.treeScale, x);
      g && (b = g(x, b)), (d.transform = b);
      const { x: T, y: j } = this.projectionDelta;
      (d.transformOrigin = `${T.origin * 100}% ${j.origin * 100}% 0`),
        p.animationValues
          ? (d.opacity =
              p === this
                ? x.opacity ?? this.latestValues.opacity ?? 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : x.opacityExit)
          : (d.opacity =
              p === this
                ? x.opacity !== void 0
                  ? x.opacity
                  : ""
                : x.opacityExit !== void 0
                ? x.opacityExit
                : 0);
      for (const D in wc) {
        if (x[D] === void 0) continue;
        const { correct: U, applyTo: B, isCSSVariable: H } = wc[D],
          X = b === "none" ? x[D] : U(x[D], p);
        if (B) {
          const Y = B.length;
          for (let q = 0; q < Y; q++) d[B[q]] = X;
        } else
          H ? (this.options.visualElement.renderState.vars[D] = X) : (d[D] = X);
      }
      this.options.layoutId &&
        (d.pointerEvents =
          p === this ? eo(m == null ? void 0 : m.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((d) => {
        var m;
        return (m = d.currentAnimation) == null ? void 0 : m.stop();
      }),
        this.root.nodes.forEach(p0),
        this.root.sharedNodes.clear();
    }
  };
}
function yT(a) {
  a.updateLayout();
}
function gT(a) {
  var u;
  const l = ((u = a.resumeFrom) == null ? void 0 : u.snapshot) || a.snapshot;
  if (a.isLead() && a.layout && l && a.hasListeners("didUpdate")) {
    const { layoutBox: o, measuredBox: c } = a.layout,
      { animationType: h } = a.options,
      d = l.source !== a.layout.source;
    if (h === "size")
      Ie((b) => {
        const T = d ? l.measuredBox[b] : l.layoutBox[b],
          j = de(T);
        (T.min = o[b].min), (T.max = T.min + j);
      });
    else if (h === "x" || h === "y") {
      const b = h === "x" ? "y" : "x";
      jc(d ? l.measuredBox[b] : l.layoutBox[b], o[b]);
    } else
      hg(h, l.layoutBox, o) &&
        Ie((b) => {
          const T = d ? l.measuredBox[b] : l.layoutBox[b],
            j = de(o[b]);
          (T.max = T.min + j),
            a.relativeTarget &&
              !a.currentAnimation &&
              ((a.isProjectionDirty = !0),
              (a.relativeTarget[b].max = a.relativeTarget[b].min + j));
        });
    const m = fi();
    yl(m, o, l.layoutBox);
    const g = fi();
    d ? yl(g, a.applyTransform(c, !0), l.measuredBox) : yl(g, o, l.layoutBox);
    const p = !og(m);
    let x = !1;
    if (!a.resumeFrom) {
      const b = a.getClosestProjectingParent();
      if (b && !b.resumeFrom) {
        const { snapshot: T, layout: j } = b;
        if (T && j) {
          const D = a.options.layoutAnchor || void 0,
            U = Wt();
          fo(U, l.layoutBox, T.layoutBox, D);
          const B = Wt();
          fo(B, o, j.layoutBox, D),
            ug(U, B) || (x = !0),
            b.options.layoutRoot &&
              ((a.relativeTarget = B),
              (a.relativeTargetOrigin = U),
              (a.relativeParent = b));
        }
      }
    }
    a.notifyListeners("didUpdate", {
      layout: o,
      snapshot: l,
      delta: g,
      layoutDelta: m,
      hasLayoutChanged: p,
      hasRelativeLayoutChanged: x,
    });
  } else if (a.isLead()) {
    const { onExitComplete: o } = a.options;
    o && o();
  }
  a.options.transition = void 0;
}
function vT(a) {
  a.parent &&
    (a.isProjecting() || (a.isProjectionDirty = a.parent.isProjectionDirty),
    a.isSharedProjectionDirty ||
      (a.isSharedProjectionDirty = !!(
        a.isProjectionDirty ||
        a.parent.isProjectionDirty ||
        a.parent.isSharedProjectionDirty
      )),
    a.isTransformDirty || (a.isTransformDirty = a.parent.isTransformDirty));
}
function xT(a) {
  a.isProjectionDirty = a.isSharedProjectionDirty = a.isTransformDirty = !1;
}
function bT(a) {
  a.clearSnapshot();
}
function p0(a) {
  a.clearMeasurements();
}
function ST(a) {
  (a.isLayoutDirty = !0), a.updateLayout();
}
function y0(a) {
  a.isLayoutDirty = !1;
}
function TT(a) {
  a.isAnimationBlocked &&
    a.layout &&
    !a.isLayoutDirty &&
    ((a.snapshot = a.layout), (a.isLayoutDirty = !0));
}
function AT(a) {
  const { visualElement: l } = a.options;
  l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"),
    a.resetTransform();
}
function g0(a) {
  a.finishAnimation(),
    (a.targetDelta = a.relativeTarget = a.target = void 0),
    (a.isProjectionDirty = !0);
}
function ET(a) {
  a.resolveTargetDelta();
}
function MT(a) {
  a.calcProjection();
}
function DT(a) {
  a.resetSkewAndRotation();
}
function NT(a) {
  a.removeLeadSnapshot();
}
function v0(a, l, u) {
  (a.translate = jt(l.translate, 0, u)),
    (a.scale = jt(l.scale, 1, u)),
    (a.origin = l.origin),
    (a.originPoint = l.originPoint);
}
function x0(a, l, u, o) {
  (a.min = jt(l.min, u.min, o)), (a.max = jt(l.max, u.max, o));
}
function wT(a, l, u, o) {
  x0(a.x, l.x, u.x, o), x0(a.y, l.y, u.y, o);
}
function jT(a) {
  return a.animationValues && a.animationValues.opacityExit !== void 0;
}
const zT = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  b0 = (a) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(a),
  S0 = b0("applewebkit/") && !b0("chrome/") ? Math.round : Ge;
function T0(a) {
  (a.min = S0(a.min)), (a.max = S0(a.max));
}
function CT(a) {
  T0(a.x), T0(a.y);
}
function hg(a, l, u) {
  return (
    a === "position" || (a === "preserve-aspect" && !$2(c0(l), c0(u), 0.2))
  );
}
function RT(a) {
  var l;
  return a !== a.root && ((l = a.scroll) == null ? void 0 : l.wasRoot);
}
const OT = dg({
    attachResizeListener: (a, l) => Sl(a, "resize", l),
    measureScroll: () => {
      var a, l;
      return {
        x:
          document.documentElement.scrollLeft ||
          ((a = document.body) == null ? void 0 : a.scrollLeft) ||
          0,
        y:
          document.documentElement.scrollTop ||
          ((l = document.body) == null ? void 0 : l.scrollTop) ||
          0,
      };
    },
    checkIsScrollRoot: () => !0,
  }),
  Ir = { current: void 0 },
  mg = dg({
    measureScroll: (a) => ({ x: a.scrollLeft, y: a.scrollTop }),
    defaultParent: () => {
      if (!Ir.current) {
        const a = new OT({});
        a.mount(window), a.setOptions({ layoutScroll: !0 }), (Ir.current = a);
      }
      return Ir.current;
    },
    resetTransform: (a, l) => {
      a.style.transform = l !== void 0 ? l : "none";
    },
    checkIsScrollRoot: (a) => window.getComputedStyle(a).position === "fixed",
  }),
  of = G.createContext({
    transformPagePoint: (a) => a,
    isStatic: !1,
    reducedMotion: "never",
  });
function A0(a, l) {
  if (typeof a == "function") return a(l);
  a != null && (a.current = l);
}
function VT(...a) {
  return (l) => {
    let u = !1;
    const o = a.map((c) => {
      const h = A0(c, l);
      return !u && typeof h == "function" && (u = !0), h;
    });
    if (u)
      return () => {
        for (let c = 0; c < o.length; c++) {
          const h = o[c];
          typeof h == "function" ? h() : A0(a[c], null);
        }
      };
  };
}
function _T(...a) {
  return G.useCallback(VT(...a), a);
}
class UT extends G.Component {
  getSnapshotBeforeUpdate(l) {
    const u = this.props.childRef.current;
    if (
      Ws(u) &&
      l.isPresent &&
      !this.props.isPresent &&
      this.props.pop !== !1
    ) {
      const o = u.offsetParent,
        c = (Ws(o) && o.offsetWidth) || 0,
        h = (Ws(o) && o.offsetHeight) || 0,
        d = getComputedStyle(u),
        m = this.props.sizeRef.current;
      (m.height = parseFloat(d.height)),
        (m.width = parseFloat(d.width)),
        (m.top = u.offsetTop),
        (m.left = u.offsetLeft),
        (m.right = c - m.width - m.left),
        (m.bottom = h - m.height - m.top),
        (m.direction = d.direction);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function BT({
  children: a,
  isPresent: l,
  anchorX: u,
  anchorY: o,
  root: c,
  pop: h,
}) {
  var T;
  const d = G.useId(),
    m = G.useRef(null),
    g = G.useRef({
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      direction: "ltr",
    }),
    { nonce: p } = G.useContext(of),
    x =
      ((T = a.props) == null ? void 0 : T.ref) ?? (a == null ? void 0 : a.ref),
    b = _T(m, x);
  return (
    G.useInsertionEffect(() => {
      const {
        width: j,
        height: D,
        top: U,
        left: B,
        right: H,
        bottom: X,
        direction: Y,
      } = g.current;
      if (l || h === !1 || !m.current || !j || !D) return;
      const q = Y === "rtl",
        I =
          u === "left"
            ? q
              ? `right: ${H}`
              : `left: ${B}`
            : q
            ? `left: ${B}`
            : `right: ${H}`,
        it = o === "bottom" ? `bottom: ${X}` : `top: ${U}`;
      m.current.dataset.motionPopId = d;
      const k = document.createElement("style");
      p && (k.nonce = p);
      const K = c ?? document.head;
      return (
        K.appendChild(k),
        k.sheet &&
          k.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${j}px !important;
            height: ${D}px !important;
            ${I}px !important;
            ${it}px !important;
          }
        `),
        () => {
          var at;
          (at = m.current) == null || at.removeAttribute("data-motion-pop-id"),
            K.contains(k) && K.removeChild(k);
        }
      );
    }, [l]),
    v.jsx(UT, {
      isPresent: l,
      childRef: m,
      sizeRef: g,
      pop: h,
      children: h === !1 ? a : G.cloneElement(a, { ref: b }),
    })
  );
}
const LT = ({
  children: a,
  initial: l,
  isPresent: u,
  onExitComplete: o,
  custom: c,
  presenceAffectsLayout: h,
  mode: d,
  anchorX: m,
  anchorY: g,
  root: p,
}) => {
  const x = _c(HT),
    b = G.useId(),
    T = G.useRef(u),
    j = G.useRef(o);
  Uc(() => {
    (T.current = u), (j.current = o);
  });
  let D = !0,
    U = G.useMemo(
      () => (
        (D = !1),
        {
          id: b,
          initial: l,
          isPresent: u,
          custom: c,
          onExitComplete: (B) => {
            x.set(B, !0);
            for (const H of x.values()) if (!H) return;
            o && o();
          },
          register: (B) => (
            x.set(B, !1),
            () => {
              var H;
              x.delete(B),
                !T.current && !x.size && ((H = j.current) == null || H.call(j));
            }
          ),
        }
      ),
      [u, x, o]
    );
  return (
    h && D && (U = { ...U }),
    G.useMemo(() => {
      x.forEach((B, H) => x.set(H, !1));
    }, [u]),
    G.useEffect(() => {
      !u && !x.size && o && o();
    }, [u]),
    (a = v.jsx(BT, {
      pop: d === "popLayout",
      isPresent: u,
      anchorX: m,
      anchorY: g,
      root: p,
      children: a,
    })),
    v.jsx(mo.Provider, { value: U, children: a })
  );
};
function HT() {
  return new Map();
}
function pg(a = !0) {
  const l = G.useContext(mo);
  if (l === null) return [!0, null];
  const { isPresent: u, onExitComplete: o, register: c } = l,
    h = G.useId();
  G.useEffect(() => {
    if (a) return c(h);
  }, [a]);
  const d = G.useCallback(() => a && o && o(h), [h, o, a]);
  return !u && o ? [!1, d] : [!0];
}
const Qs = (a) => a.key || "";
function E0(a) {
  const l = [];
  return (
    G.Children.forEach(a, (u) => {
      G.isValidElement(u) && l.push(u);
    }),
    l
  );
}
const YT = ({
    children: a,
    custom: l,
    initial: u = !0,
    onExitComplete: o,
    presenceAffectsLayout: c = !0,
    mode: h = "sync",
    propagate: d = !1,
    anchorX: m = "left",
    anchorY: g = "top",
    root: p,
  }) => {
    const [x, b] = pg(d),
      T = G.useMemo(() => E0(a), [a]),
      j = d && !x ? [] : T.map(Qs),
      D = G.useRef(!0),
      U = G.useRef(T),
      B = _c(() => new Map()),
      H = G.useRef(new Set()),
      [X, Y] = G.useState(T),
      [q, I] = G.useState(T);
    Uc(() => {
      (D.current = !1), (U.current = T);
      for (let K = 0; K < q.length; K++) {
        const at = Qs(q[K]);
        j.includes(at)
          ? (B.delete(at), H.current.delete(at))
          : B.get(at) !== !0 && B.set(at, !1);
      }
    }, [q, j.length, j.join("-")]);
    const it = [];
    if (T !== X) {
      let K = [...T];
      for (let at = 0; at < q.length; at++) {
        const tt = q[at],
          pt = Qs(tt);
        j.includes(pt) || (K.splice(at, 0, tt), it.push(tt));
      }
      return h === "wait" && it.length && (K = it), I(E0(K)), Y(T), null;
    }
    const { forceRender: k } = G.useContext(Vc);
    return v.jsx(v.Fragment, {
      children: q.map((K) => {
        const at = Qs(K),
          tt = d && !x ? !1 : T === q || j.includes(at),
          pt = () => {
            if (H.current.has(at)) return;
            if (B.has(at)) H.current.add(at), B.set(at, !0);
            else return;
            let vt = !0;
            B.forEach((te) => {
              te || (vt = !1);
            }),
              vt &&
                (k == null || k(),
                I(U.current),
                d && (b == null || b()),
                o && o());
          };
        return v.jsx(
          LT,
          {
            isPresent: tt,
            initial: !D.current || u ? void 0 : !1,
            custom: l,
            presenceAffectsLayout: c,
            mode: h,
            root: p,
            onExitComplete: tt ? void 0 : pt,
            anchorX: m,
            anchorY: g,
            children: K,
          },
          at
        );
      }),
    });
  },
  yg = G.createContext({ strict: !1 }),
  M0 = {
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
  };
let D0 = !1;
function qT() {
  if (D0) return;
  const a = {};
  for (const l in M0) a[l] = { isEnabled: (u) => M0[l].some((o) => !!u[o]) };
  Zy(a), (D0 = !0);
}
function gg() {
  return qT(), E2();
}
function GT(a) {
  const l = gg();
  for (const u in a) l[u] = { ...l[u], ...a[u] };
  Zy(l);
}
const XT = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
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
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport",
]);
function ho(a) {
  return (
    a.startsWith("while") ||
    (a.startsWith("drag") && a !== "draggable") ||
    a.startsWith("layout") ||
    a.startsWith("onTap") ||
    a.startsWith("onPan") ||
    a.startsWith("onLayout") ||
    XT.has(a)
  );
}
let vg = (a) => !ho(a);
function kT(a) {
  typeof a == "function" && (vg = (l) => (l.startsWith("on") ? !ho(l) : a(l)));
}
try {
  kT(require("@emotion/is-prop-valid").default);
} catch {}
function ZT(a, l, u) {
  const o = {};
  for (const c in a)
    (c === "values" && typeof a.values == "object") ||
      oe(a[c]) ||
      ((vg(c) ||
        (u === !0 && ho(c)) ||
        (!l && !ho(c)) ||
        (a.draggable && c.startsWith("onDrag"))) &&
        (o[c] = a[c]));
  return o;
}
const vo = G.createContext({});
function QT(a, l) {
  if (go(a)) {
    const { initial: u, animate: o } = a;
    return {
      initial: u === !1 || bl(u) ? u : void 0,
      animate: bl(o) ? o : void 0,
    };
  }
  return a.inherit !== !1 ? l : {};
}
function KT(a) {
  const { initial: l, animate: u } = QT(a, G.useContext(vo));
  return G.useMemo(() => ({ initial: l, animate: u }), [N0(l), N0(u)]);
}
function N0(a) {
  return Array.isArray(a) ? a.join(" ") : a;
}
const uf = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function xg(a, l, u) {
  for (const o in l) !oe(l[o]) && !$y(o, u) && (a[o] = l[o]);
}
function FT({ transformTemplate: a }, l) {
  return G.useMemo(() => {
    const u = uf();
    return lf(u, l, a), Object.assign({}, u.vars, u.style);
  }, [l]);
}
function JT(a, l) {
  const u = a.style || {},
    o = {};
  return xg(o, u, a), Object.assign(o, FT(a, l)), o;
}
function WT(a, l) {
  const u = {},
    o = JT(a, l);
  return (
    a.drag &&
      a.dragListener !== !1 &&
      ((u.draggable = !1),
      (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none"),
      (o.touchAction =
        a.drag === !0 ? "none" : `pan-${a.drag === "x" ? "y" : "x"}`)),
    a.tabIndex === void 0 &&
      (a.onTap || a.onTapStart || a.whileTap) &&
      (u.tabIndex = 0),
    (u.style = o),
    u
  );
}
const bg = () => ({ ...uf(), attrs: {} });
function PT(a, l, u, o) {
  const c = G.useMemo(() => {
    const h = bg();
    return (
      Iy(h, l, eg(o), a.transformTemplate, a.style),
      { ...h.attrs, style: { ...h.style } }
    );
  }, [l]);
  if (a.style) {
    const h = {};
    xg(h, a.style, a), (c.style = { ...h, ...c.style });
  }
  return c;
}
const $T = [
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
function rf(a) {
  return typeof a != "string" || a.includes("-")
    ? !1
    : !!($T.indexOf(a) > -1 || /[A-Z]/u.test(a));
}
function IT(a, l, u, { latestValues: o }, c, h = !1, d) {
  const g = (d ?? rf(a) ? PT : WT)(l, o, c, a),
    p = ZT(l, typeof a == "string", h),
    x = a !== G.Fragment ? { ...p, ...g, ref: u } : {},
    { children: b } = l,
    T = G.useMemo(() => (oe(b) ? b.get() : b), [b]);
  return G.createElement(a, { ...x, children: T });
}
function tA({ scrapeMotionValuesFromProps: a, createRenderState: l }, u, o, c) {
  return { latestValues: eA(u, o, c, a), renderState: l() };
}
function eA(a, l, u, o) {
  const c = {},
    h = o(a, {});
  for (const T in h) c[T] = eo(h[T]);
  let { initial: d, animate: m } = a;
  const g = go(a),
    p = Xy(a);
  l &&
    p &&
    !g &&
    a.inherit !== !1 &&
    (d === void 0 && (d = l.initial), m === void 0 && (m = l.animate));
  let x = u ? u.initial === !1 : !1;
  x = x || d === !1;
  const b = x ? m : d;
  if (b && typeof b != "boolean" && !yo(b)) {
    const T = Array.isArray(b) ? b : [b];
    for (let j = 0; j < T.length; j++) {
      const D = Pc(a, T[j]);
      if (D) {
        const { transitionEnd: U, transition: B, ...H } = D;
        for (const X in H) {
          let Y = H[X];
          if (Array.isArray(Y)) {
            const q = x ? Y.length - 1 : 0;
            Y = Y[q];
          }
          Y !== null && (c[X] = Y);
        }
        for (const X in U) c[X] = U[X];
      }
    }
  }
  return c;
}
const Sg = (a) => (l, u) => {
    const o = G.useContext(vo),
      c = G.useContext(mo),
      h = () => tA(a, l, o, c);
    return u ? h() : _c(h);
  },
  nA = Sg({ scrapeMotionValuesFromProps: sf, createRenderState: uf }),
  aA = Sg({ scrapeMotionValuesFromProps: ng, createRenderState: bg }),
  iA = Symbol.for("motionComponentSymbol");
function lA(a, l, u) {
  const o = G.useRef(u);
  G.useInsertionEffect(() => {
    o.current = u;
  });
  const c = G.useRef(null);
  return G.useCallback(
    (h) => {
      var m;
      h && ((m = a.onMount) == null || m.call(a, h)),
        l && (h ? l.mount(h) : l.unmount());
      const d = o.current;
      if (typeof d == "function")
        if (h) {
          const g = d(h);
          typeof g == "function" && (c.current = g);
        } else c.current ? (c.current(), (c.current = null)) : d(h);
      else d && (d.current = h);
    },
    [l]
  );
}
const Tg = G.createContext({});
function ui(a) {
  return (
    a &&
    typeof a == "object" &&
    Object.prototype.hasOwnProperty.call(a, "current")
  );
}
function sA(a, l, u, o, c, h) {
  var Y, q;
  const { visualElement: d } = G.useContext(vo),
    m = G.useContext(yg),
    g = G.useContext(mo),
    p = G.useContext(of),
    x = p.reducedMotion,
    b = p.skipAnimations,
    T = G.useRef(null),
    j = G.useRef(!1);
  (o = o || m.renderer),
    !T.current &&
      o &&
      ((T.current = o(a, {
        visualState: l,
        parent: d,
        props: u,
        presenceContext: g,
        blockInitialAnimation: g ? g.initial === !1 : !1,
        reducedMotionConfig: x,
        skipAnimations: b,
        isSVG: h,
      })),
      j.current && T.current && (T.current.manuallyAnimateOnMount = !0));
  const D = T.current,
    U = G.useContext(Tg);
  D &&
    !D.projection &&
    c &&
    (D.type === "html" || D.type === "svg") &&
    oA(T.current, u, c, U);
  const B = G.useRef(!1);
  G.useInsertionEffect(() => {
    D && B.current && D.update(u, g);
  });
  const H = u[Cy],
    X = G.useRef(
      !!H &&
        typeof window < "u" &&
        !((Y = window.MotionHandoffIsComplete) != null && Y.call(window, H)) &&
        ((q = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : q.call(window, H))
    );
  return (
    Uc(() => {
      (j.current = !0),
        D &&
          ((B.current = !0),
          (window.MotionIsMounted = !0),
          D.updateFeatures(),
          D.scheduleRenderMicrotask(),
          X.current && D.animationState && D.animationState.animateChanges());
    }),
    G.useEffect(() => {
      D &&
        (!X.current && D.animationState && D.animationState.animateChanges(),
        X.current &&
          (queueMicrotask(() => {
            var I;
            (I = window.MotionHandoffMarkAsComplete) == null ||
              I.call(window, H);
          }),
          (X.current = !1)),
        (D.enteringChildren = void 0));
    }),
    D
  );
}
function oA(a, l, u, o) {
  const {
    layoutId: c,
    layout: h,
    drag: d,
    dragConstraints: m,
    layoutScroll: g,
    layoutRoot: p,
    layoutAnchor: x,
    layoutCrossfade: b,
  } = l;
  (a.projection = new u(
    a.latestValues,
    l["data-framer-portal-id"] ? void 0 : Ag(a.parent)
  )),
    a.projection.setOptions({
      layoutId: c,
      layout: h,
      alwaysMeasureLayout: !!d || (m && ui(m)),
      visualElement: a,
      animationType: typeof h == "string" ? h : "both",
      initialPromotionConfig: o,
      crossfade: b,
      layoutScroll: g,
      layoutRoot: p,
      layoutAnchor: x,
    });
}
function Ag(a) {
  if (a) return a.options.allowProjection !== !1 ? a.projection : Ag(a.parent);
}
function tc(a, { forwardMotionProps: l = !1, type: u } = {}, o, c) {
  o && GT(o);
  const h = u ? u === "svg" : rf(a),
    d = h ? aA : nA;
  function m(p, x) {
    let b;
    const T = { ...G.useContext(of), ...p, layoutId: uA(p) },
      { isStatic: j } = T,
      D = KT(p),
      U = d(p, j);
    if (!j && typeof window < "u") {
      rA();
      const B = cA(T);
      (b = B.MeasureLayout),
        (D.visualElement = sA(a, U, T, c, B.ProjectionNode, h));
    }
    return v.jsxs(vo.Provider, {
      value: D,
      children: [
        b && D.visualElement
          ? v.jsx(b, { visualElement: D.visualElement, ...T })
          : null,
        IT(a, p, lA(U, D.visualElement, x), U, j, l, h),
      ],
    });
  }
  m.displayName = `motion.${
    typeof a == "string" ? a : `create(${a.displayName ?? a.name ?? ""})`
  }`;
  const g = G.forwardRef(m);
  return (g[iA] = a), g;
}
function uA({ layoutId: a }) {
  const l = G.useContext(Vc).id;
  return l && a !== void 0 ? l + "-" + a : a;
}
function rA(a, l) {
  G.useContext(yg).strict;
}
function cA(a) {
  const l = gg(),
    { drag: u, layout: o } = l;
  if (!u && !o) return {};
  const c = { ...u, ...o };
  return {
    MeasureLayout:
      (u != null && u.isEnabled(a)) || (o != null && o.isEnabled(a))
        ? c.MeasureLayout
        : void 0,
    ProjectionNode: c.ProjectionNode,
  };
}
function fA(a, l) {
  if (typeof Proxy > "u") return tc;
  const u = new Map(),
    o = (h, d) => tc(h, d, a, l),
    c = (h, d) => o(h, d);
  return new Proxy(c, {
    get: (h, d) =>
      d === "create"
        ? o
        : (u.has(d) || u.set(d, tc(d, void 0, a, l)), u.get(d)),
  });
}
const dA = (a, l) =>
  l.isSVG ?? rf(a)
    ? new q2(l)
    : new _2(l, { allowProjection: a !== G.Fragment });
class hA extends $n {
  constructor(l) {
    super(l), l.animationState || (l.animationState = Q2(l));
  }
  updateAnimationControlsSubscription() {
    const { animate: l } = this.node.getProps();
    yo(l) && (this.unmountControls = l.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: l } = this.node.getProps(),
      { animate: u } = this.node.prevProps || {};
    l !== u && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var l;
    this.node.animationState.reset(),
      (l = this.unmountControls) == null || l.call(this);
  }
}
let mA = 0;
class pA extends $n {
  constructor() {
    super(...arguments), (this.id = mA++), (this.isExitComplete = !1);
  }
  update() {
    var h;
    if (!this.node.presenceContext) return;
    const { isPresent: l, onExitComplete: u } = this.node.presenceContext,
      { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || l === o) return;
    if (l && o === !1) {
      if (this.isExitComplete) {
        const { initial: d, custom: m } = this.node.getProps();
        if (
          typeof d == "string" ||
          (typeof d == "object" && d !== null && !Array.isArray(d))
        ) {
          const g = Aa(this.node, d, m);
          if (g) {
            const { transition: p, transitionEnd: x, ...b } = g;
            for (const T in b)
              (h = this.node.getValue(T)) == null || h.jump(b[T]);
          }
        }
        this.node.animationState.reset(),
          this.node.animationState.animateChanges();
      } else this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const c = this.node.animationState.setActive("exit", !l);
    u &&
      !l &&
      c.then(() => {
        (this.isExitComplete = !0), u(this.id);
      });
  }
  mount() {
    const { register: l, onExitComplete: u } = this.node.presenceContext || {};
    u && u(this.id), l && (this.unmount = l(this.id));
  }
  unmount() {}
}
const yA = { animation: { Feature: hA }, exit: { Feature: pA } };
function Ml(a) {
  return { point: { x: a.pageX, y: a.pageY } };
}
const gA = (a) => (l) => tf(l) && a(l, Ml(l));
function gl(a, l, u, o) {
  return Sl(a, l, gA(u), o);
}
const Eg = ({ current: a }) => (a ? a.ownerDocument.defaultView : null),
  w0 = (a, l) => Math.abs(a - l);
function vA(a, l) {
  const u = w0(a.x, l.x),
    o = w0(a.y, l.y);
  return Math.sqrt(u ** 2 + o ** 2);
}
const j0 = new Set(["auto", "scroll"]);
class Mg {
  constructor(
    l,
    u,
    {
      transformPagePoint: o,
      contextWindow: c = window,
      dragSnapToOrigin: h = !1,
      distanceThreshold: d = 3,
      element: m,
    } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.lastRawMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.scrollPositions = new Map()),
      (this.removeScrollListeners = null),
      (this.onElementScroll = (D) => {
        this.handleScroll(D.target);
      }),
      (this.onWindowScroll = () => {
        this.handleScroll(window);
      }),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        this.lastRawMoveEventInfo &&
          (this.lastMoveEventInfo = Ks(
            this.lastRawMoveEventInfo,
            this.transformPagePoint
          ));
        const D = ec(this.lastMoveEventInfo, this.history),
          U = this.startEvent !== null,
          B = vA(D.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!U && !B) return;
        const { point: H } = D,
          { timestamp: X } = se;
        this.history.push({ ...H, timestamp: X });
        const { onStart: Y, onMove: q } = this.handlers;
        U ||
          (Y && Y(this.lastMoveEvent, D),
          (this.startEvent = this.lastMoveEvent)),
          q && q(this.lastMoveEvent, D);
      }),
      (this.handlePointerMove = (D, U) => {
        (this.lastMoveEvent = D),
          (this.lastRawMoveEventInfo = U),
          (this.lastMoveEventInfo = Ks(U, this.transformPagePoint)),
          zt.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (D, U) => {
        this.end();
        const { onEnd: B, onSessionEnd: H, resumeAnimation: X } = this.handlers;
        if (
          ((this.dragSnapToOrigin || !this.startEvent) && X && X(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const Y = ec(
          D.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Ks(U, this.transformPagePoint),
          this.history
        );
        this.startEvent && B && B(D, Y), H && H(D, Y);
      }),
      !tf(l))
    )
      return;
    (this.dragSnapToOrigin = h),
      (this.handlers = u),
      (this.transformPagePoint = o),
      (this.distanceThreshold = d),
      (this.contextWindow = c || window);
    const g = Ml(l),
      p = Ks(g, this.transformPagePoint),
      { point: x } = p,
      { timestamp: b } = se;
    this.history = [{ ...x, timestamp: b }];
    const { onSessionStart: T } = u;
    T && T(l, ec(p, this.history));
    const j = { passive: !0, capture: !0 };
    (this.removeListeners = Tl(
      gl(this.contextWindow, "pointermove", this.handlePointerMove, j),
      gl(this.contextWindow, "pointerup", this.handlePointerUp, j),
      gl(this.contextWindow, "pointercancel", this.handlePointerUp, j)
    )),
      m && this.startScrollTracking(m);
  }
  startScrollTracking(l) {
    let u = l.parentElement;
    for (; u; ) {
      const o = getComputedStyle(u);
      (j0.has(o.overflowX) || j0.has(o.overflowY)) &&
        this.scrollPositions.set(u, { x: u.scrollLeft, y: u.scrollTop }),
        (u = u.parentElement);
    }
    this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
      window.addEventListener("scroll", this.onElementScroll, { capture: !0 }),
      window.addEventListener("scroll", this.onWindowScroll),
      (this.removeScrollListeners = () => {
        window.removeEventListener("scroll", this.onElementScroll, {
          capture: !0,
        }),
          window.removeEventListener("scroll", this.onWindowScroll);
      });
  }
  handleScroll(l) {
    const u = this.scrollPositions.get(l);
    if (!u) return;
    const o = l === window,
      c = o
        ? { x: window.scrollX, y: window.scrollY }
        : { x: l.scrollLeft, y: l.scrollTop },
      h = { x: c.x - u.x, y: c.y - u.y };
    (h.x === 0 && h.y === 0) ||
      (o
        ? this.lastMoveEventInfo &&
          ((this.lastMoveEventInfo.point.x += h.x),
          (this.lastMoveEventInfo.point.y += h.y))
        : this.history.length > 0 &&
          ((this.history[0].x -= h.x), (this.history[0].y -= h.y)),
      this.scrollPositions.set(l, c),
      zt.update(this.updatePoint, !0));
  }
  updateHandlers(l) {
    this.handlers = l;
  }
  end() {
    this.removeListeners && this.removeListeners(),
      this.removeScrollListeners && this.removeScrollListeners(),
      this.scrollPositions.clear(),
      Pn(this.updatePoint);
  }
}
function Ks(a, l) {
  return l ? { point: l(a.point) } : a;
}
function z0(a, l) {
  return { x: a.x - l.x, y: a.y - l.y };
}
function ec({ point: a }, l) {
  return {
    point: a,
    delta: z0(a, Dg(l)),
    offset: z0(a, xA(l)),
    velocity: bA(l, 0.1),
  };
}
function xA(a) {
  return a[0];
}
function Dg(a) {
  return a[a.length - 1];
}
function bA(a, l) {
  if (a.length < 2) return { x: 0, y: 0 };
  let u = a.length - 1,
    o = null;
  const c = Dg(a);
  for (; u >= 0 && ((o = a[u]), !(c.timestamp - o.timestamp > ze(l))); ) u--;
  if (!o) return { x: 0, y: 0 };
  o === a[0] &&
    a.length > 2 &&
    c.timestamp - o.timestamp > ze(l) * 2 &&
    (o = a[1]);
  const h = qe(c.timestamp - o.timestamp);
  if (h === 0) return { x: 0, y: 0 };
  const d = { x: (c.x - o.x) / h, y: (c.y - o.y) / h };
  return d.x === 1 / 0 && (d.x = 0), d.y === 1 / 0 && (d.y = 0), d;
}
function SA(a, { min: l, max: u }, o) {
  return (
    l !== void 0 && a < l
      ? (a = o ? jt(l, a, o.min) : Math.max(a, l))
      : u !== void 0 && a > u && (a = o ? jt(u, a, o.max) : Math.min(a, u)),
    a
  );
}
function C0(a, l, u) {
  return {
    min: l !== void 0 ? a.min + l : void 0,
    max: u !== void 0 ? a.max + u - (a.max - a.min) : void 0,
  };
}
function TA(a, { top: l, left: u, bottom: o, right: c }) {
  return { x: C0(a.x, u, c), y: C0(a.y, l, o) };
}
function R0(a, l) {
  let u = l.min - a.min,
    o = l.max - a.max;
  return l.max - l.min < a.max - a.min && ([u, o] = [o, u]), { min: u, max: o };
}
function AA(a, l) {
  return { x: R0(a.x, l.x), y: R0(a.y, l.y) };
}
function EA(a, l) {
  let u = 0.5;
  const o = de(a),
    c = de(l);
  return (
    c > o
      ? (u = vl(l.min, l.max - o, a.min))
      : o > c && (u = vl(a.min, a.max - c, l.min)),
    nn(0, 1, u)
  );
}
function MA(a, l) {
  const u = {};
  return (
    l.min !== void 0 && (u.min = l.min - a.min),
    l.max !== void 0 && (u.max = l.max - a.min),
    u
  );
}
const zc = 0.35;
function DA(a = zc) {
  return (
    a === !1 ? (a = 0) : a === !0 && (a = zc),
    { x: O0(a, "left", "right"), y: O0(a, "top", "bottom") }
  );
}
function O0(a, l, u) {
  return { min: V0(a, l), max: V0(a, u) };
}
function V0(a, l) {
  return typeof a == "number" ? a : a[l] || 0;
}
const NA = new WeakMap();
class wA {
  constructor(l) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Wt()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = l);
  }
  start(l, { snapToCursor: u = !1, distanceThreshold: o } = {}) {
    const { presenceContext: c } = this.visualElement;
    if (c && c.isPresent === !1) return;
    const h = (b) => {
        u && this.snapToCursor(Ml(b).point), this.stopAnimation();
      },
      d = (b, T) => {
        const { drag: j, dragPropagation: D, onDragStart: U } = this.getProps();
        if (
          j &&
          !D &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = t2(j)),
          !this.openDragLock)
        )
          return;
        (this.latestPointerEvent = b),
          (this.latestPanInfo = T),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Ie((H) => {
            let X = this.getAxisMotionValue(H).get() || 0;
            if (en.test(X)) {
              const { projection: Y } = this.visualElement;
              if (Y && Y.layout) {
                const q = Y.layout.layoutBox[H];
                q && (X = de(q) * (parseFloat(X) / 100));
              }
            }
            this.originPoint[H] = X;
          }),
          U && zt.update(() => U(b, T), !1, !0),
          bc(this.visualElement, "transform");
        const { animationState: B } = this.visualElement;
        B && B.setActive("whileDrag", !0);
      },
      m = (b, T) => {
        (this.latestPointerEvent = b), (this.latestPanInfo = T);
        const {
          dragPropagation: j,
          dragDirectionLock: D,
          onDirectionLock: U,
          onDrag: B,
        } = this.getProps();
        if (!j && !this.openDragLock) return;
        const { offset: H } = T;
        if (D && this.currentDirection === null) {
          (this.currentDirection = zA(H)),
            this.currentDirection !== null && U && U(this.currentDirection);
          return;
        }
        this.updateAxis("x", T.point, H),
          this.updateAxis("y", T.point, H),
          this.visualElement.render(),
          B && zt.update(() => B(b, T), !1, !0);
      },
      g = (b, T) => {
        (this.latestPointerEvent = b),
          (this.latestPanInfo = T),
          this.stop(b, T),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null);
      },
      p = () => {
        const { dragSnapToOrigin: b } = this.getProps();
        (b || this.constraints) && this.startAnimation({ x: 0, y: 0 });
      },
      { dragSnapToOrigin: x } = this.getProps();
    this.panSession = new Mg(
      l,
      {
        onSessionStart: h,
        onStart: d,
        onMove: m,
        onSessionEnd: g,
        resumeAnimation: p,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: x,
        distanceThreshold: o,
        contextWindow: Eg(this.visualElement),
        element: this.visualElement.current,
      }
    );
  }
  stop(l, u) {
    const o = l || this.latestPointerEvent,
      c = u || this.latestPanInfo,
      h = this.isDragging;
    if ((this.cancel(), !h || !c || !o)) return;
    const { velocity: d } = c;
    this.startAnimation(d);
    const { onDragEnd: m } = this.getProps();
    m && zt.postRender(() => m(o, c));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: l, animationState: u } = this.visualElement;
    l && (l.isAnimationBlocked = !1), this.endPanSession();
    const { dragPropagation: o } = this.getProps();
    !o &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      u && u.setActive("whileDrag", !1);
  }
  endPanSession() {
    this.panSession && this.panSession.end(), (this.panSession = void 0);
  }
  updateAxis(l, u, o) {
    const { drag: c } = this.getProps();
    if (!o || !Fs(l, c, this.currentDirection)) return;
    const h = this.getAxisMotionValue(l);
    let d = this.originPoint[l] + o[l];
    this.constraints &&
      this.constraints[l] &&
      (d = SA(d, this.constraints[l], this.elastic[l])),
      h.set(d);
  }
  resolveConstraints() {
    var h;
    const { dragConstraints: l, dragElastic: u } = this.getProps(),
      o =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (h = this.visualElement.projection) == null
          ? void 0
          : h.layout,
      c = this.constraints;
    l && ui(l)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : l && o
      ? (this.constraints = TA(o.layoutBox, l))
      : (this.constraints = !1),
      (this.elastic = DA(u)),
      c !== this.constraints &&
        !ui(l) &&
        o &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Ie((d) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(d) &&
            (this.constraints[d] = MA(o.layoutBox[d], this.constraints[d]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: l, onMeasureDragConstraints: u } = this.getProps();
    if (!l || !ui(l)) return !1;
    const o = l.current,
      { projection: c } = this.visualElement;
    if (!c || !c.layout) return !1;
    c.root && ((c.root.scroll = void 0), c.root.updateScroll());
    const h = j2(o, c.root, this.visualElement.getTransformPagePoint());
    let d = AA(c.layout.layoutBox, h);
    if (u) {
      const m = u(D2(d));
      (this.hasMutatedConstraints = !!m), m && (d = Ky(m));
    }
    return d;
  }
  startAnimation(l) {
    const {
        drag: u,
        dragMomentum: o,
        dragElastic: c,
        dragTransition: h,
        dragSnapToOrigin: d,
        onDragTransitionEnd: m,
      } = this.getProps(),
      g = this.constraints || {},
      p = Ie((x) => {
        if (!Fs(x, u, this.currentDirection)) return;
        let b = (g && g[x]) || {};
        (d === !0 || d === x) && (b = { min: 0, max: 0 });
        const T = c ? 200 : 1e6,
          j = c ? 40 : 1e7,
          D = {
            type: "inertia",
            velocity: o ? l[x] : 0,
            bounceStiffness: T,
            bounceDamping: j,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...h,
            ...b,
          };
        return this.startAxisValueAnimation(x, D);
      });
    return Promise.all(p).then(m);
  }
  startAxisValueAnimation(l, u) {
    const o = this.getAxisMotionValue(l);
    return (
      bc(this.visualElement, l), o.start(Wc(l, o, 0, u, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Ie((l) => this.getAxisMotionValue(l).stop());
  }
  getAxisMotionValue(l) {
    const u = `_drag${l.toUpperCase()}`,
      c = this.visualElement.getProps()[u];
    return (
      c ||
      this.visualElement.getValue(l, this.visualElement.latestValues[l] ?? 0)
    );
  }
  snapToCursor(l) {
    Ie((u) => {
      const { drag: o } = this.getProps();
      if (!Fs(u, o, this.currentDirection)) return;
      const { projection: c } = this.visualElement,
        h = this.getAxisMotionValue(u);
      if (c && c.layout) {
        const { min: d, max: m } = c.layout.layoutBox[u],
          g = h.get() || 0;
        h.set(l[u] - jt(d, m, 0.5) + g);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: l, dragConstraints: u } = this.getProps(),
      { projection: o } = this.visualElement;
    if (!ui(u) || !o || !this.constraints) return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    Ie((d) => {
      const m = this.getAxisMotionValue(d);
      if (m && this.constraints !== !1) {
        const g = m.get();
        c[d] = EA({ min: g, max: g }, this.constraints[d]);
      }
    });
    const { transformTemplate: h } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = h ? h({}, "") : "none"),
      o.root && o.root.updateScroll(),
      o.updateLayout(),
      (this.constraints = !1),
      this.resolveConstraints(),
      Ie((d) => {
        if (!Fs(d, l, null)) return;
        const m = this.getAxisMotionValue(d),
          { min: g, max: p } = this.constraints[d];
        m.set(jt(g, p, c[d]));
      }),
      this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current) return;
    NA.set(this.visualElement, this);
    const l = this.visualElement.current,
      u = gl(l, "pointerdown", (p) => {
        const { drag: x, dragListener: b = !0 } = this.getProps(),
          T = p.target,
          j = T !== l && s2(T);
        x && b && !j && this.start(p);
      });
    let o;
    const c = () => {
        const { dragConstraints: p } = this.getProps();
        ui(p) &&
          p.current &&
          ((this.constraints = this.resolveRefConstraints()),
          o ||
            (o = jA(l, p.current, () =>
              this.scalePositionWithinConstraints()
            )));
      },
      { projection: h } = this.visualElement,
      d = h.addEventListener("measure", c);
    h && !h.layout && (h.root && h.root.updateScroll(), h.updateLayout()),
      zt.read(c);
    const m = Sl(window, "resize", () => this.scalePositionWithinConstraints()),
      g = h.addEventListener(
        "didUpdate",
        ({ delta: p, hasLayoutChanged: x }) => {
          this.isDragging &&
            x &&
            (Ie((b) => {
              const T = this.getAxisMotionValue(b);
              T &&
                ((this.originPoint[b] += p[b].translate),
                T.set(T.get() + p[b].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      m(), u(), d(), g && g(), o && o();
    };
  }
  getProps() {
    const l = this.visualElement.getProps(),
      {
        drag: u = !1,
        dragDirectionLock: o = !1,
        dragPropagation: c = !1,
        dragConstraints: h = !1,
        dragElastic: d = zc,
        dragMomentum: m = !0,
      } = l;
    return {
      ...l,
      drag: u,
      dragDirectionLock: o,
      dragPropagation: c,
      dragConstraints: h,
      dragElastic: d,
      dragMomentum: m,
    };
  }
}
function _0(a) {
  let l = !0;
  return () => {
    if (l) {
      l = !1;
      return;
    }
    a();
  };
}
function jA(a, l, u) {
  const o = Gp(a, _0(u)),
    c = Gp(l, _0(u));
  return () => {
    o(), c();
  };
}
function Fs(a, l, u) {
  return (l === !0 || l === a) && (u === null || u === a);
}
function zA(a, l = 10) {
  let u = null;
  return Math.abs(a.y) > l ? (u = "y") : Math.abs(a.x) > l && (u = "x"), u;
}
class CA extends $n {
  constructor(l) {
    super(l),
      (this.removeGroupControls = Ge),
      (this.removeListeners = Ge),
      (this.controls = new wA(l));
  }
  mount() {
    const { dragControls: l } = this.node.getProps();
    l && (this.removeGroupControls = l.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Ge);
  }
  update() {
    const { dragControls: l } = this.node.getProps(),
      { dragControls: u } = this.node.prevProps || {};
    l !== u &&
      (this.removeGroupControls(),
      l && (this.removeGroupControls = l.subscribe(this.controls)));
  }
  unmount() {
    this.removeGroupControls(),
      this.removeListeners(),
      this.controls.isDragging || this.controls.endPanSession();
  }
}
const nc = (a) => (l, u) => {
  a && zt.update(() => a(l, u), !1, !0);
};
class RA extends $n {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Ge);
  }
  onPointerDown(l) {
    this.session = new Mg(l, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Eg(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: l,
      onPanStart: u,
      onPan: o,
      onPanEnd: c,
    } = this.node.getProps();
    return {
      onSessionStart: nc(l),
      onStart: nc(u),
      onMove: nc(o),
      onEnd: (h, d) => {
        delete this.session, c && zt.postRender(() => c(h, d));
      },
    };
  }
  mount() {
    this.removePointerDownListener = gl(this.node.current, "pointerdown", (l) =>
      this.onPointerDown(l)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
let ac = !1;
class OA extends G.Component {
  componentDidMount() {
    const {
        visualElement: l,
        layoutGroup: u,
        switchLayoutGroup: o,
        layoutId: c,
      } = this.props,
      { projection: h } = l;
    h &&
      (u.group && u.group.add(h),
      o && o.register && c && o.register(h),
      ac && h.root.didUpdate(),
      h.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }),
      h.setOptions({
        ...h.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove(),
      })),
      (no.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(l) {
    const {
        layoutDependency: u,
        visualElement: o,
        drag: c,
        isPresent: h,
      } = this.props,
      { projection: d } = o;
    return (
      d &&
        ((d.isPresent = h),
        l.layoutDependency !== u &&
          d.setOptions({ ...d.options, layoutDependency: u }),
        (ac = !0),
        c || l.layoutDependency !== u || u === void 0 || l.isPresent !== h
          ? d.willUpdate()
          : this.safeToRemove(),
        l.isPresent !== h &&
          (h
            ? d.promote()
            : d.relegate() ||
              zt.postRender(() => {
                const m = d.getStack();
                (!m || !m.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { visualElement: l, layoutAnchor: u } = this.props,
      { projection: o } = l;
    o &&
      ((o.options.layoutAnchor = u),
      o.root.didUpdate(),
      Ic.postRender(() => {
        !o.currentAnimation && o.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: l,
        layoutGroup: u,
        switchLayoutGroup: o,
      } = this.props,
      { projection: c } = l;
    (ac = !0),
      c &&
        (c.scheduleCheckAfterUnmount(),
        u && u.group && u.group.remove(c),
        o && o.deregister && o.deregister(c));
  }
  safeToRemove() {
    const { safeToRemove: l } = this.props;
    l && l();
  }
  render() {
    return null;
  }
}
function Ng(a) {
  const [l, u] = pg(),
    o = G.useContext(Vc);
  return v.jsx(OA, {
    ...a,
    layoutGroup: o,
    switchLayoutGroup: G.useContext(Tg),
    isPresent: l,
    safeToRemove: u,
  });
}
const VA = {
  pan: { Feature: RA },
  drag: { Feature: CA, ProjectionNode: mg, MeasureLayout: Ng },
};
function U0(a, l, u) {
  const { props: o } = a;
  a.animationState &&
    o.whileHover &&
    a.animationState.setActive("whileHover", u === "Start");
  const c = "onHover" + u,
    h = o[c];
  h && zt.postRender(() => h(l, Ml(l)));
}
class _A extends $n {
  mount() {
    const { current: l } = this.node;
    l &&
      (this.unmount = n2(
        l,
        (u, o) => (U0(this.node, o, "Start"), (c) => U0(this.node, c, "End"))
      ));
  }
  unmount() {}
}
class UA extends $n {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let l = !1;
    try {
      l = this.node.current.matches(":focus-visible");
    } catch {
      l = !0;
    }
    !l ||
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
    this.unmount = Tl(
      Sl(this.node.current, "focus", () => this.onFocus()),
      Sl(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
function B0(a, l, u) {
  const { props: o } = a;
  if (a.current instanceof HTMLButtonElement && a.current.disabled) return;
  a.animationState &&
    o.whileTap &&
    a.animationState.setActive("whileTap", u === "Start");
  const c = "onTap" + (u === "End" ? "" : u),
    h = o[c];
  h && zt.postRender(() => h(l, Ml(l)));
}
class BA extends $n {
  mount() {
    const { current: l } = this.node;
    if (!l) return;
    const { globalTapTarget: u, propagate: o } = this.node.props;
    this.unmount = u2(
      l,
      (c, h) => (
        B0(this.node, h, "Start"),
        (d, { success: m }) => B0(this.node, d, m ? "End" : "Cancel")
      ),
      {
        useGlobalTarget: u,
        stopPropagation: (o == null ? void 0 : o.tap) === !1,
      }
    );
  }
  unmount() {}
}
const Cc = new WeakMap(),
  ic = new WeakMap(),
  LA = (a) => {
    const l = Cc.get(a.target);
    l && l(a);
  },
  HA = (a) => {
    a.forEach(LA);
  };
function YA({ root: a, ...l }) {
  const u = a || document;
  ic.has(u) || ic.set(u, {});
  const o = ic.get(u),
    c = JSON.stringify(l);
  return o[c] || (o[c] = new IntersectionObserver(HA, { root: a, ...l })), o[c];
}
function qA(a, l, u) {
  const o = YA(l);
  return (
    Cc.set(a, u),
    o.observe(a),
    () => {
      Cc.delete(a), o.unobserve(a);
    }
  );
}
const GA = { some: 0, all: 1 };
class XA extends $n {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    var g;
    (g = this.stopObserver) == null || g.call(this);
    const { viewport: l = {} } = this.node.getProps(),
      { root: u, margin: o, amount: c = "some", once: h } = l,
      d = {
        root: u ? u.current : void 0,
        rootMargin: o,
        threshold: typeof c == "number" ? c : GA[c],
      },
      m = (p) => {
        const { isIntersecting: x } = p;
        if (
          this.isInView === x ||
          ((this.isInView = x), h && !x && this.hasEnteredView)
        )
          return;
        x && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", x);
        const { onViewportEnter: b, onViewportLeave: T } = this.node.getProps(),
          j = x ? b : T;
        j && j(p);
      };
    this.stopObserver = qA(this.node.current, d, m);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: l, prevProps: u } = this.node;
    ["amount", "margin", "root"].some(kA(l, u)) && this.startObserver();
  }
  unmount() {
    var l;
    (l = this.stopObserver) == null || l.call(this),
      (this.hasEnteredView = !1),
      (this.isInView = !1);
  }
}
function kA({ viewport: a = {} }, { viewport: l = {} } = {}) {
  return (u) => a[u] !== l[u];
}
const ZA = {
    inView: { Feature: XA },
    tap: { Feature: BA },
    focus: { Feature: UA },
    hover: { Feature: _A },
  },
  QA = { layout: { ProjectionNode: mg, MeasureLayout: Ng } },
  KA = { ...yA, ...ZA, ...VA, ...QA },
  FA = fA(KA, dA),
  It = FA;
function JA() {
  const [a, l] = G.useState(!1),
    [u, o] = G.useState(!1);
  G.useEffect(() => {
    const h = () => {
      window.scrollY > 20 ? o(!0) : o(!1);
    };
    return (
      window.addEventListener("scroll", h),
      () => window.removeEventListener("scroll", h)
    );
  }, []);
  const c = [
    { name: "About", href: "#about" },
    { name: "How to Buy", href: "#how-to-buy" },
    // { name: "Calculator", href: "#calculator" },
    { name: "Tokenomics", href: "#tokenomics" },
  ];
  return v.jsxs("header", {
    id: "app-header",
    className: `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      u
        ? "bg-white/80 backdrop-blur-md border-b border-gray-100 py-3 shadow-sm"
        : "bg-transparent py-5"
    }`,
    children: [
      v.jsx("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: v.jsxs("div", {
          className: "flex items-center justify-between",
          children: [
            v.jsxs("a", {
              href: "#",
              className: "flex items-center gap-3 group",
              children: [
                v.jsxs("div", {
                  className: "relative",
                  children: [
                    v.jsx("div", {
                      className:
                        "absolute -inset-1 bg-amber-400/20 rounded-full blur-sm group-hover:bg-amber-400/40 transition duration-300",
                    }),
                    v.jsx("img", {
                      src: Ct.logoUrl,
                      alt: "The Delusional Bull Logo",
                      className:
                        "relative h-11 w-11 rounded-full object-cover border-2 border-[#D4AF37] group-hover:scale-105 transition duration-300",
                      referrerPolicy: "no-referrer",
                    }),
                  ],
                }),
                v.jsxs("div", {
                  className: "flex flex-col",
                  children: [
                    v.jsx("span", {
                      className:
                        "font-serif font-bold italic tracking-tight text-zinc-900 text-xl leading-tight group-hover:text-[#D4AF37] transition-colors",
                      children: "THE Delusional Bull",
                    }),
                    v.jsx("span", {
                      className:
                        "font-mono text-[10px] text-zinc-500 tracking-widest uppercase",
                      children: Ct.ticker,
                    }),
                  ],
                }),
              ],
            }),
            v.jsx("nav", {
              className: "hidden md:flex items-center gap-8",
              children: c.map((h) =>
                v.jsx(
                  "a",
                  {
                    href: h.href,
                    className:
                      "font-sans font-semibold text-sm text-zinc-600 hover:text-[#D4AF37] transition-colors tracking-wide relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:height-[2px] after:bg-[#D4AF37] after:transition-all hover:after:w-full",
                    children: h.name,
                  },
                  h.name
                )
              ),
            }),
            v.jsxs("div", {
              className: "hidden md:flex items-center gap-4",
              children: [
                v.jsx("a", {
                  href: Ct.telegramUrl,
                  target: "_blank",
                  rel: "noreferrer",
                  className:
                    "px-4 py-2 rounded-full border border-zinc-200 hover:border-[#D4AF37] text-xs font-mono font-bold text-zinc-700 hover:text-[#D4AF37] transition duration-300",
                  children: "Telegram",
                }),
                v.jsxs("a", {
                  href: Ct.pumpFunUrl,
                  target: "_blank",
                  rel: "noreferrer",
                  className:
                    "flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-black text-white hover:bg-[#D4AF37] hover:scale-105 active:scale-95 text-xs font-sans font-bold transition duration-300 shadow-sm",
                  children: [
                    "Buy on Uniswap",
                    v.jsx(lc, { className: "h-3.5 w-3.5" }),
                  ],
                }),
              ],
            }),
            v.jsx("div", {
              className: "md:hidden",
              children: v.jsx("button", {
                onClick: () => l(!a),
                className: "text-zinc-800 hover:text-amber-600 p-1",
                "aria-label": "Toggle menu",
                children: a
                  ? v.jsx(Kx, { className: "h-6 w-6" })
                  : v.jsx(wx, { className: "h-6 w-6" }),
              }),
            }),
          ],
        }),
      }),
      v.jsx(YT, {
        children:
          a &&
          v.jsx(It.div, {
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            exit: { opacity: 0, height: 0 },
            transition: { duration: 0.2 },
            className:
              "md:hidden bg-white border-b border-gray-100 overflow-hidden shadow-lg",
            children: v.jsxs("div", {
              className: "px-4 pt-2 pb-6 space-y-3",
              children: [
                c.map((h) =>
                  v.jsx(
                    "a",
                    {
                      href: h.href,
                      onClick: () => l(!1),
                      className:
                        "block px-3 py-2.5 rounded-lg text-base font-semibold text-zinc-700 hover:text-[#D4AF37] hover:bg-zinc-50 transition",
                      children: h.name,
                    },
                    h.name
                  )
                ),
                v.jsxs("div", {
                  className: "pt-4 flex flex-col gap-3",
                  children: [
                    v.jsx("a", {
                      href: Ct.telegramUrl,
                      target: "_blank",
                      rel: "noreferrer",
                      className:
                        "flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-zinc-200 hover:bg-zinc-50 font-mono text-sm text-zinc-700",
                      children: "Join Telegram Cult",
                    }),
                    v.jsxs("a", {
                      href: Ct.pumpFunUrl,
                      target: "_blank",
                      rel: "noreferrer",
                      className:
                        "flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-black text-white font-sans font-bold text-sm hover:bg-[#D4AF37]",
                      children: [
                        "Buy on Uniswap",
                        v.jsx(lc, { className: "h-4 w-4" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
      }),
    ],
  });
}
function WA() {
  const [a, l] = G.useState(!1),
    u = () => {
      navigator.clipboard.writeText(Ct.contractAddress),
        l(!0),
        setTimeout(() => l(!1), 2e3);
    };
  return v.jsxs("section", {
    className:
      "relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#FAF9F6] via-white to-[#F5F5F0]",
    children: [
      v.jsx("div", {
        className:
          "absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none",
      }),
      v.jsx("div", {
        className: "absolute inset-0 opacity-40 pointer-events-none",
        style: {
          backgroundImage:
            "radial-gradient(circle at 50% 50%, #F0EAD6 0%, transparent 70%)",
        },
      }),
      v.jsx("div", {
        className:
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none",
      }),
      v.jsxs("div", {
        className:
          "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center",
        children: [
          v.jsxs(It.div, {
            initial: { opacity: 0, y: 15 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            className:
              "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-mono text-zinc-600 mb-8 shadow-sm",
            children: [
              v.jsxs("span", {
                className: "relative flex h-2 w-2",
                children: [
                  v.jsx("span", {
                    className:
                      "animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75",
                  }),
                  v.jsx("span", {
                    className:
                      "relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]",
                  }),
                ],
              }),
              "THE MEMECOIN SUPERCYCLE IS HERE",
            ],
          }),
          v.jsxs(It.h1, {
            initial: { opacity: 0, y: 15 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.1 },
            className:
              "text-4xl sm:text-6xl md:text-8xl font-serif font-bold italic tracking-tight text-[#1A1A1A] mb-3",
            children: [
              "THE ",
              v.jsx("span", {
                className:
                  "inline-block pl-5 pr-12 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B89420]",
                children: "Delusional",
              }),
              "  BULL",
            ],
          }),
          v.jsxs(It.p, {
            initial: { opacity: 0, y: 15 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.2 },
            className:
              "text-lg sm:text-2xl font-mono text-[#D4AF37] font-bold mb-8 tracking-widest",
            children: [Ct.ticker, " — COMMUNITY > UTILITY"],
          }),
          v.jsxs(It.div, {
            initial: { opacity: 0, scale: 0.95 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 0.8, delay: 0.3 },
            className:
              "relative max-w-lg w-full aspect-square rounded-3xl overflow-hidden border-4 border-white shadow-2xl mb-10 group",
            children: [
              v.jsx("div", {
                className:
                  "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10",
              }),
              v.jsx("img", {
                src: Ct.logoUrl,
                alt: "The Delusional Bull Logo",
                className:
                  "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out",
                referrerPolicy: "no-referrer",
              }),
              v.jsx("div", {
                className: "absolute top-4 right-4 z-20",
                children: v.jsxs(It.a, {
                  href: Ct.telegramUrl,
                  target: "_blank",
                  rel: "noreferrer",
                  className:
                    "relative flex items-center justify-center h-12 w-12 rounded-full bg-black text-white shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 group/tg",
                  whileHover: { scale: 1.15 },
                  title: "Join Our Telegram",
                  children: [
                    v.jsx("span", {
                      className:
                        "absolute -inset-1.5 rounded-full bg-black/20 animate-ping pointer-events-none",
                    }),
                    v.jsx("span", {
                      className:
                        "absolute -inset-3 rounded-full bg-black/10 animate-pulse pointer-events-none",
                    }),
                    v.jsx(sc, {
                      className:
                        "h-5 w-5 fill-[#D4AF37] text-[#D4AF37] relative z-10",
                    }),
                    v.jsx("span", {
                      className:
                        "absolute right-14 bg-black text-[#D4AF37] text-xs font-mono py-1.5 px-3 rounded-md shadow-lg opacity-0 group-hover/tg:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap",
                      children: "Join Cult Telegram",
                    }),
                  ],
                }),
              }),
              v.jsx("div", {
                className:
                  "absolute bottom-4 left-4 z-20 bg-black/80 backdrop-blur-sm border border-white/10 px-3.5 py-2 rounded-xl",
                children: v.jsxs("span", {
                  className:
                    "text-xs font-mono font-bold text-white tracking-wider flex items-center gap-1.5",
                  children: [
                    v.jsx(Oc, {
                      className: "h-3.5 w-3.5 text-[#D4AF37] fill-[#D4AF37]",
                    }),
                    "MURAD CHAD META",
                  ],
                }),
              }),
            ],
          }),
          v.jsx(It.div, {
            initial: { opacity: 0, y: 15 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.4 },
            className:
              "w-full max-w-md bg-[#F5F5F0] border-2 border-dashed border-gray-300 rounded-3xl p-5 mb-8 shadow-sm",
            children: v.jsxs("div", {
              className: "flex flex-col gap-2",
              children: [
                v.jsx("span", {
                  className:
                    "text-[10px] font-mono text-gray-400 uppercase tracking-widest text-center",
                  children: "Ethereum Contract Address",
                }),
                v.jsxs("div", {
                  className:
                    "flex items-center justify-between gap-3 bg-white border border-gray-200 p-3 rounded-xl shadow-inner",
                  children: [
                    v.jsx("code", {
                      className:
                        "font-mono text-xs sm:text-sm text-zinc-800 font-bold select-all truncate",
                      children: Ct.contractAddress,
                    }),
                    v.jsx("button", {
                      onClick: u,
                      className:
                        "flex items-center justify-center p-2 rounded-lg bg-gray-50 hover:bg-zinc-100 text-[#D4AF37] transition border border-gray-100",
                      title: "Copy Address",
                      children: a
                        ? v.jsx(H0, {
                            className: "h-4 w-4 text-emerald-600 font-bold",
                          })
                        : v.jsx(q0, { className: "h-4 w-4" }),
                    }),
                  ],
                }),
              ],
            }),
          }),
          v.jsxs(It.div, {
            initial: { opacity: 0, y: 15 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.5 },
            className:
              "flex flex-col sm:flex-row items-center gap-4 w-full justify-center",
            children: [
              v.jsxs("a", {
                href: Ct.pumpFunUrl,
                target: "_blank",
                rel: "noreferrer",
                className:
                  "w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-black text-white hover:bg-zinc-800 font-sans font-bold text-base rounded-full transition-all duration-300 shadow-lg hover:scale-105",
                children: [
                  "Buy on Uniswap",
                  v.jsx(px, { className: "h-5 w-5 text-[#D4AF37]" }),
                ],
              }),
              v.jsxs("a", {
                href: Ct.telegramUrl,
                target: "_blank",
                rel: "noreferrer",
                className:
                  "w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-[#D4AF37] text-white hover:bg-[#bfa232] font-sans font-bold text-base rounded-full transition-all duration-300 shadow-lg hover:scale-105",
                children: [
                  v.jsx(sc, { className: "h-5 w-5 fill-white" }),
                  "Join Telegram",
                ],
              }),
              v.jsxs("a", {
                href: Ct.twitterUrl,
                target: "_blank",
                rel: "noreferrer",
                className:
                  "w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-zinc-200 hover:border-[#D4AF37] text-zinc-800 font-sans font-bold text-base rounded-full transition-all duration-300 hover:scale-105",
                children: [
                  v.jsx(X0, {
                    className: "h-5 w-5 fill-zinc-800 text-zinc-800",
                  }),
                  "Follow @muradoneth",
                ],
              }),
            ],
          }),
        ],
      }),
      v.jsx("div", {
        className:
          "absolute bottom-0 left-0 w-full bg-[#F5F5F0] border-y border-gray-200 py-3.5 overflow-hidden select-none pointer-events-none",
        children: v.jsx("div", {
          className:
            "flex whitespace-nowrap animate-[marquee_20s_linear_infinite] gap-10",
          children: Array(8)
            .fill(null)
            .map((o, c) =>
              v.jsxs(
                "span",
                {
                  className:
                    "text-xs font-mono font-bold text-zinc-500 tracking-widest flex items-center gap-2",
                  children: [
                    "THE Delusional Bull ",
                    v.jsx("span", {
                      className: "text-[#D4AF37]",
                      children: Ct.ticker,
                    }),
                    v.jsx("span", {
                      className: "text-emerald-600 font-extrabold",
                      children: "▲ +10,000%",
                    }),
                    v.jsx("span", {
                      className: "text-gray-300",
                      children: "•",
                    }),
                    v.jsx("span", { children: "COMMUNITY OVER UTILITY" }),
                    v.jsx("span", {
                      className: "text-gray-300",
                      children: "•",
                    }),
                    v.jsx("span", {
                      className: "text-zinc-800",
                      children: "SUPERCYCLE IS INEVITABLE",
                    }),
                    v.jsx("span", {
                      className: "text-gray-300",
                      children: "•",
                    }),
                  ],
                },
                c
              )
            ),
        }),
      }),
      v.jsx("style", {
        children: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `,
      }),
    ],
  });
}
function PA() {
  G.useEffect(() => {
    const l = document.querySelector(
      'script[src="https://platform.x.com/widgets.js"]'
    );
    if (!l) {
      const u = document.createElement("script");
      (u.src = "https://platform.x.com/widgets.js"),
        (u.async = !0),
        (u.charset = "utf-8"),
        u.addEventListener("load", () => {
          window.twttr && window.twttr.widgets && window.twttr.widgets.load();
        }),
        document.body.appendChild(u);
    } else
      window.twttr && window.twttr.widgets && window.twttr.widgets.load();
  }, []);
  const a = [
    {
      icon: v.jsx(gx, { className: "h-6 w-6 text-amber-400" }),
      title: "Princeton Chad",
      desc: "Top tier pedigree. Sharp mind translating complex financial structures to absolute meme excellence.",
    },
    {
      icon: v.jsx(Jx, { className: "h-6 w-6 text-amber-300" }),
      title: "Goldman Alum",
      desc: "Ex-Goldman Sachs, escaped the traditional matrix to lead the decentralized memetic evolution.",
    },
    {
      icon: v.jsx(G0, { className: "h-6 w-6 text-emerald-400" }),
      title: "Supercycle Prophet",
      desc: "Coined the Memecoin Supercycle theory. The undisputed pioneer who mapped out the ultimate market shift.",
    },
    {
      icon: v.jsx(Xx, { className: "h-6 w-6 text-sky-400" }),
      title: "Community Cult Leader",
      desc: "Proven over and over that strong community and diamond hands outlast and outperform mock utility.",
    },
  ];
  return v.jsxs("section", {
    id: "about",
    className: "py-20 md:py-32 relative overflow-hidden bg-white",
    children: [
      v.jsx("div", {
        className:
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full opacity-[0.03] bg-[radial-gradient(#D4AF37_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none",
      }),
      v.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
        children: [
          v.jsxs("div", {
            className: "text-center mb-16",
            children: [
              v.jsx("h2", {
                className:
                  "text-xs font-mono text-[#D4AF37] tracking-[0.2em] uppercase mb-3 font-bold",
                children: "THE PROPHECY",
              }),
              v.jsx("h3", {
                className:
                  "text-3xl sm:text-5xl font-serif font-bold italic text-zinc-900",
                children: "The Legend of the Delusional Bull",
              }),
            ],
          }),
          v.jsxs("div", {
            className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",
            children: [
              v.jsxs("div", {
                className: "lg:col-span-7 space-y-8",
                children: [
                  v.jsxs(It.div, {
                    initial: { opacity: 0, x: -20 },
                    whileInView: { opacity: 1, x: 0 },
                    viewport: { once: !0 },
                    transition: { duration: 0.6 },
                    className:
                      "relative p-8 rounded-3xl bg-white border border-gray-100 shadow-xl overflow-hidden",
                    children: [
                      v.jsx("div", {
                        className:
                          "absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#D4AF37]/5 to-transparent rounded-full pointer-events-none",
                      }),
                      v.jsxs("div", {
                        className: "flex items-center gap-3 mb-6",
                        children: [
                          v.jsx("span", {
                            className: "text-4xl",
                            children: "🐂",
                          }),
                          v.jsx("h4", {
                            className:
                              "text-2xl sm:text-3xl font-serif font-bold italic text-zinc-900",
                            children: "Murad the Delusional Bull",
                          }),
                          v.jsx("span", {
                            className: "text-3xl",
                            children: "💹",
                          }),
                        ],
                      }),
                      v.jsxs("div", {
                        className:
                          "space-y-6 text-zinc-700 font-sans leading-relaxed text-base sm:text-lg",
                        children: [
                          v.jsxs("p", {
                            className:
                              "border-l-4 border-[#D4AF37] pl-4 py-1 italic font-semibold text-zinc-800",
                            children: [
                              '"Murad Mahmudov — Delusional Bulls Will Win in the End.',
                            ],
                          }),
                          v.jsxs("p", {
                            className: "text-sm sm:text-base text-zinc-600",
                            children: [
                              "The ",
                              v.jsx("a", {
                                href: Ct.twitterUrl,
                                target: "_blank",
                                rel: "noreferrer",
                                className:
                                  "text-[#D4AF37] font-bold hover:underline",
                                children: "@muradoneth",
                              }),
                              " legend. Diamond-handed cult leader who proved community > utility. Now his own memecoin is here to run the meta.",
                            ],
                          }),
                          v.jsxs("div", {
                            className:
                              "pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-2 sm:items-center justify-between",
                            children: [
                              v.jsx("span", {
                                className:
                                  "font-mono text-xs text-zinc-400 font-bold",
                                children: "STATUS: ACCUMULATING",
                              }),
                              v.jsx("span", {
                                className:
                                  "font-serif italic font-bold text-zinc-900 text-sm tracking-wide",
                                children:
                                  "Gm frens. Time to ape the Delusional Bull.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  v.jsx("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                    children: a.map((l, u) =>
                      v.jsxs(
                        It.div,
                        {
                          initial: { opacity: 0, y: 10 },
                          whileInView: { opacity: 1, y: 0 },
                          viewport: { once: !0 },
                          transition: { duration: 0.4, delay: u * 0.1 },
                          className:
                            "p-5 rounded-2xl bg-[#F5F5F0] border border-gray-200 hover:border-[#D4AF37]/40 transition duration-300",
                          children: [
                            v.jsx("div", {
                              className:
                                "mb-3 p-2 w-fit bg-white rounded-lg border border-gray-100 shadow-sm",
                              children: l.icon,
                            }),
                            v.jsx("h5", {
                              className:
                                "font-serif font-bold italic text-zinc-900 mb-1",
                              children: l.title,
                            }),
                            v.jsx("p", {
                              className:
                                "text-xs text-zinc-500 leading-relaxed",
                              children: l.desc,
                            }),
                          ],
                        },
                        u
                      )
                    ),
                  }),
                ],
              }),
              v.jsx("div", {
                className: "lg:col-span-5",
                children: v.jsxs(It.div, {
                  initial: { opacity: 0, scale: 0.95 },
                  whileInView: { opacity: 1, scale: 1 },
                  viewport: { once: !0 },
                  transition: { duration: 0.6 },
                  className:
                    "p-8 rounded-3xl bg-black text-white shadow-2xl relative overflow-hidden",
                  children: [
                    v.jsxs(It.div, {
                      initial: { opacity: 0, y: 20 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: !0 },
                      transition: { duration: 0.6 },
                      className: "mt-20 max-w-2xl mx-auto text-center",
                      children: [
                        v.jsx("div", {
                          className: "flex justify-center twitter-embed-container",
                          dangerouslySetInnerHTML: {
                            __html:
                              '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Delusional SPX6900 Aeons Will Win in the End.<br><br>Join us.<br><br>We Will Persist Forever 💹🧲 <a href="https://t.co/X3ZJxAoBys">pic.twitter.com/X3ZJxAoBys</a></p>&mdash; maddox 💹🧲 (@maddox00000) <a href="https://x.com/maddox00000/status/2042712300616872382?ref_src=twsrc%5Etfw">April 10, 2026</a></blockquote>',
                          },
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
          
        ],
      }),
    ],
  });
}
function $A() {
  const [a, l] = G.useState(!1),
    u = () => {
      navigator.clipboard.writeText(Ct.contractAddress),
        l(!0),
        setTimeout(() => l(!1), 2e3);
    },
    o = [
      {
        num: "01",
        icon: v.jsx(Zx, { className: "h-6 w-6 text-white" }),
        title: "Create Ethereum Wallet",
        desc: "Download MetaMask or your preferred Ethereum wallet extension from the app store or as a browser extension for free.",
      },
      {
        num: "02",
        icon: v.jsx(Tx, { className: "h-6 w-6 text-[#D4AF37]" }),
        title: "Deposit Ethereum (ETH)",
        desc: "Purchase ETH inside your wallet, or buy on an exchange (Coinbase, Binance, etc.) and transfer it directly to your Ethereum wallet address.",
      },
      {
        num: "03",
        icon: v.jsx(Rx, { className: "h-6 w-6 text-[#D4AF37]" }),
        title: "Connect to Uniswap",
        desc: "Go to Uniswap, click 'Connect Wallet', and connect your extension. Make sure you are on the official app.uniswap.org domain.",
      },
      {
        num: "04",
        icon: v.jsx(hx, { className: "h-6 w-6 text-[#D4AF37]" }),
        title: "Swap ETH for $MURAD",
        desc: "Search for $MURAD or paste our official Contract Address below. Select how much ETH you want to trade, click swap, and hold with diamond hooves!",
      },
    ];
  return v.jsxs("section", {
    id: "how-to-buy",
    className:
      "py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-white to-[#FAF9F5]",
    children: [
      v.jsx("div", {
        className:
          "absolute top-0 bottom-0 left-1/2 w-[1px] bg-gray-100 pointer-events-none",
      }),
      v.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
        children: [
          v.jsxs("div", {
            className: "text-center mb-16",
            children: [
              v.jsx("h2", {
                className:
                  "text-xs font-mono text-[#D4AF37] tracking-[0.2em] uppercase mb-3 font-bold",
                children: "CONVICTION GUIDE",
              }),
              v.jsx("h3", {
                className:
                  "text-3xl sm:text-5xl font-serif font-bold italic text-zinc-900",
                children: "How to Buy on Uniswap",
              }),
              v.jsx("p", {
                className:
                  "mt-4 text-zinc-600 max-w-2xl mx-auto text-sm sm:text-base font-sans",
                children:
                  "No utility, no false promises. Just standard, pure, decentralized Ethereum memecoin power. Follow these simple steps to join the Delusional Bull Supercycle.",
              }),
            ],
          }),
          v.jsx("div", {
            className:
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16",
            children: o.map((c, h) =>
              v.jsxs(
                It.div,
                {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0 },
                  transition: { duration: 0.5, delay: h * 0.1 },
                  className:
                    "relative p-6 rounded-2xl bg-white border border-gray-100 hover:border-[#D4AF37]/50 shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col justify-between",
                  children: [
                    v.jsx("div", {
                      className:
                        "absolute top-0 left-0 w-full h-1 bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-t-2xl",
                    }),
                    v.jsxs("div", {
                      children: [
                        v.jsxs("div", {
                          className: "flex items-center justify-between mb-6",
                          children: [
                            v.jsx("div", {
                              className:
                                "p-3 rounded-xl bg-black border border-[#D4AF37]/20 text-white shadow-sm",
                              children: c.icon,
                            }),
                            v.jsx("span", {
                              className:
                                "font-mono text-4xl font-extrabold text-[#D4AF37]/10 group-hover:text-[#D4AF37]/30 transition duration-300",
                              children: c.num,
                            }),
                          ],
                        }),
                        v.jsx("h4", {
                          className:
                            "text-lg font-serif font-bold italic text-zinc-900 mb-3 group-hover:text-[#D4AF37] transition-colors",
                          children: c.title,
                        }),
                        v.jsx("p", {
                          className:
                            "text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans mb-4",
                          children: c.desc,
                        }),
                      ],
                    }),
                    h === 3 &&
                      v.jsx("div", {
                        className: "pt-2 border-t border-gray-100 mt-auto",
                        children: v.jsx("span", {
                          className:
                            "text-[10px] font-mono text-[#D4AF37] tracking-wider font-bold",
                          children: "FAST SWAP READY",
                        }),
                      }),
                  ],
                },
                h
              )
            ),
          }),
          v.jsxs(It.div, {
            initial: { opacity: 0, y: 15 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            className:
              "max-w-3xl mx-auto rounded-3xl bg-black border-2 border-[#D4AF37] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-2xl",
            children: [
              v.jsx("div", {
                className:
                  "absolute -left-16 bottom-[-50px] opacity-[0.05] pointer-events-none",
                children: v.jsx("img", {
                  src: Ct.logoUrl,
                  alt: "Watermark",
                  className: "h-48 w-48 rounded-full",
                  referrerPolicy: "no-referrer",
                }),
              }),
              v.jsxs("div", {
                className: "space-y-2 text-center md:text-left z-10",
                children: [
                  v.jsxs("h4", {
                    className:
                      "text-lg font-serif font-bold italic text-white flex items-center gap-2 justify-center md:justify-start",
                    children: [
                      v.jsx("span", {
                        className: "text-[#D4AF37]",
                        children: "Ready to join",
                      }),
                    ],
                  }),
                  v.jsx("p", {
                    className: "text-xs text-zinc-400 max-w-md font-sans",
                    children:
                      "Copy this official contract address and paste it directly into Uniswap to execute your purchase securely.",
                  }),
                ],
              }),
              v.jsxs("div", {
                className:
                  "flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto z-10",
                children: [
                  v.jsxs("div", {
                    className:
                      "flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 w-full sm:w-80 justify-between",
                    children: [
                      v.jsx("code", {
                        className:
                          "font-mono text-xs text-[#D4AF37] font-bold truncate max-w-[200px] sm:max-w-none select-all",
                        children: Ct.contractAddress,
                      }),
                      v.jsx("button", {
                        onClick: u,
                        className:
                          "text-zinc-400 hover:text-white transition p-1",
                        title: "Copy Address",
                        children: a
                          ? v.jsx(H0, { className: "h-4 w-4 text-emerald-400" })
                          : v.jsx(q0, { className: "h-4 w-4" }),
                      }),
                    ],
                  }),
                  v.jsxs("a", {
                    href: Ct.pumpFunUrl,
                    target: "_blank",
                    rel: "noreferrer",
                    className:
                      "flex items-center gap-2 px-6 py-3.5 bg-[#D4AF37] hover:bg-[#bfa232] text-black font-sans font-bold text-sm rounded-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto text-center justify-center whitespace-nowrap shadow-lg shadow-[#D4AF37]/10",
                    children: [
                      "Open Uniswap",
                      v.jsx(lc, { className: "h-4 w-4" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function IA() {
  const [a, l] = G.useState(1e5),
    [u, o] = G.useState(5e7),
    c = 5e4,
    h = 1e9,
    d = u / c,
    m = c / h,
    g = u / h,
    p = a * m,
    x = a * g,
    b = x - p,
    j = ((D) =>
      D < 5e6
        ? {
            title: "Paper-Handed Goldman Banker 💼",
            color: "text-rose-300 border-rose-900/30 bg-rose-950/10",
            desc: "You sell for a 2x and return to your 9-to-5 desk. Murad is disappointed.",
          }
        : D < 5e7
        ? {
            title: "Memecoin Maxi Transition 📈",
            color: "text-amber-300 border-amber-900/30 bg-amber-950/10",
            desc: "You are learning to hold, but you still check the chart every 3 minutes. Keep training.",
          }
        : D < 25e7
        ? {
            title: "Diamond Hoof Cultist 🐂💎",
            color: "text-emerald-300 border-emerald-900/30 bg-emerald-950/10",
            desc: "You have locked your tokens. You understand community > utility. Your hooves are pure white.",
          }
        : {
            title: "PRINCETON CHAD SUPERCYCLE KING 👑💹",
            color:
              "text-[#D4AF37] border-[#D4AF37]/30 bg-[#D4AF37]/10 animate-pulse",
            desc: "Absolute legend status. You diamond-handed all the way to a billion. You prove Murad's prophecy live on stage.",
          })(u);
  
}
function t3() {
  const a = [
    {
      icon: v.jsx(Y0, { className: "h-6 w-6 text-white" }),
      title: "1,000,000,000",
      label: "Total Token Supply",
      desc: "Exactly 1 Billion $MURAD tokens minted on Ethereum. No inflation, no secondary mints.",
    },
    {
      icon: v.jsx(Bx, { className: "h-6 w-6 text-[#D4AF37]" }),
      title: "0% Buy / 0% Sell Taxes",
      label: "Zero Taxes",
      desc: "Pure decentralized token. No hidden transfer fees, no marketing wallet allocations. 100% clean.",
    },
    {
      icon: v.jsx(Oc, { className: "h-6 w-6 text-[#D4AF37]" }),
      title: "Burned Liquidity",
      label: "Liquidity Status",
      desc: "The initial liquidity pool is permanently burned. Unruggable, immortal contract configuration.",
    },
    {
      icon: v.jsx(Dx, { className: "h-6 w-6 text-[#D4AF37]" }),
      title: "Ownership Renounced",
      label: "Ownership Status",
      desc: "Contract ownership is fully renounced and mint capabilities are disabled forever.",
    },
  ];
  return v.jsxs("section", {
    id: "tokenomics",
    className:
      "py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-white to-[#FAF9F5]",
    children: [
      v.jsx("div", {
        className:
          "absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.03),transparent_70%)] pointer-events-none",
      }),
      v.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
        children: [
          v.jsxs("div", {
            className: "text-center mb-16",
            children: [
              v.jsx("h2", {
                className:
                  "text-xs font-mono text-[#D4AF37] tracking-[0.2em] uppercase mb-3 font-bold",
                children: "MATRICES",
              }),
              v.jsx("h3", {
                className:
                  "text-3xl sm:text-5xl font-serif font-bold italic text-zinc-900",
                children: "Delusional Bull Metrics",
              }),
              v.jsx("p", {
                className:
                  "mt-4 text-zinc-600 max-w-2xl mx-auto text-sm sm:text-base font-sans",
                children:
                  "Constructed with institutional financial purity. Built for maximum decentralization and long-term diamond-handing.",
              }),
            ],
          }),
          v.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
            children: a.map((l, u) =>
              v.jsx(
                It.div,
                {
                  initial: { opacity: 0, scale: 0.95 },
                  whileInView: { opacity: 1, scale: 1 },
                  viewport: { once: !0 },
                  transition: { duration: 0.5, delay: u * 0.1 },
                  className:
                    "p-6 rounded-2xl bg-white border border-gray-100 hover:border-[#D4AF37]/50 hover:shadow-xl transition duration-300 flex flex-col justify-between shadow-sm",
                  children: v.jsxs("div", {
                    children: [
                      v.jsx("div", {
                        className:
                          "inline-flex p-3 rounded-xl bg-black border border-[#D4AF37]/20 text-white mb-6",
                        children: l.icon,
                      }),
                      v.jsx("h4", {
                        className:
                          "text-xl sm:text-2xl font-serif font-bold italic text-zinc-900 mb-1",
                        children: l.title,
                      }),
                      v.jsx("p", {
                        className:
                          "text-xs font-mono text-[#D4AF37] tracking-widest uppercase mb-4 font-bold",
                        children: l.label,
                      }),
                      v.jsx("p", {
                        className:
                          "text-xs sm:text-sm text-zinc-500 leading-relaxed font-sans",
                        children: l.desc,
                      }),
                    ],
                  }),
                },
                u
              )
            ),
          }),
        ],
      }),
    ],
  });
}
function e3() {
  const a = new Date().getFullYear();
  return v.jsxs("footer", {
    className:
      "bg-[#FAF9F6] border-t border-gray-200 pt-16 pb-8 relative overflow-hidden",
    children: [
      v.jsx("div", {
        className:
          "absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none",
      }),
      v.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
        children: [
          v.jsxs("div", {
            className:
              "grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-200",
            children: [
              v.jsxs("div", {
                className: "md:col-span-5 space-y-4",
                children: [
                  v.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      v.jsx("img", {
                        src: Ct.logoUrl,
                        alt: "The Delusional Bull",
                        className:
                          "h-10 w-10 rounded-full border-2 border-[#D4AF37] object-cover",
                        referrerPolicy: "no-referrer",
                      }),
                      v.jsx("span", {
                        className:
                          "font-serif font-bold italic text-zinc-900 text-xl tracking-wide",
                        children: "THE Delusional Bull",
                      }),
                    ],
                  }),
                  v.jsx("p", {
                    className:
                      "text-sm text-zinc-600 max-w-sm leading-relaxed font-sans",
                    children:
                      "The supreme Ethereum memecoin ecosystem built on community, diamond-hand conviction, and the legendary Memecoin Supercycle theory.",
                  }),
                  v.jsxs("div", {
                    className: "flex items-center gap-3 pt-2",
                    children: [
                      v.jsx("a", {
                        href: Ct.telegramUrl,
                        target: "_blank",
                        rel: "noreferrer",
                        className:
                          "h-10 w-10 rounded-full bg-white hover:bg-zinc-50 hover:text-[#D4AF37] border border-gray-200 hover:border-[#D4AF37]/40 flex items-center justify-center text-zinc-700 transition duration-300 shadow-sm",
                        title: "Telegram Link",
                        children: v.jsx(sc, {
                          className: "h-4 w-4 fill-current",
                        }),
                      }),
                      v.jsx("a", {
                        href: Ct.twitterUrl,
                        target: "_blank",
                        rel: "noreferrer",
                        className:
                          "h-10 w-10 rounded-full bg-white hover:bg-zinc-50 hover:text-[#D4AF37] border border-gray-200 hover:border-[#D4AF37]/40 flex items-center justify-center text-zinc-700 transition duration-300 shadow-sm",
                        title: "Twitter Link",
                        children: v.jsx(X0, {
                          className: "h-4 w-4 fill-current",
                        }),
                      }),
                      v.jsxs("a", {
                        href: Ct.pumpFunUrl,
                        target: "_blank",
                        rel: "noreferrer",
                        className:
                          "px-4 h-10 rounded-full bg-black hover:bg-[#D4AF37] hover:text-white border border-zinc-900 hover:border-[#D4AF37]/30 flex items-center justify-center text-xs font-mono font-bold text-white transition duration-300 gap-1.5 shadow-sm",
                        title: "Uniswap Page",
                        children: [
                          v.jsx(Oc, {
                            className: "h-4 w-4 text-[#D4AF37] fill-[#D4AF37]",
                          }),
                          "uniswap.org",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              v.jsxs("div", {
                className: "md:col-span-3 space-y-4",
                children: [
                  v.jsx("h4", {
                    className:
                      "text-xs font-mono text-[#D4AF37] uppercase tracking-widest font-bold",
                    children: "NAVIGATION",
                  }),
                  v.jsxs("ul", {
                    className: "space-y-2.5 text-sm font-sans font-semibold",
                    children: [
                      v.jsx("li", {
                        children: v.jsx("a", {
                          href: "#about",
                          className:
                            "text-zinc-600 hover:text-[#D4AF37] transition",
                          children: "The Delusional Bull Story",
                        }),
                      }),
                      v.jsx("li", {
                        children: v.jsx("a", {
                          href: "#how-to-buy",
                          className:
                            "text-zinc-600 hover:text-[#D4AF37] transition",
                          children: "How to Buy on Uniswap",
                        }),
                      }),
                      // v.jsx("li", {
                      //   children: v.jsx("a", {
                      //     href: "#calculator",
                      //     className:
                      //       "text-zinc-600 hover:text-[#D4AF37] transition",
                      //     children: "Supercycle Simulator",
                      //   }),
                      // }),
                      v.jsx("li", {
                        children: v.jsx("a", {
                          href: "#tokenomics",
                          className:
                            "text-zinc-600 hover:text-[#D4AF37] transition",
                          children: "Cult Metrics",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              v.jsxs("div", {
                className: "md:col-span-4 space-y-4",
                children: [
                  v.jsxs("div", {
                    className: "flex items-center gap-2 text-zinc-800",
                    children: [
                      v.jsx(_x, { className: "h-4 w-4 text-[#D4AF37]" }),
                      v.jsx("h4", {
                        className:
                          "text-xs font-mono uppercase tracking-widest font-bold text-zinc-800",
                        children: "RISK WARNING",
                      }),
                    ],
                  }),
                  v.jsx("p", {
                    className:
                      "text-xs text-zinc-500 leading-relaxed font-sans",
                    children:
                      "$MURAD is a memecoin with absolutely no intrinsic value or expectation of financial return. The coin is purely for entertainment and community purposes. Cryptocurrencies are highly speculative, and market fluctuations are extreme. Always do your own research, manage your risk carefully, and remember that community is the supreme force.",
                  }),
                ],
              }),
            ],
          }),
          v.jsxs("div", {
            className:
              "pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center",
            children: [
              v.jsxs("p", {
                className: "text-xs font-mono text-zinc-500",
                children: ["© ", a, " The Delusional Bull. All rights reserved."],
              }),
              v.jsxs("div", {
                className: "flex gap-4 text-xs font-mono text-zinc-500",
                children: [
                  v.jsx("span", { children: "Powered by Ethereum Blockchain" }),
                  v.jsx("span", { children: "•" }),
                  v.jsxs("span", {
                    className:
                      "text-zinc-600 hover:text-[#D4AF37] transition cursor-pointer font-bold",
                    children: [Ct.ticker, " Cult Core"],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function n3() {
  return v.jsxs("div", {
    className:
      "min-h-screen bg-[#030712] text-zinc-100 flex flex-col selection:bg-white selection:text-black",
    children: [
      v.jsx(JA, {}),
      v.jsxs("main", {
        className: "flex-grow",
        children: [
          v.jsx(WA, {}),
          v.jsx(It.div, {
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            viewport: { once: !0, margin: "-100px" },
            transition: { duration: 0.8 },
            children: v.jsx(PA, {}),
          }),
          v.jsx(It.div, {
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            viewport: { once: !0, margin: "-100px" },
            transition: { duration: 0.8 },
            children: v.jsx($A, {}),
          }),
          v.jsx(It.div, {
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            viewport: { once: !0, margin: "-100px" },
            transition: { duration: 0.8 },
            children: v.jsx(IA, {}),
          }),
          v.jsx(It.div, {
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            viewport: { once: !0, margin: "-100px" },
            transition: { duration: 0.8 },
            children: v.jsx(t3, {}),
          }),
        ],
      }),
      v.jsx(e3, {}),
    ],
  });
}
sx.createRoot(document.getElementById("root")).render(
  v.jsx(G.StrictMode, { children: v.jsx(n3, {}) })
);
