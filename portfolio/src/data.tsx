import * as projectData from "./projectData";
import * as Data from "./technologiesData";
export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    pdfLink: string;
    githubLink: string;
    images: string[];
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
    institution: string;
    overview: string;
    keyLearnings: string[];
    impactOnCareer: string;
}


export interface Technology {
    id: number;
    name: string;
    category: "Software" | "Programming Language" | "Framework" | "Tool" | "Service";
    icon: string;
}

export interface Experience {
    id: number;
    title: string;
    company: string;
    location: string;
    appImg: string;
    duration: string;
    overview: string;
    responsibilities: string[];
    achievements: string[];
    skillsDeveloped: string[];
    technologiesTools: string[];
    challengeSolution: {
        challenge: string[];
        solution: string[];
    };
}


export const projects: Project[] = projectData.projects;
export const courses: Course[] = [
    {
        id: 1,
        title: "Modern Control",
        institution: "University of British Columbia",
        overview: "State-space modelling and design. Review of linear and matrix algebra, highlights of classical control theory, state-space modelling, continuous and discrete state equations, stability, controllability and observability, design of feedback systems.",
        keyLearnings: [
            "Gained expertise in state-space modelling and control system design.",
            "Developed skills in analyzing system stability, controllability, and observability."
        ],
        impactOnCareer: "This course provided a solid foundation in modern control theory, essential for roles in automation and advanced system design."
    },
    {
        id: 2,
        title: "Supply Chain Tactics and Strategies",
        institution: "University of British Columbia",
        overview: "Key concepts and techniques to analyze, manage and improve supply chain processes for different industries and markets. Emphasis on assessment of supply chain performance to improve competitiveness.",
        keyLearnings: [
            "Learned techniques for supply chain analysis and management.",
            "Developed strategies for improving supply chain performance and competitiveness."
        ],
        impactOnCareer: "The knowledge gained in this course is vital for roles in logistics and supply chain management, enhancing operational efficiency."
    },
    {
        id: 3,
        title: "Mechatronic Systems Laboratory",
        institution: "University of British Columbia",
        overview: "Smart sensors and actuators, electro-pneumatic actuators, automated control systems, industrial communication, smart maintenance, object detection, industrial robotics, modelling and simulation of mechatronic systems.",
        keyLearnings: [
            "Hands-on experience with smart sensors, actuators, and industrial communication.",
            "Developed skills in modeling and simulating mechatronic systems."
        ],
        impactOnCareer: "This course provided practical experience in mechatronics, essential for roles in automation and robotics."
    },
    {
        id: 4,
        title: "Technology Entrepreneurship for Engineers",
        institution: "University of British Columbia",
        overview: "Engineering and innovation, business models, customer development, intellectual property, product development, customer validation, hypothesis testing, company positioning.",
        keyLearnings: [
            "Gained insights into business models and customer development.",
            "Learned the process of product development and company positioning."
        ],
        impactOnCareer: "This course fostered an entrepreneurial mindset, beneficial for founding and managing startups."
    },
    {
        id: 5,
        title: "Law and Ethics for Engineers",
        institution: "University of British Columbia",
        overview: "Ethical theories and their application. The Canadian legal system. Companies, partnerships, independent contractors. Contract documents, specifications, liability, torts and liens. Intellectual property. Agency; evidence; role of an expert witness. Employment law. Professional Governance Act, Code of Ethics, consultation and engagement with Indigenous communities.",
        keyLearnings: [
            "Understanding of ethical theories and their application in engineering.",
            "Knowledge of the Canadian legal system and professional governance."
        ],
        impactOnCareer: "This course ensured a strong ethical and legal foundation, crucial for professional engineering practice."
    },
    {
        id: 6,
        title: "Engineering Capstone Design Project",
        institution: "University of British Columbia",
        overview: "A capstone design project in response to an actual engineering problem. The project can be multi-disciplinary or in a specialized area of engineering. Students are required to submit a comprehensive project report and deliver a formal presentation.",
        keyLearnings: [
            "Developed comprehensive project management and engineering design skills.",
            "Experience in delivering formal presentations and comprehensive project reports."
        ],
        impactOnCareer: "This capstone project provided practical experience in solving real-world engineering problems, preparing for industry challenges."
    },
    {
        id: 7,
        title: "Microcomputer Engineering",
        institution: "University of British Columbia",
        overview: "Microcomputer architecture, number representation, assembly language, parallel and serial input/output, interrupts, memory, peripherals.",
        keyLearnings: [
            "Learned about microcomputer architecture and assembly language.",
            "Gained skills in parallel and serial input/output and interrupt handling."
        ],
        impactOnCareer: "The course laid the foundation for roles in embedded systems and hardware design."
    },
    {
        id: 8,
        title: "Internet of Things",
        institution: "University of British Columbia",
        overview: "Sensing, actuation, sampling, analog-to-digital and digital-to-analog conversion, voice over IP, video codecs, audio codecs, multimedia communication protocols for IoT, wireless communication protocols for IoT.",
        keyLearnings: [
            "Understanding of IoT technologies and communication protocols.",
            "Skills in sensing, actuation, and multimedia communication for IoT."
        ],
        impactOnCareer: "This course equipped me with the knowledge needed to design and implement IoT solutions, a rapidly growing field."
    },
    {
        id: 9,
        title: "Finite Element Methods",
        institution: "University of British Columbia",
        overview: "Finite Element Discretization, Direct Stiffness Method, Numerical Solution of Large Deformations, Formulation of Finite Elements, Auxiliary Equations, Thermomechanical Analysis, Computer Implementation of the Finite Element Methods, Case Studies in Material Forming and Multi-Physics.",
        keyLearnings: [
            "Mastered the finite element discretization and direct stiffness method.",
            "Learned to implement finite element methods in computational software."
        ],
        impactOnCareer: "The skills gained are crucial for roles in structural analysis and simulation engineering."
    },
    {
        id: 10,
        title: "Industrial Automation",
        institution: "University of British Columbia",
        overview: "Linear system modelling, block diagrams, transient response, root locus, frequency response, Bode plots, and controller design. Principles and components of industrial automation systems, programmable logic controllers (PLCs), controller programming languages.",
        keyLearnings: [
            "Developed skills in linear system modeling and control system design.",
            "Hands-on experience with PLCs and industrial automation components."
        ],
        impactOnCareer: "This course prepared me for roles in industrial automation and control system engineering."
    }
];
export const technologies: Technology[] = Data.technologyData;

