## What it was meant to do

An autonomous aerial drone for operation on the Martian surface, built for the **ISRO Robotics
Challenge 2025**.

Three jobs, none of which can use GPS, because Mars does not have any:

- **Real-time terrain mapping** of ground the drone has never seen.
- **Safe landing spot detection** — finding somewhere flat and clear enough to put down.
- **GPS-independent autonomous landing**, using onboard sensing alone.

## What happened

It kept hitting the ground.

There is a folder in the project archive named `fails`. It has six videos in it. They were recorded
across March 2025 and named by whoever was holding the phone at the time.


## What the crashes were

Autonomous landing without GPS is a stack of estimates, and every one of them can be the thing that
kills the aircraft. Altitude from a sensor that misreads a surface. Optical flow that loses lock
over low-texture ground. A terrain map that says flat where the ground is not. A controller that is
stable in the air and not on the way down.

The failure mode of a bad estimate on a drone is not a wrong number on a screen. It is the vehicle
arriving at the ground faster than intended.

## What it led to

The work did not stop when the drone did.

- The **custom ESP32 flight controller** — MPU6050 IMU, magnetometer, optical flow, EKF sensor
  fusion — came out of needing a control stack that could be understood all the way down. It later
  held a **25-minute stable hover in GPS-denied conditions**.
- The GPS-denied navigation problem became **DUNE**, and then the **drone–rover cooperative
  system** presented at NSSS 2026.

The question the drone could not answer in 2025 is the same question being answered now with UWB
anchors, and it is the same question an ultrasonic sensor on a dustbin lid was asking in 2018.

## Note

This project is on the site because it failed. A page of only successful work is a sales document.
