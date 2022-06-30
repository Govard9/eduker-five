import styles from "./DiscoverResearch.module.scss";

const DiscoverResearch = (props) => {
  return (
    <div className={styles.section}>
      <div className={styles.shapeImg}>
        <img
          className={styles.shape1}
          src="http://localhost:3000/img/DiscoverResearch/research-shape-1.png"
        />
        <img
          className={styles.shape2}
          src="http://localhost:3000/img/DiscoverResearch/research-shape-2.png"
        />
        <img
          className={styles.shape3}
          src="http://localhost:3000/img/DiscoverResearch/research-shape-3.png"
        />
      </div>

      <div className={styles.mainBlock}>
        {props.data.text.map((item) => (
          <div className={styles.blockText}>
            <span>{item.span}</span>
            <h2>{item.h2}</h2>
          </div>
        ))}

        <div className={styles.blockResearch}>
          {props.data.imgResearch.map((item) => (
            <div className={styles.paddingCard}>
              <div className={styles.card}>
                <div className={styles.blockImg}>
                  <img src={item.img} />
                </div>
                <div className={styles.imgText}>
                  <h3>{item.h3}</h3>
                  <p>{item.p}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverResearch;
