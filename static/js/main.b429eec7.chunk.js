(this.webpackJsonpsn=this.webpackJsonpsn||[]).push([[0],{130:function(e,t,n){e.exports={img:"Users_img__2T2Ny"}},132:function(e,t,n){e.exports={item:"MyPosts_item__31-SE"}},133:function(e,t,n){e.exports={post:"Post_post__CXO0f"}},134:function(e,t,n){e.exports={error:"login_error__2ZymJ"}},15:function(e,t,n){e.exports={nav:"Nav_nav__2l9hx",item:"Nav_item__2LBG3",active:"Nav_active__1Ez4Q"}},245:function(e,t,n){},287:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(1),i=n.n(s),a=(n(93),n(8)),o=n(43),c=n(3),u={dialogs:[{id:1,name:"Alex"},{id:2,name:"Roma"},{id:3,name:"Lera"}],messages:[{id:1,message:"Hi"},{id:2,message:"How are you ?"}]},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dialogs/Add-New-Message":return Object(c.a)(Object(c.a)({},e),{},{messages:[].concat(Object(o.a)(e.messages),[{id:4,message:t.addMessage}])});default:return e}},j=n(11),d=n.n(j),p=n(18),b=n(126),f=n.n(b).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"96882b02-a427-4592-b196-6833093c647f"}}),h={getUsers:function(e,t){return f.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},unFollowUsers:function(e){return f.delete("follow/".concat(e)).then((function(e){return e.data}))},followUsers:function(e){return f.post("follow/".concat(e)).then((function(e){return e.data}))}},O=function(e){return f.get("profile/"+e).then((function(e){return e.data}))},g=function(e){return f.get("profile/status/"+e).then((function(e){return e.data}))},m=function(e){return f.put("profile/status/",{status:e}).then((function(e){return e.data}))},v=function(e){var t=new FormData;return t.append("image",e),f.put(" /profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},x=function(){return f.get("auth/me").then((function(e){return e.data}))},w=function(e,t,n){return f.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},P=function(){return f.delete("auth/login").then((function(e){return e.data}))},S={posts:[{id:1,message:" My first post",likeCount:11},{id:2,message:"Hi, how are you",likeCount:21}],profile:{aboutMe:"",contacts:{skype:"",vk:"",facebook:"",icq:"",email:"",googlePlus:"",twitter:"",instagram:"",whatsApp:""},lookingForAJob:!0,lookingForAJobDescription:"",fullName:"",userId:1,photos:{small:"",large:""}},status:""},E=function(e){return{type:"profile/SET-USERS-STATUS",status:e}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"profile/ADD-POST":return Object(c.a)(Object(c.a)({},e),{},{posts:[].concat(Object(o.a)(e.posts),[{id:3,message:t.addPost,likeCount:0}])});case"profile/SET-USERS-PROFILE":return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});case"profile/SET-USERS-STATUS":return Object(c.a)(Object(c.a)({},e),{},{status:t.status});case"profile/DELETE-POSTS":return Object(c.a)(Object(c.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case"profile/SAVE-USERS-PHOTO-PROFILE":return Object(c.a)(Object(c.a)({},e),{},{profile:Object(c.a)(Object(c.a)({},e.profile),{},{photos:t.photos})});default:return e}},N={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},y=function(e,t,n){return e.map((function(e){return e.id===t?Object(c.a)(Object(c.a)({},e),{},{followed:n}):e}))},C=function(e){return{type:"users/FOLLOW",userId:e}},U=function(e){return{type:"users/UNFOLLOW",userId:e}},I=function(e){return{type:"users/IS_FETCHING",isFetching:e}},k=function(e,t){return{type:"users/TOGGLE_FOLLOWING_IN_PROGRESS",isFetching:e,usersId:t}},_=function(){var e=Object(p.a)(d.a.mark((function e(t,n,r,s){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(k(!0,t)),e.next=3,r(t);case 3:0===e.sent.resultCode&&n(s(t)),n(k(!1,t));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,s){return e.apply(this,arguments)}}(),F=n(38),T={id:null,login:null,email:null,isAuth:!1},L=function(e,t,n,r){return{type:"auth/SET-USERS-DATA",data:{id:e,login:t,email:n,isAuth:r}}},z=function(){return function(){var e=Object(p.a)(d.a.mark((function e(t){var n,r,s,i,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:0===(n=e.sent).resultCode&&(r=n.data,s=r.id,i=r.login,a=r.email,t(L(s,i,a,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},D=function(){return function(){var e=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:0===e.sent.resultCode&&t(L(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},B=n(127),M=n(125),R={initialized:!1},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/SET-INITIALIZED":return Object(c.a)(Object(c.a)({},e),{},{initialized:!0});default:return e}},Z=Object(a.c)({profile:A,dialogs:l,users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"users/FOLLOW":return Object(c.a)(Object(c.a)({},e),{},{users:y(e.users,t.userId,!0)});case"users/UNFOLLOW":return Object(c.a)(Object(c.a)({},e),{},{users:y(e.users,t.userId,!1)});case"users/SET_USERS":return Object(c.a)(Object(c.a)({},e),{},{users:t.users});case"users/CHANGE_CURRENT_PAGE":return Object(c.a)(Object(c.a)({},e),{},{currentPage:t.currentPage});case"users/SET_TOTAL_USERS_COUNT":return Object(c.a)(Object(c.a)({},e),{},{totalUsersCount:t.totalCount});case"users/IS_FETCHING":return Object(c.a)(Object(c.a)({},e),{},{isFetching:t.isFetching});case"users/TOGGLE_FOLLOWING_IN_PROGRESS":return Object(c.a)(Object(c.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(o.a)(e.followingInProgress),[t.usersId]):e.followingInProgress.filter((function(e){return e!=t.usersId}))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET-USERS-DATA":return Object(c.a)(Object(c.a)({},e),t.data);default:return e}},app:Q,form:M.a}),G=Object(a.e)(Z,Object(a.a)(B.a)),V=n(62),W=n.n(V),H=n(21),J=n(22),Y=n(24),K=n(23),X=(n(245),n(13)),q=n(15),$=n.n(q),ee=function(){return Object(r.jsxs)("nav",{className:$.a.nav,children:[Object(r.jsx)("div",{className:$.a.item,children:Object(r.jsx)(X.b,{to:"/profile",activeClassName:$.a.active,children:"Profile"})}),Object(r.jsx)("div",{className:$.a.item,children:Object(r.jsx)(X.b,{to:"/dialogs",activeClassName:$.a.active,children:"Messages"})}),Object(r.jsx)("div",{className:$.a.item,children:Object(r.jsx)(X.b,{to:"/users",activeClassName:$.a.active,children:"Users"})}),Object(r.jsx)("div",{className:$.a.item,children:Object(r.jsx)(X.b,{to:"/news",activeClassName:$.a.active,children:"News"})}),Object(r.jsx)("div",{className:$.a.item,children:Object(r.jsx)(X.b,{to:"/music",activeClassName:$.a.active,children:"Music"})}),Object(r.jsx)("div",{className:$.a.item,children:Object(r.jsx)(X.b,{to:"/login",activeClassName:$.a.active,children:"Login"})}),Object(r.jsx)("div",{className:$.a.item,children:Object(r.jsx)(X.b,{to:"/settings",activeClassName:$.a.active,children:"Settings"})})]})},te=function(){return Object(r.jsx)("div",{children:"Music"})},ne=function(){return Object(r.jsx)("div",{children:"News"})},re=function(){return Object(r.jsx)("div",{children:"Settings"})},se=n(12),ie=n(29),ae=n.n(ie),oe=function(e){return Object(r.jsx)("div",{className:ae.a.item+" "+ae.a.active,children:Object(r.jsx)(X.b,{to:"/dialogs/"+e.id,children:e.name})})},ce=function(e){return Object(r.jsx)("div",{className:ae.a.message,children:e.message})},ue=n(123),le=n(124),je=n(53),de=n(88),pe=n.n(de),be=function(e){var t=e.meta,n=t.touched,s=t.error,i=e.children,a=n&&s;return Object(r.jsxs)("div",{className:pe.a.formControl+" "+(a?pe.a.error:""),children:[Object(r.jsx)("div",{children:i}),a&&Object(r.jsx)("span",{children:s})]})},fe=function(e){var t=e.input,n=(e.meta,Object(je.a)(e,["input","meta"]));return Object(r.jsxs)(be,Object(c.a)(Object(c.a)({},e),{},{children:[" ",Object(r.jsx)("textarea",Object(c.a)(Object(c.a)({},t),n))]}))},he=function(e){var t=e.input,n=(e.meta,Object(je.a)(e,["input","meta"]));return Object(r.jsx)(be,Object(c.a)(Object(c.a)({},e),{},{children:Object(r.jsx)("input",Object(c.a)(Object(c.a)({},t),n))}))},Oe=function(e){if(!e)return"Field is required"},ge=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}},me=ge(100),ve=Object(le.a)({form:"messageForm"})((function(e){return Object(r.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(r.jsx)("div",{children:Object(r.jsx)(ue.a,{component:fe,name:"addMessage",validate:[Oe,me]})}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Add message"})})]})})),xe=function(e){var t=e.dialogs.dialogs.map((function(e){return Object(r.jsx)(oe,{name:e.name,id:e.id},e.id)})),n=e.dialogs.messages.map((function(e){return Object(r.jsx)(ce,{message:e.message},e.id)}));return Object(r.jsxs)("div",{className:ae.a.dialogs,children:[Object(r.jsx)("div",{className:ae.a.dialogsItem,children:t}),Object(r.jsx)("div",{className:ae.a.messages,children:n}),Object(r.jsx)(ve,{onSubmit:function(t){e.onChangeText(t.addMessage)}})]})},we=n(10),Pe=function(e){return{isAuth:e.auth.isAuth}};function Se(e){var t=function(t){Object(Y.a)(s,t);var n=Object(K.a)(s);function s(){return Object(H.a)(this,s),n.apply(this,arguments)}return Object(J.a)(s,[{key:"render",value:function(){var t=this.props,n=t.isAuth,s=Object(je.a)(t,["isAuth"]);return!1===n?Object(r.jsx)(se.a,{to:"/login"}):Object(r.jsx)(e,Object(c.a)({},s))}}]),s}(i.a.Component);return Object(we.b)(Pe)(t)}var Ee=Object(a.d)(Object(we.b)((function(e){return{dialogs:e.dialogs}}),(function(e){return{onChangeText:function(t){e(function(e){return{type:"dialogs/Add-New-Message",addMessage:e,newTextMessage:""}}(t))}}})),Se)(xe),Ae=n(135),Ne=n(91),ye=n.n(Ne),Ce=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],i=1;i<=t;i++)n.push(i);var a=Math.ceil(t/e.portionSize),o=Object(s.useState)(1),c=Object(Ae.a)(o,2),u=c[0],l=c[1],j=(u-1)*e.portionSize+1,d=u*e.portionSize;return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:ye.a.paginator,children:u>1&&Object(r.jsx)("button",{onClick:function(){return l(u-1)},children:"prev"})}),n.filter((function(e){return e>=j&&e<=d})).map((function(t){return Object(r.jsx)("span",{className:e.currentPage===t?ye.a.selectedPage:"",onClick:function(){return e.onPageChanged(t)},children:t})})),a>u&&Object(r.jsx)("button",{onClick:function(){return l(u+1)},children:"next"})]})},Ue=n(130),Ie=n.n(Ue),ke=n.p+"static/media/kisspng-avatar-user-computer-icons-software-developer-5b327cc9cc15f7.872727801530035401836.e582e4ba.png",_e=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:Object(r.jsx)(X.b,{to:"/profile/"+e.users.id,children:Object(r.jsx)("img",{className:Ie.a.img,src:null!=e.users.photos.small?e.users.photos.small:ke})})}),Object(r.jsx)("div",{children:e.users.followed?Object(r.jsx)("button",{disabled:e.followingInProgress.some((function(t){return t===e.users.id})),onClick:function(){e.unFollowUsers(e.users.id)},children:"unFollow"}):Object(r.jsx)("button",{disabled:e.followingInProgress.some((function(t){return t===e.users.id})),onClick:function(){e.followUsers(e.users.id)},children:"Follow"})})]}),Object(r.jsx)("span",{children:Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:e.users.name}),Object(r.jsx)("div",{children:e.users.status})]})})]})},Fe=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)(Ce,{totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,onPageChanged:e.onPageChanged,portionSize:10}),e.users.map((function(t){return Object(r.jsx)(_e,{users:t,followUsers:e.followUsers,unFollowUsers:e.unFollowUsers,toggleFollowingInProgress:e.toggleFollowingInProgress,followingInProgress:e.followingInProgress},t.id)}))]})},Te=n.p+"static/media/Spin-1s-200px.c4b2521a.svg",Le=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:Te})})},ze=n(131),De=function(e){return e.users.users},Be=(Object(ze.a)(De,(function(e){return e.filter((function(e){return e}))})),function(e){return e.users.pageSize}),Me=function(e){return e.users.totalUsersCount},Re=function(e){return e.users.currentPage},Qe=function(e){return e.users.isFetching},Ze=function(e){return e.users.followingInProgress},Ge=function(e){return e.auth.isAuth},Ve=function(e){Object(Y.a)(n,e);var t=Object(K.a)(n);function n(){var e;Object(H.a)(this,n);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).onPageChanged=function(t){e.props.changeCurrentPage(t),e.props.getUser(t,e.props.pageSize)},e}return Object(J.a)(n,[{key:"componentDidMount",value:function(){this.props.getUser(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[this.props.isFetching?Object(r.jsx)(Le,{}):null,Object(r.jsx)(Fe,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,unFollowUsers:this.props.unFollow,followUsers:this.props.follow,toggleFollowingInProgress:this.props.toggleFollowingInProgress,followingInProgress:this.props.followingInProgress})]})}}]),n}(i.a.Component),We=Object(a.d)(Object(we.b)((function(e){return{users:De(e),pageSize:Be(e),totalUsersCount:Me(e),currentPage:Re(e),isFetching:Qe(e),followingInProgress:Ze(e),isAuth:Ge(e)}}),{follow:function(e){return function(){var t=Object(p.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(e,n,h.followUsers.bind(h),C);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unFollow:function(e){return function(){var t=Object(p.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(e,n,h.unFollowUsers.bind(h),U);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},changeCurrentPage:function(e){return{type:"users/CHANGE_CURRENT_PAGE",currentPage:e}},toggleFollowingInProgress:k,getUser:function(e,t){return function(){var n=Object(p.a)(d.a.mark((function n(r){var s;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(I(!0)),n.next=3,h.getUsers(e,t);case 3:s=n.sent,r(I(!1)),r({type:"users/SET_USERS",users:s.items}),r({type:"users/SET_TOTAL_USERS_COUNT",totalCount:s.totalCount});case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(Ve),He=n(67),Je=n.n(He),Ye=function(e){Object(Y.a)(n,e);var t=Object(K.a)(n);function n(){var e;Object(H.a)(this,n);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={editMode:!1,status:e.props.status},e.onDoubleClick=function(){e.setState({editMode:!0})},e.onBlur=function(){e.setState({editMode:!1}),e.props.updateStatus(e.state.status)},e}return Object(J.a)(n,[{key:"componentDidUpdate",value:function(e,t,n){e.status!==this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){var e=this;return Object(r.jsx)("div",{children:this.state.editMode?Object(r.jsx)("div",{children:Object(r.jsx)("input",{autoFocus:!0,onChange:function(t){e.setState({status:t.currentTarget.value})},onBlur:this.onBlur,value:this.state.status})}):Object(r.jsx)("div",{children:Object(r.jsx)("span",{onDoubleClick:this.onDoubleClick,children:this.props.status?this.props.status:"no status"})})})}}]),n}(i.a.Component),Ke=function(e){if(!e.profile)return Object(r.jsx)(Le,{});return Object(r.jsx)("div",{className:Je.a.profileInfo,children:Object(r.jsxs)("div",{className:Je.a.ava,children:[Object(r.jsx)("img",{className:Je.a.myPhoto,src:e.profile.photos.large||ke}),e.isOwner&&Object(r.jsx)("input",{type:"file",onChange:function(t){t.target.files&&e.savePhoto(t.target.files[0])}}),Object(r.jsx)(Ye,{status:e.status,updateStatus:e.updateStatus}),Object(r.jsx)("div",{children:e.profile.fullName}),Object(r.jsx)("div",{children:e.profile.lookingForAJob}),Object(r.jsx)("div",{children:e.profile.lookingForAJobDescription})]})})},Xe=n(132),qe=n.n(Xe),$e=n(133),et=n.n($e),tt=n.p+"static/media/user-1.72235a95.png",nt=function(e){return Object(r.jsxs)("div",{className:et.a.post,children:[Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:tt})}),Object(r.jsx)("div",{children:e.message}),Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{children:"Like"}),Object(r.jsx)("span",{children:e.likeCount})]})]})},rt=ge(30),st=Object(le.a)({form:"messageForm"})((function(e){return Object(r.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(r.jsx)("div",{children:Object(r.jsx)(ue.a,{component:fe,name:"addPost",validate:[Oe,rt],placeholder:"hi"})}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Add message"})})]})})),it=i.a.memo((function(e){var t=e.profile.posts.map((function(e){return Object(r.jsx)(nt,{message:e.message,likeCount:e.likeCount},e.id)}));return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:qe.a.item,children:Object(r.jsx)("h3",{children:"My post"})}),Object(r.jsx)(st,{onSubmit:function(t){e.addPost(t.addPost)}}),Object(r.jsx)("div",{children:t})]})})),at=Object(we.b)((function(e){return{profile:e.profile}}),(function(e){return{addPost:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(t){e(function(e){return{type:"profile/ADD-POST",addPost:e}}(t))}))}}))(it),ot=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)(Ke,{profile:e.profile,status:e.status,updateStatus:e.updateStatus,isOwner:e.isOwner,savePhoto:e.savePhoto}),Object(r.jsx)(at,{})]})},ct=function(e){Object(Y.a)(n,e);var t=Object(K.a)(n);function n(){return Object(H.a)(this,n),t.apply(this,arguments)}return Object(J.a)(n,[{key:"refresh",value:function(){var e=this.props.match.params.userId;e||(e=this.props.myId)||this.props.history.push("/login"),this.props.setUsersProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refresh()}},{key:"componentDidUpdate",value:function(e,t,n){this.props.match.params.userId!==e.match.params.userId&&this.refresh()}},{key:"render",value:function(){return Object(r.jsx)("div",{children:Object(r.jsx)(ot,Object(c.a)(Object(c.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,isOwner:!this.props.match.params.userId,savePhoto:this.props.savePhoto}))})}}]),n}(i.a.Component),ut=Object(a.d)(Object(we.b)((function(e){return{profile:e.profile.profile,status:e.profile.status,myId:e.auth.id,isAuth:e.auth.isAuth}}),{setUsersProfile:function(e){return function(t){O(e).then((function(e){t({type:"profile/SET-USERS-PROFILE",profile:e})}))}},getStatus:function(e){return function(t){g(e).then((function(e){t(E(e))}))}},updateStatus:function(e){return function(t){m(e).then((function(n){0===n.resultCode&&t(E(e))}))}},savePhoto:function(e){return function(){var t=Object(p.a)(d.a.mark((function t(n){var r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(e);case 2:0===(r=t.sent).data.resultCode&&n({type:"profile/SAVE-USERS-PHOTO-PROFILE",photos:r.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),se.f,Se)(ct),lt=n(92),jt=n.n(lt),dt=function(e){return Object(r.jsxs)("header",{className:jt.a.header,children:[Object(r.jsx)("img",{src:"data:image/png;base64,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"}),Object(r.jsx)("div",{className:jt.a.login,children:e.isAuth?Object(r.jsxs)("div",{children:[e.login," - ",Object(r.jsx)("button",{onClick:e.logOut,children:"Log out"})]}):Object(r.jsx)(X.b,{to:"/login",children:"Login"})})]})},pt=function(e){Object(Y.a)(n,e);var t=Object(K.a)(n);function n(){return Object(H.a)(this,n),t.apply(this,arguments)}return Object(J.a)(n,[{key:"render",value:function(){return Object(r.jsx)(dt,Object(c.a)(Object(c.a)({},this.props),{},{isAuth:this.props.isAuth,login:this.props.login,logOut:this.props.logOut}))}}]),n}(i.a.Component),bt=Object(we.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logOut:D})(pt),ft=n(134),ht=n.n(ft),Ot=Object(le.a)({form:"login"})((function(e){return Object(r.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(r.jsx)("div",{children:Object(r.jsx)(ue.a,{component:he,name:"email",placeholder:"email",validate:[Oe]})}),Object(r.jsx)("div",{children:Object(r.jsx)(ue.a,{component:he,name:"password",type:"password",placeholder:"Password",validate:[Oe]})}),Object(r.jsx)("div",{children:Object(r.jsx)(ue.a,{component:he,name:"rememberMe",type:"checkbox"})}),"remember me",Object(r.jsx)("div",{className:e.error?ht.a.error:" ",children:e.error&&Object(r.jsx)("div",{children:e.error})}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Login"})})]})})),gt=Object(we.b)((function(e){return{isAuth:e.auth.isAuth}}),{setLogin:function(e,t,n){return function(){var r=Object(p.a)(d.a.mark((function r(s){var i,a;return d.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,w(e,t,n);case 2:if(0!==(i=r.sent).resultCode){r.next=6;break}return r.next=6,s(z());case 6:a=i.messages.length>0?i.messages[0]:"email or password is wrong",s(Object(F.a)("login",{_error:a}));case 8:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},removeLogin:D})((function(e){return e.isAuth?Object(r.jsx)(se.a,{to:"/profile"}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsx)(Ot,{onSubmit:function(t){e.setLogin(t.email,t.password,t.rememberMe)}})]})})),mt=function(e){Object(Y.a)(n,e);var t=Object(K.a)(n);function n(){return Object(H.a)(this,n),t.apply(this,arguments)}return Object(J.a)(n,[{key:"componentDidMount",value:function(){this.props.initializedUser()}},{key:"render",value:function(){return this.props.initialized?Object(r.jsxs)("div",{className:"app-wrapper",children:[Object(r.jsx)(bt,{}),Object(r.jsx)(ee,{}),Object(r.jsxs)("div",{className:"app-wrapper-content",children:[Object(r.jsx)(se.b,{path:"/dialogs",render:function(){return Object(r.jsx)(Ee,{})}}),Object(r.jsx)(se.b,{path:"/profile/:userId?",render:function(){return Object(r.jsx)(ut,{})}}),Object(r.jsx)(se.b,{path:"/users",render:function(){return Object(r.jsx)(We,{})}}),Object(r.jsx)(se.b,{path:"/music",render:function(){return Object(r.jsx)(te,{})}}),Object(r.jsx)(se.b,{path:"/news",render:function(){return Object(r.jsx)(ne,{})}}),Object(r.jsx)(se.b,{path:"/login",render:function(){return Object(r.jsx)(gt,{})}}),Object(r.jsx)(se.b,{path:"/settings",render:function(){return Object(r.jsx)(re,{})}})]})]}):Object(r.jsx)(Le,{})}}]),n}(i.a.Component),vt=Object(a.d)(se.f,Object(we.b)((function(e){return{initialized:e.app.initialized,isAuth:e.auth.isAuth}}),{initializedUser:function(){return function(){var e=Object(p.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t(z()),e.next=3,Promise.all([n]);case 3:t({type:"app/SET-INITIALIZED"});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(mt),xt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,288)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),s(e),i(e),a(e)}))};W.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(X.a,{children:Object(r.jsx)(we.a,{store:G,children:Object(r.jsx)(vt,{})})})}),document.getElementById("root")),xt()},29:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__3AnsP",dialogsItem:"Dialogs_dialogsItem__2irEs",active:"Dialogs_active__318Mn",item:"Dialogs_item__2zsxr",messages:"Dialogs_messages__6AbZT",message:"Dialogs_message__baJOR"}},67:function(e,t,n){e.exports={ava:"ProfileInfo_ava__1QUVr",img:"ProfileInfo_img__2fJIx",myPhoto:"ProfileInfo_myPhoto__1eIJa"}},88:function(e,t,n){e.exports={formControl:"FormControle_formControl__30GsY",error:"FormControle_error__iIJMu"}},91:function(e,t,n){e.exports={selectedPage:"paginator_selectedPage__2Cxer"}},92:function(e,t,n){e.exports={header:"Header_header__ZqvZa",login:"Header_login__2T9bo"}},93:function(e,t,n){}},[[287,1,2]]]);
//# sourceMappingURL=main.b429eec7.chunk.js.map