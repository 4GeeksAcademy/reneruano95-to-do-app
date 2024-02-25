import React from "react";
import ToDoApp from "./component/ToDoApp";

const App = () => {
	return (
		<>

			<div className="container h-100 d-flex flex-column align-items-center justify-content-center">
				<h1 className="mb-3">ToDo App</h1>
				<ToDoApp />
			</div>
		</>
	);
};

export default App;
