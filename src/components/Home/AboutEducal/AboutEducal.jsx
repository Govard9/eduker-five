import styles from "./AboutEducal.module.scss";

const AboutEducal = () => {
	return (
		<section className={styles.main}>
			<div className={styles.container}>
				<div className={styles.contents}>
					<div>
						<div className={styles.allImg}>
							<div className={styles.blockShape}>
								<img
									src="/img/AboutEducal/about-shape-1.png"
									className={styles.shape1}
								/>
								<img
									src="/img/AboutEducal/about-shape-2.png"
									className={styles.shape2}
								/>
								<img
									src="/img/AboutEducal/about-shape-3.png"
									className={styles.shape3}
								/>
							</div>
							<div className={styles.imgAbout}>
								<div>
									<img src="/img/AboutEducal/about-1.jpg" />
								</div>
								<div className={styles.imgAbout3}>
									<img src="/img/AboutEducal/about-3.jpg" />
								</div>
							</div>
							<div>
								<img src="/img/AboutEducal/about-2.jpg" />
							</div>
						</div>
					</div>
					<div className={styles.mainText}>
						<div className={styles.textContainer}>
							<div className={styles.textBlock}>
								<span>About Educal</span>
								<h2>Degrees in Various academic Didciplines</h2>
								<p>
									Not only can university offer an environment
									rich in our social an cultural experiences.
								</p>
								<ul>
									<li> <i class="fa-solid fa-check"></i> Access to all our courses</li>
									<li> <i class="fa-solid fa-check"></i> Learn the latest skills</li>
									<li> <i class="fa-solid fa-check"></i> Upskill your organization</li>
								</ul>
								<div className={styles.btn}>
									<a href="/about">Read more</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutEducal;
