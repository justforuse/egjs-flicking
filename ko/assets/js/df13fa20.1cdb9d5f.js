"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5368],{3905:function(e,n,a){a.d(n,{Zo:function(){return o},kt:function(){return m}});var t=a(67294);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=t.createContext({}),c=function(e){var n=t.useContext(u),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},o=function(e){var n=c(e.components);return t.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=l,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||r;return a?t.createElement(g,i(i({ref:n},o),{},{components:a})):t.createElement(g,i({ref:n},o))}));function m(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58215:function(e,n,a){a.d(n,{Z:function(){return l}});var t=a(67294);function l(e){var n=e.children,a=e.hidden,l=e.className;return t.createElement("div",{role:"tabpanel",hidden:a,className:l},n)}},9877:function(e,n,a){a.d(n,{Z:function(){return o}});var t=a(87462),l=a(67294),r=a(72389),i=a(63725),s=a(86010),u="tabItem_LplD";function c(e){var n,a,r,c=e.lazy,o=e.block,p=e.defaultValue,d=e.values,m=e.groupId,g=e.className,f=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,i.lx)(v,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(n=null!=p?p:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?n:null==(r=f[0])?void 0:r.props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,i.UB)(),y=h.tabGroupChoices,j=h.setTabGroupChoices,x=(0,l.useState)(b),T=x[0],N=x[1],w=[],O=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var I=y[m];null!=I&&I!==T&&v.some((function(e){return e.value===I}))&&N(I)}var Z=function(e){var n=e.currentTarget,a=w.indexOf(n),t=v[a].value;t!==T&&(O(n),N(t),null!=m&&j(m,t))},E=function(e){var n,a=null;switch(e.key){case"ArrowRight":var t=w.indexOf(e.currentTarget)+1;a=w[t]||w[0];break;case"ArrowLeft":var l=w.indexOf(e.currentTarget)-1;a=w[l]||w[w.length-1]}null==(n=a)||n.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},g)},v.map((function(e){var n=e.value,a=e.label,r=e.attributes;return l.createElement("li",(0,t.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return w.push(e)},onKeyDown:E,onFocus:Z,onClick:Z},r,{className:(0,s.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":T===n})}),null!=a?a:n)}))),c?(0,l.cloneElement)(f.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function o(e){var n=(0,r.Z)();return l.createElement(c,(0,t.Z)({key:String(n)},e))}},56671:function(e,n,a){a.r(n),a.d(n,{assets:function(){return d},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var t=a(87462),l=a(63366),r=(a(67294),a(3905)),i=a(9877),s=a(58215),u=["components"],c={title:"Installation",id:"installation",slug:"/",custom_edit_url:null,sidebar_position:1},o=void 0,p={unversionedId:"tutorials/installation",id:"version-4.6.3/tutorials/installation",title:"Installation",description:"Using the package managers (recommended)",source:"@site/versioned_docs/version-4.6.3/tutorials/installation.mdx",sourceDirName:"tutorials",slug:"/",permalink:"/egjs-flicking/ko/docs/",editUrl:null,tags:[],version:"4.6.3",sidebarPosition:1,frontMatter:{title:"Installation",id:"installation",slug:"/",custom_edit_url:null,sidebar_position:1},sidebar:"docs",next:{title:"Quick Start",permalink:"/egjs-flicking/ko/docs/quick-start"}},d={},m=[{value:"Using the package managers (recommended)",id:"using-the-package-managers-recommended",level:2},{value:"npm",id:"npm",level:3},{value:"yarn",id:"yarn",level:3},{value:"CDN Links",id:"cdn-links",level:2},{value:"packaged(with dependencies)",id:"packagedwith-dependencies",level:3},{value:"CSS files",id:"css-files",level:3}],g={toc:m};function f(e){var n=e.components,a=(0,l.Z)(e,u);return(0,r.kt)("wrapper",(0,t.Z)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"using-the-package-managers-recommended"},"Using the package managers (recommended)"),(0,r.kt)("p",null,"You can easily install Flicking with package managers like ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm")," or ",(0,r.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/en/"},"yarn")),(0,r.kt)("h3",{id:"npm"},"npm"),(0,r.kt)(i.Z,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@2",value:"vue"},{label:"Vue@3",value:"vue3"},{label:"Angular",value:"angular"},{label:"Preact",value:"preact"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/flicking\n"))),(0,r.kt)(s.Z,{value:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/react-flicking\n"))),(0,r.kt)(s.Z,{value:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/vue-flicking\n"))),(0,r.kt)(s.Z,{value:"vue3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/vue3-flicking\n"))),(0,r.kt)(s.Z,{value:"angular",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/ngx-flicking\n"))),(0,r.kt)(s.Z,{value:"preact",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/preact-flicking\n"))),(0,r.kt)(s.Z,{value:"svelte",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/svelte-flicking\n")))),(0,r.kt)("h3",{id:"yarn"},"yarn"),(0,r.kt)(i.Z,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@2",value:"vue"},{label:"Vue@3",value:"vue3"},{label:"Angular",value:"angular"},{label:"Preact",value:"preact"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/flicking\n"))),(0,r.kt)(s.Z,{value:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/react-flicking\n"))),(0,r.kt)(s.Z,{value:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/vue-flicking\n"))),(0,r.kt)(s.Z,{value:"vue3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/vue3-flicking\n"))),(0,r.kt)(s.Z,{value:"angular",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/ngx-flicking\n"))),(0,r.kt)(s.Z,{value:"preact",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/preact-flicking\n"))),(0,r.kt)(s.Z,{value:"svelte",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/svelte-flicking\n")))),(0,r.kt)("h2",{id:"cdn-links"},"CDN Links"),(0,r.kt)("h3",{id:"packagedwith-dependencies"},"packaged(with dependencies)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- unpkg --\x3e\n<script src="https://unpkg.com/@egjs/flicking/dist/flicking.pkgd.min.js" crossorigin="anonymous"><\/script>\n\x3c!-- cdnjs --\x3e\n<script src="https://cdnjs.cloudflare.com/ajax/libs/egjs-flicking/4.x.x/flicking.pkgd.min.js" crossorigin="anonymous"><\/script>\n')),(0,r.kt)("h3",{id:"css-files"},"CSS files"),(0,r.kt)("p",null,"Choose ",(0,r.kt)("inlineCode",{parentName:"p"},"flicking-inline.css")," if you have to support IE9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- unpkg --\x3e\n<link rel="stylesheet" href="https://unpkg.com/@egjs/flicking/dist/flicking.css" crossorigin="anonymous" />\n<link rel="stylesheet" href="https://unpkg.com/@egjs/flicking/dist/flicking-inline.css" crossorigin="anonymous" />\n\x3c!-- cdnjs --\x3e\n<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/egjs-flicking/4.x.x/flicking.css" crossorigin="anonymous" />\n<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/egjs-flicking/4.x.x/flicking-inline.css" crossorigin="anonymous" />\n')))}f.isMDXComponent=!0}}]);