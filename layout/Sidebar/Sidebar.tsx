import React from 'react';
import cn from 'classnames';
import { SidebarProps } from './Sidebar.props';
import { Menu } from '../Menu/Menu';
import Logo from '../logo.svg';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={cn(className, 'sidebar')} {...props}>
      <Logo className='logo' />
      <div>поиск</div>
      <Menu />
    </div>
  );
};
