(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[646],{4857:function(e,t,r){Promise.resolve().then(r.bind(r,4158))},7762:function(e,t,r){"use strict";var a=r(3827),s=r(8792),l=r(7907),i=r(4090);t.Z=e=>{let t=localStorage.getItem("user")&&JSON.parse(localStorage.getItem("user")),r=localStorage.getItem("cart")&&JSON.parse(localStorage.getItem("cart")),[c,o]=(0,i.useState)(t||void 0),[n,d]=(0,i.useState)(null==r?void 0:r.length),[u,h]=(0,i.useState)(r),g=(0,l.useRouter)();return console.log(t),(0,i.useEffect)(()=>{e.cartData&&(console.log(e),n?u[0].resto_id!=e.cartData.resto_id?(localStorage.removeItem("cart"),d(1),h([e.cartData]),localStorage.setItem("cart",JSON.stringify([e.cartData]))):(u.push(JSON.parse(JSON.stringify(e.cartData))),h(u),d(n+1),localStorage.setItem("cart",JSON.stringify(u))):(d(1),h([e.cartData]),localStorage.setItem("cart",JSON.stringify([e.cartData]))))},[e.cartData]),(0,i.useEffect)(()=>{if(e.removeCartData){let t=u.filter(t=>t._id!=e.removeCartData);h(t),d(n-1),localStorage.setItem("cart",JSON.stringify(t)),0==t.length&&localStorage.removeItem("cart")}},[e.removeCartData]),(0,i.useEffect)(()=>{e.removeCartData&&(h([]),d(0),localStorage.removeItem("cart"))},[e.removeCartData]),(0,a.jsxs)("div",{className:"header-wrapper",children:[(0,a.jsx)("div",{className:"logo",children:(0,a.jsx)("img",{style:{width:100},src:"https://s.tmimgcdn.com/scr/1200x627/242400/food-delivery-custom-design-logo-template_242462-original.png"})}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(s.default,{href:"/",children:"Home"})}),c?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("li",{children:(0,a.jsx)(s.default,{href:"/myprofile",children:null==c?void 0:c.name})}),(0,a.jsx)("li",{children:(0,a.jsx)("button",{onClick:()=>{localStorage.removeItem("user"),g.push("/user-auth")},children:"Logout"})})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("li",{children:(0,a.jsx)(s.default,{href:"/",children:"Login"})}),(0,a.jsx)("li",{children:(0,a.jsx)(s.default,{href:"/user-auth",children:"SignUp"})})]}),(0,a.jsx)("li",{children:(0,a.jsxs)(s.default,{href:n?"/cart":"#",children:["Cart(",n||0,")"]})}),(0,a.jsx)("li",{children:(0,a.jsx)(s.default,{href:"/",children:"Add Restaurant"})}),(0,a.jsx)("li",{children:(0,a.jsx)(s.default,{href:"/deliverypartner",children:"Delivery Partner"})})]})]})}},5519:function(e,t,r){"use strict";var a=r(3827);t.Z=()=>(0,a.jsx)("div",{className:"footer-wrapper",children:(0,a.jsx)("p",{children:"All rights reserved by Resto app"})})},4158:function(e,t,r){"use strict";r.r(t);var a=r(3827),s=r(4090),l=r(7762),i=r(5519);t.default=()=>{let[e,t]=(0,s.useState)([]);(0,s.useEffect)(()=>{r()},[]);let r=async()=>{let e=JSON.parse(localStorage.getItem("user")),r=await fetch("http://localhost:3000/api/order?id="+e._id);console.log("\uD83D\uDE80 ~ getMyOrders ~ response:",r=await r.json()),r.success&&t(r.result)};return(0,a.jsxs)("div",{children:[(0,a.jsx)(l.Z,{}),e.map(e=>(0,a.jsxs)("div",{className:"restaurant-wrapper",style:{marginLeft:"auto",marginRight:"auto"},children:[(0,a.jsxs)("h4",{children:["Name ",e.data.name]}),(0,a.jsxs)("div",{children:["Amount:",e.amount]}),(0,a.jsxs)("div",{children:["Address:",e.data.address]}),(0,a.jsxs)("div",{children:["Status:",e.status]})]})),(0,a.jsx)(i.Z,{})]})}}},function(e){e.O(0,[901,971,69,744],function(){return e(e.s=4857)}),_N_E=e.O()}]);