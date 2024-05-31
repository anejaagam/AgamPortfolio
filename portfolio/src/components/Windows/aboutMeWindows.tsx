import React from 'react';

const profilePic: string = require('../../assets/misc/Me.jpg');
const linkedInIcon: string = require('../../assets/misc/linkedin.svg').default;
const pdfIcon: string = require('../../assets/misc/pdf.svg').default;
const emailIcon: string = require('../../assets/misc/mail.svg').default;

interface AboutMeProps {
    onClose: () => void;
}

const AboutMe: React.FC<AboutMeProps> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-0">
            <div className="bg-white w-3/5 shadow-lg relative bg-opacity-70 backdrop-blur rounded-md">
                <div className="flex justify-between items-start">
                    <h2 className="text-xl p-4">About Me</h2>
                    <button className="text-xl text-red-500" onClick={onClose} style={styles.closeButton}>x</button>
                </div>
                <div className="flex p-4">
                    
                    <div className="w-1/4 p-4">
                        <img src={profilePic} alt="Profile" className="w-full h-auto rounded-2xl" />
                        <div className="flex justify-center mt-4 space-x-4">
                            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                                <img src={linkedInIcon} alt="LinkedIn" className="w-8 h-8" />
                            </a>
                            <a href="/path/to/resume.pdf" target="_blank" rel="noopener noreferrer">
                                <img src={pdfIcon} alt="Resume" className="w-8 h-8" />
                            </a>
                            <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer">
                                <img src={emailIcon} alt="Email" className="w-8 h-8" />
                            </a>
                        </div>
                    </div>
                    <div className="w-3/4 p-4 leading-relaxed">
                    <h1 className=" text-2xl font-bold pb-4">Agam Aneja</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Nibh amet non sed a dignissim. Viverra in mollis eget eget massa egestas eros elit. Libero diam urna malesuada vel. Pretium neque consequat arcu tellus sit sodales. Porta dui viverra habitasse at. Morbi mollis risus massa tristique morbi feugiat.
                        </p>
                        <p className="mt-4">
                            Ut nibh non viverra ultrices laoreet. Aliquet turpis tortor semper vulputate velit eget facilisi. Interdum quam nulla aenean mauris morbi tellus. Nisi sit aliquam est volutpat ut odio sit cras aliquam. Nisi turpis quam hendrerit eget condimentum congue neque. Scelerisque morbi elit sed velit rutrum consequat. Varius nullam enim leo elit enim laoreet ipsum ac.
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
