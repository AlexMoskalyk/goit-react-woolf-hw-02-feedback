import React, { Component } from 'react';
import css from './FeedbackOptions.module.css';

const buttons = ['good', 'neutral', 'bad'];

class FeedbackOptions extends Component {
  render() {
    return (
      <div>
        {buttons.map((item, idx) => (
          <button
            onClick={this.props.handleStatisticsReaction}
            className={css.btn}
            key={idx}
            type="button"
            name={item}
          >
            {item}
          </button>
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;
