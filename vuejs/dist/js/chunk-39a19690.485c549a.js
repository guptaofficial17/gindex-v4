(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39a19690"],{"3f25":function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[t.admin?i("div",{class:t.ismobile?"content mx-1 mt-2 px-0":"content ml-5 mt-2 mr-5 pl-5 pr-5 "},[i("h1",{staticClass:"title has-text-centered has-text-weight-bold has-text-white"},[t._v("Your Admin Zone")]),i("div",{staticClass:"loading"},[i("loading",{attrs:{active:t.loading,"can-cancel":!1,"is-full-page":t.fullpage},on:{"update:active":function(s){t.loading=s}}})],1),i("div",{staticClass:"columns has-text-white is-centered is-multiline"},[i("div",{class:t.notify?"column is-full":"column is-hidden is-full"},[i("div",{staticClass:"notification has-text-centered is-danger"},[i("button",{staticClass:"delete",on:{click:function(s){t.notify=!1}}}),i("h2",{staticClass:"title has-text-white has-text-weight-bold"},[t._v("Disclaimer !!")]),i("p",{staticClass:"subtitle has-text-weight-bold"},[t._v("Use your Admin Powers Wisely !!.")])])]),i("div",{staticClass:"column is-half"},[i("div",{staticClass:"columns is-multiline is-desktop is-centered"},[i("div",{staticClass:"column is-full"},[i("div",{staticClass:"box has-background-warning"},[i("h2",{staticClass:"title has-text-centered has-text-weight-bold"},[t._v("Related to New Users")]),i("div",{staticClass:"columns is-vcentered is-centered is-multiline is-mobile"},[t._m(0),i("div",{staticClass:"column has-text-centered is-one-third"},[i("button",{staticClass:"button is-rounded is-light",on:{click:function(s){return t.gotoPage("/","register")}}},[t._m(1),i("span",[t._v("Add")])])]),t._m(2),i("div",{staticClass:"column has-text-centered is-one-third"},[i("button",{staticClass:"button is-rounded is-light",on:{click:function(s){return t.gotoPage("/","invite")}}},[t._m(3),i("span",[t._v("Invite")])])])])])]),i("div",{staticClass:"column is-full"})])]),i("div",{staticClass:"column is-half"},[i("div",{staticClass:"box has-background-light"},[i("div",{staticClass:"columns is-centered is-multiline is-mobile"},[i("h2",{staticClass:"title has-text-centered has-text-weight-bold"},[t._v("Related to Existing Users")]),t._m(4),i("div",{staticClass:"column has-text-centered is-5"},[i("button",{staticClass:"button is-rounded is-danger",on:{click:function(s){return t.gotoPage("/manage","admin")}}},[t._m(5),i("span",[t._v("Manage")])])]),t._m(6),i("div",{staticClass:"column has-text-centered is-5"},[i("button",{staticClass:"button is-rounded is-danger",on:{click:function(s){return t.gotoPage("/spam","admin")}}},[t._m(7),i("span",[t._v("Manage")])])])])])])])]):t._e()])},a=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"column is-two-thirds"},[i("p",{staticClass:"subtitle"},[t._v("Add a User")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("span",{staticClass:"icon is-small"},[i("i",{staticClass:"fas fa-user-plus"})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"column is-two-thirds"},[i("p",{staticClass:"subtitle"},[t._v("Invite Users")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("span",{staticClass:"icon is-small"},[i("i",{staticClass:"fas fa-user-plus"})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"column is-7"},[i("p",{staticClass:"subtitle has-text-weight-bold"},[t._v("Manage Existing Users")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("span",{staticClass:"icon is-small"},[i("i",{staticClass:"fas fa-user-plus"})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"column is-7"},[i("p",{staticClass:"subtitle has-text-weight-bold"},[t._v("Manage Spam Users")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("span",{staticClass:"icon is-small"},[i("i",{staticClass:"fas fa-hand-paper"})])}],n=(i("d81d"),i("d3b7"),i("25f0"),i("9062")),l=i.n(n),c=(i("77ed"),i("e40d"),{components:{Loading:l.a},data:function(){return{notify:!0,user:{},token:{},admin:!1,gds:[],currgd:{},superadmin:!1,loading:!1,fullpage:!0}},methods:{gotoPage:function(t,s){s?this.$router.push({path:"/"+this.currgd.id+":"+s+t}):this.$router.push({path:"/"+this.currgd.id+":"+t})}},computed:{ismobile:function(){var t=window.innerWidth>0?window.innerWidth:screen.width;return!(t>966)}},beforeMount:function(){this.loading=!0;var t=localStorage.getItem("tokendata"),s=localStorage.getItem("userdata");if(null!=s&&null!=t){var i=JSON.parse(this.$hash.AES.decrypt(t,this.$pass).toString(this.$hash.enc.Utf8)),e=JSON.parse(this.$hash.AES.decrypt(s,this.$pass).toString(this.$hash.enc.Utf8));this.user=e,this.token=i,this.loading=!1}else this.user=null,this.token=null,this.loading=!1},mounted:function(){this.user.admin&&this.user.superadmin?(this.admin=!0,this.superadmin=!0,this.loading=!1):this.user.admin&&!this.user.superadmin?(this.admin=!0,this.superadmin=!1,this.loading=!1):this.$router.push({name:"results",params:{id:this.currgd.id,cmd:"result",data:"UnAuthorized Route.",redirectUrl:"/",tocmd:"home"}})},created:function(){if(window.gds){this.gds=window.gds.map((function(t,s){return{name:t,id:s}}));var t=this.$route.params.id;this.gds&&(this.currgd=this.gds[t])}}}),r=c,o=i("2877"),d=Object(o["a"])(r,e,a,!1,null,null,null);s["default"]=d.exports},"77ed":function(t,s,i){},e40d:function(t,s,i){}}]);