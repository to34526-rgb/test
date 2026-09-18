window.ENVENG_MODULE2_L2_KNOW_BLOCKS = [
  {type:'heading', text:'Lecture 2 - Acoustics for Engineers'},
  {type:'text', text:`**Time-crunch priority:** learn the equation chain, reproduce all **three class exercises**, and understand **reverberation** qualitatively. Do not spend your limited time practising the numerical internal-absorption or reverberation-time equations; the lecturer explicitly excludes those calculations.

**Highest priority from the mid-semester revision captions:**
• calculate **sound intensity**
• calculate **pressure amplitude**
• understand **reverberation**.

Sound intensity level and sound pressure level belong to the next lecture, while daily dose belongs to the occupational-noise lecture.`},

  {type:'heading', text:'1. Essential definitions'},
  {type:'text', text:`**Sound:** a physical pressure wave produced by oscillating particles in a medium.

**Hearing:** a person's perception of sound.

**Noise:** unwanted sound; whether a sound is unwanted can depend on the listener and context.

**Propagation:** transmission of energy through space or a medium.

**Longitudinal wave:** particles oscillate parallel and opposite to the direction in which the wave travels.

**Frequency, \\(f\\):** cycles per second, measured in hertz (Hz or s⁻¹).

**Wavelength, \\(\\lambda\\):** distance between equivalent points on consecutive waves, measured in metres (m).

**Sound power, \\(P\\):** sound energy transferred per time, measured in watts (W = J/s).

**Sound intensity, \\(I\\):** power passing through unit area, measured in W/m².

**Pressure amplitude, \\(\\Delta p\\):** size of the pressure oscillation around atmospheric pressure, measured in pascals (Pa). It is half the difference between maximum and minimum pressure.`},
  {type:'text', text:`**Sound vs hearing vs noise:** sound is the physical quantity engineers can measure directly; hearing and noise involve human perception.

**Atmospheric-pressure assumption:** for the lecture calculations, \\(P_{ATM}\\approx1\\times10^5\\,Pa\\). A sound wave creates very small pressure fluctuations above and below this value.`},

  {type:'heading', text:'2. Formula sheet - what each equation means'},
  {type:'exam', text:`**LECTURER’S EXAM HINT**

**"And actually I also provided you guys with the formula sheet for this module."**

**"And you can also see that we also have the values for this which have been calculated because sometimes when I ask you guys questions about like sound and there's air temperatures involved, then you need to think about just looking at this table to see."**

What this means: the formulas and standard speed-of-sound values are supplied. Revision time should go into choosing and applying them correctly, not memorising constants blindly.`},
  {type:'formula', text:`### Wave relationship
\\[
v=f\\lambda
\\]
• \\(v\\) = wave speed (m/s)
• \\(f\\) = frequency (Hz)
• \\(\\lambda\\) = wavelength (m)

Use when two of speed, frequency and wavelength are known.`},
  {type:'formula', text:`### Speed of sound in air
\\[
v_{air}=331.45+0.6T
\\]
• \\(v_{air}\\) = speed of sound in air (m/s)
• \\(T\\) = air temperature (°C)

Use when air temperature is given. Higher temperature gives a higher sound speed. Under the lecture assumption, speed does **not** depend on sound frequency.`},
  {type:'formula', text:`### Power and general intensity
\\[
P=\\frac{E}{t},\\qquad I=\\frac{P}{A}
\\]
• \\(P\\) = power (W)
• \\(E\\) = energy (J)
• \\(t\\) = time (s)
• \\(I\\) = sound intensity (W/m²)
• \\(A\\) = area through which the power passes (m²).`},
  {type:'image', src:'assets/module2-lecture2-intensity.jpg', caption:'Lecture slide 11: spherical spreading gives the inverse-square relationship between intensity and distance.'},
  {type:'formula', text:`### Intensity from a point source spreading spherically
\\[
I=\\frac{P}{4\\pi r^2}
\\]
• \\(r\\) = distance from source to receiver (m)

Use when sound power spreads evenly over a sphere and absorption is neglected. The physical meaning is the same power is distributed over a larger area as distance increases. Therefore \\(I\\propto1/r^2\\).`},
  {type:'image', src:'assets/module2-lecture2-pressure.jpg', caption:'Lecture slide 12: pressure amplitude links intensity to air density and sound speed.'},
  {type:'formula', text:`### Pressure amplitude and intensity
\\[
\\Delta p=\\sqrt{2\\rho vI}
\\]
or
\\[
I=\\frac{(\\Delta p)^2}{2\\rho v}
\\]
• \\(\\Delta p\\) = pressure amplitude (Pa)
• \\(\\rho\\) = density of the medium (kg/m³); lecture value for air near Earth's surface is about **1.3 kg/m³**
• \\(v\\) = speed of sound in the medium (m/s)
• \\(I\\) = intensity (W/m²).

Use when converting between pressure amplitude and intensity. If temperature is supplied rather than \\(v\\), find the sound speed first.`},

  {type:'heading', text:'3. Worked Exercise 1 - speed of sound'},
  {type:'text', text:`**Question:** What is the speed of sound in air at **0°C, 25°C and 100°C**?

Use \\(v_{air}=331.45+0.6T\\).

At 0°C:
\\[
v=331.45+0.6(0)=331.45\\;m/s
\\]

At 25°C:
\\[
v=331.45+0.6(25)=346.45\\;m/s
\\]

At 100°C:
\\[
v=331.45+0.6(100)=391.45\\;m/s
\\]

**Reasonableness check:** each 1°C rise adds 0.6 m/s, so the values must increase steadily with temperature.`},

  {type:'heading', text:'4. Worked Exercise 2 - inverse-square ratio'},
  {type:'text', text:`**Question:** What is the ratio of sound intensities when the distance from the source is increased by a factor of three?

For fixed source power:
\\[
I=\\frac{P}{4\\pi r^2}\\quad\\Rightarrow\\quad I\\propto\\frac{1}{r^2}
\\]

Let \\(r_2=3r_1\\):
\\[
\\frac{I_2}{I_1}=\\frac{r_1^2}{r_2^2}
=\\frac{r_1^2}{(3r_1)^2}
=\\frac{1}{9}
\\]

Therefore:
\\[
I_2=\\frac{I_1}{9}
\\]

The intensity **drops by a factor of 9**.

**Physical check:** tripling distance spreads the same power over nine times the spherical area, so one-ninth intensity is reasonable.`},

  {type:'heading', text:'5. Worked Exercise 3 - intensity and pressure amplitude'},
  {type:'text', text:`**Question:** A sound source in air has a power of **1 W**. At a distance of **2 m**, find:
a) the sound intensity
b) the pressure amplitude.

Assume air temperature \\(T=25°C\\) and density \\(\\rho=1.3\\,kg/m^3\\).

First find sound speed:
\\[
v=331.45+0.6(25)=346.45\\;m/s
\\]

### a) Intensity
\\[
I=\\frac{P}{4\\pi r^2}
=\\frac{1}{4\\pi(2)^2}
=0.0199\\;W/m^2
\\]

Rounded as in the supplied solution:
\\[
\\boxed{I\\approx0.02\\;W/m^2}
\\]

### b) Pressure amplitude
Using the rounded intensity from part (a):
\\[
\\Delta p=\\sqrt{2\\rho vI}
\\]
\\[
=\\sqrt{2(1.3)(346.45)(0.02)}
=4.24\\;Pa
\\]
\\[
\\boxed{\\Delta p\\approx4.24\\;Pa}
\\]

**Why these equations apply:** the source is treated as spreading power evenly over a sphere, then the intensity is converted into a pressure oscillation in air.

**Reasonableness check:** intensity is far below 1 W/m² because 1 W is distributed across the sphere at 2 m. The 4.24 Pa pressure fluctuation is also tiny relative to atmospheric pressure, consistent with the lecture explanation.`},

  {type:'heading', text:'6. Refraction and absorption - concepts only'},
  {type:'text', text:`**Refraction:** when sound enters a region or medium where its speed changes, frequency stays the same, wavelength changes and the propagation direction bends. Temperature gradients can therefore bend sound upward or downward.

**Internal absorption:** energy is lost within the transmitting medium, partly as heat. In large open spaces:
\\[
I=I_0e^{-2mx}
\\]
where \\(I_0\\) is source intensity, \\(I\\) is intensity after distance \\(x\\) (m), and \\(m\\) is the internal absorption coefficient (m⁻¹). High-frequency sound and dry conditions generally produce more absorption in the slide example.

**Boundary/external absorption:** important in small indoor spaces and at barriers. Surfaces split incident sound between absorbed and reflected portions. The coefficients depend on both material and frequency. Soft furnishings generally absorb more; hard surfaces generally reflect more.`},
  {type:'exam', text:`**LECTURER’S EXAM HINT**

**"And here for this kind of question, I'm not going to ask you like a numerical question about this,"**

**"but I just want you guys to understand that internal absorption coefficient can affect the intensity of the sound,"**

**"and that it depends on the distance, how far away you are from the source."**

What this means: understand the trend and variables in internal absorption, but do **not** prioritise numerical practice with \\(I=I_0e^{-2mx}\\).`},

  {type:'heading', text:'7. Reverberation - explicitly important'},
  {type:'image', src:'assets/module2-lecture2-reverberation.jpg', caption:'Lecture slide 18: reflected sound travels farther and arrives later than direct sound, producing reverberation.'},
  {type:'text', text:`**Reverberation** is the persistence of sound caused by many reflected paths arriving at the listener with different delays.

**Reverberation time, RT:** time for sound pressure to decrease to **1/1000 of its peak value**. It depends on room volume, shape and the absorption properties of its boundaries.

Large spaces with hard, reflective surfaces tend to have longer RT. Smaller spaces with absorbing materials tend to have shorter RT. Excessive reverberation increases background noise and reduces speech clarity, especially for people with hearing impairments and children learning in classrooms.

The lecture gives desirable classroom values of about **0.6 s for a small classroom** and **0.7 s for a large classroom** as context, not a stated memorisation requirement.`},
  {type:'exam', text:`**LECTURER’S EXAM HINT**

**"And this is why I, I'm not going to assess you specifically on this type of question,"**

**"but I just want you guys to be aware that we have to think about the different absorption of surfaces,"**

**"and that it can impact the reflection and reverberation time of the sound as it's travelling through the space."**

**"But for the purpose of this class, you just have to know about it. You don't have to actually apply it because then it would get a bit messy, I think."**

What this means: know what changes reverberation and why engineers control it. Do **not** practise detailed Sabine-equation room calculations for this assessment.`},

  {type:'heading', text:'8. Fast equation-selection workflow'},
  {type:'text', text:`1. **Temperature given, need sound speed** → \\(v_{air}=331.45+0.6T\\).
2. **Frequency and wavelength involved** → \\(v=f\\lambda\\).
3. **Power and ordinary area given** → \\(I=P/A\\).
4. **Point source and distance given** → \\(I=P/(4\\pi r^2)\\).
5. **Need pressure amplitude** → first obtain \\(I\\) and \\(v\\), then \\(\\Delta p=\\sqrt{2\\rho vI}\\).
6. **Distance changes by a factor** → use \\(I\\propto1/r^2\\); form a ratio before substituting.
7. **Internal absorption or reverberation design** → explain the concept and trend unless the question explicitly provides a simple application.`},

  {type:'heading', text:'9. Common mistakes'},
  {type:'text', text:`• Using diameter instead of radius in \\(4\\pi r^2\\).
• Forgetting to square the distance.
• Saying intensity falls by 3 when distance triples; it falls by **9**.
• Confusing **power (W)** with **intensity (W/m²)**.
• Using temperature directly in the pressure-amplitude equation instead of first calculating \\(v\\).
• Omitting the square root in \\(\\Delta p=\\sqrt{2\\rho vI}\\).
• Giving pressure amplitude in W/m² instead of Pa.
• Rounding too early; keep extra digits until the final answer.
• Confusing large-open-space **internal absorption** with indoor **boundary/external absorption**.
• Spending time on excluded numerical absorption or reverberation calculations.
• Memorising formulas without understanding when spherical spreading applies.`},

  {type:'heading', text:'Must-Know Checklist - Lecture 2'},
  {type:'text', text:`□ I can distinguish sound, hearing and noise.
□ I can define frequency, wavelength, power, intensity and pressure amplitude with units.
□ I can use \\(v=f\\lambda\\).
□ I can calculate sound speed from temperature.
□ I can calculate intensity using \\(I=P/(4\\pi r^2)\\).
□ I know intensity follows the inverse-square law.
□ I can calculate pressure amplitude using \\(\\Delta p=\\sqrt{2\\rho vI}\\).
□ I can reproduce all three supplied class exercises without looking.
□ I can explain refraction qualitatively.
□ I can distinguish internal absorption from boundary absorption.
□ I know material and frequency both affect boundary absorption.
□ I can define reverberation and explain how room size and surfaces affect it.
□ I know the lecturer excluded numerical internal-absorption questions.
□ I know the lecturer excluded detailed reverberation-time calculations.
□ I will revise basic logarithms before Lecture 3.`},
  {type:'text', text:`Sources: the complete 25-slide **Lecture 2 - Acoustics for Engineers** deck, the one-page **class exercises - SOLUTIONS** PDF, the complete Lecture 2 captions, and the mid-semester-test preparation captions. This is intentionally the time-crunch version; no separate full Lecture 2 page has been added.`}
];
