import { Project } from './typings.d';
interface SanityBody {
    _createtdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInfo: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image;
    primaryTechnologies: string;
    databaseAndStorage: string;
    frameworksAndLibraries: string;
    others: string;
}

export interface Project extends SanityBody {
    _type: "project";
    title: string;
    image: Image;
    linkToProject: string;
    points: string[];
    summary: string;
    technologiesUsed: Technology[];
}

export interface Technology extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}
export interface Skill extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}

export interface Experience extends SanityBody {
    _type: "experience";
    company: string;
    companyImage: Image;
    dateStarted: string;
    dateEnded: string;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points: string[];
    technologiesUsed: Technology[];
}

export interface Project extends SanityBody {
    title: string;
    _type: "project";
    image: Image;
    linkToProject: string;
    summary: string;
    technologiesUsed: Technology[];
}

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}