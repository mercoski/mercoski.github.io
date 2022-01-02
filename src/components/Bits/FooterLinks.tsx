import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaEnvelope, FaFilePdf, FaMailBulk } from "react-icons/fa";
import { getLanguageFromURL } from "../../languages";

export default function FooterLinks(props: FooterLinksProps) {
    const linkList = [
        {
            link: "https://github.com/mercoski",
            logo: <SiGithub />,
        },
        {
            link: "https://www.linkedin.com/in/mertcan-erbaşi-46a554108/",
            logo: <SiLinkedin />,
        },
        {
            link: `/assets/cv.pdf`,
            logo: <FaFilePdf />,
        },
        {
            link: "mailto:mertcanerbasiemk@gmail.com",
            logo: <FaEnvelope />,
        },
    ];

    return (
        <div className='flex w-full justify-center gap-4 mb-4'>
            {linkList.map((link) => (
                <a href={link.link} rel='noreferrer' target='_blank' className='text-gray-600 hover:text-gray-800 text-2xl'>
                    {link.logo}
                </a>
            ))}
        </div>
    );
}

interface FooterLinksProps {
    lang: string;
}
