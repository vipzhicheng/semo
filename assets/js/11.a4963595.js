(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{357:function(t,a,s){"use strict";s.r(a);var e=s(43),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"插件开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插件开发"}},[t._v("#")]),t._v(" 插件开发")]),t._v(" "),s("h2",{attrs:{id:"快速开始"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速开始"}},[t._v("#")]),t._v(" 快速开始")]),t._v(" "),s("p",[s("code",[t._v("Semo")]),t._v(" 插件就是一个标准的 "),s("code",[t._v("Node")]),t._v(" 模块，只不过要符合一些目录和文件结构的约定，而这些约定往往很难记忆，所以我们为插件开发者或者工具的使用者提供了各种辅助的工具，例如代码自动生成。这里描述的是推荐的插件开发流程，但同时，在熟悉开发流程之后，也完全可以从一个空目录开始手动构建一个插件。")]),t._v(" "),s("h3",{attrs:{id:"第一步：根据模板，创建插件目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一步：根据模板，创建插件目录"}},[t._v("#")]),t._v(" 第一步：根据模板，创建插件目录")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("semo create semo-plugin-xyz --template=plugin\n")])])]),s("p",[t._v("这里使用了内置的插件模板，按照之前配置管理说的，我们完全可以覆盖 "),s("code",[t._v("repo")]),t._v(" 和 "),s("code",[t._v("branch")]),t._v(" 选项，或者覆盖 "),s("code",[t._v("--template")]),t._v(" 选项来省去每次都传默认参数。")]),t._v(" "),s("h3",{attrs:{id:"第二步：进入插件目录，执行默认命令，证明一切正常"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第二步：进入插件目录，执行默认命令，证明一切正常"}},[t._v("#")]),t._v(" 第二步：进入插件目录，执行默认命令，证明一切正常")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("cd semo-plugin-xyz\nsemo hi\n")])])]),s("p",[t._v("这是插件模板内置的一个命令，初始化完成后，进入目录即可执行，完成首次你与插件命令的一次对话，如果你看到它回答你 "),s("code",[t._v("Hey you!")]),t._v(" 就证明已经准备好，接下来就可以写真正改变世界的脚本了。")]),t._v(" "),s("h2",{attrs:{id:"添加命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加命令"}},[t._v("#")]),t._v(" 添加命令")]),t._v(" "),s("p",[t._v("需要注意的是，这个插件模板是基于 "),s("code",[t._v("Typescript")]),t._v("，因此你需要有一些 "),s("code",[t._v("Typescript")]),t._v(" 基础，然后我们开发时建议开着 "),s("code",[t._v("yarn watch")]),t._v(" 命令窗口，来实时编译，一边开发一边测试。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("semo generate command xyz\n")])])]),s("p",[t._v("一般插件名和插件封装的命令会有一定的关联，这里我们添加一个 "),s("code",[t._v("xyz")]),t._v(" 命令，当然你也可以在之前的 "),s("code",[t._v("hi")]),t._v(" 命令上修改。真正掌握了插件开发之后，默认的 "),s("code",[t._v("hi")]),t._v(" 命令就应该删掉了。")]),t._v(" "),s("h2",{attrs:{id:"实现钩子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现钩子"}},[t._v("#")]),t._v(" 实现钩子")]),t._v(" "),s("p",[t._v("实现钩子是开发插件的另一个目的，而钩子往往都是其他插件或者业务项目定义的，通过钩子的实现可以影响和改变其他插件的行为。")]),t._v(" "),s("p",[t._v("通过这个命令查询当前环境支持哪些钩子：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("semo hook\n")])])]),s("h3",{attrs:{id:"例子1：实现-hook-create-project-template"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#例子1：实现-hook-create-project-template"}},[t._v("#")]),t._v(" 例子1：实现 "),s("code",[t._v("hook_create_project_template")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// src/hooks/index.ts")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hook_create_project_template "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  demo_repo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    repo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'demo_repo.git'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    branch"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'master'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    alias"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'demo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("通过这个钩子，让我们在 "),s("code",[t._v("semo create [PROJECT] --template")]),t._v(" 命令执行时可以选择自定义的项目模板，只需要记住别名，不需要记住地址；另一个好处是不需要管每个工程师个人电脑上是如何设置全局 "),s("code",[t._v("--repo")]),t._v(" 选项的，只需要安装了指定的插件，那大家就都可以用相同的项目别名初始化项目了。")]),t._v(" "),s("h3",{attrs:{id:"例子2：实现-hook-repl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#例子2：实现-hook-repl"}},[t._v("#")]),t._v(" 例子2：实现 "),s("code",[t._v("hook_repl")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// src/hooks/index.ts")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("hook_repl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("multiple")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" b\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("然后在 REPL 环境，就可以使用了:")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[s("code",[t._v("hook_repl")]),t._v(" 返回的信息都注入到了 REPL 里的 Semo 对象。")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("semo repl\n>>> add\n[Function: add]\n>>> await Semo.add(1, 2)\n3\n>>> multiple\n[Function: multiple]\n>>> await Semo.multiple(3, 4)\n12\n")])])]),s("p",[t._v("插件和业务项目在实现这个钩子时的出发点是不一样的，业务项目一般注入的是具体的业务逻辑，而插件一般注入的是公共的方法，具有一定的复用性，比如可以注入底层服务的实例方法，常用的库等等，比如核心注入的 "),s("code",[t._v("Utils")]),t._v(" 里面就包含 "),s("code",[t._v("lodash")]),t._v(" 库。")]),t._v(" "),s("h2",{attrs:{id:"暴露方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#暴露方法"}},[t._v("#")]),t._v(" 暴露方法")]),t._v(" "),s("p",[t._v("实现插件还有一个最原始的目的，就是当做一个模块，对外暴露出实例，方法或者类库。这种情况下一方面，我们可以用标准的方式定义模块，例如：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// package.json")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"main"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lib/index.js"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// index.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("这种方式没有任何问题，但是一般定义这种方式的模块也不需要遵守 "),s("code",[t._v("Semo")]),t._v(" 的规范，只要遵守 "),s("code",[t._v("node")]),t._v(" 和 "),s("code",[t._v("npm")]),t._v(" 的规范即可。这里 "),s("code",[t._v("Semo")]),t._v(" 定义了另外一种暴露方法的方式。基于钩子机制。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// src/hooks/index.ts")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hook_component "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("使用")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Utils "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'semo'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Utils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("invokeHook")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'component'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> 'b'")]),t._v("\n")])])]),s("p",[t._v("利用这种方式，我们可以封装一些业务项目的公共方法，然后跨项目进行使用，这些公共方法普遍偏底层，比如各种中间件，或者底层服务。")]),t._v(" "),s("h2",{attrs:{id:"发布插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发布插件"}},[t._v("#")]),t._v(" 发布插件")]),t._v(" "),s("p",[t._v("通过命令，钩子或者类库的扩展，我们就写好了一个 "),s("code",[t._v("Semo")]),t._v(" 插件，如果想跟他人共享你的插件，需要做一些准备工作。")]),t._v(" "),s("h3",{attrs:{id:"_1-上传代码到一个-git-仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-上传代码到一个-git-仓库"}},[t._v("#")]),t._v(" 1. 上传代码到一个 "),s("code",[t._v("git")]),t._v(" 仓库")]),t._v(" "),s("p",[t._v("如果是开源的可以选择 "),s("code",[t._v("Github")]),t._v("，如果是内部插件，就上传到内部仓库即可，可能是 "),s("code",[t._v("Github")]),t._v(" 私有仓库或者公司的 "),s("code",[t._v("Gitlab")]),t._v(" 仓库")]),t._v(" "),s("h3",{attrs:{id:"_2-修改-package-json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改-package-json"}},[t._v("#")]),t._v(" 2. 修改 "),s("code",[t._v("package.json")])]),t._v(" "),s("p",[t._v("主要是包名，版本，协议，仓库地址，首页地址等。")]),t._v(" "),s("p",[t._v("如果是内部插件，可以修改一下 "),s("code",[t._v(".npmrc")]),t._v(" 文件里的 "),s("code",[t._v("registry")]),t._v(" 地址。")]),t._v(" "),s("h3",{attrs:{id:"_3-获得一个-npm-仓库的账号，并登录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-获得一个-npm-仓库的账号，并登录"}},[t._v("#")]),t._v(" 3. 获得一个 npm 仓库的账号，并登录")]),t._v(" "),s("p",[t._v("如果是开源的插件，可以去 "),s("code",[t._v("https://npmjs.org")]),t._v(" 去注册，如果是私有部署的 "),s("code",[t._v("npm")]),t._v(" 仓库，则可以找运维获得账号")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm login --registry=[YOUR_REGISTRY]\n")])])]),s("h3",{attrs:{id:"_4-测试插件包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-测试插件包"}},[t._v("#")]),t._v(" 4. 测试插件包")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm pack --dry-run\n")])])]),s("p",[t._v("通过打包测试，看看包里是否包含多余的文件，调整 "),s("code",[t._v(".npmignore")]),t._v(" 文件的配置。")]),t._v(" "),s("h3",{attrs:{id:"_5-发布你的插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-发布你的插件"}},[t._v("#")]),t._v(" 5. 发布你的插件")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm version [patch|minor|major]\nnpm publish\n")])])]),s("h3",{attrs:{id:"_6-宣传插件，分享开发心得"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-宣传插件，分享开发心得"}},[t._v("#")]),t._v(" 6. 宣传插件，分享开发心得")]),t._v(" "),s("p",[t._v("酒香也怕巷子深，需要写好文档，并积极宣传，让别人使用和反馈。")]),t._v(" "),s("h3",{attrs:{id:"_7-积极维护"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-积极维护"}},[t._v("#")]),t._v(" 7. 积极维护")]),t._v(" "),s("p",[t._v("任何 npm 包都有可能逐渐过时，或者有安全风险，需要我们积极维护，让插件发挥本来应该发挥的作用。")]),t._v(" "),s("h2",{attrs:{id:"插件的层级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插件的层级"}},[t._v("#")]),t._v(" 插件的层级")]),t._v(" "),s("p",[t._v("Semo 的插件系统会扫描多个位置，以增加灵活性，每个层级对应不同的目的和限制。")]),t._v(" "),s("ul",[s("li",[t._v("通过 "),s("code",[t._v("npm install -g semo-plugin-xxx")]),t._v(" 安装到全局环境，所以安装的插件命令是全局可用的，这是 "),s("code",[t._v("npm")]),t._v(" 默认的全局安装包的方式。")]),t._v(" "),s("li",[t._v("通过 "),s("code",[t._v("semo plugin install semo-plugin-xxx")]),t._v(" 安装到家目录的 "),s("code",[t._v(".semo/home-plugin-cache")]),t._v(" 目录，安装的插件命令也是全局可用的，某些情况下当前用户没有权限用 npm 的方式安装到全局，可以用这种方式。")]),t._v(" "),s("li",[t._v("通过 "),s("code",[t._v("npm install semo-plugin-xxx")]),t._v(" 安装到当前项目目录，这种方式的插件命令只有在当前项目才会生效。")])]),t._v(" "),s("p",[t._v("为什么有的插件会需要安装到全局呢？因为插件不仅仅可以实现我们项目的业务需求，也可以实现我们的开发工具链，甚至可以实现一些非业务的小功能，只要有想象力，任何终端功能都可以来一波，可以是完全手写，也可以是对其他优秀项目进行封装和整合，这里的优秀项目不局限于语言和语言的扩展包仓库。")]),t._v(" "),s("h2",{attrs:{id:"直接运行远程插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#直接运行远程插件"}},[t._v("#")]),t._v(" 直接运行远程插件")]),t._v(" "),s("p",[t._v("这里只是一个错觉，其实还是要下载到本地，只不过下载目录是区分开的，这样就不会干扰你的实现，你可以任意测试你感兴趣的插件。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("semo run semo-plugin-serve\n")])])]),s("p",[t._v("这个插件的功能是提供简单的 HTTP 服务，首次运行是会下载，以后就会复用之前下载的插件，通过 --force 来进行强制更新。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("后续会开发清理插件缓存的功能")])]),t._v(" "),s("h2",{attrs:{id:"特殊的家目录插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特殊的家目录插件"}},[t._v("#")]),t._v(" 特殊的家目录插件")]),t._v(" "),s("blockquote",[s("p",[t._v("此特性 "),s("code",[t._v("v0.8.0")]),t._v(" 引入")])]),t._v(" "),s("p",[t._v("我们为了给 "),s("code",[t._v("Semo")]),t._v(" 添加全局的配置，需要在 "),s("code",[t._v("~/.semo")]),t._v(" 目录添加一个 "),s("code",[t._v(".semorc.yml")]),t._v(" 配置文件，一旦这个配置文件建立，则 "),s("code",[t._v(".semo")]),t._v(" 目录自动识别为一个全局插件（其他的全局插件都在 "),s("code",[t._v("~/.semo/home-plugin-cache")]),t._v(" 目录），你可以在这个插件里定义一些你自己的命令，扩展其他插件的命令，扩展其他插件的钩子等等，这个特殊的插件在于全局可识别，同时，由于默认存在，如果你有一些逻辑是本地常用的，并且不想发布成 npm 包，则可以在这里快速开始。当然，要注意，其全局可用的特点，如果有错误，也会影响到本地全局。")]),t._v(" "),s("p",[t._v("我们没有预设这个特殊插件的实现方式，也就是说你可以用 "),s("code",[t._v("js")]),t._v(" 来写，也可以用 "),s("code",[t._v("typescript")]),t._v(" 来写。你可以通过 "),s("code",[t._v("semo init")]),t._v(" 命令来初始化基本的目录解构，也可以通过 "),s("code",[t._v("semo create .semo --template=pluging")]),t._v(" 用模板重新生成一个 "),s("code",[t._v(".semo")]),t._v(" 目录（需要提前备份 "),s("code",[t._v(".semo")]),t._v(" 目录，之后再把里面的东西合并回来）")])])}),[],!1,null,null,null);a.default=n.exports}}]);