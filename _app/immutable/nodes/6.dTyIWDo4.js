import{t as v,a as i}from"../chunks/D_dFxpY-.js";import"../chunks/Ck7iI1YT.js";import{p as J,t as c,a as K,s as x,c as s,r as t,n as M,g as e}from"../chunks/De42p0fj.js";import{s as l}from"../chunks/Y13opLmJ.js";import{i as C}from"../chunks/CHgs3ueJ.js";import{e as L,i as $,s as j}from"../chunks/Bc2JORvD.js";import{i as N}from"../chunks/DtbSN-lj.js";import{p as O}from"../chunks/DlT3oMlg.js";var P=v('<p class="text-gray-600"> </p>'),Q=v('<p class="text-gray-600"> </p>'),R=v('<a class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300 transition-colors"> </a>'),S=v('<div class="mt-2"></div>'),T=v('<li><a class="text-blue-500 hover:underline transition-colors duration-300"><h2 class="text-2xl"> </h2></a> <!> <p class="text-sm text-gray-500"> </p> <!></li>'),U=v('<div class="container mx-auto p-4"><h1 class="text-4xl font-bold mb-8"> </h1> <ul class="mt-4 space-y-4"></ul> <div class="mt-8"><a href="/blog/category" class="text-blue-500 hover:underline">&larr; Back to categories</a></div></div>');function ea(q,u){J(u,!1);let b=O(u,"data",8);N();var d=U(),g=s(d),w=s(g);t(g);var h=x(g,2);L(h,5,()=>b().posts,$,(z,o)=>{var f=T(),n=s(f),y=s(n),A=s(y,!0);t(y),t(n);var k=x(n,2);{var D=r=>{var a=P(),p=s(a);t(a),c(()=>l(p,`Link post – ${e(o).excerpt??""}`)),i(r,a)},E=r=>{var a=Q(),p=s(a,!0);t(a),c(()=>l(p,e(o).excerpt)),i(r,a)};C(k,r=>{e(o).type==="link"?r(D):r(E,!1)})}var _=x(k,2),F=s(_,!0);t(_);var G=x(_,2);{var H=r=>{var a=S();L(a,5,()=>e(o).tags,$,(p,B)=>{var m=R(),I=s(m);t(m),c(()=>{j(m,"href",`/blog/tag/${e(B)}`),l(I,`#${e(B)??""}`)}),i(p,m)}),t(a),i(r,a)};C(G,r=>{e(o).tags&&r(H)})}t(f),c(()=>{j(n,"href",`/blog/${e(o).slug}`),l(A,e(o).title),l(F,e(o).date)}),i(z,f)}),t(h),M(2),t(d),c(()=>l(w,`Category: ${b().category??""}`)),i(q,d),K()}export{ea as component};
