window.ENVENG_W3L6 = {
  title: 'W3 L6 - Drinking Water Treatment Processes',
  tags: 'ENVENG 200 CIVIL 200 module 1 week 3 lecture 6 drinking water treatment coagulation flocculation sedimentation filtration slow sand rapid sand disinfection chlorine UV ozone distribution water safety plans NZDWS',
  blocks: [
    {type:'heading', text:'Lecture overview'},
    {type:'text', text:`**Course:** ENVENG 200 / CIVIL 200
**Module:** 1 - Water and Wastewater Treatment
**Week:** 3
**Lecture:** 6
**Title:** Drinking Water Treatment Processes
**Scope:** Whole lecture (slides 1-41 and the complete lecture captions).

This lecture follows wastewater treatment and introduces the conventional drinking-water train. Its central sequence is **coagulation → flocculation → sedimentation → filtration → disinfection**, followed by safe storage and distribution. Stormwater begins in Lecture 7 and is excluded.`},
    {type:'text', text:`### Learning objectives
By the end of the lecture, you should be able to:
• recognise the key drinking-water treatment steps
• explain the purpose and physical meaning of each step
• compare slow and rapid sand filtration
• compare chlorine, UV and ozone disinfection
• relate process selection to raw-water quality, regulation, scale, cost and resilience.`},

    {type:'heading', text:'1. Drinking-water standards'},
    {type:'text', text:`The lecture uses the **New Zealand Drinking Water Standards (NZDWS)** to illustrate **Maximum Acceptable Values (MAVs)** for microbial, chemical and physical parameters.

Example slide values:
• **E. coli:** less than 1 per 100 mL, described as no detectable presence
• **nitrate:** less than 11.3 mg/L
• **arsenic:** less than 0.01 mg/L
• **turbidity:** less than 5 NTU at the point of entry for effective disinfection.

**NTU** means nephelometric turbidity unit. Lower permissible concentrations generally reflect greater health risk or treatment sensitivity. Turbidity is especially important because particles can shield pathogens and interfere with disinfection.`},
    {type:'exam', text:`**LECTURER’S EXAM HINT**

**"Okay. And obviously I am not evil. So I'm not going to ask you to memorise like the values."**

**"So we want you guys to be able to use those standards and regulation document so that, you know, like oh what are the ones that are in place."**

What this means: do not memorise the numerical NZDWS examples. Know how to use a supplied standard to decide whether water complies and understand why microbial, chemical and turbidity limits matter.`},

    {type:'heading', text:'2. Storage, distribution and residual protection'},
    {type:'text', text:`Treatment is not complete when water leaves the plant. The system must preserve safety until water reaches the consumer.

• **Reservoirs and balance tanks** provide storage and continuous supply.
• A **pressurised distribution network** delivers adequate flow and reduces opportunities for contamination.
• A **chlorine residual** is chlorine remaining after initial treatment; it protects water as it travels through pipes.
• Design must prevent **backflow**, **dead zones** and loss of residual.

Physical meaning: a plant can produce safe water and still fail if the distribution system allows recontamination or microbial regrowth.`},

    {type:'heading', text:'3. Water Safety Plans and resilience'},
    {type:'text', text:`A **Water Safety Plan (WSP)** is the lecture's source-to-tap risk-management framework. The slide states that WSPs are mandatory for New Zealand drinking-water suppliers. A WSP:
• identifies hazards from the water source to the consumer
• defines control measures and monitoring
• supports continuous improvement and risk communication
• includes emergency planning.

Resilience measures include backup power, emergency chlorination, mobile water tanks and boil-water advisory procedures for disruptions such as earthquakes, floods or infrastructure failure.`},
    {type:'text', text:`**Engineering implication:** drinking-water engineering combines treatment-process design with risk management, monitoring, distribution reliability and emergency response.`},

    {type:'heading', text:'4. Drinking-water treatment objectives'},
    {type:'text', text:`The treatment system should:
• protect public health by removing or inactivating bacteria, viruses and protozoa
• comply with drinking-water standards
• remove chemical contaminants and particles
• improve taste, odour, colour and appearance
• provide a safe, reliable and acceptable supply.

Treatment is tailored to the source. Groundwater, rivers, reservoirs, lakes, streams and reused water have different pollutant profiles and therefore different treatment difficulty.`},

    {type:'heading', text:'5. Conventional treatment train'},
    {type:'image', src:'assets/lecture6-conventional-treatment.jpg', caption:'Lecture slide 13: conventional drinking-water treatment proceeds from coagulation to disinfection.'},
    {type:'text', text:`The five core steps are:
1. **Coagulation** - chemically destabilise fine charged particles.
2. **Flocculation** - gently mix so destabilised particles form larger flocs.
3. **Sedimentation** - allow dense flocs to settle by gravity.
4. **Filtration** - capture fine particles and some microorganisms that remain.
5. **Disinfection** - inactivate remaining pathogens.

Optional screening or pre-sedimentation may be added when raw water contains large debris or unusually high particulate loads, such as after flooding.`},

    {type:'heading', text:'6. Coagulation - destabilising colloids'},
    {type:'image', src:'assets/lecture6-coagulation.jpg', caption:'Lecture slide 16: rapid mixing distributes coagulant and neutralises particle charges so aggregation can begin.'},
    {type:'text', text:`**Coagulation** is rapid mixing of a chemical coagulant into water. Very small **colloidal particles** commonly carry similar surface charges, so they repel each other and remain suspended. Coagulant neutralises or destabilises these charges, allowing particles to approach and stick together.

Common lecture coagulants:
• aluminium sulphate (**alum**)
• ferric chloride.

Required dose depends on **turbidity, pH and alkalinity**. Rapid mixing matters because the chemical must contact as many particles as possible before the next stage.`},
    {type:'text', text:`**Physical meaning:** coagulation changes particle surface chemistry; it does not itself settle the particles. It makes later aggregation and settling possible.

**Caption correction:** “very chloride” means **ferric chloride**, “alarm” means **alum**, and “flux” means **flocs**.`},

    {type:'heading', text:'7. Flocculation - building settleable flocs'},
    {type:'image', src:'assets/lecture6-flocculation.jpg', caption:'Lecture slide 18: slow mixing lets destabilised particles collide and form larger, settleable flocs.'},
    {type:'text', text:`**Flocculation** is the agglomeration of destabilised particles into larger aggregates called **flocs**. It follows coagulation and uses slow mixing, typically for the slide's example duration of **20-40 minutes**.

Slow mixing promotes collisions without breaking the fragile flocs. The goal is to form particles large and dense enough to settle in the next unit.

**Coagulation vs flocculation**
• coagulation: chemical destabilisation + rapid mixing
• flocculation: physical aggregation + slow mixing.

**Common mistake:** using the two terms interchangeably. They are connected but perform different functions.`},

    {type:'heading', text:'8. Why colloids need help settling'},
    {type:'text', text:`Large particles such as sand and pebbles settle naturally, but very small colloids may remain suspended for years. The settling-velocity values on slide 19 are visual examples of this enormous difference. Coagulation-flocculation accelerates removal by converting tiny particles into much larger flocs.

Well-optimised chemical coagulation-flocculation can achieve the slide's **90-99% microbial reduction** by trapping pathogens in flocs. Alum and iron salts do **not** kill the microorganisms; removal is physical through sedimentation and filtration. Poorly managed sludge or filter backwash can release the captured pathogens again.`},
    {type:'exam', text:`**LECTURER’S EXAM HINT**

**"But you don't need to memorise them. So don't worry about that. Okay."**

Context: the example settling velocities for particles ranging from pebbles to colloids.

What this means: understand the trend—smaller colloids settle extremely slowly—and why coagulation-flocculation is needed. Do not memorise the listed velocities.`},

    {type:'heading', text:'9. Sedimentation - removing the flocs'},
    {type:'text', text:`**Sedimentation** allows the large, dense flocs to settle under gravity in rectangular or circular basins.

• Flow is kept sufficiently calm for settling.
• Settling rate depends on particle size and density.
• Sludge is collected from the bottom.
• Clarified water flows onward to filtration.

Sedimentation reduces turbidity and the solids loading applied to the filters. Large basins provide the time and low-disturbance conditions needed for a range of floc sizes to settle.`},

    {type:'heading', text:'10. Filtration - removing remaining fine particles'},
    {type:'text', text:`**Filtration** is a polishing step that removes particles escaping sedimentation. Water passes through media such as sand, anthracite, granular activated carbon (**GAC**) or membranes.

Filtration can remove fine solids, protozoa such as Giardia, bacteria and some organics, improving turbidity, microbial safety and taste. **Backwashing** reverses the water flow to release trapped material and restore filter capacity. Backwash water is contaminated and must be disinfected or safely managed.`},

    {type:'heading', text:'11. Slow sand filtration'},
    {type:'image', src:'assets/lecture6-slow-sand.jpg', caption:'Lecture slide 27: a slow sand filter relies on gravity, fine sand and a biologically active upper layer.'},
    {type:'text', text:`A **slow sand filter** uses a deep, unstratified sand bed. Its upper layer develops a biologically active film that traps particles and degrades organics.

Lecture characteristics:
• suitable for small-scale or rural systems
• very low filtration rate: **0.1-0.2 m³/(m²·h)**
• long contact time supports biological activity and pathogen removal
• may not require coagulation-flocculation pretreatment where source water is suitable
• cleaned by removing and replacing the upper few inches of sand
• needs a large surface area for a given flow.

Units: m³/(m²·h) is volume filtered per unit filter area per hour, equivalent to m/h.`},

    {type:'heading', text:'12. Rapid sand filtration'},
    {type:'image', src:'assets/lecture6-rapid-sand.jpg', caption:'Lecture slide 29: rapid gravity filters use layered media and frequent backwashing.'},
    {type:'text', text:`A **rapid sand filter** uses stratified layers such as gravel, sand and sometimes anthracite.

Lecture characteristics:
• common in large urban systems
• much higher filtration rate: **5-15 m³/(m²·h)**
• shorter contact time
• depends on prior coagulation, flocculation and sedimentation
• cleaned frequently by backwashing rather than regularly replacing media
• more complex, but produces a much greater flow per unit area.

**Reasonableness check:** the rapid-filter rate is tens to more than one hundred times the slow-filter rate. Its greater throughput explains both its urban suitability and its dependence on effective pretreatment.`},
    {type:'text', text:`### Slow vs rapid sand filters
**Slow sand:** lower rate, simpler bed, large area, biological surface layer, good for smaller systems, pretreatment may sometimes be omitted.

**Rapid sand:** higher rate, layered media, smaller area for the same flow, frequent backwashing, suited to large urban systems, pretreatment required.

**Common mistake:** assuming “rapid” means water is forced through so violently that the sand washes away. The bed and underdrain are designed to remain stable during normal filtration; deliberate backwashing is used for cleaning.`},

    {type:'heading', text:'13. Choosing a raw-water source'},
    {type:'text', text:`The in-class activity asked which source would need the least treatment. The key lesson was that clear-looking water is not automatically safest.

• Groundwater with low turbidity and no E. coli was preferred over turbid river water with frequent E. coli.
• A source with high nitrate was more difficult because nitrate removal may require biological treatment.
• Persistent chemicals and chlorinated solvents were more difficult than visible turbidity and occasional wildlife microbes.
• Treated wastewater could still require advanced treatment for trace pharmaceuticals.
• Salinity from seawater intrusion was costly and difficult to remove.

Engineering selection favours fewer contaminants, stable quality and the least treatment needed to meet standards.`},

    {type:'heading', text:'14. Disinfection - inactivating pathogens'},
    {type:'image', src:'assets/lecture6-disinfection.jpg', caption:'Lecture slide 31: chlorine, UV and ozone are the three main disinfection approaches discussed.'},
    {type:'text', text:`**Disinfection** is the final main treatment step. It inactivates pathogens remaining after particle removal.

The slide gives regulatory examples of:
• **4-log virus inactivation = 99.99%**
• **3-log Giardia inactivation = 99.9%**.

Disinfection performance depends on disinfectant type, contact time, temperature, pH, turbidity, organism type and particle aggregation. The lecture's resistance trend is bacteria easiest, then viruses, with protozoa such as Giardia hardest to control.`},
    {type:'exam', text:`**LECTURER’S EXAM HINT**

**"It's not like I'm gonna ask you to calculate anything about that."**

Context: interpreting the difference between the 3-log and 4-log disinfection targets.

What this means: know that 4-log means 99.99% and 3-log means 99.9%, and understand that the extra log can require substantially more treatment effort. No log-removal calculation method is required from this lecture.`},

    {type:'heading', text:'15. Comparing chlorine, UV and ozone'},
    {type:'text', text:`**Chlorine**
• widely used and usually preferred in the lecture framing
• leaves a residual that protects the distribution system
• performance depends on pH, contact time, temperature and water quality
• can form potentially harmful **disinfection by-products (DBPs)**, so dose must balance inactivation and by-product control.

**UV radiation**
• inactivates microorganisms without a chemical residual
• performance falls when turbidity or particles shield microbes
• may be combined with chlorine so the plant gains strong local inactivation plus residual distribution protection.

**Ozone**
• a strong oxidant and powerful disinfectant
• does not provide chlorine-like residual protection
• more complex and costly.

Other disinfectants named on the slide are chloramines and chlorine dioxide. Chloramines can provide a more stable secondary residual for long distribution systems.`},
    {type:'text', text:`**Caption correction:** “alternation” in the transcript means **ozonation**.

**Common mistake:** selecting a disinfectant only by killing strength. Distribution-system protection, turbidity, resistant organisms, DBPs, energy, complexity and cost all affect the decision.`},

    {type:'heading', text:'16. Full treatment train and process selection'},
    {type:'image', src:'assets/lecture6-treatment-train.jpg', caption:'Lecture slide 38: full source-to-tap sequence including treatment, storage and distribution.'},
    {type:'text', text:`A complete train typically includes:
1. optional screening and pre-sedimentation
2. coagulation
3. flocculation
4. sedimentation
5. filtration
6. disinfection
7. storage and distribution.

Engineers adjust the train for source-water turbidity, organics and pathogens; regulatory targets; capital and operating cost; population and scale; climate hazards; and resilience needs. More treatment is not automatically better if it adds cost without addressing a source-water risk.`},

    {type:'heading', text:'17. Engineering synthesis and common mistakes'},
    {type:'text', text:`**How the stages support one another**
• coagulation makes colloids able to join
• flocculation makes aggregates large enough to settle
• sedimentation lowers the solids load on filters
• filtration lowers turbidity and removes fine residual particles
• low turbidity improves UV and chemical disinfection
• residual disinfectant protects water after it leaves the plant.

**Common mistakes**
• swapping rapid coagulation mixing with slow flocculation mixing
• saying coagulants kill pathogens rather than help remove them physically
• assuming sedimentation or filtration alone guarantees potable water
• treating slow and rapid sand filters as identical except for name
• forgetting that rapid filters need pretreatment
• ignoring contaminated sludge and backwash streams
• memorising standard values or settling velocities despite explicit guidance
• choosing a process without considering distribution and residual protection.`},

    {type:'heading', text:'18. End-of-lecture summary'},
    {type:'text', text:`• Drinking-water treatment removes particles, microorganisms and chemical contaminants.
• The five key processes are coagulation, flocculation, sedimentation, filtration and disinfection.
• Coagulation destabilises charged colloids; flocculation grows settleable flocs.
• Sedimentation removes flocs; filtration removes remaining fine material.
• Slow and rapid sand filters differ in rate, scale, media arrangement, pretreatment and cleaning.
• Disinfection is essential; chlorine, UV and ozone have different strengths and limitations.
• Safe water must remain protected through storage and distribution.
• Process selection balances water quality, standards, scale, cost and risk.

**Scope check:** slide 41, the final summary slide, is included. The final source-selection activity and post-lecture clarification are included. No separate examples PDF or numerical worked example was supplied. Lecture 7 stormwater material is excluded.`},
    {type:'text', text:`Sources used: **Lecture 6 - Drinking Water Treatment Processes** slides (all 41 slides), the complete Lecture 6 caption transcript, and the mid-semester-test preparation captions. No external sources were used.`}
  ]
};

