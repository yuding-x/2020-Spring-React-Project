import React, { Component } from "react";
import AlreadyLoginHead from "../../components/headerfooter/already_login_header.jsx";

import "./feedback.less";
import FeedbackForm from "../../components/feedbackForm/feedbackForm";

export default class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "dark",
      current: "feedback"
    };
  }

  changeTheme = value => {
    this.setState({
      theme: value ? "dark" : "light"
    });
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <div className="feedback-bg">
        <AlreadyLoginHead current="feedback"/>
        <FeedbackForm />
      </div>
    );
  }
}
