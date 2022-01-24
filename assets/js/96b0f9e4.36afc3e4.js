(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{305:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(8),b=(a(0),a(469)),l={custom_edit_url:null},c={unversionedId:"api/ExternalPanel",id:"version-4.1.1/api/ExternalPanel",isDocsHomePage:!1,title:"ExternalPanel",description:"`ts",source:"@site/versioned_docs/version-4.1.1/api/ExternalPanel.mdx",sourceDirName:"api",slug:"/api/ExternalPanel",permalink:"/egjs-flicking/docs/4.1.1/api/ExternalPanel",editUrl:null,version:"4.1.1",frontMatter:{custom_edit_url:null},sidebar:"version-4.1.1/api",previous:{title:"ElementPanel",permalink:"/egjs-flicking/docs/4.1.1/api/ElementPanel"},next:{title:"Panel",permalink:"/egjs-flicking/docs/4.1.1/api/Panel"}},i=[{value:"Constructor",id:"constructor",children:[]},{value:"Properties",id:"properties",children:[{value:"index",id:"index",children:[]},{value:"position",id:"position",children:[]},{value:"size",id:"size",children:[]},{value:"sizeIncludingMargin",id:"sizeIncludingMargin",children:[]},{value:"height",id:"height",children:[]},{value:"margin",id:"margin",children:[]},{value:"alignPosition",id:"alignPosition",children:[]},{value:"removed",id:"removed",children:[]},{value:"range",id:"range",children:[]},{value:"toggled",id:"toggled",children:[]},{value:"toggleDirection",id:"toggleDirection",children:[]},{value:"offset",id:"offset",children:[]},{value:"progress",id:"progress",children:[]},{value:"outsetProgress",id:"outsetProgress",children:[]},{value:"visibleRatio",id:"visibleRatio",children:[]},{value:"align",id:"align",children:[]}]},{value:"Methods",id:"methods",children:[{value:"resize",id:"resize",children:[]},{value:"contains",id:"contains",children:[]},{value:"destroy",id:"destroy",children:[]},{value:"includePosition",id:"includePosition",children:[]},{value:"includeRange",id:"includeRange",children:[]},{value:"focus",id:"focus",children:[]},{value:"prev",id:"prev",children:[]},{value:"next",id:"next",children:[]},{value:"increaseIndex",id:"increaseIndex",children:[]},{value:"decreaseIndex",id:"decreaseIndex",children:[]},{value:"increasePosition",id:"increasePosition",children:[]},{value:"decreasePosition",id:"decreasePosition",children:[]},{value:"toggle",id:"toggle",children:[]},{value:"updateCircularToggleDirection",id:"updateCircularToggleDirection",children:[]}]}],s={toc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-ts"},"class ExternalPanel extends Panel\n")),Object(b.b)("p",null,"An slide data component that holds information of a single HTMLElement"),Object(b.b)("div",{className:"container"},Object(b.b)("div",{className:"row mb-2"},Object(b.b)("div",{className:"col col--6"},Object(b.b)("strong",null,"Properties")),Object(b.b)("div",{className:"col col--6"},Object(b.b)("strong",null,"Methods"))),Object(b.b)("div",{className:"row"},Object(b.b)("div",{className:"col col--6"},Object(b.b)("a",{href:"#index"},"index"),Object(b.b)("br",null),Object(b.b)("a",{href:"#position"},"position"),Object(b.b)("br",null),Object(b.b)("a",{href:"#size"},"size"),Object(b.b)("br",null),Object(b.b)("a",{href:"#sizeIncludingMargin"},"sizeIncludingMargin"),Object(b.b)("br",null),Object(b.b)("a",{href:"#height"},"height"),Object(b.b)("br",null),Object(b.b)("a",{href:"#margin"},"margin"),Object(b.b)("br",null),Object(b.b)("a",{href:"#alignPosition"},"alignPosition"),Object(b.b)("br",null),Object(b.b)("a",{href:"#removed"},"removed"),Object(b.b)("br",null),Object(b.b)("a",{href:"#range"},"range"),Object(b.b)("br",null),Object(b.b)("a",{href:"#toggled"},"toggled"),Object(b.b)("br",null),Object(b.b)("a",{href:"#toggleDirection"},"toggleDirection"),Object(b.b)("br",null),Object(b.b)("a",{href:"#offset"},"offset"),Object(b.b)("br",null),Object(b.b)("a",{href:"#progress"},"progress"),Object(b.b)("br",null),Object(b.b)("a",{href:"#outsetProgress"},"outsetProgress"),Object(b.b)("br",null),Object(b.b)("a",{href:"#visibleRatio"},"visibleRatio"),Object(b.b)("br",null),Object(b.b)("a",{href:"#align"},"align")),Object(b.b)("div",{className:"col col--6"},Object(b.b)("a",{href:"#resize"},"resize"),Object(b.b)("br",null),Object(b.b)("a",{href:"#contains"},"contains"),Object(b.b)("br",null),Object(b.b)("a",{href:"#destroy"},"destroy"),Object(b.b)("br",null),Object(b.b)("a",{href:"#includePosition"},"includePosition"),Object(b.b)("br",null),Object(b.b)("a",{href:"#includeRange"},"includeRange"),Object(b.b)("br",null),Object(b.b)("a",{href:"#focus"},"focus"),Object(b.b)("br",null),Object(b.b)("a",{href:"#prev"},"prev"),Object(b.b)("br",null),Object(b.b)("a",{href:"#next"},"next"),Object(b.b)("br",null),Object(b.b)("a",{href:"#increaseIndex"},"increaseIndex"),Object(b.b)("br",null),Object(b.b)("a",{href:"#decreaseIndex"},"decreaseIndex"),Object(b.b)("br",null),Object(b.b)("a",{href:"#increasePosition"},"increasePosition"),Object(b.b)("br",null),Object(b.b)("a",{href:"#decreasePosition"},"decreasePosition"),Object(b.b)("br",null),Object(b.b)("a",{href:"#toggle"},"toggle"),Object(b.b)("br",null),Object(b.b)("a",{href:"#updateCircularToggleDirection"},"updateCircularToggleDirection")))),Object(b.b)("h2",{id:"constructor"},"Constructor"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-ts"},"new ExternalPanel(options, options.el, options.index, options.align, options.flicking)\n")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"options"),Object(b.b)("td",{parentName:"tr",align:"center"},"object"),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"An options object")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"options.el"),Object(b.b)("td",{parentName:"tr",align:"center"},"HTMLElement"),Object(b.b)("td",{parentName:"tr",align:"center"},"yes"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"A ",Object(b.b)("inlineCode",{parentName:"td"},"HTMLElement")," panel's referencing")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"options.index"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"yes"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"An initial index of the panel")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"options.align"),Object(b.b)("td",{parentName:"tr",align:"center"},"Constants.ALIGN ","|"," string ","|"," number"),Object(b.b)("td",{parentName:"tr",align:"center"},"yes"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"An initial ",Object(b.b)("a",{parentName:"td",href:"Flicking#align"},"align")," value of the panel")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"options.flicking"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("a",{parentName:"td",href:"Flicking"},"Flicking")),Object(b.b)("td",{parentName:"tr",align:"center"},"yes"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"A Flicking instance panel's referencing")))),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"index"},"index"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"Index of the panel"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": number"),Object(b.b)("h3",{id:"position"},"position"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"Position of the panel, including ",Object(b.b)("a",{parentName:"p",href:"Panel#alignPosition"},"alignPosition")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": number"),Object(b.b)("h3",{id:"size"},"size"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"Cached size of the panel element",Object(b.b)("br",{parentName:"p"}),"\n","This is equal to ",Object(b.b)("a",{parentName:"p",href:"Panel#element"},"element"),"'s ",Object(b.b)("inlineCode",{parentName:"p"},"offsetWidth")," if ",Object(b.b)("a",{parentName:"p",href:"Flicking#horizontal"},"horizontal")," is ",Object(b.b)("inlineCode",{parentName:"p"},"true"),", and ",Object(b.b)("inlineCode",{parentName:"p"},"offsetHeight")," else"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": number"),Object(b.b)("h3",{id:"sizeIncludingMargin"},"sizeIncludingMargin"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"Panel's size including CSS ",Object(b.b)("inlineCode",{parentName:"p"},"margin"),Object(b.b)("br",{parentName:"p"}),"\n","This value includes ",Object(b.b)("a",{parentName:"p",href:"Panel#element"},"element"),"'s margin left/right if ",Object(b.b)("a",{parentName:"p",href:"Flicking#horizontal"},"horizontal")," is ",Object(b.b)("inlineCode",{parentName:"p"},"true"),", and margin top/bottom else"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": number"),Object(b.b)("h3",{id:"height"},"height"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"Height of the panel element"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": number"),Object(b.b)("h3",{id:"margin"},"margin"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"Cached CSS ",Object(b.b)("inlineCode",{parentName:"p"},"margin")," value of the panel element"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": object"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PROPERTY"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"prev"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"CSS ",Object(b.b)("inlineCode",{parentName:"td"},"margin-left")," when the ",Object(b.b)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal")," is ",Object(b.b)("inlineCode",{parentName:"td"},"true"),", and ",Object(b.b)("inlineCode",{parentName:"td"},"margin-top")," else")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"next"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"CSS ",Object(b.b)("inlineCode",{parentName:"td"},"margin-right")," when the ",Object(b.b)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal")," is ",Object(b.b)("inlineCode",{parentName:"td"},"true"),", and ",Object(b.b)("inlineCode",{parentName:"td"},"margin-bottom")," else")))),Object(b.b)("h3",{id:"alignPosition"},"alignPosition"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"Align position inside the panel where ",Object(b.b)("a",{parentName:"p",href:"Camera"},"Camera"),"'s ",Object(b.b)("a",{parentName:"p",href:"Camera#alignPosition"},"alignPosition")," inside viewport should be located at"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": number"),Object(b.b)("h3",{id:"removed"},"removed"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"A value indicating whether the panel's ",Object(b.b)("a",{parentName:"p",href:"Flicking#remove"},"remove"),"d"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": boolean"),Object(b.b)("h3",{id:"range"},"range"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"Panel element's range of the bounding box"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": object"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PROPERTY"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"min"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"Bounding box's left(",Object(b.b)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal"),": true) / top(",Object(b.b)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal"),": false)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"max"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"Bounding box's right(",Object(b.b)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal"),": true) / bottom(",Object(b.b)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal"),": false)")))),Object(b.b)("h3",{id:"toggled"},"toggled"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"A value indicating whether the panel's position is toggled by circular behavior"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": boolean"),Object(b.b)("h3",{id:"toggleDirection"},"toggleDirection"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"A direction where the panel's position is toggled"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": ",Object(b.b)("a",{parentName:"p",href:"DIRECTION"},"DIRECTION")),Object(b.b)("h3",{id:"offset"},"offset"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"Actual position offset determined by ",Object(b.b)("a",{parentName:"p",href:"Panel#order"},"Panel#order")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": number"),Object(b.b)("h3",{id:"progress"},"progress"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"Progress of movement between previous or next panel relative to current panel"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": number"),Object(b.b)("h3",{id:"outsetProgress"},"outsetProgress"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"Progress of movement between points that panel is completely invisible outside of viewport(prev direction: -1, selected point: 0, next direction: 1)"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": number"),Object(b.b)("h3",{id:"visibleRatio"},"visibleRatio"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"Percentage of area where panel is visible in the viewport"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": number"),Object(b.b)("h3",{id:"align"},"align"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"A value indicating where the ",Object(b.b)("a",{parentName:"p",href:"Panel#alignPosition"},"alignPosition")," should be located at inside the panel element"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": Constants.ALIGN ","|"," string ","|"," number"),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"resize"},"resize"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"Update size of the panel"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": this"),Object(b.b)("h3",{id:"contains"},"contains"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"Check whether the given element is inside of this panel's ",Object(b.b)("a",{parentName:"p",href:"Panel#element"},"element")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": boolean"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"A Boolean value indicating the element is inside of this panel ",Object(b.b)("a",{parentName:"li",href:"Panel#element"},"element"))),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"element"),Object(b.b)("td",{parentName:"tr",align:"center"},"HTMLElement"),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"The HTMLElement to check")))),Object(b.b)("h3",{id:"destroy"},"destroy"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"Reset internal state and set ",Object(b.b)("a",{parentName:"p",href:"Panel#removed"},"removed")," to ",Object(b.b)("inlineCode",{parentName:"p"},"true")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": void"),Object(b.b)("h3",{id:"includePosition"},"includePosition"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"Check whether the given position is inside of this panel's ",Object(b.b)("a",{parentName:"p",href:"Panel#range"},"range")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": boolean"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"A Boolean value indicating whether the given position is included in the panel range")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"pos"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"A position to check")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"includeMargin"),Object(b.b)("td",{parentName:"tr",align:"center"},"boolean"),Object(b.b)("td",{parentName:"tr",align:"center"},"yes"),Object(b.b)("td",{parentName:"tr",align:"center"},"false"),Object(b.b)("td",{parentName:"tr",align:"center"},"Include ",Object(b.b)("a",{parentName:"td",href:"Panel#margin"},"margin")," to the range")))),Object(b.b)("h3",{id:"includeRange"},"includeRange"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"Check whether the given range is fully included in this panel's area"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": boolean"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"A Boolean value indicating whether the given range is fully included in the panel range")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"min"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"Minimum value of the range to check")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"max"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"Maximum value of the range to check")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"includeMargin"),Object(b.b)("td",{parentName:"tr",align:"center"},"boolean"),Object(b.b)("td",{parentName:"tr",align:"center"},"yes"),Object(b.b)("td",{parentName:"tr",align:"center"},"false"),Object(b.b)("td",{parentName:"tr",align:"center"},"Include ",Object(b.b)("a",{parentName:"td",href:"Panel#margin"},"margin")," to the range")))),Object(b.b)("h3",{id:"focus"},"focus"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"Move ",Object(b.b)("a",{parentName:"p",href:"Camera"},"Camera")," to this panel"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"A Promise which will be resolved after reaching the panel")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"duration"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"yes"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"Duration of the animation (unit: ms)")))),Object(b.b)("h3",{id:"prev"},"prev"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"Get previous(",Object(b.b)("inlineCode",{parentName:"p"},"index - 1"),") panel. When the previous panel does not exist, this will return ",Object(b.b)("inlineCode",{parentName:"p"},"null")," instead",Object(b.b)("br",{parentName:"p"}),"\n","If the ",Object(b.b)("a",{parentName:"p",href:"Flicking#circularEnabled"},"circular")," is enabled, this will return the last panel if called from the first panel"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": ",Object(b.b)("a",{parentName:"p",href:"Panel"},"Panel")," ","|"," null"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"The previous panel")),Object(b.b)("h3",{id:"next"},"next"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"Get next(",Object(b.b)("inlineCode",{parentName:"p"},"index + 1"),") panel. When the next panel does not exist, this will return ",Object(b.b)("inlineCode",{parentName:"p"},"null")," instead",Object(b.b)("br",{parentName:"p"}),"\n","If the ",Object(b.b)("a",{parentName:"p",href:"Flicking#circularEnabled"},"circular")," is enabled, this will return the first panel if called from the last panel"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": ",Object(b.b)("a",{parentName:"p",href:"Panel"},"Panel")," ","|"," null"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"The previous panel")),Object(b.b)("h3",{id:"increaseIndex"},"increaseIndex"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"Increase panel's index by the given value"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": this"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"val"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"An integer greater than or equal to 0")))),Object(b.b)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",Object(b.b)("strong",null,"internal")," use only."),Object(b.b)("h3",{id:"decreaseIndex"},"decreaseIndex"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"Decrease panel's index by the given value"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": this"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"val"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"An integer greater than or equal to 0")))),Object(b.b)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",Object(b.b)("strong",null,"internal")," use only."),Object(b.b)("h3",{id:"increasePosition"},"increasePosition"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"Increase panel's position by the given value"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": this"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"val"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"An integer greater than or equal to 0")))),Object(b.b)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",Object(b.b)("strong",null,"internal")," use only."),Object(b.b)("h3",{id:"decreasePosition"},"decreasePosition"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,"Decrease panel's position by the given value"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": this"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"val"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"An integer greater than or equal to 0")))),Object(b.b)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",Object(b.b)("strong",null,"internal")," use only."),Object(b.b)("h3",{id:"toggle"},"toggle"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": boolean"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"toggled")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"prevPos"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"newPos"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"})))),Object(b.b)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",Object(b.b)("strong",null,"internal")," use only."),Object(b.b)("h3",{id:"updateCircularToggleDirection"},"updateCircularToggleDirection"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": this"),Object(b.b)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",Object(b.b)("strong",null,"internal")," use only."))}p.isMDXComponent=!0},469:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},o=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),o=p(a),m=n,d=o["".concat(l,".").concat(m)]||o[m]||O[m]||b;return a?r.a.createElement(d,c(c({ref:t},s),{},{components:a})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var s=2;s<b;s++)l[s]=a[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);