import React, { useState } from 'react';
import * as Data from '../../data';
const folderIcon: string = require('../../assets/windows/folder.svg').default;

interface TabContent {
    title: string;
    content: any[];
}

interface WindowsExplorerProps {
    onClose: () => void;
    onFolderClick: (project: Data.Project) => void;
    onWorkClick: (work: Data.Experience) => void;
    onCourseClick: (course: Data.Course) => void;
    startTab: string;
}

const projectsContent: Data.Project[] = Data.projects;
const technologiesContent: Data.Technology[] = Data.technologies;
const workExpContent: Data.Experience[] = Data.experiences;
const coursesContent: Data.Course[] = Data.courses;

const WindowsExplorer: React.FC<WindowsExplorerProps> = ({ onClose, onFolderClick, startTab, onWorkClick, onCourseClick }) => {
    const [activeTab, setActiveTab] = useState<string>(startTab);
    const onTechClick = (tech: Data.Technology) => {

    }
    const getTabContent = (tab: string): TabContent => {
        switch (tab) {
            case 'projects':
                return { title: 'Projects', content: projectsContent };
            case 'technologies':
                return { title: 'Technologies', content: technologiesContent };
            case 'workExp':
                return { title: 'Work Experience', content: workExpContent };
            case 'courses':
                return { title: 'Courses', content: coursesContent };
            default:
                return { title: '', content: [] };
        }
    };

    const tabContent = getTabContent(activeTab);

    return (
        <div className="fixed inset-0 bg-gray-100 justify-center items-center rounded flex flex-col bg-opacity-0 mb-4 ">

            <div className='flex-col w-3/4 h-3/4 shadow-lg rounded overflow-visible relative flex-none'>
                <div className='flex justify-end bg-slate-200'>
                    <button className="text-xl text-red-500" onClick={onClose} style={styles.closeButton}>x</button>
                </div>
                <div className="flex relative h-full  mb-4">
                    <div className=" w-1/5 bg-slate-50 bg-opacity-70 backdrop-blur-2xl p-4">
                        <div className="mb-4 cursor-pointer" onClick={() => setActiveTab('projects')}>
                            <img src={folderIcon} alt="Projects" className="w-6 h-6 inline-block" />
                            <p className="inline-block ml-2">Projects</p>
                        </div>
                        <div className="mb-4 cursor-pointer" onClick={() => setActiveTab('technologies')}>
                            <img src={folderIcon} alt="Technologies" className="w-6 h-6 inline-block" />
                            <p className="inline-block ml-2">Technologies</p>
                        </div>
                        <div className="mb-4 cursor-pointer" onClick={() => setActiveTab('workExp')}>
                            <img src={folderIcon} alt="Work Experience" className="w-6 h-6 inline-block" />
                            <p className="inline-block ml-2">Work Experience</p>
                        </div>
                        <div className="cursor-pointer" onClick={() => setActiveTab('courses')}>
                            <img src={folderIcon} alt="courses" className="w-6 h-6 inline-block" />
                            <p className="inline-block ml-2">Courses</p>
                        </div>
                    </div>
                    <div className="relative w-4/5 bg-white p-4 flex flex-col flex-none ">
                        <div className="flex justify-between items-center border-b pb-2 mb-4 sticky">
                            <h2 className="text-xl">{tabContent.title}</h2>

                        </div>

                        <div className="flex overflow-y-auto no-scrollbar">
                            <table className="min-w-full h-0 bg-white">
                                <thead className="bg-gray-200 sticky top-0 mb-2">
                                    <tr>
                                        <th className="py-2 px-4 text-left">Name</th>
                                        <th className="py-2 px-4 text-left">{activeTab === 'projects' ? 'Details' : activeTab === 'workExp' ? 'Role' : ''}</th>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    {tabContent.content.map((item: any) => (
                                        <tr key={item.id} className="cursor-pointer" onClick={() => { activeTab === 'projects' ? onFolderClick(item) : activeTab === 'workExp' ? onWorkClick(item) : activeTab === 'courses' ? onCourseClick(item) : onTechClick(item) }}>
                                            <td className="py-4 px-4">
                                                <div className="flex items-center">
                                                    <img src={activeTab === 'projects' ? folderIcon : activeTab === 'technologies' ? item.icon : activeTab === 'workExp' ? item.appImg : folderIcon} alt="" className="h-10 mr-4" />
                                                    <span>{activeTab === 'projects' ? item.title : activeTab === 'technologies' ? item.name : activeTab === 'workExp' ? item.company : item.title}</span>
                                                </div>
                                            </td>
                                            <td className="py-2 px-4">
                                                {activeTab === 'projects' ? item.description : activeTab === 'workExp' ? item.role : ''}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
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
        padding: "5px 25px 5px 25px",
    },
};


export default WindowsExplorer;
