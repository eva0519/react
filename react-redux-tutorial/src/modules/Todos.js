import {createAction, handleActions} from 'redux-actions';
import {produce} from 'immer';

const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 변경함
const INSERT = 'todos/INSERT'; // add todo
const TOGGLE = 'todos/TOGGLE'; // todo check or uncheck
const REMOVE = 'todos/REMOVE'; // todo remove

export const changeInput = createAction(CHANGE_INPUT, input => input);

let id = 3; //insert가 호출될 때마다 1씩 더해집니다
export const insert = createAction(INSERT, text => ({
  id: id++,
  text, // text : text 를 줄여서 씀. 앞은 키값 뒤에 text는 parameter값이다. 앞에 []를 넣으면 변수등을 받을수있다
  done: false,
}));

export const toggle = createAction(TOGGLE, id => id);

export const remove = createAction(REMOVE, id => id);

const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '리덕스 기초 배우기',
      done: true,
    },
    {
      id: 2,
      text: '리액트와 리덕스 사용하기',
      done: false,
    },
  ],
};

const todos = handleActions(
  {
    [CHANGE_INPUT] : (state,{payload: input}) =>
      produce(state, draft => {
        draft.input = input;
      }),
    [INSERT] : (state,{payload: todo}) => 
      produce(state, draft => {
        draft.todos.push(todo);
      }),
    [TOGGLE] : (state,{payload: id}) =>
      produce(state, draft => {
        const todo = draft.todos.find(todo => todo.id === id);
        todo.done = !todo.done;
      }),
    [REMOVE] : (state,{payload: id}) =>
      produce(state, draft => {
        const index = draft.todos.findIndex(todo => todo.id === id);
        draft.todos.splice(index, 1);
      }),
  }, 
  initialState,
)

export default todos;
