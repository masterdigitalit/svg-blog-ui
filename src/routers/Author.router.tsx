import React, { FC, PropsWithChildren } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Author from "../components/pages/Author/Author";

const AuthorRouter: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			

			<Routes>
				{/* <Route path="/camera" element={ <><Camera /></> } /> */}

				<Route
					path="/author/:url"
					element={
						<>
						{children}
							<Author />
						</>
					}
				/>
			</Routes>
		</>
	);
};

export default AuthorRouter;