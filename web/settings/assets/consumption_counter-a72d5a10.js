import{C as d}from"./HardwareInstallation-6cc98da9.js";import{_ as m,u as o,k as b,l as c,D as t,N as s,y as r}from"./vendor-a21b3a62.js";import"./vendor-fortawesome-41164876.js";import"./index-dc0e711f.js";import"./vendor-bootstrap-d0c3645c.js";import"./vendor-jquery-a5dbbab1.js";import"./vendor-axios-0e6de98a.js";import"./vendor-sortablejs-3016fed8.js";import"./dynamic-import-helper-be004503.js";const _={name:"DeviceOpenwbFlexConsumptionCounter",mixins:[d]},f={class:"device-openwb-flex-consumption-counter"};function g(n,e,w,v,x,B){const l=o("openwb-base-heading"),u=o("openwb-base-alert"),p=o("openwb-base-select-input"),a=o("openwb-base-number-input");return b(),c("div",f,[t(l,null,{default:s(()=>e[2]||(e[2]=[r(" Einstellungen für openWB-Flex Verbrauchszähler ")])),_:1}),t(u,{subtype:"info"},{default:s(()=>e[3]||(e[3]=[r(" Bei saldierenden Zählern (B23) werden die Zählerstände für Einspeisung und Bezug aus dem Zähler ausgelesen. Bei Zählern, die nicht saldierend arbeiten (SDM120, SDM630, SDM72D-M), wird der Zählerstand für den Bezug aus dem Zähler ausgelesen. Eine Messung der Einspeisung ist nicht möglich. ")])),_:1}),t(p,{title:"Zählermodell","not-selected":"Bitte auswählen",options:[{value:"sdm120",text:"SDM120"},{value:"sdm630",text:"SDM630/SDM72D-M"},{value:"b23",text:"B23"}],"model-value":n.component.configuration.version,required:"","onUpdate:modelValue":e[0]||(e[0]=i=>n.updateConfiguration(i,"configuration.version"))},null,8,["model-value"]),t(a,{title:"Modbus-ID",required:"",min:1,max:255,"model-value":n.component.configuration.id,"onUpdate:modelValue":e[1]||(e[1]=i=>n.updateConfiguration(i,"configuration.id"))},null,8,["model-value"])])}const k=m(_,[["render",g],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/openwb/openwb_flex/consumption_counter.vue"]]);export{k as default};
