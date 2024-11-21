 // src/data/pageContent.ts
 import { DetailContent } from '../types/navigation';

 export const mashMediaContent: DetailContent[] = [
   {
     id: 'mm-overview',
     title: 'MashMedia Studio Overview',
     subtitle: 'Creative Digital Solutions',
     description: 'Innovative digital media production and content creation',
     content: `MashMedia Studio specializes in creating cutting-edge digital content
     and media solutions for modern businesses. Our approach combines creative
     storytelling with technical excellence.`,
     image: '/images/mashmedia/overview.jpg',
     tags: ['Digital Media', 'Content Creation', 'Production']
   },
   {
     id: 'mm-services',
     title: 'Studio Services',
     description: 'Comprehensive media production services',
     content: `Our services include video production, motion graphics, sound design,
     and interactive media development. Each project is crafted with attention to
     detail and creative innovation.`,
     tags: ['Video', 'Motion Graphics', 'Sound Design']
   }
 ];

 export const digitalOneContent: DetailContent[] = [
   {
     id: 'fis-overview',
     title: 'FIS DigitalOne Platform',
     subtitle: 'Enterprise Financial Solutions',
     description: 'Next-generation banking and financial services platform',
     content: `DigitalOne represents the future of digital banking, offering a
     comprehensive suite of financial services tools and solutions for modern
     institutions.`,
     image: '/images/digitalone/platform.jpg',
     tags: ['FinTech', 'Digital Banking', 'Enterprise']
   },
   {
     id: 'fis-features',
     title: 'Platform Features',
     description: 'Core capabilities and innovations',
     content: `Our platform features include real-time transaction processing,
     advanced security protocols, and intuitive user interfaces designed for both
     customers and financial institutions.`,
     tags: ['Security', 'UX Design', 'Processing']
   }
 ];

 export const zenmonicsContent: DetailContent[] = [
   {
     id: 'zen-overview',
     title: 'Zenmonics Platform',
     subtitle: 'Digital Banking Solutions',
     description: 'Innovative financial technology solutions',
     content: `Zenmonics delivers cutting-edge digital banking solutions that
     transform how financial institutions serve their customers. Our platform
     integrates seamlessly with existing systems while providing modern capabilities.`,
     image: '/images/zenmonics/platform.jpg',
     tags: ['FinTech', 'Integration', 'Banking']
   },
   {
     id: 'zen-features',
     title: 'Key Features',
     description: 'Platform capabilities and technologies',
     content: `Our solution includes advanced account management, real-time
     analytics, and comprehensive customer service tools, all designed to enhance
     the banking experience.`,
     tags: ['Analytics', 'Account Management', 'Customer Service']
   }
 ];