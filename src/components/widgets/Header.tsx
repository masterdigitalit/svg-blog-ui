import React, { FC } from "react";
import style from '../../styles/components/widgets/header.module.scss'
interface IHeader {}

const Header: FC = () => {
	return (<>
			<header className={style.header}>
					<div className="company"></div>
					<div className="navigate">
						<div className="buttons"></div>
					</div>
					
			</header>	
		</>
	)
};
export default Header;
