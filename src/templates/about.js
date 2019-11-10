import React from "react";

import SEO from "../components/seo";
import tw from "tailwind.macro";
import styled from "@emotion/styled";
import Layout from "../components/layout";
import Img from "gatsby-image";

const PersonContainer = styled.div`
  ${tw`font-sans flex justify-center items-center`}
  position: relative;
`;
const Cont = tw.div`w-4/5 flex flex-wrap justify-center my-5 lg:p-10`;
const HeaderContainer = tw.div`w-full flex justify-center`;
const HeaderText = styled.h1`
  ${tw`font-base text-4xl text-center`}
`;

const Cont2 = tw.div`w-4/5 lg:px-20 flex flex-wrap justify-center lg:flex-no-wrap mt-5`;
const TextContainer = tw.div`flex flex-wrap items-center font-sans lg:w-full`;
const ImageContainer = tw.div`w-4/5 h-56 lg:h-full flex flex-wrap items-center justify-center lg:w-2/5 mb-5 lg:mb-0`;
const Image = styled(Img)`
  ${tw`w-full h-full rounded-lg`}
`;
const Table = tw.table`table-auto ml-10`
const LeftColumn = tw.td`text-right font-bold pb-2`
const RightColumn = tw.td`pl-3 pb-2`
const TableRow = tw.tr`mb-6`

const Person = ({ pageContext }) => {
  const {nama, absen, panggilan, prodi, ttl, line, email, ig , sma, interest, harapan} = pageContext;
  return (
    <Layout>
      <SEO title={nama.trim()} />
      <PersonContainer>
        <Cont>
          <HeaderContainer>
            <HeaderText>{nama.trim() + " | " + absen.trim()}</HeaderText>
          </HeaderContainer>
          <Cont2>
            <ImageContainer>
              <Image fluid={pageContext.image.src.childImageSharp.fluid} />
            </ImageContainer>
            <TextContainer>
              <Table>
              <TableRow>
                <LeftColumn>panggilan: </LeftColumn>
                <RightColumn>{panggilan.trim()}</RightColumn>
              </TableRow>
              <TableRow>
                <LeftColumn>prodil: </LeftColumn>
                <RightColumn>{prodi.trim()}</RightColumn>
              </TableRow>
              <TableRow>
                <LeftColumn>ttl: </LeftColumn>
                <RightColumn>{ttl.trim()}</RightColumn>
              </TableRow>
              <TableRow>
                <LeftColumn>asal sma: </LeftColumn>
                <RightColumn>{line.trim()}</RightColumn>
              </TableRow>
              <TableRow>
                <LeftColumn>email: </LeftColumn>
                <RightColumn>{email.trim()}</RightColumn>
              </TableRow>
              <TableRow>
                <LeftColumn>ig: </LeftColumn>
                <RightColumn>{`${ig}`}</RightColumn>
              </TableRow>
              <TableRow>
                <LeftColumn>line: </LeftColumn>
                <RightColumn>{`${sma}`}</RightColumn>
              </TableRow>
              <TableRow>
                <LeftColumn>interest: </LeftColumn>
                <RightColumn>{interest.trim()}</RightColumn>
              </TableRow>
              <TableRow>
                <LeftColumn>harapan: </LeftColumn>
                <RightColumn>{harapan.trim()}</RightColumn>
              </TableRow>
              </Table>
            </TextContainer>
          </Cont2>
        </Cont>
      </PersonContainer>
    </Layout>
  );
};

export default Person;
