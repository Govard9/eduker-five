import styles from "./CtaArea.module.scss";
import CtaArea2 from "./CtaArea2/CtaArea2";

const CtaArea = (props) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.blockAll}>
          <div className={styles.blockMain}>
            {props.data.map(
              (elem, index) =>
                index === 0 && (
                  <div className={styles.block}>
                    <div className={styles.blockImg}>
                      <span>
                        <img src={elem.img} />
                      </span>
                    </div>
                    <div className={styles.blockText}>
                      <h3>{elem.title}</h3>
                      <p>{elem.desc}</p>
                      <a href="/contact">{elem.btn}</a>
                    </div>
                    <CtaArea2 data={props.data} />
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaArea;
