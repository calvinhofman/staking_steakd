import{s as a,a as r,y as n,j as l,d as c}from"./index-c84dc42b.js";var d=Object.defineProperty,s=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,i=(o,e,t)=>e in o?d(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,p=(o,e)=>{for(var t in e||(e={}))b.call(e,t)&&i(o,t,e[t]);if(s)for(var t of s(e))m.call(e,t)&&i(o,t,e[t]);return o};class u{constructor(e){this.openModal=a.open,this.closeModal=a.close,this.subscribeModal=a.subscribe,this.setTheme=r.setThemeConfig,r.setThemeConfig(e),n.setConfig(p({enableStandaloneMode:!0},e)),this.initUi()}async initUi(){if(typeof window<"u"){await l(()=>import("./index.es-b418e5a3.js"),["assets/index.es-b418e5a3.js","assets/index-c84dc42b.js","assets/index-9a1e5d1d.css","assets/browser-e933942f.js"]);const e=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",e),c.setIsUiLoaded(!0)}}}export{u as Web3Modal};
