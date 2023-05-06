import React, { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  // increment = (item) => {
  //   this.setState(() => ({
  //     [item]: this.state[item] + 1,
  //   }))
  //   this.setState(perState => ({
  //     total: perState.good + perState.neutral + perState.bad,
  //   }))
  //   this.setState(perState => ({
  //     percentage: 100,
  //   }))
  // }

  onLeaveFeedback = value => {
    this.setState(prevState => {
      return { [value]: prevState[value] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    return parseInt((this.state.good / this.countTotalFeedback()) * 100)
  }
  
  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.onLeaveFeedback} />
        
        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} percentage={this.countPositiveFeedbackPercentage()}>
          {this.countTotalFeedback() < 1 && ( <Notification message="There is no feedback"/>
          )}
          </Statistics>
      </Section>
    )
  }
};
