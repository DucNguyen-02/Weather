(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],[,,,,,,,,,function(e,s,c){},,function(e,s,c){},function(e,s,c){},function(e,s,c){"use strict";c.r(s);var a=c(4),t=c.n(a),n=c(2),i=c(1);c(9);var l=c(0),r=function(e){var s=function(){var e=Object(i.useState)(""),s=Object(n.a)(e,2),c=s[0],a=s[1];return Object(i.useEffect)((function(){var e=setInterval((function(){var e=function(e){var s="0".concat(e.getHours()).slice(-2),c="0".concat(e.getMinutes()).slice(-2),a="0".concat(e.getSeconds()).slice(-2);return"".concat(s,":").concat(c,":").concat(a)}(new Date);a(e)}),1e3);return function(){clearInterval(e)}}),[]),c}(),c=function(){var e=Object(i.useState)(""),s=Object(n.a)(e,2),c=s[0],a=s[1];return Object(i.useEffect)((function(){var e=setInterval((function(){var e=function(e){var s=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Satuday"][e.getDay()],c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()],a=e.getDate();return"".concat(s,", ").concat(a," ").concat(c)}(new Date);a(e)}),1e3);return function(){clearInterval(e)}}),[]),c}(),a=e.data.current,t=a.humidity,r=a.pressure,m=a.sunrise,j=a.sunset,u=a.wind_speed,d=e.location,o=d.latitude,h=d.longitude,b=new Date(1e3*m),O=new Date(1e3*j);return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsxs)("section",{className:"date",children:[Object(l.jsxs)("div",{className:"date-time",children:[Object(l.jsx)("h1",{className:"date-hour",children:s}),Object(l.jsx)("p",{className:"date-day",children:c})]}),Object(l.jsxs)("ul",{className:"info-list",children:[Object(l.jsxs)("li",{className:"info-item",children:[Object(l.jsx)("p",{className:"info-name",children:"Humidity"}),Object(l.jsx)("p",{className:"info-detail",children:t})]}),Object(l.jsxs)("li",{className:"info-item",children:[Object(l.jsx)("p",{className:"info-name",children:"Pressure"}),Object(l.jsx)("p",{className:"info-detail",children:r})]}),Object(l.jsxs)("li",{className:"info-item",children:[Object(l.jsx)("p",{className:"info-name",children:"Wind Speed"}),Object(l.jsx)("p",{className:"info-detail",children:u})]}),Object(l.jsxs)("li",{className:"info-item",children:[Object(l.jsx)("p",{className:"info-name",children:"Sunrise"}),Object(l.jsx)("p",{className:"info-detail",children:"".concat(b.getHours(),":").concat(b.getMinutes())})]}),Object(l.jsxs)("li",{className:"info-item",children:[Object(l.jsx)("p",{className:"info-name",children:"Sunset"}),Object(l.jsx)("p",{className:"info-detail",children:"".concat(O.getHours(),":").concat(O.getMinutes())})]})]})]}),Object(l.jsx)("section",{className:"location",children:Object(l.jsxs)("div",{className:"location-wrapper",children:[Object(l.jsx)("h1",{className:"location-name",children:"LaoBao/VietNam"}),Object(l.jsx)("p",{className:"location-latlon",children:"".concat(o.toFixed(4),"N ").concat(h.toFixed(4),"E")})]})})]})},m=(c(11),c(12),function(){return Object(l.jsxs)("section",{className:"future",children:[Object(l.jsxs)("div",{className:"today",children:[Object(l.jsx)("img",{className:"today-img",src:"https://images-na.ssl-images-amazon.com/images/I/41hzbXlmykL.png",alt:""}),Object(l.jsxs)("div",{className:"today-desc",children:[Object(l.jsx)("h2",{className:"today-day day",children:"Monday"}),Object(l.jsx)("p",{className:"today-temp desc",children:"Night - 24.98C"}),Object(l.jsx)("p",{className:"today-temp desc",children:"Day - 31C"})]})]}),Object(l.jsxs)("ul",{className:"future-list",children:[Object(l.jsxs)("li",{className:"future-item",children:[Object(l.jsx)("h2",{className:"day",children:"Tue"}),Object(l.jsx)("img",{className:"future-img",src:"https://images-na.ssl-images-amazon.com/images/I/41hzbXlmykL.png",alt:""}),Object(l.jsx)("p",{className:"future-temp desc",children:"Night - 24.98C"}),Object(l.jsx)("p",{className:"future-temp desc",children:"Day - 31C"})]}),Object(l.jsxs)("li",{className:"future-item",children:[Object(l.jsx)("h2",{className:"day",children:"Tue"}),Object(l.jsx)("img",{className:"future-img",src:"https://images-na.ssl-images-amazon.com/images/I/41hzbXlmykL.png",alt:""}),Object(l.jsx)("p",{className:"future-temp desc",children:"Night - 24.98C"}),Object(l.jsx)("p",{className:"future-temp desc",children:"Day - 31C"})]}),Object(l.jsxs)("li",{className:"future-item",children:[Object(l.jsx)("h2",{className:"day",children:"Tue"}),Object(l.jsx)("img",{className:"future-img",src:"https://images-na.ssl-images-amazon.com/images/I/41hzbXlmykL.png",alt:""}),Object(l.jsx)("p",{className:"future-temp desc",children:"Night - 24.98C"}),Object(l.jsx)("p",{className:"future-temp desc",children:"Day - 31C"})]}),Object(l.jsxs)("li",{className:"future-item",children:[Object(l.jsx)("h2",{className:"day",children:"Tue"}),Object(l.jsx)("img",{className:"future-img",src:"https://images-na.ssl-images-amazon.com/images/I/41hzbXlmykL.png",alt:""}),Object(l.jsx)("p",{className:"future-temp desc",children:"Night - 24.98C"}),Object(l.jsx)("p",{className:"future-temp desc",children:"Day - 31C"})]}),Object(l.jsxs)("li",{className:"future-item",children:[Object(l.jsx)("h2",{className:"day",children:"Tue"}),Object(l.jsx)("img",{className:"future-img",src:"https://images-na.ssl-images-amazon.com/images/I/41hzbXlmykL.png",alt:""}),Object(l.jsx)("p",{className:"future-temp desc",children:"Night - 24.98C"}),Object(l.jsx)("p",{className:"future-temp desc",children:"Day - 31C"})]}),Object(l.jsxs)("li",{className:"future-item",children:[Object(l.jsx)("h2",{className:"day",children:"Tue"}),Object(l.jsx)("img",{className:"future-img",src:"https://images-na.ssl-images-amazon.com/images/I/41hzbXlmykL.png",alt:""}),Object(l.jsx)("p",{className:"future-temp desc",children:"Night - 24.98C"}),Object(l.jsx)("p",{className:"future-temp desc",children:"Day - 31C"})]}),Object(l.jsxs)("li",{className:"future-item",children:[Object(l.jsx)("h2",{className:"day",children:"Tue"}),Object(l.jsx)("img",{className:"future-img",src:"https://images-na.ssl-images-amazon.com/images/I/41hzbXlmykL.png",alt:""}),Object(l.jsx)("p",{className:"future-temp desc",children:"Night - 24.98C"}),Object(l.jsx)("p",{className:"future-temp desc",children:"Day - 31C"})]})]})]})}),j=function(){var e=Object(i.useState)(""),s=Object(n.a)(e,2),c=s[0],a=s[1],t={},j=Object(i.useState)(t),u=Object(n.a)(j,2),d=u[0],o=u[1];Object(i.useEffect)((function(){h()}),[]);var h=function(){var e,s;navigator.geolocation.getCurrentPosition((function(c){e=c.coords.latitude,s=c.coords.longitude;var n="https://api.openweathermap.org/data/2.5/onecall?lat=".concat(e,"&lon=").concat(s,"&exclude=hourly,minutely&appid=").concat("7a48f997c4cbf992ada8ce8e44129c66");o(t={latitude:e,longitude:s});try{fetch(n).then((function(e){return e.json()})).then((function(e){return a(e)}))}catch(i){console.log(i)}}))};return Object(l.jsxs)("div",{className:"app",children:["object"==typeof c?Object(l.jsx)(r,{data:c,location:d}):"",Object(l.jsx)(m,{})]})};t.a.render(Object(l.jsx)(j,{}),document.querySelector("#root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.c6ff324c.chunk.js.map