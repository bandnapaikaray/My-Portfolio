'use client';

import { useInView } from '@/lib/animations';
import { skills } from '@/data/portfolio';

const Skills = () => {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="skills" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50"></div>
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full animate-bounce opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-purple-200 rounded-full animate-bounce animation-delay-1000 opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => (
            <div
              key={skillCategory.category}
              className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                {skillCategory.category}
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className={`bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-lg p-3 text-center hover:from-blue-100 hover:to-purple-100 transition-all duration-300 hover:scale-105 transform ${
                      inView ? 'translate-x-0 opacity-100' : 'translate-x-5 opacity-0'
                    }`}
                    style={{ transitionDelay: `${(index * 200) + (skillIndex * 100)}ms` }}
                  >
                    <span className="text-sm font-medium text-gray-800">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Always Learning
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Technology evolves rapidly, and I believe in continuous learning. I'm always 
              exploring new frameworks, tools, and best practices to stay current with 
              industry standards and deliver the best solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
