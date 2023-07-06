import styles from './Portfolio.module.css';
import mainStyles from '../styles/main.module.css';

import img1 from '../img/img1.png';
import img2 from '../img/reebok_web.png';
import img3 from '../img/braun.png';

const portfolioItems = [
  {
    imageUrl: img1,
    altText: 'img1',
    description: 'Online fashion store - Homepage',
  },
  {
    imageUrl: img2,
    altText: 'img2',
    description: 'Reebok Store - Concept',
  },
  {
    imageUrl: img3,
    altText: 'img3',
    description: 'Braun Landing Page - Concept',
  },
];

const Portfolio = () => (
  <section className={styles.portfolio}>
    <div className={mainStyles.container}>
      <div className={styles.portfolio__content}>
        <div className={styles.portfolio__title}>Portfolio</div>
        {portfolioItems.map((item, index) => (
          <figure className={styles.portfolio__img} key={index}>
            <img src={item.imageUrl} alt={item.altText} />
            <figcaption className={styles.portfolio__img_desc}>
              {item.description}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
