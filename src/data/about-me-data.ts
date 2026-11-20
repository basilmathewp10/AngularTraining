import { AboutMeFormat } from "../models/about-me-format";

export const aboutMeData: AboutMeFormat = {
    introduction: `
        I am a Computer Science and Engineering graduate from Federal Institute
        of Science and Technology, passionate about software development,
        problem-solving, and building efficient applications.

        I have experience in web development through my internship at
        TechBright Solutions, where I worked on database-driven web pages
        using .NET. I am continuously improving my development skills and
        exploring modern technologies to build practical software solutions.
    `,

    education: [
        {
            qualification: "B.Tech in Computer Science and Engineering",
            institution: "Federal Institute of Science and Technology (FISAT)",
            year: "2022 – 2026",
            score: "CGPA: 8.33"
        },
        {
            qualification: "AISSCE",
            institution: "Green Valley Public School",
            year: "",
            score: "88%"
        },
        {
            qualification: "AISSE",
            institution: "Green Valley Public School",
            year: "",
            score: "88%"
        }
    ],

    workExperience: [
        {
            role: "Web Development Intern",
            company: "TechBright Solutions",
            duration: "",
            description: "Worked on database-driven web pages using .NET, improving responsiveness and UI consistency."
        }
    ],

    technicalSkills: [
        {
            category: "Programming Languages",
            skills: ["Python", "Java", "JavaScript", "TypeScript"]
        },
        {
            category: "Web Development",
            skills: ["HTML", "CSS", "Bootstrap", "Angular", "Node.js"]
        },
        {
            category: "Database",
            skills: ["SQL", "MySQL"]
        }
    ],

    areasOfInterest: [
        "Data Structures",
        "SQL & DBMS",
        "Python",
        "Java"
    ],

    achievements: [
        {
            name: "GATE 2025",
            description: "Qualified GATE 2025 in Computer Science and Information Technology."
        },
        {
            name: "AWS Academy Cloud Foundations",
            description: "Completed certification covering cloud computing fundamentals, EC2, S3, IAM and networking basics."
        },
        {
            name: "IEEE Xtreme 18.0",
            description: "Participated in the IEEE Xtreme 18.0 programming competition."
        }
    ]
};