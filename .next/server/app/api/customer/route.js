"use strict";(()=>{var e={};e.id=191,e.ids=[191],e.modules={1185:e=>{e.exports=require("mongoose")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},3310:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>v,originalPathname:()=>S,patchFetch:()=>w,requestAsyncStorage:()=>m,routeModule:()=>g,serverHooks:()=>h,staticGenerationAsyncStorage:()=>x,staticGenerationBailout:()=>P});var a={};r.r(a),r.d(a,{GET:()=>d});var o=r(5419),n=r(9108),s=r(9678),i=r(6526),u=r(7342),c=r(1185),p=r.n(c),l=r(8070);async function d(e){let t=e.nextUrl.searchParams;console.log(t.get("location"));let r={};t.get("location")?r={city:{$regex:RegExp(t.get("location"),"i")}}:t.get("restaurant")&&(r={name:{$regex:RegExp(t.get("restaurant"),"i")}}),await p().connect(i.L,{useNewUrlParser:!0});let a=await u.P.find(r);return l.Z.json({success:!0,result:a})}let g=new o.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/customer/route",pathname:"/api/customer",filename:"route",bundlePath:"app/api/customer/route"},resolvedPagePath:"D:\\next-app\\src\\app\\api\\customer\\route.js",nextConfigOutput:"",userland:a}),{requestAsyncStorage:m,staticGenerationAsyncStorage:x,serverHooks:h,headerHooks:v,staticGenerationBailout:P}=g,S="/api/customer/route";function w(){return(0,s.patchFetch)({serverHooks:h,staticGenerationAsyncStorage:x})}},6526:(e,t,r)=>{r.d(t,{L:()=>n});let{username:a,password:o}=process.env,n="mongodb+srv://psingh:psinghmongo@user.rxyn8.mongodb.net/restoDB?retryWrites=true&w=majority&appName=Cluster0"},7342:(e,t,r)=>{r.d(t,{P:()=>n});let{default:a}=r(1185),o=new a.Schema({name:String,email:String,password:String,city:String,address:String,contact:String}),n=a.models.restaurants||a.model("restaurants",o)}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[638,206],()=>r(3310));module.exports=a})();