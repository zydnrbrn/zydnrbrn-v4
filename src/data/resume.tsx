import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
    name: "Zidan Khulul Sajid",
    initials: "ZKS",
    url: "https://zydnrbrn.tech",
    location: "South Jakarta, ID",
    locationLink: "https://www.google.com/maps/place/south-jakarta",
    description:
        "Self-taugh software engineer with huge curiousity about technology and relation technology with real life.",
    summary:
        "Technologies is my hobbies since I was a kid, dismantle my own toys(mostly rc car) and then try to assemble it back. I'm a self-taught software engineer with huge curiousity about technology and relation technology with real life. I'm a fast learner and always eager to learn new things. I'm a team player and always try to help my team to achieve the best result. I'm a hard worker and always try to finish my task on time. I'm a problem solver and always try to find the best solution for every problem that I face.",
    avatarUrl: "/me.png",
    skills: [
        "React",
        "Next.js",
        "Typescript",
        "Node.js",
        "Postgres",
        "Docker",
        "Kubernetes",
        "Java",
        "Rust",
        "PHP",
        "Laravel"
    ],
    navbar: [
        { href: "/", icon: HomeIcon, label: "Home" },
        { href: "/blog", icon: NotebookIcon, label: "Blog" },
    ],
    contact: {
        email: "zidanreborn@gmail.com",
        tel: "+6212345678902",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/zydnrbrn",
                icon: Icons.github,

                navbar: true,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://dub.sh/dillion-linkedin",
                icon: Icons.linkedin,

                navbar: true,
            },
            X: {
                name: "X",
                url: "https://dub.sh/dillion-twitter",
                icon: Icons.x,

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
            company: "vOffice Indonesia",
            href: "https://voffice.co.id",
            badges: ['Contract'],
            location: "South Jakarta, ID",
            title: "Fullstack Developer",
            logoUrl: "/logo/voffice_logo.webp",
            start: "May 2023",
            end: "Now",
            description:
                "Develop and maintain software system for vOffice Indonesia for managing their business process, such as CRM, HRM, Accounting, Billing, Ordering virtual office, serviced office and others products. Also giving solutions as an programmer to solve business problem.",
        },
        {
            company: "Torche Indonesia",
            href: "https://torche.co.id",
            badges: ['Contract'],
            location: "Bandung, ID",
            title: "Fullstack Developer",
            logoUrl: "#",
            start: "May 2023",
            end: "May 2024",
            description:
                "Build and develop a single sign on (SSO) platform for ministry of communication and information of Indonesia. The projects is using Laravel, Keycloak, PostgreSQL, Redis, Docker and Kubernetes used for deployment.",
        },
        {
            company: "Soleh Inovasi Digital (SID)",
            href: "#",
            badges: ["intern"],
            location: "Bogor, ID",
            title: "Backend Developer",
            logoUrl: "#",
            start: "Dec 2022",
            end: "Feb 2023",
            description:
                "Developed a microservices architecure for e-commerce and food delivery platform using Laravel, Quarkus, MySQL, Redis and Docker. Implemented a fully automated CI/CD pipeline using Jenkins, Docker to deploy services to production.",
        },
    ],
    education: [
        {
            school: "Indonesia Open University",
            href: "https://www.ut.ac.id",
            degree: "Information System",
            logoUrl: "/logo/ut.webp",
            start: "2023",
            end: "Now",
        },
        {
            school: "Vocational High School 1 Rongga",
            href: "https://smkn1rongga.sch.id",
            degree: "Software Engineering",
            logoUrl: "/ib.png",
            start: "2020",
            end: "2023",
        },
    ],
    projects: [
        {
            title: "Chat Collect",
            href: "https://chatcollect.com",
            dates: "Jan 2024 - Feb 2024",
            active: true,
            description:
                "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
            technologies: [
                "Next.js",
                "Typescript",
                "PostgreSQL",
                "Prisma",
                "TailwindCSS",
                "Stripe",
                "Shadcn UI",
                "Magic UI",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://chatcollect.com",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "",
            video:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
        },
        {
            title: "Magic UI",
            href: "https://magicui.design",
            dates: "June 2023 - Present",
            active: true,
            description:
                "Designed, developed and sold animated UI components for developers.",
            technologies: [
                "Next.js",
                "Typescript",
                "PostgreSQL",
                "Prisma",
                "TailwindCSS",
                "Stripe",
                "Shadcn UI",
                "Magic UI",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://magicui.design",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/magicuidesign/magicui",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "",
            video: "https://cdn.magicui.design/bento-grid.mp4",
        },
        {
            title: "llm.report",
            href: "https://llm.report",
            dates: "April 2023 - September 2023",
            active: true,
            description:
                "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
            technologies: [
                "Next.js",
                "Typescript",
                "PostgreSQL",
                "Prisma",
                "TailwindCSS",
                "Shadcn UI",
                "Magic UI",
                "Stripe",
                "Cloudflare Workers",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://llm.report",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/dillionverma/llm.report",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "",
            video: "https://cdn.llm.report/openai-demo.mp4",
        },
        {
            title: "Automatic Chat",
            href: "https://automatic.chat",
            dates: "April 2023 - March 2024",
            active: true,
            description:
                "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
            technologies: [
                "Next.js",
                "Typescript",
                "PostgreSQL",
                "Prisma",
                "TailwindCSS",
                "Shadcn UI",
                "Magic UI",
                "Stripe",
                "Cloudflare Workers",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://automatic.chat",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "",
            video:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
        },
    ],
    showHackatons: false,
    hackathons: [
        {
            title: "McGill AI for Social Innovation Hackathon",
            dates: "June 17th - 18th, 2017",
            location: "Montreal, Quebec",
            description:
                "Developed realtime facial microexpression analyzer using AI",
            image:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
            links: [],
        },
        {
            title: "Open Source Circular Economy Days Hackathon",
            dates: "June 10th, 2017",
            location: "Toronto, Ontario",
            description:
                "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
            image:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
            win: "1st Place Winner",
            links: [
                {
                    title: "Source",
                    icon: <Icons.github className="h-4 w-4" />,
                    href: "https://github.com/dillionverma/genecis",
                },
            ],
        },
        {
            title: "Make School's Student App Competition 2017",
            dates: "May 19th - 21st, 2017",
            location: "International",
            description: "Improved PocketDoc and submitted to online competition",
            image:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
            win: "Top 10 Finalist | Honourable Mention",
            links: [
                {
                    title: "Medium Article",
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
                },
                {
                    title: "Devpost",
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: "https://devpost.com/software/pocketdoc-react-native",
                },
                {
                    title: "YouTube",
                    icon: <Icons.youtube className="h-4 w-4" />,
                    href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
                },
                {
                    title: "Source",
                    icon: <Icons.github className="h-4 w-4" />,
                    href: "https://github.com/dillionverma/pocketdoc-react-native",
                },
            ],
        },
        {
            title: "HackMining",
            dates: "May 12th - 14th, 2017",
            location: "Toronto, Ontario",
            description: "Developed neural network to optimize a mining process",
            image:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
            links: [],
        },
        {
            title: "Waterloo Equithon",
            dates: "May 5th - 7th, 2017",
            location: "Waterloo, Ontario",
            description:
                "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
            image:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
            links: [
                {
                    title: "Devpost",
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: "https://devpost.com/software/pocketdoc-react-native",
                },
                {
                    title: "YouTube",
                    icon: <Icons.youtube className="h-4 w-4" />,
                    href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
                },
                {
                    title: "Source",
                    icon: <Icons.github className="h-4 w-4" />,
                    href: "https://github.com/dillionverma/pocketdoc-react-native",
                },
            ],
        },
        {
            title: "SpaceApps Waterloo",
            dates: "April 28th - 30th, 2017",
            location: "Waterloo, Ontario",
            description:
                "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
            image:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
            links: [
                {
                    title: "Source",
                    icon: <Icons.github className="h-4 w-4" />,
                    href: "https://github.com/dillionverma/earthwatch",
                },
            ],
        },
        {
            title: "MHacks 9",
            dates: "March 24th - 26th, 2017",
            location: "Ann Arbor, Michigan",
            description:
                "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
            image:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
            mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
            links: [
                {
                    title: "Source",
                    icon: <Icons.github className="h-4 w-4" />,
                    href: "https://github.com/dillionverma/threejs-planes",
                },
            ],
        },
        {
            title: "StartHacks I",
            dates: "March 4th - 5th, 2017",
            location: "Waterloo, Ontario",
            description:
                "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
            image:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
            win: "1st Place Winner",
            mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
            links: [
                {
                    title: "Source (Mobile)",
                    icon: <Icons.github className="h-4 w-4" />,
                    href: "https://github.com/mattBlackDesign/recipic-ionic",
                },
                {
                    title: "Source (Server)",
                    icon: <Icons.github className="h-4 w-4" />,
                    href: "https://github.com/mattBlackDesign/recipic-rails",
                },
            ],
        },
        {
            title: "QHacks II",
            dates: "February 3rd - 5th, 2017",
            location: "Kingston, Ontario",
            description:
                "Developed a mobile game which enables city-wide manhunt with random lobbies",
            image:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
            mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
            links: [
                {
                    title: "Source (Mobile)",
                    icon: <Icons.github className="h-4 w-4" />,
                    href: "https://github.com/dillionverma/human-huntr-react-native",
                },
                {
                    title: "Source (API)",
                    icon: <Icons.github className="h-4 w-4" />,
                    href: "https://github.com/mattBlackDesign/human-huntr-rails",
                },
            ],
        },
        {
            title: "Terrible Hacks V",
            dates: "November 26th, 2016",
            location: "Waterloo, Ontario",
            description:
                "Developed a mock of Windows 11 with interesting notifications and functionality",
            image:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
            links: [
                {
                    title: "Source",
                    icon: <Icons.github className="h-4 w-4" />,
                    href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
                },
            ],
        },
        {
            title: "Portal Hackathon",
            dates: "October 29, 2016",
            location: "Kingston, Ontario",
            description:
                "Developed an internal widget for uploading assignments using Waterloo's portal app",
            image:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
            links: [
                {
                    title: "Source",
                    icon: <Icons.github className="h-4 w-4" />,
                    href: "https://github.com/UWPortalSDK/crowmark",
                },
            ],
        },
    ],
} as const;
