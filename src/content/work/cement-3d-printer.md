## What it is

A large-format cartesian 3D printer that extrudes cement. Build volume **1000 × 1000 × 600 mm**.

Designed, sourced, assembled and integrated end to end.

## How it is built

- **X and Y on SFU1605 ball screws**, chosen for stiffness under the load a cement head puts on a
  gantry. Belts are cheaper and would have flexed.
- **Z on C-beam**, carrying the head and hopper mass.
- **Hopper-auger extrusion.** The auger meters the material; the hopper holds enough that a print
  is not interrupted to reload.
- **NEMA 23 steppers**, sized for the moving mass rather than for the footprint.
- **Arduino Mega with RAMPS 1.4** for motion control.
- Full CAD in **Fusion 360**, with component sourcing done directly rather than through a kit.

The hard part of a cement printer is not motion, it is material. Cement does not behave like
filament: it has a working window, it settles, and it will happily set inside the path it is
travelling through if the machine stops for long. Everything about the extrusion geometry is
downstream of that.

## Where it went

**Sold to, and deployed in, a research laboratory.**

That sentence is the whole point of the machine. It was not built to be demonstrated; it was built
to be used by people who paid for it and now depend on it.

## Note

Ten years before this, at thirteen, the first thing built for a paying customer was a study table
for a house a furniture workshop was fitting out. This is the same sentence with better tools.

*Built January to May 2026.*
