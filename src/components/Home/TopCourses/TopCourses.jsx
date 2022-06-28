import styles from "./TopCourses.module.scss";

const TopCourses = (props) => {
  return (
    <section className={styles.main}>
      <div>
        <div>
          <div>
            {props.data.text.map((text) => (
              <div className={styles.text}>
                <span>{text.span}</span>
                <h2>{text.h2}</h2>
                <p>{text.p}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.list}> </div>
      </div>
    </section>
  );
};

export default TopCourses;