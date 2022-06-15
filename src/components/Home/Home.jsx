import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from "./Home.module.scss"
import Slider, { MySectionBlock } from "./Slider/Slider";

const Home = (props) => {
  return (
    <div>
      <Header />
      <Slider data={props.data.slider} />
      <Footer />
    </div>
  )
}

export default Home;