import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Socials from './socials';

const Wrapper = styled.div`
  min-height: 92vh;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
`;

const StyledWrapper = styled.div`
  background-color: #2e3049;
  div {
    display: flex;
    flex-direction: row;
    height: 46px;
    justify-content: space-between;
    align-items: center;
  }
`;

const LinkSection = styled.section`
  color: #fff;
  margin-left: 48px;
  a {
    margin-left: 24px;
  }
`;

const StyledLogo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Nav = styled.nav``;

const Footer = styled.footer`
  background-color: #2e3049;
  div: {
    display: flex;
    flex-direction: column;
  }
`;

const Copy = styled.div`
  margin-top: 24px;
  margin-left: 72px;
  padding-bottom: 8px;
  color: white;
`;

const Layout = ({ children, ...props }) => {
  return (
    <Wrapper>
      <Header>
        <StyledWrapper>
          <div>
            <LinkSection>
              <a href="http://b-better.pl/" target="_blank" rel="noreferrer">
                Better
              </a>
              <Link to="/about">O nas</Link>
              <Link to="/kontakt">Kontakt</Link>
            </LinkSection>
            <Socials />
          </div>
        </StyledWrapper>
        <StyledLogo>
          <StaticImage
            src="../images/logo.png"
            placeholder="blurred"
            alt="logo"
            width={420}
          />
        </StyledLogo>
        <Nav></Nav>
      </Header>
      <div>
        <main>{children}</main>
      </div>
      <Footer>
        <StyledWrapper>
          <div>
            <LinkSection>
              <a href="http://b-better.pl/" target="_blank" rel="noreferrer">
                Better
              </a>
              <Link to="/about">O nas</Link>
              <Link to="/kontakt">Kontakt</Link>
              <Link to="/newsletter">Newsletter</Link>
              <Link to="/kontakt">Kontakt</Link>
              <Link to="/rodo">RODO</Link>
            </LinkSection>
            <Socials />
          </div>
        </StyledWrapper>
        <Copy>
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://github.com/daniello110">Daniel</a>
        </Copy>
      </Footer>
    </Wrapper>
  );
};

export default Layout;
