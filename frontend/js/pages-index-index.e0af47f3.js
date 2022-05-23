(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["pages-index-index"], {
        "079c": function (t, e, i) {
            var n = i("24fb");
            e = n(!1), e.push([t.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.tipsBoxBottom[data-v-9b501e24]::after{content:"";position:absolute;top:%?-16?%;left:0;right:0;z-index:99;margin:auto;width:0;height:0;border-left:%?16?% solid transparent;border-right:%?16?% solid transparent;border-bottom:%?16?% solid rgba(0,0,0,.65)}.tipsBoxBottom[data-v-9b501e24]{position:absolute;background-color:rgba(0,0,0,.65);width:%?120?%;height:%?120?%;right:0;left:0;z-index:999;-webkit-animation:bottomToShow-data-v-9b501e24 .3s both;animation:bottomToShow-data-v-9b501e24 .3s both;margin:auto;bottom:%?-100?%;border-radius:%?10?%}.tipsBoxBottom .tipsItem[data-v-9b501e24]{display:inline-block;width:%?120?%;height:%?120?%;display:flex;align-items:center;justify-content:center;flex-direction:column}@-webkit-keyframes bottomToShow-data-v-9b501e24{from{opacity:0;-webkit-transform:translateY(20%);transform:translateY(20%)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}.tipsBoxTop[data-v-9b501e24]::after{content:"";position:absolute;bottom:%?-16?%;left:0;right:0;z-index:99;margin:auto;width:0;height:0;border-left:%?16?% solid transparent;border-right:%?16?% solid transparent;border-top:%?16?% solid rgba(0,0,0,.65)}.tipsBoxTop[data-v-9b501e24]{position:absolute;background-color:rgba(0,0,0,.65);width:%?120?%;height:%?120?%;z-index:999;right:0;left:0;-webkit-animation:bottomToShow-data-v-9b501e24 .3s both;animation:bottomToShow-data-v-9b501e24 .3s both;margin:auto;top:%?-100?%;border-radius:%?10?%}.tipsBoxTop .tipsItem[data-v-9b501e24]{display:inline-block;width:%?120?%;height:%?120?%;display:flex;align-items:center;justify-content:center;flex-direction:column}@keyframes bottomToShow-data-v-9b501e24{from{opacity:0;-webkit-transform:translateY(20%);transform:translateY(20%)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}.nameBox[data-v-9b501e24]{padding-left:%?20?%;display:flex;align-items:center;justify-content:flex-start}.lineHover[data-v-9b501e24]{background-color:#f2f3f4!important}.rankLine[data-v-9b501e24]{background-color:#fff;position:relative;transition:.3s;color:#000;font-weight:700;display:flex;align-items:center;height:%?88?%;border-bottom:1px solid #f2f3f4}.rankLine .isRate[data-v-9b501e24]{width:%?130?%;height:%?40?%;line-height:%?40?%;border-radius:%?6?%;color:#fff;font-size:%?26?%}.rankLine .rankArrow[data-v-9b501e24]{width:%?10?%;height:%?15?%;-webkit-transform:rotate(180deg);transform:rotate(180deg);position:absolute;right:%?20?%;top:0;bottom:0;margin:auto}.rankLine .rankItem[data-v-9b501e24]{width:20vw;text-align:left;font-size:%?26?%;text-indent:%?10?%}.item[data-v-9b501e24]{height:%?88?%}', ""]), t.exports = e
        },
        "08c2": function (t, e, i) {
            "use strict";
            var n;
            i.d(e, "b", (function () {
                return a
            })), i.d(e, "c", (function () {
                return r
            })), i.d(e, "a", (function () {
                return n
            }));
            var a = function () {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("v-uni-view", {
                        staticClass: "container999",
                        style: {
                            height: t.windowsHeight
                        },
                        on: {
                            touchstart: function (e) {
                                arguments[0] = e = t.$handleEvent(e), t.refreshStart.apply(void 0, arguments)
                            },
                            touchmove: function (e) {
                                arguments[0] = e = t.$handleEvent(e), t.refreshMove.apply(void 0, arguments)
                            },
                            touchend: function (e) {
                                arguments[0] = e = t.$handleEvent(e), t.refreshEnd.apply(void 0, arguments)
                            }
                        }
                    }, [i("refresh", {
                        ref: "refresh",
                        on: {
                            isRefresh: function (e) {
                                arguments[0] = e = t.$handleEvent(e), t.isRefresh.apply(void 0, arguments)
                            }
                        }
                    }), i("v-uni-view", {
                        staticStyle: {
                            position: "fixed",
                            "z-index": "999",
                            width: "100vw"
                        }
                    }, [i("v-uni-label", {
                        staticClass: "switch"
                    }, [i("v-uni-switch", {
                        staticStyle: {
                            transform: "scale(0.5)"
                        },
                        attrs: {
                            checked: 1 == t.hotCollect
                        },
                        on: {
                            change: function (e) {
                                arguments[0] = e = t.$handleEvent(e), t.switch2Change.apply(void 0, arguments)
                            }
                        }
                    }), i("v-uni-view", {
                        staticStyle: {
                            "margin-left": "-20rpx",
                            "margin-right": "20rpx"
                        }
                    }, [t._v("热门")])], 1), i("navTop", {
                        attrs: {
                            backgroundColor: "white",
                            needBorder: !1,
                            backColor: "black"
                        }
                    }, [i("v-uni-text", [t._v("nft实盘(公众号)")])], 1)], 1), i("v-uni-view", {
                        staticClass: "nav",
                        style: "top:calc(94rpx + " + t.statusBarHeight + "px)"
                    }, [t.tabTitle.length > 0 ? i("navTab", {
                        ref: "navTab",
                        attrs: {
                            tabTitle: t.tabTitle
                        },
                        on: {
                            changeTab: function (e) {
                                arguments[0] = e = t.$handleEvent(e), t.changeTab.apply(void 0, arguments)
                            }
                        }
                    }) : t._e(), i("v-uni-view", {
                        staticClass: "titleBox"
                    }, t._l(t.titleList, (function (e, n) {
                        return i("v-uni-view", {
                            key: n,
                            staticClass: "titleItem",
                            style: {
                                width: 0 == n ? "60vw" : "20vw"
                            },
                            on: {
                                click: function (e) {
                                    arguments[0] = e = t.$handleEvent(e), t.titleClick(n)
                                }
                            }
                        }, [i("span", {
                            style: {
                                color: 0 === t.titleStatus[n] ? "#798a8c" : "#ba9a6c"
                            }
                        }, [t._v(t._s(e))]), i("v-uni-view", {
                            staticClass: "arrowBox"
                        }, [i("v-uni-image", {
                            staticStyle: {
                                width: "14rpx",
                                height: "14rpx",
                                transform: "rotate(180deg)"
                            },
                            attrs: {
                                src: 1 === t.titleStatus[n] ? "/static/arrow_yellow.png" : "/static/arrow_gary.png"
                            }
                        }), i("v-uni-image", {
                            staticStyle: {
                                width: "14rpx",
                                height: "14rpx",
                                transform: "rotate(360deg)"
                            },
                            attrs: {
                                src: 2 === t.titleStatus[n] ? "/static/arrow_yellow.png" : "/static/arrow_gary.png"
                            }
                        })], 1)], 1)
                    })), 1)], 1), i("v-uni-swiper", {
                        style: {
                            height: t.windowsHeight
                        },
                        attrs: {
                            current: t.currentTab
                        },
                        on: {
                            change: function (e) {
                                arguments[0] = e = t.$handleEvent(e), t.swiperTab.apply(void 0, arguments)
                            }
                        }
                    }, t._l(t.list, (function (e, n) {
                        return i("v-uni-swiper-item", {
                            key: n
                        }, [i("v-uni-scroll-view", {
                            staticStyle: {
                                height: "100%"
                            },
                            attrs: {
                                "scroll-y": "true",
                                "scroll-with-animation": !0,
                                "scroll-into-view": t.toView
                            },
                            on: {
                                scroll: function (e) {
                                    arguments[0] = e = t.$handleEvent(e), t.handleScroll.apply(void 0, arguments)
                                },
                                scrolltolower: function (e) {
                                    arguments[0] = e = t.$handleEvent(e), t.lower1.apply(void 0, arguments)
                                }
                            }
                        }, [i("v-uni-view", {
                            staticStyle: {
                                width: "100%",
                                opacity: "0",
                                "min-height": "200rpx"
                            },
                            style: "height:calc(60rpx + 62rpx + 3px +  94rpx + " + t.statusBarHeight + "px)",
                            attrs: {
                                id: "top" + n
                            }
                        }, [t._v("边距盒子")]), 0 == n ? i("bannerSwiper") : t._e(), t.shortList.length > 0 && 0 == n ? i("v-uni-view", {
                            staticClass: "shortBox"
                        }, t._l(t.shortList, (function (e, n) {
                            return i("v-uni-view", {
                                key: n,
                                staticClass: "shortItem",
                                on: {
                                    click: function (i) {
                                        arguments[0] = i = t.$handleEvent(i), t.shortItemClick(e)
                                    }
                                }
                            }, [i("v-uni-image", {
                                staticStyle: {
                                    width: "60rpx",
                                    height: "60rpx"
                                },
                                attrs: {
                                    src: e.icon
                                }
                            }), i("v-uni-view", [t._v(t._s(e.name))])], 1)
                        })), 1) : t._e(), i("v-uni-view", {
                            staticStyle: {
                                "background-color": "#f6f6f6",
                                width: "100vw",
                                height: "20rpx"
                            }
                        }), i("v-uni-view", {
                            staticClass: "content"
                        }, t._l(e, (function (a, r) {
                            return e.length > 0 ? i("ListItem", {
                                key: r,
                                attrs: {
                                    isScroll: t.isScroll,
                                    tabTitleEngItem: t.tabTitleEng[n],
                                    nowShowTips: t.nowShowTips,
                                    item: a
                                },
                                on: {
                                    filterList: function (e) {
                                        arguments[0] = e = t.$handleEvent(e), t.getList("filter")
                                    },
                                    showTips: function (e) {
                                        arguments[0] = e = t.$handleEvent(e), t.showTips.apply(void 0, arguments)
                                    }
                                }
                            }) : t._e()
                        })), 1), 0 === e.length ? i("v-uni-view", {
                            staticClass: "noCard"
                        }, [t._v("暂无信息")]) : t._e(), t.list[n].length > 3 ? i("v-uni-view", {
                            staticClass: "loadMoreBox"
                        }, [i("loadMore", {
                            on: {
                                loadMore: function (e) {
                                    arguments[0] = e = t.$handleEvent(e), t.lower1.apply(void 0, arguments)
                                }
                            }
                        }, [i("v-uni-view", {
                            staticClass: "loadMore"
                        }, [t._v(t._s(1 == t.noMore[n] ? "到底啦，别再拉了～" : 0 == t.noMore[n] ? "加载更多" : "加载中"))])], 1)], 1) : t._e(), t.webCheck ? i("v-uni-view", {
                            staticClass: "footer_w3ls",
                            staticStyle: {
                                display: "flex",
                                "align-items": "center",
                                "justify-content": "center"
                            }
                        }, [i("v-uni-view", {
                            staticClass: "container"
                        }, [i("v-uni-view", {
                            staticClass: "footer_bottom1"
                        }, [i("v-uni-text", [i("a", {
                            staticStyle: {
                                color: "#b6b6b6",
                                "text-decoration": "none"
                            },
                            attrs: {
                                href: "http://beian.miit.gov.cn/"
                            }
                        }, [t._v("浙ICP备2022011436号")])])], 1)], 1)], 1) : t._e(), i("v-uni-view", {
                            staticStyle: {
                                width: "100%",
                                height: "calc(env(safe-area-inset-bottom) + 50px)",
                                opacity: "0"
                            }
                        }, [t._v("底部占位盒子")])], 1)], 1)
                    })), 1), i("tabBottom")], 1)
                },
                r = []
        },
        "0c86": function (t, e, i) {
            "use strict";
            var n = i("8631"),
                a = i.n(n);
            a.a
        },
        "0dee": function (t, e, i) {
            "use strict";
            (function (t, n) {
                var a = i("4ea4");
                i("99af"), i("cb29"), i("4de4"), i("c740"), i("4160"), i("c975"), i("d81d"), i("fb6a"), i("4e82"), i("d3b7"), i("159b"), Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0;
                var r = a(i("5530"));
                i("96cf");
                var o = a(i("1da1")),
                    s = a(i("23a5")),
                    c = a(i("38e3")),
                    l = a(i("10b5")),
                    u = a(i("c052")),
                    f = a(i("f40b")),
                    d = a(i("7229")),
                    h = a(i("f545")),
                    p = a(i("7fc3")),
                    v = i("d813"),
                    g = {
                        components: {
                            bannerSwiper: s.default,
                            refresh: f.default,
                            navTab: d.default,
                            tabBar4: h.default,
                            tabBottom: u.default,
                            VirtualList: l.default,
                            ListItem: p.default,
                            loadMore: c.default
                        },
                        data: function () {
                            return {
                                shortList: [],
                                isScroll: !1,
                                nowShowTips: !1,
                                noMore: [],
                                tabTitleEng: [],
                                hotCollect: 1,
                                count: 0,
                                windowsHeight: "100vh",
                                titleStatus: [0, 0, 0],
                                titleList: ["名称/24H热度", "最新价", "波动"],
                                titleName: ["hot", "nowMoney", "fluctuation"],
                                statusBarHeight: uni.getSystemInfoSync()["statusBarHeight"] || 0,
                                currentPage: "index",
                                toView: "",
                                tabTitle: [],
                                currentTab: 0,
                                pages: [],
                                list: [],
                                hasLoad: [],
                                webCheck: !1,
                                needNotice: {},
                                needNoticeList: [],
                                nowMessage: {}
                            }
                        },
                        onReady: function () {},
                        computed: {
                            disTop: function () {
                                return +uni.upx2px(216) + 3 + this.statusBarHeight
                            }
                        },
                        onLoad: function (t) {
                            var e = this;
                            return (0, o.default)(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            e.initNotice(), e.getShortList(), window && -1 != window.location.href.indexOf("kthclose") && (e.webCheck = !0), e.hotCollect = uni.getStorageSync("hotCollect") ? uni.getStorageSync("hotCollect") : 1, e.getTitle().then((function (t) {
                                                e.initData(), e.getList()
                                            })), e.getGzhUpdateTime(!0), setInterval((function () {
                                                e.getGzhUpdateTime()
                                            }), 1e4);
                                        case 7:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        updated: function () {
                            this.getClientHeight()
                        },
                        onShareTimeline: function () {
                            return {
                                title: "nft实盘"
                            }
                        },
                        onShareAppMessage: function (t) {
                            return {
                                title: "nft实盘"
                            }
                        },
                        onShow: function () {
                            this.initNotice()
                        },
                        onHide: function () {},
                        methods: {
                            initNotice: function () {
                                var t = [];
                                for (var e in this.needNotice = uni.getStorageSync("needNotice") || {}, this.needNotice) this.needNotice[e] && t.push(e);
                                this.needNoticeList = t
                            },
                            getGzhUpdateTime: function () {
                                var e = this,
                                    i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (i || 0 !== this.needNoticeList.length) {
                                    var a = (new Date).getTime();
                                    n.callFunction({
                                        name: "getGzhUpdateTimeNew",
                                        data: {
                                            time: a,
                                            sign: this.m.b(a),
                                            v: getApp().globalData.version
                                        }
                                    }).then((function (n) {
                                        var a = e.zwyCry.decrypt(n.result);
                                        if (a = JSON.parse(a), i) {
                                            var r = {};
                                            a.forEach((function (t) {
                                                r[t.platform] = t["sendtime"]
                                            })), e.timeObj = r
                                        } else a.forEach((function (i) {
                                            e.timeObj[i.platform] ? e.timeObj[i.platform] != i["sendtime"] ? (t.log("发现新的公告"), e.timeObj[i.platform] = i["sendtime"], e.needNotice[i.platform] && (e.nowMessage = i, e.goMessage())) : t.log("没有发现新公告") : (e.timeObj[i.platform] = i.sendtime, e.needNotice[i.platform] && (e.nowMessage = i, e.goMessage()))
                                        }));
                                        t.log("this.timeObj", e.timeObj)
                                    }))
                                } else t.log("暂未开启提醒")
                            },
                            goMessage: function () {
                                uni.showModal({
                                    title: "提示",
                                    content: "".concat(this.nowMessage.platform || "???", "出新公告了,点击前往查看"),
                                    success: function (e) {
                                        e.confirm ? (t.log("用户点击确定"), uni.reLaunch({
                                            url: "../platformMessage/platformMessage"
                                        })) : e.cancel && t.log("用户点击取消")
                                    }
                                })
                            },
                            shortItemClick: function (t) {
                                "img" == t.type ? uni.previewImage({
                                    urls: [t.src]
                                }) : "urlOpen" == t.type ? window.open(t.src) : "urlHref" == t.type && (window.location.href = t.src)
                            },
                            getShortList: function () {
                                var e = this;
                                n.callFunction({
                                    name: "nomalFunc",
                                    data: {
                                        name: "getShortList"
                                    }
                                }).then((function (i) {
                                    t.log("res", i), e.shortList = i.result
                                }))
                            },
                            handleScroll: function (t) {
                                var e = this;
                                this.isScroll = !0, clearTimeout(this.isTimer), this.isTimer = setTimeout((function () {
                                    e.isScroll = !1
                                }), 500)
                            },
                            showTips: function (e) {
                                t.log("showTips", e), this.nowShowTips = e
                            },
                            switch2Change: function (e) {
                                t.log("switch2Change", e);
                                var i = e.detail.value;
                                uni.setStorageSync("hotCollect", i ? 1 : 2), this.hotCollect = i ? 1 : 2, this.getList("filter")
                            },
                            getClientHeight: function () {
                                0 === this.count && (this.count = 1, this.windowsHeight = document.documentElement.clientHeight - 49 + "px")
                            },
                            getOnemeta: function () {
                                n.callFunction({
                                    name: "onemeta"
                                }).then((function (e) {
                                    t.log("getOnemeta", e.result.data.data)
                                }))
                            },
                            titleClick: function (e) {
                                t.log("titleClick", e);
                                var i = new Array(this.titleList.length).fill(0);
                                i[e] = this.titleStatus[e], i[e]++, i[e] > 2 && (i[e] = 0), this.titleStatus = i, this.getList("filter")
                            },
                            filterList: function () {
                                var e = this,
                                    i = JSON.parse(JSON.stringify(this.currentTab)),
                                    n = JSON.parse(JSON.stringify(this.allListOri[this.currentTab])),
                                    a = [];
                                a = this.searchValue ? n.filter((function (t, i) {
                                    return -1 != t.GoodsName.indexOf(e.searchValue)
                                })) : n;
                                var o = this.titleStatus.findIndex((function (t) {
                                    return 0 != t
                                })); - 1 == o && (o = 0);
                                var s = this.titleName[o];
                                a = 2 === this.titleStatus[o] ? a.sort((function (t, e) {
                                    var i = t[s] || 0,
                                        n = e[s] || 0;
                                    return i - n
                                })) : a.sort((function (t, e) {
                                    var i = t[s] || 0,
                                        n = e[s] || 0;
                                    return n - i
                                })), t.log("tempList", a), 1 == this.hotCollect && (a = a.filter((function (t) {
                                    return t.hot > 10
                                })));
                                var c = uni.getStorageSync("topObj");
                                c = c ? JSON.parse(c) : {};
                                var l = [],
                                    u = [];
                                if (c[this.tabTitleEng[i]]) {
                                    var f = c[this.tabTitleEng[i]];
                                    a.forEach((function (t) {
                                        f[t.GoodsName] ? l.push((0, r.default)((0, r.default)({}, t), {}, {
                                            isTop: !0
                                        })) : u.push((0, r.default)((0, r.default)({}, t), {}, {
                                            isTop: !1
                                        }))
                                    })), a = l.concat(u)
                                }
                                a = a.map((function (t, e) {
                                    return t["index"] = e, t
                                })), this.allList[i] = a, this.$forceUpdate()
                            },
                            toDetail: function (e) {
                                t.log("toDetail", e), uni.navigateTo({
                                    url: "../indexDetail/indexDetail?GoodsId=".concat(e.GoodsId, "&platform=").concat(e.platform)
                                })
                            },
                            getTitle: function () {
                                var e = this;
                                return new Promise((function (i, a) {
                                    n.callFunction({
                                        name: "nomalFunc",
                                        data: {
                                            name: "getTitle"
                                        }
                                    }).then((function (n) {
                                        t.log("getTitle", n);
                                        var a = n.result.data,
                                            r = [],
                                            o = [];
                                        a.forEach((function (t) {
                                            r.push(t.name), o.push(t.platform)
                                        })), e.tabTitle = r, e.tabTitleEng = o, i()
                                    }))
                                }))
                            },
                            initData: function () {
                                var t = {
                                    pages: 1,
                                    list: [],
                                    noMore: 0,
                                    hasLoad: !1,
                                    allList: [],
                                    allListOri: []
                                };
                                for (var e in t) this[e] = new Array(this.tabTitle.length).fill(t[e])
                            },
                            toTop: function () {
                                var t = this;
                                this.toView = "", setTimeout((function () {
                                    t.toView = "top" + t.currentTab
                                }), 10)
                            },
                            changeTab: function (t) {
                                this.currentTab = t
                            },
                            getAllList: function (e) {
                                var i = this;
                                return (0, o.default)(regeneratorRuntime.mark((function a() {
                                    var r, o, s, c;
                                    return regeneratorRuntime.wrap((function (a) {
                                        while (1) switch (a.prev = a.next) {
                                            case 0:
                                                return i.$refs.refresh.rightEnd(), r = "", a.prev = 2, o = (new Date).getTime(), s = i.m.b(o), a.next = 7, n.callFunction({
                                                    name: "getAllListNew",
                                                    data: {
                                                        time: o,
                                                        sign: s,
                                                        platform: i.tabTitleEng[e],
                                                        v: getApp().globalData.version
                                                    }
                                                });
                                            case 7:
                                                r = a.sent, a.next = 16;
                                                break;
                                            case 10:
                                                return a.prev = 10, a.t0 = a["catch"](2), t.log("err", a.t0), uni.showToast({
                                                    title: "请求超时",
                                                    icon: "none"
                                                }), i.$refs.refresh.endAfter(), a.abrupt("return");
                                            case 16:
                                                r = i.zwyCry.decrypt(r.result), c = JSON.parse(r), c = c.map((function (t, e) {
                                                    return t["fluctuation"] = ((t["nowMoney"] - t["startMoney"]) / t["startMoney"] * 100).toFixed(2), t
                                                })), i.allListOri[e] = c, i.filterList();
                                            case 21:
                                            case "end":
                                                return a.stop()
                                        }
                                    }), a, null, [
                                        [2, 10]
                                    ])
                                })))()
                            },
                            getList: function () {
                                var e = arguments,
                                    i = this;
                                return (0, o.default)(regeneratorRuntime.mark((function n() {
                                    var a, r, o;
                                    return regeneratorRuntime.wrap((function (n) {
                                        while (1) switch (n.prev = n.next) {
                                            case 0:
                                                if (a = e.length > 0 && void 0 !== e[0] ? e[0] : "refresh", r = JSON.stringify(i.currentTab), "refresh" == a ? (i.pages[r] = 1, i.noMore[r] = 0, i.allList[r] = []) : "filter" == a && (i.pages[r] = 1, i.noMore[r] = 0, i.filterList()), 1 !== i.noMore[r] && 2 !== i.noMore[r]) {
                                                    n.next = 5;
                                                    break
                                                }
                                                return n.abrupt("return");
                                            case 5:
                                                if (0 !== i.allList[r].length) {
                                                    n.next = 8;
                                                    break
                                                }
                                                return n.next = 8, i.getAllList(r);
                                            case 8:
                                                t.log("this.allList", i.allList), i.noMore[r] = 2, i.$forceUpdate(), o = i.pages[r], 30 * o > i.allList[r].length ? i.noMore[r] = 1 : i.noMore[r] = 0, i.list[r] = i.allList[r].slice(0, 30 * o), i.hasLoad[r] = !0, i.pages[r]++, i.$forceUpdate(), i.$refs.refresh.endAfter();
                                            case 18:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n)
                                })))()
                            },
                            isRefresh: function () {
                                this.getList("refresh")
                            },
                            swiperTab: function (t) {
                                var e = t.detail.current;
                                this.$refs.navTab.longClick(e), 0 === this.list[e].length && this.getList("refresh")
                            },
                            lower1: v.throttle((function (e) {
                                this.getList("loadMore"), t.log("加载".concat(this.currentTab))
                            }), 300),
                            refreshStart: function (t) {
                                this.$refs.refresh.refreshStart(t)
                            },
                            refreshMove: function (t) {
                                this.$refs.refresh.refreshMove(t)
                            },
                            refreshEnd: function (t) {
                                this.$refs.refresh.refreshEnd(t)
                            }
                        }
                    };
                e.default = g
            }).call(this, i("5a52")["default"], i("a9ff")["default"])
        },
        "10b5": function (t, e, i) {
            "use strict";
            i.r(e);
            var n = i("324e"),
                a = i("587e");
            for (var r in a) "default" !== r && function (t) {
                i.d(e, t, (function () {
                    return a[t]
                }))
            }(r);
            i("7554");
            var o, s = i("f0c5"),
                c = Object(s["a"])(a["default"], n["b"], n["c"], !1, null, "6ce03093", null, !1, n["a"], o);
            e["default"] = c.exports
        },
        2112: function (t, e, i) {
            "use strict";
            var n = i("440c"),
                a = i.n(n);
            a.a
        },
        "23a5": function (t, e, i) {
            "use strict";
            i.r(e);
            var n = i("e706"),
                a = i("d53a");
            for (var r in a) "default" !== r && function (t) {
                i.d(e, t, (function () {
                    return a[t]
                }))
            }(r);
            i("0c86");
            var o, s = i("f0c5"),
                c = Object(s["a"])(a["default"], n["b"], n["c"], !1, null, "1e4f9118", null, !1, n["a"], o);
            e["default"] = c.exports
        },
        "28f6": function (t, e, i) {
            "use strict";
            (function (t) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0;
                var i = {
                    props: {},
                    data: function () {
                        return {
                            currentPage: "",
                            tabBar: [{
                                pagePath: "pages/index/index",
                                text: "NFT新榜",
                                iconPath: "../static/index_change.png",
                                selectedIconPath: "../static/index.png"
                            }, {
                                pagePath: "pages/platformMessage/platformMessage",
                                text: "平台公告",
                                iconPath: "../static/index_change.png",
                                selectedIconPath: "../static/index.png"
                            }, {
                                pagePath: "pages/partner/partner",
                                text: "合作伙伴",
                                iconPath: "../static/index_change.png",
                                selectedIconPath: "../static/index.png"
                            }, {
                                pagePath: "pages/mine/mine",
                                text: "我的",
                                iconPath: "../static/index_change.png",
                                selectedIconPath: "../static/index.png"
                            }]
                        }
                    },
                    created: function () {
                        uni.hideTabBar({});
                        var e = getCurrentPages(),
                            i = e[e.length - 1],
                            n = i.route;
                        this.currentPage = n, t.log("url", n)
                    },
                    computed: {},
                    methods: {
                        navTo: function (t) {
                            t.pagePath !== this.currentPage ? uni.switchTab({
                                url: "/".concat(t.pagePath)
                            }) : this.$parent.toTop && this.$parent.toTop()
                        }
                    }
                };
                e.default = i
            }).call(this, i("5a52")["default"])
        },
        "324e": function (t, e, i) {
            "use strict";
            var n;
            i.d(e, "b", (function () {
                return a
            })), i.d(e, "c", (function () {
                return r
            })), i.d(e, "a", (function () {
                return n
            }));
            var a = function () {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("v-uni-view", {
                        staticClass: "virtual-list"
                    }, [i("v-uni-scroll-view", {
                        style: {
                            height: "100vh",
                            position: "relative"
                        },
                        attrs: {
                            "scroll-y": "true"
                        },
                        on: {
                            scroll: function (e) {
                                arguments[0] = e = t.$handleEvent(e), t.handleScroll.apply(void 0, arguments)
                            }
                        }
                    }, [i("v-uni-view", {
                        staticStyle: {
                            width: "100%",
                            opacity: "0",
                            "min-height": "200rpx"
                        },
                        style: "height:calc(62rpx + 3px +  94rpx + " + t.statusBarHeight + "px)"
                    }, [t._v("边距盒子")]), i("v-uni-view", {
                        staticClass: "titleBox"
                    }), i("v-uni-view", {
                        staticClass: "scroll-bar",
                        style: {
                            height: t.localHeight + "px"
                        }
                    }), i("v-uni-view", {
                        staticClass: "list",
                        style: {
                            height: "100vh",
                            transform: "translateY(" + (t.offset + t.disTop) + "px)"
                        }
                    }, [t._l(t.visibleData, (function (e) {
                        return i("v-uni-view", {
                            key: e._id,
                            staticClass: "item-wrap"
                        }, [i("ListItem", {
                            attrs: {
                                isScroll: t.isScroll,
                                tabTitleEngItem: t.tabTitleEngItem,
                                nowShowTips: t.nowShowTips,
                                item: e
                            },
                            on: {
                                filterList: function (e) {
                                    arguments[0] = e = t.$handleEvent(e), t.filterList.apply(void 0, arguments)
                                },
                                showTips: function (e) {
                                    arguments[0] = e = t.$handleEvent(e), t.showTips.apply(void 0, arguments)
                                }
                            }
                        })], 1)
                    })), t.visibleData.length > 3 ? i("v-uni-view", {
                        staticClass: "loadMoreBox"
                    }, [i("v-uni-view", {
                        staticClass: "loadMore"
                    }, [t._v("到底啦，别再拉了～")])], 1) : t._e(), i("v-uni-view", {
                        staticStyle: {
                            height: "52px",
                            width: "100vw"
                        }
                    }), i("v-uni-view", {
                        staticStyle: {
                            height: "var(--window-bottom)",
                            width: "100vw"
                        }
                    }), i("v-uni-view", {
                        staticStyle: {
                            height: "calc(env(safe-area-inset-bottom))",
                            width: "100vw"
                        }
                    })], 2)], 1)], 1)
                },
                r = []
        },
        "367b": function (t, e, i) {
            var n = i("43d7");
            "string" === typeof n && (n = [
                [t.i, n, ""]
            ]), n.locals && (t.exports = n.locals);
            var a = i("4f06").default;
            a("5eae9496", n, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        "43d7": function (t, e, i) {
            var n = i("24fb");
            e = n(!1), e.push([t.i, '.tab-bar[data-v-5c593a06]{position:fixed;box-sizing:initial;height:50px;bottom:0;left:0;right:0;\r\n  /* height: 48px; */background:transparent;display:flex;padding-bottom:calc(env(safe-area-inset-bottom));padding-top:2px;z-index:9999999}.tab-bar1[data-v-5c593a06]{background:#fff}.tab-bar-border[data-v-5c593a06]{background-color:#d9d9d9;position:absolute;left:0;top:0;width:100%;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.tab-bar-item[data-v-5c593a06]{color:rgba(127,131,137,.69);flex:1;text-align:center;display:flex;justify-content:center;align-items:center;font-size:%?30?%;font-weight:700;position:relative;flex-direction:column}.redCircle[data-v-5c593a06]{position:absolute;right:%?-20?%;top:%?-10?%;width:%?10?%;height:%?10?%;background-color:red;border-radius:50%}.tab-bar-item uni-view[data-v-5c593a06]{font-size:%?30?%}.bottomLine[data-v-5c593a06]{color:#d44945}.bottomLine[data-v-5c593a06]::before{position:absolute;content:"";bottom:-10px;width:100%;height:3px;background-color:#d44945}', ""]), t.exports = e
        },
        "440c": function (t, e, i) {
            var n = i("bb7b");
            "string" === typeof n && (n = [
                [t.i, n, ""]
            ]), n.locals && (t.exports = n.locals);
            var a = i("4f06").default;
            a("f464edd0", n, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        "472f": function (t, e, i) {
            "use strict";
            i.r(e);
            var n = i("08c2"),
                a = i("94c7");
            for (var r in a) "default" !== r && function (t) {
                i.d(e, t, (function () {
                    return a[t]
                }))
            }(r);
            i("f4f1");
            var o, s = i("f0c5"),
                c = Object(s["a"])(a["default"], n["b"], n["c"], !1, null, "f6821cb2", null, !1, n["a"], o);
            e["default"] = c.exports
        },
        "587e": function (t, e, i) {
            "use strict";
            i.r(e);
            var n = i("e83d"),
                a = i.n(n);
            for (var r in n) "default" !== r && function (t) {
                i.d(e, t, (function () {
                    return n[t]
                }))
            }(r);
            e["default"] = a.a
        },
        "5dce": function (t, e, i) {
            "use strict";
            (function (t) {
                i("99af"), Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0;
                var n = i("d813"),
                    a = {
                        props: {
                            tabTitleEngItem: {
                                type: String,
                                default: ""
                            },
                            nowShowTips: {
                                type: Boolean,
                                default: !1
                            },
                            item: {
                                type: Object,
                                default: function () {
                                    return {}
                                }
                            },
                            isScroll: {
                                type: Boolean,
                                default: !1
                            }
                        },
                        data: function () {
                            return {
                                topObj: {},
                                curTipshow: !1,
                                canClick: !0
                            }
                        },
                        onLoad: function () {},
                        watch: {
                            nowShowTips: function (t, e) {
                                !t && this.curTipshow && this.canClick && (this.curTipshow = !1)
                            }
                        },
                        onReady: function () {},
                        methods: {
                            longDebounce: n.debounce((function (t) {
                                this.isLongpress()
                            }), 100),
                            topClick: function () {
                                if (this.canClick) {
                                    var t = uni.getStorageSync("topObj");
                                    this.topObj = t ? JSON.parse(t) : {}, this.curTipshow = !1;
                                    var e = !this.item.isTop;
                                    this.topObj[this.tabTitleEngItem] || (this.topObj[this.tabTitleEngItem] = {}), this.topObj[this.tabTitleEngItem][this.item.GoodsName] = e, uni.setStorageSync("topObj", JSON.stringify(this.topObj)), this.$emit("showTips", !1), this.$emit("filterList")
                                }
                            },
                            isLongpress: function () {
                                var t = this;
                                this.canClick && !this.isScroll && (this.canClick = !1, this.$emit("showTips", !1), setTimeout((function () {
                                    t.curTipshow = !0, t.$emit("showTips", !0)
                                }), 10), setTimeout((function () {
                                    t.canClick = !0
                                }), 300))
                            },
                            toDetail: function (e) {
                                t.log("toDetail", e), this.canClick && (this.nowShowTips ? this.$emit("showTips", !1) : uni.navigateTo({
                                    url: "../indexDetail/indexDetail?GoodsId=".concat(e.GoodsId, "&platform=").concat(e.platform)
                                }))
                            }
                        }
                    };
                e.default = a
            }).call(this, i("5a52")["default"])
        },
        "610d": function (t, e, i) {
            var n = i("24fb");
            e = n(!1), e.push([t.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.isChoose[data-v-1e4f9118]{opacity:1!important;background-color:#fff!important}.isDotBox[data-v-1e4f9118]{position:absolute;right:%?36?%;bottom:0;display:flex;align-items:center;justify-content:center}.isDotBox .isDotOut[data-v-1e4f9118]{width:%?28?%;height:%?42?%;display:flex;align-items:center;justify-content:center}.isDotBox .isDotOut .isDotBtn[data-v-1e4f9118]{transition:.3s;width:%?18?%;border-radius:%?10?%;height:%?7?%;background:#fff;opacity:.4}.bannerImgDetail[data-v-1e4f9118]{width:100%;height:100%}.bannerImg[data-v-1e4f9118]{width:100vw;height:%?280?%;position:relative;margin:0 auto}', ""]), t.exports = e
        },
        "6c16": function (t, e, i) {
            "use strict";
            var n;
            i.d(e, "b", (function () {
                return a
            })), i.d(e, "c", (function () {
                return r
            })), i.d(e, "a", (function () {
                return n
            }));
            var a = function () {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("v-uni-view", {
                        staticClass: "tabBar"
                    }, t._l(t.tabBar, (function (e, n) {
                        return i("v-uni-view", {
                            key: e.url,
                            staticClass: "tabbar_item",
                            class: {
                                active: e.url == t.currentPage
                            },
                            on: {
                                click: function (i) {
                                    arguments[0] = i = t.$handleEvent(i), t.navTo(e)
                                }
                            }
                        }, [e.url == t.currentPage ? i("v-uni-image", {
                            attrs: {
                                src: e.imgClick,
                                mode: ""
                            }
                        }) : i("v-uni-image", {
                            attrs: {
                                src: e.imgNormal,
                                mode: ""
                            }
                        }), i("v-uni-view", {
                            staticClass: "text"
                        }, [t._v(t._s(e.text))])], 1)
                    })), 1)
                },
                r = []
        },
        "729a": function (t, e, i) {
            "use strict";
            var n = i("d397"),
                a = i.n(n);
            a.a
        },
        7364: function (t, e, i) {
            "use strict";
            var n;
            i.d(e, "b", (function () {
                return a
            })), i.d(e, "c", (function () {
                return r
            })), i.d(e, "a", (function () {
                return n
            }));
            var a = function () {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("v-uni-view", {
                        staticClass: "tab-bar tab-bar1"
                    }, [i("v-uni-view", {
                        staticClass: "tab-bar-border"
                    }), t._l(t.tabBar, (function (e, n) {
                        return i("v-uni-view", {
                            key: n,
                            staticClass: "tab-bar-item",
                            on: {
                                click: function (i) {
                                    arguments[0] = i = t.$handleEvent(i), t.navTo(e)
                                }
                            }
                        }, [i("v-uni-view", {
                            class: {
                                bottomLine: e.pagePath == t.currentPage
                            },
                            staticStyle: {
                                position: "relative"
                            }
                        }, [t._v(t._s(e.text))])], 1)
                    }))], 2)
                },
                r = []
        },
        7554: function (t, e, i) {
            "use strict";
            var n = i("ab49"),
                a = i.n(n);
            a.a
        },
        "7fc3": function (t, e, i) {
            "use strict";
            i.r(e);
            var n = i("b54f"),
                a = i("d161");
            for (var r in a) "default" !== r && function (t) {
                i.d(e, t, (function () {
                    return a[t]
                }))
            }(r);
            i("729a");
            var o, s = i("f0c5"),
                c = Object(s["a"])(a["default"], n["b"], n["c"], !1, null, "9b501e24", null, !1, n["a"], o);
            e["default"] = c.exports
        },
        8631: function (t, e, i) {
            var n = i("610d");
            "string" === typeof n && (n = [
                [t.i, n, ""]
            ]), n.locals && (t.exports = n.locals);
            var a = i("4f06").default;
            a("7077d0d0", n, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        "8a95": function (t, e, i) {
            "use strict";
            (function (t, i) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0;
                var n = {
                    data: function () {
                        return {
                            currentIndex: 0,
                            jjIdObj: {},
                            canAuto: !0,
                            bannerList: []
                        }
                    },
                    methods: {
                        changeBanner: function (t) {
                            this.currentIndex = t
                        },
                        getBannerList: function () {
                            var e = this;
                            t.callFunction({
                                name: "nomalFunc",
                                data: {
                                    name: "getBanner"
                                }
                            }).then((function (t) {
                                i.log("res", t), e.bannerList = t.result
                            }))
                        },
                        swiperClick: function (t) {
                            i.log("item", t), "img" == t.type ? uni.previewImage({
                                urls: [t.src]
                            }) : "urlOpen" == t.type ? window.open(t.src) : "urlHref" == t.type && (window.location.href = t.src)
                        }
                    },
                    created: function () {
                        i.log("created"), this.getBannerList()
                    },
                    onHide: function () {
                        this.canAuto = !1
                    },
                    onReady: function () {
                        this.createIntersectionObserver && (this.observer = this.createIntersectionObserver({
                            thresholds: [.2, .8]
                        }).relativeToViewport())
                    },
                    onShow: function () {
                        i.log("onShow"), this.canAuto = !0
                    }
                };
                e.default = n
            }).call(this, i("a9ff")["default"], i("5a52")["default"])
        },
        "8b53": function (t, e, i) {
            "use strict";
            i.r(e);
            var n = i("28f6"),
                a = i.n(n);
            for (var r in n) "default" !== r && function (t) {
                i.d(e, t, (function () {
                    return n[t]
                }))
            }(r);
            e["default"] = a.a
        },
        "94c7": function (t, e, i) {
            "use strict";
            i.r(e);
            var n = i("0dee"),
                a = i.n(n);
            for (var r in n) "default" !== r && function (t) {
                i.d(e, t, (function () {
                    return n[t]
                }))
            }(r);
            e["default"] = a.a
        },
        9737: function (t, e, i) {
            var n = i("24fb");
            e = n(!1), e.push([t.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.loadMore[data-v-6ce03093]{background-color:#f6f6f6;padding:0 %?23?%;position:relative;z-index:11}.loadMoreBox[data-v-6ce03093]::before{content:"";position:absolute;top:0;bottom:0;left:0;right:0;width:90vw;height:%?2?%;background-color:#d9d9d9;margin:auto}.loadMoreBox[data-v-6ce03093]{position:relative;height:90px;display:flex;align-items:center;justify-content:center;width:100vw;font-size:%?22?%;color:#c3c3c3}.titleBox[data-v-6ce03093]{width:100vw;display:flex;height:%?60?%;background:#fff;color:#cecece;line-height:%?60?%}.titleBox .titleItem[data-v-6ce03093]{text-indent:%?20?%;text-align:left;font-size:%?26?%}.item-wrap[data-v-6ce03093]{height:%?88?%}.list[data-v-6ce03093]{position:absolute;top:0;left:0;width:100%}', ""]), t.exports = e
        },
        ab49: function (t, e, i) {
            var n = i("9737");
            "string" === typeof n && (n = [
                [t.i, n, ""]
            ]), n.locals && (t.exports = n.locals);
            var a = i("4f06").default;
            a("51560dd2", n, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        b0df: function (t, e, i) {
            "use strict";
            var n = i("367b"),
                a = i.n(n);
            a.a
        },
        b54f: function (t, e, i) {
            "use strict";
            var n;
            i.d(e, "b", (function () {
                return a
            })), i.d(e, "c", (function () {
                return r
            })), i.d(e, "a", (function () {
                return n
            }));
            var a = function () {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("v-uni-view", {
                        staticClass: "rankLine",
                        class: t.item.isTop ? "lineHover" : "",
                        on: {
                            longpress: function (e) {
                                e.stopPropagation(), arguments[0] = e = t.$handleEvent(e), t.longDebounce.apply(void 0, arguments)
                            },
                            click: function (e) {
                                arguments[0] = e = t.$handleEvent(e), t.toDetail(t.item)
                            }
                        }
                    }, [t.curTipshow && t.item.index >= 2 ? i("v-uni-view", {
                        staticClass: "tipsBoxTop"
                    }, [i("v-uni-view", {
                        staticClass: "tipsItem",
                        on: {
                            click: function (e) {
                                e.stopPropagation(), e.preventDefault(), arguments[0] = e = t.$handleEvent(e), t.topClick.apply(void 0, arguments)
                            }
                        }
                    }, [i("v-uni-image", {
                        staticStyle: {
                            width: "40rpx",
                            height: "30rpx"
                        },
                        attrs: {
                            src: t.item.isTop ? "../../static/icon_topCancle.png" : "../../static/icon_top.png"
                        }
                    }), i("v-uni-view", {
                        staticStyle: {
                            color: "white",
                            "font-size": "24rpx",
                            "margin-top": "6rpx"
                        }
                    }, [t._v(t._s(t.item.isTop ? "取消置顶" : "置顶"))])], 1)], 1) : t._e(), t.curTipshow && t.item.index < 2 ? i("v-uni-view", {
                        staticClass: "tipsBoxBottom"
                    }, [i("v-uni-view", {
                        staticClass: "tipsItem",
                        on: {
                            click: function (e) {
                                e.stopPropagation(), e.preventDefault(), arguments[0] = e = t.$handleEvent(e), t.topClick.apply(void 0, arguments)
                            }
                        }
                    }, [i("v-uni-image", {
                        staticStyle: {
                            width: "40rpx",
                            height: "30rpx"
                        },
                        attrs: {
                            src: t.item.isTop ? "../../static/icon_topCancle.png" : "../../static/icon_top.png"
                        }
                    }), i("v-uni-view", {
                        staticStyle: {
                            color: "white",
                            "font-size": "24rpx",
                            "margin-top": "6rpx"
                        }
                    }, [t._v(t._s(t.item.isTop ? "取消置顶" : "置顶"))])], 1)], 1) : t._e(), i("v-uni-view", {
                        staticClass: "rankItem",
                        staticStyle: {
                            width: "60vw",
                            // overflow: "hidden",
                            // "text-overflow": "ellipsis",
                            "white-space": "nowrap"
                        }
                    }, [i("v-uni-view", {
                        staticClass: "nameBox"
                    }, [i("v-uni-image", {
                        staticStyle: {
                            width: "40rpx",
                            height: "40rpx",
                            "border-radius": "50%",
                            // overflow: "hidden"
                        },
                        attrs: {
                            mode: "scaleToFill",
                            src: t.item.ImageUrl
                        }
                    }), i("v-uni-view", {
                        staticClass: "nameDetail"
                    }, [i("v-uni-view", {
                        staticClass: "clamp",
                        staticStyle: {
                            "text-align": "left",
                            "font-size": "28rpx",
                            "font-weight": "bold",
                            width: "360rpx"
                        }
                    }, [t._v(t._s(t.item.GoodsName))]), i("v-uni-view", {
                        staticStyle: {
                            "font-size": "26rpx",
                            color: "#e0e0e0",
                            "text-align": "left",
                            "font-weight": "normal"
                        }
                    }, [t._v(t._s(t.item.platformChinese) + " / " + t._s(t.item.hot || 0))])], 1)], 1)], 1), i("v-uni-view", {
                        staticClass: "rankItem"
                    }, [t._v("￥" + t._s(t.item.nowMoney))]), i("v-uni-view", {
                        staticClass: "rankItem"
                    }, [i("v-uni-view", {
                        staticClass: "isRate",
                        style: {
                            background: t.item.fluctuation >= 0 ? "#d64a45" : "#74bea6"
                        }
                    }, [t._v(t._s(t.item.fluctuation >= 0 ? "+" : "") + t._s(t.item.fluctuation) + "%")])], 1)], 1)
                },
                r = []
        },
        bb7b: function (t, e, i) {
            var n = i("24fb");
            e = n(!1), e.push([t.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.tabBar[data-v-677fc567]{width:100vw;height:%?100?%;position:fixed;bottom:0;left:0;right:0;box-shadow:%?0?% %?-2?% %?10?% rgba(89,125,172,.4);margin:0 auto;z-index:998;background-color:#fff;color:#999;border-left:0 solid #fff;border-top:0 solid #fff;border-right:0 solid #fff;display:flex;justify-content:space-around;border-top-right-radius:%?0?%;border-top-left-radius:%?0?%;box-sizing:border-box;}.tabBar .tabbar_item[data-v-677fc567]{width:25%;font-size:12px;display:flex;flex-direction:column;justify-content:center;align-items:center}.tabBar .tabbar_item.active[data-v-677fc567]{border-left:0 solid #fff;border-top:0 solid #fff;background:transparent;color:#fff}.tabBar uni-image[data-v-677fc567]{width:%?48?%;height:%?48?%;margin-left:%?5?%}', ""]), t.exports = e
        },
        c052: function (t, e, i) {
            "use strict";
            i.r(e);
            var n = i("7364"),
                a = i("8b53");
            for (var r in a) "default" !== r && function (t) {
                i.d(e, t, (function () {
                    return a[t]
                }))
            }(r);
            i("b0df");
            var o, s = i("f0c5"),
                c = Object(s["a"])(a["default"], n["b"], n["c"], !1, null, "5c593a06", null, !1, n["a"], o);
            e["default"] = c.exports
        },
        c05f: function (t, e, i) {
            var n = i("24fb");
            e = n(!1), e.push([t.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.shortBox[data-v-f6821cb2]{width:100vw;background-color:#fff;flex-wrap:wrap;display:flex;align-items:center;justify-content:flex-start;padding:%?40?% 0 0 0}.shortBox .shortItem[data-v-f6821cb2]{margin-bottom:%?40?%;width:20vw;height:%?100?%;display:flex;align-items:center;justify-content:center;flex-direction:column}.switch[data-v-f6821cb2]{display:flex;align-items:center;justify-content:flex-end;position:absolute;right:0;top:0;bottom:0;margin:auto;z-index:999;width:%?200?%}.loadMore[data-v-f6821cb2]{background-color:#f6f6f6;padding:0 %?23?%;position:relative;z-index:11}.loadMoreBox[data-v-f6821cb2]::before{content:"";position:absolute;top:0;bottom:0;left:0;right:0;width:90vw;height:%?2?%;background-color:#d9d9d9;margin:auto}.loadMoreBox[data-v-f6821cb2]{position:relative;height:%?100?%;display:flex;align-items:center;justify-content:center;width:100vw;font-size:%?22?%;color:#c3c3c3}.isBottom[data-v-f6821cb2]{width:100vw;opacity:0;height:calc(env(safe-area-inset-bottom) + var(--window-bottom) + 50px)}.titleItem[data-v-f6821cb2]{display:flex;align-items:center;justify-content:flex-start;text-align:center;font-size:%?20?%}.titleItem .arrowBox[data-v-f6821cb2]{margin-left:%?10?%;display:flex;flex-direction:column;align-items:center;justify-content:center}.isRate[data-v-f6821cb2]{width:%?130?%;height:%?40?%;line-height:%?40?%;border-radius:%?6?%;color:#fff;font-size:%?26?%}.nameBox[data-v-f6821cb2]{padding-left:%?20?%;display:flex;align-items:center;justify-content:flex-start}.lineHover[data-v-f6821cb2]{background-color:#f2f3f4!important}.rankLine[data-v-f6821cb2]{background-color:#fff;position:relative;transition:.3s;color:#000;font-weight:700;display:flex;align-items:center;height:%?88?%;border-bottom:1px solid #f2f3f4}.rankLine .rankArrow[data-v-f6821cb2]{width:%?10?%;height:%?15?%;-webkit-transform:rotate(180deg);transform:rotate(180deg);position:absolute;right:%?20?%;top:0;bottom:0;margin:auto}.rankLine .rankItem[data-v-f6821cb2]{width:20vw;text-align:left;font-size:%?26?%;text-indent:%?10?%}.titleBox[data-v-f6821cb2]{width:100vw;display:flex;height:%?60?%;background:#fff;color:#cecece;line-height:%?60?%}.titleBox .titleItem[data-v-f6821cb2]{text-indent:%?20?%;text-align:left;font-size:%?26?%}.container999[data-v-f6821cb2]{width:100vw;font-size:%?28?%;height:100vh;color:#6b8082;position:relative;background-color:#f6f6f6}.content[data-v-f6821cb2]{width:100%}.card[data-v-f6821cb2]{width:90%;height:%?368?%;background-color:#fff;margin:0 auto %?42?% auto;background:#fff;box-shadow:0 0 5px 0 rgba(0,0,0,.1);border-radius:5px;position:relative}.noCard[data-v-f6821cb2]{width:90%;height:%?200?%;margin:%?20?% auto;background-color:#fff;display:flex;align-items:center;justify-content:center;color:#999;box-shadow:0 0 %?10?% 0 rgba(0,0,0,.1);border-radius:%?10?%}.nav[data-v-f6821cb2]{border-bottom:1px solid #f5f3f3;position:fixed;left:0;color:#fff;width:100%;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;font-size:%?24?%;background-color:#fff;z-index:996}.searchInput999[data-v-f6821cb2]{width:90%;margin:0 auto;background:#fff;border-radius:%?30?%;display:flex;align-items:center;justify-content:center;height:%?56?%}.search999[data-v-f6821cb2]{width:%?32?%;height:%?32?%}.searchBox999[data-v-f6821cb2]{width:%?56?%;height:%?56?%;display:flex;justify-content:center;align-items:center}.input999[data-v-f6821cb2]{color:#999;width:80%}', ""]), t.exports = e
        },
        c745: function (t, e, i) {
            "use strict";
            i("99af"), Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                props: {
                    currentPage: {
                        type: String,
                        default: "index"
                    }
                },
                data: function () {
                    return {
                        tabBar: [{
                            url: "index",
                            text: "短模板",
                            imgNormal: "../static/index_change.png",
                            imgClick: "../static/index.png"
                        }, {
                            url: "longIndex",
                            text: "长模板",
                            imgNormal: "../static/index_change.png",
                            imgClick: "../static/index.png"
                        }, {
                            url: "other",
                            text: "其他示例",
                            imgNormal: "../static/index_change.png",
                            imgClick: "../static/index.png"
                        }]
                    }
                },
                created: function () {
                    uni.hideTabBar({})
                },
                computed: {},
                methods: {
                    navTo: function (t) {
                        if (t.url !== this.currentPage) {
                            var e = "/pages/".concat(t.url, "/").concat(t.url);
                            uni.switchTab({
                                url: e
                            })
                        } else this.$parent.toTop()
                    }
                }
            };
            e.default = n
        },
        cb29: function (t, e, i) {
            var n = i("23e7"),
                a = i("81d5"),
                r = i("44d2");
            n({
                target: "Array",
                proto: !0
            }, {
                fill: a
            }), r("fill")
        },
        ce78: function (t, e, i) {
            "use strict";
            i.r(e);
            var n = i("c745"),
                a = i.n(n);
            for (var r in n) "default" !== r && function (t) {
                i.d(e, t, (function () {
                    return n[t]
                }))
            }(r);
            e["default"] = a.a
        },
        d161: function (t, e, i) {
            "use strict";
            i.r(e);
            var n = i("5dce"),
                a = i.n(n);
            for (var r in n) "default" !== r && function (t) {
                i.d(e, t, (function () {
                    return n[t]
                }))
            }(r);
            e["default"] = a.a
        },
        d397: function (t, e, i) {
            var n = i("079c");
            "string" === typeof n && (n = [
                [t.i, n, ""]
            ]), n.locals && (t.exports = n.locals);
            var a = i("4f06").default;
            a("29dab0a8", n, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        d53a: function (t, e, i) {
            "use strict";
            i.r(e);
            var n = i("8a95"),
                a = i.n(n);
            for (var r in n) "default" !== r && function (t) {
                i.d(e, t, (function () {
                    return n[t]
                }))
            }(r);
            e["default"] = a.a
        },
        e706: function (t, e, i) {
            "use strict";
            var n;
            i.d(e, "b", (function () {
                return a
            })), i.d(e, "c", (function () {
                return r
            })), i.d(e, "a", (function () {
                return n
            }));
            var a = function () {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return t.bannerList.length > 0 ? i("div", {
                        staticClass: "bannerImg"
                    }, [i("v-uni-swiper", {
                        staticClass: "bannerImg",
                        attrs: {
                            "indicator-dots": !0,
                            "indicator-color": "#fff",
                            "indicator-active-color": "#FF7200",
                            autoplay: t.canAuto,
                            interval: "5000",
                            duration: "300",
                            circular: !0
                        }
                    }, t._l(t.bannerList, (function (e, n) {
                        return i("v-uni-swiper-item", {
                            key: n,
                            on: {
                                click: function (i) {
                                    arguments[0] = i = t.$handleEvent(i), t.swiperClick(e)
                                }
                            }
                        }, [i("v-uni-view", {
                            staticClass: "bannerImgDetail",
                            staticStyle: {
                                position: "relative"
                            }
                        }, [i("v-uni-image", {
                            staticClass: "bannerImgDetail",
                            attrs: {
                                "lazy-load": !0,
                                src: e.icon,
                                mode: "aspectFill"
                            }
                        })], 1)], 1)
                    })), 1)], 1) : t._e()
                },
                r = []
        },
        e83d: function (t, e, i) {
            "use strict";
            (function (t) {
                var n = i("4ea4");
                i("fb6a"), i("a9e3"), Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0;
                var a = n(i("7fc3")),
                    r = {
                        components: {
                            ListItem: a.default
                        },
                        name: "VirtualList",
                        props: {
                            tabTitleEngItem: String,
                            windowsHeight: String,
                            items: Array,
                            remain: Number,
                            size: Number
                        },
                        data: function () {
                            return {
                                isScroll: !1,
                                nowShowTips: !1,
                                statusBarHeight: uni.getSystemInfoSync()["statusBarHeight"],
                                start: 0,
                                end: this.remain,
                                offset: 0
                            }
                        },
                        computed: {
                            disTop: function () {
                                return +uni.upx2px(216) + 3 + this.statusBarHeight
                            },
                            preCount: function () {
                                return Math.min(this.start, this.remain)
                            },
                            nextCount: function () {
                                return Math.min(this.items.length - this.end, this.remain)
                            },
                            visibleData: function () {
                                var t = this.start - this.preCount,
                                    e = this.end + this.nextCount;
                                return this.items.slice(t, e)
                            },
                            scrollHeight: function () {
                                return this.remain * this.size
                            },
                            localHeight: function () {
                                return this.items.length * this.size
                            }
                        },
                        methods: {
                            filterList: function () {
                                this.$emit("filterList")
                            },
                            showTips: function (e) {
                                t.log("showTips", e), this.nowShowTips = e
                            },
                            handleScroll: function (t) {
                                var e = this,
                                    i = t.detail.scrollTop,
                                    n = Math.floor(i / this.size);
                                this.start = n < 0 ? 0 : n, this.end = this.start + this.remain;
                                var a = i - i % this.size - this.preCount * this.size;
                                this.offset = a < 0 ? 0 : a, this.isScroll = !0, clearTimeout(this.isTimer), this.isTimer = setTimeout((function () {
                                    e.isScroll = !1
                                }), 500)
                            }
                        }
                    };
                e.default = r
            }).call(this, i("5a52")["default"])
        },
        f4f1: function (t, e, i) {
            "use strict";
            var n = i("ff46"),
                a = i.n(n);
            a.a
        },
        f545: function (t, e, i) {
            "use strict";
            i.r(e);
            var n = i("6c16"),
                a = i("ce78");
            for (var r in a) "default" !== r && function (t) {
                i.d(e, t, (function () {
                    return a[t]
                }))
            }(r);
            i("2112");
            var o, s = i("f0c5"),
                c = Object(s["a"])(a["default"], n["b"], n["c"], !1, null, "677fc567", null, !1, n["a"], o);
            e["default"] = c.exports
        },
        ff46: function (t, e, i) {
            var n = i("c05f");
            "string" === typeof n && (n = [
                [t.i, n, ""]
            ]), n.locals && (t.exports = n.locals);
            var a = i("4f06").default;
            a("ee707cdc", n, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        }
    }
]);