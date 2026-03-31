import { Award, BriefcaseBusiness, Code, Server } from "lucide-react";

const certificates = [
    {
        image: "/achievements/cert1.jpg",
        title: "From Algorithms to Intelligence: The Journey to Artificial Intelligence and Machine Learning",
        date: "December 2025",
        description: "A certificate for participating in learning about Artificial Intelligence and Machine Learning.",
    },
    {
        image: "/achievements/cert2.png",
        title: "Certificate of Appreciation: CertiCode",
        date: "February 2026",
        description: "A certificate for participating in the seminar by CertiCode discussing career paths, IT roles, and industry trends.",
    },
];

export const Achievements = () => {

    const highlights = [
        {
            icon: Award,
            title: "Capstone Defended",
            description: "Defended WebStar, our gamified learning management system, applying PHP, SQL, and JavaScript to bring it to life."
        },
        {
            icon: BriefcaseBusiness,
            title: "Price Checker",
            description: "Developed my first practical system tailored for business use."
        },
        {
            icon: Server,
            title: "Learning Laravel",
            description: "Learned the basics of Laravel and connected backend functionalities seamlessly to the frontend."
        },
        {
            icon: Code,
            title: "My first ReactJS Project",
            description: "Built this portfolio page using ReactJS from start to finish."
        },
    ];

    return (
        <section id="achievements" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="container gap-16 items-center">
                    <div className="mb-">
                        <div className="space-y-4 mb-4">
                            <div className="animate-fade-in">
                                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                                    My Achievements
                                </span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in aniation-delay-100 text-secondary-foreground">
                                Earned
                                <span className="font-serif italic font-normal text-white"> Certificates.</span>
                            </h2>
                        </div>

                        {/* Certificates */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {certificates.map((certificate, idx) => (
                                <div
                                    key={idx}
                                    className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                                    style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                                >
                                    {/* Image */}
                                    <div className="relative overflow-hidden aspect-video">
                                        <img
                                            src={certificate.image}
                                            alt={certificate.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 space-y-3">
                                        <div className="flex items-start justify-between">
                                            <h3 className="text-xl font-semibold group-hover:text-primary transtion-colors">
                                                {certificate.title}
                                            </h3>
                                        </div>
                                        <div className="text-muted-foreground text-sm">
                                            <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 gap-3 w-max">
                                                <div className="inline-flex items-center gap-2 p-1 rounded-full glass text-sm text-primary m-0">
                                                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                                    Date: {certificate.date}
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                {certificate.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Project Wins */}
                    <div className="container mt-10">
                        <div className="space-y-4 mb-4">
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in aniation-delay-100 text-secondary-foreground">
                                Project
                                <span className="font-serif italic font-normal text-white"> Wins.</span>
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
        </section>
    );
}