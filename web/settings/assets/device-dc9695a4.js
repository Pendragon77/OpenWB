import{D as u}from"./HardwareInstallation-6cc98da9.js";import{_ as l,u as n,k as m,l as b,D as t,N as s,y as c,x as _}from"./vendor-a21b3a62.js";import"./vendor-fortawesome-41164876.js";import"./index-dc0e711f.js";import"./vendor-bootstrap-d0c3645c.js";import"./vendor-jquery-a5dbbab1.js";import"./vendor-axios-0e6de98a.js";import"./vendor-sortablejs-3016fed8.js";import"./dynamic-import-helper-be004503.js";const f={name:"DeviceDeye",mixins:[u]},v={class:"device-deye"};function g(o,e,w,y,x,D){const r=n("openwb-base-heading"),a=n("openwb-base-alert"),p=n("openwb-base-text-input"),d=n("openwb-base-number-input");return m(),b("div",v,[t(r,null,{default:s(()=>e[2]||(e[2]=[c("Einstellungen für Deye")])),_:1}),t(a,{subtype:"info"},{default:s(()=>e[3]||(e[3]=[_("span",{class:"text-danger"}," Deye Wechselrichter verfügen über keine Modbus-TCP Schnittstelle. Für die Auslesung wird ein RS485/LAN-Adapter benötigt. ",-1)])),_:1}),t(p,{title:"IP oder Hostname",subtype:"host",required:"","model-value":o.device.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=i=>o.updateConfiguration(i,"configuration.ip_address"))},null,8,["model-value"]),t(d,{title:"Port",required:"",min:1,max:65535,"model-value":o.device.configuration.port,"onUpdate:modelValue":e[1]||(e[1]=i=>o.updateConfiguration(i,"configuration.port"))},null,8,["model-value"])])}const E=l(f,[["render",g],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/deye/deye/device.vue"]]);export{E as default};
