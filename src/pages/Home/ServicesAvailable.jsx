import React from 'react';

import {
  ServiceListItem,
  ServiceArticle,
  ServiceHeader,
  ServiceTitle,
  ServiceText,
  ServiceList,
  iconResizer,
} from './Styled';

import WeddingCakeSvg from 'images/wedding-cake.svg';
import WeddingDateSvg from 'images/wedding-date.svg';
import WeddingRingSvg from 'images/wedding-rings.svg';

const services = [
  {
    icon: iconResizer(WeddingCakeSvg),
    title: 'Aniversário de 15 anos',
    text: 'Relembrar é viver, então tenha em mãos suas memórias com as cores mais vivas quanto as daquele momento.',
  },
  {
    icon: iconResizer(WeddingDateSvg),
    title: 'Recém Nascido',
    text: 'Grave a imagem do seu melequento enquanto ainda tá bonitinho.',
  },
  {
    icon: iconResizer(WeddingRingSvg),
    title: 'Casamentos',
    text: 'Fotografo esse momento mágico e memorável, antes que se arrependam.',
  },
];

export const Service = ({ icon: Icon, title, text }) => (
  <ServiceListItem>
    <ServiceArticle>

      <ServiceHeader>
        <Icon />
        <ServiceTitle>{title}</ServiceTitle>
      </ServiceHeader>

      <ServiceText>
        {text}
      </ServiceText>

    </ServiceArticle>
  </ServiceListItem>
);

const ServicesAvailable = () => (
  <ServiceList>
    {
      services.map(({ icon, title, text }) => (
        <Service icon={icon} title={title} text={text} key={title} />
      ))
    }
  </ServiceList>
);

export default ServicesAvailable;
