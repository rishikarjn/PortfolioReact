import React, { useEffect, useRef, useState } from 'react';
import { Code, Palette, Server, Smartphone } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { name: 'React.js', level: 85, category: 'frontend' },
    { name: 'JavaScript', level: 80, category: 'frontend' },
    { name: 'HTML/CSS', level: 90, category: 'frontend' },
    { name: 'Tailwind CSS', level: 85, category: 'frontend' },
    { name: 'C/C++', level: 75, category: 'backend' },
    { name: 'SQL', level: 70, category: 'database' },
    { name: 'Git/GitHub', level: 80, category: 'tools' },
    { name: 'Redux', level: 75, category: 'frontend' },
  ];

  const categories = [
    { name: 'Frontend', icon: Code, color: '#8CCDEB' },
    { name: 'Programming', icon: Server, color: '#725CAD' },
    { name: 'Database', icon: Palette, color: '#FFE3A9' },
    { name: 'Tools', icon: Smartphone, color: '#8CCDEB' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0B1D51] mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
           Eager to contribute to innovative teams using technologies like React.js, JavaScript, and C/C++, while continuing
 to learn and grow in a dynamic tech environment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl font-bold text-[#0B1D51] mb-6">My Story</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I'm Rishika Ranjan, a passionate Computer Science Engineering student at Dr. APJ Abdul Kalam Women's Institute of Technology, 
              Darbhanga, with a strong foundation in web development and programming. Currently pursuing my B.Tech degree 
              with a CGPA of 7.96/10, I'm dedicated to creating innovative digital solutions.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I specialize in modern web technologies including React.js, JavaScript, and responsive design. 
              My experience includes building full-stack applications with MERN stack, implementing secure 
              authentication systems, and creating user-friendly interfaces that solve real-world problems.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {categories.map((category, index) => (
                <div
                  key={category.name}
                  className={`p-4 rounded-lg border-2 border-gray-100 hover:border-[#725CAD] transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <category.icon className="w-8 h-8 mb-2" style={{ color: category.color }} />
                  <h4 className="font-semibold text-[#0B1D51]">{category.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-2xl font-bold text-[#0B1D51] mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-[#0B1D51]">{skill.name}</span>
                    <span className="text-sm text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-[#725CAD] to-[#8CCDEB] h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 150 + 500}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;