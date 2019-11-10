import React from "react";
import tw from "tailwind.macro";
import styled from "@emotion/styled";

import XSVG from "../../images/x.inline.svg";

const X = styled(XSVG)`
  ${tw`w-20`}
  position: absolute;
  top: 30%;
  left: 80%;
`

const Container = styled.div`
  ${tw`font-sans flex justify-center items-center`}
  position: relative;
`;

const Cont = tw.div`w-4/5 flex flex-wrap justify-center my-10 lg:p-10 mb-0 pb-0 lg:pb-0`;
const MaungText = tw.p`px-10 text-xl my-4 leading-loose`;
const VisiText =  tw.p`text-2xl my-4 px-10`
const InsideContainer = tw.div`w-full my-6`;

const HeaderText = styled.h2`
  ${tw`font-semibold text-5xl`}
  text-shadow: .2rem .2rem 1px #CBCBCB
`;

const VisiMisi = () => {
  return (
    <Container>
      <Cont>
        <InsideContainer>
          <HeaderText style={{ color: "#2971B8" }}>Visi</HeaderText>
          <VisiText>
            “Terwujudnya Fasilkom UI angkatan 2019 yang solid, peduli, dan
            berprestasi.”
          </VisiText>
        </InsideContainer>
        <X/>
        <InsideContainer>
          <HeaderText style={{ color: "#EF4141" }}>Misi</HeaderText>
          <MaungText>
            <ol>
              <li>
                1. Melaksanakan budaya{" "}
                <b>5S (Senyum, Sapa, Salam, Sopan, Santun)</b> kepada semua
                elemen di Fasilkom dengan penuh kesadaran.
              </li>
              <li>
                2. <b>Merangkul semua elemen</b> di Fasilkom.
              </li>
              <li>
                3. <b>Mendukung kelangsungan akademik</b> di Fasilkom UI 2019.
              </li>
              <li>
                4. <b>Meminimalisir tingkat drop out</b> Fasilkom UI 2019.
              </li>
            </ol>
          </MaungText>
        </InsideContainer>
      </Cont>
    </Container>
  );
};

export default VisiMisi;
