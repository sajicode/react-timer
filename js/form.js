class Form extends React.Component {
  render() {
    return React.createElement("div", null, "Duration:", React.createElement("input", {
      type: "text",
      className: "form-control",
      onChange: this.props.handleChange,
      placeholder: "123456",
      value: this.props.timeStart
    }), React.createElement("br", null), React.createElement("span", null, this.props.timeStart.length > 0 ? 'Timer Starts at : ' + this.props.timeStart + ' seconds' : ' '));
  }

}