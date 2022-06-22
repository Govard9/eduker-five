import TopHeader from './TopHeader/TopHeader';
import BottomHeader from './BottomHeader/BottomHeader';

const Header = (props) => {
	return (
		<header>
			<TopHeader />
			<BottomHeader iconSearch={props.iconSearch} cours={props.cours} />
		</header>
	);
};

export default Header;
