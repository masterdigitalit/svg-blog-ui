import React, { FC } from "react";
import style from "../../styles/components/widgets/header.module.scss";


const Header: FC = () => {
	return (
		<>
			<header className={style.header}>
				<div className={style.company}>svg project</div>
				<div className={style.navigate}>
					<div className={style.buttons}>
						<div className={style.button}>Home</div>
						<div className={style.button}>Catalog</div>
						<div className={style.button}>Support</div>
					</div>
			
				</div>
				<div className={style.right}>
				<div className={style.user}>
					<div className={style['user-icon']}>N</div>
					<div className={style['user-letter']}>M</div>
					</div>
					<label className={style.burger} htmlFor={"burger"}>
  <input type="checkbox" id="burger"/>
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
