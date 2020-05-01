(this["webpackJsonpjson-placeholder"]=this["webpackJsonpjson-placeholder"]||[]).push([[0],{41:function(e,t,a){e.exports=a(98)},46:function(e,t,a){},48:function(e,t,a){},55:function(e,t,a){},58:function(e,t){},86:function(e,t,a){},90:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),o=a.n(c),s=(a(46),a(47),a(16)),l=a(17),u=a(40);a(48);var i=function(){var e=Object(n.useState)(!0),t=Object(u.a)(e,2),a=t[0],c=t[1];return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light rounded"},r.a.createElement("span",{className:"navbar-brand mb-0 h1"},"JSONPLACEHOLDER"),r.a.createElement("button",{className:"custom-toggler navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarsExample09","aria-controls":"navbarsExample09","aria-expanded":!a,"aria-label":"Toggle navigation",onClick:function(){return c(!a)}},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"".concat(a?"collapse":""," navbar-collapse"),id:"navbarsExample09"},r.a.createElement(s.c,{activeClassName:"active",className:"nav-item nav-link",to:"/"},"Usuarios"),r.a.createElement(s.c,{activeClassName:"active",className:"nav-item nav-link",to:"/posts"},"Posts")))};var m=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i,null),t)},p=a(10),d=a(11),E=a(13),h=a(12),f=a(7),v=a(3),b=a.n(v),N=a(6);function y(e){if(!e.ok)throw Error(e.statusText);return e.json()}function O(){return function(){var e=Object(N.a)(b.a.mark((function e(t,a){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://jsonplaceholder.typicode.com",t({type:"USER_CARGANDO"}),e.next=4,fetch("".concat("https://jsonplaceholder.typicode.com","/users")).then((function(e){return y(e)})).then((function(e){return n=e})).catch((function(e){t({type:"USER_ERROR",payload:"Ha ocurrido un error, intente m\xe1s tarde."})}));case 4:t({type:"GET_USERS",payload:n});case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}a(55);var g=a(25),R=a.n(g),S=a(26),_=a.n(S),C=(a(86),a(37)),j=a(38),w=function(e){Object(E.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).showDropdown=function(e){e.preventDefault(),n.setState({showDropdown:!n.state.showDropdown})},n.handleEdit=function(){"/"===n.props.history.location.pathname?n.props.history.push("/userForm/".concat(n.props.id)):n.props.history.push("/postForm/".concat(n.props.id))},n.state={showDropdown:!1},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"option-button"},r.a.createElement("button",{className:"btn btn-light",onClick:this.showDropdown},r.a.createElement(C.a,{icon:j.a})),this.state.showDropdown?r.a.createElement("div",{className:"Dropdown",ref:function(t){e.dropdownMenu=t}},r.a.createElement("div",{className:"flex-container"},r.a.createElement("button",{className:"btn btn-light mb-2",onClick:this.handleEdit},"Editar"),r.a.createElement("button",{className:"btn btn-light eliminar",onClick:function(){return e.props.delete(e.props.id)}},"Eliminar"))):null)}}]),a}(n.Component),P=Object(l.f)(w);var U=Object(l.f)((function(e){var t=e.users,a=e.handleOpenModal,n=e.deleteUser,c=e.history,o=new R.a(_.a,{base64:!0});return r.a.createElement("div",{className:"card-columns User"},t.map((function(e){return r.a.createElement("div",{className:"card mb-3",key:e.id},r.a.createElement(P,{id:e.id,delete:n}),r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-4"},r.a.createElement("img",{src:o.create(e.email),className:"card-img",alt:"..."})),r.a.createElement("div",{className:"col-8"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e.username),r.a.createElement("div",{className:"card-text"},r.a.createElement("p",null,r.a.createElement("strong",null,"Nombre: "),e.name),r.a.createElement("p",null,r.a.createElement("strong",null,"Ciudad: "),e.address.city),r.a.createElement("p",null,r.a.createElement("strong",null,"Sitio web: "),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://"+e.website},e.website)),r.a.createElement(s.b,{to:"/post/".concat(e.id),type:"button",className:"btn btn-outline-success mt-2 mr-2"},"Ver posts"),r.a.createElement("button",{type:"button",onClick:function(){return a(e)},className:"btn btn-outline-info mt-2"},"Ver Detalles"))))))})),r.a.createElement("div",{className:"card card-agregar",onClick:function(){return c.push("/userForm/0")}},r.a.createElement("div",{className:"plus"},r.a.createElement("strong",null,r.a.createElement("h3",null,"+"))),r.a.createElement("h3",null,"Agregar Usuario")))})),T=(a(90),a(1)),x=a.n(T);var M=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"title container-fluid mt-4 mb-4"},r.a.createElement(x.a,{width:250,height:40})),r.a.createElement("div",{className:"row row-cols-1 row-cols-sm-2 row-cols-md-3 Loader"},r.a.createElement("div",{className:"col col-md-4 mb-4"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-4"},r.a.createElement(x.a,{circle:!0,height:50,width:50})),r.a.createElement("div",{className:"col-8"},r.a.createElement(x.a,null),r.a.createElement(x.a,null),r.a.createElement(x.a,null),r.a.createElement(x.a,null))))),r.a.createElement("div",{className:"col col-md-4 mb-4"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-4"},r.a.createElement(x.a,{circle:!0,height:50,width:50})),r.a.createElement("div",{className:"col-8"},r.a.createElement(x.a,null),r.a.createElement(x.a,null),r.a.createElement(x.a,null),r.a.createElement(x.a,null))))),r.a.createElement("div",{className:"col col-md-4 mb-4"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-4"},r.a.createElement(x.a,{circle:!0,height:50,width:50})),r.a.createElement("div",{className:"col-8"},r.a.createElement(x.a,null),r.a.createElement(x.a,null),r.a.createElement(x.a,null),r.a.createElement(x.a,null))))),r.a.createElement("div",{className:"col col-md-4 mb-4"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-4"},r.a.createElement(x.a,{circle:!0,height:50,width:50})),r.a.createElement("div",{className:"col-8"},r.a.createElement(x.a,null),r.a.createElement(x.a,null),r.a.createElement(x.a,null),r.a.createElement(x.a,null))))),r.a.createElement("div",{className:"col col-md-4 mb-4"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-4"},r.a.createElement(x.a,{circle:!0,height:50,width:50})),r.a.createElement("div",{className:"col-8"},r.a.createElement(x.a,null),r.a.createElement(x.a,null),r.a.createElement(x.a,null),r.a.createElement(x.a,null))))),r.a.createElement("div",{className:"col col-md-4 mb-4"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-4"},r.a.createElement(x.a,{circle:!0,height:50,width:50})),r.a.createElement("div",{className:"col-8"},r.a.createElement(x.a,null),r.a.createElement(x.a,null),r.a.createElement(x.a,null),r.a.createElement(x.a,null))))),r.a.createElement("div",{className:"col col-md-4 mb-4"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-4"},r.a.createElement(x.a,{circle:!0,height:50,width:50})),r.a.createElement("div",{className:"col-8"},r.a.createElement(x.a,null),r.a.createElement(x.a,null),r.a.createElement(x.a,null),r.a.createElement(x.a,null))))),r.a.createElement("div",{className:"col col-md-4 mb-4"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-4"},r.a.createElement(x.a,{circle:!0,height:50,width:50})),r.a.createElement("div",{className:"col-8"},r.a.createElement(x.a,null),r.a.createElement(x.a,null),r.a.createElement(x.a,null),r.a.createElement(x.a,null))))),r.a.createElement("div",{className:"col col-md-4 mb-4"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-4"},r.a.createElement(x.a,{circle:!0,height:50,width:50})),r.a.createElement("div",{className:"col-8"},r.a.createElement(x.a,null),r.a.createElement(x.a,null),r.a.createElement(x.a,null),r.a.createElement(x.a,null)))))))};a(92);var D=function(e){var t=e.message;return r.a.createElement("div",{className:"Error"},r.a.createElement("div",{className:"alert alert-danger",role:"alert"},t))};a(93);var k=function(e){var t=e.children,a=e.isOpen,n=e.handleCloseModal;return a?o.a.createPortal(r.a.createElement("div",{className:"Modal"},r.a.createElement("div",{className:"Modal__container"},r.a.createElement("button",{onClick:n,className:"Modal__close-button"},"X"),t)),document.getElementById("modal")):null};a(94);var A=Object(f.b)((function(e){return{user:e.userReducer.user}}),null)((function(e){var t=e.isOpen,a=e.handleCloseModal,n=e.user;return r.a.createElement(k,{isOpen:t,handleCloseModal:a},r.a.createElement("div",{className:"UserModal"},r.a.createElement("h3",null,"Informaci\xf3n sobre ",n.username),r.a.createElement("div",{className:"dropdown-divider"}),r.a.createElement("p",null,r.a.createElement("strong",null,"Nombre: ")," ",n.name),r.a.createElement("p",null,r.a.createElement("strong",null,"Email: ")," ",n.email),r.a.createElement("p",null,r.a.createElement("strong",null,"Tel\xe9fono: ")," ",n.phone),r.a.createElement("p",null,r.a.createElement("strong",null,"Website: ")," ",n.website),r.a.createElement("h5",null,"Direcci\xf3n"),r.a.createElement("p",null,r.a.createElement("strong",null,"Ciudad: ")," ",n.address.city),r.a.createElement("p",null,r.a.createElement("strong",null,"Calle: ")," ",n.address.street),r.a.createElement("p",null,r.a.createElement("strong",null,"Suite: ")," ",n.address.suite),r.a.createElement("p",null,r.a.createElement("strong",null,"C\xf3digo postal: ")," ",n.address.zipcode),r.a.createElement("h5",null,"Compa\xf1\xeda"),r.a.createElement("p",null,r.a.createElement("strong",null,"Nombre: ")," ",n.company.name),r.a.createElement("p",null,r.a.createElement("strong",null,"Frase de enganche: ")," ",n.company.catchPhrase),r.a.createElement("p",null,r.a.createElement("strong",null,"Bs: ")," ",n.company.bs)),r.a.createElement("div",{className:"dropdown-divider"}),r.a.createElement("div",{className:"text-right"},r.a.createElement("button",{onClick:a,className:"btn btn-outline-primary"},"Cerrar")))}));a(95);var I=function(){return r.a.createElement("div",{className:"Spinner"},r.a.createElement("div",{className:"Spinner-container"},r.a.createElement("div",{className:"lds-ring"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement("h3",{className:"mt-4"},"Procesando...")))},L=function(e){Object(E.a)(a,e);var t=Object(h.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){0===this.props.userReducer.users.length&&this.props.getUsers()}},{key:"render",value:function(){return this.props.userReducer.cargando?r.a.createElement(M,null):this.props.userReducer.error?r.a.createElement(D,{message:this.props.userReducer.error}):this.props.userReducer.users?r.a.createElement("div",{className:"User container-fluid"},this.props.userReducer.spinner&&r.a.createElement(I,null),r.a.createElement("h1",{className:"mt-4"},"Usuarios"),r.a.createElement(U,{users:this.props.userReducer.users,handleOpenModal:this.props.handleOpenUserModal,deleteUser:this.props.deleteUser}),r.a.createElement(A,{isOpen:this.props.userReducer.modalIsOpen,handleCloseModal:this.props.handleCloseUserModal})):void 0}}]),a}(r.a.Component);var F={getUsers:O,deleteUser:function(e){return function(){var t=Object(N.a)(b.a.mark((function t(a,n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://jsonplaceholder.typicode.com",a({type:"USER_SPINNER"}),t.next=4,fetch("".concat("https://jsonplaceholder.typicode.com","/users/").concat(e),{method:"DELETE"}).then((function(e){return y(e)})).then((function(e){alert("El usuario ha sido eliminado con \xe9xito")})).catch((function(e){a({type:"USER_ERROR",payload:"Ha ocurrido un error, intente m\xe1s tarde."})}));case 4:a({type:"DELETE_USER_BY_ID"});case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},handleOpenUserModal:function(e){return{type:"HANDLE_OPEN_USER_MODAL",payload:e}},handleCloseUserModal:function(){return{type:"HANDLE_CLOSE_USER_MODAL"}}},B=Object(f.b)((function(e){return{userReducer:e.userReducer}}),F)(L);a(96);var G=Object(l.f)((function(e){var t=e.posts,a=e.deletePost,n=e.users,c=e.comments,o=e.handleOpenModal,s=e.history;return r.a.createElement("div",{className:"card-columns Post"},t.map((function(e){return r.a.createElement("div",{className:"card",key:e.id},r.a.createElement(P,{id:e.id,delete:a}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},l(e.title)),r.a.createElement("small",null,"Post creado por",r.a.createElement("strong",null,n.filter((function(t){return t.id===e.userId})).map((function(e){return" ".concat(e.username)})))),r.a.createElement("p",{className:"card-text"},l(e.body)),r.a.createElement("div",{className:"bottom-container"},r.a.createElement("small",null,c.filter((function(t){return t.postId===e.id})).length," ","Comentarios"),r.a.createElement("small",null,r.a.createElement("a",{href:"/",onClick:function(t){return function(e,t){e.preventDefault(),o(t)}(t,e)}},"Ver m\xe1s...")))))})),r.a.createElement("div",{className:"card card-agregar",onClick:function(){return s.push("/postForm/0")}},r.a.createElement("div",{className:"plus"},r.a.createElement("strong",null,r.a.createElement("h3",null,"+"))),r.a.createElement("h3",null,"Agregar Usuario")));function l(e){return e.charAt(0).toUpperCase()+e.slice(1)}}));function H(e){if(!e.ok)throw Error(e.statusText);return e.json()}function Y(e){return function(){var t=Object(N.a)(b.a.mark((function t(a,n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://jsonplaceholder.typicode.com",a({type:"POST_SPINNER"}),t.next=4,fetch("".concat("https://jsonplaceholder.typicode.com","/posts/").concat(e),{method:"DELETE"}).then((function(e){return H(e)})).then((function(e){alert("El post ha sido eliminado con \xe9xito")})).catch((function(e){a({type:"POST_ERROR",payload:"Ha ocurrido un error, intente m\xe1s tarde."})}));case 4:a({type:"DELETE_POST_BY_ID"});case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}function J(e){return{type:"HANDLE_OPEN_POST_MODAL",payload:e}}function z(){return{type:"HANDLE_CLOSE_POST_MODAL"}}function V(e){if(!e.ok)throw Error(e.statusText);return e.json()}a(97);var W=Object(f.b)((function(e){return{users:e.userReducer.users,post:e.postReducer.post,comments:e.commentReducer.comments}}),null)((function(e){var t=e.isOpen,a=e.handleCloseModal,n=e.users,c=e.post,o=e.comments;return r.a.createElement(k,{isOpen:t,handleCloseModal:a},r.a.createElement("div",{className:"PostModal"},r.a.createElement("h3",{className:"mb-0"},s(c.title)),r.a.createElement("small",null,"Post creado por",r.a.createElement("strong",null,n.filter((function(e){return e.id===c.userId})).map((function(e){return" ".concat(e.username)})))),r.a.createElement("p",{className:"card-text mt-2 mb-4"},s(c.body)),r.a.createElement("h5",null,"Comentarios:"),r.a.createElement("ul",{className:"list-group"},o.filter((function(e){return e.postId===c.id})).map((function(e){return r.a.createElement("li",{key:"".concat(e.postId,"-").concat(e.id),className:"list-group-item"},r.a.createElement("p",{className:"mb-0"},s(e.name)),r.a.createElement("small",null,"Comentario de ",r.a.createElement("strong",null,e.email)),r.a.createElement("p",{className:"mt-2"},s(e.body)))})))));function s(e){return e.charAt(0).toUpperCase()+e.slice(1)}})),X=function(e){Object(E.a)(a,e);var t=Object(h.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.props.getPosts(),0===this.props.userReducer.users.length&&this.props.getUsers(),0===this.props.commentReducer.comments.length&&this.props.getComments()}},{key:"render",value:function(){return this.props.postReducer.cargando?r.a.createElement(M,null):this.props.postReducer.error?r.a.createElement(D,{message:this.props.postReducer.error}):r.a.createElement("div",{className:"PostContainer container-fluid"},this.props.postReducer.spinner&&r.a.createElement(I,null),r.a.createElement("h1",{className:"mt-4"},"Publicaciones"),r.a.createElement(G,{posts:this.props.postReducer.posts,deletePost:this.props.deletePost,handleOpenModal:this.props.handleOpenPostModal,users:this.props.userReducer.users,comments:this.props.commentReducer.comments}),r.a.createElement(W,{isOpen:this.props.postReducer.modalIsOpen,handleCloseModal:this.props.handleClosePostModal}))}}]),a}(r.a.Component);var $={getPosts:function(){return function(){var e=Object(N.a)(b.a.mark((function e(t,a){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://jsonplaceholder.typicode.com",t({type:"POST_CARGANDO"}),e.next=4,fetch("".concat("https://jsonplaceholder.typicode.com","/posts")).then((function(e){return H(e)})).then((function(e){return n=e})).catch((function(e){t({type:"POST_ERROR",payload:"Ha ocurrido un error, intente m\xe1s tarde."})}));case 4:t({type:"GET_POSTS",payload:n});case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},deletePost:Y,handleOpenPostModal:J,handleClosePostModal:z,getUsers:O,getComments:function(){return function(){var e=Object(N.a)(b.a.mark((function e(t,a){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://jsonplaceholder.typicode.com",t({type:"COMMENT_CARGANDO"}),e.next=4,fetch("".concat("https://jsonplaceholder.typicode.com","/comments")).then((function(e){return V(e)})).then((function(e){return n=e})).catch((function(e){t({type:"COMMENT_ERROR",payload:"Ha ocurrido un error, intente m\xe1s tarde."})}));case 4:t({type:"GET_COMMENTS",payload:n});case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}},q=Object(f.b)((function(e){return{postReducer:e.postReducer,userReducer:e.userReducer,commentReducer:e.commentReducer}}),$)(X),K=function(e){Object(E.a)(a,e);var t=Object(h.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=Number(this.props.match.params.userId);0===this.props.userReducer.users.length?this.props.getUserById(t):this.props.userReducer.users.filter((function(e){return e.id===t})).map((function(t){return e.props.setUser(t)})),this.props.getPostsByUserId(t),this.props.getCommentsByUser(t)}},{key:"render",value:function(){return this.props.userReducer.cargando||this.props.postReducer.cargando||this.props.commentReducer.cargando?r.a.createElement(M,null):this.props.userReducer.error?r.a.createElement(D,{message:this.props.userReducer.error}):this.props.postReducer.error?r.a.createElement(D,{message:this.props.postReducer.error}):this.props.commentReducer.error?r.a.createElement(D,{message:this.props.commentReducer.error}):r.a.createElement("div",{className:"PostsByUserContainer container-fluid"},this.props.postReducer.spinner&&r.a.createElement(I,null),r.a.createElement("h1",{className:"mt-4"},"Publicaciones de usuario"),r.a.createElement(G,{users:[this.props.userReducer.user],posts:this.props.postReducer.posts,deletePost:this.props.deletePost,handleOpenModal:this.props.handleOpenPostModal,comments:this.props.commentReducer.comments}),r.a.createElement(W,{isOpen:this.props.postReducer.modalIsOpen,handleCloseModal:this.props.handleClosePostModal}))}}]),a}(r.a.Component);var Q={getUserById:function(e){return function(){var t=Object(N.a)(b.a.mark((function t(a,n){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://jsonplaceholder.typicode.com",a({type:"USER_CARGANDO"}),t.next=4,fetch("".concat("https://jsonplaceholder.typicode.com","/users/").concat(e)).then((function(e){return y(e)})).then((function(e){return r=e})).catch((function(e){a({type:"USER_ERROR",payload:"Ha ocurrido un error, intente m\xe1s tarde."})}));case 4:a({type:"GET_USER_BY_ID",payload:r});case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},setUser:function(e){return{type:"SET_USER",payload:e}},getPostsByUserId:function(e){return function(){var t=Object(N.a)(b.a.mark((function t(a,n){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://jsonplaceholder.typicode.com",a({type:"POST_CARGANDO"}),t.next=4,fetch("".concat("https://jsonplaceholder.typicode.com","/posts?userId=").concat(e)).then((function(e){return H(e)})).then((function(e){return r=e})).catch((function(e){a({type:"POST_ERROR",payload:"Ha ocurrido un error, intente m\xe1s tarde."})}));case 4:a({type:"GET_POSTS_BY_USER_ID",payload:r});case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},handleOpenPostModal:J,handleClosePostModal:z,getCommentsByUser:function(e){return function(){var t=Object(N.a)(b.a.mark((function t(a,n){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://jsonplaceholder.typicode.com",a({type:"COMMENT_CARGANDO"}),t.next=4,fetch("".concat("https://jsonplaceholder.typicode.com","/comments?userId=").concat(e)).then((function(e){return V(e)})).then((function(e){return r=e})).catch((function(e){a({type:"COMMENT_ERROR",payload:"Ha ocurrido un error, intente m\xe1s tarde."})}));case 4:a({type:"GET_COMMENTS_BY_USER",payload:r});case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},deletePost:Y},Z=Object(f.b)((function(e){return{postReducer:e.postReducer,userReducer:e.userReducer,commentReducer:e.commentReducer}}),Q)(K),ee=a(20),te=a(4);var ae=function(e){return r.a.createElement("div",{className:"UserForm"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"offset-md-3 col-md-6 col-12"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:e.avatar.create(e.user.email),className:"card-img",alt:"..."})),r.a.createElement("form",{onSubmit:e.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Nombre y Apellido"),r.a.createElement("input",{onChange:e.onChange,type:"text",name:"name",className:"form-control",id:"name",value:e.user.name})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Nombre de usuario"),r.a.createElement("input",{onChange:e.onChange,type:"text",name:"username",className:"form-control",id:"username",value:e.user.username})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Correo electr\xf3nico"),r.a.createElement("input",{onChange:e.onChange,type:"email",name:"email",className:"form-control",id:"email",value:e.user.email})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"phone"},"Tel\xe9fono de contacto"),r.a.createElement("input",{onChange:e.onChange,type:"tel",name:"phone",className:"form-control",id:"phone",value:e.user.phone})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Sitio web"),r.a.createElement("input",{onChange:e.onChange,type:"text",name:"website",className:"form-control",id:"website",value:e.user.website})),r.a.createElement("div",{className:"col text-center"},r.a.createElement("button",{type:"submit",className:"btn btn-primary mb-4"},"Enviar"))))))},ne=function(e){Object(E.a)(a,e);var t=Object(h.a)(a);function a(e){var n;Object(p.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({user:Object(te.a)({},n.state.user,Object(ee.a)({},e.target.name,e.target.value))})},n.handleSubmit=function(){var e=Object(N.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),"Crear Usuario"!==n.state.titulo){e.next=6;break}return e.next=4,n.props.createUser(n.state.user);case 4:e.next=8;break;case 6:return e.next=8,n.props.updateUser(n.state.user);case 8:n.props.history.push("/");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var r=new R.a(_.a,{base64:!0});return n.state={titulo:"",avatar:r,user:{id:"",name:"",username:"",email:"",phone:"",website:""}},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;0===Number(t)?this.setState({titulo:"Crear Usuario"}):(this.setState({titulo:"Editar Usuario"}),this.props.userReducer.users.filter((function(e){return e.id===Number(t)})).map((function(t){return e.setState({user:t})})))}},{key:"render",value:function(){return r.a.createElement("div",{className:"UserFormContainer container-fluid"},this.props.userReducer.spinner&&r.a.createElement(I,null),this.props.userReducer.error&&r.a.createElement(D,{message:this.props.userReducer.error}),r.a.createElement("h1",{className:"mt-4 mb-4 text-center"},this.state.titulo),r.a.createElement(ae,{user:this.state.user,avatar:this.state.avatar,onChange:this.handleChange,onSubmit:this.handleSubmit}))}}]),a}(r.a.Component);var re={createUser:function(e){return function(){var t=Object(N.a)(b.a.mark((function t(a,n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://jsonplaceholder.typicode.com",a({type:"USER_SPINNER"}),t.next=4,fetch("".concat("https://jsonplaceholder.typicode.com","/users"),{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return y(e)})).then((function(e){return alert("El usuario ha sido creado con \xe9xito")})).catch((function(e){a({type:"USER_ERROR",payload:"Ha ocurrido un error, intente m\xe1s tarde."})}));case 4:a({type:"CREATE_USER"});case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},updateUser:function(e){return function(){var t=Object(N.a)(b.a.mark((function t(a,n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://jsonplaceholder.typicode.com",a({type:"USER_SPINNER"}),t.next=4,fetch("".concat("https://jsonplaceholder.typicode.com","/users/").concat(e.id),{method:"PUT",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return y(e)})).then((function(e){return alert("El usuario ha sido actualizado con \xe9xito")})).catch((function(e){a({type:"USER_ERROR",payload:"Ha ocurrido un error, intente m\xe1s tarde. ".concat(e)})}));case 4:a({type:"UPDATE_USER"});case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}},ce=Object(f.b)((function(e){return{userReducer:e.userReducer}}),re)(ne);var oe=function(e){return r.a.createElement("div",{className:"PostForm"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"offset-md-3 col-md-6 col-12"},r.a.createElement("form",{onSubmit:e.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"title"},"T\xedtulo"),r.a.createElement("input",{onChange:e.onChange,type:"text",name:"title",className:"form-control",id:"title",value:e.post.title})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"body"},"Cuerpo del post"),r.a.createElement("textarea",{onChange:e.onChange,type:"text",rows:"5",name:"body",className:"form-control",id:"body",value:e.post.body})),r.a.createElement("div",{className:"col text-center"},r.a.createElement("button",{type:"submit",className:"btn btn-primary mb-4"},"Enviar"))))))},se=function(e){Object(E.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({post:Object(te.a)({},n.state.post,Object(ee.a)({},e.target.name,e.target.value))})},n.handleSubmit=function(){var e=Object(N.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),"Crear Post"!==n.state.titulo){e.next=6;break}return e.next=4,n.props.createPost(n.state.post);case 4:e.next=8;break;case 6:return e.next=8,n.props.updatePost(n.state.post);case 8:n.props.history.goBack();case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={titulo:"",post:{id:"",title:"",body:""}},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;0===Number(t)?this.setState({titulo:"Crear Post"}):(this.setState({titulo:"Editar Post"}),this.props.postReducer.posts.filter((function(e){return e.id===Number(t)})).map((function(t){return e.setState({post:t})})))}},{key:"render",value:function(){return r.a.createElement("div",{className:"UserFormContainer container-fluid"},this.props.postReducer.spinner&&r.a.createElement(I,null),this.props.postReducer.error&&r.a.createElement(D,{message:this.props.postReducer.error}),r.a.createElement("h1",{className:"mt-4 mb-4 text-center"},this.state.titulo),r.a.createElement(oe,{post:this.state.post,onChange:this.handleChange,onSubmit:this.handleSubmit}))}}]),a}(r.a.Component);var le={createPost:function(e){return function(){var t=Object(N.a)(b.a.mark((function t(a,n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://jsonplaceholder.typicode.com",a({type:"POST_SPINNER"}),t.next=4,fetch("".concat("https://jsonplaceholder.typicode.com","/posts"),{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return H(e)})).then((function(e){return alert("El post ha sido creado con \xe9xito")})).catch((function(e){a({type:"POST_ERROR",payload:"Ha ocurrido un error, intente m\xe1s tarde."})}));case 4:a({type:"CREATE_POST"});case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},updatePost:function(e){return function(){var t=Object(N.a)(b.a.mark((function t(a,n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://jsonplaceholder.typicode.com",a({type:"POST_SPINNER"}),t.next=4,fetch("".concat("https://jsonplaceholder.typicode.com","/posts/").concat(e.id),{method:"PUT",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return H(e)})).then((function(e){return alert("El post ha sido actualizado con \xe9xito")})).catch((function(e){a({type:"USER_ERROR",payload:"Ha ocurrido un error, intente m\xe1s tarde. ".concat(e)})}));case 4:a({type:"UPDATE_POST"});case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}},ue=Object(f.b)((function(e){return{postReducer:e.postReducer}}),le)(se);var ie=function(){return r.a.createElement(s.a,null,r.a.createElement(m,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:B}),r.a.createElement(l.a,{exact:!0,path:"/posts",component:q}),r.a.createElement(l.a,{exact:!0,path:"/post/:userId",component:Z}),r.a.createElement(l.a,{exact:!0,path:"/userForm/:id",component:ce}),r.a.createElement(l.a,{exact:!0,path:"/postForm/:id",component:ue}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var me=a(18),pe=a(39),de={users:[],user:{address:{street:"",suite:"",city:"",zipcode:"",geo:{lat:"",lng:""}},company:{name:"",catchPhrase:"",bs:""},email:"",id:"",name:"",phone:"",username:"",website:""},cargando:!1,spinner:!1,error:null,modalIsOpen:!1};var Ee={posts:[],post:{userId:"",id:"",title:"",body:""},cargando:!1,spinner:!1,error:null,modalIsOpen:!1};var he={comments:[],cargando:!1,error:null};var fe=Object(me.c)({userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USERS":return Object(te.a)({},e,{users:t.payload,cargando:!1,spinner:!1});case"GET_USER_BY_ID":case"SET_USER":return Object(te.a)({},e,{user:t.payload,cargando:!1,spinner:!1});case"DELETE_USER_BY_ID":case"CREATE_USER":case"UPDATE_USER":return Object(te.a)({},e,{cargando:!1,spinner:!1});case"HANDLE_OPEN_USER_MODAL":return Object(te.a)({},e,{modalIsOpen:!0,user:t.payload,cargando:!1,spinner:!1});case"HANDLE_CLOSE_USER_MODAL":return Object(te.a)({},e,{modalIsOpen:!1,user:{address:{street:"",suite:"",city:"",zipcode:"",geo:{lat:"",lng:""}},company:{name:"",catchPhrase:"",bs:""},email:"",id:"",name:"",phone:"",username:"",website:""},cargando:!1,spinner:!1});case"USER_CARGANDO":return Object(te.a)({},e,{cargando:!0});case"USER_SPINNER":return Object(te.a)({},e,{spinner:!0});case"USER_ERROR":return Object(te.a)({},e,{error:t.payload,cargando:!1,spinner:!1});default:return e}},postReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_POSTS":case"GET_POSTS_BY_USER_ID":return Object(te.a)({},e,{posts:t.payload,cargando:!1,spinner:!1});case"DELETE_POST_BY_ID":case"CREATE_POST":case"UPDATE_POST":return Object(te.a)({},e,{cargando:!1,spinner:!1});case"POST_ERROR":return Object(te.a)({},e,{error:t.payload,cargando:!1,spinner:!1});case"POST_CARGANDO":return Object(te.a)({},e,{cargando:!0});case"POST_SPINNER":return Object(te.a)({},e,{spinner:!0});case"HANDLE_OPEN_POST_MODAL":return Object(te.a)({},e,{modalIsOpen:!0,post:t.payload,cargando:!1,spinner:!1});case"HANDLE_CLOSE_POST_MODAL":return Object(te.a)({},e,{modalIsOpen:!1,post:{userId:"",id:"",title:"",body:""},cargando:!1,spinner:!1});default:return e}},commentReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_COMMENTS":case"GET_COMMENTS_BY_USER":return Object(te.a)({},e,{comments:t.payload,cargando:!1});case"COMMENT_CARGANDO":return Object(te.a)({},e,{cargando:!0});case"COMMENT_ERROR":return Object(te.a)({},e,{error:t.payload,cargando:!1});default:return e}}}),ve=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||me.d,be=Object(me.e)(fe,ve(Object(me.a)(pe.a)));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f.a,{store:be},r.a.createElement(ie,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.981525f0.chunk.js.map