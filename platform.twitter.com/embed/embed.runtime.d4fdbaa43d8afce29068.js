(() => {
    "use strict";
    var e, n, d, a, o, i = {},
        r = {};

    function b(e) {
        var n = r[e];
        if (void 0 !== n) return n.exports;
        var d = r[e] = {
            exports: {}
        };
        return i[e].call(d.exports, d, d.exports, b), d.exports
    }
    b.m = i, e = [], b.O = (n, d, a, o) => {
        if (!d) {
            var i = 1 / 0;
            for (t = 0; t < e.length; t++) {
                for (var [d, a, o] = e[t], r = !0, c = 0; c < d.length; c++)(!1 & o || i >= o) && Object.keys(b.O).every((e => b.O[e](d[c]))) ? d.splice(c--, 1) : (r = !1, o < i && (i = o));
                if (r) {
                    e.splice(t--, 1);
                    var f = a();
                    void 0 !== f && (n = f)
                }
            }
            return n
        }
        o = o || 0;
        for (var t = e.length; t > 0 && e[t - 1][2] > o; t--) e[t] = e[t - 1];
        e[t] = [d, a, o]
    }, b.n = e => {
        var n = e && e.__esModule ? () => e.default : () => e;
        return b.d(n, {
            a: n
        }), n
    }, d = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, b.t = function(e, a) {
        if (1 & a && (e = this(e)), 8 & a) return e;
        if ("object" == typeof e && e) {
            if (4 & a && e.__esModule) return e;
            if (16 & a && "function" == typeof e.then) return e
        }
        var o = Object.create(null);
        b.r(o);
        var i = {};
        n = n || [null, d({}), d([]), d(d)];
        for (var r = 2 & a && e;
            "object" == typeof r && !~n.indexOf(r); r = d(r)) Object.getOwnPropertyNames(r).forEach((n => i[n] = () => e[n]));
        return i.default = () => e, b.d(o, i), o
    }, b.d = (e, n) => {
        for (var d in n) b.o(n, d) && !b.o(e, d) && Object.defineProperty(e, d, {
            enumerable: !0,
            get: n[d]
        })
    }, b.f = {}, b.e = e => Promise.all(Object.keys(b.f).reduce(((n, d) => (b.f[d](e, n), n)), [])), b.u = e => "embed." + ({
        57: "ondemand.horizon-web.i18n.it-js",
        135: "ondemand.i18n.pl-js",
        219: "ondemand.horizon-web.i18n.th-js",
        230: "ondemand.horizon-web.i18n.hi-js",
        242: "ondemand.horizon-web.i18n.fr-js",
        530: "ondemand.horizon-web.i18n.vi-js",
        822: "ondemand.horizon-web.i18n.da-js",
        825: "ondemand.horizon-web.i18n.ru-js",
        847: "ondemand.horizon-web.i18n.pl-js",
        890: "ondemand.i18n.nb-js",
        905: "ondemand.horizon-web.i18n.ca-js",
        1076: "ondemand.i18n.fa-js",
        1137: "ondemand.i18n.ro-js",
        1211: "ondemand.horizon-web.i18n.ga-js",
        1214: "ondemand.i18n.it-js",
        1476: "ondemand.i18n.nl-js",
        1504: "loader.HoverCard",
        1520: "ondemand.Card",
        1643: "ondemand.horizon-web.i18n.bg-js",
        1718: "ondemand.horizon-web.i18n.bn-js",
        1753: "ondemand.i18n.fr-js",
        1786: "ondemand.i18n.zh-Hant-js",
        1839: "ondemand.horizon-web.i18n.pt-js",
        1841: "ondemand.horizon-web.i18n.de-js",
        1901: "ondemand.Tweet",
        2208: "ondemand.i18n.sv-js",
        2271: "ondemand.i18n.fil-js",
        2426: "ondemand.horizon-web.i18n.id-js",
        2586: "ondemand.i18n.ja-js",
        2625: "ondemand.horizon-web.i18n.en-xx-js",
        2918: "ondemand.i18n.th-js",
        3096: "ondemand.horizon-web.i18n.tr-js",
        3142: "ondemand.i18n.uk-js",
        3244: "loaders.video.PlayerHls1.5",
        3251: "ondemand.horizon-web.i18n.ms-js",
        3415: "ondemand.horizon-web.i18n.sr-js",
        3478: "ondemand.i18n.en-js",
        3552: "ondemand.horizon-web.i18n.fil-js",
        4088: "ondemand.horizon-web.i18n.nl-js",
        4160: "ondemand.horizon-web.i18n.uk-js",
        4213: "ondemand.i18n.fi-js",
        4255: "ondemand.horizon-web.i18n.kn-js",
        4347: "ondemand.TweetVideo",
        4385: "ondemand.i18n.vi-js",
        4397: "ondemand.horizon-web.i18n.ro-js",
        4453: "ondemand.i18n.hu-js",
        4587: "ondemand.i18n.cs-js",
        4604: "ondemand.horizon-web.i18n.nb-js",
        4704: "ondemand.i18n.el-js",
        4791: "ondemand.horizon-web.i18n.ko-js",
        5103: "ondemand.horizon-web.i18n.gu-js",
        5198: "loaders.video.VideoPlayerDefaultUI",
        5290: "ondemand.horizon-web.i18n.ja-js",
        5338: "loaders.video.VideoPlayer",
        5383: "ondemand.i18n.bn-js",
        5413: "ondemand.horizon-web.i18n.ar-js",
        5432: "ondemand.horizon-web.i18n.he-js",
        5576: "ondemand.horizon-web.i18n.zh-Hant-js",
        5686: "ondemand.horizon-web.i18n.mr-js",
        5762: "ondemand.horizon-web.i18n.en-js",
        5812: "ondemand.horizon-web.i18n.en-ss-js",
        5820: "ondemand.horizon-web.i18n.sk-js",
        5914: "ondemand.ModelViewer",
        6180: "ondemand.horizon-web.i18n.eu-js",
        6378: "ondemand.horizon-web.i18n.en-GB-js",
        6477: "ondemand.i18n.ko-js",
        6626: "ondemand.i18n.hi-js",
        7236: "ondemand.i18n.de-js",
        7388: "ondemand.video.PlayerHls1.2",
        7539: "ondemand.i18n.ru-js",
        7708: "ondemand.horizon-web.i18n.ur-js",
        7928: "ondemand.i18n.tr-js",
        8099: "ondemand.Dropdown",
        8142: "ondemand.i18n.ar-js",
        8281: "ondemand.horizon-web.i18n.gl-js",
        8345: "ondemand.horizon-web.i18n.hu-js",
        8349: "ondemand.horizon-web.i18n.es-js",
        8374: "ondemand.horizon-web.i18n.ta-js",
        8599: "ondemand.i18n.es-js",
        8620: "ondemand.horizon-web.i18n.fi-js",
        8737: "ondemand.i18n.ms-js",
        8786: "loaders.video.PlayerHls1.1",
        8918: "ondemand.horizon-web.i18n.fa-js",
        9069: "ondemand.horizon-web.i18n.el-js",
        9106: "ondemand.i18n.pt-js",
        9119: "ondemand.i18n.he-js",
        9146: "ondemand.horizon-web.i18n.sv-js",
        9264: "ondemand.i18n.da-js",
        9342: "ondemand.i18n.id-js",
        9351: "ondemand.video.PlayerHls1.1",
        9536: "ondemand.horizon-web.i18n.ar-x-fm-js",
        9682: "ondemand.i18n.zh-js",
        9795: "ondemand.horizon-web.i18n.cs-js",
        9876: "ondemand.horizon-web.i18n.hr-js",
        9989: "ondemand.horizon-web.i18n.zh-js"
    }[e] || e) + "." + {
        57: "49f2233dc4f7e98606d6",
        135: "a0ce748fa42a0f27f8e4",
        219: "23141751afdb448ff884",
        230: "0b121fcd81a312029d41",
        242: "9d35cf0ad9d16371806d",
        530: "7fe980b9bcdef02553d5",
        749: "467388cca0b3fe9c3291",
        781: "9426aa327bd715a3403f",
        822: "82ef9a457b921d2d4463",
        825: "9a398af5cbf21598d993",
        847: "3f64a3c36d5c270275a3",
        890: "99637ef444f783b5ffbd",
        905: "aae1df6b697fc934d4fd",
        934: "d08504f76b09b765fd18",
        1033: "58812290a1cabe860591",
        1076: "d6667d29ba1f19ffc2a8",
        1091: "b3dfb5a88bbe7c03c1d8",
        1137: "32649824203d0b561d89",
        1211: "901bb19e7f3984145591",
        1214: "463a4a43fbcdf36d583a",
        1476: "d2fabb893666e5803fe4",
        1504: "982e37413d2846cc05c6",
        1520: "6d1a365e1c0343889db8",
        1643: "eea53735ae0969e0a0c1",
        1718: "1d79cbab9e8ce49d49c8",
        1753: "a70d58f3dba6538c8108",
        1786: "a7f8d96eaf945da434a1",
        1839: "7e8f527393d548516b2b",
        1841: "97b0125aa503f88a4d7b",
        1901: "039e3350d76a41049492",
        2208: "348881ba054b7c19fb72",
        2271: "ec3d4f5d1e770d52db82",
        2426: "984d5053e272798b7ac5",
        2586: "bbb87a39beaaf9d63501",
        2625: "e51fb6fecd388595c893",
        2918: "1c3fd48cf76ad29370c5",
        3096: "11baed2680e7b40410d5",
        3142: "f37d71e332853dd82113",
        3244: "6b354f03e70e1c9e8314",
        3251: "6fc9438be48c25dadad7",
        3415: "3dd419f837e1e73fe370",
        3478: "19a28d85d7fc7916b4b1",
        3552: "9439daf011db841cc7b1",
        4088: "643d136592efd196e2a2",
        4160: "280fc8b13c9eb83af2c5",
        4213: "d61580ca2bcc27756ac5",
        4255: "32aabf1e2c2c2d1b9205",
        4347: "7b7394b257cb766ab42f",
        4385: "dede7956979fbff2e25c",
        4397: "40ee1aee55885c5b06b2",
        4453: "38d9ca51a5d2fe514ad1",
        4587: "9600180cbb10fe8d8cca",
        4604: "2bd67b588aa16d507f16",
        4704: "224165efc9cb634cf648",
        4791: "ea5296f704f2ffb3a1ac",
        5103: "114742cef7450fbc1822",
        5198: "a9c250b7e18e52734ae4",
        5234: "de598ecb99dd0f2cbdd5",
        5290: "64cc5e4ed22967fb4840",
        5332: "340f0930f4dd862af95f",
        5338: "1ae358c749688ef1024c",
        5383: "c72e908ae9c1556404ad",
        5413: "6ba9bc40b35fa9d567d2",
        5432: "207baa515764cbdd6dac",
        5576: "4dc5fbd858da9ca3d2a3",
        5686: "7c6c4dafc38a80c33362",
        5762: "d681a6dcae4601184824",
        5812: "088db6f17d848fe35368",
        5820: "e6c0e7597b083c75c2b0",
        5914: "6d290f371a6dcbace59b",
        6180: "2d86dd67a219a991eabe",
        6337: "d2eda29f4905f381784a",
        6378: "c43c141125b0cf6ed9ab",
        6477: "d3b2672201a0ca7d07fc",
        6626: "c2956d692816eeefd99b",
        7236: "10259e8689dd36422064",
        7388: "628b7638334a4964d63b",
        7539: "56d09056692552007486",
        7708: "f80370780cc017a6bdd8",
        7928: "08450ed5215373971166",
        8099: "48c0959cdebdceefbdc6",
        8142: "3ecfbfab670cdb594b66",
        8281: "7d98a212198c345e81a6",
        8345: "8c63da5df005e4d7e183",
        8349: "0bd1eff5cb3043ed84d7",
        8374: "2deeb3e5efbc7e31bd4f",
        8599: "f8f1f2dce05cc67b90ca",
        8620: "6d1c44ea0608c1cce07f",
        8737: "ed8651d054e44456efa9",
        8786: "5a42ab57fc72863b4211",
        8918: "8cd848278665cd963629",
        8941: "eb3528bd7a35a517bc8e",
        9069: "e790d13484a440952219",
        9106: "4a654ed878f4297de5f5",
        9119: "c28e872f4d1eafa2bb6d",
        9146: "98819100539d540ab6ac",
        9203: "1b3edf1dee6d205547e0",
        9264: "c4e7e7c6bb2e0a3d351d",
        9342: "ca5a6d19d300a34b9051",
        9351: "a518ed4572873ee2d68a",
        9536: "20feff13fcb1227fdb7a",
        9682: "078f1d29653547f4681b",
        9795: "f209cca02c5e8e6203f0",
        9876: "0be7fe4386a0c0aa3738",
        9935: "0a06559f8ea08705e4ac",
        9989: "1e4be0dc9ff30dc26c52"
    }[e] + ".js", b.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), b.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n), a = {}, o = "embed-iframe:", b.l = (e, n, d, i) => {
        if (a[e]) a[e].push(n);
        else {
            var r, c;
            if (void 0 !== d)
                for (var f = document.getElementsByTagName("script"), t = 0; t < f.length; t++) {
                    var s = f[t];
                    if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == o + d) {
                        r = s;
                        break
                    }
                }
            r || (c = !0, (r = document.createElement("script")).charset = "utf-8", r.timeout = 120, b.nc && r.setAttribute("nonce", b.nc), r.setAttribute("data-webpack", o + d), r.src = e), a[e] = [n];
            var m = (n, d) => {
                    r.onerror = r.onload = null, clearTimeout(j);
                    var o = a[e];
                    if (delete a[e], r.parentNode && r.parentNode.removeChild(r), o && o.forEach((e => e(d))), n) return n(d)
                },
                j = setTimeout(m.bind(null, void 0, {
                    type: "timeout",
                    target: r
                }), 12e4);
            r.onerror = m.bind(null, r.onerror), r.onload = m.bind(null, r.onload), c && document.head.appendChild(r)
        }
    }, b.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, (() => {
        var e;
        b.g.importScripts && (e = b.g.location + "");
        var n = b.g.document;
        if (!e && n && (n.currentScript && (e = n.currentScript.src), !e)) {
            var d = n.getElementsByTagName("script");
            d.length && (e = d[d.length - 1].src)
        }
        if (!e) throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), b.p = e
    })(), (() => {
        var e = {
            3666: 0
        };
        b.f.j = (n, d) => {
            var a = b.o(e, n) ? e[n] : void 0;
            if (0 !== a)
                if (a) d.push(a[2]);
                else if (3666 != n) {
                var o = new Promise(((d, o) => a = e[n] = [d, o]));
                d.push(a[2] = o);
                var i = b.p + b.u(n),
                    r = new Error;
                b.l(i, (d => {
                    if (b.o(e, n) && (0 !== (a = e[n]) && (e[n] = void 0), a)) {
                        var o = d && ("load" === d.type ? "missing" : d.type),
                            i = d && d.target && d.target.src;
                        r.message = "Loading chunk " + n + " failed.\n(" + o + ": " + i + ")", r.name = "ChunkLoadError", r.type = o, r.request = i, a[1](r)
                    }
                }), "chunk-" + n, n)
            } else e[n] = 0
        }, b.O.j = n => 0 === e[n];
        var n = (n, d) => {
                var a, o, [i, r, c] = d,
                    f = 0;
                if (i.some((n => 0 !== e[n]))) {
                    for (a in r) b.o(r, a) && (b.m[a] = r[a]);
                    if (c) var t = c(b)
                }
                for (n && n(d); f < i.length; f++) o = i[f], b.o(e, o) && e[o] && e[o][0](), e[o] = 0;
                return b.O(t)
            },
            d = self.webpackChunkembed_iframe = self.webpackChunkembed_iframe || [];
        d.forEach(n.bind(null, 0)), d.push = n.bind(null, d.push.bind(d))
    })()
})();