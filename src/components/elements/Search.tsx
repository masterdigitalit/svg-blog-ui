import React, { FC } from "react";
import style from "../../styles/components/elements/search.module.scss";
import { useParams, Link } from "react-router-dom";


const Search: FC = ({}) => {
	const { url } = useParams();
	console.log(url);
	return (
		<>
			<div className={style.search}>
				<input
					type="text"
					defaultValue={!url ? "" : url}
					placeholder={!url ? "Search for vectors and icons..." : ""}
					enterKeyHint="search"
					
				/>
			
				<button>Искать</button>
				<div className={style.path}><Link to={'/'}><div className={style.item}>home</div></Link><Link to={'/collection'}><div className={style.item}>collections</div></Link>{!url ? "" : <div className={style.item}>{url}</div>}</div>
			</div>
		</>
	);
};
export default Search;
