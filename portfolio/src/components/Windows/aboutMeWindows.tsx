import React from 'react';

const profilePic: string = require('../../assets/misc/Me.jpg');
const linkedInIcon: string = require('../../assets/misc/linkedin.svg').default;

const emailIcon: string = require('../../assets/misc/mail.svg').default;

interface AboutMeProps {
    onClose: () => void;
}

const AboutMe: React.FC<AboutMeProps> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-0">
            <div className="bg-white w-4/5 shadow-lg relative bg-opacity-70 backdrop-blur rounded-md">
                <div className="flex justify-between items-start">
                    <h2 className="text-xl p-4">About Me</h2>
                    <button className="text-xl text-red-500" onClick={onClose} style={styles.closeButton}>x</button>
                </div>
                <div className="flex p-4">
                    
                    <div className="w-1/4 p-4 items-center flex flex-col justify-center">
                        <img src={profilePic} alt="Profile" className="w-full h-auto rounded-[1.5rem]" />
                        <div className="flex justify-center mt-4 space-x-4">
                            <a href="https://linkedin.com/in/agamjotaneja" target="_blank" rel="noopener noreferrer">
                                <img src={linkedInIcon} alt="LinkedIn" className="w-8 h-8" />
                            </a>
                            {/*<a href="/path/to/resume.pdf" target="_blank" rel="noopener noreferrer">
                                <img src={pdfIcon} alt="Resume" className="w-8 h-8" />
    </a>*/}
                            <a href="mailto:aneja.agamjot@gmail.com" target="_blank" rel="noopener noreferrer">
                                <img src={emailIcon} alt="Email" className="w-8 h-8" />
                            </a>
                        </div>
                    </div>
                    <div className="w-3/4 p-4 leading-relaxed">
                        <h1 className="w-full text-2xl font-bold">Agam Aneja</h1>
                        <p className="text-sm flex flex-wrap pb-4">BASC Mechanical Engineering (Mechatronics Option), Computer Science Minor</p>

                        <p>
                        I am a versatile and driven engineer with a Bachelor's degree in Mechanical Engineering (Mechatronics option) and a minor in Computer Science from the University of British Columbia. My interdisciplinary expertise spans mechanical engineering and computer science, enabling me to tackle complex challenges and develop innovative solutions.
                        </p>
                        <p className="mt-4">
                        Throughout my career, I have founded startups like Aptixx Education and Flextrack Health, where I led projects involving advanced computer vision technology, mobile applications, and full stack web development. My work includes developing prototypes for enhancing athletic training, designing intelligent automation systems, and creating educational programs to inspire the next generation of engineers.
                        </p>
                        <p className="mt-4">
                        With hands-on experience in both engineering and software development, I am passionate about applying my skills to real-world problems, driving technological advancements, and making a meaningful impact in the industry.
                        </p>
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
export default AboutMe;
