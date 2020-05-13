(this["webpackJsonpmarco-au-resume"]=this["webpackJsonpmarco-au-resume"]||[]).push([[0],{42:function(e){e.exports=JSON.parse('{"hello":"Hello, my name is","name":"Marco Au","aboutMe":"About Me","scroll":"Scroll","kenting":"Kenting, Taiwan","images":{"vancouver":"https://www.gtreview.com/wp-content/uploads/2015/01/Vancouver-Canada-Skyline-Sunset.jpg"},"description":["I am a software engineer who was born and raised in Vancouver, BC Canada. Most of my professional experience is with Javascript and React, but I am always looking to learn other frameworks and languages.","Although I have not travelled much, I have greatly enjoyed travelling in the few times that I have went. My most recent trip to Taiwan was a bit of culture shock as it was my first time in Asia but I very much enjoyed experiencing Taiwanese culture and will definitely go again.","In my spare time, I enjoy weightlifting, drawing and cooking new recipes for my family to try. Recently, I have taken up running as a result of the quarantine and have been enjoying it ever since!"],"skillsEducation":"Skills & Education","skillTitle":"Skills","skills":[{"title":"Server-side","frameworks":["Node.js","GraphQL","Java"]},{"title":"Client-side","frameworks":["JavaScript","React","TypeScript","Storybook","Dust","ES6"]},{"title":"Testing","frameworks":["Jest","Enzyme","React Testing Library"]},{"title":"Build Tools","frameworks":["npm","yarn","Webpack"]},{"title":"Automation, Cloud & Misc","frameworks":["Jenkins, Github, Jira"]}],"educationTitle":"Education","major":"Major:","concentration":"Concentration:","schools":[{"name":"British Columbia Institute of Technology","major":"Computer Systems Technology Certificate","concentration":"General Computer Science","yearAttended":"(2017 - 2020)"},{"name":"Simon Fraser University","major":"Bachelor of Business Administration","concentration":"Human Resources","yearAttended":"(2013 - 2017)"}],"experience":"Experience","experienceList":[{"company":"realtor.com","location":"Richmond, BC Canada","title":"Software Engineer","date":"January 2020 - May 2020","summary":"Contributed to a new SaaS product for listing Facebook ads, Reduced codebase by developing reusable components, Mentored co-op engineers","icon":"https://static.rdc.moveaws.com/touch-icon.png"},{"company":"realtor.com","location":"Richmond, BC Canada","title":"Co-op Software Engineer","date":"April 2018 - August 2019","summary":"Implemented GraphQL endpoints with senior developers, Learned CI/CD/Jenkins technologies, Helped transitioned codebase from Dust to React","icon":"https://static.rdc.moveaws.com/touch-icon.png"},{"company":"BCAA","location":"Burnaby, BC Canada","title":"Insurance Advisor","date":"August 2016 - January 2017","summary":"Administered roadside assistance and travel insurnace, Maintained customer profiles and Audited financial statements.","icon":"https://media.glassdoor.com/sqll/200024/bcaa-squarelogo-1423868030338.png"}],"contact":"Contact","contactMe":["This project was done using React and tested using Jest/React Testing Library.","If you would like to see the source code or view my LinkedIn profile, please click on the links below."],"inquiries":"For any inquiries, please feel free to contact me through my email ","viewOnGithub":"View on Github","githubUrl":"https://github.com/marcocauu/marco-au-resume","viewLinkedin":"View my LinkedIn","linkedinUrl":"https://www.linkedin.com/in/marcoauu/"}')},43:function(e){e.exports=JSON.parse('{"colors":{"beige":"#edeaea","plum":"#a179af","darkPlum":"#3d3547"},"fontFamily":{"robotoMono":"\'Roboto Mono\', monospace"}}')},48:function(e,n,t){e.exports=t(88)},53:function(e,n,t){},75:function(e,n,t){},88:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(14),o=t.n(i),c=(t(53),t(44)),l=t(45),u=r.a.createContext({}),m=function(e){var n=e.children,t=Object(l.a)(e,["children"]);return r.a.createElement(u.Provider,{value:Object(c.a)({},t)},n)},s=t(23),d=function(e){var n=e.children;return r.a.createElement(s.ParallaxProvider,null,n)},f=t(2),h=function(e){var n=e.children,t=e.theme;return r.a.createElement(f.b,{theme:t},n)},p=t(3);function g(){var e=Object(p.a)(["\n  background-color: ",";\n  font-family: ",";\n"]);return g=function(){return e},e}var b=f.c.div(g(),(function(e){return e.theme.colors.beige}),(function(e){return e.theme.fontFamily.robotoMono})),v=function(e){var n=e.children;return r.a.createElement(b,null,n)};function w(){var e=Object(p.a)(["\n  height: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ",";\n"]);return w=function(){return e},e}v.defaultProps={backgroundColor:"white"};var E=f.c.div(w(),(function(e){var n=e.height;return"".concat(n,"vh")}),(function(e){var n=e.darkMode,t=e.theme.colors;return n?t.darkPlum:"inherit"}));function y(){var e=Object(p.a)(["\n  position: absolute;\n  font-size: ",";\n  text-align: center;\n  margin-block-start: 0;\n"]);return y=function(){return e},e}var k=f.c.h1(y(),(function(e){return"".concat(e.fontSize,"vw")}));function x(){var e=Object(p.a)(["\n  width: ",";\n  padding: ",";\n\n  @media (max-width: 414px) {\n    width: 100%;\n    padding: ",";\n  }\n"]);return x=function(){return e},e}var j=f.c.div(x(),(function(e){return e.width}),(function(e){return e.disablePadding?"0":"2em 2em 2em 8em"}),(function(e){return e.disablePadding?"0":"2em"})),O=function(e){return e.description.map((function(e,n){return r.a.createElement("p",{key:n},e)}))},C=function(e){var n=e.description,t=void 0===n?[]:n,a=e.pretext,i=e.width,o=e.disablePadding;return r.a.createElement(j,{width:i,disablePadding:o},a&&r.a.createElement(r.a.Fragment,null,a),r.a.createElement(O,{description:t}))};function S(){var e=Object(p.a)(["\n  max-height: 70%;\n  max-width: 70%;\n"]);return S=function(){return e},e}function M(){var e=Object(p.a)(["\n  font-style: italic;\n"]);return M=function(){return e},e}function T(){var e=Object(p.a)(["\n  width: 40%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  @media (max-width: 414px) {\n    display: none;\n  }\n"]);return T=function(){return e},e}C.defaultProps={width:"100%",disablePadding:!1};var A=f.c.div(T()),I=f.c.p(M()),L=f.c.img(S()),B=function(e){var n=e.text,t=e.path;return r.a.createElement(A,null,r.a.createElement(L,{src:t}),r.a.createElement(I,null,n))};function P(){var e=Object(p.a)(["\n  position: absolute;\n  bottom: 5em;\n  left: 50%;\n  transform: translateX(-50%);\n  color: #3d3547;\n  font-weight: 500;\n"]);return P=function(){return e},e}function J(){var e=Object(p.a)(["\n  color: ",";\n"]);return J=function(){return e},e}var R=f.c.span(J(),(function(e){return e.theme.colors.plum})),F=f.c.p(P()),N=function(){var e=Object(a.useContext)(u).language;return r.a.createElement(E,{height:100},r.a.createElement(k,{fontSize:9},e.hello," ",r.a.createElement(R,null,e.name)),r.a.createElement(F,null,e.scroll))};function z(){var e=Object(p.a)(["\n  border-top: ",";\n  border-bottom: ",";\n  padding: 0.25em;\n  font-style: italic;\n  color: ",";\n"]);return z=function(){return e},e}var G=Object(f.c)(k)(z(),(function(e){var n=e.theme.colors;return"0.1em solid ".concat(n.plum)}),(function(e){var n=e.theme.colors;return"0.1em solid ".concat(n.plum)}),(function(e){var n=e.darkMode,t=e.theme.colors;return n?t.beige:"inherit"})),U=function(e){var n=e.headerText,t=e.darkMode;return r.a.createElement(E,{height:50,darkMode:t},r.a.createElement(G,{fontSize:7,darkMode:t},n))};U.defaultProps={darkMode:!1};var q=function(){var e=Object(a.useContext)(u),n=e.language,t=e.basename;return r.a.createElement(E,{height:100},r.a.createElement(C,{description:n.description,width:"60%"}),r.a.createElement(B,{text:n.kenting,path:"".concat(t,"/images/kenting.jpg")}))};t(75);function V(){var e=Object(p.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n"]);return V=function(){return e},e}function D(){var e=Object(p.a)(["\n  width: 100%;\n  overflow-x: hidden;\n\n  &:before {\n    position: fixed;\n    display: inline-block;\n    padding: 4px;\n    top: 10px;\n    left: 50%;\n    text-align: center;\n    letter-spacing: 0.05em;\n    text-transform: uppercase;\n    background-color: rgba(255, 255, 255, 0.1);\n    border-radius: 3px;\n    color: white;\n    z-index: 1000;\n    transform: translate3d(-50%, 0, 0);\n  }\n"]);return D=function(){return e},e}var H=f.c.div(D()),W=f.c.div(V()),_=function(e){var n=e.imageSrc,t=e.height;return r.a.createElement(H,null,r.a.createElement(W,null,r.a.createElement(s.ParallaxBanner,{style:{height:"".concat(t,"vh")},className:"bannerBg",layers:[{image:n,amount:.2}]})))};function Q(){var e=Object(p.a)(["\n  width: 50%;\n  margin-left: 0px;\n  border: 1px solid #a179af;\n  background-color: ",";\n"]);return Q=function(){return e},e}function K(){var e=Object(p.a)(["\n  color: ",";\n  font-weight: ",";\n\n  @media (max-width: 414px) {\n    font-size: 0.75em;\n  }\n"]);return K=function(){return e},e}function X(){var e=Object(p.a)(["\n  color: ",";\n  font-style: italic;\n  letter-spacing: 0.3em;\n  font-weight: bold;\n\n  @media (max-width: 414px) {\n    font-size: 0.75em;\n  }\n"]);return X=function(){return e},e}function $(){var e=Object(p.a)(["\n  width: 50%;\n  padding: 2em 2em 2em 2em;\n\n  @media (max-width: 414px) {\n    width: 75%;\n    padding: 1em;\n  }\n"]);return $=function(){return e},e}_.defaultProps={height:100};var Y=f.c.div($()),Z=f.c.h2(X(),(function(e){return e.theme.colors.plum})),ee=f.c.p(K(),(function(e){return e.theme.colors.beige}),(function(e){return e.bold?"bold":"initial"})),ne=f.c.hr(Q(),(function(e){return e.theme.colors.plum})),te=function(e){var n=e.skills,t=e.title;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,null,t.toUpperCase()),n.map((function(e,n){return r.a.createElement("div",{key:n},r.a.createElement(ee,{style:{color:"white"},bold:!0},"".concat(e.title,":")),r.a.createElement(ee,null,e.frameworks.join(", ")))})))},ae=function(e){var n=e.skills,t=e.title;return r.a.createElement(Y,null,r.a.createElement(te,{skills:n,title:t}))},re=function(){var e=Object(a.useContext)(u).language;return r.a.createElement(Y,null,function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,null,e.educationTitle.toUpperCase()),e.schools.map((function(n,t){return r.a.createElement("div",{key:t},r.a.createElement(ee,{bold:!0},n.name),r.a.createElement(ee,null,n.yearAttended),r.a.createElement(ee,null,e.major," ",n.major),r.a.createElement(ee,null,e.concentration," ",n.concentration),t!==e.schools.length-1&&r.a.createElement(ne,null))})))}(e))};function ie(){var e=Object(p.a)(["\n  justify-content: flex-start;\n  align-items: flex-start;\n  align-content: space-evenly;\n  padding: 2em 12em 2em 12em;\n\n  @media (max-width: 414px) {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 0em;\n  }\n"]);return ie=function(){return e},e}var oe=Object(f.c)(E)(ie()),ce=function(){var e=Object(a.useContext)(u).language;return r.a.createElement(oe,{height:110,darkMode:!0},r.a.createElement(ae,{title:e.skillTitle,skills:e.skills}),r.a.createElement(re,null))},le=t(27);t(85);function ue(){var e=Object(p.a)(["\n  border-radius: 60px;\n  height: 100%;\n  width: 100%;\n"]);return ue=function(){return e},e}var me=f.c.img(ue()),se=function(e){var n=e.iconLink;return r.a.createElement(me,{src:n})},de=function(e){var n=e.experienceList,t=Object(a.useContext)(f.a).colors;return r.a.createElement(r.a.Fragment,null,n.map((function(e,n){return r.a.createElement(le.VerticalTimelineElement,{key:n,className:"vertical-timeline-element--work",contentStyle:{background:t.plum,color:t.beige},contentArrowStyle:{borderRight:"7px solid  ".concat(t.plum)},date:e.date,iconStyle:{background:"rgb(33, 150, 243)",color:t.beige,display:"flex",alignItems:"center",justifyContent:"center"},icon:r.a.createElement(se,{iconLink:e.icon})},r.a.createElement("h3",{className:"vertical-timeline-element-title"},e.title),r.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},e.company),r.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},e.location),r.a.createElement("p",null,e.summary))})))},fe=function(e){var n=e.experienceList;return r.a.createElement(E,{height:130,darkMode:!0},r.a.createElement(le.VerticalTimeline,null,r.a.createElement(de,{experienceList:n})))},he=t(103),pe=t(105),ge=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(){window.open(e,n?"_blank":"")}};function be(){var e=Object(p.a)(["\n  align-content: row;\n"]);return be=function(){return e},e}function ve(){var e=Object(p.a)(["\n  text-align: center;\n  flex-direction: column;\n"]);return ve=function(){return e},e}var we=Object(he.a)((function(e){return{button:{margin:e.spacing(1),fontFamily:"inherit"},input:{display:"none"}}})),Ee=Object(f.c)(E)(ve()),ye=f.c.div(be()),ke=function(){var e=Object(a.useContext)(u).language,n=we();return r.a.createElement(Ee,{height:50},r.a.createElement(C,{description:e.contactMe,width:"60%",disablePadding:!0,pretext:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,e.inquiries,r.a.createElement("a",{href:"mailto:marco.auu@live.com"},"here"),"."))}),r.a.createElement(ye,null,r.a.createElement(pe.a,{id:"viewOnGithubButton",variant:"outlined",className:n.button,onClick:ge(e.githubUrl,!0)},e.viewOnGithub),r.a.createElement(pe.a,{id:"viewLinkedinButton",variant:"outlined",className:n.button,onClick:ge(e.linkedinUrl,!0)},e.viewLinkedin)))},xe=function(){var e=Object(a.useContext)(u),n=e.language,t=e.theme;return r.a.createElement(h,{theme:t},r.a.createElement(d,null,r.a.createElement(v,null,r.a.createElement(N,null),r.a.createElement(U,{headerText:n.aboutMe}),r.a.createElement(q,null),r.a.createElement(_,{imageSrc:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/74b15967880779.5b49323a6f93d.jpg",height:50}),r.a.createElement(U,{headerText:n.skillsEducation,darkMode:!0}),r.a.createElement(ce,null),r.a.createElement(U,{headerText:n.experience,darkMode:!0}),r.a.createElement(fe,{experienceList:n.experienceList}),r.a.createElement(U,{headerText:n.contact}),r.a.createElement(ke,null))))},je=t(41),Oe=t(5),Ce=function(){var e=Object(a.useContext)(u).basename;return r.a.createElement(je.a,{basename:e},r.a.createElement(Oe.a,{exact:!0,path:"/",component:xe}))},Se=t(42),Me=t(43),Te=function(e){var n=e.basename;return r.a.createElement(m,{basename:n,language:Se,theme:Me},r.a.createElement(Ce,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Te,{basename:"/marco-au-resume"})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.7aa577ae.chunk.js.map