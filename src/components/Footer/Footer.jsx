import logo from '../../assets/img/logo.png';
import styles from './Footer.module.scss';
import { NavLink } from 'react-router-dom';
import FooterSocial from './FooterSocial/FooterSocial';
import FooterMenuLeft from './FooterMenuLeft/FooterMenuLeft';
import FooterMenuRight from './FooterMenuRight/FooterMenuRight';
import FooterSubscribe from './FooterSubscribe/FooterSubscribe';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__top}>
				<div className={styles.footer__container}>
					<div className={styles.footer__top_inner}>
						<div className={styles.footer__logo_social}>
							<div className={styles.footer__logo_social__inner}>
								<div className={styles.footer__logo}>
									<NavLink to='/'>
										<img src={logo} alt=''></img>
									</NavLink>
								</div>
								<div className={styles.footer__info}>
									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipisc ing elit. Nunc maximus, nulla
										utlaoki comm odo sagittis.
									</p>
									<FooterSocial />
								</div>
							</div>
						</div>
						<FooterMenuLeft />
						<FooterMenuRight />
						<FooterSubscribe />
					</div>
				</div>
			</div>
			<div className={styles.footer__bottom}>
				<div className={styles.footer__container}>
					<div className={styles.footer__bottom_inner}>
						<div className={styles.footer__copyright}>
							<p>© 2022 Educal. All Rights Reserved</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
