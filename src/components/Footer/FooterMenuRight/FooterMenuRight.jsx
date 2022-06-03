import styles from '../Footer.module.scss';

const FooterMenuRight = () => {
	return (
		<div className={styles.footer__menu}>
			<h3 className={styles.footer__menu_title}>Links</h3>
			<div className={styles.footer__widget_content}>
				<ul>
					<li>
						<a href='#'>News &amp; Blogs</a>
					</li>
					<li>
						<a href='#'>Library</a>
					</li>
					<li>
						<a href='#'>Gallery</a>
					</li>
					<li>
						<a href='#'>Terms of service</a>
					</li>
					<li>
						<a href='#'>Membership</a>
					</li>
					<li>
						<a href='#'>Career</a>
					</li>
					<li>
						<a href='#'>Partners</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default FooterMenuRight;
