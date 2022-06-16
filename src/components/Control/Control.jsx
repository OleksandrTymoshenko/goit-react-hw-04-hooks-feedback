import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';


function Control({ params, incrementValue }) {

  return (
    <div>
      {params.map(param => 
        <button 
          className={styles.btn} 
          key={param} 
          onClick={() => incrementValue(param)}>
          {param}
        </button>)}
    </div>
  );
};

Control.propTypes = {
  incrementValue: PropTypes.func,
  params: PropTypes.array
}

export default Control;