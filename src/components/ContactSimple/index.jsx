import React from 'react';

import { Wrapper, Title, A } from './Styled';

const ContactSimple = () => (
  <Wrapper>
    <Title>
      Qualquer dúvida, só falar.
    </Title>

    <A href="tel:+5521976241365">
      Me liga ou chama no whatsapp&nbsp;
      <strong>(21) 999999999</strong>
    </A>
    <br />
    ou
    <br />
    <A href="mailto:raianedelimaserafim@gmail.com">
      me manda um e-mail para&nbsp;
      <strong>email@gmail.com</strong>
      &nbsp; que logo te respondo.
    </A>
  </Wrapper>
);

export default ContactSimple;
