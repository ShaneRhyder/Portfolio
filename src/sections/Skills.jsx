import {
    SiPhp,
    SiMysql,
    SiHtml5,
    SiJavascript,
    SiPostman,
    SiXampp
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { FaCode } from "react-icons/fa";
import { ChevronDown } from "lucide-react";

export const Skills = () => {

    const highlights = [
        {
            icon: SiPhp,
            title: "PHP",
            description: "Experienced in writing maintainable PHP code for server-side applications."
        },
        {
            icon: SiMysql,
            title: "SQL",
            description: "Skilled in designing and querying databases efficiently using SQL."
        },
        {
            icon: SiHtml5,
            title: "HTML & CSS",
            description: "Has the basics and fundamentals down. Proficient enough to integrate backend functionalities."
        },
        {
            icon: SiJavascript,
            title: "JavaScript",
            description: "Capable of creating dynamic, interactive features with JavaScript along with PHP."
        },
        {
            icon: FaCode,
            title: "C++",
            description: "Proficient with C++ fundamentals and writing logic‑based code."
        },
        {
            icon: DiJava,
            title: "Java",
            description: "Familiar with Java and object‑oriented programming concepts."
        },
        {
            icon: SiPostman,
            title: "Postman",
            description: "Experienced in testing APIs and building requests using Postman."
        },
        {
            icon: SiXampp,
            title: "XAMPP",
            description: "Able to set up local server environments for testing and development."
        }
    ];

    return (
        <section id="skills" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="container gap-16 items-center">
                    <div className="container gap-16 items-center">

                        <div className="space-y-4 mb-4">
                            <div className="animate-fade-in">
                                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                                    My Skills
                                </span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in aniation-delay-100 text-secondary-foreground">
                                System Development
                                <span className="font-serif italic font-normal text-white"> toolkit.</span>
                            </h2>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {highlights.map((item, idx) => (
                                <div key={idx} className="glass p-6 rounded-2xl animate-fade-in"
                                    style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                        <item.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20
            animate-fade-in animation-delay-800">
                <a
                    href="#projects"
                    className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary"
                >
                    <span className="text-xs uppercase tracking-wider">Scroll</span>
                    <ChevronDown className="w-6 h-6 animate-bounce" />
                </a>
            </div>
        </section>
    );
}