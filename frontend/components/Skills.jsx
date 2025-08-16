import React from "react";
import { Code2, Database, Wrench, Monitor, Hammer, Code, CodeSquare } from "lucide-react";

const skillsData = [
{
    category: "Frontend",
    icon: <Monitor className="w-6 h-6 text-blue-500" />,
    skills: [
        { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Tailwind CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"}
    ],
    },
    {
    category: "Backend",
    icon: <Code2 className="w-6 h-6 text-green-500" />,
    skills: [
        { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    ],
    },
    {
    category: "Database",
    icon: <Database className="w-6 h-6 text-yellow-500" />,
    skills: [
        { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
    },
    {
    category: "Tools",
    icon: <Wrench className="w-6 h-6 text-purple-500" />,
    skills: [
        { name: "Git & GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "VS Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Postman", img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    ],
    },
];

function Skills() {
    return (
    <div id="skills" className="min-h-screen flex flex-col items-center py-25 px-6">
        <h1 className="text-6xl font-bold text-gray-800 mb-20 flex items-center gap-3">
            <Code2 className="w-15 h-15"/>Skills
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-6xl">
        {skillsData.map((skill, idx) => (
            <div
                key={idx}
                className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center transition hover:shadow-xl hover:scale-[1.03]"
            >
            {skill.icon}
            <h2 className="text-xl font-semibold text-gray-800 mt-3 mb-4">
                {skill.category}
            </h2>

            {/* ✅ Skill Images */}
            <div className="flex flex-wrap justify-center gap-6">
                {skill.skills.map((s, i) => (
                <div key={i} className="flex flex-col items-center">
                    <img
                        src={s.img}
                        alt={s.name}
                        className="w-12 h-12 object-contain mb-2 transition hover:scale-110"
                    />
                    <p className="text-gray-700 text-sm">{s.name}</p>
                </div>
            ))}
            </div>
            </div>
        ))}
        </div>
    </div>
    );
}

export default Skills;
