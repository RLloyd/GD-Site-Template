// src/hooks/useData.ts
import { useState, useEffect } from 'react';
import siteData from '@/data/siteData.json';

interface Company {
  name: string;
  logo: string;
  navigation: Array<{ name: string; path: string }>;
}

interface Pages {
  home: {
    title: string;
    content: string;
  };
  services: {
    title: string;
    services: Array<{ id: number; name: string; description: string }>;
  };
  about: {
    title: string;
    content: string;
  };
  location: {
    title: string;
    address: string;
    city: string;
    country: string;
  };
}

interface SiteData {
  company: Company;
  pages: Pages;
}

export const useData = () => {
  const [data, setData] = useState<SiteData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, Number(import.meta.env.VITE_API_DELAY) || 1000));
        setData(siteData);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch data'));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};