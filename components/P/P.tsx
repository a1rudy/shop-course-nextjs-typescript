import React from 'react';
import cn from 'classnames';
import { Pprops } from './P.props';

export const P = ({ fontSize = 'p_size_m', children, className, ...props }: Pprops): JSX.Element => {
  return (
    <p className={cn('p', className, {
      'p_size_s': fontSize == 'p_size_s',
      'p_size_m': fontSize == 'p_size_m',
      'p_size_l': fontSize == 'p_size_l',
    })}
      {...props}
    >
      {children}
    </p>
  );
};
