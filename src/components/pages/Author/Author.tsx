import React, { FC, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import style from "../../../styles/components/pages/author.module.scss";
import axios from "../../../api/axios";
import { Download } from "../../../scripts/Download";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonComponent from "./Skeleton";

type IIcons = {
	title: string;
	href: string;
	svg: string;
};

const Author: FC = ({}) => {
	const [Loading, setLoading] = useState<boolean>(true);
	const [Icons, setIcons] = useState<IIcons[]>([]);
	const { url } = useParams();

	useEffect(() => {
		// try {
		// 👇️ const data: GetUsersResponse
		axios
			.post("img/get-collection", {
				headers: {
					Accept: "application/json",
				},
				body: {
					title: url,
					length: undefined,
				},
			})
			.then((response) => {
				let intervalId = setInterval(myFunction, 1000);
				function myFunction() {
					setLoading(false);
					setIcons(response.data);
					clearInterval(intervalId);
				}
			});
	}, []);

	return (
		<>
			{Loading ? (
				<SkeletonComponent />
			) : (
				<div className={style.collection}>
					<div className={style.title}>Dazzle Line Icons Collection</div>
					<div className={style["info-title"]}>
						Free Dazzle Line Icons SVG Vectors and Icons. Dazzle Line Icons
						icons and vector packs for Sketch, Adobe XD, Figma and websites.
						Browse 1717 vector icons about Dazzle Line Icons term.
					</div>
					<div className={style.items}>
						{Icons.map((el) => (
							<div className={style.item}>
								<Link to={`/icon/${el.title}`}>
									<img
										src={`http://192.168.1.4:9999/static/${el.svg}`}
										loading="eager"
										alt=""
									/>
								</Link>
								<div className={style.action}>
									<svg
										width="21"
										height="21"
										viewBox="0 0 24 24"
										fill="none"
										stroke="#8899a4"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
									</svg>
									<svg
										onClick={(els) => [
											Download({
												path: `http://192.168.1.4:9999/static/${el.svg}`,
												title: el.title,
											}),
											els.preventDefault(),
										]}
										width="21"
										height="21"
										viewBox="0 0 24 24"
										fill="none"
										stroke="#8899a4"
										stroke-width="2"
										stroke-linecap="square"
										stroke-linejoin="arcs"
									>
										<path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"></path>
									</svg>
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</>
	);
};

export default Author;
