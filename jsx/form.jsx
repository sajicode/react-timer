class Form extends React.Component {
	render() {
		return (
			<div>
				Duration:
				<input
					type="text"
					className="form-control"
					onChange={this.props.handleChange}
					placeholder="123456"
					value={this.props.timeStart}
				/>
				<br />
				<span>
					{this.props.timeStart.length > 0 ? 'Timer Starts at : ' + this.props.timeStart + ' seconds' : ' '}
				</span>
			</div>
		);
	}
}
