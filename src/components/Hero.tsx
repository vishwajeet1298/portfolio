
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { FaBrain } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa6';
import { GiTargetArrows } from 'react-icons/gi';
import { MdWork } from 'react-icons/md';

import { BiLinkExternal } from 'react-icons/bi';
import { HiOutlineDocumentDownload, HiOutlineDocumentText } from 'react-icons/hi';
import { MdFolderOpen } from 'react-icons/md';




const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/vishwajeet1298' },
    { name: 'GitHub', url: 'https://github.com/vishwajeet1298' },
];

const Hero: React.FC = () => {
    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-6 py-20 flex flex-col md:flex-row items-center justify-center gap-12">

            {/* Left Column */}
            <div className="flex flex-col items-center text-center space-y-3">
                <Image
                    src="/profile.jpg"
                    alt="Profile picture of Vishwajeet Singh"
                    width={180}
                    height={180}
                    className="rounded-full border-4 border-white shadow-xl"
                    priority
                />

                <div className="flex flex-col items-center gap-2">

                    <h3 className="text-white font-semibold flex items-center gap-2">
                        <FaGlobe className="text-cyan-400" />
                        Connect With Me
                    </h3>

                    <div className="flex gap-4">
                        {socialLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                aria-label={`Visit my ${link.name} profile`}
                                className="text-blue-400 hover:text-blue-500 font-medium transition"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <motion.div
                className="max-w-xl space-y-6"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl md:text-5xl font-bold flex items-center gap-2">
                    <FaBrain className="text-rose-400" />
                    About Me
                </h1>

                <h2 className="text-xl md:text-2xl text-gray-300 font-medium">
                    Vishwajeet Singh
                    <br />
                    Associate Software Engineer
                </h2>

                <div className="text-gray-400 space-y-4 leading-relaxed">
                    <p>
                        I’m a passionate and versatile software developer with a strong foundation in both frontend and backend technologies, system administration, and quality assurance. My journey in tech has been driven by curiosity, continuous learning, and a desire to build impactful digital solutions.
                    </p>


                    <h3 className="text-white font-semibold flex items-center gap-2">
                        <MdWork className="text-amber-400" />
                        Technical Expertise
                    </h3>

                    <ul className="list-disc list-inside ml-4 space-y-1">
                        <li><strong>Frontend & Mobile Development:</strong> Skilled in building responsive and scalable applications using React Native and Next.js, with a focus on performance and user experience.</li>
                        <li><strong>CMS & QA:</strong> Experienced in Adobe Experience Manager (AEM) for content authoring and Salesforce QA, having tested across SIT, UAT, and RUAT environments to ensure robust and reliable releases.</li>
                        <li><strong>System & Cloud Administration:</strong> Proficient in Red Hat System Administration, with hands-on experience configuring and troubleshooting Windows and Linux operating systems.</li>
                        <li><strong>Software Development Lifecycle:</strong> Well-versed in SDLC and STLC, ensuring quality and efficiency throughout the development and testing phases.</li>
                    </ul>


                    <h3 className="text-white font-semibold flex items-center gap-2">
                        <GiTargetArrows className="text-red-400" />
                        Vision
                    </h3>

                    <p>
                        My long-term goal is to become an IT Security Analyst, contributing to the future of cybersecurity in the age of Agentic AI and Quantum Computing. I aim to develop secure, intelligent systems that protect data and empower innovation.
                    </p>


                    <h3 className="text-white font-semibold flex items-center gap-2">
                        <MdFolderOpen className="text-yellow-400" />
                        Explore My Work
                    </h3>

                    <ul className="list-none ml-1 space-y-2">
                        <li className="flex items-start gap-2">
                            <BiLinkExternal className="text-emerald-400 mt-1 hover:scale-110 transition-transform duration-300" />
                            <Link href="/projects" className="text-blue-400 hover:underline">
                                Projects
                            </Link>
                            <span>— Dive into the apps and systems I’ve built.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <HiOutlineDocumentText className="text-violet-400 mt-1" />
                            <Link href="/certificates" className="text-blue-400 hover:underline">
                                Certificates
                            </Link>
                            <span>— View my professional credentials.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <HiOutlineDocumentDownload className="text-orange-400 mt-1 animate-pulse" />
                            <Link href="/updated_resume.pdf" target="_blank" className="text-blue-400 hover:underline">
                                Resume
                            </Link>
                            <span>— Download my resume for a detailed overview.</span>
                        </li>
                    </ul>

                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
