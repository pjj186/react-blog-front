import { createAction, handleActions } from "redux-actions";
import { createRequestActionTypes } from "../lib/createRequestSaga";
import produce from "immer";

// 액션 타입
const CHANGE_FIELD = "auth/CHANGE_FIELD";
const INITIALIZE_FORM = "auth/INITIALIZE_FORM";

// REGISTER 액션 타입
const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] =
  createRequestActionTypes("auth/REGISTER");

// LOGIN 액션 타입
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] =
  createRequestActionTypes("auth/LOGIN");

// 액션 생성 함수
// createAction을 사용함으로써 객체를 리턴하는 대신, 간단하게 액션 생성 함수 만들기
// 예 ) sampleAction(3) 를 호출하면 {type: SAMPLE_ACTION, payload : 3} 요런식으로 액션 객체를 리턴
export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form, // register, login
    key, // username, password, passwordConfirm
    value, // 실제 바꾸려는 값
  })
);

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form); // register, login

// 이 모듈의 state
const initialState = {
  register: {
    username: "",
    password: "",
    passwordConfirm: "",
  },

  login: {
    username: "",
    password: "",
  },
};

// 리듀서
const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value; // 예 : state.register.username을 바꾼다.
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
  },
  initialState
);

export default auth;
