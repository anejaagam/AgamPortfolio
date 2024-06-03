import React from "react";

import * as Data from "../../data";



interface WorkWindowProps {
  experience: Data.Experience;
  onClose: () => void;
}

const WorkWindow: React.FC<WorkWindowProps> = ({ experience, onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-0">
      <div className="bg-white w-3/4 h-3/4 shadow-lg relative overflow-auto no-scrollbar">
        <div className="flex justify-between items-start mb-4 sticky top-0 bg-white ">
          <h2 className="text-xl p-4">{experience.title}</h2>
          <button className="text-xl text-red-500 relative top-0 right-0" onClick={onClose} style={styles.closeButton}>x</button>
        </div>
        <div className="p-8">
          <h3 className="text-lg font-bold">Company</h3>
          <p>{experience.company}</p>
          <h3 className="text-lg font-bold mt-4">Location</h3>
          <p>{experience.location}</p>
          <h3 className="text-lg font-bold mt-4">Duration</h3>
          <p>{experience.duration}</p>
          <h3 className="text-lg font-bold mt-4">Overview</h3>
          <p>{experience.overview}</p>
          <h3 className="text-lg font-bold mt-4">Responsibilities</h3>
          <ul>
            {experience.responsibilities.map((responsibility, index) => (
              <li key={index}>- {responsibility}</li>
            ))}
          </ul>
          <h3 className="text-lg font-bold mt-4">Achievements</h3>
          <ul>
            {experience.achievements.map((achievement, index) => (
              <li key={index}>- {achievement}</li>
            ))}
          </ul>
          <h3 className="text-lg font-bold mt-4">Skills Developed</h3>
          <ul>
            {experience.skillsDeveloped.map((skill, index) => (
              <li key={index}>- {skill}</li>
            ))}
          </ul>
          <h3 className="text-lg font-bold mt-4">Technologies and Tools</h3>
          <ul>
            {experience.technologiesTools.map((tool, index) => (
              <li key={index}>- {tool}</li>
            ))}
          </ul>
          <h3 className="text-lg font-bold mt-4">Challenges and Solutions</h3>
          <p><strong>Challenges:</strong> {experience.challengeSolution.challenge.join(', ')}</p>
          <p><strong>Solutions:</strong> {experience.challengeSolution.solution.join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  closeButton: {
    cursor: "pointer",
    backgroundColor: "#F41A1A",
    color: "white",
    padding: "5px 25px 5px 25px",
  },
};

export default WorkWindow;
