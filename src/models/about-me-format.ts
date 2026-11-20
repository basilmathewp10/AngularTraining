export interface AboutMeFormat {
    introduction: string;

    education: {
        qualification: string;
        institution: string;
        year: string;
        score: string;
    }[];

    workExperience: {
        role: string;
        company: string;
        duration: string;
        description: string;
    }[];

    technicalSkills: {
        category: string;
        skills: string[];
    }[];

    areasOfInterest: string[];

    achievements: {
        name: string;
        description: string;
    }[];
}