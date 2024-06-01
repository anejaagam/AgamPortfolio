import * as projectData from "./projectData";
export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    pdfLink: string;
    githubLink: string;
    images?: string[];
    locationDuration: string;
    overview: string;
    roleResponsibilities: {
        general: string;
        specificTasks: string[];
    };
    technologiesTools: {
        hardware: string[];
        software: string[];
        tools: string[];
    };
    challengesFaced: string;
    solutionsInnovations: string;
    resultsImpact: string;
    keyLearnings: string;
    visualsSupportingMaterial: string;
}
export interface Course {
    id: number;
    title: string;
    description: string;
    subtitle?: string;
}

//interface Work {
//  id: number;
//  title: string;
//  appImg: string;
//  description: string;
//   image: string;
//   responsibilities: string[];
//    skills: string[];
//}
export interface Technology {
    id: number;
    name: string;
    icon: string;
}

export interface Experience {
    website: string | undefined;
    id: number;
    company: string;
    title: string;
    appImg: string;
    description: string;
    duration: string;
    image: string;
    responsibilities: string[];
    skills: string[];
    
}

export const projects: Project[] = projectData.projects;
export const courses: Course[] = [
    {
        id: 1,
        title: 'Course 1',
        description: 'Description of Course 1'
    },
    {
        id: 2,
        title: 'Course 2',
        description: 'Description of Course 2'
    },
    {
        id: 3,
        title: 'Course 3',
        description: 'Description of Course 3'
    },
    {
        id: 4,
        title: 'Course 4',
        description: 'Description of Course 4'
    }
];
export const technologies: Technology[] = [
    {
        id: 1,
        name: 'Technology 1',
        icon: '/path/to/tech-icon1.svg'
    },
    {
        id: 2,
        name: 'Technology 2',
        icon: '/path/to/tech-icon2.svg'
    },
    // Add more technologies as needed
];

export const experiences: Experience[] = [
    {
        id: 1,
        company: `Infinity 
Greens`,
        title: 'Role 1',
        duration: 'Duration 1',
        description: 'Description of Work Experience 1',
        appImg: require('./assets/windows/infinityGreen.svg').default,
        image: "",
        responsibilities: [],
        skills: [],
        website: undefined
    },
    {
        id: 2,
        company: 'FlexTrack \n Health',
        title: 'Role 2',
        duration: 'Duration 2',
        description: 'Description of Work Experience 2',
        appImg: require('./assets/windows/flextrackhealth.svg').default,
        image: "",
        responsibilities: [],
        skills: [],
        website: undefined
    },
    {
        id: 3,
        company: 'Aptixx \n Enterprise',
        title: 'Role 3',
        duration: 'Duration 3',
        description: 'Description of Work Experience 3',
        appImg: require('./assets/windows/aptixxEnterprise.svg').default,
        image: "",
        responsibilities: [],
        skills: [],
        website: undefined
    },
    {
        id: 4,
        company: 'Aptixx \n Education',
        title: 'Role 4',
        duration: 'Duration 4',
        description: 'Description of Work Experience 4',
        appImg: require('./assets/windows/aptixxEducation.svg').default,
        image: "",
        responsibilities: [],
        skills: [],
        website: undefined
    }
    // Add more experiences as needed
];
