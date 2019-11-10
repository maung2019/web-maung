import React from "react";
import tw from "tailwind.macro";
import styled from "@emotion/styled";

import SEO from "../seo";
import HeaderTextSVG from "../../images/header-text.inline.svg";
import HeaderTextMobileSVG from "../../images/header-text-mobile.inline.svg";
import ArrowSVG from "../../images/arrow.inline.svg";
import Navbar from "../navbar";

const HeaderTextDiv = tw.div`flex justify-center`;

const Arrow = styled(ArrowSVG)`
  ${tw`h-10 mx-auto`}
  -moz-animation: bounce 2s infinite;
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
`;

const HeaderTextMobile = styled(HeaderTextMobileSVG)`
  ${tw`w-full p-4 lg:hidden`}
`;

const HeaderText = styled(HeaderTextSVG)`
  ${tw`hidden lg:block w-4/5`}
`;

const HeaderContainer = tw.div`h-screen`;

const Header = () => (
  <HeaderContainer>
    <Navbar />
    <SEO title="Halaman Utama" />
    <HeaderTextDiv>
      <HeaderText />
      <HeaderTextMobile />
    </HeaderTextDiv>
    <Arrow />
  </HeaderContainer>
);

export default Header;
