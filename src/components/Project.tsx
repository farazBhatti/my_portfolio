import React, { useRef, useState } from "react";
import basketballVideo from "../assets/videos/basketball.mp4";
import drowsinessVideo from "../assets/videos/drowsiness.mp4";
import peopleCounterVideo from "../assets/videos/people_counter.mp4";
import soccerVideo from "../assets/videos/soccer.mp4";
import volleyBallVideo from "../assets/videos/volleyBall.mp4";

import "../assets/styles/Project.scss";

function Project() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);

  const handleVideoClick = (index: number) => {
    setActiveVideoIndex(index);
  };

  const closeModal = () => {
    setActiveVideoIndex(null);
  };

  const projects = [
    { video: basketballVideo, title: "Basketball Tracking", desc: "..." },
    { video: drowsinessVideo, title: "Driver Drowsiness Detection System", desc: "..." },
    { video: peopleCounterVideo, title: "AI People Counter", desc: "..." },
    { video: soccerVideo, title: "Soccer Tracking", desc: "..." },
    { video: volleyBallVideo, title: "Volleyball Tracking", desc: "..." },
  ];

  return (
    <div className="projects-container" id="projects">
      <h1>Industrial Projects</h1>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div className="project" key={index}>
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={proj.video}
              className="zoom"
              loop
              muted
              playsInline
              style={{
                borderRadius: "10px",
                width: "100%",
                height: "300px",
                objectFit: "cover",
                cursor: "pointer",
              }}
              onClick={() => handleVideoClick(index)}
              onMouseOver={(e) => (e.currentTarget as HTMLVideoElement).play()}
              onMouseOut={(e) => (e.currentTarget as HTMLVideoElement).pause()}
            />
            <h2>{proj.title}</h2>
            <p>{proj.desc}</p>
          </div>
        ))}
      </div>

      {/* Modal overlay */}
      {activeVideoIndex !== null && (
        <div className="video-modal" onClick={closeModal}>
          <video
            key={activeVideoIndex} // forces React to re-render new video each time
            src={projects[activeVideoIndex].video}
            autoPlay
            controls
            muted={false} // allow sound
            style={{ width: "80%", maxHeight: "80%", borderRadius: "10px" }}
            onClick={(e) => e.stopPropagation()} // prevents closing when clicking video
          />
        </div>
      )}
    </div>
  );
}

export default Project;

