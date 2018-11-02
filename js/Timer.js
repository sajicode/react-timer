class Timer extends React.Component {
  render() {
    if (this.props.timeLeft == null || this.props.timeLeft == 0) return React.createElement("div", null);
    return React.createElement("h1", null, "Time Left: ", this.props.timeLeft);
  }

}