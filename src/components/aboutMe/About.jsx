import React from "react";
import styles from "./About.module.css";
import mainStyles from "../../styles/main.module.css";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={mainStyles.container}>
        <div className={styles.about__text}>
          <h2>About me</h2>
          <p>
            Hi, I'm Denis – a UX/UI designer from Minsk. I'm interested in design and everything connected with it.
          </p>
          <p>
            I'm studying at IT-Academy, focusing on "Web and mobile design interfaces" courses.
          </p>
          <p>
            I'm ready to collaborate on excellent projects with wonderful people.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;