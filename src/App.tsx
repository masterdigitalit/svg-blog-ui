import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/widgets/Header";
import Home from "./components/pages/Home/Home";
import './App.css'
import Search from "./components/elements/Search";

function App() {
	return (
		<div className="App">
			<Routes>
				{/* <Route path="/camera" element={ <><Camera /></> } /> */}

				<Route
					path="/"
					element={
						<>
							<Header /> <Home >
								<Search/>
							</Home>
						</>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;