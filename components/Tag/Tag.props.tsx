import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  size?: 'tag_size_s' | 'tag_size_m' ;
  color?: 'tag_color_ghost' | 'tag_color_red' | 'tag_color_grey' | 'tag_color_green' | 'tag_color_primary';
  href?: string;
}