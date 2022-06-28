import { useEffect } from "react";
import { useState } from "react";
import styles from "./CampusLife.module.scss";


const CampusLife = (props) => {
  const [popup, togglePopUp] = useState(false);

  useEffect(() => {
    if (popup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [popup]);

  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <div className={styles.block}>
          {props.data.text.map((item) => (
            <div className={styles.text}>
              <span>{item.span}</span>
              <h2>{item.h2}</h2>
              <p>{item.p}</p>
              <div className={styles.blockBtn}>
                <a href="/about">More Research</a>
              </div>
            </div>
          ))}
          {props.data.img.map((item) => (
            <div className={styles.svg}>
              <img src={item.img} />
              {item.svg ? (
                <button
                  onClick={() => {
                    togglePopUp(!popup);
                  }}
                >
                  <img src={item.svg} />
                </button>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
      {popup && (
        <div className={styles.popup}>
          <div className={styles.popUpInner}>
            <button 
            className={styles.animatedPulse}
              onClick={() => {
                togglePopUp(!popup);
              }}
            >
              <img src="http://localhost:3000/img/svg/popUpClosed.svg" />
            </button>

            <iframe
              width="1280"
              height="720"
              src="https://www.youtube.com/embed/AjgD3CvWzS0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default CampusLife;
