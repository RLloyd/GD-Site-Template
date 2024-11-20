// src/data/mock-data.ts
import logo from '@/assets/GD-Fusion-logo.png';

const URLS = {
  portfolioSite: 'https://www.rlloydgonzales.com',
  articleSite: 'https://gd-article-bgtheme.netlify.app/',
  samplePage: 'https://your-social-page-url.com'
} as const;

export const navigationData = {
  menuItems: {
    left: [
      // { label: 'Home', path: URLS.portfolioSite, isExternal: true },
      { label: 'MashMedia', path: '/mediamash-studio' },
      { label: 'FIS', path: '/digitalone' },
      { label: 'Zenmonics', path: '/zenmonics' },
    ],
    right: [
      { label: 'Blog', path: '/blog' },
      { label: 'Styleguide', path: '/styleguide' },
      { label: 'Profile', path: '/profile' },
      // {
      //   label: 'Sample page',
      //   path: URLS.samplePage,
      //   isExternal: true,
      //   openInWindow: true
      // }
    ]
  },
  logo: {
    image: logo,
    alt: 'GonzalesDesign Fusion Logo',
    path: URLS.articleSite
  }
};

export { URLS };

export const siteData = {
  company: {
    name: 'GDSiteTemplate',
    logo: logo,
    navigation: navigationData.menuItems.left
   //  navigation: [
   //    { label: 'Home', path: URLS.portfolioSite, isExternal: true },
   //    { label: 'MashMedia Studio', path: '/mediamash-studio' },
   //    { label: 'DigitalOne', path: '/digitalone' }
   //  ]
  },
  pages: {
    home: {
      hero: {
        title: "Welcome to GDSiteTemplate",
        subtitle: "Your modern web solution",
        description: "A powerful React template with TypeScript, styled-components, and multiple navigation options."
      },
      features: [
        {
          id: 1,
          title: "TypeScript Ready",
          description: "Built with type safety in mind for better development experience.",
          icon: "🏗️"
        },
        {
          id: 2,
          title: "Multiple Navigations",
          description: "Choose between different navigation styles for your needs.",
          icon: "🎨"
        },
        {
          id: 3,
          title: "Theme Support",
          description: "Dark and light mode with customizable themes.",
          icon: "🌓"
        }
      ]
    },
    services: {
      title: "Our Services",
      description: "Comprehensive web development solutions for your needs",
      serviceList: [
        {
          id: 1,
          title: "Web Development",
          description: "Custom web applications built with modern technologies",
          icon: "💻",
          features: ["React", "TypeScript", "Responsive Design"]
        },
        {
          id: 2,
          title: "UI/UX Design",
          description: "Beautiful and intuitive user interfaces",
          icon: "🎨",
          features: ["User Research", "Wireframing", "Prototyping"]
        },
        {
          id: 3,
          title: "Performance Optimization",
          description: "Speed up your web applications",
          icon: "⚡",
          features: ["Code Splitting", "Lazy Loading", "Caching"]
        }
      ]
    },
    about: {
      title: "About Us",
      description: "Building the future of web development",
      content: [
        {
          id: 1,
          title: "Our Mission",
          text: "To provide developers with the best tools and templates for building modern web applications."
        },
        {
          id: 2,
          title: "Our Vision",
          text: "Becoming the go-to solution for React-based web development projects."
        },
        {
          id: 3,
          title: "Our Values",
          text: "Quality, Innovation, and Developer Experience are at the core of everything we do."
        }
      ],
      team: [
        {
          id: 1,
          name: "John Doe",
          role: "Lead Developer",
          image: "/team/john.jpg"
        },
        {
          id: 2,
          name: "Jane Smith",
          role: "UI/UX Designer",
          image: "/team/jane.jpg"
        }
      ]
    },
    location: {
      title: "Find Us",
      description: "Get in touch with our team",
      address: {
        street: "123 Tech Street",
        city: "San Francisco",
        state: "CA",
        zip: "94105",
        country: "USA"
      },
      contact: {
        email: "hello@gdsitetemplate.com",
        phone: "+1 (555) 123-4567",
        social: {
          twitter: "https://twitter.com/gdsitetemplate",
          github: "https://github.com/gdsitetemplate",
          linkedin: "https://linkedin.com/company/gdsitetemplate"
        }
      },
      hours: {
        weekdays: "9:00 AM - 6:00 PM",
        weekends: "Closed"
      }
    }
  }
};

// export { URLS };