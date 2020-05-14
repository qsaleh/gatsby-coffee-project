import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from '../components/global/BackgroundSection'
import Info from '../components/Home/info'
import Products from '../components/Home/Products'
import Menu from '../components/Home/Menu'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection 
    img={data.img.childImageSharp.fluid} title="regular joe's" styleClass="default-background" 
    />
    <Info />
    <Menu items={data.menu} />
    <Products />
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq: "default-background.jpeg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }

  menu:allContentfulCoffeeItem {
    edges {
      node {
        id
        title
        price
        description {
          description
        }
        category
        image {
          fixed(width:50, height:50){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}`

export default IndexPage;
