import React from "react";

import * as Data from "../../data";



interface WorkWindowProps {
  experience: Data.Experience;
  onClose: () => void;
}

const WorkWindow: React.FC<WorkWindowProps> = ({ experience, onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-0 mb-12">
      <div className="bg-white w-1/2 h-full shadow-lg relative">
        <div className="flex justify-between items-center bg-gray-300 p-2">
          {
            // <div className="flex items-center space-x-2">
            // <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer" onClick={onClose}></div>
            // <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            // <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            // </div>
          }
          <h2 className="text-xl">{experience.company}</h2>
          <button
            className="absolute top-0 right-0 justify-center"
            onClick={onClose}
            style={styles.closeButton}
          >
            x
          </button>
        </div>
        <div className="p-4 overflow-y-auto">
          <div className="flex space-x-4">
            <img
              src={experience.image}
              alt={experience.company}
              className="w-48 h-48 object-cover"
            />
            <div>
              <h3 className="text-lg mb-2">{experience.title}</h3>
              <p className="mb-4">{experience.description}</p>
              <div className="flex space-x-4">
                <a
                  href={experience.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                </a>
               
              </div>
            </div>
          </div>
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
    padding: "5px 20px 5px 20px",
  },
};

export default WorkWindow;
