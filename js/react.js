/** @license React v16.6.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';
(function (L, p) {
  "object" === typeof exports && "undefined" !== typeof module ? module.exports = p() : "function" === typeof define && define.amd ? define(p) : L.React = p()
})(this, function () {
  function L(a, b, c, f, n, d, e, h) {
    if (!a) {
      a = void 0;
      if (void 0 === b) a = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
      else {
        var g = [c, f, n, d, e, h],
          ta = 0;
        a = Error(b.replace(/%s/g, function () {
          return g[ta++]
        }));
        a.name = "Invariant Violation"
      }
      a.framesToPop =
        1;
      throw a;
    }
  }

  function p(a) {
    for (var b = arguments.length - 1, c = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, f = 0; f < b; f++) c += "&args[]=" + encodeURIComponent(arguments[f + 1]);
    L(!1, "Minified React error #" + a + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", c)
  }

  function r(a, b, c) {
    this.props = a;
    this.context = b;
    this.refs = ca;
    this.updater = c || da
  }

  function ea() {}

  function M(a, b, c) {
    this.props = a;
    this.context = b;
    this.refs = ca;
    this.updater =
      c || da
  }

  function u() {
    if (!v) {
      var a = d.expirationTime;
      E ? N() : E = !0;
      F(ua, a)
    }
  }

  function O() {
    var a = d,
      b = d.next;
    if (d === b) d = null;
    else {
      var c = d.previous;
      d = c.next = b;
      b.previous = c
    }
    a.next = a.previous = null;
    c = a.callback;
    b = a.expirationTime;
    a = a.priorityLevel;
    var f = k,
      n = w;
    k = a;
    w = b;
    try {
      var g = c(P)
    } finally {
      k = f, w = n
    }
    if ("function" === typeof g)
      if (g = {
          callback: g,
          priorityLevel: a,
          expirationTime: b,
          next: null,
          previous: null
        }, null === d) d = g.next = g.previous = g;
      else {
        c = null;
        a = d;
        do {
          if (a.expirationTime >= b) {
            c = a;
            break
          }
          a = a.next
        } while (a !== d);
        null === c ? c =
          d : c === d && (d = g, u());
        b = c.previous;
        b.next = c.previous = g;
        g.next = c;
        g.previous = b
      }
  }

  function Q() {
    if (-1 === m && null !== d && 1 === d.priorityLevel) {
      v = !0;
      P.didTimeout = !0;
      try {
        do O(); while (null !== d && 1 === d.priorityLevel)
      } finally {
        v = !1, null !== d ? u() : E = !1
      }
    }
  }

  function ua(a) {
    v = !0;
    P.didTimeout = a;
    try {
      if (a)
        for (; null !== d;) {
          var b = l();
          if (d.expirationTime <= b) {
            do O(); while (null !== d && d.expirationTime <= b)
          } else break
        } else if (null !== d) {
          do O(); while (null !== d && 0 < x() - l())
        }
    } finally {
      v = !1, null !== d ? u() : E = !1, Q()
    }
  }

  function fa(a, b, c) {
    var f = void 0,
      n = {},
      d = null,
      e = null;
    if (null != b)
      for (f in void 0 !== b.ref && (e = b.ref), void 0 !== b.key && (d = "" + b.key), b) ha.call(b, f) && !ia.hasOwnProperty(f) && (n[f] = b[f]);
    var h = arguments.length - 2;
    if (1 === h) n.children = c;
    else if (1 < h) {
      for (var k = Array(h), l = 0; l < h; l++) k[l] = arguments[l + 2];
      n.children = k
    }
    if (a && a.defaultProps)
      for (f in h = a.defaultProps, h) void 0 === n[f] && (n[f] = h[f]);
    return {
      $$typeof: y,
      type: a,
      key: d,
      ref: e,
      props: n,
      _owner: R.current
    }
  }

  function va(a, b) {
    return {
      $$typeof: y,
      type: a.type,
      key: b,
      ref: a.ref,
      props: a.props,
      _owner: a._owner
    }
  }

  function S(a) {
    return "object" === typeof a && null !== a && a.$$typeof === y
  }

  function wa(a) {
    var b = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + ("" + a).replace(/[=:]/g, function (a) {
      return b[a]
    })
  }

  function ja(a, b, c, f) {
    if (G.length) {
      var d = G.pop();
      d.result = a;
      d.keyPrefix = b;
      d.func = c;
      d.context = f;
      d.count = 0;
      return d
    }
    return {
      result: a,
      keyPrefix: b,
      func: c,
      context: f,
      count: 0
    }
  }

  function ka(a) {
    a.result = null;
    a.keyPrefix = null;
    a.func = null;
    a.context = null;
    a.count = 0;
    10 > G.length && G.push(a)
  }

  function T(a, b, c, f) {
    var d = typeof a;
    if ("undefined" === d || "boolean" ===
      d) a = null;
    var g = !1;
    if (null === a) g = !0;
    else switch (d) {
      case "string":
      case "number":
        g = !0;
        break;
      case "object":
        switch (a.$$typeof) {
          case y:
          case xa:
            g = !0
        }
    }
    if (g) return c(f, a, "" === b ? "." + U(a, 0) : b), 1;
    g = 0;
    b = "" === b ? "." : b + ":";
    if (Array.isArray(a))
      for (var e = 0; e < a.length; e++) {
        d = a[e];
        var h = b + U(d, e);
        g += T(d, h, c, f)
      } else if (null === a || "object" !== typeof a ? h = null : (h = la && a[la] || a["@@iterator"], h = "function" === typeof h ? h : null), "function" === typeof h)
        for (a = h.call(a), e = 0; !(d = a.next()).done;) d = d.value, h = b + U(d, e++), g += T(d, h, c, f);
      else "object" ===
        d && (c = "" + a, p("31", "[object Object]" === c ? "object with keys {" + Object.keys(a).join(", ") + "}" : c, ""));
    return g
  }

  function V(a, b, c) {
    return null == a ? 0 : T(a, "", b, c)
  }

  function U(a, b) {
    return "object" === typeof a && null !== a && null != a.key ? wa(a.key) : b.toString(36)
  }

  function ya(a, b, c) {
    a.func.call(a.context, b, a.count++)
  }

  function za(a, b, c) {
    var f = a.result,
      d = a.keyPrefix;
    a = a.func.call(a.context, b, a.count++);
    Array.isArray(a) ? W(a, f, c, function (a) {
      return a
    }) : null != a && (S(a) && (a = va(a, d + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(ma,
      "$&/") + "/") + c)), f.push(a))
  }

  function W(a, b, c, f, d) {
    var e = "";
    null != c && (e = ("" + c).replace(ma, "$&/") + "/");
    b = ja(b, e, f, d);
    V(a, za, b);
    ka(b)
  }
  var e = "function" === typeof Symbol && Symbol.for,
    y = e ? Symbol.for("react.element") : 60103,
    xa = e ? Symbol.for("react.portal") : 60106,
    q = e ? Symbol.for("react.fragment") : 60107,
    X = e ? Symbol.for("react.strict_mode") : 60108,
    Aa = e ? Symbol.for("react.profiler") : 60114,
    Ba = e ? Symbol.for("react.provider") : 60109,
    Ca = e ? Symbol.for("react.context") : 60110,
    Da = e ? Symbol.for("react.concurrent_mode") : 60111,
    Ea =
    e ? Symbol.for("react.forward_ref") : 60112,
    Fa = e ? Symbol.for("react.suspense") : 60113,
    Ga = e ? Symbol.for("react.memo") : 60115,
    Ha = e ? Symbol.for("react.lazy") : 60116,
    la = "function" === typeof Symbol && Symbol.iterator,
    na = Object.getOwnPropertySymbols,
    Ia = Object.prototype.hasOwnProperty,
    Ja = Object.prototype.propertyIsEnumerable,
    H = function () {
      try {
        if (!Object.assign) return !1;
        var a = new String("abc");
        a[5] = "de";
        if ("5" === Object.getOwnPropertyNames(a)[0]) return !1;
        var b = {};
        for (a = 0; 10 > a; a++) b["_" + String.fromCharCode(a)] = a;
        if ("0123456789" !==
          Object.getOwnPropertyNames(b).map(function (a) {
            return b[a]
          }).join("")) return !1;
        var c = {};
        "abcdefghijklmnopqrst".split("").forEach(function (a) {
          c[a] = a
        });
        return "abcdefghijklmnopqrst" !== Object.keys(Object.assign({}, c)).join("") ? !1 : !0
      } catch (f) {
        return !1
      }
    }() ? Object.assign : function (a, b) {
      if (null === a || void 0 === a) throw new TypeError("Object.assign cannot be called with null or undefined");
      var c = Object(a);
      for (var d, e = 1; e < arguments.length; e++) {
        var g = Object(arguments[e]);
        for (var k in g) Ia.call(g, k) && (c[k] = g[k]);
        if (na) {
          d = na(g);
          for (var h = 0; h < d.length; h++) Ja.call(g, d[h]) && (c[d[h]] = g[d[h]])
        }
      }
      return c
    },
    da = {
      isMounted: function (a) {
        return !1
      },
      enqueueForceUpdate: function (a, b, c) {},
      enqueueReplaceState: function (a, b, c, d) {},
      enqueueSetState: function (a, b, c, d) {}
    },
    ca = {};
  r.prototype.isReactComponent = {};
  r.prototype.setState = function (a, b) {
    "object" !== typeof a && "function" !== typeof a && null != a ? p("85") : void 0;
    this.updater.enqueueSetState(this, a, b, "setState")
  };
  r.prototype.forceUpdate = function (a) {
    this.updater.enqueueForceUpdate(this,
      a, "forceUpdate")
  };
  ea.prototype = r.prototype;
  e = M.prototype = new ea;
  e.constructor = M;
  H(e, r.prototype);
  e.isPureReactComponent = !0;
  var d = null,
    k = 3,
    m = -1,
    w = -1,
    v = !1,
    E = !1;
  e = "object" === typeof performance && "function" === typeof performance.now;
  var P = {
      timeRemaining: e ? function () {
        if (null !== d && d.expirationTime < w) return 0;
        var a = x() - performance.now();
        return 0 < a ? a : 0
      } : function () {
        if (null !== d && d.expirationTime < w) return 0;
        var a = x() - Date.now();
        return 0 < a ? a : 0
      },
      didTimeout: !1
    },
    Ka = Date,
    La = "function" === typeof setTimeout ? setTimeout :
    void 0,
    Ma = "function" === typeof clearTimeout ? clearTimeout : void 0,
    oa = "function" === typeof requestAnimationFrame ? requestAnimationFrame : void 0,
    pa = "function" === typeof cancelAnimationFrame ? cancelAnimationFrame : void 0,
    qa, ra, Y = function (a) {
      qa = oa(function (b) {
        Ma(ra);
        a(b)
      });
      ra = La(function () {
        pa(qa);
        a(l())
      }, 100)
    };
  if (e) {
    var Na = performance;
    var l = function () {
      return Na.now()
    }
  } else l = function () {
    return Ka.now()
  };
  if ("undefined" !== typeof window && window._schedMock) {
    e = window._schedMock;
    var F = e[0];
    var N = e[1];
    var x = e[2]
  } else if ("undefined" ===
    typeof window || "function" !== typeof window.addEventListener) {
    var z = null,
      A = -1,
      sa = function (a, b) {
        if (null !== z) {
          var c = z;
          z = null;
          try {
            A = b, c(a)
          } finally {
            A = -1
          }
        }
      };
    F = function (a, b) {
      -1 !== A ? setTimeout(F, 0, a, b) : (z = a, setTimeout(sa, b, !0, b), setTimeout(sa, 1073741823, !1, 1073741823))
    };
    N = function () {
      z = null
    };
    x = function () {
      return Infinity
    };
    l = function () {
      return -1 === A ? 0 : A
    }
  } else {
    "undefined" !== typeof console && ("function" !== typeof oa && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),
      "function" !== typeof pa && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));
    var t = null,
      I = !1,
      B = -1,
      C = !1,
      Z = !1,
      J = 0,
      K = 33,
      D = 33;
    x = function () {
      return J
    };
    var aa = "__reactIdleCallback$" + Math.random().toString(36).slice(2);
    window.addEventListener("message", function (a) {
      if (a.source === window && a.data === aa) {
        I = !1;
        a = t;
        var b = B;
        t = null;
        B = -1;
        var c = l(),
          d = !1;
        if (0 >= J - c)
          if (-1 !== b && b <= c) d = !0;
          else {
            C || (C = !0, Y(ba));
            t = a;
            B = b;
            return
          } if (null !==
          a) {
          Z = !0;
          try {
            a(d)
          } finally {
            Z = !1
          }
        }
      }
    }, !1);
    var ba = function (a) {
      if (null !== t) {
        Y(ba);
        var b = a - J + D;
        b < D && K < D ? (8 > b && (b = 8), D = b < K ? K : b) : K = b;
        J = a + D;
        I || (I = !0, window.postMessage(aa, "*"))
      } else C = !1
    };
    F = function (a, b) {
      t = a;
      B = b;
      Z || 0 > b ? window.postMessage(aa, "*") : C || (C = !0, Y(ba))
    };
    N = function () {
      t = null;
      I = !1;
      B = -1
    }
  }
  var Oa = 0,
    R = {
      current: null,
      currentDispatcher: null
    };
  e = {
    ReactCurrentOwner: R,
    assign: H
  };
  H(e, {
    Scheduler: {
      unstable_cancelCallback: function (a) {
        var b = a.next;
        if (null !== b) {
          if (b === a) d = null;
          else {
            a === d && (d = b);
            var c = a.previous;
            c.next =
              b;
            b.previous = c
          }
          a.next = a.previous = null
        }
      },
      unstable_now: l,
      unstable_scheduleCallback: function (a, b) {
        var c = -1 !== m ? m : l();
        if ("object" === typeof b && null !== b && "number" === typeof b.timeout) b = c + b.timeout;
        else switch (k) {
          case 1:
            b = c + -1;
            break;
          case 2:
            b = c + 250;
            break;
          case 4:
            b = c + 1073741823;
            break;
          default:
            b = c + 5E3
        }
        a = {
          callback: a,
          priorityLevel: k,
          expirationTime: b,
          next: null,
          previous: null
        };
        if (null === d) d = a.next = a.previous = a, u();
        else {
          c = null;
          var f = d;
          do {
            if (f.expirationTime > b) {
              c = f;
              break
            }
            f = f.next
          } while (f !== d);
          null === c ? c = d : c === d && (d =
            a, u());
          b = c.previous;
          b.next = c.previous = a;
          a.next = c;
          a.previous = b
        }
        return a
      },
      unstable_runWithPriority: function (a, b) {
        switch (a) {
          case 1:
          case 2:
          case 3:
          case 4:
            break;
          default:
            a = 3
        }
        var c = k,
          d = m;
        k = a;
        m = l();
        try {
          return b()
        } finally {
          k = c, m = d, Q()
        }
      },
      unstable_wrapCallback: function (a) {
        var b = k;
        return function () {
          var c = k,
            d = m;
          k = b;
          m = l();
          try {
            return a.apply(this, arguments)
          } finally {
            k = c, m = d, Q()
          }
        }
      },
      unstable_getCurrentPriorityLevel: function () {
        return k
      }
    },
    SchedulerTracing: {
      __interactionsRef: null,
      __subscriberRef: null,
      unstable_clear: function (a) {
        return a()
      },
      unstable_getCurrent: function () {
        return null
      },
      unstable_getThreadID: function () {
        return ++Oa
      },
      unstable_subscribe: function (a) {},
      unstable_trace: function (a, b, c) {
        return c()
      },
      unstable_unsubscribe: function (a) {},
      unstable_wrap: function (a) {
        return a
      }
    }
  });
  var ha = Object.prototype.hasOwnProperty,
    ia = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    },
    ma = /\/+/g,
    G = [];
  q = {
    Children: {
      map: function (a, b, c) {
        if (null == a) return a;
        var d = [];
        W(a, d, null, b, c);
        return d
      },
      forEach: function (a, b, c) {
        if (null == a) return a;
        b = ja(null, null, b, c);
        V(a, ya, b);
        ka(b)
      },
      count: function (a) {
        return V(a, function () {
          return null
        }, null)
      },
      toArray: function (a) {
        var b = [];
        W(a, b, null, function (a) {
          return a
        });
        return b
      },
      only: function (a) {
        S(a) ? void 0 : p("143");
        return a
      }
    },
    createRef: function () {
      return {
        current: null
      }
    },
    Component: r,
    PureComponent: M,
    createContext: function (a, b) {
      void 0 === b && (b = null);
      a = {
        $$typeof: Ca,
        _calculateChangedBits: b,
        _currentValue: a,
        _currentValue2: a,
        Provider: null,
        Consumer: null
      };
      a.Provider = {
        $$typeof: Ba,
        _context: a
      };
      return a.Consumer = a
    },
    forwardRef: function (a) {
      return {
        $$typeof: Ea,
        render: a
      }
    },
    lazy: function (a) {
      return {
        $$typeof: Ha,
        _ctor: a,
        _status: -1,
        _result: null
      }
    },
    memo: function (a, b) {
      return {
        $$typeof: Ga,
        type: a,
        compare: void 0 === b ? null : b
      }
    },
    Fragment: q,
    StrictMode: X,
    unstable_ConcurrentMode: Da,
    Suspense: Fa,
    unstable_Profiler: Aa,
    createElement: fa,
    cloneElement: function (a, b, d) {
      null === a || void 0 === a ? p("267", a) : void 0;
      var c = void 0,
        e = H({}, a.props),
        g = a.key,
        k = a.ref,
        h = a._owner;
      if (null != b) {
        void 0 !== b.ref && (k = b.ref, h = R.current);
        void 0 !== b.key && (g = "" + b.key);
        var l = void 0;
        a.type && a.type.defaultProps && (l =
          a.type.defaultProps);
        for (c in b) ha.call(b, c) && !ia.hasOwnProperty(c) && (e[c] = void 0 === b[c] && void 0 !== l ? l[c] : b[c])
      }
      c = arguments.length - 2;
      if (1 === c) e.children = d;
      else if (1 < c) {
        l = Array(c);
        for (var m = 0; m < c; m++) l[m] = arguments[m + 2];
        e.children = l
      }
      return {
        $$typeof: y,
        type: a.type,
        key: g,
        ref: k,
        props: e,
        _owner: h
      }
    },
    createFactory: function (a) {
      var b = fa.bind(null, a);
      b.type = a;
      return b
    },
    isValidElement: S,
    version: "16.6.0",
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: e
  };
  q = (X = {
    default: q
  }, q) || X;
  return q.default || q
});