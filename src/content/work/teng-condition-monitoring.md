## The idea

Rotating machines — compressors, motors, pumps — announce most faults through vibration before
they fail. Monitoring that usually means accelerometers, wiring and a power supply on every
machine.

A **triboelectric nanogenerator (TENG)** turns mechanical vibration into an electrical signal
without any power source of its own. Bolt one to a machine and the sensor is also its own
generator. The question is whether its signal carries enough information to diagnose faults.

## First: a live compressor monitor

The first version put a TENG on the housing of a compressor. The signal was scaled to 3.3 V,
sampled by an ESP32, and classified by an **SVM** into conditions like a loose bolt, a flow
restriction or a load on the crank. A web dashboard shows the live waveform, the machine's status,
the fault type and the model's confidence, with a control panel for injecting test faults.

## Then: a deep-learning pipeline

The second stage pushed accuracy and fault coverage further:

- **STL decomposition** splits each signal into trend, seasonal and residual parts, across
  **seven fault classes**.
- A **1D-CNN** extracts features.
- An **LSTM** models how they evolve over time.

Real-time data streamed from an **ESP32-C3** reaches **98.57% accuracy** — ahead of the same
pipeline on oscilloscope data (97.31%) and on a conventional accelerometer (95.83%). The whole
chain, from TENG to cloud prediction, was validated on hardware.

The self-powered sensor didn't just match the powered one. It did better.

## Where

Instrumentation & Control Lab, IIT Indore, under Prof. I.A. Palani.
