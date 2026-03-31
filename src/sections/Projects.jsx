import { FaGithub } from "react-icons/fa";
import { ArrowUpRight, ChevronDown } from "lucide-react";

const projects = [
    {
        title: "Chasing Earth's Horizon",
        role: "Solo Project - Frontend Only",
        date: "March 10, 2025",
        description: "A simple website showcasing parallax discussing travel.",
        image: "/projects/project1.png",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://shanerhyder.github.io/webdev/webpages/Midterm%202/banner.html",
        github: "https://github.com/ShaneRhyder/ShaneRhyder.github.io/tree/main/webdev/webpages/Midterm%202",
    },

    {
        title: "TechTrove",
        role: "Solo Project - Frontend Only",
        date: "April 28, 2025",
        description: "A demo e-commerce website experimenting with different CSS and JavaScript technologies.",
        image: "/projects/project2.png",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://shanerhyder.github.io/ADET/A03/index.html",
        github: "https://github.com/ShaneRhyder/ShaneRhyder.github.io/tree/main/ADET/A03",
    },

    {
        title: "Music Albums",
        role: "Solo Project - Frontend Only",
        date: "June 5, 2025",
        description: "A list of my favorite music albums. Uses spotify embeds to allow music playback. Each album has their description and release dates. A date picker is provided at the bottom of the page to know which day the album was released.",
        image: "/projects/project3.png",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://shanerhyder.github.io/ADET/A07/index.html",
        github: "https://github.com/ShaneRhyder/ShaneRhyder.github.io/tree/main/ADET/A07",
    },

    {
        title: "Valorant Agents",
        role: "Solo Project - Frontend Only",
        date: "March 10, 2025",
        description: "A website showcasing the updated Valorant agent roster. Uses the Valorant API to keep up to date.",
        image: "/projects/project4.png",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://shanerhyder.github.io/webdev/webpages/Activity%207/index.html",
        github: "https://github.com/ShaneRhyder/ShaneRhyder.github.io/tree/main/webdev/webpages/Activity%207",
    },

    {
        title: "WebStar – Gamified Web Development Learning Platform",
        role: "Frontend & Backend Developer",
        date: "January 10, 2026",
        description: "(Preview NOT Available) A fully working gamified learning management system as our capstone project. Includes features such as: Quizzes, Exams, Assignments, User Management, Courses, Leaderboards, etc.",
        image: "/projects/project5.png",
        tags: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
        link: "#projects",
        github: "https://github.com/G7-WebStar/webstar.com",
    },

    {
        title: "Price Checker",
        role: "Frontend & Backend Developer",
        date: "January 16, 2026",
        description: "(Preview NOT Available) A simple and working price checker designed for small to medium businesses.",
        image: "/projects/project6.png",
        tags: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
        link: "#projects",
        github: "https://github.com/ShaneRhyder/Price-Checker",
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            {/* BG glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking wider uppercase animate-fade-in">
                        Featured Work
                        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                            Projects that
                            <span className="font-serif italic font-normal text-white">
                                {" "}
                                improved my web development skills
                            </span>
                        </h2>
                        <p className="text-muted-foreground animate-fade-in animation-delay-200">
                            A selection of my projects that had the most significant impact on my current knowledge of web development essentials.
                        </p>
                    </span>
                </div>
                {/* Projects */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                            style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                                {/* Overlay Links */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transtion-opacity duration-300">
                                    <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </a>
                                    <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                        <FaGithub className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-3">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transtion-colors">
                                        {project.title}
                                    </h3>
                                    <span className="flex gap-4">
                                        <a href={project.link}>
                                            <ArrowUpRight className="block md:hidden w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y1 transition-all" />
                                        </a>
                                        <a href={project.github}>
                                            <FaGithub className="block md:hidden w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y1 transition-all" />
                                        </a>
                                    </span>
                                </div>
                                <div className="text-muted-foreground text-sm">
                                    <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 gap-3 w-max">
                                        <div className="inline-flex items-center gap-2 p-1 rounded-full glass text-sm text-primary m-0">
                                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                            {project.role}
                                        </div>
                                        <div className="inline-flex items-center gap-2 p-1 rounded-full glass text-sm text-primary m-0">
                                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                            Date: {project.date}
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        {project.description}
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span key={tagIdx} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20
            animate-fade-in animation-delay-800">
                <a
                    href="#achievements"
                    className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary"
                >
                    <span className="text-xs uppercase tracking-wider">Scroll</span>
                    <ChevronDown className="w-6 h-6 animate-bounce" />
                </a>
            </div>
        </section >
    );
}