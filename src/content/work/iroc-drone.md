## What it was meant to do

The **ISRO Robotics Challenge (IRoC-U 2025)** asks for an autonomous aerial vehicle that can work
on a Mars-like terrain built by URSC. Mars has no GPS, so everything has to come from what the
drone carries.

The qualification round was the foundation: take off on its own, climb to at least 3 m, hold a
stable 30-second hover while watching for obstacles and its own battery, and come back down
safely. If the battery fell below 11 V or something got in the way, it had to start landing by
itself.

## What we built

- **Pixhawk 2.4.8** for flight control, with a **Raspberry Pi** on board running the autonomy code
  and talking to it over MAVLink.
- An **Intel RealSense D415 depth camera on a gimbal**, pointing straight down at −90° to map the
  ground and gauge altitude on the climb, then swinging to 0° to watch for obstacles once it was
  hovering, then back down for the descent.
- RS2212 920KV motors, 10×4.5 props, a 3S LiPo, a PET frame, and carbon-fibre landing legs on
  3D-printed mounts we designed, raised high enough to clear the gimbal.
- A manual override on the transmitter, so a person could take over at any moment.

## What went wrong

It kept hitting the ground.

There is a folder in the project archive named `fails`. It has six videos in it, recorded through
March 2025 and named by whoever was holding the phone at the time.

Two of the problems are worth writing down, because neither one shows up until you fly:

- **The LiDAR spun the drone.** The first plan used a 2D LiDAR for obstacle avoidance. Its
  spinning motor put a steady yaw torque on the airframe, and the drone slowly rotated clockwise.
  We replaced it with the depth camera on the gimbal.
- **Two controllers fought each other.** In DroneKit simulation, a self-adjusting PID on velocity
  gave smooth, stable hovers. On the real drone it clashed with the Pixhawk's own internal PID
  loops, and the aircraft went unstable. Fixed, hand-tuned gains turned out to be the answer.

## What it led to

The work did not stop when the drone did. Needing a flight stack I could understand all the way
down led to the **custom ESP32 flight controller**, which later held a 25-minute hover without
GPS. The GPS-denied navigation problem became **DUNE**, and then the **drone–rover** system.

## The team

Team MarsXplorers, IIT Indore: Dhriti Jha, Divyam Maru, Dhruv Bhardwaj, Ananya Shubhangi Sinha,
Digvijay Singh Pundir and me. Mentored by Prof. Abhirup Datta and Prof. I.A. Palani.

This project is on the site because it failed. A page of only successful work is a sales
document.
