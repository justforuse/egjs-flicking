"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5798],{3905:function(e,t,a){a.d(t,{Zo:function(){return k},kt:function(){return o}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},k=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,k=s(e,["components","mdxType","originalType","parentName"]),c=m(a),o=r,g=c["".concat(p,".").concat(o)]||c[o]||d[o]||l;return a?n.createElement(g,i(i({ref:t},k),{},{components:a})):n.createElement(g,i({ref:t},k))}));function o(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},37314:function(e,t,a){a.r(t),a.d(t,{assets:function(){return k},contentTitle:function(){return p},default:function(){return o},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return d}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],s={custom_edit_url:null},p=void 0,m={unversionedId:"api/ExternalRenderer",id:"version-4.6.2/api/ExternalRenderer",title:"ExternalRenderer",description:"\u26a0\ufe0f This class is for internal use only.",source:"@site/versioned_docs/version-4.6.2/api/ExternalRenderer.mdx",sourceDirName:"api",slug:"/api/ExternalRenderer",permalink:"/egjs-flicking/docs/api/ExternalRenderer",editUrl:null,tags:[],version:"4.6.2",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"VirtualPanel",permalink:"/egjs-flicking/docs/api/VirtualPanel"},next:{title:"Renderer",permalink:"/egjs-flicking/docs/api/Renderer"}},k={},d=[{value:"Properties",id:"properties",level:2},{value:"panels",id:"panels",level:3},{value:"rendering",id:"rendering",level:3},{value:"panelCount",id:"panelCount",level:3},{value:"strategy",id:"strategy",level:3},{value:"align",id:"align",level:3},{value:"Methods",id:"methods",level:2},{value:"render",id:"render",level:3},{value:"init",id:"init",level:3},{value:"destroy",id:"destroy",level:3},{value:"getPanel",id:"getPanel",level:3},{value:"updatePanelSize",id:"updatePanelSize",level:3},{value:"batchInsert",id:"batchInsert",level:3},{value:"batchInsertDefer",id:"batchInsertDefer",level:3},{value:"batchRemove",id:"batchRemove",level:3},{value:"batchRemoveDefer",id:"batchRemoveDefer",level:3},{value:"updateAfterPanelChange",id:"updateAfterPanelChange",level:3},{value:"checkPanelContentsReady",id:"checkPanelContentsReady",level:3}],c={toc:d};function o(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This class is for ",(0,l.kt)("strong",null,"internal")," use only."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"class ExternalRenderer extends Renderer\n")),(0,l.kt)("div",{className:"container"},(0,l.kt)("div",{className:"row mb-2"},(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("strong",null,"Properties")),(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("strong",null,"Methods"))),(0,l.kt)("div",{className:"row"},(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("a",{href:"#panels"},"panels"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#rendering"},"rendering"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#panelCount"},"panelCount"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#strategy"},"strategy"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#align"},"align")),(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("a",{href:"#render"},"render"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#init"},"init"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#destroy"},"destroy"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#getPanel"},"getPanel"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#updatePanelSize"},"updatePanelSize"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#batchInsert"},"batchInsert"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#batchInsertDefer"},"batchInsertDefer"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#batchRemove"},"batchRemove"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#batchRemoveDefer"},"batchRemoveDefer"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#updateAfterPanelChange"},"updateAfterPanelChange"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#checkPanelContentsReady"},"checkPanelContentsReady")))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"panels"},"panels"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly"),(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"Array of panels"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": Array","<",(0,l.kt)("a",{parentName:"p",href:"Panel"},"Panel"),">"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"See"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"Panel"},"Panel"))),(0,l.kt)("h3",{id:"rendering"},"rendering"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly"),(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"A boolean value indicating whether rendering is in progress"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": boolean"),(0,l.kt)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This member is for ",(0,l.kt)("strong",null,"internal")," use only."),(0,l.kt)("h3",{id:"panelCount"},"panelCount"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly"),(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"Count of panels"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": number"),(0,l.kt)("h3",{id:"strategy"},"strategy"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This member is for ",(0,l.kt)("strong",null,"internal")," use only."),(0,l.kt)("h3",{id:"align"},"align"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"A ",(0,l.kt)("a",{parentName:"p",href:"Panel"},"Panel"),"'s ",(0,l.kt)("a",{parentName:"p",href:"Panel#align"},"align")," value that applied to all panels"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": Constants.ALIGN ","|"," string ","|"," number"),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"render"},"render"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"Render panel elements inside the camera element"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("h3",{id:"init"},"init"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"Initialize Renderer"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"flicking"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"An instance of ",(0,l.kt)("a",{parentName:"td",href:"Flicking"},"Flicking"))))),(0,l.kt)("h3",{id:"destroy"},"destroy"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"Destroy Renderer and return to initial state"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": void"),(0,l.kt)("h3",{id:"getPanel"},"getPanel"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"Return the ",(0,l.kt)("a",{parentName:"p",href:"Panel"},"Panel")," at the given index. ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," if it doesn't exists."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("a",{parentName:"p",href:"Panel"},"Panel")," ","|"," null"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Panel at the given index")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"index"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"See"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"Panel"},"Panel"))),(0,l.kt)("h3",{id:"updatePanelSize"},"updatePanelSize"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"Update all panel sizes"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("h3",{id:"batchInsert"},"batchInsert"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"Insert new panels at given index",(0,l.kt)("br",{parentName:"p"}),"\n","This will increase index of panels after by the number of panels added"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": Array","<",(0,l.kt)("a",{parentName:"p",href:"Panel"},"Panel"),">"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"An array of prepended panels")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"items"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Array","<","object",">"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"An array of items to insert")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"items.index"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Index to insert new panels at")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"items.elements"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Array","<","any",">"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"An array of element or framework component with element in it")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"items.hasDOMInElements"),(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Whether it contains actual DOM elements. If set to true, renderer will add them to the camera element")))),(0,l.kt)("h3",{id:"batchInsertDefer"},"batchInsertDefer"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"Defers update",(0,l.kt)("br",{parentName:"p"}),"\n","camera position & others will be updated after calling updateAfterPanelChange"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"...items"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Array","<","{index: number, elements: any[], hasDOMInElements: boolean}",">"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))),(0,l.kt)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",(0,l.kt)("strong",null,"internal")," use only."),(0,l.kt)("h3",{id:"batchRemove"},"batchRemove"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"Remove the panel at the given index",(0,l.kt)("br",{parentName:"p"}),"\n","This will decrease index of panels after by the number of panels removed"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("a",{parentName:"p",href:"Panel"},"Panel"),"[]"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"An array of removed panels")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"items"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Array","<","object",">"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"An array of items to remove")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"items.index"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Index of panel to remove")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"items.deleteCount"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"1"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Number of panels to remove from index")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"items.hasDOMInElements"),(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"1"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Whether it contains actual DOM elements. If set to true, renderer will remove them from the camera element")))),(0,l.kt)("h3",{id:"batchRemoveDefer"},"batchRemoveDefer"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"Defers update",(0,l.kt)("br",{parentName:"p"}),"\n","camera position & others will be updated after calling updateAfterPanelChange"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"...items"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Array","<","{index: number, deleteCount: number, hasDOMInElements: boolean}",">"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))),(0,l.kt)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",(0,l.kt)("strong",null,"internal")," use only."),(0,l.kt)("h3",{id:"updateAfterPanelChange"},"updateAfterPanelChange"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"panelsAdded"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"Panel"},"Panel"),"[]"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"panelsRemoved"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"Panel"},"Panel"),"[]"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))),(0,l.kt)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",(0,l.kt)("strong",null,"internal")," use only."),(0,l.kt)("h3",{id:"checkPanelContentsReady"},"checkPanelContentsReady"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"checkingPanels"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"Panel"},"Panel"),"[]"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))),(0,l.kt)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",(0,l.kt)("strong",null,"internal")," use only."))}o.isMDXComponent=!0}}]);