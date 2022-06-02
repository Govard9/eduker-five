import styles from '../Footer.module.scss';

const FooterMenuRight = () => {
	return (
		<div className={styles.footer__widget}>
			<h3 class='footer__widget-title'>Links</h3>
			<div class='footer__widget-content'>
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
