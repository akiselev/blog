import{b as N,d as ee,t as m,a as d}from"../chunks/D_dFxpY-.js";import"../chunks/Ck7iI1YT.js";import{b as ae,h as q,d as H,e as te,Y as se,i as Y,$ as ne,ar as oe,as as ie,k as re,K as le,p as V,s as g,c as i,t as S,a as Z,r as e,n as P,g as $,G as Q,at as pe}from"../chunks/De42p0fj.js";import{p as C,l as W,s as G}from"../chunks/DlT3oMlg.js";import{s as w,h as ce}from"../chunks/Y13opLmJ.js";import{i as K}from"../chunks/CHgs3ueJ.js";import{e as O,s as T,i as E}from"../chunks/Bc2JORvD.js";import{s as ue}from"../chunks/D9GJoL_G.js";import{i as X}from"../chunks/DtbSN-lj.js";import{c as de}from"../chunks/jmkIVcaA.js";function I(c,s,n,k,_){var o=c,t="",l;ae(()=>{if(t===(t=s()??"")){q&&H();return}l!==void 0&&(se(l),l=void 0),t!==""&&(l=te(()=>{if(q){Y.data;for(var a=H(),v=a;a!==null&&(a.nodeType!==8||a.data!=="");)v=a,a=ne(a);if(a===null)throw oe(),ie;N(Y,v),o=re(a);return}var x=t+"",y=ee(x);N(le(y),y.lastChild),o.before(y)}))})}var me=m('<a class="mr-2 text-blue-500 hover:underline"> </a>'),ve=m('<div class="mt-2"></div>'),he=m('<a class="mr-2 text-blue-500 hover:underline"> </a>'),ge=m('<div class="mt-2"></div>'),fe=m('<article class="container mx-auto p-4"><header><h1 class="text-4xl font-bold"> </h1> <p class="text-sm text-gray-500"> </p> <!> <!></header> <section class="mt-4 prose prose-lg"><!></section> <div class="mt-8"><a href="/blog" class="text-blue-500 hover:underline">&larr; Back to all posts</a></div></article>');function L(c,s){V(s,!1);let n=C(s,"title",8),k=C(s,"date",8),_=C(s,"tags",24,()=>[]),o=C(s,"categories",24,()=>[]);X();var t=fe(),l=i(t),a=i(l),v=i(a,!0);e(a);var x=g(a,2),y=i(x,!0);e(x);var z=g(x,2);{var D=r=>{var f=ve();O(f,5,_,E,(b,p)=>{var u=me(),B=i(u);e(u),S(()=>{T(u,"href",`/blog/tag/${$(p)}`),w(B,`#${$(p)??""}`)}),d(b,u)}),e(f),d(r,f)};K(z,r=>{_()&&_().length>0&&r(D)})}var R=g(z,2);{var j=r=>{var f=ge();O(f,5,o,E,(b,p)=>{var u=he(),B=i(u,!0);e(u),S(()=>{T(u,"href",`/blog/category/${$(p)}`),w(B,$(p))}),d(b,u)}),e(f),d(r,f)};K(R,r=>{o()&&o().length>0&&r(j)})}e(l);var U=g(l,2),h=i(U);ue(h,s,"default",{}),e(U),P(2),e(t),S(()=>{w(v,n()),w(y,k())}),d(c,t),Z()}const M={title:"Clean Code Principles Every Developer Should Know",date:"2024-03-19",tags:["clean-code","best-practices","programming"],categories:["programming"],excerpt:"Essential principles for writing maintainable and readable code",published:!0},{title:Ae,date:Fe,tags:Ne,categories:qe,excerpt:He,published:Ye}=M;var ke=m('<h1>Clean Code Principles Every Developer Should Know</h1> <p>Writing clean code is an essential skill for any developer. Let’s explore the key principles that will help you write better, more maintainable code.</p> <h2>The Importance of Clean Code</h2> <p>Clean code is:</p> <ul><li>Easier to maintain</li> <li>Easier to understand</li> <li>Easier to test</li> <li>More cost-effective in the long run</li></ul> <h2>Naming Conventions</h2> <p>Good naming is crucial:</p> <pre class="language-javascript"><!></pre> <h2>Single Responsibility Principle</h2> <p>Each function or class should do one thing and do it well:</p> <pre class="language-javascript"><!></pre> <h2>Code Comments</h2> <p>Write self-documenting code, but when you need comments:</p> <ul><li>Explain why, not what</li> <li>Keep them current</li> <li>Use them for complex business logic</li></ul> <p>Remember: The best code is code that doesn’t need comments to be understood.</p>',1);function _e(c,s){const n=W(s,["children","$$slots","$$events","$$legacy"]);L(c,G(()=>n,M,{children:(k,_)=>{var o=ke(),t=g(Q(o),14),l=i(t);I(l,()=>`<code class="language-javascript"><span class="token comment">// Bad</span>
<span class="token keyword">const</span> x <span class="token operator">=</span> users<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">u</span> <span class="token operator">=></span> u<span class="token punctuation">.</span>a <span class="token operator">></span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Good</span>
<span class="token keyword">const</span> adults <span class="token operator">=</span> users<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">user</span> <span class="token operator">=></span> user<span class="token punctuation">.</span>age <span class="token operator">></span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`),e(t);var a=g(t,6),v=i(a);I(v,()=>`<code class="language-javascript"><span class="token comment">// Bad</span>
<span class="token keyword">function</span> <span class="token function">saveUser</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token function">validateUser</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">formatUserData</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">saveToDatabase</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">sendEmail</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">// Good</span>
<span class="token keyword">function</span> <span class="token function">saveUser</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> validUser <span class="token operator">=</span> <span class="token function">validateUser</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> formattedUser <span class="token operator">=</span> <span class="token function">formatUserData</span><span class="token punctuation">(</span>validUser<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> savedUser <span class="token operator">=</span> <span class="token function">saveToDatabase</span><span class="token punctuation">(</span>formattedUser<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> savedUser<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`),e(a),P(8),d(k,o)},$$slots:{default:!0}}))}const be=Object.freeze(Object.defineProperty({__proto__:null,default:_e,metadata:M},Symbol.toStringTag,{value:"Module"})),A={title:"Getting Started with SvelteKit",date:"2024-03-19",tags:["svelte","sveltekit","web-development"],categories:["tutorials"],excerpt:"A beginner's guide to building web applications with SvelteKit",published:!0,layout:"blog"},{title:Je,date:Ve,tags:Ze,categories:Qe,excerpt:Xe,published:ea,layout:aa}=A;var ye=m('<h1>Getting Started with SvelteKit</h1> <p>SvelteKit is a powerful framework for building web applications. In this post, we’ll explore the basics of getting started with SvelteKit and why it might be the right choice for your next project.</p> <h2>Why SvelteKit?</h2> <p>SvelteKit combines the power of Svelte with a full-featured application framework. Here are some key benefits:</p> <ul><li>Zero-config deployment to various platforms</li> <li>Excellent developer experience</li> <li>Built-in routing and layouts</li> <li>Server-side rendering out of the box</li></ul> <h2>Setting Up Your First Project</h2> <p>To create a new SvelteKit project, run:</p> <pre class="language-bash"><!></pre> <h2>Basic Project Structure</h2> <p>A typical SvelteKit project has the following structure:</p> <pre class="language-undefined"><!></pre> <h2>Next Steps</h2> <p>In future posts, we’ll dive deeper into:</p> <ul><li>Route parameters and dynamic routes</li> <li>Data loading with load functions</li> <li>Server-side rendering vs client-side rendering</li> <li>Deployment strategies</li></ul> <p>Stay tuned for more SvelteKit tutorials!</p>',1);function $e(c,s){const n=W(s,["children","$$slots","$$events","$$legacy"]);L(c,G(()=>n,A,{children:(k,_)=>{var o=ye(),t=g(Q(o),14),l=i(t);I(l,()=>`<code class="language-bash"><span class="token function">npm</span> create svelte@latest my-app
<span class="token builtin class-name">cd</span> my-app
<span class="token function">npm</span> <span class="token function">install</span></code>`),e(t);var a=g(t,6),v=i(a);I(v,()=>`<code class="language-undefined">my-app/
├── src/
│   ├── routes/
│   │   └── +page.svelte
│   ├── lib/
│   └── app.html
├── static/
└── package.json</code>`),e(a),P(8),d(k,o)},$$slots:{default:!0}}))}const we=Object.freeze(Object.defineProperty({__proto__:null,default:$e,metadata:A},Symbol.toStringTag,{value:"Module"})),F={title:"Essential Web Performance Optimization Techniques",date:"2024-03-19",tags:["performance","web-development","optimization"],categories:["technical"],excerpt:"Learn key strategies to improve your website's performance and user experience",published:!0},{title:ta,date:sa,tags:na,categories:oa,excerpt:ia,published:ra}=F;var xe=m("<h1>Essential Web Performance Optimization Techniques</h1> <p>Web performance is crucial for user experience and SEO. In this post, we’ll explore essential techniques to optimize your website’s performance.</p> <h2>Key Performance Metrics</h2> <p>Understanding these metrics is the first step:</p> <ul><li>First Contentful Paint (FCP)</li> <li>Largest Contentful Paint (LCP)</li> <li>Time to Interactive (TTI)</li> <li>Cumulative Layout Shift (CLS)</li></ul> <h2>Image Optimization</h2> <p>Images often account for the largest portion of webpage size. Here are key optimization strategies:</p> <ol><li>Use modern formats (WebP, AVIF)</li> <li>Implement lazy loading</li> <li>Serve responsive images</li> <li>Optimize compression</li></ol> <h2>Code Optimization</h2> <p>Keep your JavaScript and CSS lean:</p> <ul><li>Remove unused code</li> <li>Minify and compress</li> <li>Implement code splitting</li> <li>Use tree shaking</li></ul> <h2>Caching Strategies</h2> <p>Implement effective caching:</p> <ul><li>Browser caching</li> <li>Service workers</li> <li>CDN caching</li> <li>API response caching</li></ul> <p>Remember, performance optimization is an ongoing process. Regular monitoring and testing are essential for maintaining optimal performance.</p>",1);function Se(c,s){const n=W(s,["children","$$slots","$$events","$$legacy"]);L(c,G(()=>n,F,{children:(k,_)=>{var o=xe();P(28),d(k,o)},$$slots:{default:!0}}))}const Ce=Object.freeze(Object.defineProperty({__proto__:null,default:Se,metadata:F},Symbol.toStringTag,{value:"Module"})),J=Object.assign({"../posts/clean-code-principles.md":be,"../posts/getting-started-with-sveltekit.md":we,"../posts/web-performance-optimization.md":Ce});function Pe(c){const s=Object.keys(J).find(n=>n.split("/").pop().slice(0,-3)===c);return J[s]}var ze=m('<a class="mr-2 text-blue-500 hover:underline"> </a>'),je=m('<div class="mt-2"></div>'),Ue=m('<a class="mr-2 text-blue-500 hover:underline"> </a>'),Ke=m('<div class="mt-2"></div>'),Oe=m('<article class="container mx-auto p-4"><header><h1 class="text-4xl font-bold"> </h1> <p class="text-sm text-gray-500"> </p> <!> <!></header> <section class="mt-4 prose prose-lg"><!></section> <div class="mt-8"><a href="/blog" class="text-blue-500 hover:underline">&larr; Back to all posts</a></div></article>');function la(c,s){V(s,!1);let n=C(s,"data",8);const _=Pe(n().slug).default;X();var o=Oe();ce(h=>{S(()=>pe.title=n().title)});var t=i(o),l=i(t),a=i(l,!0);e(l);var v=g(l,2),x=i(v,!0);e(v);var y=g(v,2);{var z=h=>{var r=je();O(r,5,()=>n().tags,E,(f,b)=>{var p=ze(),u=i(p);e(p),S(()=>{T(p,"href",`/blog/tag/${$(b)}`),w(u,`#${$(b)??""}`)}),d(f,p)}),e(r),d(h,r)};K(y,h=>{n().tags&&h(z)})}var D=g(y,2);{var R=h=>{var r=Ke();O(r,5,()=>n().categories,E,(f,b)=>{var p=Ue(),u=i(p,!0);e(p),S(()=>{T(p,"href",`/blog/category/${$(b)}`),w(u,$(b))}),d(f,p)}),e(r),d(h,r)};K(D,h=>{n().categories&&h(R)})}e(t);var j=g(t,2),U=i(j);de(U,()=>_,(h,r)=>{r(h,{})}),e(j),P(2),e(o),S(()=>{w(a,n().title),w(x,n().date)}),d(c,o),Z()}export{la as component};
