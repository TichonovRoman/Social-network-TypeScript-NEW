"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[528],{8528:function(e,t,s){s.r(t),s.d(t,{default:function(){return A}});var r=s(5671),n=s(3144),i=s(9340),a=s(5716),o=s(2791),u=s(2170),l="ProfileInfo_sunflowerImg__DlzwZ",c="ProfileInfo_descriptionBlock__h15iB",d="ProfileInfo_mainPhoto__ue7gn",h=s(4374),p=s(885),f=s(184),x=function(e){var t=(0,o.useState)(e.status),s=(0,p.Z)(t,2),r=s[0],n=s[1],i=(0,o.useState)(!0),a=(0,p.Z)(i,2),u=a[0],l=a[1];(0,o.useEffect)((function(){n(e.status)}),[e.status]);return(0,f.jsx)("div",{children:u?(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:"\u041c\u043e\u0439 \u0441\u0442\u0430\u0442\u0443\u0441: "}),(0,f.jsx)("span",{onDoubleClick:function(){l(!1)},children:r||"-------"})]}):(0,f.jsx)("div",{children:(0,f.jsx)("input",{onChange:function(e){n(e.currentTarget.value)},onBlur:function(){l(!0),e.updateStatus(r)},autoFocus:!0,value:r})})})},j=s(6325),v=function(e){var t=e.contactTitle,s=e.contactValue;return(0,f.jsxs)("div",{style:{paddingLeft:"10px"},children:[(0,f.jsx)("b",{children:t}),": ",s]})},g=function(e){var t=e.profile,s=e.status,r=e.updateStatus,n=e.isOwner,i=e.savePhoto;if(!t)return(0,f.jsx)(h.Z,{});return(0,f.jsxs)("div",{children:[(0,f.jsx)("div",{children:(0,f.jsx)("img",{className:l,src:u})}),(0,f.jsxs)("div",{className:c,children:[(0,f.jsx)("img",{src:t.photos.large||j,className:d}),n&&(0,f.jsx)("input",{type:"file",accept:"image/*",onChange:function(e){e.target.files&&i(e.target.files[0])}}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:"\u041c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442:"})," ",t.fullName]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:"\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443:"})," ",t.lookingForAJob?"\u0414\u0430":"\u041d\u0435\u0442"]}),t.lookingForAJob&&(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:"\u041c\u043e\u0438 \u043d\u0430\u0432\u044b\u043a\u0438:"})," ",t.lookingForAJobDescription]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:"\u041e\u0431\u043e \u043c\u043d\u0435:"})," ",t.aboutMe]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("b",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b:"})," ",Object.keys(t.contacts).map((function(e){return(0,f.jsx)(v,{contactTitle:e,contactValue:t.contacts[e]},e)}))]})]}),(0,f.jsx)(x,{status:s,updateStatus:r})]})]})},m=s(4136),b="MyPosts_postsBlock__1EBZo",k="MyPosts_posts__8aaC-",P="Post_item__X70zz",M=function(e){return(0,f.jsxs)("div",{className:P,children:[(0,f.jsx)("img",{src:"https://\u0441\u043a\u0430\u0447\u0430\u0442\u044c-\u0432\u0430\u0442\u0441\u0430\u043f-\u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e.\u0440\u0443\u0441/wp-content/uploads/2018/10/avatarka-dlya-devushek-vatsap-7.jpg"}),e.message,(0,f.jsxs)("div",{children:["Like: ",e.likesCount]})]})},S=s(6103),y=o.memo((function(e){var t=e.posts,s=e.addPost,r=t.map((function(e){return(0,f.jsx)(M,{message:e.message,likesCount:e.likesCount},e.id)}));return(0,f.jsxs)("div",{className:b,children:[(0,f.jsx)("h3",{children:"My posts"}),(0,f.jsx)("div",{children:(0,f.jsx)(S.S,{onSubmit:s,placeholderText:"Enter your post",textMaxLength:100})}),(0,f.jsx)("div",{className:k,children:r})]})})),_=s(7375),C=(0,_.$j)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){return e((0,m.Wl)(t))}}}))(y),I=function(e){return(0,f.jsxs)("div",{children:[(0,f.jsx)(g,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus}),(0,f.jsx)(C,{})]})},w=s(9723),N=s(7781),Z=function(e){(0,i.Z)(s,e);var t=(0,a.Z)(s);function s(){return(0,r.Z)(this,s),t.apply(this,arguments)}return(0,n.Z)(s,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId?this.props.authorizedUserId.toString():"")||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.setStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,s){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,f.jsx)(I,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto})}}]),s}(o.Component),A=(0,N.qC)((0,_.$j)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getUserProfile:m.et,setStatus:m.Tf,updateStatus:m.Nf,savePhoto:m.Ju}),w.EN)(Z)},6103:function(e,t,s){s.d(t,{S:function(){return i}});s(2791);var r=s(5705),n=s(184),i=function(e){var t=(0,r.TA)({initialValues:{textMessage:""},validate:function(t){var s={};return t.textMessage?t.textMessage.length>e.textMaxLength&&(s.textMessage="Must be ".concat(e.textMaxLength," characters or less")):s.textMessage="Before sending, you must fill in this field",s},onSubmit:function(s){e.onSubmit(s.textMessage),t.resetForm()}});return(0,n.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("textarea",{placeholder:e.placeholderText,onChange:t.handleChange,value:t.values.textMessage,id:"textMessage",name:"textMessage",style:{backgroundColor:t.errors.textMessage?"pink":""}}),t.errors.textMessage?(0,n.jsx)("div",{style:{color:"red"},children:t.errors.textMessage}):null]}),(0,n.jsx)("div",{children:(0,n.jsx)("button",{type:"submit",children:"Add Message"})})]})}},2170:function(e,t,s){e.exports=s.p+"static/media/SunFlower.d7988829e86cf100f5f3.jpg"}}]);
//# sourceMappingURL=528.5a291db9.chunk.js.map