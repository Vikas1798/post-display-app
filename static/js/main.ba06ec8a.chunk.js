(this["webpackJsonppost-display"]=this["webpackJsonppost-display"]||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var o=n(1),c=n.n(o),r=n(4),s=n.n(r),i=(n(9),n(2)),u=(n(10),n(0)),a=function(){var t=Object(o.useState)(""),e=Object(i.a)(t,2),n=e[0],c=e[1],r=Object(o.useState)(!0),s=Object(i.a)(r,2),a=s[0],l=s[1],d=Object(o.useState)(null),h=Object(i.a)(d,2),j=h[0],b=h[1],f="https://my-json-server.typicode.com/typicode/demo/posts";return Object(o.useEffect)((function(){var t=new AbortController;return setTimeout((function(){fetch(f,{signal:t.signal}).then((function(t){if(!t.ok)throw Error("could not fetch the data for that resources");return t.json()})).then((function(t){c(t),console.log(t),l(!1),b(null)})).catch((function(t){"AbortError"===t.name?console.log("fetch Abourted"):(b(t.message),l(!1))}))}),2e3),function(){return t.abort()}}),[f]),Object(u.jsxs)(u.Fragment,{children:[a&&Object(u.jsx)("h4",{children:" Loading...."}),j&&Object(u.jsxs)("h4",{children:[" Ooops... Somthing Went Wrong",j]}),n.map((function(t){return Object(u.jsxs)("h4",{children:["`Post Id $",t.id," and its title is $",t.title,"`"]},t.id)}))]})};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(a,{})}),document.getElementById("root"))},9:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.ba06ec8a.chunk.js.map