import{v as l,x as u,y as g,z as p,l as c,B as f,J as b,o as s,G as m,w as y,c as r,D as o,E as d,I as i,H as k,K as v}from"./entry.BQ3UYlc9.js";import{u as h}from"./selectMenu.nNK2qA3s.js";import{_ as $}from"./_plugin-vue_export-helper.DlAUqK2U.js";const C={base:"",background:"bg-white dark:bg-gray-900",divide:"divide-y divide-gray-200 dark:divide-gray-800",ring:"ring-1 ring-gray-200 dark:ring-gray-800",rounded:"rounded-lg",shadow:"shadow",body:{base:"",background:"",padding:"px-4 py-5 sm:p-6"},header:{base:"",background:"",padding:"px-4 py-5 sm:px-6"},footer:{base:"",background:"",padding:"px-4 py-4 sm:px-6"}},w=l(u.ui.strategy,u.ui.card,C),B=g({inheritAttrs:!1,props:{as:{type:String,default:"div"},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(a){const{ui:e,attrs:n}=h("card",p(a,"ui"),w),t=c(()=>f(b(e.value.base,e.value.rounded,e.value.divide,e.value.ring,e.value.shadow,e.value.background),a.class));return{ui:e,attrs:n,cardClass:t}}});function S(a,e,n,t,j,z){return s(),m(v(a.$attrs.onSubmit?"form":a.as),k({class:a.cardClass},a.attrs),{default:y(()=>[a.$slots.header?(s(),r("div",{key:0,class:o([a.ui.header.base,a.ui.header.padding,a.ui.header.background])},[d(a.$slots,"header")],2)):i("",!0),a.$slots.default?(s(),r("div",{key:1,class:o([a.ui.body.base,a.ui.body.padding,a.ui.body.background])},[d(a.$slots,"default")],2)):i("",!0),a.$slots.footer?(s(),r("div",{key:2,class:o([a.ui.footer.base,a.ui.footer.padding,a.ui.footer.background])},[d(a.$slots,"footer")],2)):i("",!0)]),_:3},16,["class"])}const I=$(B,[["render",S]]);export{I as _};
