(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{153:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),l=t(162),r=t(158),i=(t(163),t(181)),s=t(154),c=t(160),m=t(188),u=t.n(m),g=t(146),d=t.n(g),p=function(){var e=Object(n.useState)(!1),a=e[0],t=e[1];return o.a.createElement(s.b,{query:"2068030508",render:function(e){var n,l,r=e.allDataJson.edges[0].node.detail.map(function(e,a){var t=e.name,n=e.icon,l=e.url;return o.a.createElement("li",{className:d.a.item},o.a.createElement("a",{href:l},o.a.createElement("img",{className:d.a.icon,src:n,alt:t})))});return o.a.createElement("nav",{className:u()(d.a.nav,(n={},n[d.a.open]=a,n))},o.a.createElement("div",{className:d.a.expandContainer,onClick:function(){return t(!a)}},o.a.createElement("div",{className:u()(d.a.expand,(l={},l[d.a.open]=a,l))})),o.a.createElement("ul",{className:d.a.items},o.a.createElement("li",{className:d.a.item},o.a.createElement(c.Link,{to:"about",smooth:!0,duration:500},"About")),o.a.createElement("li",{className:d.a.item},o.a.createElement(c.Link,{to:"work",smooth:!0,duration:500},"Work")),o.a.createElement("li",{className:d.a.item},o.a.createElement(c.Link,{to:"projects",smooth:!0,duration:500,offset:-20},"Projects")),o.a.createElement("li",{className:d.a.item},o.a.createElement(c.Link,{to:"skills",smooth:!0,duration:500,offset:-40},"Skills")),r))},data:i})},E=t(189),h=t(165),f=t.n(h),y=function(){return o.a.createElement(s.b,{query:"3358035384",render:function(e){var a=e.allDataJson.edges[0].node,t=a.title,n=a.description;return o.a.createElement(c.Element,{name:"about"},o.a.createElement("section",null,o.a.createElement(f.a,{animateOnce:!0,animateIn:"zoomIn"},o.a.createElement("h2",null,"[ ",t," ]")),o.a.createElement(f.a,{animateOnce:!0,animateIn:"fadeInUp",delay:250},o.a.createElement("img",{className:"faceball",src:"images/me.jpg",alt:"Eric Kramer"}),o.a.createElement("p",null,n))))},data:E})},k=t(190),b=t(147),v=t.n(b),w=function(){return o.a.createElement(s.b,{query:"253347352",render:function(e){var a=e.allDataJson.edges[0].node,t=a.title,n=a.detail.map(function(e,a){var t=e.url,n=e.logo,l=e.name,r=e.description;return o.a.createElement(f.a,{animateOnce:!0,animateIn:"fadeInUp"},o.a.createElement("li",{className:v.a.job,key:a},o.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{className:v.a.logo,src:n,alt:l}),o.a.createElement("p",null,r))))});return o.a.createElement(c.Element,{name:"work"},o.a.createElement("section",null,o.a.createElement(f.a,{animateOnce:!0,animateIn:"zoomIn"},o.a.createElement("h2",null,"[ ",t," ]")),o.a.createElement("ul",{className:"responsive-grid-container"},n)))},data:k})},N=t(191),S=t(148),j=t.n(S),x=function(){return o.a.createElement(s.b,{query:"2562515410",render:function(e){var a=e.allDataJson.edges[0].node,t=a.title,n=a.detail.map(function(e,a){var t=e.url,n=e.image,l=e.name,r=e.description;return o.a.createElement(f.a,{animateOnce:!0,animateIn:"fadeInUp"},o.a.createElement("li",{className:j.a.project,key:a},o.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{className:j.a.image,src:n,alt:l}),o.a.createElement("p",null,r))))});return o.a.createElement(c.Element,{name:"projects"},o.a.createElement("section",null,o.a.createElement(f.a,{animateOnce:!0,animateIn:"zoomIn"},o.a.createElement("h2",null,"[ ",t," ]")),o.a.createElement("ul",{className:"responsive-grid-container"},n)))},data:N})},I=t(192),R=t(149),D=t.n(R),M=function(){return o.a.createElement(s.b,{query:"1816786083",render:function(e){var a=e.allDataJson.edges[0].node,t=a.title,n=a.detail.map(function(e,a){var t=e.url,n=e.logo,l=e.name,r=e.description;return o.a.createElement(f.a,{animateOnce:!0,animateIn:"fadeInUp"},o.a.createElement("li",{className:D.a.skill,key:a},o.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{className:D.a.logo,src:n,alt:l}),o.a.createElement("p",null,r))))});return o.a.createElement(c.Element,{name:"skills"},o.a.createElement("section",null,o.a.createElement(f.a,{animateOnce:!0,animateIn:"zoomIn"},o.a.createElement("h2",null,"[ ",t," ]")),o.a.createElement("ul",{className:"responsive-grid-container"},n)))},data:I})};t(150),a.default=function(){return o.a.createElement(l.a,null,o.a.createElement(r.a,{title:"Eric Kramer",keywords:["Eric Kramer"]}),o.a.createElement(p,null),o.a.createElement(y,null),o.a.createElement(w,null),o.a.createElement(x,null),o.a.createElement(M,null))}},154:function(e,a,t){"use strict";t.d(a,"b",function(){return m});var n=t(0),o=t.n(n),l=t(4),r=t.n(l),i=t(33),s=t.n(i);t.d(a,"a",function(){return s.a});t(155);var c=o.a.createContext({}),m=function(e){return o.a.createElement(c.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},155:function(e,a,t){var n;e.exports=(n=t(157))&&n.default||n},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Eric Kramer",description:"#FullStackDeveloper #Musician #Technologist"}}}}},157:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),o=t.n(n),l=t(4),r=t.n(l),i=t(55),s=t(2),c=function(e){var a=e.location,t=s.default.getResourcesForPathnameSync(a.pathname);return t?o.a.createElement(i.a,Object.assign({location:a,pageResources:t},t.json)):null};c.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},a.default=c},158:function(e,a,t){"use strict";var n=t(159),o=t(0),l=t.n(o),r=t(4),i=t.n(r),s=t(166),c=t.n(s);function m(e){var a=e.description,t=e.lang,o=e.meta,r=e.keywords,i=e.title,s=n.data.site,m=a||s.siteMetadata.description;return l.a.createElement(c.a,{htmlAttributes:{lang:t},title:i,titleTemplate:""+s.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:i},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:m}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(o)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},a.a=m},159:function(e){e.exports={data:{site:{siteMetadata:{title:"Eric Kramer",description:"#FullStackDeveloper #Musician #Technologist",author:"Eric Kramer"}}}}},162:function(e,a,t){"use strict";var n=t(0),o=t.n(n),l=t(4),r=t.n(l),i=t(156),s=t(154),c=t(143),m=t.n(c),u=function(){return o.a.createElement(s.b,{query:"3978990474",render:function(e){var a=e.site.siteMetadata,t=a.title,n=a.description;return o.a.createElement("header",null,o.a.createElement("video",{id:"background-vid",src:"/images/clouds.mov",poster:"/images/clouds.png",loop:!0,autoPlay:!0,muted:!0}),o.a.createElement("div",{className:"gradient"}),o.a.createElement("div",{className:"vignette"}),o.a.createElement("h1",{className:m.a.title},t),o.a.createElement("h2",{className:m.a.description},n))},data:i})},g=(t(144),function(e){var a=e.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(u,null),o.a.createElement("main",null,a),o.a.createElement("footer",null,"© ",(new Date).getFullYear()))});g.propTypes={children:r.a.node.isRequired};a.a=g},181:function(e){e.exports={data:{allDataJson:{edges:[{node:{title:"Links",detail:[{name:"Github",icon:"/icons/github.svg",url:"https://github.com/theerickramer"},{name:"LinkedIn",icon:"/icons/linkedin.svg",url:"https://linkedin.com/in/theerickramer"},{name:"Soundcloud",icon:"/icons/soundcloud.svg",url:"https://soundcloud.com/theerickramer"}]}}]}}}},189:function(e){e.exports={data:{allDataJson:{edges:[{node:{title:"About",description:"As a kid I dabbled in making text based adventure games, but my first real exposure to code was through my studies of music technology at NYU. After several years of working in the music industry and playing in a band, I decided to take my interest in programming to the next level. After much self-learning, I eventually enrolled in General Assembly's Web Development Immersive program, where I spent around 12 hours a day for 3 months absorbing all the knowledge my brain could possibly hold. I am now a full stack developer, ready to build awesome stuff and still hungry to learn. "}}]}}}},190:function(e){e.exports={data:{allDataJson:{edges:[{node:{title:"Work",detail:[{name:"The Knot",description:"Software Engineer - Guest List Manager Application",logo:"/logos/the-knot.png",url:"https://www.theknot.com/gs/guest-list"},{name:"Showtime",description:"Senior Front End Developer",logo:"/logos/showtime.png",url:"https://www.sho.com"},{name:"Kaplan Test Prep",description:"Front End Developer",logo:"/logos/Kaplan.png",url:"https://www.kaptest.com"}]}}]}}}},191:function(e){e.exports={data:{allDataJson:{edges:[{node:{title:"Projects",detail:[{name:"RandoMOMA",description:"Random images from the MOMA collection",image:"/images/randomoma.png",url:"http://randomoma.herokuapp.com"},{name:"Hotlinks",description:"All the hottest links on the internet",image:"/images/hotlinks.png",url:"http://hothotlinks.herokuapp.com"},{name:"Recloud",description:"A Soundcloud powered DJ app",image:"/images/recloud.png",url:"http://recloud.audio"},{name:"Toneluster",description:"A music technology Wordpress blog",image:"/images/toneluster.png",url:"http://toneluster.com"}]}}]}}}},192:function(e){e.exports={data:{allDataJson:{edges:[{node:{title:"Skills",detail:[{name:"Angular",logo:"/logos/angular.png"},{name:"AWS",logo:"/logos/aws_logo_smile_1200x630.png"},{name:"Babel",logo:"/logos/Babel.png"},{name:"CSS",logo:"/logos/CSS-Logo.png"},{name:"CSS Modules",logo:"/logos/css-modules.png"},{name:"Express",logo:"/logos/express.jpeg"},{name:"Gatsby",logo:"/logos/gatsby.png"},{name:"Git",logo:"/logos/git.png"},{name:"Github",logo:"/logos/Octocat.png"},{name:"Gulp",logo:"/logos/Gulp.png"},{name:"Heroku",logo:"/logos/heroku.png"},{name:"HTML5",logo:"/logos/html5.png"},{name:"Jasmine + Karma",logo:"/logos/jasmine+karma.png"},{name:"Javascript",logo:"/logos/js.jpg"},{name:"Jest",logo:"/logos/jest.png"},{name:"jQuery",logo:"/logos/jquery-mark-light.gif"},{name:"MobX",logo:"/logos/mobx.png"},{name:"MongoDB",logo:"/logos/mongodb-logo-rgb-j6w271g1xn.jpg"},{name:"Netlify",logo:"/logos/netlify.png"},{name:"NextJS",logo:"/logos/next.png"},{name:"Node",logo:"/logos/nodejs.png"},{name:"Python",logo:"/logos/python-logo-master-v3-TM.png"},{name:"React",logo:"/logos/react.png"},{name:"Redux",logo:"/logos/redux-logo-landscape.png"},{name:"Responsive CSS",logo:"/logos/Responsive.png"},{name:"RSpec",logo:"/logos/rspec.jpg"},{name:"Ruby",logo:"/logos/Ruby_logo-1024px.png"},{name:"Ruby On Rails",logo:"/logos/Ruby_On_Rails_Logo.png"},{name:"SASS",logo:"/logos/Sass.png"},{name:"Styled Components",logo:"/logos/styled-components.png"},{name:"Vue",logo:"/logos/vue.png"},{name:"Webpack",logo:"/logos/webpack.png"}]}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-bcec05beafca61cbd501.js.map