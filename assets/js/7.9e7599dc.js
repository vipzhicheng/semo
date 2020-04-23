(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{327:function(s,a,t){"use strict";t.r(a);var e=t(33),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"常见问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[s._v("#")]),s._v(" 常见问题")]),s._v(" "),t("h2",{attrs:{id:"semo-怎么这么慢，怎么优化？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#semo-怎么这么慢，怎么优化？"}},[s._v("#")]),s._v(" "),t("code",[s._v("Semo")]),s._v(" 怎么这么慢，怎么优化？")]),s._v(" "),t("p",[s._v("相对于一些逻辑比较简单纯粹的脚本，Semo 考虑了很多灵活性的设置，包括但不限于插件的多层扫描，配置的覆盖规则，钩子机制等等，其中影响最大的是插件扫描的 IO负担，目前经过一些优化（引入内部缓存）已经有一些效果，后面如果把插件扫描结果彻底持久化，是可以进一步提升性能的，但是是双刃剑，还需要考虑更新机制，后面会持续优化。")]),s._v(" "),t("p",[s._v("另外，到目前为止，都在探索 "),t("code",[s._v("Semo")]),s._v(" 在业务开发中的各种可能性，暂时性能问题影响并没有那么大，所以更倾向于投入在探索和兼容各种可能性上。")]),s._v(" "),t("p",[s._v("通过缩小插件扫描范围可以进一步提速：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("semo status --disable-global-plugin --disable-home-plugin\n")])])]),t("p",[s._v("如果不想每次都输入，可以放到 "),t("code",[s._v(".semorc.json")]),s._v(" 文件当中：")]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"--disable-global-plugin"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"--disable-home-plugin"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("或")]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"--disableGlobalPlugin"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"--disableHomePlugin"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);