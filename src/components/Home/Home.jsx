import BottomHeader from "../Header/BottomHeader/BottomHeader";
import TopHeader from "../Header/TopHeader/TopHeader";
import styles from "./Home.module.scss"
import Slider, { MySectionBlock } from "./Slider/Slider";


const Home = (props) => {
  return (
    <div>
      <TopHeader />
      <BottomHeader />
      <Slider data={props.data.slider} />
    </div>
  )
}

export default Home;