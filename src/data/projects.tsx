import { Icons } from "@/components/icons";

export interface Project {
    title: string;
    href: string;
    description: string;
    dates: string;
    active: boolean;
    technologies: readonly string[];
    links: readonly {
        type: string;
        href: string;
        icon: React.ReactNode;
    }[];
    image?: string;
    video?: string;
}

export const PROJECTS: readonly Project[] = [
    {
        title: "Delt",
        href: "https://delt.cognerest.com",
        description:
            "A zero-config PaaS for Laravel — push your code and get a production deployment in under 3 minutes. Features Kubernetes-native multi-tenant isolation, automated SSL, database provisioning, and auto-scaling.",
        dates: "Mar 2026 - Present",
        active: true,
        technologies: ["Kubernetes", "AWS", "Laravel", "Prometheus", "Terraform", "Go"],
        links: [
            {
                type: "Website",
                href: "https://delt.cognerest.com",
                icon: <Icons.globe className="size-3" />,
            },
        ],
        image: "/images/delt.png",
        video: "",
    },
    {
        title: "SixEight Design Studio",
        href: "https://sixeight-design.vercel.app/",
        description:
            "E-commerce and client ticketing platform for a 3D design studio. Integrated Lemon Squeezy as Merchant of Record for global USD payments, with streamlined file delivery and project collaboration workflows.",
        dates: "2026",
        active: true,
        technologies: ["Next.js", "Supabase", "Lemon Squeezy", "Tailwind CSS", "InertiaJS"],
        links: [
            {
                type: "Website",
                href: "https://sixeight-design.vercel.app/",
                icon: <Icons.globe className="size-3" />,
            },
        ],
        image: "/images/sixeight.png",
        video: "",
    },
    {
        title: "Hurevo ERP",
        href: "#",
        description:
            "Modular ERP system for retail and F&B businesses — covers point-of-sale, inventory tracking, financial reporting, and bankability scoring to support SMB growth and daily operations.",
        dates: "2025",
        active: true,
        technologies: ["Laravel", "FilamentPHP", "PostgreSQL", "Tailwind CSS"],
        links: [],
        image: "",
        video: "",
    },
    {
        title: "Authentic Store",
        href: "#",
        description:
            "E-commerce platform for an authenticated goods retailer with product verification, order management, and payment processing.",
        dates: "2024",
        active: true,
        technologies: ["Laravel", "Tailwind CSS", "MySQL"],
        links: [],
        image: "",
        video: "",
    },
    {
        title: "Administrasi Desa",
        href: "#",
        description:
            "Open-source village-level government administration system for managing citizen data, document generation, and public service workflows in Indonesian rural districts.",
        dates: "2022",
        active: true,
        technologies: ["Laravel", "Tailwind CSS", "MySQL"],
        links: [
            {
                type: "Source",
                href: "https://github.com/zydnrbrn",
                icon: <Icons.github className="size-3" />,
            },
        ],
        image: "",
        video: "",
    },
    {
        title: "LiFi Inventory",
        href: "#",
        description:
            "POS and inventory management app for a computer hardware store — tracks stock levels, records transactions, and generates sales reports for day-to-day operations.",
        dates: "2026",
        active: true,
        technologies: ["Laravel", "Tailwind CSS", "MariaDB"],
        links: [],
        image: "",
        video: "",
    },
] as const;
