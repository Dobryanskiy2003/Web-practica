import styles from "./Skills.module.css";
import mainStyles from "../../styles/main.module.css";

import aeIcon from "../../img/ae.png";
import aiIcon from "../../img/ai.png";
import psIcon from "../../img/ps.png";
import figmaIcon from "../../img/figma.png";
import bStar from "../../img/blackstar.svg";
import gStar from "../../img/greystar.svg";

const skillItems = [
    {
        icon: aeIcon,
        altText: "aeIcon",
        program: "Adobe Photoshop",
        rating: [bStar, bStar, bStar, gStar, gStar]
    },
    {
        icon: aiIcon,
        altText: "aiIcon",
        program: "Adobe Illustrator",
        rating: [bStar, bStar, bStar, bStar, gStar]
    },
    {
        icon: psIcon,
        altText: "psIcon",
        program: "Adobe After Effects",
        rating: [bStar, bStar, bStar, bStar, gStar]
    },
    {
        icon: figmaIcon,
        altText: "figmaIcon",
        program: "Figma",
        rating: [bStar, bStar, bStar, bStar, gStar]
    }
];

const Skills = () => {
    return (
        <section className={styles.skills}>
            <div className={mainStyles.container}>
                <div className={styles.skills__content}>
                    <div className={styles.skills__title}>
                        Skills
                    </div>
                    <div className={styles.skills__subtitle}>
                        I work in such programs as
                    </div>
                    <div className={styles.skills__cards}>
                        {skillItems.map((item, index) => (
                            <div className={styles.skills__card} key={index}>
                                <div>
                                    <img src={item.icon} alt={item.altText} />
                                </div>
                                <p className={styles.skills__card_desc}>
                                    {item.program}
                                </p>
                                <div className={styles.skills__rate}>
                                    {item.rating.map((star, i) => (
                                        <img src={star} alt={i === 4 ? "greystar" : "blackstar"} key={i} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;