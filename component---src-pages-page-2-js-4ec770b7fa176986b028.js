(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{150:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(153),c=a(161),o=a(157);t.default=function(){return r.a.createElement(c.a,null,r.a.createElement(o.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.a,{to:"/"},"Go back to the homepage"))}},153:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(33),l=a.n(o);a.d(t,"a",function(){return l.a});a(154);var u=r.a.createContext({}),s=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},154:function(e,t,a){var n;e.exports=(n=a(156))&&n.default||n},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Eric Kramer",description:"#FullStackDeveloper #Musician #Technologist"}}}}},156:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(55),l=a(2),u=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};u.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=u},157:function(e,t,a){"use strict";var n=a(158),r=a(0),i=a.n(r),c=a(4),o=a.n(c),l=a(165),u=a.n(l);function s(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,o=e.title,l=n.data.site,s=t||l.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:a},title:o,titleTemplate:""+l.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:s}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})}s.defaultProps={lang:"en",meta:[],keywords:[],description:""},s.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=s},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Eric Kramer",description:"#FullStackDeveloper #Musician #Technologist",author:"Eric Kramer"}}}}},161:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(155),l=a(153),u=function(){return r.a.createElement(l.b,{query:"3978990474",render:function(e){var t=e.site.siteMetadata,a=t.title,n=t.description;return r.a.createElement("header",null,r.a.createElement("video",{id:"background-vid",src:"clouds-timelapse.mp4",loop:!0,autoPlay:!0,muted:!0}),r.a.createElement("div",{className:"gradient"}),r.a.createElement("div",{className:"vignette"}),r.a.createElement("h1",null,a),r.a.createElement("h2",null,n))},data:o})},s=(a(143),function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,null),r.a.createElement("main",null,t),r.a.createElement("footer",null,"© ",(new Date).getFullYear()))});s.propTypes={children:c.a.node.isRequired};t.a=s}}]);
//# sourceMappingURL=component---src-pages-page-2-js-4ec770b7fa176986b028.js.map