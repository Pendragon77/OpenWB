import{_ as r,p as t,k as p,l as c,A as a,L as m,u as _,q as f,x as b}from"./vendor-6e5b23b4.js";import"./vendor-sortablejs-b3476726.js";const g={name:"DeviceQCellls",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0}},methods:{updateConfiguration(n,e=void 0){this.$emit("update:configuration",{value:n,object:e})}}},v={class:"device-qcells"},w={class:"small"};function x(n,e,s,C,h,i){const d=t("openwb-base-heading"),u=t("openwb-base-text-input"),l=t("openwb-base-number-input");return p(),c("div",v,[a(d,null,{default:m(()=>[_(" Einstellungen für QCells ESS "),f("span",w,"(Modul: "+b(n.$options.name)+")",1)]),_:1}),a(u,{title:"IP oder Hostname",subtype:"host",required:"","model-value":s.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=o=>i.updateConfiguration(o,"configuration.ip_address"))},null,8,["model-value"]),a(l,{title:"Modbus ID","model-value":s.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[1]||(e[1]=o=>i.updateConfiguration(o,"configuration.modbus_id"))},null,8,["model-value"])])}const B=r(g,[["render",x],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/qcells/device.vue"]]);export{B as default};
