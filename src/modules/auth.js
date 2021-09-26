import { createAction, handleActions } from "redux-actions";

// 액션 타입
const SAMPLE_ACTION = "auth/SAMPLE_ACTION";

// 액션 생성 함수
// createAction을 사용함으로써 객체를 리턴하는 대신, 간단하게 액션 생성 함수 만들기
// 예 ) sampleAction(3) 를 호출하면 {type: SAMPLE_ACTION, payload : 3} 요런식으로 액션 객체를 리턴
export const sampleAction = createAction(SAMPLE_ACTION);

// 이 모듈의 state
const initialState = {};

// 리듀서
const auth = handleActions(
  {
    [SAMPLE_ACTION]: (state, action) => state,
  },
  initialState
);

export default auth;
