(this["webpackJsonppraveenorugantitech-multi-step-form"]=this["webpackJsonppraveenorugantitech-multi-step-form"]||[]).push([[0],{53:function(e,a,t){e.exports=t(65)},58:function(e,a,t){},59:function(e,a,t){},65:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(8),c=t.n(r),o=(t(58),t(59),t(10)),u=t(109),m=t(110),i=t(44),s=t(34),E=l.a.createContext(),b=function(){var e=Object(n.useState)(1),a=Object(s.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)([]),o=Object(s.a)(c,2),u=o[0],m=o[1],b=Object(n.useState)([]),v=Object(s.a)(b,2),d=v[0],f=v[1];return l.a.createElement("div",null,l.a.createElement(E.Provider,{value:{currentStep:t,setStep:r,userData:u,setUserData:m,finalData:d,setFinalData:f,submitData:function(){f((function(e){return[].concat(Object(i.a)(e),[u])})),m(""),r(1)}}},l.a.createElement(U,null)))};function v(){var e=Object(n.useContext)(E),a=e.setStep,t=e.userData,r=e.setUserData;return l.a.createElement("div",null,l.a.createElement(u.a,{label:"First Name",value:t.firstname,onChange:function(e){return r(Object(o.a)(Object(o.a)({},t),{},{firstname:e.target.value}))},margin:"normal",variant:"outlined",color:"secondary"}),l.a.createElement("br",null),l.a.createElement(u.a,{label:"Last Name",value:t.lastname,onChange:function(e){return r(Object(o.a)(Object(o.a)({},t),{},{lastname:e.target.value}))},margin:"normal",variant:"outlined",color:"secondary"}),l.a.createElement("br",null),l.a.createElement(u.a,{label:"Email",value:t.email,onChange:function(e){return r(Object(o.a)(Object(o.a)({},t),{},{email:e.target.value}))},margin:"normal",variant:"outlined",color:"secondary"}),l.a.createElement("br",null),l.a.createElement(m.a,{variant:"contained",onClick:function(){return a(2)},color:"primary"},"Next"))}function d(){var e=Object(n.useContext)(E),a=e.setStep,t=e.userData,r=e.setUserData;return l.a.createElement("div",null,l.a.createElement(u.a,{label:"Country",value:t.country,onChange:function(e){return r(Object(o.a)(Object(o.a)({},t),{},{country:e.target.value}))},margin:"normal",variant:"outlined",color:"secondary"}),l.a.createElement("br",null),l.a.createElement(u.a,{label:"State",value:t.state,onChange:function(e){return r(Object(o.a)(Object(o.a)({},t),{},{state:e.target.value}))},margin:"normal",variant:"outlined",color:"secondary"}),l.a.createElement("br",null),l.a.createElement(u.a,{label:"City",value:t.city,onChange:function(e){return r(Object(o.a)(Object(o.a)({},t),{},{city:e.target.value}))},margin:"normal",variant:"outlined",color:"secondary"}),l.a.createElement("br",null),l.a.createElement(m.a,{variant:"contained",onClick:function(){return a(1)},color:"secondary"},"Back"),"\xa0",l.a.createElement(m.a,{variant:"contained",onClick:function(){return a(3)},color:"primary"},"Next"))}function f(){var e=Object(n.useContext)(E),a=e.setStep,t=e.userData,r=e.setUserData,c=e.submitData;return l.a.createElement("div",null,l.a.createElement(u.a,{label:"Landmark",value:t.landmark,onChange:function(e){return r(Object(o.a)(Object(o.a)({},t),{},{landmark:e.target.value}))},margin:"normal",variant:"outlined",color:"secondary"}),l.a.createElement("br",null),l.a.createElement(u.a,{label:"Postal Code",value:t.postalcode,onChange:function(e){return r(Object(o.a)(Object(o.a)({},t),{},{postalcode:e.target.value}))},margin:"normal",variant:"outlined",color:"secondary"}),l.a.createElement("br",null),l.a.createElement(u.a,{label:"Contact Number",value:t.contactnumber,onChange:function(e){return r(Object(o.a)(Object(o.a)({},t),{},{contactnumber:e.target.value}))},margin:"normal",variant:"outlined",color:"secondary"}),l.a.createElement("br",null),l.a.createElement(m.a,{variant:"contained",onClick:function(){return a(2)},color:"secondary"},"Back"),"\xa0",l.a.createElement(m.a,{variant:"contained",color:"primary",onClick:c},"Submit"))}var g=t(112),p=t(108),O=t(111),j=t(4),h=t(99),y=t(100),C=t(101),k=t(102),S=t(103),D=t(104),w=t(66),N=Object(j.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(h.a),x=Object(j.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(y.a),B=function(){var e=Object(n.useContext)(E).finalData;return l.a.createElement("div",null,l.a.createElement(C.a,{component:w.a},l.a.createElement(k.a,{size:"small"},l.a.createElement(S.a,null,l.a.createElement(x,null,l.a.createElement(N,null,"First Name"),l.a.createElement(N,null,"Last Name"),l.a.createElement(N,null,"Email"),l.a.createElement(N,null,"Country"),l.a.createElement(N,null,"State"),l.a.createElement(N,null,"City"),l.a.createElement(N,null,"Landmark"),l.a.createElement(N,null,"Postal Code"),l.a.createElement(N,null,"Contact Number"))),l.a.createElement(D.a,null,e.map((function(e){return l.a.createElement(x,{key:e.email},l.a.createElement(N,null,e.firstname),l.a.createElement(N,null,e.lastname),l.a.createElement(N,null,e.email),l.a.createElement(N,null,e.country),l.a.createElement(N,null,e.state),l.a.createElement(N,null,e.city),l.a.createElement(N,null,e.landmark),l.a.createElement(N,null,e.postalcode),l.a.createElement(N,null,e.contactnumber))}))))))},F=t(105),L=t(106),P=t(107);var U=function(){var e=Object(n.useContext)(E),a=e.currentStep,t=e.finalData;return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"App-header"},l.a.createElement(F.a,null,l.a.createElement(L.a,null,l.a.createElement(P.a,{variant:"h6"},"Praveen Oruganti Multi Step Form"))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"center-stepper"},l.a.createElement(g.a,{style:{width:"18%"},activeStep:a-1,orientation:"horizontal"},l.a.createElement(p.a,null,l.a.createElement(O.a,null)),l.a.createElement(p.a,null,l.a.createElement(O.a,null)),l.a.createElement(p.a,null,l.a.createElement(O.a,null)))),function(e){switch(e){case 1:return l.a.createElement(v,null);case 2:return l.a.createElement(d,null);case 3:return l.a.createElement(f,null)}}(a),l.a.createElement("br",null),t.length>0?l.a.createElement(B,null):""))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(b,null,l.a.createElement(l.a.StrictMode,null,l.a.createElement(U,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[53,1,2]]]);