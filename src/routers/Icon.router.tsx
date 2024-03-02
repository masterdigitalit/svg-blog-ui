import React, { FC, PropsWithChildren } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Icon from "../components/pages/Icon/Icon";

const AuthorRouter: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			

			<Routes>
				{/* <Route path="/camera" element={ <><Camera /></> } /> */}

				<Route
					path="/icon/:url"
					element={
						<>
						{children}
							<Icon />
						</>
					}
				/>
			</Routes>
		</>
	);
};

export default AuthorRouter;