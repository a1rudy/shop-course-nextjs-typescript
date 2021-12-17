import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
  appearance: 'btn_type_primary' | 'btn_type_ghost';
  arrow?: 'btn__arrow_right' | 'btn__arrow_down' | 'none';
}