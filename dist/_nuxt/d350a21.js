(window.webpackJsonp=window.webpackJsonp||[]).push([[17,7,8],{277:function(t,e,n){var content=n(287);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("3649419e",content,!0,{sourceMap:!1})},278:function(t,e,n){var content=n(289);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("c9221c52",content,!0,{sourceMap:!1})},286:function(t,e,n){"use strict";n(277)},287:function(t,e,n){var o=n(30)(!1);o.push([t.i,".promo{text-align:center}.promo p{color:#999}",""]),t.exports=o},288:function(t,e,n){"use strict";n(278)},289:function(t,e,n){var o=n(30)(!1);o.push([t.i,".contacts{text-align:center;background-color:#4b40e3}.contacts,.contacts h2.title{color:#fff}.contacts .contacts__form{max-width:600px;margin:30px auto}.contacts .controls{margin:30px 0}",""]),t.exports=o},291:function(t,e,n){"use strict";n.r(e);n(25);var o={data:function(){return{message:null,user:{name:"",email:"",text:""}}},methods:{onSubmit:function(){this.message="Submited!",this.user.name="",this.user.email="",this.user.text=""}}},c=(n(288),n(6)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"contacts"},[n("div",{staticClass:"container"},[n("h2",{staticClass:"title"},[t._v("Contact me!")]),t._v(" "),t.message?n("Message",{attrs:{message:t.message}}):t._e(),t._v(" "),n("form",{staticClass:"contacts__form",on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[n("AppInput",{model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}},[t._v("Name:")]),t._v(" "),n("AppInput",{attrs:{type:"email"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}},[t._v("Email:")]),t._v(" "),n("AppTextarea",{model:{value:t.user.text,callback:function(e){t.$set(t.user,"text",e)},expression:"user.text"}},[t._v("Message:")]),t._v(" "),n("div",{staticClass:"controls"},[n("AppButton",{staticClass:"btnWhite"},[t._v("Submit!")])],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports},292:function(t,e,n){"use strict";n.r(e);n(286);var o=n(6),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"promo"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[t._v("My SSR Blog! With Nuxt.js!")]),t._v(" "),n("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris")])])])}],!1,null,null,null);e.default=component.exports},315:function(t,e,n){"use strict";n.r(e);var o=n(292),c=n(291),r={components:{promo:o.default,contacts:c.default},head:function(){var title="My SSR Blog!",t="My SSR Blog! With Nuxt.js!";return{title:title,meta:[{hid:"og:title",name:"og:title",content:title},{hid:"description",name:"description",content:t},{hid:"og:description",name:"og:description",content:t},{hid:"og:type",name:"og:type",content:"site"}]}},computed:{postsLoaded:function(){return this.$store.getters.getPostsLoaded}}},l=n(6),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper-content wrapper-content--fixed"},[n("promo"),t._v(" "),n("Intro",{attrs:{title:"My lasts posts:"}}),t._v(" "),n("PostList",{attrs:{posts:t.postsLoaded}}),t._v(" "),n("contacts")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Promo:n(292).default,Contacts:n(291).default})}}]);