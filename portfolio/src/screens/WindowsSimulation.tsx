import React, { useState } from 'react';
import ProjectWindow from '../components/Windows/projectWindow';
import '../styles/WindowsSimulation.css';
import StartMenu from '../components/Windows/startMenu';
import WindowsExplorer from '../components/Windows/fileExplorer';
import WorkWindow from '../components/Windows/workWindow';
import * as Data from '../data';
import AboutMe from '../components/Windows/aboutMeWindows';
import Courses from '../components/Windows/courseDesc';


const folder: string = require('../assets/windows/folder.svg').default;
const startmenuLogo = require('../assets/windows/startmenuLogo.png');
const fileExplorerLogo = require('../assets/windows/Windows_Explorer.svg').default;




const works: Data.Experience[] = Data.experiences;

const projects: Data.Project[] = Data.projects;



const WindowsSimulation: React.FC = () => {
    const [activeProject, setActiveProject] = useState<Data.Project | null>(null);
    const [startMenuVisible, setStartMenuVisible] = useState<boolean>(false);
    const [activeWork, setActiveWork] = useState<Data.Experience | null>(null);
    const [explorerVisible, setExplorerVisible] = useState<boolean>(false);
    const [aboutMeVisible, setAboutMeVisible] = useState<boolean>(false);
    const [activeTab, setActiveTab] = useState<string>('projects');
    const [activeCourse, setActiveCourse] = useState<Data.Course | null>(null);

    const handleFolderClick = (project: Data.Project) => {
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

    const handleOpenCourse = (course:Data.Course) => {
        setActiveCourse(course);
        // Add your logic here
    }
    const handleCloseCourse = () => {
        setActiveCourse(null);
        // Add your logic here
    }


    return (
        <><div className="h-screen bg-cover bg-center windows-simulation grid grid-cols-5 gap-0 overflow-hidden overscroll-contain" onClick={handleClickOutside}>
            <div className="grid grid-flow-col grid-rows-5 gap-0 mb-10">
                {projects.map(project => (
                    <div key={project.id} className="mr-4 cursor-pointer flex flex-wrap justify-center text-ellipsis tracking-tighter" onClick={() => handleFolderClick(project)}>
                        <img src={folder} alt={project.title} className="2xl:w-full w-14 leading-none row-end-3" />
                        <p className="text-center text-white line-clamp-1 text-sm overflow-hidden text-ellipsis">{project.title}</p>
                    </div>
                ))}
                {works.map(work => (
                    <div key={work.id} className="mr-4 cursor-pointer flex flex-wrap justify-center" onClick={() => handleAppClick(work)}>
                        <img src={work.appImg} alt={work.company} className="w-14  2xl:w-full  leading-none row-end-3" />
                        <p className="text-center text-white w-full leading-none ">{work.company}</p>
                    </div>
                ))}
            </div>
            <div className="fixed bottom-0  flex flex-wrap bg-slate-100 h-12 col-span-11 w-full place-content-center">
                
                <div className="inline-flex gap-4 items-center">
                <div onClick={handleStartMenuClick} className='cursor-pointer'>
                    <img src={String(startmenuLogo)} alt="Start" className="w-6 h-6" />
                </div>
                <div onClick={()=>{handleExplorerClick('projects')}} className='cursor-pointer'>
                    <img src={String(fileExplorerLogo)} alt="Explorer" className="w-6 h-6" />
                </div>
                    <img src={require("../assets/softwareIcons/solidworks.svg").default} alt="SolidWorks" className="w-6 h-6" />
                    <img src={require("../assets/softwareIcons/MATLAB.svg").default} alt="Matlab" className="w-6 h-6" />
                    <img src={require("../assets/softwareIcons/RStudio.svg").default} alt="RStudio" className="w-6  h-6" /> 
                    <img src={require("../assets/softwareIcons/VSCode.svg").default} alt="VSCode" className="w-6 h-6" />
                    <img src={require("../assets/softwareIcons/TIA17.svg").default} alt="TIA17" className="w-6  h-6" />
                    <img src={require("../assets/softwareIcons/kicad.png")} alt="KiCAD" className="w-6  h-6" />
                    <img src={require("../assets/softwareIcons/Excel.svg").default} alt="Excel" className="w-6  h-6" />
                </div>
            </div>
            {explorerVisible && <WindowsExplorer onClose={handleCloseExplorer} onFolderClick={handleFolderClick} startTab={activeTab} onWorkClick={handleAppClick} onCourseClick={handleOpenCourse}/>}
            {activeProject && <ProjectWindow project={activeProject} onClose={handleCloseWindow} />}
            {activeCourse && <Courses course={activeCourse} onClose={handleCloseCourse} />}
            {aboutMeVisible && <AboutMe onClose={handleCloseAboutMe} />}
            {activeWork && <WorkWindow experience={activeWork} onClose={handleWorkClose} />}
        </div>
        <div className='overscroll-contain'>{startMenuVisible && <StartMenu onClose={handleStartMenuClick} onExplorerClick={handleExplorerClick} onFolderClick={handleFolderClick} onWorkClick={handleAppClick} onAboutMeClick={handleAboutMeClick}/>}</div>
        </>
        
        
        
    );
};

export default WindowsSimulation;
