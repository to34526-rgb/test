window.ENVENG_MODULE2_L7_KNOW_BLOCKS = [
  {type:'heading', text:'Lecture 7 - Industrial Air Pollution'},
  {type:'text', text:`**Highest official mid-semester priorities:** understand and compare the four processes named on the revision slide: **gravity settlers, wet scrubbers, filter baghouses and electrostatic precipitators (ESPs)**. Know what each does and choose the best device for a stated situation.

Cyclones and gaseous-pollutant absorption/adsorption remain useful lecture content, but they are **secondary when revision time is limited**.

Use this chain in scenario answers:
**industry/source → pollutant form and particle size → separation mechanism → suitable device → engineering trade-off**.

This lecture is mainly conceptual. It contains **no new required calculation**.`},

  {type:'heading', text:'1. Lecturer’s direct revision priorities'},
  {type:'exam', text:`**LECTURER’S EXAM HINT**

**"air pollutants we generate and also industrial air pollution and like dust, for example, and then air pollution control measures."**

**"So try to understand what these processes do and like, which one is better for which kind of situation."**

What this means: you must do more than list the devices. For each one, know its physical mechanism, the particle sizes it handles well, and the situations where its efficiency, power, space or waste-handling requirements make it suitable.`},
  {type:'exam', text:`**LECTURER’S EXAM HINT**

**"So kind of like um go through what each kind of process does and why they are better for this situation or this type of situation."**

What this means: expect a **selection or comparison question**. A strong answer identifies the pollutant and then justifies a control method using the actual scenario constraints.`},
  {type:'exam', text:`**LECTURER’S EXAM HINT**

**"And again we have already covered all of the calculations related to this module."**

**"So don't worry we are not going to do any more."**

What this means: Lecture 7 adds no new numerical method. Prioritise mechanisms and engineering selection rather than inventing a collection-efficiency calculation.`},

  {type:'heading', text:'2. Where industrial pollution comes from'},
  {type:'text', text:`The lecture uses four industries to show how industrial processes create particulate and gaseous pollution:

| Industry | Why pollution is produced |
|---|---|
| **Coal-fired thermal power** | Fuel combustion produces flue gas containing particles and gaseous pollutants. |
| **Cement manufacturing** | Excavation, crushing, grinding, milling and material handling suspend large amounts of dust. |
| **Mining and crushing** | Blasting, excavation, crushing and movement of dry material generate dust. |
| **Waste incineration** | Burning waste can produce particles and gases; poor separation can allow unsuitable material such as plastics to create toxic fumes. |

The important exam move is to identify whether the problem is primarily **particles**, **gases**, or both. Particle collectors and gas-cleaning systems use different mechanisms.`},

  {type:'heading', text:'3. General particle-collection principle'},
  {type:'image', src:'assets/module2-lecture7-control-forces.jpg', caption:'Lecture slide 16: the five particle-control devices are classified by the force or mechanism that separates particles from the gas stream.'},
  {type:'text', text:`Every particle-control system must:
1. apply a force that moves particles out of the gas stream
2. retain the collected particles so they are not re-entrained
3. remove the collected material from the device
4. dispose of, recover or reuse that material correctly.

The five mechanisms are **gravity**, **wet scrubbing**, **filtration**, **centrifugal action** and **electrostatic attraction**.`},

  {type:'heading', text:'4. Gravity settlers'},
  {type:'image', src:'assets/module2-lecture7-gravity-settler.jpg', caption:'Lecture slide 18: a gravity settler slows the gas so large particles can fall into collection hoppers.'},
  {type:'text', text:`**How it works:** expanding the flow area reduces gas velocity. Large, heavy particles then have enough time to settle under gravity while cleaner gas exits.

**Best suited to:** coarse particles and cases where low power is important. The basic design generally removes particles around **40-60 μm**; the baffle chamber can collect roughly **20-40 μm**.

**Advantages:** simple and low power because gravity supplies the separation force.

**Limitations:** low fine-particle efficiency and a large chamber/space requirement. Multiple trays shorten the settling distance but are difficult to clean and unsuitable for high-temperature applications.

**Choose it when:** particles are large, land/space is available and a cheap pre-cleaner is acceptable. Do not choose it as the main control for PM2.5.`},

  {type:'heading', text:'5. Wet scrubbers'},
  {type:'image', src:'assets/module2-lecture7-wet-scrubber.jpg', caption:'Lecture slide 23: wet scrubber layouts bring dirty gas into contact with a scrubbing liquid and produce a contaminated liquid/slurry stream.'},
  {type:'text', text:`**How it works:** dirty gas contacts sprayed or circulated liquid. Particles collide with and become captured by droplets; clean gas leaves while the contaminated liquid collects below.

**Best suited to:** both fine and coarse particles; the comparison slide gives approximately **0.5-20 μm** and **50-99%** collection, depending on design and operation.

**Advantages:** relatively compact and capable across a broad particle-size range.

**Limitations:** moderate-to-high energy demand for pumps and fans; pressure/contact conditions strongly affect efficiency; it transfers pollution into a **liquid/slurry waste** that must then be treated or recycled.

**Choose it when:** a broad particle-size range must be captured and liquid handling is acceptable. Mention the contaminated water stream in any evaluation.`},
  {type:'exam', text:`**LECTURER’S EXAM HINT**

**"But it's not necessary for you to know like every single type of layout."**

What this means: understand the common wet-scrubbing principle and its trade-offs. You do not need to memorise every tray, packed-tower, Venturi or quench-tower arrangement shown on the slide.`},

  {type:'heading', text:'6. Baghouse filters'},
  {type:'image', src:'assets/module2-lecture7-baghouse.jpg', caption:'Lecture slide 25: a baghouse contains many fabric filter bags, a dirty-air chamber, clean-air outlet, cleaning system and solids hopper.'},
  {type:'text', text:`**How it works:** particle-laden gas passes through fabric. Particles are separated mainly by **impaction and interception** and accumulate on the bag surface as a dust cake.

**Best suited to:** high-efficiency collection of fine particles. The comparison slide gives **99%+** and particles below about **10 μm**.

**Key variables:** particle properties, gas properties, fabric properties, **gas-to-cloth ratio** and pressure drop. Gas-to-cloth ratio is the gas flow rate in m³/min divided by filter area in m²; it helps determine the required bag area/number of bags.

**Operational issue:** bags must be cleaned periodically. Shaking or reverse/pulse flow removes the dust cake into the hopper. Excess accumulation increases resistance and harms operation.

**Choose it when:** very high particle removal is required and the facility can support the power, space, cleaning and maintenance demands.`},

  {type:'heading', text:'7. Secondary - Cyclone separators'},
  {type:'image', src:'assets/module2-lecture7-cyclone.jpg', caption:'Lecture slide 31: rotating gas drives particles toward the cyclone wall; solids leave below and cleaner gas exits from the top.'},
  {type:'text', text:`**How it works:** the curved body forces gas into a spiral. Particles with sufficient momentum move to the outer wall, lose kinetic energy and fall; clean gas forms a second spiral and leaves through the top.

**Best suited to:** larger particles and high gas-flow rates. The comparison slide gives about **70-90%** efficiency and particles above about **10 μm**.

**Advantages:** low power, compact compared with settlers, simple, and easy to retrofit or combine in series/parallel.

**Limitations:** ordinary/high-throughput cyclones let fine particles escape. A high-efficiency cyclone captures finer particles but requires a higher pressure drop.

**Choose it when:** space and power are limited, gas volume is high and coarse-particle or pre-cleaning is sufficient. Combine it with a fine-particle device when necessary.`},

  {type:'heading', text:'8. Electrostatic precipitators (ESPs)'},
  {type:'image', src:'assets/module2-lecture7-esp.jpg', caption:'Lecture slide 36: an ESP charges particles in a strong electric field and attracts them to oppositely charged collection plates.'},
  {type:'text', text:`**How it works:** a strong electric field charges particles. They migrate to oppositely charged collection surfaces, where they are retained and later removed.

**Best suited to:** very fine particles and stringent removal. The comparison slide gives efficiency up to **99%+** and particles below about **1 μm**.

**Advantages:** the highest fine-particle performance among the devices discussed.

**Limitations:** high capital cost, moderate-to-high electrical power demand, complex equipment and large space/ducting requirements.

**Choose it when:** very high fine-particle efficiency justifies the cost, electricity and space.`},

  {type:'heading', text:'9. Compare before choosing'},
  {type:'image', src:'assets/module2-lecture7-comparison.jpg', caption:'Lecture slide 38: the particle collectors compared by collection efficiency, power demand and space requirement.'},
  {type:'text', text:`| Device | Main strength | Main drawback | Typical best use |
|---|---|---|---|
| **Gravity settler** | Lowest power; simple | Poor for fine particles; bulky | Large-particle pre-cleaning where space is available |
| **Wet scrubber** | Broad particle-size range; compact | High energy and contaminated liquid waste | Fine/coarse particles where water treatment is feasible |
| **Cyclone** | Low power, compact, retrofit-friendly | Fine particles can escape | High-flow coarse-particle removal or pre-cleaning |
| **Baghouse** | Very high fine-particle efficiency | Cleaning, pressure, power and maintenance | High-efficiency dry dust collection |
| **ESP** | Highest efficiency for very fine particles | Expensive, power-intensive and large | Stringent fine-particle control at large facilities |

**Selection rule:** there is no universally “best” collector. The best device is the one that meets the required particle-size efficiency while fitting the site's power, space, cost, temperature, maintenance and secondary-waste constraints.`},

  {type:'heading', text:'10. Collection efficiency - the concept only'},
  {type:'text', text:`No device operates at 100% efficiency. Some particles always remain in the outlet gas.

The lecturer explains that a single overall efficiency averages performance across the particle sizes present. This matters because a collector may remove coarse particles well but allow the smallest particles to escape.

For revision, interpret efficiency physically:
• **high overall efficiency** does not automatically mean every size fraction is removed equally
• control should reduce the amount escaping while meeting regulations
• source reduction remains important because end-of-pipe collection is never perfect.

There is **no new Lecture 7 calculation to practise**.`},

  {type:'heading', text:'11. Secondary - Cleaning gaseous pollutants'},
  {type:'image', src:'assets/module2-lecture7-flue-gas.jpg', caption:'Lecture slide 43: absorption moves a gas into a solvent, whereas adsorption attaches gas molecules onto a solid surface.'},
  {type:'text', text:`**Absorption (with a b):** transfers a gaseous pollutant **into a liquid solvent**, such as water or an alkaline solution. The lecture describes gas flowing upward while liquid flows downward so the pollutant transfers into the liquid phase and can be treated or neutralised.

**Adsorption (with a d):** attaches pollutant molecules **onto the surface of a solid**, such as activated carbon or zeolite. It is useful for trace gases and volatile compounds.

Memory aid from the physical process:
• absorption = pollutant goes **into** the liquid phase
• adsorption = pollutant sticks **onto** a solid surface.

**Common mistake:** treating these as spelling variants. They are different mass-transfer processes and create different spent liquid/solid streams.`},

  {type:'heading', text:'12. Fast scenario method'},
  {type:'text', text:`For a control-selection question:
1. Identify the industry and emission point.
2. Decide whether the pollutant is particulate, gaseous or both.
3. For particles, identify whether they are coarse, fine or very fine.
4. Match the required separation force/device.
5. State why that device works physically.
6. Compare its efficiency, power, space, cost and maintenance needs.
7. Identify the new waste stream: dry dust, contaminated liquid, spent filter material or spent adsorbent.
8. State one limitation and, if needed, propose a second device in series.

**Example:** a high-volume quarry dust stream with mostly coarse particles and limited space favours a **cyclone** over a gravity settler. If stringent fine-PM removal is also required, use the cyclone as pre-cleaning before a **baghouse or ESP**.`},

  {type:'heading', text:'13. Common mistakes'},
  {type:'text', text:`• Listing devices without explaining their separation mechanisms.
• Claiming one device is always best without using the scenario constraints.
• Selecting a gravity settler for fine PM2.5.
• Forgetting that wet scrubbers create contaminated liquid/slurry.
• Assuming bag filters never require cleaning.
• Saying cyclones filter through fabric rather than use centrifugal action and momentum.
• Ignoring the higher pressure drop needed for finer-particle cyclone performance.
• Confusing an ESP with a physical filter; it uses an electric field and charged plates.
• Confusing absorption with adsorption.
• Treating high overall efficiency as 100% removal of every particle size.
• Forgetting cost, power, space and maintenance when justifying a choice.
• Trying to learn a new calculation even though the lecturer says this lecture adds none.`},

  {type:'heading', text:'Must-Know Checklist - Lecture 7'},
  {type:'text', text:`□ I can explain and compare the four officially prioritised controls: gravity settler, wet scrubber, baghouse and ESP.
□ I can explain how a gravity settler slows gas and removes coarse particles.
□ I can explain how a wet scrubber transfers particles into a liquid stream.
□ I can explain filtration, dust cake and cleaning in a baghouse.
□ I can explain how an ESP charges and collects fine particles.
□ I can rank the devices broadly by efficiency, power and space requirements.
□ I can choose a suitable device from particle size and scenario constraints.
□ I remember that no collector operates at 100% efficiency.
□ I consider the secondary waste stream created by the control process.
□ I can justify a combined/pre-cleaning system when one device is insufficient.
□ If time permits, I can explain cyclone separation and its pressure-drop trade-off.
□ If time permits, I can distinguish absorption into a liquid from adsorption onto a solid.
□ I know there is no new Lecture 7 calculation to practise.`},
  {type:'text', text:`Sources: the complete 45-slide **Lecture 7 - Industrial Pollution** deck, the complete Lecture 7 captions, and the mid-semester-test preparation captions. No separate exercise PDF was supplied. This is intentionally the time-crunch version, limited to industrial sources, particle controls, selection trade-offs and flue-gas cleaning.`}
];
