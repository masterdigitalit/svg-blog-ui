import React, { FC, useEffect, useRef, useState } from "react";
import style from "../../../styles/components/pages/home.module.scss";
import { Link } from "react-router-dom";
import { Onscroll } from "../../../scripts/Onscroll";
import { buttons, collection } from "./config";

const InfoCollections: FC = () => {
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
			<div className={style.collections}>
				<div className={style["hello-title"]}>Vector Collections</div>
				<div className={style["info-title"]}>
					See our latest featured vector collections, and choose the desired
					style of vector collections to list from the tabs. Browse 6000+
					collections of SVG icons by color and style.
				</div>
				<div className={style.links}>
					{buttons.map((button) => (
						<Link to={`/collection/${button.title}`}>
							<div className={style["link-btn"]}>
								{" "}
								{button.svg && (
									<img
										src={require(`../../../static/svg/${button.svg}`)}
										alt=""
									/>
								)}{" "}
								{button.title}
							</div>
						</Link>
					))}
				</div>
				<hr></hr>
				<div className={style["collection-items"]} ref={divs}>
					{collection.map((el, key) => (
						<Link to={`/collection/${el.title}`}>
							<div className={style.item}>
								<div className={style.images}>
									{el.svg.map((svg) => (
										<img
											src={require(`../../../static/svg/${svg}`)}
											className={style.icon}
											alt=""
										/>
									))}
								</div>
								<div className={style["items-info"]}>
									<div className={style["item-title"]}>{el.title}</div>
									<div className={style["items-length"]}>{el.length}</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</>
	);
};
export default InfoCollections;
