'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const certificates = [
    {
        title: 'React Native Certificate',
        image: '/certificates/react-native-certificate.jpg',
        pdf: '/certificates/react-native-certificate.pdf',
    },
    {
        title: 'React JS Certificate',
        image: '/certificates/react-js-certificate.jpg',
        pdf: '/certificates/react-js-certificate.pdf',
    },
    {
        title: 'C++ Certificate',
        image: '/certificates/cpp-certificate.jpg',
        pdf: '/certificates/cpp-certificate.pdf',
    },
    {
        title: 'Python Basic Certificate',
        image: '/certificates/python-basic-certificate.jpg',
        pdf: '/certificates/python-basic-certificate.pdf',
    },
    {
        title: 'Java Basic Certificate',
        image: '/certificates/java-basic-certificate.jpg',
        pdf: '/certificates/java-basic-certificate.pdf',
    },
];

export default function CertificatesPage() {
    const [visibleCount, setVisibleCount] = useState(3); // Show 2 certificates initially

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 3); // Load 2 more each time
    };

    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-6 py-12 pt-28">
            <motion.h1
                className="text-4xl md:text-5xl font-bold mb-4 text-center"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                My Certificates
            </motion.h1>

            <motion.p
                className="text-gray-400 text-center max-w-2xl mx-auto mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                Here are some of the certifications I’ve earned that showcase my skills and dedication to continuous learning.
            </motion.p>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {certificates.slice(0, visibleCount).map((cert, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                    >
                        <Image
                            src={cert.image}
                            alt={cert.title}
                            width={500}
                            height={300}
                            className="w-full h-auto object-cover"
                        />
                        <div className="p-6 text-center">
                            <h2 className="text-xl font-semibold mb-4">{cert.title}</h2>
                            <Link
                                href={cert.pdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium transition"
                            >
                                View PDF
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>

            {visibleCount < certificates.length && (
                <div className="mt-12 text-center">
                    <button
                        onClick={handleLoadMore}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition"
                    >
                        Load More
                    </button>
                </div>
            )}
        </main>
    );
}
