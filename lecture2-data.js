window.ENVENG_W1L2 = {
  title: 'W1 L2 - Water Quality Parameters and Calculations',
  tags: 'ENVENG 200 CIVIL 200 module 1 week 1 lecture 2 water quality calculations units chemical equivalence alkalinity hardness TDS solids worked examples',
  blocks: [
    {type:'heading', text:'Lecture scope and learning outcomes'},
    {type:'text', text:`This lecture develops the calculation methods used with the water-quality parameters introduced earlier in Module 1. The order is:
• concentration units
• chemical equivalence
• alkalinity
• hardness
• total dissolved solids (TDS)
• laboratory solids calculations

By the end, you should be able to convert between mass and charge units, calculate alkalinity and hardness as CaCO₃, estimate TDS from electrical conductivity, classify solids, and interpret drying, filtration and ignition data.`},
    {type:'text', text:`**Timestamp note:** the uploaded plain-text captions do not contain embedded timecodes. Caption references on this page are therefore **approximate** estimates based on each statement's position in the transcript. Use the stated Part 1 or Part 2 recording and search near that time.`},
    {type:'exam', text:`**"this lecture will cover all of the different types of calculation questions that that you could be asked on the test."**

**Caption reference:** Part 1, approximately **01:35**.

Revision meaning: treat **all five worked-example types** in this lecture as assessable. You should be able to reproduce the method, not just recognise the final answer.`},
    {type:'exam', text:`**"and for this module, you will be given a formula sheet which I have just uploaded on canvas."**

**Caption reference:** Part 1, approximately **02:30**.

Revision meaning: focus on choosing and applying the correct formula, defining the quantities, keeping units consistent, and interpreting the result. Do not spend your main revision time memorising the supplied equations.`},

    {type:'heading', text:'Why water-quality calculations matter'},
    {type:'text', text:`Water-quality calculations help engineers:
• interpret laboratory data and treatment-plant performance
• determine chemical-dosing and treatment needs
• compare measurements with standards
• support process design and environmental analysis

The physical idea is that a raw concentration is useful only when its units allow a fair comparison. Charge-based units are especially important when different ions react according to electrical charge rather than mass alone.`},

    {type:'heading', text:'1. Common concentration units'},
    {type:'text', text:`**mg/L (milligrams per litre)** is the mass of a substance in one litre of water. It is the most common concentration unit in this lecture.

**ppm (parts per million)** describes a very small fraction of a substance in the overall solution. For the dilute water solutions used in this course:

**1 mg/L ≈ 1 ppm**

This numerical equivalence relies on the solution behaving like dilute water.

**meq/L (milliequivalents per litre)** measures the amount of ionic charge per litre. It makes ions with different molar masses and charges comparable.`},
    {type:'formula', text:`Equivalent concentration (meq/L) = concentration (mg/L) ÷ equivalent weight (mg/meq)

Equivalent weight (mg/meq) = formula weight ÷ |ionic charge|

Combined form:
Equivalent concentration (meq/L) = concentration (mg/L) ÷ [formula weight ÷ |charge|]

Variables and units
• concentration: measured ion concentration, mg/L
• formula weight: molecular or atomic mass; the same numerical value can be used as mg/mmol
• |charge|: absolute value of the ion charge, dimensionless
• equivalent weight: mg/meq
• equivalent concentration: meq/L`},
    {type:'text', text:`Use this equation when a concentration is given in **mg/L** but the next calculation depends on ionic charge, including alkalinity and hardness calculations.

The absolute charge is used. For example, Na⁺ has |charge| = 1 and SO₄²⁻ has |charge| = 2. The plus or minus sign identifies whether the ion is a cation or an anion, but it does not make an equivalent concentration negative.`},
    {type:'exam', text:`**"And again I will be giving this formula on the formula sheet so you don't have to memorise."**

**Caption reference:** Part 1, approximately **11:15**.

Revision meaning: know what each term means and be able to obtain formula weight and charge correctly.`},
    {type:'exam', text:`**"So hopefully, um, if we ask you, well, when we will ask you questions about this, like on the test or exam, for example, then we will also provide this table like the same one."**

**Caption reference:** Part 1, approximately **09:30**.

Revision meaning: the periodic table will be supplied. Practise locating atomic masses and building a compound's formula weight from its chemical formula.`},

    {type:'heading', text:'Chemical-equivalence conversion pathway'},
    {type:'image', src:'assets/lecture2-chemical-equivalence.png', caption:'Lecture slide 12: converting mg/L to mmol/L and then to meq/L using atomic weight and ionic charge.'},
    {type:'text', text:`The lecture shows two equivalent calculation routes:

1. Divide mg/L by the equivalent weight.
2. Convert mg/L to mmol/L using atomic or formula weight, then multiply by the absolute charge to obtain meq/L.

Both routes must give the same answer. The first route is shorter; the second makes the unit cancellation visible.

### Common mistakes
• using the signed charge instead of its absolute value
• forgetting subscripts when finding formula weight, such as the four oxygen atoms in SO₄²⁻
• dividing by charge twice
• writing mg/L as the final unit when the question asks for meq/L`},

    {type:'heading', text:'Worked Example 1 - Sodium equivalent concentration'},
    {type:'text', text:`**Question:** Calculate the equivalent concentration (meq/L) of a solution containing 10 mg/L of sodium (Na⁺).`},
    {type:'formula', text:`For Na⁺:
• atomic/formula weight ≈ 23
• |charge| = 1

Equivalent weight = 23 ÷ 1 = 23 mg/meq

Equivalent concentration = 10 mg/L ÷ 23 mg/meq
= 0.4348 meq/L
≈ **0.4 meq/L Na⁺** (lecture rounding)`},
    {type:'text', text:`**Why this equation applies:** the question asks for a charge-based concentration, but supplies a mass concentration.

**Reasonableness check:** Na⁺ has one charge per mole, so the numerical meq/L value is the same as its mmol/L value. A small 10 mg/L concentration should produce less than 1 meq/L, so 0.4 meq/L is reasonable.`},

    {type:'heading', text:'Worked Example 2 - Sulfate equivalent concentration'},
    {type:'text', text:`**Question:** Calculate the equivalent concentration (meq/L) of a solution containing 10 mg/L of sulfate (SO₄²⁻).`},
    {type:'formula', text:`Formula weight of SO₄²⁻:
= S + 4(O)
= 32 + 4(16)
= 96

|charge| = 2

Equivalent weight = 96 ÷ 2 = 48 mg/meq

Equivalent concentration = 10 mg/L ÷ 48 mg/meq
= 0.2083 meq/L
≈ **0.2 meq/L SO₄²⁻**`},
    {type:'text', text:`**Reasonableness check:** sulfate is much heavier than sodium. Although sulfate has twice the charge, its equivalent weight is still larger (48 mg/meq versus 23 mg/meq), so the same 10 mg/L gives a smaller meq/L value.

**Common mistake:** using only sulfur's atomic mass. The formula weight must include all four oxygen atoms.`},

    {type:'heading', text:'2. Alkalinity'},
    {type:'text', text:`**Alkalinity** is the capacity of water to neutralise acids. In this lecture it is mainly associated with bicarbonate, carbonate and hydroxide.

Different alkaline species are reported on a common basis as **mg/L as CaCO₃**. This does not mean the water necessarily contains that mass of solid calcium carbonate. It is a standard equivalent basis that lets different species be compared.`},
    {type:'formula', text:`Alkalinity as CaCO₃ (mg/L) = equivalent concentration of the alkaline species (meq/L) × 50 mg/meq

Where:
• equivalent concentration is the charge concentration of the alkaline species, meq/L
• 50 mg/meq is the equivalent weight used for CaCO₃
• final alkalinity is reported as mg/L as CaCO₃`},
    {type:'text', text:`Use this after converting the measured alkaline species from mg/L to meq/L. Multiplying by 50 puts the charge concentration onto the common CaCO₃ reporting basis.`},

    {type:'heading', text:'Worked Example 3 - Bicarbonate alkalinity'},
    {type:'text', text:`**Question:** A water sample has a bicarbonate concentration of 122 mg/L as HCO₃⁻. Determine the alkalinity of the sample in units of mg/L as CaCO₃.`},
    {type:'formula', text:`Formula weight of HCO₃⁻:
= H + C + 3(O)
= 1 + 12 + 3(16)
= 61

|charge| = 1
Equivalent weight = 61 ÷ 1 = 61 mg/meq

Equivalent concentration of HCO₃⁻
= 122 mg/L ÷ 61 mg/meq
= 2.00 meq/L

Alkalinity as CaCO₃
= 2.00 meq/L × 50 mg/meq
= **100 mg/L as CaCO₃**`},
    {type:'text', text:`**Why this equation applies:** alkalinity must be reported on the common CaCO₃ basis, so the bicarbonate mass concentration first becomes a charge concentration.

**Reasonableness check:** the conversion factor from HCO₃⁻ to CaCO₃ is 50/61, so the reported value should be lower than 122 mg/L. The answer of 100 mg/L is consistent.

**Common mistake:** stopping at 2 meq/L. That is an intermediate result, not the requested alkalinity unit.`},

    {type:'heading', text:'3. Hardness'},
    {type:'text', text:`**Hardness** measures multivalent metal ions. For this course, the calculation uses **Ca²⁺ and Mg²⁺** and reports their combined effect as mg/L as CaCO₃.

Engineering effects mentioned in the lecture include scaling in pipes and boilers and reduced soap lathering.

Lecture classification:
• soft: < 60 mg/L as CaCO₃
• moderately hard: 60-120 mg/L as CaCO₃
• hard: > 120 mg/L as CaCO₃`},
    {type:'exam', text:`**"But for the purpose of this class, because it's just the first fundamentals of environmental engineering, I will only ask you questions with calcium and magnesium so that you don't get confused."**

**Caption reference:** Part 1, approximately **29:35**.

Revision meaning: practise hardness questions using Ca²⁺ and Mg²⁺. Other multivalent ions exist, but they are outside the stated calculation scope.`},
    {type:'formula', text:`Hardness contribution as CaCO₃ (mg/L) = ion concentration (meq/L) × 50 mg/meq

Total hardness, TH = calcium hardness, CaH + magnesium hardness, MgH

All hardness terms above are reported in mg/L as CaCO₃.`},
    {type:'text', text:`**Carbonate hardness (temporary hardness)** is associated with bicarbonate and can be removed by boiling or lime softening.

**Non-carbonate hardness (permanent hardness)** is associated with anions such as sulfate, chloride and nitrate and requires processes such as ion exchange or reverse osmosis.`},
    {type:'formula', text:`Carbonate hardness, CH = min(total hardness, total alkalinity)

Non-carbonate hardness, NCH = total hardness - carbonate hardness

Therefore:
• if TH > TA, NCH = TH - TA
• if TH ≤ TA, NCH = 0

TH, TA, CH and NCH must all be on the same mg/L as CaCO₃ basis.`},
    {type:'text', text:`The carbonate portion cannot exceed either the available hardness or the available alkalinity, so it is the smaller of the two. A negative hardness has no physical meaning; if TA is at least as large as TH, all hardness is classified as carbonate hardness and NCH is zero.`},

    {type:'heading', text:'Worked Example 4 - Total, carbonate and non-carbonate hardness'},
    {type:'text', text:`**Question:** A water sample contains 60 mg/L of calcium (Ca²⁺) and 24 mg/L of magnesium (Mg²⁺). The sample has a total alkalinity of 120 mg/L as CaCO₃. Calculate:

a) the total hardness of the sample, expressed as mg/L as CaCO₃

b) the carbonate and non-carbonate hardness, expressed as mg/L as CaCO₃.`},
    {type:'formula', text:`Calcium:
Equivalent weight = 40 ÷ 2 = 20 mg/meq
Ca²⁺ concentration = 60 ÷ 20 = 3 meq/L
Ca hardness = 3 × 50 = 150 mg/L as CaCO₃

Magnesium (lecture approximation Mg = 24):
Equivalent weight = 24 ÷ 2 = 12 mg/meq
Mg²⁺ concentration = 24 ÷ 12 = 2 meq/L
Mg hardness = 2 × 50 = 100 mg/L as CaCO₃

Total hardness:
TH = 150 + 100
= **250 mg/L as CaCO₃**

Carbonate hardness:
CH = min(250, 120)
= **120 mg/L as CaCO₃**

Non-carbonate hardness:
NCH = 250 - 120
= **130 mg/L as CaCO₃**`},
    {type:'text', text:`**Reasonableness checks:**
• Ca hardness and Mg hardness are both positive.
• CH cannot exceed TH or TA; 120 mg/L satisfies this.
• CH + NCH = 120 + 130 = 250 mg/L = TH.
• TH > 120 mg/L, so the lecture classification places the sample in the hard range.

**Common mistakes:** adding 60 and 24 directly, comparing raw ion concentrations with alkalinity, forgetting to convert each ion to the CaCO₃ basis, or subtracting in the wrong order.`},

    {type:'heading', text:'4. Total dissolved solids from electrical conductivity'},
    {type:'text', text:`**Total dissolved solids (TDS)** represents inorganic and organic substances dissolved in water, including salts, minerals and metals. TDS can be measured directly in mg/L or estimated from **electrical conductivity (EC)**.

High TDS can affect taste and scaling. The lecture gives < 500 mg/L as the typical New Zealand aesthetic guideline value for drinking water.`},
    {type:'formula', text:`TDS (mg/L) ≈ 0.65 × EC (µS/cm)

Where:
• TDS = estimated total dissolved solids, mg/L
• EC = electrical conductivity, µS/cm
• 0.65 = approximate conversion factor for the ionic composition assumed in this lecture`},
    {type:'text', text:`Use this formula for an **estimate** when EC is supplied. The lecture warns that the actual factor varies with ionic composition; a laboratory solids measurement is more precise.`},
    {type:'formula', text:`Lecture example:
EC = 750 µS/cm

TDS ≈ 0.65 × 750
= **487.5 mg/L**`},
    {type:'exam', text:`**"And if I ask you a question about this, I would of course just give you the electrical conductivity. And so you would just have to multiply it by this factor okay."**

**Caption reference:** Part 1, approximately **44:30**.

Revision meaning: be able to identify EC, apply the 0.65 factor, retain units, and recognise that the result is approximate.`},

    {type:'heading', text:'5. Laboratory solids classification'},
    {type:'image', src:'assets/lecture2-solids-classification.png', caption:'Lecture slide 25: filtration separates suspended solids retained by the filter from dissolved solids that pass into the filtrate.'},
    {type:'text', text:`**Total solids (TS):** all solids remaining after the sample water is evaporated and the residue is dried at 110 °C.

**Settleable solids:** the suspended fraction that settles in an Imhoff cone during the settling period.

**Suspended solids (SS):** solids retained on the filter after the supernatant is filtered and the filter is dried.

**Total suspended solids (TSS):** settleable solids plus the suspended solids retained by the filter in this exercise.

**Total dissolved solids (TDS):** solids that pass through the filter and remain after drying at 180 °C.

**Total fixed solids (TFS):** solids remaining after ignition at 550 °C, usually representing the inorganic fraction.

**Total volatile solids (TVS):** solids lost during ignition at 550 °C.`},
    {type:'formula', text:`TSS = settleable solids + filter-retained suspended solids

TS = TSS + filtered-water residue dried at 110 °C

TDS = filtrate residue remaining after drying at 180 °C

TVS = TS - TFS

Concentration = measured dry mass ÷ sample volume`},
    {type:'text', text:`The temperatures identify what the laboratory step is measuring:
• 110 °C removes water and gives the dry residue used for TS in this exercise.
• 180 °C gives the more stringently dried filtrate residue used for TDS.
• 550 °C ignites the volatile fraction; the residue left is fixed solids.

### Added explanation
The process is easiest to follow as a material split. Settling separates the heavy settleable fraction. Filtration then separates remaining suspended particles from the filtrate. Drying and ignition distinguish water loss, dissolved residue, volatile material and fixed residue. This process interpretation is an explanatory aid; the stated definitions and temperatures come from the lecture.`},

    {type:'heading', text:'Worked Example 5 - Solids from settling, filtration, drying and ignition'},
    {type:'text', text:`**Question:** A 1.0 L wastewater sample is analysed to determine its solids content. After settling for 1 hour in an Imhoff cone, the supernatant is decanted and filtered through a 1 µm filter paper with an initial mass of 2.0460 g. The settled solids retained in the Imhoff cone are dried at 110 °C and have a dry mass of 20.0210 g. The filter paper is dried at 110 °C and reweighed at 2.1052 g. The filtrate is evaporated to dryness and dried at 110 °C, producing 1.2375 g of residue. Further drying at 180 °C leaves 0.9467 g of residue. Finally, all solid residues are combined and ignited at 550 °C, yielding 6.4547 g of fixed solids.

Calculate suspended solids, total solids, total volatile solids and total dissolved solids. The detailed solution also reports total suspended solids and total fixed solids.`},
    {type:'exam', text:`**"if I present this kind of question to you, it's because you can expect to see similar kind of templates when I assess you on this content, because I just want to know that you guys understood how to deal with these kinds of information."**

**Caption reference:** Part 1, approximately **47:50**.

Revision meaning: practise turning the written procedure into a sequence of material fractions. Expect the numbers or wording to change while the calculation structure remains similar.`},
    {type:'formula', text:`Step 1 - filter-retained suspended solids (SS)

SS mass = final filter mass - initial filter mass
= 2.1052 g - 2.0460 g
= **0.0592 g**

Because V = 1.0 L:
SS concentration = 0.0592 g ÷ 1.0 L
= **0.0592 g/L = 59.2 mg/L**`},
    {type:'formula', text:`Step 2 - total suspended solids (TSS)

TSS mass = settleable solids + filter-retained SS
= 20.0210 g + 0.0592 g
= 20.0802 g

TSS concentration = 20.0802 g ÷ 1.0 L
= **20.0802 g/L = 20,080.2 mg/L**`},
    {type:'formula', text:`Step 3 - total solids (TS)

TS mass = TSS + filtrate residue dried at 110 °C
= 20.0802 g + 1.2375 g
= 21.3177 g

TS concentration = 21.3177 g ÷ 1.0 L
= **21.3177 g/L = 21,317.7 mg/L**`},
    {type:'formula', text:`Step 4 - total dissolved solids (TDS)

The filtrate residue remaining after drying at 180 °C is given directly:
TDS mass = 0.9467 g

TDS concentration = 0.9467 g ÷ 1.0 L
= **0.9467 g/L = 946.7 mg/L**`},
    {type:'formula', text:`Step 5 - total fixed and total volatile solids

TFS is given after ignition at 550 °C:
TFS = **6.4547 g/L = 6,454.7 mg/L**

TVS = TS - TFS
= 21.3177 g/L - 6.4547 g/L
= **14.8630 g/L = 14,863 mg/L**`},
    {type:'text', text:`**Reasonableness checks:**
• Filter-retained SS is positive because the dried loaded filter is heavier than the clean filter.
• TSS is larger than SS because it also includes the large settleable fraction.
• TS is larger than TSS because filtered-water residue is added.
• TFS and TVS are both less than TS, and TFS + TVS = TS.
• Unit conversion is consistent: 1 g/L = 1000 mg/L.

The 110 °C filtrate residue (1.2375 g/L) is larger than the 180 °C TDS residue (0.9467 g/L). Therefore, using the lecture's stated laboratory definitions, **TS is not numerically equal to TSS + the 180 °C TDS value in this example**. TS uses the 110 °C filtered-water residue, while TDS uses the residue after further drying at 180 °C.`},
    {type:'text', text:`### Common mistakes in the solids question
• treating the final filter mass as the mass of SS without subtracting the clean filter
• forgetting that TSS includes both settleable solids and filter-retained SS in this exercise
• using the 180 °C residue when the lecture solution calculates TS with the 110 °C residue
• subtracting TS from TFS instead of calculating TVS = TS - TFS
• reporting grams from a 1 L sample without writing g/L
• converting g/L to mg/L in the wrong direction`},

    {type:'heading', text:'Engineering interpretation'},
    {type:'text', text:`Chemical equivalence converts different ions to a common charge basis, which supports hardness and alkalinity calculations. Reporting both on the CaCO₃ basis makes them directly comparable when classifying carbonate and non-carbonate hardness.

The solids procedure links measurements to physical fractions. Settling and filtration identify suspended material; controlled drying identifies residues; ignition separates volatile and fixed fractions. These measurements support treatment design, monitoring, compliance and laboratory quality checks.`},

    {type:'heading', text:'End-of-lecture summary'},
    {type:'text', text:`• Use mg/L for mass concentration and meq/L for charge concentration.
• Use formula weight and absolute ionic charge to calculate equivalent concentration.
• Convert alkalinity and hardness to mg/L as CaCO₃ using 50 mg/meq.
• Total hardness is the sum of Ca and Mg hardness for this course.
• Carbonate hardness is the smaller of total hardness and total alkalinity.
• Estimate TDS from EC using the supplied 0.65 factor when instructed.
• Track settling, filtration, drying temperature and ignition carefully in solids calculations.
• Practise all five worked examples and the Module 1 Week 1 practice quiz questions.`},
    {type:'text', text:`Sources used for these notes: **Lecture 2 - Water Quality Parameters and Calculations** slides; both lecture-caption files; **Class Exercises**; **Class Exercises Detailed Solutions**; and **Module 1 - Formulae and Constants**. The duplicate Part 2 caption file was checked and contained identical content.`}
  ]
};

