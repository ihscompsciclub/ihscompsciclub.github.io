(this.webpackJsonpihscompsciclub=this.webpackJsonpihscompsciclub||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/stickermule_logo.476f4b47.png"},30:function(e,t,a){e.exports=a(49)},35:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),c=a.n(l),o=(a(35),a(4)),s=a(5),i=a(7),m=a(6),u=(a(36),a(37),a(3)),p=a(12),d=a(25),h=a(14),g=(a(38),a(39),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"topnav"},r.a.createElement("img",{src:"/transBGLogo.png",alt:"logo"}),r.a.createElement("p",null,"IHS Comp Sci Club"),r.a.createElement(p.b,{to:"/",onClick:function(){window.scroll({top:0,left:0})}},"Home"),r.a.createElement(p.b,{to:"/faqs",onClick:function(){window.scroll({top:0,left:0})}},"FAQs"),r.a.createElement(E,{items:["Officers","Members","Gallery"],idItems:["officers","members","gallery"],to:"/about",curPage:this.props.curPage},"About Us"),r.a.createElement(E,{items:["Workshops","Hackathons","Projects","Upcoming Events","Career Days"],to:"/activities",idItems:["clubWorkshops","hackathons","projects","upcomingEvents","careerDays"],curPage:this.props.curPage},"Activities"),r.a.createElement(E,{items:["Form","Socials"],idItems:["airtableForm","socials"],to:"/contact",curPage:this.props.curPage},"Contact Us")),r.a.createElement("p",{id:"firstItem"}))}}]),a}(r.a.Component)),E=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(o.a)(this,a),(n=t.call(this,e)).idItems="undefined"==typeof n.props.idItems?n.props.items:n.props.idItems,console.log(n.idItems),n.renderItems=[];for(var r=0;r<n.props.items.length;r++)n.renderItems.push(n.createHashLinks(r));return n.title=n.props.title,n.state={show_items:!1},n.color="white",n.timeout="undefined"==typeof n.props.timeout?1e3:n.props.timeout,n}return Object(s.a)(a,[{key:"createHashLinks",value:function(e){return r.a.createElement(d.a,{className:"dropdown-item",to:this.props.to+"#"+this.idItems[e],key:this.idItems[e]},this.props.items[e])}},{key:"render",value:function(){var e=this;return r.a.createElement(h.a,{as:"span",align:"start",className:"topnavdd",onMouseOver:function(){e.color="black",e.setState({show_items:!0}),console.log("entered")},onMouseLeave:function(){e.color="white",e.setState({show_items:!1}),console.log("left")},onClick:function(){e.setState({show_items:!1})},show:this.state.show_items},r.a.createElement(p.b,{onClick:function(){window.scroll({top:0,left:0}),console.log("top")},to:this.props.to,style:{textAlign:"center",width:"max-content",float:"center",color:this.color}},this.props.children),r.a.createElement(h.a.Menu,{show:this.state.show_items,style:{backgroundColor:"#26428b",color:"white",width:"unset",transform:"translateY("+1/this.renderItems.length*100+"%) translateX(-11.65%)"}},this.renderItems))}}]),a}(r.a.Component),b=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:this.props.imgSrc,alt:this.props.name}),r.a.createElement("h3",null,this.props.name),r.a.createElement("p",null,this.props.shortDesc))}}]),a}(r.a.Component),f=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"coolScrollEffect"},this.props.children,r.a.createElement("hr",null))}}]),a}(r.a.Component),k=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"fill",value:function(e){for(var t="",a=0;a<e;a++)t+="Filler<br/>\n";return t}},{key:"render",value:function(){return r.a.createElement("h2",null,this.fill(25))}}]),a}(r.a.Component),v=a(28),O=a.n(v),S=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Home Content"},r.a.createElement(g,{curPage:"home"}),r.a.createElement(f,null,r.a.createElement("h1",{id:"hp_header",className:"centeredContent paddedContent"},"Welcome to IHS Computer Science Club"),r.a.createElement("video",{playsInline:!0,id:"hp_vid",width:"100%",autoPlay:!0,loop:!0,muted:!0},r.a.createElement("source",{src:"Videos/A.mp4",type:"video/mp4"}))),r.a.createElement(f,null,r.a.createElement("h1",{className:"centeredContent paddedContent"},"K-33 | 3:30 - 4:30 PM PST | Wednesdays"),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement("img",{alt:"club",className:"centeredContent paddedContent",id:"clubpic"})),r.a.createElement("th",null,r.a.createElement("h1",null,"Yeah, us"),r.a.createElement("p",null,"Club Description",r.a.createElement("br",null),"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")))))),r.a.createElement(k,null),r.a.createElement("a",{href:"https://www.stickermule.com/"},r.a.createElement("img",{src:O.a,alt:"stickermule logo",width:"600",height:"200"})))}}]),a}(r.a.Component),y=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Content"},r.a.createElement(g,{curPage:"about"}),r.a.createElement("div",{className:"centeredContent paddedContent"},r.a.createElement("h1",{id:"officers"},"Our Officers"),r.a.createElement("div",{className:"personBlock"},r.a.createElement(b,{imgSrc:"./memberImgs/cpic.png",name:"Guy",shortDesc:"A regular person who likes to code/design"}),r.a.createElement(b,{imgSrc:"./memberImgs/cpic.png",name:"Girl",shortDesc:"A regular person who likes to code/design"}),r.a.createElement(b,{imgSrc:"./memberImgs/cpic.png",name:"Guy",shortDesc:"A regular person who likes to code/design"}),r.a.createElement(b,{imgSrc:"./memberImgs/cpic.png",name:"Girl",shortDesc:"A regular person who likes to code/design"}),r.a.createElement(b,{imgSrc:"./memberImgs/cpic.png",name:"Guy",shortDesc:"A regular person who likes to code/design"}),r.a.createElement(b,{imgSrc:"./memberImgs/cpic.png",name:"Girl",shortDesc:"A regular person who likes to code/design"}),r.a.createElement(b,{imgSrc:"./memberImgs/cpic.png",name:"Guy",shortDesc:"A regular person who likes to code/design"}),r.a.createElement(b,{imgSrc:"./memberImgs/cpic.png",name:"Girl",shortDesc:"A regular person who likes to code/design"})),r.a.createElement("h1",{id:"members"},"Our Members"),r.a.createElement("div",{className:"personBlock"},r.a.createElement(b,{imgSrc:"./memberImgs/cpic.png",name:"Guy",shortDesc:"A regular person who likes to code/design"}),r.a.createElement(b,{imgSrc:"./memberImgs/cpic.png",name:"Girl",shortDesc:"A regular person who likes to code/design"}),r.a.createElement(b,{imgSrc:"./memberImgs/cpic.png",name:"Guy",shortDesc:"A regular person who likes to code/design"}),r.a.createElement(b,{imgSrc:"./memberImgs/cpic.png",name:"Girl",shortDesc:"A regular person who likes to code/design"}),r.a.createElement(b,{imgSrc:"./memberImgs/cpic.png",name:"Guy",shortDesc:"A regular person who likes to code/design"}),r.a.createElement(b,{imgSrc:"./memberImgs/cpic.png",name:"Girl",shortDesc:"A regular person who likes to code/design"}),r.a.createElement(b,{imgSrc:"./memberImgs/cpic.png",name:"Guy",shortDesc:"A regular person who likes to code/design"}),r.a.createElement(b,{imgSrc:"./memberImgs/cpic.png",name:"Girl",shortDesc:"A regular person who likes to code/design"}),r.a.createElement(b,{imgSrc:"./memberImgs/cpic.png",name:"Guy",shortDesc:"A regular person who likes to code/design"}),r.a.createElement(b,{imgSrc:"./memberImgs/cpic.png",name:"Girl",shortDesc:"A regular person who likes to code/design"}),r.a.createElement(b,{imgSrc:"./memberImgs/yorinamu.png",name:"Yori Namu",shortDesc:"lol"})),r.a.createElement("h1",{id:"gallery"},"Gallery"),r.a.createElement(k,null)))}}]),a}(r.a.Component),C=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"paddedContent Content"},r.a.createElement(g,{curPage:"activities"}),r.a.createElement("h1",{id:"clubWorkshops",className:"centeredContent"},"CLUB WORKSHOPS"),r.a.createElement("h3",null,"We have workshops on multiple programming languages, including workshops on web development, game development as well as cybersecurity. We also have guest speakers and career fairs."),r.a.createElement("h3",null,"Links to our workshops:"),r.a.createElement("li",null,"September 15th - Intro to JS - ",r.a.createElement("a",{href:"https://docs.google.com/presentation/d/1X25EUVfhqo5IY37lySNBjxJYqObj5BOuPjR5zV7fLeE/edit?usp=sharing",target:"blank"},"Slides")),r.a.createElement("li",null,"September 22nd - JavaScript, Week 2 - ",r.a.createElement("a",{href:"https://docs.google.com/presentation/d/1otMvo6YIxJAhTd5OLH9v5R3QNlP_MREu2V1sIpGe8cc/edit?usp=sharing",target:"blank"},"Slides")),r.a.createElement("li",null,"October 6th - JavaScript, Week 3 - ",r.a.createElement("a",{href:"https://docs.google.com/presentation/d/1WzOG8fZYrqFmi6ocixuBlB6NCMY930bxYYa_4EycpbE/edit?usp=sharing",target:"blank"},"Slides")),r.a.createElement("li",null,"October 13th - JavaScript, Week 4 (Intro to HTML) - ",r.a.createElement("a",{href:"https://docs.google.com/presentation/d/1a6lQlZHAcveHT4g8ZwVLM43E46n84V_mqfWvaLyP1AY/edit?usp=sharing",target:"blank"},"Slides")),r.a.createElement("li",null,"October 20th - JavaScript, Week 5 (HTML, CSS, JS)- ",r.a.createElement("a",{href:"https://docs.google.com/presentation/d/13xbqdkeIoxD_CtR3cd2svG9oZrhhYJaTPpSRSISRdfU/edit?usp=sharing",target:"blank"},"Slides")),r.a.createElement("li",null,"October 27th - No Slides (had a guest speaker instead)"),r.a.createElement("li",null,"November 3th - Version Control Week 1 - ",r.a.createElement("a",{href:"https://docs.google.com/presentation/d/1GDZHlU9hCABsqSTGaLThmWfdxpPhizL-KcM12cVQnts/edit?usp=sharing",target:"blank"},"Slides")),r.a.createElement("li",null,"November 10th - Version Control Week 2 - ",r.a.createElement("a",{href:"https://docs.google.com/presentation/d/1SIDPjSei_lMAtBdv6JW0HKDHN7bPe_4ZiBKx7hjGFWY/edit?usp=sharing",target:"blank"},"Slides")),r.a.createElement("li",null,"November 17th - Discord Bot Development Week 1 - ",r.a.createElement("a",{href:"https://docs.google.com/presentation/d/19fkM1rKOrKBa1110PCBYVf_G82WUw37aOrAB4vaEJfA/edit?usp=sharing",target:"blank"},"Slides")),r.a.createElement("li",null,"November 24th - Thanksgiving Break (No Slides)"),r.a.createElement("li",null,"December 1st - Discord Bot Development Week 2 - ",r.a.createElement("a",{href:"https://docs.google.com/presentation/d/1XjNqEvlBUkYQdOOi4c8YEJjoXgSCF8TDQZOa9PX2OqM/edit?usp=sharing",target:"blank"},"Slides")),r.a.createElement("li",null,"December 8th - Discord Bot Development Week 3 - ",r.a.createElement("a",{href:"https://docs.google.com/presentation/d/1nmgzrrSf5BYfkwOotVNSGiCRUKZ-bEtjUA2uyLJCSEg/edit?usp=sharing",target:"blank"},"Slides")),r.a.createElement("h1",{id:"hackathons",className:"centeredContent"},"HACKATHONS"),r.a.createElement("h3",null,"We host hackathons, which are themed competitions where our members try to code the best solution to a problem"),r.a.createElement("p",null,"October Hackathon link: ",r.a.createElement("a",{href:"https://cs-club-2021-october.devpost.com/",target:"blank"},"Here")),r.a.createElement("h1",{id:"projects",className:"centeredContent"},"PROJECTS"),r.a.createElement("h3",null,"As a club, we\u2019re currently working on: this website! We encourage our members to try developing their own projects. heck out these magnificent projects made by our outstanding people in our club."),r.a.createElement(w,{linkArray:["https://replit.com/@ritza/demo-embed?embed=true","https://replit.com/@Chreliot/CardGames?embed=true","https://replit.com/@Chreliot/Poker?embed=true"],projectNames:["Python Demo","Black Jack","Poker"]}),r.a.createElement("h1",{id:"upcomingEvents",className:"centeredContent"},"UPCOMING EVENTS TODO"),r.a.createElement("h3",null,"Cool Calendar HERE"),r.a.createElement(k,null),r.a.createElement("h1",{id:"careerDays"},"CAREER DAYS TODO"),r.a.createElement("p",null,"In CS Club, we host career days where guest speakers come to our meetings and give presentations about how their experience the CS field has been! Our past guest speakers:"),r.a.createElement(b,{imgSrc:"./memberImgs/Philip Reasa.png",name:"Philip Reasa",shortDesc:"Former Google Software Engineer"}))}}]),a}(r.a.Component),w=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;if(Object(o.a)(this,a),(n=t.call(this,e)).items=n.props.linkArray,n.names=n.props.projectNames,"undefined"==typeof n.names){n.names=[];for(var l=0;l<n.items.length;l++)n.names.push("project "+l)}n.renderItems=[],n.menuItems=[];for(var c=0;c<n.items.length;c++)n.menuItems.push(n.createMenuItems(c)),n.renderItems.push(r.a.createElement("iframe",{title:"project"+c,frameborder:"0",width:"100%",height:"500px",src:n.items[c]}));return n.state={index:0},n}return Object(s.a)(a,[{key:"createMenuItems",value:function(e){var t=this;return r.a.createElement(h.a.Item,{onClick:function(){t.setState({index:e}),console.log("will set state to"+e)}},this.names[e])}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement(h.a.Toggle,null,"See All of our Projects"),r.a.createElement(h.a.Menu,{style:{backgroundColor:"lightblue"}},this.menuItems)),r.a.createElement("br",null),this.renderItems[this.state.index])}}]),a}(r.a.Component),j=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return document.getElementsByTagName("html")[0].style="background:#212121",r.a.createElement("div",{className:"Content"},r.a.createElement(g,{curPage:"contact"}),r.a.createElement("div",{className:"centeredContent paddedContent"},r.a.createElement("h1",{id:"airtableForm"},"AIRTABLE FORM TODO"),r.a.createElement(k,null),r.a.createElement("h1",{id:"socials"},"SOCIALS TODO"),r.a.createElement(k,null)))}}]),a}(r.a.Component),I=(a(48),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Content"},r.a.createElement(g,{curPage:"faqs"}),r.a.createElement("h1",{className:"centeredContent"},"FAQs"),r.a.createElement("div",{className:"paddedContent larger"},r.a.createElement("li",{className:"numberedList"},"How much experience will we need? Are you required to already know any type of programming?",r.a.createElement("li",{className:"letteredList"},"No experience required, we will teach you the basics of programming and many different skills and languages!")),r.a.createElement("li",{className:"numberedList"},"What languages do you use?",r.a.createElement("div",{className:"letteredList"},r.a.createElement("li",null,"Python"),r.a.createElement("li",null,"Html"),r.a.createElement("li",null,"LaTeX"),r.a.createElement("li",null,"Css"),r.a.createElement("li",null,"Java"),r.a.createElement("li",null,"Js"),r.a.createElement("li",null,"Rust"),r.a.createElement("li",null,"Lua"),r.a.createElement("li",null,"Scratch"),r.a.createElement("li",null,"Julia"),r.a.createElement("li",null,"Vim Script")))))}}]),a}(r.a.Component)),N=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",component:S,exact:!0}),r.a.createElement(u.a,{path:"/faqs",component:I}),r.a.createElement(u.a,{path:"/about",component:y}),r.a.createElement(u.a,{path:"/activities",component:C}),r.a.createElement(u.a,{path:"/contact",component:j})))}}]),a}(r.a.Component),A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,54)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),l(e),c(e)}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p.a,null,r.a.createElement(N,null))),document.getElementById("root")),A()}},[[30,1,2]]]);
//# sourceMappingURL=main.c158dbae.chunk.js.map