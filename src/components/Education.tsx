import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const education = [
    {
      id: 1,
      institution: 'Dr. APJ Abdul Kalam Women\'s Institute of Technology, Darbhanga',
      degree: 'B.Tech in Computer Science Engineering',
      year: '2021 - 2025',
      achievements: ['CGPA: 7.96/10', 'Web Development Projects', 'Technical Skills Development'],
      color: '#725CAD',
    },
    {
      id: 2,
      institution: '+2 H/S Keshori, Pakribarawan, Nawada, Bihar',
      degree: 'Intermediate (12th Grade)',
      year: '2019 - 2021',
      achievements: ['Percentage: 65.2%', 'Science Stream', 'Foundation in Mathematics & Physics'],
      color: '#8CCDEB',
    },
    {
      id: 3,
      institution: 'Dr.D.Ram DAV Public School, Golaroad, Patna, Bihar',
      degree: 'Matriculation (10th Grade)',
      year: '2018 - 2019',
      achievements: ['Percentage: 85.2%', 'Strong Academic Foundation', 'All-round Development'],
      color: '#FFE3A9',
    },
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
    <section id="education" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0B1D51] mb-4">Education</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey and professional certifications
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#725CAD] to-[#8CCDEB] rounded-full" />

          <div className="space-y-12">
            {education.map((item, index) => (
              <div
                key={item.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white shadow-lg transition-all duration-1000 ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`}
                  style={{
                    backgroundColor: item.color,
                    transitionDelay: `${index * 200}ms`,
                  }}
                />

                {/* Content card */}
                <div
                  className={`w-full max-w-md mx-8 bg-white rounded-lg shadow-lg p-6 border-l-4 group hover:shadow-xl transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    borderLeftColor: item.color,
                    transitionDelay: `${index * 200 + 300}ms`,
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <GraduationCap
                        className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform"
                        style={{ color: item.color }}
                      />
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">{item.year}</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#0B1D51] mb-2">
                    {item.degree}
                  </h3>
                  <p className="text-gray-600 mb-4 font-medium">
                    {item.institution}
                  </p>

                  <div className="space-y-2">
                    {item.achievements.map((achievement, achievementIndex) => (
                      <div
                        key={achievementIndex}
                        className="flex items-center text-gray-700"
                      >
                        <Award className="w-4 h-4 mr-2 text-[#725CAD]" />
                        <span className="text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;