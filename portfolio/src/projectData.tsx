import { Project } from "./data";

export const projects: Project[] = [
    {
        id: 1,
    title: "Smart Moisture Sensor System",
    description: "A sustainable solution aimed at optimizing water usage in residential gardens by utilizing smart soil moisture sensors integrated with a central control system.",
    image: "path/to/image.jpg",
    pdfLink: "path/to/report.pdf",
    githubLink: "path/to/github/repo",
    images: ["path/to/image1.jpg", "path/to/image2.jpg"],
    locationDuration: "University of British Columbia Okanagan, February to April 2020",
    overview: "This project developed a Smart Moisture Sensor System to address water scarcity issues by optimizing water usage in residential outdoor environments. The system integrates soil sensors with a central motherboard to monitor and control water dispensation based on real-time soil moisture data, aiming to minimize water waste and enhance plant growth.",
    roleResponsibilities: {
        general: "As part of a team, my role encompassed system design, data analysis, and implementation.",
        specificTasks: [
            "Designing the system architecture.",
            "Programming the motherboard for data collection and processing.",
            "Conducting field tests to validate the system’s functionality."
        ]
    },
    technologiesTools: {
        hardware: ["Arduino Nano BLE", "Soil Moisture Sensors", "Water Flow Sensors"],
        software: ["SolidWorks", "Excel", "Fritzing", "Arduino IDE"],
        tools: []
    },
    challengesFaced: "One of the major challenges was ensuring reliable communication between the soil sensors and the motherboard. Signal interference and physical barriers initially disrupted data transmission.",
    solutionsInnovations: "We improved signal strength by optimizing the sensor placement and enhancing the firmware for better error handling and data retry mechanisms. Additionally, we developed a user-friendly interface for the system, allowing users to set moisture thresholds and watering schedules.",
    resultsImpact: "The system successfully reduced water usage by up to 30% in test gardens by tailoring watering schedules to actual soil moisture levels, preventing both overwatering and underwatering. The project was well-received in academic evaluations, highlighting its potential scalability for larger community applications.",
    keyLearnings: "This project deepened my understanding of embedded systems and their applications in sustainable technology. It also enhanced my skills in teamwork, problem-solving, and adapting technology to meet environmental needs.",
    visualsSupportingMaterial: "Diagrams of the system setup and data flow, photographs from field testing, and screenshots of the user interface could be provided here to better illustrate the project components and results."
    },
    {

            id: 2,
            title: "Keeyask Hydroelectric Project Economic Analysis",
            description: "An in-depth economic and environmental analysis of the Keeyask Hydroelectric Project in partnership with Manitoba Hydro and four Manitoba First Nations, focusing on long-term sustainability and community impact.",
            image: "path/to/image.jpg",
            pdfLink: "path/to/report.pdf",
            githubLink: "path/to/github/repo",
            images: ["path/to/analysis1.jpg", "path/to/analysis2.jpg"],
            locationDuration: "University of British Columbia Okanagan, Summer 2021",
            overview: "This technical report analyzes the Keeyask Hydroelectric Project in terms of environmental impact, economic benefits, and effects on indigenous communities, comparing it with potential alternatives.",
            roleResponsibilities: {
                general: "Involved in literature review, economic data analysis, and report editing.",
                specificTasks: [
                    "Conducting literature reviews on hydroelectric projects.",
                    "Analyzing economic data for NPV and IRR.",
                    "Collaborating in writing and editing the final report."
                ]
            },
            technologiesTools: {
                hardware: [],
                software: ["Excel"],
                tools: ["Data collection tools", "Statistical analysis packages"]
            },
            challengesFaced: "Modeling long-term economic impacts with fluctuating variables such as energy prices and environmental regulations.",
            solutionsInnovations: "Developed a comprehensive economic model integrating socio-economic impacts on local communities.",
            resultsImpact: "Revealed higher NPV for the Keeyask Project with significant long-term benefits for sustainability and local communities.",
            keyLearnings: "Enhanced skills in economic modeling and understanding of socio-economic and environmental considerations in sustainable energy planning.",
            visualsSupportingMaterial: "Economic models, projected cash flows graphs, socio-economic impact comparison tables."
        
    },
    {
        id: 3,
    title: "Heat Treatment Optimization for Excavation Drill Gear",
    description: "Optimization of heat treatment processes for a gear used in an excavation drill gearbox, focusing on achieving specific hardness levels efficiently.",
    image: "path/to/image.jpg",
    pdfLink: "path/to/report.pdf",
    githubLink: "path/to/github/repo",
    images: ["path/to/hardness_chart.jpg", "path/to/cost_analysis.jpg"],
    locationDuration: "University of British Columbia Okanagan, December 4, 2020",
    overview: "This project focused on the design and optimization of a gear's heat treatment process to meet specific operational hardness requirements while minimizing cost.",
    roleResponsibilities: {
        general: "Involved in material selection, simulation of heat treatment processes, and cost analysis.",
        specificTasks: [
            "Selecting suitable materials based on hardness and operational requirements.",
            "Running simulations to determine optimal heat treatment conditions.",
            "Analyzing the cost implications of various treatment scenarios."
        ]
    },
    technologiesTools: {
        hardware: [],
        software: ["Excel", "Python"],
        tools: []
    },
    challengesFaced: "Achieving required mechanical properties within cost and operational constraints.",
    solutionsInnovations: "Used a combination of simulation and empirical testing to optimize the heat treatment process, significantly reducing trial costs.",
    resultsImpact: "Identified optimal alloy and treatment parameters that met the hardness requirements at a controlled cost, suitable for heavy-duty applications.",
    keyLearnings: "Enhanced understanding of material optimization in industrial applications and developed skills in analytical and simulation techniques.",
    visualsSupportingMaterial: "Hardness depth charts, cost analysis graphs, process diagrams."
    },
    {
        id: 4,
        title: "Finite Element Analysis of a Truss System",
        description: "A detailed finite element analysis of a truss system under various loading conditions to predict displacements, reaction forces, and stresses.",
        image: "path/to/image.jpg",
        pdfLink: "path/to/final_report.pdf",
        githubLink: "path/to/github/repo",
        images: ["path/to/initial_truss.jpg", "path/to/deformed_truss.jpg"],
        locationDuration: "ENGR 492 – Finite Element Methods, University of British Columbia Okanagan, 2023",
        overview: "Utilized finite element methods to analyze structural responses of a truss system, employing the direct stiffness method for computational analysis.",
        roleResponsibilities: {
            general: "Script development, data input, analysis execution, and results interpretation.",
            specificTasks: [
                "Developing Python scripts for finite element analysis.",
                "Inputting and managing structural data and material properties.",
                "Analyzing output data and visualizing displacement and stress."
            ]
        },
        technologiesTools: {
            hardware: [],
            software: ["Python", "NumPy", "Matplotlib"],
            tools: ["Direct stiffness method"]
        },
        challengesFaced: "Modeling complex truss structures and applying accurate boundary conditions in a simulation environment.",
        solutionsInnovations: "Created a versatile script that adapts to various scenarios, reducing the need for physical prototypes and testing.",
        resultsImpact: "Provided accurate predictions of truss behavior under load, validated structural integrity, and offered a method to reduce testing costs.",
        keyLearnings: "Enhanced skills in finite element analysis and structural modeling, with practical applications in structural engineering.",
        visualsSupportingMaterial: "Displacement graphs, stress distribution charts, and comparison plots of original and deformed truss structures."
    },
    {
        id: 5,
    title: "Manufacturing Processes Lab: Train Cart Project",
    description: "A hands-on project transforming a conceptual train cart design into a physical model using various manufacturing processes.",
    image: "path/to/image.jpg",
    pdfLink: "path/to/report.pdf",
    githubLink: "path/to/github/repo",
    images: ["path/to/train_cart.jpg", "path/to/cad_drawings.jpg"],
    locationDuration: "University of British Columbia Okanagan, December 6, 2021",
    overview: "This project involved designing and manufacturing a train cart, utilizing various tools and machinery to achieve a functional prototype.",
    roleResponsibilities: {
        general: "Involved in design, simulation, and hands-on manufacturing of the train cart.",
        specificTasks: [
            "Designing the train cart in SolidWorks.",
            "Operating machinery such as mills, lathes, and drill presses.",
            "Assembling the final product and making necessary adjustments."
        ]
    },
    technologiesTools: {
        hardware: [],
        software: ["SolidWorks"],
        tools: ["CNC Waterjet Cutting Machine","Mill", "Drill press", "Lathe", "Sander", "Bandsaw", "Hand tools"]
    },
    challengesFaced: "Material constraints and the need to modify designs due to manufacturing limitations.",
    solutionsInnovations: "Dynamic adaptation of design and process flow to overcome material and equipment limitations.",
    resultsImpact: "Successfully completed the project, gaining insights into practical manufacturing processes.",
    keyLearnings: "Enhanced understanding of design translation into physical products and improved skills in machinery operation.",
    visualsSupportingMaterial: "Completed train cart photographs, CAD drawings, manufacturing process diagrams."

    },
    {
        id: 6,
        title: "Lifted Tsang Suspension Assembly for MEMS Applications",
        description: "A project focused on the design, simulation, and testing of a Lifted Tsang Suspension Assembly for use in MEMS, aiming to achieve thermal and electrical isolation in sensitive devices.",
        image: "path/to/image.jpg",
        pdfLink: "path/to/report.pdf",
        githubLink: "path/to/github/repo",
        images: ["path/to/design_diagram.jpg", "path/to/simulation_snapshot.jpg"],
        locationDuration: "University of British Columbia Okanagan, December 7, 2022",
        overview: "This project involved the application of Tsang Suspensions in MEMS to improve device efficiency and sensitivity through enhanced isolation properties.",
        roleResponsibilities: {
            general: "Research, design, simulation, and testing of the Tsang Suspension.",
            specificTasks: [
                "Designing the assembly in SolidWorks and Klayout.",
                "Fabricating the prototype using advanced photolithography.",
                "Conducting stress tests and adjusting design parameters accordingly."
            ]
        },
        technologiesTools: {
            hardware: ["Photolithography equipment", "SEM for testing"],
            software: ["SolidWorks", "Klayout"],
            tools: ["SU-8 photoresist"]
        },
        challengesFaced: "Optimizing the suspension design to minimize stress concentrations and prevent mechanical failure.",
        solutionsInnovations: "Used advanced simulation techniques to refine the spring design, effectively reducing the stress levels in critical areas.",
        resultsImpact: "Achieved a reliable and efficient suspension design that can be integrated into various MEMS applications, enhancing their performance and durability.",
        keyLearnings: "Gained insights into the complexities of MEMS design and the critical importance of precise simulation and material selection.",
        visualsSupportingMaterial: "Detailed design diagrams, simulation results, and photographs from the testing phase."
    },
    {
        id: 7,
        title: "Application of MOORA to Rank Battery Types for Electric Light Aircraft",
        description: "A comprehensive analysis using MOORA to evaluate various battery types for their suitability in electric light aircraft, focusing on sustainability and efficiency.",
        image: "path/to/image.jpg",
        pdfLink: "path/to/report.pdf",
        githubLink: "path/to/github/repo",
        images: ["path/to/analysis_chart.jpg", "path/to/decision_matrix.jpg"],
        locationDuration: "University of British Columbia Okanagan, October 20, 2023",
        overview: "Utilized MOORA methodology to rank battery types based on performance, cost, and environmental impact, aiding the design of sustainable electric aircraft.",
        roleResponsibilities: {
            general: "Involved in research, data analysis, and methodology application.",
            specificTasks: [
                "Defining evaluation criteria based on industry standards.",
                "Conducting MOORA analysis to normalize and weight data.",
                "Reporting findings and recommendations."
            ]
        },
        technologiesTools: {
            hardware: [],
            software: ["Excel"],
            tools: ["MOORA methodology"]
        },
        challengesFaced: "Balancing diverse criteria such as performance, cost, and environmental impact in battery selection for aviation.",
        solutionsInnovations: "Adopted MOORA for structured multi-criteria decision-making, ensuring comprehensive and balanced evaluations.",
        resultsImpact: "Identified the optimal battery type, supporting the development of sustainable aviation technologies.",
        keyLearnings: "Gained insights into the complexities of decision-making in sustainable technology application and the practical use of MOORA in engineering.",
        visualsSupportingMaterial: "Decision matrices, normalized scores, and final ranking visualizations."
    },
    {
        id: 8,
        title: "Optimization of Textile Recycling Supply Chain Using IBM ILOG CPLEX",
        description: "A comprehensive project that applied advanced optimization techniques to enhance the efficiency and sustainability of the textile recycling supply chain.",
        image: "path/to/image.jpg",
        pdfLink: "path/to/report.pdf",
        githubLink: "path/to/github/repo",
        images: ["path/to/supply_chain_diagram.jpg", "path/to/cost_savings_graph.jpg"],
        locationDuration: "University of British Columbia Okanagan, December 7, 2023",
        overview: "The project involved using IBM ILOG CPLEX to optimize the textile recycling supply chain, aiming to reduce operational costs and environmental impacts.",
        roleResponsibilities: {
            general: "Model design, data analysis, and result interpretation.",
            specificTasks: [
                "Designing the optimization model parameters.",
                "Running simulation scenarios to test model effectiveness.",
                "Analyzing output to identify optimal supply chain configurations."
            ]
        },
        technologiesTools: {
            hardware: [],
            software: ["CPLEX", "Excel"],
            tools: []
        },
        challengesFaced: "Integrating complex supply chain data into a coherent optimization model while addressing both cost efficiency and environmental sustainability.",
        solutionsInnovations: "Developed a multi-objective optimization model that dynamically adjusts to prioritize environmental impacts when necessary, showcasing flexibility in operational strategy.",
        resultsImpact: "Produced an optimized model for textile recycling that reduces costs and carbon emissions, influencing industry practices towards greater sustainability.",
        keyLearnings: "Learned to apply complex optimization tools in a real-world context and appreciated the interplay between economic and environmental factors in supply chain management.",
        visualsSupportingMaterial: "Detailed diagrams of the optimized supply chain, CPLEX model configurations, and impact assessment charts."
    },
    {
        id: 9,
        title: "Control System Design for Motor Speed Regulation",
        description: "A detailed study and implementation of a control system for regulating the speed of an electric motor using modern control theories.",
        image: "path/to/image.jpg",
        pdfLink: "path/to/report.pdf",
        githubLink: "path/to/github/repo",
        images: ["path/to/system_diagram.jpg", "path/to/response_curve.jpg"],
        locationDuration: "ENGR 480: Modern Control, University of British Columbia Okanagan",
        overview: "Development of a motor speed control system through comprehensive phase-based analysis including system design, stability, and controller efficiency.",
        roleResponsibilities: {
            general: "Analysis, design, and implementation of the control system.",
            specificTasks: [
                "Performing eigen-analysis and assessing system responses.",
                "Evaluating controllability and observability of the system.",
                "Designing and implementing a controller based on Ackerman's method."
            ]
        },
        technologiesTools: {
            hardware: [],
            software: ["MATLAB"],
            tools: ["Control system analysis and design techniques"]
        },
        challengesFaced: "Ensuring robust system performance across diverse operational conditions.",
        solutionsInnovations: "Utilization of advanced control design techniques to enhance system stability and performance.",
        resultsImpact: "Achieved enhanced system stability and performance, demonstrating potential for wide application in various industries.",
        keyLearnings: "Enhanced proficiency in MATLAB and modern control theories, understanding their practical applications in industry.",
        visualsSupportingMaterial: "Detailed diagrams of the control system, MATLAB simulation results, and theoretical analysis documentation."
    },
    {
        id: 10,
        title: "Measuring Station - Calibration and HMI Control",
        description: "Exploration of analog sensor calibration and HMI control views, focusing on a distance measurement sensor using a laser.",
        image: "path/to/image.jpg",
        pdfLink: "path/to/lab2_report.pdf",
        githubLink: "path/to/github/repo",
        images: ["path/to/lab_setup.jpg", "path/to/calibration_graph.jpg"],
        locationDuration: "MANF 486: Mechatronic Systems Laboratory, UBC Okanagan Campus, February 3rd, 2023",
        overview: "The lab involved calibrating an analog distance sensor and programming a simulated HMI to manage and display sensor operations effectively.",
        roleResponsibilities: {
            general: "Sensor calibration, HMI programming, and data analysis.",
            specificTasks: [
                "Calibrating the laser distance sensor across its operational range.",
                "Programming simulated HMI for operational control and data display.",
                "Analyzing sensor output and performing system accuracy assessments."
            ]
        },
        technologiesTools: {
            hardware: ["Festo Measuring MPS Station", "Analog laser distance sensor"],
            software: ["TIA", "Excel"],
            tools: ["Calipers for physical measurement"]
        },
        challengesFaced: "Ensuring high accuracy and reliability in sensor readings and integrating sensor data with HMI displays.",
        solutionsInnovations: "Developed a method for precise sensor calibration and efficient HMI interaction design.",
        resultsImpact: "Achieved enhanced system reliability and user interaction through effective sensor calibration and HMI integration.",
        keyLearnings: "Gained insights into sensor technology and HMI programming, enhancing skills in system design and data integration.",
        visualsSupportingMaterial: "Sensor calibration setup, HMI interface screenshots, and data analysis charts."
    },
    {
        id: 11,
        title: "PLC Organization Blocks for Control System Management",
        description: "Study and implementation of various PLC Organization Blocks (OBs) to manage control systems effectively.",
        image: "path/to/image.jpg",
        pdfLink: "path/to/lab3_report.pdf",
        githubLink: "path/to/github/repo",
        images: ["path/to/system_diagram.jpg", "path/to/implementation_flowchart.jpg"],
        locationDuration: "MANF 486: Mechatronic Systems Laboratory, UBC Okanagan Campus, March 9th, 2023",
        overview: "Focused on understanding and applying different types of Organization Blocks in PLC to optimize system operations.",
        roleResponsibilities: {
            general: "Programming and configuration of PLC OBs.",
            specificTasks: [
                "Implementing Startup, Main, and Hardware Interrupt OBs.",
                "Configuring and testing OBs for system initialization and error handling.",
                "Integrating OBs within complex control systems for enhanced automation."
            ]
        },
        technologiesTools: {
            hardware: ["PLC systems"],
            software: ["TIA"],
            tools: ["SCL, SFC programming languages"]
        },
        challengesFaced: "Configuring OBs to handle system tasks efficiently while ensuring robust error handling and system response.",
        solutionsInnovations: "Customized OB configurations to optimize system performance and reliability.",
        resultsImpact: "Streamlined system operations and improved response times, contributing to more efficient process management.",
        keyLearnings: "Enhanced understanding of PLC programming and OB functionality, with practical skills in system integration and troubleshooting.",
        visualsSupportingMaterial: "PLC configuration screenshots, flowcharts of OB implementations, and system response graphs."
    },
    {
        id: 12,
        title: "Electro-Pneumatic Circuit Design and Simulation",
        description: "Design and simulation of electro-pneumatic circuits for a pick-and-place system using FluidSIM software.",
        image: "path/to/image.jpg",
        pdfLink: "path/to/lab6_report.pdf",
        githubLink: "path/to/github/repo",
        images: ["path/to/pneumatic_model.jpg", "path/to/circuit_simulation.jpg"],
        locationDuration: "MANF 486: Mechatronic Systems Laboratory, UBC Okanagan Campus, March 22nd, 2023",
        overview: "The lab involved designing a pneumatic control system and simulating its operations to replace a PLC-based system.",
        roleResponsibilities: {
            general: "System design and simulation in FluidSIM.",
            specificTasks: [
                "Modeling the pneumatic system as per FESTO documentation.",
                "Creating an electronic control circuit to manage system operations.",
                "Simulating the system's pneumatic and control processes."
            ]
        },
        technologiesTools: {
            hardware: ["Pneumatic components", "FESTO MPS station"],
            software: ["FluidSIM"],
            tools: ["Pneumatic diagrams", "Electronic circuit elements"]
        },
        challengesFaced: "Integrating pneumatic components with electronic controls in a simulation environment.",
        solutionsInnovations: "Developed a comprehensive simulation model that accurately represents physical system behaviors.",
        resultsImpact: "Provided a cost-effective and educational tool for understanding and teaching pneumatic system design and control.",
        keyLearnings: "Gained proficiency in pneumatic systems and simulation software, enhancing capabilities in system design and troubleshooting.",
        visualsSupportingMaterial: "Screenshots of the FluidSIM interface, diagrams of pneumatic setups, and videos of the simulation."
    },
    {
        id: 13,
        title: "Smart Sensor Implementation and Analysis",
        description: "Exploration of smart sensors within a PLC program for enhanced system efficiency and data processing.",
        image: "path/to/image.jpg",
        pdfLink: "path/to/lab8_report.pdf",
        githubLink: "path/to/github/repo",
        images: ["path/to/sensor_setup.jpg", "path/to/data_flow.jpg"],
        locationDuration: "MANF 486: Mechatronic Systems Laboratory, UBC Okanagan Campus, April 13th, 2023",
        overview: "Focused on integrating smart sensors into manufacturing systems to leverage IoT and Industry 4.0 capabilities.",
        roleResponsibilities: {
            general: "Sensor integration and PLC programming.",
            specificTasks: [
                "Implementing smart sensors in distance measurement devices.",
                "Programming PLCs to interact with smart sensors for data acquisition and processing.",
                "Analyzing the impact of smart sensor technology on system performance."
            ]
        },
        technologiesTools: {
            hardware: ["Smart sensors", "PLC systems"],
            software: ["TIA"],
            tools: ["IoT networks", "Data processing techniques"]
        },
        challengesFaced: "Ensuring seamless integration of smart sensors with existing PLC systems and maximizing data utility.",
        solutionsInnovations: "Utilized advanced sensor capabilities to improve data accuracy and system responsiveness.",
        resultsImpact: "Enhanced system intelligence and efficiency, supporting advanced manufacturing processes.",
        keyLearnings: "Deepened understanding of smart sensor technology and its application in modern industrial systems.",
        visualsSupportingMaterial: "Sensor configuration diagrams, system integration schematics, and performance analysis charts."
    },
    {
        id: 14,
        title: "Open Source Recumbent E-Trike: Enhancing Sustainable Transportation in Kelowna",
        description: "A capstone project focused on designing, manufacturing, and electrifying an open-source recumbent trike to address sustainable transportation needs in Kelowna.",
        image: "path/to/image.jpg",
        pdfLink: "path/to/final_report.pdf",
        githubLink: "path/to/github/repo",
        images: ["path/to/design_diagrams.jpg", "path/to/manufacturing_process.jpg", "path/to/final_trike.jpg"],
        locationDuration: "ENGR 499 – Capstone Project, University of British Columbia Okanagan, 2022-2023",
        overview: "The project involved designing a recumbent trike that could be manually operated or electrified, focusing on affordability, sustainability, and ease of replication.",
        roleResponsibilities: {
            general: "Project leadership, coordination of design and manufacturing phases, oversight of electrification and software development.",
            specificTasks: [
                "Concept generation and design testing using SolidWorks.",
                "Supervision of the manufacturing process ensuring safety and material quality.",
                "Management of the electrification phase, incorporating cost-effective and efficient electrical systems.",
                "Direction of software development for the SKID app, enhancing functionality and user safety."
            ]
        },
        technologiesTools: {
            hardware: ["Arduino"],
            software: ["SolidWorks", "Flutter", "Firebase"],
            tools: ["Welding machine", "Tube bender", "Drill",]
        },
        challengesFaced: "Navigating regulatory requirements, balancing design functionality with cost and replication ease, integrating affordable and effective electrical systems.",
        solutionsInnovations: "Modular design for manual and electric use, cost management through E-bike kit usage, comprehensive safety and navigation app integration.",
        resultsImpact: "Produced a functional, regulatory-compliant trike prototype, demonstrated potential for impacting local transportation, provided a platform for sustainable design education.",
        keyLearnings: "Enhanced project management and technical skills, in-depth understanding of sustainable transportation design, improved proficiency in integrated system design.",
        visualsSupportingMaterial: "CAD drawings, manufacturing photos, app interface screenshots."
    },
    {
        id: 15,
        title: "Design of a Single-Stage Reduction Gearbox",
        description: "A comprehensive project involving the design of a single-stage reduction gearbox capable of handling significant power loads, with an emphasis on durability and efficiency.",
        image: "path/to/image.jpg",
        pdfLink: "path/to/final_report.pdf",
        githubLink: "path/to/github/repo",
        images: ["path/to/gearbox_design.jpg", "path/to/cad_model.jpg", "path/to/simulation_result.jpg"],
        locationDuration: "ENGR 380 – Design of Machine Elements, University of British Columbia Okanagan, Winter Term 2, 2021-2022",
        overview: "The project entailed designing a gearbox with specific performance metrics, utilizing CAD and simulation software to ensure optimal design and performance.",
        roleResponsibilities: {
            general: "Project lead overseeing all design aspects, coordination, and final reporting.",
            specificTasks: [
                "Leading the gear and component design in SolidWorks.",
                "Performing calculations and simulations to optimize the gearbox design.",
                "Compiling a comprehensive final report detailing the design process, analysis, and recommendations."
            ]
        },
        technologiesTools: {
            hardware: [],
            software: ["SolidWorks", "Excel"],
            tools: ["CAD modeling", "Stress analysis", "Performance simulation"]
        },
        challengesFaced: "Designing a compact and efficient gearbox that meets high power transmission requirements while ensuring reliability and cost-effectiveness.",
        solutionsInnovations: "Utilized spur gears for simplicity and efficiency, applied advanced simulation techniques to enhance design precision, and produced a detailed technical report as a guideline for manufacturing.",
        resultsImpact: "Successfully designed a high-performance gearbox validated by simulations, with potential applications in various industrial scenarios.",
        keyLearnings: "Enhanced understanding of gearbox design complexities, improved leadership and technical skills, and deepened knowledge of mechanical design integration.",
        visualsSupportingMaterial: "CAD drawings, simulation snapshots, and technical documentation."
    },
    {
        id: 16,
        title: "Helping Hand: An At-Home Full Care Overbed Table for Huntington’s Disease Patients",
        description: "A winning project from the Okanagan Engineering Competition, designed to assist Huntington's Disease patients with daily activities using a specially designed overbed table.",
        image: "path/to/image.jpg",
        pdfLink: "path/to/presentation.pdf",
        githubLink: "path/to/github/repo",
        images: ["path/to/overbed_table_design.jpg", "path/to/materials_and_costs.jpg"],
        locationDuration: "Okanagan Engineering Competition, University of British Columbia Okanagan",
        overview: "Innovative overbed table designed to improve daily life for patients with Huntington’s Disease, featuring built-in mechanisms for ease of use and safety.",
        roleResponsibilities: {
            general: "Project lead responsible for design, team coordination, and competition presentation.",
            specificTasks: [
                "Leading the design process in SolidWorks, ensuring functionality and patient safety.",
                "Material selection and cost estimation to maintain affordability and durability.",
                "Presenting and defending the design at the competition, resulting in a first-place finish."
            ]
        },
        technologiesTools: {
            hardware: [],
            software: ["SolidWorks"],
            tools: []
        },
        challengesFaced: "Designing an overbed table that was fully functional for Huntington’s Disease patients within cost and usability constraints.",
        solutionsInnovations: "Integration of patient-specific features like pill dispensers and grip bars, designed with attention to detail to enhance daily life.",
        resultsImpact: "Award-winning project recognized for its innovative approach to healthcare needs, potential for commercial production.",
        keyLearnings: "Enhanced understanding of design for healthcare needs and the importance of ergonomic and practical design in medical applications.",
        visualsSupportingMaterial: "Detailed CAD renders, competition presentation slides, and materials selection documentation."
    },
    {
        id: 17,
        title: "YLW Covid-19 Health Safety Proposal",
        description: "An award-winning engineering consulting proposal designed for the Kelowna International Airport to enhance safety and operational efficiency in response to the Covid-19 pandemic.",
        image: "path/to/image.jpg",
        pdfLink: "path/to/full_proposal.pdf",
        githubLink: "path/to/github/repo",
        images: ["path/to/airport_layout_changes.jpg", "path/to/technology_implementations.jpg"],
        locationDuration: "Okanagan Engineering Competition, University of British Columbia Okanagan",
        overview: "The project aimed to integrate advanced health safety protocols at the Kelowna International Airport, focusing on reducing virus transmission risk while maintaining high operational standards.",
        roleResponsibilities: {
            general: "Project lead, responsible for overall strategy development, team coordination, and proposal presentation.",
            specificTasks: [
                "Developing and detailing safety strategies tailored to airport operations.",
                "Integrating technology solutions to manage passenger flow and staff training.",
                "Presenting the final proposal at the engineering competition, leading to a win."
            ]
        },
        technologiesTools: {
            hardware: [],
            software: [],
            tools: ["Strategic planning", "Health safety protocols", "Operational efficiency measures"]
        },
        challengesFaced: "Creating a scalable and quickly implementable proposal that adheres to evolving health standards while ensuring airport operational efficiency.",
        solutionsInnovations: "Implemented phased safety measures, technological enhancements for passenger management, and training modules for staff to ensure adherence to health guidelines.",
        resultsImpact: "The proposal won the Okanagan Engineering Competition and provided a scalable model for airports to manage health crises effectively.",
        keyLearnings: "Learned the importance of agile project management in crisis situations and gained skills in developing comprehensive health safety strategies.",
        visualsSupportingMaterial: "Proposal presentation slides, detailed strategy documents, and implementation timelines."
    }
]