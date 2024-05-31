import React from "react";
import CarouselMe from "../carousel";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  pdfLink: string;
  githubLink: string;
  images?: string[];
}

interface ProjectWindowProps {
  project: Project;
  onClose: () => void;
}

const ProjectWindow: React.FC<ProjectWindowProps> = ({ project, onClose }) => {
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
          <h2 className="text-xl">{project.title}</h2>
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
              src={project.image}
              alt={project.title}
              className="w-48 h-48 object-cover"
            />
            <div>
              <h3 className="text-lg mb-2">Description</h3>
              <p className="mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  View PDF
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
          {project.images && (
            <div className="mt-4">
              <h3 className="text-lg mb-2">More Images</h3>
              <div className="flex space-x-4">
                <CarouselMe images={project.images} />
              </div>
            </div>
          )}
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

export default ProjectWindow;
