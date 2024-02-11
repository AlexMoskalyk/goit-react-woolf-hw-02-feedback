import React, { Component } from 'react';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Section from './section/Section';
import Statistics from './statistics/Statistics';
import css from '../App.module.css';
import Notification from './notification/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleStatisticsReaction = evt => {
    const { name } = evt.target;

    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    return Object.keys(this.state).reduce(
      (acc, key) => acc + this.state[key],
      0
    );
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback > 0
      ? Math.round((this.state.good / totalFeedback) * 100)
      : 0;
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const PositivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            handleStatisticsReaction={this.handleStatisticsReaction}
          />
        </Section>
        {totalFeedback ? (
          <>
            <Section title="Statistics">
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={totalFeedback}
                positivePercentage={PositivePercentage}
              />
            </Section>
          </>
        ) : (
          <Notification title={'There is no feedback'} />
        )}
      </div>
    );
  }
}
