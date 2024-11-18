import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  const educations = [
    {
      degree: 'B.Tech in Computer Science',
      school: 'Amrita Vishwa Vidyapeetham',
      year: '2022-present',
      achievements: [
        'Learning Artificial Intelligence and Machine Learning',
        'Graduated with First Class Honours',
        'Led machine learning project student group',
      ],
    },
    {
      degree: 'Intermediate in MPC',
      school: 'Vijaya Jr College',
      year: '2020-2022',
      achievements: [
        'Focused on Mathematics',
        'Won college 1st place in a test conducted by the college',
      ],
    },
    {
      degree: 'Schooling',
      school: 'Vijaya Convent High School',
      year: '2009-2020',
      achievements: [
        'NMMS certified',
        'Finished at second in Cricket Tournment',
      ],
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educations.map((edu, index) => (
            <EducationCard key={index} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
}

const EducationCard = ({
  degree,
  school,
  year,
  achievements,
}: {
  degree: string;
  school: string;
  year: string;
  achievements: string[];
}) => (
  <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
    <div className="flex items-center mb-4">
      <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
        <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {degree}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{school}</p>
      </div>
    </div>
    <p className="text-sm text-blue-600 dark:text-blue-400 mb-4">{year}</p>
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
);
