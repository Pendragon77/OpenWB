import{D as u}from"./HardwareInstallation-70f156e6.js";import{_ as p,u as r,k as d,l as m,D as i,N as s,y as l}from"./vendor-a21b3a62.js";import"./vendor-fortawesome-41164876.js";import"./index-f9fda857.js";import"./vendor-bootstrap-d0c3645c.js";import"./vendor-jquery-a5dbbab1.js";import"./vendor-axios-0e6de98a.js";import"./vendor-sortablejs-3016fed8.js";import"./dynamic-import-helper-be004503.js";const f={name:"DeviceKostalPikoOld",mixins:[u]},v={class:"device-kostal-piko-old"};function c(o,e,g,b,k,w){const a=r("openwb-base-heading"),n=r("openwb-base-text-input");return d(),m("div",v,[i(a,null,{default:s(()=>e[3]||(e[3]=[l(" Einstellungen für Kostal Piko (alte Generation) ")])),_:1}),i(n,{title:"URL",subtype:"url",required:"","model-value":o.device.configuration.url,"onUpdate:modelValue":e[0]||(e[0]=t=>o.updateConfiguration(t,"configuration.url"))},{help:s(()=>e[4]||(e[4]=[l(' Es wird eine komplette URL inklusive Protokoll erwartet. Normalerweise ist der Wechselrichter über "http://IP" zu erreichen. ')])),_:1},8,["model-value"]),i(n,{title:"Benutzername",subtype:"user",required:"","model-value":o.device.configuration.user,"onUpdate:modelValue":e[1]||(e[1]=t=>o.updateConfiguration(t,"configuration.user"))},null,8,["model-value"]),i(n,{title:"Passwort",subtype:"password",required:"","model-value":o.device.configuration.password,"onUpdate:modelValue":e[2]||(e[2]=t=>o.updateConfiguration(t,"configuration.password"))},null,8,["model-value"])])}const $=p(f,[["render",c],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/kostal/kostal_piko_old/device.vue"]]);export{$ as default};