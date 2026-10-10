// Single source of truth for the site. The homepage reel, the "first ones"
// grid, the quick-look sheet and every /work/<id> page all read from here.
//
// Every fact below is taken from a source document — the résumé, a project
// report, the DUNE paper, the DRDO completion report — not from memory.
// If something changes, change it here and in src/content/work/<id>.md.
//
// Media lives in public/media/projects/ and is named after the id.

export interface Project {
  id: string;            // also the URL: /work/<id>
  year: string;
  title: string;
  line?: string;         // short subtitle, shown as the eyebrow
  say: string;           // one plain-English sentence for the reel
  body: string;          // what it is, technically
  quote?: string;
  note?: string;         // context: where, who, what happened
  facts?: [string, string][]; // label/value rows on the project page
  video?: string;        // public/media/projects/<video>.mp4
  img?: string;
  extras?: string[];
  caption?: string;      // required when the still is a render or CAD
  badVideo?: boolean;    // clip is weak; lead with photos instead
  deck?: { href: string; label: string };
  page?: boolean;        // has a long write-up at src/content/work/<id>.md
}

// ── the first ones, 2018–2022 ────────────────────────────────────────────
export const early: Project[] = [
  { id: 'smart-dustbin', year: '2018', title: 'smart dustbin', line: 'the first one · age 11',
    say: 'a dustbin that opens when you walk up to it.',
    body: 'an ultrasonic sensor, a servo, and a dustbin lid. the lid opened when you walked up to it.',
    video: 'smart-dustbin' },
  { id: 'smart-bulb', year: '~2019', title: 'phone-controlled bulb',
    say: 'a bulb you could switch from a phone.',
    body: 'a bulb you could switch on and off from a phone.', video: 'smart-bulb' },
  { id: 'mini-piano', year: '~2019', title: 'mini piano',
    say: 'a small keyboard that played notes.',
    body: 'buttons, tones and a speaker. a small keyboard that played notes.', video: 'mini-piano' },
  { id: 'specs-finder', year: '~2019', title: 'wireless specs finder',
    say: 'for a pair of glasses that kept going missing.',
    body: 'a wireless tag for finding a pair of glasses that kept going missing.', video: 'specs-finder' },
  { id: 'soundbar', year: '~2020', title: 'soundbar',
    say: 'a homemade soundbar.', body: 'a soundbar, built from scratch.', video: 'soundbar' },
  { id: 'bag-weight-distributor', year: '2021', title: 'bag weight distributor',
    say: 'a school bag that spreads its own load.',
    body: 'a school bag that redistributes its own load.',
    note: 'INSPIRE award MANAK, department of science & technology, government of india. my parents were there.',
    video: 'bag-weight-distributor' },
  { id: 'fanta-santa', year: '~2021', title: 'the santa that dispensed fanta',
    say: 'me and a friend were bored on christmas.',
    body: 'a santa with lit-up eyes, wired to a bottle, dispensing fanta. me and a friend were bored on christmas.',
    video: 'fanta-santa' },
];

