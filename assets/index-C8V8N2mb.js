(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Th=!1;var Nc=Array.isArray,$p=Array.prototype.indexOf,Fc=Array.from,no=Object.defineProperty,ks=Object.getOwnPropertyDescriptor,bh=Object.getOwnPropertyDescriptors,Zp=Object.prototype,Kp=Array.prototype,Oc=Object.getPrototypeOf,zu=Object.isExtensible;function jp(i){return typeof i=="function"}const Ln=()=>{};function Jp(i){return i()}function bl(i){for(var e=0;e<i.length;e++)i[e]()}function Qp(){var i,e,t=new Promise((n,r)=>{i=n,e=r});return{promise:t,resolve:i,reject:e}}const mn=2,Bc=4,Mo=8,Ss=16,vi=32,Tr=64,wh=128,An=256,io=512,It=1024,Rn=2048,xi=4096,Nn=8192,Es=16384,So=32768,Eo=65536,ku=1<<17,em=1<<18,zc=1<<19,kc=1<<20,wl=1<<21,Hc=1<<22,hr=1<<23,Qr=Symbol("$state"),Vc=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"};function tm(){throw new Error("https://svelte.dev/e/await_outside_boundary")}function Ah(i){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function nm(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function im(i){throw new Error("https://svelte.dev/e/effect_in_teardown")}function rm(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function sm(i){throw new Error("https://svelte.dev/e/effect_orphan")}function am(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function om(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function lm(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function cm(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}const yo=1,To=2,Rh=4,um=8,fm=16,hm=4,dm=1,pm=2,Lt=Symbol(),mm="http://www.w3.org/1999/xhtml";let _m=!1;function Ch(i){return i===this.v}function Ph(i,e){return i!=i?e==e:i!==e||i!==null&&typeof i=="object"||typeof i=="function"}function Dh(i){return!Ph(i,this.v)}let fa=!1,gm=!1;function vm(){fa=!0}let pt=null;function ro(i){pt=i}function Gc(i,e=!1,t){pt={p:pt,c:null,e:null,s:i,x:null,l:fa&&!e?{s:null,u:null,$:[]}:null}}function Wc(i){var e=pt,t=e.e;if(t!==null){e.e=null;for(var n of t)Xh(n)}return pt=e.p,{}}function ha(){return!fa||pt!==null&&pt.l===null}const xm=new WeakMap;function Mm(i){var e=He;if(e===null)return Xe.f|=hr,i;if((e.f&So)===0){if((e.f&wh)===0)throw!e.parent&&i instanceof Error&&Lh(i),i;e.b.error(i)}else Xc(i,e)}function Xc(i,e){for(;e!==null;){if((e.f&wh)!==0)try{e.b.error(i);return}catch(t){i=t}e=e.parent}throw i instanceof Error&&Lh(i),i}function Lh(i){const e=xm.get(i);e&&(no(i,"message",{value:e.message}),no(i,"stack",{value:e.stack}))}let so=[];function Sm(){var i=so;so=[],bl(i)}function bo(i){so.length===0&&queueMicrotask(Sm),so.push(i)}function Em(){for(var i=He.b;i!==null&&!i.has_pending_snippet();)i=i.parent;return i===null&&tm(),i}function qc(i){var e=mn|Rn,t=Xe!==null&&(Xe.f&mn)!==0?Xe:null;return He===null||t!==null&&(t.f&An)!==0?e|=An:He.f|=zc,{ctx:pt,deps:null,effects:null,equals:Ch,f:e,fn:i,reactions:null,rv:0,v:Lt,wv:0,parent:t??He,ac:null}}function ym(i,e){let t=He;t===null&&nm();var n=t.b,r=void 0,s=$s(Lt),a=null,o=!Xe;return Nm(()=>{try{var l=i()}catch(d){l=Promise.reject(d)}var c=()=>l;r=a?.then(c,c)??Promise.resolve(l),a=r;var u=yt,f=n.pending;o&&(n.update_pending_count(1),f||u.increment());const h=(d,g=void 0)=>{a=null,f||u.activate(),g?g!==Vc&&(s.f|=hr,Zs(s,g)):((s.f&hr)!==0&&(s.f^=hr),Zs(s,d)),o&&(n.update_pending_count(-1),f||u.decrement()),Fh()};if(r.then(h,d=>h(null,d||"unknown")),u)return()=>{queueMicrotask(()=>u.neuter())}}),new Promise(l=>{function c(u){function f(){u===r?l(s):c(r)}u.then(f,f)}c(r)})}function Ih(i){const e=qc(i);return e.equals=Dh,e}function Uh(i){var e=i.effects;if(e!==null){i.effects=null;for(var t=0;t<e.length;t+=1)mi(e[t])}}function Tm(i){for(var e=i.parent;e!==null;){if((e.f&mn)===0)return e;e=e.parent}return null}function Yc(i){var e,t=He;Hi(Tm(i));try{Uh(i),e=id(i)}finally{Hi(t)}return e}function Nh(i){var e=Yc(i);if(i.equals(e)||(i.v=e,i.wv=td()),!ys)if(ls!==null)ls.set(i,i.v);else{var t=(Li||(i.f&An)!==0)&&i.deps!==null?xi:It;Zt(i,t)}}function bm(i,e,t){const n=ha()?qc:Ih;if(e.length===0){t(i.map(n));return}var r=yt,s=He,a=wm(),o=Em();Promise.all(e.map(l=>ym(l))).then(l=>{r?.activate(),a();try{t([...i.map(n),...l])}catch(c){(s.f&Es)===0&&Xc(c,s)}r?.deactivate(),Fh()}).catch(l=>{o.error(l)})}function wm(){var i=He,e=Xe,t=pt;return function(){Hi(i),Yn(e),ro(t)}}function Fh(){Hi(null),Yn(null),ro(null)}const Cs=new Set;let yt=null,ls=null,Hu=new Set,ao=[];function Oh(){const i=ao.shift();ao.length>0&&queueMicrotask(Oh),i()}let Ys=[],$c=null,Al=!1;class cs{current=new Map;#r=new Map;#s=new Set;#e=0;#c=null;#u=!1;#n=[];#a=[];#i=[];#t=[];#o=[];#f=[];#h=[];skipped_effects=new Set;process(e){Ys=[];var t=null;if(Cs.size>1){t=new Map,ls=new Map;for(const[s,a]of this.current)t.set(s,{v:s.v,wv:s.wv}),s.v=a;for(const s of Cs)if(s!==this)for(const[a,o]of s.#r)t.has(a)||(t.set(a,{v:a.v,wv:a.wv}),a.v=o)}for(const s of e)this.#p(s);if(this.#n.length===0&&this.#e===0){this.#d();var n=this.#i,r=this.#t;this.#i=[],this.#t=[],this.#o=[],yt=null,Vu(n),Vu(r),yt===null?yt=this:Cs.delete(this),this.#c?.resolve()}else this.#l(this.#i),this.#l(this.#t),this.#l(this.#o);if(t){for(const[s,{v:a,wv:o}]of t)s.wv<=o&&(s.v=a);ls=null}for(const s of this.#n)ts(s);for(const s of this.#a)ts(s);this.#n=[],this.#a=[]}#p(e){e.f^=It;for(var t=e.first;t!==null;){var n=t.f,r=(n&(vi|Tr))!==0,s=r&&(n&It)!==0,a=s||(n&Nn)!==0||this.skipped_effects.has(t);if(!a&&t.fn!==null){if(r)t.f^=It;else if((n&It)===0)if((n&Bc)!==0)this.#t.push(t);else if((n&Hc)!==0){var o=t.b?.pending?this.#a:this.#n;o.push(t)}else pa(t)&&((t.f&Ss)!==0&&this.#o.push(t),ts(t));var l=t.first;if(l!==null){t=l;continue}}var c=t.parent;for(t=t.next;t===null&&c!==null;)t=c.next,c=c.parent}}#l(e){for(const t of e)((t.f&Rn)!==0?this.#f:this.#h).push(t),Zt(t,It);e.length=0}capture(e,t){this.#r.has(e)||this.#r.set(e,t),this.current.set(e,e.v)}activate(){yt=this}deactivate(){yt=null;for(const e of Hu)if(Hu.delete(e),e(),yt!==null)break}neuter(){this.#u=!0}flush(){Ys.length>0?Am():this.#d(),yt===this&&(this.#e===0&&Cs.delete(this),this.deactivate())}#d(){if(!this.#u)for(const e of this.#s)e();this.#s.clear()}increment(){this.#e+=1}decrement(){if(this.#e-=1,this.#e===0){for(const e of this.#f)Zt(e,Rn),Mr(e);for(const e of this.#h)Zt(e,xi),Mr(e);this.#i=[],this.#t=[],this.flush()}else this.deactivate()}add_callback(e){this.#s.add(e)}settled(){return(this.#c??=Qp()).promise}static ensure(){if(yt===null){const e=yt=new cs;Cs.add(yt),cs.enqueue(()=>{yt===e&&e.flush()})}return yt}static enqueue(e){ao.length===0&&queueMicrotask(Oh),ao.unshift(e)}}function Am(){var i=es;Al=!0;try{var e=0;for(Wu(!0);Ys.length>0;){var t=cs.ensure();if(e++>1e3){var n,r;Rm()}t.process(Ys),dr.clear()}}finally{Al=!1,Wu(i),$c=null}}function Rm(){try{am()}catch(i){Xc(i,$c)}}function Vu(i){var e=i.length;if(e!==0){for(var t=0;t<e;){var n=i[t++];if((n.f&(Es|Nn))===0&&pa(n)){var r=yt?yt.current.size:0;if(ts(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null&&n.ac===null?jh(n):n.fn=null),yt!==null&&yt.current.size>r&&(n.f&kc)!==0)break}}for(;t<e;)Mr(i[t++])}}function Mr(i){for(var e=$c=i;e.parent!==null;){e=e.parent;var t=e.f;if(Al&&e===He&&(t&Ss)!==0)return;if((t&(Tr|vi))!==0){if((t&It)===0)return;e.f^=It}}Ys.push(e)}const dr=new Map;function $s(i,e){var t={f:0,v:i,reactions:null,equals:Ch,rv:0,wv:0};return t}function Mi(i,e){const t=$s(i);return Om(t),t}function li(i,e=!1,t=!0){const n=$s(i);return e||(n.equals=Dh),fa&&t&&pt!==null&&pt.l!==null&&(pt.l.s??=[]).push(n),n}function Ot(i,e,t=!1){Xe!==null&&(!Hn||(Xe.f&ku)!==0)&&ha()&&(Xe.f&(mn|Ss|Hc|ku))!==0&&!hi?.includes(i)&&cm();let n=t?Ns(e):e;return Zs(i,n)}function Zs(i,e){if(!i.equals(e)){var t=i.v;ys?dr.set(i,e):dr.set(i,t),i.v=e;var n=cs.ensure();n.capture(i,t),(i.f&mn)!==0&&((i.f&Rn)!==0&&Yc(i),Zt(i,(i.f&An)===0?It:xi)),i.wv=td(),Bh(i,Rn),ha()&&He!==null&&(He.f&It)!==0&&(He.f&(vi|Tr))===0&&(En===null?Bm([i]):En.push(i))}return e}function Uo(i){Ot(i,i.v+1)}function Bh(i,e){var t=i.reactions;if(t!==null)for(var n=ha(),r=t.length,s=0;s<r;s++){var a=t[s],o=a.f;if(!(!n&&a===He)){var l=(o&Rn)===0;l&&Zt(a,e),(o&mn)!==0?Bh(a,xi):l&&Mr(a)}}}function Ns(i){if(typeof i!="object"||i===null||Qr in i)return i;const e=Oc(i);if(e!==Zp&&e!==Kp)return i;var t=new Map,n=Nc(i),r=Mi(0),s=pr,a=o=>{if(pr===s)return o();var l=Xe,c=pr;Yn(null),qu(s);var u=o();return Yn(l),qu(c),u};return n&&t.set("length",Mi(i.length)),new Proxy(i,{defineProperty(o,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&om();var u=t.get(l);return u===void 0?u=a(()=>{var f=Mi(c.value);return t.set(l,f),f}):Ot(u,c.value,!0),!0},deleteProperty(o,l){var c=t.get(l);if(c===void 0){if(l in o){const u=a(()=>Mi(Lt));t.set(l,u),Uo(r)}}else Ot(c,Lt),Uo(r);return!0},get(o,l,c){if(l===Qr)return i;var u=t.get(l),f=l in o;if(u===void 0&&(!f||ks(o,l)?.writable)&&(u=a(()=>{var d=Ns(f?o[l]:Lt),g=Mi(d);return g}),t.set(l,u)),u!==void 0){var h=Ie(u);return h===Lt?void 0:h}return Reflect.get(o,l,c)},getOwnPropertyDescriptor(o,l){var c=Reflect.getOwnPropertyDescriptor(o,l);if(c&&"value"in c){var u=t.get(l);u&&(c.value=Ie(u))}else if(c===void 0){var f=t.get(l),h=f?.v;if(f!==void 0&&h!==Lt)return{enumerable:!0,configurable:!0,value:h,writable:!0}}return c},has(o,l){if(l===Qr)return!0;var c=t.get(l),u=c!==void 0&&c.v!==Lt||Reflect.has(o,l);if(c!==void 0||He!==null&&(!u||ks(o,l)?.writable)){c===void 0&&(c=a(()=>{var h=u?Ns(o[l]):Lt,d=Mi(h);return d}),t.set(l,c));var f=Ie(c);if(f===Lt)return!1}return u},set(o,l,c,u){var f=t.get(l),h=l in o;if(n&&l==="length")for(var d=c;d<f.v;d+=1){var g=t.get(d+"");g!==void 0?Ot(g,Lt):d in o&&(g=a(()=>Mi(Lt)),t.set(d+"",g))}if(f===void 0)(!h||ks(o,l)?.writable)&&(f=a(()=>Mi(void 0)),Ot(f,Ns(c)),t.set(l,f));else{h=f.v!==Lt;var _=a(()=>Ns(c));Ot(f,_)}var m=Reflect.getOwnPropertyDescriptor(o,l);if(m?.set&&m.set.call(u,c),!h){if(n&&typeof l=="string"){var p=t.get("length"),E=Number(l);Number.isInteger(E)&&E>=p.v&&Ot(p,E+1)}Uo(r)}return!0},ownKeys(o){Ie(r);var l=Reflect.ownKeys(o).filter(f=>{var h=t.get(f);return h===void 0||h.v!==Lt});for(var[c,u]of t)u.v!==Lt&&!(c in o)&&l.push(c);return l},setPrototypeOf(){lm()}})}var Gu,zh,kh,Hh;function Cm(){if(Gu===void 0){Gu=window,zh=/Firefox/.test(navigator.userAgent);var i=Element.prototype,e=Node.prototype,t=Text.prototype;kh=ks(e,"firstChild").get,Hh=ks(e,"nextSibling").get,zu(i)&&(i.__click=void 0,i.__className=void 0,i.__attributes=null,i.__style=void 0,i.__e=void 0),zu(t)&&(t.__t=void 0)}}function da(i=""){return document.createTextNode(i)}function Di(i){return kh.call(i)}function wo(i){return Hh.call(i)}function Ri(i,e){return Di(i)}function No(i,e){{var t=Di(i);return t instanceof Comment&&t.data===""?wo(t):t}}function $r(i,e=1,t=!1){let n=i;for(;e--;)n=wo(n);return n}function Pm(i){i.textContent=""}function Vh(){return!1}function Gh(i){He===null&&Xe===null&&sm(),Xe!==null&&(Xe.f&An)!==0&&He===null&&rm(),ys&&im()}function Dm(i,e){var t=e.last;t===null?e.last=e.first=i:(t.next=i,i.prev=t,e.last=i)}function jn(i,e,t,n=!0){var r=He;r!==null&&(r.f&Nn)!==0&&(i|=Nn);var s={ctx:pt,deps:null,nodes_start:null,nodes_end:null,f:i|Rn,first:null,fn:e,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,transitions:null,wv:0,ac:null};if(t)try{ts(s),s.f|=So}catch(l){throw mi(s),l}else e!==null&&Mr(s);var a=t&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&zc)===0;if(!a&&n&&(r!==null&&Dm(s,r),Xe!==null&&(Xe.f&mn)!==0&&(i&Tr)===0)){var o=Xe;(o.effects??=[]).push(s)}return s}function Wh(i){const e=jn(Mo,null,!1);return Zt(e,It),e.teardown=i,e}function Rl(i){Gh();var e=He.f,t=!Xe&&(e&vi)!==0&&(e&So)===0;if(t){var n=pt;(n.e??=[]).push(i)}else return Xh(i)}function Xh(i){return jn(Bc|kc,i,!1)}function Lm(i){return Gh(),jn(Mo|kc,i,!0)}function Im(i){cs.ensure();const e=jn(Tr,i,!0);return(t={})=>new Promise(n=>{t.outro?Kc(e,()=>{mi(e),n(void 0)}):(mi(e),n(void 0))})}function qh(i){return jn(Bc,i,!1)}function Fo(i,e){var t=pt,n={effect:null,ran:!1,deps:i};t.l.$.push(n),n.effect=Zc(()=>{i(),!n.ran&&(n.ran=!0,br(e))})}function Um(){var i=pt;Zc(()=>{for(var e of i.l.$){e.deps();var t=e.effect;(t.f&It)!==0&&Zt(t,xi),pa(t)&&ts(t),e.ran=!1}})}function Nm(i){return jn(Hc|zc,i,!0)}function Zc(i,e=0){return jn(Mo|e,i,!0)}function oo(i,e=[],t=[]){bm(e,t,n=>{jn(Mo,()=>i(...n.map(Ie)),!0)})}function Yh(i,e=0){var t=jn(Ss|e,i,!0);return t}function Ks(i,e=!0){return jn(vi,i,!0,e)}function $h(i){var e=i.teardown;if(e!==null){const t=ys,n=Xe;Xu(!0),Yn(null);try{e.call(null)}finally{Xu(t),Yn(n)}}}function Zh(i,e=!1){var t=i.first;for(i.first=i.last=null;t!==null;){t.ac?.abort(Vc);var n=t.next;(t.f&Tr)!==0?t.parent=null:mi(t,e),t=n}}function Fm(i){for(var e=i.first;e!==null;){var t=e.next;(e.f&vi)===0&&mi(e),e=t}}function mi(i,e=!0){var t=!1;(e||(i.f&em)!==0)&&i.nodes_start!==null&&i.nodes_end!==null&&(Kh(i.nodes_start,i.nodes_end),t=!0),Zh(i,e&&!t),lo(i,0),Zt(i,Es);var n=i.transitions;if(n!==null)for(const s of n)s.stop();$h(i);var r=i.parent;r!==null&&r.first!==null&&jh(i),i.next=i.prev=i.teardown=i.ctx=i.deps=i.fn=i.nodes_start=i.nodes_end=i.ac=null}function Kh(i,e){for(;i!==null;){var t=i===e?null:wo(i);i.remove(),i=t}}function jh(i){var e=i.parent,t=i.prev,n=i.next;t!==null&&(t.next=n),n!==null&&(n.prev=t),e!==null&&(e.first===i&&(e.first=n),e.last===i&&(e.last=t))}function Kc(i,e){var t=[];jc(i,t,!0),Jh(t,()=>{mi(i),e&&e()})}function Jh(i,e){var t=i.length;if(t>0){var n=()=>--t||e();for(var r of i)r.out(n)}else e()}function jc(i,e,t){if((i.f&Nn)===0){if(i.f^=Nn,i.transitions!==null)for(const a of i.transitions)(a.is_global||t)&&e.push(a);for(var n=i.first;n!==null;){var r=n.next,s=(n.f&Eo)!==0||(n.f&vi)!==0;jc(n,e,s?t:!1),n=r}}}function Jc(i){Qh(i,!0)}function Qh(i,e){if((i.f&Nn)!==0){i.f^=Nn,(i.f&It)===0&&(Zt(i,Rn),Mr(i));for(var t=i.first;t!==null;){var n=t.next,r=(t.f&Eo)!==0||(t.f&vi)!==0;Qh(t,r?e:!1),t=n}if(i.transitions!==null)for(const s of i.transitions)(s.is_global||e)&&s.in()}}let es=!1;function Wu(i){es=i}let ys=!1;function Xu(i){ys=i}let Xe=null,Hn=!1;function Yn(i){Xe=i}let He=null;function Hi(i){He=i}let hi=null;function Om(i){Xe!==null&&(hi===null?hi=[i]:hi.push(i))}let Xt=null,un=0,En=null;function Bm(i){En=i}let ed=1,js=0,pr=js;function qu(i){pr=i}let Li=!1;function td(){return++ed}function pa(i){var e=i.f;if((e&Rn)!==0)return!0;if((e&xi)!==0){var t=i.deps,n=(e&An)!==0;if(t!==null){var r,s,a=(e&io)!==0,o=n&&He!==null&&!Li,l=t.length;if((a||o)&&(He===null||(He.f&Es)===0)){var c=i,u=c.parent;for(r=0;r<l;r++)s=t[r],(a||!s?.reactions?.includes(c))&&(s.reactions??=[]).push(c);a&&(c.f^=io),o&&u!==null&&(u.f&An)===0&&(c.f^=An)}for(r=0;r<l;r++)if(s=t[r],pa(s)&&Nh(s),s.wv>i.wv)return!0}(!n||He!==null&&!Li)&&Zt(i,It)}return!1}function nd(i,e,t=!0){var n=i.reactions;if(n!==null&&!hi?.includes(i))for(var r=0;r<n.length;r++){var s=n[r];(s.f&mn)!==0?nd(s,e,!1):e===s&&(t?Zt(s,Rn):(s.f&It)!==0&&Zt(s,xi),Mr(s))}}function id(i){var e=Xt,t=un,n=En,r=Xe,s=Li,a=hi,o=pt,l=Hn,c=pr,u=i.f;Xt=null,un=0,En=null,Li=(u&An)!==0&&(Hn||!es||Xe===null),Xe=(u&(vi|Tr))===0?i:null,hi=null,ro(i.ctx),Hn=!1,pr=++js,i.ac!==null&&(i.ac.abort(Vc),i.ac=null);try{i.f|=wl;var f=(0,i.fn)(),h=i.deps;if(Xt!==null){var d;if(lo(i,un),h!==null&&un>0)for(h.length=un+Xt.length,d=0;d<Xt.length;d++)h[un+d]=Xt[d];else i.deps=h=Xt;if(!Li||(u&mn)!==0&&i.reactions!==null)for(d=un;d<h.length;d++)(h[d].reactions??=[]).push(i)}else h!==null&&un<h.length&&(lo(i,un),h.length=un);if(ha()&&En!==null&&!Hn&&h!==null&&(i.f&(mn|xi|Rn))===0)for(d=0;d<En.length;d++)nd(En[d],i);return r!==null&&r!==i&&(js++,En!==null&&(n===null?n=En:n.push(...En))),(i.f&hr)!==0&&(i.f^=hr),f}catch(g){return Mm(g)}finally{i.f^=wl,Xt=e,un=t,En=n,Xe=r,Li=s,hi=a,ro(o),Hn=l,pr=c}}function zm(i,e){let t=e.reactions;if(t!==null){var n=$p.call(t,i);if(n!==-1){var r=t.length-1;r===0?t=e.reactions=null:(t[n]=t[r],t.pop())}}t===null&&(e.f&mn)!==0&&(Xt===null||!Xt.includes(e))&&(Zt(e,xi),(e.f&(An|io))===0&&(e.f^=io),Uh(e),lo(e,0))}function lo(i,e){var t=i.deps;if(t!==null)for(var n=e;n<t.length;n++)zm(i,t[n])}function ts(i){var e=i.f;if((e&Es)===0){Zt(i,It);var t=He,n=es;He=i,es=!0;try{(e&Ss)!==0?Fm(i):Zh(i),$h(i);var r=id(i);i.teardown=typeof r=="function"?r:null,i.wv=ed;var s;Th&&gm&&(i.f&Rn)!==0&&i.deps}finally{es=n,He=t}}}function Ie(i){var e=i.f,t=(e&mn)!==0;if(Xe!==null&&!Hn){var n=He!==null&&(He.f&Es)!==0;if(!n&&!hi?.includes(i)){var r=Xe.deps;if((Xe.f&wl)!==0)i.rv<js&&(i.rv=js,Xt===null&&r!==null&&r[un]===i?un++:Xt===null?Xt=[i]:(!Li||!Xt.includes(i))&&Xt.push(i));else{(Xe.deps??=[]).push(i);var s=i.reactions;s===null?i.reactions=[Xe]:s.includes(Xe)||s.push(Xe)}}}else if(t&&i.deps===null&&i.effects===null){var a=i,o=a.parent;o!==null&&(o.f&An)===0&&(a.f^=An)}if(ys){if(dr.has(i))return dr.get(i);if(t){a=i;var l=a.v;return((a.f&It)===0&&a.reactions!==null||rd(a))&&(l=Yc(a)),dr.set(a,l),l}}else if(t){if(a=i,ls?.has(a))return ls.get(a);pa(a)&&Nh(a)}if((i.f&hr)!==0)throw i.v;return i.v}function rd(i){if(i.v===Lt)return!0;if(i.deps===null)return!1;for(const e of i.deps)if(dr.has(e)||(e.f&mn)!==0&&rd(e))return!0;return!1}function br(i){var e=Hn;try{return Hn=!0,i()}finally{Hn=e}}const km=-7169;function Zt(i,e){i.f=i.f&km|e}function Hm(i){if(!(typeof i!="object"||!i||i instanceof EventTarget)){if(Qr in i)Cl(i);else if(!Array.isArray(i))for(let e in i){const t=i[e];typeof t=="object"&&t&&Qr in t&&Cl(t)}}}function Cl(i,e=new Set){if(typeof i=="object"&&i!==null&&!(i instanceof EventTarget)&&!e.has(i)){e.add(i),i instanceof Date&&i.getTime();for(let n in i)try{Cl(i[n],e)}catch{}const t=Oc(i);if(t!==Object.prototype&&t!==Array.prototype&&t!==Map.prototype&&t!==Set.prototype&&t!==Date.prototype){const n=bh(t);for(let r in n){const s=n[r].get;if(s)try{s.call(i)}catch{}}}}}const Vm=["touchstart","touchmove"];function Gm(i){return Vm.includes(i)}function Qc(i){var e=Xe,t=He;Yn(null),Hi(null);try{return i()}finally{Yn(e),Hi(t)}}const Wm=new Set,Yu=new Set;function Xm(i,e,t,n={}){function r(s){if(n.capture||Fs.call(e,s),!s.cancelBubble)return Qc(()=>t?.call(this,s))}return i.startsWith("pointer")||i.startsWith("touch")||i==="wheel"?bo(()=>{e.addEventListener(i,r,n)}):e.addEventListener(i,r,n),r}function Ci(i,e,t,n,r){var s={capture:n,passive:r},a=Xm(i,e,t,s);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&Wh(()=>{e.removeEventListener(i,a,s)})}let $u=null;function Fs(i){var e=this,t=e.ownerDocument,n=i.type,r=i.composedPath?.()||[],s=r[0]||i.target;$u=i;var a=0,o=$u===i&&i.__root;if(o){var l=r.indexOf(o);if(l!==-1&&(e===document||e===window)){i.__root=e;return}var c=r.indexOf(e);if(c===-1)return;l<=c&&(a=l)}if(s=r[a]||i.target,s!==e){no(i,"currentTarget",{configurable:!0,get(){return s||t}});var u=Xe,f=He;Yn(null),Hi(null);try{for(var h,d=[];s!==null;){var g=s.assignedSlot||s.parentNode||s.host||null;try{var _=s["__"+n];if(_!=null&&(!s.disabled||i.target===s))if(Nc(_)){var[m,...p]=_;m.apply(s,[i,...p])}else _.call(s,i)}catch(E){h?d.push(E):h=E}if(i.cancelBubble||g===e||g===null)break;s=g}if(h){for(let E of d)queueMicrotask(()=>{throw E});throw h}}finally{i.__root=e,delete i.currentTarget,Yn(u),Hi(f)}}}function sd(i){var e=document.createElement("template");return e.innerHTML=i.replaceAll("<!>","<!---->"),e.content}function co(i,e){var t=He;t.nodes_start===null&&(t.nodes_start=i,t.nodes_end=e)}function qi(i,e){var t=(e&dm)!==0,n=(e&pm)!==0,r,s=!i.startsWith("<!>");return()=>{r===void 0&&(r=sd(s?i:"<!>"+i),t||(r=Di(r)));var a=n||zh?document.importNode(r,!0):r.cloneNode(!0);if(t){var o=Di(a),l=a.lastChild;co(o,l)}else co(a,a);return a}}function qm(){var i=document.createDocumentFragment(),e=document.createComment(""),t=da();return i.append(e,t),co(e,t),i}function ai(i,e){i!==null&&i.before(e)}let Pl=!0;function Zu(i,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(i.__t??=i.nodeValue)&&(i.__t=t,i.nodeValue=t+"")}function Ym(i,e){return $m(i,e)}const Cr=new Map;function $m(i,{target:e,anchor:t,props:n={},events:r,context:s,intro:a=!0}){Cm();var o=new Set,l=f=>{for(var h=0;h<f.length;h++){var d=f[h];if(!o.has(d)){o.add(d);var g=Gm(d);e.addEventListener(d,Fs,{passive:g});var _=Cr.get(d);_===void 0?(document.addEventListener(d,Fs,{passive:g}),Cr.set(d,1)):Cr.set(d,_+1)}}};l(Fc(Wm)),Yu.add(l);var c=void 0,u=Im(()=>{var f=t??e.appendChild(da());return Ks(()=>{if(s){Gc({});var h=pt;h.c=s}r&&(n.$$events=r),Pl=a,c=i(f,n)||{},Pl=!0,s&&Wc()}),()=>{for(var h of o){e.removeEventListener(h,Fs);var d=Cr.get(h);--d===0?(document.removeEventListener(h,Fs),Cr.delete(h)):Cr.set(h,d)}Yu.delete(l),f!==t&&f.parentNode?.removeChild(f)}});return Zm.set(c,u),c}let Zm=new WeakMap;function Ku(i,e,t=!1){var n=i,r=null,s=null,a=Lt,o=t?Eo:0,l=!1;const c=(d,g=!0)=>{l=!0,h(g,d)};var u=null;function f(){u!==null&&(u.lastChild.remove(),n.before(u),u=null);var d=a?r:s,g=a?s:r;d&&Jc(d),g&&Kc(g,()=>{a?s=null:r=null})}const h=(d,g)=>{if(a!==(a=d)){var _=Vh(),m=n;if(_&&(u=document.createDocumentFragment(),u.append(m=da())),a?r??=g&&Ks(()=>g(m)):s??=g&&Ks(()=>g(m)),_){var p=yt,E=a?r:s,S=a?s:r;E&&p.skipped_effects.delete(E),S&&p.skipped_effects.add(S),p.add_callback(f)}else f()}};Yh(()=>{l=!1,e(c),l||h(null,null)},o)}function Oo(i,e){return e}function Km(i,e,t){for(var n=i.items,r=[],s=e.length,a=0;a<s;a++)jc(e[a].e,r,!0);var o=s>0&&r.length===0&&t!==null;if(o){var l=t.parentNode;Pm(l),l.append(t),n.clear(),Bn(i,e[0].prev,e[s-1].next)}Jh(r,()=>{for(var c=0;c<s;c++){var u=e[c];o||(n.delete(u.k),Bn(i,u.prev,u.next)),mi(u.e,!o)}})}function Bo(i,e,t,n,r,s=null){var a=i,o={flags:e,items:new Map,first:null},l=(e&Rh)!==0;if(l){var c=i;a=c.appendChild(da())}var u=null,f=!1,h=new Map,d=Ih(()=>{var p=t();return Nc(p)?p:p==null?[]:Fc(p)}),g,_;function m(){jm(_,g,o,h,a,r,e,n,t),s!==null&&(g.length===0?u?Jc(u):u=Ks(()=>s(a)):u!==null&&Kc(u,()=>{u=null}))}Yh(()=>{_??=He,g=Ie(d);var p=g.length;if(!(f&&p===0)){f=p===0;var E,S,v,T;if(Vh()){var w=new Set,A=yt;for(S=0;S<p;S+=1){v=g[S],T=n(v,S);var C=o.items.get(T)??h.get(T);C?(e&(yo|To))!==0&&ad(C,v,S,e):(E=od(null,o,null,null,v,T,S,r,e,t,!0),h.set(T,E)),w.add(T)}for(const[x,b]of o.items)w.has(x)||A.skipped_effects.add(b.e);A.add_callback(m)}else m();Ie(d)}})}function jm(i,e,t,n,r,s,a,o,l){var c=(a&um)!==0,u=(a&(yo|To))!==0,f=e.length,h=t.items,d=t.first,g=d,_,m=null,p,E=[],S=[],v,T,w,A;if(c)for(A=0;A<f;A+=1)v=e[A],T=o(v,A),w=h.get(T),w!==void 0&&(w.a?.measure(),(p??=new Set).add(w));for(A=0;A<f;A+=1){if(v=e[A],T=o(v,A),w=h.get(T),w===void 0){var C=n.get(T);if(C!==void 0){n.delete(T),h.set(T,C);var x=m?m.next:g;Bn(t,m,C),Bn(t,C,x),zo(C,x,r),m=C}else{var b=g?g.e.nodes_start:r;m=od(b,t,m,m===null?t.first:m.next,v,T,A,s,a,l)}h.set(T,m),E=[],S=[],g=m.next;continue}if(u&&ad(w,v,A,a),(w.e.f&Nn)!==0&&(Jc(w.e),c&&(w.a?.unfix(),(p??=new Set).delete(w))),w!==g){if(_!==void 0&&_.has(w)){if(E.length<S.length){var P=S[0],B;m=P.prev;var O=E[0],G=E[E.length-1];for(B=0;B<E.length;B+=1)zo(E[B],P,r);for(B=0;B<S.length;B+=1)_.delete(S[B]);Bn(t,O.prev,G.next),Bn(t,m,O),Bn(t,G,P),g=P,m=G,A-=1,E=[],S=[]}else _.delete(w),zo(w,g,r),Bn(t,w.prev,w.next),Bn(t,w,m===null?t.first:m.next),Bn(t,m,w),m=w;continue}for(E=[],S=[];g!==null&&g.k!==T;)(g.e.f&Nn)===0&&(_??=new Set).add(g),S.push(g),g=g.next;if(g===null)continue;w=g}E.push(w),m=w,g=w.next}if(g!==null||_!==void 0){for(var W=_===void 0?[]:Fc(_);g!==null;)(g.e.f&Nn)===0&&W.push(g),g=g.next;var V=W.length;if(V>0){var Y=(a&Rh)!==0&&f===0?r:null;if(c){for(A=0;A<V;A+=1)W[A].a?.measure();for(A=0;A<V;A+=1)W[A].a?.fix()}Km(t,W,Y)}}c&&bo(()=>{if(p!==void 0)for(w of p)w.a?.apply()}),i.first=t.first&&t.first.e,i.last=m&&m.e;for(var k of n.values())mi(k.e);n.clear()}function ad(i,e,t,n){(n&yo)!==0&&Zs(i.v,e),(n&To)!==0?Zs(i.i,t):i.i=t}function od(i,e,t,n,r,s,a,o,l,c,u){var f=(l&yo)!==0,h=(l&fm)===0,d=f?h?li(r,!1,!1):$s(r):r,g=(l&To)===0?a:$s(a),_={i:g,v:d,k:s,a:null,e:null,prev:t,next:n};try{if(i===null){var m=document.createDocumentFragment();m.append(i=da())}return _.e=Ks(()=>o(i,d,g,c),_m),_.e.prev=t&&t.e,_.e.next=n&&n.e,t===null?u||(e.first=_):(t.next=_,t.e.next=_.e),n!==null&&(n.prev=_,n.e.prev=_.e),_}finally{}}function zo(i,e,t){for(var n=i.next?i.next.e.nodes_start:t,r=e?e.e.nodes_start:t,s=i.e.nodes_start;s!==null&&s!==n;){var a=wo(s);r.before(s),s=a}}function Bn(i,e,t){e===null?i.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function ju(i,e,t=!1,n=!1,r=!1){var s=i,a="";oo(()=>{var o=He;if(a!==(a=e()??"")&&(o.nodes_start!==null&&(Kh(o.nodes_start,o.nodes_end),o.nodes_start=o.nodes_end=null),a!=="")){var l=a+"";t?l=`<svg>${l}</svg>`:n&&(l=`<math>${l}</math>`);var c=sd(l);if((t||n)&&(c=Di(c)),co(Di(c),c.lastChild),t||n)for(;Di(c);)s.before(Di(c));else s.before(c)}})}const Jm=Symbol("is custom element"),Qm=Symbol("is html");function e_(i,e,t,n){var r=t_(i);r[e]!==(r[e]=t)&&(t==null?i.removeAttribute(e):typeof t!="string"&&n_(i).includes(e)?i[e]=t:i.setAttribute(e,t))}function t_(i){return i.__attributes??={[Jm]:i.nodeName.includes("-"),[Qm]:i.namespaceURI===mm}}var Ju=new Map;function n_(i){var e=Ju.get(i.nodeName);if(e)return e;Ju.set(i.nodeName,e=[]);for(var t,n=i,r=Element.prototype;r!==n;){t=bh(n);for(var s in t)t[s].set&&e.push(s);n=Oc(n)}return e}const i_=()=>performance.now(),ci={tick:i=>requestAnimationFrame(i),now:()=>i_(),tasks:new Set};function ld(){const i=ci.now();ci.tasks.forEach(e=>{e.c(i)||(ci.tasks.delete(e),e.f())}),ci.tasks.size!==0&&ci.tick(ld)}function r_(i){let e;return ci.tasks.size===0&&ci.tick(ld),{promise:new Promise(t=>{ci.tasks.add(e={c:i,f:t})}),abort(){ci.tasks.delete(e)}}}function Sa(i,e){Qc(()=>{i.dispatchEvent(new CustomEvent(e))})}function s_(i){if(i==="float")return"cssFloat";if(i==="offset")return"cssOffset";if(i.startsWith("--"))return i;const e=i.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(t=>t[0].toUpperCase()+t.slice(1)).join("")}function Qu(i){const e={},t=i.split(";");for(const n of t){const[r,s]=n.split(":");if(!r||s===void 0)break;const a=s_(r.trim());e[a]=s.trim()}return e}const a_=i=>i;function ef(i,e,t,n){var r=(i&hm)!==0,s="both",a,o=e.inert,l=e.style.overflow,c,u;function f(){return Qc(()=>a??=t()(e,n?.()??{},{direction:s}))}var h={is_global:r,in(){e.inert=o,Sa(e,"introstart"),c=Dl(e,f(),u,1,()=>{Sa(e,"introend"),c?.abort(),c=a=void 0,e.style.overflow=l})},out(m){e.inert=!0,Sa(e,"outrostart"),u=Dl(e,f(),c,0,()=>{Sa(e,"outroend"),m?.()})},stop:()=>{c?.abort(),u?.abort()}},d=He;if((d.transitions??=[]).push(h),Pl){var g=r;if(!g){for(var _=d.parent;_&&(_.f&Eo)!==0;)for(;(_=_.parent)&&(_.f&Ss)===0;);g=!_||(_.f&So)!==0}g&&qh(()=>{br(()=>h.in())})}}function Dl(i,e,t,n,r){var s=n===1;if(jp(e)){var a,o=!1;return bo(()=>{if(!o){var m=e({direction:s?"in":"out"});a=Dl(i,m,t,n,r)}}),{abort:()=>{o=!0,a?.abort()},deactivate:()=>a.deactivate(),reset:()=>a.reset(),t:()=>a.t()}}if(t?.deactivate(),!e?.duration)return r(),{abort:Ln,deactivate:Ln,reset:Ln,t:()=>n};const{delay:l=0,css:c,tick:u,easing:f=a_}=e;var h=[];if(s&&t===void 0&&(u&&u(0,1),c)){var d=Qu(c(0,1));h.push(d,d)}var g=()=>1-n,_=i.animate(h,{duration:l,fill:"forwards"});return _.onfinish=()=>{_.cancel();var m=t?.t()??1-n;t?.abort();var p=n-m,E=e.duration*Math.abs(p),S=[];if(E>0){var v=!1;if(c)for(var T=Math.ceil(E/16.666666666666668),w=0;w<=T;w+=1){var A=m+p*f(w/T),C=Qu(c(A,1-A));S.push(C),v||=C.overflow==="hidden"}v&&(i.style.overflow="hidden"),g=()=>{var x=_.currentTime;return m+p*f(x/E)},u&&r_(()=>{if(_.playState!=="running")return!1;var x=g();return u(x,1-x),!0})}_=i.animate(S,{duration:E,fill:"forwards"}),_.onfinish=()=>{g=()=>n,u?.(n,1-n),r()}},{abort:()=>{_&&(_.cancel(),_.effect=null,_.onfinish=Ln)},deactivate:()=>{r=Ln},reset:()=>{n===0&&u?.(1,0)},t:()=>g()}}function tf(i,e){return i===e||i?.[Qr]===e}function cd(i={},e,t,n){return qh(()=>{var r,s;return Zc(()=>{r=s,s=[],br(()=>{i!==t(...s)&&(e(i,...s),r&&tf(t(...r),i)&&e(null,...r))})}),()=>{bo(()=>{s&&tf(t(...s),i)&&e(null,...s)})}}),i}function ud(i=!1){const e=pt,t=e.l.u;if(!t)return;let n=()=>Hm(e.s);if(i){let r=0,s={};const a=qc(()=>{let o=!1;const l=e.s;for(const c in l)l[c]!==s[c]&&(s[c]=l[c],o=!0);return o&&r++,r});n=()=>Ie(a)}t.b.length&&Lm(()=>{nf(e,n),bl(t.b)}),Rl(()=>{const r=br(()=>t.m.map(Jp));return()=>{for(const s of r)typeof s=="function"&&s()}}),t.a.length&&Rl(()=>{nf(e,n),bl(t.a)})}function nf(i,e){if(i.l.s)for(const t of i.l.s)Ie(t);e()}function fd(i,e,t){if(i==null)return e(void 0),Ln;const n=br(()=>i.subscribe(e,t));return n.unsubscribe?()=>n.unsubscribe():n}const Pr=[];function o_(i,e=Ln){let t=null;const n=new Set;function r(o){if(Ph(i,o)&&(i=o,t)){const l=!Pr.length;for(const c of n)c[1](),Pr.push(c,i);if(l){for(let c=0;c<Pr.length;c+=2)Pr[c][0](Pr[c+1]);Pr.length=0}}}function s(o){r(o(i))}function a(o,l=Ln){const c=[o,l];return n.add(c),n.size===1&&(t=e(r,s)||Ln),o(i),()=>{n.delete(c),n.size===0&&t&&(t(),t=null)}}return{set:r,update:s,subscribe:a}}function qa(i){let e;return fd(i,t=>e=t)(),e}let Ll=Symbol();function l_(i,e,t){const n=t[e]??={store:null,source:li(void 0),unsubscribe:Ln};if(n.store!==i&&!(Ll in t))if(n.unsubscribe(),n.store=i??null,i==null)n.source.v=void 0,n.unsubscribe=Ln;else{var r=!0;n.unsubscribe=fd(i,s=>{r?n.source.v=s:Ot(n.source,s)}),r=!1}return i&&Ll in t?qa(i):Ie(n.source)}function c_(){const i={};function e(){Wh(()=>{for(var t in i)i[t].unsubscribe();no(i,Ll,{enumerable:!1,value:!0})})}return[i,e]}function eu(i){pt===null&&Ah(),fa&&pt.l!==null?f_(pt).m.push(i):Rl(()=>{const e=br(i);if(typeof e=="function")return e})}function u_(i){pt===null&&Ah(),eu(()=>()=>br(i))}function f_(i){var e=i.l;return e.u??={a:[],b:[],m:[]}}const h_="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(h_);vm();function si(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function hd(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var pn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},us={duration:.5,overwrite:!1,delay:0},tu,Ut,ct,Tn=1e8,rt=1/Tn,Il=Math.PI*2,d_=Il/4,p_=0,dd=Math.sqrt,m_=Math.cos,__=Math.sin,Dt=function(e){return typeof e=="string"},gt=function(e){return typeof e=="function"},_i=function(e){return typeof e=="number"},nu=function(e){return typeof e>"u"},$n=function(e){return typeof e=="object"},Qt=function(e){return e!==!1},iu=function(){return typeof window<"u"},Ea=function(e){return gt(e)||Dt(e)},pd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},zt=Array.isArray,Ul=/(?:-?\.?\d|\.)+/gi,md=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Zr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ko=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,_d=/[+-]=-?[.\d]+/,gd=/[^,'"\[\]\s]+/gi,g_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ht,zn,Nl,ru,_n={},uo={},vd,xd=function(e){return(uo=fs(e,_n))&&sn},su=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Js=function(e,t){return!t&&console.warn(e)},Md=function(e,t){return e&&(_n[e]=t)&&uo&&(uo[e]=t)||_n},Qs=function(){return 0},v_={suppressEvents:!0,isStart:!0,kill:!1},Ya={suppressEvents:!0,kill:!1},x_={suppressEvents:!0},au={},Fi=[],Fl={},Sd,fn={},Ho={},rf=30,$a=[],ou="",lu=function(e){var t=e[0],n,r;if($n(t)||gt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=$a.length;r--&&!$a[r].targetTest(t););n=$a[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Xd(e[r],n)))||e.splice(r,1);return e},mr=function(e){return e._gsap||lu(bn(e))[0]._gsap},Ed=function(e,t,n){return(n=e[t])&&gt(n)?e[t]():nu(n)&&e.getAttribute&&e.getAttribute(t)||n},en=function(e,t){return(e=e.split(",")).forEach(t)||e},St=function(e){return Math.round(e*1e5)/1e5||0},bt=function(e){return Math.round(e*1e7)/1e7||0},ns=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},M_=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},fo=function(){var e=Fi.length,t=Fi.slice(0),n,r;for(Fl={},Fi.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},cu=function(e){return!!(e._initted||e._startAt||e.add)},yd=function(e,t,n,r){Fi.length&&!Ut&&fo(),e.render(t,n,!!(Ut&&t<0&&cu(e))),Fi.length&&!Ut&&fo()},Td=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(gd).length<2?t:Dt(e)?e.trim():e},bd=function(e){return e},gn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},S_=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},fs=function(e,t){for(var n in t)e[n]=t[n];return e},sf=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=$n(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},ho=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Hs=function(e){var t=e.parent||ht,n=e.keyframes?S_(zt(e.keyframes)):gn;if(Qt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},E_=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},wd=function(e,t,n,r,s){var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Ao=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Vi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},_r=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},y_=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ol=function(e,t,n,r){return e._startAt&&(Ut?e._startAt.revert(Ya):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},T_=function i(e){return!e||e._ts&&i(e.parent)},af=function(e){return e._repeat?hs(e._tTime,e=e.duration()+e._rDelay)*e:0},hs=function(e,t){var n=Math.floor(e=bt(e/t));return e&&n===e?n-1:n},po=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ro=function(e){return e._end=bt(e._start+(e._tDur/Math.abs(e._ts||e._rts||rt)||0))},Co=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=bt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ro(e),n._dirty||_r(n,e)),e},Ad=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=po(e.rawTime(),t),(!t._dur||ma(0,t.totalDuration(),n)-t._tTime>rt)&&t.render(n,!0)),_r(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-rt}},Vn=function(e,t,n,r){return t.parent&&Vi(t),t._start=bt((_i(n)?n:n||e!==ht?Sn(e,n,t):e._time)+t._delay),t._end=bt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),wd(e,t,"_first","_last",e._sort?"_start":0),Bl(t)||(e._recent=t),r||Ad(e,t),e._ts<0&&Co(e,e._tTime),e},Rd=function(e,t){return(_n.ScrollTrigger||su("scrollTrigger",t))&&_n.ScrollTrigger.create(t,e)},Cd=function(e,t,n,r,s){if(fu(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Ut&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Sd!==hn.frame)return Fi.push(e),e._lazy=[s,r],1},b_=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Bl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},w_=function(e,t,n,r){var s=e.ratio,a=t<0||!t&&(!e._start&&b_(e)&&!(!e._initted&&Bl(e))||(e._ts<0||e._dp._ts<0)&&!Bl(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=ma(0,e._tDur,t),u=hs(l,o),e._yoyo&&u&1&&(a=1-a),u!==hs(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Ut||r||e._zTime===rt||!t&&e._zTime){if(!e._initted&&Cd(e,t,r,n,l))return;for(f=e._zTime,e._zTime=t||(n?rt:0),n||(n=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Ol(e,t,n,!0),e._onUpdate&&!n&&dn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&dn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Vi(e,1),!n&&!Ut&&(dn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},A_=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},ds=function(e,t,n,r){var s=e._repeat,a=bt(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:bt(a*(s+1)+e._rDelay*s):a,o>0&&!r&&Co(e,e._tTime=e._tDur*o),e.parent&&Ro(e),n||_r(e.parent,e),e},of=function(e){return e instanceof Yt?_r(e):ds(e,e._dur)},R_={_start:0,endTime:Qs,totalDuration:Qs},Sn=function i(e,t,n){var r=e.labels,s=e._recent||R_,a=e.duration()>=Tn?s.endTime(!1):e._dur,o,l,c;return Dt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(zt(n)?n[0]:n).totalDuration()),o>1?i(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Vs=function(e,t,n){var r=_i(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,l;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Qt(l.vars.inherit)&&l.parent;a.immediateRender=Qt(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Tt(t[0],a,t[s+1])},Yi=function(e,t){return e||e===0?t(e):t},ma=function(e,t,n){return n<e?e:n>t?t:n},Bt=function(e,t){return!Dt(e)||!(t=g_.exec(e))?"":t[1]},C_=function(e,t,n){return Yi(n,function(r){return ma(e,t,r)})},zl=[].slice,Pd=function(e,t){return e&&$n(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&$n(e[0]))&&!e.nodeType&&e!==zn},P_=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return Dt(r)&&!t||Pd(r,1)?(s=n).push.apply(s,bn(r)):n.push(r)})||n},bn=function(e,t,n){return ct&&!t&&ct.selector?ct.selector(e):Dt(e)&&!n&&(Nl||!ps())?zl.call((t||ru).querySelectorAll(e),0):zt(e)?P_(e,n):Pd(e)?zl.call(e,0):e?[e]:[]},kl=function(e){return e=bn(e)[0]||Js("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return bn(t,n.querySelectorAll?n:n===e?Js("Invalid scope")||ru.createElement("div"):e)}},Dd=function(e){return e.sort(function(){return .5-Math.random()})},Ld=function(e){if(gt(e))return e;var t=$n(e)?e:{each:e},n=gr(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=t.axis,u=r,f=r;return Dt(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],f=r[1]),function(h,d,g){var _=(g||t).length,m=a[_],p,E,S,v,T,w,A,C,x;if(!m){if(x=t.grid==="auto"?0:(t.grid||[1,Tn])[1],!x){for(A=-Tn;A<(A=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(m=a[_]=[],p=l?Math.min(x,_)*u-.5:r%x,E=x===Tn?0:l?_*f/x-.5:r/x|0,A=0,C=Tn,w=0;w<_;w++)S=w%x-p,v=E-(w/x|0),m[w]=T=c?Math.abs(c==="y"?v:S):dd(S*S+v*v),T>A&&(A=T),T<C&&(C=T);r==="random"&&Dd(m),m.max=A-C,m.min=C,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Bt(t.amount||t.each)||0,n=n&&_<0?Vd(n):n}return _=(m[h]-m.min)/m.max||0,bt(m.b+(n?n(_):_)*m.v)+m.u}},Hl=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=bt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(_i(n)?0:Bt(n))}},Id=function(e,t){var n=zt(e),r,s;return!n&&$n(e)&&(r=n=e.radius||Tn,e.values?(e=bn(e.values),(s=!_i(e[0]))&&(r*=r)):e=Hl(e.increment)),Yi(t,n?gt(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Tn,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-o,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-o),h<c&&(c=h,u=f);return u=!r||c<=r?e[u]:a,s||u===a||_i(a)?u:u+Bt(a)}:Hl(e))},Ud=function(e,t,n,r){return Yi(zt(e)?!t:n===!0?!!(n=0):!r,function(){return zt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},D_=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,a){return a(s)},r)}},L_=function(e,t){return function(n){return e(parseFloat(n))+(t||Bt(n))}},I_=function(e,t,n){return Fd(e,t,0,1,n)},Nd=function(e,t,n){return Yi(n,function(r){return e[~~t(r)]})},U_=function i(e,t,n){var r=t-e;return zt(e)?Nd(e,i(0,e.length),t):Yi(n,function(s){return(r+(s-e)%r)%r+e})},N_=function i(e,t,n){var r=t-e,s=r*2;return zt(e)?Nd(e,i(0,e.length-1),t):Yi(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},ea=function(e){for(var t=0,n="",r,s,a,o;~(r=e.indexOf("random(",t));)a=e.indexOf(")",r),o=e.charAt(r+7)==="[",s=e.substr(r+7,a-r-7).match(o?gd:Ul),n+=e.substr(t,r-t)+Ud(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Fd=function(e,t,n,r,s){var a=t-e,o=r-n;return Yi(s,function(l){return n+((l-e)/a*o||0)})},F_=function i(e,t,n,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var a=Dt(e),o={},l,c,u,f,h;if(n===!0&&(r=1)&&(n=null),a)e={p:e},t={p:t};else if(zt(e)&&!zt(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(i(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},n=t}else r||(e=fs(zt(e)?[]:{},e));if(!u){for(l in t)uu.call(o,e,l,"get",t[l]);s=function(g){return pu(g,o)||(a?e.p:e)}}}return Yi(n,s)},lf=function(e,t,n){var r=e.labels,s=Tn,a,o,l;for(a in r)o=r[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},dn=function(e,t,n){var r=e.vars,s=r[t],a=ct,o=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&Fi.length&&fo(),o&&(ct=o),u=l?s.apply(c,l):s.call(c),ct=a,u},Os=function(e){return Vi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ut),e.progress()<1&&dn(e,"onInterrupt"),e},Kr,Od=[],Bd=function(e){if(e)if(e=!e.name&&e.default||e,iu()||e.headless){var t=e.name,n=gt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Qs,render:pu,add:uu,kill:J_,modifier:j_,rawVars:0},a={targetTest:0,get:0,getSetter:du,aliases:{},register:0};if(ps(),e!==r){if(fn[t])return;gn(r,gn(ho(e,s),a)),fs(r.prototype,fs(s,ho(e,a))),fn[r.prop=t]=r,e.targetTest&&($a.push(r),au[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Md(t,r),e.register&&e.register(sn,r,tn)}else Od.push(e)},it=255,Bs={aqua:[0,it,it],lime:[0,it,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,it],navy:[0,0,128],white:[it,it,it],olive:[128,128,0],yellow:[it,it,0],orange:[it,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[it,0,0],pink:[it,192,203],cyan:[0,it,it],transparent:[it,it,it,0]},Vo=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*it+.5|0},zd=function(e,t,n){var r=e?_i(e)?[e>>16,e>>8&it,e&it]:0:Bs.black,s,a,o,l,c,u,f,h,d,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Bs[e])r=Bs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&it,r&it,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&it,e&it]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(Ul),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=Vo(l+1/3,s,a),r[1]=Vo(l,s,a),r[2]=Vo(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(md),n&&r.length<4&&(r[3]=1),r}else r=e.match(Ul)||Bs.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/it,a=r[1]/it,o=r[2]/it,f=Math.max(s,a,o),h=Math.min(s,a,o),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(a-o)/d+(a<o?6:0):f===a?(o-s)/d+2:(s-a)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},kd=function(e){var t=[],n=[],r=-1;return e.split(Oi).forEach(function(s){var a=s.match(Zr)||[];t.push.apply(t,a),n.push(r+=a.length+1)}),t.c=n,t},cf=function(e,t,n){var r="",s=(e+r).match(Oi),a=t?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=zd(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=kd(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Oi,"1").split(Zr),f=c.length-1;o<f;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Oi),f=c.length-1;o<f;o++)r+=c[o]+s[o];return r+c[f]},Oi=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Bs)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),O_=/hsl[a]?\(/,Hd=function(e){var t=e.join(" "),n;if(Oi.lastIndex=0,Oi.test(t))return n=O_.test(t),e[1]=cf(e[1],n),e[0]=cf(e[0],n,kd(e[1])),!0},ta,hn=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,a=s,o=[],l,c,u,f,h,d,g=function _(m){var p=i()-r,E=m===!0,S,v,T,w;if((p>e||p<0)&&(n+=p-t),r+=p,T=r-n,S=T-a,(S>0||E)&&(w=++f.frame,h=T-f.time*1e3,f.time=T=T/1e3,a+=S+(S>=s?4:s-S),v=1),E||(l=c(_)),v)for(d=0;d<o.length;d++)o[d](T,h,w,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){vd&&(!Nl&&iu()&&(zn=Nl=window,ru=zn.document||{},_n.gsap=sn,(zn.gsapVersions||(zn.gsapVersions=[])).push(sn.version),xd(uo||zn.GreenSockGlobals||!zn.gsap&&zn||{}),Od.forEach(Bd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,a-f.time*1e3+1|0)},ta=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ta=0,c=Qs},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=f.time*1e3+s},add:function(m,p,E){var S=p?function(v,T,w,A){m(v,T,w,A),f.remove(S)}:m;return f.remove(m),o[E?"unshift":"push"](S),ps(),S},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},f}(),ps=function(){return!ta&&hn.wake()},Ve={},B_=/^[\d.\-M][\d.\-,\s]/,z_=/["']/g,k_=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[r]=isNaN(c)?c.replace(z_,"").trim():+c,r=l.substr(o+1).trim();return t},H_=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},V_=function(e){var t=(e+"").split("("),n=Ve[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[k_(t[1])]:H_(e).split(",").map(Td)):Ve._CE&&B_.test(e)?Ve._CE("",e):n},Vd=function(e){return function(t){return 1-e(1-t)}},Gd=function i(e,t){for(var n=e._first,r;n;)n instanceof Yt?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},gr=function(e,t){return e&&(gt(e)?e:Ve[e]||V_(e))||t},wr=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},a;return en(e,function(o){Ve[o]=_n[o]=s,Ve[a=o.toLowerCase()]=n;for(var l in s)Ve[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ve[o+"."+l]=s[l]}),s},Wd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Go=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Il*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*__((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Wd(o);return s=Il/s,l.config=function(c,u){return i(e,c,u)},l},Wo=function i(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Wd(n);return r.config=function(s){return i(e,s)},r};en("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;wr(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ve.Linear.easeNone=Ve.none=Ve.Linear.easeIn;wr("Elastic",Go("in"),Go("out"),Go());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(o){return o<t?i*o*o:o<n?i*Math.pow(o-1.5/e,2)+.75:o<r?i*(o-=2.25/e)*o+.9375:i*Math.pow(o-2.625/e,2)+.984375};wr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);wr("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});wr("Circ",function(i){return-(dd(1-i*i)-1)});wr("Sine",function(i){return i===1?1:-m_(i*d_)+1});wr("Back",Wo("in"),Wo("out"),Wo());Ve.SteppedEase=Ve.steps=_n.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,a=1-rt;return function(o){return((r*ma(0,a,o)|0)+s)*n}}};us.ease=Ve["quad.out"];en("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return ou+=i+","+i+"Params,"});var Xd=function(e,t){this.id=p_++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Ed,this.set=t?t.getSetter:du},na=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ds(this,+t.duration,1,1),this.data=t.data,ct&&(this._ctx=ct,ct.data.push(this)),ta||hn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ds(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(ps(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Co(this,n),!s._dp||s.parent||Ad(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Vn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===rt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),yd(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+af(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+af(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?hs(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-rt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?po(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-rt?0:this._rts,this.totalTime(ma(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Ro(this),y_(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ps(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==rt&&(this._tTime-=rt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Vn(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Qt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?po(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=x_);var r=Ut;return Ut=n,cu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ut=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,of(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,of(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(Sn(this,n),Qt(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Qt(r)),this._dur||(this._zTime=-rt),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-rt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-rt,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-rt)},e.eventCallback=function(n,r,s){var a=this.vars;return arguments.length>1?(r?(a[n]=r,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete a[n],this):a[n]},e.then=function(n){var r=this;return new Promise(function(s){var a=gt(n)?n:bd,o=function(){var c=r.then;r.then=null,gt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),s(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?o():r._prom=o})},e.kill=function(){Os(this)},i}();gn(na.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-rt,_prom:0,_ps:!1,_rts:1});var Yt=function(i){hd(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Qt(n.sortChildren),ht&&Vn(n.parent||ht,si(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Rd(si(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return Vs(0,arguments,this),this},t.from=function(r,s,a){return Vs(1,arguments,this),this},t.fromTo=function(r,s,a,o){return Vs(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,Hs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Tt(r,s,Sn(this,a),1),this},t.call=function(r,s,a){return Vn(this,Tt.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Tt(r,a,Sn(this,l)),this},t.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,Hs(a).immediateRender=Qt(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},t.staggerFromTo=function(r,s,a,o,l,c,u,f){return o.startAt=a,Hs(o).immediateRender=Qt(o.immediateRender),this.staggerTo(r,s,o,l,c,u,f)},t.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:bt(r),f=this._zTime<0!=r<0&&(this._initted||!c),h,d,g,_,m,p,E,S,v,T,w,A;if(this!==ht&&u>l&&r>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),h=u,v=this._start,S=this._ts,p=!S,f&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,a);if(h=bt(u%m),u===l?(_=this._repeat,h=c):(T=bt(u/m),_=~~T,_&&_===T&&(h=c,_--),h>c&&(h=c)),T=hs(this._tTime,m),!o&&this._tTime&&T!==_&&this._tTime-T*m-this._dur<=0&&(T=_),w&&_&1&&(h=c-h,A=1),_!==T&&!this._lock){var C=w&&T&1,x=C===(w&&_&1);if(_<T&&(C=!C),o=C?0:u%c?c:u,this._lock=1,this.render(o||(A?0:bt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&dn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Gd(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(E=A_(this,bt(o),bt(h)),E&&(u-=h-(h=E._start))),this._tTime=u,this._time=h,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&u&&!s&&!T&&(dn(this,"onStart"),this._tTime!==u))return this;if(h>=o&&r>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&E!==d){if(d.parent!==this)return this.render(r,s,a);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,a),h!==this._time||!this._ts&&!p){E=0,g&&(u+=this._zTime=-rt);break}}d=g}else{d=this._last;for(var b=r<0?r:h;d;){if(g=d._prev,(d._act||b<=d._end)&&d._ts&&E!==d){if(d.parent!==this)return this.render(r,s,a);if(d.render(d._ts>0?(b-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(b-d._start)*d._ts,s,a||Ut&&cu(d)),h!==this._time||!this._ts&&!p){E=0,g&&(u+=this._zTime=b?-rt:rt);break}}d=g}}if(E&&!s&&(this.pause(),E.render(h>=o?0:-rt)._zTime=h>=o?1:-1,this._ts))return this._start=v,Ro(this),this.render(r,s,a);this._onUpdate&&!s&&dn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Vi(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(dn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(_i(s)||(s=Sn(this,s,r)),!(r instanceof na)){if(zt(r))return r.forEach(function(o){return a.add(o,s)}),this;if(Dt(r))return this.addLabel(r,s);if(gt(r))r=Tt.delayedCall(0,r);else return this}return this!==r?Vn(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Tn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Tt?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return Dt(r)?this.removeLabel(r):gt(r)?this.killTweensOf(r):(r.parent===this&&Ao(this,r),r===this._recent&&(this._recent=this._last),_r(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=bt(hn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Sn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=Tt.delayedCall(0,s||Qs,a);return o.data="isPause",this._hasPause=1,Vn(this,o,Sn(this,r))},t.removePause=function(r){var s=this._first;for(r=Sn(this,r);s;)s._start===r&&s.data==="isPause"&&Vi(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)Ii!==o[l]&&o[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=bn(r),l=this._first,c=_i(s),u;l;)l instanceof Tt?M_(l._targets,o)&&(c?(!Ii||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=Sn(a,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=Tt.to(a,gn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||rt,onStart:function(){if(a.pause(),!d){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&ds(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,gn({startAt:{time:Sn(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),lf(this,Sn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),lf(this,Sn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+rt)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return _r(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),_r(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,l=Tn,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Vn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;ds(a,a===ht&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(ht._ts&&(yd(ht,po(r,ht)),Sd=hn.frame),hn.frame>=rf){rf+=pn.autoSleep||120;var s=ht._first;if((!s||!s._ts)&&pn.autoSleep&&hn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||hn.sleep()}}},e}(na);gn(Yt.prototype,{_lock:0,_hasPause:0,_forcing:0});var G_=function(e,t,n,r,s,a,o){var l=new tn(this._pt,e,t,0,1,jd,null,s),c=0,u=0,f,h,d,g,_,m,p,E;for(l.b=n,l.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=ea(r)),a&&(E=[n,r],a(E,e,t),n=E[0],r=E[1]),h=n.match(ko)||[];f=ko.exec(r);)g=f[0],_=r.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?ns(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=ko.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(_d.test(r)||p)&&(l.e=0),this._pt=l,l},uu=function(e,t,n,r,s,a,o,l,c,u){gt(r)&&(r=r(s||0,e,a));var f=e[t],h=n!=="get"?n:gt(f)?c?e[t.indexOf("set")||!gt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=gt(f)?c?$_:Zd:hu,g;if(Dt(r)&&(~r.indexOf("random(")&&(r=ea(r)),r.charAt(1)==="="&&(g=ns(h,r)+(Bt(h)||0),(g||g===0)&&(r=g))),!u||h!==r||Vl)return!isNaN(h*r)&&r!==""?(g=new tn(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?K_:Kd,0,d),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!f&&!(t in e)&&su(t,r),G_.call(this,e,t,h,r,d,l||pn.stringFilter,c))},W_=function(e,t,n,r,s){if(gt(e)&&(e=Gs(e,s,t,n,r)),!$n(e)||e.style&&e.nodeType||zt(e)||pd(e))return Dt(e)?Gs(e,s,t,n,r):e;var a={},o;for(o in e)a[o]=Gs(e[o],s,t,n,r);return a},qd=function(e,t,n,r,s,a){var o,l,c,u;if(fn[e]&&(o=new fn[e]).init(s,o.rawVars?t[e]:W_(t[e],r,s,a,n),n,r,a)!==!1&&(n._pt=l=new tn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Kr))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Ii,Vl,fu=function i(e,t,n){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,h=r.keyframes,d=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,E=p&&p.data==="nested"?p.vars.targets:m,S=e._overwrite==="auto"&&!tu,v=e.timeline,T,w,A,C,x,b,P,B,O,G,W,V,Y;if(v&&(!h||!s)&&(s="none"),e._ease=gr(s,us.ease),e._yEase=f?Vd(gr(f===!0?s:f,us.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!v&&!!r.runBackwards,!v||h&&!r.stagger){if(B=m[0]?mr(m[0]).harness:0,V=B&&r[B.prop],T=ho(r,au),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!d?_.render(-1,!0):_.revert(u&&g?Ya:v_),_._lazy=0),a){if(Vi(e._startAt=Tt.set(m,gn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Qt(l),startAt:null,delay:0,onUpdate:c&&function(){return dn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ut||!o&&!d)&&e._startAt.revert(Ya),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(o=!1),A=gn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Qt(l),immediateRender:o,stagger:0,parent:p},T),V&&(A[B.prop]=V),Vi(e._startAt=Tt.set(m,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ut?e._startAt.revert(Ya):e._startAt.render(-1,!0)),e._zTime=t,!o)i(e._startAt,rt,rt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Qt(l)||l&&!g,w=0;w<m.length;w++){if(x=m[w],P=x._gsap||lu(m)[w]._gsap,e._ptLookup[w]=G={},Fl[P.id]&&Fi.length&&fo(),W=E===m?w:E.indexOf(x),B&&(O=new B).init(x,V||T,e,W,E)!==!1&&(e._pt=C=new tn(e._pt,x,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(k){G[k]=C}),O.priority&&(b=1)),!B||V)for(A in T)fn[A]&&(O=qd(A,T,e,W,x,E))?O.priority&&(b=1):G[A]=C=uu.call(e,x,A,"get",T[A],W,E,0,r.stringFilter);e._op&&e._op[w]&&e.kill(x,e._op[w]),S&&e._pt&&(Ii=e,ht.killTweensOf(x,G,e.globalTime(t)),Y=!e.parent,Ii=0),e._pt&&l&&(Fl[P.id]=1)}b&&Jd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Y,h&&t<=0&&v.render(Tn,!0,!0)},X_=function(e,t,n,r,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Vl=1,e.vars[t]="+=0",fu(e,o),Vl=0,l?Js(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=n-u.s,f.e&&(f.e=St(n)+Bt(f.e)),f.b&&(f.b=u.s+Bt(f.b))},q_=function(e,t){var n=e[0]?mr(e[0]).harness:0,r=n&&n.aliases,s,a,o,l;if(!r)return t;s=fs({},t);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Y_=function(e,t,n,r){var s=t.ease||r||"power1.inOut",a,o;if(zt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Gs=function(e,t,n,r,s){return gt(e)?e.call(t,n,r,s):Dt(e)&&~e.indexOf("random(")?ea(e):e},Yd=ou+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",$d={};en(Yd+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return $d[i]=1});var Tt=function(i){hd(e,i);function e(n,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=i.call(this,a?r:Hs(r))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,E=r.parent||ht,S=(zt(n)||pd(n)?_i(n[0]):"length"in r)?[n]:bn(n),v,T,w,A,C,x,b,P;if(o._targets=S.length?lu(S):Js("GSAP target "+n+" not found. https://gsap.com",!pn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,g||h||Ea(c)||Ea(u)){if(r=o.vars,v=o.timeline=new Yt({data:"nested",defaults:_||{},targets:E&&E.data==="nested"?E.vars.targets:S}),v.kill(),v.parent=v._dp=si(o),v._start=0,h||Ea(c)||Ea(u)){if(A=S.length,b=h&&Ld(h),$n(h))for(C in h)~Yd.indexOf(C)&&(P||(P={}),P[C]=h[C]);for(T=0;T<A;T++)w=ho(r,$d),w.stagger=0,p&&(w.yoyoEase=p),P&&fs(w,P),x=S[T],w.duration=+Gs(c,si(o),T,x,S),w.delay=(+Gs(u,si(o),T,x,S)||0)-o._delay,!h&&A===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),v.to(x,w,b?b(T,x,S):0),v._ease=Ve.none;v.duration()?c=u=0:o.timeline=0}else if(g){Hs(gn(v.vars.defaults,{ease:"none"})),v._ease=gr(g.ease||r.ease||"none");var B=0,O,G,W;if(zt(g))g.forEach(function(V){return v.to(S,V,">")}),v.duration();else{w={};for(C in g)C==="ease"||C==="easeEach"||Y_(C,g[C],w,g.easeEach);for(C in w)for(O=w[C].sort(function(V,Y){return V.t-Y.t}),B=0,T=0;T<O.length;T++)G=O[T],W={ease:G.e,duration:(G.t-(T?O[T-1].t:0))/100*c},W[C]=G.v,v.to(S,W,B),B+=W.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||o.duration(c=v.duration())}else o.timeline=0;return d===!0&&!tu&&(Ii=si(o),ht.killTweensOf(S),Ii=0),Vn(E,si(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(f||!c&&!g&&o._start===bt(E._time)&&Qt(f)&&T_(si(o))&&E.data!=="nested")&&(o._tTime=-rt,o.render(Math.max(0,-u)||0)),m&&Rd(si(o),m),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-rt&&!u?l:r<rt?0:r,h,d,g,_,m,p,E,S,v;if(!c)w_(this,r,s,a);else if(f!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,S=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,a);if(h=bt(f%_),f===l?(g=this._repeat,h=c):(m=bt(f/_),g=~~m,g&&g===m?(h=c,g--):h>c&&(h=c)),p=this._yoyo&&g&1,p&&(v=this._yEase,h=c-h),m=hs(this._tTime,_),h===o&&!a&&this._initted&&g===m)return this._tTime=f,this;g!==m&&(S&&this._yEase&&Gd(S,p),this.vars.repeatRefresh&&!p&&!this._lock&&h!==_&&this._initted&&(this._lock=a=1,this.render(bt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Cd(this,u?r:h,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=E=(v||this._ease)(h/c),this._from&&(this.ratio=E=1-E),!o&&f&&!s&&!m&&(dn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(E,d.d),d=d._next;S&&S.render(r<0?r:S._dur*S._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Ol(this,r,s,a),dn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&dn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Ol(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Vi(this,1),!s&&!(u&&!o)&&(f||o||p)&&(dn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,l){ta||hn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||fu(this,c),u=this._ease(c/this._dur),X_(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(Co(this,0),this.parent||wd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Os(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ut),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Ii&&Ii.vars.overwrite!==!0)._first||Os(this),this.parent&&a!==this.timeline.totalDuration()&&ds(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?bn(r):o,c=this._ptLookup,u=this._pt,f,h,d,g,_,m,p;if((!s||s==="all")&&E_(o,l))return s==="all"&&(this._pt=0),Os(this);for(f=this._op=this._op||[],s!=="all"&&(Dt(s)&&(_={},en(s,function(E){return _[E]=1}),s=_),s=q_(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){h=c[p],s==="all"?(f[p]=s,g=h,d={}):(d=f[p]=f[p]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Ao(this,m,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Os(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Vs(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return Vs(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return ht.killTweensOf(r,s,a)},e}(na);gn(Tt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});en("staggerTo,staggerFrom,staggerFromTo",function(i){Tt[i]=function(){var e=new Yt,t=zl.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var hu=function(e,t,n){return e[t]=n},Zd=function(e,t,n){return e[t](n)},$_=function(e,t,n,r){return e[t](r.fp,n)},Z_=function(e,t,n){return e.setAttribute(t,n)},du=function(e,t){return gt(e[t])?Zd:nu(e[t])&&e.setAttribute?Z_:hu},Kd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},K_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},jd=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},pu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},j_=function(e,t,n,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,n),s=a},J_=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Ao(this,t,"_pt"):t.dep||(n=1),t=r;return!n},Q_=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Jd=function(e){for(var t=e._pt,n,r,s,a;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=s},tn=function(){function i(t,n,r,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=r,this.r=o||Kd,this.d=l||this,this.set=c||hu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=Q_,this.m=n,this.mt=s,this.tween=r},i}();en(ou+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return au[i]=1});_n.TweenMax=_n.TweenLite=Tt;_n.TimelineLite=_n.TimelineMax=Yt;ht=new Yt({sortChildren:!1,defaults:us,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});pn.stringFilter=Hd;var vr=[],Za={},eg=[],uf=0,tg=0,Xo=function(e){return(Za[e]||eg).map(function(t){return t()})},Gl=function(){var e=Date.now(),t=[];e-uf>2&&(Xo("matchMediaInit"),vr.forEach(function(n){var r=n.queries,s=n.conditions,a,o,l,c;for(o in r)a=zn.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Xo("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),uf=e,Xo("matchMedia"))},Qd=function(){function i(t,n){this.selector=n&&kl(n),this.data=[],this._r=[],this.isReverted=!1,this.id=tg++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){gt(n)&&(s=r,r=n,n=gt);var a=this,o=function(){var c=ct,u=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=kl(s)),ct=a,f=r.apply(a,arguments),gt(f)&&a._r.push(f),ct=c,a.selector=u,a.isReverted=!1,f};return a.last=o,n===gt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var r=ct;ct=null,n(this),ct=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Tt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Yt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Tt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=vr.length;a--;)vr[a].id===this.id&&vr.splice(a,1)},e.revert=function(n){this.kill(n||{})},i}(),ng=function(){function i(t){this.contexts=[],this.scope=t,ct&&ct.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){$n(n)||(n={matches:n});var a=new Qd(0,s||this.scope),o=a.conditions={},l,c,u;ct&&!a.selector&&(a.selector=ct.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=n;for(c in n)c==="all"?u=1:(l=zn.matchMedia(n[c]),l&&(vr.indexOf(a)<0&&vr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Gl):l.addEventListener("change",Gl)));return u&&r(a,function(f){return a.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),mo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return Bd(r)})},timeline:function(e){return new Yt(e)},getTweensOf:function(e,t){return ht.getTweensOf(e,t)},getProperty:function(e,t,n,r){Dt(e)&&(e=bn(e)[0]);var s=mr(e||{}).get,a=n?bd:Td;return n==="native"&&(n=""),e&&(t?a((fn[t]&&fn[t].get||s)(e,t,n,r)):function(o,l,c){return a((fn[o]&&fn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=bn(e),e.length>1){var r=e.map(function(u){return sn.quickSetter(u,t,n)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var a=fn[t],o=mr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var f=new a;Kr._pt=0,f.init(e,n?u+n:u,Kr,0,[e]),f.render(1,f),Kr._pt&&pu(1,Kr)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var r,s=sn.to(e,gn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return ht.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=gr(e.ease,us.ease)),sf(us,e||{})},config:function(e){return sf(pn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!fn[o]&&!_n[o]&&Js(t+" effect requires "+o+" plugin.")}),Ho[t]=function(o,l,c){return n(bn(o),gn(l||{},s),c)},a&&(Yt.prototype[t]=function(o,l,c){return this.add(Ho[t](o,$n(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ve[e]=gr(t)},parseEase:function(e,t){return arguments.length?gr(e,t):Ve},getById:function(e){return ht.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Yt(e),r,s;for(n.smoothChildTiming=Qt(e.smoothChildTiming),ht.remove(n),n._dp=0,n._time=n._tTime=ht._time,r=ht._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Tt&&r.vars.onComplete===r._targets[0]))&&Vn(n,r,r._start-r._delay),r=s;return Vn(ht,n,0),n},context:function(e,t){return e?new Qd(e,t):ct},matchMedia:function(e){return new ng(e)},matchMediaRefresh:function(){return vr.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Gl()},addEventListener:function(e,t){var n=Za[e]||(Za[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Za[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:U_,wrapYoyo:N_,distribute:Ld,random:Ud,snap:Id,normalize:I_,getUnit:Bt,clamp:C_,splitColor:zd,toArray:bn,selector:kl,mapRange:Fd,pipe:D_,unitize:L_,interpolate:F_,shuffle:Dd},install:xd,effects:Ho,ticker:hn,updateRoot:Yt.updateRoot,plugins:fn,globalTimeline:ht,core:{PropTween:tn,globals:Md,Tween:Tt,Timeline:Yt,Animation:na,getCache:mr,_removeLinkedListItem:Ao,reverting:function(){return Ut},context:function(e){return e&&ct&&(ct.data.push(e),e._ctx=ct),ct},suppressOverwrites:function(e){return tu=e}}};en("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return mo[i]=Tt[i]});hn.add(Yt.updateRoot);Kr=mo.to({},{duration:0});var ig=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},rg=function(e,t){var n=e._targets,r,s,a;for(r in t)for(s=n.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=ig(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[s],r))},qo=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(Dt(s)&&(l={},en(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}rg(o,s)}}}},sn=mo.registerPlugin({name:"attr",init:function(e,t,n,r,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Ut?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},qo("roundProps",Hl),qo("modifiers"),qo("snap",Id))||mo;Tt.version=Yt.version=sn.version="3.13.0";vd=1;iu()&&ps();Ve.Power0;Ve.Power1;Ve.Power2;Ve.Power3;Ve.Power4;Ve.Linear;Ve.Quad;Ve.Cubic;Ve.Quart;Ve.Quint;Ve.Strong;Ve.Elastic;Ve.Back;Ve.SteppedEase;Ve.Bounce;Ve.Sine;Ve.Expo;Ve.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ff,Ui,is,mu,lr,hf,_u,sg=function(){return typeof window<"u"},gi={},rr=180/Math.PI,rs=Math.PI/180,Dr=Math.atan2,df=1e8,gu=/([A-Z])/g,ag=/(left|right|width|margin|padding|x)/i,og=/[\s,\(]\S/,Gn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Wl=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},lg=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},cg=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ug=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},ep=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},tp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},fg=function(e,t,n){return e.style[t]=n},hg=function(e,t,n){return e.style.setProperty(t,n)},dg=function(e,t,n){return e._gsap[t]=n},pg=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},mg=function(e,t,n,r,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},_g=function(e,t,n,r,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},dt="transform",nn=dt+"Origin",gg=function i(e,t){var n=this,r=this.target,s=r.style,a=r._gsap;if(e in gi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Gn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=oi(r,o)}):this.tfm[e]=a.x?a[e]:oi(r,e),e===nn&&(this.tfm.zOrigin=a.zOrigin);else return Gn.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(dt)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(nn,t,"")),e=dt}(s||t)&&this.props.push(e,t,s[e])},np=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},vg=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(gu,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=_u(),(!s||!s.isStart)&&!n[dt]&&(np(n),r.zOrigin&&n[nn]&&(n[nn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},ip=function(e,t){var n={target:e,props:[],revert:vg,save:gg};return e._gsap||sn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},rp,Xl=function(e,t){var n=Ui.createElementNS?Ui.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ui.createElement(e);return n&&n.style?n:Ui.createElement(e)},wn=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(gu,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,ms(t)||t,1)||""},pf="O,Moz,ms,Ms,Webkit".split(","),ms=function(e,t,n){var r=t||lr,s=r.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(pf[a]+e in s););return a<0?null:(a===3?"ms":a>=0?pf[a]:"")+e},ql=function(){sg()&&window.document&&(ff=window,Ui=ff.document,is=Ui.documentElement,lr=Xl("div")||{style:{}},Xl("div"),dt=ms(dt),nn=dt+"Origin",lr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",rp=!!ms("perspective"),_u=sn.core.reverting,mu=1)},mf=function(e){var t=e.ownerSVGElement,n=Xl("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),is.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),is.removeChild(n),s},_f=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},sp=function(e){var t,n;try{t=e.getBBox()}catch{t=mf(e),n=1}return t&&(t.width||t.height)||n||(t=mf(e)),t&&!t.width&&!t.x&&!t.y?{x:+_f(e,["x","cx","x1"])||0,y:+_f(e,["y","cy","y1"])||0,width:0,height:0}:t},ap=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&sp(e))},Sr=function(e,t){if(t){var n=e.style,r;t in gi&&t!==nn&&(t=dt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(gu,"-$1").toLowerCase())):n.removeAttribute(t)}},Ni=function(e,t,n,r,s,a){var o=new tn(e._pt,t,n,0,1,a?tp:ep);return e._pt=o,o.b=r,o.e=s,e._props.push(n),o},gf={deg:1,rad:1,turn:1},xg={grid:1,flex:1},Gi=function i(e,t,n,r){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=lr.style,l=ag.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",d=r==="%",g,_,m,p;if(r===a||!s||gf[r]||gf[a])return s;if(a!=="px"&&!h&&(s=i(e,t,n,"px")),p=e.getCTM&&ap(e),(d||a==="%")&&(gi[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],St(d?s/g*f:s/100*g);if(o[l?"width":"height"]=f+(h?a:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Ui||!_.appendChild)&&(_=Ui.body),m=_._gsap,m&&d&&m.width&&l&&m.time===hn.time&&!m.uncache)return St(s/m.width*f);if(d&&(t==="height"||t==="width")){var E=e.style[t];e.style[t]=f+r,g=e[u],E?e.style[t]=E:Sr(e,t)}else(d||a==="%")&&!xg[wn(_,"display")]&&(o.position=wn(e,"position")),_===e&&(o.position="static"),_.appendChild(lr),g=lr[u],_.removeChild(lr),o.position="absolute";return l&&d&&(m=mr(_),m.time=hn.time,m.width=_[u]),St(h?g*s/f:g&&s?f/g*s:0)},oi=function(e,t,n,r){var s;return mu||ql(),t in Gn&&t!=="transform"&&(t=Gn[t],~t.indexOf(",")&&(t=t.split(",")[0])),gi[t]&&t!=="transform"?(s=ra(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:go(wn(e,nn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=_o[t]&&_o[t](e,t,n)||wn(e,t)||Ed(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Gi(e,t,s,n)+n:s},Mg=function(e,t,n,r){if(!n||n==="none"){var s=ms(t,e,1),a=s&&wn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=wn(e,"borderTopColor"))}var o=new tn(this._pt,e.style,t,0,1,jd),l=0,c=0,u,f,h,d,g,_,m,p,E,S,v,T;if(o.b=n,o.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=wn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=wn(e,t)||r,_?e.style[t]=_:Sr(e,t)),u=[n,r],Hd(u),n=u[0],r=u[1],h=n.match(Zr)||[],T=r.match(Zr)||[],T.length){for(;f=Zr.exec(r);)m=f[0],E=r.substring(l,f.index),g?g=(g+1)%5:(E.substr(-5)==="rgba("||E.substr(-5)==="hsla(")&&(g=1),m!==(_=h[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),m.charAt(1)==="="&&(m=ns(d,m)+v),p=parseFloat(m),S=m.substr((p+"").length),l=Zr.lastIndex-S.length,S||(S=S||pn.units[t]||v,l===r.length&&(r+=S,o.e+=S)),v!==S&&(d=Gi(e,t,_,S)||0),o._pt={_next:o._pt,p:E||c===1?E:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=t==="display"&&r==="none"?tp:ep;return _d.test(r)&&(o.e=0),this._pt=o,o},vf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Sg=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=vf[n]||n,t[1]=vf[r]||r,t.join(" ")},Eg=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],gi[o]&&(l=1,o=o==="transformOrigin"?nn:dt),Sr(n,o);l&&(Sr(n,dt),a&&(a.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",ra(n,1),a.uncache=1,np(r)))}},_o={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var a=e._pt=new tn(e._pt,t,n,0,0,Eg);return a.u=r,a.pr=-10,a.tween=s,e._props.push(n),1}}},ia=[1,0,0,1,0,0],op={},lp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},xf=function(e){var t=wn(e,dt);return lp(t)?ia:t.substr(7).match(md).map(St)},vu=function(e,t){var n=e._gsap||mr(e),r=e.style,s=xf(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ia:s):(s===ia&&!e.offsetParent&&e!==is&&!n.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,is.appendChild(e)),s=xf(e),l?r.display=l:Sr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):is.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Yl=function(e,t,n,r,s,a){var o=e._gsap,l=s||vu(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],E=l[5],S=t.split(" "),v=parseFloat(S[0])||0,T=parseFloat(S[1])||0,w,A,C,x;n?l!==ia&&(A=d*m-g*_)&&(C=v*(m/A)+T*(-_/A)+(_*E-m*p)/A,x=v*(-g/A)+T*(d/A)-(d*E-g*p)/A,v=C,T=x):(w=sp(e),v=w.x+(~S[0].indexOf("%")?v/100*w.width:v),T=w.y+(~(S[1]||S[0]).indexOf("%")?T/100*w.height:T)),r||r!==!1&&o.smooth?(p=v-c,E=T-u,o.xOffset=f+(p*d+E*_)-p,o.yOffset=h+(p*g+E*m)-E):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=T,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[nn]="0px 0px",a&&(Ni(a,o,"xOrigin",c,v),Ni(a,o,"yOrigin",u,T),Ni(a,o,"xOffset",f,o.xOffset),Ni(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+T)},ra=function(e,t){var n=e._gsap||new Xd(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=wn(e,nn)||"0",u,f,h,d,g,_,m,p,E,S,v,T,w,A,C,x,b,P,B,O,G,W,V,Y,k,re,ae,_e,Ce,et,Be,X;return u=f=h=_=m=p=E=S=v=0,d=g=1,n.svg=!!(e.getCTM&&ap(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[dt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[dt]!=="none"?l[dt]:"")),r.scale=r.rotate=r.translate="none"),A=vu(e,n.svg),n.svg&&(n.uncache?(k=e.getBBox(),c=n.xOrigin-k.x+"px "+(n.yOrigin-k.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),Yl(e,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,A)),T=n.xOrigin||0,w=n.yOrigin||0,A!==ia&&(P=A[0],B=A[1],O=A[2],G=A[3],u=W=A[4],f=V=A[5],A.length===6?(d=Math.sqrt(P*P+B*B),g=Math.sqrt(G*G+O*O),_=P||B?Dr(B,P)*rr:0,E=O||G?Dr(O,G)*rr+_:0,E&&(g*=Math.abs(Math.cos(E*rs))),n.svg&&(u-=T-(T*P+w*O),f-=w-(T*B+w*G))):(X=A[6],et=A[7],ae=A[8],_e=A[9],Ce=A[10],Be=A[11],u=A[12],f=A[13],h=A[14],C=Dr(X,Ce),m=C*rr,C&&(x=Math.cos(-C),b=Math.sin(-C),Y=W*x+ae*b,k=V*x+_e*b,re=X*x+Ce*b,ae=W*-b+ae*x,_e=V*-b+_e*x,Ce=X*-b+Ce*x,Be=et*-b+Be*x,W=Y,V=k,X=re),C=Dr(-O,Ce),p=C*rr,C&&(x=Math.cos(-C),b=Math.sin(-C),Y=P*x-ae*b,k=B*x-_e*b,re=O*x-Ce*b,Be=G*b+Be*x,P=Y,B=k,O=re),C=Dr(B,P),_=C*rr,C&&(x=Math.cos(C),b=Math.sin(C),Y=P*x+B*b,k=W*x+V*b,B=B*x-P*b,V=V*x-W*b,P=Y,W=k),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=St(Math.sqrt(P*P+B*B+O*O)),g=St(Math.sqrt(V*V+X*X)),C=Dr(W,V),E=Math.abs(C)>2e-4?C*rr:0,v=Be?1/(Be<0?-Be:Be):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!lp(wn(e,dt)),Y&&e.setAttribute("transform",Y))),Math.abs(E)>90&&Math.abs(E)<270&&(s?(d*=-1,E+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,E+=E<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=St(d),n.scaleY=St(g),n.rotation=St(_)+o,n.rotationX=St(m)+o,n.rotationY=St(p)+o,n.skewX=E+o,n.skewY=S+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[nn]=go(c)),n.xOffset=n.yOffset=0,n.force3D=pn.force3D,n.renderTransform=n.svg?Tg:rp?cp:yg,n.uncache=0,n},go=function(e){return(e=e.split(" "))[0]+" "+e[1]},Yo=function(e,t,n){var r=Bt(t);return St(parseFloat(t)+parseFloat(Gi(e,"x",n+"px",r)))+r},yg=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,cp(e,t)},Ki="0deg",Ps="0px",ji=") ",cp=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,E=n.target,S=n.zOrigin,v="",T=p==="auto"&&e&&e!==1||p===!0;if(S&&(f!==Ki||u!==Ki)){var w=parseFloat(u)*rs,A=Math.sin(w),C=Math.cos(w),x;w=parseFloat(f)*rs,x=Math.cos(w),a=Yo(E,a,A*x*-S),o=Yo(E,o,-Math.sin(w)*-S),l=Yo(E,l,C*x*-S+S)}m!==Ps&&(v+="perspective("+m+ji),(r||s)&&(v+="translate("+r+"%, "+s+"%) "),(T||a!==Ps||o!==Ps||l!==Ps)&&(v+=l!==Ps||T?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+ji),c!==Ki&&(v+="rotate("+c+ji),u!==Ki&&(v+="rotateY("+u+ji),f!==Ki&&(v+="rotateX("+f+ji),(h!==Ki||d!==Ki)&&(v+="skew("+h+", "+d+ji),(g!==1||_!==1)&&(v+="scale("+g+", "+_+ji),E.style[dt]=v||"translate(0, 0)"},Tg=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,E=n.forceCSS,S=parseFloat(a),v=parseFloat(o),T,w,A,C,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=rs,c*=rs,T=Math.cos(l)*f,w=Math.sin(l)*f,A=Math.sin(l-c)*-h,C=Math.cos(l-c)*h,c&&(u*=rs,x=Math.tan(c-u),x=Math.sqrt(1+x*x),A*=x,C*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),T*=x,w*=x)),T=St(T),w=St(w),A=St(A),C=St(C)):(T=f,C=h,w=A=0),(S&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(S=Gi(d,"x",a,"px"),v=Gi(d,"y",o,"px")),(g||_||m||p)&&(S=St(S+g-(g*T+_*A)+m),v=St(v+_-(g*w+_*C)+p)),(r||s)&&(x=d.getBBox(),S=St(S+r/100*x.width),v=St(v+s/100*x.height)),x="matrix("+T+","+w+","+A+","+C+","+S+","+v+")",d.setAttribute("transform",x),E&&(d.style[dt]=x)},bg=function(e,t,n,r,s){var a=360,o=Dt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?rr:1),c=l-r,u=r+c+"deg",f,h;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*df)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*df)%a-~~(c/a)*a)),e._pt=h=new tn(e._pt,t,n,r,c,lg),h.e=u,h.u="deg",e._props.push(n),h},Mf=function(e,t){for(var n in t)e[n]=t[n];return e},wg=function(e,t,n){var r=Mf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,f,h,d,g;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[dt]=t,o=ra(n,1),Sr(n,dt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[dt],a[dt]=t,o=ra(n,1),a[dt]=c);for(l in gi)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=Bt(c),g=Bt(u),f=d!==g?Gi(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new tn(e._pt,o,l,f,h-f,Wl),e._pt.u=g||0,e._props.push(l));Mf(o,r)};en("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",a=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(o){return e<2?i+o:"border"+o+i});_o[e>1?"border"+i:i]=function(o,l,c,u,f){var h,d;if(arguments.length<4)return h=a.map(function(g){return oi(o,g,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},a.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),o.init(l,d,f)}});var up={name:"css",register:ql,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,f,h,d,g,_,m,p,E,S,v,T,w,A,C;mu||ql(),this.styles=this.styles||ip(e),C=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(fn[_]&&qd(_,t,n,r,e,s)))){if(d=typeof u,g=_o[_],d==="function"&&(u=u.call(n,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=ea(u)),g)g(this,e,_,u,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Oi.lastIndex=0,Oi.test(c)||(m=Bt(c),p=Bt(u)),p?m!==p&&(c=Gi(e,_,c,p)+p):m&&(u+=m),this.add(o,"setProperty",c,u,r,s,0,0,_),a.push(_),C.push(_,0,o[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,r,e,s):l[_],Dt(c)&&~c.indexOf("random(")&&(c=ea(c)),Bt(c+"")||c==="auto"||(c+=pn.units[_]||Bt(oi(e,_))||""),(c+"").charAt(1)==="="&&(c=oi(e,_))):c=oi(e,_),h=parseFloat(c),E=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),E&&(u=u.substr(2)),f=parseFloat(u),_ in Gn&&(_==="autoAlpha"&&(h===1&&oi(e,"visibility")==="hidden"&&f&&(h=0),C.push("visibility",0,o.visibility),Ni(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Gn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),S=_ in gi,S){if(this.styles.save(_),d==="string"&&u.substring(0,6)==="var(--"&&(u=wn(e,u.substring(4,u.indexOf(")"))),f=parseFloat(u)),v||(T=e._gsap,T.renderTransform&&!t.parseTransform||ra(e,t.parseTransform),w=t.smoothOrigin!==!1&&T.smooth,v=this._pt=new tn(this._pt,o,dt,0,1,T.renderTransform,T,0,-1),v.dep=1),_==="scale")this._pt=new tn(this._pt,T,"scaleY",T.scaleY,(E?ns(T.scaleY,E+f):f)-T.scaleY||0,Wl),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(nn,0,o[nn]),u=Sg(u),T.svg?Yl(e,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==T.zOrigin&&Ni(this,T,"zOrigin",T.zOrigin,p),Ni(this,o,_,go(c),go(u)));continue}else if(_==="svgOrigin"){Yl(e,u,1,w,0,this);continue}else if(_ in op){bg(this,T,_,h,E?ns(h,E+u):u);continue}else if(_==="smoothOrigin"){Ni(this,T,"smooth",T.smooth,u);continue}else if(_==="force3D"){T[_]=u;continue}else if(_==="transform"){wg(this,u,e);continue}}else _ in o||(_=ms(_)||_);if(S||(f||f===0)&&(h||h===0)&&!og.test(u)&&_ in o)m=(c+"").substr((h+"").length),f||(f=0),p=Bt(u)||(_ in pn.units?pn.units[_]:m),m!==p&&(h=Gi(e,_,c,p)),this._pt=new tn(this._pt,S?T:o,_,h,(E?ns(h,E+f):f)-h,!S&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?ug:Wl),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=cg);else if(_ in o)Mg.call(this,e,_,c,E?E+u:u);else if(_ in e)this.add(e,_,c||e[_],E?E+u:u,r,s);else if(_!=="parseTransform"){su(_,u);continue}S||(_ in o?C.push(_,0,o[_]):typeof e[_]=="function"?C.push(_,2,e[_]()):C.push(_,1,c||e[_])),a.push(_)}}A&&Jd(this)},render:function(e,t){if(t.tween._time||!_u())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:oi,aliases:Gn,getSetter:function(e,t,n){var r=Gn[t];return r&&r.indexOf(",")<0&&(t=r),t in gi&&t!==nn&&(e._gsap.x||oi(e,"x"))?n&&hf===n?t==="scale"?pg:dg:(hf=n||{})&&(t==="scale"?mg:_g):e.style&&!nu(e.style[t])?fg:~t.indexOf("-")?hg:du(e,t)},core:{_removeProperty:Sr,_getMatrix:vu}};sn.utils.checkPrefix=ms;sn.core.getStyleSaver=ip;(function(i,e,t,n){var r=en(i+","+e+","+t,function(s){gi[s]=1});en(e,function(s){pn.units[s]="deg",op[s]=1}),Gn[r[13]]=i+","+e,en(n,function(s){var a=s.split(":");Gn[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");en("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){pn.units[i]="px"});sn.registerPlugin(up);var Jt=sn.registerPlugin(up)||sn;Jt.core.Tween;const Ag="modulepreload",Rg=function(i){return"/"+i},Sf={},Cg=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let c=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};var a=c;document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");r=c(t.map(u=>{if(u=Rg(u),u in Sf)return;Sf[u]=!0;const f=u.endsWith(".css"),h=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${h}`))return;const d=document.createElement("link");if(d.rel=f?"stylesheet":Ag,f||(d.as="script"),d.crossOrigin="",d.href=u,l&&d.setAttribute("nonce",l),document.head.appendChild(d),f)return new Promise((g,_)=>{d.addEventListener("load",g),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return r.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xu="179",Pg=0,Ef=1,Dg=2,fp=1,Lg=2,ri=3,Wi=0,rn=1,ui=2,Bi=0,ss=1,yf=2,Tf=3,bf=4,Ig=5,ar=100,Ug=101,Ng=102,Fg=103,Og=104,Bg=200,zg=201,kg=202,Hg=203,$l=204,Zl=205,Vg=206,Gg=207,Wg=208,Xg=209,qg=210,Yg=211,$g=212,Zg=213,Kg=214,Kl=0,jl=1,Jl=2,_s=3,Ql=4,ec=5,tc=6,nc=7,hp=0,jg=1,Jg=2,di=0,Qg=1,e0=2,t0=3,n0=4,i0=5,r0=6,s0=7,dp=300,gs=301,vs=302,ic=303,rc=304,Po=306,sc=1e3,cr=1001,ac=1002,Fn=1003,a0=1004,ya=1005,Wn=1006,$o=1007,ur=1008,Zn=1009,pp=1010,mp=1011,sa=1012,Mu=1013,Er=1014,fi=1015,_a=1016,Su=1017,Eu=1018,aa=1020,_p=35902,gp=1021,vp=1022,Un=1023,oa=1026,la=1027,xp=1028,yu=1029,Mp=1030,Tu=1031,bu=1033,Ka=33776,ja=33777,Ja=33778,Qa=33779,oc=35840,lc=35841,cc=35842,uc=35843,fc=36196,hc=37492,dc=37496,pc=37808,mc=37809,_c=37810,gc=37811,vc=37812,xc=37813,Mc=37814,Sc=37815,Ec=37816,yc=37817,Tc=37818,bc=37819,wc=37820,Ac=37821,eo=36492,Rc=36494,Cc=36495,Sp=36283,Pc=36284,Dc=36285,Lc=36286,o0=3200,l0=3201,Ep=0,c0=1,Pi="",Pt="srgb",xs="srgb-linear",vo="linear",Qe="srgb",Lr=7680,wf=519,u0=512,f0=513,h0=514,yp=515,d0=516,p0=517,m0=518,_0=519,Af=35044,Rf="300 es",Xn=2e3,xo=2001;class Ts{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cf=1234567;const Ws=Math.PI/180,ca=180/Math.PI;function bs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function ke(i,e,t){return Math.max(e,Math.min(t,i))}function wu(i,e){return(i%e+e)%e}function g0(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function v0(i,e,t){return i!==e?(t-i)/(e-i):0}function Xs(i,e,t){return(1-t)*i+t*e}function x0(i,e,t,n){return Xs(i,e,1-Math.exp(-t*n))}function M0(i,e=1){return e-Math.abs(wu(i,e*2)-e)}function S0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function E0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function y0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function T0(i,e){return i+Math.random()*(e-i)}function b0(i){return i*(.5-Math.random())}function w0(i){i!==void 0&&(Cf=i);let e=Cf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function A0(i){return i*Ws}function R0(i){return i*ca}function C0(i){return(i&i-1)===0&&i!==0}function P0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function D0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function L0(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),f=s((e-n)/2),h=a((e-n)/2),d=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*u,l*f,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*f,o*c);break;case"ZXZ":i.set(l*f,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*d,o*c);break;case"YXY":i.set(l*d,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Yr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Pf={DEG2RAD:Ws,RAD2DEG:ca,generateUUID:bs,clamp:ke,euclideanModulo:wu,mapLinear:g0,inverseLerp:v0,lerp:Xs,damp:x0,pingpong:M0,smoothstep:S0,smootherstep:E0,randInt:y0,randFloat:T0,randFloatSpread:b0,seededRandom:w0,degToRad:A0,radToDeg:R0,isPowerOfTwo:C0,ceilPowerOfTwo:P0,floorPowerOfTwo:D0,setQuaternionFromProperEuler:L0,normalize:Vt,denormalize:Yr};class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ga{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const h=s[a+0],d=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=1-o;const p=l*h+c*d+u*g+f*_,E=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const T=Math.sqrt(S),w=Math.atan2(T,p*E);m=Math.sin(m*w)/T,o=Math.sin(o*w)/T}const v=o*E;if(l=l*m+h*v,c=c*m+d*v,u=u*m+g*v,f=f*m+_*v,m===1-o){const T=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=T,c*=T,u*=T,f*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[a],h=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-o*d,e[t+2]=c*g+u*d+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),f=o(s/2),h=l(n/2),d=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Df.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Df.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),f=2*(s*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zo.copy(this).projectOnVector(e),this.sub(Zo)}reflect(e){return this.sub(Zo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zo=new N,Df=new ga;class Ne{constructor(e,t,n,r,s,a,o,l,c){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],_=r[0],m=r[3],p=r[6],E=r[1],S=r[4],v=r[7],T=r[2],w=r[5],A=r[8];return s[0]=a*_+o*E+l*T,s[3]=a*m+o*S+l*w,s[6]=a*p+o*v+l*A,s[1]=c*_+u*E+f*T,s[4]=c*m+u*S+f*w,s[7]=c*p+u*v+f*A,s[2]=h*_+d*E+g*T,s[5]=h*m+d*S+g*w,s[8]=h*p+d*v+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,d=c*s-a*l,g=t*f+n*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*n)*_,e[2]=(o*n-r*a)*_,e[3]=h*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ko.makeScale(e,t)),this}rotate(e){return this.premultiply(Ko.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ko.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ko=new Ne;function Tp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ua(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function I0(){const i=ua("canvas");return i.style.display="block",i}const Lf={};function as(i){i in Lf||(Lf[i]=!0,console.warn(i))}function U0(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const If=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uf=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function N0(){const i={enabled:!0,workingColorSpace:xs,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Qe&&(r.r=pi(r.r),r.g=pi(r.g),r.b=pi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qe&&(r.r=os(r.r),r.g=os(r.g),r.b=os(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Pi?vo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return as("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return as("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[xs]:{primaries:e,whitePoint:n,transfer:vo,toXYZ:If,fromXYZ:Uf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:e,whitePoint:n,transfer:Qe,toXYZ:If,fromXYZ:Uf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}}),i}const Ze=N0();function pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function os(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ir;class F0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ir===void 0&&(Ir=ua("canvas")),Ir.width=e.width,Ir.height=e.height;const r=Ir.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ir}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ua("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=pi(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(pi(t[n]/255)*255):t[n]=pi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let O0=0;class Au{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=bs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(jo(r[a].image)):s.push(jo(r[a]))}else s=jo(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function jo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?F0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let B0=0;const Jo=new N;class Kt extends Ts{constructor(e=Kt.DEFAULT_IMAGE,t=Kt.DEFAULT_MAPPING,n=cr,r=cr,s=Wn,a=ur,o=Un,l=Zn,c=Kt.DEFAULT_ANISOTROPY,u=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=bs(),this.name="",this.source=new Au(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Jo).x}get height(){return this.source.getSize(Jo).y}get depth(){return this.source.getSize(Jo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sc:e.x=e.x-Math.floor(e.x);break;case cr:e.x=e.x<0?0:1;break;case ac:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sc:e.y=e.y-Math.floor(e.y);break;case cr:e.y=e.y<0?0:1;break;case ac:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=dp;Kt.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,n=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,v=(d+1)/2,T=(p+1)/2,w=(u+h)/4,A=(f+_)/4,C=(g+m)/4;return S>v&&S>T?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=w/n,s=A/n):v>T?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=w/r,s=C/r):T<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),n=A/s,r=C/s),this.set(n,r,s,t),this}let E=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(f-_)/E,this.z=(h-u)/E,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class z0 extends Ts{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new Kt(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Au(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yr extends z0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class bp extends Kt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class k0 extends Kt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class va{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Cn):Cn.fromBufferAttribute(s,a),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ta.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ta.copy(n.boundingBox)),Ta.applyMatrix4(e.matrixWorld),this.union(Ta)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ds),ba.subVectors(this.max,Ds),Ur.subVectors(e.a,Ds),Nr.subVectors(e.b,Ds),Fr.subVectors(e.c,Ds),Si.subVectors(Nr,Ur),Ei.subVectors(Fr,Nr),Ji.subVectors(Ur,Fr);let t=[0,-Si.z,Si.y,0,-Ei.z,Ei.y,0,-Ji.z,Ji.y,Si.z,0,-Si.x,Ei.z,0,-Ei.x,Ji.z,0,-Ji.x,-Si.y,Si.x,0,-Ei.y,Ei.x,0,-Ji.y,Ji.x,0];return!Qo(t,Ur,Nr,Fr,ba)||(t=[1,0,0,0,1,0,0,0,1],!Qo(t,Ur,Nr,Fr,ba))?!1:(wa.crossVectors(Si,Ei),t=[wa.x,wa.y,wa.z],Qo(t,Ur,Nr,Fr,ba))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Qn=[new N,new N,new N,new N,new N,new N,new N,new N],Cn=new N,Ta=new va,Ur=new N,Nr=new N,Fr=new N,Si=new N,Ei=new N,Ji=new N,Ds=new N,ba=new N,wa=new N,Qi=new N;function Qo(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Qi.fromArray(i,s);const o=r.x*Math.abs(Qi.x)+r.y*Math.abs(Qi.y)+r.z*Math.abs(Qi.z),l=e.dot(Qi),c=t.dot(Qi),u=n.dot(Qi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const H0=new va,Ls=new N,el=new N;class Ru{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):H0.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ls.subVectors(e,this.center);const t=Ls.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ls,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(el.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ls.copy(e.center).add(el)),this.expandByPoint(Ls.copy(e.center).sub(el))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ei=new N,tl=new N,Aa=new N,yi=new N,nl=new N,Ra=new N,il=new N;class wp{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,t),ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){tl.copy(e).add(t).multiplyScalar(.5),Aa.copy(t).sub(e).normalize(),yi.copy(this.origin).sub(tl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Aa),o=yi.dot(this.direction),l=-yi.dot(Aa),c=yi.lengthSq(),u=Math.abs(1-a*a);let f,h,d,g;if(u>0)if(f=a*l-o,h=a*o-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(tl).addScaledVector(Aa,h),d}intersectSphere(e,t){ei.subVectors(e.center,this.origin);const n=ei.dot(this.direction),r=ei.dot(ei)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,n,r,s){nl.subVectors(t,e),Ra.subVectors(n,e),il.crossVectors(nl,Ra);let a=this.direction.dot(il),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;yi.subVectors(this.origin,e);const l=o*this.direction.dot(Ra.crossVectors(yi,Ra));if(l<0)return null;const c=o*this.direction.dot(nl.cross(yi));if(c<0||l+c>a)return null;const u=-o*yi.dot(il);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,t,n,r,s,a,o,l,c,u,f,h,d,g,_,m){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,f,h,d,g,_,m)}set(e,t,n,r,s,a,o,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Or.setFromMatrixColumn(e,0).length(),s=1/Or.setFromMatrixColumn(e,1).length(),a=1/Or.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,d=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*o,t[4]=-a*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=a*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(V0,e,G0)}lookAt(e,t,n){const r=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Ti.crossVectors(n,ln),Ti.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Ti.crossVectors(n,ln)),Ti.normalize(),Ca.crossVectors(ln,Ti),r[0]=Ti.x,r[4]=Ca.x,r[8]=ln.x,r[1]=Ti.y,r[5]=Ca.y,r[9]=ln.y,r[2]=Ti.z,r[6]=Ca.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],E=n[3],S=n[7],v=n[11],T=n[15],w=r[0],A=r[4],C=r[8],x=r[12],b=r[1],P=r[5],B=r[9],O=r[13],G=r[2],W=r[6],V=r[10],Y=r[14],k=r[3],re=r[7],ae=r[11],_e=r[15];return s[0]=a*w+o*b+l*G+c*k,s[4]=a*A+o*P+l*W+c*re,s[8]=a*C+o*B+l*V+c*ae,s[12]=a*x+o*O+l*Y+c*_e,s[1]=u*w+f*b+h*G+d*k,s[5]=u*A+f*P+h*W+d*re,s[9]=u*C+f*B+h*V+d*ae,s[13]=u*x+f*O+h*Y+d*_e,s[2]=g*w+_*b+m*G+p*k,s[6]=g*A+_*P+m*W+p*re,s[10]=g*C+_*B+m*V+p*ae,s[14]=g*x+_*O+m*Y+p*_e,s[3]=E*w+S*b+v*G+T*k,s[7]=E*A+S*P+v*W+T*re,s[11]=E*C+S*B+v*V+T*ae,s[15]=E*x+S*O+v*Y+T*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*c*f-s*o*h+n*c*h+r*o*d-n*l*d)+_*(+t*l*d-t*c*h+s*a*h-r*a*d+r*c*u-s*l*u)+m*(+t*c*f-t*o*d-s*a*f+n*a*d+s*o*u-n*c*u)+p*(-r*o*u-t*l*f+t*o*h+r*a*f-n*a*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],E=f*m*c-_*h*c+_*l*d-o*m*d-f*l*p+o*h*p,S=g*h*c-u*m*c-g*l*d+a*m*d+u*l*p-a*h*p,v=u*_*c-g*f*c+g*o*d-a*_*d-u*o*p+a*f*p,T=g*f*l-u*_*l-g*o*h+a*_*h+u*o*m-a*f*m,w=t*E+n*S+r*v+s*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=E*A,e[1]=(_*h*s-f*m*s-_*r*d+n*m*d+f*r*p-n*h*p)*A,e[2]=(o*m*s-_*l*s+_*r*c-n*m*c-o*r*p+n*l*p)*A,e[3]=(f*l*s-o*h*s-f*r*c+n*h*c+o*r*d-n*l*d)*A,e[4]=S*A,e[5]=(u*m*s-g*h*s+g*r*d-t*m*d-u*r*p+t*h*p)*A,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*p-t*l*p)*A,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*d+t*l*d)*A,e[8]=v*A,e[9]=(g*f*s-u*_*s-g*n*d+t*_*d+u*n*p-t*f*p)*A,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*p+t*o*p)*A,e[11]=(u*o*s-a*f*s-u*n*c+t*f*c+a*n*d-t*o*d)*A,e[12]=T*A,e[13]=(u*_*r-g*f*r+g*n*h-t*_*h-u*n*m+t*f*m)*A,e[14]=(g*o*r-a*_*r-g*n*l+t*_*l+a*n*m-t*o*m)*A,e[15]=(a*f*r-u*o*r+u*n*l-t*f*l-a*n*h+t*o*h)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,d=s*u,g=s*f,_=a*u,m=a*f,p=o*f,E=l*c,S=l*u,v=l*f,T=n.x,w=n.y,A=n.z;return r[0]=(1-(_+p))*T,r[1]=(d+v)*T,r[2]=(g-S)*T,r[3]=0,r[4]=(d-v)*w,r[5]=(1-(h+p))*w,r[6]=(m+E)*w,r[7]=0,r[8]=(g+S)*A,r[9]=(m-E)*A,r[10]=(1-(h+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Or.set(r[0],r[1],r[2]).length();const a=Or.set(r[4],r[5],r[6]).length(),o=Or.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Pn.copy(this);const c=1/s,u=1/a,f=1/o;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=u,Pn.elements[5]*=u,Pn.elements[6]*=u,Pn.elements[8]*=f,Pn.elements[9]*=f,Pn.elements[10]*=f,t.setFromRotationMatrix(Pn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=Xn,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(n-r),h=(t+e)/(t-e),d=(n+r)/(n-r);let g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===Xn)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===xo)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Xn,l=!1){const c=this.elements,u=2/(t-e),f=2/(n-r),h=-(t+e)/(t-e),d=-(n+r)/(n-r);let g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===Xn)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===xo)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Or=new N,Pn=new vt,V0=new N(0,0,0),G0=new N(1,1,1),Ti=new N,Ca=new N,ln=new N,Nf=new vt,Ff=new ga;class Kn{constructor(e=0,t=0,n=0,r=Kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Nf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ff.setFromEuler(this),this.setFromQuaternion(Ff,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kn.DEFAULT_ORDER="XYZ";class Cu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let W0=0;const Of=new N,Br=new ga,ti=new vt,Pa=new N,Is=new N,X0=new N,q0=new ga,Bf=new N(1,0,0),zf=new N(0,1,0),kf=new N(0,0,1),Hf={type:"added"},Y0={type:"removed"},zr={type:"childadded",child:null},rl={type:"childremoved",child:null};class kt extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new N,t=new Kn,n=new ga,r=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new Ne}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Br.setFromAxisAngle(e,t),this.quaternion.multiply(Br),this}rotateOnWorldAxis(e,t){return Br.setFromAxisAngle(e,t),this.quaternion.premultiply(Br),this}rotateX(e){return this.rotateOnAxis(Bf,e)}rotateY(e){return this.rotateOnAxis(zf,e)}rotateZ(e){return this.rotateOnAxis(kf,e)}translateOnAxis(e,t){return Of.copy(e).applyQuaternion(this.quaternion),this.position.add(Of.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bf,e)}translateY(e){return this.translateOnAxis(zf,e)}translateZ(e){return this.translateOnAxis(kf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Pa.copy(e):Pa.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(Is,Pa,this.up):ti.lookAt(Pa,Is,this.up),this.quaternion.setFromRotationMatrix(ti),r&&(ti.extractRotation(r.matrixWorld),Br.setFromRotationMatrix(ti),this.quaternion.premultiply(Br.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hf),zr.child=e,this.dispatchEvent(zr),zr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Y0),rl.child=e,this.dispatchEvent(rl),rl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hf),zr.child=e,this.dispatchEvent(zr),zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,e,X0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,q0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}kt.DEFAULT_UP=new N(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new N,ni=new N,sl=new N,ii=new N,kr=new N,Hr=new N,Vf=new N,al=new N,ol=new N,ll=new N,cl=new _t,ul=new _t,fl=new _t;class In{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Dn.subVectors(e,t),r.cross(Dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Dn.subVectors(r,t),ni.subVectors(n,t),sl.subVectors(e,t);const a=Dn.dot(Dn),o=Dn.dot(ni),l=Dn.dot(sl),c=ni.dot(ni),u=ni.dot(sl),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ii.x),l.addScaledVector(a,ii.y),l.addScaledVector(o,ii.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return cl.setScalar(0),ul.setScalar(0),fl.setScalar(0),cl.fromBufferAttribute(e,t),ul.fromBufferAttribute(e,n),fl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(cl,s.x),a.addScaledVector(ul,s.y),a.addScaledVector(fl,s.z),a}static isFrontFacing(e,t,n,r){return Dn.subVectors(n,t),ni.subVectors(e,t),Dn.cross(ni).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Dn.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return In.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return In.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;kr.subVectors(r,n),Hr.subVectors(s,n),al.subVectors(e,n);const l=kr.dot(al),c=Hr.dot(al);if(l<=0&&c<=0)return t.copy(n);ol.subVectors(e,r);const u=kr.dot(ol),f=Hr.dot(ol);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(kr,a);ll.subVectors(e,s);const d=kr.dot(ll),g=Hr.dot(ll);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Hr,o);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Vf.subVectors(s,r),o=(f-u)/(f-u+(d-g)),t.copy(r).addScaledVector(Vf,o);const p=1/(m+_+h);return a=_*p,o=h*p,t.copy(n).addScaledVector(kr,a).addScaledVector(Hr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ap={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},Da={h:0,s:0,l:0};function hl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ze.workingColorSpace){if(e=wu(e,1),t=ke(t,0,1),n=ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=hl(a,s,e+1/3),this.g=hl(a,s,e),this.b=hl(a,s,e-1/3)}return Ze.colorSpaceToWorking(this,r),this}setStyle(e,t=Pt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){const n=Ap[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pi(e.r),this.g=pi(e.g),this.b=pi(e.b),this}copyLinearToSRGB(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return Ze.workingToColorSpace(Ft.copy(this),e),Math.round(ke(Ft.r*255,0,255))*65536+Math.round(ke(Ft.g*255,0,255))*256+Math.round(ke(Ft.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(Ft.copy(this),t);const n=Ft.r,r=Ft.g,s=Ft.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Pt){Ze.workingToColorSpace(Ft.copy(this),e);const t=Ft.r,n=Ft.g,r=Ft.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+t,bi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bi),e.getHSL(Da);const n=Xs(bi.h,Da.h,t),r=Xs(bi.s,Da.s,t),s=Xs(bi.l,Da.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Ge;Ge.NAMES=Ap;let $0=0;class zi extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=bs(),this.name="",this.type="Material",this.blending=ss,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$l,this.blendDst=Zl,this.blendEquation=ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lr,this.stencilZFail=Lr,this.stencilZPass=Lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(n.blending=this.blending),this.side!==Wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$l&&(n.blendSrc=this.blendSrc),this.blendDst!==Zl&&(n.blendDst=this.blendDst),this.blendEquation!==ar&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Lr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Lr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Lr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qs extends zi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=hp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new N,La=new qe;let Z0=0;class qn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Z0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Af,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)La.fromBufferAttribute(this,t),La.applyMatrix3(e),this.setXY(t,La.x,La.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Yr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),r=Vt(r,this.array),s=Vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Af&&(e.usage=this.usage),e}}class Rp extends qn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Cp extends qn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class xr extends qn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let K0=0;const Mn=new vt,dl=new kt,Vr=new N,cn=new va,Us=new va,Ct=new N;class Ar extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=bs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tp(e)?Cp:Rp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ne().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,n){return Mn.makeTranslation(e,t,n),this.applyMatrix4(Mn),this}scale(e,t,n){return Mn.makeScale(e,t,n),this.applyMatrix4(Mn),this}lookAt(e){return dl.lookAt(e),dl.updateMatrix(),this.applyMatrix4(dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vr).negate(),this.translate(Vr.x,Vr.y,Vr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xr(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new va);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ru);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Us.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(cn.min,Us.min),cn.expandByPoint(Ct),Ct.addVectors(cn.max,Us.max),cn.expandByPoint(Ct)):(cn.expandByPoint(Us.min),cn.expandByPoint(Us.max))}cn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ct));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ct.fromBufferAttribute(o,c),l&&(Vr.fromBufferAttribute(e,c),Ct.add(Vr)),r=Math.max(r,n.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new N,l[C]=new N;const c=new N,u=new N,f=new N,h=new qe,d=new qe,g=new qe,_=new N,m=new N;function p(C,x,b){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,x),f.fromBufferAttribute(n,b),h.fromBufferAttribute(s,C),d.fromBufferAttribute(s,x),g.fromBufferAttribute(s,b),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(P),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(P),o[C].add(_),o[x].add(_),o[b].add(_),l[C].add(m),l[x].add(m),l[b].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let C=0,x=E.length;C<x;++C){const b=E[C],P=b.start,B=b.count;for(let O=P,G=P+B;O<G;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const S=new N,v=new N,T=new N,w=new N;function A(C){T.fromBufferAttribute(r,C),w.copy(T);const x=o[C];S.copy(x),S.sub(T.multiplyScalar(T.dot(x))).normalize(),v.crossVectors(w,x);const P=v.dot(l[C])<0?-1:1;a.setXYZW(C,S.x,S.y,S.z,P)}for(let C=0,x=E.length;C<x;++C){const b=E[C],P=b.start,B=b.count;for(let O=P,G=P+B;O<G;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const r=new N,s=new N,a=new N,o=new N,l=new N,c=new N,u=new N,f=new N;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new qn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ar,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gf=new vt,er=new wp,Ia=new Ru,Wf=new N,Ua=new N,Na=new N,Fa=new N,pl=new N,Oa=new N,Xf=new N,Ba=new N;class $t extends kt{constructor(e=new Ar,t=new qs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Oa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(pl.fromBufferAttribute(f,e),a?Oa.addScaledVector(pl,u):Oa.addScaledVector(pl.sub(t),u))}t.add(Oa)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(s),er.copy(e.ray).recast(e.near),!(Ia.containsPoint(er.origin)===!1&&(er.intersectSphere(Ia,Wf)===null||er.origin.distanceToSquared(Wf)>(e.far-e.near)**2))&&(Gf.copy(s).invert(),er.copy(e.ray).applyMatrix4(Gf),!(n.boundingBox!==null&&er.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,er)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],E=Math.max(m.start,d.start),S=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=E,T=S;v<T;v+=3){const w=o.getX(v),A=o.getX(v+1),C=o.getX(v+2);r=za(this,p,e,n,c,u,f,w,A,C),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const E=o.getX(m),S=o.getX(m+1),v=o.getX(m+2);r=za(this,a,e,n,c,u,f,E,S,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],E=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=E,T=S;v<T;v+=3){const w=v,A=v+1,C=v+2;r=za(this,p,e,n,c,u,f,w,A,C),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const E=m,S=m+1,v=m+2;r=za(this,a,e,n,c,u,f,E,S,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function j0(i,e,t,n,r,s,a,o){let l;if(e.side===rn?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===Wi,o),l===null)return null;Ba.copy(o),Ba.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ba);return c<t.near||c>t.far?null:{distance:c,point:Ba.clone(),object:i}}function za(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,Ua),i.getVertexPosition(l,Na),i.getVertexPosition(c,Fa);const u=j0(i,e,t,n,Ua,Na,Fa,Xf);if(u){const f=new N;In.getBarycoord(Xf,Ua,Na,Fa,f),r&&(u.uv=In.getInterpolatedAttribute(r,o,l,c,f,new qe)),s&&(u.uv1=In.getInterpolatedAttribute(s,o,l,c,f,new qe)),a&&(u.normal=In.getInterpolatedAttribute(a,o,l,c,f,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new N,materialIndex:0};In.getNormal(Ua,Na,Fa,h.normal),u.face=h,u.barycoord=f}return u}class ws extends Ar{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new xr(c,3)),this.setAttribute("normal",new xr(u,3)),this.setAttribute("uv",new xr(f,2));function g(_,m,p,E,S,v,T,w,A,C,x){const b=v/A,P=T/C,B=v/2,O=T/2,G=w/2,W=A+1,V=C+1;let Y=0,k=0;const re=new N;for(let ae=0;ae<V;ae++){const _e=ae*P-O;for(let Ce=0;Ce<W;Ce++){const et=Ce*b-B;re[_]=et*E,re[m]=_e*S,re[p]=G,c.push(re.x,re.y,re.z),re[_]=0,re[m]=0,re[p]=w>0?1:-1,u.push(re.x,re.y,re.z),f.push(Ce/A),f.push(1-ae/C),Y+=1}}for(let ae=0;ae<C;ae++)for(let _e=0;_e<A;_e++){const Ce=h+_e+W*ae,et=h+_e+W*(ae+1),Be=h+(_e+1)+W*(ae+1),X=h+(_e+1)+W*ae;l.push(Ce,et,X),l.push(et,Be,X),k+=6}o.addGroup(d,k,x),d+=k,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ms(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Gt(i){const e={};for(let t=0;t<i.length;t++){const n=Ms(i[t]);for(const r in n)e[r]=n[r]}return e}function J0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Pp(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Q0={clone:Ms,merge:Gt};var ev=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends zi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ev,this.fragmentShader=tv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ms(e.uniforms),this.uniformsGroups=J0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Dp extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wi=new N,qf=new qe,Yf=new qe;class yn extends Dp{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ca*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ca*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,t){return this.getViewBounds(e,qf,Yf),t.subVectors(Yf,qf)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ws*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Gr=-90,Wr=1;class nv extends kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new yn(Gr,Wr,e,t);r.layers=this.layers,this.add(r);const s=new yn(Gr,Wr,e,t);s.layers=this.layers,this.add(s);const a=new yn(Gr,Wr,e,t);a.layers=this.layers,this.add(a);const o=new yn(Gr,Wr,e,t);o.layers=this.layers,this.add(o);const l=new yn(Gr,Wr,e,t);l.layers=this.layers,this.add(l);const c=new yn(Gr,Wr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Lp extends Kt{constructor(e=[],t=gs,n,r,s,a,o,l,c,u){super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class iv extends yr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Lp(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ws(5,5,5),s=new Xi({name:"CubemapFromEquirect",uniforms:Ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:Bi});s.uniforms.tEquirect.value=t;const a=new $t(r,s),o=t.minFilter;return t.minFilter===ur&&(t.minFilter=Wn),new nv(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class fr extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rv={type:"move"};class ml{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rv)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new fr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class sv extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const _l=new N,av=new N,ov=new Ne;class qt{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=_l.subVectors(n,t).cross(av.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(_l),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ov.getNormalMatrix(e),r=this.coplanarPoint(_l).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const tr=new Ru,lv=new qe(.5,.5),ka=new N;class Pu{constructor(e=new qt,t=new qt,n=new qt,r=new qt,s=new qt,a=new qt){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xn,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],d=s[7],g=s[8],_=s[9],m=s[10],p=s[11],E=s[12],S=s[13],v=s[14],T=s[15];if(r[0].setComponents(c-a,d-u,p-g,T-E).normalize(),r[1].setComponents(c+a,d+u,p+g,T+E).normalize(),r[2].setComponents(c+o,d+f,p+_,T+S).normalize(),r[3].setComponents(c-o,d-f,p-_,T-S).normalize(),n)r[4].setComponents(l,h,m,v).normalize(),r[5].setComponents(c-l,d-h,p-m,T-v).normalize();else if(r[4].setComponents(c-l,d-h,p-m,T-v).normalize(),t===Xn)r[5].setComponents(c+l,d+h,p+m,T+v).normalize();else if(t===xo)r[5].setComponents(l,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),tr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(tr)}intersectsSprite(e){tr.center.set(0,0,0);const t=lv.distanceTo(e.center);return tr.radius=.7071067811865476+t,tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(tr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ka.x=r.normal.x>0?e.max.x:e.min.x,ka.y=r.normal.y>0?e.max.y:e.min.y,ka.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ka)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ip extends Kt{constructor(e,t,n=Er,r,s,a,o=Fn,l=Fn,c,u=oa,f=1){if(u!==oa&&u!==la)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Au(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ki extends Ar{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const E=p*h-a;for(let S=0;S<c;S++){const v=S*f-s;g.push(v,-E,0),_.push(0,0,1),m.push(S/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){const S=E+c*p,v=E+c*(p+1),T=E+1+c*(p+1),w=E+1+c*p;d.push(S,v,w),d.push(v,T,w)}this.setIndex(d),this.setAttribute("position",new xr(g,3)),this.setAttribute("normal",new xr(_,3)),this.setAttribute("uv",new xr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ki(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ai extends zi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ep,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cv extends zi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=o0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uv extends zi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gl={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class fv{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const hv=new fv;class Du{constructor(e){this.manager=e!==void 0?e:hv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Du.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xr=new WeakMap;class dv extends Du{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=gl.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let f=Xr.get(a);f===void 0&&(f=[],Xr.set(a,f)),f.push({onLoad:t,onError:r})}return a}const o=ua("img");function l(){u(),t&&t(this);const f=Xr.get(this)||[];for(let h=0;h<f.length;h++){const d=f[h];d.onLoad&&d.onLoad(this)}Xr.delete(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),gl.remove(`image:${e}`);const h=Xr.get(this)||[];for(let d=0;d<h.length;d++){const g=h[d];g.onError&&g.onError(f)}Xr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),gl.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class pv extends Du{constructor(e){super(e)}load(e,t,n,r){const s=new Kt,a=new dv(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Up extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const vl=new vt,$f=new N,Zf=new N;class mv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.mapType=Zn,this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pu,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;$f.setFromMatrixPosition(e.matrixWorld),t.position.copy($f),Zf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zf),t.updateMatrixWorld(),vl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Np extends Dp{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class _v extends mv{constructor(){super(new Np(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gv extends Up{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new _v}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class vv extends Up{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class xv extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Kf=new vt;class Mv{constructor(e,t,n=0,r=1/0){this.ray=new wp(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Cu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Kf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Kf),this}intersectObject(e,t=!0,n=[]){return Ic(e,this,n,t),n.sort(jf),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Ic(e[r],this,n,t);return n.sort(jf),n}}function jf(i,e){return i.distance-e.distance}function Ic(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)Ic(s[a],e,t,!0)}}function Jf(i,e,t,n){const r=Sv(n);switch(t){case gp:return i*e;case xp:return i*e/r.components*r.byteLength;case yu:return i*e/r.components*r.byteLength;case Mp:return i*e*2/r.components*r.byteLength;case Tu:return i*e*2/r.components*r.byteLength;case vp:return i*e*3/r.components*r.byteLength;case Un:return i*e*4/r.components*r.byteLength;case bu:return i*e*4/r.components*r.byteLength;case Ka:case ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ja:case Qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case lc:case uc:return Math.max(i,16)*Math.max(e,8)/4;case oc:case cc:return Math.max(i,8)*Math.max(e,8)/2;case fc:case hc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case dc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case mc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case _c:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case gc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case vc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case xc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Sc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ec:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case yc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Tc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case bc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case wc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ac:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case eo:case Rc:case Cc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Sp:case Pc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Dc:case Lc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sv(i){switch(i){case Zn:case pp:return{byteLength:1,components:1};case sa:case mp:case _a:return{byteLength:2,components:1};case Su:case Eu:return{byteLength:2,components:4};case Er:case Mu:case fi:return{byteLength:4,components:1};case _p:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Fp(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Ev(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var yv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Av=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Lv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Iv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Fv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ov=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,qv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Yv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$v=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qv="gl_FragColor = linearToOutputTexel( gl_FragColor );",ex=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ix=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ax=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ox=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ux=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,px=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,mx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_x=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Sx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ex=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ax=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Px=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ix=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ux=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ox=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Hx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$x=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Jx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,sM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,aM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,oM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,uM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_M=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,MM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,SM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const EM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,CM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,PM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,DM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,LM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,IM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,OM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,HM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,GM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,WM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,YM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$M=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,eS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:yv,alphahash_pars_fragment:Tv,alphamap_fragment:bv,alphamap_pars_fragment:wv,alphatest_fragment:Av,alphatest_pars_fragment:Rv,aomap_fragment:Cv,aomap_pars_fragment:Pv,batching_pars_vertex:Dv,batching_vertex:Lv,begin_vertex:Iv,beginnormal_vertex:Uv,bsdfs:Nv,iridescence_fragment:Fv,bumpmap_pars_fragment:Ov,clipping_planes_fragment:Bv,clipping_planes_pars_fragment:zv,clipping_planes_pars_vertex:kv,clipping_planes_vertex:Hv,color_fragment:Vv,color_pars_fragment:Gv,color_pars_vertex:Wv,color_vertex:Xv,common:qv,cube_uv_reflection_fragment:Yv,defaultnormal_vertex:$v,displacementmap_pars_vertex:Zv,displacementmap_vertex:Kv,emissivemap_fragment:jv,emissivemap_pars_fragment:Jv,colorspace_fragment:Qv,colorspace_pars_fragment:ex,envmap_fragment:tx,envmap_common_pars_fragment:nx,envmap_pars_fragment:ix,envmap_pars_vertex:rx,envmap_physical_pars_fragment:mx,envmap_vertex:sx,fog_vertex:ax,fog_pars_vertex:ox,fog_fragment:lx,fog_pars_fragment:cx,gradientmap_pars_fragment:ux,lightmap_pars_fragment:fx,lights_lambert_fragment:hx,lights_lambert_pars_fragment:dx,lights_pars_begin:px,lights_toon_fragment:_x,lights_toon_pars_fragment:gx,lights_phong_fragment:vx,lights_phong_pars_fragment:xx,lights_physical_fragment:Mx,lights_physical_pars_fragment:Sx,lights_fragment_begin:Ex,lights_fragment_maps:yx,lights_fragment_end:Tx,logdepthbuf_fragment:bx,logdepthbuf_pars_fragment:wx,logdepthbuf_pars_vertex:Ax,logdepthbuf_vertex:Rx,map_fragment:Cx,map_pars_fragment:Px,map_particle_fragment:Dx,map_particle_pars_fragment:Lx,metalnessmap_fragment:Ix,metalnessmap_pars_fragment:Ux,morphinstance_vertex:Nx,morphcolor_vertex:Fx,morphnormal_vertex:Ox,morphtarget_pars_vertex:Bx,morphtarget_vertex:zx,normal_fragment_begin:kx,normal_fragment_maps:Hx,normal_pars_fragment:Vx,normal_pars_vertex:Gx,normal_vertex:Wx,normalmap_pars_fragment:Xx,clearcoat_normal_fragment_begin:qx,clearcoat_normal_fragment_maps:Yx,clearcoat_pars_fragment:$x,iridescence_pars_fragment:Zx,opaque_fragment:Kx,packing:jx,premultiplied_alpha_fragment:Jx,project_vertex:Qx,dithering_fragment:eM,dithering_pars_fragment:tM,roughnessmap_fragment:nM,roughnessmap_pars_fragment:iM,shadowmap_pars_fragment:rM,shadowmap_pars_vertex:sM,shadowmap_vertex:aM,shadowmask_pars_fragment:oM,skinbase_vertex:lM,skinning_pars_vertex:cM,skinning_vertex:uM,skinnormal_vertex:fM,specularmap_fragment:hM,specularmap_pars_fragment:dM,tonemapping_fragment:pM,tonemapping_pars_fragment:mM,transmission_fragment:_M,transmission_pars_fragment:gM,uv_pars_fragment:vM,uv_pars_vertex:xM,uv_vertex:MM,worldpos_vertex:SM,background_vert:EM,background_frag:yM,backgroundCube_vert:TM,backgroundCube_frag:bM,cube_vert:wM,cube_frag:AM,depth_vert:RM,depth_frag:CM,distanceRGBA_vert:PM,distanceRGBA_frag:DM,equirect_vert:LM,equirect_frag:IM,linedashed_vert:UM,linedashed_frag:NM,meshbasic_vert:FM,meshbasic_frag:OM,meshlambert_vert:BM,meshlambert_frag:zM,meshmatcap_vert:kM,meshmatcap_frag:HM,meshnormal_vert:VM,meshnormal_frag:GM,meshphong_vert:WM,meshphong_frag:XM,meshphysical_vert:qM,meshphysical_frag:YM,meshtoon_vert:$M,meshtoon_frag:ZM,points_vert:KM,points_frag:jM,shadow_vert:JM,shadow_frag:QM,sprite_vert:eS,sprite_frag:tS},se={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},kn={basic:{uniforms:Gt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Gt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Gt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Gt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Gt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Gt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Gt([se.points,se.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Gt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Gt([se.common,se.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Gt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Gt([se.sprite,se.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Gt([se.common,se.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Gt([se.lights,se.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};kn.physical={uniforms:Gt([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Ha={r:0,b:0,g:0},nr=new Kn,nS=new vt;function iS(i,e,t,n,r,s,a){const o=new Ge(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?t:e).get(v)),v}function _(S){let v=!1;const T=g(S);T===null?p(o,l):T&&T.isColor&&(p(T,1),v=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,v){const T=g(v);T&&(T.isCubeTexture||T.mapping===Po)?(u===void 0&&(u=new $t(new ws(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:Ms(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),nr.copy(v.backgroundRotation),nr.x*=-1,nr.y*=-1,nr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(nS.makeRotationFromEuler(nr)),u.material.toneMapped=Ze.getTransfer(T.colorSpace)!==Qe,(f!==T||h!==T.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=T,h=T.version,d=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new $t(new ki(2,2),new Xi({name:"BackgroundMaterial",uniforms:Ms(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(T.colorSpace)!==Qe,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||h!==T.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=T,h=T.version,d=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,v){S.getRGB(Ha,Pp(i)),n.buffers.color.setClear(Ha.r,Ha.g,Ha.b,v,a)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,v=1){o.set(S),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(o,l)},render:_,addToRenderList:m,dispose:E}}function rS(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,a=!1;function o(b,P,B,O,G){let W=!1;const V=f(O,B,P);s!==V&&(s=V,c(s.object)),W=d(b,O,B,G),W&&g(b,O,B,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,v(b,P,B,O),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function f(b,P,B){const O=B.wireframe===!0;let G=n[b.id];G===void 0&&(G={},n[b.id]=G);let W=G[P.id];W===void 0&&(W={},G[P.id]=W);let V=W[O];return V===void 0&&(V=h(l()),W[O]=V),V}function h(b){const P=[],B=[],O=[];for(let G=0;G<t;G++)P[G]=0,B[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:B,attributeDivisors:O,object:b,attributes:{},index:null}}function d(b,P,B,O){const G=s.attributes,W=P.attributes;let V=0;const Y=B.getAttributes();for(const k in Y)if(Y[k].location>=0){const ae=G[k];let _e=W[k];if(_e===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(_e=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(_e=b.instanceColor)),ae===void 0||ae.attribute!==_e||_e&&ae.data!==_e.data)return!0;V++}return s.attributesNum!==V||s.index!==O}function g(b,P,B,O){const G={},W=P.attributes;let V=0;const Y=B.getAttributes();for(const k in Y)if(Y[k].location>=0){let ae=W[k];ae===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(ae=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(ae=b.instanceColor));const _e={};_e.attribute=ae,ae&&ae.data&&(_e.data=ae.data),G[k]=_e,V++}s.attributes=G,s.attributesNum=V,s.index=O}function _(){const b=s.newAttributes;for(let P=0,B=b.length;P<B;P++)b[P]=0}function m(b){p(b,0)}function p(b,P){const B=s.newAttributes,O=s.enabledAttributes,G=s.attributeDivisors;B[b]=1,O[b]===0&&(i.enableVertexAttribArray(b),O[b]=1),G[b]!==P&&(i.vertexAttribDivisor(b,P),G[b]=P)}function E(){const b=s.newAttributes,P=s.enabledAttributes;for(let B=0,O=P.length;B<O;B++)P[B]!==b[B]&&(i.disableVertexAttribArray(B),P[B]=0)}function S(b,P,B,O,G,W,V){V===!0?i.vertexAttribIPointer(b,P,B,G,W):i.vertexAttribPointer(b,P,B,O,G,W)}function v(b,P,B,O){_();const G=O.attributes,W=B.getAttributes(),V=P.defaultAttributeValues;for(const Y in W){const k=W[Y];if(k.location>=0){let re=G[Y];if(re===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(re=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(re=b.instanceColor)),re!==void 0){const ae=re.normalized,_e=re.itemSize,Ce=e.get(re);if(Ce===void 0)continue;const et=Ce.buffer,Be=Ce.type,X=Ce.bytesPerElement,oe=Be===i.INT||Be===i.UNSIGNED_INT||re.gpuType===Mu;if(re.isInterleavedBufferAttribute){const ne=re.data,be=ne.stride,we=re.offset;if(ne.isInstancedInterleavedBuffer){for(let De=0;De<k.locationSize;De++)p(k.location+De,ne.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let De=0;De<k.locationSize;De++)m(k.location+De);i.bindBuffer(i.ARRAY_BUFFER,et);for(let De=0;De<k.locationSize;De++)S(k.location+De,_e/k.locationSize,Be,ae,be*X,(we+_e/k.locationSize*De)*X,oe)}else{if(re.isInstancedBufferAttribute){for(let ne=0;ne<k.locationSize;ne++)p(k.location+ne,re.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ne=0;ne<k.locationSize;ne++)m(k.location+ne);i.bindBuffer(i.ARRAY_BUFFER,et);for(let ne=0;ne<k.locationSize;ne++)S(k.location+ne,_e/k.locationSize,Be,ae,_e*X,_e/k.locationSize*ne*X,oe)}}else if(V!==void 0){const ae=V[Y];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(k.location,ae);break;case 3:i.vertexAttrib3fv(k.location,ae);break;case 4:i.vertexAttrib4fv(k.location,ae);break;default:i.vertexAttrib1fv(k.location,ae)}}}}E()}function T(){C();for(const b in n){const P=n[b];for(const B in P){const O=P[B];for(const G in O)u(O[G].object),delete O[G];delete P[B]}delete n[b]}}function w(b){if(n[b.id]===void 0)return;const P=n[b.id];for(const B in P){const O=P[B];for(const G in O)u(O[G].object),delete O[G];delete P[B]}delete n[b.id]}function A(b){for(const P in n){const B=n[P];if(B[b.id]===void 0)continue;const O=B[b.id];for(const G in O)u(O[G].object),delete O[G];delete B[b.id]}}function C(){x(),a=!0,s!==r&&(s=r,c(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:x,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function sS(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];t.update(d,n,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function aS(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==Un&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const C=A===_a&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Zn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==fi&&!C)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:T,maxSamples:w}}function oS(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new qt,o=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||r;return r=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const E=s?0:n,S=E*4;let v=p.clippingState||null;l.value=v,v=u(g,h,S,d);for(let T=0;T!==S;++T)v[T]=t[T];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,E=h.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,v=d;S!==_;++S,v+=4)a.copy(f[S]).applyMatrix4(E,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function lS(i){let e=new WeakMap;function t(a,o){return o===ic?a.mapping=gs:o===rc&&(a.mapping=vs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ic||o===rc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new iv(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const jr=4,Qf=[.125,.215,.35,.446,.526,.582],or=20,xl=new Np,eh=new Ge;let Ml=null,Sl=0,El=0,yl=!1;const sr=(1+Math.sqrt(5))/2,qr=1/sr,th=[new N(-sr,qr,0),new N(sr,qr,0),new N(-qr,0,sr),new N(qr,0,sr),new N(0,sr,-qr),new N(0,sr,qr),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],cS=new N;class nh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=cS}=s;Ml=this._renderer.getRenderTarget(),Sl=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel(),yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ml,Sl,El),this._renderer.xr.enabled=yl,e.scissorTest=!1,Va(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gs||e.mapping===vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ml=this._renderer.getRenderTarget(),Sl=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel(),yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:_a,format:Un,colorSpace:xs,depthBuffer:!1},r=ih(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ih(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uS(s)),this._blurMaterial=fS(s,e,t)}return r}_compileMaterial(e){const t=new $t(this._lodPlanes[0],e);this._renderer.compile(t,xl)}_sceneToCubeUV(e,t,n,r,s){const l=new yn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(eh),f.toneMapping=di,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const _=new qs({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),m=new $t(new ws,_);let p=!1;const E=e.background;E?E.isColor&&(_.color.copy(E),e.background=null,p=!0):(_.color.copy(eh),p=!0);for(let S=0;S<6;S++){const v=S%3;v===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[S],s.y,s.z)):v===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[S]));const T=this._cubeSize;Va(r,v*T,S>2?T:0,T,T),f.setRenderTarget(r),p&&f.render(m,l),f.render(e,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=E}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===gs||e.mapping===vs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=sh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rh());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new $t(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Va(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,xl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=th[(r-s-1)%th.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new $t(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*or-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):or;m>or&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${or}`);const p=[];let E=0;for(let A=0;A<or;++A){const C=A/_,x=Math.exp(-C*C/2);p.push(x),A===0?E+=x:A<m&&(E+=2*x)}for(let A=0;A<p.length;A++)p[A]=p[A]/E;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:S}=this;h.dTheta.value=g,h.mipInt.value=S-n;const v=this._sizeLods[r],T=3*v*(r>S-jr?r-S+jr:0),w=4*(this._cubeSize-v);Va(t,T,w,3*v,2*v),l.setRenderTarget(t),l.render(f,xl)}}function uS(i){const e=[],t=[],n=[];let r=i;const s=i-jr+1+Qf.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-jr?l=Qf[a-i+jr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*d),S=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let w=0;w<d;w++){const A=w%3*2/3-1,C=w>2?0:-1,x=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];E.set(x,_*g*w),S.set(h,m*g*w);const b=[w,w,w,w,w,w];v.set(b,p*g*w)}const T=new Ar;T.setAttribute("position",new qn(E,_)),T.setAttribute("uv",new qn(S,m)),T.setAttribute("faceIndex",new qn(v,p)),e.push(T),r>jr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ih(i,e,t){const n=new yr(i,e,t);return n.texture.mapping=Po,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Va(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function fS(i,e,t){const n=new Float32Array(or),r=new N(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function rh(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function sh(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Lu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hS(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ic||l===rc,u=l===gs||l===vs;if(c||u){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new nh(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new nh(i)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function dS(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&as("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function pS(i,e,t,n){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],i.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const E=d.array;_=d.version;for(let S=0,v=E.length;S<v;S+=3){const T=E[S+0],w=E[S+1],A=E[S+2];h.push(T,w,w,A,A,T)}}else if(g!==void 0){const E=g.array;_=g.version;for(let S=0,v=E.length/3-1;S<v;S+=3){const T=S+0,w=S+1,A=S+2;h.push(T,w,w,A,A,T)}}else return;const m=new(Tp(h)?Cp:Rp)(h,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function mS(i,e,t){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,d){i.drawElements(n,d,s,h*a),t.update(d,n,1)}function c(h,d,g){g!==0&&(i.drawElementsInstanced(n,d,s,h*a,g),t.update(d,n,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function f(h,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,h,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=d[E]*_[E];t.update(p,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function _S(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function gS(i,e,t){const n=new WeakMap,r=new _t;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let b=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",b)};var d=b;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let T=o.attributes.position.count*v,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const A=new Float32Array(T*w*4*f),C=new bp(A,T,w,f);C.type=fi,C.needsUpdate=!0;const x=v*4;for(let P=0;P<f;P++){const B=p[P],O=E[P],G=S[P],W=T*w*4*P;for(let V=0;V<B.count;V++){const Y=V*x;g===!0&&(r.fromBufferAttribute(B,V),A[W+Y+0]=r.x,A[W+Y+1]=r.y,A[W+Y+2]=r.z,A[W+Y+3]=0),_===!0&&(r.fromBufferAttribute(O,V),A[W+Y+4]=r.x,A[W+Y+5]=r.y,A[W+Y+6]=r.z,A[W+Y+7]=0),m===!0&&(r.fromBufferAttribute(G,V),A[W+Y+8]=r.x,A[W+Y+9]=r.y,A[W+Y+10]=r.z,A[W+Y+11]=G.itemSize===4?r.w:1)}}h={count:f,texture:C,size:new qe(T,w)},n.set(o,h),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function vS(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Op=new Kt,ah=new Ip(1,1),Bp=new bp,zp=new k0,kp=new Lp,oh=[],lh=[],ch=new Float32Array(16),uh=new Float32Array(9),fh=new Float32Array(4);function As(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=oh[r];if(s===void 0&&(s=new Float32Array(r),oh[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function At(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Do(i,e){let t=lh[e];t===void 0&&(t=new Int32Array(e),lh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function xS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function MS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2fv(this.addr,e),At(t,e)}}function SS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;i.uniform3fv(this.addr,e),At(t,e)}}function ES(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4fv(this.addr,e),At(t,e)}}function yS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(wt(t,n))return;fh.set(n),i.uniformMatrix2fv(this.addr,!1,fh),At(t,n)}}function TS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(wt(t,n))return;uh.set(n),i.uniformMatrix3fv(this.addr,!1,uh),At(t,n)}}function bS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(wt(t,n))return;ch.set(n),i.uniformMatrix4fv(this.addr,!1,ch),At(t,n)}}function wS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function AS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2iv(this.addr,e),At(t,e)}}function RS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3iv(this.addr,e),At(t,e)}}function CS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4iv(this.addr,e),At(t,e)}}function PS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function DS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2uiv(this.addr,e),At(t,e)}}function LS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3uiv(this.addr,e),At(t,e)}}function IS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4uiv(this.addr,e),At(t,e)}}function US(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ah.compareFunction=yp,s=ah):s=Op,t.setTexture2D(e||s,r)}function NS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||zp,r)}function FS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||kp,r)}function OS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Bp,r)}function BS(i){switch(i){case 5126:return xS;case 35664:return MS;case 35665:return SS;case 35666:return ES;case 35674:return yS;case 35675:return TS;case 35676:return bS;case 5124:case 35670:return wS;case 35667:case 35671:return AS;case 35668:case 35672:return RS;case 35669:case 35673:return CS;case 5125:return PS;case 36294:return DS;case 36295:return LS;case 36296:return IS;case 35678:case 36198:case 36298:case 36306:case 35682:return US;case 35679:case 36299:case 36307:return NS;case 35680:case 36300:case 36308:case 36293:return FS;case 36289:case 36303:case 36311:case 36292:return OS}}function zS(i,e){i.uniform1fv(this.addr,e)}function kS(i,e){const t=As(e,this.size,2);i.uniform2fv(this.addr,t)}function HS(i,e){const t=As(e,this.size,3);i.uniform3fv(this.addr,t)}function VS(i,e){const t=As(e,this.size,4);i.uniform4fv(this.addr,t)}function GS(i,e){const t=As(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function WS(i,e){const t=As(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function XS(i,e){const t=As(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function qS(i,e){i.uniform1iv(this.addr,e)}function YS(i,e){i.uniform2iv(this.addr,e)}function $S(i,e){i.uniform3iv(this.addr,e)}function ZS(i,e){i.uniform4iv(this.addr,e)}function KS(i,e){i.uniform1uiv(this.addr,e)}function jS(i,e){i.uniform2uiv(this.addr,e)}function JS(i,e){i.uniform3uiv(this.addr,e)}function QS(i,e){i.uniform4uiv(this.addr,e)}function eE(i,e,t){const n=this.cache,r=e.length,s=Do(t,r);wt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Op,s[a])}function tE(i,e,t){const n=this.cache,r=e.length,s=Do(t,r);wt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||zp,s[a])}function nE(i,e,t){const n=this.cache,r=e.length,s=Do(t,r);wt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||kp,s[a])}function iE(i,e,t){const n=this.cache,r=e.length,s=Do(t,r);wt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Bp,s[a])}function rE(i){switch(i){case 5126:return zS;case 35664:return kS;case 35665:return HS;case 35666:return VS;case 35674:return GS;case 35675:return WS;case 35676:return XS;case 5124:case 35670:return qS;case 35667:case 35671:return YS;case 35668:case 35672:return $S;case 35669:case 35673:return ZS;case 5125:return KS;case 36294:return jS;case 36295:return JS;case 36296:return QS;case 35678:case 36198:case 36298:case 36306:case 35682:return eE;case 35679:case 36299:case 36307:return tE;case 35680:case 36300:case 36308:case 36293:return nE;case 36289:case 36303:case 36311:case 36292:return iE}}class sE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=BS(t.type)}}class aE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rE(t.type)}}class oE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Tl=/(\w+)(\])?(\[|\.)?/g;function hh(i,e){i.seq.push(e),i.map[e.id]=e}function lE(i,e,t){const n=i.name,r=n.length;for(Tl.lastIndex=0;;){const s=Tl.exec(n),a=Tl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){hh(t,c===void 0?new sE(o,i,e):new aE(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new oE(o),hh(t,f)),t=f}}}class to{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);lE(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function dh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const cE=37297;let uE=0;function fE(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const ph=new Ne;function hE(i){Ze._getMatrix(ph,Ze.workingColorSpace,i);const e=`mat3( ${ph.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(i)){case vo:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function mh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+fE(i.getShaderSource(e),o)}else return s}function dE(i,e){const t=hE(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function pE(i,e){let t;switch(e){case Qg:t="Linear";break;case e0:t="Reinhard";break;case t0:t="Cineon";break;case n0:t="ACESFilmic";break;case r0:t="AgX";break;case s0:t="Neutral";break;case i0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ga=new N;function mE(){Ze.getLuminanceCoefficients(Ga);const i=Ga.x.toFixed(4),e=Ga.y.toFixed(4),t=Ga.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _E(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zs).join(`
`)}function gE(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vE(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function zs(i){return i!==""}function _h(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uc(i){return i.replace(xE,SE)}const ME=new Map;function SE(i,e){let t=Fe[e];if(t===void 0){const n=ME.get(e);if(n!==void 0)t=Fe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Uc(t)}const EE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vh(i){return i.replace(EE,yE)}function yE(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function xh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function TE(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===fp?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Lg?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ri&&(e="SHADOWMAP_TYPE_VSM"),e}function bE(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case gs:case vs:e="ENVMAP_TYPE_CUBE";break;case Po:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wE(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case vs:e="ENVMAP_MODE_REFRACTION";break}return e}function AE(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case hp:e="ENVMAP_BLENDING_MULTIPLY";break;case jg:e="ENVMAP_BLENDING_MIX";break;case Jg:e="ENVMAP_BLENDING_ADD";break}return e}function RE(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function CE(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=TE(t),c=bE(t),u=wE(t),f=AE(t),h=RE(t),d=_E(t),g=gE(s),_=r.createProgram();let m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(zs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(zs).join(`
`),p.length>0&&(p+=`
`)):(m=[xh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),p=[xh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==di?"#define TONE_MAPPING":"",t.toneMapping!==di?Fe.tonemapping_pars_fragment:"",t.toneMapping!==di?pE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,dE("linearToOutputTexel",t.outputColorSpace),mE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zs).join(`
`)),a=Uc(a),a=_h(a,t),a=gh(a,t),o=Uc(o),o=_h(o,t),o=gh(o,t),a=vh(a),o=vh(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Rf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=E+m+a,v=E+p+o,T=dh(r,r.VERTEX_SHADER,S),w=dh(r,r.FRAGMENT_SHADER,v);r.attachShader(_,T),r.attachShader(_,w),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(P){if(i.debug.checkShaderErrors){const B=r.getProgramInfoLog(_)||"",O=r.getShaderInfoLog(T)||"",G=r.getShaderInfoLog(w)||"",W=B.trim(),V=O.trim(),Y=G.trim();let k=!0,re=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,T,w);else{const ae=mh(r,T,"vertex"),_e=mh(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+W+`
`+ae+`
`+_e)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(V===""||Y==="")&&(re=!1);re&&(P.diagnostics={runnable:k,programLog:W,vertexShader:{log:V,prefix:m},fragmentShader:{log:Y,prefix:p}})}r.deleteShader(T),r.deleteShader(w),C=new to(r,_),x=vE(r,_)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let x;this.getAttributes=function(){return x===void 0&&A(this),x};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(_,cE)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=uE++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=w,this}let PE=0;class DE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new LE(e),t.set(e,n)),n}}class LE{constructor(e){this.id=PE++,this.code=e,this.usedTimes=0}}function IE(i,e,t,n,r,s,a){const o=new Cu,l=new DE,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,b,P,B,O){const G=B.fog,W=O.geometry,V=x.isMeshStandardMaterial?B.environment:null,Y=(x.isMeshStandardMaterial?t:e).get(x.envMap||V),k=Y&&Y.mapping===Po?Y.image.height:null,re=g[x.type];x.precision!==null&&(d=r.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const ae=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,_e=ae!==void 0?ae.length:0;let Ce=0;W.morphAttributes.position!==void 0&&(Ce=1),W.morphAttributes.normal!==void 0&&(Ce=2),W.morphAttributes.color!==void 0&&(Ce=3);let et,Be,X,oe;if(re){const je=kn[re];et=je.vertexShader,Be=je.fragmentShader}else et=x.vertexShader,Be=x.fragmentShader,l.update(x),X=l.getVertexShaderID(x),oe=l.getFragmentShaderID(x);const ne=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),we=O.isInstancedMesh===!0,De=O.isBatchedMesh===!0,xt=!!x.map,We=!!x.matcap,D=!!Y,st=!!x.aoMap,ye=!!x.lightMap,Ke=!!x.bumpMap,Se=!!x.normalMap,lt=!!x.displacementMap,de=!!x.emissiveMap,Oe=!!x.metalnessMap,Rt=!!x.roughnessMap,Mt=x.anisotropy>0,R=x.clearcoat>0,M=x.dispersion>0,F=x.iridescence>0,$=x.sheen>0,K=x.transmission>0,q=Mt&&!!x.anisotropyMap,Me=R&&!!x.clearcoatMap,te=R&&!!x.clearcoatNormalMap,ge=R&&!!x.clearcoatRoughnessMap,ve=F&&!!x.iridescenceMap,Q=F&&!!x.iridescenceThicknessMap,ue=$&&!!x.sheenColorMap,Re=$&&!!x.sheenRoughnessMap,xe=!!x.specularMap,le=!!x.specularColorMap,Ue=!!x.specularIntensityMap,L=K&&!!x.transmissionMap,ee=K&&!!x.thicknessMap,ie=!!x.gradientMap,he=!!x.alphaMap,j=x.alphaTest>0,Z=!!x.alphaHash,me=!!x.extensions;let Le=di;x.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Le=i.toneMapping);const at={shaderID:re,shaderType:x.type,shaderName:x.name,vertexShader:et,fragmentShader:Be,defines:x.defines,customVertexShaderID:X,customFragmentShaderID:oe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:De,batchingColor:De&&O._colorsTexture!==null,instancing:we,instancingColor:we&&O.instanceColor!==null,instancingMorph:we&&O.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:xs,alphaToCoverage:!!x.alphaToCoverage,map:xt,matcap:We,envMap:D,envMapMode:D&&Y.mapping,envMapCubeUVHeight:k,aoMap:st,lightMap:ye,bumpMap:Ke,normalMap:Se,displacementMap:h&&lt,emissiveMap:de,normalMapObjectSpace:Se&&x.normalMapType===c0,normalMapTangentSpace:Se&&x.normalMapType===Ep,metalnessMap:Oe,roughnessMap:Rt,anisotropy:Mt,anisotropyMap:q,clearcoat:R,clearcoatMap:Me,clearcoatNormalMap:te,clearcoatRoughnessMap:ge,dispersion:M,iridescence:F,iridescenceMap:ve,iridescenceThicknessMap:Q,sheen:$,sheenColorMap:ue,sheenRoughnessMap:Re,specularMap:xe,specularColorMap:le,specularIntensityMap:Ue,transmission:K,transmissionMap:L,thicknessMap:ee,gradientMap:ie,opaque:x.transparent===!1&&x.blending===ss&&x.alphaToCoverage===!1,alphaMap:he,alphaTest:j,alphaHash:Z,combine:x.combine,mapUv:xt&&_(x.map.channel),aoMapUv:st&&_(x.aoMap.channel),lightMapUv:ye&&_(x.lightMap.channel),bumpMapUv:Ke&&_(x.bumpMap.channel),normalMapUv:Se&&_(x.normalMap.channel),displacementMapUv:lt&&_(x.displacementMap.channel),emissiveMapUv:de&&_(x.emissiveMap.channel),metalnessMapUv:Oe&&_(x.metalnessMap.channel),roughnessMapUv:Rt&&_(x.roughnessMap.channel),anisotropyMapUv:q&&_(x.anisotropyMap.channel),clearcoatMapUv:Me&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:te&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Re&&_(x.sheenRoughnessMap.channel),specularMapUv:xe&&_(x.specularMap.channel),specularColorMapUv:le&&_(x.specularColorMap.channel),specularIntensityMapUv:Ue&&_(x.specularIntensityMap.channel),transmissionMapUv:L&&_(x.transmissionMap.channel),thicknessMapUv:ee&&_(x.thicknessMap.channel),alphaMapUv:he&&_(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Se||Mt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!W.attributes.uv&&(xt||he),fog:!!G,useFog:x.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:be,skinning:O.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Ce,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Le,decodeVideoTexture:xt&&x.map.isVideoTexture===!0&&Ze.getTransfer(x.map.colorSpace)===Qe,decodeVideoTextureEmissive:de&&x.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(x.emissiveMap.colorSpace)===Qe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ui,flipSided:x.side===rn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:me&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&x.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return at.vertexUv1s=c.has(1),at.vertexUv2s=c.has(2),at.vertexUv3s=c.has(3),c.clear(),at}function p(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)b.push(P),b.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(E(b,x),S(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function E(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function S(x,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),x.push(o.mask)}function v(x){const b=g[x.type];let P;if(b){const B=kn[b];P=Q0.clone(B.uniforms)}else P=x.uniforms;return P}function T(x,b){let P;for(let B=0,O=u.length;B<O;B++){const G=u[B];if(G.cacheKey===b){P=G,++P.usedTimes;break}}return P===void 0&&(P=new CE(i,b,x,s),u.push(P)),P}function w(x){if(--x.usedTimes===0){const b=u.indexOf(x);u[b]=u[u.length-1],u.pop(),x.destroy()}}function A(x){l.remove(x)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:T,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:C}}function UE(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function NE(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Mh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Sh(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f,h,d,g,_,m){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},i[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function o(f,h,d,g,_,m){const p=a(f,h,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(f,h,d,g,_,m){const p=a(f,h,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||NE),n.length>1&&n.sort(h||Mh),r.length>1&&r.sort(h||Mh)}function u(){for(let f=e,h=i.length;f<h;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function FE(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Sh,i.set(n,[a])):r>=s.length?(a=new Sh,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function OE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ge};break;case"SpotLight":t={position:new N,direction:new N,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function BE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let zE=0;function kE(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function HE(i){const e=new OE,t=BE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const r=new N,s=new vt,a=new vt;function o(c){let u=0,f=0,h=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,E=0,S=0,v=0,T=0,w=0,A=0;c.sort(kE);for(let x=0,b=c.length;x<b;x++){const P=c[x],B=P.color,O=P.intensity,G=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=B.r*O,f+=B.g*O,h+=B.b*O;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],O);A++}else if(P.isDirectionalLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Y=P.shadow,k=t.get(P);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,n.directionalShadow[d]=k,n.directionalShadowMap[d]=W,n.directionalShadowMatrix[d]=P.shadow.matrix,E++}n.directional[d]=V,d++}else if(P.isSpotLight){const V=e.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(B).multiplyScalar(O),V.distance=G,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[_]=V;const Y=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,Y.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[_]=Y.matrix,P.castShadow){const k=t.get(P);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=W,v++}_++}else if(P.isRectAreaLight){const V=e.get(P);V.color.copy(B).multiplyScalar(O),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=V,m++}else if(P.isPointLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const Y=P.shadow,k=t.get(P);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,k.shadowCameraNear=Y.camera.near,k.shadowCameraFar=Y.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=P.shadow.matrix,S++}n.point[g]=V,g++}else if(P.isHemisphereLight){const V=e.get(P);V.skyColor.copy(P.color).multiplyScalar(O),V.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[p]=V,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=se.LTC_FLOAT_1,n.rectAreaLTC2=se.LTC_FLOAT_2):(n.rectAreaLTC1=se.LTC_HALF_1,n.rectAreaLTC2=se.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==E||C.numPointShadows!==S||C.numSpotShadows!==v||C.numSpotMaps!==T||C.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,C.directionalLength=d,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=E,C.numPointShadows=S,C.numSpotShadows=v,C.numSpotMaps=T,C.numLightProbes=A,n.version=zE++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const S=c[p];if(S.isDirectionalLight){const v=n.directional[f];v.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),f++}else if(S.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(S.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const v=n.point[h];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),h++}else if(S.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Eh(i){const e=new HE(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function VE(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Eh(i),e.set(r,[o])):s>=a.length?(o=new Eh(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const GE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function XE(i,e,t){let n=new Pu;const r=new qe,s=new qe,a=new _t,o=new cv({depthPacking:l0}),l=new uv,c={},u=t.maxTextureSize,f={[Wi]:rn,[rn]:Wi,[ui]:ui},h=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:GE,fragmentShader:WE}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ar;g.setAttribute("position",new qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new $t(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fp;let p=this.type;this.render=function(w,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const x=i.getRenderTarget(),b=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Bi),B.buffers.depth.getReversed()?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const O=p!==ri&&this.type===ri,G=p===ri&&this.type!==ri;for(let W=0,V=w.length;W<V;W++){const Y=w[W],k=Y.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const re=k.getFrameExtents();if(r.multiply(re),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/re.x),r.x=s.x*re.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/re.y),r.y=s.y*re.y,k.mapSize.y=s.y)),k.map===null||O===!0||G===!0){const _e=this.type!==ri?{minFilter:Fn,magFilter:Fn}:{};k.map!==null&&k.map.dispose(),k.map=new yr(r.x,r.y,_e),k.map.texture.name=Y.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const ae=k.getViewportCount();for(let _e=0;_e<ae;_e++){const Ce=k.getViewport(_e);a.set(s.x*Ce.x,s.y*Ce.y,s.x*Ce.z,s.y*Ce.w),B.viewport(a),k.updateMatrices(Y,_e),n=k.getFrustum(),v(A,C,k.camera,Y,this.type)}k.isPointLightShadow!==!0&&this.type===ri&&E(k,C),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(x,b,P)};function E(w,A){const C=e.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new yr(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,C,h,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,C,d,_,null)}function S(w,A,C,x){let b=null;const P=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)b=P;else if(b=C.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const B=b.uuid,O=A.uuid;let G=c[B];G===void 0&&(G={},c[B]=G);let W=G[O];W===void 0&&(W=b.clone(),G[O]=W,A.addEventListener("dispose",T)),b=W}if(b.visible=A.visible,b.wireframe=A.wireframe,x===ri?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:f[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,C.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const B=i.properties.get(b);B.light=C}return b}function v(w,A,C,x,b){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===ri)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const O=e.update(w),G=w.material;if(Array.isArray(G)){const W=O.groups;for(let V=0,Y=W.length;V<Y;V++){const k=W[V],re=G[k.materialIndex];if(re&&re.visible){const ae=S(w,re,x,b);w.onBeforeShadow(i,w,A,C,O,ae,k),i.renderBufferDirect(C,null,O,ae,w,k),w.onAfterShadow(i,w,A,C,O,ae,k)}}}else if(G.visible){const W=S(w,G,x,b);w.onBeforeShadow(i,w,A,C,O,W,null),i.renderBufferDirect(C,null,O,W,w,null),w.onAfterShadow(i,w,A,C,O,W,null)}}const B=w.children;for(let O=0,G=B.length;O<G;O++)v(B[O],A,C,x,b)}function T(w){w.target.removeEventListener("dispose",T);for(const C in c){const x=c[C],b=w.target.uuid;b in x&&(x[b].dispose(),delete x[b])}}}const qE={[Kl]:jl,[Jl]:tc,[Ql]:nc,[_s]:ec,[jl]:Kl,[tc]:Jl,[nc]:Ql,[ec]:_s};function YE(i,e){function t(){let L=!1;const ee=new _t;let ie=null;const he=new _t(0,0,0,0);return{setMask:function(j){ie!==j&&!L&&(i.colorMask(j,j,j,j),ie=j)},setLocked:function(j){L=j},setClear:function(j,Z,me,Le,at){at===!0&&(j*=Le,Z*=Le,me*=Le),ee.set(j,Z,me,Le),he.equals(ee)===!1&&(i.clearColor(j,Z,me,Le),he.copy(ee))},reset:function(){L=!1,ie=null,he.set(-1,0,0,0)}}}function n(){let L=!1,ee=!1,ie=null,he=null,j=null;return{setReversed:function(Z){if(ee!==Z){const me=e.get("EXT_clip_control");Z?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),ee=Z;const Le=j;j=null,this.setClear(Le)}},getReversed:function(){return ee},setTest:function(Z){Z?ne(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(Z){ie!==Z&&!L&&(i.depthMask(Z),ie=Z)},setFunc:function(Z){if(ee&&(Z=qE[Z]),he!==Z){switch(Z){case Kl:i.depthFunc(i.NEVER);break;case jl:i.depthFunc(i.ALWAYS);break;case Jl:i.depthFunc(i.LESS);break;case _s:i.depthFunc(i.LEQUAL);break;case Ql:i.depthFunc(i.EQUAL);break;case ec:i.depthFunc(i.GEQUAL);break;case tc:i.depthFunc(i.GREATER);break;case nc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=Z}},setLocked:function(Z){L=Z},setClear:function(Z){j!==Z&&(ee&&(Z=1-Z),i.clearDepth(Z),j=Z)},reset:function(){L=!1,ie=null,he=null,j=null,ee=!1}}}function r(){let L=!1,ee=null,ie=null,he=null,j=null,Z=null,me=null,Le=null,at=null;return{setTest:function(je){L||(je?ne(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(je){ee!==je&&!L&&(i.stencilMask(je),ee=je)},setFunc:function(je,Jn,On){(ie!==je||he!==Jn||j!==On)&&(i.stencilFunc(je,Jn,On),ie=je,he=Jn,j=On)},setOp:function(je,Jn,On){(Z!==je||me!==Jn||Le!==On)&&(i.stencilOp(je,Jn,On),Z=je,me=Jn,Le=On)},setLocked:function(je){L=je},setClear:function(je){at!==je&&(i.clearStencil(je),at=je)},reset:function(){L=!1,ee=null,ie=null,he=null,j=null,Z=null,me=null,Le=null,at=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,E=null,S=null,v=null,T=null,w=null,A=new Ge(0,0,0),C=0,x=!1,b=null,P=null,B=null,O=null,G=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Y=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(k)[1]),V=Y>=1):k.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),V=Y>=2);let re=null,ae={};const _e=i.getParameter(i.SCISSOR_BOX),Ce=i.getParameter(i.VIEWPORT),et=new _t().fromArray(_e),Be=new _t().fromArray(Ce);function X(L,ee,ie,he){const j=new Uint8Array(4),Z=i.createTexture();i.bindTexture(L,Z),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let me=0;me<ie;me++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ee,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,j):i.texImage2D(ee+me,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,j);return Z}const oe={};oe[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),oe[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),oe[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(i.DEPTH_TEST),a.setFunc(_s),Ke(!1),Se(Ef),ne(i.CULL_FACE),st(Bi);function ne(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function be(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function we(L,ee){return f[L]!==ee?(i.bindFramebuffer(L,ee),f[L]=ee,L===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ee),L===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ee),!0):!1}function De(L,ee){let ie=d,he=!1;if(L){ie=h.get(ee),ie===void 0&&(ie=[],h.set(ee,ie));const j=L.textures;if(ie.length!==j.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,me=j.length;Z<me;Z++)ie[Z]=i.COLOR_ATTACHMENT0+Z;ie.length=j.length,he=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,he=!0);he&&i.drawBuffers(ie)}function xt(L){return g!==L?(i.useProgram(L),g=L,!0):!1}const We={[ar]:i.FUNC_ADD,[Ug]:i.FUNC_SUBTRACT,[Ng]:i.FUNC_REVERSE_SUBTRACT};We[Fg]=i.MIN,We[Og]=i.MAX;const D={[Bg]:i.ZERO,[zg]:i.ONE,[kg]:i.SRC_COLOR,[$l]:i.SRC_ALPHA,[qg]:i.SRC_ALPHA_SATURATE,[Wg]:i.DST_COLOR,[Vg]:i.DST_ALPHA,[Hg]:i.ONE_MINUS_SRC_COLOR,[Zl]:i.ONE_MINUS_SRC_ALPHA,[Xg]:i.ONE_MINUS_DST_COLOR,[Gg]:i.ONE_MINUS_DST_ALPHA,[Yg]:i.CONSTANT_COLOR,[$g]:i.ONE_MINUS_CONSTANT_COLOR,[Zg]:i.CONSTANT_ALPHA,[Kg]:i.ONE_MINUS_CONSTANT_ALPHA};function st(L,ee,ie,he,j,Z,me,Le,at,je){if(L===Bi){_===!0&&(be(i.BLEND),_=!1);return}if(_===!1&&(ne(i.BLEND),_=!0),L!==Ig){if(L!==m||je!==x){if((p!==ar||v!==ar)&&(i.blendEquation(i.FUNC_ADD),p=ar,v=ar),je)switch(L){case ss:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yf:i.blendFunc(i.ONE,i.ONE);break;case Tf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bf:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yf:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Tf:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bf:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}E=null,S=null,T=null,w=null,A.set(0,0,0),C=0,m=L,x=je}return}j=j||ee,Z=Z||ie,me=me||he,(ee!==p||j!==v)&&(i.blendEquationSeparate(We[ee],We[j]),p=ee,v=j),(ie!==E||he!==S||Z!==T||me!==w)&&(i.blendFuncSeparate(D[ie],D[he],D[Z],D[me]),E=ie,S=he,T=Z,w=me),(Le.equals(A)===!1||at!==C)&&(i.blendColor(Le.r,Le.g,Le.b,at),A.copy(Le),C=at),m=L,x=!1}function ye(L,ee){L.side===ui?be(i.CULL_FACE):ne(i.CULL_FACE);let ie=L.side===rn;ee&&(ie=!ie),Ke(ie),L.blending===ss&&L.transparent===!1?st(Bi):st(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const he=L.stencilWrite;o.setTest(he),he&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),de(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(L){b!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),b=L)}function Se(L){L!==Pg?(ne(i.CULL_FACE),L!==P&&(L===Ef?i.cullFace(i.BACK):L===Dg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),P=L}function lt(L){L!==B&&(V&&i.lineWidth(L),B=L)}function de(L,ee,ie){L?(ne(i.POLYGON_OFFSET_FILL),(O!==ee||G!==ie)&&(i.polygonOffset(ee,ie),O=ee,G=ie)):be(i.POLYGON_OFFSET_FILL)}function Oe(L){L?ne(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function Rt(L){L===void 0&&(L=i.TEXTURE0+W-1),re!==L&&(i.activeTexture(L),re=L)}function Mt(L,ee,ie){ie===void 0&&(re===null?ie=i.TEXTURE0+W-1:ie=re);let he=ae[ie];he===void 0&&(he={type:void 0,texture:void 0},ae[ie]=he),(he.type!==L||he.texture!==ee)&&(re!==ie&&(i.activeTexture(ie),re=ie),i.bindTexture(L,ee||oe[L]),he.type=L,he.texture=ee)}function R(){const L=ae[re];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function M(){try{i.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{i.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{i.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{i.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{i.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{i.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{i.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{i.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(L){et.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),et.copy(L))}function Re(L){Be.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Be.copy(L))}function xe(L,ee){let ie=c.get(ee);ie===void 0&&(ie=new WeakMap,c.set(ee,ie));let he=ie.get(L);he===void 0&&(he=i.getUniformBlockIndex(ee,L.name),ie.set(L,he))}function le(L,ee){const he=c.get(ee).get(L);l.get(ee)!==he&&(i.uniformBlockBinding(ee,he,L.__bindingPointIndex),l.set(ee,he))}function Ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},re=null,ae={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,E=null,S=null,v=null,T=null,w=null,A=new Ge(0,0,0),C=0,x=!1,b=null,P=null,B=null,O=null,G=null,et.set(0,0,i.canvas.width,i.canvas.height),Be.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ne,disable:be,bindFramebuffer:we,drawBuffers:De,useProgram:xt,setBlending:st,setMaterial:ye,setFlipSided:Ke,setCullFace:Se,setLineWidth:lt,setPolygonOffset:de,setScissorTest:Oe,activeTexture:Rt,bindTexture:Mt,unbindTexture:R,compressedTexImage2D:M,compressedTexImage3D:F,texImage2D:ve,texImage3D:Q,updateUBOMapping:xe,uniformBlockBinding:le,texStorage2D:te,texStorage3D:ge,texSubImage2D:$,texSubImage3D:K,compressedTexSubImage2D:q,compressedTexSubImage3D:Me,scissor:ue,viewport:Re,reset:Ue}}function $E(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qe,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return d?new OffscreenCanvas(R,M):ua("canvas")}function _(R,M,F){let $=1;const K=Mt(R);if((K.width>F||K.height>F)&&($=F/Math.max(K.width,K.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const q=Math.floor($*K.width),Me=Math.floor($*K.height);f===void 0&&(f=g(q,Me));const te=M?g(q,Me):f;return te.width=q,te.height=Me,te.getContext("2d").drawImage(R,0,0,q,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+q+"x"+Me+")."),te}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(R,M,F,$,K=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let q=M;if(M===i.RED&&(F===i.FLOAT&&(q=i.R32F),F===i.HALF_FLOAT&&(q=i.R16F),F===i.UNSIGNED_BYTE&&(q=i.R8)),M===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.R8UI),F===i.UNSIGNED_SHORT&&(q=i.R16UI),F===i.UNSIGNED_INT&&(q=i.R32UI),F===i.BYTE&&(q=i.R8I),F===i.SHORT&&(q=i.R16I),F===i.INT&&(q=i.R32I)),M===i.RG&&(F===i.FLOAT&&(q=i.RG32F),F===i.HALF_FLOAT&&(q=i.RG16F),F===i.UNSIGNED_BYTE&&(q=i.RG8)),M===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RG8UI),F===i.UNSIGNED_SHORT&&(q=i.RG16UI),F===i.UNSIGNED_INT&&(q=i.RG32UI),F===i.BYTE&&(q=i.RG8I),F===i.SHORT&&(q=i.RG16I),F===i.INT&&(q=i.RG32I)),M===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGB8UI),F===i.UNSIGNED_SHORT&&(q=i.RGB16UI),F===i.UNSIGNED_INT&&(q=i.RGB32UI),F===i.BYTE&&(q=i.RGB8I),F===i.SHORT&&(q=i.RGB16I),F===i.INT&&(q=i.RGB32I)),M===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),F===i.UNSIGNED_INT&&(q=i.RGBA32UI),F===i.BYTE&&(q=i.RGBA8I),F===i.SHORT&&(q=i.RGBA16I),F===i.INT&&(q=i.RGBA32I)),M===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),M===i.RGBA){const Me=K?vo:Ze.getTransfer($);F===i.FLOAT&&(q=i.RGBA32F),F===i.HALF_FLOAT&&(q=i.RGBA16F),F===i.UNSIGNED_BYTE&&(q=Me===Qe?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function v(R,M){let F;return R?M===null||M===Er||M===aa?F=i.DEPTH24_STENCIL8:M===fi?F=i.DEPTH32F_STENCIL8:M===sa&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Er||M===aa?F=i.DEPTH_COMPONENT24:M===fi?F=i.DEPTH_COMPONENT32F:M===sa&&(F=i.DEPTH_COMPONENT16),F}function T(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Fn&&R.minFilter!==Wn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function w(R){const M=R.target;M.removeEventListener("dispose",w),C(M),M.isVideoTexture&&u.delete(M)}function A(R){const M=R.target;M.removeEventListener("dispose",A),b(M)}function C(R){const M=n.get(R);if(M.__webglInit===void 0)return;const F=R.source,$=h.get(F);if($){const K=$[M.__cacheKey];K.usedTimes--,K.usedTimes===0&&x(R),Object.keys($).length===0&&h.delete(F)}n.remove(R)}function x(R){const M=n.get(R);i.deleteTexture(M.__webglTexture);const F=R.source,$=h.get(F);delete $[M.__cacheKey],a.memory.textures--}function b(R){const M=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let K=0;K<M.__webglFramebuffer[$].length;K++)i.deleteFramebuffer(M.__webglFramebuffer[$][K]);else i.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)i.deleteFramebuffer(M.__webglFramebuffer[$]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const F=R.textures;for(let $=0,K=F.length;$<K;$++){const q=n.get(F[$]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(F[$])}n.remove(R)}let P=0;function B(){P=0}function O(){const R=P;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),P+=1,R}function G(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function W(R,M){const F=n.get(R);if(R.isVideoTexture&&Oe(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&F.__version!==R.version){const $=R.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(F,R,M);return}}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+M)}function V(R,M){const F=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){oe(F,R,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+M)}function Y(R,M){const F=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){oe(F,R,M);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+M)}function k(R,M){const F=n.get(R);if(R.version>0&&F.__version!==R.version){ne(F,R,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+M)}const re={[sc]:i.REPEAT,[cr]:i.CLAMP_TO_EDGE,[ac]:i.MIRRORED_REPEAT},ae={[Fn]:i.NEAREST,[a0]:i.NEAREST_MIPMAP_NEAREST,[ya]:i.NEAREST_MIPMAP_LINEAR,[Wn]:i.LINEAR,[$o]:i.LINEAR_MIPMAP_NEAREST,[ur]:i.LINEAR_MIPMAP_LINEAR},_e={[u0]:i.NEVER,[_0]:i.ALWAYS,[f0]:i.LESS,[yp]:i.LEQUAL,[h0]:i.EQUAL,[m0]:i.GEQUAL,[d0]:i.GREATER,[p0]:i.NOTEQUAL};function Ce(R,M){if(M.type===fi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Wn||M.magFilter===$o||M.magFilter===ya||M.magFilter===ur||M.minFilter===Wn||M.minFilter===$o||M.minFilter===ya||M.minFilter===ur)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,re[M.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,re[M.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,re[M.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ae[M.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ae[M.minFilter]),M.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,_e[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Fn||M.minFilter!==ya&&M.minFilter!==ur||M.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function et(R,M){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",w));const $=M.source;let K=h.get($);K===void 0&&(K={},h.set($,K));const q=G(M);if(q!==R.__cacheKey){K[q]===void 0&&(K[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),K[q].usedTimes++;const Me=K[R.__cacheKey];Me!==void 0&&(K[R.__cacheKey].usedTimes--,Me.usedTimes===0&&x(M)),R.__cacheKey=q,R.__webglTexture=K[q].texture}return F}function Be(R,M,F){return Math.floor(Math.floor(R/F)/M)}function X(R,M,F,$){const q=R.updateRanges;if(q.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,F,$,M.data);else{q.sort((Q,ue)=>Q.start-ue.start);let Me=0;for(let Q=1;Q<q.length;Q++){const ue=q[Me],Re=q[Q],xe=ue.start+ue.count,le=Be(Re.start,M.width,4),Ue=Be(ue.start,M.width,4);Re.start<=xe+1&&le===Ue&&Be(Re.start+Re.count-1,M.width,4)===le?ue.count=Math.max(ue.count,Re.start+Re.count-ue.start):(++Me,q[Me]=Re)}q.length=Me+1;const te=i.getParameter(i.UNPACK_ROW_LENGTH),ge=i.getParameter(i.UNPACK_SKIP_PIXELS),ve=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let Q=0,ue=q.length;Q<ue;Q++){const Re=q[Q],xe=Math.floor(Re.start/4),le=Math.ceil(Re.count/4),Ue=xe%M.width,L=Math.floor(xe/M.width),ee=le,ie=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ue),i.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,Ue,L,ee,ie,F,$,M.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,te),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ge),i.pixelStorei(i.UNPACK_SKIP_ROWS,ve)}}function oe(R,M,F){let $=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=i.TEXTURE_3D);const K=et(R,M),q=M.source;t.bindTexture($,R.__webglTexture,i.TEXTURE0+F);const Me=n.get(q);if(q.version!==Me.__version||K===!0){t.activeTexture(i.TEXTURE0+F);const te=Ze.getPrimaries(Ze.workingColorSpace),ge=M.colorSpace===Pi?null:Ze.getPrimaries(M.colorSpace),ve=M.colorSpace===Pi||te===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let Q=_(M.image,!1,r.maxTextureSize);Q=Rt(M,Q);const ue=s.convert(M.format,M.colorSpace),Re=s.convert(M.type);let xe=S(M.internalFormat,ue,Re,M.colorSpace,M.isVideoTexture);Ce($,M);let le;const Ue=M.mipmaps,L=M.isVideoTexture!==!0,ee=Me.__version===void 0||K===!0,ie=q.dataReady,he=T(M,Q);if(M.isDepthTexture)xe=v(M.format===la,M.type),ee&&(L?t.texStorage2D(i.TEXTURE_2D,1,xe,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,xe,Q.width,Q.height,0,ue,Re,null));else if(M.isDataTexture)if(Ue.length>0){L&&ee&&t.texStorage2D(i.TEXTURE_2D,he,xe,Ue[0].width,Ue[0].height);for(let j=0,Z=Ue.length;j<Z;j++)le=Ue[j],L?ie&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,le.width,le.height,ue,Re,le.data):t.texImage2D(i.TEXTURE_2D,j,xe,le.width,le.height,0,ue,Re,le.data);M.generateMipmaps=!1}else L?(ee&&t.texStorage2D(i.TEXTURE_2D,he,xe,Q.width,Q.height),ie&&X(M,Q,ue,Re)):t.texImage2D(i.TEXTURE_2D,0,xe,Q.width,Q.height,0,ue,Re,Q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){L&&ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,xe,Ue[0].width,Ue[0].height,Q.depth);for(let j=0,Z=Ue.length;j<Z;j++)if(le=Ue[j],M.format!==Un)if(ue!==null)if(L){if(ie)if(M.layerUpdates.size>0){const me=Jf(le.width,le.height,M.format,M.type);for(const Le of M.layerUpdates){const at=le.data.subarray(Le*me/le.data.BYTES_PER_ELEMENT,(Le+1)*me/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,Le,le.width,le.height,1,ue,at)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,le.width,le.height,Q.depth,ue,le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,xe,le.width,le.height,Q.depth,0,le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ie&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,le.width,le.height,Q.depth,ue,Re,le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,xe,le.width,le.height,Q.depth,0,ue,Re,le.data)}else{L&&ee&&t.texStorage2D(i.TEXTURE_2D,he,xe,Ue[0].width,Ue[0].height);for(let j=0,Z=Ue.length;j<Z;j++)le=Ue[j],M.format!==Un?ue!==null?L?ie&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,le.width,le.height,ue,le.data):t.compressedTexImage2D(i.TEXTURE_2D,j,xe,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ie&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,le.width,le.height,ue,Re,le.data):t.texImage2D(i.TEXTURE_2D,j,xe,le.width,le.height,0,ue,Re,le.data)}else if(M.isDataArrayTexture)if(L){if(ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,xe,Q.width,Q.height,Q.depth),ie)if(M.layerUpdates.size>0){const j=Jf(Q.width,Q.height,M.format,M.type);for(const Z of M.layerUpdates){const me=Q.data.subarray(Z*j/Q.data.BYTES_PER_ELEMENT,(Z+1)*j/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,Q.width,Q.height,1,ue,Re,me)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ue,Re,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,xe,Q.width,Q.height,Q.depth,0,ue,Re,Q.data);else if(M.isData3DTexture)L?(ee&&t.texStorage3D(i.TEXTURE_3D,he,xe,Q.width,Q.height,Q.depth),ie&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ue,Re,Q.data)):t.texImage3D(i.TEXTURE_3D,0,xe,Q.width,Q.height,Q.depth,0,ue,Re,Q.data);else if(M.isFramebufferTexture){if(ee)if(L)t.texStorage2D(i.TEXTURE_2D,he,xe,Q.width,Q.height);else{let j=Q.width,Z=Q.height;for(let me=0;me<he;me++)t.texImage2D(i.TEXTURE_2D,me,xe,j,Z,0,ue,Re,null),j>>=1,Z>>=1}}else if(Ue.length>0){if(L&&ee){const j=Mt(Ue[0]);t.texStorage2D(i.TEXTURE_2D,he,xe,j.width,j.height)}for(let j=0,Z=Ue.length;j<Z;j++)le=Ue[j],L?ie&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,ue,Re,le):t.texImage2D(i.TEXTURE_2D,j,xe,ue,Re,le);M.generateMipmaps=!1}else if(L){if(ee){const j=Mt(Q);t.texStorage2D(i.TEXTURE_2D,he,xe,j.width,j.height)}ie&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,Re,Q)}else t.texImage2D(i.TEXTURE_2D,0,xe,ue,Re,Q);m(M)&&p($),Me.__version=q.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ne(R,M,F){if(M.image.length!==6)return;const $=et(R,M),K=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+F);const q=n.get(K);if(K.version!==q.__version||$===!0){t.activeTexture(i.TEXTURE0+F);const Me=Ze.getPrimaries(Ze.workingColorSpace),te=M.colorSpace===Pi?null:Ze.getPrimaries(M.colorSpace),ge=M.colorSpace===Pi||Me===te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const ve=M.isCompressedTexture||M.image[0].isCompressedTexture,Q=M.image[0]&&M.image[0].isDataTexture,ue=[];for(let Z=0;Z<6;Z++)!ve&&!Q?ue[Z]=_(M.image[Z],!0,r.maxCubemapSize):ue[Z]=Q?M.image[Z].image:M.image[Z],ue[Z]=Rt(M,ue[Z]);const Re=ue[0],xe=s.convert(M.format,M.colorSpace),le=s.convert(M.type),Ue=S(M.internalFormat,xe,le,M.colorSpace),L=M.isVideoTexture!==!0,ee=q.__version===void 0||$===!0,ie=K.dataReady;let he=T(M,Re);Ce(i.TEXTURE_CUBE_MAP,M);let j;if(ve){L&&ee&&t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Ue,Re.width,Re.height);for(let Z=0;Z<6;Z++){j=ue[Z].mipmaps;for(let me=0;me<j.length;me++){const Le=j[me];M.format!==Un?xe!==null?L?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,0,0,Le.width,Le.height,xe,Le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,Ue,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,0,0,Le.width,Le.height,xe,le,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,Ue,Le.width,Le.height,0,xe,le,Le.data)}}}else{if(j=M.mipmaps,L&&ee){j.length>0&&he++;const Z=Mt(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Ue,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Q){L?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ue[Z].width,ue[Z].height,xe,le,ue[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ue,ue[Z].width,ue[Z].height,0,xe,le,ue[Z].data);for(let me=0;me<j.length;me++){const at=j[me].image[Z].image;L?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,0,0,at.width,at.height,xe,le,at.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,Ue,at.width,at.height,0,xe,le,at.data)}}else{L?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,xe,le,ue[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ue,xe,le,ue[Z]);for(let me=0;me<j.length;me++){const Le=j[me];L?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,0,0,xe,le,Le.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,Ue,xe,le,Le.image[Z])}}}m(M)&&p(i.TEXTURE_CUBE_MAP),q.__version=K.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function be(R,M,F,$,K,q){const Me=s.convert(F.format,F.colorSpace),te=s.convert(F.type),ge=S(F.internalFormat,Me,te,F.colorSpace),ve=n.get(M),Q=n.get(F);if(Q.__renderTarget=M,!ve.__hasExternalTextures){const ue=Math.max(1,M.width>>q),Re=Math.max(1,M.height>>q);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,q,ge,ue,Re,M.depth,0,Me,te,null):t.texImage2D(K,q,ge,ue,Re,0,Me,te,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),de(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,K,Q.__webglTexture,0,lt(M)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,K,Q.__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function we(R,M,F){if(i.bindRenderbuffer(i.RENDERBUFFER,R),M.depthBuffer){const $=M.depthTexture,K=$&&$.isDepthTexture?$.type:null,q=v(M.stencilBuffer,K),Me=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=lt(M);de(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,q,M.width,M.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,q,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,q,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,R)}else{const $=M.textures;for(let K=0;K<$.length;K++){const q=$[K],Me=s.convert(q.format,q.colorSpace),te=s.convert(q.type),ge=S(q.internalFormat,Me,te,q.colorSpace),ve=lt(M);F&&de(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,ge,M.width,M.height):de(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,ge,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ge,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(M.depthTexture);$.__renderTarget=M,(!$.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);const K=$.__webglTexture,q=lt(M);if(M.depthTexture.format===oa)de(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(M.depthTexture.format===la)de(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function xt(R){const M=n.get(R),F=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const $=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){const K=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",K)};$.addEventListener("dispose",K),M.__depthDisposeCallback=K}M.__boundDepthTexture=$}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const $=R.texture.mipmaps;$&&$.length>0?De(M.__webglFramebuffer[0],R):De(M.__webglFramebuffer,R)}else if(F){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=i.createRenderbuffer(),we(M.__webglDepthbuffer[$],R,!1);else{const K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,q)}}else{const $=R.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),we(M.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(R,M,F){const $=n.get(R);M!==void 0&&be($.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&xt(R)}function D(R){const M=R.texture,F=n.get(R),$=n.get(M);R.addEventListener("dispose",A);const K=R.textures,q=R.isWebGLCubeRenderTarget===!0,Me=K.length>1;if(Me||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=M.version,a.memory.textures++),q){F.__webglFramebuffer=[];for(let te=0;te<6;te++)if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[te]=[];for(let ge=0;ge<M.mipmaps.length;ge++)F.__webglFramebuffer[te][ge]=i.createFramebuffer()}else F.__webglFramebuffer[te]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let te=0;te<M.mipmaps.length;te++)F.__webglFramebuffer[te]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Me)for(let te=0,ge=K.length;te<ge;te++){const ve=n.get(K[te]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&de(R)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let te=0;te<K.length;te++){const ge=K[te];F.__webglColorRenderbuffer[te]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[te]);const ve=s.convert(ge.format,ge.colorSpace),Q=s.convert(ge.type),ue=S(ge.internalFormat,ve,Q,ge.colorSpace,R.isXRRenderTarget===!0),Re=lt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,ue,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.RENDERBUFFER,F.__webglColorRenderbuffer[te])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),we(F.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Ce(i.TEXTURE_CUBE_MAP,M);for(let te=0;te<6;te++)if(M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)be(F.__webglFramebuffer[te][ge],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,ge);else be(F.__webglFramebuffer[te],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);m(M)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let te=0,ge=K.length;te<ge;te++){const ve=K[te],Q=n.get(ve);let ue=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ue=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,Q.__webglTexture),Ce(ue,ve),be(F.__webglFramebuffer,R,ve,i.COLOR_ATTACHMENT0+te,ue,0),m(ve)&&p(ue)}t.unbindTexture()}else{let te=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(te=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(te,$.__webglTexture),Ce(te,M),M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)be(F.__webglFramebuffer[ge],R,M,i.COLOR_ATTACHMENT0,te,ge);else be(F.__webglFramebuffer,R,M,i.COLOR_ATTACHMENT0,te,0);m(M)&&p(te),t.unbindTexture()}R.depthBuffer&&xt(R)}function st(R){const M=R.textures;for(let F=0,$=M.length;F<$;F++){const K=M[F];if(m(K)){const q=E(R),Me=n.get(K).__webglTexture;t.bindTexture(q,Me),p(q),t.unbindTexture()}}}const ye=[],Ke=[];function Se(R){if(R.samples>0){if(de(R)===!1){const M=R.textures,F=R.width,$=R.height;let K=i.COLOR_BUFFER_BIT;const q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(R),te=M.length>1;if(te)for(let ve=0;ve<M.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const ge=R.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ve=0;ve<M.length;ve++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),te){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);const Q=n.get(M[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,F,$,0,0,F,$,K,i.NEAREST),l===!0&&(ye.length=0,Ke.length=0,ye.push(i.COLOR_ATTACHMENT0+ve),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ye.push(q),Ke.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ke)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ye))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),te)for(let ve=0;ve<M.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);const Q=n.get(M[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,Q,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function lt(R){return Math.min(r.maxSamples,R.samples)}function de(R){const M=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Oe(R){const M=a.render.frame;u.get(R)!==M&&(u.set(R,M),R.update())}function Rt(R,M){const F=R.colorSpace,$=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||F!==xs&&F!==Pi&&(Ze.getTransfer(F)===Qe?($!==Un||K!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),M}function Mt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=B,this.setTexture2D=W,this.setTexture2DArray=V,this.setTexture3D=Y,this.setTextureCube=k,this.rebindTextures=We,this.setupRenderTarget=D,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=be,this.useMultisampledRTT=de}function ZE(i,e){function t(n,r=Pi){let s;const a=Ze.getTransfer(r);if(n===Zn)return i.UNSIGNED_BYTE;if(n===Su)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Eu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_p)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===pp)return i.BYTE;if(n===mp)return i.SHORT;if(n===sa)return i.UNSIGNED_SHORT;if(n===Mu)return i.INT;if(n===Er)return i.UNSIGNED_INT;if(n===fi)return i.FLOAT;if(n===_a)return i.HALF_FLOAT;if(n===gp)return i.ALPHA;if(n===vp)return i.RGB;if(n===Un)return i.RGBA;if(n===oa)return i.DEPTH_COMPONENT;if(n===la)return i.DEPTH_STENCIL;if(n===xp)return i.RED;if(n===yu)return i.RED_INTEGER;if(n===Mp)return i.RG;if(n===Tu)return i.RG_INTEGER;if(n===bu)return i.RGBA_INTEGER;if(n===Ka||n===ja||n===Ja||n===Qa)if(a===Qe)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ka)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ka)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ja)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ja)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oc||n===lc||n===cc||n===uc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===oc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===cc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===uc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fc||n===hc||n===dc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===fc||n===hc)return a===Qe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===dc)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===pc||n===mc||n===_c||n===gc||n===vc||n===xc||n===Mc||n===Sc||n===Ec||n===yc||n===Tc||n===bc||n===wc||n===Ac)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===pc)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mc)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_c)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gc)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vc)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xc)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mc)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sc)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ec)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===yc)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Tc)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bc)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wc)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ac)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===eo||n===Rc||n===Cc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===eo)return a===Qe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Rc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Cc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sp||n===Pc||n===Dc||n===Lc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===eo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Pc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Dc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Lc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===aa?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Hp extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const KE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class JE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Hp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Xi({vertexShader:KE,fragmentShader:jE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $t(new ki(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class QE extends Ts{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=new JE,m={},p=t.getContextAttributes();let E=null,S=null;const v=[],T=[],w=new qe;let A=null;const C=new yn;C.viewport=new _t;const x=new yn;x.viewport=new _t;const b=[C,x],P=new xv;let B=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let oe=v[X];return oe===void 0&&(oe=new ml,v[X]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(X){let oe=v[X];return oe===void 0&&(oe=new ml,v[X]=oe),oe.getGripSpace()},this.getHand=function(X){let oe=v[X];return oe===void 0&&(oe=new ml,v[X]=oe),oe.getHandSpace()};function G(X){const oe=T.indexOf(X.inputSource);if(oe===-1)return;const ne=v[oe];ne!==void 0&&(ne.update(X.inputSource,X.frame,c||a),ne.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",V);for(let X=0;X<v.length;X++){const oe=T[X];oe!==null&&(T[X]=null,v[X].disconnect(oe))}B=null,O=null,_.reset();for(const X in m)delete m[X];e.setRenderTarget(E),d=null,h=null,f=null,r=null,S=null,Be.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",W),r.addEventListener("inputsourceschange",V),p.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(w),typeof XRWebGLBinding<"u"&&(f=new XRWebGLBinding(r,t)),f!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,be=null,we=null;p.depth&&(we=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=p.stencil?la:oa,be=p.stencil?aa:Er);const De={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};h=f.createProjectionLayer(De),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new yr(h.textureWidth,h.textureHeight,{format:Un,type:Zn,depthTexture:new Ip(h.textureWidth,h.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ne={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new yr(d.framebufferWidth,d.framebufferHeight,{format:Un,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Be.setContext(r),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function V(X){for(let oe=0;oe<X.removed.length;oe++){const ne=X.removed[oe],be=T.indexOf(ne);be>=0&&(T[be]=null,v[be].disconnect(ne))}for(let oe=0;oe<X.added.length;oe++){const ne=X.added[oe];let be=T.indexOf(ne);if(be===-1){for(let De=0;De<v.length;De++)if(De>=T.length){T.push(ne),be=De;break}else if(T[De]===null){T[De]=ne,be=De;break}if(be===-1)break}const we=v[be];we&&we.connect(ne)}}const Y=new N,k=new N;function re(X,oe,ne){Y.setFromMatrixPosition(oe.matrixWorld),k.setFromMatrixPosition(ne.matrixWorld);const be=Y.distanceTo(k),we=oe.projectionMatrix.elements,De=ne.projectionMatrix.elements,xt=we[14]/(we[10]-1),We=we[14]/(we[10]+1),D=(we[9]+1)/we[5],st=(we[9]-1)/we[5],ye=(we[8]-1)/we[0],Ke=(De[8]+1)/De[0],Se=xt*ye,lt=xt*Ke,de=be/(-ye+Ke),Oe=de*-ye;if(oe.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Oe),X.translateZ(de),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),we[10]===-1)X.projectionMatrix.copy(oe.projectionMatrix),X.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Rt=xt+de,Mt=We+de,R=Se-Oe,M=lt+(be-Oe),F=D*We/Mt*Rt,$=st*We/Mt*Rt;X.projectionMatrix.makePerspective(R,M,F,$,Rt,Mt),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ae(X,oe){oe===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(oe.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let oe=X.near,ne=X.far;_.texture!==null&&(_.depthNear>0&&(oe=_.depthNear),_.depthFar>0&&(ne=_.depthFar)),P.near=x.near=C.near=oe,P.far=x.far=C.far=ne,(B!==P.near||O!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),B=P.near,O=P.far),P.layers.mask=X.layers.mask|6,C.layers.mask=P.layers.mask&3,x.layers.mask=P.layers.mask&5;const be=X.parent,we=P.cameras;ae(P,be);for(let De=0;De<we.length;De++)ae(we[De],be);we.length===2?re(P,C,x):P.projectionMatrix.copy(C.projectionMatrix),_e(X,P,be)};function _e(X,oe,ne){ne===null?X.matrix.copy(oe.matrixWorld):(X.matrix.copy(ne.matrixWorld),X.matrix.invert(),X.matrix.multiply(oe.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(oe.projectionMatrix),X.projectionMatrixInverse.copy(oe.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ca*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(P)},this.getCameraTexture=function(X){return m[X]};let Ce=null;function et(X,oe){if(u=oe.getViewerPose(c||a),g=oe,u!==null){const ne=u.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let be=!1;ne.length!==P.cameras.length&&(P.cameras.length=0,be=!0);for(let We=0;We<ne.length;We++){const D=ne[We];let st=null;if(d!==null)st=d.getViewport(D);else{const Ke=f.getViewSubImage(h,D);st=Ke.viewport,We===0&&(e.setRenderTargetTextures(S,Ke.colorTexture,Ke.depthStencilTexture),e.setRenderTarget(S))}let ye=b[We];ye===void 0&&(ye=new yn,ye.layers.enable(We),ye.viewport=new _t,b[We]=ye),ye.matrix.fromArray(D.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(D.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(st.x,st.y,st.width,st.height),We===0&&(P.matrix.copy(ye.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),be===!0&&P.cameras.push(ye)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const We=f.getDepthInformation(ne[0]);We&&We.isValid&&We.texture&&_.init(We,r.renderState)}if(we&&we.includes("camera-access")&&(e.state.unbindTexture(),f))for(let We=0;We<ne.length;We++){const D=ne[We].camera;if(D){let st=m[D];st||(st=new Hp,m[D]=st);const ye=f.getCameraImage(D);st.sourceTexture=ye}}}for(let ne=0;ne<v.length;ne++){const be=T[ne],we=v[ne];be!==null&&we!==void 0&&we.update(be,oe,c||a)}Ce&&Ce(X,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),g=null}const Be=new Fp;Be.setAnimationLoop(et),this.setAnimationLoop=function(X){Ce=X},this.dispose=function(){}}}const ir=new Kn,ey=new vt;function ty(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Pp(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,E,S,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,E,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=e.get(p),S=E.envMap,v=E.envMapRotation;S&&(m.envMap.value=S,ir.copy(v),ir.x*=-1,ir.y*=-1,ir.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ir.y*=-1,ir.z*=-1),m.envMapRotation.value.setFromMatrix4(ey.makeRotationFromEuler(ir)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function ny(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,S){const v=S.program;n.uniformBlockBinding(E,v)}function c(E,S){let v=r[E.id];v===void 0&&(g(E),v=u(E),r[E.id]=v,E.addEventListener("dispose",m));const T=S.program;n.updateUBOMapping(E,T);const w=e.render.frame;s[E.id]!==w&&(h(E),s[E.id]=w)}function u(E){const S=f();E.__bindingPointIndex=S;const v=i.createBuffer(),T=E.__size,w=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,T,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,v),v}function f(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const S=r[E.id],v=E.uniforms,T=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let w=0,A=v.length;w<A;w++){const C=Array.isArray(v[w])?v[w]:[v[w]];for(let x=0,b=C.length;x<b;x++){const P=C[x];if(d(P,w,x,T)===!0){const B=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let G=0;for(let W=0;W<O.length;W++){const V=O[W],Y=_(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,B+G,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,G),G+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(E,S,v,T){const w=E.value,A=S+"_"+v;if(T[A]===void 0)return typeof w=="number"||typeof w=="boolean"?T[A]=w:T[A]=w.clone(),!0;{const C=T[A];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return T[A]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(E){const S=E.uniforms;let v=0;const T=16;for(let A=0,C=S.length;A<C;A++){const x=Array.isArray(S[A])?S[A]:[S[A]];for(let b=0,P=x.length;b<P;b++){const B=x[b],O=Array.isArray(B.value)?B.value:[B.value];for(let G=0,W=O.length;G<W;G++){const V=O[G],Y=_(V),k=v%T,re=k%Y.boundary,ae=k+re;v+=re,ae!==0&&T-ae<Y.storage&&(v+=T-ae),B.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=Y.storage}}}const w=v%T;return w>0&&(v+=T-w),E.__size=v,E.__cache={},this}function _(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function m(E){const S=E.target;S.removeEventListener("dispose",m);const v=a.indexOf(S.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function p(){for(const E in r)i.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class iy{constructor(e={}){const{canvas:t=I0(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const E=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let T=!1;this._outputColorSpace=Pt;let w=0,A=0,C=null,x=-1,b=null;const P=new _t,B=new _t;let O=null;const G=new Ge(0);let W=0,V=t.width,Y=t.height,k=1,re=null,ae=null;const _e=new _t(0,0,V,Y),Ce=new _t(0,0,V,Y);let et=!1;const Be=new Pu;let X=!1,oe=!1;const ne=new vt,be=new N,we=new _t,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function We(){return C===null?k:1}let D=n;function st(y,I){return t.getContext(y,I)}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xu}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",j,!1),D===null){const I="webgl2";if(D=st(I,y),D===null)throw st(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let ye,Ke,Se,lt,de,Oe,Rt,Mt,R,M,F,$,K,q,Me,te,ge,ve,Q,ue,Re,xe,le,Ue;function L(){ye=new dS(D),ye.init(),xe=new ZE(D,ye),Ke=new aS(D,ye,e,xe),Se=new YE(D,ye),Ke.reversedDepthBuffer&&h&&Se.buffers.depth.setReversed(!0),lt=new _S(D),de=new UE,Oe=new $E(D,ye,Se,de,Ke,xe,lt),Rt=new lS(v),Mt=new hS(v),R=new Ev(D),le=new rS(D,R),M=new pS(D,R,lt,le),F=new vS(D,M,R,lt),Q=new gS(D,Ke,Oe),te=new oS(de),$=new IE(v,Rt,Mt,ye,Ke,le,te),K=new ty(v,de),q=new FE,Me=new VE(ye),ve=new iS(v,Rt,Mt,Se,F,d,l),ge=new XE(v,F,Ke),Ue=new ny(D,lt,Ke,Se),ue=new sS(D,ye,lt),Re=new mS(D,ye,lt),lt.programs=$.programs,v.capabilities=Ke,v.extensions=ye,v.properties=de,v.renderLists=q,v.shadowMap=ge,v.state=Se,v.info=lt}L();const ee=new QE(v,D);this.xr=ee,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const y=ye.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=ye.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(y){y!==void 0&&(k=y,this.setSize(V,Y,!1))},this.getSize=function(y){return y.set(V,Y)},this.setSize=function(y,I,z=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=y,Y=I,t.width=Math.floor(y*k),t.height=Math.floor(I*k),z===!0&&(t.style.width=y+"px",t.style.height=I+"px"),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(V*k,Y*k).floor()},this.setDrawingBufferSize=function(y,I,z){V=y,Y=I,k=z,t.width=Math.floor(y*z),t.height=Math.floor(I*z),this.setViewport(0,0,y,I)},this.getCurrentViewport=function(y){return y.copy(P)},this.getViewport=function(y){return y.copy(_e)},this.setViewport=function(y,I,z,H){y.isVector4?_e.set(y.x,y.y,y.z,y.w):_e.set(y,I,z,H),Se.viewport(P.copy(_e).multiplyScalar(k).round())},this.getScissor=function(y){return y.copy(Ce)},this.setScissor=function(y,I,z,H){y.isVector4?Ce.set(y.x,y.y,y.z,y.w):Ce.set(y,I,z,H),Se.scissor(B.copy(Ce).multiplyScalar(k).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(y){Se.setScissorTest(et=y)},this.setOpaqueSort=function(y){re=y},this.setTransparentSort=function(y){ae=y},this.getClearColor=function(y){return y.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(y=!0,I=!0,z=!0){let H=0;if(y){let U=!1;if(C!==null){const J=C.texture.format;U=J===bu||J===Tu||J===yu}if(U){const J=C.texture.type,ce=J===Zn||J===Er||J===sa||J===aa||J===Su||J===Eu,pe=ve.getClearColor(),fe=ve.getClearAlpha(),Ae=pe.r,Pe=pe.g,Ee=pe.b;ce?(g[0]=Ae,g[1]=Pe,g[2]=Ee,g[3]=fe,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Ae,_[1]=Pe,_[2]=Ee,_[3]=fe,D.clearBufferiv(D.COLOR,0,_))}else H|=D.COLOR_BUFFER_BIT}I&&(H|=D.DEPTH_BUFFER_BIT),z&&(H|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",j,!1),ve.dispose(),q.dispose(),Me.dispose(),de.dispose(),Rt.dispose(),Mt.dispose(),F.dispose(),le.dispose(),Ue.dispose(),$.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",On),ee.removeEventListener("sessionend",Iu),$i.stop()};function ie(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const y=lt.autoReset,I=ge.enabled,z=ge.autoUpdate,H=ge.needsUpdate,U=ge.type;L(),lt.autoReset=y,ge.enabled=I,ge.autoUpdate=z,ge.needsUpdate=H,ge.type=U}function j(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Z(y){const I=y.target;I.removeEventListener("dispose",Z),me(I)}function me(y){Le(y),de.remove(y)}function Le(y){const I=de.get(y).programs;I!==void 0&&(I.forEach(function(z){$.releaseProgram(z)}),y.isShaderMaterial&&$.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,z,H,U,J){I===null&&(I=De);const ce=U.isMesh&&U.matrixWorld.determinant()<0,pe=Vp(y,I,z,H,U);Se.setMaterial(H,ce);let fe=z.index,Ae=1;if(H.wireframe===!0){if(fe=M.getWireframeAttribute(z),fe===void 0)return;Ae=2}const Pe=z.drawRange,Ee=z.attributes.position;let ze=Pe.start*Ae,Je=(Pe.start+Pe.count)*Ae;J!==null&&(ze=Math.max(ze,J.start*Ae),Je=Math.min(Je,(J.start+J.count)*Ae)),fe!==null?(ze=Math.max(ze,0),Je=Math.min(Je,fe.count)):Ee!=null&&(ze=Math.max(ze,0),Je=Math.min(Je,Ee.count));const mt=Je-ze;if(mt<0||mt===1/0)return;le.setup(U,H,pe,z,fe);let ot,tt=ue;if(fe!==null&&(ot=R.get(fe),tt=Re,tt.setIndex(ot)),U.isMesh)H.wireframe===!0?(Se.setLineWidth(H.wireframeLinewidth*We()),tt.setMode(D.LINES)):tt.setMode(D.TRIANGLES);else if(U.isLine){let Te=H.linewidth;Te===void 0&&(Te=1),Se.setLineWidth(Te*We()),U.isLineSegments?tt.setMode(D.LINES):U.isLineLoop?tt.setMode(D.LINE_LOOP):tt.setMode(D.LINE_STRIP)}else U.isPoints?tt.setMode(D.POINTS):U.isSprite&&tt.setMode(D.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)as("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),tt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))tt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Te=U._multiDrawStarts,ut=U._multiDrawCounts,Ye=U._multiDrawCount,an=fe?R.get(fe).bytesPerElement:1,Rr=de.get(H).currentProgram.getUniforms();for(let on=0;on<Ye;on++)Rr.setValue(D,"_gl_DrawID",on),tt.render(Te[on]/an,ut[on])}else if(U.isInstancedMesh)tt.renderInstances(ze,mt,U.count);else if(z.isInstancedBufferGeometry){const Te=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ut=Math.min(z.instanceCount,Te);tt.renderInstances(ze,mt,ut)}else tt.render(ze,mt)};function at(y,I,z){y.transparent===!0&&y.side===ui&&y.forceSinglePass===!1?(y.side=rn,y.needsUpdate=!0,Ma(y,I,z),y.side=Wi,y.needsUpdate=!0,Ma(y,I,z),y.side=ui):Ma(y,I,z)}this.compile=function(y,I,z=null){z===null&&(z=y),p=Me.get(z),p.init(I),S.push(p),z.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),y!==z&&y.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const H=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const J=U.material;if(J)if(Array.isArray(J))for(let ce=0;ce<J.length;ce++){const pe=J[ce];at(pe,z,U),H.add(pe)}else at(J,z,U),H.add(J)}),p=S.pop(),H},this.compileAsync=function(y,I,z=null){const H=this.compile(y,I,z);return new Promise(U=>{function J(){if(H.forEach(function(ce){de.get(ce).currentProgram.isReady()&&H.delete(ce)}),H.size===0){U(y);return}setTimeout(J,10)}ye.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let je=null;function Jn(y){je&&je(y)}function On(){$i.stop()}function Iu(){$i.start()}const $i=new Fp;$i.setAnimationLoop(Jn),typeof self<"u"&&$i.setContext(self),this.setAnimationLoop=function(y){je=y,ee.setAnimationLoop(y),y===null?$i.stop():$i.start()},ee.addEventListener("sessionstart",On),ee.addEventListener("sessionend",Iu),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(I),I=ee.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,I,C),p=Me.get(y,S.length),p.init(I),S.push(p),ne.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Be.setFromProjectionMatrix(ne,Xn,I.reversedDepth),oe=this.localClippingEnabled,X=te.init(this.clippingPlanes,oe),m=q.get(y,E.length),m.init(),E.push(m),ee.enabled===!0&&ee.isPresenting===!0){const J=v.xr.getDepthSensingMesh();J!==null&&Lo(J,I,-1/0,v.sortObjects)}Lo(y,I,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(re,ae),xt=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,xt&&ve.addToRenderList(m,y),this.info.render.frame++,X===!0&&te.beginShadows();const z=p.state.shadowsArray;ge.render(z,y,I),X===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,U=m.transmissive;if(p.setupLights(),I.isArrayCamera){const J=I.cameras;if(U.length>0)for(let ce=0,pe=J.length;ce<pe;ce++){const fe=J[ce];Nu(H,U,y,fe)}xt&&ve.render(y);for(let ce=0,pe=J.length;ce<pe;ce++){const fe=J[ce];Uu(m,y,fe,fe.viewport)}}else U.length>0&&Nu(H,U,y,I),xt&&ve.render(y),Uu(m,y,I);C!==null&&A===0&&(Oe.updateMultisampleRenderTarget(C),Oe.updateRenderTargetMipmap(C)),y.isScene===!0&&y.onAfterRender(v,y,I),le.resetDefaultState(),x=-1,b=null,S.pop(),S.length>0?(p=S[S.length-1],X===!0&&te.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Lo(y,I,z,H){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Be.intersectsSprite(y)){H&&we.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ne);const ce=F.update(y),pe=y.material;pe.visible&&m.push(y,ce,pe,z,we.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Be.intersectsObject(y))){const ce=F.update(y),pe=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),we.copy(y.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),we.copy(ce.boundingSphere.center)),we.applyMatrix4(y.matrixWorld).applyMatrix4(ne)),Array.isArray(pe)){const fe=ce.groups;for(let Ae=0,Pe=fe.length;Ae<Pe;Ae++){const Ee=fe[Ae],ze=pe[Ee.materialIndex];ze&&ze.visible&&m.push(y,ce,ze,z,we.z,Ee)}}else pe.visible&&m.push(y,ce,pe,z,we.z,null)}}const J=y.children;for(let ce=0,pe=J.length;ce<pe;ce++)Lo(J[ce],I,z,H)}function Uu(y,I,z,H){const U=y.opaque,J=y.transmissive,ce=y.transparent;p.setupLightsView(z),X===!0&&te.setGlobalState(v.clippingPlanes,z),H&&Se.viewport(P.copy(H)),U.length>0&&xa(U,I,z),J.length>0&&xa(J,I,z),ce.length>0&&xa(ce,I,z),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Nu(y,I,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new yr(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float")?_a:Zn,minFilter:ur,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const J=p.state.transmissionRenderTarget[H.id],ce=H.viewport||P;J.setSize(ce.z*v.transmissionResolutionScale,ce.w*v.transmissionResolutionScale);const pe=v.getRenderTarget(),fe=v.getActiveCubeFace(),Ae=v.getActiveMipmapLevel();v.setRenderTarget(J),v.getClearColor(G),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),v.clear(),xt&&ve.render(z);const Pe=v.toneMapping;v.toneMapping=di;const Ee=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),X===!0&&te.setGlobalState(v.clippingPlanes,H),xa(y,z,H),Oe.updateMultisampleRenderTarget(J),Oe.updateRenderTargetMipmap(J),ye.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Je=0,mt=I.length;Je<mt;Je++){const ot=I[Je],tt=ot.object,Te=ot.geometry,ut=ot.material,Ye=ot.group;if(ut.side===ui&&tt.layers.test(H.layers)){const an=ut.side;ut.side=rn,ut.needsUpdate=!0,Fu(tt,z,H,Te,ut,Ye),ut.side=an,ut.needsUpdate=!0,ze=!0}}ze===!0&&(Oe.updateMultisampleRenderTarget(J),Oe.updateRenderTargetMipmap(J))}v.setRenderTarget(pe,fe,Ae),v.setClearColor(G,W),Ee!==void 0&&(H.viewport=Ee),v.toneMapping=Pe}function xa(y,I,z){const H=I.isScene===!0?I.overrideMaterial:null;for(let U=0,J=y.length;U<J;U++){const ce=y[U],pe=ce.object,fe=ce.geometry,Ae=ce.group;let Pe=ce.material;Pe.allowOverride===!0&&H!==null&&(Pe=H),pe.layers.test(z.layers)&&Fu(pe,I,z,fe,Pe,Ae)}}function Fu(y,I,z,H,U,J){y.onBeforeRender(v,I,z,H,U,J),y.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(v,I,z,H,y,J),U.transparent===!0&&U.side===ui&&U.forceSinglePass===!1?(U.side=rn,U.needsUpdate=!0,v.renderBufferDirect(z,I,H,U,y,J),U.side=Wi,U.needsUpdate=!0,v.renderBufferDirect(z,I,H,U,y,J),U.side=ui):v.renderBufferDirect(z,I,H,U,y,J),y.onAfterRender(v,I,z,H,U,J)}function Ma(y,I,z){I.isScene!==!0&&(I=De);const H=de.get(y),U=p.state.lights,J=p.state.shadowsArray,ce=U.state.version,pe=$.getParameters(y,U.state,J,I,z),fe=$.getProgramCacheKey(pe);let Ae=H.programs;H.environment=y.isMeshStandardMaterial?I.environment:null,H.fog=I.fog,H.envMap=(y.isMeshStandardMaterial?Mt:Rt).get(y.envMap||H.environment),H.envMapRotation=H.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,Ae===void 0&&(y.addEventListener("dispose",Z),Ae=new Map,H.programs=Ae);let Pe=Ae.get(fe);if(Pe!==void 0){if(H.currentProgram===Pe&&H.lightsStateVersion===ce)return Bu(y,pe),Pe}else pe.uniforms=$.getUniforms(y),y.onBeforeCompile(pe,v),Pe=$.acquireProgram(pe,fe),Ae.set(fe,Pe),H.uniforms=pe.uniforms;const Ee=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ee.clippingPlanes=te.uniform),Bu(y,pe),H.needsLights=Wp(y),H.lightsStateVersion=ce,H.needsLights&&(Ee.ambientLightColor.value=U.state.ambient,Ee.lightProbe.value=U.state.probe,Ee.directionalLights.value=U.state.directional,Ee.directionalLightShadows.value=U.state.directionalShadow,Ee.spotLights.value=U.state.spot,Ee.spotLightShadows.value=U.state.spotShadow,Ee.rectAreaLights.value=U.state.rectArea,Ee.ltc_1.value=U.state.rectAreaLTC1,Ee.ltc_2.value=U.state.rectAreaLTC2,Ee.pointLights.value=U.state.point,Ee.pointLightShadows.value=U.state.pointShadow,Ee.hemisphereLights.value=U.state.hemi,Ee.directionalShadowMap.value=U.state.directionalShadowMap,Ee.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ee.spotShadowMap.value=U.state.spotShadowMap,Ee.spotLightMatrix.value=U.state.spotLightMatrix,Ee.spotLightMap.value=U.state.spotLightMap,Ee.pointShadowMap.value=U.state.pointShadowMap,Ee.pointShadowMatrix.value=U.state.pointShadowMatrix),H.currentProgram=Pe,H.uniformsList=null,Pe}function Ou(y){if(y.uniformsList===null){const I=y.currentProgram.getUniforms();y.uniformsList=to.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function Bu(y,I){const z=de.get(y);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.batchingColor=I.batchingColor,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function Vp(y,I,z,H,U){I.isScene!==!0&&(I=De),Oe.resetTextureUnits();const J=I.fog,ce=H.isMeshStandardMaterial?I.environment:null,pe=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:xs,fe=(H.isMeshStandardMaterial?Mt:Rt).get(H.envMap||ce),Ae=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Pe=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ee=!!z.morphAttributes.position,ze=!!z.morphAttributes.normal,Je=!!z.morphAttributes.color;let mt=di;H.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(mt=v.toneMapping);const ot=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,tt=ot!==void 0?ot.length:0,Te=de.get(H),ut=p.state.lights;if(X===!0&&(oe===!0||y!==b)){const Ht=y===b&&H.id===x;te.setState(H,y,Ht)}let Ye=!1;H.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==ut.state.version||Te.outputColorSpace!==pe||U.isBatchedMesh&&Te.batching===!1||!U.isBatchedMesh&&Te.batching===!0||U.isBatchedMesh&&Te.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Te.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Te.instancing===!1||!U.isInstancedMesh&&Te.instancing===!0||U.isSkinnedMesh&&Te.skinning===!1||!U.isSkinnedMesh&&Te.skinning===!0||U.isInstancedMesh&&Te.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Te.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Te.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Te.instancingMorph===!1&&U.morphTexture!==null||Te.envMap!==fe||H.fog===!0&&Te.fog!==J||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==te.numPlanes||Te.numIntersection!==te.numIntersection)||Te.vertexAlphas!==Ae||Te.vertexTangents!==Pe||Te.morphTargets!==Ee||Te.morphNormals!==ze||Te.morphColors!==Je||Te.toneMapping!==mt||Te.morphTargetsCount!==tt)&&(Ye=!0):(Ye=!0,Te.__version=H.version);let an=Te.currentProgram;Ye===!0&&(an=Ma(H,I,U));let Rr=!1,on=!1,Rs=!1;const ft=an.getUniforms(),vn=Te.uniforms;if(Se.useProgram(an.program)&&(Rr=!0,on=!0,Rs=!0),H.id!==x&&(x=H.id,on=!0),Rr||b!==y){Se.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ft.setValue(D,"projectionMatrix",y.projectionMatrix),ft.setValue(D,"viewMatrix",y.matrixWorldInverse);const jt=ft.map.cameraPosition;jt!==void 0&&jt.setValue(D,be.setFromMatrixPosition(y.matrixWorld)),Ke.logarithmicDepthBuffer&&ft.setValue(D,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ft.setValue(D,"isOrthographic",y.isOrthographicCamera===!0),b!==y&&(b=y,on=!0,Rs=!0)}if(U.isSkinnedMesh){ft.setOptional(D,U,"bindMatrix"),ft.setOptional(D,U,"bindMatrixInverse");const Ht=U.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),ft.setValue(D,"boneTexture",Ht.boneTexture,Oe))}U.isBatchedMesh&&(ft.setOptional(D,U,"batchingTexture"),ft.setValue(D,"batchingTexture",U._matricesTexture,Oe),ft.setOptional(D,U,"batchingIdTexture"),ft.setValue(D,"batchingIdTexture",U._indirectTexture,Oe),ft.setOptional(D,U,"batchingColorTexture"),U._colorsTexture!==null&&ft.setValue(D,"batchingColorTexture",U._colorsTexture,Oe));const xn=z.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&Q.update(U,z,an),(on||Te.receiveShadow!==U.receiveShadow)&&(Te.receiveShadow=U.receiveShadow,ft.setValue(D,"receiveShadow",U.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(vn.envMap.value=fe,vn.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&I.environment!==null&&(vn.envMapIntensity.value=I.environmentIntensity),on&&(ft.setValue(D,"toneMappingExposure",v.toneMappingExposure),Te.needsLights&&Gp(vn,Rs),J&&H.fog===!0&&K.refreshFogUniforms(vn,J),K.refreshMaterialUniforms(vn,H,k,Y,p.state.transmissionRenderTarget[y.id]),to.upload(D,Ou(Te),vn,Oe)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(to.upload(D,Ou(Te),vn,Oe),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ft.setValue(D,"center",U.center),ft.setValue(D,"modelViewMatrix",U.modelViewMatrix),ft.setValue(D,"normalMatrix",U.normalMatrix),ft.setValue(D,"modelMatrix",U.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ht=H.uniformsGroups;for(let jt=0,Io=Ht.length;jt<Io;jt++){const Zi=Ht[jt];Ue.update(Zi,an),Ue.bind(Zi,an)}}return an}function Gp(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function Wp(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(y,I,z){const H=de.get(y);H.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),de.get(y.texture).__webglTexture=I,de.get(y.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:z,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,I){const z=de.get(y);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0};const Xp=D.createFramebuffer();this.setRenderTarget=function(y,I=0,z=0){C=y,w=I,A=z;let H=!0,U=null,J=!1,ce=!1;if(y){const fe=de.get(y);if(fe.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(D.FRAMEBUFFER,null),H=!1;else if(fe.__webglFramebuffer===void 0)Oe.setupRenderTarget(y);else if(fe.__hasExternalTextures)Oe.rebindTextures(y,de.get(y.texture).__webglTexture,de.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ee=y.depthTexture;if(fe.__boundDepthTexture!==Ee){if(Ee!==null&&de.has(Ee)&&(y.width!==Ee.image.width||y.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(y)}}const Ae=y.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ce=!0);const Pe=de.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Pe[I])?U=Pe[I][z]:U=Pe[I],J=!0):y.samples>0&&Oe.useMultisampledRTT(y)===!1?U=de.get(y).__webglMultisampledFramebuffer:Array.isArray(Pe)?U=Pe[z]:U=Pe,P.copy(y.viewport),B.copy(y.scissor),O=y.scissorTest}else P.copy(_e).multiplyScalar(k).floor(),B.copy(Ce).multiplyScalar(k).floor(),O=et;if(z!==0&&(U=Xp),Se.bindFramebuffer(D.FRAMEBUFFER,U)&&H&&Se.drawBuffers(y,U),Se.viewport(P),Se.scissor(B),Se.setScissorTest(O),J){const fe=de.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+I,fe.__webglTexture,z)}else if(ce){const fe=I;for(let Ae=0;Ae<y.textures.length;Ae++){const Pe=de.get(y.textures[Ae]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ae,Pe.__webglTexture,z,fe)}}else if(y!==null&&z!==0){const fe=de.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,fe.__webglTexture,z)}x=-1},this.readRenderTargetPixels=function(y,I,z,H,U,J,ce,pe=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=de.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ce!==void 0&&(fe=fe[ce]),fe){Se.bindFramebuffer(D.FRAMEBUFFER,fe);try{const Ae=y.textures[pe],Pe=Ae.format,Ee=Ae.type;if(!Ke.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(Ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-H&&z>=0&&z<=y.height-U&&(y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+pe),D.readPixels(I,z,H,U,xe.convert(Pe),xe.convert(Ee),J))}finally{const Ae=C!==null?de.get(C).__webglFramebuffer:null;Se.bindFramebuffer(D.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(y,I,z,H,U,J,ce,pe=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=de.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ce!==void 0&&(fe=fe[ce]),fe)if(I>=0&&I<=y.width-H&&z>=0&&z<=y.height-U){Se.bindFramebuffer(D.FRAMEBUFFER,fe);const Ae=y.textures[pe],Pe=Ae.format,Ee=Ae.type;if(!Ke.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ze),D.bufferData(D.PIXEL_PACK_BUFFER,J.byteLength,D.STREAM_READ),y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+pe),D.readPixels(I,z,H,U,xe.convert(Pe),xe.convert(Ee),0);const Je=C!==null?de.get(C).__webglFramebuffer:null;Se.bindFramebuffer(D.FRAMEBUFFER,Je);const mt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await U0(D,mt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ze),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,J),D.deleteBuffer(ze),D.deleteSync(mt),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,I=null,z=0){const H=Math.pow(2,-z),U=Math.floor(y.image.width*H),J=Math.floor(y.image.height*H),ce=I!==null?I.x:0,pe=I!==null?I.y:0;Oe.setTexture2D(y,0),D.copyTexSubImage2D(D.TEXTURE_2D,z,0,0,ce,pe,U,J),Se.unbindTexture()};const qp=D.createFramebuffer(),Yp=D.createFramebuffer();this.copyTextureToTexture=function(y,I,z=null,H=null,U=0,J=null){J===null&&(U!==0?(as("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=U,U=0):J=0);let ce,pe,fe,Ae,Pe,Ee,ze,Je,mt;const ot=y.isCompressedTexture?y.mipmaps[J]:y.image;if(z!==null)ce=z.max.x-z.min.x,pe=z.max.y-z.min.y,fe=z.isBox3?z.max.z-z.min.z:1,Ae=z.min.x,Pe=z.min.y,Ee=z.isBox3?z.min.z:0;else{const xn=Math.pow(2,-U);ce=Math.floor(ot.width*xn),pe=Math.floor(ot.height*xn),y.isDataArrayTexture?fe=ot.depth:y.isData3DTexture?fe=Math.floor(ot.depth*xn):fe=1,Ae=0,Pe=0,Ee=0}H!==null?(ze=H.x,Je=H.y,mt=H.z):(ze=0,Je=0,mt=0);const tt=xe.convert(I.format),Te=xe.convert(I.type);let ut;I.isData3DTexture?(Oe.setTexture3D(I,0),ut=D.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Oe.setTexture2DArray(I,0),ut=D.TEXTURE_2D_ARRAY):(Oe.setTexture2D(I,0),ut=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,I.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,I.unpackAlignment);const Ye=D.getParameter(D.UNPACK_ROW_LENGTH),an=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Rr=D.getParameter(D.UNPACK_SKIP_PIXELS),on=D.getParameter(D.UNPACK_SKIP_ROWS),Rs=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ot.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ot.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ae),D.pixelStorei(D.UNPACK_SKIP_ROWS,Pe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ee);const ft=y.isDataArrayTexture||y.isData3DTexture,vn=I.isDataArrayTexture||I.isData3DTexture;if(y.isDepthTexture){const xn=de.get(y),Ht=de.get(I),jt=de.get(xn.__renderTarget),Io=de.get(Ht.__renderTarget);Se.bindFramebuffer(D.READ_FRAMEBUFFER,jt.__webglFramebuffer),Se.bindFramebuffer(D.DRAW_FRAMEBUFFER,Io.__webglFramebuffer);for(let Zi=0;Zi<fe;Zi++)ft&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,de.get(y).__webglTexture,U,Ee+Zi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,de.get(I).__webglTexture,J,mt+Zi)),D.blitFramebuffer(Ae,Pe,ce,pe,ze,Je,ce,pe,D.DEPTH_BUFFER_BIT,D.NEAREST);Se.bindFramebuffer(D.READ_FRAMEBUFFER,null),Se.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(U!==0||y.isRenderTargetTexture||de.has(y)){const xn=de.get(y),Ht=de.get(I);Se.bindFramebuffer(D.READ_FRAMEBUFFER,qp),Se.bindFramebuffer(D.DRAW_FRAMEBUFFER,Yp);for(let jt=0;jt<fe;jt++)ft?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,xn.__webglTexture,U,Ee+jt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,xn.__webglTexture,U),vn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ht.__webglTexture,J,mt+jt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ht.__webglTexture,J),U!==0?D.blitFramebuffer(Ae,Pe,ce,pe,ze,Je,ce,pe,D.COLOR_BUFFER_BIT,D.NEAREST):vn?D.copyTexSubImage3D(ut,J,ze,Je,mt+jt,Ae,Pe,ce,pe):D.copyTexSubImage2D(ut,J,ze,Je,Ae,Pe,ce,pe);Se.bindFramebuffer(D.READ_FRAMEBUFFER,null),Se.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else vn?y.isDataTexture||y.isData3DTexture?D.texSubImage3D(ut,J,ze,Je,mt,ce,pe,fe,tt,Te,ot.data):I.isCompressedArrayTexture?D.compressedTexSubImage3D(ut,J,ze,Je,mt,ce,pe,fe,tt,ot.data):D.texSubImage3D(ut,J,ze,Je,mt,ce,pe,fe,tt,Te,ot):y.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,J,ze,Je,ce,pe,tt,Te,ot.data):y.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,J,ze,Je,ot.width,ot.height,tt,ot.data):D.texSubImage2D(D.TEXTURE_2D,J,ze,Je,ce,pe,tt,Te,ot);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ye),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,an),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Rr),D.pixelStorei(D.UNPACK_SKIP_ROWS,on),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Rs),J===0&&I.generateMipmaps&&D.generateMipmap(ut),Se.unbindTexture()},this.copyTextureToTexture3D=function(y,I,z=null,H=null,U=0){return as('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,I,z,H,U)},this.initRenderTarget=function(y){de.get(y).__webglFramebuffer===void 0&&Oe.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Oe.setTextureCube(y,0):y.isData3DTexture?Oe.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Oe.setTexture2DArray(y,0):Oe.setTexture2D(y,0),Se.unbindTexture()},this.resetState=function(){w=0,A=0,C=null,Se.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}function ry(){try{const i=navigator.language||"",e=Intl.DateTimeFormat().resolvedOptions().timeZone||"";return/^zh-CN/i.test(i)||e.includes("Shanghai")||e.includes("Beijing")?"https://gcore.jsdelivr.net/gh/douban-zoo/douban-zoo.github.io@gh-pages/":"/"}catch{return"/"}}const nt=i=>ry()+i.replace(/^\/+/,""),$e={numPages:6,pageWidth:2.5,pageHeight:3,pageDepth:.02,dragSensitivity:.15,snapDuration:.8},sy=["cover","meidi","jongjong","pupu","tianchengzi","meidi"],ay=["",`绝育帅气男狗，情绪稳定，心态良好，比起同类更喜欢人类，比起人类更喜欢食物类
在路上听到有人说自己可爱会迅速凑过去坐下等摸摸
吃过的东西包括：士力架，好丽友，玉米芯，玉米肠，鸡枞菌，生腊肉（两块），六婆辣椒面，护手霜（？），该名单持续增长中
喜欢有靠背的角落，喜欢安全感，讨厌水，讨厌下雨，讨厌柴犬（？）
偶尔会被柴犬无差别辱骂，但最好的朋友是一只小黑柴`,`角色：囧囧
阵营：混乱可爱（Chaotic Adorable）
职业：中华田园猫 Lv.6
属性：魅力 CHA：+2（不怕陌生人，除非个子太高）
敏捷 DEX：+3（迅速一溜烟躲进床底）
力量 STR：+1（梆梆响的猫猫拳）
感知 WIS：-1（读不懂空气，情绪感知弱）
智力 INT：+2（能掌握新的智力玩具和按钮）
体质 CON：+1（皮实小土猫）
技能：贴贴：熄灯后必跳上妈妈胸口咕噜噜，流口水概率35%。
守望：看见零食或游戏即将开始时，直接进入呼噜待机状态。
妈妈雷达：妈妈离开60秒后自动触发寻人模式。
玩偶模拟：高处跳下时，落地瞬间自动发出“哼唧”声。
智力判定：识别指令“亲亲”，但有50%概率假装执行以便逃脱。`,`几乎全勤打工的ESFJ产品狗
喜欢和每个与她对视的人类玩耍，对马杀鸡手法优异的人类格外青睐
喜欢吃公司（自由采摘的）植物和（下午茶专供的）水果
喜欢玩巡回和拔河，玩游戏全力以赴并且喜欢自己给自己打气
对自己的食物有超强的管理，每天晚上十点必须吃晚饭，吃完晚饭以后必须吃酸奶，吃完酸奶以后必须擦脸并吃一个奖励小零食`,`ESFJ小猫（仅限在家里）
  每天定时起床巡屋、定时索要除了主粮以外的冻干和罐头以及定时求摸头（不可低于10分钟）
  如果没有在准时看到食物，一般会登上置物架自取，从而展现出了惊人的咬合力，可空口叼起大概1kg的肉干。
不喜欢的乐队：Imagine Dragons（听到会展示出飞机耳，假装自己听不见，和听到大雨声表现一致）
上过两天班，因为不喜欢出门而成为高等游“猫”。`,""];function oy(i){return sy[i]||"unknown"}const Wt={media:[{},{audio:nt("audios/meidi.mp3"),video:nt("videos/meidi-eat.webm"),photo:17},{audio:nt("audios/jojo.m4a"),video:nt("videos/jojo-play.webm"),photo:15},{audio:nt("audios/pupu.m4a"),video:nt("videos/pupu-daze.webm"),photo:17},{audio:nt("audios/tianchengzi.m4a"),video:nt("videos/tianchengzi-eat.webm"),photo:10},{}],icons:{video:nt("icons/video.png"),audio:nt("icons/audio.png"),photo:nt("icons/folder.png")},normalMap:{cover:nt("imgs/textures/cover-normal.png"),paper:nt("imgs/textures/paper-normal.png")},pages:[nt("imgs/bg/cover.png"),nt("imgs/bg/meidi.png"),nt("imgs/bg/jongjong.png"),nt("imgs/bg/pupu.png"),nt("imgs/bg/tianchengzi.png"),nt("imgs/bg/meidi.png")],decorations:[[],[{texture:nt("imgs/dec/meidi1.png"),parallaxFactor:.2,offset:{x:2,y:-.1,z:.016},scale:1.25},{texture:nt("imgs/dec/meidi2.png"),parallaxFactor:.1,offset:{x:.85,y:-.05,z:.015},scale:1.3}],[{texture:nt("imgs/dec/jojo1.png"),parallaxFactor:.35,offset:{x:2.9,y:-.025,z:.014},scale:1.3},{texture:nt("imgs/dec/jojo2.png"),parallaxFactor:.2,offset:{x:1.5,y:-.15,z:.016},scale:1.2}],[{texture:nt("imgs/dec/pupu1.png"),parallaxFactor:.28,offset:{x:2.2,y:-.1,z:.014},scale:1.2},{texture:nt("imgs/dec/pupu2.png"),parallaxFactor:.23,offset:{x:1.5,y:.2,z:.016},scale:.92}],[{texture:nt("imgs/dec/tianchengzi1.png"),parallaxFactor:.3,offset:{x:2.8,y:-.13,z:.016},scale:1.21},{texture:nt("imgs/dec/tianchengzi2.png"),parallaxFactor:.2,offset:{x:1.4,y:-.5,z:.014},scale:.9}],[]]},Wa={bg:["#52AC6A","#F4CEE8","#88C1EF","#1CB8C7","#D86D1A","#F4CEE8"]};function ly(i,e=1){const t=new Audio(i);t.volume=e,t.play().catch(n=>{console.error("Error playing audio:",n)})}class cy{overlayElement;videoElement;closeButton;onShow;onClose;constructor(e,t){this.onShow=e,this.onClose=t,this.overlayElement=document.getElementById("video-overlay"),this.videoElement=this.overlayElement.querySelector("video"),this.closeButton=this.overlayElement.querySelector(".close-button"),this.close=this.close.bind(this),this.closeButton.addEventListener("click",this.close),this.overlayElement.addEventListener("click",n=>{n.target===this.overlayElement&&this.close()})}show(e){this.videoElement.src=e,this.overlayElement.classList.remove("opacity-0","pointer-events-none"),this.overlayElement.classList.add("opacity-100","pointer-events-auto"),this.videoElement.play(),this.onShow()}close(){this.videoElement.pause(),this.overlayElement.classList.remove("opacity-100","pointer-events-auto"),this.overlayElement.classList.add("opacity-0","pointer-events-none"),this.onClose()}}const Jr=o_(0);class uy{scene;camera;container;renderer;videoOverlayManager;group;videoIcon;audioIcon;photoIcon;raycaster=new Mv;mouse=new qe;isMobile;isLayoutVertical=!1;pageId="";photoContainer;photos=[];boundHandleClick;maxZIndex=11;constructor(e,t,n,r,s){this.scene=e,this.camera=t,this.container=n,this.renderer=r,this.videoOverlayManager=s,this.isMobile=this.container.clientWidth<448,this.group=new fr,this.scene.add(this.group),Jr.subscribe(a=>{this.update(a)}),this.photoContainer=document.getElementById("photo-overlay-container"),this.photoContainer||console.error("The #photo-overlay-container element was not found in the DOM."),this.boundHandleClick=this.handleClick.bind(this),r.domElement.addEventListener("click",this.boundHandleClick,!1)}init(e){const n=new ki(.3,.3);this.isLayoutVertical=!(this.container.clientWidth>this.container.clientHeight*1.2);const r=e.load(Wt.icons.video);r.colorSpace=Pt,this.videoIcon=new $t(n,new qs({map:r,transparent:!0,opacity:0})),this.group.add(this.videoIcon);const s=e.load(Wt.icons.audio);s.colorSpace=Pt,this.audioIcon=new $t(n.clone(),new qs({map:s,transparent:!0,opacity:0})),this.group.add(this.audioIcon);const a=e.load(Wt.icons.photo);a.colorSpace=Pt,this.photoIcon=new $t(n.clone(),new qs({map:a,transparent:!0,opacity:0})),this.group.add(this.photoIcon),this.updatePosition()}update(e){!this.videoIcon||!this.audioIcon||!this.photoIcon||(this.clearAllPhotos(),this.pageId=oy(e),Jt.to(this.videoIcon.material,{duration:.05,delay:.05,opacity:Wt.media[e]?.video?1:0,ease:"power2.inOut"}),Jt.to(this.audioIcon.material,{duration:.05,delay:.05,opacity:Wt.media[e]?.audio?1:0,ease:"power2.inOut"}),Jt.to(this.photoIcon.material,{duration:.05,delay:.05,opacity:Wt.media[e]?.photo?1:0,ease:"power2.inOut"}))}onResize(){this.isMobile=this.container.clientWidth<448,this.updatePosition()}dispose(){this.renderer.domElement.removeEventListener("click",this.boundHandleClick,!1),this.clearAllPhotos(),this.videoIcon?.geometry.dispose(),this.videoIcon?.material instanceof zi&&this.videoIcon.material.dispose(),this.audioIcon?.geometry.dispose(),this.audioIcon?.material instanceof zi&&this.audioIcon.material.dispose(),this.photoIcon?.geometry.dispose(),this.photoIcon?.material instanceof zi&&this.photoIcon.material.dispose(),this.scene.remove(this.group)}clearAllPhotos(){this.photos.forEach(e=>e.remove()),this.photos=[]}showPhoto(e){const t=new Image;t.onload=()=>{const n=t.width/t.height,r=document.createElement("div");r.className="draggable-photo";const s=this.container.clientWidth,a=s<448?.3:s<1024?.2:.1,o=s*a;r.style.width=`${o}px`,r.style.height=`${o/n}px`,r.style.backgroundImage=`url(${e})`,r.style.rotate=`${(Math.random()-.5)*60}deg`;const l=this.container.clientWidth-o,c=this.container.clientHeight-o/n;r.style.left=`${Math.random()*l}px`,r.style.top=`${Math.random()*c}px`,r.style.zIndex=(this.maxZIndex++).toString(),this.photoContainer.appendChild(r),this.photos.push(r),this.makeElementDraggable(r)},t.src=e}makeElementDraggable(e){let t,n,r=!1;e.style.transition="transform 0.3s ease";const s=l=>{r=!0,e.style.zIndex=(this.maxZIndex++).toString(),e.style.transform="scale(1.25)";const c="touches"in l?l.touches[0].clientX:l.clientX,u="touches"in l?l.touches[0].clientY:l.clientY;t=c-e.offsetLeft,n=u-e.offsetTop,document.addEventListener("mousemove",a),document.addEventListener("mouseup",o,{once:!0}),document.addEventListener("touchmove",a,{passive:!1}),document.addEventListener("touchend",o,{once:!0})},a=l=>{if(!r)return;"touches"in l&&l.preventDefault();const c="touches"in l?l.touches[0].clientX:l.clientX,u="touches"in l?l.touches[0].clientY:l.clientY;let f=c-t,h=u-n;const d=this.photoContainer.getBoundingClientRect();f=Math.max(-e.clientWidth,Math.min(f,d.width)),h=Math.max(-e.clientHeight,Math.min(h,d.height)),e.style.left=`${f}px`,e.style.top=`${h}px`},o=()=>{r=!1,e.style.transform="scale(1)",document.removeEventListener("mousemove",a),document.removeEventListener("touchmove",a)};e.addEventListener("mousedown",s),e.addEventListener("touchstart",s)}updatePosition(){if(!this.videoIcon||!this.audioIcon||!this.photoIcon)return;const e=.25,t=this.container.clientWidth>this.container.clientHeight*1.2;if(t&&!this.isLayoutVertical)this.isLayoutVertical=!0,this.group.position.set(-2.5-e,.35,0),this.group.scale.set(1,1,1),this.videoIcon.position.set(0,.8,0),this.audioIcon.position.set(0,.4,0),this.photoIcon.position.set(0,0,0);else if(!t&&this.isLayoutVertical){this.isLayoutVertical=!1;const n=-3/2-e;this.group.position.set(0,n,0),this.group.scale.set(this.isMobile?1.2:1,this.isMobile?1.2:1,1),this.videoIcon.position.set(-.4,0,0),this.audioIcon.position.set(0,0,0),this.photoIcon.position.set(.4,0,0)}}handleClick(e){if(!this.videoIcon||!this.audioIcon||!this.photoIcon)return;this.mouse.x=e.clientX/this.container.clientWidth*2-1,this.mouse.y=-(e.clientY/this.container.clientHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const t=[];if(this.videoIcon.material.opacity>0&&t.push(this.videoIcon),this.audioIcon.material.opacity>0&&t.push(this.audioIcon),this.photoIcon.material.opacity>0&&t.push(this.photoIcon),t.length===0)return;const n=this.raycaster.intersectObjects(t);if(n.length>0){const r=n[0].object;if(r===this.videoIcon)this.videoOverlayManager.show(Wt.media[qa(Jr)]?.video||"");else if(r===this.audioIcon)ly(Wt.media[qa(Jr)]?.audio||"");else if(r===this.photoIcon){const s=Wt.media[qa(Jr)]?.photo||0;if(s>0){const a=Math.floor(Math.random()*s)+1,o=`/imgs/${this.pageId}/${a}.png`;this.showPhoto(o)}}}}}function Xa(){try{return!1}catch{return!1}}class fy{container;scene;camera;renderer;book=new fr;pages=[];decorationPairs=[];ambientLight=new vv(16777215,1.8);directionalLights=[];videoOverlayManager;iconManager;perSegment=1/$e.numPages;lastBgUpdate=0;isMobile;maxPixelRatio=/iPhone|iPad|iPod/i.test(navigator.userAgent)?3:2;normalCameraZ=6;closedCameraZ=4;initialCameraOffset=Xa()?new N(0,0,0):new N(5,-5,-4);initialCameraUp=Xa()?new N(0,1,0):new N(-2,3,3);openingAnimationStatus=Xa()?"played":"none";constructor(e){this.container=e,this.isMobile=e.clientWidth<448,this.scene=new sv,this.scene.add(this.book),this.camera=new yn(45,e.clientWidth/e.clientHeight,.1,1e3),this.renderer=new iy({antialias:!this.isMobile,alpha:!0,logarithmicDepthBuffer:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,this.maxPixelRatio)),this.videoOverlayManager=new cy(()=>{},()=>{}),this.iconManager=new uy(this.scene,this.camera,this.container,this.renderer,this.videoOverlayManager),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.toneMapping=di,this.renderer.localClippingEnabled=!0,this.renderer.setClearColor(Wa.bg[0]),this.container.appendChild(this.renderer.domElement),this.setUpLight(),this.handleResize(),window.addEventListener("resize",()=>this.handleResize()),this.camera.position.add(this.initialCameraOffset),this.camera.up.copy(this.initialCameraUp),this.camera.lookAt(0,0,0)}setUpLight(){this.scene.add(this.ambientLight);const e=new gv(16777215,.6);e.position.set(0,0,8),this.scene.add(e),this.directionalLights.push(e)}setupLightControls(){Xa()&&Cg(()=>import("./lil-gui.esm-DFUWXXp-.js"),[]).then(e=>{const n=new e.GUI({autoPlace:!0}).addFolder("Lighting"),r=n.addFolder("Ambient Light");r.addColor({color:"#ffffff"},"color").onChange(a=>{this.ambientLight.color.set(a)}),r.add(this.ambientLight,"intensity",0,4,.01);const s=n.addFolder("Directional Lights");this.directionalLights.forEach((a,o)=>{const l=s.addFolder(`Light ${o+1}`);l.addColor({color:"#ffffff"},"color").onChange(c=>{a.color.set(c)}),l.add(a,"intensity",0,4,.01),l.add(a.position,"x",-10,50,.1),l.add(a.position,"y",-10,50,.1),l.add(a.position,"z",-10,50,.1)})})}async init(){const e=new pv,t=Wt.pages.map(n=>new Promise(r=>e.load(n,r)));await Promise.all(t);for(let n=0;n<$e.numPages;n++){const r=this._createPage(n,e);this.book.add(r),this.pages.push(r)}this.iconManager.init(e),this.update(0)}render(){this.renderer.render(this.scene,this.camera)}playOpeningAnimation(){if(this.openingAnimationStatus!=="none")return;this.openingAnimationStatus="playing";const e=this.getCameraTargetY(),t={x:$e.pageWidth/2,y:e,z:this.isMobile?this.closedCameraZ:this.normalCameraZ},n=new N($e.pageWidth/2,e,0),r=new N(0,1,0),s=new N(0,0,0),a=this.camera.up.clone(),o=Jt.timeline({onComplete:()=>{this.openingAnimationStatus="played"},onUpdate:()=>{this.camera.up.copy(a),this.camera.lookAt(s)},defaults:{duration:2.5,ease:"power3.inOut"}}),l=0;o.to(this.camera.position,{...t},l),o.to(s,{...n},l),o.to(a,{...r},l)}get openingAnimationPlayed(){return this.openingAnimationStatus==="played"}update(e){if(!this.pages.length||!this.openingAnimationPlayed)return;this.updateBgColor(e);const t=this.perSegment,n=[],r=e/t;e<t&&(this.camera.position.x=Pf.lerp($e.pageWidth/2,0,r),this.isMobile&&(this.camera.position.z=Pf.lerp(this.closedCameraZ,this.normalCameraZ,r))),Jr.set(Math.round(r));for(let s=0;s<$e.numPages;s++){const a=this.pages[s],o=s*t,l=Math.max(0,Math.min(1,r-o/t)),c=-l*Math.PI;n.push(c),a.rotation.y=c,a.position.z=s<r?(s-r+1)*$e.pageDepth*l:(r-s)*$e.pageDepth*(1-l);const u=(s-2)*t,f=(s+2)*t;if(e<u||e>f){a.visible=!1;continue}a.visible=!0;const h=this.decorationPairs[s];if(!h||h.length===0)continue;const d=(s-.8)*t,g=(s+.8)*t,_=e>d&&e<g,p=(n[s-1]||0)+Math.PI,S=n[s],v=p+S-Math.PI;h.forEach(T=>{if(T.front.visible=_,T.back.visible=_,!_)return;const w=v*$e.pageWidth*T.parallaxFactor;T.front.position.x=T.offset.x+w,T.back.position.x=-T.offset.x-w})}}getCameraTargetY(){const e=this.container.clientWidth,t=this.container.clientHeight,s=$e.pageWidth*2/.95/this.camera.aspect;return t<e?0:-.25*(s-$e.pageHeight)}updateBgColor(e){const t=performance.now();if(t-this.lastBgUpdate<16)return;this.lastBgUpdate=t;const n=Wa.bg.length,r=e*n,s=Math.floor(r)%n,a=(s+1)%n,o=r-Math.floor(r),l=new Ge(Wa.bg[s]),c=new Ge(Wa.bg[a]),u=l.clone().lerp(c,o);this.renderer.setClearColor(u),this.setColorVariable(u)}setColorVariable(e){const t={h:0,s:0,l:0};e.getHSL(t);let n=e;t.l>.5&&(n=new Ge().setHSL(t.h,t.s-.1,.6*t.l)),document.documentElement.style.setProperty("--bgColor",e.getStyle()),document.documentElement.style.setProperty("--textColor",n.getStyle())}handleResize(){const e=this.container.clientWidth,t=this.container.clientHeight;this.renderer.setSize(e,t),this.camera.aspect=e/t;const r=$e.pageWidth*2/.95,s=this.camera.fov*(Math.PI/180);let o=r/this.camera.aspect/(2*Math.tan(s/2));const l=6;this.normalCameraZ=Math.max(o,l),this.isMobile?(this.closedCameraZ=this.normalCameraZ*.75,this.camera.position.z=this.closedCameraZ):this.camera.position.z=this.normalCameraZ,this.openingAnimationPlayed&&(this.camera.position.y=this.getCameraTargetY()),this.camera.updateProjectionMatrix(),this.iconManager.onResize()}dispose(){this.pages.length=0,this.decorationPairs.length=0,this.iconManager.dispose(),this.renderer.dispose(),this.renderer.domElement&&this.container.contains(this.renderer.domElement)&&this.container.removeChild(this.renderer.domElement),this.scene=null,this.camera=null}_createPage(e,t){const n=new fr,r=this._createRoundedBoxGeometry($e.pageWidth,$e.pageHeight,$e.pageDepth,.12,64),s=t.load(Wt.pages[e]);s.repeat.set(.5,1),s.offset.set(.5,0),s.colorSpace=Pt;const a=t.load(Wt.pages[(e+1)%$e.numPages]);a.colorSpace=Pt,a.repeat.set(.5,1);const o=t.load(Wt.normalMap.cover),l=t.load(Wt.normalMap.paper),c=e===0?o:l.clone();c.repeat.set(.5,1),c.offset.set(.5,0);const u=e===$e.numPages-1?o:l.clone();u.repeat.set(.5,1);const f={roughness:.4,metalness:0,normalMap:c,normalScale:new qe(1,3)},h={...f,normalMap:u},d=new $t(r,[new Ai({map:s}),new Ai({map:a}),new Ai({map:a}),new Ai({map:s}),new Ai({...f,map:s}),new Ai({...h,map:a})]);d.position.x=$e.pageWidth/2,n.add(d);const g=this._createDecorations(e,t,d.position.z);return g.forEach(_=>{n.add(_.front),this.pages[e-1]?.add(_.back)}),this.decorationPairs[e]=g,n.position.z=($e.numPages-e)*$e.pageDepth,n}_createDecorations(e,t,n){const r=Wt.decorations[e]||[],s=[],a=new ki(1,1);return r.forEach(o=>{const l=o.scale??1,c=t.load(o.texture,h=>{h.colorSpace=Pt;const d=h.image.width/h.image.height,g=$e.pageHeight*.75*l,_=g*d;u.geometry.dispose(),u.geometry=new ki(_,g),f.geometry.dispose(),f.geometry=new ki(_,g)}),u=new $t(a.clone(),new Ai({map:c,alphaTest:.01,transparent:!0,clippingPlanes:[new qt(new N(-1,0,0),$e.pageWidth-.015),new qt(new N(1,0,0),.01),new qt(new N(0,-1,0),$e.pageHeight/2),new qt(new N(0,1,0),$e.pageHeight/2)].map(h=>h.clone())}));u.position.set(-2.5,o.offset?.y||0,n+(o.offset?.z||0));const f=new $t(a.clone(),new Ai({map:c,alphaTest:.01,transparent:!0,clippingPlanes:[new qt(new N(-1,0,0),.01),new qt(new N(1,0,0),$e.pageWidth-.015),new qt(new N(0,-1,0),$e.pageHeight/2),new qt(new N(0,1,0),$e.pageHeight/2)].map(h=>h.clone())}));this.book.add(u),this.book.add(f),f.position.set($e.pageWidth,o.offset?.y||0,n-(o.offset?.z||0)),f.rotation.y=Math.PI,s.push({front:u,back:f,...o})}),s}_createRoundedBoxGeometry(e,t,n,r,s){const a=new ws(e,t,n,s,s,s),o=a.attributes.position,l=new N,c=e/2-r,u=t/2-r;for(let f=0;f<o.count;f++)if(l.fromBufferAttribute(o,f),l.x>c&&Math.abs(l.y)>u){const h=new N(c,Math.sign(l.y)*u,l.z),d=new N().subVectors(l,h);if(d.length()>r){d.setLength(r);const g=h.add(d);o.setXYZ(f,g.x,g.y,g.z)}}return a.computeVertexNormals(),a}}var hy=qi('<div class="cursor-grab touch-none w-[100vw] h-[100vh] svelte-gc2bmi" role="slider" aria-valuemin="0" aria-valuemax="1" tabindex="0"></div>');function dy(i,e){Gc(e,!1);let t=li(),n=null,r=li(0),s={value:0},a=!1,o=0,l=0,c=0,u=0,f=0;eu(()=>{if(!Ie(t))return;n=new fy(Ie(t));let E;const S=()=>{E=requestAnimationFrame(S),n?.render()};return n.init().then(()=>{S()}),window.addEventListener("resize",d),()=>{window.removeEventListener("resize",d),cancelAnimationFrame(E),n?.dispose()}});function h(E){Ot(r,E),n?.update(E)}function d(){n?.handleResize()}function g(E){if(!n?.openingAnimationPlayed){n?.playOpeningAnimation();return}Jt.killTweensOf(s),a=!0,o=E.clientX,l=Ie(r),f=E.clientX,u=performance.now(),c=0}function _(E){if(!a)return;const S=E.clientX,v=performance.now(),T=E.movementX||S-f,w=v-u;w>0&&(c=T/w),u=v,f=S;const C=-(S-o)/Ie(t).clientWidth*$e.dragSensitivity,x=Math.max(0,Math.min(1,l+C));h(x)}function m(){if(!a)return;a=!1;const E=1/$e.numPages,S=Ie(r)/E;let T=-c*.6;T=Math.max(-3,Math.min(3,T));let w=Math.round(S+T);w=Math.max(0,Math.min($e.numPages,w));const A=w*E;s.value=Ie(r),Jt.to(s,{value:A,duration:$e.snapDuration+Math.abs(T),ease:"power3.out",onUpdate:()=>{h(s.value)}})}ud();var p=hy();cd(p,E=>Ot(t,E),()=>Ie(t)),oo(()=>e_(p,"aria-valuenow",Ie(r))),Ci("pointerdown",p,g),Ci("pointermove",p,_),Ci("pointerup",p,m),Ci("pointerleave",p,m),Ci("pointercancel",p,m),Ci("lostpointercapture",p,m),ai(i,p),Wc()}var py=qi(`<div id="video-overlay" class="
  fixed inset-0 w-full h-full bg-black/20
  filter backdrop-blur-sm
  flex justify-center items-center
  z-50 opacity-0 pointer-events-none
  transition-opacity duration-300 ease-in-out
"><div class="relative w-11/12 max-w-3xl overflow-hidden"><button class="
      close-button
      absolute top-2 right-2 w-6 h-6 rounded-full bg-white text-[var(--textColor)]
      flex items-center justify-center
      text-xl font-bold cursor-pointer shadow-lg
      transition-transform duration-200 ease-in-out hover:scale-110
    ">&times;</button> <video class="w-[80%] lg:w-[60%] mt-2 h-auto block mx-auto rounded-xl" playsinline="" loop autoplay></video></div></div>`,2);function my(i){var e=py();ai(i,e)}const _y=i=>i;function gy(i){const e=i-1;return e*e*e+1}function yh(i){const e=typeof i=="string"&&i.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[i,"px"]}function vy(i,{delay:e=0,duration:t=400,easing:n=_y}={}){const r=+getComputedStyle(i).opacity;return{delay:e,duration:t,easing:n,css:s=>`opacity: ${s*r}`}}function xy(i,{delay:e=0,duration:t=400,easing:n=gy,x:r=0,y:s=0,opacity:a=0}={}){const o=getComputedStyle(i),l=+o.opacity,c=o.transform==="none"?"":o.transform,u=l*(1-a),[f,h]=yh(r),[d,g]=yh(s);return{delay:e,duration:t,easing:n,css:(_,m)=>`
			transform: ${c} translate(${(1-_)*f}${h}, ${(1-_)*d}${g});
			opacity: ${l-u*m}`}}const My=`<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.75 47.6428H33.75V45.991H3.75V47.6428Z" fill="currentColor"/>
<path d="M9.375 54.25H39.375V52.5982H9.375V54.25Z" fill="currentColor"/>
<path d="M45 45.9911V14.6072H43.125V45.9911H45Z" fill="currentColor"/>
<path d="M11.25 45.9911L11.25 14.6072H9.375L9.375 45.9911H11.25Z" fill="currentColor"/>
<path d="M45 45.9911H43.125V49.2947C43.125 50.1708 42.7299 51.0111 42.0266 51.6306C41.3234 52.2502 40.3696 52.5982 39.375 52.5982H37.5V54.25H39.375C40.8668 54.25 42.2976 53.7279 43.3525 52.7986C44.4074 51.8693 45 50.6089 45 49.2947V45.9911Z" fill="currentColor"/>
<path d="M31.875 47.6428H33.75V49.2946C33.75 50.1708 34.1451 51.011 34.8484 51.6306C35.5516 52.2501 36.5054 52.5982 37.5 52.5982H39.375V54.25H37.5C36.0082 54.25 34.5774 53.7279 33.5225 52.7986C32.4676 51.8693 31.875 50.6089 31.875 49.2946V47.6428Z" fill="currentColor"/>
<path d="M3.75 47.6428H5.625V49.2946C5.625 50.1708 6.02009 51.011 6.72335 51.6306C7.42661 52.2501 8.38044 52.5982 9.375 52.5982H11.25V54.25H9.375C7.88316 54.25 6.45242 53.7279 5.39752 52.7986C4.34263 51.8693 3.75 50.6089 3.75 49.2946V47.6428Z" fill="currentColor"/>
<path d="M56.25 14.6072H45V16.259H56.25V14.6072Z" fill="currentColor"/>
<path d="M50.625 8H15V9.65179H50.625V8Z" fill="currentColor"/>
<path d="M9.375 14.6071H11.25V12.9554C11.25 12.0792 11.6451 11.2389 12.3483 10.6194C13.0516 9.99984 14.0054 9.65179 15 9.65179H16.875V8H15C13.5082 8 12.0774 8.52208 11.0225 9.45139C9.96763 10.3807 9.375 11.6411 9.375 12.9554V14.6071Z" fill="currentColor"/>
<path d="M43.125 14.6071H45V12.9554C45 12.0792 45.3951 11.2389 46.0984 10.6194C46.8016 9.99984 47.7554 9.65179 48.75 9.65179H50.625V8H48.75C47.2582 8 45.8274 8.52208 44.7725 9.45139C43.7176 10.3807 43.125 11.6411 43.125 12.9554V14.6071Z" fill="currentColor"/>
<path d="M56.25 14.6071H54.375V12.9554C54.375 12.0792 53.9799 11.2389 53.2766 10.6194C52.5734 9.99984 51.6196 9.65179 50.625 9.65179H48.75V8H50.625C52.1168 8 53.5476 8.52208 54.6025 9.45139C55.6574 10.3807 56.25 11.6411 56.25 12.9554V14.6071Z" fill="currentColor"/>
<path d="M16.0339 19.0679C16.0339 18.7981 16.1411 18.5395 16.3318 18.3488C16.5225 18.158 16.7812 18.0509 17.0509 18.0509H35.356C35.6257 18.0509 35.8843 18.158 36.0751 18.3488C36.2658 18.5395 36.3729 18.7981 36.3729 19.0679C36.3729 19.3376 36.2658 19.5962 36.0751 19.7869C35.8843 19.9777 35.6257 20.0848 35.356 20.0848H17.0509C16.7812 20.0848 16.5225 19.9777 16.3318 19.7869C16.1411 19.5962 16.0339 19.3376 16.0339 19.0679ZM17.0509 28.2204H35.356C35.6257 28.2204 35.8843 28.1133 36.0751 27.9225C36.2658 27.7318 36.3729 27.4732 36.3729 27.2034C36.3729 26.9337 36.2658 26.6751 36.0751 26.4844C35.8843 26.2936 35.6257 26.1865 35.356 26.1865H17.0509C16.7812 26.1865 16.5225 26.2936 16.3318 26.4844C16.1411 26.6751 16.0339 26.9337 16.0339 27.2034C16.0339 27.4732 16.1411 27.7318 16.3318 27.9225C16.5225 28.1133 16.7812 28.2204 17.0509 28.2204ZM17.0509 36.356H26.2034C26.4731 36.356 26.7318 36.2488 26.9225 36.0581C27.1132 35.8674 27.2204 35.6087 27.2204 35.339C27.2204 35.0693 27.1132 34.8107 26.9225 34.6199C26.7318 34.4292 26.4731 34.3221 26.2034 34.3221H17.0509C16.7812 34.3221 16.5225 34.4292 16.3318 34.6199C16.1411 34.8107 16.0339 35.0693 16.0339 35.339C16.0339 35.6087 16.1411 35.8674 16.3318 36.0581C16.5225 36.2488 16.7812 36.356 17.0509 36.356Z" fill="currentColor"/>
</svg>
`,Sy=`<?xml version="1.0" encoding="utf-8"?>
<svg fill="currentColor" viewBox="0 0 36 36" version="1.1"  preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path class="clr-i-outline clr-i-outline-path-1" d="M19.41,18l8.29-8.29a1,1,0,0,0-1.41-1.41L18,16.59,9.71,8.29A1,1,0,0,0,8.29,9.71L16.59,18,8.29,26.29a1,1,0,1,0,1.41,1.41L18,19.41l8.29,8.29a1,1,0,0,0,1.41-1.41Z"></path>
    <rect x="0" y="0" width="36" height="36" fill-opacity="0"/>
</svg>`;var Ey=qi('<span class="pl-3">•&nbsp;</span> ',1),yy=qi('<div class="fixed top-0 left-0 w-full text-[var(--textColor)] bg-white/70 backdrop-blur-sm shadow-xs z-10 h-8 flex items-center"><button class="pl-1 w-9 cursor-pointer"><!></button> <div class="relative overflow-hidden flex-1 h-full"><div class="absolute whitespace-nowrap text-sm lg:text-base will-change-transform top-0 left-12 h-full flex items-center"></div></div> <button class="pr-1 w-8 cursor-pointer"><!></button></div>'),Ty=qi("<p> </p>"),by=qi('<div class="fixed inset-0 bg-black/60 flex items-center justify-center z-50 backdrop-blur-lg" id="wiki-modal"><div class="rounded-lg px-4 md:px-20 text-[var(--textColor)] text-center overflow-y-auto py-6 max-h-[90vh]"><div class="space-y-4 text-2xl lg:text-4xl leading-9 md:leading-14 font-sans italic"></div></div></div>'),wy=qi("<!> <!>",1);function Ay(i,e){Gc(e,!1);const[t,n]=c_(),r=()=>l_(Jr,"$currentPage",t),s=li();let a=li(!0),o=li(!1),l=li([]),c,u=li();async function f(){if(!Ie(u))return;Jt.killTweensOf(Ie(u)),await Jt.delayedCall(.02,()=>{});const S=Ie(u).scrollWidth/2,v=Ie(u).parentElement?.clientWidth||0;if(S<=v){Jt.set(Ie(u),{x:0});return}Jt.set(Ie(u),{x:0}),c=Jt.to(Ie(u),{x:-S,duration:S/60,ease:"linear",repeat:-1,force3D:!0,roundProps:"x"})}eu(()=>(document.addEventListener("click",h),setTimeout(f,50),()=>{document.removeEventListener("click",h)})),u_(()=>{c&&c.kill()});function h(E){const S=window.getSelection()?.toString();Ie(o)&&E.target.closest("#wiki-modal")&&!S&&Ot(o,!1)}Fo(()=>r(),()=>{Ot(s,ay[r()]?.trim()||"")}),Fo(()=>Ie(s),()=>{Ot(l,Ie(s)?Ie(s).split(`
`).map(E=>E.trim()):[])}),Fo(()=>(Ie(s),Ie(u),Jt),()=>{Ie(s)&&Ie(u)&&(Jt.killTweensOf(Ie(u)),f())}),Um(),ud();var d=wy(),g=No(d);{var _=E=>{var S=yy(),v=Ri(S),T=Ri(v);ju(T,()=>My);var w=$r(v,2),A=Ri(w);Bo(A,4,()=>Array(2),Oo,(b,P)=>{var B=qm(),O=No(B);Bo(O,1,()=>Ie(l),Oo,(G,W)=>{var V=Ey(),Y=$r(No(V));oo(()=>Zu(Y,` ${Ie(W)??""}`)),ai(G,V)}),ai(b,B)}),cd(A,b=>Ot(u,b),()=>Ie(u));var C=$r(w,2),x=Ri(C);ju(x,()=>Sy),Ci("click",v,()=>Ot(o,!0)),Ci("click",C,()=>Ot(a,!1)),ai(E,S)};Ku(g,E=>{Ie(a)&&Ie(s)&&E(_)})}var m=$r(g,2);{var p=E=>{var S=by(),v=Ri(S),T=Ri(v);Bo(T,5,()=>Ie(l),Oo,(w,A)=>{var C=Ty(),x=Ri(C);oo(()=>Zu(x,Ie(A))),ai(w,C)}),ef(3,v,()=>xy,()=>({y:20,duration:300})),ef(3,S,()=>vy,()=>({duration:150})),ai(E,S)};Ku(m,E=>{Ie(o)&&E(p)})}ai(i,d),Wc(),n()}var Ry=qi('<main class="w-screen overflow-hidden h-screen"><!> <!> <div id="photo-overlay-container"></div> <!></main>');function Cy(i){var e=Ry(),t=Ri(e);Ay(t,{});var n=$r(t,2);my(n);var r=$r(n,4);dy(r,{}),ai(i,e)}Ym(Cy,{target:document.getElementById("app")});
