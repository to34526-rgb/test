window.ENVENG_W2L4 = {
  title: 'W2 L4 - Wastewater Sources and Characteristics',
  tags: 'ENVENG 200 CIVIL 200 module 1 week 2 lecture 4 wastewater sources characteristics BOD COD TSS TDS nutrients point source non-point source collection transport',
  blocks: [
    {type:'heading', text:'Lecture overview'},
    {type:'text', text:`**Course:** ENVENG 200 / CIVIL 200
**Module:** 1 - Water and Wastewater Treatment
**Week:** 2
**Lecture:** 4
**Scope:** Whole lecture, including the standalone point-source vs non-point-source activity slide.

This lecture introduces wastewater sources and characteristics. It ends with collection, transport and interpretation of a domestic wastewater sample. **Wastewater treatment processes belong to Lecture 5 and are not included here.**`},
    {type:'text', text:`### Learning objectives
By the end of the lecture, you should be able to:
• identify common sources and types of wastewater
• explain the main goals of wastewater treatment
• describe important wastewater parameters, including BOD, TSS and nutrients
• explain environmental impacts of untreated wastewater
• recognise how wastewater is collected and transported to a wastewater treatment plant (WWTP).`},

    {type:'heading', text:'1. Wastewater: definition and importance'},
    {type:'text', text:`**Wastewater** is water that has been affected by human use. Depending on context, it may also be called **sewage** or **effluent**.

Sources include toilets, sinks, showers, industry and, in some systems, stormwater. Wastewater can contain **physical, chemical and biological contaminants**, so it normally requires treatment before discharge or reuse.

Stormwater sometimes enters wastewater because older systems may use a **combined sewer**, where stormwater and wastewater share one pipe. Newer systems generally use separate stormwater and wastewater pipes. Converting an older combined system can be expensive.`},
    {type:'text', text:`Wastewater treatment matters because untreated wastewater can spread disease and pollute rivers, lakes and oceans. It can harm aquatic ecosystems and people using those waters. Wastewater can also contain recoverable resources such as nutrients and energy.

**Engineering implication:** treatment systems must protect public health and the environment while meeting the discharge requirements that apply at the site.`},

    {type:'heading', text:'2. Main wastewater sources'},
    {type:'text', text:`The course focuses on four source groups:

1. **Domestic wastewater** - toilets, kitchens, laundry and showers.
2. **Commercial wastewater** - restaurants, hotels and laundromats.
3. **Industrial wastewater** - food processing, chemical production, factories and other industrial processes.
4. **Infiltration/Inflow (I/I)** - groundwater or stormwater entering sewers. Groundwater can infiltrate through cracked pipes; stormwater can enter through unwanted connections or combined systems.

The source is the first clue to likely contaminants. That helps engineers decide which treatment processes may be needed.`},
    {type:'text', text:`**Common mistake:** treating infiltration/inflow as a pollutant type. It describes unwanted water entering the sewer system; that extra flow can dilute wastewater but increase the volume that must be conveyed and treated.`},

    {type:'heading', text:'3. Potable water, greywater and blackwater'},
    {type:'image', src:'assets/lecture4-water-classification.png', caption:'Lecture slide 10: potable water, greywater and blackwater are classified by use and contamination, not by appearance.'},
    {type:'text', text:`**Potable (clean) water** is safe for human or animal consumption. The lecture examples include treated tap water and suitable spring, well or rainwater sources.

**Greywater** is used water that does not contain faeces/excrement or toxic contaminants. Examples include water from baths, sinks and washing machines. It may sometimes be reused, such as for garden watering.

**Blackwater** is more contaminated wastewater containing faeces/excrement and/or toxic chemicals. It can come from toilets, garbage disposal and some industrial processes. Faecal matter is important because it can carry living bacteria and viruses.`},
    {type:'text', text:`**Common mistake:** a sample that looks black is not automatically blackwater. Dark colour may come from sediment. Classification depends on what contaminants are present, not colour alone.`},

    {type:'heading', text:'4. Goals of wastewater treatment'},
    {type:'text', text:`The lecture gives three goals:

1. **Produce clean effluent.** Remove pollutants such as TSS, dissolved organics, pathogens and nutrients so the water meets discharge or reuse requirements.
2. **Produce stabilised solid waste (sludge).** Solids removed from water still need treatment. Stabilisation helps kill pathogens and prevent odour. Properly treated sludge may be used as **biosolids**, for example as a soil conditioner.
3. **Recover resources where possible.** Potential resources include nitrogen, phosphorus, reusable water and energy from biogas.

These goals treat wastewater as both a hazard to control and a possible resource stream.`},

    {type:'heading', text:'5. Wastewater characteristics'},
    {type:'image', src:'assets/lecture4-characteristics.png', caption:'Lecture slide 13: physical, chemical and biological characteristics determine treatment needs and environmental impact.'},
    {type:'text', text:`**Physical characteristics** include turbidity, colour, odour, total solids and temperature.

**Chemical characteristics** include biochemical oxygen demand (BOD), chemical oxygen demand (COD), total organic carbon (TOC), nitrogen, phosphorus, sulphates, chlorides, alkalinity, dissolved oxygen (DO) and pH.

**Biological characteristics** include bacteria, algae, fungi, viruses and protozoa. The slide also notes oxygen needed for nitrification.

Together, these characteristics help determine both the treatment method and the consequences of releasing the wastewater untreated.`},

    {type:'heading', text:'6. Physical characteristics: solids'},
    {type:'formula', text:`TS = TSS + TDS

Where:
• TS = total solids, mg/L
• TSS = total suspended solids, mg/L
• TDS = total dissolved solids, mg/L

Use this mass-balance relationship when all three concentrations use the same sample basis and compatible units.`},
    {type:'text', text:`**Total suspended solids (TSS)** are particles retained by filtration. **Total dissolved solids (TDS)** pass through the filter. **Settleable solids** sink during sedimentation.

High solids can accumulate as sludge, clog equipment and create treatment problems. Suspended and settleable solids can be separated physically; dissolved material requires other chemical or biological treatment.`},
    {type:'text', text:`### Added explanation
The equation is a bookkeeping statement: the solids in a sample are divided into the fraction retained by the filter and the fraction passing through it. It does not mean TDS can be removed by the same filtration step as TSS.`},

    {type:'heading', text:'7. Temperature, odour and colour'},
    {type:'text', text:`**Temperature** affects microbial activity and oxygen solubility. Higher temperature can accelerate biological activity but reduce the amount of oxygen water can hold.

**Odour** can be caused by gases such as hydrogen sulphide (H₂S) and ammonia released during decomposition. Odour also affects community acceptance of a treatment plant.

**Colour** may indicate industrial discharge or aged sewage, but colour alone cannot identify the water type.`},

    {type:'heading', text:'8. Biochemical oxygen demand (BOD)'},
    {type:'image', src:'assets/lecture4-bod.png', caption:'Lecture slide 16: excess organic matter increases microbial oxygen use and can leave too little dissolved oxygen for aquatic life.'},
    {type:'text', text:`**Biochemical oxygen demand (BOD)** is the amount of dissolved oxygen that microorganisms need to break down organic material in water. BOD concentration is reported in **mg/L of O₂**.

Physical meaning:
• more biodegradable organic material provides more microbial “food”
• microorganisms become more active and consume more dissolved oxygen
• dissolved oxygen in the receiving water falls
• fish and other aerobic aquatic organisms may be harmed.

The common **BOD₅** test measures oxygen demand over five days, so it is slow.`},
    {type:'text', text:`**Common mistake:** BOD is not the amount of organic matter itself. It is the oxygen demand created when microorganisms degrade that organic matter.`},

    {type:'heading', text:'9. Chemical oxygen demand (COD)'},
    {type:'image', src:'assets/lecture4-bod-vs-cod.png', caption:'Lecture slide 18: BOD uses microbial degradation; COD uses chemical oxidation and gives a faster, broader measure.'},
    {type:'text', text:`**Chemical oxygen demand (COD)** is the oxygen equivalent needed to chemically oxidise organic matter. It is reported in **mg/L of O₂**.

COD includes biodegradable and non-biodegradable compounds, takes only a few hours in the lecture comparison, and is useful for process control and industrial wastewater assessment. BOD mainly reflects material microorganisms can degrade and normally takes five days.`},
    {type:'formula', text:`COD/BOD ratio = COD concentration ÷ BOD concentration

Where:
• COD = chemical oxygen demand, mg/L O₂
• BOD = biochemical oxygen demand, mg/L O₂
• COD/BOD ratio = dimensionless

The lecture gives a typical ratio of approximately 1.5-2 and states that COD > BOD.`},
    {type:'text', text:`**Physical meaning:** COD is broader because chemical oxidation can attack material that microbes cannot readily biodegrade. Therefore COD is normally at least as large as BOD for the same sample.

**Common mistakes:** reversing the ratio, attaching mg/L units to the ratio, or saying COD directly measures oxygen already present in the water.`},

    {type:'heading', text:'10. pH and nutrients'},
    {type:'text', text:`**pH** affects microbial survival. The lecture gives a typical wastewater range of 6.5-8.5; pH is dimensionless.

**Nitrogen** occurs as ammonia (NH₃), nitrate (NO₃⁻) and organic nitrogen. **Phosphorus** is discussed mainly as phosphate (PO₄³⁻). Excess nitrogen and phosphorus can drive **eutrophication**, where nutrient enrichment promotes excessive plant or algal growth.

Nutrients may need tertiary treatment to protect ecosystems.`},

    {type:'heading', text:'11. Environmental impacts of untreated wastewater'},
    {type:'image', src:'assets/lecture4-environmental-impacts.png', caption:'Lecture slide 20: untreated wastewater can cause oxygen depletion, eutrophication, pathogen exposure and toxic accumulation.'},
    {type:'text', text:`Major impacts are:
• **oxygen depletion** from oxygen-demanding organics and nutrient-driven biological growth
• **algal blooms and eutrophication** from nitrogen and phosphorus
• **pathogen spread** and public-health risks
• **heavy-metal and toxic-compound accumulation**, including accumulation through aquatic food chains
• disproportionate harm to sensitive ecosystems.`},

    {type:'heading', text:'12. Point sources and non-point sources'},
    {type:'image', src:'assets/lecture4-point-vs-nonpoint.png', caption:'Standalone lecture activity slide: point sources have an identifiable outlet; non-point pollution is diffuse across a broad area.'},
    {type:'text', text:`A **point source** is a specific, easily identifiable discharge location. Think of a pipe or outlet that can be pointed to.

A **non-point source** comes from scattered sources or a broad area and is difficult to trace to one exact discharge point. Surface runoff is commonly non-point pollution.

Class activity classifications:
• agricultural runoff - non-point
• wastewater treatment plant outfall - point
• airfield/runway runoff - non-point
• septic tank - point in the activity
• pictured industrial/construction hose discharge - point
• residential/urban runoff - non-point
• livestock in watercourses - non-point.`},
    {type:'text', text:`**Common mistake:** classifying only by land use. A construction or industrial site can produce either type; decide whether the pollution enters at one identifiable outlet or diffusely across an area.`},
    {type:'exam', text:`**"So even though we are here today, we can still assess this kind of content."**

The lecturer said this about the point-source versus non-point-source activity.

**Revision meaning:** know both definitions and be able to classify unfamiliar examples. The activity format does not remove the concept from assessment.`},

    {type:'heading', text:'13. Wastewater collection and transport'},
    {type:'image', src:'assets/lecture4-collection.png', caption:'Lecture slide 22: wastewater flows through sewers mainly by gravity, with pump stations lifting it where terrain requires.'},
    {type:'text', text:`Wastewater travels through a network of pipes and pump stations to a **wastewater treatment plant (WWTP)**.

• **Gravity flow** is preferred because it reduces energy use.
• **Pump stations** lift wastewater from low-lying areas or over hills where gravity alone cannot move it toward the WWTP.
• Pipes must be maintained to prevent blockages, cracks, leakage and groundwater infiltration.
• Wastewater should move quickly enough to prevent solids settling. Settled solids can cause blockages, odour-producing fermentation and pipe corrosion.

The slide gives a target velocity greater than **0.6 m/s**, but the lecturer explicitly removes that number from memorisation.`},
    {type:'exam', text:`**"I will not ask you this specific detail, but just know that we are trying to keep the water flowing as fast and efficiently as possible to avoid any of those problems."**

The “specific detail” is the **0.6 m/s** velocity.

**Revision meaning:** do not memorise 0.6 m/s. Understand why adequate velocity matters: it limits solids settling, blockages, odour and corrosion, while gravity flow helps minimise power use.`},

    {type:'heading', text:'14. Domestic and industrial wastewater'},
    {type:'text', text:`**Domestic wastewater** is relatively consistent because households use similar fixtures and appliances. Typical concerns include high BOD, nutrients and pathogens.

**Industrial wastewater** is more variable because industries use different processes. It may contain toxic or non-biodegradable substances, and pH and temperature can vary more widely. Industries often need to pre-treat wastewater before releasing it to public sewers so it does not damage pipes or disrupt the municipal WWTP.`},

    {type:'heading', text:'15. New Zealand discharge quality'},
    {type:'text', text:`The lecture states that New Zealand wastewater discharges are controlled through **resource consents issued by regional councils**, so requirements vary by region.

Example surface-water limits shown on slide 25:
• BOD: < 20-50 mg/L
• TSS: < 30 mg/L
• pH: 6-9
• ammoniacal nitrogen (NH₄⁺): < 10 mg/L
• faecal coliforms: < 1,000 CFU/100 mL

These are the lecture's example values, not a single universal national standard. **CFU/100 mL** means colony-forming units per 100 millilitres.`},

    {type:'heading', text:'16. Worked interpretation example - domestic wastewater'},
    {type:'text', text:`**Question reproduced from slide 26:**

A domestic wastewater sample has:
• BOD₅ = 250 mg/L
• COD = 500 mg/L
• TSS = 220 mg/L
• pH = 7.2
• NH₄⁺ = 35 mg/L

Interpret the sample and identify the required level of treatment.`},
    {type:'formula', text:`Step 1 - check the COD/BOD₅ relationship

COD/BOD₅ = 500 mg/L ÷ 250 mg/L
= 2.0

The mg/L units cancel, so the ratio is dimensionless.`},
    {type:'text', text:`Step 2 - interpret the measurements

• COD is greater than BOD₅, as expected.
• The ratio of 2.0 lies at the upper end of the lecture's approximate 1.5-2 range.
• TSS and NH₄⁺ are substantial pollutant loads in the sample.
• pH 7.2 lies within the lecture's typical 6.5-8.5 wastewater range.

**Slide answer:** this is **high-strength domestic wastewater** requiring **full secondary and nutrient treatment**.

**Reasonableness check:** COD/BOD₅ = 2 is consistent with the lecture relationship, and the high NH₄⁺ value supports the slide's nutrient-treatment conclusion.`},
    {type:'text', text:`### Added explanation
The ratio calculation makes the slide's COD-versus-BOD relationship explicit. The lecture does not give a calculation question or supplied strength-classification table, so you should not invent numerical high-strength boundaries.`},
    {type:'exam', text:`**"So but I don't really expect you to know this okay."**

**"But don't expect you to know what is high strength."**

These statements were made after class when a student asked why the sample was described as high strength.

**Corrected interpretation:** the captions around the first quote are imperfect, but the follow-up is clear. You do not need to memorise numerical high-/medium-/low-strength ranges. If classification were required, the lecturer said the ranges would be shown and you would interpret from them.`},

    {type:'heading', text:'17. Engineering implications and common mistakes'},
    {type:'text', text:`**Engineering implications**
• Source identification predicts contaminants and treatment difficulty.
• BOD, COD, solids, nutrients, pathogens, pH and toxic compounds support treatment selection and discharge control.
• Diffuse non-point pollution is harder to trace and control than one identifiable outfall.
• Sewer design balances reliable transport with energy use: gravity where possible, pumps where necessary.
• Industrial pre-treatment protects public sewers and biological treatment processes.

**Common mistakes**
• classifying blackwater by colour
• confusing TSS with TDS
• defining BOD as organic concentration rather than oxygen demand
• assuming COD and BOD measure exactly the same fraction
• forgetting that the COD/BOD ratio has no units
• treating every farm, industry or construction site as automatically point or non-point
• memorising 0.6 m/s or “high-strength” boundaries despite the lecturer's explicit guidance.`},

    {type:'heading', text:'18. End-of-lecture summary'},
    {type:'text', text:`• Wastewater must be treated to protect health and the environment.
• Main sources are domestic, commercial, industrial and infiltration/inflow.
• Main treatment goals are clean effluent, safe stabilised sludge and resource recovery.
• Key pollutants include BOD, COD, TSS, nutrients, pathogens and toxic compounds.
• Untreated wastewater can deplete oxygen, drive eutrophication, spread disease and accumulate toxins.
• Point sources have identifiable outlets; non-point sources are diffuse.
• Gravity and pump stations move wastewater to the WWTP.
• The final requested example is included above. Lecture 5 treatment-process content is excluded.`},
    {type:'text', text:`Sources used: **Lecture 4 - Wastewater Sources and Characteristics** slides (all 28 slides), the complete lecture caption transcript, and the standalone **Point Sources vs Non-Point Sources of Pollution** slide. No external sources were used.`}
  ]
};

