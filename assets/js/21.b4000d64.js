(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{384:function(s,a,n){"use strict";n.r(a);var t=n(43),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h3",{attrs:{id:"查看修改记录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看修改记录"}},[s._v("#")]),s._v(" 查看修改记录")]),s._v(" "),n("h4",{attrs:{id:"通过-git-log可以查看所有的提交记录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#通过-git-log可以查看所有的提交记录"}},[s._v("#")]),s._v(" 通过 "),n("code",[s._v("git log")]),s._v("可以查看所有的提交记录")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("commit 5bebb68186408409846eab11a215cdad5977118b "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HEAD -"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" master, origin/master"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nAuthor: 杨涛涛 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<>")]),s._v("\nDate:   Thu Jun "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(":31:19 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v(" +0800\n\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v("\n\ncommit 08cc31e66fd4f45f67275f7e2da4de9fa2eff002\nAuthor: 杨涛涛 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<>")]),s._v("\nDate:   Tue Jun "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":46:08 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v(" +0800\n\n    master second commit\n\ncommit 80928c35d48b346eaa9c033796b13d3411933b05\nAuthor: 杨涛涛 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<>")]),s._v("\nDate:   Tue Jun "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":42:14 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v(" +0800\n\n    first commit\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("h4",{attrs:{id:"如何查看详细的历史信息呢"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何查看详细的历史信息呢"}},[s._v("#")]),s._v(" 如何查看详细的历史信息呢")]),s._v(" "),n("p",[s._v("通过 "),n("code",[s._v("git log -p")]),s._v(",可以看到每一个commit文件的改动")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("commit 5bebb68186408409846eab11a215cdad5977118b "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HEAD -"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" master, origin/master"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nAuthor: 杨涛涛 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<>")]),s._v("\nDate:   Thu Jun "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(":31:19 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v(" +0800\n\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" --git a/README.md b/README.md\nindex f5181fa"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("dbb0361 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100644")]),s._v("\n--- a/README.md\n+++ b/README.md\n@@ -1 +1 @@\n-test rebase2\n+test rebase21\n\ncommit 08cc31e66fd4f45f67275f7e2da4de9fa2eff002\nAuthor: 杨涛涛 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<>")]),s._v("\nDate:   Tue Jun "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":46:08 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v(" +0800\n\n    master second commit\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" --git a/README.md b/README.md\nindex "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3583755")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("f5181fa "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100644")]),s._v("\n--- a/README.md\n+++ b/README.md\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("h4",{attrs:{id:"如何查看某一条的更改信息呢"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何查看某一条的更改信息呢"}},[s._v("#")]),s._v(" 如何查看某一条的更改信息呢")]),s._v(" "),n("p",[s._v("通过 "),n("code",[s._v("git show commitId")]),s._v(" 来查看，没有 "),n("code",[s._v("commitId")]),s._v(" 默认查看当前 HEAD")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" show\ncommit 5bebb68186408409846eab11a215cdad5977118b "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HEAD -"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" master, origin/master"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nAuthor: 杨涛涛 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<>")]),s._v("\nDate:   Thu Jun "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(":31:19 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v(" +0800\n\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" --git a/README.md b/README.md\nindex f5181fa"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("dbb0361 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100644")]),s._v("\n--- a/README.md\n+++ b/README.md\n@@ -1 +1 @@\n-test rebase2\n+test rebase21\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("END"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" show 80928c35d48b346eaa9c033796b13d3411933b05\ncommit 80928c35d48b346eaa9c033796b13d3411933b05\nAuthor: 杨涛涛 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<>")]),s._v("\nDate:   Tue Jun "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":42:14 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v(" +0800\n\n    first commit\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" --git a/README.md b/README.md\nnew "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" mode "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100644")]),s._v("\nindex 0000000"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3583755")]),s._v("\n--- /dev/null\n+++ b/README.md\n@@ -0,0 +1,5 @@\n+"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" HEAD\n+test rebase\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v("\n+test rebase branch2\n+"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" rebase branch\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("END"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br")])]),n("h4",{attrs:{id:"如何查看尚未提交的内容"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何查看尚未提交的内容"}},[s._v("#")]),s._v(" 如何查看尚未提交的内容")]),s._v(" "),n("p",[s._v("通过 "),n("code",[s._v("git diff")]),s._v("命令来实现文件对比功能")]),s._v(" "),n("p",[s._v("再git中一般有两个工作环境，一个是当前的工作目录，一个是暂存区。")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" --staged "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用来对比 当前的暂存区和上一次提交之间的不同，也就是我们下次commit的时候的内容")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 直接对比当前工作目录和暂存区的不同，也就是让我们查看我们会向暂存区添加什么内容，这里注意")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" commitID "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 对比当前工作目录和某一条 commit之间的差异，这里有一个特别点是没有被 add 的目标是无法对比的，因为对于git来说这并不存在")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);