const t="stencil-starter-project-name";let e,n,s=0,r=!1,o=!1;const c=window,l=document,i={t:0,s:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,s)=>t.addEventListener(e,n,s),rel:(t,e,n,s)=>t.removeEventListener(e,n,s)},a=(()=>!!l.documentElement.attachShadow)(),f=(()=>{try{return new CSSStyleSheet,!0}catch(t){}return!1})(),u=new WeakMap,p=t=>u.get(t),m=(t,e)=>u.set(e.o=t,e),$=(t,e)=>e in t,d=t=>console.error(t),h=new Map,w=new Map,_=[],y=[],b=[],g=(t,e)=>n=>{t.push(n),r||(r=!0,e&&4&i.t?S(v):i.raf(v))},j=(t,e)=>{let n=0,s=0;for(;n<t.length&&(s=performance.now())<e;)try{t[n++](s)}catch(t){d(t)}n===t.length?t.length=0:0!==n&&t.splice(0,n)},v=()=>{s++,(t=>{for(let e=0;e<t.length;e++)try{t[e](performance.now())}catch(t){d(t)}t.length=0})(_);const t=2==(6&i.t)?performance.now()+10*Math.ceil(s*(1/22)):1/0;j(y,t),j(b,t),y.length>0&&(b.push(...y),y.length=0),(r=_.length+y.length+b.length>0)?i.raf(v):s=0},S=t=>Promise.resolve().then(t),M=g(y,!0),O={},L=t=>null!=t,R=t=>"object"==(t=typeof t)||"function"===t,U=()=>c.CSS&&c.CSS.supports&&c.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_stencil_starter_project_name("./p-67c1f911.js"),k=async()=>{const e=new RegExp(`/${t}(\\.esm)?\\.js($|\\?|#)`),n=Array.from(l.querySelectorAll("script")).find(n=>e.test(n.src)||n.getAttribute("data-stencil-namespace")===t),s=n["data-opts"];{const t=new URL(".",new URL(n.getAttribute("data-resources-url")||n.src,c.location.href));return C(t.href),window.customElements||await __sc_import_stencil_starter_project_name("./p-020f8d73.js"),Object.assign(Object.assign({},s),{resourcesUrl:t.href})}},C=e=>{const n=(t=>`__sc_import_${t.replace(/\s|-/g,"_")}`)(t);try{c[n]=new Function("w",`return import(w);//${Math.random()}`)}catch(t){const s=new Map;c[n]=t=>{const r=new URL(t,e).href;let o=s.get(r);if(!o){const t=l.createElement("script");t.type="module",t.src=URL.createObjectURL(new Blob([`import * as m from '${r}'; window.${n}.m = m;`],{type:"application/javascript"})),o=new Promise(e=>{t.onload=()=>{e(c[n].m),t.remove()}}),s.set(r,o),l.head.appendChild(t)}return o}}},E=new WeakMap,x=t=>"sc-"+t,P=(t,e,...n)=>{let s=null,r=!1,o=!1,c=[];const l=e=>{for(let n=0;n<e.length;n++)s=e[n],Array.isArray(s)?l(s):null!=s&&"boolean"!=typeof s&&((r="function"!=typeof t&&!R(s))&&(s=String(s)),r&&o?c[c.length-1].l+=s:c.push(r?{t:0,l:s}:s),o=r)};if(l(n),e){const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter(e=>t[e]).join(" "))}return{t:0,i:t,u:c.length>0?c:null,p:void 0,$:e}},T={},A=(t,e,n,s,r,o)=>{if(n===s)return;let c=$(t,e),l=e.toLowerCase();if("class"===e){const e=t.classList;F(n).forEach(t=>e.remove(t)),F(s).forEach(t=>e.add(t))}else if("ref"===e)s&&s(t);else if(c||"o"!==e[0]||"n"!==e[1]){const l=R(s);if((c||l&&null!==s)&&!r)try{if(t.tagName.includes("-"))t[e]=s;else{let r=null==s?"":s;null!=n&&t[e]===(r=String(r))||(t[e]=r)}}catch(t){}null==s||!1===s?t.removeAttribute(e):(!c||4&o||r)&&!l&&t.setAttribute(e,s=!0===s?"":s)}else e="-"===e[2]?e.substr(3):$(t,l)?l.substr(2):l[2]+e.substr(3),n&&i.rel(t,e,n,!1),s&&i.ael(t,e,s,!1)},F=t=>t?t.split(/\s+/).filter(t=>t):[],W=(t,e,n,s)=>{const r=11===e.p.nodeType&&e.p.host?e.p.host:e.p,o=t&&t.$||O,c=e.$||O;for(s in o)s in c||A(r,s,o[s],void 0,n,e.t);for(s in c)A(r,s,o[s],c[s],n,e.t)},H=(t,n,s)=>{let r,c,i=n.u[s],a=0;if(L(i.l))i.p=l.createTextNode(i.l);else{if(r=i.p=o||"svg"===i.i?l.createElementNS("http://www.w3.org/2000/svg",i.i):l.createElement(i.i),W(null,i,o="svg"===i.i||"foreignObject"!==i.i&&o),L(e)&&r["s-si"]!==e&&r.classList.add(r["s-si"]=e),i.u)for(a=0;a<i.u.length;++a)(c=H(t,i,a))&&r.appendChild(c);"svg"===i.i?o=!1:"foreignObject"===i.p.tagName&&(o=!0)}return i.p},q=(t,e,s,r,o,c)=>{let l,i=t;for(i.shadowRoot&&i.tagName===n&&(i=i.shadowRoot);o<=c;++o)r[o]&&(l=H(null,s,o))&&(r[o].p=l,i.insertBefore(l,e))},B=(t,e,n,s)=>{for(;e<=n;++e)L(t[e])&&(s=t[e].p,V(t[e],!0),s.remove())},D=(t,e)=>t.i===e.i,N=(t,e)=>{const n=e.p=t.p,s=t.u,r=e.u;o=n&&L(n.parentNode)&&void 0!==n.ownerSVGElement,o="svg"===e.i||"foreignObject"!==e.i&&o,L(e.l)?t.l!==e.l&&(n.textContent=e.l):(W(t,e,o),L(s)&&L(r)?((t,e,n,s)=>{let r,o=0,c=0,l=e.length-1,i=e[0],a=e[l],f=s.length-1,u=s[0],p=s[f];for(;o<=l&&c<=f;)null==i?i=e[++o]:null==a?a=e[--l]:null==u?u=s[++c]:null==p?p=s[--f]:D(i,u)?(N(i,u),i=e[++o],u=s[++c]):D(a,p)?(N(a,p),a=e[--l],p=s[--f]):D(i,p)?(N(i,p),t.insertBefore(i.p,a.p.nextSibling),i=e[++o],p=s[--f]):D(a,u)?(N(a,u),t.insertBefore(a.p,i.p),a=e[--l],u=s[++c]):(r=H(e&&e[c],n,c),u=s[++c],r&&i.p.parentNode.insertBefore(r,i.p));o>l?q(t,null==s[f+1]?null:s[f+1].p,n,s,c,f):c>f&&B(e,o,l)})(n,s,e,r):L(r)?(L(t.l)&&(n.textContent=""),q(n,null,e,r,0,r.length-1)):L(s)&&B(s,0,s.length-1)),o&&"svg"===e.i&&(o=!1)},V=(t,e)=>{t&&(t.$&&t.$.ref&&t.$.ref(e?null:t.p),t.u&&t.u.forEach(t=>{V(t,e)}))},z=(t,e,n,s)=>{e.t|=16;const r=e.o,o=()=>G(t,e,n,r,s);let c;return s&&(e.t|=256,e.h&&(e.h.forEach(([t,e])=>K(r,t,e)),e.h=null),c=K(r,"componentWillLoad")),Q(c,()=>M(o))},G=(t,s,r,o,c)=>{s.t&=-17,t["s-lr"]=!1,c&&((t,e)=>{const n=((t,e)=>{let n=x(e._),s=w.get(n);if(t=11===t.nodeType?t:l,s)if("string"==typeof s){let e,r=E.get(t=t.head||t);r||E.set(t,r=new Set),r.has(n)||((e=l.createElement("style")).innerHTML=s,t.insertBefore(e,t.querySelector("link")),r&&r.add(n))}else t.adoptedStyleSheets.includes(s)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,s]);return n})(a&&t.shadowRoot?t.shadowRoot:t.getRootNode(),e);10&e.t&&(t["s-sc"]=n,t.classList.add(n+"-h"))})(t,r),s.t|=4;try{((t,s,r,o)=>{n=t.tagName;const c=s.g||{t:0},l=(t=>t&&t.i===T)(o)?o:P(null,null,o);l.i=null,l.t|=4,s.g=l,l.p=c.p=t.shadowRoot||t,e=t["s-sc"],N(c,l)})(t,s,0,o.render())}catch(t){d(t)}s.t&=-5,t["s-lr"]=!0,s.t|=2,t["s-rc"].length>0&&(t["s-rc"].forEach(t=>t()),t["s-rc"].length=0),I(t,s)},I=(t,e,n)=>{if(!t["s-al"]){const s=e.o,r=e.j;64&e.t||(e.t|=64,t.classList.add("hydrated"),K(s,"componentDidLoad"),e.v(t),r||J()),r&&((n=r["s-al"])&&(n.delete(t),0===n.size&&(r["s-al"]=void 0,r["s-init"]())),e.j=void 0)}},J=()=>{l.documentElement.classList.add("hydrated"),i.t|=2},K=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(t){d(t)}},Q=(t,e)=>t&&t.then?t.then(e):e(),X=(t,e,n)=>{if(e.S){t.watchers&&(e.M=t.watchers);const s=Object.entries(e.S),r=t.prototype;if(s.forEach(([t,[s]])=>{(31&s||2&n&&32&s)&&Object.defineProperty(r,t,{get(){return((t,e)=>p(t).O.get(e))(this,t)},set(n){((t,e,n,s)=>{const r=p(this),o=r.L,c=r.O.get(e),l=r.t,i=r.o;if(!((n=((t,e)=>null==t||R(t)?t:2&e?parseFloat(t):1&e?String(t):t)(n,s.S[e][0]))===c||8&l&&void 0!==c)&&(r.O.set(e,n),i)){if(s.M&&128&l){const t=s.M[e];t&&t.forEach(t=>{try{i[t](n,c,e)}catch(t){d(t)}})}2==(22&l)&&z(o,r,s,!1)}})(0,t,n,e)},configurable:!0,enumerable:!0})}),1&n){const e=new Map;r.attributeChangedCallback=function(t,n,s){i.jmp(()=>{const n=e.get(t);this[n]=(null!==s||"boolean"!=typeof this[n])&&s})},t.observedAttributes=s.filter(([t,e])=>15&e[0]).map(([t,n])=>{const s=n[1]||t;return e.set(s,t),s})}}return t},Y=(t,e={})=>{const n=[],s=e.exclude||[],r=l.head,o=c.customElements,m=r.querySelector("meta[charset]"),$=l.createElement("style");let _;Object.assign(i,e),i.s=new URL(e.resourcesUrl||"./",l.baseURI).href,e.syncQueue&&(i.t|=4),t.forEach(t=>t[1].forEach(e=>{const r={t:e[0],_:e[1],S:e[2],R:e[3],M:{}};!a&&1&r.t&&(r.t|=8);const c=r._;HTMLElement,r.U=t[0],s.includes(c)||o.get(c)||(n.push(c),o.define(c,X(class extends HTMLElement{constructor(t){super(t),t=this,this["s-lr"]=!1,this["s-rc"]=[],(t=>{{const e={t:0,L:t,O:new Map};e.k=new Promise(t=>e.v=t),u.set(t,e)}})(t),1&r.t&&(a?t.attachShadow({mode:"open"}):"shadowRoot"in t||(t.shadowRoot=t))}connectedCallback(){_&&(clearTimeout(_),_=null),i.jmp(()=>((t,e)=>{if(0==(1&i.t)){const n=p(t);if(e.R&&(n.C=((t,e,n)=>{e.h=e.h||[];const s=n.map(([n,s,r])=>{const o=t,c=((t,e)=>n=>{256&t.t?t.o[e](n):t.h.push([e,n])})(e,r),l=(t=>({passive:0!=(1&t),capture:0!=(2&t)}))(n);return i.ael(o,s,c,l),()=>i.rel(o,s,c,l)});return()=>s.forEach(t=>t())})(t,n,e.R)),!(1&n.t)){n.t|=1;{let e=t;for(;e=e.parentNode||e.host;)if(e["s-init"]&&!1===e["s-lr"]){n.j=e,(e["s-al"]=e["s-al"]||new Set).add(t);break}}e.S&&Object.entries(e.S).forEach(([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}}),S(()=>(async(t,e,n,s,r)=>{if(0==(32&e.t)){e.t|=32,(r=(t=>{const e=t._.replace(/-/g,"_"),n=t.U,s=h.get(n);return s?s[e]:__sc_import_stencil_starter_project_name(`./${n}.entry.js`).then(t=>(h.set(n,t),t[e]),d)})(n)).then&&(r=await r),r.isProxied||(n.M=r.watchers,X(r,n,2),r.isProxied=!0),e.t|=8;try{new r(e)}catch(t){d(t)}e.t&=-9,e.t|=128;const t=x(n._);if(!w.has(t)&&r.style){let e=r.style;8&n.t&&(e=await __sc_import_stencil_starter_project_name("./p-affe7c09.js").then(n=>n.scopeCss(e,t,!1))),((t,e,n)=>{let s=w.get(t);f&&n?(s=s||new CSSStyleSheet).replace(e):s=e,w.set(t,s)})(t,e,!!(1&n.t))}}const o=e.j,c=()=>z(t,e,n,!0);o&&!1===o["s-lr"]&&o["s-rc"]?o["s-rc"].push(c):c()})(t,n,e))}}})(this,r))}disconnectedCallback(){i.jmp(()=>(()=>{if(0==(1&i.t)){const t=p(this);t.C&&(t.C(),t.C=void 0)}})())}"s-init"(){const t=p(this);t.o&&I(this,t)}"s-hmr"(t){}forceUpdate(){((t,e)=>{{const n=p(t);2&n.t&&z(t,n,e,!1)}})(this,r)}componentOnReady(){return p(this).k}},r,1)))})),$.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",$.setAttribute("data-styles",""),r.insertBefore($,m?m.nextSibling:r.firstChild),i.jmp(()=>_=setTimeout(J,30))},Z=(t,e,n)=>{const s=tt(t);return{emit:t=>s.dispatchEvent(new CustomEvent(e,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:t}))}},tt=t=>p(t).L;export{U as a,Y as b,Z as c,tt as g,P as h,k as p,m as r};