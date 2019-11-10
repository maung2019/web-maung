import React from "react";
import tw from "tailwind.macro";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import styled from "@emotion/styled";

import MaungButton from "../maungbutton";

const SambutanContainer = styled.div`
  ${tw`flex justify-center items-center`}
`;
const Cont = tw.div`w-4/5 flex flex-wrap justify-center lg:flex-no-wrap my-20 mb-10`;
const TextContainer = tw.div`flex flex-wrap items-center font-sans lg:w-full`;
const HeadingText = tw.span`block text-3xl w-full`;
const ImageContainer = tw.div`w-4/5 flex items-center justify-center flex-wrap lg:w-2/5 lg:mr-20 mb-5 lg:mb-0`;
const Image = styled(Img)`
  ${tw`w-full lg:w-4/5`}
`;

const Caption = tw.p`hidden lg:block text-center text-lg my-4 leading-relaxed`
const MaungText = tw.p`text-lg my-4 leading-relaxed`;

const SambutanKetang = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "rasyid-circle.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <SambutanContainer>
      <Cont>
        <ImageContainer>
          <Image fluid={data.file.childImageSharp.fluid} />
          <Caption>Rasyid Miftahul Ihsan<br></br><b>Ketua Angkatan Maung 2019</b></Caption>
        </ImageContainer>
        <TextContainer>
          <HeadingText>
            Dari <b>ketua angkatan</b> untuk <b>maung</b>
          </HeadingText>
          <MaungText>
            Kepada Maung 2019, mulai saat ini kita akan bersama-sama bertualang,
            menjelajahi, dan mengembara di hutan ilmu pengetahuan sebagai satu
            angkatan yang solid Maung 2019. Akan ada banyak kepanitiaan,
            organisasi, lomba-lomba, dan kegiatan lainnya yang dapat kita
            jelajahi sehingga kita bisa menjadikan diri kita lebih baik dari
            sebelumnya.
          </MaungText>
          <Link to="/sambutan"><MaungButton>baca selengkapnya</MaungButton></Link>
        </TextContainer>
      </Cont>
    </SambutanContainer>
  );
};

export default SambutanKetang;
