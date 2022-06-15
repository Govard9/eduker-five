import styles from './FooterSocial.module.scss';

const FooterSocial = () => {
	return (
		<div className={styles.footer__social}>
			<h4>Follow Us</h4>
			<ul>
				<li>
					<a href='#' target='_blank'>
						<i class='fa-brands fa-vk'></i>
					</a>
				</li>
				<li>
					<a href='#' target='_blank'>
						<i class='fa-brands fa-instagram-square'></i>
					</a>
				</li>
				<li>
					<a href='#' target='_blank'>
						<i class='fa-brands fa-youtube'></i>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default FooterSocial;
