import React from "react"
import Image from "gatsby"
import styles from "../../css/tour.module.css"
import { FaMap } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Tour = ({ tour }) => {
  const { name, price, country, days, slug, images } = tour
  let mainImage = images[0].fluid

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainter}>
        <Image fluid={mainImage} className={styles.img} alt="single tour" />
      </div>
    </article>
  )
}

export default Tour
