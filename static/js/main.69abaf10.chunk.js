(this["webpackJsonp@meddbriefer/debriefer2"]=this["webpackJsonp@meddbriefer/debriefer2"]||[]).push([[0],{19:function(e,t,a){},28:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),s=a(21),o=a.n(s),r=(a(28),a(18),a(19),a(11)),c=a(12),l=a(8),d=a(3),h=a.n(d),u=a(15),p=a(2),b=n.a.createContext({enablePhase:void 0,currPhase:void 0,setCurrPhase:void 0,isCurrPhase:void 0,isEnabled:void 0,isCompleted:void 0,completePhase:void 0,stepData:void 0,next_links:void 0,prev_links:void 0});b.displayName="AppContext";var m=function(){return Object(i.useContext)(b)},j=a(0),f=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"table-container",children:[Object(j.jsx)("div",{className:"form-group shadow-textarea",children:Object(j.jsx)("textarea",{className:"form-control z-depth-1",id:"exampleFormControlTextarea6",rows:"3",placeholder:"Type something here..."})}),Object(j.jsx)("div",{className:"text-center col-md-12 mt-3 mb-2",children:Object(j.jsx)("button",{type:"button",style:{width:"100px"},className:h()("nav-btns"),children:"Submit"})})]})})},y=function(){return Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",fill:"currentColor",className:"bi bi-arrow-left-short",viewBox:"1 1 20 20",children:Object(j.jsx)("path",{fillRule:"evenodd",d:"M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"})})},g=function(){return Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",fill:"currentColor",className:"bi bi-arrow-right-short",viewBox:"1 1 20 20",children:Object(j.jsx)("path",{fillRule:"evenodd",d:"M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"})})};function v(e){var t=e.phase,a=Object(p.g)(),n=m(),s=n.setCurrPhase,o=n.enablePhase,r=n.completePhase,c=n.stepData,l=n.next_links,d=n.prev_links,u=c.find((function(e){return e.step===t}));return Object(i.useEffect)((function(){s(t)})),Object(i.useEffect)((function(){o(t),r(t)}),[t]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:u.title.charAt(0)}),u.title.substring(1,u.length)]}),Object(j.jsx)("div",{className:"card",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-title",children:Object(j.jsx)("b",{children:u.subtitle})}),Object(j.jsx)("p",{className:"card-text",children:u.description}),Object(j.jsxs)("ol",{children:["E"===t&&u.substeps.map((function(e){return Object(j.jsx)("li",{children:e},e)})),"F"===t&&Object(j.jsx)(f,{})]})]})}),Object(j.jsxs)("div",{className:"arrows",children:[Object(j.jsxs)("button",{onClick:function(){a.push(d[t])},className:h()({"btn-disabled":"D"===t},"nav-btns"),children:[Object(j.jsx)(y,{}),"PREV"]}),Object(j.jsxs)("button",{onClick:function(){a.push(l[t])},className:h()({"btn-disabled":"F"===t},"nav-btns"),children:["NEXT",Object(j.jsx)(g,{})]})]})]})}var O=function(e){var t=e.jsonData,a=e.title,i=e.subtitle,n=e.body,s=e.show,o=void 0!==s&&s,r=m().stepData[3].slideshowData;return Object(j.jsxs)("div",{className:h()("slide",!o&&"hidden"),children:["slideshow"==t&&Object(j.jsx)("h5",{id:"slideTitle",className:h()("card-title","pageCount"),children:Object(j.jsxs)("b",{children:[a+1," of ",Object.keys(r).length]})}),Object(j.jsx)("h5",{className:h()("card-title"),children:i}),"slideshow"==t&&Object(j.jsx)("p",{id:"slideText",className:"card-text",children:n}),"benchmark"==t&&Object(j.jsx)("div",{id:"slideText",className:"card-text",children:Object(j.jsx)("ol",{children:n.map((function(e,t){return Object(j.jsx)("li",{children:e},t)}))})})]})};var x=function(e){var t=Object(p.g)(),a=Object(i.useState)(0),n=Object(l.a)(a,2),s=n[0],o=n[1],r=m(),c=r.setCurrPhase,d=r.enablePhase,u=r.completePhase,b=r.stepData;Object(i.useEffect)((function(){c("R"),d("R")}),[]);var f=b[3].slideshowData;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"R"}),"eview what was supposed to happen:"]}),Object(j.jsx)("div",{id:"slideshowCard",className:"card",children:Object(j.jsx)("div",{className:"float-container",children:Object(j.jsx)("div",{className:"card-body, slides, float-child",children:f.map((function(e,t){return Object(j.jsx)(O,{jsonData:"slideshow",title:t,body:e.body,show:t===s},t)}))})})}),Object(j.jsxs)("div",{className:"arrows",children:[Object(j.jsxs)("button",{onClick:function(){0===s?t.push("/benchmarks"):o(s-1)},className:h()("nav-btns"),children:[Object(j.jsx)(y,{}),"PREV"]}),Object(j.jsxs)("button",{onClick:function(){s===f.length-1?t.push("/identifyAndExamine"):(o(s+1),s===f.length-2&&u("R"))},className:h()("nav-btns"),children:["NEXT",Object(j.jsx)(g,{})]})]})]})},w=a(23),k=[],N=0;function E(e){var t=Object(p.g)(),a=m().stepData[2].benchmarkInfo;a.map((function(e,t){return k[t]=!1}));var n=Object(i.useState)(0),s=Object(l.a)(n,2),o=s[0],r=s[1];function c(e){return o>N&&(N=o),(e==o||e<=N)&&(k[e]=!0),k[e]}Object(i.useEffect)((function(){u("R")}),[]);var d=m(),u=d.setCurrPhase,b=d.enablePhase,f=d.completePhase;return Object(i.useEffect)((function(){u("B"),b("B")}),[]),k[0]=!0,Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("p",{children:["Performance ",Object(j.jsx)("b",{children:"B"}),"enchmarks:"]}),Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"card-group",children:[Object(j.jsx)("div",{className:"card",children:Object(j.jsx)("div",{className:"card-block",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("div",{className:"card-title",children:"Below are management actions you were supposed to perform in this scenario:"}),Object(j.jsx)("div",{className:"card-text",children:Object(j.jsx)("ol",{children:a.map((function(e,t){return Object(j.jsx)("li",{className:h()({disabled:!c(t)}),onClick:function(){return e=t,o>N&&(Object(w.a)("curSlide"),o=e),void r(e);var e},style:{color:"black"},children:Object(j.jsx)("u",{id:t,className:h()("pointer",{disabled:!c(t)}),children:e.action})},t)}))})})]})})}),Object(j.jsx)("div",{id:"slideshowCard",className:"card",style:{flexGrow:"2"},children:Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"card-body, slides, float-child",children:a.map((function(e,t){return Object(j.jsx)(O,{jsonData:"benchmark",title:t,subtitle:e.action,body:e.management,show:t===o},t)}))})})})]})}),Object(j.jsxs)("div",{className:"arrows",children:[Object(j.jsxs)("button",{onClick:function(){0===o?t.push("/explain"):r(o-1)},className:h()("nav-btns"),children:[Object(j.jsx)(y,{}),"PREV"]}),Object(j.jsxs)("button",{onClick:function(){o===a.length-1?t.push("/review"):(r(o+1),o===a.length-2&&f("B"));for(var e=0;e<k.length;e++)e==o&&(k[o+1]=!0)},className:h()("nav-btns"),children:["NEXT",Object(j.jsx)(g,{})]})]})]})}var P=function(e){var t=e.phase,a=e.linkTo,i=Object(p.g)(),n=m(),s=n.isCurrPhase,o=n.isEnabled;return Object(j.jsx)("li",{className:h()("phaseTabs",{}),children:Object(j.jsx)("button",{className:h()("btn","btn-primary",{"btn-disabled":!o(t),currPhase:s(t)}),onClick:function(){i.push(a)},children:t})})},C=function(e){var t=e.phase,a=(e.nextPhase,Object(p.g)()),n=m(),s=n.setCurrPhase,o=n.enablePhase,r=n.completePhase;n.stepData;return Object(i.useEffect)((function(){s(t),o(t),r(t)}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"I"}),"dentify and ",Object(j.jsx)("b",{children:"E"}),"xplain:"]}),Object(j.jsx)("div",{className:"table-container",children:Object(j.jsx)("div",{id:"slideshowCard",className:"card",children:Object(j.jsx)("div",{className:"float-container",children:Object(j.jsx)("div",{className:"card-body, slides, float-child",children:Object(j.jsxs)("div",{className:h()("slide"),children:[Object(j.jsx)("h5",{id:"slideTitle",className:h()("card-title"),children:"Needs implemented"}),Object(j.jsx)("p",{id:"slideText",className:"card-text",children:"Needs implemented"})]})})})})}),Object(j.jsxs)("div",{className:"arrows",children:[Object(j.jsxs)("button",{onClick:function(){a.push("/review")},className:h()("nav-btns"),children:[Object(j.jsx)(y,{}),"PREV"]}),Object(j.jsxs)("button",{onClick:function(){a.push("/formalize")},className:h()("nav-btns"),children:["NEXT",Object(j.jsx)(g,{})]})]})]})},T=[{step:"D",title:"Define rules:",description:"The purpose of this debrief is to help you reflect on the scenario you have just completed in order to help you improve your skills as a paramedic. This debrief will recount the actions you performed, as well as the actions indicated based on the case scenario, and will help you explore areas of discordance. The contents of this debrief are designed to identify areas for improvement and are not designed to assess your abilities as a paramedic."},{step:"E",title:"Explain the learning objectives:",description:"This scenario was designed to give you practice with identifying and managing",substeps:["A patient with life-threatening bleeding","A patient at risk for a cervical injury","A patient who requires a definitive airway and ventilation support","A patient with hemorrhagic shock"]},{step:"B",title:"Benchmarks for performance:",description:"Needs implemented",benchmarkInfo:[{num:"0",action:"Stopped life-threatening bleeding",management:["Immediately recognized the need to manage severe bleeding--i.e., when first encountering the patient, during the scene size-up","Immediately applied a tourniquet to the patients right leg, before doing all other actions included in the Primary Survey","Applied the tourniquet as far proximally to the wound as possible","Confirmed that your treatment worked i.e., by checking that bleeding stopped and pulses were absent"]},{num:"1",action:"Stabilized a potential cervical injury",management:["Immediately directed a team member to take manual c-spine stabilization: that is, during the scene size-up","Escalated c-spine stabilization during the Secondary Survey, after assessing the neck, by applying an appropriately sized cervical collar","Fully immobilized the patient prior to transport, by log-rolling the patient onto a backboard while continuing to stabilize the spine and attaching at least three straps, the CID pad, both head blocks, and CID straps"]},{num:"2",action:"Provided a definitive airway and supported ventilation",management:["Opened the airway with a jaw-thrust maneuver, during the Primary Survey","Provided bag-valve mask ventilation with 15 LPM O2 attached","Provided a definitive airway during transport, while continuing to assess and manage the patient:"]},{num:"3",action:"Managed hemorrhagic shock",management:["Kept the patient warm by covering him with a blanket, as soon as shock was detected, during the Primary Survey","Administered supplemental O2","Established two large-bore IVs and bolus NS fluids to a goal BP systolic 90, as soon as possible during transport"]}]},{step:"R",title:"Review what was supposed to happen:",description:"Needs implemented",slideshowData:[{num:"0",title:"SCENE SIZE-UP",body:"In an ideal scenario, you and your partner arrive on scene and find an adult male seriously injured in a lawn mower rollover accident. A bystander is holding a towel to the man\u2019s right lower leg, but this has not \u201cstopped the bleed\u201d.",comments:[{text:"manual c-spine mobilization",feedback:"The MOI is consistent with spinal injury: the man was thrown from a height (BLS: 602)"},{text:"apply a tourniquet",feedback:"Application of a tourniquet may be the best initial option to control severe extremity bleeding\u2026Especially when a patient has signs of hypovolemic shock...or when bleeding is profuse. (BLS-601)"}]},{num:"1",title:"PRIMARY SURVEY",body:"You immediately direct your partner to provide manual c-spine mobilization while you apply a tourniquet to the patient\u2019s right lower leg to stop this life-threatening hemorrhage. You provide BVM ventilation, and ultimately perform a sedated intubation to secure this patient\u2019s airway. Your goal at this point is to get this critical patient to a Level 1 or 2 trauma center as quickly and safely as possible.",comments:[]},{num:"2",title:"SECONDARY SURVEY",body:"You direct your partner to take vitals while you perform a rapid head-to-toe assessment. After applying a cervical collar, you and your partner log roll the patient onto a long board. You cover the patient with blankets. While you retrieve and pack the patient\u2019s amputated foot on ice, your partner fully immobilizes him.",comments:[]},{num:"3",title:"TRANSFER AND TRANSPORT",body:"You and your partner transfer the patient onto a stretcher and into the ambulance. Your partner turns up the heat and drives to the nearest Level 2 trauma center, 25 min. away.",comments:[]},{num:"4",title:"ONGOING ASSESSMENT AND MANAGEMENT",body:"You contact the receiving facility, alerting them to the patient\u2019s condition and your ETA. While en route, you establish two large bore IV\u2019s; reassess the patient frequently; confirm that all interventions are still working properly, modifying as necessary; and dress as many wounds as time allows.",comments:[]}]},{step:"I",title:"Identify what happened & Examine why:",description:"Needs implemented",tableData:{table0:[{step:"Identify life-threatening bleeding during your primary survey",feedback:"The following should alert you to possible life-threatening blood loss early on in your assessment:<ul><li>Mechanism of injury, a lawn-mower accident, provided by dispatch (scene size up)</li> <li>A bystander holding a blood-soaked towel to the patient\u2019s right leg (primary survey), which was ultimately found to be related to a partial amputation</li></ul>"},{step:"Apply a tourniquet during the primary survey",feedback:"The patient had a partial amputation and was losing a large amount of blood. This is a threat to life and should be acted on during the primary survey. You could instruct a colleague to apply the tourniquet while you continue on with your primary survey."},{step:"Apply a tourniquet as far proximally as possible",feedback:"The correct placement of a tourniquet is as far proximal as possible. If you simply applied direct pressure, this would not have adequately stopped the bleeding so you would need to escalate care."},{step:"Confirm that bleeding has stopped",feedback:"After placement of a tourniquet, you must confirm that the bleeding as stopped. If bleeding has not stopped, you would want to apply a second tourniquet."},{step:"Confirm that pulses are absent",feedback:"After placement of a tourniquet, you must confirm that pulses are absent. If pulses are still palpable, you would want to apply a second tourniquet."},{step:"All correct",feedback:"During the primary survey, you correctly identified that this patient had a life-threatening partial amputation and placed a tourniquet on the proximal right leg to stop the bleeding."}],table1:[{step:"Identify that this patient is at risk for a cervical spine injury during your scene size-up",feedback:"This is a trauma case, so you must presume cervical spine injury until proven otherwise."},{step:"Direct a team member to take manual c-spine stabilization during scene size-up",feedback:"If this patient has a cervical spine injury, any movement during your primary assessment can cause harm to the patient. Because this is a trauma patient, you should stabilize the C-spine before starting your ABCs."},{step:"Applies an appropriately sized cervical collar after assessing the neck during the secondary assessment",feedback:"This action was performed incorrectly."},{step:"Log-rolls the patient onto a backboard, while continuing to stabilize the spine",feedback:"With any movement of the patient, be sure that someone is continuing to control the cervical spine, even if the patient is already in a collar. This includes during inspection of the patient\u2019s back as well as when trying to move the patient for transport."},{step:"Fully immobilizes the patient with at least three straps, the CID pad, both heads blocks, and with CID straps",feedback:"Be sure that the patient is adequately secured before attempting to move the patient on a backboard."},{step:"All correct",feedback:"During the scene survey, you recognized that this trauma patient\u2019s cervical spine needed to be immobilized immediately. You continued to maintain cervical stabilization through the rest of your assessment and whenever you moved the patient."}],table2:[{step:"Identify that this patient requires intubation during the primary survey",feedback:"On initial assessment, the patient has a respiratory rate of 38 with shallow effort and a pulse ox of 78%. Your first actions should include opening the airways and administering O2 via bag-valve mask. However, despite this, your patient still ***insert our push to intubate**. Paired with his GCS of 8 and declining mental status, this is a patient who needs to be intubated."},{step:"Opens the airway via jaw-thrust instead of head-tilt",feedback:"To adequately ventilate this patient you will need to open the airway. This can be accomplished via jaw-thrust or head tilt, but this is a trauma patient and the cervical spine should be maintained throughout your assessment. A head-tilt could cause injury to your patient\u2019s spine."},{step:"Provides bag-valve mask ventilation with 15LPM O2 attached",feedback:"On initial assessment, the patient has a respiratory rate of 38 with shallow effort and a pulse ox of 78%. Your first actions should include opening the airways and administering O2 via bag-valve mask. Recall that your BVM should always be attached to 15LPM O2 as you are trying to both ventilate and oxygenate this patient. As you do this, you should be evaluating for any clinical changes. A lack of improvement suggests you need to make an adjustment: consider if you need an OP/NP airway, if you need a better seal, or if you may need to intubate your patient."},{step:"Administers etomidate and places an ET tube",feedback:"This patient has inadequate respiratory effort and a GCS of 8 and declining despite efforts to non-invasively administer O2. This patient needs intubation."},{step:"Confirms placement of the ET tube by visually inspecting tube placement, listening to bilateral lungs, CO2 capnography, and reevaluating vital signs. ",feedback:"Once you have placed an ET tube, you must confirm that it is in the correct place (ie not in the esophagus or mainstem bronchus). You should check this by visually inspecting the location of the tube, listening to both lungs (you should hear air movement bilaterally), checking CO2 capnography (levels between 35-45 suggest successful intubation) **check these numbers**, and rechecking the patient\u2019s vitals (you should see improvement in their SpO2 and potentially also their HR and BP)."},{step:"Oxygenate to SpO2 95-99%",feedback:"Your goal is to oxygenate your patient without over-oxygenating your patient. With a BVM, your patient\u2019s O2 was not above 90%. Once you intubate your patient, you should titrate O2 to an SpO2 of 95-99%. Over-oxygenation can be harmful, so if you\u2019re seeing 100%s, try to dial back on the O2."},{step:"All correct",feedback:"You correctly identified that this patient did not have adequate ventilation or oxygenation. If you attempted to bag this patient, you will have noticed that his SpO2 did not improve adequately. This, along with his GCS score of 8, were suggestive of the need to intubate this patient. Etomidate should have been given and an ET tube placed. Once the tube was placed and you confirmed correct placement on exam and by CO2 capnography, the patient\u2019s vital signs would improve, allowing you to titrate O2 flow to maintain SpO2 of 95-99%. "}],table3:[{step:"Identify that this patient is in hemorrhagic shock during the scene size up or primary survey",feedback:"On arrival, the patient has an apparent source of blood loss (partial amputation), which should prompt you to think of hemorrhagic shock immediately. His blood pressure is 80/palpable, so the most likely cause of his hypotension is hemorrhagic shock."},{step:"Place two large-bore IVs and bolus NS fluids as quickly as possible to a goal BP systolic 90",feedback:"The patient is in hemorrhagic shock. While your ultimate goal is to get the patient to definitive management of his bleeding (ie. the OR), supportive the patient\u2019s blood pressure with IV fluids is critical. Administer boluses to a systolic BP of 90. Further fluid resuscitation beyond this can lead to fluid overload without significant benefit to the patient."},{step:"Keep the patient warm and in a supine position and administer O2",feedback:"The patient is in hemorrhagic shock. While addressing the source of bleeding and starting IV fluids are critical, you should also keep the patient warm, place him in a supine position, and administer O2. These maneuvers are to help optimize oxygenation."},{step:"All correct",feedback:"You quickly recognized that this patient was in hemorrhagic shock. You appropriately started IV fluids to a goal systolic of 90 and optimized oxygenation by keeping the patient supine, warming him, and administering O2."}]}},{step:"F",title:"Formalize learning:",subtitle:"Please take a few minutes to think about and reply to these questions:",description:"What is your key take-home point from this case? What is something you want to continue working on or do differently in the future?"}],A={D:!1,E:!1,B:!1,R:!1,IE:!1,F:!1},I={D:!1,E:!1,B:!1,R:!1,IE:!1,F:!1},S={D:"/explain",E:"/benchmarks",B:"/review",R:"/identifyAndExamine",IE:"/formalize",F:"/formalize"},D={D:"/define",E:"/define",B:"/explain",R:"/benchmarks",IE:"/review",F:"/identifyAndExamine"},z=function(){var e=Object(i.useState)(null),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(i.useState)(A),o=Object(l.a)(s,2),d=o[0],h=o[1],m=Object(i.useState)(I),f=Object(l.a)(m,2),y=f[0],g=f[1];function O(e){h((function(t){return Object(c.a)(Object(c.a)({},t),{},Object(r.a)({},e,!0))}))}return Object(i.useEffect)((function(){O("D"),n("D")}),[]),Object(j.jsx)(u.a,{children:Object(j.jsx)(b.Provider,{value:{enablePhase:O,currPhase:a,setCurrPhase:n,isCurrPhase:function(e){return a===e},isEnabled:function(e){return d[e]},isCompleted:function(e){return y[e]},completePhase:function(e){g((function(t){return Object(c.a)(Object(c.a)({},t),{},Object(r.a)({},e,!0))}))},stepData:T,next_links:S,prev_links:D},children:Object(j.jsxs)("div",{className:"outline-container",children:[Object(j.jsx)("nav",{children:Object(j.jsx)("div",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)(P,{phase:"D",linkTo:"/define"}),Object(j.jsx)(P,{phase:"E",linkTo:"/explain"}),Object(j.jsx)(P,{phase:"B",linkTo:"/benchmarks"}),Object(j.jsx)(P,{phase:"R",linkTo:"/review"}),Object(j.jsx)(P,{phase:"IE",linkTo:"/identifyAndExamine"}),Object(j.jsx)(P,{phase:"F",linkTo:"/formalize"})]})})}),Object(j.jsxs)(p.d,{children:[Object(j.jsx)(p.b,{exact:!0,path:"/",render:function(){return Object(j.jsx)(p.a,{to:"/define"})}}),Object(j.jsx)(p.b,{path:"/define",children:Object(j.jsx)(v,{phase:"D",nextPhase:"E"})}),Object(j.jsx)(p.b,{path:"/explain",children:Object(j.jsx)(v,{phase:"E",nextPhase:"B"})}),Object(j.jsx)(p.b,{path:"/benchmarks",children:Object(j.jsx)(E,{phase:"B",nextPhase:"R"})}),Object(j.jsx)(p.b,{path:"/review",children:Object(j.jsx)(x,{nextPhase:"IE"})}),Object(j.jsx)(p.b,{path:"/identifyAndExamine",children:Object(j.jsx)(C,{phase:"IE",nextPhase:"F"})}),Object(j.jsx)(p.b,{path:"/formalize",children:Object(j.jsx)(v,{phase:"F"})})]})]})})})},R=function(e){return Object(j.jsxs)("div",{className:"outline-container",children:[Object(j.jsx)("p",{children:"Self Debrief"}),Object(j.jsx)("p",{children:"Click the buttons below to navigate through the debrief."}),Object(j.jsx)(z,{})]})},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,36)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),i(e),n(e),s(e),o(e)}))};o.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(R,{})}),document.getElementById("root")),B()}},[[35,1,2]]]);
//# sourceMappingURL=main.69abaf10.chunk.js.map