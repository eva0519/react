import React from 'react';
import { connect } from 'react-redux';
import { increase, decrease } from '../modules/counter';
import Counter from '../components/Counter';

const CounterContainer = ({number, increase, decrease}) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};
// component와 module을 연결시키는 connect f의 첫번째 parameter는 state 두번째는 action
export default connect(
  state => ({
    number:state.counter
  }),
  {
    increase,
    decrease
  }
)(CounterContainer);