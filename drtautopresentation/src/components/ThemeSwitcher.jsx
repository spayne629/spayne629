import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';

const ThemeSwitcher = () => {
  const getStoredTheme = () => localStorage.getItem('theme');
  const setStoredTheme = (theme) => localStorage.setItem('theme', theme);

  const getPreferredTheme = () => {
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState(getPreferredTheme());

  useEffect(() => {
    const storedTheme = getStoredTheme();
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme(getPreferredTheme());
    }
  }, []);

  useEffect(() => {
    setThemeAttribute(theme);
    showActiveTheme(theme);
  }, [theme]);

  const setThemeAttribute = (theme) => {
    if (theme === 'auto') {
      document.documentElement.setAttribute('data-bs-theme', window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme);
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setStoredTheme(newTheme);
    setTheme(newTheme);
  };

  const showActiveTheme = (theme) => {
    const themeSwitcher = document.querySelector('#bd-theme');
    if (!themeSwitcher) return;

    const themeSwitcherText = document.querySelector('#bd-theme-text');
    const activeThemeIcon = document.querySelector('theme-icon-active use');
    const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`);
    const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href');

    document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
      element.classList.remove('active');
      element.setAttribute('aria-pressed', false);
    });

    btnToActive.classList.add('active');
    btnToActive.setAttribute('aria-pressed', 'true');
    activeThemeIcon.setAttribute('href', svgOfActiveBtn);
    const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`;
    themeSwitcher.setAttribute('aria-label', themeSwitcherLabel);
  };

  return (
    <Nav className="me-2 align-text-bottom justify-content-center">
      <i className="bi bi-sun me-2" />
      <Form.Check
        type="switch"
        id="custom-switch"
        className="theme-switch"
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />
      <i className="bi bi-moon-stars" />
    </Nav>
  );
};

export default ThemeSwitcher;