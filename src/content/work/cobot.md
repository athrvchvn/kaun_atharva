## The problem

An industrial cobot arm is precise and completely literal. It goes where you tell it, in the
coordinates you give it, and it has no idea what a red bottle is or where one might be.

This project gave an **Addverb Syncro 5** two ways to be told — one where you say what you want in
plain English and the arm works the rest out, and one where you simply move your hand.

## Two control paradigms

**Autonomous retrieval.** An operator types or says something like *"pick up the red bottle."*

- **Llama 3 on Groq** extracts the target object class and any directional hint from the sentence.
- A **YOLO26e** model is configured to track only that class.
- The base joint sweeps in a **search pattern** while the camera feed is analysed for detections
  above threshold.
- Once found, pixel-space error `dx = x_object − x_frame_centre` drives a PID-like control law
  issuing `jogCartesianRelative` commands — **closed-loop visual servoing** that keeps the target
  centred in frame.
- The **RealSense depth stream** is queried at the object centroid, and the approach only triggers
  once the target is inside a safe grasp envelope.
- The arm descends, the gripper closes, and it retracts home.

No further human input after the sentence.

**Glove teleoperation.** An **ESP32 sensor glove** with finger-bend and thumb-pressure flex sensors
publishes over MQTT at ~20 Hz. A **Hoeffding Tree classifier**, trained online, maps a sliding
window of statistical features to one of seven gestures — neutral, forward, backward, left, right,
up, down — which become Cartesian jog commands on the tool frame.

## The engineering decision worth explaining

The transport layer is a **custom ASCII-over-TCP protocol on port 5000**, and it deliberately
**bypasses ROS middleware** for production control.

That sounds like heresy in a robotics project, and it's the right call: the visual servoing loop
has to react at camera frame rate — roughly 30 fps, about 33 ms a frame — and ROS message passing
introduces latency and jitter the loop can't absorb. Direct TCP packets dispatch in sub-milliseconds.

ROS 2 and Gazebo still exist in the system, running a parallel simulation environment. They just
aren't in the path when the arm is actually moving.

## The backend

A **C++17 server** runs on the cobot's own embedded controller inside a Docker container, bridging
the ASCII protocol to Addverb's real-time motor APIs over **EtherCAT (SOEM)**.

It is dual-threaded. A network thread parses commands byte by byte into shared state behind a
mutex; a control thread runs `doControl()` on a ~50 ms loop, gated by an atomic flag so it can be
paused safely during controller switches and gripper operations.

Three controller modes swap dynamically depending on the command: joint jogging, Cartesian axis
jogging, and linear velocity moves. Relative Cartesian commands are **rotation-aware** — a full
3×3 matrix is built from the end-effector's current roll-pitch-yaw so that "left" means left
relative to the tool, whatever orientation the arm happens to be in.

## Where it went

Featured on **Addverb Technologies' official blog**.

Built with a team of eight: Satyam Ashtikar, Yash Bhamare, Hrishab Mittal, Keshav N., Dhananjay
Dhumal, Sinam J. and Varad Pendse.
