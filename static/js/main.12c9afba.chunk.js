(this["webpackJsonpgif-search-react-app"]=this["webpackJsonpgif-search-react-app"]||[]).push([[0],{41:function(t,e,c){},42:function(t,e,c){},43:function(t,e,c){"use strict";c.r(e);var a=c(0),n=c(1),s=c.n(n),i=c(16),r=c.n(i),o=c(4),l=c.n(o),j=c(5),u=c(3),d=c(6),b=c.n(d),f=c.p+"static/media/arrowRight.6b96663a.svg",h=c.p+"static/media/arrowLeft.7f97f7ce.svg",p=c.p+"static/media/reset.36c212de.svg",g=c.p+"static/media/Enter.7f97f7ce.svg";function O(t){var e=t.search,c=t.setSearch,n=t.fetchData,s=t.setTitle;return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{className:"gif-search",onSubmit:function(t){t.preventDefault(),s(e),n(e),c("")},children:[Object(a.jsx)("input",{type:"text",value:e,onChange:function(t){return c(t.target.value)}}),Object(a.jsx)("button",{className:"gif-btn-submit",type:"submit",children:Object(a.jsx)("img",{className:"svg",src:g,alt:"enter"})})]})})}var m=function(){var t=Object(j.a)(l.a.mark((function t(e,c,a,n,s,i,r,o,j,u,d){var f,h,p;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,f="https://api.giphy.com/v1/gifs/trending?&api_key=".concat("6GgpylOA0E7NV8RKm3prRVmwxWtFbLMt","&limit=").concat(e,"&offset=").concat(c),t.next=4,b()(f);case 4:return h=t.sent,t.next=7,h;case 7:200===(p=t.sent).status&&(s(p.data.data),r(p.data.pagination.total_count),i(!1),n(!0),"Trending"!==u&&(d("Trending"),c>0&&a(0)),o(),j(!1)),t.next=15;break;case 11:if(t.prev=11,t.t0=t.catch(0),!t.t0){t.next=15;break}throw t.t0;case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,c,a,n,s,i,r,o,l,j,u){return t.apply(this,arguments)}}(),x=function(){var t=Object(n.useState)([]),e=Object(u.a)(t,2),c=e[0],s=e[1],i=Object(n.useState)("Gif"),r=Object(u.a)(i,2),o=r[0],d=r[1],g=Object(n.useState)(!0),x=Object(u.a)(g,2),v=x[0],w=x[1],y=Object(n.useState)(0),N=Object(u.a)(y,2),k=N[0],S=N[1],C=Object(n.useState)(40),R=Object(u.a)(C,2),L=R[0],T=(R[1],Object(n.useState)(0)),E=Object(u.a)(T,2),G=E[0],_=E[1],A=Object(n.useState)(""),D=Object(u.a)(A,2),M=D[0],U=D[1],V=Object(n.useState)(!1),q=Object(u.a)(V,2),F=q[0],J=q[1],K=Object(n.useState)(!1),W=Object(u.a)(K,2),B=(W[0],W[1]);function H(t){return I.apply(this,arguments)}function I(){return(I=Object(j.a)(l.a.mark((function t(e){var c,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c="https://api.giphy.com/v1/gifs/search?q=".concat(e,"&api_key=").concat("6GgpylOA0E7NV8RKm3prRVmwxWtFbLMt","&limit=").concat(L,"&offset=").concat(k),t.next=3,b()(c);case 3:200===(a=t.sent).status&&(s(a.data.data),_(a.data.pagination.total),w(!1),F&&(J(!1),S(0)),B(!1));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}Object(n.useEffect)((function(){F&&m(L,k,S,J,s,w,_,Q,B,o,d),F||H(o)}),[k]);var X=function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},z=function(){w(!0),S(k+L),X()},P=function(){w(!0),S(k-L),X()},Q=function(){switch(!0){case v:return Object(a.jsx)("div",{children:"Loading..."});case c.length>0:return c.map((function(t,e){return Object(a.jsx)("div",{className:"gif-card",children:Object(a.jsx)("img",{onClick:function(){return function(t){var e=new XMLHttpRequest;e.open("GET",t,!0),e.responseType="blob",e.onload=function(){var t=(window.URL||window.webkitURL).createObjectURL(this.response),e=document.createElement("a");e.href=t,e.download=o.charAt(0).toUpperCase()+o.slice(1),document.body.appendChild(e),e.click(),document.body.removeChild(e)},e.send()}(t.images.fixed_height.url)},className:"image",src:t.images.fixed_width.url,alt:"gif"})},t.id)}));default:return c}};return Object(a.jsxs)("div",{children:[Object(a.jsxs)("header",{children:[Object(a.jsx)("a",{href:"/catalog",style:{textDecoration:"none"},children:Object(a.jsx)("h1",{className:"gif-title-h1",children:" Gif Search"})}),Object(a.jsxs)("div",{style:{color:"white"},children:[Object(a.jsx)("strong",{children:"Search ==> "})," ",o]}),Object(a.jsx)(O,{search:M,setSearch:U,fetchData:H,setTitle:d}),Object(a.jsx)("a",{href:"/catalog",children:Object(a.jsx)("img",{className:"svg",src:p,alt:"reset"})})]}),Object(a.jsx)("button",{className:"gif-btn-trending",onClick:function(){return m(L,k,S,J,s,w,_,Q,B,o,d)},children:"Trending"}),Object(a.jsx)("div",{className:"gif-wrap",children:Q()}),Object(a.jsx)("div",{className:"pagination",children:0===G?"":k<L?Object(a.jsx)("img",{onClick:z,className:"svg",src:f,alt:"right"}):k>=G?Object(a.jsx)("img",{onClick:P,className:"svg",src:h,alt:"left"}):Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{onClick:P,className:"svg",src:h,alt:"left"}),Object(a.jsx)("img",{onClick:z,className:"svg",src:f,alt:"right"})]})})]})};c(41);var v=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(x,{})})};c(42);r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.12c9afba.chunk.js.map