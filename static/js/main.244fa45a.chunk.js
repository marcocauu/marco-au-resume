(this["webpackJsonpmarco-au-resume"]=this["webpackJsonpmarco-au-resume"]||[]).push([[0],{41:function(e){e.exports=JSON.parse('{"vancouver":"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/74b15967880779.5b49323a6f93d.jpg"}')},43:function(e){e.exports=JSON.parse('{"hello":"Hello, my name is","name":"Marco Au","aboutMe":"About Me","scroll":"Scroll","kenting":"Kenting, Taiwan","images":{"vancouver":"https://www.gtreview.com/wp-content/uploads/2015/01/Vancouver-Canada-Skyline-Sunset.jpg"},"description":["I am a software engineer who was born and raised in Vancouver, BC Canada. Most of my professional experience is with Javascript and React, but I am always looking to learn other frameworks and languages.","Although I have not travelled much, I have greatly enjoyed travelling in the few times that I have went. My most recent trip to Taiwan was a bit of culture shock as it was my first time in Asia but I very much enjoyed experiencing Taiwanese culture and will definitely go again.","In my spare time, I enjoy weightlifting, drawing and cooking new recipes for my family to try. Recently, I have taken up running as a result of the quarantine and have been enjoying it ever since!"],"skillsEducation":"Skills & Education","skillTitle":"Skills","skills":[{"title":"Server-side","frameworks":["Node.js","GraphQL","Java"]},{"title":"Client-side","frameworks":["JavaScript","React","TypeScript","Storybook","Dust","ES6"]},{"title":"Testing","frameworks":["Jest","Enzyme","React Testing Library"]},{"title":"Build Tools","frameworks":["npm","yarn","Webpack"]},{"title":"Automation, Cloud & Misc","frameworks":["Jenkins, Github, Jira"]}],"educationTitle":"Education","programTitle":"Program:","concentrationTitle":"Concentration:","schools":[{"name":"British Columbia Institute of Technology","major":"Computer Systems Technology Certificate","concentration":"General Computer Science","yearAttended":"(2017 - 2020)"},{"name":"Simon Fraser University","major":"Bachelor of Business Administration","concentration":"Human Resources","yearAttended":"(2013 - 2017)"}],"experience":"Experience","experienceList":[{"company":"realtor.com","location":"Richmond, BC Canada","title":"Software Engineer","date":"January 2020 - May 2020","summary":"Contributed to a new SaaS product for listing Facebook ads, Reduced codebase by developing reusable components, Mentored co-op engineers","icon":"https://static.rdc.moveaws.com/touch-icon.png"},{"company":"realtor.com","location":"Richmond, BC Canada","title":"Co-op Software Engineer","date":"April 2018 - August 2019","summary":"Implemented GraphQL endpoints with senior developers, Learned CI/CD/Jenkins technologies, Helped transitioned codebase from Dust to React","icon":"https://static.rdc.moveaws.com/touch-icon.png"},{"company":"BCAA","location":"Burnaby, BC Canada","title":"Insurance Advisor","date":"August 2016 - January 2017","summary":"Administered roadside assistance and travel insurnace, Maintained customer profiles and Audited financial statements.","icon":"https://media.glassdoor.com/sqll/200024/bcaa-squarelogo-1423868030338.png"}],"contact":"Contact","contactMe":["This project was done using React and tested using Jest/React Testing Library.","If you would like to see the source code or view my LinkedIn profile, please click on the links below."],"inquiries":"For any inquiries, please feel free to contact me through my email ","viewOnGithub":"View on Github","githubUrl":"https://github.com/marcocauu/marco-au-resume","viewLinkedin":"View my LinkedIn","linkedinUrl":"https://www.linkedin.com/in/marcoauu/","scrollToTop":"Scroll to Top"}')},44:function(e){e.exports=JSON.parse('{"colors":{"beige":"#edeaea","plum":"#a179af","darkPlum":"#3d3547"},"fontFamily":{"robotoMono":"\'Roboto Mono\', monospace"}}')},49:function(e,n,t){e.exports=t(89)},54:function(e,n,t){},76:function(e,n,t){},89:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(14),i=t.n(o),c=(t(54),t(45)),l=t(46),u=r.a.createContext({}),m=function(e){var n=e.children,t=Object(l.a)(e,["children"]);return r.a.createElement(u.Provider,{value:Object(c.a)({},t)},n)},s=t(23),d=function(e){var n=e.children;return r.a.createElement(s.ParallaxProvider,null,n)},f=t(2),h=function(e){var n=e.children,t=e.theme;return r.a.createElement(f.b,{theme:t},n)},p=t(3);function g(){var e=Object(p.a)(["\n  background-color: ",";\n  font-family: ",";\n"]);return g=function(){return e},e}var v=f.c.div(g(),(function(e){return e.theme.colors.beige}),(function(e){return e.theme.fontFamily.robotoMono})),b=function(e){var n=e.children;return r.a.createElement(v,null,n)};function E(){var e=Object(p.a)(["\n  height: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ",";\n"]);return E=function(){return e},e}var w=f.c.div(E(),(function(e){var n=e.height;return"".concat(n,"vh")}),(function(e){var n=e.darkMode,t=e.theme.colors.darkPlum;return n?t:"inherit"}));function k(){var e=Object(p.a)(["\n  position: absolute;\n  font-size: ",";\n  text-align: center;\n  margin-block-start: 0;\n"]);return k=function(){return e},e}var y=f.c.h1(k(),(function(e){var n=e.fontSize;return"".concat(n,"vw")}));function x(){var e=Object(p.a)(["\n  width: 60%;\n  margin: 2em 2em 2em 8em;\n\n  @media (max-width: 414px) {\n    width: 100%;\n    margin: 2em;\n  }\n"]);return x=function(){return e},e}var j=f.c.div(x()),O=function(e){return e.description.map((function(e,n){return r.a.createElement("p",{key:n},e)}))},C=function(e){var n=e.description,t=void 0===n?[]:n,a=e.pretext;return r.a.createElement(j,null,a&&r.a.createElement(r.a.Fragment,null,a),r.a.createElement(O,{description:t}))};function T(){var e=Object(p.a)(["\n  max-height: 70%;\n  max-width: 70%;\n"]);return T=function(){return e},e}function S(){var e=Object(p.a)(["\n  font-style: italic;\n"]);return S=function(){return e},e}function M(){var e=Object(p.a)(["\n  width: 40%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  @media (max-width: 414px) {\n    display: none;\n  }\n"]);return M=function(){return e},e}var A=f.c.div(M()),I=f.c.p(S()),B=f.c.img(T()),L=function(e){var n=e.text,t=e.path;return r.a.createElement(A,null,r.a.createElement(B,{src:t}),r.a.createElement(I,null,n))};function J(){var e=Object(p.a)(["\n  border-top: ",";\n  border-bottom: ",";\n  padding: 0.25em;\n  font-style: italic;\n  color: ",";\n"]);return J=function(){return e},e}var R=Object(f.c)(y)(J(),(function(e){var n=e.theme.colors.plum;return"0.1em solid ".concat(n)}),(function(e){var n=e.theme.colors.plum;return"0.1em solid ".concat(n)}),(function(e){var n=e.darkMode,t=e.theme.colors.beige;return n?t:"inherit"})),N=function(e){var n=e.headerText,t=e.darkMode;return r.a.createElement(w,{height:50,darkMode:t},r.a.createElement(R,{fontSize:7,darkMode:t},n))};N.defaultProps={darkMode:!1};var P=function(e){var n=e.headerText,t=e.darkMode,a=e.contentHeight,o=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,{headerText:n,darkMode:t}),r.a.createElement(w,{height:a,darkMode:t},o))};function F(){var e=Object(p.a)(["\n  position: absolute;\n  bottom: 5em;\n  left: 50%;\n  transform: translateX(-50%);\n  color: #3d3547;\n  font-weight: 500;\n"]);return F=function(){return e},e}function H(){var e=Object(p.a)(["\n  color: ",";\n"]);return H=function(){return e},e}P.defaultProps={darkMode:!1,contentHeight:100};var z=f.c.span(H(),(function(e){return e.theme.colors.plum})),G=f.c.p(F()),U=function(){var e=Object(a.useContext)(u).language;return r.a.createElement(w,{height:100},r.a.createElement(y,{fontSize:9},e.hello," ",r.a.createElement(z,null,e.name)),r.a.createElement(G,null,e.scroll))},q=function(){var e=Object(a.useContext)(u),n=e.language,t=e.basename;return r.a.createElement(P,{headerText:n.aboutMe,contentHeight:100},r.a.createElement(C,{description:n.description}),r.a.createElement(L,{text:n.kenting,path:"".concat(t,"/images/kenting.jpg")}))};t(76);function V(){var e=Object(p.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n"]);return V=function(){return e},e}function D(){var e=Object(p.a)(["\n  width: 100%;\n  overflow-x: hidden;\n\n  &:before {\n    position: fixed;\n    display: inline-block;\n    padding: 4px;\n    top: 10px;\n    left: 50%;\n    text-align: center;\n    letter-spacing: 0.05em;\n    text-transform: uppercase;\n    background-color: rgba(255, 255, 255, 0.1);\n    border-radius: 3px;\n    color: white;\n    z-index: 1000;\n    transform: translate3d(-50%, 0, 0);\n  }\n"]);return D=function(){return e},e}var W=f.c.div(D()),_=f.c.div(V()),Q=function(e){var n=e.imageSrc,t=e.height;return r.a.createElement(W,null,r.a.createElement(_,null,r.a.createElement(s.ParallaxBanner,{style:{height:"".concat(t,"vh")},className:"bannerBg",layers:[{image:n,amount:.2}]})))};function K(){var e=Object(p.a)(["\n  width: 50%;\n  margin-left: 0px;\n  border: 1px solid #a179af;\n  background-color: ",";\n"]);return K=function(){return e},e}function X(){var e=Object(p.a)(["\n  color: ",";\n  font-weight: ",";\n\n  @media (max-width: 414px) {\n    font-size: 0.75em;\n  }\n"]);return X=function(){return e},e}function $(){var e=Object(p.a)(["\n  color: ",";\n  font-style: italic;\n  letter-spacing: 0.3em;\n  font-weight: bold;\n\n  @media (max-width: 414px) {\n    font-size: 0.75em;\n  }\n"]);return $=function(){return e},e}function Y(){var e=Object(p.a)(["\n  width: 50%;\n  padding: 2em 2em 2em 2em;\n\n  @media (max-width: 414px) {\n    width: 75%;\n    padding: 1em;\n  }\n"]);return Y=function(){return e},e}Q.defaultProps={height:100};var Z=f.c.div(Y()),ee=f.c.h2($(),(function(e){return e.theme.colors.plum})),ne=f.c.p(X(),(function(e){return e.theme.colors.beige}),(function(e){return e.bold?"bold":"initial"})),te=f.c.hr(K(),(function(e){return e.theme.colors.plum})),ae=function(e){var n=e.skills,t=e.title;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ee,null,t.toUpperCase()),n.map((function(e,n){return r.a.createElement("div",{key:n},r.a.createElement(ne,{style:{color:"white"},bold:!0},"".concat(e.title,":")),r.a.createElement(ne,null,e.frameworks.join(", ")))})))},re=function(e){var n=e.skills,t=e.title;return r.a.createElement(Z,null,r.a.createElement(ae,{skills:n,title:t}))};re.defaultProps={skills:[],title:""};var oe=function(e){var n=e.title,t=e.major,a=e.concentration,o=e.education;return r.a.createElement(Z,null,function(e){var n=e.title,t=e.major,a=e.concentration,o=e.education;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ee,null,n.toUpperCase()),o.map((function(e,n){return r.a.createElement("div",{key:n},r.a.createElement(ne,{bold:!0},e.name),r.a.createElement(ne,null,e.yearAttended),r.a.createElement(ne,null,t," ",e.major),r.a.createElement(ne,null,a," ",e.concentration),n!==o.length-1&&r.a.createElement(te,null))})))}({title:n,major:t,concentration:a,education:o}))};function ie(){var e=Object(p.a)(["\n  justify-content: flex-start;\n  align-items: flex-start;\n  align-content: space-evenly;\n  padding: 2em 12em 2em 12em;\n\n  @media (max-width: 414px) {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 0em;\n  }\n"]);return ie=function(){return e},e}oe.defaultProps={title:"",major:"",concentration:"",education:[]};var ce=Object(f.c)(w)(ie()),le=function(){var e=Object(a.useContext)(u).language;return r.a.createElement(P,{headerText:e.skillsEducation,contentHeight:110,darkMode:!0},r.a.createElement(ce,{height:110,darkMode:!0},r.a.createElement(re,{title:e.skillTitle,skills:e.skills}),r.a.createElement(oe,{title:e.educationTitle,major:e.programTitle,concentration:e.concentrationTitle,education:e.schools})))},ue=t(27);t(86);function me(){var e=Object(p.a)(["\n  border-radius: 60px;\n  height: 100%;\n  width: 100%;\n"]);return me=function(){return e},e}var se=f.c.img(me()),de=function(e){var n=e.iconLink;return r.a.createElement(se,{src:n})},fe=function(e){var n=e.experienceList,t=Object(a.useContext)(f.a).colors,o=t.plum,i=t.beige;return r.a.createElement(r.a.Fragment,null,n.map((function(e,n){return r.a.createElement(ue.VerticalTimelineElement,{key:n,className:"vertical-timeline-element--work",contentStyle:{background:o,color:i},contentArrowStyle:{borderRight:"7px solid  ".concat(o)},date:e.date,iconStyle:{background:"rgb(33, 150, 243)",color:i,display:"flex",alignItems:"center",justifyContent:"center"},icon:r.a.createElement(de,{iconLink:e.icon})},r.a.createElement("h3",{className:"vertical-timeline-element-title"},e.title),r.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},e.company),r.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},e.location),r.a.createElement("p",null,e.summary))})))},he=function(){var e=Object(a.useContext)(u).language;return r.a.createElement(P,{headerText:e.experience,contentHeight:130,darkMode:!0},r.a.createElement(ue.VerticalTimeline,null,r.a.createElement(fe,{experienceList:e.experienceList})))},pe=t(104),ge=t(106),ve=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(){window.open(e,n?"_blank":"")}},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"smooth";return function(){return window.scrollTo({top:e,behavior:n})}};function Ee(){var e=Object(p.a)(["\n  align-content: row;\n"]);return Ee=function(){return e},e}function we(){var e=Object(p.a)(["\n  text-align: center;\n  flex-direction: column;\n"]);return we=function(){return e},e}var ke=f.c.div(we()),ye=f.c.div(Ee()),xe=function(){var e,n=Object(a.useContext)(u).language,t=Object(a.useContext)(f.a).colors.plum,o=(e=t,Object(pe.a)((function(n){return{button:{margin:n.spacing(1),fontFamily:"inherit","&:hover":{backgroundColor:e,color:"white"}},input:{display:"none"}}}))());return r.a.createElement(P,{headerText:n.contact,contentHeight:50},r.a.createElement(ke,null,r.a.createElement("div",null,r.a.createElement("p",null,n.inquiries,r.a.createElement("a",{href:"mailto:marco.auu@live.com"},"here"),"."),n.contactMe.map((function(e,n){return r.a.createElement("p",{key:n},e)}))),r.a.createElement(ye,null,r.a.createElement(ge.a,{id:"viewOnGithubButton",variant:"outlined",className:o.button,onClick:ve(n.githubUrl,!0)},n.viewOnGithub),r.a.createElement(ge.a,{id:"viewLinkedinButton",variant:"outlined",className:o.button,onClick:ve(n.linkedinUrl,!0)},n.viewLinkedin)),r.a.createElement(ye,null,r.a.createElement(ge.a,{id:"scrollToTopButton",className:o.button,onClick:be()},n.scrollToTop))))},je=t(41),Oe=function(){return r.a.createElement(d,null,r.a.createElement(b,null,r.a.createElement(U,null),r.a.createElement(q,null),r.a.createElement(Q,{imageSrc:je.vancouver,height:50}),r.a.createElement(le,null),r.a.createElement(he,null),r.a.createElement(xe,null)))},Ce=t(42),Te=t(5),Se=function(){var e=Object(a.useContext)(u).basename;return r.a.createElement(Ce.a,{basename:e},r.a.createElement(Te.a,{exact:!0,path:"/",component:Oe}))},Me=t(43),Ae=t(44),Ie=function(e){var n=e.basename;return r.a.createElement(m,{basename:n,language:Me},r.a.createElement(h,{theme:Ae},r.a.createElement(Se,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ie,{basename:"/marco-au-resume"})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.244fa45a.chunk.js.map