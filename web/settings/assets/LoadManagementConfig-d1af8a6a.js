import{l as z,K as S,J as C,F as L}from"./vendor-fortawesome-df3fe782.js";import{C as $}from"./index-e65a2c93.js";import{S as x}from"./OpenwbSortableList-4393a9f5.js";import{_ as V,p as u,k as l,l as m,q as d,A as s,L as r,u as o,G as _,I as v,y as w,x as k,z as M}from"./vendor-94ac8c48.js";import"./vendor-bootstrap-9f620114.js";import"./vendor-jquery-f7104ff8.js";import"./vendor-axios-dc63434e.js";import"./vendor-sortablejs-dbc23470.js";z.add(S,C);const q={name:"OpenwbLoadManagementConfig",mixins:[$],emits:["sendCommand"],components:{SortableList:x,FontAwesomeIcon:L},data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/counter/config/reserve_for_not_charging","openWB/counter/get/hierarchy","openWB/system/device/+/component/+/config","openWB/counter/+/config/max_currents","openWB/counter/+/config/max_total_power","openWB/pv/+/config/max_ac_out","openWB/chargepoint/+/config"]}},computed:{counterConfigs:{get(){let e=this.getWildcardTopics("openWB/system/device/+/component/+/config");return Object.keys(e).filter(t=>e[t].type.includes("counter")).reduce((t,i)=>({...t,[i]:e[i]}),{})}},inverterConfigs:{get(){let e=this.getWildcardTopics("openWB/system/device/+/component/+/config");return Object.keys(e).filter(t=>e[t].type.includes("inverter")).reduce((t,i)=>({...t,[i]:e[i]}),{})}},hierarchyLabels:{get(){let e={};for(const t of Object.values(this.$store.state.mqtt["openWB/counter/get/hierarchy"]))e={...e,...this.getElementTreeNames(t)};return e}}},methods:{getElementTreeNames(e){let t={};if(e.type=="cp"){let i=this.getChargePoint(e.id);i&&(t[e.id]=i.name)}else{let i=this.getComponent(e.id);i&&(t[e.id]=i.name)}return e.children.forEach(i=>{t={...t,...this.getElementTreeNames(i)}}),t},getComponent(e){let t;return Object.keys(this.$store.state.mqtt).forEach(i=>{i.match("^openWB/system/device/[0-9]+/component/"+e+"/config$")&&(t=this.$store.state.mqtt[i])}),t},getChargePoint(e){let t;return Object.keys(this.$store.state.mqtt).forEach(i=>{i.match("^openWB/chargepoint/"+e+"/config$")&&(t=this.$store.state.mqtt[i])}),t}}},F={class:"loadManagementConfig"},Z={name:"loadManagementConfigForm"},A={key:0},D={key:1},E=d("br",null,null,-1),U=d("br",null,null,-1),N=d("br",null,null,-1),P=d("br",null,null,-1),T=d("br",null,null,-1),O={key:0},j={key:1},R=d("br",null,null,-1),G=d("br",null,null,-1),K=d("br",null,null,-1);function H(e,t,i,I,J,g){const h=u("openwb-base-alert"),W=u("openwb-base-button-group-input"),f=u("openwb-base-heading"),b=u("font-awesome-icon"),c=u("openwb-base-number-input"),p=u("openwb-base-card"),B=u("sortable-list"),y=u("openwb-base-submit-buttons");return l(),m("div",F,[d("form",Z,[s(p,{title:"Einstellungen",collapsible:!0,collapsed:!1},{default:r(()=>[e.$store.state.mqtt["openWB/general/extern"]===!0?(l(),m("div",A,[s(h,{subtype:"info"},{default:r(()=>[o(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')]),_:1})])):(l(),m("div",D,[s(W,{title:"Nicht-ladende Fahrzeuge",buttons:[{buttonValue:!1,text:"nicht berücksichtigen",class:"btn-outline-danger"},{buttonValue:!0,text:"berücksichtigen",class:"btn-outline-success"}],"model-value":e.$store.state.mqtt["openWB/counter/config/reserve_for_not_charging"],"onUpdate:modelValue":t[0]||(t[0]=n=>e.updateState("openWB/counter/config/reserve_for_not_charging",n))},{help:r(()=>[o(" Wenn angesteckte Fahrzeuge, die nicht laden, im Lastmanagement berücksichtigt werden, wird für diese der Fahrzeug-Mindeststrom bei vorliegender Ladefreigabe reserviert. Dadurch können bei Eingreifen des Lastmanagements andere Fahrzeuge möglicherweise nur mit reduzierter Stromstärke laden und der reservierte Strom wird nicht genutzt."),E,o(" Wenn die Fahrzeuge wieder Leistung beziehen, z.B. um vorzuklimatisieren, nutzen sie den für sie reservierten Strom."),U,N,o(" Wenn angesteckte Fahrzeuge, die nicht laden, nicht im Lastmanagement berücksichtigt werden, wird für diese auch kein Strom bei vorliegender Ladefreigabe reserviert. Andere Fahrzeuge können dadurch mit höherer Stromstärke laden."),P,o(" Wenn die maximalen Lastmanagement-Grenzen fast erreicht sind und die Fahrzeuge wieder Leistung beziehen, z.B. um vorzuklimatisieren, kann es zu einer kurzzeitigen Überschreitung der Lastmanagement-Grenzen kommen, bis im nächsten Zyklus die Stromstärken ALLER Ladepunkte an die neue Situation angepasst wurden."),T,o(" Das kurzzeitige Überschreiten der Maximal-Werte stellt für die Sicherungen in der Regel kein Problem dar. ")]),_:1},8,["model-value"]),s(f,null,{default:r(()=>[o(" Vorhandene Zählermodule ")]),_:1}),s(h,{subtype:"info"},{default:r(()=>[o(" Die maximale Leistung wird nur für den EVU-Zähler berücksichtigt. Bei Zwischenzählern begrenzt das Lastmanagement rein anhand der maximalen Phasenströme. ")]),_:1}),(l(!0),m(_,null,v(g.counterConfigs,n=>(l(),w(p,{key:n.id,collapsible:!0,collapsed:!0,subtype:"danger"},{header:r(()=>[s(b,{"fixed-width":"",icon:["fas","gauge-high"]}),o(" "+k(n.name),1)]),default:r(()=>[s(c,{title:"Maximale Leistung",min:1,step:1,unit:"kW","model-value":e.$store.state.mqtt["openWB/counter/"+n.id+"/config/max_total_power"]/1e3,"onUpdate:modelValue":a=>e.updateState("openWB/counter/"+n.id+"/config/max_total_power",a*1e3)},{help:r(()=>[o(" Maximal zulässige Leistung für diesen (Zwischen-)Zähler. ")]),_:2},1032,["model-value","onUpdate:modelValue"]),s(c,{title:"Maximaler Strom L1",min:16,step:1,unit:"A","model-value":e.$store.state.mqtt["openWB/counter/"+n.id+"/config/max_currents"][0],"onUpdate:modelValue":a=>e.updateState("openWB/counter/"+n.id+"/config/max_currents",a,"0")},{help:r(()=>[o(" Maximal zulässiger Strom für die Phase 1 dieses (Zwischen-)Zählers. ")]),_:2},1032,["model-value","onUpdate:modelValue"]),s(c,{title:"Maximaler Strom L2",min:16,step:1,unit:"A","model-value":e.$store.state.mqtt["openWB/counter/"+n.id+"/config/max_currents"][1],"onUpdate:modelValue":a=>e.updateState("openWB/counter/"+n.id+"/config/max_currents",a,"1")},{help:r(()=>[o(" Maximal zulässiger Strom für die Phase 2 dieses (Zwischen-)Zählers. ")]),_:2},1032,["model-value","onUpdate:modelValue"]),s(c,{title:"Maximaler Strom L3",min:16,step:1,unit:"A","model-value":e.$store.state.mqtt["openWB/counter/"+n.id+"/config/max_currents"][2],"onUpdate:modelValue":a=>e.updateState("openWB/counter/"+n.id+"/config/max_currents",a,"2")},{help:r(()=>[o(" Maximal zulässiger Strom für die Phase 3 dieses (Zwischen-)Zählers. ")]),_:2},1032,["model-value","onUpdate:modelValue"])]),_:2},1024))),128)),s(f,null,{default:r(()=>[o(" Vorhandene Wechselrichtermodule ")]),_:1}),(l(!0),m(_,null,v(g.inverterConfigs,n=>(l(),w(p,{key:n.id,collapsible:!0,collapsed:!0,subtype:"success"},{header:r(()=>[s(b,{"fixed-width":"",icon:["fas","solar-panel"]}),o(" "+k(n.name),1)]),default:r(()=>[s(c,{title:"Maximale Ausgangsleistung des Wechselrichters",min:0,step:.1,unit:"kW","model-value":e.$store.state.mqtt["openWB/pv/"+n.id+"/config/max_ac_out"]/1e3,"onUpdate:modelValue":a=>e.updateState("openWB/pv/"+n.id+"/config/max_ac_out",a*1e3)},{help:r(()=>[o(" Relevant bei Hybrid-Systemen mit DC-Speicher. ")]),_:2},1032,["model-value","onUpdate:modelValue"])]),_:2},1024))),128))]))]),_:1}),s(p,{title:"Struktur",collapsible:!0,collapsed:!0},{default:r(()=>[e.$store.state.mqtt["openWB/general/extern"]===!0?(l(),m("div",O,[s(h,{subtype:"info"},{default:r(()=>[o(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')]),_:1})])):(l(),m("div",j,[M(" ToDo: Fix: nested lists bypass store commits! "),s(B,{title:"Anordnung der Komponenten","model-value":e.$store.state.mqtt["openWB/counter/get/hierarchy"],"onUpdate:modelValue":t[1]||(t[1]=n=>e.updateState("openWB/counter/get/hierarchy",n)),labels:g.hierarchyLabels},{help:r(()=>[o(" Durch die Anordnung der Komponenten werden Abhängigkeiten abgebildet."),R,o(" An erster Stelle muss eine Zählerkomponente stehen, die den Netzanschlusspunkt erfasst. Dafür kann auch ein virtueller Zähler genutzt werden."),G,o(" Die weiteren Komponenten müssen hierarchisch so angeordnet werden, wie sie auch physisch im Stromnetz angeschlossen werden."),K,o(" Bei DC-gekoppelten Speichern sind diese hinter dem zugehörigen Wechselrichter zu platzieren, damit die Abhängigkeit in der Regelung berücksichtigt werden kann. ")]),_:1},8,["model-value","labels"])]))]),_:1}),s(y,{formName:"loadManagementConfigForm",onSave:t[2]||(t[2]=n=>e.$emit("save")),onReset:t[3]||(t[3]=n=>e.$emit("reset")),onDefaults:t[4]||(t[4]=n=>e.$emit("defaults"))})])])}const re=V(q,[["render",H],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/LoadManagementConfig.vue"]]);export{re as default};
