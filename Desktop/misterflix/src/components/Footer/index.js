import React from 'react';
import { FooterBase } from './styles';
import MisterLogo from '../../assets/img/MisterLogo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src={MisterLogo} alt="Logo Alura" width="130" />
      </a>
      <p>
          This is a project created in React immersion 
        {' '}
        {/* <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a> */}
      </p>
    </FooterBase>
  );
}

export default Footer;
