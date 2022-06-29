import styles from "./TopCourses.module.scss";

const TopCourses = (props) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
            {props.data.text.map((text) => (
              <div className={styles.text}>
                <span>{text.span}</span>
                <h2>{text.h2}</h2>
                <p>{text.p}</p>
              </div>
            ))}
        <div className={styles.row}>
          {props.data.cours.map(
            (elem) =>
              elem.top && (
                <div className={styles.blockCard}>
                  <div className={styles.card}>
                    <div className={styles.mainImg}>
                      <a href="/details">
                        <img className={styles.img} src={elem.img} />
                      </a>
                    </div>
                    <div className={styles.blockText}>
                      <div className={styles.textInBlock}>
                        <span>{elem.price}</span>
                      </div>
                      <div className={styles.tag}>
                        <a href="/details">{elem.tag}</a>
                      </div>
                      <h3 className={styles.h3}>
                        <a href="/details">{elem.h3}</a>
                      </h3>
                      <p className={styles.p}>{elem.p}</p>
                      <div className={styles.blockTutor}>
                        <div className={styles.tutorImg}>
                          <a href="/details">
                            <img src={elem.tutorImg} />
                            {elem.tutor}
                          </a>
                        </div>
                        <div className={styles.lessons}>
                          <a>
                            <img src={elem.svg} />
                            { elem.lessons.replace("Lessons", "") }
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default TopCourses;
