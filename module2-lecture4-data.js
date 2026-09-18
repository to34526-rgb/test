window.ENVENG_MODULE2_L4_KNOW_BLOCKS = [
  {type:'heading', text:'Lecture 4 - Occupational Noise for Engineers'},
  {type:'text', text:`**Time-crunch priority:** know how occupational noise damages hearing, distinguish **age-related** from **noise-induced hearing loss**, understand the **85 dBA for 8 hours / 3 dB exchange-rate** standard, and calculate **Factor Daily Dose (FDD)**.

The mid-semester revision captions explicitly require the daily-dose calculation. Reproduce all five supplied exercises and use **FDD ≤ 1** as the compliance test.`},
  {type:'exam', text:`**LECTURER’S EXAM HINT**

**"So I want you guys to be familiar with how to calculate sound intensity, pressure amplitude, sound intensity level, sound pressure level, and the factor daily dose."**

What this means for Lecture 4: **Factor Daily Dose** is the calculation you must be able to perform. The earlier four quantities belong to Lectures 2 and 3.`},

  {type:'heading', text:'1. Hearing, noise and harm'},
  {type:'text', text:`A person with “normal” hearing can hear approximately **20-20,000 Hz**, distinguish close frequencies and detect intensity-level differences of about 1 dB.

At **high noise levels**, the major concern is hearing damage. At lower levels, noise can still interfere with sleep and cause adverse emotional responses such as annoyance, but those community effects are developed in Lecture 5.

Inside the cochlea, sound stimulates hair cells on the **basilar membrane**. Different regions respond to different frequencies. Noise-induced damage to these hair cells is effectively irreversible, so engineering practice prioritises **prevention before a worker notices hearing loss**.`},
  {type:'text', text:`**Loudness is frequency-dependent and person-specific.** The ear does not respond equally to every frequency. Lower-frequency sounds generally require a higher physical level to be heard as equally loud, while human hearing is more sensitive around approximately 2,000-4,000 Hz.`},

  {type:'heading', text:'2. Age-related vs noise-induced hearing loss'},
  {type:'image', src:'assets/module2-lecture4-audiograms.jpg', caption:'Lecture slide 9: age-related hearing loss slopes progressively at high frequencies, while noise-induced loss has a characteristic notch near 4000 Hz.'},
  {type:'text', text:`An **audiogram** measures hearing threshold across different frequencies.

**Age-related hearing loss:** hearing ability generally worsens progressively as frequency increases, producing a downward high-frequency trend.

**Noise-induced hearing loss:** commonly shows a pronounced **notch around 4000 Hz**, rather than a smooth high-frequency decline.

Repeated workplace exposure can cause progressive damage over years. The person may not notice until the damage has already occurred. The distinction matters clinically and can also matter for determining whether hearing loss is linked to workplace exposure.`},
  {type:'exam', text:`**LECTURER’S EXAM HINT**

**"However, if you think about what happens when we have noise induced hearing loss, which is different to the age and normal related from ageing,"**

**"then you can see that here in the profile for the audiogram, we would have this kind of notch in which the values just dip around 4000Hz."**

**"Okay. But just a key concept to remember this is how you can tell these two apart okay."**

What this means: recognise the **smooth age-related high-frequency decline** versus the **noise-induced 4000 Hz notch**.`},

  {type:'heading', text:'3. Other occupational hearing risks'},
  {type:'text', text:`Noise is not the only workplace hazard:
• **ototoxic chemicals** can damage hearing, including certain solvents and metals encountered in industry
• **impact/impulse noise** comes from short, intense events such as firearms, nail guns, forging, metal work, construction and mining
• repeated exposure can accumulate even when no single event appears immediately harmful.

Risk assessment must therefore consider level, duration, frequency of exposure, peak events, chemical co-exposure and whether hearing protection is correctly used.`},

  {type:'heading', text:'4. Occupational-noise limits'},
  {type:'image', src:'assets/module2-lecture4-dose-table.jpg', caption:'Lecture slide 16: the 3 dB exchange rate halves allowable exposure time whenever the A-weighted level rises by 3 dB.'},
  {type:'text', text:`The lecture applies the **equal-energy hypothesis**: a worker's ear can tolerate a maximum daily sound-energy dose.

Reference daily limit:
\\[
85\\;dBA\\text{ for }8\\;h
\\]

Using the **3 dB exchange rate**, every 3 dB increase doubles intensity and therefore halves allowable time:
• 85 dBA → 8 h
• 88 dBA → 4 h
• 91 dBA → 2 h
• 94 dBA → 1 h
• 97 dBA → 30 min
• 100 dBA → 15 min
• 103 dBA → 7.5 min.

Peak noise must remain below **140 dB at all times**.`},
  {type:'text', text:`**A-weighting, dBA:** an adjustment applied to instrument measurements to approximate the human ear's unequal sensitivity to different frequencies. For the lecture's dose calculations, treat the dBA level numerically in the same way as the decibel intensity level.`},

  {type:'heading', text:'5. Factor Daily Dose equation'},
  {type:'formula', text:`Physical dose is intensity multiplied by exposure time:
\\[
D=I\\,t
\\]

Using \\(I=I_0 10^{L/10}\\), the **Factor Daily Dose** relative to 85 dBA for 8 h is:
\\[
FDD=\\frac{10^{L/10}t}{10^{85/10}(8)}
\\]

Equivalent compact form:
\\[
FDD=10^{(L-85)/10}\\frac{t}{8}
\\]

• \\(FDD\\) = fraction of the permitted daily dose (dimensionless)
• \\(L\\) = A-weighted exposure level (dBA)
• \\(t\\) = exposure time (h).

Interpretation:
• \\(FDD<1\\): below the daily limit
• \\(FDD=1\\): exactly at the daily limit
• \\(FDD>1\\): exceeds the daily limit.`},
  {type:'formula', text:`For several exposure periods in one day, add their dose contributions:
\\[
FDD_{total}=\\sum_i\\frac{10^{L_i/10}t_i}{10^{85/10}(8)}
\\]

Do **not** average dBA values arithmetically. Convert each logarithmic level into its linear dose contribution, then add.`},

  {type:'heading', text:'6. Exercise 1 - derive FDD'},
  {type:'text', text:`**Question:** Given \\(I=I_0 10^{L/10}\\) and \\(D=It\\), show the FDD equation.

Actual exposure dose:
\\[
D=I_0 10^{L/10}t
\\]

Standard dose at 85 dBA for 8 h:
\\[
D_{standard}=I_0 10^{85/10}(8)
\\]

Form the ratio:
\\[
FDD=\\frac{D}{D_{standard}}
=\\frac{I_0 10^{L/10}t}{I_0 10^{85/10}(8)}
\\]

Cancel \\(I_0\\):
\\[
\\boxed{FDD=\\frac{10^{L/10}t}{10^{85/10}(8)}}
\\]

**Physical meaning:** FDD compares the day's received sound energy with the permitted reference energy.`},

  {type:'heading', text:'7. Exercise 2 - equivalent exposure'},
  {type:'text', text:`**Question:** Show that **88 dBA for 4 h** is equivalent to **85 dBA for 8 h**.

\\[
FDD=\\frac{10^{88/10}(4)}{10^{85/10}(8)}
=10^{(88-85)/10}\\left(\\frac{4}{8}\\right)
\\]
\\[
=10^{0.3}(0.5)\\approx1.00
\\]

Therefore 88 dBA for 4 h gives the same daily dose:
\\[
\\boxed{FDD\\approx1}
\\]

**Check:** a 3 dB increase approximately doubles intensity, while halving time cancels that increase.`},

  {type:'heading', text:'8. Exercise 3 - allowable time at 90 dBA'},
  {type:'text', text:`**Question:** For how long can a person be exposed to **90 dBA** and remain at the maximum daily dose?

Set \\(FDD=1\\):
\\[
1=\\frac{10^{90/10}t}{10^{85/10}(8)}
\\]

Rearrange:
\\[
t=8\\times10^{(85-90)/10}
=8\\times10^{-0.5}
=2.53\\;h
\\]
\\[
\\boxed{t\\approx2.52\\text{-}2.53\\;h}
\\]

This is about **2 h 32 min**.

**Check:** 90 dBA lies between 88 dBA/4 h and 91 dBA/2 h, so an allowable time between 2 and 4 hours is sensible.`},

  {type:'heading', text:'9. Exercise 4 - allowable level for a 10-hour day'},
  {type:'text', text:`**Question:** What maximum average level keeps a **10 h** workday within the daily dose?

Set \\(FDD=1\\):
\\[
1=\\frac{10^{L/10}(10)}{10^{85/10}(8)}
\\]

\\[
10^{L/10}=10^{85/10}\\left(\\frac{8}{10}\\right)
\\]

Take \\(\\log_{10}\\) of both sides:
\\[
\\frac{L}{10}=\\frac{85}{10}+\\log_{10}(0.8)
\\]
\\[
L=84.03\\;dBA\\approx\\boxed{84\\;dB\\;IL}
\\]

The boxed label follows the supplied solution. In occupational practice, the exposure has been discussed as A-weighted, so interpret it as approximately **84 dBA**.

**Check:** working longer than 8 hours requires a limit slightly below 85 dBA.`},

  {type:'heading', text:'10. Exercise 5 - mixed exposures'},
  {type:'text', text:`**Question:** A person receives **88 dBA for 2 h** and **85 dBA for 4 h**. Does this comply?

Add both dose contributions:
\\[
FDD=\\frac{10^{88/10}(2)+10^{85/10}(4)}{10^{85/10}(8)}
\\]

Separate them for clarity:
\\[
FDD=10^{0.3}\\left(\\frac{2}{8}\\right)+\\frac{4}{8}
\\]
\\[
=0.499+0.500=0.999\\approx1.0
\\]

\\[
\\boxed{FDD\\approx1.0:\\ \\text{yes, it just complies}}
\\]

**Check:** 88 dBA for 2 h uses half of its 4 h allowance; 85 dBA for 4 h uses half of its 8 h allowance. Together they use the full daily allowance.`},

  {type:'heading', text:'11. Hearing protection and total exposure'},
  {type:'text', text:`Above the maximum allowable dose, hearing protection is required. Options shown include correctly fitted earplugs and earmuffs.

**Important distinction:** noise-cancelling consumer headphones are **not** certified hearing-protection devices. They may reduce the listener's urge to turn music up, but that is not the same as verified occupational attenuation.

Monitoring devices can warn a user, but protection still depends on acting on the warning and using controls correctly.`},
  {type:'exam', text:`**LECTURER’S EXAM HINT**

**"And again, if we think about the noise cancelling headphones, they are actually not hearing protection devices."**

What this means: do not list ordinary noise-cancelling headphones as occupational PPE. Use rated, correctly fitted hearing protection as part of a proper risk-control approach.`},
  {type:'image', src:'assets/module2-lecture4-total-dose.jpg', caption:'Lecture slide 21: total noise dose includes both occupational and leisure exposure.'},
  {type:'text', text:`The workplace limit assumes little additional loud-noise exposure outside work. In reality:
\\[
\\text{Total noise dose}=\\text{occupational dose}+\\text{leisure dose}
\\]

Concerts, nightclubs and personal listening devices can add substantial exposure. Risk depends on the combination of **level, duration, repetition, distance and protection**, not simply which activity sounds louder.`},

  {type:'heading', text:'12. Fast calculation workflow'},
  {type:'text', text:`1. Write the reference: **85 dBA for 8 h**.
2. Identify every exposure pair \\((L_i,t_i)\\).
3. For one exposure, use \\(FDD=10^{(L-85)/10}(t/8)\\).
4. For several exposures, calculate and add each contribution.
5. If finding allowable time or level, set \\(FDD=1\\) and rearrange.
6. Compare the total with 1.
7. Check against the 3 dB exchange-rate table.
8. Separately check that no peak exceeds **140 dB**.`},

  {type:'heading', text:'13. Common mistakes'},
  {type:'text', text:`• Treating dBA values as linear and averaging or adding them directly.
• Forgetting the division by the standard dose, \\(10^{85/10}\\times8\\).
• Using minutes without converting to hours.
• Forgetting to add all exposure periods.
• Saying \\(FDD=1\\) exceeds the limit; it is exactly at the limit.
• Ignoring the separate 140 dB peak limit.
• Assuming a louder but very short event always gives more dose than a quieter long event.
• Confusing A-weighting with a different calculation method.
• Calling noise-cancelling headphones certified hearing protection.
• Treating the 85 dBA/8 h limit as equally protective for every individual; the lecturer notes it is based on an average person.
• Waiting for noticeable symptoms before controlling exposure.`},

  {type:'heading', text:'Must-Know Checklist - Lecture 4'},
  {type:'text', text:`□ I can distinguish age-related hearing loss from the noise-induced 4000 Hz notch.
□ I know noise damages cochlear hair cells and prevention is crucial.
□ I understand that chemicals and impulse noise can also threaten hearing.
□ I can explain A-weighting in plain language.
□ I know the 85 dBA for 8 h reference and 3 dB exchange rate.
□ I know peak noise must remain below 140 dB.
□ I can derive and apply the FDD equation.
□ I interpret FDD < 1, = 1 and > 1 correctly.
□ I can calculate allowable exposure time.
□ I can calculate allowable level for a stated workday.
□ I can add several exposure-dose contributions.
□ I can reproduce all five class exercises without looking.
□ I consider occupational and leisure exposure together.
□ I know noise-cancelling headphones are not occupational hearing protection.
□ I check units, especially minutes versus hours.`},
  {type:'text', text:`Sources: the complete 24-slide **Lecture 4 - Occupational Noise for Engineers** deck, the complete one-page **class exercises - SOLUTIONS** PDF, the complete Lecture 4 captions, and the mid-semester-test preparation captions. This is intentionally the time-crunch version; no separate full Lecture 4 page has been added.`}
];
