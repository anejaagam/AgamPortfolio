import React from 'react';
import * as Data from '../../data';



interface CoursesProps {
    onClose: () => void;
    course: Data.Course;
}


const Courses: React.FC<CoursesProps> = ({ onClose, course }) => {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-0">
            <div className="bg-white w-2/3 h-fit shadow-lg relative p-4 overflow-auto">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl">Courses Taken</h2>
                    <button
                        className="absolute top-0 right-0 justify-center"
                        onClick={onClose}
                        style={styles.closeButton}
                    >
                        x
                    </button>
                </div>
                <div className="p-4">
                    <div key={course.id} className="mb-4">
                        <h3 className="text-lg font-bold mb-2">{course.title}</h3>
                        <p><strong>Institution:</strong> {course.institution}</p>
                        <p><strong>Overview:</strong> {course.overview}</p>
                        <h4 className="text-md font-bold mt-2">Key Learnings</h4>
                        <ul className="list-disc ml-5">
                            {course.keyLearnings.map((learning, index) => (
                                <li key={index}>{learning}</li>
                            ))}
                        </ul>
                        <p className="mt-2"><strong>Impact on Career:</strong> {course.impactOnCareer}</p>
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
