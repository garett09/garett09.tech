import { Component } from "react";

export default class Clock extends Component {
  constructor() {
    super();
    this.monthList = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    this.dayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    this.state = {
      hour_12: true,
      currentTime: new Date(),
    };
  }

  componentDidMount() {
    this.updateTime = setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 1 * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.updateTime);
  }

  render() {
    const { currentTime } = this.state;

    let day = this.dayList[currentTime.getDay()];
    let hour = currentTime.getHours();
    let minute = currentTime.getMinutes();
    let month = this.monthList[currentTime.getMonth()];
    let date = currentTime.getDate().toLocaleString();
    let meridiem = hour < 12 ? "AM" : "PM";

    if (this.state.hour_12 && hour > 12) hour -= 12;

    let displayTime =
      day +
      " " +
      month +
      " " +
      date +
      " " +
      hour +
      ":" +
      minute +
      " " +
      meridiem;

    return displayTime;
  }
}
