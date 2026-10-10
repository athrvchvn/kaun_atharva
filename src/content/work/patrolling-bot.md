## The brief

The first-year Makerspace course at IIT Indore asks every group to build a line follower — and
then add one feature of their own. We turned ours into a patrol robot: it already walks a fixed
route, so we gave it a camera and a way to call for help.

## What it does

- **Follows the line** with five TCRT5000 IR sensors and a PID loop running at 50 Hz, driving two
  geared DC motors through an L298N.
- **Streams live video** from a Raspberry Pi camera to a control-centre laptop over MJPEG.
- **SOS:** a red mushroom-head button on the robot sends a UDP alert to the control centre and
  puts the bot into a **360° rotation**, so whoever responds can find it — and whoever pressed it
  knows it worked.
- A **5-inch display** on board shows its status.

Everything runs on a **Raspberry Pi 4**, powered by two 18650 cells through a buck converter, in
a chassis designed in Fusion 360 and 3D-printed in PLA.

## Who

Group G8, first-year Makerspace course, IIT Indore, 2025.
