class TimerWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: null,
      timer: null,
      accountNumber: ''
    };
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.resumeTimer = this.resumeTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  startTimer(timeLeft) {
    clearInterval(this.state.timer);
    let timer = setInterval(() => {
      let timeLeft = this.state.timeLeft - 1;
      if (timeLeft == 0) clearInterval(timer);
      this.setState({
        timeLeft: timeLeft
      });
    }, 1000);
    return this.setState({
      timeLeft: timeLeft,
      timer: timer
    });
  }

  pauseTimer() {
    clearInterval(this.state.timer);
    this.setState({
      timer: null
    });
  }

  resumeTimer() {
    if (this.state.timeLeft > 0) {
      this.startTimer(this.state.timeLeft);
    }
  }

  resetTimer() {
    clearInterval(this.state.timer);
    this.setState({
      timer: null,
      timeLeft: null
    });
  }

  handleSubmit(event) {
    console.log(event.target);
  }

  handleChange(event) {
    console.log('Typed: ', event.target.value);
    this.setState({
      accountNumber: event.target.value.replace(/[^0-9]/gi, '')
    });
  }

  render() {
    return React.createElement("div", {
      className: "col"
    }, React.createElement("h2", {
      className: "text-primary text-center"
    }, "Countdown"), React.createElement("div", {
      className: "btn-group my-4",
      role: "group"
    }, React.createElement(Button, {
      time: "5",
      startTimer: this.startTimer
    }), React.createElement(Button, {
      time: "10",
      startTimer: this.startTimer
    }), React.createElement(Button, {
      time: "15",
      startTimer: this.startTimer
    })), React.createElement(Timer, {
      timeLeft: this.state.timeLeft
    }), React.createElement("audio", {
      id: "end-of-time",
      src: "flute.wav",
      preload: "auto"
    }), React.createElement(Form, {
      handleSubmit: this.handleSubmit,
      handleChange: this.handleChange,
      accNum: this.state.accountNumber
    }));
  }

}