const portfolioData = {
    basic_info: {
        name: "Mario Makdis",
        titles: ["Data Engineer", "AI Engineer", "Software Developer"],
        social: [{
            name: "github",
            url: "https://github.com/mariomakdis",
            class: "fab fa-github"
        }, {
            name: "instagram",
            url: "https://www.instagram.com/mariomakdis",
            class: "fab fa-instagram"
        }, {
            name: "linkedin",
            url: "https://www.linkedin.com/in/mario-makdis/",
            class: "fab fa-linkedin-in"
        }],
        image: "images/pfp.jpeg"
    },
    about: {
        description: "👋 Hi, I'm Mario - a Data & AI Engineer and founder of MAKDIS. I started coding professionally at 15 with C#/.NET, and ever since, I've been obsessed with building things that mix data, creativity, and AI."
    },
    skills: [
    {
        name: "Python",
        class: "devicon-python-plain"
    }, {
        name: "C#",
        class: "devicon-csharp-plain"
    }, 
    {
        name: "AI / ML",
        class: "fas fa-brain" // Using Font Awesome for AI/Machine Learning
    },
    {
        name: "MS SQL Server",
        class: "devicon-microsoftsqlserver-plain"
    }, {
        name: "MySQL",
        class: "devicon-mysql-plain"
    }, 
    {
        name: "Linux",
        class: "devicon-linux-plain" 
    }, {
        name: "Automation",
        class: "fas fa-robot" // Using Font Awesome for Automation
    },
    {
        name: "Data Engineering",
        class: "fas fa-cogs" // Using Font Awesome as fallback
    }, {
        name: "Data Analysis",
        class: "fas fa-chart-line" // Using Font Awesome as fallback
    }, {
        name: "Agile/Scrum",
        class: "fas fa-users" // Using Font Awesome as fallback
    }, {
        name: "Windows Server",
        class: "devicon-windows8-original" // Closest Devicon equivalent
    }, {
        name: "JavaScript",
        class: "devicon-javascript-plain"
    }, {
        name: "HTML 5",
        class: "devicon-html5-plain"
    }, {
        name: "CSS 3",
        class: "devicon-css3-plain"
    }],
    experience: [
    {
        company: "MAKDIS",
        title: "Founder & AI/Data Engineer",
        years: "11.2024 - Present",
        technologies: ["Python", "AI/ML", "Data Engineering", "Automation", "Google Cloud (GCP)", "Dashboarding"]
    },
    {
        company: "Nederlandse Publieke Omroep",
        title: "Cloud Data Engineer",
        years: "11.2024 - Present",
        technologies: ["Google Cloud Platform", "Go", "BigQuery", "Superset", "Docker", "Python", "Cloud Run", "App Engine", "PostgreSQL"]
    },
    {
        company: "Triple",
        title: "AI & Data Engineer",
        years: "06.2022 - 10.2024",
        technologies: ["Microsoft Azure", "Python", "Azure Functions", "Azure Data Factory", "Azure SQL Database", "PosgreSQL", "React", "Data warehousing", "PowerBI"]
    }, {
        company: "Triple",
        title: "AI/ML Developer Intern",
        years: "02.2022 - 06.2022",
        technologies: ["Python", "FastAPI", "Textract", "AWS", "Redis", "Numpy", "React", "MUI"]
    }, {
        company: "Triple",
        title: "Python ML/NLP 2-week Intern",
        years: "11.2019 - 11.2019",
        technologies: ["Python", "SKLearn", "Spacy", "NLTK", "Matplotlib", "Node.js"]
    }, {
        company: "FreshERP B.V.",
        title: "C#/.NET Software Engineer",
        years: "05.2018 - 06.2021",
        technologies: [".NET", "C#", "Sockets", "WinForms"]
    }],
    projects: [
    {
        title: "NEX - AI Chatbot & Automation Platform",
        startDate: "2024-Present",
        description: "As the flagship product of my company, NEX is a multi-tenant AI chatbot and automation platform I designed and built from the ground up. Hosted on Google Cloud and powered by Python/FastAPI, it's engineered for high performance and security. Key features include advanced RAG for custom data integration, dynamic conversation memory, and flexible deployment for both public and private enterprise chatbots. It's a complete solution for businesses aiming to scale with cutting-edge conversational AI.",
        images: ["images/portfolio/makdis/nexbot.png", "images/portfolio/makdis/NEX.png"],
        url: "https://nex.makdis.io",
        technologies: [
            { name: "Python", class: "devicon-python-plain" },
            { name: "FastAPI", class: "devicon-fastapi-plain" },
            { name: "PostgreSQL", class: "devicon-postgresql-plain" },
            { name: "Google Cloud", class: "devicon-googlecloud-plain" },
            { name: "AI/ML", class: "fas fa-brain" },
            { name: "LLM", class: "fas fa-robot" }
        ]
    },
    {
        title: "AI Data Platform for Heineken",
        startDate: "2023-2024",
        description: "As part of the team at Triple, I contributed to a smart data-sharing platform for Heineken EMEA. We built the platform on Microsoft Azure to ingest, process, and standardize sell-out data from diverse distributors. My role involved developing data pipelines and implementing an AI-powered engine using OpenAI for automated product matching, achieving over 98% accuracy. This transformed previously inaccessible data into actionable insights, visualized in Power BI, enabling data-driven stock and demand planning.",
        images: ["images/portfolio/heineken/p1.png", "images/portfolio/heineken/p2.png"],
        url: "https://www.hypersolid.com/work/heineken",
        technologies: [
            { name: "Azure", class: "devicon-azure-plain" }, 
            { name: "Python", class: "devicon-python-plain" },
            { name: "AI/ML", class: "fas fa-brain" },
            { name: "Power BI", class: "devicon-azuresqldatabase-plain" } // Using a related icon
        ]
    },
    {
        title: "AI Genie Assistant for Rituals",
        startDate: "2024",
        description: "I worked on the AI-powered assistant for the Rituals 'Genie' smart fragrance app. I was responsible for developing and integrating the chatbot's backend, leveraging Large Language Models (LLMs) to create a natural and helpful user experience. This involved designing conversational flows, prompt engineering, and ensuring seamless communication between the user's app and the AI to control the Genie device, set schedules, and get personalized fragrance recommendations.",
        images: ["images/portfolio/rituals/p1.jpeg", "images/portfolio/rituals/p2.webp"],
        url: "https://www.rituals.com/nl-nl/home-collectie/aroma-diffuser/the-perfume-genie",
        technologies: [
            { name: "Python", class: "devicon-python-plain" },
            { name: "AI/ML", class: "fas fa-brain" },
            { name: "LLM", class: "fas fa-robot" }
        ]
    },
    {
        title: "WellFormedEditor",
        startDate: "2018-2021",
        description: "The most expanded application I've worked on. I didn't have any background in C# or WinForms before this project. I've built the application from scratch on top of WinForms: the parsing engine, sockets communication handler, syntax highlighting, config library, it's an IDE for the company's own programming language.",
        images: ["images/portfolio/wellformededitor/p1.png", "images/portfolio/wellformededitor/p2.png"],
        url: "https://www.fresherp.nl/",
        technologies: [{ name: ".NET", class: "devicon-dot-net-plain" }, { name: "C#", class: "devicon-csharp-plain" }]
    }, {
        title: "reviews-analyzer",
        startDate: "2019",
        description: "A 2-week internship project, during the internship I learned to work with a few ML libaries. The backend is built in Python and it analyzes user reviews using NLP and generates output, which is then visualized on a Node.js website.",
        images: ["images/portfolio/reviews-analyzer/p1.png", "images/portfolio/reviews-analyzer/p2.png"],
        url: "https://github.com/mariomakdis/reviews-analyzer",
        technologies: [{ name: "Python", class: "devicon-python-plain" }, { name: "JavaScript", class: "devicon-javascript-plain" }, { name: "Node.js", class: "devicon-nodejs-plain" }]
    }, {
        title: "Gatebot",
        startDate: "2018",
        description: "Protect your Telegram group with a JSON quizz-based test.",
        images: ["images/portfolio/gatebot/p1.png", "images/portfolio/gatebot/p2.png"],
        url: "https://github.com/mariomakdis/gatebot",
        technologies: [{ name: "Python", class: "devicon-python-plain" }, { name: "Redis", class: "devicon-redis-plain" }]
    }]
};