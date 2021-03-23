import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { AiOutlineLinkedin } from 'react-icons/ai';

const SocialIcons = styled.div`
  color: #fff;
  margin-right: 48px;
  a {
    margin-right: 24px;
  }
  svg {
    width: 20px;
    height: 20px;
  }
`;

const Socials = () => {
  return (
    <SocialIcons>
      <a
        aria-label="Facebook"
        href="https://www.facebook.com/bcorp.poland"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookF />
      </a>

      <a
        aria-label="Instagram"
        href="https://www.instagram.com/bcorp.pl/"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram />
      </a>

      <a
        aria-label="LinkedIn"
        href="https://www.linkedin.com/company/better./"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineLinkedin />
      </a>
    </SocialIcons>
  );
};

export default Socials;
