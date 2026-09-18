window.ENVENG_W2L5 = {
  title: 'W2 L5 - Wastewater Treatment',
  tags: 'ENVENG 200 CIVIL 200 module 1 week 2 lecture 5 wastewater treatment preliminary primary secondary tertiary screening grit equalisation sedimentation activated sludge suspended growth attached growth trickling filter nutrients disinfection sludge',
  blocks: [
    {type:'heading', text:'Lecture overview'},
    {type:'text', text:`**Course:** ENVENG 200 / CIVIL 200
**Module:** 1 - Water and Wastewater Treatment
**Week:** 2
**Lecture:** 5
**Title:** Wastewater Treatment
**Scope:** Whole lecture (slides 1-38 and the complete lecture captions).

This lecture follows Lecture 4's wastewater sources and characteristics. It explains how a wastewater treatment plant progressively removes **large debris, grit, settleable solids, dissolved and colloidal organics, nutrients and pathogens**. Drinking-water treatment begins in Lecture 6 and is excluded.`},
    {type:'text', text:`### Learning objectives
By the end of the lecture, you should be able to:
• describe the main wastewater-treatment stages
• explain the purpose and common methods used in each stage
• connect physical, biological and chemical processes within a treatment train
• recognise when advanced treatment such as nutrient removal and disinfection is required.`},

    {type:'heading', text:'1. Why wastewater is treated'},
    {type:'text', text:`Wastewater treatment aims to:
• remove pollutants before discharge or reuse
• protect public health and natural ecosystems
• meet regulatory requirements such as New Zealand resource-consent conditions
• recover water, nutrients and energy where practical.

The required treatment train depends on the receiving environment and consent limits. A plant may stop after secondary treatment where nutrient removal is not required, whereas discharge to a sensitive lake or reuse application may require tertiary treatment.`},

    {type:'heading', text:'2. The complete treatment sequence'},
    {type:'image', src:'assets/lecture5-treatment-overview.jpg', caption:'Lecture slide 8: wastewater treatment combines physical/mechanical, biological and chemical processes.'},
    {type:'text', text:`1. **Preliminary treatment** - screens large debris, removes grit and may equalise flow.
2. **Primary treatment** - settles suspended solids by gravity.
3. **Secondary treatment** - microorganisms oxidise dissolved and colloidal organics; a secondary clarifier then separates biomass.
4. **Tertiary treatment** - polishes the effluent by removing remaining nutrients, solids and pathogens where stricter limits apply.
5. **Sludge handling** - stabilises, dewaters and disposes of or reuses the solids generated throughout the plant.

Physical meaning: each stage is matched to a different pollutant form. Large objects can be screened, dense particles can settle, dissolved biodegradable material needs microorganisms, and nutrients or pathogens may need specialised treatment.`},
    {type:'text', text:`**Common mistake:** treating the stages as five completely separate boxes. They interact. Secondary treatment is biological but still needs physical settling; nutrient removal may be installed alongside the biological units even though it is described as tertiary treatment.`},

    {type:'heading', text:'3. Preliminary treatment - screening'},
    {type:'text', text:`**Screening** removes large debris before it can clog or damage downstream equipment, especially pumps.

• **Bar screens** have larger openings and remove coarse objects.
• **Fine screens** have smaller openings and retain smaller material.
• Typical screenings include rags, plastics, wood and rubbish.

Collected screenings must be removed and disposed of separately. The engineering value is mainly equipment protection: replacing damaged pumps is much more costly than intercepting debris at the inlet.`},

    {type:'heading', text:'4. Preliminary treatment - grit removal'},
    {type:'text', text:`**Grit** is dense, mainly inorganic and inert material such as sand, gravel, cinders and other heavy solids. It is removed because it is abrasive, accumulates in pipelines and channels, increases deposits in clarifiers and can damage pumps and dewatering centrifuges.

Common systems:
• an **aerated grit chamber**, where controlled motion helps separate heavy grit from lighter organic matter
• a **vortex separator**, where swirling flow directs grit to the bottom.

The selected unit depends on space, energy use and budget. Removed grit is concentrated and washed to remove lighter organic material, reduce odour and meet disposal requirements.`},
    {type:'text', text:`**Caption correction:** the transcript repeatedly says “great/grid” and “pulmonary classifiers.” In context and on the slides, these mean **grit** and **primary clarifiers**.`},

    {type:'heading', text:'5. Preliminary treatment - equalisation basin'},
    {type:'image', src:'assets/lecture5-equalisation.jpg', caption:'Lecture slide 13: in-line and off-line equalisation configurations smooth variable inflow before downstream treatment.'},
    {type:'text', text:`An **equalisation basin** temporarily stores wastewater so that downstream units receive a steadier flow and pollutant strength. It is optional and especially useful where stormwater enters the wastewater system or where daily flows vary sharply, such as a morning shower peak.

• **In-line equalisation:** all flow passes through storage within the treatment line.
• **Off-line equalisation:** only excess flow is diverted through an overflow structure and later returned.

Benefits listed in the lecture include flow and waste-strength stability, improved biological treatment and clarifier performance, more reliable chemical dosing, dilution of toxic inputs, pH dampening and some incidental settling.`},
    {type:'text', text:`**Engineering implication:** equalisation does not make the pollutant mass disappear. It spreads a short, difficult peak over more time so downstream equipment is less likely to be overloaded.

**Common mistake:** calling equalisation compulsory. The lecturer describes it as optional; a plant needs enough land and storage volume for it.`},

    {type:'heading', text:'6. Primary treatment - sedimentation'},
    {type:'text', text:`**Primary sedimentation** removes suspended solids under gravity in a **primary clarifier**.

Process:
1. Flow slows in a large tank.
2. Heavier suspended particles settle as **primary sludge**.
3. Oil, fat and other floating matter rise and are skimmed off as **scum**.
4. Clarified water leaves from the upper part of the tank.

Lecture performance: about **60% of suspended solids (SS)** and **30-35% of BOD** are removed. Some BOD is removed because organic matter is carried within the settled solids, but dissolved organics remain for secondary treatment.`},
    {type:'text', text:`**Reasonableness check:** primary treatment should remove a larger percentage of suspended solids than BOD because its controlling mechanism is gravity settling, not biological oxidation.

**Common mistake:** assuming “clarified” means safe or fully treated. It only means much of the settleable material has been separated.`},

    {type:'heading', text:'7. Secondary treatment - biological removal'},
    {type:'text', text:`Secondary treatment targets **dissolved and colloidal organic matter** that could not be screened or settled. Aerobic microorganisms use this material as food, converting BOD into carbon dioxide and new **biomass** (microbial cells).

The two main process families are:
• **suspended growth** - microbes form flocs and remain suspended in the wastewater
• **attached growth** - microbes grow as a **biofilm** on a solid support.

A physical clarification step is still needed after biological treatment to separate the newly produced biomass from the treated water.`},

    {type:'heading', text:'8. Suspended growth - activated sludge'},
    {type:'image', src:'assets/lecture5-activated-sludge.jpg', caption:'Lecture slide 20: an activated-sludge aeration tank is followed by a secondary clarifier and sludge recycle.'},
    {type:'text', text:`**Activated sludge** is the lecture's suspended-growth example.

1. In the **aeration tank**, wastewater, return sludge and air are mixed. Air diffusers supply oxygen for aerobic microorganisms.
2. Microbes form suspended flocs and oxidise organic matter measured as BOD.
3. In the **secondary clarifier**, biological solids settle away from the treated effluent.
4. **Return activated sludge (RAS)** sends part of the settled biomass back to the aeration tank to maintain a useful microbial population.
5. **Waste activated sludge (WAS)** removes excess biomass from the system.

Lecture performance: activated sludge can remove about **85-95% of BOD and TSS**.`},
    {type:'text', text:`The microbial population must be balanced. Too little biomass gives insufficient treatment; too much biomass increases oxygen demand and creates operating problems. Aeration is essential but energy-intensive, so it is a major operating-cost focus.

**Common mistakes**
• confusing RAS with untreated incoming wastewater
• forgetting that WAS is deliberately removed to control biomass inventory
• thinking the secondary clarifier is another biological reactor; its main function is physical separation.`},

    {type:'heading', text:'9. Attached growth - trickling filters'},
    {type:'image', src:'assets/lecture5-trickling-filter.jpg', caption:'Lecture slide 23: wastewater trickles over high-surface-area media supporting an attached microbial biofilm.'},
    {type:'text', text:`A **trickling filter** is not a simple sieve. It is a biological reactor containing rocks or plastic media with a large surface area. Wastewater is distributed over the bed and trickles across a microbial **biofilm**. The microbes consume organic contaminants; detached excess biomass is removed later in a separation step.

Advantages:
• simple operation
• lower aeration-energy demand because oxygen reaches the exposed biofilm naturally.

Limitations:
• media can clog
• treatment efficiency may be lower
• performance and selection still depend on effluent requirements, wastewater type and cost.`},
    {type:'text', text:`### Suspended growth vs attached growth
**Suspended growth:** microbes float as flocs; activated sludge uses active aeration, gives high treatment efficiency and is common for domestic wastewater.

**Attached growth:** microbes adhere to media as a biofilm; trickling filters can use less energy and the lecture describes the biofilm as more robust for wastewater containing toxic compounds, including some industrial wastewater.

The key difference is **where the biomass grows**, not whether microbes are present.`},

    {type:'heading', text:'10. Tertiary treatment - when polishing is required'},
    {type:'text', text:`**Tertiary treatment** removes remaining nutrients, solids and pathogens after secondary treatment. It is especially important for:
• sensitive receiving waters with low dilution or mixing
• irrigation or industrial reuse
• strict consent limits, such as the slide's example nitrogen limit below 5 mg/L.

The lecturer calls tertiary treatment a **polishing step**. It can use biological, chemical and physical processes. Discharge location matters: nutrient inputs are more damaging in a poorly mixed lake than in a large, well-mixed receiving water.`},

    {type:'heading', text:'11. Nitrogen removal'},
    {type:'image', src:'assets/lecture5-nitrogen-removal.jpg', caption:'Lecture slide 29: nitrogen removal uses sequenced oxygen conditions and recirculation rather than one uniform tank.'},
    {type:'formula', text:`Nitrification (aerobic):
NH₄⁺ → NO₂⁻ → NO₃⁻

Denitrification (anoxic):
NO₃⁻ → N₂ gas

Where:
• NH₄⁺ = ammonium
• NO₂⁻ = nitrite
• NO₃⁻ = nitrate
• N₂ = nitrogen gas

These are process pathways, not calculation equations. Nitrification needs oxygen; denitrification needs an anoxic zone and a carbon source for microbial food and energy.`},
    {type:'text', text:`**Aerobic** means oxygen is present. In the lecture's simplified explanation, **anoxic** means very little dissolved oxygen rather than a fully oxygenated tank. Alternating aerobic and anoxic zones allows different microbial groups to complete the pathway to harmless nitrogen gas.

Purpose: reduce ammonia toxicity and the risk of **eutrophication** (nutrient enrichment that promotes excessive algal growth).`},
    {type:'exam', text:`**LECTURER’S EXAM HINT**

**"And because this is just a second class, it's not like I expect you to know all of the steps involved in the nitrification."**

**"But for you guys just to know like that, these are the kinds of units that we need when we think about nitrogen removal okay."**

What this means: know the overall purpose, the aerobic/anoxic sequence and the broad conversion from ammonium toward nitrogen gas. Do not memorise a detailed third-year biochemical pathway.`},

    {type:'heading', text:'12. Phosphorus removal'},
    {type:'text', text:`Phosphorus is often a **limiting nutrient** in freshwater, meaning its availability can control biological growth. Excess phosphorus can therefore drive eutrophication.

Two lecture methods:
• **Chemical precipitation:** add Al³⁺ or Fe³⁺ salts so soluble phosphate forms insoluble compounds that can be separated as solids.
• **Biological phosphorus removal:** **phosphorus-accumulating organisms (PAOs)** store large amounts of phosphorus; removing the phosphorus-rich biomass removes phosphorus from the water.

Although nutrient removal is called tertiary treatment, biological nutrient-removal tanks are often grouped with secondary biological units for practical process control.`},

    {type:'heading', text:'13. Disinfection'},
    {type:'image', src:'assets/lecture5-disinfection.jpg', caption:'Lecture slide 31: chlorination, UV and ozone are alternative pathogen-control methods with different trade-offs.'},
    {type:'text', text:`**Disinfection** inactivates pathogens before discharge or reuse, especially where people may contact or accidentally ingest the water.

• **Chlorination:** widely used and effective; leaves a disinfectant residual.
• **Ultraviolet (UV) disinfection:** damages microbial DNA without leaving a chemical residual, but uses energy. Water clarity matters because suspended particles can shield microorganisms from the light.
• **Ozonation:** ozone is a strong oxidant that damages microorganisms. It is powerful but complex and costly.

**Engineering implication:** effective solids removal upstream improves UV performance. Method selection depends on required pathogen removal, water quality, energy, complexity and budget.`},
    {type:'text', text:`**Caption correction:** the transcript says “alternation” in the list of disinfectants; the slide and later explanation show that the intended term is **ozonation**.`},

    {type:'heading', text:'14. Odour and aesthetic control'},
    {type:'text', text:`Hydrogen sulphide (**H₂S**) produces a rotten-egg smell. Anaerobic zones and sludge handling are important odour sources.

Controls include ventilation, odour scrubbers such as biofilters or activated carbon, pH control and aeration to avoid unwanted anaerobic conditions. Odour control matters for community and social acceptance even when smell alone is not the main health risk.`},

    {type:'heading', text:'15. Sludge handling and the whole plant'},
    {type:'image', src:'assets/lecture5-plant-layout.jpg', caption:'Lecture slide 36: the Māngere wastewater treatment plant illustrates liquid treatment alongside a substantial solids-handling train.'},
    {type:'text', text:`Every solids-removal step creates a residual stream. **Sludge handling** therefore forms a parallel treatment train and includes stabilisation, dewatering and safe disposal or reuse.

The lecture's Māngere plant example contains primary, secondary and tertiary treatment before discharge to the harbour. The receiving zone's mixing and currents affect the consent conditions. The large solids-handling area demonstrates that removing contaminants from water does not eliminate them; engineers must manage the concentrated residuals safely.`},

    {type:'heading', text:'16. Engineering synthesis and common mistakes'},
    {type:'text', text:`**How the train fits together**
• screens and grit units protect equipment
• equalisation protects process stability
• primary clarification removes settleable solids
• secondary biology removes dissolved/colloidal biodegradable organics
• secondary clarification separates biomass
• tertiary units meet nutrient and pathogen limits
• sludge handling manages the solids generated at several stages.

**Common mistakes**
• assuming every plant must include every tertiary unit
• confusing preliminary screening with primary sedimentation
• calling a trickling filter a purely physical filter
• reversing nitrification and denitrification oxygen conditions
• treating anoxic as identical to aerobic
• forgetting that secondary treatment produces sludge
• quoting 85-95% removal as complete removal
• ignoring receiving-water sensitivity and consent conditions.`},

    {type:'heading', text:'17. End-of-lecture summary'},
    {type:'text', text:`• Treatment is staged because pollutants occur in different physical and chemical forms.
• Preliminary and primary stages mainly use physical/mechanical removal.
• Secondary treatment uses microbes, followed by clarification, to remove BOD and TSS.
• Suspended-growth biomass floats as flocs; attached-growth biomass forms a biofilm on media.
• Tertiary treatment removes nutrients and pathogens where stricter limits or reuse require it.
• Nitrogen removal uses aerobic nitrification and anoxic denitrification.
• Phosphorus can be removed chemically or through PAOs.
• Chlorine, UV and ozone have different disinfection trade-offs.
• Sludge must be stabilised and dewatered before disposal or reuse.

**Scope check:** slide 38, the final summary slide, is included. No worked-example or calculation PDF was supplied for Lecture 5, and the lecture contains no numerical worked example. Lecture 6 drinking-water material is excluded.`},
    {type:'text', text:`Sources used: **Lecture 5 - Wastewater Treatment** slides (all 38 slides), the complete Lecture 5 caption transcript, and the mid-semester-test preparation captions. No external sources were used.`}
  ]
};

