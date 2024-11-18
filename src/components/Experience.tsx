import React from 'react';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      position: 'AI Intern',
      company: 'Infosys SpringBoard',
      period: 'Oct 2024 - Present',
      description:
        'Working on GlucoSense: AI-Powered Diabetes Detection project, implementing machine learning models and developing data processing pipelines.',
      achievements: [
        'Developed and deploying ML models',
        'Working on model development and optimization',
        'Collaborate on projects involving LLMs and AI technologies',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Professional Experience
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200 dark:bg-gray-700" />

          {/* Experience cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const ExperienceCard = ({
  position,
  company,
  period,
  description,
  achievements,
}: {
  position: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}) => (
  <div className="relative">
    {/* Timeline dot */}
    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
      <div className="w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center">
        <Briefcase className="w-4 h-4 text-white" />
      </div>
    </div>

    {/* Card */}
    <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
          {position}
        </h3>
        <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
          {company}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          {period}
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <ul className="space-y-2">
          {achievements.map((achievement, index) => (
            <li
              key={index}
              className="text-sm text-gray-600 dark:text-gray-300 flex items-start"
            >
              <span className="mr-2">•</span>
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);
