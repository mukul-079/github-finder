(this["webpackJsonpgit-app"]=this["webpackJsonpgit-app"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(1),r=c.n(n),i=c(5),a=c.n(i),l=(c(12),c(13),c(4)),j=c.n(l),o=c(6),b=c(2),d=function(e){var t=e.data,c=e.reposit;return Object(s.jsx)("table",{className:"ui celled table",children:Object(s.jsx)("tbody",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{style:{width:"30%"},children:Object(s.jsxs)("div",{class:"ui card",children:[Object(s.jsx)("div",{class:"image",children:t.avatar_url?Object(s.jsx)("img",{className:"ui small circular image",src:t.avatar_url,alt:t.avatar_url}):" "}),Object(s.jsxs)("div",{class:"content",children:[Object(s.jsx)("h2",{class:"ui orange inverted header",children:t.name}),Object(s.jsxs)("h4",{children:["Location : ",t.location]}),Object(s.jsxs)("h4",{children:["Bio:",t.bio]}),Object(s.jsxs)("h5",{children:["Followers : ",t.followers]}),Object(s.jsxs)("h5",{children:["Following : ",t.following]}),Object(s.jsx)("a",{href:t.html_url,children:Object(s.jsxs)("button",{class:"ui red right labeled icon button",children:[Object(s.jsx)("i",{class:"right arrow icon"}),"View Profile"]})})]})]})}),Object(s.jsxs)("td",{style:{width:"40%"},children:[Object(s.jsxs)("h1",{children:[" ",Object(s.jsx)("i",{class:"book icon"}),"Repositories : ",t.public_repos]}),c.map((function(e){return Object(s.jsx)("div",{className:"ui relaxed horizontal divided list",children:Object(s.jsx)("div",{className:"item",children:Object(s.jsx)("div",{className:"content",children:Object(s.jsx)("a",{href:e.html_url,className:"header",target:"_blank",children:Object(s.jsxs)("button",{class:"ui primary pink button",children:[Object(s.jsx)("i",{className:"large github middle aligned icon"}),e.name]})})})})},e.name)}))]})]})})})},h=function(){var e=Object(n.useState)({}),t=Object(b.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)(""),a=Object(b.a)(i,2),l=a[0],h=a[1],u=Object(n.useState)([]),O=Object(b.a)(u,2),x=O[0],m=O[1],p=function(){var e=Object(o.a)(j.a.mark((function e(t){var c,s,n,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("https://api.github.com/users/".concat(l));case 3:return c=e.sent,e.next=6,c.json();case 6:return s=e.sent,console.log(s),e.next=10,fetch(s.repos_url);case 10:return n=e.sent,e.next=13,n.json();case 13:i=e.sent,console.log(i),s&&(r(s),m(i));case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{style:{padding:24},children:Object(s.jsxs)("div",{className:"ui search",children:[Object(s.jsxs)("div",{className:"ui icon input",children:[Object(s.jsx)("i",{className:"search icon"}),Object(s.jsx)("input",{className:"prompt",placeholder:"Enter a Github Username",type:"text",value:l,onChange:function(e){h(e.target.value)}})]}),Object(s.jsxs)("button",{className:"ui inverted teal button",type:"submit",style:{margin:30},onClick:p,children:[Object(s.jsx)("i",{className:"github icon"}),"Search"]}),Object(s.jsx)(d,{data:c,reposit:x})]})})})},u=c.p+"static/media/gi.c085937a.gif";var O=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("header",{className:"App-header",children:Object(s.jsxs)("p",{style:{fontSize:100,fontWeight:500,padding:50},children:[Object(s.jsx)("img",{src:u,alt:"loading..."}),Object(s.jsx)("span",{style:{color:"red"},children:"Git"}),"hub",Object(s.jsx)("span",{style:{color:"red"},children:" F"}),"inder"]})}),Object(s.jsx)(h,{}),Object(s.jsxs)("table",{border:"0",width:"100%",height:"150px",bgcolor:"black",children:[Object(s.jsx)("tr",{className:"bottom",style:{color:"cyan",fontFamily:"Poiret One"},children:Object(s.jsx)("td",{children:"Developed by Mukul Varshney"})}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("tr",{className:"bottom",style:{color:"cyan",fontSize:20,fontFamily:"Poiret One"},children:Object(s.jsxs)("td",{children:["Follow us:",Object(s.jsxs)("a",{href:"https://www.instagram.com/mukul__79",children:["  ",Object(s.jsx)("i",{className:"fab fa-instagram",style:{fontSize:20},children:" "})]}),Object(s.jsxs)("a",{href:"https://www.facebook.com/mukul.varshney.3597",children:["  ",Object(s.jsx)("i",{className:"fab fa-facebook",style:{fontSize:20}})]})]})}),Object(s.jsx)("tr",{style:{color:"black",backgroundColor:"white"},children:Object(s.jsx)("td",{children:Object(s.jsx)("center",{children:Object(s.jsx)("strong",{children:Object(s.jsx)("footer",{children:"\xa9 All Copyright Reserved 2020"})})})})})]})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),r(e),i(e)}))};a.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(O,{})}),document.getElementById("root")),x()}},[[15,1,2]]]);
//# sourceMappingURL=main.c4023a82.chunk.js.map