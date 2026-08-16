// The spine's source of truth. Used by the homepage, /work, and the pattern plot.
//
// `what`  = factual description, safe to derive from the résumés.
// `problem` = the personal annoyance that caused it, IN ATHARVA'S VOICE.
//   ⚠️ Mostly null on purpose. These cannot be invented — inventing a motivation
//   would break the one rule that matters. Atharva supplies them; see GAPS.md.

export type Thread = 'where' | 'unplugged' | 'ships';
export type Outcome =
  | 'sold' | 'deployed' | 'award' | 'patent' | 'published' | 'failed' | 'abandoned' | null;

export interface Project {
  slug: string;
  title: string;
  year: number;          // for the plot
  yearLabel: string;
  act: 0 | 1 | 2 | 3 | 4 | 5;
  what: string;
  problem?: string | null;
  threads: Thread[];
  outcome?: Outcome;
  note?: string;         // award detail, deployment, etc.
  deep?: boolean;        // has a written page in Phase 1
  media?: string | null; // base path, no extension: `${media}.mp4` + `${media}.jpg`
  mediaNote?: string;    // caption under the clip — REQUIRED when the media is a
                         // render or concept animation rather than real footage
  pair?: [string, string]; // two slugs whose images render side by side, for
                            // minor builds grouped into one beat (e.g. club projects)
  doc?: { href: string; label: string }; // a report or deck the visitor can open
  kind?: 'award';        // renders as an award beat, not a project beat
}

export const THREADS: Record<Thread, { label: string; question: string }> = {
  where:     { label: 'where am i?',  question: 'machines working out where they are' },
  unplugged: { label: 'unplugged',    question: 'machines that power themselves' },
  ships:     { label: 'it ships',     question: 'finished, and in someone else’s hands' },
};

