import React, { Component } from "react";

interface ClockProps {
  deadline: string;
}

interface ClockState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

class Clock extends Component<ClockProps, ClockState> {
  constructor(props: ClockProps) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  componentDidMount() {
    this.getTimeUntil(this.props.deadline);
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  leading0(num: number): string {
    return num < 10 ? "0" + num : num.toString();
  }

  getTimeUntil(deadline: string): void {
    const time = Date.parse(deadline) - Date.parse(new Date().toString());
    if (time < 0) {
      this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.setState({ days, hours, minutes, seconds });
    }
  }

  componentWillUnmount() {
    // Fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state, callback) => {
      return;
    };
  }

  render() {
    return (
      <div>
        <div className="Clock-days">{this.leading0(this.state.days)}d</div>
        <div className="Clock-hours">
          {this.leading0(this.state.hours)}h
        </div>
        <div className="Clock-minutes">
          {this.leading0(this.state.minutes)}m
        </div>
        <div className="Clock-seconds">
          {this.leading0(this.state.seconds)}s
        </div>
      </div>
    );
  }
}

export default Clock;
