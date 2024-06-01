import React from 'react';
import * as Data from '../../data';



interface CoursesProps {
    onClose: () => void;
    course: Data.Course;
}


const Courses: React.FC<CoursesProps> = ({ onClose, course }) => {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-0">
            <div className="bg-white w-2/3 h-fit shadow-lg relative 0">
                <div className="flex flex-row justify-between mb-4 items-start relative">
                    <h2 className="text-xl p-4 ">{course.title}</h2>
                    <button className="text-xl text-red-500 self-start" onClick={onClose} style={styles.closeButton}>x</button>
                </div>
                <div className="p-4 overflow-y-auto">
                        <div className="mb-4">
                            <h3 className="text-lg font-bold">{course.title}</h3>
                            <p>{course.description}</p>
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
      padding: "5px 25px 5px 25px",
    },
  };
  
export default Courses;
