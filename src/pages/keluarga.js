import React, { useState } from "react";

import { debounce, throttle } from "throttle-debounce";

import SEO from "../components/seo";
import tw from "tailwind.macro";
import styled from "@emotion/styled";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

const Image = styled(Img)`
  ${tw`w-full h-full rounded-lg`}
`;

const KeluargaContainer = styled.div`
  ${tw`font-sans flex justify-center items-center flex-wrap`}
  position: relative;
`;
const Cont = tw.div`w-11/12 flex flex-wrap justify-center lg:p-5`;
const HeaderContainer = tw.div`w-full flex justify-center`;
const MaungText = tw.p`px-10 text-lg my-4 leading-loose`;
const HeaderText = styled.h2`
  ${tw`font-base text-5xl text-center lg:text-right`}
`;

const PhotoContainer = tw.div`w-1/2 lg:w-1/6 flex flex-wrap justify-center my-5`;

const StyledLink = tw(Link)`flex justify-center`;

const SearchContainer = tw.div`flex w-full px-10 flex-wrap justify-center lg:justify-between items-center`;
const OptionContainer = tw.div`flex justify-center`;
const SearchInput = tw.input`bg-gray-300 mb-4 lg:mb-0 focus:outline-none focus:shadow-outline border border-gray-300 rounded-full py-2 px-4 block w-3/4 lg:w-3/12 appearance-none leading-normal`;

const KelompokSelector = tw.span`text-gray-700 mx-1 hover:text-black hover:cursor-pointer`;

const Keluarga = ({ data }) => {
  const [search, setSearch] = useState("");
  const nodeList = data.allDataJson.edges;
  const sorted = [...nodeList].sort(({node}) => node.image.src.name.includes("default") ? 1 : -1);
  return (
    <Layout>
      <SEO title="Keluarga Kami" />
      <KeluargaContainer>
        <Cont>
          <HeaderContainer>
            <HeaderText>
              keluarga <b>maung 2019</b>
            </HeaderText>
          </HeaderContainer>
          <SearchContainer>
            <SearchInput
              onChange={e =>
                debounce(
                  500,
                  throttle(500, setSearch(e.target.value.toLowerCase()))
                )
              }
              placeholder="Search(Absen, Nama, Panggilan)"
            />
            <OptionContainer>
              <KelompokSelector>ALL</KelompokSelector>
              <KelompokSelector>IK</KelompokSelector>
              <KelompokSelector>SI</KelompokSelector>
              <KelompokSelector>KR</KelompokSelector>
              <KelompokSelector>FR</KelompokSelector>
              <KelompokSelector>MY</KelompokSelector>
              <KelompokSelector>MX</KelompokSelector>
              <KelompokSelector>ID</KelompokSelector>
              <KelompokSelector>TH</KelompokSelector>
              <KelompokSelector>CN</KelompokSelector>
              <KelompokSelector>AU</KelompokSelector>
              <KelompokSelector>JP</KelompokSelector>
            </OptionContainer>
          </SearchContainer>
        </Cont>
      </KeluargaContainer>
      <KeluargaContainer>
        <Cont>
          {
            sorted.filter(
              ({ node }) =>
                node.nama.toLowerCase().includes(search) ||
                node.absen.toLowerCase().includes(search) ||
                node.panggilan.toLowerCase().includes(search)
            )
            .map(({ node }) => {
              return (
                <PhotoContainer>
                  <StyledLink
                    to={`${node.email.split("@")[0]}`}
                  >
                    <Image fixed={node.image.src.childImageSharp.fixed} />
                    <br></br>
                  </StyledLink>
                  <MaungText>
                    {node.panggilan.replace(/\s+|[,\/]/g, "-").split("-")[0]}
                  </MaungText>
                </PhotoContainer>
              );
            })}
        </Cont>
      </KeluargaContainer>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    allDataJson {
      edges {
        node {
          nama
          absen
          panggilan
          email
          prodi
          image {
            src {
              name
              childImageSharp {
                fixed(height: 150, width: 150, cropFocus: NORTH) {
                  base64
                  width
                  height
                  src
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Keluarga;
