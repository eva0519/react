import {handleActions} from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

// 액션 타입을 선언
// 한요청당 세개를 만들어야함

const GET_POST = `sample/GET_POST`;
const GET_POST_SUCCESS = `sample/GET_POST_SUCCESS`;
const GET_POST_FAILURE = `sample/GET_POST_FAILURE`;

const GET_USERS = `sample/GET_USER`;
const GET_USERS_SUCCESS = `sample/GET_USER_SUCCESS`;
const GET_USERS_FAILURE = `sample/GET_USER_FAILURE`;

// thunk fucntion create
// thunk 함수 내부에서는 시작할 때, 성공했을 때, 실패했을때 다른 액션을 디스패치합니다.

export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

// 초기 상태를 선언합니다.
// 요청의 로딩 중 상태는 loading 이라는 객체에서 관리합니다.

const initialState = {
  loading: {
    GET_POST:false,
    GET_USERS:false
  },
  post:null,
  users:null
};

const sample = handleActions(
  {
    [GET_POST]: state => ({
      ...state,
      loading: {
        ...state.loading,          // 객체 속의 객체 불변성 유지
        GET_POST:true  // 요청 시작
      }
    }),
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST:false // 요청 완료
      },
      post: action.payload        // post에 const response = await api.getUsers();의 data가 들어옴
    }),
    [GET_POST_FAILURE]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: false  // 요청 완료 
      }
    }),
    [GET_USERS]: state => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USERS: true // 요청 시작
      }
    }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USERS:false // 요청 완료
      },
      users: action.payload
    }),
    [GET_USERS_FAILURE]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USERS:false // 요청 완료
      }
    })
  }, initialState
);

export default sample;