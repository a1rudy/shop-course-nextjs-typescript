/* eslint-disable @typescript-eslint/semi */
import React from 'react';
import { ButtonProps } from './Button.props';
import cn from 'classnames';
import ArrowIcon from './arrow.svg'

export const Button = ({ appearance, arrow = 'none', children, className, ...props }: ButtonProps): JSX.Element => {
  return (
    <button className={cn('btn', className, {
      'btn_type_primary': appearance == 'btn_type_primary',
      'btn_type_ghost': appearance == 'btn_type_ghost',
    })}
      {...props}
    >
      {children}
      {arrow !== 'none' && <span className={cn('btn__arrow', { 'btn__arrow_down': arrow == 'btn__arrow_down' })}>
        <ArrowIcon />
      </span>}
    </button>
  );
};

