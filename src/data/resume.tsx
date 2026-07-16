import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { PROJECTS } from "@/data/projects";

const CAREER_START_YEAR = 2022;
const yearsOfExperience = new Date().getFullYear() - CAREER_START_YEAR;

export const DATA = {
    name: "Zidan K Sajid",
    initials: "ZKS",
    url: "https://zidansajid.me",
    location: "Bandung, West Java, Indonesia",
    locationLink: "https://www.google.com/maps/place/bandung",
    description:
        `Software Engineer with ${yearsOfExperience}+ years of experience in cloud architecture, DevOps, and full-stack development.`,
    summary:
        "I build production-ready systems that combine engineering precision with strategic business thinking. Currently leading [Delt](https://delt.cognerest.com), a zero-config PaaS for Laravel built on Kubernetes. My background spans architecting identity & access management systems for government-scale deployments, building modular ERP/POS solutions, and implementing cloud infrastructure with automated CI/CD pipelines. I'm passionate about platform engineering, developer tooling, and solving real business problems with code.",
    avatarUrl: "/me.png",
    skills: [
        "PHP",
        "TypeScript",
        "JavaScript",
        "Go",
        "Java",
        "SQL",
        "Bash",
        "Laravel",
        "React",
        "InertiaJS",
        "Tailwind CSS",
        "Docker",
        "Kubernetes",
        "AWS",
        "GCP",
        "Terraform",
        "Prometheus",
        "Grafana",
        "CI/CD",
        "Keycloak",
        "OAuth 2.0",
        "Microservices",
        "REST API",
    ],
    navbar: [
        { href: "/", icon: HomeIcon, label: "Home" },
        { href: "/blog", icon: NotebookIcon, label: "Blog" },
    ],
    contact: {
        email: "zidanreborn@gmail.com",
        tel: "",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/zydnrbrn",
                icon: Icons.github,

                navbar: true,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/zidan-khulul-sajid",
                icon: Icons.linkedin,

                navbar: true,
            },
            email: {
                name: "Send Email",
                url: "mailto:zidanreborn@gmail.com",
                icon: Icons.email,

                navbar: false,
            },
        },
    },

    work: [
        {
            company: "Delt",
            href: "https://delt.cognerest.com",
            badges: ["Building"],
            location: "Remote",
            title: "Lead Engineer & Product Owner",
            logoUrl: "/logo/delt.png",
            start: "Mar 2026",
            end: "Present",
            description:
                "Architected a scalable zero-config PaaS for Laravel using Kubernetes, automating database provisioning, object storage, SSL certificate management, and CI/CD pipelines. Engineered near-zero auto-scaling with Prometheus monitoring and implemented multi-tenant isolation via Kubernetes namespaces.",
        },
        {
            company: "Hurevo",
            href: "#",
            badges: ["Building"],
            location: "South Jakarta",
            title: "Full-Stack Software Engineer",
            logoUrl: "/logo/hurevo.jpg",
            start: "Feb 2026",
            end: "Present",
            description:
                "Leading a technology implementation firm, directing architecture of modular business ecosystems for SMBs. Engineered scalable ERP and POS solutions using Laravel, React, and Tailwind CSS. Developed integrated e-commerce and client ticketing platform with Lemon Squeezy for global USD payment processing.",
        },
        {
            company: "vOffice Indonesia",
            href: "https://voffice.co.id",
            badges: ["Full-Time"],
            location: "Jakarta",
            title: "Fullstack & Ops Developer",
            logoUrl: "/logo/voffice_logo.webp",
            start: "Apr 2024",
            end: "Present",
            description:
                "Built full-stack solutions to streamline corporate operations, system integration, and backend optimization. Architected centralized data systems and Single Sign-On (SSO) infrastructure across 25+ microservices using Keycloak. Developed robust internal business applications bridging complex technical requirements with daily business management.",
        },
        {
            company: "Torche Indonesia",
            href: "https://torche.co.id",
            badges: ["Full-Time"],
            location: "Bandung",
            title: "Backend Developer",
            logoUrl: "/logo/torche.png",
            start: "May 2023",
            end: "May 2024",
            description:
                "Engineered secure SSO infrastructure using Keycloak for Indonesian government systems, handling sensitive citizen data. Developed responsive web interfaces and scalable account management applications with React, TypeScript, and Laravel.",
        },
        {
            company: "Setia Inovasi Digital",
            href: "#",
            badges: ["Contract"],
            location: "Bogor",
            title: "Backend Developer",
            logoUrl: "",
            start: "Nov 2022",
            end: "Sep 2023",
            description:
                "Contributed to design and development of scalable microservices architectures using PHP Laravel and Quarkus Java. Supported backend infrastructure modernization for distributed, high-performance web systems.",
        },
    ],
    education: [
        {
            school: "Indonesia Open University",
            href: "https://www.ut.ac.id",
            degree: "Bachelor of Management — Business Management",
            logoUrl: "/logo/ut.webp",
            start: "2025",
            end: "Present",
        },
        {
            school: "SMK Negeri 1 Rongga",
            href: "https://smkn1rongga.sch.id",
            degree: "Software Engineering",
            logoUrl: "/logo/smk.png",
            start: "2020",
            end: "2023",
        },
    ],
    projects: PROJECTS,
    showHackathons: false,
    hackathons: [] as readonly {
        title: string;
        dates: string;
        location: string;
        description: string;
        image?: string;
        mlh?: string;
        win?: string;
        links: readonly {
            title: string;
            icon: React.ReactNode;
            href: string;
        }[];
    }[],
};
