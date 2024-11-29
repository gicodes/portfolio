import { LinkedIn, Twitter, GitHub, Email } from '@mui/icons-material';
import React from 'react';

export const initEmail = () => {
  if (typeof window !== 'undefined') {
    window.location.href = 'mailto:gicodes9@gmail.com';
  }
};

export const socials = [
  {
    name: 'LinkedIn',
    icon: React.createElement(LinkedIn),
    link: 'https://linkedin.com/in/gideon-iduma-5311445a',
  },
  {
    name: 'Twitter',
    icon: React.createElement(Twitter),
    link: 'https://twitter.com/pappichino',
  },
  {
    name: 'Github',
    icon: React.createElement(GitHub),
    link: 'https://github.com/gicodes',
  },
  {
    name: 'Email',
    icon: React.createElement(Email),
    link: initEmail()
  },
];
