import styles from '../Footer.module.scss';

const FooterSubscribe = () => {
	return (
		<div className={styles.footer__widget}>
			<h3 class='footer__widget-title'>Sign up for our newsletter</h3>
			<div class='footer__subscribe'>
				<p>
					Receive weekly newsletter with educational materials,
					popular books and much more!
				</p>
				<form action='#'>
					<div class='footer__subscribe-input'>
						<input type='text' placeholder='Email'></input>
						<button type='submit' class='tp-btn-subscribe'>
							Subscribe
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default FooterSubscribe;
