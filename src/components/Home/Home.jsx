import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import FeaturesArea from './FeaturesArea/FeaturesArea'
import Slider, { MySectionBlock } from "./Slider/Slider";
import AboutEducal from './AboutEducal/AboutEducal';

const Home = (props) => {
  return (
    <div>
      <Slider data={props.data.slider} />
      <FeaturesArea data={props.data.features} />
      <AboutEducal />
    </div>
  )
}

export default Home;