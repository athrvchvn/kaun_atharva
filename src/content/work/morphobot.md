## The premise

Drones are expensive to run. Hovering costs energy continuously just to stay up, and a battery
that could drive a vehicle for an hour will fly one for a few minutes.

So: where the ground is drivable, don't fly. Fly to the site, land, and become a ground vehicle.

That argument was made with numbers rather than asserted — a three-state LiPo decay model
(exponential, linear, inverse) simulated in MATLAB, comparing endurance on BLDC flight motors
against geared DC drive motors. The gap is not small, and it is the entire justification for the
machine.

## What it does

**In the air** it is a quadrotor. **On the ground** the rotor arms fold down and the shrouded
prop-guards become the wheels — the same appendages, repurposed, driven by geared DC motors
through a gear train. Two 60 kg·cm servos handle the transition.

**Then it reaches.** A 4-axis arm actuated by **shape memory alloy** — three SMA springs in
parallel, 5 V, 2.17 A — with a gripper, steered by hand gestures through a vision pipeline. SMA
was chosen because a disaster arm has to be light, and conventional actuators at that scale are
mostly mass.

The mission it was designed around: fly over a collapse scanning for signs of life, land, drive
through rubble and gaps too tight or unstable to fly in, and retrieve small objects — a water
bottle, a survival kit — for someone trapped.

## Two prototypes, and the number that changed

Both were analysed the same way: FEA static stress on the arms, wheels and frame, and CFD using
the Reynolds-Averaged Navier–Stokes equations at 5 m/s.

The second prototype **streamlined the wheel spokes to reduce drag**, and the result is the
clearest engineering win in the project:

| | prototype 1 | prototype 2 |
|---|---|---|
| coefficient of drag | 0.015 | **0.0082** |
| traction, Z axis | 0.244 N/m² | 0.133 N/m² |

**Drag nearly halved** — from spoke geometry alone. On a vehicle whose whole argument is energy
efficiency, that is the argument being won.

Arms and wheels were printed in Hyper PLA with a carbon-fibre frame. The FEA was run on ABS as a
substitute, since Hyper PLA wasn't in the material library — a compromise worth stating rather
than hiding.

## Credit where it's due

The multi-modal morphing concept follows published work on appendage repurposing for locomotion
plasticity (Sihite et al., *Nature Communications*, 2023). This is an implementation of that idea
with an SMA manipulator added, not a claim to have invented it.

Built with **Soham Mondal** and **Tejal Uplenchwar** under **Prof. I.A. Palani**, Mechatronics and
Instrumentation Lab, IIT Indore.
