import React from 'react';
import { connect } from 'react-redux';
import {increaseAsync, decreaseAsync } from '../modules/counter';
import Counter from '../components/Counter';

const CounterContainer = ({number, increaseAsync, decreaseAsync}) => {
  return (
    <Counter number={number} onIncrease={increaseAsync} onDecrease={decreaseAsync} />
  );
};
// component와 module을 연결시키는 connect f의 첫번째 parameter는 state 두번째는 action
export default connect(
  state => ({
    number:state.counter
  }),
  {
    increaseAsync,
    decreaseAsync
  }
)(CounterContainer);