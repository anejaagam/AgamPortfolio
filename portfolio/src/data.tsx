export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    pdfLink: string;
    githubLink: string;
    images?: string[];
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

export const projects: Project[] = [
    {
        id: 1,
        title: 'Project 1',
        description: 'Description of Project 1',
        images: ['/path/to/project1-image1.png', '/path/to/project1-image2.png'],
        pdfLink: '/path/to/project1.pdf',
        githubLink: 'https://github.com/username/project1',
        image: ""
    },
    {
        id: 2,
        title: 'Project 2',
        description: 'Description of Project 2',
        images: ['/path/to/project2-image1.png', '/path/to/project2-image2.png'],
        pdfLink: '/path/to/project2.pdf',
        githubLink: 'https://github.com/username/project2',
        image: ""
    },
    {
        id: 3,
        title: 'Project 3',
        description: 'Description of Project 3',
        images: ['/path/to/project3-image1.png', '/path/to/project3-image2.png'],
        pdfLink: '/path/to/project3.pdf',
        githubLink: 'https://github.com/username/project3',
        image: ""
    },
    {
        id: 4,
        title: 'Project 4',
        description: 'Description of Project 4',
        images: ['/path/to/project4-image1.png', '/path/to/project4-image2.png'],
        pdfLink: '/path/to/project4.pdf',
        githubLink: 'https://github.com/username/project4',
        image: ""
    },
    {
        id: 5,
        title: 'Project 5',
        description: 'Description of Project 5',
        images: ['/path/to/project5-image1.png', '/path/to/project5-image2.png'],
        pdfLink: '/path/to/project5.pdf',
        githubLink: 'https://github.com/username/project5',
        image: ""
    },
    {
        id: 6,
        title: 'Project 6',
        description: 'Description of Project 6',
        images: ['/path/to/project6-image1.png', '/path/to/project6-image2.png'],
        pdfLink: '/path/to/project6.pdf',
        githubLink: 'https://github.com/username/project6',
        image: ""
    },
    {
        id: 7,
        title: 'Project 7',
        description: 'Description of Project 7',
        images: ['/path/to/project7-image1.png', '/path/to/project7-image2.png'],
        pdfLink: '/path/to/project7.pdf',
        githubLink: 'https://github.com/username/project7',
        image: ""
    },
    {
        id: 8,
        title: 'Project 8',
        description: 'Description of Project 8',
        images: ['/path/to/project8-image1.png', '/path/to/project8-image2.png'],
        pdfLink: '/path/to/project8.pdf',
        githubLink: 'https://github.com/username/project8',
        image: ""
    },
    {
        id: 9,
        title: 'Project 9',
        description: 'Description of Project 9',
        images: ['/path/to/project9-image1.png', '/path/to/project9-image2.png'],
        pdfLink: '/path/to/project9.pdf',
        githubLink: 'https://github.com/username/project9',
        image: ""
    },
    {
        id: 10,
        title: 'Project 10',
        description: 'Description of Project 10',
        images: ['/path/to/project10-image1.png', '/path/to/project10-image2.png'],
        pdfLink: '/path/to/project10.pdf',
        githubLink: 'https://github.com/username/project10',
        image: ""
    },
    {
        id: 11,
        title: 'Project 11',
        description: 'Description of Project 11',
        images: ['/path/to/project11-image1.png', '/path/to/project11-image2.png'],
        pdfLink: '/path/to/project11.pdf',
        githubLink: 'https://github.com/username/project11',
        image: ""
    },
    {
        id: 12,
        title: 'Project 12',
        description: 'Description of Project 12',
        images: ['/path/to/project12-image1.png', '/path/to/project12-image2.png'],
        pdfLink: '/path/to/project12.pdf',
        githubLink: 'https://github.com/username/project12',
        image: ""
    },
    // Add more projects as needed
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
        company: 'Infinity \n Greens',
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
        appImg: require('./assets/windows/flextrackhealth.png'),
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
        appImg: require('./assets/windows/aptixxEnterprise.png'),
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
        appImg: require('./assets/windows/aptixxEducation.png'),
        image: "",
        responsibilities: [],
        skills: [],
        website: undefined
    }
    // Add more experiences as needed
];
