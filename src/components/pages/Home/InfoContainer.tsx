import React, { FC, useState, useEffect } from "react";
import style from "../../../styles/components/pages/home.module.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const InfoComponent: FC = () => {
	const [Loading, SetLoading] = useState<boolean>(false);
	useEffect(() => {
		let intervalId = setInterval(myFunction, 1000);
		function myFunction() {
			if (!Loading) {
				SetLoading(true);
				clearInterval(intervalId);
			}
		}
	}, []);
	return (
		<>
			{!Loading ? (
				<div className={style.skeleton}>
					<Skeleton height={"20vh"} />
					<Skeleton height={"20vh"} />
					<Skeleton height={"20vh"} />
					<Skeleton height={"20vh"} />
					<Skeleton height={"20vh"} />
					<Skeleton height={"20vh"} />
				</div>
			) : (
				<div className={style["info-container"]}>
					<div className={style.item}>
						<div className={style.img}><img
							src={require("../../../static/svg/bockmark.svg").default}
							className={style.icon}
							alt=""
						/></div>
						
						<div className={style["item-title"]}>Easily Search and Find</div>
						<p>
							Using ML-powered search, find the suitable vector you are looking
							for easily
						</p>
					</div>
					<div className={style.item}>
					<div className={style.img}>
						<img
							src={require("../../../static/svg/scissors.svg").default}
							className={style.icon}
							alt=""
						/>
							</div>
						<div className={style["item-title"]}>Editing & Remixing</div>
						<p>
							Make basic changes on an icon or vector without needing a design
							software
						</p>
					</div>
					<div className={style.item}>
					<div className={style.img}>
						<img
							src={require("../../../static/svg/code.svg").default}
							className={style.icon}
							alt=""
						/>
							</div>
						<div className={style["item-title"]}>Optimized Vectors</div>
						<p>
							All served icons and vectors are optimized with our SVGO based
							compressor
						</p>
					</div>
					<div className={style.item}>
					<div className={style.img}>
						<img
							src={require("../../../static/svg/community.svg").default}
							className={style.icon}
							alt=""
						/>
							</div>
						<div className={style["item-title"]}>Community Powered</div>
						<p>
							From me to us. Share your work, help the community grow, and get
							link attributions
						</p>
					</div>
					<div className={style.item}>
					<div className={style.img}>
						<img
							src={require("../../../static/svg/money.svg").default}
							className={style.icon}
							alt=""
						/>
							</div>
						<div className={style["item-title"]}>Commercial Friendly</div>
						<p>
							Most icons and vectors are useable for your commercial projects
							without any royalties
						</p>
					</div>
					<div className={style.item}>
					<div className={style.img}>
						<img
							src={require("../../../static/svg/money.svg").default}
							className={style.icon}
							alt=""
						/>
							</div>
						<div className={style["item-title"]}>Always Free, No Premium</div>
						<p>
							We don't show premium content while you are trying to find free
							assets
						</p>
					</div>
				</div>
			)}
		</>
	);
};
export default InfoComponent;
