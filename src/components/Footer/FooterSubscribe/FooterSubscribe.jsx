import styles from './FooterSubscribe.module.scss';

const FooterSubscribe = () => {
	return (
		<div className={styles.footer__subscribe_block}>
			<h3 className={styles.footer__subscribe_title}>
				Sign up for our newsletter
			</h3>
			<div className={styles.footer__subscribe}>
				<p>
					Receive weekly newsletter with educational materials,
					popular books and much more!
				</p>
				<form>
					<div className={styles.footer__subscribe_input}>
						<input type='text' placeholder='Email'></input>
						<button type='submit' className={styles.btn__subscribe}>
							Subscribe
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default FooterSubscribe;
