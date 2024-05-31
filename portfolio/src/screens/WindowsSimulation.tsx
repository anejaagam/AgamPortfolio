import React, { useState } from 'react';
import ProjectWindow from '../components/Windows/projectWindow';
import '../styles/WindowsSimulation.css';
import StartMenu from '../components/Windows/startMenu';
import WindowsExplorer from '../components/Windows/fileExplorer';
import WorkWindow from '../components/Windows/workWindow';
import * as Data from '../data';
import AboutMe from '../components/Windows/aboutMeWindows';

const folder: string = require('../assets/windows/folder.svg').default;
const startmenuLogo = require('../assets/windows/startmenuLogo.png');

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    pdfLink: string;
    githubLink: string;
    images?: string[];
}


const works: Data.Experience[] = Data.experiences;

const projects: Data.Project[] = Data.projects;

const WindowsSimulation: React.FC = () => {
    const [activeProject, setActiveProject] = useState<Project | null>(null);
    const [startMenuVisible, setStartMenuVisible] = useState<boolean>(false);
    const [activeWork, setActiveWork] = useState<Data.Experience | null>(null);
    const [explorerVisible, setExplorerVisible] = useState<boolean>(false);
    const [aboutMeVisible, setAboutMeVisible] = useState<boolean>(false);
    const [activeTab, setActiveTab] = useState<string>('projects');

    const handleFolderClick = (project: Project) => {
        setStartMenuVisible(false);
        setActiveProject(project);
    };
    const handleAppClick = (work: Data.Experience) => {   
       setStartMenuVisible(false);
       setActiveWork(work);
    }
    const handleWorkClose = () => {
        setActiveWork(null);
    }

    const handleStartMenuClick = () => {
        
        setStartMenuVisible(!startMenuVisible);
        console.log(startMenuVisible, 'startMenuVisible');
    };

    const handleClickOutside = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!startMenuVisible) return;
        if ((event.target as Element).closest('#start-menu') === null) {
            setStartMenuVisible(false);
        }
    };

    const handleCloseWindow = () => {
        setActiveProject(null);
    };

    const handleExplorerClick = (startTab: string) => {
        setStartMenuVisible(false);
        setActiveTab(startTab);
        setExplorerVisible(true);
        
       
    };

    const handleCloseExplorer = () => {
        setExplorerVisible(false);
    };

    const handleAboutMeClick = () => {
        setAboutMeVisible(true);
        setStartMenuVisible(false); 
    };

    const handleCloseAboutMe = () => {
        setAboutMeVisible(false);
    };

    return (
        <><div className="h-screen bg-cover bg-center windows-simulation grid grid-cols-5 gap-0 overflow-hidden overscroll-contain" onClick={handleClickOutside}>
            <div className="grid grid-flow-col grid-rows-6 gap-0 mb-10">
                {projects.map(project => (
                    <div key={project.id} className="m-4 cursor-pointer flex flex-wrap" onClick={() => handleFolderClick(project)}>
                        <img src={folder} alt={project.title} className="w-full h-11 leading-none row-end-3" />
                        <p className="text-center text-white w-full leading-none">{project.title}</p>
                    </div>
                ))}
                {works.map(work => (
                    <div key={work.id} className="m-4 cursor-pointer flex flex-wrap justify-center" onClick={() => handleAppClick(work)}>
                        <img src={work.appImg} alt={work.company} className="w-12 h-12 leading-none row-end-3" />
                        <p className="text-center text-white w-full leading-none">{work.company}</p>
                    </div>
                ))}
            </div>
            <div className="fixed bottom-0 items-center flex flex-wrap bg-slate-100 h-12 col-span-11 w-full place-content-center">
                <div onClick={handleStartMenuClick}>
                    <img src={String(startmenuLogo)} alt="Start" className="w-6 h-6" />
                </div>
                <div className="flex mx-4">
                    <img src="/path/to/software-icon1.svg" alt="Software 1" className="w-6 h-6" />
                    <img src="/path/to/software-icon2.svg" alt="Software 2" className="w-6 h-6" />
                    {/* Add more icons as needed */}
                </div>
            </div>
            {explorerVisible && <WindowsExplorer onClose={handleCloseExplorer} onFolderClick={handleFolderClick} startTab={activeTab}/>}
            {activeProject && <ProjectWindow project={activeProject} onClose={handleCloseWindow} />}
            {aboutMeVisible && <AboutMe onClose={handleCloseAboutMe} />}
            {activeWork && <WorkWindow experience={activeWork} onClose={handleWorkClose} />}
        </div>
        <div className='overscroll-contain'>{startMenuVisible && <StartMenu onClose={handleStartMenuClick} onExplorerClick={handleExplorerClick} onFolderClick={handleFolderClick} onWorkClick={handleAppClick} onAboutMeClick={handleAboutMeClick}/>}</div>
        </>
        
        
        
    );
};

export default WindowsSimulation;
