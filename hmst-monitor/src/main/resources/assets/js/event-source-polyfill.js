webpackJsonp([0], {
    "./node_modules/event-source-polyfill/src/eventsource.js": function (t, e) {
        /** @license
         * eventsource.js
         * Available under MIT License (MIT)
         * https://github.com/Yaffle/EventSource/
         */
        !function (t) {
            "use strict";
            function e(t) {
                this.withCredentials = !1, this.responseType = "", this.readyState = 0, this.status = 0, this.statusText = "", this.responseText = "", this.onprogress = y, this.onreadystatechange = y, this._contentType = "", this._xhr = t, this._sendTimeout = 0, this._abort = y
            }

            function n(t) {
                this._xhr = new e(t)
            }

            function o() {
                this._listeners = Object.create(null)
            }

            function r(t) {
                d(function () {
                    throw t
                }, 0)
            }

            function i(t) {
                this.type = t, this.target = void 0
            }

            function a(t, e) {
                i.call(this, t), this.data = e.data, this.lastEventId = e.lastEventId
            }

            function s(t, e) {
                o.call(this), this.onopen = void 0, this.onmessage = void 0, this.onerror = void 0, this.url = void 0, this.readyState = void 0, this.withCredentials = void 0, this._close = void 0, c(this, t, e)
            }

            function c(t, e, o) {
                e = String(e);
                var s = void 0 != o && Boolean(o.withCredentials), c = O(1e3), v = void 0 != o && void 0 != o.heartbeatTimeout ? x(o.heartbeatTimeout, 45e3) : O(45e3), f = "", y = c, N = !1, R = void 0 != o && void 0 != o.headers ? JSON.parse(JSON.stringify(o.headers)) : void 0, j = void 0 != o && void 0 != o.Transport ? o.Transport : void 0 != u ? u : p, H = new n(new j), I = 0, q = l, L = "", P = "", M = "", D = "", G = C, J = 0, B = 0, X = function (e, n, o) {
                    if (q === g)if (200 === e && void 0 != o && b.test(o)) {
                        q = T, N = !0, y = c, t.readyState = T;
                        var a = new i("open");
                        t.dispatchEvent(a), A(t, t.onopen, a)
                    } else {
                        var s = "";
                        200 !== e ? (n && (n = n.replace(/\s+/g, " ")), s = "EventSource's response has a status " + e + " " + n + " that is not 200. Aborting the connection.") : s = "EventSource's response has a Content-Type specifying an unsupported type: " + (void 0 == o ? "-" : o.replace(/\s+/g, " ")) + ". Aborting the connection.", r(new Error(s)), K();
                        var a = new i("error");
                        t.dispatchEvent(a), A(t, t.onerror, a)
                    }
                }, k = function (e) {
                    if (q === T) {
                        for (var n = -1, o = 0; o < e.length; o += 1) {
                            var r = e.charCodeAt(o);
                            r !== "\n".charCodeAt(0) && r !== "\r".charCodeAt(0) || (n = o)
                        }
                        var i = (-1 !== n ? D : "") + e.slice(0, n + 1);
                        D = (-1 === n ? D : "") + e.slice(n + 1), "" !== i && (N = !0);
                        for (var s = 0; s < i.length; s += 1) {
                            var r = i.charCodeAt(s);
                            if (G === w && r === "\n".charCodeAt(0))G = C; else if (G === w && (G = C), r === "\r".charCodeAt(0) || r === "\n".charCodeAt(0)) {
                                if (G !== C) {
                                    G === m && (B = s + 1);
                                    var p = i.slice(J, B - 1), u = i.slice(B + (B < s && i.charCodeAt(B) === " ".charCodeAt(0) ? 1 : 0), s);
                                    "data" === p ? (L += "\n", L += u) : "id" === p ? P = u : "event" === p ? M = u : "retry" === p ? (c = x(u, c), y = c) : "heartbeatTimeout" === p && (v = x(u, v), 0 !== I && (h(I), I = d(function () {
                                        U()
                                    }, v)))
                                }
                                if (G === C) {
                                    if ("" !== L) {
                                        f = P, "" === M && (M = "message");
                                        var l = new a(M, {data: L.slice(1), lastEventId: P});
                                        if (t.dispatchEvent(l), "message" === M && A(t, t.onmessage, l), q === S)return
                                    }
                                    L = "", M = ""
                                }
                                G = r === "\r".charCodeAt(0) ? w : C
                            } else G === C && (J = s, G = m), G === m ? r === ":".charCodeAt(0) && (B = s + 1, G = E) : G === E && (G = _)
                        }
                    }
                }, z = function () {
                    if (q === T || q === g) {
                        q = l, 0 !== I && (h(I), I = 0), I = d(function () {
                            U()
                        }, y), y = O(Math.min(16 * c, 2 * y)), t.readyState = g;
                        var e = new i("error");
                        t.dispatchEvent(e), A(t, t.onerror, e)
                    }
                }, K = function () {
                    q = S, H.cancel(), 0 !== I && (h(I), I = 0), t.readyState = S
                }, U = function () {
                    if (I = 0, q !== l)return void(N ? (N = !1, I = d(function () {
                        U()
                    }, v)) : (r(new Error("No activity within " + v + " milliseconds. Reconnecting.")), H.cancel()));
                    N = !1, I = d(function () {
                        U()
                    }, v), q = g, L = "", M = "", P = f, D = "", J = 0, B = 0, G = C;
                    var t = e;
                    "data:" !== e.slice(0, 5) && "blob:" !== e.slice(0, 5) && (t = e + (-1 === e.indexOf("?", 0) ? "?" : "&") + "lastEventId=" + encodeURIComponent(f));
                    var n = {};
                    if (n.Accept = "text/event-stream", void 0 != R)for (var o in R)Object.prototype.hasOwnProperty.call(R, o) && (n[o] = R[o]);
                    try {
                        H.open(X, k, z, t, s, n)
                    } catch (t) {
                        throw K(), t
                    }
                };
                t.url = e, t.readyState = g, t.withCredentials = s, t._close = K, U()
            }

            var d = t.setTimeout, h = t.clearTimeout, p = t.XMLHttpRequest, u = t.XDomainRequest, v = t.EventSource, f = t.document;
            null == Object.create && (Object.create = function (t) {
                function e() {
                }

                return e.prototype = t, new e
            });
            var y = function () {
            };
            e.prototype.open = function (t, e) {
                this._abort(!0);
                var n = this, o = this._xhr, r = 1, i = 0;
                this._abort = function (t) {
                    0 !== n._sendTimeout && (h(n._sendTimeout), n._sendTimeout = 0), 1 !== r && 2 !== r && 3 !== r || (r = 4, o.onload = y, o.onerror = y, o.onabort = y, o.onprogress = y, o.onreadystatechange = y, o.abort(), 0 !== i && (h(i), i = 0), t || (n.readyState = 4, n.onreadystatechange())), r = 0
                };
                var a = function () {
                    if (1 === r) {
                        var t = 0, e = "", i = void 0;
                        if ("contentType" in o)t = 200, e = "OK", i = o.contentType; else try {
                            t = o.status, e = o.statusText, i = o.getResponseHeader("Content-Type")
                        } catch (n) {
                            t = 0, e = "", i = void 0
                        }
                        0 !== t && (r = 2, n.readyState = 2, n.status = t, n.statusText = e, n._contentType = i, n.onreadystatechange())
                    }
                }, s = function () {
                    if (a(), 2 === r || 3 === r) {
                        r = 3;
                        var t = "";
                        try {
                            t = o.responseText
                        } catch (t) {
                        }
                        n.readyState = 3, n.responseText = t, n.onprogress()
                    }
                }, c = function () {
                    s(), 1 !== r && 2 !== r && 3 !== r || (r = 4, 0 !== i && (h(i), i = 0), n.readyState = 4, n.onreadystatechange())
                }, u = function () {
                    void 0 != o && (4 === o.readyState ? c() : 3 === o.readyState ? s() : 2 === o.readyState && a())
                }, v = function () {
                    i = d(function () {
                        v()
                    }, 500), 3 === o.readyState && s()
                };
                o.onload = c, o.onerror = c, o.onabort = c, "sendAsBinary" in p.prototype || "mozAnon" in p.prototype || (o.onprogress = s), o.onreadystatechange = u, "contentType" in o && (e += (-1 === e.indexOf("?", 0) ? "?" : "&") + "padding=true"), o.open(t, e, !0), "readyState" in o && (i = d(function () {
                    v()
                }, 0))
            }, e.prototype.abort = function () {
                this._abort(!1)
            }, e.prototype.getResponseHeader = function (t) {
                return this._contentType
            }, e.prototype.setRequestHeader = function (t, e) {
                var n = this._xhr;
                "setRequestHeader" in n && n.setRequestHeader(t, e)
            }, e.prototype.send = function () {
                if (!("ontimeout" in p.prototype) && void 0 != f && void 0 != f.readyState && "complete" !== f.readyState) {
                    var t = this;
                    return void(t._sendTimeout = d(function () {
                        t._sendTimeout = 0, t.send()
                    }, 4))
                }
                var e = this._xhr;
                e.withCredentials = this.withCredentials, e.responseType = this.responseType;
                try {
                    e.send(void 0)
                } catch (t) {
                    throw t
                }
            }, n.prototype.open = function (t, e, n, o, r, i) {
                var a = this._xhr;
                a.open("GET", o);
                var s = 0;
                a.onprogress = function () {
                    var t = a.responseText, n = t.slice(s);
                    s += n.length, e(n)
                }, a.onreadystatechange = function () {
                    if (2 === a.readyState) {
                        var e = a.status, o = a.statusText, r = a.getResponseHeader("Content-Type");
                        t(e, o, r)
                    } else 4 === a.readyState && n()
                }, a.withCredentials = r, a.responseType = "text";
                for (var c in i)Object.prototype.hasOwnProperty.call(i, c) && a.setRequestHeader(c, i[c]);
                a.send()
            }, n.prototype.cancel = function () {
                this._xhr.abort()
            }, o.prototype.dispatchEvent = function (t) {
                t.target = this;
                var e = this._listeners[t.type];
                if (void 0 != e)for (var n = e.length, o = 0; o < n; o += 1) {
                    var i = e[o];
                    try {
                        "function" == typeof i.handleEvent ? i.handleEvent(t) : i.call(this, t)
                    } catch (t) {
                        r(t)
                    }
                }
            }, o.prototype.addEventListener = function (t, e) {
                t = String(t);
                var n = this._listeners, o = n[t];
                void 0 == o && (o = [], n[t] = o);
                for (var r = !1, i = 0; i < o.length; i += 1)o[i] === e && (r = !0);
                r || o.push(e)
            }, o.prototype.removeEventListener = function (t, e) {
                t = String(t);
                var n = this._listeners, o = n[t];
                if (void 0 != o) {
                    for (var r = [], i = 0; i < o.length; i += 1)o[i] !== e && r.push(o[i]);
                    0 === r.length ? delete n[t] : n[t] = r
                }
            }, a.prototype = Object.create(i.prototype);
            var l = -1, g = 0, T = 1, S = 2, w = -1, C = 0, m = 1, E = 2, _ = 3, b = /^text\/event\-stream;?(\s*charset\=utf\-8)?$/i, x = function (t, e) {
                var n = parseInt(t, 10);
                return n !== n && (n = e), O(n)
            }, O = function (t) {
                return Math.min(Math.max(t, 1e3), 18e6)
            }, A = function (t, e, n) {
                try {
                    "function" == typeof e && e.call(t, n)
                } catch (t) {
                    r(t)
                }
            };
            s.prototype = Object.create(o.prototype), s.prototype.CONNECTING = g, s.prototype.OPEN = T, s.prototype.CLOSED = S, s.prototype.close = function () {
                this._close()
            }, s.CONNECTING = g, s.OPEN = T, s.CLOSED = S, s.prototype.withCredentials = void 0, t.EventSourcePolyfill = s, t.NativeEventSource = v, void 0 == p || void 0 != v && "withCredentials" in v.prototype || (t.EventSource = s)
        }("undefined" != typeof window ? window : this)
    }
});
//# sourceMappingURL=event-source-polyfill.js.map