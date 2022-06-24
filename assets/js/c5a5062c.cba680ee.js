"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[3963],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),l=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=l(t.components);return a.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:e},p),{},{components:n})):a.createElement(h,i({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1342:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"Code"},c=void 0,l={unversionedId:"api-contract/start/code",id:"api-contract/start/code",title:"Code",description:"The CodePromise class allows the developer to manage calls to the instantiatewithcode dispatchable in the contracts pallet.",source:"@site/docs/api-contract/start/code.md",sourceDirName:"api-contract/start",slug:"/api-contract/start/code",permalink:"/docs/api-contract/start/code",draft:!1,editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api-contract/start/code.md",tags:[],version:"current",frontMatter:{title:"Code"},sidebar:"reference",previous:{title:"Prerequisites",permalink:"/docs/api-contract/start/prerequisites"},next:{title:"Blueprint",permalink:"/docs/api-contract/start/blueprint"}},p={},u=[],d={toc:u};function m(t){var e=t.components,n=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"CodePromise")," class allows the developer to manage calls to the ",(0,o.kt)("inlineCode",{parentName:"p"},"instantiate_with_code")," dispatchable in the contracts pallet.\nIt is useful in cases where an existing ",(0,o.kt)("inlineCode",{parentName:"p"},"codeHash")," is not available, meaning that the code has never been deployed to the blockchain in its current form. "),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"instantiate_with_code")," dispatchable uploads the wasm code the blockchain and creates a new instance in one go. Learn how it works under the hood in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/substrate/extrinsics#instantiatewithcodevalue-compactu128-gas_limit-compactu64-storage_deposit_limit-optioncompactu128-code-bytes-data-bytes-salt-bytes"},"Substrate Metadata")," section "),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"CodePromise")," constructor takes 3 arguments: an API instance, the contract metadata, and the contract code. Only the wasm code will end up on-chain; the metadata is only used in the JavaScript world. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-contract/start/basics"},"Prerequisites")," to find out how to obtain them."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { CodePromise } from '@polkadot/api-contracts';\n\nconst code = new CodePromise(api, metadata, wasm);\n")),(0,o.kt)("p",null,"The newly generated ",(0,o.kt)("inlineCode",{parentName:"p"},"code")," object lets you call ",(0,o.kt)("inlineCode",{parentName:"p"},"instantiate_with_code")," without having to encode the data yourself.\nYou will need to provide values for the instantiation options. Getting accurate gas and storage deposit costs is possible by calling the ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8080/substrate/rpc#instantiaterequest-instantiaterequest-at-blockhash-contractinstantiateresult"},"instantiate")," RPC, which dry runs the instantiation and returns the outcome. For the scope of this tutorial we will use hardcoded values."),(0,o.kt)("p",null,"Here is how you would retrieve the contract address after instantiation for an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/blob/master/examples/incrementer/lib.rs"},"ink! incrementer contract"),", whose constructor signature looks like this: ",(0,o.kt)("inlineCode",{parentName:"p"},"new (initValue: i32)")," "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// maximum gas to be consumed for the instantiation. if limit is too small the instantiation will fail.\nconst gasLimit = 100000n * 1000000n\n// a limit to how much Balance to be used to pay for the storage created by the instantiation\n// if null is passed, unlimited balance can be used\nconst storageDepositLimit = null\n// used to derive contract address, \n// use null to prevent duplicate contracts\nconst salt = new Uint8Array()\n// balance to transfer to the contract account, formerly know as \"endowment\". \n// use only with payable constructors, will fail otherwise. \nconst value = api.registry.createType('Balance', 1000)\nconst initValue = 1;\n\nconst tx = code.tx.new({ gasLimit, storageDepositLimit }, initValue)\n\nlet address;\n\nconst unsub = await tx.signAndSend(alicePair, ({ contract, status }) => {\n  if (status.isInBlock || status.isFinalized) {\n    address = contract.address.toString();\n    unsub();\n  }\n});\n")),(0,o.kt)("p",null,"After we have uploaded the WASM on-chain, next we'll use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-contract/start/blueprint"},"Blueprint to (re)instantiate on-chain code"),"."))}m.isMDXComponent=!0}}]);