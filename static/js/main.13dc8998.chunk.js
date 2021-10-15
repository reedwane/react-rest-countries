(this["webpackJsonpreact-rest-countries"]=this["webpackJsonpreact-rest-countries"]||[]).push([[0],{12:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(13),r=c.n(n),i=(c(12),c(0)),l=function(){var e=function(e){var t=document.documentElement,c=document.querySelector("body");document.querySelector(".input-div img");c.classList.add("pre-animation");var s=window.getComputedStyle(e.target).getPropertyValue("background-color");setTimeout((function(){"rgb(43, 57, 69)"!==s?(t.style.setProperty("--Mode-Elements","hsl(209, 23%, 22%)"),t.style.setProperty("--Mode-Text","hsl(0, 0%, 100%)"),t.style.setProperty("--Mode-Background","hsl(207, 26%, 17%)")):(t.style.setProperty("--Mode-Elements","hsl(0, 0%, 100%)"),t.style.setProperty("--Mode-Text","hsl(200, 15%, 8%)"),t.style.setProperty("--Mode-Background","hsl(0, 0%, 98%)")),c.classList.remove("pre-animation"),c.classList.add("post-animation")}),1200)};return Object(i.jsxs)("div",{className:"header",children:[Object(i.jsx)("h1",{children:"Where in the world?"}),Object(i.jsxs)("p",{className:"theme-toggle",children:[Object(i.jsx)("i",{className:"far fa-moon",onClick:e})," ",Object(i.jsx)("span",{onClick:e,children:" Dark Mode"})]})]})},o=c(5),j=c(2),d=c(6),h=function(e){var t=Object(s.useState)(null),c=Object(d.a)(t,2),a=c[0],n=c[1],r=Object(s.useState)(!0),i=Object(d.a)(r,2),l=i[0],o=i[1],j=Object(s.useState)(!1),h=Object(d.a)(j,2),u=h[0],b=h[1];return Object(s.useEffect)((function(){var t=new AbortController;return fetch(e,{singal:t.signal}).then((function(e){return e.json()})).then((function(e){n(e),o(!1),b(!1),!1===Array.isArray(e)&&b(!0)})).catch((function(e){"AbortError"===e.message?console.log("fetch aborted"):(console.log(e.message),o(!1),b(!0))})),function(){t.abort()}}),[e]),{data:a,loading:l,error:u}},u=function(e){var t=e.url,c=h(t),s=c.data,a=c.loading,n=c.error;return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"countries-list",children:[a&&Object(i.jsx)("h2",{children:"Loading..."}),s&&Array.isArray(s)&&s.map((function(e){return Object(i.jsx)("div",{className:"country-detail",id:e.cca3,children:Object(i.jsxs)(o.b,{to:"/react-rest-countries/"+e.cca3,children:[Object(i.jsx)("img",{className:"flag",src:e.flags.png,alt:e.name.common}),Object(i.jsxs)("div",{className:"detail",children:[Object(i.jsx)("h2",{className:"country-name",children:e.name.common}),Object(i.jsxs)("p",{className:"population",children:["Populaton:"," ",Object(i.jsx)("span",{className:"tag",children:e.population.toLocaleString("en")})]}),Object(i.jsxs)("p",{className:"region",children:["Region: ",Object(i.jsx)("span",{className:"tag",children:e.region})]}),Object(i.jsxs)("p",{className:"capital",children:["Capital: ",Object(i.jsx)("span",{className:"tag",children:e.capital})]})]})]})},e.cca3)})),n&&Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Could not get country details"}),Object(i.jsx)("p",{children:"Please refresh the page"})]})]})})},b=c.p+"static/media/lens-black.6fadad65.png",O=function(){var e=Object(s.useState)("https://restcountries.com/v3.1/all"),t=Object(d.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),r=Object(d.a)(n,2),l=r[0],o=r[1],j=Object(s.useState)(""),h=Object(d.a)(j,2),O=h[0],m=h[1];return Object(s.useEffect)((function(){O&&("all"===O?a("https://restcountries.com/v3.1/all"):(console.log(O),a("https://restcountries.com/v3.1/region/"+O)))}),[O]),Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"search-filter",children:[Object(i.jsxs)("div",{className:"input-div",children:[Object(i.jsx)("img",{src:b,alt:"lens",onClick:function(){""!==l&&a("https://restcountries.com/v3.1/name/"+l)}}),Object(i.jsx)("input",{type:"search",name:"search",id:"search",value:l,onChange:function(e){o(e.target.value)},onKeyUp:function(e){"Enter"===e.key&&""!==l&&a("https://restcountries.com/v3.1/name/"+l)},placeholder:"Search for a country by name..."})]}),Object(i.jsxs)("select",{required:!0,id:"filter",value:O||"all",name:"filter",onChange:function(e){m(e.target.value)},children:[Object(i.jsx)("option",{value:"all",children:"Filter by Region"}),Object(i.jsx)("option",{value:"Africa",children:"Africa"}),Object(i.jsx)("option",{value:"Americas",children:"America"}),Object(i.jsx)("option",{value:"Asia",children:"Asia"}),Object(i.jsx)("option",{value:"Europe",children:"Europe"}),Object(i.jsx)("option",{value:"Oceania",children:"Oceania"})]})]}),Object(i.jsx)(u,{url:c})]})},m=function(e){var t,c=e.data;void 0!==c.borders?t="https://restcountries.com/v3.1/alpha?codes="+Object.values(c.borders).join(","):t="none";var s=h(t),a=s.data,n=s.loading,r=s.error;return Object(i.jsxs)("div",{className:"three",children:[Object(i.jsx)("h4",{children:"Border Countries: "}),n&&Object(i.jsx)("p",{children:"Loading..."}),r&&Object(i.jsx)("p",{children:"Borders not found"}),a&&Array.isArray(a)&&a.map((function(e){return Object(i.jsx)(o.b,{to:"/react-rest-countries/"+e.cca3,children:Object(i.jsx)("p",{children:e.name.common})},e.cca3)}))]})},p=function(e){for(var t=e.data,c=Object.keys(t.name.nativeName)[0],s=t.name.nativeName[c].official,a=Object.keys(t.languages),n=[],r=0;r<a.length;r++)n.push(t.languages[a[r]]);return Object(i.jsxs)("div",{className:"more-detail",children:[Object(i.jsx)("img",{src:t.flags.png,alt:(t.name.official,"flag")}),Object(i.jsxs)("div",{className:"one",children:[Object(i.jsx)("h2",{className:"country-name",children:t.name.official}),Object(i.jsxs)("p",{className:"native-name",children:["Native Name: ",Object(i.jsx)("span",{className:"tag",children:s})]}),Object(i.jsxs)("p",{className:"population",children:["Population:"," ",Object(i.jsx)("span",{className:"tag",children:t.population.toLocaleString("en")})]}),Object(i.jsxs)("p",{className:"region",children:["Region: ",Object(i.jsx)("span",{className:"tag",children:t.region})]}),Object(i.jsxs)("p",{className:"capital",children:["Capital: ",Object(i.jsx)("span",{className:"tag",children:t.capital})]})]}),Object(i.jsxs)("div",{className:"two",children:[Object(i.jsxs)("p",{className:"domain",children:["Top Level Domain: ",Object(i.jsx)("span",{className:"tag",children:t.tld})]}),Object(i.jsxs)("p",{className:"currencies",children:["Currencies:"," ",Object(i.jsx)("span",{className:"tag",children:Object.keys(t.currencies)[0]})]}),Object(i.jsxs)("p",{className:"language",children:["Languages: ",Object(i.jsx)("span",{className:"tag",children:n.join(", ")})]})]}),Object(i.jsx)(m,{data:t})]})},x=function(){var e=Object(j.f)().country,t=h("https://restcountries.com/v3.1/alpha/"+e),c=t.data,s=t.loading,a=t.error;return Object(i.jsxs)("div",{className:"specific",children:[Object(i.jsx)(o.b,{to:"/react-rest-countries",children:Object(i.jsx)("p",{className:"home",children:"\u2190 Back"})}),s&&Object(i.jsx)("h2",{children:"Loading.."}),a&&Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Could not get country details"}),Object(i.jsx)(o.b,{to:"/react-rest-countries",children:"Back to homepage"})]}),c&&Array.isArray(c)&&Object(i.jsx)(p,{data:c[0]})]})},g=function(){return Object(i.jsxs)("div",{className:"error",children:[Object(i.jsx)("h2",{children:"Page not found"}),Object(i.jsx)(o.b,{to:"/react-rest-countries",children:Object(i.jsx)("p",{children:"Back to home page"})})]})};var v=function(){return Object(i.jsx)(o.a,{children:Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(l,{}),Object(i.jsxs)(j.c,{children:[Object(i.jsx)(j.a,{exact:!0,path:"/react-rest-countries",children:Object(i.jsx)(O,{})}),Object(i.jsx)(j.a,{path:"/react-rest-countries/:country",children:Object(i.jsx)(x,{})}),Object(i.jsx)(j.a,{path:"/*",children:Object(i.jsx)(g,{})})]})]})})};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(v,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.13dc8998.chunk.js.map