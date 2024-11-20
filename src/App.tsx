// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/context/theme-provider';
import { GlobalStyles } from '@/styles/GlobalStyles';
import { NavigationWrapper } from '@/components/navigation-wrapper';
import { NavSwitcher } from '@/components/nav-switcher/NavSwitcher';
import { Home } from '@/pages/Home/Home';
import { Services } from '@/pages/Services/Services';
import { About } from '@/pages/About/About';
import { Location } from '@/pages/Location/Location';

export const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <BrowserRouter>
        <NavigationWrapper />
        <NavSwitcher />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/location" element={<Location />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};