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
const Cont = tw.div`w-4/5 flex flex-wrap justify-center lg:p-5`;
const HeaderContainer = tw.div`w-full flex justify-center`;
const MaungText = tw.p`px-10 text-lg my-4 leading-loose`;
const HeaderText = styled.h2`
  ${tw`font-base text-5xl text-center lg:text-right`}
`;

const PhotoContainer = tw.div`w-1/2 lg:w-1/6 flex flex-wrap justify-center my-5`;

const StyledLink = tw(Link)`flex justify-center`;

const SearchInput = tw.input`mt-10 bg-gray-300 focus:outline-none focus:shadow-outline border border-gray-300 rounded-full py-2 px-4 block w-3/4 lg:w-3/12 appearance-none leading-normal`;

const Keluarga = ({ data }) => {
  const [search, setSearch] = useState("")

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
          <SearchInput onChange={(e) => debounce(500, throttle(500, setSearch(e.target.value.toLowerCase())))} placeholder="Search"/>
        </Cont>
      </KeluargaContainer>
      <KeluargaContainer>
        <Cont>
          {data.allDataJson.edges.filter(({node}) => node.nama.toLowerCase().includes(search) || node.absen.toLowerCase().includes(search) || node.panggilan.toLowerCase().includes(search)).map(({ node }) => {
            return (
              <PhotoContainer>
                <StyledLink
                  to={`${node.panggilan
                    .trim()
                    .toLowerCase()}-${node.absen.trim().toLowerCase()}`}
                >
                  <Image fixed={node.image.src.childImageSharp.fixed} /><br></br>
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
          prodi
          image {
            src {
              childImageSharp {
                fixed(height: 100, width: 100) {
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
