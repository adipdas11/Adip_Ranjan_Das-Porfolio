export const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;
export const links = {
  github: "https://github.com/adipdas11",
  linkedin: "https://www.linkedin.com/in/adip-das1998/",
  scholar: "https://scholar.google.com/citations?user=vAY8uB4AAAAJ&hl=en",
  email: "mailto:adipdas11@gmail.com",
  cv: asset("Adip_Ranjan_Das_CV.docx"),
  egrap: "https://youtu.be/pO8HsUYfkjA",
};
export const publications = [
  {
    id: "language-agent",
    year: "2026",
    venue: "IEEE RA-L",
    status: "Under review",
    title:
      "Language-Agent Planning over Structured World States for Adaptive Dual-arm Robotic Disassembly",
    authors: "A. R. Das et al.",
    description:
      "Language-agent task planning, learned perception and corrective actions for disassembly across hard drives, mini PCs and laptops.",
    url: null,
  },
  {
    id: "egrap",
    year: "2026",
    venue: "IEEE/ASME AIM",
    status: "Published",
    title:
      "eGRAP: Graph-Based Adaptive Planning for Dual-arm Robotic Disassembly of Electronic Devices",
    authors: "A. R. Das, X. Kong and M. Koskinopoulou",
    description:
      "An adaptive graph-based planner coupling perception with coordinated dual-arm execution for electronic-device disassembly.",
    url: "https://ieeexplore.ieee.org/abstract/document/11658063",
    video: links.egrap,
  },
  {
    id: "review",
    year: "2025",
    venue: "IEEE Access",
    status: "Published",
    title:
      "Toward Sustainable Manufacturing: A Review on Innovations in Robotic Assembly and Disassembly",
    authors: "A. R. Das and M. Koskinopoulou",
    description:
      "A review of robotic assembly and disassembly technologies in sustainable manufacturing. Volume 13, pages 100149–100166.",
    url: "https://ieeexplore.ieee.org/abstract/document/11023241",
  },
  {
    id: "exosuit",
    year: "2024",
    venue: "IEEE BioRob",
    status: "Published",
    title:
      "Cable-Driven Exosuit to Assist Affected Upper-Limb Users with Hemiparesis",
    authors: "L. J. Arciniegas-Mayag et al. · Co-author",
    description:
      "Cable-driven wearable assistance for affected upper-limb users. BioRob, Heidelberg, pages 1629–1634.",
    url: "https://ieeexplore.ieee.org/abstract/document/10719697",
  },
];
export const experience = [
  {
    role: "Robotics Engineer",
    organisation: "GI Healthcare Industries Ltd",
    date: "Dec 2022 — Present",
    description:
      "Developing AutoWok, a semi-autonomous deployable cooking platform. Own the control back end and Tkinter operator interface; contributed to TRL 4 → 6 progression under DASA funding in 2024–2025.",
    tags: ["Python", "C++", "Fusion 360", "Tkinter"],
  },
  {
    role: "Robotics Intern",
    organisation: "Fortrax Robotics",
    date: "Mar — Apr 2022",
    description:
      "Implemented ROS navigation, SLAM and MoveIt on a custom autonomous mobile robot with a 3-DoF manipulator.",
    tags: ["ROS", "MoveIt", "SLAM"],
  },
  {
    role: "Robotics Intern",
    organisation: "Rigbetel Labs",
    date: "Dec 2021 — Jan 2022",
    description:
      "Built a simulated autonomous waiter robot, from Fusion 360 design and Gazebo simulation to the navigation stack and PyQt5 interface.",
    tags: ["Gazebo", "ROS", "PyQt5"],
  },
  {
    role: "Software Engineer",
    organisation: "Accenture Solutions",
    date: "Aug 2020 — Jun 2022",
    description:
      "Developed Java test-automation frameworks with Selenium and Cucumber, owning testing and quality sign-off for a critical module.",
    tags: ["Java", "Selenium", "Cucumber"],
  },
  {
    role: "Machine Learning Intern",
    organisation: "HighRadius Corporation",
    date: "Dec 2019 — May 2020",
    description:
      "Benchmarked machine-learning algorithms and improved model performance through feature extraction and creation.",
    tags: ["scikit-learn", "Machine learning"],
  },
];
export const skills = [
  {
    name: "Robotics & control",
    items:
      "ROS 2 Humble · ROS 1 · MoveIt 2 · EXOTica · URDF/Xacro · SLAM · Force-torque sensing",
  },
  {
    name: "Learning & perception",
    items:
      "PyTorch · Imitation learning · VLA models · LangGraph · ReAct · RF-DETR · YOLOv11 · Roboflow · RGB-D",
  },
  {
    name: "Simulation & hardware",
    items:
      "Isaac Sim · PyBullet · Gazebo · UF850 · xArm5 · OnRobot RG6 · Robotiq FT300 · Custom end-effectors",
  },
  {
    name: "Engineering toolkit",
    items:
      "Python · C++ · Java · Git · Linux · Tkinter · PyQt5 · Fusion 360 · Onshape · Blender · FDM printing",
  },
];
