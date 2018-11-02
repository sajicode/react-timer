class Form extends React.Component {
  render() {
    return React.createElement("div", null, "Duration:", React.createElement("input", {
      type: "text",
      className: "form-control",
      onChange: this.props.handleChange,
      placeholder: "123456",
      value: this.props.accNum
    }), React.createElement("br", null), React.createElement("button", {
      className: "btn btn-lg btn-primary",
      onClick: this.props.handleSubmit
    }, "Start Timer"), React.createElement("span", null, this.props.accNum.length > 0 ? 'You entered: ' + this.props.accNum : ''));
  }

}