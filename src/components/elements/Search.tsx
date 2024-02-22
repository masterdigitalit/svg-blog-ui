import React, { FC } from "react";
import style from "../../styles/components/elements/search.module.scss";


const Search: FC = () => {
	return (
		<>
		<div className={style.search}>
			<input type="text" placeholder="Search for vectors and icons..."  />
			<button>Искать</button>
			</div>
		</>
	);
};
export default Search;