window.ENVENG_MODULE1_L5_KNOW_BLOCKS = [
  {type:'heading', text:'Lecture 5 - Wastewater Treatment'},
  {type:'text', text:`This focused revision section combines the Lecture 5 slides and captions with the lecturer's mid-semester-test preparation guidance. For this lecture, the assessed emphasis is conceptual: know the treatment sequence and be able to compare suspended-growth and attached-growth systems.`},

  {type:'heading', text:'Lecturer’s exam hints'},
  {type:'exam', text:`**LECTURER’S EXAM HINT**

**"And like I mentioned again, if you go through the practice quizzes, you can have a brief idea of what kind of questions that you will see."**

**"And the goal is not to memorise everything blindly is to understand the concepts so that you are able to answer question types that might be slightly different than those, but still, um, understand how to answer them."**

What this means: use the quizzes to learn the style, then practise explaining the process logic in unfamiliar wording rather than memorising an answer sentence.`},
  {type:'exam', text:`**LECTURER’S EXAM HINT**

**"Okay. Then regarding wastewater treatment, just like the key treatment processes in general, like an overview and also in particular focus on the what is the difference between suspended growth and attached growth types of system for this."**

**"So when you focus your revision, please make sure that you understand these concepts."**

What this means: prioritise the stage overview and the suspended-versus-attached-growth comparison. You should be able to identify each system from a description and explain its biomass location, equipment and trade-offs.`},
  {type:'exam', text:`**LECTURER’S EXAM HINT**

**"And because this is just a second class, it's not like I expect you to know all of the steps involved in the nitrification."**

**"But for you guys just to know like that, these are the kinds of units that we need when we think about nitrogen removal okay."**

What this means: understand aerobic nitrification, anoxic denitrification, sequenced zones and the purpose of reaching N₂ gas. Do not memorise a detailed biochemical pathway.`},
  {type:'exam', text:`**LECTURER’S EXAM HINT**

**"I didn't design the test in a way that is like, oh, like such super hard niche questions that I said one time and then never mentioned again."**

**"But to me, if you practice with the practice quizzes and you understand all the topics that are mentioned here, you should be just fine."**

What this means: focus on the repeated core ideas below, not isolated plant-design detail.`},
  {type:'exam', text:`**LECTURER’S EXAM HINT**

**"Just like make an assumption to keep going with like just your working so that we can at least allocate marks for that."**

What this means: this is general calculation-test advice. Show reasoning and continue consistently if one value is uncertain. Lecture 5 itself introduces no numerical calculation method.`},

  {type:'heading', text:'Treatment stages you need to know'},
  {type:'text', text:`1. **Preliminary:** screen debris, remove grit, optionally equalise flow.
2. **Primary:** slow flow; settle suspended solids as primary sludge and skim scum.
3. **Secondary:** use microbes to remove dissolved/colloidal organics; clarify the biomass.
4. **Tertiary:** remove remaining nutrients, solids and pathogens when discharge or reuse limits require it.
5. **Sludge handling:** stabilise, dewater and dispose of or reuse residual solids.

Understand the reason for the order: easy-to-remove solids are taken out first to protect the more sensitive biological and polishing processes.`},

  {type:'heading', text:'Definitions to know'},
  {type:'text', text:`• **Screening:** interception of large debris.
• **Grit:** dense, abrasive, mainly inorganic particles.
• **Equalisation:** temporary storage that smooths flow and pollutant-strength peaks.
• **Clarifier:** tank in which solids separate by gravity.
• **Primary sludge:** solids settled during primary treatment.
• **Biomass:** living microbial material produced in biological treatment.
• **Floc:** an aggregate of suspended microorganisms and particles.
• **Biofilm:** microorganisms attached to a surface.
• **RAS:** settled activated sludge returned to the aeration tank.
• **WAS:** excess activated sludge removed from the process.
• **Nitrification:** aerobic conversion of ammonium through nitrite to nitrate.
• **Denitrification:** anoxic conversion of nitrate to nitrogen gas.
• **PAO:** phosphorus-accumulating organism.
• **Disinfection:** pathogen inactivation.
• **Sludge stabilisation:** treatment that makes sludge safer and less odorous before disposal or reuse.`},

  {type:'heading', text:'The comparison most likely to matter'},
  {type:'text', text:`**Suspended growth / activated sludge**
• biomass floats as flocs in an aeration tank
• air diffusers supply oxygen
• secondary clarifier settles biomass
• RAS returns useful microbes; WAS removes excess
• high BOD/TSS removal, but aeration uses substantial energy.

**Attached growth / trickling filter**
• biomass forms a biofilm on rock or plastic media
• wastewater trickles over the media
• simpler and lower-energy operation
• may clog and may have lower efficiency
• lecture framing: biofilms can be more robust for toxic/industrial wastewater.

**One-sentence distinction:** suspended-growth microbes are carried in the wastewater; attached-growth microbes stay on a support surface while wastewater passes over them.`},

  {type:'heading', text:'Processes and pathways to understand'},
  {type:'formula', text:`Nitrification (aerobic): NH₄⁺ → NO₂⁻ → NO₃⁻
Denitrification (anoxic): NO₃⁻ → N₂ gas

Know the direction, oxygen condition and purpose. These are not numerical calculation equations.`},
  {type:'text', text:`Also understand:
• primary sedimentation removes about 60% SS and 30-35% BOD
• activated sludge removes about 85-95% BOD and TSS
• phosphorus is removed by chemical precipitation or PAO-rich biomass removal
• chlorine leaves a residual; UV leaves no chemical residual but needs clear water; ozone is powerful, complex and costly
• tertiary treatment is required according to receiving-water sensitivity, reuse needs and consent limits.`},

  {type:'heading', text:'What to understand rather than memorise'},
  {type:'text', text:`Understand why:
• screens and grit removal protect equipment
• equalisation prevents hydraulic and pollutant-strength shocks
• primary treatment cannot remove most dissolved organics
• microbial biomass must later be separated
• RAS maintains enough microbes and WAS prevents excessive biomass
• UV works poorly when particles shield pathogens
• nutrients matter more in sensitive, poorly mixed waters
• removing pollutants from water creates a sludge-management problem.

Do **not** memorise the detailed nitrification pathway beyond the lecture-level aerobic/anoxic overview. The lecture provides no design equations or worked calculations.`},

  {type:'heading', text:'Must-Know Checklist - Lecture 5'},
  {type:'text', text:`□ I can put preliminary, primary, secondary, tertiary and sludge handling in order.
□ I can match each stage to the pollutant form it targets.
□ I can explain screening, grit removal and optional flow equalisation.
□ I can explain what settles and what floats in a primary clarifier.
□ I can explain why primary treatment removes more SS than BOD.
□ I can describe the activated-sludge loop, including aeration tank, secondary clarifier, RAS and WAS.
□ I can distinguish suspended growth from attached growth without notes.
□ I can explain how a trickling filter works and give one advantage and limitation.
□ I know the lecture removal ranges: primary ≈60% SS and 30-35% BOD; activated sludge ≈85-95% BOD/TSS.
□ I can state when tertiary treatment is needed.
□ I can state nitrification and denitrification in the correct direction and oxygen conditions.
□ I can describe both phosphorus-removal methods.
□ I can compare chlorine, UV and ozone disinfection.
□ I can explain why sludge handling is part of the whole treatment system.
□ I know detailed nitrification biochemistry is not required.
□ I know Lecture 5 adds no numerical calculation method; Module 1 calculations remain the solids, alkalinity and hardness work covered elsewhere.`},
  {type:'text', text:`Lecture 5 sources: all 38 lecture slides, the full lecture captions and the mid-semester-test preparation captions. The final slide was checked; no later-lecture content or separate calculation example was included.`}
];
