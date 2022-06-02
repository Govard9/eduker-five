import styles from '../Footer.module.scss';

const FooterMenuLeft = () => {
	return (
		<div className={styles.footer__widget}>
			<h3 class='footer__widget-title'>Explore</h3>
			<div class='footer__widget-content'>
				<ul>
					<li>
						<a href='#'>About us</a>
					</li>
					<li>
						<a href='#'>Success story</a>
					</li>
					<li>
						<a href='#'>Courses</a>
					</li>
					<li>
						<a href='#'>About us</a>
					</li>
					<li>
						<a href='#'>Instructor</a>
					</li>
					<li>
						<a href='#'>Events</a>
					</li>
					<li>
						<a href='#'>Contact us</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default FooterMenuLeft;
