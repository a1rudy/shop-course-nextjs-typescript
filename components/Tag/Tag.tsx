import React from 'react';
import cn from 'classnames';
import { TagProps } from './Tag.props';

export const Tag = ({ size = 'tag_size_s', children, color = 'tag_color_ghost', href, className, ...props }: TagProps): JSX.Element => {
	return (
		<div
			className={cn('tag', className, {
				'tag_size_s': size == 'tag_size_s',
				'tag_size_m': size == 'tag_size_m',
				'tag_color_ghost': color == 'tag_color_ghost',
				'tag_color_red': color == 'tag_color_red',
				'tag_color_grey': color == 'tag_color_grey',
				'tag_color_green': color == 'tag_color_green',
				'tag_color_primary': color == 'tag_color_primary',
			})}
			{...props}
		>
			{
				href
					? <a href={href}>{children}</a>
					: <>{children}</>
			}
		</div>
	);
}; 
