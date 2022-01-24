(window.webpackJsonp=window.webpackJsonp||[]).push([[362],{441:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return O}));var n=a(3),b=a(8),r=(a(0),a(469)),c={custom_edit_url:null},l={unversionedId:"api/BoundCamera",id:"version-4.3.1/api/BoundCamera",isDocsHomePage:!1,title:"BoundCamera",description:"`ts",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-4.3.1/api/BoundCamera.mdx",sourceDirName:"api",slug:"/api/BoundCamera",permalink:"/egjs-flicking/ko/docs/4.3.1/api/BoundCamera",editUrl:null,version:"4.3.1",frontMatter:{custom_edit_url:null},sidebar:"version-4.3.1/api",previous:{title:"Flicking",permalink:"/egjs-flicking/ko/docs/4.3.1/api/Flicking"},next:{title:"Camera",permalink:"/egjs-flicking/ko/docs/4.3.1/api/Camera"}},i=[{value:"Properties",id:"properties",children:[{value:"element",id:"element",children:[]},{value:"position",id:"position",children:[]},{value:"alignPosition",id:"alignPosition",children:[]},{value:"offset",id:"offset",children:[]},{value:"range",id:"range",children:[]},{value:"rangeDiff",id:"rangeDiff",children:[]},{value:"visiblePanels",id:"visiblePanels",children:[]},{value:"visibleRange",id:"visibleRange",children:[]},{value:"anchorPoints",id:"anchorPoints",children:[]},{value:"controlParams",id:"controlParams",children:[]},{value:"atEdge",id:"atEdge",children:[]},{value:"size",id:"size",children:[]},{value:"progress",id:"progress",children:[]},{value:"align",id:"align",children:[]}]},{value:"Methods",id:"methods",children:[{value:"updateRange",id:"updateRange",children:[]},{value:"init",id:"init",children:[]},{value:"destroy",id:"destroy",children:[]},{value:"lookAt",id:"lookAt",children:[]},{value:"getPrevAnchor",id:"getPrevAnchor",children:[]},{value:"getNextAnchor",id:"getNextAnchor",children:[]},{value:"getProgressInPanel",id:"getProgressInPanel",children:[]},{value:"findAnchorIncludePosition",id:"findAnchorIncludePosition",children:[]},{value:"findNearestAnchor",id:"findNearestAnchor",children:[]},{value:"findActiveAnchor",id:"findActiveAnchor",children:[]},{value:"clampToReachablePosition",id:"clampToReachablePosition",children:[]},{value:"canReach",id:"canReach",children:[]},{value:"canSee",id:"canSee",children:[]},{value:"updateAlignPos",id:"updateAlignPos",children:[]},{value:"updateAnchors",id:"updateAnchors",children:[]},{value:"updateAdaptiveHeight",id:"updateAdaptiveHeight",children:[]},{value:"resetNeedPanelHistory",id:"resetNeedPanelHistory",children:[]}]}],p={toc:i};function O(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"class BoundCamera extends Camera\n")),Object(r.b)("p",null,"\uccab\ubc88\uc9f8\uc640 \ub9c8\uc9c0\ub9c9 \ud328\ub110 \ubc16\uc73c\ub85c \ub118\uc5b4\uac00\uc9c0 \ubabb\ud558\ub3c4\ub85d \ubc94\uc704\ub97c \uc124\uc815\ud558\uc5ec, \uccab\ubc88\uc9f8/\ub9c8\uc9c0\ub9c9 \ud328\ub110 \uc804/\ud6c4\uc758 \ube48 \uacf5\uac04\uc744 \ubcf4\uc774\uc9c0 \uc54a\ub3c4\ub85d \ud558\ub294 \uc885\ub958\uc758 ",Object(r.b)("a",{parentName:"p",href:"Camera"},"Camera")),Object(r.b)("div",{className:"container"},Object(r.b)("div",{className:"row mb-2"},Object(r.b)("div",{className:"col col--6"},Object(r.b)("strong",null,"Properties")),Object(r.b)("div",{className:"col col--6"},Object(r.b)("strong",null,"Methods"))),Object(r.b)("div",{className:"row"},Object(r.b)("div",{className:"col col--6"},Object(r.b)("a",{href:"#element"},"element"),Object(r.b)("br",null),Object(r.b)("a",{href:"#position"},"position"),Object(r.b)("br",null),Object(r.b)("a",{href:"#alignPosition"},"alignPosition"),Object(r.b)("br",null),Object(r.b)("a",{href:"#offset"},"offset"),Object(r.b)("br",null),Object(r.b)("a",{href:"#range"},"range"),Object(r.b)("br",null),Object(r.b)("a",{href:"#rangeDiff"},"rangeDiff"),Object(r.b)("br",null),Object(r.b)("a",{href:"#visiblePanels"},"visiblePanels"),Object(r.b)("br",null),Object(r.b)("a",{href:"#visibleRange"},"visibleRange"),Object(r.b)("br",null),Object(r.b)("a",{href:"#anchorPoints"},"anchorPoints"),Object(r.b)("br",null),Object(r.b)("a",{href:"#controlParams"},"controlParams"),Object(r.b)("br",null),Object(r.b)("a",{href:"#atEdge"},"atEdge"),Object(r.b)("br",null),Object(r.b)("a",{href:"#size"},"size"),Object(r.b)("br",null),Object(r.b)("a",{href:"#progress"},"progress"),Object(r.b)("br",null),Object(r.b)("a",{href:"#align"},"align")),Object(r.b)("div",{className:"col col--6"},Object(r.b)("a",{href:"#updateRange"},"updateRange"),Object(r.b)("br",null),Object(r.b)("a",{href:"#init"},"init"),Object(r.b)("br",null),Object(r.b)("a",{href:"#destroy"},"destroy"),Object(r.b)("br",null),Object(r.b)("a",{href:"#lookAt"},"lookAt"),Object(r.b)("br",null),Object(r.b)("a",{href:"#getPrevAnchor"},"getPrevAnchor"),Object(r.b)("br",null),Object(r.b)("a",{href:"#getNextAnchor"},"getNextAnchor"),Object(r.b)("br",null),Object(r.b)("a",{href:"#getProgressInPanel"},"getProgressInPanel"),Object(r.b)("br",null),Object(r.b)("a",{href:"#findAnchorIncludePosition"},"findAnchorIncludePosition"),Object(r.b)("br",null),Object(r.b)("a",{href:"#findNearestAnchor"},"findNearestAnchor"),Object(r.b)("br",null),Object(r.b)("a",{href:"#findActiveAnchor"},"findActiveAnchor"),Object(r.b)("br",null),Object(r.b)("a",{href:"#clampToReachablePosition"},"clampToReachablePosition"),Object(r.b)("br",null),Object(r.b)("a",{href:"#canReach"},"canReach"),Object(r.b)("br",null),Object(r.b)("a",{href:"#canSee"},"canSee"),Object(r.b)("br",null),Object(r.b)("a",{href:"#updateAlignPos"},"updateAlignPos"),Object(r.b)("br",null),Object(r.b)("a",{href:"#updateAnchors"},"updateAnchors"),Object(r.b)("br",null),Object(r.b)("a",{href:"#updateAdaptiveHeight"},"updateAdaptiveHeight"),Object(r.b)("br",null),Object(r.b)("a",{href:"#resetNeedPanelHistory"},"resetNeedPanelHistory")))),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)("h3",{id:"element"},"element"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"\uce74\uba54\ub77c(",Object(r.b)("inlineCode",{parentName:"p"},".flicking-camera"),") \uc5d8\ub9ac\uba3c\ud2b8"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": HTMLElement"),Object(r.b)("h3",{id:"position"},"position"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"Camera\uc758 \ud604\uc7ac \uc88c\ud45c"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": number"),Object(r.b)("h3",{id:"alignPosition"},"alignPosition"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"\ud328\ub110\uc758 \uc815\ub82c \uae30\uc900 \uc704\uce58. \ubdf0\ud3ec\ud2b8 \ub0b4\uc5d0\uc11c ",Object(r.b)("a",{parentName:"p",href:"Panel"},"Panel"),"\uc758 ",Object(r.b)("a",{parentName:"p",href:"Panel#alignPosition"},"alignPosition"),"\uc774 \uc704\uce58\ud574\uc57c \ud558\ub294 \uacf3\uc785\ub2c8\ub2e4"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": number"),Object(r.b)("h3",{id:"offset"},"offset"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"Camera\uc758 \uc88c\ud45c \uc624\ud504\uc14b. ",Object(r.b)("a",{parentName:"p",href:"Flicking#renderOnlyVisible"},"renderOnlyVisible")," \uc635\uc158\uc744 \uc704\ud574 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": number"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Default"),": 0"),Object(r.b)("h3",{id:"range"},"range"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"Camera\uc758 ",Object(r.b)("a",{parentName:"p",href:"Camera#position"},"position"),"\uc774 \ub3c4\ub2ec \uac00\ub2a5\ud55c \ubc94\uc704"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": object"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"PROPERTY"),Object(r.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(r.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"min"),Object(r.b)("td",{parentName:"tr",align:"center"},"number"),Object(r.b)("td",{parentName:"tr",align:"center"},"\ucd5c\uc18c \uc704\uce58")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"min"),Object(r.b)("td",{parentName:"tr",align:"center"},"number"),Object(r.b)("td",{parentName:"tr",align:"center"},"\ucd5c\ub300 \uc704\uce58")))),Object(r.b)("h3",{id:"rangeDiff"},"rangeDiff"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"Camera\uac00 \ub3c4\ub2ec \uac00\ub2a5\ud55c \ucd5c\uc18c/\ucd5c\ub300 \uc88c\ud45c\uc758 \ucc28\uc774"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": number"),Object(r.b)("h3",{id:"visiblePanels"},"visiblePanels"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"\ud604\uc7ac \ubcf4\uc774\ub294 \ud328\ub110\ub4e4\uc758 \ubc30\uc5f4"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": Array","<",Object(r.b)("a",{parentName:"p",href:"Panel"},"Panel"),">"),Object(r.b)("h3",{id:"visibleRange"},"visibleRange"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"\ud604\uc7ac \uc704\uce58\uc5d0\uc11c \ubcf4\uc774\ub294 \ubc94\uc704"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": object"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"PROPERTY"),Object(r.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(r.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"min"),Object(r.b)("td",{parentName:"tr",align:"center"},"number"),Object(r.b)("td",{parentName:"tr",align:"center"},"\ucd5c\uc18c \uc704\uce58")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"min"),Object(r.b)("td",{parentName:"tr",align:"center"},"number"),Object(r.b)("td",{parentName:"tr",align:"center"},"\ucd5c\ub300 \uc704\uce58")))),Object(r.b)("h3",{id:"anchorPoints"},"anchorPoints"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"\uce74\uba54\ub77c\uac00 \ub3c4\ub2ec \uac00\ub2a5\ud55c ",Object(r.b)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint"),"\uc758 \ubaa9\ub85d"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": Array","<",Object(r.b)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint"),">"),Object(r.b)("h3",{id:"controlParams"},"controlParams"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"AxesController"},"AxesController"),"\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\uae30 \uc704\ud55c \ud604\uc7ac Camera \ud328\ub7ec\ubbf8\ud130\ub4e4"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": ",Object(r.b)("a",{parentName:"p",href:"ControlParams"},"ControlParams")),Object(r.b)("h3",{id:"atEdge"},"atEdge"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"\ud604\uc7ac \uce74\uba54\ub77c\uac00 \ub3c4\ub2ec \uac00\ub2a5\ud55c \ubc94\uc704\uc758 \ucd5c\uc18c \ud639\uc740 \ucd5c\ub300\uc810\uc744 \ub118\uc5b4\uc130\ub294\uc9c0\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": boolean"),Object(r.b)("h3",{id:"size"},"size"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"\ubdf0\ud3ec\ud2b8 \ud06c\uae30\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": number"),Object(r.b)("h3",{id:"progress"},"progress"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-warning"},"readonly"),Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"\uccab\ubc88\uc9f8 \ud328\ub110\ub85c\ubd80\ud130 \ub9c8\uc9c0\ub9c9 \ud328\ub110\uae4c\uc9c0\uc758 \uce74\uba54\ub77c \uc704\uce58\uc758 \uc9c4\ud589\ub3c4\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4",Object(r.b)("br",{parentName:"p"}),"\n","\ubc94\uc704\ub294 0\ubd80\ud130 \ub9c8\uc9c0\ub9c9 \ud328\ub110\uc758 \uc778\ub371\uc2a4\uae4c\uc9c0\uc785\ub2c8\ub2e4"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": number"),Object(r.b)("h3",{id:"align"},"align"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"Camera#alignPosition"},"alignPosition"),"\uc774 \ubdf0\ud3ec\ud2b8 \uc5d8\ub9ac\uba3c\ud2b8 \ub0b4\uc758 \uc5b4\ub514\uc5d0 \uc704\uce58\ud574\uc57c \ud558\ub294\uc9c0\ub97c \ub098\ud0c0\ub0b4\ub294 \uac12"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": ",Object(r.b)("a",{parentName:"p",href:"ALIGN"},"ALIGN")," ","|"," string ","|"," number"),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"updateRange"},"updateRange"),Object(r.b)("div",{className:"bulma-tags"}),Object(r.b)("p",null,"Camera\uc758 ",Object(r.b)("a",{parentName:"p",href:"Camera#range"},"range"),"\ub97c \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": this"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Throws"),": ",Object(r.b)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")," ",Object(r.b)("a",{parentName:"p",href:"Camera#init"},"init"),"\uc774 \uc774\uc804\uc5d0 \ud638\ucd9c\ub418\uc9c0 \uc54a\uc740 \uacbd\uc6b0"),Object(r.b)("h3",{id:"init"},"init"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"Camera\ub97c \ucd08\uae30\ud654\ud569\ub2c8\ub2e4"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": this"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(r.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(r.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(r.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(r.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"flicking"),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("a",{parentName:"td",href:"Flicking"},"Flicking")),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"Flicking\uc758 \uc778\uc2a4\ud134\uc2a4")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Throws"),": ",Object(r.b)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"ERROR_CODE"},"VAL_MUST_NOT_NULL")," \ubdf0\ud3ec\ud2b8 \uc5d8\ub9ac\uba3c\ud2b8 \ub0b4\ubd80\uc5d0 \uce74\uba54\ub77c \uc5d8\ub9ac\uba3c\ud2b8(",Object(r.b)("inlineCode",{parentName:"p"},".flicking-camera"),")\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc744 \uacbd\uc6b0"),Object(r.b)("h3",{id:"destroy"},"destroy"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"Camera\ub97c \ucd08\uae30 \uc0c1\ud0dc\ub85c \ub418\ub3cc\ub9bd\ub2c8\ub2e4"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": void"),Object(r.b)("h3",{id:"lookAt"},"lookAt"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"\ud574\ub2f9 \uc88c\ud45c\ub85c \uc774\ub3d9\ud558\uace0, CSS transform\uc744 \uc801\uc6a9\ud569\ub2c8\ub2e4"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": this"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(r.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(r.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(r.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(r.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"pos"),Object(r.b)("td",{parentName:"tr",align:"center"},"number"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"\uc6c0\uc9c1\uc77c \uc704\uce58")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Throws"),": ",Object(r.b)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")," ",Object(r.b)("a",{parentName:"p",href:"Camera#init"},"init"),"\uc774 \uc774\uc804\uc5d0 \ud638\ucd9c\ub418\uc9c0 \uc54a\uc740 \uacbd\uc6b0"),Object(r.b)("h3",{id:"getPrevAnchor"},"getPrevAnchor"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"\uc8fc\uc5b4\uc9c4 ",Object(r.b)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint"),"\uc758 \uc774\uc804 ",Object(r.b)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint"),"\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4",Object(r.b)("br",{parentName:"p"}),"\n","\uc874\uc7ac\ud558\uc9c0 \uc54a\uc744 \uacbd\uc6b0 ",Object(r.b)("inlineCode",{parentName:"p"},"null"),"\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": ",Object(r.b)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," ","|"," null"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uc774\uc804 ",Object(r.b)("a",{parentName:"li",href:"AnchorPoint"},"AnchorPoint"))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(r.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(r.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(r.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(r.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"anchor"),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("a",{parentName:"td",href:"AnchorPoint"},"AnchorPoint")),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"\uae30\uc900 ",Object(r.b)("a",{parentName:"td",href:"AnchorPoint"},"AnchorPoint"))))),Object(r.b)("h3",{id:"getNextAnchor"},"getNextAnchor"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"\uc8fc\uc5b4\uc9c4 ",Object(r.b)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint"),"\uc758 \ub2e4\uc74c ",Object(r.b)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint"),"\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4",Object(r.b)("br",{parentName:"p"}),"\n","\uc874\uc7ac\ud558\uc9c0 \uc54a\uc744 \uacbd\uc6b0 ",Object(r.b)("inlineCode",{parentName:"p"},"null"),"\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": ",Object(r.b)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," ","|"," null"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ub2e4\uc74c ",Object(r.b)("a",{parentName:"li",href:"AnchorPoint"},"AnchorPoint"))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(r.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(r.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(r.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(r.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"anchor"),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("a",{parentName:"td",href:"AnchorPoint"},"AnchorPoint")),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"\uae30\uc900 ",Object(r.b)("a",{parentName:"td",href:"AnchorPoint"},"AnchorPoint"))))),Object(r.b)("h3",{id:"getProgressInPanel"},"getProgressInPanel"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"\ud604\uc7ac \uce74\uba54\ub77c \uc544\ub798 \ud328\ub110\uc5d0\uc11c\uc758 \uc704\uce58 \uc9c4\ud589\ub3c4\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4",Object(r.b)("br",{parentName:"p"}),"\n","\ubc18\ud658\uac12\uc740 \uce74\uba54\ub77c\uac00 \ud328\ub110 \ub0b4\ubd80\uc5d0 \uc788\uc744 \uacbd\uc6b0 0\ubd80\ud130 1\uae4c\uc9c0\uc758 \uac12\uc744 \uac16\uc2b5\ub2c8\ub2e4",Object(r.b)("br",{parentName:"p"}),"\n","\ud328\ub110\uc758 margin \uc601\uc5ed\uc5d0 \uc788\uc744 \uacbd\uc6b0 0\ubcf4\ub2e4 \uc791\uac70\ub098 1\ubcf4\ub2e4 \ud070 \uac12\uc744 \ubc18\ud658\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(r.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(r.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(r.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(r.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"panel"),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("a",{parentName:"td",href:"Panel"},"Panel")),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})))),Object(r.b)("h3",{id:"findAnchorIncludePosition"},"findAnchorIncludePosition"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"\uc8fc\uc5b4\uc9c4 \uc88c\ud45c\ub97c \ud3ec\ud568\ud558\ub294 ",Object(r.b)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint"),"\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4",Object(r.b)("br",{parentName:"p"}),"\n","\uc8fc\uc5b4\uc9c4 \uc88c\ud45c\ub97c \ud3ec\ud568\ud558\ub294 ",Object(r.b)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint"),"\uac00 \uc5c6\uc744 \uacbd\uc6b0 ",Object(r.b)("inlineCode",{parentName:"p"},"null"),"\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": ",Object(r.b)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," ","|"," null"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ud574\ub2f9 \uc88c\ud45c\ub97c \ud3ec\ud568\ud558\ub294 ",Object(r.b)("a",{parentName:"li",href:"AnchorPoint"},"AnchorPoint"))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(r.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(r.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(r.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(r.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"position"),Object(r.b)("td",{parentName:"tr",align:"center"},"number"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"\ud655\uc778\ud560 \uc88c\ud45c")))),Object(r.b)("h3",{id:"findNearestAnchor"},"findNearestAnchor"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"\ud574\ub2f9 \uc88c\ud45c\uc5d0\uc11c \uac00\uc7a5 \uac00\uae4c\uc6b4 ",Object(r.b)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint"),"\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4",Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint"),"\uac00 \ud558\ub098\ub3c4 \uc5c6\uc744 \uacbd\uc6b0 ",Object(r.b)("inlineCode",{parentName:"p"},"null"),"\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": ",Object(r.b)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," ","|"," null"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ud574\ub2f9 \uc88c\ud45c\uc5d0 \uac00\uc7a5 \uc778\uc811\ud55c ",Object(r.b)("a",{parentName:"li",href:"AnchorPoint"},"AnchorPoint"))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(r.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(r.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(r.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(r.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"position"),Object(r.b)("td",{parentName:"tr",align:"center"},"number"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"\ud655\uc778\ud560 \uc88c\ud45c")))),Object(r.b)("h3",{id:"findActiveAnchor"},"findActiveAnchor"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"\ud604\uc7ac ",Object(r.b)("a",{parentName:"p",href:"Flicking#currentPanel"},"Flicking#currentPanel"),"\uc5d0 \ud574\ub2f9\ud558\ub294 ",Object(r.b)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint"),"\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": ",Object(r.b)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," ","|"," null"),Object(r.b)("h3",{id:"clampToReachablePosition"},"clampToReachablePosition"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"\uc8fc\uc5b4\uc9c4 \uc88c\ud45c\ub97c Camera\uac00 \ub3c4\ub2ec \uac00\ub2a5\ud55c \ubc94\uc704 \uc0ac\uc774\uc758 \uac12\uc73c\ub85c \ub9cc\ub4ed\ub2c8\ub2e4"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": number"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ubc94\uc704 \uc81c\ud55c\ub41c \uc88c\ud45c")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(r.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(r.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(r.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(r.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"position"),Object(r.b)("td",{parentName:"tr",align:"center"},"number"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"\ubc94\uc704\ub97c \uc81c\ud55c\ud560 \uc88c\ud45c")))),Object(r.b)("h3",{id:"canReach"},"canReach"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"\ud574\ub2f9 ",Object(r.b)("a",{parentName:"p",href:"Panel"},"Panel"),"\uc774 Camera\uac00 \ub3c4\ub2ec \uac00\ub2a5\ud55c \ubc94\uc704 \ub0b4\uc5d0 \uc788\ub294\uc9c0\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": boolean"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ub3c4\ub2ec \uac00\ub2a5\ud55c \ubc94\uc704 \ub0b4\uc5d0 \ud574\ub2f9 \ud328\ub110\uc774 \uc874\uc7ac\ud558\ub294\uc9c0 \uc5ec\ubd80")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(r.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(r.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(r.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(r.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"panel"),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("a",{parentName:"td",href:"Panel"},"Panel")),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"\ud655\uc778\ud560 ",Object(r.b)("a",{parentName:"td",href:"Panel"},"Panel"),"\uc758 \uc778\uc2a4\ud134\uc2a4")))),Object(r.b)("h3",{id:"canSee"},"canSee"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"\ud604\uc7ac \uc88c\ud45c\uc5d0\uc11c \ud574\ub2f9 \ud328\ub110 \uc5d8\ub9ac\uba3c\ud2b8\ub97c \ubcfc \uc218 \uc788\ub294\uc9c0 \uc5ec\ubd80\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": boolean"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ud604\uc7ac \uc704\uce58\uc5d0\uc11c \ud574\ub2f9 \ud328\ub110 \uc5d8\ub9ac\uba3c\ud2b8\uac00 \ubcf4\uc774\ub294\uc9c0 \uc5ec\ubd80")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(r.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(r.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(r.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(r.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"center"},"panel"),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("a",{parentName:"td",href:"Panel"},"Panel")),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"\ud655\uc778\ud560 ",Object(r.b)("a",{parentName:"td",href:"Panel"},"Panel"),"\uc758 \uc778\uc2a4\ud134\uc2a4")))),Object(r.b)("h3",{id:"updateAlignPos"},"updateAlignPos"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"Camera\uc758 ",Object(r.b)("a",{parentName:"p",href:"Camera#alignPosition"},"alignPosition"),"\uc744 \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": this"),Object(r.b)("h3",{id:"updateAnchors"},"updateAnchors"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"Camera\uc758 ",Object(r.b)("a",{parentName:"p",href:"Camera#anchorPoints"},"anchorPoints"),"\ub97c \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": this"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Throws"),": ",Object(r.b)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")," ",Object(r.b)("a",{parentName:"p",href:"Camera#init"},"init"),"\uc774 \uc774\uc804\uc5d0 \ud638\ucd9c\ub418\uc9c0 \uc54a\uc740 \uacbd\uc6b0"),Object(r.b)("h3",{id:"updateAdaptiveHeight"},"updateAdaptiveHeight"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"\ud604\uc7ac \uc120\ud0dd\ub41c \ud328\ub110\uc758 \ub192\uc774\uc640 \ub3d9\uc77c\ud558\ub3c4\ub85d \ubdf0\ud3ec\ud2b8\uc758 \ub192\uc774\ub97c \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": this"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Throws"),": ",Object(r.b)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")," ",Object(r.b)("a",{parentName:"p",href:"Camera#init"},"init"),"\uc774 \uc774\uc804\uc5d0 \ud638\ucd9c\ub418\uc9c0 \uc54a\uc740 \uacbd\uc6b0"),Object(r.b)("h3",{id:"resetNeedPanelHistory"},"resetNeedPanelHistory"),Object(r.b)("div",{className:"bulma-tags"},Object(r.b)("span",{className:"bulma-tag is-danger"},"inherited")),Object(r.b)("p",null,"\ubc1c\uc0dd\ud55c ",Object(r.b)("a",{parentName:"p",href:"Flicking#event-needPanel"},"needPanel")," \uc774\ubca4\ud2b8\ub4e4\uc744 \ucd08\uae30\ud654\ud558\uc5ec \ub2e4\uc2dc \ubc1c\uc0dd\ud560 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns"),": this"))}O.isMDXComponent=!0},469:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return o}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var p=b.a.createContext({}),O=function(e){var t=b.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},j=function(e){var t=O(e.components);return b.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},m=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),j=O(a),m=n,o=j["".concat(c,".").concat(m)]||j[m]||s[m]||r;return a?b.a.createElement(o,l(l({ref:t},p),{},{components:a})):b.a.createElement(o,l({ref:t},p))}));function o(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var p=2;p<r;p++)c[p]=a[p];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);