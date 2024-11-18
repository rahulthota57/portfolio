import React from 'react';
import { Brain, Code as CodeIcon, Database } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              I'm an AI/ML Engineer passionate about developing intelligent
              solutions that make a real impact. With expertise in machine
              learning, deep learning, and data science, I strive to bridge the
              gap between complex algorithms and practical applications
            </p>

            <div className="space-y-6">
              <SkillCard
                icon={<Brain className="w-6 h-6" />}
                title="Machine Learning"
                description="Expertise in developing and deploying ML models using Python and TensorFlow"
              />
              <SkillCard
                icon={<CodeIcon className="w-6 h-6" />}
                title="Deep Learning"
                description="Neural networks, computer vision, and natural language processing"
              />
              <SkillCard
                icon={<Database className="w-6 h-6" />}
                title="Data Science"
                description="Experience in data analysis, visualization, and statistical modeling"
              />
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <div className="relative max-w-md mx-auto">
              <img
                src="https://images.unsplash.com/photo-1730348204580-6e56f25dddeb?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Professional headshot"
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const SkillCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0">
      <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg text-indigo-600 dark:text-indigo-400">
        {icon}
      </div>
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  </div>
);
