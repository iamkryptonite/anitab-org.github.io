(this["webpackJsonpanitab-org.github.io"]=this["webpackJsonpanitab-org.github.io"]||[]).push([[0],{104:function(e){e.exports=JSON.parse('{"sections":[{"title":"Contact Us","content":[{"par":"Having a question in your mind or thinking about getting started with open-source? We are here to help!"},{"par":"Feel free to post your doubts under #questions stream in our Zulip Chat @https://anitab-org.zulipchat.com and get them cleared by our open-source community."},{"par":"Each active project has its own discussion stream such as #vms, #mentorship-system, #portal, #bridge-in-tech and #STEM-diverse-tv."},{"par":"AnitaB.org Open Source is growing globally. Any feedback or improvement suggestions for our projects are most welcome."}]}]}')},105:function(e,t,o){e.exports=o(133)},110:function(e,t,o){},120:function(e,t,o){e.exports=o.p+"static/media/logo.45cc4ce0.png"},121:function(e,t,o){e.exports=o.p+"static/media/our-projects.b19b61ad.png"},129:function(e,t,o){e.exports=o.p+"static/media/about.4e44d31d.png"},132:function(e,t,o){e.exports=o.p+"static/media/contribute.552c3589.png"},133:function(e,t,o){"use strict";o.r(t);var r=o(0),a=o.n(r),n=o(26),i=o.n(n),l=(o(110),o(17)),c=o(3),s=o(78),u=o(39),m=o(38),p=o(2);function d(e,t,o,r){return a.a.createElement(s.a,{style:g.buttonContainer,underlayColor:"transparent",onPress:function(){return o(e)},accessible:!0,accessibilityLabel:r},a.a.createElement(m.a,{style:{borderBottomColor:t===e?"powderblue":"transparent",borderBottomWidth:2,alignSelf:"center"}},r))}var g=p.a.create({logoContainer:{flex:1},buttonContainer:{marginTop:25,marginLeft:40}}),h=function(e){var t=e.selected,r=e.setSelected,n=e.titles;return a.a.createElement(c.a,{style:{flexDirection:"row",width:"80%",borderBottomColor:"#FF0000",borderBottomWidth:1,alignContent:"center"}},a.a.createElement(s.a,{style:g.logoContainer,underlayColor:"transparent",onPress:function(){return r(0)},accessible:!0,accessibilityLabel:n[0]},a.a.createElement(u.a,{style:{height:50,width:100},source:o(120)})),d(1,t,r,n[1]),d(2,t,r,n[2]),d(3,t,r,n[3]),d(4,t,r,n[4]),d(5,t,r,n[5]))};var b,f=function(e){var t=e.source,o=e.overSource,r=e.url,n=e.height,i=void 0===n?null:n,c=e.width,s=void 0===c?null:c,m=e.isOver,p=void 0!==m&&m,d=a.a.useState(i),g=Object(l.a)(d,2),h=g[0],b=g[1],f=a.a.useState(s),y=Object(l.a)(f,2),w=y[0],E=y[1];a.a.useEffect((function(){u.a.getSize(t,(function(e,t){s&&!i?(E(s),b(t*(s/e))):!s&&i?(E(e*(i/t)),b(i)):(E(e),b(t))}))}),[s,i,t]);var v={height:h,width:w};return a.a.createElement("a",{href:r},a.a.createElement(u.a,{source:p&&o?o:t,style:v}))},y=function(e){return p.a.create({container:{flex:1,alignItems:"left",flexDirection:"right"===e?"row-reverse":"row",flexWrap:"wrap",marginTop:64},subContainer:{flex:1,alignItems:"left",flexDirection:"columns",flexGrow:1,minWidth:200},sectionImage:{paddingLeft:16,paddingRight:16},header:{flex:0,color:"#103B81",alignItems:"flex-start",fontWeight:"400",fontSize:32,paddingLeft:16,paddingRight:16,paddingBottom:0,width:"100%"},text:{flex:1,marginTop:32,paddingLeft:16,paddingRight:16,fontSize:18,flexGrow:1,fontWeight:200,color:"#103B81"}})},w=function(e){var t=e.title,o=e.image,r=e.content,n=e.imageSide,i=e.imageHeight,l=void 0===i?300:i,s=y(n);return a.a.createElement(c.a,{style:s.container},a.a.createElement(f,{source:o,height:l,style:s.sectionImage}),a.a.createElement(c.a,{style:s.subContainer},a.a.createElement(m.a,{style:s.header},t),r.map((function(e){return a.a.createElement(m.a,{style:s.text},e.par)}))))},E={sections:[{title:"Projects",image:{source:o(121)},content:[{par:"Our open source project are oriented to help not only women in tech but also increase diversity and inclusion in STEM. We have multiple project on our GitHub account and we are trying to keep up to date latests technologies and modern programming and scripting languages."}],cards:[{image:{source:o(21)},title:"Mentorship Android",description:"Android client for Mentorship System - an application that allows women in tech to mentor each other, on career development topics, through 1:1 relations for a certain period.",labels:[{title:"kotlin",color:"#FFF684"},{title:"mvvm",color:"#3EBEA1"}],badges:[{title:"zulip",source:o(22),url:"https://anitab-org.zulipchat.com/#narrow/stream/222534-mentorship-system/topic/Android"},{title:"github",source:o(23),url:"https://github.com/anitab-org/mentorship-android"}],contributors_url:"https://api.github.com/repos/anitab-org/mentorship-android/contributors"},{image:{source:o(21)},title:"Mentorship Backend",description:"Backend REST API for Mentorship System - an application that allows women in tech to mentor each other, on career development topics, through 1:1 relations for a certain period.",labels:[{title:"flask",color:"#F8972B"},{title:"python",color:"#C1D72E"}],badges:[{title:"zulip",source:o(22),url:"https://anitab-org.zulipchat.com/#narrow/stream/222534-mentorship-system/topic/mentorship-backend"},{title:"github",source:o(23),url:"https://github.com/anitab-org/mentorship-backend"}],contributors_url:"https://api.github.com/repos/anitab-org/mentorship-backend/contributors"},{image:{source:o(21)},title:"Mentorship Flutter",description:"Cross-platform client app for the Mentorship System - an application that matches women in tech to mentor each other, on career development, through 1:1 relations during a certain period of time. It's written in the Flutter framework.",labels:[{title:"dart",color:"#F5BED8"},{title:"flutter",color:"#C1D72E"}],badges:[{title:"zulip",source:o(22),url:"https://anitab-org.zulipchat.com/#narrow/stream/222534-mentorship-system/topic/mentorship-flutter"},{title:"github",source:o(23),url:"https://github.com/anitab-org/mentorship-flutter"}],contributors_url:"https://api.github.com/repos/anitab-org/mentorship-flutter/contributors"},{image:{source:o(21)},title:"Mentorship iOS",description:"iOS application for Mentorship System - an application that matches women in tech to mentor each other, on career development, through 1:1 relations during a certain period of time.",labels:[{title:"swiftUI",color:"#F8972B"},{title:"mvvm",color:"#3EBEA1"}],badges:[{title:"zulip",source:o(22),url:"https://anitab-org.zulipchat.com/#narrow/stream/222534-mentorship-system/topic/iOS"},{title:"github",source:o(23),url:"https://github.com/anitab-org/mentorship-ios"}],contributors_url:"https://api.github.com/repos/anitab-org/mentorship-ios/contributors"},{image:{source:o(21)},title:"Portal",description:"AnitaB.org Portal is for AnitaB.org communities to post and share information within and with other communities.",labels:[{title:"django",color:"#51B9EA"},{title:"python",color:"#C1D72E"}],badges:[{title:"zulip",source:o(22),url:"https://anitab-org.zulipchat.com/#narrow/stream/222540-portal"},{title:"github",source:o(23),url:"https://github.com/anitab-org/portal"}],contributors_url:"https://api.github.com/repos/anitab-org/portal/contributors"},{image:{source:o(21)},title:"VMS",description:"AnitaB.org has many volunteers that offer their skills, time, and commitment to our vision and projects. The Volunteer Management System (VMS) will be useful for volunteer coordinators, volunteer sign-up, tracking hours, and reporting. This project uses the Django web framework and Python.",labels:[{title:"django",color:"#51B9EA"},{title:"python",color:"#C1D72E"}],badges:[{title:"zulip",source:o(22),url:"https://anitab-org.zulipchat.com/#narrow/stream/222539-vms"},{title:"github",source:o(23),url:"https://github.com/anitab-org/vms"}],contributors_url:"https://api.github.com/repos/anitab-org/vms/contributors"},{image:{source:o(21)},title:"AnitaB.org Open Source Website",description:"AnitaB.org Open Source web gathering all informations about current open source projects, running programs and events as well as all necessary contribution informations.",labels:[{title:"react-native",color:"#EF4035"},{title:"javascript",color:"#F9D507"}],badges:[{title:"zulip",source:o(22),url:"https://anitab-org.zulipchat.com/#narrow/stream/235478-anitab-org.2Egithub.2Eio"},{title:"github",source:o(23),url:"https://github.com/anitab-org/anitab-org.github.io"}],contributors_url:"https://api.github.com/repos/anitab-org/anitab-org.github.io/contributors"},{image:{source:o(21)},title:"Bridge-In-Tech Web",description:"Web Application for Bridge-In-Tech - an application that encourages active collaboration between organization, mentor and mentee, by allowing organization to offer a mentoring program where mentor and mentee can work on. The mentoring program can be customised to meet the needed skills set that the organization is looking for.",labels:[{title:"react js",color:"#BD6AAA"},{title:"javascript",color:"#F9D507"}],badges:[{title:"zulip",source:o(22),url:"https://anitab-org.zulipchat.com/#narrow/stream/224798-gsoc/topic/BridgeInTech.20-.20Maya"},{title:"github",source:o(23),url:"https://github.com/anitab-org/bridge-in-tech-web"}],contributors_url:"https://api.github.com/repos/anitab-org/bridge-in-tech-web/contributors"},{image:{source:o(21)},title:"Bridge-In-Tech Backend",description:"Backend REST API for Bridge-In-Tech - an application that encourages active collaboration between organization, mentor and mentee, by allowing organization to offer a mentoring program where mentor and mentee can work on. The mentoring program can be customised to meet the needed skills set that the organization is looking for.",labels:[{title:"flask",color:"#F8972B"},{title:"python",color:"#C1D72E"}],badges:[{title:"zulip",source:o(22),url:"https://anitab-org.zulipchat.com/#narrow/stream/224798-gsoc/topic/BridgeInTech.20-.20Maya"},{title:"github",source:o(23),url:"https://github.com/anitab-org/bridge-in-tech-backend"}],contributors_url:"https://api.github.com/repos/anitab-org/bridge-in-tech-backend/contributors"},{image:{source:o(21)},title:"Open Source Programs Web",description:"Frontend of Open Source Programs (OSP) - an application that simplifies the processing and selection procedure of Open Source Programs of AnitaB.org Open Source or other third-party programs.",labels:[{title:"javascript",color:"#F9D507"}],badges:[{title:"zulip",source:o(22),url:"https://anitab-org.zulipchat.com/#narrow/stream/224798-gsoc/topic/Open.20Source.20Programs.20-.20Bismita.20Guha"},{title:"github",source:o(23),url:"https://github.com/anitab-org/open-source-programs-web"}],contributors_url:"https://api.github.com/repos/anitab-org/open-source-programs-web/contributors"},{image:{source:o(21)},title:"Open Source Programs Backend",description:"Backend of Open Source Programs (OSP) - an application that simplifies the processing and selection procedure of Open Source Programs of AnitaB.org Open Source or other third-party programs.",labels:[{title:"django",color:"#51B9EA"},{title:"python",color:"#C1D72E"}],badges:[{title:"zulip",source:o(22),url:"https://anitab-org.zulipchat.com/#narrow/stream/224798-gsoc/topic/Open.20Source.20Programs.20-.20Bismita.20Guha"},{title:"github",source:o(23),url:"https://github.com/anitab-org/open-source-programs-backend"}],contributors_url:"https://api.github.com/repos/anitab-org/open-source-programs-backend/contributors"},{image:{source:o(21)},title:"Stem Diverse TV",description:"STEM Diverse TV is an app which provides inspiring, motivating, supportive, educational and informative videos to promote and increase diversity in STEM.",labels:[{title:"flask",color:"#F8972B"},{title:"python",color:"#C1D72E"}],badges:[{title:"zulip",source:o(22),url:"https://anitab-org.zulipchat.com/#narrow/stream/225705-STEM-diverse-tv"},{title:"github",source:o(23),url:"https://github.com/anitab-org/stem-diverse-tv"}],contributors_url:"https://api.github.com/repos/anitab-org/stem-diverse-tv/contributors"}]}]},v=p.a.create({container:{flexDirection:"row",alignItems:"center",marginTop:8},image:{width:24,height:24},title:{color:"#103B81",fontWeight:"300",fontSize:12,marginLeft:8}}),S=function(e){return a.a.createElement(c.a,{style:v.container},a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.url},a.a.createElement(u.a,{style:v.image,source:e.source})),a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.url},a.a.createElement(m.a,{style:v.title},e.title)))},x=o(72),A=o.n(x),C=o(97),j=function(e){var t=e.url,o=e.styles,n=void 0===o?{flexDirection:"row"}:o,i=e.imageStyle,s=void 0===i?{width:24,height:24,borderRadius:12,marginTop:8,marginRight:8}:i,m=a.a.useState(null),p=Object(l.a)(m,2),d=p[0],g=p[1];Object(r.useEffect)((function(){h(t)}),[t]);var h=function(){var e=Object(C.a)(A.a.mark((function e(t){var o,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,null);case 2:return o=e.sent,e.next=5,o.json();case 5:r=e.sent,g(r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.a.createElement(c.a,{style:n},d&&d.length>0?d.slice(0,9).map((function(e){return a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.html_url},a.a.createElement(u.a,{style:s,source:e.avatar_url,key:e.id}))})):null)},F=p.a.create({title:{color:"#103B81",fontWeight:"400",fontSize:18,marginTop:8},smallText:{color:"#103B81",fontWeight:"300",fontSize:12,marginLeft:8},description:{color:"#103B81",fontWeight:"200",fontSize:14,marginTop:8}}),k=(b=function(e){var t=e.props;return e.isOver,a.a.createElement(c.a,{style:{flex:1,width:286,borderRadius:4,overflow:"hidden"}},a.a.createElement(f,{width:286,source:t.image.source}),a.a.createElement(m.a,{style:F.title},t.title),t.badges.map((function(e){return a.a.createElement(S,Object.assign({},e,{key:e.title+e.url}))})),a.a.createElement(m.a,{style:F.description},t.description),a.a.createElement(c.a,{style:{flex:1,justifyContent:"flex-end",marginBottom:0}},a.a.createElement(c.a,{style:{flexDirection:"row"}},t.labels.map((function(e){return a.a.createElement(m.a,{style:{backgroundColor:e.color,marginRight:8,marginTop:8,borderRadius:4,paddingLeft:8,paddingRight:8,paddingTop:4,paddingBottom:4}},e.title)}))),a.a.createElement(j,{url:t.contributors_url})))},function(e){var t=Object(r.useState)(!1),o=Object(l.a)(t,2),n=o[0],i=o[1],s={padding:e.padding||16,margin:16,borderRadius:4,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.2,shadowRadius:4,alignItems:"center",transform:[{scale:n?1.1:1}],backgroundColor:e.backgroundColor||"white"};return a.a.createElement(c.a,{style:s,onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)}},a.a.createElement(b,Object.assign({},e,{isOver:n})))});var O=function(e){var t=E;return a.a.createElement(c.a,{style:{width:"80%",alignItems:"left",paddingLeft:16,paddingRight:16}},t.sections.map((function(e,t){var o;return a.a.createElement(c.a,{key:e.title+t},a.a.createElement(w,{title:null===e||void 0===e?void 0:e.title,content:null===e||void 0===e?void 0:e.content,image:null===e||void 0===e||null===(o=e.image)||void 0===o?void 0:o.source,imageSide:"right"}),a.a.createElement(c.a,{style:{flexDirection:"row",flexWrap:"wrap"}},e.cards.map((function(e){return a.a.createElement(k,{key:e.title,props:e,backgroundColor:"#e7edfd",padding:12})}))))})))};var I=p.a.create({header:{flex:1,color:"#103B81",alignItems:"flex-start",fontWeight:"400",fontSize:24},container:{flex:1,width:"100%",paddingTop:32,paddingLeft:16,paddingRight:16}}),B=function(e){var t=e.title;return a.a.createElement(c.a,{style:I.container},a.a.createElement(m.a,{style:I.header},t))},W=o(98),T=function(e){return p.a.create({container:{flex:1,alignItems:"left",flexDirection:"right"===e?"row-reverse":"row",flexWrap:"wrap",marginTop:32},subContainer:{flex:1,alignItems:"left",flexDirection:"columns",flexGrow:1,minWidth:200},sectionImage:{flex:1,paddingLeft:16,paddingRight:16}})},D=function(e){var t=e.image,o=e.imageSide,n=e.minImageWidth,i=void 0===n?500:n,s=e.Children,u=e.imageProportion,m=void 0===u?.5:u,p=Object(r.useState)(i),d=Object(l.a)(p,2),g=d[0],h=d[1],b=T(o);return a.a.createElement(c.a,{style:b.container,onLayout:function(e){var t=e.nativeEvent.layout.width;h(t>i-32?(t-32)*m:t-32)}},a.a.createElement(f,{source:t,width:g,style:b.sectionImage}),a.a.createElement(c.a,{style:b.subContainer},a.a.createElement(s,null)))},z=o(15),R=Object(z.styled)(c.a,{width:"80%",alignItems:"left",paddingLeft:16,paddingRight:16,flexDirection:"row",flexWrap:"wrap",marginTop:32}),M=Object(z.styled)(c.a,{flex:1,flexDirection:"column",marginTop:-32}),L=Object(z.styled)(c.a,{flexDirection:"column",paddingLeft:16}),N=Object(z.styled)(m.a,{flex:1,marginTop:32,paddingLeft:16,fontSize:18,flexGrow:1,fontWeight:200,color:"#103B81",textAlign:"left"});var V=function(){return a.a.createElement(R,null,a.a.createElement(D,{image:o(129),imageSide:"right",Children:function(){return a.a.createElement(M,null,W.sections.map((function(e,t){return a.a.createElement(L,{key:t},a.a.createElement(B,{title:e.title}),e.content.map((function(e,t){return a.a.createElement(N,{key:t},e.par)})))})))}}))},P=o(69),Q=o.n(P),q=o(70),H=o.n(q),U=o(81),Y=o(33),G=Object(z.styled)(m.a,{color:"#ffdd30",fontWeight:400,fontSize:24,borderColor:"#ffdd30",borderWidth:.5,paddingVertical:5,paddingHorizontal:10,marginRight:10,marginBottom:4,borderRadius:"50px",textAlign:"center",zIndex:"1px",position:"relative",backgroundColor:"#fff",width:"200px"}),J=Object(z.styled)(c.a,{width:"200vw",borderBottomWidth:10,borderBottomColor:"#ffdd30",color:"#ffdd30",marginBottom:"26px",position:"relative",top:"20px",left:"20%",zIndex:"-10px"}),X=Object(z.styled)(c.a,{backgroundColor:"#ffdd30",color:"#fff",fontSize:24,width:45,height:45,borderRadius:"50px",textAlign:"center",justifyContent:"center",position:"absolute"}),Z=Object(z.styled)(c.a,{backgroundColor:"#000",width:"2px",height:"64px",position:"absolute",top:"29px",zIndex:"-1px"}),K=Object(z.styled)(c.a,{backgroundColor:"#fff",height:"90px",position:"absolute",opacity:"0.6"}),_=Object(z.styled)(c.a,{borderBottomColor:"#000",borderBottomWidth:"2px",width:"40vw",top:"-45px"}),$=Object(z.styled)(c.a,{flexDirection:"row",marginTop:"8px",marginBottom:"8px",width:"80%",justifyContent:"space-between"}),ee=Object(z.styled)(m.a,{fontSize:"16px",marginLeft:"5px"}),te=Object(z.styled)(c.a,{width:"80%",flexWrap:"wrap",flexDirection:"column",marginBottom:"10vw"}),oe=Object(z.styled)(Y.a,{flexDirection:"column",width:"70%",position:"absolute",right:"0"}),re=Object(z.styled)(c.a,{width:"80%"}),ae=Object(z.styled)(c.a,{marginBottom:"16px",top:"-35px"}),ne=o(136),ie=o(137),le=[{event:"GSoC'20",date:[[0,1],[0,7],[0,8],[0,12],[0,18],[0,20],[0,31],[1,10],[1,20]],color:"#ffdd30"},{event:"Rails Girls'20",date:[[0,5],[0,7],[0,9],[0,22],[0,28],[0,31],[1,8],[1,10]],color:"#039eff"}],ce=[[0,"January"],[1,"February"],[2,"March"],[3,"April"],[4,"May"],[5,"June"],[6,"July"],[7,"August"],[8,"September"],[9,"October"],[10,"November"],[11,"December"]];var se=function(){var e=H()().date(),t=H()().month();return Object(r.useEffect)((function(){Q()(".css-view-1dbjc4n").scrollLeft(e+500),e+=500})),a.a.createElement(a.a.Fragment,null,a.a.createElement($,null,a.a.createElement(c.a,{style:{flexDirection:"row"}},a.a.createElement(U.a,{onPress:function(){Q()(".css-view-1dbjc4n").scrollLeft(e-=35),e<0&&(e=0)}},a.a.createElement(ne.a,{style:{color:"#42aaf5",paddingTop:"4px"}})),a.a.createElement(ee,null,"PAST")),a.a.createElement(c.a,{style:{flexDirection:"row"}},a.a.createElement(ee,null,"FUTURE"),a.a.createElement(U.a,{onPress:function(){Q()(".css-view-1dbjc4n").scrollLeft(e+=35)}},a.a.createElement(ie.a,{style:{color:"#42aaf5",paddingTop:"4px"}})))),a.a.createElement(te,null,le.map((function(e){return a.a.createElement(c.a,{key:e.event},a.a.createElement(G,{style:{color:e.color,borderColor:e.color,flex:1,left:e.date[0][1]+"vw"}},e.event),a.a.createElement(_,null))})),a.a.createElement(oe,{horizontal:!0,showsHorizontalScrollIndicator:!1},a.a.createElement(re,null,le.map((function(t){return a.a.createElement(c.a,{style:{marginBottom:"32px",flexDirection:"column"},key:t.event},a.a.createElement(J,{style:{left:5*(t.date[0][1]-1)+"%",width:"1800vw",borderBottomColor:t.color}}),t.date.map((function(e){return a.a.createElement(X,{style:{left:5*(30*e[0]+e[1]-1)+"%",backgroundColor:t.color},key:30*e[0]+e[1]},e[1])})),a.a.createElement(K,{style:{left:5*(t.date[0][1]-1)+"%",width:5*(e-t.date[0][1])+2+"%"}}),a.a.createElement(Z,{style:{left:5*(e-1)+2+"%"}}))})),a.a.createElement(c.a,{style:{left:5*(e-1)+3+"%"}},a.a.createElement(m.a,null,"Today ",H()().date(),"th ",ce[t][1])),a.a.createElement(c.a,{style:{flexDirection:"row"}},ce.map((function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(ae,{style:{left:30*e[0]*5+1+"%"}},a.a.createElement(m.a,null,"1st ",e[1])))})))))))};var ue=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(se,null))};var me=function(e){var t,r=e.selected,n=e.titles;return 1===r?a.a.createElement(V,null):3===r?a.a.createElement(O,null):2===r?a.a.createElement(ue,null):a.a.createElement(c.a,{style:{width:"80%",alignItems:"center",paddingTop:40}},(t=n[r],a.a.createElement(m.a,null,t)),a.a.createElement(u.a,{style:{height:200,width:200},source:o(132)}),a.a.createElement(m.a,null,"UNDER CONSTRUCTION"))},pe=p.a.create({container:{flexDirection:"row",justifyContent:"space-between",backgroundColor:"#231B4E",width:"100%",flexWrap:"wrap",paddingBottom:16,paddingTop:24,paddingHorizontal:"10%"},col:{alignItems:"center"},left:{width:579},center:{width:245},right:{width:573,textAlign:"center"},text:{color:"#FFFFFF"},heading:{fontSize:"1.4em",fontWeight:500,paddingBottom:22},description:{fontSize:"1em",fontWeight:300},formField:{backgroundColor:"#FFFFFF",width:"100%",borderRadius:8,padding:4,borderColor:"red"},formEmail:{height:38},formMessage:{height:161,marginVertical:8},formButton:{width:183,height:47,borderRadius:500,backgroundColor:"#54BCEB",alignItems:"center",justifyContent:"center"},socialContainer:{flexDirection:"row"},socialImage:{height:32,width:32,borderRadius:"50%",marginHorizontal:16}}),de=o(80);var ge=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),o=t[0],n=t[1],i=Object(r.useState)(""),u=Object(l.a)(i,2),p=u[0],d=u[1],g=Object(r.useState)(0),h=Object(l.a)(g,2),b=h[0],f=h[1],y=Object(r.useState)(0),w=Object(l.a)(y,2),E=w[0],v=w[1];return a.a.createElement(c.a,{style:[pe.col,pe.left]},a.a.createElement(m.a,{style:[pe.text,pe.heading]},"Any queries or feedbacks?"),a.a.createElement(de.a,{style:[pe.description,pe.formField,pe.formEmail,{borderWidth:b}],placeholder:"Your email address",onChangeText:function(e){return n(e)},value:o}),a.a.createElement(de.a,{style:[pe.description,pe.formField,pe.formMessage,{borderWidth:E}],multiline:!0,placeholder:"Your queries or feedbacks",onChangeText:function(e){return d(e)},value:p}),a.a.createElement(s.a,{style:pe.formButton,onPress:function(){var e=0;o&&/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(o)?f(0):(f(2),e=1);p?v(0):(v(2),e=1);e||(n(""),d(""))}},a.a.createElement(m.a,{style:[pe.description,pe.text]},"Submit")))},he=o(79);var be=function(){return a.a.createElement(c.a,{style:[pe.col,pe.center]},a.a.createElement(m.a,{style:[pe.text,pe.heading]},"Follow us here"),a.a.createElement(c.a,{style:pe.socialContainer},a.a.createElement(s.a,{onPress:function(){return he.a.openURL("https://www.linkedin.com/company/anitab-org/")}},a.a.createElement(u.a,{style:[pe.socialImage],source:o(71)})),a.a.createElement(s.a,{onPress:null},a.a.createElement(u.a,{style:[pe.socialImage],source:o(71)})),a.a.createElement(s.a,{onPress:null},a.a.createElement(u.a,{style:[pe.socialImage],source:o(71)}))))},fe=o(104);var ye=function(){var e=fe.sections.find((function(e){return"Contact Us"===e.title})).content;return a.a.createElement(c.a,{style:[pe.col,pe.right]},a.a.createElement(m.a,{style:[pe.text,pe.heading]},"Contact Us"),e.map((function(e,t){return a.a.createElement(m.a,{style:[pe.text,pe.description],key:t},e.par)})))};var we=function(){return a.a.createElement(c.a,{style:pe.container},a.a.createElement(ge,null),a.a.createElement(be,null),a.a.createElement(ye,null))};var Ee=function(){var e=Object(r.useState)(0),t=Object(l.a)(e,2),o=t[0],n=t[1],i=["HOME","ABOUT US","PROGRAMS","PROJECTS","EVENTS","CONTRIBUTE"];return a.a.createElement(c.a,{style:{position:"absolute",width:"100%",alignItems:"center"}},a.a.createElement(h,{selected:o,setSelected:n,titles:i}),a.a.createElement(me,{selected:o,titles:i}),a.a.createElement(we,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(Ee,{styles:{width:"100%"}}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},21:function(e,t,o){e.exports=o.p+"static/media/placeholder.66c6a83d.png"},22:function(e,t){e.exports="data:image/png;base64,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"},23:function(e,t){e.exports="data:image/png;base64,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"},71:function(e,t,o){e.exports=o.p+"static/media/linkedin-logo.5a653ec3.png"},98:function(e){e.exports=JSON.parse('{"sections":[{"title":"Our Mission","content":[{"par":"AnitaB.org Open Source aims to provide women of all skill levels and backgrounds with the opportunity to collaborate and develop open source projects with the aspirations of social good."},{"par":"We are a social community that brings geographically disparate people together to network, communicate, and work in well-run open source projects in a welcoming environment."},{"par":"In addition, we encourage contributions of ALL kinds (content, design, coding, documentation, testing, etc) from community members. Each member has the opportunity to gain global collaboration experience working on projects with social impact and improve technical skills while participating as a volunteer, mentor, writer, coder, designer, app tester, and more!"}]},{"title":"Our History","content":[{"par":"AnitaB.org Open Source (formerly Systers Open Source) was initiated by Systers, an international community of 6,000 women involved in technical-computing founded by Anita Borg in 1987 as a small electronic mailing list for women in \u201csystems\u201d. We have incredible Systers (Robin Jeffries, Jen Redman, Terri Oda, Leslie Hawthorn, Avni Khatri, and the list goes on!) that paved the way and introduced Systers to open source projects, communities, and technologies. Systers has been involved with open source in various ways, introducing Open Source Day at Grace Hopper Celebration in 2010 at Atlanta, GA (At the time, it was called Codethon for Humanity with only one open source project, Sahana Eden)."},{"par":"Moreover, AnitaB.org Open Source has been participated in other global open source programs such as Google Summer of Code, Google Code In, Outreachy, and more."},{"par":"Today, we have 14 active open source projects, including initiatives with our Peace Corps partners and apps created by Systers members."}]},{"title":"About AnitaB.org","content":[{"par":"AnitaB.org Open Source is an international sub-community of AnitaB.org encouraging the participation of all women involved in technology. We welcome the participation of all genders at any ages and experience levels."},{"par":"We have a list of projects that use various development languages/technologies (Android, iOS, Java, Swift, HTML, CSS, React, Jquery, Javascript, PHP, Kohana, MySQL, Python, Django, Selenium, and Ruby on Rails, etc.) to make a social impact in the non-profit world. We welcome all to contribute. No experience is necessary for most projects, and mentorship is provided. "}]},{"title":"Insights","content":[{"par":"2,000+ members"},{"par":">15 time zones"},{"par":"Flexibility in time & contribution"}]},{"title":"Meet our Open Source Community","content":[{"par":"Women transform technology. Technology transforms the world. Join us at Zulip - http://anitab-org.zulipchat.com"}]}]}')}},[[105,1,2]]]);
//# sourceMappingURL=main.843f9de4.chunk.js.map