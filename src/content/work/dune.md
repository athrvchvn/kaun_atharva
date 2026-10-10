## The problem

A robot indoors has no GPS. Wheel odometry drifts, and it drifts worst exactly when you need it —
during turns, on slip, over uneven ground. Ultra-wideband radios fix the distance problem cheaply:
they measure time of flight, so a range is a geometric quantity, not a signal strength that swings
by tens of decibels over a few centimetres.

The radio was never the hard part. The gap is everything between *a radio that reports distances*
and *a robot that knows its pose*: per-board antenna-delay bias, non-line-of-sight ranges that come
back too long, anchors whose positions someone has to survey, two tags that can't range at the same
time, and no honest way to tell how good any of it is without independent ground truth. Open
implementations mostly stop at ranging. DUNE is the rest of the pipeline.

## What it is

An open-source, end-to-end UWB localisation stack for ground robots, on commodity **DW1000**
transceivers. Firmware, ranging protocol and channel scheduling, calibration, anchor survey,
localisation, filtering and validation — all released, with the calibration data and logs.

One architectural rule shapes it: **tags stream only raw ranges; all localisation runs on the
host.** Anchor geometry, calibration and estimator choice become configuration, and every run can
be replayed offline exactly as it ran live.

## The three ideas in it

- **A rigid-body moving-horizon estimator for two tags.** The rover carries two tags on a fixed
  0.55 m baseline. Instead of filtering each tag separately and hoping the two estimates agree, a
  single planar body pose generates both antenna positions, so the baseline is exact by
  construction. Each range enters the 2-second window at its own timestamp — necessary, because
  the two tags never range at the same instant. Heading falls out of the geometry.
- **Deployment without a tape measure.** Antenna-delay calibration and an anchor *self-survey*:
  a tag asks one anchor to range to another, giving every pairwise anchor distance, and
  multidimensional scaling recovers the layout. No external metrology.
- **A same-frame NLOS check.** The firmware reads total received power and first-path power from
  the *same* received frame. Their gap is a per-measurement confidence score, used to down-weight
  reflected ranges continuously rather than throwing them out with a hard threshold.

The two tags are serialised over a wired UART link, so only one radio is ever transmitting.
Collisions are impossible by construction rather than unlikely.

## How it was tested

A six-wheeled rocker–bogie rover, teleoperated in a **5 × 7 m** sand arena surrounded by **five
anchors**. Ground truth comes from an overhead Kinect tracking an AprilTag on the rover,
registered into the anchor frame to 13.5 mm — the error floor of every number below.

- **Static:** antenna-delay calibration alone leaves 199 mm RMSE. Adding the received-power
  correction, fitted leave-one-position-out so the figure is out-of-sample, brings it to
  **94 mm**.
- **Driving:** **184 mm median error across 18 runs**, and 126 mm on the estimator-comparison
  sequence — better than per-tag Kalman filtering on identical logged data.

The video above shows one run from both sides: the overhead camera's truth, and what the system
saw — raw ranges in grey, the estimate in red. The grey scatter is the honest part.

## Where it went

Submitted to **IEEE Robotics and Automation Practice**, with Adersh M and Prof. Ashish Dutta.
Built during my research internship at the **Centre for Mechatronics, IIT Kanpur**, sponsored by
NPTEL.

An earlier version of this work, with two anchors in a 2 × 2 m arena, got under 7 cm. The bigger
arena, five anchors and an independent camera reference are what produced the numbers I trust.
