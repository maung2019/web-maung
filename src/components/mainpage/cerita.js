import React from "react";
import tw from "tailwind.macro";
import styled from "@emotion/styled";

import MaungButton from "../maungbutton";
import { Link } from "gatsby";

const Container = styled.div`
  ${tw`font-sans flex justify-center items-center`}
  position: relative;
`;

const Cont = tw.div`w-4/5 flex flex-wrap justify-center lg:p-10 lg:pt-0`;
const HeaderContainer = tw.div`w-full flex justify-center lg:justify-end`;
const MaungText = tw.p`px-10 text-lg my-4 leading-relaxed lg:leading-loose`;

const HeaderText = styled.h2`
  ${tw`font-base text-5xl text-right`}
`;

const Cerita = () => {
  return (
    <Container>
      <Cont>
        <HeaderContainer>
          <HeaderText>
            <b>cerita</b> kami
          </HeaderText>
        </HeaderContainer>
        <MaungText>
          "Rasanya masih seperti mimpi, ketika akhirnya masing-masing dari kita
          menerima kabar yang amat menggembirakan. Sangat membanggakan. Begitu
          mengharukan. Bahwa kita, kini, diterima sebagai mahasiswa Universitas
          Indonesia. Lebih dari itu, kita diterima di Fakultas Ilmu Komputer
          Universitas Indonesia (Fasilkom UI). Sebuah fakultas yang membawa misi
          besar memperkenalkan kekuatan teknologi informasi. Sebuah fakultas,
          yang kini makin kita kagumi, karena ternyata fakultas inilah yang
          menjadi pionir dan salah satu penggerak terdepan perjalanan ilmu
          komputer di Indonesia."
        </MaungText>
        <Link to="/cerita"><MaungButton>baca selengkapnya</MaungButton></Link>
      </Cont>
    </Container>
  );
};

export default Cerita;
