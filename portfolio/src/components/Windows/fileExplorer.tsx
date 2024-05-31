import React, { useState } from 'react';
import * as Data from '../../data';
const folderIcon: string = require('../../assets/windows/folder.svg').default;

interface TabContent {
    title: string;
    content: any[] ;
}

interface WindowsExplorerProps {
    onClose: () => void;
    onFolderClick: (project: Data.Project ) => void;
    startTab: string;
}

const projectsContent: Data.Project[] = Data.projects;
const technologiesContent: Data.Technology[] = Data.technologies;
const workExpContent: Data.Experience[] = Data.experiences;

const WindowsExplorer: React.FC<WindowsExplorerProps> = ({ onClose, onFolderClick, startTab }) => {
    const [activeTab, setActiveTab] = useState<string>(startTab);

    const getTabContent = (tab: string): TabContent => {
        switch (tab) {
            case 'projects':
                return { title: 'Projects', content: projectsContent };
            case 'technologies':
                return { title: 'Technologies', content: technologiesContent };
            case 'workExp':
                return { title: 'Work Experience', content: workExpContent };
            default:
                return { title: '', content: [] };
        }
    };

    const tabContent = getTabContent(activeTab);

    return (
        <div className="fixed inset-0 bg-gray-100 justify-center items-center rounded flex flex-col bg-opacity-0 mb-4">

            <div className='flex-col w-3/4 h-3/4 shadow-lg rounded bg-gray-400'>
                <div className='flex justify-end'>
                    <button className="text-xl text-red-500" onClick={onClose} style={styles.closeButton}>x</button>
                </div>
                <div className="flex  h-full mb-4">
                    <div className=" w-1/5 bg-gray-300 p-4">
                        <div className="mb-4 cursor-pointer" onClick={() => setActiveTab('projects')}>
                            <img src={folderIcon} alt="Projects" className="w-6 h-6 inline-block" />
                            <p className="inline-block ml-2">Projects</p>
                        </div>
                        <div className="mb-4 cursor-pointer" onClick={() => setActiveTab('technologies')}>
                            <img src={folderIcon} alt="Technologies" className="w-6 h-6 inline-block" />
                            <p className="inline-block ml-2">Technologies</p>
                        </div>
                        <div className="cursor-pointer" onClick={() => setActiveTab('workExp')}>
                            <img src={folderIcon} alt="Work Experience" className="w-6 h-6 inline-block" />
                            <p className="inline-block ml-2">Work Experience</p>
                        </div>
                    </div>
                    <div className=" w-4/5 bg-white p-4">
                        <div className="flex justify-between items-center border-b pb-2 mb-4">
                            <h2 className="text-xl">{tabContent.title}</h2>

                        </div>
                        <div className="flex flex-wrap text-balance">
                            {tabContent.content.map(item => (
                                <div key={item.id} className="m-4 w-min flex flex-col items-center justify-center" onClick={() => { if (activeTab === 'projects') onFolderClick(item); }}>
                                    <img src={activeTab === 'projects' ? folderIcon : activeTab === 'technologies' ? item.icon : item.appImg} alt={''} className="w-12 h-12" />
                                    <p className="text-center">
                                        {activeTab === 'projects' ? item.title : activeTab === 'technologies' ? item.name : item.company}
                                    </p>
                                </div>
                            ))}
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
  

export default WindowsExplorer;
