import React from 'react';
import cn from 'classnames';
import { FooterProps } from './Footer.props';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, 'footer__container')} {...props}>
      <p>OwlTop &copy; 2020 - {new Date().getFullYear()} Все права защищены</p>
      <a href='#' target='_blank'>Пользовательское соглашение</a>
      <a href='#' target='_blank'>Политика конфиденциальности</a>
    </footer>
  );
};
