import{d as _,j as w,W as x,e as r,A as y,c as g,a as e,U as n,ad as u,af as h,g as v,k,F as N,l as R,o as I,m as V}from"./index-CyGJNwlO.js";const C=e("h1",{class:"text-2xl font-semibold mb-4"},"Nueva cuanta",-1),U={class:"mb-4"},B=e("label",{for:"name",class:"block text-gray-600"},"Nombre",-1),F={class:"mb-4"},S=e("label",{for:"email",class:"block text-gray-600"},"Correo",-1),T={class:"mb-4"},A=e("label",{for:"password",class:"block text-gray-600"},"Contraseña",-1),L=e("div",{class:"mb-6 text-blue-500"},[e("a",{href:"#",class:"hover:underline"},"¿Olvidó la contraseña?")],-1),M=e("button",{type:"submit",class:"bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"}," Crear cuenta ",-1),j={class:"mt-6 text-blue-500 text-center"},E=_({__name:"RegisterView",setup(q){const c=w(),f=x(),p=r(null),l=r(null),d=r(null),o=y({fullName:"",email:"",password:""}),b=async()=>{var a,s,m;if(o.fullName.length<2)return(a=l.value)==null?void 0:a.focus();if(o.email==="")return(s=l.value)==null?void 0:s.focus();if(o.password.length<6)return(m=d.value)==null?void 0:m.focus();const{ok:i,message:t}=await c.register(o.fullName,o.email,o.password);i||f.error(t)};return(i,t)=>{const a=R("RouterLink");return I(),g(N,null,[C,e("form",{onSubmit:h(b,["prevent"])},[e("div",U,[B,n(e("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>o.fullName=s),ref_key:"fullNameInputRef",ref:p,type:"text",id:"name",name:"name",class:"w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",autocomplete:"off"},null,512),[[u,o.fullName]])]),e("div",F,[S,n(e("input",{"onUpdate:modelValue":t[1]||(t[1]=s=>o.email=s),ref_key:"emailInputRef",ref:l,type:"email",id:"email",name:"email",class:"w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",autocomplete:"off"},null,512),[[u,o.email]])]),e("div",T,[A,n(e("input",{"onUpdate:modelValue":t[2]||(t[2]=s=>o.password=s),ref_key:"passwordInputRef",ref:d,type:"password",id:"password",name:"password",class:"w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",autocomplete:"off"},null,512),[[u,o.password]])]),L,M],32),e("div",j,[v(a,{to:{name:"login"},class:"hover:underline"},{default:k(()=>[V("Ingresar por aquí")]),_:1})])],64)}}});export{E as default};
