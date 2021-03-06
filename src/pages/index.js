import React from "react";
import Cover from "../components/cover";
import AboutMe from "../components/about-me";
import Projects from "../components/projects";
import ScrollTop from "../components/scroll-top";
import Footer from "../components/footer";

import { Helmet } from "react-helmet";
import favicon from "../images/favicon.ico";

import "../styles/main.scss";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faCoffee);

const IndexPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const metaDescr = data.site.siteMetadata.description;
  const { edges: projectImgData } = data.ProjectImgs;

  return (
    <div className="dev-landing-page">
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={metaDescr} />
        <link rel="icon" type="/image/png" href={favicon} />
      </Helmet>
        <Cover />
        <AboutMe />
        <Projects projectImgs={projectImgData} />
        <ScrollTop />
        <Footer />
    </div>
  );
};
export default IndexPage

export const query = graphql`
  query allImgsQuery {
    site {
      siteMetadata {
        title
        description
      }
    }


    ProjectImgs: allFile(
      filter: { relativePath: { regex: "/projects/.*.jpg/" } }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            sizes(maxWidth: 480) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }

     

  }
`;
