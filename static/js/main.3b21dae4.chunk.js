(this["webpackJsonputsweb-15111"]=this["webpackJsonputsweb-15111"]||[]).push([[0],{22:function(e,a,t){e.exports=t(34)},27:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(19),c=t.n(l),o=(t(27),t(5)),i=t(6),s=t(16);var m=function(){var e=r.a.useState(!1),a=Object(s.a)(e,2),t=a[0],n=a[1],l=r.a.useState(""),c=Object(s.a)(l,2),m=c[0],u=c[1],d=Object(i.f)().pathname;return r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark mb-4"},r.a.createElement("a",{className:"navbar-brand",href:"#!"},"Top navbar"),r.a.createElement("button",{onClick:function(){n(!t)},className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse ".concat(t?"show":""),id:"navbarCollapse"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item ".concat("/"===d?"active":"")},r.a.createElement(o.b,{className:"nav-link",to:"/"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item ".concat(d.indexOf("/blog")>-1?"active":"")},r.a.createElement(o.b,{className:"nav-link",to:"/blog"},"Blog")),r.a.createElement("li",{className:"nav-item ".concat(d.indexOf("/about")>-1?"active":"")},r.a.createElement(o.b,{className:"nav-link",to:"/about"},"About")),r.a.createElement("li",{className:"nav-item ".concat("/#!"===d?"active":"")},r.a.createElement("a",{className:"nav-link disabled",href:"#!",tabIndex:"-1","aria-disabled":"true"},"Disabled"))),r.a.createElement("form",{className:"form-inline mt-2 mt-md-0",onSubmit:function(e){e.preventDefault(),fetch("/api/search/?searchValue="+m).then((function(e){return e.json()})).then((function(e){return e.search})).then((function(e){return alert(e)})).catch((function(e){return console.log(e)}))}},r.a.createElement("input",{className:"form-control mr-sm-2",type:"text",placeholder:"Search","aria-label":"Search",onChange:function(e){var a=e.target.value;u(a)},value:m}),r.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search"))))},u=t(9),d=t(10),b=t(12),p=t(11);function h(e){var a=e.id,t=e.categoryName,n=e.title,l=e.postedAt,c=e.summary,i=e.imageUrl;return r.a.createElement("div",{className:"row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"},r.a.createElement("div",{className:"col p-4 d-flex flex-column position-static"},r.a.createElement("strong",{className:"d-inline-block mb-2 text-primary"},t),r.a.createElement("h3",{className:"mb-0"},n),r.a.createElement("div",{className:"mb-1 text-muted"},l),r.a.createElement("p",{className:"card-text mb-auto"},c),r.a.createElement(o.b,{to:"/blog/"+a,className:"stretched-link"},"Continue reading")),r.a.createElement("div",{className:"col-auto d-none d-lg-block"},r.a.createElement("img",{className:"bd-placeholder-img",width:"200",height:"250","aria-label":"Placeholder: Thumbnail",src:i,alt:n})))}var v=function(e){Object(b.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).state={data:[],isLoading:!0,error:null},n}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/blog").then((function(e){return e.json()})).then((function(a){return e.setState({data:a.data,isLoading:!1,error:null})})).catch((function(a){e.setState({data:[],isLoading:!1,error:a.message})}))}},{key:"render",value:function(){return this.state.isLoading?"Loading...":null!==this.state.error?this.state.error:r.a.createElement("div",{className:"row mb-2"},this.state.data.map((function(e,a){return r.a.createElement("div",{className:"col-md-6",key:a},r.a.createElement(h,{id:e.id,categoryName:e.categoryName,title:e.title,postedAt:e.postedAt,summary:e.summary,imageUrl:e.imageUrl}))})))}}]),t}(r.a.Component);function g(e){var a=e.title,t=e.summary,n=e.imageUrl;return r.a.createElement("div",{className:"col-lg-8"},r.a.createElement("h1",{className:"mt-4"},"title"),r.a.createElement("img",{className:"img-fluid rounded",src:n,alt:a}),r.a.createElement("hr",null),r.a.createElement("p",{className:"lead"},t),r.a.createElement("blockquote",{className:"blockquote"},r.a.createElement("p",{className:"mb-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."),r.a.createElement("footer",{className:"blockquote-footer"},"Someone famous in",r.a.createElement("cite",{title:"Source Title"},"Source Title"))),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!"),r.a.createElement("hr",null))}var E=function(e){Object(b.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).state={data:{},isLoading:!0,error:null},n}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.articleId;fetch("/api/blog/"+a).then((function(e){return e.json()})).then((function(a){return e.setState({data:a.data,isLoading:!1,error:null})})).catch((function(a){e.setState({data:[],isLoading:!1,error:a.message})}))}},{key:"render",value:function(){if(this.state.isLoading)return"Loading...";if(null!==this.state.error)return this.state.error;var e=this.state.data||{};return r.a.createElement("div",{className:"row mb-2"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement(g,{title:e.title,summary:e.summary,imageUrl:e.imageUrl})))}}]),t}(r.a.Component);t(33);var f=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(m,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/about"},"About"),r.a.createElement(i.a,{path:"/blog/:articleId",component:E}),r.a.createElement(i.a,{path:"/blog"},r.a.createElement(v,null)),r.a.createElement(i.a,{path:"/"},"Home"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.3b21dae4.chunk.js.map