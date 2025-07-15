import { Project } from '../types/Project';

export const projects: Project[] = [
  {
    id: 1,
    title: 'BookNest: Hotel Booking Platform',
    description: 'Comprehensive MERN Stack hotel booking system featuring hotel listings, bookings, and real-time confirmations with secure payment processing.',
    longDescription: 'BookNest is a full-featured hotel booking platform built with the MERN stack. The application provides a seamless experience for users to browse hotels, make bookings, and manage their reservations. It features secure authentication, real-time booking confirmations, and integrated payment processing.',
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Stripe', 'Clerk', 'Tailwind CSS'],
    category: 'fullstack',
    demoUrl: 'https://booknest-demo.vercel.app',
    sourceUrl: 'https://github.com/rishikaranjan/booknest',
    features: [
      'User authentication and authorization with Clerk',
      'Hotel search and filtering functionality',
      'Real-time booking system with availability checking',
      'Secure payment processing with Stripe integration',
      'Automated email booking confirmations',
      'Responsive design for all devices',
      'Admin dashboard for hotel management',
      'User profile and booking history',
      'Review and rating system',
      'Advanced search filters (price, location, amenities)'
    ],
    completionDate: 'March 2025',
    duration: '3 months',
    challenges: [
      'Implementing real-time booking availability',
      'Integrating multiple payment methods securely',
      'Optimizing database queries for large datasets',
      'Handling concurrent booking requests'
    ],
    learnings: [
      'Advanced React.js patterns and state management',
      'MongoDB aggregation pipelines',
      'Payment gateway integration best practices',
      'Real-time data synchronization techniques'
    ]
  },
  {
    id: 2,
    title: 'Assignify: Employee Task Management System',
    description: 'Responsive task management interface for creating, categorizing, and assigning tasks with dynamic form handling and real-time UI updates.',
    longDescription: 'Assignify is a modern task management system designed to streamline employee productivity and project coordination. Built with React.js and featuring a clean, intuitive interface, it allows teams to create, assign, and track tasks efficiently with real-time updates and persistent data storage.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    tech: ['React.js', 'JavaScript', 'Tailwind CSS', 'Local Storage', 'HTML5', 'CSS3'],
    category: 'frontend',
    demoUrl: 'https://assignify-demo.vercel.app',
    sourceUrl: 'https://github.com/rishikaranjan/assignify',
    features: [
      'Dynamic task creation and categorization',
      'Employee assignment with user mapping',
      'Real-time UI updates and form handling',
      'Cross-session data persistence with Local Storage',
      'Responsive design for mobile and desktop',
      'Task status tracking (pending, in-progress, completed)',
      'Priority levels and due date management',
      'Search and filter functionality',
      'Drag-and-drop task organization',
      'Custom styling with Tailwind CSS'
    ],
    completionDate: 'January 2024',
    duration: '2 months',
    challenges: [
      'Implementing efficient local storage management',
      'Creating smooth drag-and-drop interactions',
      'Optimizing performance for large task lists',
      'Ensuring data consistency across sessions'
    ],
    learnings: [
      'Advanced React hooks and state management',
      'Local storage optimization techniques',
      'Responsive design best practices',
      'User experience design principles'
    ]
  }
];