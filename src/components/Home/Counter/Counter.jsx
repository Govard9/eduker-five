import styles from "./Counter.module.scss";
import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";

const Counter = (props) => {
	const { ref, inView } = useInView({
		/* react-intersection-observer options */
		triggerOnce: true,
	});

	return (
		<section className={styles.main}>
			<div className={styles.container}>
				<div className={styles.containerCounter}>
					<div className={styles.blockCounter}>
						{props.data.map((elem) => (
							<div className={styles.counterItem}>
								<div className={styles.counterSvg}>
									<img src={elem.svg} />
								</div>
								<div className={styles.counterText} ref={ref}>
									{inView ? (
										<span className={styles.count}>
											<CountUp
												start={0}
												end={elem.count}
												duration={5}
											/>
										</span>
									) : null}
									<span className={styles.plus}>+</span>
									<p>{elem.text}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Counter;
