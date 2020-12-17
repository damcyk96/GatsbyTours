import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import img from "../../images/defaultBcg.jpeg"

const About = () => {
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <img src={img} alt="about" />
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
            Laboris consequat eiusmod tempor nulla ut. Incididunt sit ea ea
            officia in dolor reprehenderit amet. Labore proident consequat nulla
            non consectetur eiusmod esse ex eiusmod cupidatat sunt ex. Cillum
            incididunt consequat consectetur.
          </p>
          <button type="button" className="btn-primary">
            Read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
