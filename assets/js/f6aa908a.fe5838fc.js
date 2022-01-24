(window.webpackJsonp=window.webpackJsonp||[]).push([[363],{442:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return m}));var i=n(3),a=n(8),r=(n(0),n(469)),l=n(473),o=n(474),c=n(479),s=n(471),u={title:"Server Side Rendering (SSR)",id:"ssr",slug:"/ssr",custom_edit_url:null},d={unversionedId:"ssr",id:"version-4.5.0/ssr",isDocsHomePage:!1,title:"Server Side Rendering (SSR)",description:'As Flicking does not know the size of the panel element until it is rendered, it is hard to place the panels at the correct positions on Server-Side Rendering (SSR) unless you\'re using the "prev" align or using the bound option.',source:"@site/versioned_docs/version-4.5.0/ssr.mdx",sourceDirName:".",slug:"/ssr",permalink:"/egjs-flicking/docs/ssr",editUrl:null,version:"4.5.0",frontMatter:{title:"Server Side Rendering (SSR)",id:"ssr",slug:"/ssr",custom_edit_url:null},sidebar:"version-4.5.0/docs",previous:{title:"Polyfills",permalink:"/egjs-flicking/docs/polyfills"},next:{title:"Migration Guide from v3 to v4",permalink:"/egjs-flicking/docs/migration-from-v3"}},b=[{value:"firstPanelSize",id:"firstpanelsize",children:[]},{value:"hideBeforeInit",id:"hidebeforeinit",children:[]},{value:"How to use",id:"how-to-use",children:[]}],p={toc:b};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"As Flicking does not know the size of the panel element until it is rendered, it is hard to place the panels at the correct positions on Server-Side Rendering (SSR) unless you're using the ",Object(r.b)("inlineCode",{parentName:"p"},'"prev"')," align or using the ",Object(r.b)("inlineCode",{parentName:"p"},"bound")," option."),Object(r.b)("p",null,"To solve this problem, Flicking offers 2 options for the frameworks, ",Object(r.b)("inlineCode",{parentName:"p"},"firstPanelSize")," and ",Object(r.b)("inlineCode",{parentName:"p"},"hideBeforeInit"),"."),Object(r.b)("h3",{id:"firstpanelsize"},"firstPanelSize"),Object(r.b)("p",null,"If you know the exact size of the first panel element, like ",Object(r.b)("inlineCode",{parentName:"p"},'"200px"')," or ",Object(r.b)("inlineCode",{parentName:"p"},'"50%"'),", you can use that value to correctly place the panel elements before Flicking's mounted."),Object(r.b)("img",{src:Object(s.a)("/img/firstPanelSize.png")}),Object(r.b)("p",null,"But if the panel's size is responsive for the screen size or you're using a ",Object(r.b)("inlineCode",{parentName:"p"},"circular")," option, this won't work well as Flicking doesn't know about other panel sizes.",Object(r.b)("br",{parentName:"p"}),"\n","In that case, please use ",Object(r.b)("inlineCode",{parentName:"p"},"hideBeforeInit")," instead."),Object(r.b)("img",{src:Object(s.a)("/img/firstPanelSize-circular.gif")}),Object(r.b)("h3",{id:"hidebeforeinit"},"hideBeforeInit"),Object(r.b)("p",null,"Enabling this option will hide panel elements until it's mounted.",Object(r.b)("br",{parentName:"p"}),"\n","This will show empty screen before it's mounted, so use this option only when you're okay with that."),Object(r.b)("img",{src:Object(s.a)("/img/hideBeforeInit.gif")}),Object(r.b)("h3",{id:"how-to-use"},"How to use"),Object(r.b)(l.a,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@2",value:"vue"},{label:"Vue@3",value:"vue3"},{label:"Angular",value:"angular"},{label:"Preact",value:"preact"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"js",mdxType:"TabItem"},"In native JS, you can attach class `flicking-hidden` to the viewport element and remove that on `ready` event to mimic the behavior of `hideBeforeInit`.",Object(r.b)(c.a,{className:"html",title:"html",mdxType:"CodeBlock"},'<div id="flicking" class="flicking-viewport flicking-hidden">\n  <div class="flicking-camera">\n    ...\n  </div>\n</div>'),Object(r.b)(c.a,{className:"js",title:"js",mdxType:"CodeBlock"},'import Flicking, { EVENTS } from "@egjs/flicking";\n\nconst flicking = new Flicking("#flicking");\nflicking.once(EVENTS.READY, () => {\n  flicking.element.classList.remove("flicking-hidden");\n}')),Object(r.b)(o.a,{value:"react",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},'<Flicking hideBeforeInit={true} firstPanelSize="200px">\n  {...}\n</Flicking>\n'))),Object(r.b)(o.a,{value:"vue",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},'<Flicking :hideBeforeInit="true" :firstPanelSize="\'200px\'">\n   {{ ... }}\n</Flicking>\n'))),Object(r.b)(o.a,{value:"vue3",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},'<Flicking :hideBeforeInit="true" :firstPanelSize="\'200px\'">\n   {{ ... }}\n</Flicking>\n'))),Object(r.b)(o.a,{value:"angular",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},'<ngx-flicking [hideBeforeInit]="true" [firstPanelSize]="\'200px\'">\n  {{ ... }}\n</ngx-flicking>\n'))),Object(r.b)(o.a,{value:"preact",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},'<Flicking hideBeforeInit={true} firstPanelSize="200px">\n  {...}\n</Flicking>\n'))),Object(r.b)(o.a,{value:"svelte",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},'<Flicking hideBeforeInit={true} firstPanelSize="200px">\n  {...}\n</Flicking>\n')))))}m.isMDXComponent=!0},471:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return l}));var i=n(16),a=n(472);function r(){var e=Object(i.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var r=void 0===i?{}:i,l=r.forcePrependBaseUrl,o=void 0!==l&&l,c=r.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(o)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(r,n,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},472:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!i(e)}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}))},473:function(e,t,n){"use strict";var i=n(0),a=n.n(i),r=n(475),l=n(470),o=n(60),c=n.n(o);var s=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,d=e.values,b=e.groupId,p=e.className,m=Object(r.a)(),f=m.tabGroupChoices,v=m.setTabGroupChoices,g=Object(i.useState)(o),h=g[0],j=g[1],O=i.Children.toArray(e.children),k=[];if(null!=b){var S=f[b];null!=S&&S!==h&&d.some((function(e){return e.value===S}))&&j(S)}var w=function(e){var t=e.currentTarget,n=k.indexOf(t),i=d[n].value;j(i),null!=b&&(v(b,i),setTimeout((function(){var e,n,i,a,r,l,o,s;(e=t.getBoundingClientRect(),n=e.top,i=e.left,a=e.bottom,r=e.right,l=window,o=l.innerHeight,s=l.innerWidth,n>=0&&r<=s&&a<=o&&i>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((function(){return t.classList.remove(c.a.tabItemActive)}),2e3))}),150))},N=function(e){var t,n;switch(e.keyCode){case u:var i=k.indexOf(e.target)+1;n=k[i]||k[0];break;case s:var a=k.indexOf(e.target)-1;n=k[a]||k[k.length-1]}null===(t=n)||void 0===t||t.focus()};return a.a.createElement("div",{className:"tabs-container"},a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},p)},d.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:N,onFocus:w,onClick:w},n)}))),t?Object(i.cloneElement)(O.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(i.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},474:function(e,t,n){"use strict";var i=n(0),a=n.n(i);t.a=function(e){var t=e.children,n=e.hidden,i=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}}}]);