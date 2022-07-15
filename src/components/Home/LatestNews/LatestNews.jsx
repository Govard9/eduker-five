import styles from "./LatestNews.module.scss";
import TwoColumn from "./TwoColumn/TwoColumn";

const LatestNews = (props) => {
  return (
    <div className={styles.section}>
      <div className={styles.shapeImg}>
        <img
          className={styles.shapeImg1}
          src="http://localhost:3000/img/LatestNews/blog-shape-1.png"
        />
        <img
          className={styles.shapeImg2}
          src="http://localhost:3000/img/LatestNews/blog-shape-2.png"
        />
        <img
          className={styles.shapeImg3}
          src="http://localhost:3000/img/LatestNews/blog-shape-3.png"
        />
        <img
          className={styles.shapeImg4}
          src="http://localhost:3000/img/LatestNews/blog-shape-4.png"
        />
      </div>

      <div className={styles.blockMain}>
        {props.data.text.map((elem) => (
          <div className={styles.blockText}>
            <span>{elem.span}</span>
            <h2>{elem.h2}</h2>
          </div>
        ))}
        <div className={styles.blockAll}>
          <div className={styles.blockNews}>
            <div className={styles.blockCard}>
              {props.data.news
                .sort((prev, next) => {
                  if (prev.date - next.date) return -1;
                })
                .slice(0, 1)
                .map((elem) => (
                  <div className={styles.card}>
                    <div className={styles.cardImg}>
                      <img src={elem.img} />
                    </div>
                    <div className={styles.cardText}>
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
                              <img src="http://localhost:3000/img/svg/LatestNews/clockWhite.svg" />
                              <a href="">{elem.date}</a>
                            </span>
                          </li>
                          <li>
                            <span>
                              <img src="http://localhost:3000/img/svg/LatestNews/viewsWhite.svg" />
                              <a href="">{elem.views} views</a>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <TwoColumn data={props.data} />
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
