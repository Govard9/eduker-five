import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import FeaturesArea from './FeaturesArea/FeaturesArea'
import Slider, { MySectionBlock } from "./Slider/Slider";

const Home = (props) => {
  return (
    <div>
      <Header />
      <Slider data={props.data.slider} />
      <FeaturesArea data={props.data.features} />
      <Footer />
    </div>
  )
}

export default Home;