'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import toast from 'react-hot-toast';


const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        honeypot: '', // for spam protection
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };



    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formData.honeypot) {
            toast.error('Spam detected!');
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                toast.success('Message sent successfully!');
                setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
            } else {
                toast.error('Failed to send message. Please try again later.');
            }
        } catch (error) {
            console.error(error);
            toast.error('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };


    return (
        <section className="min-h-screen flex flex-col justify-center items-center px-4 md:px-8 bg-gradient-to-b from-black to-gray-900 text-white">
            <motion.h1
                className="text-4xl md:text-5xl font-bold mb-4 text-center"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Get in Touch
            </motion.h1>

            <motion.p
                className="text-gray-400 text-center max-w-xl mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                Let’s build something great together! Feel free to drop me a message.
            </motion.p>

            <form
                onSubmit={handleSubmit}
                className="w-full max-w-2xl bg-gray-800 p-6 rounded-lg shadow-lg space-y-4"
            >
                {/* Honeypot Field */}
                <input
                    type="text"
                    name="honeypot"
                    className="hidden"
                    autoComplete="off"
                    tabIndex={-1}
                />

                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                        Subject
                    </label>
                    <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>


                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition ${loading ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                >
                    {loading ? 'Sending...' : 'Send Message'}
                </button>

            </form>

            <div className="mt-10 text-center text-gray-400 text-sm">
                <p><strong>Email:</strong> <a href="mailto:vishwajeet1298@gmail.com" className="text-blue-400">vishwajeet1298@gmail.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+917054088306" className="text-blue-400">+91 7054088306</a></p>
                <p><strong>Permanent:</strong> Gorakhpur, Uttar Pradesh, 273209</p>
                <p><strong>Correspondence:</strong> Gurugram, Haryana, 122001</p>
                <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/vishwajeet1298" target="_blank" className="text-blue-400">linkedin.com/in/vishwajeet1298</a></p>
                <p><strong>GitHub:</strong> <a href="https://github.com/vishwajeet1298" target="_blank" className="text-blue-400">github.com/vishwajeet1298</a></p>
            </div>
        </section>
    );
};

export default Contact;
