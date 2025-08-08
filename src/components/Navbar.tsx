'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: 'About', href: '/' },
        { name: 'Projects', href: '/projects' },
        { name: 'Certificates', href: '/certificates' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <motion.nav
            className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold text-white">
                    Vishwajeet Singh
                </Link>

                <div className="hidden md:flex gap-6 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`transition font-medium ${pathname === link.href
                                ? 'text-blue-400 underline underline-offset-4'
                                : 'hover:text-blue-400 text-white'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/updated_resume.pdf"
                        target="_blank"
                        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition animate-pulse"
                    >
                        Download Resume
                    </Link>
                </div>

                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden px-4 pb-4 flex flex-col gap-4 bg-gray-800">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`transition font-medium ${pathname === link.href
                                ? 'text-blue-400 underline underline-offset-4'
                                : 'hover:text-blue-400 text-white'
                                }`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/updated_resume.pdf"
                        target="_blank"
                        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition"
                        onClick={() => setIsOpen(false)}
                    >
                        Download Resume
                    </Link>
                </div>
            )}
        </motion.nav>
    );
};

export default Navbar;
