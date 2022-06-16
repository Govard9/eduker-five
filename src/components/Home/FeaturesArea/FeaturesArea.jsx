import styles from "./FeaturesArea.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
									<a href="">{item.h3}</a>
								</h3>
								<p>{item.p}</p>
								<a href={item.link} className={styles.link}>
									Learn More
									<FontAwesomeIcon
										icon={faArrowRight}
										className={styles.iconArrow}
									/>
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default FeaturesArea;
