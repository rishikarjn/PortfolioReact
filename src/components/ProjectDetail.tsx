import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Calendar, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Lightbulb,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const project = projects.find(p => p.id === parseInt(id || '0'));

  useEffect(() => {
    if (!project) {
      navigate('/');
    }
  }, [project, navigate]);

  if (!project) {
    return null;
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const openImageModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsImageModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex items-center space-x-2 text-sm text-gray-600">
          <button
            onClick={() => navigate('/')}
            className="hover:text-[#725CAD] transition-colors"
          >
            Home
          </button>
          <span>/</span>
          <button
            onClick={() => navigate('/#projects')}
            className="hover:text-[#725CAD] transition-colors"
          >
            Projects
          </button>
          <span>/</span>
          <span className="text-[#0B1D51] font-medium">{project.title}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Back Button */}
        <button
          onClick={() => navigate('/#projects')}
          className="flex items-center text-[#725CAD] hover:text-[#0B1D51] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </button>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Project Header */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h1 className="text-4xl font-bold text-[#0B1D51] mb-4">
                {project.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 mb-6 text-gray-600">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>Completed: {project.completionDate}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>Duration: {project.duration}</span>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {project.longDescription}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#725CAD] to-[#8CCDEB] text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Live Demo
                </a>
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-[#725CAD] text-[#725CAD] px-6 py-3 rounded-lg font-medium hover:bg-[#725CAD] hover:text-white transition-all duration-300 flex items-center"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View Source Code
                </a>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-[#0B1D51] mb-6">Project Gallery</h2>
              
              {/* Main Image */}
              <div className="relative mb-6">
                <img
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                  className="w-full h-96 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openImageModal(currentImageIndex)}
                />
                
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Gallery */}
              {project.images.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {project.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${project.title} thumbnail ${index + 1}`}
                      className={`w-full h-24 object-cover rounded-lg cursor-pointer transition-all ${
                        index === currentImageIndex
                          ? 'ring-4 ring-[#725CAD] opacity-100'
                          : 'opacity-70 hover:opacity-100'
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Key Features */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-[#0B1D51] mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges & Learnings */}
            {(project.challenges || project.learnings) && (
              <div className="grid md:grid-cols-2 gap-8">
                {project.challenges && (
                  <div className="bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-[#0B1D51] mb-6 flex items-center">
                      <AlertCircle className="w-6 h-6 mr-2 text-orange-500" />
                      Challenges
                    </h2>
                    <ul className="space-y-3">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="text-gray-700 flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.learnings && (
                  <div className="bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-[#0B1D51] mb-6 flex items-center">
                      <Lightbulb className="w-6 h-6 mr-2 text-yellow-500" />
                      Key Learnings
                    </h2>
                    <ul className="space-y-3">
                      {project.learnings.map((learning, index) => (
                        <li key={index} className="text-gray-700 flex items-start">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                          {learning}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Technologies Used */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8 sticky top-24">
              <h3 className="text-xl font-bold text-[#0B1D51] mb-6">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-[#8CCDEB]/20 to-[#725CAD]/20 text-[#0B1D51] rounded-full font-medium text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Info */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-[#0B1D51] mb-6">Project Information</h3>
              <div className="space-y-4">
                <div>
                  <span className="font-medium text-gray-700">Category:</span>
                  <span className="ml-2 capitalize text-[#725CAD]">
                    {project.category === 'fullstack' ? 'Full Stack' : project.category}
                  </span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Completion Date:</span>
                  <span className="ml-2 text-gray-600">{project.completionDate}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Development Duration:</span>
                  <span className="ml-2 text-gray-600">{project.duration}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isImageModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={project.images[currentImageIndex]}
              alt={`${project.title} full size`}
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl"
            >
              ×
            </button>
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;