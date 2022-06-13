import {useState} from 'react';
import Control from './components/Control/Control';
import Section from './components/Section/Section';
import Statistic from './components/Statistic/Statistic';
import Notification from './components/Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positiveFeedBack, setPositiveFeedBack] = useState(0);
  const incrementValue = (param) => {
    switch (param) {
      case 'good':
        setGood ((prevState) => prevState + 1)
        break;
      case 'neutral':
        setNeutral ((prevState) => prevState + 1)
        
        break;
      case 'bad':
        setBad ((prevState) => prevState + 1)
        break;
    
      default:
        break;
    }
  }
    
  const countTotalFeedback = () => {
    setTotal(good + neutral + bad);

    const countPositiveFeedbackPercentage = () => {
      setPositiveFeedBack((good / total) * 100)
    }
      return (
        <div>
          <Section title="Please leave feedback">
            <Control
              incrementValue={incrementValue}
              params={['good', 'neutral', 'bad', 'total', 'positiveFeedBack']}
            />
          </Section>
          {total ? (
            <Section title="Statistics">
              <Statistic
                params={['good', 'neutral', 'bad']} 
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positiveFeedBack={positiveFeedBack}
              />
            </Section>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </div>
      );
    }
  }
