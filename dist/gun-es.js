var V = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ut(P) {
  return P && P.__esModule && Object.prototype.hasOwnProperty.call(P, "default") ? P.default : P;
}
var tt;
function rt() {
  return tt || (tt = {
    "/gun.js": ot
  });
}
function it(P) {
  function p(E) {
    var $ = et(E, P);
    if ($ !== null)
      return rt()[$]();
    throw new Error('Could not dynamically require "' + E + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
  }
  return p.resolve = function(E) {
    var $ = et(E, P);
    return $ !== null ? $ : require.resolve(E);
  }, p;
}
function et(P, p) {
  var E = at(P);
  P = L(P);
  var $;
  P[0] === "/" && (p = "");
  for (var n = rt(), f = ["", ".js", ".json"]; E ? $ = L(p + "/node_modules/" + P) : $ = L(p + "/" + P), !$.endsWith("/.."); ) {
    for (var s = 0; s < f.length; s++) {
      var w = $ + f[s];
      if (n[w])
        return w;
    }
    if (!E)
      break;
    var l = L(p + "/..");
    if (l === p)
      break;
    p = l;
  }
  return null;
}
function at(P) {
  var p = P[0];
  if (p === "/" || p === "\\")
    return !1;
  var E = P[1], $ = P[2];
  return !(p === "." && (!E || E === "/" || E === "\\") || p === "." && E === "." && (!$ || $ === "/" || $ === "\\") || E === ":" && ($ === "/" || $ === "\\"));
}
function L(P) {
  P = P.replace(/\\/g, "/");
  for (var p = P.split("/"), E = p[0] === "", $ = 1; $ < p.length; $++)
    (p[$] === "." || p[$] === "") && p.splice($--, 1);
  for (var $ = 1; $ < p.length; $++)
    p[$] === ".." && $ > 0 && p[$ - 1] !== ".." && p[$ - 1] !== "." && (p.splice(--$, 2), $--);
  return P = p.join("/"), E && P[0] !== "/" ? P = "/" + P : P.length === 0 && (P = "."), P;
}
var Y = {}, ft = {
  get exports() {
    return Y;
  },
  set exports(P) {
    Y = P;
  }
}, nt;
function ot() {
  return nt || (nt = 1, function(P) {
    (function() {
      function p($, n) {
        return n ? it("/")($) : $.slice ? p[f($)] : function(s, w) {
          $(s = { exports: {} }), p[f(w)] = s.exports;
        };
        function f(s) {
          return s.split("/").slice(-1).toString().replace(".js", "");
        }
      }
      var E = P;
      p(function($) {
        String.random = function(f, s) {
          var w = "";
          for (f = f || 24, s = s || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz"; f-- > 0; )
            w += s.charAt(Math.floor(Math.random() * s.length));
          return w;
        }, String.match = function(f, s) {
          var w, l;
          return typeof f != "string" ? !1 : (typeof s == "string" && (s = { "=": s }), s = s || {}, w = s["="] || s["*"] || s[">"] || s["<"], f === w ? !0 : l !== s["="] ? !1 : (w = s["*"] || s[">"], f.slice(0, (w || "").length) === w ? !0 : l !== s["*"] ? !1 : l !== s[">"] && l !== s["<"] ? f >= s[">"] && f <= s["<"] : l !== s[">"] && f >= s[">"] || l !== s["<"] && f <= s["<"]));
        }, String.hash = function(f, s) {
          if (typeof f == "string") {
            if (s = s || 0, !f.length)
              return s;
            for (var w = 0, l = f.length, u; w < l; ++w)
              u = f.charCodeAt(w), s = (s << 5) - s + u, s |= 0;
            return s;
          }
        };
        var n = Object.prototype.hasOwnProperty;
        Object.plain = function(f) {
          return f ? f instanceof Object && f.constructor === Object || Object.prototype.toString.call(f).match(/^\[object (\w+)\]$/)[1] === "Object" : !1;
        }, Object.empty = function(f, s) {
          for (var w in f)
            if (n.call(f, w) && (!s || s.indexOf(w) == -1))
              return !1;
          return !0;
        }, Object.keys = Object.keys || function(f) {
          var s = [];
          for (var w in f)
            n.call(f, w) && s.push(w);
          return s;
        }, function() {
          var f, s = setTimeout, w = 0, l = 0, u = typeof setImmediate != "" + f && setImmediate || function(i, y) {
            return typeof MessageChannel == "" + f ? s : ((i = new MessageChannel()).port1.onmessage = function(m) {
              m.data == "" && y();
            }, function(m) {
              y = m, i.port2.postMessage("");
            });
          }(), o = s.check = s.check || typeof performance != "" + f && performance || { now: function() {
            return +/* @__PURE__ */ new Date();
          } };
          s.hold = s.hold || 9, s.poll = s.poll || function(i) {
            if (s.hold >= o.now() - w && l++ < 3333) {
              i();
              return;
            }
            u(function() {
              w = o.now(), i();
            }, l = 0);
          };
        }(), function() {
          var f = setTimeout, s = f.turn = f.turn || function(y) {
            w.push(y) == 1 && l(i);
          }, w = s.s = [], l = f.poll, u = 0, o, i = function() {
            (o = w[u++]) && o(), (u == w.length || u == 99) && (w = s.s = w.slice(u), u = 0), w.length && l(i);
          };
        }(), function() {
          var f, s = setTimeout, w = s.turn;
          (s.each = s.each || function(l, u, o, i) {
            i = i || 9, function y(m, e, h) {
              if (e = (m = (l || []).splice(0, i)).length) {
                for (var b = 0; b < e && f === (h = u(m[b])); b++)
                  ;
                if (f === h) {
                  w(y);
                  return;
                }
              }
              o && o(h);
            }();
          })();
        }();
      })(p, "./shim"), p(function($) {
        $.exports = function n(o, s, w) {
          if (!o)
            return { to: n };
          var l, u = typeof s == "function", o = (this.tag || (this.tag = {}))[o] || u && (this.tag[o] = { tag: o, to: n._ = { next: function(y) {
            var m;
            (m = this.to) && m.next(y);
          } } });
          if (u) {
            var i = {
              off: n.off || (n.off = function() {
                if (this.next === n._.next)
                  return !0;
                this === this.the.last && (this.the.last = this.back), this.to.back = this.back, this.next = n._.next, this.back.to = this.to, this.the.last === this.the && delete this.on.tag[this.the.tag];
              }),
              to: n._,
              next: s,
              the: o,
              on: this,
              as: w
            };
            return (i.back = o.last || o).to = i, o.last = i;
          }
          return (o = o.to) && l !== s && o.next(s), o;
        };
      })(p, "./onto"), p(function($) {
        $.exports = function(n) {
          return n === null || typeof n == "string" || typeof n == "boolean" || // we want +/- Infinity to be, but JSON does not support it, sad face.
          // can you guess what v === v checks for? ;)
          typeof n == "number" && n != 1 / 0 && n != -1 / 0 && n === n || !!n && typeof n["#"] == "string" && Object.keys(n).length === 1 && n["#"];
        };
      })(p, "./valid"), p(function($) {
        p("./shim");
        function n() {
          var o = +/* @__PURE__ */ new Date();
          return l < o ? (s = 0, l = o + n.drift) : l = o + (s += 1) / w + n.drift;
        }
        n.drift = 0;
        var f = -1 / 0, s = 0, w = 999, l = f, u;
        n.is = function(o, i, y) {
          var m = i && o && o._ && o._[">"] || y;
          if (m)
            return typeof (m = m[i]) == "number" ? m : f;
        }, n.ify = function(o, i, y, m, e) {
          (o = o || {})._ = o._ || {}, e && (o._["#"] = e);
          var h = o._[">"] || (o._[">"] = {});
          return u !== i && i !== "_" && (typeof y == "number" && (h[i] = y), u !== m && (o[i] = m)), o;
        }, $.exports = n;
      })(p, "./state"), p(function($) {
        p("./shim");
        function n(f) {
          var s = { s: {} }, w = s.s;
          f = f || { max: 999, age: 1e3 * 9 }, s.check = function(u) {
            return w[u] ? l(u) : !1;
          };
          var l = s.track = function(u) {
            var o = w[u] || (w[u] = {});
            return o.was = s.now = +/* @__PURE__ */ new Date(), s.to || (s.to = setTimeout(s.drop, f.age + 9)), l.ed && l.ed(u), o;
          };
          return s.drop = function(u) {
            s.to = null, s.now = +/* @__PURE__ */ new Date();
            var o = Object.keys(w);
            console.STAT && console.STAT(s.now, +/* @__PURE__ */ new Date() - s.now, "dup drop keys"), setTimeout.each(o, function(i) {
              var y = w[i];
              y && (u || f.age) > s.now - y.was || delete w[i];
            }, 0, 99);
          }, s;
        }
        $.exports = n;
      })(p, "./dup"), p(function($) {
        p("./onto"), $.exports = function(s, w) {
          if (this.on) {
            var l = (this.opt || {}).lack || 9e3;
            if (typeof s != "function") {
              if (!s)
                return;
              var o = s["#"] || s, u = (this.tag || "")[o];
              return u ? (w && (u = this.on(o, w), clearTimeout(u.err), u.err = setTimeout(function() {
                u.off();
              }, l)), !0) : void 0;
            }
            var o = w && w["#"] || n(9);
            if (!s)
              return o;
            var i = this.on(o, s, w);
            return i.err = i.err || setTimeout(function() {
              i.off(), i.next({ err: "Error: No ACK yet.", lack: !0 });
            }, l), o;
          }
        };
        var n = String.random || function() {
          return Math.random().toString(36).slice(2);
        };
      })(p, "./ask"), p(function($) {
        function n(e) {
          return e instanceof n ? (this._ = { $: this }).$ : this instanceof n ? n.create(this._ = { $: this, opt: e }) : new n(e);
        }
        n.is = function(e) {
          return e instanceof n || e && e._ && e === e._.$ || !1;
        }, n.version = 0.202, n.chain = n.prototype, n.chain.toJSON = function() {
        }, p("./shim"), n.valid = p("./valid"), n.state = p("./state"), n.on = p("./onto"), n.dup = p("./dup"), n.ask = p("./ask"), function() {
          n.create = function(r) {
            r.root = r.root || r, r.graph = r.graph || {}, r.on = r.on || n.on, r.ask = r.ask || n.ask, r.dup = r.dup || n.dup();
            var k = r.$.opt(r.opt);
            return r.once || (r.on("in", e, r), r.on("out", e, r), r.on("put", _, r), n.on("create", r), r.on("create", r)), r.once = 1, k;
          };
          function e(r) {
            if (r) {
              if (r.out === e) {
                this.to.next(r);
                return;
              }
              var k = this, j = k.as, D = j.at || j, O = D.$, T = D.dup, B, C = r.DBG;
              if ((B = r["#"]) || (B = r["#"] = s(9)), !T.check(B)) {
                if (T.track(B), B = r._, r._ = typeof B == "function" ? B : function() {
                }, r.$ && r.$ === (r.$._ || "").$ || (r.$ = O), r["@"] && !r.put && t(r), !D.ask(r["@"], r))
                  if (C && (C.u = +/* @__PURE__ */ new Date()), r.put) {
                    h(r);
                    return;
                  } else
                    r.get && n.on.get(r, O);
                C && (C.uc = +/* @__PURE__ */ new Date()), k.to.next(r), C && (C.ua = +/* @__PURE__ */ new Date()), !(r.nts || r.NTS) && (r.out = e, D.on("out", r), C && (C.ue = +/* @__PURE__ */ new Date()));
              }
            }
          }
          function h(r) {
            if (r) {
              var k = r._ || "", j = k.root = ((k.$ = r.$ || "")._ || "").root;
              if (r["@"] && k.faith && !k.miss) {
                r.out = e, j.on("out", r);
                return;
              }
              k.latch = j.hatch, k.match = j.hatch = [];
              var D = r.put, O = k.DBG = r.DBG, T = +/* @__PURE__ */ new Date();
              if (G = G || T, !(D["#"] && D["."])) {
                O && (O.p = T), k["#"] = r["#"], k.msg = r, k.all = 0, k.stun = 1;
                var B = Object.keys(D);
                console.STAT && console.STAT(T, ((O || k).pk = +/* @__PURE__ */ new Date()) - T, "put sort");
                var C = 0, U, I, J, K, M, R, F;
                (function H(q) {
                  if (U != C) {
                    if (U = C, !(J = B[C])) {
                      console.STAT && console.STAT(T, ((O || k).pd = +/* @__PURE__ */ new Date()) - T, "put"), a(k);
                      return;
                    }
                    (K = D[J]) ? (F = K._) ? J !== F["#"] ? R = v + S(J) + "soul not same." : (M = F[">"]) || (R = v + S(J) + "no state.") : R = v + S(J) + "no meta." : R = v + S(J) + "no node.", I = Object.keys(K || {});
                  }
                  if (R) {
                    r.err = k.err = R, a(k);
                    return;
                  }
                  var X = 0, W;
                  for (q = q || 0; q++ < 9 && (W = I[X++]); )
                    if (W !== "_") {
                      var z = K[W], Z = M[W];
                      if (i === Z) {
                        R = v + S(W) + "on" + S(J) + "no state.";
                        break;
                      }
                      if (!l(z)) {
                        R = v + S(W) + "on" + S(J) + "bad " + typeof z + S(z);
                        break;
                      }
                      b(z, W, J, Z, r), ++N;
                    }
                  if ((I = I.slice(X)).length) {
                    w(H);
                    return;
                  }
                  ++C, I = null, H(q);
                })();
              }
            }
          }
          n.on.put = h;
          function b(r, k, j, D, O) {
            var T = O._ || "", B = T.root, C = B.graph, U, I = C[j] || y, J = u(I, k, 1), K = I[k], M = T.DBG;
            (U = console.STAT) && (!C[j] || !K) && (U.has = (U.has || 0) + 1);
            var R = A();
            if (D > R) {
              setTimeout(function() {
                b(r, k, j, D, O);
              }, (U = D - R) > x ? x : U), console.STAT && console.STAT((M || T).Hf = +/* @__PURE__ */ new Date(), U, "future");
              return;
            }
            if (!(D < J) && !(!T.faith && D === J && (r === K || g(r) <= g(K)) && !T.miss)) {
              T.stun++;
              var F = O["#"] + T.all++, H = { toString: function() {
                return F;
              }, _: T };
              H.toJSON = H.toString, B.dup.track(H)["#"] = O["#"], M && (M.ph = M.ph || +/* @__PURE__ */ new Date()), B.on("put", { "#": H, "@": O["@"], put: { "#": j, ".": k, ":": r, ">": D }, ok: O.ok, _: T });
            }
          }
          function _(r) {
            var k;
            (k = (r._ || "").DBG) && (k.pa = +/* @__PURE__ */ new Date(), k.pm = k.pm || +/* @__PURE__ */ new Date());
            var j = this, D = j.as, O = D.graph, T = r._, B = r.put, C = B["#"], U = B["."], I = B[":"], J = B[">"];
            r["#"];
            var K;
            (K = T.msg) && (K = K.put) && (K = K[C]) && o(K, U, J, I, C), O[C] = o(O[C], U, J, I, C), (K = (D.next || "")[C]) && K.on("in", r), a(T), j.to.next(r);
          }
          function a(r, k) {
            var j;
            if (!r.stop && !(!r.err && 0 < --r.stun) && (r.stop = 1, !!(j = r.root))) {
              var D = r.match;
              D.end = 1, D === j.hatch && (!(D = r.latch) || D.end ? delete j.hatch : j.hatch = D), r.hatch && r.hatch(), setTimeout.each(r.match, function(O) {
                O && O();
              }), !(!(k = r.msg) || r.err || k.err) && (k.out = e, r.root.on("out", k), d());
            }
          }
          function t(r) {
            var k = r["@"] || "", j;
            if (!(j = k._)) {
              var D = (D = r.$) && (D = D._) && (D = D.root) && (D = D.dup);
              if (!(D = D.check(k)))
                return;
              r["@"] = D["#"] || r["@"];
              return;
            }
            j.acks = (j.acks || 0) + 1, (j.err = r.err) && (r["@"] = j["#"], a(j)), j.ok = r.ok || j.ok, !j.stop && !j.crack && (j.crack = j.match && j.match.push(function() {
              c(j);
            })), c(j);
          }
          function c(r) {
            !r || !r.root || r.stun || r.acks !== r.all || r.root.on("in", { "@": r["#"], err: r.err, ok: r.err ? i : r.ok || { "": 1 } });
          }
          var v = "Error: Invalid graph!", S = function(r) {
            return " '" + ("" + r).slice(0, 9) + "...' ";
          }, g = JSON.stringify, x = 2147483647, A = n.state, N = 0, G, d = function() {
            N > 999 && N / -(G - (G = +/* @__PURE__ */ new Date())) > 1 && (n.window && console.log("Warning: You're syncing 1K+ records a second, faster than DOM can update - consider limiting query."), d = function() {
              N = 0;
            });
          };
        }(), function() {
          n.on.get = function(h, b) {
            var _ = b._, a = h.get, t = a["#"], c = _.graph[t], v = a["."], S = _.next || (_.next = {}), g = S[t], x = h._ || {}, A = x.DBG = h.DBG;
            if (A && (A.g = +/* @__PURE__ */ new Date()), !c)
              return _.on("get", h);
            if (v) {
              if ((typeof v != "string" || i === c[v]) && !((g || "").next || "")[v]) {
                _.on("get", h);
                return;
              }
              c = o({}, v, u(c, v), c[v], t);
            }
            c && e(h, c), _.on("get", h);
          };
          function e(h, b) {
            var _ = +/* @__PURE__ */ new Date(), a = h._ || {}, t = a.DBG = h.DBG, c = h["#"], v = s(9), S = Object.keys(b || "").sort(), g = ((b || "")._ || "")["#"];
            S.length;
            var x = h.$._.root, A = b === x.graph[g];
            console.STAT && console.STAT(_, ((t || a).gk = +/* @__PURE__ */ new Date()) - _, "got keys"), b && function N() {
              _ = +/* @__PURE__ */ new Date();
              for (var G = 0, d, r = {}, k; G < 9 && (d = S[G++]); )
                o(r, d, u(b, d), b[d], g);
              S = S.slice(G), (k = {})[g] = r, r = k;
              var j;
              A && (j = function() {
              }, j.ram = j.faith = !0), k = S.length, console.STAT && console.STAT(_, -(_ - (_ = +/* @__PURE__ */ new Date())), "got copied some"), t && (t.ga = +/* @__PURE__ */ new Date()), x.on("in", { "@": c, "#": v, put: r, "%": k ? v = s(9) : i, $: x.$, _: j, DBG: t, FOO: 1 }), console.STAT && console.STAT(_, +/* @__PURE__ */ new Date() - _, "got in"), k && setTimeout.turn(N);
            }(), b || x.on("in", { "@": h["#"] });
          }
          n.on.get.ack = e;
        }(), function() {
          n.chain.opt = function(e) {
            e = e || {};
            var h = this, b = h._, _ = e.peers || e;
            return Object.plain(e) || (e = {}), Object.plain(b.opt) || (b.opt = e), typeof _ == "string" && (_ = [_]), Object.plain(b.opt.peers) || (b.opt.peers = {}), _ instanceof Array && (e.peers = {}, _.forEach(function(a) {
              var t = {};
              t.id = t.url = a, e.peers[a] = b.opt.peers[a] = b.opt.peers[a] || t;
            })), f(e, function a(t) {
              var c = this[t];
              if (this && this.hasOwnProperty(t) || typeof c == "string" || Object.empty(c)) {
                this[t] = c;
                return;
              }
              c && c.constructor !== Object && !(c instanceof Array) || f(c, a);
            }), b.opt.from = e, n.on("opt", b), b.opt.uuid = b.opt.uuid || function(t) {
              return n.state().toString(36).replace(".", "") + String.random(t || 12);
            }, h;
          };
        }();
        var f = function(e, h) {
          Object.keys(e).forEach(h, e);
        }, s = String.random, w = setTimeout.turn, l = n.valid, u = n.state.is, o = n.state.ify, i, y = {}, m;
        n.log = function() {
          return !n.log.off && m.log.apply(m, arguments), [].slice.call(arguments).join(" ");
        }, n.log.once = function(e, h, b) {
          return (b = n.log.once)[e] = b[e] || 0, b[e]++ || n.log(h);
        }, typeof window < "u" && ((window.GUN = window.Gun = n).window = window);
        try {
          typeof E < "u" && (E.exports = n);
        } catch {
        }
        $.exports = n, (n.window || {}).console = (n.window || {}).console || { log: function() {
        } }, (m = console).only = function(e, h) {
          return m.only.i && e === m.only.i && m.only.i++ && (m.log.apply(m, arguments) || h);
        }, n.log.once("welcome", "Hello wonderful person! :) Thanks for using GUN, please ask for help on http://chat.gun.eco if anything takes you longer than 5min to figure out!");
      })(p, "./root"), p(function($) {
        var n = p("./root");
        n.chain.back = function(w, l) {
          var u;
          if (w = w || 1, w === -1 || w === 1 / 0)
            return this._.root.$;
          if (w === 1)
            return (this._.back || this._).$;
          var o = this, i = o._;
          if (typeof w == "string" && (w = w.split(".")), w instanceof Array) {
            var y = 0, m = w.length, u = i;
            for (y; y < m; y++)
              u = (u || f)[w[y]];
            return s !== u ? l ? o : u : (u = i.back) ? u.$.back(w, l) : void 0;
          }
          if (typeof w == "function") {
            for (var e, u = { back: i }; (u = u.back) && s === (e = w(u, l)); )
              ;
            return e;
          }
          return typeof w == "number" ? (i.back || i).$.back(w - 1) : this;
        };
        var f = {}, s;
      })(p, "./back"), p(function($) {
        var n = p("./root");
        n.chain.chain = function(a) {
          var t = this, c = t._, v = new (a || t).constructor(t), S = v._, g;
          return S.root = g = c.root, S.id = ++g.once, S.back = t._, S.on = n.on, S.on("in", n.on.in, S), S.on("out", n.on.out, S), v;
        };
        function f(a) {
          var t, c = this.as, v = c.back, S = c.root, g;
          if (a.$ || (a.$ = c.$), this.to.next(a), c.err) {
            c.on("in", { put: c.put = i, $: c.$ });
            return;
          }
          if (t = a.get) {
            if (S.pass && (S.pass[c.id] = c), c.lex && Object.keys(c.lex).forEach(function(x) {
              g[x] = c.lex[x];
            }, g = a.get = a.get || {}), t["#"] || c.soul) {
              if (t["#"] = t["#"] || c.soul, a["#"] || (a["#"] = y(9)), v = S.$.get(t["#"])._, t = t["."]) {
                if (e(v.put, t) && (g = v.ask && v.ask[t], (v.ask || (v.ask = {}))[t] = v.$.get(t)._, v.on("in", { get: t, put: { "#": v.soul, ".": t, ":": v.put[t], ">": b(S.graph[v.soul], t) } }), g))
                  return;
              } else {
                if (g = v.ask && v.ask[""], (v.ask || (v.ask = {}))[""] = v, i !== v.put && (v.on("in", v), g))
                  return;
                a.$ = v.$;
              }
              return S.ask(u, a), S.on("in", a);
            }
            if (t["."])
              return c.get ? (a = { get: { ".": c.get }, $: c.$ }, (v.ask || (v.ask = {}))[c.get] = a.$._, v.on("out", a)) : (a = { get: c.lex ? a.get : {}, $: c.$ }, v.on("out", a));
            if ((c.ask || (c.ask = {}))[""] = c, c.get)
              return t["."] = c.get, (v.ask || (v.ask = {}))[c.get] = a.$._, v.on("out", a);
          }
          return v.on("out", a);
        }
        n.on.out = f;
        function s(a, t) {
          t = t || this.as;
          var c = t.root, v = a.$ || (a.$ = t.$), S = (v || "")._ || o, g = a.put || "", x = g["#"], A = g["."], N = i !== g["="] ? g["="] : g[":"], G = g[">"] || -1 / 0, d;
          if (i !== a.put && (i === g["#"] || i === g["."] || i === g[":"] && i === g["="] || i === g[">"])) {
            if (!m(g)) {
              if (!(x = ((g || "")._ || "")["#"])) {
                console.log("chain not yet supported for", g, "...", a, t);
                return;
              }
              return v = t.root.$.get(x), setTimeout.each(Object.keys(g).sort(), function(r) {
                r == "_" || i === (G = b(g, r)) || t.on("in", { $: v, put: { "#": x, ".": r, "=": g[r], ">": G }, VIA: a });
              });
            }
            t.on("in", { $: S.back.$, put: { "#": x = S.back.soul, ".": A = S.has || S.get, "=": g, ">": b(S.back.put, A) }, via: a });
            return;
          }
          (a.seen || "")[t.id] || ((a.seen || (a.seen = function() {
          }))[t.id] = t, t !== S && (Object.keys(a).forEach(function(r) {
            g[r] = a[r];
          }, g = {}), g.get = t.get || g.get, !t.soul && !t.has ? g.$$$ = g.$$$ || t.$ : S.soul && (g.$ = t.$, g.$$ = g.$$ || S.$), a = g), l(a, t), (t.soul || a.$$) && G >= b(c.graph[x], A) && ((g = c.$.get(x)._).put = _(g.put, A, G, N, x)), !S.soul && G >= b(c.graph[x], A) && (d = (c.$.get(x)._.next || "")[A]) && (d.put = N, typeof (g = m(N)) == "string" && (d.put = c.$.get(g)._.put || N)), this.to && this.to.next(a), t.any && setTimeout.each(Object.keys(t.any), function(r) {
            (r = t.any[r]) && r(a);
          }, 0, 99), t.echo && setTimeout.each(Object.keys(t.echo), function(r) {
            (r = t.echo[r]) && r.on("in", a);
          }, 0, 99), ((a.$$ || "")._ || S).soul && (d = t.next) && (d = d[A]) && (g = {}, Object.keys(a).forEach(function(r) {
            g[r] = a[r];
          }), g.$ = (a.$$ || a.$).get(g.get = A), delete g.$$, delete g.$$$, d.on("in", g)), w(a, t));
        }
        n.on.in = s;
        function w(a, t) {
          if (t = t || this.as || a.$._, !(a.$$ && this !== n.on) && !(!a.put || t.soul)) {
            var c = a.put || "", v = c["="] || c[":"], A, S = t.root, g = S.$.get(c["#"]).get(c["."])._;
            if (typeof (v = m(v)) != "string") {
              this === n.on && ((g.echo || (g.echo = {}))[t.id] = t);
              return;
            }
            if (!((g.echo || (g.echo = {}))[t.id] && !(S.pass || "")[t.id])) {
              if (A = S.pass) {
                if (A[v + t.id])
                  return;
                A[v + t.id] = 1;
              }
              (g.echo || (g.echo = {}))[t.id] = t, t.has && (t.link = v);
              var x = S.$.get(g.link = v)._;
              (x.echo || (x.echo = {}))[g.id] = g;
              var A = t.ask || "";
              (A[""] || t.lex) && x.on("out", { get: { "#": v } }), setTimeout.each(Object.keys(A), function(N, G) {
                !N || !(G = A[N]) || G.on("out", { get: { "#": v, ".": N } });
              }, 0, 99);
            }
          }
        }
        n.on.link = w;
        function l(a, t) {
          var c = a.put || "", v = i !== c["="] ? c["="] : c[":"], S = t.root, g, x;
          if (i === v) {
            if (t.soul && i !== t.put || (x = (a.$$ || a.$ || "")._ || "", a["@"] && (i !== x.put || i !== t.put)))
              return;
            (g = t.link || a.linked) && delete (S.$.get(g)._.echo || "")[t.id], t.has && (t.link = null), t.put = i, setTimeout.each(Object.keys(t.next || ""), function(A, N) {
              (N = t.next[A]) && (g && delete (S.$.get(g).get(A)._.echo || "")[N.id], N.on("in", { get: A, put: i, $: N.$ }));
            }, 0, 99);
            return;
          }
          t.soul || a.$$ || (g = m(v), x = a.$._ || "", !((g === x.link || t.has && !x.link) && !((S.pass || "")[t.id] && typeof g != "string")) && (delete (x.echo || "")[t.id], l({ get: t.get, put: i, $: a.$, linked: a.linked = a.linked || x.link }, t)));
        }
        n.on.unlink = l;
        function u(a, t) {
          var c = this.as, v = c.$._;
          v.root;
          var S = c.get || "", g = (a.put || "")[S["#"]] || "";
          if (!a.put || typeof S["."] == "string" && i === g[S["."]]) {
            if (i !== v.put || !v.soul && !v.has)
              return;
            v.ack = (v.ack || 0) + 1, v.on("in", {
              get: v.get,
              put: v.put = i,
              $: v.$,
              "@": a["@"]
            });
            return;
          }
          (a._ || {}).miss = 1, n.on.put(a);
        }
        var o = {}, i, y = String.random, m = n.valid, e = function(a, t) {
          return a && Object.prototype.hasOwnProperty.call(a, t);
        }, h = n.state, b = h.is, _ = h.ify;
      })(p, "./chain"), p(function($) {
        var n = p("./root");
        n.chain.get = function(i, y, m) {
          var e, h;
          if (typeof i == "string") {
            if (i.length == 0)
              return (e = this.chain())._.err = { err: n.log("0 length key!", i) }, y && y.call(e, e._.err), e;
            var b = this, _ = b._, a = _.next || l;
            (e = a[i]) || (e = i && f(i, b)), e = e && e.$;
          } else if (typeof i == "function") {
            let x = function(A, N, G) {
              if (!x.stun && !((O = c.pass) && !O[v])) {
                var d = A.$._, r = (A.$$ || "")._, k = (r || d).put, j = !d.has && !d.soul, D = {}, O;
                if ((j || o === k) && (k = o === ((O = A.put) || "")["="] ? o === (O || "")[":"] ? O : O[":"] : O["="]), typeof (O = n.valid(k)) == "string" && (k = o === (O = c.$.get(O)._.put) ? t.not ? o : k : O), !(t.not && o === k)) {
                  if (o === t.stun) {
                    if ((O = c.stun) && O.on && (_.$.back(function(T) {
                      if (O.on("" + T.id, D = {}), (D.run || 0) < x.id)
                        return D;
                    }), !D.run && O.on("" + d.id, D = {}), !D.run && r && O.on("" + r.id, D = {}), x.id > D.run && ((!D.stun || D.stun.end) && (D.stun = O.on("stun"), D.stun = D.stun && D.stun.last), D.stun && !D.stun.end))) {
                      (D.stun.add || (D.stun.add = {}))[v] = function() {
                        x(A, N, 1);
                      };
                      return;
                    }
                    if (
                      /*odd &&*/
                      o === k && (G = 0), (O = c.hatch) && !O.end && o === t.hatch && !G
                    ) {
                      if (S[d.$._.id])
                        return;
                      S[d.$._.id] = 1, O.push(function() {
                        x(A, N, 1);
                      });
                      return;
                    }
                    S = {};
                  }
                  if (c.pass) {
                    if (c.pass[v + d.id])
                      return;
                    c.pass[v + d.id] = 1;
                  }
                  if (t.on) {
                    t.ok.call(d.$, k, d.get, A, N || x);
                    return;
                  }
                  if (t.v2020) {
                    t.ok(A, N || x);
                    return;
                  }
                  Object.keys(A).forEach(function(T) {
                    O[T] = A[T];
                  }, O = {}), A = O, A.put = k, t.ok.call(t.as, A, N || x);
                }
              }
            };
            if (y === !0)
              return s(this, i, y, m), this;
            e = this;
            var _ = e._, t = y || {}, c = _.root, v;
            t.at = _, t.ok = i;
            var S = {};
            return x.at = _, (_.any || (_.any = {}))[v = String.random(7)] = x, x.off = function() {
              x.stun = 1, _.any && delete _.any[v];
            }, x.rid = w, x.id = t.run || ++c.once, h = c.pass, (c.pass = {})[v] = 1, t.out = t.out || { get: {} }, _.on("out", t.out), c.pass = h, e;
          } else {
            if (typeof i == "number")
              return this.get("" + i, y, m);
            if (typeof (h = u(i)) == "string")
              return this.get(h, y, m);
            (h = this.get.next) && (e = h(this, i));
          }
          return e ? (y && typeof y == "function" && e.get(y, m), e) : ((e = this.chain())._.err = { err: n.log("Invalid get request!", i) }, y && y.call(e, e._.err), e);
        };
        function f(i, y) {
          var m = y._, e = m.next, h = y.chain(), b = h._;
          return e || (e = m.next = {}), e[b.get = i] = b, y === m.root.$ ? b.soul = i : (m.soul || m.has) && (b.has = i), b;
        }
        function s(i, y, m, e) {
          var h = i._, b = 0, _;
          return (_ = h.soul || h.link) ? y(_, e, h) : h.jam ? h.jam.push([y, e]) : (h.jam = [[y, e]], i.get(function(t, c) {
            if (!(o === t.put && !h.root.opt.super && (_ = Object.keys(h.root.opt.peers).length) && ++b <= _)) {
              c.rid(t);
              var v = (v = t.$) && v._ || {}, S = 0, g;
              for (_ = h.jam, delete h.jam; g = _[S++]; ) {
                var x = g[0];
                g = g[1], x && x(v.link || v.soul || n.valid(t.put) || ((t.put || {})._ || {})["#"], g, t, c);
              }
            }
          }, { out: { get: { ".": !0 } } }), i);
        }
        function w(i) {
          var y = this.at || this.on;
          if (!i || y.soul || y.has)
            return this.off();
          if (i = (i = (i = i.$ || i)._ || i).id) {
            y.map;
            var m;
            if ((m = this.seen || (this.seen = {}))[i])
              return !0;
            m[i] = !0;
          }
        }
        var l = {}, u = n.valid, o;
      })(p, "./get"), p(function($) {
        var n = p("./root");
        n.chain.put = function(e, h, b) {
          var _ = this, a = _._, t = a.root;
          b = b || {}, b.root = a.root, b.run || (b.run = t.once), f(b, a.id), b.ack = b.ack || h, b.via = b.via || _, b.data = b.data || e, b.soul || (b.soul = a.soul || typeof h == "string" && h);
          var c = b.state = b.state || n.state();
          return typeof e == "function" ? (e(function(v) {
            b.data = v, _.put(u, u, b);
          }), _) : b.soul ? (b.$ = t.$.get(b.soul), b.todo = [{ it: b.data, ref: b.$ }], b.turn = b.turn || i, b.ran = b.ran || s, function v() {
            var S = b.todo, g = S.pop(), x = g.it;
            g.ref && g.ref._.id;
            var A, N, G, d, r;
            if (f(b, g.ref), (d = g.todo) && (N = d.pop(), x = x[N], d.length && S.push(g)), N && (S.path || (S.path = [])).push(N), !(A = y(x)) && !(r = n.is(x))) {
              if (!Object.plain(x)) {
                s.err(b, "Invalid data: " + l(x) + " at " + (b.via.back(function(O) {
                  O.get && d.push(O.get);
                }, d = []) || d.join(".")) + "." + (S.path || []).join("."));
                return;
              }
              for (var k = b.seen || (b.seen = []), j = k.length; j--; )
                if (x === (d = k[j]).it) {
                  A = x = d.link;
                  break;
                }
            }
            if (N && A)
              g.node = m(g.node, N, c, x);
            else {
              let O = function(T, B) {
                var C = G.link["#"];
                B && (B.off(), B.rid(T));
                var U = C || T.soul || (d = (T.$$ || T.$)._ || "").soul || d.link || ((d = d.put || "")._ || "")["#"] || d["#"] || ((d = T.put || "") && T.$$ ? d["#"] : (d["="] || d[":"] || "")["#"]);
                if (!C && f(b, T.$), !U && !g.link["#"]) {
                  (g.wait || (g.wait = [])).push(function() {
                    O(T, B);
                  });
                  return;
                }
                U || (U = [], (T.$$ || T.$).back(function(I) {
                  if (d = I.soul || I.link)
                    return U.push(d);
                  U.push(I.get);
                }), U = U.reverse().join("/")), G.link["#"] = U, !r && (((b.graph || (b.graph = {}))[U] = G.node || (G.node = { _: {} }))._["#"] = U), delete b.wait[D], G.wait && setTimeout.each(G.wait, function(I) {
                  I && I();
                }), b.ran(b);
              };
              if (!b.seen) {
                s.err(b, "Data at root of graph must be a node (an object).");
                return;
              }
              b.seen.push(G = { it: x, link: {}, todo: r ? [] : Object.keys(x).sort().reverse(), path: (S.path || []).slice(), up: g }), g.node = m(g.node, N, c, G.link), !r && G.todo.length && S.push(G);
              var D = b.seen.length;
              (b.wait || (b.wait = {}))[D] = "", d = (G.ref = r ? x : N ? g.ref.get(N) : g.ref)._, (d = x && (x._ || "")["#"] || d.soul || d.link) ? O({ soul: d }) : G.ref.get(O, {
                run: b.run,
                /*hatch: 0,*/
                v2020: 1,
                out: { get: { ".": " " } }
              });
            }
            if (!S.length)
              return b.ran(b);
            b.turn(v);
          }(), _) : (w(b), _);
        };
        function f(e, h) {
          if (h) {
            h = (h._ || "").id || h;
            var b = e.root.stun || (e.root.stun = { on: n.on }), _ = {}, a;
            e.stun || (e.stun = b.on("stun", function() {
            })), (a = b.on("" + h)) && a.the.last.next(_), !(_.run >= e.run) && b.on("" + h, function(t) {
              if (e.stun.end) {
                this.off(), this.to.next(t);
                return;
              }
              t.run = t.run || e.run, t.stun = t.stun || e.stun;
            });
          }
        }
        function s(e) {
          if (e.err) {
            s.end(e.stun, e.root);
            return;
          }
          if (!(e.todo.length || e.end || !Object.empty(e.wait))) {
            e.end = 1;
            var h = e.$.back(-1)._, b = h.root, _ = h.ask(function(v) {
              b.on("ack", v), v.err && !v.lack && n.log(v), ++a > (e.acks || 0) && this.off(), e.ack && e.ack(v, this);
            }, e.opt), a = 0, t = e.stun, c;
            (c = function() {
              t && (s.end(t, b), setTimeout.each(Object.keys(t = t.add || ""), function(v) {
                (v = t[v]) && v();
              }));
            }).hatch = c, e.ack && !e.ok && (e.ok = e.acks || 9), e.via._.on("out", { put: e.out = e.graph, ok: e.ok && { "@": e.ok + 1 }, opt: e.opt, "#": _, _: c });
          }
        }
        s.end = function(e, h) {
          e.end = o, e.the.to === e && e === e.the.last && delete h.stun, e.off();
        }, s.err = function(e, h) {
          (e.ack || o).call(e, e.out = { err: e.err = n.log(h) }), e.ran(e);
        };
        function w(e) {
          var h = e.via._, b;
          e.via = e.via.back(function(_) {
            if (_.soul || !_.get)
              return _.$;
            b = e.data, (e.data = {})[_.get] = b;
          }), (!e.via || !e.via._.soul) && (e.via = h.root.$.get(((e.data || "")._ || "")["#"] || h.$.back("opt.uuid")())), e.via.put(e.data, e.ack, e);
        }
        function l(e, h) {
          return e && (h = e.constructor) && h.name || typeof e;
        }
        var u, o = function() {
        }, i = setTimeout.turn, y = n.valid, m = n.state.ify;
      })(p, "./put"), p(function($) {
        var n = p("./root");
        p("./chain"), p("./back"), p("./put"), p("./get"), $.exports = n;
      })(p, "./index"), p(function($) {
        var n = p("./index");
        n.chain.on = function(w, l, u, o) {
          var i = this, y = i._;
          y.root;
          var m;
          if (typeof w == "string")
            return l ? (m = y.on(w, l, u || y, o), u && u.$ && (u.subs || (u.subs = [])).push(m), i) : y.on(w);
          var e = l;
          return (e = e === !0 ? { change: !0 } : e || {}).not = 1, e.on = 1, i.get(w, e), i;
        }, n.chain.once = function(w, l) {
          if (l = l || {}, !w)
            return f(this);
          var u = this, o = u._, i = o.root;
          o.put;
          var y = String.random(7), m;
          return u.get(function(e, h, b, _) {
            var a = this, t = a._, c = t.one || (t.one = {});
            if (_.stun || c[y] === "")
              return;
            if ((m = n.valid(e)) === !0) {
              v();
              return;
            }
            if (typeof m == "string")
              return;
            clearTimeout((o.one || "")[y]), clearTimeout(c[y]), c[y] = setTimeout(v, l.wait || 99);
            function v(S) {
              if (!t.has && !t.soul && (t = { put: e, get: h }), s === (m = t.put) && (m = ((b.$$ || "")._ || "").put), typeof n.valid(m) == "string" && (m = i.$.get(m)._.put, m === s && !S)) {
                c[y] = setTimeout(function() {
                  v(1);
                }, l.wait || 99);
                return;
              }
              _.stun || c[y] !== "" && (c[y] = "", (o.soul || o.has) && _.off(), w.call(a, m, t.get), clearTimeout(c[y]));
            }
          }, { on: 1 }), u;
        };
        function f(w, l, u) {
          return n.log.once("valonce", "Chainable val is experimental, its behavior and API may change moving forward. Please play with it and report bugs and ideas on how to improve it."), (u = w.chain())._.nix = w.once(function(o, i) {
            u._.on("in", this._);
          }), u._.lex = w._.lex, u;
        }
        n.chain.off = function() {
          var w = this, l = w._, u, o = l.back;
          if (o)
            return l.ack = 0, (u = o.next) && u[l.get] && delete u[l.get], (u = o.any) && (delete o.any, o.any = {}), (u = o.ask) && delete u[l.get], (u = o.put) && delete u[l.get], (u = l.soul) && delete o.root.graph[u], (u = l.map) && Object.keys(u).forEach(function(i, y) {
              y = u[i], y.link && o.root.$.get(y.link).off();
            }), (u = l.next) && Object.keys(u).forEach(function(i, y) {
              y = u[i], y.$.off();
            }), l.on("off", {}), w;
        };
        var s;
      })(p, "./on"), p(function($) {
        var n = p("./index"), f = n.chain.get.next;
        n.chain.get.next = function(u, o) {
          var i;
          return Object.plain(o) ? (i = ((i = o["#"]) || "")["="] || i) ? u.get(i) : ((i = u.chain()._).lex = o, u.on("in", function(y) {
            String.match(y.get || (y.put || "")["."], o["."] || o["#"] || o) && i.on("in", y), this.to.next(y);
          }), i.$) : (f || w)(u, o);
        }, n.chain.map = function(u, o, i) {
          var y = this, m = y._, e, h;
          return Object.plain(u) && (e = u["."] ? u : { ".": u }, u = l), u ? (n.log.once("mapfn", "Map functions are experimental, their behavior and API may change moving forward. Please play with it and report bugs and ideas on how to improve it."), h = y.chain(), y.map().on(function(b, _, a, t) {
            var c = (u || w).call(this, b, _, a, t);
            if (l !== c) {
              if (b === c)
                return h._.on("in", a);
              if (n.is(c))
                return h._.on("in", c._);
              var v = {};
              Object.keys(a.put).forEach(function(S) {
                v[S] = a.put[S];
              }, v), v["="] = c, h._.on("in", { get: _, put: v });
            }
          }), h) : ((h = m.each) || ((m.each = h = y.chain())._.lex = e || h._.lex || m.lex, h._.nix = y.back("nix"), y.on("in", s, h._)), h);
        };
        function s(u) {
          this.to.next(u);
          var o = this.as, i = u.$, y = i._, m = u.put, e;
          !y.soul && !u.$$ || (e = o.lex) && !String.match(u.get || (m || "")["."], e["."] || e["#"] || e) || n.on.link(u, o);
        }
        var w = function() {
        }, l;
      })(p, "./map"), p(function($) {
        var n = p("./index");
        n.chain.set = function(f, s, w) {
          var l = this, u = l.back(-1), o, i;
          return s = s || function() {
          }, w = w || {}, w.item = w.item || f, (o = ((f || "")._ || "")["#"]) && ((f = {})["#"] = o), typeof (i = n.valid(f)) == "string" ? l.get(o = i).put(f, s, w) : n.is(f) ? (l.put(function(y) {
            f.get(function(m, e, h) {
              if (!m)
                return s.call(l, { err: n.log('Only a node can be linked! Not "' + h.put + '"!') });
              (i = {})[m] = { "#": m }, y(i);
            }, !0);
          }), f) : (Object.plain(f) && (f = u.get(o = l.back("opt.uuid")()).put(f)), l.get(o || u.back("opt.uuid")(7)).put(f, s, w));
        };
      })(p, "./set"), p(function($) {
        p("./shim");
        var n = function() {
        }, f = JSON.parseAsync || function(u, o, i) {
          var y, m = +/* @__PURE__ */ new Date();
          try {
            o(y, JSON.parse(u, i), s.sucks(+/* @__PURE__ */ new Date() - m));
          } catch (e) {
            o(e);
          }
        }, s = JSON.stringifyAsync || function(u, o, i, y) {
          var m, e = +/* @__PURE__ */ new Date();
          try {
            o(m, JSON.stringify(u, i, y), s.sucks(+/* @__PURE__ */ new Date() - e));
          } catch (h) {
            o(h);
          }
        };
        s.sucks = function(u) {
          u > 99 && (console.log("Warning: JSON blocking CPU detected. Add `gun/lib/yson.js` to fix."), s.sucks = n);
        };
        function w(u) {
          var o = function() {
          }, i = u.opt || {};
          i.log = i.log || console.log, i.gap = i.gap || i.wait || 0, i.max = i.max || (i.memory ? i.memory * 999 * 999 : 3e8) * 0.3, i.pack = i.pack || i.max * 0.01 * 0.01, i.puff = i.puff || 9;
          var y = setTimeout.turn || setTimeout, m = u.dup, e = m.check, h = m.track, b = o.hear = function(t, c) {
            if (t) {
              if (i.max <= t.length)
                return o.say({ dam: "!", err: "Message too big!" }, c);
              o === this && (b.d += t.length || 0, ++b.c);
              var v = c.SH = +/* @__PURE__ */ new Date(), S = t[0], g;
              if (S === "[") {
                f(t, function(x, A) {
                  if (x || !A)
                    return o.say({ dam: "!", err: "DAM JSON parse error." }, c);
                  console.STAT && console.STAT(+/* @__PURE__ */ new Date(), A.length, "# on hear batch");
                  var N = i.puff;
                  (function G() {
                    for (var d = +/* @__PURE__ */ new Date(), r = 0, k; r < N && (k = A[r++]); )
                      o.hear(k, c);
                    A = A.slice(r), console.STAT && console.STAT(d, +/* @__PURE__ */ new Date() - d, "hear loop"), _(c), A.length && y(G, 0);
                  })();
                }), t = "";
                return;
              }
              if (S === "{" || (t["#"] || Object.plain(t)) && (g = t)) {
                if (g)
                  return b.one(g, c, v);
                f(t, function(x, A) {
                  if (x || !A)
                    return o.say({ dam: "!", err: "DAM JSON parse error." }, c);
                  b.one(A, c, v);
                });
                return;
              }
            }
          };
          b.one = function(t, c, G) {
            var S, g, x, A, N;
            if (t.DBG && (t.DBG = N = { DBG: t.DBG }), N && (N.h = G), N && (N.hp = +/* @__PURE__ */ new Date()), (S = t["#"]) || (S = t["#"] = String.random(9)), !(x = e(S)) && (g = t["##"], !(g && (x = t["@"] || t.get && S) && m.check(A = x + g)))) {
              if ((t._ = function() {
              }).via = o.leap = c, (x = t["><"]) && typeof x == "string" && x.slice(0, 99).split(",").forEach(function(d) {
                this[d] = 1;
              }, t._.yo = {}), x = t.dam) {
                (x = o.hear[x]) && x(t, c, u), h(S);
                return;
              }
              (x = t.ok) && (t._.near = x["/"]);
              var G = +/* @__PURE__ */ new Date();
              N && (N.is = G), c.SI = S, h.ed = function(d) {
                S === d && (h.ed = 0, (d = m.s[S]) && (d.via = c, t.get && (d.it = t)));
              }, u.on("in", o.last = t), N && (N.hd = +/* @__PURE__ */ new Date()), console.STAT && console.STAT(G, +/* @__PURE__ */ new Date() - G, t.get ? "msg get" : t.put ? "msg put" : "msg"), h(S), A && h(A), o.leap = o.last = null;
            }
          }, b.c = b.d = 0, function() {
            var t = 0, c;
            o.hash = function(g, x) {
              var A, N, G, d = +/* @__PURE__ */ new Date();
              s(g.put, function r(k, j) {
                var D = (N || (N = G = j || "")).slice(0, 32768);
                if (A = String.hash(D, A), N = N.slice(32768), N) {
                  y(r, 0);
                  return;
                }
                console.STAT && console.STAT(d, +/* @__PURE__ */ new Date() - d, "say json+hash"), g._.$put = G, g["##"] = A, o.say(g, x), delete g._.$put;
              }, v);
            };
            function v(g, x) {
              var A;
              return x instanceof Object ? (Object.keys(x).sort().forEach(S, { to: A = {}, on: x }), A) : x;
            }
            function S(g) {
              this.to[g] = this.on[g];
            }
            o.say = function(g, x) {
              var A;
              if ((A = this) && (A = A.to) && A.next && A.next(g), !g)
                return !1;
              var N, G, d, r = g["@"], k = g._ || (g._ = function() {
              }), j = g.DBG, D = +/* @__PURE__ */ new Date();
              if (k.y = k.y || D, x || j && (j.y = D), (N = g["#"]) || (N = g["#"] = String.random(9)), !c && h(N), !(G = g["##"]) && l !== g.put && !k.via && r) {
                o.hash(g, x);
                return;
              }
              if (!x && r && (x = (A = m.s[r]) && (A.via || (A = A.it) && (A = A._) && A.via) || (A = o.last) && r === A["#"] && o.leap), !x && r)
                return m.s[r] ? void 0 : (console.STAT && console.STAT(+/* @__PURE__ */ new Date(), ++t, "total no peer to ack to"), !1);
              if (r && !g.put && !G && ((m.s[r] || "").it || "")["##"])
                return !1;
              if (!x && o.way)
                return o.way(g);
              if (j && (j.yh = +/* @__PURE__ */ new Date()), !(d = k.raw)) {
                o.raw(g, x);
                return;
              }
              if (j && (j.yr = +/* @__PURE__ */ new Date()), !x || !x.id) {
                if (!Object.plain(x || i.peers))
                  return !1;
                var D = +/* @__PURE__ */ new Date();
                i.puff;
                var O = i.peers, T = Object.keys(x || i.peers || {});
                console.STAT && console.STAT(D, +/* @__PURE__ */ new Date() - D, "peer keys"), function U() {
                  var I = +/* @__PURE__ */ new Date();
                  c = 1;
                  var J = k.raw;
                  k.raw = d;
                  for (var K = 0, M; K < 9 && (M = (T || "")[K++]); )
                    (M = O[M] || (x || "")[M]) && o.say(g, M);
                  k.raw = J, c = 0, T = T.slice(K), console.STAT && console.STAT(I, +/* @__PURE__ */ new Date() - I, "say loop"), T.length && (y(U, 0), r && h(r));
                }();
                return;
              }
              if (!x.wire && o.wire && o.wire(x), N !== x.last) {
                if (x.last = N, x === k.via || (A = k.yo) && (A[x.url] || A[x.pid] || A[x.id]))
                  return !1;
                if (console.STAT && console.STAT(D, ((j || k).yp = +/* @__PURE__ */ new Date()) - (k.y || D), "say prep"), !c && r && h(r), x.batch) {
                  if (x.tail = (A = x.tail || 0) + d.length, x.tail <= i.pack) {
                    x.batch += (A ? "," : "") + d;
                    return;
                  }
                  _(x);
                }
                x.batch = "[";
                var B = +/* @__PURE__ */ new Date();
                setTimeout(function() {
                  console.STAT && console.STAT(B, +/* @__PURE__ */ new Date() - B, "0ms TO"), _(x);
                }, i.gap), a(d, x), console.STAT && r === x.SI && console.STAT(D, +/* @__PURE__ */ new Date() - x.SH, "say ack");
              }
            }, o.say.c = o.say.d = 0, o.raw = function(g, x) {
              if (!g)
                return "";
              var A = g._ || {}, N, G;
              if (G = A.raw)
                return G;
              if (typeof g == "string")
                return g;
              var d = g["##"], r = g["@"];
              if (d && r) {
                if (!A.via && e(r + d))
                  return !1;
                if (G = (m.s[r] || "").it) {
                  if (d === G["##"])
                    return !1;
                  G["##"] || (G["##"] = d);
                }
              }
              if (!g.dam && !g["@"]) {
                var k = 0, j = [];
                G = i.peers;
                for (var D in G) {
                  var O = G[D];
                  if (j.push(O.url || O.pid || O.id), ++k > 6)
                    break;
                }
                k > 1 && (g["><"] = j.join());
              }
              if (g.put && (G = g.ok) && (g.ok = { "@": (G["@"] || 1) - 1, "/": G["/"] == g._.near ? o.near : G["/"] }), N = A.$put) {
                G = {}, Object.keys(g).forEach(function(B) {
                  G[B] = g[B];
                }), G.put = ":])([:", s(G, function(B, C) {
                  if (!B) {
                    var U = +/* @__PURE__ */ new Date();
                    G = C.indexOf('"put":":])([:"'), T(l, C = C.slice(0, G + 6) + N + C.slice(G + 14)), console.STAT && console.STAT(U, +/* @__PURE__ */ new Date() - U, "say slice");
                  }
                });
                return;
              }
              s(g, T);
              function T(B, C) {
                B || (A.raw = C, o.say(g, x));
              }
            };
          }();
          function _(t) {
            var c = t.batch, v = typeof c == "string";
            if (v && (c += "]"), t.batch = t.tail = null, !!c && !(v ? 3 > c.length : !c.length)) {
              if (!v)
                try {
                  c = c.length === 1 ? c[0] : JSON.stringify(c);
                } catch (S) {
                  return i.log("DAM JSON stringify error", S);
                }
              c && a(c, t);
            }
          }
          function a(t, c) {
            try {
              var v = c.wire;
              c.say ? c.say(t) : v.send && v.send(t), o.say.d += t.length || 0, ++o.say.c;
            } catch {
              (c.queue = c.queue || []).push(t);
            }
          }
          return o.near = 0, o.hi = function(t) {
            var c = t.wire, v;
            if (!c) {
              o.wire(t.length && { url: t, id: t } || t);
              return;
            }
            t.id ? i.peers[t.url || t.id] = t : (v = t.id = t.id || t.url || String.random(9), o.say({ dam: "?", pid: u.opt.pid }, i.peers[v] = t), delete m.s[t.last]), t.met || (o.near++, t.met = +/* @__PURE__ */ new Date(), u.on("hi", t)), v = t.queue, t.queue = [], setTimeout.each(v || [], function(S) {
              a(S, t);
            }, 0, 9);
          }, o.bye = function(t) {
            t.met && --o.near, delete t.met, u.on("bye", t);
            var c = +/* @__PURE__ */ new Date();
            c = c - (t.met || c), o.bye.time = ((o.bye.time || c) + c) / 2;
          }, o.hear["!"] = function(t, c) {
            i.log("Error:", t.err);
          }, o.hear["?"] = function(t, c) {
            t.pid && (c.pid || (c.pid = t.pid), t["@"]) || (o.say({ dam: "?", pid: i.pid, "@": t["#"] }, c), delete m.s[c.last]);
          }, o.hear.mob = function(t, c) {
            if (t.peers) {
              var v = Object.keys(t.peers), S = v[Math.random() * v.length >> 0];
              S && (o.bye(c), o.hi(S));
            }
          }, u.on("create", function(t) {
            t.opt.pid = t.opt.pid || String.random(9), this.to.next(t), t.on("out", o.say);
          }), u.on("bye", function(t, c) {
            t = i.peers[t.id || t] || t, this.to.next(t), t.bye ? t.bye() : (c = t.wire) && c.close && c.close(), delete i.peers[t.id], t.wire = null;
          }), u.on("bye", function(t, c) {
            this.to.next(t), (c = console.STAT) && (c.peers = o.near), (c = t.url) && setTimeout(function() {
            }, i.lack || 9e3);
          }), u.on("hi", function(t, c) {
            if (this.to.next(t), (c = console.STAT) && (c.peers = o.near), !i.super) {
              var v = Object.keys(u.next || "");
              v.length > 9999 && !console.SUBS && console.log(console.SUBS = "Warning: You have more than 10K live GETs, which might use more bandwidth than your screen can show - consider `.off()`."), setTimeout.each(v, function(S) {
                var g = u.next[S];
                if (i.super || (g.ask || "")[""]) {
                  o.say({ get: { "#": S } }, t);
                  return;
                }
                setTimeout.each(Object.keys(g.ask || ""), function(x) {
                  x && o.say({ "##": String.hash((u.graph[S] || "")[x]), get: { "#": S, ".": x } }, t);
                });
              });
            }
          }), o;
        }
        var l;
        try {
          $.exports = w;
        } catch {
        }
      })(p, "./mesh"), p(function($) {
        var n = p("./index");
        n.Mesh = p("./mesh"), n.on("opt", function(s) {
          if (this.to.next(s), s.once)
            return;
          var w = s.opt;
          if (w.WebSocket === !1)
            return;
          var l = n.window || {}, u = w.WebSocket || l.WebSocket || l.webkitWebSocket || l.mozWebSocket;
          if (!u)
            return;
          w.WebSocket = u;
          var o = w.mesh = w.mesh || n.Mesh(s);
          o.wire || w.wire, o.wire = w.wire = i;
          function i(h) {
            try {
              if (!h || !h.url)
                return _ && _(h);
              var b = h.url.replace(/^http/, "ws"), _ = h.wire = new w.WebSocket(b);
              return _.onclose = function() {
                m(h), w.mesh.bye(h);
              }, _.onerror = function(a) {
                m(h);
              }, _.onopen = function() {
                w.mesh.hi(h);
              }, _.onmessage = function(a) {
                a && w.mesh.hear(a.data || a, h);
              }, _;
            } catch {
              w.mesh.bye(h);
            }
          }
          setTimeout(function() {
            !w.super && s.on("out", { dam: "hi" });
          }, 1);
          var y = 2 * 999;
          function m(h) {
            clearTimeout(h.defer), w.peers[h.url] && (e && h.retry <= 0 || (h.retry = (h.retry || w.retry + 1 || 60) - (-h.tried + (h.tried = +/* @__PURE__ */ new Date()) < y * 4 ? 1 : 0), h.defer = setTimeout(function b() {
              if (e && e.hidden)
                return setTimeout(b, y);
              i(h);
            }, y)));
          }
          var e = "" + f != typeof document && document;
        });
        var f;
      })(p, "./websocket"), p(function($) {
        if (!(typeof Gun > "u")) {
          var n = function() {
          }, f;
          try {
            f = (Gun.window || n).localStorage;
          } catch {
          }
          f || (Gun.log("Warning: No localStorage exists to persist data to!"), f = { setItem: function(w, l) {
            this[w] = l;
          }, removeItem: function(w) {
            delete this[w];
          }, getItem: function(w) {
            return this[w];
          } });
          var s = JSON.stringifyAsync || function(w, l, u, o) {
            var i;
            try {
              l(i, JSON.stringify(w, u, o));
            } catch (y) {
              l(y);
            }
          };
          Gun.on("create", function w(l) {
            this.to.next(l);
            var u = l.opt;
            l.graph;
            var o = [], i, y, m, e;
            if (u.localStorage === !1)
              return;
            u.prefix = u.file || "gun/";
            try {
              i = w[u.prefix] = w[u.prefix] || JSON.parse(m = f.getItem(u.prefix)) || {};
            } catch {
              i = w[u.prefix] = {};
            }
            m = (m || "").length, l.on("get", function(b) {
              this.to.next(b);
              var _ = b.get, a, t, c, v;
              !_ || !(a = _["#"]) || (t = i[a] || v, t && (c = _["."]) && !Object.plain(c) && (t = Gun.state.ify({}, c, Gun.state.is(t, c), t[c], a)), Gun.on.get.ack(b, t));
            }), l.on("put", function(b) {
              this.to.next(b);
              var _ = b.put, a = _["#"], t = _["."], c = b["#"], v = b.ok || "";
              if (i[a] = Gun.state.ify(i[a], t, _[">"], _[":"], a), e && m > 4999880) {
                l.on("in", { "@": c, err: "localStorage max!" });
                return;
              }
              !b["@"] && (!b._.via || Math.random() < v["@"] / v["/"]) && o.push(c), !y && (y = setTimeout(h, 9 + m / 333));
            });
            function h() {
              if (!o.length && ((setTimeout.turn || "").s || "").length) {
                setTimeout(h, 99);
                return;
              }
              var b = o;
              clearTimeout(y), y = !1, o = [], s(i, function(_, a) {
                try {
                  !_ && f.setItem(u.prefix, a);
                } catch (t) {
                  _ = e = t || "localStorage failure";
                }
                _ && (Gun.log(_ + " Consider using GUN's IndexedDB plugin for RAD for more storage space, https://gun.eco/docs/RAD#install"), l.on("localStorage:error", { err: _, get: u.prefix, put: i })), m = a.length, setTimeout.each(b, function(t) {
                  l.on("in", { "@": t, err: _, ok: 0 });
                }, 0, 99);
              });
            }
          });
        }
      })(p, "./localStorage");
    })(), function() {
      var G;
      if ("" + G != typeof Gun) {
        var p = function(d) {
          console.warn("Warning! Deprecated internal utility will break in next version:", d);
        }, E = Gun;
        E.fn = E.fn || { is: function(d) {
          return p("fn"), !!d && typeof d == "function";
        } }, E.bi = E.bi || { is: function(d) {
          return p("bi"), d instanceof Boolean || typeof d == "boolean";
        } }, E.num = E.num || { is: function(d) {
          return p("num"), !$(d) && (d - parseFloat(d) + 1 >= 0 || d === 1 / 0 || d === -1 / 0);
        } }, E.text = E.text || { is: function(d) {
          return p("text"), typeof d == "string";
        } }, E.text.ify = E.text.ify || function(d) {
          return p("text.ify"), E.text.is(d) ? d : typeof JSON < "u" ? JSON.stringify(d) : d && d.toString ? d.toString() : d;
        }, E.text.random = E.text.random || function(d, r) {
          p("text.random");
          var k = "";
          for (d = d || 24, r = r || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz"; d > 0; )
            k += r.charAt(Math.floor(Math.random() * r.length)), d--;
          return k;
        }, E.text.match = E.text.match || function(d, r) {
          var k, j;
          return p("text.match"), typeof d != "string" ? !1 : (typeof r == "string" && (r = { "=": r }), r = r || {}, k = r["="] || r["*"] || r[">"] || r["<"], d === k ? !0 : j !== r["="] ? !1 : (k = r["*"] || r[">"] || r["<"], d.slice(0, (k || "").length) === k ? !0 : j !== r["*"] ? !1 : j !== r[">"] && j !== r["<"] ? d >= r[">"] && d <= r["<"] : j !== r[">"] && d >= r[">"] || j !== r["<"] && d <= r["<"]));
        }, E.text.hash = E.text.hash || function(d, r) {
          if (p("text.hash"), typeof d == "string") {
            if (r = r || 0, !d.length)
              return r;
            for (var k = 0, j = d.length, D; k < j; ++k)
              D = d.charCodeAt(k), r = (r << 5) - r + D, r |= 0;
            return r;
          }
        }, E.list = E.list || { is: function(d) {
          return p("list"), d instanceof Array;
        } }, E.list.slit = E.list.slit || Array.prototype.slice, E.list.sort = E.list.sort || function(d) {
          return p("list.sort"), function(r, k) {
            return !r || !k ? 0 : (r = r[d], k = k[d], r < k ? -1 : r > k ? 1 : 0);
          };
        }, E.list.map = E.list.map || function(d, r, k) {
          return p("list.map"), A(d, r, k);
        }, E.list.index = 1, E.obj = E.boj || { is: function(d) {
          return p("obj"), d ? d instanceof Object && d.constructor === Object || Object.prototype.toString.call(d).match(/^\[object (\w+)\]$/)[1] === "Object" : !1;
        } }, E.obj.put = E.obj.put || function(d, r, k) {
          return p("obj.put"), (d || {})[r] = k, d;
        }, E.obj.has = E.obj.has || function(d, r) {
          return p("obj.has"), d && Object.prototype.hasOwnProperty.call(d, r);
        }, E.obj.del = E.obj.del || function(d, r) {
          if (p("obj.del"), !!d)
            return d[r] = null, delete d[r], d;
        }, E.obj.as = E.obj.as || function(d, r, k, j) {
          return p("obj.as"), d[r] = d[r] || (j === k ? {} : k);
        }, E.obj.ify = E.obj.ify || function(d) {
          if (p("obj.ify"), c(d))
            return d;
          try {
            d = JSON.parse(d);
          } catch {
            d = {};
          }
          return d;
        }, function() {
          var d;
          function r(k, j) {
            S(this, j) && d !== this[j] || (this[j] = k);
          }
          E.obj.to = E.obj.to || function(k, j) {
            return p("obj.to"), j = j || {}, A(k, r, j), j;
          };
        }(), E.obj.copy = E.obj.copy || function(d) {
          return p("obj.copy"), d && JSON.parse(JSON.stringify(d));
        }, function() {
          function d(r, k) {
            var j = this.n, D;
            if (!(j && (k === j || c(j) && S(j, k))) && D !== k)
              return !0;
          }
          E.obj.empty = E.obj.empty || function(r, k) {
            return p("obj.empty"), r ? !A(r, d, { n: k }) : !0;
          };
        }(), function() {
          function d(j, D) {
            if (arguments.length === 2) {
              d.r = d.r || {}, d.r[j] = D;
              return;
            }
            d.r = d.r || [], d.r.push(j);
          }
          var r = Object.keys, k;
          Object.keys = Object.keys || function(j) {
            return k(j, function(D, O, T) {
              T(O);
            });
          }, E.obj.map = k = E.obj.map || function(j, D, O) {
            p("obj.map");
            var T, B = 0, C, U, I, J, K = typeof D == "function";
            if (d.r = T, r && c(j) && (I = r(j), J = !0), O = O || {}, $(j) || I)
              for (C = (I || j).length; B < C; B++) {
                var M = B + E.list.index;
                if (K) {
                  if (U = J ? D.call(O, j[I[B]], I[B], d) : D.call(O, j[B], M, d), U !== T)
                    return U;
                } else if (D === j[J ? I[B] : B])
                  return I ? I[B] : M;
              }
            else
              for (B in j)
                if (K) {
                  if (S(j, B) && (U = O ? D.call(O, j[B], B, d) : D(j[B], B, d), U !== T))
                    return U;
                } else if (D === j[B])
                  return B;
            return K ? d.r : E.list.index ? 0 : -1;
          };
        }(), E.time = E.time || {}, E.time.is = E.time.is || function(d) {
          return p("time"), d ? d instanceof Date : +(/* @__PURE__ */ new Date()).getTime();
        };
        var a = E.fn.is, $ = E.list.is, t = E.obj, c = t.is, S = t.has, A = t.map, n = {};
        n.is = function(d) {
          return p("val.is"), d === G ? !1 : d === null ? !0 : d === 1 / 0 ? !1 : w(d) || s(d) || e(d) ? !0 : n.link.is(d) || !1;
        }, n.link = n.rel = { _: "#" }, function() {
          n.link.is = function(r) {
            if (p("val.link.is"), r && r[f] && !r._ && c(r)) {
              var k = {};
              if (A(r, d, k), k.id)
                return k.id;
            }
            return !1;
          };
          function d(r, k) {
            var j = this;
            if (j.id)
              return j.id = !1;
            if (k == f && w(r))
              j.id = r;
            else
              return j.id = !1;
          }
        }(), n.link.ify = function(d) {
          return p("val.link.ify"), x({}, f, d);
        }, E.obj.has._ = ".";
        var f = n.link._, G, s = E.bi.is, e = E.num.is, w = E.text.is, t = E.obj, c = t.is, x = t.put, A = t.map;
        E.val = E.val || n;
        var l = { _: "_" };
        l.soul = function(d, r) {
          return p("node.soul"), d && d._ && d._[r || i];
        }, l.soul.ify = function(d, r) {
          return p("node.soul.ify"), r = typeof r == "string" ? { soul: r } : r || {}, d = d || {}, d._ = d._ || {}, d._[i] = r.soul || d._[i] || o(), d;
        }, l.soul._ = n.link._, function() {
          l.is = function(r, k, j) {
            p("node.is");
            var D;
            return c(r) && (D = l.soul(r)) ? !A(r, d, { as: j, cb: k, s: D, n: r }) : !1;
          };
          function d(r, k) {
            if (k !== l._) {
              if (!n.is(r))
                return !0;
              this.cb && this.cb.call(this.as, r, k, this.n, this.s);
            }
          }
        }(), function() {
          l.ify = function(r, k, j) {
            return p("node.ify"), k ? typeof k == "string" ? k = { soul: k } : typeof k == "function" && (k = { map: k }) : k = {}, k.map && (k.node = k.map.call(j, r, G, k.node || {})), (k.node = l.soul.ify(k.node || {}, k)) && A(r, d, { o: k, as: j }), k.node;
          };
          function d(r, k) {
            var j = this.o, D, O;
            if (j.map) {
              D = j.map.call(this.as, r, "" + k, j.node), O === D ? v(j.node, k) : j.node && (j.node[k] = D);
              return;
            }
            n.is(r) && (j.node[k] = r);
          }
        }();
        var t = E.obj, c = t.is, v = t.del, A = t.map, u = E.text, o = u.random, i = l.soul._, G;
        E.node = E.node || l;
        var y = E.state;
        y.lex = function() {
          return p("state.lex"), y().toString(36).replace(".", "");
        }, y.to = function(d, r, k) {
          p("state.to");
          var j = (d || {})[r];
          return c(j) && (j = N(j)), y.ify(k, r, y.is(d, r), j, l.soul(d));
        }, function() {
          y.map = function(r, k, j) {
            p("state.map");
            var D, O = c(O = r || k) ? O : null;
            return r = a(r = r || k) ? r : null, O && !r ? (k = e(k) ? k : y(), O[b] = O[b] || {}, A(O, d, { o: O, s: k }), O) : (j = j || c(k) ? k : D, k = e(k) ? k : y(), function(T, B, C, U) {
              if (!r)
                return d.call({ o: C, s: k }, T, B), T;
              r.call(j || this || {}, T, B, C, U), !(S(C, B) && D === C[B]) && d.call({ o: C, s: k }, T, B);
            });
          };
          function d(r, k) {
            b !== k && y.ify(this.o, k, this.s);
          }
        }();
        var t = E.obj;
        t.as;
        var S = t.has, c = t.is, A = t.map, N = t.copy, m = E.num, e = m.is, h = E.fn, a = h.is, b = l._, G, _ = {};
        (function() {
          _.is = function(k, j, D, O) {
            return p("graph.is"), !k || !c(k) || g(k) ? !1 : !A(k, d, { cb: j, fn: D, as: O });
          };
          function d(k, j) {
            if (!k || j !== l.soul(k) || !l.is(k, this.fn, this.as))
              return !0;
            this.cb && (r.n = k, r.as = this.as, this.cb.call(r.as, k, j, r));
          }
          function r(k) {
            k && l.is(r.n, k, r.as);
          }
        })(), function() {
          _.ify = function(O, T, B) {
            p("graph.ify");
            var C = { path: [], obj: O };
            return T ? typeof T == "string" ? T = { soul: T } : typeof T == "function" && (T.map = T) : T = {}, typeof B == "string" && (T.soul = T.soul || B, B = G), T.soul && (C.link = n.link.ify(T.soul)), T.shell = (B || {}).shell, T.graph = T.graph || {}, T.seen = T.seen || [], T.as = T.as || B, d(T, C), T.root = C.node, T.graph;
          };
          function d(O, T) {
            var B;
            return (B = D(O, T)) ? B : (T.env = O, T.soul = k, l.ify(T.obj, r, T) && (T.link = T.link || n.link.ify(l.soul(T.node)), T.obj !== O.shell && (O.graph[n.link.is(T.link)] = T.node)), T);
          }
          function r(O, T, B) {
            var C = this, U = C.env, I, J;
            if (l._ === T && S(O, n.link._))
              return B._;
            if (I = j(O, T, B, C, U)) {
              if (T || (C.node = C.node || B || {}, S(O, l._) && l.soul(O) && (C.node._ = N(O._)), C.node = l.soul.ify(C.node, n.link.is(C.link)), C.link = C.link || n.link.ify(l.soul(C.node))), (J = U.map) && (J.call(U.as || {}, O, T, B, C), S(B, T))) {
                if (O = B[T], G === O) {
                  v(B, T);
                  return;
                }
                if (!(I = j(O, T, B, C, U)))
                  return;
              }
              if (!T)
                return C.node;
              if (I === !0)
                return O;
              if (J = d(U, { obj: O, path: C.path.concat(T) }), !!J.node)
                return J.link;
            }
          }
          function k(O) {
            var T = this, B = n.link.is(T.link), C = T.env.graph;
            T.link = T.link || n.link.ify(O), T.link[n.link._] = O, T.node && T.node[l._] && (T.node[l._][n.link._] = O), S(C, B) && (C[O] = C[B], v(C, B));
          }
          function j(O, T, B, C, U) {
            var I;
            if (n.is(O))
              return !0;
            if (c(O))
              return 1;
            if (I = U.invalid)
              return O = I.call(U.as || {}, O, T, B), j(O, T, B, C, U);
            U.err = "Invalid value at '" + C.path.concat(T).join(".") + "'!", E.list.is(O) && (U.err += " Use `.set(item)` instead of an Array.");
          }
          function D(O, T) {
            for (var B = O.seen, C = B.length, U; C--; )
              if (U = B[C], T.obj === U.obj)
                return U;
            B.push(T);
          }
        }(), _.node = function(d) {
          p("graph.node");
          var r = l.soul(d);
          if (r)
            return x({}, r, d);
        }, function() {
          _.to = function(r, k, j) {
            if (p("graph.to"), !!r) {
              var D = {};
              return j = j || { seen: {} }, A(r[k], d, { obj: D, graph: r, opt: j }), D;
            }
          };
          function d(r, k) {
            var j, D;
            if (l._ === k) {
              if (g(r, n.link._))
                return;
              this.obj[k] = N(r);
              return;
            }
            if (!(j = n.link.is(r))) {
              this.obj[k] = r;
              return;
            }
            if (D = this.opt.seen[j]) {
              this.obj[k] = D;
              return;
            }
            this.obj[k] = this.opt.seen[j] = _.to(this.graph, j, this.opt);
          }
        }();
        var a = E.fn.is, t = E.obj, c = t.is, v = t.del, S = t.has, g = t.empty, x = t.put, A = t.map, N = t.copy, G;
        E.graph = E.graph || _;
      }
    }();
  }(ft)), Y;
}
var st = ot();
const lt = /* @__PURE__ */ ut(st);
var Q = {}, ct = {
  get exports() {
    return Q;
  },
  set exports(P) {
    Q = P;
  }
};
(function(P) {
  (function() {
    function p($, n) {
      return n ? it("/")($) : $.slice ? p[f($)] : function(s, w) {
        $(s = { exports: {} }), p[f(w)] = s.exports;
      };
      function f(s) {
        return s.split("/").slice(-1).toString().replace(".js", "");
      }
    }
    var E = P;
    p(function($) {
      typeof self < "u" && ($.window = self), typeof window < "u" && ($.window = window);
      var n = $.window || $, f, s = n.SEA || {};
      (s.window = $.window) && (s.window.SEA = s);
      try {
        f + "" != typeof E && (E.exports = s);
      } catch {
      }
      $.exports = s;
    })(p, "./root"), p(function($) {
      var n = p("./root");
      try {
        n.window && location.protocol.indexOf("s") < 0 && location.host.indexOf("localhost") < 0 && !/^127\.\d+\.\d+\.\d+$/.test(location.hostname) && location.protocol.indexOf("file:") < 0 && (console.warn("HTTPS needed for WebCrypto in SEA, redirecting..."), location.protocol = "https:");
      } catch {
      }
    })(p, "./https"), p(function($) {
      var n;
      if (n + "" == typeof btoa) {
        if (n + "" == typeof Buffer)
          try {
            V.Buffer = p("buffer", 1).Buffer;
          } catch {
            console.log("Please `npm install buffer` or add it to your package.json !");
          }
        V.btoa = function(f) {
          return Buffer.from(f, "binary").toString("base64");
        }, V.atob = function(f) {
          return Buffer.from(f, "base64").toString("binary");
        };
      }
    })(p, "./base64"), p(function($) {
      p("./base64");
      function n() {
      }
      Object.assign(n, { from: Array.from }), n.prototype = Object.create(Array.prototype), n.prototype.toString = function(f, s, w) {
        f = f || "utf8", s = s || 0;
        const l = this.length;
        if (f === "hex") {
          const u = new Uint8Array(this);
          return [...Array((w && w + 1 || l) - s).keys()].map((o) => u[o + s].toString(16).padStart(2, "0")).join("");
        }
        if (f === "utf8")
          return Array.from(
            { length: (w || l) - s },
            (u, o) => String.fromCharCode(this[o + s])
          ).join("");
        if (f === "base64")
          return btoa(this);
      }, $.exports = n;
    })(p, "./array"), p(function($) {
      p("./base64");
      var n = p("./array");
      function f(...s) {
        return console.warn("new SafeBuffer() is depreciated, please use SafeBuffer.from()"), f.from(...s);
      }
      f.prototype = Object.create(Array.prototype), Object.assign(f, {
        // (data, enc) where typeof data === 'string' then enc === 'utf8'|'hex'|'base64'
        from() {
          if (!Object.keys(arguments).length || arguments[0] == null)
            throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
          const s = arguments[0];
          let w;
          if (typeof s == "string") {
            const u = arguments[1] || "utf8";
            if (u === "hex") {
              const o = s.match(/([\da-fA-F]{2})/g).map((i) => parseInt(i, 16));
              if (!o || !o.length)
                throw new TypeError("Invalid first argument for type 'hex'.");
              w = n.from(o);
            } else if (u === "utf8" || u === "binary") {
              const o = s.length, i = new Uint16Array(o);
              Array.from({ length: o }, (y, m) => i[m] = s.charCodeAt(m)), w = n.from(i);
            } else if (u === "base64") {
              const o = atob(s), i = o.length, y = new Uint8Array(i);
              Array.from({ length: i }, (m, e) => y[e] = o.charCodeAt(e)), w = n.from(y);
            } else
              u === "binary" ? w = n.from(s) : console.info("SafeBuffer.from unknown encoding: " + u);
            return w;
          }
          if (s.byteLength, s.byteLength ? s.byteLength : s.length) {
            let u;
            return s instanceof ArrayBuffer && (u = new Uint8Array(s)), n.from(u || s);
          }
        },
        // This is 'safe-buffer.alloc' sans encoding support
        alloc(s, w = 0) {
          return n.from(new Uint8Array(Array.from({ length: s }, () => w)));
        },
        // This is normal UNSAFE 'buffer.alloc' or 'new Buffer(length)' - don't use!
        allocUnsafe(s) {
          return n.from(new Uint8Array(Array.from({ length: s })));
        },
        // This puts together array of array like members
        concat(s) {
          if (!Array.isArray(s))
            throw new TypeError("First argument must be Array containing ArrayBuffer or Uint8Array instances.");
          return n.from(s.reduce((w, l) => w.concat(Array.from(l)), []));
        }
      }), f.prototype.from = f.from, f.prototype.toString = n.prototype.toString, $.exports = f;
    })(p, "./buffer"), p(function($) {
      const n = p("./root"), f = { Buffer: p("./buffer") };
      var s = {}, w;
      if (JSON.parseAsync = JSON.parseAsync || function(u, o, i) {
        var y;
        try {
          o(y, JSON.parse(u, i));
        } catch (m) {
          o(m);
        }
      }, JSON.stringifyAsync = JSON.stringifyAsync || function(u, o, i, y) {
        var m;
        try {
          o(m, JSON.stringify(u, i, y));
        } catch (e) {
          o(e);
        }
      }, f.parse = function(u, o) {
        return new Promise(function(i, y) {
          JSON.parseAsync(u, function(m, e) {
            m ? y(m) : i(e);
          }, o);
        });
      }, f.stringify = function(u, o, i) {
        return new Promise(function(y, m) {
          JSON.stringifyAsync(u, function(e, h) {
            e ? m(e) : y(h);
          }, o, i);
        });
      }, n.window && (f.crypto = n.window.crypto || n.window.msCrypto, f.subtle = (f.crypto || s).subtle || (f.crypto || s).webkitSubtle, f.TextEncoder = n.window.TextEncoder, f.TextDecoder = n.window.TextDecoder, f.random = (u) => f.Buffer.from(f.crypto.getRandomValues(new Uint8Array(f.Buffer.alloc(u))))), !f.TextDecoder) {
        const { TextEncoder: u, TextDecoder: o } = p((w + "" == typeof E ? "." : "") + "./lib/text-encoding", 1);
        f.TextDecoder = o, f.TextEncoder = u;
      }
      if (!f.crypto)
        try {
          var l = p("crypto", 1);
          Object.assign(f, {
            crypto: l,
            random: (o) => f.Buffer.from(l.randomBytes(o))
          });
          const { Crypto: u } = p("@peculiar/webcrypto", 1);
          f.ossl = f.subtle = new u({ directory: "ossl" }).subtle;
        } catch {
          console.log("Please `npm install @peculiar/webcrypto` or add it to your package.json !");
        }
      $.exports = f;
    })(p, "./shim"), p(function($) {
      var n = p("./root"), f = p("./shim"), s = {};
      s.pbkdf2 = { hash: { name: "SHA-256" }, iter: 1e5, ks: 64 }, s.ecdsa = {
        pair: { name: "ECDSA", namedCurve: "P-256" },
        sign: { name: "ECDSA", hash: { name: "SHA-256" } }
      }, s.ecdh = { name: "ECDH", namedCurve: "P-256" }, s.jwk = function(w, l) {
        w = w.split(".");
        var u = w[0], o = w[1], i = { kty: "EC", crv: "P-256", x: u, y: o, ext: !0 };
        return i.key_ops = l ? ["sign"] : ["verify"], l && (i.d = l), i;
      }, s.keyToJwk = function(w) {
        return { kty: "oct", k: w.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, ""), ext: !1, alg: "A256GCM" };
      }, s.recall = {
        validity: 12 * 60 * 60,
        // internally in seconds : 12 hours
        hook: function(w) {
          return w;
        }
        // { iat, exp, alias, remember } // or return new Promise((resolve, reject) => resolve(props)
      }, s.check = function(w) {
        return typeof w == "string" && w.slice(0, 4) === "SEA{";
      }, s.parse = async function(l) {
        try {
          var u = typeof l == "string";
          return u && l.slice(0, 4) === "SEA{" && (l = l.slice(3)), u ? await f.parse(l) : l;
        } catch {
        }
        return l;
      }, n.opt = s, $.exports = s;
    })(p, "./settings"), p(function($) {
      var n = p("./shim");
      $.exports = async function(f, s) {
        var w = typeof f == "string" ? f : await n.stringify(f), l = await n.subtle.digest({ name: s || "SHA-256" }, new n.TextEncoder().encode(w));
        return n.Buffer.from(l);
      };
    })(p, "./sha256"), p(function($) {
      const n = p("./shim"), f = n.subtle, s = n.ossl ? n.ossl : f, w = (l) => s.digest({ name: "SHA-1" }, new ArrayBuffer(l));
      $.exports = w;
    })(p, "./sha1"), p(function($) {
      var n = p("./root"), f = p("./shim"), s = p("./settings"), w = p("./sha256"), l;
      n.work = n.work || (async (u, o, i, y) => {
        try {
          var m = (o || {}).epub || o;
          if (y = y || {}, m instanceof Function && (i = m, m = l), u = typeof u == "string" ? u : await f.stringify(u), (y.name || "").toLowerCase().slice(0, 3) === "sha") {
            var e = f.Buffer.from(await w(u, y.name), "binary").toString(y.encode || "base64");
            if (i)
              try {
                i(e);
              } catch (a) {
                console.log(a);
              }
            return e;
          }
          m = m || f.random(9);
          var h = await (f.ossl || f.subtle).importKey("raw", new f.TextEncoder().encode(u), { name: y.name || "PBKDF2" }, !1, ["deriveBits"]), b = await (f.ossl || f.subtle).deriveBits({
            name: y.name || "PBKDF2",
            iterations: y.iterations || s.pbkdf2.iter,
            salt: new f.TextEncoder().encode(y.salt || m),
            hash: y.hash || s.pbkdf2.hash
          }, h, y.length || s.pbkdf2.ks * 8);
          u = f.random(u.length);
          var _ = f.Buffer.from(b, "binary").toString(y.encode || "base64");
          if (i)
            try {
              i(_);
            } catch (a) {
              console.log(a);
            }
          return _;
        } catch (a) {
          if (console.log(a), n.err = a, n.throw)
            throw a;
          i && i();
          return;
        }
      }), $.exports = n.work;
    })(p, "./work"), p(function($) {
      var n = p("./root"), f = p("./shim");
      p("./settings"), n.name = n.name || (async (s, w) => {
        try {
          if (s)
            try {
              s();
            } catch (l) {
              console.log(l);
            }
          return;
        } catch (l) {
          if (console.log(l), n.err = l, n.throw)
            throw l;
          s && s();
          return;
        }
      }), n.pair = n.pair || (async (s, w) => {
        try {
          var l = f.ossl || f.subtle, u = await f.subtle.generateKey({ name: "ECDSA", namedCurve: "P-256" }, !0, ["sign", "verify"]).then(async (y) => {
            var m = {};
            m.priv = (await f.subtle.exportKey("jwk", y.privateKey)).d;
            var e = await f.subtle.exportKey("jwk", y.publicKey);
            return m.pub = e.x + "." + e.y, m;
          });
          try {
            var o = await l.generateKey({ name: "ECDH", namedCurve: "P-256" }, !0, ["deriveKey"]).then(async (y) => {
              var m = {};
              m.epriv = (await l.exportKey("jwk", y.privateKey)).d;
              var e = await l.exportKey("jwk", y.publicKey);
              return m.epub = e.x + "." + e.y, m;
            });
          } catch (y) {
            if (n.window)
              throw y;
            if (y == "Error: ECDH is not a supported algorithm")
              console.log("Ignoring ECDH...");
            else
              throw y;
          }
          o = o || {};
          var i = {
            pub: u.pub,
            priv: u.priv,
            /* pubId, */
            epub: o.epub,
            epriv: o.epriv
          };
          if (s)
            try {
              s(i);
            } catch (y) {
              console.log(y);
            }
          return i;
        } catch (y) {
          if (console.log(y), n.err = y, n.throw)
            throw y;
          s && s();
          return;
        }
      }), $.exports = n.pair;
    })(p, "./pair"), p(function($) {
      var n = p("./root"), f = p("./shim"), s = p("./settings"), w = p("./sha256"), l;
      n.sign = n.sign || (async (u, o, i, y) => {
        try {
          if (y = y || {}, !(o || y).priv) {
            if (!n.I)
              throw "No signing key.";
            o = await n.I(null, { what: u, how: "sign", why: y.why });
          }
          if (l === u)
            throw "`undefined` not allowed.";
          var m = await s.parse(u), e = y.check = y.check || m;
          if (n.verify && (n.opt.check(e) || e && e.s && e.m) && l !== await n.verify(e, o)) {
            var c = await s.parse(e);
            if (y.raw || (c = "SEA" + await f.stringify(c)), i)
              try {
                i(c);
              } catch (S) {
                console.log(S);
              }
            return c;
          }
          var h = o.pub, b = o.priv, _ = s.jwk(h, b), a = await w(m), t = await (f.ossl || f.subtle).importKey("jwk", _, { name: "ECDSA", namedCurve: "P-256" }, !1, ["sign"]).then((v) => (f.ossl || f.subtle).sign({ name: "ECDSA", hash: { name: "SHA-256" } }, v, new Uint8Array(a))), c = { m, s: f.Buffer.from(t, "binary").toString(y.encode || "base64") };
          if (y.raw || (c = "SEA" + await f.stringify(c)), i)
            try {
              i(c);
            } catch (v) {
              console.log(v);
            }
          return c;
        } catch (v) {
          if (console.log(v), n.err = v, n.throw)
            throw v;
          i && i();
          return;
        }
      }), $.exports = n.sign;
    })(p, "./sign"), p(function($) {
      var n = p("./root"), f = p("./shim"), s = p("./settings"), w = p("./sha256"), l;
      n.verify = n.verify || (async (i, y, m, e) => {
        try {
          var h = await s.parse(i);
          if (y === !1) {
            var b = await s.parse(h.m);
            if (m)
              try {
                m(b);
              } catch (A) {
                console.log(A);
              }
            return b;
          }
          e = e || {};
          var _ = y.pub || y, a = n.opt.slow_leak ? await n.opt.slow_leak(_) : await (f.ossl || f.subtle).importKey("jwk", s.jwk(_), { name: "ECDSA", namedCurve: "P-256" }, !1, ["verify"]), t = await w(h.m), c, v, S, g;
          try {
            if (c = f.Buffer.from(h.s, e.encode || "base64"), v = new Uint8Array(c), S = await (f.ossl || f.subtle).verify({ name: "ECDSA", hash: { name: "SHA-256" } }, a, v, new Uint8Array(t)), !S)
              throw "Signature did not match.";
          } catch {
            if (n.opt.fallback)
              return await n.opt.fall_verify(i, y, m, e);
          }
          var x = S ? await s.parse(h.m) : l;
          if (m)
            try {
              m(x);
            } catch (A) {
              console.log(A);
            }
          return x;
        } catch (A) {
          if (console.log(A), n.err = A, n.throw)
            throw A;
          m && m();
          return;
        }
      }), $.exports = n.verify;
      var u = {};
      n.opt.slow_leak = (i) => {
        if (u[i])
          return u[i];
        var y = s.jwk(i);
        return u[i] = (f.ossl || f.subtle).importKey("jwk", y, { name: "ECDSA", namedCurve: "P-256" }, !1, ["verify"]), u[i];
      };
      var o = n.opt;
      n.opt.fall_verify = async function(i, y, m, e, h) {
        if (h === n.opt.fallback)
          throw "Signature did not match";
        h = h || 1;
        var b = i || "";
        i = n.opt.unpack(i) || i;
        var _ = await s.parse(i), a = y.pub || y, t = await n.opt.slow_leak(a), c = h <= n.opt.fallback ? f.Buffer.from(await f.subtle.digest({ name: "SHA-256" }, new f.TextEncoder().encode(await s.parse(_.m)))) : await w(_.m), v, S, g;
        try {
          if (v = f.Buffer.from(_.s, e.encode || "base64"), S = new Uint8Array(v), g = await (f.ossl || f.subtle).verify({ name: "ECDSA", hash: { name: "SHA-256" } }, t, S, new Uint8Array(c)), !g)
            throw "Signature did not match.";
        } catch {
          try {
            v = f.Buffer.from(_.s, "utf8"), S = new Uint8Array(v), g = await (f.ossl || f.subtle).verify({ name: "ECDSA", hash: { name: "SHA-256" } }, t, S, new Uint8Array(c));
          } catch {
            if (!g)
              throw "Signature did not match.";
          }
        }
        var x = g ? await s.parse(_.m) : l;
        if (o.fall_soul = b["#"], o.fall_key = b["."], o.fall_val = i, o.fall_state = b[">"], m)
          try {
            m(x);
          } catch (A) {
            console.log(A);
          }
        return x;
      }, n.opt.fallback = 2;
    })(p, "./verify"), p(function($) {
      var n = p("./shim"), f = p("./settings"), s = p("./sha256");
      const w = async (l, u, o) => {
        const i = l + (u || n.random(8)).toString("utf8"), y = n.Buffer.from(await s(i), "binary"), m = f.keyToJwk(y);
        return await n.subtle.importKey("jwk", m, { name: "AES-GCM" }, !1, ["encrypt", "decrypt"]);
      };
      $.exports = w;
    })(p, "./aeskey"), p(function($) {
      var n = p("./root"), f = p("./shim");
      p("./settings");
      var s = p("./aeskey"), w;
      n.encrypt = n.encrypt || (async (l, u, o, i) => {
        try {
          i = i || {};
          var y = (u || i).epriv || u;
          if (w === l)
            throw "`undefined` not allowed.";
          if (!y) {
            if (!n.I)
              throw "No encryption key.";
            u = await n.I(null, { what: l, how: "encrypt", why: i.why }), y = u.epriv || u;
          }
          var m = typeof l == "string" ? l : await f.stringify(l), e = { s: f.random(9), iv: f.random(15) }, h = await s(y, e.s, i).then((_) => (
            /*shim.ossl ||*/
            f.subtle.encrypt({
              // Keeping the AES key scope as private as possible...
              name: i.name || "AES-GCM",
              iv: new Uint8Array(e.iv)
            }, _, new f.TextEncoder().encode(m))
          )), b = {
            ct: f.Buffer.from(h, "binary").toString(i.encode || "base64"),
            iv: e.iv.toString(i.encode || "base64"),
            s: e.s.toString(i.encode || "base64")
          };
          if (i.raw || (b = "SEA" + await f.stringify(b)), o)
            try {
              o(b);
            } catch (_) {
              console.log(_);
            }
          return b;
        } catch (_) {
          if (console.log(_), n.err = _, n.throw)
            throw _;
          o && o();
          return;
        }
      }), $.exports = n.encrypt;
    })(p, "./encrypt"), p(function($) {
      var n = p("./root"), f = p("./shim"), s = p("./settings"), w = p("./aeskey");
      n.decrypt = n.decrypt || (async (l, u, o, i) => {
        try {
          i = i || {};
          var y = (u || i).epriv || u;
          if (!y) {
            if (!n.I)
              throw "No decryption key.";
            u = await n.I(null, { what: l, how: "decrypt", why: i.why }), y = u.epriv || u;
          }
          var m = await s.parse(l), e, h, b;
          try {
            e = f.Buffer.from(m.s, i.encode || "base64"), h = f.Buffer.from(m.iv, i.encode || "base64"), b = f.Buffer.from(m.ct, i.encode || "base64");
            var _ = await w(y, e, i).then((t) => (
              /*shim.ossl ||*/
              f.subtle.decrypt({
                // Keeping aesKey scope as private as possible...
                name: i.name || "AES-GCM",
                iv: new Uint8Array(h),
                tagLength: 128
              }, t, new Uint8Array(b))
            ));
          } catch {
            if (i.encode === "utf8")
              throw "Could not decrypt";
            if (n.opt.fallback)
              return i.encode = "utf8", await n.decrypt(l, u, o, i);
          }
          var a = await s.parse(new f.TextDecoder("utf8").decode(_));
          if (o)
            try {
              o(a);
            } catch (t) {
              console.log(t);
            }
          return a;
        } catch (t) {
          if (console.log(t), n.err = t, n.throw)
            throw t;
          o && o();
          return;
        }
      }), $.exports = n.decrypt;
    })(p, "./decrypt"), p(function($) {
      var n = p("./root"), f = p("./shim");
      p("./settings"), n.secret = n.secret || (async (w, l, u, o) => {
        try {
          if (o = o || {}, !l || !l.epriv || !l.epub) {
            if (!n.I)
              throw "No secret mix.";
            l = await n.I(null, { what: w, how: "secret", why: o.why });
          }
          var i = w.epub || w, y = l.epub, m = l.epriv, e = f.ossl || f.subtle, h = s(i), b = Object.assign({ public: await e.importKey(...h, !0, []) }, { name: "ECDH", namedCurve: "P-256" }), _ = s(y, m), a = await e.importKey(..._, !1, ["deriveBits"]).then(async (c) => {
            var v = await e.deriveBits(b, c, 256), S = new Uint8Array(v), g = await e.importKey("raw", S, { name: "AES-GCM", length: 256 }, !0, ["encrypt", "decrypt"]);
            return e.exportKey("jwk", g).then(({ k: x }) => x);
          }), t = a;
          if (u)
            try {
              u(t);
            } catch (c) {
              console.log(c);
            }
          return t;
        } catch (c) {
          if (console.log(c), n.err = c, n.throw)
            throw c;
          u && u();
          return;
        }
      });
      var s = (w, l) => {
        var [u, o] = w.split("."), i = l ? { d: l } : {};
        return [
          // Use with spread returned value...
          "jwk",
          Object.assign(
            i,
            { x: u, y: o, kty: "EC", crv: "P-256", ext: !0 }
          ),
          // ??? refactor
          { name: "ECDH", namedCurve: "P-256" }
        ];
      };
      $.exports = n.secret;
    })(p, "./secret"), p(function($) {
      var n = p("./root");
      n.certify = n.certify || (async (f, s = {}, w, l, u = {}) => {
        try {
          if (console.log("SEA.certify() is an early experimental community supported method that may change API behavior without warning in any future version."), f = (() => {
            var t = [];
            if (f) {
              if ((typeof f == "string" || Array.isArray(f)) && f.indexOf("*") > -1)
                return "*";
              if (typeof f == "string")
                return f;
              if (Array.isArray(f)) {
                if (f.length === 1 && f[0])
                  return typeof f[0] == "object" && f[0].pub ? f[0].pub : typeof f[0] == "string" ? f[0] : null;
                f.map((c) => {
                  typeof c == "string" ? t.push(c) : typeof c == "object" && c.pub && t.push(c.pub);
                });
              }
              return typeof f == "object" && f.pub ? f.pub : t.length > 0 ? t : null;
            }
          })(), !f)
            return console.log("No certificant found.");
          const i = u.expiry && (typeof u.expiry == "number" || typeof u.expiry == "string") ? parseFloat(u.expiry) : null, y = (s || {}).read ? s.read : null, m = (s || {}).write ? s.write : typeof s == "string" || Array.isArray(s) || s["+"] || s["#"] || s["."] || s["="] || s["*"] || s[">"] || s["<"] ? s : null, e = (u || {}).block || (u || {}).blacklist || (u || {}).ban || {}, h = e.read && (typeof e.read == "string" || (e.read || {})["#"]) ? e.read : null, b = typeof e == "string" ? e : e.write && (typeof e.write == "string" || e.write["#"]) ? e.write : null;
          if (!y && !m)
            return console.log("No policy found.");
          const _ = JSON.stringify({
            c: f,
            ...i ? { e: i } : {},
            // inject expiry if possible
            ...y ? { r: y } : {},
            // "r" stands for read, which means read permission.
            ...m ? { w: m } : {},
            // "w" stands for write, which means write permission.
            ...h ? { rb: h } : {},
            // inject READ block if possible
            ...b ? { wb: b } : {}
            // inject WRITE block if possible
          });
          var o = await n.sign(_, w, null, { raw: 1 });
          if (u.raw || (o = "SEA" + JSON.stringify(o)), l)
            try {
              l(o);
            } catch (t) {
              console.log(t);
            }
          return o;
        } catch (i) {
          if (n.err = i, n.throw)
            throw i;
          l && l();
          return;
        }
      }), $.exports = n.certify;
    })(p, "./certify"), p(function($) {
      var n = p("./shim"), f = p("./root");
      f.work = p("./work"), f.sign = p("./sign"), f.verify = p("./verify"), f.encrypt = p("./encrypt"), f.decrypt = p("./decrypt"), f.certify = p("./certify"), f.random = f.random || n.random, f.Buffer = f.Buffer || p("./buffer"), f.keyid = f.keyid || (async (s) => {
        try {
          const w = n.Buffer.concat(
            s.replace(/-/g, "+").replace(/_/g, "/").split(".").map((i) => n.Buffer.from(i, "base64"))
          ), l = n.Buffer.concat([
            n.Buffer.from([153, w.length / 256, w.length % 256]),
            w
          ]), u = await sha1hash(l), o = n.Buffer.from(u, "binary");
          return o.toString("hex", o.length - 8);
        } catch (w) {
          throw console.log(w), w;
        }
      }), ((f.window || {}).GUN || {}).SEA = f, $.exports = f;
    })(p, "./sea"), p(function($) {
      var n = p("./sea"), f, s;
      n.window ? f = n.window.GUN || { chain: {} } : f = p((s + "" == typeof E ? "." : "") + "./gun", 1), n.GUN = f;
      function w(u) {
        this._ = { $: this };
      }
      w.prototype = function() {
        function u() {
        }
        return u.prototype = f.chain, new u();
      }(), w.prototype.constructor = w, f.chain.user = function(u) {
        var o = this, y = o.back(-1), i;
        if (u)
          return u = n.opt.pub((u._ || "")["#"]) || u, y.get("~" + u);
        if (i = y.back("user"))
          return i;
        var y = y._, m = y, e = m.opt.uuid || l;
        return (m = (i = m.user = o.chain(new w()))._).opt = {}, m.opt.uuid = function(h) {
          var b = e(), _ = y.user;
          return !_ || !(_ = _.is) || !(_ = _.pub) || (b = "~" + _ + "/" + b, h && h.call && h(null, b)), b;
        }, i;
      };
      function l() {
        return f.state().toString(36).replace(".", "");
      }
      f.User = w, w.GUN = f, w.SEA = f.SEA = n, $.exports = w;
    })(p, "./user"), p(function($) {
      var n, f = "" + n != typeof GUN ? GUN || { chain: {} } : p(("" + n == typeof E ? "." : "") + "./gun", 1);
      f.chain.then = function(s, w) {
        var l = this, u = new Promise(function(o, i) {
          l.once(o, w);
        });
        return s ? u.then(s) : u;
      };
    })(p, "./then"), p(function($) {
      var n = p("./user"), f = n.SEA, s = n.GUN, w = function() {
      };
      n.prototype.create = function(...l) {
        var u = typeof l[0] == "object" && (l[0].pub || l[0].epub) ? l[0] : typeof l[1] == "object" && (l[1].pub || l[1].epub) ? l[1] : null, o = u && (u.pub || u.epub) ? u.pub : typeof l[0] == "string" ? l[0] : null, i = u && (u.pub || u.epub) ? u : o && typeof l[1] == "string" ? l[1] : null, y = l.filter((t) => typeof t == "function")[0] || null, m = l && l.length > 1 && typeof l[l.length - 1] == "object" ? l[l.length - 1] : {}, e = this, h = e._, b = e.back(-1);
        if (y = y || w, m = m || {}, m.check !== !1) {
          var _;
          if (o || (_ = "No user."), (i || "").length < 8 && (_ = "Password too short!"), _)
            return y({ err: s.log(_) }), e;
        }
        if (h.ing)
          return (y || w)({ err: s.log("User is already being created or authenticated!"), wait: !0 }), e;
        h.ing = !0;
        var a = {};
        return a.a = function(t) {
          if (a.pubs = t, t && !m.already) {
            var c = { err: s.log("User already created!") };
            h.ing = !1, (y || w)(c), e.leave();
            return;
          }
          a.salt = String.random(64), f.work(i, a.salt, a.b);
        }, a.b = function(t) {
          a.proof = t, u ? a.c(u) : f.pair(a.c);
        }, a.c = function(t) {
          var c;
          a.pair = t || {}, (c = h.root.user) && (c._.sea = t, c.is = { pub: t.pub, epub: t.epub, alias: o }), a.data = { pub: t.pub }, a.d();
        }, a.d = function() {
          a.data.alias = o, a.e();
        }, a.e = function() {
          a.data.epub = a.pair.epub, f.encrypt({ priv: a.pair.priv, epriv: a.pair.epriv }, a.proof, a.f, { raw: 1 });
        }, a.f = function(t) {
          a.data.auth = JSON.stringify({ ek: t, s: a.salt }), a.g(a.data.auth);
        }, a.g = function(t) {
          var c;
          a.data.auth = a.data.auth || t, b.get(c = "~" + a.pair.pub).put(a.data).on(a.h);
          var v = {};
          v[c] = { "#": c }, b.get("~@" + o).put(v).get(c).on(a.i);
        }, a.h = function(t, c, v, S) {
          S.off(), a.h.ok = 1, a.i();
        }, a.i = function(t, c, v, S) {
          S && (a.i.ok = 1, S.off()), !(!a.h.ok || !a.i.ok) && (h.ing = !1, y({ ok: 0, pub: a.pair.pub }), w === y && (u ? e.auth(u) : e.auth(o, i)));
        }, b.get("~@" + o).once(a.a), e;
      }, n.prototype.leave = function(l, u) {
        var o = this, i = o.back(-1)._.user;
        if (i && (delete i.is, delete i._.is, delete i._.sea), f.window)
          try {
            var y = {};
            y = f.window.sessionStorage, delete y.recall, delete y.pair;
          } catch {
          }
        return o;
      };
    })(p, "./create"), p(function($) {
      var n = p("./user"), f = n.SEA, s = n.GUN, w = function() {
      };
      n.prototype.auth = function(...u) {
        var o = typeof u[0] == "object" && (u[0].pub || u[0].epub) ? u[0] : typeof u[1] == "object" && (u[1].pub || u[1].epub) ? u[1] : null, i = !o && typeof u[0] == "string" ? u[0] : null, y = (i || o && !(o.priv && o.epriv)) && typeof u[1] == "string" ? u[1] : null, m = u.filter((v) => typeof v == "function")[0] || null, e = u && u.length > 1 && typeof u[u.length - 1] == "object" ? u[u.length - 1] : {}, h = this, b = h._, _ = h.back(-1);
        if (b.ing)
          return (m || w)({ err: s.log("User is already being created or authenticated!"), wait: !0 }), h;
        b.ing = !0;
        var a = {}, t, c = 9;
        return a.a = function(v) {
          if (!v)
            return a.b();
          if (!v.pub) {
            var S = [];
            return Object.keys(v).forEach(function(g) {
              g != "_" && S.push(v[g]);
            }), a.b(S);
          }
          if (a.name)
            return a.f(v);
          a.c((a.data = v).auth);
        }, a.b = function(v) {
          var S = (a.list = (a.list || []).concat(v || [])).shift();
          if (t === S) {
            if (a.name)
              return a.err("Your user account is not published for dApps to access, please consider syncing it online, or allowing local access by adding your device as a peer.");
            if (i && c--) {
              _.get("~@" + i).once(a.a);
              return;
            }
            return a.err("Wrong user or password.");
          }
          _.get(S).once(a.a);
        }, a.c = function(v) {
          if (t === v)
            return a.b();
          if (typeof v == "string")
            return a.c(l(v));
          f.work(y, (a.auth = v).s, a.d, a.enc);
        }, a.d = function(v) {
          f.decrypt(a.auth.ek, v, a.e, a.enc);
        }, a.e = function(v) {
          if (t === v)
            return a.enc ? (a.enc = null, a.b()) : (a.enc = { encode: "utf8" }, a.c(a.auth));
          a.half = v, a.f(a.data);
        }, a.f = function(v) {
          var S = a.half || {}, g = a.data || {};
          a.g(a.lol = { pub: v.pub || g.pub, epub: v.epub || g.epub, priv: v.priv || S.priv, epriv: v.epriv || S.epriv });
        }, a.g = function(v) {
          if (!v || !v.pub || !v.epub)
            return a.b();
          a.pair = v;
          var S = _._.user, g = S._;
          g.tag;
          var x = g.opt;
          g = S._ = _.get("~" + v.pub)._, g.opt = x, S.is = { pub: v.pub, epub: v.epub, alias: i || v.pub }, g.sea = a.pair, b.ing = !1;
          try {
            y && t == (l(b.root.graph["~" + v.pub].auth) || "")[":"] && (e.shuffle = e.change = y);
          } catch {
          }
          if (e.change ? a.z() : (m || w)(g), f.window && (h.back("user")._.opt || e).remember)
            try {
              var A = {};
              A = f.window.sessionStorage, A.recall = !0, A.pair = JSON.stringify(v);
            } catch {
            }
          try {
            _._.tag.auth ? _._.on("auth", g) : setTimeout(function() {
              _._.on("auth", g);
            }, 1);
          } catch (N) {
            s.log("Your 'auth' callback crashed with:", N);
          }
        }, a.h = function(v) {
          if (!v)
            return a.b();
          if (i = v.alias, i || (i = v.alias = "~" + o.pub), !v.auth)
            return a.g(o);
          o = null, a.c((a.data = v).auth);
        }, a.z = function() {
          a.salt = String.random(64), f.work(e.change, a.salt, a.y);
        }, a.y = function(v) {
          f.encrypt({ priv: a.pair.priv, epriv: a.pair.epriv }, v, a.x, { raw: 1 });
        }, a.x = function(v) {
          a.w(JSON.stringify({ ek: v, s: a.salt }));
        }, a.w = function(v) {
          if (e.shuffle) {
            console.log("migrate core account from UTF8 & shuffle");
            var S = {};
            Object.keys(a.data).forEach(function(g) {
              S[g] = a.data[g];
            }), delete S._, S.auth = v, _.get("~" + a.pair.pub).put(S);
          }
          _.get("~" + a.pair.pub).get("auth").put(v, m || w);
        }, a.err = function(v) {
          var S = { err: s.log(v || "User cannot be found!") };
          b.ing = !1, (m || w)(S);
        }, a.plugin = function(v) {
          if (!(a.name = v))
            return a.err();
          var S = [v];
          v[0] !== "~" && (S[1] = "~" + v, S[2] = "~@" + v), a.b(S);
        }, o ? o.priv && o.epriv ? a.g(o) : _.get("~" + o.pub).once(a.h) : i ? _.get("~@" + i).once(a.a) : !i && !y && f.name(a.plugin), h;
      };
      function l(u) {
        if (typeof u != "string")
          return u;
        try {
          u = JSON.parse(u);
        } catch {
          u = {};
        }
        return u;
      }
    })(p, "./auth"), p(function($) {
      var n = p("./user"), f = n.SEA;
      n.GUN, n.prototype.recall = function(s, w) {
        var l = this, u = l.back(-1);
        if (s = s || {}, s && s.sessionStorage) {
          if (f.window)
            try {
              var o = {};
              o = f.window.sessionStorage, o && (u._.opt.remember = !0, (l.back("user")._.opt || s).remember = !0, (o.recall || o.pair) && u.user().auth(JSON.parse(o.pair), w));
            } catch {
            }
          return l;
        }
        return l;
      };
    })(p, "./recall"), p(function($) {
      var n = p("./user"), f = n.SEA, s = n.GUN, w = function() {
      };
      n.prototype.pair = function() {
        var l = this, u;
        try {
          u = new Proxy({ DANGER: "☠" }, { get: function(o, i, y) {
            if (!(!l.is || !(l._ || "").sea))
              return l._.sea[i];
          } });
        } catch {
        }
        return u;
      }, n.prototype.delete = async function(l, u, o) {
        console.log("user.delete() IS DEPRECATED AND WILL BE MOVED TO A MODULE!!!");
        var i = this;
        i.back(-1);
        var y = i.back("user");
        try {
          y.auth(l, u, function(m) {
            var e = (y.is || {}).pub;
            y.map().once(function() {
              this.put(null);
            }), y.leave(), (o || w)({ ok: 0 });
          });
        } catch (m) {
          s.log("User.delete failed! Error:", m);
        }
        return i;
      }, n.prototype.alive = async function() {
        console.log("user.alive() IS DEPRECATED!!!");
        const l = this.back(-1);
        try {
          return await authRecall(l), l._.user._;
        } catch {
          const o = "No session!";
          throw s.log(o), { err: o };
        }
      }, n.prototype.trust = async function(l) {
        console.log("`.trust` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!"), s.is(l) && l.get("pub").get((u, o) => {
          console.log(u, o);
        }), l.get("trust").get(path).put(theirPubkey);
      }, n.prototype.grant = function(l, u) {
        console.log("`.grant` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!");
        var o = this, i = o.back(-1).user(), y = i._.sea, m = "";
        return o.back(function(e) {
          e.is || (m += e.get || "");
        }), async function() {
          var e, h = await i.get("grant").get(y.pub).get(m).then();
          h = await f.decrypt(h, y), h || (h = f.random(16).toString(), e = await f.encrypt(h, y), i.get("grant").get(y.pub).get(m).put(e));
          var b = l.get("pub").then(), _ = l.get("epub").then();
          b = await b, _ = await _;
          var a = await f.secret(_, y);
          e = await f.encrypt(h, a), i.get("grant").get(b).get(m).put(e, u);
        }(), o;
      }, n.prototype.secret = function(l, u) {
        console.log("`.secret` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!");
        var o = this, i = o.back(-1).user(), y = i.pair(), m = "";
        return o.back(function(e) {
          e.is || (m += e.get || "");
        }), async function() {
          var e, h = await i.get("trust").get(y.pub).get(m).then();
          h = await f.decrypt(h, y), h || (h = f.random(16).toString(), e = await f.encrypt(h, y), i.get("trust").get(y.pub).get(m).put(e)), e = await f.encrypt(l, h), o.put(e, u);
        }(), o;
      }, $.exports = n;
    })(p, "./share"), p(function($) {
      var n = p("./sea"), f = p("./settings"), s, w = (n.window || "").GUN || p(("" + s == typeof E ? "." : "") + "./gun", 1);
      w.on("opt", function(e) {
        e.sea || (e.sea = { own: {} }, e.on("put", l, e)), this.to.next(e);
      });
      function l(e) {
        var h = this, b = h.as, _ = e.put, a = _["#"], t = _["."], c = _[":"], v = _[">"], S = e["#"], g;
        if (!(!a || !t)) {
          if ((e._ || "").faith && (b.opt || "").faith && typeof e._ == "function") {
            n.opt.pack(_, function(A) {
              n.verify(A, !1, function(N) {
                _["="] = n.opt.unpack(N), h.to.next(e);
              });
            });
            return;
          }
          var x = function(A) {
            b.on("in", { "@": S, err: e.err = A });
          };
          if ((e._ || "").DBG && ((e._ || "").DBG.c = +/* @__PURE__ */ new Date()), 0 <= a.indexOf("<?") && (g = parseFloat(a.split("<?")[1] || ""), g && v < w.state() - g * 1e3)) {
            (g = e._) && g.stun && g.stun--;
            return;
          }
          if (a === "~@") {
            l.alias(h, e, c, t, a, b, x);
            return;
          }
          if (a.slice(0, 2) === "~@") {
            l.pubs(h, e, c, t, a, b, x);
            return;
          }
          if (g = n.opt.pub(a)) {
            l.pub(h, e, c, t, a, b, x, b.user || "", g);
            return;
          }
          if (0 <= a.indexOf("#")) {
            l.hash(h, e, c, t, a, b, x);
            return;
          }
          l.any(h, e, c, t, a, b, x, b.user || "");
        }
      }
      l.hash = function(e, h, b, _, a, t, c) {
        n.work(b, null, function(v) {
          function S(g) {
            let x = "";
            for (let A = 0; A < g.length; A++)
              x += A - 1 & 1 ? "" : String.fromCharCode(parseInt(g.substring(A - 1, A + 1), 16));
            return btoa(x);
          }
          if (v && v === _.split("#").slice(-1)[0])
            return e.to.next(h);
          if (v && v === S(_.split("#").slice(-1)[0]))
            return e.to.next(h);
          c("Data hash not same as hash!");
        }, { name: "SHA-256" });
      }, l.alias = function(e, h, b, _, a, t, c) {
        if (!b)
          return c("Data must exist!");
        if ("~@" + _ === o(b))
          return e.to.next(h);
        c("Alias not same!");
      }, l.pubs = function(e, h, b, _, a, t, c) {
        if (!b)
          return c("Alias must exist!");
        if (_ === o(b))
          return e.to.next(h);
        c("Alias not same!");
      }, l.pub = async function(e, h, b, _, a, t, c, v, S) {
        var g;
        const x = await f.parse(b) || {}, A = (N, G, d) => {
          if (N.m && N.s && G && S)
            return n.verify(N, S, (r) => {
              if (s !== r && s !== r.e && h.put[">"] && h.put[">"] > parseFloat(r.e))
                return c("Certificate expired.");
              if (s !== r && r.c && r.w && (r.c === G || r.c.indexOf("*") > -1)) {
                let j = a.indexOf("/") > -1 ? a.replace(a.substring(0, a.indexOf("/") + 1), "") : "";
                String.match = String.match || w.text.match;
                const D = Array.isArray(r.w) ? r.w : typeof r.w == "object" || typeof r.w == "string" ? [r.w] : [];
                for (const O of D)
                  if (String.match(j, O["#"]) && String.match(_, O["."]) || !O["."] && String.match(j, O["#"]) || !O["#"] && String.match(_, O["."]) || String.match(j ? j + "/" + _ : _, O["#"] || O)) {
                    if (O["+"] && O["+"].indexOf("*") > -1 && j && j.indexOf(G) == -1 && _.indexOf(G) == -1)
                      return c(`Path "${j}" or key "${_}" must contain string "${G}".`);
                    if (r.wb && (typeof r.wb == "string" || (r.wb || {})["#"])) {
                      var k = e.as.root.$.back(-1);
                      return typeof r.wb == "string" && r.wb.slice(0, 1) !== "~" && (k = k.get("~" + S)), k.get(r.wb).get(G).once((T) => T && (T === 1 || T === !0) ? c(`Certificant ${G} blocked.`) : d(r));
                    }
                    return d(r);
                  }
                return c("Certificate verification fail.");
              }
            });
        };
        if (_ === "pub" && "~" + S === a)
          return b === S ? e.to.next(h) : c("Account not same!");
        if ((g = v.is) && g.pub && !x["*"] && !x["+"] && (S === g.pub || S !== g.pub && ((h._.msg || {}).opt || {}).cert)) {
          n.opt.pack(h.put, (N) => {
            n.sign(N, v._.sea, async function(G) {
              if (s === G)
                return c(n.err || "Signature fail.");
              if (h.put[":"] = { ":": g = n.opt.unpack(G.m), "~": G.s }, h.put["="] = g, S === v.is.pub) {
                (g = o(b)) && ((t.sea.own[g] = t.sea.own[g] || {})[S] = 1), JSON.stringifyAsync(h.put[":"], function(d, r) {
                  return d ? c(d || "Stringify error.") : (h.put[":"] = r, e.to.next(h));
                });
                return;
              }
              if (S !== v.is.pub && ((h._.msg || {}).opt || {}).cert) {
                const d = await f.parse(h._.msg.opt.cert);
                d && d.m && d.s && A(d, v.is.pub, (r) => {
                  h.put[":"]["+"] = d, h.put[":"]["*"] = v.is.pub, JSON.stringifyAsync(h.put[":"], function(k, j) {
                    return k ? c(k || "Stringify error.") : (h.put[":"] = j, e.to.next(h));
                  });
                });
              }
            }, { raw: 1 });
          });
          return;
        }
        n.opt.pack(h.put, (N) => {
          n.verify(N, x["*"] || S, function(G) {
            var d;
            if (G = n.opt.unpack(G), s === G)
              return c("Unverified data.");
            if ((d = o(G)) && S === n.opt.pub(d) && ((t.sea.own[d] = t.sea.own[d] || {})[S] = 1), x["+"] && x["+"].m && x["+"].s && x["*"])
              A(x["+"], x["*"], (r) => (h.put["="] = G, e.to.next(h)));
            else
              return h.put["="] = G, e.to.next(h);
          });
        });
      }, l.any = function(e, h, b, _, a, t, c, v) {
        if (t.opt.secure)
          return c("Soul missing public key at '" + _ + "'.");
        t.on("secure", function(S) {
          if (this.off(), !t.opt.secure)
            return e.to.next(S);
          c("Data cannot be changed.");
        }).on.on("secure", h);
      };
      var u = w.valid, o = function(e, h) {
        return typeof (h = u(e)) == "string" && h;
      };
      (w.state || "").ify;
      var i = /[^\w_-]/;
      n.opt.pub = function(e) {
        if (e && (e = e.split("~"), !(!e || !(e = e[1])) && (e = e.split(i).slice(0, 2), !(!e || e.length != 2) && (e[0] || "")[0] !== "@")))
          return e = e.slice(0, 2).join("."), e;
      }, n.opt.stringy = function(e) {
      }, n.opt.pack = function(e, h, b, _, a) {
        var t, c;
        if (n.opt.check(e))
          return h(e);
        e && e["#"] && e["."] && e[">"] && (t = e[":"], c = 1), JSON.parseAsync(c ? t : e, function(v, S) {
          var g = s !== (S || "")[":"] && (S || "")["~"];
          if (!g) {
            h(e);
            return;
          }
          h({ m: { "#": a || e["#"], ".": b || e["."], ":": (S || "")[":"], ">": e[">"] || w.state.is(_, b) }, s: g });
        });
      };
      var y = n.opt;
      n.opt.unpack = function(e, h, b) {
        var _;
        if (s !== e) {
          if (e && s !== (_ = e[":"]))
            return _;
          if (h = h || y.fall_key, !b && y.fall_val && (b = {}, b[h] = y.fall_val), !(!h || !b)) {
            if (e === b[h] || !n.opt.check(b[h]))
              return e;
            var a = b && b._ && b._["#"] || y.fall_soul, t = w.state.is(b, h) || y.fall_state;
            if (e && e.length === 4 && a === e[0] && h === e[1] && m(t) === m(e[3]))
              return e[2];
            if (t < n.opt.shuffle_attack)
              return e;
          }
        }
      }, n.opt.shuffle_attack = 15463296e5;
      var m = Math.floor;
    })(p, "./index");
  })();
})(ct);
const ht = Q;
export {
  lt as Gun,
  ht as SEA
};
//# sourceMappingURL=gun-es.js.map
