import React from "react"
import styled from "styled-components"
import Img from 'gatsby-image';
import { StaticQuery, graphql } from "gatsby";

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Title from "../components/title/title"

const BackgContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const BodyDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ImgDiv = styled.div`
  min-height: 300px;
  min-width: 300px;
`;

const IndexPage = () => (
  <StaticQuery query={graphql`
    query IndexHeroQuery {
        backg: file(relativePath: { eq: "brick-wall.jpg" }) {
          childImageSharp {
            sizes (maxWidth: 800, maxHeight: 600) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="Home" keywords={[`design`, `webdesign`, `logo`, `logotipo`]} />
        <BackgContainer>
          <Img style={{ height: '100vh' }} sizes={data.backg.childImageSharp.sizes} />
        </BackgContainer>
        <BodyDiv>
          <ImgDiv>
            <Image />
          </ImgDiv>
          <ImgDiv>
            <Title as="h2" size="medium">
              Em breve mais informações!
            </Title>

          </ImgDiv>
        </BodyDiv>
      </Layout>
    )}
  />
);

export default IndexPage
