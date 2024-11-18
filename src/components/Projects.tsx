import React from 'react';
import { Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'GlucoSense AI: Diabetes prediction',
      description:
        'AI-powered diabetes detection system using machine learning',
      image:
        'https://diabeticstrust.com/wp-content/uploads/2023/01/Signs-that-Diabetes-is-Killing-You-1024x512.webp',
      skills: ['Pandas', 'XgBoost', 'Scikit-learn'],
      github:
        'https://github.com/rahulthota21/RahulThota-GlucoSense-Infy-Nov24',
    },
    {
      title: 'Sentiment Analysis of Tweets',
      description:
        'Developed a sentiment analysis model using Logistic Regression on 1.6 million tweets from the Sentiment140 dataset.',
      image:
        'https://unfoldedstars.in/wp-content/uploads/2024/11/Screenshot_11.png',
      skills: ['Python', 'NLTK', 'tensorflow'],
      github:
        'https://github.com/rahulthota21/projects/tree/main/Chatbot%20With%20Sentimental%20Analysis',
    },
    {
      title: 'Crop Yield Prediction',
      description:
        'Suggested crops by region with Logistic Regression and Random Forest models.',
      image:
        'https://www.gmv.com/sites/default/files/styles/image_1000/public/content/image/2022/03/16/124/gmv-smart-agro-noticia-tecnologias-cuanticas-agraria.jpg?itok=q_j59TOs',
      skills: ['Python', 'scikit-learn', 'Seaborn'],
      github:
        'https://github.com/rahulthota21/projects/tree/main/Crop%20Yield%20Prediction',
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({
  title,
  description,
  image,
  skills,
  github,
}: {
  title: string;
  description: string;
  image: string;
  skills: string[];
  github: string;
}) => (
  <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
    <div className="relative h-40">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 rounded-full transition-colors"
      >
        <Github className="w-4 h-4 mr-2" />
        View Code
      </a>
    </div>
  </div>
);
