import React from 'react';

import {
  ServiceListItem,
  ServiceArticle,
  ServiceHeader,
  ServiceTitle,
  ServiceText,
} from './Styled';

const Service = ({ icon: Icon, title, text }) => (
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

export default Service;
