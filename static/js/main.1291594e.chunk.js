(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{27:function(e,t,c){},28:function(e,t,c){},47:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(22),s=c.n(r),i=(c(27),c(6)),u=(c(28),c(2)),j=c(3),o=c(9),b=c.n(o),l=(c(47),c(1)),O=function(e){var t=e.amount,c=e.currency,n=e.currencies,a=e.onAmountChange,r=e.onCurrencyChange;return Object(l.jsxs)("div",{className:"group",children:[Object(l.jsx)("input",{type:"number",value:t,onChange:function(e){return a(e.target.value)}}),Object(l.jsx)("select",{value:c,onChange:function(e){return r(e.target.value)},children:n.map((function(e){return Object(l.jsx)("option",{value:e,children:e},e)}))})]})},d=function(){var e=Object(n.useState)(1),t=Object(j.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(1),s=Object(j.a)(r,2),i=s[0],u=s[1],o=Object(n.useState)("CAD"),d=Object(j.a)(o,2),h=d[0],f=d[1],p=Object(n.useState)("CHF"),m=Object(j.a)(p,2),x=m[0],v=m[1],g=Object(n.useState)({UAH:1}),y=Object(j.a)(g,2),C=y[0],k=y[1],N=function(e){return e.toFixed(2)},S=function(e){u(N(+e*C[x]/C[h])),a(e)};return Object(n.useEffect)((function(){b.a.get("https://freecurrencyapi.net/api/v2/latest?apikey=1a1622c0-89a1-11ec-acef-312b1abd7534").then((function(e){k(e.data.data)})),C&&S(1)}),[C]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(O,{currencies:Object.keys(C),amount:c,currency:h,onAmountChange:S,onCurrencyChange:function(e){u(N(+c*C[x]/C[e])),f(e)}}),Object(l.jsx)(O,{currencies:Object.keys(C),amount:i,currency:x,onAmountChange:function(e){a(N(+e*C[h]/C[x])),u(e)},onCurrencyChange:function(e){a(N(+i*C[h]/C[e])),v(e)}})]})},h=c(10),f=c(13),p=(c(49),function(){var e=Object(n.useState)("CAD"),t=Object(j.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)({CAD:1}),s=Object(j.a)(r,2),i=s[0],u=s[1],o=Object(n.useState)({CHF:1}),O=Object(j.a)(o,2),d=O[0],p=O[1];return Object(n.useEffect)((function(){b.a.get("https://freecurrencyapi.net/api/v2/latest?apikey=1a1622c0-89a1-11ec-acef-312b1abd7534").then((function(e){u(e.data.data),p(e.data.data)}))}),[]),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"content-list",children:[Object(l.jsx)("select",{className:"selector",value:c,onChange:function(e){a(e.target.value),function(e){var t={};Object.keys(i).forEach((function(c){var n=i[c]/i[e];t=Object(f.a)(Object(f.a)({},t),{},Object(h.a)({},c,n))})),p(t)}(e.target.value)},children:Object.keys(i).map((function(e){return Object(l.jsx)("option",{value:e,children:e},e)}))}),Object(l.jsx)("div",{className:"list",children:Object.entries(d).map((function(e){return Object(l.jsxs)("div",{className:"item",children:[e[1].toFixed(2)," ",e[0]]},Math.random().toString())}))})]})})}),m=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"content",children:[Object(l.jsxs)("div",{className:"switcher",children:[Object(l.jsx)(i.b,{className:"link",to:"/",children:"Currency converter"}),Object(l.jsx)(i.b,{className:"link",to:"/currency-list",children:"Currency list"})]}),Object(l.jsx)("div",{className:"pages",children:Object(l.jsxs)(u.c,{children:[Object(l.jsx)(u.a,{path:"/",element:Object(l.jsx)(d,{})}),Object(l.jsx)(u.a,{path:"/currency-list",element:Object(l.jsx)(p,{})})]})})]})})};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(i.a,{children:Object(l.jsx)(m,{})})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.1291594e.chunk.js.map