!(function (e, t) {
  function i(e) {
    return x.isWindow(e)
      ? e
      : 9 === e.nodeType && (e.defaultView || e.parentWindow);
  }
  function s(e) {
    if (!Ye[e]) {
      var t = x("<" + e + ">").appendTo("body"),
        i = t.css("display");
      t.remove(), ("none" !== i && "" !== i) || (i = "block"), (Ye[e] = i);
    }
    return Ye[e];
  }
  function n(e, t) {
    var i = {};
    return (
      x.each(Ke.concat.apply([], Ke.slice(0, t)), function () {
        i[this] = e;
      }),
      i
    );
  }
  function o(e, t, i, s) {
    x.isArray(t) && t.length
      ? x.each(t, function (t, n) {
          i || we.test(e)
            ? s(e, n)
            : o(
                e + "[" + ("object" == typeof n || x.isArray(n) ? t : "") + "]",
                n,
                i,
                s
              );
        })
      : i || null == t || "object" != typeof t
      ? s(e, t)
      : x.isArray(t) || x.isEmptyObject(t)
      ? s(e, "")
      : x.each(t, function (t, n) {
          o(e + "[" + t + "]", n, i, s);
        });
  }
  function a(e, i, s, n, o, r) {
    (r = r || {})[(o = o || i.dataTypes[0])] = !0;
    for (
      var l, h = e[o], c = 0, u = h ? h.length : 0, d = e === Oe;
      c < u && (d || !l);
      c++
    )
      "string" == typeof (l = h[c](i, s, n)) &&
        (r[l] ? (l = t) : (i.dataTypes.unshift(l), (l = a(e, i, s, n, l, r))));
    return (d || !l) && !r["*"] && (l = a(e, i, s, n, "*", r)), l;
  }
  function r(e) {
    return function (t, i) {
      if (("string" != typeof t && ((i = t), (t = "*")), x.isFunction(i)))
        for (
          var s, n, o = t.toLowerCase().split(Ne), a = 0, r = o.length;
          a < r;
          a++
        )
          (s = o[a]),
            (n = /^\+/.test(s)) && (s = s.substr(1) || "*"),
            (e[s] = e[s] || [])[n ? "unshift" : "push"](i);
    };
  }
  function l(e, t, i) {
    var s = "width" === t ? ve : be,
      n = "width" === t ? e.offsetWidth : e.offsetHeight;
    return "border" === i
      ? n
      : (x.each(s, function () {
          i || (n -= parseFloat(x.css(e, "padding" + this)) || 0),
            "margin" === i
              ? (n += parseFloat(x.css(e, "margin" + this)) || 0)
              : (n -= parseFloat(x.css(e, "border" + this + "Width")) || 0);
        }),
        n);
  }
  function h(e, t) {
    t.src
      ? x.ajax({ url: t.src, async: !1, dataType: "script" })
      : x.globalEval(t.text || t.textContent || t.innerHTML || ""),
      t.parentNode && t.parentNode.removeChild(t);
  }
  function c(e, t) {
    if (1 === t.nodeType) {
      var i = t.nodeName.toLowerCase();
      t.clearAttributes(),
        t.mergeAttributes(e),
        "object" === i
          ? (t.outerHTML = e.outerHTML)
          : "input" !== i || ("checkbox" !== e.type && "radio" !== e.type)
          ? "option" === i
            ? (t.selected = e.defaultSelected)
            : ("input" !== i && "textarea" !== i) ||
              (t.defaultValue = e.defaultValue)
          : (e.checked && (t.defaultChecked = t.checked = e.checked),
            t.value !== e.value && (t.value = e.value)),
        t.removeAttribute(x.expando);
    }
  }
  function u(e, t) {
    if (1 === t.nodeType && x.hasData(e)) {
      var i = x.expando,
        s = x.data(e),
        n = x.data(t, s);
      if ((s = s[i])) {
        var o = s.events;
        if (((n = n[i] = x.extend({}, s)), o))
          for (var a in (delete n.handle, (n.events = {}), o))
            for (var r = 0, l = o[a].length; r < l; r++)
              x.event.add(t, a, o[a][r], o[a][r].data);
      }
    }
  }
  function d(e, t) {
    return x.nodeName(e, "table")
      ? e.getElementsByTagName("tbody")[0] ||
          e.appendChild(e.ownerDocument.createElement("tbody"))
      : e;
  }
  function p(e, t, i) {
    if (x.isFunction(t))
      return x.grep(e, function (e, s) {
        return !!t.call(e, s, e) === i;
      });
    if (t.nodeType)
      return x.grep(e, function (e, s) {
        return (e === t) === i;
      });
    if ("string" == typeof t) {
      var s = x.grep(e, function (e) {
        return 1 === e.nodeType;
      });
      if (Q.test(t)) return x.filter(t, s, !i);
      t = x.filter(t, s);
    }
    return x.grep(e, function (e, s) {
      return x.inArray(e, t) >= 0 === i;
    });
  }
  function f(e) {
    return !e || !e.parentNode || 11 === e.parentNode.nodeType;
  }
  function g(e, t) {
    return (e && "*" !== e ? e + "." : "") + t.replace(A, "`").replace(O, "&");
  }
  function m(e) {
    var t,
      i,
      s,
      n,
      o,
      a,
      r,
      l,
      h,
      c,
      u,
      d,
      p = [],
      f = [],
      g = x._data(this, F);
    if (
      ("function" == typeof g && (g = g.events),
      e.liveFired !== this &&
        g &&
        g.live &&
        !e.target.disabled &&
        (!e.button || "click" !== e.type))
    ) {
      e.namespace &&
        (u = new RegExp(
          "(^|\\.)" + e.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)"
        )),
        (e.liveFired = this);
      var m = g.live.slice(0);
      for (r = 0; r < m.length; r++)
        (o = m[r]).origType.replace(E, "") === e.type
          ? f.push(o.selector)
          : m.splice(r--, 1);
      for (
        l = 0, h = (n = x(e.target).closest(f, e.currentTarget)).length;
        l < h;
        l++
      )
        for (c = n[l], r = 0; r < m.length; r++)
          (o = m[r]),
            c.selector !== o.selector ||
              (u && !u.test(o.namespace)) ||
              ((a = c.elem),
              (s = null),
              ("mouseenter" !== o.preType && "mouseleave" !== o.preType) ||
                ((e.type = o.preType),
                (s = x(e.relatedTarget).closest(o.selector)[0])),
              (!s || s !== a) &&
                p.push({ elem: a, handleObj: o, level: c.level }));
      for (
        l = 0, h = p.length;
        l < h &&
        ((n = p[l]), !(i && n.level > i)) &&
        ((e.currentTarget = n.elem),
        (e.data = n.handleObj.data),
        (e.handleObj = n.handleObj),
        (!1 !== (d = n.handleObj.origHandler.apply(n.elem, arguments)) &&
          !e.isPropagationStopped()) ||
          ((i = n.level),
          !1 === d && (t = !1),
          !e.isImmediatePropagationStopped()));
        l++
      );
      return t;
    }
  }
  function v(e, t, i) {
    return (i[0].type = e), x.event.handle.apply(t, i);
  }
  function b() {
    return !0;
  }
  function y() {
    return !1;
  }
  function _(e, i, s) {
    if (s === t && 1 === e.nodeType)
      if ("string" == typeof (s = e.getAttribute("data-" + i))) {
        try {
          s =
            "true" === s ||
            ("false" !== s &&
              ("null" === s
                ? null
                : x.isNaN(s)
                ? k.test(s)
                  ? x.parseJSON(s)
                  : s
                : parseFloat(s)));
        } catch (e) {}
        x.data(e, i, s);
      } else s = t;
    return s;
  }
  var w = e.document,
    x = (function () {
      function i() {
        if (!r.isReady) {
          try {
            w.documentElement.doScroll("left");
          } catch (e) {
            return void setTimeout(i, 1);
          }
          r.ready();
        }
      }
      var s,
        n,
        o,
        a,
        r = function (e, t) {
          return new r.fn.init(e, t, s);
        },
        l = e.jQuery,
        h = e.$,
        c = /^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,
        u = /\S/,
        d = /^\s+/,
        p = /\s+$/,
        f = /\d/,
        g = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
        m = /^[\],:{}\s]*$/,
        v = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
        b = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        y = /(?:^|:|,)(?:\s*\[)+/g,
        _ = /(webkit)[ \/]([\w.]+)/,
        x = /(opera)(?:.*version)?[ \/]([\w.]+)/,
        k = /(msie) ([\w.]+)/,
        C = /(mozilla)(?:.*? rv:([\w.]+))?/,
        D = navigator.userAgent,
        T = !1,
        S = "then done fail isResolved isRejected promise".split(" "),
        I = Object.prototype.toString,
        M = Object.prototype.hasOwnProperty,
        P = Array.prototype.push,
        N = Array.prototype.slice,
        E = String.prototype.trim,
        z = Array.prototype.indexOf,
        A = {};
      return (
        (r.fn = r.prototype =
          {
            constructor: r,
            init: function (e, i, s) {
              var n, o, a, l;
              if (!e) return this;
              if (e.nodeType)
                return (this.context = this[0] = e), (this.length = 1), this;
              if ("body" === e && !i && w.body)
                return (
                  (this.context = w),
                  (this[0] = w.body),
                  (this.selector = "body"),
                  (this.length = 1),
                  this
                );
              if ("string" == typeof e) {
                if (!(n = c.exec(e)) || (!n[1] && i))
                  return !i || i.jquery
                    ? (i || s).find(e)
                    : this.constructor(i).find(e);
                if (n[1])
                  return (
                    (l = (i = i instanceof r ? i[0] : i)
                      ? i.ownerDocument || i
                      : w),
                    (a = g.exec(e))
                      ? r.isPlainObject(i)
                        ? ((e = [w.createElement(a[1])]),
                          r.fn.attr.call(e, i, !0))
                        : (e = [l.createElement(a[1])])
                      : (e = (
                          (a = r.buildFragment([n[1]], [l])).cacheable
                            ? r.clone(a.fragment)
                            : a.fragment
                        ).childNodes),
                    r.merge(this, e)
                  );
                if ((o = w.getElementById(n[2])) && o.parentNode) {
                  if (o.id !== n[2]) return s.find(e);
                  (this.length = 1), (this[0] = o);
                }
                return (this.context = w), (this.selector = e), this;
              }
              return r.isFunction(e)
                ? s.ready(e)
                : (e.selector !== t &&
                    ((this.selector = e.selector), (this.context = e.context)),
                  r.makeArray(e, this));
            },
            selector: "",
            jquery: "1.5",
            length: 0,
            size: function () {
              return this.length;
            },
            toArray: function () {
              return N.call(this, 0);
            },
            get: function (e) {
              return null == e
                ? this.toArray()
                : e < 0
                ? this[this.length + e]
                : this[e];
            },
            pushStack: function (e, t, i) {
              var s = this.constructor();
              return (
                r.isArray(e) ? P.apply(s, e) : r.merge(s, e),
                (s.prevObject = this),
                (s.context = this.context),
                "find" === t
                  ? (s.selector =
                      this.selector + (this.selector ? " " : "") + i)
                  : t && (s.selector = this.selector + "." + t + "(" + i + ")"),
                s
              );
            },
            each: function (e, t) {
              return r.each(this, e, t);
            },
            ready: function (e) {
              return r.bindReady(), o.done(e), this;
            },
            eq: function (e) {
              return -1 === e ? this.slice(e) : this.slice(e, +e + 1);
            },
            first: function () {
              return this.eq(0);
            },
            last: function () {
              return this.eq(-1);
            },
            slice: function () {
              return this.pushStack(
                N.apply(this, arguments),
                "slice",
                N.call(arguments).join(",")
              );
            },
            map: function (e) {
              return this.pushStack(
                r.map(this, function (t, i) {
                  return e.call(t, i, t);
                })
              );
            },
            end: function () {
              return this.prevObject || this.constructor(null);
            },
            push: P,
            sort: [].sort,
            splice: [].splice,
          }),
        (r.fn.init.prototype = r.fn),
        (r.extend = r.fn.extend =
          function () {
            var e,
              i,
              s,
              n,
              o,
              a,
              l = arguments[0] || {},
              h = 1,
              c = arguments.length,
              u = !1;
            for (
              "boolean" == typeof l &&
                ((u = l), (l = arguments[1] || {}), (h = 2)),
                "object" != typeof l && !r.isFunction(l) && (l = {}),
                c === h && ((l = this), --h);
              h < c;
              h++
            )
              if (null != (e = arguments[h]))
                for (i in e)
                  (s = l[i]),
                    l !== (n = e[i]) &&
                      (u && n && (r.isPlainObject(n) || (o = r.isArray(n)))
                        ? (o
                            ? ((o = !1), (a = s && r.isArray(s) ? s : []))
                            : (a = s && r.isPlainObject(s) ? s : {}),
                          (l[i] = r.extend(u, a, n)))
                        : n !== t && (l[i] = n));
            return l;
          }),
        r.extend({
          noConflict: function (t) {
            return (e.$ = h), t && (e.jQuery = l), r;
          },
          isReady: !1,
          readyWait: 1,
          ready: function (e) {
            if (
              (!0 === e && r.readyWait--,
              !r.readyWait || (!0 !== e && !r.isReady))
            ) {
              if (!w.body) return setTimeout(r.ready, 1);
              if (((r.isReady = !0), !0 !== e && --r.readyWait > 0)) return;
              o.resolveWith(w, [r]),
                r.fn.trigger && r(w).trigger("ready").unbind("ready");
            }
          },
          bindReady: function () {
            if (!T) {
              if (((T = !0), "complete" === w.readyState))
                return setTimeout(r.ready, 1);
              if (w.addEventListener)
                w.addEventListener("DOMContentLoaded", a, !1),
                  e.addEventListener("load", r.ready, !1);
              else if (w.attachEvent) {
                w.attachEvent("onreadystatechange", a),
                  e.attachEvent("onload", r.ready);
                var t = !1;
                try {
                  t = null == e.frameElement;
                } catch (e) {}
                w.documentElement.doScroll && t && i();
              }
            }
          },
          isFunction: function (e) {
            return "function" === r.type(e);
          },
          isArray:
            Array.isArray ||
            function (e) {
              return "array" === r.type(e);
            },
          isWindow: function (e) {
            return e && "object" == typeof e && "setInterval" in e;
          },
          isNaN: function (e) {
            return null == e || !f.test(e) || isNaN(e);
          },
          type: function (e) {
            return null == e ? String(e) : A[I.call(e)] || "object";
          },
          isPlainObject: function (e) {
            if (!e || "object" !== r.type(e) || e.nodeType || r.isWindow(e))
              return !1;
            if (
              e.constructor &&
              !M.call(e, "constructor") &&
              !M.call(e.constructor.prototype, "isPrototypeOf")
            )
              return !1;
            var i;
            for (i in e);
            return i === t || M.call(e, i);
          },
          isEmptyObject: function (e) {
            for (var t in e) return !1;
            return !0;
          },
          error: function (e) {
            throw e;
          },
          parseJSON: function (t) {
            return "string" == typeof t && t
              ? ((t = r.trim(t)),
                m.test(t.replace(v, "@").replace(b, "]").replace(y, ""))
                  ? e.JSON && e.JSON.parse
                    ? e.JSON.parse(t)
                    : new Function("return " + t)()
                  : void r.error("Invalid JSON: " + t))
              : null;
          },
          parseXML: function (t, i, s) {
            return (
              e.DOMParser
                ? (i = (s = new DOMParser()).parseFromString(t, "text/xml"))
                : (((i = new ActiveXObject("Microsoft.XMLDOM")).async =
                    "false"),
                  i.loadXML(t)),
              (!(s = i.documentElement) ||
                !s.nodeName ||
                "parsererror" === s.nodeName) &&
                r.error("Invalid XML: " + t),
              i
            );
          },
          noop: function () {},
          globalEval: function (e) {
            if (e && u.test(e)) {
              var t = w.getElementsByTagName("head")[0] || w.documentElement,
                i = w.createElement("script");
              (i.type = "text/javascript"),
                r.support.scriptEval()
                  ? i.appendChild(w.createTextNode(e))
                  : (i.text = e),
                t.insertBefore(i, t.firstChild),
                t.removeChild(i);
            }
          },
          nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase();
          },
          each: function (e, i, s) {
            var n,
              o = 0,
              a = e.length,
              l = a === t || r.isFunction(e);
            if (s)
              if (l) {
                for (n in e) if (!1 === i.apply(e[n], s)) break;
              } else for (; o < a && !1 !== i.apply(e[o++], s); );
            else if (l) {
              for (n in e) if (!1 === i.call(e[n], n, e[n])) break;
            } else
              for (var h = e[0]; o < a && !1 !== i.call(h, o, h); h = e[++o]);
            return e;
          },
          trim: E
            ? function (e) {
                return null == e ? "" : E.call(e);
              }
            : function (e) {
                return null == e ? "" : (e + "").replace(d, "").replace(p, "");
              },
          makeArray: function (e, t) {
            var i = t || [];
            if (null != e) {
              var s = r.type(e);
              null == e.length ||
              "string" === s ||
              "function" === s ||
              "regexp" === s ||
              r.isWindow(e)
                ? P.call(i, e)
                : r.merge(i, e);
            }
            return i;
          },
          inArray: function (e, t) {
            if (t.indexOf) return t.indexOf(e);
            for (var i = 0, s = t.length; i < s; i++) if (t[i] === e) return i;
            return -1;
          },
          merge: function (e, i) {
            var s = e.length,
              n = 0;
            if ("number" == typeof i.length)
              for (var o = i.length; n < o; n++) e[s++] = i[n];
            else for (; i[n] !== t; ) e[s++] = i[n++];
            return (e.length = s), e;
          },
          grep: function (e, t, i) {
            var s = [];
            i = !!i;
            for (var n = 0, o = e.length; n < o; n++)
              i !== !!t(e[n], n) && s.push(e[n]);
            return s;
          },
          map: function (e, t, i) {
            for (var s, n = [], o = 0, a = e.length; o < a; o++)
              null != (s = t(e[o], o, i)) && (n[n.length] = s);
            return n.concat.apply([], n);
          },
          guid: 1,
          proxy: function (e, i, s) {
            return (
              2 === arguments.length &&
                ("string" == typeof i
                  ? ((e = (s = e)[i]), (i = t))
                  : i && !r.isFunction(i) && ((s = i), (i = t))),
              !i &&
                e &&
                (i = function () {
                  return e.apply(s || this, arguments);
                }),
              e && (i.guid = e.guid = e.guid || i.guid || r.guid++),
              i
            );
          },
          access: function (e, i, s, n, o, a) {
            var l = e.length;
            if ("object" == typeof i) {
              for (var h in i) r.access(e, h, i[h], n, o, s);
              return e;
            }
            if (s !== t) {
              n = !a && n && r.isFunction(s);
              for (var c = 0; c < l; c++)
                o(e[c], i, n ? s.call(e[c], c, o(e[c], i)) : s, a);
              return e;
            }
            return l ? o(e[0], i) : t;
          },
          now: function () {
            return new Date().getTime();
          },
          _Deferred: function () {
            var e,
              t,
              i,
              s = [],
              n = {
                done: function () {
                  if (!i) {
                    var t,
                      o,
                      a,
                      l,
                      h,
                      c = arguments;
                    for (
                      e && ((h = e), (e = 0)), t = 0, o = c.length;
                      t < o;
                      t++
                    )
                      (a = c[t]),
                        "array" === (l = r.type(a))
                          ? n.done.apply(n, a)
                          : "function" === l && s.push(a);
                    h && n.resolveWith(h[0], h[1]);
                  }
                  return this;
                },
                resolveWith: function (n, o) {
                  if (!i && !e && !t) {
                    t = 1;
                    try {
                      for (; s[0]; ) s.shift().apply(n, o);
                    } finally {
                      (e = [n, o]), (t = 0);
                    }
                  }
                  return this;
                },
                resolve: function () {
                  return (
                    n.resolveWith(
                      r.isFunction(this.promise) ? this.promise() : this,
                      arguments
                    ),
                    this
                  );
                },
                isResolved: function () {
                  return t || e;
                },
                cancel: function () {
                  return (i = 1), (s = []), this;
                },
              };
            return n;
          },
          Deferred: function (e) {
            var t,
              i = r._Deferred(),
              s = r._Deferred();
            return (
              r.extend(i, {
                then: function (e, t) {
                  return i.done(e).fail(t), this;
                },
                fail: s.done,
                rejectWith: s.resolveWith,
                reject: s.resolve,
                isRejected: s.isResolved,
                promise: function (e, s) {
                  if (null == e) {
                    if (t) return t;
                    t = e = {};
                  }
                  for (s = S.length; s--; ) e[S[s]] = i[S[s]];
                  return e;
                },
              }),
              i.then(s.cancel, i.cancel),
              delete i.cancel,
              e && e.call(i, i),
              i
            );
          },
          when: function (e) {
            var t,
              i = arguments,
              s = i.length,
              n = s <= 1 && e && r.isFunction(e.promise) ? e : r.Deferred(),
              o = n.promise();
            return (
              s > 1
                ? ((t = Array(s)),
                  r.each(i, function (e, i) {
                    r.when(i).then(function (i) {
                      (t[e] = arguments.length > 1 ? N.call(arguments, 0) : i),
                        --s || n.resolveWith(o, t);
                    }, n.reject);
                  }))
                : n !== e && n.resolve(e),
              o
            );
          },
          uaMatch: function (e) {
            e = e.toLowerCase();
            var t =
              _.exec(e) ||
              x.exec(e) ||
              k.exec(e) ||
              (e.indexOf("compatible") < 0 && C.exec(e)) ||
              [];
            return { browser: t[1] || "", version: t[2] || "0" };
          },
          sub: function () {
            function e(t, i) {
              return new e.fn.init(t, i);
            }
            r.extend(!0, e, this),
              (e.superclass = this),
              (e.fn = e.prototype = this()),
              (e.fn.constructor = e),
              (e.subclass = this.subclass),
              (e.fn.init = function (i, s) {
                return (
                  s && s instanceof r && !(s instanceof e) && (s = e(s)),
                  r.fn.init.call(this, i, s, t)
                );
              }),
              (e.fn.init.prototype = e.fn);
            var t = e(w);
            return e;
          },
          browser: {},
        }),
        (o = r._Deferred()),
        r.each(
          "Boolean Number String Function Array Date RegExp Object".split(" "),
          function (e, t) {
            A["[object " + t + "]"] = t.toLowerCase();
          }
        ),
        (n = r.uaMatch(D)).browser &&
          ((r.browser[n.browser] = !0), (r.browser.version = n.version)),
        r.browser.webkit && (r.browser.safari = !0),
        z &&
          (r.inArray = function (e, t) {
            return z.call(t, e);
          }),
        u.test(" ") && ((d = /^[\s\xA0]+/), (p = /[\s\xA0]+$/)),
        (s = r(w)),
        w.addEventListener
          ? (a = function () {
              w.removeEventListener("DOMContentLoaded", a, !1), r.ready();
            })
          : w.attachEvent &&
            (a = function () {
              "complete" === w.readyState &&
                (w.detachEvent("onreadystatechange", a), r.ready());
            }),
        (e.jQuery = e.$ = r)
      );
    })();
  !(function () {
    x.support = {};
    var t = w.createElement("div");
    (t.style.display = "none"),
      (t.innerHTML =
        "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>");
    var i = t.getElementsByTagName("*"),
      s = t.getElementsByTagName("a")[0],
      n = w.createElement("select"),
      o = n.appendChild(w.createElement("option"));
    if (i && i.length && s) {
      (x.support = {
        leadingWhitespace: 3 === t.firstChild.nodeType,
        tbody: !t.getElementsByTagName("tbody").length,
        htmlSerialize: !!t.getElementsByTagName("link").length,
        style: /red/.test(s.getAttribute("style")),
        hrefNormalized: "/a" === s.getAttribute("href"),
        opacity: /^0.55$/.test(s.style.opacity),
        cssFloat: !!s.style.cssFloat,
        checkOn: "on" === t.getElementsByTagName("input")[0].value,
        optSelected: o.selected,
        deleteExpando: !0,
        optDisabled: !1,
        checkClone: !1,
        _scriptEval: null,
        noCloneEvent: !0,
        boxModel: null,
        inlineBlockNeedsLayout: !1,
        shrinkWrapBlocks: !1,
        reliableHiddenOffsets: !0,
      }),
        (n.disabled = !0),
        (x.support.optDisabled = !o.disabled),
        (x.support.scriptEval = function () {
          if (null === x.support._scriptEval) {
            var t = w.documentElement,
              i = w.createElement("script"),
              s = "script" + x.now();
            i.type = "text/javascript";
            try {
              i.appendChild(w.createTextNode("window." + s + "=1;"));
            } catch (e) {}
            t.insertBefore(i, t.firstChild),
              e[s]
                ? ((x.support._scriptEval = !0), delete e[s])
                : (x.support._scriptEval = !1),
              t.removeChild(i),
              (t = i = s = null);
          }
          return x.support._scriptEval;
        });
      try {
        delete t.test;
      } catch (e) {
        x.support.deleteExpando = !1;
      }
      t.attachEvent &&
        t.fireEvent &&
        (t.attachEvent("onclick", function e() {
          (x.support.noCloneEvent = !1), t.detachEvent("onclick", e);
        }),
        t.cloneNode(!0).fireEvent("onclick")),
        ((t = w.createElement("div")).innerHTML =
          "<input type='radio' name='radiotest' checked='checked'/>");
      var a = w.createDocumentFragment();
      a.appendChild(t.firstChild),
        (x.support.checkClone = a
          .cloneNode(!0)
          .cloneNode(!0).lastChild.checked),
        x(function () {
          var e = w.createElement("div"),
            t = w.getElementsByTagName("body")[0];
          if (t) {
            (e.style.width = e.style.paddingLeft = "1px"),
              t.appendChild(e),
              (x.boxModel = x.support.boxModel = 2 === e.offsetWidth),
              "zoom" in e.style &&
                ((e.style.display = "inline"),
                (e.style.zoom = 1),
                (x.support.inlineBlockNeedsLayout = 2 === e.offsetWidth),
                (e.style.display = ""),
                (e.innerHTML = "<div style='width:4px;'></div>"),
                (x.support.shrinkWrapBlocks = 2 !== e.offsetWidth)),
              (e.innerHTML =
                "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>");
            var i = e.getElementsByTagName("td");
            (x.support.reliableHiddenOffsets = 0 === i[0].offsetHeight),
              (i[0].style.display = ""),
              (i[1].style.display = "none"),
              (x.support.reliableHiddenOffsets =
                x.support.reliableHiddenOffsets && 0 === i[0].offsetHeight),
              (e.innerHTML = ""),
              (t.removeChild(e).style.display = "none"),
              (e = i = null);
          }
        });
      var r = function (e) {
        var t = w.createElement("div");
        if (((e = "on" + e), !t.attachEvent)) return !0;
        var i = e in t;
        return (
          i || (t.setAttribute(e, "return;"), (i = "function" == typeof t[e])),
          (t = null),
          i
        );
      };
      (x.support.submitBubbles = r("submit")),
        (x.support.changeBubbles = r("change")),
        (t = i = s = null);
    }
  })();
  var k = /^(?:\{.*\}|\[.*\])$/;
  x.extend({
    cache: {},
    uuid: 0,
    expando: "jQuery" + (x.fn.jquery + Math.random()).replace(/\D/g, ""),
    noData: {
      embed: !0,
      object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
      applet: !0,
    },
    hasData: function (e) {
      return (
        !!(e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando]) &&
        !x.isEmptyObject(e)
      );
    },
    data: function (e, i, s, n) {
      if (x.acceptData(e)) {
        var o,
          a = x.expando,
          r = "string" == typeof i,
          l = e.nodeType,
          h = l ? x.cache : e,
          c = l ? e[x.expando] : e[x.expando] && x.expando;
        if ((!c || (n && c && !h[c][a])) && r && s === t) return;
        return (
          c || (l ? (e[x.expando] = c = ++x.uuid) : (c = x.expando)),
          h[c] || (h[c] = {}),
          "object" == typeof i &&
            (n ? (h[c][a] = x.extend(h[c][a], i)) : (h[c] = x.extend(h[c], i))),
          (o = h[c]),
          n && (o[a] || (o[a] = {}), (o = o[a])),
          s !== t && (o[i] = s),
          "events" !== i || o[i] ? (r ? o[i] : o) : o[a] && o[a].events
        );
      }
    },
    removeData: function (t, i, s) {
      if (x.acceptData(t)) {
        var n = x.expando,
          o = t.nodeType,
          a = o ? x.cache : t,
          r = o ? t[x.expando] : x.expando;
        if (!a[r]) return;
        if (i) {
          var l = s ? a[r][n] : a[r];
          if (l && (delete l[i], !x.isEmptyObject(l))) return;
        }
        if (s && (delete a[r][n], !x.isEmptyObject(a[r]))) return;
        var h = a[r][n];
        x.support.deleteExpando || a != e ? delete a[r] : (a[r] = null),
          h
            ? ((a[r] = {}), (a[r][n] = h))
            : o &&
              (x.support.deleteExpando
                ? delete t[x.expando]
                : t.removeAttribute
                ? t.removeAttribute(x.expando)
                : (t[x.expando] = null));
      }
    },
    _data: function (e, t, i) {
      return x.data(e, t, i, !0);
    },
    acceptData: function (e) {
      if (e.nodeName) {
        var t = x.noData[e.nodeName.toLowerCase()];
        if (t) return !0 !== t && e.getAttribute("classid") === t;
      }
      return !0;
    },
  }),
    x.fn.extend({
      data: function (e, i) {
        var s = null;
        if (void 0 === e) {
          if (this.length && ((s = x.data(this[0])), 1 === this[0].nodeType))
            for (var n, o = this[0].attributes, a = 0, r = o.length; a < r; a++)
              0 === (n = o[a].name).indexOf("data-") &&
                ((n = n.substr(5)), _(this[0], n, s[n]));
          return s;
        }
        if ("object" == typeof e)
          return this.each(function () {
            x.data(this, e);
          });
        var l = e.split(".");
        return (
          (l[1] = l[1] ? "." + l[1] : ""),
          i === t
            ? ((s = this.triggerHandler("getData" + l[1] + "!", [l[0]])) ===
                t &&
                this.length &&
                ((s = x.data(this[0], e)), (s = _(this[0], e, s))),
              s === t && l[1] ? this.data(l[0]) : s)
            : this.each(function () {
                var t = x(this),
                  s = [l[0], i];
                t.triggerHandler("setData" + l[1] + "!", s),
                  x.data(this, e, i),
                  t.triggerHandler("changeData" + l[1] + "!", s);
              })
        );
      },
      removeData: function (e) {
        return this.each(function () {
          x.removeData(this, e);
        });
      },
    }),
    x.extend({
      queue: function (e, t, i) {
        if (e) {
          t = (t || "fx") + "queue";
          var s = x._data(e, t);
          return i
            ? (!s || x.isArray(i)
                ? (s = x._data(e, t, x.makeArray(i)))
                : s.push(i),
              s)
            : s || [];
        }
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var i = x.queue(e, t),
          s = i.shift();
        "inprogress" === s && (s = i.shift()),
          s &&
            ("fx" === t && i.unshift("inprogress"),
            s.call(e, function () {
              x.dequeue(e, t);
            })),
          i.length || x.removeData(e, t + "queue", !0);
      },
    }),
    x.fn.extend({
      queue: function (e, i) {
        return (
          "string" != typeof e && ((i = e), (e = "fx")),
          i === t
            ? x.queue(this[0], e)
            : this.each(function (t) {
                var s = x.queue(this, e, i);
                "fx" === e && "inprogress" !== s[0] && x.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          x.dequeue(this, e);
        });
      },
      delay: function (e, t) {
        return (
          (e = (x.fx && x.fx.speeds[e]) || e),
          (t = t || "fx"),
          this.queue(t, function () {
            var i = this;
            setTimeout(function () {
              x.dequeue(i, t);
            }, e);
          })
        );
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
    });
  var C = /[\n\t\r]/g,
    D = /\s+/,
    T = /\r/g,
    S = /^(?:href|src|style)$/,
    I = /^(?:button|input)$/i,
    M = /^(?:button|input|object|select|textarea)$/i,
    P = /^a(?:rea)?$/i,
    N = /^(?:radio|checkbox)$/i;
  (x.props = {
    for: "htmlFor",
    class: "className",
    readonly: "readOnly",
    maxlength: "maxLength",
    cellspacing: "cellSpacing",
    rowspan: "rowSpan",
    colspan: "colSpan",
    tabindex: "tabIndex",
    usemap: "useMap",
    frameborder: "frameBorder",
  }),
    x.fn.extend({
      attr: function (e, t) {
        return x.access(this, e, t, !0, x.attr);
      },
      removeAttr: function (e, t) {
        return this.each(function () {
          x.attr(this, e, ""), 1 === this.nodeType && this.removeAttribute(e);
        });
      },
      addClass: function (e) {
        if (x.isFunction(e))
          return this.each(function (t) {
            var i = x(this);
            i.addClass(e.call(this, t, i.attr("class")));
          });
        if (e && "string" == typeof e)
          for (var t = (e || "").split(D), i = 0, s = this.length; i < s; i++) {
            var n = this[i];
            if (1 === n.nodeType)
              if (n.className) {
                for (
                  var o = " " + n.className + " ",
                    a = n.className,
                    r = 0,
                    l = t.length;
                  r < l;
                  r++
                )
                  o.indexOf(" " + t[r] + " ") < 0 && (a += " " + t[r]);
                n.className = x.trim(a);
              } else n.className = e;
          }
        return this;
      },
      removeClass: function (e) {
        if (x.isFunction(e))
          return this.each(function (t) {
            var i = x(this);
            i.removeClass(e.call(this, t, i.attr("class")));
          });
        if ((e && "string" == typeof e) || e === t)
          for (var i = (e || "").split(D), s = 0, n = this.length; s < n; s++) {
            var o = this[s];
            if (1 === o.nodeType && o.className)
              if (e) {
                for (
                  var a = (" " + o.className + " ").replace(C, " "),
                    r = 0,
                    l = i.length;
                  r < l;
                  r++
                )
                  a = a.replace(" " + i[r] + " ", " ");
                o.className = x.trim(a);
              } else o.className = "";
          }
        return this;
      },
      toggleClass: function (e, t) {
        var i = typeof e,
          s = "boolean" == typeof t;
        return x.isFunction(e)
          ? this.each(function (i) {
              var s = x(this);
              s.toggleClass(e.call(this, i, s.attr("class"), t), t);
            })
          : this.each(function () {
              if ("string" === i)
                for (
                  var n, o = 0, a = x(this), r = t, l = e.split(D);
                  (n = l[o++]);

                )
                  (r = s ? r : !a.hasClass(n)),
                    a[r ? "addClass" : "removeClass"](n);
              else
                ("undefined" !== i && "boolean" !== i) ||
                  (this.className &&
                    x._data(this, "__className__", this.className),
                  (this.className =
                    this.className || !1 === e
                      ? ""
                      : x._data(this, "__className__") || ""));
            });
      },
      hasClass: function (e) {
        for (var t = " " + e + " ", i = 0, s = this.length; i < s; i++)
          if ((" " + this[i].className + " ").replace(C, " ").indexOf(t) > -1)
            return !0;
        return !1;
      },
      val: function (e) {
        if (!arguments.length) {
          var i = this[0];
          if (i) {
            if (x.nodeName(i, "option")) {
              var s = i.attributes.value;
              return !s || s.specified ? i.value : i.text;
            }
            if (x.nodeName(i, "select")) {
              var n = i.selectedIndex,
                o = [],
                a = i.options,
                r = "select-one" === i.type;
              if (n < 0) return null;
              for (var l = r ? n : 0, h = r ? n + 1 : a.length; l < h; l++) {
                var c = a[l];
                if (
                  c.selected &&
                  (x.support.optDisabled
                    ? !c.disabled
                    : null === c.getAttribute("disabled")) &&
                  (!c.parentNode.disabled ||
                    !x.nodeName(c.parentNode, "optgroup"))
                ) {
                  if (((e = x(c).val()), r)) return e;
                  o.push(e);
                }
              }
              return o;
            }
            return N.test(i.type) && !x.support.checkOn
              ? null === i.getAttribute("value")
                ? "on"
                : i.value
              : (i.value || "").replace(T, "");
          }
          return t;
        }
        var u = x.isFunction(e);
        return this.each(function (t) {
          var i = x(this),
            s = e;
          if (1 === this.nodeType)
            if (
              (u && (s = e.call(this, t, i.val())),
              null == s
                ? (s = "")
                : "number" == typeof s
                ? (s += "")
                : x.isArray(s) &&
                  (s = x.map(s, function (e) {
                    return null == e ? "" : e + "";
                  })),
              x.isArray(s) && N.test(this.type))
            )
              this.checked = x.inArray(i.val(), s) >= 0;
            else if (x.nodeName(this, "select")) {
              var n = x.makeArray(s);
              x("option", this).each(function () {
                this.selected = x.inArray(x(this).val(), n) >= 0;
              }),
                n.length || (this.selectedIndex = -1);
            } else this.value = s;
        });
      },
    }),
    x.extend({
      attrFn: {
        val: !0,
        css: !0,
        html: !0,
        text: !0,
        data: !0,
        width: !0,
        height: !0,
        offset: !0,
      },
      attr: function (e, i, s, n) {
        if (!e || 3 === e.nodeType || 8 === e.nodeType || 2 === e.nodeType)
          return t;
        if (n && i in x.attrFn) return x(e)[i](s);
        var o = 1 !== e.nodeType || !x.isXMLDoc(e),
          a = s !== t;
        if (((i = (o && x.props[i]) || i), 1 === e.nodeType)) {
          var r = S.test(i);
          if ("selected" === i && !x.support.optSelected) {
            var l = e.parentNode;
            l && (l.selectedIndex, l.parentNode && l.parentNode.selectedIndex);
          }
          if ((i in e || e[i] !== t) && o && !r) {
            if (
              (a &&
                ("type" === i &&
                  I.test(e.nodeName) &&
                  e.parentNode &&
                  x.error("type property can't be changed"),
                null === s
                  ? 1 === e.nodeType && e.removeAttribute(i)
                  : (e[i] = s)),
              x.nodeName(e, "form") && e.getAttributeNode(i))
            )
              return e.getAttributeNode(i).nodeValue;
            if ("tabIndex" === i) {
              var h = e.getAttributeNode("tabIndex");
              return h && h.specified
                ? h.value
                : M.test(e.nodeName) || (P.test(e.nodeName) && e.href)
                ? 0
                : t;
            }
            return e[i];
          }
          if (!x.support.style && o && "style" === i)
            return a && (e.style.cssText = "" + s), e.style.cssText;
          if (
            (a && e.setAttribute(i, "" + s),
            !e.attributes[i] && e.hasAttribute && !e.hasAttribute(i))
          )
            return t;
          var c =
            !x.support.hrefNormalized && o && r
              ? e.getAttribute(i, 2)
              : e.getAttribute(i);
          return null === c ? t : c;
        }
        return a && (e[i] = s), e[i];
      },
    });
  var E = /\.(.*)$/,
    z = /^(?:textarea|input|select)$/i,
    A = /\./g,
    O = / /g,
    j = /[^\w\s.|`]/g,
    H = function (e) {
      return e.replace(j, "\\$&");
    },
    F = "events";
  (x.event = {
    add: function (i, s, n, o) {
      if (3 !== i.nodeType && 8 !== i.nodeType) {
        if ((x.isWindow(i) && i !== e && !i.frameElement && (i = e), !1 === n))
          n = y;
        else if (!n) return;
        var a, r;
        n.handler && (n = (a = n).handler), n.guid || (n.guid = x.guid++);
        var l = x._data(i);
        if (!l) return;
        var h = l[F],
          c = l.handle;
        "function" == typeof h
          ? ((c = h.handle), (h = h.events))
          : h ||
            (i.nodeType || (l[F] = l = function () {}), (l.events = h = {})),
          c ||
            (l.handle = c =
              function () {
                return void 0 === x || x.event.triggered
                  ? t
                  : x.event.handle.apply(c.elem, arguments);
              }),
          (c.elem = i),
          (s = s.split(" "));
        for (var u, d, p = 0; (u = s[p++]); ) {
          (r = a ? x.extend({}, a) : { handler: n, data: o }),
            u.indexOf(".") > -1
              ? ((d = u.split(".")),
                (u = d.shift()),
                (r.namespace = d.slice(0).sort().join(".")))
              : ((d = []), (r.namespace = "")),
            (r.type = u),
            r.guid || (r.guid = n.guid);
          var f = h[u],
            g = x.event.special[u] || {};
          f ||
            ((f = h[u] = []),
            (g.setup && !1 !== g.setup.call(i, o, d, c)) ||
              (i.addEventListener
                ? i.addEventListener(u, c, !1)
                : i.attachEvent && i.attachEvent("on" + u, c))),
            g.add &&
              (g.add.call(i, r), r.handler.guid || (r.handler.guid = n.guid)),
            f.push(r),
            (x.event.global[u] = !0);
        }
        i = null;
      }
    },
    global: {},
    remove: function (e, i, s, n) {
      if (3 !== e.nodeType && 8 !== e.nodeType) {
        !1 === s && (s = y);
        var o,
          a,
          r,
          l,
          h,
          c,
          u,
          d,
          p,
          f = 0,
          g = x.hasData(e) && x._data(e),
          m = g && g[F];
        if (!g || !m) return;
        if (
          ("function" == typeof m && ((g = m), (m = m.events)),
          i && i.type && ((s = i.handler), (i = i.type)),
          !i || ("string" == typeof i && "." === i.charAt(0)))
        ) {
          for (o in ((i = i || ""), m)) x.event.remove(e, o + i);
          return;
        }
        for (i = i.split(" "); (o = i[f++]); )
          if (
            ((p = o),
            (d = null),
            (l = []),
            (r = o.indexOf(".") < 0) ||
              ((l = o.split(".")),
              (o = l.shift()),
              (h = new RegExp(
                "(^|\\.)" +
                  x.map(l.slice(0).sort(), H).join("\\.(?:.*\\.)?") +
                  "(\\.|$)"
              ))),
            (u = m[o]))
          )
            if (s) {
              for (
                c = x.event.special[o] || {}, a = n || 0;
                a < u.length &&
                ((d = u[a]),
                s.guid !== d.guid ||
                  ((r || h.test(d.namespace)) &&
                    (null == n && u.splice(a--, 1),
                    c.remove && c.remove.call(e, d)),
                  null == n));
                a++
              );
              (0 === u.length || (null != n && 1 === u.length)) &&
                ((!c.teardown || !1 === c.teardown.call(e, l)) &&
                  x.removeEvent(e, o, g.handle),
                null,
                delete m[o]);
            } else
              for (a = 0; a < u.length; a++)
                (d = u[a]),
                  (r || h.test(d.namespace)) &&
                    (x.event.remove(e, p, d.handler, a), u.splice(a--, 1));
        if (x.isEmptyObject(m)) {
          var v = g.handle;
          v && (v.elem = null),
            delete g.events,
            delete g.handle,
            "function" == typeof g
              ? x.removeData(e, F, !0)
              : x.isEmptyObject(g) && x.removeData(e, t, !0);
        }
      }
    },
    trigger: function (e, i, s) {
      var n = e.type || e;
      if (!arguments[3]) {
        if (
          ((e =
            "object" == typeof e
              ? e[x.expando]
                ? e
                : x.extend(x.Event(n), e)
              : x.Event(n)),
          n.indexOf("!") >= 0 &&
            ((e.type = n = n.slice(0, -1)), (e.exclusive = !0)),
          s ||
            (e.stopPropagation(),
            x.event.global[n] &&
              x.each(x.cache, function () {
                var t = this[x.expando];
                t &&
                  t.events &&
                  t.events[n] &&
                  x.event.trigger(e, i, t.handle.elem);
              })),
          !s || 3 === s.nodeType || 8 === s.nodeType)
        )
          return t;
        (e.result = t), (e.target = s), (i = x.makeArray(i)).unshift(e);
      }
      e.currentTarget = s;
      var o = s.nodeType ? x._data(s, "handle") : (x._data(s, F) || {}).handle;
      o && o.apply(s, i);
      var a = s.parentNode || s.ownerDocument;
      try {
        (s && s.nodeName && x.noData[s.nodeName.toLowerCase()]) ||
          (s["on" + n] &&
            !1 === s["on" + n].apply(s, i) &&
            ((e.result = !1), e.preventDefault()));
      } catch (e) {}
      if (!e.isPropagationStopped() && a) x.event.trigger(e, i, a, !0);
      else if (!e.isDefaultPrevented()) {
        var r,
          l = e.target,
          h = n.replace(E, ""),
          c = x.nodeName(l, "a") && "click" === h,
          u = x.event.special[h] || {};
        if (
          !(
            (u._default && !1 !== u._default.call(s, e)) ||
            c ||
            (l && l.nodeName && x.noData[l.nodeName.toLowerCase()])
          )
        ) {
          try {
            l[h] &&
              ((r = l["on" + h]) && (l["on" + h] = null),
              (x.event.triggered = !0),
              l[h]());
          } catch (e) {}
          r && (l["on" + h] = r), (x.event.triggered = !1);
        }
      }
    },
    handle: function (i) {
      var s,
        n,
        o,
        a,
        r,
        l = [],
        h = x.makeArray(arguments);
      if (
        (((i = h[0] = x.event.fix(i || e.event)).currentTarget = this),
        (s = i.type.indexOf(".") < 0 && !i.exclusive) ||
          ((o = i.type.split(".")),
          (i.type = o.shift()),
          (l = o.slice(0).sort()),
          (a = new RegExp("(^|\\.)" + l.join("\\.(?:.*\\.)?") + "(\\.|$)"))),
        (i.namespace = i.namespace || l.join(".")),
        "function" == typeof (r = x._data(this, F)) && (r = r.events),
        (n = (r || {})[i.type]),
        r && n)
      )
        for (var c = 0, u = (n = n.slice(0)).length; c < u; c++) {
          var d = n[c];
          if (s || a.test(d.namespace)) {
            (i.handler = d.handler), (i.data = d.data), (i.handleObj = d);
            var p = d.handler.apply(this, h);
            if (
              (p !== t &&
                ((i.result = p),
                !1 === p && (i.preventDefault(), i.stopPropagation())),
              i.isImmediatePropagationStopped())
            )
              break;
          }
        }
      return i.result;
    },
    props:
      "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(
        " "
      ),
    fix: function (e) {
      if (e[x.expando]) return e;
      var i = e;
      e = x.Event(i);
      for (var s, n = this.props.length; n; ) e[(s = this.props[--n])] = i[s];
      if (
        (e.target || (e.target = e.srcElement || w),
        3 === e.target.nodeType && (e.target = e.target.parentNode),
        !e.relatedTarget &&
          e.fromElement &&
          (e.relatedTarget =
            e.fromElement === e.target ? e.toElement : e.fromElement),
        null == e.pageX && null != e.clientX)
      ) {
        var o = w.documentElement,
          a = w.body;
        (e.pageX =
          e.clientX +
          ((o && o.scrollLeft) || (a && a.scrollLeft) || 0) -
          ((o && o.clientLeft) || (a && a.clientLeft) || 0)),
          (e.pageY =
            e.clientY +
            ((o && o.scrollTop) || (a && a.scrollTop) || 0) -
            ((o && o.clientTop) || (a && a.clientTop) || 0));
      }
      return (
        null == e.which &&
          (null != e.charCode || null != e.keyCode) &&
          (e.which = null != e.charCode ? e.charCode : e.keyCode),
        !e.metaKey && e.ctrlKey && (e.metaKey = e.ctrlKey),
        !e.which &&
          e.button !== t &&
          (e.which =
            1 & e.button ? 1 : 2 & e.button ? 3 : 4 & e.button ? 2 : 0),
        e
      );
    },
    guid: 1e8,
    proxy: x.proxy,
    special: {
      ready: { setup: x.bindReady, teardown: x.noop },
      live: {
        add: function (e) {
          x.event.add(
            this,
            g(e.origType, e.selector),
            x.extend({}, e, { handler: m, guid: e.handler.guid })
          );
        },
        remove: function (e) {
          x.event.remove(this, g(e.origType, e.selector), e);
        },
      },
      beforeunload: {
        setup: function (e, t, i) {
          x.isWindow(this) && (this.onbeforeunload = i);
        },
        teardown: function (e, t) {
          this.onbeforeunload === t && (this.onbeforeunload = null);
        },
      },
    },
  }),
    (x.removeEvent = w.removeEventListener
      ? function (e, t, i) {
          e.removeEventListener && e.removeEventListener(t, i, !1);
        }
      : function (e, t, i) {
          e.detachEvent && e.detachEvent("on" + t, i);
        }),
    (x.Event = function (e) {
      if (!this.preventDefault) return new x.Event(e);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            !1 === e.returnValue ||
            (e.getPreventDefault && e.getPreventDefault())
              ? b
              : y))
        : (this.type = e),
        (this.timeStamp = x.now()),
        (this[x.expando] = !0);
    }),
    (x.Event.prototype = {
      preventDefault: function () {
        this.isDefaultPrevented = b;
        var e = this.originalEvent;
        e && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
      },
      stopPropagation: function () {
        this.isPropagationStopped = b;
        var e = this.originalEvent;
        e && (e.stopPropagation && e.stopPropagation(), (e.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        (this.isImmediatePropagationStopped = b), this.stopPropagation();
      },
      isDefaultPrevented: y,
      isPropagationStopped: y,
      isImmediatePropagationStopped: y,
    });
  var W = function (e) {
      var t = e.relatedTarget;
      try {
        for (; t && t !== this; ) t = t.parentNode;
        t !== this &&
          ((e.type = e.data), x.event.handle.apply(this, arguments));
      } catch (e) {}
    },
    L = function (e) {
      (e.type = e.data), x.event.handle.apply(this, arguments);
    };
  if (
    (x.each(
      { mouseenter: "mouseover", mouseleave: "mouseout" },
      function (e, t) {
        x.event.special[e] = {
          setup: function (i) {
            x.event.add(this, t, i && i.selector ? L : W, e);
          },
          teardown: function (e) {
            x.event.remove(this, t, e && e.selector ? L : W);
          },
        };
      }
    ),
    x.support.submitBubbles ||
      (x.event.special.submit = {
        setup: function (e, i) {
          if (!this.nodeName || "form" === this.nodeName.toLowerCase())
            return !1;
          x.event.add(this, "click.specialSubmit", function (e) {
            var i = e.target,
              s = i.type;
            if (
              ("submit" === s || "image" === s) &&
              x(i).closest("form").length
            )
              return (e.liveFired = t), v("submit", this, arguments);
          }),
            x.event.add(this, "keypress.specialSubmit", function (e) {
              var i = e.target,
                s = i.type;
              if (
                ("text" === s || "password" === s) &&
                x(i).closest("form").length &&
                13 === e.keyCode
              )
                return (e.liveFired = t), v("submit", this, arguments);
            });
        },
        teardown: function (e) {
          x.event.remove(this, ".specialSubmit");
        },
      }),
    !x.support.changeBubbles)
  ) {
    var R,
      B = function (e) {
        var t = e.type,
          i = e.value;
        return (
          "radio" === t || "checkbox" === t
            ? (i = e.checked)
            : "select-multiple" === t
            ? (i =
                e.selectedIndex > -1
                  ? x
                      .map(e.options, function (e) {
                        return e.selected;
                      })
                      .join("-")
                  : "")
            : "select" === e.nodeName.toLowerCase() && (i = e.selectedIndex),
          i
        );
      },
      q = function (e) {
        var i,
          s,
          n = e.target;
        if (z.test(n.nodeName) && !n.readOnly) {
          if (
            ((i = x._data(n, "_change_data")),
            (s = B(n)),
            ("focusout" !== e.type || "radio" !== n.type) &&
              x._data(n, "_change_data", s),
            i === t || s === i)
          )
            return;
          if (null != i || s)
            return (
              (e.type = "change"),
              (e.liveFired = t),
              x.event.trigger(e, arguments[1], n)
            );
        }
      };
    (x.event.special.change = {
      filters: {
        focusout: q,
        beforedeactivate: q,
        click: function (e) {
          var t = e.target,
            i = t.type;
          if (
            "radio" === i ||
            "checkbox" === i ||
            "select" === t.nodeName.toLowerCase()
          )
            return q.call(this, e);
        },
        keydown: function (e) {
          var t = e.target,
            i = t.type;
          if (
            (13 === e.keyCode && "textarea" !== t.nodeName.toLowerCase()) ||
            (32 === e.keyCode && ("checkbox" === i || "radio" === i)) ||
            "select-multiple" === i
          )
            return q.call(this, e);
        },
        beforeactivate: function (e) {
          var t = e.target;
          x._data(t, "_change_data", B(t));
        },
      },
      setup: function (e, t) {
        if ("file" === this.type) return !1;
        for (var i in R) x.event.add(this, i + ".specialChange", R[i]);
        return z.test(this.nodeName);
      },
      teardown: function (e) {
        return x.event.remove(this, ".specialChange"), z.test(this.nodeName);
      },
    }),
      ((R = x.event.special.change.filters).focus = R.beforeactivate);
  }
  w.addEventListener &&
    x.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      function i(e) {
        return ((e = x.event.fix(e)).type = t), x.event.handle.call(this, e);
      }
      x.event.special[t] = {
        setup: function () {
          this.addEventListener(e, i, !0);
        },
        teardown: function () {
          this.removeEventListener(e, i, !0);
        },
      };
    }),
    x.each(["bind", "one"], function (e, i) {
      x.fn[i] = function (e, s, n) {
        if ("object" == typeof e) {
          for (var o in e) this[i](o, s, e[o], n);
          return this;
        }
        (x.isFunction(s) || !1 === s) && ((n = s), (s = t));
        var a =
          "one" === i
            ? x.proxy(n, function (e) {
                return x(this).unbind(e, a), n.apply(this, arguments);
              })
            : n;
        if ("unload" === e && "one" !== i) this.one(e, s, n);
        else
          for (var r = 0, l = this.length; r < l; r++)
            x.event.add(this[r], e, a, s);
        return this;
      };
    }),
    x.fn.extend({
      unbind: function (e, t) {
        if ("object" != typeof e || e.preventDefault)
          for (var i = 0, s = this.length; i < s; i++)
            x.event.remove(this[i], e, t);
        else for (var n in e) this.unbind(n, e[n]);
        return this;
      },
      delegate: function (e, t, i, s) {
        return this.live(t, i, s, e);
      },
      undelegate: function (e, t, i) {
        return 0 === arguments.length
          ? this.unbind("live")
          : this.die(t, null, i, e);
      },
      trigger: function (e, t) {
        return this.each(function () {
          x.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        if (this[0]) {
          var i = x.Event(e);
          return (
            i.preventDefault(),
            i.stopPropagation(),
            x.event.trigger(i, t, this[0]),
            i.result
          );
        }
      },
      toggle: function (e) {
        for (var t = arguments, i = 1; i < t.length; ) x.proxy(e, t[i++]);
        return this.click(
          x.proxy(e, function (s) {
            var n = (x._data(this, "lastToggle" + e.guid) || 0) % i;
            return (
              x._data(this, "lastToggle" + e.guid, n + 1),
              s.preventDefault(),
              t[n].apply(this, arguments) || !1
            );
          })
        );
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    });
  var Y = {
    focus: "focusin",
    blur: "focusout",
    mouseenter: "mouseover",
    mouseleave: "mouseout",
  };
  x.each(["live", "die"], function (e, i) {
    x.fn[i] = function (e, s, n, o) {
      var a,
        r,
        l,
        h,
        c = 0,
        u = o || this.selector,
        d = o ? this : x(this.context);
      if ("object" == typeof e && !e.preventDefault) {
        for (var p in e) d[i](p, s, e[p], u);
        return this;
      }
      for (
        x.isFunction(s) && ((n = s), (s = t)), e = (e || "").split(" ");
        null != (a = e[c++]);

      )
        if (
          ((l = ""),
          (r = E.exec(a)) && ((l = r[0]), (a = a.replace(E, ""))),
          "hover" !== a)
        )
          if (
            ((h = a),
            "focus" === a || "blur" === a
              ? (e.push(Y[a] + l), (a += l))
              : (a = (Y[a] || a) + l),
            "live" === i)
          )
            for (var f = 0, m = d.length; f < m; f++)
              x.event.add(d[f], "live." + g(a, u), {
                data: s,
                selector: u,
                handler: n,
                origType: a,
                origHandler: n,
                preType: h,
              });
          else d.unbind("live." + g(a, u), n);
        else e.push("mouseenter" + l, "mouseleave" + l);
      return this;
    };
  }),
    x.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(
        " "
      ),
      function (e, t) {
        (x.fn[t] = function (e, i) {
          return (
            null == i && ((i = e), (e = null)),
            arguments.length > 0 ? this.bind(t, e, i) : this.trigger(t)
          );
        }),
          x.attrFn && (x.attrFn[t] = !0);
      }
    ),
    (function () {
      function e(e, t, i, s, n, o) {
        for (var a = 0, r = s.length; a < r; a++) {
          var h = s[a];
          if (h) {
            var c = !1;
            for (h = h[e]; h; ) {
              if (h.sizcache === i) {
                c = s[h.sizset];
                break;
              }
              if (1 === h.nodeType)
                if (
                  (o || ((h.sizcache = i), (h.sizset = a)),
                  "string" != typeof t)
                ) {
                  if (h === t) {
                    c = !0;
                    break;
                  }
                } else if (l.filter(t, [h]).length > 0) {
                  c = h;
                  break;
                }
              h = h[e];
            }
            s[a] = c;
          }
        }
      }
      function i(e, t, i, s, n, o) {
        for (var a = 0, r = s.length; a < r; a++) {
          var l = s[a];
          if (l) {
            var h = !1;
            for (l = l[e]; l; ) {
              if (l.sizcache === i) {
                h = s[l.sizset];
                break;
              }
              if (
                (1 === l.nodeType && !o && ((l.sizcache = i), (l.sizset = a)),
                l.nodeName.toLowerCase() === t)
              ) {
                h = l;
                break;
              }
              l = l[e];
            }
            s[a] = h;
          }
        }
      }
      var s =
          /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
        n = 0,
        o = Object.prototype.toString,
        a = !1,
        r = !0;
      [0, 0].sort(function () {
        return (r = !1), 0;
      });
      var l = function (e, t, i, n) {
        i = i || [];
        var a = (t = t || w);
        if (1 !== t.nodeType && 9 !== t.nodeType) return [];
        if (!e || "string" != typeof e) return i;
        var r,
          u,
          d,
          p,
          f,
          v,
          b,
          y,
          _ = !0,
          x = l.isXML(t),
          k = [],
          C = e;
        do {
          if (
            (s.exec(""), (r = s.exec(C)) && ((C = r[3]), k.push(r[1]), r[2]))
          ) {
            p = r[3];
            break;
          }
        } while (r);
        if (k.length > 1 && c.exec(e))
          if (2 === k.length && h.relative[k[0]]) u = m(k[0] + k[1], t);
          else
            for (u = h.relative[k[0]] ? [t] : l(k.shift(), t); k.length; )
              (e = k.shift()), h.relative[e] && (e += k.shift()), (u = m(e, u));
        else if (
          (!n &&
            k.length > 1 &&
            9 === t.nodeType &&
            !x &&
            h.match.ID.test(k[0]) &&
            !h.match.ID.test(k[k.length - 1]) &&
            (t = (f = l.find(k.shift(), t, x)).expr
              ? l.filter(f.expr, f.set)[0]
              : f.set[0]),
          t)
        )
          for (
            u = (f = n
              ? { expr: k.pop(), set: g(n) }
              : l.find(
                  k.pop(),
                  1 !== k.length ||
                    ("~" !== k[0] && "+" !== k[0]) ||
                    !t.parentNode
                    ? t
                    : t.parentNode,
                  x
                )).expr
              ? l.filter(f.expr, f.set)
              : f.set,
              k.length > 0 ? (d = g(u)) : (_ = !1);
            k.length;

          )
            (b = v = k.pop()),
              h.relative[v] ? (b = k.pop()) : (v = ""),
              null == b && (b = t),
              h.relative[v](d, b, x);
        else d = k = [];
        if (
          (d || (d = u), d || l.error(v || e), "[object Array]" === o.call(d))
        )
          if (_)
            if (t && 1 === t.nodeType)
              for (y = 0; null != d[y]; y++)
                d[y] &&
                  (!0 === d[y] ||
                    (1 === d[y].nodeType && l.contains(t, d[y]))) &&
                  i.push(u[y]);
            else
              for (y = 0; null != d[y]; y++)
                d[y] && 1 === d[y].nodeType && i.push(u[y]);
          else i.push.apply(i, d);
        else g(d, i);
        return p && (l(p, a, i, n), l.uniqueSort(i)), i;
      };
      (l.uniqueSort = function (e) {
        if (p && ((a = r), e.sort(p), a))
          for (var t = 1; t < e.length; t++)
            e[t] === e[t - 1] && e.splice(t--, 1);
        return e;
      }),
        (l.matches = function (e, t) {
          return l(e, null, null, t);
        }),
        (l.matchesSelector = function (e, t) {
          return l(t, null, null, [e]).length > 0;
        }),
        (l.find = function (e, t, i) {
          var s;
          if (!e) return [];
          for (var n = 0, o = h.order.length; n < o; n++) {
            var a,
              r = h.order[n];
            if ((a = h.leftMatch[r].exec(e))) {
              var l = a[1];
              if (
                (a.splice(1, 1),
                "\\" !== l.substr(l.length - 1) &&
                  ((a[1] = (a[1] || "").replace(/\\/g, "")),
                  null != (s = h.find[r](a, t, i))))
              ) {
                e = e.replace(h.match[r], "");
                break;
              }
            }
          }
          return (
            s ||
              (s =
                void 0 !== t.getElementsByTagName
                  ? t.getElementsByTagName("*")
                  : []),
            { set: s, expr: e }
          );
        }),
        (l.filter = function (e, i, s, n) {
          for (
            var o, a, r = e, c = [], u = i, d = i && i[0] && l.isXML(i[0]);
            e && i.length;

          ) {
            for (var p in h.filter)
              if (null != (o = h.leftMatch[p].exec(e)) && o[2]) {
                var f,
                  g,
                  m = h.filter[p],
                  v = o[1];
                if (((a = !1), o.splice(1, 1), "\\" === v.substr(v.length - 1)))
                  continue;
                if ((u === c && (c = []), h.preFilter[p]))
                  if ((o = h.preFilter[p](o, u, s, c, n, d))) {
                    if (!0 === o) continue;
                  } else a = f = !0;
                if (o)
                  for (var b = 0; null != (g = u[b]); b++)
                    if (g) {
                      var y = n ^ !!(f = m(g, o, b, u));
                      s && null != f
                        ? y
                          ? (a = !0)
                          : (u[b] = !1)
                        : y && (c.push(g), (a = !0));
                    }
                if (f !== t) {
                  if ((s || (u = c), (e = e.replace(h.match[p], "")), !a))
                    return [];
                  break;
                }
              }
            if (e === r) {
              if (null != a) break;
              l.error(e);
            }
            r = e;
          }
          return u;
        }),
        (l.error = function (e) {
          throw "Syntax error, unrecognized expression: " + e;
        });
      var h = (l.selectors = {
          order: ["ID", "NAME", "TAG"],
          match: {
            ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
            CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
            NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
            ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
            TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
            CHILD:
              /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
            POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
            PSEUDO:
              /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/,
          },
          leftMatch: {},
          attrMap: { class: "className", for: "htmlFor" },
          attrHandle: {
            href: function (e) {
              return e.getAttribute("href");
            },
          },
          relative: {
            "+": function (e, t) {
              var i = "string" == typeof t,
                s = i && !/\W/.test(t),
                n = i && !s;
              s && (t = t.toLowerCase());
              for (var o, a = 0, r = e.length; a < r; a++)
                if ((o = e[a])) {
                  for (; (o = o.previousSibling) && 1 !== o.nodeType; );
                  e[a] =
                    n || (o && o.nodeName.toLowerCase() === t)
                      ? o || !1
                      : o === t;
                }
              n && l.filter(t, e, !0);
            },
            ">": function (e, t) {
              var i,
                s = "string" == typeof t,
                n = 0,
                o = e.length;
              if (s && !/\W/.test(t)) {
                for (t = t.toLowerCase(); n < o; n++)
                  if ((i = e[n])) {
                    var a = i.parentNode;
                    e[n] = a.nodeName.toLowerCase() === t && a;
                  }
              } else {
                for (; n < o; n++)
                  (i = e[n]) && (e[n] = s ? i.parentNode : i.parentNode === t);
                s && l.filter(t, e, !0);
              }
            },
            "": function (t, s, o) {
              var a,
                r = n++,
                l = e;
              "string" == typeof s &&
                !/\W/.test(s) &&
                ((a = s = s.toLowerCase()), (l = i)),
                l("parentNode", s, r, t, a, o);
            },
            "~": function (t, s, o) {
              var a,
                r = n++,
                l = e;
              "string" == typeof s &&
                !/\W/.test(s) &&
                ((a = s = s.toLowerCase()), (l = i)),
                l("previousSibling", s, r, t, a, o);
            },
          },
          find: {
            ID: function (e, t, i) {
              if (void 0 !== t.getElementById && !i) {
                var s = t.getElementById(e[1]);
                return s && s.parentNode ? [s] : [];
              }
            },
            NAME: function (e, t) {
              if (void 0 !== t.getElementsByName) {
                for (
                  var i = [],
                    s = t.getElementsByName(e[1]),
                    n = 0,
                    o = s.length;
                  n < o;
                  n++
                )
                  s[n].getAttribute("name") === e[1] && i.push(s[n]);
                return 0 === i.length ? null : i;
              }
            },
            TAG: function (e, t) {
              if (void 0 !== t.getElementsByTagName)
                return t.getElementsByTagName(e[1]);
            },
          },
          preFilter: {
            CLASS: function (e, t, i, s, n, o) {
              if (((e = " " + e[1].replace(/\\/g, "") + " "), o)) return e;
              for (var a, r = 0; null != (a = t[r]); r++)
                a &&
                  (n ^
                  (a.className &&
                    (" " + a.className + " ")
                      .replace(/[\t\n\r]/g, " ")
                      .indexOf(e) >= 0)
                    ? i || s.push(a)
                    : i && (t[r] = !1));
              return !1;
            },
            ID: function (e) {
              return e[1].replace(/\\/g, "");
            },
            TAG: function (e, t) {
              return e[1].toLowerCase();
            },
            CHILD: function (e) {
              if ("nth" === e[1]) {
                e[2] || l.error(e[0]), (e[2] = e[2].replace(/^\+|\s*/g, ""));
                var t = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(
                  ("even" === e[2] ? "2n" : "odd" === e[2] && "2n+1") ||
                    (!/\D/.test(e[2]) && "0n+" + e[2]) ||
                    e[2]
                );
                (e[2] = t[1] + (t[2] || 1) - 0), (e[3] = t[3] - 0);
              } else e[2] && l.error(e[0]);
              return (e[0] = n++), e;
            },
            ATTR: function (e, t, i, s, n, o) {
              var a = (e[1] = e[1].replace(/\\/g, ""));
              return (
                !o && h.attrMap[a] && (e[1] = h.attrMap[a]),
                (e[4] = (e[4] || e[5] || "").replace(/\\/g, "")),
                "~=" === e[2] && (e[4] = " " + e[4] + " "),
                e
              );
            },
            PSEUDO: function (e, t, i, n, o) {
              if ("not" === e[1]) {
                if (!((s.exec(e[3]) || "").length > 1 || /^\w/.test(e[3]))) {
                  var a = l.filter(e[3], t, i, !0 ^ o);
                  return i || n.push.apply(n, a), !1;
                }
                e[3] = l(e[3], null, null, t);
              } else if (h.match.POS.test(e[0]) || h.match.CHILD.test(e[0]))
                return !0;
              return e;
            },
            POS: function (e) {
              return e.unshift(!0), e;
            },
          },
          filters: {
            enabled: function (e) {
              return !1 === e.disabled && "hidden" !== e.type;
            },
            disabled: function (e) {
              return !0 === e.disabled;
            },
            checked: function (e) {
              return !0 === e.checked;
            },
            selected: function (e) {
              return e.parentNode.selectedIndex, !0 === e.selected;
            },
            parent: function (e) {
              return !!e.firstChild;
            },
            empty: function (e) {
              return !e.firstChild;
            },
            has: function (e, t, i) {
              return !!l(i[3], e).length;
            },
            header: function (e) {
              return /h\d/i.test(e.nodeName);
            },
            text: function (e) {
              return "text" === e.type;
            },
            radio: function (e) {
              return "radio" === e.type;
            },
            checkbox: function (e) {
              return "checkbox" === e.type;
            },
            file: function (e) {
              return "file" === e.type;
            },
            password: function (e) {
              return "password" === e.type;
            },
            submit: function (e) {
              return "submit" === e.type;
            },
            image: function (e) {
              return "image" === e.type;
            },
            reset: function (e) {
              return "reset" === e.type;
            },
            button: function (e) {
              return (
                "button" === e.type || "button" === e.nodeName.toLowerCase()
              );
            },
            input: function (e) {
              return /input|select|textarea|button/i.test(e.nodeName);
            },
          },
          setFilters: {
            first: function (e, t) {
              return 0 === t;
            },
            last: function (e, t, i, s) {
              return t === s.length - 1;
            },
            even: function (e, t) {
              return t % 2 == 0;
            },
            odd: function (e, t) {
              return t % 2 == 1;
            },
            lt: function (e, t, i) {
              return t < i[3] - 0;
            },
            gt: function (e, t, i) {
              return t > i[3] - 0;
            },
            nth: function (e, t, i) {
              return i[3] - 0 === t;
            },
            eq: function (e, t, i) {
              return i[3] - 0 === t;
            },
          },
          filter: {
            PSEUDO: function (e, t, i, s) {
              var n = t[1],
                o = h.filters[n];
              if (o) return o(e, i, t, s);
              if ("contains" === n)
                return (
                  (
                    e.textContent ||
                    e.innerText ||
                    l.getText([e]) ||
                    ""
                  ).indexOf(t[3]) >= 0
                );
              if ("not" === n) {
                for (var a = t[3], r = 0, c = a.length; r < c; r++)
                  if (a[r] === e) return !1;
                return !0;
              }
              l.error(n);
            },
            CHILD: function (e, t) {
              var i = t[1],
                s = e;
              switch (i) {
                case "only":
                case "first":
                  for (; (s = s.previousSibling); )
                    if (1 === s.nodeType) return !1;
                  if ("first" === i) return !0;
                  s = e;
                case "last":
                  for (; (s = s.nextSibling); ) if (1 === s.nodeType) return !1;
                  return !0;
                case "nth":
                  var n = t[2],
                    o = t[3];
                  if (1 === n && 0 === o) return !0;
                  var a = t[0],
                    r = e.parentNode;
                  if (r && (r.sizcache !== a || !e.nodeIndex)) {
                    var l = 0;
                    for (s = r.firstChild; s; s = s.nextSibling)
                      1 === s.nodeType && (s.nodeIndex = ++l);
                    r.sizcache = a;
                  }
                  var h = e.nodeIndex - o;
                  return 0 === n ? 0 === h : h % n == 0 && h / n >= 0;
              }
            },
            ID: function (e, t) {
              return 1 === e.nodeType && e.getAttribute("id") === t;
            },
            TAG: function (e, t) {
              return (
                ("*" === t && 1 === e.nodeType) ||
                e.nodeName.toLowerCase() === t
              );
            },
            CLASS: function (e, t) {
              return (
                (" " + (e.className || e.getAttribute("class")) + " ").indexOf(
                  t
                ) > -1
              );
            },
            ATTR: function (e, t) {
              var i = t[1],
                s = h.attrHandle[i]
                  ? h.attrHandle[i](e)
                  : null != e[i]
                  ? e[i]
                  : e.getAttribute(i),
                n = s + "",
                o = t[2],
                a = t[4];
              return null == s
                ? "!=" === o
                : "=" === o
                ? n === a
                : "*=" === o
                ? n.indexOf(a) >= 0
                : "~=" === o
                ? (" " + n + " ").indexOf(a) >= 0
                : a
                ? "!=" === o
                  ? n !== a
                  : "^=" === o
                  ? 0 === n.indexOf(a)
                  : "$=" === o
                  ? n.substr(n.length - a.length) === a
                  : "|=" === o &&
                    (n === a || n.substr(0, a.length + 1) === a + "-")
                : n && !1 !== s;
            },
            POS: function (e, t, i, s) {
              var n = t[2],
                o = h.setFilters[n];
              if (o) return o(e, i, t, s);
            },
          },
        }),
        c = h.match.POS,
        u = function (e, t) {
          return "\\" + (t - 0 + 1);
        };
      for (var d in h.match)
        (h.match[d] = new RegExp(
          h.match[d].source + /(?![^\[]*\])(?![^\(]*\))/.source
        )),
          (h.leftMatch[d] = new RegExp(
            /(^(?:.|\r|\n)*?)/.source + h.match[d].source.replace(/\\(\d+)/g, u)
          ));
      var p,
        f,
        g = function (e, t) {
          return (
            (e = Array.prototype.slice.call(e, 0)),
            t ? (t.push.apply(t, e), t) : e
          );
        };
      try {
        Array.prototype.slice.call(w.documentElement.childNodes, 0)[0].nodeType;
      } catch (e) {
        g = function (e, t) {
          var i = 0,
            s = t || [];
          if ("[object Array]" === o.call(e)) Array.prototype.push.apply(s, e);
          else if ("number" == typeof e.length)
            for (var n = e.length; i < n; i++) s.push(e[i]);
          else for (; e[i]; i++) s.push(e[i]);
          return s;
        };
      }
      w.documentElement.compareDocumentPosition
        ? (p = function (e, t) {
            return e === t
              ? ((a = !0), 0)
              : e.compareDocumentPosition && t.compareDocumentPosition
              ? 4 & e.compareDocumentPosition(t)
                ? -1
                : 1
              : e.compareDocumentPosition
              ? -1
              : 1;
          })
        : ((p = function (e, t) {
            var i,
              s,
              n = [],
              o = [],
              r = e.parentNode,
              l = t.parentNode,
              h = r;
            if (e === t) return (a = !0), 0;
            if (r === l) return f(e, t);
            if (!r) return -1;
            if (!l) return 1;
            for (; h; ) n.unshift(h), (h = h.parentNode);
            for (h = l; h; ) o.unshift(h), (h = h.parentNode);
            (i = n.length), (s = o.length);
            for (var c = 0; c < i && c < s; c++)
              if (n[c] !== o[c]) return f(n[c], o[c]);
            return c === i ? f(e, o[c], -1) : f(n[c], t, 1);
          }),
          (f = function (e, t, i) {
            if (e === t) return i;
            for (var s = e.nextSibling; s; ) {
              if (s === t) return -1;
              s = s.nextSibling;
            }
            return 1;
          })),
        (l.getText = function (e) {
          for (var t, i = "", s = 0; e[s]; s++)
            3 === (t = e[s]).nodeType || 4 === t.nodeType
              ? (i += t.nodeValue)
              : 8 !== t.nodeType && (i += l.getText(t.childNodes));
          return i;
        }),
        (function () {
          var e = w.createElement("div"),
            i = "script" + new Date().getTime(),
            s = w.documentElement;
          (e.innerHTML = "<a name='" + i + "'/>"),
            s.insertBefore(e, s.firstChild),
            w.getElementById(i) &&
              ((h.find.ID = function (e, i, s) {
                if (void 0 !== i.getElementById && !s) {
                  var n = i.getElementById(e[1]);
                  return n
                    ? n.id === e[1] ||
                      (void 0 !== n.getAttributeNode &&
                        n.getAttributeNode("id").nodeValue === e[1])
                      ? [n]
                      : t
                    : [];
                }
              }),
              (h.filter.ID = function (e, t) {
                var i =
                  void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                return 1 === e.nodeType && i && i.nodeValue === t;
              })),
            s.removeChild(e),
            (s = e = null);
        })(),
        (function () {
          var e = w.createElement("div");
          e.appendChild(w.createComment("")),
            e.getElementsByTagName("*").length > 0 &&
              (h.find.TAG = function (e, t) {
                var i = t.getElementsByTagName(e[1]);
                if ("*" === e[1]) {
                  for (var s = [], n = 0; i[n]; n++)
                    1 === i[n].nodeType && s.push(i[n]);
                  i = s;
                }
                return i;
              }),
            (e.innerHTML = "<a href='#'></a>"),
            e.firstChild &&
              void 0 !== e.firstChild.getAttribute &&
              "#" !== e.firstChild.getAttribute("href") &&
              (h.attrHandle.href = function (e) {
                return e.getAttribute("href", 2);
              }),
            (e = null);
        })(),
        w.querySelectorAll &&
          (function () {
            var e = l,
              t = w.createElement("div");
            if (
              ((t.innerHTML = "<p class='TEST'></p>"),
              !t.querySelectorAll || 0 !== t.querySelectorAll(".TEST").length)
            ) {
              for (var i in ((l = function (t, i, s, n) {
                if (((i = i || w), !n && !l.isXML(i))) {
                  var o = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);
                  if (o && (1 === i.nodeType || 9 === i.nodeType)) {
                    if (o[1]) return g(i.getElementsByTagName(t), s);
                    if (o[2] && h.find.CLASS && i.getElementsByClassName)
                      return g(i.getElementsByClassName(o[2]), s);
                  }
                  if (9 === i.nodeType) {
                    if ("body" === t && i.body) return g([i.body], s);
                    if (o && o[3]) {
                      var a = i.getElementById(o[3]);
                      if (!a || !a.parentNode) return g([], s);
                      if (a.id === o[3]) return g([a], s);
                    }
                    try {
                      return g(i.querySelectorAll(t), s);
                    } catch (e) {}
                  } else if (
                    1 === i.nodeType &&
                    "object" !== i.nodeName.toLowerCase()
                  ) {
                    var r = i.getAttribute("id"),
                      c = r || "__sizzle__",
                      u = i.parentNode,
                      d = /^\s*[+~]/.test(t);
                    r ? (c = c.replace(/'/g, "\\$&")) : i.setAttribute("id", c),
                      d && u && (i = i.parentNode);
                    try {
                      if (!d || u)
                        return g(
                          i.querySelectorAll("[id='" + c + "'] " + t),
                          s
                        );
                    } catch (e) {
                    } finally {
                      r || i.removeAttribute("id");
                    }
                  }
                }
                return e(t, i, s, n);
              }),
              e))
                l[i] = e[i];
              t = null;
            }
          })(),
        (function () {
          var e = w.documentElement,
            t =
              e.matchesSelector ||
              e.mozMatchesSelector ||
              e.webkitMatchesSelector ||
              e.msMatchesSelector,
            i = !1;
          try {
            t.call(w.documentElement, "[test!='']:sizzle");
          } catch (e) {
            i = !0;
          }
          t &&
            (l.matchesSelector = function (e, s) {
              if (
                ((s = s.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']")),
                !l.isXML(e))
              )
                try {
                  if (i || (!h.match.PSEUDO.test(s) && !/!=/.test(s)))
                    return t.call(e, s);
                } catch (e) {}
              return l(s, null, null, [e]).length > 0;
            });
        })(),
        (function () {
          var e = w.createElement("div");
          if (
            ((e.innerHTML =
              "<div class='test e'></div><div class='test'></div>"),
            e.getElementsByClassName &&
              0 !== e.getElementsByClassName("e").length)
          ) {
            if (
              ((e.lastChild.className = "e"),
              1 === e.getElementsByClassName("e").length)
            )
              return;
            h.order.splice(1, 0, "CLASS"),
              (h.find.CLASS = function (e, t, i) {
                if (void 0 !== t.getElementsByClassName && !i)
                  return t.getElementsByClassName(e[1]);
              }),
              (e = null);
          }
        })(),
        w.documentElement.contains
          ? (l.contains = function (e, t) {
              return e !== t && (!e.contains || e.contains(t));
            })
          : w.documentElement.compareDocumentPosition
          ? (l.contains = function (e, t) {
              return !!(16 & e.compareDocumentPosition(t));
            })
          : (l.contains = function () {
              return !1;
            }),
        (l.isXML = function (e) {
          var t = (e ? e.ownerDocument || e : 0).documentElement;
          return !!t && "HTML" !== t.nodeName;
        });
      var m = function (e, t) {
        for (
          var i, s = [], n = "", o = t.nodeType ? [t] : t;
          (i = h.match.PSEUDO.exec(e));

        )
          (n += i[0]), (e = e.replace(h.match.PSEUDO, ""));
        e = h.relative[e] ? e + "*" : e;
        for (var a = 0, r = o.length; a < r; a++) l(e, o[a], s);
        return l.filter(n, s);
      };
      (x.find = l),
        (x.expr = l.selectors),
        (x.expr[":"] = x.expr.filters),
        (x.unique = l.uniqueSort),
        (x.text = l.getText),
        (x.isXMLDoc = l.isXML),
        (x.contains = l.contains);
    })();
  var $ = /Until$/,
    X = /^(?:parents|prevUntil|prevAll)/,
    K = /,/,
    Q = /^.[^:#\[\.,]*$/,
    U = Array.prototype.slice,
    V = x.expr.match.POS,
    G = { children: !0, contents: !0, next: !0, prev: !0 };
  x.fn.extend({
    find: function (e) {
      for (
        var t = this.pushStack("", "find", e), i = 0, s = 0, n = this.length;
        s < n;
        s++
      )
        if (((i = t.length), x.find(e, this[s], t), s > 0))
          for (var o = i; o < t.length; o++)
            for (var a = 0; a < i; a++)
              if (t[a] === t[o]) {
                t.splice(o--, 1);
                break;
              }
      return t;
    },
    has: function (e) {
      var t = x(e);
      return this.filter(function () {
        for (var e = 0, i = t.length; e < i; e++)
          if (x.contains(this, t[e])) return !0;
      });
    },
    not: function (e) {
      return this.pushStack(p(this, e, !1), "not", e);
    },
    filter: function (e) {
      return this.pushStack(p(this, e, !0), "filter", e);
    },
    is: function (e) {
      return !!e && x.filter(e, this).length > 0;
    },
    closest: function (e, t) {
      var i,
        s,
        n = [],
        o = this[0];
      if (x.isArray(e)) {
        var a,
          r,
          l = {},
          h = 1;
        if (o && e.length) {
          for (i = 0, s = e.length; i < s; i++)
            l[(r = e[i])] ||
              (l[r] = x.expr.match.POS.test(r) ? x(r, t || this.context) : r);
          for (; o && o.ownerDocument && o !== t; ) {
            for (r in l)
              ((a = l[r]).jquery ? a.index(o) > -1 : x(o).is(a)) &&
                n.push({ selector: r, elem: o, level: h });
            (o = o.parentNode), h++;
          }
        }
        return n;
      }
      var c = V.test(e) ? x(e, t || this.context) : null;
      for (i = 0, s = this.length; i < s; i++)
        for (o = this[i]; o; ) {
          if (c ? c.index(o) > -1 : x.find.matchesSelector(o, e)) {
            n.push(o);
            break;
          }
          if (!(o = o.parentNode) || !o.ownerDocument || o === t) break;
        }
      return (
        (n = n.length > 1 ? x.unique(n) : n), this.pushStack(n, "closest", e)
      );
    },
    index: function (e) {
      return e && "string" != typeof e
        ? x.inArray(e.jquery ? e[0] : e, this)
        : x.inArray(this[0], e ? x(e) : this.parent().children());
    },
    add: function (e, t) {
      var i = "string" == typeof e ? x(e, t) : x.makeArray(e),
        s = x.merge(this.get(), i);
      return this.pushStack(f(i[0]) || f(s[0]) ? s : x.unique(s));
    },
    andSelf: function () {
      return this.add(this.prevObject);
    },
  }),
    x.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return x.dir(e, "parentNode");
        },
        parentsUntil: function (e, t, i) {
          return x.dir(e, "parentNode", i);
        },
        next: function (e) {
          return x.nth(e, 2, "nextSibling");
        },
        prev: function (e) {
          return x.nth(e, 2, "previousSibling");
        },
        nextAll: function (e) {
          return x.dir(e, "nextSibling");
        },
        prevAll: function (e) {
          return x.dir(e, "previousSibling");
        },
        nextUntil: function (e, t, i) {
          return x.dir(e, "nextSibling", i);
        },
        prevUntil: function (e, t, i) {
          return x.dir(e, "previousSibling", i);
        },
        siblings: function (e) {
          return x.sibling(e.parentNode.firstChild, e);
        },
        children: function (e) {
          return x.sibling(e.firstChild);
        },
        contents: function (e) {
          return x.nodeName(e, "iframe")
            ? e.contentDocument || e.contentWindow.document
            : x.makeArray(e.childNodes);
        },
      },
      function (e, t) {
        x.fn[e] = function (i, s) {
          var n = x.map(this, t, i),
            o = U.call(arguments);
          return (
            $.test(e) || (s = i),
            s && "string" == typeof s && (n = x.filter(s, n)),
            (n = this.length > 1 && !G[e] ? x.unique(n) : n),
            (this.length > 1 || K.test(s)) && X.test(e) && (n = n.reverse()),
            this.pushStack(n, e, o.join(","))
          );
        };
      }
    ),
    x.extend({
      filter: function (e, t, i) {
        return (
          i && (e = ":not(" + e + ")"),
          1 === t.length
            ? x.find.matchesSelector(t[0], e)
              ? [t[0]]
              : []
            : x.find.matches(e, t)
        );
      },
      dir: function (e, i, s) {
        for (
          var n = [], o = e[i];
          o && 9 !== o.nodeType && (s === t || 1 !== o.nodeType || !x(o).is(s));

        )
          1 === o.nodeType && n.push(o), (o = o[i]);
        return n;
      },
      nth: function (e, t, i, s) {
        t = t || 1;
        for (var n = 0; e && (1 !== e.nodeType || ++n !== t); e = e[i]);
        return e;
      },
      sibling: function (e, t) {
        for (var i = []; e; e = e.nextSibling)
          1 === e.nodeType && e !== t && i.push(e);
        return i;
      },
    });
  var Z = / jQuery\d+="(?:\d+|null)"/g,
    J = /^\s+/,
    ee =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    te = /<([\w:]+)/,
    ie = /<tbody/i,
    se = /<|&#?\w+;/,
    ne = /<(?:script|object|embed|option|style)/i,
    oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
    ae = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      area: [1, "<map>", "</map>"],
      _default: [0, "", ""],
    };
  (ae.optgroup = ae.option),
    (ae.tbody = ae.tfoot = ae.colgroup = ae.caption = ae.thead),
    (ae.th = ae.td),
    x.support.htmlSerialize || (ae._default = [1, "div<div>", "</div>"]),
    x.fn.extend({
      text: function (e) {
        return x.isFunction(e)
          ? this.each(function (t) {
              var i = x(this);
              i.text(e.call(this, t, i.text()));
            })
          : "object" != typeof e && e !== t
          ? this.empty().append(
              ((this[0] && this[0].ownerDocument) || w).createTextNode(e)
            )
          : x.text(this);
      },
      wrapAll: function (e) {
        if (x.isFunction(e))
          return this.each(function (t) {
            x(this).wrapAll(e.call(this, t));
          });
        if (this[0]) {
          var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (
                  var e = this;
                  e.firstChild && 1 === e.firstChild.nodeType;

                )
                  e = e.firstChild;
                return e;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (e) {
        return x.isFunction(e)
          ? this.each(function (t) {
              x(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = x(this),
                i = t.contents();
              i.length ? i.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        return this.each(function () {
          x(this).wrapAll(e);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            x.nodeName(this, "body") || x(this).replaceWith(this.childNodes);
          })
          .end();
      },
      append: function () {
        return this.domManip(arguments, !0, function (e) {
          1 === this.nodeType && this.appendChild(e);
        });
      },
      prepend: function () {
        return this.domManip(arguments, !0, function (e) {
          1 === this.nodeType && this.insertBefore(e, this.firstChild);
        });
      },
      before: function () {
        if (this[0] && this[0].parentNode)
          return this.domManip(arguments, !1, function (e) {
            this.parentNode.insertBefore(e, this);
          });
        if (arguments.length) {
          var e = x(arguments[0]);
          return (
            e.push.apply(e, this.toArray()),
            this.pushStack(e, "before", arguments)
          );
        }
      },
      after: function () {
        if (this[0] && this[0].parentNode)
          return this.domManip(arguments, !1, function (e) {
            this.parentNode.insertBefore(e, this.nextSibling);
          });
        if (arguments.length) {
          var e = this.pushStack(this, "after", arguments);
          return e.push.apply(e, x(arguments[0]).toArray()), e;
        }
      },
      remove: function (e, t) {
        for (var i, s = 0; null != (i = this[s]); s++)
          (e && !x.filter(e, [i]).length) ||
            (!t &&
              1 === i.nodeType &&
              (x.cleanData(i.getElementsByTagName("*")), x.cleanData([i])),
            i.parentNode && i.parentNode.removeChild(i));
        return this;
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          for (
            1 === e.nodeType && x.cleanData(e.getElementsByTagName("*"));
            e.firstChild;

          )
            e.removeChild(e.firstChild);
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null == e || e),
          (t = null == t ? e : t),
          this.map(function () {
            return x.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        if (e === t)
          return this[0] && 1 === this[0].nodeType
            ? this[0].innerHTML.replace(Z, "")
            : null;
        if (
          "string" != typeof e ||
          ne.test(e) ||
          (!x.support.leadingWhitespace && J.test(e)) ||
          ae[(te.exec(e) || ["", ""])[1].toLowerCase()]
        )
          x.isFunction(e)
            ? this.each(function (t) {
                var i = x(this);
                i.html(e.call(this, t, i.html()));
              })
            : this.empty().append(e);
        else {
          e = e.replace(ee, "<$1></$2>");
          try {
            for (var i = 0, s = this.length; i < s; i++)
              1 === this[i].nodeType &&
                (x.cleanData(this[i].getElementsByTagName("*")),
                (this[i].innerHTML = e));
          } catch (t) {
            this.empty().append(e);
          }
        }
        return this;
      },
      replaceWith: function (e) {
        return this[0] && this[0].parentNode
          ? x.isFunction(e)
            ? this.each(function (t) {
                var i = x(this),
                  s = i.html();
                i.replaceWith(e.call(this, t, s));
              })
            : ("string" != typeof e && (e = x(e).detach()),
              this.each(function () {
                var t = this.nextSibling,
                  i = this.parentNode;
                x(this).remove(), t ? x(t).before(e) : x(i).append(e);
              }))
          : this.pushStack(x(x.isFunction(e) ? e() : e), "replaceWith", e);
      },
      detach: function (e) {
        return this.remove(e, !0);
      },
      domManip: function (e, i, s) {
        var n,
          o,
          a,
          r,
          l = e[0],
          c = [];
        if (
          !x.support.checkClone &&
          3 === arguments.length &&
          "string" == typeof l &&
          oe.test(l)
        )
          return this.each(function () {
            x(this).domManip(e, i, s, !0);
          });
        if (x.isFunction(l))
          return this.each(function (n) {
            var o = x(this);
            (e[0] = l.call(this, n, i ? o.html() : t)), o.domManip(e, i, s);
          });
        if (this[0]) {
          if (
            ((r = l && l.parentNode),
            (o =
              1 ===
              (a = (n =
                x.support.parentNode &&
                r &&
                11 === r.nodeType &&
                r.childNodes.length === this.length
                  ? { fragment: r }
                  : x.buildFragment(e, this, c)).fragment).childNodes.length
                ? (a = a.firstChild)
                : a.firstChild))
          ) {
            i = i && x.nodeName(o, "tr");
            for (var u = 0, p = this.length, f = p - 1; u < p; u++)
              s.call(
                i ? d(this[u]) : this[u],
                n.cacheable || (p > 1 && u < f) ? x.clone(a, !0, !0) : a
              );
          }
          c.length && x.each(c, h);
        }
        return this;
      },
    }),
    (x.buildFragment = function (e, t, i) {
      var s,
        n,
        o,
        a = t && t[0] ? t[0].ownerDocument || t[0] : w;
      return (
        1 === e.length &&
          "string" == typeof e[0] &&
          e[0].length < 512 &&
          a === w &&
          "<" === e[0].charAt(0) &&
          !ne.test(e[0]) &&
          (x.support.checkClone || !oe.test(e[0])) &&
          ((n = !0), (o = x.fragments[e[0]]) && 1 !== o && (s = o)),
        s || ((s = a.createDocumentFragment()), x.clean(e, a, s, i)),
        n && (x.fragments[e[0]] = o ? s : 1),
        { fragment: s, cacheable: n }
      );
    }),
    (x.fragments = {}),
    x.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        x.fn[e] = function (i) {
          var s = [],
            n = x(i),
            o = 1 === this.length && this[0].parentNode;
          if (
            o &&
            11 === o.nodeType &&
            1 === o.childNodes.length &&
            1 === n.length
          )
            return n[t](this[0]), this;
          for (var a = 0, r = n.length; a < r; a++) {
            var l = (a > 0 ? this.clone(!0) : this).get();
            x(n[a])[t](l), (s = s.concat(l));
          }
          return this.pushStack(s, e, n.selector);
        };
      }
    ),
    x.extend({
      clone: function (e, t, i) {
        var s,
          n,
          o,
          a = e.cloneNode(!0);
        if (
          !(
            x.support.noCloneEvent ||
            (1 !== e.nodeType && 11 !== e.nodeType) ||
            x.isXMLDoc(e)
          )
        ) {
          for (
            s = e.getElementsByTagName("*"),
              n = a.getElementsByTagName("*"),
              o = 0;
            s[o];
            ++o
          )
            c(s[o], n[o]);
          c(e, a);
        }
        if (
          t &&
          (u(e, a),
          i &&
            "getElementsByTagName" in e &&
            ((s = e.getElementsByTagName("*")),
            (n = a.getElementsByTagName("*")),
            s.length))
        )
          for (o = 0; s[o]; ++o) u(s[o], n[o]);
        return a;
      },
      clean: function (e, t, i, s) {
        void 0 === (t = t || w).createElement &&
          (t = t.ownerDocument || (t[0] && t[0].ownerDocument) || w);
        for (var n, o = [], a = 0; null != (n = e[a]); a++)
          if (("number" == typeof n && (n += ""), n)) {
            if ("string" != typeof n || se.test(n)) {
              if ("string" == typeof n) {
                n = n.replace(ee, "<$1></$2>");
                var r = (te.exec(n) || ["", ""])[1].toLowerCase(),
                  l = ae[r] || ae._default,
                  h = l[0],
                  c = t.createElement("div");
                for (c.innerHTML = l[1] + n + l[2]; h--; ) c = c.lastChild;
                if (!x.support.tbody)
                  for (
                    var u = ie.test(n),
                      d =
                        "table" !== r || u
                          ? "<table>" !== l[1] || u
                            ? []
                            : c.childNodes
                          : c.firstChild && c.firstChild.childNodes,
                      p = d.length - 1;
                    p >= 0;
                    --p
                  )
                    x.nodeName(d[p], "tbody") &&
                      !d[p].childNodes.length &&
                      d[p].parentNode.removeChild(d[p]);
                !x.support.leadingWhitespace &&
                  J.test(n) &&
                  c.insertBefore(t.createTextNode(J.exec(n)[0]), c.firstChild),
                  (n = c.childNodes);
              }
            } else n = t.createTextNode(n);
            n.nodeType ? o.push(n) : (o = x.merge(o, n));
          }
        if (i)
          for (a = 0; o[a]; a++)
            !s ||
            !x.nodeName(o[a], "script") ||
            (o[a].type && "text/javascript" !== o[a].type.toLowerCase())
              ? (1 === o[a].nodeType &&
                  o.splice.apply(
                    o,
                    [a + 1, 0].concat(
                      x.makeArray(o[a].getElementsByTagName("script"))
                    )
                  ),
                i.appendChild(o[a]))
              : s.push(
                  o[a].parentNode ? o[a].parentNode.removeChild(o[a]) : o[a]
                );
        return o;
      },
      cleanData: function (e) {
        for (
          var t,
            i,
            s,
            n = x.cache,
            o = x.expando,
            a = x.event.special,
            r = x.support.deleteExpando,
            l = 0;
          null != (s = e[l]);
          l++
        )
          if (
            (!s.nodeName || !x.noData[s.nodeName.toLowerCase()]) &&
            (i = s[x.expando])
          ) {
            if ((t = n[i] && n[i][o]) && t.events) {
              for (var h in t.events)
                a[h] ? x.event.remove(s, h) : x.removeEvent(s, h, t.handle);
              t.handle && (t.handle.elem = null);
            }
            r
              ? delete s[x.expando]
              : s.removeAttribute && s.removeAttribute(x.expando),
              delete n[i];
          }
      },
    });
  var re,
    le,
    he,
    ce = /alpha\([^)]*\)/i,
    ue = /opacity=([^)]*)/,
    de = /-([a-z])/gi,
    pe = /([A-Z])/g,
    fe = /^-?\d+(?:px)?$/i,
    ge = /^-?\d/,
    me = { position: "absolute", visibility: "hidden", display: "block" },
    ve = ["Left", "Right"],
    be = ["Top", "Bottom"],
    ye = function (e, t) {
      return t.toUpperCase();
    };
  (x.fn.css = function (e, i) {
    return 2 === arguments.length && i === t
      ? this
      : x.access(this, e, i, !0, function (e, i, s) {
          return s !== t ? x.style(e, i, s) : x.css(e, i);
        });
  }),
    x.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var i = re(e, "opacity", "opacity");
              return "" === i ? "1" : i;
            }
            return e.style.opacity;
          },
        },
      },
      cssNumber: {
        zIndex: !0,
        fontWeight: !0,
        opacity: !0,
        zoom: !0,
        lineHeight: !0,
      },
      cssProps: { float: x.support.cssFloat ? "cssFloat" : "styleFloat" },
      style: function (e, i, s, n) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var o,
            a = x.camelCase(i),
            r = e.style,
            l = x.cssHooks[a];
          if (((i = x.cssProps[a] || a), s === t))
            return l && "get" in l && (o = l.get(e, !1, n)) !== t ? o : r[i];
          if (("number" == typeof s && isNaN(s)) || null == s) return;
          if (
            ("number" == typeof s && !x.cssNumber[a] && (s += "px"),
            !(l && "set" in l && (s = l.set(e, s)) === t))
          )
            try {
              r[i] = s;
            } catch (e) {}
        }
      },
      css: function (e, i, s) {
        var n,
          o = x.camelCase(i),
          a = x.cssHooks[o];
        return (
          (i = x.cssProps[o] || o),
          a && "get" in a && (n = a.get(e, !0, s)) !== t
            ? n
            : re
            ? re(e, i, o)
            : void 0
        );
      },
      swap: function (e, t, i) {
        var s = {};
        for (var n in t) (s[n] = e.style[n]), (e.style[n] = t[n]);
        for (n in (i.call(e), t)) e.style[n] = s[n];
      },
      camelCase: function (e) {
        return e.replace(de, ye);
      },
    }),
    (x.curCSS = x.css),
    x.each(["height", "width"], function (e, t) {
      x.cssHooks[t] = {
        get: function (e, i, s) {
          var n;
          if (i)
            return (
              0 !== e.offsetWidth
                ? (n = l(e, t, s))
                : x.swap(e, me, function () {
                    n = l(e, t, s);
                  }),
              n <= 0 &&
              ("0px" === (n = re(e, t, t)) && he && (n = he(e, t, t)),
              null != n)
                ? "" === n || "auto" === n
                  ? "0px"
                  : n
                : n < 0 || null == n
                ? "" === (n = e.style[t]) || "auto" === n
                  ? "0px"
                  : n
                : "string" == typeof n
                ? n
                : n + "px"
            );
        },
        set: function (e, t) {
          return fe.test(t)
            ? (t = parseFloat(t)) >= 0
              ? t + "px"
              : void 0
            : t;
        },
      };
    }),
    x.support.opacity ||
      (x.cssHooks.opacity = {
        get: function (e, t) {
          return ue.test(
            (t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || ""
          )
            ? parseFloat(RegExp.$1) / 100 + ""
            : t
            ? "1"
            : "";
        },
        set: function (e, t) {
          var i = e.style;
          i.zoom = 1;
          var s = x.isNaN(t) ? "" : "alpha(opacity=" + 100 * t + ")",
            n = i.filter || "";
          i.filter = ce.test(n) ? n.replace(ce, s) : i.filter + " " + s;
        },
      }),
    w.defaultView &&
      w.defaultView.getComputedStyle &&
      (le = function (e, i, s) {
        var n, o, a;
        return (
          (s = s.replace(pe, "-$1").toLowerCase()),
          (o = e.ownerDocument.defaultView)
            ? ((a = o.getComputedStyle(e, null)) &&
                "" === (n = a.getPropertyValue(s)) &&
                !x.contains(e.ownerDocument.documentElement, e) &&
                (n = x.style(e, s)),
              n)
            : t
        );
      }),
    w.documentElement.currentStyle &&
      (he = function (e, t) {
        var i,
          s = e.currentStyle && e.currentStyle[t],
          n = e.runtimeStyle && e.runtimeStyle[t],
          o = e.style;
        return (
          !fe.test(s) &&
            ge.test(s) &&
            ((i = o.left),
            n && (e.runtimeStyle.left = e.currentStyle.left),
            (o.left = "fontSize" === t ? "1em" : s || 0),
            (s = o.pixelLeft + "px"),
            (o.left = i),
            n && (e.runtimeStyle.left = n)),
          "" === s ? "auto" : s
        );
      }),
    (re = le || he),
    x.expr &&
      x.expr.filters &&
      ((x.expr.filters.hidden = function (e) {
        var t = e.offsetWidth,
          i = e.offsetHeight;
        return (
          (0 === t && 0 === i) ||
          (!x.support.reliableHiddenOffsets &&
            "none" === (e.style.display || x.css(e, "display")))
        );
      }),
      (x.expr.filters.visible = function (e) {
        return !x.expr.filters.hidden(e);
      }));
  var _e = /%20/g,
    we = /\[\]$/,
    xe = /\r?\n/g,
    ke = /#.*$/,
    Ce = /^(.*?):\s*(.*?)\r?$/gm,
    De =
      /^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
    Te = /^(?:GET|HEAD)$/,
    Se = /^\/\//,
    Ie = /\?/,
    Me = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    Pe = /^(?:select|textarea)/i,
    Ne = /\s+/,
    Ee = /([?&])_=[^&]*/,
    ze = /^(\w+:)\/\/([^\/?#:]+)(?::(\d+))?/,
    Ae = x.fn.load,
    Oe = {},
    je = {};
  x.fn.extend({
    load: function (e, t, i) {
      if ("string" != typeof e && Ae) return Ae.apply(this, arguments);
      if (!this.length) return this;
      var s = e.indexOf(" ");
      if (s >= 0) {
        var n = e.slice(s, e.length);
        e = e.slice(0, s);
      }
      var o = "GET";
      t &&
        (x.isFunction(t)
          ? ((i = t), (t = null))
          : "object" == typeof t &&
            ((t = x.param(t, x.ajaxSettings.traditional)), (o = "POST")));
      var a = this;
      return (
        x.ajax({
          url: e,
          type: o,
          dataType: "html",
          data: t,
          complete: function (e, t, s) {
            (s = e.responseText),
              e.isResolved() &&
                (e.done(function (e) {
                  s = e;
                }),
                a.html(n ? x("<div>").append(s.replace(Me, "")).find(n) : s)),
              i && a.each(i, [s, t, e]);
          },
        }),
        this
      );
    },
    serialize: function () {
      return x.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        return this.elements ? x.makeArray(this.elements) : this;
      })
        .filter(function () {
          return (
            this.name &&
            !this.disabled &&
            (this.checked || Pe.test(this.nodeName) || De.test(this.type))
          );
        })
        .map(function (e, t) {
          var i = x(this).val();
          return null == i
            ? null
            : x.isArray(i)
            ? x.map(i, function (e, i) {
                return { name: t.name, value: e.replace(xe, "\r\n") };
              })
            : { name: t.name, value: i.replace(xe, "\r\n") };
        })
        .get();
    },
  }),
    x.each(
      "ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(
        " "
      ),
      function (e, t) {
        x.fn[t] = function (e) {
          return this.bind(t, e);
        };
      }
    ),
    x.each(["get", "post"], function (e, t) {
      x[t] = function (e, i, s, n) {
        return (
          x.isFunction(i) && ((n = n || s), (s = i), (i = null)),
          x.ajax({ type: t, url: e, data: i, success: s, dataType: n })
        );
      };
    }),
    x.extend({
      getScript: function (e, t) {
        return x.get(e, null, t, "script");
      },
      getJSON: function (e, t, i) {
        return x.get(e, t, i, "json");
      },
      ajaxSetup: function (e) {
        x.extend(!0, x.ajaxSettings, e),
          e.context && (x.ajaxSettings.context = e.context);
      },
      ajaxSettings: {
        url: location.href,
        global: !0,
        type: "GET",
        contentType: "application/x-www-form-urlencoded",
        processData: !0,
        async: !0,
        accepts: {
          xml: "application/xml, text/xml",
          html: "text/html",
          text: "text/plain",
          json: "application/json, text/javascript",
          "*": "*/*",
        },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: { xml: "responseXML", text: "responseText" },
        converters: {
          "* text": e.String,
          "text html": !0,
          "text json": x.parseJSON,
          "text xml": x.parseXML,
        },
      },
      ajaxPrefilter: r(Oe),
      ajaxTransport: r(je),
      ajax: function (e, i) {
        function s(e, i, s, o) {
          if (2 !== _) {
            (_ = 2),
              l && clearTimeout(l),
              (r = t),
              (n = o || ""),
              (k.readyState = e ? 4 : 0);
            var a,
              h,
              c,
              v,
              b,
              y = s
                ? (function (e, i, s) {
                    var n,
                      o,
                      a,
                      r,
                      l = e.contents,
                      h = e.dataTypes,
                      c = e.responseFields;
                    for (o in c) o in s && (i[c[o]] = s[o]);
                    for (; "*" === h[0]; )
                      h.shift(),
                        n === t && (n = i.getResponseHeader("content-type"));
                    if (n)
                      for (o in l)
                        if (l[o] && l[o].test(n)) {
                          h.unshift(o);
                          break;
                        }
                    if (h[0] in s) a = h[0];
                    else {
                      for (o in s) {
                        if (!h[0] || e.converters[o + " " + h[0]]) {
                          a = o;
                          break;
                        }
                        r || (r = o);
                      }
                      a = a || r;
                    }
                    if (a) return a !== h[0] && h.unshift(a), s[a];
                  })(u, k, s)
                : t;
            if ((e >= 200 && e < 300) || 304 === e)
              if (
                (u.ifModified &&
                  ((v = k.getResponseHeader("Last-Modified")) &&
                    (x.lastModified[u.url] = v),
                  (b = k.getResponseHeader("Etag")) && (x.etag[u.url] = b)),
                304 === e)
              )
                (i = "notmodified"), (a = !0);
              else
                try {
                  (h = (function (e, i) {
                    e.dataFilter && (i = e.dataFilter(i, e.dataType));
                    var s,
                      n,
                      o,
                      a,
                      r,
                      l,
                      h,
                      c = e.dataTypes,
                      u = e.converters,
                      d = c.length,
                      p = c[0];
                    for (s = 1; s < d; s++)
                      if (((o = p), "*" === (p = c[s]))) p = o;
                      else if ("*" !== o && o !== p) {
                        if (!(r = u[(a = o + " " + p)] || u["* " + p]))
                          for (l in ((h = t), u))
                            if (
                              ((n = l.split(" "))[0] === o || "*" === n[0]) &&
                              (h = u[n[1] + " " + p])
                            ) {
                              !0 === (l = u[l]) ? (r = h) : !0 === h && (r = l);
                              break;
                            }
                        !r &&
                          !h &&
                          x.error(
                            "No conversion from " + a.replace(" ", " to ")
                          ),
                          !0 !== r && (i = r ? r(i) : h(l(i)));
                      }
                    return i;
                  })(u, y)),
                    (i = "success"),
                    (a = !0);
                } catch (e) {
                  (i = "parsererror"), (c = e);
                }
            else (c = i), e && ((i = "error"), e < 0 && (e = 0));
            (k.status = e),
              (k.statusText = i),
              a ? f.resolveWith(d, [h, i, k]) : f.rejectWith(d, [k, i, c]),
              k.statusCode(m),
              (m = t),
              u.global &&
                p.trigger("ajax" + (a ? "Success" : "Error"), [
                  k,
                  u,
                  a ? h : c,
                ]),
              g.resolveWith(d, [k, i]),
              u.global &&
                (p.trigger("ajaxComplete", [k, u]),
                --x.active || x.event.trigger("ajaxStop"));
          }
        }
        "object" != typeof i && ((i = e), (e = t)), (i = i || {});
        var n,
          o,
          r,
          l,
          h,
          c,
          u = x.extend(!0, {}, x.ajaxSettings, i),
          d = (u.context = ("context" in i ? i : x.ajaxSettings).context) || u,
          p = d === u ? x.event : x(d),
          f = x.Deferred(),
          g = x._Deferred(),
          m = u.statusCode || {},
          v = {},
          b = w.location,
          y = b.protocol || "http:",
          _ = 0,
          k = {
            readyState: 0,
            setRequestHeader: function (e, t) {
              return 0 === _ && (v[e.toLowerCase()] = t), this;
            },
            getAllResponseHeaders: function () {
              return 2 === _ ? n : null;
            },
            getResponseHeader: function (e) {
              var t;
              if (2 === _) {
                if (!o)
                  for (o = {}; (t = Ce.exec(n)); ) o[t[1].toLowerCase()] = t[2];
                t = o[e.toLowerCase()];
              }
              return t || null;
            },
            abort: function (e) {
              return (e = e || "abort"), r && r.abort(e), s(0, e), this;
            },
          };
        if (
          (f.promise(k),
          (k.success = k.done),
          (k.error = k.fail),
          (k.complete = g.done),
          (k.statusCode = function (e) {
            var t;
            if (e)
              if (_ < 2) for (t in e) m[t] = [m[t], e[t]];
              else (t = e[k.status]), k.then(t, t);
            return this;
          }),
          (u.url = ("" + (e || u.url)).replace(ke, "").replace(Se, y + "//")),
          (u.dataTypes = x
            .trim(u.dataType || "*")
            .toLowerCase()
            .split(Ne)),
          u.crossDomain ||
            ((h = ze.exec(u.url.toLowerCase())),
            (u.crossDomain =
              h &&
              (h[1] != y ||
                h[2] != b.hostname ||
                (h[3] || ("http:" === h[1] ? 80 : 443)) !=
                  (b.port || ("http:" === y ? 80 : 443))))),
          u.data &&
            u.processData &&
            "string" != typeof u.data &&
            (u.data = x.param(u.data, u.traditional)),
          a(Oe, u, i, k),
          (u.type = u.type.toUpperCase()),
          (u.hasContent = !Te.test(u.type)),
          u.global && 0 == x.active++ && x.event.trigger("ajaxStart"),
          !u.hasContent &&
            (u.data && (u.url += (Ie.test(u.url) ? "&" : "?") + u.data),
            !1 === u.cache))
        ) {
          var C = x.now(),
            D = u.url.replace(Ee, "$1_=" + C);
          u.url =
            D + (D === u.url ? (Ie.test(u.url) ? "&" : "?") + "_=" + C : "");
        }
        for (c in (((u.data && u.hasContent && !1 !== u.contentType) ||
          i.contentType) &&
          (v["content-type"] = u.contentType),
        u.ifModified &&
          (x.lastModified[u.url] &&
            (v["if-modified-since"] = x.lastModified[u.url]),
          x.etag[u.url] && (v["if-none-match"] = x.etag[u.url])),
        (v.accept =
          u.dataTypes[0] && u.accepts[u.dataTypes[0]]
            ? u.accepts[u.dataTypes[0]] +
              ("*" !== u.dataTypes[0] ? ", */*; q=0.01" : "")
            : u.accepts["*"]),
        u.headers))
          v[c.toLowerCase()] = u.headers[c];
        if (!u.beforeSend || (!1 !== u.beforeSend.call(d, k, u) && 2 !== _)) {
          for (c in { success: 1, error: 1, complete: 1 }) k[c](u[c]);
          if ((r = a(je, u, i, k))) {
            (_ = k.readyState = 1),
              u.global && p.trigger("ajaxSend", [k, u]),
              u.async &&
                u.timeout > 0 &&
                (l = setTimeout(function () {
                  k.abort("timeout");
                }, u.timeout));
            try {
              r.send(v, s);
            } catch (e) {
              status < 2 ? s(-1, e) : x.error(e);
            }
          } else s(-1, "No Transport");
        } else s(0, "abort"), (k = !1);
        return k;
      },
      param: function (e, i) {
        var s = [],
          n = function (e, t) {
            (t = x.isFunction(t) ? t() : t),
              (s[s.length] =
                encodeURIComponent(e) + "=" + encodeURIComponent(t));
          };
        if (
          (i === t && (i = x.ajaxSettings.traditional),
          x.isArray(e) || e.jquery)
        )
          x.each(e, function () {
            n(this.name, this.value);
          });
        else for (var a in e) o(a, e[a], i, n);
        return s.join("&").replace(_e, "+");
      },
    }),
    x.extend({ active: 0, lastModified: {}, etag: {} });
  var He = x.now(),
    Fe = /(\=)\?(&|$)|()\?\?()/i;
  x.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      return x.expando + "_" + He++;
    },
  }),
    x.ajaxPrefilter("json jsonp", function (t, i, s) {
      if (
        ((s = "string" == typeof t.data),
        "jsonp" === t.dataTypes[0] ||
          i.jsonpCallback ||
          null != i.jsonp ||
          (!1 !== t.jsonp && (Fe.test(t.url) || (s && Fe.test(t.data)))))
      ) {
        var n,
          o = (t.jsonpCallback = x.isFunction(t.jsonpCallback)
            ? t.jsonpCallback()
            : t.jsonpCallback),
          a = e[o],
          r = t.url,
          l = t.data,
          h = "$1" + o + "$2";
        return (
          !1 !== t.jsonp &&
            ((r = r.replace(Fe, h)),
            t.url === r &&
              (s && (l = l.replace(Fe, h)),
              t.data === l &&
                (r += (/\?/.test(r) ? "&" : "?") + t.jsonp + "=" + o))),
          (t.url = r),
          (t.data = l),
          (e[o] = function (e) {
            n = [e];
          }),
          (t.complete = [
            function () {
              if (((e[o] = a), a)) n && x.isFunction(a) && e[o](n[0]);
              else
                try {
                  delete e[o];
                } catch (e) {}
            },
            t.complete,
          ]),
          (t.converters["script json"] = function () {
            return n || x.error(o + " was not called"), n[0];
          }),
          (t.dataTypes[0] = "json"),
          "script"
        );
      }
    }),
    x.ajaxSetup({
      accepts: { script: "text/javascript, application/javascript" },
      contents: { script: /javascript/ },
      converters: {
        "text script": function (e) {
          return x.globalEval(e), e;
        },
      },
    }),
    x.ajaxPrefilter("script", function (e) {
      e.cache === t && (e.cache = !1),
        e.crossDomain && ((e.type = "GET"), (e.global = !1));
    }),
    x.ajaxTransport("script", function (e) {
      if (e.crossDomain) {
        var i,
          s = w.getElementsByTagName("head")[0] || w.documentElement;
        return {
          send: function (n, o) {
            ((i = w.createElement("script")).async = "async"),
              e.scriptCharset && (i.charset = e.scriptCharset),
              (i.src = e.url),
              (i.onload = i.onreadystatechange =
                function (e, n) {
                  (i.readyState && !/loaded|complete/.test(i.readyState)) ||
                    ((i.onload = i.onreadystatechange = null),
                    s && i.parentNode && s.removeChild(i),
                    (i = t),
                    n || o(200, "success"));
                }),
              s.insertBefore(i, s.firstChild);
          },
          abort: function () {
            i && i.onload(0, 1);
          },
        };
      }
    });
  var We,
    Le,
    Re = x.now(),
    Be = {};
  x.ajaxSettings.xhr = e.ActiveXObject
    ? function () {
        if ("file:" !== e.location.protocol)
          try {
            return new e.XMLHttpRequest();
          } catch (e) {}
        try {
          return new e.ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {}
      }
    : function () {
        return new e.XMLHttpRequest();
      };
  try {
    Le = x.ajaxSettings.xhr();
  } catch (e) {}
  (x.support.ajax = !!Le),
    (x.support.cors = Le && "withCredentials" in Le),
    (Le = t),
    x.support.ajax &&
      x.ajaxTransport(function (t) {
        var i;
        if (!t.crossDomain || x.support.cors)
          return {
            send: function (s, n) {
              We ||
                ((We = 1),
                x(e).bind("unload", function () {
                  x.each(Be, function (e, t) {
                    t.onreadystatechange && t.onreadystatechange(1);
                  });
                }));
              var o,
                a = t.xhr();
              t.username
                ? a.open(t.type, t.url, t.async, t.username, t.password)
                : a.open(t.type, t.url, t.async),
                (!t.crossDomain || t.hasContent) &&
                  !s["x-requested-with"] &&
                  (s["x-requested-with"] = "XMLHttpRequest");
              try {
                x.each(s, function (e, t) {
                  a.setRequestHeader(e, t);
                });
              } catch (e) {}
              a.send((t.hasContent && t.data) || null),
                (i = function (e, s) {
                  if (i && (s || 4 === a.readyState))
                    if (
                      ((i = 0),
                      o && ((a.onreadystatechange = x.noop), delete Be[o]),
                      s)
                    )
                      4 !== a.readyState && a.abort();
                    else {
                      var r,
                        l = a.status,
                        h = a.getAllResponseHeaders(),
                        c = {},
                        u = a.responseXML;
                      u && u.documentElement && (c.xml = u),
                        (c.text = a.responseText);
                      try {
                        r = a.statusText;
                      } catch (e) {
                        r = "";
                      }
                      (l =
                        0 === l
                          ? !t.crossDomain || r
                            ? h
                              ? 304
                              : 0
                            : 302
                          : 1223 == l
                          ? 204
                          : l),
                        n(l, r, c, h);
                    }
                }),
                t.async && 4 !== a.readyState
                  ? ((o = Re++), (Be[o] = a), (a.onreadystatechange = i))
                  : i();
            },
            abort: function () {
              i && i(0, 1);
            },
          };
      });
  var qe,
    Ye = {},
    $e = /^(?:toggle|show|hide)$/,
    Xe = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
    Ke = [
      ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
      ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
      ["opacity"],
    ];
  x.fn.extend({
    show: function (e, t, i) {
      var o, a;
      if (e || 0 === e) return this.animate(n("show", 3), e, t, i);
      for (var r = 0, l = this.length; r < l; r++)
        (a = (o = this[r]).style.display),
          !x._data(o, "olddisplay") &&
            "none" === a &&
            (a = o.style.display = ""),
          "" === a &&
            "none" === x.css(o, "display") &&
            x._data(o, "olddisplay", s(o.nodeName));
      for (r = 0; r < l; r++)
        ("" !== (a = (o = this[r]).style.display) && "none" !== a) ||
          (o.style.display = x._data(o, "olddisplay") || "");
      return this;
    },
    hide: function (e, t, i) {
      if (e || 0 === e) return this.animate(n("hide", 3), e, t, i);
      for (var s = 0, o = this.length; s < o; s++) {
        var a = x.css(this[s], "display");
        "none" !== a &&
          !x._data(this[s], "olddisplay") &&
          x._data(this[s], "olddisplay", a);
      }
      for (s = 0; s < o; s++) this[s].style.display = "none";
      return this;
    },
    _toggle: x.fn.toggle,
    toggle: function (e, t, i) {
      var s = "boolean" == typeof e;
      return (
        x.isFunction(e) && x.isFunction(t)
          ? this._toggle.apply(this, arguments)
          : null == e || s
          ? this.each(function () {
              var t = s ? e : x(this).is(":hidden");
              x(this)[t ? "show" : "hide"]();
            })
          : this.animate(n("toggle", 3), e, t, i),
        this
      );
    },
    fadeTo: function (e, t, i, s) {
      return this.filter(":hidden")
        .css("opacity", 0)
        .show()
        .end()
        .animate({ opacity: t }, e, i, s);
    },
    animate: function (e, t, i, n) {
      var o = x.speed(t, i, n);
      return x.isEmptyObject(e)
        ? this.each(o.complete)
        : this[!1 === o.queue ? "each" : "queue"](function () {
            var t,
              i = x.extend({}, o),
              n = 1 === this.nodeType,
              a = n && x(this).is(":hidden"),
              r = this;
            for (t in e) {
              var l = x.camelCase(t);
              if (
                (t !== l && ((e[l] = e[t]), delete e[t], (t = l)),
                ("hide" === e[t] && a) || ("show" === e[t] && !a))
              )
                return i.complete.call(this);
              if (
                n &&
                ("height" === t || "width" === t) &&
                ((i.overflow = [
                  this.style.overflow,
                  this.style.overflowX,
                  this.style.overflowY,
                ]),
                "inline" === x.css(this, "display") &&
                  "none" === x.css(this, "float"))
              )
                if (x.support.inlineBlockNeedsLayout) {
                  "inline" === s(this.nodeName)
                    ? (this.style.display = "inline-block")
                    : ((this.style.display = "inline"), (this.style.zoom = 1));
                } else this.style.display = "inline-block";
              x.isArray(e[t]) &&
                (((i.specialEasing = i.specialEasing || {})[t] = e[t][1]),
                (e[t] = e[t][0]));
            }
            return (
              null != i.overflow && (this.style.overflow = "hidden"),
              (i.curAnim = x.extend({}, e)),
              x.each(e, function (t, s) {
                var n = new x.fx(r, i, t);
                if ($e.test(s))
                  n["toggle" === s ? (a ? "show" : "hide") : s](e);
                else {
                  var o = Xe.exec(s),
                    l = n.cur() || 0;
                  if (o) {
                    var h = parseFloat(o[2]),
                      c = o[3] || "px";
                    "px" !== c &&
                      (x.style(r, t, (h || 1) + c),
                      (l = ((h || 1) / n.cur()) * l),
                      x.style(r, t, l + c)),
                      o[1] && (h = ("-=" === o[1] ? -1 : 1) * h + l),
                      n.custom(l, h, c);
                  } else n.custom(l, s, "");
                }
              }),
              !0
            );
          });
    },
    stop: function (e, t) {
      var i = x.timers;
      return (
        e && this.queue([]),
        this.each(function () {
          for (var e = i.length - 1; e >= 0; e--)
            i[e].elem === this && (t && i[e](!0), i.splice(e, 1));
        }),
        t || this.dequeue(),
        this
      );
    },
  }),
    x.each(
      {
        slideDown: n("show", 1),
        slideUp: n("hide", 1),
        slideToggle: n("toggle", 1),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        x.fn[e] = function (e, i, s) {
          return this.animate(t, e, i, s);
        };
      }
    ),
    x.extend({
      speed: function (e, t, i) {
        var s =
          e && "object" == typeof e
            ? x.extend({}, e)
            : {
                complete: i || (!i && t) || (x.isFunction(e) && e),
                duration: e,
                easing: (i && t) || (t && !x.isFunction(t) && t),
              };
        return (
          (s.duration = x.fx.off
            ? 0
            : "number" == typeof s.duration
            ? s.duration
            : s.duration in x.fx.speeds
            ? x.fx.speeds[s.duration]
            : x.fx.speeds._default),
          (s.old = s.complete),
          (s.complete = function () {
            !1 !== s.queue && x(this).dequeue(),
              x.isFunction(s.old) && s.old.call(this);
          }),
          s
        );
      },
      easing: {
        linear: function (e, t, i, s) {
          return i + s * e;
        },
        swing: function (e, t, i, s) {
          return (-Math.cos(e * Math.PI) / 2 + 0.5) * s + i;
        },
      },
      timers: [],
      fx: function (e, t, i) {
        (this.options = t),
          (this.elem = e),
          (this.prop = i),
          t.orig || (t.orig = {});
      },
    }),
    (x.fx.prototype = {
      update: function () {
        this.options.step && this.options.step.call(this.elem, this.now, this),
          (x.fx.step[this.prop] || x.fx.step._default)(this);
      },
      cur: function () {
        return null == this.elem[this.prop] ||
          (this.elem.style && null != this.elem.style[this.prop])
          ? parseFloat(x.css(this.elem, this.prop)) || 0
          : this.elem[this.prop];
      },
      custom: function (e, t, i) {
        function s(e) {
          return n.step(e);
        }
        var n = this,
          o = x.fx;
        (this.startTime = x.now()),
          (this.start = e),
          (this.end = t),
          (this.unit = i || this.unit || "px"),
          (this.now = this.start),
          (this.pos = this.state = 0),
          (s.elem = this.elem),
          s() &&
            x.timers.push(s) &&
            !qe &&
            (qe = setInterval(o.tick, o.interval));
      },
      show: function () {
        (this.options.orig[this.prop] = x.style(this.elem, this.prop)),
          (this.options.show = !0),
          this.custom(
            "width" === this.prop || "height" === this.prop ? 1 : 0,
            this.cur()
          ),
          x(this.elem).show();
      },
      hide: function () {
        (this.options.orig[this.prop] = x.style(this.elem, this.prop)),
          (this.options.hide = !0),
          this.custom(this.cur(), 0);
      },
      step: function (e) {
        var t = x.now(),
          i = !0;
        if (e || t >= this.options.duration + this.startTime) {
          for (var s in ((this.now = this.end),
          (this.pos = this.state = 1),
          this.update(),
          (this.options.curAnim[this.prop] = !0),
          this.options.curAnim))
            !0 !== this.options.curAnim[s] && (i = !1);
          if (i) {
            if (null != this.options.overflow && !x.support.shrinkWrapBlocks) {
              var n = this.elem,
                o = this.options;
              x.each(["", "X", "Y"], function (e, t) {
                n.style["overflow" + t] = o.overflow[e];
              });
            }
            if (
              (this.options.hide && x(this.elem).hide(),
              this.options.hide || this.options.show)
            )
              for (var a in this.options.curAnim)
                x.style(this.elem, a, this.options.orig[a]);
            this.options.complete.call(this.elem);
          }
          return !1;
        }
        var r = t - this.startTime;
        this.state = r / this.options.duration;
        var l =
            this.options.specialEasing && this.options.specialEasing[this.prop],
          h = this.options.easing || (x.easing.swing ? "swing" : "linear");
        return (
          (this.pos = x.easing[l || h](
            this.state,
            r,
            0,
            1,
            this.options.duration
          )),
          (this.now = this.start + (this.end - this.start) * this.pos),
          this.update(),
          !0
        );
      },
    }),
    x.extend(x.fx, {
      tick: function () {
        for (var e = x.timers, t = 0; t < e.length; t++)
          e[t]() || e.splice(t--, 1);
        e.length || x.fx.stop();
      },
      interval: 13,
      stop: function () {
        clearInterval(qe), (qe = null);
      },
      speeds: { slow: 600, fast: 200, _default: 400 },
      step: {
        opacity: function (e) {
          x.style(e.elem, "opacity", e.now);
        },
        _default: function (e) {
          e.elem.style && null != e.elem.style[e.prop]
            ? (e.elem.style[e.prop] =
                ("width" === e.prop || "height" === e.prop
                  ? Math.max(0, e.now)
                  : e.now) + e.unit)
            : (e.elem[e.prop] = e.now);
        },
      },
    }),
    x.expr &&
      x.expr.filters &&
      (x.expr.filters.animated = function (e) {
        return x.grep(x.timers, function (t) {
          return e === t.elem;
        }).length;
      });
  var Qe = /^t(?:able|d|h)$/i,
    Ue = /^(?:body|html)$/i;
  "getBoundingClientRect" in w.documentElement
    ? (x.fn.offset = function (e) {
        var t,
          s = this[0];
        if (e)
          return this.each(function (t) {
            x.offset.setOffset(this, e, t);
          });
        if (!s || !s.ownerDocument) return null;
        if (s === s.ownerDocument.body) return x.offset.bodyOffset(s);
        try {
          t = s.getBoundingClientRect();
        } catch (e) {}
        var n = s.ownerDocument,
          o = n.documentElement;
        if (!t || !x.contains(o, s))
          return t ? { top: t.top, left: t.left } : { top: 0, left: 0 };
        var a = n.body,
          r = i(n),
          l = o.clientTop || a.clientTop || 0,
          h = o.clientLeft || a.clientLeft || 0,
          c =
            r.pageYOffset || (x.support.boxModel && o.scrollTop) || a.scrollTop,
          u =
            r.pageXOffset ||
            (x.support.boxModel && o.scrollLeft) ||
            a.scrollLeft;
        return { top: t.top + c - l, left: t.left + u - h };
      })
    : (x.fn.offset = function (e) {
        var t = this[0];
        if (e)
          return this.each(function (t) {
            x.offset.setOffset(this, e, t);
          });
        if (!t || !t.ownerDocument) return null;
        if (t === t.ownerDocument.body) return x.offset.bodyOffset(t);
        x.offset.initialize();
        for (
          var i,
            s = t.offsetParent,
            n = t.ownerDocument,
            o = n.documentElement,
            a = n.body,
            r = n.defaultView,
            l = r ? r.getComputedStyle(t, null) : t.currentStyle,
            h = t.offsetTop,
            c = t.offsetLeft;
          (t = t.parentNode) &&
          t !== a &&
          t !== o &&
          (!x.offset.supportsFixedPosition || "fixed" !== l.position);

        )
          (i = r ? r.getComputedStyle(t, null) : t.currentStyle),
            (h -= t.scrollTop),
            (c -= t.scrollLeft),
            t === s &&
              ((h += t.offsetTop),
              (c += t.offsetLeft),
              x.offset.doesNotAddBorder &&
                (!x.offset.doesAddBorderForTableAndCells ||
                  !Qe.test(t.nodeName)) &&
                ((h += parseFloat(i.borderTopWidth) || 0),
                (c += parseFloat(i.borderLeftWidth) || 0)),
              s,
              (s = t.offsetParent)),
            x.offset.subtractsBorderForOverflowNotVisible &&
              "visible" !== i.overflow &&
              ((h += parseFloat(i.borderTopWidth) || 0),
              (c += parseFloat(i.borderLeftWidth) || 0)),
            (l = i);
        return (
          ("relative" !== l.position && "static" !== l.position) ||
            ((h += a.offsetTop), (c += a.offsetLeft)),
          x.offset.supportsFixedPosition &&
            "fixed" === l.position &&
            ((h += Math.max(o.scrollTop, a.scrollTop)),
            (c += Math.max(o.scrollLeft, a.scrollLeft))),
          { top: h, left: c }
        );
      }),
    (x.offset = {
      initialize: function () {
        var e,
          t,
          i,
          s = w.body,
          n = w.createElement("div"),
          o = parseFloat(x.css(s, "marginTop")) || 0;
        x.extend(n.style, {
          position: "absolute",
          top: 0,
          left: 0,
          margin: 0,
          border: 0,
          width: "1px",
          height: "1px",
          visibility: "hidden",
        }),
          (n.innerHTML =
            "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>"),
          s.insertBefore(n, s.firstChild),
          (t = (e = n.firstChild).firstChild),
          (i = e.nextSibling.firstChild.firstChild),
          (this.doesNotAddBorder = 5 !== t.offsetTop),
          (this.doesAddBorderForTableAndCells = 5 === i.offsetTop),
          (t.style.position = "fixed"),
          (t.style.top = "20px"),
          (this.supportsFixedPosition =
            20 === t.offsetTop || 15 === t.offsetTop),
          (t.style.position = t.style.top = ""),
          (e.style.overflow = "hidden"),
          (e.style.position = "relative"),
          (this.subtractsBorderForOverflowNotVisible = -5 === t.offsetTop),
          (this.doesNotIncludeMarginInBodyOffset = s.offsetTop !== o),
          s.removeChild(n),
          (s = n = e = t = i = null),
          (x.offset.initialize = x.noop);
      },
      bodyOffset: function (e) {
        var t = e.offsetTop,
          i = e.offsetLeft;
        return (
          x.offset.initialize(),
          x.offset.doesNotIncludeMarginInBodyOffset &&
            ((t += parseFloat(x.css(e, "marginTop")) || 0),
            (i += parseFloat(x.css(e, "marginLeft")) || 0)),
          { top: t, left: i }
        );
      },
      setOffset: function (e, t, i) {
        var s = x.css(e, "position");
        "static" === s && (e.style.position = "relative");
        var n,
          o,
          a = x(e),
          r = a.offset(),
          l = x.css(e, "top"),
          h = x.css(e, "left"),
          c = "absolute" === s && x.inArray("auto", [l, h]) > -1,
          u = {},
          d = {};
        c && (d = a.position()),
          (n = c ? d.top : parseInt(l, 10) || 0),
          (o = c ? d.left : parseInt(h, 10) || 0),
          x.isFunction(t) && (t = t.call(e, i, r)),
          null != t.top && (u.top = t.top - r.top + n),
          null != t.left && (u.left = t.left - r.left + o),
          "using" in t ? t.using.call(e, u) : a.css(u);
      },
    }),
    x.fn.extend({
      position: function () {
        if (!this[0]) return null;
        var e = this[0],
          t = this.offsetParent(),
          i = this.offset(),
          s = Ue.test(t[0].nodeName) ? { top: 0, left: 0 } : t.offset();
        return (
          (i.top -= parseFloat(x.css(e, "marginTop")) || 0),
          (i.left -= parseFloat(x.css(e, "marginLeft")) || 0),
          (s.top += parseFloat(x.css(t[0], "borderTopWidth")) || 0),
          (s.left += parseFloat(x.css(t[0], "borderLeftWidth")) || 0),
          { top: i.top - s.top, left: i.left - s.left }
        );
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent || w.body;
            e && !Ue.test(e.nodeName) && "static" === x.css(e, "position");

          )
            e = e.offsetParent;
          return e;
        });
      },
    }),
    x.each(["Left", "Top"], function (e, s) {
      var n = "scroll" + s;
      x.fn[n] = function (s) {
        var o,
          a = this[0];
        return a
          ? s !== t
            ? this.each(function () {
                (o = i(this))
                  ? o.scrollTo(
                      e ? x(o).scrollLeft() : s,
                      e ? s : x(o).scrollTop()
                    )
                  : (this[n] = s);
              })
            : (o = i(a))
            ? "pageXOffset" in o
              ? o[e ? "pageYOffset" : "pageXOffset"]
              : (x.support.boxModel && o.document.documentElement[n]) ||
                o.document.body[n]
            : a[n]
          : null;
      };
    }),
    x.each(["Height", "Width"], function (e, i) {
      var s = i.toLowerCase();
      (x.fn["inner" + i] = function () {
        return this[0] ? parseFloat(x.css(this[0], s, "padding")) : null;
      }),
        (x.fn["outer" + i] = function (e) {
          return this[0]
            ? parseFloat(x.css(this[0], s, e ? "margin" : "border"))
            : null;
        }),
        (x.fn[s] = function (e) {
          var n = this[0];
          if (!n) return null == e ? null : this;
          if (x.isFunction(e))
            return this.each(function (t) {
              var i = x(this);
              i[s](e.call(this, t, i[s]()));
            });
          if (x.isWindow(n)) {
            var o = n.document.documentElement["client" + i];
            return (
              ("CSS1Compat" === n.document.compatMode && o) ||
              n.document.body["client" + i] ||
              o
            );
          }
          if (9 === n.nodeType)
            return Math.max(
              n.documentElement["client" + i],
              n.body["scroll" + i],
              n.documentElement["scroll" + i],
              n.body["offset" + i],
              n.documentElement["offset" + i]
            );
          if (e === t) {
            var a = x.css(n, s),
              r = parseFloat(a);
            return x.isNaN(r) ? a : r;
          }
          return this.css(s, "string" == typeof e ? e : e + "px");
        });
    });
})(window),
  (function (e, t) {
    function i(t) {
      return !e(t)
        .parents()
        .andSelf()
        .filter(function () {
          return (
            "hidden" === e.curCSS(this, "visibility") ||
            e.expr.filters.hidden(this)
          );
        }).length;
    }
    (e.ui = e.ui || {}),
      e.ui.version ||
        (e.extend(e.ui, {
          version: "1.8.9",
          keyCode: {
            ALT: 18,
            BACKSPACE: 8,
            CAPS_LOCK: 20,
            COMMA: 188,
            COMMAND: 91,
            COMMAND_LEFT: 91,
            COMMAND_RIGHT: 93,
            CONTROL: 17,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            MENU: 93,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SHIFT: 16,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            WINDOWS: 91,
          },
        }),
        e.fn.extend({
          _focus: e.fn.focus,
          focus: function (t, i) {
            return "number" == typeof t
              ? this.each(function () {
                  var s = this;
                  setTimeout(function () {
                    e(s).focus(), i && i.call(s);
                  }, t);
                })
              : this._focus.apply(this, arguments);
          },
          scrollParent: function () {
            var t;
            return (
              (t =
                (e.browser.msie &&
                  /(static|relative)/.test(this.css("position"))) ||
                /absolute/.test(this.css("position"))
                  ? this.parents()
                      .filter(function () {
                        return (
                          /(relative|absolute|fixed)/.test(
                            e.curCSS(this, "position", 1)
                          ) &&
                          /(auto|scroll)/.test(
                            e.curCSS(this, "overflow", 1) +
                              e.curCSS(this, "overflow-y", 1) +
                              e.curCSS(this, "overflow-x", 1)
                          )
                        );
                      })
                      .eq(0)
                  : this.parents()
                      .filter(function () {
                        return /(auto|scroll)/.test(
                          e.curCSS(this, "overflow", 1) +
                            e.curCSS(this, "overflow-y", 1) +
                            e.curCSS(this, "overflow-x", 1)
                        );
                      })
                      .eq(0)),
              /fixed/.test(this.css("position")) || !t.length ? e(document) : t
            );
          },
          zIndex: function (i) {
            if (i !== t) return this.css("zIndex", i);
            if (this.length) {
              i = e(this[0]);
              for (var s; i.length && i[0] !== document; ) {
                if (
                  ("absolute" === (s = i.css("position")) ||
                    "relative" === s ||
                    "fixed" === s) &&
                  ((s = parseInt(i.css("zIndex"), 10)), !isNaN(s) && 0 !== s)
                )
                  return s;
                i = i.parent();
              }
            }
            return 0;
          },
          disableSelection: function () {
            return this.bind(
              (e.support.selectstart ? "selectstart" : "mousedown") +
                ".ui-disableSelection",
              function (e) {
                e.preventDefault();
              }
            );
          },
          enableSelection: function () {
            return this.unbind(".ui-disableSelection");
          },
        }),
        e.each(["Width", "Height"], function (i, s) {
          function n(t, i, s, n) {
            return (
              e.each(o, function () {
                (i -= parseFloat(e.curCSS(t, "padding" + this, !0)) || 0),
                  s &&
                    (i -=
                      parseFloat(e.curCSS(t, "border" + this + "Width", !0)) ||
                      0),
                  n && (i -= parseFloat(e.curCSS(t, "margin" + this, !0)) || 0);
              }),
              i
            );
          }
          var o = "Width" === s ? ["Left", "Right"] : ["Top", "Bottom"],
            a = s.toLowerCase(),
            r = {
              innerWidth: e.fn.innerWidth,
              innerHeight: e.fn.innerHeight,
              outerWidth: e.fn.outerWidth,
              outerHeight: e.fn.outerHeight,
            };
          (e.fn["inner" + s] = function (i) {
            return i === t
              ? r["inner" + s].call(this)
              : this.each(function () {
                  e(this).css(a, n(this, i) + "px");
                });
          }),
            (e.fn["outer" + s] = function (t, i) {
              return "number" != typeof t
                ? r["outer" + s].call(this, t)
                : this.each(function () {
                    e(this).css(a, n(this, t, !0, i) + "px");
                  });
            });
        }),
        e.extend(e.expr[":"], {
          data: function (t, i, s) {
            return !!e.data(t, s[3]);
          },
          focusable: function (t) {
            var s = t.nodeName.toLowerCase(),
              n = e.attr(t, "tabindex");
            return "area" === s
              ? ((n = (s = t.parentNode).name),
                !(!t.href || !n || "map" !== s.nodeName.toLowerCase()) &&
                  !!(t = e("img[usemap=#" + n + "]")[0]) &&
                  i(t))
              : (/input|select|textarea|button|object/.test(s)
                  ? !t.disabled
                  : ("a" == s && t.href) || !isNaN(n)) && i(t);
          },
          tabbable: function (t) {
            var i = e.attr(t, "tabindex");
            return (isNaN(i) || i >= 0) && e(t).is(":focusable");
          },
        }),
        e(function () {
          var t = document.body,
            i = t.appendChild((i = document.createElement("div")));
          e.extend(i.style, {
            minHeight: "100px",
            height: "auto",
            padding: 0,
            borderWidth: 0,
          }),
            (e.support.minHeight = 100 === i.offsetHeight),
            (e.support.selectstart = "onselectstart" in i),
            (t.removeChild(i).style.display = "none");
        }),
        e.extend(e.ui, {
          plugin: {
            add: function (t, i, s) {
              for (var n in ((t = e.ui[t].prototype), s))
                (t.plugins[n] = t.plugins[n] || []),
                  t.plugins[n].push([i, s[n]]);
            },
            call: function (e, t, i) {
              if ((t = e.plugins[t]) && e.element[0].parentNode)
                for (var s = 0; s < t.length; s++)
                  e.options[t[s][0]] && t[s][1].apply(e.element, i);
            },
          },
          contains: function (e, t) {
            return document.compareDocumentPosition
              ? 16 & e.compareDocumentPosition(t)
              : e !== t && e.contains(t);
          },
          hasScroll: function (t, i) {
            if ("hidden" === e(t).css("overflow")) return !1;
            var s;
            return (
              t[(i = i && "left" === i ? "scrollLeft" : "scrollTop")] > 0 ||
              ((t[i] = 1), (s = t[i] > 0), (t[i] = 0), s)
            );
          },
          isOverAxis: function (e, t, i) {
            return e > t && e < t + i;
          },
          isOver: function (t, i, s, n, o, a) {
            return e.ui.isOverAxis(t, s, o) && e.ui.isOverAxis(i, n, a);
          },
        }));
  })(jQuery),
  (function (e, t) {
    if (e.cleanData) {
      var i = e.cleanData;
      e.cleanData = function (t) {
        for (var s, n = 0; null != (s = t[n]); n++)
          e(s).triggerHandler("remove");
        i(t);
      };
    } else {
      var s = e.fn.remove;
      e.fn.remove = function (t, i) {
        return this.each(function () {
          return (
            i ||
              (t && !e.filter(t, [this]).length) ||
              e("*", this)
                .add([this])
                .each(function () {
                  e(this).triggerHandler("remove");
                }),
            s.call(e(this), t, i)
          );
        });
      };
    }
    (e.widget = function (t, i, s) {
      var n,
        o = t.split(".")[0];
      (n = o + "-" + (t = t.split(".")[1])),
        s || ((s = i), (i = e.Widget)),
        (e.expr[":"][n] = function (i) {
          return !!e.data(i, t);
        }),
        (e[o] = e[o] || {}),
        (e[o][t] = function (e, t) {
          arguments.length && this._createWidget(e, t);
        }),
        ((i = new i()).options = e.extend(!0, {}, i.options)),
        (e[o][t].prototype = e.extend(
          !0,
          i,
          {
            namespace: o,
            widgetName: t,
            widgetEventPrefix: e[o][t].prototype.widgetEventPrefix || t,
            widgetBaseClass: n,
          },
          s
        )),
        e.widget.bridge(t, e[o][t]);
    }),
      (e.widget.bridge = function (i, s) {
        e.fn[i] = function (n) {
          var o = "string" == typeof n,
            a = Array.prototype.slice.call(arguments, 1),
            r = this;
          return (
            (n = !o && a.length ? e.extend.apply(null, [!0, n].concat(a)) : n),
            o && "_" === n.charAt(0)
              ? r
              : (o
                  ? this.each(function () {
                      var s = e.data(this, i),
                        o = s && e.isFunction(s[n]) ? s[n].apply(s, a) : s;
                      if (o !== s && o !== t) return (r = o), !1;
                    })
                  : this.each(function () {
                      var t = e.data(this, i);
                      t
                        ? t.option(n || {})._init()
                        : e.data(this, i, new s(n, this));
                    }),
                r)
          );
        };
      }),
      (e.Widget = function (e, t) {
        arguments.length && this._createWidget(e, t);
      }),
      (e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        options: { disabled: !1 },
        _createWidget: function (t, i) {
          e.data(i, this.widgetName, this),
            (this.element = e(i)),
            (this.options = e.extend(
              !0,
              {},
              this.options,
              this._getCreateOptions(),
              t
            ));
          var s = this;
          this.element.bind("remove." + this.widgetName, function () {
            s.destroy();
          }),
            this._create(),
            this._trigger("create"),
            this._init();
        },
        _getCreateOptions: function () {
          return e.metadata && e.metadata.get(this.element[0])[this.widgetName];
        },
        _create: function () {},
        _init: function () {},
        destroy: function () {
          this.element
            .unbind("." + this.widgetName)
            .removeData(this.widgetName),
            this.widget()
              .unbind("." + this.widgetName)
              .removeAttr("aria-disabled")
              .removeClass(
                this.widgetBaseClass + "-disabled ui-state-disabled"
              );
        },
        widget: function () {
          return this.element;
        },
        option: function (i, s) {
          var n = i;
          if (0 === arguments.length) return e.extend({}, this.options);
          if ("string" == typeof i) {
            if (s === t) return this.options[i];
            (n = {})[i] = s;
          }
          return this._setOptions(n), this;
        },
        _setOptions: function (t) {
          var i = this;
          return (
            e.each(t, function (e, t) {
              i._setOption(e, t);
            }),
            this
          );
        },
        _setOption: function (e, t) {
          return (
            (this.options[e] = t),
            "disabled" === e &&
              this.widget()
                [t ? "addClass" : "removeClass"](
                  this.widgetBaseClass + "-disabled ui-state-disabled"
                )
                .attr("aria-disabled", t),
            this
          );
        },
        enable: function () {
          return this._setOption("disabled", !1);
        },
        disable: function () {
          return this._setOption("disabled", !0);
        },
        _trigger: function (t, i, s) {
          var n = this.options[t];
          if (
            (((i = e.Event(i)).type = (
              t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t
            ).toLowerCase()),
            (s = s || {}),
            i.originalEvent)
          ) {
            t = e.event.props.length;
            for (var o; t; ) i[(o = e.event.props[--t])] = i.originalEvent[o];
          }
          return (
            this.element.trigger(i, s),
            !(
              (e.isFunction(n) && !1 === n.call(this.element[0], i, s)) ||
              i.isDefaultPrevented()
            )
          );
        },
      });
  })(jQuery),
  (function (e) {
    e.widget("ui.mouse", {
      options: { cancel: ":input,option", distance: 1, delay: 0 },
      _mouseInit: function () {
        var t = this;
        this.element
          .bind("mousedown." + this.widgetName, function (e) {
            return t._mouseDown(e);
          })
          .bind("click." + this.widgetName, function (i) {
            if (!0 === e.data(i.target, t.widgetName + ".preventClickEvent"))
              return (
                e.removeData(i.target, t.widgetName + ".preventClickEvent"),
                i.stopImmediatePropagation(),
                !1
              );
          }),
          (this.started = !1);
      },
      _mouseDestroy: function () {
        this.element.unbind("." + this.widgetName);
      },
      _mouseDown: function (t) {
        if (
          ((t.originalEvent = t.originalEvent || {}),
          !t.originalEvent.mouseHandled)
        ) {
          this._mouseStarted && this._mouseUp(t), (this._mouseDownEvent = t);
          var i = this,
            s = 1 == t.which,
            n =
              "string" == typeof this.options.cancel &&
              e(t.target).parents().add(t.target).filter(this.options.cancel)
                .length;
          return (
            !(s && !n && this._mouseCapture(t)) ||
            ((this.mouseDelayMet = !this.options.delay),
            this.mouseDelayMet ||
              (this._mouseDelayTimer = setTimeout(function () {
                i.mouseDelayMet = !0;
              }, this.options.delay)),
            this._mouseDistanceMet(t) &&
            this._mouseDelayMet(t) &&
            ((this._mouseStarted = !1 !== this._mouseStart(t)),
            !this._mouseStarted)
              ? (t.preventDefault(), !0)
              : ((this._mouseMoveDelegate = function (e) {
                  return i._mouseMove(e);
                }),
                (this._mouseUpDelegate = function (e) {
                  return i._mouseUp(e);
                }),
                e(document)
                  .bind("mousemove." + this.widgetName, this._mouseMoveDelegate)
                  .bind("mouseup." + this.widgetName, this._mouseUpDelegate),
                t.preventDefault(),
                (t.originalEvent.mouseHandled = !0)))
          );
        }
      },
      _mouseMove: function (t) {
        return !e.browser.msie || document.documentMode >= 9 || t.button
          ? this._mouseStarted
            ? (this._mouseDrag(t), t.preventDefault())
            : (this._mouseDistanceMet(t) &&
                this._mouseDelayMet(t) &&
                ((this._mouseStarted =
                  !1 !== this._mouseStart(this._mouseDownEvent, t))
                  ? this._mouseDrag(t)
                  : this._mouseUp(t)),
              !this._mouseStarted)
          : this._mouseUp(t);
      },
      _mouseUp: function (t) {
        return (
          e(document)
            .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
            .unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
          this._mouseStarted &&
            ((this._mouseStarted = !1),
            t.target == this._mouseDownEvent.target &&
              e.data(t.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(t)),
          !1
        );
      },
      _mouseDistanceMet: function (e) {
        return (
          Math.max(
            Math.abs(this._mouseDownEvent.pageX - e.pageX),
            Math.abs(this._mouseDownEvent.pageY - e.pageY)
          ) >= this.options.distance
        );
      },
      _mouseDelayMet: function () {
        return this.mouseDelayMet;
      },
      _mouseStart: function () {},
      _mouseDrag: function () {},
      _mouseStop: function () {},
      _mouseCapture: function () {
        return !0;
      },
    });
  })(jQuery),
  (function (e) {
    e.widget("ui.draggable", e.ui.mouse, {
      widgetEventPrefix: "drag",
      options: {
        addClasses: !0,
        appendTo: "parent",
        axis: !1,
        connectToSortable: !1,
        containment: !1,
        cursor: "auto",
        cursorAt: !1,
        grid: !1,
        handle: !1,
        helper: "original",
        iframeFix: !1,
        opacity: !1,
        refreshPositions: !1,
        revert: !1,
        revertDuration: 500,
        scope: "default",
        scroll: !0,
        scrollSensitivity: 20,
        scrollSpeed: 20,
        snap: !1,
        snapMode: "both",
        snapTolerance: 20,
        stack: !1,
        zIndex: !1,
      },
      _create: function () {
        "original" != this.options.helper ||
          /^(?:r|a|f)/.test(this.element.css("position")) ||
          (this.element[0].style.position = "relative"),
          this.options.addClasses && this.element.addClass("ui-draggable"),
          this.options.disabled &&
            this.element.addClass("ui-draggable-disabled"),
          this._mouseInit();
      },
      destroy: function () {
        if (this.element.data("draggable"))
          return (
            this.element
              .removeData("draggable")
              .unbind(".draggable")
              .removeClass(
                "ui-draggable ui-draggable-dragging ui-draggable-disabled"
              ),
            this._mouseDestroy(),
            this
          );
      },
      _mouseCapture: function (t) {
        var i = this.options;
        return (
          !(
            this.helper ||
            i.disabled ||
            e(t.target).is(".ui-resizable-handle")
          ) && ((this.handle = this._getHandle(t)), !!this.handle)
        );
      },
      _mouseStart: function (t) {
        var i = this.options;
        return (
          (this.helper = this._createHelper(t)),
          this._cacheHelperProportions(),
          e.ui.ddmanager && (e.ui.ddmanager.current = this),
          this._cacheMargins(),
          (this.cssPosition = this.helper.css("position")),
          (this.scrollParent = this.helper.scrollParent()),
          (this.offset = this.positionAbs = this.element.offset()),
          (this.offset = {
            top: this.offset.top - this.margins.top,
            left: this.offset.left - this.margins.left,
          }),
          e.extend(this.offset, {
            click: {
              left: t.pageX - this.offset.left,
              top: t.pageY - this.offset.top,
            },
            parent: this._getParentOffset(),
            relative: this._getRelativeOffset(),
          }),
          (this.originalPosition = this.position = this._generatePosition(t)),
          (this.originalPageX = t.pageX),
          (this.originalPageY = t.pageY),
          i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
          i.containment && this._setContainment(),
          !1 === this._trigger("start", t)
            ? (this._clear(), !1)
            : (this._cacheHelperProportions(),
              e.ui.ddmanager &&
                !i.dropBehaviour &&
                e.ui.ddmanager.prepareOffsets(this, t),
              this.helper.addClass("ui-draggable-dragging"),
              this._mouseDrag(t, !0),
              !0)
        );
      },
      _mouseDrag: function (t, i) {
        if (
          ((this.position = this._generatePosition(t)),
          (this.positionAbs = this._convertPositionTo("absolute")),
          !i)
        ) {
          if (((i = this._uiHash()), !1 === this._trigger("drag", t, i)))
            return this._mouseUp({}), !1;
          this.position = i.position;
        }
        return (
          (this.options.axis && "y" == this.options.axis) ||
            (this.helper[0].style.left = this.position.left + "px"),
          (this.options.axis && "x" == this.options.axis) ||
            (this.helper[0].style.top = this.position.top + "px"),
          e.ui.ddmanager && e.ui.ddmanager.drag(this, t),
          !1
        );
      },
      _mouseStop: function (t) {
        var i = !1;
        if (
          (e.ui.ddmanager &&
            !this.options.dropBehaviour &&
            (i = e.ui.ddmanager.drop(this, t)),
          this.dropped && ((i = this.dropped), (this.dropped = !1)),
          !(
            (this.element[0] && this.element[0].parentNode) ||
            "original" != this.options.helper
          ))
        )
          return !1;
        if (
          ("invalid" == this.options.revert && !i) ||
          ("valid" == this.options.revert && i) ||
          !0 === this.options.revert ||
          (e.isFunction(this.options.revert) &&
            this.options.revert.call(this.element, i))
        ) {
          var s = this;
          e(this.helper).animate(
            this.originalPosition,
            parseInt(this.options.revertDuration, 10),
            function () {
              !1 !== s._trigger("stop", t) && s._clear();
            }
          );
        } else !1 !== this._trigger("stop", t) && this._clear();
        return !1;
      },
      cancel: function () {
        return (
          this.helper.is(".ui-draggable-dragging")
            ? this._mouseUp({})
            : this._clear(),
          this
        );
      },
      _getHandle: function (t) {
        var i =
          !this.options.handle || !e(this.options.handle, this.element).length;
        return (
          e(this.options.handle, this.element)
            .find("*")
            .andSelf()
            .each(function () {
              this == t.target && (i = !0);
            }),
          i
        );
      },
      _createHelper: function (t) {
        var i = this.options;
        return (
          (t = e.isFunction(i.helper)
            ? e(i.helper.apply(this.element[0], [t]))
            : "clone" == i.helper
            ? this.element.clone()
            : this.element).parents("body").length ||
            t.appendTo(
              "parent" == i.appendTo ? this.element[0].parentNode : i.appendTo
            ),
          t[0] != this.element[0] &&
            !/(fixed|absolute)/.test(t.css("position")) &&
            t.css("position", "absolute"),
          t
        );
      },
      _adjustOffsetFromHelper: function (t) {
        "string" == typeof t && (t = t.split(" ")),
          e.isArray(t) && (t = { left: +t[0], top: +t[1] || 0 }),
          "left" in t && (this.offset.click.left = t.left + this.margins.left),
          "right" in t &&
            (this.offset.click.left =
              this.helperProportions.width - t.right + this.margins.left),
          "top" in t && (this.offset.click.top = t.top + this.margins.top),
          "bottom" in t &&
            (this.offset.click.top =
              this.helperProportions.height - t.bottom + this.margins.top);
      },
      _getParentOffset: function () {
        this.offsetParent = this.helper.offsetParent();
        var t = this.offsetParent.offset();
        return (
          "absolute" == this.cssPosition &&
            this.scrollParent[0] != document &&
            e.ui.contains(this.scrollParent[0], this.offsetParent[0]) &&
            ((t.left += this.scrollParent.scrollLeft()),
            (t.top += this.scrollParent.scrollTop())),
          (this.offsetParent[0] == document.body ||
            (this.offsetParent[0].tagName &&
              "html" == this.offsetParent[0].tagName.toLowerCase() &&
              e.browser.msie)) &&
            (t = { top: 0, left: 0 }),
          {
            top:
              t.top +
              (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
            left:
              t.left +
              (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0),
          }
        );
      },
      _getRelativeOffset: function () {
        if ("relative" == this.cssPosition) {
          var e = this.element.position();
          return {
            top:
              e.top -
              (parseInt(this.helper.css("top"), 10) || 0) +
              this.scrollParent.scrollTop(),
            left:
              e.left -
              (parseInt(this.helper.css("left"), 10) || 0) +
              this.scrollParent.scrollLeft(),
          };
        }
        return { top: 0, left: 0 };
      },
      _cacheMargins: function () {
        this.margins = {
          left: parseInt(this.element.css("marginLeft"), 10) || 0,
          top: parseInt(this.element.css("marginTop"), 10) || 0,
        };
      },
      _cacheHelperProportions: function () {
        this.helperProportions = {
          width: this.helper.outerWidth(),
          height: this.helper.outerHeight(),
        };
      },
      _setContainment: function () {
        var t = this.options;
        if (
          ("parent" == t.containment &&
            (t.containment = this.helper[0].parentNode),
          ("document" != t.containment && "window" != t.containment) ||
            (this.containment = [
              ("document" == t.containment ? 0 : e(window).scrollLeft()) -
                this.offset.relative.left -
                this.offset.parent.left,
              ("document" == t.containment ? 0 : e(window).scrollTop()) -
                this.offset.relative.top -
                this.offset.parent.top,
              ("document" == t.containment ? 0 : e(window).scrollLeft()) +
                e("document" == t.containment ? document : window).width() -
                this.helperProportions.width -
                this.margins.left,
              ("document" == t.containment ? 0 : e(window).scrollTop()) +
                (e("document" == t.containment ? document : window).height() ||
                  document.body.parentNode.scrollHeight) -
                this.helperProportions.height -
                this.margins.top,
            ]),
          /^(document|window|parent)$/.test(t.containment) ||
            t.containment.constructor == Array)
        )
          t.containment.constructor == Array &&
            (this.containment = t.containment);
        else {
          var i = e(t.containment)[0];
          if (i) {
            t = e(t.containment).offset();
            var s = "hidden" != e(i).css("overflow");
            this.containment = [
              t.left +
                (parseInt(e(i).css("borderLeftWidth"), 10) || 0) +
                (parseInt(e(i).css("paddingLeft"), 10) || 0) -
                this.margins.left,
              t.top +
                (parseInt(e(i).css("borderTopWidth"), 10) || 0) +
                (parseInt(e(i).css("paddingTop"), 10) || 0) -
                this.margins.top,
              t.left +
                (s ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) -
                (parseInt(e(i).css("borderLeftWidth"), 10) || 0) -
                (parseInt(e(i).css("paddingRight"), 10) || 0) -
                this.helperProportions.width -
                this.margins.left,
              t.top +
                (s
                  ? Math.max(i.scrollHeight, i.offsetHeight)
                  : i.offsetHeight) -
                (parseInt(e(i).css("borderTopWidth"), 10) || 0) -
                (parseInt(e(i).css("paddingBottom"), 10) || 0) -
                this.helperProportions.height -
                this.margins.top,
            ];
          }
        }
      },
      _convertPositionTo: function (t, i) {
        i || (i = this.position), (t = "absolute" == t ? 1 : -1);
        var s =
            "absolute" != this.cssPosition ||
            (this.scrollParent[0] != document &&
              e.ui.contains(this.scrollParent[0], this.offsetParent[0]))
              ? this.scrollParent
              : this.offsetParent,
          n = /(html|body)/i.test(s[0].tagName);
        return {
          top:
            i.top +
            this.offset.relative.top * t +
            this.offset.parent.top * t -
            (e.browser.safari &&
            e.browser.version < 526 &&
            "fixed" == this.cssPosition
              ? 0
              : ("fixed" == this.cssPosition
                  ? -this.scrollParent.scrollTop()
                  : n
                  ? 0
                  : s.scrollTop()) * t),
          left:
            i.left +
            this.offset.relative.left * t +
            this.offset.parent.left * t -
            (e.browser.safari &&
            e.browser.version < 526 &&
            "fixed" == this.cssPosition
              ? 0
              : ("fixed" == this.cssPosition
                  ? -this.scrollParent.scrollLeft()
                  : n
                  ? 0
                  : s.scrollLeft()) * t),
        };
      },
      _generatePosition: function (t) {
        var i = this.options,
          s =
            "absolute" != this.cssPosition ||
            (this.scrollParent[0] != document &&
              e.ui.contains(this.scrollParent[0], this.offsetParent[0]))
              ? this.scrollParent
              : this.offsetParent,
          n = /(html|body)/i.test(s[0].tagName),
          o = t.pageX,
          a = t.pageY;
        return (
          this.originalPosition &&
            (this.containment &&
              (t.pageX - this.offset.click.left < this.containment[0] &&
                (o = this.containment[0] + this.offset.click.left),
              t.pageY - this.offset.click.top < this.containment[1] &&
                (a = this.containment[1] + this.offset.click.top),
              t.pageX - this.offset.click.left > this.containment[2] &&
                (o = this.containment[2] + this.offset.click.left),
              t.pageY - this.offset.click.top > this.containment[3] &&
                (a = this.containment[3] + this.offset.click.top)),
            i.grid &&
              ((a =
                this.originalPageY +
                Math.round((a - this.originalPageY) / i.grid[1]) * i.grid[1]),
              (a =
                this.containment &&
                (a - this.offset.click.top < this.containment[1] ||
                  a - this.offset.click.top > this.containment[3])
                  ? a - this.offset.click.top < this.containment[1]
                    ? a + i.grid[1]
                    : a - i.grid[1]
                  : a),
              (o =
                this.originalPageX +
                Math.round((o - this.originalPageX) / i.grid[0]) * i.grid[0]),
              (o =
                this.containment &&
                (o - this.offset.click.left < this.containment[0] ||
                  o - this.offset.click.left > this.containment[2])
                  ? o - this.offset.click.left < this.containment[0]
                    ? o + i.grid[0]
                    : o - i.grid[0]
                  : o))),
          {
            top:
              a -
              this.offset.click.top -
              this.offset.relative.top -
              this.offset.parent.top +
              (e.browser.safari &&
              e.browser.version < 526 &&
              "fixed" == this.cssPosition
                ? 0
                : "fixed" == this.cssPosition
                ? -this.scrollParent.scrollTop()
                : n
                ? 0
                : s.scrollTop()),
            left:
              o -
              this.offset.click.left -
              this.offset.relative.left -
              this.offset.parent.left +
              (e.browser.safari &&
              e.browser.version < 526 &&
              "fixed" == this.cssPosition
                ? 0
                : "fixed" == this.cssPosition
                ? -this.scrollParent.scrollLeft()
                : n
                ? 0
                : s.scrollLeft()),
          }
        );
      },
      _clear: function () {
        this.helper.removeClass("ui-draggable-dragging"),
          this.helper[0] != this.element[0] &&
            !this.cancelHelperRemoval &&
            this.helper.remove(),
          (this.helper = null),
          (this.cancelHelperRemoval = !1);
      },
      _trigger: function (t, i, s) {
        return (
          (s = s || this._uiHash()),
          e.ui.plugin.call(this, t, [i, s]),
          "drag" == t &&
            (this.positionAbs = this._convertPositionTo("absolute")),
          e.Widget.prototype._trigger.call(this, t, i, s)
        );
      },
      plugins: {},
      _uiHash: function () {
        return {
          helper: this.helper,
          position: this.position,
          originalPosition: this.originalPosition,
          offset: this.positionAbs,
        };
      },
    }),
      e.extend(e.ui.draggable, { version: "1.8.9" }),
      e.ui.plugin.add("draggable", "connectToSortable", {
        start: function (t, i) {
          var s = e(this).data("draggable"),
            n = s.options,
            o = e.extend({}, i, { item: s.element });
          (s.sortables = []),
            e(n.connectToSortable).each(function () {
              var i = e.data(this, "sortable");
              i &&
                !i.options.disabled &&
                (s.sortables.push({
                  instance: i,
                  shouldRevert: i.options.revert,
                }),
                i._refreshItems(),
                i._trigger("activate", t, o));
            });
        },
        stop: function (t, i) {
          var s = e(this).data("draggable"),
            n = e.extend({}, i, { item: s.element });
          e.each(s.sortables, function () {
            this.instance.isOver
              ? ((this.instance.isOver = 0),
                (s.cancelHelperRemoval = !0),
                (this.instance.cancelHelperRemoval = !1),
                this.shouldRevert && (this.instance.options.revert = !0),
                this.instance._mouseStop(t),
                (this.instance.options.helper = this.instance.options._helper),
                "original" == s.options.helper &&
                  this.instance.currentItem.css({ top: "auto", left: "auto" }))
              : ((this.instance.cancelHelperRemoval = !1),
                this.instance._trigger("deactivate", t, n));
          });
        },
        drag: function (t, i) {
          var s = e(this).data("draggable"),
            n = this;
          e.each(s.sortables, function () {
            (this.instance.positionAbs = s.positionAbs),
              (this.instance.helperProportions = s.helperProportions),
              (this.instance.offset.click = s.offset.click),
              this.instance._intersectsWith(this.instance.containerCache)
                ? (this.instance.isOver ||
                    ((this.instance.isOver = 1),
                    (this.instance.currentItem = e(n)
                      .clone()
                      .appendTo(this.instance.element)
                      .data("sortable-item", !0)),
                    (this.instance.options._helper =
                      this.instance.options.helper),
                    (this.instance.options.helper = function () {
                      return i.helper[0];
                    }),
                    (t.target = this.instance.currentItem[0]),
                    this.instance._mouseCapture(t, !0),
                    this.instance._mouseStart(t, !0, !0),
                    (this.instance.offset.click.top = s.offset.click.top),
                    (this.instance.offset.click.left = s.offset.click.left),
                    (this.instance.offset.parent.left -=
                      s.offset.parent.left - this.instance.offset.parent.left),
                    (this.instance.offset.parent.top -=
                      s.offset.parent.top - this.instance.offset.parent.top),
                    s._trigger("toSortable", t),
                    (s.dropped = this.instance.element),
                    (s.currentItem = s.element),
                    (this.instance.fromOutside = s)),
                  this.instance.currentItem && this.instance._mouseDrag(t))
                : this.instance.isOver &&
                  ((this.instance.isOver = 0),
                  (this.instance.cancelHelperRemoval = !0),
                  (this.instance.options.revert = !1),
                  this.instance._trigger(
                    "out",
                    t,
                    this.instance._uiHash(this.instance)
                  ),
                  this.instance._mouseStop(t, !0),
                  (this.instance.options.helper =
                    this.instance.options._helper),
                  this.instance.currentItem.remove(),
                  this.instance.placeholder &&
                    this.instance.placeholder.remove(),
                  s._trigger("fromSortable", t),
                  (s.dropped = !1));
          });
        },
      }),
      e.ui.plugin.add("draggable", "cursor", {
        start: function () {
          var t = e("body"),
            i = e(this).data("draggable").options;
          t.css("cursor") && (i._cursor = t.css("cursor")),
            t.css("cursor", i.cursor);
        },
        stop: function () {
          var t = e(this).data("draggable").options;
          t._cursor && e("body").css("cursor", t._cursor);
        },
      }),
      e.ui.plugin.add("draggable", "iframeFix", {
        start: function () {
          var t = e(this).data("draggable").options;
          e(!0 === t.iframeFix ? "iframe" : t.iframeFix).each(function () {
            e(
              '<div class="ui-draggable-iframeFix" style="background: #fff;"></div>'
            )
              .css({
                width: this.offsetWidth + "px",
                height: this.offsetHeight + "px",
                position: "absolute",
                opacity: "0.001",
                zIndex: 1e3,
              })
              .css(e(this).offset())
              .appendTo("body");
          });
        },
        stop: function () {
          e("div.ui-draggable-iframeFix").each(function () {
            this.parentNode.removeChild(this);
          });
        },
      }),
      e.ui.plugin.add("draggable", "opacity", {
        start: function (t, i) {
          (t = e(i.helper)),
            (i = e(this).data("draggable").options),
            t.css("opacity") && (i._opacity = t.css("opacity")),
            t.css("opacity", i.opacity);
        },
        stop: function (t, i) {
          (t = e(this).data("draggable").options)._opacity &&
            e(i.helper).css("opacity", t._opacity);
        },
      }),
      e.ui.plugin.add("draggable", "scroll", {
        start: function () {
          var t = e(this).data("draggable");
          t.scrollParent[0] != document &&
            "HTML" != t.scrollParent[0].tagName &&
            (t.overflowOffset = t.scrollParent.offset());
        },
        drag: function (t) {
          var i = e(this).data("draggable"),
            s = i.options,
            n = !1;
          i.scrollParent[0] != document && "HTML" != i.scrollParent[0].tagName
            ? ((s.axis && "x" == s.axis) ||
                (i.overflowOffset.top +
                  i.scrollParent[0].offsetHeight -
                  t.pageY <
                s.scrollSensitivity
                  ? (i.scrollParent[0].scrollTop = n =
                      i.scrollParent[0].scrollTop + s.scrollSpeed)
                  : t.pageY - i.overflowOffset.top < s.scrollSensitivity &&
                    (i.scrollParent[0].scrollTop = n =
                      i.scrollParent[0].scrollTop - s.scrollSpeed)),
              (s.axis && "y" == s.axis) ||
                (i.overflowOffset.left +
                  i.scrollParent[0].offsetWidth -
                  t.pageX <
                s.scrollSensitivity
                  ? (i.scrollParent[0].scrollLeft = n =
                      i.scrollParent[0].scrollLeft + s.scrollSpeed)
                  : t.pageX - i.overflowOffset.left < s.scrollSensitivity &&
                    (i.scrollParent[0].scrollLeft = n =
                      i.scrollParent[0].scrollLeft - s.scrollSpeed)))
            : ((s.axis && "x" == s.axis) ||
                (t.pageY - e(document).scrollTop() < s.scrollSensitivity
                  ? (n = e(document).scrollTop(
                      e(document).scrollTop() - s.scrollSpeed
                    ))
                  : e(window).height() - (t.pageY - e(document).scrollTop()) <
                      s.scrollSensitivity &&
                    (n = e(document).scrollTop(
                      e(document).scrollTop() + s.scrollSpeed
                    ))),
              (s.axis && "y" == s.axis) ||
                (t.pageX - e(document).scrollLeft() < s.scrollSensitivity
                  ? (n = e(document).scrollLeft(
                      e(document).scrollLeft() - s.scrollSpeed
                    ))
                  : e(window).width() - (t.pageX - e(document).scrollLeft()) <
                      s.scrollSensitivity &&
                    (n = e(document).scrollLeft(
                      e(document).scrollLeft() + s.scrollSpeed
                    )))),
            !1 !== n &&
              e.ui.ddmanager &&
              !s.dropBehaviour &&
              e.ui.ddmanager.prepareOffsets(i, t);
        },
      }),
      e.ui.plugin.add("draggable", "snap", {
        start: function () {
          var t = e(this).data("draggable"),
            i = t.options;
          (t.snapElements = []),
            e(
              i.snap.constructor != String
                ? i.snap.items || ":data(draggable)"
                : i.snap
            ).each(function () {
              var i = e(this),
                s = i.offset();
              this != t.element[0] &&
                t.snapElements.push({
                  item: this,
                  width: i.outerWidth(),
                  height: i.outerHeight(),
                  top: s.top,
                  left: s.left,
                });
            });
        },
        drag: function (t, i) {
          for (
            var s = e(this).data("draggable"),
              n = s.options,
              o = n.snapTolerance,
              a = i.offset.left,
              r = a + s.helperProportions.width,
              l = i.offset.top,
              h = l + s.helperProportions.height,
              c = s.snapElements.length - 1;
            c >= 0;
            c--
          ) {
            var u = s.snapElements[c].left,
              d = u + s.snapElements[c].width,
              p = s.snapElements[c].top,
              f = p + s.snapElements[c].height;
            if (
              (u - o < a && a < d + o && p - o < l && l < f + o) ||
              (u - o < a && a < d + o && p - o < h && h < f + o) ||
              (u - o < r && r < d + o && p - o < l && l < f + o) ||
              (u - o < r && r < d + o && p - o < h && h < f + o)
            ) {
              if ("inner" != n.snapMode) {
                var g = Math.abs(p - h) <= o,
                  m = Math.abs(f - l) <= o,
                  v = Math.abs(u - r) <= o,
                  b = Math.abs(d - a) <= o;
                g &&
                  (i.position.top =
                    s._convertPositionTo("relative", {
                      top: p - s.helperProportions.height,
                      left: 0,
                    }).top - s.margins.top),
                  m &&
                    (i.position.top =
                      s._convertPositionTo("relative", { top: f, left: 0 })
                        .top - s.margins.top),
                  v &&
                    (i.position.left =
                      s._convertPositionTo("relative", {
                        top: 0,
                        left: u - s.helperProportions.width,
                      }).left - s.margins.left),
                  b &&
                    (i.position.left =
                      s._convertPositionTo("relative", { top: 0, left: d })
                        .left - s.margins.left);
              }
              var y = g || m || v || b;
              "outer" != n.snapMode &&
                ((g = Math.abs(p - l) <= o),
                (m = Math.abs(f - h) <= o),
                (v = Math.abs(u - a) <= o),
                (b = Math.abs(d - r) <= o),
                g &&
                  (i.position.top =
                    s._convertPositionTo("relative", { top: p, left: 0 }).top -
                    s.margins.top),
                m &&
                  (i.position.top =
                    s._convertPositionTo("relative", {
                      top: f - s.helperProportions.height,
                      left: 0,
                    }).top - s.margins.top),
                v &&
                  (i.position.left =
                    s._convertPositionTo("relative", { top: 0, left: u }).left -
                    s.margins.left),
                b &&
                  (i.position.left =
                    s._convertPositionTo("relative", {
                      top: 0,
                      left: d - s.helperProportions.width,
                    }).left - s.margins.left)),
                !s.snapElements[c].snapping &&
                  (g || m || v || b || y) &&
                  s.options.snap.snap &&
                  s.options.snap.snap.call(
                    s.element,
                    t,
                    e.extend(s._uiHash(), { snapItem: s.snapElements[c].item })
                  ),
                (s.snapElements[c].snapping = g || m || v || b || y);
            } else
              s.snapElements[c].snapping &&
                s.options.snap.release &&
                s.options.snap.release.call(
                  s.element,
                  t,
                  e.extend(s._uiHash(), { snapItem: s.snapElements[c].item })
                ),
                (s.snapElements[c].snapping = !1);
          }
        },
      }),
      e.ui.plugin.add("draggable", "stack", {
        start: function () {
          var t = e(this).data("draggable").options;
          if (
            (t = e.makeArray(e(t.stack)).sort(function (t, i) {
              return (
                (parseInt(e(t).css("zIndex"), 10) || 0) -
                (parseInt(e(i).css("zIndex"), 10) || 0)
              );
            })).length
          ) {
            var i = parseInt(t[0].style.zIndex) || 0;
            e(t).each(function (e) {
              this.style.zIndex = i + e;
            }),
              (this[0].style.zIndex = i + t.length);
          }
        },
      }),
      e.ui.plugin.add("draggable", "zIndex", {
        start: function (t, i) {
          (t = e(i.helper)),
            (i = e(this).data("draggable").options),
            t.css("zIndex") && (i._zIndex = t.css("zIndex")),
            t.css("zIndex", i.zIndex);
        },
        stop: function (t, i) {
          (t = e(this).data("draggable").options)._zIndex &&
            e(i.helper).css("zIndex", t._zIndex);
        },
      });
  })(jQuery),
  (function (e) {
    e.widget("ui.droppable", {
      widgetEventPrefix: "drop",
      options: {
        accept: "*",
        activeClass: !1,
        addClasses: !0,
        greedy: !1,
        hoverClass: !1,
        scope: "default",
        tolerance: "intersect",
      },
      _create: function () {
        var t = this.options,
          i = t.accept;
        (this.isover = 0),
          (this.isout = 1),
          (this.accept = e.isFunction(i)
            ? i
            : function (e) {
                return e.is(i);
              }),
          (this.proportions = {
            width: this.element[0].offsetWidth,
            height: this.element[0].offsetHeight,
          }),
          (e.ui.ddmanager.droppables[t.scope] =
            e.ui.ddmanager.droppables[t.scope] || []),
          e.ui.ddmanager.droppables[t.scope].push(this),
          t.addClasses && this.element.addClass("ui-droppable");
      },
      destroy: function () {
        for (
          var t = e.ui.ddmanager.droppables[this.options.scope], i = 0;
          i < t.length;
          i++
        )
          t[i] == this && t.splice(i, 1);
        return (
          this.element
            .removeClass("ui-droppable ui-droppable-disabled")
            .removeData("droppable")
            .unbind(".droppable"),
          this
        );
      },
      _setOption: function (t, i) {
        "accept" == t &&
          (this.accept = e.isFunction(i)
            ? i
            : function (e) {
                return e.is(i);
              }),
          e.Widget.prototype._setOption.apply(this, arguments);
      },
      _activate: function (t) {
        var i = e.ui.ddmanager.current;
        this.options.activeClass &&
          this.element.addClass(this.options.activeClass),
          i && this._trigger("activate", t, this.ui(i));
      },
      _deactivate: function (t) {
        var i = e.ui.ddmanager.current;
        this.options.activeClass &&
          this.element.removeClass(this.options.activeClass),
          i && this._trigger("deactivate", t, this.ui(i));
      },
      _over: function (t) {
        var i = e.ui.ddmanager.current;
        i &&
          (i.currentItem || i.element)[0] != this.element[0] &&
          this.accept.call(this.element[0], i.currentItem || i.element) &&
          (this.options.hoverClass &&
            this.element.addClass(this.options.hoverClass),
          this._trigger("over", t, this.ui(i)));
      },
      _out: function (t) {
        var i = e.ui.ddmanager.current;
        i &&
          (i.currentItem || i.element)[0] != this.element[0] &&
          this.accept.call(this.element[0], i.currentItem || i.element) &&
          (this.options.hoverClass &&
            this.element.removeClass(this.options.hoverClass),
          this._trigger("out", t, this.ui(i)));
      },
      _drop: function (t, i) {
        var s = i || e.ui.ddmanager.current;
        if (!s || (s.currentItem || s.element)[0] == this.element[0]) return !1;
        var n = !1;
        return (
          this.element
            .find(":data(droppable)")
            .not(".ui-draggable-dragging")
            .each(function () {
              var t = e.data(this, "droppable");
              if (
                t.options.greedy &&
                !t.options.disabled &&
                t.options.scope == s.options.scope &&
                t.accept.call(t.element[0], s.currentItem || s.element) &&
                e.ui.intersect(
                  s,
                  e.extend(t, { offset: t.element.offset() }),
                  t.options.tolerance
                )
              )
                return (n = !0), !1;
            }),
          !n &&
            !!this.accept.call(this.element[0], s.currentItem || s.element) &&
            (this.options.activeClass &&
              this.element.removeClass(this.options.activeClass),
            this.options.hoverClass &&
              this.element.removeClass(this.options.hoverClass),
            this._trigger("drop", t, this.ui(s)),
            this.element)
        );
      },
      ui: function (e) {
        return {
          draggable: e.currentItem || e.element,
          helper: e.helper,
          position: e.position,
          offset: e.positionAbs,
        };
      },
    }),
      e.extend(e.ui.droppable, { version: "1.8.9" }),
      (e.ui.intersect = function (t, i, s) {
        if (!i.offset) return !1;
        var n = (t.positionAbs || t.position.absolute).left,
          o = n + t.helperProportions.width,
          a = (t.positionAbs || t.position.absolute).top,
          r = a + t.helperProportions.height,
          l = i.offset.left,
          h = l + i.proportions.width,
          c = i.offset.top,
          u = c + i.proportions.height;
        switch (s) {
          case "fit":
            return l <= n && o <= h && c <= a && r <= u;
          case "intersect":
            return (
              l < n + t.helperProportions.width / 2 &&
              o - t.helperProportions.width / 2 < h &&
              c < a + t.helperProportions.height / 2 &&
              r - t.helperProportions.height / 2 < u
            );
          case "pointer":
            return e.ui.isOver(
              (t.positionAbs || t.position.absolute).top +
                (t.clickOffset || t.offset.click).top,
              (t.positionAbs || t.position.absolute).left +
                (t.clickOffset || t.offset.click).left,
              c,
              l,
              i.proportions.height,
              i.proportions.width
            );
          case "touch":
            return (
              ((a >= c && a <= u) || (r >= c && r <= u) || (a < c && r > u)) &&
              ((n >= l && n <= h) || (o >= l && o <= h) || (n < l && o > h))
            );
          default:
            return !1;
        }
      }),
      (e.ui.ddmanager = {
        current: null,
        droppables: { default: [] },
        prepareOffsets: function (t, i) {
          var s = e.ui.ddmanager.droppables[t.options.scope] || [],
            n = i ? i.type : null,
            o = (t.currentItem || t.element).find(":data(droppable)").andSelf(),
            a = 0;
          e: for (; a < s.length; a++)
            if (
              !(
                s[a].options.disabled ||
                (t &&
                  !s[a].accept.call(
                    s[a].element[0],
                    t.currentItem || t.element
                  ))
              )
            ) {
              for (var r = 0; r < o.length; r++)
                if (o[r] == s[a].element[0]) {
                  s[a].proportions.height = 0;
                  continue e;
                }
              (s[a].visible = "none" != s[a].element.css("display")),
                s[a].visible &&
                  ((s[a].offset = s[a].element.offset()),
                  (s[a].proportions = {
                    width: s[a].element[0].offsetWidth,
                    height: s[a].element[0].offsetHeight,
                  }),
                  "mousedown" == n && s[a]._activate.call(s[a], i));
            }
        },
        drop: function (t, i) {
          var s = !1;
          return (
            e.each(
              e.ui.ddmanager.droppables[t.options.scope] || [],
              function () {
                this.options &&
                  (!this.options.disabled &&
                    this.visible &&
                    e.ui.intersect(t, this, this.options.tolerance) &&
                    (s = s || this._drop.call(this, i)),
                  !this.options.disabled &&
                    this.visible &&
                    this.accept.call(
                      this.element[0],
                      t.currentItem || t.element
                    ) &&
                    ((this.isout = 1),
                    (this.isover = 0),
                    this._deactivate.call(this, i)));
              }
            ),
            s
          );
        },
        drag: function (t, i) {
          t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, i),
            e.each(
              e.ui.ddmanager.droppables[t.options.scope] || [],
              function () {
                if (
                  !this.options.disabled &&
                  !this.greedyChild &&
                  this.visible
                ) {
                  var s = e.ui.intersect(t, this, this.options.tolerance);
                  if (
                    (s =
                      s || 1 != this.isover
                        ? s && 0 == this.isover
                          ? "isover"
                          : null
                        : "isout")
                  ) {
                    var n;
                    if (this.options.greedy) {
                      var o = this.element.parents(":data(droppable):eq(0)");
                      o.length &&
                        ((n = e.data(o[0], "droppable")).greedyChild =
                          "isover" == s ? 1 : 0);
                    }
                    n &&
                      "isover" == s &&
                      ((n.isover = 0), (n.isout = 1), n._out.call(n, i)),
                      (this[s] = 1),
                      (this["isout" == s ? "isover" : "isout"] = 0),
                      this["isover" == s ? "_over" : "_out"].call(this, i),
                      n &&
                        "isout" == s &&
                        ((n.isout = 0), (n.isover = 1), n._over.call(n, i));
                  }
                }
              }
            );
        },
      });
  })(jQuery),
  (function (e) {
    e.widget("ui.resizable", e.ui.mouse, {
      widgetEventPrefix: "resize",
      options: {
        alsoResize: !1,
        animate: !1,
        animateDuration: "slow",
        animateEasing: "swing",
        aspectRatio: !1,
        autoHide: !1,
        containment: !1,
        ghost: !1,
        grid: !1,
        handles: "e,s,se",
        helper: !1,
        maxHeight: null,
        maxWidth: null,
        minHeight: 10,
        minWidth: 10,
        zIndex: 1e3,
      },
      _create: function () {
        var t = this,
          i = this.options;
        if (
          (this.element.addClass("ui-resizable"),
          e.extend(this, {
            _aspectRatio: !!i.aspectRatio,
            aspectRatio: i.aspectRatio,
            originalElement: this.element,
            _proportionallyResizeElements: [],
            _helper:
              i.helper || i.ghost || i.animate
                ? i.helper || "ui-resizable-helper"
                : null,
          }),
          this.element[0].nodeName.match(
            /canvas|textarea|input|select|button|img/i
          ) &&
            (/relative/.test(this.element.css("position")) &&
              e.browser.opera &&
              this.element.css({
                position: "relative",
                top: "auto",
                left: "auto",
              }),
            this.element.wrap(
              e('<div class="ui-wrapper" style="overflow: hidden;"></div>').css(
                {
                  position: this.element.css("position"),
                  width: this.element.outerWidth(),
                  height: this.element.outerHeight(),
                  top: this.element.css("top"),
                  left: this.element.css("left"),
                }
              )
            ),
            (this.element = this.element
              .parent()
              .data("resizable", this.element.data("resizable"))),
            (this.elementIsWrapper = !0),
            this.element.css({
              marginLeft: this.originalElement.css("marginLeft"),
              marginTop: this.originalElement.css("marginTop"),
              marginRight: this.originalElement.css("marginRight"),
              marginBottom: this.originalElement.css("marginBottom"),
            }),
            this.originalElement.css({
              marginLeft: 0,
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
            }),
            (this.originalResizeStyle = this.originalElement.css("resize")),
            this.originalElement.css("resize", "none"),
            this._proportionallyResizeElements.push(
              this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block",
              })
            ),
            this.originalElement.css({
              margin: this.originalElement.css("margin"),
            }),
            this._proportionallyResize()),
          (this.handles =
            i.handles ||
            (e(".ui-resizable-handle", this.element).length
              ? {
                  n: ".ui-resizable-n",
                  e: ".ui-resizable-e",
                  s: ".ui-resizable-s",
                  w: ".ui-resizable-w",
                  se: ".ui-resizable-se",
                  sw: ".ui-resizable-sw",
                  ne: ".ui-resizable-ne",
                  nw: ".ui-resizable-nw",
                }
              : "e,s,se")),
          this.handles.constructor == String)
        ) {
          "all" == this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw");
          var s = this.handles.split(",");
          this.handles = {};
          for (var n = 0; n < s.length; n++) {
            var o = e.trim(s[n]),
              a = e(
                '<div class="ui-resizable-handle ui-resizable-' + o + '"></div>'
              );
            /sw|se|ne|nw/.test(o) && a.css({ zIndex: ++i.zIndex }),
              "se" == o && a.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),
              (this.handles[o] = ".ui-resizable-" + o),
              this.element.append(a);
          }
        }
        (this._renderAxis = function (t) {
          for (var i in ((t = t || this.element), this.handles)) {
            if (
              (this.handles[i].constructor == String &&
                (this.handles[i] = e(this.handles[i], this.element).show()),
              this.elementIsWrapper &&
                this.originalElement[0].nodeName.match(
                  /textarea|input|select|button/i
                ))
            ) {
              var s,
                n = e(this.handles[i], this.element);
              (s = /sw|ne|nw|se|n|s/.test(i)
                ? n.outerHeight()
                : n.outerWidth()),
                (n = [
                  "padding",
                  /ne|nw|n/.test(i)
                    ? "Top"
                    : /se|sw|s/.test(i)
                    ? "Bottom"
                    : /^e$/.test(i)
                    ? "Right"
                    : "Left",
                ].join("")),
                t.css(n, s),
                this._proportionallyResize();
            }
            e(this.handles[i]);
          }
        }),
          this._renderAxis(this.element),
          (this._handles = e(
            ".ui-resizable-handle",
            this.element
          ).disableSelection()),
          this._handles.mouseover(function () {
            if (!t.resizing) {
              if (this.className)
                var e = this.className.match(
                  /ui-resizable-(se|sw|ne|nw|n|e|s|w)/i
                );
              t.axis = e && e[1] ? e[1] : "se";
            }
          }),
          i.autoHide &&
            (this._handles.hide(),
            e(this.element)
              .addClass("ui-resizable-autohide")
              .hover(
                function () {
                  e(this).removeClass("ui-resizable-autohide"),
                    t._handles.show();
                },
                function () {
                  t.resizing ||
                    (e(this).addClass("ui-resizable-autohide"),
                    t._handles.hide());
                }
              )),
          this._mouseInit();
      },
      destroy: function () {
        this._mouseDestroy();
        var t = function (t) {
          e(t)
            .removeClass(
              "ui-resizable ui-resizable-disabled ui-resizable-resizing"
            )
            .removeData("resizable")
            .unbind(".resizable")
            .find(".ui-resizable-handle")
            .remove();
        };
        if (this.elementIsWrapper) {
          t(this.element);
          var i = this.element;
          i.after(
            this.originalElement.css({
              position: i.css("position"),
              width: i.outerWidth(),
              height: i.outerHeight(),
              top: i.css("top"),
              left: i.css("left"),
            })
          ).remove();
        }
        return (
          this.originalElement.css("resize", this.originalResizeStyle),
          t(this.originalElement),
          this
        );
      },
      _mouseCapture: function (t) {
        var i = !1;
        for (var s in this.handles)
          e(this.handles[s])[0] == t.target && (i = !0);
        return !this.options.disabled && i;
      },
      _mouseStart: function (i) {
        var s = this.options,
          n = this.element.position(),
          o = this.element;
        (this.resizing = !0),
          (this.documentScroll = {
            top: e(document).scrollTop(),
            left: e(document).scrollLeft(),
          }),
          (o.is(".ui-draggable") || /absolute/.test(o.css("position"))) &&
            o.css({ position: "absolute", top: n.top, left: n.left }),
          e.browser.opera &&
            /relative/.test(o.css("position")) &&
            o.css({ position: "relative", top: "auto", left: "auto" }),
          this._renderProxy(),
          (n = t(this.helper.css("left")));
        var a = t(this.helper.css("top"));
        return (
          s.containment &&
            ((n += e(s.containment).scrollLeft() || 0),
            (a += e(s.containment).scrollTop() || 0)),
          (this.offset = this.helper.offset()),
          (this.position = { left: n, top: a }),
          (this.size = this._helper
            ? { width: o.outerWidth(), height: o.outerHeight() }
            : { width: o.width(), height: o.height() }),
          (this.originalSize = this._helper
            ? { width: o.outerWidth(), height: o.outerHeight() }
            : { width: o.width(), height: o.height() }),
          (this.originalPosition = { left: n, top: a }),
          (this.sizeDiff = {
            width: o.outerWidth() - o.width(),
            height: o.outerHeight() - o.height(),
          }),
          (this.originalMousePosition = { left: i.pageX, top: i.pageY }),
          (this.aspectRatio =
            "number" == typeof s.aspectRatio
              ? s.aspectRatio
              : this.originalSize.width / this.originalSize.height || 1),
          (s = e(".ui-resizable-" + this.axis).css("cursor")),
          e("body").css("cursor", "auto" == s ? this.axis + "-resize" : s),
          o.addClass("ui-resizable-resizing"),
          this._propagate("start", i),
          !0
        );
      },
      _mouseDrag: function (e) {
        var t = this.helper,
          i = this.originalMousePosition,
          s = this._change[this.axis];
        return (
          !!s &&
          ((i = s.apply(this, [
            e,
            e.pageX - i.left || 0,
            e.pageY - i.top || 0,
          ])),
          (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)),
          (i = this._respectSize(i, e)),
          this._propagate("resize", e),
          t.css({
            top: this.position.top + "px",
            left: this.position.left + "px",
            width: this.size.width + "px",
            height: this.size.height + "px",
          }),
          !this._helper &&
            this._proportionallyResizeElements.length &&
            this._proportionallyResize(),
          this._updateCache(i),
          this._trigger("resize", e, this.ui()),
          !1)
        );
      },
      _mouseStop: function (t) {
        this.resizing = !1;
        var i = this.options,
          s = this;
        if (this._helper) {
          var n = this._proportionallyResizeElements,
            o = n.length && /textarea/i.test(n[0].nodeName);
          (n = o && e.ui.hasScroll(n[0], "left") ? 0 : s.sizeDiff.height),
            (o = {
              width: s.size.width - (o ? 0 : s.sizeDiff.width),
              height: s.size.height - n,
            }),
            (n =
              parseInt(s.element.css("left"), 10) +
                (s.position.left - s.originalPosition.left) || null);
          var a =
            parseInt(s.element.css("top"), 10) +
              (s.position.top - s.originalPosition.top) || null;
          i.animate || this.element.css(e.extend(o, { top: a, left: n })),
            s.helper.height(s.size.height),
            s.helper.width(s.size.width),
            this._helper && !i.animate && this._proportionallyResize();
        }
        return (
          e("body").css("cursor", "auto"),
          this.element.removeClass("ui-resizable-resizing"),
          this._propagate("stop", t),
          this._helper && this.helper.remove(),
          !1
        );
      },
      _updateCache: function (e) {
        (this.offset = this.helper.offset()),
          i(e.left) && (this.position.left = e.left),
          i(e.top) && (this.position.top = e.top),
          i(e.height) && (this.size.height = e.height),
          i(e.width) && (this.size.width = e.width);
      },
      _updateRatio: function (e) {
        var t = this.position,
          i = this.size,
          s = this.axis;
        return (
          e.height
            ? (e.width = i.height * this.aspectRatio)
            : e.width && (e.height = i.width / this.aspectRatio),
          "sw" == s &&
            ((e.left = t.left + (i.width - e.width)), (e.top = null)),
          "nw" == s &&
            ((e.top = t.top + (i.height - e.height)),
            (e.left = t.left + (i.width - e.width))),
          e
        );
      },
      _respectSize: function (e) {
        var t = this.options,
          s = this.axis,
          n = i(e.width) && t.maxWidth && t.maxWidth < e.width,
          o = i(e.height) && t.maxHeight && t.maxHeight < e.height,
          a = i(e.width) && t.minWidth && t.minWidth > e.width,
          r = i(e.height) && t.minHeight && t.minHeight > e.height;
        a && (e.width = t.minWidth),
          r && (e.height = t.minHeight),
          n && (e.width = t.maxWidth),
          o && (e.height = t.maxHeight);
        var l = this.originalPosition.left + this.originalSize.width,
          h = this.position.top + this.size.height,
          c = /sw|nw|w/.test(s);
        return (
          (s = /nw|ne|n/.test(s)),
          a && c && (e.left = l - t.minWidth),
          n && c && (e.left = l - t.maxWidth),
          r && s && (e.top = h - t.minHeight),
          o && s && (e.top = h - t.maxHeight),
          (t = !e.width && !e.height) && !e.left && e.top
            ? (e.top = null)
            : t && !e.top && e.left && (e.left = null),
          e
        );
      },
      _proportionallyResize: function () {
        if (this._proportionallyResizeElements.length)
          for (
            var t = this.helper || this.element, i = 0;
            i < this._proportionallyResizeElements.length;
            i++
          ) {
            var s = this._proportionallyResizeElements[i];
            if (!this.borderDif) {
              var n = [
                  s.css("borderTopWidth"),
                  s.css("borderRightWidth"),
                  s.css("borderBottomWidth"),
                  s.css("borderLeftWidth"),
                ],
                o = [
                  s.css("paddingTop"),
                  s.css("paddingRight"),
                  s.css("paddingBottom"),
                  s.css("paddingLeft"),
                ];
              this.borderDif = e.map(n, function (e, t) {
                return (
                  (e = parseInt(e, 10) || 0) + (t = parseInt(o[t], 10) || 0)
                );
              });
            }
            (e.browser.msie &&
              (e(t).is(":hidden") || e(t).parents(":hidden").length)) ||
              s.css({
                height: t.height() - this.borderDif[0] - this.borderDif[2] || 0,
                width: t.width() - this.borderDif[1] - this.borderDif[3] || 0,
              });
          }
      },
      _renderProxy: function () {
        var t = this.options;
        if (((this.elementOffset = this.element.offset()), this._helper)) {
          this.helper =
            this.helper || e('<div style="overflow:hidden;"></div>');
          var i = e.browser.msie && e.browser.version < 7,
            s = i ? 1 : 0;
          (i = i ? 2 : -1),
            this.helper.addClass(this._helper).css({
              width: this.element.outerWidth() + i,
              height: this.element.outerHeight() + i,
              position: "absolute",
              left: this.elementOffset.left - s + "px",
              top: this.elementOffset.top - s + "px",
              zIndex: ++t.zIndex,
            }),
            this.helper.appendTo("body").disableSelection();
        } else this.helper = this.element;
      },
      _change: {
        e: function (e, t) {
          return { width: this.originalSize.width + t };
        },
        w: function (e, t) {
          return {
            left: this.originalPosition.left + t,
            width: this.originalSize.width - t,
          };
        },
        n: function (e, t, i) {
          return {
            top: this.originalPosition.top + i,
            height: this.originalSize.height - i,
          };
        },
        s: function (e, t, i) {
          return { height: this.originalSize.height + i };
        },
        se: function (t, i, s) {
          return e.extend(
            this._change.s.apply(this, arguments),
            this._change.e.apply(this, [t, i, s])
          );
        },
        sw: function (t, i, s) {
          return e.extend(
            this._change.s.apply(this, arguments),
            this._change.w.apply(this, [t, i, s])
          );
        },
        ne: function (t, i, s) {
          return e.extend(
            this._change.n.apply(this, arguments),
            this._change.e.apply(this, [t, i, s])
          );
        },
        nw: function (t, i, s) {
          return e.extend(
            this._change.n.apply(this, arguments),
            this._change.w.apply(this, [t, i, s])
          );
        },
      },
      _propagate: function (t, i) {
        e.ui.plugin.call(this, t, [i, this.ui()]),
          "resize" != t && this._trigger(t, i, this.ui());
      },
      plugins: {},
      ui: function () {
        return {
          originalElement: this.originalElement,
          element: this.element,
          helper: this.helper,
          position: this.position,
          size: this.size,
          originalSize: this.originalSize,
          originalPosition: this.originalPosition,
        };
      },
    }),
      e.extend(e.ui.resizable, { version: "1.8.9" }),
      e.ui.plugin.add("resizable", "alsoResize", {
        start: function () {
          var t = e(this).data("resizable").options,
            i = function (t) {
              e(t).each(function () {
                var t = e(this);
                t.data("resizable-alsoresize", {
                  width: parseInt(t.width(), 10),
                  height: parseInt(t.height(), 10),
                  left: parseInt(t.css("left"), 10),
                  top: parseInt(t.css("top"), 10),
                  position: t.css("position"),
                });
              });
            };
          "object" != typeof t.alsoResize || t.alsoResize.parentNode
            ? i(t.alsoResize)
            : t.alsoResize.length
            ? ((t.alsoResize = t.alsoResize[0]), i(t.alsoResize))
            : e.each(t.alsoResize, function (e) {
                i(e);
              });
        },
        resize: function (t, i) {
          var s = e(this).data("resizable");
          t = s.options;
          var n = s.originalSize,
            o = s.originalPosition,
            a = {
              height: s.size.height - n.height || 0,
              width: s.size.width - n.width || 0,
              top: s.position.top - o.top || 0,
              left: s.position.left - o.left || 0,
            },
            r = function (t, n) {
              e(t).each(function () {
                var t = e(this),
                  o = e(this).data("resizable-alsoresize"),
                  r = {},
                  l =
                    n && n.length
                      ? n
                      : t.parents(i.originalElement[0]).length
                      ? ["width", "height"]
                      : ["width", "height", "top", "left"];
                e.each(l, function (e, t) {
                  (e = (o[t] || 0) + (a[t] || 0)) &&
                    e >= 0 &&
                    (r[t] = e || null);
                }),
                  e.browser.opera &&
                    /relative/.test(t.css("position")) &&
                    ((s._revertToRelativePosition = !0),
                    t.css({ position: "absolute", top: "auto", left: "auto" })),
                  t.css(r);
              });
            };
          "object" != typeof t.alsoResize || t.alsoResize.nodeType
            ? r(t.alsoResize)
            : e.each(t.alsoResize, function (e, t) {
                r(e, t);
              });
        },
        stop: function () {
          var t = e(this).data("resizable"),
            i = t.options,
            s = function (t) {
              e(t).each(function () {
                var t = e(this);
                t.css({ position: t.data("resizable-alsoresize").position });
              });
            };
          t._revertToRelativePosition &&
            ((t._revertToRelativePosition = !1),
            "object" != typeof i.alsoResize || i.alsoResize.nodeType
              ? s(i.alsoResize)
              : e.each(i.alsoResize, function (e) {
                  s(e);
                })),
            e(this).removeData("resizable-alsoresize");
        },
      }),
      e.ui.plugin.add("resizable", "animate", {
        stop: function (t) {
          var i = e(this).data("resizable"),
            s = i.options,
            n = i._proportionallyResizeElements,
            o = n.length && /textarea/i.test(n[0].nodeName),
            a = o && e.ui.hasScroll(n[0], "left") ? 0 : i.sizeDiff.height;
          (o = {
            width: i.size.width - (o ? 0 : i.sizeDiff.width),
            height: i.size.height - a,
          }),
            (a =
              parseInt(i.element.css("left"), 10) +
                (i.position.left - i.originalPosition.left) || null);
          var r =
            parseInt(i.element.css("top"), 10) +
              (i.position.top - i.originalPosition.top) || null;
          i.element.animate(e.extend(o, r && a ? { top: r, left: a } : {}), {
            duration: s.animateDuration,
            easing: s.animateEasing,
            step: function () {
              var s = {
                width: parseInt(i.element.css("width"), 10),
                height: parseInt(i.element.css("height"), 10),
                top: parseInt(i.element.css("top"), 10),
                left: parseInt(i.element.css("left"), 10),
              };
              n &&
                n.length &&
                e(n[0]).css({ width: s.width, height: s.height }),
                i._updateCache(s),
                i._propagate("resize", t);
            },
          });
        },
      }),
      e.ui.plugin.add("resizable", "containment", {
        start: function () {
          var i = e(this).data("resizable"),
            s = i.element,
            n = i.options.containment;
          if (
            (s =
              n instanceof e
                ? n.get(0)
                : /parent/.test(n)
                ? s.parent().get(0)
                : n)
          )
            if (
              ((i.containerElement = e(s)), /document/.test(n) || n == document)
            )
              (i.containerOffset = { left: 0, top: 0 }),
                (i.containerPosition = { left: 0, top: 0 }),
                (i.parentData = {
                  element: e(document),
                  left: 0,
                  top: 0,
                  width: e(document).width(),
                  height:
                    e(document).height() ||
                    document.body.parentNode.scrollHeight,
                });
            else {
              var o = e(s),
                a = [];
              e(["Top", "Right", "Left", "Bottom"]).each(function (e, i) {
                a[e] = t(o.css("padding" + i));
              }),
                (i.containerOffset = o.offset()),
                (i.containerPosition = o.position()),
                (i.containerSize = {
                  height: o.innerHeight() - a[3],
                  width: o.innerWidth() - a[1],
                }),
                (n = i.containerOffset);
              var r = i.containerSize.height,
                l = i.containerSize.width;
              (l = e.ui.hasScroll(s, "left") ? s.scrollWidth : l),
                (r = e.ui.hasScroll(s) ? s.scrollHeight : r),
                (i.parentData = {
                  element: s,
                  left: n.left,
                  top: n.top,
                  width: l,
                  height: r,
                });
            }
        },
        resize: function (t) {
          var i = e(this).data("resizable"),
            s = i.options,
            n = i.containerOffset,
            o = i.position;
          t = i._aspectRatio || t.shiftKey;
          var a = { top: 0, left: 0 },
            r = i.containerElement;
          r[0] != document && /static/.test(r.css("position")) && (a = n),
            o.left < (i._helper ? n.left : 0) &&
              ((i.size.width += i._helper
                ? i.position.left - n.left
                : i.position.left - a.left),
              t && (i.size.height = i.size.width / s.aspectRatio),
              (i.position.left = s.helper ? n.left : 0)),
            o.top < (i._helper ? n.top : 0) &&
              ((i.size.height += i._helper
                ? i.position.top - n.top
                : i.position.top),
              t && (i.size.width = i.size.height * s.aspectRatio),
              (i.position.top = i._helper ? n.top : 0)),
            (i.offset.left = i.parentData.left + i.position.left),
            (i.offset.top = i.parentData.top + i.position.top),
            (s = Math.abs(
              (i._helper, i.offset.left - a.left + i.sizeDiff.width)
            )),
            (n = Math.abs(
              (i._helper ? i.offset.top - a.top : i.offset.top - n.top) +
                i.sizeDiff.height
            )),
            (o = i.containerElement.get(0) == i.element.parent().get(0)),
            (a = /relative|absolute/.test(i.containerElement.css("position"))),
            o && a && (s -= i.parentData.left),
            s + i.size.width >= i.parentData.width &&
              ((i.size.width = i.parentData.width - s),
              t && (i.size.height = i.size.width / i.aspectRatio)),
            n + i.size.height >= i.parentData.height &&
              ((i.size.height = i.parentData.height - n),
              t && (i.size.width = i.size.height * i.aspectRatio));
        },
        stop: function () {
          var t = e(this).data("resizable"),
            i = t.options,
            s = t.containerOffset,
            n = t.containerPosition,
            o = t.containerElement,
            a = e(t.helper),
            r = a.offset(),
            l = a.outerWidth() - t.sizeDiff.width;
          (a = a.outerHeight() - t.sizeDiff.height),
            t._helper &&
              !i.animate &&
              /relative/.test(o.css("position")) &&
              e(this).css({
                left: r.left - n.left - s.left,
                width: l,
                height: a,
              }),
            t._helper &&
              !i.animate &&
              /static/.test(o.css("position")) &&
              e(this).css({
                left: r.left - n.left - s.left,
                width: l,
                height: a,
              });
        },
      }),
      e.ui.plugin.add("resizable", "ghost", {
        start: function () {
          var t = e(this).data("resizable"),
            i = t.options,
            s = t.size;
          (t.ghost = t.originalElement.clone()),
            t.ghost
              .css({
                opacity: 0.25,
                display: "block",
                position: "relative",
                height: s.height,
                width: s.width,
                margin: 0,
                left: 0,
                top: 0,
              })
              .addClass("ui-resizable-ghost")
              .addClass("string" == typeof i.ghost ? i.ghost : ""),
            t.ghost.appendTo(t.helper);
        },
        resize: function () {
          var t = e(this).data("resizable");
          t.ghost &&
            t.ghost.css({
              position: "relative",
              height: t.size.height,
              width: t.size.width,
            });
        },
        stop: function () {
          var t = e(this).data("resizable");
          t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0));
        },
      }),
      e.ui.plugin.add("resizable", "grid", {
        resize: function () {
          var t = e(this).data("resizable"),
            i = t.options,
            s = t.size,
            n = t.originalSize,
            o = t.originalPosition,
            a = t.axis;
          i.grid = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid;
          var r =
            Math.round((s.width - n.width) / (i.grid[0] || 1)) *
            (i.grid[0] || 1);
          (i =
            Math.round((s.height - n.height) / (i.grid[1] || 1)) *
            (i.grid[1] || 1)),
            /^(se|s|e)$/.test(a)
              ? ((t.size.width = n.width + r), (t.size.height = n.height + i))
              : /^(ne)$/.test(a)
              ? ((t.size.width = n.width + r),
                (t.size.height = n.height + i),
                (t.position.top = o.top - i))
              : (/^(sw)$/.test(a)
                  ? ((t.size.width = n.width + r),
                    (t.size.height = n.height + i))
                  : ((t.size.width = n.width + r),
                    (t.size.height = n.height + i),
                    (t.position.top = o.top - i)),
                (t.position.left = o.left - r));
        },
      });
    var t = function (e) {
        return parseInt(e, 10) || 0;
      },
      i = function (e) {
        return !isNaN(parseInt(e, 10));
      };
  })(jQuery),
  (function (e) {
    e.widget("ui.selectable", e.ui.mouse, {
      options: {
        appendTo: "body",
        autoRefresh: !0,
        distance: 0,
        filter: "*",
        tolerance: "touch",
      },
      _create: function () {
        var t,
          i = this;
        this.element.addClass("ui-selectable"),
          (this.dragged = !1),
          (this.refresh = function () {
            (t = e(i.options.filter, i.element[0])).each(function () {
              var t = e(this),
                i = t.offset();
              e.data(this, "selectable-item", {
                element: this,
                $element: t,
                left: i.left,
                top: i.top,
                right: i.left + t.outerWidth(),
                bottom: i.top + t.outerHeight(),
                startselected: !1,
                selected: t.hasClass("ui-selected"),
                selecting: t.hasClass("ui-selecting"),
                unselecting: t.hasClass("ui-unselecting"),
              });
            });
          }),
          this.refresh(),
          (this.selectees = t.addClass("ui-selectee")),
          this._mouseInit(),
          (this.helper = e("<div class='ui-selectable-helper'></div>"));
      },
      destroy: function () {
        return (
          this.selectees
            .removeClass("ui-selectee")
            .removeData("selectable-item"),
          this.element
            .removeClass("ui-selectable ui-selectable-disabled")
            .removeData("selectable")
            .unbind(".selectable"),
          this._mouseDestroy(),
          this
        );
      },
      _mouseStart: function (t) {
        var i = this;
        if (((this.opos = [t.pageX, t.pageY]), !this.options.disabled)) {
          var s = this.options;
          (this.selectees = e(s.filter, this.element[0])),
            this._trigger("start", t),
            e(s.appendTo).append(this.helper),
            this.helper.css({
              left: t.clientX,
              top: t.clientY,
              width: 0,
              height: 0,
            }),
            s.autoRefresh && this.refresh(),
            this.selectees.filter(".ui-selected").each(function () {
              var s = e.data(this, "selectable-item");
              (s.startselected = !0),
                t.metaKey ||
                  (s.$element.removeClass("ui-selected"),
                  (s.selected = !1),
                  s.$element.addClass("ui-unselecting"),
                  (s.unselecting = !0),
                  i._trigger("unselecting", t, { unselecting: s.element }));
            }),
            e(t.target)
              .parents()
              .andSelf()
              .each(function () {
                var s = e.data(this, "selectable-item");
                if (s) {
                  var n = !t.metaKey || !s.$element.hasClass("ui-selected");
                  return (
                    s.$element
                      .removeClass(n ? "ui-unselecting" : "ui-selected")
                      .addClass(n ? "ui-selecting" : "ui-unselecting"),
                    (s.unselecting = !n),
                    (s.selecting = n),
                    (s.selected = n)
                      ? i._trigger("selecting", t, { selecting: s.element })
                      : i._trigger("unselecting", t, {
                          unselecting: s.element,
                        }),
                    !1
                  );
                }
              });
        }
      },
      _mouseDrag: function (t) {
        var i = this;
        if (((this.dragged = !0), !this.options.disabled)) {
          var s = this.options,
            n = this.opos[0],
            o = this.opos[1],
            a = t.pageX,
            r = t.pageY;
          if (n > a) {
            var l = a;
            (a = n), (n = l);
          }
          return (
            o > r && ((l = r), (r = o), (o = l)),
            this.helper.css({ left: n, top: o, width: a - n, height: r - o }),
            this.selectees.each(function () {
              var l = e.data(this, "selectable-item");
              if (l && l.element != i.element[0]) {
                var h = !1;
                "touch" == s.tolerance
                  ? (h = !(
                      l.left > a ||
                      l.right < n ||
                      l.top > r ||
                      l.bottom < o
                    ))
                  : "fit" == s.tolerance &&
                    (h =
                      l.left > n && l.right < a && l.top > o && l.bottom < r),
                  h
                    ? (l.selected &&
                        (l.$element.removeClass("ui-selected"),
                        (l.selected = !1)),
                      l.unselecting &&
                        (l.$element.removeClass("ui-unselecting"),
                        (l.unselecting = !1)),
                      l.selecting ||
                        (l.$element.addClass("ui-selecting"),
                        (l.selecting = !0),
                        i._trigger("selecting", t, { selecting: l.element })))
                    : (l.selecting &&
                        (t.metaKey && l.startselected
                          ? (l.$element.removeClass("ui-selecting"),
                            (l.selecting = !1),
                            l.$element.addClass("ui-selected"),
                            (l.selected = !0))
                          : (l.$element.removeClass("ui-selecting"),
                            (l.selecting = !1),
                            l.startselected &&
                              (l.$element.addClass("ui-unselecting"),
                              (l.unselecting = !0)),
                            i._trigger("unselecting", t, {
                              unselecting: l.element,
                            }))),
                      l.selected &&
                        (t.metaKey ||
                          l.startselected ||
                          (l.$element.removeClass("ui-selected"),
                          (l.selected = !1),
                          l.$element.addClass("ui-unselecting"),
                          (l.unselecting = !0),
                          i._trigger("unselecting", t, {
                            unselecting: l.element,
                          }))));
              }
            }),
            !1
          );
        }
      },
      _mouseStop: function (t) {
        var i = this;
        return (
          (this.dragged = !1),
          e(".ui-unselecting", this.element[0]).each(function () {
            var s = e.data(this, "selectable-item");
            s.$element.removeClass("ui-unselecting"),
              (s.unselecting = !1),
              (s.startselected = !1),
              i._trigger("unselected", t, { unselected: s.element });
          }),
          e(".ui-selecting", this.element[0]).each(function () {
            var s = e.data(this, "selectable-item");
            s.$element.removeClass("ui-selecting").addClass("ui-selected"),
              (s.selecting = !1),
              (s.selected = !0),
              (s.startselected = !0),
              i._trigger("selected", t, { selected: s.element });
          }),
          this._trigger("stop", t),
          this.helper.remove(),
          !1
        );
      },
    }),
      e.extend(e.ui.selectable, { version: "1.8.9" });
  })(jQuery),
  (function (e) {
    e.widget("ui.sortable", e.ui.mouse, {
      widgetEventPrefix: "sort",
      options: {
        appendTo: "parent",
        axis: !1,
        connectWith: !1,
        containment: !1,
        cursor: "auto",
        cursorAt: !1,
        dropOnEmpty: !0,
        forcePlaceholderSize: !1,
        forceHelperSize: !1,
        grid: !1,
        handle: !1,
        helper: "original",
        items: "> *",
        opacity: !1,
        placeholder: !1,
        revert: !1,
        scroll: !0,
        scrollSensitivity: 20,
        scrollSpeed: 20,
        scope: "default",
        tolerance: "intersect",
        zIndex: 1e3,
      },
      _create: function () {
        (this.containerCache = {}),
          this.element.addClass("ui-sortable"),
          this.refresh(),
          (this.floating =
            !!this.items.length &&
            /left|right/.test(this.items[0].item.css("float"))),
          (this.offset = this.element.offset()),
          this._mouseInit();
      },
      destroy: function () {
        this.element
          .removeClass("ui-sortable ui-sortable-disabled")
          .removeData("sortable")
          .unbind(".sortable"),
          this._mouseDestroy();
        for (var e = this.items.length - 1; e >= 0; e--)
          this.items[e].item.removeData("sortable-item");
        return this;
      },
      _setOption: function (t, i) {
        "disabled" === t
          ? ((this.options[t] = i),
            this.widget()[i ? "addClass" : "removeClass"](
              "ui-sortable-disabled"
            ))
          : e.Widget.prototype._setOption.apply(this, arguments);
      },
      _mouseCapture: function (t, i) {
        if (this.reverting) return !1;
        if (this.options.disabled || "static" == this.options.type) return !1;
        this._refreshItems(t);
        var s = null,
          n = this;
        if (
          (e(t.target)
            .parents()
            .each(function () {
              if (e.data(this, "sortable-item") == n) return (s = e(this)), !1;
            }),
          e.data(t.target, "sortable-item") == n && (s = e(t.target)),
          !s)
        )
          return !1;
        if (this.options.handle && !i) {
          var o = !1;
          if (
            (e(this.options.handle, s)
              .find("*")
              .andSelf()
              .each(function () {
                this == t.target && (o = !0);
              }),
            !o)
          )
            return !1;
        }
        return (this.currentItem = s), this._removeCurrentsFromItems(), !0;
      },
      _mouseStart: function (t, i, s) {
        i = this.options;
        if (
          ((this.currentContainer = this),
          this.refreshPositions(),
          (this.helper = this._createHelper(t)),
          this._cacheHelperProportions(),
          this._cacheMargins(),
          (this.scrollParent = this.helper.scrollParent()),
          (this.offset = this.currentItem.offset()),
          (this.offset = {
            top: this.offset.top - this.margins.top,
            left: this.offset.left - this.margins.left,
          }),
          this.helper.css("position", "absolute"),
          (this.cssPosition = this.helper.css("position")),
          e.extend(this.offset, {
            click: {
              left: t.pageX - this.offset.left,
              top: t.pageY - this.offset.top,
            },
            parent: this._getParentOffset(),
            relative: this._getRelativeOffset(),
          }),
          (this.originalPosition = this._generatePosition(t)),
          (this.originalPageX = t.pageX),
          (this.originalPageY = t.pageY),
          i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
          (this.domPosition = {
            prev: this.currentItem.prev()[0],
            parent: this.currentItem.parent()[0],
          }),
          this.helper[0] != this.currentItem[0] && this.currentItem.hide(),
          this._createPlaceholder(),
          i.containment && this._setContainment(),
          i.cursor &&
            (e("body").css("cursor") &&
              (this._storedCursor = e("body").css("cursor")),
            e("body").css("cursor", i.cursor)),
          i.opacity &&
            (this.helper.css("opacity") &&
              (this._storedOpacity = this.helper.css("opacity")),
            this.helper.css("opacity", i.opacity)),
          i.zIndex &&
            (this.helper.css("zIndex") &&
              (this._storedZIndex = this.helper.css("zIndex")),
            this.helper.css("zIndex", i.zIndex)),
          this.scrollParent[0] != document &&
            "HTML" != this.scrollParent[0].tagName &&
            (this.overflowOffset = this.scrollParent.offset()),
          this._trigger("start", t, this._uiHash()),
          this._preserveHelperProportions || this._cacheHelperProportions(),
          !s)
        )
          for (s = this.containers.length - 1; s >= 0; s--)
            this.containers[s]._trigger("activate", t, this._uiHash(this));
        return (
          e.ui.ddmanager && (e.ui.ddmanager.current = this),
          e.ui.ddmanager &&
            !i.dropBehaviour &&
            e.ui.ddmanager.prepareOffsets(this, t),
          (this.dragging = !0),
          this.helper.addClass("ui-sortable-helper"),
          this._mouseDrag(t),
          !0
        );
      },
      _mouseDrag: function (t) {
        if (
          ((this.position = this._generatePosition(t)),
          (this.positionAbs = this._convertPositionTo("absolute")),
          this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs),
          this.options.scroll)
        ) {
          var i = this.options,
            s = !1;
          this.scrollParent[0] != document &&
          "HTML" != this.scrollParent[0].tagName
            ? (this.overflowOffset.top +
                this.scrollParent[0].offsetHeight -
                t.pageY <
              i.scrollSensitivity
                ? (this.scrollParent[0].scrollTop = s =
                    this.scrollParent[0].scrollTop + i.scrollSpeed)
                : t.pageY - this.overflowOffset.top < i.scrollSensitivity &&
                  (this.scrollParent[0].scrollTop = s =
                    this.scrollParent[0].scrollTop - i.scrollSpeed),
              this.overflowOffset.left +
                this.scrollParent[0].offsetWidth -
                t.pageX <
              i.scrollSensitivity
                ? (this.scrollParent[0].scrollLeft = s =
                    this.scrollParent[0].scrollLeft + i.scrollSpeed)
                : t.pageX - this.overflowOffset.left < i.scrollSensitivity &&
                  (this.scrollParent[0].scrollLeft = s =
                    this.scrollParent[0].scrollLeft - i.scrollSpeed))
            : (t.pageY - e(document).scrollTop() < i.scrollSensitivity
                ? (s = e(document).scrollTop(
                    e(document).scrollTop() - i.scrollSpeed
                  ))
                : e(window).height() - (t.pageY - e(document).scrollTop()) <
                    i.scrollSensitivity &&
                  (s = e(document).scrollTop(
                    e(document).scrollTop() + i.scrollSpeed
                  )),
              t.pageX - e(document).scrollLeft() < i.scrollSensitivity
                ? (s = e(document).scrollLeft(
                    e(document).scrollLeft() - i.scrollSpeed
                  ))
                : e(window).width() - (t.pageX - e(document).scrollLeft()) <
                    i.scrollSensitivity &&
                  (s = e(document).scrollLeft(
                    e(document).scrollLeft() + i.scrollSpeed
                  ))),
            !1 !== s &&
              e.ui.ddmanager &&
              !i.dropBehaviour &&
              e.ui.ddmanager.prepareOffsets(this, t);
        }
        for (
          this.positionAbs = this._convertPositionTo("absolute"),
            (this.options.axis && "y" == this.options.axis) ||
              (this.helper[0].style.left = this.position.left + "px"),
            (this.options.axis && "x" == this.options.axis) ||
              (this.helper[0].style.top = this.position.top + "px"),
            i = this.items.length - 1;
          i >= 0;
          i--
        ) {
          var n = (s = this.items[i]).item[0],
            o = this._intersectsWithPointer(s);
          if (
            o &&
            !(
              n == this.currentItem[0] ||
              this.placeholder[1 == o ? "next" : "prev"]()[0] == n ||
              e.ui.contains(this.placeholder[0], n) ||
              ("semi-dynamic" == this.options.type &&
                e.ui.contains(this.element[0], n))
            )
          ) {
            if (
              ((this.direction = 1 == o ? "down" : "up"),
              "pointer" != this.options.tolerance &&
                !this._intersectsWithSides(s))
            )
              break;
            this._rearrange(t, s), this._trigger("change", t, this._uiHash());
            break;
          }
        }
        return (
          this._contactContainers(t),
          e.ui.ddmanager && e.ui.ddmanager.drag(this, t),
          this._trigger("sort", t, this._uiHash()),
          (this.lastPositionAbs = this.positionAbs),
          !1
        );
      },
      _mouseStop: function (t, i) {
        if (t) {
          if (
            (e.ui.ddmanager &&
              !this.options.dropBehaviour &&
              e.ui.ddmanager.drop(this, t),
            this.options.revert)
          ) {
            var s = this;
            (i = s.placeholder.offset()),
              (s.reverting = !0),
              e(this.helper).animate(
                {
                  left:
                    i.left -
                    this.offset.parent.left -
                    s.margins.left +
                    (this.offsetParent[0] == document.body
                      ? 0
                      : this.offsetParent[0].scrollLeft),
                  top:
                    i.top -
                    this.offset.parent.top -
                    s.margins.top +
                    (this.offsetParent[0] == document.body
                      ? 0
                      : this.offsetParent[0].scrollTop),
                },
                parseInt(this.options.revert, 10) || 500,
                function () {
                  s._clear(t);
                }
              );
          } else this._clear(t, i);
          return !1;
        }
      },
      cancel: function () {
        if (this.dragging) {
          this._mouseUp({ target: null }),
            "original" == this.options.helper
              ? this.currentItem
                  .css(this._storedCSS)
                  .removeClass("ui-sortable-helper")
              : this.currentItem.show();
          for (var t = this.containers.length - 1; t >= 0; t--)
            this.containers[t]._trigger("deactivate", null, this._uiHash(this)),
              this.containers[t].containerCache.over &&
                (this.containers[t]._trigger("out", null, this._uiHash(this)),
                (this.containers[t].containerCache.over = 0));
        }
        return (
          this.placeholder &&
            (this.placeholder[0].parentNode &&
              this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            "original" != this.options.helper &&
              this.helper &&
              this.helper[0].parentNode &&
              this.helper.remove(),
            e.extend(this, {
              helper: null,
              dragging: !1,
              reverting: !1,
              _noFinalSort: null,
            }),
            this.domPosition.prev
              ? e(this.domPosition.prev).after(this.currentItem)
              : e(this.domPosition.parent).prepend(this.currentItem)),
          this
        );
      },
      serialize: function (t) {
        var i = this._getItemsAsjQuery(t && t.connected),
          s = [];
        return (
          (t = t || {}),
          e(i).each(function () {
            var i = (e(t.item || this).attr(t.attribute || "id") || "").match(
              t.expression || /(.+)[-=_](.+)/
            );
            i &&
              s.push(
                (t.key || i[1] + "[]") +
                  "=" +
                  (t.key && t.expression ? i[1] : i[2])
              );
          }),
          !s.length && t.key && s.push(t.key + "="),
          s.join("&")
        );
      },
      toArray: function (t) {
        var i = this._getItemsAsjQuery(t && t.connected),
          s = [];
        return (
          (t = t || {}),
          i.each(function () {
            s.push(e(t.item || this).attr(t.attribute || "id") || "");
          }),
          s
        );
      },
      _intersectsWith: function (e) {
        var t = this.positionAbs.left,
          i = t + this.helperProportions.width,
          s = this.positionAbs.top,
          n = s + this.helperProportions.height,
          o = e.left,
          a = o + e.width,
          r = e.top,
          l = r + e.height,
          h = this.offset.click.top,
          c = this.offset.click.left;
        return (
          (h = s + h > r && s + h < l && t + c > o && t + c < a),
          "pointer" == this.options.tolerance ||
          this.options.forcePointerForContainers ||
          ("pointer" != this.options.tolerance &&
            this.helperProportions[this.floating ? "width" : "height"] >
              e[this.floating ? "width" : "height"])
            ? h
            : o < t + this.helperProportions.width / 2 &&
              i - this.helperProportions.width / 2 < a &&
              r < s + this.helperProportions.height / 2 &&
              n - this.helperProportions.height / 2 < l
        );
      },
      _intersectsWithPointer: function (t) {
        var i = e.ui.isOverAxis(
          this.positionAbs.top + this.offset.click.top,
          t.top,
          t.height
        );
        (t = e.ui.isOverAxis(
          this.positionAbs.left + this.offset.click.left,
          t.left,
          t.width
        )),
          (i = i && t),
          (t = this._getDragVerticalDirection());
        var s = this._getDragHorizontalDirection();
        return (
          !!i &&
          (this.floating
            ? (s && "right" == s) || "down" == t
              ? 2
              : 1
            : t && ("down" == t ? 2 : 1))
        );
      },
      _intersectsWithSides: function (t) {
        var i = e.ui.isOverAxis(
          this.positionAbs.top + this.offset.click.top,
          t.top + t.height / 2,
          t.height
        );
        t = e.ui.isOverAxis(
          this.positionAbs.left + this.offset.click.left,
          t.left + t.width / 2,
          t.width
        );
        var s = this._getDragVerticalDirection(),
          n = this._getDragHorizontalDirection();
        return this.floating && n
          ? ("right" == n && t) || ("left" == n && !t)
          : s && (("down" == s && i) || ("up" == s && !i));
      },
      _getDragVerticalDirection: function () {
        var e = this.positionAbs.top - this.lastPositionAbs.top;
        return 0 != e && (e > 0 ? "down" : "up");
      },
      _getDragHorizontalDirection: function () {
        var e = this.positionAbs.left - this.lastPositionAbs.left;
        return 0 != e && (e > 0 ? "right" : "left");
      },
      refresh: function (e) {
        return this._refreshItems(e), this.refreshPositions(), this;
      },
      _connectWith: function () {
        var e = this.options;
        return e.connectWith.constructor == String
          ? [e.connectWith]
          : e.connectWith;
      },
      _getItemsAsjQuery: function (t) {
        var i = [],
          s = [],
          n = this._connectWith();
        if (n && t)
          for (t = n.length - 1; t >= 0; t--)
            for (var o = e(n[t]), a = o.length - 1; a >= 0; a--) {
              var r = e.data(o[a], "sortable");
              r &&
                r != this &&
                !r.options.disabled &&
                s.push([
                  e.isFunction(r.options.items)
                    ? r.options.items.call(r.element)
                    : e(r.options.items, r.element)
                        .not(".ui-sortable-helper")
                        .not(".ui-sortable-placeholder"),
                  r,
                ]);
            }
        for (
          s.push([
            e.isFunction(this.options.items)
              ? this.options.items.call(this.element, null, {
                  options: this.options,
                  item: this.currentItem,
                })
              : e(this.options.items, this.element)
                  .not(".ui-sortable-helper")
                  .not(".ui-sortable-placeholder"),
            this,
          ]),
            t = s.length - 1;
          t >= 0;
          t--
        )
          s[t][0].each(function () {
            i.push(this);
          });
        return e(i);
      },
      _removeCurrentsFromItems: function () {
        for (
          var e = this.currentItem.find(":data(sortable-item)"), t = 0;
          t < this.items.length;
          t++
        )
          for (var i = 0; i < e.length; i++)
            e[i] == this.items[t].item[0] && this.items.splice(t, 1);
      },
      _refreshItems: function (t) {
        (this.items = []), (this.containers = [this]);
        var i = this.items,
          s = [
            [
              e.isFunction(this.options.items)
                ? this.options.items.call(this.element[0], t, {
                    item: this.currentItem,
                  })
                : e(this.options.items, this.element),
              this,
            ],
          ],
          n = this._connectWith();
        if (n)
          for (var o = n.length - 1; o >= 0; o--)
            for (var a = e(n[o]), r = a.length - 1; r >= 0; r--) {
              var l = e.data(a[r], "sortable");
              l &&
                l != this &&
                !l.options.disabled &&
                (s.push([
                  e.isFunction(l.options.items)
                    ? l.options.items.call(l.element[0], t, {
                        item: this.currentItem,
                      })
                    : e(l.options.items, l.element),
                  l,
                ]),
                this.containers.push(l));
            }
        for (o = s.length - 1; o >= 0; o--)
          for (t = s[o][1], r = 0, a = (n = s[o][0]).length; r < a; r++)
            (l = e(n[r])).data("sortable-item", t),
              i.push({
                item: l,
                instance: t,
                width: 0,
                height: 0,
                left: 0,
                top: 0,
              });
      },
      refreshPositions: function (t) {
        this.offsetParent &&
          this.helper &&
          (this.offset.parent = this._getParentOffset());
        for (var i = this.items.length - 1; i >= 0; i--) {
          var s = this.items[i],
            n = this.options.toleranceElement
              ? e(this.options.toleranceElement, s.item)
              : s.item;
          t || ((s.width = n.outerWidth()), (s.height = n.outerHeight())),
            (n = n.offset()),
            (s.left = n.left),
            (s.top = n.top);
        }
        if (this.options.custom && this.options.custom.refreshContainers)
          this.options.custom.refreshContainers.call(this);
        else
          for (i = this.containers.length - 1; i >= 0; i--)
            (n = this.containers[i].element.offset()),
              (this.containers[i].containerCache.left = n.left),
              (this.containers[i].containerCache.top = n.top),
              (this.containers[i].containerCache.width =
                this.containers[i].element.outerWidth()),
              (this.containers[i].containerCache.height =
                this.containers[i].element.outerHeight());
        return this;
      },
      _createPlaceholder: function (t) {
        var i = t || this,
          s = i.options;
        if (!s.placeholder || s.placeholder.constructor == String) {
          var n = s.placeholder;
          s.placeholder = {
            element: function () {
              var t = e(document.createElement(i.currentItem[0].nodeName))
                .addClass(
                  n || i.currentItem[0].className + " ui-sortable-placeholder"
                )
                .removeClass("ui-sortable-helper")[0];
              return n || (t.style.visibility = "hidden"), t;
            },
            update: function (e, t) {
              (n && !s.forcePlaceholderSize) ||
                (t.height() ||
                  t.height(
                    i.currentItem.innerHeight() -
                      parseInt(i.currentItem.css("paddingTop") || 0, 10) -
                      parseInt(i.currentItem.css("paddingBottom") || 0, 10)
                  ),
                t.width() ||
                  t.width(
                    i.currentItem.innerWidth() -
                      parseInt(i.currentItem.css("paddingLeft") || 0, 10) -
                      parseInt(i.currentItem.css("paddingRight") || 0, 10)
                  ));
            },
          };
        }
        (i.placeholder = e(
          s.placeholder.element.call(i.element, i.currentItem)
        )),
          i.currentItem.after(i.placeholder),
          s.placeholder.update(i, i.placeholder);
      },
      _contactContainers: function (t) {
        for (
          var i = null, s = null, n = this.containers.length - 1;
          n >= 0;
          n--
        )
          e.ui.contains(this.currentItem[0], this.containers[n].element[0]) ||
            (this._intersectsWith(this.containers[n].containerCache)
              ? (i &&
                  e.ui.contains(this.containers[n].element[0], i.element[0])) ||
                ((i = this.containers[n]), (s = n))
              : this.containers[n].containerCache.over &&
                (this.containers[n]._trigger("out", t, this._uiHash(this)),
                (this.containers[n].containerCache.over = 0)));
        if (i)
          if (1 === this.containers.length)
            this.containers[s]._trigger("over", t, this._uiHash(this)),
              (this.containers[s].containerCache.over = 1);
          else if (this.currentContainer != this.containers[s]) {
            (i = 1e4), (n = null);
            for (
              var o =
                  this.positionAbs[
                    this.containers[s].floating ? "left" : "top"
                  ],
                a = this.items.length - 1;
              a >= 0;
              a--
            )
              if (
                e.ui.contains(
                  this.containers[s].element[0],
                  this.items[a].item[0]
                )
              ) {
                var r =
                  this.items[a][this.containers[s].floating ? "left" : "top"];
                Math.abs(r - o) < i &&
                  ((i = Math.abs(r - o)), (n = this.items[a]));
              }
            (n || this.options.dropOnEmpty) &&
              ((this.currentContainer = this.containers[s]),
              n
                ? this._rearrange(t, n, null, !0)
                : this._rearrange(t, null, this.containers[s].element, !0),
              this._trigger("change", t, this._uiHash()),
              this.containers[s]._trigger("change", t, this._uiHash(this)),
              this.options.placeholder.update(
                this.currentContainer,
                this.placeholder
              ),
              this.containers[s]._trigger("over", t, this._uiHash(this)),
              (this.containers[s].containerCache.over = 1));
          }
      },
      _createHelper: function (t) {
        var i = this.options;
        return (
          (t = e.isFunction(i.helper)
            ? e(i.helper.apply(this.element[0], [t, this.currentItem]))
            : "clone" == i.helper
            ? this.currentItem.clone()
            : this.currentItem).parents("body").length ||
            e(
              "parent" != i.appendTo
                ? i.appendTo
                : this.currentItem[0].parentNode
            )[0].appendChild(t[0]),
          t[0] == this.currentItem[0] &&
            (this._storedCSS = {
              width: this.currentItem[0].style.width,
              height: this.currentItem[0].style.height,
              position: this.currentItem.css("position"),
              top: this.currentItem.css("top"),
              left: this.currentItem.css("left"),
            }),
          ("" == t[0].style.width || i.forceHelperSize) &&
            t.width(this.currentItem.width()),
          ("" == t[0].style.height || i.forceHelperSize) &&
            t.height(this.currentItem.height()),
          t
        );
      },
      _adjustOffsetFromHelper: function (t) {
        "string" == typeof t && (t = t.split(" ")),
          e.isArray(t) && (t = { left: +t[0], top: +t[1] || 0 }),
          "left" in t && (this.offset.click.left = t.left + this.margins.left),
          "right" in t &&
            (this.offset.click.left =
              this.helperProportions.width - t.right + this.margins.left),
          "top" in t && (this.offset.click.top = t.top + this.margins.top),
          "bottom" in t &&
            (this.offset.click.top =
              this.helperProportions.height - t.bottom + this.margins.top);
      },
      _getParentOffset: function () {
        this.offsetParent = this.helper.offsetParent();
        var t = this.offsetParent.offset();
        return (
          "absolute" == this.cssPosition &&
            this.scrollParent[0] != document &&
            e.ui.contains(this.scrollParent[0], this.offsetParent[0]) &&
            ((t.left += this.scrollParent.scrollLeft()),
            (t.top += this.scrollParent.scrollTop())),
          (this.offsetParent[0] == document.body ||
            (this.offsetParent[0].tagName &&
              "html" == this.offsetParent[0].tagName.toLowerCase() &&
              e.browser.msie)) &&
            (t = { top: 0, left: 0 }),
          {
            top:
              t.top +
              (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
            left:
              t.left +
              (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0),
          }
        );
      },
      _getRelativeOffset: function () {
        if ("relative" == this.cssPosition) {
          var e = this.currentItem.position();
          return {
            top:
              e.top -
              (parseInt(this.helper.css("top"), 10) || 0) +
              this.scrollParent.scrollTop(),
            left:
              e.left -
              (parseInt(this.helper.css("left"), 10) || 0) +
              this.scrollParent.scrollLeft(),
          };
        }
        return { top: 0, left: 0 };
      },
      _cacheMargins: function () {
        this.margins = {
          left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
          top: parseInt(this.currentItem.css("marginTop"), 10) || 0,
        };
      },
      _cacheHelperProportions: function () {
        this.helperProportions = {
          width: this.helper.outerWidth(),
          height: this.helper.outerHeight(),
        };
      },
      _setContainment: function () {
        var t = this.options;
        if (
          ("parent" == t.containment &&
            (t.containment = this.helper[0].parentNode),
          ("document" != t.containment && "window" != t.containment) ||
            (this.containment = [
              0 - this.offset.relative.left - this.offset.parent.left,
              0 - this.offset.relative.top - this.offset.parent.top,
              e("document" == t.containment ? document : window).width() -
                this.helperProportions.width -
                this.margins.left,
              (e("document" == t.containment ? document : window).height() ||
                document.body.parentNode.scrollHeight) -
                this.helperProportions.height -
                this.margins.top,
            ]),
          !/^(document|window|parent)$/.test(t.containment))
        ) {
          var i = e(t.containment)[0];
          t = e(t.containment).offset();
          var s = "hidden" != e(i).css("overflow");
          this.containment = [
            t.left +
              (parseInt(e(i).css("borderLeftWidth"), 10) || 0) +
              (parseInt(e(i).css("paddingLeft"), 10) || 0) -
              this.margins.left,
            t.top +
              (parseInt(e(i).css("borderTopWidth"), 10) || 0) +
              (parseInt(e(i).css("paddingTop"), 10) || 0) -
              this.margins.top,
            t.left +
              (s ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) -
              (parseInt(e(i).css("borderLeftWidth"), 10) || 0) -
              (parseInt(e(i).css("paddingRight"), 10) || 0) -
              this.helperProportions.width -
              this.margins.left,
            t.top +
              (s ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) -
              (parseInt(e(i).css("borderTopWidth"), 10) || 0) -
              (parseInt(e(i).css("paddingBottom"), 10) || 0) -
              this.helperProportions.height -
              this.margins.top,
          ];
        }
      },
      _convertPositionTo: function (t, i) {
        i || (i = this.position), (t = "absolute" == t ? 1 : -1);
        var s =
            "absolute" != this.cssPosition ||
            (this.scrollParent[0] != document &&
              e.ui.contains(this.scrollParent[0], this.offsetParent[0]))
              ? this.scrollParent
              : this.offsetParent,
          n = /(html|body)/i.test(s[0].tagName);
        return {
          top:
            i.top +
            this.offset.relative.top * t +
            this.offset.parent.top * t -
            (e.browser.safari && "fixed" == this.cssPosition
              ? 0
              : ("fixed" == this.cssPosition
                  ? -this.scrollParent.scrollTop()
                  : n
                  ? 0
                  : s.scrollTop()) * t),
          left:
            i.left +
            this.offset.relative.left * t +
            this.offset.parent.left * t -
            (e.browser.safari && "fixed" == this.cssPosition
              ? 0
              : ("fixed" == this.cssPosition
                  ? -this.scrollParent.scrollLeft()
                  : n
                  ? 0
                  : s.scrollLeft()) * t),
        };
      },
      _generatePosition: function (t) {
        var i = this.options,
          s =
            "absolute" != this.cssPosition ||
            (this.scrollParent[0] != document &&
              e.ui.contains(this.scrollParent[0], this.offsetParent[0]))
              ? this.scrollParent
              : this.offsetParent,
          n = /(html|body)/i.test(s[0].tagName);
        "relative" != this.cssPosition ||
          (this.scrollParent[0] != document &&
            this.scrollParent[0] != this.offsetParent[0]) ||
          (this.offset.relative = this._getRelativeOffset());
        var o = t.pageX,
          a = t.pageY;
        return (
          this.originalPosition &&
            (this.containment &&
              (t.pageX - this.offset.click.left < this.containment[0] &&
                (o = this.containment[0] + this.offset.click.left),
              t.pageY - this.offset.click.top < this.containment[1] &&
                (a = this.containment[1] + this.offset.click.top),
              t.pageX - this.offset.click.left > this.containment[2] &&
                (o = this.containment[2] + this.offset.click.left),
              t.pageY - this.offset.click.top > this.containment[3] &&
                (a = this.containment[3] + this.offset.click.top)),
            i.grid &&
              ((a =
                this.originalPageY +
                Math.round((a - this.originalPageY) / i.grid[1]) * i.grid[1]),
              (a =
                this.containment &&
                (a - this.offset.click.top < this.containment[1] ||
                  a - this.offset.click.top > this.containment[3])
                  ? a - this.offset.click.top < this.containment[1]
                    ? a + i.grid[1]
                    : a - i.grid[1]
                  : a),
              (o =
                this.originalPageX +
                Math.round((o - this.originalPageX) / i.grid[0]) * i.grid[0]),
              (o =
                this.containment &&
                (o - this.offset.click.left < this.containment[0] ||
                  o - this.offset.click.left > this.containment[2])
                  ? o - this.offset.click.left < this.containment[0]
                    ? o + i.grid[0]
                    : o - i.grid[0]
                  : o))),
          {
            top:
              a -
              this.offset.click.top -
              this.offset.relative.top -
              this.offset.parent.top +
              (e.browser.safari && "fixed" == this.cssPosition
                ? 0
                : "fixed" == this.cssPosition
                ? -this.scrollParent.scrollTop()
                : n
                ? 0
                : s.scrollTop()),
            left:
              o -
              this.offset.click.left -
              this.offset.relative.left -
              this.offset.parent.left +
              (e.browser.safari && "fixed" == this.cssPosition
                ? 0
                : "fixed" == this.cssPosition
                ? -this.scrollParent.scrollLeft()
                : n
                ? 0
                : s.scrollLeft()),
          }
        );
      },
      _rearrange: function (e, t, i, s) {
        i
          ? i[0].appendChild(this.placeholder[0])
          : t.item[0].parentNode.insertBefore(
              this.placeholder[0],
              "down" == this.direction ? t.item[0] : t.item[0].nextSibling
            ),
          (this.counter = this.counter ? ++this.counter : 1);
        var n = this,
          o = this.counter;
        window.setTimeout(function () {
          o == n.counter && n.refreshPositions(!s);
        }, 0);
      },
      _clear: function (t, i) {
        this.reverting = !1;
        var s = [];
        if (
          (!this._noFinalSort &&
            this.currentItem[0].parentNode &&
            this.placeholder.before(this.currentItem),
          (this._noFinalSort = null),
          this.helper[0] == this.currentItem[0])
        ) {
          for (var n in this._storedCSS)
            ("auto" != this._storedCSS[n] && "static" != this._storedCSS[n]) ||
              (this._storedCSS[n] = "");
          this.currentItem
            .css(this._storedCSS)
            .removeClass("ui-sortable-helper");
        } else this.currentItem.show();
        if (
          (this.fromOutside &&
            !i &&
            s.push(function (e) {
              this._trigger("receive", e, this._uiHash(this.fromOutside));
            }),
          (!this.fromOutside &&
            this.domPosition.prev ==
              this.currentItem.prev().not(".ui-sortable-helper")[0] &&
            this.domPosition.parent == this.currentItem.parent()[0]) ||
            i ||
            s.push(function (e) {
              this._trigger("update", e, this._uiHash());
            }),
          !e.ui.contains(this.element[0], this.currentItem[0]))
        )
          for (
            i ||
              s.push(function (e) {
                this._trigger("remove", e, this._uiHash());
              }),
              n = this.containers.length - 1;
            n >= 0;
            n--
          )
            e.ui.contains(this.containers[n].element[0], this.currentItem[0]) &&
              !i &&
              (s.push(
                function (e) {
                  return function (t) {
                    e._trigger("receive", t, this._uiHash(this));
                  };
                }.call(this, this.containers[n])
              ),
              s.push(
                function (e) {
                  return function (t) {
                    e._trigger("update", t, this._uiHash(this));
                  };
                }.call(this, this.containers[n])
              ));
        for (n = this.containers.length - 1; n >= 0; n--)
          i ||
            s.push(
              function (e) {
                return function (t) {
                  e._trigger("deactivate", t, this._uiHash(this));
                };
              }.call(this, this.containers[n])
            ),
            this.containers[n].containerCache.over &&
              (s.push(
                function (e) {
                  return function (t) {
                    e._trigger("out", t, this._uiHash(this));
                  };
                }.call(this, this.containers[n])
              ),
              (this.containers[n].containerCache.over = 0));
        if (
          (this._storedCursor && e("body").css("cursor", this._storedCursor),
          this._storedOpacity &&
            this.helper.css("opacity", this._storedOpacity),
          this._storedZIndex &&
            this.helper.css(
              "zIndex",
              "auto" == this._storedZIndex ? "" : this._storedZIndex
            ),
          (this.dragging = !1),
          this.cancelHelperRemoval)
        ) {
          if (!i) {
            for (
              this._trigger("beforeStop", t, this._uiHash()), n = 0;
              n < s.length;
              n++
            )
              s[n].call(this, t);
            this._trigger("stop", t, this._uiHash());
          }
          return !1;
        }
        if (
          (i || this._trigger("beforeStop", t, this._uiHash()),
          this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
          this.helper[0] != this.currentItem[0] && this.helper.remove(),
          (this.helper = null),
          !i)
        ) {
          for (n = 0; n < s.length; n++) s[n].call(this, t);
          this._trigger("stop", t, this._uiHash());
        }
        return (this.fromOutside = !1), !0;
      },
      _trigger: function () {
        !1 === e.Widget.prototype._trigger.apply(this, arguments) &&
          this.cancel();
      },
      _uiHash: function (t) {
        var i = t || this;
        return {
          helper: i.helper,
          placeholder: i.placeholder || e([]),
          position: i.position,
          originalPosition: i.originalPosition,
          offset: i.positionAbs,
          item: i.currentItem,
          sender: t ? t.element : null,
        };
      },
    }),
      e.extend(e.ui.sortable, { version: "1.8.9" });
  })(jQuery),
  jQuery.effects ||
    (function (e, t) {
      function i(t) {
        var i;
        return t && t.constructor == Array && 3 == t.length
          ? t
          : (i =
              /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(
                t
              ))
          ? [parseInt(i[1], 10), parseInt(i[2], 10), parseInt(i[3], 10)]
          : (i =
              /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(
                t
              ))
          ? [
              2.55 * parseFloat(i[1]),
              2.55 * parseFloat(i[2]),
              2.55 * parseFloat(i[3]),
            ]
          : (i = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(t))
          ? [parseInt(i[1], 16), parseInt(i[2], 16), parseInt(i[3], 16)]
          : (i = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(t))
          ? [
              parseInt(i[1] + i[1], 16),
              parseInt(i[2] + i[2], 16),
              parseInt(i[3] + i[3], 16),
            ]
          : /rgba\(0, 0, 0, 0\)/.exec(t)
          ? r.transparent
          : r[e.trim(t).toLowerCase()];
      }
      function s() {
        var e,
          t = document.defaultView
            ? document.defaultView.getComputedStyle(this, null)
            : this.currentStyle,
          i = {};
        if (t && t.length && t[0] && t[t[0]])
          for (var s = t.length; s--; )
            "string" == typeof t[(e = t[s])] &&
              (i[
                e.replace(/\-(\w)/g, function (e, t) {
                  return t.toUpperCase();
                })
              ] = t[e]);
        else for (e in t) "string" == typeof t[e] && (i[e] = t[e]);
        return i;
      }
      function n(t) {
        var i, s;
        for (i in t)
          (null == (s = t[i]) ||
            e.isFunction(s) ||
            i in h ||
            /scrollbar/.test(i) ||
            (!/color/i.test(i) && isNaN(parseFloat(s)))) &&
            delete t[i];
        return t;
      }
      function o(t, i, s, n) {
        return (
          "object" == typeof t && ((n = i), (s = null), (t = (i = t).effect)),
          e.isFunction(i) && ((n = i), (s = null), (i = {})),
          ("number" == typeof i || e.fx.speeds[i]) &&
            ((n = s), (s = i), (i = {})),
          e.isFunction(s) && ((n = s), (s = null)),
          (i = i || {}),
          (s = s || i.duration),
          [
            t,
            i,
            (s = e.fx.off
              ? 0
              : "number" == typeof s
              ? s
              : s in e.fx.speeds
              ? e.fx.speeds[s]
              : e.fx.speeds._default),
            (n = n || i.complete),
          ]
        );
      }
      function a(t) {
        return (
          !(t && "number" != typeof t && !e.fx.speeds[t]) ||
          ("string" == typeof t && !e.effects[t])
        );
      }
      (e.effects = {}),
        e.each(
          [
            "backgroundColor",
            "borderBottomColor",
            "borderLeftColor",
            "borderRightColor",
            "borderTopColor",
            "borderColor",
            "color",
            "outlineColor",
          ],
          function (t, s) {
            e.fx.step[s] = function (t) {
              t.colorInit ||
                ((t.start = (function (t, s) {
                  var n;
                  do {
                    if (
                      ("" != (n = e.curCSS(t, s)) && "transparent" != n) ||
                      e.nodeName(t, "body")
                    )
                      break;
                    s = "backgroundColor";
                  } while ((t = t.parentNode));
                  return i(n);
                })(t.elem, s)),
                (t.end = i(t.end)),
                (t.colorInit = !0)),
                (t.elem.style[s] =
                  "rgb(" +
                  Math.max(
                    Math.min(
                      parseInt(
                        t.pos * (t.end[0] - t.start[0]) + t.start[0],
                        10
                      ),
                      255
                    ),
                    0
                  ) +
                  "," +
                  Math.max(
                    Math.min(
                      parseInt(
                        t.pos * (t.end[1] - t.start[1]) + t.start[1],
                        10
                      ),
                      255
                    ),
                    0
                  ) +
                  "," +
                  Math.max(
                    Math.min(
                      parseInt(
                        t.pos * (t.end[2] - t.start[2]) + t.start[2],
                        10
                      ),
                      255
                    ),
                    0
                  ) +
                  ")");
            };
          }
        );
      var r = {
          aqua: [0, 255, 255],
          azure: [240, 255, 255],
          beige: [245, 245, 220],
          black: [0, 0, 0],
          blue: [0, 0, 255],
          brown: [165, 42, 42],
          cyan: [0, 255, 255],
          darkblue: [0, 0, 139],
          darkcyan: [0, 139, 139],
          darkgrey: [169, 169, 169],
          darkgreen: [0, 100, 0],
          darkkhaki: [189, 183, 107],
          darkmagenta: [139, 0, 139],
          darkolivegreen: [85, 107, 47],
          darkorange: [255, 140, 0],
          darkorchid: [153, 50, 204],
          darkred: [139, 0, 0],
          darksalmon: [233, 150, 122],
          darkviolet: [148, 0, 211],
          fuchsia: [255, 0, 255],
          gold: [255, 215, 0],
          green: [0, 128, 0],
          indigo: [75, 0, 130],
          khaki: [240, 230, 140],
          lightblue: [173, 216, 230],
          lightcyan: [224, 255, 255],
          lightgreen: [144, 238, 144],
          lightgrey: [211, 211, 211],
          lightpink: [255, 182, 193],
          lightyellow: [255, 255, 224],
          lime: [0, 255, 0],
          magenta: [255, 0, 255],
          maroon: [128, 0, 0],
          navy: [0, 0, 128],
          olive: [128, 128, 0],
          orange: [255, 165, 0],
          pink: [255, 192, 203],
          purple: [128, 0, 128],
          violet: [128, 0, 128],
          red: [255, 0, 0],
          silver: [192, 192, 192],
          white: [255, 255, 255],
          yellow: [255, 255, 0],
          transparent: [255, 255, 255],
        },
        l = ["add", "remove", "toggle"],
        h = {
          border: 1,
          borderBottom: 1,
          borderColor: 1,
          borderLeft: 1,
          borderRight: 1,
          borderTop: 1,
          borderWidth: 1,
          margin: 1,
          padding: 1,
        };
      (e.effects.animateClass = function (t, i, o, a) {
        return (
          e.isFunction(o) && ((a = o), (o = null)),
          this.queue("fx", function () {
            var r,
              h = e(this),
              c = h.attr("style") || " ",
              u = n(s.call(this)),
              d = h.attr("className");
            e.each(l, function (e, i) {
              t[i] && h[i + "Class"](t[i]);
            }),
              (r = n(s.call(this))),
              h.attr("className", d),
              h.animate(
                (function (e, t) {
                  var i,
                    s = { _: 0 };
                  for (i in t) e[i] != t[i] && (s[i] = t[i]);
                  return s;
                })(u, r),
                i,
                o,
                function () {
                  e.each(l, function (e, i) {
                    t[i] && h[i + "Class"](t[i]);
                  }),
                    "object" == typeof h.attr("style")
                      ? ((h.attr("style").cssText = ""),
                        (h.attr("style").cssText = c))
                      : h.attr("style", c),
                    a && a.apply(this, arguments);
                }
              ),
              (r = (u = e.queue(this)).splice(u.length - 1, 1)[0]),
              u.splice(1, 0, r),
              e.dequeue(this);
          })
        );
      }),
        e.fn.extend({
          _addClass: e.fn.addClass,
          addClass: function (t, i, s, n) {
            return i
              ? e.effects.animateClass.apply(this, [{ add: t }, i, s, n])
              : this._addClass(t);
          },
          _removeClass: e.fn.removeClass,
          removeClass: function (t, i, s, n) {
            return i
              ? e.effects.animateClass.apply(this, [{ remove: t }, i, s, n])
              : this._removeClass(t);
          },
          _toggleClass: e.fn.toggleClass,
          toggleClass: function (i, s, n, o, a) {
            return "boolean" == typeof s || s === t
              ? n
                ? e.effects.animateClass.apply(this, [
                    s ? { add: i } : { remove: i },
                    n,
                    o,
                    a,
                  ])
                : this._toggleClass(i, s)
              : e.effects.animateClass.apply(this, [{ toggle: i }, s, n, o]);
          },
          switchClass: function (t, i, s, n, o) {
            return e.effects.animateClass.apply(this, [
              { add: i, remove: t },
              s,
              n,
              o,
            ]);
          },
        }),
        e.extend(e.effects, {
          version: "1.8.9",
          save: function (e, t) {
            for (var i = 0; i < t.length; i++)
              null !== t[i] && e.data("ec.storage." + t[i], e[0].style[t[i]]);
          },
          restore: function (e, t) {
            for (var i = 0; i < t.length; i++)
              null !== t[i] && e.css(t[i], e.data("ec.storage." + t[i]));
          },
          setMode: function (e, t) {
            return "toggle" == t && (t = e.is(":hidden") ? "show" : "hide"), t;
          },
          getBaseline: function (e, t) {
            var i;
            switch (e[0]) {
              case "top":
                i = 0;
                break;
              case "middle":
                i = 0.5;
                break;
              case "bottom":
                i = 1;
                break;
              default:
                i = e[0] / t.height;
            }
            switch (e[1]) {
              case "left":
                e = 0;
                break;
              case "center":
                e = 0.5;
                break;
              case "right":
                e = 1;
                break;
              default:
                e = e[1] / t.width;
            }
            return { x: e, y: i };
          },
          createWrapper: function (t) {
            if (t.parent().is(".ui-effects-wrapper")) return t.parent();
            var i = {
                width: t.outerWidth(!0),
                height: t.outerHeight(!0),
                float: t.css("float"),
              },
              s = e("<div></div>").addClass("ui-effects-wrapper").css({
                fontSize: "100%",
                background: "transparent",
                border: "none",
                margin: 0,
                padding: 0,
              });
            return (
              t.wrap(s),
              (s = t.parent()),
              "static" == t.css("position")
                ? (s.css({ position: "relative" }),
                  t.css({ position: "relative" }))
                : (e.extend(i, {
                    position: t.css("position"),
                    zIndex: t.css("z-index"),
                  }),
                  e.each(["top", "left", "bottom", "right"], function (e, s) {
                    (i[s] = t.css(s)),
                      isNaN(parseInt(i[s], 10)) && (i[s] = "auto");
                  }),
                  t.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto",
                  })),
              s.css(i).show()
            );
          },
          removeWrapper: function (e) {
            return e.parent().is(".ui-effects-wrapper")
              ? e.parent().replaceWith(e)
              : e;
          },
          setTransition: function (t, i, s, n) {
            return (
              (n = n || {}),
              e.each(i, function (e, i) {
                (unit = t.cssUnit(i)),
                  unit[0] > 0 && (n[i] = unit[0] * s + unit[1]);
              }),
              n
            );
          },
        }),
        e.fn.extend({
          effect: function (t) {
            var i = o.apply(this, arguments),
              s = { options: i[1], duration: i[2], callback: i[3] };
            i = s.options.mode;
            var n = e.effects[t];
            return e.fx.off || !n
              ? i
                ? this[i](s.duration, s.callback)
                : this.each(function () {
                    s.callback && s.callback.call(this);
                  })
              : n.call(this, s);
          },
          _show: e.fn.show,
          show: function (e) {
            if (a(e)) return this._show.apply(this, arguments);
            var t = o.apply(this, arguments);
            return (t[1].mode = "show"), this.effect.apply(this, t);
          },
          _hide: e.fn.hide,
          hide: function (e) {
            if (a(e)) return this._hide.apply(this, arguments);
            var t = o.apply(this, arguments);
            return (t[1].mode = "hide"), this.effect.apply(this, t);
          },
          __toggle: e.fn.toggle,
          toggle: function (t) {
            if (a(t) || "boolean" == typeof t || e.isFunction(t))
              return this.__toggle.apply(this, arguments);
            var i = o.apply(this, arguments);
            return (i[1].mode = "toggle"), this.effect.apply(this, i);
          },
          cssUnit: function (t) {
            var i = this.css(t),
              s = [];
            return (
              e.each(["em", "px", "%", "pt"], function (e, t) {
                i.indexOf(t) > 0 && (s = [parseFloat(i), t]);
              }),
              s
            );
          },
        }),
        (e.easing.jswing = e.easing.swing),
        e.extend(e.easing, {
          def: "easeOutQuad",
          swing: function (t, i, s, n, o) {
            return e.easing[e.easing.def](t, i, s, n, o);
          },
          easeInQuad: function (e, t, i, s, n) {
            return s * (t /= n) * t + i;
          },
          easeOutQuad: function (e, t, i, s, n) {
            return -s * (t /= n) * (t - 2) + i;
          },
          easeInOutQuad: function (e, t, i, s, n) {
            return (t /= n / 2) < 1
              ? (s / 2) * t * t + i
              : (-s / 2) * (--t * (t - 2) - 1) + i;
          },
          easeInCubic: function (e, t, i, s, n) {
            return s * (t /= n) * t * t + i;
          },
          easeOutCubic: function (e, t, i, s, n) {
            return s * ((t = t / n - 1) * t * t + 1) + i;
          },
          easeInOutCubic: function (e, t, i, s, n) {
            return (t /= n / 2) < 1
              ? (s / 2) * t * t * t + i
              : (s / 2) * ((t -= 2) * t * t + 2) + i;
          },
          easeInQuart: function (e, t, i, s, n) {
            return s * (t /= n) * t * t * t + i;
          },
          easeOutQuart: function (e, t, i, s, n) {
            return -s * ((t = t / n - 1) * t * t * t - 1) + i;
          },
          easeInOutQuart: function (e, t, i, s, n) {
            return (t /= n / 2) < 1
              ? (s / 2) * t * t * t * t + i
              : (-s / 2) * ((t -= 2) * t * t * t - 2) + i;
          },
          easeInQuint: function (e, t, i, s, n) {
            return s * (t /= n) * t * t * t * t + i;
          },
          easeOutQuint: function (e, t, i, s, n) {
            return s * ((t = t / n - 1) * t * t * t * t + 1) + i;
          },
          easeInOutQuint: function (e, t, i, s, n) {
            return (t /= n / 2) < 1
              ? (s / 2) * t * t * t * t * t + i
              : (s / 2) * ((t -= 2) * t * t * t * t + 2) + i;
          },
          easeInSine: function (e, t, i, s, n) {
            return -s * Math.cos((t / n) * (Math.PI / 2)) + s + i;
          },
          easeOutSine: function (e, t, i, s, n) {
            return s * Math.sin((t / n) * (Math.PI / 2)) + i;
          },
          easeInOutSine: function (e, t, i, s, n) {
            return (-s / 2) * (Math.cos((Math.PI * t) / n) - 1) + i;
          },
          easeInExpo: function (e, t, i, s, n) {
            return 0 == t ? i : s * Math.pow(2, 10 * (t / n - 1)) + i;
          },
          easeOutExpo: function (e, t, i, s, n) {
            return t == n ? i + s : s * (1 - Math.pow(2, (-10 * t) / n)) + i;
          },
          easeInOutExpo: function (e, t, i, s, n) {
            return 0 == t
              ? i
              : t == n
              ? i + s
              : (t /= n / 2) < 1
              ? (s / 2) * Math.pow(2, 10 * (t - 1)) + i
              : (s / 2) * (2 - Math.pow(2, -10 * --t)) + i;
          },
          easeInCirc: function (e, t, i, s, n) {
            return -s * (Math.sqrt(1 - (t /= n) * t) - 1) + i;
          },
          easeOutCirc: function (e, t, i, s, n) {
            return s * Math.sqrt(1 - (t = t / n - 1) * t) + i;
          },
          easeInOutCirc: function (e, t, i, s, n) {
            return (t /= n / 2) < 1
              ? (-s / 2) * (Math.sqrt(1 - t * t) - 1) + i
              : (s / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + i;
          },
          easeInElastic: function (e, t, i, s, n) {
            e = 1.70158;
            var o = 0,
              a = s;
            return 0 == t
              ? i
              : 1 == (t /= n)
              ? i + s
              : (o || (o = 0.3 * n),
                a < Math.abs(s)
                  ? ((a = s), (e = o / 4))
                  : (e = (o / (2 * Math.PI)) * Math.asin(s / a)),
                -a *
                  Math.pow(2, 10 * (t -= 1)) *
                  Math.sin((2 * (t * n - e) * Math.PI) / o) +
                  i);
          },
          easeOutElastic: function (e, t, i, s, n) {
            e = 1.70158;
            var o = 0,
              a = s;
            return 0 == t
              ? i
              : 1 == (t /= n)
              ? i + s
              : (o || (o = 0.3 * n),
                a < Math.abs(s)
                  ? ((a = s), (e = o / 4))
                  : (e = (o / (2 * Math.PI)) * Math.asin(s / a)),
                a *
                  Math.pow(2, -10 * t) *
                  Math.sin((2 * (t * n - e) * Math.PI) / o) +
                  s +
                  i);
          },
          easeInOutElastic: function (e, t, i, s, n) {
            e = 1.70158;
            var o = 0,
              a = s;
            return 0 == t
              ? i
              : 2 == (t /= n / 2)
              ? i + s
              : (o || (o = 0.3 * n * 1.5),
                a < Math.abs(s)
                  ? ((a = s), (e = o / 4))
                  : (e = (o / (2 * Math.PI)) * Math.asin(s / a)),
                t < 1
                  ? -0.5 *
                      a *
                      Math.pow(2, 10 * (t -= 1)) *
                      Math.sin((2 * (t * n - e) * Math.PI) / o) +
                    i
                  : a *
                      Math.pow(2, -10 * (t -= 1)) *
                      Math.sin((2 * (t * n - e) * Math.PI) / o) *
                      0.5 +
                    s +
                    i);
          },
          easeInBack: function (e, i, s, n, o, a) {
            return (
              a == t && (a = 1.70158), n * (i /= o) * i * ((a + 1) * i - a) + s
            );
          },
          easeOutBack: function (e, i, s, n, o, a) {
            return (
              a == t && (a = 1.70158),
              n * ((i = i / o - 1) * i * ((a + 1) * i + a) + 1) + s
            );
          },
          easeInOutBack: function (e, i, s, n, o, a) {
            return (
              a == t && (a = 1.70158),
              (i /= o / 2) < 1
                ? (n / 2) * i * i * ((1 + (a *= 1.525)) * i - a) + s
                : (n / 2) * ((i -= 2) * i * ((1 + (a *= 1.525)) * i + a) + 2) +
                  s
            );
          },
          easeInBounce: function (t, i, s, n, o) {
            return n - e.easing.easeOutBounce(t, o - i, 0, n, o) + s;
          },
          easeOutBounce: function (e, t, i, s, n) {
            return (t /= n) < 1 / 2.75
              ? 7.5625 * s * t * t + i
              : t < 2 / 2.75
              ? s * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + i
              : t < 2.5 / 2.75
              ? s * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + i
              : s * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + i;
          },
          easeInOutBounce: function (t, i, s, n, o) {
            return i < o / 2
              ? 0.5 * e.easing.easeInBounce(t, 2 * i, 0, n, o) + s
              : 0.5 * e.easing.easeOutBounce(t, 2 * i - o, 0, n, o) +
                  0.5 * n +
                  s;
          },
        });
    })(jQuery),
  (function (e) {
    e.effects.blind = function (t) {
      return this.queue(function () {
        var i = e(this),
          s = ["position", "top", "bottom", "left", "right"],
          n = e.effects.setMode(i, t.options.mode || "hide"),
          o = t.options.direction || "vertical";
        e.effects.save(i, s), i.show();
        var a = e.effects.createWrapper(i).css({ overflow: "hidden" }),
          r = "vertical" == o ? "height" : "width";
        (o = "vertical" == o ? a.height() : a.width()),
          "show" == n && a.css(r, 0);
        var l = {};
        (l[r] = "show" == n ? o : 0),
          a.animate(l, t.duration, t.options.easing, function () {
            "hide" == n && i.hide(),
              e.effects.restore(i, s),
              e.effects.removeWrapper(i),
              t.callback && t.callback.apply(i[0], arguments),
              i.dequeue();
          });
      });
    };
  })(jQuery),
  (function (e) {
    e.effects.bounce = function (t) {
      return this.queue(function () {
        var i = e(this),
          s = ["position", "top", "bottom", "left", "right"],
          n = e.effects.setMode(i, t.options.mode || "effect"),
          o = t.options.direction || "up",
          a = t.options.distance || 20,
          r = t.options.times || 5,
          l = t.duration || 250;
        /show|hide/.test(n) && s.push("opacity"),
          e.effects.save(i, s),
          i.show(),
          e.effects.createWrapper(i);
        var h = "up" == o || "down" == o ? "top" : "left";
        if (
          ((o = "up" == o || "left" == o ? "pos" : "neg"),
          (a =
            t.options.distance ||
            ("top" == h
              ? i.outerHeight({ margin: !0 }) / 3
              : i.outerWidth({ margin: !0 }) / 3)),
          "show" == n && i.css("opacity", 0).css(h, "pos" == o ? -a : a),
          "hide" == n && (a /= 2 * r),
          "hide" != n && r--,
          "show" == n)
        ) {
          var c = { opacity: 1 };
          (c[h] = ("pos" == o ? "+=" : "-=") + a),
            i.animate(c, l / 2, t.options.easing),
            (a /= 2),
            r--;
        }
        for (c = 0; c < r; c++) {
          var u = {},
            d = {};
          (u[h] = ("pos" == o ? "-=" : "+=") + a),
            (d[h] = ("pos" == o ? "+=" : "-=") + a),
            i
              .animate(u, l / 2, t.options.easing)
              .animate(d, l / 2, t.options.easing),
            (a = "hide" == n ? 2 * a : a / 2);
        }
        "hide" == n
          ? (((c = { opacity: 0 })[h] = ("pos" == o ? "-=" : "+=") + a),
            i.animate(c, l / 2, t.options.easing, function () {
              i.hide(),
                e.effects.restore(i, s),
                e.effects.removeWrapper(i),
                t.callback && t.callback.apply(this, arguments);
            }))
          : ((d = {}),
            ((u = {})[h] = ("pos" == o ? "-=" : "+=") + a),
            (d[h] = ("pos" == o ? "+=" : "-=") + a),
            i
              .animate(u, l / 2, t.options.easing)
              .animate(d, l / 2, t.options.easing, function () {
                e.effects.restore(i, s),
                  e.effects.removeWrapper(i),
                  t.callback && t.callback.apply(this, arguments);
              })),
          i.queue("fx", function () {
            i.dequeue();
          }),
          i.dequeue();
      });
    };
  })(jQuery),
  (function (e) {
    e.effects.clip = function (t) {
      return this.queue(function () {
        var i = e(this),
          s = ["position", "top", "bottom", "left", "right", "height", "width"],
          n = e.effects.setMode(i, t.options.mode || "hide"),
          o = t.options.direction || "vertical";
        e.effects.save(i, s), i.show();
        var a = e.effects.createWrapper(i).css({ overflow: "hidden" });
        a = "IMG" == i[0].tagName ? a : i;
        var r = {
          size: "vertical" == o ? "height" : "width",
          position: "vertical" == o ? "top" : "left",
        };
        (o = "vertical" == o ? a.height() : a.width()),
          "show" == n && (a.css(r.size, 0), a.css(r.position, o / 2));
        var l = {};
        (l[r.size] = "show" == n ? o : 0),
          (l[r.position] = "show" == n ? 0 : o / 2),
          a.animate(l, {
            queue: !1,
            duration: t.duration,
            easing: t.options.easing,
            complete: function () {
              "hide" == n && i.hide(),
                e.effects.restore(i, s),
                e.effects.removeWrapper(i),
                t.callback && t.callback.apply(i[0], arguments),
                i.dequeue();
            },
          });
      });
    };
  })(jQuery),
  (function (e) {
    e.effects.drop = function (t) {
      return this.queue(function () {
        var i = e(this),
          s = ["position", "top", "bottom", "left", "right", "opacity"],
          n = e.effects.setMode(i, t.options.mode || "hide"),
          o = t.options.direction || "left";
        e.effects.save(i, s), i.show(), e.effects.createWrapper(i);
        var a = "up" == o || "down" == o ? "top" : "left";
        o = "up" == o || "left" == o ? "pos" : "neg";
        var r =
          t.options.distance ||
          ("top" == a
            ? i.outerHeight({ margin: !0 }) / 2
            : i.outerWidth({ margin: !0 }) / 2);
        "show" == n && i.css("opacity", 0).css(a, "pos" == o ? -r : r);
        var l = { opacity: "show" == n ? 1 : 0 };
        (l[a] =
          ("show" == n
            ? "pos" == o
              ? "+="
              : "-="
            : "pos" == o
            ? "-="
            : "+=") + r),
          i.animate(l, {
            queue: !1,
            duration: t.duration,
            easing: t.options.easing,
            complete: function () {
              "hide" == n && i.hide(),
                e.effects.restore(i, s),
                e.effects.removeWrapper(i),
                t.callback && t.callback.apply(this, arguments),
                i.dequeue();
            },
          });
      });
    };
  })(jQuery),
  (function (e) {
    e.effects.explode = function (t) {
      return this.queue(function () {
        var i = t.options.pieces ? Math.round(Math.sqrt(t.options.pieces)) : 3,
          s = t.options.pieces ? Math.round(Math.sqrt(t.options.pieces)) : 3;
        t.options.mode =
          "toggle" == t.options.mode
            ? e(this).is(":visible")
              ? "hide"
              : "show"
            : t.options.mode;
        var n = e(this).show().css("visibility", "hidden"),
          o = n.offset();
        (o.top -= parseInt(n.css("marginTop"), 10) || 0),
          (o.left -= parseInt(n.css("marginLeft"), 10) || 0);
        for (var a = n.outerWidth(!0), r = n.outerHeight(!0), l = 0; l < i; l++)
          for (var h = 0; h < s; h++)
            n.clone()
              .appendTo("body")
              .wrap("<div></div>")
              .css({
                position: "absolute",
                visibility: "visible",
                left: (a / s) * -h,
                top: (r / i) * -l,
              })
              .parent()
              .addClass("ui-effects-explode")
              .css({
                position: "absolute",
                overflow: "hidden",
                width: a / s,
                height: r / i,
                left:
                  o.left +
                  h * (a / s) +
                  ("show" == t.options.mode
                    ? (h - Math.floor(s / 2)) * (a / s)
                    : 0),
                top:
                  o.top +
                  l * (r / i) +
                  ("show" == t.options.mode
                    ? (l - Math.floor(i / 2)) * (r / i)
                    : 0),
                opacity: "show" == t.options.mode ? 0 : 1,
              })
              .animate(
                {
                  left:
                    o.left +
                    h * (a / s) +
                    ("show" == t.options.mode
                      ? 0
                      : (h - Math.floor(s / 2)) * (a / s)),
                  top:
                    o.top +
                    l * (r / i) +
                    ("show" == t.options.mode
                      ? 0
                      : (l - Math.floor(i / 2)) * (r / i)),
                  opacity: "show" == t.options.mode ? 1 : 0,
                },
                t.duration || 500
              );
        setTimeout(function () {
          "show" == t.options.mode
            ? n.css({ visibility: "visible" })
            : n.css({ visibility: "visible" }).hide(),
            t.callback && t.callback.apply(n[0]),
            n.dequeue(),
            e("div.ui-effects-explode").remove();
        }, t.duration || 500);
      });
    };
  })(jQuery),
  (function (e) {
    e.effects.fade = function (t) {
      return this.queue(function () {
        var i = e(this),
          s = e.effects.setMode(i, t.options.mode || "hide");
        i.animate(
          { opacity: s },
          {
            queue: !1,
            duration: t.duration,
            easing: t.options.easing,
            complete: function () {
              t.callback && t.callback.apply(this, arguments), i.dequeue();
            },
          }
        );
      });
    };
  })(jQuery),
  (function (e) {
    e.effects.fold = function (t) {
      return this.queue(function () {
        var i = e(this),
          s = ["position", "top", "bottom", "left", "right"],
          n = e.effects.setMode(i, t.options.mode || "hide"),
          o = t.options.size || 15,
          a = !!t.options.horizFirst,
          r = t.duration ? t.duration / 2 : e.fx.speeds._default / 2;
        e.effects.save(i, s), i.show();
        var l = e.effects.createWrapper(i).css({ overflow: "hidden" }),
          h = ("show" == n) != a,
          c = h ? ["width", "height"] : ["height", "width"];
        h = h ? [l.width(), l.height()] : [l.height(), l.width()];
        var u = /([0-9]+)%/.exec(o);
        u && (o = (parseInt(u[1], 10) / 100) * h["hide" == n ? 0 : 1]),
          "show" == n &&
            l.css(a ? { height: 0, width: o } : { height: o, width: 0 }),
          (u = {}),
          ((a = {})[c[0]] = "show" == n ? h[0] : o),
          (u[c[1]] = "show" == n ? h[1] : 0),
          l
            .animate(a, r, t.options.easing)
            .animate(u, r, t.options.easing, function () {
              "hide" == n && i.hide(),
                e.effects.restore(i, s),
                e.effects.removeWrapper(i),
                t.callback && t.callback.apply(i[0], arguments),
                i.dequeue();
            });
      });
    };
  })(jQuery),
  (function (e) {
    e.effects.highlight = function (t) {
      return this.queue(function () {
        var i = e(this),
          s = ["backgroundImage", "backgroundColor", "opacity"],
          n = e.effects.setMode(i, t.options.mode || "show"),
          o = { backgroundColor: i.css("backgroundColor") };
        "hide" == n && (o.opacity = 0),
          e.effects.save(i, s),
          i
            .show()
            .css({
              backgroundImage: "none",
              backgroundColor: t.options.color || "#ffff99",
            })
            .animate(o, {
              queue: !1,
              duration: t.duration,
              easing: t.options.easing,
              complete: function () {
                "hide" == n && i.hide(),
                  e.effects.restore(i, s),
                  "show" == n &&
                    !e.support.opacity &&
                    this.style.removeAttribute("filter"),
                  t.callback && t.callback.apply(this, arguments),
                  i.dequeue();
              },
            });
      });
    };
  })(jQuery),
  (function (e) {
    e.effects.pulsate = function (t) {
      return this.queue(function () {
        var i = e(this),
          s = e.effects.setMode(i, t.options.mode || "show");
        for (
          times = 2 * (t.options.times || 5) - 1,
            duration = t.duration ? t.duration / 2 : e.fx.speeds._default / 2,
            isVisible = i.is(":visible"),
            animateTo = 0,
            isVisible || (i.css("opacity", 0).show(), (animateTo = 1)),
            (("hide" == s && isVisible) || ("show" == s && !isVisible)) &&
              times--,
            s = 0;
          s < times;
          s++
        )
          i.animate({ opacity: animateTo }, duration, t.options.easing),
            (animateTo = (animateTo + 1) % 2);
        i.animate(
          { opacity: animateTo },
          duration,
          t.options.easing,
          function () {
            0 == animateTo && i.hide(),
              t.callback && t.callback.apply(this, arguments);
          }
        ),
          i
            .queue("fx", function () {
              i.dequeue();
            })
            .dequeue();
      });
    };
  })(jQuery),
  (function (e) {
    (e.effects.puff = function (t) {
      return this.queue(function () {
        var i = e(this),
          s = e.effects.setMode(i, t.options.mode || "hide"),
          n = parseInt(t.options.percent, 10) || 150,
          o = n / 100,
          a = { height: i.height(), width: i.width() };
        e.extend(t.options, {
          fade: !0,
          mode: s,
          percent: "hide" == s ? n : 100,
          from: "hide" == s ? a : { height: a.height * o, width: a.width * o },
        }),
          i.effect("scale", t.options, t.duration, t.callback),
          i.dequeue();
      });
    }),
      (e.effects.scale = function (t) {
        return this.queue(function () {
          var i = e(this),
            s = e.extend(!0, {}, t.options),
            n = e.effects.setMode(i, t.options.mode || "effect"),
            o =
              parseInt(t.options.percent, 10) ||
              (0 == parseInt(t.options.percent, 10)
                ? 0
                : "hide" == n
                ? 0
                : 100),
            a = t.options.direction || "both",
            r = t.options.origin;
          "effect" != n &&
            ((s.origin = r || ["middle", "center"]), (s.restore = !0)),
            (r = { height: i.height(), width: i.width() }),
            (i.from =
              t.options.from || ("show" == n ? { height: 0, width: 0 } : r)),
            (o = {
              y: "horizontal" != a ? o / 100 : 1,
              x: "vertical" != a ? o / 100 : 1,
            }),
            (i.to = { height: r.height * o.y, width: r.width * o.x }),
            t.options.fade &&
              ("show" == n && ((i.from.opacity = 0), (i.to.opacity = 1)),
              "hide" == n && ((i.from.opacity = 1), (i.to.opacity = 0))),
            (s.from = i.from),
            (s.to = i.to),
            (s.mode = n),
            i.effect("size", s, t.duration, t.callback),
            i.dequeue();
        });
      }),
      (e.effects.size = function (t) {
        return this.queue(function () {
          var i = e(this),
            s = [
              "position",
              "top",
              "bottom",
              "left",
              "right",
              "width",
              "height",
              "overflow",
              "opacity",
            ],
            n = [
              "position",
              "top",
              "bottom",
              "left",
              "right",
              "overflow",
              "opacity",
            ],
            o = ["width", "height", "overflow"],
            a = ["fontSize"],
            r = [
              "borderTopWidth",
              "borderBottomWidth",
              "paddingTop",
              "paddingBottom",
            ],
            l = [
              "borderLeftWidth",
              "borderRightWidth",
              "paddingLeft",
              "paddingRight",
            ],
            h = e.effects.setMode(i, t.options.mode || "effect"),
            c = t.options.restore || !1,
            u = t.options.scale || "both",
            d = t.options.origin,
            p = { height: i.height(), width: i.width() };
          (i.from = t.options.from || p),
            (i.to = t.options.to || p),
            d &&
              ((d = e.effects.getBaseline(d, p)),
              (i.from.top = (p.height - i.from.height) * d.y),
              (i.from.left = (p.width - i.from.width) * d.x),
              (i.to.top = (p.height - i.to.height) * d.y),
              (i.to.left = (p.width - i.to.width) * d.x));
          var f = {
            from: { y: i.from.height / p.height, x: i.from.width / p.width },
            to: { y: i.to.height / p.height, x: i.to.width / p.width },
          };
          ("box" != u && "both" != u) ||
            (f.from.y != f.to.y &&
              ((s = s.concat(r)),
              (i.from = e.effects.setTransition(i, r, f.from.y, i.from)),
              (i.to = e.effects.setTransition(i, r, f.to.y, i.to))),
            f.from.x != f.to.x &&
              ((s = s.concat(l)),
              (i.from = e.effects.setTransition(i, l, f.from.x, i.from)),
              (i.to = e.effects.setTransition(i, l, f.to.x, i.to)))),
            ("content" != u && "both" != u) ||
              (f.from.y != f.to.y &&
                ((s = s.concat(a)),
                (i.from = e.effects.setTransition(i, a, f.from.y, i.from)),
                (i.to = e.effects.setTransition(i, a, f.to.y, i.to)))),
            e.effects.save(i, c ? s : n),
            i.show(),
            e.effects.createWrapper(i),
            i.css("overflow", "hidden").css(i.from),
            ("content" != u && "both" != u) ||
              ((r = r.concat(["marginTop", "marginBottom"]).concat(a)),
              (l = l.concat(["marginLeft", "marginRight"])),
              (o = s.concat(r).concat(l)),
              i.find("*[width]").each(function () {
                (child = e(this)), c && e.effects.save(child, o);
                var i = child.height(),
                  s = child.width();
                (child.from = { height: i * f.from.y, width: s * f.from.x }),
                  (child.to = { height: i * f.to.y, width: s * f.to.x }),
                  f.from.y != f.to.y &&
                    ((child.from = e.effects.setTransition(
                      child,
                      r,
                      f.from.y,
                      child.from
                    )),
                    (child.to = e.effects.setTransition(
                      child,
                      r,
                      f.to.y,
                      child.to
                    ))),
                  f.from.x != f.to.x &&
                    ((child.from = e.effects.setTransition(
                      child,
                      l,
                      f.from.x,
                      child.from
                    )),
                    (child.to = e.effects.setTransition(
                      child,
                      l,
                      f.to.x,
                      child.to
                    ))),
                  child.css(child.from),
                  child.animate(
                    child.to,
                    t.duration,
                    t.options.easing,
                    function () {
                      c && e.effects.restore(child, o);
                    }
                  );
              })),
            i.animate(i.to, {
              queue: !1,
              duration: t.duration,
              easing: t.options.easing,
              complete: function () {
                0 === i.to.opacity && i.css("opacity", i.from.opacity),
                  "hide" == h && i.hide(),
                  e.effects.restore(i, c ? s : n),
                  e.effects.removeWrapper(i),
                  t.callback && t.callback.apply(this, arguments),
                  i.dequeue();
              },
            });
        });
      });
  })(jQuery),
  (function (e) {
    e.effects.shake = function (t) {
      return this.queue(function () {
        var i = e(this),
          s = ["position", "top", "bottom", "left", "right"];
        e.effects.setMode(i, t.options.mode || "effect");
        var n = t.options.direction || "left",
          o = t.options.distance || 20,
          a = t.options.times || 3,
          r = t.duration || t.options.duration || 140;
        e.effects.save(i, s), i.show(), e.effects.createWrapper(i);
        var l = "up" == n || "down" == n ? "top" : "left",
          h = "up" == n || "left" == n ? "pos" : "neg",
          c = {},
          u = {};
        for (
          (n = {})[l] = ("pos" == h ? "-=" : "+=") + o,
            c[l] = ("pos" == h ? "+=" : "-=") + 2 * o,
            u[l] = ("pos" == h ? "-=" : "+=") + 2 * o,
            i.animate(n, r, t.options.easing),
            o = 1;
          o < a;
          o++
        )
          i.animate(c, r, t.options.easing).animate(u, r, t.options.easing);
        i
          .animate(c, r, t.options.easing)
          .animate(n, r / 2, t.options.easing, function () {
            e.effects.restore(i, s),
              e.effects.removeWrapper(i),
              t.callback && t.callback.apply(this, arguments);
          }),
          i.queue("fx", function () {
            i.dequeue();
          }),
          i.dequeue();
      });
    };
  })(jQuery),
  (function (e) {
    e.effects.slide = function (t) {
      return this.queue(function () {
        var i = e(this),
          s = ["position", "top", "bottom", "left", "right"],
          n = e.effects.setMode(i, t.options.mode || "show"),
          o = t.options.direction || "left";
        e.effects.save(i, s),
          i.show(),
          e.effects.createWrapper(i).css({ overflow: "hidden" });
        var a = "up" == o || "down" == o ? "top" : "left";
        o = "up" == o || "left" == o ? "pos" : "neg";
        var r =
          t.options.distance ||
          ("top" == a
            ? i.outerHeight({ margin: !0 })
            : i.outerWidth({ margin: !0 }));
        "show" == n && i.css(a, "pos" == o ? (isNaN(r) ? "-" + r : -r) : r);
        var l = {};
        (l[a] =
          ("show" == n
            ? "pos" == o
              ? "+="
              : "-="
            : "pos" == o
            ? "-="
            : "+=") + r),
          i.animate(l, {
            queue: !1,
            duration: t.duration,
            easing: t.options.easing,
            complete: function () {
              "hide" == n && i.hide(),
                e.effects.restore(i, s),
                e.effects.removeWrapper(i),
                t.callback && t.callback.apply(this, arguments),
                i.dequeue();
            },
          });
      });
    };
  })(jQuery),
  (function (e) {
    e.effects.transfer = function (t) {
      return this.queue(function () {
        var i = e(this),
          s = e(t.options.to),
          n = s.offset();
        (s = {
          top: n.top,
          left: n.left,
          height: s.innerHeight(),
          width: s.innerWidth(),
        }),
          (n = i.offset());
        var o = e('<div class="ui-effects-transfer"></div>')
          .appendTo(document.body)
          .addClass(t.options.className)
          .css({
            top: n.top,
            left: n.left,
            height: i.innerHeight(),
            width: i.innerWidth(),
            position: "absolute",
          })
          .animate(s, t.duration, t.options.easing, function () {
            o.remove(),
              t.callback && t.callback.apply(i[0], arguments),
              i.dequeue();
          });
      });
    };
  })(jQuery),
  (function (e) {
    e.widget("ui.accordion", {
      options: {
        active: 0,
        animated: "slide",
        autoHeight: !0,
        clearStyle: !1,
        collapsible: !1,
        event: "click",
        fillSpace: !1,
        header: "> li > :first-child,> :not(li):even",
        icons: {
          header: "ui-icon-triangle-1-e",
          headerSelected: "ui-icon-triangle-1-s",
        },
        navigation: !1,
        navigationFilter: function () {
          return this.href.toLowerCase() === location.href.toLowerCase();
        },
      },
      _create: function () {
        var t = this,
          i = t.options;
        if (
          ((t.running = 0),
          t.element
            .addClass("ui-accordion ui-widget ui-helper-reset")
            .children("li")
            .addClass("ui-accordion-li-fix"),
          (t.headers = t.element
            .find(i.header)
            .addClass(
              "ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"
            )
            .bind("mouseenter.accordion", function () {
              i.disabled || e(this).addClass("ui-state-hover");
            })
            .bind("mouseleave.accordion", function () {
              i.disabled || e(this).removeClass("ui-state-hover");
            })
            .bind("focus.accordion", function () {
              i.disabled || e(this).addClass("ui-state-focus");
            })
            .bind("blur.accordion", function () {
              i.disabled || e(this).removeClass("ui-state-focus");
            })),
          t.headers
            .next()
            .addClass(
              "ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"
            ),
          i.navigation)
        ) {
          var s = t.element.find("a").filter(i.navigationFilter).eq(0);
          if (s.length) {
            var n = s.closest(".ui-accordion-header");
            t.active = n.length ? n : s.closest(".ui-accordion-content").prev();
          }
        }
        (t.active = t
          ._findActive(t.active || i.active)
          .addClass("ui-state-default ui-state-active")
          .toggleClass("ui-corner-all")
          .toggleClass("ui-corner-top")),
          t.active.next().addClass("ui-accordion-content-active"),
          t._createIcons(),
          t.resize(),
          t.element.attr("role", "tablist"),
          t.headers
            .attr("role", "tab")
            .bind("keydown.accordion", function (e) {
              return t._keydown(e);
            })
            .next()
            .attr("role", "tabpanel"),
          t.headers
            .not(t.active || "")
            .attr({ "aria-expanded": "false", tabIndex: -1 })
            .next()
            .hide(),
          t.active.length
            ? t.active.attr({ "aria-expanded": "true", tabIndex: 0 })
            : t.headers.eq(0).attr("tabIndex", 0),
          e.browser.safari || t.headers.find("a").attr("tabIndex", -1),
          i.event &&
            t.headers.bind(
              i.event.split(" ").join(".accordion ") + ".accordion",
              function (e) {
                t._clickHandler.call(t, e, this), e.preventDefault();
              }
            );
      },
      _createIcons: function () {
        var t = this.options;
        t.icons &&
          (e("<span></span>")
            .addClass("ui-icon " + t.icons.header)
            .prependTo(this.headers),
          this.active
            .children(".ui-icon")
            .toggleClass(t.icons.header)
            .toggleClass(t.icons.headerSelected),
          this.element.addClass("ui-accordion-icons"));
      },
      _destroyIcons: function () {
        this.headers.children(".ui-icon").remove(),
          this.element.removeClass("ui-accordion-icons");
      },
      destroy: function () {
        var t = this.options;
        this.element
          .removeClass("ui-accordion ui-widget ui-helper-reset")
          .removeAttr("role"),
          this.headers
            .unbind(".accordion")
            .removeClass(
              "ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top"
            )
            .removeAttr("role")
            .removeAttr("aria-expanded")
            .removeAttr("tabIndex"),
          this.headers.find("a").removeAttr("tabIndex"),
          this._destroyIcons();
        var i = this.headers
          .next()
          .css("display", "")
          .removeAttr("role")
          .removeClass(
            "ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled"
          );
        return (
          (t.autoHeight || t.fillHeight) && i.css("height", ""),
          e.Widget.prototype.destroy.call(this)
        );
      },
      _setOption: function (t, i) {
        e.Widget.prototype._setOption.apply(this, arguments),
          "active" == t && this.activate(i),
          "icons" == t && (this._destroyIcons(), i && this._createIcons()),
          "disabled" == t &&
            this.headers
              .add(this.headers.next())
              [i ? "addClass" : "removeClass"](
                "ui-accordion-disabled ui-state-disabled"
              );
      },
      _keydown: function (t) {
        if (!(this.options.disabled || t.altKey || t.ctrlKey)) {
          var i = e.ui.keyCode,
            s = this.headers.length,
            n = this.headers.index(t.target),
            o = !1;
          switch (t.keyCode) {
            case i.RIGHT:
            case i.DOWN:
              o = this.headers[(n + 1) % s];
              break;
            case i.LEFT:
            case i.UP:
              o = this.headers[(n - 1 + s) % s];
              break;
            case i.SPACE:
            case i.ENTER:
              this._clickHandler({ target: t.target }, t.target),
                t.preventDefault();
          }
          return (
            !o ||
            (e(t.target).attr("tabIndex", -1),
            e(o).attr("tabIndex", 0),
            o.focus(),
            !1)
          );
        }
      },
      resize: function () {
        var t,
          i = this.options;
        if (i.fillSpace) {
          if (e.browser.msie) {
            var s = this.element.parent().css("overflow");
            this.element.parent().css("overflow", "hidden");
          }
          (t = this.element.parent().height()),
            e.browser.msie && this.element.parent().css("overflow", s),
            this.headers.each(function () {
              t -= e(this).outerHeight(!0);
            }),
            this.headers
              .next()
              .each(function () {
                e(this).height(
                  Math.max(0, t - e(this).innerHeight() + e(this).height())
                );
              })
              .css("overflow", "auto");
        } else
          i.autoHeight &&
            ((t = 0),
            this.headers
              .next()
              .each(function () {
                t = Math.max(t, e(this).height("").height());
              })
              .height(t));
        return this;
      },
      activate: function (e) {
        return (
          (this.options.active = e),
          (e = this._findActive(e)[0]),
          this._clickHandler({ target: e }, e),
          this
        );
      },
      _findActive: function (t) {
        return t
          ? "number" == typeof t
            ? this.headers.filter(":eq(" + t + ")")
            : this.headers.not(this.headers.not(t))
          : !1 === t
          ? e([])
          : this.headers.filter(":eq(0)");
      },
      _clickHandler: function (t, i) {
        var s = this.options;
        if (!s.disabled)
          if (t.target) {
            if (
              ((i = (t = e(t.currentTarget || i))[0] === this.active[0]),
              (s.active = (!s.collapsible || !i) && this.headers.index(t)),
              !(this.running || (!s.collapsible && i)))
            ) {
              var n = this.active;
              (l = t.next()),
                (a = this.active.next()),
                (r = {
                  options: s,
                  newHeader: i && s.collapsible ? e([]) : t,
                  oldHeader: this.active,
                  newContent: i && s.collapsible ? e([]) : l,
                  oldContent: a,
                });
              var o =
                this.headers.index(this.active[0]) > this.headers.index(t[0]);
              (this.active = i ? e([]) : t),
                this._toggle(l, a, r, i, o),
                n
                  .removeClass("ui-state-active ui-corner-top")
                  .addClass("ui-state-default ui-corner-all")
                  .children(".ui-icon")
                  .removeClass(s.icons.headerSelected)
                  .addClass(s.icons.header),
                i ||
                  (t
                    .removeClass("ui-state-default ui-corner-all")
                    .addClass("ui-state-active ui-corner-top")
                    .children(".ui-icon")
                    .removeClass(s.icons.header)
                    .addClass(s.icons.headerSelected),
                  t.next().addClass("ui-accordion-content-active"));
            }
          } else if (s.collapsible) {
            this.active
              .removeClass("ui-state-active ui-corner-top")
              .addClass("ui-state-default ui-corner-all")
              .children(".ui-icon")
              .removeClass(s.icons.headerSelected)
              .addClass(s.icons.header),
              this.active.next().addClass("ui-accordion-content-active");
            var a = this.active.next(),
              r = {
                options: s,
                newHeader: e([]),
                oldHeader: s.active,
                newContent: e([]),
                oldContent: a,
              },
              l = (this.active = e([]));
            this._toggle(l, a, r);
          }
      },
      _toggle: function (t, i, s, n, o) {
        var a = this,
          r = a.options;
        (a.toShow = t), (a.toHide = i), (a.data = s);
        var l = function () {
          if (a) return a._completed.apply(a, arguments);
        };
        if (
          (a._trigger("changestart", null, a.data),
          (a.running = 0 === i.size() ? t.size() : i.size()),
          r.animated)
        ) {
          (s = {}),
            (s =
              r.collapsible && n
                ? {
                    toShow: e([]),
                    toHide: i,
                    complete: l,
                    down: o,
                    autoHeight: r.autoHeight || r.fillSpace,
                  }
                : {
                    toShow: t,
                    toHide: i,
                    complete: l,
                    down: o,
                    autoHeight: r.autoHeight || r.fillSpace,
                  }),
            r.proxied || (r.proxied = r.animated),
            r.proxiedDuration || (r.proxiedDuration = r.duration),
            (r.animated = e.isFunction(r.proxied) ? r.proxied(s) : r.proxied),
            (r.duration = e.isFunction(r.proxiedDuration)
              ? r.proxiedDuration(s)
              : r.proxiedDuration),
            (n = e.ui.accordion.animations);
          var h = r.duration,
            c = r.animated;
          !c || n[c] || e.easing[c] || (c = "slide"),
            n[c] ||
              (n[c] = function (e) {
                this.slide(e, { easing: c, duration: h || 700 });
              }),
            n[c](s);
        } else r.collapsible && n ? t.toggle() : (i.hide(), t.show()), l(!0);
        i.prev().attr({ "aria-expanded": "false", tabIndex: -1 }).blur(),
          t.prev().attr({ "aria-expanded": "true", tabIndex: 0 }).focus();
      },
      _completed: function (e) {
        (this.running = e ? 0 : --this.running),
          this.running ||
            (this.options.clearStyle &&
              this.toShow.add(this.toHide).css({ height: "", overflow: "" }),
            this.toHide.removeClass("ui-accordion-content-active"),
            this.toHide.length &&
              (this.toHide.parent()[0].className =
                this.toHide.parent()[0].className),
            this._trigger("change", null, this.data));
      },
    }),
      e.extend(e.ui.accordion, {
        version: "1.8.9",
        animations: {
          slide: function (t, i) {
            if (
              (t = e.extend(
                { easing: "swing", duration: 300 },
                t,
                i
              )).toHide.size()
            )
              if (t.toShow.size()) {
                var s,
                  n = t.toShow.css("overflow"),
                  o = 0,
                  a = {},
                  r = {};
                (i = t.toShow),
                  (s = i[0].style.width),
                  i.width(
                    parseInt(i.parent().width(), 10) -
                      parseInt(i.css("paddingLeft"), 10) -
                      parseInt(i.css("paddingRight"), 10) -
                      (parseInt(i.css("borderLeftWidth"), 10) || 0) -
                      (parseInt(i.css("borderRightWidth"), 10) || 0)
                  ),
                  e.each(
                    ["height", "paddingTop", "paddingBottom"],
                    function (i, s) {
                      (r[s] = "hide"),
                        (i = ("" + e.css(t.toShow[0], s)).match(
                          /^([\d+-.]+)(.*)$/
                        )),
                        (a[s] = { value: i[1], unit: i[2] || "px" });
                    }
                  ),
                  t.toShow.css({ height: 0, overflow: "hidden" }).show(),
                  t.toHide
                    .filter(":hidden")
                    .each(t.complete)
                    .end()
                    .filter(":visible")
                    .animate(r, {
                      step: function (e, i) {
                        "height" == i.prop &&
                          (o =
                            i.end - i.start == 0
                              ? 0
                              : (i.now - i.start) / (i.end - i.start)),
                          (t.toShow[0].style[i.prop] =
                            o * a[i.prop].value + a[i.prop].unit);
                      },
                      duration: t.duration,
                      easing: t.easing,
                      complete: function () {
                        t.autoHeight || t.toShow.css("height", ""),
                          t.toShow.css({ width: s, overflow: n }),
                          t.complete();
                      },
                    });
              } else
                t.toHide.animate(
                  { height: "hide", paddingTop: "hide", paddingBottom: "hide" },
                  t
                );
            else
              t.toShow.animate(
                { height: "show", paddingTop: "show", paddingBottom: "show" },
                t
              );
          },
          bounceslide: function (e) {
            this.slide(e, {
              easing: e.down ? "easeOutBounce" : "swing",
              duration: e.down ? 1e3 : 200,
            });
          },
        },
      });
  })(jQuery),
  (function (e) {
    e.widget("ui.autocomplete", {
      options: {
        appendTo: "body",
        delay: 300,
        minLength: 1,
        position: { my: "left top", at: "left bottom", collision: "none" },
        source: null,
      },
      pending: 0,
      _create: function () {
        var t,
          i = this,
          s = this.element[0].ownerDocument;
        this.element
          .addClass("ui-autocomplete-input")
          .attr("autocomplete", "off")
          .attr({
            role: "textbox",
            "aria-autocomplete": "list",
            "aria-haspopup": "true",
          })
          .bind("keydown.autocomplete", function (s) {
            if (!i.options.disabled && !i.element.attr("readonly")) {
              t = !1;
              var n = e.ui.keyCode;
              switch (s.keyCode) {
                case n.PAGE_UP:
                  i._move("previousPage", s);
                  break;
                case n.PAGE_DOWN:
                  i._move("nextPage", s);
                  break;
                case n.UP:
                  i._move("previous", s), s.preventDefault();
                  break;
                case n.DOWN:
                  i._move("next", s), s.preventDefault();
                  break;
                case n.ENTER:
                case n.NUMPAD_ENTER:
                  i.menu.active && ((t = !0), s.preventDefault());
                case n.TAB:
                  if (!i.menu.active) return;
                  i.menu.select(s);
                  break;
                case n.ESCAPE:
                  i.element.val(i.term), i.close(s);
                  break;
                default:
                  clearTimeout(i.searching),
                    (i.searching = setTimeout(function () {
                      i.term != i.element.val() &&
                        ((i.selectedItem = null), i.search(null, s));
                    }, i.options.delay));
              }
            }
          })
          .bind("keypress.autocomplete", function (e) {
            t && ((t = !1), e.preventDefault());
          })
          .bind("focus.autocomplete", function () {
            i.options.disabled ||
              ((i.selectedItem = null), (i.previous = i.element.val()));
          })
          .bind("blur.autocomplete", function (e) {
            i.options.disabled ||
              (clearTimeout(i.searching),
              (i.closing = setTimeout(function () {
                i.close(e), i._change(e);
              }, 150)));
          }),
          this._initSource(),
          (this.response = function () {
            return i._response.apply(i, arguments);
          }),
          (this.menu = e("<ul></ul>")
            .addClass("ui-autocomplete")
            .appendTo(e(this.options.appendTo || "body", s)[0])
            .mousedown(function (t) {
              var s = i.menu.element[0];
              e(t.target).closest(".ui-menu-item").length ||
                setTimeout(function () {
                  e(document).one("mousedown", function (t) {
                    t.target !== i.element[0] &&
                      t.target !== s &&
                      !e.ui.contains(s, t.target) &&
                      i.close();
                  });
                }, 1),
                setTimeout(function () {
                  clearTimeout(i.closing);
                }, 13);
            })
            .menu({
              focus: function (e, t) {
                (t = t.item.data("item.autocomplete")),
                  !1 !== i._trigger("focus", e, { item: t }) &&
                    /^key/.test(e.originalEvent.type) &&
                    i.element.val(t.value);
              },
              selected: function (e, t) {
                var n = t.item.data("item.autocomplete"),
                  o = i.previous;
                i.element[0] !== s.activeElement &&
                  (i.element.focus(),
                  (i.previous = o),
                  setTimeout(function () {
                    (i.previous = o), (i.selectedItem = n);
                  }, 1)),
                  !1 !== i._trigger("select", e, { item: n }) &&
                    i.element.val(n.value),
                  (i.term = i.element.val()),
                  i.close(e),
                  (i.selectedItem = n);
              },
              blur: function () {
                i.menu.element.is(":visible") &&
                  i.element.val() !== i.term &&
                  i.element.val(i.term);
              },
            })
            .zIndex(this.element.zIndex() + 1)
            .css({ top: 0, left: 0 })
            .hide()
            .data("menu")),
          e.fn.bgiframe && this.menu.element.bgiframe();
      },
      destroy: function () {
        this.element
          .removeClass("ui-autocomplete-input")
          .removeAttr("autocomplete")
          .removeAttr("role")
          .removeAttr("aria-autocomplete")
          .removeAttr("aria-haspopup"),
          this.menu.element.remove(),
          e.Widget.prototype.destroy.call(this);
      },
      _setOption: function (t, i) {
        e.Widget.prototype._setOption.apply(this, arguments),
          "source" === t && this._initSource(),
          "appendTo" === t &&
            this.menu.element.appendTo(
              e(i || "body", this.element[0].ownerDocument)[0]
            ),
          "disabled" === t && i && this.xhr && this.xhr.abort();
      },
      _initSource: function () {
        var t,
          i,
          s = this;
        e.isArray(this.options.source)
          ? ((t = this.options.source),
            (this.source = function (i, s) {
              s(e.ui.autocomplete.filter(t, i.term));
            }))
          : "string" == typeof this.options.source
          ? ((i = this.options.source),
            (this.source = function (t, n) {
              s.xhr && s.xhr.abort(),
                (s.xhr = e.ajax({
                  url: i,
                  data: t,
                  dataType: "json",
                  success: function (e, t, i) {
                    i === s.xhr && n(e), (s.xhr = null);
                  },
                  error: function (e) {
                    e === s.xhr && n([]), (s.xhr = null);
                  },
                }));
            }))
          : (this.source = this.options.source);
      },
      search: function (e, t) {
        return (
          (e = null != e ? e : this.element.val()),
          (this.term = this.element.val()),
          e.length < this.options.minLength
            ? this.close(t)
            : (clearTimeout(this.closing),
              !1 !== this._trigger("search", t) ? this._search(e) : void 0)
        );
      },
      _search: function (e) {
        this.pending++,
          this.element.addClass("ui-autocomplete-loading"),
          this.source({ term: e }, this.response);
      },
      _response: function (e) {
        !this.options.disabled && e && e.length
          ? ((e = this._normalize(e)), this._suggest(e), this._trigger("open"))
          : this.close(),
          this.pending--,
          this.pending || this.element.removeClass("ui-autocomplete-loading");
      },
      close: function (e) {
        clearTimeout(this.closing),
          this.menu.element.is(":visible") &&
            (this.menu.element.hide(),
            this.menu.deactivate(),
            this._trigger("close", e));
      },
      _change: function (e) {
        this.previous !== this.element.val() &&
          this._trigger("change", e, { item: this.selectedItem });
      },
      _normalize: function (t) {
        return t.length && t[0].label && t[0].value
          ? t
          : e.map(t, function (t) {
              return "string" == typeof t
                ? { label: t, value: t }
                : e.extend(
                    { label: t.label || t.value, value: t.value || t.label },
                    t
                  );
            });
      },
      _suggest: function (t) {
        var i = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
        this._renderMenu(i, t),
          this.menu.deactivate(),
          this.menu.refresh(),
          i.show(),
          this._resizeMenu(),
          i.position(e.extend({ of: this.element }, this.options.position));
      },
      _resizeMenu: function () {
        var e = this.menu.element;
        e.outerWidth(
          Math.max(e.width("").outerWidth(), this.element.outerWidth())
        );
      },
      _renderMenu: function (t, i) {
        var s = this;
        e.each(i, function (e, i) {
          s._renderItem(t, i);
        });
      },
      _renderItem: function (t, i) {
        return e("<li></li>")
          .data("item.autocomplete", i)
          .append(e("<a></a>").text(i.label))
          .appendTo(t);
      },
      _move: function (e, t) {
        this.menu.element.is(":visible")
          ? (this.menu.first() && /^previous/.test(e)) ||
            (this.menu.last() && /^next/.test(e))
            ? (this.element.val(this.term), this.menu.deactivate())
            : this.menu[e](t)
          : this.search(null, t);
      },
      widget: function () {
        return this.menu.element;
      },
    }),
      e.extend(e.ui.autocomplete, {
        escapeRegex: function (e) {
          return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
        },
        filter: function (t, i) {
          var s = new RegExp(e.ui.autocomplete.escapeRegex(i), "i");
          return e.grep(t, function (e) {
            return s.test(e.label || e.value || e);
          });
        },
      });
  })(jQuery),
  (function (e) {
    e.widget("ui.menu", {
      _create: function () {
        var t = this;
        this.element
          .addClass("ui-menu ui-widget ui-widget-content ui-corner-all")
          .attr({
            role: "listbox",
            "aria-activedescendant": "ui-active-menuitem",
          })
          .click(function (i) {
            e(i.target).closest(".ui-menu-item a").length &&
              (i.preventDefault(), t.select(i));
          }),
          this.refresh();
      },
      refresh: function () {
        var t = this;
        this.element
          .children("li:not(.ui-menu-item):has(a)")
          .addClass("ui-menu-item")
          .attr("role", "menuitem")
          .children("a")
          .addClass("ui-corner-all")
          .attr("tabindex", -1)
          .mouseenter(function (i) {
            t.activate(i, e(this).parent());
          })
          .mouseleave(function () {
            t.deactivate();
          });
      },
      activate: function (e, t) {
        if ((this.deactivate(), this.hasScroll())) {
          var i = t.offset().top - this.element.offset().top,
            s = this.element.attr("scrollTop"),
            n = this.element.height();
          i < 0
            ? this.element.attr("scrollTop", s + i)
            : i >= n && this.element.attr("scrollTop", s + i - n + t.height());
        }
        (this.active = t
          .eq(0)
          .children("a")
          .addClass("ui-state-hover")
          .attr("id", "ui-active-menuitem")
          .end()),
          this._trigger("focus", e, { item: t });
      },
      deactivate: function () {
        this.active &&
          (this.active
            .children("a")
            .removeClass("ui-state-hover")
            .removeAttr("id"),
          this._trigger("blur"),
          (this.active = null));
      },
      next: function (e) {
        this.move("next", ".ui-menu-item:first", e);
      },
      previous: function (e) {
        this.move("prev", ".ui-menu-item:last", e);
      },
      first: function () {
        return this.active && !this.active.prevAll(".ui-menu-item").length;
      },
      last: function () {
        return this.active && !this.active.nextAll(".ui-menu-item").length;
      },
      move: function (e, t, i) {
        this.active &&
        (e = this.active[e + "All"](".ui-menu-item").eq(0)).length
          ? this.activate(i, e)
          : this.activate(i, this.element.children(t));
      },
      nextPage: function (t) {
        if (this.hasScroll())
          if (!this.active || this.last())
            this.activate(t, this.element.children(".ui-menu-item:first"));
          else {
            var i = this.active.offset().top,
              s = this.element.height(),
              n = this.element.children(".ui-menu-item").filter(function () {
                var t = e(this).offset().top - i - s + e(this).height();
                return t < 10 && t > -10;
              });
            n.length || (n = this.element.children(".ui-menu-item:last")),
              this.activate(t, n);
          }
        else
          this.activate(
            t,
            this.element
              .children(".ui-menu-item")
              .filter(!this.active || this.last() ? ":first" : ":last")
          );
      },
      previousPage: function (t) {
        if (this.hasScroll())
          if (!this.active || this.first())
            this.activate(t, this.element.children(".ui-menu-item:last"));
          else {
            var i = this.active.offset().top,
              s = this.element.height();
            (result = this.element
              .children(".ui-menu-item")
              .filter(function () {
                var t = e(this).offset().top - i + s - e(this).height();
                return t < 10 && t > -10;
              })),
              result.length ||
                (result = this.element.children(".ui-menu-item:first")),
              this.activate(t, result);
          }
        else
          this.activate(
            t,
            this.element
              .children(".ui-menu-item")
              .filter(!this.active || this.first() ? ":last" : ":first")
          );
      },
      hasScroll: function () {
        return this.element.height() < this.element.attr("scrollHeight");
      },
      select: function (e) {
        this._trigger("selected", e, { item: this.active });
      },
    });
  })(jQuery),
  (function (e) {
    var t,
      i = function (t) {
        e(":ui-button", t.target.form).each(function () {
          var t = e(this).data("button");
          setTimeout(function () {
            t.refresh();
          }, 1);
        });
      },
      s = function (t) {
        var i = t.name,
          s = t.form,
          n = e([]);
        return (
          i &&
            (n = s
              ? e(s).find("[name='" + i + "']")
              : e("[name='" + i + "']", t.ownerDocument).filter(function () {
                  return !this.form;
                })),
          n
        );
      };
    e.widget("ui.button", {
      options: {
        disabled: null,
        text: !0,
        label: null,
        icons: { primary: null, secondary: null },
      },
      _create: function () {
        this.element
          .closest("form")
          .unbind("reset.button")
          .bind("reset.button", i),
          "boolean" != typeof this.options.disabled &&
            (this.options.disabled = this.element.attr("disabled")),
          this._determineButtonType(),
          (this.hasTitle = !!this.buttonElement.attr("title"));
        var n = this,
          o = this.options,
          a = "checkbox" === this.type || "radio" === this.type,
          r = "ui-state-hover" + (a ? "" : " ui-state-active");
        null === o.label && (o.label = this.buttonElement.html()),
          this.element.is(":disabled") && (o.disabled = !0),
          this.buttonElement
            .addClass("ui-button ui-widget ui-state-default ui-corner-all")
            .attr("role", "button")
            .bind("mouseenter.button", function () {
              o.disabled ||
                (e(this).addClass("ui-state-hover"),
                this === t && e(this).addClass("ui-state-active"));
            })
            .bind("mouseleave.button", function () {
              o.disabled || e(this).removeClass(r);
            })
            .bind("focus.button", function () {
              e(this).addClass("ui-state-focus");
            })
            .bind("blur.button", function () {
              e(this).removeClass("ui-state-focus");
            }),
          a &&
            this.element.bind("change.button", function () {
              n.refresh();
            }),
          "checkbox" === this.type
            ? this.buttonElement.bind("click.button", function () {
                if (o.disabled) return !1;
                e(this).toggleClass("ui-state-active"),
                  n.buttonElement.attr("aria-pressed", n.element[0].checked);
              })
            : "radio" === this.type
            ? this.buttonElement.bind("click.button", function () {
                if (o.disabled) return !1;
                e(this).addClass("ui-state-active"),
                  n.buttonElement.attr("aria-pressed", !0);
                var t = n.element[0];
                s(t)
                  .not(t)
                  .map(function () {
                    return e(this).button("widget")[0];
                  })
                  .removeClass("ui-state-active")
                  .attr("aria-pressed", !1);
              })
            : (this.buttonElement
                .bind("mousedown.button", function () {
                  if (o.disabled) return !1;
                  e(this).addClass("ui-state-active"),
                    (t = this),
                    e(document).one("mouseup", function () {
                      t = null;
                    });
                })
                .bind("mouseup.button", function () {
                  if (o.disabled) return !1;
                  e(this).removeClass("ui-state-active");
                })
                .bind("keydown.button", function (t) {
                  if (o.disabled) return !1;
                  (t.keyCode != e.ui.keyCode.SPACE &&
                    t.keyCode != e.ui.keyCode.ENTER) ||
                    e(this).addClass("ui-state-active");
                })
                .bind("keyup.button", function () {
                  e(this).removeClass("ui-state-active");
                }),
              this.buttonElement.is("a") &&
                this.buttonElement.keyup(function (t) {
                  t.keyCode === e.ui.keyCode.SPACE && e(this).click();
                })),
          this._setOption("disabled", o.disabled);
      },
      _determineButtonType: function () {
        if (
          ((this.type = this.element.is(":checkbox")
            ? "checkbox"
            : this.element.is(":radio")
            ? "radio"
            : this.element.is("input")
            ? "input"
            : "button"),
          "checkbox" === this.type || "radio" === this.type)
        ) {
          (this.buttonElement = this.element
            .parents()
            .last()
            .find("label[for=" + this.element.attr("id") + "]")),
            this.element.addClass("ui-helper-hidden-accessible");
          var e = this.element.is(":checked");
          e && this.buttonElement.addClass("ui-state-active"),
            this.buttonElement.attr("aria-pressed", e);
        } else this.buttonElement = this.element;
      },
      widget: function () {
        return this.buttonElement;
      },
      destroy: function () {
        this.element.removeClass("ui-helper-hidden-accessible"),
          this.buttonElement
            .removeClass(
              "ui-button ui-widget ui-state-default ui-corner-all ui-state-hover ui-state-active  ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"
            )
            .removeAttr("role")
            .removeAttr("aria-pressed")
            .html(this.buttonElement.find(".ui-button-text").html()),
          this.hasTitle || this.buttonElement.removeAttr("title"),
          e.Widget.prototype.destroy.call(this);
      },
      _setOption: function (t, i) {
        e.Widget.prototype._setOption.apply(this, arguments),
          "disabled" === t &&
            (i
              ? this.element.attr("disabled", !0)
              : this.element.removeAttr("disabled")),
          this._resetButton();
      },
      refresh: function () {
        var t = this.element.is(":disabled");
        t !== this.options.disabled && this._setOption("disabled", t),
          "radio" === this.type
            ? s(this.element[0]).each(function () {
                e(this).is(":checked")
                  ? e(this)
                      .button("widget")
                      .addClass("ui-state-active")
                      .attr("aria-pressed", !0)
                  : e(this)
                      .button("widget")
                      .removeClass("ui-state-active")
                      .attr("aria-pressed", !1);
              })
            : "checkbox" === this.type &&
              (this.element.is(":checked")
                ? this.buttonElement
                    .addClass("ui-state-active")
                    .attr("aria-pressed", !0)
                : this.buttonElement
                    .removeClass("ui-state-active")
                    .attr("aria-pressed", !1));
      },
      _resetButton: function () {
        if ("input" === this.type)
          this.options.label && this.element.val(this.options.label);
        else {
          var t = this.buttonElement.removeClass(
              "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"
            ),
            i = e("<span></span>")
              .addClass("ui-button-text")
              .html(this.options.label)
              .appendTo(t.empty())
              .text(),
            s = this.options.icons,
            n = s.primary && s.secondary;
          s.primary || s.secondary
            ? (t.addClass(
                "ui-button-text-icon" +
                  (n ? "s" : s.primary ? "-primary" : "-secondary")
              ),
              s.primary &&
                t.prepend(
                  "<span class='ui-button-icon-primary ui-icon " +
                    s.primary +
                    "'></span>"
                ),
              s.secondary &&
                t.append(
                  "<span class='ui-button-icon-secondary ui-icon " +
                    s.secondary +
                    "'></span>"
                ),
              this.options.text ||
                (t
                  .addClass(n ? "ui-button-icons-only" : "ui-button-icon-only")
                  .removeClass(
                    "ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary"
                  ),
                this.hasTitle || t.attr("title", i)))
            : t.addClass("ui-button-text-only");
        }
      },
    }),
      e.widget("ui.buttonset", {
        options: {
          items:
            ":button, :submit, :reset, :checkbox, :radio, a, :data(button)",
        },
        _create: function () {
          this.element.addClass("ui-buttonset");
        },
        _init: function () {
          this.refresh();
        },
        _setOption: function (t, i) {
          "disabled" === t && this.buttons.button("option", t, i),
            e.Widget.prototype._setOption.apply(this, arguments);
        },
        refresh: function () {
          this.buttons = this.element
            .find(this.options.items)
            .filter(":ui-button")
            .button("refresh")
            .end()
            .not(":ui-button")
            .button()
            .end()
            .map(function () {
              return e(this).button("widget")[0];
            })
            .removeClass("ui-corner-all ui-corner-left ui-corner-right")
            .filter(":first")
            .addClass("ui-corner-left")
            .end()
            .filter(":last")
            .addClass("ui-corner-right")
            .end()
            .end();
        },
        destroy: function () {
          this.element.removeClass("ui-buttonset"),
            this.buttons
              .map(function () {
                return e(this).button("widget")[0];
              })
              .removeClass("ui-corner-left ui-corner-right")
              .end()
              .button("destroy"),
            e.Widget.prototype.destroy.call(this);
        },
      });
  })(jQuery),
  (function (b, c) {
    function f() {
      (this.debug = !1),
        (this._curInst = null),
        (this._keyEvent = !1),
        (this._disabledInputs = []),
        (this._inDialog = this._datepickerShowing = !1),
        (this._mainDivId = "ui-datepicker-div"),
        (this._inlineClass = "ui-datepicker-inline"),
        (this._appendClass = "ui-datepicker-append"),
        (this._triggerClass = "ui-datepicker-trigger"),
        (this._dialogClass = "ui-datepicker-dialog"),
        (this._disableClass = "ui-datepicker-disabled"),
        (this._unselectableClass = "ui-datepicker-unselectable"),
        (this._currentClass = "ui-datepicker-current-day"),
        (this._dayOverClass = "ui-datepicker-days-cell-over"),
        (this.regional = []),
        (this.regional[""] = {
          closeText: "Done",
          prevText: "Prev",
          nextText: "Next",
          currentText: "Today",
          monthNames: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          monthNamesShort: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          dayNames: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
          weekHeader: "Wk",
          dateFormat: "mm/dd/yy",
          firstDay: 0,
          isRTL: !1,
          showMonthAfterYear: !1,
          yearSuffix: "",
        }),
        (this._defaults = {
          showOn: "focus",
          showAnim: "fadeIn",
          showOptions: {},
          defaultDate: null,
          appendText: "",
          buttonText: "...",
          buttonImage: "",
          buttonImageOnly: !1,
          hideIfNoPrevNext: !1,
          navigationAsDateFormat: !1,
          gotoCurrent: !1,
          changeMonth: !1,
          changeYear: !1,
          yearRange: "c-10:c+10",
          showOtherMonths: !1,
          selectOtherMonths: !1,
          showWeek: !1,
          calculateWeek: this.iso8601Week,
          shortYearCutoff: "+10",
          minDate: null,
          maxDate: null,
          duration: "fast",
          beforeShowDay: null,
          beforeShow: null,
          onSelect: null,
          onChangeMonthYear: null,
          onClose: null,
          numberOfMonths: 1,
          showCurrentAtPos: 0,
          stepMonths: 1,
          stepBigMonths: 12,
          altField: "",
          altFormat: "",
          constrainInput: !0,
          showButtonPanel: !1,
          autoSize: !1,
        }),
        b.extend(this._defaults, this.regional[""]),
        (this.dpDiv = b(
          '<div id="' +
            this._mainDivId +
            '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'
        ));
    }
    function g(e, t) {
      for (var i in (b.extend(e, t), t))
        (null != t[i] && t[i] != c) || (e[i] = t[i]);
      return e;
    }
    b.extend(b.ui, { datepicker: { version: "1.8.9" } });
    var e = new Date().getTime();
    b.extend(f.prototype, {
      markerClassName: "hasDatepicker",
      log: function () {
        this.debug && console.log.apply("", arguments);
      },
      _widgetDatepicker: function () {
        return this.dpDiv;
      },
      setDefaults: function (e) {
        return g(this._defaults, e || {}), this;
      },
      _attachDatepicker: function (a, d) {
        var h = null;
        for (var i in this._defaults) {
          var j = a.getAttribute("date:" + i);
          if (j) {
            h = h || {};
            try {
              h[i] = eval(j);
            } catch (e) {
              h[i] = j;
            }
          }
        }
        (i = a.nodeName.toLowerCase()),
          (j = "div" == i || "span" == i),
          a.id || ((this.uuid += 1), (a.id = "dp" + this.uuid));
        var q = this._newInst(b(a), j);
        (q.settings = b.extend({}, d || {}, h || {})),
          "input" == i
            ? this._connectDatepicker(a, q)
            : j && this._inlineDatepicker(a, q);
      },
      _newInst: function (e, t) {
        return {
          id: e[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1"),
          input: e,
          selectedDay: 0,
          selectedMonth: 0,
          selectedYear: 0,
          drawMonth: 0,
          drawYear: 0,
          inline: t,
          dpDiv: t
            ? b(
                '<div class="' +
                  this._inlineClass +
                  ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'
              )
            : this.dpDiv,
        };
      },
      _connectDatepicker: function (e, t) {
        var i = b(e);
        (t.append = b([])),
          (t.trigger = b([])),
          i.hasClass(this.markerClassName) ||
            (this._attachments(i, t),
            i
              .addClass(this.markerClassName)
              .keydown(this._doKeyDown)
              .keypress(this._doKeyPress)
              .keyup(this._doKeyUp)
              .bind("setData.datepicker", function (e, i, s) {
                t.settings[i] = s;
              })
              .bind("getData.datepicker", function (e, i) {
                return this._get(t, i);
              }),
            this._autoSize(t),
            b.data(e, "datepicker", t));
      },
      _attachments: function (e, t) {
        var i = this._get(t, "appendText"),
          s = this._get(t, "isRTL");
        if (
          (t.append && t.append.remove(),
          i &&
            ((t.append = b(
              '<span class="' + this._appendClass + '">' + i + "</span>"
            )),
            e[s ? "before" : "after"](t.append)),
          e.unbind("focus", this._showDatepicker),
          t.trigger && t.trigger.remove(),
          ("focus" != (i = this._get(t, "showOn")) && "both" != i) ||
            e.focus(this._showDatepicker),
          "button" == i || "both" == i)
        ) {
          i = this._get(t, "buttonText");
          var n = this._get(t, "buttonImage");
          (t.trigger = b(
            this._get(t, "buttonImageOnly")
              ? b("<img/>")
                  .addClass(this._triggerClass)
                  .attr({ src: n, alt: i, title: i })
              : b('<button type="button"></button>')
                  .addClass(this._triggerClass)
                  .html(
                    "" == n ? i : b("<img/>").attr({ src: n, alt: i, title: i })
                  )
          )),
            e[s ? "before" : "after"](t.trigger),
            t.trigger.click(function () {
              return (
                b.datepicker._datepickerShowing &&
                b.datepicker._lastInput == e[0]
                  ? b.datepicker._hideDatepicker()
                  : b.datepicker._showDatepicker(e[0]),
                !1
              );
            });
        }
      },
      _autoSize: function (e) {
        if (this._get(e, "autoSize") && !e.inline) {
          var t = new Date(2009, 11, 20),
            i = this._get(e, "dateFormat");
          if (i.match(/[DM]/)) {
            var s = function (e) {
              for (var t = 0, i = 0, s = 0; s < e.length; s++)
                e[s].length > t && ((t = e[s].length), (i = s));
              return i;
            };
            t.setMonth(
              s(this._get(e, i.match(/MM/) ? "monthNames" : "monthNamesShort"))
            ),
              t.setDate(
                s(this._get(e, i.match(/DD/) ? "dayNames" : "dayNamesShort")) +
                  20 -
                  t.getDay()
              );
          }
          e.input.attr("size", this._formatDate(e, t).length);
        }
      },
      _inlineDatepicker: function (e, t) {
        var i = b(e);
        i.hasClass(this.markerClassName) ||
          (i
            .addClass(this.markerClassName)
            .append(t.dpDiv)
            .bind("setData.datepicker", function (e, i, s) {
              t.settings[i] = s;
            })
            .bind("getData.datepicker", function (e, i) {
              return this._get(t, i);
            }),
          b.data(e, "datepicker", t),
          this._setDate(t, this._getDefaultDate(t), !0),
          this._updateDatepicker(t),
          this._updateAlternate(t),
          t.dpDiv.show());
      },
      _dialogDatepicker: function (e, t, i, s, n) {
        return (
          (e = this._dialogInst) ||
            ((this.uuid += 1),
            (this._dialogInput = b(
              '<input type="text" id="dp' +
                this.uuid +
                '" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>'
            )),
            this._dialogInput.keydown(this._doKeyDown),
            b("body").append(this._dialogInput),
            ((e = this._dialogInst =
              this._newInst(this._dialogInput, !1)).settings = {}),
            b.data(this._dialogInput[0], "datepicker", e)),
          g(e.settings, s || {}),
          (t = t && t.constructor == Date ? this._formatDate(e, t) : t),
          this._dialogInput.val(t),
          (this._pos = n ? (n.length ? n : [n.pageX, n.pageY]) : null),
          this._pos ||
            (this._pos = [
              document.documentElement.clientWidth / 2 -
                100 +
                (document.documentElement.scrollLeft ||
                  document.body.scrollLeft),
              document.documentElement.clientHeight / 2 -
                150 +
                (document.documentElement.scrollTop || document.body.scrollTop),
            ]),
          this._dialogInput
            .css("left", this._pos[0] + 20 + "px")
            .css("top", this._pos[1] + "px"),
          (e.settings.onSelect = i),
          (this._inDialog = !0),
          this.dpDiv.addClass(this._dialogClass),
          this._showDatepicker(this._dialogInput[0]),
          b.blockUI && b.blockUI(this.dpDiv),
          b.data(this._dialogInput[0], "datepicker", e),
          this
        );
      },
      _destroyDatepicker: function (e) {
        var t = b(e),
          i = b.data(e, "datepicker");
        if (t.hasClass(this.markerClassName)) {
          var s = e.nodeName.toLowerCase();
          b.removeData(e, "datepicker"),
            "input" == s
              ? (i.append.remove(),
                i.trigger.remove(),
                t
                  .removeClass(this.markerClassName)
                  .unbind("focus", this._showDatepicker)
                  .unbind("keydown", this._doKeyDown)
                  .unbind("keypress", this._doKeyPress)
                  .unbind("keyup", this._doKeyUp))
              : ("div" != s && "span" != s) ||
                t.removeClass(this.markerClassName).empty();
        }
      },
      _enableDatepicker: function (e) {
        var t = b(e),
          i = b.data(e, "datepicker");
        if (t.hasClass(this.markerClassName)) {
          var s = e.nodeName.toLowerCase();
          "input" == s
            ? ((e.disabled = !1),
              i.trigger
                .filter("button")
                .each(function () {
                  this.disabled = !1;
                })
                .end()
                .filter("img")
                .css({ opacity: "1.0", cursor: "" }))
            : ("div" != s && "span" != s) ||
              t
                .children("." + this._inlineClass)
                .children()
                .removeClass("ui-state-disabled"),
            (this._disabledInputs = b.map(this._disabledInputs, function (t) {
              return t == e ? null : t;
            }));
        }
      },
      _disableDatepicker: function (e) {
        var t = b(e),
          i = b.data(e, "datepicker");
        if (t.hasClass(this.markerClassName)) {
          var s = e.nodeName.toLowerCase();
          "input" == s
            ? ((e.disabled = !0),
              i.trigger
                .filter("button")
                .each(function () {
                  this.disabled = !0;
                })
                .end()
                .filter("img")
                .css({ opacity: "0.5", cursor: "default" }))
            : ("div" != s && "span" != s) ||
              t
                .children("." + this._inlineClass)
                .children()
                .addClass("ui-state-disabled"),
            (this._disabledInputs = b.map(this._disabledInputs, function (t) {
              return t == e ? null : t;
            })),
            (this._disabledInputs[this._disabledInputs.length] = e);
        }
      },
      _isDisabledDatepicker: function (e) {
        if (!e) return !1;
        for (var t = 0; t < this._disabledInputs.length; t++)
          if (this._disabledInputs[t] == e) return !0;
        return !1;
      },
      _getInst: function (e) {
        try {
          return b.data(e, "datepicker");
        } catch (e) {
          throw "Missing instance data for this datepicker";
        }
      },
      _optionDatepicker: function (e, t, i) {
        var s = this._getInst(e);
        if (2 == arguments.length && "string" == typeof t)
          return "defaults" == t
            ? b.extend({}, b.datepicker._defaults)
            : s
            ? "all" == t
              ? b.extend({}, s.settings)
              : this._get(s, t)
            : null;
        var n = t || {};
        if (("string" == typeof t && ((n = {})[t] = i), s)) {
          this._curInst == s && this._hideDatepicker();
          var o = this._getDateDatepicker(e, !0);
          g(s.settings, n),
            this._attachments(b(e), s),
            this._autoSize(s),
            this._setDateDatepicker(e, o),
            this._updateDatepicker(s);
        }
      },
      _changeDatepicker: function (e, t, i) {
        this._optionDatepicker(e, t, i);
      },
      _refreshDatepicker: function (e) {
        (e = this._getInst(e)) && this._updateDatepicker(e);
      },
      _setDateDatepicker: function (e, t) {
        (e = this._getInst(e)) &&
          (this._setDate(e, t),
          this._updateDatepicker(e),
          this._updateAlternate(e));
      },
      _getDateDatepicker: function (e, t) {
        return (
          (e = this._getInst(e)) && !e.inline && this._setDateFromField(e, t),
          e ? this._getDate(e) : null
        );
      },
      _doKeyDown: function (e) {
        var t = b.datepicker._getInst(e.target),
          i = !0,
          s = t.dpDiv.is(".ui-datepicker-rtl");
        if (((t._keyEvent = !0), b.datepicker._datepickerShowing))
          switch (e.keyCode) {
            case 9:
              b.datepicker._hideDatepicker(), (i = !1);
              break;
            case 13:
              return (
                (i = b(
                  "td." +
                    b.datepicker._dayOverClass +
                    ":not(." +
                    b.datepicker._currentClass +
                    ")",
                  t.dpDiv
                ))[0]
                  ? b.datepicker._selectDay(
                      e.target,
                      t.selectedMonth,
                      t.selectedYear,
                      i[0]
                    )
                  : b.datepicker._hideDatepicker(),
                !1
              );
            case 27:
              b.datepicker._hideDatepicker();
              break;
            case 33:
              b.datepicker._adjustDate(
                e.target,
                e.ctrlKey
                  ? -b.datepicker._get(t, "stepBigMonths")
                  : -b.datepicker._get(t, "stepMonths"),
                "M"
              );
              break;
            case 34:
              b.datepicker._adjustDate(
                e.target,
                e.ctrlKey
                  ? +b.datepicker._get(t, "stepBigMonths")
                  : +b.datepicker._get(t, "stepMonths"),
                "M"
              );
              break;
            case 35:
              (e.ctrlKey || e.metaKey) && b.datepicker._clearDate(e.target),
                (i = e.ctrlKey || e.metaKey);
              break;
            case 36:
              (e.ctrlKey || e.metaKey) && b.datepicker._gotoToday(e.target),
                (i = e.ctrlKey || e.metaKey);
              break;
            case 37:
              (e.ctrlKey || e.metaKey) &&
                b.datepicker._adjustDate(e.target, s ? 1 : -1, "D"),
                (i = e.ctrlKey || e.metaKey),
                e.originalEvent.altKey &&
                  b.datepicker._adjustDate(
                    e.target,
                    e.ctrlKey
                      ? -b.datepicker._get(t, "stepBigMonths")
                      : -b.datepicker._get(t, "stepMonths"),
                    "M"
                  );
              break;
            case 38:
              (e.ctrlKey || e.metaKey) &&
                b.datepicker._adjustDate(e.target, -7, "D"),
                (i = e.ctrlKey || e.metaKey);
              break;
            case 39:
              (e.ctrlKey || e.metaKey) &&
                b.datepicker._adjustDate(e.target, s ? -1 : 1, "D"),
                (i = e.ctrlKey || e.metaKey),
                e.originalEvent.altKey &&
                  b.datepicker._adjustDate(
                    e.target,
                    e.ctrlKey
                      ? +b.datepicker._get(t, "stepBigMonths")
                      : +b.datepicker._get(t, "stepMonths"),
                    "M"
                  );
              break;
            case 40:
              (e.ctrlKey || e.metaKey) &&
                b.datepicker._adjustDate(e.target, 7, "D"),
                (i = e.ctrlKey || e.metaKey);
              break;
            default:
              i = !1;
          }
        else
          36 == e.keyCode && e.ctrlKey
            ? b.datepicker._showDatepicker(this)
            : (i = !1);
        i && (e.preventDefault(), e.stopPropagation());
      },
      _doKeyPress: function (e) {
        var t = b.datepicker._getInst(e.target);
        if (b.datepicker._get(t, "constrainInput")) {
          t = b.datepicker._possibleChars(b.datepicker._get(t, "dateFormat"));
          var i = String.fromCharCode(e.charCode == c ? e.keyCode : e.charCode);
          return e.ctrlKey || e.metaKey || i < " " || !t || t.indexOf(i) > -1;
        }
      },
      _doKeyUp: function (e) {
        if ((e = b.datepicker._getInst(e.target)).input.val() != e.lastVal)
          try {
            b.datepicker.parseDate(
              b.datepicker._get(e, "dateFormat"),
              e.input ? e.input.val() : null,
              b.datepicker._getFormatConfig(e)
            ) &&
              (b.datepicker._setDateFromField(e),
              b.datepicker._updateAlternate(e),
              b.datepicker._updateDatepicker(e));
          } catch (e) {
            b.datepicker.log(e);
          }
        return !0;
      },
      _showDatepicker: function (e) {
        if (
          ("input" != (e = e.target || e).nodeName.toLowerCase() &&
            (e = b("input", e.parentNode)[0]),
          !b.datepicker._isDisabledDatepicker(e) &&
            b.datepicker._lastInput != e)
        ) {
          var t = b.datepicker._getInst(e);
          b.datepicker._curInst &&
            b.datepicker._curInst != t &&
            b.datepicker._curInst.dpDiv.stop(!0, !0);
          var i = b.datepicker._get(t, "beforeShow");
          g(t.settings, i ? i.apply(e, [e, t]) : {}),
            (t.lastVal = null),
            (b.datepicker._lastInput = e),
            b.datepicker._setDateFromField(t),
            b.datepicker._inDialog && (e.value = ""),
            b.datepicker._pos ||
              ((b.datepicker._pos = b.datepicker._findPos(e)),
              (b.datepicker._pos[1] += e.offsetHeight));
          var s = !1;
          if (
            (b(e)
              .parents()
              .each(function () {
                return !(s |= "fixed" == b(this).css("position"));
              }),
            s &&
              b.browser.opera &&
              ((b.datepicker._pos[0] -= document.documentElement.scrollLeft),
              (b.datepicker._pos[1] -= document.documentElement.scrollTop)),
            (i = { left: b.datepicker._pos[0], top: b.datepicker._pos[1] }),
            (b.datepicker._pos = null),
            t.dpDiv.empty(),
            t.dpDiv.css({
              position: "absolute",
              display: "block",
              top: "-1000px",
            }),
            b.datepicker._updateDatepicker(t),
            (i = b.datepicker._checkOffset(t, i, s)),
            t.dpDiv.css({
              position:
                b.datepicker._inDialog && b.blockUI
                  ? "static"
                  : s
                  ? "fixed"
                  : "absolute",
              display: "none",
              left: i.left + "px",
              top: i.top + "px",
            }),
            !t.inline)
          ) {
            i = b.datepicker._get(t, "showAnim");
            var n = b.datepicker._get(t, "duration"),
              o = function () {
                b.datepicker._datepickerShowing = !0;
                var e = t.dpDiv.find("iframe.ui-datepicker-cover");
                if (e.length) {
                  var i = b.datepicker._getBorders(t.dpDiv);
                  e.css({
                    left: -i[0],
                    top: -i[1],
                    width: t.dpDiv.outerWidth(),
                    height: t.dpDiv.outerHeight(),
                  });
                }
              };
            t.dpDiv.zIndex(b(e).zIndex() + 1),
              b.effects && b.effects[i]
                ? t.dpDiv.show(i, b.datepicker._get(t, "showOptions"), n, o)
                : t.dpDiv[i || "show"](i ? n : null, o),
              (i && n) || o(),
              t.input.is(":visible") &&
                !t.input.is(":disabled") &&
                t.input.focus(),
              (b.datepicker._curInst = t);
          }
        }
      },
      _updateDatepicker: function (e) {
        var t = this,
          i = b.datepicker._getBorders(e.dpDiv);
        e.dpDiv.empty().append(this._generateHTML(e));
        var s = e.dpDiv.find("iframe.ui-datepicker-cover");
        if (
          (s.length &&
            s.css({
              left: -i[0],
              top: -i[1],
              width: e.dpDiv.outerWidth(),
              height: e.dpDiv.outerHeight(),
            }),
          e.dpDiv
            .find(
              "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a"
            )
            .bind("mouseout", function () {
              b(this).removeClass("ui-state-hover"),
                -1 != this.className.indexOf("ui-datepicker-prev") &&
                  b(this).removeClass("ui-datepicker-prev-hover"),
                -1 != this.className.indexOf("ui-datepicker-next") &&
                  b(this).removeClass("ui-datepicker-next-hover");
            })
            .bind("mouseover", function () {
              t._isDisabledDatepicker(
                e.inline ? e.dpDiv.parent()[0] : e.input[0]
              ) ||
                (b(this)
                  .parents(".ui-datepicker-calendar")
                  .find("a")
                  .removeClass("ui-state-hover"),
                b(this).addClass("ui-state-hover"),
                -1 != this.className.indexOf("ui-datepicker-prev") &&
                  b(this).addClass("ui-datepicker-prev-hover"),
                -1 != this.className.indexOf("ui-datepicker-next") &&
                  b(this).addClass("ui-datepicker-next-hover"));
            })
            .end()
            .find("." + this._dayOverClass + " a")
            .trigger("mouseover")
            .end(),
          (s = (i = this._getNumberOfMonths(e))[1]) > 1
            ? e.dpDiv
                .addClass("ui-datepicker-multi-" + s)
                .css("width", 17 * s + "em")
            : e.dpDiv
                .removeClass(
                  "ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4"
                )
                .width(""),
          e.dpDiv[(1 != i[0] || 1 != i[1] ? "add" : "remove") + "Class"](
            "ui-datepicker-multi"
          ),
          e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"](
            "ui-datepicker-rtl"
          ),
          e == b.datepicker._curInst &&
            b.datepicker._datepickerShowing &&
            e.input &&
            e.input.is(":visible") &&
            !e.input.is(":disabled") &&
            e.input.focus(),
          e.yearshtml)
        ) {
          var n = e.yearshtml;
          setTimeout(function () {
            n === e.yearshtml &&
              e.dpDiv
                .find("select.ui-datepicker-year:first")
                .replaceWith(e.yearshtml),
              (n = e.yearshtml = null);
          }, 0);
        }
      },
      _getBorders: function (e) {
        var t = function (e) {
          return { thin: 1, medium: 2, thick: 3 }[e] || e;
        };
        return [
          parseFloat(t(e.css("border-left-width"))),
          parseFloat(t(e.css("border-top-width"))),
        ];
      },
      _checkOffset: function (e, t, i) {
        var s = e.dpDiv.outerWidth(),
          n = e.dpDiv.outerHeight(),
          o = e.input ? e.input.outerWidth() : 0,
          a = e.input ? e.input.outerHeight() : 0,
          r = document.documentElement.clientWidth + b(document).scrollLeft(),
          l = document.documentElement.clientHeight + b(document).scrollTop();
        return (
          (t.left -= this._get(e, "isRTL") ? s - o : 0),
          (t.left -=
            i && t.left == e.input.offset().left
              ? b(document).scrollLeft()
              : 0),
          (t.top -=
            i && t.top == e.input.offset().top + a
              ? b(document).scrollTop()
              : 0),
          (t.left -= Math.min(
            t.left,
            t.left + s > r && r > s ? Math.abs(t.left + s - r) : 0
          )),
          (t.top -= Math.min(
            t.top,
            t.top + n > l && l > n ? Math.abs(n + a) : 0
          )),
          t
        );
      },
      _findPos: function (e) {
        for (
          var t = this._get(this._getInst(e), "isRTL");
          e && ("hidden" == e.type || 1 != e.nodeType);

        )
          e = e[t ? "previousSibling" : "nextSibling"];
        return [(e = b(e).offset()).left, e.top];
      },
      _hideDatepicker: function (e) {
        var t = this._curInst;
        if (
          t &&
          (!e || t == b.data(e, "datepicker")) &&
          this._datepickerShowing
        ) {
          e = this._get(t, "showAnim");
          var i = this._get(t, "duration"),
            s = function () {
              b.datepicker._tidyDialog(t), (this._curInst = null);
            };
          b.effects && b.effects[e]
            ? t.dpDiv.hide(e, b.datepicker._get(t, "showOptions"), i, s)
            : t.dpDiv[
                "slideDown" == e
                  ? "slideUp"
                  : "fadeIn" == e
                  ? "fadeOut"
                  : "hide"
              ](e ? i : null, s),
            e || s(),
            (e = this._get(t, "onClose")) &&
              e.apply(t.input ? t.input[0] : null, [
                t.input ? t.input.val() : "",
                t,
              ]),
            (this._datepickerShowing = !1),
            (this._lastInput = null),
            this._inDialog &&
              (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px",
              }),
              b.blockUI && (b.unblockUI(), b("body").append(this.dpDiv))),
            (this._inDialog = !1);
        }
      },
      _tidyDialog: function (e) {
        e.dpDiv
          .removeClass(this._dialogClass)
          .unbind(".ui-datepicker-calendar");
      },
      _checkExternalClick: function (e) {
        b.datepicker._curInst &&
          (e = b(e.target))[0].id != b.datepicker._mainDivId &&
          0 == e.parents("#" + b.datepicker._mainDivId).length &&
          !e.hasClass(b.datepicker.markerClassName) &&
          !e.hasClass(b.datepicker._triggerClass) &&
          b.datepicker._datepickerShowing &&
          (!b.datepicker._inDialog || !b.blockUI) &&
          b.datepicker._hideDatepicker();
      },
      _adjustDate: function (e, t, i) {
        e = b(e);
        var s = this._getInst(e[0]);
        this._isDisabledDatepicker(e[0]) ||
          (this._adjustInstDate(
            s,
            t + ("M" == i ? this._get(s, "showCurrentAtPos") : 0),
            i
          ),
          this._updateDatepicker(s));
      },
      _gotoToday: function (e) {
        e = b(e);
        var t = this._getInst(e[0]);
        if (this._get(t, "gotoCurrent") && t.currentDay)
          (t.selectedDay = t.currentDay),
            (t.drawMonth = t.selectedMonth = t.currentMonth),
            (t.drawYear = t.selectedYear = t.currentYear);
        else {
          var i = new Date();
          (t.selectedDay = i.getDate()),
            (t.drawMonth = t.selectedMonth = i.getMonth()),
            (t.drawYear = t.selectedYear = i.getFullYear());
        }
        this._notifyChange(t), this._adjustDate(e);
      },
      _selectMonthYear: function (e, t, i) {
        e = b(e);
        var s = this._getInst(e[0]);
        (s._selectingMonthYear = !1),
          (s["selected" + ("M" == i ? "Month" : "Year")] = s[
            "draw" + ("M" == i ? "Month" : "Year")
          ] =
            parseInt(t.options[t.selectedIndex].value, 10)),
          this._notifyChange(s),
          this._adjustDate(e);
      },
      _clickMonthYear: function (e) {
        var t = this._getInst(b(e)[0]);
        t.input &&
          t._selectingMonthYear &&
          setTimeout(function () {
            t.input.focus();
          }, 0),
          (t._selectingMonthYear = !t._selectingMonthYear);
      },
      _selectDay: function (e, t, i, s) {
        var n = b(e);
        b(s).hasClass(this._unselectableClass) ||
          this._isDisabledDatepicker(n[0]) ||
          (((n = this._getInst(n[0])).selectedDay = n.currentDay =
            b("a", s).html()),
          (n.selectedMonth = n.currentMonth = t),
          (n.selectedYear = n.currentYear = i),
          this._selectDate(
            e,
            this._formatDate(n, n.currentDay, n.currentMonth, n.currentYear)
          ));
      },
      _clearDate: function (e) {
        (e = b(e)), this._getInst(e[0]), this._selectDate(e, "");
      },
      _selectDate: function (e, t) {
        (e = this._getInst(b(e)[0])),
          (t = null != t ? t : this._formatDate(e)),
          e.input && e.input.val(t),
          this._updateAlternate(e);
        var i = this._get(e, "onSelect");
        i
          ? i.apply(e.input ? e.input[0] : null, [t, e])
          : e.input && e.input.trigger("change"),
          e.inline
            ? this._updateDatepicker(e)
            : (this._hideDatepicker(),
              (this._lastInput = e.input[0]),
              "object" != typeof e.input[0] && e.input.focus(),
              (this._lastInput = null));
      },
      _updateAlternate: function (e) {
        var t = this._get(e, "altField");
        if (t) {
          var i = this._get(e, "altFormat") || this._get(e, "dateFormat"),
            s = this._getDate(e),
            n = this.formatDate(i, s, this._getFormatConfig(e));
          b(t).each(function () {
            b(this).val(n);
          });
        }
      },
      noWeekends: function (e) {
        return [(e = e.getDay()) > 0 && e < 6, ""];
      },
      iso8601Week: function (e) {
        (e = new Date(e.getTime())).setDate(
          e.getDate() + 4 - (e.getDay() || 7)
        );
        var t = e.getTime();
        return (
          e.setMonth(0),
          e.setDate(1),
          Math.floor(Math.round((t - e) / 864e5) / 7) + 1
        );
      },
      parseDate: function (e, t, i) {
        if (null == e || null == t) throw "Invalid arguments";
        if ("" == (t = "object" == typeof t ? t.toString() : t + ""))
          return null;
        var s =
          (i ? i.shortYearCutoff : null) || this._defaults.shortYearCutoff;
        s =
          "string" != typeof s
            ? s
            : (new Date().getFullYear() % 100) + parseInt(s, 10);
        for (
          var n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
            o = (i ? i.dayNames : null) || this._defaults.dayNames,
            a =
              (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
            r = (i ? i.monthNames : null) || this._defaults.monthNames,
            l = (i = -1),
            h = -1,
            c = -1,
            u = !1,
            d = function (t) {
              return (t = v + 1 < e.length && e.charAt(v + 1) == t) && v++, t;
            },
            p = function (e) {
              var i = d(e);
              if (
                ((e = new RegExp(
                  "^\\d{1," +
                    ("@" == e
                      ? 14
                      : "!" == e
                      ? 20
                      : "y" == e && i
                      ? 4
                      : "o" == e
                      ? 3
                      : 2) +
                    "}"
                )),
                !(e = t.substring(m).match(e)))
              )
                throw "Missing number at position " + m;
              return (m += e[0].length), parseInt(e[0], 10);
            },
            f = function (e, i, s) {
              for (e = d(e) ? s : i, i = 0; i < e.length; i++)
                if (
                  t.substr(m, e[i].length).toLowerCase() == e[i].toLowerCase()
                )
                  return (m += e[i].length), i + 1;
              throw "Unknown name at position " + m;
            },
            g = function () {
              if (t.charAt(m) != e.charAt(v))
                throw "Unexpected literal at position " + m;
              m++;
            },
            m = 0,
            v = 0;
          v < e.length;
          v++
        )
          if (u) "'" != e.charAt(v) || d("'") ? g() : (u = !1);
          else
            switch (e.charAt(v)) {
              case "d":
                h = p("d");
                break;
              case "D":
                f("D", n, o);
                break;
              case "o":
                c = p("o");
                break;
              case "m":
                l = p("m");
                break;
              case "M":
                l = f("M", a, r);
                break;
              case "y":
                i = p("y");
                break;
              case "@":
                var b = new Date(p("@"));
                (i = b.getFullYear()),
                  (l = b.getMonth() + 1),
                  (h = b.getDate());
                break;
              case "!":
                (i = (b = new Date(
                  (p("!") - this._ticksTo1970) / 1e4
                )).getFullYear()),
                  (l = b.getMonth() + 1),
                  (h = b.getDate());
                break;
              case "'":
                d("'") ? g() : (u = !0);
                break;
              default:
                g();
            }
        if (
          (-1 == i
            ? (i = new Date().getFullYear())
            : i < 100 &&
              (i +=
                new Date().getFullYear() -
                (new Date().getFullYear() % 100) +
                (i <= s ? 0 : -100)),
          c > -1)
        )
          for (l = 1, h = c; ; ) {
            if (h <= (s = this._getDaysInMonth(i, l - 1))) break;
            l++, (h -= s);
          }
        if (
          (b = this._daylightSavingAdjust(
            new Date(i, l - 1, h)
          )).getFullYear() != i ||
          b.getMonth() + 1 != l ||
          b.getDate() != h
        )
          throw "Invalid date";
        return b;
      },
      ATOM: "yy-mm-dd",
      COOKIE: "D, dd M yy",
      ISO_8601: "yy-mm-dd",
      RFC_822: "D, d M y",
      RFC_850: "DD, dd-M-y",
      RFC_1036: "D, d M y",
      RFC_1123: "D, d M yy",
      RFC_2822: "D, d M yy",
      RSS: "D, d M y",
      TICKS: "!",
      TIMESTAMP: "@",
      W3C: "yy-mm-dd",
      _ticksTo1970:
        24 *
        (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) *
        60 *
        60 *
        1e7,
      formatDate: function (e, t, i) {
        if (!t) return "";
        var s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
          n = (i ? i.dayNames : null) || this._defaults.dayNames,
          o = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort;
        i = (i ? i.monthNames : null) || this._defaults.monthNames;
        var a = function (t) {
            return (t = u + 1 < e.length && e.charAt(u + 1) == t) && u++, t;
          },
          r = function (e, t, i) {
            if (((t = "" + t), a(e))) for (; t.length < i; ) t = "0" + t;
            return t;
          },
          l = function (e, t, i, s) {
            return a(e) ? s[t] : i[t];
          },
          h = "",
          c = !1;
        if (t)
          for (var u = 0; u < e.length; u++)
            if (c) "'" != e.charAt(u) || a("'") ? (h += e.charAt(u)) : (c = !1);
            else
              switch (e.charAt(u)) {
                case "d":
                  h += r("d", t.getDate(), 2);
                  break;
                case "D":
                  h += l("D", t.getDay(), s, n);
                  break;
                case "o":
                  h += r(
                    "o",
                    (t.getTime() - new Date(t.getFullYear(), 0, 0).getTime()) /
                      864e5,
                    3
                  );
                  break;
                case "m":
                  h += r("m", t.getMonth() + 1, 2);
                  break;
                case "M":
                  h += l("M", t.getMonth(), o, i);
                  break;
                case "y":
                  h += a("y")
                    ? t.getFullYear()
                    : (t.getYear() % 100 < 10 ? "0" : "") + (t.getYear() % 100);
                  break;
                case "@":
                  h += t.getTime();
                  break;
                case "!":
                  h += 1e4 * t.getTime() + this._ticksTo1970;
                  break;
                case "'":
                  a("'") ? (h += "'") : (c = !0);
                  break;
                default:
                  h += e.charAt(u);
              }
        return h;
      },
      _possibleChars: function (e) {
        for (
          var t = "",
            i = !1,
            s = function (t) {
              return (t = n + 1 < e.length && e.charAt(n + 1) == t) && n++, t;
            },
            n = 0;
          n < e.length;
          n++
        )
          if (i) "'" != e.charAt(n) || s("'") ? (t += e.charAt(n)) : (i = !1);
          else
            switch (e.charAt(n)) {
              case "d":
              case "m":
              case "y":
              case "@":
                t += "0123456789";
                break;
              case "D":
              case "M":
                return null;
              case "'":
                s("'") ? (t += "'") : (i = !0);
                break;
              default:
                t += e.charAt(n);
            }
        return t;
      },
      _get: function (e, t) {
        return e.settings[t] !== c ? e.settings[t] : this._defaults[t];
      },
      _setDateFromField: function (e, t) {
        if (e.input.val() != e.lastVal) {
          var i,
            s,
            n = this._get(e, "dateFormat"),
            o = (e.lastVal = e.input ? e.input.val() : null);
          i = s = this._getDefaultDate(e);
          var a = this._getFormatConfig(e);
          try {
            i = this.parseDate(n, o, a) || s;
          } catch (e) {
            this.log(e), (o = t ? "" : o);
          }
          (e.selectedDay = i.getDate()),
            (e.drawMonth = e.selectedMonth = i.getMonth()),
            (e.drawYear = e.selectedYear = i.getFullYear()),
            (e.currentDay = o ? i.getDate() : 0),
            (e.currentMonth = o ? i.getMonth() : 0),
            (e.currentYear = o ? i.getFullYear() : 0),
            this._adjustInstDate(e);
        }
      },
      _getDefaultDate: function (e) {
        return this._restrictMinMax(
          e,
          this._determineDate(e, this._get(e, "defaultDate"), new Date())
        );
      },
      _determineDate: function (e, t, i) {
        var s, n;
        return (
          (t =
            (t =
              null == t || "" === t
                ? i
                : "string" == typeof t
                ? (function (t) {
                    try {
                      return b.datepicker.parseDate(
                        b.datepicker._get(e, "dateFormat"),
                        t,
                        b.datepicker._getFormatConfig(e)
                      );
                    } catch (e) {}
                    var i =
                        (t.toLowerCase().match(/^c/)
                          ? b.datepicker._getDate(e)
                          : null) || new Date(),
                      s = i.getFullYear(),
                      n = i.getMonth();
                    i = i.getDate();
                    for (
                      var o = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                        a = o.exec(t);
                      a;

                    ) {
                      switch (a[2] || "d") {
                        case "d":
                        case "D":
                          i += parseInt(a[1], 10);
                          break;
                        case "w":
                        case "W":
                          i += 7 * parseInt(a[1], 10);
                          break;
                        case "m":
                        case "M":
                          (n += parseInt(a[1], 10)),
                            (i = Math.min(
                              i,
                              b.datepicker._getDaysInMonth(s, n)
                            ));
                          break;
                        case "y":
                        case "Y":
                          (s += parseInt(a[1], 10)),
                            (i = Math.min(
                              i,
                              b.datepicker._getDaysInMonth(s, n)
                            ));
                      }
                      a = o.exec(t);
                    }
                    return new Date(s, n, i);
                  })(t)
                : "number" == typeof t
                ? isNaN(t)
                  ? i
                  : ((s = t), (n = new Date()).setDate(n.getDate() + s), n)
                : new Date(t.getTime())) && "Invalid Date" == t.toString()
              ? i
              : t) &&
            (t.setHours(0),
            t.setMinutes(0),
            t.setSeconds(0),
            t.setMilliseconds(0)),
          this._daylightSavingAdjust(t)
        );
      },
      _daylightSavingAdjust: function (e) {
        return e
          ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e)
          : null;
      },
      _setDate: function (e, t, i) {
        var s = !t,
          n = e.selectedMonth,
          o = e.selectedYear;
        (t = this._restrictMinMax(e, this._determineDate(e, t, new Date()))),
          (e.selectedDay = e.currentDay = t.getDate()),
          (e.drawMonth = e.selectedMonth = e.currentMonth = t.getMonth()),
          (e.drawYear = e.selectedYear = e.currentYear = t.getFullYear()),
          (n == e.selectedMonth && o == e.selectedYear) ||
            i ||
            this._notifyChange(e),
          this._adjustInstDate(e),
          e.input && e.input.val(s ? "" : this._formatDate(e));
      },
      _getDate: function (e) {
        return !e.currentYear || (e.input && "" == e.input.val())
          ? null
          : this._daylightSavingAdjust(
              new Date(e.currentYear, e.currentMonth, e.currentDay)
            );
      },
      _generateHTML: function (t) {
        var i = new Date();
        i = this._daylightSavingAdjust(
          new Date(i.getFullYear(), i.getMonth(), i.getDate())
        );
        var s = this._get(t, "isRTL"),
          n = this._get(t, "showButtonPanel"),
          o = this._get(t, "hideIfNoPrevNext"),
          a = this._get(t, "navigationAsDateFormat"),
          r = this._getNumberOfMonths(t),
          l = this._get(t, "showCurrentAtPos"),
          h = this._get(t, "stepMonths"),
          c = 1 != r[0] || 1 != r[1],
          u = this._daylightSavingAdjust(
            t.currentDay
              ? new Date(t.currentYear, t.currentMonth, t.currentDay)
              : new Date(9999, 9, 9)
          ),
          d = this._getMinMaxDate(t, "min"),
          p = this._getMinMaxDate(t, "max");
        l = t.drawMonth - l;
        var f = t.drawYear;
        if ((l < 0 && ((l += 12), f--), p)) {
          var g = this._daylightSavingAdjust(
            new Date(
              p.getFullYear(),
              p.getMonth() - r[0] * r[1] + 1,
              p.getDate()
            )
          );
          for (
            g = d && g < d ? d : g;
            this._daylightSavingAdjust(new Date(f, l, 1)) > g;

          )
            --l < 0 && ((l = 11), f--);
        }
        (t.drawMonth = l),
          (t.drawYear = f),
          (g = this._get(t, "prevText")),
          (g = a
            ? this.formatDate(
                g,
                this._daylightSavingAdjust(new Date(f, l - h, 1)),
                this._getFormatConfig(t)
              )
            : g),
          (g = this._canAdjustMonth(t, -1, f, l)
            ? '<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_' +
              e +
              ".datepicker._adjustDate('#" +
              t.id +
              "', -" +
              h +
              ", 'M');\" title=\"" +
              g +
              '"><span class="ui-icon ui-icon-circle-triangle-' +
              (s ? "e" : "w") +
              '">' +
              g +
              "</span></a>"
            : o
            ? ""
            : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' +
              g +
              '"><span class="ui-icon ui-icon-circle-triangle-' +
              (s ? "e" : "w") +
              '">' +
              g +
              "</span></a>");
        var m = this._get(t, "nextText");
        (m = a
          ? this.formatDate(
              m,
              this._daylightSavingAdjust(new Date(f, l + h, 1)),
              this._getFormatConfig(t)
            )
          : m),
          (o = this._canAdjustMonth(t, 1, f, l)
            ? '<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_' +
              e +
              ".datepicker._adjustDate('#" +
              t.id +
              "', +" +
              h +
              ", 'M');\" title=\"" +
              m +
              '"><span class="ui-icon ui-icon-circle-triangle-' +
              (s ? "w" : "e") +
              '">' +
              m +
              "</span></a>"
            : o
            ? ""
            : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' +
              m +
              '"><span class="ui-icon ui-icon-circle-triangle-' +
              (s ? "w" : "e") +
              '">' +
              m +
              "</span></a>"),
          (h = this._get(t, "currentText")),
          (m = this._get(t, "gotoCurrent") && t.currentDay ? u : i),
          (h = a ? this.formatDate(h, m, this._getFormatConfig(t)) : h),
          (a = t.inline
            ? ""
            : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_' +
              e +
              '.datepicker._hideDatepicker();">' +
              this._get(t, "closeText") +
              "</button>"),
          (n = n
            ? '<div class="ui-datepicker-buttonpane ui-widget-content">' +
              (s ? a : "") +
              (this._isInRange(t, m)
                ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_' +
                  e +
                  ".datepicker._gotoToday('#" +
                  t.id +
                  "');\">" +
                  h +
                  "</button>"
                : "") +
              (s ? "" : a) +
              "</div>"
            : ""),
          (a = parseInt(this._get(t, "firstDay"), 10)),
          (a = isNaN(a) ? 0 : a),
          (h = this._get(t, "showWeek")),
          (m = this._get(t, "dayNames")),
          this._get(t, "dayNamesShort");
        var v = this._get(t, "dayNamesMin"),
          y = this._get(t, "monthNames"),
          _ = this._get(t, "monthNamesShort"),
          w = this._get(t, "beforeShowDay"),
          x = this._get(t, "showOtherMonths"),
          k = this._get(t, "selectOtherMonths");
        this._get(t, "calculateWeek");
        for (var C = this._getDefaultDate(t), D = "", T = 0; T < r[0]; T++) {
          for (var S = "", I = 0; I < r[1]; I++) {
            var M = this._daylightSavingAdjust(new Date(f, l, t.selectedDay)),
              P = " ui-corner-all",
              N = "";
            if (c) {
              if (((N += '<div class="ui-datepicker-group'), r[1] > 1))
                switch (I) {
                  case 0:
                    (N += " ui-datepicker-group-first"),
                      (P = " ui-corner-" + (s ? "right" : "left"));
                    break;
                  case r[1] - 1:
                    (N += " ui-datepicker-group-last"),
                      (P = " ui-corner-" + (s ? "left" : "right"));
                    break;
                  default:
                    (N += " ui-datepicker-group-middle"), (P = "");
                }
              N += '">';
            }
            N +=
              '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' +
              P +
              '">' +
              (/all|left/.test(P) && 0 == T ? (s ? o : g) : "") +
              (/all|right/.test(P) && 0 == T ? (s ? g : o) : "") +
              this._generateMonthYearHeader(
                t,
                l,
                f,
                d,
                p,
                T > 0 || I > 0,
                y,
                _
              ) +
              '</div><table class="ui-datepicker-calendar"><thead><tr>';
            var E = h
              ? '<th class="ui-datepicker-week-col">' +
                this._get(t, "weekHeader") +
                "</th>"
              : "";
            for (P = 0; P < 7; P++) {
              var z = (P + a) % 7;
              E +=
                "<th" +
                ((P + a + 6) % 7 >= 5
                  ? ' class="ui-datepicker-week-end"'
                  : "") +
                '><span title="' +
                m[z] +
                '">' +
                v[z] +
                "</span></th>";
            }
            (N += E + "</tr></thead><tbody>"),
              (E = this._getDaysInMonth(f, l)),
              f == t.selectedYear &&
                l == t.selectedMonth &&
                (t.selectedDay = Math.min(t.selectedDay, E)),
              (P = (this._getFirstDayOfMonth(f, l) - a + 7) % 7),
              (E = c ? 6 : Math.ceil((P + E) / 7)),
              (z = this._daylightSavingAdjust(new Date(f, l, 1 - P)));
            for (var A = 0; A < E; A++) {
              N += "<tr>";
              var O = h
                ? '<td class="ui-datepicker-week-col">' +
                  this._get(t, "calculateWeek")(z) +
                  "</td>"
                : "";
              for (P = 0; P < 7; P++) {
                var j = w
                    ? w.apply(t.input ? t.input[0] : null, [z])
                    : [!0, ""],
                  H = z.getMonth() != l,
                  F = (H && !k) || !j[0] || (d && z < d) || (p && z > p);
                (O +=
                  '<td class="' +
                  ((P + a + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") +
                  (H ? " ui-datepicker-other-month" : "") +
                  ((z.getTime() == M.getTime() &&
                    l == t.selectedMonth &&
                    t._keyEvent) ||
                  (C.getTime() == z.getTime() && C.getTime() == M.getTime())
                    ? " " + this._dayOverClass
                    : "") +
                  (F
                    ? " " + this._unselectableClass + " ui-state-disabled"
                    : "") +
                  (H && !x
                    ? ""
                    : " " +
                      j[1] +
                      (z.getTime() == u.getTime()
                        ? " " + this._currentClass
                        : "") +
                      (z.getTime() == i.getTime()
                        ? " ui-datepicker-today"
                        : "")) +
                  '"' +
                  ((H && !x) || !j[2] ? "" : ' title="' + j[2] + '"') +
                  (F
                    ? ""
                    : ' onclick="DP_jQuery_' +
                      e +
                      ".datepicker._selectDay('#" +
                      t.id +
                      "'," +
                      z.getMonth() +
                      "," +
                      z.getFullYear() +
                      ', this);return false;"') +
                  ">" +
                  (H && !x
                    ? "&#xa0;"
                    : F
                    ? '<span class="ui-state-default">' +
                      z.getDate() +
                      "</span>"
                    : '<a class="ui-state-default' +
                      (z.getTime() == i.getTime()
                        ? " ui-state-highlight"
                        : "") +
                      (z.getTime() == u.getTime() ? " ui-state-active" : "") +
                      (H ? " ui-priority-secondary" : "") +
                      '" href="#">' +
                      z.getDate() +
                      "</a>") +
                  "</td>"),
                  z.setDate(z.getDate() + 1),
                  (z = this._daylightSavingAdjust(z));
              }
              N += O + "</tr>";
            }
            ++l > 11 && ((l = 0), f++),
              (S += N +=
                "</tbody></table>" +
                (c
                  ? "</div>" +
                    (r[0] > 0 && I == r[1] - 1
                      ? '<div class="ui-datepicker-row-break"></div>'
                      : "")
                  : ""));
          }
          D += S;
        }
        return (
          (D +=
            n +
            (b.browser.msie && parseInt(b.browser.version, 10) < 7 && !t.inline
              ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>'
              : "")),
          (t._keyEvent = !1),
          D
        );
      },
      _generateMonthYearHeader: function (t, i, s, n, o, a, r, l) {
        var h = this._get(t, "changeMonth"),
          c = this._get(t, "changeYear"),
          u = this._get(t, "showMonthAfterYear"),
          d = '<div class="ui-datepicker-title">',
          p = "";
        if (a || !h)
          p += '<span class="ui-datepicker-month">' + r[i] + "</span>";
        else {
          r = n && n.getFullYear() == s;
          var f = o && o.getFullYear() == s;
          p +=
            '<select class="ui-datepicker-month" onchange="DP_jQuery_' +
            e +
            ".datepicker._selectMonthYear('#" +
            t.id +
            "', this, 'M');\" onclick=\"DP_jQuery_" +
            e +
            ".datepicker._clickMonthYear('#" +
            t.id +
            "');\">";
          for (var g = 0; g < 12; g++)
            (!r || g >= n.getMonth()) &&
              (!f || g <= o.getMonth()) &&
              (p +=
                '<option value="' +
                g +
                '"' +
                (g == i ? ' selected="selected"' : "") +
                ">" +
                l[g] +
                "</option>");
          p += "</select>";
        }
        if (
          (u || (d += p + (!a && h && c ? "" : "&#xa0;")),
          (t.yearshtml = ""),
          a || !c)
        )
          d += '<span class="ui-datepicker-year">' + s + "</span>";
        else {
          l = this._get(t, "yearRange").split(":");
          var m = new Date().getFullYear();
          for (
            i = (r = function (e) {
              return (
                (e = e.match(/c[+-].*/)
                  ? s + parseInt(e.substring(1), 10)
                  : e.match(/[+-].*/)
                  ? m + parseInt(e, 10)
                  : parseInt(e, 10)),
                isNaN(e) ? m : e
              );
            })(l[0]),
              l = Math.max(i, r(l[1] || "")),
              i = n ? Math.max(i, n.getFullYear()) : i,
              l = o ? Math.min(l, o.getFullYear()) : l,
              t.yearshtml +=
                '<select class="ui-datepicker-year" onchange="DP_jQuery_' +
                e +
                ".datepicker._selectMonthYear('#" +
                t.id +
                "', this, 'Y');\" onclick=\"DP_jQuery_" +
                e +
                ".datepicker._clickMonthYear('#" +
                t.id +
                "');\">";
            i <= l;
            i++
          )
            t.yearshtml +=
              '<option value="' +
              i +
              '"' +
              (i == s ? ' selected="selected"' : "") +
              ">" +
              i +
              "</option>";
          (t.yearshtml += "</select>"),
            b.browser.mozilla
              ? (d +=
                  '<select class="ui-datepicker-year"><option value="' +
                  s +
                  '" selected="selected">' +
                  s +
                  "</option></select>")
              : ((d += t.yearshtml), (t.yearshtml = null));
        }
        return (
          (d += this._get(t, "yearSuffix")),
          u && (d += (!a && h && c ? "" : "&#xa0;") + p),
          (d += "</div>")
        );
      },
      _adjustInstDate: function (e, t, i) {
        var s = e.drawYear + ("Y" == i ? t : 0),
          n = e.drawMonth + ("M" == i ? t : 0);
        (t =
          Math.min(e.selectedDay, this._getDaysInMonth(s, n)) +
          ("D" == i ? t : 0)),
          (s = this._restrictMinMax(
            e,
            this._daylightSavingAdjust(new Date(s, n, t))
          )),
          (e.selectedDay = s.getDate()),
          (e.drawMonth = e.selectedMonth = s.getMonth()),
          (e.drawYear = e.selectedYear = s.getFullYear()),
          ("M" != i && "Y" != i) || this._notifyChange(e);
      },
      _restrictMinMax: function (e, t) {
        var i = this._getMinMaxDate(e, "min");
        return (
          (t = i && t < i ? i : t),
          (e = this._getMinMaxDate(e, "max")) && t > e ? e : t
        );
      },
      _notifyChange: function (e) {
        var t = this._get(e, "onChangeMonthYear");
        t &&
          t.apply(e.input ? e.input[0] : null, [
            e.selectedYear,
            e.selectedMonth + 1,
            e,
          ]);
      },
      _getNumberOfMonths: function (e) {
        return null == (e = this._get(e, "numberOfMonths"))
          ? [1, 1]
          : "number" == typeof e
          ? [1, e]
          : e;
      },
      _getMinMaxDate: function (e, t) {
        return this._determineDate(e, this._get(e, t + "Date"), null);
      },
      _getDaysInMonth: function (e, t) {
        return 32 - new Date(e, t, 32).getDate();
      },
      _getFirstDayOfMonth: function (e, t) {
        return new Date(e, t, 1).getDay();
      },
      _canAdjustMonth: function (e, t, i, s) {
        var n = this._getNumberOfMonths(e);
        return (
          (i = this._daylightSavingAdjust(
            new Date(i, s + (t < 0 ? t : n[0] * n[1]), 1)
          )),
          t < 0 &&
            i.setDate(this._getDaysInMonth(i.getFullYear(), i.getMonth())),
          this._isInRange(e, i)
        );
      },
      _isInRange: function (e, t) {
        var i = this._getMinMaxDate(e, "min");
        return (
          (e = this._getMinMaxDate(e, "max")),
          (!i || t.getTime() >= i.getTime()) &&
            (!e || t.getTime() <= e.getTime())
        );
      },
      _getFormatConfig: function (e) {
        var t = this._get(e, "shortYearCutoff");
        return {
          shortYearCutoff: (t =
            "string" != typeof t
              ? t
              : (new Date().getFullYear() % 100) + parseInt(t, 10)),
          dayNamesShort: this._get(e, "dayNamesShort"),
          dayNames: this._get(e, "dayNames"),
          monthNamesShort: this._get(e, "monthNamesShort"),
          monthNames: this._get(e, "monthNames"),
        };
      },
      _formatDate: function (e, t, i, s) {
        return (
          t ||
            ((e.currentDay = e.selectedDay),
            (e.currentMonth = e.selectedMonth),
            (e.currentYear = e.selectedYear)),
          (t = t
            ? "object" == typeof t
              ? t
              : this._daylightSavingAdjust(new Date(s, i, t))
            : this._daylightSavingAdjust(
                new Date(e.currentYear, e.currentMonth, e.currentDay)
              )),
          this.formatDate(
            this._get(e, "dateFormat"),
            t,
            this._getFormatConfig(e)
          )
        );
      },
    }),
      (b.fn.datepicker = function (e) {
        b.datepicker.initialized ||
          (b(document)
            .mousedown(b.datepicker._checkExternalClick)
            .find("body")
            .append(b.datepicker.dpDiv),
          (b.datepicker.initialized = !0));
        var t = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof e ||
          ("isDisabled" != e && "getDate" != e && "widget" != e)
          ? "option" == e &&
            2 == arguments.length &&
            "string" == typeof arguments[1]
            ? b.datepicker["_" + e + "Datepicker"].apply(
                b.datepicker,
                [this[0]].concat(t)
              )
            : this.each(function () {
                "string" == typeof e
                  ? b.datepicker["_" + e + "Datepicker"].apply(
                      b.datepicker,
                      [this].concat(t)
                    )
                  : b.datepicker._attachDatepicker(this, e);
              })
          : b.datepicker["_" + e + "Datepicker"].apply(
              b.datepicker,
              [this[0]].concat(t)
            );
      }),
      (b.datepicker = new f()),
      (b.datepicker.initialized = !1),
      (b.datepicker.uuid = new Date().getTime()),
      (b.datepicker.version = "1.8.9"),
      (window["DP_jQuery_" + e] = b);
  })(jQuery),
  (function (e, t) {
    var i = {
        buttons: !0,
        height: !0,
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0,
        width: !0,
      },
      s = { maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0 };
    e.widget("ui.dialog", {
      options: {
        autoOpen: !0,
        buttons: {},
        closeOnEscape: !0,
        closeText: "close",
        dialogClass: "",
        draggable: !0,
        hide: null,
        height: "auto",
        maxHeight: !1,
        maxWidth: !1,
        minHeight: 150,
        minWidth: 150,
        modal: !1,
        position: {
          my: "center",
          at: "center",
          collision: "fit",
          using: function (t) {
            var i = e(this).css(t).offset().top;
            i < 0 && e(this).css("top", t.top - i);
          },
        },
        resizable: !0,
        show: null,
        stack: !0,
        title: "",
        width: 300,
        zIndex: 1e3,
      },
      _create: function () {
        (this.originalTitle = this.element.attr("title")),
          "string" != typeof this.originalTitle && (this.originalTitle = ""),
          (this.options.title = this.options.title || this.originalTitle);
        var t = this,
          i = t.options,
          s = i.title || "&#160;",
          n = e.ui.dialog.getTitleId(t.element),
          o = (t.uiDialog = e("<div></div>"))
            .appendTo(document.body)
            .hide()
            .addClass(
              "ui-dialog ui-widget ui-widget-content ui-corner-all " +
                i.dialogClass
            )
            .css({ zIndex: i.zIndex })
            .attr("tabIndex", -1)
            .css("outline", 0)
            .keydown(function (s) {
              i.closeOnEscape &&
                s.keyCode &&
                s.keyCode === e.ui.keyCode.ESCAPE &&
                (t.close(s), s.preventDefault());
            })
            .attr({ role: "dialog", "aria-labelledby": n })
            .mousedown(function (e) {
              t.moveToTop(!1, e);
            });
        t.element
          .show()
          .removeAttr("title")
          .addClass("ui-dialog-content ui-widget-content")
          .appendTo(o);
        var a = (t.uiDialogTitlebar = e("<div></div>"))
            .addClass(
              "ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix"
            )
            .prependTo(o),
          r = e('<a href="#"></a>')
            .addClass("ui-dialog-titlebar-close ui-corner-all")
            .attr("role", "button")
            .hover(
              function () {
                r.addClass("ui-state-hover");
              },
              function () {
                r.removeClass("ui-state-hover");
              }
            )
            .focus(function () {
              r.addClass("ui-state-focus");
            })
            .blur(function () {
              r.removeClass("ui-state-focus");
            })
            .click(function (e) {
              return t.close(e), !1;
            })
            .appendTo(a);
        (t.uiDialogTitlebarCloseText = e("<span></span>"))
          .addClass("ui-icon ui-icon-closethick")
          .text(i.closeText)
          .appendTo(r),
          e("<span></span>")
            .addClass("ui-dialog-title")
            .attr("id", n)
            .html(s)
            .prependTo(a),
          e.isFunction(i.beforeclose) &&
            !e.isFunction(i.beforeClose) &&
            (i.beforeClose = i.beforeclose),
          a.find("*").add(a).disableSelection(),
          i.draggable && e.fn.draggable && t._makeDraggable(),
          i.resizable && e.fn.resizable && t._makeResizable(),
          t._createButtons(i.buttons),
          (t._isOpen = !1),
          e.fn.bgiframe && o.bgiframe();
      },
      _init: function () {
        this.options.autoOpen && this.open();
      },
      destroy: function () {
        var e = this;
        return (
          e.overlay && e.overlay.destroy(),
          e.uiDialog.hide(),
          e.element
            .unbind(".dialog")
            .removeData("dialog")
            .removeClass("ui-dialog-content ui-widget-content")
            .hide()
            .appendTo("body"),
          e.uiDialog.remove(),
          e.originalTitle && e.element.attr("title", e.originalTitle),
          e
        );
      },
      widget: function () {
        return this.uiDialog;
      },
      close: function (t) {
        var i,
          s,
          n = this;
        if (!1 !== n._trigger("beforeClose", t))
          return (
            n.overlay && n.overlay.destroy(),
            n.uiDialog.unbind("keypress.ui-dialog"),
            (n._isOpen = !1),
            n.options.hide
              ? n.uiDialog.hide(n.options.hide, function () {
                  n._trigger("close", t);
                })
              : (n.uiDialog.hide(), n._trigger("close", t)),
            e.ui.dialog.overlay.resize(),
            n.options.modal &&
              ((i = 0),
              e(".ui-dialog").each(function () {
                this !== n.uiDialog[0] &&
                  ((s = e(this).css("z-index")),
                  isNaN(s) || (i = Math.max(i, s)));
              }),
              (e.ui.dialog.maxZ = i)),
            n
          );
      },
      isOpen: function () {
        return this._isOpen;
      },
      moveToTop: function (t, i) {
        var s = this,
          n = s.options;
        return (n.modal && !t) || (!n.stack && !n.modal)
          ? s._trigger("focus", i)
          : (n.zIndex > e.ui.dialog.maxZ && (e.ui.dialog.maxZ = n.zIndex),
            s.overlay &&
              ((e.ui.dialog.maxZ += 1),
              s.overlay.$el.css(
                "z-index",
                (e.ui.dialog.overlay.maxZ = e.ui.dialog.maxZ)
              )),
            (t = {
              scrollTop: s.element.attr("scrollTop"),
              scrollLeft: s.element.attr("scrollLeft"),
            }),
            (e.ui.dialog.maxZ += 1),
            s.uiDialog.css("z-index", e.ui.dialog.maxZ),
            s.element.attr(t),
            s._trigger("focus", i),
            s);
      },
      open: function () {
        if (!this._isOpen) {
          var t = this,
            i = t.options,
            s = t.uiDialog;
          return (
            (t.overlay = i.modal ? new e.ui.dialog.overlay(t) : null),
            t._size(),
            t._position(i.position),
            s.show(i.show),
            t.moveToTop(!0),
            i.modal &&
              s.bind("keypress.ui-dialog", function (t) {
                if (t.keyCode === e.ui.keyCode.TAB) {
                  var i = e(":tabbable", this),
                    s = i.filter(":first");
                  if (
                    ((i = i.filter(":last")), t.target === i[0] && !t.shiftKey)
                  )
                    return s.focus(1), !1;
                  if (t.target === s[0] && t.shiftKey) return i.focus(1), !1;
                }
              }),
            e(
              t.element
                .find(":tabbable")
                .get()
                .concat(
                  s
                    .find(".ui-dialog-buttonpane :tabbable")
                    .get()
                    .concat(s.get())
                )
            )
              .eq(0)
              .focus(),
            (t._isOpen = !0),
            t._trigger("open"),
            t
          );
        }
      },
      _createButtons: function (t) {
        var i = this,
          s = !1,
          n = e("<div></div>").addClass(
            "ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"
          ),
          o = e("<div></div>").addClass("ui-dialog-buttonset").appendTo(n);
        i.uiDialog.find(".ui-dialog-buttonpane").remove(),
          "object" == typeof t &&
            null !== t &&
            e.each(t, function () {
              return !(s = !0);
            }),
          s &&
            (e.each(t, function (t, s) {
              (s = e.isFunction(s) ? { click: s, text: t } : s),
                (t = e('<button type="button"></button>')
                  .attr(s, !0)
                  .unbind("click")
                  .click(function () {
                    s.click.apply(i.element[0], arguments);
                  })
                  .appendTo(o)),
                e.fn.button && t.button();
            }),
            n.appendTo(i.uiDialog));
      },
      _makeDraggable: function () {
        function t(e) {
          return { position: e.position, offset: e.offset };
        }
        var i,
          s = this,
          n = s.options,
          o = e(document);
        s.uiDialog.draggable({
          cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
          handle: ".ui-dialog-titlebar",
          containment: "document",
          start: function (o, a) {
            (i = "auto" === n.height ? "auto" : e(this).height()),
              e(this).height(e(this).height()).addClass("ui-dialog-dragging"),
              s._trigger("dragStart", o, t(a));
          },
          drag: function (e, i) {
            s._trigger("drag", e, t(i));
          },
          stop: function (a, r) {
            (n.position = [
              r.position.left - o.scrollLeft(),
              r.position.top - o.scrollTop(),
            ]),
              e(this).removeClass("ui-dialog-dragging").height(i),
              s._trigger("dragStop", a, t(r)),
              e.ui.dialog.overlay.resize();
          },
        });
      },
      _makeResizable: function (t) {
        function i(e) {
          return {
            originalPosition: e.originalPosition,
            originalSize: e.originalSize,
            position: e.position,
            size: e.size,
          };
        }
        t = void 0 === t ? this.options.resizable : t;
        var s = this,
          n = s.options,
          o = s.uiDialog.css("position");
        (t = "string" == typeof t ? t : "n,e,s,w,se,sw,ne,nw"),
          s.uiDialog
            .resizable({
              cancel: ".ui-dialog-content",
              containment: "document",
              alsoResize: s.element,
              maxWidth: n.maxWidth,
              maxHeight: n.maxHeight,
              minWidth: n.minWidth,
              minHeight: s._minHeight(),
              handles: t,
              start: function (t, n) {
                e(this).addClass("ui-dialog-resizing"),
                  s._trigger("resizeStart", t, i(n));
              },
              resize: function (e, t) {
                s._trigger("resize", e, i(t));
              },
              stop: function (t, o) {
                e(this).removeClass("ui-dialog-resizing"),
                  (n.height = e(this).height()),
                  (n.width = e(this).width()),
                  s._trigger("resizeStop", t, i(o)),
                  e.ui.dialog.overlay.resize();
              },
            })
            .css("position", o)
            .find(".ui-resizable-se")
            .addClass("ui-icon ui-icon-grip-diagonal-se");
      },
      _minHeight: function () {
        var e = this.options;
        return "auto" === e.height
          ? e.minHeight
          : Math.min(e.minHeight, e.height);
      },
      _position: function (t) {
        var i,
          s = [],
          n = [0, 0];
        t
          ? (("string" == typeof t || ("object" == typeof t && "0" in t)) &&
              (1 === (s = t.split ? t.split(" ") : [t[0], t[1]]).length &&
                (s[1] = s[0]),
              e.each(["left", "top"], function (e, t) {
                +s[e] === s[e] && ((n[e] = s[e]), (s[e] = t));
              }),
              (t = { my: s.join(" "), at: s.join(" "), offset: n.join(" ") })),
            (t = e.extend({}, e.ui.dialog.prototype.options.position, t)))
          : (t = e.ui.dialog.prototype.options.position),
          (i = this.uiDialog.is(":visible")) || this.uiDialog.show(),
          this.uiDialog
            .css({ top: 0, left: 0 })
            .position(e.extend({ of: window }, t)),
          i || this.uiDialog.hide();
      },
      _setOptions: function (t) {
        var n = this,
          o = {},
          a = !1;
        e.each(t, function (e, t) {
          n._setOption(e, t), e in i && (a = !0), e in s && (o[e] = t);
        }),
          a && this._size(),
          this.uiDialog.is(":data(resizable)") &&
            this.uiDialog.resizable("option", o);
      },
      _setOption: function (t, i) {
        var s = this,
          n = s.uiDialog;
        switch (t) {
          case "beforeclose":
            t = "beforeClose";
            break;
          case "buttons":
            s._createButtons(i);
            break;
          case "closeText":
            s.uiDialogTitlebarCloseText.text("" + i);
            break;
          case "dialogClass":
            n.removeClass(s.options.dialogClass).addClass(
              "ui-dialog ui-widget ui-widget-content ui-corner-all " + i
            );
            break;
          case "disabled":
            i
              ? n.addClass("ui-dialog-disabled")
              : n.removeClass("ui-dialog-disabled");
            break;
          case "draggable":
            var o = n.is(":data(draggable)");
            o && !i && n.draggable("destroy"), !o && i && s._makeDraggable();
            break;
          case "position":
            s._position(i);
            break;
          case "resizable":
            (o = n.is(":data(resizable)")) && !i && n.resizable("destroy"),
              o && "string" == typeof i && n.resizable("option", "handles", i),
              !o && !1 !== i && s._makeResizable(i);
            break;
          case "title":
            e(".ui-dialog-title", s.uiDialogTitlebar).html(
              "" + (i || "&#160;")
            );
        }
        e.Widget.prototype._setOption.apply(s, arguments);
      },
      _size: function () {
        var t,
          i,
          s = this.options,
          n = this.uiDialog.is(":visible");
        this.element.show().css({ width: "auto", minHeight: 0, height: 0 }),
          s.minWidth > s.width && (s.width = s.minWidth),
          (t = this.uiDialog.css({ height: "auto", width: s.width }).height()),
          (i = Math.max(0, s.minHeight - t)),
          "auto" === s.height
            ? e.support.minHeight
              ? this.element.css({ minHeight: i, height: "auto" })
              : (this.uiDialog.show(),
                (s = this.element.css("height", "auto").height()),
                n || this.uiDialog.hide(),
                this.element.height(Math.max(s, i)))
            : this.element.height(Math.max(s.height - t, 0)),
          this.uiDialog.is(":data(resizable)") &&
            this.uiDialog.resizable("option", "minHeight", this._minHeight());
      },
    }),
      e.extend(e.ui.dialog, {
        version: "1.8.9",
        uuid: 0,
        maxZ: 0,
        getTitleId: function (e) {
          return (
            (e = e.attr("id")) || ((this.uuid += 1), (e = this.uuid)),
            "ui-dialog-title-" + e
          );
        },
        overlay: function (t) {
          this.$el = e.ui.dialog.overlay.create(t);
        },
      }),
      e.extend(e.ui.dialog.overlay, {
        instances: [],
        oldInstances: [],
        maxZ: 0,
        events: e
          .map(
            "focus,mousedown,mouseup,keydown,keypress,click".split(","),
            function (e) {
              return e + ".dialog-overlay";
            }
          )
          .join(" "),
        create: function (t) {
          0 === this.instances.length &&
            (setTimeout(function () {
              e.ui.dialog.overlay.instances.length &&
                e(document).bind(e.ui.dialog.overlay.events, function (t) {
                  if (e(t.target).zIndex() < e.ui.dialog.overlay.maxZ)
                    return !1;
                });
            }, 1),
            e(document).bind("keydown.dialog-overlay", function (i) {
              t.options.closeOnEscape &&
                i.keyCode &&
                i.keyCode === e.ui.keyCode.ESCAPE &&
                (t.close(i), i.preventDefault());
            }),
            e(window).bind(
              "resize.dialog-overlay",
              e.ui.dialog.overlay.resize
            ));
          var i = (
            this.oldInstances.pop() ||
            e("<div></div>").addClass("ui-widget-overlay")
          )
            .appendTo(document.body)
            .css({ width: this.width(), height: this.height() });
          return e.fn.bgiframe && i.bgiframe(), this.instances.push(i), i;
        },
        destroy: function (t) {
          var i = e.inArray(t, this.instances);
          -1 != i && this.oldInstances.push(this.instances.splice(i, 1)[0]),
            0 === this.instances.length &&
              e([document, window]).unbind(".dialog-overlay"),
            t.remove();
          var s = 0;
          e.each(this.instances, function () {
            s = Math.max(s, this.css("z-index"));
          }),
            (this.maxZ = s);
        },
        height: function () {
          var t;
          return e.browser.msie && e.browser.version < 7
            ? (t = Math.max(
                document.documentElement.scrollHeight,
                document.body.scrollHeight
              )) <
              Math.max(
                document.documentElement.offsetHeight,
                document.body.offsetHeight
              )
              ? e(window).height() + "px"
              : t + "px"
            : e(document).height() + "px";
        },
        width: function () {
          var t;
          return e.browser.msie && e.browser.version < 7
            ? (t = Math.max(
                document.documentElement.scrollWidth,
                document.body.scrollWidth
              )) <
              Math.max(
                document.documentElement.offsetWidth,
                document.body.offsetWidth
              )
              ? e(window).width() + "px"
              : t + "px"
            : e(document).width() + "px";
        },
        resize: function () {
          var t = e([]);
          e.each(e.ui.dialog.overlay.instances, function () {
            t = t.add(this);
          }),
            t.css({ width: 0, height: 0 }).css({
              width: e.ui.dialog.overlay.width(),
              height: e.ui.dialog.overlay.height(),
            });
        },
      }),
      e.extend(e.ui.dialog.overlay.prototype, {
        destroy: function () {
          e.ui.dialog.overlay.destroy(this.$el);
        },
      });
  })(jQuery),
  (function (e) {
    e.ui = e.ui || {};
    var t = /left|center|right/,
      i = /top|center|bottom/,
      s = e.fn.position,
      n = e.fn.offset;
    (e.fn.position = function (n) {
      if (!n || !n.of) return s.apply(this, arguments);
      n = e.extend({}, n);
      var o,
        a,
        r,
        l = e(n.of),
        h = l[0],
        c = (n.collision || "flip").split(" "),
        u = n.offset ? n.offset.split(" ") : [0, 0];
      return (
        9 === h.nodeType
          ? ((o = l.width()), (a = l.height()), (r = { top: 0, left: 0 }))
          : h.setTimeout
          ? ((o = l.width()),
            (a = l.height()),
            (r = { top: l.scrollTop(), left: l.scrollLeft() }))
          : h.preventDefault
          ? ((n.at = "left top"),
            (o = a = 0),
            (r = { top: n.of.pageY, left: n.of.pageX }))
          : ((o = l.outerWidth()), (a = l.outerHeight()), (r = l.offset())),
        e.each(["my", "at"], function () {
          var e = (n[this] || "").split(" ");
          1 === e.length &&
            (e = t.test(e[0])
              ? e.concat(["center"])
              : i.test(e[0])
              ? ["center"].concat(e)
              : ["center", "center"]),
            (e[0] = t.test(e[0]) ? e[0] : "center"),
            (e[1] = i.test(e[1]) ? e[1] : "center"),
            (n[this] = e);
        }),
        1 === c.length && (c[1] = c[0]),
        (u[0] = parseInt(u[0], 10) || 0),
        1 === u.length && (u[1] = u[0]),
        (u[1] = parseInt(u[1], 10) || 0),
        "right" === n.at[0]
          ? (r.left += o)
          : "center" === n.at[0] && (r.left += o / 2),
        "bottom" === n.at[1]
          ? (r.top += a)
          : "center" === n.at[1] && (r.top += a / 2),
        (r.left += u[0]),
        (r.top += u[1]),
        this.each(function () {
          var t,
            i = e(this),
            s = i.outerWidth(),
            l = i.outerHeight(),
            h = parseInt(e.curCSS(this, "marginLeft", !0)) || 0,
            d = parseInt(e.curCSS(this, "marginTop", !0)) || 0,
            p = s + h + (parseInt(e.curCSS(this, "marginRight", !0)) || 0),
            f = l + d + (parseInt(e.curCSS(this, "marginBottom", !0)) || 0),
            g = e.extend({}, r);
          "right" === n.my[0]
            ? (g.left -= s)
            : "center" === n.my[0] && (g.left -= s / 2),
            "bottom" === n.my[1]
              ? (g.top -= l)
              : "center" === n.my[1] && (g.top -= l / 2),
            (g.left = Math.round(g.left)),
            (g.top = Math.round(g.top)),
            (t = { left: g.left - h, top: g.top - d }),
            e.each(["left", "top"], function (i, r) {
              e.ui.position[c[i]] &&
                e.ui.position[c[i]][r](g, {
                  targetWidth: o,
                  targetHeight: a,
                  elemWidth: s,
                  elemHeight: l,
                  collisionPosition: t,
                  collisionWidth: p,
                  collisionHeight: f,
                  offset: u,
                  my: n.my,
                  at: n.at,
                });
            }),
            e.fn.bgiframe && i.bgiframe(),
            i.offset(e.extend(g, { using: n.using }));
        })
      );
    }),
      (e.ui.position = {
        fit: {
          left: function (t, i) {
            var s = e(window);
            (s =
              i.collisionPosition.left +
              i.collisionWidth -
              s.width() -
              s.scrollLeft()),
              (t.left =
                s > 0
                  ? t.left - s
                  : Math.max(t.left - i.collisionPosition.left, t.left));
          },
          top: function (t, i) {
            var s = e(window);
            (s =
              i.collisionPosition.top +
              i.collisionHeight -
              s.height() -
              s.scrollTop()),
              (t.top =
                s > 0
                  ? t.top - s
                  : Math.max(t.top - i.collisionPosition.top, t.top));
          },
        },
        flip: {
          left: function (t, i) {
            if ("center" !== i.at[0]) {
              var s = e(window);
              s =
                i.collisionPosition.left +
                i.collisionWidth -
                s.width() -
                s.scrollLeft();
              var n =
                  "left" === i.my[0]
                    ? -i.elemWidth
                    : "right" === i.my[0]
                    ? i.elemWidth
                    : 0,
                o = "left" === i.at[0] ? i.targetWidth : -i.targetWidth,
                a = -2 * i.offset[0];
              t.left +=
                i.collisionPosition.left < 0
                  ? n + o + a
                  : s > 0
                  ? n + o + a
                  : 0;
            }
          },
          top: function (t, i) {
            if ("center" !== i.at[1]) {
              var s = e(window);
              s =
                i.collisionPosition.top +
                i.collisionHeight -
                s.height() -
                s.scrollTop();
              var n =
                  "top" === i.my[1]
                    ? -i.elemHeight
                    : "bottom" === i.my[1]
                    ? i.elemHeight
                    : 0,
                o = "top" === i.at[1] ? i.targetHeight : -i.targetHeight,
                a = -2 * i.offset[1];
              t.top +=
                i.collisionPosition.top < 0 ? n + o + a : s > 0 ? n + o + a : 0;
            }
          },
        },
      }),
      e.offset.setOffset ||
        ((e.offset.setOffset = function (t, i) {
          /static/.test(e.curCSS(t, "position")) &&
            (t.style.position = "relative");
          var s = e(t),
            n = s.offset(),
            o = parseInt(e.curCSS(t, "top", !0), 10) || 0,
            a = parseInt(e.curCSS(t, "left", !0), 10) || 0;
          (n = { top: i.top - n.top + o, left: i.left - n.left + a }),
            "using" in i ? i.using.call(t, n) : s.css(n);
        }),
        (e.fn.offset = function (t) {
          var i = this[0];
          return i && i.ownerDocument
            ? t
              ? this.each(function () {
                  e.offset.setOffset(this, t);
                })
              : n.call(this)
            : null;
        }));
  })(jQuery),
  (function (e, t) {
    e.widget("ui.progressbar", {
      options: { value: 0, max: 100 },
      min: 0,
      _create: function () {
        this.element
          .addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all")
          .attr({
            role: "progressbar",
            "aria-valuemin": this.min,
            "aria-valuemax": this.options.max,
            "aria-valuenow": this._value(),
          }),
          (this.valueDiv = e(
            "<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>"
          ).appendTo(this.element)),
          (this.oldValue = this._value()),
          this._refreshValue();
      },
      destroy: function () {
        this.element
          .removeClass(
            "ui-progressbar ui-widget ui-widget-content ui-corner-all"
          )
          .removeAttr("role")
          .removeAttr("aria-valuemin")
          .removeAttr("aria-valuemax")
          .removeAttr("aria-valuenow"),
          this.valueDiv.remove(),
          e.Widget.prototype.destroy.apply(this, arguments);
      },
      value: function (e) {
        return void 0 === e
          ? this._value()
          : (this._setOption("value", e), this);
      },
      _setOption: function (t, i) {
        "value" === t &&
          ((this.options.value = i),
          this._refreshValue(),
          this._value() === this.options.max && this._trigger("complete")),
          e.Widget.prototype._setOption.apply(this, arguments);
      },
      _value: function () {
        var e = this.options.value;
        return (
          "number" != typeof e && (e = 0),
          Math.min(this.options.max, Math.max(this.min, e))
        );
      },
      _percentage: function () {
        return (100 * this._value()) / this.options.max;
      },
      _refreshValue: function () {
        var e = this.value(),
          t = this._percentage();
        this.oldValue !== e && ((this.oldValue = e), this._trigger("change")),
          this.valueDiv
            .toggleClass("ui-corner-right", e === this.options.max)
            .width(t.toFixed(0) + "%"),
          this.element.attr("aria-valuenow", e);
      },
    }),
      e.extend(e.ui.progressbar, { version: "1.8.9" });
  })(jQuery),
  (function (e) {
    e.widget("ui.slider", e.ui.mouse, {
      widgetEventPrefix: "slide",
      options: {
        animate: !1,
        distance: 0,
        max: 100,
        min: 0,
        orientation: "horizontal",
        range: !1,
        step: 1,
        value: 0,
        values: null,
      },
      _create: function () {
        var t = this,
          i = this.options;
        if (
          ((this._mouseSliding = this._keySliding = !1),
          (this._animateOff = !0),
          (this._handleIndex = null),
          this._detectOrientation(),
          this._mouseInit(),
          this.element.addClass(
            "ui-slider ui-slider-" +
              this.orientation +
              " ui-widget ui-widget-content ui-corner-all"
          ),
          i.disabled && this.element.addClass("ui-slider-disabled ui-disabled"),
          (this.range = e([])),
          i.range &&
            (!0 === i.range
              ? ((this.range = e("<div></div>")),
                i.values || (i.values = [this._valueMin(), this._valueMin()]),
                i.values.length &&
                  2 !== i.values.length &&
                  (i.values = [i.values[0], i.values[0]]))
              : (this.range = e("<div></div>")),
            this.range.appendTo(this.element).addClass("ui-slider-range"),
            ("min" !== i.range && "max" !== i.range) ||
              this.range.addClass("ui-slider-range-" + i.range),
            this.range.addClass("ui-widget-header")),
          0 === e(".ui-slider-handle", this.element).length &&
            e("<a href='#'></a>")
              .appendTo(this.element)
              .addClass("ui-slider-handle"),
          i.values && i.values.length)
        )
          for (
            ;
            e(".ui-slider-handle", this.element).length < i.values.length;

          )
            e("<a href='#'></a>")
              .appendTo(this.element)
              .addClass("ui-slider-handle");
        (this.handles = e(".ui-slider-handle", this.element).addClass(
          "ui-state-default ui-corner-all"
        )),
          (this.handle = this.handles.eq(0)),
          this.handles
            .add(this.range)
            .filter("a")
            .click(function (e) {
              e.preventDefault();
            })
            .hover(
              function () {
                i.disabled || e(this).addClass("ui-state-hover");
              },
              function () {
                e(this).removeClass("ui-state-hover");
              }
            )
            .focus(function () {
              i.disabled
                ? e(this).blur()
                : (e(".ui-slider .ui-state-focus").removeClass(
                    "ui-state-focus"
                  ),
                  e(this).addClass("ui-state-focus"));
            })
            .blur(function () {
              e(this).removeClass("ui-state-focus");
            }),
          this.handles.each(function (t) {
            e(this).data("index.ui-slider-handle", t);
          }),
          this.handles
            .keydown(function (i) {
              var s,
                n,
                o,
                a = !0,
                r = e(this).data("index.ui-slider-handle");
              if (!t.options.disabled) {
                switch (i.keyCode) {
                  case e.ui.keyCode.HOME:
                  case e.ui.keyCode.END:
                  case e.ui.keyCode.PAGE_UP:
                  case e.ui.keyCode.PAGE_DOWN:
                  case e.ui.keyCode.UP:
                  case e.ui.keyCode.RIGHT:
                  case e.ui.keyCode.DOWN:
                  case e.ui.keyCode.LEFT:
                    if (
                      ((a = !1),
                      !t._keySliding &&
                        ((t._keySliding = !0),
                        e(this).addClass("ui-state-active"),
                        !1 === (s = t._start(i, r))))
                    )
                      return;
                }
                switch (
                  ((o = t.options.step),
                  (s = n =
                    t.options.values && t.options.values.length
                      ? t.values(r)
                      : t.value()),
                  i.keyCode)
                ) {
                  case e.ui.keyCode.HOME:
                    n = t._valueMin();
                    break;
                  case e.ui.keyCode.END:
                    n = t._valueMax();
                    break;
                  case e.ui.keyCode.PAGE_UP:
                    n = t._trimAlignValue(
                      s + (t._valueMax() - t._valueMin()) / 5
                    );
                    break;
                  case e.ui.keyCode.PAGE_DOWN:
                    n = t._trimAlignValue(
                      s - (t._valueMax() - t._valueMin()) / 5
                    );
                    break;
                  case e.ui.keyCode.UP:
                  case e.ui.keyCode.RIGHT:
                    if (s === t._valueMax()) return;
                    n = t._trimAlignValue(s + o);
                    break;
                  case e.ui.keyCode.DOWN:
                  case e.ui.keyCode.LEFT:
                    if (s === t._valueMin()) return;
                    n = t._trimAlignValue(s - o);
                }
                return t._slide(i, r, n), a;
              }
            })
            .keyup(function (i) {
              var s = e(this).data("index.ui-slider-handle");
              t._keySliding &&
                ((t._keySliding = !1),
                t._stop(i, s),
                t._change(i, s),
                e(this).removeClass("ui-state-active"));
            }),
          this._refreshValue(),
          (this._animateOff = !1);
      },
      destroy: function () {
        return (
          this.handles.remove(),
          this.range.remove(),
          this.element
            .removeClass(
              "ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all"
            )
            .removeData("slider")
            .unbind(".slider"),
          this._mouseDestroy(),
          this
        );
      },
      _mouseCapture: function (t) {
        var i,
          s,
          n,
          o,
          a,
          r = this.options;
        return (
          !r.disabled &&
          ((this.elementSize = {
            width: this.element.outerWidth(),
            height: this.element.outerHeight(),
          }),
          (this.elementOffset = this.element.offset()),
          (i = this._normValueFromMouse({ x: t.pageX, y: t.pageY })),
          (s = this._valueMax() - this._valueMin() + 1),
          (o = this),
          this.handles.each(function (t) {
            var r = Math.abs(i - o.values(t));
            s > r && ((s = r), (n = e(this)), (a = t));
          }),
          !0 === r.range &&
            this.values(1) === r.min &&
            ((a += 1), (n = e(this.handles[a]))),
          !1 !== this._start(t, a) &&
            ((this._mouseSliding = !0),
            (o._handleIndex = a),
            n.addClass("ui-state-active").focus(),
            (r = n.offset()),
            (this._clickOffset = e(t.target)
              .parents()
              .andSelf()
              .is(".ui-slider-handle")
              ? {
                  left: t.pageX - r.left - n.width() / 2,
                  top:
                    t.pageY -
                    r.top -
                    n.height() / 2 -
                    (parseInt(n.css("borderTopWidth"), 10) || 0) -
                    (parseInt(n.css("borderBottomWidth"), 10) || 0) +
                    (parseInt(n.css("marginTop"), 10) || 0),
                }
              : { left: 0, top: 0 }),
            this.handles.hasClass("ui-state-hover") || this._slide(t, a, i),
            (this._animateOff = !0)))
        );
      },
      _mouseStart: function () {
        return !0;
      },
      _mouseDrag: function (e) {
        var t = this._normValueFromMouse({ x: e.pageX, y: e.pageY });
        return this._slide(e, this._handleIndex, t), !1;
      },
      _mouseStop: function (e) {
        return (
          this.handles.removeClass("ui-state-active"),
          (this._mouseSliding = !1),
          this._stop(e, this._handleIndex),
          this._change(e, this._handleIndex),
          (this._clickOffset = this._handleIndex = null),
          (this._animateOff = !1)
        );
      },
      _detectOrientation: function () {
        this.orientation =
          "vertical" === this.options.orientation ? "vertical" : "horizontal";
      },
      _normValueFromMouse: function (e) {
        var t;
        return (
          "horizontal" === this.orientation
            ? ((t = this.elementSize.width),
              (e =
                e.x -
                this.elementOffset.left -
                (this._clickOffset ? this._clickOffset.left : 0)))
            : ((t = this.elementSize.height),
              (e =
                e.y -
                this.elementOffset.top -
                (this._clickOffset ? this._clickOffset.top : 0))),
          (t = e / t) > 1 && (t = 1),
          t < 0 && (t = 0),
          "vertical" === this.orientation && (t = 1 - t),
          (e = this._valueMax() - this._valueMin()),
          this._trimAlignValue(this._valueMin() + t * e)
        );
      },
      _start: function (e, t) {
        var i = { handle: this.handles[t], value: this.value() };
        return (
          this.options.values &&
            this.options.values.length &&
            ((i.value = this.values(t)), (i.values = this.values())),
          this._trigger("start", e, i)
        );
      },
      _slide: function (e, t, i) {
        var s;
        this.options.values && this.options.values.length
          ? ((s = this.values(t ? 0 : 1)),
            2 === this.options.values.length &&
              !0 === this.options.range &&
              ((0 === t && i > s) || (1 === t && i < s)) &&
              (i = s),
            i !== this.values(t) &&
              (((s = this.values())[t] = i),
              (e = this._trigger("slide", e, {
                handle: this.handles[t],
                value: i,
                values: s,
              })),
              this.values(t ? 0 : 1),
              !1 !== e && this.values(t, i, !0)))
          : i !== this.value() &&
            !1 !==
              (e = this._trigger("slide", e, {
                handle: this.handles[t],
                value: i,
              })) &&
            this.value(i);
      },
      _stop: function (e, t) {
        var i = { handle: this.handles[t], value: this.value() };
        this.options.values &&
          this.options.values.length &&
          ((i.value = this.values(t)), (i.values = this.values())),
          this._trigger("stop", e, i);
      },
      _change: function (e, t) {
        if (!this._keySliding && !this._mouseSliding) {
          var i = { handle: this.handles[t], value: this.value() };
          this.options.values &&
            this.options.values.length &&
            ((i.value = this.values(t)), (i.values = this.values())),
            this._trigger("change", e, i);
        }
      },
      value: function (e) {
        return (
          arguments.length &&
            ((this.options.value = this._trimAlignValue(e)),
            this._refreshValue(),
            this._change(null, 0)),
          this._value()
        );
      },
      values: function (t, i) {
        var s, n, o;
        if (
          (arguments.length > 1 &&
            ((this.options.values[t] = this._trimAlignValue(i)),
            this._refreshValue(),
            this._change(null, t)),
          !arguments.length)
        )
          return this._values();
        if (!e.isArray(arguments[0]))
          return this.options.values && this.options.values.length
            ? this._values(t)
            : this.value();
        for (
          s = this.options.values, n = arguments[0], o = 0;
          o < s.length;
          o += 1
        )
          (s[o] = this._trimAlignValue(n[o])), this._change(null, o);
        this._refreshValue();
      },
      _setOption: function (t, i) {
        var s,
          n = 0;
        switch (
          (e.isArray(this.options.values) && (n = this.options.values.length),
          e.Widget.prototype._setOption.apply(this, arguments),
          t)
        ) {
          case "disabled":
            i
              ? (this.handles.filter(".ui-state-focus").blur(),
                this.handles.removeClass("ui-state-hover"),
                this.handles.attr("disabled", "disabled"),
                this.element.addClass("ui-disabled"))
              : (this.handles.removeAttr("disabled"),
                this.element.removeClass("ui-disabled"));
            break;
          case "orientation":
            this._detectOrientation(),
              this.element
                .removeClass("ui-slider-horizontal ui-slider-vertical")
                .addClass("ui-slider-" + this.orientation),
              this._refreshValue();
            break;
          case "value":
            (this._animateOff = !0),
              this._refreshValue(),
              this._change(null, 0),
              (this._animateOff = !1);
            break;
          case "values":
            for (
              this._animateOff = !0, this._refreshValue(), s = 0;
              s < n;
              s += 1
            )
              this._change(null, s);
            this._animateOff = !1;
        }
      },
      _value: function () {
        var e = this.options.value;
        return this._trimAlignValue(e);
      },
      _values: function (e) {
        var t, i;
        if (arguments.length)
          return (t = this.options.values[e]), this._trimAlignValue(t);
        for (t = this.options.values.slice(), i = 0; i < t.length; i += 1)
          t[i] = this._trimAlignValue(t[i]);
        return t;
      },
      _trimAlignValue: function (e) {
        if (e <= this._valueMin()) return this._valueMin();
        if (e >= this._valueMax()) return this._valueMax();
        var t = this.options.step > 0 ? this.options.step : 1,
          i = (e - this._valueMin()) % t;
        return (
          (alignValue = e - i),
          2 * Math.abs(i) >= t && (alignValue += i > 0 ? t : -t),
          parseFloat(alignValue.toFixed(5))
        );
      },
      _valueMin: function () {
        return this.options.min;
      },
      _valueMax: function () {
        return this.options.max;
      },
      _refreshValue: function () {
        var t,
          i,
          s,
          n,
          o,
          a = this.options.range,
          r = this.options,
          l = this,
          h = !this._animateOff && r.animate,
          c = {};
        this.options.values && this.options.values.length
          ? this.handles.each(function (s) {
              (t =
                ((l.values(s) - l._valueMin()) /
                  (l._valueMax() - l._valueMin())) *
                100),
                (c["horizontal" === l.orientation ? "left" : "bottom"] =
                  t + "%"),
                e(this).stop(1, 1)[h ? "animate" : "css"](c, r.animate),
                !0 === l.options.range &&
                  ("horizontal" === l.orientation
                    ? (0 === s &&
                        l.range
                          .stop(1, 1)
                          [h ? "animate" : "css"]({ left: t + "%" }, r.animate),
                      1 === s &&
                        l.range[h ? "animate" : "css"](
                          { width: t - i + "%" },
                          { queue: !1, duration: r.animate }
                        ))
                    : (0 === s &&
                        l.range
                          .stop(1, 1)
                          [h ? "animate" : "css"](
                            { bottom: t + "%" },
                            r.animate
                          ),
                      1 === s &&
                        l.range[h ? "animate" : "css"](
                          { height: t - i + "%" },
                          { queue: !1, duration: r.animate }
                        ))),
                (i = t);
            })
          : ((s = this.value()),
            (n = this._valueMin()),
            (o = this._valueMax()),
            (t = o !== n ? ((s - n) / (o - n)) * 100 : 0),
            (c["horizontal" === l.orientation ? "left" : "bottom"] = t + "%"),
            this.handle.stop(1, 1)[h ? "animate" : "css"](c, r.animate),
            "min" === a &&
              "horizontal" === this.orientation &&
              this.range
                .stop(1, 1)
                [h ? "animate" : "css"]({ width: t + "%" }, r.animate),
            "max" === a &&
              "horizontal" === this.orientation &&
              this.range[h ? "animate" : "css"](
                { width: 100 - t + "%" },
                { queue: !1, duration: r.animate }
              ),
            "min" === a &&
              "vertical" === this.orientation &&
              this.range
                .stop(1, 1)
                [h ? "animate" : "css"]({ height: t + "%" }, r.animate),
            "max" === a &&
              "vertical" === this.orientation &&
              this.range[h ? "animate" : "css"](
                { height: 100 - t + "%" },
                { queue: !1, duration: r.animate }
              ));
      },
    }),
      e.extend(e.ui.slider, { version: "1.8.9" });
  })(jQuery),
  (function (e, i) {
    var s = 0,
      n = 0;
    e.widget("ui.tabs", {
      options: {
        add: null,
        ajaxOptions: null,
        cache: !1,
        cookie: null,
        collapsible: !1,
        disable: null,
        disabled: [],
        enable: null,
        event: "click",
        fx: null,
        idPrefix: "ui-tabs-",
        load: null,
        panelTemplate: "<div></div>",
        remove: null,
        select: null,
        show: null,
        spinner: "<em>Loading&#8230;</em>",
        tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>",
      },
      _create: function () {
        this._tabify(!0);
      },
      _setOption: function (e, t) {
        "selected" == e
          ? (this.options.collapsible && t == this.options.selected) ||
            this.select(t)
          : ((this.options[e] = t), this._tabify());
      },
      _tabId: function (e) {
        return (
          (e.title &&
            e.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF-]/g, "")) ||
          this.options.idPrefix + ++s
        );
      },
      _sanitizeSelector: function (e) {
        return e.replace(/:/g, "\\:");
      },
      _cookie: function () {
        var t =
          this.cookie ||
          (this.cookie = this.options.cookie.name || "ui-tabs-" + ++n);
        return e.cookie.apply(null, [t].concat(e.makeArray(arguments)));
      },
      _ui: function (e, t) {
        return { tab: e, panel: t, index: this.anchors.index(e) };
      },
      _cleanup: function () {
        this.lis
          .filter(".ui-state-processing")
          .removeClass("ui-state-processing")
          .find("span:data(label.tabs)")
          .each(function () {
            var t = e(this);
            t.html(t.data("label.tabs")).removeData("label.tabs");
          });
      },
      _tabify: function (t) {
        function s(t, i) {
          t.css("display", ""),
            !e.support.opacity &&
              i.opacity &&
              t[0].style.removeAttribute("filter");
        }
        var n,
          o,
          a,
          r = this,
          l = this.options,
          h = /^#.+/;
        for (
          this.list = this.element.find("ol,ul").eq(0),
            this.lis = e(" > li:has(a[href])", this.list),
            this.anchors = this.lis.map(function () {
              return e("a", this)[0];
            }),
            this.panels = e([]),
            this.anchors.each(function (t, i) {
              var s,
                n = e(i).attr("href"),
                o = n.split("#")[0];
              o &&
                (o === location.toString().split("#")[0] ||
                  ((s = e("base")[0]) && o === s.href)) &&
                ((n = i.hash), (i.href = n)),
                h.test(n)
                  ? (r.panels = r.panels.add(
                      r.element.find(r._sanitizeSelector(n))
                    ))
                  : n && "#" !== n
                  ? (e.data(i, "href.tabs", n),
                    e.data(i, "load.tabs", n.replace(/#.*$/, "")),
                    (n = r._tabId(i)),
                    (i.href = "#" + n),
                    (i = r.element.find("#" + n)).length ||
                      (i = e(l.panelTemplate)
                        .attr("id", n)
                        .addClass(
                          "ui-tabs-panel ui-widget-content ui-corner-bottom"
                        )
                        .insertAfter(r.panels[t - 1] || r.list)).data(
                        "destroy.tabs",
                        !0
                      ),
                    (r.panels = r.panels.add(i)))
                  : l.disabled.push(t);
            }),
            t
              ? (this.element.addClass(
                  "ui-tabs ui-widget ui-widget-content ui-corner-all"
                ),
                this.list.addClass(
                  "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"
                ),
                this.lis.addClass("ui-state-default ui-corner-top"),
                this.panels.addClass(
                  "ui-tabs-panel ui-widget-content ui-corner-bottom"
                ),
                l.selected === i
                  ? (location.hash &&
                      this.anchors.each(function (e, t) {
                        if (t.hash == location.hash)
                          return (l.selected = e), !1;
                      }),
                    "number" != typeof l.selected &&
                      l.cookie &&
                      (l.selected = parseInt(r._cookie(), 10)),
                    "number" != typeof l.selected &&
                      this.lis.filter(".ui-tabs-selected").length &&
                      (l.selected = this.lis.index(
                        this.lis.filter(".ui-tabs-selected")
                      )),
                    (l.selected = l.selected || (this.lis.length ? 0 : -1)))
                  : null === l.selected && (l.selected = -1),
                (l.selected =
                  (l.selected >= 0 && this.anchors[l.selected]) ||
                  l.selected < 0
                    ? l.selected
                    : 0),
                (l.disabled = e
                  .unique(
                    l.disabled.concat(
                      e.map(
                        this.lis.filter(".ui-state-disabled"),
                        function (e) {
                          return r.lis.index(e);
                        }
                      )
                    )
                  )
                  .sort()),
                -1 != e.inArray(l.selected, l.disabled) &&
                  l.disabled.splice(e.inArray(l.selected, l.disabled), 1),
                this.panels.addClass("ui-tabs-hide"),
                this.lis.removeClass("ui-tabs-selected ui-state-active"),
                l.selected >= 0 &&
                  this.anchors.length &&
                  (r.element
                    .find(r._sanitizeSelector(r.anchors[l.selected].hash))
                    .removeClass("ui-tabs-hide"),
                  this.lis
                    .eq(l.selected)
                    .addClass("ui-tabs-selected ui-state-active"),
                  r.element.queue("tabs", function () {
                    r._trigger(
                      "show",
                      null,
                      r._ui(
                        r.anchors[l.selected],
                        r.element.find(
                          r._sanitizeSelector(r.anchors[l.selected].hash)
                        )[0]
                      )
                    );
                  }),
                  this.load(l.selected)),
                e(window).bind("unload", function () {
                  r.lis.add(r.anchors).unbind(".tabs"),
                    (r.lis = r.anchors = r.panels = null);
                }))
              : (l.selected = this.lis.index(
                  this.lis.filter(".ui-tabs-selected")
                )),
            this.element[l.collapsible ? "addClass" : "removeClass"](
              "ui-tabs-collapsible"
            ),
            l.cookie && this._cookie(l.selected, l.cookie),
            t = 0;
          (n = this.lis[t]);
          t++
        )
          e(n)[
            -1 == e.inArray(t, l.disabled) || e(n).hasClass("ui-tabs-selected")
              ? "removeClass"
              : "addClass"
          ]("ui-state-disabled");
        if (
          (!1 === l.cache && this.anchors.removeData("cache.tabs"),
          this.lis.add(this.anchors).unbind(".tabs"),
          "mouseover" !== l.event)
        ) {
          var c = function (e, t) {
              t.is(":not(.ui-state-disabled)") && t.addClass("ui-state-" + e);
            },
            u = function (e, t) {
              t.removeClass("ui-state-" + e);
            };
          this.lis.bind("mouseover.tabs", function () {
            c("hover", e(this));
          }),
            this.lis.bind("mouseout.tabs", function () {
              u("hover", e(this));
            }),
            this.anchors.bind("focus.tabs", function () {
              c("focus", e(this).closest("li"));
            }),
            this.anchors.bind("blur.tabs", function () {
              u("focus", e(this).closest("li"));
            });
        }
        l.fx &&
          (e.isArray(l.fx) ? ((o = l.fx[0]), (a = l.fx[1])) : (o = a = l.fx));
        var d = a
            ? function (t, i) {
                e(t).closest("li").addClass("ui-tabs-selected ui-state-active"),
                  i
                    .hide()
                    .removeClass("ui-tabs-hide")
                    .animate(a, a.duration || "normal", function () {
                      s(i, a), r._trigger("show", null, r._ui(t, i[0]));
                    });
              }
            : function (t, i) {
                e(t).closest("li").addClass("ui-tabs-selected ui-state-active"),
                  i.removeClass("ui-tabs-hide"),
                  r._trigger("show", null, r._ui(t, i[0]));
              },
          p = o
            ? function (e, t) {
                t.animate(o, o.duration || "normal", function () {
                  r.lis.removeClass("ui-tabs-selected ui-state-active"),
                    t.addClass("ui-tabs-hide"),
                    s(t, o),
                    r.element.dequeue("tabs");
                });
              }
            : function (e, t) {
                r.lis.removeClass("ui-tabs-selected ui-state-active"),
                  t.addClass("ui-tabs-hide"),
                  r.element.dequeue("tabs");
              };
        this.anchors.bind(l.event + ".tabs", function () {
          var t = this,
            i = e(t).closest("li"),
            s = r.panels.filter(":not(.ui-tabs-hide)"),
            n = r.element.find(r._sanitizeSelector(t.hash));
          if (
            (i.hasClass("ui-tabs-selected") && !l.collapsible) ||
            i.hasClass("ui-state-disabled") ||
            i.hasClass("ui-state-processing") ||
            r.panels.filter(":animated").length ||
            !1 === r._trigger("select", null, r._ui(this, n[0]))
          )
            return this.blur(), !1;
          if (
            ((l.selected = r.anchors.index(this)), r.abort(), l.collapsible)
          ) {
            if (i.hasClass("ui-tabs-selected"))
              return (
                (l.selected = -1),
                l.cookie && r._cookie(l.selected, l.cookie),
                r.element
                  .queue("tabs", function () {
                    p(t, s);
                  })
                  .dequeue("tabs"),
                this.blur(),
                !1
              );
            if (!s.length)
              return (
                l.cookie && r._cookie(l.selected, l.cookie),
                r.element.queue("tabs", function () {
                  d(t, n);
                }),
                r.load(r.anchors.index(this)),
                this.blur(),
                !1
              );
          }
          if ((l.cookie && r._cookie(l.selected, l.cookie), !n.length))
            throw "jQuery UI Tabs: Mismatching fragment identifier.";
          s.length &&
            r.element.queue("tabs", function () {
              p(t, s);
            }),
            r.element.queue("tabs", function () {
              d(t, n);
            }),
            r.load(r.anchors.index(this)),
            e.browser.msie && this.blur();
        }),
          this.anchors.bind("click.tabs", function () {
            return !1;
          });
      },
      _getIndex: function (e) {
        return (
          "string" == typeof e &&
            (e = this.anchors.index(this.anchors.filter("[href$=" + e + "]"))),
          e
        );
      },
      destroy: function () {
        var t = this.options;
        return (
          this.abort(),
          this.element
            .unbind(".tabs")
            .removeClass(
              "ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"
            )
            .removeData("tabs"),
          this.list.removeClass(
            "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"
          ),
          this.anchors.each(function () {
            var t = e.data(this, "href.tabs");
            t && (this.href = t);
            var i = e(this).unbind(".tabs");
            e.each(["href", "load", "cache"], function (e, t) {
              i.removeData(t + ".tabs");
            });
          }),
          this.lis
            .unbind(".tabs")
            .add(this.panels)
            .each(function () {
              e.data(this, "destroy.tabs")
                ? e(this).remove()
                : e(this).removeClass(
                    "ui-state-default ui-corner-top ui-tabs-selected ui-state-active ui-state-hover ui-state-focus ui-state-disabled ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide"
                  );
            }),
          t.cookie && this._cookie(null, t.cookie),
          this
        );
      },
      add: function (t, s, n) {
        n === i && (n = this.anchors.length);
        var o = this,
          a = this.options;
        (s = e(
          a.tabTemplate.replace(/#\{href\}/g, t).replace(/#\{label\}/g, s)
        )),
          (t = t.indexOf("#") ? this._tabId(e("a", s)[0]) : t.replace("#", "")),
          s.addClass("ui-state-default ui-corner-top").data("destroy.tabs", !0);
        var r = o.element.find("#" + t);
        return (
          r.length ||
            (r = e(a.panelTemplate).attr("id", t).data("destroy.tabs", !0)),
          r.addClass(
            "ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide"
          ),
          n >= this.lis.length
            ? (s.appendTo(this.list), r.appendTo(this.list[0].parentNode))
            : (s.insertBefore(this.lis[n]), r.insertBefore(this.panels[n])),
          (a.disabled = e.map(a.disabled, function (e) {
            return e >= n ? ++e : e;
          })),
          this._tabify(),
          1 == this.anchors.length &&
            ((a.selected = 0),
            s.addClass("ui-tabs-selected ui-state-active"),
            r.removeClass("ui-tabs-hide"),
            this.element.queue("tabs", function () {
              o._trigger("show", null, o._ui(o.anchors[0], o.panels[0]));
            }),
            this.load(0)),
          this._trigger("add", null, this._ui(this.anchors[n], this.panels[n])),
          this
        );
      },
      remove: function (t) {
        t = this._getIndex(t);
        var i = this.options,
          s = this.lis.eq(t).remove(),
          n = this.panels.eq(t).remove();
        return (
          s.hasClass("ui-tabs-selected") &&
            this.anchors.length > 1 &&
            this.select(t + (t + 1 < this.anchors.length ? 1 : -1)),
          (i.disabled = e.map(
            e.grep(i.disabled, function (e) {
              return e != t;
            }),
            function (e) {
              return e >= t ? --e : e;
            }
          )),
          this._tabify(),
          this._trigger("remove", null, this._ui(s.find("a")[0], n[0])),
          this
        );
      },
      enable: function (t) {
        t = this._getIndex(t);
        var i = this.options;
        if (-1 != e.inArray(t, i.disabled))
          return (
            this.lis.eq(t).removeClass("ui-state-disabled"),
            (i.disabled = e.grep(i.disabled, function (e) {
              return e != t;
            })),
            this._trigger(
              "enable",
              null,
              this._ui(this.anchors[t], this.panels[t])
            ),
            this
          );
      },
      disable: function (e) {
        e = this._getIndex(e);
        var t = this.options;
        return (
          e != t.selected &&
            (this.lis.eq(e).addClass("ui-state-disabled"),
            t.disabled.push(e),
            t.disabled.sort(),
            this._trigger(
              "disable",
              null,
              this._ui(this.anchors[e], this.panels[e])
            )),
          this
        );
      },
      select: function (e) {
        if (-1 == (e = this._getIndex(e))) {
          if (!this.options.collapsible || -1 == this.options.selected)
            return this;
          e = this.options.selected;
        }
        return this.anchors.eq(e).trigger(this.options.event + ".tabs"), this;
      },
      load: function (t) {
        t = this._getIndex(t);
        var i = this,
          s = this.options,
          n = this.anchors.eq(t)[0],
          o = e.data(n, "load.tabs");
        if (
          (this.abort(),
          o &&
            (0 === this.element.queue("tabs").length ||
              !e.data(n, "cache.tabs")))
        ) {
          if ((this.lis.eq(t).addClass("ui-state-processing"), s.spinner)) {
            var a = e("span", n);
            a.data("label.tabs", a.html()).html(s.spinner);
          }
          return (
            (this.xhr = e.ajax(
              e.extend({}, s.ajaxOptions, {
                url: o,
                success: function (o, a) {
                  i.element.find(i._sanitizeSelector(n.hash)).html(o),
                    i._cleanup(),
                    s.cache && e.data(n, "cache.tabs", !0),
                    i._trigger("load", null, i._ui(i.anchors[t], i.panels[t]));
                  try {
                    s.ajaxOptions.success(o, a);
                  } catch (e) {}
                },
                error: function (e, o) {
                  i._cleanup(),
                    i._trigger("load", null, i._ui(i.anchors[t], i.panels[t]));
                  try {
                    s.ajaxOptions.error(e, o, t, n);
                  } catch (e) {}
                },
              })
            )),
            i.element.dequeue("tabs"),
            this
          );
        }
        this.element.dequeue("tabs");
      },
      abort: function () {
        return (
          this.element.queue([]),
          this.panels.stop(!1, !0),
          this.element.queue("tabs", this.element.queue("tabs").splice(-2, 2)),
          this.xhr && (this.xhr.abort(), delete this.xhr),
          this._cleanup(),
          this
        );
      },
      url: function (e, t) {
        return (
          this.anchors.eq(e).removeData("cache.tabs").data("load.tabs", t), this
        );
      },
      length: function () {
        return this.anchors.length;
      },
    }),
      e.extend(e.ui.tabs, { version: "1.8.9" }),
      e.extend(e.ui.tabs.prototype, {
        rotation: null,
        rotate: function (e, i) {
          var s = this,
            n = this.options,
            o =
              s._rotate ||
              (s._rotate = function (t) {
                clearTimeout(s.rotation),
                  (s.rotation = setTimeout(function () {
                    var e = n.selected;
                    s.select(++e < s.anchors.length ? e : 0);
                  }, e)),
                  t && t.stopPropagation();
              });
          return (
            (i =
              s._unrotate ||
              (s._unrotate = i
                ? function () {
                    (t = n.selected), o();
                  }
                : function (e) {
                    e.clientX && s.rotate(null);
                  })),
            e
              ? (this.element.bind("tabsshow", o),
                this.anchors.bind(n.event + ".tabs", i),
                o())
              : (clearTimeout(s.rotation),
                this.element.unbind("tabsshow", o),
                this.anchors.unbind(n.event + ".tabs", i),
                delete this._rotate,
                delete this._unrotate),
            this
          );
        },
      });
  })(jQuery),
  (function (e) {
    if (((e.support.touch = "ontouchend" in document), e.support.touch)) {
      var t,
        i = e.ui.mouse.prototype,
        s = i._mouseInit;
      (i._touchStart = function (e) {
        !t &&
          this._mouseCapture(e.originalEvent.changedTouches[0]) &&
          ((t = !0),
          (this._touchMoved = !1),
          n(e, "mouseover"),
          n(e, "mousemove"),
          n(e, "mousedown"));
      }),
        (i._touchMove = function (e) {
          t && ((this._touchMoved = !0), n(e, "mousemove"));
        }),
        (i._touchEnd = function (e) {
          t &&
            (n(e, "mouseup"),
            n(e, "mouseout"),
            this._touchMoved || n(e, "click"),
            (t = !1));
        }),
        (i._mouseInit = function () {
          this.element
            .bind("touchstart", e.proxy(this, "_touchStart"))
            .bind("touchmove", e.proxy(this, "_touchMove"))
            .bind("touchend", e.proxy(this, "_touchEnd")),
            s.call(this);
        });
    }
    function n(e, t) {
      if (!(e.originalEvent.touches.length > 1)) {
        e.preventDefault();
        var i = e.originalEvent.changedTouches[0],
          s = document.createEvent("MouseEvents");
        s.initMouseEvent(
          t,
          !0,
          !0,
          window,
          1,
          i.screenX,
          i.screenY,
          i.clientX,
          i.clientY,
          !1,
          !1,
          !1,
          !1,
          0,
          null
        ),
          e.target.dispatchEvent(s);
      }
    }
  })(jQuery),
  $(window).bind("load", function () {
    console.log(""),
      $(".dragObj img").each(function () {
        var e = 0,
          t = $(this).width(),
          i = $(this).height();
        t > 106 &&
          ((e = 106 / t),
          $(this).css("width", 106),
          $(this).css("height", i * e),
          (i *= e));
        t = $(this).width();
        (i = $(this).height()) > 49 &&
          ((e = 49 / i),
          $(this).css("height", 49),
          $(this).css("width", t * e),
          (t *= e)),
          console.log("img", t, "   ", i);
      }),
      $("#contentpage img").show(),
      console.log("");
  }),
  $(document).ready(function () {
    console.log("");
    var e = dragList.split("|"),
      t = dropRow.split("|"),
      i = dropColoum.split("|"),
      s = 0,
      n = 118,
      o = 58,
      a = [],
      r = 0;
    function l(e) {
      var t = $(this),
        i = t.data("hasBeenDropped");
      return (
        (wasJustDropped = (function (e) {
          for (var t = 0; t < r; t++) {
            var i = e && e[0].id == "cell" + t;
            if (0 != e && e[0].id == "cell" + t) break;
          }
          return i;
        })(e)),
        !wasJustDropped &&
          (i
            ? (t.css({ width: n, height: o }),
              t.css({ transform: "scale(1)" }),
              t.animate(
                {
                  top: a[t.attr("id").split("j")[1]].top,
                  left: a[t.attr("id").split("j")[1]].left,
                },
                "slow"
              ),
              !1)
            : (t.css({ transform: "scale(1)" }), !0))
      );
    }
    function h(e, t) {}
    function c(e, t) {
      var i = $(this).width() / 2,
        s = $(this).height() / 2;
      $(this).draggable("option", "cursorAt", { top: s, left: i }),
        $(this).css({ transform: "scale(.8)" });
    }
    function u(e, t) {
      $(t.draggable).css({ transform: "scale(.5)" }),
        $(t.draggable).data("hasBeenDropped", !0),
        t.draggable.position({ of: $(this), my: "center", at: "center" }),
        $(t.draggable).css({
          left: $(t.draggable).position().left,
          top: $(t.draggable).position().top,
        });
      if ($(t.draggable).data("hasBeenDropped", !0).length >= 1) {
        // $(t.draggable).css({
        //   left: $(t.draggable).position().left +1,
        //   top: $(t.draggable).position().top + 1,
        // });
        
      }
    }
    $("img").error(function () {
      $(this).unbind("error").attr("src", "image/img.png");
    }),
      $(function () {
        var d = "",
          p = "",
          f = 65 * i.length,
          g = 65 * t.length - 9,
          m = 50 + o * e.length + 20 * (e.length - 1) + 50,
          v =
            '<div class="toparrow"></div><div id="cross_x" style="position:absolute; width:20px; height:2px; background:#72971c; left:111px; bottom:20px;"></div><div id="cross_y" style="position:absolute; width:2px; height:20px; background:#72971c; left:120px; bottom:11px;"></div><div class="rctgle" style="width:' +
            f +
            'px;"></div><div class="rightarrow" style="margin-top:336px;"></div><div class="clearAll"></div>';
        for (var b in ($(".wrapper").append(
          '<div class="dragBlock" ></div><div class="dropBlock" style=""><div class="x-axis"><span>Rarely shop there</span><span>Always shop there</span></div><div class="rect"><div class="innerRect" style="">' +
            v +
            '</div></div><div class="y-axis"><span>Hate shopping there</span><span>Love shopping there</span></div></div></div><div class="clearAll"></div>'
        ),
        e))
          a.push({ top: s, left: 0 }),
            (d +=
              "<div class='dragObj' id='dObj" +
              b +
              "' style='width:" +
              n +
              "px; height:" +
              o +
              "px; margin-bottom:10px; position:absolute; top:" +
              s +
              "px;'><img src='image/" +
              e[b] +
              "' style='text-align:center; margin-left:6px; margin-top:2px;'/></div>"),
            (s += o + 20);
        for (var y in t) {
          var _ = "";
          for (var w in i)
            (_ +=
              "<div class='rws' style='width:65px; height:65px; display:inline-block; background:" +
              ((parseInt(y) + parseInt(w)) % 2 ? "#e3e8cd" : "#edf0dc") +
              "; border:1px solid #b5d85e; box-sizing:border-box;' id='cell" +
              r +
              "'></div>"),
              r++;
          p +=
            "<div class='clm' style='box-sizing:border-box;' id='r" +
            y +
            "'>" +
            _ +
            "</div>";
        }
        $(".dragObj").css;
        var x = $(".rect").height() + 100,
          k = $(".rect").width() + 200 + n + 10;
        $(".wrapper").css({ width: k + "px" }),
          m > x && $(".wrapper").css({ height: m + "px" }),
          $(".dragBlock").append(d),
          $(".rctgle").append(p),
          console.log(""),
          $(".dragObj").draggable({
            containment: ".wrapper",
            cursor: "pointer",
            stack: ".dragObj",
            revert: l,
            revertDuration: 500,
            drag: h,
            start: c,
          }),
          $(".rws").droppable({
            activeClass: "ui-state-active",
            hoverClass: "ui-state-hover",
            drop: u,
          }),
          $("img").error(function () {
            $(this).unbind("error").attr("src", "image/missing.png");
          });
      });
  });
