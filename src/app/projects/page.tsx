
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const projects = [
    {
        title: 'MovieVerse',
        image: '/projects/movieverse.png',
        description: 'A movie discovery app in React.Js using TMDB API with search, filters, and responsive UI.',
        source: 'https://github.com/vishwajeet1298/movieverse',
        live: 'https://movieverse-482ad.web.app/',
        tech: ['React.js', 'TMDB API', 'CSS'],
    },
    {
        title: 'Carelon Behavioral Health',
        image: '/projects/cbhm.jpg',
        description: 'This is KT Task for React Native app. This can work on both iOS and Android',
        source: 'https://github.com/vishwajeet1298/CarelonReactApp',
        live: '',
        tech: ['React Native', 'HTML', 'CSS', 'JavaScript', 'TypeScript'],
    },
    {
        title: 'Hotel Room Reservation System',
        image: '/projects/hotel-room-reservation-system.png',
        description: 'This is an assessment solution for a React Native App by me which was asked in a Company recruitment. ',
        source: 'https://github.com/vishwajeet1298/hotel-room-reservation-system',
        live: '',
        tech: ['React Native', 'HTML', 'CSS', 'JavaScript',],
    },

    {
        title: 'Dominos UI',
        image: '/projects/dominos-ui-scss.png',
        description: 'A full-stack app for renting vehicles with booking, user auth, and admin panel.',
        source: 'https://github.com/vishwajeet1298/dominos-ui-scss',
        live: '',
        tech: ['HTML', 'CSS', 'jQuery', 'SCSS'],
    },

    //https://github.com/vishwajeet1298/hotel-room-reservation-system

    {
        title: 'Vehicle Rental App',
        image: '/projects/vehicle-rental.png',
        description: 'A full-stack app for renting vehicles with booking, user auth, and admin panel.',
        source: 'https://www.linkedin.com/posts/vishwajeet1298_android-application-development-activity-7010934989609406465-PPaa',
        live: '',
        tech: ['Android', 'Firebase', 'Java'],
    },
    
];

export default function ProjectsPage() {
    const [visibleCount, setVisibleCount] = useState(3); // Show 2 projects initially

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 3); // Load 2 more each time
    };

    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-6 py-12 pt-28">
            <motion.h1
                className="text-4xl md:text-5xl font-bold text-center mb-6"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                My Projects
            </motion.h1>

            <motion.p
                className="text-gray-400 text-center max-w-2xl mx-auto mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                These are some of the projects I’ve built to explore new technologies and solve real-world problems.
            </motion.p>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {projects.slice(0, visibleCount).map((project, index) => (
                    <motion.div
                        key={index}
                        className="relative bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={500}
                            height={300}
                            className="w-full h-auto object-cover group-hover:opacity-80 transition-opacity duration-300"
                        />
                        <div className="p-6">
                            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                            <p className="text-gray-400 mb-4">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech?.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="bg-gray-700 text-sm px-3 py-1 rounded-full text-gray-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 flex-wrap">
                                {project.source && (
                                    <Link
                                        href={project.source}
                                        target="_blank"
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition"
                                    >
                                        Source Code
                                    </Link>
                                )}
                                {project.live && (
                                    <Link
                                        href={project.live}
                                        target="_blank"
                                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium transition"
                                    >
                                        Live Demo
                                    </Link>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {visibleCount < projects.length && (
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
