## The problem

A shared lab full of expensive machines has no memory. Anyone can walk in, use a lathe or a laser
cutter, and walk out. When something breaks there is no record of who was on it, and no way to stop
someone untrained from starting it in the first place.

## What it does

Access control for physical machines, deployed across five of them.

- **ESP32 + MFRC522 RFID nodes** at each machine, with relay actuation on the machine's power.
  No card, no power.
- An **automated card dispenser** — N20 motor with IR sensing — so issuing access does not require
  a person standing there.
- A **Raspberry Pi 5 issuing station** for registering users and provisioning cards.
- A **Firebase Firestore backend** with a real-time web dashboard: who is on what, right now, and
  who was on it before.

Every machine session is traceable to a person. Training requirements can be enforced at the relay
rather than on a poster nobody reads.

## How it is built

Each node is standalone: it makes its own allow/deny decision from a locally cached credential set,
so a network drop does not take the workshop offline. State syncs back to Firestore when the
connection returns.

The dispenser was the awkward part. Reliably feeding one card and exactly one card, with a cheap
motor and an IR break-beam, took more revisions than the access logic did.

## Where it went

- **IITISoC Gold Medal**, Robotics domain.
- **Grand Innovation Award and Best Maker Award**, Indian Academic Makerspaces Summit 2025,
  IIT Gandhinagar. ₹62,500.
- **Patent in progress.**
- **Still running** in Tinkerers' Lab, IIT Indore. It is not a demo; it is infrastructure other
  people depend on, which means it has to keep working when nobody is looking at it.

It has since grown into a broader machine management system, and it is one of two projects that
may turn into something larger.
