(this.webpackJsonpmovie_suggetion=this.webpackJsonpmovie_suggetion||[]).push([[0],{15:function(e,t,a){"use strict";var n=a(3),c=a.n(n),s=a(5),l=a(0),o=a(1),r=(a(23),a(12)),i=a.n(r),d=a(2),m=a(10);t.a=function(e){console.log(window.location),Object(d.g)();var t=i.a.create({baseURL:"https://moviebackendpr.herokuapp.com",withCredentials:!0});function a(){return(a=Object(s.a)(c.a.mark((function a(){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("hello "),a.next=3,t.get("/users").then((function(t){e.handler(t.data.auth),localStorage.getItem("data1")?e.setdata1(JSON.parse(localStorage.getItem("data1"))):e.setdata1([]);var a=[],n=[];t.data.movie.filter((function(e){return!!a.includes(e.movie_name)||(a.push(e.movie_name),n.push(e),!1)})),e.setdata1(n.splice(0,21)),console.log(n.splice(0,21)),localStorage.setItem("data1",JSON.stringify(n.splice(0,21))),document.body.style.visibility="visible",console.log(t.data),document.getElementById("logopic").src="data:image/png;base64,".concat(t.data.file),document.getElementById("username").innerText=t.data.user,document.getElementById("complete").style.display=""})).catch((function(e){}));case 3:case"end":return a.stop()}}),a)})))).apply(this,arguments)}function n(){return(n=Object(s.a)(c.a.mark((function a(){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.get("/login/out").then((function(t){e.handler(t.auth)})).catch((function(e){}));case 2:case"end":return a.stop()}}),a)})))).apply(this,arguments)}function r(){return(r=Object(s.a)(c.a.mark((function t(a){var n,s,l,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),document.getElementById("spinner").style.visibility="visible",n=document.getElementById("criteria").value,s=document.getElementById("search").value,console.log("hello",n,s),t.next=7,fetch("https://moviebackendpr.herokuapp.com/searchmovie?name=".concat(n,"&value=").concat(s),{credentials:"include"});case 7:return l=t.sent,t.next=10,l.json();case 10:o=t.sent,e.handler(o.auth),document.getElementById("spinner").style.visibility="hidden",localStorage.setItem("data1",JSON.stringify(o.movie)),e.setdata1(o.movie);case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(o.useEffect)((function(){!function(){a.apply(this,arguments)}()}),[]),window.onresize=function(){document.getElementById("main")&&document.getElementById("nav")&&(document.getElementById("main").style.height="".concat(window.innerHeight+document.getElementById("nav").offsetHeight-20," px"))},Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"complete",id:"complete",children:[Object(l.jsx)("div",{className:"nav",id:"nav",children:Object(l.jsx)("div",{className:"col-12",children:Object(l.jsx)("div",{className:"row",children:Object(l.jsxs)("div",{className:"col-12",children:[Object(l.jsx)("div",{className:"col-12",children:Object(l.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"100%",justifyContent:"center",gap:"30px",placeItems:"center"},children:[Object(l.jsx)("img",{src:"",alt:"",className:"user_icon",id:"logopic"}),Object(l.jsx)("h3",{className:"user_name",id:"username",style:{textAlign:"center",marginTop:"-20px",width:"100%",overflow:"scroll"}})]})}),Object(l.jsx)("center",{children:Object(l.jsxs)("nav",{class:"navbar navbar-light bg-primary ",style:{marginBottom:"20px"},children:[Object(l.jsxs)("div",{className:"btn-group btn-btn-group-lg d-flex",children:[Object(l.jsx)("button",{className:"btn-primary btn-lg m-2 btn-outline-success",onClick:function(){window.location="/app1"},children:"Home"}),Object(l.jsx)("button",{className:"btn-primary btn-lg m-2 btn-outline-danger",onClick:function(){return n.apply(this,arguments)},children:"LogOut"})]}),Object(l.jsxs)("form",{class:"form-inline",onSubmit:function(e){return r.apply(this,arguments)},method:"dialog",children:[Object(l.jsx)("div",{id:"spinner",class:"spinner-border text-danger form-control mr-sm-2",style:{visibility:"hidden"},role:"status",children:Object(l.jsx)("span",{class:"sr-only",children:"Loading..."})}),Object(l.jsxs)("select",{class:"form-control mr-sm-2",id:"criteria",children:[Object(l.jsx)("option",{value:"movie",children:"Movie Name"}),Object(l.jsx)("option",{value:"actor",children:"Actor Name "}),Object(l.jsx)("option",{value:"lang",children:"Langauage "}),Object(l.jsx)("option",{value:"director",children:"Director Name "}),Object(l.jsx)("option",{value:"gener",children:"Gener "}),Object(l.jsx)("option",{value:"year",children:"Year "})]}),Object(l.jsx)("input",{class:"form-control mr-sm-2",id:"search",type:"search",placeholder:"Search","aria-label":"Search",required:!0}),Object(l.jsx)("input",{type:"submit",class:"btn btn-outline-success my-2 my-sm-0",value:"Search"})]})]})})]})})})}),Object(l.jsx)("div",{className:"main1",children:Object(l.jsx)("div",{className:"main",id:"main",children:Object(l.jsx)("center",{children:Object(l.jsx)("div",{className:"row",children:e.data1.map((function(e){return Object(l.jsx)("div",{className:"col-lg-2 col-md-3 col-sm-4 col-6",children:Object(l.jsxs)(m.b,{className:"col-12 p-0",to:"/movie/".concat(e.movie_name||e.sname),children:[Object(l.jsx)("div",{className:"col-12 p-1",children:Object(l.jsx)("img",{src:e.poster_url||e.imgsrc,alt:"",className:"img"})}),Object(l.jsx)("div",{className:"col-12 p-1 txt",style:{textAlign:"center",color:"red",fontWeight:"550",fontSize:"1rem"},children:e.movie_name||e.sname})]})})}))})})})})]})})}},17:function(e,t,a){"use strict";var n=a(3),c=a.n(n),s=a(5),l=a(11),o=a(0),r=a(1),i=a(16),d=a.n(i),m=(a(71),a(72),a(12)),p=a.n(m);a(15);t.a=function(e){var t="data:image/jpeg;base64,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";p.a.defaults.baseURL="https://moviebackendpr.herokuapp.com";var a=Object(r.useState)(),n=Object(l.a)(a,2),i=n[0],m=n[1];function u(e){return console.log(e),!!e.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)||(console.log("validation failed email"),!1)}function h(e){return!!e.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)||(console.log("validation failed pass"),!1)}Object(r.useEffect)((function(){document.getElementById("imgu").style.height=document.getElementById("imgu").style.width="100%",m(document.getElementById("image").files)}),[]);var j=null;function g(){return(g=Object(s.a)(c.a.mark((function e(){var a,n,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=document.getElementById("exampleInputEmail2").value,n=document.getElementById("exampleInputPassword2").value,console.log(a,d()(n)),!(u(a)&&h(n)&&j)){e.next=14;break}return console.log(a,n,j),(s=new FormData).append("image",j),s.append("email",a),s.append("pass",d()(n)),console.log(s),e.next=12,p.a.post("/register",s,{withCredentials:!0,headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(e){console.log("uploading: "+parseInt(Math.round(100*e.loaded/e.total)))}}).then((function(e){console.log(e.data.res),"Registration Successful!"===e.data.res&&setTimeout((function(){console.log(i),console.log("time up"),document.getElementById("imgu").src=t,document.getElementById("image").files=i,document.getElementById("exampleInputEmail2").value="",document.getElementById("exampleInputPassword2").value="",document.getElementById("regform").scrollTop=0}),4e3)})).catch((function(e){return console.log(e)}));case 12:e.next=15;break;case 14:console.log("validation of email and password failed");case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return(x=Object(s.a)(c.a.mark((function t(){var a,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=document.getElementById("exampleInputEmail1").value,n=document.getElementById("exampleInputPassword1").value,console.log(a,d()(n)),!u(a)||!h(n)){t.next=8;break}return t.next=6,p.a.post("/login/in",{email:a,pass:d()(n)},{withCredentials:!0}).then((function(t){e.handler(t.data.auth),console.log(t.data),console.log(t.data.res),"login successful"===t.data.res&&(document.getElementById("exampleInputEmail1").value="",document.getElementById("exampleInputPassword1").value="")})).catch((function(e){return console.log(e)}));case 6:t.next=9;break;case 8:console.log("validation of email and password failed");case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function A(){return(A=Object(s.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!u(t)){e.next=2;break}return e.abrupt("return",p.a.post("/login/checkEmail",{email:t},{withCredentials:!0}).then((function(e){return console.log(e.data),document.getElementById("exampleInputEmail2").style.color=e.data.checkResult?"green":"red",e.data.checkResult})));case 2:return document.getElementById("exampleInputEmail2").style.color="red",e.abrupt("return",!1);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"logform",children:Object(o.jsxs)("div",{className:"regform",id:"regform",children:[Object(o.jsxs)("div",{className:"login",children:[Object(o.jsx)("h5",{className:"rep",children:"Login"}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"exampleInputEmail1",children:"Email address"}),Object(o.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1",onChange:function(e){e.target.style.color=u(e.target.value)?"green":"red"},"aria-describedby":"emailHelp",placeholder:"Enter email"}),Object(o.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"We'll never share your email with anyone else."})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"exampleInputPassword1",children:"Password"}),Object(o.jsx)("input",{type:"password",className:"form-control",id:"exampleInputPassword1",onChange:function(e){e.target.style.color=h(e.target.value)?"green":"red"},placeholder:"Password"}),Object(o.jsx)("small",{id:"passHelp",className:"form-text text-muted",children:"password between 7 to 16 characters which contain only characters, numeric digits and underscore and first character must be a letter."})]}),Object(o.jsx)("button",{className:"btn btn-primary",id:"login",onClick:function(){return x.apply(this,arguments)},children:"Submit"})]})]}),Object(o.jsx)("div",{}),Object(o.jsxs)("div",{className:"reg",id:"reg",children:[Object(o.jsx)("h5",{className:"rep",children:"Register"}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"exampleInputEmail1",children:"Email address"}),Object(o.jsx)("input",{type:"email",className:"form-control",onChange:function(e){!function(e){A.apply(this,arguments)}(e.target.value)},id:"exampleInputEmail2","aria-describedby":"emailHelp",placeholder:"Enter email"}),Object(o.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"We'll never share your email with anyone else."})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"exampleInputPassword1",children:"Password"}),Object(o.jsx)("input",{type:"password",className:"form-control",id:"exampleInputPassword2",onChange:function(e){e.target.style.color=h(e.target.value)?"green":"red"},placeholder:"Password"}),Object(o.jsx)("small",{id:"passHelp",className:"form-text text-muted",children:"password between 7 to 16 characters which contain only characters, numeric digits and underscore and first character must be a letter."})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"Image",children:"Upload Your Image"}),Object(o.jsx)("input",{type:"file",name:"image",id:"image",className:"form-control overflow-auto",onChange:function(e){j=e.target.files[0];var t=new FileReader;t.onload=function(){console.log(t.result),document.getElementById("imgu").src=t.result},t.readAsDataURL(j),t.onerror=function(e){console.log(e)},console.log(j)}})]}),Object(o.jsx)("center",{children:Object(o.jsx)("button",{className:"btn btn-primary",id:"register",onClick:function(){return g.apply(this,arguments)},children:"Submit"})})]}),Object(o.jsx)("div",{className:"upimg",id:"upimg",style:{position:"relative"},children:Object(o.jsx)("img",{src:t,alt:"",style:{position:"absolute",top:"20px",border:"5px solid black"},id:"imgu"})})]})]})})})}},18:function(e,t,a){"use strict";(function(e){var n=a(3),c=a.n(n),s=a(5),l=a(11),o=a(0),r=a(1),i=a(2),d=a(17),m=a(15),p=a(35),u=a.n(p),h=a(36),j=(a(73),a(10));t.a=function(){var t=Object(r.useState)(1),a=Object(l.a)(t,2),n=a[0],p=a[1],g=Object(r.useState)(1),x=Object(l.a)(g,2),A=x[0],b=(x[1],Object(r.useState)([])),f=Object(l.a)(b,2),v=f[0],O=f[1];return Object(r.useEffect)((function(){console.log("hi ",window.location.path,n,A)}),[n]),Object(r.useEffect)(Object(s.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(u.a,e);case 1:case"end":return t.stop()}}),t)}))),[]),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(j.a,{basename:"/app",children:Object(o.jsxs)(i.d,{children:[Object(o.jsx)(i.b,{exact:!0,path:"/user/:id",children:Object(o.jsx)(m.a,{handler:p})}),Object(o.jsx)(i.b,{exact:!0,path:"/movie/:name",component:h.a}),Object(o.jsx)(i.b,{exact:!0,path:"/",children:1===n?Object(o.jsx)(m.a,{handler:p,data1:v,setdata1:O}):Object(o.jsx)(d.a,{handler:p})}),Object(o.jsx)(i.b,{children:Object(o.jsx)(i.a,{to:"/"})})]})})})}}).call(this,"/")},23:function(e,t,a){},36:function(e,t,a){"use strict";var n=a(3),c=a.n(n),s=a(5),l=a(11),o=a(0),r=a(1),i=a(10);t.a=function(e){var t=0,a=Object(r.useState)({}),n=Object(l.a)(a,2),d=n[0],m=n[1];function p(e){var t=e.split("T")[0],a=t.split("-")[2],n=t.split("-")[0],c=["jan","feb","march","april","may","june","july","aug","sept","oct","nov","dec"][parseInt(t.split("-")[1])];return"".concat(a," ").concat(c," ").concat(n)}function u(e){return console.log(e),""!==e?e.split(" ").join("_"):e}function h(e){return j.apply(this,arguments)}function j(){return(j=Object(s.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t+"hello"),e.next=3,fetch("https://moviebackendpr.herokuapp.com/movie/actor/".concat(t),{method:"GET",credentials:"include",headers:{"content-type":"application/json; charset=UTF-8"}});case 3:return a=e.sent,e.next=6,a.json().then((function(e){if(console.log(u(e.actor_name)),null===document.getElementById(u(e.actor_name))){var t=document.createElement("a");t.href=e.wiki_link,t.target="_blank",t.id=u(e.actor_name),t.classList.add("col-md-4","col-sm-6","col-3","text-center","p-1");var a=document.createElement("div");a.classList.add("embed-responsive","embed-responsive-1by1");var n=document.createElement("img");n.style.boxShadow="0 0px 5px 2px blue",n.src=e.img_url,n.classList.add("embed-responsive-item","rounded-circle");var c=document.createElement("a");c.classList.add("text-center","font-italic","mt-0"),c.style.color="black",c.target="_blank",c.href=e.wiki_link,c.innerText=e.actor_name,a.appendChild(n),t.appendChild(a),t.appendChild(c),document.getElementById("actors").appendChild(t)}}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=Object(s.a)(c.a.mark((function e(a){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("hello"),e.next=3,fetch("https://moviebackendpr.herokuapp.com/movie/".concat(a),{method:"GET",credentials:"include",headers:{"content-type":"application/json; charset=UTF-8"}});case 3:return n=e.sent,e.next=6,n.json().then((function(e){console.log("nothing found"),m(e),t=1,console.log(d)})).catch((function(e){}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)(Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(d),void 0!==d.movie_gener&&(document.getElementById("movie_name").innerHTML=d.movie_name.toUpperCase(),document.getElementById("yt_link").src=d.movie_trailer,document.getElementById("story").innerHTML="<strong>".concat(d.story,"</strong>"),document.getElementById("gener").innerHTML="<span>Gener:</span> ".concat(d.movie_gener.join(", ")),document.getElementById("lang").innerHTML="<span>Language:</span> ".concat(d.movie_lang.join(", ")),document.getElementById("poster_url").src=d.poster_url,document.getElementById("run_time").innerHTML="<span>Running time:</span> ".concat(d.run_time),document.getElementById("release_date").innerHTML="<span>Release date:</span> ".concat(p(d.release_date)),document.getElementById("director").innerHTML="<span>Director:</span> ".concat(d.director_name),document.getElementById("page_visited").innerHTML="<span>Page visited:</span> ".concat(d.page_visited)),document.body.style.visibility="visible",void 0!==d.movie_actors)for(t=0;t<d.movie_actors.length;t++)h(d.movie_actors[t]);case 4:case"end":return e.stop()}}),e)}))),[d]),Object(r.useEffect)(Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),[d.movie_actors]),Object(r.useEffect)((function(){if(void 0!==document.getElementById("yt_link")&&0===t){console.log("hello"),document.getElementById("actors").innerHTML="";var e=window.location.href.split("/");t=1,function(e){g.apply(this,arguments)}(e[e.length-1])}}),[]),window.onresize=function(){var e=document.getElementsByClassName("img");e.length>0&&e.forEach((function(e){e.offsetHeight="".concat(1.2*e.offsetWidth," px")}))},Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"container-fluid p-0 bgcolor",children:Object(o.jsx)("div",{className:"col-lg-11 m-auto p-0",children:Object(o.jsxs)("div",{className:"container-fluid p-2",style:{height:"100vh",backgroundColor:"skyblue",overflow:"scroll"},children:[Object(o.jsx)(i.b,{to:"/",className:"col-12",children:Object(o.jsx)("center",{children:Object(o.jsx)("button",{className:"btn btn-md btn-primary",children:"Home"})})}),Object(o.jsxs)("div",{className:"col-12",children:[Object(o.jsx)("h3",{className:"col-12 text-center",children:Object(o.jsx)("strong",{id:"movie_name",children:"Movie Name"})}),Object(o.jsx)("hr",{}),Object(o.jsx)("section",{className:"p-0",children:Object(o.jsx)("div",{className:"col-md-9 m-auto embed-responsive embed-responsive-16by9",style:{border:"2px solid red"},children:Object(o.jsx)("div",{className:"col-12 embed-responsive-item",children:Object(o.jsx)("iframe",{id:"yt_link",className:"p-1",src:"",FrameBorder:"0",allow:"fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0,allowFullscreen:!0})})})})]}),Object(o.jsx)("div",{className:"col-12 mt-1"}),Object(o.jsx)("div",{className:"col-md-8 col-sm-10 m-auto text-center text-danger",id:"story"}),Object(o.jsx)("div",{className:"col-12 mt-3"}),Object(o.jsx)("div",{className:"col-8 m-auto p-2",style:{},children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-md-6 col-sm-8  m-auto",children:Object(o.jsx)("img",{id:"poster_url",src:"",alt:"",style:{width:"100%",boxShadow:"0 0px 15px 2px blue"}})}),Object(o.jsx)("div",{className:"col-md-6 col-sm-4",children:Object(o.jsxs)("div",{className:"col-12 mt-3 p-1 ",style:{fontWeight:"700"},children:[Object(o.jsx)("div",{className:"col-12 text-center",id:"lang"}),Object(o.jsx)("div",{className:"col-12 text-center",id:"run_time"}),Object(o.jsx)("div",{className:"col-12 text-center",id:"gener"}),Object(o.jsx)("div",{className:"col-12 text-center",id:"release_date"}),Object(o.jsx)("div",{className:"col-12 text-center",id:"page_visited"}),Object(o.jsx)("div",{className:"col-12 text-center",id:"director"}),Object(o.jsx)("div",{className:"row g-3",children:Object(o.jsx)("div",{className:"col-12",children:Object(o.jsx)("marquee",{behavior:"",direction:"",children:Object(o.jsx)("h3",{style:{},children:"Actors"})})})}),Object(o.jsx)("div",{className:"row",id:"actors"})]})})]})}),Object(o.jsx)("div",{className:"col-9 m-auto"})]})})})})}},42:function(e,t,a){},71:function(e,t,a){},73:function(e,t){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),s=a.n(c),l=a(33),o=a.n(l),r=(a(42),a(23),a(15),a(17),a(18));o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(r.a,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.8f526a47.chunk.js.map