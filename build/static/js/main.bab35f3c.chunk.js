(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{108:function(e,t,n){"use strict";n.r(t);var r,i,a=n(29),c=n.n(a),o=(n(82),n(125)),s=n(72),l=n(9),d=n(23),u=n(2),p=n(124),h=n.p+"static/media/netflix-logo.c0b93f12.png",j=n.p+"static/media/HeroBanner.33770dcd.jpg",b=n(46),f=n(47),g=n(129),m=Object(f.a)(g.a)(r||(r=Object(b.a)(["\n  z-index: 30;\n  background-color: #fff;\n  padding: 25.5px;\n  height: 30px;\n  border-radius: 5px 0px 0px 5px;\n  border: none;\n;"]))),x=f.a.button(i||(i=Object(b.a)(["\n  z-index: 15;\n  background-color: ",";\n  color: #fff;\n  border-radius: ",";\n  text-transform: inherit;\n  padding: 15px;\n  font-size: 1.1rem;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  width: ",";\n"])),(function(e){return"gray"===e.color?"lightgray":"red"}),(function(e){return function(e){switch(e){case"loginInput":return"0px 5px 5px 0px";case"5px":return"5px";default:return"0px"}}(e.radius)}),(function(e){return function(e){switch(e){case"fullWidth":return"100%";case"medium":return"260px";default:return"160px"}}(e.wide)})),O=n(52),v=(O.a.initializeApp({apiKey:"AIzaSyDXG31J1oRZ6-hv60vy0WwZM_vO4Sv-6Jk",authDomain:"netflix-clone-69c1c.firebaseapp.com",projectId:"netflix-clone-69c1c",storageBucket:"netflix-clone-69c1c.appspot.com",messagingSenderId:"1074883914017",appId:"1:1074883914017:web:8b888de530ed054d927660"}),O.a.auth()),w=n(4),k=Object(o.a)((function(e){return{email:{marginBottom:e.spacing(2)},form:{width:"80%"},password:{marginBottom:e.spacing(4)},root:{maxWidth:"350px",width:"20rem",height:"25rem",backgroundColor:"rgba(0, 0, 0, 0.65)",display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center"},signupLink:{color:"#fff",cursor:"pointer","&:hover":{textDecoration:"underline"}}}})),y=function(){var e=k(),t=Object(u.useState)(""),n=Object(d.a)(t,2),r=n[0],i=n[1],a=Object(u.useState)(""),c=Object(d.a)(a,2),o=c[0],s=c[1],h=Object(l.f)();return Object(w.jsxs)("div",{className:e.root,children:[Object(w.jsx)(p.a,{variant:"h5",align:"left",children:"Sing Up"}),Object(w.jsxs)("form",{onSubmit:function(e){e.preventDefault(),v.signInWithEmailAndPassword(r,o).then((function(e){return h.push("/")})).catch((function(e){return alert(e.message)})),i(""),s("")},className:e.form,children:[Object(w.jsx)(m,{value:r,onChange:function(e){return i(e.target.value)},placeholder:"Email",type:"email",className:e.email}),Object(w.jsx)(m,{value:o,onChange:function(e){return s(e.target.value)},placeholder:"Password",type:"password",className:e.password}),Object(w.jsx)(x,{radius:"5px",wide:"medium",children:"Sign In"}),Object(w.jsxs)(p.a,{variant:"subtitle2",children:["New to Netflix? "," ",Object(w.jsxs)("span",{onClick:function(e){e.preventDefault(),v.createUserWithEmailAndPassword(r,o).then((function(e){return h.push("/")})).catch((function(e){return alert(e.message)})),i(""),s("")},className:e.signupLink,children:["Sign Up now. "," "]})]})]})]})},N=Object(o.a)((function(e){return{info:{color:"#fff",zIndex:15,textAlign:"center","& h4":{fontWeight:800},"& h5":{fontWeight:600}},inputBlock:{display:"flex",alignItems:"center",justifyContent:"center"},logo:{position:"fixed",top:20,left:20,width:"150px",cursor:"pointer"},root:{position:"relative",height:"100vh",objectFit:"contain",backgroundImage:"url(".concat(j,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",display:"flex",justifyContent:"center",alignItems:"center"},session:{position:"fixed",zIndex:15,right:20,top:20}}})),I=function(){var e=N(),t=Object(u.useState)(!1),n=Object(d.a)(t,2),r=n[0],i=n[1];return Object(w.jsxs)("div",{className:e.root,children:[Object(w.jsx)("img",{src:h,alt:"logo",className:e.logo}),Object(w.jsx)(x,{onClick:function(){return i(!r)},radius:"5px",className:e.session,children:"Iniciar sesion"}),Object(w.jsx)("div",{className:e.info,children:r?Object(w.jsx)(y,{}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(p.a,{variant:"h4",gutterBottom:!0,children:"Unlimited films, TV programmes and more"}),Object(w.jsx)(p.a,{variant:"h5",children:"Watch anywhere. Cancel at any time."}),Object(w.jsx)(p.a,{variant:"h6",gutterBottom:!0,children:"Ready to watch? Enter your email to create or restart your membership"}),Object(w.jsxs)("div",{className:e.inputBlock,children:[Object(w.jsx)(m,{placeholder:"Email address..."}),Object(w.jsx)(x,{radius:"loginInput",children:"GET STARTED"})]})]})})]})},S=n(70),C=n(131),E=n(126),_=n(127),B=n(130),M=Object(o.a)((function(e){return{logo:{width:"150px",cursor:"pointer"},root:{backgroundColor:"#111",top:0,left:0,right:0},toolbar:{display:"flex",justifyContent:"space-between",alignItems:"center"},transparent:{backgroundColor:"transparent"}}})),R=function(){var e=M(),t=Object(u.useState)(!1),n=Object(d.a)(t,2),r=n[0],i=n[1],a=Object(l.f)(),c=function(){window.scrollY>100?i(!0):i(!1)};return Object(u.useEffect)((function(){return window.addEventListener("scroll",c),function(){return window.removeEventListener("scroll",c)}}),[]),Object(w.jsx)(C.a,{position:"sticky",elevation:0,className:"".concat(e.root," ").concat(r&&e.transparent),children:Object(w.jsxs)(E.a,{className:e.toolbar,children:[Object(w.jsx)(_.a,{onClick:function(){return a.push("/")},children:Object(w.jsx)("img",{src:h,alt:"logo",className:e.logo})}),Object(w.jsx)(B.a,{onClick:function(){return a.push("/profile")},variant:"square",style:{cursor:"pointer"}})]})})},T=n.p+"static/media/netflixavatar.b36331ae.jpg",W=Object(o.a)((function(e){return{root:{marginTop:e.spacing(3),marginBottom:e.spacing(3),display:"flex",justifyContent:"space-between",alignItems:"center","& button":{marginBottom:e.spacing(2)}},standard:{fontSize:"1.2rem"}}})),z=function(e){e.cost;var t=e.children,n=e.color,r=e.wide,i=W();return Object(w.jsxs)("div",{className:i.root,children:[Object(w.jsx)(p.a,{className:i.standard,variant:"h5",children:t}),Object(w.jsx)(x,{wide:r,color:n,children:"Subscribe"})]})},A=n(33),L=n(44),U=Object(L.b)({name:"user",initialState:{value:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}}),D=U.actions,P=D.login,H=D.logout,F=function(e){return e.user.user},V=U.reducer,J=Object(o.a)((function(e){return{details:{width:"100%",marginLeft:e.spacing(3),"& h6":{backgroundColor:"#aaa",padding:e.spacing(1),marginBottom:e.spacing(1),fontSize:"18px"}},info:{width:"80%",maxWidth:"800px",display:"flex","& img":Object(S.a)({height:"100px"},e.breakpoints.down("xs"),{display:"none"})},plans:{width:"100%"},plansText:{borderBottom:"1px solid lightgray"},root:{color:"#fff",minHeight:"100vh",maxWidth:"100vw",display:"flex",flexDirection:"column",alignItems:"center"}}})),G=function(){var e=J(),t=Object(l.f)(),n=Object(A.c)(F);return Object(w.jsxs)("div",{className:e.root,children:[Object(w.jsx)(R,{}),Object(w.jsx)(p.a,{variant:"h3",children:"Edit Profile"}),Object(w.jsxs)("div",{className:e.info,children:[Object(w.jsx)("img",{src:T,alt:"avatar"}),Object(w.jsx)("div",{className:e.details,children:Object(w.jsxs)("div",{className:e.plans,children:[Object(w.jsx)(p.a,{variant:"h6",children:n?n.email:"Email user"}),Object(w.jsx)(p.a,{className:e.plansText,variant:"h5",gutterBottom:!0,children:"Plans"}),Object(w.jsx)(z,{cost:7.99,children:"Netflix Standard"}),Object(w.jsx)(z,{cost:11.99,children:"Netflix Basic"}),Object(w.jsx)(z,{wide:"medium",color:"gray",cost:15.99,children:"Netflix Premium"}),Object(w.jsx)(x,{onClick:function(){v.signOut(),t.push("/login")},wide:"fullWidth",children:"Sign Out"})]})})]})]})},X=Object(o.a)((function(e){return{root:{}}})),Y=function(){X();return Object(w.jsx)("div",{children:"Paypal"})},Z=n(35),q=n.n(Z),K=n(41),Q=n(128),$=(n.p,n(42)),ee=n.n($),te="18f18926317f27ac66ba6c0667ac125c",ne={fetchTrending:"https://api.themoviedb.org/3/trending/all/week?api_key=".concat(te,"&language=en-US"),fetchNetflixOriginals:"https://api.themoviedb.org/3/discover/tv?api_key=".concat(te,"&with_networks=213"),fetchActionMovies:"https://api.themoviedb.org/3/discover/movie?api_key=".concat(te,"&with_genres=28"),fetchComedyMovies:"https://api.themoviedb.org/3/discover/movie?api_key=".concat(te,"&with_genres=35"),fetchHorrorMovies:"https://api.themoviedb.org/3/discover/movie?api_key=".concat(te,"&with_genres=27"),fetchRomanceMovies:"https://api.themoviedb.org/3/discover/movie?api_key=".concat(te,"&with_genres=10749"),fetchDocumentaries:"https://api.themoviedb.org/3/discover/movie?api_key=".concat(te,"&with_genres=99")},re=Object(o.a)((function(e){return{buttons:{"& button":{cursor:"pointer",color:"#fff",fontWeignt:700,borderRadius:"5px",padding:e.spacing(1,4,1,4),marginRight:"1rem",backgroundColor:"rgba(51, 51, 51, 0.5)",marginTop:e.spacing(2)},"& button:hover":{color:"#000",backgroundColor:"#e6e6e6"}},content:{paddingTop:"100px"},description:{maxWidth:"500px",marginTop:e.spacing(4)},fadeBottom:{position:"absolute",top:"30vh",bottom:0,left:0,right:0,zIndex:99,backgroundImage:"linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111)"},root:{position:"relative",height:"440px",objectFit:"contain",backgroundSize:"cover",backgroundPosition:"center",color:"#fff"}}})),ie=function(){var e=re(),t=Object(u.useState)([]),n=Object(d.a)(t,2),r=n[0],i=n[1];Object(u.useEffect)((function(){(function(){var e=Object(K.a)(q.a.mark((function e(){var t,n;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee.a.get(ne.fetchNetflixOriginals);case 2:return t=e.sent,n=Math.floor(Math.random()*t.data.results.length-1),i(t.data.results[n]),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),console.log(r);var a,c;return Object(w.jsx)("div",{className:e.root,style:{backgroundImage:"url('https://image.tmdb.org/t/p/original/".concat(null===r||void 0===r?void 0:r.backdrop_path,"')"),backgroundSize:"cover",backgroundPosition:"center",position:"relative",height:"440px",objectFit:"contain",color:"#fff"},children:Object(w.jsxs)("div",{className:e.content,children:[Object(w.jsx)(p.a,{variant:"h3",component:"h1",children:(null===r||void 0===r?void 0:r.title)||(null===r||void 0===r?void 0:r.name)||(null===r||void 0===r?void 0:r.original_name)}),Object(w.jsxs)("div",{className:e.buttons,children:[Object(w.jsx)(Q.a,{children:"Play"}),Object(w.jsx)(Q.a,{children:"My List"})]}),Object(w.jsx)(p.a,{style:{wordWrap:"break-word"},variant:"h6",className:e.description,children:(a=null===r||void 0===r?void 0:r.overview,c=160,(null===a||void 0===a?void 0:a.length)>c?"".concat(a.substring(0,c-1)," ..."):a)}),Object(w.jsx)("div",{className:e.fadeBottom})]})})},ae=Object(o.a)((function(e){return{poster:{maxHeight:"12rem",borderRadius:"5px",objectFit:"contain",marginRight:e.spacing(2),transition:"transform 450ms","&:hover":{transform:"scale(1.08)"}},posterLarge:{maxHeight:"15rem","&:hover":{transform:"scale(1.15)"}},posters:{display:"flex",overflowY:"hidden",overflowX:"scroll","&::-webkit-scrollbar":{display:"none"}},root:{marginTop:e.spacing(4),color:"#fff",marginLeft:e.spacing(4),"&:last-child":{paddingBottom:e.spacing(4)}},title:{marginBottom:e.spacing(2)}}})),ce=function(e){var t=e.title,n=e.fetchUrl,r=e.isLargeRow,i=ae(),a=Object(u.useState)([]),c=Object(d.a)(a,2),o=c[0],s=c[1];return Object(u.useEffect)((function(){(function(){var e=Object(K.a)(q.a.mark((function e(){var t;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee.a.get(n);case 2:return t=e.sent,s(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]),console.log(o),Object(w.jsxs)("div",{className:i.root,children:[Object(w.jsx)(p.a,{variant:"h4",className:i.title,children:t}),Object(w.jsx)("div",{className:i.posters,children:o.map((function(e){return(r&&e.poster_path||!r&&e.backdrop_path)&&Object(w.jsx)("img",{className:"".concat(i.poster," ").concat(r&&i.posterLarge),src:"".concat("https://image.tmdb.org/t/p/original/").concat(r?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))})]})},oe=Object(o.a)((function(e){return{root:{}}})),se=function(){oe();return Object(w.jsxs)("div",{children:[Object(w.jsx)(R,{}),Object(w.jsx)(ie,{}),Object(w.jsx)(ce,{isLargeRow:!0,title:"NETFLIX ORIGINALS",fetchUrl:ne.fetchNetflixOriginals}),Object(w.jsx)(ce,{title:"ACTION MOVIES",fetchUrl:ne.fetchActionMovies}),Object(w.jsx)(ce,{title:"COMEDY MOVIES",fetchUrl:ne.fetchComedyMovies}),Object(w.jsx)(ce,{title:"HORROR MOVIES",fetchUrl:ne.fetchHorrorMovies}),Object(w.jsx)(ce,{title:"ROMANCE MOVIES",fetchUrl:ne.fetchRomanceMovies}),Object(w.jsx)(ce,{title:"DOCUMENTARIES",fetchUrl:ne.fetchDocumentaries})]})},le=Object(o.a)((function(e){return{root:{backgroundColor:"#111",minHeight:"100vh"}}})),de=function(){var e=Object(A.b)(),t=le();Object(A.c)(F);return Object(u.useEffect)((function(){var t=v.onAuthStateChanged((function(n){return e(n?P({uid:n.uid,email:n.email}):H),t}))}),[e]),Object(w.jsx)("div",{className:t.root,children:Object(w.jsx)(s.a,{children:Object(w.jsxs)(l.c,{children:[Object(w.jsx)(l.a,{path:"/login",children:Object(w.jsx)(I,{})}),Object(w.jsx)(l.a,{path:"/profile",children:Object(w.jsx)(G,{})}),Object(w.jsx)(l.a,{path:"/checkout",children:Object(w.jsx)(Y,{})}),Object(w.jsx)(l.a,{path:"/",children:Object(w.jsx)(se,{})})]})})})},ue=Object(L.a)({reducer:{user:V}});c.a.render(Object(w.jsx)(A.a,{store:ue,children:Object(w.jsx)(de,{})}),document.getElementById("root"))},82:function(e,t,n){}},[[108,1,2]]]);
//# sourceMappingURL=main.bab35f3c.chunk.js.map