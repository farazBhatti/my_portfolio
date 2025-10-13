import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faCogs, faNetworkWired } from "@fortawesome/free-solid-svg-icons";

import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "Computer Vision",
  "Deep Learning",
  "OpenCV",
  "Object Detection",
  "Semantic Segmentation",
  "Transformers",
  "Pose Estimation",
  "OCR",
  "Image Inpainting",
  "PyTorch",
  "Keras",
  "TensorFlow",
];

const labelsSecond = [
  "Edge AI (Jetson / OrangePi)",
  "CUDA Optimization",
  "C++ Integration",
  "iOS Neural Engine",
  "Model size reduction",
  "Quantization",
  "Automation",
  "Huffman coding"
];

const labelsThird = [
  "Python",
  "C++",
  "Swift",
  "Java",
  "Kotlin",
  "Git",
  "Docker",
  "AWS",
  "Linux",
  "Jupyter",
  "VS Code",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">

          {/* 🔹 Computer Vision */}
          <div className="skill">
            <FontAwesomeIcon icon={faBrain} size="3x" />
            <h3>Deep Learning & Computer Vision</h3>
            <p>
              I specialize in designing and deploying advanced computer vision systems for
              real-world applications. My expertise spans object detection, semantic segmentation,
              image inpainting, 3D body reconstruction, and transformer-based architectures.
              I’ve developed and optimized deep learning pipelines for tasks like fabric inspection,
              sports analytics, and human body measurement.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Core Skills:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* 🔹 Edge AI & Deployment */}
          <div className="skill">
            <FontAwesomeIcon icon={faNetworkWired} size="3x" />
            <h3>Edge AI Deployment & Optimization</h3>
            <p>
              Experienced in deploying deep learning models on edge devices like NVIDIA Jetson Nano,
              Jetson Orin, and OrangePi 5. I utilize GPU and NPU acceleration to achieve real-time
              inference, enabling high-performance systems for surveillance, sports analytics, and
              driver monitoring. I’ve also worked on automation of PTZ cameras and IoT-based CV
              applications.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Specializations:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* 🔹 Software Engineering & DevOps */}
          <div className="skill">
            <FontAwesomeIcon icon={faCogs} size="3x" />
            <h3>Software Engineering & DevOps</h3>
            <p>
              Beyond model design, I have solid experience in software engineering practices and
              deployment workflows. I use Docker, Git, and CI/CD pipelines to ensure robust,
              reproducible, and scalable ML applications. My coding experience includes Python,
              C++, Java, and Swift for full-stack AI and mobile solutions.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tools & Languages:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Expertise;

