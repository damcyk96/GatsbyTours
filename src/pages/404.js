import React from "react"
import Layout from "../components/Layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Banner from "../components/Banner"
import styles from "../css/error.module.css"

const error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="ops it's a dead end">
          <AniLink fade to="/" className="btn-white">
            Back to home page
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}

export default error
