import{v as e,t as a,w as o,bp as s,E as t,D as l,bm as d,u as n}from"./index-DJtkXLbk.js";import{_ as u}from"./_plugin-vue_export-helper.BCo6x5W8.js";const c=u({name:"fui-backdrop",emits:["click"],props:{show:{type:Boolean,default:!1},background:{type:String,default:""},absolute:{type:Boolean,default:!1},full:{type:Boolean,default:!1},zIndex:{type:Number,default:980},closable:{type:Boolean,default:!1}},methods:{handleClick(){this.closable&&this.show&&this.$emit("click")}}},[["render",function(u,c,i,p,r,b){const f=n;return e(),a(f,{class:t(["fui-backdrop__wrap",{"fui-backdrop__bg":!i.background,"fui-backdrop__show":i.show}]),style:l({background:i.background,position:i.absolute?"absolute":"fixed",zIndex:i.zIndex}),onClick:d(b.handleClick,["stop"])},{default:o((()=>[s(u.$slots,"default",{},void 0,!0)])),_:3},8,["class","style","onClick"])}],["__scopeId","data-v-c5a2efb5"]]);export{c as _};
