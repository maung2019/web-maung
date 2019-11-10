import React from "react";
import tw from "tailwind.macro";
import styled from "@emotion/styled";

import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Container = styled.div`
  ${tw`font-sans flex justify-center items-center`}
  position: relative;
`;

const Cont = tw.div`w-4/5 flex mt-16 flex-wrap justify-center lg:p-10 lg:pt-0`;
const InCont = tw.div`w-full flex flex-wrap justify-center lg:flex-no-wrap`;
const HeaderContainer = tw.div`w-full flex justify-center lg:justify-start`;
const MaungText = tw.p`px-10 text-lg my-4 leading-relaxed lg:leading-loose`;
const TextContainer = tw.div`flex flex-wrap font-sans lg:w-full`;
const HeaderText = styled.h2`
  ${tw`font-base text-center text-5xl lg:text-right`}
`;

const ImageContainer = tw.div`w-4/5 flex items-center justify-center flex-wrap lg:w-2/5 lg:mr-20 mb-5 lg:mb-0`;
const ImageContainerMobile = tw(ImageContainer)`lg:hidden`
const ImageContainerLarge = tw(ImageContainer)`hidden lg:flex`
const Image = styled(Img)`
  ${tw`w-full lg:w-4/5`}
`;
const NoteText = tw.p`w-full px-10 text-base my-3 leading-relaxed lg:leading-loose`;

const MaknaLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "maung.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Container>
      <Cont>
        <HeaderContainer>
          <HeaderText>
            makna <b>Logo</b>
          </HeaderText>
        </HeaderContainer>
        <InCont>
          <ImageContainerMobile>
            <Image fluid={data.file.childImageSharp.fluid} />
          </ImageContainerMobile>
          <TextContainer>
            <MaungText>
              <ul>
                <li>
                  <b>warna biru merah:</b>
                  <br></br>
                  melambangkan warna Makara Fasilkom.
                </li>
                <li>
                  <b>harimau:</b>
                  <br></br>
                  kekuatan, keberanian, dan kebijaksanaan.
                </li>
                <li>
                  <b>9 buah taring :</b>
                  <br></br>
                  melambangkan 9 nilai Universitas Indonesia.{" "}
                </li>
                <li>
                  <b>3 buah loreng :</b>
                  <br></br>
                  melambangkan Tridarma perguruan tinggi.
                </li>
              </ul>
            </MaungText>
          </TextContainer>
          <ImageContainerLarge>
            <Image fluid={data.file.childImageSharp.fluid} />
          </ImageContainerLarge>
        </InCont>
        <NoteText>
          * Harimau adalah hewan yang sabar, siap mendengar, dan mampu menerkam
          segala marabahaya yang dihadapi.
        </NoteText>
      </Cont>
    </Container>
  );
};

export default MaknaLogo;
