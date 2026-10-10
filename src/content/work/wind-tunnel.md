## The constraint

Particle image velocimetry — seeding a flow with particles, lighting a thin sheet of it, and
tracking how the particles move — is the standard way to see a velocity field. It usually needs a
pulsed laser costing tens of thousands of dollars. We had a course budget.

## The tunnel

- A **transparent acrylic test section**, so the flow can be lit and filmed from outside.
- A **contraction chamber and diffuser** sized from first principles — area ratio, hydraulic
  diameters, Reynolds number, pressure losses through each section, and the total power the tunnel
  needs — then **3D-printed in PLA**.
- A **vacuum cleaner** as the suction source.
- **Incense sticks** for smoke, injected through a custom channel.
- The test object: a Dell wireless mouse, 9.5 × 5 cm.

## PIV without a laser

An **84-LED strip focused through a slit** makes a thin sheet of light that stands in for the laser
sheet. It isn't as bright or as thin, so the analysis has to do more of the work:

- frames are extracted and contrast-enhanced with **CLAHE**,
- **Farneback dense optical flow** in OpenCV computes motion between frames,
- **contour detection** traces streamlines.

The output is a velocity-magnitude field and streamlines over the test object — qualitative, not
lab-grade, but a real picture of the flow from parts that cost almost nothing.

## Who

An optics course project at IIT Indore, November 2025, with Dhruv Bhardwaj, K Reddy, Mohammed
Sadiq and Mittal Rout.
