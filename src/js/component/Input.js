import React, { useState } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

export const Input = props => {
	const [task, setTask] = useState("");
	const [arraytask, setArraytask] = useState([]);

	const addTask = e => {
		e.preventDefault();
		setArraytask([
			...arraytask,
			{ id: shortid.generate(), nametask: task }
		]);

		setTask("");
	};

	const deleteTask = item => {
		let result = arraytask.filter(function(e) {
			return e.id !== item;
		});
		setArraytask(result);
	};
	return (
		<div>
			<form onSubmit={addTask}>
				<div className="form-group">
					<label htmlFor="formGroupExampleInput"></label>
					<div className="form-row">
						<input
							type="text"
							className="form-control col-md-9"
							id="formGroupExampleInput"
							placeholder="what need&#39;s to be done?"
							onChange={e => setTask(e.target.value)}
							value={task}
						/>
						<button
							type="submit"
							className="btn btn-outline-primary ml-3">
							Add Task
						</button>
					</div>
				</div>
				<div>
					<ul className="list-group">
						{arraytask.map(item => (
							<li className="list-group-item" key={item.id}>
								{item.nametask}
								<button
									type="button"
									className="close float-right pt-1"
									onClick={() => {
										deleteTask(item.id);
									}}
									aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</li>
						))}
					</ul>
				</div>
			</form>
		</div>
	);
};

Input.propTypes = {};
