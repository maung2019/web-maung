import React, { useState } from "react";
import { Link  } from "gatsby";

import tw from "tailwind.macro";
import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Image = styled(Img)`h-12 mr-2`;
const ImageContainer = tw.div`h-12 mr-2 w-full`;
const Nav = tw.nav`flex items-center justify-between flex-wrap p-6 mt-1`;
const LogoContainer = tw.div`flex flex-row-reverse items-end w-40 flex-shrink-0 text-black lg:mr-6`;
const MenuSvg = tw.svg`fill-current h-3 w-3`;
const SmallMenuDiv = tw.div`block lg:hidden`;
const SmallMenuButton = tw.div`flex items-center px-3 py-2 border rounded text-gray border-gray-400 hover:text-black hover:border-black`;
const LinkContainer = styled.div`
  ${tw`text-sm lg:flex-grow`}
  .active {
    ${tw`border-black border-b-2 text-black`}
  }
`;
const TLink = styled(Link)`
  ${tw`hover:text-black leading-tight font-sans font-semibold text-gray-700 block mt-2 lg:inline-block lg:w-auto lg:mt-0 text-black-200 mr-4`}
`;
const LinkDiv = styled.div`
  ${tw`hidden w-full flex-grow lg:flex lg:items-center lg:w-auto`}
`;
const LinkMobileDiv = styled.div`
  ${tw`w-full block mt-5 flex-grow lg:hidden`}
  display: ${props => (props.open ? `flex` : `none`)}
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "maung-nav.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Nav>
      <Link>
        <LogoContainer>
          <ImageContainer>
            <Image fluid={data.file.childImageSharp.fluid} />
          </ImageContainer>
        </LogoContainer>
      </Link>
      <SmallMenuDiv>
        <SmallMenuButton onClick={() => setOpen(!open)}>
          <MenuSvg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </MenuSvg>
        </SmallMenuButton>
      </SmallMenuDiv>
      <LinkDiv>
        <LinkContainer>
          <TLink to="/" activeClassName="active" className="link-large">
            halaman utama
          </TLink>
          <TLink to="/keluarga" activeClassName="active" className="link-large">
            keluarga kami
          </TLink>
          {/* <Link to="/galeri" activeClassName="active" className="link-large">
            galeri foto
          </Link> */}
          {/* <Link to="/bukang" activeClassName="active" className="link-large">
            buku angkatan
          </Link> */}
        </LinkContainer>
      </LinkDiv>
      <LinkMobileDiv open={open}>
        <LinkContainer>
          <TLink to="/" activeClassName="active" className="link-large">
            halaman utama
          </TLink>
          <TLink to="/keluarga" activeClassName="active" className="link-large">
            keluarga kami
          </TLink>
          {/* <Link to="/galeri" activeClassName="active" className="link-large">
            galeri foto
          </Link> */}
          {/* <Link to="/bukang" activeClassName="active" className="link-large">
            buku angkatan
          </Link> */}
        </LinkContainer>
      </LinkMobileDiv>
    </Nav>
  );
};

export default Navbar;
