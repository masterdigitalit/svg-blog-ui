import React, { FC, useEffect, useRef, useState } from "react";
import style from "../../../styles/components/pages/home.module.scss";
import { Link } from "react-router-dom";
import { Onscroll } from "../../../scripts/Onscroll";
import { buttonsCollection } from "./config";

const StyleCollections: FC = () => {
	const [scrollTop, setScrollTop] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollTop(window.scrollY);
		};
		window.addEventListener("scroll", handleScroll);
	}, []);

	const divs = useRef<HTMLDivElement>(null);
	useEffect(() => {
		Onscroll({ ClassName: divs.current });
	}, [scrollTop]);

	return (
		<>
		<hr></hr>
			<div className={style['style-collections']}>
				<div className={style["hello-title"]}>Collection Styles</div>
				<div className={style["info-title"]}>A list of vector collections by their style categorization. Browse 30+ different SVG icons and vector styles by color type and join shape.
				</div>
				
				
				<div className={style["collection-items"]} ref={divs}>
					{buttonsCollection.map((el, key) => (
						<Link to={`/collection/${el.title}`}>
							<div className={style.item}>
								<div className={style.images}>
								<img src={require(`../../../static/svg/${el.svg}`)} alt=""  />
								</div>
								{el.title}
							</div>
						</Link>
					))}
				</div>
			</div>
		</>
	);
};
export default StyleCollections;