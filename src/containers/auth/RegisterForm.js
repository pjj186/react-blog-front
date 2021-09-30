import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeForm, register } from "../../modules/auth";
import AuthForm from "../../components/auth/AuthForm";
// Register Form 컨테이너

// react-redux 라이브러리의 useDispatch 와 useSelector Hook을 사용하면
// connect 함수 없이 디스패치와, state를 조회할 수 있다.
const RegisterForm = () => {
  const dispatch = useDispatch();
  // auth <= state.auth
  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.register, // username, password
    auth: auth.auth,
    authError: auth.authError,
  }));
  // 인풋 변경 이벤트 핸들러
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: "register",
        key: name,
        value,
      })
    );
  };

  // 폼 등록 이벤트 핸들러
  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password, passwordConfirm } = form;
    if (password !== passwordConfirm) {
      // 에러
      return;
    }
    dispatch(register({ username, password })); // 액션 디스패치
  };

  // 컴포넌트가 처음 렌더링 될 때 form을 초기화
  useEffect(() => {
    dispatch(initializeForm("login"));
  }, [dispatch]);

  // 회언가입 성공/실패 처리
  useEffect(() => {
    if (authError) {
      console.log("오류 발생");
      console.log(authError);
      return;
    }
    if (auth) {
      console.log("회원가입 성공");
      console.log(auth);
    }
  }, [auth, authError]);

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default RegisterForm;
