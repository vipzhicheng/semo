(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{320:function(a,e,t){"use strict";t.r(e);var s=t(14),_=Object(s.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"项目整合"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目整合"}},[a._v("#")]),a._v(" 项目整合")]),a._v(" "),e("p",[a._v("跟现有业务项目整合是 "),e("code",[a._v("Semo")]),a._v(" 开发的初衷，如果一个项目已经有了自定义的用着还不错的命令行工具，那么要慎重考虑要不要换成 "),e("code",[a._v("Semo")]),a._v(" 风格的，好在 "),e("code",[a._v("Semo")]),a._v(" 整合比较简单，如果项目中之前没有命令行的基础设施，那么推荐尝试 "),e("code",[a._v("Semo")]),a._v("。")]),a._v(" "),e("h2",{attrs:{id:"为什么要整合"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么要整合"}},[a._v("#")]),a._v(" 为什么要整合")]),a._v(" "),e("ul",[e("li",[a._v("获得命令行基础设施，一个项目总有一些操作不适合或者来不及做到后台里，通过一个命令行工具，可以更简单的和系统和数据进行交互。")]),a._v(" "),e("li",[a._v("获得脚本基础设施，总有一些脚本需要执行，脚本起什么名字，放什么位置，以及如何跟业务或者数据进行交互都是常见的需求。")]),a._v(" "),e("li",[a._v("可以使用相关的 "),e("code",[a._v("Semo")]),a._v(" 插件，并且通过配置影响和改变插件的行为。")]),a._v(" "),e("li",[a._v("获得一个业务相关的 "),e("code",[a._v("REPL")]),a._v(" 环境，可以任意调用项目中封装的方法，或者跟一些封装的基础设施进行交互。")])]),a._v(" "),e("h2",{attrs:{id:"项目整合方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目整合方式"}},[a._v("#")]),a._v(" 项目整合方式")]),a._v(" "),e("p",[a._v("不一定所有的特性都需要，按需使用即可。")]),a._v(" "),e("h3",{attrs:{id:"_1-将-semo-添加为项目依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-将-semo-添加为项目依赖"}},[a._v("#")]),a._v(" 1. 将 "),e("code",[a._v("Semo")]),a._v(" 添加为项目依赖")]),a._v(" "),e("p",[a._v("这里以 "),e("code",[a._v("yarn")]),a._v(" 为例：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("yarn add @semo/cli\n")])])]),e("h3",{attrs:{id:"_2-在项目根目录进行初始化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-在项目根目录进行初始化"}},[a._v("#")]),a._v(" 2. 在项目根目录进行初始化")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("semo init [--typescript]\n")])])]),e("p",[a._v("这里看项目是否是基于 Typescript 搭建的，如果是就带上 "),e("code",[a._v("--typescript")]),a._v(" 参数。初始化过程会在项目根目录新建一个配置文件 "),e("code",[a._v(".semorc.yml")]),a._v("，并且新增了一个 "),e("code",[a._v("bin/semo")]),a._v(" 目录，理论上不会和现有的项目有冲突。")]),a._v(" "),e("h3",{attrs:{id:"_3-添加一些命令或脚本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-添加一些命令或脚本"}},[a._v("#")]),a._v(" 3. 添加一些命令或脚本")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("semo generate command xxx\nsemo generate script yyy\n")])])]),e("h3",{attrs:{id:"_4-定义项目自己的插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-定义项目自己的插件"}},[a._v("#")]),a._v(" 4. 定义项目自己的插件")]),a._v(" "),e("p",[a._v("类似于渐进式开发的理念，一个插件如果只是自己的项目中使用，可以将插件作为项目代码的一部分，等优化成熟了，也很容易转成 npm 包的形式与其他项目分享。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("semo generate plugin zzz\n")])])]),e("h3",{attrs:{id:"_5-将业务代码注入到-repl-环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-将业务代码注入到-repl-环境"}},[a._v("#")]),a._v(" 5. 将业务代码注入到 REPL 环境")]),a._v(" "),e("p",[a._v("参见 "),e("code",[a._v("插件开发->例子2：实现 hook_repl")]),a._v("，可以看到是如何将方法注入到 "),e("code",[a._v("REPL")]),a._v(" 的。注意所有的方法都只能注入到 REPL 的 Semo 对象，这是对 REPL 变量空间的保护。如果是业务方法，只要引入，然后按照 "),e("code",[a._v("hook_repl")]),a._v(" 的格式要求返回即可。如果要让方法生效，还需要自己去处理方法对环境的依赖，比如连接数据库等。")])])}),[],!1,null,null,null);e.default=_.exports}}]);