window.ENVENG_MODULE1_L6_KNOW_BLOCKS = [
  {type:'heading', text:'Lecture 6 - Drinking Water Treatment Processes'},
  {type:'text', text:`This focused revision section follows the mid-semester-test preparation caption. Its stated priority is to know the key drinking-water treatment steps and understand what is happening in each.`},

  {type:'heading', text:'Lecturer’s exam hints'},
  {type:'exam', text:`**LECTURER’S EXAM HINT**

**"Then regarding drinking water treatment, I want you guys to know what are the key treatment steps that we have related to drinking water treatment."**

**"And in our case these are the main ones coagulation flocculation, sedimentation, filtration and lastly disinfection."**

**"And for this I just want you to understand like kind of what is going on in each of those steps of the treatment."**

What this means: the five-stage sequence and the purpose of every stage are the central revision targets.`},
  {type:'exam', text:`**LECTURER’S EXAM HINT**

**"Okay. And obviously I am not evil. So I'm not going to ask you to memorise like the values."**

What this means: do not memorise NZDWS example numbers. Be able to read supplied standards and decide whether a result meets them.`},
  {type:'exam', text:`**LECTURER’S EXAM HINT**

**"But you don't need to memorise them. So don't worry about that. Okay."**

Context: example particle settling velocities.

What this means: learn the trend and its engineering consequence, not the numerical values.`},
  {type:'exam', text:`**LECTURER’S EXAM HINT**

**"It's not like I'm gonna ask you to calculate anything about that."**

Context: 3-log versus 4-log pathogen inactivation.

What this means: understand the percentages and why another log is operationally significant; do not practise log-reduction calculations for this lecture.`},
  {type:'exam', text:`**LECTURER’S EXAM HINT**

**"It differs depending on the type of things we are planning or not, but I didn't I don't expect you to remember the name of that idea."**

Context: a specific microorganism used as an example after class.

What this means: know the broad bacteria-virus-protozoa comparison; do not memorise incidental organism names from that discussion.`},

  {type:'heading', text:'The five steps you must know'},
  {type:'text', text:`1. **Coagulation:** add coagulant and mix rapidly to neutralise/destabilise colloidal charges.
2. **Flocculation:** mix slowly so destabilised particles collide and grow into settleable flocs.
3. **Sedimentation:** allow heavy flocs to settle; remove sludge and send clarified water onward.
4. **Filtration:** pass water through media to capture fine particles and microorganisms escaping sedimentation.
5. **Disinfection:** inactivate remaining pathogens before storage and distribution.

Memory chain: **destabilise → grow → settle → filter → inactivate**.`},

  {type:'heading', text:'Definitions to know'},
  {type:'text', text:`• **MAV:** Maximum Acceptable Value in a drinking-water standard.
• **Turbidity:** cloudiness caused by suspended particles, measured in NTU.
• **Colloid:** extremely small particle that remains suspended because settling is very slow and surface forces are important.
• **Coagulant:** chemical used to destabilise charged particles.
• **Floc:** aggregate of destabilised particles.
• **Sedimentation:** gravity separation of dense flocs.
• **Filtration:** removal through porous media or membranes.
• **Backwashing:** reverse-flow cleaning of a filter.
• **Disinfection:** inactivation of pathogens.
• **Residual:** disinfectant remaining to protect water after treatment.
• **DBP:** disinfection by-product formed when disinfectant reacts with water constituents.
• **WSP:** Water Safety Plan managing hazards from source to tap.`},

  {type:'heading', text:'Comparisons you need to understand'},
  {type:'text', text:`**Coagulation vs flocculation:** rapid chemical destabilisation versus slow physical aggregation.

**Slow vs rapid sand filtration:** slow is lower-rate, larger-area and biologically active; rapid is high-rate, layered, frequently backwashed and dependent on pretreatment.

**Chlorine vs UV vs ozone:** chlorine provides residual protection but may form DBPs; UV leaves no residual and needs clear water; ozone is powerful but complex, costly and leaves no chlorine-like residual.

**Drinking water vs wastewater:** drinking water must be safe for consumption and remain protected through distribution; wastewater effluent is treated for discharge or reuse under different quality requirements.`},

  {type:'heading', text:'Numbers to interpret, not memorise'},
  {type:'text', text:`• Slide examples: E. coli <1/100 mL, nitrate <11.3 mg/L, arsenic <0.01 mg/L and turbidity <5 NTU. Use supplied standards rather than memorising them.
• Slow sand filtration: 0.1-0.2 m³/(m²·h); rapid sand: 5-15 m³/(m²·h). Understand the scale difference and its design implications.
• 4-log virus inactivation = 99.99%; 3-log Giardia inactivation = 99.9%. Understand that one extra log means ten times lower survival, but the lecturer said no calculation will be asked from this comparison.

Lecture 6 introduces no numerical design equation or worked calculation. Module 1 calculations remain the solids, alkalinity and hardness methods covered elsewhere.`},

  {type:'heading', text:'Understand rather than memorise'},
  {type:'text', text:`Understand why:
• similarly charged colloids do not settle effectively
• rapid mixing suits coagulation but slow mixing suits flocculation
• successful upstream particle removal improves disinfection
• backwash and sludge require safe handling
• rapid sand filtration requires pretreatment
• chlorine residual protects a long distribution system
• clear-looking water may contain difficult dissolved chemicals
• source quality, regulation, scale, cost and resilience determine the treatment train.

Do not memorise standard values, example settling velocities or incidental microorganism names, and do not practise log-removal calculations for this lecture.`},

  {type:'heading', text:'Must-Know Checklist - Lecture 6'},
  {type:'text', text:`□ I can write the five core treatment steps in order.
□ I can explain what happens physically or chemically in every step.
□ I can distinguish coagulation from flocculation and explain their mixing conditions.
□ I can explain why colloids need coagulation-flocculation before settling.
□ I know coagulants help remove microbes physically; they do not disinfect.
□ I can explain sedimentation and the need to manage sludge.
□ I can compare slow and rapid sand filters, including pretreatment and cleaning.
□ I can explain why turbidity reduces disinfection performance.
□ I can compare chlorine, UV and ozone.
□ I can explain the importance of chlorine residual in distribution.
□ I understand the meaning of 3-log and 4-log targets without doing calculations.
□ I can explain how source-water quality changes process selection.
□ I know why storage, distribution, WSPs and emergency planning matter.
□ I know which lecture numbers and details the lecturer said not to memorise.
□ I know this lecture adds no numerical calculation method.`},
  {type:'text', text:`Lecture 6 sources: all 41 lecture slides, the full lecture captions and the mid-semester-test preparation captions. The final slide and in-class source-selection activity were checked; Lecture 7 content is excluded.`}
];
