"use strict";(()=>{var e={};e.id=341,e.ids=[341],e.modules={1185:e=>{e.exports=require("mongoose")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},5299:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>S,originalPathname:()=>x,patchFetch:()=>y,requestAsyncStorage:()=>g,routeModule:()=>m,serverHooks:()=>v,staticGenerationAsyncStorage:()=>h,staticGenerationBailout:()=>w});var o={};r.r(o),r.d(o,{GET:()=>l});var a=r(5419),s=r(9108),n=r(9678),i=r(6526),u=r(7342),c=r(1185),p=r.n(c),d=r(8070);async function l(){await p().connect(i.L,{useNewUrlParser:!0});let e=await u.P.find();return e=e.map(e=>e?.city?.charAt(0).toUpperCase()+e?.city?.slice(1)),e=[...new Set(e.map(e=>e))],d.Z.json({success:!0,result:e})}let m=new a.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/customer/locations/route",pathname:"/api/customer/locations",filename:"route",bundlePath:"app/api/customer/locations/route"},resolvedPagePath:"D:\\next-app\\src\\app\\api\\customer\\locations\\route.js",nextConfigOutput:"",userland:o}),{requestAsyncStorage:g,staticGenerationAsyncStorage:h,serverHooks:v,headerHooks:S,staticGenerationBailout:w}=m,x="/api/customer/locations/route";function y(){return(0,n.patchFetch)({serverHooks:v,staticGenerationAsyncStorage:h})}},6526:(e,t,r)=>{r.d(t,{L:()=>s});let{username:o,password:a}=process.env,s="mongodb+srv://psingh:psinghmongo@user.rxyn8.mongodb.net/restoDB?retryWrites=true&w=majority&appName=Cluster0"},7342:(e,t,r)=>{r.d(t,{P:()=>s});let{default:o}=r(1185),a=new o.Schema({name:String,email:String,password:String,city:String,address:String,contact:String}),s=o.models.restaurants||o.model("restaurants",a)}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[638,206],()=>r(5299));module.exports=o})();