(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(2),s=a(6),c=a(7),o=a(1),l=(a(14),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),d=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],u=a(9),m=a.n(u),j=a(0),b=function(e){var t=e.user,a=t.name,n=t.email;return Object(j.jsx)("a",{className:"UserInfo",href:"mailto:".concat(n),children:a})},h=function(e){var t=e.todo,a=t.id,n=t.title,i=t.completed,r=t.user;return Object(j.jsxs)("article",{"data-id":a,className:m()("TodoInfo",{"TodoInfo--completed":i}),children:[Object(j.jsx)("h2",{className:"TodoInfo__title",children:n}),r&&Object(j.jsx)(b,{user:r})]})},O=function(e){var t=e.todos;return Object(j.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(j.jsx)(h,{todo:e},e.id)}))})},f=function(e){return l.find((function(t){return t.id===e}))||null},p=d.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:f(e.userId)})})),x=Math.max.apply(Math,Object(s.a)(d.map((function(e){return e.id}))))+1,v=function(){var e=Object(o.useState)(""),t=Object(r.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(0),c=Object(r.a)(i,2),d=c[0],u=c[1],m=Object(o.useState)(!1),b=Object(r.a)(m,2),h=b[0],v=b[1],y=Object(o.useState)(!1),S=Object(r.a)(y,2),N=S[0],I=S[1],g=Object(o.useState)(p),C=Object(r.a)(g,2),_=C[0],k=C[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Add todo form"}),Object(j.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){if(e.preventDefault(),a.trim()||v(!0),d||I(!0),a.trim()&&d){var t={id:x,title:a.trim(),userId:Number(d),completed:!1,user:f(d)};k([].concat(Object(s.a)(_),[t])),n(""),u(0)}},children:[Object(j.jsx)("div",{className:"field",children:Object(j.jsxs)("label",{children:["Title: ",Object(j.jsx)("input",{"data-cy":"titleInput",type:"text",placeholder:"Enter a title",value:a,onChange:function(e){n(e.target.value),v(!1)}}),h&&Object(j.jsx)("span",{className:"error",children:"Please enter a title"})]})}),Object(j.jsxs)("div",{className:"field",children:[Object(j.jsxs)("label",{children:["User: ",Object(j.jsxs)("select",{"data-cy":"userSelect",value:d,onChange:function(e){u(Number(e.target.value)),I(!1)},children:[Object(j.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),l.map((function(e){return Object(j.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]}),N&&Object(j.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(j.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(j.jsx)(O,{todos:_})]})};i.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.9547598b.chunk.js.map