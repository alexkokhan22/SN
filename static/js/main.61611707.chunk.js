(this.webpackJsonpsn=this.webpackJsonpsn||[]).push([[0],{130:function(e,t,n){e.exports={img:"Users_img__2T2Ny"}},132:function(e,t,n){e.exports={item:"MyPosts_item__31-SE"}},133:function(e,t,n){e.exports={post:"Post_post__CXO0f"}},134:function(e,t,n){e.exports={error:"login_error__2ZymJ"}},15:function(e,t,n){e.exports={nav:"Nav_nav__2l9hx",item:"Nav_item__2LBG3",active:"Nav_active__1Ez4Q"}},245:function(e,t,n){},287:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n(1),i=n.n(r),a=(n(93),n(8)),c=n(43),o=n(3),u={dialogs:[{id:1,name:"Alex"},{id:2,name:"Roma"},{id:3,name:"Lera"}],messages:[{id:1,message:"Hi"},{id:2,message:"How are you ?"}]},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dialogs/Add-New-Message":return Object(o.a)(Object(o.a)({},e),{},{messages:[].concat(Object(c.a)(e.messages),[{id:4,message:t.addMessage}])});default:return e}},j=n(126),d=n.n(j).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"96882b02-a427-4592-b196-6833093c647f"}}),b={getUsers:function(e,t){return d.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},unFollowUsers:function(e){return d.delete("follow/".concat(e)).then((function(e){return e.data}))},followUsers:function(e){return d.post("follow/".concat(e)).then((function(e){return e.data}))}},p=function(e){return d.get("profile/"+e).then((function(e){return e.data}))},f=function(e){return d.get("profile/status/"+e).then((function(e){return e.data}))},O=function(e){return d.put("profile/status/",{status:e}).then((function(e){return e.data}))},h=function(){return d.get("auth/me").then((function(e){return e.data}))},g=function(e,t,n){return d.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},m=function(){return d.delete("auth/login").then((function(e){return e.data}))},x={posts:[{id:1,message:" My first post",likeCount:11},{id:2,message:"Hi, how are you",likeCount:21}],profile:{aboutMe:"",contacts:{skype:"",vk:"",facebook:"",icq:"",email:"",googlePlus:"",twitter:"",instagram:"",whatsApp:""},lookingForAJob:!0,lookingForAJobDescription:"",fullName:"",userId:1,photos:{small:"",large:""}},status:""},v=function(e){return{type:"profile/SET-USERS-STATUS",status:e}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"profile/ADD-POST":return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[{id:3,message:t.addPost,likeCount:0}])});case"profile/SET-USERS-PROFILE":return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case"profile/SET-USERS-STATUS":return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case"profile/DELETE-POSTS":return Object(o.a)(Object(o.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});default:return e}},A=n(13),S=n.n(A),E=n(26),P={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},N=function(e,t,n){return e.map((function(e){return e.id===t?Object(o.a)(Object(o.a)({},e),{},{followed:n}):e}))},C=function(e){return{type:"users/FOLLOW",userId:e}},U=function(e){return{type:"users/UNFOLLOW",userId:e}},y=function(e){return{type:"users/IS_FETCHING",isFetching:e}},I=function(e,t){return{type:"users/TOGGLE_FOLLOWING_IN_PROGRESS",isFetching:e,usersId:t}},k=function(){var e=Object(E.a)(S.a.mark((function e(t,n,s,r){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(I(!0,t)),e.next=3,s(t);case 3:0===e.sent.resultCode&&n(r(t)),n(I(!1,t));case 6:case"end":return e.stop()}}),e)})));return function(t,n,s,r){return e.apply(this,arguments)}}(),_=n(38),F={id:null,login:null,email:null,isAuth:!1},T=function(e,t,n,s){return{type:"auth/SET-USERS-DATA",data:{id:e,login:t,email:n,isAuth:s}}},L=function(){return function(){var e=Object(E.a)(S.a.mark((function e(t){var n,s,r,i,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:0===(n=e.sent).resultCode&&(s=n.data,r=s.id,i=s.login,a=s.email,t(T(r,i,a,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},z=function(){return function(){var e=Object(E.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:0===e.sent.resultCode&&t(T(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},B=n(127),D=n(125),M={initialized:!1},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/SET-INITIALIZED":return Object(o.a)(Object(o.a)({},e),{},{initialized:!0});default:return e}},R=Object(a.c)({profile:w,dialogs:l,users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"users/FOLLOW":return Object(o.a)(Object(o.a)({},e),{},{users:N(e.users,t.userId,!0)});case"users/UNFOLLOW":return Object(o.a)(Object(o.a)({},e),{},{users:N(e.users,t.userId,!1)});case"users/SET_USERS":return Object(o.a)(Object(o.a)({},e),{},{users:t.users});case"users/CHANGE_CURRENT_PAGE":return Object(o.a)(Object(o.a)({},e),{},{currentPage:t.currentPage});case"users/SET_TOTAL_USERS_COUNT":return Object(o.a)(Object(o.a)({},e),{},{totalUsersCount:t.totalCount});case"users/IS_FETCHING":return Object(o.a)(Object(o.a)({},e),{},{isFetching:t.isFetching});case"users/TOGGLE_FOLLOWING_IN_PROGRESS":return Object(o.a)(Object(o.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(c.a)(e.followingInProgress),[t.usersId]):e.followingInProgress.filter((function(e){return e!=t.usersId}))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET-USERS-DATA":return Object(o.a)(Object(o.a)({},e),t.data);default:return e}},app:Q,form:D.a}),Z=Object(a.e)(R,Object(a.a)(B.a)),G=n(62),W=n.n(G),V=n(20),H=n(21),J=n(23),Y=n(22),K=(n(245),n(12)),X=n(15),q=n.n(X),$=function(){return Object(s.jsxs)("nav",{className:q.a.nav,children:[Object(s.jsx)("div",{className:q.a.item,children:Object(s.jsx)(K.b,{to:"/profile",activeClassName:q.a.active,children:"Profile"})}),Object(s.jsx)("div",{className:q.a.item,children:Object(s.jsx)(K.b,{to:"/dialogs",activeClassName:q.a.active,children:"Messages"})}),Object(s.jsx)("div",{className:q.a.item,children:Object(s.jsx)(K.b,{to:"/users",activeClassName:q.a.active,children:"Users"})}),Object(s.jsx)("div",{className:q.a.item,children:Object(s.jsx)(K.b,{to:"/news",activeClassName:q.a.active,children:"News"})}),Object(s.jsx)("div",{className:q.a.item,children:Object(s.jsx)(K.b,{to:"/music",activeClassName:q.a.active,children:"Music"})}),Object(s.jsx)("div",{className:q.a.item,children:Object(s.jsx)(K.b,{to:"/login",activeClassName:q.a.active,children:"Login"})}),Object(s.jsx)("div",{className:q.a.item,children:Object(s.jsx)(K.b,{to:"/settings",activeClassName:q.a.active,children:"Settings"})})]})},ee=function(){return Object(s.jsx)("div",{children:"Music"})},te=function(){return Object(s.jsx)("div",{children:"News"})},ne=function(){return Object(s.jsx)("div",{children:"Settings"})},se=n(11),re=n(29),ie=n.n(re),ae=function(e){return Object(s.jsx)("div",{className:ie.a.item+" "+ie.a.active,children:Object(s.jsx)(K.b,{to:"/dialogs/"+e.id,children:e.name})})},ce=function(e){return Object(s.jsx)("div",{className:ie.a.message,children:e.message})},oe=n(123),ue=n(124),le=n(53),je=n(88),de=n.n(je),be=function(e){var t=e.meta,n=t.touched,r=t.error,i=e.children,a=n&&r;return Object(s.jsxs)("div",{className:de.a.formControl+" "+(a?de.a.error:""),children:[Object(s.jsx)("div",{children:i}),a&&Object(s.jsx)("span",{children:r})]})},pe=function(e){var t=e.input,n=(e.meta,Object(le.a)(e,["input","meta"]));return Object(s.jsxs)(be,Object(o.a)(Object(o.a)({},e),{},{children:[" ",Object(s.jsx)("textarea",Object(o.a)(Object(o.a)({},t),n))]}))},fe=function(e){var t=e.input,n=(e.meta,Object(le.a)(e,["input","meta"]));return Object(s.jsx)(be,Object(o.a)(Object(o.a)({},e),{},{children:Object(s.jsx)("input",Object(o.a)(Object(o.a)({},t),n))}))},Oe=function(e){if(!e)return"Field is required"},he=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}},ge=he(100),me=Object(ue.a)({form:"messageForm"})((function(e){return Object(s.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(s.jsx)("div",{children:Object(s.jsx)(oe.a,{component:pe,name:"addMessage",validate:[Oe,ge]})}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{children:"Add message"})})]})})),xe=function(e){var t=e.dialogs.dialogs.map((function(e){return Object(s.jsx)(ae,{name:e.name,id:e.id},e.id)})),n=e.dialogs.messages.map((function(e){return Object(s.jsx)(ce,{message:e.message},e.id)}));return Object(s.jsxs)("div",{className:ie.a.dialogs,children:[Object(s.jsx)("div",{className:ie.a.dialogsItem,children:t}),Object(s.jsx)("div",{className:ie.a.messages,children:n}),Object(s.jsx)(me,{onSubmit:function(t){e.onChangeText(t.addMessage)}})]})},ve=n(10),we=function(e){return{isAuth:e.auth.isAuth}};function Ae(e){var t=function(t){Object(J.a)(r,t);var n=Object(Y.a)(r);function r(){return Object(V.a)(this,r),n.apply(this,arguments)}return Object(H.a)(r,[{key:"render",value:function(){var t=this.props,n=t.isAuth,r=Object(le.a)(t,["isAuth"]);return!1===n?Object(s.jsx)(se.a,{to:"/login"}):Object(s.jsx)(e,Object(o.a)({},r))}}]),r}(i.a.Component);return Object(ve.b)(we)(t)}var Se=Object(a.d)(Object(ve.b)((function(e){return{dialogs:e.dialogs}}),(function(e){return{onChangeText:function(t){e(function(e){return{type:"dialogs/Add-New-Message",addMessage:e,newTextMessage:""}}(t))}}})),Ae)(xe),Ee=n(135),Pe=n(91),Ne=n.n(Pe),Ce=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],i=1;i<=t;i++)n.push(i);var a=Math.ceil(t/e.portionSize),c=Object(r.useState)(1),o=Object(Ee.a)(c,2),u=o[0],l=o[1],j=(u-1)*e.portionSize+1,d=u*e.portionSize;return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:Ne.a.paginator,children:u>1&&Object(s.jsx)("button",{onClick:function(){return l(u-1)},children:"prev"})}),n.filter((function(e){return e>=j&&e<=d})).map((function(t){return Object(s.jsx)("span",{className:e.currentPage===t?Ne.a.selectedPage:"",onClick:function(){return e.onPageChanged(t)},children:t})})),a>u&&Object(s.jsx)("button",{onClick:function(){return l(u+1)},children:"next"})]})},Ue=n(130),ye=n.n(Ue),Ie=n.p+"static/media/kisspng-avatar-user-computer-icons-software-developer-5b327cc9cc15f7.872727801530035401836.e582e4ba.png",ke=function(e){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("span",{children:[Object(s.jsx)("div",{children:Object(s.jsx)(K.b,{to:"/profile/"+e.users.id,children:Object(s.jsx)("img",{className:ye.a.img,src:null!=e.users.photos.small?e.users.photos.small:Ie})})}),Object(s.jsx)("div",{children:e.users.followed?Object(s.jsx)("button",{disabled:e.followingInProgress.some((function(t){return t===e.users.id})),onClick:function(){e.unFollowUsers(e.users.id)},children:"unFollow"}):Object(s.jsx)("button",{disabled:e.followingInProgress.some((function(t){return t===e.users.id})),onClick:function(){e.followUsers(e.users.id)},children:"Follow"})})]}),Object(s.jsx)("span",{children:Object(s.jsxs)("span",{children:[Object(s.jsx)("div",{children:e.users.name}),Object(s.jsx)("div",{children:e.users.status})]})})]})},_e=function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)(Ce,{totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,onPageChanged:e.onPageChanged,portionSize:10}),e.users.map((function(t){return Object(s.jsx)(ke,{users:t,followUsers:e.followUsers,unFollowUsers:e.unFollowUsers,toggleFollowingInProgress:e.toggleFollowingInProgress,followingInProgress:e.followingInProgress},t.id)}))]})},Fe=n.p+"static/media/Spin-1s-200px.c4b2521a.svg",Te=function(){return Object(s.jsx)("div",{children:Object(s.jsx)("img",{src:Fe})})},Le=n(131),ze=function(e){return e.users.users},Be=(Object(Le.a)(ze,(function(e){return e.filter((function(e){return e}))})),function(e){return e.users.pageSize}),De=function(e){return e.users.totalUsersCount},Me=function(e){return e.users.currentPage},Qe=function(e){return e.users.isFetching},Re=function(e){return e.users.followingInProgress},Ze=function(e){return e.auth.isAuth},Ge=function(e){Object(J.a)(n,e);var t=Object(Y.a)(n);function n(){var e;Object(V.a)(this,n);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.changeCurrentPage(t),e.props.getUser(t,e.props.pageSize)},e}return Object(H.a)(n,[{key:"componentDidMount",value:function(){this.props.getUser(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(s.jsxs)(s.Fragment,{children:[this.props.isFetching?Object(s.jsx)(Te,{}):null,Object(s.jsx)(_e,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,unFollowUsers:this.props.unFollow,followUsers:this.props.follow,toggleFollowingInProgress:this.props.toggleFollowingInProgress,followingInProgress:this.props.followingInProgress})]})}}]),n}(i.a.Component),We=Object(a.d)(Object(ve.b)((function(e){return{users:ze(e),pageSize:Be(e),totalUsersCount:De(e),currentPage:Me(e),isFetching:Qe(e),followingInProgress:Re(e),isAuth:Ze(e)}}),{follow:function(e){return function(){var t=Object(E.a)(S.a.mark((function t(n){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(e,n,b.followUsers.bind(b),C);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unFollow:function(e){return function(){var t=Object(E.a)(S.a.mark((function t(n){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(e,n,b.unFollowUsers.bind(b),U);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},changeCurrentPage:function(e){return{type:"users/CHANGE_CURRENT_PAGE",currentPage:e}},toggleFollowingInProgress:I,getUser:function(e,t){return function(){var n=Object(E.a)(S.a.mark((function n(s){var r;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s(y(!0)),n.next=3,b.getUsers(e,t);case 3:r=n.sent,s(y(!1)),s({type:"users/SET_USERS",users:r.items}),s({type:"users/SET_TOTAL_USERS_COUNT",totalCount:r.totalCount});case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(Ge),Ve=n(67),He=n.n(Ve),Je=function(e){Object(J.a)(n,e);var t=Object(Y.a)(n);function n(){var e;Object(V.a)(this,n);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={editMode:!1,status:e.props.status},e.onDoubleClick=function(){e.setState({editMode:!0})},e.onBlur=function(){e.setState({editMode:!1}),e.props.updateStatus(e.state.status)},e}return Object(H.a)(n,[{key:"componentDidUpdate",value:function(e,t,n){e.status!==this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){var e=this;return Object(s.jsx)("div",{children:this.state.editMode?Object(s.jsx)("div",{children:Object(s.jsx)("input",{autoFocus:!0,onChange:function(t){e.setState({status:t.currentTarget.value})},onBlur:this.onBlur,value:this.state.status})}):Object(s.jsx)("div",{children:Object(s.jsx)("span",{onDoubleClick:this.onDoubleClick,children:this.props.status?this.props.status:"no status"})})})}}]),n}(i.a.Component),Ye=function(e){var t;return e.profile?Object(s.jsxs)("div",{className:He.a.profileInfo,children:[Object(s.jsx)("div",{className:He.a.img,children:Object(s.jsx)("img",{src:"https://coolbackgrounds.io/images/backgrounds/index/compute-ea4c57a4.png"})}),Object(s.jsxs)("div",{className:He.a.ava,children:[Object(s.jsx)("img",{src:null===(t=e.profile.photos)||void 0===t?void 0:t.large}),Object(s.jsx)(Je,{status:e.status,updateStatus:e.updateStatus}),Object(s.jsx)("div",{children:e.profile.fullName}),Object(s.jsx)("div",{children:e.profile.lookingForAJob}),Object(s.jsx)("div",{children:e.profile.lookingForAJobDescription})]})]}):Object(s.jsx)(Te,{})},Ke=n(132),Xe=n.n(Ke),qe=n(133),$e=n.n(qe),et=function(e){return Object(s.jsxs)("div",{className:$e.a.post,children:[Object(s.jsx)("div",{children:Object(s.jsx)("img",{src:"https://vk-wiki.ru/wp-content/uploads/2019/06/user-1.png"})}),Object(s.jsx)("div",{children:e.message}),Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{children:"Like"}),Object(s.jsx)("span",{children:e.likeCount})]})]})},tt=he(30),nt=Object(ue.a)({form:"messageForm"})((function(e){return Object(s.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(s.jsx)("div",{children:Object(s.jsx)(oe.a,{component:pe,name:"addPost",validate:[Oe,tt],placeholder:"hi"})}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{children:"Add message"})})]})})),st=i.a.memo((function(e){var t=e.profile.posts.map((function(e){return Object(s.jsx)(et,{message:e.message,likeCount:e.likeCount},e.id)}));return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:Xe.a.item,children:Object(s.jsx)("h3",{children:"My post"})}),Object(s.jsx)(nt,{onSubmit:function(t){e.addPost(t.addPost)}}),Object(s.jsx)("div",{children:t})]})})),rt=Object(ve.b)((function(e){return{profile:e.profile}}),(function(e){return{addPost:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(t){e(function(e){return{type:"profile/ADD-POST",addPost:e}}(t))}))}}))(st),it=function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)(Ye,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(s.jsx)(rt,{})]})},at=function(e){Object(J.a)(n,e);var t=Object(Y.a)(n);function n(){return Object(V.a)(this,n),t.apply(this,arguments)}return Object(H.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.myId)||this.props.history.push("/login"),this.props.setUsersProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return Object(s.jsx)("div",{children:Object(s.jsx)(it,Object(o.a)(Object(o.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))})}}]),n}(i.a.Component),ct=Object(a.d)(Object(ve.b)((function(e){return{profile:e.profile.profile,status:e.profile.status,myId:e.auth.id,isAuth:e.auth.isAuth}}),{setUsersProfile:function(e){return function(t){p(e).then((function(e){t({type:"profile/SET-USERS-PROFILE",profile:e})}))}},getStatus:function(e){return function(t){f(e).then((function(e){t(v(e))}))}},updateStatus:function(e){return function(t){O(e).then((function(n){0===n.resultCode&&t(v(e))}))}}}),se.f,Ae)(at),ot=n(92),ut=n.n(ot),lt=function(e){return Object(s.jsxs)("header",{className:ut.a.header,children:[Object(s.jsx)("img",{src:"data:image/png;base64,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"}),Object(s.jsx)("div",{className:ut.a.login,children:e.isAuth?Object(s.jsxs)("div",{children:[e.login," - ",Object(s.jsx)("button",{onClick:e.logOut,children:"Log out"})]}):Object(s.jsx)(K.b,{to:"/login",children:"Login"})})]})},jt=function(e){Object(J.a)(n,e);var t=Object(Y.a)(n);function n(){return Object(V.a)(this,n),t.apply(this,arguments)}return Object(H.a)(n,[{key:"render",value:function(){return Object(s.jsx)(lt,Object(o.a)(Object(o.a)({},this.props),{},{isAuth:this.props.isAuth,login:this.props.login,logOut:this.props.logOut}))}}]),n}(i.a.Component),dt=Object(ve.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logOut:z})(jt),bt=n(134),pt=n.n(bt),ft=Object(ue.a)({form:"login"})((function(e){return Object(s.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(s.jsx)("div",{children:Object(s.jsx)(oe.a,{component:fe,name:"email",placeholder:"email",validate:[Oe]})}),Object(s.jsx)("div",{children:Object(s.jsx)(oe.a,{component:fe,name:"password",type:"password",placeholder:"Password",validate:[Oe]})}),Object(s.jsx)("div",{children:Object(s.jsx)(oe.a,{component:fe,name:"rememberMe",type:"checkbox"})}),"remember me",Object(s.jsx)("div",{className:e.error?pt.a.error:" ",children:e.error&&Object(s.jsx)("div",{children:e.error})}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{children:"Login"})})]})})),Ot=Object(ve.b)((function(e){return{isAuth:e.auth.isAuth}}),{setLogin:function(e,t,n){return function(){var s=Object(E.a)(S.a.mark((function s(r){var i,a;return S.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,g(e,t,n);case 2:if(0!==(i=s.sent).resultCode){s.next=6;break}return s.next=6,r(L());case 6:a=i.messages.length>0?i.messages[0]:"email or password is wrong",r(Object(_.a)("login",{_error:a}));case 8:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()},removeLogin:z})((function(e){return e.isAuth?Object(s.jsx)(se.a,{to:"/profile"}):Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Login"}),Object(s.jsx)(ft,{onSubmit:function(t){e.setLogin(t.email,t.password,t.rememberMe)}})]})})),ht=function(e){Object(J.a)(n,e);var t=Object(Y.a)(n);function n(){return Object(V.a)(this,n),t.apply(this,arguments)}return Object(H.a)(n,[{key:"componentDidMount",value:function(){this.props.initializedUser()}},{key:"render",value:function(){return this.props.initialized?Object(s.jsxs)("div",{className:"app-wrapper",children:[Object(s.jsx)(dt,{}),Object(s.jsx)($,{}),Object(s.jsxs)("div",{className:"app-wrapper-content",children:[Object(s.jsx)(se.b,{path:"/dialogs",render:function(){return Object(s.jsx)(Se,{})}}),Object(s.jsx)(se.b,{path:"/profile/:userId?",render:function(){return Object(s.jsx)(ct,{})}}),Object(s.jsx)(se.b,{path:"/users",render:function(){return Object(s.jsx)(We,{})}}),Object(s.jsx)(se.b,{path:"/music",render:function(){return Object(s.jsx)(ee,{})}}),Object(s.jsx)(se.b,{path:"/news",render:function(){return Object(s.jsx)(te,{})}}),Object(s.jsx)(se.b,{path:"/login",render:function(){return Object(s.jsx)(Ot,{})}}),Object(s.jsx)(se.b,{path:"/settings",render:function(){return Object(s.jsx)(ne,{})}})]})]}):Object(s.jsx)(Te,{})}}]),n}(i.a.Component),gt=Object(a.d)(se.f,Object(ve.b)((function(e){return{initialized:e.app.initialized,isAuth:e.auth.isAuth}}),{initializedUser:function(){return function(){var e=Object(E.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t(L()),e.next=3,Promise.all([n]);case 3:t({type:"app/SET-INITIALIZED"});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(ht),mt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,288)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),s(e),r(e),i(e),a(e)}))};W.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(K.a,{children:Object(s.jsx)(ve.a,{store:Z,children:Object(s.jsx)(gt,{})})})}),document.getElementById("root")),mt()},29:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__3AnsP",dialogsItem:"Dialogs_dialogsItem__2irEs",active:"Dialogs_active__318Mn",item:"Dialogs_item__2zsxr",messages:"Dialogs_messages__6AbZT",message:"Dialogs_message__baJOR"}},67:function(e,t,n){e.exports={ava:"ProfileInfo_ava__1QUVr",img:"ProfileInfo_img__2fJIx"}},88:function(e,t,n){e.exports={formControl:"FormControle_formControl__30GsY",error:"FormControle_error__iIJMu"}},91:function(e,t,n){e.exports={selectedPage:"paginator_selectedPage__2Cxer"}},92:function(e,t,n){e.exports={header:"Header_header__ZqvZa",login:"Header_login__2T9bo"}},93:function(e,t,n){}},[[287,1,2]]]);
//# sourceMappingURL=main.61611707.chunk.js.map