import React, { FC, useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import style from "../../../styles/components/pages/icon.module.scss";

const SkeletonComponent: FC = ({}) => {
	// function ArrayLength() {
	// 	let width = window.innerWidth;
	// 	if (width >= 1024 && width <= 1600) {
	// 		return 12;
	// 	} else if (width >= 768 && width <= 1024) {
	// 		return 10;
	// 	} else if (width >= 500 && width <= 768) {
	// 		return 8;
	// 	} else if (width <= 499) {
	// 		return 6;
	// 	}
	// }

	// console.log(ArrayLength());

	return (
		<>
						<div className={style['skeleton-icon']}>
					<div className={style.item}>
					<div className={style.title}>		<Skeleton height={"2vh"} width={"50%"}  /></div>

						<div className={style.description}>
						<Skeleton height={"2vh"} width={"100%"} className={style.title} />
						<Skeleton height={"2vh"} width={"100%"} className={style.title} />
						<Skeleton height={"2vh"} width={"100%"} className={style.title} />
						<Skeleton height={"2vh"} width={"100%"} className={style.title} />
						</div>
						</div>
						<div className={style.image}><Skeleton height={" calc(100vw - 40px)"} width={"100%"} className={style.title} /></div>
	
				<div className={style.alike}></div>
				</div>

		</>
	);
};


export default SkeletonComponent;
