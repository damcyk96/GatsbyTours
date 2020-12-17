import React from "react"
import styles from "../../css/services.module.css"
import services from "../../constants/services"
import Title from "../Title"

const Services = () => {
  return (
    <section className={styles.services}>
      <Title title="our" subtitle="services" />
      {services.map((item, index) => {
        return (
          <article key={index} className={styles.service}>
            <span>{item.icon}</span>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </article>
        )
      })}
    </section>
  )
}

export default Services
