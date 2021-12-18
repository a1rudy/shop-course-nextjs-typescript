import React from "react";
import { Button, Htag, P, Rating, Tag } from "../components";
export default function Home() {

  const [rating, setRating] = React.useState<number>(0);

  return (
    <>
      <Htag tag='h1'>Текст</Htag>
      <Htag tag='h2'>Текст</Htag>
      <Htag tag='h3'>Текст</Htag>
      <Button appearance='btn_type_primary' arrow="btn__arrow_right">Кнопка</Button>
      <Button appearance='btn_type_ghost' arrow="btn__arrow_down">Кнопка</Button>
      <P fontSize="p_size_s">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ea.</P>
      <P fontSize="p_size_m">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ea.</P>
      <P fontSize="p_size_l">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ea.</P>
      <Tag size='tag_size_s'>Ghost</Tag>
			<Tag size='tag_size_m' color='tag_color_red'>Red</Tag>
			<Tag size='tag_size_s' color='tag_color_green'>Green</Tag>
			<Tag color='tag_color_primary'>Primary</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}
