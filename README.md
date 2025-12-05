# Sujal Shukla - Portfolio

This is a modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## Features

- **Modern UI/UX**: Glassmorphism effects, smooth animations with Framer Motion.
- **Responsive Design**: Fully optimized for Desktop, Laptop, Tablet, and Mobile.
- **Dark/Light Mode**: Toggle between themes.
- **Performance**: Optimized with WEBP images and lazy loading.
- **Contact Form**: Integrated with EmailJS (requires configuration).

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1.  Clone the repository or navigate to the project directory.
2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Start the development server:

    ```bash
    npm run dev
    ```

4.  Open your browser and visit `http://localhost:5173`.

## Configuration

### EmailJS

To make the contact form functional, you need to set up EmailJS:

1.  Create an account at [EmailJS](https://www.emailjs.com/).
2.  Create a new Email Service and Email Template.
3.  Open `src/sections/Contact.jsx`.
4.  Uncomment the `emailjs.sendForm` line and replace the placeholders with your actual credentials:
    - `YOUR_SERVICE_ID`
    - `YOUR_TEMPLATE_ID`
    - `YOUR_PUBLIC_KEY`

### Images

Replace the placeholder images in the code with your actual WEBP images:

- **Hero Image**: Update `src/sections/Hero.jsx`
- **About Image**: Update `src/sections/About.jsx`
- **Project Images**: Update `src/sections/Projects.jsx`
- **Footer Graphic**: Already placed in `src/assets/footer_graphic.webp`

## Deployment

To build the project for production:

```bash
npm run build
```

The output will be in the `dist` folder, ready to be deployed to GitHub Pages, Vercel, or Netlify.
