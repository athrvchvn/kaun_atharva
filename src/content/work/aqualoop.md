## The problem

Two failures, at opposite ends of the same pipe.

**At the inlet**, incoming water quality is almost never checked in real time. Contamination is
found late, usually after somebody has already drunk it, and a building has no evidence of what
its supplier actually delivered.

**At the outlet**, conventional wastewater systems treat everything leaving a building as a single
waste stream. Water from a hand basin and water from a toilet go to the same place, so water that
was perfectly reusable is discarded along with water that wasn't.

Aqualoop is one module that addresses both, and it fits between any two pipes.

## Powering itself

The constraint that shapes the whole design: **sensors need power, and running a supply to a length
of pipe is usually why the system never gets installed.**

So the water pays for its own monitoring. A **micro-hydro turbine** sits in the flow, feeding an
energy-harvesting circuit that charges a battery, which runs the control module. No external
supply, no wiring job, no reason not to fit one.

## The water quality score

Three sensors — **pH, TDS, turbidity** — feed a **polynomial regression** running on the
microcontroller, which collapses them into a single quality score. That score is what the rest of
the system acts on.

A web server stores the readings and handles the parts a microcontroller shouldn't: historical
analytics, **periodic compensation for sensor degradation** (these sensors drift, and a system
that ignores that slowly starts lying), and suggestions for what the recycled water is fit for.

## What it does with the answer

**At the inlet** — continuous verification of the incoming supply, contamination detection on
sudden quality changes, real-time alerts, and an evidence trail of what the supplier provided.

**At the outlet** — the score drives **smart diverter valves**. Reusable water is routed to a
recycling tank for flushing and irrigation; contaminated water goes to the septic line. The
decision is sensor-driven rather than assumed, which is the entire point: the same building, the
same pipes, but the reusable fraction stops being thrown away.

## The interface

**AquaMonitor**, a mobile app with live readings, historical charts and CSV export, plus **SMS
alerts** for when the water goes out of spec and nobody is looking at a phone.

## Where it went

**Second place at the Vishwakarma Awards 2026**, among **1,054 teams**. ₹80,000.

Built by Atharva Chavan, KRM Sadiq, Vansh Ruhela, Diksha Jaurker and Kaushal Gangwar.
