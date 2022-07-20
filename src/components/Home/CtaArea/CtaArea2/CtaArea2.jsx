import styles from "./CtaArea2.module.scss";

const CtaArea2 = (props) => {
  return (
    <div className={styles.blockMain}>
      {props.data.map(
        (elem, index) =>
          index === 1 && (
            <div className={styles.block}>
              <div className={styles.blockImg}>
                <span>
                  <img src={elem.img} />
                </span>
              </div>
              <div className={styles.blockText}>
                <h3>{elem.title}</h3>
                <p>{elem.desc}</p>
                <a href="/contact" className={styles.btn1}>
                  {elem.btn}
                </a>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default CtaArea2;