
'use client';
import { Certificate } from '@/data/certificates';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface CertificateCardProps {
    certificate: Certificate;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gray-800 rounded-lg shadow-lg p-6 transition-transform"
        >
            <Image
                src={certificate.image}
                alt={certificate.title}
                width={400}
                height={200}
                className="rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{certificate.title}</h2>
            <p className="text-gray-300 mb-1">Issued by: {certificate.issuer}</p>
            <p className="text-gray-400 text-sm">Date: {certificate.date}</p>
        </motion.div>
    );
};

export default CertificateCard;
