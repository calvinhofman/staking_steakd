import{B as f,l as w,m as y,p,I as h,q as g,t as k,u as O,v as L,w as m,x as E}from"./index-e88b0ae2.js";class x extends f{constructor({callbackSelector:e,cause:a,data:n,extraData:c,sender:d,urls:t}){var i;super(a.shortMessage||"An error occurred while fetching for an offchain result.",{cause:a,metaMessages:[...a.metaMessages||[],(i=a.metaMessages)!=null&&i.length?"":[],"Offchain Gateway Call:",t&&["  Gateway URL(s):",...t.map(u=>`    ${w(u)}`)],`  Sender: ${d}`,`  Data: ${n}`,`  Callback selector: ${e}`,`  Extra data: ${c}`].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}}class M extends f{constructor({result:e,url:a}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${w(a)}`,`Response: ${y(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}}class R extends f{constructor({sender:e,to:a}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${a}`,`OffchainLookup sender address: ${e}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}function $(s,e){if(!p(s))throw new h({address:s});if(!p(e))throw new h({address:e});return s.toLowerCase()===e.toLowerCase()}const C="0x556f1830",S={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function P(s,{blockNumber:e,blockTag:a,data:n,to:c}){const{args:d}=g({data:n,abi:[S]}),[t,i,u,r,o]=d;try{if(!$(c,t))throw new R({sender:t,to:c});const l=await v({data:u,sender:t,urls:i}),{data:b}=await k(s,{blockNumber:e,blockTag:a,data:O([r,L([{type:"bytes"},{type:"bytes"}],[l,o])]),to:c});return b}catch(l){throw new x({callbackSelector:r,cause:l,data:n,extraData:o,sender:t,urls:i})}}async function v({data:s,sender:e,urls:a}){var c;let n=new Error("An unknown error occurred.");for(let d=0;d<a.length;d++){const t=a[d],i=t.includes("{sender}")||t.includes("{data}")?"GET":"POST",u=i==="POST"?{data:s,sender:e}:void 0;try{const r=await fetch(t.replace("{sender}",e).replace("{data}",s),{body:JSON.stringify(u),method:i});let o;if((c=r.headers.get("Content-Type"))!=null&&c.startsWith("application/json")?o=(await r.json()).data:o=await r.text(),!r.ok){n=new m({body:u,details:y(o.error)||r.statusText,headers:r.headers,status:r.status,url:t});continue}if(!E(o)){n=new M({result:o,url:t});continue}return o}catch(r){n=new m({body:u,details:r.message,url:t})}}throw n}export{v as ccipFetch,P as offchainLookup,S as offchainLookupAbiItem,C as offchainLookupSignature};
