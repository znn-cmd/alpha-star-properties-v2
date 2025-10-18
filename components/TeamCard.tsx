'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

interface TeamCardProps {
  member: {
    name: string;
    position: string;
    image: string;
    linkedin?: string;
    email?: string;
  };
  index: number;
}

export default function TeamCard({ member, index }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="relative h-80">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-dark mb-1">{member.name}</h3>
        <p className="text-gray-600 mb-4">{member.position}</p>
        <div className="flex gap-3">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors group"
            >
              <FaLinkedin className="text-primary group-hover:text-white" />
            </a>
          )}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="w-10 h-10 bg-accent/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors group"
            >
              <FaEnvelope className="text-accent group-hover:text-white" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