// ── projects, newest first ───────────────────────────────────────────────
export const work: Project[] = [
  { id: 'dune', year: '2026', title: 'DUNE', line: 'dual-tag UWB navigation engine',
    say: 'an open-source system that lets a ground robot work out where it is, and which way it’s facing, indoors without GPS.',
    body: 'an open-source indoor positioning system for ground robots, built on low-cost DW1000 UWB radios. it covers the whole pipeline: firmware, ranging and channel scheduling, antenna-delay calibration, anchor self-survey, localisation, filtering and validation. two tags on a fixed 0.55 m baseline give the robot its heading as well as its position, through a rigid-body moving-horizon estimator. tested on a rocker–bogie rover in a 5 × 7 m arena with five anchors, against overhead-camera ground truth: 94 mm static error and 184 mm median error across 18 driven runs, better than per-tag kalman filtering on the same data.',
    note: 'research internship at the centre for mechatronics, IIT Kanpur (NPTEL-sponsored), under prof. ashish dutta with adersh m. submitted to IEEE Robotics and Automation Practice.',
    facts: [['where', 'centre for mechatronics, IIT Kanpur'], ['role', 'first author'], ['with', 'adersh m · prof. ashish dutta'], ['status', 'submitted to IEEE RA-P · open source']],
    video: 'dune', extras: ['dune-1.jpg', 'dune-2.jpg', 'dune-3.jpg', 'dune-4.jpg', 'iitk-intern.jpg'], page: true },

  { id: 'teng-condition-monitoring', year: '2025–26', title: 'self-powered fault detection', line: 'TENG sensing + STL–CNN–LSTM',
    say: 'self-powered sensors that listen to a machine and notice when something is going wrong.',
    body: 'fault detection for rotating machinery using triboelectric nanogenerators as self-powered vibration sensors, streamed over an ESP32-C3. STL decomposition across seven fault classes, a 1D-CNN for features and an LSTM over time reach 98.57% accuracy — ahead of oscilloscope (97.31%) and accelerometer (95.83%) baselines.',
    note: 'instrumentation & control lab, IIT Indore, under prof. i.a. palani.',
    facts: [['where', 'instrumentation & control lab, IIT Indore'], ['supervisor', 'prof. i.a. palani'], ['accuracy', '98.57% across 7 fault classes']],
    video: 'teng-condition-monitoring', page: true },

  { id: 'eternal', year: 'oct–dec 2025', title: 'eternal', line: 'warehouse inventory robot',
    say: 'a robot that drives through a warehouse and reads every QR code on the shelves.',
    body: 'a jetson orin nano AMR: ROS2/Nav2, RPLidar SLAM, AMCL localisation and four-channel ultrasonic obstacle avoidance. a belt-driven Z-axis scans shelves from 200 to 1800 mm and reads every QR code, with a LoRa wireless e-stop and a hot-swappable battery.',
    note: 'hardware & design lead. bronze medal at inter IIT tech meet 14.0, IIT Patna, among all IITs.',
    facts: [['role', 'hardware & design lead'], ['event', 'inter IIT tech meet 14.0'], ['award', 'bronze medal']],
    video: 'eternal', extras: ['inter-iit-award.jpg', 'inter-iit-award-1.jpg'], page: true },

  { id: 'cobot', year: 'jan–feb 2026', title: 'autonomous & glove-controlled collaborative robot', line: 'addverb syncro 5 · six-axis cobot',
    say: 'a robot arm you can ask to pick things up, or steer with a sensor glove.',
    body: 'two ways to drive an addverb syncro 5 six-axis cobot. say “pick up the red bottle” and an LLM extracts the intent, a depth camera sweeps the workspace, YOLO visual servoing centres the target, and the arm grasps it. or wear an ESP32 sensor glove and drive it by hand — seven gestures, classified online at ~20 Hz.',
    note: 'tinkerers’ lab, IIT Indore. team of eight. featured on addverb technologies’ official blog.',
    facts: [['where', 'tinkerers’ lab, IIT Indore'], ['team', 'eight'], ['recognition', 'featured on addverb’s blog']],
    video: 'cobot', extras: ['cobot-1.jpg', 'cobot-2.jpg', 'cobot-3.jpg', 'cobot-4.jpg'], page: true },

  { id: 'cement-3d-printer', year: 'jan–may 2026', title: 'cement 3d printer', line: 'large-format, cartesian',
    say: 'a 3d printer a metre wide that prints with cement.',
    body: '1000 × 1000 × 600 mm build volume. SFU1605 ball-screw X/Y, C-beam Z, hopper-auger extrusion, NEMA 23 steppers, arduino mega + RAMPS 1.4. sourcing, fusion 360 CAD and integration, end to end.',
    note: 'sold to, and now in use in, a research lab.',
    facts: [['role', 'design & assembly lead'], ['build volume', '1000 × 1000 × 600 mm'], ['status', 'sold · in use in a research lab']],
    video: 'cement-3d-printer', page: true },

  { id: 'ball-balancing-bot', year: '2026', title: 'ball balancing bot', line: 'a stewart platform that will not let a ball fall off',
    say: 'a tilting plate that watches a ball and keeps it from rolling off.',
    body: 'a 3RRS parallel manipulator. an overhead pi cam finds the ball, a PID controller works out the tilt to correct it, inverse kinematics turns that into three servo angles, and the loop repeats fast enough that the ball never gets away.',
    note: 'AA216 flight mechanics & classical control, IIT Indore. group of five.',
    facts: [['course', 'AA216, IIT Indore'], ['team', 'five']],
    video: 'ball-balancing-bot', img: 'ball-balancing-bot.jpg', badVideo: true,
    deck: { href: '/docs/ball-balancing-bot.pdf', label: 'the course deck' }, page: true },

  { id: 'aqualoop', year: '2025–26', title: 'aqualoop', line: 'in-pipe water monitoring and recycling',
    say: 'it sits between two pipes, checks the water going through, and works out what can be reused.',
    body: 'a module that fits between two pipes and powers itself from the water running through it with a micro-hydro turbine. pH, TDS and turbidity sensors produce a live water quality score; at the outlet, diverter valves split used water into a recycling tank or the septic line instead of treating it all as one waste stream.',
    note: 'team lead, team of five. second place at the vishwakarma awards 2026 (maker bhavan foundation), among 1,054 teams.',
    facts: [['role', 'team lead'], ['team', 'five'], ['award', '2nd of 1,054 teams · vishwakarma awards 2026']],
    video: 'aqualoop', extras: ['aqualoop-1.jpg', 'aqualoop-2.jpg', 'vishwakarma-award.jpg'], page: true },

  { id: 'wind-tunnel', year: 'nov 2025', title: 'low-speed wind tunnel', line: 'with LED-based PIV',
    say: 'a tabletop wind tunnel, and a cheap way to actually see the air move.',
    body: 'a low-cost wind tunnel with a transparent acrylic test section, a 3D-printed contraction and diffuser, and a vacuum cleaner for suction. we had no laser for PIV, so an 84-LED strip focused through a slit stands in for the laser sheet, and OpenCV optical flow turns incense-smoke video into velocity fields.',
    note: 'optics course project, IIT Indore. team of five.',
    facts: [['course', 'optics, IIT Indore'], ['team', 'five']],
    video: 'wind-tunnel', page: true },

  { id: 'mms', year: 'aug 2025 –', title: 'machine management system', line: 'RFID access control for lab machines',
    say: 'tap a card to switch on a lab machine. it runs five machines in the tinkerers’ lab.',
    body: 'access control across five lab machines: ESP32 + MFRC522 RFID nodes with relay actuation, an automated card dispenser, a raspberry pi 5 issuing station, and a firebase backend with a live dashboard.',
    note: 'project lead, team of two. running in the tinkerers’ lab, IIT Indore. IITISoC gold (robotics) and the grand innovation & best maker awards at IAMS 2025. patent in progress.',
    facts: [['role', 'project lead'], ['team', 'two'], ['status', 'in daily use · patent in progress'], ['awards', 'IITISoC gold · IAMS 2025 best maker']],
    video: 'mms', extras: ['iams-award.jpg', 'iitisoc-award.jpg'], page: true },

  { id: 'esp32-flight-controller', year: 'may–aug 2025', title: 'custom esp32 flight controller', line: 'STARC lab',
    say: 'a flight controller board i designed that holds a drone steady without GPS.',
    body: 'a flight-controller PCB with an MPU6050 IMU, magnetometer and optical flow sensor. EKF sensor fusion holds a 25-minute stable hover without GPS.',
    note: 'research internship, STARC lab, IIT Indore, under prof. abhirup datta.',
    facts: [['where', 'STARC lab, IIT Indore'], ['supervisor', 'prof. abhirup datta'], ['result', '25-min hover, no GPS']],
    video: 'esp32-flight-controller', extras: ['esp32-flight-controller-1.jpg', 'esp32-flight-controller-2.jpg'], badVideo: true, page: true },

  { id: 'patrolling-bot', year: '2025', title: 'line follower → patrolling bot', line: 'first-year makerspace',
    quote: 'the course asked for a line follower. we had to add one feature of our own.',
    say: 'a line follower that also streams video, and spins on the spot when you press SOS.',
    body: 'a line-following robot on a raspberry pi 4 that streams live camera footage back to a PC. an SOS button notifies the control centre and puts the bot into a 360° rotation so it can be found.',
    note: 'first-year makerspace course project, IIT Indore.',
    facts: [['course', 'makerspace, IIT Indore']],
    video: 'patrolling-bot', extras: ['patrolling-bot-1.jpg', 'patrolling-bot-2.jpg', 'patrolling-bot-3.jpg'], page: true },

  { id: 'iroc-drone', year: 'jan–aug 2025', title: 'nogps autonomous drone', line: 'ISRO robotics challenge',
    say: 'a drone that takes off, hovers and lands by itself, built for a mars-like arena.',
    body: 'an autonomous drone for the ISRO robotics challenge: pixhawk flight control, a raspberry pi on board, and a RealSense depth camera on a gimbal that maps the ground on the way up and looks for obstacles once it’s hovering.',
    note: 'IRoC-U 2025, team MarsXplorers, six of us. there is a folder in my archive named “fails”. it has six videos in it.',
    facts: [['event', 'IRoC-U 2025'], ['team', 'six'], ['mentors', 'prof. abhirup datta · prof. i.a. palani']],
    video: 'iroc-drone', extras: ['iroc-drone-1.jpg', 'iroc-drone-2.jpg', 'iroc-drone-3.jpg'], page: true },

  { id: 'morphobot', year: '2025', title: 'morphobot', line: 'a drone that lands and drives away',
    quote: 'flying is expensive. if the ground is drivable, don’t fly.',
    say: 'a drone that lands, folds its arms down and drives away on them.',
    body: 'a vehicle that flies to a site, lands, folds its rotor arms down and drives on the rotor guards as wheels — then reaches into rubble with a 4-axis arm actuated by shape memory alloy and steered by hand gestures. built for disaster response.',
    note: 'two prototypes. mechatronics & instrumentation lab, IIT Indore, under prof. i.a. palani. with soham mondal and tejal uplenchwar.',
    facts: [['where', 'mechatronics lab, IIT Indore'], ['with', 'soham mondal · tejal uplenchwar'], ['prototypes', 'two']],
    video: 'morphobot', extras: ['morphobot-1.jpg', 'morphobot-2.jpg'], badVideo: true, page: true },

  { id: 'micromouse', year: '2024–25', title: 'micromouse', line: 'a maze-solving robot',
    say: 'a small robot that finds its own way through a maze.',
    body: 'a small robot that finds its way through a maze.',
    img: 'micromouse.jpg', extras: ['micromouse-1.jpg'] },

  { id: 'alzheimers-shoes', year: '2025', title: 'gait-analysis shoes', line: 'for early alzheimer’s detection · stopped',
    say: 'shoes with sensors that watch how you walk. i stopped this one.',
    body: 'a wearable shoe with TENG sensors in the sole, to pick up gait abnormalities that could be an early sign of alzheimer’s.',
    note: 'i stopped for three reasons: my own expertise ceiling at the time, TENG not showing promise, and training data that would have needed hospital access to patients.',
    video: 'alzheimers-shoes', page: true },

  { id: 'gps-shoes', year: '2025', title: 'power-harvesting army boots', line: 'TENG energy harvesting · DRDO',
    say: 'army boots that make their own electricity while you walk. i worked on the circuit that stores it.',
    body: 'a DRDO-funded lab project (2021–24) built an army boot that generates its own electricity from walking: a laser-textured triboelectric nanogenerator in the sole, rectified and stored to run GPS and RFID. ten pairs went to ARDE, Pune. i joined the lab in march 2025 and designed the impedance-matching circuit, bringing source impedance from 885 MΩ to 88.4 MΩ and improving battery charging efficiency by 54%. patent filed.',
    note: 'instrumentation & control lab, IIT Indore, under prof. i.a. palani. my first project in the lab.',
    facts: [['where', 'instrumentation & control lab, IIT Indore'], ['my part', 'impedance-matching circuit, +54% charging efficiency'], ['status', 'patent filed']],
    img: 'gps-shoes.jpg', extras: ['gps-shoes-1.jpg', 'gps-shoes-2.jpg'], page: true },
];

export const all = [...work, ...early];
export const byId = Object.fromEntries(all.map((p) => [p.id, p]));

export const M = '/media/projects/';
export const still = (p: Project) => p.img || p.extras?.[0] || '';

export interface MediaItem { kind: 'video' | 'image'; src: string; poster?: string }

export function mediaOf(p: Project): MediaItem[] {
  const out: MediaItem[] = [];
  const v: MediaItem | null = p.video
    ? { kind: 'video', src: `${M}${p.video}.mp4`, poster: `${M}${p.video}.jpg` }
    : null;
  if (v && !p.badVideo) out.push(v);
  if (p.img) out.push({ kind: 'image', src: M + p.img });
  (p.extras || []).forEach((f) => out.push({ kind: 'image', src: M + f }));
  if (v && p.badVideo) out.push(v);
  return out;
}
