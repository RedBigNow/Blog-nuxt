(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{271:function(t,e,n){var content=n(274);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("3ade4c69",content,!0,{sourceMap:!1})},273:function(t,e,n){"use strict";n(271)},274:function(t,e,n){var o=n(30)(!1);o.push([t.i,".controls[data-v-5e96f499]{text-align:center;margin:20px 0}",""]),t.exports=o},279:function(t,e,n){"use strict";n.r(e);n(40),n(32),n(39),n(50),n(33),n(51);var o=n(22);function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={props:{postEdit:{type:Object,required:!1}},data:function(){return{post:this.postEdit?c({},this.postEdit):{title:"",descr:"",img:"",content:""}}},methods:{onSubmit:function(){this.$emit("submit",this.post)},cancel:function(){this.$router.push("/admin")}}},f=(n(273),n(6)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"new-post"},[n("div",{staticClass:"container"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[n("AppInput",{model:{value:t.post.title,callback:function(e){t.$set(t.post,"title",e)},expression:"post.title"}},[t._v("Title:")]),t._v(" "),n("AppInput",{model:{value:t.post.descr,callback:function(e){t.$set(t.post,"descr",e)},expression:"post.descr"}},[t._v("Descr:")]),t._v(" "),n("AppInput",{model:{value:t.post.img,callback:function(e){t.$set(t.post,"img",e)},expression:"post.img"}},[t._v("Img link:")]),t._v(" "),n("AppTextarea",{model:{value:t.post.content,callback:function(e){t.$set(t.post,"content",e)},expression:"post.content"}},[t._v("Content:")]),t._v(" "),n("div",{staticClass:"controls"},[n("div",{staticClass:"btn btnDanger",on:{click:t.cancel}},[t._v("Cancel")]),t._v(" "),n("AppButton",[t._v("Save")])],1)],1)])])}),[],!1,null,"5e96f499",null);e.default=component.exports}}]);