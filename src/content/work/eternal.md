## The problem

Warehouse racking inventory is counted by people on ladders and scissor lifts. It is slow, it is
periodic, and it is the kind of task where accuracy quietly degrades the longer someone does it.

Built for the **Inter IIT Tech Meet 14.0** problem statement on autonomous warehouse inventory.

## What it does

An autonomous mobile robot that drives warehouse aisles and scans racking from floor to top shelf.

- **Jetson Orin Nano** compute, running **ROS2 with Nav2**.
- **RPLidar A1 SLAM** with **AMCL localization** — the robot builds and holds its own map of the
  aisle.
- **Four-channel ultrasonic dynamic obstacle avoidance**, because a warehouse contains people and
  people move.
- Accuracy: **±7 cm horizontal, ±0.02 cm vertical.**

## The scanning mechanism

The part that made it work was mechanical, not computational.

- A **belt-driven Z-axis** scanning from **200 mm to 1800 mm**, driven by a NEMA 23 — so a single
  robot covers a full rack face without needing to be tall.
- **100% QR code detection** across the scan range, using Pyzbar.
- **LoRa wireless emergency stop** with **under 200 ms latency**. A machine that moves around
  people needs a stop that works when Wi-Fi does not.
- **Hot-swappable 6S LiPo BMS**, so the robot does not stop working to charge.

The vertical accuracy figure is the one worth reading twice: ±0.02 cm on the Z-axis is what makes
QR detection reliable at 1800 mm, and it came from the belt drive and frame stiffness rather than
from the software.

<figure class="vid">
  <video src="/media/projects/eternal-alt.mp4" poster="/media/projects/eternal-alt.jpg" controls playsinline preload="none" muted loop aria-label="Eternal scanning a rack face"></video>
</figure>

## Where it went

**Bronze Medal, Inter IIT Tech Meet 14.0**, among all IITs. Hardware design lead.

Also **4th position, Engineers Conclave** at the same meet, as presenting author on a paper on
laser micro-3D printing of silicon carbide microstructures.
