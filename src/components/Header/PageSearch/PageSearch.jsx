import { useSelector } from "react-redux";
import { store } from "../../../reducers/index";

const state = store.getState();

const PageSearch = (props) => {

    const textSearch = useSelector(state => state.repos.text);

    const filterCourses = props.courses.filter(cours => {
    return cours.title.toLowerCase().includes(textSearch.toLowerCase());
})

  return (
    <div>
        { textSearch === '' || filterCourses.length <= 0 ? <h1>Not found</h1> : 
        filterCourses.map(cours => {
            return (
                <div>{ cours.title }</div>
            )
        }) } 
    </div>
  )
}

export default PageSearch;