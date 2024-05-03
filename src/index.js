import React from 'react';
import { createRoot } from 'react-dom/client';

function HomePage() {
  return <p>This is Homepage</p>;
}

function AboutPage() {
  return <p>This is About page</p>;
}

function FAQPage() {
  return <p>This is FAQ page</p>;
}

function App() {
  return <p>Hello, World!</p>;
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
