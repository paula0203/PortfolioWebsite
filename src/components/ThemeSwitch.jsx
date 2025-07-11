import React, { useState, useEffect } from 'react';
import './ThemeSwitch.css';

const ThemeSwitch = () => {
  const [checked, setChecked] = useState(document.body.getAttribute('data-theme') === 'light');

  useEffect(() => {
    document.body.setAttribute('data-theme', checked ? 'light' : 'dark');
  }, [checked]);

  return (
    <span className="switch">
      <input
        className="switch__input"
        type="checkbox"
        id="theme-switch"
        checked={checked}
        onChange={() => setChecked(v => !v)}
        aria-label="Switch theme"
      />
      <label className="switch__label" htmlFor="theme-switch">
        <span className="switch__indicator" />
        <span className="switch__decoration" />
      </label>
    </span>
  );
};

export default ThemeSwitch;