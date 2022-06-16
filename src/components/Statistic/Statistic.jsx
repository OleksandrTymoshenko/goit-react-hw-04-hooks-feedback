import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

function Statistic(props) {

  return (
    <div className={styles.statistic}>
      {props.params.map((paramName, index) => 
        <label 
          key={index} 
          className={styles.label}>
            {paramName}: <span>{props[paramName]}</span>
        </label>)}
      <div>
        PositiveFeedback: {Math.round(props.positiveFeedBack)} %
      </div>
    </div>
  );
};

Statistic.propTypes = {
  params: PropTypes.array
};

export default Statistic;