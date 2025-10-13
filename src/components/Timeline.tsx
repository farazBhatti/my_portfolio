import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

// ✅ Import logos that actually exist in your folder
import altaifLogo from "../assets/images/altaif.png";
import dayoneLogo from "../assets/images/dayone.png";
import measmerizeLogo from "../assets/images/Measmerize.png"; // note capital M
import snipbackLogo from "../assets/images/snipback.png";
import esperLogo from "../assets/images/esper.png"; // Used for EsperTech / Esper Solutions
import nustLogo from "../assets/images/nust.png";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career Timeline</h1>
        <VerticalTimeline>

          {/* Altaif Group */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2025 – Present"
            iconStyle={{
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            icon={<img src={altaifLogo} alt="Altaif Group" className="timeline-logo" />}
          >
            <h3 className="vertical-timeline-element-title">Computer Vision Consultant</h3>
            <h4 className="vertical-timeline-element-subtitle">Altaif Group — UAE</h4>
            <p>
  Developing object detection and OCR systems for document analysis, including ID cards, passports, and other identity verification use cases.
</p>

          </VerticalTimelineElement>

          {/* Measmerize */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2025"
            iconStyle={{
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            icon={<img src={measmerizeLogo} alt="Measmerize" className="timeline-logo" />}
          >
            <h3 className="vertical-timeline-element-title">Computer Vision Consultant</h3>
            <h4 className="vertical-timeline-element-subtitle">Measmerize — Europe</h4>
            <p>Developed ML pipelines for automatic human body measurement extraction for fashion-tech clients.</p>
          </VerticalTimelineElement>

          {/* Snipback */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 – 2025"
            iconStyle={{
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            icon={<img src={snipbackLogo} alt="Snipback" className="timeline-logo" />}
          >
            <h3 className="vertical-timeline-element-title">Computer Vision Consultant</h3>
            <h4 className="vertical-timeline-element-subtitle">Snipback — USA</h4>
            <p>Designed real-time video analysis and motion tracking solutions for sports broadcasting.</p>
          </VerticalTimelineElement>

          {/* Dayone Company */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 – Present"
            iconStyle={{
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            icon={<img src={dayoneLogo} alt="Dayone Company" className="timeline-logo" />}
          >
            <h3 className="vertical-timeline-element-title">ML & Computer Vision Consultant</h3>
            <h4 className="vertical-timeline-element-subtitle">Dayone Company — South Korea</h4>
           <p>
  Designing and delivering deep learning courses for adult education, including interactive video lectures, 
  Colab and Jupyter Notebook exercises, and hands-on model development sessions.
</p>
          </VerticalTimelineElement>

          {/* EsperTech Solutions */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 – Present"
            iconStyle={{
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            icon={<img src={esperLogo} alt="EsperTech Solutions" className="timeline-logo" />}
          >
            <h3 className="vertical-timeline-element-title">Senior Computer Vision Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">EsperTech Solutions — Pakistan</h4>
            <p>Led AI vision projects including edge deployment, real-time object tracking, and automated inspection
              systems for industrial and sports applications.</p>
          </VerticalTimelineElement>

          {/* Education: PhD */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2021 – Ongoing"
            iconStyle={{
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            icon={<img src={nustLogo} alt="NUST" className="timeline-logo" />}
          >
            <h3 className="vertical-timeline-element-title">Ph.D. Computer Science (Deep Learning)</h3>
            <h4 className="vertical-timeline-element-subtitle">NUST — Islamabad</h4>
            <p>Research in deep learning for IMU sensor-based human activity recognition.</p>
          </VerticalTimelineElement>

          {/* Education: MS */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2019"
            iconStyle={{
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            icon={<img src={nustLogo} alt="NUST" className="timeline-logo" />}
          >
            <h3 className="vertical-timeline-element-title">MS Computer Science (ML / Computer Vision)</h3>
            <h4 className="vertical-timeline-element-subtitle">NUST — Islamabad</h4>
            <p>Focused on computer vision and deep learning research applications.</p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;

