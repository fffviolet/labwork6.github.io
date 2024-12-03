(function(){"use strict";var e={5826:function(e,t,o){var n=o(5130),i=o(6768),l=o(4232);const d={id:"app"},a={id:"list-summary"},s={"aria-labelledby":"list-summary",class:"stack-large"};function r(e,t,o,n,r,u){const c=(0,i.g2)("to-do-form"),b=(0,i.g2)("to-do-item");return(0,i.uX)(),(0,i.CE)("div",d,[t[0]||(t[0]=(0,i.Lk)("h1",null,"To-Do List",-1)),(0,i.bF)(c,{onTodoAdded:u.addToDo},null,8,["onTodoAdded"]),(0,i.Lk)("h2",a,(0,l.v_)(u.listSummary),1),(0,i.Lk)("ul",s,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(r.ToDoItems,(e=>((0,i.uX)(),(0,i.CE)("li",{key:e.id},[(0,i.bF)(b,{label:e.label,done:e.done,id:e.id,onCheckboxChanged:t=>u.updateDoneStatus(e.id),onItemDeleted:t=>u.deleteToDo(e.id),onItemEdited:t=>u.editToDo(e.id,t)},null,8,["label","done","id","onCheckboxChanged","onItemDeleted","onItemEdited"])])))),128))])])}o(4114),o(8992),o(4520),o(2577);const u={key:0,class:"stack-small"},c=["for"],b={class:"btn-group"},m={class:"visually-hidden"},p={class:"visually-hidden"};function f(e,t,o,n,d,a){const s=(0,i.g2)("el-checkbox"),r=(0,i.g2)("el-button"),f=(0,i.g2)("el-popconfirm"),h=(0,i.g2)("to-do-item-edit-form");return d.isEditing?((0,i.uX)(),(0,i.Wv)(h,{key:1,id:o.id,label:o.label,onItemEdited:a.itemEdited,onEditCancelled:a.editCancelled},null,8,["id","label","onItemEdited","onEditCancelled"])):((0,i.uX)(),(0,i.CE)("div",u,[(0,i.bF)(s,{id:o.id,checked:a.isDone,onChange:t[0]||(t[0]=t=>e.$emit("checkbox-changed",t)),size:"large",style:{height:"20px",width:"50px"}},{default:(0,i.k6)((()=>[(0,i.Lk)("label",{for:o.id,class:"checkbox-label"},(0,l.v_)(o.label),9,c)])),_:1},8,["id","checked"]),(0,i.Lk)("div",b,[(0,i.bF)(r,{type:"primary",plain:"",size:"large",class:"btn",onClick:a.toggleToItemEditForm},{default:(0,i.k6)((()=>[t[2]||(t[2]=(0,i.eW)(" Edit ")),(0,i.Lk)("span",m,(0,l.v_)(o.label),1)])),_:1},8,["onClick"]),(0,i.bF)(f,{title:"Are you sure you want to delete this?",width:"250",icon:e.InfoFilled,"icon-color":"#F56C6C",onConfirm:a.deleteToDo},{reference:(0,i.k6)((()=>[(0,i.bF)(r,{type:"danger",plain:"",size:"large",class:"btn",onClick:t[1]||(t[1]=e=>e.stopPropagation())},{default:(0,i.k6)((()=>[t[3]||(t[3]=(0,i.eW)(" Delete ")),(0,i.Lk)("span",p,(0,l.v_)(o.label),1)])),_:1})])),_:1},8,["icon","onConfirm"])])]))}const h={class:"edit-label"},g={class:"btn-group"},v={class:"visually-hidden"},k={class:"visually-hidden"};function y(e,t,o,d,a,s){const r=(0,i.g2)("el-input"),u=(0,i.g2)("el-button");return(0,i.uX)(),(0,i.CE)("form",{class:"stack-small",onSubmit:t[1]||(t[1]=(0,n.D$)(((...e)=>s.onSubmit&&s.onSubmit(...e)),["prevent"]))},[(0,i.Lk)("div",null,[(0,i.Lk)("label",h,'Edit Name for "'+(0,l.v_)(o.label)+'"',1),(0,i.bF)(r,{id:o.id,style:{"font-size":"19px",height:"38px"},type:"text",autocomplete:"off",modelValue:a.newLabel,"onUpdate:modelValue":t[0]||(t[0]=e=>a.newLabel=e),modelModifiers:{lazy:!0,trim:!0}},null,8,["id","modelValue"])]),(0,i.Lk)("div",g,[(0,i.bF)(u,{type:"info",plain:"",size:"large",style:{"font-size":"19px"},class:"btn",onClick:s.onCancel},{default:(0,i.k6)((()=>[t[2]||(t[2]=(0,i.eW)(" Cancel ")),(0,i.Lk)("span",v,"editing "+(0,l.v_)(o.label),1)])),_:1},8,["onClick"]),(0,i.bF)(u,{type:"success","native-type":"submit",plain:"",size:"large",style:{"font-size":"19px"},class:"btn"},{default:(0,i.k6)((()=>[t[3]||(t[3]=(0,i.eW)(" Save ")),(0,i.Lk)("span",k,"edit for "+(0,l.v_)(o.label),1)])),_:1})])],32)}var C={props:{label:{type:String,required:!0},id:{type:String,required:!0}},data(){return{newLabel:this.label}},methods:{onSubmit(){this.newLabel&&this.newLabel!==this.label&&this.$emit("item-edited",this.newLabel)},onCancel(){this.$emit("edit-cancelled")}}},_=o(1241);const D=(0,_.A)(C,[["render",y],["__scopeId","data-v-f745a5f6"]]);var T=D,E={props:{label:{required:!0,type:String},done:{default:!1,type:Boolean},id:{required:!0,type:String}},data(){return{isEditing:!1}},computed:{isDone(){return this.done}},methods:{toggleToItemEditForm(){this.isEditing=!0},deleteToDo(){this.$emit("item-deleted")},itemEdited(e){this.$emit("item-edited",e),this.isEditing=!1},editCancelled(){this.isEditing=!1}},components:{ToDoItemEditForm:T}};const I=(0,_.A)(E,[["render",f],["__scopeId","data-v-2fb4764d"]]);var L=I,w=o(3165),x=o.n(w);function F(e,t,o,n,l,d){const a=(0,i.g2)("el-input"),s=(0,i.g2)("el-button");return(0,i.uX)(),(0,i.CE)("form",{onSubmit:t[1]||(t[1]=(...e)=>d.onSubmit&&d.onSubmit(...e))},[t[3]||(t[3]=(0,i.Lk)("h2",{class:"label-wrapper"},[(0,i.Lk)("label",{for:"new-todo-input",class:"label__lg"}," What needs to be done? ")],-1)),(0,i.bF)(a,{type:"text",id:"new-todo-input",name:"new-todo",autocomplete:"off",modelValue:l.label,"onUpdate:modelValue":t[0]||(t[0]=e=>l.label=e),class:"input_lg"},null,8,["modelValue"]),(0,i.bF)(s,{type:"primary","native-type":"submit",plain:"",size:"large",style:{"font-size":"19px"},class:"btn btn__lg"},{default:(0,i.k6)((()=>t[2]||(t[2]=[(0,i.eW)("Add")]))),_:1})],32)}var S={methods:{onSubmit(){""!==this.label&&(this.$emit("todo-added",this.label),this.label="")}},data(){return{label:""}}};const z=(0,_.A)(S,[["render",F],["__scopeId","data-v-284c1f02"]]);var O=z,A={name:"app",components:{ToDoItem:L,ToDoForm:O},data(){return{ToDoItems:[{id:x()("todo-"),label:"Learn Vue",done:!1},{id:x()("todo-"),label:"Create a Vue project with the CLI",done:!0},{id:x()("todo-"),label:"Have fun",done:!0},{id:x()("todo-"),label:"Create a to-do list",done:!1}]}},methods:{addToDo(e){this.ToDoItems.push({id:x()("todo-"),label:e,done:!1})},updateDoneStatus(e){const t=this.ToDoItems.find((t=>t.id===e));t.done=!t.done},deleteToDo(e){const t=this.ToDoItems.findIndex((t=>t.id===e));this.ToDoItems.splice(t,1)},editToDo(e,t){const o=this.ToDoItems.find((t=>t.id===e));o.label=t}},computed:{listSummary(){const e=this.ToDoItems.filter((e=>e.done)).length;return`${e} out of ${this.ToDoItems.length} items completed`}}};const $=(0,_.A)(A,[["render",r]]);var V=$,j=o(1571);o(4188);const W=(0,n.Ef)(V);W.use(j.A),W.mount("#app")}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var l=t[n]={exports:{}};return e[n].call(l.exports,l,l.exports,o),l.exports}o.m=e,function(){var e=[];o.O=function(t,n,i,l){if(!n){var d=1/0;for(u=0;u<e.length;u++){n=e[u][0],i=e[u][1],l=e[u][2];for(var a=!0,s=0;s<n.length;s++)(!1&l||d>=l)&&Object.keys(o.O).every((function(e){return o.O[e](n[s])}))?n.splice(s--,1):(a=!1,l<d&&(d=l));if(a){e.splice(u--,1);var r=i();void 0!==r&&(t=r)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[n,i,l]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,l,d=n[0],a=n[1],s=n[2],r=0;if(d.some((function(t){return 0!==e[t]}))){for(i in a)o.o(a,i)&&(o.m[i]=a[i]);if(s)var u=s(o)}for(t&&t(n);r<d.length;r++)l=d[r],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(u)},n=self["webpackChunkmoz_todo_vue"]=self["webpackChunkmoz_todo_vue"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(5826)}));n=o.O(n)})();
//# sourceMappingURL=app.bffd0850.js.map