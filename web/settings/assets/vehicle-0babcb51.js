import{V as a}from"./VehicleConfig-0ab604e8.js";import{_ as l,u,k as p,l as d,D as i,N as r,y as s}from"./vendor-a21b3a62.js";import"./vendor-fortawesome-41164876.js";import"./index-dc0e711f.js";import"./vendor-bootstrap-d0c3645c.js";import"./vendor-jquery-a5dbbab1.js";import"./vendor-axios-0e6de98a.js";import"./vendor-sortablejs-3016fed8.js";import"./dynamic-import-helper-be004503.js";const m={name:"VehicleSocSmarteq",mixins:[a]},v={class:"vehicle-soc-smarteq"};function f(o,e,g,w,V,b){const t=u("openwb-base-text-input");return p(),d("div",v,[i(t,{title:"Benutzername",required:"",subtype:"user","model-value":o.vehicle.configuration.user_id,"onUpdate:modelValue":e[0]||(e[0]=n=>o.updateConfiguration(n,"configuration.user_id"))},{help:r(()=>e[3]||(e[3]=[s(" Der Benutzername für die Anmeldung an den Servern. ")])),_:1},8,["model-value"]),i(t,{title:"Kennwort",required:"",subtype:"password","model-value":o.vehicle.configuration.password,"onUpdate:modelValue":e[1]||(e[1]=n=>o.updateConfiguration(n,"configuration.password"))},{help:r(()=>e[4]||(e[4]=[s(" Das Passwort für die Anmeldung an den Servern. ")])),_:1},8,["model-value"]),i(t,{title:"VIN",required:"","model-value":o.vehicle.configuration.vin,"onUpdate:modelValue":e[2]||(e[2]=n=>o.updateConfiguration(n,"configuration.vin"))},{help:r(()=>e[5]||(e[5]=[s(" Die Fahrgestellnummer des Fahrzeugs. ")])),_:1},8,["model-value"])])}const $=l(m,[["render",f],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/vehicles/smarteq/vehicle.vue"]]);export{$ as default};