export const experiences: Experience[] = [
    
    {
        id: 1,
        title: "Founder / Executive Director",
        company: "Aptixx Education",
        location: "Kelowna, BC",
        duration: "October 2019 - Present",
        overview: "Aptixx Robotics is a non-profit organization dedicated to teaching robotics and entrepreneurship to Canadian youth.",
        responsibilities: [
            "Spearheaded the development of an online learning platform and curriculum focused on robotics and entrepreneurship.",
            "Recruited and managed a team to fund and develop prototypes, achieving significant capital acquisition.",
            "Established and nurtured sponsor relations to support organizational funding and resource needs."
        ],
        achievements: [
            "Successfully launched educational programs that enhanced engineering and computer science skills among youth.",
            "Built and maintained successful sponsor relationships, securing ongoing capital and support."
        ],
        skillsDeveloped: [
            "Leadership in educational program development and team management.",
            "Strategic planning and execution in a non-profit educational setting."
        ],
        technologiesTools: ["Educational platforms", "CRM software"],
        challengeSolution: {
            challenge: ["Faced challenges in securing initial funding and efficiently managing resources for a non-profit startup."],
            solution: ["Developed compelling sponsorship packages and managed resources effectively to maximize organizational impact."]
        },
        appImg: require('./assets/windows/aptixxEducation.svg').default,
    },
    {
        id: 2,
        title: "Founder / Business Development Manager",
        company: "Aptixx Enterprise",
        location: "Surrey, BC",
        duration: "June 2020 - July 2021",
        overview: "Specializes in renewable energy solutions, focusing on solar energy system installation and smart home solutions.",
        responsibilities: [
            "Directed business operations including sales, client relations, and marketing.",
            "Managed the design and implementation of solar energy systems and smart home solutions.",
            "Led a team including engineers, electricians, and marketers to deliver comprehensive energy solutions."
        ],
        achievements: [
            "Successfully expanded the company's market presence through innovative product offerings and marketing.",
            "Developed and sold the company after establishing profitable investor relations."
        ],
        skillsDeveloped: [
            "Advanced skills in renewable energy systems, project management, and business development."
        ],
        technologiesTools: ["Aurora", "Pathfinder", "Adobe Photoshop", "Illustrator", "Webflow"],
        challengeSolution: {
            challenge: ["Balanced high costs of advanced technology with customer affordability challenges in solar technologies."],
            solution: ["Implemented strategic sourcing and innovative designs to reduce costs without compromising quality."]
        },
        appImg: require('./assets/windows/aptixxEnterprise.svg').default,
    },
    {
        id: 3,
        title: "Founding Engineer",
        company: "Flextrack Health",
        location: "Kelowna, BC",
        duration: "Sept 2022 - April 2024",
        overview: "Innovative startup focused on leveraging advanced computer vision technology to enhance athletic training.",
        responsibilities: [
            "Led the development of a prototype using computer vision to provide enhanced form feedback and injury prevention.",
            "Engaged in partnerships to enhance product capabilities and expand market reach."
        ],
        achievements: [
            "Developed a prototype that attracted significant industry interest from potential partners like iMaster Health.",
            "Expanded the company’s network within the tech and VC communities."
        ],
        skillsDeveloped: [
            "Expertise in computer vision technology and strategic partnership development."
        ],
        technologiesTools: ["Computer vision technologies", "Partnership management tools"],
        challengeSolution: {
            challenge: ["Navigated the complexities of integrating advanced technology into user-friendly athletic training solutions."],
            solution: ["Employed iterative development and user feedback to refine the product, ensuring alignment with industry standards."]
        },
        appImg: require('./assets/windows/flextrackhealth.svg').default,
    }
          
    
];
