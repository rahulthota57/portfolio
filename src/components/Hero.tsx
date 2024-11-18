import React from 'react';
import { Github, Linkedin, Twitter, ChevronDown } from 'lucide-react';

export default function Hero() {
  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      href: 'https://github.com/rahulthota21',
      label: 'GitHub Profile',
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: 'https://www.linkedin.com/in/rahulthota21',
      label: 'LinkedIn Profile',
      color: 'hover:text-blue-700 dark:hover:text-blue-400',
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      href: 'https://x.com/RahulThotaX',
      label: 'Twitter Profile',
      color: 'hover:text-blue-500 dark:hover:text-blue-300',
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-blue-50 to-white dark:from-gray-900 dark:via-indigo-950 dark:to-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="text-center w-full max-w-4xl mx-auto pt-20 md:pt-28 animate-fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400 mb-4 tracking-tight">
          Thota Rahul
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-slide-up">
          Aspiring AIML Engineer
        </p>

        <div className="flex justify-center space-x-4 sm:space-x-6 mb-8 sm:mb-12">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className={`social-icon ${link.color} transform hover:scale-110 transition-all duration-300`}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <button
            onClick={() => scrollToSection('projects')}
            className="btn-primary w-full sm:w-auto"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-secondary w-full sm:w-auto"
          >
            Contact Me
          </button>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Scroll to About section"
      >
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600 dark:text-indigo-400" />
      </button>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-indigo-200 dark:bg-indigo-800 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 blur-3xl"></div>
      </div>
    </div>
  );
}
