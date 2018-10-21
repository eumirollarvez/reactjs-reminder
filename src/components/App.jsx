import React, { Component } from 'react';

export class App extends Component {
	render() {
		return (
			<div className="App">
				<div>
					Reminder
				</div>
				<div className="form-inline">
					<div className="form-group">
						<input
						className="form-control"
						placeholder="I have to ..."
						/>
					</div>
				</div>
				<button
				type=""
				className="btn btn-success"
				>
				Add Reminder
				</button>
			</div>
		);
	}
}

export default App;