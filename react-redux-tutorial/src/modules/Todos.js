const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 변경함
const INSERT = 'todos/INSERT'; // add todo
const TOGGLE = 'todos/TOGGLE'; // todo check or uncheck
const REMOVE = 'todos/REMOVE'; // todo remove

export const changeInput = input => ({
  type:CHANGE_INPUT,
  input
});

let id = 3; //insert가 호출될 때마다 1씩 더해집니다
export const insert = text => ({
  type: INSERT,
  todo: {
    id: id++,
    text,              // ES6 문법 text : text 를 줄여서 씀. 앞은 문자열 뒤에 text는 parameter값이다. 앞에 []를 넣으면 변수등을 받을수있다
    done: false
  }
});

export const toggle = id => ({
  type: TOGGLE,
  id
});

export const remove = id => ({
  type: REMOVE,
  id
});

const initialState = {
  input: '',
  todo: [{
    id: 1,
    text: '리덕스 기초 배우기',
    done: true
  },
  {
    id: 2,
    text: '리액트와 리덕스 사용하기',
    done: false
  }]
};

function todos(state = initialState, action) {
  switch(action.type) {
    case CHANGE_INPUT: 
      return {
        ...state,
        input: action.input
      };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo)
      }
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        )
      }
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };
    default:
      return state;
  }
}

export default todos;