export const projects: Project[] = [
  // ---------- act 0 — the workshops ----------
  { slug: 'office-chair', title: 'Office chair', year: 2019, yearLabel: '2019', act: 0,
    what: 'A broken chair pulled out of scrap and welded back together.',
    problem: 'i wanted an office chair. my father wouldn’t buy me one.',
    threads: ['ships'], outcome: 'failed', note: 'Broke again a few months later.' },

  { slug: 'study-table', title: 'Folding study table', year: 2020, yearLabel: '2020', act: 0,
    what: 'My part of a home interior my father was contracted for.',
    threads: ['ships'], outcome: 'sold', note: 'Delivered to a client at 13.' },

  { slug: 'extension-box', title: 'Portable extension box', year: 2018, yearLabel: '~2018', act: 0,
    what: 'The size of a power socket. Housed three devices plus a bulb socket.',
    threads: ['ships'], note: 'The first thing I remember making. No photograph survives.' },

  // ---------- act 1 — harshit, and then the sky ----------
  { slug: 'smart-dustbin', title: 'Smart dustbin', year: 2018, yearLabel: '2018', act: 1,
    what: 'An ultrasonic sensor and a servo. The lid opens when a hand comes near.',
    threads: ['where'], note: 'Age 11. The first measurement.' },

  { slug: 'smart-bulb', title: 'Phone-controlled bulb', year: 2019, yearLabel: '~2019', act: 1,
    what: 'A light switched on and off from a phone.', threads: [] },

  { slug: 'mini-piano', title: 'Mini piano', year: 2019, yearLabel: '~2019', act: 1,
    what: 'Buttons, tones, and a speaker.', threads: [] },

  { slug: 'specs-finder', title: 'Wireless specs finder', year: 2019, yearLabel: '~2019', act: 1,
    what: 'A wireless tag for locating a misplaced pair of glasses.',
    threads: ['where'] },

  { slug: 'soundbar', title: 'Soundbar', year: 2020, yearLabel: '~2020', act: 1,
    what: 'Built from scratch.', threads: [] },

  { slug: 'bag-weight-distributor', title: 'Bag weight distributor', year: 2021, yearLabel: '2021', act: 1,
    what: 'A school bag that redistributes its own load.',
    threads: ['ships'], outcome: 'award',
    note: 'INSPIRE Award MANAK, Department of Science & Technology, Govt. of India. ₹10,000.' },

  { slug: 'fanta-santa', title: 'The Santa that dispensed Fanta', year: 2021, yearLabel: '~2021', act: 1,
    problem: 'me and a friend were bored on christmas.',
    what: 'A Santa with lit-up eyes, wired to a bottle, dispensing Fanta from his urinal, which was the entire idea.',
    threads: [], note: 'Made to pass the time. It worked.' },

  // ---------- act 3/4 — iit indore ----------
  { slug: 'gps-shoes', title: 'Power-harvesting army boots — laser-textured TENG', year: 2025, yearLabel: '2021–24', act: 3,
    what: 'An army boot that generates its own electricity from walking. A triboelectric nanogenerator in the sole is laser-textured at 355 nm to raise its output, then rectified and stored to run GPS and RFID for locating and identifying soldiers — with no battery to change. Ten pairs were built and delivered to ARDE, Pune.',
    threads: ['where', 'unplugged'], outcome: 'deployed', deep: true,
    note: 'DRDO / ARDB-funded, three years, led by Prof. I.A. Palani at IIT Indore. My first project in that lab: the impedance-matching and rectification circuit, which improved charging efficiency by 54%. Patent filed.' },

  { slug: 'alzheimers-shoes', title: 'Gait-analysis shoes for early Alzheimer’s detection', year: 2025, yearLabel: '2025', act: 4,
    what: 'A wearable shoe embedded with TENG sensors to monitor gait abnormalities.',
    threads: ['where', 'unplugged'], outcome: 'abandoned',
    note: 'I stopped for three reasons: my own expertise ceiling at the time, TENG not showing promise, and training data that would have needed hospital access to patients.' },

  { slug: 'micromouse', title: 'Micromouse', year: 2025, yearLabel: '2024–25', act: 4,
    what: 'A maze-solving robot.', threads: ['where'] },

  { slug: 'morphobot', title: 'Morphobot — a drone that lands and drives away', year: 2025, yearLabel: '2025', act: 4,
    problem: 'flying is expensive. if the ground is drivable, don’t fly.',
    what: 'A vehicle that flies to a site, lands, folds its rotor arms down and drives on the rotor guards as wheels — then reaches into rubble with a 4-axis arm actuated by shape memory alloy and steered by hand gestures. Built for disaster response: search from the air, work on the ground.',
    threads: ['where'], deep: true,
    note: 'Two prototypes. Mechatronics & Instrumentation Lab, IIT Indore, under Prof. I.A. Palani. With Soham Mondal and Tejal Uplenchwar.' },

  { slug: 'iroc-drone', title: 'NoGPS autonomous drone — ISRO Robotics Challenge', year: 2025, yearLabel: '2025', act: 4,
    what: 'An autonomous aerial drone for Martian-surface operation: real-time terrain mapping, safe-spot detection, GPS-independent landing.',
    threads: ['where'], outcome: 'failed', deep: true,
    note: 'IROC 2025. There is a folder in my archive named “fails”. It has six videos in it.' },

  // NB: this IS the line follower. The course set the line-following brief;
  // the patrolling behaviour was the team's own addition. One project, not two.
  { slug: 'patrolling-bot', title: 'Line follower → patrolling bot', year: 2025, yearLabel: '2024–25', act: 4,
    problem: 'the makerspace course asked for a line follower. we had to add one feature of our own.',
    what: 'A line-following robot that streams live camera footage back to a PC. An SOS button on the device notifies the control centre and puts the bot into a 360° rotation so it can be found.',
    threads: ['where'],
    note: 'First-year Makerspace course project, IIT Indore.' },

  // Two minor club builds, shown as one paired beat rather than as two
  // projects competing for the same weight as the deep ones. `pair` points
  // ProjectBeat at two images shown side by side instead of a single hero.
  { slug: 'robotics-club', title: 'Quadruped & robotic arm', year: 2025, yearLabel: '2024–25', act: 4,
    what: 'A four-legged walking robot and a multi-axis manipulator arm.',
    threads: ['where'],
    note: 'Robotics Club projects, IIT Indore.',
    pair: ['quadruped', 'robotic-arm'] },

  { slug: 'esp32-flight-controller', title: 'Custom ESP32 flight controller', year: 2025, yearLabel: '2025', act: 4,
    what: 'A custom flight-controller PCB integrating MPU6050 IMU, magnetometer and optical flow sensor. EKF sensor fusion achieving a 25-minute stable hover in GPS-denied conditions.',
    threads: ['where'], note: 'STARC Lab, IIT Indore.' },

  { slug: 'mms', title: 'Universal Machine Management System (RFID access control)', year: 2025, yearLabel: '2025–', act: 4,
    what: 'Full-stack access-control infrastructure across five lab machines: ESP32 + MFRC522 RFID nodes with relay actuation, an automated card dispenser, an RPi 5 issuing station, and a Firebase backend with a real-time dashboard.',
    threads: ['ships'], outcome: 'deployed', deep: true,
    note: 'IITISoC Gold Medal. Grand Innovation & Best Maker Award, IAMS 2025, ₹62,500. Patent in progress. Operational in Tinkerers’ Lab, IIT Indore.' },

  { slug: 'eternal', title: 'Eternal — autonomous warehouse inventory robot', year: 2025, yearLabel: '2025', act: 4,
    what: 'A Jetson Orin Nano-powered AMR: ROS2/Nav2, RPLidar A1 SLAM, AMCL localization, four-channel ultrasonic obstacle avoidance. ±7 cm horizontal, ±0.02 cm vertical. Belt-driven Z-axis scanning 200–1800 mm with 100% QR detection.',
    threads: ['where'], outcome: 'award', deep: true,
    note: 'Bronze Medal, Inter IIT Tech Meet 14.0, among all IITs.' },

  { slug: 'aqualoop', title: 'Aqualoop — in-pipe water monitoring and selective recycling', year: 2026, yearLabel: '2026', act: 4,
    what: 'A module that fits between any two pipes and powers itself from the water running through it. A micro-hydro turbine charges the electronics; pH, TDS and turbidity sensors feed a polynomial regression on the microcontroller to produce a live water quality score. At a building inlet it verifies the incoming supply and flags contamination. At the outlet it drives smart diverter valves, splitting used water into a recycling tank or the septic line — instead of treating everything as one waste stream.',
    threads: ['unplugged', 'ships'], outcome: 'award', deep: true,
    note: 'Second place, Vishwakarma Awards 2026 — among 1,054 teams. ₹80,000. Team of 5.' },

  // Sits immediately after Aqualoop: the award is what happened to that project,
  // so it reads as an outcome rather than as a separate achievement.
  { slug: 'vishwakarma-award', kind: 'award',
    title: '2nd Prize — Vishwakarma Awards, Intelligent Machines', year: 2026, yearLabel: '2026', act: 4,
    what: 'Second place among 1,054 teams, with a cash prize of ₹80,000, for Aqualoop — the in-pipe water quality monitoring and selective recycling system.',
    threads: [],
    note: 'Awarded by the Maker Bhavan Foundation. Team lead.' },

  { slug: 'wind-tunnel', title: 'Low-speed wind tunnel with LED-based PIV', year: 2026, yearLabel: '2025–26', act: 4,
    what: 'A low-cost tabletop wind tunnel with transparent test section and custom contraction–diffuser geometry, plus an LED-based PIV alternative using OpenCV optical flow to visualise velocity fields.',
    threads: [] },

  { slug: 'ball-balancing-bot', title: 'Ball balancing bot — a Stewart platform that will not let a ball fall off', year: 2026, yearLabel: '2026', act: 4,
    what: 'A 3RRS parallel manipulator that keeps a ball balanced at the centre of a tilting plate. An overhead Pi Cam finds the ball by HSV threshold and blob centroid, a PID controller works out the tilt needed to correct it, inverse kinematics converts that tilt into three servo angles, and the loop repeats fast enough that the ball never gets away.',
    threads: ['where'], deep: true,
    note: 'AA216 Flight Mechanics & Classical Control, IIT Indore. Group project of five.',
    doc: { href: '/docs/ball-balancing-bot.pdf', label: 'the course deck' } },

  { slug: 'teng-condition-monitoring', title: 'Self-powered IoT fault detection — TENG + STL–CNN–LSTM', year: 2026, yearLabel: '2026', act: 4,
    what: 'A deep-learning fault detection pipeline for rotating machinery using TENG sensors as self-powered vibration transducers. STL decomposition across seven fault classes, 1D-CNN feature extraction, LSTM temporal modelling. 98.57% accuracy — beating oscilloscope (97.31%) and accelerometer (95.83%) baselines.',
    threads: ['unplugged'], outcome: 'published' },

  { slug: 'cement-3d-printer', title: 'Large-format cartesian cement 3D printer', year: 2026, yearLabel: 'Jan–May 2026', act: 4,
    what: '1000×1000×600 mm. SFU1605 ball-screw X/Y, C-beam Z-axis, hopper-auger extrusion, NEMA 23 steppers, Arduino Mega + RAMPS 1.4. End-to-end component sourcing, Fusion 360 CAD, and hardware integration.',
    threads: ['ships'], outcome: 'sold', deep: true,
    note: 'Sold to and deployed in a research laboratory.' },

  // Supersedes the old 'addverb-glove' entry: the glove is one of this system's
  // two control paths, not a project of its own. Scope taken from the team's
  // technical report (Feb 2026).
  { slug: 'cobot', title: 'Autonomous & glove-controlled collaborative robot', year: 2026, yearLabel: 'Feb 2026', act: 4,
    what: 'Two ways to drive an Addverb Syncro 5 six-axis cobot. Say “pick up the red bottle” and an LLM extracts the intent, a depth camera sweeps the workspace, YOLO closed-loop visual servoing centres the target, and the arm grasps and retracts unaided. Or wear an ESP32 sensor glove and fly it by hand, seven gestures classified online at ~20 Hz.',
    threads: ['where'], outcome: 'published', deep: true,
    note: 'Team of 8. Featured on Addverb Technologies’ official blog.' },

  // Finished and published, so it sits in act 4 rather than act 5. Act 5 is
  // reserved for the work that is still open — the closing line there ("that
  // last one is not working yet") points at drone-rover, which is why DUNE
  // leaving act 5 makes that act read correctly rather than emptying it.
  // Note this is IIT Kanpur, not Indore like the rest of act 4; act 4 has no
  // visible heading naming an institution, so nothing on the page contradicts.
  { slug: 'dune', title: 'DUNE — Dual UWB Navigation Engine', year: 2026, yearLabel: '2026', act: 4,
    what: 'UWB-based indoor localization for a six-wheeled rocker-bogie rover in GPS-denied environments. Sub-7 cm positional accuracy in a 2×2 m arena via two-anchor two-way ranging. Dual-tag heading estimation with EKF fusion of UWB, wheel odometry and IMU.',
    threads: ['where'], outcome: 'published', deep: true,
    note: 'IEEE paper submitted. Open-source library plus hardware. Centre for Mechatronics, IIT Kanpur.' },

  { slug: 'drone-rover', title: 'GPS-denied UWB drone–rover cooperative navigation', year: 2026, yearLabel: '2026–', act: 5,
    what: 'A four-phase cooperative autonomy architecture: a drone autonomously deploys UWB anchors for centimetre-level rover localization. Onboard EKF fuses UWB, optical flow and IMU; a MAVLink/ROS2 bridge carries drone–rover comms.',
    threads: ['where'], outcome: 'published',
    note: 'First-author oral, NSSS 2026 (ISRO-sponsored) — selected among 40 students nationwide. Sub-10 cm on live hardware.' },
];

export const deepProjects = projects.filter((p) => p.deep);
export const byAct = (act: number) => projects.filter((p) => p.act === act);
