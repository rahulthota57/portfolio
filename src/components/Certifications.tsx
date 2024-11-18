import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      name: 'Machine Learning with Python',
      issuer: 'IBM',
      date: 'September 2024',
      link: 'https://www.coursera.org/account/accomplishments/verify/I2KPLLC33HGK',
    },
    {
      name: 'TensorFlow Keras Bootcamp',
      issuer: 'Google',
      date: 'October 2022',
      link: 'https://courses.opencv.org/certificates/efa59ae1679543ceac755397cec0ad75',
    },
    {
      name: 'Improving Deep Neural Networks',
      issuer: 'DeepLearning.AI',
      date: 'October 2024',
      link: 'https://www.coursera.org/account/accomplishments/verify/B2DS0125CPM7',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
}

const CertificationCard = ({
  name,
  issuer,
  date,
  link,
}: {
  name: string;
  issuer: string;
  date: string;
  link: string;
}) => (
  <div className="bg-gradient-to-br from-white to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300">
    <div className="flex items-center mb-4">
      <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg">
        <Award className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
      </div>
      <div className="ml-4 flex-1">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {name}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{issuer}</p>
      </div>
    </div>
    <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-4">{date}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-sm text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
    >
      View Certificate
      <ExternalLink className="w-4 h-4 ml-2" />
    </a>
  </div>
);
