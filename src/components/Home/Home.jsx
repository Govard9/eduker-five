import FeaturesArea from './FeaturesArea/FeaturesArea'
import Slider, { MySectionBlock } from "./Slider/Slider";
import AboutEducal from './AboutEducal/AboutEducal';
import Counter from './Counter/Counter';
import TopCourses from './TopCourses/TopCourses';
import CampusLife from './CampusLife/CampusLife';
import DiscoverResearch from './DiscoverResearch/DiscoverResearch';
import LatestNews from './LatestNews/LatestNews';
import CtaArea from './CtaArea/CtaArea';

const Home = (props) => {
  return (
    <div>
      <Slider data={props.data.slider} />
      <FeaturesArea data={props.data.features} />
      <AboutEducal />
      <Counter data={props.data.homeCounter} />
      <TopCourses data={props.data.courses} />
      <CampusLife data={props.data.campusLife} />
      <DiscoverResearch data={props.data.discoverResearch} />
      <LatestNews data={props.data.latestNews} />
      <CtaArea data={props.data.CtaArea} />
    </div>
  )
}

export default Home;