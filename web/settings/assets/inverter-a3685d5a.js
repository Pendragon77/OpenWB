import{_ as c,u as n,k as d,l as p,D as o,N as s,y as a,x as u,z as l}from"./vendor-f2b8aa6f.js";import"./vendor-sortablejs-2f1828d0.js";const _={name:"DeviceSofarInverter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(e,t=void 0){this.$emit("update:configuration",{value:e,object:t})}}},f={class:"device-azzurro_sofar-inverter"},m={class:"small"};function b(e,t,v,g,h,w){const r=n("openwb-base-heading"),i=n("openwb-base-alert");return d(),p("div",f,[o(r,null,{default:s(()=>[a(" Einstellungen für Sofar Wechselrichter "),u("span",m,"(Modul: "+l(e.$options.name)+")",1)]),_:1}),o(i,{subtype:"info"},{default:s(()=>[a(" Diese Komponente benötigt keine Einstellungen. ")]),_:1})])}const z=c(_,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/azzurro_sofar/inverter.vue"]]);export{z as default};