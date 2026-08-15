## The problem

A soldier carrying a GPS tracker carries a battery, and a battery is a thing that runs out at the
worst possible time, needs charging, needs replacing, and adds weight.

But a soldier walking is doing mechanical work thousands of times an hour. The premise here is that
the boot should power its own electronics.

## Making a shoe generate electricity

A **triboelectric nanogenerator** produces charge when two dissimilar materials touch and separate
— which is exactly what a boot sole does with every step. The engineering problem is that a plain
TENG doesn't produce much.

The project's core idea is **laser surface texturing**: patterning the polymer surface with a laser
so there is more surface area making contact, and therefore more charge per step.

That produced a set of findings that had to be established experimentally rather than assumed:

- **Tribo pair.** PTFE–Al, PDMS–Al, polyimide–Al, FEP–Al and PET–Al were all characterised against
  each other.
- **Wavelength.** 355 nm gives maximum absorption in the tribo-negative material.
- **Pattern geometry.** Dot, line and mesh patterns were fabricated and compared. **Line patterns
  outperformed the others.**
- **Layer thickness.** Simulation and experiment across 50–500 µm PTFE. Surface potential rises
  with thickness, but output *falls* — the loss through a thicker dielectric at the electrode
  interface costs more than the potential gains. A result that runs opposite to intuition.
- **Real foot conditions.** Optimised against human foot force of 10–150 N, step frequencies of
  1–7 Hz, and tribo-layer gaps from 1 to 12 mm, with lifecycle testing on a dynamic shaker.

## Getting the power out

A TENG produces high-voltage, low-current, irregular AC — almost the least convenient electricity
there is. Turning that into something that charges a battery is a separate problem from generating
it.

**This is the part Atharva worked on:** the impedance-matching and rectification circuit, tuning
source impedance from 885 MΩ down to 88.4 MΩ by parallel capacitance. It improved battery charging
efficiency by **54%**. Patent filed.

## What was delivered

**Ten pairs of power-harvesting boots**, each integrating the TENG, the power-harvesting module,
GPS and RFID — plus RFID and GPS receiver units. Delivered to **ARDE, Pune** in July 2024.

The intended use: locating soldiers' positions without a battery to maintain, and self-powered
RFID for identification and attendance records.

## Note

A three-year DRDO/ARDB-funded project led by **Prof. I.A. Palani** at IIT Indore, with a team.
Atharva joined it in his first year — it was the first thing he worked on after being given access
to that lab, and it is the reason he was.
