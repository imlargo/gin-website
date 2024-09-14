const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/ui-core.CoHY5Ls4.js","_astro/Tabs.astro_astro_type_script_index_0_lang.3nBd5krW.js"])))=>i.map(i=>d[i]);
import"./Tabs.astro_astro_type_script_index_0_lang.3nBd5krW.js";const S=document.getElementById("starlight__sidebar"),b=S?.querySelector("sl-sidebar-state-persist"),y="sl-sidebar-state",v=()=>{let n=[];const e=b?.dataset.hash||"";try{const t=sessionStorage.getItem(y),s=JSON.parse(t||"{}");Array.isArray(s.open)&&s.hash===e&&(n=s.open)}catch{}return{hash:e,open:n,scroll:S?.scrollTop||0}},L=n=>{try{sessionStorage.setItem(y,JSON.stringify(n))}catch{}},T=()=>L(v()),M=(n,e)=>{const t=v();t.open[e]=n,L(t)};b?.addEventListener("click",n=>{if(!(n.target instanceof Element))return;const e=n.target.closest("summary")?.closest("details");if(!e)return;const t=e.querySelector("sl-sidebar-restore"),s=parseInt(t?.dataset.index||"");isNaN(s)||M(!e.open,s)});addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&T()});addEventListener("pageHide",T);class H extends HTMLElement{constructor(){super();const e=this.querySelector("select");e&&e.addEventListener("change",t=>{t.currentTarget instanceof HTMLSelectElement&&this.querySelectorAll("[data-starlight-multi-sidebar-label]").forEach(r=>{r instanceof HTMLDivElement&&(r.dataset.starlightMultiSidebarLabel===e.value?r.hidden=!1:r.hidden=!0)})})}}customElements.define("starlight-multi-sidebar-select",H);class I extends HTMLElement{constructor(){super();const e=this.querySelector('[role="tablist"]');this.tabs=[...e.querySelectorAll('[role="tab"]')],this.panels=[...this.querySelectorAll(':scope > [role="tabpanel"]')],this.tabs.forEach((t,s)=>{t.addEventListener("click",r=>{r.preventDefault();const l=e.querySelector('[aria-selected="true"]');r.currentTarget!==l&&this.switchTab(r.currentTarget,s)}),t.addEventListener("keydown",r=>{const l=this.tabs.indexOf(r.currentTarget),o=r.key==="ArrowLeft"?l-1:r.key==="ArrowRight"?l+1:r.key==="Home"?0:r.key==="End"?this.tabs.length-1:null;o!==null&&this.tabs[o]&&(r.preventDefault(),this.switchTab(this.tabs[o],o))})})}switchTab(e,t){if(!e)return;this.tabs.forEach(r=>{r.setAttribute("aria-selected","false"),r.setAttribute("tabindex","-1")}),this.panels.forEach(r=>{r.hidden=!0});const s=this.panels[t];s&&(s.hidden=!1),e.removeAttribute("tabindex"),e.setAttribute("aria-selected","true")}}customElements.define("starlight-multi-sidebar-tabs",I);class A extends HTMLElement{constructor(){super();const e=this.querySelector("select");e&&e.addEventListener("change",t=>{t.currentTarget instanceof HTMLSelectElement&&(window.location.pathname=t.currentTarget.value)})}}customElements.define("starlight-lang-select",A);const C="modulepreload",_=function(n){return"/"+n},E={},P=function(e,t,s){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),d=o?.nonce||o?.getAttribute("nonce");r=Promise.allSettled(t.map(u=>{if(u=_(u),u in E)return;E[u]=!0;const i=u.endsWith(".css"),h=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${h}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":C,i||(c.as="script"),c.crossOrigin="",c.href=u,d&&c.setAttribute("nonce",d),document.head.appendChild(c),i)return new Promise((a,m)=>{c.addEventListener("load",a),c.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${u}`)))})}))}function l(o){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=o,window.dispatchEvent(d),!d.defaultPrevented)throw o}return r.then(o=>{for(const d of o||[])d.status==="rejected"&&l(d.reason);return e().catch(l)})};class O extends HTMLElement{constructor(){super();const e=this.querySelector("button[data-open-modal]"),t=this.querySelector("button[data-close-modal]"),s=this.querySelector("dialog"),r=this.querySelector(".dialog-frame"),l=a=>{("href"in(a.target||{})||document.body.contains(a.target)&&!r.contains(a.target))&&d()},o=a=>{s.showModal(),document.body.toggleAttribute("data-search-modal-open",!0),this.querySelector("input")?.focus(),a?.stopPropagation(),window.addEventListener("click",l)},d=()=>s.close();e.addEventListener("click",o),e.disabled=!1,t.addEventListener("click",d),s.addEventListener("close",()=>{document.body.toggleAttribute("data-search-modal-open",!1),window.removeEventListener("click",l)}),window.addEventListener("keydown",a=>{(a.metaKey===!0||a.ctrlKey===!0)&&a.key==="k"&&(s.open?d():o(),a.preventDefault())});let u={};try{u=JSON.parse(this.dataset.translations||"{}")}catch{}const c=this.dataset.stripTrailingSlash!==void 0?a=>a.replace(/(.)\/(#.*)?$/,"$1$2"):a=>a;window.addEventListener("DOMContentLoaded",()=>{(window.requestIdleCallback||(m=>setTimeout(m,1)))(async()=>{const{PagefindUI:m}=await P(async()=>{const{PagefindUI:g}=await import("./ui-core.CoHY5Ls4.js");return{PagefindUI:g}},__vite__mapDeps([0,1]));new m({element:"#starlight__search",baseUrl:"/",bundlePath:"/".replace(/\/$/,"")+"/pagefind/",showImages:!1,translations:u,showSubResults:!0,processResult:g=>{g.url=c(g.url),g.sub_results=g.sub_results.map(f=>(f.url=c(f.url),f))}})})})}}customElements.define("site-search",O);const w="starlight-theme",k=n=>n==="auto"||n==="dark"||n==="light"?n:"auto",x=()=>k(typeof localStorage<"u"&&localStorage.getItem(w));function R(n){typeof localStorage<"u"&&localStorage.setItem(w,n==="light"||n==="dark"?n:"")}const N=()=>matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";function p(n){StarlightThemeProvider.updatePickers(n),document.documentElement.dataset.theme=n==="auto"?N():n,R(n)}matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{x()==="auto"&&p("auto")});class $ extends HTMLElement{constructor(){super(),p(x()),this.querySelector("select")?.addEventListener("change",e=>{e.currentTarget instanceof HTMLSelectElement&&p(k(e.currentTarget.value))})}}customElements.define("starlight-theme-select",$);class B extends HTMLElement{constructor(){super(),this.btn=this.querySelector("button"),this.btn.addEventListener("click",()=>this.toggleExpanded());const e=this.closest("nav");e&&e.addEventListener("keyup",t=>this.closeOnEscape(t))}setExpanded(e){this.setAttribute("aria-expanded",String(e)),document.body.toggleAttribute("data-mobile-menu-expanded",e)}toggleExpanded(){this.setExpanded(this.getAttribute("aria-expanded")!=="true")}closeOnEscape(e){e.code==="Escape"&&(this.setExpanded(!1),this.btn.focus())}}customElements.define("starlight-menu-button",B);const D="_top";class q extends HTMLElement{constructor(){super(),this._current=this.querySelector('a[aria-current="true"]'),this.minH=parseInt(this.dataset.minH||"2",10),this.maxH=parseInt(this.dataset.maxH||"3",10),this.onIdle=e=>(window.requestIdleCallback||(t=>setTimeout(t,1)))(e),this.init=()=>{const e=[...this.querySelectorAll("a")],t=i=>{if(i instanceof HTMLHeadingElement){if(i.id===D)return!0;const h=i.tagName[1];if(h){const c=parseInt(h,10);if(c>=this.minH&&c<=this.maxH)return!0}}return!1},s=i=>{if(!i)return null;const h=i;for(;i;){if(t(i))return i;for(i=i.previousElementSibling;i?.lastElementChild;)i=i.lastElementChild;const c=s(i);if(c)return c}return s(h.parentElement)},r=i=>{for(const{isIntersecting:h,target:c}of i){if(!h)continue;const a=s(c);if(!a)continue;const m=e.find(g=>g.hash==="#"+encodeURIComponent(a.id));if(m){this.current=m;break}}},l=document.querySelectorAll("main [id], main [id] ~ *, main .content > *");let o;const d=()=>{o||(o=new IntersectionObserver(r,{rootMargin:this.getRootMargin()}),l.forEach(i=>o.observe(i)))};d();let u;window.addEventListener("resize",()=>{o&&o.disconnect(),clearTimeout(u),u=setTimeout(()=>this.onIdle(d),200)})},this.onIdle(()=>this.init())}set current(e){e!==this._current&&(this._current&&this._current.removeAttribute("aria-current"),e.setAttribute("aria-current","true"),this._current=e)}getRootMargin(){const e=document.querySelector("header")?.getBoundingClientRect().height||0,t=this.querySelector("summary")?.getBoundingClientRect().height||0,s=e+t+32,r=s+53,l=document.documentElement.clientHeight;return`-${s}px 0% ${r-l}px`}}customElements.define("starlight-toc",q);class U extends q{set current(e){super.current=e;const t=this.querySelector(".display-current");t&&(t.textContent=e.textContent)}constructor(){super();const e=this.querySelector("details");if(!e)return;const t=()=>{e.open=!1};e.querySelectorAll("a").forEach(s=>{s.addEventListener("click",t)}),window.addEventListener("click",s=>{e.contains(s.target)||t()}),window.addEventListener("keydown",s=>{if(s.key==="Escape"&&e.open){const r=e.contains(document.activeElement);if(t(),r){const l=e.querySelector("summary");l&&l.focus()}}})}}customElements.define("mobile-starlight-toc",U);export{P as _};
