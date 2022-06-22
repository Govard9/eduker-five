import React, { useState } from "react";
import styles from "../Search/Search.module.scss";
import { NavLink } from "react-router-dom";
import { setQuery } from "../../../../reducers/reposReducers";
import { useDispatch } from "react-redux";

const Search = (props) => {

	const dispatch = useDispatch();

	const onQueryText = (event) => {
		dispatch(setQuery(event))
	}

	return (
		<div className={styles.main}>
			<div className={styles.input}>
				<form>
					  <input placeholder="Search..." onChange={ (event) => onQueryText(event.target.value) } />
					<NavLink to="/search">
						<button>
							{props.data.map((item) => (
								<img src={item.iconSearch}/>
							))}
						</button>
					</NavLink>
				</form>
			</div>
		</div>
	);
};

export default Search;
