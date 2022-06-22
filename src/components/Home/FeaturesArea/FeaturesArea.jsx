import styles from "./FeaturesArea.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";

const FeaturesArea = (props) => {
	return (
		<section className={styles.section}>
			<div className={styles.main}>
				{props.data.map((item) => (
					<div className={styles.featureBlocks}>
						<div className={styles.block}>
							<div className={styles.blockSvg}>
								<img src={item.svg} />
							</div>
							<div className={styles.text}>
								<h3>
									<NavLink to="/about">{item.h3}</NavLink>
								</h3>
								<p>{item.p}</p>
								<NavLink to="/about" className={styles.link}>
									Learn More
									<FontAwesomeIcon
										icon={faArrowRight}
										className={styles.iconArrow}
									/>
								</NavLink>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default FeaturesArea;
