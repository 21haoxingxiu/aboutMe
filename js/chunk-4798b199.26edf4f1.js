(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4798b199"],{"20b3":function(t,n,e){},"21ef":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"book"}},[e("Transition",{attrs:{name:"fade-transform",mode:"out-in"}},[t.book.length?e("div",{staticClass:"card"},[e("Quote",{attrs:{quote:t.$config.bookOpts.qoute}}),e("ul",{staticClass:"content"},t._l(t.book,function(n){return e("li",{key:n.name},[e("div",{staticClass:"info"},[e("img",{attrs:{src:n.cover,alt:""}}),e("div",[e("h3",[t._v(t._s(n.name))]),e("p",[t._v("作者："+t._s(n.author))]),e("p",[t._v("出版时间："+t._s(n.published))]),e("p",[t._v("阅读进度："+t._s(n.progress))]),e("p",[t._v("\n                读书笔记：\n                "),n.postLink?e("a",{attrs:{href:n.postLink,rel:"noopener noreferrer",target:"_blank"}},[t._v("\n                  "+t._s(n.postTitle)+"\n                ")]):e("span",[t._v("暂无")])]),e("p",[t._v("\n                推荐指数：\n                "),t._l(parseInt(n.rating),function(t){return e("i",{key:"star-"+t,staticClass:"icon icon-star"})}),t._l(5-parseInt(n.rating),function(t){return e("i",{key:"unstar-"+t,staticClass:"icon icon-star unstar"})})],2)])]),e("div",{staticClass:"description"},[t._v(t._s(n.description))])])}),0)],1):e("Loading")],1),t.$config.bookOpts.enableComment&&t.initComment?e("Comment",{attrs:{title:"书单"}}):t._e()],1)},s=[],o=(e("63ff"),e("e71e")),i=e("781b"),a=e("b698"),c=e("4cf6"),u={name:"Book",components:{Loading:i["a"],Quote:a["a"],Comment:c["a"]},data:function(){return{book:[],initComment:!1}},created:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.queryBooks();case 2:this.initComment=!0;case 3:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),methods:{queryBooks:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("queryPage",{type:"book"});case 2:this.book=t.sent;case 3:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}()}},p=u,l=(e("ed57"),e("6691")),f=Object(l["a"])(p,r,s,!1,null,"4360b2c7",null);n["default"]=f.exports},"5c62":function(t,n,e){"use strict";var r=e("20b3"),s=e.n(r);s.a},"6b3b":function(t,n,e){},b698:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"quote"},[e("i",{staticClass:"icon icon-quote-left"}),e("span",[t._v(t._s(t.quote))]),e("i",{staticClass:"icon icon-quote-right"})])},s=[],o={name:"Quote",props:{quote:{type:String,default:""}}},i=o,a=(e("5c62"),e("6691")),c=Object(a["a"])(i,r,s,!1,null,"5dac37d2",null);n["a"]=c.exports},ed57:function(t,n,e){"use strict";var r=e("6b3b"),s=e.n(r);s.a}}]);