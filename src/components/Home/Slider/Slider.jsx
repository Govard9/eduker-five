import styles from "./Slider.module.scss";
import { settingsArrow } from "../Slider/ArrowSlider/ArrowSlider";

import { NavLink } from "react-router-dom";

import Sliders from "react-slick";

const Slider = (props) => {
	return (
		<div className={`${styles.main} index_silder`}>
			<Sliders {...settingsArrow}>
				{props.data.map((item) => (
					<div className={styles.slider}>
						<div>
							<img src={item.img} />
						</div>

						<div className={styles.blockText}>
							<span className={"animate__animated animate__fadeInUp"}>
								{item.span}
							</span>
							<h2 className={"animate__animated animate__fadeInUp"}>
								{item.h2}
							</h2>
							<p className={"animate__animated animate__fadeInUp"}>
								{item.p}
							</p>
							<div className={`${styles.sliderBtn} animate__animated animate__fadeInUp`}>
								<NavLink to="/courses">Find Courses</NavLink>
							</div>
						</div>
					</div>
				))}
			</Sliders>
		</div>
	);
};

export default Slider;
