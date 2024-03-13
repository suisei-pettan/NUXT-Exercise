import{b as $,_ as I}from"./Button.hSRO7bZA.js";import{v as P,x as y,y as M,z as N,l as g,B as C,J as b,r as D,m as F,o as r,c as o,H as h,D as a,t as x,G as m,I as l,E as S,a as A,d as O,F as U,C as E,L as B}from"./entry.DUQdll-X.js";import{u as T}from"./selectMenu.KG9xlQtT.js";import{_ as j}from"./_plugin-vue_export-helper.DlAUqK2U.js";import"./Icon.BouiH21x.js";import"./index.DKzsDYrr.js";import"./nuxt-link.D-Mu8Jxu.js";const J={wrapper:"relative inline-flex items-center justify-center flex-shrink-0",background:"bg-gray-100 dark:bg-gray-800",rounded:"rounded-full",text:"font-medium leading-none text-gray-900 dark:text-white truncate",placeholder:"font-medium leading-none text-gray-500 dark:text-gray-400 truncate",size:{"3xs":"h-4 w-4 text-[8px]","2xs":"h-5 w-5 text-[10px]",xs:"h-6 w-6 text-xs",sm:"h-8 w-8 text-sm",md:"h-10 w-10 text-base",lg:"h-12 w-12 text-lg",xl:"h-14 w-14 text-xl","2xl":"h-16 w-16 text-2xl","3xl":"h-20 w-20 text-3xl"},chip:{base:"absolute rounded-full ring-1 ring-white dark:ring-gray-900 flex items-center justify-center text-white dark:text-gray-900 font-medium",background:"bg-{color}-500 dark:bg-{color}-400",position:{"top-right":"top-0 right-0","bottom-right":"bottom-0 right-0","top-left":"top-0 left-0","bottom-left":"bottom-0 left-0"},size:{"3xs":"h-[4px] min-w-[4px] text-[4px] p-px","2xs":"h-[5px] min-w-[5px] text-[5px] p-px",xs:"h-1.5 min-w-[0.375rem] text-[6px] p-px",sm:"h-2 min-w-[0.5rem] text-[7px] p-0.5",md:"h-2.5 min-w-[0.625rem] text-[8px] p-0.5",lg:"h-3 min-w-[0.75rem] text-[10px] p-0.5",xl:"h-3.5 min-w-[0.875rem] text-[11px] p-1","2xl":"h-4 min-w-[1rem] text-[12px] p-1","3xl":"h-5 min-w-[1.25rem] text-[14px] p-1"}},icon:{base:"text-gray-500 dark:text-gray-400 flex-shrink-0",size:{"3xs":"h-2 w-2","2xs":"h-2.5 w-2.5",xs:"h-3 w-3",sm:"h-4 w-4",md:"h-5 w-5",lg:"h-6 w-6",xl:"h-7 w-7","2xl":"h-8 w-8","3xl":"h-10 w-10"}},default:{size:"sm",icon:null,chipColor:null,chipPosition:"top-right"}},L={wrapper:"w-full relative overflow-hidden",inner:"w-0 flex-1",title:"text-sm font-medium",description:"mt-1 text-sm leading-4 opacity-90",actions:"flex items-center gap-2 mt-3 flex-shrink-0",shadow:"",rounded:"rounded-lg",padding:"p-4",gap:"gap-3",icon:{base:"flex-shrink-0 w-5 h-5"},avatar:{base:"flex-shrink-0 self-center",size:"md"},color:{white:{solid:"text-gray-900 dark:text-white bg-white dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-800"}},variant:{solid:"bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900",outline:"text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400",soft:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400",subtle:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25"},default:{color:"white",variant:"solid",icon:null,closeButton:null,actionButton:{size:"xs",color:"primary",variant:"link"}}},p=P(y.ui.strategy,y.ui.avatar,J),G=M({components:{UIcon:$},inheritAttrs:!1,props:{src:{type:[String,Boolean],default:null},alt:{type:String,default:null},text:{type:String,default:null},icon:{type:String,default:()=>p.default.icon},size:{type:String,default:()=>p.default.size,validator(e){return Object.keys(p.size).includes(e)}},chipColor:{type:String,default:()=>p.default.chipColor,validator(e){return["gray",...y.ui.colors].includes(e)}},chipPosition:{type:String,default:()=>p.default.chipPosition,validator(e){return Object.keys(p.chip.position).includes(e)}},chipText:{type:[String,Number],default:null},imgClass:{type:String,default:""},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:d}=T("avatar",N(e,"ui"),p),f=g(()=>typeof e.src=="boolean"?null:e.src),k=g(()=>(e.alt||"").split(" ").map(z=>z.charAt(0)).join("").substring(0,2)),i=g(()=>C(b(t.value.wrapper,(n.value||!f.value)&&t.value.background,t.value.rounded,t.value.size[e.size]),e.class)),s=g(()=>C(b(t.value.rounded,t.value.size[e.size]),e.imgClass)),u=g(()=>b(t.value.icon.base,t.value.icon.size[e.size])),v=g(()=>b(t.value.chip.base,t.value.chip.size[e.size],t.value.chip.position[e.chipPosition],t.value.chip.background.replaceAll("{color}",e.chipColor))),n=D(!1);F(()=>e.src,()=>{n.value&&(n.value=!1)});function w(){n.value=!0}return{ui:t,attrs:d,wrapperClass:i,imgClass:s,iconClass:u,chipClass:v,url:f,placeholder:k,error:n,onError:w}}}),H=["alt","src"];function R(e,t,d,f,k,i){const s=$;return r(),o("span",{class:a(e.wrapperClass)},[e.url&&!e.error?(r(),o("img",h({key:0,class:e.imgClass,alt:e.alt,src:e.url},e.attrs,{onError:t[0]||(t[0]=(...u)=>e.onError&&e.onError(...u))}),null,16,H)):e.text?(r(),o("span",{key:1,class:a(e.ui.text)},x(e.text),3)):e.icon?(r(),m(s,{key:2,name:e.icon,class:a(e.iconClass)},null,8,["name","class"])):e.placeholder?(r(),o("span",{key:3,class:a(e.ui.placeholder)},x(e.placeholder),3)):l("",!0),e.chipColor?(r(),o("span",{key:4,class:a(e.chipClass)},x(e.chipText),3)):l("",!0),S(e.$slots,"default")],2)}const V=j(G,[["render",R]]),c=P(y.ui.strategy,y.ui.alert,L),q=M({components:{UIcon:$,UAvatar:V,UButton:I},inheritAttrs:!1,props:{title:{type:String,default:null},description:{type:String,default:null},icon:{type:String,default:()=>c.default.icon},avatar:{type:Object,default:null},closeButton:{type:Object,default:()=>c.default.closeButton},actions:{type:Array,default:()=>[]},color:{type:String,default:()=>c.default.color,validator(e){return[...y.ui.colors,...Object.keys(c.color)].includes(e)}},variant:{type:String,default:()=>c.default.variant,validator(e){return[...Object.keys(c.variant),...Object.values(c.color).flatMap(t=>Object.keys(t))].includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["close"],setup(e){const{ui:t,attrs:d}=T("alert",N(e,"ui"),c),f=g(()=>{var s,u;const i=((u=(s=t.value.color)==null?void 0:s[e.color])==null?void 0:u[e.variant])||t.value.variant[e.variant];return C(b(t.value.wrapper,t.value.rounded,t.value.shadow,t.value.padding,i==null?void 0:i.replaceAll("{color}",e.color)),e.class)});function k(i){i.click&&i.click()}return{ui:t,attrs:d,alertClass:f,onAction:k,twMerge:C}}});function K(e,t,d,f,k,i){const s=$,u=V,v=I;return r(),o("div",h({class:e.alertClass},e.attrs),[A("div",{class:a(["flex",[e.ui.gap,{"items-start":e.description||e.$slots.description,"items-center":!e.description&&!e.$slots.description}]])},[e.icon?(r(),m(s,{key:0,name:e.icon,class:a(e.ui.icon.base)},null,8,["name","class"])):l("",!0),e.avatar?(r(),m(u,h({key:1},{size:e.ui.avatar.size,...e.avatar},{class:e.ui.avatar.base}),null,16,["class"])):l("",!0),A("div",{class:a(e.ui.inner)},[e.title||e.$slots.title?(r(),o("p",{key:0,class:a(e.ui.title)},[S(e.$slots,"title",{title:e.title},()=>[O(x(e.title),1)])],2)):l("",!0),e.description||e.$slots.description?(r(),o("p",{key:1,class:a(e.ui.description)},[S(e.$slots,"description",{description:e.description},()=>[O(x(e.description),1)])],2)):l("",!0),(e.description||e.$slots.description)&&e.actions.length?(r(),o("div",{key:2,class:a(e.ui.actions)},[(r(!0),o(U,null,E(e.actions,(n,w)=>(r(),m(v,h({key:w},{...e.ui.default.actionButton||{},...n},{onClick:B(z=>e.onAction(n),["stop"])}),null,16,["onClick"]))),128))],2)):l("",!0)],2),e.closeButton||!e.description&&!e.$slots.description&&e.actions.length?(r(),o("div",{key:2,class:a(e.twMerge(e.ui.actions,"mt-0"))},[!e.description&&!e.$slots.description&&e.actions.length?(r(!0),o(U,{key:0},E(e.actions,(n,w)=>(r(),m(v,h({key:w},{...e.ui.default.actionButton||{},...n},{onClick:B(z=>e.onAction(n),["stop"])}),null,16,["onClick"]))),128)):l("",!0),e.closeButton?(r(),m(v,h({key:1,"aria-label":"Close"},{...e.ui.default.closeButton||{},...e.closeButton},{onClick:t[0]||(t[0]=B(n=>e.$emit("close"),["stop"]))}),null,16)):l("",!0)],2)):l("",!0)],2)],16)}const Q=j(q,[["render",K]]),W={};function X(e,t){const d=Q;return r(),m(d,{type:"info",description:"114514"})}const oe=j(W,[["render",X]]);export{oe as default};
