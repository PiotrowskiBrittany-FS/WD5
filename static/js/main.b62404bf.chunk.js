(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(28)},26:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(16),o=a.n(i),l=a(7),s=(a(26),a(0)),c=function(){return r.a.createElement("div",{style:m.container},r.a.createElement(l.b,{style:m.logo,to:"/Home"}," Popcorner "),r.a.createElement("div",{style:m.buttons},r.a.createElement(l.b,{style:m.links,to:"/SearchMovies"},"Search Movies"),r.a.createElement(l.b,{style:m.links,to:"/PopularMovies"},"Popular Movies"),r.a.createElement(l.b,{style:m.route,to:"/UpcomingMovies"},"Upcoming Movies")))},m={container:{display:"flex",justifyContent:"space-between"},logo:{fontSize:"36px",fontWeight:"bold",textDecoration:"none",color:"#000"},buttons:{display:"block"},links:{paddingTop:"0.50rem",paddingBottom:"0.50rem",paddingRight:"1.5rem",paddingLeft:"1.5rem",color:"#000",textDecoration:"none",borderStyle:"solid",borderWidth:"0px",borderRadius:"10px",cursor:"pointer",boxShadow:"2px 2px 5px #888",backgroundColor:"#F2B705",fontWeight:"bold",marginBottom:"1rem",marginRight:"1rem"}},u=a(4),d=a(6),p=a(8),g=a(10),h=a(5),v=a(9),f=function(e){return r.a.createElement("div",{style:{width:"18rem"}},r.a.createElement("div",{style:y.cardContainer},r.a.createElement("section",{style:y.card},null==e.image?r.a.createElement("img",{src:"https://www.prokerala.com/movies/assets/img/no-poster-available.jpg",alt:"card image",style:y.images}):r.a.createElement("img",{src:"http://image.tmdb.org/t/p/w185".concat(e.image),alt:"card image",style:y.images}),r.a.createElement("h2",{style:y.text},e.title),r.a.createElement("a",{href:"#",onClick:function(){return e.viewDetails(e.movieId)},style:y.button},"View Details"))))},y={cardContainer:{marginLeft:"5rem"},card:{backgroundColor:"#fff",height:"30rem",marginTop:"2rem",color:"#000",paddingBottom:"5rem",paddingTop:"1rem",width:"15rem",paddingLeft:"1rem",paddingRight:"1rem"},text:{marginBotton:"1rem",paddingBottom:"1.5rem",fontWeight:"bold",paddingTop:"0.2rem",fontSize:"16px"},button:{borderStyle:"solid",borderWidth:"0px",borderRadius:"10px",padding:"0.25rem",marginTop:"2rem",backgroundColor:"#F2B705",textDecoration:"none",color:"#000",boxShadow:"2px 2px 5px #888",display:"flex",alignSelf:"flex-end",justifyContent:"center",marginBottom:"1rem"},images:{width:"15rem",height:"25rem"}},b=function(e){return r.a.createElement("div",{style:E.container},e.movies.map(function(t,a){return r.a.createElement(f,{key:a,viewDetails:e.viewDetails,title:t.title,movieId:t.id,image:t.poster_path})}))},E={container:{paddingTop:"5rem",width:"90%",display:"flex",justifyContent:"space-between",flexWrap:"wrap",flexDirection:"row"}},x=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"go-back",onClick:e.closeDetails},r.a.createElement("span",{style:w.back},"Go back")),r.a.createElement("div",{className:"image"},null===e.currentMovie.poster_path?r.a.createElement("img",{src:"https://www.prokerala.com/movies/assets/img/no-poster-available.jpg",alt:"card image",style:w.images}):r.a.createElement("img",{src:"http://image.tmdb.org/t/p/w185".concat(e.currentMovie.poster_path),alt:"card image",style:w.images})),r.a.createElement("div",{className:"details",style:w.detail},r.a.createElement("p",{style:w.info},"Title: "),r.a.createElement("p",null,e.currentMovie.title),r.a.createElement("p",{style:w.info},"Release Date: "),r.a.createElement("p",null,e.currentMovie.release_date.substring(5).split("-").concat(e.currentMovie.release_date.substring(0,4)).join("/")),r.a.createElement("p",{style:w.info},"About: "),r.a.createElement("p",null,e.currentMovie.overview)))},w={container:{display:"flex",justifyContent:"space-between"},back:{borderStyle:"solid",borderWidth:"0.25px",borderRadius:"10px",cursor:"pointer",marginBottom:"2rem",padding:"0.5rem",backgroundColor:"#F2B705"},images:{paddingTop:"2rem",width:"15rem",height:"25rem"},info:{fontWeight:"bold",paddingTop:"1rem"}},M=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(g.a)(this,Object(h.a)(t).call(this))).state={movies:[],totalMovies:0,currentMovie:null},e.apiKey="d90675c6ac13f9cd080926e402046ab1",e}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return fetch("https://api.themoviedb.org/3/movie/popular?api_key=".concat(this.apiKey,"&language=en-US&page=1")).then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({movies:Object(u.a)(t.results),totalMovies:t.total_results})}),r.a.createElement("div",{style:k.container},r.a.createElement("div",{style:k.wrapper},r.a.createElement("h2",null,"Popular Movies"),null==this.state.currentMovie?r.a.createElement("div",{style:k.movies},r.a.createElement(b,{style:k.list,viewDetails:this.viewDetails,movies:this.state.movies})):r.a.createElement(x,{style:k.details,currentMovie:this.state.currentMovie,closeDetails:this.closeDetails})))}}]),t}(n.Component),k={container:{backgroundColor:"#fff"},wrapper:{margin:"2rem"},movies:{display:"block"},search:{padding:"2rem"},list:{margin:"2rem",padding:"2rem"},details:{margin:"2rem"}},C=function(e){return r.a.createElement("div",{style:S.searchWrapper},r.a.createElement("form",{action:"",onSubmit:e.handleSubmit},r.a.createElement("input",{style:S.searchContainer,type:"text",placeholder:"Search for a Movie",onChange:e.handleChange})))},S={searchWrapper:{display:"flex",justifyContent:"space-around"},searchContainer:{width:"50%",height:"1.5rem"}},j=function(e){for(var t=[],a=function(a){var n=e.currentPage===a?"active":"";t.push(r.a.createElement("li",{className:n,style:D.active,key:a,onClick:function(){return e.nextPage(a)}},r.a.createElement("a",{href:"#",style:D.links},a)))},n=1;n<=e.pages+1;n++)a(n);return r.a.createElement("div",{style:D.container},r.a.createElement("div",{style:D.row},r.a.createElement("ul",{style:D.pages},e.currentPage>1?r.a.createElement("li",{style:D.prevnext,onClick:function(){return e.nextPage(e.currentPage-1)}},r.a.createElement("a",{href:"#",style:D.links},"Previous")):"",t,e.currentPage<e.pages+1?r.a.createElement("li",{style:D.prevnext,onClick:function(){return e.nextPage(e.currentPage+1)}},r.a.createElement("a",{href:"#",style:D.links},"Next")):"")))},D={active:{fontWeight:"bold",display:"flex",justifyContent:"center",alignItems:"center",borderStyle:"solid",borderWidth:"1px",padding:"10px",backgroundColor:"#F2B705"},container:{display:"flex",justifyContent:"center",alignItems:"center",paddingTop:"2rem"},row:{display:"flex",justifyContent:"space-between",padding:"0.25rem"},pages:{display:"flex",justifyContent:"space-between",listStyle:"none",padding:"0.25rem"},prevnext:{borderStyle:"solid",borderWidth:"1px",padding:"1rem",backgroundColor:"#F2B705"},links:{textDecoration:"none",color:"#000",fontWeight:"bold"}},P=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(g.a)(this,Object(h.a)(t).call(this))).handleSubmit=function(t){t.preventDefault(),fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(e.apiKey,"&query=").concat(e.state.userSearch)).then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({movies:Object(u.a)(t.results),totalMovies:t.total_results})})},e.handleChange=function(t){t.preventDefault(),e.setState({userSearch:t.target.value})},e.nextPage=function(t){fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(e.apiKey,"&query=").concat(e.state.userSearch,"&page=").concat(t)).then(function(e){return e.json()}).then(function(a){console.log(a),e.setState({movies:Object(u.a)(a.results),currentPage:t})})},e.viewDetails=function(t){var a=e.state.movies.filter(function(e){return e.id===t}),n=a.length>0?a[0]:null;e.setState({currentMovie:n})},e.closeDetails=function(){e.setState({currentMovie:null})},e.state={movies:[],userSearch:"",totalMovies:0,currentPage:1,currentMovie:null},e.apiKey="d90675c6ac13f9cd080926e402046ab1",e}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=Math.floor(this.state.totalMovies/20);return r.a.createElement("div",{style:O.container},r.a.createElement("div",{style:O.wrapper},null==this.state.currentMovie?r.a.createElement("div",{style:O.movies},r.a.createElement(C,{style:O.search,handleSubmit:this.handleSubmit,handleChange:this.handleChange}),r.a.createElement(b,{style:O.list,viewDetails:this.viewDetails,movies:this.state.movies})):r.a.createElement(x,{style:O.details,currentMovie:this.state.currentMovie,closeDetails:this.closeDetails}),this.state.totalMovies>20&&null==this.currentMovie?r.a.createElement(j,{pages:e,nextPage:this.nextPage,currentPage:this.state.currentPage}):""))}}]),t}(n.Component),O={container:{backgroundColor:"#fff"},wrapper:{margin:"2rem"},movies:{display:"block"},search:{padding:"2rem"},list:{margin:"2rem",padding:"2rem"},details:{margin:"2rem"}},W=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Movie Database"),r.a.createElement("div",{style:B.links},r.a.createElement(l.b,{style:B.route,to:"/SearchMovies"},"Search Movies"),r.a.createElement(l.b,{style:B.route,to:"/PopularMovies"},"Popular Movies"),r.a.createElement(l.b,{style:B.route,to:"/UpcomingMovies"},"Upcoming Movies")))},B={links:{display:"flex",justifyContent:"space-around",marginTop:"2rem",marginRight:"5rem",marginLeft:"5rem"},route:{color:"#000",textDecoration:"none",borderStyle:"solid",padding:"2rem",borderRadius:"10px",borderWidth:"0px",cursor:"pointer",boxShadow:"2px 2px 5px #888",backgroundColor:"#F2B705",fontWeight:"bold",fontSize:"24px"}},T=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(g.a)(this,Object(h.a)(t).call(this))).state={movies:[],totalMovies:0,currentMovie:null},e.apiKey="d90675c6ac13f9cd080926e402046ab1",e}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=".concat(this.apiKey,"&language=en-US&page=1")).then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({movies:Object(u.a)(t.results),totalMovies:t.total_results})}),r.a.createElement("div",{style:_.container},r.a.createElement("div",{style:_.wrapper},r.a.createElement("h2",null,"Popular Movies"),null==this.state.currentMovie?r.a.createElement("div",{style:_.movies},r.a.createElement(b,{style:_.list,viewDetails:this.viewDetails,movies:this.state.movies})):r.a.createElement(x,{style:_.details,currentMovie:this.state.currentMovie,closeDetails:this.closeDetails})))}}]),t}(n.Component),_={container:{backgroundColor:"#fff"},wrapper:{margin:"2rem"},movies:{display:"block"},search:{padding:"2rem"},list:{margin:"2rem",padding:"2rem"},details:{margin:"2rem"}};var F=function(){return r.a.createElement("div",{style:R.wrapper},r.a.createElement(c,null),r.a.createElement("div",null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",element:r.a.createElement(W,null)}),r.a.createElement(s.a,{exact:!0,path:"/Home",element:r.a.createElement(W,null)}),r.a.createElement(s.a,{exact:!0,path:"/SearchMovies",element:r.a.createElement(P,null)}),r.a.createElement(s.a,{path:"/PopularMovies",element:r.a.createElement(M,null)}),r.a.createElement(s.a,{path:"/Upcoming Movies",element:r.a.createElement(T,null)}))))},R={wrapper:{margin:"2rem",backgroundColor:"#fff"}},K=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,29)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),i(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,null,r.a.createElement(F,null)))),K()}},[[17,3,2]]]);
//# sourceMappingURL=main.b62404bf.chunk.js.map