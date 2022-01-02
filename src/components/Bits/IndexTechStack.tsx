import { SiCss3, SiHtml5, SiJavascript, SiTypescript } from "react-icons/si";

const techStack = [
    {
        icon: "SQL",
    },
    {
        icon: "Java",
    },
    {
        icon: "NoSQL",
    },
    {
        icon: "Kotlin",
    },
    {
        icon: "Flutter",
    },
    {
        icon: "Dart",
    },
    {
        icon: "Python",
    },
    {
        icon: "R",
    },
    {
        icon: "",
    },
];

export default function IndexTechStack() {
    return (
        <>
            {techStack.map((tech) => (
                <div className='separated-bullet'>{tech.icon}</div>
            ))}
        </>
    );
}
