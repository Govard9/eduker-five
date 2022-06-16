import styles from "../Slider.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const SampleNextArrow = (props) => {
	const { onClick } = props;
	return (
		<div className={styles.btnRight} onClick={onClick}>
			<button>
				<i>
					<FontAwesomeIcon icon={faArrowRight} />
				</i>
			</button>
		</div>
	);
};

export const SamplePrevArrow = (props) => {
	const { onClick } = props;
	return (
		<div className={styles.btnLeft} onClick={onClick}>
			<button>
				<i>
					<FontAwesomeIcon icon={faArrowLeft} />
				</i>
			</button>
		</div>
	);
};

export const settingsArrow = {
	fade: true,
	nextArrow: <SampleNextArrow />,
	prevArrow: <SamplePrevArrow />,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
};