## The problem

A rover on unfamiliar ground — a disaster site, a tunnel, another planet — has no GPS and no
infrastructure to localise against. UWB can give centimetre-level positions, but only if somebody
has already put anchors in the right places. Somebody usually means a person walking in first.

So: let a drone do it.

## How it works

A four-phase cooperative architecture:

1. The **drone flies out and places UWB anchors** autonomously.
2. The anchors establish a local reference frame.
3. The **rover localises against them** at centimetre level.
4. Drone and rover keep talking through a **MAVLink / ROS 2 bridge**.

On the drone, an **extended Kalman filter running on an ESP32** fuses UWB ranges, optical flow
and IMU, because the drone also has to know where it is while it's placing anchors — without GPS.

The UWB side runs on DW1000 radios, the same family I used for DUNE at IIT Kanpur, in custom
casings designed in Fusion 360.

## Where it is

**Sub-10 cm localisation on live hardware.** I presented it as a first-author oral talk at
**NSSS 2026**, the ISRO-sponsored National Space Science Symposium, one of 40 students selected
nationwide.

I lead the project at the **STARC Lab, IIT Indore**, under Prof. Abhirup Datta. It is still
in progress.
