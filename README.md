# Nitish Choudhary — Developer Portfolio

A modern, responsive personal portfolio built with React and Vite to showcase my work, technical skills, certifications, photography, and contact information.

## ✨ Features

- Responsive design for desktop, tablet, and mobile
- Dark / light theme with persisted preference
- Framer Motion animations and interactive UI
- React Router navigation with dedicated pages
- Animated hero section with typewriter effect
- Interactive particle background
- Project showcase with live demos and GitHub links
- Dynamic project detail routes
- Technical skills grouped by category
- Certification filtering by Development, AI, Cloud, and DevOps
- Photography gallery with category filters
- Drag-to-scroll gallery strips and lightbox image viewer
- EmailJS-powered contact form
- Downloadable developer resume / CV
- Responsive mobile navigation
- Scroll-aware navigation and back-to-top interaction
- Social media showcase and external profile links

## 🛠️ Tech Stack

### Frontend

- React 18
- React Router
- Tailwind CSS
- Framer Motion
- Styled Components

### UI & Icons

- Lucide React
- React Icons
- Font Awesome classes

### Integrations

- EmailJS
- Instagram Embed
- Google Fonts

### Tooling

- Vite
- PostCSS
- Autoprefixer
- npm

## 📂 Project Structure

```text
Myportfolio/
├── public/
│   ├── images/
│   ├── Profile.png
│   ├── ProfilePic.jpg
│   ├── NitishChoudhary_SoftwareDeveloper_Resume.pdf
│   └── ...
├── src/
│   ├── Assets/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectDetails.jsx
│   │   ├── Skills.jsx
│   │   ├── Certificates.jsx
│   │   ├── Gallery.jsx
│   │   ├── Contact.jsx
│   │   ├── ServicesShowcase.jsx
│   │   ├── Loader.jsx
│   │   ├── BackToTop.jsx
│   │   ├── Footer.jsx
│   │   └── ...
│   ├── App.jsx
│   ├── ScrollToTop.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── package-lock.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🧭 Routes

| Route | Description |
| --- | --- |
| `/` | Main portfolio landing page |
| `/about` | About / developer profile |
| `/projects` | Project showcase |
| `/projects/:id` | Individual project details |
| `/skills` | Skills and technologies |
| `/certificates` | Certifications and learning milestones |
| `/gallery` | Photography gallery |
| `/contact` | Contact form and social links |

## 🚀 Featured Projects

The portfolio currently showcases:

- **Doctor Appointment System** — full-stack healthcare application using React, Node.js, and MongoDB
- **Official Company Website** — responsive corporate website
- **E-Commerce Website** — modern online store experience
- **Village Inquiry Portal** — platform for access to essential government services
- **Weather App** — real-time weather experience
- **Password Generator** — customizable password generation tool
- **Todo App** — task management application
- **EduConnect** — digital learning and collaboration platform

Each project can expose a live preview and, where available, its GitHub source repository.

## 🎨 Design & UX

The portfolio uses a custom light and dark visual system with a walnut / sandstone-inspired accent palette. The interface combines responsive layouts, subtle borders, hover states, animated transitions, and motion effects for a polished developer-focused experience.

The hero section includes a typewriter animation, Framer Motion entrance effects, and an interactive particle background. The navigation changes between desktop and mobile layouts, while scroll behavior and back-to-top interactions improve usability on long pages.

## 🧑‍💻 Skills Covered

The portfolio currently represents experience with:

- JavaScript
- TypeScript
- C++
- SQL
- HTML5 / CSS3
- React
- Tailwind CSS
- Node.js
- Express.js
- REST APIs
- Authentication
- MongoDB
- MySQL
- Git / GitHub
- Postman
- Figma
- Data Structures & Algorithms
- Object-Oriented Programming
- DBMS
- Computer Networks
- Operating Systems
- Debugging
- Performance Optimization

## 🏆 Certifications

The certification section contains learning milestones from platforms and organizations including LinkedIn, Coursera, GitHub, Microsoft, and AWS.

Certificates are organized into categories including:

- Development
- AI
- Cloud
- DevOps

## 📸 Gallery

The gallery contains themed collections such as:

- Talwiinder Concerts
- Nature Photography
- Night Views
- NSS Memories

Images are presented in horizontally scrollable film-strip style rows and can be opened in a lightbox for a larger view.

## 📬 Contact

The portfolio includes a contact form powered by EmailJS and links to professional and creative social profiles.

## ⚙️ Getting Started

### Prerequisites

Install:

- Node.js
- npm

### Clone the repository

```bash
git clone https://github.com/nitishchahal/Myportfolio.git
cd Myportfolio
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local URL shown by Vite in your browser.

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## 🔐 EmailJS Configuration

The contact form uses EmailJS from the client-side application. When adapting this repository for your own deployment, review the EmailJS service, template, and public-key configuration in `src/components/Contact.jsx` and replace the existing project configuration with your own.

## 🌐 Deployment

This is a Vite frontend application and can be deployed to static hosting platforms such as Vercel, Netlify, or GitHub Pages.

Typical configuration:

```text
Build command: npm run build
Output directory: dist
```

## 📄 Resume

The repository includes a software developer resume in the `public/` directory, which is linked from the About section of the portfolio.

## 👨‍💻 About Me

I'm **Nitish Choudhary**, a Full Stack Developer focused on building modern, scalable, and user-friendly web applications. My work spans frontend and backend development, REST API integration, authentication, database management, software design, debugging, and frontend performance optimization.

## ⭐ Support

If you like the portfolio or find the project useful, consider giving the repository a star and exploring the featured projects.

---

**Built with React, Vite, Tailwind CSS, Framer Motion, and a strong focus on modern UI/UX.**
