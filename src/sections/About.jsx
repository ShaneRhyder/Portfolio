import { Award, Monitor, GitBranch, Briefcase, ChevronDown } from "lucide-react";

export const About = () => {

    const highlights = [
        {
            icon: Award,
            title: "Strong Academics",
            description: "Consistently made the President’s List for five semesters."
        },
        {
            icon: Monitor,
            title: "Web Development",
            description: "Hands-on experience building websites through school projects and personal work."
        },
        {
            icon: GitBranch,
            title: "GitHub Experience",
            description: "Comfortable using GitHub for version control and collaboration."
        },
        {
            icon: Briefcase,
            title: "Eager to Contribute",
            description: "Ready to apply my skills and gain real-world experience in a professional IT environment."
        },
    ];


    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                                About Me
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in aniation-delay-100 text-secondary-foreground">
                            Builiding the future,
                            <span className="font-serif italic font-normal text-white"> one component at a time.</span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                                Hard-working fourth-year BSIT student with a strong academic record,
                                consistently earning President’s List honors for five semesters. I have
                                hands-on experience in web development and using GitHub through
                                both schoolwork and personal projects. I’m eager to apply what I’ve
                                learned, gain real-world experience, and contribute in a professional IT
                                environment
                            </p>
                        </div>
                    </div>
                    {/* Right Column */}
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

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20
            animate-fade-in animation-delay-800">
                <a
                    href="#skills"
                    className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary"
                >
                    <span className="text-xs uppercase tracking-wider">Scroll</span>
                    <ChevronDown className="w-6 h-6 animate-bounce" />
                </a>
            </div>
        </section>
    );
}