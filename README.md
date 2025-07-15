# Rishika Ranjan - Portfolio Website

A modern, responsive portfolio website showcasing my projects, skills, and experience as a Computer Science Engineering student.

## Features

### 🎨 Design & UI
- Modern, professional design with custom color palette
- Fully responsive layout for all devices
- Smooth animations and hover effects
- Interactive particle background
- Custom scrollbar and loading animations

### 🚀 Functionality
- **Dynamic Project Showcase**: Detailed project pages with image galleries
- **Email Integration**: Contact form powered by Email.js
- **Smooth Navigation**: Sticky header with scroll-to-section functionality
- **Mobile-First**: Responsive hamburger menu for mobile devices
- **SEO Optimized**: Proper meta tags and semantic HTML structure

### 📱 Sections
- **Hero**: Animated introduction with call-to-action
- **About**: Personal story and interactive skills showcase
- **Education**: Timeline layout with academic achievements
- **Projects**: Filterable grid with detailed project pages
- **Contact**: Professional contact form with social links
- **Footer**: Clean footer with back-to-top functionality

## Tech Stack

- **Frontend**: React.js, TypeScript, Tailwind CSS
- **Routing**: React Router DOM
- **Email Service**: Email.js
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Vercel/Netlify ready

## Email.js Setup

To enable the contact form:

1. Create an account at [Email.js](https://www.emailjs.com/)
2. Create a new service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message
   - `{{to_name}}` - Your name (Rishika Ranjan)
4. Update `src/services/emailService.ts` with your credentials:
   ```typescript
   const SERVICE_ID = 'your_service_id';
   const TEMPLATE_ID = 'your_template_id';
   const USER_ID = 'your_user_id';
   ```

## Project Structure

```
src/
├── components/          # React components
│   ├── Navigation.tsx   # Sticky navigation header
│   ├── Hero.tsx        # Hero section with animations
│   ├── About.tsx       # About and skills section
│   ├── Education.tsx   # Education timeline
│   ├── Projects.tsx    # Projects grid
│   ├── ProjectDetail.tsx # Individual project pages
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer component
├── data/               # Static data
│   └── projects.ts     # Project information
├── services/           # External services
│   └── emailService.ts # Email.js integration
├── types/              # TypeScript types
│   └── Project.ts      # Project interface
├── App.tsx            # Main app with routing
├── index.css          # Global styles and animations
└── main.tsx           # App entry point
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/rishikaranjan/portfolio
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Customization

### Adding New Projects
Edit `src/data/projects.ts` to add new projects with:
- Project details and descriptions
- Technology stack
- Image galleries
- Live demo and source code links
- Key features and learnings

### Updating Personal Information
- Update name and details in all components
- Replace social media links
- Update contact information
- Modify the hero section introduction

### Styling
- Color palette defined in Tailwind config
- Custom animations in `src/index.css`
- Component-specific styles in individual files

## Performance Features

- **Lazy Loading**: Images load on demand
- **Smooth Scrolling**: CSS scroll-behavior and JavaScript
- **Optimized Animations**: Hardware-accelerated transforms
- **Responsive Images**: Proper sizing for all devices
- **SEO Ready**: Meta tags and semantic HTML

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

**Rishika Ranjan**
- Email: rishika.ranjan@example.com
- LinkedIn: [linkedin.com/in/rishika-ranjan](https://linkedin.com/in/rishika-ranjan)
- GitHub: [github.com/rishikaranjan](https://github.com/rishikaranjan)

---

Built with ❤️ using React.js and modern web technologies.