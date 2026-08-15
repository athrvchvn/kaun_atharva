## The problem

A rover indoors has no GPS. Wheel odometry drifts, and it drifts worst exactly when you need it
most — during turns, on slip, over uneven ground. Given long enough, a rover that trusts its own
wheels will confidently tell you it is somewhere it is not.

DUNE is an attempt to give it an external reference that does not care about slip.

## What it does

Ultra-wideband localization for a six-wheeled rocker-bogie rover operating in GPS-denied
environments. Two fixed anchors, two-way ranging, trilateration.

- **Sub-7 cm positional accuracy** inside a 2×2 m arena.
- A **two-anchor, two-way ranging (TWR)** setup rather than the usual four-anchor grid — fewer
  anchors to place, fewer to power, and a faster deployment.
- **Dual-tag heading estimation.** Two tags on one chassis give orientation as well as position,
  which a single tag cannot.
- An **extended Kalman filter** fusing UWB ranges, wheel odometry and IMU, so the estimate stays
  usable when ranging drops out and does not lurch when it comes back.

The result is infrastructure-independent autonomous navigation: the rover carries what it needs to
know where it is.

## How it is built

The ranging runs on DW1000-class UWB hardware. The filter takes UWB as the absolute reference and
odometry plus IMU as the high-rate prediction, which is the right way round — odometry is smooth
but drifts, UWB is noisy but bounded.

Getting heading out of two tags is the part that took the longest. The geometry is simple; making
it stable when the two range estimates disagree is not.

## How it was checked

The video above is the validation, and it is two views of the same 66-second run.

**On the left**, an overhead camera watching an AprilTag on the rover's back — ground truth,
drawn as the yellow path.
**On the right**, the same run as the system saw it: five anchors as green triangles, raw UWB
ranging in grey, and the filtered position estimate in red.

Both are playing at the same point in time. The grey scatter is the honest part — raw UWB is
noisy, it disagrees with itself constantly, and the filter's job is to stay on the true path
anyway. Comparing the red line to the yellow one is the whole result.

## Where it went

- **Submitted to IEEE** for publication.
- Released as an **open-source library**, with the hardware implemented and tested rather than
  simulated.
- Built at the **Centre for Mechatronics, IIT Kanpur**, under Prof. Ashish Dutta, with Adersh M
  as PhD mentor.

## What is next

The rover is half the system. The other half is a drone that can land on the rover and use the
same anchor network to find its own way. That one is not working yet.
