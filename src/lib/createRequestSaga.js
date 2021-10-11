import { call, put } from "redux-saga/effects";
import { startLoading, finishLoading } from "../modules/loading";
// API 요청 및 로딩 등 비동기 작업을 담당하는 파일

export const createRequestActionTypes = (type) => {
  // 액션타입 세 개를 한꺼번에 만드는 함수
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};

export default function createRequestSaga(type, request) {
  // type : REGISTER, LOGIN
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  // 디스패치 : put
  return function* (action) {
    // 액션 생성자를 디스패치하면 그 액션정보가 여기 있는 action에 들어온다고 생각!
    yield put(startLoading(type)); // 로딩 시작
    try {
      // request는 API 요청 함수가 들어가는데, 이 함수의 반환값은 reponse(성공), error(실패) 두 가지로 나뉜다.
      // 그 반환값을 response에 저장하는것!
      const response = yield call(request, action.payload); // payload = {username, password}
      yield put({
        // put : 디스패치
        type: SUCCESS,
        payload: response.data,
        meta: response, // meta 값을 response로 넣어주면 나중에 HTTP 헤더 및 상태 코드를 쉽게 조회
      });
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      });
    }
    yield put(finishLoading(type)); // 로딩 끝
  };
}
