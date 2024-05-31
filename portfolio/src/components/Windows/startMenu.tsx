import React from 'react';
import { useNavigate } from 'react-router-dom';
import {ChevronRightIcon} from '@heroicons/react/24/solid';

import * as Data from '../../data';
const me = require('../../assets/me.png');
const power:string = require('../../assets/windows/powerButton.svg').default;
const folder: string = require('../../assets/windows/folder.svg').default;
interface StartMenuProps {
    onClose: () => void;
    onExplorerClick: (startTab: string) => void;
    onFolderClick: (project: Data.Project) => void;
    onWorkClick: (work: Data.Experience) => void;
    onAboutMeClick: () => void;
}

const StartMenu: React.FC<StartMenuProps> = ({ onClose, onExplorerClick, onFolderClick, onWorkClick, onAboutMeClick }) => {
   
    const navigate = useNavigate();

    

    const handleLogout = () => {
        navigate('/');
        // Add your logout logic here
    }
    return (
       <div className="fixed bottom-14 inset-y-60 inset-x-1/3 flex flex-col text-black shadow-lg h-100">
            <div className='flex flex-col basis-11/12 justify-between p-7 rounded-t-md ' style={styles.menuBackground}>
                <div className="mb-4">
                    <div className="flex flex-row justify-between mb-4">
                        <h4 className="font-bold text-base">Technologies</h4>
                        <button className="ml-2 mr-5 bg-white text-sm py-0.5 px-2 shadow-sm rounded-md flex flex-row items-center" onClick={()=>{onExplorerClick('technologies')}}>View All<ChevronRightIcon className='w-3 h-3 ml-1' /> </button>
                    </div>

                    <div className="flex flex-wrap">
                        <img src="/path/to/tech-icon1.svg" alt="Tech 1" className="w-8 h-8 m-1" />
                        <img src="/path/to/tech-icon2.svg" alt="Tech 2" className="w-8 h-8 m-1" />
                        {/* Add more icons as needed */}
                    </div>
                </div>
                <div className="mb-4">
                    <div className="flex flex-row justify-between mb-4">
                        <h4 className="font-bold text-base">Projects</h4>
                        <button className="ml-2 mr-5 bg-white text-sm py-0.5 px-2 shadow-sm rounded-md flex flex-row items-center" onClick={()=>{onExplorerClick('projects')}}>View All <ChevronRightIcon className='w-3 h-3 ml-1' /> </button>
                    </div>
                    <div className="flex flex-wrap items-end">
                    {Data.projects.slice(0, 4).map(project => (
                        <div key={project.id} className="w-1/4 p-1 cursor-pointer" onClick={() => onFolderClick(project)}>
                            <img src={folder} alt={project.title} className="w-5 h-5 inline-block" />
                            <p className="inline-block ml-1 text-sm">{project.title}</p>
                        </div>
                    ))}
                    </div>
                </div>
                <div className="mb-4">
                    <div className="flex flex-row justify-between mb-4">
                        <h4 className="font-bold text-base">Work Experience</h4>
                        <button className="ml-2 bg-white text-sm py-0.5 px-2 shadow-sm rounded-md flex flex-row items-center mr-5" onClick={()=>{onExplorerClick('workExp')}}>View All<ChevronRightIcon className='w-3 h-3 ml-1' /> </button>
                    </div>
                    <div className="flex flex-row items-center ">
                    {Data.experiences.slice(0, 4).map(experience => (
                        <div key={experience.id} className="w-1/4 p-1 cursor-pointer flex flex-col justify-start items-center h-min" onClick={() => onWorkClick(experience)}>
                            <img src={experience.appImg} alt={experience.company} className="w-7 h-7 inline-block" />
                            <p className="inline-block ml-1 text-sm text-center text-wrap">{experience.company}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            <div className="basis-1/12 bottom-0 flex flex-col justify-end rounded-b-md">

                <div className="flex flex-row items-center py-2 px-7" style={styles.footer}>
                    <div className='flex basis-3/4 items-center' onClick={onAboutMeClick}>
                        <img src={me} alt='me' className="w-10 h-10 m-1" />
                        <p className="m-1">Agamjot Aneja</p>
                    </div>
                    <div className='flex basis-1/4 justify-end items-end mr-5 cursor-pointer' onClick={handleLogout}>
                        <img src={power} alt='power' className="w-5 h-5 m-1 justify-end" />
                    </div>
                </div>
            </div>

        </div>
    );
};

const styles = {
    menuBackground: {
        background: 'rgba(242, 240, 240, 0.70)',
        backdropFilter: 'blur(37.5px)',
    },
    footer: {
        background: 'rgba(242, 240, 240, 0.65)',
        backdropFilter: 'blur(37.5px)',

    },
    
}
export default StartMenu;
