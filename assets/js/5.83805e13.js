(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{443:function(t,e,s){t.exports=s.p+"assets/img/1.bb0440e4.png"},448:function(t,e,s){"use strict";s.r(e);var a=s(25),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"运行runclient时无法加载资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行runclient时无法加载资源"}},[t._v("#")]),t._v(" 运行runClient时无法加载资源")]),t._v(" "),a("p",[t._v("于ForgeGradle 3.+版本运行"),a("code",[t._v("runClient")]),t._v("时无法加载资源，表现为模组信息（"),a("code",[t._v("mcmod.info")]),t._v("文件）无法加载，或纹理贴图文件无法加载。但是运行"),a("code",[t._v("build")]),t._v("并将生成的模组安装到游戏中时，又能够正常地加载模组信息和纹理贴图文件。")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("查看图片")]),t._v(" "),a("p",[a("img",{attrs:{src:s(443),alt:""}})])]),t._v(" "),a("h2",{attrs:{id:"解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("build.gradle")]),t._v("文件中添加如下代码：")]),t._v(" "),a("div",{staticClass:"language-groovy line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[t._v("sourceSets "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    main "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n        output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resourcesDir "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("classesDir \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("其他解决方案")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("build.gradle")]),t._v("文件中添加如下代码：")]),t._v(" "),a("div",{staticClass:"language-groovy line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[t._v("sourceSets "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tmain "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\toutput"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resourcesDir "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'build/combined'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\tjava"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("outputDir "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'build/combined'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])])]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.mcbbs.net/thread-1173660-1-2.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("关于IDEA构建模组时资源文件（如mcmod.info等）无法正确打包的解决办法"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forums.minecraftforge.net/topic/77064-solved-modding-with-intellij-the-asset-problem/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Modding with IntelliJ | The asset problem"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forums.minecraftforge.net/topic/61626-add-extra-resource-folder-to-runclient/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Add extra resource folder to runClient"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.reddit.com/r/feedthebeast/comments/e4hfzz/intellij_idea_runclient_task_textures_not_shown/",target:"_blank",rel:"noopener noreferrer"}},[t._v("IntelliJ IDEA: runClient task: textures not shown"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/DeflatedPickle/minecraft-forge-1.12-template/blob/main/build.gradle",target:"_blank",rel:"noopener noreferrer"}},[t._v("DeflatedPickle/minecraft-forge-1.12-template"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);