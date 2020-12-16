import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"

export default () => (
  <Layout>
    <SimpleHero>
      <Banner title="continue exploring" info="lorem ipsum dolor sit amet">
        <Link className="btn-white" to="/tours">
          explore tours
        </Link>
      </Banner>
    </SimpleHero>
  </Layout>
)