window.ENVENG_MODULE1_L2_KNOW_BLOCKS = [
  {type:'heading', text:'Lecture 2 - Water Quality Parameters and Calculations'},
  {type:'text', text:`This section is the focused revision list for **Week 1, Lecture 2**.

**Highest official mid-semester priorities:** laboratory solids calculations, total alkalinity and total hardness, and carbonate/non-carbonate hardness. Equivalent concentration is the method needed to complete the alkalinity and hardness calculations.

The lecturer also framed all five worked calculation types as testable. **TDS from electrical conductivity remains assessable lecture and formula-sheet content, but it is a secondary priority when revision time is limited.**`},
  {type:'text', text:`**Timestamp note:** the uploaded plain-text captions do not contain embedded timecodes. The Part 1 and Part 2 references below are **approximate** estimates based on transcript position.`},

  {type:'heading', text:'Assessment scope and supplied information'},
  {type:'exam', text:`**"this lecture will cover all of the different types of calculation questions that that you could be asked on the test."**

**Caption reference:** Part 1, approximately **01:35**.

What this means: all five example types are in scope - equivalent concentration, alkalinity, hardness, TDS from EC, and laboratory solids calculations.`},
  {type:'exam', text:`**"and for this module, you will be given a formula sheet which I have just uploaded on canvas."**

**Caption reference:** Part 1, approximately **02:30**.

What this means: practise selecting formulas and using units correctly. The equations themselves are supplied.`},
  {type:'exam', text:`**"And again I will be giving this formula on the formula sheet so you don't have to memorise."**

**Caption reference:** Part 1, approximately **11:15**.

What this means: you do not need to memorise the equivalent-concentration formula, but you do need to understand formula weight, absolute charge and the conversion from mg/L to meq/L.`},
  {type:'exam', text:`**"So hopefully, um, if we ask you, well, when we will ask you questions about this, like on the test or exam, for example, then we will also provide this table like the same one."**

**Caption reference:** Part 1, approximately **09:30**.

What this means: the periodic table is supplied. You must still know how to read atomic masses and include every atom in a compound.`},
  {type:'exam', text:`**"But for the purpose of this class, because it's just the first fundamentals of environmental engineering, I will only ask you questions with calcium and magnesium so that you don't get confused."**

**Caption reference:** Part 1, approximately **29:35**.

What this means: hardness calculations should focus on Ca²⁺ and Mg²⁺.`},
  {type:'exam', text:`**"And if I ask you a question about this, I would of course just give you the electrical conductivity. And so you would just have to multiply it by this factor okay."**

**Caption reference:** Part 1, approximately **44:30**.

What this means: for this calculation, identify the supplied electrical conductivity and multiply it by the lecture's 0.65 conversion factor to estimate TDS in mg/L.`},
  {type:'exam', text:`**"if I present this kind of question to you, it's because you can expect to see similar kind of templates when I assess you on this content, because I just want to know that you guys understood how to deal with these kinds of information."**

**Caption reference:** Part 1, approximately **47:50**.

What this means: the solids example is a model assessment question. Learn how to translate each laboratory step into a solids fraction.`},

  {type:'heading', text:'Definitions you need to know'},
  {type:'text', text:`• **mg/L:** milligrams of substance per litre of water
• **ppm:** parts per million; approximately equal to mg/L for the dilute water solutions in this course
• **meq/L:** milliequivalents of ionic charge per litre
• **equivalent weight:** formula weight divided by absolute ionic charge
• **alkalinity:** capacity of water to neutralise acids
• **hardness:** concentration effect of multivalent metal ions, using Ca²⁺ and Mg²⁺ in this course
• **carbonate hardness:** temporary hardness; the smaller of total hardness and total alkalinity
• **non-carbonate hardness:** permanent hardness; total hardness minus carbonate hardness
• **electrical conductivity (EC):** the ability of water to conduct electrical current because it contains dissolved ions, measured in µS/cm; it is used as a rapid indicator of ionic or dissolved-solids content
• **TDS:** solids dissolved in water or filtrate residue remaining after the specified drying step
• **TSS:** settleable solids plus filter-retained suspended solids in the class exercise
• **TFS:** solids remaining after ignition at 550 °C
• **TVS:** solids lost during ignition at 550 °C`},

  {type:'heading', text:'Formulas and calculations you must be able to use'},
  {type:'formula', text:`Equivalent concentration (meq/L) = concentration (mg/L) ÷ [formula weight ÷ |charge|]

Alkalinity as CaCO₃ (mg/L) = meq/L × 50

Hardness as CaCO₃ (mg/L) = meq/L × 50

TH = CaH + MgH

CH = min(TH, TA)

NCH = TH - CH

TDS (mg/L) ≈ 0.65 × EC (µS/cm)

TSS = settleable solids + filter-retained SS

TS = TSS + filtered-water residue at 110 °C

TDS = filtrate residue at 180 °C

TVS = TS - TFS`},
  {type:'text', text:`You should be able to reproduce these lecture results:
• 10 mg/L Na⁺ → about **0.4 meq/L**
• 10 mg/L SO₄²⁻ → about **0.2 meq/L**
• 122 mg/L HCO₃⁻ → **100 mg/L alkalinity as CaCO₃**
• 60 mg/L Ca²⁺ + 24 mg/L Mg²⁺ → **250 mg/L total hardness as CaCO₃**
• with TA = 120 mg/L as CaCO₃: **CH = 120** and **NCH = 130 mg/L as CaCO₃**
• EC = 750 µS/cm → **TDS ≈ 487.5 mg/L**
• solids example: **TSS = 20.0802 g/L, TS = 21.3177 g/L, TDS = 0.9467 g/L, TFS = 6.4547 g/L, TVS = 14.8630 g/L**`},

  {type:'heading', text:'Comparisons to understand'},
  {type:'text', text:`**mg/L vs meq/L:** mg/L measures mass; meq/L measures ionic charge.

**Formula weight vs equivalent weight:** formula weight accounts for the whole chemical formula; equivalent weight also divides by absolute charge.

**Alkalinity vs hardness:** alkalinity describes acid-neutralising capacity; hardness describes multivalent metal ions. Both are reported as mg/L as CaCO₃ so they can be compared in the carbonate-hardness calculation.

**Carbonate vs non-carbonate hardness:** carbonate hardness is limited by the smaller of TH and TA; any remaining hardness is non-carbonate hardness.

**Suspended vs dissolved solids:** suspended particles settle or remain on a filter; dissolved solids pass through the filter.

**Volatile vs fixed solids:** volatile solids are lost at 550 °C; fixed solids remain.`},

  {type:'heading', text:'Understand rather than memorise'},
  {type:'text', text:`Understand why charge matters, why different species use the CaCO₃ basis, why carbonate hardness cannot exceed either TH or TA, and how each laboratory operation separates a physical solids fraction.

Do not prioritise memorising the supplied equations or atomic masses. The lecturer said the formula sheet and periodic table would be provided. You still need enough familiarity to choose the correct relationship quickly.`},
  {type:'exam', text:`**"And these quizzes are not graded, so you can just do them without any stress, and they will remain open after being released for the rest of the semester."**

**Caption reference:** Part 2, approximately **16:45**.

Revision meaning: the Module 1 Week 1 practice quiz is formative, but it contains calculation practice the lecturer recommends using to identify gaps.`},

  {type:'heading', text:'Must-Know Checklist - Lecture 2'},
  {type:'text', text:`□ I can explain mg/L, ppm and meq/L.
□ I can calculate formula weight from a chemical formula and periodic table.
□ I use the absolute ionic charge.
□ I can convert mg/L to meq/L.
□ I can convert alkalinity and hardness to mg/L as CaCO₃.
□ I can calculate Ca hardness, Mg hardness and total hardness.
□ I can determine carbonate and non-carbonate hardness from TH and TA.
□ I can estimate TDS from EC using 0.65 and label the result approximate.
□ I can distinguish TS, SS, TSS, TDS, TFS and TVS.
□ I know what 110 °C, 180 °C and 550 °C represent in the lecture method.
□ I subtract the clean filter mass before calculating filter-retained SS.
□ I can solve all five lecture examples with units and reasonableness checks.
□ I know the formula sheet and periodic table are supplied, but the method remains assessable.`},
  {type:'text', text:`Lecture 2 sources: lecture slides and captions, class exercises, detailed worked solutions, and the Module 1 formula sheet.`}
];
