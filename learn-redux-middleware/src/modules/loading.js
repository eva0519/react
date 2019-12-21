<<<<<<< HEAD
import { createAction, handleActions } from 'redux-actions';

const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

/*
  요청을 위한 액션 타입을 payload로 설정합니다. (예:'sample/GET_POST') 
*/

export const startLoading = createAction(
  START_LOADING,
=======
import { createAction, handleActions } from "redux-actions";

const START_LOADING = "loading/START_LOADING";
const FINISH_LOADING = "loading/FINISH_LOADING";
// 요청을 위한 액션타입을 payload로 설정합니다 (ex:'sample/GET_POST')

export const startLoading = createAction(
  START_LOADING,
  requestType => requestType // createAction 에서 payload를 원하는데로 정의
);

export const finishLoading = createAction(
  FINISH_LOADING,
>>>>>>> 174ee969d0a87c54b995d2db42d5c3e139ef275f
  requestType => requestType
);

const initialState = {};

const loading = handleActions(
<<<<<<< HEAD
=======
  // 첫 파라미터는 액션에 대한 업데이트 함수, 두번째는 초기값
>>>>>>> 174ee969d0a87c54b995d2db42d5c3e139ef275f
  {
    [START_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: true
    }),
<<<<<<< HEAD
    [FINISH_LOADING]: (state,action) => ({
      ...state,
      [action.payload]:false
=======
    [FINISH_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: false
>>>>>>> 174ee969d0a87c54b995d2db42d5c3e139ef275f
    })
  },
  initialState
);

<<<<<<< HEAD
export default loading;
=======
export default loading;
>>>>>>> 174ee969d0a87c54b995d2db42d5c3e139ef275f
