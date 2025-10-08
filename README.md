# Blue Rays - Solar Panel Business Website

A modern, production-ready Next.js application for Blue Rays solar panel business, featuring a clean design with shadcn/ui components and Tailwind CSS.

## 🌟 Features

- **Modern Design**: Clean, professional interface with smooth animations and transitions
- **Responsive Layout**: Fully responsive design that works on all devices
- **SEO Optimized**: Built with Next.js 14 for optimal performance and SEO
- **Component-Based**: Modular architecture using React components
- **Type-Safe**: Full TypeScript support for better development experience
- **Styled with Tailwind**: Utility-first CSS framework for rapid development
- **shadcn/ui**: Beautiful, accessible UI components

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

Create an optimized production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## 📁 Project Structure

```
blue-rays/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/           # shadcn/ui components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Benefits.tsx
│   │   ├── About.tsx
│   │   ├── ContactForm.tsx
│   │   └── Footer.tsx
│   └── lib/
│       └── utils.ts
├── public/
├── .github/
│   └── copilot-instructions.md
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🎨 Key Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **Services**: Four main service offerings (Residential, Commercial, Industrial, Maintenance)
3. **Benefits**: Key advantages of choosing solar energy
4. **About**: Company information and statistics
5. **Contact Form**: Easy-to-use form for customer inquiries
6. **Footer**: Site navigation and social links

## 🛠️ Technologies Used

- **Next.js 14+**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Reusable UI components
- **Lucide React**: Beautiful icon library
- **class-variance-authority**: Component variant management
- **clsx & tailwind-merge**: Conditional styling utilities

## 📝 Customization

### Changing Colors

Edit the CSS variables in `src/app/globals.css` to change the color scheme.

### Adding New Sections

Create new components in `src/components/` and import them in `src/app/page.tsx`.

### Modifying Content

Edit the component files directly to update text, images, and other content.

## 🌐 Deployment

This application can be deployed to various platforms:

- **Vercel**: `vercel deploy`
- **Netlify**: Connect your repository
- **AWS Amplify**: Use the AWS Console
- **Other**: Any platform that supports Next.js

## 📄 License

This project is proprietary software for Blue Rays Solar Panel Business.

## 🤝 Support

For support, email support@bluerays.com or call 1-800-BLUE-RAYS.

---

Built with ❤️ by Blue Rays Team
