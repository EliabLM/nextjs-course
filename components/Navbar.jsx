import React from 'react';

// Styles
import styles from './Navbar.module.css';

// Components
import { ActiveLink } from './ActiveLink';

const menuItems = [
  { text: 'Home', href: '/' },
  { text: 'About', href: '/about' },
  { text: 'Contact', href: '/contact' },
  { text: 'Pricing', href: '/pricing' },
];

export const Navbar = () => {
  return (
    <nav className={styles['menu-container']}>
      {menuItems.map((item, index) => (
        <ActiveLink key={`key-${index}`} text={item.text} href={item.href} />
      ))}
    </nav>
  );
};
