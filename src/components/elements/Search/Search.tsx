import React, { FC } from "react";
import style from "../../../styles/components/elements/search.module.scss";
import { useParams, Link } from "react-router-dom";
import GetUrlParams from "./GetUrlParams";


const Search: FC = ({}) => {
	const { url } = useParams();
	console.log(url);
	const pathArray: string[] = GetUrlParams({'title': window.location.href})
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
				<div className={style.path}><Link to={'/'}><div className={style.item}>home</div></Link>{pathArray[0] && <Link to={`/${pathArray[0]}`}><div className={style.item}>{pathArray[0]}</div></Link>}{pathArray[1] &&(!url ? "" : <div className={style.item}>{url}</div>)}</div>
			</div>
		</>
	);
};
export default Search;
