import { jagota, propertyscout, quadtrust, bchurunway, 
    udemy, chess, onlineExam, traveler, chat } from "./assets/images";
import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    react,
    redux,
    sass,
    summiz,
    tailwindcss,
    typescript
} from "./assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Full Stack Developer",
        company_name: "PROPERTY SCOUT",
        icon: propertyscout,
        iconBg: "#accbe1",
        date: "February 2023 - Present",
        points: [
            "Worked on Landing page to improve UI and UX, resulting in 25% increase of user interaction.",
            "Added project module. To help back back office people to add many upcoming and existing building projects. Almost 30% of our users come to the rental page by project pages. Number of Highly engaged users has also increased by approx. 15%.",
            "Added Review System. So our users can review and can give ratings to buildings.",
            "Worked on Save Search feature. This feature allows us to notify users(by line and email) about available listings related to what the user had searched before.",
            "Worked on a Search module to improve it with ElasticSearch."
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "JAGOTA THAILAND",
        icon: jagota,
        iconBg: "#b7e4c7",
        date: "August 2021 - February 2023",
        points: [
            "Created an application in Angular to track the driver’s live location in delivery for the Logistic Management team. The team can see the path driver had taken and the actual path(by google API). By having an eye of the driver's path we had managed to reduce the cost by 30% and managed to do delivery on time.",
            "Driver PWA application which is used by drivers. In this application, drivers get all the delivery they have to complete on the day. The driver can rearrange the sequences of deliveries. They can take proof of delivery(audio, signature, photo).",
            "Created an API project using node js (With Nest Architecture) for B2B projects.",
            "Established a data pipeline using Kafka between the legacy oracle system and the new MySQL DB.",
            "Created a monitoring application which is being used to notify us(by SMS) if any of our services stopped or crashed."
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "Bchu Runway",
        icon: bchurunway,
        iconBg: "#a7545e",
        date: "September 2018 - July 2021",
        points: [
            "Reduced Website Load time by 40%, directly improving sales by 300 % in the first 6 months.",
            "Implemented NestJS for API projects that are scalable and strongly typed using typescript.",
            "Implemented various Payment Gateway for the website and mobile app to improve the customer.",
            "Developed an in-house inventory management application to improve the team's efficiency.",
        ],
    },
    {
        title: "Software Developer",
        company_name: "Quadtrust Infotech",
        icon: quadtrust,
        iconBg: "#a2d2ff",
        date: "July 2016 - September 2018",
        points: [
            "Core role was to develop customized Enterprise Resource (ERP) software solutions for clients. The application was built with ReactJS with Redux and Ruby on Rails.",
            "Involved in making (SAAS Mobile App Half Traveller) using React-Native and Ruby on Rails.",
            "Worked as Backend Developer in Error fixing software for transformers (Trafixsoft.com).",
            "Mentored and Trained teams inReactJs and React-Native for frontend development.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/mritunjayupadhyay',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/mritunjay-upadhyay-331466193/',
    }
];

export const projects = [
    {
        iconUrl: chat,
        theme: 'btn-back-yellow',
        name: 'Realtime Chat App',
        description: 'The Chat App Frontend is built using modern web technologies to create a responsive and interactive user interface for a chat application.',
        link: 'https://chat.mjcodes.dev/',
    },
    {
        iconUrl: chess,
        theme: 'btn-back-red',
        name: 'Chess App',
        description: 'Developed a frontend chess application in React. All logic and state is managed by Redux. The backend is built with Node.js, Express, and Socket.io. The backend app is in progress not deployed yet.',
        link: 'https://chess.mjcodes.dev/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://summarize.mjcodes.dev/',
    },
    {
        iconUrl: onlineExam,
        theme: 'btn-back-green',
        name: 'Api for examination portal',
        description: 'Created api for exam portal in kolkata. It is designed to take mcq test and give result. It is built with Nestjs, and PostgreSQL.',
        link: 'https://github.com/mritunjayupadhyay/school-management-api-v2/tree/develop',
    },
    {
        iconUrl: udemy,
        theme: 'btn-back-black',
        name: 'Rating System UI similar to Udemy',
        description: 'Craeted a ui for rating system similar to Udemy. I have used React and Tailwind Css for ui.',
        link: 'https://rating.mjcodes.dev/',
    },
];