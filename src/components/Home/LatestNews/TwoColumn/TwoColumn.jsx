import styles from "../TwoColumn/TwoColumn.module.scss";

const TwoColumn = (props) => {
  return (
    <div className={styles.blockNews}>
      <div className={styles.blockCard}>
        {props.data.news
          .sort((prev, next) => {
            if (prev.date - next.date) return -1;
          })
          .slice(1, 3)
          .map((elem) => (
            <div className={styles.card}>
              <div className={styles.cardImg}>
                <a href="">
                  <img className={styles.img} src={elem.img} />
                </a>
              </div>
              <div className={styles.blockText}>
                <div className={styles.category}>
                  <a href="/blog-details">{elem.category}</a>
                </div>
                <h3 className={styles.title}>
                  <a href="/blog-details">{elem.title}</a>
                </h3>
                <div className={styles.dateAndViews}>
                  <ul>
                    <li>
                      <span>
                        <img src="http://localhost:3000/img/svg/LatestNews/clockBlack.svg" />
                        <a href="">{elem.date}</a>
                      </span>
                    </li>
                    <li>
                      <span>
                        <img src="http://localhost:3000/img/svg/LatestNews/viewsBlack.svg" />
                        <a href="">{elem.views} Views</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TwoColumn;
