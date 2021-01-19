(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{366:function(e,t,a){"use strict";a.r(t);var s=a(42),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),a("p",[a("code",[e._v("Configuration")]),e._v(" is one of the core concept of "),a("code",[e._v("Semo")]),e._v(", we can use many ways to interfere "),a("code",[e._v("Semo")]),e._v(" behavior, then influence core or plugins.")]),e._v(" "),a("h2",{attrs:{id:"global-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#global-configuration"}},[e._v("#")]),e._v(" Global configuration")]),e._v(" "),a("p",[e._v("There is a global "),a("code",[e._v("Semo")]),e._v(" directory in system home directory, and there is a global "),a("code",[e._v("Semo")]),e._v(" configration, located at "),a("code",[e._v("~/.semo/.semorc.yml")])]),e._v(" "),a("p",[e._v("This global "),a("code",[e._v("Semo")]),e._v(" configration can set default value for commands, then you don't need to provide commands options each time you running commands. So comparing with normal CLI commands, you can change commands default value, for example:")]),e._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("$plugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("semo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("repo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" REPO_URL\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("branch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" master\n")])])]),a("p",[e._v("This config means "),a("code",[e._v("semo create")]),e._v(" command normal format is:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("semo create PROJECT_NAME PROJECT_REPO_URL master -f\n")])])]),a("p",[e._v("But we set specific default option value, then it reduce two arguments when we use is, and changed to:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("semo create PROJECT_NAME -f\n")])])]),a("p",[e._v("We often use this kind of global settings, if we find out we always set some command arguments, we can settle those settings down in global config file, here is another example:")]),e._v(" "),a("p",[e._v("When we run "),a("code",[e._v("semo repl")]),e._v(" command, there is "),a("code",[e._v("--hook")]),e._v(" option, if we pass this option, "),a("code",[e._v("hook_repl")]),e._v(" can trigger other business logics, and inject some objects into REPL. But the default value is "),a("code",[e._v("--hook=false")]),e._v(", this can launch faster, but if you need the hook every time, you can put "),a("code",[e._v("--hook=true")]),e._v(" into global config file "),a("code",[e._v("~/.semo/.semorc.yml")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("$plugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("semo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("repl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("hook")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("true")]),e._v("\n")])])]),a("h2",{attrs:{id:"plugin-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugin-configuration"}},[e._v("#")]),e._v(" Plugin configuration")]),e._v(" "),a("p",[e._v("Plugin directory also has a "),a("code",[e._v(".semorc.yml")]),e._v(" file, only 3 settings affected.")]),e._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("commandDir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" src/commands\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("extendDir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" src/extends\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("hookDir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" src/hooks\n")])])]),a("p",[a("code",[e._v("commandDir")]),e._v(" is for keeping commands, "),a("code",[e._v("extendDir")]),e._v(" is for extending other plugins, "),a("code",[e._v("hookDir")]),e._v(" is for hooking.")]),e._v(" "),a("p",[e._v("Except above configs, plugins would expose some configs also, these configs has special config path, if not defined, will also try to take from root level.")]),e._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("$plugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("xxx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" bar\n")])])]),a("p",[e._v("This config can be read in this way:")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" Utils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'$plugin.xxx.foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),a("p",[e._v("This give an opportunity for plugin to define their own config, if plugin use more top level config, it will conflict with each other. This style config is compatible with "),a("code",[e._v("commandDefault")]),e._v(", "),a("code",[e._v("$plugin.PLUGIN")]),e._v(" is for plugins, "),a("code",[e._v("commandDefault")]),e._v(" is for commands, the former depends on code logic, the latter works automatically. If you are a plugin author, you need describe how to use your plugin in your README.md.")]),e._v(" "),a("h2",{attrs:{id:"project-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#project-configuration"}},[e._v("#")]),e._v(" Project configuration")]),e._v(" "),a("p",[e._v("When we integrate "),a("code",[e._v("Semo")]),e._v(" with our projects, there are also commands, extends, hooks directories, and there are more like plugins and scripts and so on.")]),e._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("commandDir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" bin/semo/commands\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("pluginDir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" bin/semo/plugins\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("extendDir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" bin/semo/extends\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("scriptDir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" bin/semo/scripts\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("hookDir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" bin/semo/hooks\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[a("code",[e._v("Semo")]),e._v(" does not support define plugins in plugin, but support project define plugins.")])]),e._v(" "),a("p",[e._v("Except for configing some directories, we can also override some command options, like the "),a("code",[e._v("repl")]),e._v(" command mentioned above.")]),e._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("hook")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("true")]),e._v("\n")])])]),a("p",[e._v("For another example: "),a("code",[e._v("semo init")]),e._v(" command has an option "),a("code",[e._v("--typescript")]),e._v(", if using this option in project configuration file, it will share with other commands using this option like "),a("code",[e._v("semo generate")]),e._v(", it will let all generated file has typescript code style.")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[e._v("typescript"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n")])])]),a("p",[e._v("Congurations in project configration file only work in current project. because of plugins, there may be many more configurations in project level Semo config file, that can provide specific needed features.")]),e._v(" "),a("h2",{attrs:{id:"hidden-configrations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hidden-configrations"}},[e._v("#")]),e._v(" Hidden configrations")]),e._v(" "),a("p",[a("code",[e._v("Semo")]),e._v(" 有一些隐藏选项，平时很少使用，可以通过 "),a("code",[e._v("semo help --show-hidden")]),e._v(" 查看：\n"),a("code",[e._v("Semo")]),e._v(" has some hidden options, those are rarely used in common cases. You can run "),a("code",[e._v("semo help --show-hidden")]),e._v(" to see them.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('Option：\n  --script-name                                       Rename script name.                    [String] [Default: "semo"]\n  --plugin-prefix                                     Set plugin prefix.                              [Default: "semo"]\n  --disable-core-command, --disable-core              Disable core commands.\n  --disable-completion-command, --disable-completion  Disable completion command.\n  --hide-completion-command, --hide-completion        Hide completion command.\n  --disable-global-plugin, --disable-global-plugins   Disable global plugins.\n  --disable-home-plugin, --disable-home-plugins       Disable home plugins.\n  --hide-epilog                                       Hide epilog.\n  --set-epilog                                        Set epilog.                                        [Default: false]\n  --set-version                                       Set version.\n  --node-env-key, --node-env                          Set node env key                              [Default: "NODE_ENV"]\n')])])]),a("p",[e._v("As we see, by passing these options, we can change some core behaviours, even the command name itself.")]),e._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("--disable-global-plugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("true")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("--disable-home-plugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("true")]),e._v("\n")])])]),a("p",[e._v("We can use these two options in project to disable global plugins, that will improve performance a little bit.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("In "),a("code",[e._v("Semo")]),e._v(" Configrations below are all equivalent.\n--foo-bar\n--foo--bar\n--fooBar\nfoo-bar\nfooBar")])]),e._v(" "),a("h2",{attrs:{id:"通过命令行修改配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过命令行修改配置"}},[e._v("#")]),e._v(" 通过命令行修改配置")]),e._v(" "),a("p",[e._v("我们当然可以通过编辑配置文件的方式修改配置，但是 Semo 也提供了编辑配置的命令行工具，在命令行工具的帮助下，就可以用脚本的方式定制某些配置了。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("semo config set a.b.c d 'some comment' -g\nsemo config get a.b.c\nsemo config del a.b.c\nsemo config list\nsemo config list --watch\n")])])]),a("h2",{attrs:{id:"应用环境配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用环境配置"}},[e._v("#")]),e._v(" 应用环境配置")]),e._v(" "),a("blockquote",[a("p",[e._v("此特性 "),a("code",[e._v("v0.8.0")]),e._v(" 引入")])]),e._v(" "),a("p",[e._v("在应用目录（一般是指运行 semo 命令的当前目录），我们会用 Semo 的机制组织我们的项目代码，比如命令行工具，计划任务，钩子扩展，命令扩展，脚本等等。之前系统只能识别 "),a("code",[e._v(".semorc.yml")]),e._v(" 这个配置文件，最新的版本已经可以继续加载一个环境配置，比如当前 "),a("code",[e._v("NODE_ENV=development")]),e._v("(默认值)，则 "),a("code",[e._v(".semorc.development.yml")]),e._v(" 如果存在也会识别和加载，并会覆盖主配置的同名配置（用的是 Lodash 的 "),a("code",[e._v("_.merge")]),e._v("）")]),e._v(" "),a("h2",{attrs:{id:"特殊配置项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特殊配置项"}},[e._v("#")]),e._v(" 特殊配置项")]),e._v(" "),a("blockquote",[a("p",[e._v("此特性 "),a("code",[e._v("v0.9.0")]),e._v(" 引入")])]),e._v(" "),a("p",[e._v("Semo 的配置和命令行的 "),a("code",[e._v("argv")]),e._v(" 是紧密耦合在一起的，argv 原本的意图只是存储命令行参数，Semo 进一步扩展，希望其能承担项目配置管理的重任，这里约定了几个 "),a("code",[e._v("$")]),e._v(" 开头的配置，有特殊的含义：")]),e._v(" "),a("h3",{attrs:{id:"plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugin"}},[e._v("#")]),e._v(" "),a("code",[e._v("$plugin")])]),e._v(" "),a("p",[e._v("这个配置约定了插件级别的配置项，以前命令只能通过参数来约定配置，但是有一些复杂的配置，没有必要声明成参数，所以设计了这个配置项：")]),e._v(" "),a("p",[e._v("以 "),a("code",[e._v("$plugin.ssh.key = 1")]),e._v(" 举例，意思是给 "),a("code",[e._v("semo-plugin-ssh")]),e._v(" 这个插件下的每个命令都提供了一个配置 "),a("code",[e._v("key=1")]),e._v("， 那这个配置到那里去取呢，Semo 已经帮助装配到 "),a("code",[e._v("argv.$config")]),e._v(" 了，所以你在 ssh 插件的命令下取到的 "),a("code",[e._v("argv.$config")]),e._v(" 就都是 "),a("code",[e._v("$plugin.ssh")]),e._v(" 下的配置。")]),e._v(" "),a("p",[e._v("为了实现这一点，每个命令在声明的时候，添加了一个 "),a("code",[e._v("export const plugin = 'ssh'")]),e._v(" 这样的声明。")]),e._v(" "),a("h3",{attrs:{id:"plugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugins"}},[e._v("#")]),e._v(" "),a("code",[e._v("$plugins")])]),e._v(" "),a("p",[e._v("上面的 "),a("code",[e._v("$plugin")]),e._v(" 是给每个具体的插件添加配置的，而这个是决定整个环境生效的插件的，支持三个配置")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("$plugins.register")]),e._v(" 决定是否启用主动注册机制，如果启用，则自动扫描机制失效。参考"),a("RouterLink",{attrs:{to:"/en/guide/plugin/"}},[e._v("插件的主动注册机制")])],1),e._v(" "),a("li",[a("code",[e._v("$plugins.include")]),e._v(" 对注册的插件进行二次过滤，这个是允许名单，是数组，支持插件名的简写形式。")]),e._v(" "),a("li",[a("code",[e._v("$plugins.exclude")]),e._v(" 对注册的插件进行二次过滤，这个是禁止名单，是数组，支持插件名的简写形式。")])]),e._v(" "),a("h3",{attrs:{id:"config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config"}},[e._v("#")]),e._v(" "),a("code",[e._v("$config")])]),e._v(" "),a("p",[e._v("自动解析出的插件配置，一般只是插件开发的时候才需要，如果是应用，建议使用 "),a("code",[e._v("$app")]),e._v(" 来管理配置")]),e._v(" "),a("h3",{attrs:{id:"app-或者-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app-或者-application"}},[e._v("#")]),e._v(" "),a("code",[e._v("$app")]),e._v(" 或者 "),a("code",[e._v("$application")])]),e._v(" "),a("p",[e._v("这里没有特殊功能，只是建议应用自己的配置也收到一起，防止跟命令行的选项混淆。比如：")]),e._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("$app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1234")]),e._v("\n")])])]),a("h3",{attrs:{id:"input"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input"}},[e._v("#")]),e._v(" "),a("code",[e._v("$input")])]),e._v(" "),a("p",[e._v("这个的作用是当实现支持管道的命令时，"),a("code",[e._v("$input")]),e._v(" 可以自动接收前面命令的输出，不管是不是 Semo 插件的输出，但是输出的格式是不确定的，需要当前命令自己去校验和约束。")]),e._v(" "),a("h3",{attrs:{id:"_0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0"}},[e._v("#")]),e._v(" "),a("code",[e._v("$0")])]),e._v(" "),a("p",[e._v("这个是 "),a("code",[e._v("yargs")]),e._v(" 自带的，表明当前运行的脚本名称。")]),e._v(" "),a("h3",{attrs:{id:"command"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command"}},[e._v("#")]),e._v(" "),a("code",[e._v("$command")])]),e._v(" "),a("p",[e._v("这个里放的是当前命令的信息，一般来说用处不是很大")]),e._v(" "),a("h3",{attrs:{id:"semo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#semo"}},[e._v("#")]),e._v(" "),a("code",[e._v("$semo")])]),e._v(" "),a("p",[e._v("这里放的是对工具函数库 "),a("code",[e._v("Utils")]),e._v(" 的引用，用这个主要原因是插件有时也想知道和处理内部信息，但是如果是在自己插件内部依赖和导入 "),a("code",[e._v("@semo/core")]),e._v(" 由于位置不同，实际上是占用两份内存，而且自己导入这部分由于没有经过初始化，所以缺失必要的信息，通过 "),a("code",[e._v("argv.$semo.Utils.getInternalCache().get('argv')")]),e._v(" 能够正确取到运行时的数据。")]),e._v(" "),a("h2",{attrs:{id:"内置的配置管理相关方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内置的配置管理相关方法"}},[e._v("#")]),e._v(" 内置的配置管理相关方法")]),e._v(" "),a("h3",{attrs:{id:"utils-extendconfig"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#utils-extendconfig"}},[e._v("#")]),e._v(" "),a("code",[e._v("Utils.extendConfig")])]),e._v(" "),a("p",[e._v("这个方法支持扩展一个新的配置文件，这样可以支持配置文件组，不用把所有的配置都放到 "),a("code",[e._v(".semorc.yml")]),e._v(" 里，同时支持环境配置，例如：")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[e._v("Utils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("extendConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'application.yml'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("application.yml\napplication.development.yml\napplication.production.yml\n")])])]),a("h3",{attrs:{id:"utils-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#utils-config"}},[e._v("#")]),e._v(" "),a("code",[e._v("Utils.config")])]),e._v(" "),a("p",[e._v("这个方法用于取出总配置里的一段，默认取出所有，基于 Lodash 的 "),a("code",[e._v("_.get")]),e._v(" 方法。")]),e._v(" "),a("h3",{attrs:{id:"utils-pluginconfig"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#utils-pluginconfig"}},[e._v("#")]),e._v(" "),a("code",[e._v("Utils.pluginConfig")])]),e._v(" "),a("p",[e._v("这个方法用于取出插件配置，只能在命令 "),a("code",[e._v("handler")]),e._v(" 下工作，默认取出还是命令行参数优先，但是如果命令行参数没有指定并且没有默认值，则可以取插件级别的配置。")]),e._v(" "),a("h2",{attrs:{id:"环境变量设置-env"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境变量设置-env"}},[e._v("#")]),e._v(" 环境变量设置 "),a("code",[e._v(".env")])]),e._v(" "),a("p",[e._v("通过整合 "),a("code",[e._v("dotenv")]),e._v("，我们引入了对 "),a("code",[e._v(".env")]),e._v(" 文件的支持，对于命令行工具来说是默认开启的。对于程序来说需要手动开启。")]),e._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" Utils "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'@semo/core'")]),e._v("\n\nUtils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("useDotEnv")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);