window.ENVENG_MODULE1_L4_KNOW_BLOCKS = [
  {type:'heading', text:'Lecture 4 - Wastewater Sources and Characteristics'},
  {type:'text', text:`This is the focused revision section for **Week 2, Lecture 4**. It follows what the lecturer emphasised in the captions and includes both concepts and the small calculation/interpretation step from the final sample.`},

  {type:'heading', text:'Lecturer assessment guidance'},
  {type:'exam', text:`**"So even though we are here today, we can still assess this kind of content."**

Context: point sources versus non-point sources.

**Revision meaning:** learn the definitions and practise classifying new examples. The in-class activity is assessable content.`},
  {type:'exam', text:`**"I will not ask you this specific detail, but just know that we are trying to keep the water flowing as fast and efficiently as possible to avoid any of those problems."**

Context: the slide's sewer velocity of 0.6 m/s.

**Revision meaning:** do not memorise the number. Know that adequate velocity prevents solids settling, blockages, odour and corrosion, and that gravity reduces energy use.`},
  {type:'exam', text:`**"So but I don't really expect you to know this okay."**

**"But don't expect you to know what is high strength."**

Context: classifying the final domestic sample as high strength.

**Corrected interpretation:** caption wording near the first sentence is imperfect. The lecturer's meaning is that numerical strength categories do not need to be memorised; ranges would be supplied if needed.`},

  {type:'heading', text:'Definitions to know'},
  {type:'text', text:`• **Wastewater:** water affected by human use.
• **Domestic wastewater:** wastewater from homes.
• **Commercial wastewater:** wastewater from businesses such as hotels, restaurants and laundromats.
• **Industrial wastewater:** wastewater from industrial processes; often more variable and potentially toxic.
• **Infiltration/Inflow:** groundwater or stormwater entering sewers.
• **Greywater:** used water without faeces/excrement or toxic contaminants.
• **Blackwater:** wastewater containing faeces/excrement and/or toxic chemicals.
• **Effluent:** treated or discharged liquid stream, depending on context.
• **Sludge:** solids separated during wastewater treatment.
• **BOD:** oxygen microorganisms need to degrade biodegradable organics.
• **COD:** oxygen equivalent needed for chemical oxidation of organics.
• **TSS:** suspended solids retained by filtration.
• **TDS:** dissolved solids passing through the filter.
• **Eutrophication:** nutrient enrichment that promotes excessive algal/plant growth.
• **Point source:** one identifiable discharge location.
• **Non-point source:** diffuse pollution from many sources or a broad area.
• **WWTP:** wastewater treatment plant.`},

  {type:'heading', text:'Comparisons you must understand'},
  {type:'text', text:`**Greywater vs blackwater:** classification depends on contaminants, not colour.

**TSS vs TDS:** TSS is retained by a filter; TDS passes through it.

**BOD vs COD:** BOD relies on microbes and mainly represents biodegradable material; COD uses chemical oxidation, is faster and captures a broader range. COD is normally greater than BOD.

**Domestic vs industrial:** domestic composition is relatively consistent; industrial wastewater is more variable and may require pre-treatment.

**Point vs non-point:** an identifiable pipe/outlet is point source; diffuse runoff is non-point source.

**Gravity vs pumping:** gravity saves energy; pumps are required where terrain prevents gravity flow.`},

  {type:'heading', text:'Equations and interpretation you need'},
  {type:'formula', text:`TS = TSS + TDS

All terms are concentrations in mg/L on the same sample basis.`},
  {type:'formula', text:`COD/BOD ratio = COD (mg/L O₂) ÷ BOD (mg/L O₂)

The ratio is dimensionless. Lecture guide: approximately 1.5-2.`},
  {type:'text', text:`For the final sample:

COD/BOD₅ = 500/250 = **2.0**.

You should be able to say that COD > BOD₅, the result matches the lecture's approximate range, and the slide interprets the sample as high-strength domestic wastewater requiring secondary and nutrient treatment. Do **not** memorise numerical strength-category boundaries.`},

  {type:'heading', text:'Understand rather than memorise'},
  {type:'text', text:`Understand why:
• source affects likely contaminants and treatment choice
• biodegradable organic matter creates oxygen demand
• COD is broader and faster than BOD
• nitrogen and phosphorus can cause eutrophication
• adequate sewer velocity prevents settling and related problems
• industrial wastewater often needs pre-treatment
• non-point pollution is difficult to trace and manage.

Do not memorise the **0.6 m/s** sewer velocity or exact **high-strength wastewater ranges**.`},

  {type:'heading', text:'Must-Know Checklist - Lecture 4'},
  {type:'text', text:`□ I can define wastewater and explain why it must be treated.
□ I know the four source groups: domestic, commercial, industrial and infiltration/inflow.
□ I can distinguish potable water, greywater and blackwater without using colour as the test.
□ I know the three treatment goals: clean effluent, stabilised sludge and resource recovery.
□ I can group characteristics as physical, chemical or biological.
□ I can use TS = TSS + TDS and give every term in mg/L.
□ I can explain BOD physically and why high BOD harms aquatic life.
□ I can compare BOD and COD and calculate a COD/BOD ratio.
□ I can explain how N and P drive eutrophication.
□ I can classify point and non-point source examples; this can be assessed.
□ I can explain gravity sewers, pump stations and why adequate flow velocity matters.
□ I can compare domestic and industrial wastewater.
□ I know NZ limits are controlled through regional resource consents in the lecture framing.
□ I can interpret the final domestic wastewater sample.
□ I know not to memorise 0.6 m/s or high-strength classification ranges.`},
  {type:'text', text:`Lecture 4 sources: the 28-slide lecture deck, full captions and standalone point/non-point-source slide. Lecture 5 material is excluded.`}
];
