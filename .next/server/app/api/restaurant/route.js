"use strict";(()=>{var e={};e.id=873,e.ids=[873],e.modules={1185:e=>{e.exports=require("mongoose")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},2232:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>v,originalPathname:()=>S,patchFetch:()=>x,requestAsyncStorage:()=>w,routeModule:()=>g,serverHooks:()=>h,staticGenerationAsyncStorage:()=>P,staticGenerationBailout:()=>f});var a={};r.r(a),r.d(a,{GET:()=>c,POST:()=>m});var n=r(5419),s=r(9108),o=r(9678),i=r(6526),u=r(7342),p=r(1185),d=r.n(p),l=r(8070);async function c(){await d().connect(i.L,{useNewUrlParser:!0});let e=await u.P.find();return console.log(e),l.Z.json({result:e})}async function m(e){let t,r=await e.json(),a=!1;if(await d().connect(i.L,{useNewUrlParser:!0}),r.login)(t=await u.P.findOne({email:r.email,password:r.password}))&&(a=!0);else{let e=new u.P(r);(t=await e.save())&&(a=!0)}return l.Z.json({result:t,success:a})}let g=new n.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/restaurant/route",pathname:"/api/restaurant",filename:"route",bundlePath:"app/api/restaurant/route"},resolvedPagePath:"D:\\next-app\\src\\app\\api\\restaurant\\route.js",nextConfigOutput:"",userland:a}),{requestAsyncStorage:w,staticGenerationAsyncStorage:P,serverHooks:h,headerHooks:v,staticGenerationBailout:f}=g,S="/api/restaurant/route";function x(){return(0,o.patchFetch)({serverHooks:h,staticGenerationAsyncStorage:P})}},6526:(e,t,r)=>{r.d(t,{L:()=>s});let{username:a,password:n}=process.env,s="mongodb+srv://psingh:psinghmongo@user.rxyn8.mongodb.net/restoDB?retryWrites=true&w=majority&appName=Cluster0"},7342:(e,t,r)=>{r.d(t,{P:()=>s});let{default:a}=r(1185),n=new a.Schema({name:String,email:String,password:String,city:String,address:String,contact:String}),s=a.models.restaurants||a.model("restaurants",n)}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[638,206],()=>r(2232));module.exports=a})();