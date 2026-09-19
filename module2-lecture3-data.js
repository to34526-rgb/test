window.ENVENG_MODULE2_L3_KNOW_BLOCKS = [
  {type:'heading', text:'Lecture 3 - The Decibel Scale and Reference Values'},
  {type:'text', text:`**Highest official mid-semester priorities:** calculate **sound intensity level** and **sound pressure level**, including conversions between intensity or pressure and the corresponding decibel level.

Combining equal and unequal sources remains useful formula-sheet and practice-quiz material, but it is **secondary when revision time is limited**. The worked exercises are retained so you can practise the full lecture method.`},

  {type:'heading', text:'1. Core idea - a decibel level is relative'},
  {type:'text', text:`The decibel scale compresses very large physical ranges into manageable logarithmic values.

**Absolute quantities:**
• sound power, \\(P\\), in watts (W)
• sound intensity, \\(I\\), in W/m²
• pressure amplitude, \\(\\Delta p\\), in pascals (Pa).

**Relative quantities:** power level, sound intensity level and sound pressure level, expressed in decibels (dB). A dB value is a logarithm of a ratio, so always identify what quantity and reference are being compared.

Write **dB IL** for intensity level and **dB SPL** for pressure level. The number may be equal, but the label shows which physical quantity was used.`},
  {type:'exam', text:`**LECTURER’S EXAM HINT**

**"For the purpose of the questions of this class, we mostly focus on sound intensity level and sound pressure level."**

**"And I'm not going to ask you questions related to sound power level,"**

What this means: prioritise **IL and SPL calculations**. Understand that power level leads to the same decibel relationship, but do not spend revision time on separate sound-power-level problems.`},

  {type:'heading', text:'2. Formula map'},
  {type:'image', src:'assets/module2-lecture3-levels.jpg', caption:'Lecture slide 15: power, intensity and pressure ratios can describe the same relative sound level.'},
  {type:'formula', text:`### Comparing two sounds
\\[
L=10\\log_{10}\\left(\\frac{P_2}{P_1}\\right)
=10\\log_{10}\\left(\\frac{I_2}{I_1}\\right)
=20\\log_{10}\\left(\\frac{\\Delta p_2}{\\Delta p_1}\\right)
\\]

Use the version matching the supplied quantity. Intensity depends on pressure amplitude squared, which is why pressure uses **20 log** rather than **10 log**.`},
  {type:'formula', text:`### Standard reference values
\\[
I_0=1.0\\times10^{-12}\\;W/m^2
\\]
\\[
\\Delta p_0=20\\times10^{-6}\\;Pa
\\]

\\(I_0\\) is the lecture's threshold-of-hearing intensity reference at 1000 Hz. These reference values are provided on the formula sheet.`},
  {type:'formula', text:`### Intensity ↔ intensity level
\\[
L_I=10\\log_{10}\\left(\\frac{I}{I_0}\\right)
\\]
\\[
I=I_0\\,10^{L_I/10}
\\]
• \\(L_I\\) = intensity level (dB IL)
• \\(I\\) = intensity (W/m²).`},
  {type:'formula', text:`### Pressure amplitude ↔ pressure level
\\[
L_p=20\\log_{10}\\left(\\frac{\\Delta p}{\\Delta p_0}\\right)
\\]
\\[
\\Delta p=\\Delta p_0\\,10^{L_p/20}
\\]
• \\(L_p\\) = sound pressure level (dB SPL)
• \\(\\Delta p\\) = pressure amplitude (Pa).`},
  {type:'exam', text:`**LECTURER’S EXAM HINT**

**"So it's quite important to be familiar with it. And I did include it in the formula sheet."**

**"And again intensity level. Okay. So these formulas are given. And it's just for you to know that when to use it. Okay. You don't have to memorise this kind of information because what is the point."**

What this means: do not waste time memorising the long equations. Learn to recognise **intensity vs pressure**, **level vs physical quantity**, and **equal vs unequal sources**.`},

  {type:'heading', text:'3. Exercises 1-2 - why IL and SPL agree'},
  {type:'text', text:`### Exercise 1
**Question:** Given
\\[
L=10\\log_{10}\\left(\\frac{I_2}{I_1}\\right),
\\]
show that
\\[
L=20\\log_{10}\\left(\\frac{\\Delta p_2}{\\Delta p_1}\\right).
\\]

For the same medium, \\(I=(\\Delta p)^2/(2\\rho v)\\). Substitute into the intensity ratio:
\\[
L=10\\log_{10}\\left[
\\frac{(\\Delta p_2)^2/(2\\rho v)}{(\\Delta p_1)^2/(2\\rho v)}
\\right]
\\]

The common \\(2\\rho v\\) cancels:
\\[
L=10\\log_{10}\\left(\\frac{\\Delta p_2}{\\Delta p_1}\\right)^2
\\]

Using \\(\\log(x^2)=2\\log(x)\\):
\\[
\\boxed{L=20\\log_{10}\\left(\\frac{\\Delta p_2}{\\Delta p_1}\\right)}
\\]`},
  {type:'text', text:`### Exercise 2
**Question:** Two sound waves have \\(\\Delta p_1=2\\times10^{-3}\\,Pa\\) and \\(\\Delta p_2=2\\times10^{-2}\\,Pa\\). Show that IL and SPL give the same answer.

Using pressure directly:
\\[
L_p=20\\log_{10}\\left(\\frac{2\\times10^{-2}}{2\\times10^{-3}}\\right)
=20\\log_{10}(10)
=\\boxed{20\\;dB\\;SPL}
\\]

Because \\(I\\propto(\\Delta p)^2\\):
\\[
\\frac{I_2}{I_1}=\\left(\\frac{\\Delta p_2}{\\Delta p_1}\\right)^2=10^2=100
\\]
\\[
L_I=10\\log_{10}(100)=\\boxed{20\\;dB\\;IL}
\\]

**Check:** a tenfold pressure-amplitude ratio corresponds to a hundredfold intensity ratio, so both levels must equal 20 dB.`},

  {type:'heading', text:'4. Exercises 3-6 - reference-value conversions'},
  {type:'text', text:`### Exercise 3
**Question:** What intensity corresponds to **40 dB IL**?

\\[
I=I_0\\,10^{L_I/10}
=(1\\times10^{-12})10^{40/10}
=(1\\times10^{-12})10^4
\\]
\\[
\\boxed{I=1\\times10^{-8}\\;W/m^2}
\\]

**Check:** 40 dB is four powers of ten above the reference intensity.`},
  {type:'text', text:`### Exercise 4
**Question:** What intensity level corresponds to \\(I=8\\times10^{-5}\\,W/m^2\\)?

\\[
L_I=10\\log_{10}\\left(\\frac{8\\times10^{-5}}{1\\times10^{-12}}\\right)
=10\\log_{10}(8\\times10^7)
\\]
\\[
=79.03\\;dB\\;IL\\approx\\boxed{79\\;dB\\;IL}
\\]`},
  {type:'text', text:`### Exercise 5
**Question:** What pressure amplitude corresponds to **50 dB SPL**?

\\[
\\Delta p=\\Delta p_0\\,10^{L_p/20}
=(20\\times10^{-6})10^{50/20}
\\]
\\[
=6.32\\times10^{-3}\\;Pa
\\approx\\boxed{6.3\\times10^{-3}\\;Pa}
\\]

**Caption correction:** the lecturer immediately corrects the spoken/slid wording from “sound intensity level” to **sound pressure level** because the unit is dB SPL.`},
  {type:'text', text:`### Exercise 6
**Question:** What pressure level corresponds to \\(\\Delta p=40\\times10^{-5}\\,Pa\\)?

\\[
L_p=20\\log_{10}\\left(\\frac{40\\times10^{-5}}{20\\times10^{-6}}\\right)
=20\\log_{10}(20)
\\]
\\[
=26.02\\;dB\\;SPL\\approx\\boxed{26\\;dB\\;SPL}
\\]`},

  {type:'heading', text:'5. Exercise 7 - doubling patterns'},
  {type:'text', text:`**Question:** Complete the level tables as pressure amplitude and intensity double.

**Pressure amplitude**
• \\(20\\times10^{-6}\\,Pa\\) → 0 dB SPL
• \\(40\\times10^{-6}\\,Pa\\) → 6 dB SPL
• \\(80\\times10^{-6}\\,Pa\\) → 12 dB SPL
• \\(160\\times10^{-6}\\,Pa\\) → 18 dB SPL.

Each doubling of pressure amplitude adds approximately **6 dB SPL**.

**Intensity**
• \\(1\\times10^{-12}\\,W/m^2\\) → 0 dB IL
• \\(2\\times10^{-12}\\,W/m^2\\) → 3 dB IL
• \\(4\\times10^{-12}\\,W/m^2\\) → 6 dB IL
• \\(8\\times10^{-12}\\,W/m^2\\) → 9 dB IL.

Each doubling of intensity adds approximately **3 dB IL**.

These are useful checks, not linear addition rules for arbitrary sources.`},
  {type:'exam', text:`**LECTURER’S EXAM HINT**

**"And this is just for your information to let you know that sadly sound is very confusing, but you don't have to memorise any of this."**

What this means: do not blindly memorise every 3/6/10/20 dB pattern. You should be able to derive or verify it using the supplied logarithmic equations.`},

  {type:'heading', text:'6. Secondary practice - Exercise 8, equal sources'},
  {type:'image', src:'assets/module2-lecture3-equal-sources.jpg', caption:'Lecture slide 29: equal sources can be combined by converting through intensity or by using the supplied shortcut.'},
  {type:'text', text:`**Question:** Three loudspeakers each produce **76 dB IL**. What is the total intensity level? Calculate it the hard and easy ways.

### Easy way - use this in a time crunch
For \\(n\\) equal independent sources:
\\[
L_{total}=L_{one}+10\\log_{10}(n)
\\]
\\[
=76+10\\log_{10}(3)
=\\boxed{80.8\\;dB\\;IL}
\\]

### Hard way - understand the logic
Intensity from one loudspeaker:
\\[
I_{one}=I_0\\,10^{76/10}=3.98\\times10^{-5}\\;W/m^2
\\]

Three sources:
\\[
I_{total}=3I_{one}=1.19\\times10^{-4}\\;W/m^2
\\]

Convert back to level:
\\[
L_{total}=10\\log_{10}\\left(\\frac{1.19\\times10^{-4}}{1\\times10^{-12}}\\right)
=\\boxed{80.8\\;dB\\;IL}
\\]

**Check:** three equal sources do not give \\(3\\times76\\) dB. The total is only 4.8 dB above one source because decibels are logarithmic.`},
  {type:'exam', text:`**LECTURER’S EXAM HINT**

**"And if you want to use the easy way, you can use the easy way if you want to use the hard way."**

**"We have this nice formula, which actually I also I debated on giving this, but I gave this in the formula sheet,"**

What this means: use \\(L_{total}=L_{one}+10\\log_{10}(n)\\) for equal sources. Understand the hard-way conversion, but the shortcut is explicitly allowed and supplied.`},

  {type:'heading', text:'7. Secondary practice - Exercise 9, unequal sources'},
  {type:'image', src:'assets/module2-lecture3-different-sources.jpg', caption:'Lecture slide 30: unequal source levels must be converted to intensity contributions before they are combined.'},
  {type:'text', text:`**Question:** What total intensity level results from three sources producing **20, 25 and 30 dB IL**?

The equal-source shortcut does **not** apply. Use:
\\[
L_{total}=10\\log_{10}\\left(
10^{L_1/10}+10^{L_2/10}+10^{L_3/10}
\\right)
\\]

Substitute:
\\[
L_{total}=10\\log_{10}\\left(
10^{20/10}+10^{25/10}+10^{30/10}
\\right)
\\]
\\[
=10\\log_{10}(100+316.23+1000)
=10\\log_{10}(1416.23)
\\]
\\[
\\boxed{L_{total}=31.5\\;dB\\;IL}
\\]

**Check:** the total must be above the largest individual level, 30 dB, but nowhere near the arithmetic sum of 75 dB. A result of 31.5 dB is reasonable.`},

  {type:'heading', text:'8. Fast equation-selection workflow'},
  {type:'text', text:`1. Identify whether the given quantity is **intensity (W/m²), pressure amplitude (Pa), dB IL or dB SPL**.
2. If comparing two values directly, use the ratio equation: **10 log for intensity**, **20 log for pressure**.
3. If comparing against hearing threshold, use \\(I_0\\) or \\(\\Delta p_0\\).
4. If given dB and asked for a physical quantity, use the rearranged exponential equation.
5. For multiple **equal** levels, use \\(L_{one}+10\\log_{10}(n)\\).
6. For multiple **different** levels, sum \\(10^{L_i/10}\\) contributions, then take \\(10\\log_{10}\\).
7. Attach **dB IL** or **dB SPL** to every final level answer.
8. Check that a combined level is greater than the largest individual level but is not the arithmetic sum of dB values.`},

  {type:'heading', text:'9. Common mistakes'},
  {type:'text', text:`• Confusing physical intensity \\(I\\) in W/m² with intensity level \\(L_I\\) in dB IL.
• Using 10 log for pressure; pressure requires **20 log**.
• Using 20 log for intensity; intensity requires **10 log**.
• Swapping \\(I_0=10^{-12}\\,W/m^2\\) and \\(\\Delta p_0=20\\times10^{-6}\\,Pa\\).
• Forgetting the minus sign in a reference exponent.
• Entering natural log, \\(\\ln\\), instead of base-10 log.
• Forgetting to divide the dB value by 10 or 20 when rearranging.
• Adding dB values arithmetically.
• Using the equal-source shortcut when levels differ.
• Omitting IL/SPL labels.
• Rounding intermediate intensities too early.
• Memorising formulas instead of choosing them from units and scenario.`},

  {type:'heading', text:'Must-Know Checklist - Lecture 3'},
  {type:'text', text:`□ I understand why the decibel scale is logarithmic and relative.
□ I distinguish power, intensity and pressure amplitude from their levels.
□ I use 10 log for power/intensity ratios and 20 log for pressure ratios.
□ I know which standard reference matches intensity and which matches pressure.
□ I can convert intensity ↔ dB IL.
□ I can convert pressure amplitude ↔ dB SPL.
□ I label answers as dB IL or dB SPL.
□ I can reproduce Exercises 1-6.
□ I can derive the 3 dB and 6 dB doubling checks rather than blindly memorising them.
□ If time permits, I combine equal sources with \\(L_{one}+10\\log_{10}(n)\\).
□ If time permits, I combine unequal source levels by summing linear intensity contributions.
□ I recognise Exercises 8 and 9 as secondary practice rather than the official mid-semester priority.
□ I know sound-power-level questions are not the assessment focus.
□ I will practise the matching weekly practice-quiz problems.`},
  {type:'text', text:`Sources: the complete 30-slide **Lecture 3 - The Decibel Scale and Reference Values** deck, both pages of the **class exercises - SOLUTIONS** PDF, the complete Lecture 3 captions, and the mid-semester-test preparation captions. This is intentionally the time-crunch version; no separate full Lecture 3 page has been added.`}
];
