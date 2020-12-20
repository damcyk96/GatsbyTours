import React from "react"
import Tour from "../Tours/Tour"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../../css/items.module.css"
import AniLink from "gatsby-plugin-transition-link"
import Title from "../Title"

const getTours = graphql`
  query {
    featured: allContentfulTour(filter: { featured: { eq: true } }) {
      edges {
        node {
          name
          price
          slug
          country
          contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const FeaturedTours = () => {
  const response = useStaticQuery(getTours)
  const tours = response.featured.edges

  return (
    <section className={styles.tours}>
      <Title title="featured" subtitle="tours" />
      <div className={styles.center}>
        {tours.map(({}) => {
          return <Tour key={node.contentful_id} tour={node} />
        })}
      </div>
      <Tour />
      <AniLink fade to="/tours" className="btn-primary">
        All tours
      </AniLink>
    </section>
  )
}

export default FeaturedTours
