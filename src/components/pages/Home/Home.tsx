import React, { FC, useEffect, useRef, useState, PropsWithChildren } from "react";
import style from "../../../styles/components/pages/home.module.scss";
import { Link } from "react-router-dom";
import { Onscroll } from "../../../scripts/Onscroll";
import InfoComponent from "./InfoContainer";
import InfoCollections from "./InfoCollections";
import StyleCollections from "./CollectionStyles";

const Home: FC<PropsWithChildren> = ({children}) => {
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
		{children}
			<div className={style.Home}>
				<div className={style["hello-title"]}>
					500.000+ Open-licensed SVG Vector and Icons
				</div>
				<div className={style["info-title"]}>
					Search, explore and edit the best-fitting free icons or vectors for
					your projects using a wide variety vector library. Download free SVG
					vectors and icons for commercial use.
				</div>
				<InfoComponent />
				<InfoCollections />
				<StyleCollections/>
			</div>
		</>
	);
};
export default Home;
