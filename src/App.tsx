import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';

function App() {
  const [theme, setTheme] = useState<string | null>('');

  const setInitialTheme = () => {
    const root = document.querySelector(':root');
    root?.setAttribute(
      'color-scheme',
      `${
        localStorage.getItem('app-theme')
          ? localStorage.getItem('app-theme')
          : theme
      }`
    );
  };

  useEffect(() => {
    if (localStorage.getItem('app-theme')) {
      setTheme(localStorage.getItem('app-theme'));
    } else {
      const currentTheme = window.matchMedia('(prefers-color-scheme: light)')
        .matches
        ? 'light'
        : 'dark';
      localStorage.setItem('app-theme', currentTheme);
      setTheme(currentTheme);
    }
  }, []);

  useEffect(() => {
    if (theme) {
      setInitialTheme();
    }
  }, [theme]);

  return (
    <div className="App">
      <Navigation />
      <Home />
    </div>
  );
}

export default App;
