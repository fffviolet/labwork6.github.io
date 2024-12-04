(function(){"use strict";var e={9623:function(e,t,n){var o=n(5130),i=n(6768),l=n(4232);const a={id:"app"},r={"aria-labelledby":"list-summary",class:"stack-large"};function d(e,t,n,o,d,s){const u=(0,i.g2)("EChartAnimation"),c=(0,i.g2)("EChart"),m=(0,i.g2)("to-do-form"),h=(0,i.g2)("to-do-item");return(0,i.uX)(),(0,i.CE)("div",a,[(0,i.bF)(u),(0,i.bF)(c),(0,i.bF)(m,{onTodoAdded:s.addToDo},null,8,["onTodoAdded"]),(0,i.Lk)("h2",{id:"list-summary",ref:"listSummary",tabindex:"-1"},(0,l.v_)(s.listSummary),513),(0,i.Lk)("ul",r,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(d.ToDoItems,(e=>((0,i.uX)(),(0,i.CE)("li",{key:e.id},[(0,i.bF)(h,{label:e.label,done:e.done,id:e.id,onCheckboxChanged:t=>s.updateDoneStatus(e.id),onItemDeleted:t=>s.deleteToDo(e.id),onItemEdited:t=>s.editToDo(e.id,t)},null,8,["label","done","id","onCheckboxChanged","onItemDeleted","onItemEdited"])])))),128))])])}n(4114),n(8992),n(4520),n(2577);const s={key:0,class:"stack-small"},u={class:"custom-checkbox"},c=["id","checked"],m=["for"],h={class:"btn-group"},b={class:"visually-hidden"},f={class:"visually-hidden"};function p(e,t,n,o,a,r){const d=(0,i.g2)("to-do-item-edit-form");return a.isEditing?((0,i.uX)(),(0,i.Wv)(d,{key:1,id:n.id,label:n.label,onItemEdited:r.itemEdited,onEditCancelled:r.editCancelled},null,8,["id","label","onItemEdited","onEditCancelled"])):((0,i.uX)(),(0,i.CE)("div",s,[(0,i.Lk)("div",u,[(0,i.Lk)("input",{type:"checkbox",class:"checkbox",id:n.id,checked:r.isDone,onChange:t[0]||(t[0]=t=>e.$emit("checkbox-changed"))},null,40,c),(0,i.Lk)("label",{for:n.id,class:"checkbox-label"},(0,l.v_)(n.label),9,m)]),(0,i.Lk)("div",h,[(0,i.Lk)("button",{type:"button",class:"btn",ref:"editButton",onClick:t[1]||(t[1]=(...e)=>r.toggleToItemEditForm&&r.toggleToItemEditForm(...e))},[t[3]||(t[3]=(0,i.eW)(" Edit ")),(0,i.Lk)("span",b,(0,l.v_)(n.label),1)],512),(0,i.Lk)("button",{type:"button",class:"btn btn__danger",onClick:t[2]||(t[2]=(...e)=>r.deleteToDo&&r.deleteToDo(...e))},[t[4]||(t[4]=(0,i.eW)(" Delete ")),(0,i.Lk)("span",f,(0,l.v_)(n.label),1)])])]))}const v={class:"edit-label"},y=["id"],g={class:"btn-group"},k={class:"visually-hidden"},C={type:"submit",class:"btn btn__primary"},E={class:"visually-hidden"};function D(e,t,n,a,r,d){return(0,i.uX)(),(0,i.CE)("form",{class:"stack-small",onSubmit:t[2]||(t[2]=(0,o.D$)(((...e)=>d.onSubmit&&d.onSubmit(...e)),["prevent"]))},[(0,i.Lk)("div",null,[(0,i.Lk)("label",v,'Edit Name for "'+(0,l.v_)(n.label)+'"',1),(0,i.bo)((0,i.Lk)("input",{id:n.id,ref:"labelInput",type:"text",autocomplete:"off","onUpdate:modelValue":t[0]||(t[0]=e=>r.newLabel=e)},null,8,y),[[o.Jo,r.newLabel,void 0,{lazy:!0,trim:!0}]])]),(0,i.Lk)("div",g,[(0,i.Lk)("button",{type:"button",class:"btn",onClick:t[1]||(t[1]=(...e)=>d.onCancel&&d.onCancel(...e))},[t[3]||(t[3]=(0,i.eW)(" Cancel ")),(0,i.Lk)("span",k,"editing "+(0,l.v_)(n.label),1)]),(0,i.Lk)("button",C,[t[4]||(t[4]=(0,i.eW)(" Save ")),(0,i.Lk)("span",E,"edit for "+(0,l.v_)(n.label),1)])])],32)}var T={props:{label:{type:String,required:!0},id:{type:String,required:!0}},data(){return{newLabel:this.label}},methods:{onSubmit(){this.newLabel&&this.newLabel!==this.label?this.$emit("item-edited",this.newLabel):this.onCancel()},onCancel(){this.$emit("edit-cancelled")}},mounted(){const e=this.$refs.labelInput;e.focus()}},_=n(1241);const L=(0,_.A)(T,[["render",D],["__scopeId","data-v-aaccf738"]]);var I=L,S={components:{ToDoItemEditForm:I},props:{label:{required:!0,type:String},done:{default:!1,type:Boolean},id:{required:!0,type:String}},data(){return{isEditing:!1}},computed:{isDone(){return this.done}},methods:{deleteToDo(){this.$emit("item-deleted")},toggleToItemEditForm(){console.log(this.$refs.editButton),this.isEditing=!0},itemEdited(e){this.$emit("item-edited",e),this.isEditing=!1,this.focusOnEditButton()},editCancelled(){this.isEditing=!1,this.focusOnEditButton()},focusOnEditButton(){this.$nextTick((()=>{const e=this.$refs.editButton;e.focus()}))}}};const w=(0,_.A)(S,[["render",p],["__scopeId","data-v-b69cb148"]]);var x=w,O=n(3165),$=n.n(O);function A(e,t,n,l,a,r){return(0,i.uX)(),(0,i.CE)("form",{onSubmit:t[1]||(t[1]=(0,o.D$)(((...e)=>r.onSubmit&&r.onSubmit(...e)),["prevent"]))},[t[2]||(t[2]=(0,i.Lk)("h2",{class:"label-wrapper"},[(0,i.Lk)("label",{for:"new-todo-input",class:"label__lg"}," What needs to be done? ")],-1)),(0,i.bo)((0,i.Lk)("input",{type:"text",id:"new-todo-input",name:"new-todo",autocomplete:"off","onUpdate:modelValue":t[0]||(t[0]=e=>a.label=e),class:"input__lg"},null,512),[[o.Jo,a.label,void 0,{lazy:!0,trim:!0}]]),t[3]||(t[3]=(0,i.Lk)("button",{type:"submit",class:"btn btn__primary btn__lg"},"Add",-1))],32)}var F={methods:{onSubmit(){""!==this.label&&(this.$emit("todo-added",this.label),this.label="")}},data(){return{label:""}}};const j=(0,_.A)(F,[["render",A]]);var X=j;const W={ref:"echartContainer",style:{width:"100%",height:"100px"}};function B(e,t,n,o,l,a){return(0,i.uX)(),(0,i.CE)("div",W,null,512)}var z=n(9671),q={name:"EChartAnimation",mounted(){this.initEChart()},methods:{initEChart(){const e={graphic:{elements:[{type:"text",left:"center",top:"center",style:{text:"My To-Do List",fontSize:50,fontWeight:"bold",lineDash:[0,200],lineDashOffset:0,fill:"transparent",stroke:"#000",lineWidth:1},keyframeAnimation:{duration:3e3,loop:!0,keyframes:[{percent:.7,style:{fill:"transparent",lineDashOffset:200,lineDash:[200,0]}},{percent:.8,style:{fill:"transparent"}},{percent:1,style:{fill:"black"}}]}}]}},t=z.Ts(this.$refs.echartContainer);t.setOption(e)}}};const M=(0,_.A)(q,[["render",B]]);var P=M;const V={ref:"echartContainer",style:{width:"50%",height:"80px"}};function J(e,t,n,o,l,a){return(0,i.uX)(),(0,i.CE)("div",V,null,512)}n(1454);var U={name:"EChart",mounted(){this.initEChart()},methods:{initEChart(){const e={graphic:{elements:[{type:"group",left:"center",top:"center",children:new Array(7).fill(0).map(((e,t)=>({type:"rect",x:20*t,shape:{x:0,y:-40,width:10,height:80},style:{fill:"#303133"},keyframeAnimation:{duration:1e3,delay:200*t,loop:!0,keyframes:[{percent:.5,scaleY:.3,easing:"cubicIn"},{percent:1,scaleY:1,easing:"cubicOut"}]}})))}]}},t=z.Ts(this.$refs.echartContainer);t.setOption(e)}}};const Y=(0,_.A)(U,[["render",J],["__scopeId","data-v-22ca09a5"]]);var H=Y,K={name:"app",components:{ToDoItem:x,ToDoForm:X,EChartAnimation:P,EChart:H},data(){return{ToDoItems:[{id:$()("todo-"),label:"Learn Vue",done:!1},{id:$()("todo-"),label:"Create a Vue project with the CLI",done:!0},{id:$()("todo-"),label:"Have fun",done:!0},{id:$()("todo-"),label:"Create a to-do list",done:!1}]}},methods:{addToDo(e){this.ToDoItems.push({id:$()("todo-"),label:e,done:!1})},updateDoneStatus(e){const t=this.ToDoItems.find((t=>t.id===e));t.done=!t.done},deleteToDo(e){const t=this.ToDoItems.findIndex((t=>t.id===e));this.ToDoItems.splice(t,1),this.$refs.listSummary.focus()},editToDo(e,t){const n=this.ToDoItems.find((t=>t.id===e));n.label=t}},computed:{listSummary(){const e=this.ToDoItems.filter((e=>e.done)).length;return`${e} out of ${this.ToDoItems.length} items completed`}}};const N=(0,_.A)(K,[["render",d]]);var G=N;(0,o.Ef)(G).mount("#app")}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var l=t[o]={exports:{}};return e[o].call(l.exports,l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,l){if(!o){var a=1/0;for(u=0;u<e.length;u++){o=e[u][0],i=e[u][1],l=e[u][2];for(var r=!0,d=0;d<o.length;d++)(!1&l||a>=l)&&Object.keys(n.O).every((function(e){return n.O[e](o[d])}))?o.splice(d--,1):(r=!1,l<a&&(a=l));if(r){e.splice(u--,1);var s=i();void 0!==s&&(t=s)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[o,i,l]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,l,a=o[0],r=o[1],d=o[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(d)var u=d(n)}for(t&&t(o);s<a.length;s++)l=a[s],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(u)},o=self["webpackChunkmoz_todo_vue"]=self["webpackChunkmoz_todo_vue"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(9623)}));o=n.O(o)})();
//# sourceMappingURL=app.0e2552c7.js.map