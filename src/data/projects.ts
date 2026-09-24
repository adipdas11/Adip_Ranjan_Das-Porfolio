export interface Project {
  title: string;
  category: string;
  date: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  github?: string;
  link?: string;
  paper?: string;
}

export const projects: Project[] = [
  {
    title: "Isaac Sim · Pick & Place",
    category: "Simulation",
    date: "Nov 2024",
    description:
      "Developed a digital twin of the National Robotarium environment for precise pick-and-place operations.",
    longDescription:
      "Developed a simple pick-and-place application in Isaac Sim, creating a digital twin of the National Robotarium environment using ROS2, MoveIt2, and xArm5. This project involved simulating precise object manipulation within a realistic virtual replica, showcasing the potential of digital twins for robotics research and real-world scenario testing. This experience highlighted the effectiveness of Isaac Sim and ROS2 in developing advanced robotic workflows.",
    image: "images/1_isaac_sim_pick_and_place.webp",
    tags: ["ISAAC Sim", "ROS2", "MoveIt2", "Digital Twin"],
    link: "https://www.linkedin.com/posts/adip-das1998_isaacsim-ros2-moveit2-activity-7262481724666732544-jXcA",
  },
  {
    title: "Upper-Limb Exoskeleton",
    category: "Hardware / Research",
    date: "2022–2023",
    description:
      "MSc Dissertation project focusing on an occupational upper-limb exoskeleton for workplace safety.",
    longDescription:
      "For my Master's dissertation at the University of Bristol, I researched and developed an occupational upper-limb exoskeleton aimed at improving human-robot interaction and enhancing workplace safety. The project focused on designing a wearable robotic device that assists workers in performing physically demanding tasks, such as lifting or holding heavy objects, to reduce muscle strain and prevent injuries.",
    image: "images/2_upper_body_exoskeleton.webp",
    tags: ["Robotics", "Hardware", "HRI", "Exoskeleton"],
    github: "https://github.com/adipdas11/UOB_UWE_DIssertation",
  },
  {
    title: "AutoWok Cooking Robot",
    category: "Robotics",
    date: "2022–Present",
    description:
      "A hands-free cooking solution prototype integrating robotics and automation.",
    longDescription:
      "At GI Healthcare, I developed an Autonomous Cooking Machine prototype, combining robotics and automation to create a hands-free cooking solution. This project involved designing and programming the machine for precise ingredient handling, cooking processes, and user control through a Tkinter operator interface.",
    image: "images/3_autonomous_cooking_system.webp",
    tags: ["Python", "C++", "Tkinter"],
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7026715403502374913",
  },
  {
    title: "ROS2 & Nav2 - Custom SLAM",
    category: "Robotics",
    date: "Dec 2022",
    description:
      "Implemented ROS2 and Nav2 on a custom-designed robot for autonomous navigation.",
    longDescription:
      "Implemented ROS2 and Nav2 on a custom-designed robot modeled in Fusion360, enabling autonomous navigation and mapping capabilities. This project involved integrating ROS2 for robust communication and control, along with Nav2 for navigation planning and obstacle avoidance, bringing the robot’s virtual design into functional, autonomous operation.",
    image: "images/4_ros2_nav2_custom_slam.webp",
    tags: ["ROS2", "Nav2", "SLAM", "Fusion360"],
    link: "https://youtu.be/gnflMtxcEiA",
  },
  {
    title: "ROS & Moveit - Hand Gesture",
    category: "Computer Vision",
    date: "Aug 2022",
    description:
      "Real-time gesture-based control of a simulated robot hand using MediaPipe.",
    longDescription:
      "Developed a hand gesture recognition system using MediaPipe to capture hand landmarks and control a simulated robot hand via ROS and MoveIt. This project enabled real-time gesture-based control, translating human hand movements into robotic actions, showcasing intuitive human-robot interaction through vision-based control systems.",
    image: "images/5_ros_moveit_hand_gesture.webp",
    tags: ["MediaPipe", "ROS", "MoveIt", "Computer Vision"],
    link: "https://www.linkedin.com/posts/adip-das1998_rviz-ros-moveit-activity-6960919492231094272-6bV-",
  },
  {
    title: "ROS & Champ - Quadruped",
    category: "Robotics",
    date: "Jul 2022",
    description:
      "Custom quadruped robot design and locomotion control using CHAMP.",
    longDescription:
      "Designed a custom quadruped robot in Fusion 360 and implemented control using the CHAMP package. This project involved creating a 3D model tailored for stability and movement efficiency, then integrating CHAMP for locomotion control, allowing the quadruped to walk, trot, and navigate autonomously.",
    image: "images/6_ros_champ_quadruped.webp",
    tags: ["ROS", "CHAMP", "Fusion360", "Locomotion"],
    link: "https://www.linkedin.com/posts/adip-das1998_champassistant-fusion360-cad-activity-6959161713204056064-lXqP",
  },
  {
    title: "ROS - Spot Control",
    category: "Simulation",
    date: "Jul 2022",
    description: "Explored Boston Dynamics Spot capabilities in simulation.",
    longDescription:
      "Utilized the Boston Dynamics Spot package in simulation to explore advanced robotic capabilities, including autonomous navigation, terrain adaptability, and payload management. This project involved configuring and controlling Spot’s simulated model, enabling realistic testing of its mobility and interaction capabilities.",
    image: "images/7_ros_spot_control.webp",
    tags: ["ROS", "Spot", "Simulation", "Navigation"],
    link: "https://www.linkedin.com/posts/adip-das1998_ros-robot-robotics-activity-6959160926402961408--XU4",
  },
  {
    title: "YOLO V3 - Object Detection",
    category: "Computer Vision",
    date: "Jul 2022",
    description: "Real-time object detection using deep learning.",
    longDescription:
      "Implemented object detection using YOLOv3, a real-time deep-learning model known for its speed and accuracy. The project involved training the model on custom datasets to detect specific objects, achieving precise localization and classification in complex environments.",
    image: "images/8_yolo_v3_object_detection.webp",
    tags: ["YOLOv3", "Python", "Deep Learning", "OpenCV"],
    link: "https://www.linkedin.com/posts/adip-das1998_opencv-imageprocessing-imagerecognition-activity-6955208296177782784-rIY_",
  },
  {
    title: "Human Pose Detection",
    category: "Computer Vision",
    date: "Jul 2022",
    description: "Real-time body landmark tracking for movement analysis.",
    longDescription:
      "Created a human pose detection system to identify and track body landmarks in real-time, utilizing advanced machine learning models to capture key points such as joints and limbs. This project enabled precise analysis of human movement.",
    image: "images/9_human_pose_detection.webp",
    tags: ["MediaPipe", "Python", "OpenCV", "Pose Estimation"],
    link: "https://www.linkedin.com/posts/adip-das1998_opencv-imageprocessing-pythob-activity-6954395029217894400-8MO_",
  },
  {
    title: "Facial Landmark Detection",
    category: "Computer Vision",
    date: "Jul 2022",
    description: "Real-time facial feature analysis using MediaPipe.",
    longDescription:
      "Developed a facial landmark detection system using MediaPipe, leveraging its real-time capability to identify key facial points with high accuracy. The project captured and analyzed facial features such as eyes, nose, and mouth.",
    image: "images/10_facial_landmark_detection.webp",
    tags: ["MediaPipe", "Python", "OpenCV", "Face Mesh"],
    link: "https://www.linkedin.com/posts/adip-das1998_opencv-imageprocessing-python-activity-6954662460171632640-o7Vt",
  },
  {
    title: "PCB Design in Fusion360",
    category: "Hardware",
    date: "Jul 2022",
    description: "Custom PCB layout and 3D visualization in Fusion 360.",
    longDescription:
      "Learned PCB design and developed custom component libraries in Fusion 360, creating detailed 3D CAD models for PCB layouts. This project enhanced my skills in electronic design and 3D modelling.",
    image: "images/11_pcb_design_in_fusion360.webp",
    tags: ["Fusion360", "PCB Design", "Electronics", "CAD"],
    link: "https://www.linkedin.com/posts/adip-das1998_3d-pcbdesign-fusion360-activity-6953326273737752577-aDDq",
  },
  {
    title: "Hand Landmark Detection",
    category: "Computer Vision",
    date: "Jul 2022",
    description: "Real-time tracking of fingertip and joint positions.",
    longDescription:
      "Developed a hand landmark detection system using MediaPipe, capturing and tracking key hand points in real-time. This project accurately identified fingertip and joint positions.",
    image: "images/12_hand_landmark_detection.webp",
    tags: ["MediaPipe", "Python", "OpenCV", "Hand Tracking"],
    link: "https://www.linkedin.com/posts/adip-das1998_opencv-imageprocessing-python-activity-6953686952009175040-FYRE",
  },
  {
    title: "ROS & SLAM - Custom AMR",
    category: "Robotics",
    date: "May 2022",
    description:
      "Autonomous path planning and mapping for a custom mobile robot.",
    longDescription:
      "Developed a custom Autonomous Mobile Robot (AMR) and implemented the ROS Navigation stack to enable autonomous path planning, obstacle avoidance, and mapping capabilities. This project involved configuring localization, path planning, and sensor integration.",
    image: "images/13_ros_slam_custom_amr.webp",
    tags: ["ROS", "SLAM", "Navigation", "AMR"],
    link: "https://www.linkedin.com/posts/adip-das1998_ros-robotics-robots-activity-6929059536905334784-0RQk",
  },
  {
    title: "ROS & Moveit - 3DOF Custom Arm",
    category: "Robotics",
    date: "May 2022",
    description: "Motion planning and control for a custom 3DOF robotic arm.",
    longDescription:
      "During my internship at Fortrax Robotics, I developed and controlled a custom 3DOF robotic arm using MoveIt. This project involved configuring motion planning, kinematics, and precise control, enabling the arm to perform accurate pick-and-place tasks.",
    image: "images/14_ros_moveit_3dof_custom_arm.webp",
    tags: ["ROS", "MoveIt", "Kinematics", "Robotic Arm"],
    link: "https://www.linkedin.com/posts/adip-das1998_moveit-ros-robotics-activity-6929060141933699072-cxQ4",
  },
  {
    title: "ROS & SLAM - Waiter Robot",
    category: "Robotics",
    date: "Apr 2022",
    description: "Simulated autonomous waiter robot for serving tasks.",
    longDescription:
      "During my internship at RigBetel Labs, I developed a simulated Autonomous Waiter Robot designed for serving tasks in a virtual environment. The project involved end-to-end development, including robot design, navigation stack implementation, and environment simulation using Gazebo.",
    image: "images/15_ros_slam_waiter_robot.webp",
    tags: ["ROS", "SLAM", "Gazebo", "Simulation"],
    link: "https://youtu.be/TvBqObRVKyw",
  },
];
