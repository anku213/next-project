(()=>{var e={};e.id=565,e.ids=[565],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},7415:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>l.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>d,routeModule:()=>m,tree:()=>c});var s=r(482),a=r(9108),i=r(2563),l=r.n(i),n=r(8300),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);r.d(t,o);let c=["",{children:["cart",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,3583)),"D:\\next-app\\src\\app\\cart\\page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,1965)),"D:\\next-app\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["D:\\next-app\\src\\app\\cart\\page.js"],p="/cart/page",u={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/cart/page",pathname:"/cart",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},7222:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,6840,23)),Promise.resolve().then(r.t.bind(r,8771,23)),Promise.resolve().then(r.t.bind(r,3225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,3982,23))},1376:(e,t,r)=>{Promise.resolve().then(r.bind(r,7978))},1801:()=>{},867:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(5344),a=r(6506),i=r(8428),l=r(3729);let n=e=>{let t=localStorage.getItem("user")&&JSON.parse(localStorage.getItem("user")),r=localStorage.getItem("cart")&&JSON.parse(localStorage.getItem("cart")),[n,o]=(0,l.useState)(t||void 0),[c,d]=(0,l.useState)(r?.length),[p,u]=(0,l.useState)(r),m=(0,i.useRouter)();return console.log(t),(0,l.useEffect)(()=>{e.cartData&&(console.log(e),c?p[0].resto_id!=e.cartData.resto_id?(localStorage.removeItem("cart"),d(1),u([e.cartData]),localStorage.setItem("cart",JSON.stringify([e.cartData]))):(p.push(JSON.parse(JSON.stringify(e.cartData))),u(p),d(c+1),localStorage.setItem("cart",JSON.stringify(p))):(d(1),u([e.cartData]),localStorage.setItem("cart",JSON.stringify([e.cartData]))))},[e.cartData]),(0,l.useEffect)(()=>{if(e.removeCartData){let t=p.filter(t=>t._id!=e.removeCartData);u(t),d(c-1),localStorage.setItem("cart",JSON.stringify(t)),0==t.length&&localStorage.removeItem("cart")}},[e.removeCartData]),(0,l.useEffect)(()=>{e.removeCartData&&(u([]),d(0),localStorage.removeItem("cart"))},[e.removeCartData]),(0,s.jsxs)("div",{className:"header-wrapper",children:[s.jsx("div",{className:"logo",children:s.jsx("img",{style:{width:100},src:"https://s.tmimgcdn.com/scr/1200x627/242400/food-delivery-custom-design-logo-template_242462-original.png"})}),(0,s.jsxs)("ul",{children:[s.jsx("li",{children:s.jsx(a.default,{href:"/",children:"Home"})}),n?(0,s.jsxs)(s.Fragment,{children:[s.jsx("li",{children:s.jsx(a.default,{href:"/myprofile",children:n?.name})}),s.jsx("li",{children:s.jsx("button",{onClick:()=>{localStorage.removeItem("user"),m.push("/user-auth")},children:"Logout"})})]}):(0,s.jsxs)(s.Fragment,{children:[s.jsx("li",{children:s.jsx(a.default,{href:"/",children:"Login"})}),s.jsx("li",{children:s.jsx(a.default,{href:"/user-auth",children:"SignUp"})})]}),s.jsx("li",{children:(0,s.jsxs)(a.default,{href:c?"/cart":"#",children:["Cart(",c||0,")"]})}),s.jsx("li",{children:s.jsx(a.default,{href:"/",children:"Add Restaurant"})}),s.jsx("li",{children:s.jsx(a.default,{href:"/deliverypartner",children:"Delivery Partner"})})]})]})}},7331:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var s=r(5344);let a=()=>s.jsx("div",{className:"footer-wrapper",children:s.jsx("p",{children:"All rights reserved by Resto app"})})},7978:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var s=r(5344),a=r(3729),i=r(867),l=r(7331),n=r(1282),o=r(8428);let c=()=>{let[e,t]=(0,a.useState)(JSON.parse(localStorage.getItem("cart"))),[r]=(0,a.useState)(()=>1==e.length?e[0].price:e.reduce((e,t)=>e.price+t.price)),c=(0,o.useRouter)();return console.log(r),(0,s.jsxs)("div",{children:[s.jsx(i.Z,{}),s.jsx("div",{className:"food-list-wrapper",children:e.length>0?e.map(e=>(0,s.jsxs)("div",{className:"list-item",children:[s.jsx("div",{className:"list-item-block-1",children:s.jsx("img",{style:{width:100},src:e.img_path})}),(0,s.jsxs)("div",{className:"list-item-block-2",children:[s.jsx("div",{children:e.name}),s.jsx("div",{className:"description",children:e.description}),s.jsx("button",{onClick:()=>removeFromCart(e._id),children:"Remove From Cart"})]}),(0,s.jsxs)("div",{className:"list-item-block-3",children:["Price: ",e.price]})]})):s.jsx("h1",{children:"No Food Items for this Restaurant"})}),(0,s.jsxs)("div",{className:"total-wrapper",children:[(0,s.jsxs)("div",{className:"block-1",children:[(0,s.jsxs)("div",{className:"row",children:[s.jsx("span",{children:"Food Charges : "}),s.jsx("span",{children:r})]}),(0,s.jsxs)("div",{className:"row",children:[s.jsx("span",{children:"Tax : "}),s.jsx("span",{children:r*n.A/100})]}),(0,s.jsxs)("div",{className:"row",children:[s.jsx("span",{children:"Delivery Charges  : "}),s.jsx("span",{children:n.H})]}),(0,s.jsxs)("div",{className:"row",children:[s.jsx("span",{children:"Total Amount : "}),s.jsx("span",{children:r+n.H+r*n.A/100})]})]}),s.jsx("div",{className:"block-2",children:s.jsx("button",{onClick:()=>{JSON.parse(localStorage.getItem("user"))?c.push("/order"):c.push("/user-auth?order=true")},children:"Order Now"})})]}),s.jsx(l.Z,{})]})}},1282:(e,t,r)=>{"use strict";r.d(t,{A:()=>s,H:()=>a});let s=10,a=100},3583:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>i,__esModule:()=>a,default:()=>l});let s=(0,r(6843).createProxy)(String.raw`D:\next-app\src\app\cart\page.js`),{__esModule:a,$$typeof:i}=s,l=s.default},1965:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n,metadata:()=>l});var s=r(5036),a=r(1457),i=r.n(a);r(5023);let l={title:"Create Next App",description:"Generated by create next app"};function n({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{className:i().className,children:e})})}},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(337);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,43,404,506],()=>r(7415));module.exports=s})();