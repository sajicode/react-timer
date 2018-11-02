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
					value={this.props.accNum}
				/>
				<br />
				<button className="btn btn-lg btn-primary" onClick={this.props.handleSubmit}>
					Start Timer
				</button>
				<span>{this.props.accNum.length > 0 ? 'You entered: ' + this.props.accNum : ''}</span>
			</div>
		);
	}
}
