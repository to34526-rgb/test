window.ENVENG_M2_W6L9 = {
  title: 'W6 L9 - Atmospheric Dispersion Modelling',
  tags: 'ENVENG 200 CIVIL 200 module 2 week 6 lecture 9 atmospheric dispersion modelling plume source geometry point area line volume emission rate stack height exit velocity temperature meteorology stability inversion downwash street canyon Gaussian AERMOD CALINE VEPM Lagrangian CALPUFF',
  blocks: [
    {type:'heading', text:'Lecture overview and scope'},
    {type:'text', text:`**Course:** ENVENG 200 / CIVIL 200
**Module:** 2 - Air Quality and Noise
**Week:** 6
**Lecture:** 9
**Title:** Atmospheric Dispersion Modelling
**Scope:** Complete 37-slide lecture and the complete Lecture 9 caption transcript.

This lecture explains how engineers predict where emitted pollutants travel and what ground-level concentrations may result. It covers modelling purposes, inputs, source geometries, stack parameters, meteorology, urban effects, model selection and a worked CALPUFF design example. It introduces **no new numerical equation or hand calculation**.`},

    {type:'heading', text:'1. Assessment status'},
    {type:'exam', text:`**LECTURER’S EXAM HINT**

**"And obviously the content that is covered is all the content for modules one and two."**

**"So everything that we've gone through since week one to this week and this final lecture included,"**

What this means: although atmospheric dispersion is not named separately in the short key-topic list, the lecturer explicitly says the final lecture is included in the test scope. Do not treat Lecture 9 as excluded.`},
    {type:'exam', text:`**LECTURER’S EXAM HINT**

**"Um, obviously we I have been reinforcing that every week, but please use the content from the weekly practice quizzes as your main revision guide,"**

**"and I will basically assess the same kind of concepts that are covered,"**

**"even though I may present them in a slightly different format or context,"**

What this means: understand the relationships and apply them to a changed scenario rather than memorising a slide image.`},
    {type:'exam', text:`**LECTURER’S EXAM HINT**

**"Okay, now, in terms of the calculations, of course we don't need to memorise any formulas."**

**"They will all be given to you in the formula sheets."**

What this means: the supplied Module 2 formula sheet contains noise equations, and Lecture 9 adds no dispersion equation. Focus here on conceptual prediction and design choices.`},

    {type:'heading', text:'2. Professional context'},
    {type:'text', text:`Air-quality scientists may:
• apply for air-discharge consents
• visit quarries, landfills, spray-painting facilities, power infrastructure and wastewater plants
• set up monitoring equipment
• undertake research and write air-discharge, odour and greenhouse-gas assessments
• liaise with councils
• run atmospheric dispersion models.

The engineering purpose is to connect a proposed or existing emission source with the concentrations and effects expected at surrounding locations.`},

    {type:'heading', text:'3. What is an atmospheric dispersion model?'},
    {type:'text', text:`An **atmospheric dispersion model** is a mathematical simulation of the physical and chemical processes that control pollutant transport, spreading and transformation in the atmosphere.

It combines information about emissions and atmospheric conditions to estimate pollutant concentration at specified locations and times.

**Plain-language meaning:** the model asks, “If this source releases this pollutant under these weather and site conditions, where will it go and how concentrated could it be?”

A model is an estimate, not a perfect reproduction of reality. Input quality, assumptions and model suitability control the reliability of its output.`},

    {type:'heading', text:'4. Why models are used'},
    {type:'text', text:`Atmospheric dispersion models support:
• checking compliance with air-quality guidelines and obtaining discharge consent
• planning new facilities and selecting stack heights
• managing or renewing consent for existing emissions
• identifying likely sources of an observed pollution problem
• estimating consequences of accidental releases
• screening options before committing to expensive field monitoring.

Models can save money, but they do **not replace monitoring**. Monitoring measures what actually occurred at a location; modelling predicts what may occur over many locations or scenarios. They are strongest when used together.`},

    {type:'heading', text:'5. The modelling process'},
    {type:'image', src:'assets/module2-lecture9-process.jpg', caption:'Lecture slide 9: emissions and meteorology enter the dispersion simulation; outputs are analysed as ground-level concentrations and potential environmental or health effects.'},
    {type:'text', text:`**Stage 1 - data input:** source location, emission rate, plume/stack details, wind speed and direction at different heights, precipitation and other meteorological data.

**Stage 2 - data processing and simulation:** the selected model calculates pollutant transport and dispersion.

**Stages 3 and 4 - output and interpretation:** engineers map predicted ground-level concentrations and assess likely environmental and health effects.

**Physical meaning:** a visually polished contour map is only the final step. Its credibility depends on appropriate source data, weather data, terrain/building representation and model choice.`},
    {type:'exam', text:`**LECTURER’S EXAM HINT**

**"we want you guys to be aware of what kind of data input we are putting in the model,"**

**"and how we can actually model the dispersion that is happening,"**

**"and what are some kinds of measures that we could then put in place when we find that the values that we are getting are like too high."**

What this means: know the input categories, the main dispersion influences and the design responses. You are not expected to operate the software or derive a dispersion equation.`},

    {type:'heading', text:'6. Source geometries'},
    {type:'image', src:'assets/module2-lecture9-source-geometries.jpg', caption:'Lecture slide 11: models represent emissions as point, area, line or volume sources.'},
    {type:'text', text:`**Point source:** emission from one identifiable location, such as an industrial stack.

**Area source:** many similar emissions represented over an area, such as domestic heating across a neighbourhood or a housing development.

**Line source:** emissions distributed along a line, especially a road or motorway.

**Volume source:** emissions represented throughout a three-dimensional space, such as multiple fugitive vents/doors or a spray-painting building.

Choosing the wrong geometry changes how the model releases and spreads pollution. Always translate the real activity into the geometry that best represents it.`},

    {type:'heading', text:'7. Pollutant-source inputs'},
    {type:'text', text:`The main source inputs are:

• **Emission rate:** how much pollutant is released per unit time. This is one of the most important inputs.
• **Emission height / stack height (m):** a higher release gives more opportunity for mixing before the plume reaches the ground.
• **Exit temperature (K or °C, as required by the model):** a hotter plume is more buoyant and can rise and mix more.
• **Exit velocity (m/s):** faster discharge increases plume momentum and mixing.
• **Stack diameter (m):** part of the source geometry and plume calculation.

An industry may not be able to reduce emission rate without reducing production, so stack design and process controls may be examined as alternatives. These do not remove pollution; they change how it disperses.`},
    {type:'text', text:`**Exit-velocity trade-off:** higher velocity can reduce nearby ground concentration through greater plume rise and dilution. The lecturer warns that excessive velocity may create a humming sound and therefore a noise problem.

**Stack-height trade-off:** increasing height can greatly reduce a nearby receptor's concentration, but it disperses the pollutant farther rather than destroying it.

**Temperature trade-off:** hotter emissions can disperse better, but heating requires additional energy and cost.`},

    {type:'heading', text:'8. Wind speed and direction'},
    {type:'text', text:`**Wind speed** controls dilution and transport. Higher wind speed usually dilutes the plume faster; low-wind conditions can allow high local concentrations.

**Wind direction** controls which receptors are downwind. It is especially important for a point source because a town, school or other sensitive receptor may lie directly in the plume path.

For roads, wind speed and direction affect how emissions move away from the line source. For stacks, they affect the plume centreline and the location of maximum ground concentration.

**Plume:** the moving body or cloud of emitted pollutant in the atmosphere.`},

    {type:'heading', text:'9. Atmospheric stability and inversion'},
    {type:'image', src:'assets/module2-lecture9-stability.jpg', caption:'Lecture slide 15: atmospheric stability controls vertical plume motion; an inversion creates a shallow mixing layer that traps pollution near the ground.'},
    {type:'text', text:`**Atmospheric stability** describes the atmosphere's tendency to resist or encourage vertical air movement.

• **Stable air** suppresses vertical mixing, so pollutants can remain concentrated in a narrow layer.
• **Unstable air** encourages rising and sinking motion, producing stronger vertical mixing.
• **Neutral conditions** lie between these behaviours.

A **temperature inversion** occurs when the normal temperature pattern reverses over a layer. The inversion acts like a lid, trapping pollutants below it and producing high near-ground concentrations. Auckland's visible **brown haze** is the lecture example, and the lecturer links inversion events with increased asthma presentations.

**Common mistake:** saying an inversion removes pollution. It restricts vertical dispersion and can make exposure worse.`},

    {type:'heading', text:'10. Local winds and terrain'},
    {type:'image', src:'assets/module2-lecture9-sea-land-breeze.jpg', caption:'Lecture slide 18: daytime sea breezes and night-time land breezes reverse the local wind direction.'},
    {type:'text', text:`**Sea breeze:** during the day, land heats faster than water and air generally moves from sea toward land.

**Land breeze:** at night, the circulation can reverse and air moves from land toward sea.

Because direction changes with time of day, the receptor downwind of a source can also change.

**Valley and mountain breezes:** daytime heating can promote upslope/valley circulation and mixing. At night, cold dense air can drain downslope into a valley, carrying or trapping pollution where people live.

Surface roughness also changes the wind-speed profile. Buildings, trees and other obstacles slow and disturb near-ground flow compared with open terrain.`},

    {type:'heading', text:'11. Buildings and city form'},
    {type:'image', src:'assets/module2-lecture9-downwash.jpg', caption:'Lecture slide 21: a building can generate a wake that pulls an otherwise similar stack plume downward.'},
    {type:'text', text:`**Building downwash** occurs when airflow over and around a building forms wakes and eddies that pull a plume toward the ground. A stack affected by the building can therefore create a denser near-ground plume than an isolated stack.

Models need the relevant building geometry so this wake effect is not missed.`},
    {type:'image', src:'assets/module2-lecture9-city-topography.jpg', caption:'Lecture slide 22: narrow street canyons restrict pollutant dispersion, while greater distance, width and separation from traffic improve dilution.'},
    {type:'text', text:`A **street canyon** is a road bounded by buildings that restrict airflow. Vehicle pollution can recirculate between façades rather than dispersing upward.

Wider streets, separation from traffic and less obstructed airflow generally provide more opportunity for dilution. The bus-stop example in the lecture shows how a shelter or confined kerbside space can keep exhaust near waiting passengers.`},

    {type:'heading', text:'12. Steady-state Gaussian plume models'},
    {type:'image', src:'assets/module2-lecture9-gaussian.jpg', caption:'Lecture slide 24: a steady-state Gaussian plume model represents concentration with a Gaussian distribution around the plume centreline.'},
    {type:'text', text:`A **steady-state Gaussian plume model** treats emissions and meteorology as sufficiently constant for the plume to be represented by a steady, Gaussian-shaped concentration distribution.

Examples on the slide are AERMOD and Ausplume.

**Strengths:**
• relatively simple inputs and operation
• fast preliminary assessment
• long history of regulatory use.

**Limitations:**
• poor performance in light-wind conditions
• unsuitable for regional scale, complex terrain or rapidly changing meteorology
• good meteorological data are still essential.

Use it for a straightforward local screening/regulatory problem when the steady-state assumptions are reasonable.`},

    {type:'heading', text:'13. Road-emission models'},
    {type:'text', text:`CALINE-4/AUSROADS are designed for pollutant dispersion close to roads. They combine traffic/source information with meteorology.

The **Vehicle Emissions Prediction Model (VEPM)** estimates New Zealand vehicle emission rates for inputs to road-dispersion models. It uses information such as fleet composition, fuel/vehicle type and speed. It can compare road layout, traffic-light phasing, fleet changes and future scenarios.

A New Zealand-specific model matters because the national vehicle fleet differs from newer overseas fleets; using unsuitable fleet assumptions could under- or over-predict emissions.`},
    {type:'exam', text:`**LECTURER’S EXAM HINT**

**"And don't worry about memorising any kinds of those weird names."**

**"It's just the name of the models that are being used."**

What this means: do not spend time memorising every road-model acronym. Understand what a road model needs and what question it answers. Still know the conceptual difference between a simple steady-state Gaussian approach and a complex non-steady Lagrangian approach.`},

    {type:'heading', text:'14. Lagrangian puff models'},
    {type:'image', src:'assets/module2-lecture9-lagrangian.jpg', caption:'Lecture slide 31: a Lagrangian model such as CALPUFF represents a release as a succession of moving and expanding puffs.'},
    {type:'text', text:`A **Lagrangian model** tracks discrete pollutant puffs as they move and grow through space and time. CALPUFF is the lecture example.

**Strengths:**
• non-steady: can represent changing meteorology
• handles a range of spatial scales and source types
• can handle complex terrain and atmospheric chemistry
• performs better in low-wind conditions.

**Limitations:**
• more detailed data inputs
• more training and computing power
• longer run times; the lecturer notes that some simulations can take about a week.

Use a Lagrangian model when the site or weather is too complex for the steady-state assumptions and the added effort is justified.`},

    {type:'heading', text:'15. Gaussian versus Lagrangian'},
    {type:'text', text:`| Feature | Steady-state Gaussian | Lagrangian puff |
|---|---|---|
| Representation | One steady Gaussian plume | Sequence of moving puffs |
| Meteorology | Assumed sufficiently constant | Can change over time |
| Terrain/chemistry | Limited | Can handle complex terrain and chemistry |
| Light winds | Weak | Better |
| Inputs and computing | Simpler and faster | More detailed and demanding |
| Best role | Preliminary/local regulatory assessment | Detailed complex-site assessment |

The lecturer presents them as complementary steps: obtain an initial answer with the simpler model, then use the complex model when the decision needs greater realism.`},

    {type:'heading', text:'16. Worked lecture example - hypothetical OGGB stack'},
    {type:'text', text:`**Question reproduced from the lecture scenario**

A hypothetical waste-to-energy stack is placed on the OGGB building, with engineering students in a nearby building treated as the sensitive receptor. The source is modelled in CALPUFF.

Baseline inputs shown on the slide are:
• stack height = **25 m**
• exit temperature = **330 K**
• inside diameter = **0.1 m**
• exit velocity = **10 m/s**.

1. What source geometry is this?
2. Does the baseline contour suggest acceptable exposure at the student receptor?
3. Which design changes can reduce the predicted concentration, and what trade-offs follow?`},
    {type:'image', src:'assets/module2-lecture9-example-baseline.jpg', caption:'Lecture slide 34: the baseline 25 m stack produces high predicted concentration contours over and near the sensitive receptor.'},
    {type:'text', text:`**Step 1 - classify the source**

It is a **point source** because the release comes from one stack at a defined location.

**Step 2 - interpret the baseline**

The receptor lies within the higher-concentration contour region, so the design needs improvement. The colours show relative predicted concentration; red/orange are worse than yellow/green.`},
    {type:'image', src:'assets/module2-lecture9-example-stack.jpg', caption:'Lecture slide 35: increasing stack height by 10 m, from 25 m to 35 m, produces the largest visible improvement near the receptor.'},
    {type:'text', text:`**Step 3 - increase stack height**

The stack is increased by **10 m**, from 25 m to 35 m. Releasing the plume higher provides more distance and time for dilution before it reaches ground level. The lecturer identifies this as the change making the largest difference.`},
    {type:'image', src:'assets/module2-lecture9-example-velocity.jpg', caption:'Lecture slide 36: increasing exit velocity by 10 m/s, from 10 m/s to 20 m/s, gives further reduction in the high-concentration region.'},
    {type:'text', text:`**Step 4 - increase exit velocity**

Exit velocity is increased by **10 m/s**, from 10 m/s to 20 m/s. Greater momentum raises and mixes the plume more effectively. The design must still avoid excessive energy use and noise from very high discharge velocity.`},
    {type:'image', src:'assets/module2-lecture9-example-temperature.jpg', caption:'Lecture slide 37: increasing exit temperature by 50 K, from 330 K to 380 K, further improves dispersion.'},
    {type:'text', text:`**Step 5 - increase exit temperature**

Exit temperature is increased by **50 K**, from 330 K to 380 K. The hotter, more buoyant plume rises and disperses more. This requires extra energy and therefore higher operating cost.

**Reasonableness check:** all three changes reduce the nearby high-concentration region in the model, which matches the lecture's physical explanation. They do not reduce the mass emitted, so source control may still be preferable where feasible.`},

    {type:'heading', text:'17. Engineering implications'},
    {type:'text', text:`• Use modelling early enough to change site layout or stack design.
• Identify sensitive receptors before interpreting contours.
• Match source geometry to the real emission process.
• Use representative meteorology, terrain and buildings.
• Test more than one operating/design scenario.
• Treat model output as evidence with assumptions, not as observed truth.
• Verify important predictions with monitoring.
• Consider cross-media effects: a dispersion improvement may add noise, energy use or cost.
• Higher dispersion is not the same as lower emissions; prevention and control at source remain important.`},

    {type:'heading', text:'18. Common mistakes'},
    {type:'text', text:`• Treating a model as a perfect measurement.
• Forgetting that Lecture 9 is included in the stated test scope.
• Confusing point, area, line and volume sources.
• Ignoring wind direction and sensitive receptors.
• Saying high wind always increases concentration; it usually increases dilution.
• Saying an inversion helps pollution escape.
• Ignoring building downwash and street-canyon recirculation.
• Applying a steady-state Gaussian model to highly variable meteorology or complex terrain without questioning the assumptions.
• Assuming CALPUFF is always better despite its data and computing burden.
• Memorising road-model acronyms instead of understanding their purpose.
• Claiming a taller stack removes pollution.
• Recommending higher velocity without considering noise, or higher temperature without considering energy/cost.
• Trying to find a hand-calculation equation that the lecture does not teach.`},

    {type:'heading', text:'What I Need to Know - Lecture 9'},
    {type:'text', text:`**Concepts to understand rather than memorise:**
• what a dispersion model predicts and why it complements monitoring
• the input → simulation → output/interpretation workflow
• point, area, line and volume source geometries
• the effect of emission rate, stack height, temperature and exit velocity
• how wind, stability, inversions, terrain and buildings alter concentration
• why Gaussian and Lagrangian models suit different situations
• how to interpret and improve the OGGB stack scenario.

**You do not need to memorise:** every road-model name or a dispersion equation. No dispersion equation is supplied or used in this lecture.`},

    {type:'heading', text:'Must-Know Checklist - Lecture 9'},
    {type:'text', text:`□ I can define an atmospheric dispersion model.
□ I can explain why modelling complements rather than replaces monitoring.
□ I know the main modelling stages and input categories.
□ I can identify point, area, line and volume sources from examples.
□ I can explain the effects of emission rate, height, temperature and exit velocity.
□ I can explain how wind speed and direction affect a plume.
□ I can define atmospheric stability and a temperature inversion.
□ I can explain sea/land and mountain/valley breeze effects.
□ I can explain building downwash and a street canyon.
□ I can compare steady-state Gaussian and Lagrangian puff models.
□ I understand the purpose of road-emission/dispersion models without memorising every acronym.
□ I can solve the OGGB scenario conceptually and discuss trade-offs.
□ I know that taller/hotter/faster stacks improve dispersion but do not remove emitted mass.
□ I know Lecture 9 adds no new hand calculation.
□ I remember that the lecturer explicitly included the final lecture in the test scope.`},
    {type:'text', text:`Sources used: the complete 37-slide **Lecture 9 - Atmospheric Dispersion Modelling** deck, the complete Lecture 9 caption transcript, the mid-semester-test preparation slides and captions, and the supplied Module 2 formula sheet. All four stages of the final worked example are included. No later-lecture material exists or has been added, and no external facts or equations were introduced.`}
  ]
};
