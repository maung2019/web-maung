import React from "react";

import SEO from "../components/seo";
import tw from "tailwind.macro";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "@emotion/styled";
import Layout from "../components/layout";

const SambutanContainer = styled.div`
  ${tw`flex justify-center items-center font-sans`}
`;
const Cont = tw.div`w-4/5 lg:px-16 flex flex-wrap justify-center lg:flex-no-wrap mt-10`;
const Cont2 = tw.div`w-4/5 lg:px-20 flex flex-wrap justify-center lg:flex-no-wrap mt-5`;
const TextContainer = tw.div`flex flex-wrap items-center font-sans lg:w-full`;
const HeadingText = tw.span`block text-3xl w-full`;
const ImageContainer = tw.div`w-4/5 flex flex-wrap items-center justify-center lg:w-2/5 lg:mr-20 mb-5 lg:mb-0`;
const Image = styled(Img)`
  ${tw`w-full lg:w-4/5`}
`;
const Caption = tw.p`hidden lg:block text-center text-lg my-4 leading-relaxed`
const MaungText = tw.p`text-lg my-2 leading-relaxed`;

const Sambutan = () => {
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
    <Layout>
      <SEO title="Sambutan" />
      <SambutanContainer>
        <Cont>
          <ImageContainer>
            <Image fluid={data.file.childImageSharp.fluid} />
            <Caption>Rasyid Miftahul Ihsan<br></br><b>Ketua Angkatan Maung</b></Caption>
          </ImageContainer>
          <TextContainer>
            <HeadingText>
              Dari <b>ketua angkatan</b> untuk <b>maung</b>
            </HeadingText>
            <MaungText>Assalamu'alaykum Warahmatullahi Wabarakatuh</MaungText>
            <MaungText>
              Puji syukur kita panjatkan ke hadirat Tuhan Yang Maha Esa karena
              berkatNya lah kita semua bisa lulus di universitas terbaik negeri
              ini, Universitas Indonesia.
            </MaungText>
          </TextContainer>
        </Cont>
      </SambutanContainer>
      <SambutanContainer>
        <Cont2>
          <TextContainer>
            <MaungText>
              Tak hanya itu, kita juga patut bersyukur karena kita telah
              diberikan kesempatan untuk menimba ilmu di fakultas yang memimpin
              garda terdepan di negeri ini dalam hal perkembangan teknologi,
              yaitu Fakultas Ilmu Komputer Universitas Indonesia.
            </MaungText>
            <MaungText>
              Saya ingin mengucapkan terima kasih kepada tim website angkatan
              yang telah bekerja keras untuk dapat merealisasikan website ini.
            </MaungText>
            <MaungText>
              Kepada Maung 2019, mulai saat ini kita akan bersama-sama
              bertualang, menjelajahi, dan mengembara di hutan ilmu pengetahuan
              sebagai satu angkatan yang solid Maung 2019. Akan ada banyak
              kepanitiaan, organisasi, lomba-lomba, dan kegiatan lainnya yang
              dapat kita jelajahi sehingga kita bisa menjadikan diri kita lebih
              baik dari sebelumnya.
            </MaungText>
            <MaungText>
              Setiap insan diciptakan berbeda-beda dan kita sebagai satu
              angkatan harus bisa menyatukan semua perbedaan itu sehingga
              bersama-sama kita dapat memberikan manfaat tidak hanya untuk
              kampus ini, tapi juga negeri ini.
            </MaungText>
            <MaungText>
              Semoga Maung 2019 dapat terus menjadi angkatan yang solid, peduli,
              dan berprestasi.
            </MaungText>
            <MaungText>
              Akhir kata, jadilah seperti Maung yang tak pernah kenal sangsi
              dengan rintangan yang dihadapi. Jadilah seperti Maung yang meraung
              keras ketika kejahatan negeri ini sudah terlewat batas!
            </MaungText>
            <MaungText>Maung 2019!</MaungText>
          </TextContainer>
        </Cont2>
      </SambutanContainer>
    </Layout>
  );
};

export default Sambutan;
