import styles from "./Header.module.scss";

const Header = () => {
	return (
		<div>
			<ul className={styles.main}>
				<li>
					<a>info@educal.com</a>
				</li>
				<li>
					<a>Moon ave, New York, 2020 NY US</a>
				</li>
				<li>
					<a>Login</a>
				</li>
				<li>
					<a>Contact Us</a>
				</li>
			</ul>
		</div>
	);
};

export default Header;
