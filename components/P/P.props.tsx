import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface Pprops extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  children: ReactNode;
  fontSize?: 'p_size_s' | 'p_size_m' | 'p_size_l';
}