import { Button } from '@/components/Button';
import { ArrowRight, ChevronDown, Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from 'react';

const skills = [
    "SQL",
    "PHP",
    "JavaScript",
    "HTML",
    "CSS",
    "C++",
    "Java",
    "Laravel",
    "Axios",
    "ReactJS",
];

export const Hero = () => {
    const [isContactOpen, setIsContactOpen] = useState(false);
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Bg */}
            <div className="absolute inset-0">
                <img
                    src="/hero-bg.jpg"
                    alt="Hero image"
                    className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
            </div>

            {/* Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: "var(--color-primary)",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`
                        }} />
                ))}
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                Backend Developer • Laravel Specialist
                            </span>
                        </div>

                        {/* Headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-200">
                                Turning <span className="text-primary glow-text">ideas</span>
                                <br />
                                into working
                                <br />
                                <span className="font-serif italic font-normal text-white">
                                    systems.
                                </span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-300">
                                I’m <span className="font-semibold text-primary">Shane Rhyder Silverio</span>. I build web projects that focus on clean structure, usability,
                                and real-world function, always aiming to improve with every project.
                            </p>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-400">
                            <Button
                                size="lg"
                                className={`cursor-pointer ${isContactOpen ? "hidden" : "animate-fade-in"}`}
                                onClick={() => setIsContactOpen((prev) => !prev)}>
                                Contact Me <ArrowRight className="w-5 h-5" />
                            </Button>

                             <Button
                                size="lg"
                                className={`cursor-pointer ${isContactOpen ? "animate-fade-in" : "hidden"}`}
                                onClick={() => setIsContactOpen((prev) => !prev)}>
                                Contact Me:
                            </Button>
                        </div>

                        {/* Contact Information */}
                        {isContactOpen && (
                            <div className="glass-strong animate-fade-in rounded-2xl">
                                <div className="container mx-auto p-3 flex flex-col">
                                    <div className="text-lg text-muted-foreground">
                                        <div className="flex items-center gap-2">
                                            <Mail className="w-5 h-5 text-primary" />
                                            <span>Email: shanekane567@gmail.com</span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <Phone className="w-5 h-5 text-primary" />
                                            <span>Phone: +63 908 987 3691 </span>
                                        </div>
                                    </div>
                                </div>
                            </div>)}


                        {/* Social Links */}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-500">
                            <span className="text-sm text-muted-foreground">Follow Me: </span>
                            {[
                                { icon: FaGithub, href: "https://github.com/ShaneRhyder" },
                                { icon: FaLinkedin, href: "https://www.linkedin.com/in/shane-rhyder-silverio-b06b853a9" },
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transtion-all duration-300"
                                >
                                    {<social.icon className="w-5 h-5" />}
                                </a>
                            ))}
                        </div>
                    </div>
                    {/* Right Column - Profile Image */}
                    <div className="relative animate-fade-in animation-delay-500">
                        {/* Profile Image */}
                        <div className="relative max-w-md mx-auto">
                            <div
                                className="absolute inset-0 
                                rounded-3xl bg-gradient-to-br
                                from-primary/30 via-transparent
                                to-primary/10 blur-2xl animate-pulse" />
                            <div className="relative glass rounded-3xl p-2 glow-border">
                                <img
                                    src="/profile-photo.jpg"
                                    alt="Shane Silverio"
                                    className="w-full aspect-[4/5] object-cover rounded-2xl" />

                                {/* Floating Badge */}
                                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float animation-delay-600">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" />
                                        <span className="text-sm font-medium">Currently in internship</span>
                                    </div>
                                </div>
                                {/* Stats Badge */}
                                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-800">
                                    <div className="text-2xl font-bold text-primary">Graduating</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div className="mt-20 animate-fade-in animation-delay-800">
                    <p className="text-sm text-muted-foreground mb-6 text-center">
                        Technologies I work with:
                    </p>
                    <div className="relative overflow-hidden">
                        <div className="flex animate-marquee">
                            {[...skills, ...skills].map((skill, idx) => (
                                <div key={idx} className="flex-shrink-0 px-8 py-4">
                                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20
            animate-fade-in animation-delay-800">
                <a
                    href="#about"
                    className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary"
                >
                    <span className="text-xs uppercase tracking-wider">Scroll</span>
                    <ChevronDown className="w-6 h-6 animate-bounce" />
                </a>
            </div>
        </section>
    );
}