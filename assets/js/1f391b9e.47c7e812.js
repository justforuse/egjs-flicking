(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{129:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(494),l=n(469),i=n(514),o=n(513),s=n(478);t.default=function(e){var t=e.content,n=t.frontMatter,a=t.metadata,d=n.title,m=n.description,u=n.wrapperClassName,h=n.hide_table_of_contents,f=a.permalink;return r.a.createElement(c.a,{title:d,description:m,permalink:f,wrapperClassName:null!=u?u:s.ThemeClassNames.wrapper.mdxPages,pageClassName:s.ThemeClassNames.page.mdxPage},r.a.createElement("main",null,r.a.createElement("div",{className:"container container--fluid"},r.a.createElement("div",{className:"margin-vert--lg padding-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement("div",{className:"container"},r.a.createElement(l.a,{components:i.a},r.a.createElement(t,null)))),!h&&t.toc&&r.a.createElement("div",{className:"col col--2"},r.a.createElement(o.a,{toc:t.toc})))))))}},513:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(470);var l=function(e,t,n){var r=Object(a.useState)(void 0),c=r[0],l=r[1];Object(a.useEffect)((function(){function a(){var a=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var a=e[e.indexOf(t)-1];return null!=a?a:t}return t}return e[e.length-1]}();if(a)for(var r=0,i=!1,o=document.getElementsByClassName(e);r<o.length&&!i;){var s=o[r],d=s.href,m=decodeURIComponent(d.substring(d.indexOf("#")+1));a.id===m&&(c&&c.classList.remove(t),s.classList.add(t),l(s),i=!0),r+=1}}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),function(){document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}))},i=n(75),o=n.n(i),s="table-of-contents__link";function d(e){var t=e.toc,n=e.isChild;return t.length?r.a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"#"+e.id,className:s,dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(d,{isChild:!0,toc:e.children}))}))):null}t.a=function(e){var t=e.toc;return l(s,"table-of-contents__link--active",100),r.a.createElement("div",{className:Object(c.a)(o.a.tableOfContents,"thin-scrollbar")},r.a.createElement(d,{toc:t}))}},514:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(477),l=n(479),i=n(8),o=n(470),s=n(482),d=n(478),m=(n(76),n(77)),u=n.n(m),h=function(e){return function(t){var n,a=t.id,c=Object(i.a)(t,["id"]),l=Object(d.useThemeConfig)().navbar.hideOnScroll;return a?r.a.createElement(e,c,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(o.a)("anchor",(n={},n[u.a.enhancedAnchor]=!l,n)),id:a}),c.children,r.a.createElement("a",{className:"hash-link",href:"#"+a,title:Object(s.b)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):r.a.createElement(e,c)}},f={code:function(e){var t=e.children;return Object(a.isValidElement)(t)?t:t.includes("\n")?r.a.createElement(l.a,e):r.a.createElement("code",e)},a:function(e){return r.a.createElement(c.a,e)},pre:function(e){var t,n=e.children;return Object(a.isValidElement)(null==n||null===(t=n.props)||void 0===t?void 0:t.children)?null==n?void 0:n.props.children:r.a.createElement(l.a,Object(a.isValidElement)(n)?null==n?void 0:n.props:{children:n})},h1:h("h1"),h2:h("h2"),h3:h("h3"),h4:h("h4"),h5:h("h5"),h6:h("h6")};t.a=f}}]);