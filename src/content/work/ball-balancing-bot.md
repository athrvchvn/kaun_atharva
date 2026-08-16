## The problem

Balance a ball on a plate, and keep it at the centre no matter where it starts or how hard you
nudge it.

It sounds like a toy. It is the standard hard demonstration of closed-loop control, because the
system is **inherently unstable** — left alone, the ball always rolls off. There is no stable
resting state to fall back to. The only thing keeping it on the plate is the controller, running
fast enough, correcting continuously.

## The loop

Four steps, repeating as fast as the Raspberry Pi will allow:

1. **Locate.** An overhead Pi Cam captures frames. Convert to HSV, threshold and filter to segment
   the ball, then contour/blob detection and centroid to get position `(x, y)`.
2. **Compute.** A PID controller turns the position error into the platform tilt required to
   correct it.
3. **Actuate.** The Pi sends that tilt to an ESP32, which drives three servos to the angles found
   by inverse kinematics.
4. **Repeat.** Fast enough that the ball never gets ahead of the system.

## Why the mechanism is a 3RRS

The plate connects to the motor housing through three **Revolute–Revolute–Spherical** joint chains
— a 3RRS parallel manipulator, a three-legged Stewart platform.

Parallel rather than serial matters here: all three legs share the load and the platform is stiff,
so there is no accumulated slop down a chain of joints. For a system correcting continuously at
speed, mechanical backlash would show up directly as instability.

## The dynamics, and why they linearise nicely

The force pulling the ball down the tilted plate:

`F = mg·sinθ` → `mẍ = mg·sinθ`

For small tilts, `sinθ ≈ θ`, which gives:

`ẍ = gθ`

**Platform tilt directly sets ball acceleration.** That is the whole basis for the controller — and
it means the plant is a **double integrator**, `G(s) = g/s²`.

## Designing the PID rather than guessing it

With a PID controller `C(s) = Kp + Ki/s + Kd·s` on that plant, the closed-loop characteristic
equation is:

`s³ + g·Kd·s² + g·Kp·s + g·Ki = 0`

Rather than tune by trial and error, the gains were derived by **matching coefficients against a
critically damped third-order target**, `(s + a)³ = 0`:

`Kd = 3a/g` · `Kp = 3a²/g` · `Ki = a³/g`

where `a` is a single design parameter setting response speed. For `a = 2 rad/s` and `g = 9.81`:
**Kd = 0.612, Kp = 1.224, Ki = 0.816** — a triple real pole, no oscillation, fastest settling
without overshoot.

Worth stating the honest caveat the deck also states: in practice, unmodelled dynamics and loop
delays push the real response underdamped. The derivation gives you a principled starting point,
not a finished tune.

## Inverse kinematics

Tilt is described by two numbers: **θ** (how much) and **φ** (in which direction). The rotation
applied to the platform is `R = Rz(φ)·Rx(θ)`.

For each platform attachment point, `Pi' = R·Pi`, and each leg vector is `Li = Pi' − Bi` from its
fixed base joint. The servo angle follows from the projection of that leg, `θi = tan⁻¹(yi/xi)`,
subject to the link geometry.

PID runs **separately in X and Y**, and the two corrections combine into the single `(θ, φ)` tilt
command.

## Simulation before hardware

The full ball-and-platform model was built in **MATLAB/Simulink** — kinematics and control logic
together — and the controller evaluated across different initial conditions for stability,
response time and overshoot before anything was actuated in the real world.

The simulated response settles to zero with minimal steady-state error, and the experimental
behaviour tracked it closely.

## Where it could go

Stewart platforms of this kind are used for laser **beam steering**, **precision surgical
platforms** that compensate tremor, and **UAV payload stabilisation** — including landing a drone
on a moving platform, which is a problem showing up elsewhere in this timeline.

Built with **Dhruv Bhardwaj, Pratul Pan, Sanyuja Kharwandikar and Tirth Vinodrai Gohil**
for AA216 at IIT Indore.
