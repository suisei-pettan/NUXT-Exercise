const s=["fluent-emoji-high-contrast","material-symbols-light","cryptocurrency-color","icon-park-outline","icon-park-twotone","fluent-emoji-flat","emojione-monotone","streamline-emojis","heroicons-outline","simple-line-icons","material-symbols","flat-color-icons","icon-park-solid","pepicons-pencil","heroicons-solid","pepicons-print","cryptocurrency","pixelarticons","system-uicons","bitcoin-icons","devicon-plain","entypo-social","grommet-icons","vscode-icons","pepicons-pop","svg-spinners","fluent-emoji","simple-icons","circle-flags","medical-icon","icomoon-free","majesticons","radix-icons","humbleicons","fa6-regular","emojione-v1","skill-icons","academicons","healthicons","fluent-mdl2","teenyicons","ant-design","gravity-ui","akar-icons","lets-icons","streamline","fa6-brands","file-icons","game-icons","foundation","fa-regular","mono-icons","iconamoon","zondicons","mdi-light","eos-icons","gridicons","icon-park","heroicons","fa6-solid","meteocons","arcticons","dashicons","fa-brands","websymbol","fontelico","mingcute","flowbite","bytesize","guidance","openmoji","emojione","nonicons","brandico","flagpack","fa-solid","fontisto","si-glyph","pepicons","iconoir","tdesign","clarity","octicon","codicon","pajamas","formkit","line-md","twemoji","noto-v1","fxemoji","devicon","raphael","flat-ui","topcoat","feather","tabler","carbon","lucide","memory","mynaui","circum","fluent","nimbus","entypo","icons8","subway","vaadin","solar","basil","typcn","charm","prime","quill","logos","covid","maki","gala","mage","ooui","noto","flag","iwwa","zmdi","bpmn","mdi","ion","uil","bxs","cil","uiw","uim","uit","uis","jam","oui","bxl","cib","cbi","cif","gis","map","geo","fad","eva","wpf","whh","ic","ph","ri","bi","bx","gg","ci","ep","fe","mi","f7","ei","wi","la","fa","oi","et","el","ls","vs","il","ps"];function l(i=""){let e,n="";if(i[0]==="@"&&i.includes(":")&&(n=i.split(":")[0].slice(1),i=i.split(":").slice(1).join(":")),i.startsWith("i-")){i=i.replace(/^i-/,"");for(const o of s)if(i.startsWith(o)){e=o,i=i.slice(o.length+1);break}}else if(i.includes(":")){const[o,c]=i.split(":");e=o,i=c}return{provider:n,prefix:e||"",name:i||""}}export{l as r};
