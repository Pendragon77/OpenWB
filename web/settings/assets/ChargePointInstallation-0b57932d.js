import{l as J,d as G,S as Q,A as X,T as Y,U as K,J as ee,V as te,F as ne,W as ae}from"./vendor-fortawesome-ad83e535.js";import{_ as L,C as oe}from"./index-bbf2ec18.js";import{_ as E}from"./dynamic-import-helper-be004503.js";import{_ as U,p as h,k as l,l as g,y as w,L as o,u as i,x as k,A as n,q as m,a0 as D,a1 as F,G as T,z as c,I,n as M,a2 as O,Q as ie,R as le}from"./vendor-94ac8c48.js";import"./vendor-bootstrap-9f620114.js";import"./vendor-jquery-f7104ff8.js";import"./vendor-axios-dc63434e.js";import"./vendor-sortablejs-dbc23470.js";const re={name:"ChargePointConfigFallback",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},chargePointId:{default:void 0},chargePointType:String},methods:{updateConfiguration(e,a=void 0){this.$emit("update:configuration",{value:e,object:a})}}},se={class:"device-fallback"},de={key:1};function ue(e,a,d,P,p,u){const C=h("openwb-base-alert"),b=h("openwb-base-textarea");return l(),g("div",se,[Object.keys(d.configuration).length==0?(l(),w(C,{key:0,subtype:"info"},{default:o(()=>[i(' Der Ladepunkt-Typ "'+k(d.chargePointType)+'" bietet keine Einstellungen. ',1)]),_:1})):(l(),g("div",de,[n(C,{subtype:"warning"},{default:o(()=>[i(' Es wurde keine Konfigurationsseite für den Ladepunkt-Typ "'+k(d.chargePointType)+'" gefunden. Die Einstellungen können als JSON direkt bearbeitet werden. ',1)]),_:1}),n(b,{title:"Konfiguration",subtype:"json","model-value":d.configuration,"onUpdate:modelValue":a[0]||(a[0]=B=>u.updateConfiguration(B,"configuration"))},{help:o(()=>[i(" Bitte prüfen Sie, ob die Eingaben richtig interpretiert werden. ")]),_:1},8,["model-value"]),n(C,{subtype:"info"},{default:o(()=>[m("pre",null,k(JSON.stringify(d.configuration,void 0,2)),1)]),_:1})]))])}const me=U(re,[["render",ue],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/charge_points/OpenwbChargePointConfigFallback.vue"]]),pe={name:"ChargePointCommandsFallback",props:{configuration:{type:Object,required:!0},chargePointId:{default:void 0},chargePointType:String}},ce={class:"charge-point-commands-fallback"};function ge(e,a,d,P,p,u){const C=h("openwb-base-alert");return l(),g("div",ce,[n(C,{subtype:"secondary"},{default:o(()=>[i(' Der Ladepunkt-Typ "'+k(d.chargePointType)+'" bietet keine Befehle an. ',1)]),_:1})])}const he=U(pe,[["render",ge],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/charge_points/OpenwbChargePointCommandsFallback.vue"]]),fe={name:"OpenwbChargePointProxy",emits:["update:configuration"],props:{chargePointId:{required:!0},chargePointType:{type:String,required:!0},configuration:{type:Object,required:!0},moduleName:{type:String,required:!1,default:void 0}},computed:{myChargePointSettingsComponent(){return console.debug(`loading charge point settings: ${this.chargePointType}`),D({loader:()=>E(Object.assign({"./external_openwb/chargePoint.vue":()=>L(()=>import("./chargePoint-07057692.js"),["assets/chargePoint-07057692.js","assets/vendor-94ac8c48.js","assets/vendor-sortablejs-dbc23470.js","assets/vendor-7b9e30aa.css"]),"./internal_openwb/chargePoint.vue":()=>L(()=>import("./chargePoint-a56bc604.js"),["assets/chargePoint-a56bc604.js","assets/vendor-94ac8c48.js","assets/vendor-sortablejs-dbc23470.js","assets/vendor-7b9e30aa.css"]),"./mqtt/chargePoint.vue":()=>L(()=>import("./chargePoint-7200a105.js"),["assets/chargePoint-7200a105.js","assets/vendor-94ac8c48.js","assets/vendor-sortablejs-dbc23470.js","assets/vendor-7b9e30aa.css"]),"./openwb_pro/chargePoint.vue":()=>L(()=>import("./chargePoint-80e648c2.js"),["assets/chargePoint-80e648c2.js","assets/vendor-94ac8c48.js","assets/vendor-sortablejs-dbc23470.js","assets/vendor-7b9e30aa.css"]),"./openwb_series2_satellit/chargePoint.vue":()=>L(()=>import("./chargePoint-4a124bb9.js"),["assets/chargePoint-4a124bb9.js","assets/vendor-94ac8c48.js","assets/vendor-sortablejs-dbc23470.js","assets/vendor-7b9e30aa.css"]),"./smartwb/chargePoint.vue":()=>L(()=>import("./chargePoint-10f32a1a.js"),["assets/chargePoint-10f32a1a.js","assets/vendor-94ac8c48.js","assets/vendor-sortablejs-dbc23470.js","assets/vendor-7b9e30aa.css"])}),`./${this.chargePointType}/chargePoint.vue`),errorComponent:me})},myChargePointCommandsComponent(){return console.debug(`loading charge point commands: ${this.chargePointType}`),D({loader:()=>E(Object.assign({"./openwb_pro/commands.vue":()=>L(()=>import("./commands-e217699c.js"),["assets/commands-e217699c.js","assets/vendor-94ac8c48.js","assets/vendor-sortablejs-dbc23470.js","assets/vendor-7b9e30aa.css"])}),`./${this.chargePointType}/commands.vue`),errorComponent:he})}},methods:{updateConfiguration(e){this.$emit("update:configuration",e)}}},be=m("hr",null,null,-1);function _e(e,a,d,P,p,u){const C=h("openwb-base-heading");return l(),g(T,null,[n(C,null,{default:o(()=>[i(" Einstellungen für Ladepunkt "+k(d.moduleName),1)]),_:1}),(l(),w(F(u.myChargePointSettingsComponent),{configuration:d.configuration,chargePointId:d.chargePointId,chargePointType:d.chargePointType,"onUpdate:configuration":a[0]||(a[0]=b=>u.updateConfiguration(b))},null,40,["configuration","chargePointId","chargePointType"])),be,n(C,null,{default:o(()=>[i(" Befehle für Ladepunkt "+k(d.moduleName),1)]),_:1}),(l(),w(F(u.myChargePointCommandsComponent),{configuration:d.configuration,chargePointId:d.chargePointId,chargePointType:d.chargePointType},null,8,["configuration","chargePointId","chargePointType"]))],64)}const ve=U(fe,[["render",_e],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/charge_points/OpenwbChargePointProxy.vue"]]);J.add(G,Q,X,Y,K,ee,te);const we={name:"OpenwbChargePointInstallation",mixins:[oe],emits:["sendCommand"],components:{FontAwesomeIcon:ne,FontAwesomeLayers:ae,OpenwbChargePointProxy:ve},data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/optional/rfid/active","openWB/chargepoint/+/config","openWB/chargepoint/template/+","openWB/chargepoint/template/+/autolock/+","openWB/system/configurable/chargepoints","openWB/system/configurable/chargepoints_internal"],chargePointToAdd:void 0,showChargePointModal:!1,modalChargePointIndex:void 0,showChargePointTemplateModal:!1,modalChargePointTemplateIndex:void 0,showChargePointTemplateAutolockPlanModal:!1,modalChargePointTemplateAutolockPlanIndex:void 0}},computed:{installedChargePoints:{get(){let e=this.getWildcardTopics("openWB/chargepoint/+/config"),a={};for(const[d,P]of Object.entries(e))(P.type==="internal_openwb"||this.$store.state.mqtt["openWB/general/extern"]===!1)&&(a[d]=P);return a}},chargePointTemplates:{get(){return this.getWildcardTopics("openWB/chargepoint/template/+")}},chargePointTemplateList:{get(){let e=[];return Object.keys(this.chargePointTemplates).forEach(a=>{let d=parseInt(a.match(/([0-9]+)/g)[0]),P=this.$store.state.mqtt["openWB/chargepoint/template/"+d].name;e.push({value:d,text:P})}),e}}},methods:{addChargePoint(e){e.stopPropagation(),this.$emit("sendCommand",{command:"addChargepoint",data:{type:this.chargePointToAdd}})},removeChargePointModal(e,a){a.stopPropagation(),this.modalChargePointIndex=parseInt(e.match(/(?:\/)(\d+)(?=\/)/)[1]),this.showChargePointModal=!0},removeChargePoint(e,a){this.showChargePointModal=!1,a=="confirm"&&(console.debug("request removal of charge point '"+e+"'"),this.$emit("sendCommand",{command:"removeChargepoint",data:{id:e}}))},getChargePointList(){return this.$store.state.mqtt["openWB/general/extern"]===!1?this.$store.state.mqtt["openWB/system/configurable/chargepoints"]:this.$store.state.mqtt["openWB/system/configurable/chargepoints_internal"]},getChargePointName(e){return this.$store.state.mqtt["openWB/chargepoint/"+e+"/config"]?this.$store.state.mqtt["openWB/chargepoint/"+e+"/config"].name:"Ladepunkt "+e},getChargePointTemplateName(e){return this.$store.state.mqtt["openWB/chargepoint/template/"+e]?this.$store.state.mqtt["openWB/chargepoint/template/"+e].name:"Profil "+e},addChargePointTemplate(e){e.stopPropagation(),this.$emit("sendCommand",{command:"addChargepointTemplate",data:{}})},getChargePointTemplateIndex(e){return parseInt(e.match(/([^/]+)$/)[0])},removeChargePointTemplateModal(e,a){a.stopPropagation(),this.modalChargePointTemplateIndex=this.getChargePointTemplateIndex(e),this.showChargePointTemplateModal=!0},removeChargePointTemplate(e,a){this.showChargePointTemplateModal=!1,a=="confirm"&&(console.info("request removal of chargePoint template '"+e+"'"),this.$emit("sendCommand",{command:"removeChargepointTemplate",data:{id:e}}))},addChargePointTemplateAutolockPlan(e,a){a.stopPropagation(),console.info("requesting new charge point template autolock plan...");let d=this.getChargePointTemplateIndex(e);this.$emit("sendCommand",{command:"addAutolockPlan",data:{template:d}})},removeChargePointTemplateAutolockPlanModal(e,a,d){d.stopPropagation(),this.modalChargePointTemplateIndex=this.getChargePointTemplateIndex(e),this.modalChargePointTemplateAutolockPlanIndex=parseInt(a.match(/([^/]+)$/)[0]),this.showChargePointTemplateAutolockPlanModal=!0},removeChargePointTemplateAutolockPlan(e,a,d){this.showChargePointTemplateAutolockPlanModal=!1,d=="confirm"&&(console.info("request removal of chargePoint template '"+e+"' autolock plan '"+a+"'"),this.$emit("sendCommand",{command:"removeAutolockPlan",data:{template:e,plan:a}}))},getChargePointTemplateAutolockPlanName(e,a){return this.$store.state.mqtt["openWB/chargepoint/template/"+e+"/autolock/"+a]?this.$store.state.mqtt["openWB/chargepoint/template/"+e+"/autolock/"+a].name:"Autolock Zeitplan "+e+"/"+a},getChargePointTemplateAutolockPlans(e){let a=this.getChargePointTemplateIndex(e);return this.getWildcardTopics("openWB/chargepoint/template/"+a+"/autolock/+")},updateConfiguration(e,a){console.debug("updateConfiguration",e,a),this.updateState(e,a.value,a.object)}}},_=e=>(ie("data-v-75fe5743"),e=e(),le(),e),ke={class:"chargePointInstallation"},Ce={name:"chargePointInstallationForm"},ye={key:0},Pe=_(()=>m("hr",null,null,-1)),Ve={key:1},Le=_(()=>m("hr",null,null,-1)),We=_(()=>m("br",null,null,-1)),Te=_(()=>m("br",null,null,-1)),Be=_(()=>m("br",null,null,-1)),Se=_(()=>m("br",null,null,-1)),Ae={key:1},xe={class:"col-1"},Ie=_(()=>m("br",null,null,-1)),Ue=_(()=>m("ul",null,[m("li",null," Interne openWB - wenn diese openWB über einen verbauten Ladepunkt mit Regelcontroller verfügt (z.B. Standard(+), Custom, Duo, Buchse, NICHT Standalone); ansonsten immer anlegen, egal ob diese openWB steuert = primary oder ferngesteuert wird = secondary "),m("li",null," Externe openWB - wenn diese openWB (primary) die Fernsteuerung von externen openWB (secondary) übernimmt "),m("li",null," MQTT-Ladepunkt - nur zur Nutzung des openWB-Simulators zugelassen "),m("li",null," openWB Pro - wenn diese openWB (primary) die Fernsteuerung einer openWB Pro (secondary) übernimmt "),m("li",null," openWB series2 Satellit/Satellit Duo - wenn diese openWB (primary) die Fernsteuerung einer openWB series2 Satellit/Satellit Duo (secondary) übernimmt "),m("li",null," smartWB/EVSE-Wifi - wenn diese openWB (primary) die Fernsteuerung einer smartWB/EVSE-Wifi übernimmt ")],-1)),ze=_(()=>m("hr",{class:"border-secondary"},null,-1)),qe={key:0},Ee={key:1},De=_(()=>m("hr",null,null,-1)),Fe={key:0},Me=_(()=>m("br",null,null,-1)),Oe=["innerHTML"],Ne=_(()=>m("hr",null,null,-1)),je=_(()=>m("br",null,null,-1)),Re=_(()=>m("br",null,null,-1)),Ze=_(()=>m("a",{href:"https://github.com/openWB/core/wiki/Lastmanagement-und-kaskadierte-Z%C3%A4hler",target:"_blank",rel:"noopener noreferrer"},"Wiki zum Lastmanagement",-1)),$e=_(()=>m("hr",null,null,-1)),He={key:0},Je={key:1},Ge={key:2},Qe={key:2};function Xe(e,a,d,P,p,u){const C=h("openwb-base-modal-dialog"),b=h("font-awesome-icon"),B=h("openwb-base-alert"),S=h("openwb-base-avatar"),V=h("openwb-base-text-input"),z=h("openwb-base-select-input"),N=h("openwb-charge-point-proxy"),W=h("openwb-base-heading"),y=h("openwb-base-button-group-input"),A=h("openwb-base-card"),j=h("openwb-base-click-button"),R=h("font-awesome-layers"),Z=h("openwb-base-array-input"),q=h("openwb-base-range-input"),$=h("openwb-base-submit-buttons");return l(),g(T,null,[c(" modal dialogs "),n(C,{show:p.showChargePointModal,title:"Ladepunkt löschen",subtype:"danger",buttons:[{text:"Löschen",event:"confirm",subtype:"danger"}],onModalResult:a[0]||(a[0]=r=>u.removeChargePoint(p.modalChargePointIndex,r))},{default:o(()=>[i(' Wollen Sie den Ladepunkt "'+k(u.getChargePointName(p.modalChargePointIndex))+'" (ID: '+k(p.modalChargePointIndex)+") wirklich entfernen? Dieser Vorgang kann nicht rückgängig gemacht werden! ",1)]),_:1},8,["show"]),n(C,{show:p.showChargePointTemplateModal,title:"Ladepunkt-Profil löschen",subtype:"danger",buttons:[{text:"Löschen",event:"confirm",subtype:"danger"}],onModalResult:a[1]||(a[1]=r=>u.removeChargePointTemplate(p.modalChargePointTemplateIndex,r))},{default:o(()=>[i(' Wollen Sie das Ladepunkt-Profil "'+k(u.getChargePointTemplateName(p.modalChargePointTemplateIndex))+'" (ID: '+k(p.modalChargePointTemplateIndex)+") wirklich entfernen? Dieser Vorgang kann nicht rückgängig gemacht werden! ",1)]),_:1},8,["show"]),n(C,{show:p.showChargePointTemplateAutolockPlanModal,title:"Autolock Zeitplan löschen",subtype:"danger",buttons:[{text:"Löschen",event:"confirm",subtype:"danger"}],onModalResult:a[2]||(a[2]=r=>u.removeChargePointTemplateAutolockPlan(p.modalChargePointTemplateIndex,p.modalChargePointTemplateAutolockPlanIndex,r))},{default:o(()=>[i(' Wollen Sie den Autolock Zeitplan "'+k(u.getChargePointTemplateAutolockPlanName(p.modalChargePointTemplateIndex,p.modalChargePointTemplateAutolockPlanIndex))+'" wirklich entfernen? Dieser Vorgang kann nicht rückgängig gemacht werden! ',1)]),_:1},8,["show"]),c(" main content "),m("div",ke,[m("form",Ce,[c(" charge point card "),n(A,{title:"Ladepunkte",subtype:"primary",collapsible:!0,collapsed:!0},{header:o(()=>[n(b,{"fixed-width":"",icon:["fas","charging-station"]}),i(" Ladepunkte ")]),default:o(()=>[Object.keys(u.installedChargePoints).length>1?(l(),w(B,{key:0,subtype:"danger"},{default:o(()=>[i(' Wenn mehrere Ladepunkte mit unterschiedlichen Lademodi genutzt werden, so ist für jeden Ladepunkt ein eigenes "Fahrzeug" (mit eigenem "Ladeprofil") anzulegen und dem jeweiligen LP auf der Hauptseite zuzuordnen. Diese Abhängigkeit wird mittelfristig noch bereinigt. ')]),_:1})):c("v-if",!0),(l(!0),g(T,null,I(u.installedChargePoints,(r,s)=>(l(),w(A,{key:s,title:r.name+" (ID: "+r.id+")",collapsible:!0,collapsed:!0,subtype:"primary"},{actions:o(t=>[t.collapsed?c("v-if",!0):(l(),w(S,{key:0,class:"bg-danger clickable",onClick:v=>u.removeChargePointModal(s,v)},{default:o(()=>[n(b,{"fixed-width":"",icon:["fas","trash"]})]),_:2},1032,["onClick"]))]),default:o(()=>[n(V,{title:"Bezeichnung",subtype:"text","model-value":r.name,"onUpdate:modelValue":t=>e.updateState(s,t,"name")},null,8,["model-value","onUpdate:modelValue"]),n(V,{title:"Modul",subtype:"text",disabled:"",readonly:"","model-value":e.$store.state.mqtt[s].type},null,8,["model-value"]),r.type!=="internal_openwb"||e.$store.state.mqtt["openWB/general/extern"]===!1?(l(),g("span",ye,[n(z,{title:"Ladepunkt-Profil",options:u.chargePointTemplateList,"model-value":e.$store.state.mqtt[s].template,"onUpdate:modelValue":t=>e.updateState(s,t,"template")},null,8,["options","model-value","onUpdate:modelValue"])])):c("v-if",!0),Pe,n(N,{chargePointId:r.id,chargePointType:e.$store.state.mqtt[s].type,moduleName:e.$store.state.mqtt[s].name,configuration:r.configuration,"onUpdate:configuration":t=>u.updateConfiguration(s,t)},null,8,["chargePointId","chargePointType","moduleName","configuration","onUpdate:configuration"]),r.type!=="internal_openwb"||e.$store.state.mqtt["openWB/general/extern"]===!1?(l(),g("div",Ve,[Le,n(W,null,{default:o(()=>[i("Hardware-Optionen")]),_:1}),n(y,{title:"automatische Phasenumschaltung vorhanden",buttons:[{buttonValue:!1,text:"Nein"},{buttonValue:!0,text:"Ja"}],"model-value":r.auto_phase_switch_hw,"onUpdate:modelValue":t=>e.updateState(s,t,"auto_phase_switch_hw")},null,8,["model-value","onUpdate:modelValue"]),n(y,{title:"Control-Pilot-Unterbrechung vorhanden",buttons:[{buttonValue:!1,text:"Nein"},{buttonValue:!0,text:"Ja"}],"model-value":r.control_pilot_interruption_hw,"onUpdate:modelValue":t=>e.updateState(s,t,"control_pilot_interruption_hw")},{help:o(()=>[i(' Die Control-Pilot-Leitung ist im Ladekabel integriert und dient der Steuerung der Fahrzeugladung (An/Aus/Stromvorgaben). Bei einigen Fahrzeugen können durch die Regelung erzwungene, längere Ladestopps (z.B. beim PV-Laden) zu unerwünschten "Einschlaf"-Effekten des Fahrzeuges führen. Mit diesem feature, welches hardwareseitig verbaut sein muss, kann ein Abstecken des Ladesteckers simuliert werden, um ein Aufwecken des Fahrzeuges zu ermöglichen. Die Funktion hängt immer auch vom Fahrzeugtyp ab. ')]),_:2},1032,["model-value","onUpdate:modelValue"]),n(W,null,{default:o(()=>[i(" Elektrischer Anschluss ")]),_:1}),n(y,{title:"Anzahl angeschlossener Phasen",buttons:[{buttonValue:1,text:"1"},{buttonValue:2,text:"2"},{buttonValue:3,text:"3"}],"model-value":r.connected_phases,"onUpdate:modelValue":t=>e.updateState(s,t,"connected_phases")},null,8,["model-value","onUpdate:modelValue"]),n(y,{title:"Phase 1 des Ladekabels",buttons:[{buttonValue:0,text:"unbekannt",class:"btn-outline-danger"},{buttonValue:1,text:"EVU L1",class:"btn-outline-success"},{buttonValue:2,text:"EVU L2",class:"btn-outline-success"},{buttonValue:3,text:"EVU L3",class:"btn-outline-success"}],"model-value":r.phase_1,"onUpdate:modelValue":t=>e.updateState(s,t,"phase_1")},{help:o(()=>[i(" Hier ist anzugeben, an welcher Phase des Hausanschlusses (EVU-Punkt) die Phase 1 dieses Ladepunktes angeschlossen ist. Diese Information wird für das Lastmanagement benötigt, um bei einer Schieflast gezielt einzelne Ladepunkte zu drosseln."),We,i(' Bei mehreren Ladepunkten macht es Sinn, die Phasen der LP rotierend anzuschließen, damit mehrere "nicht-dreiphasig" ladende Fahrzeuge mit optimaler Leistung laden können, bevor das Lastmanagement eingreift.'),Te,i(" Es wird vorausgesetzt, dass das Drehfeld innerhalb der Installation gleich bleibt. Wenn z.B. L1 des Ladepunktes auf EVU-L2 liegt, muss L2 des Ladepunktes auf EVU-L3 aufgelegt sein (und L3 des Ladepunktes auf EVU-L1)."),Be,i(" Eine Möglichkeit, die zur Ladepunktphase L1 zugehörige EVU-Phase zu ermitteln, ist eine einphasige Ladung zu starten und die Phasenströme am EVU-Zähler zu beobachten. Mit einem zweiphasig ladenden Fahrzeug kann danach auch der Anschluss von L2 ermittelt und so das Drehfeld kontrolliert werden."),Se,i(" Im Zweifel bitte das Drehfeld von einer Fachkraft prüfen und korrigieren lassen. ")]),_:2},1032,["model-value","onUpdate:modelValue"])])):c("v-if",!0)]),_:2},1032,["title"]))),128)),Object.keys(u.installedChargePoints).length>0?(l(),g("hr",Ae)):c("v-if",!0),n(z,{class:"mb-2",title:"Verfügbare Ladepunkte",notSelected:"Bitte auswählen",options:u.getChargePointList(),"model-value":p.chargePointToAdd,"onUpdate:modelValue":a[3]||(a[3]=r=>p.chargePointToAdd=r)},{append:o(()=>[m("span",xe,[n(j,{class:M(p.chargePointToAdd===void 0?"btn-outline-success":"btn-success"),disabled:p.chargePointToAdd===void 0,onButtonClicked:u.addChargePoint},{default:o(()=>[n(b,{"fixed-width":"",icon:["fas","plus"]})]),_:1},8,["class","disabled","onButtonClicked"])])]),help:o(()=>[i(" Bitte einen Ladepunkt auswählen, der der openWB-Regelung hinzugefügt werden soll."),Ie,Ue]),_:1},8,["options","model-value"])]),_:1}),ze,c(" charge point template card "),n(A,{title:"Ladepunkt-Profile",collapsible:!0,collapsed:!0},{header:o(()=>[n(R,{"fixed-width":"",class:"fa-lg"},{default:o(()=>[n(b,{"fixed-width":"",icon:["far","file"]}),n(b,{"fixed-width":"",icon:["fas","charging-station"],transform:"shrink-8"})]),_:1}),i(" Ladepunkt-Profile ")]),actions:o(()=>[e.$store.state.mqtt["openWB/general/extern"]===!1?(l(),w(S,{key:0,class:"bg-success clickable",onClick:u.addChargePointTemplate},{default:o(()=>[n(b,{"fixed-width":"",icon:["fas","plus"]})]),_:1},8,["onClick"])):c("v-if",!0)]),default:o(()=>[e.$store.state.mqtt["openWB/general/extern"]===!0?(l(),g("div",qe,[n(B,{subtype:"info"},{default:o(()=>[i(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')]),_:1})])):(l(),g("div",Ee,[(l(!0),g(T,null,I(u.chargePointTemplates,(r,s)=>(l(),w(A,{key:s,title:r.name+" (ID: "+u.getChargePointTemplateIndex(s)+")",collapsible:!0,collapsed:!0},O({default:o(()=>[n(V,{title:"Bezeichnung",subtype:"text","model-value":r.name,"onUpdate:modelValue":t=>e.updateState(s,t,"name"),disabled:s.endsWith("/0")},O({_:2},[s.endsWith("/0")?{name:"help",fn:o(()=>[i(" Das Standard-Profil kann nicht umbenannt werden. ")]),key:"0"}:void 0]),1032,["model-value","onUpdate:modelValue","disabled"]),De,e.$store.state.mqtt["openWB/optional/rfid/active"]===!0?(l(),g("div",Fe,[n(W,null,{default:o(()=>[i(" Zugangskontrolle ")]),_:1}),n(y,{title:"Freigabe mit RFID",buttons:[{buttonValue:!1,text:"Nein"},{buttonValue:!0,text:"Ja"}],"model-value":r.rfid_enabling,"onUpdate:modelValue":t=>e.updateState(s,t,"rfid_enabling")},null,8,["model-value","onUpdate:modelValue"]),n(Z,{title:"Zugeordnete Tags",noElementsMessage:"Keine Tags zugeordnet.","model-value":r.valid_tags,"onUpdate:modelValue":t=>e.updateState(s,t,"valid_tags")},{help:o(()=>[i(" An allen Ladepunkten, denen dieses Ladepunkt-Profil zugeordnet ist, können die hier eingetragenen Tags verwendet werden."),Me,m("span",{innerHTML:e.$store.state.text.rfidWiki},null,8,Oe)]),_:2},1032,["model-value","onUpdate:modelValue"]),Ne])):c("v-if",!0),n(W,null,{default:o(()=>[i("Angaben zum konfigurierten Ladestrom der openWB ")]),_:1}),n(B,{subtype:"info"},{default:o(()=>[i(" Hier werden die maximalen Ladeströme entsprechend den in der zugeordneten Wallbox genutzten Phasen eingestellt."),je,i(" Generell gilt, dass diese Werte entsprechend der Ausführung der Wallbox und des elektrischen Anschlusses bzw. der Absicherung zu wählen sind. Bei einer openWB mit 22kW Maximalleistung sind hier jeweils 32A einzustellen. Ist die openWB beispielsweise auf 11kW begrenzt (KfW-Förderung oder die Zuleitung ist mit 16A abgesichert), dann sind hier jeweils 16A einzustellen."),Re,i(" Komplexere Installationen mit mehreren Wallboxen werden im "),Ze,i(" beschrieben. ")]),_:1}),n(q,{title:"Maximalstrom bei einer Phase",min:6,max:32,step:1,unit:"A","model-value":r.max_current_single_phase,"onUpdate:modelValue":t=>e.updateState(s,t,"max_current_single_phase")},null,8,["model-value","onUpdate:modelValue"]),n(q,{title:"Maximalstrom mehrere Phasen",min:6,max:32,step:1,unit:"A","model-value":r.max_current_multi_phases,"onUpdate:modelValue":t=>e.updateState(s,t,"max_current_multi_phases")},null,8,["model-value","onUpdate:modelValue"]),$e,n(W,null,{default:o(()=>[i("Automatische Sperre")]),_:1}),n(y,{title:"Automatische Sperre aktiv",buttons:[{buttonValue:!1,text:"Nein"},{buttonValue:!0,text:"Ja"}],"model-value":r.autolock.active,"onUpdate:modelValue":t=>e.updateState(s,t,"autolock.active")},{help:o(()=>[i(" Wird die automatische Sperre aktiviert, können Fahrzeugladungen mittels Zeitplan auf gewünschte Zeitbereiche eingeschränkt werden. Dies kann z.B. bei Zugänglichkeiten zu Ladepunkten in öffentlichen oder halb-öffentlichen Bereichen sinnvoll sein. ")]),_:2},1032,["model-value","onUpdate:modelValue"]),n(y,{title:"Erst nach Ladeende sperren",buttons:[{buttonValue:!1,text:"Nein"},{buttonValue:!0,text:"Ja"}],"model-value":r.autolock.wait_for_charging_end,"onUpdate:modelValue":t=>e.updateState(s,t,"autolock.wait_for_charging_end")},{help:o(()=>[i(' Wenn ein Zeitplan die automatische Sperre aktiviert, werden alle Ladepunkte direkt gesperrt und laufende Ladevorgänge beendet. Wird hier "Ja" ausgewählt, dann werden laufende Ladevorgänge NICHT beendet und diese Ladepunkte erst nach abgeschlossener Ladung gesperrt. ')]),_:2},1032,["model-value","onUpdate:modelValue"]),n(W,null,{actions:o(()=>[n(S,{class:"bg-success clickable",onClick:t=>u.addChargePointTemplateAutolockPlan(s,t)},{default:o(()=>[n(b,{"fixed-width":"",icon:["fas","plus"]})]),_:2},1032,["onClick"])]),default:o(()=>[i(" Zeitpläne für die automatische Sperre ")]),_:2},1024),(l(!0),g(T,null,I(u.getChargePointTemplateAutolockPlans(s),(t,v)=>(l(),w(A,{key:v,title:t.name,collapsible:!0,collapsed:!0},{actions:o(f=>[f.collapsed==!0?(l(),g("span",{key:0,class:M(["subheader pill",t.active?"bg-success":"bg-danger"])},[n(b,{"fixed-width":"",icon:["fas","clock"]}),i(" "+k(t.time[0])+" - "+k(t.time[1])+" ",1),t.frequency.selected=="once"?(l(),g("span",He,[n(b,{"fixed-width":"",icon:["fas","calendar-day"]}),i(" "+k(e.formatDate(t.frequency.once[0])==e.formatDate(t.frequency.once[1])?e.formatDate(t.frequency.once[0]):e.formatDate(t.frequency.once[0])+" - "+e.formatDate(t.frequency.once[1])),1)])):c("v-if",!0),t.frequency.selected=="daily"?(l(),g("span",Je,[n(b,{"fixed-width":"",icon:["fas","calendar-week"]})])):c("v-if",!0),t.frequency.selected=="weekly"?(l(),g("span",Ge,[n(b,{"fixed-width":"",icon:["fas","calendar-alt"]})])):c("v-if",!0)],2)):c("v-if",!0),f.collapsed==!1?(l(),w(S,{key:1,class:"bg-danger clickable",onClick:x=>u.removeChargePointTemplateAutolockPlanModal(s,v,x)},{default:o(()=>[n(b,{"fixed-width":"",icon:["fas","trash"]})]),_:2},1032,["onClick"])):c("v-if",!0)]),default:o(()=>[n(V,{title:"Bezeichnung","model-value":t.name,"onUpdate:modelValue":f=>e.updateState(v,f,"name")},null,8,["model-value","onUpdate:modelValue"]),n(y,{title:"Zeitplan aktiv",buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":t.active,"onUpdate:modelValue":f=>e.updateState(v,f,"active")},null,8,["model-value","onUpdate:modelValue"]),n(V,{title:"Sperren um",subtype:"time","model-value":t.time[0],"onUpdate:modelValue":f=>e.updateState(v,f,"time.0")},null,8,["model-value","onUpdate:modelValue"]),n(V,{title:"Freigeben um",subtype:"time","model-value":t.time[1],"onUpdate:modelValue":f=>e.updateState(v,f,"time.1")},null,8,["model-value","onUpdate:modelValue"]),n(y,{title:"Wiederholungen",buttons:[{buttonValue:"once",text:"Einmalig",class:"btn-outline-info"},{buttonValue:"daily",text:"Täglich",class:"btn-outline-info"},{buttonValue:"weekly",text:"Wöchentlich",class:"btn-outline-info"}],"model-value":t.frequency.selected,"onUpdate:modelValue":f=>e.updateState(v,f,"frequency.selected")},null,8,["model-value","onUpdate:modelValue"]),t.frequency.selected=="once"?(l(),w(V,{key:0,title:"Sperren ab ...",subtype:"date","model-value":t.frequency.once[0],"onUpdate:modelValue":f=>e.updateState(v,f,"frequency.once.0")},null,8,["model-value","onUpdate:modelValue"])):c("v-if",!0),t.frequency.selected=="once"?(l(),w(V,{key:1,title:"... bis",subtype:"date",min:t.frequency.once[0],"model-value":t.frequency.once[1],"onUpdate:modelValue":f=>e.updateState(v,f,"frequency.once.1")},null,8,["min","model-value","onUpdate:modelValue"])):c("v-if",!0),t.frequency.selected=="weekly"?(l(),g("div",Qe,[(l(!0),g(T,null,I(e.weekdays,(f,x)=>(l(),w(y,{key:x,title:f,buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}],"model-value":t.frequency.weekly[x],"onUpdate:modelValue":H=>e.updateState(v,H,"frequency.weekly."+x)},null,8,["title","model-value","onUpdate:modelValue"]))),128))])):c("v-if",!0)]),_:2},1032,["title"]))),128))]),_:2},[s.endsWith("/0")?void 0:{name:"actions",fn:o(t=>[t.collapsed?c("v-if",!0):(l(),w(S,{key:0,class:"bg-danger clickable",onClick:v=>u.removeChargePointTemplateModal(s,v)},{default:o(()=>[n(b,{"fixed-width":"",icon:["fas","trash"]})]),_:2},1032,["onClick"]))]),key:"0"}]),1032,["title"]))),128))]))]),_:1}),n($,{formName:"chargePointInstallationForm",onSave:a[4]||(a[4]=r=>e.$emit("save")),onReset:a[5]||(a[5]=r=>e.$emit("reset")),onDefaults:a[6]||(a[6]=r=>e.$emit("defaults"))})])])],64)}const lt=U(we,[["render",Xe],["__scopeId","data-v-75fe5743"],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/ChargePointInstallation.vue"]]);export{lt as default};
