/// <reference types="astro/client" />

interface Window {
  Prism: {
    highlight: (code: string, grammar: any, language: string) => string;
    languages: {
      [key: string]: any;
    };
    highlightAll: () => void;
  };
} 