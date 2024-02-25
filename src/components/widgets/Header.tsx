import React, { FC } from "react";
import style from "../../styles/components/widgets/header.module.scss";
import { Link } from "react-router-dom";

const Header: FC = () => {
	return (
		<>
			<header className={style.header}>
				<Link to={"/"}>
					{" "}
					<div className={style.company}>svg project</div>
				</Link>
				<div className={style.navigate}>
					<div className={style.buttons}>
						<Link to={"/"}>
							{" "}
							<div className={style.button}>Home</div>
						</Link>
						<Link to={"/"}>
							{" "}
							<div className={style.button}>Catalog</div>
						</Link>
						<Link to={"/"}>
							{" "}
							<div className={style.button}>Support</div>
						</Link>
					</div>
				</div>
				<div className={style.right}>
					<div className={style.user}>
						<div className={style["user-icon"]}>N</div>
						<div className={style["user-letter"]}>M</div>
					</div>
					<label className={style.burger} htmlFor={"burger"}>
						<input type="checkbox" id="burger" />
						<span></span>
						<span></span>
						<span></span>
					</label>
				</div>
			</header>
		</>
	);
};
export default Header;
