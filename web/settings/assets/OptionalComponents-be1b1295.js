import{_ as C,C as S}from"./index-dc0e711f.js";import{_ as O}from"./dynamic-import-helper-be004503.js";import{l as z,X as V,Y as L,F as I}from"./vendor-fortawesome-41164876.js";import{_ as v,u as p,k as s,l as r,A as f,N as o,y as i,z as b,D as n,x as l,a0 as E,a1 as q,J as F,B as _}from"./vendor-a21b3a62.js";const M={props:{displayTheme:{type:Object,required:!0}},emits:["update:configuration"],methods:{updateConfiguration(t,e=void 0){this.$emit("update:configuration",{value:t,object:e})}}},T=v(M,[["__file","/opt/openWB-dev/openwb-ui-settings/src/components/display_themes/DisplayThemeConfigMixin.vue"]]),N={name:"DisplayThemeFallback",mixins:[T]},j={class:"display-theme-fallback"},A={key:1};function P(t,e,y,w,c,m){const d=p("openwb-base-alert"),u=p("openwb-base-textarea");return s(),r("div",j,[Object.keys(t.displayTheme.configuration).length==0?(s(),f(d,{key:0,subtype:"info"},{default:o(()=>[i(' Das Display-Theme "'+b(t.displayTheme.name)+'" bietet keine Einstellungen. ',1)]),_:1})):(s(),r("div",A,[n(d,{subtype:"warning"},{default:o(()=>[i(' Es wurde keine Konfigurationsseite für das Display-Theme "'+b(t.displayTheme.name)+'" gefunden. Die Einstellungen können als JSON direkt bearbeitet werden. ',1)]),_:1}),n(u,{title:"Konfiguration",subtype:"json","model-value":t.displayTheme.configuration,"onUpdate:modelValue":e[0]||(e[0]=g=>t.updateConfiguration(g,"configuration"))},{help:o(()=>e[1]||(e[1]=[i(" Bitte prüfen Sie, ob die Eingaben richtig interpretiert werden. ")])),_:1},8,["model-value"]),n(d,{subtype:"info"},{default:o(()=>[l("pre",null,b(JSON.stringify(t.displayTheme.configuration,void 0,2)),1)]),_:1})]))])}const U=v(N,[["render",P],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/display_themes/OpenwbDisplayThemeFallback.vue"]]);z.add(V,L);const H={name:"OpenwbDisplayThemeProxy",components:{FontAwesomeIcon:I},mixins:[T],computed:{myComponent(){return console.debug(`loading display theme: ${this.displayTheme.type}`),E({loader:()=>O(Object.assign({"./cards/displayTheme.vue":()=>C(()=>import("./displayTheme-78ab078b.js"),["assets/displayTheme-78ab078b.js","assets/vendor-a21b3a62.js","assets/vendor-sortablejs-3016fed8.js","assets/vendor-aab9f734.css","assets/index-dc0e711f.js","assets/vendor-fortawesome-41164876.js","assets/vendor-bootstrap-d0c3645c.js","assets/vendor-jquery-a5dbbab1.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-0e6de98a.js","assets/index-b3227821.css","assets/dynamic-import-helper-be004503.js"])}),`./${this.displayTheme.type}/displayTheme.vue`),errorComponent:U})}}};function R(t,e,y,w,c,m){const d=p("font-awesome-icon"),u=p("openwb-base-alert"),g=p("openwb-base-heading");return s(),r(F,null,[t.displayTheme.official?(s(),f(u,{key:0,subtype:"success"},{default:o(()=>[n(d,{"fixed-width":"",icon:["fas","certificate"]}),i(' Das ausgewählte Display Theme "'+b(t.displayTheme.name)+'" wird von openWB gepflegt. ',1)]),_:1})):(s(),f(u,{key:1,subtype:"info"},{default:o(()=>[n(d,{"fixed-width":"",icon:["fas","people-group"]}),i(' Das ausgewählte Display Theme "'+b(t.displayTheme.name)+'" wird in unserer Community gepflegt. Rückfragen oder Probleme bitte im Forum diskutieren. ',1)]),_:1})),n(g,null,{default:o(()=>[i(' Einstellungen für Display Theme "'+b(t.displayTheme.name)+'" ',1)]),_:1}),(s(),f(q(m.myComponent),{"display-theme":t.displayTheme,"onUpdate:configuration":e[0]||(e[0]=h=>t.updateConfiguration(h))},null,40,["display-theme"]))],64)}const x=v(H,[["render",R],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/display_themes/OpenwbDisplayThemeProxy.vue"]]),J={name:"OpenwbOptionalComponentsView",components:{OpenwbDisplayThemeProxy:x},mixins:[S],emits:["save","reset","defaults"],data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/chargepoint/+/config","openWB/chargepoint/+/get/rfid","openWB/chargepoint/+/get/rfid_timestamp","openWB/chargepoint/+/set/rfid","openWB/optional/rfid/active","openWB/optional/led/active","ToDo/optional/led/instant_blocked","ToDo/optional/led/pv_blocked","ToDo/optional/led/scheduled_blocked","ToDo/optional/led/standby_blocked","ToDo/optional/led/stop_blocked","ToDo/optional/led/instant","ToDo/optional/led/pv","ToDo/optional/led/scheduled","ToDo/optional/led/standby","ToDo/optional/led/stop","openWB/optional/int_display/active","openWB/optional/int_display/standby","openWB/optional/int_display/rotation","openWB/optional/int_display/on_if_plugged_in","openWB/optional/int_display/pin_active","openWB/optional/int_display/pin_code","openWB/optional/int_display/theme","openWB/optional/int_display/only_local_charge_points","openWB/system/configurable/display_themes","openWB/optional/et/active","openWB/optional/et/config/provider","openWB/optional/et/config/max_price"],tempIdTagList:{}}},computed:{idTagList(){return Object.values(this.updateIdTagList())},displayThemeList(){return this.$store.state.mqtt["openWB/system/configurable/display_themes"]},displayThemeGroupList(){let t=[{label:"openWB",options:[]},{label:"Community",options:[]}];return this.displayThemeList.forEach(e=>{e.official===!0?t[0].options.push(e):t[1].options.push(e)}),t}},methods:{getIdFromTopic(t){return t.match(/(?:\/)([0-9]+)(?=\/)*/g)[0].replace(/[^0-9]+/g,"")},updateIdTagList(){return Object.entries(this.getWildcardTopics("^openWB/chargepoint/[^+/]+/[gs]et/rfid$",!0)).forEach(t=>{t[1]!==null&&(this.tempIdTagList[t[1]]=`${t[1]} (${t[0].includes("/set/")?"zugewiesen":"erfasst"} an ${this.getChargePointName(this.getIdFromTopic(t[0]))})`)}),this.tempIdTagList},getChargePointName(t){return this.$store.state.mqtt["openWB/chargepoint/"+t+"/config"]?this.$store.state.mqtt["openWB/chargepoint/"+t+"/config"].name:"Ladepunkt "+t},getDisplayThemeDefaults(t){const e=this.displayThemeList.find(y=>y.value==t);return Object.prototype.hasOwnProperty.call(e,"defaults")?{...JSON.parse(JSON.stringify(e.defaults))}:(console.warn("no default configuration found for display theme type!",t),{})},updateSelectedDisplayTheme(t){this.updateState("openWB/optional/int_display/theme",this.getDisplayThemeDefaults(t))},updateConfiguration(t,e){console.debug("updateConfiguration",t,e),this.updateState(t,e.value,e.object)}}},G={class:"optionalComponents"},K={name:"optionalComponentsForm"},Z={key:0},X={key:1},Y={key:0},Q=["innerHTML"],ee={key:0},te={key:1},ne={key:2},oe={key:0};function ie(t,e,y,w,c,m){const d=p("openwb-base-alert"),u=p("openwb-base-button-group-input"),g=p("openwb-base-textarea"),h=p("openwb-base-card"),B=p("openwb-base-heading"),D=p("openwb-base-range-input"),W=p("openwb-base-select-input"),k=p("openwb-display-theme-proxy"),$=p("openwb-base-submit-buttons");return s(),r("div",G,[l("form",K,[n(h,{title:"Identifikation"},{default:o(()=>[t.$store.state.mqtt["openWB/general/extern"]===!0?(s(),r("div",Z,[n(d,{subtype:"info"},{default:o(()=>e[10]||(e[10]=[i(' Weitere Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')])),_:1})])):(s(),r("div",X,[n(u,{title:"Identifikation aktivieren","model-value":t.$store.state.mqtt["openWB/optional/rfid/active"],buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}],"onUpdate:modelValue":e[0]||(e[0]=a=>t.updateState("openWB/optional/rfid/active",a))},{help:o(()=>e[11]||(e[11]=[i(" Die Identifikation kann zum Entsperren von Ladepunkten und/oder zur Zuordnung von Fahrzeugen genutzt werden und kann auf mehreren Wegen erfolgen: "),l("ul",null,[l("li",null," Über einen in der openWB verbauten RFID-Reader (optional, z.B. anhand des Lieferscheins prüfen). "),l("li",null," Durch die automatische Erkennung an einer openWB Pro (muss in den Einstellungen aktiviert werden). "),l("li",null," Durch manuelle Eingabe einer ID am Display einer openWB. ")],-1)])),_:1},8,["model-value"]),t.$store.state.mqtt["openWB/optional/rfid/active"]===!0?(s(),r("div",Y,[n(d,{subtype:"info",class:"mb-1"},{default:o(()=>[e[12]||(e[12]=i(" Die ID-Tags müssen in den Einstellungen der Fahrzeuge diesen zugeordnet werden.")),e[13]||(e[13]=l("br",null,null,-1)),e[14]||(e[14]=i(" Es kann zuerst das Fahrzeug angesteckt und dann der ID-Tag erfasst werden oder anders herum. Im letzten Fall muss innerhalb von 5 Minuten ein Fahrzeug angesteckt werden, sonst wird der ID-Tag verworfen.")),e[15]||(e[15]=l("br",null,null,-1)),l("span",{innerHTML:t.$store.state.text.rfidWiki},null,8,Q)]),_:1}),n(g,{title:"Erkannte ID-Tags",readonly:"",disabled:"","model-value":m.idTagList.join(`
`)},{help:o(()=>e[16]||(e[16]=[i(" Solange diese Seite geöffnet ist, werden alle erfassten ID-Tags in dieser Liste aufgeführt. ")])),_:1},8,["model-value"])])):_("",!0)]))]),_:1}),n(h,{title:"Display (intern oder extern)"},{default:o(()=>[n(u,{title:"Integriertes Display","model-value":t.$store.state.mqtt["openWB/optional/int_display/active"],buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"onUpdate:modelValue":e[1]||(e[1]=a=>t.updateState("openWB/optional/int_display/active",a))},{help:o(()=>e[17]||(e[17]=[i(' Je nach Bestellung kann die openWB mit oder ohne Display geliefert worden sein. Auch die Variante "Standalone" bietet beide Optionen. Bitte prüfe zuerst die Hardwareausstattung deiner openWB (z.B. Lieferschein). ')])),_:1},8,["model-value"]),t.$store.state.mqtt["openWB/optional/int_display/active"]==!0?(s(),r("div",ee,[n(u,{title:"Orientierung","model-value":t.$store.state.mqtt["openWB/optional/int_display/rotation"],buttons:[{buttonValue:0,text:"0°"},{buttonValue:90,text:"90°"},{buttonValue:180,text:"180°"},{buttonValue:270,text:"270°"}],"onUpdate:modelValue":e[2]||(e[2]=a=>t.updateState("openWB/optional/int_display/rotation",a))},{help:o(()=>e[18]||(e[18]=[i(" Mit dieser Einstellung kann das Display im Uhrzeigersinn gedreht werden, falls erforderlich. Nach einer Änderung ist ein Neustart erforderlich!"),l("br",null,null,-1),i(" Diese Einstellung erfordert ein Raspberry Pi Display. Für eine openWB series2 mit integriertem Display muss 0° ausgewählt werden, für eine Standalone mit Display 180°. Anzeigen, welche über HDMI angeschlossen sind, werden nicht unterstützt. ")])),_:1},8,["model-value"]),e[21]||(e[21]=l("hr",null,null,-1)),n(B,null,{default:o(()=>e[19]||(e[19]=[i(" Display Standby ")])),_:1}),n(D,{title:"Ausschaltzeit",min:0,max:12,step:1,"model-value":t.$store.state.mqtt["openWB/optional/int_display/standby"],unit:"Sek",labels:[{label:"Immer an",value:0},{label:5,value:5},{label:10,value:10},{label:15,value:15},{label:30,value:30},{label:45,value:45},{label:"1 Min",value:60},{label:"1,5 Min",value:90},{label:"2 Min",value:120},{label:"3 Min",value:180},{label:"4 Min",value:240},{label:"5 Min",value:300},{label:"10 Min",value:600}],"onUpdate:modelValue":e[3]||(e[3]=a=>t.updateState("openWB/optional/int_display/standby",a))},{help:o(()=>e[20]||(e[20]=[i(" Hier kann eine Zeitspanne angegeben werden, nach der das Display ausgeschaltet wird. ")])),_:1},8,["model-value"])])):_("",!0),t.$store.state.mqtt["openWB/general/extern"]===!0?(s(),r("div",te,[e[23]||(e[23]=l("hr",null,null,-1)),n(d,{subtype:"info"},{default:o(()=>e[22]||(e[22]=[i(' Weitere Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')])),_:1})])):(s(),r("div",ne,[e[26]||(e[26]=l("hr",null,null,-1)),n(u,{title:"Ladepunkte auf externen openWB","model-value":t.$store.state.mqtt["openWB/optional/int_display/only_local_charge_points"],buttons:[{buttonValue:!1,text:"Alle",class:"btn-outline-danger"},{buttonValue:!0,text:"Nur Lokale",class:"btn-outline-success"}],"onUpdate:modelValue":e[4]||(e[4]=a=>t.updateState("openWB/optional/int_display/only_local_charge_points",a))},{help:o(()=>e[24]||(e[24]=[i(" Hiermit kann festgelegt werden, ob an angebundenen externen openWB alle oder nur die jeweils lokalen Ladepunkte angezeigt werden sollen. ")])),_:1},8,["model-value"]),e[27]||(e[27]=l("hr",null,null,-1)),t.$store.state.mqtt["openWB/optional/int_display/theme"]!==void 0?(s(),r("div",oe,[n(W,{class:"mb-2",title:"Theme des Displays",groups:m.displayThemeGroupList,"model-value":t.$store.state.mqtt["openWB/optional/int_display/theme"].type,"onUpdate:modelValue":e[5]||(e[5]=a=>m.updateSelectedDisplayTheme(a))},{help:o(()=>e[25]||(e[25]=[i(" Hier können unterschiedliche Display-Anzeigen, s.g. Themes, ausgewählt werden. Die Anzahl der Themes wird sich mit zukünftigen Releases erhöhen. ")])),_:1},8,["groups","model-value"]),t.$store.state.mqtt["openWB/optional/int_display/theme"].type?(s(),f(k,{key:0,"display-theme":t.$store.state.mqtt["openWB/optional/int_display/theme"],"onUpdate:configuration":e[6]||(e[6]=a=>m.updateConfiguration("openWB/optional/int_display/theme",a))},null,8,["display-theme"])):_("",!0)])):_("",!0)]))]),_:1}),n($,{"form-name":"optionalComponentsForm",onSave:e[7]||(e[7]=a=>t.$emit("save")),onReset:e[8]||(e[8]=a=>t.$emit("reset")),onDefaults:e[9]||(e[9]=a=>t.$emit("defaults"))})])])}const ae=v(J,[["render",ie],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/OptionalComponents.vue"]]),de=Object.freeze(Object.defineProperty({__proto__:null,default:ae},Symbol.toStringTag,{value:"Module"}));export{T as D,de as O};
