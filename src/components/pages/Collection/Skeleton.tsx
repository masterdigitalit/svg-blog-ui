import React, { FC, useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import style from "../../../styles/components/pages/collection.module.scss";

const SkeletonComponent: FC = ({}) => {
	function ArrayLength() {
		let width = window.innerWidth;
		if (width >= 1024 && width <= 1600) {
			return 12;
		} else if (width >= 768 && width <= 1024) {
			return 10;
		} else if (width >= 500 && width <= 768) {
			return 8;
		} else if (width <= 499) {
			return 6;
		}
	}

	console.log(ArrayLength());

	return (
		<>
			<div className={style.collection}>
				<Skeleton height={"3vh"} width={"40%"} className={style.title} />
				<Skeleton height={"8vh"} className={style["info-title"]} />
				<div className={style.items}>
					{[...new Array(ArrayLength())].map((el) => (
						<Skeleton height={"20vh"} className={style.item} />
					))}
				</div>
			</div>
		</>
	);
};

export default SkeletonComponent;
