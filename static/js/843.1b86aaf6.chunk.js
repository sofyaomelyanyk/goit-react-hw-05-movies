"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[843],{843:function(n,e,r){r.r(e),r.d(e,{MoviesPage:function(){return Z}});var t,o,i,a,s=r(885),u=r(861),c=r(757),p=r.n(c),f=function(){var n=(0,u.Z)(p().mark((function n(e){var r,t;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat("762b5545ec681e46f6d7d0ae5d3e3243","&query=").concat(e));case 2:return r=n.sent,t=r.json(),n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=r(731),d=r(791),h=r(786),x=r(174),b=r(168),m=r(444),g=m.ZP.form(t||(t=(0,b.Z)(["\n  margin-left: 30px;\n  display: flex;\n  align-items: stretch;\n  gap: 10px;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),v=m.ZP.input(o||(o=(0,b.Z)(["\n  display: block;\n  width: 200px;\n  height: calc(2.25rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-family: inherit;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #bdbdbd;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n"]))),k=m.ZP.button(i||(i=(0,b.Z)(["\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 0 25px;\n  margin-left: 30px;\n  margin-bottom: 40px;\n  outline: none;\n  border: 1px solid #fff;\n  border-radius: 50px;\n  height: 46px;\n  line-height: 46px;\n  font-size: 14px;\n  font-weight: 600;\n  text-decoration: none;\n  color: #fff;\n  background-color: #679bd5;\n  box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);\n  cursor: pointer;\n\n  :hover {\n    background-color: #2d5684;\n  }\n"]))),w=m.ZP.ul(a||(a=(0,b.Z)(["\n \n  list-style: none;\n  display: flex;\n  gap: 5px;\n  flex-direction: column;\n"]))),y=r(184),Z=function(){var n=function(){var n=(0,d.useState)([]),e=(0,s.Z)(n,2),r=e[0],t=e[1],o=(0,l.lr)(),i=(0,s.Z)(o,2),a=i[0],c=i[1],h=(0,d.useState)(!1),x=(0,s.Z)(h,2),b=x[0],m=x[1],g=(0,d.useState)(!1),v=(0,s.Z)(g,2),k=v[0],w=v[1],y=a.get("queryname");return(0,d.useEffect)((function(){function n(){return(n=(0,u.Z)(p().mark((function n(){var e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,f(y);case 3:e=n.sent,w(!0),t(e.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),m(!0);case 11:return n.prev=11,w(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})))).apply(this,arguments)}y&&function(){n.apply(this,arguments)}()}),[y]),{movies:r,error:b,isLoading:k,onSubmit:function(n){c({queryname:n})}}}(),e=n.movies,r=n.error,t=n.isLoading,o=n.onSubmit,i=(0,d.useState)(""),a=(0,s.Z)(i,2),c=a[0],b=a[1],m=function(){b("")};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(g,{onSubmit:function(n){n.preventDefault(),""!==c.trim()?(o(c),m()):alert("Please, fill the form")},children:[(0,y.jsx)(v,{type:"text",value:c,name:"queryname",autoComplete:"off",autoFocus:!0,onChange:function(n){b(n.currentTarget.value.toLowerCase())}}),(0,y.jsx)(k,{type:"submit",children:"Search"})]}),t&&(0,y.jsx)(h.a,{}),r&&(0,y.jsx)("h3",{children:"Nothing found for your request!"}),e&&(0,y.jsx)(w,{children:(0,y.jsx)(x.O,{movies:e})})]})}}}]);
//# sourceMappingURL=843.1b86aaf6.chunk.js.map