## Where it came from

On the ISRO challenge drone, our own controller and the Pixhawk's internal loops ended up fighting
each other. This board is the next step: a flight stack built from the PCB up, so every loop on it
is one I wrote.

## What it is

A custom flight-controller PCB built around an **ESP32**, with:

- an **MPU6050** IMU for attitude,
- a **magnetometer** for heading,
- an **optical flow sensor** to measure drift over the ground.

An **extended Kalman filter** fuses the three into one state estimate. Optical flow is what makes
holding position possible without GPS: it sees the ground sliding past, and the filter corrects
for it.

## Result

A **25-minute stable hover in GPS-denied conditions**.

The same EKF approach — IMU and optical flow, later with UWB ranges added — is what runs on the
drone in the drone–rover project.

Built during my research internship at the **STARC Lab, IIT Indore** (May–August 2025), under
Prof. Abhirup Datta.
